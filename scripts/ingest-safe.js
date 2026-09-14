#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { IngestionEngine } from './ingest-vault.js';
import {
  calcularFingerprintIngestao,
  carregarLedger,
  localizarFingerprint,
  registrarFingerprintAtomico
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
  // O fingerprint é intencionalmente independente de --type: a mesma evidência
  // não pode ser reingerida apenas mudando a classificação manual.
  const fingerprint = calcularFingerprintIngestao({
    content,
    type: '',
    concurso: options.concurso
  });

  const ledger = carregarLedger(ledgerPath);
  const previous = localizarFingerprint(ledger, fingerprint);

  if (previous) {
    const message = `INGESTÃO JÁ PROCESSADA: fingerprint ${fingerprint.slice(0, 12)}…` +
      ` | primeira aplicação: ${previous.processedAt || 'data desconhecida'}` +
      ` | entrada: ${previous.input || 'desconhecida'}`;

    if (options.apply) {
      throw new Error(message);
    }

    console.warn(`! ${message}`);
    console.warn('! Dry-run permitido apenas para inspeção; --apply será bloqueado enquanto o fingerprint existir no ledger.');
  }

  const engine = new IngestionEngine(options);
  const report = await engine.execute();

  if (options.apply) {
    const entry = {
      fingerprint,
      input: options.input,
      concurso: options.concurso,
      classification: report.classification,
      processedAt: new Date().toISOString()
    };

    const result = registrarFingerprintAtomico(ledgerPath, entry);
    if (!result.added) {
      throw new Error('Falha de idempotência: fingerprint apareceu no ledger durante a aplicação. Verificar concorrência de ingestão.');
    }
    console.log(`✓ Fingerprint registrado no ledger: ${fingerprint.slice(0, 12)}…`);
  }
}

main().catch((err) => {
  console.error(`\n[ERRO NA INGESTÃO SEGURA]: ${err.message}`);
  process.exit(1);
});
