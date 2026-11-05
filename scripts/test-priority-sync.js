import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const ctx={URL};vm.createContext(ctx);
for(const path of ['web/09-flashcards-engine.js','web/11-priority-sync.js'])
 vm.runInContext(fs.readFileSync(new URL('../'+path,import.meta.url),'utf8'),ctx);
const F=ctx.Flashcards,P=ctx.FlashcardsPrioritySync;
const loc={href:'https://estudo.exemplo/concursos/flashcards.html',origin:'https://estudo.exemplo'};
const meta=content=>({querySelector:()=>({content})});
const url='https://estudo.exemplo/v1/study/priorities';
assert.equal(P.endpointFromMeta(meta(''),loc),null);
assert.equal(P.endpointFromMeta(meta('/v1/study/priorities'),loc),url);
for(const unsafe of ['https://evil.example/v1/study/priorities','http://estudo.exemplo/v1/study/priorities','//evil.example/v1/study/priorities','/v1/study/priorities?token=x','/v1/study/priorities#fragment','/data/contexto-estudo/flashcards-prioridades.json'])
 assert.equal(P.endpointFromMeta(meta(unsafe),loc),null,'Endpoint não autorizado: '+unsafe);
assert.equal(P.loginUrl(url),'https://estudo.exemplo/v1/login/github');
const data=JSON.parse(fs.readFileSync(new URL('../data/flashcards.json',import.meta.url),'utf8'));
const cards=data.cards.filter(c=>c.status==='validated'),card=cards[0];
assert(card,'O catálogo de flashcards não pode estar vazio');
const profile={version:1,type:'study-errors',cut:'2026-11-05',unmappedCount:0,entries:[{
 examId:card.examIds[0],subjectId:card.subjectIds[0],cardId:card.id,
 priority:300,status:'pendente',recurrences:2,dueOn:'2026-11-06'
}]};
const local=F.empty(),key=F.reviewKey(card.id,'forward');
local.reviews[key]=F.schedule(undefined,'good',Date.UTC(2026,10,3));
let calls=0;
const ok=async(target,opts)=>{
 calls++;assert.equal(target,url);assert.equal(opts.method,'GET');
 assert.equal(opts.credentials,'same-origin');assert.equal(opts.mode,'same-origin');
 assert.equal(opts.redirect,'error');assert.equal(opts.cache,'no-store');
 assert(!Object.hasOwn(opts.headers,'Authorization'));
 return {status:200,ok:true,json:async()=>({priorities:profile})};
};
const got=await P.load(url,local,cards,F,ok);
assert.equal(got.status,'connected');assert(got.updated);
assert.deepEqual(JSON.parse(JSON.stringify(got.state.reviews)),JSON.parse(JSON.stringify(local.reviews)));
assert.equal(got.state.priorities.entries[0].cardId,card.id);assert.equal(local.priorities,null);
const same=await P.load(url,got.state,cards,F,ok);
assert.equal(same.status,'connected');assert(!same.updated);
const older=structuredClone(profile);older.cut='2026-11-04';
const stale=await P.load(url,got.state,cards,F,async()=>({status:200,ok:true,json:async()=>older}));
assert.equal(stale.state,got.state);
for(const [res,status] of [[{status:401,ok:false},'unauthorized'],[{status:403,ok:false},'unauthorized'],[{status:500,ok:false},'offline']]){
 const outcome=await P.load(url,got.state,cards,F,async()=>res);
 assert.equal(outcome.status,status);assert.equal(outcome.state,got.state);
}
const invalid=await P.load(url,got.state,cards,F,async()=>({status:200,ok:true,json:async()=>({priorities:{entries:[]}})}));
assert.equal(invalid.status,'offline');assert.equal(invalid.state,got.state);
const network=await P.load(url,got.state,cards,F,async()=>{throw Error('offline')});
assert.equal(network.status,'offline');assert.equal(network.state,got.state);
assert.equal((await P.load(null,got.state,cards,F,ok)).status,'disabled');assert.equal(calls,2);
const page=fs.readFileSync(new URL('../flashcards.html',import.meta.url),'utf8');
assert(page.includes('name="concursos-priority-endpoint" content=""'),'Endpoint não deve ser ativado sem backend');
assert(page.includes('web/11-priority-sync.js'),'Adaptador precisa carregar antes da interface');
assert(!page.includes('type="file"'),'Não introduzir importação manual');
const ui=fs.readFileSync(new URL('../web/10-flashcards-ui.js',import.meta.url),'utf8');
assert(!ui.includes('raw.githubusercontent.com'),'Não acessar arquivos privados sem autenticação');
console.log('SUCESSO: sync opcional, mesmo domínio, revisões intactas, login, 401/403, cache e offline.');
