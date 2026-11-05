import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('..',import.meta.url)),site=path.join(root,'_site');
const read=(name)=>JSON.parse(fs.readFileSync(path.join(site,name),'utf8'));
const manifest=read('manifest.json'),search=read('search-index.json');
for(const collection of [manifest,search]) {
  assert(!collection.some(x=>x.sourcePath?.startsWith('00 - Desempenho/')),'Relatório de desempenho no Pages');
  assert(!collection.some(x=>(x.sourcePath||'').toLowerCase().endsWith('/avancos.md')),'Avanços individuais no Pages');
}
for(const file of ['data/erros-recorrentes.json','data/provas.json','data/contexto-estudo/flashcards-prioridades.json']) {
  assert(!fs.existsSync(path.join(site,file)),'JSON de desempenho publicado: '+file);
}
for(const c of read('data/concursos.json')) {
  assert(!Object.hasOwn(c,'metasCandidato'),'Meta pessoal em concursos.json');
  assert(Object.keys(c).every(k=>['id','nome','banca','cargo','dataProva','status','sourcePath','fonteOficial','estruturaProva'].includes(k)));
}
for(const x of read('data/edital-itens.json')) {
  assert(!Object.hasOwn(x,'exposicaoEstudo')&&!Object.hasOwn(x,'dominioMensuravel')&&!Object.hasOwn(x,'coberturaNota'),'Progressão pessoal em edital-itens.json');
}
const published=fs.readFileSync(path.join(site,'web/02-data-home.js'),'utf8');
assert(!published.includes('fetch("data/erros-recorrentes.json")'),'Interface pública busca histórico de erros');
console.log('SUCESSO: Pages sem JSON de desempenho, relatórios pessoais e metas individuais.');
