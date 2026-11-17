#!/usr/bin/env node
/**
 * Recupera SOMENTE a próxima questão de um checkpoint privado já lido
 * em ambiente autorizado. Não lê GitHub, não grava histórico e não envia gabarito.
 */
import fs from 'node:fs';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';
import { bankVersion } from './prepare-chat-battery.js';
import { resumePreparedBattery } from './resume-chat-battery.js';

const source = 'data/questoes-camara.json#expansao';
export function recoverChatBattery(bank, checkpoint) {
  if (bank?.concursoId !== 'camara-2026' || bank?.cargo !== 1 ||
      checkpoint?.concursoId !== 'camara-2026' ||
      checkpoint?.source !== source ||
      checkpoint?.sourceVersion !== bankVersion(bank)) {
    throw new Error('Concurso, fonte ou versão divergente. Recuperar a revisão exata do banco.');
  }
  if (checkpoint?.kind !== 'chat-battery-checkpoint' ||
      checkpoint?.schemaVersion !== 1 ||
      !Array.isArray(checkpoint.questionIds) ||
      new Set(checkpoint.questionIds).size !== checkpoint.questionIds.length) {
    throw new Error('Checkpoint privado inválido');
  }
  const map = new Map((bank.expansao ?? []).map(q => [q.id, q]));
  const items = checkpoint.questionIds.map((id, i) => {
    const q = map.get(id);
    if (!q || q.reviewStatus !== 'validada' || !q.reviewEvidence?.trim() ||
        !['C','E'].includes(q.correctAnswer) ||
        typeof q.statement !== 'string' || !q.statement.trim() ||
        !q.subjectId || !q.unitId) {
      throw new Error('Questão não validada ou ausente na versão original: ' + id);
    }
    return {order:i+1,questionId:id,statement:q.statement,
      subjectId:q.subjectId,unitId:q.unitId};
  });
  const packet = {
    kind:'chat-battery-preparation',
    concursoId:'camara-2026',
    mode:checkpoint.mode,
    source, sourceVersion:bankVersion(bank),
    count:items.length,items
  };
  return resumePreparedBattery(packet, checkpoint);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const { values } = parseArgs({options:{checkpoint:{type:'string'}}});
    if (!values.checkpoint) throw new Error('Informe --checkpoint com caminho local privado');
    const bank=JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json',import.meta.url),'utf8'));
    const checkpoint=JSON.parse(fs.readFileSync(values.checkpoint,'utf8'));
    process.stdout.write(JSON.stringify(recoverChatBattery(bank,checkpoint),null,2)+'\n');
  } catch(e) {
    console.error('Não foi possível retomar a bateria: '+e.message);
    process.exitCode=1;
  }
}
