import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootApp = path.resolve(__dirname, '..');

let errors = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`✓ ${desc}`);
  } else {
    console.error(`✗ ERRO: ${desc}`);
    errors++;
  }
}

console.log('--- Iniciando Auditoria de Integridade Referencial ---');

// 1. Carregar matérias
const materiasPath = path.join(rootApp, 'data/materias.json');
check('Arquivo data/materias.json existe', fs.existsSync(materiasPath));
const materias = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));
const materiaIds = new Set(materias.map(m => m.id));

// 2. Verificar caminhos Markdown das matérias
for (const mat of materias) {
  const mdPath = path.join(rootApp, mat.notaMarkdown);
  check(`Nota Markdown existe para [${mat.id}]: ${mat.notaMarkdown}`, fs.existsSync(mdPath));
}

// 3. Carregar concursos e editais
const concursosPath = path.join(rootApp, 'data/concursos.json');
check('Arquivo data/concursos.json existe', fs.existsSync(concursosPath));
const concursos = JSON.parse(fs.readFileSync(concursosPath, 'utf8'));

for (const conc of concursos) {
  const editalPath = path.join(rootApp, conc.editalArquivo);
  check(`Arquivo de edital existe para [${conc.id}]: ${conc.editalArquivo}`, fs.existsSync(editalPath));
  if (fs.existsSync(editalPath)) {
    const edital = JSON.parse(fs.readFileSync(editalPath, 'utf8'));
    for (const item of edital) {
      for (const mId of item.materiaIds) {
        check(`Item de edital ${item.codigo} aponta para matéria existente [${mId}]`, materiaIds.has(mId));
      }
    }
  }
}

// 4. Verificar questões
const questoesPath = path.join(rootApp, 'data/questoes.json');
check('Arquivo data/questoes.json existe', fs.existsSync(questoesPath));
const questoes = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
for (const q of questoes) {
  for (const mId of q.materiaIds) {
    check(`Questão ${q.id} vinculada à matéria válida [${mId}]`, materiaIds.has(mId));
  }
}

// 5. Verificar erros clínicos
const errosPath = path.join(rootApp, 'data/erros.json');
check('Arquivo data/erros.json existe', fs.existsSync(errosPath));
const erros = JSON.parse(fs.readFileSync(errosPath, 'utf8'));
for (const err of erros) {
  check(`Erro ${err.id} aponta para matéria válida [${err.materiaId}]`, materiaIds.has(err.materiaId));
}

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log('SUCESSO: Todos os links e referências do painel são válidos!');
  process.exit(0);
} else {
  console.error(`FALHA: Encontrados ${errors} erros de integridade referencial.`);
  process.exit(1);
}
