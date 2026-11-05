import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {articleInventory} from './article-identity.js';
import {mergeGlossaryFlashcards} from './glossary-flashcards.js';
export function validateFlashcards(data,root) {
    assert.equal(data.version,1);
    assert.ok(Array.isArray(data.cards)&&data.cards.length>0);
    const inventory=new Map(articleInventory(root).filter(x=>x.articleId).map(x=>[x.articleId,x]));
    const contests=JSON.parse(fs.readFileSync(path.join(root,'data/catalogo-materias-por-concurso.json'))).contests;
    const exams=new Set(data.exams.map(x=>x.id)), subjects=new Set(data.subjects.map(x=>x.id)), ids=new Set();
    assert.equal(exams.size,data.exams.length);assert.equal(subjects.size,data.subjects.length);
    for(const c of data.cards) {
        assert.match(c.id,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);assert.ok(!ids.has(c.id),'ID duplicado: '+c.id);ids.add(c.id);
        for(const k of ['term','definition','example','confusion','topic']) assert.ok(typeof c[k]==='string'&&c[k].trim()&&c[k].length<=600,`${c.id}: campo ${k} ausente/longo`);
        assert.ok(Array.isArray(c.conceptIds)&&new Set(c.conceptIds).size===c.conceptIds.length&&c.conceptIds.every(id=>typeof id==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)),c.id+': conceitos inválidos');
        assert.equal(c.status,'validated');assert.match(c.reviewedAt,/^\d{4}-\d{2}-\d{2}$/);assert.ok(Number.isInteger(c.revision)&&c.revision>0);
        assert.ok(c.examIds.length&&c.examIds.every(id=>exams.has(id)));assert.ok(c.subjectIds.length&&c.subjectIds.every(id=>subjects.has(id)));
        assert.ok(c.editalRefs.length&&c.editalRefs.every(x=>typeof x==='string'&&/^(?:P\d|DP-(?:GER|ESP))/.test(x)));
        for(const eid of c.examIds) {const cat=contests.find(x=>x.concursoId===eid);assert.ok(cat);assert.ok(c.subjectIds.every(id=>cat.subjects.some(s=>s.subjectId===id)),c.id+': matéria fora do catálogo');}
        if(c.legacyErrorIds!==undefined)assert.ok(Array.isArray(c.legacyErrorIds)&&
            c.legacyErrorIds.length>0&&new Set(c.legacyErrorIds).size===c.legacyErrorIds.length &&
            c.legacyErrorIds.every(id=>typeof id==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)),c.id+': IDs históricos inválidos');
        const article=inventory.get(c.note.articleId);assert.ok(article,c.id+': artigo inexistente');
        const text=fs.readFileSync(path.join(root,article.sourcePath),'utf8');
        assert.ok(text.split(/\r?\n/).some(l=>/^#{1,6} /.test(l)&&l.replace(/^#{1,6} /,'').trim()===c.note.section),c.id+': seção inexistente');
        assert.ok(new URL(c.source.url).protocol==='https:');assert.ok(c.source.locator&&c.source.title);
        if(c.contrast)for(const k of ['prompt','answer'])assert.ok(typeof c.contrast[k]==='string'&&c.contrast[k].length>10&&c.contrast[k].length<600);
    }
    return data.cards.length;
}
if(process.argv[1]===fileURLToPath(import.meta.url)) {
 const root=fileURLToPath(new URL('..',import.meta.url));
 const n=validateFlashcards(JSON.parse(fs.readFileSync(path.join(root,'data/flashcards.json'))),root);
 console.log(`SUCESSO: ${n} flashcards, IDs, metadados de edital, fontes e seções válidos.`);
 if(process.argv.includes('--site')) {
  const site=path.join(root,'_site'),manifest=JSON.parse(fs.readFileSync(path.join(site,'manifest.json')));
  const data=JSON.parse(fs.readFileSync(path.join(site,'data/flashcards.json')));
  assert.ok(!fs.existsSync(path.join(site,'data/contexto-estudo/flashcards-prioridades.json')),'Perfil pessoal não pode ser publicado no site');
  for(const c of data.cards)assert.ok(manifest.some(a=>a.articleId===c.note.articleId),'Nota não publicada: '+c.id);
  for(const f of ['flashcards.html','web/09-flashcards-engine.js','web/10-flashcards-ui.js'])assert.ok(fs.existsSync(path.join(site,f)),f);
  const base=JSON.parse(fs.readFileSync(path.join(root,'data/flashcards.json')));
  const glossaryCards=JSON.parse(fs.readFileSync(path.join(site,'data/glossario-flashcards.json')));
  assert.deepEqual(data,mergeGlossaryFlashcards(base,glossaryCards),
    'Baralho público deve incluir todos os cartões do glossário em um arquivo único.');
  assert.equal(data.cards.length,base.cards.length+glossaryCards.generatedCount);
  console.log('SUCESSO: ' + data.cards.length + ' cartões publicados em um único catálogo, incluindo '
    + glossaryCards.generatedCount + ' do glossário; todos os artigos presentes no manifesto.');
 }
}
