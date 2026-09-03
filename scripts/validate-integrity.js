import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let errors = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`✓ ${desc}`);
  } else {
    console.error(`✗ ERRO: ${desc}`);
    errors++;
  }
}

console.log('--- Auditoria de Integridade: Base de Concursos leorruas ---');

// 1. Matérias
const materiasPath = path.join(rootDir, 'data/materias.json');
check('data/materias.json existe', fs.existsSync(materiasPath));
const materias = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));
const materiaIds = new Set(materias.map(m => m.id));

for (const mat of materias) {
  const notaPrincipalPath = path.join(rootDir, mat.notaPrincipal);
  check(`Nota principal existe para [${mat.id}]: ${mat.notaPrincipal}`, fs.existsSync(notaPrincipalPath));
}

// 2. Concursos
const concursosPath = path.join(rootDir, 'data/concursos.json');
check('data/concursos.json existe', fs.existsSync(concursosPath));
const concursos = JSON.parse(fs.readFileSync(concursosPath, 'utf8'));
const concursoIds = new Set(concursos.map(c => c.id));

// 3. Edital Itens
const editalItensPath = path.join(rootDir, 'data/edital-itens.json');
check('data/edital-itens.json existe', fs.existsSync(editalItensPath));
const editalItens = JSON.parse(fs.readFileSync(editalItensPath, 'utf8'));

for (const item of editalItens) {
  check(`Item ${item.codigo} aponta para concurso válido [${item.concursoId}]`, concursoIds.has(item.concursoId));
  for (const mId of item.materiaIds) {
    check(`Item ${item.codigo} vinculado a matéria canônica válida [${mId}]`, materiaIds.has(mId));
  }
}

// 4. Questões
const questoesPath = path.join(rootDir, 'data/questoes.json');
check('data/questoes.json existe', fs.existsSync(questoesPath));
const questoes = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
for (const q of questoes) {
  for (const mId of q.materiaIds) {
    check(`Questão ${q.id} vinculada à matéria válida [${mId}]`, materiaIds.has(mId));
  }
}

// 5. Erros Clínicos
const errosPath = path.join(rootDir, 'data/erros.json');
check('data/erros.json existe', fs.existsSync(errosPath));
const erros = JSON.parse(fs.readFileSync(errosPath, 'utf8'));
for (const err of erros) {
  check(`Erro ${err.id} aponta para matéria válida [${err.materiaId}]`, materiaIds.has(err.materiaId));
}

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log('SUCESSO: Todos os links, caminhos Markdown e IDs canônicos são 100% consistentes!');
  process.exit(0);
} else {
  console.error(`FALHA: Encontrados ${errors} erros.`);
  process.exit(1);
}
