import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildSubjectContexts, resolveCommand } from './study-context.js';
import { mergeSessions, scoreCamara, validateSession } from './study-sessions.js';
import { blockedCamaraTiQuestions, assertCamaraTiQuestionAllowed } from './camara-ti-question-guard.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const contests = JSON.parse(fs.readFileSync(new URL('../data/concursos.json', import.meta.url)));
const empty = {questions: [], simulations: []};
const day = '2026-11-11';
const index = buildSubjectContexts(root, empty, contests, day).index;
const route = command => resolveCommand(index, command, null, day);
assert.equal(route('Vamos fazer questões da Câmara').intent, 'diagnostico');
assert.equal(route('Quero revisar Processo Legislativo').unitId, 'processo-legislativo');
assert.equal(route('Faz uma bateria mista de 20 questões').totalQuestions, 20);
assert.equal(route('Vamos revisar meus erros').intent, 'revisao-erros');
assert.equal(route('Quero um simulado da Câmara').totalQuestions, 180);
assert.equal(route('Continua de onde parei').path, 'data/contexto-estudo/camara-2026.json');
assert.equal(route('Continuar Direito Administrativo da CGU').concursoId, 'cgu-2026');

const question = {
  number: 1, subjectId: 'direito-constitucional', unitId: 'processo-legislativo',
  examPart: 'P2', editalRef: '14.2.4 / Processo Legislativo e Regimento Interno / espécies legislativas',
  discipline: 'Direito Constitucional e processo legislativo', conceptId: 'lei-complementar-quorum',
  topic: 'Espécies legislativas', subtopic: 'Quórum', questionType: 'aplicacao',
  mechanism: 'presenca-versus-votos', distractorMechanism: 'troca de quórum',
  statement: 'Em uma votação com 300 deputados presentes e 240 votos favoráveis, um projeto de lei complementar foi aprovado.',
  explanation: 'A maioria absoluta exige 257 votos favoráveis dos 513 deputados.',
  format: 'CE', correctAnswer: 'E', userAnswer: 'C', confidence: 'insecure',
  origin: 'inedita', destinations: ['metrica_apenas'], annulled: false,
  errorType: 'confusao_conceitual',
  theoryRefs: ['article:art-4c1041281ca44ee5#Lei ordinária × lei complementar'],
  repetition: {classification: 'new', similarTo: [], intentional: false}
};
const session = {
  schemaVersion: 3, id: 'camara-fixture', date: day, startedAt: day + 'T12:00:00-03:00',
  concursoId: 'camara-2026', banca: 'Cebraspe', kind: 'microtreino', trainingMode: 'aprendizagem',
  scope: 'mixed', status: 'concluido', subjectId: null, unitId: null,
  diagnosis: 'Fixture em memória', nextStep: 'Rever quórum',
  learning: {stage: 'aprendizagem', taughtConcepts: [], boundaries: [], pending: [],
    unitCompleted: false, next: {unitId: null, stage: 'revisao', objective: 'Rever quórum', sourceIds: ['edital']}},
  questions: [question]
};
const validate = s => validateSession(s, s.id + '.json', root, contests);
validate(session);
const config = JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json', import.meta.url)));
const bankStatements = new Set();
for (const pilot of config.pilotoDidatico) {
  const key = pilot.statement.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
  assert(!bankStatements.has(key), 'Enunciado duplicado no banco didático');
  bankStatements.add(key);
  const discipline = index.contests.find(c => c.concursoId === 'camara-2026').subjects
    .find(s => s.id === pilot.subjectId).name;
  validate({...session, questions: [{...question, ...pilot, discipline,
    userAnswer: pilot.correctAnswer, errorType: null}]});
}
// O filtro deve detectar os 13 itens não homologados direto dos artigos de TI,
// sem rejeitar as 50 questões didáticas que possuem seus próprios gabaritos.
const blockedTi = blockedCamaraTiQuestions(root);
assert.equal(blockedTi.size, 13, 'CAM-TI: conferir alteração no total de itens não homologados');
for (const blocked of blockedTi.values()) {
  const article = fs.readFileSync(new URL('../3 - Materias/Informatica/' + blocked.file, import.meta.url), 'utf8');
  const substituteId = 'S' + blocked.file.slice(0, 2) + '-' + blocked.number;
  assert(article.includes(substituteId),
    'CAM-TI: questão bloqueada sem substituta rastreável: ' + substituteId);
}

for (const item of blockedTi.values()) {
  const pilotTi = config.pilotoDidatico.find(x => x.subjectId === 'informatica');
  const disciplineTi = index.contests.find(x => x.concursoId === 'camara-2026').subjects
    .find(x => x.id === 'informatica').name;
  const q = {...question, ...pilotTi, number:1, discipline:disciplineTi,
    statement:item.statement, userAnswer:pilotTi.correctAnswer,
    confidence:'secure', errorType:null};
  assert.throws(() => assertCamaraTiQuestionAllowed(root,session,q), /NÃO HOMOLOGADA/);
  assert.throws(() => assertCamaraTiQuestionAllowed(root,session,{...q,origin:'real'}), /NÃO HOMOLOGADA/,
    'CAM-TI: mudar indevidamente a origem para real não pode liberar um enunciado bloqueado');
  assert.throws(() => validate({...session, questions:[q]}), /NÃO HOMOLOGADA/);
  // Nenhuma outra disciplina pode ser bloqueada pelo texto de Informática.
  assert.doesNotThrow(() => assertCamaraTiQuestionAllowed(root,session,
    {...q,subjectId:'portugues',unitId:'lingua-portuguesa'}));
}
for (const q of config.pilotoDidatico.filter(q => q.subjectId === 'informatica'))
  assert.doesNotThrow(() => assertCamaraTiQuestionAllowed(root,session,q));

assert.throws(() => validate({...session, questions: [{...question, examPart: 'P1'}]}), /Cargo 1/);
assert.throws(() => validate({...session, questions: [{...question, userAnswer: null}]}), /exige resposta/);
assert.throws(() => validate({...session, simulation: {elapsedSeconds: 1800}}), /90 itens/);
assert.throws(() => mergeSessions(empty, [{...session, questions: [question, {...question, number: 2}]}]), /enunciado repetido/);
const simulatedQuestions = Array.from({length: 180}, (_, index) => {
  const base = {...question, number: index + 1, statement: 'Fixture de distribuição ' + index,
    userAnswer: null, errorType: null, confidence: 'unknown',
    theoryRefs: ['3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte#Lei ordinária × lei complementar']};
  if (index >= 90) return base;
  return {...base, examPart: 'P1', unitId: 'constitucional-regimentos',
    editalRef: '14.2.3 / Direito Constitucional e Regimento / Poder Legislativo'};
});
const simulation = {...session, simulation: {elapsedSeconds: 18000, corpusComparison: 'Fixture de teste'},
  questions: simulatedQuestions};
validate(simulation);
assert.throws(() => validate({...simulation, simulation: {...simulation.simulation, elapsedSeconds: 18001}}), /5 horas/);
assert.deepEqual(mergeSessions(empty, [simulation]).simulations[0].netScore, {P1: 0, P2: 0, total: 0});

const ledger = mergeSessions(empty, [session]);
assert.deepEqual(ledger.simulations[0].netScore, {P1: 0, P2: -1, total: -1});
assert.deepEqual(scoreCamara([question, {...question, examPart: 'P1', userAnswer: 'E'}, {...question, userAnswer: null}]), {P1: 1, P2: -1, total: 0});
const { outputs } = buildSubjectContexts(root, ledger, contests, day);
const ctx = contest => JSON.parse(outputs.get('data/contexto-estudo/' + contest + '/direito-constitucional.json'));
assert.equal(ctx('camara-2026').gaps[0].dueOn, '2026-11-14');
const cguPath = 'data/contexto-estudo/cgu-2026/direito-administrativo.json';
assert.equal(outputs.get(cguPath), buildSubjectContexts(root, empty, contests, day).outputs.get(cguPath));
assert.equal(ledger.questions[0].confidence, 'insecure');
console.log('Câmara: roteamento, escopo, referência, pontuação, confiança, repetição, revisão e isolamento validados.');
