import { articleInventory, resolveCatalog } from './article-identity.js';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { validarCatalogoMaterias } from './contest-catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carregar = arquivo => JSON.parse(fs.readFileSync(path.join(root, arquivo), 'utf8'));
const catalogo = resolveCatalog(carregar('data/catalogo-materias-por-concurso.json'), articleInventory(root));
const concursos = carregar('data/concursos.json');
const arquivos = [];
const walk = (dir, prefix = '') => {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? prefix + '/' + ent.name : ent.name;
    if (ent.isDirectory()) walk(path.join(dir, ent.name), rel);
    else if (ent.isFile() && rel.endsWith('.md')) arquivos.push({ sourcePath: '3 - Materias/' + rel });
  }
};
walk(path.join(root, '3 - Materias'));
const resultado = validarCatalogoMaterias(catalogo, arquivos, concursos);
assert.equal(resultado.concursos, 3);
const porId = Object.fromEntries(catalogo.contests.map(item => [item.concursoId, item]));
assert.equal(porId['cgu-2026'].subjects.length, 15, 'CGU deve ter 15 matérias');
assert.equal(porId['dataprev-2026'].subjects.length, 6, 'Dataprev: 5 grupos básicos + comunicação');
assert.equal(porId['camara-2026'].subjects.length, 11, 'Câmara: grupos curriculares separados');
assert.ok(!porId['dataprev-2026'].subjects.some(x => x.subjectId === 'auditoria-governamental'));
assert.ok(porId['cgu-2026'].subjects.some(x => x.subjectId === 'contabilidade-publica'));
assert.ok(porId['camara-2026'].subjects.some(x => x.subjectId === 'comunicacao'));
// Contrato de independência editorial de Orçamento Público entre CGU e Câmara.
const orcCGU = porId['cgu-2026'].subjects.find(x => x.subjectId === 'orcamento-publico');
const orcCamara = porId['camara-2026'].subjects.find(x => x.subjectId === 'orcamento-publico');
assert.ok(orcCGU && orcCamara, 'Orçamento deve constar dos dois concursos');
const paresCGU = [
  ['art-f6cfe9fbcc764554', 'art-a07c26f4e92031ab'],
  ['art-74d90e9fa1b3452c', 'art-c84d6e02f3b7a915'],
  ['art-a2f47c0d6e184e93', 'art-b419ac8206de7f35'],
  ['art-d8b1c5e6037249fa', 'art-e6b481a230fc795d']
];
assert.ok(orcCGU.articleIds.includes('art-9dc8a6e2f31b47c0'), 'PPA/LDO/LOA exclusivo da CGU deve permanecer');
assert.equal(new Set(orcCGU.articleIds).size, orcCGU.articleIds.length, 'CGU: IDs de orçamento únicos');
for(const [legado, exclusivo] of paresCGU) {
  assert.ok(orcCGU.articleIds.includes(exclusivo), 'CGU não pode perder artigo próprio: '+exclusivo);
  assert.ok(!orcCGU.articleIds.includes(legado), 'CGU não deve retomar legado migrado: '+legado);
  assert.ok(orcCamara.articleIds.includes(legado), 'Câmara deve preservar o artigo histórico: '+legado);
  assert.ok(!orcCamara.articleIds.includes(exclusivo), 'Artigo CGU não deve entrar no currículo Câmara: '+exclusivo);
}
const comunsOrcamento = orcCGU.articleIds.filter(id => orcCamara.articleIds.includes(id));
assert.deepEqual(comunsOrcamento, ['art-9be1a39d536a47ea'],
  'Somente a nota transversal de Atualidades pode permanecer nos dois catalogos de Orcamento');
const originaisCamara = [
  'art-f6cfe9fbcc764554','art-c301f2c741504403','art-74d90e9fa1b3452c',
  'art-a2f47c0d6e184e93','art-d8b1c5e6037249fa','art-f13b65a28d8c4e91',
  'art-28b3d9ef86aa4510','art-87b69e1d4ac54f20','art-715e2d16a93446cb',
  'art-0fb9b88e4d6c4151','art-4677cfa327ce43bb','art-67167e9c18284c4c',
  'art-6e4e79c7f4bb4aa3','art-743d234d819842d1','art-91ab320cdfb64b8a',
  'art-4be219d8f750ac63','art-d8f21b70c49e563a','art-c917e4a2d63b508f',
  'art-9d42c1f68a7be053'
];
for (const id of originaisCamara) {
  assert.ok(orcCamara.articleIds.includes(id), 'Artigo historico Camara removido: '+id);
  assert.ok(!orcCGU.articleIds.includes(id), 'Artigo historico Camara retornou ao catalogo CGU: '+id);
}
const cards = carregar('data/flashcards.json').cards;
const legadosNoCartaoCGU = cards.filter(card => card.examIds.includes('cgu-2026') &&
  originaisCamara.includes(card.note?.articleId));
assert.equal(legadosNoCartaoCGU.length, 0,
  'Cartoes CGU de qualquer materia nao podem apontar para artigos historicos da Camara: '+
  legadosNoCartaoCGU.map(card => card.id).join(', '));
const cardsOrcCGU = cards.filter(c => c.examIds.includes('cgu-2026') &&
  c.subjectIds.includes('orcamento-publico'));
for (const card of cardsOrcCGU) {
  assert.ok(orcCGU.articleIds.includes(card.note.articleId),
    'Flashcard de Orçamento CGU aponta fora do catálogo próprio: ' + card.id);
}
const noteCounts = new Map();
for(const card of cards.filter(c=>c.examIds.includes('cgu-2026') && c.subjectIds.includes('orcamento-publico'))) {
  if(![...paresCGU].some(([legado]) => card.note.articleId === legado)) {
    noteCounts.set(card.note.articleId,(noteCounts.get(card.note.articleId)||0)+1);
  } else assert.fail('Flashcard CGU aponta para artigo legado já migrado: '+card.id);
}
assert.ok((noteCounts.get('art-a07c26f4e92031ab')||0)>=2, 'Flashcards de ciclo CGU precisam usar artigo CGU');
assert.ok((noteCounts.get('art-b419ac8206de7f35')||0)>=9, 'Flashcards de princípios CGU precisam usar artigo CGU');
console.log('SUCESSO: independência CGU/Câmara em Orçamento e vínculos de flashcards preservados.');

const clonar = () => structuredClone(catalogo);
const ruim = clonar();
ruim.contests[0].subjects[0].articleSourcePaths.push('4 - Projetos/privado.md');
assert.throws(() => validarCatalogoMaterias(ruim, arquivos, concursos), /artigo privado/);
const duplicado = clonar();
duplicado.contests[1].subjects[1].ordem = 1;
assert.throws(() => validarCatalogoMaterias(duplicado, arquivos, concursos), /ordem inválida/);
const hubInvalido = clonar();
hubInvalido.contests[2].subjects[0].hubSourcePath = '3 - Materias/Inexistente/hub.md';
assert.throws(() => validarCatalogoMaterias(hubInvalido, arquivos, concursos), /hub não público/);
console.log('SUCESSO: catálogo de ' + resultado.concursos + ' concursos, ' + resultado.materias + ' matérias, ' + resultado.vinculos + ' vínculos de artigos; privacidade e ordens validadas.');
