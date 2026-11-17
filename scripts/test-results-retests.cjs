const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.resolve(__dirname,'../web/13a-results-retests.js'),'utf8');
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

const cover=ctx.ResultsRetests.coverage;
const extra=new Map([...q,['new',{id:'new',concursoId:'camara-2026',subjectId:'direito-constitucional'}]]);
for(const [id,v] of extra)v.id=id;
const cov=cover(rows,extra,'camara-2026');
assert.equal(cov.length,1);assert.equal(cov[0].total,3);assert.equal(cov[0].answered,2);assert.equal(cov[0].remaining,1);
assert.equal(cover(rows,extra,'dataprev-2026').length,0);
console.log('OK: retestes por artigo, diferença de dias, confiança, deduplicação e isolamento por concurso.');
