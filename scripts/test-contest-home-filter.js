import { articleInventory, resolveCatalog } from './article-identity.js';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const catalogo = resolveCatalog(JSON.parse(fs.readFileSync(new URL('../data/catalogo-materias-por-concurso.json', import.meta.url))), articleInventory(fileURLToPath(new URL('..', import.meta.url))));
const concursos = JSON.parse(fs.readFileSync(new URL('../data/concursos.json', import.meta.url)));

class Element {
  constructor(){this.children=[];this._html='';this.dataset={};this.classList={add(){},remove(){}};}
  set innerHTML(v){this._html=v;this.children=[];this.buttons=[...v.matchAll(/data-concurso-id="([^"]+)"/g)].map(x=>({dataset:{concursoId:x[1]},addEventListener(_,fn){this.click=fn;}}));}
  get innerHTML(){return this._html;}
  appendChild(x){this.children.push(x);}
  addEventListener(){}
  setAttribute(){}
  querySelectorAll(){return this.buttons||[];}
}
const nodes=Object.fromEntries(['orientacoes-container','pastas-container','painel-concurso-home','concurso-home-conteudo','disciplinas-titulo'].map(id=>[id,new Element()]));
const todasAsPastas={};
for (const c of catalogo.contests) for (const s of c.subjects) todasAsPastas[s.categoria] ||= [{categoria:s.categoria}];
todasAsPastas['Calculo Mental']=[{categoria:'Calculo Mental'}];
const saved=[];
const ctx={
  console, document:{getElementById:id=>nodes[id]||null,createElement:()=>new Element()},
  localStorage:{setItem:(k,v)=>saved.push([k,v])},
  dadosConcursosEstrategicos:concursos,dadosCatalogoMaterias:catalogo,
  concursoSelecionadoId:'cgu-2026',todasAsPastas,informacoesDisciplinas:{'Auditoria Governamental':{numero:'14'}},
  todosOsArtigos:[{articleId:'art-e1d0a2026ca8f010',titulo:'Relatório de estudos da Câmara'}],
  limparNomeCategoria:s=>s.toLowerCase(),obterRotaCategoria:s=>'#/disciplina/'+s,abrirDisciplina(){},
  rotaDoArtigo:()=> '#/artigo/art-e1d0a2026ca8f010',abrirArtigo(){}
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(new URL('../web/02-data-home.js',import.meta.url),'utf8'),ctx);
const cards=()=>nodes['pastas-container'].children;
const numeros=()=>cards().map(c=>c.innerHTML.match(/indice-numero">([^<]+)</)?.[1]);
function conferir(id,total){
  const comRelatorio=id==='camara-2026';
  assert.equal(cards().length,total+(comRelatorio?1:0),id);
  assert.deepEqual(numeros().slice(0,total),Array.from({length:total},(_,i)=>String(i+1).padStart(2,'0')));
  if(comRelatorio){
    assert.equal(numeros().at(-1),'•','Relatório tem entrada visual própria, fora das matérias do edital');
    assert(cards().at(-1).innerHTML.includes('relatório de estudos'),'Faltou cartão de relatório');
  }
}
ctx.renderizarPainelConcursoHome();ctx.renderizarPastas();
conferir('cgu-2026',15);
assert.ok(!cards().some(x=>x.innerHTML.includes('língua portuguesa')));
ctx.selecionarConcurso('dataprev-2026');conferir('dataprev-2026',6);
assert.ok(!cards().some(x=>x.innerHTML.includes('auditoria governamental')));
ctx.selecionarConcurso('camara-2026');conferir('camara-2026',11);
const botao=nodes['concurso-home-conteudo'].buttons.find(x=>x.dataset.concursoId==='cgu-2026');
assert.ok(botao);botao.click();conferir('cgu-2026',15);
assert.equal(saved.at(-1)[1],'cgu-2026');
console.log('SUCESSO: grade filtra CGU (15), Dataprev (6), Câmara (11 matérias + relatório) e mantém numeração e seletor.');
