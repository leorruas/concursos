/* Navegação compartilhada: mesma identidade e contexto de concurso do catálogo. */
(function(){
 'use strict';
 const worker=location.origin==='https://concurso-estudo.leoruas.workers.dev';
 const nav=document.querySelector('.study-topbar');if(!nav)return;
 const library=worker?'estudo/':'index.html';
 const params=new URLSearchParams(location.search);
 let exam=params.get('concurso')||'';
 if(!exam){try{exam=localStorage.getItem('concurso_ativo_id')||'camara-2026';}catch{exam='camara-2026';}}
 const known=new Set(['camara-2026','cgu-2026','dataprev-2026']);
 if(!known.has(exam))exam='camara-2026';
 function update(examId){
  if(!known.has(examId))return;
  exam=examId;
  const links={
   library:library+'#/?concurso='+encodeURIComponent(exam),
   glossary:library+'#/glossario?concurso='+encodeURIComponent(exam),
   flashcards:'flashcards.html?concurso='+encodeURIComponent(exam),
   questions:'questoes.html?concurso='+encodeURIComponent(exam),
   results:'resultados.html?concurso='+encodeURIComponent(exam)
  };
  for(const [key,href] of Object.entries(links)){
   const link=nav.querySelector('[data-study-nav="'+key+'"]');
   if(link)link.href=href;
  }
 }
 update(exam);
 for(const id of ['qs-concurso','results-contest','fc-concurso']){
  const control=document.getElementById(id);
  control?.addEventListener('change',()=>update(control.value));
 }
 const active=nav.dataset.active||'';
 const current=nav.querySelector('[data-study-nav="'+active+'"]');
 if(current)current.setAttribute('aria-current','page');
})();
