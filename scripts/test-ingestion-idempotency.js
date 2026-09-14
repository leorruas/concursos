#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import {
  calcularFingerprintIngestao,
  carregarLedger,
  localizarFingerprint,
  registrarFingerprintAtomico
} from './ingestion-idempotency.js';

let failures = 0;
function assert(desc, condition) {
  if (condition) console.log(`✓ ${desc}`);
  else {
    console.error(`✗ ${desc}`);
    failures++;
  }
}

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'concursos-ingest-idempotency-'));
const ledgerPath = path.join(tempDir, 'ledger.json');

try {
  const original = 'Questão 1\r\nResposta: A   \r\n';
  const equivalente = 'Questão 1\nResposta: A\n\n';
  const diferente = 'Questão 1\nResposta: B\n';

  const fp1 = calcularFingerprintIngestao({ content: original, concurso: 'dataprev-2026' });
  const fp2 = calcularFingerprintIngestao({ content: equivalente, concurso: 'dataprev-2026' });
  const fp3 = calcularFingerprintIngestao({ content: diferente, concurso: 'dataprev-2026' });
  const fpOutroConcurso = calcularFingerprintIngestao({ content: original, concurso: 'tcdf-2026-anace' });

  assert('Normalização torna CRLF/whitespace equivalentes', fp1 === fp2);
  assert('Mudança substantiva gera fingerprint diferente', fp1 !== fp3);
  assert('Mesmo conteúdo pode pertencer a concurso diferente sem colisão', fp1 !== fpOutroConcurso);

  let result = registrarFingerprintAtomico(ledgerPath, {
    fingerprint: fp1,
    input: 'fixture.md',
    concurso: 'dataprev-2026',
    classification: 'bateria_dirigida',
    processedAt: '2026-09-14T12:00:00.000Z'
  });
  assert('Primeiro registro é adicionado', result.added === true);

  result = registrarFingerprintAtomico(ledgerPath, {
    fingerprint: fp1,
    input: 'outra-copia.md',
    concurso: 'dataprev-2026',
    classification: 'simulado',
    processedAt: '2026-09-14T12:01:00.000Z'
  });
  assert('Segundo registro do mesmo fingerprint é bloqueado', result.added === false);

  const ledger = carregarLedger(ledgerPath);
  assert('Ledger permanece com uma única ingestão efetiva', ledger.length === 1);
  assert('Fingerprint pode ser localizado depois do registro', !!localizarFingerprint(ledger, fp1));

  registrarFingerprintAtomico(ledgerPath, {
    fingerprint: fp3,
    input: 'fixture-diferente.md',
    concurso: 'dataprev-2026',
    classification: 'bateria_dirigida',
    processedAt: '2026-09-14T12:02:00.000Z'
  });
  assert('Conteúdo diferente pode ser ingerido normalmente', carregarLedger(ledgerPath).length === 2);
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

if (failures > 0) {
  console.error(`FALHA: ${failures} teste(s) de idempotência falharam.`);
  process.exit(1);
}

console.log('SUCESSO: testes de idempotência passaram.');
