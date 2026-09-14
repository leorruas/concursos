#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { IngestionEngine } from './ingest-vault.js';
import {
  calcularFingerprintIngestao,
  carregarLedger,
  localizarFingerprint
} from './ingestion-idempotency.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const ledgerPath = path.join(rootDir, 'data/ingestoes-processadas.json');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: '00 inbox/00 ingestão.md',
    type: null,
    concurso: 'dataprev-2026',
    dryRun: true,
    apply: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--input' && args[i + 1]) options.input = args[++i];
    else if (arg === '--type' && args[i + 1]) options.type = args[++i];
    else if (arg === '--concurso' && args[i + 1]) options.concurso = args[++i];
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

  // Fail closed: o motor legado ainda não possui paridade entre o plano que
  // declara e todos os arquivos que efetivamente grava. Enquanto a propagação
  // transacional completa não estiver implementada, --apply pelo wrapper seria
  // capaz de produzir um estado parcial e, pior, anunciar sucesso.
  if (options.apply) {
    const previewEngine = new IngestionEngine({
      ...options,
      apply: false,
      dryRun: true
    });
    const report = await previewEngine.execute();

    throw new Error(
      `APPLY AUTOMÁTICO BLOQUEADO POR SEGURANÇA: a ingestão foi validada em dry-run como ` +
      `[${String(report.classification || 'desconhecida').toUpperCase()}], mas o motor legado ainda não ` +
      `garante a propagação transacional para todas as camadas obrigatórias. ` +
      `Use o plano do dry-run para aplicar a atualização completa e deixe o contrato de mudança do CI ` +
      `validar Avanços locais/globais, saturação, projeto, erros, dashboard e publicação. ` +
      `O --apply será reabilitado somente quando o propagador completo passar pelos testes de paridade.`
    );
  }

  const engine = new IngestionEngine({
    ...options,
    apply: false,
    dryRun: true
  });
  await engine.execute();
  console.log(`✓ Fingerprint candidato: ${fingerprint.slice(0, 12)}… (não registrado em dry-run).`);
}

main().catch((err) => {
  console.error(`\n[ERRO NA INGESTÃO SEGURA]: ${err.message}`);
  process.exit(1);
});
