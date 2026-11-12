import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const bank = JSON.parse(fs.readFileSync(path.join(root, 'data/questoes-camara.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/catalogo-materias-por-concurso.json'), 'utf8'))
  .contests.find(contest => contest.concursoId === bank.concursoId);
const threshold = 0.35;
const stop = new Set('a ao as o os um uma uns umas e ou de do da dos das em no na nos nas que por para com se sua seu suas seus'.split(' '));

function terms(text) {
  return new Set((text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .match(/[a-z]{2,}/g) || []).filter(word => !stop.has(word)));
}

function candidate(text, ref, subjectId) {
  return { text, ref, subjectId, terms: terms(text) };
}

const existing = bank.pilotoDidatico.map((item, index) =>
  candidate(item.statement, 'pilotoDidatico[' + index + ']', item.subjectId));
const articleSubjects = new Map();
for (const subject of catalog.subjects) {
  for (const articleId of subject.articleIds) {
    if (!articleSubjects.has(articleId)) articleSubjects.set(articleId, []);
    articleSubjects.get(articleId).push(subject.subjectId);
  }
}

const dir = path.join(root, '3 - Materias');
for (const file of fs.readdirSync(dir, { recursive: true }).filter(name => name.endsWith('.md'))) {
  const markdown = fs.readFileSync(path.join(dir, file), 'utf8');
  const articleId = markdown.match(/^articleId:\s*(art-[a-f0-9]+)\s*$/m)?.[1];
  const subjects = articleSubjects.get(articleId);
  if (!subjects) continue;
  const lines = markdown.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    const item = line.match(/^\s*(?:>\s*)?\*\*(?:Item|Questão)\s+\d+[^*]*\*\*\s*(.+)/i);
    if (!item) continue;
    for (const subjectId of subjects) {
      existing.push(candidate(item[1].split(/\*\*(?:Gabarito|Certo\.|Errado\.)/i)[0],
        '3 - Materias/' + file + ':' + (index + 1), subjectId));
    }
  }
}

const expansion = bank.expansao.map(item => candidate(item.statement, item.id, item.subjectId));
const matches = [];
for (const [index, item] of expansion.entries()) {
  for (const other of [...existing, ...expansion.slice(0, index)]) {
    if (item.subjectId !== other.subjectId) continue;
    const shared = [...item.terms].filter(term => other.terms.has(term)).length;
    const union = item.terms.size + other.terms.size - shared;
    const score = shared / union;
    if (score >= threshold) matches.push({ item: item.ref, candidate: other.ref, score });
  }
}
matches.sort((a, b) => b.score - a.score);
console.log(JSON.stringify({ threshold, expansion: expansion.length, references: existing.length, matches }, null, 2));
