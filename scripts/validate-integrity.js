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

console.log('--- 1. AUDITORIA DE INTEGRIDADE REFERENCIAL ---');

// Matérias
const materiasPath = path.join(rootDir, 'data/materias.json');
check('data/materias.json existe', fs.existsSync(materiasPath));
const materias = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));
const materiaIds = new Set(materias.map(m => m.id));

for (const mat of materias) {
  const notaPrincipalPath = path.join(rootDir, mat.notaPrincipal);
  check(`Nota principal existe para [${mat.id}]: ${mat.notaPrincipal}`, fs.existsSync(notaPrincipalPath));
  if (mat.sourcePath) {
    check(`Fonte real existe para matéria [${mat.id}]: ${mat.sourcePath}`, fs.existsSync(path.join(rootDir, mat.sourcePath)));
  }
}

// Concursos
const concursosPath = path.join(rootDir, 'data/concursos.json');
check('data/concursos.json existe', fs.existsSync(concursosPath));
const concursos = JSON.parse(fs.readFileSync(concursosPath, 'utf8'));
const concursoIds = new Set(concursos.map(c => c.id));

for (const c of concursos) {
  if (c.sourcePath) {
    check(`Documento fonte do concurso [${c.id}] existe: ${c.sourcePath}`, fs.existsSync(path.join(rootDir, c.sourcePath)));
  }
}

// Itens de Edital
const editalItensPath = path.join(rootDir, 'data/edital-itens.json');
check('data/edital-itens.json existe', fs.existsSync(editalItensPath));
const editalItens = JSON.parse(fs.readFileSync(editalItensPath, 'utf8'));

for (const item of editalItens) {
  check(`Item ${item.codigo} aponta para concurso existente [${item.concursoId}]`, concursoIds.has(item.concursoId));
  for (const mId of item.materiaIds) {
    check(`Item ${item.codigo} vinculado a matéria canônica válida [${mId}]`, materiaIds.has(mId));
  }
}

// Erros
const errosPath = path.join(rootDir, 'data/erros.json');
check('data/erros.json existe', fs.existsSync(errosPath));
const erros = JSON.parse(fs.readFileSync(errosPath, 'utf8'));

for (const err of erros) {
  check(`Erro [${err.id}] vinculado a matéria canônica válida [${err.materiaId}]`, materiaIds.has(err.materiaId));
  if (err.sourcePath) {
    check(`Fonte auditável do erro [${err.id}] existe: ${err.sourcePath}`, fs.existsSync(path.join(rootDir, err.sourcePath)));
  }
}

console.log('--- 2. AUDITORIA DE INTEGRIDADE SEMÂNTICA ---');

// Validar que apenas um concurso é 'ativo'
const concursosAtivos = concursos.filter(c => c.status === 'ativo');
warn('Existe exatamente um concurso com status "ativo"', concursosAtivos.length === 1);

// Validar que nenhuma data de prova é no passado sem status concluído
const hoje = new Date().toISOString().split('T')[0];
for (const c of concursos) {
  if (c.dataProva < hoje && c.status === 'ativo') {
    warn(`Concurso [${c.id}] tem data no passado mas ainda está marcado como ativo`, false);
  }
}

// Validar que itens com evidência de domínio possuem origem declarada
for (const item of editalItens) {
  if (item.evidenciaDominio && item.evidenciaDominio.mensuravel) {
    warn(`Item [${item.codigo}] com domínio mensurável possui 'origemEvidencia'`, !!item.evidenciaDominio.origemEvidencia);
  }
}

// Validar que data/questoes.json e data/revisoes.json não contêm dados demo disfarçados de fatos
const questoesPath = path.join(rootDir, 'data/questoes.json');
const revisoesPath = path.join(rootDir, 'data/revisoes.json');
const questoes = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
const revisoes = JSON.parse(fs.readFileSync(revisoesPath, 'utf8'));

warn('Banco de questões de produção não possui itens simulados sem catálogo formal', questoes.length === 0 || questoes.every(q => !!q.sourcePath));
warn('Fila SRS de produção não possui revisões sintéticas sem metodologia formal ativa', revisoes.length === 0 || revisoes.every(r => !!r.sourceRecordId));

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log(`SUCESSO: Auditoria concluída com 0 erros e ${warnings} avisos semânticos.`);
  process.exit(0);
} else {
  console.error(`FALHA: Encontrados ${errors} erros.`);
  process.exit(1);
}
