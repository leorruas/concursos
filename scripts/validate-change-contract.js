#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let errors = 0;
let warnings = 0;

function fail(message) {
  console.error(`✗ CONTRATO: ${message}`);
  errors++;
}

function ok(message) {
  console.log(`✓ ${message}`);
}

function warn(message) {
  console.warn(`! AVISO: ${message}`);
  warnings++;
}

function exists(relPath) {
  return fs.existsSync(path.join(rootDir, relPath));
}

function read(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
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

function normalizarSha(value) {
  const sha = String(value || '').trim();
  if (!sha || /^0+$/.test(sha)) return null;
  return sha;
}

function resolveDiffRange() {
  const baseEnv = normalizarSha(process.env.BASE_SHA);
  const headEnv = normalizarSha(process.env.HEAD_SHA) || 'HEAD';

  if (baseEnv) return [baseEnv, headEnv];

  try {
    execFileSync('git', ['rev-parse', 'HEAD^'], { cwd: rootDir, stdio: 'ignore' });
    return ['HEAD^', headEnv];
  } catch {
    return [null, headEnv];
  }
}

function changedFiles() {
  const [base, head] = resolveDiffRange();
  if (!base) {
    warn('Não foi possível determinar commit-base; contrato de mudança executará apenas invariantes locais aplicáveis.');
    return [];
  }

  const output = execFileSync('git', ['diff', '--name-status', '--find-renames', base, head], {
    cwd: rootDir,
    encoding: 'utf8'
  }).trim();

  if (!output) return [];

  return output.split(/\r?\n/).map((line) => {
    const cols = line.split('\t');
    const status = cols[0];
    if (status.startsWith('R')) {
      return { status: 'R', oldPath: cols[1], path: cols[2] };
    }
    return { status: status[0], path: cols[1] };
  });
}

function isNovaNotaMateria(change) {
  return ['A', 'R'].includes(change.status) &&
    change.path &&
    change.path.startsWith('3 - Materias/') &&
    change.path.endsWith('.md') &&
    !change.path.includes('/referencias/') &&
    !change.path.endsWith('/Avancos.md');
}

function validarIndexacao(change, indexContent) {
  const target = change.path.replace(/\.md$/, '');
  if (!indexContent.includes(`[[${target}`)) {
    fail(`Nova nota pública não está indexada em index.md: ${change.path}`);
  } else {
    ok(`Nova nota está indexada: ${change.path}`);
  }
}

function validarSnapshot(change) {
  if (!change.path.startsWith('3 - Materias/Atualidades/Snapshots/') || !change.path.endsWith('.md')) return;
  if (!exists(change.path)) return;

  const content = read(change.path);
  const fm = parseFrontmatter(content);

  if (fm.layer !== 'snapshot_conjuntural') {
    fail(`Snapshot deve declarar layer: snapshot_conjuntural — ${change.path}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.data_corte || '')) {
    fail(`Snapshot deve declarar data_corte em YYYY-MM-DD — ${change.path}`);
  }
  if (String(fm.revalidar).toLowerCase() !== 'true') {
    fail(`Snapshot deve declarar revalidar: true — ${change.path}`);
  }
  if (!/^##\s+Fontes\s*$/mi.test(content)) {
    fail(`Snapshot deve possuir seção ## Fontes — ${change.path}`);
  }
  if (!/^##\s+Fundamentos necessários\s*$/mi.test(content)) {
    fail(`Snapshot deve possuir seção ## Fundamentos necessários — ${change.path}`);
  }

  if (errors === 0) ok(`Contrato de snapshot atendido: ${change.path}`);
}

function validarEdtialItens() {
  const relPath = 'data/edital-itens.json';
  if (!exists(relPath)) {
    fail(`${relPath} não existe.`);
    return;
  }

  const items = JSON.parse(read(relPath));
  const allowed = new Set(['integral', 'parcial', 'ausente']);

  for (const item of items) {
    if (!allowed.has(item.coberturaNota)) {
      fail(`Item ${item.id || item.codigo} possui coberturaNota inválida/ausente: ${item.coberturaNota}`);
    }

    if (item.coberturaNota === 'ausente' && item.notaPath) {
      fail(`Item ${item.id || item.codigo} está ausente, mas possui notaPath: ${item.notaPath}`);
    }

    if (item.coberturaNota !== 'ausente' && !item.notaPath) {
      fail(`Item ${item.id || item.codigo} está ${item.coberturaNota}, mas não possui notaPath.`);
    }

    if (item.notaPath && !exists(item.notaPath)) {
      fail(`Item ${item.id || item.codigo} aponta para nota inexistente: ${item.notaPath}`);
    }
  }

  if (errors === 0) ok('Semântica de cobertura de data/edital-itens.json está consistente.');
}

console.log('=== CONTRATO DE MUDANÇA ===');
const changes = changedFiles();
if (changes.length === 0) {
  console.log('Nenhuma mudança detectada no intervalo informado.');
} else {
  console.log(`Mudanças detectadas: ${changes.length}`);
}

const indexContent = exists('index.md') ? read('index.md') : '';
const novasNotas = changes.filter(isNovaNotaMateria);

if (novasNotas.length > 0 && !indexContent) {
  fail('index.md não existe ou não pôde ser lido, mas novas notas foram criadas.');
}

for (const change of novasNotas) {
  validarIndexacao(change, indexContent);
  validarSnapshot(change);
}

const mudouEditalItens = changes.some((c) => c.path === 'data/edital-itens.json');
if (mudouEditalItens) {
  validarEdtialItens();
}

// Toda mudança em regras de ingestão deve manter a política canônica acessível aos agentes.
const tocouIngestao = changes.some((c) =>
  c.path === 'scripts/ingest-vault.js' ||
  c.path === 'scripts/question-ingestion-policy.js' ||
  c.path === '1 - Planejamento/Regras de ingestao de questoes.md'
);
if (tocouIngestao) {
  const agents = exists('.agent/AGENTS.md') ? read('.agent/AGENTS.md') : '';
  if (!agents.includes('Regras de ingestao de questoes')) {
    fail('Mudança no sistema de ingestão sem referência à política canônica em .agent/AGENTS.md.');
  } else {
    ok('Política de ingestão continua referenciada por .agent/AGENTS.md.');
  }
}

console.log('----------------------------------------');
if (errors > 0) {
  console.error(`FALHA: contrato de mudança encontrou ${errors} erro(s) e ${warnings} aviso(s).`);
  process.exit(1);
}

console.log(`SUCESSO: contrato de mudança atendido com ${warnings} aviso(s).`);
