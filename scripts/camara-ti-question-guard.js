// Proteção exclusiva de enunciados inéditos CAM-TI, baseada nos próprios artigos.
import fs from 'node:fs';
import path from 'node:path';

const cache = new Map();
export const normalizeCamaraTiStatement = value => String(value || '').normalize('NFKC')
  .toLowerCase().replace(/[\u002a_`]/g, '').replace(/\s+/g, ' ').trim();

export function blockedCamaraTiQuestions(root) {
  const folder = path.join(root, '3 - Materias/Informatica');
  if (!fs.existsSync(folder)) throw new Error('CAM-TI: artigos indisponíveis para conferir gabaritos bloqueados');
  const files = fs.readdirSync(folder).filter(n => /^\d{2} - .*\.md$/.test(n)).sort();
  const stamp = files.map(n => {const s=fs.statSync(path.join(folder,n));return n+':'+s.mtimeMs+':'+s.size}).join('|');
  if (cache.get(folder)?.stamp === stamp) return cache.get(folder).items;
  const items = new Map();
  for (const file of files) {
    const content = fs.readFileSync(path.join(folder,file),'utf8');
    for (const block of content.split(/(?=^### (?:Item|Questão)\s+\d+\b)/m)) {
      const number = block.match(/^### (?:Item|Questão)\s+(\d+)\b/m)?.[1];
      if (!number || !/Gabarito[^\n]*NÃO HOMOLOGADO/.test(block)) continue;
      const statement = block.match(/^>\s*(?:\*\*Assertiva:\*\*\s*)?(.+)$/m)?.[1];
      if (!statement) throw new Error(`CAM-TI: bloqueio sem enunciado (${file} Q${number})`);
      const key = normalizeCamaraTiStatement(statement);
      if (!key || items.has(key)) throw new Error(`CAM-TI: enunciado vazio ou duplicado (${file} Q${number})`);
      items.set(key, {file, number:Number(number), statement});
    }
  }
  cache.set(folder, {stamp,items});
  return items;
}

export function assertCamaraTiQuestionAllowed(root, session, question) {
  if (session.concursoId !== 'camara-2026' || question.origin === 'real') return;
  const subject = question.subjectId || session.subjectId;
  const unit = question.unitId || session.unitId;
  if (subject !== 'informatica' && unit !== 'tecnologia-e-dados') return;
  const blocked = blockedCamaraTiQuestions(root).get(normalizeCamaraTiStatement(question.statement));
  if (blocked) throw new Error(`CAM-TI: questão NÃO HOMOLOGADA bloqueada (${blocked.file}, item ${blocked.number})`);
}
