import fs from 'node:fs';
import { editorialClosureErrors } from './editorial-closure-policy.js';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { prepare, validateSession } from './study-sessions.js';
import { aplicarChangeSet } from './changeset-transaction.js';
import { loadPlans, validatePlan, parseProgram, resolveCommand, examProfile } from './study-context.js';
const actual=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'study-context-'));
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const write=(p,x)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),JSON.stringify(x,null,2)+'\n');};
const ctx=(id,contest='cgu-2026')=>read(`data/contexto-estudo/${contest}/${id}.json`);
const sync=()=>{const p=prepare(root);if(p.operations.length)aplicarChangeSet(root,p);};
try{
  for(const p of ['3 - Materias','2 - Editais','data','00 - Desempenho'])fs.cpSync(path.join(actual,p),path.join(root,p),{recursive:true});
  const contests=read('data/concursos.json');const plan=loadPlans(root).find(p=>p.concursoId==='cgu-2026');
  const program=validatePlan(root,plan,contests);
  assert.equal(new Set(program.map(p=>p.block)).size,14);assert.equal(program.length,81);assert.equal(plan.subjects.length,15);
  sync();assert.equal(prepare(root).operations.length,0,'Consolidação idempotente');
  let a=ctx('auditoria-governamental');const retentionBaseline=a.observationAxes.retention.retrievedLater;const cp=ctx('contabilidade-publica');
  assert.equal(a.resume.unitId,'u07');assert.equal(a.lastCompletedUnit,'u06');assert(['fronteiras','aprendizagem','para_valer','consolidacao'].includes(a.resume.stage),'A retomada deve permanecer em uma etapa válida da unidade 07');
  const auditLearning=read('data/questoes-ledger.json').questions.filter(q=>q.concursoId==='cgu-2026'&&q.discipline==='Auditoria Governamental'&&q.trainingMode==='aprendizagem');
  assert.equal(a.results.aprendizagem.correct,auditLearning.filter(q=>q.result==='correct').length);assert.equal(a.results.aprendizagem.incorrect,auditLearning.filter(q=>q.result==='incorrect').length);
  assert(a.results.aprendizagem.correct>=31&&a.results.aprendizagem.incorrect>=5,'Preservar o histórico de aprendizagem já registrado');
  assert.equal(cp.state,'nao-iniciada');assert.deepEqual(cp.results,{});assert.equal(cp.resume.unitId,'fundamentos');
  assert.equal(ctx('direito-administrativo').state,'nao-iniciada','Existência de notas e história Dataprev não expõe conteúdo CGU');
  const index=read('data/contexto-estudo/indice.json');
  // A retomada global deve seguir a sessão real mais recente, não uma matéria fixa da fixture.
  const latestCguSession=fs.readdirSync(path.join(root,'data/sessoes'))
    .filter(name=>name.endsWith('.json'))
    .map(name=>read('data/sessoes/'+name))
    .filter(s=>s.concursoId==='cgu-2026')
    .sort((a,b)=>Date.parse(b.startedAt)-Date.parse(a.startedAt)||b.id.localeCompare(a.id))[0];
  assert(latestCguSession,'Falta sessão CGU para validar retomada global');
  assert.equal(index.contests.find(c=>c.concursoId==='cgu-2026').resume.lastSessionId,latestCguSession.id);
  for(const [cmd,id] of [['continuar Auditoria Governamental','auditoria-governamental'],['vamos continuar Contabilidade Pública','contabilidade-publica'],['revisar meus erros de Direito Administrativo','direito-administrativo'],['continuar a CGU de onde parei',latestCguSession.subjectId]])assert.equal(resolveCommand(index,cmd).subjectId,id);
  const make=(suffix,date,time='18:00:00')=>({schemaVersion:2,id:'cgu-2026-context-test-'+suffix,startedAt:date+'T'+time+'-03:00',date,concursoId:'cgu-2026',banca:'Cebraspe',kind:'microtreino',trainingMode:'aprendizagem',status:'concluido',subjectId:'auditoria-governamental',unitId:'u07',diagnosis:'Fixture de teste, nunca publicada.',nextStep:'Reparar finalidade do teste versus técnica.',learning:{stage:'aprendizagem',taughtConcepts:['finalidade dos testes'],boundaries:['técnica versus finalidade'],pending:['treino calibrado'],unitCompleted:false,next:{unitId:'u07',stage:'fronteiras',objective:'Comparar finalidades em um novo caso.',noteRef:'3 - Materias/Auditoria Governamental/02 - ciclo de auditoria#2. Execução: testar, comparar e documentar',sourceIds:['mot']}},questions:[{number:1,discipline:'Auditoria Governamental',conceptId:'finalidade-do-teste',topic:'Teste',subtopic:'Finalidade versus técnica',questionType:'comparison',mechanism:'fixture-'+suffix,distractorMechanism:'troca-de-categoria',statement:'Item sintético apenas em diretório temporário.',explanation:'Comentário de teste.',format:'CE',correctAnswer:'C',userAnswer:'E',confidence:'secure',origin:'inedita',destinations:['metrica_apenas'],annulled:false,errorType:'confusao_conceitual',theoryRefs:['3 - Materias/Auditoria Governamental/02 - ciclo de auditoria#2. Execução: testar, comparar e documentar'],repetition:{classification:'new',similarTo:[],intentional:false}}]});
  const save=s=>write('data/sessoes/'+s.id+'.json',s);
  const s=make('erro','2026-11-04');save(s);sync();const target=s.id+'-q1';
  assert.equal(ctx('auditoria-governamental').gaps.find(g=>g.questionId===target).status,'pendente');
  const another=make('outra-materia','2026-11-04','19:00:00');another.subjectId='contabilidade-publica';another.unitId='fundamentos';another.questions[0].discipline='Contabilidade Pública';another.questions[0].conceptId='oticas-contabeis';another.questions[0].correctAnswer='E';another.questions[0].errorType=null;another.questions[0].theoryRefs=[];another.learning.next={unitId:'fundamentos',stage:'fronteiras',objective:'Contrastar os três enfoques.',noteRef:null,sourceIds:['mcasp']};save(another);sync();
  assert.equal(read('data/contexto-estudo/indice.json').contests.find(c=>c.concursoId==='cgu-2026').resume.subjectId,'contabilidade-publica');
  assert.equal(ctx('auditoria-governamental').latestSession.id,s.id,'Trocar matéria não apaga o checkpoint');
  assert.equal(ctx('contabilidade-publica').results.aprendizagem.correct,1,'Matéria sem Avancos deve funcionar');
  const retrieval=(suffix,date,confidence='secure')=>{const r=make(suffix,date,'20:00:00');r.trainingMode='revisao';r.questions[0].userAnswer='C';r.questions[0].errorType=null;r.questions[0].confidence=confidence;r.questions[0].retrievalOf=[target];return r;};
  const uncertain=retrieval('duvida','2026-11-04','insecure');save(uncertain);sync();
  assert.equal(ctx('auditoria-governamental').gaps.find(g=>g.questionId===target).status,'pendente','Acerto inseguro não resolve');
  const immediate=retrieval('imediata','2026-11-04');save(immediate);sync();
  assert.equal(ctx('auditoria-governamental').gaps.find(g=>g.questionId===target).status,'recuperacao-imediata');
  assert.equal(ctx('auditoria-governamental').observationAxes.retention.retrievedLater,retentionBaseline,'Recuperação imediata não aumenta retenção espaçada já registrada');
  const delayed=retrieval('espacada','2026-11-11');save(delayed);sync();
  let gap=ctx('auditoria-governamental').gaps.find(g=>g.questionId===target);assert.equal(gap.status,'retencao-observada');assert.equal(gap.dueOn,'2026-11-18');
  const second=retrieval('espacada-2','2026-11-25');save(second);sync();gap=ctx('auditoria-governamental').gaps.find(g=>g.questionId===target);assert.equal(gap.dueOn,'2026-12-16');
  assert.equal(ctx('auditoria-governamental').units.find(u=>u.id==='u07').didacticCompletion,false,'Reteste isolado não conclui unidade');
  // Aula sem questões registra exposição, sem fabricar aprendizagem ou nota.
  const lecture=make('aula','2026-11-26');lecture.subjectId='contabilidade-publica';lecture.unitId='up3-2-4';lecture.kind='aula';lecture.questions=[];lecture.learning.next={unitId:'up3-2-4',stage:'aprendizagem',objective:'Avaliar os enfoques ensinados.',sourceIds:['mcasp']};save(lecture);sync();
  assert.equal(ctx('contabilidade-publica').results.aprendizagem.correct,1);
  assert.equal(ctx('contabilidade-publica').units.find(u=>u.id==='up3-2-4').exposure.state,'registrada-na-sessao');
  assert.equal(prepare(root).operations.length,0);
  execFileSync('node',[path.join(actual,'scripts/question-ledger.js'),'--validate','--ledger',path.join(root,'data/questoes-ledger.json')],{stdio:'pipe'});
  // Corrigir gabarito na origem recalcula e remove o erro antigo, sem duplicação.
  const beforeCount=read('data/questoes-ledger.json').questions.length;s.questions[0].correctAnswer='E';s.questions[0].errorType=null;save(s);sync();
  assert.equal(read('data/questoes-ledger.json').questions.length,beforeCount);
  assert(!ctx('auditoria-governamental').gaps.some(g=>g.questionId===target));
  const before=fs.readFileSync(path.join(root,'data/questoes-ledger.json'),'utf8');
  const bad=make('cruzado','2026-11-27');bad.questions[0].retrievalOf=['dataprev-simulado-07-q1'];save(bad);assert.throws(()=>prepare(root),/mesma matéria/);assert.equal(fs.readFileSync(path.join(root,'data/questoes-ledger.json'),'utf8'),before);fs.unlinkSync(path.join(root,'data/sessoes/'+bad.id+'.json'));
  for(const mutate of [x=>x.subjectId='inexistente',x=>x.unitId='u99',x=>x.questions[0].discipline='Contabilidade Pública',x=>x.learning.next.sourceIds=['fonte-inexistente'],x=>x.learning.unitCompleted=true]){const bad=make('invalido','2026-11-27');mutate(bad);assert.throws(()=>validateSession(bad,bad.id+'.json',root,contests));}
  const norm=make('sem-nota','2026-11-27');norm.subjectId='contabilidade-publica';norm.unitId='fundamentos';norm.questions[0].discipline='Contabilidade Pública';norm.questions[0].theoryRefs=[];norm.questions[0].sourceRefs=[{sourceId:'mcasp',locator:'Parte Geral: objeto e campo de aplicação'}];norm.learning.next={unitId:'fundamentos',stage:'fronteiras',objective:'Reparar o conceito pela fonte.',sourceIds:['mcasp']};save(norm);sync();
  execFileSync('node',[path.join(actual,'scripts/question-ledger.js'),'--validate','--ledger',path.join(root,'data/questoes-ledger.json')],{stdio:'pipe'});
  assert.equal(ctx('contabilidade-publica').gaps[0].sourceRefs[0].sourceId,'mcasp');
  const bulk=make('fila','2026-11-28');bulk.questions=Array.from({length:32},(_,i)=>({...structuredClone(bulk.questions[0]),number:i+1,conceptId:'conceito-'+(i+1),mechanism:'fixture-fila-'+(i+1)}));save(bulk);sync();
  assert.equal(ctx('auditoria-governamental').gaps.length,20);const pages=ctx('auditoria-governamental').reviewIndex.pages;assert(pages.length>=2);assert(pages.every(p=>read(p).gaps.length<=20));
  const removed=structuredClone(bulk);removed.questions.pop();save(removed);assert.throws(()=>prepare(root),/Questão removida/);save(bulk);
  bulk.questions.forEach(q=>{q.annulled=true;q.annulmentReason='Fixture anulada';q.errorType=null;});save(bulk);sync();assert(pages.slice(1).some(p=>!fs.existsSync(path.join(root,p))),'Página excedente deve ser removida transacionalmente');
  const correctReview=make('correto-retido','2026-11-29');correctReview.subjectId='contabilidade-publica';correctReview.unitId='fundamentos';correctReview.trainingMode='revisao';correctReview.questions[0].discipline='Contabilidade Pública';correctReview.questions[0].conceptId='oticas-contabeis';correctReview.questions[0].userAnswer='C';correctReview.questions[0].errorType=null;correctReview.questions[0].theoryRefs=[];correctReview.questions[0].retrievalOf=[another.id+'-q1'];correctReview.learning.next={unitId:'fundamentos',stage:'aprendizagem',objective:'Prosseguir com novo recorte.',sourceIds:['mcasp']};save(correctReview);sync();
  assert(ctx('contabilidade-publica').retentionObservations.recent.some(o=>o.targetQuestionId===another.id+'-q1'&&o.status==='espacada'),'Retenção também deve reconhecer conceitos antes acertados');
  assert.equal(resolveCommand(index,'revisar meus erros de Direito Administrativo na Dataprev').concursoId,'dataprev-2026');
  assert.throws(()=>examProfile({...contests.find(c=>c.id==='cgu-2026'),banca:'FGV'}),/Cebraspe/);
  const bankBad=structuredClone(contests);bankBad.find(c=>c.id==='cgu-2026').banca='FGV';assert.throws(()=>validatePlan(root,plan,bankBad),/Cebraspe/);
  for(const schema of [1,2]){const wrong=make('banca-'+schema,'2026-11-29');wrong.schemaVersion=schema;wrong.questions[0].format='AE';wrong.questions[0].options=['a','b','c','d','e'];assert.throws(()=>validateSession(wrong,wrong.id+'.json',root,contests),/formato|Certo\/Errado/);wrong.questions[0].format='CE';wrong.banca='FGV';assert.throws(()=>validateSession(wrong,wrong.id+'.json',root,contests),/banca/);}
  const summary=read('data/contexto-estudo/cgu-2026.json');assert.equal(summary.banca,'Cebraspe');assert.equal(summary.activeExam.questionFormat,'CE');
  for(const item of read('data/contexto-estudo/indice.json').contests.find(c=>c.concursoId==='cgu-2026').subjects){const c=read(item.path);assert.equal(c.activeExam.banca,'Cebraspe');assert.equal(c.activeExam.questionFormat,'CE');assert(c.activeExam.instruction.includes('Certo/Errado'));}
  assert.equal(examProfile(contests.find(c=>c.id==='dataprev-2026')).banca,'FGV','Correção da CGU preserva o perfil Dataprev');
  // Fechamento didático pendente, recibo válido e reabertura por conteúdo posterior.
  const closing=make('fechar','2026-11-30');closing.learning.unitCompleted=true;closing.learning.advanceWithGaps='Recuperação imediata com revisão posterior.';closing.learning.next={unitId:'u08',stage:'preparacao',objective:'Preparar unidade seguinte.',sourceIds:['mot']};save(closing);sync();
  const unit7=()=>ctx('auditoria-governamental').units.find(u=>u.id==='u07');
  assert.equal(unit7().didacticCompletion,true);assert.equal(ctx('auditoria-governamental').resume.stage,'consolidacao');assert.equal(ctx('auditoria-governamental').resume.afterEditorial.unitId,'u08');
  const metricBefore=ctx('auditoria-governamental').results;
  const receiptSession=make('recibo','2026-12-01');receiptSession.kind='fechamento';receiptSession.questions=[];receiptSession.learning={...structuredClone(closing.learning),stage:'consolidacao',taughtConcepts:[],boundaries:[],pending:[],unitCompleted:false,editorialConsolidation:{status:'revisado-sem-alteracao',noteRefs:closing.questions[0].theoryRefs,coveredSessionIds:unit7().editorial.requiredSessionIds,summary:'Fixture: artigos conferidos nas seções de finalidade e técnica.'}};save(receiptSession);sync();
  assert.deepEqual(ctx('auditoria-governamental').results,metricBefore,'Recibo não inventa desempenho');assert.equal(unit7().editorial.status,'revisado-sem-alteracao');assert.equal(ctx('auditoria-governamental').resume.unitId,'u08');assert.equal(ctx('auditoria-governamental').lastEditoriallyClosedUnit,'u07');
  receiptSession.learning.editorialConsolidation.coveredSessionIds.push(another.id);save(receiptSession);assert.throws(()=>prepare(root),/outra unidade/);receiptSession.learning.editorialConsolidation.coveredSessionIds.pop();save(receiptSession);
  const noRef=structuredClone(receiptSession);noRef.learning.editorialConsolidation.noteRefs=['3 - Materias/Inexistente'];assert.throws(()=>validateSession(noRef,noRef.id+'.json',root,contests));
  const extra=make('nuance-posterior','2026-12-02');save(extra);sync();assert.equal(unit7().editorial.status,'pendente');assert.equal(ctx('auditoria-governamental').resume.stage,'consolidacao');assert(unit7().editorial.requiredSessionIds.includes(extra.id));
  const sessionPath='data/sessoes/fechar.json';const article=closing.questions[0].theoryRefs[0].split('#')[0]+'.md';const claim=structuredClone(receiptSession);claim.learning.editorialConsolidation.status='consolidado';const content=JSON.stringify(claim);
  assert.equal(editorialClosureErrors([{path:sessionPath,status:'A'}],()=>content,()=>null).length,1);
  assert.equal(editorialClosureErrors([{path:sessionPath,status:'A'},{path:article,status:'M'}],()=>content,()=>null).length,0);
  assert.equal(editorialClosureErrors([{path:sessionPath,status:'M'}],()=>content,()=>content).length,0,'Correção sem mudar recibo não exige reescrever artigo');
  assert.equal(editorialClosureErrors([{path:sessionPath,status:'A'}],()=>JSON.stringify(receiptSession),()=>null).length,0);
  execFileSync('node',[path.join(actual,'scripts/question-ledger.js'),'--validate','--ledger',path.join(root,'data/questoes-ledger.json')],{stdio:'pipe'});
  const missing=structuredClone(plan);missing.subjects=missing.subjects.filter(s=>s.id!=='etica-publica');assert.throws(()=>validatePlan(root,missing,contests),/sem rota/);
  const cycle=structuredClone(plan);cycle.subjects[0].units[0].requires=['u02'];cycle.subjects[0].units[1].requires=['u01'];assert.throws(()=>validatePlan(root,cycle,contests),/Ciclo/);
  for(const c of read('data/contexto-estudo/indice.json').contests)for(const sub of c.subjects)assert(fs.statSync(path.join(root,sub.path)).size<65000,'Contexto compacto excede orçamento');
  console.log('SUCESSO: 14 blocos/81 itens, roteamento natural, alternância de matérias, retorno dias depois, recuperação/retencão, aula sem questões, correção idempotente e isolamento entre concursos.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
