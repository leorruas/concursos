import assert from 'node:assert/strict';
import { selectCamaraQuestions } from './select-camara-questions.js';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { assertCamaraTiQuestionAllowed } from './camara-ti-question-guard.js';
import { articleMetadata } from './article-identity.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = path => fs.readFileSync(new URL(path, import.meta.url), 'utf8');
const bank = JSON.parse(read('../data/questoes-camara.json'));
const catalog = JSON.parse(read('../data/catalogo-materias-por-concurso.json'))
  .contests.find(contest => contest.concursoId === bank.concursoId);
const normalize = value => value.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
const statements = new Set(bank.pilotoDidatico.map(item => normalize(item.statement)));
const ids = new Set(bank.pilotoDidatico.map(item => item.id).filter(Boolean));
const articles = new Map();
const levels = ['facil', 'media', 'dificil', 'muito-dificil'];
const operations = ['reconhecimento', 'compreensão', 'aplicação', 'análise', 'integração'];
const required = ['id', 'conceptId', 'mechanism', 'questionType', 'statement', 'explanation'];

assert(Array.isArray(bank.expansao));
for (const item of bank.expansao) {
  const label = item.id || '(sem ID)';
  for (const key of required) {
    assert(typeof item[key] === 'string' && item[key].trim(), label + ' / ' + key);
  }
  assert(!ids.has(item.id), 'ID repetido: ' + label);
  ids.add(item.id);
  const statement = normalize(item.statement);
  assert(!statements.has(statement), 'Enunciado repetido: ' + label);
  statements.add(statement);

  assert.equal(item.concursoId, bank.concursoId, label);
  assert.equal(item.origin, 'inedita', label);
  assert.equal(item.format, 'CE', label);
  assert(['C', 'E'].includes(item.correctAnswer), label);
  assert(levels.includes(item.estimatedDifficulty), label);
  assert(operations.includes(item.cognitiveOperation), label);
  assert(['gerada', 'revisada', 'validada', 'bloqueada'].includes(item.reviewStatus), label);
  const unit = bank.subjects[item.subjectId]?.units.find(([id]) => id === item.unitId);
  assert(unit && unit[2] === item.examPart, 'Unidade incompatível: ' + label);
  assert(item.editalRef.startsWith(unit[3] + ' / '), 'Referência incompatível: ' + label);
  const subject = catalog.subjects.find(candidate => candidate.subjectId === item.subjectId);
  assert(subject?.articleIds.includes(item.articleId), 'Artigo fora do catálogo: ' + label);

  const {path, section} = item.source;
  assert(path.startsWith('3 - Materias/') && !path.split('/').includes('..'), label);
  if (!articles.has(path)) articles.set(path, read('../' + path));
  const article = articles.get(path);
  assert.equal(articleMetadata(article).articleId, item.articleId, label);
  assert(article.split(/\r?\n/).some(line => line.replace(/^#{1,6} /, '') === section), label);
  assert(item.theoryRefs.includes('article:' + item.articleId + '#' + section), label);

  if (item.reviewStatus === 'validada') {
    assert(item.reviewEvidence?.trim(), 'Evidência de revisão ausente: ' + label);
    assertCamaraTiQuestionAllowed(root, { concursoId: bank.concursoId }, item);
  }
}

console.log('Câmara: integridade de ' + bank.expansao.length + ' itens de expansão verificada.');

const fixture = bank.expansao[0];
const selection = selectCamaraQuestions({ expansao: [
  { ...fixture, id: 'gerada', reviewStatus: 'gerada' },
  { ...fixture, id: 'revisada', reviewStatus: 'revisada' },
  { ...fixture, id: 'bloqueada', reviewStatus: 'bloqueada', reviewEvidence: 'fixture' },
  { ...fixture, id: 'sem-evidencia', reviewStatus: 'validada', reviewEvidence: '' },
  { ...fixture, id: 'validada', reviewStatus: 'validada', reviewEvidence: 'fixture' },
] }, { unitId: fixture.unitId, difficulty: fixture.estimatedDifficulty });
assert.deepEqual(selection.map(item => item.id), ['validada']);
assert.deepEqual(selectCamaraQuestions({ expansao: selection }, { unitId: 'outra' }), []);
