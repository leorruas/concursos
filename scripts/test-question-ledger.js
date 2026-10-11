#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const rootDir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function run(args){
  return spawnSync(process.execPath,['scripts/question-ledger.js',...args],{cwd:rootDir,encoding:'utf8'});
}

const dir=fs.mkdtempSync(path.join(os.tmpdir(),'question-ledger-'));
try {
  const theoryRef='3 - Materias/Informatica/01 - marco civil da internet#Guarda de registros';
  const baseQuestion={
    sourceId:'sim-fixture-01',concursoId:'dataprev-2026',banca:'FGV',
    discipline:'Legislação',topic:'Marco Civil',subtopic:'Guarda de registros',
    questionType:'comparison',distractorMechanism:'inversao-de-prazos',
    correctAnswer:'B',userAnswer:'B',result:'correct',confidence:'secure',
    errorType:null,theoryRefs:[],repetition:{classification:'new',similarTo:[],intentional:false}
  };
  const fixture={
    schemaVersion:1,updated:'2026-10-11',
    policy:{recentSimulationWindow:3,minimumNewRate:0.75,maximumExactRate:0.03,maximumMechanicalRate:0.10,maximumIntentionalReviewRate:0.15,exactCooldownSimulations:5,mechanicalCooldownSimulations:3,thematicReuseAllowed:true,missedItemRule:'transform_mechanism'},
    simulations:[
      {
        id:'sim-fixture-01',concursoId:'dataprev-2026',date:'2026-10-11',totalQuestions:3,
        benchmarkEligible:true,ledgerCoverage:'complete',
        confidenceTracking:{coverage:'complete',protocol:'plain=secure; ?=insecure; ??=guess'},
        generationAudit:{counts:{new:3,thematic:0,mechanical:0,exact:0},newRate:1,thematicRate:0,mechanicalRate:0,exactRate:0,intentionalReviewRate:0}
      },
      {id:'sim-historico',concursoId:'dataprev-2026',date:'2026-10-03',totalQuestions:70,benchmarkEligible:true,ledgerCoverage:'partial_historical',registeredQuestions:1,confidenceTracking:{coverage:'partial'}}
    ],
    questions:[
      {...baseQuestion,id:'fixture-q1',number:1,mechanism:'marco-civil-prazos-conexao-aplicacoes'},
      {...baseQuestion,id:'fixture-q2',number:2,mechanism:'marco-civil-neutralidade-excecoes',confidence:'insecure',theoryRefs:[theoryRef]},
      {...baseQuestion,id:'fixture-q3',number:3,mechanism:'marco-civil-responsabilidade-terceiros',userAnswer:'A',result:'incorrect',confidence:'guess',errorType:'K',theoryRefs:[theoryRef]},
      {...baseQuestion,id:'historico-q25',sourceId:'sim-historico',number:25,mechanism:'condicional-contrapositiva',topic:'Condicional',subtopic:'contrapositiva',answerKnown:false,correctAnswer:null,userAnswer:null,result:'correct',confidence:'unknown'}
    ]
  };
  const ledgerFile=path.join(dir,'ledger.json');
  fs.writeFileSync(ledgerFile,JSON.stringify(fixture));

  const validate=run(['--validate','--ledger',ledgerFile]);
  if(validate.status!==0) throw new Error('Fixture do ledger deve validar.\n'+validate.stderr);

  const confidence=run(['--confidence','dataprev-2026','--ledger',ledgerFile]);
  if(confidence.status!==0) throw new Error('Relatório de confiança deve executar.\n'+confidence.stderr);
  const confidenceJson=JSON.parse(confidence.stdout);
  const avg=confidenceJson.officialAverage;
  if(avg.completeSimulations!==1) throw new Error('Deve haver 1 simulado com confiança completa.');
  if(avg.meanDoubtQuestions!==1 || avg.meanGuessQuestions!==1 || avg.meanUncertainQuestions!==2) throw new Error('Médias de dúvida/chute incorretas.');
  if(avg.aggregate.accuracy.secure.rate!==1 || avg.aggregate.accuracy.insecure.rate!==1 || avg.aggregate.accuracy.guess.rate!==0) throw new Error('Calibração de acerto por confiança incorreta.');

  const invalid=structuredClone(fixture);
  invalid.questions[0].confidence='unknown';
  const invalidFile=path.join(dir,'invalid-confidence.json');
  fs.writeFileSync(invalidFile,JSON.stringify(invalid));
  const invalidRun=run(['--validate','--ledger',invalidFile]);
  if(invalidRun.status===0) throw new Error('Rastreamento complete com confidence unknown deve falhar.');

  const newQuestions=Array.from({length:19},(_,i)=>({number:i+1,topic:'Tema '+i,subtopic:'Subtema '+i,mechanism:'mecanismo-novo-'+i,intentionalReview:false}));
  const repeated={number:20,topic:'Condicional',subtopic:'contrapositiva',mechanism:'condicional-contrapositiva',intentionalReview:true,transformation:'Aplicar a contrapositiva em linguagem natural com consequência prática, sem pedir equivalência direta.'};
  const passFile=path.join(dir,'pass.json');
  fs.writeFileSync(passFile,JSON.stringify({concursoId:'dataprev-2026',questions:[...newQuestions,repeated]}));
  const pass=run(['--check-plan',passFile,'--ledger',ledgerFile]);
  if(pass.status!==0) throw new Error('Plano 95% novo com revisão transformada deve passar.\n'+pass.stdout+pass.stderr);

  const failFile=path.join(dir,'fail.json');
  fs.writeFileSync(failFile,JSON.stringify({concursoId:'dataprev-2026',questions:[...newQuestions,{...repeated,intentionalReview:false,transformation:''}]}));
  const fail=run(['--check-plan',failFile,'--ledger',ledgerFile]);
  if(fail.status===0) throw new Error('Repetição mecânica não intencional deve falhar.');

  console.log('SUCESSO: ledger valida repetição e rastreamento de confiança (seguro/dúvida/chute).');
} finally {
  fs.rmSync(dir,{recursive:true,force:true});
}
