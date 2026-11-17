import assert from 'node:assert/strict';
import {newPreparedCheckpoint, resumePreparedBattery} from './resume-chat-battery.js';
const packet={
 kind:'chat-battery-preparation',concursoId:'camara-2026',
 source:'data/questoes-camara.json#expansao',sourceVersion:'sha-ficticio',
 mode:'aprendizagem',count:3,
 items:[1,2,3].map(n=>({order:n,questionId:'Q'+n,statement:'Item '+n,subjectId:'direito-constitucional',unitId:'processo-legislativo',correctAnswer:'C'}))
};
const clone=x=>JSON.parse(JSON.stringify(x));
const base=newPreparedCheckpoint(packet,'sessao-sintetica');
let resume=resumePreparedBattery(packet,base);
assert.equal(resume.nextIndex,0);
assert.equal(resume.nextQuestion.questionId,'Q1');
assert.equal('correctAnswer' in resume.nextQuestion,false);
assert.equal('answers' in resume,false);
const one=clone(base);
one.answers.push({questionId:'Q1',userAnswer:'E',confidence:'insecure'});
resume=resumePreparedBattery(packet,one);
assert.equal(resume.nextQuestion.questionId,'Q2');
assert.equal(resume.answered,1);
const completed=clone(one);
completed.answers.push({questionId:'Q2',userAnswer:'C',confidence:'secure'},
 {questionId:'Q3',userAnswer:'E',confidence:'secure'});
completed.status='completed';
assert.equal(resumePreparedBattery(packet,completed).nextQuestion,null);
const fails=(modify,pattern)=>{const c=clone(one);modify(c);assert.throws(()=>resumePreparedBattery(packet,c),pattern);};
fails(c=>{c.sourceVersion='outra'},/versão/);
fails(c=>{c.concursoId='cgu-2026'},/outra/);
fails(c=>{c.questionIds.reverse()},/Ordem/);
fails(c=>{c.answers[0].questionId='Q3'},/ordem/);
fails(c=>{c.answers.push({...c.answers[0]})},/ordem|duplicada/);
fails(c=>{c.answers[0].confidence='inventada'},/inválida/);
fails(c=>{c.answers[0].userAnswer=null},/branco/);
fails(c=>{c.status='completed'},/concluída/);
fails(c=>{c.answers=[];c.id='outro'},/ID/);
assert.throws(()=>newPreparedCheckpoint({...packet,items:[]},'x'),/Pacote/);
const simulado={...packet,mode:'simulado'};
const blank=newPreparedCheckpoint(simulado,'simulado-exemplo');
blank.answers.push({questionId:'Q1',userAnswer:null,confidence:'unknown'});
assert.equal(resumePreparedBattery(simulado,blank).nextQuestion.questionId,'Q2');
console.log('OK: checkpoint em memoria, retomada, separacao de gabaritos e rejeicao de divergencias.');
