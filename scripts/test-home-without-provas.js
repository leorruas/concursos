import fs from 'fs';
import vm from 'vm';
import assert from 'node:assert/strict';

// DOM mínimo para executar os renderizadores reais e a troca de concurso.
class Element {
  constructor() { this.children=[]; this.dataset={}; this.style={}; this.classList={add(){},remove(){}}; this._html=''; }
  set innerHTML(value) { this._html=value; this.children=[]; this.buttons=[...value.matchAll(/data-concurso-id="([^"]+)"/g)].map(m=>({dataset:{concursoId:m[1]},addEventListener(type,fn){this.click=fn;}})); if(this.observer) queueMicrotask(this.observer); }
  get innerHTML() { return this._html; }
  querySelector(selector) {
    if(selector==='[data-painel-provas]') return this.children.find(c=>c.dataset.painelProvas) || null;
    if(selector==='.concurso-linha-topo') return this._html.includes('concurso-linha-topo') ? {} : null;
    return null;
  }
  querySelectorAll() { return this.buttons || []; }
  appendChild(child) { this.children.push(child); if(this.observer) queueMicrotask(this.observer); }
}
const host = new Element();
const container = new Element();
const concursos = JSON.parse(fs.readFileSync(new URL('../data/concursos.json', import.meta.url)));
const provas = [
  {id:'dpv',nome:'Prova Dataprev',concursoId:'dataprev-2026',resultado:{acertos:1,totalQuestoes:2},comparabilidadeEdital:{status:'alta'}},
  {id:'cam',nome:'Prova Câmara',concursoId:'camara-2026',resultado:{percentualBruto:50},comparabilidadeEdital:{status:'alta'}}
];
const ctx = {
  console, queueMicrotask,
  dadosConcursosEstrategicos:concursos, concursoSelecionadoId:'dataprev-2026', todosOsArtigos:[],
  localStorage:{setItem(){}},
  document:{getElementById:id=>id==='concurso-home-conteudo'?host:id==='painel-concurso-home'?container:null,createElement:()=>new Element()},
  MutationObserver:class {constructor(callback){this.callback=callback;} observe(el){el.observer=this.callback;}},
  fetch:async()=>({ok:true,json:async()=>provas})
};
vm.createContext(ctx);
for(const name of ['02-data-home.js','08-provas.js']) vm.runInContext(fs.readFileSync(new URL('../web/'+name,import.meta.url),'utf8'),ctx);
const drenar = async()=>{for(let i=0;i<8;i++) await Promise.resolve();};
await drenar();
assert.equal(host.children.length,0,'Não montar antes da home estar pronta');
ctx.renderizarPainelConcursoHome();
await drenar();
assert.equal(host.children.length,0,'Home não deve exibir desempenho em provas');
assert.ok(!host.innerHTML.includes('desempenho em provas'));
assert.ok(!host.innerHTML.includes('abrir preparação'), 'Home não deve exibir atalho de projeto');
host.buttons.find(b=>b.dataset.concursoId==='camara-2026').click();
await drenar();
assert.equal(host.children.length,0,'Troca para Câmara não deve criar painel de provas');
host.buttons.find(b=>b.dataset.concursoId==='cgu-2026').click();
await drenar();
assert.ok(host.innerHTML.includes('cgu 2026'), 'CGU continua no seletor');
assert.ok(!host.innerHTML.includes('abrir preparação'));
host.buttons.find(b=>b.dataset.concursoId==='dataprev-2026').click();
await drenar();
assert.equal(host.children.length,0,'Retorno para Dataprev mantém home sem resultados');
assert.equal(ctx.provasCalcularNotaDataprev({resultado:{acertosGerais:30,acertosEspecificos:20},comparabilidadeEdital:{notaEditalAtualCalculavel:true}}),80,'Cálculos permanecem disponíveis');
console.log('SUCESSO: home permanece sem desempenho em provas ao trocar concursos; cálculo preservado.');
