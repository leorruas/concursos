import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const digest=text=>'sha256:'+createHash('sha256').update(text,'utf8').digest('hex');

export function buildPublicQuestionShards(bank){
 if(!bank||bank.version!==1||!Array.isArray(bank.questions))throw Error('Invalid public question bank');
 const catalogText=JSON.stringify(bank),catalogVersion=digest(catalogText),groups=new Map();
 const questions=bank.questions.map(question=>{
  const key=[question.concursoId,question.subjectId,question.unitId].join('/');
  let shardId;
  if(!groups.has(key)){
   shardId=createHash('sha256').update(key,'utf8').digest('hex').slice(0,20);
   groups.set(key,{shardId,questions:[]});
  }
  const group=groups.get(key);shardId=group.shardId;group.questions.push(question);
  return {id:question.id,concursoId:question.concursoId,subjectId:question.subjectId,
   unitId:question.unitId,format:question.format,estimatedDifficulty:question.estimatedDifficulty??null,shardId};
 });
 const shards=[...groups.values()].map(({shardId,questions})=>({shardId,
  text:JSON.stringify({version:1,catalogVersion,shardId,questions})}));
 return {catalogVersion,indexText:JSON.stringify({version:1,catalogVersion,
  contests:bank.contests||[],editalUnits:bank.editalUnits||[],questions}),shards};
}

export function writePublicQuestionShards(bank,dataDest){
 const {catalogVersion,indexText,shards}=buildPublicQuestionShards(bank);
 const dir=path.join(dataDest,'questoes-publicas-shards');
 const versionDir=path.join(dir,catalogVersion.slice(7));
 fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(versionDir,{recursive:true});
 for(const shard of shards)fs.writeFileSync(path.join(versionDir,shard.shardId+'.json'),shard.text);
 fs.writeFileSync(path.join(dataDest,'questoes-publicas-index.json'),indexText);
 return {catalogVersion,shards:shards.length,indexBytes:Buffer.byteLength(indexText)};
}
