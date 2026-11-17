const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const ctx={Map,Set};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../web/13b-results-planner.js'),'utf8'),ctx);
const {catalogCoverage,reviewQueue,combinedPracticeCoverage}=ctx.ResultsStudyPlan;
const catalog={contests:[{concursoId:'camara-2026',subjects:[
 {subjectId:'direito-constitucional',rotulo:'Direito Constitucional',itemEdital:'Básicos',articleIds:['art-1','art-2'],hubArticleId:'hub-1'},
 {subjectId:'administracao-publica',articleIds:['art-3']}]},
 {concursoId:'cgu-2026',subjects:[{subjectId:'auditoria-governamental',articleIds:['art-cgu']}]}]};
const subjects=[{id:'direito-constitucional',total:3}];
const cov=catalogCoverage(catalog,'camara-2026',subjects);
assert.equal(cov.length,2);assert.equal(cov[0].status,'amostra-pequena');
assert.equal(cov[1].status,'nao-avaliada');assert.equal(cov[0].articleCount,2);
assert.equal(catalogCoverage(catalog,'cgu-2026',subjects)[0].status,'nao-avaliada');
assert.equal(catalogCoverage(catalog,'invalid',subjects).length,0);
const q=reviewQueue(
 [{articleId:'art-1',subjectId:'direito-constitucional',mistakes:[{date:'2026-11-10'},{date:'2026-11-12'}],uncertainCorrect:[]}],
 [{conceptId:'competencia',subjectId:'direito-constitucional',errors:1,uncertain:1,title:'Competência',articles:['art-1']}],
 [{subjectId:'direito-constitucional',conceptId:'competencia',state:'needs-review'}],'direito-constitucional');
assert.equal(q.length,2);assert(q[0].score>=q[1].score);
assert.equal(reviewQueue([],[],[],'' ).length,0);
assert.equal(reviewQueue([], [{conceptId:'a',subjectId:'cgu',errors:1}],[],'camara').length,0);
const easy=reviewQueue([{articleId:'easy',subjectId:'direito-constitucional',mistakes:[{date:'2026-11-11',difficulty:'facil'}]}],[],[],'')[0];
const hard=reviewQueue([{articleId:'hard',subjectId:'direito-constitucional',mistakes:[{date:'2026-11-11',difficulty:'muito-dificil'}]}],[],[],'')[0];
assert(easy.score>hard.score,'erros básicos devem ter mais peso sem confundir dificuldade com domínio');
assert.match(easy.reason,/fundamentais/);

assert(q.every(x=>!('statement' in x)&&!('userAnswer' in x)));
const html=fs.readFileSync(path.join(__dirname,'../resultados.html'),'utf8');
assert(html.includes('id="results-review-queue"'));assert(html.includes('id="results-edital-coverage"'));
const schedule=ctx.ResultsStudyPlan.studySequence;
const seq=schedule([
 {articleId:'art-1',subjectId:'direito-constitucional',score:80,reason:'Erros'},
 {articleId:'art-2',subjectId:'direito-constitucional',score:70,reason:'Erros'},
 {articleId:'art-3',subjectId:'administracao-publica',score:60,reason:'Erros'}
],[{subjectId:'portugues',label:'Português',hubArticleId:'art-4',status:'nao-avaliada'}],4);
assert.equal(seq.length,4);
assert.equal(seq[0].subjectId,'direito-constitucional');
assert.notEqual(seq[1].subjectId,seq[0].subjectId,'alternar matérias quando possível');
assert.equal(schedule([{articleId:'x',subjectId:'a'},{articleId:'x',subjectId:'a'}],[],7).length,1,'não duplicar artigos');
assert.equal(schedule([],[],7).length,0);
assert(html.includes('id="results-next-studies"'));
const coverageRows=combinedPracticeCoverage(
 [{subjectId:'direito-constitucional',total:10,answered:3}],
 [{id:'direito-constitucional',total:8,sourceChat:5,sourceSite:3},
  {id:'administracao-publica',total:4,sourceChat:4,sourceSite:0}]
);
assert.equal(coverageRows.length,2,'matérias sem questões no banco também aparecem');
const constRow=coverageRows.find(x=>x.subjectId==='direito-constitucional');
assert.equal(constRow.totalAttempts,8);
assert.equal(constRow.chatAttempts,5);
assert.equal(constRow.siteAttempts,3);
assert.equal(constRow.bankPercent,30,'histórico do ChatGPT não aumenta artificialmente a cobertura do banco');
assert.equal(constRow.remainingBank,7);
const other=coverageRows.find(x=>x.subjectId==='administracao-publica');
assert.equal(other.chatAttempts,4);
assert.equal(other.bankPercent,null);
assert.equal(combinedPracticeCoverage([],[]).length,0);
assert(html.includes('questões respondidas por matéria'));
assert(html.includes('Contagem única das questões respondidas no ChatGPT e no site'));
const ui=fs.readFileSync(path.join(__dirname,'../web/13-results-ui.js'),'utf8');
const coverageSection=ui.slice(ui.indexOf('function showCoverage(){'),ui.indexOf('function showConceptTransfer(){'));
assert(coverageSection.includes('current?.difficulty?.bySubject'),'a contagem deve vir do histórico unificado');
assert(!coverageSection.includes('bankPercent'),'não exibir percentual baseado só no banco público');
assert(!coverageSection.includes('coverageData'),'não depender do carregamento separado das baterias do site');
console.log('OK: estudo priorizado e matérias não avaliadas, isolados por concurso, sem dados pessoais.');
