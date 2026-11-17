import assert from 'node:assert/strict';
import fs from 'node:fs';
import { prepareChatBattery, bankVersion } from './prepare-chat-battery.js';
import { resumePreparedBattery } from './resume-chat-battery.js';
import { recoverChatBattery } from './recover-chat-battery.js';

const bank = JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json',import.meta.url),'utf8'));
const pack = prepareChatBattery(bank,{count:3},{random:()=>0});
assert.match(pack.sourceVersion,/^sha256:[0-9a-f]{64}$/);
assert.equal(pack.sourceVersion, bankVersion(bank));
const cp={schemaVersion:1,kind:'chat-battery-checkpoint',
  id:'teste-sintetico',concursoId:pack.concursoId,
  source:pack.source,sourceVersion:pack.sourceVersion,mode:pack.mode,
  questionIds:pack.items.map(q=>q.questionId),status:'in_progress',answers:[]};
const first=recoverChatBattery(bank,cp);
assert.equal(first.nextQuestion.questionId,cp.questionIds[0]);
assert.equal(first.answered,0);
assert.ok(!JSON.stringify(first).includes(pack.items[0].explanation));
assert.ok(!Object.hasOwn(first.nextQuestion,'correctAnswer'));
assert.equal(first.sessionId,cp.id);
const next={...cp,answers:[{attemptId:'t1',questionId:cp.questionIds[0],
  userAnswer:'C',confidence:'insecure'}]};
assert.equal(recoverChatBattery(bank,next).nextQuestion.questionId,cp.questionIds[1]);
assert.equal(resumePreparedBattery(pack,next).nextIndex,1);
assert.throws(()=>recoverChatBattery({...bank,expansao:[]},cp),/versão divergente/);
assert.throws(()=>recoverChatBattery(bank,{...cp,sourceVersion:'outdated'}),/versão divergente/);
assert.throws(()=>recoverChatBattery(bank,{...cp,questionIds:['inexistente',...cp.questionIds.slice(1)]}),/ausente/);
assert.throws(()=>recoverChatBattery(bank,{...cp,questionIds:[cp.questionIds[0],cp.questionIds[0]]}),/inválido/);
assert.throws(()=>recoverChatBattery(bank,{...next,answers:[{...next.answers[0],questionId:cp.questionIds[2]}]}),/fora da ordem/);
console.log('OK: retomada privada via pacote real, versão de banco e saída sem gabarito ou histórico.');
