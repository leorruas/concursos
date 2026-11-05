import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { buildGlossaryFlashcards } from './glossary-flashcards.js';

const root=fileURLToPath(new URL('..',import.meta.url));
const read=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const base=read('data/flashcards.json');
const glossary=read('_site/glossario-index.json');
const equivalents=read('data/glossario/flashcard-equivalencias.json');
const published=read('_site/data/glossario-flashcards.json');
const expected=buildGlossaryFlashcards(glossary,base,equivalents);

assert.deepEqual(published,expected,'O build não corresponde às definições revisadas e equivalências canônicas');
assert.equal(published.reviewedCount,glossary.publishedCount);
assert.equal(published.generatedCount+published.linkedCount,published.reviewedCount);
assert(published.generatedCount>=30,'O glossário revisado deve ampliar a coleção com termos distintos');
assert(published.linkedCount>=25,'Glossário deve reaproveitar conceitos já cobertos sem duplicá-los');

const original=new Set(base.cards.map(card=>card.id));
const derived=new Set(published.cards.map(card=>card.id));
assert.equal(derived.size,published.cards.length);
assert([...derived].every(id=>!original.has(id)));
assert.equal(new Set([...published.cards.map(c=>c.glossaryId),...published.links.map(x=>x.glossaryId)]).size,published.reviewedCount,
    'Cada termo revisado deve gerar exatamente um cartão ou vínculo, nunca ambos');
const covered=new Map(published.links.map(x=>[x.glossaryId,x.cardId]));
assert.equal(covered.get('glo-ppa'),'ppa','PPA reaproveita identidade e avaliações anteriores');
assert.equal(covered.get('glo-regime-de-competencia'),'competencia');
assert(!derived.has('glossary-glo-ppa'));
for(const id of ['glo-balanco-orcamentario','glo-ciclo-de-auditoria','glo-provisao-contabil']) {
    const card=published.cards.find(x=>x.glossaryId===id);
    assert(card && card.id==='glossary-'+id, 'Conceito revisado precisa de cartão: '+id);
    assert(card.contrast?.prompt && card.contrast?.answer && card.source?.url.startsWith('https://'));
    assert(card.note?.articleId && card.subjectIds.length && card.examIds.includes('cgu-2026'));
}
assert(published.cards.every(card=>card.status==='validated'&&card.source.url.startsWith('https://')));
assert(published.links.every(link=>original.has(link.cardId)));

const hypothetical={...glossary.terms[0],id:'glo-conceito-inventado-teste',
    term:'Conceito hipotético de teste de integração',status:'reviewed'};
const expanded=buildGlossaryFlashcards({...glossary,terms:[...glossary.terms,hypothetical]},base,equivalents);
assert.equal(expanded.generatedCount,published.generatedCount+1,
    'Novo termo revisado sem equivalência deve alimentar o baralho automaticamente');
const pending=buildGlossaryFlashcards({...glossary,terms:[...glossary.terms,{...hypothetical,status:'planned'}]},base,equivalents);
assert.deepEqual(pending,published,'Termos planejados não entram em flashcards');

const ctx={};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'web/09-flashcards-engine.js'),'utf8'),ctx);
const F=ctx.Flashcards,all=[...base.cards,...published.cards];
const timestamp=Date.UTC(2026,10,5);
const old=F.empty(),review=F.schedule(undefined,'good',timestamp);
old.reviews['ppa:forward']=review;
old.reviews['glossary-glo-balanco-orcamentario:forward']=review;
const loaded=F.validateState(JSON.parse(JSON.stringify(old)),all);
assert.equal(loaded.reviews['ppa:forward'].grade,'good','Revisão do cartão existente foi preservada');
assert.equal(loaded.reviews['glossary-glo-balanco-orcamentario:forward'].grade,'good',
    'Revisão de cartão derivado preservada entre carregamentos');
assert(F.hasGlossaryReferences(old),'Perfil com revisão de cartão derivado precisa da projeção completa');
assert(!F.hasGlossaryReferences(F.empty()),'Perfil novo pode abrir os cartões originais sem o glossário');
const onlyBase=F.empty();
onlyBase.reviews['ppa:forward']=review;
assert(!F.hasGlossaryReferences(onlyBase),'Revisões da coleção original não dependem do glossário');
assert.equal(F.validateState(JSON.parse(JSON.stringify(onlyBase)),base.cards).reviews['ppa:forward'].grade,'good',
    'Carregamento de contingência deve preservar revisões dos cartões originais');
assert(F.hasGlossaryReferences({session:{queue:[{id:'glossary-glo-balanco-orcamentario'}]}}),
    'Sessão com cartão derivado não pode ser truncada em uma publicação parcial');
assert(F.hasGlossaryReferences({priorities:{entries:[{cardId:'glossary-glo-balanco-orcamentario'}]}}),
    'Prioridade de cartão derivado também exige coleção completa');
assert.equal(F.stats(all,F.empty(),timestamp).unseen,base.cards.length+published.generatedCount);
assert(F.select(published.cards,F.empty(),{exam:'cgu-2026',subject:'contabilidade-publica',mode:'new',direction:'forward'},timestamp,()=>.5)
    .some(x=>derived.has(x.id)),'Novos cartões precisam estar elegíveis na seleção normal da matéria');

const html=fs.readFileSync(path.join(root,'_site/flashcards.html'),'utf8');
const ui=fs.readFileSync(path.join(root,'_site/web/10-flashcards-ui.js'),'utf8');
assert(html.includes('id="fc-glossary"')&&ui.includes("fetch('data/glossario-flashcards.json'"),
    'Interface deve carregar cartões derivados e abrir sua entrada do glossário');
assert(ui.includes('glossaryUnavailable=true')&&ui.includes('F.hasGlossaryReferences(persisted)'),
    'A falta da projeção deve permitir cartões originais sem apagar revisões de cartões derivados');
const verifier=fs.readFileSync(path.join(root,'scripts/verify-live-pages.js'),'utf8');
assert(verifier.includes("'data/glossario-flashcards.json'"),
    'Verificação pós-publicação precisa exigir o arquivo que a página de flashcards consome');
assert(!fs.existsSync(path.join(root,'_site/data/glossario/flashcard-equivalencias.json')),
    'Equivalências editoriais não devem ser exportadas como dado independente');
console.log('SUCESSO: glossário alimenta '+published.generatedCount+' cartões, vincula '+published.linkedCount+
    ' conceitos existentes e preserva identidade, filtros e revisões.');
