/* Painel pessoal. Respostas somente por API autenticada da mesma origem. */
(function(){
'use strict';
const $=id=>document.getElementById(id),root=$('results-content'),status=$('results-status');
const WORKER='https://concurso-estudo.leoruas.workers.dev';
const select=$('results-contest');
const DISPLAY={
 'portugues':'Língua Portuguesa','ingles':'Língua Inglesa','direito-administrativo':'Direito Administrativo',
 'administracao-publica':'Administração Pública','direito-constitucional':'Direito Constitucional',
 'informatica':'Tecnologia da Informação','comunicacao':'Comunicação Social','estado-democracia':'Ciência Política e Estado',
 'orcamento-publico':'Orçamento Público','etica-publica':'Ética e decoro parlamentar','redacao':'Redação'
};
let manifest=new Map(),current=null;
const el=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=String(text);return x;};
function fmtDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(s||'')))return 'data não registrada';const [y,m,d]=s.split('-');return d+'/'+m+'/'+y;}
function title(subject){return DISPLAY[subject]||subject||'Matéria sem classificação';}
function articleLink(article,section=''){
 const meta=manifest.get(article.articleId);
 const slug=meta?.articleSlug||article.articleId;
 const hash='#/artigo/'+encodeURIComponent(slug)+'?concurso='+encodeURIComponent(current?.concursoId||'camara-2026')+
   (section?'&secao='+encodeURIComponent(section):'');
 return WORKER+'/estudo/'+hash;
}
function renderQuestion(q,article){
 const details=el('details','results-question');
 const summary=el('summary','',q.result==='incorrect'?'Questão errada · '+fmtDate(q.date):'Acerto com insegurança · '+fmtDate(q.date));
 details.append(summary);
 if(q.topic||q.subtopic)details.append(el('p','results-meta',[q.topic,q.subtopic].filter(Boolean).join(' / ')));
 details.append(el('p','',q.statement||'Enunciado não disponível no registro histórico.'));
 details.append(el('p','','Sua resposta: '+(q.userAnswer??'não registrada')+' · Gabarito: '+(q.correctAnswer??'não registrado')));
 if(q.explanation)details.append(el('p','',q.explanation));
 if(q.section){
  const a=el('a','results-link','Ir ao trecho da teoria: '+q.section);
  a.href=articleLink(article,q.section);a.rel='noreferrer';
  details.append(a);
 }
 return details;
}
function makeArticle(article){
 const meta=manifest.get(article.articleId),name=meta?.tituloExibicao||meta?.titulo||article.articleId;
 const outer=el('details','results-card');
 if(new URLSearchParams(location.search).get('artigo')===article.articleId)outer.open=true;
 const top=el('summary');
 const row=el('span','results-card-top');
 const a=el('span','',name);
 const score=priorityLabel(article.priority);
 row.append(a,score);top.append(row);outer.append(top);
 const explain=el('p','results-meta',article.reason+' · '+article.concepts.length+' conceito(s) relacionado(s)'+(article.dueOn?' · Revisão sugerida: '+fmtDate(article.dueOn):''));
 outer.append(explain);
 const link=el('a','results-link','Ler este artigo e consultar os erros nele');
 link.href=articleLink(article);link.rel='noreferrer';outer.append(link);
 if(article.mistakes.length){outer.append(el('p','results-meta','Questões respondidas incorretamente'));for(const q of article.mistakes)outer.append(renderQuestion(q,article));}
 if(article.uncertainCorrect.length){outer.append(el('p','results-meta','Acertos com insegurança declarada'));for(const q of article.uncertainCorrect)outer.append(renderQuestion(q,article));}
 return outer;
}
function conceptLinks(container,concept){
 const articleIds=[...new Set(Array.isArray(concept.articles)?concept.articles:[])].filter(id=>manifest.has(id));
 const links=el('div','results-article-links');
 if(!articleIds.length){
  links.append(el('small','results-caption','Ainda sem artigo vinculado no catálogo.'));
 }else{
  links.append(el('small','results-caption','Ler no artigo:'));
  for(const id of articleIds.slice(0,4)){
   const meta=manifest.get(id);
   const link=el('a','results-link',meta?.tituloExibicao||meta?.titulo||'Artigo relacionado');
   link.href=articleLink({articleId:id});
   link.rel='noreferrer';
   links.append(link);
  }
  if(articleIds.length>4)links.append(el('small','results-caption','e mais '+(articleIds.length-4)+' artigo(s)'));
 }
 container.append(links);
}
function priorityLabel(score){
 const label=el('strong','results-score','prioridade '+score+'/100');
 label.title='Índice de prioridade de revisão: quanto maior, mais cedo vale revisar. Não é nota nem taxa de erros.';
 return label;
}
function stat(label,value){const box=el('div','results-stat');box.append(el('span','results-caption',label),el('strong','',value));return box;}
function render(){
 if(!current)return;
 const summary=current.summary||{},source=current.sources||{};
 const valid=summary.valid||0;
 $('results-stats').replaceChildren(
  stat('Questões respondidas',valid),
  stat('Acertos',summary.correct??0),
  stat('Erros',summary.incorrect??0),
  stat('Acerto observado',summary.accuracy===null?'Sem amostra':summary.accuracy+'%')
 );
 const origins=$('results-quiz-stats');
 const origin=(label,n)=>{const x=el('span','results-origin-item');x.append(el('strong','',n??0),' '+label);return x;};
 origins.replaceChildren(origin('no ChatGPT',source.chat?.total),origin('no site',source.site?.total));
 const removed=source.siteDuplicatesSkipped||0;
 if(removed)origins.append(origin('registro(s) já presentes no chat, sem duplicar',removed));
 $('results-quiz-status').textContent=source.unmatchedCatalog
   ?source.unmatchedCatalog+' questão(ões) do site sem vínculo editorial no catálogo atual: entram no desempenho, mas não na recomendação de artigo.'
   :'As fontes são lidas no momento do acesso. O histórico original permanece em seus respectivos sistemas.';
 const articles=(current.articles||[]).filter(x=>x.mistakes?.length||x.uncertainCorrect?.length);
 $('results-articles').replaceChildren(...(articles.length?articles.map(makeArticle):[el('p','results-caption','Ainda não há erros ou acertos inseguros vinculados a artigos.')]));
 const priority=$('results-quiz-priorities');
 priority.replaceChildren(...(articles.length?articles.slice(0,8).map((article,i)=>{
  const box=el('article','results-quiz-priority'),number=el('span','results-order',String(i+1).padStart(2,'0'));
  const copy=el('div'),meta=manifest.get(article.articleId);
  copy.append(el('strong','',meta?.tituloExibicao||meta?.titulo||'Artigo vinculado'),el('small','',article.reason||'Revisão recomendada'));
  const first=article.mistakes?.[0]||article.uncertainCorrect?.[0];
  if(first?.section)copy.append(el('small','','Trecho: '+first.section));
  const link=el('a','','Abrir artigo');
  link.href=articleLink(article,first?.section||'');link.rel='noreferrer';
  box.append(number,copy,link);return box;
 }):[el('p','results-caption','Ainda não há recomendações baseadas em erros ou insegurança neste concurso.')]));
 $('results-quiz-priority-description').textContent=
  'Uma única ordem de leitura calculada com as questões do chat e do site. A prioridade é relativa e depende da amostra registrada.';
 const difficultyRoot=$('results-difficulty');
 const levelNames={facil:'Fácil',media:'Média',dificil:'Difícil','muito-dificil':'Muito difícil','nao-classificada':'Sem classificação'};
 const levels=current.difficulty?.byLevel||[];
 const order=['facil','media','dificil','muito-dificil','nao-classificada'];
 difficultyRoot.replaceChildren(...order.map(k=>levels.find(x=>x.id===k)).filter(Boolean).map(x=>{
  const row=el('div','results-difficulty-row'),copy=el('div');
  copy.append(el('strong','',levelNames[x.id]||x.id),el('small','',x.total+' tentativa(s) · '+x.correct+' acerto(s), '+x.incorrect+' erro(s)'+(x.uncertain?' · '+x.uncertain+' insegura(s)':'')));
  const bar=el('div','results-difficulty-bar'),fill=el('span');
  bar.setAttribute('role','img');bar.setAttribute('aria-label','Acerto observado '+(x.accuracy===null?'sem amostra':x.accuracy+'%'));
  fill.style.width=x.accuracy===null?'0%':Math.max(0,Math.min(100,x.accuracy))+'%';bar.append(fill);
  const value=el('div','results-difficulty-value',x.accuracy===null?'Sem amostra':x.accuracy+'%');
  value.append(el('small','',x.total<10?'Amostra pequena':'Acerto observado'));
  row.append(copy,bar,value);return row;
 }));
 if(!levels.length)difficultyRoot.append(el('p','results-caption','Ainda não existem tentativas classificadas para este concurso.'));
 const cs=(current.concepts||[]).filter(c=>c.errors||c.uncertain).slice(0,30);
 $('results-concepts').replaceChildren(...(cs.length?cs.map(c=>{
  const box=el('div','results-concept'),left=el('div');
  left.append(el('strong','',c.title),el('small','',title(c.subjectId)+' · '+c.errors+' erro(s) em '+c.attempts+' tentativa(s) · '+c.uncertain+' insegura(s)'+(c.dueOn?' · Revisão: '+fmtDate(c.dueOn):'')));
  conceptLinks(left,c);box.append(left,priorityLabel(c.priority));return box;
 }):[el('p','results-caption','Sem recorrências registradas para priorizar.')]));
 const difficultyBySubject=new Map((current.difficulty?.bySubject||[]).map(x=>[x.id,x]));
 $('results-subjects').replaceChildren(...(current.bySubject||[]).map(sub=>{
  const row=el('tr'),judged=sub.correct+sub.incorrect;
  const conf=difficultyBySubject.get(sub.id)?.uncertain||0;
  for(const x of [title(sub.id),sub.total,sub.correct,sub.incorrect,conf,judged?Math.round(1000*sub.correct/judged)/10+'%':'Sem amostra'])row.append(el('td','',x));
  return row;
 }));
 $('results-unified-method').textContent='Histórico até '+fmtDate(current.cut)+'. '+valid+' tentativas válidas de estudo, sem somar duas vezes um registro identificado nas duas fontes.';
 $('results-legacy').hidden=false;
 root.hidden=false;
 status.textContent='Histórico unificado carregado. Resultados e prioridades combinam as duas origens.';
}

/* Recomendações de leitura das baterias do site, calculadas somente após autenticação. */
let quizBank=null,loadVersion=0;
async function quizQuestions(){
 if(quizBank)return quizBank;
 const r=await fetch('/data/questoes-publicas.json',{cache:'no-store'});
 if(!r.ok)throw Error('Banco de questões indisponível');
 const x=await r.json();
 if(x.version!==1||!Array.isArray(x.questions))throw Error('Catálogo incompatível');
 quizBank=new Map(x.questions.map(q=>[q.id,q]));
 return quizBank;
}
function quizPriorityGroups(attempts,questionMap,examId,cutoff){
 const groups=new Map();
 for(const a of attempts){
  if(a.concursoId!==examId||(cutoff&&Number(a.answeredAt)<cutoff))continue;
  const q=questionMap.get(a.questionId);
  if(!q?.articleId||q.concursoId!==examId)continue;
  const error=a.result==='incorrect',unsure=a.result==='correct'&&a.confidence==='insecure',blank=a.result==='blank';
  if(!error&&!unsure&&!blank)continue;
  const weight=error?(a.confidence==='secure'?8:6):unsure?2:1;
  const g=groups.get(q.articleId)||{articleId:q.articleId,score:0,errors:0,secureErrors:0,uncertainCorrect:0,blanks:0,sections:new Map()};
  g.score+=weight;
  if(error){g.errors++;if(a.confidence==='secure')g.secureErrors++;}
  if(unsure)g.uncertainCorrect++;
  if(blank)g.blanks++;
  const section=q.section||'';
  g.sections.set(section,(g.sections.get(section)||0)+weight);
  groups.set(q.articleId,g);
 }
 return [...groups.values()].map(g=>({...g,section:[...g.sections].sort((a,b)=>b[1]-a[1])[0]?.[0]||''}))
  .sort((a,b)=>b.score-a.score||b.secureErrors-a.secureErrors||b.errors-a.errors||a.articleId.localeCompare(b.articleId));
}
function quizPriorityReason(g){
 const p=[];
 if(g.errors)p.push(g.errors+' erro'+(g.errors===1?'':'s')+(g.secureErrors?' ('+g.secureErrors+' com segurança declarada)':''));
 if(g.uncertainCorrect)p.push(g.uncertainCorrect+' acerto'+(g.uncertainCorrect===1?'':'s')+' inseguro'+(g.uncertainCorrect===1?'':'s'));
 if(g.blanks)p.push(g.blanks+' em branco');
 return p.join(' · ');
}
function quizArticleLink(articleId,section,examId){
 const m=manifest.get(articleId);
 return WORKER+'/estudo/#/artigo/'+encodeURIComponent(m?.articleSlug||articleId)+
  '?concurso='+encodeURIComponent(examId)+(section?'&secao='+encodeURIComponent(section):'');
}
function showQuizPriorities(attempts,questionMap,examId,now){
 const root=$('results-quiz-priorities');
 if(!root)return;
 const sorted=quizPriorityGroups(attempts,questionMap,examId,now-30*86400000).slice(0,7);
 root.replaceChildren();
 $('results-quiz-priority-description').textContent=sorted.length
  ?'Ordem sugerida pelos erros e acertos inseguros dos últimos 30 dias. A lista indica onde revisar, não mede retenção.'
  :'Sem erros, acertos inseguros ou respostas em branco registrados nos últimos 30 dias.';
 sorted.forEach((g,i)=>{
  const article=el('article','results-quiz-priority'),left=el('div');
  const tag=el('span','results-section-label',String(i+1).padStart(2,'0')+' · '+(g.errors?'revisar primeiro':'reforçar'));
  const name=el('strong','',manifest.get(g.articleId)?.tituloExibicao||manifest.get(g.articleId)?.titulo||'Artigo vinculado');
  const reason=el('small','',quizPriorityReason(g));
  left.append(tag,name,reason);
  if(g.section)left.append(el('small','','Trecho: '+g.section));
  const link=el('a','','Ler trecho');
  link.href=quizArticleLink(g.articleId,g.section,examId);link.rel='noreferrer';
  article.append(left,link);root.append(article);
 });
}
async function loadQuizResults(examId,version){
 const statusQuiz=$('results-quiz-status'),stats=$('results-quiz-stats'),subjects=$('results-quiz-subjects');
 const periods=$('results-quiz-periods'),priorities=$('results-quiz-priorities');
 statusQuiz.textContent='Consultando respostas do site…';
 stats.replaceChildren();subjects.replaceChildren();periods.replaceChildren();priorities.replaceChildren();
 try{
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(version!==loadVersion)return {authenticated:false,stale:true};
  if(response.status===401){
   statusQuiz.textContent='Entre com sua conta GitHub para consultar as baterias.';
   return {authenticated:false};
  }
  if(!response.ok)throw Error('HTTP '+response.status);
  const payload=await response.json();
  if(payload?.version!==1||!Array.isArray(payload.attempts))throw Error('Resposta de questões inválida');
  if(version!==loadVersion)return {authenticated:false,stale:true};
  const attempts=payload.attempts.filter(a=>a?.concursoId===examId&&['correct','incorrect','blank'].includes(a.result));
  const now=Date.now(),lastSession=attempts.length?[...attempts].sort((a,b)=>b.answeredAt-a.answeredAt)[0].sessionId:null;
  const last=attempts.filter(a=>a.sessionId===lastSession);
  const lastCorrect=last.filter(a=>a.result==='correct').length;
  const lastWrong=last.filter(a=>a.result==='incorrect').length;
  const lastUnsure=last.filter(a=>a.result==='correct'&&a.confidence==='insecure').length;
  const rate=rows=>{const judged=rows.filter(a=>a.result!=='blank');return judged.length?(100*judged.filter(a=>a.result==='correct').length/judged.length).toFixed(0)+'%':'sem amostra';};
  const recent=days=>attempts.filter(a=>a.answeredAt<=now&&a.answeredAt>=now-days*86400000);
  stats.replaceChildren(
   stat('Última bateria',last.length?lastCorrect+'/'+last.length:'Sem respostas'),
   stat('Acerto na última',rate(last)),
   stat('Erros na última',lastWrong),
   stat('Acertos inseguros',lastUnsure)
  );
  periods.replaceChildren(
   el('span','','Últimos 7 dias: '+recent(7).length+' tentativas · '+rate(recent(7))),
   el('span','','Últimos 30 dias: '+recent(30).length+' tentativas · '+rate(recent(30))),
   el('span','','Histórico no site: '+attempts.length+' tentativas')
  );
  const grouped=new Map();
  for(const a of attempts){
   const key=typeof a.subjectId==='string'&&a.subjectId?a.subjectId:'sem-materia';
   if(!grouped.has(key))grouped.set(key,{id:key,total:0,correct:0,incorrect:0});
   const item=grouped.get(key);item.total++;
   if(a.result==='correct')item.correct++;
   if(a.result==='incorrect')item.incorrect++;
  }
  subjects.replaceChildren(...[...grouped.values()].sort((a,b)=>b.total-a.total||title(a.id).localeCompare(title(b.id),'pt-BR')).map(v=>{
   const tr=el('tr'),judged=v.correct+v.incorrect;
   for(const x of [title(v.id),v.total,v.correct,v.incorrect,judged?(100*v.correct/judged).toFixed(1)+'%':'Sem amostra'])tr.append(el('td','',x));
   return tr;
  }));
  try{showQuizPriorities(attempts,await quizQuestions(),examId,now);}
  catch{$('results-quiz-priority-description').textContent='Seus resultados foram recuperados, mas os vínculos com os artigos estão temporariamente indisponíveis.';}
  statusQuiz.textContent=attempts.length
   ?'Respostas sincronizadas no banco privado. As prioridades abaixo já incluem suas tentativas do site.'
   :'Ainda não há questões sincronizadas para este concurso.';
  return {authenticated:true};
 }catch(e){
  if(version!==loadVersion)return {authenticated:false,stale:true};
  statusQuiz.textContent='Histórico das baterias indisponível ('+e.message+'). As respostas já salvas não são apagadas.';
  return {authenticated:false};
 }
}
async function manifestLoad(){
 try{const r=await fetch('/manifest.json',{cache:'no-store'});if(!r.ok)throw Error('manifesto');const list=await r.json();if(Array.isArray(list))manifest=new Map(list.filter(a=>a.articleId).map(a=>[a.articleId,a]));}
 catch{manifest=new Map();}
}
async function load(){
 const examId=select.value,version=++loadVersion;
 current=null;root.hidden=true;
 $('results-login').hidden=true;
 $('results-logout').hidden=true;
 status.textContent='Consultando histórico do chat e do site…';
 try{
  const res=await fetch('/v1/study/unified?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(version!==loadVersion)return;
  if(res.status===401){
   $('results-login').hidden=false;
   $('results-login').href=WORKER+'/v1/login/github?return=%2Fresultados.html';
   status.textContent='Entre com GitHub para consultar seu histórico unificado.';
   return;
  }
  if(!res.ok)throw Error('As fontes não puderam ser reunidas (HTTP '+res.status+').');
  const data=await res.json();
  if(data?.version!==2||data.concursoId!==examId||!data.sources)throw Error('Contrato de diagnóstico desatualizado.');
  if(version!==loadVersion)return;
  current=data;
  $('results-logout').hidden=false;
  render();
 }catch(e){
  if(version!==loadVersion)return;
  status.textContent=location.origin===WORKER
   ?'Não foi possível carregar o histórico unificado: '+e.message+' As respostas originais continuam preservadas.'
   :'O diagnóstico privado fica disponível após login no ambiente de estudos.';
  if(location.origin!==WORKER){$('results-login').hidden=false;$('results-login').href=WORKER+'/resultados.html?concurso='+encodeURIComponent(examId);}
 }
}
const themeButton=$('results-theme');
function setResultsTheme(theme){
 document.documentElement.setAttribute('data-theme',theme);
 themeButton.textContent=theme==='light'?'modo escuro':'modo claro';
 try{localStorage.setItem('tema-concursos',theme);}catch{}
}
themeButton.addEventListener('click',()=>{
 setResultsTheme(document.documentElement.getAttribute('data-theme')==='light'?'dark':'light');
});
themeButton.textContent=document.documentElement.getAttribute('data-theme')==='light'?'modo escuro':'modo claro';
const requestedContest=new URLSearchParams(location.search).get('concurso');
if([...select.options].some(x=>x.value===requestedContest))select.value=requestedContest;
select.addEventListener('change',load);
$('results-logout').addEventListener('click',async()=>{
 try{await fetch('/v1/logout',{method:'POST',credentials:'same-origin',headers:{Origin:location.origin}});}catch{}
 current=null;root.hidden=true;status.textContent='Sessão encerrada neste navegador.';$('results-login').hidden=false;$('results-logout').hidden=true;
});
void manifestLoad().then(load);
})();