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
assert(source.includes('subjectGroups(activeArticles'));assert(source.includes('subjectGroups(cs'));
console.log('OK: agrupamento por matéria, manifesto, amostra pequena e filtros de revisão.');
