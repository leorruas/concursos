#!/usr/bin/env node
// Auditoria somente leitura de referencias editoriais em 3 - Materias.
// Uso: node scripts/auditar-referencias-editoriais.mjs [--json arquivo.json]
// A auditoria sinaliza problemas; nao modifica os arquivos.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const folder = path.join(root, '3 - Materias');
const args = process.argv.slice(2);
const output = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const strict = args.includes('--strict');
const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'Avancos.md') files.push(file);
  }
}
walk(folder);
if (!files.length) { console.error('Nao foram encontrados artigos'); process.exitCode = 2; }
const docs = new Map();
const aliases = new Map();
function key(file) { return path.relative(root, file).replaceAll(path.sep, '/').replace(/\.md$/, ''); }
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const front = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const title = front?.[1].match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '') || source.match(/^#\s+(.+)$/m)?.[1]?.trim() || null;
  const id = key(file);
  docs.set(id, { title, file, source });
  aliases.set(id, id);
  const rawAliases = front?.[1].match(/^articleAliases:\s*(.+)$/m)?.[1];
  if (rawAliases) {
    for (const m of rawAliases.matchAll(/["']([^"']+\.md)["']/g)) aliases.set(m[1].replace(/\.md$/, ''), id);
  }
}
const issues = [];
const totals = {};
function mark(doc, line, kind, text, suggestion = '') {
  issues.push({ path: doc, line, kind, text, suggestion });
  totals[kind] = (totals[kind] || 0) + 1;
}
for (const [id, info] of docs) {
  const frontMatter = info.source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  const lineOffset = frontMatter ? frontMatter[0].split(/\r?\n/).length - 1 : 0;
  let content = info.source.slice(frontMatter?.[0].length || 0);
  let inFence = false;
  for (const [i, original] of content.split(/\r?\n/).entries()) {
    const line = original;
    if (/^\s*(?:```|~~~)/.test(line)) { inFence = !inFence; continue; }
    if (inFence || /^\s{4,}/.test(line)) continue;
    // O Markdown legado usa \\| em wikilinks (inclusive dentro de tabelas).
    // O parser compara offsets na mesma string normalizada.
    const prose = line.replace(/\\\|/g, '|').replace(/`[^`]*`/g, '');
    let match;
    const spans = [];
    const wiki = /\[\[([^|\]#]+)(?:#[^|\]]+)?(?:\|([^\]]+))?\]\]/g;
    while ((match = wiki.exec(prose))) {
      spans.push([match.index, match.index + match[0].length]);
      const target = match[1].replace(/\.md$/, '');
      const relative = path.posix.normalize(path.posix.join(path.posix.dirname(id), target));
      const dest = aliases.get(target) || aliases.get(relative);
      if (!dest) {
        // Links ao edital/planejamento estao fora da pasta auditada, mas podem existir.
        const rootFile = path.join(root, target + '.md');
        const relativeFile = path.join(root, relative + '.md');
        if (fs.existsSync(rootFile) || fs.existsSync(relativeFile)) continue;
        if (target === 'Avancos' || target.endsWith('/Avancos')) {
          mark(id, i + 1 + lineOffset, 'referencia_privada_ou_legada', match[0]);
          continue;
        }
        if (/^(?:00 inbox\/|00 ingestão$|00 - Desempenho\/|4 - Projetos\/dataprev-2026\/|\d{2}-\d{2}-20\d{2}$)/i.test(target)) {
          mark(id, i + 1 + lineOffset, 'fonte_historica_nao_publica', match[0]);
          continue;
        }
        mark(id, i + 1 + lineOffset, 'destino_nao_resolvido', match[0]);
        continue;
      }
      const title = docs.get(dest)?.title;
      const label = match[2] || path.basename(target);
      const navigation = /^#{1,6}\s/.test(line) || /^\s*[-*]\s/.test(line) || /^\s*\|/.test(line);
      if (/\bnota\s*\d+|\b(?:CAM|CGU|DP|DAT)-[A-Z]{2,5}-\d+/i.test(label)) {
        mark(id, i + 1 + lineOffset, 'rotulo_codigo_ou_nota', match[0], title || '');
      } else if (title && !navigation && /^\s*(?:\d+[A-Z]?\s*[•.]\s*)/.test(label)) {
        mark(id, i + 1 + lineOffset, 'ordinal_em_prosa', match[0], title);
      }
    }
    const inlineCode = /`[^`]*`/g;
    const cleaned = prose.replace(inlineCode, m => ' '.repeat(m.length)).replace(/https?:\/\/[^\s)>]+/g, m => ' '.repeat(m.length));
    const plain = /\b(?:nota\s*(?:n[.º°]?\s*)?\d{1,3}|(?:CAM|CGU|DP|DAT)-[A-Z]{2,5}-\d{2,4}|(?:nota|artigo)\s+(?:anterior|seguinte|posterior|pr[oó]xim[ao]))\b/gi;
    while ((match = plain.exec(cleaned))) {
      const offset = match.index;
      if (spans.some(([a,b]) => offset >= a && offset < b)) continue;
      // Códigos em tabelas de planejamento devem ser revisados, mas nao corrigidos automaticamente.
      const inStructure = /^\s*(?:#{1,6}\s|\||\d+[.)]\s|[-*]\s)/.test(line);
      mark(id, i + 1 + lineOffset, inStructure ? 'codigo_curricular_em_estrutura' : 'referencia_em_prosa', match[0], line.trim().slice(0, 180));
    }
    const md = /\[([^\]]+)\]\(([^)]+)\)/g;
    while ((match = md.exec(cleaned))) {
      if (/\bnota\s*\d+|\b(?:CAM|CGU|DP|DAT)-[A-Z]{2,5}-\d+/i.test(match[1]) && /artigo\/|\.md\b|3%20-%20Materias|3 - Materias/.test(match[2]))
        mark(id, i + 1 + lineOffset, 'rotulo_markdown_numerico', match[0]);
    }
  }
}
issues.sort((a,b) => a.path.localeCompare(b.path) || a.line - b.line);
const report = { scannedArticles: docs.size, totalFindings: issues.length, totals, issues };
if (output) fs.writeFileSync(path.resolve(root, output), JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({ scannedArticles: report.scannedArticles, totalFindings: report.totalFindings, totals: report.totals },null,2));
for (const issue of issues.slice(0,100)) console.log(issue.path+':'+issue.line+' ['+issue.kind+'] '+issue.text);
if (issues.length > 100) console.log('... demais ocorrencias disponiveis na saida --json');

// Bloquear apenas a regressao de rotulos com codigo; outros achados exigem triagem.
if (strict && (totals.rotulo_codigo_ou_nota || 0) > 0) process.exitCode = 1;
