/* Sincronização autenticada do progresso: somente revisões, nunca histórico de questões. */
(function(root){
 'use strict';
 function endpoint(priorityEndpoint){
  if(!priorityEndpoint)return null;
  const u=new URL(priorityEndpoint);
  if(u.pathname!=='/v1/study/priorities')return null;
  u.pathname='/v1/study/progress';
  return u.href;
 }
 function merge(local,remote){
  const out={...local};
  for(const [key,r] of Object.entries(remote||{})){
   if(!out[key]||r.last>=out[key].last)out[key]=r;
  }
  return out;
 }
 function decode(rows,cards){
  if(!Array.isArray(rows)||rows.length>10000)throw Error('Resposta de progresso inválida');
  const ids=new Set(cards.map(c=>c.id)),out={};
  for(const r of rows){
   if(r&&typeof r.id==='string'&&!ids.has(r.id))continue; // catálogo antigo: preservar remoto sem impedir o restante
   if(!r||!['forward','reverse','contrast'].includes(r.direction)||
      !['again','hard','good'].includes(r.grade)||
      ![r.last,r.due,r.streak,r.attempts].every(Number.isSafeInteger))throw Error('Revisão remota inválida');
   const key=r.id+':'+r.direction;
   if(out[key])throw Error('Revisão remota duplicada');
   out[key]={grade:r.grade,last:r.last,due:r.due,streak:r.streak,attempts:r.attempts};
  }
  return out;
 }
 async function sync(url,local,cards,fetcher){
  const request=async(method,body)=>{
   const r=await fetcher(url,{
    method,credentials:'same-origin',mode:'same-origin',redirect:'error',
    cache:'no-store',referrerPolicy:'no-referrer',
    headers:method==='POST'?{Accept:'application/json','Content-Type':'application/json','X-FC-Sync':'1'}:{Accept:'application/json'},
    ...(body?{body:JSON.stringify(body)}:{})
   });
   if(r.status===401)return {status:'unauthorized',phase:method};
   if(r.status===403)return {status:'forbidden',phase:method};
   if(!r.ok)return {status:'error',phase:method,httpStatus:r.status};
   return {status:'connected',body:await r.json()};
  };
  try{
   const get=await request('GET');
   if(get.status!=='connected')return {...get,reviews:local};
   const remote=decode(get.body.reviews,cards);
   const merged=merge(local,remote),changes=[];
   for(const [key,r] of Object.entries(merged)){
    const other=remote[key];
    if(other&&other.last>=r.last)continue;
    const index=key.lastIndexOf(':');
    changes.push({id:key.slice(0,index),direction:key.slice(index+1),...r});
   }
   if(changes.length){
    const write=await request('POST',{version:1,reviews:changes});
    if(write.status!=='connected')return {...write,reviews:merged};
   }
   const verified=await request('GET');
   if(verified.status!=='connected')return {...verified,reviews:merged};
   return {status:'connected',reviews:merge(merged,decode(verified.body.reviews,cards))};
  }catch{return {status:'offline',reviews:local};}
 }
 root.FlashcardsProgressSync={endpoint,merge,sync};
})(typeof window!=='undefined'?window:globalThis);
