import assert from 'node:assert/strict';
import {nextPublicQuestionId,recoverPublicChatQuestion} from './recover-public-chat-question.js';

const source='data/questoes-publicas.json#questions';
const version='sha256:'+'a'.repeat(64);
const checkpoint={
 schemaVersion:1,kind:'chat-battery-checkpoint',id:'fixture-checkpoint-01',
 concursoId:'camara-2026',source,sourceVersion:version,mode:'aprendizagem',
 questionIds:['cam-Q1','cam-Q2'],status:'in_progress',
 answers:[{attemptId:'attempt-fixture-1',questionId:'cam-Q1',userAnswer:'C',confidence:'insecure'}]
};
const publicResponse={schemaVersion:1,kind:'chat-battery-preparation',concursoId:'camara-2026',
  mode:'aprendizagem',source,sourceVersion:version,count:1,
  items:[{questionId:'cam-Q2',statement:'Questão verificada no banco público.',
    explanation:'Regra aplicável ao item.',correctAnswer:'E',
    subjectId:'direito-constitucional',unitId:'processo-legislativo',
    examPart:'P2',estimatedDifficulty:'media'}]};
const clone=x=>JSON.parse(JSON.stringify(x));
assert.equal(nextPublicQuestionId(checkpoint),'cam-Q2');
const result=recoverPublicChatQuestion(checkpoint,publicResponse);
assert.equal(result.sessionId,checkpoint.id);
assert.equal(result.nextQuestion.questionId,'cam-Q2');
assert.equal(result.nextQuestion.correctAnswer,'E');
assert.equal(result.answered,1);
assert.equal(result.total,2);
assert.equal('answers' in result,false);
assert.equal('questionIds' in result,false);
assert.equal(JSON.stringify(result).includes('attempt-fixture-1'),false);
assert.throws(()=>recoverPublicChatQuestion(checkpoint,{...publicResponse,sourceVersion:'sha256:'+'b'.repeat(64)}),/outra origem ou versão/);
assert.throws(()=>recoverPublicChatQuestion(checkpoint,{...publicResponse,items:[{...publicResponse.items[0],questionId:'cam-Q1'}]}),/não corresponde/);
assert.throws(()=>recoverPublicChatQuestion(checkpoint,{...publicResponse,count:2}),/exatamente uma/);
assert.throws(()=>nextPublicQuestionId({...checkpoint,questionIds:['cam-Q1','cam-Q1']}),/Lista de questões inválida/);
assert.throws(()=>nextPublicQuestionId({...checkpoint,mode:'simulado'}),/Modo não atendido/);
assert.throws(()=>nextPublicQuestionId({...checkpoint,answers:[{...checkpoint.answers[0],questionId:'cam-Q2'}]}),/fora da ordem/);
const done={...checkpoint,status:'completed',answers:[
 ...checkpoint.answers,{attemptId:'attempt-fixture-2',questionId:'cam-Q2',userAnswer:'E',confidence:'secure'}]};
assert.equal(nextPublicQuestionId(done),null);
assert.equal(recoverPublicChatQuestion(done,null).nextQuestion,null);
assert.throws(()=>nextPublicQuestionId({...done,status:'in_progress'}),/Status e progresso/);
const empty={...checkpoint,answers:[]};
assert.equal(nextPublicQuestionId(empty),'cam-Q1');
console.log('OK: recuperação pública de um item, IDs, versão, segurança e sessão concluída.');
