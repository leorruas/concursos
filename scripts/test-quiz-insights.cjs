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
const quizSource=fs.readFileSync(path.join(root,'web/15-questoes-ui.js'),'utf8');
const chapterIds=getFunction(quizSource,'quizChapterIds','updateChapterDisplay');
const editorial=JSON.parse(fs.readFileSync(path.join(root,'data/catalogo-materias-por-concurso.json'),'utf8'));
const admin=chapterIds(editorial,'camara-2026','direito-administrativo');
assert.equal(admin.length,27,'capítulos de Administrativo seguem o catálogo, não o nome do arquivo');
assert.equal(admin[9],'art-10a91f6bf9b53f1a','capítulo 10 é Classificações e espécies de atos administrativos');
assert.equal(admin[20],'art-b3edb79bff314c93','arquivo 10 - serviços públicos é capítulo 21');
assert.equal(chapterIds(editorial,'cgu-2026','direito-administrativo').length,4,'ordem própria de cada concurso');
assert.equal(chapterIds(editorial,'camara-2026','matéria-inexistente').length,0,'não inferir capítulos sem catálogo');
assert.ok(quizHtml.includes('id="qs-unidade" hidden'),'dropdown técnico deve permanecer oculto');
assert.ok(quizSource.includes('chapterIds.slice(0,n)'),'recorte deve incluir os primeiros n capítulos');
assert.ok(quizSource.includes("fetch('data/catalogo-materias-por-concurso.json'"),'catálogo editorial deve ser carregado');
// A montagem mantém dois blocos de decisão e um único ponto de ação.
for(const id of ['qs-content-title','qs-practice-title','qs-builder-footer','qs-chapter-picker']){
 const selector=id==='qs-builder-footer'||id==='qs-chapter-picker'?'class="'+id+'"':'id="'+id+'"';
 assert.ok(quizHtml.includes(selector),'agrupamento da montagem ausente: '+id);
}
assert.ok(quizHtml.indexOf('id="qs-content-title"') < quizHtml.indexOf('id="qs-practice-title"'));
assert.ok(quizHtml.indexOf('id="qs-practice-title"') < quizHtml.indexOf('id="qs-start"'));
for(const id of ['qs-concurso','qs-materia','qs-capitulo','qs-count','qs-difficulty-filter','qs-start'])
 assert.equal(quizHtml.split('id="'+id+'"').length-1,1,'controle duplicado: '+id);
assert.ok(quizHtml.includes('name="qs-scope" value="single"'),'modo de uma matéria preservado');
assert.ok(quizHtml.includes('name="qs-mode" value="simulado"'),'modo simulado preservado');
const resultsHtml=fs.readFileSync(path.join(root,'resultados.html'),'utf8');
for(const id of ['qs-priorities','qs-unidade','qs-capitulo','qs-capitulo-value','qs-capitulo-description','qs-result-percent','qs-results-link'])
 assert.ok(quizHtml.includes('id="'+id+'"'),'campo ausente: '+id);
for(const id of ['results-quiz-priorities','results-legacy','results-quiz-stats'])
 assert.ok(resultsHtml.includes('id="'+id+'"'),'campo ausente: '+id);
const additional=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-administrativo-extra.json'),'utf8'));
const adminCatalog=JSON.parse(fs.readFileSync(path.join(root,'data/catalogo-materias-por-concurso.json'),'utf8'))
 .contests.find(x=>x.concursoId==='camara-2026').subjects.find(x=>x.subjectId==='direito-administrativo').articleIds;
assert.equal(additional.length,64,'lote adicional tem 64 questões');
const canonical=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara.json'),'utf8'));
const normalizeStatement=t=>String(t||'').normalize('NFKC').toLocaleLowerCase('pt-BR').replace(/\s+/g,' ').trim();
const originalStatements=new Set([...canonical.pilotoDidatico,...canonical.expansao].map(q=>normalizeStatement(q.statement)));
assert.equal(new Set(additional.map(q=>normalizeStatement(q.statement))).size,additional.length,'enunciados adicionais não se repetem');
for(const q of additional)assert.ok(!originalStatements.has(normalizeStatement(q.statement)),'questão adicional duplica o banco original: '+q.id);

assert.equal(new Set(additional.map(q=>q.id)).size,64,'IDs adicionais únicos');
for(const articleId of adminCatalog){
 const items=additional.filter(q=>q.articleId===articleId);
 assert.ok(items.length>=2,'cobertura mínima do capítulo '+articleId);
 assert.ok(items.every(q=>q.examPart==='P1'&&q.unitId==='direito-administrativo'&&['C','E'].includes(q.correctAnswer)));
}
assert.equal(additional.filter(q=>adminCatalog.slice(0,10).includes(q.articleId)).length,30,'trinta itens nos dez primeiros capítulos');
const variants=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-administrativo-variantes.json'),'utf8'));
assert.equal(variants.length,54,'novo lote de reteste com 54 questões');
const prior=new Set([...canonical.pilotoDidatico,...canonical.expansao,...additional].map(q=>normalizeStatement(q.statement)));
const uniqueVariants=new Set(variants.map(q=>normalizeStatement(q.statement)));
assert.equal(uniqueVariants.size,variants.length,'variantes não podem ter enunciados idênticos entre si');
for(const q of variants){
 assert.ok(!prior.has(normalizeStatement(q.statement)),'variante de reteste duplica enunciado existente: '+q.id);
 assert.ok(adminCatalog.includes(q.articleId),'variante associada a capítulo ausente do edital: '+q.id);
 assert.equal(q.unitId,'direito-administrativo','variante deve permanecer na matéria');
 assert.ok(q.mechanism&&q.conceptId,'variante precisa registrar conceito e mecanismo');
}
for(const articleId of adminCatalog)assert.equal(variants.filter(q=>q.articleId===articleId).length,2,'duas variantes por capítulo: '+articleId);
assert.equal(variants.filter(q=>adminCatalog.slice(0,10).includes(q.articleId)).length,20,'vinte variantes nos primeiros dez capítulos');
assert.equal(new Set([...additional,...variants].map(q=>q.id)).size,118,'IDs dos lotes não podem colidir');
const out=path.join(root,'_site/data/questoes-publicas.json');
assert.ok(fs.existsSync(out),'exige build do site antes do teste');
const data=JSON.parse(fs.readFileSync(out,'utf8'));
assert.ok(data.questions.length>0,'sem questões publicadas');
for(const q of additional)assert.ok(data.questions.some(item=>item.id===q.id),'item novo não publicado: '+q.id);
for(const q of variants)assert.ok(data.questions.some(item=>item.id===q.id),'variante de reteste não publicada: '+q.id);
assert.equal(new Set(data.questions.map(q=>q.id)).size,data.questions.length);
assert.ok(data.questions.every(q=>q.unitName&&typeof q.section==='string'&&!('reviewEvidence' in q)),'catálogo público precisa expor só vínculo didático, sem dados internos');
console.log('OK: prioridade por artigo, contexto do concurso, referência precisa, interface e dados públicos.');
