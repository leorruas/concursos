// Projeção privada: reutiliza o diagnóstico de recuperação dos contextos, sem publicar respostas.
export function buildFlashcardPriorities(outputs, collection, cut, historicalErrors=[]) {
    const entries=new Map(),unmapped=new Map();
    for(const [file,content] of outputs) {
        if(!/^data\/contexto-estudo\/[^/]+\/[^/]+\.json$/.test(file))continue;
        const context=JSON.parse(content);
        if(!context.subjectId)continue;
        const gaps=context.reviewIndex?.pages?.flatMap(p=>JSON.parse(outputs.get(p)).gaps)||context.gaps||[];
        for(const gap of gaps) {
            if(!['pendente','recuperacao-imediata'].includes(gap.status))continue;
            const conceptual=['K','C','conhecimento','confusao_conceitual'].includes(gap.errorType);
            const priority=gap.status==='recuperacao-imediata'?100:gap.kind==='erro'?conceptual&&gap.recurrences>1?400:300:200;
            const matching=collection.cards.filter(card=>card.examIds.includes(context.concursoId)&&card.subjectIds.includes(context.subjectId)&&(card.conceptIds||[]).includes(gap.concept));
            if(!matching.length){const key=[context.concursoId,context.subjectId,gap.concept].join('/');const previous=unmapped.get(key);if(!previous||priority>previous.priority)unmapped.set(key,{examId:context.concursoId,subjectId:context.subjectId,conceptId:gap.concept,status:gap.status,priority,recurrences:gap.recurrences,dueOn:gap.dueOn});continue;}
            for(const card of matching) {
                const key=[context.concursoId,context.subjectId,card.id].join('/');
                const previous=entries.get(key);
                const candidate={examId:context.concursoId,subjectId:context.subjectId,cardId:card.id,priority,status:gap.status,recurrences:gap.recurrences,dueOn:gap.dueOn,conceptIds:[gap.concept]};
                if(!previous)entries.set(key,candidate);
                else {
                    const concepts=[...new Set([...previous.conceptIds,gap.concept])];
                    const best=priority>previous.priority?candidate:previous;
                    entries.set(key,{...best,conceptIds:concepts,recurrences:Math.max(previous.recurrences,gap.recurrences),dueOn:[previous.dueOn,gap.dueOn].sort()[0]});
                }
            }
        }
    }
    // Erros anteriores ao protocolo de sessões: preservar o diagnóstico por concurso,
    // sem inventar datas de recuperação ou reabrir erros marcados como superados.
    const legacySubjects=[
        ['3 - Materias/Portugues/','portugues'],
        ['3 - Materias/Ingles/','ingles'],
        ['3 - Materias/Logica/','logica'],
        ['3 - Materias/Informatica/','informatica'],
        ['3 - Materias/Comunicacao/','comunicacao'],
        ['3 - Materias/Atualidades/','atualidades']
    ];
    const legacyActive=historicalErrors.filter(x=>x && x.status==='pendente');
    for(const legacy of legacyActive) {
        const subjectId=legacySubjects.find(([prefix])=>(legacy.notaPath||'').startsWith(prefix))?.[1];
        if(!subjectId || !legacy.concursoId)continue;
        const matching=collection.cards.filter(c=>c.examIds.includes(legacy.concursoId) &&
            c.subjectIds.includes(subjectId) && (c.legacyErrorIds||[]).includes(legacy.id));
        if(!matching.length) {
            const key=[legacy.concursoId,subjectId,'legado-'+legacy.id].join('/');
            unmapped.set(key,{examId:legacy.concursoId,subjectId,conceptId:'legado-'+legacy.id,
                status:'pendente',priority:200,recurrences:1,dueOn:cut});
            continue;
        }
        for(const card of matching) {
            const related=legacyActive.filter(x=>card.legacyErrorIds?.includes(x.id)).length;
            const priority=related>=3?400:related>=2?300:200;
            const key=[legacy.concursoId,subjectId,card.id].join('/');
            const previous=entries.get(key);
            const candidate={examId:legacy.concursoId,subjectId,cardId:card.id,priority,
                status:'pendente',recurrences:related,dueOn:cut,conceptIds:['legado-'+legacy.id]};
            if(!previous)entries.set(key,candidate);
            else entries.set(key,{...previous,priority:Math.max(previous.priority,priority),
                recurrences:Math.max(previous.recurrences,related),
                conceptIds:[...new Set([...previous.conceptIds,'legado-'+legacy.id])]});
        }
    }
    return {version:1,type:'study-errors',cut,entries:[...entries.values()].sort((a,b)=>b.priority-a.priority||a.cardId.localeCompare(b.cardId)),unmapped:[...unmapped.values()].sort((a,b)=>b.priority-a.priority||a.conceptId.localeCompare(b.conceptId)),policy:'Erros de questões orientam prioridade. Legado Dataprev pendente é fotografia histórica, não falha atual de retenção. Autoavaliação de cartão não altera o estudo. Importar nova versão substitui apenas as prioridades.'};
}
