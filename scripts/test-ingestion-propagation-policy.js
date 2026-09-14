#!/usr/bin/env node

import {
  destinosObrigatoriosIngestao,
  validarManifestoPropagacao,
  mapearPastaMateria
} from './ingestion-propagation-policy.js';

let failures = 0;
function assert(desc, condition) {
  if (condition) console.log(`✓ ${desc}`);
  else {
    console.error(`✗ ${desc}`);
    failures++;
  }
}

function manifest(paths) {
  return {
    version: 1,
    operations: paths.map((path) => ({ op: 'replace', path, expectedSha256: 'x', content: 'x' }))
  };
}

assert('Mapeia Comunicação', mapearPastaMateria('Comunicação Social') === 'Comunicacao');
assert('Mapeia Raciocínio Lógico', mapearPastaMateria('Raciocínio Lógico') === 'Logica');
assert('Mapeia Administração Geral', mapearPastaMateria('Administração Geral') === 'Administracao Geral');

const bateriaSemErro = destinosObrigatoriosIngestao({
  classification: 'bateria_dirigida',
  disciplina: 'Português',
  hasErrors: false
});
assert('Bateria exige Avanços local', bateriaSemErro.includes('3 - Materias/Portugues/Avancos.md'));
assert('Bateria exige Avanços globais', bateriaSemErro.includes('00 - Desempenho/00 Avancos globais.md'));
assert('Bateria sem erro não exige Log de erros', !bateriaSemErro.includes('4 - Projetos/dataprev-2026/Log de erros.md'));

const bateriaComErro = destinosObrigatoriosIngestao({
  classification: 'bateria_dirigida',
  disciplina: 'Comunicação',
  hasErrors: true
});
assert('Bateria com erro exige erros recorrentes', bateriaComErro.includes('data/erros-recorrentes.json'));
assert('Bateria com erro exige Log de erros', bateriaComErro.includes('4 - Projetos/dataprev-2026/Log de erros.md'));

const simulado = destinosObrigatoriosIngestao({
  classification: 'simulado',
  hasErrors: true
});
assert('Simulado exige catálogo', simulado.includes('00 - Desempenho/Simulados/00 - Catalogo de simulados.md'));
assert('Simulado exige dashboard', simulado.includes('4 - Projetos/dataprev-2026/00 Dashboard.md'));

let incompleteBlocked = false;
try {
  validarManifestoPropagacao(manifest(['log.md']), {
    classification: 'bateria_dirigida',
    disciplina: 'Lógica',
    hasErrors: false
  });
} catch {
  incompleteBlocked = true;
}
assert('Change set parcial de bateria é bloqueado', incompleteBlocked);

const completeBatteryPaths = destinosObrigatoriosIngestao({
  classification: 'bateria_dirigida',
  disciplina: 'Lógica',
  hasErrors: true
});
let completeAccepted = true;
try {
  validarManifestoPropagacao(manifest(completeBatteryPaths), {
    classification: 'bateria_dirigida',
    disciplina: 'Lógica',
    hasErrors: true
  });
} catch {
  completeAccepted = false;
}
assert('Change set completo de bateria é aceito', completeAccepted);

let theoryWithoutNoteBlocked = false;
try {
  validarManifestoPropagacao(manifest(['log.md', 'index.md']), {
    classification: 'teoria',
    hasErrors: false
  });
} catch {
  theoryWithoutNoteBlocked = true;
}
assert('Teoria sem nota canônica no change set é bloqueada', theoryWithoutNoteBlocked);

let theoryWithNoteAccepted = true;
try {
  validarManifestoPropagacao(manifest([
    'log.md',
    'index.md',
    '3 - Materias/Portugues/99 - fixture.md'
  ]), {
    classification: 'teoria',
    hasErrors: false
  });
} catch {
  theoryWithNoteAccepted = false;
}
assert('Teoria com nota + index + log é aceita pela política', theoryWithNoteAccepted);

if (failures > 0) {
  console.error(`FALHA: ${failures} teste(s) de propagação falharam.`);
  process.exit(1);
}
console.log('SUCESSO: política de propagação da ingestão validada.');
