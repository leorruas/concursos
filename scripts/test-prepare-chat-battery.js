import assert from 'node:assert/strict';
import { prepareChatBattery } from './prepare-chat-battery.js';

const make = (id, changes={}) => ({
  id, subjectId:'direito-constitucional', unitId:'processo-legislativo',
  examPart:'P2', editalRef:'14.2.4 / Processo Legislativo',
  conceptId:'conceito-'+id, statement:'Enunciado '+id,
  correctAnswer:'C', explanation:'Fundamento '+id,
  origin:'inedita', estimatedDifficulty:'media',
  reviewStatus:'validada', reviewEvidence:'Revisão documentada',
  theoryRefs:['article:exemplo#Seção'], ...changes
});
const bank = {concursoId:'camara-2026',cargo:1,expansao:[
  make('Q1'),make('Q2'),make('Q3'),
  make('Q4',{reviewStatus:'bloqueada'}),
  make('Q5',{reviewEvidence:''})
]};
const alwaysZero = () => 0;
const result = prepareChatBattery(bank,{count:2},{random:alwaysZero,excludeIds:['Q1'],sourceVersion:'abc'});
assert.equal(result.count,2);
assert.equal(result.sourceVersion,'abc');
assert.equal(result.selection.excludedPreviouslyAnswered,1);
assert.deepEqual(result.items.map(x=>x.questionId).sort(),['Q2','Q3']);
assert.ok(!JSON.stringify(result).includes('reviewEvidence'));
assert.ok(!JSON.stringify(result).includes('Q4'));
assert.ok(!JSON.stringify(result).includes('Q5'));
assert.equal(result.items[0].order,1);
assert.equal(result.items[1].order,2);
assert.equal(result.items[0].correctAnswer,'C');
assert.equal(result.items[0].subjectId,'direito-constitucional');
assert.throws(()=>prepareChatBattery(bank,{count:3},{excludeIds:['Q1']}),/insuficiente/);
assert.throws(()=>prepareChatBattery(bank,{count:0}),/Quantidade inválida/);
assert.throws(()=>prepareChatBattery({...bank,cargo:2},{count:1}),/incompatível/);
assert.throws(()=>prepareChatBattery({...bank,expansao:[make('Q1',{explanation:''})]},{count:1}),/explanation/);
assert.throws(()=>prepareChatBattery({...bank,expansao:[make('Q1',{correctAnswer:'A'})]},{count:1}),/Gabarito inválido/);
assert.throws(()=>prepareChatBattery({...bank,expansao:[make('Q1',{examPart:'P3'})]},{count:1}),/Parte inválida/);
assert.throws(()=>prepareChatBattery({...bank,expansao:[make('Q1'),make('Q1')]},{count:2}),/duplicado/);
console.log('OK: preparação enxuta, exclusões, filtros de revisão, campos obrigatórios e falhas seguras.');
