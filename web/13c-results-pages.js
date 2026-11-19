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
 /* Barra e conteudo usam as mesmas bordas e largura do projeto. */
 .results-layout>.study-topbar{max-width:none;width:100%;margin:0 0 28px;padding:14px 0 17px;box-sizing:border-box}
 .results-view-panel #results-edital-coverage{margin-top:14px}
 .results-coverage-overview{font-size:15px;font-weight:650;color:var(--text);margin:0 0 7px}
 .results-edital-unit{margin:20px 0 28px}
 .results-edital-unit-heading{display:flex;justify-content:space-between;gap:14px;align-items:baseline;padding:12px 0 10px;border-bottom:1px solid color-mix(in srgb,var(--text) 32%,transparent)}
 .results-edital-unit-heading h3{color:var(--text);font-size:16px;line-height:1.4;font-weight:620;margin:0;letter-spacing:-.01em}
 .results-edital-unit-total{font-size:12px;color:var(--muted);white-space:nowrap}
 .results-edital-unit-description{font-size:12px;color:var(--muted);margin:9px 0 4px;line-height:1.5}
 .results-edital-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(145px,auto);align-items:start;gap:15px;padding:11px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 12%,transparent)}
 .results-edital-ref{font-size:13px;color:var(--text);line-height:1.45;overflow-wrap:anywhere}
 .results-edital-state{font-size:12px;color:var(--muted);line-height:1.45;text-align:right}
 .results-edital-state.has-results{color:var(--accent-blue)}
 .results-subjects-list{border-top:1px solid color-mix(in srgb,var(--text) 32%,transparent)}
 .results-subject-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(185px,auto);gap:16px;padding:15px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 15%,transparent);align-items:start}
 .results-subject-name{display:block;color:var(--text);font-weight:620;font-size:15px;line-height:1.4}
 .results-subject-detail{display:block;color:var(--muted);font-size:12px;line-height:1.5;margin-top:5px}
 .results-subject-figures{display:flex;flex-direction:column;align-items:flex-end;gap:3px;text-align:right;font-variant-numeric:tabular-nums}
 .results-subject-total{color:var(--muted);font-size:12px}
 .results-subject-percentage{color:var(--text);font-size:15px;font-weight:620}
 .results-subject-recommendations{color:var(--muted);font-size:11px;line-height:1.4}
  .results-modes-heading{margin:0 0 14px}
 .results-modes-heading h2{font-size:22px!important;letter-spacing:-.025em!important;text-transform:none!important;font-weight:620!important;margin:0 0 7px!important}
 .results-modes-list{border-top:1px solid color-mix(in srgb,var(--text) 32%,transparent)}
 .results-mode-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(190px,auto);gap:12px;align-items:baseline;padding:12px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 15%,transparent)}
 .results-mode-name strong{color:var(--text);font-size:14px;font-weight:570}
 .results-mode-measures{text-align:right;display:flex;flex-direction:column;gap:4px}
 .results-mode-total{font-size:14px;color:var(--text);font-weight:650;font-variant-numeric:tabular-nums}
 .results-mode-breakdown{font-size:12px;color:var(--muted)}
 /* Decisao de estudo em linhas, com uma acao nitida e textos subordinados. */
 .results-view-panel #results-adaptive-actions li{padding:16px 0!important}
 .results-view-panel #results-adaptive-actions h3{font-size:16px;line-height:1.3;font-weight:620;margin:0 0 6px}
 .results-view-panel #results-adaptive-actions li>p{font-size:12px;line-height:1.5;margin:5px 0}
 .results-view-panel .results-study-action-row{display:grid;grid-template-columns:minmax(0,1fr) max-content;gap:22px;align-items:center;padding:17px 0!important}
 .results-view-panel .results-study-action-copy{min-width:0}
 .results-view-panel .results-study-action-copy h3{font-size:16px;line-height:1.3;margin:0 0 5px;font-weight:620;letter-spacing:-.02em;color:var(--text)}
 .results-view-panel .results-study-action-copy p{margin:5px 0;color:var(--muted);font-size:12px;line-height:1.5}
 .results-study-action-available{display:block;font:10px 'IBM Plex Mono',monospace;color:var(--accent-blue);margin-bottom:8px;text-transform:uppercase;letter-spacing:.04em}
 .results-study-action-controls{display:flex;flex-direction:column;align-items:flex-end;gap:7px;max-width:210px}
 .results-study-action-controls:empty{display:none}
 .results-study-action-controls>a{font-size:12px;text-align:right;line-height:1.3;color:var(--accent-blue);font-weight:600;text-decoration:none}
 .results-study-action-controls>a:hover{text-decoration:underline;text-underline-offset:3px}
 .results-study-action-controls>a:focus-visible{outline:2px solid var(--accent-blue);outline-offset:3px}
 .results-study-action-controls>a.results-study-action-primary{border:1px solid var(--accent-blue-alpha-40);background:var(--accent-blue-alpha-05);border-radius:5px;padding:10px 12px}
 .results-study-action-controls>a.results-study-action-primary:hover{background:var(--accent-blue-alpha-15);text-decoration:none}

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
 .results-page-heading{max-width:none;margin:0 0 34px;padding:0 0 24px;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
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
 .results-view-panel #results-adaptive-actions>a.results-link{display:inline-block;margin-top:18px;font-size:14px;text-underline-offset:3px}
 .results-view-panel .results-card{padding:16px 0;border-color:color-mix(in srgb,var(--text) 19%,transparent)}
 .results-revisions-overview{margin:0 0 24px!important;padding:15px 0 18px;border-bottom:1px solid color-mix(in srgb,var(--text) 22%,transparent)}
 .results-revisions-overview>p{font-size:12px;color:var(--muted);margin:0 0 12px}
 .results-revisions-numbers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
 .results-revisions-numbers>a{display:flex;flex-direction:column;gap:5px;text-decoration:none;padding:11px 0;border-top:2px solid color-mix(in srgb,var(--text) 22%,transparent);min-width:0}
 .results-revisions-numbers>a:hover,.results-revisions-numbers>a:focus-visible{border-top-color:var(--accent-blue)}
 .results-revisions-numbers strong{font-size:clamp(21px,3vw,30px);font-weight:620;line-height:1;color:var(--text);font-variant-numeric:tabular-nums}
 .results-revisions-numbers span{color:var(--muted);font-size:12px}
 #results-content>.results-privacy{grid-column:2;grid-row:2;margin-top:32px}
 @media(max-width:760px){
  .results-layout>.study-topbar{margin-bottom:18px;padding:9px 0 12px}
  .results-edital-row{grid-template-columns:minmax(0,1fr) 118px;gap:10px}
  .results-edital-state{font-size:11px}
  .results-edital-unit-heading{align-items:flex-start}
  .results-edital-unit-total{white-space:normal;text-align:right;min-width:92px}
  .results-mode-row{grid-template-columns:minmax(0,1fr) minmax(140px,auto)}
  .results-subject-row{grid-template-columns:minmax(0,1fr) minmax(110px,auto);gap:10px}
  .results-subject-percentage{font-size:14px}
  .results-subject-recommendations{font-size:11px}
  .results-view-panel .results-study-action-row{grid-template-columns:minmax(0,1fr);gap:10px}
  .results-study-action-controls{align-items:flex-start;max-width:none}
  .results-study-action-controls>a{text-align:left}
 }
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
 const revisionsPanel=panels.get('revisoes');
 const overview=document.createElement('section');
 overview.className='results-revisions-overview';overview.id='results-revisions-overview';
 const overviewCaption=document.createElement('p');overviewCaption.id='results-review-contest-name';
 overviewCaption.textContent='Revisões do concurso selecionado';
 const summary=document.createElement('div');summary.className='results-revisions-numbers';
 for(const [key,label,target] of [
  ['activity','atividades','#results-adaptive-queue'],
  ['article','artigos','#results-quiz-priorities'],
  ['concept','conceitos','#results-concepts']
 ]){
  const link=document.createElement('a');link.href=target;
  const number=document.createElement('strong');number.id='results-review-'+key+'-count';number.textContent='0';
  const name=document.createElement('span');name.textContent=label;
  link.append(number,name);summary.append(link);
 }
 overview.append(overviewCaption,summary);
 revisionsPanel.insertBefore(overview,revisionsPanel.children[1]||null);
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
 const modeSection=document.getElementById('results-study-modes')?.closest('.results-section');
 const subjectsSection=panels.get('materias').querySelector('[aria-labelledby="title-subjects"]');
 if(modeSection&&subjectsSection)subjectsSection.after(modeSection);
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
