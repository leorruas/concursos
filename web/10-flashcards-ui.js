(async function () {
    'use strict';
    const F=window.Flashcards, $=id=>document.getElementById('fc-'+id);
    let cards=[], catalog, state=F.empty(), revealed=false, storageOK=true, corrupt=false;
    // Sincronização somente quando existir serviço autenticado de mesma origem.
    const P=window.FlashcardsPrioritySync;
    const priorityEndpoint=P.endpointFromMeta(document,location);
    let prioritySync=priorityEndpoint?'checking':'local',priorityRequest=null;
    const progressEndpoint=window.FlashcardsProgressSync.endpoint(priorityEndpoint);
    let progressSync=progressEndpoint?'checking':'local',progressRequest=null,progressDirty=false;
    const status=text=>{$('status').textContent=text;};
    const show=(id,visible)=>{$(id).hidden=!visible;};
    function save(next) {
        try { localStorage.setItem(F.KEY,JSON.stringify(next)); storageOK=true; }
        catch { storageOK=false; status('Não foi possível salvar neste navegador. A rodada continua em memória; exporte seu progresso antes de sair.'); }
        state=next;
    }
    function scope() {return {exam:$('exam').value,subject:$('subject').value,mode:$('mode').value,direction:$('direction').value};}
    function filtered() {const o=scope();return cards.filter(c=>c.examIds.includes(o.exam)&&(!o.subject||c.subjectIds.includes(o.subject)));}
    function options(select,items) {select.replaceChildren(...items.map(([value,label])=>{const o=document.createElement('option');o.value=value;o.textContent=label;return o;}));}
    function subjects() {
        const exam=$('exam').value;
        options($('subject'),[['','Todas as matérias'],...catalog.subjects.filter(s=>cards.some(c=>c.examIds.includes(exam)&&c.subjectIds.includes(s.id))).map(s=>[s.id,s.title])]);
        dashboard();
    }
    function dashboard() {
        const stats=F.stats(filtered(),state);
        const profile=state.priorities;
        const priorities=profile?.entries.filter(p=>p.examId===$('exam').value&&(!$('subject').value||p.subjectId===$('subject').value))||[];
        const count=new Set(priorities.map(p=>p.cardId)).size;
        const summary=profile ? `${count} cartões ligados aos erros deste recorte · dados de ${profile.cut}.${profile.unmappedCount ? ` ${profile.unmappedCount} lacuna(s) aguardam novos cartões no conjunto.` : ''}` : '';
        const detail=prioritySync==='connected'?' Atualizado pelo perfil privado autenticado.'
            : prioritySync==='unauthorized'?' Entre com GitHub para atualizar o perfil privado.'
            : prioritySync==='offline'?' Serviço privado indisponível. Usando os dados deste navegador.'
            : ' Cópia local. Sincronização remota ainda não configurada.';
        $('errors-status').textContent=(summary||'Histórico das questões privado.')+detail;
        show('priority-login',!!priorityEndpoint&&prioritySync==='unauthorized');
        $('stats').replaceChildren(...[['known','Conhecidos'],['learning','Em aprendizagem'],['unknown','Ainda não sei'],['due','Precisam de revisão'],['unseen','Ainda não estudados']].map(([key,label])=>{
            const box=document.createElement('div'), n=document.createElement('strong'), t=document.createElement('span');n.textContent=stats[key];t.textContent=label;box.append(n,t);return box;
        }));
        $('stats').setAttribute('aria-label',`${stats.unknown} conceitos com resposta Não sei; revisões pendentes podem incluir conceitos conhecidos ou em aprendizagem.`);
        show('resume',!!state.session);
    }
    // Sem backend: nenhuma requisição privada. Falhas mantêm o histórico local.
    async function syncPriorities() {
        if(!catalog||corrupt||!priorityEndpoint){if(catalog)dashboard();return !!state.priorities;}
        if(priorityRequest)return priorityRequest;
        priorityRequest=(async()=>{
            const result=await P.load(priorityEndpoint,state,cards,F,window.fetch.bind(window));
            prioritySync=result.status;
            if(result.updated)save(result.state);
            dashboard();return !!state.priorities;
        })();
        try{return await priorityRequest;}finally{priorityRequest=null;}
    }
    // Sincronização privada sem bloquear o estudo. Cada gravação local é preservada
    // se o servidor estiver indisponível; grades ocorridos durante a requisição
    // disparam uma nova conciliação, sem substituir a sessão aberta.
    async function syncProgress(){
        if(!progressEndpoint||corrupt||!catalog)return;
        if(progressRequest){progressDirty=true;return progressRequest;}
        progressRequest=(async()=>{
            do{
                progressDirty=false;
                const snapshot={...state.reviews};
                const result=await window.FlashcardsProgressSync.sync(progressEndpoint,snapshot,cards,window.fetch.bind(window));
                progressSync=result.status;
                if(result.status==='connected'){
                    const merged=window.FlashcardsProgressSync.merge(state.reviews,result.reviews);
                    if(JSON.stringify(merged)!==JSON.stringify(state.reviews))save({...state,reviews:merged});
                    dashboard();
                }
            }while(progressDirty);
        })();
        try{return await progressRequest;}finally{progressRequest=null;}
    }
    function home() {document.querySelector('.fc-main').classList.remove('is-studying');show('dashboard',true);show('round',false);show('summary',false);dashboard();}
    function render() {
        const s=state.session;
        document.querySelector('.fc-main').classList.add('is-studying');
        if(storageOK)status(progressEndpoint&&progressSync==='connected'?'Progresso local e sincronizado com sua conta':'Progresso salvo neste dispositivo');
        if(!s || s.position>=s.queue.length) {
            show('dashboard',false);show('round',false);show('summary',true);
            if(s) {
                const due=F.nextReview(cards,state,s);
                const when=due ? ' Próxima revisão agendada: '+new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(due))+'.' : '';
                $('summary-heading').textContent=s.mode==='new'?'Não há novos cartões disponíveis.':s.mode==='errors'?'Sem prioridades elegíveis neste recorte.':'Sua fila está em dia.';
                $('summary-text').textContent=s.graded+' apresentações avaliadas nesta sessão.'+when+' Você pode escolher outro recorte ou encerrar por agora.';
                show('summary-end',true);
            } else {
                const x=state.lastSession;
                $('summary-heading').textContent='Sessão encerrada.';
                $('summary-text').textContent=x ? x.graded+' apresentações avaliadas, '+x.distinct+' conceitos distintos. Sei: '+x.grades.good+'; Quase lembrei: '+x.grades.hard+'; Não sei: '+x.grades.again+'.'+(x.legacyGraded?' Avaliações anteriores migradas sem detalhamento: '+x.legacyGraded+'.':'')+' As revisões continuam agendadas.' : 'As revisões continuam agendadas.';
                show('summary-end',false);
            }
            $('summary').focus();return;
        }
        show('dashboard',false);show('summary',false);show('round',true);
        const q=s.queue[s.position], c=cards.find(c=>c.id===q.id);
        revealed=false;show('answer',false);show('reveal',true);show('instruction',true);
        $('position').textContent=`${s.graded} cartões nesta sessão · ${catalog.subjects.find(x=>x.id===s.subject)?.title || catalog.exams.find(e=>e.id===s.exam)?.title || s.exam}`;
        $('kind').textContent=`${c.topic} / ${q.direction==='reverse'?'DEFINIÇÃO → TERMO':q.direction==='contrast'?'CONTRASTE':'TERMO → DEFINIÇÃO'}`;
        const priority=F.studyPriority(c.id,state,{exam:s.exam,subject:s.subject});
        show('priority-hint',!!priority);
        $('priority-hint').textContent=priority ? (priority.priority===400?'Erro conceitual recorrente nas questões':priority.priority===300?'Erro nas questões':priority.priority===200?'Recuperação incerta nas questões':'Revisão posterior à recuperação imediata')+' · lembrar este cartão não encerra a lacuna das questões.' : '';
        $('prompt').textContent=q.direction==='reverse'?c.definition:q.direction==='contrast'?c.contrast.prompt:c.term;
        $('answer-title').textContent=c.term;
        $('definition').textContent=q.direction==='contrast'?c.contrast.answer:c.definition;
        $('extra').textContent=c.explanation||'';
        $('example').textContent=c.example;
        $('confusion').textContent=c.confusion?'Não confunda · '+c.confusion:'';
        $('note').href='index.html'+construirRotaArtigoId(c.note.articleId,c.note.section,s.exam);
        const glossaryId=c.glossaryId||c.glossaryIds?.[0];
        show('glossary',!!glossaryId);
        if(glossaryId)$('glossary').href='index.html'+construirRotaGlossario(glossaryId,s.exam);
        $('source').href=c.source.url;$('source').textContent=c.source.title+' · '+c.source.locator;
        $('prompt').focus();
    }
    function reveal() {if(!$('round').hidden&&!revealed){revealed=true;show('answer',true);show('reveal',false);show('instruction',false);document.querySelector('[data-grade="again"]').focus();}}
    function grade(value) {if(!revealed||$('round').hidden)return;save(F.refill(cards,F.rate(state,value)));if(storageOK)status(progressEndpoint?'Salvo neste dispositivo · sincronização em andamento':'Salvo neste dispositivo');render();void syncProgress();}
    try {
        const response=await fetch('data/flashcards.json',{cache:'no-cache'});
        if(!response.ok)throw Error('Coleção indisponível.');
        catalog=await response.json();cards=catalog.cards.filter(c=>c.status==='validated');
        // Publicação atômica: data/flashcards.json inclui cartões editoriais e derivados.
        // Um arquivo, uma versão. Preservar IDs e histórico do navegador.
        const availableIds=new Set(cards.map(c=>c.id));
        let raw, missingGlossary=false;
        try {
            raw=localStorage.getItem(F.KEY);
            if(raw) {
                const persisted=JSON.parse(raw);
                // Não regravar progresso caso uma versão antiga do catálogo não contenha
                // os cartões derivados já avaliados neste navegador.
                if(F.hasGlossaryReferences(persisted)&&
                    (!catalog.glossary || Object.keys(persisted.reviews||{}).some(key=>{
                        if(!key.startsWith('glossary-glo-'))return false;
                        const id=key.slice(0,key.lastIndexOf(':'));
                        return !availableIds.has(id);
                    }))) {
                    missingGlossary=true;
                    throw Error('Baralho do glossário incompleto.');
                }
                state=F.validateState(persisted,cards);
            }
        }catch{
            status(missingGlossary
                ? 'O catálogo ainda não contém todos os cartões do seu histórico. Seus dados foram preservados; atualize a página.'
                : 'Não foi possível ler o progresso salvo. Nenhum dado foi sobrescrito. Exporte uma cópia antes de iniciar uma nova rodada.');
            storageOK=false;corrupt=true;
        }
        if(priorityEndpoint)$('priority-login').href=P.loginUrl(priorityEndpoint);
        options($('exam'),catalog.exams.map(e=>[e.id,e.title+' · '+e.board]));
        const examFromURL=new URLSearchParams(location.search).get('concurso');
        if(catalog.exams.some(e=>e.id===examFromURL))$('exam').value=examFromURL;
        subjects();home();
        void syncPriorities(true);
        void syncProgress();
        if(storageOK)status(`${cards.length} conceitos · ${catalog.glossary?.generatedCount || 0} do glossário · ${progressEndpoint?'sincronização privada disponível após login':'progresso neste dispositivo'}`);
        $('export').disabled=false;
        $('form').addEventListener('submit',async e=>{
            e.preventDefault();
            if(corrupt){status('O progresso salvo não pôde ser lido. Exporte a cópia antes de iniciar uma nova sessão.');return;}
            if(state.session&&!confirm('Encerrar a sessão anterior e iniciar outra? As avaliações e agendamentos serão preservados.'))return;
            const o=scope();
            if(o.mode==='errors') {
                await syncPriorities(true);
                if(!state.priorities){status('O histórico privado ainda não está sincronizado neste navegador. Os outros modos continuam disponíveis.');return;}
            }else void syncPriorities();
            const base=state.session?F.finish(state):state;
            save(F.start(cards,base,o));render();
        });
        document.addEventListener('visibilitychange',()=>{
            if(document.visibilityState==='visible'){void syncPriorities();void syncProgress();}
        });
        $('exam').addEventListener('change',subjects);$('subject').addEventListener('change',dashboard);
        $('resume').addEventListener('click',render);
        $('pause').addEventListener('click',()=>{save(F.finish(state));render();});
        $('summary-end').addEventListener('click',()=>{save(F.finish(state));render();});
        $('reveal').addEventListener('click',reveal);
        document.querySelectorAll('[data-grade]').forEach(b=>b.addEventListener('click',()=>grade(b.dataset.grade)));
        $('another').addEventListener('click',()=>{home();$('mode').focus();});
        document.addEventListener('keydown',e=>{
            if(e.repeat||e.altKey||e.ctrlKey||e.metaKey||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||$('round').hidden)return;
            if(e.code==='Space'&&!revealed){e.preventDefault();reveal();}
            if(revealed&&['1','2','3'].includes(e.key)){e.preventDefault();grade({1:'again',2:'hard',3:'good'}[e.key]);}
        });
        $('export').addEventListener('click',()=>{
            // Preserve damaged/unknown stored data for recovery instead of silently discarding it.
            let content=JSON.stringify(state,null,2);
            if(corrupt&&raw)content=raw;
            const url=URL.createObjectURL(new Blob([content],{type:'application/json'})), a=document.createElement('a');
            a.href=url;a.download='flashcards-progresso-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
        });

    }catch(error){status('Não foi possível abrir os flashcards. Recarregue a página para tentar novamente. '+error.message);}
    try { document.documentElement.dataset.theme=localStorage.getItem('tema-concursos')||'dark'; } catch {}
    $('theme').addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('tema-concursos',t);}catch{}});
})();
