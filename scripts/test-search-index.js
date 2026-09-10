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

function corpusRegistro(registro) {
  const secoes = Array.isArray(registro?.secoes) ? registro.secoes : [];
  return normalizar(secoes.map(secao => [
    secao?.titulo,
    secao?.termos,
    secao?.trecho
  ].filter(Boolean).join(' ')).join(' '));
}

const testes = [
  ['condicao necessaria', '3 - Materias/Logica/02 - conectivos.md'],
  ['contrapositiva', '3 - Materias/Logica/04 - equivalencias.md'],
  ['script tipografia', '3 - Materias/Comunicacao/12 - producao editorial e design.md'],
  ['conteudo impostor', '3 - Materias/Comunicacao/18 - fact checking e desinformacao.md'],
  ['mattar painel', '3 - Materias/Comunicacao/17 - pesquisa em comunicacao.md'],
  ['ritual dialogal', '3 - Materias/Comunicacao/14 - entrevista jornalistica.md'],
  ['shared earned', '3 - Materias/Comunicacao/20 - campanhas e planejamento de midia.md'],
  ['reserva plenario', '3 - Materias/Direito Constitucional/08 - poder judiciario e controle de constitucionalidade.md'],
  ['dolo art 11', '3 - Materias/Direito Administrativo/07 - improbidade administrativa.md'],
  ['tema 940', '3 - Materias/Direito Administrativo/06 - responsabilidade civil do estado.md'],
  ['ishikawa pareto', '3 - Materias/Administracao Geral/05 - gestao da qualidade.md'],
  ['lideranca estrategia controle', '3 - Materias/Administracao Publica/02 - governanca publica.md']
];

const indicePath = path.join(siteDir, 'search-index.json');
if (!fs.existsSync(indicePath)) {
  console.error('✗ ERRO: _site/search-index.json não existe.');
  process.exit(1);
}

const indice = JSON.parse(fs.readFileSync(indicePath, 'utf8'));
const porPath = new Map(indice.map(registro => [registro.sourcePath, registro]));
let falhas = 0;

console.log('=== TESTES DE RECALL DO ÍNDICE DE BUSCA ===');

for (const [consulta, sourcePath] of testes) {
  const registro = porPath.get(sourcePath);
  if (!registro) {
    console.error(`✗ ${consulta} → artigo esperado não está no índice: ${sourcePath}`);
    falhas += 1;
    continue;
  }

  const corpus = corpusRegistro(registro);
  const termos = normalizar(consulta).split(' ').filter(Boolean);
  const faltantes = termos.filter(termo => !corpus.includes(termo));

  if (faltantes.length === 0) {
    console.log(`✓ ${consulta} → ${sourcePath}`);
  } else {
    console.error(`✗ ${consulta} → faltam no índice: ${faltantes.join(', ')} (${sourcePath})`);
    falhas += 1;
  }
}

console.log('----------------------------------------------------');
if (falhas === 0) {
  console.log(`SUCESSO: ${testes.length} consultas canônicas preservadas.`);
  process.exit(0);
}

console.error(`FALHA: ${falhas} consulta(s) perderam recall no índice.`);
process.exit(1);
