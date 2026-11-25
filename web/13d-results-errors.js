/* Consulta privada de erros por dia. Nenhuma resposta e gravada no repositorio publico. */
(function(root){
 'use strict';
 const target=document.getElementById('results-errors');
 if(!target)return;
 const $=id=>document.getElementById(id);
 const worker='https://concurso-estudo.leoruas.workers.dev';
 let unified=null,records=[],loadedExam='',pending=0,errorMessage='',visibleDays=1;
 const dayFormat=new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'});
 const date=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)?s.split('-').reverse().join('/'):'Data não registrada';
 const text=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value!==undefined)n.textContent=String(value);return n;};
 const validDate=s=>{if(typeof s!=='string')return '';const x=s.slice(0,10);return /^\d{4}-\d{2}-\d{2}$/.test(x)?x:'';};
 const answer=a=>a===null||a===undefined||a===''?'Não registrada':a==='C'?'Certo':a==='E'?'Errado':String(a);
 function articleUrl(id,section,exam,manifest){
  if(!id)return '';
  const item=manifest.get(id);
  return worker+'/estudo/#/artigo/'+encodeURIComponent(item?.articleSlug||id)+'?concurso='+encodeURIComponent(exam)+(section?'&secao='+encodeURIComponent(section):'');
 }
 function normalizeChat(data){
  const rows=[],seen=new Set();
  for(const a of data?.articles||[]){
   const entries=[...(a.mistakes||[]).map(q=>[q,'incorrect']),
    ...(a.uncertainCorrect||[]).map(q=>[q,'uncertain'])];
   for(const [q,result] of entries){
    const id=q.id||q.questionId||'';
    const key=id?'id:'+id:['legacy',q.date,q.statement,q.userAnswer].join('|');
    if(seen.has(key))continue;seen.add(key);
    // A API unificada já inclui respostas do D1, com IDs iniciados por site:.
    const fromSite=id.startsWith('site:');
    rows.push({result,origin:fromSite?'Site':'ChatGPT',attemptId:fromSite?id.slice(5):'',day:validDate(q.date),subject:q.subjectId||a.subjectId||a.materiaId||'',
     statement:q.statement||'',mine:q.userAnswer,correct:q.correctAnswer,explanation:q.explanation||'',
     articleId:a.articleId,section:q.section||'',questionId:id,topic:q.topic||q.subtopic||''});
   }
  }
  return rows;
 }
 async function siteReviewRows(exam){
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(exam),{credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}});
  if(!response.ok)throw Error('Não foi possível consultar as respostas do site.');
  const data=await response.json();
  if(data?.version!==1||!Array.isArray(data.attempts))throw Error('Formato de respostas do site incompatível.');
  const reviewRows=data.attempts.filter(a=>a?.concursoId===exam&&(a.result==='incorrect'||
   (a.result==='correct'&&['insecure','guess'].includes(a.confidence))));
  if(!reviewRows.length)return [];
  let questions=new Map();
  try{
   const bank=await fetch('/data/questoes-publicas.json',{cache:'no-store'});
   if(bank.ok){const b=await bank.json();if(Array.isArray(b.questions))questions=new Map(b.questions.map(q=>[q.id,q]));}
  }catch{}
  const seen=new Set(),out=[];
  for(const a of reviewRows){
   const key=a.id||[a.questionId,a.answeredAt,a.answer].join('|');
   if(seen.has(key))continue;seen.add(key);
   const q=questions.get(a.questionId)||{};
   const timestamp=Number(a.answeredAt);
   out.push({result:a.result==='incorrect'?'incorrect':'uncertain',origin:'Site',attemptId:a.id||'',day:Number.isFinite(timestamp)&&timestamp>0?dayFormat.format(new Date(timestamp)):'',
    subject:a.subjectId||q.subjectId||'',statement:q.statement||'',
    mine:a.answer,correct:a.correctAnswer??q.correctAnswer,explanation:q.explanation||'',
    articleId:q.articleId||'',section:q.section||'',questionId:a.questionId||'',topic:q.topic||q.subjectName||''});
  }
  return out;
 }
 // O histórico unificado já contém os registros do site: conciliar pelo ID da
 // tentativa, sem eliminar retestes distintos nem atribuir a origem errada.
 function reconcileRows(unifiedRows,siteRows){
  const rows=[...unifiedRows],byAttempt=new Map();
  rows.forEach((r,i)=>{if(r.origin==='Site'&&r.attemptId)byAttempt.set(r.attemptId,i);});
  for(const row of siteRows){
   const index=row.attemptId?byAttempt.get(row.attemptId):undefined;
   if(index!==undefined){
    const previous=rows[index];
    rows[index]={...previous,...row,
     statement:row.statement||previous.statement,
     explanation:row.explanation||previous.explanation,
     articleId:row.articleId||previous.articleId,
     section:row.section||previous.section,
     subject:row.subject||previous.subject,
     topic:row.topic||previous.topic,
     correct:row.correct??previous.correct,
     mine:row.mine??previous.mine,
     day:row.day||previous.day};
   }else rows.push(row);
  }
  return rows;
 }
 function card(r,exam,manifest){
  const item=text('article','results-daily-card');
  const head=text('div','results-daily-card-head');
  head.append(text('strong','',r.topic||r.subject||'Questão registrada'),text('span','',(r.result==='uncertain'?'Acerto inseguro':'Erro')+' · '+r.origin));
  item.append(head,window.studyMarkdownNode(r.statement||'Enunciado não disponível neste registro.','results-daily-statement'));
  const answers=text('div','results-daily-answers');
  const mine=text('p','');mine.append(text('strong','','Sua resposta: '),document.createTextNode(answer(r.mine)));
  const correct=text('p','');correct.append(text('strong','','Resposta correta: '),document.createTextNode(answer(r.correct)));
  answers.append(mine,correct);item.append(answers);
  const why=text('div','results-daily-explanation');
  why.append(text('strong','','Por que essa resposta está correta'),window.studyMarkdownNode(r.explanation||'A explicação não foi armazenada com este registro.'));
  item.append(why);
  const link=articleUrl(r.articleId,r.section,exam,manifest);
  if(link){const a=text('a','results-link','Ler a matéria'+(r.section?': '+r.section:''));a.href=link;a.rel='noreferrer';item.append(a);}
  else item.append(text('p','results-caption','Matéria ainda sem vínculo direto confirmado.'));
  return item;
 }
 let manifest=new Map();
 async function getManifest(){
  try{
   const response=await fetch('/manifest.json',{cache:'no-store'});
   if(response.ok){const items=await response.json();if(Array.isArray(items))manifest=new Map(items.filter(x=>x.articleId).map(x=>[x.articleId,x]));}
  }catch{}
 }
 function reviewCount(rows){
  const errors=rows.filter(r=>r.result==='incorrect').length;
  const uncertain=rows.length-errors;
  return errors+' '+(errors===1?'erro':'erros')+' · '+uncertain+' '+(uncertain===1?'acerto inseguro':'acertos inseguros');
 }
 function draw(){
  if(!unified)return;
  const exam=unified.concursoId,subject=$('results-subject-filter')?.value||'';
  const rows=records.filter(r=>!subject||r.subject===subject);
  const today=dayFormat.format(new Date());
  const days=[today,...new Set(rows.map(r=>r.day||'sem-data').filter(d=>d!==today))]
   .sort((a,b)=>a===today?-1:b===today?1:a==='sem-data'?1:b==='sem-data'?-1:b.localeCompare(a));
  const count=Math.min(visibleDays,days.length);
  target.replaceChildren();
  const caption=text('p','results-caption',reviewCount(rows)+
   ' na matéria selecionada. Dias em ordem do mais recente para o mais antigo.');
  target.append(caption);
  if(errorMessage)target.append(text('p','results-caption',errorMessage));
  for(const day of days.slice(0,count)){
   const items=rows.filter(r=>(r.day||'sem-data')===day);
   const section=text('section','results-daily-group');
   const title=day===today?'Hoje · '+date(day):day==='sem-data'?'Data não registrada':date(day);
   const heading=text('h3','results-daily-day',title);
   heading.append(text('span','results-daily-count',reviewCount(items)));
   section.append(heading);
   if(!items.length)section.append(text('p','results-caption',day===today?'Nenhum erro ou acerto inseguro registrado hoje para esta matéria.':'Nenhum erro ou acerto inseguro registrado nesta data.'));
   for(const item of items)section.append(card(item,exam,manifest));
   target.append(section);
  }
  if(count<days.length){
   const more=text('button','results-concept-more','Ver mais: '+(days.length-count)+' '+(days.length-count===1?'dia':'dias')+' anteriores');
   more.type='button';
   more.addEventListener('click',()=>{visibleDays+=1;draw();const sections=target.querySelectorAll('.results-daily-group');sections[sections.length-1]?.scrollIntoView({behavior:'smooth',block:'start'});});
   target.append(more);
  }
 }
 async function load(data){
  unified=data;
  const exam=data.concursoId,seq=++pending;
  errorMessage='';visibleDays=1;
  target.replaceChildren(text('p','results-caption','Consultando erros e acertos inseguros…'));
  // Mostra os erros do chat imediatamente, sem aguardar catálogo e D1.
  records=normalizeChat(data);
  loadedExam=exam;
  draw();
  const [manifestResult,siteResult]=await Promise.allSettled([getManifest(),siteReviewRows(exam)]);
  if(seq!==pending)return;
  if(siteResult.status==='fulfilled')records=reconcileRows(records,siteResult.value);
  else errorMessage='Não foi possível consultar as respostas do site. Os registros do ChatGPT continuam disponíveis.';
  draw();
 }
 window.addEventListener('results:data',e=>{if(e.detail?.data)void load(e.detail.data);});
 window.addEventListener('results:filter',()=>{visibleDays=1;if(unified)draw();});
})();
