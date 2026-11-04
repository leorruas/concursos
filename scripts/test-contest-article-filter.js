import { articleInventory, resolveCatalog } from './article-identity.js';
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const catalogo = resolveCatalog(JSON.parse(fs.readFileSync(new URL('../data/catalogo-materias-por-concurso.json', import.meta.url))), articleInventory(new URL('..', import.meta.url).pathname));
const concursos = JSON.parse(fs.readFileSync(new URL('../data/concursos.json', import.meta.url)));
const artigos=[];
const paths=new Set();
for (const c of catalogo.contests) for(const s of c.subjects) {
  for(const path of [s.hubSourcePath,...s.articleSourcePaths])paths.add(path);
}
for (const path of paths) artigos.push({sourcePath:path,categoria:path.split('/')[1],titulo:path.split('/').at(-1)});
const porCategoria={};
for(const a of artigos)(porCategoria[a.categoria] ||= []).push(a);
const ctx={
  console, dadosConcursosEstrategicos:concursos,dadosCatalogoMaterias:catalogo,
  concursoSelecionadoId:'cgu-2026',todosOsArtigos:artigos,todasAsPastas:porCategoria
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(new URL('../web/02-data-home.js',import.meta.url),'utf8'),ctx);
const materia='Avaliacao de Politicas Publicas';
let itens=ctx.obterArtigosDaMateria(materia);
assert.equal(itens.length,4,'CGU: hub e três notas de avaliação');
assert.ok(itens[0].sourcePath.endsWith('/avaliacao-de-politicas-publicas.md'),'hub primeiro');
assert.ok(ctx.montarSeletorConcursos('cgu-2026').includes('data-concurso-id="dataprev-2026"'));
assert.ok(ctx.montarSeletorConcursos('cgu-2026').includes('aria-pressed="true"'));
ctx.concursoSelecionadoId='dataprev-2026';
assert.equal(ctx.obterArtigosDaMateria(materia).length,0,'Dataprev sem avaliação como disciplina');
const comunicacao='Comunicacao';
const dp=ctx.obterArtigosDaMateria(comunicacao);
assert.ok(dp.length>20,'Dataprev: comunicação possui artigos especializados');
assert.equal(dp[0].sourcePath,'3 - Materias/Comunicacao/comunicacao.md','hub preservado');
ctx.concursoSelecionadoId='camara-2026';
const cam=ctx.obterArtigosDaMateria(comunicacao);
assert.ok(cam.length>10&&cam.length<dp.length,'Câmara: lista específica diferente');
assert.ok(!cam.some(x=>x.sourcePath.endsWith('/21 - teorias do jornalismo e historia da imprensa.md')),'evitar artigos extraedital');
const unico=ctx.obterArtigosDaMateria('Ingles');
assert.equal(unico.length,1,'matéria sem artigos próprios conserva o hub');
ctx.concursoSelecionadoId='cgu-2026';
assert.equal(ctx.obterArtigosDaMateria('Comunicacao').length,0,'CGU sem Comunicação como frente autônoma');
console.log('SUCESSO: listas de artigos filtradas por edital, hub primeiro, artigos compartilhados e estados vazios.');
