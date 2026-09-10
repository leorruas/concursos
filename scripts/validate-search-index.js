import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const siteDir = path.join(rootDir, '_site');

let errors = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`✓ ${desc}`);
  } else {
    console.error(`✗ ERRO: ${desc}`);
    errors += 1;
  }
}

function lerJsonObrigatorio(nome) {
  const arquivo = path.join(siteDir, nome);
  check(`_site/${nome} existe`, fs.existsSync(arquivo));
  if (!fs.existsSync(arquivo)) return [];

  try {
    const dados = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
    check(`_site/${nome} contém um array JSON`, Array.isArray(dados));
    return Array.isArray(dados) ? dados : [];
  } catch (erro) {
    console.error(`✗ ERRO: _site/${nome} não é JSON válido: ${erro.message}`);
    errors += 1;
    return [];
  }
}

function caminhoPublicoSeguro(sourcePath) {
  const p = String(sourcePath || '').replace(/\\/g, '/');
  const nome = path.basename(p).toLowerCase();
  const prefixosPrivados = [
    '00 inbox/',
    '1 - Planejamento/',
    '2 - Editais/',
    '4 - Projetos/',
    '.agent/',
    '.git/',
    '.github/',
    '.obsidian/',
    'scripts/'
  ];
  const nomesPrivados = new Set(['me.md', 'agents.md', 'log.md', 'todo.md']);

  return Boolean(p) &&
    !prefixosPrivados.some(prefixo => p.startsWith(prefixo)) &&
    !nomesPrivados.has(nome);
}

console.log('=== AUDITORIA DO ÍNDICE DE BUSCA PUBLICADO ===');
check('_site/ existe', fs.existsSync(siteDir));

const manifesto = lerJsonObrigatorio('manifest.json');
const indice = lerJsonObrigatorio('search-index.json');

const pathsManifesto = manifesto.map(item => item && item.sourcePath).filter(Boolean);
const pathsIndice = indice.map(item => item && item.sourcePath).filter(Boolean);
const setManifesto = new Set(pathsManifesto);
const setIndice = new Set(pathsIndice);

check('Manifesto não possui sourcePath duplicado', setManifesto.size === pathsManifesto.length);
check('Índice não possui sourcePath duplicado', setIndice.size === pathsIndice.length);
check('Manifesto e índice possuem a mesma quantidade de artigos', manifesto.length === indice.length);
check(
  'Todo artigo do manifesto possui entrada no índice',
  pathsManifesto.every(sourcePath => setIndice.has(sourcePath))
);
check(
  'Toda entrada do índice corresponde a artigo do manifesto',
  pathsIndice.every(sourcePath => setManifesto.has(sourcePath))
);
check(
  'Nenhum sourcePath do índice aponta para área privada',
  pathsIndice.every(caminhoPublicoSeguro)
);
check(
  'Todo sourcePath indexado possui Markdown publicado em _site',
  pathsIndice.every(sourcePath => fs.existsSync(path.join(siteDir, sourcePath)))
);
check(
  'Entradas estruturadas possuem campo secoes como array',
  indice.every(item => item && Array.isArray(item.secoes))
);

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log(`SUCESSO: Índice validado (${indice.length} artigos).`);
  process.exit(0);
}

console.error(`FALHA: ${errors} erro(s) na auditoria do índice.`);
process.exit(1);
