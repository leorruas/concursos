// Currículo e retomada por concurso/matéria. Não escreve arquivos nem teoria.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
export const normalize = x => String(x || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const ok = (condition, message) => { if (!condition) throw new Error(message); };
const arr = x => Array.isArray(x);
const txt = x => typeof x === 'string' && x.trim().length > 0;
const count = qs => { const n = result => qs.filter(q => q.result === result).length; const correct=n('correct'),incorrect=n('incorrect'); return {correct,incorrect,blank:n('blank'),annulled:n('annulled'),accuracy:correct+incorrect?Number((correct/(correct+incorrect)).toFixed(4)):null}; };
const addDays = (date,n) => { const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10); };
const file = (root, p) => fs.readFileSync(path.join(root,p),'utf8');
// O contrato da preparação vem do concurso-alvo, separado do corpus histórico.
export function examProfile(contest) {
  ok(contest && txt(contest.id) && txt(contest.banca), 'Concurso sem banca definida');
  const judgment=contest.estruturaProva?.objetiva?.julgamento;
  if(contest.id==='cgu-2026') {
    ok(contest.banca==='Cebraspe', 'CGU 2026 exige banca Cebraspe; referência histórica não altera o concurso-alvo');
    ok(!judgment || judgment==='Certo ou Errado', 'CGU 2026 exige formato Certo ou Errado');
  }
  const questionFormat=contest.id==='cgu-2026'||judgment==='Certo ou Errado'?'CE':contest.banca==='FGV'?'AE':null;
  return {concursoId:contest.id,banca:contest.banca,questionFormat,answerOptions:questionFormat==='CE'?['C','E','Em branco']:questionFormat==='AE'?['A','B','C','D','E']:[],
    instruction:`Concurso-alvo: ${contest.nome||contest.id}. Banca: ${contest.banca}. Formato de treino: ${questionFormat==='CE'?'Certo/Errado':questionFormat==='AE'?'múltipla escolha A–E':'conferir edital'}. Aplicar esse perfil em todas as matérias e na retomada; protocolos de outro concurso permanecem restritos ao respectivo concurso.`,
    metadataSource:'data/concursos.json',historicalSourcesRole:'Fontes históricas e de outras bancas servem como apoio de conteúdo; sua origem não redefine banca, formato ou pontuação do concurso-alvo.'};
}
export function checkRef(root, ref) {
  ok(txt(ref) && !ref.includes('..') && !ref.includes('\\') && !path.isAbsolute(ref), `Referência local inválida: ${ref}`);
  const [p,heading]=ref.split('#');const text=file(root,p.endsWith('.md')?p:p+'.md');
  if (heading) ok(text.split(/\r?\n/).some(l=>/^#{1,6} /.test(l) && l.replace(/^#{1,6} /,'').trim()===heading), `Seção não encontrada: ${ref}`);
}
export function parseProgram(root,p) {
  const items=[];let part,block,heading;
  for (const [i,line] of file(root,p).split(/\r?\n/).entries()) {
    const a=line.match(/^### (P[123]):/);if(a){part=a[1];continue;}
    const b=line.match(/^### (\d+)\. (.+)/);if(b&&part){block=part+'.'+b[1];heading=b[1]+'. '+b[2];continue;}
    const c=line.match(/^- \[([ x])\] (\d+) (.+)/);if(c&&block)items.push({id:block+'.'+c[2],block,title:c[3],sourceRef:p.replace(/\.md$/,'')+'#'+heading,line:i+1,sourceChecked:c[1]==='x'});
  }
  return items;
}
export function loadPlans(root) {
  const dir=path.join(root,'data/planos-estudo');
  if(!fs.existsSync(dir))return [];
  return fs.readdirSync(dir).filter(n=>n.endsWith('.json')).sort().map(n=>JSON.parse(file(root,'data/planos-estudo/'+n)));
}
export function validatePlan(root,plan,concursos) {
  ok(plan.schemaVersion===1 && concursos.some(c=>c.id===plan.concursoId),'Plano sem concurso válido');
  const profile=examProfile(concursos.find(c=>c.id===plan.concursoId));
  if(plan.questionFormat)ok(profile.questionFormat===plan.questionFormat,'Formato do plano diverge da banca/concurso-alvo');
  const program=parseProgram(root,plan.editalPath);const itemIds=new Set(program.map(i=>i.id));
  ok(program.length>0,'Programa vazio');
  const ids=new Set(),aliases=new Map(),used=new Set();
  for(const s of plan.subjects){
    ok(normalize(s.id)===s.id&&!ids.has(s.id),`Matéria duplicada/inválida: ${s.id}`);ids.add(s.id);
    for(const a of [s.id,s.name,...s.aliases]){const k=normalize(a);ok(!aliases.has(k)||aliases.get(k)===s.id,`Alias ambíguo: ${a}`);aliases.set(k,s.id);}
    if(s.hub)checkRef(root,s.hub);
    const units=new Set(s.units.map(u=>u.id));ok(units.size===s.units.length&&units.size>0,`${s.id}: unidades inválidas`);
    for(const u of s.units){
      ok(normalize(u.id)===u.id,`Unidade inválida: ${u.id}`);
      ok(u.title||u.editalItems.length,`${s.id}/${u.id}: sem título ou item`);
      for(const i of u.editalItems){ok(itemIds.has(i),`Item do edital ausente: ${i}`);used.add(i);}
      u.noteRefs.forEach(r=>checkRef(root,r));
      for(const r of u.requires)ok(units.has(r)&&r!==u.id,`Pré-requisito inválido: ${s.id}/${r}`);
      for(const src of u.sourceIds)ok(plan.sources[src],`Fonte ausente: ${src}`);
      if(u.historicalExposure){checkRef(root,u.historicalExposure.evidenceRef);ok(/^\d{4}-\d{2}-\d{2}$/.test(u.historicalExposure.date),'Data histórica ausente');}
    }
    const visit=(id,chain=[])=>{ok(!chain.includes(id),`Ciclo de pré-requisitos: ${s.id}/${id}`);for(const r of s.units.find(u=>u.id===id).requires)visit(r,[...chain,id]);};s.units.forEach(u=>visit(u.id));
    for(const unit of Object.values(s.legacySourceUnits||{}))ok(units.has(unit),`Mapeamento histórico inválido: ${unit}`);
  }
  for(const s of plan.subjects){for(const id of s.requiresSubjects||[])ok(ids.has(id)&&id!==s.id,`Matéria pré-requisito ausente: ${id}`);for(const u of s.units)if(u.sharedExposureFrom)ok(plan.subjects.some(t=>t.id===u.sharedExposureFrom.subjectId&&t.units.some(v=>v.id===u.sharedExposureFrom.unitId)), 'Exposição compartilhada inválida');}
  for(const i of itemIds)ok(used.has(i),`Item do edital sem rota: ${i}`);
  for(const b of plan.blocks)ok(program.some(i=>i.block===b.id),`Bloco removido do edital: ${b.id}`);
  for(const source of Object.values(plan.sources))if(source.ref)checkRef(root,source.ref);
  return program;
}
export function validateLearning(root,s,concursos) {
  if(s.schemaVersion!==2)return;
  const contest=concursos.find(c=>c.id===s.concursoId);
  const plan=loadPlans(root).find(p=>p.concursoId===s.concursoId)||{subjects:genericSubjects(root),sources:{edital:{ref:contest?.sourcePath}},questionFormat:contest?.estruturaProva?.objetiva?.julgamento==='Certo ou Errado'?'CE':null};
  const subject=plan.subjects.find(x=>x.id===s.subjectId);ok(subject,`${s.id}: matéria não catalogada`);
  const unit=subject.units.find(x=>x.id===s.unitId);ok(unit,`${s.id}: unidade não catalogada`);
  const localDate=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(s.startedAt));ok(localDate===s.date,`${s.id}: data da sessão diverge do início em São Paulo`);
  const l=s.learning;ok(l&&['preparacao','aula','fronteiras','aprendizagem','para_valer','correcao','revisao','consolidacao'].includes(l.stage),`${s.id}: etapa inválida`);
  for(const k of ['taughtConcepts','boundaries','pending'])ok(arr(l[k])&&l[k].every(txt),`${s.id}: ${k} deve ser lista de textos`);
  ok(typeof l.unitCompleted==='boolean',`${s.id}: unitCompleted obrigatório`);
  ok(l.next&&subject.units.some(u=>u.id===l.next.unitId)&&txt(l.next.objective)&&['preparacao','aula','fronteiras','aprendizagem','para_valer','revisao'].includes(l.next.stage),`${s.id}: próximo passo inválido`);
  if(l.next.noteRef)checkRef(root,l.next.noteRef);
  ok(arr(l.next.sourceIds)&&l.next.sourceIds.length>0&&l.next.sourceIds.every(id=>plan.sources[id]),`${s.id}: fonte do próximo passo ausente`);
  if(l.unitCompleted){
    ok(s.status==='concluido' && (l.taughtConcepts.length>0||unit.historicalExposure),`${s.id}: conclusão sem exposição`);
    const unresolved=s.questions.some(q=>!q.annulled&&((q.userAnswer!==null&&q.userAnswer!==q.correctAnswer&&['conhecimento','confusao_conceitual'].includes(q.errorType))||['guess','insecure'].includes(q.confidence)));
    if(unresolved)ok(txt(l.advanceWithGaps),`${s.id}: avanço com erro conceitual exige justificativa, mantendo revisão`);
  }
  if(s.kind==='fechamento')ok(s.questions.length===0&&l.stage==='consolidacao',`${s.id}: fechamento editorial não contém questões e usa etapa consolidacao`);
  const editorial=l.editorialConsolidation;
  if(editorial){
    ok(['consolidado','revisado-sem-alteracao'].includes(editorial.status)&&txt(editorial.summary),`${s.id}: recibo editorial sem estado ou justificativa`);
    ok(arr(editorial.noteRefs)&&editorial.noteRefs.length>0&&editorial.noteRefs.every(r=>txt(r)&&r.startsWith('3 - Materias/')&&!/(?:^|\/)Avancos(?:\.md)?$/.test(r.split('#')[0])),`${s.id}: recibo editorial exige notas canônicas`);
    editorial.noteRefs.forEach(r=>checkRef(root,r));
    ok(arr(editorial.coveredSessionIds)&&editorial.coveredSessionIds.length>0&&editorial.coveredSessionIds.every(txt)&&new Set(editorial.coveredSessionIds).size===editorial.coveredSessionIds.length,`${s.id}: sessões editoriais ausentes ou duplicadas`);
  }
  if(l.doubts)for(const d of l.doubts)ok(normalize(d.id)===d.id&&txt(d.text)&&['aberta','resolvida'].includes(d.status)&&arr(d.evidenceQuestionNumbers)&&(!['resolvida'].includes(d.status)||d.evidenceQuestionNumbers.length>0),`${s.id}: dúvida sem estado/evidência`);
  for(const q of s.questions){
    ok(normalize(q.conceptId)===q.conceptId&&txt(q.conceptId),`${s.id}: conceptId obrigatório`);
    ok(subject.units.some(u=>u.id===(q.unitId||s.unitId)),`${s.id}: unidade da questão inválida`);
    ok(subject.legacyDisciplines.some(d=>normalize(d)===normalize(q.discipline)),`${s.id}: disciplina diverge da matéria`);
    if(q.sourceRefs)ok(arr(q.sourceRefs)&&q.sourceRefs.every(r=>plan.sources[r.sourceId]&&txt(r.locator)),`${s.id}: referência normativa sem fonte/localizador`);
    if(q.retrievalOf)ok(arr(q.retrievalOf)&&q.retrievalOf.every(txt),`${s.id}: retrievalOf inválido`);
    if(plan.questionFormat)ok(q.format===plan.questionFormat,`${s.id}: formato diverge do concurso`);
  }
  return subject;
}
function genericSubjects(root) {
  const base='3 - Materias';return fs.readdirSync(path.join(root,base),{withFileTypes:true}).filter(d=>d.isDirectory()&&d.name!=='Estrategia de Prova').map(d=>{
    const paths=fs.readdirSync(path.join(root,base,d.name)).filter(n=>n.endsWith('.md')&&n!=='Avancos.md').map(n=>`${base}/${d.name}/${n}`);
    const hubs=paths.filter(p=>/^type:\s*["']?hub["']?\s*$/m.test(file(root,p).slice(0,500)));
    const hub=hubs.length===1?hubs[0].replace(/\.md$/,''):null;
    return {id:normalize(d.name),name:d.name,aliases:[d.name],hub,legacyDisciplines:[d.name],priority:{tier:'a-definir',rationale:'Fora do plano inicial CGU; organizar pelo edital do concurso'},units:paths.filter(p=>!hubs.includes(p)).map((p,i)=>({id:'u'+String(i+1).padStart(2,'0'),title:(file(root,p).match(/^# (.+)$/m)||[])[1]||path.basename(p,'.md'),editalItems:[],noteRefs:[p.replace(/\.md$/,'')],requires:[],sourceIds:['edital'],coverage:'nao-auditada'}))};
  }).map(s=>({...s,units:s.units.length?s.units:[{id:'inicio',title:'Entrada e diagnóstico de '+s.name,editalItems:[],noteRefs:s.hub?[s.hub]:[],requires:[],sourceIds:['edital'],coverage:'panorama-nao-auditado'}]}));
}
const refFingerprint=(root,paths)=>crypto.createHash('sha256').update(paths.map(p=>p+'\n'+file(root,p)).join('\n')).digest('hex');
export function buildSubjectContexts(root,ledger,concursos,cut) {
  const outputs=new Map(),plans=loadPlans(root),sources=new Map(ledger.simulations.map(s=>[s.id,s]));
  const index={schemaVersion:1,activeDefault:{concursoId:'cgu-2026',from:'2026-10-12',through:'2026-12-13',after:'camara-2026'},commands:['continuar <matéria>','estudar <matéria>','revisar meus erros de <matéria>','continuar <concurso> de onde parei'],contests:[]};
  for(const contest of concursos){
    const plan=plans.find(p=>p.concursoId===contest.id);const program=plan?validatePlan(root,plan,concursos):[];
    const subjects=plan?plan.subjects:genericSubjects(root);
    const activeExam=examProfile(contest);
    const contestIndex={concursoId:contest.id,banca:contest.banca,activeExam,subjects:[],resume:null};
    const modes=q=>q.trainingMode||sources.get(q.sourceId)?.trainingModes?.join('+')||(sources.get(q.sourceId)?.sourcePath?.startsWith('00 - Desempenho/Simulados/Simulado-')?'simulado':'historico-nao-classificado');
    for(const subject of subjects){
      const matches=q=>q.concursoId===contest.id&&(q.subjectId?q.subjectId===subject.id:subject.legacyDisciplines.some(d=>normalize(d)===normalize(q.discipline)));
      const qs=ledger.questions.filter(matches);
      const unitOf=q=>q.unitId||sources.get(q.sourceId)?.unitId||subject.legacySourceUnits?.[q.sourceId]||null;
      const selected=[...sources.values()].filter(s=>s.concursoId===contest.id&&(s.subjectId===subject.id||qs.some(q=>q.sourceId===s.id))).map((s,i)=>({...s,_order:i})).sort((a,b)=>a.date.localeCompare(b.date)||(Date.parse(a.startedAt||a.date)-Date.parse(b.startedAt||b.date))||a._order-b._order);
      const latest=selected.at(-1);
      const modeResults={};for(const mode of [...new Set(qs.map(modes))])modeResults[mode]={...count(qs.filter(q=>modes(q)===mode)),meaning:mode==='aprendizagem'?'aprendizagem-observada':mode==='revisao'?'recuperacao; espacamento deve ser verificado':'desempenho-no-recorte; conferir calibração e formato'};
      const byId=new Map(qs.map(q=>[q.id,q]));
      const gaps=[];
      for(const q of qs){
        if(q.result==='annulled'||!(q.result==='incorrect'||q.result==='blank'||['insecure','guess'].includes(q.confidence)))continue;
        const date=q.date||sources.get(q.sourceId)?.date;const concept=q.conceptId||q.mechanism;
        const attempts=qs.filter(r=>(r.retrievalOf||[]).includes(q.id)&&r.result==='correct'&&r.confidence==='secure'&&(r.date||sources.get(r.sourceId)?.date)>=date);
        const spaced=attempts.filter(r=>(r.date||sources.get(r.sourceId)?.date)>date&&!['exact','mechanical'].includes(r.repetition?.classification));
        const laterFailure=qs.some(r=>r.id!==q.id&&(r.conceptId||r.mechanism)===concept&&r.result==='incorrect'&&(r.date||sources.get(r.sourceId)?.date)>(spaced.at(-1)?.date||date));
        const spacedDays=[...new Set(spaced.map(r=>r.date||sources.get(r.sourceId)?.date))];
        const status=spaced.length&&!laterFailure?'retencao-observada':attempts.length&&!laterFailure?'recuperacao-imediata':'pendente';
        gaps.push({questionId:q.id,unitId:unitOf(q),concept,topic:q.subtopic,kind:q.result==='incorrect'?'erro':q.result==='blank'?'branco':q.confidence==='guess'?'chute':'duvida',errorType:q.errorType||null,errorTypeLabel:({K:'conhecimento',C:'confusao_conceitual',I:'interpretacao',D:'distracao'})[q.errorType]||null,status,recurrences:Math.max(qs.filter(r=>r.result==='incorrect'&&(r.conceptId||r.mechanism)===concept).length,1+(q.repetition?.similarTo||[]).filter(id=>byId.get(id)?.result==='incorrect').length),date,dueOn:addDays(spaced.at(-1)?.date||attempts.at(-1)?.date||date,(plan?.reviewPolicy?.intervalDays||[1,7,21])[Math.min(spacedDays.length,2)]),theoryRefs:q.theoryRefs||[],sourceRefs:q.sourceRefs||[],evidence:attempts.map(r=>r.id)});
      }
      for (const gap of gaps) { const later=gaps.filter(g=>g.concept===gap.concept&&g.kind==='erro'&&gaps.indexOf(g)>gaps.indexOf(gap)).at(-1);if(later&&later!==gap){gap.supersededBy=later.questionId;gap.status='historico-substituido';} }
      // Recuperação explícita deve apontar para resposta anterior do mesmo concurso/matéria.
      for(const q of qs)for(const id of q.retrievalOf||[]){const target=byId.get(id);ok(target&&target.id!==q.id,`${q.id}: recuperação sem item anterior da mesma matéria`);ok(qs.indexOf(target)<qs.indexOf(q),`${q.id}: recuperação precisa de item anterior na sequência registrada`);ok((target.date||sources.get(target.sourceId)?.date)<=(q.date||sources.get(q.sourceId)?.date),`${q.id}: recuperação antecede o item original`);if(target.conceptId)ok(target.conceptId===q.conceptId,`${q.id}: recuperação de conceito diferente`);}
      const retentionObservations=[];
      for(const q of qs)for(const id of q.retrievalOf||[]){const target=byId.get(id);if(q.result!=='correct'||q.confidence!=='secure'||!target)continue;const date=q.date||sources.get(q.sourceId)?.date;const originalDate=target.date||sources.get(target.sourceId)?.date;const spaced=date>originalDate&&!['exact','mechanical'].includes(q.repetition?.classification);retentionObservations.push({targetQuestionId:id,evidenceQuestionId:q.id,unitId:unitOf(target),conceptId:target.conceptId||target.mechanism,date,status:spaced?'espacada':'imediata-ou-mecanica'});}
      const units=subject.units.map(unit=>{
        const relevant=qs.filter(q=>unitOf(q)===unit.id);
        const events=selected.filter(s=>s.unitId===unit.id&&s.learning);
        const history=unit.historicalExposure;
        const shared=unit.sharedExposureFrom;
        const sharedUnit=shared&&subjects.find(s=>s.id===shared.subjectId)?.units.find(u=>u.id===shared.unitId);
        const exposure=events.some(e=>e.learning.taughtConcepts.length)?'registrada-na-sessao':history?'historico-documentado':sharedUnit?.historicalExposure?'exposicao-compartilhada-parcial':'nao-registrada';
        const last=events.at(-1);const closure=events.filter(e=>e.learning.unitCompleted).at(-1);
        const complete=closure||history?.status==='encerrada-didaticamente';
        const unitSources=selected.filter(s=>(s.unitId||subject.legacySourceUnits?.[s.id])===unit.id);
        const requiredSessionIds=unitSources.filter(s=>s.tipo!=='fechamento').map(s=>s.id);
        const receiptEvent=events.filter(s=>s.learning.editorialConsolidation).at(-1);
        const receipt=receiptEvent?.learning.editorialConsolidation;
        if(receipt)for(const id of receipt.coveredSessionIds)ok(unitSources.some(s=>s.id===id),`${receiptEvent.id}: consolidação referencia sessão de outra unidade/matéria/concurso`);
        const reviewed=receipt&&requiredSessionIds.every(id=>receipt.coveredSessionIds.includes(id));
        const editorial={status:reviewed?receipt.status:closure?'pendente':complete?'historico-a-conferir':'acumulando',requiredSessionIds,noteRefs:receipt?.noteRefs||unit.noteRefs,receiptSessionId:receiptEvent?.id||null,summary:receipt?.summary||null};
        const titles=unit.editalItems.map(id=>program.find(i=>i.id===id)?.title).filter(Boolean);
        const taught=[...new Set([...(history?.taughtConcepts||[]),...events.flatMap(e=>e.learning.taughtConcepts)])];
        const boundaries=[...new Set([...(history?.boundaries||[]),...events.flatMap(e=>e.learning.boundaries)])];
        const perf={};for(const mode of [...new Set(relevant.map(modes))])perf[mode]=count(relevant.filter(q=>modes(q)===mode));
        const lastDate=last?.date||relevant.at(-1)?.date||history?.date;
        return {id:unit.id,title:unit.title||titles[0],editalItems:unit.editalItems,knowledge:{coverage:unit.coverage,role:unit.noteRole||'nota-do-recorte-quando-disponivel',noteRefs:unit.noteRefs},exposure:{state:exposure,taughtConcepts:taught,boundaries,sourceRef:history?.evidenceRef||sharedUnit?.historicalExposure?.evidenceRef||null,sharedFrom:shared||null},didacticCompletion:!!complete,editorial,completionDate:closure?.date||(complete?history?.date:null)||null,pending:last?.learning.pending||(!complete?['ensino/fronteiras/avaliação a completar no recorte']:[]),results:perf,requires:unit.requires,sourceIds:unit.sourceIds,recommendedPrerequisites:unit.recommendedPrerequisites||[],retention:{status:retentionObservations.some(o=>o.unitId===unit.id&&o.status==='espacada')?'parcial-por-conceito':'nao-comprovada-para-a-unidade',reviewDueOn:lastDate?addDays(lastDate,1):null},lastEvidenceDate:lastDate||null};
      });
      const retrievalTargets=units.flatMap(u=>{const valid=qs.filter(q=>unitOf(q)===u.id&&!['annulled','blank'].includes(q.result));return [...new Map([valid[0],valid.at(-1)].filter(Boolean).map(q=>[q.id,{questionId:q.id,unitId:u.id,conceptId:q.conceptId||q.mechanism,topic:q.subtopic,date:q.date||sources.get(q.sourceId)?.date,theoryRefs:q.theoryRefs?.length?q.theoryRefs:u.knowledge.noteRefs,confidence:q.confidence||'unknown'}])).values()];});
      const currentId=latest?.learning?.next?.unitId||latest?.unitId||subject.legacySourceUnits?.[latest?.id]||units.find(u=>!u.didacticCompletion)?.id||units.at(-1)?.id;
      const current=units.find(u=>u.id===currentId);const openCurrent=gaps.filter(g=>g.unitId===currentId&&g.status==='pendente'&&['K','C'].includes(g.errorType));
      const lnext=latest?.learning?.next;
      const fragileCurrent=gaps.filter(g=>g.unitId===currentId&&g.status==='pendente'&&['chute','duvida','branco'].includes(g.kind));
      const closed=units.filter(u=>u.didacticCompletion).sort((a,b)=>(a.completionDate||'').localeCompare(b.completionDate||'')||a.id.localeCompare(b.id));
      let next={unitId:currentId||null,title:current?.title||null,stage:openCurrent.length?'fronteiras':fragileCurrent.length?'aprendizagem':lnext?.stage||(latest?'aprendizagem':'preparacao'),objective:openCurrent.length?`Reparar a fronteira: ${openCurrent.at(-1).topic}. ${latest?.nextStep||''}`:fragileCurrent.length?`Retestar recuperação incerta: ${fragileCurrent.at(-1).topic}; sem inferir retenção ou domínio.`:lnext?.objective||latest?.nextStep||(current?`Preparar e ensinar ${current.title}; conferir fonte e pré-requisitos antes dos itens.`:'Organizar unidade a partir do edital.'),noteRef:lnext?.noteRef||current?.knowledge.noteRefs[0]||null,sourceIds:lnext?.sourceIds||current?.sourceIds||[],prerequisites:current?.requires.filter(id=>!units.find(u=>u.id===id)?.didacticCompletion)||[],prerequisiteSubjects:subject.requiresSubjects||[],recommendedPrerequisites:current?.recommendedPrerequisites||[]};
      const pendingEditorial=units.filter(u=>u.editorial.status==='pendente').map(u=>({unitId:u.id,title:u.title,...u.editorial}));
      if(pendingEditorial.length){
        const target=units.find(u=>u.id===pendingEditorial[0].unitId);
        next={unitId:target.id,title:target.title,stage:'consolidacao',objective:'Fechar editorialmente a unidade: conferir as sessões indicadas, incorporar conceitos, fronteiras, exemplos e correções nas notas canônicas e registrar o recibo antes de iniciar a próxima unidade.',noteRef:target.editorial.noteRefs[0]||null,sourceIds:target.sourceIds,requiredSessionIds:target.editorial.requiredSessionIds,afterEditorial:next};
      }
      const doubts=new Map();for(const s of selected)for(const d of s.learning?.doubts||[]) {if(d.status==='resolvida')ok(d.evidenceQuestionNumbers.every(n=>qs.some(q=>q.sourceId===s.id&&q.number===n&&q.result==='correct'&&q.confidence==='secure')),`${s.id}: dúvida resolvida sem resposta segura`);doubts.set(d.id,d);}
      const refs=[...new Set(subject.units.flatMap(u=>u.noteRefs).map(r=>r.split('#')[0]+'.md'))];
      const sourceIds=[...new Set(subject.units.flatMap(u=>u.sourceIds))];
      const context={schemaVersion:2,concursoId:contest.id,subjectId:subject.id,discipline:subject.name,banca:contest.banca,activeExam,format:contest.estruturaProva?.objetiva?.julgamento||'consultar edital',cut,coverage:'Somente evidência registrada deste concurso. Nota disponível não implica exposição; legado pode ser parcial.',priority:{...subject.priority,unitCount:subject.units.length,officialItems:[...new Set(subject.units.flatMap(u=>u.editalItems))].length,weightByPart:Object.fromEntries((plan?.blocks||[]).filter(b=>subject.units.some(u=>u.editalItems.some(i=>i.startsWith(b.id+'.')))).map(b=>[b.id.split('.')[0],b.weight]))},hub:subject.hub||null,state:latest?'em-estudo':units.some(u=>u.exposure.state!=='nao-registrada')?'exposicao-parcial-compartilhada':'nao-iniciada',sourceFingerprint:refFingerprint(root,refs),latestSession:latest?{id:latest.id,date:latest.date,startedAt:latest.startedAt||null,path:latest.sourcePath,diagnosis:latest.qualityNote||null}:null,lastCompletedUnit:closed.at(-1)?.id||null,lastEditoriallyClosedUnit:closed.filter(u=>['consolidado','revisado-sem-alteracao'].includes(u.editorial.status)).at(-1)?.id||null,pendingEditorial,results:modeResults,units,gaps,openDoubts:[...doubts.values()].filter(d=>d.status==='aberta'),pendingReviews:units.filter(u=>u.lastEvidenceDate).map(u=>({unitId:u.id,dueOn:u.retention.reviewDueOn,status:'retencao-da-unidade-nao-testada',rule:'Datas são propostas; comparar com a data atual no chat. Revisão no mesmo dia mede recuperação imediata.'})),recentMechanisms:[...new Set(qs.slice(-24).map(q=>q.mechanism))],sources:Object.fromEntries(sourceIds.map(id=>[id,plan?.sources[id]||{label:'Edital do concurso: conferir recorte e norma indicada',ref:contest.sourcePath}])),resume:next,limits:[]};
      if(!plan)context.limits.push('Plano do edital ainda não auditado: inventário de notas, não percurso validado.');
      if(qs.some(q=>!unitOf(q)))context.limits.push('Há itens históricos sem unidade explicitamente mapeada; entram só nas métricas da matéria.');
      if(latest&&!latest.learning)context.limits.push('Último checkpoint legado: exposição/fronteiras usam evidência do hub; o próximo registro deve usar schemaVersion 2.');
      if(next.sourceIds.length===1&&next.sourceIds[0]==='edital')context.limits.push('A fonte específica de norma/autor do próximo recorte precisa ser selecionada antes da aula; o edital só delimita o programa.');
      if(!next.noteRef)context.limits.push('Sem nota canônica específica no ponto de entrada; ensinar pela fonte primária, registrar lacuna editorial sem criar nota superficial.');
      const contextPath=`data/contexto-estudo/${contest.id}/${subject.id}.json`;
      const queue=[...gaps].sort((a,b)=>Number(b.status==='pendente')-Number(a.status==='pendente')||b.date.localeCompare(a.date));
      const pages=[];
      for(let i=0;i<queue.length;i+=20){const p=`data/contexto-estudo/${contest.id}/${subject.id}/revisoes-${String(1+i/20).padStart(3,'0')}.json`;pages.push(p);outputs.set(p,JSON.stringify({concursoId:contest.id,subjectId:subject.id,cut,page:1+i/20,gaps:queue.slice(i,i+20)})+'\n');}
      context.gaps=[...gaps].sort((a,b)=>Number(b.unitId===currentId)-Number(a.unitId===currentId)||Number(b.status==='pendente')-Number(a.status==='pendente')||b.date.localeCompare(a.date)).slice(0,20);
      context.retrievalTargets=retrievalTargets;context.retentionObservations={total:retentionObservations.length,recent:retentionObservations.slice(-12),scope:'observações históricas por conceito; falhas posteriores continuam na fila'};
      context.reviewIndex={total:gaps.length,pending:gaps.filter(g=>g.status==='pendente').length,pages,visibleLimit:20};
      contestIndex.subjects.push({id:subject.id,name:subject.name,aliases:subject.aliases,path:contextPath,state:context.state,priority:subject.priority.tier});
      context.observationAxes={knowledge:'units[].knowledge: cobertura de notas, sem equivalência de estudo',exposure:'units[].exposure: fonte histórica ou checkpoint explícito',learning:modeResults.aprendizagem||null,competitive:{results:Object.fromEntries(Object.entries(modeResults).filter(([m])=>['para_valer','real','adaptada','simulado'].includes(m))),calibration:'Rótulo e referências não validam equivalência de dificuldade. Conferir corpus antes do treino.',noOfficialScore:true},retention:{retrievedLater:new Set(retentionObservations.filter(o=>o.status==='espacada').map(o=>o.conceptId)).size,immediatelyRecovered:new Set(retentionObservations.filter(o=>o.status==='imediata-ou-mecanica').map(o=>o.conceptId)).size,scope:'observações por conceito; sem domínio integral automático'}};
      // Serialização após todos os eixos e limites, para manter uma projeção única.
      outputs.set(contextPath,JSON.stringify(context)+'\n');
      const latestTime=latest?Date.parse(latest.startedAt||latest.date):0;
      if(latest&&(!contestIndex.resume||latestTime>=contestIndex.resume.time))contestIndex.resume={subjectId:subject.id,path:contextPath,lastSessionId:latest.id,time:latestTime};
    }
    index.contests.push(contestIndex);
  }
  outputs.set('data/contexto-estudo/indice.json',JSON.stringify(index,null,2)+'\n');
  return {outputs,index};
}
export function resolveCommand(index,command,concursoId=null,today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo'}).format(new Date())) {
  const normalized=normalize(command);const contains=a=>('-'+normalized+'-').includes('-'+normalize(a)+'-');
  const explicit=index.contests.filter(c=>contains(c.concursoId)||contains(c.concursoId.split('-')[0]));
  ok(explicit.length<=1,'Mais de um concurso citado: esclarecer o concurso-alvo.');
  const defaultId=today>=index.activeDefault.from&&today<=index.activeDefault.through?index.activeDefault.concursoId:today>index.activeDefault.through?index.activeDefault.after:'dataprev-2026';
  const contest=index.contests.find(c=>c.concursoId===(explicit[0]?.concursoId||concursoId||defaultId));ok(contest,'Concurso sem índice');
  const candidates=contest.subjects.map(subject=>({subject,score:Math.max(0,...[subject.id,subject.name,...subject.aliases].filter(contains).map(a=>normalize(a).length))})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  ok(candidates.length<2||candidates[0].score!==candidates[1].score,'Matérias ambíguas: esclarecer somente o assunto.');
  const item=candidates[0]?.subject||(!candidates.length&&/de-onde-parei|continuar-a-cgu|continuar-cgu/.test(normalized)?contest.subjects.find(s=>s.id===contest.resume?.subjectId):null);
  ok(item,'Matéria não identificada: pedir somente o nome do assunto, sem exigir IDs.');
  return {concursoId:contest.concursoId,subjectId:item.id,path:item.path,intent:normalized.includes('revisar')?'revisao':'continuar'};
}
