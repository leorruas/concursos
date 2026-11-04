import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { validarCatalogoMaterias } from './contest-catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carregar = arquivo => JSON.parse(fs.readFileSync(path.join(root, arquivo), 'utf8'));
const catalogo = carregar('data/catalogo-materias-por-concurso.json');
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
