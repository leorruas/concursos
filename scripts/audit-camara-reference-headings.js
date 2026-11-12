#!/usr/bin/env node
// Auditoria de todas as âncoras de teoria referenciadas no banco. Não corrige por aproximação.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articleInventory } from './article-identity.js';
const root=fileURLToPath(new URL('../',import.meta.url));
const bank=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara.json'),'utf8'));
const items=articleInventory(root);
const byId=new Map(items.map(x=>[x.articleId,x]));
const headingsCache=new Map();
function tokens(s){return new Set(s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().match(/[a-z]{3,}/g)||[])}
const violations=[];
for(const [index,q] of [...bank.pilotoDidatico,...bank.expansao].entries()){
  for(const ref of q.theoryRefs||[]){
    const [target,heading]=ref.split('#');
    const info=target.startsWith('article:')?byId.get(target.slice(8)):null;
    if(!info||!heading)continue;
    let headings=headingsCache.get(info.sourcePath);
    if(!headings){const md=fs.readFileSync(path.join(root,info.sourcePath),'utf8');
      headings=md.split(/\r?\n/).filter(l=>/^#{1,6} /.test(l)).map(l=>l.replace(/^#{1,6} /,'').trim());headingsCache.set(info.sourcePath,headings);}
    if(headings.includes(heading))continue;
    const a=tokens(heading);
    const suggestions=headings.map(candidate=>{const b=tokens(candidate),shared=[...a].filter(x=>b.has(x)).length;return {heading:candidate,similarity:Number((shared/(a.size+b.size-shared||1)).toFixed(2))}}).sort((x,y)=>y.similarity-x.similarity).slice(0,3);
    violations.push({index,id:q.id||null,subjectId:q.subjectId,ref,path:info.sourcePath,suggestions});
  }
}
console.log(JSON.stringify({total:bank.pilotoDidatico.length+bank.expansao.length,articlesChecked:headingsCache.size,missingHeadings:violations.length,violations},null,2));
if(violations.length)process.exitCode=1;
