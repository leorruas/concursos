#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let errors = 0;
let warnings = 0;

function fail(message) {
  console.error(`✗ INVARIANTE: ${message}`);
  errors++;
}

function ok(message) {
  console.log(`✓ ${message}`);
}

function warn(message) {
  console.warn(`! AVISO: ${message}`);
  warnings++;
}

function rel(fullPath) {
  return path.relative(rootDir, fullPath).replace(/\\/g, '/');
}

function exists(relPath) {
  return fs.existsSync(path.join(rootDir, relPath));
}

function read(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
}

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else if (entry.isFile()) result.push(full);
  }
  return result;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  return data;
}

console.log('=== INVARIANTE 1: NOTAS CANÔNICAS INDEXADAS ===');
const materiasDir = path.join(rootDir, '3 - Materias');
const indexContent = read('index.md');
const notas = walk(materiasDir)
  .filter((f) => f.endsWith('.md'))
  .map(rel)
  .filter((p) => !p.includes('/referencias/'))
  .filter((p) => !p.endsWith('/Avancos.md'));

const naoIndexadas = [];
for (const nota of notas) {
  const target = nota.replace(/\.md$/, '');
  if (!indexContent.includes(`[[${target}`)) naoIndexadas.push(nota);
}

if (naoIndexadas.length > 0) {
  for (const nota of naoIndexadas) fail(`Nota canônica não aparece no index.md: ${nota}`);
} else {
  ok(`${notas.length} notas canônicas estão representadas no index.md.`);
}

console.log('\n=== INVARIANTE 2: SNAPSHOTS DE ATUALIDADES ===');
const snapshotsDir = path.join(rootDir, '3 - Materias/Atualidades/Snapshots');
if (fs.existsSync(snapshotsDir)) {
  const snapshots = walk(snapshotsDir).filter((f) => f.endsWith('.md'));
  for (const full of snapshots) {
    const p = rel(full);
    const content = fs.readFileSync(full, 'utf8');
    const fm = parseFrontmatter(content);
    if (fm.layer !== 'snapshot_conjuntural') fail(`${p}: layer deve ser snapshot_conjuntural.`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.data_corte || '')) fail(`${p}: data_corte ausente/inválida.`);
    if (String(fm.revalidar).toLowerCase() !== 'true') fail(`${p}: revalidar deve ser true.`);
    if (!/^##\s+Fontes\s*$/mi.test(content)) fail(`${p}: seção ## Fontes ausente.`);
    if (!/^##\s+Fundamentos necessários\s*$/mi.test(content)) fail(`${p}: seção ## Fundamentos necessários ausente.`);
  }
  if (snapshots.length === 0) warn('Pasta de snapshots existe, mas não contém Markdown.');
  else if (errors === 0) ok(`${snapshots.length} snapshot(s) cumprem o contrato conjuntural.`);
}

console.log('\n=== INVARIANTE 3: SEMÂNTICA DOS ITENS DE EDITAL ===');
const editalItens = JSON.parse(read('data/edital-itens.json'));
const coberturasValidas = new Set(['integral', 'parcial', 'ausente']);
const ids = new Set();
for (const item of editalItens) {
  if (ids.has(item.id)) fail(`ID duplicado em edital-itens.json: ${item.id}`);
  ids.add(item.id);
  if (!coberturasValidas.has(item.coberturaNota)) fail(`${item.id}: coberturaNota inválida/ausente (${item.coberturaNota}).`);
  if (item.coberturaNota === 'ausente' && item.notaPath) fail(`${item.id}: cobertura ausente não pode possuir notaPath.`);
  if (item.coberturaNota !== 'ausente' && !item.notaPath) fail(`${item.id}: cobertura ${item.coberturaNota} exige notaPath.`);
  if (item.notaPath && !exists(item.notaPath)) fail(`${item.id}: notaPath inexistente: ${item.notaPath}`);
  if (typeof item.exposicaoEstudo !== 'boolean') fail(`${item.id}: exposicaoEstudo deve ser booleano.`);
}
if (errors === 0) ok(`${editalItens.length} itens de edital possuem semântica de cobertura consistente.`);

console.log('\n=== INVARIANTE 4: LEDGER DE INGESTÃO ===');
const ledgerPath = 'data/ingestoes-processadas.json';
if (!exists(ledgerPath)) {
  fail(`${ledgerPath} não existe.`);
} else {
  const ledger = JSON.parse(read(ledgerPath));
  if (!Array.isArray(ledger)) {
    fail(`${ledgerPath} deve ser um array.`);
  } else {
    const fingerprints = new Set();
    for (const entry of ledger) {
      if (!/^[a-f0-9]{64}$/.test(entry.fingerprint || '')) fail('Ledger contém fingerprint inválido.');
      if (fingerprints.has(entry.fingerprint)) fail(`Ledger contém fingerprint duplicado: ${entry.fingerprint}`);
      fingerprints.add(entry.fingerprint);
    }
    if (errors === 0) ok(`Ledger válido com ${ledger.length} ingestão(ões) registrada(s).`);
  }
}

console.log('\n=== INVARIANTE 5: GOVERNANÇA OPERACIONAL ===');
const agents = read('.agent/AGENTS.md');
if (!agents.includes('scripts/ingest-safe.js')) fail('.agent/AGENTS.md deve declarar ingest-safe.js como porta canônica de ingestão.');
else ok('Agentes apontam para ingest-safe.js.');

if (!agents.includes('Contrato de publicacao GitHub Pages')) fail('.agent/AGENTS.md deve referenciar o contrato de publicação.');
else ok('Agentes apontam para o contrato de publicação.');

if (!exists('scripts/validate-change-contract.js')) fail('Validador de contrato de mudança ausente.');
if (!exists('scripts/verify-live-pages.js')) fail('Validador do Pages ao vivo ausente.');
if (!exists('scripts/question-ingestion-policy.js')) fail('Política programática de ingestão de questões ausente.');

console.log('\n=== INVARIANTE 6: ÍNDICE NÃO APONTA PARA NOTA INEXISTENTE ===');
const wikilinks = [...indexContent.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
const linksLocais = wikilinks.filter((target) => target.includes('/'));
const faltantes = [];
for (const target of linksLocais) {
  const candidates = [target, `${target}.md`];
  if (!candidates.some(exists)) faltantes.push(target);
}
if (faltantes.length > 0) {
  for (const target of [...new Set(faltantes)]) fail(`Wikilink do index aponta para alvo inexistente: ${target}`);
} else {
  ok(`${linksLocais.length} wikilink(s) com caminho no index resolvem para arquivos existentes.`);
}

console.log('\n=== INVARIANTE 7: HIGIENE DE WORKFLOWS ===');
const workflowsDir = path.join(rootDir, '.github/workflows');
if (!fs.existsSync(workflowsDir)) {
  fail('.github/workflows não existe.');
} else {
  const workflows = fs.readdirSync(workflowsDir).filter((f) => /\.ya?ml$/i.test(f));
  const temporarios = workflows.filter((f) =>
    /^tmp[-_]/i.test(f) ||
    /^temp[-_]/i.test(f) ||
    /append-log-once/i.test(f) ||
    /ingest-avancos-\d{4}-\d{2}-\d{2}/i.test(f) ||
    /tmp-ingest-/i.test(f)
  );
  if (temporarios.length > 0) {
    for (const f of temporarios) fail(`Workflow temporário abandonado no repositório: .github/workflows/${f}`);
  } else {
    ok(`${workflows.length} workflow(s) permanente(s); nenhum temporário abandonado.`);
  }
}

console.log('\n----------------------------------------');
if (errors > 0) {
  console.error(`FALHA: ${errors} invariante(s) violada(s), ${warnings} aviso(s).`);
  process.exit(1);
}
console.log(`SUCESSO: invariantes globais preservadas com ${warnings} aviso(s).`);
