import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, '_site');

const STOPWORDS_INDICE = new Set([
  'a', 'ao', 'aos', 'as', 'com', 'da', 'das', 'de', 'do', 'dos', 'e', 'em', 'entre',
  'essa', 'esse', 'esta', 'este', 'foi', 'na', 'nas', 'no', 'nos', 'o', 'os', 'ou',
  'para', 'pela', 'pelas', 'pelo', 'pelos', 'por', 'que', 'se', 'ser', 'sua', 'suas',
  'seu', 'seus', 'um', 'uma', 'uns', 'umas', 'como', 'tambem', 'mais', 'menos', 'muito',
  'muita', 'muitos', 'muitas', 'pode', 'podem', 'deve', 'devem', 'quando', 'onde'
]);

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
// 2. DESCOBERTA, METADADOS E ÍNDICE DE BUSCA
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

function limparTextoParaIndice(texto) {
  return String(texto || '')
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

function normalizarIndice(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[“”"'`´’]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extrairTermosUnicos(texto) {
  const unicos = new Set();
  normalizarIndice(texto).split(' ').forEach((token) => {
    if (!token || token.length < 2 || STOPWORDS_INDICE.has(token)) return;
    unicos.add(token);
  });
  return Array.from(unicos).join(' ');
}

function criarSecoesIndice(conteudo) {
  const semFrontmatter = conteudo
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/%%[\s\S]*?%%/g, ' ');
  const linhas = semFrontmatter.split(/\r?\n/);
  const secoes = [];
  let titulo = '';
  let nivel = 0;
  let buffer = [];

  const salvar = () => {
    const texto = limparTextoParaIndice(buffer.join(' '));
    if (texto || titulo) {
      secoes.push({
        titulo,
        nivel,
        trecho: texto.slice(0, 220),
        termos: extrairTermosUnicos(`${titulo} ${texto}`)
      });
    }
    buffer = [];
  };

  linhas.forEach((linha) => {
    const cabecalho = linha.match(/^(#{2,3})\s+(.+)$/);
    if (cabecalho) {
      salvar();
      nivel = cabecalho[1].length;
      titulo = cabecalho[2].trim();
      return;
    }

    if (/^#\s+/.test(linha) || /^```/.test(linha.trim())) return;
    buffer.push(linha);
  });

  salvar();
  return secoes;
}

function criarRegistroIndice(relPath, conteudo) {
  const fileName = path.basename(relPath).toLowerCase();
  const tipo = extrairCampoFrontmatter(conteudo, 'type');

  // Avanços são publicados para navegação/desempenho, mas a busca teórica já os
  // exclui. Não carregar seu corpo no índice evita bytes que nunca pontuariam.
  if (fileName === 'avancos.md') {
    return { sourcePath: relPath, tipo, secoes: [] };
  }

  return {
    sourcePath: relPath,
    tipo,
    secoes: criarSecoesIndice(conteudo)
  };
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

const indiceBusca = manifesto.map((item) =>
  criarRegistroIndice(item.sourcePath, conteudosPorPath.get(item.sourcePath) || '')
);

const pathsManifesto = new Set(manifesto.map(item => item.sourcePath));
const pathsIndice = new Set(indiceBusca.map(item => item.sourcePath));
if (
  pathsManifesto.size !== manifesto.length ||
  pathsIndice.size !== indiceBusca.length ||
  manifesto.length !== indiceBusca.length ||
  manifesto.some(item => !pathsIndice.has(item.sourcePath))
) {
  throw new Error('Falha de integridade: manifest.json e search-index.json não representam o mesmo conjunto de artigos.');
}

const bytesMarkdown = Array.from(conteudosPorPath.values())
  .reduce((total, conteudo) => total + Buffer.byteLength(conteudo, 'utf8'), 0);
const indiceBuscaSerializado = JSON.stringify(indiceBusca);
const bytesIndice = Buffer.byteLength(indiceBuscaSerializado, 'utf8');
const reducao = bytesMarkdown > 0 ? Math.round((1 - (bytesIndice / bytesMarkdown)) * 100) : 0;
console.log(`Índice de busca: ${bytesIndice} bytes (${reducao}% menor que o conjunto Markdown bruto).`);
console.log(`Integridade do índice: ${indiceBusca.length} de ${manifesto.length} artigos mapeados.`);

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
