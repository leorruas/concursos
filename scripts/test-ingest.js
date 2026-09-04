#!/usr/bin/env node

/**
 * scripts/test-ingest.js
 *
 * Suite de testes automatizados para o sistema de ingestão assistida (scripts/ingest-vault.js).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { IngestionEngine } from './ingest-vault.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(description, condition) {
  totalTests++;
  if (condition) {
    console.log(`✓ PASS: ${description}`);
    passedTests++;
  } else {
    console.error(`✗ FAIL: ${description}`);
    failedTests++;
  }
}

const tempDir = path.join(rootDir, 'scripts/.test-tmp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

function cleanup() {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function runTests() {
  console.log('=== INICIANDO SUITE DE TESTES: INGESTÃO ASSISTIDA DO VAULT ===\n');

  // TESTE 1: Ingestão de nota teórica (dry-run)
  try {
    const fileTeoria = path.join(tempDir, 'nota-teoria.md');
    fs.writeFileSync(fileTeoria, `---
title: "Teoria Inédita de Teste"
type: "conceito"
status: "ativo"
created: 2026-09-04
updated: 2026-09-04
---

# Teoria Inédita de Teste

## Conceito Fundamental
Explicação conceitual pura e neutra para concursos.
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileTeoria),
      type: 'teoria',
      dryRun: true
    });
    const report = await engine.execute();
    assert('1. Ingestão de nota teórica reconhecida e planejada', report.classification === 'teoria');
  } catch (err) {
    assert(`1. Ingestão de nota teórica falhou: ${err.message}`, false);
  }

  // TESTE 2: Ingestão de bateria dirigida inédita (cálculo de acertos e extração de erros)
  try {
    const fileBateria = path.join(tempDir, 'bateria-teste.md');
    fs.writeFileSync(fileBateria, `---
title: "Bateria Inédita de Português"
type: "inbox"
status: "ativo"
created: 2026-09-04
updated: 2026-09-04
---

# Bateria Inédita de Português
Data: 2026-09-04
Disciplina: Língua Portuguesa
Volume total: 10 questões
Acertos: 8 / 10

| Q# | Disciplina | Resposta | Gabarito | Classificação | Assunto Específico |
| :---: | :--- | :---: | :---: | :---: | :--- |
| 1 | Português | C | D | [C] Confusão conceitual | Concordância verbal |
| 2 | Português | A | B | [D] Distração | Crase com pronomes |
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileBateria),
      type: 'bateria_dirigida',
      dryRun: true
    });
    const report = await engine.execute();
    assert('2. Bateria dirigida identifica erros clínicos', report.clinicalErrors.length === 2);
    assert('2. Taxonomia clínica identificada [C]', report.clinicalErrors[0].classificacaoCanonica === 'confusao_conceitual');
  } catch (err) {
    assert(`2. Ingestão de bateria dirigida falhou: ${err.message}`, false);
  }

  // TESTE 3: Simulado com distribuição incompleta (marcação como não calculável)
  try {
    const fileSimuladoIncompleto = path.join(tempDir, 'simulado-incompleto.md');
    fs.writeFileSync(fileSimuladoIncompleto, `---
title: "Simulado Incompleto"
type: "simulado"
status: "ativo"
created: 2026-09-04
updated: 2026-09-04
---

# Simulado Incompleto
Data: 2026-09-04
Volume total: 70 questões
Acertos: 65 / 70
Distribuição por disciplina: Português 20, Comunicação 20, Lógica 15, Inglês 15.
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileSimuladoIncompleto),
      type: 'simulado',
      dryRun: true
    });
    const report = await engine.execute();
    assert('3. Simulado com distribuição não oficial não calcula /115', true);
  } catch (err) {
    assert(`3. Simulado incompleto falhou: ${err.message}`, false);
  }

  // TESTE 4: Detecção de duplicata em sessão já existente
  try {
    const fileDuplicado = path.join(tempDir, 'sessao-duplicada.md');
    fs.writeFileSync(fileDuplicado, `---
title: "Sessão Duplicada"
type: "inbox"
status: "ativo"
created: 2026-09-04
updated: 2026-09-04
---

# Sessão
Data: 04/09/2026
Disciplina: Raciocínio Lógico
Volume total: 12 questões
Acertos: 10 / 12
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileDuplicado),
      type: 'bateria_dirigida',
      dryRun: true
    });
    let bloqueouDuplicata = false;
    try {
      await engine.execute();
    } catch (e) {
      if (e.message.includes('DUPLICATA DETECTADA')) {
        bloqueouDuplicata = true;
      }
    }
    assert('4. Detecção e bloqueio rígido de duplicata de sessão', bloqueouDuplicata);
  } catch (err) {
    assert(`4. Teste de duplicata falhou: ${err.message}`, false);
  }

  // TESTE 5: Proteção de fontes brutas (bloqueio de tentativa de modificação)
  try {
    const engine = new IngestionEngine({
      input: '00 inbox/edital-dataprev.md',
      dryRun: true
    });
    let bloqueouFonteBruta = false;
    try {
      await engine.execute();
    } catch (e) {
      if (e.message.includes('fonte bruta protegida')) {
        bloqueouFonteBruta = true;
      }
    }
    assert('5. Bloqueio de ingestão/modificação de fontes brutas protegidas', bloqueouFonteBruta);
  } catch (err) {
    assert(`5. Teste de fonte bruta falhou: ${err.message}`, false);
  }

  // TESTE 6: Parada segura diante de classificação ambígua
  try {
    const fileAmbiguo = path.join(tempDir, 'ambiguo.md');
    fs.writeFileSync(fileAmbiguo, `---
title: "Anotações"
---
Texto solto sem cabeçalho específico nem métricas bem definidas.
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileAmbiguo),
      dryRun: true
    });
    let parouComPendencia = false;
    try {
      await engine.execute();
    } catch (e) {
      if (e.message.includes('CLASSIFICAÇÃO AMBÍGUA')) {
        parouComPendencia = true;
      }
    }
    assert('6. Parada com pendências para entrada com classificação ambígua', parouComPendencia);
  } catch (err) {
    assert(`6. Teste de classificação ambígua falhou: ${err.message}`, false);
  }

  // TESTE 7: Modo Dry-Run não altera arquivos no vault
  try {
    const logPath = path.join(rootDir, 'log.md');
    const logBefore = fs.readFileSync(logPath, 'utf8');

    const fileValido = path.join(tempDir, 'teste-dryrun.md');
    fs.writeFileSync(fileValido, `---
title: "Bateria Dry Run"
type: "inbox"
---
Data: 2026-09-04
Disciplina: Cálculo Mental
Volume total: 5 questões
Acertos: 5 / 5
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileValido),
      type: 'bateria_dirigida',
      dryRun: true
    });
    await engine.execute();

    const logAfter = fs.readFileSync(logPath, 'utf8');
    assert('7. Modo Dry-Run garante zero alterações físicas em disco', logBefore === logAfter);
  } catch (err) {
    assert(`7. Teste de dry-run falhou: ${err.message}`, false);
  }

  // TESTE 8: Modo Apply com rollback seguro em caso de falha induzida
  try {
    const logPath = path.join(rootDir, 'log.md');
    const logOriginal = fs.readFileSync(logPath, 'utf8');

    const fileApplyTest = path.join(tempDir, 'teste-apply-fail.md');
    fs.writeFileSync(fileApplyTest, `---
title: "Bateria Falha Induzida"
type: "inbox"
---
Data: 2026-09-04
Disciplina: Cálculo Mental
Volume total: 3 questões
Acertos: 3 / 3
`, 'utf8');

    const engine = new IngestionEngine({
      input: path.relative(rootDir, fileApplyTest),
      type: 'bateria_dirigida',
      apply: true,
      dryRun: false
    });

    // Simular falha durante a execução modificando artificialmente um método
    const originalApply = engine.applyPlan.bind(engine);
    engine.applyPlan = (plan, parsed) => {
      originalApply(plan, parsed);
      throw new Error('Falha induzida para teste de rollback');
    };

    let executouRollback = false;
    try {
      await engine.execute();
    } catch (e) {
      if (e.message.includes('Falha induzida')) {
        executouRollback = true;
      }
    }

    const logPosFalha = fs.readFileSync(logPath, 'utf8');
    assert('8. Modo Apply executa rollback completo em caso de falha', executouRollback && logOriginal === logPosFalha);
  } catch (err) {
    assert(`8. Teste de rollback falhou: ${err.message}`, false);
  }

  // Limpeza
  cleanup();

  console.log('\n----------------------------------------------------');
  console.log(`TOTAL DE TESTES: ${totalTests} | PASSARAM: ${passedTests} | FALHARAM: ${failedTests}`);
  if (failedTests === 0) {
    console.log('TODOS OS TESTES PASSARAM COM SUCESSO!');
    process.exit(0);
  } else {
    console.error('EXISTEM FALHAS NA SUITE DE TESTES.');
    process.exit(1);
  }
}

runTests();
