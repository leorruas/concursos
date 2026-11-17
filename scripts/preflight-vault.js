#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const checks = [
  // O preflight público replica as verificações públicas do CI. Os testes
  // que leem sessões, prioridades e ledgers reais são executados no cofre.
  ['Catálogo de flashcards', 'scripts/validate-flashcards.js'],
  ['Sincronização autenticada de prioridades', 'scripts/test-priority-sync.js'],
  ['Sincronização autenticada de progresso', 'scripts/test-progress-sync.js'],
  ['Wikilinks em tabelas Markdown', 'scripts/test-wikilinks-tables.js'],
  ['Identidade e compatibilidade dos artigos', 'scripts/test-article-identity.js'],
  ['Continuidade e simulados da Câmara', 'scripts/test-camara-questions.js'],
  ['Integridade do banco de expansão', 'scripts/test-camara-expansion.js'],
  ['Dificuldade dos itens do piloto', 'scripts/test-camara-difficulty.js'],
  ['Seções teóricas do banco', 'scripts/audit-camara-reference-headings.js'],
  ['Catálogo de matérias por concurso', 'scripts/test-contest-catalog.js'],
  ['Filtro da grade por concurso', 'scripts/test-contest-home-filter.js'],
  ['Filtro de artigos e seletor por concurso', 'scripts/test-contest-article-filter.js'],
  ['Busca contextual por concurso', 'scripts/test-contest-search-scope.js'],
  ['Invariantes públicos', 'scripts/validate-vault-invariants.js', '--public-only'],
  ['Referências editoriais', 'scripts/auditar-referencias-editoriais.mjs', '--strict'],
  ['Idempotência da ingestão', 'scripts/test-ingestion-idempotency.js'],
  ['Política pedagógica de questões', 'scripts/test-question-ingestion-policy.js'],
  ['Teste do ledger anti-repetição', 'scripts/test-question-ledger.js'],
  ['Política de propagação', 'scripts/test-ingestion-propagation-policy.js'],
  ['Propagação de simulados concluídos', 'scripts/test-simulado-propagation.js'],
  ['Home sem desempenho em provas', 'scripts/test-home-without-provas.js'],
  ['Transações multi-arquivo', 'scripts/test-changeset-transaction.js'],
  ['Build do site público', 'scripts/build-site.js'],
  ['Privacidade do artefato público', 'scripts/test-public-privacy.js'],
  ['Publicação dos flashcards', 'scripts/validate-flashcards.js', '--site'],
  ['Recomendações e filtros das questões', 'scripts/test-quiz-insights.cjs']
];

console.log('=== PREFLIGHT DO VAULT ===');
console.log('Objetivo: provar que o estado atual está íntegro antes de iniciar uma mudança não corretiva.\n');

for (const [label, script, ...args] of checks) {
  console.log(`\n--- ${label} ---`);
  const result = spawnSync(process.execPath, [script, ...args], {
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
