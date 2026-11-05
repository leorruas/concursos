/* Prioridades de estudo: leitura opcional e autenticada na mesma origem. */
(function(root){
 'use strict';
 const PATH='/v1/study/priorities';
 function endpointFromMeta(doc,loc){
  const raw=doc.querySelector('meta[name="concursos-priority-endpoint"]')?.content?.trim();
  if(!raw)return null;
  try{
   const u=new URL(raw,loc.href);
   if(u.protocol!=='https:'||u.origin!==loc.origin||u.pathname!==PATH||u.search||u.hash||u.username||u.password)return null;
   return u.href;
  }catch{return null;}
 }
 function loginUrl(endpoint){if(!endpoint)return null;const u=new URL(endpoint);if(u.pathname!==PATH)return null;u.pathname='/v1/login/github';return u.href;}
 async function load(endpoint,state,cards,engine,fetcher){
  if(!endpoint)return {status:'disabled',state,updated:false};
  try{
   const res=await fetcher(endpoint,{
    method:'GET',mode:'same-origin',credentials:'same-origin',
    redirect:'error',cache:'no-store',referrerPolicy:'no-referrer',headers:{Accept:'application/json'}
   });
   if(res.status===401||res.status===403)return {status:'unauthorized',state,updated:false};
   if(!res.ok)return {status:'offline',state,updated:false};
   const body=await res.json();
   const snapshot=body&&Object.hasOwn(body,'priorities')?body.priorities:body;
   const next=engine.applyPrioritySnapshot(state,snapshot,cards);
   return {status:'connected',state:next,updated:next!==state};
  }catch{return {status:'offline',state,updated:false};}
 }
 root.FlashcardsPrioritySync={endpointFromMeta,loginUrl,load};
})(typeof window!=='undefined'?window:globalThis);
