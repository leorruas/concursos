// Identidade editorial independente da pasta. Somente metadados, sem teoria duplicada.
import fs from 'node:fs';
import path from 'node:path';
export const articleSlugFromPath = value => String(value||'').split('/').at(-1).replace(/\.md$/, '').replace(/^\d+[.\s-]+/, '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
export function articleMetadata(content) {
  const fm=content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1]||'';
  const id=fm.match(/^articleId:\s*["']?([a-z0-9-]+)["']?\s*$/m)?.[1]||null;
  const aliases=JSON.parse(fm.match(/^articleAliases:\s*(\[.*\])\s*$/m)?.[1]||'[]');
  if(!Array.isArray(aliases)||aliases.some(p=>typeof p!=='string'||!p.startsWith('3 - Materias/')||p.includes('..')||!p.endsWith('.md')))throw Error('Aliases de artigo inválidos');
  const originalSlug=articleSlugFromPath(aliases[0]);
  const explicit=fm.match(/^articleSlug:\s*["']?([a-z0-9-]+)["']?\s*$/m)?.[1]||null;
  const slugAliases=JSON.parse(fm.match(/^articleSlugAliases:\s*(\[.*\])\s*$/m)?.[1]||'[]');
  if(!Array.isArray(slugAliases)||slugAliases.some(s=>typeof s!=='string'||!(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).test(s)))throw Error('Aliases de slug inválidos');
  return {articleId:id,articleAliases:aliases,articleSlug:id?(explicit||originalSlug):null,articleSlugAliases:[...new Set([...slugAliases,...(explicit&&originalSlug&&explicit!==originalSlug?[originalSlug]:[])])]};
}
export function articleInventory(root) {
  const result=[];
  function walk(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,ent.name);if(ent.isDirectory())walk(p);else if(ent.name.endsWith('.md')){const sourcePath=path.relative(root,p).split(path.sep).join('/');result.push({sourcePath,...articleMetadata(fs.readFileSync(p,'utf8'))});}}}
  walk(path.join(root,'3 - Materias'));validateIdentities(result);return result;
}
export function validateIdentities(items){
  const ids=new Set(),aliases=new Map(),slugs=new Map();
  for(const item of items){if(!item.articleId)continue;if(!/^art-[a-z0-9-]+$/.test(item.articleId)||ids.has(item.articleId))throw Error('articleId inválido/duplicado: '+item.articleId);ids.add(item.articleId);
    for(const slug of [item.articleSlug,...item.articleSlugAliases||[]].filter(Boolean)){
      if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)||slug.startsWith('art-'))throw Error('Slug inválido: '+slug);
      if(slugs.has(slug)&&slugs.get(slug)!==item.articleId)throw Error('Slug duplicado/ambíguo: '+slug+'; definir articleSlug específico na nota nova');slugs.set(slug,item.articleId);
    }
    for(const p of [item.sourcePath,...item.articleAliases||[]]){if(aliases.has(p)&&aliases.get(p)!==item.articleId)throw Error('Alias de artigo ambíguo: '+p);aliases.set(p,item.articleId);}
  }
}
export function resolveArticleRef(root,ref){
  const [target,...sections]=ref.split('#');
  if(!target.startsWith('article:') && fs.existsSync(path.join(root,target.endsWith('.md')?target:target+'.md')))return ref;
  const lookup=target.endsWith('.md')?target:target+'.md';
  const item=articleInventory(root).find(x=>target.startsWith('article:')?x.articleId===target.slice(8):x.articleAliases.includes(lookup));if(!item){if(!target.startsWith('article:'))return ref;throw Error('Artigo não encontrado: '+target);}
  return item.sourcePath+(sections.length?'#'+sections.join('#'):'');
}
// Compilação pública: caminhos são derivados, não um segundo mapa manual.
export function resolveCatalog(catalog,items){
  if(catalog.schemaVersion===1)return structuredClone(catalog);
  if(catalog.schemaVersion!==2)throw Error('Versão inválida do catálogo');
  validateIdentities(items);
  const byId=new Map(items.filter(i=>i.articleId).map(i=>[i.articleId,i]));
  const lookup=id=>{const item=byId.get(id);if(!item)throw Error('Artigo não público/inexistente: '+id);return item.sourcePath;};
  return {schemaVersion:1,identityVersion:2,contests:catalog.contests.map(c=>({...c,subjects:c.subjects.map(s=>{
    if('hubSourcePath' in s||'articleSourcePaths' in s)throw Error('Catálogo v2 não mantém caminhos manuais');
    if(!Array.isArray(s.articleIds))throw Error('Lista de identidades ausente');
    return {...s,hubSourcePath:lookup(s.hubArticleId),articleSourcePaths:s.articleIds.map(lookup)};
  })}))};
}
