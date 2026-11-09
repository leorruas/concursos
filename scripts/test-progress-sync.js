import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const context={URL,Number,Object,Math};
vm.createContext(context);
vm.runInContext(fs.readFileSync(new URL('../web/12-progress-sync.js',import.meta.url),'utf8'),context);
const P=context.FlashcardsProgressSync;
const endpoint='https://estudo.example/v1/study/priorities';
assert.equal(P.endpoint(endpoint),'https://estudo.example/v1/study/progress');
assert.equal(P.endpoint(null),null);
const cards=[{id:'a'},{id:'b'}], t=Date.now()-100000;
const item=(id,last,grade='good')=>({id,direction:'forward',last,due:last+86400000,grade,streak:1,attempts:1});
const remote=[item('a',t)],storage=new Map([['a:forward',remote[0]]]);
const fetcher=async(_,opts)=>{
 if(opts.method==='GET')return {status:200,ok:true,json:async()=>({version:1,reviews:[...storage.values()]})};
 const parsed=JSON.parse(opts.body);
 for(const x of parsed.reviews){
  const key=x.id+':'+x.direction;
  if(!storage.has(key)||x.last>storage.get(key).last)storage.set(key,x);
 }
 return {status:200,ok:true,json:async()=>({ok:true})};
};
const local={'a:forward':{grade:'again',last:t-10,due:t+100,streak:0,attempts:2},
 'b:forward':{grade:'good',last:t+20,due:t+86400000,streak:2,attempts:2}};
const outcome=await P.sync(P.endpoint(endpoint),local,cards,fetcher);
assert.equal(outcome.status,'connected');
assert.equal(outcome.reviews['a:forward'].grade,'good','Registro antigo não prevalece');
assert.equal(outcome.reviews['b:forward'].streak,2,'Cartão adicional de outro dispositivo deve sobreviver');
assert.equal(storage.size,2);
const denied=await P.sync(P.endpoint(endpoint),local,cards,async()=>({status:401,ok:false}));
assert.equal(denied.status,'unauthorized');
const offline=await P.sync(P.endpoint(endpoint),local,cards,async()=>{throw Error('offline');});
assert.equal(offline.status,'offline');
assert.equal(Object.keys(offline.reviews).length,2,'Offline preserva o progresso local');
console.log('OK: reconciliação, dispositivos distintos, autorização e modo offline.');
