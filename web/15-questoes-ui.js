/* Baterias de concurso; a fonte pública contém apenas enunciados revisados. */
(function(){
'use strict';
const $=id=>document.getElementById(id),WORKER='https://concurso-estudo.leoruas.workers.dev';
const STORE='concursos-quiz-sessoes-v1',ACTIVE='concursos-quiz-ativa-v1';
const privateOrigin=location.origin===WORKER;
let data=null,session=null,loggedIn=false,manifest=new Map(),shownAt=null;
let seenByContest=new Map(), suggestionRequest=0;
const elem=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);return e;};
const toggle=(id,show)=>{$(id).hidden=!show;};
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
  if(!error&&!unsure&&!blank)continue;
  const weight=error?(a.confidence==='secure'?8:6):unsure?2:1;
  const g=groups.get(q.articleId)||{articleId:q.articleId,score:0,errors:0,secureErrors:0,uncertainCorrect:0,blanks:0,sections:new Map()};
  g.score+=weight;
  if(error){g.errors++;if(a.confidence==='secure')g.secureErrors++;}
  if(unsure)g.uncertainCorrect++;
  if(blank)g.blanks++;
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
function available(){return data?.questions.filter(q=>q.concursoId===contest()?.id&&q.format==='CE')||[];}
function customSubjects(){
 return new Set([...$("qs-custom").querySelectorAll("input:checked")].map(input=>input.value));
}
function eligible(){
 let a=available();
 const scope=selected('qs-scope');
 if(scope==='custom'){
  const subjects=customSubjects();
  a=a.filter(q=>subjects.has(q.subjectId));
 }
 if(scope==='single'){
  const u=$('qs-unidade').value;
  a=a.filter(q=>q.subjectId===$('qs-materia').value&&(!u||q.unitId===u));
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
function updateUnits(){
 const counts=new Map();
 for(const q of available().filter(q=>q.subjectId===$('qs-materia').value)){
  const x=counts.get(q.unitId)||{name:q.unitName||q.unitId,n:0};x.n++;counts.set(q.unitId,x);
 }
 const u=$('qs-unidade');u.replaceChildren();
 const all=elem('option','Todas as unidades');all.value='';u.append(all);
 for(const [id,v] of counts){const o=elem('option',v.name+' ('+v.n+')');o.value=id;u.append(o);}
 availability();
}
function availability(){
 const focused=selected('qs-scope')==='single', custom=selected('qs-scope')==='custom';
 toggle('qs-custom-wrap',custom);
 toggle('qs-materia-wrap',focused);
 toggle('qs-unidade-wrap',focused&&$('qs-unidade').options.length>2);
 const n=eligible().length, c=contest();$('qs-availability').textContent=n?n+' questões revisadas disponíveis em '+c.nome+'.':'Ainda não há questões revisadas disponíveis para esta seleção.';const amounts=new Map();
 if(custom) for(const q of eligible()) amounts.set(q.subjectId,(amounts.get(q.subjectId)||0)+1);
 const subjects=custom?customSubjects():new Set();
 if(custom && subjects.size<2) $('qs-availability').textContent='Selecione pelo menos duas matérias.';
 else if(custom && amounts.size<subjects.size) $('qs-availability').textContent='Uma das matérias selecionadas ficou sem itens. Ajuste a dificuldade ou a seleção.';
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
function renderSuggestions(review){
 const list=$('qs-suggestion-list'), exam=contest();
 list.replaceChildren();
 if(!exam || exam.id==='dataprev-2026'){toggle('qs-suggestions',false);return;}
 const pool=available().filter(q=>!q.annulled);
 const seen=new Set([...(seenByContest.get(exam.id)||[]), ...storeRead()
  .filter(s=>s.concursoId===exam.id).flatMap(s=>s.answers.map(a=>a.questionId))]);
 function offer(title, reason, ids){
  if(!ids.length)return;
  const row=elem('div'), button=elem('button',title+' · '+ids.length+' '+(ids.length===1?'questão':'questões'));
  button.type='button';button.className='qs-button';
  button.addEventListener('click',()=>start(ids,'aprendizagem'));
  row.append(button,elem('p',reason));list.append(row);
 }
 if(review)offer('Revisar erros e dúvidas',review.title,review.questionIds);
 offer('Praticar questões novas',loggedIn?'Itens sem resposta no histórico consultado.':'Itens sem resposta neste navegador.',
  loggedIn&&!seenByContest.has(exam.id)?[]:choose(10,pool.filter(q=>!seen.has(q.id))));
 offer('Diagnóstico misto','Questões distribuídas entre matérias de '+exam.nome+'.',choose(10,pool));
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
  const review=adaptive?.recommendations?.find(item=>item.state==='review-pending'&&item.questionIds?.length&&
   item.questionIds.every(id=>data.map.get(id)?.concursoId===exam&&!local.has(id)));
  renderSuggestions(review);
 }catch{
  if(request===suggestionRequest)renderSuggestions();
 }
}
function start(recommended, directedMode='simulado'){
 const directed=Array.isArray(recommended);
 const n=directed?recommended.length:Number($('qs-count').value);if(!Number.isInteger(n)||n<1||n>100){status('Escolha entre 1 e 100 questões.');return;}
 const scope=selected('qs-scope'), custom=!directed&&scope==='custom';
 const availableCount=directed?n:eligible().length;
 if(!availableCount)return;
 if(custom&&n<customSubjects().size){status('Escolha ao menos uma questão por matéria selecionada.');return;}
 if(!directed&&availableCount<n&&!window.confirm('Há '+availableCount+' questões para esta seleção. Iniciar com essa quantidade?'))return;
 const c=contest();session={version:1,id:id(),concursoId:c.id,concursoName:c.nome,directed,mode:directed?directedMode:selected('qs-mode'),scope:directed||custom?'mixed':scope,subjectId:!directed&&selected('qs-scope')==='single'?$('qs-materia').value:null,unitId:!directed&&selected('qs-scope')==='single'?$('qs-unidade').value||null:null,startedAt:new Date().toISOString(),finishedAt:null,ids:directed?recommended:choose(Math.min(n,eligible().length)),answers:[]};
 storeWrite();toggle('qs-config',false);toggle('qs-play',true);toggle('qs-summary',false);playing(true);render();readingStart();status('Bateria iniciada. Respostas registradas após cada envio.');
}
function question(){return data.map.get(session.ids[session.answers.length]);}
function theory(q){
 if(!q.articleId||!manifest.has(q.articleId))return null;const m=manifest.get(q.articleId),a=elem('a','Revisar artigo: '+(m.tituloExibicao||m.titulo||'ver conteúdo'));a.href=quizArticleLink(q.articleId,q.section||'',session.concursoId);a.target='_blank';a.rel='noopener noreferrer';return a;
}
function render(){
 if(!session)return;if(session.answers.length>=session.ids.length){finish();return;}
 const q=question();if(!q){status('Questão indisponível. Encerre esta bateria.');return;}
 $('qs-number').textContent='Questão '+(session.answers.length+1)+' / '+session.ids.length;
 $('qs-context').textContent=(q.examPart||'')+' · '+(q.unitName||q.subjectName||q.subjectId);
 const levels={'muito-facil':'muito fácil',facil:'fácil',media:'média',dificil:'difícil','muito-dificil':'muito difícil'};
 $('qs-question-difficulty').textContent=q.estimatedDifficulty?'Dificuldade estimada: '+(levels[q.estimatedDifficulty]||q.estimatedDifficulty):'Dificuldade não classificada';
 $('qs-progress-bar').style.width=(100*session.answers.length/session.ids.length)+'%';$('qs-statement').textContent=q.statement;
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>{e.checked=false;e.disabled=false;});
 shownAt=performance.now();
 $('qs-consulted').checked=false;
 $('qs-feedback-before').checked=false;
 $('qs-insecure').checked=false;$('qs-insecure').disabled=false;
 toggle('qs-blank-wrap',session.mode==='simulado');toggle('qs-after',false);toggle('qs-feedback',false);toggle('qs-pending',false);toggle('qs-answer-form',true);toggle('qs-answer-metadata',true);toggle('qs-submit-row',true);
 $('qs-consulted').disabled=false;$('qs-feedback-before').disabled=false;
}
function feedback(q,a){
 const el=$('qs-feedback');
 const chosen=a.answer==='C'?'Certo':a.answer==='E'?'Errado':'Em branco';
 const solution=q.correctAnswer==='C'?'Certo':'Errado';
 el.replaceChildren(elem('strong',(a.result==='correct'?'Acertou':a.result==='blank'?'Em branco':'Errou')+' · Sua resposta: '+chosen+' · Gabarito: '+solution),elem('p',q.explanation));
 const link=theory(q);if(link)el.append(link);toggle('qs-feedback',true);
}
async function sync(a){
 if(!privateOrigin||!loggedIn)return;
 try{
  const r=await fetch('/v1/study/quiz',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Quiz-Sync':'1'},body:JSON.stringify({version:1,attempts:[a]})});
  if(r.status===401){loggedIn=false;throw Error('Sessão GitHub expirada.');}
  if(!r.ok)throw Error('HTTP '+r.status);
  markSynced(a.id);
  try { localStorage.setItem('concursos-quiz-sincronizado', String(Date.now())); } catch {}
  $('qs-sync').textContent='Resposta sincronizada no histórico privado.';
 }catch(e){$('qs-sync').textContent='Resposta salva localmente. Sincronização pendente: '+e.message;}
}
function answer(ev){
 ev.preventDefault();if(!session||session.finishedAt)return;
 const c=document.querySelector('input[name="qs-answer"]:checked');if(!c){status('Marque Certo ou Errado para registrar.');return;}
 const q=question();if(!q)return;const v=c.value,blank=v==='blank';
 const elapsed=shownAt===null?null:Math.round(performance.now()-shownAt);
 const responseMs=elapsed!==null&&elapsed>=0&&elapsed<=86400000?elapsed:null;
 shownAt=null;
 const a={responseMs,consulted:$('qs-consulted').checked,feedbackBefore:$('qs-feedback-before').checked,id:id(),sessionId:session.id,concursoId:session.concursoId,questionId:q.id,subjectId:q.subjectId,conceptId:q.conceptId||null,mechanism:q.mechanism||null,mode:session.mode,answer:blank?null:v,correctAnswer:q.correctAnswer,result:blank?'blank':v===q.correctAnswer?'correct':'incorrect',confidence:blank?'unknown':$('qs-insecure').checked?'insecure':'secure',answeredAt:Date.now(),synced:false};
 session.answers.push(a);storeWrite();sync(a);
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>e.disabled=true);
 $('qs-insecure').disabled=true;$('qs-consulted').disabled=true;$('qs-feedback-before').disabled=true;
 // Preserva a alternativa escolhida para o leitor comparar com o gabarito.
 toggle('qs-answer-metadata',false);toggle('qs-submit-row',false);
 toggle('qs-after',true);
 if(session.mode==='aprendizagem')feedback(q,a);
 else toggle('qs-pending',true);
 $('qs-next').textContent=session.answers.length===session.ids.length?'Ver resultado':'Próxima questão';
 // Não deslocar a leitura automaticamente para longe do enunciado.
 $('qs-next').focus({preventScroll:true});
 status('Resposta registrada. '+(session.mode==='simulado'?'Correção disponível ao final.':'Confira o comentário junto ao enunciado.'));
}
function finish(){
 if(!session)return;if(!session.finishedAt){session.finishedAt=new Date().toISOString();storeWrite();}
 localStorage.removeItem(ACTIVE);toggle('qs-play',false);toggle('qs-config',false);toggle('qs-summary',true);playing(false);
 window.scrollTo({top:0,behavior:'instant'});
 $('qs-result-context').textContent=session.concursoName+' / '+(session.mode==='aprendizagem'?'aprendizagem':'simulado');
 const correct=session.answers.filter(a=>a.result==='correct').length;
 const wrong=session.answers.filter(a=>a.result==='incorrect').length;
 const blank=session.answers.filter(a=>a.result==='blank').length;
 const unsure=session.answers.filter(a=>a.result==='correct'&&a.confidence==='insecure').length;
 const percent=session.answers.length?Math.round(100*correct/session.answers.length):0;
 $('qs-result-percent').textContent=percent+'%';
 $('qs-stats').replaceChildren(...[['Acertos',correct],['Erros',wrong],['Acertos inseguros',unsure],['Em branco',blank]].map(([label,value])=>{
  const box=elem('div');box.append(elem('strong',value),elem('span',label));return box;
 }));
 $('qs-score').textContent=correct+' de '+session.answers.length+' questões. '+(session.concursoId==='camara-2026'?'Saldo C/E: '+(correct-wrong)+'. ':'')+'Treino didático, não equivale à nota oficial.';
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
  'Baseadas nos erros e acertos inseguros desta bateria. Erros com segurança merecem atenção especial.':
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
 session.answers.forEach((a,i)=>{const q=data.map.get(a.questionId);if(!q)return;const d=elem('details');d.className='qs-review';d.append(elem('summary',(i+1)+'. '+(q.subjectName||q.subjectId)+' · '+(a.result==='correct'?'acerto':a.result==='blank'?'em branco':'erro')),elem('p',q.statement),elem('p','Sua resposta: '+(a.answer==='C'?'Certo':a.answer==='E'?'Errado':'Em branco')+' · Gabarito: '+(q.correctAnswer==='C'?'Certo':'Errado')),elem('p',q.explanation));const link=theory(q);if(link)d.append(link);review.append(d);});
 status('Bateria concluída. Prioridades de leitura calculadas a partir desta sessão.');
}
function resume(){
 const key=localStorage.getItem(ACTIVE),s=storeRead().find(x=>x.id===key&&!x.finishedAt);
 if(!s||!s.ids.every(x=>data.map.has(x)))return;
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
 updateSuggestions();
 $('qs-sync').textContent='GitHub conectado. As respostas serão gravadas no banco privado.';
 for(const s of storeRead())for(const a of s.answers.filter(x=>!x.synced))await sync(a);
}
function theme(){const t=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=t;localStorage.setItem('tema-concursos',t);$('qs-theme').textContent=t==='light'?'modo escuro':'modo claro';}
function offerRecommendedBatch() {
 const params = new URLSearchParams(location.hash.slice(1));
 if (!params.has('questoes')) return;
 const exam = params.get('concurso');
 const ids = [...new Set(params.get('questoes').split(','))];
 if (exam==='dataprev-2026' || ids.length > 6 || !ids.every(id => {
  const q = data.map.get(id);
  return q?.concursoId === exam && q.format === 'CE' && !q.annulled;
 })) {
  status('A bateria recomendada está indisponível no catálogo atual.');
  return;
 }
 const repeat=params.get('repetir')==='1';
 const button = elem('button', repeat?'Refazer questão anterior':'Iniciar bateria recomendada (' + ids.length + ')');
 button.type = 'button';
 button.className = 'qs-button';
 button.addEventListener('click', () => {
  if (session && !session.finishedAt && !window.confirm('Começar a bateria recomendada e sair da bateria anterior?')) return;
  $('qs-concurso').value = exam;
  updateSubjects();
  button.remove();
  history.replaceState(null, '', location.pathname + location.search);
  start(ids,repeat?'aprendizagem':'simulado');
 });
 $('qs-status').after(button);
}
async function init(){
 $('qs-theme').textContent=document.documentElement.dataset.theme==='light'?'modo escuro':'modo claro';$('qs-theme').addEventListener('click',theme);
 $('qs-custom').addEventListener('change',availability);
 $('qs-concurso').addEventListener('change',()=>{updateSubjects();updateSuggestions();});$('qs-materia').addEventListener('change',updateUnits);$('qs-unidade').addEventListener('change',availability);$('qs-difficulty-filter').addEventListener('change',availability);
 const count=$('qs-count');
 const refreshPresets=()=>document.querySelectorAll('#qs-presets button').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.count)===Number(count.value))));
 count.addEventListener('input',refreshPresets);
 document.querySelectorAll('#qs-presets button').forEach(b=>b.addEventListener('click',()=>{count.value=b.dataset.count;refreshPresets();}));
 document.querySelectorAll('input[name="qs-scope"]').forEach(e=>e.addEventListener('change',availability));
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
  data.map=new Map(data.questions.map(q=>[q.id,q]));
  try{const m=await fetch('manifest.json').then(r=>r.ok?r.json():[]);manifest=new Map(m.filter(x=>x.articleId).map(x=>[x.articleId,x]));}catch{}
  const options=data.contests.filter(c=>c.id!=='dataprev-2026').map(c=>{
   const n=data.questions.filter(q=>q.concursoId===c.id).length;
   const option=elem('option',c.nome+' ('+n+')');option.value=c.id;return option;
  });
  $('qs-concurso').replaceChildren(...options);
  const saved=localStorage.getItem('concurso_ativo_id');
  $('qs-concurso').value=options.some(o=>o.value===saved)?saved:options.find(o=>o.value==='camara-2026')?.value||options[0]?.value||'';
  updateSubjects();updateSuggestions();toggle('qs-config',true);status('Banco carregado. Monte uma bateria.');
  resume();offerRecommendedBatch();auth();
 }catch(e){status('Não foi possível abrir o banco: '+e.message);}
}
init();
})();