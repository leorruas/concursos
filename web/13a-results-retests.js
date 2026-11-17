/* Diagnóstico derivado de tentativas privadas: sem persistência ou alteração de dados. */
(function(root){
 'use strict';
 function analyze(attempts,questions,exam){
  const perQuestion=new Map(),seen=new Set();
  for(const a of attempts){
   if(!a||a.concursoId!==exam||!['correct','incorrect'].includes(a.result))continue;
   const q=questions.get(a.questionId),when=Number(a.answeredAt);
   if(!q||q.concursoId!==exam||!q.articleId||!Number.isFinite(when)||when<=0)continue;
   if(a.id&&seen.has(a.id))continue;
   if(a.id)seen.add(a.id);
   const group=perQuestion.get(a.questionId)||[];
   group.push({result:a.result,confidence:a.confidence,when,q});
   perQuestion.set(a.questionId,group);
  }
  const byArticle=new Map();
  for(const rows of perQuestion.values()){
   rows.sort((a,b)=>a.when-b.when);
   const first=rows[0],last=rows[rows.length-1];
   if(rows.length<2||new Date(first.when).toISOString().slice(0,10)===new Date(last.when).toISOString().slice(0,10))continue;
   const key=first.q.articleId;
   const entry=byArticle.get(key)||{articleId:key,subjectId:first.q.subjectId||'',positive:0,persistent:0,reappeared:0,insecure:0,questions:0,section:''};
   entry.questions++;
   if(first.result==='incorrect'&&last.result==='correct'){
    if(last.confidence==='insecure')entry.insecure++;
    else entry.positive++;
   }else if(first.result==='incorrect'&&last.result==='incorrect')entry.persistent++;
   else if(first.result==='correct'&&last.result==='incorrect')entry.reappeared++;
   if(!entry.section&&(entry.persistent||entry.reappeared))entry.section=first.q.section||'';
   byArticle.set(key,entry);
  }
  return [...byArticle.values()].sort((a,b)=>(b.persistent+b.reappeared)-(a.persistent+a.reappeared)||a.articleId.localeCompare(b.articleId));
 }
 root.ResultsRetests={analyze};
})(typeof window!=='undefined'?window:globalThis);
