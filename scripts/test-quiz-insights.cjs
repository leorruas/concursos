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
// Acertos que dependeram de consulta ou correção prévia continuam na fila de reteste.
for(const file of files){
 const src=fs.readFileSync(path.join(root,file),'utf8');
 const rank=getFunction(src,'quizPriorityGroups','quizPriorityReason');
 const consulted={...attempt('help','c-1','correct','secure'),consulted:true,feedbackBefore:false};
 const correction={...attempt('correction','c-2','correct','secure'),consulted:false,feedbackBefore:true};
 const both={...attempt('both','c-4','correct','insecure'),consulted:true,feedbackBefore:true};
 const assisted=rank([consulted,correction,both],qs,'camara-2026',0);
 assert.equal(assisted.length,3,file+' deve reconhecer acertos com apoio');
 assert.equal(assisted.find(x=>x.articleId==='art-direitos').assistedCorrect,1,'duas marcas no mesmo item não contam duas vezes');
 assert.equal(rank([{...consulted,consulted:false,feedbackBefore:false}],qs,'camara-2026',0).length,0,'acerto independente seguro não vira prioridade');
}
const resultsSource=fs.readFileSync(path.join(root,'web/13-results-ui.js'),'utf8');
const learning=getFunction(resultsSource,'quizLearningSignals','renderQuizLearning');
const signalRows=[
 {...attempt('ind','c-1','correct','secure'),consulted:false,feedbackBefore:false},
 {...attempt('con','c-1','correct','secure'),consulted:true,feedbackBefore:false},
 {...attempt('cor','c-2','correct','secure'),consulted:false,feedbackBefore:true},
 {...attempt('both','c-2','correct','secure'),consulted:true,feedbackBefore:true},
 attempt('legacy','c-1','correct','secure'),
 {...attempt('err','c-1','incorrect','secure'),consulted:false,feedbackBefore:false}
];
const signal=learning(signalRows,'camara-2026','',now).all;
assert.equal(signal.total,6);
assert.equal(signal.independent,1);
assert.equal(signal.independentSecure,1);
assert.equal(signal.consultedCorrect,2);
assert.equal(signal.seenCorrectionCorrect,2);
assert.equal(signal.supportedCorrect,3);
assert.equal(signal.missingMetadata,1);
assert.equal(learning(signalRows,'camara-2026','direito-constitucional',now).all.total,0,'filtro de matéria respeitado');
assert.ok(fs.readFileSync(path.join(root,'resultados.html'),'utf8').includes('id="results-quiz-learning"'),'relatório presente');
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
const applications=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-administrativo-aplicacao.json'),'utf8'));
assert.equal(applications.length,64,'terceiro lote contém 64 aplicações');
const combinedStatements=new Set([...canonical.pilotoDidatico,...canonical.expansao,...additional,...variants].map(q=>normalizeStatement(q.statement)));
assert.equal(new Set(applications.map(q=>normalizeStatement(q.statement))).size,applications.length,'sem aplicações idênticas');
for(const q of applications){
 assert.ok(!combinedStatements.has(normalizeStatement(q.statement)),'enunciado já existente: '+q.id);
 assert.ok(adminCatalog.includes(q.articleId),'aplicação sem capítulo editorial: '+q.id);
 assert.ok(q.conceptId&&q.mechanism,'aplicação precisa registrar conceito e variação: '+q.id);
}
for(const [index,id] of adminCatalog.entries())
 assert.equal(applications.filter(q=>q.articleId===id).length,index<10?3:2,'cobertura aplicada do capítulo '+(index+1));
assert.equal(applications.filter(q=>adminCatalog.slice(0,10).includes(q.articleId)).length,30);
assert.equal(new Set([...additional,...variants,...applications].map(q=>q.id)).size,182,'IDs dos três lotes precisam ser únicos');
const casesAdmin=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-administrativo-casos.json'),'utf8'));
assert.equal(casesAdmin.length,64,'quarto lote deve conter 64 questões de casos');
const previousStatements=new Set([...canonical.pilotoDidatico,...canonical.expansao,...additional,...variants,...applications]
 .map(q=>normalizeStatement(q.statement)));
assert.equal(new Set(casesAdmin.map(q=>normalizeStatement(q.statement))).size,casesAdmin.length,'enunciados novos não devem se repetir');
for(const q of casesAdmin){
 assert.ok(!previousStatements.has(normalizeStatement(q.statement)),'caso novo repete enunciado anterior: '+q.id);
 assert.ok(adminCatalog.includes(q.articleId),'caso sem vínculo a capítulo válido: '+q.id);
 assert.ok(q.conceptId&&q.mechanism,'caso sem conceito ou mecanismo: '+q.id);
 assert.ok(q.explanation.length>=45,'comentário insuficiente: '+q.id);
}
for(const [index,articleId] of adminCatalog.entries())
 assert.equal(casesAdmin.filter(q=>q.articleId===articleId).length,index<10?3:2,'cobertura capítulo '+(index+1));
assert.equal(casesAdmin.filter(q=>adminCatalog.slice(0,10).includes(q.articleId)).length,30);
assert.equal(new Set([...additional,...variants,...applications,...casesAdmin].map(q=>q.id)).size,246,'IDs únicos entre lotes');
const hardAdmin=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-administrativo-dificeis.json'),'utf8'));
assert.ok(hardAdmin.length>=47,'o banco difícil deve preservar ao menos as 47 questões originais');
const priorHardStatements=new Set([...canonical.pilotoDidatico,...canonical.expansao,...additional,...variants,...applications,...casesAdmin]
 .map(q=>normalizeStatement(q.statement)));
assert.equal(new Set(hardAdmin.map(q=>normalizeStatement(q.statement))).size,hardAdmin.length,'enunciados difíceis distintos');
for(const q of hardAdmin){
 assert.ok(!priorHardStatements.has(normalizeStatement(q.statement)),'enunciado difícil idêntico ao anterior: '+q.id);
 assert.ok(adminCatalog.includes(q.articleId),'questão difícil sem artigo do catálogo: '+q.id);
 assert.ok(['muito-facil','facil','media','dificil','muito-dificil'].includes(q.estimatedDifficulty),'dificuldade válida: '+q.id);
 assert.ok(q.explanation.length>=100,'justificativa de questão difícil deve explicar regra e ressalva: '+q.id);
}
const stillHardAdmin=hardAdmin.filter(q=>q.estimatedDifficulty==='dificil');
for(const [i,id] of adminCatalog.entries())assert.ok(stillHardAdmin.filter(q=>q.articleId===id).length>=(i<10?3:1),'cobertura difícil capítulo '+(i+1));
assert.ok(stillHardAdmin.filter(q=>adminCatalog.slice(0,10).includes(q.articleId)).length>=30,'ao menos trinta difíceis nos primeiros dez capítulos');
assert.ok(Math.abs(stillHardAdmin.filter(q=>q.correctAnswer==='C').length-stillHardAdmin.filter(q=>q.correctAnswer==='E').length)<=3,'gabarito difícil equilibrado');

assert.equal(new Set([...additional,...variants,...applications,...casesAdmin,...hardAdmin].map(q=>q.id)).size,246+hardAdmin.length,'identificadores únicos nos lotes');
const hardDecoro=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-decoro-dificeis.json'),'utf8'));
assert.ok(hardDecoro.length>=30,'banco de decoro deve preservar as 30 questões iniciais');
assert.ok(Math.abs(hardDecoro.filter(q=>q.correctAnswer==='C').length-hardDecoro.filter(q=>q.correctAnswer==='E').length)<=1,'gabarito de decoro equilibrado');

assert.equal(new Set(hardDecoro.map(q=>normalizeStatement(q.statement))).size,hardDecoro.length);
assert.equal(new Set([...canonical.expansao,...hardDecoro].map(q=>q.id)).size,canonical.expansao.length+hardDecoro.length,'IDs de decoro devem ser únicos no banco editorial revisado');
const out=path.join(root,'_site/data/questoes-publicas.json');
assert.ok(fs.existsSync(out),'exige build do site antes do teste');
const data=JSON.parse(fs.readFileSync(out,'utf8'));
assert.ok(data.questions.length>0,'sem questões publicadas');
const officialReferences=JSON.parse(fs.readFileSync(path.join(root,'data/questoes-camara-referencias-oficiais.json'),'utf8'));
const linkedOfficials=data.questions.filter(q=>q.officialSource);
assert.equal(linkedOfficials.length,officialReferences.itens.length);
for(const item of officialReferences.itens){
 const q=linkedOfficials.find(q=>q.id===`cam-oficial-${item.caderno}-${item.numero}`);
 const source=officialReferences.cadernos[item.caderno];
 assert.equal(q.origin,'real');
 assert.equal(q.format,'reference','só o item com enunciado é selecionável');
 assert.equal(q.correctAnswer,item.gabaritoDefinitivo);
 assert.equal(q.officialSource.gabarito,source.gabarito);
 assert.equal(q.officialSource.url,source.prova+'#page='+item.pagina);
 assert.equal(q.statement,`Julgue o item ${item.numero} do caderno ${source.codigo}: ${q.officialSource.url}`);
}
const camaraPool=data.questions.filter(q=>q.concursoId==='camara-2026');
const syncAttempt=vm.runInNewContext('('+quizSource.slice(
 quizSource.indexOf('function quizSyncAttempt('),
 quizSource.indexOf('async function sync(a)')
).trim()+')');
const legacyAttempt={id:'resposta-teste',mechanism:'caso-sanção',result:'correct'};
const normalized=syncAttempt(legacyAttempt);
assert.equal(normalized.mechanism,'caso-sancao');
assert.equal(normalized.id,legacyAttempt.id);
assert.equal(normalized.result,legacyAttempt.result);
assert.equal(legacyAttempt.mechanism,'caso-sanção');
assert.equal(syncAttempt({mechanism:null}).mechanism,null);
assert.ok(camaraPool.filter(q=>q.format==='CE').every(q=>!q.mechanism||
 /^[A-Za-z0-9][A-Za-z0-9_-]{0,179}$/.test(q.mechanism)));

assert.ok(!quizSource.includes('Praticar com cadernos'),'não oferecer bateria com leitura externa');
const mockElement=(tag,text='')=>({
 tag,text,children:[],
 get textContent(){return this.text;},
 set textContent(value){this.text=value;this.children=[];},
 append(...items){this.children.push(...items);},
 replaceChildren(...items){this.textContent='';this.children=items;}
});
const startRender=quizSource.indexOf('function questionStatement(');
const endRender=quizSource.indexOf('function render(){',startRender);
const statementRenderer=vm.runInNewContext('('+quizSource.slice(startRender,endRender).trim()+')',{
 elem:mockElement,document:{createTextNode:text=>text}
});
const card=mockElement('p');
statementRenderer(card,linkedOfficials.find(q=>q.format==='reference'));
assert.equal(card.children[0].href,linkedOfficials[0].officialSource.url);
assert.equal(card.children[0].target,'_blank');
assert.ok(!card.children.some(child=>child.href===linkedOfficials[0].officialSource.gabarito));
const directOfficial={...linkedOfficials[0],format:'CE',statement:'Enunciado oficial de teste.'};
statementRenderer(card,directOfficial);
assert.equal(card.textContent,directOfficial.statement);
assert.equal(card.children.length,0,'item oficial direto não exige abrir o PDF');
statementRenderer(card,camaraPool.find(q=>q.origin==='inedita'));
assert.ok(card.textContent.trim());
assert.notEqual(card.textContent,linkedOfficials[0].statement);
assert.equal(card.children.length,0,'limpa o link ao mostrar o item autoral');
const sharedCasePracticeIds=getFunction(quizSource,'sharedCasePracticeIds','renderSuggestions');
for(const caseId of ['fiscalizacao-do-decreto','autotutela-vantagem-mensal','revisao-bicameral-digitalizacao','decoro-recurso-e-votacao','tcu-ato-e-contratos-em-fiscalizacao']){
 const items=camaraPool.filter(q=>q.calibration?.caseId===caseId);
 const otherSeenIds=camaraPool.filter(q=>q.calibration?.caseId!==caseId).map(q=>q.id);
 assert.equal(items.length,3);
 assert.equal(new Set(items.map(q=>q.statement.split('\n\n')[0])).size,1);
 assert.equal(new Set(items.map(q=>q.mechanism)).size,3);
 assert.deepEqual(Array.from(sharedCasePracticeIds(camaraPool,new Set(otherSeenIds))),
  items.map(q=>q.id));
 assert.equal(sharedCasePracticeIds(camaraPool,new Set([...otherSeenIds,items[0].id])).length,0);
}
const publishedById=new Map(data.questions.map(q=>[q.id,q]));
for(const q of [...additional,...variants,...applications,...casesAdmin,...hardAdmin]){
 const published=publishedById.get(q.id);
 assert.ok(published,'questão suplementar ausente no banco público: '+q.id);
 for(const key of ['estimatedDifficulty','questionType','cognitiveOperation']){
  assert.equal(published[key],q[key],key+' divergente no banco público: '+q.id);
 }
}
for(const q of hardDecoro)assert.ok(data.questions.some(item=>item.id===q.id),'questão de decoro ausente no banco público: '+q.id);
assert.equal(new Set(data.questions.map(q=>q.id)).size,data.questions.length);
assert.ok(data.questions.every(q=>q.unitName&&typeof q.section==='string'&&!('reviewEvidence' in q)),'catálogo público precisa expor só vínculo didático, sem dados internos');
console.log('OK: prioridade por artigo, contexto do concurso, referência precisa, interface e dados públicos.');
