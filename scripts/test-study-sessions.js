import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validateSession, mergeSessions, stats, managedBlock, prepare, retentionMetrics } from './study-sessions.js';
import { aplicarChangeSet } from './changeset-transaction.js';
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'study-sessions-'));
try {
  const write = (p, data) => { fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true }); fs.writeFileSync(path.join(root, p), data); };
  const contests = [{id:'cgu-2026',banca:'Cebraspe'}];
  write('data/concursos.json', JSON.stringify(contests));
  const ledger = {schemaVersion:1,policy:{},questions:[],simulations:[]};
  write('data/questoes-ledger.json',JSON.stringify(ledger));
  for (const p of ['00 - Desempenho/00 Avancos globais.md','00 - Desempenho/01 Log de saturacao diaria.md','00 - Desempenho/Provas/00 - Desempenho por edital e prova.md','3 - Materias/Auditoria Governamental/Avancos.md']) write(p,'---\ntitle: "Histórico"\n---\n# Histórico\n\nTexto anterior intocado.\n');
  write('3 - Materias/Auditoria Governamental/nota.md','# Nota\n## Seção exata\nTexto.');
  const s = {schemaVersion:1,id:'cgu-2026-2026-11-03-teste',date:'2026-11-03',startedAt:'2026-11-03T18:00:00-03:00',status:'parcial',concursoId:'cgu-2026',banca:'Cebraspe',kind:'microtreino',trainingMode:'aprendizagem',diagnosis:'Diagnóstico',nextStep:'Continuar',questions:[{number:1,discipline:'Auditoria Governamental',topic:'Tema',subtopic:'Subtema',questionType:'comparison',mechanism:'comparar-competencias',distractorMechanism:'inversao',statement:'Enunciado',explanation:'Explicação',format:'CE',correctAnswer:'C',userAnswer:'E',confidence:'unknown',origin:'inedita',destinations:['metrica_apenas'],annulled:false,errorType:'confusao_conceitual',theoryRefs:['3 - Materias/Auditoria Governamental/nota#Seção exata'],repetition:{classification:'new',similarTo:[],intentional:false}}]};
  validateSession(s,s.id+'.json',root,contests);
  write('data/sessoes/'+s.id+'.json',JSON.stringify(s));
  let p = prepare(root); aplicarChangeSet(root,p);
  assert.equal(prepare(root).operations.length,0,'Reexecução deve ser idempotente');
  const projected = JSON.parse(fs.readFileSync(path.join(root,'data/questoes-ledger.json')));
  assert.equal(projected.questions.length,1);
  assert.equal(projected.questions[0].result,'incorrect');
  s.questions[0].correctAnswer = 'E'; s.questions[0].errorType = null; s.status = 'concluido';
  write('data/sessoes/'+s.id+'.json',JSON.stringify(s));
  aplicarChangeSet(root,prepare(root));
  const corrected = JSON.parse(fs.readFileSync(path.join(root,'data/questoes-ledger.json')));
  assert.equal(corrected.questions.length,1,'Correção não duplica');
  assert.equal(corrected.questions[0].result,'correct');
  assert.equal(corrected.simulations[0].status,'concluido');
  assert.equal(prepare(root).operations.length,0);
  // Sessões mistas preservam a disciplina original e classificam itens individualmente.
  const mixed = structuredClone(s);
  mixed.id = 'cgu-2026-2026-11-03-diagnostico-misto-teste';
  mixed.schemaVersion = 2;
  mixed.subjectId = 'diagnostico-misto';
  mixed.unitId = 'diagnostico-misto';
  mixed.learning = {stage:'aprendizagem',taughtConcepts:['revisão mista'],boundaries:[],pending:[],unitCompleted:false,next:{unitId:'diagnostico-misto',stage:'revisao',objective:'Revisar conceitos',sourceIds:['edital']}};
  mixed.questions[0].subjectId = 'auditoria-governamental';
  mixed.questions[0].unitId = 'u06';
  mixed.questions[0].discipline = 'Nome original distinto';
  mixed.questions.push({...structuredClone(mixed.questions[0]),number:2,discipline:'Disciplina extracurricular',subjectId:undefined,unitId:undefined,userAnswer:'C',correctAnswer:'C',errorType:null,theoryRefs:[]});
  const mixedLedger = mergeSessions(ledger,[mixed]);
  assert.equal(mixedLedger.questions[0].subjectId,'auditoria-governamental');
  assert.equal(mixedLedger.questions[0].discipline,'Nome original distinto');
  assert.equal(mixedLedger.questions[1].subjectId,null);
  assert.equal(mixedLedger.questions[1].unitId,null);
  assert.equal(mixedLedger.questions.length,2);
  const original = '# Título\n\nHistórico.';
  const first = managedBlock(original,'Um');
  const second = managedBlock(first,'Dois');
  assert.equal((second.match(/Histórico\./g)||[]).length,1);
  assert(second.includes('Dois') && !second.includes('\nUm\n'));
  assert.throws(()=>managedBlock(first.replace('<!-- estudo-sessoes:fim -->',''),'X'));
  const totals = stats([{result:'correct'},{result:'incorrect'},{result:'blank'},{result:'annulled'}]);
  assert.deepEqual([totals.answered,totals.valid,totals.accuracy],[2,3,0.5]);
  // Retenção depende de recuperação documentada após pelo menos 3 dias;
  // acertos inseguros e erros pertencem ao denominador, não ao numerador.
  const retestCases = [
    {id:'orig',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-01',result:'incorrect'},
    {id:'spaced-ok',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-05',result:'correct',confidence:'secure',retrievalOf:['orig'],repetition:{classification:'thematic'}},
    {id:'spaced-insecure',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-08',result:'correct',confidence:'insecure',retrievalOf:['orig'],repetition:{classification:'thematic'}},
    {id:'spaced-error',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-10',result:'incorrect',confidence:'secure',retrievalOf:['orig'],repetition:{classification:'thematic'}},
    {id:'immediate',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-02',result:'correct',confidence:'secure',retrievalOf:['orig'],repetition:{classification:'thematic'}},
    {id:'copy',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-11',result:'correct',confidence:'secure',retrievalOf:['orig'],repetition:{classification:'exact'}},
    {id:'unlinked',concursoId:'cgu-2026',conceptId:'c1',date:'2026-11-11',result:'correct',confidence:'secure',repetition:{classification:'new'}},
    {id:'foreign',concursoId:'camara-2026',conceptId:'c1',date:'2026-11-11',result:'correct',confidence:'secure',retrievalOf:['orig'],repetition:{classification:'thematic'}}
  ];
  assert.deepEqual([retentionMetrics(retestCases,'2026-11-13').attempts,retentionMetrics(retestCases,'2026-11-13').successful],[3,1]);
  assert.deepEqual([retentionMetrics(retestCases,'2026-11-13',7).attempts,retentionMetrics(retestCases,'2026-11-13',7).successful],[2,0]);
  assert.equal(retentionMetrics(retestCases,'2026-11-13',30).rate,1/3);
  assert.equal(retentionMetrics(retestCases,'2026-11-13',2).rate,null);
  assert.throws(()=>mergeSessions({...ledger,simulations:[{id:s.id}]},[s]),/legado/);
  for (const mutate of [x=>x.banca='FGV',x=>x.questions[0].userAnswer='A',x=>x.questions[0].theoryRefs=['3 - Materias/Auditoria Governamental/nota#Ausente'],x=>x.questions.push(x.questions[0]),x=>x.date='2026-02-30',x=>x.kind='simulado',x=>x.trainingMode='para_valer']) {
    const bad=structuredClone(s); mutate(bad); assert.throws(()=>validateSession(bad,bad.id+'.json',root,contests));
  }
  // Input inválido é rejeitado antes de escrever qualquer projeção.
  const before = fs.readFileSync(path.join(root,'data/questoes-ledger.json'),'utf8');
  s.banca='FGV'; write('data/sessoes/'+s.id+'.json',JSON.stringify(s));
  assert.throws(()=>prepare(root));
  assert.equal(fs.readFileSync(path.join(root,'data/questoes-ledger.json'),'utf8'),before);
  const actualRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const actual = JSON.parse(fs.readFileSync(path.join(actualRoot,'data/questoes-ledger.json'),'utf8'));
  const integration = structuredClone(s);
  integration.banca = 'Cebraspe';
  integration.questions[0].theoryRefs = [];
  integration.questions[0].number = 3; // Bateria parcial: só a questão 3 foi respondida.
  integration.questions[0].userAnswer = null;
  integration.questions[0].annulled = true;
  integration.questions[0].annulmentReason = 'Falha de instrução';
  const combined = mergeSessions(actual,[integration]);
  const combinedPath = path.join(root,'integration-ledger.json');
  fs.writeFileSync(combinedPath,JSON.stringify(combined));
  execFileSync('node',[path.join(actualRoot,'scripts/question-ledger.js'),'--validate','--ledger',combinedPath],{stdio:'pipe'});
  // Remover um checkpoint já projetado é proibido, preservando o histórico.
  fs.unlinkSync(path.join(root,'data/sessoes/'+s.id+'.json'));
  assert.throws(()=>prepare(root),/Sessão removida/);
  console.log('SUCESSO: sessões, correção sem duplicação, histórico, fontes, modalidades e contagem.');
} finally { fs.rmSync(root,{recursive:true,force:true}); }
