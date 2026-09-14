#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { IngestionEngine } from './ingest-vault.js';
import {
  calcularFingerprintIngestao,
  carregarLedger,
  localizarFingerprint
} from './ingestion-idempotency.js';
import { aplicarChangeSet, fileSha256 } from './changeset-transaction.js';
import {
  extrairDisciplinaDaEntrada,
  validarManifestoPropagacao
} from './ingestion-propagation-policy.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const ledgerRelPath = 'data/ingestoes-processadas.json';
const ledgerPath = path.join(rootDir, ledgerRelPath);

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: '00 inbox/00 ingestão.md',
    type: null,
    concurso: 'dataprev-2026',
    dryRun: true,
    apply: false,
    changeset: null
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--input' && args[i + 1]) options.input = args[++i];
    else if (arg === '--type' && args[i + 1]) options.type = args[++i];
    else if (arg === '--concurso' && args[i + 1]) options.concurso = args[++i];
    else if (arg === '--changeset' && args[i + 1]) options.changeset = args[++i];
    else if (arg === '--apply') {
      options.apply = true;
      options.dryRun = false;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
      options.apply = false;
    }
  }

  return options;
}

function runValidator(script) {
  execFileSync('node', [script], { cwd: rootDir, stdio: 'inherit' });
}

function carregarManifesto(relPath) {
  const fullPath = path.resolve(rootDir, relPath);
  if (!fs.existsSync(fullPath)) throw new Error(`Change set não encontrado: ${relPath}`);
  const manifest = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (!manifest || manifest.version !== 1 || !Array.isArray(manifest.operations)) {
    throw new Error('Change set inválido: esperado { version: 1, operations: [...] }.');
  }
  return manifest;
}

function adicionarOperacaoSistema(manifest, operation) {
  if (manifest.operations.some((op) => String(op.path).replace(/\\/g, '/') === operation.path)) {
    throw new Error(`Change set não deve declarar diretamente a operação reservada do sistema: ${operation.path}`);
  }
  manifest.operations.push(operation);
}

async function preview(options) {
  const engine = new IngestionEngine({
    ...options,
    apply: false,
    dryRun: true
  });
  return engine.execute();
}

async function main() {
  const options = parseArgs();
  const inputPath = path.join(rootDir, options.input);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Arquivo de entrada não encontrado: ${options.input}`);
  }

  const content = fs.readFileSync(inputPath, 'utf8');
  const fingerprint = calcularFingerprintIngestao({
    content,
    concurso: options.concurso
  });

  const ledger = carregarLedger(ledgerPath);
  const previous = localizarFingerprint(ledger, fingerprint);

  if (previous) {
    const message = `INGESTÃO JÁ PROCESSADA: fingerprint ${fingerprint.slice(0, 12)}…` +
      ` | primeira aplicação: ${previous.processedAt || 'data desconhecida'}` +
      ` | entrada: ${previous.input || 'desconhecida'}`;
    if (options.apply) throw new Error(message);
    console.warn(`! ${message}`);
    console.warn('! Dry-run permitido apenas para inspeção; nova aplicação permanece bloqueada.');
  }

  const report = await preview(options);
  console.log(`✓ Fingerprint candidato: ${fingerprint.slice(0, 12)}…`);

  if (!options.apply) return;

  if (!options.changeset) {
    throw new Error(
      'APPLY BLOQUEADO: --apply exige --changeset <arquivo.json>. ' +
      'O change set deve conter todos os destinos obrigatórios da ingestão e os hashes de precondição.'
    );
  }

  const manifest = carregarManifesto(options.changeset);
  if (manifest.ingestionFingerprint !== fingerprint) {
    throw new Error(
      `Fingerprint do change set não corresponde à entrada atual. ` +
      `esperado=${fingerprint}, recebido=${manifest.ingestionFingerprint || '(ausente)'}`
    );
  }
  if (manifest.concurso && manifest.concurso !== options.concurso) {
    throw new Error(`Concurso do change set (${manifest.concurso}) difere da execução (${options.concurso}).`);
  }

  const disciplina = extrairDisciplinaDaEntrada(content);
  const hasErrors = Array.isArray(report.clinicalErrors) && report.clinicalErrors.length > 0;
  validarManifestoPropagacao(manifest, {
    classification: report.classification,
    disciplina,
    hasErrors
  });

  // O ledger participa da MESMA transação dos demais arquivos. Assim não existe
  // estado "dados escritos sem fingerprint" nem "fingerprint sem dados".
  const nextLedger = [
    ...ledger,
    {
      fingerprint,
      input: options.input,
      concurso: options.concurso,
      classification: report.classification,
      processedAt: new Date().toISOString()
    }
  ];
  adicionarOperacaoSistema(manifest, {
    op: 'replace',
    path: ledgerRelPath,
    expectedSha256: fileSha256(ledgerPath),
    content: `${JSON.stringify(nextLedger, null, 2)}\n`
  });

  // A inbox canônica só é limpa se TODO o change set e TODAS as validações
  // passarem. Em caso de falha, o rollback também restaura a entrada.
  if (options.input === '00 inbox/00 ingestão.md') {
    const hoje = new Date().toISOString().slice(0, 10);
    adicionarOperacaoSistema(manifest, {
      op: 'replace',
      path: options.input,
      expectedSha256: fileSha256(inputPath),
      content:
        `---\n` +
        `title: "Ingestão"\n` +
        `type: "inbox"\n` +
        `status: "limpo"\n` +
        `created: 2026-04-25\n` +
        `updated: ${hoje}\n` +
        `---\n\n# Ingestão\n`
    });
  }

  const result = aplicarChangeSet(rootDir, manifest, {
    afterApply: () => {
      runValidator('scripts/validate-vault-invariants.js');
      runValidator('scripts/validate-integrity.js');
    }
  });

  console.log(`✓ INGESTÃO TRANSACIONAL CONCLUÍDA: ${result.changed.length} arquivo(s).`);
  console.log(`✓ Fingerprint registrado atomicamente: ${fingerprint.slice(0, 12)}…`);
}

main().catch((err) => {
  console.error(`\n[ERRO NA INGESTÃO SEGURA]: ${err.message}`);
  process.exit(1);
});
