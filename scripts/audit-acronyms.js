import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dictionary = JSON.parse(fs.readFileSync(path.join(root, 'data/dicionario-siglas-editorial.json'), 'utf8')).entries;
const opts = new Set(process.argv.slice(2));
const all = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p);
    else if (name.name.endsWith('.md') && name.name !== 'Avancos.md') all.push(p);
  }
}
walk(path.join(root, '3 - Materias'));

function cleanLine(line) {
  return line
    .replace(/!?\[([^\]]*)\]\(https?:\/\/[^)]*\)/g, '$1')
    .replace(/\[\[[^\]|]*(?:\|([^\]]+))?\]\]/g, '$1')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\`[^\`]*\`/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_~]/g, '');
}
const alerts = [];
let checked = 0;
for (const filename of all) {
  const lines = fs.readFileSync(filename, 'utf8').split(/\r?\n/);
  let inFrontmatter = lines[0]?.trim() === '---', inFence = false;
  const first = new Map();
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (i && inFrontmatter && line === '---') { inFrontmatter = false; return; }
    if (inFrontmatter) return;
    if (/^(`{3,}|~{3,})/.test(line)) { inFence = !inFence; return; }
    if (inFence || !line || /^\|?\s*[:| -]+\s*\|?$/.test(line)) return;
    const text = cleanLine(raw);
    for (const match of text.matchAll(/\b[A-ZÁÉÍÓÚÇ]{2,}(?:\/[A-Z]{2,})?\b/g)) {
      const acronym = match[0];
      if (!dictionary[acronym] || first.has(acronym)) continue;
      first.set(acronym, i + 1);
      const prefix = text.slice(0, match.index).replace(/\s+/g, ' ').trimEnd();
      const full = dictionary[acronym];
      const normalized = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
      const prefixEnd = normalized(prefix).slice(-normalized(full).length);
      if (prefixEnd !== normalized(full) || text[match.index - 1] !== '(' || text[match.index + acronym.length] !== ')') {
        alerts.push({ file: path.relative(root, filename), line: i + 1, acronym, expected: full, excerpt: text.trim().slice(0, 160) });
      }
    }
  });
  checked++;
}
const result = { scannedArticles: checked, knownAcronyms: Object.keys(dictionary).length, alerts: alerts.length, items: alerts };
if (opts.has('--json')) console.log(JSON.stringify(result, null, 2));
else {
  console.log(`Auditoria editorial: ${checked} notas; ${Object.keys(dictionary).length} siglas mapeadas; ${alerts.length} primeiras ocorrências para revisar.`);
  for (const a of alerts.slice(0, 40)) console.log(`AVISO ${a.file}:${a.line} [${a.acronym}] esperado: ${a.expected}`);
  if (alerts.length > 40) console.log(`Mais ${alerts.length - 40} alertas disponíveis com --json.`);
}
if (opts.has('--strict') && alerts.length) process.exitCode = 1;
