/* Diagnóstico derivado de tentativas privadas: sem persistência ou alteração de dados. */
(function(root){
 'use strict';
 const studyDay=new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo'});
 function analyze(attempts,questions,exam){
  const perQuestion=new Map(),seen=new Set();
  for(const a of attempts){
   if(!a||a.concursoId!==exam||!['correct','incorrect'].includes(a.result))continue;
   const q=questions.get(a.questionId),when=Number(a.answeredAt);
   if(!q||q.concursoId!==exam||!Number.isFinite(when)||when<=0)continue;
   if(a.id&&seen.has(a.id))continue;
   if(a.id)seen.add(a.id);
   const group=perQuestion.get(a.questionId)||[];
   group.push({result:a.result,confidence:a.confidence,when,q,questionId:a.questionId});
   perQuestion.set(a.questionId,group);
  }
  const byArticle=new Map();
  for(const rows of perQuestion.values()){
   rows.sort((a,b)=>a.when-b.when);
   const first=rows[0],last=rows[rows.length-1];
   if(rows.length<2||studyDay.format(first.when)===studyDay.format(last.when))continue;
   const articleId=first.q.articleId||'',subjectId=first.q.subjectId||'';
   const key=JSON.stringify([subjectId,articleId]);
   const entry=byArticle.get(key)||{articleId,subjectId,positive:0,persistent:0,reappeared:0,insecure:0,questions:0,latestCorrect:0,section:'',pendingQuestionIds:[]};
   entry.questions++;
   if(last.result==='correct')entry.latestCorrect++;
   if(first.result==='incorrect'&&last.result==='correct'){
    if(last.confidence==='insecure')entry.insecure++;
    else entry.positive++;
   }else if(first.result==='incorrect'&&last.result==='incorrect')entry.persistent++;
   else if(first.result==='correct'&&last.result==='incorrect')entry.reappeared++;
   if(last.result==='incorrect'||(last.result==='correct'&&last.confidence==='insecure'))entry.pendingQuestionIds.push(last.questionId);
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
 function conceptTransfer(attempts,questions,exam){
  const groups=new Map(),seen=new Set();
  for(const a of attempts){
   if(a?.concursoId!==exam||!['correct','incorrect'].includes(a.result))continue;
   const q=questions.get(a.questionId),time=Number(a.answeredAt);
   if(!q||q.concursoId!==exam||!q.conceptId||!q.articleId||!Number.isFinite(time)||time<=0)continue;
   if(a.id&&seen.has(a.id))continue;
   if(a.id)seen.add(a.id);
   const key=(q.subjectId||'')+'::'+q.conceptId;
   if(!groups.has(key))groups.set(key,[]);
   groups.get(key).push({id:a.questionId,articleId:q.articleId,subjectId:q.subjectId,conceptId:q.conceptId,
    section:q.section||'',result:a.result,confidence:a.confidence,time});
  }
  const out=[];
  for(const items of groups.values()){
   items.sort((a,b)=>a.time-b.time||a.id.localeCompare(b.id));
   const unique=new Map();
   for(const x of items)if(!unique.has(x.id))unique.set(x.id,x);
   const rows=[...unique.values()];
   if(rows.length<2)continue;
   const first=rows.find(x=>x.result==='incorrect');
   if(!first)continue;
   const later=rows.filter(x=>x.time>first.time&&
    new Date(x.time).toISOString().slice(0,10)!==new Date(first.time).toISOString().slice(0,10));
   if(!later.length)continue;
   const recent=later[later.length-1],wrong=later.filter(x=>x.result==='incorrect').length,
    secure=later.filter(x=>x.result==='correct'&&x.confidence!=='insecure').length,
    insecure=later.filter(x=>x.result==='correct'&&x.confidence==='insecure').length;
   const state=recent.result==='incorrect'?'needs-review':recent.confidence==='insecure'?'insecure':
    wrong?'mixed':secure>=2?'progress':'promising';
   out.push({conceptId:first.conceptId,subjectId:first.subjectId,articleId:first.articleId,section:first.section,
    state,wrong,secure,insecure,distinctQuestions:rows.length});
  }
  const order={'needs-review':0,mixed:1,insecure:2,promising:3,progress:4};
  return out.sort((a,b)=>order[a.state]-order[b.state]||a.subjectId.localeCompare(b.subjectId)||String(a.conceptId).localeCompare(String(b.conceptId)));
 }
 root.ResultsRetests={analyze,coverage,conceptTransfer};
})(typeof window!=='undefined'?window:globalThis);
