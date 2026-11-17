#!/usr/bin/env node
/**
 * Adaptador somente de leitura para preparar uma bateria de chat a partir da
 * expansão validada da Câmara. Não grava sessões, histórico ou respostas.
 * O filtro real de origem/validação permanece em select-camara-questions.js.
 */
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';
import { selectCamaraQuestions } from './select-camara-questions.js';

const required = ['id', 'subjectId', 'unitId', 'examPart', 'editalRef',
  'conceptId', 'statement', 'correctAnswer', 'explanation'];

export function bankVersion(bank) {
  if (bank?.concursoId !== 'camara-2026' || bank?.cargo !== 1) throw new Error('Banco incompatível');
  return 'sha256:' + createHash('sha256').update(JSON.stringify(bank)).digest('hex');
}

function nonempty(value) { return typeof value === 'string' && value.trim() !== ''; }

export function prepareChatBattery(bank, filters = {}, options = {}) {
  if (bank?.concursoId !== 'camara-2026' || bank?.cargo !== 1) {
    throw new Error('Banco incompatível com Câmara 2026, Cargo 1');
  }
  const count = filters.count ?? 10;
  if (!Number.isSafeInteger(count) || count < 1 || count > 180) {
    throw new Error('Quantidade inválida: use 1 a 180');
  }
  const excludeIds = new Set(options.excludeIds ?? []);
  const excluded = new Set();
  const selected = selectCamaraQuestions(bank, {
    ...filters,
    // Buscar candidatos além do limite solicitado evita reduzir a bateria
    // quando há histórico de itens já vistos.
    count: Math.max(count, bank.expansao?.length ?? count)
  }, options.random ?? Math.random)
    .filter(q => {
      if (!excludeIds.has(q.id)) return true;
      excluded.add(q.id);
      return false;
    })
    .slice(0, count);

  if (selected.length !== count) {
    throw new Error('Banco validado insuficiente após filtros e exclusões: ' +
      selected.length + '/' + count);
  }
  const ids = new Set();
  const items = selected.map((q, index) => {
    for (const key of required) {
      if (!nonempty(q[key])) throw new Error('Item sem ' + key + ': ' + (q.id ?? index));
    }
    if (!['C','E'].includes(q.correctAnswer)) throw new Error('Gabarito inválido: ' + q.id);
    if (!['P1', 'P2'].includes(q.examPart)) throw new Error('Parte inválida: ' + q.id);
    if (ids.has(q.id)) throw new Error('ID de questão duplicado: ' + q.id);
    ids.add(q.id);
    if (q.reviewStatus !== 'validada' || !nonempty(q.reviewEvidence)) {
      throw new Error('Questão sem revisão comprovada: ' + q.id);
    }
    return {
      order: index + 1,
      questionId: q.id,
      subjectId: q.subjectId,
      unitId: q.unitId,
      examPart: q.examPart,
      editalRef: q.editalRef,
      conceptId: q.conceptId,
      estimatedDifficulty: q.estimatedDifficulty ?? null,
      origin: q.origin ?? null,
      statement: q.statement,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      theoryRefs: q.theoryRefs ?? [],
      source: q.source ?? null
    };
  });
  return {
    schemaVersion: 1,
    kind: 'chat-battery-preparation',
    concursoId: 'camara-2026',
    mode: options.mode ?? 'aprendizagem',
    count: items.length,
    source: 'data/questoes-camara.json#expansao',
    sourceVersion: options.sourceVersion ?? bankVersion(bank),
    selection: {
      subjectId: filters.subjectId ?? null,
      unitId: filters.unitId ?? null,
      editalRef: filters.editalRef ?? null,
      difficulty: filters.difficulty ?? null,
      excludedPreviouslyAnswered: excluded.size
    },
    items
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const { values } = parseArgs({options: {
      subject: {type:'string'}, unit: {type:'string'}, edital: {type:'string'},
      difficulty: {type:'string'}, count: {type:'string', default:'10'},
      exclude: {type:'string'}, 'source-version': {type:'string'}
    }});
    const bank = JSON.parse(fs.readFileSync(
      new URL('../data/questoes-camara.json', import.meta.url), 'utf8'));
    const excludeIds = values.exclude ? JSON.parse(fs.readFileSync(values.exclude, 'utf8')) : [];
    if (!Array.isArray(excludeIds) || !excludeIds.every(nonempty)) {
      throw new Error('--exclude exige arquivo JSON contendo somente uma lista de IDs');
    }
    const batch = prepareChatBattery(bank, {
      subjectId: values.subject, unitId: values.unit, editalRef: values.edital,
      difficulty: values.difficulty, count: Number(values.count)
    }, {excludeIds, sourceVersion: values['source-version']});
    process.stdout.write(JSON.stringify(batch, null, 2) + '\n');
  } catch (error) {
    console.error('Falha ao preparar bateria: ' + error.message);
    process.exitCode = 1;
  }
}
