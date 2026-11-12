import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

export function selectCamaraQuestions(bank, filters = {}, random = Math.random) {
  const { subjectId, unitId, editalRef, difficulty, count = 10 } = filters;
  if (!Number.isSafeInteger(count) || count < 1) throw new Error('Quantidade inválida');
  const difficulties = difficulty?.split(',');
  const candidates = (bank.expansao ?? []).filter(item =>
    item.reviewStatus === 'validada' && item.reviewEvidence?.trim() &&
    (!subjectId || subjectId === item.subjectId) &&
    (!unitId || unitId === item.unitId) &&
    (!editalRef || item.editalRef === editalRef || item.editalRef.startsWith(editalRef + ' / ')) &&
    (!difficulties || difficulties.includes(item.estimatedDifficulty)));

  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const concepts = new Set();
  const first = [];
  const repeated = [];
  for (const item of candidates) {
    const key = item.subjectId + '/' + item.conceptId;
    if (concepts.has(key)) repeated.push(item);
    else {
      concepts.add(key);
      first.push(item);
    }
  }
  return [...first, ...repeated].slice(0, count);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { values } = parseArgs({ options: {
    subject: { type: 'string' },
    unit: { type: 'string' },
    edital: { type: 'string' },
    difficulty: { type: 'string' },
    count: { type: 'string', default: '10' },
  } });
  const bank = JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json', import.meta.url), 'utf8'));
  const selected = selectCamaraQuestions(bank, {
    subjectId: values.subject,
    unitId: values.unit,
    editalRef: values.edital,
    difficulty: values.difficulty,
    count: Number(values.count),
  });
  console.log(JSON.stringify(selected, null, 2));
}
