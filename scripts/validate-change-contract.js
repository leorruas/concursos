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
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    data[kv[1]] = value;
  }
  return data;
}

function normalizarPath(p) {
  return String(p || '').replace(/\\/g, '/');
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
    if (status.startsWith('R')) return { status: 'R', oldPath: cols[1], path: cols[2] };
    return { status: status[0], path: cols[1] };
  });
}

function isNovaNotaMateria(change) {
  if (!['A', 'R'].includes(change.status) || !change.path) return false;
  if (!change.path.startsWith('3 - Materias/') || !change.path.endsWith('.md')) return false;
  if (change.path.includes('/referencias/') || change.path.endsWith('/Avancos.md')) return false;
  if (exists(change.path) && parseFrontmatter(read(change.path)).type === 'hub') return false;
  return true;
}

function localizarHubMateria(notePath) {
  const parts = normalizarPath(notePath).split('/');
  if (parts.length < 3 || parts[0] !== '3 - Materias') return null;
  const materiaDir = parts.slice(0, 3).join('/');
  const fullDir = path.join(rootDir, materiaDir);
  if (!fs.existsSync(fullDir) || !fs.statSync(fullDir).isDirectory()) return null;

  const hubs = fs.readdirSync(fullDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => `${materiaDir}/${name}`)
    .filter((relPath) => {
      try {
        return parseFrontmatter(read(relPath)).type === 'hub';
      } catch {
        return false;
      }
    });

  if (hubs.length > 1) {
    fail(`Mais de um hub declarado para ${materiaDir}: ${hubs.join(', ')}`);
    return null;
  }
  return hubs[0] || null;
}

function hubContemNota(hubPath, notePath) {
  const content = read(hubPath);
  const relativeTarget = path.posix.basename(notePath, '.md');
  const fullTarget = normalizarPath(notePath).replace(/\.md$/, '');
  return content.includes(`[[${relativeTarget}`) || content.includes(`[[${fullTarget}`);
}

function validarIndexacaoAtomica(change, indexContent, changedSet) {
  const target = change.path.replace(/\.md$/, '');
  if (!indexContent.includes(`[[${target}`)) {
    fail(`Nova nota canônica não está no index.md global: ${change.path}`);
  }
  if (!changedSet.has('index.md')) {
    fail(`Nova nota canônica exige index.md no MESMO commit atômico: ${change.path}`);
  }

  const hubPath = localizarHubMateria(change.path);
  if (hubPath) {
    if (!changedSet.has(hubPath)) {
      fail(`Nova nota canônica exige o hub local no MESMO commit atômico: ${hubPath}`);
    }
    if (!hubContemNota(hubPath, change.path)) {
      fail(`Hub local não referencia a nova nota: ${hubPath} → ${change.path}`);
    }
  } else {
    warn(`Nenhum hub type: hub localizado para a matéria de ${change.path}; apenas index.md global será exigido.`);
  }

  if (indexContent.includes(`[[${target}`) && changedSet.has('index.md') && (!hubPath || (changedSet.has(hubPath) && hubContemNota(hubPath, change.path)))) {
    ok(`Nova nota propagada atomicamente para catálogo global${hubPath ? ' e hub local' : ''}: ${change.path}`);
  }
}

function validarSnapshot(change) {
  if (!change.path.startsWith('3 - Materias/Atualidades/Snapshots/') || !change.path.endsWith('.md')) return;
  if (!exists(change.path)) return;
  const content = read(change.path);
  const fm = parseFrontmatter(content);
  if (fm.layer !== 'snapshot_conjuntural') fail(`Snapshot deve declarar layer: snapshot_conjuntural — ${change.path}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.data_corte || '')) fail(`Snapshot deve declarar data_corte em YYYY-MM-DD — ${change.path}`);
  if (String(fm.revalidar).toLowerCase() !== 'true') fail(`Snapshot deve declarar revalidar: true — ${change.path}`);
  if (!/^##\s+Fontes\s*$/mi.test(content)) fail(`Snapshot deve possuir seção ## Fontes — ${change.path}`);
  if (!/^##\s+Fundamentos necessários\s*$/mi.test(content)) fail(`Snapshot deve possuir seção ## Fundamentos necessários — ${change.path}`);
}

function validarEditalItens() {
  const relPath = 'data/edital-itens.json';
  if (!exists(relPath)) {
    fail(`${relPath} não existe.`);
    return;
  }
  const items = JSON.parse(read(relPath));
  const allowed = new Set(['integral', 'parcial', 'ausente']);
  for (const item of items) {
    if (!allowed.has(item.coberturaNota)) fail(`Item ${item.id || item.codigo} possui coberturaNota inválida/ausente: ${item.coberturaNota}`);
    if (item.coberturaNota === 'ausente' && item.notaPath) fail(`Item ${item.id || item.codigo} está ausente, mas possui notaPath: ${item.notaPath}`);
    if (item.coberturaNota !== 'ausente' && !item.notaPath) fail(`Item ${item.id || item.codigo} está ${item.coberturaNota}, mas não possui notaPath.`);
    if (item.notaPath && !exists(item.notaPath)) fail(`Item ${item.id || item.codigo} aponta para nota inexistente: ${item.notaPath}`);
  }
}

function exigirMudancas(paths, changedSet, contexto) {
  const faltantes = paths.filter((p) => !changedSet.has(p));
  if (faltantes.length > 0) {
    for (const p of faltantes) fail(`${contexto}: propagação obrigatória ausente no mesmo diff: ${p}`);
  } else {
    ok(`${contexto}: conjunto mínimo de propagação presente.`);
  }
}

function validarPropagacaoIngestao(changes, changedSet) {
  const avancosLocais = changes.filter((c) => /^3 - Materias\/[^/]+\/Avancos\.md$/.test(c.path || ''));
  const novosSimulados = changes.filter((c) => ['A', 'R'].includes(c.status) && /^00 - Desempenho\/Simulados\/Simulado-[^/]+\.md$/.test(c.path || ''));

  if (avancosLocais.length > 0) {
    exigirMudancas([
      '00 - Desempenho/00 Avancos globais.md',
      '00 - Desempenho/01 Log de saturacao diaria.md',
      '4 - Projetos/dataprev-2026/Questoes e Simulados.md'
    ], changedSet, `Ingestão em ${avancosLocais.map((c) => c.path).join(', ')}`);
    if (changedSet.has('data/erros-recorrentes.json')) exigirMudancas(['4 - Projetos/dataprev-2026/Log de erros.md'], changedSet, 'Ingestão com erro(s) clínico(s)');
  }

  if (novosSimulados.length > 0) {
    exigirMudancas([
      '00 - Desempenho/Simulados/00 - Catalogo de simulados.md',
      '00 - Desempenho/00 Avancos globais.md',
      '00 - Desempenho/01 Log de saturacao diaria.md',
      '4 - Projetos/dataprev-2026/Questoes e Simulados.md',
      '4 - Projetos/dataprev-2026/00 Dashboard.md'
    ], changedSet, 'Novo simulado');
    if (changedSet.has('data/erros-recorrentes.json')) exigirMudancas(['4 - Projetos/dataprev-2026/Log de erros.md'], changedSet, 'Simulado com erro(s) clínico(s)');
  }
}

console.log('=== CONTRATO DE MUDANÇA ===');
const changes = changedFiles();
if (changes.length === 0) console.log('Nenhuma mudança detectada no intervalo informado.');
else console.log(`Mudanças detectadas: ${changes.length}`);

const changedSet = new Set(changes.map((c) => c.path).filter(Boolean));
const indexContent = exists('index.md') ? read('index.md') : '';
const novasNotas = changes.filter(isNovaNotaMateria);

if (novasNotas.length > 0 && !indexContent) fail('index.md não existe ou não pôde ser lido, mas novas notas foram criadas.');
for (const change of novasNotas) {
  validarIndexacaoAtomica(change, indexContent, changedSet);
  validarSnapshot(change);
}

if (changes.some((c) => c.path === 'data/edital-itens.json')) {
  validarEditalItens();
  if (errors === 0) ok('Semântica de cobertura de data/edital-itens.json está consistente.');
}

validarPropagacaoIngestao(changes, changedSet);

const tocouIngestao = changes.some((c) =>
  c.path === 'scripts/ingest-vault.js' ||
  c.path === 'scripts/ingest-safe.js' ||
  c.path === 'scripts/question-ingestion-policy.js' ||
  c.path === 'scripts/ingestion-idempotency.js' ||
  c.path === '1 - Planejamento/Regras de ingestao de questoes.md'
);
if (tocouIngestao) {
  const agents = exists('.agent/AGENTS.md') ? read('.agent/AGENTS.md') : '';
  if (!agents.includes('Regras de ingestao de questoes')) fail('Mudança no sistema de ingestão sem referência à política canônica em .agent/AGENTS.md.');
  else ok('Política de ingestão continua referenciada por .agent/AGENTS.md.');
  if (!agents.includes('scripts/ingest-safe.js')) fail('Mudança no sistema de ingestão sem declarar ingest-safe.js como porta canônica.');
}

console.log('----------------------------------------');
if (errors > 0) {
  console.error(`FALHA: contrato de mudança encontrou ${errors} erro(s) e ${warnings} aviso(s).`);
  process.exit(1);
}
console.log(`SUCESSO: contrato de mudança atendido com ${warnings} aviso(s).`);
