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
  const baseQuestion={
    sourceId:'sim-fixture-01',concursoId:'dataprev-2026',banca:'FGV',
    discipline:'Legislação',topic:'Marco Civil',subtopic:'Guarda de registros',
    questionType:'comparison',mechanism:'marco-civil-prazos-conexao-aplicacoes',
    distractorMechanism:'inversao-de-prazos',correctAnswer:'B',userAnswer:'B',
    result:'correct',confidence:'secure',errorType:null,theoryRefs:[],
    repetition:{classification:'new',similarTo:[],intentional:false}
  };
  const fixture={
    schemaVersion:1,updated:'2026-10-06',
    policy:{recentSimulationWindow:3,minimumNewRate:0.75,maximumExactRate:0.03,maximumMechanicalRate:0.10,maximumIntentionalReviewRate:0.15,exactCooldownSimulations:5,mechanicalCooldownSimulations:3,thematicReuseAllowed:true,missedItemRule:'transform_mechanism'},
    simulations:[{id:'sim-fixture-01',concursoId:'dataprev-2026',date:'2026-10-05',totalQuestions:1,benchmarkEligible:true,generationAudit:{counts:{new:1,thematic:0,mechanical:0,exact:0},newRate:1,thematicRate:0,mechanicalRate:0,exactRate:0,intentionalReviewRate:0}}],
    questions:[{...baseQuestion,id:'fixture-q1',number:1}]
  };
  const ledgerFile=path.join(dir,'ledger.json');
  fs.writeFileSync(ledgerFile,JSON.stringify(fixture));

  const validate=run(['--validate','--ledger',ledgerFile]);
  if(validate.status!==0) throw new Error('Fixture do ledger deve validar.\n'+validate.stderr);

  const newQuestions=Array.from({length:19},(_,i)=>({number:i+1,topic:'Tema '+i,subtopic:'Subtema '+i,mechanism:'mecanismo-novo-'+i,intentionalReview:false}));
  const repeated={number:20,topic:'Marco Civil',subtopic:'Guarda de registros',mechanism:'marco-civil-prazos-conexao-aplicacoes',intentionalReview:true,transformation:'Aplicar o prazo em caso temporal com consequência prática, sem associação direta.'};
  const passFile=path.join(dir,'pass.json');
  fs.writeFileSync(passFile,JSON.stringify({concursoId:'dataprev-2026',questions:[...newQuestions,repeated]}));
  const pass=run(['--check-plan',passFile,'--ledger',ledgerFile]);
  if(pass.status!==0) throw new Error('Plano 95% novo com revisão transformada deve passar.\n'+pass.stdout+pass.stderr);

  const failFile=path.join(dir,'fail.json');
  fs.writeFileSync(failFile,JSON.stringify({concursoId:'dataprev-2026',questions:[...newQuestions,{...repeated,intentionalReview:false,transformation:''}]}));
  const fail=run(['--check-plan',failFile,'--ledger',ledgerFile]);
  if(fail.status===0) throw new Error('Repetição mecânica não intencional deve falhar.');

  console.log('SUCESSO: ledger valida schema e bloqueia repetição mecânica não intencional.');
} finally {
  fs.rmSync(dir,{recursive:true,force:true});
}
