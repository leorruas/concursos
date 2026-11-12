/* Questões erradas por artigo. Nunca inclui histórico pessoal no HTML público. */
(function(){
 'use strict';
 const WORKER='https://concurso-estudo.leoruas.workers.dev';
 let historyPromise=null,historyContest='';
 const el=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=String(text);return x;};
 const date=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||''))?s.slice(8,10)+'/'+s.slice(5,7)+'/'+s.slice(0,4):'data não registrada';
 function makeItem(q,article,contest){
  const d=el('details','erros-artigo-item');
  d.append(el('summary','',q.result==='incorrect'?'Questão errada · '+date(q.date):'Acerto com insegurança · '+date(q.date)));
  if(q.topic||q.subtopic)d.append(el('p','erros-artigo-meta',[q.topic,q.subtopic].filter(Boolean).join(' / ')));
  d.append(el('p','',q.statement||'O enunciado não está disponível no registro antigo.'));
  d.append(el('p','','Sua resposta: '+(q.userAnswer??'não registrada')+' · Gabarito: '+(q.correctAnswer??'não registrado')));
  if(q.explanation)d.append(el('p','',q.explanation));
  if(q.section){
   const a=el('a','erros-artigo-link','Ir ao trecho da teoria');
   a.href=window.construirRotaArtigoId?construirRotaArtigoId(article.articleSlug||article.articleId,q.section,contest):'#';
   a.addEventListener('click',(event)=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
    if(typeof irParaSecaoArtigo!=='function')return;
    event.preventDefault();
    if(!irParaSecaoArtigo(q.section,'smooth')){
     a.textContent='Trecho não localizado nesta versão do artigo';
     a.removeAttribute('href');
     return;
    }
    // Atualiza o link compartilhável sem recarregar o artigo e fechar os erros.
    if(location.hash!==a.getAttribute('href')){
     history.pushState({artigo:article.titulo,categoria:article.categoria,secao:q.section},'',a.getAttribute('href'));
    }
   });
   d.append(a);
  }
  return d;
 }
 async function load(concursoId){
  if(historyPromise&&historyContest===concursoId)return historyPromise;
  historyContest=concursoId;
  historyPromise=fetch('/v1/study/results?concurso='+encodeURIComponent(concursoId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  }).then(async r=>{if(r.status===401)return {unauthorized:true};if(!r.ok)throw Error('indisponível');return await r.json();})
    .catch(()=>({offline:true}));
  return historyPromise;
 }
 function addLink(into,article,contest){
  const url=WORKER+'/estudo/#/artigo/'+encodeURIComponent(article.articleSlug||article.articleId)+'?concurso='+encodeURIComponent(contest);
  const a=el('a','erros-artigo-link','Abrir este artigo com meu histórico privado');
  a.href=url;a.rel='noreferrer';into.append(a);
 }
 function render(article){
  if(!article?.articleId)return;
  const container=document.getElementById('artigo-corpo');
  if(!container)return;
  const contest=window.obterProgramaSelecionado?.()?.concursoId||'camara-2026';
  const box=el('details','erros-artigo-caixa');
  box.append(el('summary','','Questões que errei neste artigo'));
  const body=el('div','erros-artigo-corpo');
  const intro=el('p','erros-artigo-meta','Confira as tentativas registradas e volte ao trecho de teoria quando necessário.');
  body.append(intro);
  box.append(body);
  container.append(box);
  box.addEventListener('toggle',async()=>{
   if(!box.open||box.dataset.loaded)return;
   box.dataset.loaded='loading';
   if(location.origin!==WORKER){
    body.append(el('p','','O histórico é privado e exige login no site de estudo.'));
    addLink(body,article,contest);box.dataset.loaded='done';return;
   }
   const feedback=el('p','erros-artigo-meta','Consultando histórico privado…');body.append(feedback);
   const data=await load(contest);
   if(!box.isConnected)return;
   feedback.remove();
   if(data.unauthorized){
    body.append(el('p','','Entre com GitHub para consultar suas respostas.'));
    const target='/estudo/'+location.hash;
    const a=el('a','erros-artigo-link','Entrar com GitHub');
    a.href='/v1/login/github?return='+encodeURIComponent(target);body.append(a);
   }else if(data.offline){
    body.append(el('p','','O histórico privado está indisponível neste momento.'));
   }else{
    const info=(data.articles||[]).find(item=>item.articleId===article.articleId);
    if(!info||!(info.mistakes?.length||info.uncertainCorrect?.length)){
     body.append(el('p','','Nenhuma questão errada ou acerto inseguro foi associado a este artigo nos registros disponíveis.'));
    }else{
     body.append(el('p','erros-artigo-meta',info.mistakes.length+' erro(s) e '+info.uncertainCorrect.length+' acerto(s) com insegurança. Prioridade de revisão: '+info.priority+'/100.'+(info.dueOn?' Revisão sugerida: '+info.dueOn+'.':'')));
     for(const q of info.mistakes)body.append(makeItem(q,article,contest));
     for(const q of info.uncertainCorrect)body.append(makeItem(q,article,contest));
    }
    const more=el('a','erros-artigo-link','Ver todas as prioridades de estudo');
    more.href='/resultados.html?artigo='+encodeURIComponent(article.articleId);body.append(more);
   }
   box.dataset.loaded='done';
  });
 }
 const style=document.createElement('style');
 style.textContent='.erros-artigo-caixa{margin:38px 0 24px;padding:16px 19px;border:1px solid color-mix(in srgb,var(--text) 23%,transparent);background:var(--surface);border-radius:9px}.erros-artigo-caixa>summary{color:var(--text);font-weight:650;cursor:pointer}.erros-artigo-caixa>summary::marker{color:var(--accent-blue)}.erros-artigo-corpo{padding-top:12px;font-size:.9em;line-height:1.5}.erros-artigo-item{padding:12px 0;border-top:1px solid color-mix(in srgb,var(--text) 16%,transparent)}.erros-artigo-item summary{cursor:pointer;color:var(--text)}.erros-artigo-item p{margin:10px 0}.erros-artigo-meta{color:var(--muted);font-size:.86em}.erros-artigo-link{color:var(--accent-blue);display:inline-block;margin:9px 12px 9px 0}';
 document.head.append(style);
 window.renderizarErrosPrivadosArtigo=render;
})();