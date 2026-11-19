/* Navegação por visões do painel. Não altera nem replica dados pessoais. */
(function(){
 'use strict';
 const views=[
  {id:'resumo',label:'Resumo',selectors:['#results-adaptive','#results-legacy','#results-retention']},
  {id:'revisoes',label:'Revisões',selectors:['#results-adaptive-queue','[aria-labelledby="results-retests-title"]','[aria-labelledby="results-quiz-priority-title"]','[aria-labelledby="title-concepts"]']},
  {id:'materias',label:'Matérias',selectors:['[aria-labelledby="title-subjects"]','[aria-labelledby="results-edital-coverage-title"]','[aria-labelledby="results-difficulty-heading"]','[aria-labelledby="results-coverage-title"]']},
  {id:'historico',label:'Histórico',selectors:['#results-principle-history','[aria-labelledby="results-concept-transfer-title"]']}
 ];
 const root=document.getElementById('results-content');
 if(!root)return;
 // Na origem autenticada cada area tem endereco proprio e carregamento completo.
 // No GitHub Pages preservamos o fallback de navegacao por parametro.
 const onWorker=location.origin==='https://concurso-estudo.leoruas.workers.dev';
 const paths={
  resumo:'/resultados-resumo.html',revisoes:'/resultados-revisoes.html',
  materias:'/resultados-materias.html',historico:'/resultados-historico.html'
 };
 const adaptiveQueue=document.createElement('section');
 adaptiveQueue.id='results-adaptive-queue';
 adaptiveQueue.className='results-section';
 adaptiveQueue.hidden=true;
 adaptiveQueue.setAttribute('aria-labelledby','results-adaptive-queue-title');
 const queueTitle=document.createElement('h2');
 queueTitle.id='results-adaptive-queue-title';
 queueTitle.textContent='Atividades de revisão';
 const queueItems=document.createElement('div');
 queueItems.id='results-adaptive-queue-items';
 adaptiveQueue.append(queueTitle,queueItems);
 root.append(adaptiveQueue);
 const style=document.createElement('style');
 style.textContent=`
 /* Navegacao lateral: cada visao e uma pagina, nao uma pilha de accordions. */
 .results-layout{max-width:1180px}
 .results-title{font-size:clamp(2.6rem,5vw,4.2rem);margin-bottom:12px}
 .results-explain{margin-bottom:26px}
 .results-controls{margin-bottom:22px}
 #results-content:not([hidden]){display:grid;grid-template-columns:200px minmax(0,1fr);column-gap:54px;align-items:start}
 .results-views-nav{position:sticky;top:24px;grid-column:1;grid-row:1;display:flex;flex-direction:column;gap:3px;border:0;margin:0;padding:0}
 .results-views-nav a{display:block;padding:14px 16px;border:0;border-left:2px solid transparent;border-radius:0;text-decoration:none;color:var(--muted);font-size:15px;line-height:1.3}
 .results-views-nav a:hover{background:var(--accent-blue-alpha-05);color:var(--text)}
 .results-views-nav a[aria-current="page"]{color:var(--text);border-left-color:var(--accent-blue);font-weight:650;background:var(--accent-blue-alpha-05)}
 .results-views-nav a:focus-visible{outline:2px solid var(--accent-blue);outline-offset:2px}
 .results-view-panel{grid-column:2;grid-row:1;min-width:0}
 .results-view-panel[hidden]{display:none!important}
 .results-page-heading{margin-bottom:34px;padding-bottom:24px;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
 .results-page-heading h2{font-size:clamp(1.7rem,3vw,2.5rem);font-weight:600;letter-spacing:-.045em;line-height:1.12;margin:0 0 9px;color:var(--text)}
 .results-page-heading p{margin:0;max-width:56ch;line-height:1.5;font-size:14px;color:var(--muted)}
 .results-view-panel>.results-section{margin-bottom:44px}
 .results-view-panel .results-section>h2{font-size:clamp(1.3rem,2.5vw,1.9rem);margin:0 0 15px;text-transform:none;letter-spacing:-.035em}
 .results-view-panel .results-section-label{display:none}
 .results-view-panel .results-section>.results-caption{max-width:65ch;font-size:13px;margin-bottom:18px}
 .results-view-panel .results-grid{margin:15px 0 28px;grid-template-columns:repeat(2,minmax(0,1fr))}
 .results-view-panel .results-origin-grid{margin-top:12px}
 .results-view-panel #results-adaptive-actions ul,.results-view-panel #results-adaptive-queue-items ul{list-style:none;padding:0;margin:0}
 .results-view-panel #results-adaptive-actions li,.results-view-panel #results-adaptive-queue-items li{list-style:none;padding:20px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
 .results-view-panel #results-adaptive-actions li:first-child,.results-view-panel #results-adaptive-queue-items li:first-child{border-top:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
 .results-view-panel #results-adaptive-actions h3,.results-view-panel #results-adaptive-queue-items h3{font-size:19px;line-height:1.35;letter-spacing:-.025em;font-weight:630;margin:0 0 7px;color:var(--text)}
 .results-view-panel #results-adaptive-actions li>a,.results-view-panel #results-adaptive-queue-items li>a{display:inline-block;margin-top:8px;color:var(--accent-blue);font-size:14px;text-decoration:underline;text-underline-offset:3px}
 .results-view-panel #results-adaptive-actions li>p,.results-view-panel #results-adaptive-queue-items li>p{margin:7px 0;font-size:13px;line-height:1.55}
 .results-view-panel .results-card{padding:16px 0;border-color:color-mix(in srgb,var(--text) 19%,transparent)}
 #results-content>.results-privacy{grid-column:2;grid-row:2;margin-top:32px}
 @media(max-width:760px){
  #results-content:not([hidden]){display:block}
  .results-views-nav{position:static;display:flex;flex-direction:row;gap:0;overflow-x:auto;margin:0 0 28px;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
  .results-views-nav a{white-space:nowrap;padding:12px 14px;border-left:0;border-bottom:2px solid transparent;font-size:14px}
  .results-views-nav a[aria-current="page"]{border-left:0;border-bottom-color:var(--accent-blue)}
  .results-view-panel .results-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .results-layout{padding:20px 18px 64px}
  .results-title{font-size:clamp(2.3rem,8vw,3.2rem)}
  .results-view-panel>.results-section{margin-bottom:32px}
 }
 @media(max-width:760px){
  .study-topbar__links{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:7px;padding-bottom:7px;scrollbar-width:thin}
  .study-topbar__links>a,.study-topbar__links>button{flex:0 0 auto}
  .results-kicker,.results-explain{display:none}
  .results-title{font-size:clamp(2rem,7vw,2.5rem);margin:16px 0 14px}
  .results-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:16px;row-gap:8px;padding:14px 0;margin-bottom:12px}
  .results-controls label[for="results-contest"]{grid-column:1;grid-row:1}
  .results-controls #results-contest{grid-column:1;grid-row:2;min-width:0;width:100%}
  .results-controls label[for="results-subject-filter"]{grid-column:2;grid-row:1}
  .results-controls #results-subject-filter{grid-column:2;grid-row:2;min-width:0;width:100%}
  .results-controls #results-login,.results-controls #results-logout{grid-column:1/-1;justify-self:start;margin-top:5px}
  .results-status{font-size:12px;margin:0 0 14px}
  .results-page-heading{margin-bottom:20px;padding-bottom:16px}
  .results-page-heading h2{font-size:1.55rem}
  .results-page-heading p{font-size:13px}
  .results-view-panel #results-adaptive-actions li,.results-view-panel #results-adaptive-queue-items li{padding:16px 0}
 }
 @media(max-width:390px){.results-view-panel .results-grid{grid-template-columns:1fr 1fr}.results-view-panel .results-stat strong{font-size:26px}}
 `;
 document.head.append(style);
 const nav=document.createElement('nav');
 nav.className='results-views-nav';nav.setAttribute('aria-label','Páginas dos resultados');
 const panels=new Map(), links=new Map();
 const descriptions={
  resumo:['Visão geral','O que vale fazer agora e como seus estudos estão avançando.'],
  revisoes:['Revisões','Atividades pendentes, retestes e materiais para praticar.'],
  materias:['Desempenho por matéria','Resultados e cobertura dos assuntos previstos no edital.'],
  historico:['Histórico de aprendizagem','Evidências de revisão e evolução dos conceitos.']
 };
 for(const view of views){
  const a=document.createElement('a');a.textContent=view.label;
  const href=new URL(location.href);
  if(onWorker){href.pathname=paths[view.id];href.searchParams.delete('visao');}
  else href.searchParams.set('visao',view.id);
  a.href=href.pathname+href.search+href.hash;
  nav.append(a);links.set(view.id,a);
  const panel=document.createElement('div');panel.className='results-view-panel';panel.id='results-view-'+view.id;
  panel.setAttribute('role','region');panel.setAttribute('aria-label',view.label);
  const heading=document.createElement('header');heading.className='results-page-heading';
  const h=document.createElement('h2');h.textContent=descriptions[view.id][0];
  const intro=document.createElement('p');intro.textContent=descriptions[view.id][1];
  heading.append(h,intro);panel.append(heading);
  for(const selector of view.selectors){
   const section=root.querySelector(selector);
   if(section)panel.append(section);
  }
  panels.set(view.id,panel);
 }
 // Os blocos estão agora em regiões próprias, sem a longa seção de detalhes antiga.
 root.querySelectorAll('details.results-revision-details').forEach(details=>{
  if(details.parentElement===root && details.querySelector('summary')?.textContent.trim()==='Histórico e diagnóstico detalhado')details.remove();
 });
 root.prepend(nav,...panels.values());
 // Indicadores analiticos e origem das respostas pertencem as paginas de detalhe.
 function moveDetail(id,view,titleText){
  const node=document.getElementById(id);
  if(!node)return;
  const section=document.createElement('section');
  section.className='results-section';
  if(titleText){
   const title=document.createElement('h2');title.textContent=titleText;
   section.append(title);
  }
  section.append(node);
  panels.get(view).append(section);
 }
 moveDetail('results-detailed-stats','materias','Outros indicadores');
 moveDetail('results-study-modes','materias',null);
 moveDetail('results-competitive-simulations','materias',null);
 moveDetail('results-quiz-stats','historico','Origem dos registros');
 const sourceStatus=document.getElementById('results-quiz-status');
 if(sourceStatus)document.getElementById('results-quiz-stats')?.parentElement?.append(sourceStatus);
 moveDetail('results-articles','historico','Questões e explicações por artigo');
 // Fila antiga segue no DOM para compatibilidade, mas nao duplica o motor adaptativo.
 const legacyShell=root.querySelector('.results-history-content');
 if(legacyShell)legacyShell.hidden=true;
 // O bloco discursivo estava dentro do Resumo quando o painel foi destacado do DOM.
 // Move-lo depois de anexar as visoes evita que querySelector perca o descendente.
 const practice=document.getElementById('results-discursive');
 if(practice)panels.get('revisoes').append(practice);
 const privacy=root.querySelector('.results-privacy');
 if(privacy)panels.get('historico').append(privacy);
 function current(){
  if(onWorker){
   const page=Object.keys(paths).find(id=>paths[id]===location.pathname);
   if(page)return page;
  }
  const p=new URLSearchParams(location.search).get('visao');
  return panels.has(p)?p:'resumo';
 }
 function show(){
  const id=current();
  document.title=descriptions[id][0]+' · Meus resultados · concursos';
  for(const [key,panel] of panels){
   panel.hidden=key!==id;
   const a=links.get(key);
   if(key===id)a.setAttribute('aria-current','page');
   else a.removeAttribute('aria-current');
  }
 }
 nav.addEventListener('click',event=>{
  const link=event.target.closest('a');if(!link||!nav.contains(link))return;
  if(onWorker)return; // Nao interceptar: cada pagina autenticada e carregada por sua URL.
  event.preventDefault();
  const url=new URL(link.href);
  history.pushState({resultsView:true},'',url);show();
 });
 addEventListener('popstate',show);show();
})();
