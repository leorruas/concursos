/* Pure scheduling and storage contract. No network or study-ledger writes. */
(function (root) {
    'use strict';
    const DAY = 86400000;
    const KEY = 'concursos-flashcards-v1';
    const directions = ['forward', 'reverse', 'contrast'];
    const empty = () => ({ version: 2, reviews: {}, session: null, priorities: null, lastSession: null });
    const reviewKey = (id, direction) => `${id}:${direction}`;
    function validReview(r) {
        return r && ['again', 'hard', 'good'].includes(r.grade) &&
            ['due', 'last'].every(k => Number.isFinite(r[k]) && r[k] >= 0) &&
            ['streak', 'attempts'].every(k => Number.isSafeInteger(r[k]) && r[k] >= 0) && r.streak <= 5;
    }
    function validateState(value, cards) {
        if (!value || ![1,2].includes(value.version) || !value.reviews || Array.isArray(value.reviews) || typeof value.reviews !== 'object') throw Error('Formato de progresso inválido.');
        const ids = new Set(cards.map(c => c.id));
        const out = empty();
        const validPair = q => q && ids.has(q.id) && directions.includes(q.direction);
        const validInteger = n => Number.isSafeInteger(n) && n >= 0;
        const validSessionScope = a => a && typeof a.exam === 'string' && typeof a.subject === 'string' &&
            ['mixed','new','difficult','due','errors'].includes(a.mode) && ['forward','reverse','alternate','contrast'].includes(a.direction);
        for (const [key, r] of Object.entries(value.reviews)) {
            const i = key.lastIndexOf(':');
            if (!ids.has(key.slice(0, i)) || !directions.includes(key.slice(i + 1))) continue;
            if (!validReview(r)) throw Error('Registro de revisão inválido.');
            out.reviews[key] = { grade:r.grade, due:r.due, last:r.last, streak:r.streak, attempts:r.attempts };
        }
        const s = value.session;
        if (s != null) {
            if (!validSessionScope(s) || !Array.isArray(s.queue) || s.queue.length > 10 ||
                !validInteger(s.position) || s.position > s.queue.length || s.queue.some(q => !validPair(q)))
                throw Error('Sessão salva inválida.');
            if (value.version === 1) {
                // A rodada antiga pode conter retornos de erros; preservar somente sua fila não avaliada.
                if (s.position < s.queue.length) {
                    const completed=s.queue.slice(0,s.position);
                    out.session = {
                        exam:s.exam, subject:s.subject, mode:s.mode, direction:s.direction,
                        queue:s.queue.slice(s.position).map(q=>({id:q.id,direction:q.direction})), position:0,
                        graded:s.position, grades:{again:0,hard:0,good:0}, legacyGraded:s.position,
                        seen:[...new Set(completed.map(q=>q.id))], recent:completed.slice(-3).map(q=>q.id),
                        retries:[], retried:[]
                    };
                }
            } else {
                if (!validInteger(s.graded) || !s.grades || !['again','hard','good'].every(k=>validInteger(s.grades[k])) ||
                    !validInteger(s.legacyGraded) || s.graded !== s.legacyGraded + s.grades.again + s.grades.hard + s.grades.good ||
                    !Array.isArray(s.seen) || s.seen.length > ids.size || s.seen.some(id=>!ids.has(id)) ||
                    new Set(s.seen).size !== s.seen.length || !Array.isArray(s.recent) || s.recent.length > 3 ||
                    s.recent.some(id=>!ids.has(id)) || !Array.isArray(s.retries) || s.retries.length > ids.size ||
                    s.retries.some(q=>!validPair(q)||!validInteger(q.after)) || !Array.isArray(s.retried) ||
                    s.retried.length > ids.size*3 || new Set(s.retried).size !== s.retried.length ||
                    s.retried.some(key=>{const i=key.lastIndexOf(':');return !ids.has(key.slice(0,i))||!directions.includes(key.slice(i+1));}))
                    throw Error('Sessão contínua inválida.');
                out.session = {
                    exam:s.exam, subject:s.subject, mode:s.mode, direction:s.direction,
                    queue:s.queue.map(q=>({id:q.id,direction:q.direction})), position:s.position,
                    graded:s.graded, grades:{...s.grades}, legacyGraded:s.legacyGraded,
                    seen:[...s.seen], recent:[...s.recent],
                    retries:s.retries.map(q=>({id:q.id,direction:q.direction,after:q.after})), retried:[...s.retried]
                };
            }
        }
        if (value.priorities) out.priorities=validatePriorities(value.priorities,cards);
        if (value.version===2 && value.lastSession!=null) {
            const x=value.lastSession;
            if (!x || !validInteger(x.graded) || !validInteger(x.distinct) || x.distinct>ids.size ||
                !validInteger(x.legacyGraded) || !validInteger(x.closedAt) || !x.grades ||
                !['again','hard','good'].every(k=>validInteger(x.grades[k])) ||
                x.graded !== x.legacyGraded+x.grades.again+x.grades.hard+x.grades.good)
                throw Error('Resumo de sessão inválido.');
            out.lastSession={graded:x.graded,distinct:x.distinct,legacyGraded:x.legacyGraded,closedAt:x.closedAt,grades:{...x.grades}};
        }
        return out;
    }
    function schedule(previous, grade, now = Date.now()) {
        if (!['again','hard','good'].includes(grade)) throw Error('Classificação inválida.');
        const old = previous || { attempts:0, streak:0, last:0 };
        // A same-day rehearsal cannot manufacture spaced recall.
        const spaced = !old.attempts || now - old.last >= 20 * 3600000;
        const streak = grade === 'good' ? Math.min(5, old.streak + (spaced ? 1 : 0)) : 0;
        const interval = grade === 'again' ? 10 * 60000 : grade === 'hard' ? DAY : [DAY, 3*DAY, 7*DAY, 14*DAY, 30*DAY][Math.max(0,streak-1)];
        return { grade, streak, attempts: old.attempts + 1, last:now, due:now + interval };
    }
    function validatePriorities(value,cards) {
        if(!value || value.version!==1 || value.type!=='study-errors' || !/^\d{4}-\d{2}-\d{2}$/.test(value.cut) || !Array.isArray(value.entries) || value.entries.length>10000)throw Error('Arquivo de prioridades inválido.');
        const seen=new Set(),entries=[];
        for(const p of value.entries){
            if(!p || ![100,200,300,400].includes(p.priority) || !['pendente','recuperacao-imediata'].includes(p.status) || !Number.isSafeInteger(p.recurrences)||p.recurrences<1||!/^\d{4}-\d{2}-\d{2}$/.test(p.dueOn))throw Error('Prioridade inválida.');
            const card=cards.find(c=>c.id===p.cardId);if(!card)continue;
            if(!card.examIds.includes(p.examId)||!card.subjectIds.includes(p.subjectId))throw Error('Prioridade fora do concurso/matéria do cartão.');
            const key=[p.examId,p.subjectId,p.cardId].join('/');if(seen.has(key))throw Error('Prioridade duplicada.');seen.add(key);
            entries.push({examId:p.examId,subjectId:p.subjectId,cardId:p.cardId,priority:p.priority,status:p.status,recurrences:p.recurrences,dueOn:p.dueOn});
        }
        const unmappedCount=Number.isSafeInteger(value.unmappedCount)?value.unmappedCount:Array.isArray(value.unmapped)?value.unmapped.length:0;
        if(unmappedCount<0||unmappedCount>100000)throw Error('Contagem de lacunas inválida.');
        return {version:1,type:'study-errors',cut:value.cut,entries,unmappedCount};
    }
    function studyPriority(cardId,state,options,now=Date.now()) {
        const date=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
        return (state.priorities?.entries||[]).filter(p=>p.cardId===cardId&&p.examId===options.exam&&(!options.subject||p.subjectId===options.subject)&&(p.status!=='recuperacao-imediata'||p.dueOn<=date)).sort((a,b)=>b.priority-a.priority||b.recurrences-a.recurrences)[0]||null;
    }
    function select(cards, state, options, now=Date.now(), random=Math.random) {
        let candidates=[];
        for (const card of cards) {
            if (!card.examIds.includes(options.exam) || (options.subject && !card.subjectIds.includes(options.subject))) continue;
            const priority=studyPriority(card.id,state,options,now);
            let ds = options.direction === 'alternate' ? ['forward','reverse'] : [options.direction];
            if (options.direction === 'contrast' && !card.contrast) continue;
            const variants=ds.map(direction => ({id:card.id,direction,r:state.reviews[reviewKey(card.id,direction)]}));
            const eligible=variants.filter(q => options.mode === 'new' ? !q.r : options.mode === 'due' ? q.r && q.r.due <= now : options.mode === 'errors' ? !!priority : options.mode === 'difficult' ? (q.r && q.r.grade !== 'good') || !!priority : !q.r || q.r.due <= now || (priority?.priority>=200));
            if (!eligible.length) continue;
            eligible.sort((a,b) => (a.r ? 0 : 1)-(b.r ? 0 : 1) || (a.r?.due||0)-(b.r?.due||0) || random()-.5);
            const chosen=eligible[0];
            candidates.push({...chosen, priority:priority?.priority||0, recurrences:priority?.recurrences||0, tie:random()});
        }
        candidates.sort((a,b) => b.priority-a.priority || b.recurrences-a.recurrences || (a.r ? 0 : 1)-(b.r ? 0 : 1) || (a.r?.due||0)-(b.r?.due||0) || a.tie-b.tie);
        return candidates.slice(0,10).map(({id,direction})=>({id,direction}));
    }
    function stats(cards,state,now=Date.now()) {
        const result={unseen:0,learning:0,known:0,due:0,unknown:0};
        for (const c of cards) {
            const rs=['forward','reverse'].map(d=>state.reviews[reviewKey(c.id,d)]);
            if (!rs.some(Boolean)) result.unseen++;
            else if (rs.every(r=>r && r.streak>=3)) result.known++;
            else result.learning++;
            if (directions.some(d=>state.reviews[reviewKey(c.id,d)]?.due <= now)) result.due++;
            if (rs.some(r=>r?.grade === 'again')) result.unknown++;
        }
        return result;
    }
    function start(cards,state,options,now=Date.now(),random=Math.random) {
        if (state.session) throw Error('Encerre a sessão anterior antes de começar outra.');
        const s={exam:options.exam,subject:options.subject,mode:options.mode,direction:options.direction,
            queue:[],position:0,graded:0,grades:{again:0,hard:0,good:0},legacyGraded:0,
            seen:[],recent:[],retries:[],retried:[]};
        return refill(cards,{...state,session:s},now,random);
    }
    function refill(cards,state,now=Date.now(),random=Math.random) {
        const out=JSON.parse(JSON.stringify(state)),s=out.session;
        if (!s || s.position<s.queue.length) return out;
        s.queue=select(cards.filter(c=>!s.seen.includes(c.id)),out,s,now,random);
        s.position=0;
        return out;
    }
    function rate(state,grade,now=Date.now()) {
        const out=JSON.parse(JSON.stringify(state)),s=out.session;
        if (!s || s.position>=s.queue.length) throw Error('Sem cartão ativo.');
        const q=s.queue[s.position],key=reviewKey(q.id,q.direction);
        out.reviews[key]=schedule(out.reviews[key],grade,now);
        s.position++;
        s.graded++;
        s.grades[grade]++;
        if (!s.seen.includes(q.id)) s.seen.push(q.id);
        s.recent.push(q.id);
        s.recent=s.recent.slice(-3);
        // Retorno único por direção na sessão: três OUTROS conceitos distintos antes do erro.
        if (grade==='again' && !s.retried.includes(key) &&
            !s.retries.some(x=>reviewKey(x.id,x.direction)===key) &&
            !s.queue.slice(s.position).some(x=>reviewKey(x.id,x.direction)===key)) {
            s.retries.push({id:q.id,direction:q.direction,after:s.graded+3});
            s.retried.push(key);
        }
        const ready=s.retries.findIndex(x=>s.graded>=x.after && s.recent.length===3 &&
            new Set(s.recent).size===3 && s.recent.every(id=>id!==x.id) &&
            !s.queue.slice(s.position).some(y=>y.id===x.id));
        if (ready>=0) {
            const [retry]=s.retries.splice(ready,1);
            if (s.queue.length>=10) s.queue.pop(); // O cartão deslocado continua elegível na próxima janela.
            s.queue.splice(s.position,0,{id:retry.id,direction:retry.direction});
        }
        return out;
    }
    function finish(state,now=Date.now()) {
        if (!state.session) return state;
        const out=JSON.parse(JSON.stringify(state)),s=out.session;
        out.lastSession={graded:s.graded,grades:{...s.grades},legacyGraded:s.legacyGraded,
            distinct:s.seen.length,closedAt:now};
        out.session=null;
        return out;
    }
    function nextReview(cards,state,options,now=Date.now()) {
        const ds=options.direction==='alternate'?['forward','reverse']:[options.direction];
        let next=null;
        for(const c of cards) {
            if(!c.examIds.includes(options.exam) || (options.subject&&!c.subjectIds.includes(options.subject)))continue;
            for(const d of ds) {
                if(d==='contrast'&&!c.contrast)continue;
                const due=state.reviews[reviewKey(c.id,d)]?.due;
                if(due>now && (next===null || due<next))next=due;
            }
        }
        return next;
    }
    root.Flashcards={DAY,KEY,empty,reviewKey,validateState,schedule,select,stats,start,refill,rate,finish,nextReview,validatePriorities,studyPriority};
})(typeof window !== 'undefined' ? window : globalThis);
