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
 const score=el('span','results-score',article.priority+'/100');
 score.title='Prioridade de revisão: '+article.priority+' de 100. Quanto maior, mais cedo revisar; não representa nota ou taxa de acertos.';
 score.setAttribute('aria-label','Prioridade de revisão: '+article.priority+' de 100');
 row.append(a,score);top.append(row);outer.append(top);
 const explain=el('p','results-meta',article.reason+' · '+article.concepts.length+' conceito(s) relacionado(s)'+(article.dueOn?' · Revisão sugerida: '+fmtDate(article.dueOn):''));
 outer.append(explain);
 const link=el('a','results-link','Ler este artigo e consultar os erros nele');
 link.href=articleLink(article);link.rel='noreferrer';outer.append(link);
 if(article.mistakes.length){outer.append(el('p','results-meta','Questões respondidas incorretamente'));for(const q of article.mistakes)outer.append(renderQuestion(q,article));}
 if(article.uncertainCorrect.length){outer.append(el('p','results-meta','Acertos com insegurança declarada'));for(const q of article.uncertainCorrect)outer.append(renderQuestion(q,article));}
 return outer;
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
  const box=el('div','results-concept');
  const left=el('div');
  const articleIds=[...new Set(Array.isArray(c.articles)?c.articles:[])].filter(id=>/^art-[a-z0-9]+$/i.test(String(id)));
  if(articleIds.length){
   const mainLink=el('a','results-concept-link',c.title);
   mainLink.href=articleLink({articleId:articleIds[0]});
   mainLink.title='Ler artigo relacionado a '+c.title;
   left.append(mainLink);
  }else{
   left.append(el('strong','',c.title));
  }
  left.append(el('small','',title(c.subjectId)+' · '+c.errors+' erro(s) em '+c.attempts+' tentativa(s) · '+c.uncertain+' insegura(s)'+(c.dueOn?' · Revisão: '+fmtDate(c.dueOn):'')));
  if(articleIds.length){
   const refs=el('div','results-concept-refs');
   for(const id of articleIds.slice(0,4)){
    const meta=manifest.get(id);
    const name=meta?.tituloExibicao||meta?.titulo||'Artigo relacionado';
    const a=el('a','results-link','ler: '+name);
    a.href=articleLink({articleId:id});
    a.title='Abrir '+name;
    refs.append(a);
   }
   if(articleIds.length>4)refs.append(el('span','results-meta','e mais '+(articleIds.length-4)+' artigo(s) relacionado(s)'));
   left.append(refs);
  }else{
   left.append(el('small','','Artigo ainda não vinculado no histórico.'));
  }
  const score=el('span','results-score',c.priority+'/100');
  score.title='Prioridade de revisão: '+c.priority+' de 100. Quanto maior, mais cedo revisar; não é nota.';
  score.setAttribute('aria-label','Prioridade de revisão: '+c.priority+' de 100');
  box.append(left,score);
  return box;
 }):[el('p','results-caption','Sem recorrências registradas para priorizar.')]));
 $('results-subjects').replaceChildren(...(current.bySubject||[]).map(s=>{
  const row=el('tr');const answered=s.correct+s.incorrect;
  for(const x of [title(s.id),s.total,s.correct,s.incorrect,answered?Math.round(1000*s.correct/answered)/10+'%':'—'])row.append(el('td','',x));
  return row;
 }));
 status.textContent='Histórico até '+fmtDate(current.cut)+'. Classificação por amostra disponível, com atualização após consolidação das sessões.';
 root.hidden=false;
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
 }catch(e){
  if(location.origin!==WORKER){
   $('results-login').hidden=false;
   status.textContent='O histórico fica em um serviço autenticado. Abra o painel privado e entre com GitHub.';
   $('results-login').href=WORKER+'/resultados.html';
  }else{status.textContent='Não foi possível consultar o histórico. '+e.message;}
 }
}
select.addEventListener('change',load);
$('results-logout').addEventListener('click',async()=>{
 try{await fetch('/v1/logout',{method:'POST',credentials:'same-origin',headers:{Origin:location.origin}});}catch{}
 current=null;root.hidden=true;status.textContent='Sessão encerrada neste navegador.';$('results-login').hidden=false;$('results-logout').hidden=true;
});
const themeToggle=$('results-theme');
function syncThemeLabel(){
 if(!themeToggle)return;
 const dark=document.documentElement.getAttribute('data-theme')==='dark';
 themeToggle.textContent=dark?'modo claro':'modo escuro';
 themeToggle.setAttribute('aria-label','Ativar modo '+(dark?'claro':'escuro'));
}
themeToggle?.addEventListener('click',()=>{
 const currentTheme=document.documentElement.getAttribute('data-theme')||'dark';
 const next=currentTheme==='dark'?'light':'dark';
 document.documentElement.setAttribute('data-theme',next);
 try{localStorage.setItem('tema-concursos',next);}catch{}
 syncThemeLabel();
});
syncThemeLabel();
void manifestLoad().then(load);
})();