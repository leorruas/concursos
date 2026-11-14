/* Contrato público do quiz: dados sintéticos, nunca respostas de estudante. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const files=['web/15-questoes-ui.js','web/13-results-ui.js'];
const getFunction=(src,name,next)=>{
 const a=src.indexOf('function '+name+'('),b=src.indexOf('function '+next+'(',a);
 assert.ok(a>=0&&b>a,'função de prioridade ausente: '+name);
 return vm.runInNewContext('('+src.slice(a,b).trim()+')',{Map,Number});
};
const now=Date.now();
const qs=new Map([
 ['c-1',{id:'c-1',concursoId:'camara-2026',articleId:'art-politicos',section:'Inelegibilidades'}],
 ['c-2',{id:'c-2',concursoId:'camara-2026',articleId:'art-regimento',section:'Reclamação em comissão'}],
 ['c-3',{id:'c-3',concursoId:'camara-2026',articleId:'art-regimento',section:'Arquivamento'}],
 ['c-4',{id:'c-4',concursoId:'camara-2026',articleId:'art-direitos',section:'Legalidade'}],
 ['c-5',{id:'c-5',concursoId:'cgu-2026',articleId:'art-other',section:'Outro'}]
]);
const attempt=(id,questionId,result,confidence,concursoId='camara-2026',timestamp=now)=>({
 id,questionId,result,confidence,concursoId,answeredAt:timestamp
});
const attempts=[
 attempt('a1','c-1','incorrect','secure'),
 attempt('a2','c-2','incorrect','insecure'),
 attempt('a3','c-3','correct','insecure'),
 attempt('a4','c-4','correct','insecure'),
 attempt('a5','c-5','incorrect','secure','cgu-2026'),
 attempt('a6','c-4','incorrect','secure','camara-2026',now-40*86400000)
];
for(const file of files){
 const src=fs.readFileSync(path.join(root,file),'utf8');
 execFileSync(process.execPath,['--check',path.join(root,file)]);
 const rank=getFunction(src,'quizPriorityGroups','quizPriorityReason');
 const result=rank(attempts,qs,'camara-2026',now-30*86400000);
 assert.equal(result.length,3,file);
 assert.equal(result[0].articleId,'art-politicos','erro seguro primeiro no empate de pesos');
 assert.equal(result[0].secureErrors,1);
 assert.equal(result[1].articleId,'art-regimento','erro + acerto inseguro no mesmo artigo');
 assert.equal(result[1].section,'Reclamação em comissão','link ao trecho que causou erro');
 assert.equal(result[2].articleId,'art-direitos');
 assert.equal(result[2].errors,0);
 assert.equal(rank([attempt('ok','c-1','correct','secure')],qs,'camara-2026',0).length,0);
 assert.equal(rank(attempts,qs,'dataprev-2026',0).length,0,'concurso isolado');
}
const quizHtml=fs.readFileSync(path.join(root,'questoes.html'),'utf8');
const resultsHtml=fs.readFileSync(path.join(root,'resultados.html'),'utf8');
for(const id of ['qs-priorities','qs-unidade','qs-result-percent','qs-results-link'])
 assert.ok(quizHtml.includes('id="'+id+'"'),'campo ausente: '+id);
for(const id of ['results-quiz-priorities','results-legacy','results-quiz-stats'])
 assert.ok(resultsHtml.includes('id="'+id+'"'),'campo ausente: '+id);
const out=path.join(root,'_site/data/questoes-publicas.json');
assert.ok(fs.existsSync(out),'exige build do site antes do teste');
const data=JSON.parse(fs.readFileSync(out,'utf8'));
assert.ok(data.questions.length>0,'sem questões publicadas');
assert.equal(new Set(data.questions.map(q=>q.id)).size,data.questions.length);
assert.ok(data.questions.every(q=>q.unitName&&typeof q.section==='string'&&!('reviewEvidence' in q)),'catálogo público precisa expor só vínculo didático, sem dados internos');
console.log('OK: prioridade por artigo, contexto do concurso, referência precisa, interface e dados públicos.');
