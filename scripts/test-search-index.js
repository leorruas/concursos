import fs from 'fs';
import path from 'path';
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

function corpusSecao(secao) {
  return normalizar([
    secao && secao.titulo,
    secao && secao.termos,
    secao && secao.trecho
  ].filter(Boolean).join(' '));
}

const indicePath = path.join(siteDir, 'search-index.json');
const benchmarkPath = path.join(rootDir, 'scripts/search-benchmarks.json');

if (!fs.existsSync(indicePath) || !fs.existsSync(benchmarkPath)) {
  console.error('✗ ERRO: índice ou benchmark de busca não existe.');
  process.exit(1);
}

const indice = JSON.parse(fs.readFileSync(indicePath, 'utf8'));
const benchmarks = JSON.parse(fs.readFileSync(benchmarkPath, 'utf8'));
const porPath = new Map(indice.map(registro => [registro.sourcePath, registro]));
let falhas = 0;

console.log('=== BENCHMARK DE RECALL E SEÇÕES DA BUSCA ===');

for (const caso of benchmarks) {
  const registro = porPath.get(caso.expectedPath);
  if (!registro) {
    console.error(`✗ ${caso.query} → artigo esperado ausente: ${caso.expectedPath}`);
    falhas += 1;
    continue;
  }

  const secoes = Array.isArray(registro.secoes) ? registro.secoes : [];
  const secao = secoes.find(item => normalizar(item.titulo) === normalizar(caso.expectedSection));
  if (!secao) {
    console.error(`✗ ${caso.query} → seção esperada ausente: ${caso.expectedSection}`);
    falhas += 1;
    continue;
  }

  if (!secao.anchor || !/^[a-z0-9][a-z0-9-]*$/.test(secao.anchor)) {
    console.error(`✗ ${caso.query} → seção sem anchor estável: ${caso.expectedSection}`);
    falhas += 1;
    continue;
  }

  const corpus = corpusSecao(secao);
  const termos = normalizar(caso.query).split(' ').filter(Boolean);
  const faltantes = termos.filter(termo => !corpus.includes(termo));

  if (faltantes.length > 0) {
    console.error(`✗ ${caso.query} → seção não preserva: ${faltantes.join(', ')}`);
    falhas += 1;
    continue;
  }

  console.log(`✓ ${caso.query} → ${caso.expectedPath}#${secao.anchor}`);
}

const anchorsInvalidos = [];
for (const registro of indice) {
  const vistos = new Set();
  for (const secao of (registro.secoes || [])) {
    if (!secao.anchor) continue;
    if (vistos.has(secao.anchor)) anchorsInvalidos.push(`${registro.sourcePath}#${secao.anchor}`);
    vistos.add(secao.anchor);
  }
}
if (anchorsInvalidos.length > 0) {
  anchorsInvalidos.forEach(item => console.error(`✗ anchor duplicado: ${item}`));
  falhas += anchorsInvalidos.length;
}

console.log('----------------------------------------------------');
if (falhas === 0) {
  console.log(`SUCESSO: ${benchmarks.length} consultas com artigo, seção e anchor preservados.`);
  process.exit(0);
}

console.error(`FALHA: ${falhas} caso(s) do benchmark falharam.`);
process.exit(1);
