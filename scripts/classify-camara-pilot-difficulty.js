#!/usr/bin/env node
// Triagem estrutural, sem equivalência a dificuldade empírica Cebraspe.
// Não altera etiquetas revisadas. --apply é explícito; sem argumento só relata.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const file = fileURLToPath(new URL('../data/questoes-camara.json', import.meta.url));
function estimateLegacyDifficulty(q) {
  const stmt=q.statement.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase();
  const exp=q.explanation.toLowerCase();
  const mech=(q.mechanism||"").toLowerCase();
  let score=1; const factors=[];
  const add=(predicate,desc)=>{if(predicate){score++;factors.push(desc)}};
  add(stmt.length>165,"enunciado_longo");
  add(/\b(se|caso|quando|ainda que|embora|desde que)\b/.test(stmt),"condicional");
  add(/\b(apenas|somente|sempre|nunca|necessariamente|por si so|exclusivamente|qualquer|todo)\b/.test(stmt),"quantificador_ou_limite");
  add(/\d+(?:[,.]\d+)?%?/.test(stmt),"valor_numerico");
  add(/\b(exceto|salvo|ressalvad|vedad|proibid|independente|invalida)\w*\b/.test(stmt),"excecao_normativa");
  add(/(?:confund|inver|atribui|transf|troca|infer|limite|quorum|regra|aplic)/.test(mech),"distrator_relacional");
  add(exp.length>190,"justificativa_longa");
  return {difficulty:score<=1?"facil":score<=3?"media":score<=5?"dificil":"muito-dificil",score,factors};
}
const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
const counts = {};
let changed=0;
for (const item of bank.pilotoDidatico) {
  if(item.difficultyReviewStatus === 'revisada') {
    counts[item.estimatedDifficulty] = (counts[item.estimatedDifficulty] || 0)+1;
    continue;
  }
  const predicted=estimateLegacyDifficulty(item);
  counts[predicted.difficulty]=(counts[predicted.difficulty]||0)+1;
  if(process.argv.includes('--apply')){
    item.estimatedDifficulty=predicted.difficulty;
    item.difficultyReviewStatus='pendente';
    item.difficultyMethod='triagem-estrutural-v1';
    changed++;
  }
}
if(process.argv.includes('--apply')){
  fs.writeFileSync(file, JSON.stringify(bank,null,2)+'\n');
}
console.log(JSON.stringify({method:'triagem-estrutural-v1',changed,reviewStatus:'pendente',counts},null,2));
