#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function die(message) {
  console.error('✗ ' + message);
  process.exit(1);
}

function parseArgs(argv) {
  const args=[...argv];
  const out={command:args.shift() || '--validate',rest:args,ledgerPath:'data/questoes-ledger.json'};
  const idx=out.rest.indexOf('--ledger');
  if(idx>=0){
    out.ledgerPath=out.rest[idx+1];
    out.rest.splice(idx,2);
  }
  return out;
}

function readJson(relOrAbs) {
  const file=path.isAbsolute(relOrAbs)?relOrAbs:path.resolve(rootDir,relOrAbs);
  try { return JSON.parse(fs.readFileSync(file,'utf8')); }
  catch(error){ die(`Não foi possível ler JSON em ${file}: ${error.message}`); }
}

function pct(n,d){ return d ? Number((n/d).toFixed(4)) : 0; }

function normalize(value){
  return String(value||'')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');
}

function theoryPathExists(ref){
  const [raw]=String(ref||'').split('#');
  if(!raw) return false;
  const candidate=raw.endsWith('.md')?raw:raw+'.md';
  return fs.existsSync(path.join(rootDir,candidate));
}

function validateLedger(ledger){
  const errors=[],warnings=[];
  const allowedRep=new Set(['new','thematic','mechanical','exact']);
  const allowedAnswer=new Set(['A','B','C','D','E']);
  const allowedResult=new Set(['correct','incorrect','annulled']);
  const allowedConfidence=new Set(['secure','insecure','unknown']);
  const allowedError=new Set(['K','C','I','D',null]);
  const ids=new Set();

  if(ledger.schemaVersion!==1) errors.push('schemaVersion deve ser 1.');
  if(!ledger.policy || typeof ledger.policy!=='object') errors.push('policy ausente.');
  if(!Array.isArray(ledger.questions)) errors.push('questions deve ser array.');
  if(!Array.isArray(ledger.simulations)) errors.push('simulations deve ser array.');

  const simulations=new Map((ledger.simulations||[]).map(s=>[s.id,s]));

  for(const q of ledger.questions||[]){
    if(!q.id) errors.push('Questão sem id.');
    else if(ids.has(q.id)) errors.push(`ID duplicado: ${q.id}`);
    else ids.add(q.id);

    for(const field of ['sourceId','concursoId','banca','discipline','topic','subtopic','questionType','mechanism','distractorMechanism']){
      if(!q[field]) errors.push(`${q.id||'(sem id)'}: ${field} ausente.`);
    }
    if(q.mechanism && normalize(q.mechanism)!==q.mechanism) errors.push(`${q.id}: mechanism deve ser slug canônico.`);
    if(!Number.isInteger(q.number) || q.number<1) errors.push(`${q.id}: number inválido.`);
    if(!allowedAnswer.has(q.correctAnswer)) errors.push(`${q.id}: correctAnswer deve ser A-E.`);
    if(!allowedAnswer.has(q.userAnswer)) errors.push(`${q.id}: userAnswer deve ser A-E.`);
    if(!allowedResult.has(q.result)) errors.push(`${q.id}: result inválido.`);
    if(!allowedConfidence.has(q.confidence||'unknown')) errors.push(`${q.id}: confidence inválido.`);
    if(!allowedError.has(q.errorType??null)) errors.push(`${q.id}: errorType inválido.`);
    if(q.result==='incorrect' && !q.errorType) errors.push(`${q.id}: erro exige errorType K/C/I/D.`);
    const expected=q.correctAnswer===q.userAnswer?'correct':'incorrect';
    if(q.result!=='annulled' && q.result!==expected) errors.push(`${q.id}: result não corresponde a gabarito/resposta.`);

    const rep=q.repetition||{};
    if(!allowedRep.has(rep.classification)) errors.push(`${q.id}: repetition.classification inválida.`);
    if(rep.classification!=='new' && (!Array.isArray(rep.similarTo)||rep.similarTo.length===0)) {
      errors.push(`${q.id}: repetição exige similarTo.`);
    }
    if((rep.classification==='exact'||rep.classification==='mechanical') && rep.intentional===true && !String(rep.transformation||'').trim()){
      errors.push(`${q.id}: revisão intencional exata/mecânica exige transformation.`);
    }

    if(q.result==='incorrect'||q.confidence==='insecure'){
      if(!Array.isArray(q.theoryRefs)||q.theoryRefs.length===0) errors.push(`${q.id}: erro/acerto inseguro exige theoryRefs.`);
      else for(const ref of q.theoryRefs){
        if(!String(ref).includes('#')) errors.push(`${q.id}: theoryRef deve apontar para subtítulo: ${ref}`);
        if(!theoryPathExists(ref)) errors.push(`${q.id}: theoryRef aponta para arquivo inexistente: ${ref}`);
      }
    }
    if(!simulations.has(q.sourceId)) errors.push(`${q.id}: sourceId sem entrada em simulations: ${q.sourceId}`);
  }

  for(const sim of ledger.simulations||[]){
    const qs=(ledger.questions||[]).filter(q=>q.sourceId===sim.id);
    if(qs.length!==sim.totalQuestions) errors.push(`${sim.id}: totalQuestions=${sim.totalQuestions}, mas há ${qs.length} registros.`);
    const numbers=new Set(qs.map(q=>q.number));
    for(let i=1;i<=sim.totalQuestions;i++) if(!numbers.has(i)) errors.push(`${sim.id}: Q${i} ausente no ledger.`);

    const counts={new:0,thematic:0,mechanical:0,exact:0};
    let intentional=0;
    for(const q of qs){
      counts[q.repetition.classification]++;
      if(q.repetition.intentional===true) intentional++;
    }
    const rates={
      newRate:pct(counts.new,qs.length),
      thematicRate:pct(counts.thematic,qs.length),
      mechanicalRate:pct(counts.mechanical,qs.length),
      exactRate:pct(counts.exact,qs.length),
      intentionalReviewRate:pct(intentional,qs.length)
    };
    const p=ledger.policy;
    const gate=[];
    if(rates.newRate<p.minimumNewRate) gate.push(`novidade ${(rates.newRate*100).toFixed(1)}%`);
    if(rates.exactRate>p.maximumExactRate) gate.push(`exact ${(rates.exactRate*100).toFixed(1)}%`);
    if(rates.mechanicalRate>p.maximumMechanicalRate) gate.push(`mechanical ${(rates.mechanicalRate*100).toFixed(1)}%`);
    if(rates.intentionalReviewRate>p.maximumIntentionalReviewRate) gate.push(`revisão intencional ${(rates.intentionalReviewRate*100).toFixed(1)}%`);

    if(sim.generationAudit){
      for(const [k,v] of Object.entries(rates)){
        if(typeof sim.generationAudit[k]!=='number'||Math.abs(sim.generationAudit[k]-v)>0.0002) errors.push(`${sim.id}: ${k} inconsistente.`);
      }
      if(JSON.stringify(sim.generationAudit.counts||{})!==JSON.stringify(counts)) errors.push(`${sim.id}: generationAudit.counts inconsistente.`);
    } else if(qs.length) {
      errors.push(`${sim.id}: generationAudit ausente.`);
    }

    if(gate.length){
      if(sim.benchmarkEligible===false && sim.noveltyException) warnings.push(`${sim.id}: exceção registrada — ${gate.join('; ')}.`);
      else errors.push(`${sim.id}: gate de novidade falhou — ${gate.join('; ')}.`);
    }
  }
  return {errors,warnings};
}

function recentQuestions(ledger,concursoId,windowSize){
  const sims=(ledger.simulations||[])
    .filter(s=>s.concursoId===concursoId)
    .sort((a,b)=>String(b.date).localeCompare(String(a.date)))
    .slice(0,windowSize);
  const ids=new Set(sims.map(s=>s.id));
  return {sims,questions:(ledger.questions||[]).filter(q=>ids.has(q.sourceId))};
}

function checkPlan(ledger,file){
  const plan=readJson(file);
  if(!plan.concursoId) die('Plano exige concursoId.');
  if(!Array.isArray(plan.questions)||plan.questions.length===0) die('Plano exige questions[].');
  const windowSize=Number(plan.window||ledger.policy.recentSimulationWindow||3);
  const recent=recentQuestions(ledger,plan.concursoId,windowSize).questions;
  const classifications=[];
  let intentional=0;
  const failures=[];

  for(const q of plan.questions){
    if(!q.mechanism) failures.push(`Q${q.number||'?'}: mechanism ausente.`);
    const sameMechanism=recent.find(r=>r.mechanism===q.mechanism);
    const sameSubtopic=recent.find(r=>normalize(r.topic)===normalize(q.topic)&&normalize(r.subtopic)===normalize(q.subtopic));
    let classification='new',similarTo=[];
    if(sameMechanism){
      classification=q.literalRepeat===true?'exact':'mechanical';
      similarTo=[sameMechanism.id];
    } else if(sameSubtopic){
      classification='thematic';
      similarTo=[sameSubtopic.id];
    }
    if(q.intentionalReview===true) intentional++;
    if((classification==='exact'||classification==='mechanical')&&q.intentionalReview!==true) failures.push(`Q${q.number||'?'}: ${classification} de ${similarTo[0]} sem intentionalReview=true.`);
    if((classification==='exact'||classification==='mechanical')&&String(q.transformation||'').trim().length<12) failures.push(`Q${q.number||'?'}: repetição exige transformation.`);
    classifications.push({number:q.number,mechanism:q.mechanism,classification,similarTo});
  }

  const counts={new:0,thematic:0,mechanical:0,exact:0};
  classifications.forEach(x=>counts[x.classification]++);
  const n=classifications.length;
  const rates={
    newRate:pct(counts.new,n),
    thematicRate:pct(counts.thematic,n),
    mechanicalRate:pct(counts.mechanical,n),
    exactRate:pct(counts.exact,n),
    intentionalReviewRate:pct(intentional,n)
  };
  const p=ledger.policy;
  if(rates.newRate<p.minimumNewRate) failures.push(`Novidade ${(rates.newRate*100).toFixed(1)}% abaixo do mínimo ${(p.minimumNewRate*100).toFixed(0)}%.`);
  if(rates.exactRate>p.maximumExactRate) failures.push('Repetição exata acima do máximo.');
  if(rates.mechanicalRate>p.maximumMechanicalRate) failures.push('Repetição mecânica acima do máximo.');
  if(rates.intentionalReviewRate>p.maximumIntentionalReviewRate) failures.push('Revisão intencional acima do máximo.');
  console.log(JSON.stringify({counts,rates,classifications,failures},null,2));
  if(failures.length) process.exit(1);
}

const parsed=parseArgs(process.argv.slice(2));
const ledger=readJson(parsed.ledgerPath);
const cmd=parsed.command;
const args=parsed.rest;

if(cmd==='--validate'){
  const {errors,warnings}=validateLedger(ledger);
  warnings.forEach(w=>console.warn('! '+w));
  if(errors.length){ errors.forEach(e=>console.error('✗ '+e)); process.exit(1); }
  console.log(`SUCESSO: ledger válido com ${ledger.questions.length} questão(ões) e ${ledger.simulations.length} simulado(s).`);
} else if(cmd==='--report'){
  const id=args[0];
  const sim=(ledger.simulations||[]).find(s=>s.id===id);
  if(!sim) die(`Simulado não encontrado: ${id}`);
  const qs=ledger.questions.filter(q=>q.sourceId===id);
  console.log(JSON.stringify({simulation:sim,errors:qs.filter(q=>q.result==='incorrect'),insecure:qs.filter(q=>q.confidence==='insecure')},null,2));
} else if(cmd==='--recent'){
  const concursoId=args[0]||'dataprev-2026';
  const idx=args.indexOf('--window');
  const windowSize=idx>=0?Number(args[idx+1]):Number(ledger.policy.recentSimulationWindow||3);
  const out=recentQuestions(ledger,concursoId,windowSize);
  console.log(JSON.stringify({simulations:out.sims.map(s=>({id:s.id,date:s.date,benchmarkEligible:s.benchmarkEligible})),mechanisms:[...new Set(out.questions.map(q=>q.mechanism))].sort()},null,2));
} else if(cmd==='--check-plan'){
  if(!args[0]) die('Uso: node scripts/question-ledger.js --check-plan caminho/plan.json [--ledger caminho/ledger.json]');
  checkPlan(ledger,args[0]);
} else {
  die('Comando desconhecido. Use --validate, --report, --recent ou --check-plan.');
}
