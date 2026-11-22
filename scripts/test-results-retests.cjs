const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync(require('node:path').join(__dirname,'../web/13a-results-retests.js'),'utf8');
const ctx={Map,Set,Date,Number};ctx.window=ctx;vm.createContext(ctx);vm.runInContext(source,ctx);
const analyze=ctx.ResultsRetests.analyze,day=d=>Date.parse(d+'T12:00:00Z');
const q=new Map([['a',{concursoId:'camara-2026',articleId:'article1',subjectId:'direito-constitucional'}],
 ['b',{concursoId:'camara-2026',articleId:'article1',subjectId:'direito-constitucional'}],
 ['x',{concursoId:'cgu-2026',articleId:'article2',subjectId:'orcamento-publico'}]]);
const a=(id,questionId,result,d,concursoId='camara-2026',confidence='secure')=>({id,questionId,result,concursoId,confidence,answeredAt:day(d)});
const rows=[a('1','a','incorrect','2026-11-10'),a('2','a','correct','2026-11-12'),
 a('3','b','incorrect','2026-11-10'),a('4','b','incorrect','2026-11-13'),a('4','b','incorrect','2026-11-13'),
 a('5','x','incorrect','2026-11-10','cgu-2026')];
const found=analyze(rows,q,'camara-2026');
assert.equal(found.length,1);assert.equal(found[0].positive,1);assert.equal(found[0].persistent,1);assert.equal(found[0].questions,2);
assert.equal(analyze(rows,q,'dataprev-2026').length,0);
assert.equal(analyze([a('7','a','incorrect','2026-11-10'),a('8','a','correct','2026-11-10')],q,'camara-2026').length,0);
assert.equal(analyze([a('9','a','incorrect','2026-11-10'),a('10','a','correct','2026-11-12','camara-2026','insecure')],q,'camara-2026')[0].insecure,1);

assert.equal(found[0].latestCorrect,1);
const withoutArticle=new Map([['unlinked',{concursoId:'camara-2026',subjectId:'direito-constitucional'}]]);
const repeated=[
 {...a('u1','unlinked','incorrect','2026-11-10'),answeredAt:Date.parse('2026-11-10T23:00:00-03:00')},
 {...a('u2','unlinked','correct','2026-11-11'),answeredAt:Date.parse('2026-11-11T09:00:00-03:00')}
];
const unlinked=analyze(repeated,withoutArticle,'camara-2026');
assert.equal(unlinked[0].articleId,'');
assert.equal(unlinked[0].latestCorrect,1);
assert.equal(unlinked[0].questions,1);

const cover=ctx.ResultsRetests.coverage;
const extra=new Map([...q,['new',{id:'new',concursoId:'camara-2026',subjectId:'direito-constitucional'}]]);
for(const [id,v] of extra)v.id=id;
const cov=cover(rows,extra,'camara-2026');
assert.equal(cov.length,1);assert.equal(cov[0].total,3);assert.equal(cov[0].answered,2);assert.equal(cov[0].remaining,1);
assert.equal(cover(rows,extra,'dataprev-2026').length,0);

const transfer=ctx.ResultsRetests.conceptTransfer;
const concepts=new Map([
 ['c1',{concursoId:'camara-2026',articleId:'art-1',subjectId:'direito-constitucional',conceptId:'quorum'}],
 ['c2',{concursoId:'camara-2026',articleId:'art-1',subjectId:'direito-constitucional',conceptId:'quorum'}],
 ['c3',{concursoId:'camara-2026',articleId:'art-1',subjectId:'direito-constitucional',conceptId:'quorum'}],
 ['cgu',{concursoId:'cgu-2026',articleId:'art-2',subjectId:'orcamento-publico',conceptId:'quorum'}]
]);
const testRows=[a('t1','c1','incorrect','2026-11-10'),a('t2','c2','correct','2026-11-12')];
assert.equal(transfer(testRows,concepts,'camara-2026')[0].state,'promising');
assert.equal(transfer(testRows,concepts,'camara-2026')[0].distinctQuestions,2);
assert.equal(transfer([a('t1','c1','incorrect','2026-11-10'),a('t2','c1','correct','2026-11-12')],concepts,'camara-2026').length,0);
assert.equal(transfer([a('t1','c1','incorrect','2026-11-10'),a('t2','c2','correct','2026-11-10')],concepts,'camara-2026').length,0);
assert.equal(transfer([a('t1','c1','incorrect','2026-11-10'),a('t2','c2','incorrect','2026-11-12')],concepts,'camara-2026')[0].state,'needs-review');
assert.equal(transfer([a('t1','c1','incorrect','2026-11-10'),a('t2','c2','correct','2026-11-12','camara-2026','insecure')],concepts,'camara-2026')[0].state,'insecure');
assert.equal(transfer([a('t1','c1','incorrect','2026-11-10'),a('t2','cgu','correct','2026-11-12','cgu-2026')],concepts,'camara-2026').length,0);
assert.equal(transfer([...testRows,a('t2','c2','correct','2026-11-12')],concepts,'camara-2026')[0].distinctQuestions,2);
// Contrato visual do resumo: retestes literais não podem ser apresentados como teste independente.
const ui=fs.readFileSync(require('node:path').join(__dirname,'../web/13-results-ui.js'),'utf8');
const page=fs.readFileSync(require('node:path').join(__dirname,'../web/13c-results-pages.js'),'utf8');
for(const label of ['Erros corrigidos com segurança','Erros corrigidos com insegurança','Erros persistentes','Erros que reapareceram','Demais percursos']){
 assert.ok(ui.includes(label),'categoria ausente do painel: '+label);
}
assert.match(ui,/correct\/repeated/,'taxa de acerto final deve usar quantidade de questões repetidas');
assert.ok(ui.includes("kind==='independent'"),'evidência independente deve ser explicitada');
assert.ok(ui.includes('não o ganho de aprendizagem'),'retestes devem explicitar o limite da medida');
assert.ok(page.includes('.results-retest-breakdown')&&page.includes('.results-retention-summary'));
console.log('OK: retestes por artigo, diferença de dias, confiança, deduplicação e isolamento por concurso.');
