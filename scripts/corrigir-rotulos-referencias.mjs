#!/usr/bin/env node
// Corrige somente rotulos legados de links wiki com destino confirmado.
// Uso: node scripts/corrigir-rotulos-referencias.mjs [--apply]
// Sem --apply: simula e imprime resumo. Nao edita links desconhecidos, caminhos ou metadados.
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const folder=path.join(root,'3 - Materias');
const apply=process.argv.includes('--apply');
const files=[];
function visit(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory())visit(full);
    else if(entry.isFile()&&entry.name.endsWith('.md')&&entry.name!=='Avancos.md')files.push(full);
  }
}
visit(folder);
const titles=new Map();
const raws=new Map();
for(const file of files){
 const source=fs.readFileSync(file,'utf8');
 const key=path.relative(root,file).split(path.sep).join('/').replace(/\.md$/,'');
 const front=source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
 const title=front?.[1].match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g,'')||source.match(/^#\s+(.+)$/m)?.[1]?.trim();
 if(title)titles.set(key,title);
 raws.set(key,{file,source});
}
let filesChanged=0,linksChanged=0,unknown=0;
const legacy=/\bnota\s*\d+|\b(?:CAM|CGU|DP|DAT)-[A-Z]{2,5}-\d+/i;
for(const [key,{file,source}] of raws){
 const front=source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
 const prefix=front?.[0]||'';
 const body=source.slice(prefix.length);
 let inFence=false,n=0;
 const revised=body.split('\n').map(line=>{
   if(/^\s*(?:```|~~~)/.test(line)){inFence=!inFence;return line}
   if(inFence)return line;
   return line.replace(/\[\[([^|\]#]+)((?:#[^|\]]+)?)\|([^\]]+)\]\]/g,(all,target,anchor,label)=>{
     const title=titles.get(target.replace(/\.md$/,''));
     if(!title||!legacy.test(label)){if(!title&&legacy.test(label))unknown++;return all}
     n++;
     return '[['+target+anchor+'|'+title+']]';
   });
 }).join('\n');
 if(n){
   filesChanged++;linksChanged+=n;
   if(apply)fs.writeFileSync(file,prefix+revised);
 }
}
console.log(JSON.stringify({mode:apply?'apply':'dry-run',scanned:files.length,filesChanged,linksChanged,unknown},null,2));
if(unknown)console.warn('Existem rotulos legados com destino nao resolvido; revisar manualmente.');
