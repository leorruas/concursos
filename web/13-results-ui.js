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
let retestLoadFailed=false;
let selectedSubject='',retests=null,coverageData=null,transferData=null,transferCombined=false,quizLearningAttempts=null;
let subjectPeriod='total';
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
 const row=el('article','results-history-article');
 const head=el('div','results-history-article-top');
 const copy=el('div','results-history-article-copy');
 copy.append(el('strong','',name),
  el('small','',article.reason||'Registro de erro ou insegurança'));
 head.append(copy,priorityLabel(article.priority));
 const details=el('div','results-history-article-actions');
 const link=el('a','results-link','Ler artigo');
 link.href=articleLink(article);link.rel='noreferrer';details.append(link);
 const mistakes=article.mistakes||[],uncertain=article.uncertainCorrect||[];
 const count=mistakes.length+uncertain.length;
 const note=el('span','results-history-article-count',
  mistakes.length+' '+(mistakes.length===1?'erro':'erros')+' · '+uncertain.length+' acertos inseguros');
 row.append(head,note,details);
 if(count){
  const disclosure=el('details','results-history-article-evidence');
  if(new URLSearchParams(location.search).get('artigo')===article.articleId)disclosure.open=true;
  disclosure.append(el('summary','','Ver '+count+' '+(count===1?'resposta registrada':'respostas registradas')));
  if(mistakes.length)for(const q of mistakes)disclosure.append(renderQuestion(q,article));
  if(uncertain.length)for(const q of uncertain)disclosure.append(renderQuestion(q,article));
  row.append(disclosure);
 }
 return row;
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
  const units=coverage.units.filter(unit=>!selectedSubject||unit.subjectId===selectedSubject);
  const total=units.reduce((sum,unit)=>sum+unit.items.length,0);
  const evaluated=units.reduce((sum,unit)=>sum+unit.items.filter(item=>item.attempts>0).length,0);
  target.append(el('p','results-coverage-overview',evaluated+' de '+total+' '+(total===1?'referência':'referências')+' com respostas vinculadas'),
   el('p','results-caption','A cobertura conta respostas vinculadas a cada referência exata do edital. A lista de conceitos também inclui respostas registradas por matéria ou tema com referência geral.'));
  for(const unit of units){
   const section=el('section','results-edital-unit');
   const heading=el('div','results-edital-unit-heading');
   const unitName=el('h3','',unit.title);
   const covered=unit.items.filter(item=>item.attempts>0).length;
   heading.append(unitName,el('span','results-edital-unit-total',covered+' / '+unit.items.length+' referências'));
   section.append(heading);
   let description='';
   if(unit.studyStatus==='studied-unassessed')description='Estudo registrado em '+fmtDate(unit.exposition)+'. Sem respostas vinculadas a esta unidade.';
   else if(unit.studyStatus==='confirmed-not-studied')description='Ainda não estudado, conforme registro de '+fmtDate(unit.confirmedNotStudiedOn)+'.';
   else if(unit.studyStatus==='unknown')description='Sem informação suficiente sobre estudo ou respostas.';
   else if(unit.studyStatus==='evaluated')description=unit.evaluated+' respostas associadas à unidade, incluindo referências gerais.';
   if(description)section.append(el('p','results-edital-unit-description',description));
   const list=el('div','results-edital-list');
   for(const item of unit.items){
    const row=el('div','results-edital-row');
    const reference=el('span','results-edital-ref',item.editalRef);
    const count=Number(item.attempts)||0;
    const state=el('span','results-edital-state',count>0
     ?count+' '+(count===1?'resposta vinculada':'respostas vinculadas'):'Sem respostas vinculadas a esta referência');
    if(count>0)state.classList.add('has-results');
    row.append(reference,state);list.append(row);
   }
   if(!unit.items.length)section.append(el('p','results-caption','Sem referências detalhadas neste grupo.'));
   else section.append(list);
   target.append(section);
  }
  const program = subjectCatalog?.programaCamara;
  if (program?.concursoId === current.concursoId && Array.isArray(program.blocks)) {
   const blocks = program.blocks.filter(block => !selectedSubject || block.subjects.includes(selectedSubject));
   if (blocks.length) {
    const official = el('details', 'results-revision-details');
    const count = blocks.reduce((sum, block) => sum + block.codes.split(' ').length, 0);
    official.append(el('summary', '', 'Programa oficial · ' + count + ' itens e subitens numerados'));
    official.append(el('p', 'results-caption', program.sourceVersion + '. As contagens oficiais usam somente vínculos conferidos entre o banco e a numeração do edital.'));
    const list = el('ul');
    for (const block of blocks) {
     const row = el('li');
     const link = el('a', '', block.part + ' · ' + block.title);
     link.href = program.source + '#page=' + block.page;
     const codes = block.codes.split(' ');
     const prefix = block.section + ' / ' + (block.referenceTitle || block.title) + ' / ';
     const linked = new Map();
     for (const unit of units) {
      if (!block.subjects.includes(unit.subjectId)) continue;
      for (const item of unit.items) {
       if (!item.editalRef.startsWith(prefix)) continue;
       const coverageByCode = item.officialCodeAttempts ||
        (item.officialEditalCode ? {[item.officialEditalCode]:item.attempts} : {});
       for (const [code, attempts] of Object.entries(coverageByCode)) {
        if (codes.includes(code)) linked.set(code, (linked.get(code) || 0) + attempts);
       }
      }
     }
     const results = el('ul', 'results-caption');
     for (const code of codes) {
      const attempts = linked.get(code);
      results.append(el('li', '', code + ' · ' + (attempts === undefined ? 'Vínculo ainda não conferido' :
       attempts === 0 ? 'Sem respostas registradas' : attempts + (attempts === 1 ? ' resposta registrada' : ' respostas registradas'))));
     }
     row.append(link, el('p', 'results-caption', block.section + ' · ' +
      [...linked.values()].filter(attempts => attempts > 0).length + ' de ' + codes.length +
      ' códigos com respostas vinculadas'), results);
     list.append(row);
    }
    official.append(list);
    target.append(official);
   }
  }
  if(!selectedSubject&&coverage.unmapped)target.append(el('p','results-caption',
   coverage.unmapped+' tentativa(s) sem correspondência exata com uma referência detalhada do catálogo.'));
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
  transferCombined?transferData||[]:[],selectedSubject,current.adaptive?.principles||[]).slice(0,25);
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
 const queue=window.ResultsStudyPlan.reviewQueue(articles,current.concepts||[],transferCombined?transferData||[]:[],selectedSubject,current.adaptive?.principles||[]);
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
 const report=subjectPeriodData(current,subjectPeriod,new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo'}).format(new Date()));
 const rows=(subjectPeriod==='total'?(current?.difficulty?.bySubject||[]):report.rows)
  .filter(x=>!selectedSubject||x.id===selectedSubject)
  .sort((a,b)=>title(a.id).localeCompare(title(b.id),'pt-BR'));
 if(!rows.length){root.append(el('p','results-caption',report.available?'Sem questões respondidas nesta matéria e período.':'Histórico diário indisponível.'));return;}
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
    el('small','',typeof x.independent==='number'?x.independent+' acerto(s) independente(s) em '+x.independentDays+' dia(s) · '+x.supported+' com apoio · '+x.unknownContext+' sem contexto completo':'Independência não aferida nesta versão dos dados'),
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
function showProgressRetests(){
 const target=$('results-progress-retests');
 if(!target)return;
 target.replaceChildren();
 const principles=current?.adaptive?.principles?.filter(p=>!selectedSubject||p.subjectId===selectedSubject);
 if(principles){
  const confirmed=principles.filter(p=>(p.signals||[]).some(s=>s.kind==='independent')).length;
  const context=el('p','results-caption','Evidência em questões diferentes: '+confirmed+' conceito(s) com acerto seguro após intervalo, sem consulta nem correção prévia declarada. Esta medida não é a taxa dos retestes abaixo.');
  target.append(context);
 }
 if(!retests){
  target.append(el('p','results-caption',retestLoadFailed?'Retestes do site indisponíveis.':'Carregando retestes do site…'));
  return;
 }
 const rows=retests.filter(x=>!selectedSubject||x.subjectId===selectedSubject);
 const sum=field=>rows.reduce((n,x)=>n+(Number(x[field])||0),0);
 const repeated=sum('questions'),correct=sum('latestCorrect');
 if(!repeated){target.append(el('p','results-caption','Nenhuma questão idêntica refeita em dias diferentes no site nesta seleção.'));return;}
 const positive=sum('positive'),insecure=sum('insecure'),persistent=sum('persistent'),reappeared=sum('reappeared');
 const other=Math.max(0,repeated-positive-insecure-persistent-reappeared);
 const share=Math.round(1000*correct/repeated)/10;
 const headline=el('div','results-retest-headline');
 const score=el('div','results-retest-score');
 score.append(el('strong','',share+'%'),el('span','',correct+' de '+repeated+' corretas na última tentativa'));
 headline.append(score,el('p','results-caption','Questões idênticas respondidas em dias diferentes no site. Cada questão entra uma vez: comparamos a primeira resposta com a mais recente. Acerto final pode incluir questão que já estava certa.'));
 const bar=el('div','results-retest-bar');bar.setAttribute('role','img');bar.setAttribute('aria-label',correct+' de '+repeated+' questões corretas na última tentativa');
 const fill=el('span');fill.style.width=share+'%';bar.append(fill);
 const grid=el('div','results-retest-breakdown');
 const metric=(n,label,description)=>{
  const box=el('div','results-retest-metric');
  box.append(el('strong','',n),el('span','',label),el('small','',description));return box;
 };
 grid.append(
  metric(positive,'Erros corrigidos com segurança','Erro inicial e acerto final sem insegurança registrada'),
  metric(insecure,'Erros corrigidos com insegurança','Erro inicial e acerto final declarado inseguro'),
  metric(persistent,'Erros persistentes','Erro na primeira e na última tentativa'),
  metric(reappeared,'Erros que reapareceram','Acerto inicial e erro na última tentativa'),
  metric(other,'Demais percursos','Inclui questões certas desde a primeira tentativa')
 );
 target.append(headline,bar,grid,el('p','results-caption results-retest-footnote','O percentual mostra o resultado final dos retestes, não o ganho de aprendizagem. Este painel considera apenas tentativas do site; os sinais de aprendizagem independente usam critérios diferentes.'));
}
function showRetests(){
 showProgressRetests();
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
   row.append(left);
   if(x.articleId){
    const a=el('a','results-link','Abrir artigo');a.href=articleLink(x,x.section);a.rel='noreferrer';
    row.append(a);
   }
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
 retests=null;retestLoadFailed=false;coverageData=null;
 if(!transferCombined)transferData=null;
 quizLearningAttempts=null;
 $('results-quiz-learning')?.replaceChildren(el('p','results-caption','Carregando contexto das respostas…'));
 try{
  const response=await fetch('/v1/study/quiz?concurso='+encodeURIComponent(examId),{
   credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'}
  });
  if(version!==loadVersion)return;
  if(!response.ok)throw Error('histórico indisponível');
  const data=await response.json();
  if(data?.version!==1||!Array.isArray(data.attempts))throw Error('histórico incompatível');
  const map=await quizQuestions(examId);
  if(version!==loadVersion)return;
  quizLearningAttempts=data.attempts;
  renderQuizLearning(quizLearningAttempts,examId,Date.now());
  retests=window.ResultsRetests.analyze(data.attempts,map,examId);
  coverageData=window.ResultsRetests.coverage(data.attempts,map,examId);
  if(!transferCombined){
   transferData=window.ResultsRetests.conceptTransfer(data.attempts,map,examId);
  }
  showRetests();showCoverage();showConceptTransfer();
 }catch{
  if(version===loadVersion){
   retestLoadFailed=true;
   $('results-quiz-learning')?.replaceChildren(el('p','results-caption','Contexto das respostas do site indisponível.'));
   showProgressRetests();
   $('results-retests').replaceChildren(el('p','results-caption','Retestes indisponíveis. O histórico unificado permanece preservado.'));
  }
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
 if (enabled && select.value === 'camara-2026' && (!selectedSubject || selectedSubject === 'redacao')) {
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
 const activityCount=$('results-review-activity-count');
 if(activityCount)activityCount.textContent=String(ranked.length);
 // O resumo exibe no maximo tres decisoes, sem ocultar a fila completa em Revisoes.
 // Priorizar uma atividade executavel na primeira posicao; a fila preserva prioridades originais.
 const extra = ranked.find(item => item.questionIds?.length) || null;
 const activities = extra ? [extra, ...ranked.filter(item => item !== extra).slice(0, 1)] : ranked.slice(0, 2);
 const firstStudy = ranked.find(item => item.state === 'confirmed-not-studied' && !activities.includes(item) &&
  (item.articles?.length || item.questionIds?.length));
 if (firstStudy && activities.length < 2) activities.push(firstStudy);
 const list = el('ul'), remaining = el('ul');
 // Todas as recomendacoes fora do resumo permanecem na pagina de Revisoes.
 for (const item of [...activities, ...ranked.filter(item => !activities.includes(item))]) {
  const row=el('li','results-study-action-row');
  const copy=el('div','results-study-action-copy');
  const controls=el('div','results-study-action-controls');
  const action=adaptiveActions[item.action]||'Revisar';
  const label=/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(item.title)?item.title.replaceAll('-',' '):item.title;
  if(item===extra)copy.append(el('span','results-study-action-available','Bateria disponível'));
  const meta=el('div','results-study-action-meta');
  meta.append(el('span','results-study-action-subject',title(item.subjectId)),
   el('span','results-study-action-priority','Prioridade '+
    ({high:'alta',medium:'média',low:'baixa'}[item.priority]||'não classificada')));
  copy.append(el('span','results-study-action-kind',action),el('h3','',label),meta);
  const reasons=(Array.isArray(item.rationale)?item.rationale:[])
   .flatMap(text=>String(text).split(/(?<=\.)\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ])/u))
   .map(text=>text.trim()).filter(Boolean)
   .filter(text=>!item.nextReview||!/^Reteste independente previsto para \d{4}-\d{2}-\d{2}\.$/.test(text))
   .filter(text=>text!=='Vínculo com o edital registrado.');
  const reason=reasons.join(' ').replace(/\b(\d{4})-(\d{2})-(\d{2})\b/g,(_,y,m,d)=>d+'/'+m+'/'+y);
  if(reason)copy.append(el('p','results-study-action-reason',reason));
  if(item.questionIds.length){
   const params=new URLSearchParams({concurso:item.concursoId,questoes:item.questionIds.join(',')});
   const link=el('a','results-study-action-primary','Praticar este tema · '+item.quantity+' questão(ões)');
   link.href='questoes.html#'+params.toString();
   controls.append(link);
  }else{
   controls.append(el('span','results-study-action-unavailable','Sem questões novas disponíveis'));
   if(item.repeatQuestionId){
    const params=new URLSearchParams({concurso:item.concursoId,questoes:item.repeatQuestionId,repetir:'1'});
    const link=el('a','results-study-action-secondary','Refazer questão anterior');
    link.href='questoes.html#'+params.toString();
    controls.append(link);
   }
  }
  const ref=item.articles.map(value=>/^article:(art-[a-z0-9]+)(?:#(.*))?$/i.exec(value))
   .find(match=>match&&manifest.has(match[1]));
  if(ref){
   const link=el('a','results-study-action-secondary','Abrir material de estudo');
   link.href=articleLink({articleId:ref[1]},ref[2]);
   controls.append(link);
  }
  if(item.state==='confirmed-not-studied')copy.append(el('p','results-meta',item.selection));
  if(item.nextReview)meta.append(el('span','results-study-action-date','Reteste: '+fmtDate(item.nextReview)));
  row.append(copy,controls);
  if (activities.includes(item)) {
   list.append(row);
   // Revisoes apresenta a fila inteira, inclusive os itens destacados no Resumo.
   remaining.append(row.cloneNode(true));
  } else remaining.append(row);
 }
 const allRevisions=new URL(location.href);
 if(location.origin===WORKER){allRevisions.pathname='/resultados-revisoes.html';allRevisions.searchParams.delete('visao');}
 else allRevisions.searchParams.set('visao','revisoes');
 const viewAll=el('a','results-link','Ver todas as revisões');
 viewAll.href=allRevisions.pathname+allRevisions.search+allRevisions.hash;
 $('results-adaptive-actions').replaceChildren(
  activities.length ? list : el('p','results-caption','Nenhuma atividade prioritária com os registros atuais.'),
  viewAll);
 if (queueSection && queueItems) {
  queueSection.hidden = remaining.children.length === 0;
  const rows=[...remaining.children];
  const batteryPools=ranked.map(item=>[...(Array.isArray(item.questionIds)?item.questionIds:[]),item.repeatQuestionId]
   .filter(id=>typeof id==='string'&&id));
  const batteryIds=[],usedQuestionIds=new Set();
  for(let round=0;batteryIds.length<10&&batteryPools.some(pool=>round<pool.length);round++){
   for(const pool of batteryPools){
    const id=pool[round];
    if(!id||usedQuestionIds.has(id))continue;
    usedQuestionIds.add(id);batteryIds.push(id);
    if(batteryIds.length===10)break;
   }
  }
  const count=el('p','results-concept-count',rows.length+' atividades neste concurso'+
   (selectedSubject?' e matéria':'')+' · mostrando '+Math.min(6,rows.length)+' de '+rows.length);
  const footer=el('div','results-concepts-footer');
  let visibleCount=6;
  function showPage(){
   rows.forEach((row,index)=>{row.hidden=index>=visibleCount;});
   count.textContent=rows.length+' atividades neste concurso'+(selectedSubject?' e matéria':'')+
    ' · mostrando '+Math.min(visibleCount,rows.length)+' de '+rows.length;
   footer.replaceChildren();
   const batch=el('button','results-concept-more','Criar bateria de 10 questões');
   batch.type='button';
   batch.disabled=batteryIds.length<10;
   if(batch.disabled)batch.title='A fila tem '+batteryIds.length+' questões indicadas; são necessárias 10 para criar a bateria.';
   batch.addEventListener('click',()=>{
    if(batteryIds.length<10)return;
    const params=new URLSearchParams({concurso:current?.concursoId||select.value,questoes:batteryIds.join(',')});
    const destination=new URL('questoes.html',location.href);
    destination.hash=params.toString();
    location.assign(destination.href);
   });
   footer.append(batch);
   if(batch.disabled)footer.append(el('span','results-caption','Disponíveis: '+batteryIds.length+' de 10 questões.'));
   if(rows.length>visibleCount){
    const more=el('button','results-concept-more','Mostrar mais '+Math.min(6,rows.length-visibleCount)+' atividades');
    more.type='button';
    more.addEventListener('click',()=>{visibleCount+=6;showPage();});
    footer.append(more);
    const all=el('button','results-concept-more','Mostrar tudo');
    all.type='button';all.addEventListener('click',()=>{visibleCount=rows.length;showPage();});
    footer.append(all);
   }else if(rows.length>6){
    const less=el('button','results-concept-more','Mostrar menos');
    less.type='button';less.addEventListener('click',()=>{visibleCount=6;showPage();});
    footer.append(less);
   }
  }
  queueItems.replaceChildren(count,remaining,footer);
  showPage();
 }
 const signals=plan.principles.flatMap(item=>(item.signals||[]).filter(signal=>Number(signal.elapsed)>0)
  .map(signal=>({...signal,title:item.title,subjectId:item.subjectId})))
  .filter(signal=>!selectedSubject||signal.subjectId===selectedSubject)
  .sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
 const independent=signals.filter(s=>s.kind==='independent');
 const incomplete=signals.filter(s=>s.kind!=='independent');
 const target=$('results-retention-signals');
 target.replaceChildren();
 const intro=el('p','results-caption','Aqui acompanhamos recuperação do conteúdo após um intervalo. Um acerto em questão diferente, sem consulta e sem correção prévia, oferece evidência mais forte que repetir o mesmo enunciado.');
 target.append(intro);
 const summary=el('div','results-retention-summary');
 const number=(count,label)=>{const box=el('div','results-retention-measure');box.append(el('strong','',count),el('span','',label));return box;};
 summary.append(number(independent.length,'Acertos com teste independente'),number(incomplete.length,'Sinais com contexto incompleto'));
 target.append(summary);
 const heading=el('h3','',independent.length?'Evidências recentes':'Ainda sem teste independente confirmado');
 target.append(heading);
 if(!signals.length){
  target.append(el('p','results-caption','Ainda não há sinais registrados de acerto após intervalo. O histórico de erros e os retestes continuam disponíveis.'));
 }else{
  const list=el('ul','results-retention-list');
  for(const signal of signals.slice(0,6)){
   const item=el('li','');
   item.append(el('strong','',signal.title),el('small','',fmtDate(signal.date)+' · '+signal.elapsed+' dia(s) depois · '+
    (signal.kind==='independent'?'Teste independente: sem consulta declarada':'Condições de consulta ou correção não confirmadas')));
   list.append(item);
  }
  target.append(list);
 }
 target.append(el('p','results-caption results-retest-footnote','São sinais de retenção, não prova de domínio. O painel exibe até seis registros recentes e não usa a taxa de acerto de questões repetidas.'));

}
const studyModeLabels = {
 aprendizagem:'Aprendizagem · correção imediata', reteste:'Reteste espaçado · questão diferente', avaliacao:'Avaliação independente · correção final',
 revisao:'Revisão', para_valer:'Treino para valer',
 real:'Questões de prova', adaptada:'Questões adaptadas',
 simulado:'Bateria histórica com correção ao final', unknown:'Modalidade sem registro'
};
function renderPrincipleHistory(plan,concepts){
 const target=$('results-principle-history');
 const principles=(plan?.principles||[]).filter(p=>p.recentEvents?.length&&
  (!selectedSubject||p.subjectId===selectedSubject));
 target.hidden=!principles.length;
 const key=(subject,concept)=>JSON.stringify([subject,concept]);
 const errorCounts=new Map(concepts.map(c=>[key(c.subjectId,c.conceptId),c.errors]));
 const errorsFor=p=>errorCounts.get(key(p.subjectId,p.principleId))||0;
 target.replaceChildren();
 if(!principles.length)return;
 const heading=el('div','results-history-section-header');
 heading.append(el('h2','','Tentativas por conceito'));
 const ranked=selectedSubject?principles.filter(p=>errorsFor(p)>0).sort((a,b)=>
  errorsFor(b)-errorsFor(a)||a.title.localeCompare(b.title,'pt-BR')).slice(0,5):[];
 const labels=new Map();
 for(const p of principles){
  const label=key(p.subjectId,p.title);
  labels.set(label,(labels.get(label)||0)+1);
 }
 const displayWords=value=>/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(value)?value.replaceAll('-',' '):value;
 const readableTitle=p=>{
  const name=displayWords(p.title);
  return labels.get(key(p.subjectId,p.title))>1&&p.principleId!==p.title
   ? name+' · '+displayWords(p.principleId):name;
 };
 const report=el('div','results-history-events');
 function renderEvidence(p){
  const signalMap=new Map((p.signals||[]).map(s=>[s.id,s.kind]));
  const events=[...p.recentEvents].reverse();
  let limit=5;
  const intro=el('p','results-history-count','Mostrando '+Math.min(limit,events.length)+' de '+
   p.attempts+' tentativas registradas para este conceito');
  const list=el('div','results-history-timeline');
  const footer=el('div','results-history-more');
  const resultNames={correct:'Acerto',incorrect:'Erro',blank:'Em branco'};
  const confidence={secure:'segurança declarada',insecure:'insegurança declarada',guess:'palpite declarado'};
  function updateList(){
   intro.textContent='Mostrando '+Math.min(limit,events.length)+' eventos recentes de '+
    p.attempts+' tentativas registradas';
   list.replaceChildren();
   for(const event of events.slice(0,limit)){
    const row=el('div','results-history-event');
    const main=el('div','results-history-event-main');
    const state=el('strong','results-history-event-result',resultNames[event.result]||'Sem resultado');
    if(event.result==='correct')state.classList.add('is-correct');
    if(event.result==='incorrect')state.classList.add('is-incorrect');
    const date=el('span','results-history-event-date',fmtDate(event.date));
    const source=el('span','results-history-event-source',event.origin==='site'?'Site':'ChatGPT / cofre');
    main.append(date,state,source);row.append(main);
    const badges=[];
    if(event.id===p.cycleAttemptId)badges.push('Início do ciclo atual');
    const kind=signalMap.get(event.id);
    if(kind==='independent')badges.push('Reteste independente');
    if(kind==='consultation-unknown')badges.push('Contexto do reteste incompleto');
    if(kind==='same-day-correction')badges.push('Correção no mesmo dia');
    if(kind==='supported-correct')badges.push('Acerto com apoio: reteste independente necessário');
    if(kind==='same-day-success')badges.push('Acerto no mesmo dia');
    if(badges.length)row.append(el('p','results-history-event-signal',badges.join(' · ')));
    const context=[];
    if(event.correctAnswer!=null)context.push('Resposta: '+(event.answer??'em branco')+
     ' · Gabarito: '+event.correctAnswer);
    if(event.confidence)context.push(confidence[event.confidence]||'Segurança não registrada');
    if(event.daysSincePrevious!=null)context.push(event.daysSincePrevious+' dias desde a tentativa anterior');
    if(event.mode&&Object.hasOwn(studyModeLabels,event.mode))context.push(studyModeLabels[event.mode]);
    if(typeof event.consulted==='boolean')context.push(event.consulted?'Com consulta':'Sem consulta declarada');
    if(typeof event.feedbackBefore==='boolean')context.push(event.feedbackBefore?'Correção já vista':'Sem correção prévia declarada');
    if(event.editalRef)context.push(event.editalRef);
    if(event.responseMs!=null)context.push((event.responseMs/1000).toLocaleString('pt-BR',{maximumFractionDigits:1})+' s de resposta');
    if(context.length)row.append(el('p','results-history-event-context',context.join(' · ')));
    list.append(row);
   }
   footer.replaceChildren();
   if(events.length>limit){
    const more=el('button','results-concept-more','Mostrar mais '+Math.min(5,events.length-limit)+' eventos');
    more.type='button';more.addEventListener('click',()=>{limit+=5;updateList();});footer.append(more);
   }else if(events.length>5){
    const less=el('button','results-concept-more','Mostrar menos');
    less.type='button';less.addEventListener('click',()=>{limit=5;updateList();});footer.append(less);
   }
  }
  report.replaceChildren(el('h3','',readableTitle(p)),intro,list,footer);updateList();
 }
 target.append(heading);
 const priorities=el('div','results-history-priorities');
 if(selectedSubject){
  priorities.append(el('h3','','Conceitos com mais erros'));
  if(!ranked.length)priorities.append(el('p','results-caption','Nenhum erro registrado nos conceitos desta matéria.'));
  else{
   const list=el('ol');
   for(const p of ranked){
    const row=el('li');
    const button=el('button','results-history-priority-button',readableTitle(p));
    button.type='button';
    button.setAttribute('aria-pressed',String(p===ranked[0]));
    button.addEventListener('click',()=>{
     for(const item of list.querySelectorAll('button'))item.setAttribute('aria-pressed',String(item===button));
     renderEvidence(p);
    });
    const errors=errorsFor(p);
    const count=el('span','results-caption',errors+(errors===1?' erro':' erros'));
    row.append(button,count);list.append(row);
   }
   priorities.append(list);
  }
 }else priorities.append(el('p','results-caption','Selecione uma matéria para ver os conceitos com mais erros.'));
 target.append(priorities);
 if(ranked.length){target.append(report);renderEvidence(ranked[0]);}
}
function renderStudyModes(byMode) {
 const target=$('results-study-modes');
 const modes=Object.entries(byMode||{});
 target.replaceChildren();target.hidden=!modes.length;
 if(!modes.length)return;
 const heading=el('div','results-modes-heading');
 heading.append(el('h2','','Tentativas por modalidade'),
  el('p','results-caption','Cada modalidade tem condições de resposta diferentes.'));
 const list=el('div','results-modes-list');
 for(const [mode,counts] of modes){
  const label=Object.hasOwn(studyModeLabels,mode)?studyModeLabels[mode]:studyModeLabels.unknown;
  const correct=Number(counts.correct)||0,incorrect=Number(counts.incorrect)||0,blank=Number(counts.blank)||0;
  const total=correct+incorrect+blank;
  const row=el('div','results-mode-row');
  const info=el('div','results-mode-name');info.append(el('strong','',label));
  const measure=el('div','results-mode-measures');
  measure.append(el('strong','results-mode-total',total+' '+(total===1?'tentativa':'tentativas')),
   el('span','results-mode-breakdown',correct+' acertos · '+incorrect+' erros'+(blank?' · '+blank+' em branco':'')));
  row.append(info,measure);list.append(row);
 }
 target.append(heading,list);
}
function renderQuestionOrigins(rows,followups){
 const modes=$('results-study-modes');
 modes.querySelector('.results-question-origins')?.remove();
 if(!Array.isArray(rows)||!rows.length)return;
 modes.hidden=false;
 const labels={
  official:'Questões oficiais', 'calibrated-author':'Autorais calibradas',
  'learning-author':'Autorais de aprendizagem', adapted:'Adaptadas', unknown:'Origem sem registro'
 };
 const format=new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1});
 const section=el('section','results-question-origins');
 section.append(el('h2','','Desempenho por origem da questão'),
  el('p','results-caption','Total do concurso. A taxa considera acertos e erros. Compare também o volume e a composição das questões.'));
 const list=el('div','results-modes-list');
 for(const [id,label] of Object.entries(labels)){
  const data=rows.find(row=>row.id===id);
  if(!data)continue;
  const row=el('div','results-mode-row');
  const info=el('div','results-mode-name');info.append(el('strong','',label));
  const measure=el('div','results-mode-measures');
  const rate=data.accuracy==null?'—':format.format(data.accuracy)+'%';
  measure.append(el('strong','results-mode-total',rate),
   el('span','results-mode-breakdown',data.correct+' acertos · '+data.incorrect+' erros'+
    (data.blank?' · '+data.blank+' em branco':'')));
  row.append(info,measure);list.append(row);
 }
 section.append(list);
 const comparisons=[
  ['De autoral para oficial',followups?.transfer?.authorToOfficial],
  ['De oficial para autoral',followups?.transfer?.officialToAuthor],
  ['Revisão com outra autoral',followups?.retention?.author],
  ['Revisão com outra oficial',followups?.retention?.official]
 ].filter(([,counts])=>counts && counts.correct+counts.incorrect>0);
 if(comparisons.length){
  section.append(el('h3','','Questões diferentes em dias posteriores'),
   el('p','results-caption','Mesmo conceito. A resposta posterior foi dada sem consulta ou ajuda prévia.'));
  const comparisonList=el('div','results-modes-list');
  for(const [label,counts] of comparisons){
   const row=el('div','results-mode-row');
   row.append(el('strong','results-mode-name',label),
    el('span','results-mode-breakdown',counts.correct+' acertos · '+counts.incorrect+' erros'));
   comparisonList.append(row);
  }
  section.append(comparisonList);
 }
 modes.append(section);
}
function subjectPeriodData(data,period,today){
 const historical=data?.bySubject||[];
 if(period==='total')return {available:true,rows:historical,start:null,end:null,undated:0};
 const days=Number(period),weeks=data?.weekly?.weeks;
 if(![30,60].includes(days)||!Array.isArray(weeks)||!/^\d{4}-\d{2}-\d{2}$/.test(today))return {available:false,rows:[],start:null,end:null,undated:0};
 const startDate=new Date(today+'T12:00:00Z');
 if(!Number.isFinite(startDate.getTime())||startDate.toISOString().slice(0,10)!==today)return {available:false,rows:[],start:null,end:null,undated:0};
 startDate.setUTCDate(startDate.getUTCDate()-days+1);
 const start=startDate.toISOString().slice(0,10),map=new Map(),seen=new Set();
 for(const week of weeks)for(const day of week?.days||[]){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(day?.date)||day.date<start||day.date>today||seen.has(day.date))continue;
  seen.add(day.date);
  for(const x of day.subjects||[]){
   const id=x.subjectId||'sem-materia';
   if(!map.has(id))map.set(id,{id,total:0,correct:0,incorrect:0,blank:0});
   const v=map.get(id);
   for(const f of ['total','correct','incorrect','blank'])v[f]+=Number(x[f])||0;
  }
 }
 return {available:true,rows:[...map.values()].sort((a,b)=>b.total-a.total||a.id.localeCompare(b.id)),start,end:today,undated:Number(data.weekly.withoutDate)||0};
}
function renderSubjectPeriod(){
 const root=$('results-subjects'),control=$('results-subject-period'),note=$('results-subject-period-note');
 if(!root||!current)return;
 if(control)control.value=subjectPeriod;
 const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo'}).format(new Date());
 const report=subjectPeriodData(current,subjectPeriod,today),all=subjectPeriod==='total';
 const subjectRows=report.rows.filter(x=>!selectedSubject||x.id===selectedSubject);
 const articleCounts=new Map(),conceptCounts=new Map(),concepts=current.concepts||[];
 for(const item of (current.articles||[]).filter(a=>a.mistakes?.length||a.uncertainCorrect?.length)){const key=articleSubject(item,concepts);articleCounts.set(key,(articleCounts.get(key)||0)+1);}
 for(const item of concepts.filter(c=>c.errors||c.uncertain||c.dueOn)){const key=item.subjectId||'sem-materia';conceptCounts.set(key,(conceptCounts.get(key)||0)+1);}
 const difficultyBySubject=new Map((current.difficulty?.bySubject||[]).map(x=>[x.id,x]));
 if(note)note.textContent=!report.available?'O histórico diário necessário para este período está indisponível.':all?'Todo o histórico registrado. Recomendações de revisão acumuladas.':fmtDate(report.start)+' a '+fmtDate(report.end)+' · inclui hoje'+(report.undated?' · registros sem data excluídos':'')+'. Recomendações e cobertura do edital continuam acumuladas.';
 root.replaceChildren(...subjectRows.map(sub=>{
  const row=el('div','results-subject-row'),copy=el('div','results-subject-copy');
  const judged=sub.correct+sub.incorrect,uncertain=all?(difficultyBySubject.get(sub.id)?.uncertain||0):null;
  copy.append(el('strong','results-subject-name',title(sub.id)),el('small','results-subject-detail',sub.correct+' acertos · '+sub.incorrect+' erros'+(sub.blank?' · '+sub.blank+' em branco':'')+(uncertain?' · '+uncertain+' respostas inseguras':'')));
  const figures=el('div','results-subject-figures');
  figures.append(el('span','results-subject-total',sub.total+' '+(sub.total===1?'resposta':'respostas')),el('strong','results-subject-percentage',judged?Math.round(1000*sub.correct/judged)/10+'% de acerto':'Sem amostra'),el('small','results-subject-recommendations',(articleCounts.get(sub.id)||0)+' artigos · '+(conceptCounts.get(sub.id)||0)+' conceitos para revisar (histórico)'));
  row.append(copy,figures);return row;
 }));
 if(!root.children.length)root.append(el('p','results-caption',report.available?'Nenhuma resposta registrada neste período e matéria.':'Desempenho no período indisponível.'));
}
function observedAccuracyPeriods(data,today){
 const weeks=data?.weekly?.weeks;
 if(!Array.isArray(weeks)||!/^\d{4}-\d{2}-\d{2}$/.test(today))return {week:null,month:null,available:false};
 const now=new Date(today+'T12:00:00Z');
 const monday=new Date(now);
 monday.setUTCDate(now.getUTCDate()-(now.getUTCDay()+6)%7);
 const weekStart=monday.toISOString().slice(0,10),monthStart=today.slice(0,7)+'-01';
 const sums={week:{correct:0,incorrect:0},month:{correct:0,incorrect:0}},seen=new Set();
 for(const period of weeks)for(const day of (Array.isArray(period?.days)?period.days:[])){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(day?.date)||day.date>today||seen.has(day.date))continue;
  seen.add(day.date);
  if(day.date<weekStart&&day.date<monthStart)continue;
  const subjects=Array.isArray(day.subjects)?day.subjects:[];
  const correct=subjects.reduce((n,x)=>n+(Number(x.correct)||0),0);
  const incorrect=subjects.reduce((n,x)=>n+(Number(x.incorrect)||0),0);
  if(day.date>=weekStart){sums.week.correct+=correct;sums.week.incorrect+=incorrect;}
  if(day.date>=monthStart){sums.month.correct+=correct;sums.month.incorrect+=incorrect;}
 }
 const rate=x=>x.correct+x.incorrect?Math.round(1000*x.correct/(x.correct+x.incorrect))/10:null;
 return {week:rate(sums.week),month:rate(sums.month),available:true};
}
function render(){
 if(!current)return;
 if(quizLearningAttempts)renderQuizLearning(quizLearningAttempts,current.concursoId,Date.now());
 renderAdaptive(current.adaptive);
 renderStudyModes(current.adaptive?.byMode);
 renderQuestionOrigins(current.questionOrigins,current.originFollowups);
 renderPrincipleHistory(current.adaptive,current.concepts||[]);
 const summary=current.summary||{},source=current.sources||{};
 const valid=summary.valid||0;
 const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo'}).format(new Date());
 const periods=observedAccuracyPeriods(current,today);
 const rate=value=>!periods.available?'Indisponível':value===null?'Sem amostra':value+'%';
 $('results-stats').replaceChildren(
  stat('Questões respondidas',valid),
  stat('Acerto observado · total',summary.accuracy==null?'Sem amostra':summary.accuracy+'%'),
  stat('Acerto observado · semana',rate(periods.week)),
  stat('Acerto observado · mês',rate(periods.month)),
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
 competitive.hidden = !Array.isArray(current.competitiveSimulations)&&!current.independentAssessments;
 if (!competitive.hidden) {
  if(current.independentAssessments){
   competitive.append(el('h3','','Avaliações independentes'));
   const sessions=current.independentAssessments.sessions||[];
   if(!sessions.length)competitive.append(el('p','results-caption','Nenhuma avaliação independente registrada.'));
   else{
    const list=el('ul');
    for(const sample of sessions){
     const subjects=(sample.bySubject||[]).map(row=>title(row.subjectId)+': '+row.net+'/'+row.total).join(' · ');
     list.append(el('li','',fmtDate(sample.date)+' · '+sample.net+' pontos líquidos em '+sample.total+
      ' itens ('+sample.netPercent+'%) · '+sample.correct+' acertos, '+sample.incorrect+' erros, '+sample.blank+' em branco'+
      (sample.secureErrors?' · '+sample.secureErrors+' erros com segurança':'' )+
      (sample.insecureCorrect?' · '+sample.insecureCorrect+' acertos inseguros':'' )+
      (subjects?' · '+subjects:'')));
    }
    competitive.append(list);
   }
   const milestones=current.independentAssessments.milestones;
   if(Array.isArray(milestones)&&milestones.length){
    const section=el('section','results-assessment-milestones');
    section.append(el('h4','','Metas intermediárias de acerto'));
    const rows=el('div','results-modes-list');
    for(const milestone of milestones){
     if(!/^\d{4}-\d{2}-\d{2}$/.test(milestone?.date)||!Number.isFinite(milestone.targetAccuracy))continue;
     const latest=sessions.filter(sample=>/^\d{4}-\d{2}-\d{2}$/.test(sample?.date)&&sample.date<=milestone.date)
      .sort((a,b)=>a.date.localeCompare(b.date)).at(-1);
     const row=el('div','results-mode-row');
     row.append(el('strong','results-mode-name',fmtDate(milestone.date)+' · '+milestone.targetAccuracy+'%'));
     let status='';
     if(!latest)status=today<=milestone.date?'Nenhuma avaliação independente registrada até o momento.':'Sem avaliação independente até o prazo.';
     else{
      const judged=(Number(latest.correct)||0)+(Number(latest.incorrect)||0);
      if(judged<50)status='Amostra insuficiente: '+judged+' respostas julgáveis (mínimo 50).';
      else if(latest.accuracy==null)status='Sem respostas julgáveis para calcular a taxa de acerto.';
      else{
       const result=latest.accuracy>=milestone.targetAccuracy
        ?(latest.date<milestone.date?'Meta atingida antes do prazo.':'Meta atingida.')
        :today<=milestone.date?'Em andamento.':'Meta não atingida até o prazo.';
       status=latest.accuracy+'% na avaliação de '+fmtDate(latest.date)+' · '+judged+' respostas julgáveis · '+result;
      }
     }
     row.append(el('span','results-mode-breakdown',status));rows.append(row);
    }
    if(rows.childElementCount)section.append(rows,
     el('p','results-caption','Estas metas acompanham percentual de acerto em avaliação independente. Não são pontuação líquida nem previsão de nota; amostras abaixo de 50 respostas julgáveis são insuficientes.'));
    competitive.append(section);
   }
   competitive.append(el('p','results-caption','A pontuação líquida usa +1 por acerto, −1 por erro e 0 em branco. Pool de 100 itens: amostra parcial, não substitui a prova integral de 180 itens; a meta competitiva de referência é 171/180 (95%), separada das metas de percentual de acerto.'));
  }
  if(Array.isArray(current.competitiveSimulations)){
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
  } else {
   competitive.append(el('p','results-caption','Simulados integrais não estão disponíveis para este concurso.'));
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
 const reviewContest=$('results-review-contest-name');
 if(reviewContest)reviewContest.textContent='Revisões: '+select.options[select.selectedIndex].textContent+
  (selectedSubject?' · '+title(selectedSubject):'');
 const articleCount=$('results-review-article-count');
 if(articleCount)articleCount.textContent=String(activeArticles.length);
 const articleTarget=$('results-articles');
 articleTarget.replaceChildren();
 if(!activeArticles.length)articleTarget.append(el('p','results-caption','Sem artigos com erros ou insegurança para esta matéria.'));
 else{
  const count=el('p','results-history-count');
  const list=el('div','results-history-article-list');
  const footer=el('div','results-history-more');
  let limit=5;
  const update=()=>{
   count.textContent='Mostrando '+Math.min(limit,activeArticles.length)+' de '+activeArticles.length+' artigos com evidências';
   list.replaceChildren(...activeArticles.slice(0,limit).map(makeArticle));
   footer.replaceChildren();
   if(activeArticles.length>limit){
    const more=el('button','results-concept-more','Mostrar mais '+Math.min(5,activeArticles.length-limit)+' artigos');
    more.type='button';more.addEventListener('click',()=>{limit+=5;update();});footer.append(more);
   }else if(activeArticles.length>5){
    const less=el('button','results-concept-more','Mostrar menos');
    less.type='button';less.addEventListener('click',()=>{limit=5;update();});footer.append(less);
   }
  };
  articleTarget.append(count,list,footer);update();
 }
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
 const allArticleRows=[...priority.querySelectorAll('.results-quiz-priority')];
 if(allArticleRows.length>5){
  const headline=el('p','results-concept-count');
  const footer=el('div','results-concepts-footer');
  let visible=5;
  function showArticles(){
   allArticleRows.forEach((row,i)=>{row.hidden=i>=visible;});
   for(const group of priority.querySelectorAll('.results-subject-group'))
    group.hidden=![...group.querySelectorAll('.results-quiz-priority')].some(row=>!row.hidden);
   headline.textContent=allArticleRows.length+' artigos para revisar · mostrando '+
    Math.min(visible,allArticleRows.length)+' de '+allArticleRows.length;
   footer.replaceChildren();
   if(visible<allArticleRows.length){
    const button=el('button','results-concept-more','Mostrar mais '+Math.min(5,allArticleRows.length-visible)+' artigos');
    button.type='button';button.addEventListener('click',()=>{visible+=5;showArticles();});
    footer.append(button);
   }else{
    const button=el('button','results-concept-more','Mostrar menos artigos');
    button.type='button';button.addEventListener('click',()=>{visible=5;showArticles();});
    footer.append(button);
   }
  }
  priority.prepend(headline);priority.append(footer);showArticles();
 }else if(allArticleRows.length){
  priority.prepend(el('p','results-concept-count',allArticleRows.length+' artigos para revisar'));
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
 cs.sort((a,b)=>(Number(b.priority)||0)-(Number(a.priority)||0)||
  (Number(b.errors)||0)-(Number(a.errors)||0));
 const conceptCount=$('results-review-concept-count');
 if(conceptCount)conceptCount.textContent=String(cs.length);
 const conceptRoot=$('results-concepts');
 conceptRoot.replaceChildren();
 const conceptToolbar=el('div','results-concepts-toolbar');
 const count=el('p','results-concept-count');
 count.setAttribute('role','status');count.setAttribute('aria-live','polite');
 const search=el('input','results-concept-search');
 search.type='search';search.placeholder='Buscar conceito ou matéria';
 search.setAttribute('aria-label','Buscar conceitos para revisão');
 const explanation=el('p','results-caption','Os conceitos vêm de respostas registradas no ChatGPT e no site. O banco de exercícios e os links de teoria são vínculos separados.');
 const list=el('div','results-concepts-list');
 const footer=el('div','results-concepts-footer');
 conceptToolbar.append(count,search);
 conceptRoot.append(explanation,conceptToolbar,list,footer);
 let shown=8;
 const renderConceptList=()=>{
  const term=search.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const filtered=cs.filter(c=>!term||
   (c.title+' '+title(c.subjectId)).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(term));
  const total=filtered.length;
  const visible=filtered.slice(0,shown);
  const subjects=new Set(filtered.map(c=>c.subjectId).filter(Boolean)).size;
  count.textContent=total+' '+(total===1?'conceito':'conceitos')+' em '+subjects+
   (subjects===1?' matéria':' matérias')+' · mostrando '+visible.length+' de '+total;
  list.replaceChildren();
  const groups=subjectGroups(visible,c=>c.subjectId);
  for(const [subject,items] of groups){
   const group=el('section','results-concept-group');
   const heading=el('h3','results-concept-group-title',title(subject));
   const subjectTotal=filtered.filter(c=>c.subjectId===subject).length;
   heading.append(el('span','results-concept-group-count',subjectTotal+' conceitos'));
   group.append(heading);
   for(const c of items){
    const row=el('div','results-concept-compact');
    const heading=el('strong','',c.title);
    const attempts=Number.isFinite(c.attempts)?c.attempts:0;
    const signals=el('small','',c.errors+' erros · '+c.uncertain+' inseguros · '+attempts+' tentativas');
    const info=el('div','results-concept-compact-copy');
    info.append(heading,signals);
    const articleId=(Array.isArray(c.articles)?c.articles:[]).find(id=>manifest.has(id));
    if(articleId){
     const link=el('a','results-link','Ler artigo');
     link.href=articleLink({articleId});link.rel='noreferrer';info.append(link);
    }else{
     info.append(el('small','','Sem artigo vinculado no catálogo atual.'));
    }
    row.append(info,priorityLabel(c.priority));group.append(row);
   }
   list.append(group);
  }
  if(!total)list.append(el('p','results-caption','Nenhum conceito encontrado para este filtro.'));
  footer.replaceChildren();
  if(total>shown){
   const more=el('button','results-concept-more','Mostrar mais '+Math.min(8,total-shown)+' conceitos');
   more.type='button';
   more.addEventListener('click',()=>{shown+=8;renderConceptList();});
   footer.append(more);
  } else if(total>8){
   const less=el('button','results-concept-more','Mostrar menos');
   less.type='button';
   less.addEventListener('click',()=>{shown=8;renderConceptList();});
   footer.append(less);
  }
 };
 search.addEventListener('input',()=>{shown=8;renderConceptList();});
 renderConceptList();
 const filter=$('results-subject-filter');
 const subjects=new Set([...(current.bySubject||[]).map(s=>s.id),...allArticles.map(a=>articleSubject(a,concepts)),...concepts.map(c=>c.subjectId)].filter(Boolean));
 const nextOptions=[['','Todas as matérias'],...[...subjects].sort((a,b)=>title(a).localeCompare(title(b),'pt-BR')).map(s=>[s,title(s)])];
 filter.replaceChildren(...nextOptions.map(([value,label])=>{const option=el('option','',label);option.value=value;return option;}));
 if(selectedSubject&&!subjects.has(selectedSubject))selectedSubject='';
 filter.value=selectedSubject;
 renderSubjectPeriod();
 $('results-unified-method').textContent='Histórico até '+fmtDate(current.cut)+'. '+valid+' tentativas válidas de estudo, sem somar duas vezes um registro identificado nas duas fontes.';
 $('results-legacy').hidden=false;
 root.hidden=false;
 showEditalCoverage();showReviewQueue();showNextStudies();
 showRetests();showCoverage();showConceptTransfer();
 status.textContent='Histórico privado atualizado.';
}

/* Recomendações de leitura das baterias do site, calculadas somente após autenticação. */
let quizBank=null,cguQuizBank=null,loadVersion=0;
async function quizQuestions(examId){
 if(!quizBank){
  const response=await fetch('/data/questoes-publicas.json',{cache:'no-store'});
  if(!response.ok)throw Error('Banco de questões indisponível');
  const catalog=await response.json();
  if(catalog.version!==1||!Array.isArray(catalog.questions))throw Error('Catálogo incompatível');
  quizBank=new Map(catalog.questions.map(q=>[q.id,q]));
 }
 if(examId!=='cgu-2026')return quizBank;
 if(!cguQuizBank)cguQuizBank=(async()=>{
  const response=await fetch('/v1/study/cgu-catalog',{credentials:'same-origin',cache:'no-store'});
  if(!response.ok)throw Error('Acervo indisponível');
  const catalog=await response.json();
  if(catalog.version!==1||catalog.concursoId!=='cgu-2026'||!Array.isArray(catalog.questions))
   throw Error('Formato inválido');
  return new Map([...catalog.questions.map(q=>[q.id,q]),...quizBank]);
 })().catch(()=>{cguQuizBank=null;return quizBank;});
 return cguQuizBank;
}
function quizLearningSignals(attempts,examId,subjectId='',now=Date.now()){
 const eligible=attempts.filter(a=>a?.concursoId===examId&&(!subjectId||a.subjectId===subjectId)
  &&['correct','incorrect','blank'].includes(a.result)&&Number.isFinite(Number(a.answeredAt)));
 const summarize=(list)=>{
  const judged=list.filter(a=>a.result!=='blank');
  const recorded=judged.filter(a=>typeof a.consulted==='boolean'&&typeof a.feedbackBefore==='boolean');
  const correct=judged.filter(a=>a.result==='correct');
  const independent=correct.filter(a=>a.consulted===false&&a.feedbackBefore===false);
  return {total:list.length,judged:judged.length,withMetadata:recorded.length,correct:correct.length,
   independent:independent.length,independentSecure:independent.filter(a=>a.confidence==='secure').length,
   consultedCorrect:correct.filter(a=>a.consulted===true).length,
   seenCorrectionCorrect:correct.filter(a=>a.feedbackBefore===true).length,
   supportedCorrect:correct.filter(a=>a.consulted===true||a.feedbackBefore===true).length,
   missingMetadata:judged.length-recorded.length};
 };
 return {all:summarize(eligible),week:summarize(eligible.filter(a=>Number(a.answeredAt)>=now-7*86400000&&Number(a.answeredAt)<=now)),
  month:summarize(eligible.filter(a=>Number(a.answeredAt)>=now-30*86400000&&Number(a.answeredAt)<=now))};
}
function renderQuizLearning(attempts,examId,now){
 const root=$('results-quiz-learning');
 if(!root)return;
 const data=quizLearningSignals(attempts,examId,selectedSubject,now);
 const percent=(n,d)=>d?(100*n/d).toFixed(0)+'%':'Sem amostra';
 const show=(name,item)=>{
  const row=el('div','results-mode-row');
  const info=el('div','results-mode-name'),values=el('div','results-mode-measures');
  info.append(el('strong','',name),el('span','results-caption',item.judged+' respostas julgadas · '+item.withMetadata+' com contexto completo'));
  values.append(el('strong','results-mode-total',item.independent+' acertos independentes ('+percent(item.independent,item.judged)+')'),
   el('span','results-mode-breakdown',item.consultedCorrect+' acertos com consulta · '+item.seenCorrectionCorrect+' após correção'),
   el('span','results-mode-breakdown',item.independentSecure+' independentes com segurança · '+item.missingMetadata+' sem dados completos'));
  row.append(info,values);return row;
 };
 root.replaceChildren(show('Últimos 7 dias',data.week),show('Últimos 30 dias',data.month),
  el('p','results-caption','Indicadores sobre respostas do site. Consulta e correção prévia podem coincidir. Acerto independente: acerto com ambos os campos registrados como falsos; não comprova retenção. Registros antigos sem esses campos permanecem fora dessa classificação.'));
}
function quizPriorityGroups(attempts,questionMap,examId,cutoff){
 const groups=new Map();
 for(const a of attempts){
  if(a.concursoId!==examId||(cutoff&&Number(a.answeredAt)<cutoff))continue;
  const q=questionMap.get(a.questionId);
  if(!q?.articleId||q.concursoId!==examId)continue;
  const error=a.result==='incorrect',unsure=a.result==='correct'&&a.confidence==='insecure',blank=a.result==='blank';
  const assisted=a.result==='correct'&&(a.consulted===true||a.feedbackBefore===true);
  if(!error&&!unsure&&!blank&&!assisted)continue;
  // Acerto com apoio é uma oportunidade de reteste independente, sem equivaler a erro.
  const weight=error?(a.confidence==='secure'?8:6):blank?1:Math.max(unsure?2:0,assisted?3:0);
  const g=groups.get(q.articleId)||{articleId:q.articleId,score:0,errors:0,secureErrors:0,uncertainCorrect:0,blanks:0,sections:new Map()};
  g.score+=weight;
  if(error){g.errors++;if(a.confidence==='secure')g.secureErrors++;}
  if(unsure)g.uncertainCorrect++;
  if(blank)g.blanks++;
  if(assisted)g.assistedCorrect=(g.assistedCorrect||0)+1;
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
 if(g.assistedCorrect)p.push(g.assistedCorrect+' acerto'+(g.assistedCorrect===1?'':'s')+' com consulta ou correção prévia');
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
  ?'Ordem sugerida por erros, acertos inseguros e acertos com apoio dos últimos 30 dias. Indica onde retestar sem consulta, não mede retenção.'
  :'Sem erros, acertos inseguros, acertos com apoio ou respostas em branco registrados nos últimos 30 dias.';
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
  renderQuizLearning(attempts,examId,now);
  try{showQuizPriorities(attempts,await quizQuestions(examId),examId,now);}
  catch{$('results-quiz-priority-description').textContent='Seus resultados foram recuperados, mas os vínculos com os artigos estão temporariamente indisponíveis.';}
  statusQuiz.textContent=attempts.length
   ?'Respostas sincronizadas no banco privado. As prioridades abaixo já incluem suas tentativas do site.'
   :'Ainda não há questões sincronizadas para este concurso.';
  return {authenticated:true};
 }catch(e){
  if(version!==loadVersion)return {authenticated:false,stale:true};
  $('results-quiz-learning')?.replaceChildren();
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
  current=null;retests=null;coverageData=null;transferData=null;transferCombined=false;quizLearningAttempts=null;root.hidden=true;
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
   const safeContest=[...select.options].some(o=>o.value===select.value)?select.value:'camara-2026';
   const returnQuery=new URLSearchParams({concurso:safeContest});
   if(/^[a-z0-9-]{1,100}$/.test(selectedSubject))returnQuery.set('materia',selectedSubject);
   const returnPage=location.origin===WORKER ? location.pathname : '/resultados.html';
   const returnPath=returnPage+'?'+returnQuery.toString();
   $('results-login').href=WORKER+'/v1/login/github?return='+encodeURIComponent(returnPath);
   status.textContent='Entre com GitHub para consultar seu histórico unificado.';
   return;
  }
  if(!res.ok)throw Error('As fontes não puderam ser reunidas (HTTP '+res.status+').');
  const data=await res.json();
  if(data?.version!==2||data.concursoId!==examId||!data.sources)throw Error('Contrato de diagnóstico desatualizado.');
  if(version!==loadVersion)return;
  current=data;
  retestLoadFailed=false;
  lastStudyDay=requestDay;
  transferCombined=data.learning?.version===1&&Array.isArray(data.learning.byConcept);
  transferData=transferCombined?data.learning.byConcept:null;
  const transferInfo=$('results-concept-transfer-description');
  if(transferInfo)transferInfo.textContent=transferCombined
   ?'Combina questões do ChatGPT e do site, com identificador de conceito e enunciados diferentes em dias distintos. Não apresenta textos nem respostas individuais nesta seção. A comparação indica tendência e não comprova domínio.'
   :'A API ainda não fornece evolução conjunta. Exibimos temporariamente apenas as baterias do site, quando disponíveis.';
  $('results-logout').hidden=false;
  render();
  window.dispatchEvent(new CustomEvent('results:data',{detail:{data,version}}));
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
subjectPeriod=['30','60'].includes(initialParams.get('periodo'))?initialParams.get('periodo'):'total';
const subjectPeriodControl=$('results-subject-period');
if(subjectPeriodControl){subjectPeriodControl.value=subjectPeriod;subjectPeriodControl.addEventListener('change',()=>{subjectPeriod=['30','60'].includes(subjectPeriodControl.value)?subjectPeriodControl.value:'total';syncResultsFilters();renderSubjectPeriod();showCoverage();});}
function syncResultsFilters(){
 const url=new URL(location.href);url.searchParams.set('concurso',select.value);
 if(selectedSubject)url.searchParams.set('materia',selectedSubject);
 else url.searchParams.delete('materia');
 if(subjectPeriod!=='total')url.searchParams.set('periodo',subjectPeriod);else url.searchParams.delete('periodo');
 history.replaceState(history.state,'',url);
 for(const a of document.querySelectorAll('.results-views-nav a,#results-review-concept-link')){
  const target=new URL(a.href);target.searchParams.set('concurso',select.value);
  if(selectedSubject)target.searchParams.set('materia',selectedSubject);
  else target.searchParams.delete('materia');
  if(subjectPeriod!=='total')target.searchParams.set('periodo',subjectPeriod);else target.searchParams.delete('periodo');
  a.href=target.href;
 }
}
select.addEventListener('change',()=>{selectedSubject='';syncResultsFilters();load();});
$('results-subject-filter').addEventListener('change',value=>{
 selectedSubject=value.target.value;syncResultsFilters();render();
  window.dispatchEvent(new CustomEvent('results:filter',{detail:{subject:selectedSubject}}));
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
