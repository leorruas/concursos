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
 const s=current.summary||{};
 $('results-stats').replaceChildren(
  stat('Respondidas',s.valid??0),
  stat('Acertos',s.correct??0),
  stat('Erros',s.incorrect??0),
  stat('Taxa de acerto',s.accuracy===null?'Sem amostra':s.accuracy+'%'));
 const articles=(current.articles||[]).filter(a=>a.mistakes?.length||a.uncertainCorrect?.length);
 $('results-articles').replaceChildren(...(articles.length?articles.map(makeArticle):[el('p','results-caption','Ainda não há erros ou acertos inseguros associados a artigos neste concurso.')]));
 const cs=(current.concepts||[]).filter(c=>c.errors||c.uncertain).slice(0,30);
 $('results-concepts').replaceChildren(...(cs.length?cs.map(c=>{
  const box=el('div','results-concept');const left=el('div');
  left.append(el('strong','',c.title),el('small','',title(c.subjectId)+' · '+c.errors+' erro(s) em '+c.attempts+' tentativa(s) · '+c.uncertain+' insegura(s)'+(c.dueOn?' · Revisão: '+fmtDate(c.dueOn):'')));
  conceptLinks(left,c);
  box.append(left,priorityLabel(c.priority));return box;
 }):[el('p','results-caption','Sem recorrências registradas para priorizar.')]));
 $('results-subjects').replaceChildren(...(current.bySubject||[]).map(s=>{
  const row=el('tr');const answered=s.correct+s.incorrect;
  for(const x of [title(s.id),s.total,s.correct,s.incorrect,answered?Math.round(1000*s.correct/answered)/10+'%':'—'])row.append(el('td','',x));
  return row;
 }));
 status.textContent='Histórico até '+fmtDate(current.cut)+'. Classificação por amostra disponível, com atualização após consolidação das sessões.';
 root.hidden=false;
}

async function loadQuizResults(examId){
 const statusQuiz=$('results-quiz-status'),stats=$('results-quiz-stats'),subjects=$('results-quiz-subjects');
 if(!statusQuiz||!stats||!subjects)return;
 statusQuiz.textContent='Consultando tentativas da interface de questões…';
 stats.replaceChildren();subjects.replaceChildren();
 try{
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(!response.ok)throw Error('HTTP '+response.status);
  const result=await response.json();
  if(!result||result.version!==1||!Array.isArray(result.attempts))throw Error('Formato inesperado');
  if(select.value!==examId)return;
  const attempts=result.attempts.filter(a=>a&&a.concursoId===examId&&['correct','incorrect','blank'].includes(a.result));
  const correct=attempts.filter(a=>a.result==='correct').length;
  const wrong=attempts.filter(a=>a.result==='incorrect').length;
  const now=Date.now(),seven=7*86400000,thirty=30*86400000;
  const recent=ms=>attempts.filter(a=>Number.isFinite(Number(a.answeredAt))&&Number(a.answeredAt)<=now&&now-Number(a.answeredAt)<ms).length;
  const percentage=correct+wrong?Math.round(1000*correct/(correct+wrong))/10+'%':'Sem amostra';
  stats.replaceChildren(
   stat('Tentativas no site',attempts.length),
   stat('Últimos 7 dias',recent(seven)),
   stat('Últimos 30 dias',recent(thirty)),
   stat('Acerto entre respondidas',percentage)
  );
  const grouped=new Map();
  for(const a of attempts){
   const key=typeof a.subjectId==='string'&&a.subjectId?a.subjectId:'sem-materia';
   if(!grouped.has(key))grouped.set(key,{id:key,total:0,correct:0,incorrect:0});
   const item=grouped.get(key);item.total++;
   if(a.result==='correct')item.correct++;
   if(a.result==='incorrect')item.incorrect++;
  }
  const sorted=[...grouped.values()].sort((a,b)=>b.total-a.total||title(a.id).localeCompare(title(b.id),'pt-BR'));
  subjects.replaceChildren(...sorted.map(v=>{
   const tr=el('tr'),answered=v.correct+v.incorrect;
   for(const value of [title(v.id),v.total,v.correct,v.incorrect,answered?(100*v.correct/answered).toFixed(1)+'%':'Sem amostra'])tr.append(el('td','',value));
   return tr;
  }));
  statusQuiz.textContent=attempts.length
   ?'Tentativas autenticadas no site: até 5.000 registros recentes, separados do histórico consolidado no cofre. A mesma resposta não entra duas vezes neste painel.'
   :'Ainda não há respostas da interface de questões sincronizadas para este concurso.';
 }catch{
  if(select.value!==examId)return;
  statusQuiz.textContent='O histórico da interface de questões está indisponível no momento. Os resultados consolidados abaixo continuam independentes.';
 }
}
async function manifestLoad(){
 try{const r=await fetch('/manifest.json',{cache:'no-store'});if(!r.ok)throw Error('manifesto');const list=await r.json();if(Array.isArray(list))manifest=new Map(list.filter(a=>a.articleId).map(a=>[a.articleId,a]));}
 catch{manifest=new Map();}
}
async function load(){
 root.hidden=true;
 status.textContent='Carregando histórico privado…';
 try{
  const r=await fetch('/v1/study/results?concurso='+encodeURIComponent(select.value),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(r.status===401){
   status.textContent='Entre com sua conta GitHub para acessar seus resultados e a prioridade dos artigos.';
   $('results-login').hidden=false;
   $('results-logout').hidden=true;
   return;
  }
  if(!r.ok)throw Error('Histórico indisponível ('+r.status+').');
  const j=await r.json();
  if(!j||j.version!==1||j.concursoId!==select.value)throw Error('Resposta inesperada do serviço privado.');
  current=j;$('results-login').hidden=true;$('results-logout').hidden=false;render();
  void loadQuizResults(select.value);
 }catch(e){
  if(location.origin!==WORKER){
   $('results-login').hidden=false;
   status.textContent='O histórico fica em um serviço autenticado. Abra o painel privado e entre com GitHub.';
   $('results-login').href=WORKER+'/resultados.html';
  }else{status.textContent='Não foi possível consultar o histórico. '+e.message;}
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
select.addEventListener('change',load);
$('results-logout').addEventListener('click',async()=>{
 try{await fetch('/v1/logout',{method:'POST',credentials:'same-origin',headers:{Origin:location.origin}});}catch{}
 current=null;root.hidden=true;status.textContent='Sessão encerrada neste navegador.';$('results-login').hidden=false;$('results-logout').hidden=true;
});
void manifestLoad().then(load);
})();