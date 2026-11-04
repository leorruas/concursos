import {buildFlashcardPriorities} from './flashcard-priorities.js';
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {validateFlashcards} from './validate-flashcards.js';
const root=fileURLToPath(new URL('..',import.meta.url)), ctx={};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(new URL('../web/09-flashcards-engine.js',import.meta.url),'utf8'),ctx);
const F=ctx.Flashcards, data=JSON.parse(fs.readFileSync(new URL('../data/flashcards.json',import.meta.url))), cards=data.cards;
const now=Date.UTC(2026,10,4), options={exam:'cgu-2026',subject:'orcamento-publico',mode:'new',direction:'forward'};
const uiText=fs.readFileSync(new URL('../web/10-flashcards-ui.js',import.meta.url),'utf8');
const pageText=fs.readFileSync(new URL('../flashcards.html',import.meta.url),'utf8');
assert(uiText.includes('raw.githubusercontent.com/leorruas/concursos/main/data/contexto-estudo/flashcards-prioridades.json'));
assert(!pageText.includes('fc-errors-import'),'Importação manual de prioridades deve desaparecer');
assert(pageText.includes('id="fc-errors-status"'),'Manter status automático de prioridades');
assert(!pageText.includes('type="file"')&&!pageText.includes('fc-import-trigger'),'Remover controle de arquivos de toda a interface');
assert(!uiText.includes("$('import')")&&!uiText.includes('import-trigger'),'Remover handlers de importação');
for(const name of ['aud-finalidade-teste-controle','aud-teste-substantivo-detalhes','aud-observacao-reexecucao']) {
 const card=cards.find(c=>c.id===name);
 assert(card?.subjectIds.includes('auditoria-governamental')&&card.contrast,'Card novo de Auditoria ausente: '+name);
}
assert(cards.length>=221,'Inventário deve conter a expansão de Auditoria');
const politicaNovos=[
 'pp-teoria-mudanca-vs-modelo-logico','pp-insumos-vs-atividades','pp-produtos-vs-resultados',
 'pp-impacto-logico-vs-causal','pp-avaliabilidade-por-pergunta','pp-variacao-observada-vs-efeito',
 'pp-economicidade-vs-eficiencia'
];
for(const id of politicaNovos) {
 const card=cards.find(c=>c.id===id);
 assert(card?.examIds.includes('cgu-2026')&&card?.subjectIds.includes('politicas-publicas')&&card.contrast,
  'Novo cartão de Políticas Públicas sem contexto e contraste: '+id);
}
assert(cards.length>=228,'Coleção deve preservar o lote transversal de Políticas Públicas');
for(const id of ['orc-transferencia-gasto-vs-receita','orc-meta-fisica-vs-valor-pago','pp-auditoria-operacional-vs-impacto']) {
 const c=cards.find(x=>x.id===id);
 assert(c?.examIds.includes('cgu-2026')&&c.contrast?.prompt&&c.contrast?.answer,'Lote transversal ausente: '+id);
}
assert(cards.find(c=>c.id==='orc-meta-fisica-vs-valor-pago')?.subjectIds.includes('politicas-publicas'),'Meta física deve ser reutilizada em políticas');
assert(cards.find(c=>c.id==='pp-auditoria-operacional-vs-impacto')?.subjectIds.includes('auditoria-governamental'),'Conexão entre avaliação e auditoria ausente');
assert(cards.length>=231,'Cobertura transversal inferior ao lote novo');
const inerente=cards.find(c=>c.id==='aud-risco-inerente');
assert(inerente?.examIds.includes('cgu-2026'),'Falta cartão de risco inerente da CGU');
assert(inerente.subjectIds.includes('governanca-riscos-integridade')&&inerente.subjectIds.includes('auditoria-governamental'),'Risco inerente deve ser compartilhado entre Governança e Auditoria');
for(const id of ['aud-rastreamento-integridade','aud-vouching-ocorrencia','operacao-controle','desenho-controle','aud-risco-residual','aud-finalidade-teste-controle','aro','institucional','classificacao-programatica']) {
 const c=cards.find(c=>c.id===id);assert(c?.revision>=2&&c.contrast?.prompt&&c.contrast?.answer,'Revisão/contraste ausente: '+id);
}
assert(cards.length>=232,'Coleção deve incluir o cartão novo sem perder anteriores');
assert(cards.filter(c=>c.subjectIds.includes('politicas-publicas')&&c.examIds.includes('cgu-2026')).length>=15,
 'Cobertura inicial de políticas públicas menor que o lote publicado');
assert.equal(F.stats(cards,F.empty(),now).unseen,cards.length);
const queue=F.select(cards,F.empty(),options,now,()=>.5);assert.equal(queue.length,10);assert.equal(new Set(queue.map(q=>q.id)).size,10);
let state=F.start(cards,F.empty(),options,now,()=>.5);
const id=state.session.queue[0].id;
state=F.rate(state,'again',now);assert.equal(state.session.position,1);assert.equal(state.reviews[id+':forward'].due,now+600000);assert.equal(state.session.retries[0].id,id);
assert.equal(state.session.queue.length,10);
const roundtrip=F.validateState(JSON.parse(JSON.stringify(state)),cards);assert.equal(roundtrip.session.position,1);assert.equal(roundtrip.session.retries[0].id,id);
assert.equal(F.stats(cards,state,now).known,0);assert.equal(F.stats(cards,state,now).unknown,1);
let r=F.schedule(undefined,'good',now);assert.equal(r.streak,1);assert.equal(r.due,now+F.DAY);
r=F.schedule(r,'good',now+1000);assert.equal(r.streak,1,'rehearsal must not advance spaced streak');
r=F.schedule(r,'good',now+F.DAY);assert.equal(r.streak,2);assert.equal(r.due,now+4*F.DAY);
r=F.schedule(r,'good',now+4*F.DAY);assert.equal(r.streak,3);assert.equal(r.due,now+11*F.DAY);
let learned=F.empty();learned.reviews[id+':forward']=r;assert.equal(F.stats(cards,learned,now+4*F.DAY).known,0,'forward alone is not mastery');
learned.reviews[id+':reverse']=r;assert.equal(F.stats(cards,learned,now+4*F.DAY).known,1);assert.equal(F.stats(cards,learned,now+11*F.DAY).due,1);
assert.equal(F.schedule(r,'hard',now+5*F.DAY).streak,0);assert.equal(F.schedule(r,'hard',now+5*F.DAY).due,now+6*F.DAY);
assert.equal(F.select(cards,state,{...options,mode:'due'},now+599999).length,0);assert.equal(F.select(cards,state,{...options,mode:'due'},now+600000)[0].id,id);
assert.equal(F.select(cards,state,{...options,mode:'difficult'},now)[0].id,id);
assert.equal(F.select(cards,state,{...options,exam:'dataprev-2026'},now).length,0);
assert.ok(F.select(cards,state,{...options,direction:'contrast'},now).every(q=>cards.find(c=>c.id===q.id).contrast));
assert.ok(F.select(cards.filter(c=>c.id===id),state,{...options,direction:'reverse'},now).some(q=>q.id===id),'reverse is independent of forward');
assert.throws(()=>F.validateState({version:99,reviews:{}},cards));
assert.throws(()=>F.validateState({version:1,reviews:{[id+':forward']:{grade:'good',due:NaN,last:0,streak:9,attempts:1}}},cards));
assert.throws(()=>F.validateState({...state,session:{...state.session,position:99}},cards));
const bad=structuredClone(data);bad.cards[0].note.section='Seção que não existe';assert.throws(()=>validateFlashcards(bad,root));
const duplicate=structuredClone(data);duplicate.cards.push(duplicate.cards[0]);assert.throws(()=>validateFlashcards(duplicate,root));

let continuous=F.start(cards,F.empty(),options,now,()=>.5);
for(let i=0;i<13;i++) {
    assert(continuous.session.queue[continuous.session.position],'Sessão terminou antes de 13 apresentações');
    continuous=F.refill(cards,F.rate(continuous,'good',now+i*1000),now+i*1000,()=>.5);
}
assert.equal(continuous.session.graded,13,'Permite estudar além de dez sem reiniciar');
assert(continuous.session.queue.length<=10,'Janela permanece limitada');
const restored=F.validateState(JSON.parse(JSON.stringify(continuous)),cards);
assert.equal(restored.session.graded,13,'Recarga preserva avaliação e posição');
const finished=F.finish(restored,now+13000);
assert.equal(finished.session,null,'Encerrar não mantém sessão ativa');
assert.equal(finished.lastSession.graded,13);
assert.equal(finished.lastSession.grades.good,13);
assert.equal(finished.lastSession.distinct,13);
assert.equal(F.validateState(JSON.parse(JSON.stringify(finished)),cards).lastSession.graded,13);
assert.equal(F.nextReview(cards,finished,options,now),now+F.DAY,'Agendamento preservado no fechamento');

const four=cards.filter(c=>c.examIds.includes(options.exam)&&c.subjectIds.includes(options.subject)).slice(0,4);
let small=F.start(four,F.empty(),options,now,()=>.5);
const failedId=small.session.queue[0].id;
small=F.refill(four,F.rate(small,'again',now),now,()=>.5);
for(let i=0;i<3;i++)small=F.refill(four,F.rate(small,'good',now+(i+1)*1000),now+(i+1)*1000,()=>.5);
assert.equal(small.session.queue[small.session.position].id,failedId,'Não sei retorna após três OUTROS conceitos');
small=F.refill(four,F.rate(small,'again',now+4000),now+4000,()=>.5);
assert.equal(small.session.retries.length,0,'Não sei repetido não cria ciclo infinito na mesma sessão');
assert.equal(small.session.queue.length,0,'Fila pequena termina sem duplicar revisões');

const legacy={version:1,reviews:state.reviews,session:{...options,queue:[{id,direction:'forward'},{id:queue[1].id,direction:'forward'}],position:1},priorities:null};
const migrated=F.validateState(legacy,cards);
assert.equal(migrated.version,2);
assert.equal(migrated.session.graded,1);
assert.equal(migrated.session.legacyGraded,1);
assert.equal(migrated.session.queue[0].id,queue[1].id,'Preserva cartão não avaliado');
assert.equal(migrated.reviews[id+':forward'].grade,'again','Preserva avaliação antiga');
assert.equal(F.validateState({...legacy,session:{...legacy.session,position:2}},cards).session,null,'Rodada antiga concluída não reabre');
assert.throws(()=>F.validateState({...continuous,session:{...continuous.session,seen:['inexistente']}},cards));
assert.throws(()=>F.validateState({...continuous,session:{...continuous.session,queue:Array(11).fill({id,direction:'forward'})}},cards));
console.log('SUCESSO: sessão contínua, fila limitada, retentativa, migração v1, encerramento, agendamento e validação de backup.');

// Prioridade vem de questões; memória autodeclarada permanece independente.
const target=cards.find(c=>c.id==='consultoria-previa-e-objetividade');
const profile={version:1,type:'study-errors',cut:'2026-11-04',entries:[{examId:'cgu-2026',subjectId:'auditoria-governamental',cardId:target.id,priority:400,status:'pendente',recurrences:2,dueOn:'2026-11-05'}]};
let prioritized={...F.empty(),priorities:F.validatePriorities(profile,cards)};
const assigned=F.applyPrioritySnapshot({...state,priorities:null},profile,cards);
assert.equal(assigned.priorities.entries[0].cardId,target.id);
assert.deepEqual(assigned.reviews,state.reviews,'Sincronizar prioridades preserva as revisões');
assert.deepEqual(assigned.session,state.session,'Sincronizar prioridades não muda a fila atual');
assert.equal(F.applyPrioritySnapshot(assigned,profile,cards),assigned,'Retrato idêntico não regrava progresso');
const stale={...profile,cut:'2026-11-03',entries:[]};
assert.equal(F.applyPrioritySnapshot(assigned,stale,cards),assigned,'Retrato desatualizado não substitui corte mais recente');
assert.throws(()=>F.applyPrioritySnapshot(assigned,{...profile,entries:[{...profile.entries[0],priority:999}]},cards));
const scope={exam:'cgu-2026',subject:'',mode:'mixed',direction:'forward'};
assert.equal(F.select(cards,prioritized,scope,now,()=>.5)[0].id,target.id);
assert.equal(F.select(cards,prioritized,{...scope,mode:'errors'},now).length,1);
assert(!F.select(cards,prioritized,{...scope,subject:'orcamento-publico',mode:'errors'},now).length,'Não vaza prioridade entre matérias');
assert(!F.select(cards,prioritized,{...scope,exam:'dataprev-2026',mode:'errors'},now).length);
prioritized.reviews[target.id+':forward']=F.schedule(undefined,'good',now);
assert.equal(F.select(cards,prioritized,scope,now+1000)[0].id,target.id,'Erro pendente da questão permite retomar cartão antes do vencimento local');
prioritized=F.start(cards,prioritized,{...scope,mode:'errors'},now,()=>.5);
const after=F.rate(prioritized,'good',now+1000);
assert.equal(after.priorities.entries[0].status,'pendente','Sei no cartão não resolve erro de questão');
assert.equal(F.validateState(JSON.parse(JSON.stringify(after)),cards).priorities.entries[0].cardId,target.id);
assert.equal(F.validateState({version:1,reviews:{},session:null},cards).priorities,null,'Backup antigo continua aceito');
const immediateProfile=structuredClone(profile);immediateProfile.entries[0].priority=100;immediateProfile.entries[0].status='recuperacao-imediata';
const immediateState={...F.empty(),priorities:F.validatePriorities(immediateProfile,cards)};
assert.equal(F.select(cards,immediateState,{...scope,mode:'errors'},Date.UTC(2026,10,4,12)).length,0);
assert.equal(F.select(cards,immediateState,{...scope,mode:'errors'},Date.UTC(2026,10,5,12)).length,1,'Recuperação imediata aguarda revisão posterior');
const wrong=structuredClone(profile);wrong.entries[0].examId='dataprev-2026';assert.throws(()=>F.validatePriorities(wrong,cards),/fora do concurso/);
const duplicateProfile=structuredClone(profile);duplicateProfile.entries.push(duplicateProfile.entries[0]);assert.throws(()=>F.validatePriorities(duplicateProfile,cards),/duplicada/);
const invalidPriority=structuredClone(profile);invalidPriority.entries[0].priority=NaN;assert.throws(()=>F.validatePriorities(invalidPriority,cards));
const gaps=Array.from({length:25},(_,i)=>({concept:i===24?'consultoria-previa-objetividade':'sem-cartao-'+i,status:'pendente',kind:'erro',errorType:'C',recurrences:i===24?3:1,dueOn:'2026-11-05'}));
const contextPath='data/contexto-estudo/cgu-2026/auditoria-governamental.json',page='data/contexto-estudo/cgu-2026/auditoria-governamental/revisoes-002.json';
const outputs=new Map([[contextPath,JSON.stringify({concursoId:'cgu-2026',subjectId:'auditoria-governamental',gaps:gaps.slice(0,20),reviewIndex:{pages:[page]}})],[page,JSON.stringify({gaps})]]);
const generated=buildFlashcardPriorities(outputs,data,'2026-11-04');
assert(generated.entries.some(e=>e.cardId===target.id),'Usa fila completa, incluindo além dos 20 visíveis, mesmo com mais de um cartão para o conceito');assert.equal(generated.unmapped.length,24);
assert(!JSON.stringify(generated).includes('userAnswer'),'Perfil não copia respostas');
const snapshot=JSON.stringify(outputs.get(contextPath));
gaps[24].status='retencao-observada';outputs.set(page,JSON.stringify({gaps}));assert.equal(buildFlashcardPriorities(outputs,data,'2026-11-06').entries.length,0,'Retenção em questões remove prioridade');
gaps[24].status='pendente';gaps[24].recurrences=4;outputs.set(page,JSON.stringify({gaps}));assert.equal(buildFlashcardPriorities(outputs,data,'2026-11-07').entries[0].recurrences,4,'Falha posterior reabre prioridade');
assert.equal(JSON.stringify(outputs.get(contextPath)),snapshot,'Projeção não altera contexto de origem');
console.log('SUCESSO: erros recorrentes, retenção, reincidência, filas completas, importação compatível e independência dos resultados.');

const prioritySnapshot=JSON.parse(fs.readFileSync(new URL('../data/contexto-estudo/flashcards-prioridades.json',import.meta.url)));
const pendingEditorial=(prioritySnapshot.unmapped||[]).filter(gap=>gap.examId==='cgu-2026');
for(const gap of pendingEditorial) {
    const matches=cards.filter(c=>c.examIds.includes(gap.examId)&&c.subjectIds.includes(gap.subjectId)&&c.conceptIds.includes(gap.conceptId));
    assert(matches.length, 'Falta cartão para erro documentado '+gap.conceptId);
}
assert(cards.some(c=>c.id==='conflito-interesses'&&c.subjectIds.includes('auditoria-governamental')),
    'Conflito de interesses deve reaproveitar o cartão existente na auditoria');
assert(cards.length>=112,'Coleção de recuperação deve manter o lote editorial');
console.log('SUCESSO: '+pendingEditorial.length+' lacunas do corte 04/11 vinculadas a cartões e reutilização por matéria.');



const priorLegacy=JSON.parse(fs.readFileSync(new URL('../data/erros-recorrentes.json',import.meta.url)));
const legacyProfile=buildFlashcardPriorities(outputs,data,'2026-11-04',priorLegacy);
const marco=legacyProfile.entries.find(x=>x.cardId==='dp-marco-prazos-registros');
assert.equal(marco.examId,'dataprev-2026');
assert.equal(marco.recurrences,4,'Erros históricos repetidos alimentam prioridade sem duplicar cartão');
assert(!legacyProfile.entries.some(x=>x.conceptIds.includes('legado-err-sim02-q15')),
    'Erros históricos superados não devem ser reabertos');
assert(legacyProfile.unmapped.some(x=>x.examId==='dataprev-2026'),'Lacunas do legado sem cartão continuam visíveis');
const legacyImported={...F.empty(),priorities:F.validatePriorities(legacyProfile,cards)};
const legacyQueue=F.select(cards,legacyImported,{exam:'dataprev-2026',subject:'informatica',mode:'errors',direction:'forward'},now,()=>.5);
assert.equal(legacyQueue[0].id,'dp-marco-prazos-registros','Importação ativa prioridades históricas no concurso original');
assert.equal(F.select(cards,legacyImported,{exam:'cgu-2026',subject:'informatica',mode:'errors',direction:'forward'},now).length,0,
    'Nenhum erro da Dataprev é transferido indevidamente à CGU');
console.log('SUCESSO: legado FGV, recorrência, isolamento entre concursos, superados e lacunas editoriais.');

// Cobertura inicial de todas as matérias que estavam sem cartões; continuidade do mesmo conceito entre recortes.
for(const subject of ['estado-democracia','sociedade-brasileira','administracao-publica','financas-publicas','contratacoes-transferencias','evidencias-dados-ia']) {
  assert(cards.filter(c=>c.examIds.includes('cgu-2026')&&c.subjectIds.includes(subject)).length>=4,'Matéria CGU ainda sem lote inicial: '+subject);
  assert(F.select(cards,F.empty(),{exam:'cgu-2026',subject,mode:'new',direction:'forward'},now,()=>.5).length>=4,'Filtro da matéria não encontra cartões: '+subject);
}
for(const [id,subject] of [['accountability','administracao-publica'],['equidade','sociedade-brasileira'],['contrafactual','evidencias-dados-ia']]) {
  assert(cards.find(c=>c.id===id)?.subjectIds.includes(subject),'Vínculo reutilizado perdido: '+id);
}
// Coleções crescem por lotes; validar o recorte introduzido sem congelar a contagem global.
const novosOrcamento = [
 'classificacao-programatica','categoria-economica-despesa','gnd-pessoal-encargos-sociais',
 'gnd-juros-encargos-divida','gnd-outras-despesas-correntes','gnd-investimentos',
 'gnd-inversoes-financeiras','modalidade-aplicacao-despesa','modalidade-aplicacoes-diretas',
 'modalidade-transferencias-municipios','elemento-material-consumo',
 'elemento-equipamento-permanente','ploa-projeto-lei','emenda-projeto-orcamentario'
];
for(const id of novosOrcamento) {
 const card=cards.find(c=>c.id===id);
 assert(card?.examIds.includes('cgu-2026')&&card?.subjectIds.includes('orcamento-publico'),
  'Flashcard de Orçamento CGU ausente ou sem vínculo: '+id);
}
assert(cards.length>=218,'O inventário não deve perder cartões anteriores ao lote de classificações');
assert(cards.filter(c=>c.examIds.includes('cgu-2026')&&c.subjectIds.includes('orcamento-publico')).length>=73,
 'O conjunto de Orçamento deve incluir o lote das classificações');
for(const [subject,min] of [['contabilidade-publica',14],['financas-publicas',10],['contratacoes-transferencias',13],['auditoria-governamental',47]]) {
 const pool=cards.filter(c=>c.examIds.includes('cgu-2026')&&c.subjectIds.includes(subject));
 assert(pool.length>=min,'Cobertura mínima da matéria após ampliação: '+subject);
 assert.equal(new Set(pool.map(c=>c.id)).size,pool.length,'ID duplicado na matéria '+subject);
 const sample=F.select(cards,F.empty(),{exam:'cgu-2026',subject,mode:'new',direction:'forward'},now,()=>.5);
 assert.equal(sample.length,10,'Matéria precisa oferecer uma janela de dez cartões: '+subject);
}
assert(cards.find(c=>c.id==='cont-vpa-sem-caixa')?.note.articleId==='art-4677cfa327ce43bb',
 'Cartão de competência deve apontar à nota detalhada, não apenas ao hub de Contabilidade');
assert(cards.find(c=>c.id==='contr-acrescimos-25-50')?.contrast.answer.includes('supressões'),
 'Contraste quantitativo tem de impedir extensão indevida do limite de 50%');
assert(cards.find(c=>c.id==='aud-beneficio-liquido')?.source.url.includes('Instru'),
 'Benefício financeiro precisa da IN SFC 10/2020 como fonte');
console.log('SUCESSO: expansão de 37 conceitos nas matérias específicas e limites de reutilização.');
console.log('SUCESSO: seis matérias da CGU iniciadas, 25 cartões novos e três vínculos compartilhados.');
