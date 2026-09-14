#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { aplicarChangeSet } from './changeset-transaction.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { file: null, noValidate: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1]) options.file = args[++i];
    else if (args[i] === '--no-validate') options.noValidate = true;
  }
  return options;
}

function runValidator(script) {
  execFileSync('node', [script], { cwd: rootDir, stdio: 'inherit' });
}

const options = parseArgs();
if (!options.file) {
  console.error('Uso: node scripts/apply-changeset.js --file caminho/change-set.json');
  process.exit(1);
}

const manifestPath = path.resolve(rootDir, options.file);
if (!fs.existsSync(manifestPath)) {
  console.error(`Change set não encontrado: ${options.file}`);
  process.exit(1);
}

try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`=== CHANGE SET: ${manifest.description || path.basename(manifestPath)} ===`);

  const result = aplicarChangeSet(rootDir, manifest, {
    afterApply: () => {
      if (options.noValidate) return;
      runValidator('scripts/validate-vault-invariants.js');
      runValidator('scripts/validate-integrity.js');
    }
  });

  console.log(`✓ Change set aplicado integralmente: ${result.changed.length} arquivo(s).`);
  for (const file of result.changed) console.log(`  - ${file}`);
} catch (error) {
  console.error(`✗ CHANGE SET ABORTADO/REVERTIDO: ${error.message}`);
  process.exit(1);
}
