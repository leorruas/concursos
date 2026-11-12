import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = pathName => fs.readFileSync(path.join(root, pathName), 'utf8');
const glossary = JSON.parse(read('_site/glossario-index.json'));
const cards = JSON.parse(read('_site/data/flashcards.json'));
const index = read('_site/index.html');
const css = read('style.css');
const ui = read('web/09-glossary.js');
const builder = read('scripts/glossary-data.js');
assert.equal(glossary.schemaVersion, 1);
assert(glossary.contests.some(x => x.id === 'camara-2026'));
assert(glossary.contests.some(x => x.id === 'cgu-2026'));
const camara = glossary.contests.find(x => x.id === 'camara-2026');
const cgu = glossary.contests.find(x => x.id === 'cgu-2026');
const camaraTerms = glossary.terms.filter(t => t.contestIds.includes('camara-2026'));
const cguTerms = glossary.terms.filter(t => t.contestIds.includes('cgu-2026'));
const shared = glossary.terms.filter(t => t.contestIds.includes('camara-2026') && t.contestIds.includes('cgu-2026'));
assert.equal(camaraTerms.length, camara.publishedCount);
assert.equal(cguTerms.length, cgu.publishedCount);
assert(camara.ownPublishedCount >= 40, 'Câmara requer definições próprias sobre processo legislativo e comunicação');
assert(camara.sharedCount >= 140, 'Câmara deve herdar apenas conceitos de Orçamento com artigos do seu catálogo');
assert(cgu.sharedCount >= 10, 'CGU deve reutilizar conceitos normativos da Câmara');
assert(cguTerms.length >= 230);
assert(camaraTerms.length >= 180);
assert(shared.some(t => t.term === 'Lei complementar'));
assert(shared.some(t => t.term === 'Transparência ativa'));
assert(shared.some(t => t.term === 'Linguagem simples'));
assert(shared.some(t => t.id === 'glo-ppa'));
assert(glossary.terms.every(t => t.articleLinks.every(a => a.articleSlug && a.href.startsWith('#/artigo/'))));
assert(glossary.terms.every(t => t.sources.every(s => s.url.startsWith('https://'))));
for (const id of ['glo-camara-lei-complementar','glo-camara-lei-ordinaria','glo-camara-pec',
                  'glo-camara-agenda-setting','glo-camara-framing','glo-camara-gatekeeping']) {
  assert(camaraTerms.some(t => t.id === id), 'Definição fundamental ausente: ' + id);
}
for (const term of glossary.terms) {
  const linkedCard = cards.cards.find(c => c.glossaryId === term.id ||
    (c.glossaryIds || []).includes(term.id));
  assert(linkedCard, 'Termo sem flashcard: ' + term.id);
  assert(term.contestIds.some(id => linkedCard.examIds.includes(id)), 'Termo sem concurso correspondente: ' + term.id);
}
assert(cards.cards.find(c => c.id === 'ppa').examIds.includes('camara-2026'),
  'Cartão original PPA deve reutilizar identidade no novo concurso');
assert(index.includes('id="home-glossario-entry" href="#/glossario?concurso=camara-2026"'));
assert(index.includes('id="home-glossario-titulo">glossário</strong>'));
assert(index.includes('<h2 id="glossario-titulo">glossário</h2>'));
assert(!/glossário\s*(?:CGU|Câmara|:\s*CGU|:\s*Câmara)/i.test(index), 'Rótulo do glossário deve ser neutro, sem nome de concurso');
assert(index.includes('id="home-flashcards-entry" href="https://concurso-estudo.leoruas.workers.dev/flashcards.html?concurso=camara-2026"'));
assert(!index.includes('id="nav-link-flashcards"'), 'Flashcards não devem aparecer na navbar');
assert(index.includes('id="nav-link-glossario"'));
assert(css.includes('.sticky-nav .nav-logo { display: none; }'));
assert(css.includes('grid-template-columns: minmax(0, 1fr);'), 'Busca precisa ocupar linha própria no mobile');
assert(ui.includes('glossarioTermosDoConcurso(data)') && ui.includes('glossarioArtigoHref(a)'));
assert(ui.includes("concursoRota === 'cgu-2026' || concursoRota === 'camara-2026'"));
assert(builder.includes("id === 'orcamento-publico' && entry.articleIds.some"), 'Reuso entre concursos deve depender de artigo elegível');

const ctx = { console, Intl };
vm.createContext(ctx);
vm.runInContext(read('web/00-route-utils.js'), ctx);
vm.runInContext(ui, ctx);
ctx.glossarioDataTeste = glossary;
ctx.construirRotaGlossario = ctx.construirRotaGlossario || ctx.window?.construirRotaGlossario;
assert.equal(vm.runInContext("glossarioRotaTermo('glo-camara-lei-complementar')",ctx),
  '#/glossario/glo-camara-lei-complementar?concurso=camara-2026');
assert.equal(vm.runInContext('glossarioTermosDoConcurso(glossarioDataTeste).length',ctx),camaraTerms.length);
vm.runInContext("glossarioState.contestId = 'cgu-2026'",ctx);
assert.equal(vm.runInContext('glossarioTermosDoConcurso(glossarioDataTeste).length',ctx),cguTerms.length);
assert.equal(vm.runInContext("glossarioRotaTermo('glo-camara-lei-complementar')",ctx),
  '#/glossario/glo-camara-lei-complementar?concurso=cgu-2026');
console.log('SUCESSO: '+camaraTerms.length+' conceitos da Câmara ('+camara.sharedCount+
  ' compartilhados) e '+cguTerms.length+' da CGU, UI e flashcards testados.');
