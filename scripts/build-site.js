import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, '_site');

// --------------------------------------------------------------------------
// 1. REGRAS CANÔNICAS DE VISIBILIDADE PÚBLICA (SSoT)
// --------------------------------------------------------------------------

function isArquivoPublico(relPath) {
  const normPath = relPath.replace(/\\/g, '/');
  const fileName = path.basename(normPath).toLowerCase();

  if (!normPath.endsWith('.md')) return false;

  if (
    fileName === 'me.md' ||
    fileName === 'agents.md' ||
    fileName === 'index.md' ||
    fileName === 'log.md' ||
    fileName === 'gemini.md' ||
    fileName === 'readme.md' ||
    fileName === 'todo.md'
  ) {
    return false;
  }

  if (
    normPath.startsWith('.obsidian/') ||
    normPath.startsWith('.git/') ||
    normPath.startsWith('.agent/') ||
    normPath.startsWith('.gemini/') ||
    normPath.startsWith('.github/')
  ) {
    return false;
  }

  if (fileName.includes(' 2.md') || normPath.includes(' 2/')) return false;

  if (
    normPath.startsWith('00 inbox/') ||
    normPath.startsWith('1 - Planejamento/') ||
    normPath.startsWith('2 - Editais/') ||
    normPath.startsWith('4 - Projetos/') ||
    normPath.startsWith('materias/') ||
    normPath.startsWith('wiki/') ||
    normPath.startsWith('scripts/') ||
    normPath.startsWith('_site/')
  ) {
    return false;
  }

  if (
    normPath.startsWith('3 - Materias/') ||
    normPath.startsWith('00 - Desempenho/')
  ) {
    return true;
  }

  return false;
}

// --------------------------------------------------------------------------
// 2. DESCOBERTA E METADADOS
// --------------------------------------------------------------------------

function varrerDiretorio(dir, lista = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      if (
        entry.name.startsWith('.') ||
        entry.name === 'node_modules' ||
        entry.name === '_site'
      ) {
        continue;
      }
      varrerDiretorio(fullPath, lista);
    } else if (entry.isFile() && isArquivoPublico(relPath)) {
      lista.push(relPath);
    }
  }
  return lista;
}

function extrairCampoFrontmatter(conteudo, campo) {
  const frontmatter = conteudo.match(/^---\s*[\r\n]+([\s\S]*?)^---\s*$/m);
  if (!frontmatter) return '';
  const regex = new RegExp(`^${campo}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, 'm');
  const match = frontmatter[1].match(regex);
  return match && match[1] ? match[1].trim() : '';
}

function limparLinhaParaIndice(linha) {
  return String(linha || '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function criarConteudoBusca(conteudo) {
  const tipo = extrairCampoFrontmatter(conteudo, 'type');
  const semFrontmatter = conteudo
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/%%[\s\S]*?%%/g, ' ');

  const linhas = semFrontmatter.split(/\r?\n/);
  const partes = [];
  let buffer = [];

  const descarregarBuffer = () => {
    if (buffer.length === 0) return;
    const texto = buffer.join(' ').replace(/\s+/g, ' ').trim();
    if (texto) partes.push(texto);
    buffer = [];
  };

  linhas.forEach((linha) => {
    const cabecalho = linha.match(/^(#{2,3})\s+(.+)$/);
    if (cabecalho) {
      descarregarBuffer();
      partes.push(`${cabecalho[1]} ${cabecalho[2].trim()}`);
      return;
    }

    if (/^#\s+/.test(linha) || /^```/.test(linha.trim())) return;

    const limpa = limparLinhaParaIndice(linha);
    if (limpa && !/^[-: ]+$/.test(limpa)) buffer.push(limpa);
  });

  descarregarBuffer();

  const miniFrontmatter = tipo ? `---\ntype: "${tipo}"\n---\n` : '';
  return `${miniFrontmatter}${partes.join('\n')}`.trim();
}

console.log('--- ETAPA 1: VARREDURA E GERAÇÃO DO MANIFESTO PÚBLICO ---');

const arquivosPublicos = varrerDiretorio(rootDir);
const conteudosPorPath = new Map();
console.log(`Encontrados ${arquivosPublicos.length} arquivos Markdown públicos.`);

const manifesto = arquivosPublicos.map((relPath) => {
  const fileName = path.basename(relPath, '.md');
  const partes = relPath.split('/');
  let categoria = 'Geral';

  if (relPath.startsWith('3 - Materias/')) {
    categoria = partes[1] || 'Matérias';
  } else if (relPath.startsWith('00 - Desempenho/Simulados/')) {
    categoria = '00. Simulados';
  } else if (relPath.startsWith('00 - Desempenho/')) {
    categoria = '00. Desempenho';
  }

  const conteudo = fs.readFileSync(path.join(rootDir, relPath), 'utf8');
  conteudosPorPath.set(relPath, conteudo);

  let tituloExibicao = fileName.replace(/^\d+\s*-\s*/, '').replace(/^\d+\.\s*/, '').trim();
  const tituloFrontmatter = extrairCampoFrontmatter(conteudo, 'title');

  if (tituloFrontmatter) {
    tituloExibicao = tituloFrontmatter;
  } else {
    const matchH1 = conteudo.match(/^#\s+([^\r\n]+)/m);
    if (matchH1 && matchH1[1]) tituloExibicao = matchH1[1].trim();
  }

  return {
    titulo: fileName,
    tituloExibicao,
    sourcePath: relPath,
    path: relPath.split('/').map(encodeURIComponent).join('/'),
    categoria
  };
});

manifesto.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, 'pt-BR', { numeric: true }));

// O índice preserva texto suficiente para ranking, fuzzy matching, headings e snippets,
// mas remove frontmatter irrelevante, sintaxe Markdown e quebras redundantes. O Markdown
// completo continua sendo publicado e passa a ser carregado apenas quando o artigo abre.
const indiceBusca = manifesto.map((item) => ({
  sourcePath: item.sourcePath,
  conteudo: criarConteudoBusca(conteudosPorPath.get(item.sourcePath) || '')
}));

const bytesMarkdown = Array.from(conteudosPorPath.values())
  .reduce((total, conteudo) => total + Buffer.byteLength(conteudo, 'utf8'), 0);
const indiceBuscaSerializado = JSON.stringify(indiceBusca);
const bytesIndice = Buffer.byteLength(indiceBuscaSerializado, 'utf8');
const reducao = bytesMarkdown > 0 ? Math.round((1 - (bytesIndice / bytesMarkdown)) * 100) : 0;
console.log(`Índice de busca: ${bytesIndice} bytes (${reducao}% menor que o conjunto Markdown bruto).`);

// --------------------------------------------------------------------------
// 3. MONTAGEM DO DIRETÓRIO DE DISTRIBUIÇÃO _site/
// --------------------------------------------------------------------------

console.log('\n--- ETAPA 2: MONTAGEM DO DIRETÓRIO ISOLADO _site/ ---');

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

const arquivosSPA = ['index.html', 'style.css', 'script.js'];
for (const f of arquivosSPA) {
  const src = path.join(rootDir, f);
  const dest = path.join(outDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copiado SPA core: ${f}`);
  }
}

const webSrcDir = path.join(rootDir, 'web');
const webDestDir = path.join(outDir, 'web');
if (fs.existsSync(webSrcDir)) {
  fs.mkdirSync(webDestDir, { recursive: true });
  for (const nome of fs.readdirSync(webSrcDir)) {
    const origem = path.join(webSrcDir, nome);
    const destino = path.join(webDestDir, nome);
    if (fs.statSync(origem).isFile() && nome.endsWith('.js')) {
      fs.copyFileSync(origem, destino);
      console.log(`✓ Copiado módulo web: web/${nome}`);
    }
  }
}

const JSONS_PUBLICOS_AUTORIZADOS = [
  'concursos.json',
  'edital-itens.json',
  'erros-recorrentes.json',
  'provas.json'
];

const dataDest = path.join(outDir, 'data');
fs.mkdirSync(dataDest, { recursive: true });

for (const nomeJson of JSONS_PUBLICOS_AUTORIZADOS) {
  const src = path.join(rootDir, 'data', nomeJson);
  const dest = path.join(dataDest, nomeJson);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copiado JSON autorizado (allowlist): data/${nomeJson}`);
  } else {
    console.warn(`! AVISO: JSON autorizado não encontrado na origem: data/${nomeJson}`);
  }
}

for (const item of manifesto) {
  const srcFile = path.join(rootDir, item.sourcePath);
  const destFile = path.join(outDir, item.sourcePath);
  const destParent = path.dirname(destFile);

  if (!fs.existsSync(destParent)) {
    fs.mkdirSync(destParent, { recursive: true });
  }
  fs.copyFileSync(srcFile, destFile);
}
console.log(`✓ Copiadas ${manifesto.length} notas Markdown públicas para _site/`);

const manifestPath = path.join(outDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifesto, null, 2), 'utf8');
console.log('✓ Gerado _site/manifest.json com sucesso.');

const searchIndexPath = path.join(outDir, 'search-index.json');
fs.writeFileSync(searchIndexPath, indiceBuscaSerializado, 'utf8');
console.log('✓ Gerado _site/search-index.json com sucesso.');

console.log('\nSUCESSO: Build estático concluído em _site/.');
