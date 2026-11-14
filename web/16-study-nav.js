/* Navegação compartilhada da biblioteca e das ferramentas de estudo.
 * A origem autenticada é a única que sincroniza progresso pessoal.
 * Links de leitura não carregam credenciais nem dados de desempenho. */
(() => {
 'use strict';
 const WORKER='https://concurso-estudo.leoruas.workers.dev';
 const allowed=new Set(['camara-2026','cgu-2026','dataprev-2026','anpd-2026']);
 const onWorker=location.origin===new URL(WORKER).origin;
 const nav=document.querySelector('.study-topbar');
 const sticky=document.getElementById('sticky-nav');
 const controls={
  exam:document.getElementById('qs-concurso')||document.getElementById('results-contest')||document.getElementById('fc-exam')
 };
 const stored=()=>{try{return localStorage.getItem('concurso_ativo_id')||'';}catch{return '';}};
 function contest(){
  const value=controls.exam?.value||new URLSearchParams(location.search).get('concurso')||stored();
  return allowed.has(value)?value:'camara-2026';
 }
 function destinations(){
  const exam=encodeURIComponent(contest());
  const library=onWorker?'/estudo/':'index.html';
  return {library,glossary:library+'#/glossario?concurso='+exam,
   flashcards:WORKER+'/flashcards.html?concurso='+exam,
   questions:WORKER+'/questoes.html?concurso='+exam,
   results:WORKER+'/resultados.html?concurso='+exam};
 }
 function update(){
  const href=destinations();
  if(nav){
   for(const link of nav.querySelectorAll('a[data-study-nav]')){
    const key=link.getAttribute('data-study-nav');
    if(href[key])link.href=href[key];
    if(key===nav.dataset.active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
   }
  }
  if(sticky){
   const refs={'nav-link-glossario':'glossary','nav-link-flashcards':'flashcards',
      'nav-link-questoes':'questions','nav-link-resultados':'results'};
   for(const [id,key] of Object.entries(refs)){
    const a=document.getElementById(id);if(a)a.href=href[key];
   }
  }
 }
 function persistChoice(){
  const id=controls.exam?.value;
  if(allowed.has(id))try{localStorage.setItem('concurso_ativo_id',id);}catch{}
  update();
 }
 if(controls.exam)controls.exam.addEventListener('change',persistChoice);
 update();
 window.addEventListener('hashchange',update);
})();
