import assert from 'node:assert/strict';
import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('../data/propostas-discursivas-camara.json',import.meta.url),'utf8'));
assert.equal(data.concursoId,'camara-2026');
assert.equal(data.editalStructure.discursiveQuestions,2);
assert.equal(data.editalStructure.technicalPieces,1);
const ids=new Set();
for(const p of data.propostas){
  assert(!ids.has(p.id),'ID duplicado: '+p.id); ids.add(p.id);
  assert(p.notOfficial===true && p.reviewStatus!=='validada','Não certificar proposta sem avaliação editorial: '+p.id);
  assert(typeof p.command==='string'&&p.command.length>80,'Comando incompleto: '+p.id);
  assert(Array.isArray(p.expectedElements)&&p.expectedElements.length>=3,'Quesitos ausentes: '+p.id);
  assert(p.tipo==='questao-discursiva'||p.tipo==='peca-tecnica','Gênero inválido: '+p.id);
  assert(p.maxLines===(p.tipo==='peca-tecnica'?50:20),'Limite de linhas: '+p.id);
  assert(p.maxScore===(p.tipo==='peca-tecnica'?30:15),'Pontuação máxima: '+p.id);
  assert(p.rubric.kind==='pedagogica-nao-oficial','Critério não identificado: '+p.id);
  assert.equal(p.rubric.criteria.reduce((s,c)=>s+c.maxPoints,0),p.maxScore,'Soma da grade: '+p.id);
  assert(!('correctAnswer' in p) && !('format' in p),'Discursiva não pode herdar C/E: '+p.id);
}
console.log('Câmara: '+data.propostas.length+' propostas discursivas autorais conferidas.');

// Rastreabilidade a artigos publicados e correção operacional independente do Certo/Errado.
import { scoreCamaraDiscursive } from './score-camara-discursivas.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const vault=fileURLToPath(new URL('../',import.meta.url));
for(const p of data.propostas){
  assert(Array.isArray(p.referencePaths)&&p.referencePaths.length>=2,'Fontes ausentes: '+p.id);
  assert(p.referencePaths.every(ref=>ref.startsWith('3 - Materias/')&&!ref.includes('..')&&fs.existsSync(path.join(vault,ref))),'Referências não verificadas: '+p.id);
  assert(p.rubric.criteria.every(c=>typeof c.assessmentGuide==='string'&&c.assessmentGuide.length>30),'Orientação de correção insuficiente: '+p.id);
  assert(Array.isArray(p.criticalErrors)&&p.criticalErrors.length>=2,'Erros críticos não registrados: '+p.id);
  const grades=p.rubric.criteria.map(c=>({criterionName:c.name,points:c.maxPoints,feedback:'Cobertura conferida na produção escrita.'}));
  const full=scoreCamaraDiscursive(p,grades,p.maxLines);
  assert.equal(full.score,p.maxScore);
  assert.equal(full.lineLimitExceeded,false);
  assert.equal(scoreCamaraDiscursive(p,grades,p.maxLines+1).lineLimitExceeded,true);
  assert.throws(()=>scoreCamaraDiscursive(p,grades.slice(1),p.maxLines),/todos os critérios/);
  assert.throws(()=>scoreCamaraDiscursive(p,[{...grades[0],points:-1},...grades.slice(1)],p.maxLines),/fora do limite/);
}
