#!/usr/bin/env node

import { classificarDestinoQuestao, DESTINOS_QUESTAO } from './question-ingestion-policy.js';

let failures = 0;

function assertSet(desc, actual, expected) {
  const a = [...actual].sort();
  const e = [...expected].sort();
  const pass = JSON.stringify(a) === JSON.stringify(e);
  if (pass) console.log(`✓ ${desc}`);
  else {
    console.error(`✗ ${desc}\n  esperado: ${e.join(', ')}\n  obtido:   ${a.join(', ')}`);
    failures++;
  }
}

const D = DESTINOS_QUESTAO;

assertSet(
  '[C] gera métrica + teoria + candidata comentada',
  classificarDestinoQuestao({ taxonomia: 'C', resultado: 'erro' }).destinos,
  [D.METRICA, D.TEORIA, D.COMENTADA]
);

assertSet(
  '[K] simples atualiza teoria sem obrigar questão comentada',
  classificarDestinoQuestao({ taxonomia: 'K', resultado: 'erro' }).destinos,
  [D.METRICA, D.TEORIA]
);

assertSet(
  '[I] isolado permanece apenas em métricas',
  classificarDestinoQuestao({ taxonomia: 'I', resultado: 'erro' }).destinos,
  [D.METRICA]
);

assertSet(
  '[I] recorrente sobe para teoria, comentada e recorrência',
  classificarDestinoQuestao({ taxonomia: 'I', resultado: 'erro', mecanismoRecorrente: true }).destinos,
  [D.METRICA, D.TEORIA, D.COMENTADA, D.RECORRENTE]
);

assertSet(
  '[D] isolado não polui teoria',
  classificarDestinoQuestao({ taxonomia: 'D', resultado: 'erro' }).destinos,
  [D.METRICA]
);

assertSet(
  '[D] recorrente gera heurística teórica e recorrência',
  classificarDestinoQuestao({ taxonomia: 'D', resultado: 'erro', mecanismoRecorrente: true }).destinos,
  [D.METRICA, D.TEORIA, D.RECORRENTE]
);

assertSet(
  'Acerto com distrator forte pode virar questão comentada',
  classificarDestinoQuestao({ resultado: 'acerto', distratorForte: true }).destinos,
  [D.METRICA, D.COMENTADA]
);

assertSet(
  'Conteúdo ausente exige nova nota e enriquecimento teórico',
  classificarDestinoQuestao({ taxonomia: 'K', resultado: 'erro', conteudoAusente: true }).destinos,
  [D.METRICA, D.TEORIA, D.NOVA_NOTA]
);

if (failures > 0) {
  console.error(`FALHA: ${failures} teste(s) da política de questões falharam.`);
  process.exit(1);
}

console.log('SUCESSO: política pedagógica de questões validada.');
