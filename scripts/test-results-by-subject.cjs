/* Contrato de agrupamento por matéria, somente com registros sintéticos. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.resolve(__dirname,'../web/13-results-ui.js'),'utf8');
const html=fs.readFileSync(path.resolve(__dirname,'../resultados.html'),'utf8');
function extract(name,next){
 const a=source.indexOf('function '+name+'('),b=source.indexOf('function '+next+'(',a);
 assert(a>=0&&b>a,'Função ausente: '+name);
 return source.slice(a,b);
}
const ctx={manifest:new Map([
 ['a-const',{categoria:'Direito Constitucional'}],['a-ap',{categoria:'Administração Pública'}],
 ['a-orc',{categoria:'Orçamento Público'}],['a-com',{categoria:'Comunicacao'}],['unknown',{categoria:'Geral'}]
]),DISPLAY:{'direito-constitucional':'Direito Constitucional','orcamento-publico':'Orçamento Público'}};
vm.createContext(ctx);
vm.runInContext([
 extract('title','articleLink'),
 extract('manifestSubject','articleSubject'),
 extract('articleSubject','subjectGroups'),
 extract('subjectGroups','subjectHeading'),
 extract('evidenceLabel','priorityLabel')
].join('\n'),ctx);
const subject=ctx.articleSubject;
assert.equal(subject({articleId:'a-const'}),'direito-constitucional');
assert.equal(subject({articleId:'a-ap'}),'administracao-publica');
assert.equal(subject({articleId:'a-orc'}),'orcamento-publico');
assert.equal(subject({articleId:'a-com'}),'comunicacao');
assert.equal(subject({articleId:'a-const',subjectId:'informatica'}),'informatica');
assert.equal(subject({articleId:'unknown',mistakes:[{subjectId:'portugues'}]}),'portugues');
assert.equal(subject({articleId:'unknown'},[{subjectId:'ingles',articles:['unknown']}]),'ingles');
assert.equal(subject({articleId:'unknown'}),'sem-materia');
const groups=ctx.subjectGroups([{subjectId:'orcamento-publico'},{subjectId:'direito-constitucional'},{subjectId:'direito-constitucional'}],x=>x.subjectId);
assert.equal(groups.length,2);assert.equal(groups[0][0],'direito-constitucional');assert.equal(groups[0][1].length,2);
assert.match(ctx.evidenceLabel(1,1),/Poucas ocorrências/);
assert.match(ctx.evidenceLabel(5,2),/Erros registrados/);
const ev=vm.runInContext('articleReviewEvidence',ctx);
assert.match(ev({mistakes:[{date:'2026-11-12'},{date:'2026-11-13'}]}),/dias distintos/);
assert.match(ev({mistakes:[{date:'2026-11-12'},{date:'2026-11-12'}]}),/recorrência entre dias ainda não demonstrada/);
assert.match(ev({mistakes:[{date:'2026-11-12'}]}),/Um erro/);
assert.match(ev({uncertainCorrect:[{date:'2026-11-12'}]}),/insegurança/);
assert.match(ev({mistakes:[{date:'data inválida'},{date:'data inválida'}]}),/não demonstrada/);
assert(html.includes('id="results-concept-transfer-description"'));
assert(source.includes('transferCombined?data.learning.byConcept:null'));
assert(source.includes("if(!transferCombined){"));
assert(html.includes('id="results-subject-filter"'));
assert(source.includes('subjectGroups(activeArticles'));
assert(source.includes('subjectGroups(visible,c=>c.subjectId)'),
 'Conceitos devem ser agrupados após busca e limite de exibição');
assert(source.includes('const visible=filtered.slice(0,shown)'),
 'Índice de conceitos precisa limitar a quantidade inicial');
assert(source.includes("search.type='search'"),
 'Índice deve permitir buscar um conceito sem percorrer todas as linhas');
const periodsContext={};vm.createContext(periodsContext);
vm.runInContext(extract('observedAccuracyPeriods','render'),periodsContext);
const accuracy=periodsContext.observedAccuracyPeriods;
const sample={weekly:{weeks:[{start:'2026-11-16',days:[
 {date:'2026-11-16',subjects:[{correct:3,incorrect:1,blank:1}]},
 {date:'2026-11-20',subjects:[{correct:2,incorrect:2}]},
 {date:'2026-11-22',subjects:[{correct:1,incorrect:1}]}
]},{start:'2026-11-09',days:[{date:'2026-11-10',subjects:[{correct:4,incorrect:0}]}]}]}};
const rates=accuracy(sample,'2026-11-22');
assert.equal(rates.week,60,'semana de segunda a domingo: 6 acertos em 10 julgadas');
assert.equal(rates.month,71.4,'mês: 10 acertos em 14 julgadas');
assert.equal(accuracy({weekly:{weeks:[]}},'2026-11-22').week,null,'sem amostra semanal');
assert.equal(accuracy({},'2026-11-22').available,false,'dados semanais ausentes não devem parecer 0%');
assert.ok(source.includes("stat('Acerto observado · total'"));
assert.ok(source.includes("stat('Acerto observado · semana'"));
assert.ok(source.includes("stat('Acerto observado · mês'"));
console.log('OK: agrupamento por matéria, manifesto, amostra pequena e filtros de revisão.');

const pages=fs.readFileSync(path.resolve(__dirname,'../web/13c-results-pages.js'),'utf8');
assert.ok(pages.includes("id:'aprendizagem',label:'Aprendizagem'"));
assert.ok(pages.includes("region.id='results-learning-dashboard'"));
assert.ok(pages.includes("['erros','semanas','aprendizagem'].includes(detail)"),'rota autenticada compartilhada reconhece a nova aba');
assert.ok(pages.includes("const learningDetail=document.getElementById('results-quiz-learning-section')"));
assert.ok(pages.includes("drawWeeks();drawLearning();"));
const learningContext={Map,Date,Number};
vm.createContext(learningContext);
const take=(start,end)=>{const a=pages.indexOf(start),b=pages.indexOf(end,a);assert(a>=0&&b>a);return pages.slice(a,b);};
vm.runInContext(take('const numericFields=',' const accuracyFormat=')+take('const zero=',' function summaryTable(')+take('function periodRows(',' function showRate(')+take('function retentionStages(',' function learningPreview('),learningContext);
const daily=(date,subjectId,independent,extras={})=>({date,subjects:[{subjectId,total:5,correct:4,incorrect:1,blank:0,retests:0,independent,independentSecure:independent,consultedCorrect:1,feedbackCorrect:1,supportedCorrect:1,contextUnknown:0,...extras}]});
const sampleWeeks=[{start:'2026-11-16',days:[daily('2026-11-16','const',3),daily('2026-11-18','admin',2),daily('2026-11-21','const',1)]},{start:'2026-11-23',days:[daily('2026-11-24','const',2),daily('2026-11-25','const',4)]}];
const report=learningContext.periodRows(sampleWeeks,'const',7,'2026-11-24');
assert.equal(report.total.total,10,'7 dias incluem o dia atual e excluem dias futuros');
assert.equal(report.total.independent,3);
assert.equal(report.total.supportedCorrect,2,'apoio contado uma vez por tentativa');
assert.equal(report.matters.size,1);
assert.equal(learningContext.learningRate(report.total,'independent'),0.3);
assert.equal(learningContext.learningRate(learningContext.periodRows(sampleWeeks,'none',7,'2026-11-24').total,'independent'),null);
const legacy=learningContext.periodRows([{start:'2026-11-23',days:[daily('2026-11-24','const',1,{independent:undefined})]}],'const',7,'2026-11-24');
assert.equal(learningContext.learningRate(legacy.total,'independent'),null,'API antiga não deve fingir zero');
const stages=learningContext.retentionStages;
assert.deepEqual([...stages({state:'retention-check',cycleAttemptId:'a',nextReview:'2026-11-08',recentEvents:[{id:'a',date:'2026-11-01'}]},[2,7,21])],[true,false,false]);
assert.deepEqual([...stages({state:'review-pending',cycleAttemptId:'missing',nextReview:'2026-11-08',recentEvents:[]},[2,7,21])],[null,null,null]);
assert.deepEqual([...stages({state:'provisional-mastery'},[2,7,21])],[true,true,true]);
console.log('OK: aba Aprendizagem, períodos, filtros, contexto incompleto e etapas do ciclo.');

const subjectPeriodContext={};vm.createContext(subjectPeriodContext);
vm.runInContext(extract('subjectPeriodData','renderSubjectPeriod'),subjectPeriodContext);
const period=subjectPeriodContext.subjectPeriodData;
const records={bySubject:[{id:'const',total:100,correct:60,incorrect:30,blank:10}],weekly:{withoutDate:2,weeks:[
 {days:[daily('2026-09-25','const',1),daily('2026-09-26','const',1),daily('2026-10-25','const',1),daily('2026-10-26','const',1)]},
 {days:[daily('2026-11-24','const',1),daily('2026-11-24','const',1),daily('2026-11-25','const',1)]}
]}};
assert.equal(period(records,'total','2026-11-24').rows[0].total,100);
assert.equal(period(records,'30','2026-11-24').rows[0].total,10,'30 dias incluem hoje e dia inicial, excluem anterior e futuro');
assert.equal(period(records,'30','2026-11-24').start,'2026-10-26');
assert.equal(period(records,'60','2026-11-24').start,'2026-09-26');
assert.equal(period(records,'60','2026-11-24').rows[0].total,20);
assert.equal(period(records,'60','2026-11-24').undated,2);
assert.equal(period({},'30','2026-11-24').available,false);
assert.equal(period({weekly:{weeks:[]}},'30','2026-11-24').rows.length,0);
assert.ok(html.includes('id="results-subject-period"'));
assert.ok(html.includes('value="30"')&&html.includes('value="60"'));
assert.ok(source.includes('renderSubjectPeriod();showCoverage();'));
console.log('OK: períodos Total, 30 e 60 dias nas matérias, limites inclusivos e dados ausentes.');

const weeklyRate=learningContext.learningRate;
const fullyUnknown={learningAvailable:true,correct:3,incorrect:2,contextUnknown:5,independent:0,supportedCorrect:0};
assert.equal(weeklyRate(fullyUnknown,'independent'),null,'contexto totalmente desconhecido não é 0%');
assert.equal(weeklyRate(fullyUnknown,'supportedCorrect'),null);
assert.equal(weeklyRate({...fullyUnknown,contextUnknown:0},'supportedCorrect'),0,'zero confirmado deve continuar visível');
assert.equal(weeklyRate({...fullyUnknown,supportedCorrect:1},'supportedCorrect'),0.2,'apoio declarado em contexto parcial é evidência observada');
assert.equal(weeklyRate({...fullyUnknown,contextUnknown:1,independent:3},'independent'),0.6,'mesmo denominador para comparação');
assert.ok(pages.includes("['supportedCorrect','Com apoio',true]"),'segunda série deve usar o preenchimento cinza');
assert.ok(pages.includes('.results-learning-fill.is-supported{background:var(--learning-supported)}'));
assert.ok(pages.includes('.results-learning-legend span+span:before{background:var(--learning-supported)}'));
assert.ok(pages.includes('line.append(track(rate,supported),value)'),'cada barra tem seu próprio percentual');
assert.ok(pages.includes("judged+' resposta(s) julgada(s)'"));
console.log('OK: cores, percentuais por barra, amostra e contexto desconhecido.');

vm.runInContext(take('function groupRetentionPrinciples(',' function retentionStages('),learningContext);
const groupRetention=learningContext.groupRetentionPrinciples;
const retentionItems=[
 {subjectId:'const',principleId:'imunidade',title:'Imunidade parlamentar',state:'retention-check',nextReview:'2026-11-29'},
 {subjectId:'const',principleId:'competencia',title:'Competência legislativa',state:'review-pending',nextReview:'2026-11-24'},
 {subjectId:'admin',principleId:'ato',title:'Ato administrativo',state:'review-pending'}
];
const labels=id=>({const:'Direito Constitucional',admin:'Direito Administrativo'})[id]||id;
assert.deepEqual(Array.from(groupRetention(retentionItems,'','',labels),g=>g[0]),['admin','const']);
assert.deepEqual(Array.from(groupRetention(retentionItems,'const','',labels)[0][1],p=>p.principleId),['competencia','imunidade']);
assert.equal(groupRetention(retentionItems,'','competencia',labels)[0][1].length,1,'busca ignora acentos');
assert.equal(groupRetention(retentionItems,'admin','imunidade',labels).length,0);
assert.ok(pages.includes('filtered.slice(0,retentionGroupsShown)'),'uma matéria inicialmente, expansão progressiva');
assert.ok(pages.includes("retentionLimits.get(id)||8"));
assert.ok(pages.includes("Ver próxima matéria: "));
assert.ok(pages.includes("hidden.append(transferSection)"),'dados de transferência continuam acessíveis ao renderizador');
assert.ok(pages.includes("label:'Aprendizagem',selectors:['#results-retention']"));
console.log('OK: retenção por matéria, busca e expansão; evolução redundante retirada da interface.');
