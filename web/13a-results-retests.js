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
 function coverage(attempts,questions,exam){
  const groups=new Map(),answered=new Set();
  for(const q of questions.values()){
   if(q.concursoId!==exam||!q.id||!q.subjectId)continue;
   const g=groups.get(q.subjectId)||{subjectId:q.subjectId,total:0,answered:0};
   g.total++;groups.set(q.subjectId,g);
  }
  for(const a of attempts){
   if(a?.concursoId!==exam||!a.questionId||!['correct','incorrect','blank'].includes(a.result))continue;
   const q=questions.get(a.questionId);
   if(q?.concursoId!==exam||!groups.has(q.subjectId)||answered.has(a.questionId))continue;
   answered.add(a.questionId);
   groups.get(q.subjectId).answered++;
  }
  return [...groups.values()].map(g=>({...g,remaining:g.total-g.answered,percent:Math.round(100*g.answered/g.total)}))
   .sort((a,b)=>a.percent-b.percent||a.subjectId.localeCompare(b.subjectId));
 }
 root.ResultsRetests={analyze,coverage};
})(typeof window!=='undefined'?window:globalThis);
