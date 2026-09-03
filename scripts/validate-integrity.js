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
    console.warn(`! AVISO: ${desc}`);
    warnings++;
  }
}

console.log('=== AUDITORIA 1: CONCURSOS E SEPARAÇÃO DE METAS ===');
const concursosPath = path.join(rootDir, 'data/concursos.json');
check('data/concursos.json existe', fs.existsSync(concursosPath));
const concursos = JSON.parse(fs.readFileSync(concursosPath, 'utf8'));
const concursoIds = new Set();

for (const c of concursos) {
  check(`Concurso [${c.id}] possui ID único`, !concursoIds.has(c.id));
  concursoIds.add(c.id);
  check(`Concurso [${c.id}] possui banca, cargo e data da prova`, !!(c.banca && c.cargo && c.dataProva));
  check(`Concurso [${c.id}] possui documento oficial rastreável`, !!(c.sourcePath && fs.existsSync(path.join(rootDir, c.sourcePath))));
  
  // Auditar separação epistemológica: fatos de edital vs metas do candidato
  check(`Concurso [${c.id}] separa estrutura da prova de metas do candidato`, !!c.estruturaProva && !!c.metasCandidato);
  if (c.metasCandidato && c.metasCandidato.metaPontuacao) {
    check(`Meta de pontuação de [${c.id}] possui documento de planejamento estratégico`, !!(c.metasCandidato.sourcePath && fs.existsSync(path.join(rootDir, c.metasCandidato.sourcePath))));
  }
}

console.log('\n=== AUDITORIA 2: ITENS DE EDITAL E NOTAS VINCULADAS ===');
const editalItensPath = path.join(rootDir, 'data/edital-itens.json');
check('data/edital-itens.json existe', fs.existsSync(editalItensPath));
const editalItens = JSON.parse(fs.readFileSync(editalItensPath, 'utf8'));
const itemIds = new Set();

for (const item of editalItens) {
  check(`Item [${item.id}] possui ID único`, !itemIds.has(item.id));
  itemIds.add(item.id);
  check(`Item [${item.codigo}] aponta para concurso existente [${item.concursoId}]`, concursoIds.has(item.concursoId));
  check(`Item [${item.codigo}] possui fonte oficial real`, !!(item.sourcePath && fs.existsSync(path.join(rootDir, item.sourcePath))));
  
  if (item.notaPath) {
    check(`Nota mapeada para [${item.codigo}] existe no vault: ${item.notaPath}`, fs.existsSync(path.join(rootDir, item.notaPath)));
  }

  if (item.dominioMensuravel) {
    check(`Item [${item.codigo}] com domínio mensurável possui evidência com origem e status`, !!(item.evidencia && item.evidencia.status && item.evidencia.origem && fs.existsSync(path.join(rootDir, item.evidencia.origem))));
  }
}

console.log('\n=== AUDITORIA 3: ERROS CLÍNICOS E EVIDÊNCIA DE PRIORIDADE ===');
const errosPath = path.join(rootDir, 'data/erros-recorrentes.json');
check('data/erros-recorrentes.json existe', fs.existsSync(errosPath));
const erros = JSON.parse(fs.readFileSync(errosPath, 'utf8'));
const erroIds = new Set();

for (const err of erros) {
  check(`Erro [${err.id}] possui ID único`, !erroIds.has(err.id));
  erroIds.add(err.id);
  check(`Erro [${err.id}] vinculado a concurso existente [${err.concursoId}]`, concursoIds.has(err.concursoId));
  check(`Erro [${err.id}] possui documento fonte real: ${err.sourcePath}`, !!(err.sourcePath && fs.existsSync(path.join(rootDir, err.sourcePath))));
  check(`Erro [${err.id}] possui nota de revisão existente: ${err.notaPath}`, !!(err.notaPath && fs.existsSync(path.join(rootDir, err.notaPath))));
}

console.log('\n=== AUDITORIA 4: INTEGRIDADE SEMÂNTICA E ZERO MOCKS ===');
check('Sem arquivos sintéticos de questões em data/', !fs.existsSync(path.join(rootDir, 'data/questoes.json')));
check('Sem arquivos sintéticos de revisões SRS em data/', !fs.existsSync(path.join(rootDir, 'data/revisoes.json')));

// 5. Auditoria de Segurança do Artefato Isolado (_site)
if (process.argv.includes('--audit-site')) {
  console.log('\n=== AUDITORIA 5: SEGURANÇA DO ARTEFATO DE PUBLICAÇÃO (_site) ===');
  const siteDir = path.join(rootDir, '_site');
  check('_site/ existe e foi gerado', fs.existsSync(siteDir));

  const manifestSitePath = path.join(siteDir, 'manifest.json');
  check('_site/manifest.json existe', fs.existsSync(manifestSitePath));

  // Varrer todos os arquivos de _site e garantir ausência total de arquivos privados
  function varrerSite(dir, rel = '') {
    let proibidosEncontrados = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const entryRel = path.join(rel, e.name).replace(/\\/g, '/');
      const fullPath = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (
          entryRel.startsWith('00 inbox') ||
          entryRel.startsWith('1 - Planejamento') ||
          entryRel.startsWith('2 - Editais') ||
          entryRel.startsWith('4 - Projetos') ||
          entryRel.startsWith('.agent') ||
          entryRel.startsWith('.git') ||
          entryRel.startsWith('.github') ||
          entryRel.startsWith('.obsidian') ||
          entryRel.startsWith('scripts')
        ) {
          proibidosEncontrados.push(entryRel);
        }
        proibidosEncontrados.push(...varrerSite(fullPath, entryRel));
      } else {
        const nameLower = e.name.toLowerCase();
        if (
          nameLower === 'me.md' ||
          nameLower === 'agents.md' ||
          nameLower === 'log.md' ||
          nameLower === 'todo.md' ||
          nameLower.endsWith('.sh') ||
          entryRel.startsWith('00 inbox/') ||
          entryRel.startsWith('1 - Planejamento/') ||
          entryRel.startsWith('2 - Editais/') ||
          entryRel.startsWith('4 - Projetos/')
        ) {
          proibidosEncontrados.push(entryRel);
        }
      }
    }
    return proibidosEncontrados;
  }

  const vazamentos = varrerSite(siteDir);
  check('Nenhum arquivo ou pasta privada presente no artefato _site/', vazamentos.length === 0);
  if (vazamentos.length > 0) {
    console.error('ARQUIVOS PRIVADOS DETECTADOS EM _site/:', vazamentos);
  }
}

console.log('----------------------------------------------------');
if (errors === 0) {
  console.log(`SUCESSO TOTAL: Auditoria concluída com 0 erros e ${warnings} avisos.`);
  process.exit(0);
} else {
  console.error(`FALHA NA AUDITORIA: Encontrados ${errors} erros.`);
  process.exit(1);
}
