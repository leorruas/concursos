import { articleInventory, resolveCatalog } from './article-identity.js';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const catalogo = resolveCatalog(JSON.parse(fs.readFileSync(new URL('../data/catalogo-materias-por-concurso.json', import.meta.url))), articleInventory(fileURLToPath(new URL('..', import.meta.url))));
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
const cguPolicySubject=catalogo.contests.find(c=>c.concursoId==='cgu-2026').subjects.find(s=>s.subjectId==='politicas-publicas');
assert.equal(itens.length,1+cguPolicySubject.articleSourcePaths.length,'CGU: hub e todos os artigos vinculados ao catálogo');
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
const inglesSubject=catalogo.contests.find(c=>c.concursoId==='camara-2026').subjects.find(s=>s.subjectId==='ingles');
const inglesArtigos=ctx.obterArtigosDaMateria('Ingles');
assert.equal(inglesArtigos.length,1+inglesSubject.articleSourcePaths.length,'Inglês: hub e artigos reais da disciplina');
const originaisIngles=inglesSubject.articleSourcePaths;
inglesSubject.articleSourcePaths=[];
try {
  const unico=ctx.obterArtigosDaMateria('Ingles');
  assert.equal(unico.length,1,'matéria sem artigos próprios conserva o hub');
  assert.ok(unico[0].sourcePath.endsWith('/ingles.md'),'hub isolado preservado');
} finally {
  inglesSubject.articleSourcePaths=originaisIngles;
}
ctx.concursoSelecionadoId='cgu-2026';
assert.equal(ctx.obterArtigosDaMateria('Comunicacao').length,0,'CGU sem Comunicação como frente autônoma');
console.log('SUCESSO: listas de artigos filtradas por edital, hub primeiro, artigos compartilhados e estados vazios.');

// A faixa identifica o concurso inclusive quando o artigo veio da lista da matéria.
class ContextElement {
  constructor(tag='div'){this.tag=tag;this.children=[];this.hidden=false;this.attrs={};this.textContent='';}
  replaceChildren(){this.children=[];this.textContent='';}
  append(...items){this.children.push(...items);}
  setAttribute(k,v){this.attrs[k]=v;}
  addEventListener(_,fn){this.click=fn;}
}
const strip=new ContextElement();
ctx.document={getElementById:id=>id==='artigo-contexto'?strip:null,createElement:tag=>new ContextElement(tag)};
vm.runInContext(fs.readFileSync(new URL('../web/03-article-navigation.js',import.meta.url),'utf8'),ctx);
ctx.obterRotaCategoria=category=>'#/disciplina/'+encodeURIComponent(category)+'?concurso='+ctx.concursoSelecionadoId;
const budget=artigos.find(a=>a.sourcePath.endsWith('/01 - orcamento publico e ciclo orcamentario.md'));
assert(budget);
ctx.renderizarContextoConcursoArtigo(budget);
assert.equal(strip.hidden,false);
assert.equal(strip.children[0].children[1].textContent,'CGU 2026');
assert.equal(strip.children[1].children[0].textContent,'Orçamento Público');
assert(strip.children[1].children[0].href.includes('concurso=cgu-2026'));
ctx.concursoSelecionadoId='dataprev-2026';ctx.renderizarContextoConcursoArtigo(budget);
assert.equal(strip.children[0].children[1].textContent,'Dataprev 2026');
assert.equal(strip.children[1].textContent,'Artigo da biblioteca geral, fora deste programa.');
ctx.selecionarBibliotecaCompleta=()=>{};
vm.runInContext('modoBibliotecaCompleta = true',ctx);ctx.renderizarContextoConcursoArtigo(budget);
assert.equal(strip.hidden,true);assert.equal(strip.children.length,0,'Troca de escopo não deixa nome antigo na faixa');
console.log('SUCESSO: faixa identifica concurso ativo, vínculo de matéria e artigo fora do programa, sem contexto residual.');
