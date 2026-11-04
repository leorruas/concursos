// Verificação do recibo no commit: revisão sem alteração continua explícita.
export function editorialClosureErrors(changes, readCurrent, readPrevious) {
  const changed=new Set(changes.filter(c=>c.status!=='D').map(c=>c.path));
  const errors=[];
  for(const change of changes){
    if(change.status==='D'||!/^data\/sessoes\/[^/]+\.json$/.test(change.path))continue;
    const receipt=JSON.parse(readCurrent(change.path)).learning?.editorialConsolidation;
    if(receipt?.status!=='consolidado')continue;
    const previous=readPrevious(change.path);
    if(previous&&JSON.stringify(JSON.parse(previous).learning?.editorialConsolidation)===JSON.stringify(receipt))continue;
    const notes=(receipt.noteRefs||[]).map(ref=>{const p=ref.split('#')[0];return p.endsWith('.md')?p:p+'.md';});
    if(!notes.some(p=>p.startsWith('3 - Materias/')&&changed.has(p)))errors.push(`${change.path}: recibo consolidado exige artigo referenciado alterado no mesmo commit; revisão sem mudanças usa revisado-sem-alteracao`);
  }
  return errors;
}
