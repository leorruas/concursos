import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('..',import.meta.url)),site=path.join(root,'_site');
const read=(name)=>JSON.parse(fs.readFileSync(path.join(site,name),'utf8'));
const manifest=read('manifest.json'),search=read('search-index.json');
const glossary=read('glossario-index.json');
assert.equal(glossary.publishedCount,glossary.terms.length,'Contador do glossário deve refletir definições publicadas');
assert(glossary.terms.every(t=>t.status==='reviewed'&&t.articleLinks?.length),'Glossário não publica candidatos sem revisão e vínculo');
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
for(const dir of ['data/sessoes','data/contexto-estudo','00 - Desempenho']) {
  assert(!fs.existsSync(path.join(root,dir)),'Histórico pessoal na origem pública: '+dir);
  assert(!fs.existsSync(path.join(site,dir)),'Histórico pessoal no Pages: '+dir);
}
for(const f of ['data/erros-recorrentes.json','data/provas.json','data/questoes-ledger.json','data/sessoes-saidas.json','data/ingestoes-processadas.json']) {
  assert(!fs.existsSync(path.join(root,f)),'Arquivo privado ainda no repositório público: '+f);
}
const privateProjectPaths=[
  '4 - Projetos/dataprev-2026/00 Dashboard.md',
  '4 - Projetos/dataprev-2026/Log de erros.md',
  '4 - Projetos/dataprev-2026/Questoes e Simulados.md',
  '4 - Projetos/dataprev-2026/Cronograma.md',
  '4 - Projetos/dataprev-2026/O que estudar.md'
];
for(const f of privateProjectPaths){
  assert(!fs.existsSync(path.join(root,f)),'Projeto individual no repositório público: '+f);
  assert(!fs.existsSync(path.join(site,f)),'Projeto individual publicado no site: '+f);
}
const publicProtocol=fs.readFileSync(path.join(root,'me.md'),'utf8');
assert(!publicProtocol.includes('type: "perfil-pessoal"'),'Perfil pessoal ainda no arquivo público');
assert(!publicProtocol.includes('## Quem sou'),'Seção de identidade no arquivo público');
assert(!publicProtocol.includes('## Perfil de Raciocínio Lógico (IA)'),'Proficiência individual no arquivo público');
assert(!publicProtocol.includes('## Contexto Pessoal para IA'),'Contexto pessoal no arquivo público');
const checkNotes=(dir)=>!fs.existsSync(dir)||fs.readdirSync(dir,{withFileTypes:true}).every(e=>e.isDirectory()?checkNotes(path.join(dir,e.name)):e.name!=='Avancos.md');
assert(checkNotes(path.join(root,'3 - Materias')),'Avanços individuais na fonte pública');
const homeHtml=fs.readFileSync(path.join(site,'index.html'),'utf8');
const cloudflareCards='https://concurso-estudo.leoruas.workers.dev/flashcards.html';
assert.equal(homeHtml.split('href="'+cloudflareCards+'"').length-1,0,'A home não deve exibir links para flashcards após a decisão de ocultá-los');
assert(!homeHtml.includes('class="home-flashcards-entry" href="'+cloudflareCards+'"'),'A chamada de flashcards deve permanecer oculta da home');
assert(!homeHtml.includes('href="flashcards.html"'),'A home não pode levar à versão local sem autenticação');
const publicFlashcardsHtml=fs.readFileSync(path.join(site,'flashcards.html'),'utf8');
assert(!publicFlashcardsHtml.includes('os dados de erros registrados no GitHub não são privados'),'Página não pode informar incorretamente que o histórico pessoal é público');
const publicUI=fs.readFileSync(path.join(site,'web/10-flashcards-ui.js'),'utf8');
assert(!publicUI.includes('raw.githubusercontent.com/leorruas/concursos/main/data/contexto-estudo'),'Flashcards consultam prioridades públicas');
const published=fs.readFileSync(path.join(site,'web/02-data-home.js'),'utf8');
assert(!published.includes('fetch("data/erros-recorrentes.json")'),'Interface pública busca histórico de erros');
console.log('SUCESSO: Pages sem JSON de desempenho, relatórios pessoais e metas individuais.');
