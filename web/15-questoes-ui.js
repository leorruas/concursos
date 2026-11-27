/* Baterias de concurso; a fonte pública contém apenas enunciados revisados. */
(function(){
'use strict';
const $=id=>document.getElementById(id),WORKER='https://concurso-estudo.leoruas.workers.dev';
const STORE='concursos-quiz-sessoes-v1',ACTIVE='concursos-quiz-ativa-v1';
const LOGIN_BATCH='concursos-quiz-retorno-login';
const privateOrigin=location.origin===WORKER;
let cguCatalogLoaded=false;
let data=null,session=null,loggedIn=false,manifest=new Map(),chapterCatalog=null,shownAt=null;
let seenByContest=new Map(), retestsByContest=new Map(), reviewQueueLoaded=new Set(), suggestionRequest=0;
let reservedQuestionIds=new Set();
const singleSubjectRanges=new Map();
const contentOrder=new Intl.Collator('pt-BR',{numeric:true});
const elem=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);return e;};
const toggle=(id,show)=>{$(id).hidden=!show;};
function appendInlineMarkdown(parent,text){
 const source=String(text||''),pattern=/(\*\*|__)(.+?)\1|`([^`]+)`/g;
 let cursor=0,match;
 while((match=pattern.exec(source))){
  if(match.index>cursor)parent.append(document.createTextNode(source.slice(cursor,match.index)));
  if(match[2]!==undefined){const strong=elem('strong');appendInlineMarkdown(strong,match[2]);parent.append(strong);}
  else parent.append(elem('code',match[3]));
  cursor=pattern.lastIndex;
 }
 if(cursor<source.length)parent.append(document.createTextNode(source.slice(cursor)));
}
function explanationContent(markdown){
 const fragment=document.createDocumentFragment();
 const blocks=String(markdown||'').trim().split(/\n[\t ]*\n/).filter(Boolean);
 for(const block of blocks){
  const paragraph=elem('p');
  block.split(/\r?\n/).forEach((line,index)=>{if(index)paragraph.append(document.createElement('br'));appendInlineMarkdown(paragraph,line);});
  fragment.append(paragraph);
 }
 return fragment;
}
function readingStart(){
 const target=$('qs-reading-start');
 // Volta ao início da questão inclusive depois de uma correção longa.
 const top=target.getBoundingClientRect().top+window.scrollY-18;
 window.scrollTo({top:Math.max(0,top),behavior:'instant'});
 target.focus({preventScroll:true});
}
function playing(on){document.body.classList.toggle('qs-is-playing',on);}

const status=t=>{$('qs-status').textContent=t;};
const selected=name=>document.querySelector('input[name="'+name+'"]:checked')?.value||'';
function storeRead(){try{const x=JSON.parse(localStorage.getItem(STORE)||'[]');return Array.isArray(x)?x:[];}catch{return [];}}
function storeWrite(){if(!session)return;const a=storeRead().filter(x=>x.id!==session.id);a.push(session);localStorage.setItem(STORE,JSON.stringify(a.slice(-50)));localStorage.setItem(ACTIVE,session.id);}
function id(){return crypto.randomUUID();}

/* Ordenação editorial de leituras: não é índice de retenção. */
function quizPriorityGroups(attempts,questionsById,contestId,cutoff=0){
 const groups=new Map();
 for(const a of attempts){
  if(a.concursoId!==contestId||(cutoff&&Number(a.answeredAt)<cutoff))continue;
  const q=questionsById.get(a.questionId);
  if(!q?.articleId||q.concursoId!==contestId)continue;
  const error=a.result==='incorrect',unsure=a.result==='correct'&&a.confidence==='insecure',blank=a.result==='blank';
  const assisted=a.result==='correct'&&(a.consulted===true||a.feedbackBefore===true);
  if(!error&&!unsure&&!blank&&!assisted)continue;
  // Acerto com apoio é uma oportunidade de reteste independente, sem equivaler a erro.
  const weight=error?(a.confidence==='secure'?8:6):blank?1:Math.max(unsure?2:0,assisted?3:0);
  const g=groups.get(q.articleId)||{articleId:q.articleId,score:0,errors:0,secureErrors:0,uncertainCorrect:0,blanks:0,sections:new Map()};
  g.score+=weight;
  if(error){g.errors++;if(a.confidence==='secure')g.secureErrors++;}
  if(unsure)g.uncertainCorrect++;
  if(blank)g.blanks++;
  if(assisted)g.assistedCorrect=(g.assistedCorrect||0)+1;
  const sec=q.section||'';
  g.sections.set(sec,(g.sections.get(sec)||0)+weight);
  groups.set(q.articleId,g);
 }
 return [...groups.values()].map(g=>({...g,section:[...g.sections].sort((a,b)=>b[1]-a[1])[0]?.[0]||''})).sort((a,b)=>b.score-a.score||b.secureErrors-a.secureErrors||b.errors-a.errors||a.articleId.localeCompare(b.articleId));
}
function quizPriorityReason(g){
 const parts=[];
 if(g.errors)parts.push(g.errors+' erro'+(g.errors===1?'':'s')+(g.secureErrors?' ('+g.secureErrors+' com segurança declarada)':''));
 if(g.uncertainCorrect)parts.push(g.uncertainCorrect+' acerto'+(g.uncertainCorrect===1?'':'s')+' inseguro'+(g.uncertainCorrect===1?'':'s'));
 if(g.blanks)parts.push(g.blanks+' em branco');
 if(g.assistedCorrect)parts.push(g.assistedCorrect+' acerto'+(g.assistedCorrect===1?'':'s')+' com consulta ou correção prévia');
 return parts.join(' · ');
}
function quizArticleLink(articleId,section,contestId){
 const m=manifest.get(articleId);
 return (privateOrigin?WORKER+'/estudo/':'index.html')+'#/artigo/'+encodeURIComponent(m?.articleSlug||articleId)+'?concurso='+encodeURIComponent(contestId)+(section?'&secao='+encodeURIComponent(section):'');
}
function quizArticleName(articleId){
 const m=manifest.get(articleId);return m?.tituloExibicao||m?.titulo||'Artigo de estudo';
}
function markSynced(attemptId){
 const all=storeRead();let matched=false;
 for(const row of all)for(const a of row.answers||[])if(a.id===attemptId){a.synced=true;matched=true;}
 if(matched)localStorage.setItem(STORE,JSON.stringify(all.slice(-50)));
 if(session)for(const a of session.answers)if(a.id===attemptId)a.synced=true;
}

function shuffle(a){let x=a.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function contest(){return data?.contests.find(c=>c.id===$('qs-concurso').value);}
function available(){return data?.questions.filter(q=>q.concursoId===contest()?.id&&q.format==='CE'&&!reservedQuestionIds.has(q.id)&&(!q.officialSource||loggedIn))||[];}
function answeredQuestionIds(contestId){
 return new Set(storeRead().filter(s=>s.concursoId===contestId).flatMap(s=>(s.answers||[]).map(a=>a.questionId)));
}
function retestQuestionIds(contestId){
 const ids=new Set();
 for(const bySubject of retestsByContest.get(contestId)?.values()||[])for(const id of bySubject)ids.add(id);
 return ids;
}
function customSubjects(){
 return new Set([...$("qs-custom").querySelectorAll("input:checked")].map(input=>input.value));
}
function eligible(){
 let a=available();
 const mode=selected('qs-mode'),examId=contest()?.id;
 if(mode==='reteste'){
  const retests=retestQuestionIds(examId);
  const seen=new Set([...answeredQuestionIds(examId),...(seenByContest.get(examId)||[])]);
  a=a.filter(q=>retests.has(q.id)&&!seen.has(q.id));
 }
 const scope=selected('qs-scope'),subjectScope=scope==='single'||scope==='custom';
 if(scope==='custom'){
  const subjects=customSubjects();
  a=a.filter(q=>subjects.has(q.subjectId));
 }
 if(scope==='single'){
  const range=singleSubjectRanges.get($('qs-unidade').value);
  a=a.filter(q=>q.subjectId===$('qs-materia').value&&range?.ids.has(q[range.field]));
 }
 if(subjectScope){
  const filter=selected('qs-content-filter')||'algorithm';
  if(filter==='unanswered'){
   const seen=new Set([...answeredQuestionIds(examId),...(seenByContest.get(examId)||[])]);
   a=a.filter(q=>!seen.has(q.id));
  }else if(filter==='retests'){
   const retests=retestQuestionIds(examId);
   const seen=new Set([...answeredQuestionIds(examId),...(seenByContest.get(examId)||[])]);
   a=a.filter(q=>retests.has(q.id)&&!seen.has(q.id));
  }
 }
 const level=$('qs-difficulty-filter').value;
 return level?a.filter(q=>q.estimatedDifficulty===level):a;
}
function updateSubjects(){
 const select=$('qs-materia'),count=new Map();available().forEach(q=>{const val=count.get(q.subjectId)||{label:q.subjectName||q.subjectId,n:0};val.n++;count.set(q.subjectId,val);});
 select.replaceChildren(...[...count.entries()].sort((a,b)=>a[1].label.localeCompare(b[1].label,'pt-BR')).map(([key,v])=>{const o=elem('option',v.label+' ('+v.n+')');o.value=key;return o;}));
 const choices=[...select.options].map(option=>{
  const label=elem('label'), checkbox=elem('input');
  checkbox.type='checkbox';
  checkbox.value=option.value;
  label.append(checkbox, document.createTextNode(' '+option.textContent));
  return label;
 });
 $('qs-custom').replaceChildren(...choices);
 updateUnits();
}
let chapterIds=[],unmappedChapterQuestions=0;
// A ordem dos capítulos é a ordem editorial de articleIds no catálogo,
// usada pelos índices de matéria e pelo EPUB. Números do nome do arquivo
// são identificadores legados e não correspondem ao capítulo de leitura.
function quizChapterIds(catalog,contestId,subjectId){
 const exam=catalog?.contests?.find(c=>c.concursoId===contestId);
 const subject=exam?.subjects?.find(s=>s.subjectId===subjectId);
 return Array.isArray(subject?.articleIds)
  ?[...new Set(subject.articleIds.filter(id=>typeof id==='string'&&id.trim()))]:[];
}
function updateChapterDisplay(){
 const chapter=$('qs-capitulo'),value=Number(chapter.value);
 const control=$('qs-unidade'),selection='capitulo:'+value;
 if([...control.options].some(option=>option.value===selection))control.value=selection;
 $('qs-capitulo-value').textContent=String(value);
 $('qs-capitulo-prev').disabled=value<=Number(chapter.min);
 $('qs-capitulo-next').disabled=value>=Number(chapter.max);
 const range=singleSubjectRanges.get(control.value);
 const questionCount=available().filter(q=>q.subjectId===$('qs-materia').value&&range?.ids.has(q.articleId)).length;
 const articleId=chapterIds[value-1],article=articleId?manifest.get(articleId):null;
 const chapterName=article?.tituloExibicao||article?.titulo||'';
 const title=chapterName?' Capítulo '+value+': '+chapterName+'.':'';
 const omitted=unmappedChapterQuestions
  ?' '+unmappedChapterQuestions+' questão(ões) sem capítulo no catálogo ficaram fora do recorte.':'';
 $('qs-capitulo-description').textContent='Capítulos 1 a '+value+' incluídos, inclusive.'+
  title+' '+questionCount+' questão(ões) revisada(s) disponível(is) até aqui.'+omitted;
}
function updateUnits(){
 const subjectId=$('qs-materia').value,examId=contest()?.id;
 const related=available().filter(q=>q.subjectId===subjectId);
 chapterIds=quizChapterIds(chapterCatalog,examId,subjectId);
 const known=new Set(chapterIds);
 unmappedChapterQuestions=related.filter(q=>!known.has(q.articleId)).length;
 const max=chapterIds.length;
 const select=$('qs-unidade');
 select.replaceChildren();
 singleSubjectRanges.clear();
 for(let n=1;n<=max;n++){
  const ids=new Set(chapterIds.slice(0,n));
  const option=elem('option',String(n));option.value='capitulo:'+n;select.append(option);
  singleSubjectRanges.set(option.value,{field:'articleId',ids,unitId:null});
 }
 const slider=$('qs-capitulo');slider.min='1';slider.max=String(Math.max(1,max));slider.value=String(Math.max(1,max));
 $('qs-capitulo-label').textContent='Estudar até o capítulo';
 slider.setAttribute('aria-label','Até o capítulo, na ordem de leitura');
 if(max)updateChapterDisplay();
 else $('qs-capitulo-description').textContent='Não há sequência de capítulos para esta matéria no catálogo.';
 availability();
}
function availability(){
 const focused=selected('qs-scope')==='single', custom=selected('qs-scope')==='custom', scopedSelection=focused||custom;
 const mode=selected('qs-mode'),assessmentMode=mode==='avaliacao',retestMode=mode==='reteste';
 toggle('qs-assessment-options',assessmentMode);
 toggle('qs-scope-field',!assessmentMode);toggle('qs-custom-wrap',!assessmentMode&&custom);
 toggle('qs-specific-range',!assessmentMode&&focused);
 toggle('qs-content-filter-wrap',!assessmentMode&&scopedSelection);
 $('qs-content-filter-title').textContent=custom?'Questões das matérias selecionadas':'Questões desta matéria';
 toggle('qs-count-field',!assessmentMode);toggle('qs-difficulty-field',!assessmentMode);
 $('qs-count').disabled=assessmentMode;$('qs-difficulty-filter').disabled=assessmentMode;
 const assessmentRadio=document.querySelector('input[name="qs-mode"][value="avaliacao"]');
 assessmentRadio.disabled=!privateOrigin||!loggedIn;
 $('qs-mode-description').textContent=assessmentMode
  ?'Bateria fixa de 100 questões reservadas. Sem consulta e sem correção antes do envio final.'
  :retestMode?'Questões inéditas do mesmo conceito, liberadas quando o ciclo de revisão vence.'
  :'Resolva e veja a explicação após cada resposta.';
 if(assessmentMode){
  const canStart=privateOrigin&&loggedIn&&contest()?.id==='camara-2026';
  $('qs-availability').textContent=!privateOrigin?'Avaliação independente disponível somente na versão autenticada do estudo.'
   :!loggedIn?'Entre com GitHub para iniciar uma avaliação independente.'
   :contest()?.id!=='camara-2026'?'Selecione Câmara dos Deputados para esta bateria reservada.'
   :'100 questões inéditas reservadas para esta bateria.';
  $('qs-start').disabled=!canStart;
  return;
 }
 toggle('qs-custom-wrap',custom);
 toggle('qs-materia-wrap',focused);
 toggle('qs-unidade-wrap',focused&&$('qs-unidade').options.length>0);
 const n=eligible().length;
 const total=available().length;
 const amounts=new Map();
 $('qs-availability').textContent=n
  ?(n===total?total+' questões disponíveis':n+' de '+total+' questões nesta seleção')+'.'
  :'Ainda não há questões disponíveis para esta seleção.';
 if(focused&&!chapterIds.length)$('qs-availability').textContent='Esta matéria ainda não tem capítulos registrados no catálogo editorial.';
 const contentFilter=scopedSelection?(selected('qs-content-filter')||'algorithm'):'algorithm';
 if(scopedSelection&&contentFilter==='unanswered')$('qs-content-filter-description').textContent='Filtra questões sem resposta nem exposição registradas no histórico consultado. Isso não significa que entraram recentemente no catálogo.';
 else if(scopedSelection&&contentFilter==='retests'){
  $('qs-content-filter-description').textContent='Filtra itens ainda não expostos de conceitos liberados pela fila de revisão sincronizada.';
  if(!n){
   if(loggedIn&&!reviewQueueLoaded.has(contest()?.id))$('qs-availability').textContent='Consultando a fila privada para localizar retestes vencidos neste recorte.';
   else if(!loggedIn&&!retestQuestionIds(contest()?.id).size)$('qs-availability').textContent='Entre na versão autenticada para consultar a fila privada de retestes vencidos.';
   else $('qs-availability').textContent=focused?'Não há retestes neste recorte. Amplie os capítulos ou consulte outra matéria.':'Não há retestes nas matérias selecionadas. Ajuste as matérias ou amplie a seleção.';
  }
 }else if(scopedSelection)$('qs-content-filter-description').textContent='O algoritmo continua escolhendo a bateria como de costume.';
 if(custom) for(const q of eligible()) amounts.set(q.subjectId,(amounts.get(q.subjectId)||0)+1);
 const subjects=custom?customSubjects():new Set();
 if(custom && subjects.size<2) $('qs-availability').textContent='Selecione pelo menos duas matérias.';
 else if(custom && amounts.size<subjects.size) $('qs-availability').textContent='Uma das matérias selecionadas ficou sem itens. Ajuste a dificuldade ou a seleção.';
 if(retestMode&&!n)$('qs-availability').textContent=!loggedIn
  ?'Entre na versão autenticada para consultar a fila privada de retestes vencidos.'
  :!reviewQueueLoaded.has(contest()?.id)
   ?'Consultando a fila sincronizada para verificar se há retestes vencidos.'
   :'Não há retestes vencidos com questão diferente neste recorte.';
 $('qs-start').disabled=n<1||(custom&&(subjects.size<2||amounts.size<subjects.size));
}
function choose(n, pool=eligible()){
 const old=new Set(storeRead().filter(s=>s.concursoId===contest().id).flatMap(s=>s.answers.map(a=>a.questionId))),groups=new Map();
 shuffle(pool).forEach(q=>{if(!groups.has(q.subjectId))groups.set(q.subjectId,[]);groups.get(q.subjectId).push(q);});
 for(const g of groups.values())g.sort((a,b)=>Number(old.has(a.id))-Number(old.has(b.id)));
 const result=[];
 const order=shuffle([...groups.keys()]);while(result.length<n){let found=false;for(const key of order){const q=groups.get(key).shift();if(q){result.push(q.id);found=true;}if(result.length===n)break;}if(!found)break;}
 return result;
}
function sharedCasePracticeIds(pool,seen){
 const cases=new Map();
 for(const q of pool){
  const caseId=q.calibration?.caseId;
  if(!caseId)continue;
  if(!cases.has(caseId))cases.set(caseId,[]);
  cases.get(caseId).push(q.id);
 }
 return [...cases.values()].find(ids=>ids.length>=2&&ids.every(id=>!seen.has(id)))||[];
}
function renderSuggestions(review,repeat){
 const list=$('qs-suggestion-list'), exam=contest();
 list.replaceChildren();
 if(!exam || exam.id==='dataprev-2026'){toggle('qs-suggestions',false);return;}
 const pool=available().filter(q=>!q.annulled);
 const seen=new Set([...(seenByContest.get(exam.id)||[]), ...storeRead()
  .filter(s=>s.concursoId===exam.id).flatMap(s=>s.answers.map(a=>a.questionId))]);
 function offer(title, reason, ids, mode='aprendizagem'){
  if(!ids.length)return;
  const quantity=ids.length+' '+(ids.length===1?'questão':'questões');
  const button=elem('button'), count=elem('span',quantity), description=elem('span',reason);
  button.type='button';button.className='qs-suggestion';
  button.setAttribute('aria-label',title+' · '+quantity);
  description.id='qs-suggestion-reason-'+list.childElementCount;
  button.setAttribute('aria-describedby',description.id);
  count.className='qs-meta';description.className='qs-suggestion-reason';
  button.append(elem('strong',title),count,description);
  button.addEventListener('click',()=>start(ids,mode));
  list.append(button);
 }
 if(review)offer('Reteste de conceitos vencidos',review.title,review.questionIds,'reteste');
 else if(repeat)offer('Refazer questão anterior',repeat.title,[repeat.repeatQuestionId]);
 offer('Diagnóstico misto','Questões distribuídas entre matérias de '+exam.nome+'.',choose(10,pool));
 const official=loggedIn?pool.filter(q=>q.officialSource&&!seen.has(q.id)):[];
 if(official.length&&(!loggedIn||seenByContest.has(exam.id))){
  const relatedArticles=new Set(official.map(q=>q.articleId));
  const authors=pool.filter(q=>q.origin==='inedita'&&relatedArticles.has(q.articleId)&&!seen.has(q.id));
  const officialIds=choose(5,official);
  const authorIds=choose(officialIds.length,authors);
  const description=authorIds.length
   ? officialIds.length+' '+(officialIds.length===1?'oficial':'oficiais')+
    ' e '+authorIds.length+' '+(authorIds.length===1?'autoral relacionada.':'autorais relacionadas.')
   : 'Itens oficiais da banca para responder nesta tela.';
  offer(authorIds.length?'Praticar oficiais e autorais':'Praticar questões oficiais',description,
   [...officialIds,...authorIds]);
 }
 offer('Praticar caso compartilhado','Julgue itens sobre o mesmo cenário. A correção aparece após cada resposta.',
  loggedIn&&!seenByContest.has(exam.id)?[]:sharedCasePracticeIds(pool,seen),'aprendizagem');
 toggle('qs-suggestions',list.childElementCount>0);
}
async function updateSuggestions(){
 const request=++suggestionRequest, exam=contest()?.id;
 renderSuggestions();
 if(!loggedIn||!exam||exam==='dataprev-2026')return;
 try{
  const response=await fetch('/v1/study/unified?concurso='+encodeURIComponent(exam),{
   cache:'no-store',credentials:'same-origin'
  });
  if(!response.ok)return;
  const {adaptive}=await response.json();
  if(request!==suggestionRequest)return;
  if(Array.isArray(adaptive?.exposedQuestionIds))
   seenByContest.set(exam,new Set(adaptive.exposedQuestionIds));
  const local=new Set(storeRead().filter(s=>s.concursoId===exam).flatMap(s=>s.answers.map(a=>a.questionId)));
  const pending=(adaptive?.recommendations||[]).filter(item=>item.state==='review-pending'&&
   typeof item.nextReview==='string'&&item.nextReview<=adaptive.asOf);
  const valid=id=>{
   const question=data.map.get(id);
   return question?.concursoId===exam&&question.format==='CE'&&!question.annulled&&!reservedQuestionIds.has(id);
  };
  const topics=pending.map(item=>({
   title:item.title,
   ids:(item.questionIds||[]).filter(id=>valid(id)&&!local.has(id))
  })).filter(topic=>topic.ids.length);
  const questionIds=new Set(), includedTopics=new Set();
  // Keep the priority order and give each theme a turn before taking a second item.
  for(let round=0;questionIds.size<10 && topics.some(topic=>round<topic.ids.length);round++){
   for(const topic of topics){
    const id=topic.ids[round];
    if(!id||questionIds.has(id))continue;
    questionIds.add(id);
    includedTopics.add(topic);
    if(questionIds.size===10)break;
   }
  }
  const review=questionIds.size?{
   questionIds:[...questionIds],
   title:includedTopics.size===1?[...includedTopics][0].title:
    'Questões inéditas de '+includedTopics.size+' temas da sua fila de revisão.'
  }:null;
  const retests=new Map();
  for(const id of questionIds){
   const q=data.map.get(id);if(!q)continue;
   if(!retests.has(q.subjectId))retests.set(q.subjectId,new Set());
   retests.get(q.subjectId).add(q.id);
  }
  retestsByContest.set(exam,retests);
  reviewQueueLoaded.add(exam);
  const repeat=(adaptive?.recommendations||[]).find(item=>item.state==='review-pending'&&valid(item.repeatQuestionId));
  renderSuggestions(review,repeat);
  availability();
 }catch{
  if(request===suggestionRequest){renderSuggestions();availability();}
 }
}
async function startAssessment(){
 if(!privateOrigin||!loggedIn||contest()?.id!=='camara-2026'){status('Entre na versão autenticada e selecione Câmara dos Deputados.');return;}
 const poolId=$('qs-assessment-pool').value;
 const localExposureIds=[...new Set(storeRead().flatMap(saved=>saved.ids||[]))].filter(questionId=>reservedQuestionIds.has(questionId));
 status('Reservando a bateria inédita…');$('qs-start').disabled=true;
 try{
  const response=await fetch('/v1/study/assessment',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Quiz-Sync':'1'},
   body:JSON.stringify({action:'start',poolId,localExposureIds})});
  const payload=await response.json();
  if(!response.ok)throw Error(payload.error||'HTTP '+response.status);
  const c=contest();session={version:1,id:id(),assessmentSessionId:payload.sessionId,assessmentPoolId:payload.poolId,
   questions:payload.questions,concursoId:c.id,concursoName:c.nome,directed:true,mode:'avaliacao',scope:'reserved',
   startedAt:new Date().toISOString(),finishedAt:null,ids:payload.questions.map(q=>q.id),answers:[]};
  storeWrite();toggle('qs-config',false);toggle('qs-play',true);toggle('qs-summary',false);playing(true);render();readingStart();
  status('Avaliação independente iniciada. A correção e o gabarito ficam indisponíveis até o envio final.');
 }catch(error){
  status('Não foi possível iniciar a avaliação: '+error.message);
  availability();
 }
}
function start(recommended, directedMode='aprendizagem'){
 const directed=Array.isArray(recommended);
 if(!directed&&selected('qs-mode')==='avaliacao'){void startAssessment();return;}
 const n=directed?recommended.length:Number($('qs-count').value);if(!Number.isInteger(n)||n<1||n>100){status('Escolha entre 1 e 100 questões.');return;}
 const scope=selected('qs-scope'), custom=!directed&&scope==='custom';
 const pool=directed?null:eligible();
 const availableCount=directed?n:pool.length;
 if(!availableCount)return;
 if(!directed&&custom&&n<customSubjects().size){status('Escolha ao menos uma questão por matéria selecionada.');return;}
 if(!directed&&availableCount<n&&!window.confirm('Há '+availableCount+' questões para esta seleção. Iniciar com essa quantidade?'))return;
 const selection=$('qs-unidade').value;
 const unitId=scope==='single'&&!directed?(singleSubjectRanges.get(selection)?.unitId??null):null;
 const c=contest();session={version:1,id:id(),concursoId:c.id,concursoName:c.nome,directed,mode:directed?directedMode:selected('qs-mode'),scope:directed||custom?'mixed':scope,subjectId:!directed&&selected('qs-scope')==='single'?$('qs-materia').value:null,unitId,questionSelection:!directed&&scope==='single'?(selected('qs-content-filter')||'algorithm'):'algorithm',startedAt:new Date().toISOString(),finishedAt:null,ids:directed?recommended:choose(Math.min(n,availableCount),pool),answers:[]};
 storeWrite();toggle('qs-config',false);toggle('qs-play',true);toggle('qs-summary',false);playing(true);render();readingStart();status('Bateria iniciada. Respostas registradas após cada envio.');
}
function question(){return session?.mode==='avaliacao'?session.questions?.[session.answers.length]:data.map.get(session.ids[session.answers.length]);}
function theory(q){
 if(!q.articleId||!manifest.has(q.articleId))return null;const m=manifest.get(q.articleId),a=elem('a','Revisar artigo: '+(m.tituloExibicao||m.titulo||'ver conteúdo'));a.href=quizArticleLink(q.articleId,q.section||'',session.concursoId);a.target='_blank';a.rel='noopener noreferrer';return a;
}
function questionStatement(el,q){
 el.textContent=q.statement;
 if(q.format!=='reference'||!q.officialSource)return;
 const source=q.officialSource;
 const link=elem('a','Abrir caderno no item '+source.numero+' (PDF)');
 link.href=source.url;
 link.target='_blank';
 link.rel='noopener noreferrer';
 el.replaceChildren(link,document.createTextNode(' e julgar o enunciado. O PDF abre em outra aba.'));
}
function render(){
 if(!session)return;if(session.answers.length>=session.ids.length){void finish();return;}
 const q=question();if(!q){status('Questão indisponível. Encerre esta bateria.');return;}
 $('qs-number').textContent='Questão '+(session.answers.length+1)+' / '+session.ids.length;
 $('qs-context').textContent=(q.examPart||'')+' · '+(q.unitName||q.subjectName||q.subjectId);
 const levels={'muito-facil':'muito fácil',facil:'fácil',media:'média',dificil:'difícil','muito-dificil':'muito difícil'};
 $('qs-question-difficulty').textContent=q.estimatedDifficulty?'Dificuldade estimada: '+(levels[q.estimatedDifficulty]||q.estimatedDifficulty):'Dificuldade não classificada';
 $('qs-progress-bar').style.width=(100*session.answers.length/session.ids.length)+'%';questionStatement($('qs-statement'),q);
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>{e.checked=false;e.disabled=false;});
 shownAt=performance.now();
 $('qs-consulted').checked=false;
 $('qs-feedback-before').checked=false;
 $('qs-insecure').checked=false;$('qs-insecure').disabled=false;
 toggle('qs-blank-wrap',session.mode==='simulado'||session.mode==='avaliacao');toggle('qs-after',false);toggle('qs-feedback',false);toggle('qs-pending',false);toggle('qs-answer-form',true);toggle('qs-answer-metadata',true);toggle('qs-submit-row',true);
 toggle('qs-response-context',session.mode!=='avaliacao');
 $('qs-consulted').checked=false;$('qs-feedback-before').checked=false;
 $('qs-consulted').disabled=session.mode==='avaliacao';$('qs-feedback-before').disabled=session.mode==='avaliacao';
}
function questionProvenance(q){
 const label=q.origin==='real'?'Questão oficial':q.calibration?.type==='autoral-calibrada'?
  'Questão autoral calibrada':'Questão autoral de aprendizagem';
 const origin=elem('small',label);
 if(!q.officialSource)return origin;
 const source=q.officialSource;
 origin.textContent=label+' · '+source.banca+' · '+source.orgao+' '+source.aplicacao.slice(0,4)+' · item '+source.numero+' · ';
 const answerKey=elem('a','Gabarito definitivo');
 answerKey.href=source.gabarito;
 answerKey.target='_blank';
 answerKey.rel='noopener noreferrer';
 const paper=elem('a','Caderno original');
 paper.href=source.url;
 paper.target='_blank';
 paper.rel='noopener noreferrer';
 origin.append(paper,document.createTextNode(' · '),answerKey);
 return origin;
}
function feedback(q,a){
 const el=$('qs-feedback');
 const chosen=a.answer==='C'?'Certo':a.answer==='E'?'Errado':'Em branco';
 const solution=q.correctAnswer==='C'?'Certo':'Errado';
 el.replaceChildren(elem('strong',(a.result==='correct'?'Acertou':a.result==='blank'?'Em branco':'Errou')+' · Sua resposta: '+chosen+' · Gabarito: '+solution),explanationContent(q.explanation));
 el.append(questionProvenance(q));
 const link=theory(q);if(link)el.append(link);toggle('qs-feedback',true);
}
function quizSyncAttempt(attempt){
 const mechanism=typeof attempt.mechanism==='string'
  ?attempt.mechanism.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  :null;
 return {...attempt,mechanism:/^[A-Za-z0-9][A-Za-z0-9_-]{0,179}$/.test(mechanism||'')?mechanism:null};
}
async function sync(a){
 if(!privateOrigin||!loggedIn)return;
 try{
  const r=await fetch('/v1/study/quiz',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Quiz-Sync':'1'},body:JSON.stringify({version:1,attempts:[quizSyncAttempt(a)]})});
  if(r.status===401){loggedIn=false;throw Error('Sessão GitHub expirada.');}
  if(!r.ok)throw Error('HTTP '+r.status);
  markSynced(a.id);
  try { localStorage.setItem('concursos-quiz-sincronizado', String(Date.now())); } catch {}
  $('qs-sync').textContent='Resposta sincronizada no histórico privado.';
 }catch(e){$('qs-sync').textContent='Resposta salva localmente. Sincronização pendente: '+e.message;}
}
function answer(ev){
 ev.preventDefault();if(!session||session.finishedAt)return;
 const c=document.querySelector('input[name="qs-answer"]:checked');if(!c){status('Marque Certo, Errado ou Em branco para registrar.');return;}
 const q=question();if(!q)return;const v=c.value,blank=v==='blank';
 const elapsed=shownAt===null?null:Math.round(performance.now()-shownAt);
 const responseMs=elapsed!==null&&elapsed>=0&&elapsed<=86400000?elapsed:null;
 shownAt=null;
 const a=session.mode==='avaliacao'
  ?{responseMs,id:id(),sessionId:session.assessmentSessionId,concursoId:session.concursoId,questionId:q.id,answer:blank?null:v,
    confidence:blank?'unknown':$('qs-insecure').checked?'insecure':'secure',mode:'avaliacao',answeredAt:Date.now(),synced:false}
  :{responseMs,consulted:$('qs-consulted').checked,feedbackBefore:$('qs-feedback-before').checked,id:id(),sessionId:session.id,concursoId:session.concursoId,questionId:q.id,subjectId:q.subjectId,conceptId:q.conceptId||null,mechanism:q.mechanism||null,mode:session.mode,answer:blank?null:v,correctAnswer:q.correctAnswer,result:blank?'blank':v===q.correctAnswer?'correct':'incorrect',confidence:blank?'unknown':$('qs-insecure').checked?'insecure':'secure',answeredAt:Date.now(),synced:false};
 session.answers.push(a);storeWrite();if(session.mode!=='avaliacao')sync(a);
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>e.disabled=true);
 $('qs-insecure').disabled=true;$('qs-consulted').disabled=true;$('qs-feedback-before').disabled=true;
 // Preserva a alternativa escolhida para o leitor comparar com o gabarito.
 toggle('qs-answer-metadata',false);toggle('qs-submit-row',false);
 toggle('qs-after',true);
 if(session.mode==='aprendizagem'||session.mode==='reteste')feedback(q,a);
 else toggle('qs-pending',true);
 $('qs-next').textContent=session.answers.length===session.ids.length?'Ver resultado':'Próxima questão';
 // Não deslocar a leitura automaticamente para longe do enunciado.
 $('qs-next').focus({preventScroll:true});
 status('Resposta registrada. '+(session.mode==='avaliacao'?'Correção disponível ao final.':'Confira o comentário junto ao enunciado.'));
}
async function finish(){
 if(!session||session.finishedAt||session.finishing)return;
 if(session.mode==='avaliacao'){
  session.finishing=true;status('Enviando respostas e corrigindo a bateria…');
  const saved=new Map(session.answers.map(a=>[a.questionId,a]));
  const answers=session.ids.map(questionId=>{const a=saved.get(questionId);return {
   questionId,answer:a?.answer??null,confidence:a?.confidence??'unknown',responseMs:a?.responseMs??null
  };});
  try{
   const response=await fetch('/v1/study/assessment',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Quiz-Sync':'1'},
    body:JSON.stringify({action:'submit',sessionId:session.assessmentSessionId,answers})});
   const payload=await response.json();if(!response.ok)throw Error(payload.error||'HTTP '+response.status);
   session.questions=payload.questions;
   session.assessmentTotals=payload.totals;
   session.answers=payload.questions.map(q=>{
    const previous=saved.get(q.id)||{};data.map.set(q.id,q);data.questions.push(q);
    return {...previous,id:previous.id||id(),sessionId:session.assessmentSessionId,concursoId:session.concursoId,
     questionId:q.id,subjectId:q.subjectId,conceptId:q.conceptId||null,mechanism:q.mechanism||null,mode:'avaliacao',
     answer:q.userAnswer,correctAnswer:q.correctAnswer,result:q.result,confidence:previous.confidence||'unknown',
     responseMs:previous.responseMs??null,consulted:false,feedbackBefore:false,answeredAt:previous.answeredAt||Date.now(),synced:true};
   });
   session.finishing=false;
  }catch(error){
   session.finishing=false;storeWrite();status('A correção ainda não foi confirmada: '+error.message+'. Tente enviar novamente.');return;
  }
 }
 if(!session.finishedAt){session.finishedAt=new Date().toISOString();storeWrite();}
 localStorage.removeItem(ACTIVE);toggle('qs-play',false);toggle('qs-config',false);toggle('qs-summary',true);playing(false);
 window.scrollTo({top:0,behavior:'instant'});
 $('qs-result-context').textContent=session.concursoName+' / '+({aprendizagem:'aprendizagem',reteste:'reteste espaçado',avaliacao:'avaliação independente',simulado:'bateria histórica'}[session.mode]||session.mode);
 const correct=session.answers.filter(a=>a.result==='correct').length;
 const wrong=session.answers.filter(a=>a.result==='incorrect').length;
 const blank=session.answers.filter(a=>a.result==='blank').length;
 const unsure=session.answers.filter(a=>a.result==='correct'&&a.confidence==='insecure').length;
 const percent=session.answers.length?Math.round(100*(session.mode==='avaliacao'?correct-wrong:correct)/session.answers.length):0;
 $('qs-result-percent').textContent=percent+'%';
 $('qs-stats').replaceChildren(...[['Acertos',correct],['Erros',wrong],['Acertos inseguros',unsure],['Em branco',blank]].map(([label,value])=>{
  const box=elem('div');box.append(elem('strong',value),elem('span',label));return box;
 }));
 $('qs-score').textContent=session.mode==='avaliacao'
  ?'Pontuação líquida: '+(session.assessmentTotals?.net??(correct-wrong))+' / '+session.answers.length+
   '. A meta de 95% corresponde a 171/180 na prova completa; esta bateria mede apenas o pool reservado.'
  :correct+' de '+session.answers.length+' questões. '+(session.concursoId==='camara-2026'?'Saldo C/E: '+(correct-wrong)+'. ':'')+'Desempenho de aprendizagem, não equivale à nota oficial.';
 const difficultyGroups=new Map();
 for(const a of session.answers){
  const q=data.map.get(a.questionId),k=q?.estimatedDifficulty||'sem-classificacao';
  if(!difficultyGroups.has(k))difficultyGroups.set(k,{total:0,correct:0,incorrect:0});
  const d=difficultyGroups.get(k);d.total++;
  if(a.result==='correct')d.correct++;
  if(a.result==='incorrect')d.incorrect++;
 }
 const difficultyLabels={'muito-facil':'Muito fácil',facil:'Fácil',media:'Média',dificil:'Difícil','muito-dificil':'Muito difícil','sem-classificacao':'Sem classificação'};
 const difficultyRoot=$('qs-battery-difficulty');
 difficultyRoot.replaceChildren(...['muito-facil','facil','media','dificil','muito-dificil','sem-classificacao'].filter(k=>difficultyGroups.has(k)).map(k=>{
  const d=difficultyGroups.get(k),row=elem('div');row.className='qs-difficulty-item';
  const judged=d.correct+d.incorrect,rate=judged?Math.round(100*d.correct/judged)+'%':'sem amostra';
  row.append(elem('strong',difficultyLabels[k]),elem('span',d.total+' tentativa(s) · acerto: '+rate));return row;
 }));

 $('qs-results-link').href='resultados.html?concurso='+encodeURIComponent(session.concursoId);
 const priorities=quizPriorityGroups(session.answers,data.map,session.concursoId).slice(0,5);
 const container=$('qs-priorities');container.replaceChildren();
 $('qs-priorities-note').textContent=priorities.length?
  'Baseadas nos erros, acertos inseguros e acertos com apoio nesta bateria. Erros com segurança merecem atenção especial.':
  'Sem erros ou acertos inseguros nesta bateria. Uma revisão em outro dia ajudará a testar a retenção.';
 for(const [i,g] of priorities.entries()){
  const card=elem('article');card.className='qs-recommendation';
  const left=elem('div'),rank=elem('span',String(i+1).padStart(2,'0')+' / '+(g.errors?'prioridade':'reforço'));rank.className='qs-meta';
  const title=elem('h4',quizArticleName(g.articleId));
  const reason=elem('p',quizPriorityReason(g));left.append(rank,title,reason);
  if(g.section)left.append(elem('p','Trecho: '+g.section));
  const link=elem('a','Ler o trecho');link.href=quizArticleLink(g.articleId,g.section,session.concursoId);link.rel='noreferrer';card.append(left,link);
  container.append(card);
 }
 $('qs-review-count').textContent='('+session.answers.length+')';
 const review=$('qs-reviews');review.replaceChildren();
 session.answers.forEach((a,i)=>{const q=data.map.get(a.questionId);if(!q)return;const d=elem('details');d.className='qs-review';const statement=elem('p');questionStatement(statement,q);d.append(elem('summary',(i+1)+'. '+(q.subjectName||q.subjectId)+' · '+(a.result==='correct'?'acerto':a.result==='blank'?'em branco':'erro')),statement,elem('p','Sua resposta: '+(a.answer==='C'?'Certo':a.answer==='E'?'Errado':'Em branco')+' · Gabarito: '+(q.correctAnswer==='C'?'Certo':'Errado')),explanationContent(q.explanation),questionProvenance(q));const link=theory(q);if(link)d.append(link);review.append(d);});
 status('Bateria concluída. Prioridades de leitura calculadas a partir desta sessão.');
}
function resume(){
 const key=localStorage.getItem(ACTIVE),s=storeRead().find(x=>x.id===key&&!x.finishedAt);
 if(!s||(s.mode==='avaliacao'?(!Array.isArray(s.questions)||!s.assessmentSessionId):!s.ids.every(x=>data.map.has(x))))return;
 session=s;if([...$('qs-concurso').options].some(o=>o.value===s.concursoId)) $('qs-concurso').value=s.concursoId;updateSubjects();toggle('qs-config',false);toggle('qs-play',true);playing(true);render();readingStart();status('Bateria anterior retomada.');
}
function exportJson(){
 if(!session)return;const obj={...session,answers:session.answers.map(({synced,...a})=>a)},u=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'})),a=elem('a');a.href=u;a.download='bateria-'+session.concursoId+'-'+session.id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1500);
}
async function auth(){
 toggle('qs-login',!privateOrigin);
 if(!privateOrigin){$('qs-sync').textContent='GitHub Pages: gravação somente neste navegador. Use o ambiente autenticado para sincronizar.';return;}
 try{const r=await fetch('/v1/session',{credentials:'same-origin',cache:'no-store'});loggedIn=r.ok;}catch{loggedIn=false;}
 if(!loggedIn){toggle('qs-login',true);$('qs-login').href='/v1/login/github?return=%2Fquestoes.html';$('qs-login').textContent='Entrar com GitHub para sincronizar';$('qs-sync').textContent='Sem login, respostas ficam apenas neste navegador.';return;}
 $('qs-sync').textContent='GitHub conectado. As respostas serão gravadas no banco privado.';
 await Promise.all([
  loadAuthenticatedCatalog('/v1/study/cgu-catalog','cgu-2026').then(()=>{cguCatalogLoaded=true;})
   .catch(()=>{$('qs-sync').textContent='GitHub conectado. O acervo privado de questões da CGU está indisponível.';}),
  loadAuthenticatedCatalog('/v1/study/camara-official','camara-2026').catch(()=>{})
 ]);
}
async function loadAuthenticatedCatalog(path,concursoId){
 const response=await fetch(path,{credentials:'same-origin',cache:'no-store'});
 if(!response.ok)throw Error('Acervo indisponível');
 const catalog=await response.json();
 if(catalog.version!==1||catalog.concursoId!==concursoId||!Array.isArray(catalog.questions))
  throw Error('Formato inválido');
 for(const question of catalog.questions){
  const previous=data.map.get(question.id);
  if(previous){
   if(previous.format==='reference'){
    data.questions[data.questions.indexOf(previous)]=question;
    data.map.set(question.id,question);
   }
  }else{
   data.questions.push(question);
   data.map.set(question.id,question);
  }
 }
}
async function syncPending(){
 for(const saved of storeRead())for(const answer of saved.answers.filter(item=>!item.synced))await sync(answer);
}
function theme(){const t=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=t;localStorage.setItem('tema-concursos',t);$('qs-theme').textContent=t==='light'?'modo escuro':'modo claro';}
function saveBatchForLogin(){
 if(!privateOrigin||!new URLSearchParams(location.hash.slice(1)).has('questoes'))return;
 try{sessionStorage.setItem(LOGIN_BATCH,JSON.stringify({hash:location.hash,expiresAt:Date.now()+600000}));}
 catch{}
}
function restoreBatchAfterLogin(){
 if(!loggedIn)return;
 try{
  const pending=JSON.parse(sessionStorage.getItem(LOGIN_BATCH)||'null');
  sessionStorage.removeItem(LOGIN_BATCH);
  if(!location.hash&&typeof pending?.hash==='string'&&pending.hash.startsWith('#')&&pending.expiresAt>Date.now())
   history.replaceState(null,'',location.pathname+location.search+pending.hash);
 }catch{}
}
function offerRecommendedBatch() {
 const params = new URLSearchParams(location.hash.slice(1));
 if (!params.has('questoes')) return;
 const exam = params.get('concurso');
 const ids = [...new Set(params.get('questoes').split(','))];
 if (exam==='dataprev-2026' || ids.length > 10 || !ids.every(id => {
  const q = data.map.get(id);
  return q?.concursoId === exam && q.format === 'CE' && !q.annulled;
 })) {
  status(privateOrigin&&!loggedIn&&exam==='cgu-2026'
   ?'Entre com GitHub para abrir esta bateria da CGU.'
   :'A bateria recomendada está indisponível no catálogo atual.');
  return;
 }
 const repeat=params.get('repetir')==='1';
 const button=$('qs-recommended-start');
 $('qs-recommended-title').textContent=repeat?'Questão para refazer':'Bateria recomendada';
 $('qs-recommended-details').textContent=data.contests.find(c=>c.id===exam).nome+
  ' · '+ids.length+(ids.length===1?' questão':' questões');
 button.textContent=repeat?'Refazer questão anterior':'Iniciar bateria';
 if(!repeat)button.setAttribute('aria-label','Iniciar bateria recomendada ('+ids.length+')');
 button.addEventListener('click', () => {
  if (session && !session.finishedAt && !window.confirm('Começar a bateria recomendada e sair da bateria anterior?')) return;
  $('qs-concurso').value = exam;
  updateSubjects();
  toggle('qs-recommended',false);
  history.replaceState(null, '', location.pathname + location.search);
  start(ids,'aprendizagem');
 });
 toggle('qs-recommended',true);
}
async function init(){
 $('qs-theme').textContent=document.documentElement.dataset.theme==='light'?'modo escuro':'modo claro';$('qs-theme').addEventListener('click',theme);
 $('qs-login').addEventListener('click',saveBatchForLogin);
 $('qs-custom').addEventListener('change',availability);
 $('qs-concurso').addEventListener('change',()=>{updateSubjects();updateSuggestions();});$('qs-materia').addEventListener('change',updateUnits);
 document.querySelectorAll('input[name="qs-mode"]').forEach(input=>input.addEventListener('change',availability));
 $('qs-capitulo').addEventListener('input',()=>{updateChapterDisplay();availability();});
 $('qs-capitulo-prev').addEventListener('click',()=>{$('qs-capitulo').value=String(Math.max(Number($('qs-capitulo').min),Number($('qs-capitulo').value)-1));updateChapterDisplay();availability();});
 $('qs-capitulo-next').addEventListener('click',()=>{$('qs-capitulo').value=String(Math.min(Number($('qs-capitulo').max),Number($('qs-capitulo').value)+1));updateChapterDisplay();availability();});
 $('qs-difficulty-filter').addEventListener('change',availability);
 const count=$('qs-count');
 const refreshPresets=()=>document.querySelectorAll('#qs-presets button').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.count)===Number(count.value))));
 count.addEventListener('input',refreshPresets);
 document.querySelectorAll('#qs-presets button').forEach(b=>b.addEventListener('click',()=>{count.value=b.dataset.count;refreshPresets();}));
 document.querySelectorAll('input[name="qs-scope"]').forEach(e=>e.addEventListener('change',availability));
 document.querySelectorAll('input[name="qs-content-filter"]').forEach(e=>e.addEventListener('change',availability));
 $('qs-start').addEventListener('click',start);$('qs-answer-form').addEventListener('submit',answer);
 $('qs-next').addEventListener('click',()=>{const previous=session?.answers.length||0;render();if(session&&!session.finishedAt&&session.answers.length===previous)readingStart();});
 $('qs-finish').addEventListener('click',()=>{
  if(!session||session.finishedAt)return;
  const pending=session.ids.length-session.answers.length;
  if(pending>0&&!window.confirm('Encerrar a bateria com '+pending+' questão'+(pending===1?'':'ões')+' ainda não respondida'+(pending===1?'':'s')+'?'))return;
  finish();
 });
 $('qs-restart').addEventListener('click',()=>{session=null;playing(false);toggle('qs-summary',false);toggle('qs-config',true);window.scrollTo({top:0,behavior:'instant'});status('Escolha a próxima bateria.');updateSuggestions();});
 $('qs-export').addEventListener('click',exportJson);
 try{
  const r=await fetch('data/questoes-publicas.json',{cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);data=await r.json();
  if(data.version!==1||!Array.isArray(data.questions)||!Array.isArray(data.contests))throw Error('Formato do banco inválido.');
  const reserveResponse=await fetch('data/avaliacao-reservada-camara-2026.json',{cache:'no-store'});
  if(!reserveResponse.ok)throw Error('Lista de reserva da avaliação indisponível.');
  const reserve=await reserveResponse.json();
  if(reserve.schemaVersion!==1||reserve.contestId!=='camara-2026'||!Array.isArray(reserve.reservedQuestionIds)||
   new Set(reserve.reservedQuestionIds).size!==reserve.reservedQuestionIds.length)throw Error('Lista de reserva inválida.');
  reservedQuestionIds=new Set(reserve.reservedQuestionIds);
  const locallyKnown=new Set(storeRead().flatMap(saved=>saved.ids||[]));
  const reservedFromActiveSessions=data.questions.filter(q=>reservedQuestionIds.has(q.id)&&locallyKnown.has(q.id));
  data.questions=data.questions.filter(q=>!reservedQuestionIds.has(q.id));
  data.map=new Map(data.questions.map(q=>[q.id,q]));
  for(const q of reservedFromActiveSessions)data.map.set(q.id,q);
  try{const m=await fetch('manifest.json').then(r=>r.ok?r.json():[]);manifest=new Map(m.filter(x=>x.articleId).map(x=>[x.articleId,x]));}catch{}
  const catalogResponse=await fetch('data/catalogo-materias-por-concurso.json',{cache:'no-store'});
  if(!catalogResponse.ok)throw Error('Catálogo editorial indisponível (HTTP '+catalogResponse.status+').');
  chapterCatalog=await catalogResponse.json();
  if(!Array.isArray(chapterCatalog?.contests))throw Error('Formato do catálogo editorial incompatível.');
  await auth();
  const options=data.contests.filter(c=>c.id!=='dataprev-2026').map(c=>{
   const n=data.questions.filter(q=>q.concursoId===c.id).length;
   const count=c.id==='cgu-2026'&&!cguCatalogLoaded?n+' públicas':String(n);
   const option=elem('option',c.nome+' ('+count+')');option.value=c.id;return option;
  });
  $('qs-concurso').replaceChildren(...options);
  const saved=localStorage.getItem('concurso_ativo_id');
  $('qs-concurso').value=options.some(o=>o.value===saved)?saved:options.find(o=>o.value==='camara-2026')?.value||options[0]?.value||'';
  updateSubjects();updateSuggestions();toggle('qs-config',true);status('');
  restoreBatchAfterLogin();resume();offerRecommendedBatch();if(loggedIn)void syncPending();
 }catch(e){status('Não foi possível abrir o banco: '+e.message);}
}
init();
})();
