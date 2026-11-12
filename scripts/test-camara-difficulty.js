import assert from 'node:assert/strict';
import fs from 'node:fs';
const bank=JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json',import.meta.url),'utf8'));
const allowed=['facil','media','dificil','muito-dificil'];
assert.equal(bank.pilotoDidatico.length,389,'Alteração no piloto exige revisão desta auditoria');
const totals={};let pending=0,reviewed=0;
for(const p of bank.pilotoDidatico){
  assert(allowed.includes(p.estimatedDifficulty),'Dificuldade ausente no piloto');
  assert(['pendente','revisada'].includes(p.difficultyReviewStatus),'Status de revisão da dificuldade ausente');
  if(p.difficultyReviewStatus==='pendente'){
    assert.equal(p.difficultyMethod,'triagem-estrutural-v1','Classificação provisória sem procedência');
    pending++;
  }else reviewed++;
  totals[p.estimatedDifficulty]=(totals[p.estimatedDifficulty]||0)+1;
}
assert.equal(pending+reviewed,389);
console.log('Câmara: piloto com dificuldade estimada; pendentes='+pending+'; revisados='+reviewed+'; distribuição='+JSON.stringify(totals));
