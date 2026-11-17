/**
 * Recuperar uma bateria do chat usando somente um checkpoint privado já autorizado
 * e a resposta de UMA questão da API pública /v1/public/quiz/batch?question=ID.
 * Sem I/O, gravação, acesso a arquivos privados ou carregamento do banco completo.
 */
const ensure=(c,m)=>{if(!c)throw new Error(m)};
const nonempty=x=>typeof x==='string'&&x.trim().length>0;
const source='data/questoes-publicas.json#questions';

export function nextPublicQuestionId(checkpoint) {
  ensure(checkpoint?.schemaVersion===1&&checkpoint?.kind==='chat-battery-checkpoint',
    'Contrato de checkpoint incompatível');
  ensure(nonempty(checkpoint.id)&&checkpoint.concursoId==='camara-2026'&&
    checkpoint.source===source&&/^sha256:[0-9a-f]{64}$/.test(checkpoint.sourceVersion),
    'Identidade, concurso ou versão inválidos');
  ensure(checkpoint.mode==='aprendizagem','Modo não atendido pela API pública');
  ensure(Array.isArray(checkpoint.questionIds)&&checkpoint.questionIds.length>=1&&
    checkpoint.questionIds.length<=180&&checkpoint.questionIds.every(nonempty)&&
    new Set(checkpoint.questionIds).size===checkpoint.questionIds.length,
    'Lista de questões inválida');
  ensure(Array.isArray(checkpoint.answers)&&
    checkpoint.answers.length<=checkpoint.questionIds.length,
    'Lista de respostas inválida');
  const attempts=new Set();
  for(const [i,a] of checkpoint.answers.entries()){
    ensure(a&&a.questionId===checkpoint.questionIds[i]&&nonempty(a.attemptId)&&
      !attempts.has(a.attemptId)&&['C','E'].includes(a.userAnswer)&&
      ['secure','insecure','guess','unknown'].includes(a.confidence),
      'Resposta divergente, duplicada ou fora da ordem');
    attempts.add(a.attemptId);
  }
  ensure(['in_progress','completed'].includes(checkpoint.status),'Status inválido');
  ensure((checkpoint.status==='completed')===
    (checkpoint.answers.length===checkpoint.questionIds.length),
    'Status e progresso divergentes');
  return checkpoint.status==='completed'?null:checkpoint.questionIds[checkpoint.answers.length];
}

export function recoverPublicChatQuestion(checkpoint, publicResponse) {
  const id=nextPublicQuestionId(checkpoint);
  if(id===null)return {
    sessionId:checkpoint.id,status:'completed',answered:checkpoint.answers.length,
    total:checkpoint.questionIds.length,nextQuestion:null
  };
  ensure(publicResponse?.schemaVersion===1&&
    publicResponse.kind==='chat-battery-preparation'&&
    publicResponse.concursoId===checkpoint.concursoId&&
    publicResponse.mode===checkpoint.mode&&publicResponse.source===checkpoint.source&&
    publicResponse.sourceVersion===checkpoint.sourceVersion,
    'Resposta pública pertence a outra origem ou versão');
  ensure(publicResponse.count===1&&Array.isArray(publicResponse.items)&&
    publicResponse.items.length===1,'Esperada exatamente uma questão');
  const q=publicResponse.items[0];
  ensure(q?.questionId===id&&nonempty(q.statement)&&nonempty(q.explanation)&&
    ['C','E'].includes(q.correctAnswer)&&nonempty(q.subjectId)&&nonempty(q.unitId),
    'Questão pública não corresponde ao checkpoint');
  return {
    sessionId:checkpoint.id,status:'in_progress',
    answered:checkpoint.answers.length,total:checkpoint.questionIds.length,
    nextQuestion:{
      order:checkpoint.answers.length+1,questionId:id,
      subjectId:q.subjectId,unitId:q.unitId,examPart:q.examPart??null,
      estimatedDifficulty:q.estimatedDifficulty??null,
      statement:q.statement,correctAnswer:q.correctAnswer,
      explanation:q.explanation,articleId:q.articleId??null,section:q.section??null
    }
  };
}
