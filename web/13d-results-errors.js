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
   for(const q of a.mistakes||[]){
    const id=q.id||q.questionId||'';
    const key=[id,q.date,q.statement,q.userAnswer,a.articleId].join('|');
    if(seen.has(key))continue;seen.add(key);
    rows.push({origin:'ChatGPT',day:validDate(q.date),subject:q.subjectId||a.subjectId||a.materiaId||'',
     statement:q.statement||'',mine:q.userAnswer,correct:q.correctAnswer,explanation:q.explanation||'',
     articleId:a.articleId,section:q.section||'',questionId:id,topic:q.topic||q.subtopic||''});
   }
  }
  return rows;
 }
 async function siteErrors(exam){
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(exam),{credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}});
  if(!response.ok)throw Error('Não foi possível consultar as respostas do site.');
  const data=await response.json();
  if(data?.version!==1||!Array.isArray(data.attempts))throw Error('Formato de respostas do site incompatível.');
  const errors=data.attempts.filter(a=>a?.concursoId===exam&&a.result==='incorrect');
  if(!errors.length)return [];
  let questions=new Map();
  try{
   const bank=await fetch('/data/questoes-publicas.json',{cache:'no-store'});
   if(bank.ok){const b=await bank.json();if(Array.isArray(b.questions))questions=new Map(b.questions.map(q=>[q.id,q]));}
  }catch{}
  const seen=new Set(),out=[];
  for(const a of errors){
   const key=a.id||[a.questionId,a.answeredAt,a.answer].join('|');
   if(seen.has(key))continue;seen.add(key);
   const q=questions.get(a.questionId)||{};
   const timestamp=Number(a.answeredAt);
   out.push({origin:'Site',day:Number.isFinite(timestamp)&&timestamp>0?dayFormat.format(new Date(timestamp)):'',
    subject:a.subjectId||q.subjectId||'',statement:q.statement||'',
    mine:a.answer,correct:a.correctAnswer??q.correctAnswer,explanation:q.explanation||'',
    articleId:q.articleId||'',section:q.section||'',questionId:a.questionId||'',topic:q.topic||q.subjectName||''});
  }
  return out;
 }
 function card(r,exam,manifest){
  const item=text('article','results-daily-card');
  const head=text('div','results-daily-card-head');
  head.append(text('strong','',r.topic||r.subject||'Questão registrada'),text('span','',r.origin));
  item.append(head,text('p','results-daily-statement',r.statement||'Enunciado não disponível neste registro.'));
  const answers=text('div','results-daily-answers');
  const mine=text('p','');mine.append(text('strong','','Sua resposta: '),document.createTextNode(answer(r.mine)));
  const correct=text('p','');correct.append(text('strong','','Resposta correta: '),document.createTextNode(answer(r.correct)));
  answers.append(mine,correct);item.append(answers);
  const why=text('div','results-daily-explanation');
  why.append(text('strong','','Por que essa resposta está correta'),text('p','',r.explanation||'A explicação não foi armazenada com este registro.'));
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
 function draw(){
  if(!unified)return;
  const exam=unified.concursoId,subject=$('results-subject-filter')?.value||'';
  const rows=records.filter(r=>!subject||r.subject===subject);
  const today=dayFormat.format(new Date());
  const days=[today,...new Set(rows.map(r=>r.day||'sem-data').filter(d=>d!==today))]
   .sort((a,b)=>a===today?-1:b===today?1:a==='sem-data'?1:b==='sem-data'?-1:b.localeCompare(a));
  const count=Math.min(visibleDays,days.length);
  target.replaceChildren();
  const caption=text('p','results-caption',rows.length+' '+(rows.length===1?'erro registrado':'erros registrados')+
   ' na matéria selecionada. Dias em ordem do mais recente para o mais antigo.');
  target.append(caption);
  if(errorMessage)target.append(text('p','results-caption',errorMessage));
  for(const day of days.slice(0,count)){
   const items=rows.filter(r=>(r.day||'sem-data')===day);
   const section=text('section','results-daily-group');
   const title=day===today?'Hoje · '+date(day):day==='sem-data'?'Data não registrada':date(day);
   const heading=text('h3','results-daily-day',title);
   heading.append(text('span','results-daily-count',items.length+' '+(items.length===1?'erro':'erros')));
   section.append(heading);
   if(!items.length)section.append(text('p','results-caption',day===today?'Nenhum erro registrado hoje para esta matéria.':'Nenhum erro registrado nesta data.'));
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
  target.replaceChildren(text('p','results-caption','Consultando os erros registrados…'));
  // Mostra os erros do chat imediatamente, sem aguardar catálogo e D1.
  records=normalizeChat(data);
  loadedExam=exam;
  draw();
  const [manifestResult,siteResult]=await Promise.allSettled([getManifest(),siteErrors(exam)]);
  if(seq!==pending)return;
  if(siteResult.status==='fulfilled')records=[...records,...siteResult.value];
  else errorMessage='Não foi possível consultar as respostas do site. Os erros do ChatGPT continuam disponíveis.';
  draw();
 }
 window.addEventListener('results:data',e=>{if(e.detail?.data)void load(e.detail.data);});
 window.addEventListener('results:filter',()=>{visibleDays=1;if(unified)draw();});
})();
