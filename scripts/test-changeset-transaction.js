#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { aplicarChangeSet, fileSha256 } from './changeset-transaction.js';

let failures = 0;
function assert(desc, condition) {
  if (condition) console.log(`✓ ${desc}`);
  else {
    console.error(`✗ ${desc}`);
    failures++;
  }
}

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'concursos-changeset-'));
try {
  fs.writeFileSync(path.join(root, 'a.md'), 'A0\n', 'utf8');
  fs.writeFileSync(path.join(root, 'b.md'), 'B0\n', 'utf8');
  fs.writeFileSync(path.join(root, 'log.md'), 'LOG0\n', 'utf8');

  const manifest = {
    version: 1,
    operations: [
      { op: 'replace', path: 'a.md', expectedSha256: fileSha256(path.join(root, 'a.md')), content: 'A1\n' },
      { op: 'append', path: 'b.md', expectedSha256: fileSha256(path.join(root, 'b.md')), content: 'B1\n' },
      { op: 'prepend', path: 'log.md', expectedSha256: fileSha256(path.join(root, 'log.md')), content: 'LOG1\n' },
      { op: 'create', path: 'novo.md', content: 'NOVO\n' }
    ]
  };

  aplicarChangeSet(root, manifest);
  assert('Replace aplicado', fs.readFileSync(path.join(root, 'a.md'), 'utf8') === 'A1\n');
  assert('Append aplicado', fs.readFileSync(path.join(root, 'b.md'), 'utf8') === 'B0\nB1\n');
  assert('log.md só foi alterado por prepend', fs.readFileSync(path.join(root, 'log.md'), 'utf8') === 'LOG1\nLOG0\n');
  assert('Create aplicado', fs.readFileSync(path.join(root, 'novo.md'), 'utf8') === 'NOVO\n');

  // Concorrência: um único hash stale precisa bloquear TODO o conjunto antes da escrita.
  const beforeA = fs.readFileSync(path.join(root, 'a.md'), 'utf8');
  const beforeB = fs.readFileSync(path.join(root, 'b.md'), 'utf8');
  let conflictBlocked = false;
  try {
    aplicarChangeSet(root, {
      version: 1,
      operations: [
        { op: 'replace', path: 'a.md', expectedSha256: fileSha256(path.join(root, 'a.md')), content: 'A2\n' },
        { op: 'replace', path: 'b.md', expectedSha256: '0'.repeat(64), content: 'B2\n' }
      ]
    });
  } catch {
    conflictBlocked = true;
  }
  assert('Hash stale bloqueia a transação', conflictBlocked);
  assert('Conflito não deixou escrita parcial em A', fs.readFileSync(path.join(root, 'a.md'), 'utf8') === beforeA);
  assert('Conflito não alterou B', fs.readFileSync(path.join(root, 'b.md'), 'utf8') === beforeB);

  // Falha pós-escrita deve restaurar todos os arquivos.
  const rollbackA = fs.readFileSync(path.join(root, 'a.md'), 'utf8');
  const rollbackB = fs.readFileSync(path.join(root, 'b.md'), 'utf8');
  let rollbackWorked = false;
  try {
    aplicarChangeSet(root, {
      version: 1,
      operations: [
        { op: 'replace', path: 'a.md', expectedSha256: fileSha256(path.join(root, 'a.md')), content: 'AX\n' },
        { op: 'replace', path: 'b.md', expectedSha256: fileSha256(path.join(root, 'b.md')), content: 'BX\n' }
      ]
    }, {
      afterApply: () => { throw new Error('validação sintética falhou'); }
    });
  } catch {
    rollbackWorked = true;
  }
  assert('Falha de validação dispara rollback', rollbackWorked);
  assert('Rollback restaurou A', fs.readFileSync(path.join(root, 'a.md'), 'utf8') === rollbackA);
  assert('Rollback restaurou B', fs.readFileSync(path.join(root, 'b.md'), 'utf8') === rollbackB);

  let logReplaceBlocked = false;
  try {
    aplicarChangeSet(root, {
      version: 1,
      operations: [
        { op: 'replace', path: 'log.md', expectedSha256: fileSha256(path.join(root, 'log.md')), content: 'TRUNCADO\n' }
      ]
    });
  } catch {
    logReplaceBlocked = true;
  }
  assert('Replace de log.md é proibido', logReplaceBlocked);
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}

if (failures > 0) {
  console.error(`FALHA: ${failures} teste(s) de change set falharam.`);
  process.exit(1);
}
console.log('SUCESSO: transação multi-arquivo validada.');
