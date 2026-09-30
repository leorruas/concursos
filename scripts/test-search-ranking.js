import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const siteDir = path.join(rootDir, '_site');

function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const manifest = JSON.parse(fs.readFileSync(path.join(siteDir, 'manifest.json'), 'utf8'));
const searchIndex = JSON.parse(fs.readFileSync(path.join(siteDir, 'search-index.json'), 'utf8'));
const editalItens = JSON.parse(fs.readFileSync(path.join(siteDir, 'data/edital-itens.json'), 'utf8'));
const erros = JSON.parse(fs.readFileSync(path.join(siteDir, 'data/erros-recorrentes.json'), 'utf8'));
const benchmarks = JSON.parse(fs.readFileSync(path.join(rootDir, 'scripts/search-benchmarks.json'), 'utf8'));
const indicePorPath = new Map(searchIndex.map(item => [item.sourcePath, item]));

const artigos = manifest.map(item => ({
  titulo: item.titulo,
  tituloExibicao: item.tituloExibicao,
  sourcePath: item.sourcePath,
  path: item.path,
  categoria: item.categoria,
  conteudo: '',
  conteudoCompleto: false,
  indiceBusca: indicePorPath.get(item.sourcePath) || null
}));

const contexto = {
  console,
  todosOsArtigos: artigos,
  dadosEditalEstrategico: editalItens,
  dadosErrosEstrategicos: erros,
  dadosConcursosEstrategicos: [],
  concursoSelecionadoId: 'dataprev-2026',
  limparNomeCategoria: valor => valor,
  Set,
  Map,
  Math,
  Array,
  String,
  RegExp
};
vm.createContext(contexto);

for (const arquivo of ['web/05a-search-config.js', 'web/06-search.js', 'web/06a-search-index.js', 'web/06b-section-ranking.js']) {
  const codigo = fs.readFileSync(path.join(rootDir, arquivo), 'utf8');
  vm.runInContext(codigo, contexto, { filename: arquivo });
}
vm.runInContext(`globalThis.__searchApi = {
  normalizarBusca,
  obterTermosEssenciais,
  criarEntradaIndiceBusca,
  pontuarEntradaBusca,
  obterSecaoMaisRelevante
};`, contexto);

const api = contexto.__searchApi;
const entradas = artigos.map(artigo => api.criarEntradaIndiceBusca(artigo));
let falhas = 0;
let top1 = 0;
let top3 = 0;
let secoesCorretas = 0;

console.log('=== BENCHMARK DE RANKING REAL DA BUSCA ===');

for (const caso of benchmarks) {
  const consulta = api.normalizarBusca(caso.query);
  const termos = api.obterTermosEssenciais(consulta);
  const ranking = entradas
    .map(entrada => ({
      entrada,
      path: entrada.artigo.sourcePath,
      score: api.pontuarEntradaBusca(entrada, consulta, termos)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.path.localeCompare(b.path, 'pt-BR', { numeric: true }));

  const rank = ranking.findIndex(item => item.path === caso.expectedPath) + 1;
  const esperado = ranking.find(item => item.path === caso.expectedPath);
  const secao = esperado ? api.obterSecaoMaisRelevante(esperado.entrada, caso.query, termos) : null;
  const secaoOk = secao && normalizar(secao.titulo) === normalizar(caso.expectedSection);

  if (rank === 1) top1 += 1;
  if (rank > 0 && rank <= 3) top3 += 1;
  if (secaoOk) secoesCorretas += 1;

  if (rank === 0 || rank > 3 || !secaoOk) {
    console.error(`✗ ${caso.query} → rank=${rank || 'fora'}; seção=${secao ? secao.titulo : 'nenhuma'}`);
    falhas += 1;
  } else {
    console.log(`✓ ${caso.query} → #${rank} · ${secao.titulo}`);
  }
}

const taxaTop1 = benchmarks.length ? top1 / benchmarks.length : 0;
console.log('----------------------------------------------------');
console.log(`Top 1: ${top1}/${benchmarks.length} (${Math.round(taxaTop1 * 100)}%)`);
console.log(`Top 3: ${top3}/${benchmarks.length}`);
console.log(`Seção correta: ${secoesCorretas}/${benchmarks.length}`);

const configBusca = contexto.CONFIG_BUSCA_VAULT || {};
const configRanking = configBusca.ranking || {};
const taxaMinimaTop1 = Number.isFinite(Number(configRanking.taxaMinimaTop1Benchmark))
  ? Number(configRanking.taxaMinimaTop1Benchmark)
  : 0.72;

if (taxaTop1 < taxaMinimaTop1) {
  console.error(`✗ Top 1 abaixo da régua mínima de ${Math.round(taxaMinimaTop1 * 100)}%.`);
  falhas += 1;
}

if (falhas > 0) process.exit(1);
console.log('SUCESSO: ranking por seção preserva a régua inicial.');
