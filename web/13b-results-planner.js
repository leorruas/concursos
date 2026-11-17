/* Planejamento de revisão derivado do catálogo público e do diagnóstico autenticado.
 * Não altera resultados e não confunde presença de artigo com domínio do edital.
 */
(function(root){
 'use strict';
 function catalogCoverage(catalog,exam,subjects){
  const contest=(catalog?.contests||[]).find(c=>c.concursoId===exam);
  if(!contest||!Array.isArray(contest.subjects))return [];
  const byId=new Map((subjects||[]).map(s=>[s.id,s]));
  return contest.subjects.map(s=>{
   const attempts=Number(byId.get(s.subjectId)?.total)||0;
   const distinctArticles=new Set((s.articleIds||[]).filter(Boolean));
   return {subjectId:s.subjectId,label:s.rotulo||s.subjectId,editalRef:s.itemEdital||'',
    articleCount:distinctArticles.size,attempts,
    status:attempts===0?'nao-avaliada':attempts<5?'amostra-pequena':'avaliada',
    hubArticleId:s.hubArticleId||null};
  });
 }
 function reviewQueue(articles,concepts,learning,subject){
  const improvements=new Map((learning||[]).map(x=>[(x.subjectId||'')+'::'+(x.conceptId||''),x.state]));
  const rows=[];
  for(const a of articles||[]){
   if(!a?.articleId||subject&&a.subjectId!==subject)continue;
   const errors=Array.isArray(a.mistakes)?a.mistakes.length:0;
   const unsure=Array.isArray(a.uncertainCorrect)?a.uncertainCorrect.length:0;
   if(!errors&&!unsure)continue;
   const days=new Set((a.mistakes||[]).map(x=>x.date).filter(Boolean)).size;
   const weights={'muito-facil':8,facil:7,media:5,dificil:3,'muito-dificil':2,'nao-classificada':0};
   const basicErrors=(a.mistakes||[]).filter(x=>['muito-facil','facil'].includes(x.difficulty)).length;
   const difficultyBonus=(a.mistakes||[]).reduce((sum,x)=>sum+(weights[x.difficulty]||0),0);
   const score=Math.min(100,errors*8+unsure*3+(days>=2?18:0)+difficultyBonus);
   rows.push({kind:'article',articleId:a.articleId,subjectId:a.subjectId||'',label:'',
    errors,unsure,days,basicErrors,score,reason:days>=2?'Erros em dias distintos':
     basicErrors?'Erros em questões fundamentais':errors?'Erro registrado':'Acerto inseguro'});
  }
  for(const c of concepts||[]){
   if(!c?.conceptId||subject&&c.subjectId!==subject)continue;
   const errors=Number(c.errors)||0,unsure=Number(c.uncertain)||0;
   if(!errors&&!unsure&&!c.dueOn)continue;
   const progress=improvements.get((c.subjectId||'')+'::'+c.conceptId);
   const score=Math.max(0,Math.min(100,errors*10+unsure*4+(c.dueOn?8:0)+
     (progress==='needs-review'?18:0)+(progress==='mixed'?10:0)-
     (progress==='progress'?15:0)));
   rows.push({kind:'concept',subjectId:c.subjectId||'',conceptId:c.conceptId,
    articleId:(c.articles||[])[0]||null,label:c.title||c.conceptId,errors,unsure,score,
    reason:progress==='needs-review'?'Erro persistente em questões diferentes':c.dueOn?'Revisão programada':
     errors?'Erros registrados':'Acerto inseguro'});
  }
  return rows.sort((a,b)=>b.score-a.score||a.kind.localeCompare(b.kind)||
   String(a.articleId||a.conceptId).localeCompare(String(b.articleId||b.conceptId)));
 }
 function studySequence(queue,coverage,limit=7){
  const max=Math.min(14,Math.max(1,Math.trunc(limit)||7));
  const selected=[],seen=new Set(),items=(queue||[]).map(x=>({...x,kind:'review'}));
  // Ausência de tentativas exige diagnóstico, não pressupõe desconhecimento.
  for(const c of coverage||[]){
   if(c.status==='nao-avaliada')items.push({kind:'diagnostic',subjectId:c.subjectId,
    label:c.label,articleId:c.hubArticleId,reason:'Matéria ainda não avaliada',
    score:15});
  }
  let previous='';
  while(selected.length<max&&items.length){
   let index=items.findIndex(x=>x.subjectId!==previous&&
    !seen.has(x.kind+'::'+(x.articleId||x.conceptId||x.subjectId)));
   if(index<0)index=items.findIndex(x=>!seen.has(x.kind+'::'+(x.articleId||x.conceptId||x.subjectId)));
   if(index<0)break;
   const item=items.splice(index,1)[0];
   const id=item.kind+'::'+(item.articleId||item.conceptId||item.subjectId);
   seen.add(id);selected.push(item);previous=item.subjectId;
  }
  return selected.map((x,i)=>({...x,order:i+1}));
 }
 root.ResultsStudyPlan={catalogCoverage,reviewQueue,studySequence};
})(typeof window!=='undefined'?window:globalThis);
