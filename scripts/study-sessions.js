#!/usr/bin/env node
// Sessões pequenas são entradas; ledger e blocos marcados são projeções reproduzíveis.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSubjectContexts, validateLearning, examProfile } from './study-context.js';
import { aplicarChangeSet, fileSha256 } from './changeset-transaction.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const START = '<!-- estudo-sessoes:inicio -->';
const END = '<!-- estudo-sessoes:fim -->';
const modes = ['aprendizagem', 'para_valer', 'real', 'adaptada', 'revisao'];
const errors = { conhecimento: 'K', confusao_conceitual: 'C', interpretacao: 'I', distracao: 'D' };
const destinations = ['metrica_apenas', 'enriquecimento_teorico', 'questao_comentada_candidata', 'erro_recorrente', 'nova_nota'];
const json = x => JSON.stringify(x, null, 2) + '\n';
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
const slug = x => typeof x === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(x);
const dateOK = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && !Number.isNaN(Date.parse(x)) && new Date(x).toISOString().slice(0, 10) === x;
const text = x => typeof x === 'string' && x.trim().length > 0;
function safeRef(root, ref) {
  assert(text(ref) && ref.includes('#'), `Referência exige subtítulo: ${ref}`);
  const [raw, heading] = ref.split('#');
  assert(raw.startsWith('3 - Materias/') && !raw.includes('..') && !raw.includes('\\') && text(heading), `Referência inválida: ${ref}`);
  const p = path.join(root, raw.endsWith('.md') ? raw : raw + '.md');
  assert(fs.existsSync(p), `Nota ausente: ${ref}`);
  const headings = fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(l => /^#{1,6} /.test(l)).map(l => l.replace(/^#{1,6} /, '').trim());
  assert(headings.includes(heading), `Subtítulo ausente: ${ref}`);
}
export function validateSession(s, filename, root, concursos) {
  assert([1, 2].includes(s.schemaVersion) && slug(s.id) && filename === s.id + '.json', `Identidade inválida: ${filename}`);
  assert(text(s.startedAt) && /(?:Z|[+-]\d{2}:\d{2})$/.test(s.startedAt) && Number.isFinite(Date.parse(s.startedAt)), `${s.id}: startedAt exige data/hora com fuso`);
  assert(dateOK(s.date) && ['parcial', 'concluido'].includes(s.status), `${s.id}: data/status inválido`);
  assert(concursos.some(c => c.id === s.concursoId && c.banca === s.banca), `${s.id}: concurso/banca incompatível`);
  const profile = examProfile(concursos.find(c => c.id === s.concursoId));
  assert(s.kind === 'microtreino' || (s.schemaVersion === 2 && s.kind === 'aula'), `${s.id}: simulados integrais seguem o contrato próprio de propagação`);
  assert(modes.includes(s.trainingMode), `${s.id}: modalidade inválida`);
  assert(text(s.diagnosis) && text(s.nextStep), `${s.id}: diagnóstico/próximo passo ausentes`);
  assert(Array.isArray(s.questions) && (s.questions.length > 0 || s.kind === 'aula'), `${s.id}: questões ausentes`);
  validateLearning(root, s, concursos);
  const numbers = new Set();
  for (const q of s.questions) {
    assert(Number.isInteger(q.number) && q.number > 0 && !numbers.has(q.number), `${s.id}: número repetido/inválido`); numbers.add(q.number);
    for (const k of ['discipline', 'topic', 'subtopic', 'questionType', 'distractorMechanism', 'statement', 'explanation']) assert(text(q[k]), `${s.id}/Q${q.number}: ${k} ausente`);
    assert(slug(q.mechanism), `${s.id}/Q${q.number}: mecanismo inválido`);
    assert(['CE', 'AE'].includes(q.format), `${s.id}: formato inválido`);
    if (s.concursoId === 'cgu-2026') assert(q.format === profile.questionFormat, `${s.id}: CGU 2026 exige itens Certo/Errado (CE), inclusive no legado por sessão`);
    const allowed = q.format === 'CE' ? ['C', 'E'] : ['A', 'B', 'C', 'D', 'E'];
    assert(allowed.includes(q.correctAnswer) && (q.userAnswer === null || allowed.includes(q.userAnswer)), `${s.id}: gabarito/resposta inválida`);
    assert(['secure', 'insecure', 'guess', 'unknown'].includes(q.confidence), `${s.id}: confiança inválida`);
    assert(['inedita', 'real', 'adaptada'].includes(q.origin), `${s.id}: origem inválida`);
    if (s.trainingMode === 'real') assert(q.origin === 'real', `${s.id}: modalidade real exige origem real`);
    if (s.trainingMode === 'adaptada') assert(q.origin === 'adaptada', `${s.id}: modalidade adaptada exige origem adaptada`);
    if (['aprendizagem', 'para_valer'].includes(s.trainingMode)) assert(q.origin === 'inedita', `${s.id}: treino inédito exige origem inédita`);
    if (q.origin !== 'inedita' || s.trainingMode === 'para_valer') assert(text(q.sourceEvidence), `${s.id}: fonte/calibração identificável obrigatória`);
    if (q.format === 'AE') assert(Array.isArray(q.options) && q.options.length === 5 && q.options.every(text), `${s.id}: cinco alternativas obrigatórias`);
    assert(Array.isArray(q.destinations) && q.destinations.length && q.destinations.every(d => destinations.includes(d)), `${s.id}: destinos pedagógicos inválidos`);
    assert(typeof q.annulled === 'boolean', `${s.id}: annulled deve ser booleano`);
    if (q.annulled) assert(text(q.annulmentReason), `${s.id}: anulação sem motivo`);
    const incorrect = !q.annulled && q.userAnswer !== null && q.userAnswer !== q.correctAnswer;
    if (incorrect) assert(Object.hasOwn(errors, q.errorType), `${s.id}: erro exige causa semântica`);
    else assert(q.errorType === null, `${s.id}: causa de erro só cabe em erro válido`);
    assert(Array.isArray(q.theoryRefs), `${s.id}: theoryRefs deve ser array`);
    if (incorrect || ['insecure', 'guess'].includes(q.confidence)) assert(q.theoryRefs.length || (s.schemaVersion === 2 && q.sourceRefs?.length), `${s.id}: erro/dúvida exige referência`);
    q.theoryRefs.forEach(ref => safeRef(root, ref));
    const rep = q.repetition;
    assert(rep && ['new', 'thematic', 'mechanical', 'exact'].includes(rep.classification) && Array.isArray(rep.similarTo) && typeof rep.intentional === 'boolean', `${s.id}: repetição inválida`);
    if (rep.classification !== 'new') assert(rep.similarTo.length > 0, `${s.id}: repetição sem origem`);
    if (['mechanical', 'exact'].includes(rep.classification)) assert(rep.intentional && text(rep.transformation), `${s.id}: repetição exige transformação intencional`);
    const avancos = `3 - Materias/${q.discipline}/Avancos.md`;
    assert(!q.discipline.includes('/') && !q.discipline.includes('..') && (s.schemaVersion === 2 || fs.existsSync(path.join(root, avancos))), `${s.id}: criar/indexar avanços da disciplina antes: ${avancos}`);
  }
}
export function mergeSessions(legacy, sessions) {
  const ledger = structuredClone(legacy);
  ledger.questions = ledger.questions.filter(q => !q.sessionFile);
  ledger.simulations = ledger.simulations.filter(s => !s.sessionFile);
  const ids = new Set(ledger.questions.map(q => q.id));
  const sources = new Set(ledger.simulations.map(s => s.id));
  for (const s of sessions) {
    assert(!sources.has(s.id), `Sessão já existe no legado: ${s.id}. Corrigir o registro original; não importar novamente.`); sources.add(s.id);
    const sessionFile = `data/sessoes/${s.id}.json`;
    const qs = s.questions.map(q => {
      const id = `${s.id}-q${q.number}`;
      assert(!ids.has(id), `Questão duplicada: ${id}`); ids.add(id);
      return { ...q, id, sourceId: s.id, sessionFile, sourcePath: sessionFile, date: s.date, startedAt: s.startedAt, concursoId: s.concursoId, banca: s.banca,
        checkpointSchema: s.schemaVersion, subjectId: s.subjectId, unitId: q.unitId || s.unitId, trainingMode: s.trainingMode, result: q.annulled ? 'annulled' : q.userAnswer === null ? 'blank' : q.userAnswer === q.correctAnswer ? 'correct' : 'incorrect', errorType: q.errorType ? errors[q.errorType] : null };
    });
    const counts = {new:0,thematic:0,mechanical:0,exact:0};
    qs.forEach(q => counts[q.repetition.classification]++);
    const rate = n => qs.length ? Number((n / qs.length).toFixed(4)) : 0;
    const generationAudit = {counts,newRate:rate(counts.new),thematicRate:rate(counts.thematic),mechanicalRate:rate(counts.mechanical),exactRate:rate(counts.exact),intentionalReviewRate:rate(qs.filter(q=>q.repetition.intentional).length)};
    ledger.questions.push(...qs);
    ledger.simulations.push({ id: s.id, sessionFile, sourcePath: sessionFile, date: s.date, startedAt: s.startedAt, concursoId: s.concursoId, banca: s.banca,
      subjectId: s.subjectId, unitId: s.unitId, learning: s.learning, tipo: s.kind === 'aula' ? 'aula' : 'microtreino', isSimulado: false, status: s.status, trainingModes: [s.trainingMode], totalQuestions: qs.length,
      ledgerCoverage: 'complete', benchmarkEligible: false, qualityNote: s.diagnosis, nextStep: s.nextStep, generationAudit, noveltyException: s.noveltyException || (s.kind === 'aula' ? 'Checkpoint de exposição sem questões; fora de benchmark e métricas de acerto.' : null),
      confidenceTracking: { coverage: qs.length && qs.every(q => q.confidence !== 'unknown') ? 'complete' : 'partial' } });
  }
  for (const q of ledger.questions.filter(q => q.sessionFile)) for (const id of q.repetition.similarTo) assert(ids.has(id) && id !== q.id, `${q.id}: referência de repetição inexistente/autorreferente: ${id}`);
  return ledger;
}
export function stats(qs) {
  const count = result => qs.filter(q => q.result === result).length;
  const correct = count('correct'), incorrect = count('incorrect'), blank = count('blank'), annulled = count('annulled');
  return { total: qs.length, correct, incorrect, blank, annulled, answered: correct + incorrect, valid: correct + incorrect + blank,
    accuracy: correct + incorrect ? correct / (correct + incorrect) : null, sample: correct + incorrect < 50 ? 'insuficiente' : 'volume >= 50; verificar representatividade' };
}
const tableCell = x => String(x ?? '').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
function table(headers, rows) { return [headers, headers.map(() => ':---'), ...rows].map(r => '| ' + r.map(tableCell).join(' | ') + ' |').join('\n'); }
function dayShift(date, n) { const d = new Date(date + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function week(date) { const d = new Date(date + 'T12:00:00Z'); return dayShift(date, -((d.getUTCDay() + 6) % 7)); }
function grouped(qs, key) {
  const m = new Map(); for (const q of qs) { const k = key(q); if (!m.has(k)) m.set(k, []); m.get(k).push(q); }
  return [...m].sort(([a], [b]) => b.localeCompare(a)).map(([key, questions]) => ({ key, questions, ...stats(questions) }));
}
function metrics(qs, key, label) {
  return table([label, 'Acertos', 'Erros', 'Brancos', 'Anulados', 'Acerto entre respondidas', 'Amostra'], grouped(qs, key).map(r => [r.key, r.correct, r.incorrect, r.blank, r.annulled, r.accuracy === null ? 'Sem respostas válidas' : (100 * r.accuracy).toFixed(1) + '%', r.sample]));
}
export function managedBlock(content, body) {
  const block = START + '\n' + body + '\n' + END;
  const begin = content.indexOf(START), end = content.indexOf(END);
  assert((begin === -1) === (end === -1) && (begin === -1 || end > begin), 'Marcadores automáticos corrompidos');
  if (begin !== -1) return content.slice(0, begin) + block + content.slice(end + END.length);
  const match = content.match(/^# .+$/m); assert(match, 'Documento sem H1');
  const at = match.index + match[0].length;
  return content.slice(0, at) + '\n\n' + block + '\n\n## Histórico preservado\n\nOs registros abaixo são anteriores à projeção automática. Não somar seus totais às tabelas acima.\n' + content.slice(at);
}
export function prepare(root = ROOT, asOf) {
  const read = p => fs.readFileSync(path.join(root, p), 'utf8');
  const legacy = JSON.parse(read('data/questoes-ledger.json'));
  const concursos = JSON.parse(read('data/concursos.json'));
  const dir = path.join(root, 'data/sessoes');
  const sessions = fs.existsSync(dir) ? fs.readdirSync(dir).filter(p => p.endsWith('.json')).sort().map(p => { const s = JSON.parse(read('data/sessoes/' + p)); validateSession(s, p, root, concursos); return s; }).sort((a,b) => Date.parse(a.startedAt) - Date.parse(b.startedAt) || a.id.localeCompare(b.id)) : [];
  for (const old of legacy.simulations.filter(s => s.sessionFile)) assert(sessions.some(s => s.id === old.id), `Sessão removida: ${old.id}. Preserve o arquivo e anule itens com motivo.`);
  for (const q of legacy.questions.filter(q => q.sessionFile)) {
    const session = sessions.find(s => `data/sessoes/${s.id}.json` === q.sessionFile);
    assert(session?.questions.some(item => item.number === q.number), `Questão removida: ${q.id}. Preserve a resposta e anule com motivo.`);
  }
  const ledger = mergeSessions(legacy, sessions);
  const source = new Map(ledger.simulations.map(s => [s.id, s]));
  const qs = ledger.questions;
  // Corte reproduzível: último dia documentado, sem churn a cada build.
  const cut = asOf || [...ledger.simulations.map(s => s.date), ...qs.map(q => q.date)].filter(dateOK).sort().at(-1);
  assert(dateOK(cut), 'Sem data de referência válida');
  const mode = q => q.trainingMode || source.get(q.sourceId)?.trainingModes?.join('+') || (source.get(q.sourceId)?.isSimulado === false ? 'não classificada' : 'simulado histórico');
  const key = q => `${q.concursoId} / ${q.discipline} / ${mode(q)}`;
  const dated = qs.filter(q => dateOK(q.date || source.get(q.sourceId)?.date)).map(q => ({ ...q, date: q.date || source.get(q.sourceId).date }));
  const recent = dated.filter(q => q.date >= dayShift(cut, -29) && q.date <= cut);
  const notice = `## Indicadores automáticos\n\nCorte: **${cut}**. Fonte: itens individualizados no ledger, incluindo sessões do chat. Histórico parcialmente recuperado não equivale ao volume total estudado. Percentual = acertos / (acertos + erros); brancos e anulados separados. Modalidades e concursos permanecem separados. Volume de 50 itens não comprova domínio. Sem estimativa de nota oficial ou inferência de fadiga.\n`;
  const outputs = new Map([['data/questoes-ledger.json', json(ledger)]]);
  const projection = (p, body) => outputs.set(p, managedBlock(read(p), notice + '\n' + body));
  projection('00 - Desempenho/00 Avancos globais.md', '### Janela de 30 dias\n\n' + metrics(recent, key, 'Concurso / disciplina / modalidade') + '\n\n### Volume semanal\n\n' + metrics(dated, q => `${week(q.date)} / ${key(q)}`, 'Segunda-feira / concurso / disciplina / modalidade'));
  projection('00 - Desempenho/01 Log de saturacao diaria.md', metrics(dated, q => `${q.date} / ${key(q)}`, 'Dia / concurso / disciplina / modalidade') + '\n\nCarga cognitiva e sintomas só podem ser registrados quando relatados pelo estudante.');
  projection('00 - Desempenho/Provas/00 - Desempenho por edital e prova.md', metrics(qs, key, 'Concurso / disciplina / modalidade') + '\n\nMicrotreinos são diagnósticos do recorte, sem nota integral. Simulados históricos mantêm seus resultados próprios abaixo.');
  for (const discipline of [...new Set(sessions.flatMap(s => s.questions.map(q => q.discipline)))]) {
    if (!fs.existsSync(path.join(root, `3 - Materias/${discipline}/Avancos.md`))) continue;
    projection(`3 - Materias/${discipline}/Avancos.md`, '### Janela de 30 dias\n\n' + metrics(recent.filter(q => q.discipline === discipline), key, 'Concurso / disciplina / modalidade') + '\n\n### Volume diário\n\n' + metrics(dated.filter(q => q.discipline === discipline), q => `${q.date} / ${q.concursoId} / ${mode(q)}`, 'Dia / concurso / modalidade'));
  }
  const contexts = concursos.map(c => {
    const all = qs.filter(q => q.concursoId === c.id);
    const last = ledger.simulations.filter(s => s.concursoId === c.id).reverse().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    const ids = new Set(last.map(s => s.id));
    return { concursoId: c.id, banca: c.banca, activeExam: examProfile(c), cut, coverage: 'somente itens individualizados; legado pode ser parcial', totals: grouped(all, q => `${q.discipline} / ${mode(q)}`).map(({ questions, ...r }) => r),
      recentSessions: last.map(s => ({ id: s.id, date: s.date, sourcePath: s.sourcePath, status: s.status || 'historico', diagnosis: s.qualityNote || null, nextStep: s.nextStep || null })),
      recentMechanisms: [...new Set(all.filter(q => ids.has(q.sourceId)).map(q => q.mechanism))].sort(),
      review: all.filter(q => q.result === 'incorrect' || ['insecure', 'guess'].includes(q.confidence)).slice(-30).map(q => ({ id: q.id, topic: q.topic, result: q.result, confidence: q.confidence, theoryRefs: q.theoryRefs })) };
  });
  for (const context of contexts) outputs.set(`data/contexto-estudo/${context.concursoId}.json`, json({ schemaVersion: 1, ...context }));
  const subjectContexts = buildSubjectContexts(root, ledger, concursos, cut);
  for (const [p, content] of subjectContexts.outputs) outputs.set(p, content);
  for (const c of subjectContexts.index.contests) {
    const p = `data/contexto-estudo/${c.concursoId}.json`;
    const summary = JSON.parse(outputs.get(p));
    summary.resume = c.resume;
    summary.subjectIndexPath = 'data/contexto-estudo/indice.json';
    outputs.set(p, json(summary));
  }
  // Manifesto explícito e determinístico para persistir somente saídas autorizadas no CI.
  outputs.set('data/sessoes-saidas.json', json([...outputs.keys(), 'data/sessoes-saidas.json'].sort()));
  const previousOutputs = fs.existsSync(path.join(root, 'data/sessoes-saidas.json')) ? JSON.parse(read('data/sessoes-saidas.json')) : [];
  const retiredPages = previousOutputs.filter(p => /^data\/contexto-estudo\/[a-z0-9-]+\/[a-z0-9-]+\/revisoes-\d{3}\.json$/.test(p) && !outputs.has(p) && fs.existsSync(path.join(root, p)));
  const operations = [...outputs].filter(([p, content]) => !fs.existsSync(path.join(root, p)) || read(p) !== content).map(([p, content]) => ({ op: fs.existsSync(path.join(root, p)) ? 'replace' : 'create', path: p, expectedSha256: fileSha256(path.join(root, p)), content }));
  for (const p of retiredPages) operations.push({ op: 'delete', path: p, expectedSha256: fileSha256(path.join(root, p)) });
  return { version: 1, operations };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const plan = prepare();
    if (process.argv.includes('--check')) { assert(plan.operations.length === 0, 'Projeções desatualizadas: execute node scripts/study-sessions.js'); console.log('Sessões e projeções consistentes.'); }
    else { if (plan.operations.length) aplicarChangeSet(ROOT, plan); console.log(`Sessões processadas: ${plan.operations.length} arquivo(s) atualizado(s).`); }
  } catch (e) { console.error(e.message); process.exit(1); }
}
