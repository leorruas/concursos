/* Navegação por visões do painel. Não altera nem replica dados pessoais. */
(function(){
 'use strict';
 const views=[
  {id:'resumo',label:'Resumo',selectors:['#results-adaptive','#results-legacy','#results-retention']},
  {id:'revisoes',label:'Revisões',selectors:['#results-adaptive-queue','[aria-labelledby="results-retests-title"]','[aria-labelledby="results-quiz-priority-title"]','[aria-labelledby="title-concepts"]']},
  {id:'materias',label:'Matérias',selectors:['[aria-labelledby="title-subjects"]','[aria-labelledby="results-edital-coverage-title"]','[aria-labelledby="results-difficulty-heading"]','[aria-labelledby="results-coverage-title"]']},
  {id:'semanas',label:'Por semana',selectors:[]}, 
  {id:'historico',label:'Histórico',selectors:['#results-principle-history','[aria-labelledby="results-concept-transfer-title"]']},
  {id:'erros',label:'Erros por dia',selectors:[]}
 ];
 const root=document.getElementById('results-content');
 if(!root)return;
 // Na origem autenticada cada area tem endereco proprio e carregamento completo.
 // No GitHub Pages preservamos o fallback de navegacao por parametro.
 const onWorker=location.origin==='https://concurso-estudo.leoruas.workers.dev';
 const paths={
  resumo:'/resultados-resumo.html',revisoes:'/resultados-revisoes.html',
  materias:'/resultados-materias.html',historico:'/resultados-historico.html',erros:'/resultados-historico.html',semanas:'/resultados-historico.html'
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
 /* Resumo: quatro medidas em uma grade sem caixas decorativas. */
 .results-view-panel #results-legacy{margin:0 0 28px}
 .results-view-panel #results-legacy>h2{font-size:clamp(18px,2.3vw,24px);margin:0 0 7px}
 .results-view-panel #results-unified-method{font-size:12px;line-height:1.45;color:var(--muted);margin:0 0 14px}
 .results-view-panel #results-stats{margin:14px 0 18px;border-top:1px solid color-mix(in srgb,var(--text) 30%,transparent)}
 .results-view-panel #results-stats .results-stat{padding:14px 8px 16px 0}
 .results-view-panel #results-stats .results-stat+ .results-stat{padding-left:10px}
 .results-view-panel #results-stats .results-stat strong{font-size:clamp(25px,3.4vw,34px);margin:9px 0 4px}
 .results-view-panel #results-adaptive{margin-top:8px}
 .results-view-panel #results-adaptive>h2{font-size:clamp(21px,2.7vw,29px);margin:0 0 15px}

 .results-view-panel #results-progress-retests{margin:10px 0 26px}
 .results-view-panel .results-retest-headline{display:grid;grid-template-columns:minmax(150px,1fr) minmax(220px,2fr);align-items:end;gap:22px;margin:16px 0 13px}
 .results-retest-score{display:flex;flex-direction:column;gap:5px}
 .results-retest-score strong{font-size:clamp(31px,4vw,45px);font-weight:600;line-height:1;letter-spacing:-.045em;color:var(--text);font-variant-numeric:tabular-nums}
 .results-retest-score span{font-size:13px;color:var(--muted)}
 .results-retest-headline .results-caption{margin:0;font-size:12px;line-height:1.6}
 .results-retest-bar{height:7px;background:color-mix(in srgb,var(--text) 13%,transparent);overflow:hidden;border-radius:3px}
 .results-retest-bar span{display:block;height:100%;background:var(--accent-blue);border-radius:3px}
 .results-retest-breakdown{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin:20px 0 12px;border-top:1px solid color-mix(in srgb,var(--text) 23%,transparent)}
 .results-retest-metric{display:flex;flex-direction:column;gap:4px;padding:14px 14px 12px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 14%,transparent);min-width:0}
 .results-retest-metric strong,.results-retention-measure strong{font-size:clamp(23px,2.8vw,30px);font-weight:600;line-height:1.15;color:var(--text);font-variant-numeric:tabular-nums}
 .results-retest-metric span,.results-retention-measure span{font-size:13px;font-weight:600;line-height:1.35;color:var(--text)}
 .results-retest-metric small{font-size:11px;line-height:1.5;color:var(--muted)}
 .results-retest-footnote{font-size:11px!important;line-height:1.6;max-width:78ch}
 .results-retention-summary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-block:1px solid color-mix(in srgb,var(--text) 25%,transparent);margin:18px 0 26px}
 .results-retention-measure{display:flex;flex-direction:column;gap:7px;padding:17px 16px 19px 0}
 .results-retention-measure+.results-retention-measure{border-left:1px solid color-mix(in srgb,var(--text) 15%,transparent);padding-left:20px}
 .results-view-panel #results-retention-signals h3{font-size:16px;letter-spacing:-.02em;font-weight:600;margin:0 0 10px}
 .results-retention-list li{display:flex;flex-direction:column;gap:5px}
 .results-retention-list strong{font-size:13px;font-weight:600;color:var(--text)}
 .results-retention-list small{font-size:12px;line-height:1.5;color:var(--muted)}
 @media(max-width:620px){.results-view-panel .results-retest-headline{grid-template-columns:1fr;gap:8px}.results-retest-breakdown{grid-template-columns:repeat(2,minmax(0,1fr))}}
 .results-view-panel #results-retention{padding-top:8px;margin-bottom:26px}
 .results-view-panel #results-retention-signals ul{list-style:none;margin:0;padding:0;border-top:1px solid color-mix(in srgb,var(--text) 25%,transparent)}
 .results-view-panel #results-retention-signals li{font-size:12px;line-height:1.55;padding:10px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 13%,transparent);color:var(--muted)}
 .results-study-action-meta{display:flex;align-items:center;flex-wrap:wrap;gap:6px 13px;margin:8px 0 7px}
 .results-study-action-subject{color:var(--text);font-size:12px}
 .results-study-action-priority{font-size:11px;color:var(--accent-blue);font-weight:600}
 .results-study-action-date{font-size:11px;color:var(--muted)}
 .results-study-action-reason{color:var(--muted);font-size:12px;line-height:1.5;max-width:65ch;margin:7px 0}
 .results-study-action-unavailable{display:block;text-align:right;font-size:11px;line-height:1.4;color:var(--muted);max-width:160px}
 .results-view-panel .results-study-action-copy>p{margin:7px 0}
 /* Histórico: timeline, fonte e artigos seguem a linguagem de listas do projeto. */
 /* Tabela semanal: dados autentificados e mesmas cores de texto do projeto. */
 .results-week-picker{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin:0 0 18px}
 .results-week-picker label{font:11px 'IBM Plex Mono',monospace;text-transform:uppercase;color:var(--muted)}
 .results-week-picker select{font:14px 'Archivo',sans-serif;background:transparent;color:var(--text);border:0;border-bottom:1px solid color-mix(in srgb,var(--text) 35%,transparent);padding:9px 5px;min-width:200px;max-width:100%}
 .results-week-picker select:focus-visible{outline:2px solid var(--accent-blue);outline-offset:3px}
 .results-week-headline{font-size:13px;color:var(--muted);margin:0 0 24px;line-height:1.6}
 .results-week-block{margin:27px 0 34px}
 .results-week-block h3{font-size:17px;font-weight:620;margin:0 0 12px;color:var(--text);letter-spacing:-.025em}
 .results-week-table-scroll{width:100%;overflow-x:auto;overscroll-behavior-x:contain}
 .results-week-table{border-collapse:collapse;width:100%;min-width:490px;font-size:13px;font-variant-numeric:tabular-nums}
 .results-week-table th{text-align:right;padding:12px 9px;border-block:1px solid color-mix(in srgb,var(--text) 30%,transparent);font:11px 'IBM Plex Mono',monospace;color:var(--muted);font-weight:500}
 .results-week-table td{text-align:right;padding:12px 9px;border-bottom:1px solid color-mix(in srgb,var(--text) 13%,transparent);color:var(--text)}
 .results-week-table th:first-child,.results-week-table td:first-child{text-align:left;padding-left:0}
 .results-week-table th:last-child,.results-week-table td:last-child{padding-right:0}
 .results-week-table tfoot th,.results-week-table tfoot td{font-weight:650;border-top:1px solid color-mix(in srgb,var(--text) 35%,transparent);border-bottom:0;color:var(--text)}
 .results-week-table .results-week-empty{color:var(--muted)}
 .results-week-method{font-size:12px;color:var(--muted);line-height:1.6;max-width:67ch}
 .results-week-error{font-size:13px;color:var(--muted);line-height:1.6}
 .results-history-section-header{margin:0 0 16px}
 .results-history-section-header h2{font-size:clamp(19px,2.5vw,26px);font-weight:620;letter-spacing:-.03em;margin:0 0 5px;color:var(--text)}
 .results-history-section-header p{font-size:12px;margin:0;color:var(--muted)}
 .results-history-selector{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid color-mix(in srgb,var(--text) 26%,transparent)}
 .results-history-selector label{font:11px 'IBM Plex Mono',monospace;text-transform:uppercase;color:var(--muted)}
 .results-history-selector select{max-width:min(100%,470px);min-width:0;flex:1;background:transparent;color:var(--text);border:0;border-bottom:1px solid color-mix(in srgb,var(--text) 35%,transparent);font:13px 'Archivo',sans-serif;padding:9px 3px}
 .results-history-count{font-size:12px;color:var(--muted);margin:10px 0}
 .results-history-timeline,.results-history-article-list{border-top:1px solid color-mix(in srgb,var(--text) 28%,transparent)}
 .results-history-event,.results-history-article{padding:13px 0;border-bottom:1px solid color-mix(in srgb,var(--text) 15%,transparent)}
 .results-history-event-main{display:flex;flex-wrap:wrap;align-items:baseline;gap:7px 16px}
 .results-history-event-date{font:12px 'IBM Plex Mono',monospace;color:var(--muted);font-variant-numeric:tabular-nums}
 .results-history-event-result{font-size:14px;color:var(--text);font-weight:620}
 .results-history-event-result.is-incorrect{color:var(--accent-blue)}
 .results-history-event-source{font-size:11px;color:var(--muted);margin-left:auto}
 .results-history-event-signal{font-size:11px;color:var(--accent-blue);margin:6px 0 0}
 .results-history-event-context{font-size:12px;color:var(--muted);line-height:1.5;margin:5px 0 0}
 .results-history-more{margin:14px 0 0}
 .results-history-article-top{display:flex;align-items:start;justify-content:space-between;gap:18px}
 .results-history-article-copy{min-width:0}
 .results-history-article-copy strong{color:var(--text);font-size:14px;line-height:1.4;font-weight:620;display:block}
 .results-history-article-copy small{display:block;color:var(--muted);font-size:12px;margin-top:3px}
 .results-history-article-count{display:block;font-size:11px;color:var(--muted);margin-top:7px}
 .results-history-article-actions{margin-top:8px}
 .results-history-article-actions>a{font-size:12px;text-decoration:none;color:var(--accent-blue)}
 .results-history-article-actions>a:hover{text-decoration:underline;text-underline-offset:3px}
 .results-history-article-evidence{margin-top:10px}
 .results-history-article-evidence summary{font-size:12px;color:var(--text);cursor:pointer}
 .results-history-article-evidence .results-question{padding:12px 0;margin:8px 0 0}
 .results-view-panel #results-principle-history{margin:0 0 38px}
 .results-view-panel #results-articles{margin-top:0}
 .results-view-panel #results-quiz-stats{gap:10px 20px;border-top:1px solid color-mix(in srgb,var(--text) 28%,transparent);padding-top:16px}
 .results-view-panel #results-quiz-status{margin:8px 0 0;font-size:12px;line-height:1.45}
 .results-view-panel #results-concept-transfer .results-concept{padding:12px 0;gap:12px}
 .results-view-panel #results-concept-transfer .results-concept strong{font-size:13px}
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
  .results-history-selector{display:block}
  .results-history-selector label{display:block;margin-bottom:4px}
  .results-history-selector select{width:100%;max-width:none}
  .results-history-event-source{margin-left:0}
  .results-history-article-top{gap:10px}
  .results-view-panel #results-stats .results-stat strong{font-size:26px}
  .results-subject-row{grid-template-columns:minmax(0,1fr) minmax(110px,auto);gap:10px}
  .results-subject-percentage{font-size:14px}
  .results-subject-recommendations{font-size:11px}
  .results-view-panel .results-study-action-row{grid-template-columns:minmax(0,1fr);gap:10px}
  .results-study-action-controls{align-items:flex-start;max-width:none}
  .results-study-action-controls>a{text-align:left}
  .results-study-action-unavailable{text-align:left;max-width:none}
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
  historico:['Histórico de aprendizagem','Evidências de revisão e evolução dos conceitos.'],
  semanas:['Questões por semana','Respostas por dia e por matéria, com acertos, erros e retestes.'], 
  erros:['Erros por dia','Erros e acertos inseguros, com respostas e explicações organizadas por data.']
 };
 for(const view of views){
  const a=document.createElement('a');a.textContent=view.label;
  const href=new URL(location.href);
  if(onWorker){href.pathname=paths[view.id];if(view.id==='erros'||view.id==='semanas')href.searchParams.set('visao',view.id);else href.searchParams.delete('visao');}
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
  if(view.id==='semanas'){
   const region=document.createElement('section');region.id='results-weeks';region.className='results-section';region.setAttribute('aria-live','polite');
   region.textContent='Aguardando histórico semanal autenticado…';panel.append(region);
  }
  if(view.id==='erros'){
   const region=document.createElement('section');region.id='results-errors';region.className='results-section';region.setAttribute('aria-live','polite');
   region.textContent='Carregando erros e acertos inseguros…';panel.append(region);
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
   const detail=new URLSearchParams(location.search).get('visao');
   if(location.pathname===paths.historico&&(detail==='erros'||detail==='semanas'))return detail;
   const page=Object.keys(paths).find(id=>id!=='erros'&&id!=='semanas'&&paths[id]===location.pathname);
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
 // A API autenticada devolve totais já conciliados entre chat e site.
 // Nenhum registro de tentativa é persistido nesta página.
 const weekTarget=document.getElementById('results-weeks');
 let weeklyData=null,weekSelection='';
 const dayName=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
 const numericFields=['total','correct','incorrect','blank','retests'];
 const datePt=d=>/^\d{4}-\d{2}-\d{2}$/.test(d||'')?d.slice(8,10)+'/'+d.slice(5,7)+'/'+d.slice(0,4):d;
 const newNode=(tag,cls,value)=>{
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(value!==undefined)n.textContent=String(value);
  return n;
 };
 const zero=()=>({total:0,correct:0,incorrect:0,blank:0,retests:0});
 function addValues(target,source){for(const f of numericFields)target[f]+=Number(source?.[f])||0;}
 function summaryTable(headers,rows,total){
  const wrap=newNode('div','results-week-table-scroll');
  const table=newNode('table','results-week-table');
  const head=newNode('thead'),hr=newNode('tr');
  for(const h of headers){const cell=newNode('th','',h);cell.scope='col';hr.append(cell);}
  head.append(hr);table.append(head);
  const body=newNode('tbody');
  for(const row of rows){
   const tr=newNode('tr');
   row.forEach((v,i)=>{
    const td=newNode('td',v===null?'results-week-empty':'',v===null?'—':v);
    tr.append(td);
   });body.append(tr);
  }
  table.append(body);
  if(total){const foot=newNode('tfoot'),tr=newNode('tr');
   total.forEach((v,i)=>{const cell=newNode(i?'td':'th','',v);if(!i)cell.scope='row';tr.append(cell);});
   foot.append(tr);table.append(foot);
  }
  wrap.append(table);return wrap;
 }
 function drawWeeks(){
  if(!weekTarget)return;
  weekTarget.replaceChildren();
  if(!weeklyData||weeklyData.version!==1||!Array.isArray(weeklyData.weeks)){
   weekTarget.append(newNode('p','results-week-error','O resumo por semana ainda não está disponível nesta versão da API privada. As respostas originais continuam preservadas.'));
   return;
  }
  const weeks=weeklyData.weeks,subject=document.getElementById('results-subject-filter')?.value||'';
  if(!weeks.length){weekTarget.append(newNode('p','results-week-error','Ainda não há questões com data registrada para este concurso.'));return;}
  if(!weeks.some(w=>w.start===weekSelection))weekSelection=weeks[0].start;
  const toolbar=newNode('div','results-week-picker');
  const label=newNode('label','','Semana');label.htmlFor='results-week-select';
  const select=newNode('select');select.id='results-week-select';
  for(const week of weeks){
   const option=newNode('option','',datePt(week.start)+' a '+datePt(week.end));
   option.value=week.start;select.append(option);
  }
  select.value=weekSelection;
  select.addEventListener('change',()=>{weekSelection=select.value;drawWeeks();});
  toolbar.append(label,select);weekTarget.append(toolbar);
  const week=weeks.find(w=>w.start===weekSelection);
  const days=new Map((week.days||[]).map(d=>[d.date,d]));
  const matterTotals=new Map(),sum=zero(),dayRows=[];
  const startDate=new Date(week.start+'T12:00:00Z');
  for(let i=0;i<7;i++){
   const d=new Date(startDate);d.setUTCDate(startDate.getUTCDate()+i);
   const key=d.toISOString().slice(0,10),day=days.get(key);
   const items=day?(subject?(day.subjects||[]).filter(x=>x.subjectId===subject):day.subjects||[]):[];
   const values=zero();
   for(const item of items){
    addValues(values,item);
    const id=item.subjectId||'sem-materia';
    if(!matterTotals.has(id))matterTotals.set(id,zero());
    addValues(matterTotals.get(id),item);
   }
   if(items.length===0)dayRows.push([dayName[i]+' · '+datePt(key),null,null,null,null,null]);
   else dayRows.push([dayName[i]+' · '+datePt(key),...numericFields.map(f=>values[f])]);
   addValues(sum,values);
  }
  const hint=newNode('p','results-week-headline',
   sum.total+' questões · '+sum.correct+' acertos · '+sum.incorrect+' erros'+
   (sum.blank?' · '+sum.blank+' em branco':'')+' · '+sum.retests+' retestes da mesma questão'+
   (subject?' · matéria filtrada':''));
  weekTarget.append(hint);
  const columns=['Dia','Questões','Acertos','Erros','Brancos','Retestes'];
  const dayBlock=newNode('section','results-week-block');
  dayBlock.append(newNode('h3','','Por dia'),summaryTable(columns,dayRows,
   ['Total',...numericFields.map(f=>sum[f])]));
  weekTarget.append(dayBlock);
  const matterBlock=newNode('section','results-week-block');
  matterBlock.append(newNode('h3','','Por matéria'));
  const known={'direito-constitucional':'Direito Constitucional','direito-administrativo':'Direito Administrativo',
   'administracao-publica':'Administração Pública','orcamento-publico':'Orçamento Público',
   'portugues':'Língua Portuguesa','ingles':'Língua Inglesa','comunicacao':'Comunicação Social',
   'informatica':'Tecnologia da Informação','etica-publica':'Ética Pública'};
  const matters=[...matterTotals].sort((a,b)=>b[1].total-a[1].total||a[0].localeCompare(b[0],'pt-BR'));
  if(matters.length){
   matterBlock.append(summaryTable(['Matéria',...columns.slice(1)],
    matters.map(([id,v])=>[known[id]||id,...numericFields.map(f=>v[f])]),
    ['Total',...numericFields.map(f=>sum[f])]));
  }else matterBlock.append(newNode('p','results-week-error','Sem questões nesta matéria durante a semana selecionada.'));
  weekTarget.append(matterBlock);
  weekTarget.append(newNode('p','results-week-method',
   'Reteste significa nova resposta à mesma questão identificada na mesma origem. Tentativas distintas são contadas separadamente. Revisar uma questão não comprova retenção independente. Dias sem informação têm indicação própria; os totais vêm da API autenticada, que concilia chat e site.'));
 }
 window.addEventListener('results:data',event=>{
  if(event.detail?.data?.concursoId!==weeklyData?.concursoId)weekSelection='';
  weeklyData=event.detail?.data?.weekly?{...event.detail.data.weekly,concursoId:event.detail.data.concursoId}:null;
  drawWeeks();
 });
 window.addEventListener('results:filter',drawWeeks);
 addEventListener('popstate',show);show();
})();
