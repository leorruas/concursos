/**
 * Recuperação em memória de uma bateria preparada.
 * Biblioteca sem I/O: nunca grava respostas no repositório público.
 * Persistência e autorização pertencem ao cofre privado.
 */
function requiredString(value, label) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(label + ' inválido');
}
export function resumePreparedBattery(packet, checkpoint) {
  if (packet?.kind !== 'chat-battery-preparation' ||
      !Number.isSafeInteger(packet.count) || packet.count < 1 ||
      !Array.isArray(packet.items) || packet.items.length !== packet.count) {
    throw new Error('Pacote de questões inválido');
  }
  requiredString(packet.concursoId, 'concursoId');
  if (!checkpoint ||
      (checkpoint.sessionId != null && checkpoint.sessionId !== checkpoint.id) ||
      typeof checkpoint.id !== 'string' || !checkpoint.id.trim() ||
      (checkpoint.kind != null && checkpoint.kind !== 'chat-battery-checkpoint') ||
      (checkpoint.schemaVersion != null && checkpoint.schemaVersion !== 1)) {
    throw new Error('Checkpoint sem ID estável');
  }
  if (checkpoint.concursoId !== packet.concursoId ||
      (checkpoint.mode != null && checkpoint.mode !== packet.mode) ||
      checkpoint.source !== packet.source ||
      checkpoint.sourceVersion !== packet.sourceVersion) {
    throw new Error('Checkpoint pertence a outra seleção ou versão do banco');
  }
  if (!Array.isArray(checkpoint.questionIds) ||
      checkpoint.questionIds.length !== packet.items.length ||
      checkpoint.questionIds.some((id, i) => id !== packet.items[i]?.questionId)) {
    throw new Error('Ordem ou identidade das questões divergente');
  }
  if (!['in_progress', 'completed'].includes(checkpoint.status) ||
      !Array.isArray(checkpoint.answers) ||
      checkpoint.answers.length > packet.items.length) {
    throw new Error('Checkpoint ou lista de respostas inválidos');
  }
  const seen = new Set();
  for (const [i, answer] of checkpoint.answers.entries()) {
    if (!answer || answer.questionId !== packet.items[i].questionId ||
        seen.has(answer.questionId) ||
        !['C', 'E', null].includes(answer.userAnswer) ||
        !['secure', 'insecure', 'guess', 'unknown'].includes(answer.confidence)) {
      throw new Error('Resposta fora da ordem, duplicada ou inválida na posição ' + (i + 1));
    }
    if (answer.userAnswer === null && packet.mode !== 'simulado') {
      throw new Error('Resposta em branco não permitida em bateria didática');
    }
    if (answer.userAnswer === null && answer.confidence !== 'unknown') {
      throw new Error('Resposta em branco não deve carregar confiança de julgamento');
    }
    seen.add(answer.questionId);
  }
  if (checkpoint.status === 'completed' &&
      checkpoint.answers.length !== packet.items.length) {
    throw new Error('Sessão declarada concluída sem todas as respostas');
  }
  if (checkpoint.status === 'in_progress' &&
      checkpoint.answers.length === packet.items.length) {
    throw new Error('Sessão completa ainda marcada como em andamento');
  }
  const nextIndex = checkpoint.answers.length;
  return {
    sessionId: checkpoint.id,
    concursoId: packet.concursoId,
    answered: nextIndex,
    total: packet.count,
    status: checkpoint.status,
    nextIndex,
    // Apenas o próximo item; nenhum histórico de respostas no resultado.
    nextQuestion: nextIndex === packet.items.length ? null : {
      order: packet.items[nextIndex].order,
      questionId: packet.items[nextIndex].questionId,
      statement: packet.items[nextIndex].statement,
      subjectId: packet.items[nextIndex].subjectId,
      unitId: packet.items[nextIndex].unitId
    }
  };
}
export function newPreparedCheckpoint(packet, sessionId) {
  requiredString(sessionId, 'sessionId');
  if (packet?.kind !== 'chat-battery-preparation' ||
      !Array.isArray(packet.items) || packet.items.length !== packet.count ||
      !packet.items.length || !packet.items.every(q => typeof q.questionId === 'string')) {
    throw new Error('Pacote inválido');
  }
  return {
    id: sessionId,
    sessionId,
    concursoId: packet.concursoId,
    source: packet.source,
    sourceVersion: packet.sourceVersion,
    questionIds: packet.items.map(q => q.questionId),
    status: 'in_progress',
    answers: []
  };
}
