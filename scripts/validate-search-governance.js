import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
let falhas = 0;

function fail(msg) {
  console.error('✗ ' + msg);
  falhas += 1;
}
function ok(msg) {
  console.log('✓ ' + msg);
}
function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const configPath = path.join(rootDir, 'web/05a-search-config.js');
const benchmarkPath = path.join(rootDir, 'scripts/search-benchmarks.json');
const governancePath = path.join(rootDir, '1 - Planejamento/Governanca da busca.md');
const agentsPath = path.join(rootDir, '.agent/AGENTS.md');

for (const p of [configPath, benchmarkPath, governancePath, agentsPath]) {
  if (!fs.existsSync(p)) fail('arquivo obrigatório da governança ausente: ' + path.relative(rootDir, p));
}

if (falhas === 0) {
  const contexto = {};
  vm.createContext(contexto);
  vm.runInContext(fs.readFileSync(configPath, 'utf8'), contexto, { filename: 'web/05a-search-config.js' });
  const config = contexto.CONFIG_BUSCA_VAULT;

  if (!config || !Array.isArray(config.aliases)) {
    fail('CONFIG_BUSCA_VAULT.aliases deve ser array.');
  } else {
    const dono = new Map();
    config.aliases.forEach((grupo, indice) => {
      if (!Array.isArray(grupo) || grupo.length < 2) {
        fail('grupo de aliases ' + indice + ' precisa de ao menos duas formas.');
        return;
      }
      grupo.forEach(alias => {
        const chave = normalizar(alias);
        if (!chave) return;
        if (dono.has(chave) && dono.get(chave) !== indice) {
          fail('alias ambíguo em grupos diferentes: ' + alias);
        } else {
          dono.set(chave, indice);
        }
      });
    });
    if (falhas === 0) ok(config.aliases.length + ' grupos de aliases sem colisão.');
  }

  const ranking = config && config.ranking ? config.ranking : {};
  const minimo = Number(ranking.taxaMinimaTop1Benchmark);
  if (!Number.isFinite(minimo) || minimo <= 0 || minimo > 1) {
    fail('taxaMinimaTop1Benchmark deve estar entre 0 e 1.');
  } else {
    ok('régua mínima de Top 1 configurada em ' + Math.round(minimo * 100) + '%.');
  }

  const benchmarks = JSON.parse(fs.readFileSync(benchmarkPath, 'utf8'));
  if (!Array.isArray(benchmarks) || benchmarks.length < 18) {
    fail('benchmark deve preservar ao menos os 18 casos iniciais.');
  } else {
    const consultas = new Set();
    benchmarks.forEach(caso => {
      const q = normalizar(caso.query);
      if (!q || !caso.expectedPath || !caso.expectedSection) fail('benchmark incompleto.');
      if (consultas.has(q)) fail('consulta duplicada no benchmark: ' + caso.query);
      consultas.add(q);
    });
    if (falhas === 0) ok(benchmarks.length + ' benchmarks únicos e completos.');
  }

  const agents = fs.readFileSync(agentsPath, 'utf8');
  if (!agents.includes('Governanca da busca')) fail('AGENTS não referencia a governança da busca.');
  else ok('AGENTS referencia a governança da busca.');

  if (fs.existsSync(path.join(rootDir, 'search-index.json'))) {
    fail('search-index.json não deve existir na raiz como arquivo canônico; ele é derivado em _site/.');
  } else {
    ok('índice de busca permanece exclusivamente derivado pelo build.');
  }
}

if (falhas > 0) {
  console.error('FALHA: ' + falhas + ' problema(s) na governança da busca.');
  process.exit(1);
}
console.log('SUCESSO: governança da busca válida.');
