import assert from 'node:assert/strict';
import fs from 'node:fs';
import { assessPilotDifficulty, verifyPilotDifficulty } from './classify-camara-pilot-difficulty.js';
const bank=JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json',import.meta.url),'utf8'));
assert.equal(bank.pilotoDidatico.length,389,'Mudança no tamanho histórico exige auditoria da baseline');
const report=verifyPilotDifficulty(bank);
assert.equal(report.provisional+report.editorial,389);
assert.deepEqual(report.mismatches,[],report.mismatches.join('\n'));
for(const item of bank.pilotoDidatico){
  if(item.difficultyAssessment.status==='provisoria'){
    assert.deepEqual(assessPilotDifficulty(item),{estimatedDifficulty:item.estimatedDifficulty,difficultyAssessment:item.difficultyAssessment});
  }
}
console.log('Câmara: 389 dificuldades históricas classificadas e marcadas com proveniência. Dificuldade real pendente de validação editorial.');
