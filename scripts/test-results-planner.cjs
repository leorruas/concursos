const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const ctx={Map,Set};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../web/13b-results-planner.js'),'utf8'),ctx);
const {catalogCoverage,reviewQueue}=ctx.ResultsStudyPlan;
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
assert(q.every(x=>!('statement' in x)&&!('userAnswer' in x)));
const html=fs.readFileSync(path.join(__dirname,'../resultados.html'),'utf8');
assert(html.includes('id="results-review-queue"'));assert(html.includes('id="results-edital-coverage"'));
console.log('OK: estudo priorizado e matérias não avaliadas, isolados por concurso, sem dados pessoais.');
