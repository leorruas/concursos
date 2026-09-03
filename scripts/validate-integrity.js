import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let errors = 0;
let warnings = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`✓ ${desc}`);
  } else {
    console.error(`✗ ERRO: ${desc}`);
    errors++;
  }
}

function warn(desc, condition) {
  if (condition) {
    console.log(`✓ ${desc}`);
  } else {
    console.warn(`! AVISO SEMÂNTICO: ${desc}`);
    warnings++;
  }
}

console.log('--- AUDITORIA: CAMADA ESTRATÉGICA E INTEGRIDADE DE LINKS ---');

// 1. Concursos
const concursosPath = path.join(rootDir, 'data/concursos.json');
check('data/concursos.json existe', fs.existsSync(concursosPath));
const concursos = JSON.parse(fs.readFileSync(concursosPath, 'utf8'));
const concursoIds = new Set();

for (const c of concursos) {
  check(`Concurso [${c.id}] possui ID único`, !concursoIds.has(c.id));
  concursoIds.add(c.id);
  check(`Concurso [${c.id}] possui nome, banca e cargo`, !!(c.nome && c.banca && c.cargo));
  if (c.sourcePath) {
    check(`Documento oficial do concurso [${c.id}] existe: ${c.sourcePath}`, fs.existsSync(path.join(rootDir, c.sourcePath)));
  }
}

// 2. Itens do Edital
const editalItensPath = path.join(rootDir, 'data/edital-itens.json');
check('data/edital-itens.json existe', fs.existsSync(editalItensPath));
const editalItens = JSON.parse(fs.readFileSync(editalItensPath, 'utf8'));
const itemIds = new Set();

for (const item of editalItens) {
  check(`Item [${item.id}] possui ID único`, !itemIds.has(item.id));
  itemIds.add(item.id);
  check(`Item [${item.codigo}] aponta para concurso válido [${item.concursoId}]`, concursoIds.has(item.concursoId));
  if (item.sourcePath) {
    check(`Fonte real do item [${item.codigo}] existe: ${item.sourcePath}`, fs.existsSync(path.join(rootDir, item.sourcePath)));
  }
  if (item.notaPath) {
    check(`Nota mapeada existe no vault para item [${item.codigo}]: ${item.notaPath}`, fs.existsSync(path.join(rootDir, item.notaPath)));
  }
}

// 3. Erros Recorrentes
const errosPath = path.join(rootDir, 'data/erros-recorrentes.json');
if (fs.existsSync(errosPath)) {
  const erros = JSON.parse(fs.readFileSync(errosPath, 'utf8'));
  const erroIds = new Set();
  for (const err of erros) {
    check(`Erro [${err.id}] possui ID único`, !erroIds.has(err.id));
    erroIds.add(err.id);
    check(`Erro [${err.id}] aponta para concurso válido [${err.concursoId}]`, concursoIds.has(err.concursoId));
    if (err.sourcePath) {
      check(`Fonte do erro [${err.id}] existe: ${err.sourcePath}`, fs.existsSync(path.join(rootDir, err.sourcePath)));
    }
    if (err.notaPath) {
      check(`Nota do erro [${err.id}] existe: ${err.notaPath}`, fs.existsSync(path.join(rootDir, err.notaPath)));
    }
  }
}

// 4. Semântica: Impedir mocks de produção
const questoesPath = path.join(rootDir, 'data/questoes.json');
const revisoesPath = path.join(rootDir, 'data/revisoes.json');
check('Não existem questões sintéticas soltas em data/questoes.json', !fs.existsSync(questoesPath));
check('Não existem revisões sintéticas soltas em data/revisoes.json', !fs.existsSync(revisoesPath));

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log(`SUCESSO: Auditoria validada com 0 erros e ${warnings} avisos semânticos.`);
  process.exit(0);
} else {
  console.error(`FALHA: Encontrados ${errors} erros.`);
  process.exit(1);
}
