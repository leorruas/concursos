/* Navegação por visões do painel. Não altera nem replica dados pessoais. */
(function(){
 'use strict';
 const views=[
  {id:'resumo',label:'Resumo',selectors:['#results-adaptive','#results-legacy','#results-retention']},
  {id:'revisoes',label:'Revisões',selectors:['[aria-labelledby="results-next-studies-title"]','[aria-labelledby="results-review-queue-title"]','[aria-labelledby="results-quiz-priority-title"]','[aria-labelledby="title-concepts"]']},
  {id:'materias',label:'Matérias',selectors:['[aria-labelledby="title-subjects"]','[aria-labelledby="results-edital-coverage-title"]','[aria-labelledby="results-difficulty-heading"]','[aria-labelledby="results-coverage-title"]']},
  {id:'historico',label:'Histórico',selectors:['#results-principle-history','[aria-labelledby="results-concept-transfer-title"]','[aria-labelledby="results-retests-title"]']}
 ];
 const root=document.getElementById('results-content');
 if(!root)return;
 const style=document.createElement('style');
 style.textContent=`
 .results-views-nav{display:flex;gap:4px;flex-wrap:wrap;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent);margin:0 0 32px;padding:0}
 .results-views-nav a{padding:13px 17px;text-decoration:none;color:var(--muted);font-size:14px;border-bottom:3px solid transparent}
 .results-views-nav a[aria-current="page"]{color:var(--text);border-color:var(--accent-blue);font-weight:650}
 .results-views-nav a:focus-visible{outline:2px solid var(--accent-blue);outline-offset:-2px}
 .results-view-panel[hidden]{display:none!important}
 .results-view-panel>.results-section{margin-bottom:38px}
 .results-view-panel .results-section>h2{font-size:clamp(1.5rem,3.3vw,2.3rem)}
 .results-view-panel .results-caption{max-width:720px}
 .results-view-panel .results-grid{margin:18px 0 36px}
 .results-view-panel .results-explain{margin-bottom:20px}
 @media(max-width:550px){.results-views-nav{flex-wrap:nowrap;overflow-x:auto}.results-views-nav a{white-space:nowrap;padding:12px}.results-view-panel>.results-section{margin-bottom:28px}}
 `;
 document.head.append(style);
 const nav=document.createElement('nav');
 nav.className='results-views-nav';nav.setAttribute('aria-label','Páginas dos resultados');
 const panels=new Map(), links=new Map();
 for(const view of views){
  const a=document.createElement('a');a.textContent=view.label;a.href='?visao='+view.id;
  nav.append(a);links.set(view.id,a);
  const panel=document.createElement('div');panel.className='results-view-panel';panel.id='results-view-'+view.id;
  panel.setAttribute('role','region');panel.setAttribute('aria-label',view.label);
  for(const selector of view.selectors){
   const section=root.querySelector(selector);
   if(section)panel.append(section);
  }
  panels.set(view.id,panel);
 }
 // Os blocos estão agora em regiões próprias, sem a longa seção de detalhes antiga.
 root.querySelectorAll('details.results-revision-details').forEach(details=>{
  if(details.querySelector('#results-principle-history')||details.querySelector('#results-retests'))details.remove();
 });
 root.prepend(nav,...panels.values());
 function current(){const p=new URLSearchParams(location.search).get('visao');return panels.has(p)?p:'resumo';}
 function show(){
  const id=current();
  for(const [key,panel] of panels){panel.hidden=key!==id;const a=links.get(key);if(key===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
 }
 nav.addEventListener('click',event=>{
  const link=event.target.closest('a');if(!link||!nav.contains(link))return;
  event.preventDefault();
  const url=new URL(location.href);url.searchParams.set('visao',new URL(link.href).searchParams.get('visao'));
  history.pushState({resultsView:true},'',url);show();
 });
 addEventListener('popstate',show);show();
})();
