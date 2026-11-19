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
 'orcamento-publico':'Orçamento Público','etica-publica':'Ética e decoro parlamentar','redacao':'Redação',
 'sem-materia':'Matéria não identificada'
};
let manifest=new Map(),current=null,subjectCatalog=null,discursiveProposals=[];
let selectedSubject='',retests=null,coverageData=null,transferData=null,transferCombined=false;
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
function manifestSubject(articleId){
 const category=manifest.get(articleId)?.categoria;
 if(typeof category!=='string')return '';
 const simple=category.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
 const mapped={'direito constitucional':'direito-constitucional','direito administrativo':'direito-administrativo',
  'administracao publica':'administracao-publica','orcamento publico':'orcamento-publico',
  'comunicacao':'comunicacao','portugues':'portugues','ingles':'ingles','informatica':'informatica',
  'estado e democracia':'estado-democracia','etica publica':'etica-publica','redacao':'redacao'};
 return mapped[simple]||'';
}
function articleSubject(article,concepts=[]){
 const candidates=[article.subjectId,article.materiaId,manifestSubject(article.articleId),
  ...(article.mistakes||[]).map(q=>q.subjectId),...(article.uncertainCorrect||[]).map(q=>q.subjectId)];
 const associated=concepts.filter(c=>Array.isArray(c.articles)&&c.articles.includes(article.articleId));
 candidates.push(...associated.map(c=>c.subjectId));
 return candidates.find(s=>typeof s==='string'&&s.trim())||'sem-materia';
}
function subjectGroups(rows,getSubject){
 const groups=new Map();
 for(const item of rows){const subject=getSubject(item)||'sem-materia';if(!groups.has(subject))groups.set(subject,[]);groups.get(subject).push(item);}
 return [...groups].sort((a,b)=>title(a[0]).localeCompare(title(b[0]),'pt-BR'));
}
function subjectHeading(subject,count){
 const h=el('h3','results-subject-heading',title(subject));
 h.append(el('small','',count+' recomendaç'+(count===1?'ão':'ões')));
 return h;
}
function evidenceLabel(attempts,errors){
 if(attempts<3)return 'Poucas ocorrências de erro ou insegurança. Consulte outras questões antes de concluir que há uma lacuna.';
 if(errors>1)return 'Erros registrados. Verifique se ocorreram em dias diferentes antes de considerar a dificuldade recorrente.';
 return 'Recomendação baseada nas ocorrências registradas, sujeita a novos resultados.';
}
function articleReviewEvidence(article){
 const mistakes=Array.isArray(article.mistakes)?article.mistakes:[];
 const unsure=Array.isArray(article.uncertainCorrect)?article.uncertainCorrect:[];
 const days=new Set(mistakes.map(q=>q.date).filter(d=>/^\d{4}-\d{2}-\d{2}$/.test(String(d||''))));
 if(mistakes.length>=2&&days.size>=2)return 'Erros em '+days.size+' dias distintos: revisar o conceito e testar novamente.';
 if(mistakes.length>=2)return 'Mais de um erro registrado; recorrência entre dias ainda não demonstrada.';
 if(mistakes.length===1)return 'Um erro registrado; confirmar com novas questões antes de ampliar a revisão.';
 if(unsure.length)return 'Acerto com insegurança: reforçar o conceito e retestar.';
 return 'Sem ocorrência de erro ou insegurança vinculada.';
}
function showEditalCoverage(){
 const target=$('results-edital-coverage');if(!target)return;
 target.replaceChildren();
 const coverage = current?.adaptive?.coverage;
 if (coverage?.units?.length) {
  const units = coverage.units.filter(unit => !selectedSubject || unit.subjectId === selectedSubject);
  target.append(el('p', 'results-caption', 'Referências do edital presentes no banco revisado. A cobertura indica onde há respostas registradas. A extensão total do edital exige conferência adicional.'));
  for (const unit of units) {
   const details = el('details', 'results-revision-details');
   const covered = unit.items.filter(item => item.attempts > 0).length;
   details.append(el('summary', '', unit.title + (unit.items.length ? ' · ' + covered + ' de ' +
    unit.items.length + ' referências avaliadas' : ' · Sem referências detalhadas no banco')));
   if (unit.studyStatus === 'studied-unassessed') {
    details.append(el('p', 'results-caption', 'Estudo registrado em ' + fmtDate(unit.exposition) + '. Ainda sem avaliação na unidade.'));
   } else if (unit.studyStatus === 'confirmed-not-studied') {
    details.append(el('p', 'results-caption', 'Unidade declarada como ainda não estudada em ' + fmtDate(unit.confirmedNotStudiedOn) + '.'));
   } else if (unit.studyStatus === 'unknown') {
    details.append(el('p', 'results-caption', 'Sem evidência suficiente de estudo ou avaliação na unidade.'));
   } else if (unit.studyStatus === 'evaluated') {
    details.append(el('p', 'results-caption', unit.evaluated + ' resposta(s) na unidade. A contagem inclui referências amplas.'));
   }
   const list = el('ul');
   for (const item of unit.items) list.append(el('li', '', item.editalRef + ' · ' +
    (item.attempts ? item.attempts + ' resposta(s)' : 'Avaliação sem registro')));
   if (unit.items.length) details.append(list);
   target.append(details);
  }
  if (!selectedSubject && coverage.unmapped) target.append(el('p', 'results-caption',
   coverage.unmapped + ' tentativa(s) sem correspondência exata com uma referência detalhada do catálogo.'));
  return;
 }
 if(!subjectCatalog||!current){target.append(el('p','results-caption','Catálogo de matérias indisponível.'));return;}
 const rows=window.ResultsStudyPlan.catalogCoverage(subjectCatalog,current.concursoId,current.bySubject||[])
  .filter(s=>!selectedSubject||s.subjectId===selectedSubject);
 if(!rows.length){target.append(el('p','results-caption','Nenhuma matéria cadastrada nesta seleção.'));return;}
 for(const s of rows){
  const row=el('div','results-concept'),left=el('div');
  left.append(el('strong','',s.label),
   el('small','',(s.editalRef?'Referência: '+s.editalRef+' · ':'')+s.articleCount+' artigo(s) relacionado(s) no catálogo'),
   el('small','',s.status==='nao-avaliada'?'Nenhuma tentativa registrada nesta matéria.':
    s.status==='amostra-pequena'?'Amostra pequena: '+s.attempts+' tentativa(s).':
    s.attempts+' tentativa(s) registradas. O domínio do edital não foi avaliado integralmente.'));
  const a=el('a','results-link','Abrir matéria');
  if(s.hubArticleId&&manifest.has(s.hubArticleId)){a.href=articleLink({articleId:s.hubArticleId});a.rel='noreferrer';row.append(left,a);}
  else row.append(left,el('small','results-caption','Hub não encontrado no manifesto.'));
  target.append(row);
 }
}
function showReviewQueue(){
 const target=$('results-review-queue');if(!target)return;
 target.replaceChildren();
 if(!current)return;
 const raw=(current.articles||[]).map(a=>({...a,subjectId:articleSubject(a,current.concepts||[])}));
 const rows=window.ResultsStudyPlan.reviewQueue(raw,current.concepts||[],
  transferCombined?transferData||[]:[],selectedSubject).slice(0,25);
 if(!rows.length){target.append(el('p','results-caption','Sem recomendações baseadas em erros, insegurança ou revisões previstas nesta seleção.'));return;}
 for(const [subject,items] of subjectGroups(rows,x=>x.subjectId)){
  const group=el('section','results-subject-group');group.append(subjectHeading(subject,items.length));
  for(const item of items){
   const row=el('div','results-concept'),left=el('div');
   const meta=manifest.get(item.articleId);
   const name=item.kind==='concept'?(item.label||item.conceptId):(meta?.tituloExibicao||meta?.titulo||'Artigo relacionado');
   left.append(el('strong','',name),el('small','',
    item.reason+' · '+item.errors+' erro(s) · '+item.unsure+' insegurança(s)'),
    el('small','','Prioridade relativa: '+item.score+'/100. Não é medida de domínio.'));
   row.append(left);
   if(item.articleId&&meta){
    const a=el('a','results-link','Revisar artigo');
    a.href=articleLink(item);a.rel='noreferrer';row.append(a);
   }else row.append(el('small','results-caption','Sem artigo correspondente no catálogo.'));
   group.append(row);
  }
  target.append(group);
 }
}
function showNextStudies(){
 const target=$('results-next-studies');if(!target||!current)return;
 target.replaceChildren();
 const articles=(current.articles||[]).map(a=>({...a,subjectId:articleSubject(a,current.concepts||[])}));
 const queue=window.ResultsStudyPlan.reviewQueue(articles,current.concepts||[],transferCombined?transferData||[]:[],selectedSubject);
 const coverage=window.ResultsStudyPlan.catalogCoverage(subjectCatalog,current.concursoId,current.bySubject||[])
  .filter(x=>!selectedSubject||x.subjectId===selectedSubject);
 const plan=window.ResultsStudyPlan.studySequence(queue,coverage,7);
 if(!plan.length){target.append(el('p','results-caption','Não há dados suficientes para sugerir uma sequência de revisão.'));return;}
 for(const item of plan){
  const row=el('div','results-concept'),left=el('div'),meta=manifest.get(item.articleId);
  const name=item.kind==='diagnostic'?item.label:(item.label||meta?.tituloExibicao||meta?.titulo||title(item.subjectId));
  left.append(el('strong','',item.order+'. '+name),
   el('small','',(item.kind==='diagnostic'?'Resolver questões diagnósticas da matéria': 'Revisar teoria e depois resolver questões diferentes')+' · '+item.reason));
  row.append(left);
  if(item.articleId&&meta){
   const link=el('a','results-link','Abrir conteúdo');
   link.href=articleLink(item);link.rel='noreferrer';row.append(link);
  }
  target.append(row);
 }
}
function showCoverage(){
 const root=$('results-coverage');root.replaceChildren();
 // A API unificada já concilia IDs de origem repetidos. Uma questão do
 // ChatGPT não precisa existir no banco público para integrar esta contagem.
 const rows=(current?.difficulty?.bySubject||[])
  .filter(x=>!selectedSubject||x.id===selectedSubject)
  .sort((a,b)=>title(a.id).localeCompare(title(b.id),'pt-BR'));
 if(!rows.length){root.append(el('p','results-caption','Sem questões respondidas nesta matéria.'));return;}
 for(const x of rows){
  const total=Number(x.total)||0,correct=Number(x.correct)||0,incorrect=Number(x.incorrect)||0;
  const blank=Number(x.blank)||0;
  const row=el('div','results-concept'),left=el('div');
  left.append(el('strong','',title(x.id)),
   el('small','',correct+' acerto(s) · '+incorrect+' erro(s)'+(blank?' · '+blank+' em branco':'')));
  row.append(left,el('strong','results-score',total+' questão(ões)'));
  root.append(row);
 }
}
function showConceptTransfer(){
 const target=$('results-concept-transfer');target.replaceChildren();
 if(!transferData){target.append(el('p','results-caption','Aguardando dados para comparação de questões distintas.'));return;}
 const rows=transferData.filter(x=>!selectedSubject||x.subjectId===selectedSubject);
 if(!rows.length){target.append(el('p','results-caption','Sem comparações válidas entre questões diferentes do mesmo conceito, em dias distintos.'));return;}
 const statusNames={'needs-review':'Revisão prioritária','mixed':'Desempenho instável',
  'insecure':'Acerto inseguro','promising':'Sinal inicial de melhora','progress':'Melhora observada'};
 for(const [subject,items] of subjectGroups(rows,x=>x.subjectId)){
  const group=el('section','results-subject-group');group.append(subjectHeading(subject,items.length));
  for(const x of items){
   const row=el('div','results-concept'),left=el('div'),meta=manifest.get(x.articleId);
   const label=typeof x.conceptId==='string'&&x.conceptId.trim()?x.conceptId.replaceAll('-',' '):'Conceito vinculado';
   left.append(el('strong','',label),
    el('small','',statusNames[x.state]+' · '+x.distinctQuestions+' questões diferentes · '+x.wrong+' erro(s) posterior(es) · '+x.secure+' acerto(s) seguro(s) · '+x.insecure+' inseguro(s)'),
    el('small','',transferCombined
      ?'Fontes consideradas: '+(x.sources?.chat||0)+' questão(ões) do ChatGPT e '+(x.sources?.site||0)+' do site · '+(x.distinctDays||'?')+' dia(s) · evidência '+(x.confidence==='moderate'?'moderada':'limitada')
      :'Somente baterias do site. Indício de progresso, não certificação de domínio.'));
   row.append(left);
   if(x.articleId&&manifest.has(x.articleId)){
    const a=el('a','results-link','Abrir '+(meta?.tituloExibicao||meta?.titulo||'artigo'));
    a.href=articleLink(x,x.section);a.rel='noreferrer';row.append(a);
   }else{
    row.append(el('small','results-caption','Sem artigo vinculado no catálogo atual.'));
   }
   group.append(row);
  }
  target.append(group);
 }
}
function showRetests(){
 const target=$('results-retests');target.replaceChildren();
 if(!retests){target.append(el('p','results-caption','Aguardando histórico do site.'));return;}
 const rows=retests.filter(x=>!selectedSubject||x.subjectId===selectedSubject);
 if(!rows.length){target.append(el('p','results-caption','Nenhum reteste da mesma questão em dias diferentes para esta matéria.'));return;}
 for(const [subject,items] of subjectGroups(rows,x=>x.subjectId)){
  const group=el('section','results-subject-group');group.append(subjectHeading(subject,items.length));
  for(const x of items){
   const row=el('div','results-concept'),left=el('div'),meta=manifest.get(x.articleId);
   left.append(el('strong','',meta?.tituloExibicao||meta?.titulo||'Artigo relacionado'));
   const parts=[];
   if(x.persistent)parts.push(x.persistent+' erro(s) persistentes');
   if(x.reappeared)parts.push(x.reappeared+' erro(s) após acerto anterior');
   if(x.positive)parts.push(x.positive+' reteste(s) positivos');
   if(x.insecure)parts.push(x.insecure+' acerto(s) inseguros');
   left.append(el('small','',parts.join(' · ')+' · '+x.questions+' questão(ões) repetida(s) em dias diferentes'));
   const a=el('a','results-link','Abrir artigo');a.href=articleLink(x,x.section);a.rel='noreferrer';
   row.append(left,a);
   if(x.pendingQuestionIds?.length){
    const ids=[...new Set(x.pendingQuestionIds)].slice(0,6);
    const params=new URLSearchParams({concurso:select.value,questoes:ids.join(',')});
    const retry=el('a','results-link','Refazer '+ids.length+' questão(ões) anteriores');
    retry.title='Repetição de enunciado já respondido, distinta de teste independente de retenção.';
    retry.href='questoes.html#'+params.toString();
    row.append(retry);
   }
   group.append(row);
  }
  target.append(group);
 }
}
async function loadRetests(examId,version){
 retests=null;coverageData=null;
 if(!transferCombined)transferData=null;
 try{
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(version!==loadVersion)return;
  if(!response.ok)throw Error('histórico indisponível');
  const data=await response.json();
  if(data?.version!==1||!Array.isArray(data.attempts))throw Error('histórico incompatível');
  const map=await quizQuestions();
  if(version!==loadVersion)return;
  retests=window.ResultsRetests.analyze(data.attempts,map,examId);
  coverageData=window.ResultsRetests.coverage(data.attempts,map,examId);
  if(!transferCombined){
   transferData=window.ResultsRetests.conceptTransfer(data.attempts,map,examId);
  }
  showRetests();showCoverage();showConceptTransfer();
 }catch{
  if(version===loadVersion)$('results-retests').replaceChildren(el('p','results-caption','Retestes indisponíveis. O histórico unificado permanece preservado.'));
 }
}
function priorityLabel(score){
 const label=el('strong','results-score','prioridade '+score+'/100');
 label.title='Índice de prioridade de revisão: quanto maior, mais cedo vale revisar. Não é nota nem taxa de erros.';
 return label;
}
function stat(label,value){const box=el('div','results-stat');box.append(el('span','results-caption',label),el('strong','',value));return box;}
const adaptiveActions = {
 study: 'Estudar', practice: 'Praticar', contrast: 'Contrastar',
 'test-retention': 'Testar retenção', review: 'Revisar'
};
function renderAdaptive(plan) {
 const enabled = plan?.version === 1;
 $('results-adaptive').hidden = !enabled;
 $('results-retention').hidden = !enabled;
 const queueSection = $('results-adaptive-queue'), queueItems = $('results-adaptive-queue-items');
 if (queueSection) queueSection.hidden = true;
 if (queueItems) queueItems.replaceChildren();
 const practice = $('results-discursive');
 practice.replaceChildren();
 if (enabled && (!selectedSubject || selectedSubject === 'redacao')) {
  const details = el('details', 'results-revision-details');
  details.append(el('summary', '', 'Treinar discursiva'));
  details.append(el('p', 'results-caption', 'Propostas autorais em revisão. Escreva sem consulta e confira os quesitos após terminar.'));
  if (!discursiveProposals.length) details.append(el('p', 'results-caption', 'Propostas indisponíveis.'));
  for (const proposal of discursiveProposals) {
   const exercise = el('details', 'results-revision-details');
   exercise.append(el('summary', '', (proposal.tipo === 'peca-tecnica' ? 'Peça técnica' : 'Questão discursiva') + ' · ' + proposal.topic),
    el('p', '', proposal.command), el('p', 'results-caption', 'Até ' + proposal.maxLines + ' linhas.'));
   const check = el('details', 'results-revision-details');
   const elements = el('ul');
   for (const item of proposal.expectedElements) elements.append(el('li', '', item));
   check.append(el('summary', '', 'Conferir quesitos'), elements);
   exercise.append(check);
   details.append(exercise);
  }
  practice.append(details);
 }
 if (!enabled) return;
 const ranked = plan.recommendations.filter(item => !selectedSubject || item.subjectId === selectedSubject);
 // O resumo exibe no maximo tres decisoes, sem ocultar a fila completa em Revisoes.
 // Priorizar uma atividade executavel na primeira posicao; a fila preserva prioridades originais.
 const extra = ranked.find(item => item.questionIds?.length) || null;
 const activities = extra ? [extra, ...ranked.filter(item => item !== extra).slice(0, 2)] : ranked.slice(0, 3);
 const firstStudy = ranked.find(item => item.state === 'confirmed-not-studied' && !activities.includes(item) &&
  (item.articles?.length || item.questionIds?.length));
 if (firstStudy && activities.length < 3) activities.push(firstStudy);
 const list = el('ul'), remaining = el('ul');
 // Todas as recomendacoes fora do resumo permanecem na pagina de Revisoes.
 for (const item of [...activities, ...ranked.filter(item => !activities.includes(item))]) {
  const row = el('li');
  const action = adaptiveActions[item.action] || 'Revisar';
  const label = /^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(item.title) ? item.title.replaceAll('-', ' ') : item.title;
  if (item === extra) row.append(el('p', 'results-meta', 'Bateria disponível'));
  row.append(el('h3', '', action + ' · ' + label),
   el('p', 'results-meta', title(item.subjectId) + ' · Prioridade ' + ({high:'alta',medium:'média',low:'baixa'}[item.priority] || 'sem classificação')),
   el('p', 'results-caption', item.rationale.join(' ')));
  if (item.questionIds.length) {
   const params = new URLSearchParams({ concurso: item.concursoId, questoes: item.questionIds.join(',') });
   const link = el('a', '', 'Preparar bateria de ' + item.quantity + ' questão(ões)');
   link.href = 'questoes.html#' + params.toString();
   row.append(link);
  } else {
   row.append(el('p', 'results-caption', 'Sem questões novas compatíveis no banco atual.'));
  }
  const ref = item.articles.map(value => /^article:(art-[a-z0-9]+)(?:#(.*))?$/i.exec(value))
   .find(match => match && manifest.has(match[1]));
  if (ref) {
   const link = el('a', '', 'Abrir material de estudo');
   link.href = articleLink({articleId: ref[1]}, ref[2]);
   const line = el('p');
   line.append(link);
   row.append(line);
  }
  if (item.state === 'confirmed-not-studied') row.append(el('p', 'results-meta', item.selection));
  if (item.nextReview) row.append(el('p', 'results-meta', 'Reteste previsto para ' + fmtDate(item.nextReview)));
  if (activities.includes(item)) {
   list.append(row);
   // Revisoes apresenta a fila inteira, inclusive os itens destacados no Resumo.
   remaining.append(row.cloneNode(true));
  } else remaining.append(row);
 }
 $('results-adaptive-actions').replaceChildren(activities.length ? list :
  el('p', 'results-caption', 'Nenhuma atividade prioritária com os registros atuais.'));
 if (queueSection && queueItems) {
  queueSection.hidden = remaining.children.length === 0;
  queueItems.replaceChildren(remaining);
 }
 const signals = plan.principles.flatMap(item => item.signals.filter(signal => signal.elapsed)
  .map(signal => ({ ...signal, title: item.title }))).sort((a,b) => b.date.localeCompare(a.date));
 const progress = el('ul');
 for (const signal of signals.slice(0, 6)) {
  progress.append(el('li', '', signal.title + ' · Acerto seguro após ' + signal.elapsed +
   ' dias. ' + (signal.kind === 'independent' ? 'Teste independente.' : 'Consulta sem registro.')));
 }
 $('results-retention-signals').replaceChildren(signals.length ? progress :
  el('p', 'results-caption', 'Ainda há pouca evidência de recuperação após um intervalo.'));
}
const studyModeLabels = {
 aprendizagem:'Aprendizagem', revisao:'Revisão', para_valer:'Treino para valer',
 real:'Questões de prova', adaptada:'Questões adaptadas',
 simulado:'Bateria com correção ao final', unknown:'Modalidade sem registro'
};
function renderPrincipleHistory(plan) {
 const target = $('results-principle-history');
 const principles = (plan?.principles || []).filter(p => p.recentEvents?.length &&
  (!selectedSubject || p.subjectId === selectedSubject));
 target.hidden = !principles.length;
 const previous = target.querySelector('select')?.value;
 target.replaceChildren();
 if (!principles.length) return;
 const select = el('select');
 select.id = 'results-principle-select';
 for (const p of principles) {
  const option = el('option', '', title(p.subjectId) + ' · ' + p.title.replace(/^([a-z0-9]+(?:-[a-z0-9]+)+)$/, text => text.replaceAll('-', ' ')));
  option.value = p.subjectId + ':' + p.principleId;
  select.append(option);
 }
 if ([...select.options].some(option => option.value === previous)) select.value = previous;
 const label = el('label', '', 'Conceito');
 label.htmlFor = select.id;
 const report = el('div');
 const renderEvidence = () => {
  const principle = principles[select.selectedIndex];
  const signals = new Map(principle.signals.map(signal => [signal.id, signal.kind]));
  const list = el('ol');
  const results = {correct:'Acerto', incorrect:'Erro', blank:'Em branco'};
  const confidence = {secure:'Seguro', insecure:'Inseguro', guess:'Palpite'};
  for (const event of [...principle.recentEvents].reverse()) {
   const row = el('li');
   const details = [fmtDate(event.date), results[event.result], confidence[event.confidence] || 'Segurança sem registro',
    event.origin === 'site' ? 'Site' : 'Histórico privado'];
   if (event.id === principle.cycleAttemptId) details.push('Início do ciclo atual');
   const signal = signals.get(event.id);
   if (signal === 'independent') details.push('Reteste independente');
   if (signal === 'consultation-unknown') details.push('Reteste com contexto incompleto');
   if (signal === 'same-day-correction') details.push('Correção no mesmo dia');
   if (signal === 'same-day-success') details.push('Acerto no mesmo dia');
   row.append(el('p', '', details.join(' · ')));
   const context = [];
   if (event.daysSincePrevious !== null) context.push('Dias desde a tentativa anterior: ' + event.daysSincePrevious);
   if (event.responseMs != null) context.push('Tempo de resposta: ' + (event.responseMs / 1000).toLocaleString('pt-BR', {maximumFractionDigits:1}) + ' s');
   if (event.correctAnswer != null) context.push('Resposta: ' + (event.answer ?? 'em branco') + ' · Gabarito: ' + event.correctAnswer);
   if (event.mode && Object.hasOwn(studyModeLabels, event.mode)) context.push(studyModeLabels[event.mode]);
   if (typeof event.consulted === 'boolean') context.push(event.consulted ? 'Com consulta' : 'Sem consulta declarada');
   if (typeof event.feedbackBefore === 'boolean') context.push(event.feedbackBefore ? 'Correção já vista' : 'Sem correção prévia declarada');
   if (event.editalRef) context.push(event.editalRef);
   if (context.length) row.append(el('p', 'results-caption', context.join(' · ')));
   list.append(row);
  }
  report.replaceChildren(el('p', 'results-caption', 'Exibindo ' + principle.recentEvents.length +
   ' de ' + principle.attempts + ' tentativa(s) registradas.'), list);
 };
 select.addEventListener('change', renderEvidence);
 target.append(el('h2', '', 'Evidências por princípio'), label, select, report);
 renderEvidence();
}
function renderStudyModes(byMode) {
 const target = $('results-study-modes');
 const modes = Object.entries(byMode || {});
 target.replaceChildren();
 target.hidden = !modes.length;
 if (!modes.length) return;
 const list = el('ul');
 for (const [mode, counts] of modes) {
  const label = Object.hasOwn(studyModeLabels, mode) ? studyModeLabels[mode] : studyModeLabels.unknown;
  const total = counts.correct + counts.incorrect + counts.blank;
  const row = el('li');
  row.append(el('strong', '', label), ' · ' + total + (total === 1 ? ' tentativa' : ' tentativas') +
   ' · ' + counts.correct + (counts.correct === 1 ? ' acerto' : ' acertos') +
   ' · ' + counts.incorrect + (counts.incorrect === 1 ? ' erro' : ' erros') +
   ' · ' + counts.blank + ' em branco');
  list.append(row);
 }
 target.append(el('h3', '', 'Tentativas por modalidade'), list,
  el('p', 'results-caption', 'Os resultados refletem as condições de cada modalidade. A pontuação dos simulados integrais aparece abaixo.'));
}
function render(){
 if(!current)return;
 renderAdaptive(current.adaptive);
 renderStudyModes(current.adaptive?.byMode);
 renderPrincipleHistory(current.adaptive);
 const summary=current.summary||{},source=current.sources||{};
 const valid=summary.valid||0;
 $('results-stats').replaceChildren(
  stat('Questões respondidas',valid),
  stat('Acerto observado',summary.accuracy===null?'Sem amostra':summary.accuracy+'%'),
  ...(current.adaptive ? [
   stat('Revisões pendentes',current.adaptive.principles.filter(p => p.state === 'review-pending').length),
   stat('Acertos inseguros',current.adaptive.insecureCorrect)
  ] : [
   stat('Acertos',summary.correct??0),stat('Erros',summary.incorrect??0)
  ])
 );
 const details=$('results-detailed-stats');
 if(details)details.replaceChildren(
  stat('Acertos',summary.correct??0),
  stat('Erros',summary.incorrect??0),
  ...(current.adaptive ? [
   stat('Erros seguros',current.adaptive.secureErrors),
   stat('Princípios com retenção observada',current.adaptive.principles.filter(p =>
    p.signals.some(signal => signal.kind === 'independent')).length)
  ] : [])
 );
 const competitive = $('results-competitive-simulations');
 competitive.replaceChildren();
 competitive.hidden = !Array.isArray(current.competitiveSimulations);
 if (!competitive.hidden) {
  competitive.append(el('h3', '', 'Pontuação líquida em simulados integrais'));
  if (!current.competitiveSimulations.length) {
   competitive.append(el('p', 'results-caption', 'Nenhum simulado objetivo completo registrado.'));
  } else {
   const list = el('ul');
   for (const sample of current.competitiveSimulations) {
    list.append(el('li', '', fmtDate(sample.date) + ' · ' + sample.total + ' pontos líquidos · P1 ' +
     sample.P1 + ' · P2 ' + sample.P2 + ' · ' +
     (sample.objectiveMinimumMet ? 'Atingiu os mínimos objetivos' : 'Abaixo de pelo menos um mínimo objetivo')));
   }
   competitive.append(list, el('p', 'results-caption', 'O saldo mede o desempenho nesta aplicação. A classificação e a correção da discursiva dependem das regras do concurso.'));
  }
 }
 const origins=$('results-quiz-stats');
 const origin=(label,n)=>{const x=el('span','results-origin-item');x.append(el('strong','',n??0),' '+label);return x;};
 origins.replaceChildren(origin('no ChatGPT',source.chat?.total),origin('no site',source.site?.total));
 const removed=source.siteDuplicatesSkipped||0;
 if(removed)origins.append(origin('registro(s) já presentes no chat, sem duplicar',removed));
 $('results-quiz-status').textContent=source.unmatchedCatalog
   ?source.unmatchedCatalog+' questão(ões) do site sem vínculo editorial no catálogo atual: entram no desempenho, mas não na recomendação de artigo.'
   :'As fontes são lidas no momento do acesso. O histórico original permanece em seus respectivos sistemas.';
 const concepts=current.concepts||[];
 const allArticles=(current.articles||[]).filter(x=>x.mistakes?.length||x.uncertainCorrect?.length);
 const activeArticles=allArticles.filter(x=>!selectedSubject||articleSubject(x,concepts)===selectedSubject);
 $('results-articles').replaceChildren(...(activeArticles.length?activeArticles.map(makeArticle):[el('p','results-caption','Sem artigos com erros ou insegurança para esta matéria.')]));
 const priority=$('results-quiz-priorities');
 const articleGroups=subjectGroups(activeArticles,a=>articleSubject(a,concepts));
 priority.replaceChildren();
 for(const [subject,items] of articleGroups){
  const group=el('section','results-subject-group');
  group.append(subjectHeading(subject,items.length));
  for(const [i,article] of items.entries()){
   const box=el('article','results-quiz-priority'),number=el('span','results-order',String(i+1).padStart(2,'0'));
   const copy=el('div'),meta=manifest.get(article.articleId);
   copy.append(el('strong','',meta?.tituloExibicao||meta?.titulo||'Artigo vinculado'),
    el('small','',article.reason||'Revisão recomendada'),
    el('small','',articleReviewEvidence(article)));
   const first=article.mistakes?.[0]||article.uncertainCorrect?.[0];
   if(first?.section)copy.append(el('small','','Trecho: '+first.section));
   const link=el('a','','Abrir artigo');link.href=articleLink(article,first?.section||'');link.rel='noreferrer';
   box.append(number,copy,link);group.append(box);
  }
  priority.append(group);
 }
 if(!articleGroups.length)priority.append(el('p','results-caption','Sem recomendações de artigo para esta matéria.'));
 $('results-quiz-priority-description').textContent=
  'Recomendações por matéria, reunindo chat e site. A prioridade é relativa; amostras pequenas são sinalizadas.';

 const difficultyRoot=$('results-difficulty');
 const levelNames={'muito-facil':'Muito fácil',facil:'Fácil',media:'Média',dificil:'Difícil','muito-dificil':'Muito difícil','nao-classificada':'Sem classificação'};
 const levels=current.difficulty?.byLevel||[];
 const order=['muito-facil','facil','media','dificil','muito-dificil','nao-classificada'];
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
 const cs=(current.concepts||[]).filter(c=>c.errors||c.uncertain||c.dueOn)
  .filter(c=>!selectedSubject||c.subjectId===selectedSubject);
 const conceptRoot=$('results-concepts');
 conceptRoot.replaceChildren();
 for(const [subject,items] of subjectGroups(cs,c=>c.subjectId)){
  const group=el('section','results-subject-group');
  group.append(subjectHeading(subject,items.length));
  for(const c of items){
   const box=el('div','results-concept'),left=el('div');
   const attempts=Number.isFinite(c.attempts)?c.attempts:0;
   left.append(el('strong','',c.title),
    el('small','',c.errors+' erro(s) em '+attempts+' tentativa(s) · '+c.uncertain+' insegura(s)'+(c.dueOn?' · Revisão: '+fmtDate(c.dueOn):'')),
    el('small','',attempts<3?'Dados insuficientes para avaliar domínio; recomendação provisória.':evidenceLabel(attempts,c.errors||0)));
   conceptLinks(left,c);box.append(left,priorityLabel(c.priority));group.append(box);
  }
  conceptRoot.append(group);
 }
 if(!conceptRoot.children.length)conceptRoot.append(el('p','results-caption','Sem conceitos prioritários para esta matéria.'));
 const filter=$('results-subject-filter');
 const subjects=new Set([...(current.bySubject||[]).map(s=>s.id),...allArticles.map(a=>articleSubject(a,concepts)),...concepts.map(c=>c.subjectId)].filter(Boolean));
 const nextOptions=[['','Todas as matérias'],...[...subjects].sort((a,b)=>title(a).localeCompare(title(b),'pt-BR')).map(s=>[s,title(s)])];
 filter.replaceChildren(...nextOptions.map(([value,label])=>{const option=el('option','',label);option.value=value;return option;}));
 if(selectedSubject&&!subjects.has(selectedSubject))selectedSubject='';
 filter.value=selectedSubject;
 const articleCounts=new Map(),conceptCounts=new Map();
 for(const item of allArticles){const key=articleSubject(item,concepts);articleCounts.set(key,(articleCounts.get(key)||0)+1);}
 for(const item of concepts.filter(c=>c.errors||c.uncertain||c.dueOn)){const key=item.subjectId||'sem-materia';conceptCounts.set(key,(conceptCounts.get(key)||0)+1);}
 const difficultyBySubject=new Map((current.difficulty?.bySubject||[]).map(x=>[x.id,x]));
 $('results-subjects').replaceChildren(...(current.bySubject||[]).map(sub=>{
  const row=el('tr'),judged=sub.correct+sub.incorrect;
  const conf=difficultyBySubject.get(sub.id)?.uncertain||0;
  for(const x of [title(sub.id),sub.total,sub.correct,sub.incorrect,conf,judged?Math.round(1000*sub.correct/judged)/10+'%':'Sem amostra',
   articleCounts.get(sub.id)||0,conceptCounts.get(sub.id)||0])row.append(el('td','',x));
  return row;
 }));
 $('results-unified-method').textContent='Histórico até '+fmtDate(current.cut)+'. '+valid+' tentativas válidas de estudo, sem somar duas vezes um registro identificado nas duas fontes.';
 $('results-legacy').hidden=false;
 root.hidden=false;
 showEditalCoverage();showReviewQueue();showNextStudies();
 showRetests();showCoverage();showConceptTransfer();
 status.textContent='Histórico privado atualizado.';
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
async function catalogLoad(){
 try{
  const r=await fetch('/data/catalogo-materias-por-concurso.json',{cache:'no-store'});
  if(!r.ok)throw Error('catálogo');
  const data=await r.json();
  subjectCatalog=data?.schemaVersion&&Array.isArray(data.contests)?data:null;
 }catch{subjectCatalog=null;}
}
async function loadDiscursiveProposals() {
 try {
  const response = await fetch('/data/propostas-discursivas-camara.json');
  if (!response.ok) return;
  const data = await response.json();
  if (data.concursoId === 'camara-2026' && Array.isArray(data.propostas)) discursiveProposals = data.propostas;
 } catch {
  discursiveProposals = [];
 }
}
async function manifestLoad(){
 try{const r=await fetch('/manifest.json',{cache:'no-store'});if(!r.ok)throw Error('manifesto');const list=await r.json();if(Array.isArray(list))manifest=new Map(list.filter(a=>a.articleId).map(a=>[a.articleId,a]));}
 catch{manifest=new Map();}
}
const quizSyncKey = 'concursos-quiz-sincronizado';
const studyDay = new Intl.DateTimeFormat('sv-SE', {timeZone:'America/Sao_Paulo'});
let lastStudyDay = null, loading = false, pendingRefresh = false;
function refreshIfNeeded(force = false) {
 if (!current || document.hidden) return;
 if (force || lastStudyDay !== studyDay.format(new Date())) pendingRefresh = true;
 if (pendingRefresh && !loading) {
  pendingRefresh = false;
  void load({keepCurrent:true});
 }
}
async function load({keepCurrent = false} = {}){
 const examId=select.value,version=++loadVersion;
 const requestDay = studyDay.format(new Date());
 loading = true;
 if (!keepCurrent) {
  current=null;retests=null;coverageData=null;transferData=null;transferCombined=false;root.hidden=true;
  $('results-login').hidden=true;
  $('results-logout').hidden=true;
  status.textContent='Consultando histórico do chat e do site…';
 }
 try{
  const res=await fetch('/v1/study/unified?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(version!==loadVersion)return;
  if(res.status===401){
   current=null;
   root.hidden=true;
   $('results-logout').hidden=true;
   $('results-login').hidden=false;
   const returnPath=location.origin===WORKER ? location.pathname : '/resultados.html';
   $('results-login').href=WORKER+'/v1/login/github?return='+encodeURIComponent(returnPath);
   status.textContent='Entre com GitHub para consultar seu histórico unificado.';
   return;
  }
  if(!res.ok)throw Error('As fontes não puderam ser reunidas (HTTP '+res.status+').');
  const data=await res.json();
  if(data?.version!==2||data.concursoId!==examId||!data.sources)throw Error('Contrato de diagnóstico desatualizado.');
  if(version!==loadVersion)return;
  current=data;
  lastStudyDay=requestDay;
  transferCombined=data.learning?.version===1&&Array.isArray(data.learning.byConcept);
  transferData=transferCombined?data.learning.byConcept:null;
  const transferInfo=$('results-concept-transfer-description');
  if(transferInfo)transferInfo.textContent=transferCombined
   ?'Combina questões do ChatGPT e do site, com identificador de conceito e enunciados diferentes em dias distintos. Não apresenta textos nem respostas individuais nesta seção. A comparação indica tendência e não comprova domínio.'
   :'A API ainda não fornece evolução conjunta. Exibimos temporariamente apenas as baterias do site, quando disponíveis.';
  $('results-logout').hidden=false;
  render();
  void loadRetests(examId,version);
 }catch(e){
  if(version!==loadVersion)return;
  if (keepCurrent && current) {
   status.textContent='Atualização indisponível. Exibindo a última consulta bem-sucedida.';
   return;
  }
  status.textContent=location.origin===WORKER
   ?'Não foi possível carregar o histórico unificado: '+e.message+' As respostas originais continuam preservadas.'
   :'O diagnóstico privado fica disponível após login no ambiente de estudos.';
  if(location.origin!==WORKER){$('results-login').hidden=false;$('results-login').href=WORKER+'/resultados.html?concurso='+encodeURIComponent(examId);}
 } finally {
  if (version === loadVersion) {
   loading = false;
   if (pendingRefresh) refreshIfNeeded();
  }
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
const initialParams=new URLSearchParams(location.search);
const requestedContest=initialParams.get('concurso');
if([...select.options].some(x=>x.value===requestedContest))select.value=requestedContest;
selectedSubject=initialParams.get('materia')||'';
function syncResultsFilters(){
 const url=new URL(location.href);url.searchParams.set('concurso',select.value);
 if(selectedSubject)url.searchParams.set('materia',selectedSubject);
 else url.searchParams.delete('materia');
 history.replaceState(history.state,'',url);
 const nav=document.querySelector('.results-views-nav');
 if(nav)for(const a of nav.querySelectorAll('a')){
  const target=new URL(a.href);target.searchParams.set('concurso',select.value);
  if(selectedSubject)target.searchParams.set('materia',selectedSubject);
  else target.searchParams.delete('materia');
  a.href=target.href;
 }
}
select.addEventListener('change',()=>{selectedSubject='';syncResultsFilters();load();});
$('results-subject-filter').addEventListener('change',value=>{
 selectedSubject=value.target.value;syncResultsFilters();render();
});
$('results-logout').addEventListener('click',async()=>{
 ++loadVersion;
 current=null;
 loading=false;
 pendingRefresh=false;
 root.hidden=true;
 try{await fetch('/v1/logout',{method:'POST',credentials:'same-origin',headers:{Origin:location.origin}});}catch{}
 current=null;root.hidden=true;status.textContent='Sessão encerrada neste navegador.';$('results-login').hidden=false;$('results-logout').hidden=true;
});
window.addEventListener('pageshow', event => { if (event.persisted) refreshIfNeeded(true); });
document.addEventListener('visibilitychange', () => refreshIfNeeded(true));
window.addEventListener('storage', event => {
 if (event.key !== quizSyncKey) return;
 pendingRefresh = true;
 refreshIfNeeded();
});
window.setInterval(refreshIfNeeded, 60000);
void Promise.all([manifestLoad(),catalogLoad(),loadDiscursiveProposals()]).then(() => load());
})();