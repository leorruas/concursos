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
  const pathLower = normPath.toLowerCase();
  const fileName = path.basename(normPath).toLowerCase();

  // Apenas arquivos Markdown
  if (!normPath.endsWith('.md')) return false;

  // Arquivos de governança, sistema e instruções internas privadas
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

  // Ignorar pastas de sistema/ocultas
  if (
    normPath.startsWith('.obsidian/') ||
    normPath.startsWith('.git/') ||
    normPath.startsWith('.agent/') ||
    normPath.startsWith('.gemini/') ||
    normPath.startsWith('.github/')
  ) {
    return false;
  }

  // Ignorar duplicatas de sincronização do iCloud / Obsidian
  if (fileName.includes(' 2.md') || normPath.includes(' 2/')) return false;

  // Pastas privadas, operacionais ou transitórias (NUNCA vão para o Pages)
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

  // Pastas de Conhecimento Público Permitidas
  if (
    normPath.startsWith('3 - Materias/') ||
    normPath.startsWith('00 - Desempenho/')
  ) {
    return true;
  }

  return false;
}

// --------------------------------------------------------------------------
// 2. DESCOBERTA RECURSIVA DO VAULT
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
    } else if (entry.isFile()) {
      if (isArquivoPublico(relPath)) {
        lista.push(relPath);
      }
    }
  }
  return lista;
}

console.log('--- ETAPA 1: VARREDURA E GERAÇÃO DO MANIFESTO PÚBLICO ---');

const arquivosPublicos = varrerDiretorio(rootDir);
console.log(`Encontrados ${arquivosPublicos.length} arquivos Markdown públicos.`);

// Extração de metadados para o manifesto
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

  // Título real do H1 ou Frontmatter
  const conteudo = fs.readFileSync(path.join(rootDir, relPath), 'utf8');
  let tituloExibicao = fileName.replace(/^\d+\s*-\s*/, '').replace(/^\d+\.\s*/, '').trim();

  const matchYaml = conteudo.match(/^---\s*[\r\n]+[\s\S]*?^title:\s*["']?([^"'\r\n]+)["']?/m);
  if (matchYaml && matchYaml[1]) {
    tituloExibicao = matchYaml[1].trim();
  } else {
    const matchH1 = conteudo.match(/^#\s+([^\r\n]+)/m);
    if (matchH1 && matchH1[1]) {
      tituloExibicao = matchH1[1].trim();
    }
  }

  return {
    titulo: fileName,
    tituloExibicao,
    sourcePath: relPath,
    path: relPath.split('/').map(encodeURIComponent).join('/'),
    categoria
  };
});

// Ordenação alfabética e numérica estável
manifesto.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, 'pt-BR', { numeric: true }));

// --------------------------------------------------------------------------
// 3. MONTAGEM DO DIRETÓRIO DE DISTRIBUIÇÃO _site/
// --------------------------------------------------------------------------

console.log('\n--- ETAPA 2: MONTAGEM DO DIRETÓRIO ISOLADO _site/ ---');

// Limpar e recriar _site
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Copiar arquivos essenciais do SPA
const arquivosSPA = ['index.html', 'style.css', 'script.js'];
for (const f of arquivosSPA) {
  const src = path.join(rootDir, f);
  const dest = path.join(outDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copiado SPA core: ${f}`);
  }
}

// Copiar camada de dados declarativos (data/)
const dataSrc = path.join(rootDir, 'data');
const dataDest = path.join(outDir, 'data');
if (fs.existsSync(dataSrc)) {
  fs.cpSync(dataSrc, dataDest, { recursive: true });
  console.log(`✓ Copiado diretório data/`);
}

// Copiar as notas Markdown públicas mantendo a estrutura de diretórios relativa
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

// Gravar o manifesto público dentro de _site/
const manifestPath = path.join(outDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifesto, null, 2), 'utf8');
console.log(`✓ Gerado _site/manifest.json com sucesso.`);

console.log('\nSUCESSO: Build estático concluído em _site/.');
