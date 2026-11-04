import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {articleInventory, resolveCatalog, validateIdentities, resolveArticleRef} from './article-identity.js';
import {validarCatalogoMaterias} from './contest-catalog.js';
import {checkRef} from './study-context.js';
import '../web/00-route-utils.js';
const root=fs.mkdtempSync(path.join(os.tmpdir(),'article-identity-'));
try{
  const old='3 - Materias/Antiga/01 - nota.md',current='3 - Materias/Biblioteca/Titulo novo.md';
  fs.mkdirSync(path.join(root,path.dirname(current)),{recursive:true});
  fs.writeFileSync(path.join(root,current),'---\narticleId: art-identidade\narticleAliases: '+JSON.stringify([old])+'\n---\n# Novo título\n## Seção preservada\nTeoria única.\n');
  const inventory=articleInventory(root);assert.equal(inventory.length,1);
  const catalog={schemaVersion:2,contests:[{concursoId:'cgu',subjects:[{subjectId:'materia-a',categoria:'Virtual A',rotulo:'A',ordem:1,itemEdital:'1',hubArticleId:'art-identidade',articleIds:[]},{subjectId:'materia-b',categoria:'Virtual B',rotulo:'B',ordem:2,itemEdital:'2',hubArticleId:'art-identidade',articleIds:[]}]}]};
  assert.equal(validarCatalogoMaterias(catalog,inventory,[{id:'cgu'}]).materias,2,'Uma nota em duas matérias, sem depender de sua pasta');
  const compiled=resolveCatalog(catalog,inventory);assert.equal(compiled.contests[0].subjects[1].hubSourcePath,current);
  for(const ref of ['article:art-identidade#Seção preservada',old+'#Seção preservada']){assert.equal(resolveArticleRef(root,ref),current+'#Seção preservada');checkRef(root,ref);}
  assert.throws(()=>checkRef(root,'article:art-identidade#Ausente'),/Seção/);
  assert.throws(()=>resolveArticleRef(root,'article:art-ausente'),/não encontrado/);
  assert.throws(()=>validateIdentities([...inventory,{...inventory[0],sourcePath:old}]),/duplicado/);
  assert.throws(()=>validateIdentities([...inventory,{articleId:'art-outro',sourcePath:old}]),/ambíguo/);
  assert.throws(()=>resolveCatalog(catalog,[]),/não público/);
  const route=construirRotaArtigoId('art-identidade','secao-preservada','cgu',false,'Virtual B');
  const parsed=parsearHashVault(route);assert.equal(parsed.articleId,'art-identidade');assert.equal(parsed.origem,'Virtual B');assert.equal(parsed.secao,'secao-preservada');
  const articles=[{...inventory[0],titulo:'Titulo novo',categoria:'Biblioteca'}];
  assert.equal(resolverArtigoRota(articles,parsed),articles[0]);
  assert.equal(resolverArtigoRota(articles,parsearHashVault('#/Antiga/01%20-%20nota?secao=secao-preservada')),articles[0],'URL anterior continua resolvendo depois da mudança física');
  assert.equal(parsearHashVault(construirRotaArtigoId('art-identidade','','cgu',true)).biblioteca,true);
  console.log('SUCESSO: identidade estável, mudança de título/pasta, alias e referência histórica, vínculo virtual múltiplo, seção e privacidade.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
