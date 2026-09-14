#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const checks = [
  ['Invariantes globais', 'scripts/validate-vault-invariants.js'],
  ['Integridade de dados e links', 'scripts/validate-integrity.js'],
  ['Idempotência da ingestão', 'scripts/test-ingestion-idempotency.js'],
  ['Política pedagógica de questões', 'scripts/test-question-ingestion-policy.js'],
  ['Política de propagação', 'scripts/test-ingestion-propagation-policy.js'],
  ['Transações multi-arquivo', 'scripts/test-changeset-transaction.js']
];

console.log('=== PREFLIGHT DO VAULT ===');
console.log('Objetivo: provar que o estado atual está íntegro antes de iniciar uma mudança não corretiva.\n');

for (const [label, script] of checks) {
  console.log(`\n--- ${label} ---`);
  const result = spawnSync(process.execPath, [script], {
    cwd: rootDir,
    stdio: 'inherit'
  });
  if (result.status !== 0) {
    console.error(`\nFALHA DE PREFLIGHT: ${label}.`);
    console.error('O vault está em estado vermelho. Só são permitidas mudanças corretivas até este preflight voltar a passar.');
    process.exit(result.status || 1);
  }
}

console.log('\nSUCESSO: preflight aprovado. O estado atual do vault está apto a receber uma nova operação.');
