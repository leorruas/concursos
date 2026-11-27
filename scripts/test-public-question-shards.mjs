import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {existsSync,mkdtempSync,readFileSync,rmSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {buildPublicQuestionShards,writePublicQuestionShards} from './public-question-shards.js';

const bank={version:1,contests:[{id:'camara-2026',dataProva:'2026-01-01'}],
 editalUnits:[{subjectId:'constitucional',unitId:'processo',examPart:'P1'}],questions:[
  {id:'cam-02',concursoId:'camara-2026',subjectId:'constitucional',unitId:'processo',format:'CE',estimatedDifficulty:'media',statement:'Caso dois',correctAnswer:'E'},
  {id:'cam-01',concursoId:'camara-2026',subjectId:'constitucional',unitId:'processo',format:'CE',estimatedDifficulty:'facil',statement:'Caso um',correctAnswer:'C'},
  {id:'cgu-01',concursoId:'cgu-2026',subjectId:'auditoria',unitId:'evidencias',format:'CE',statement:'Caso CGU',correctAnswer:'C'}]};
const built=buildPublicQuestionShards(bank),index=JSON.parse(built.indexText);
assert.equal(index.version,1);
assert.equal(index.questions.length,bank.questions.length);
assert.equal(index.catalogVersion,built.catalogVersion);
assert.equal(index.catalogVersion,'sha256:'+createHash('sha256').update(JSON.stringify(bank)).digest('hex'));
assert.equal(index.contests[0].dataProva,bank.contests[0].dataProva);
assert.equal(index.editalUnits.length,1);
assert.ok(index.questions.every(q=>q.id&&q.shardId&&q.concursoId&&q.subjectId&&q.unitId));
assert.equal(new Set(index.questions.map(q=>q.id)).size,bank.questions.length);
const found=new Map();
for(const shard of built.shards){
 const body=JSON.parse(shard.text);
 assert.equal(body.version,1);assert.equal(body.catalogVersion,index.catalogVersion);
 assert.equal(body.shardId,shard.shardId);
 for(const q of body.questions){assert.equal(index.questions.find(x=>x.id===q.id)?.shardId,shard.shardId);found.set(q.id,q);}
}
assert.deepEqual([...found.values()].sort((a,b)=>a.id.localeCompare(b.id)),[...bank.questions].sort((a,b)=>a.id.localeCompare(b.id)));
const dir=mkdtempSync(path.join(os.tmpdir(),'public-question-shards-'));
try{
 const written=writePublicQuestionShards(bank,dir);
 assert.equal(written.catalogVersion,index.catalogVersion);
 assert.equal(JSON.parse(readFileSync(path.join(dir,'questoes-publicas-index.json'),'utf8')).questions.length,3);
 assert.equal(readFileSync(path.join(dir,'questoes-publicas-shards',index.catalogVersion.slice(7),built.shards[0].shardId+'.json'),'utf8'),built.shards[0].text);
}finally{rmSync(dir,{recursive:true,force:true});}
console.log('OK: índice e fragmentos cobrem o banco sem perder ou trocar itens; versão SHA identifica o catálogo integral.');

const generatedRoot=path.resolve('_site');
const generatedBankPath=path.join(generatedRoot,'data/questoes-publicas.json');
if(existsSync(generatedBankPath)){
 const fullText=readFileSync(generatedBankPath,'utf8'),fullBank=JSON.parse(fullText);
 const generatedIndex=JSON.parse(readFileSync(path.join(generatedRoot,'data/questoes-publicas-index.json'),'utf8'));
 assert.equal(generatedIndex.catalogVersion,'sha256:'+createHash('sha256').update(fullText,'utf8').digest('hex'));
 const generatedItems=new Map();
 for(const meta of generatedIndex.questions){
  const file=path.join(generatedRoot,'data/questoes-publicas-shards',generatedIndex.catalogVersion.slice(7),meta.shardId+'.json');
  const shard=JSON.parse(readFileSync(file,'utf8'));
  assert.equal(shard.catalogVersion,generatedIndex.catalogVersion);
  const item=shard.questions.find(q=>q.id===meta.id);
  assert.ok(item,`Item ${meta.id} is present in its shard`);
  generatedItems.set(item.id,item);
 }
 assert.deepEqual([...generatedItems.values()].sort((a,b)=>a.id.localeCompare(b.id)),
  [...fullBank.questions].sort((a,b)=>a.id.localeCompare(b.id)));
 console.log(`OK: build publicado localmente: ${generatedItems.size} questões reconstruídas e SHA integral conferido.`);
}
