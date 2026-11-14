/* Baterias de concurso; a fonte pública contém apenas enunciados revisados. */
(function(){
'use strict';
const $=id=>document.getElementById(id),WORKER='https://concurso-estudo.leoruas.workers.dev';
const STORE='concursos-quiz-sessoes-v1',ACTIVE='concursos-quiz-ativa-v1';
const privateOrigin=location.origin===WORKER;
let data=null,session=null,loggedIn=false,manifest=new Map();
const elem=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=String(text);return e;};
const toggle=(id,show)=>{$(id).hidden=!show;};
const status=t=>{$('qs-status').textContent=t;};
const selected=name=>document.querySelector('input[name="'+name+'"]:checked')?.value||'';
function storeRead(){try{const x=JSON.parse(localStorage.getItem(STORE)||'[]');return Array.isArray(x)?x:[];}catch{return [];}}
function storeWrite(){if(!session)return;const a=storeRead().filter(x=>x.id!==session.id);a.push(session);localStorage.setItem(STORE,JSON.stringify(a.slice(-50)));localStorage.setItem(ACTIVE,session.id);}
function id(){return crypto.randomUUID();}
function shuffle(a){let x=a.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function contest(){return data?.contests.find(c=>c.id===$('qs-concurso').value);}
function available(){return data?.questions.filter(q=>q.concursoId===contest()?.id&&q.format==='CE')||[];}
function eligible(){const all=available();return selected('qs-scope')==='single'?all.filter(q=>q.subjectId===$('qs-materia').value):all;}
function updateSubjects(){
 const select=$('qs-materia'),count=new Map();available().forEach(q=>{const val=count.get(q.subjectId)||{label:q.subjectName||q.subjectId,n:0};val.n++;count.set(q.subjectId,val);});
 select.replaceChildren(...[...count.entries()].sort((a,b)=>a[1].label.localeCompare(b[1].label,'pt-BR')).map(([key,v])=>{const o=elem('option',v.label+' ('+v.n+')');o.value=key;return o;}));
 availability();
}
function availability(){
 toggle('qs-materia-wrap',selected('qs-scope')==='single');
 const n=eligible().length, c=contest();$('qs-availability').textContent=n?n+' questões revisadas disponíveis em '+c.nome+'.':'Ainda não há questões revisadas disponíveis para esta seleção.';$('qs-start').disabled=n<1;
}
function choose(n){
 const old=new Set(storeRead().filter(s=>s.concursoId===contest().id).flatMap(s=>s.answers.map(a=>a.questionId))),groups=new Map();
 shuffle(eligible()).forEach(q=>{if(!groups.has(q.subjectId))groups.set(q.subjectId,[]);groups.get(q.subjectId).push(q);});
 for(const g of groups.values())g.sort((a,b)=>Number(old.has(a.id))-Number(old.has(b.id)));
 const result=[];
 if(selected('qs-scope')==='single')return [...groups.values()][0].slice(0,n).map(q=>q.id);
 const order=shuffle([...groups.keys()]);while(result.length<n){let found=false;for(const key of order){const q=groups.get(key).shift();if(q){result.push(q.id);found=true;}if(result.length===n)break;}if(!found)break;}
 return result;
}
function start(){
 const n=Number($('qs-count').value);if(!Number.isInteger(n)||n<1||n>100){status('Escolha entre 1 e 100 questões.');return;}
 const c=contest();session={version:1,id:id(),concursoId:c.id,concursoName:c.nome,mode:selected('qs-mode'),scope:selected('qs-scope'),subjectId:selected('qs-scope')==='single'?$('qs-materia').value:null,startedAt:new Date().toISOString(),finishedAt:null,ids:choose(Math.min(n,eligible().length)),answers:[]};
 storeWrite();toggle('qs-config',false);toggle('qs-play',true);toggle('qs-summary',false);render();status('Bateria iniciada. Respostas registradas após cada envio.');
}
function question(){return data.map.get(session.ids[session.answers.length]);}
function theory(q){
 if(!q.articleId||!manifest.has(q.articleId))return null;const m=manifest.get(q.articleId),a=elem('a','Revisar artigo: '+(m.tituloExibicao||m.titulo||'ver conteúdo'));a.href='index.html#/artigo/'+encodeURIComponent(m.articleSlug||q.articleId)+'?concurso='+encodeURIComponent(session.concursoId);a.target='_blank';a.rel='noopener noreferrer';return a;
}
function render(){
 if(!session)return;if(session.answers.length>=session.ids.length){finish();return;}
 const q=question();if(!q){status('Questão indisponível. Encerre esta bateria.');return;}
 $('qs-number').textContent='Questão '+(session.answers.length+1)+' / '+session.ids.length;
 $('qs-context').textContent=(q.examPart||'')+' · '+(q.subjectName||q.subjectId);
 $('qs-progress-bar').style.width=(100*session.answers.length/session.ids.length)+'%';$('qs-statement').textContent=q.statement;
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>{e.checked=false;e.disabled=false;});
 $('qs-insecure').checked=false;$('qs-insecure').disabled=false;
 toggle('qs-blank-wrap',session.mode==='simulado');toggle('qs-feedback',false);toggle('qs-next',false);toggle('qs-submit',true);
}
function feedback(q,a){
 const el=$('qs-feedback');el.replaceChildren(elem('strong',(a.result==='correct'?'Acerto':a.result==='blank'?'Em branco':'Erro')+' · Gabarito: '+(q.correctAnswer==='C'?'Certo':'Errado')),elem('p',q.explanation));
 const link=theory(q);if(link)el.append(link);toggle('qs-feedback',true);
}
async function sync(a){
 if(!privateOrigin||!loggedIn)return;
 try{
  const r=await fetch('/v1/study/quiz',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Quiz-Sync':'1'},body:JSON.stringify({version:1,attempts:[a]})});
  if(r.status===401){loggedIn=false;throw Error('Sessão GitHub expirada.');}
  if(!r.ok)throw Error('HTTP '+r.status);
  a.synced=true;storeWrite();$('qs-sync').textContent='Respostas sincronizadas no banco privado do ambiente autenticado.';
 }catch(e){$('qs-sync').textContent='Resposta salva localmente. Sincronização pendente: '+e.message;}
}
function answer(ev){
 ev.preventDefault();if(!session||session.finishedAt)return;
 const c=document.querySelector('input[name="qs-answer"]:checked');if(!c){status('Marque Certo ou Errado para registrar.');return;}
 const q=question();if(!q)return;const v=c.value,blank=v==='blank';
 const a={id:id(),sessionId:session.id,concursoId:session.concursoId,questionId:q.id,subjectId:q.subjectId,conceptId:q.conceptId||null,mechanism:q.mechanism||null,mode:session.mode,answer:blank?null:v,correctAnswer:q.correctAnswer,result:blank?'blank':v===q.correctAnswer?'correct':'incorrect',confidence:blank?'unknown':$('qs-insecure').checked?'insecure':'secure',answeredAt:Date.now(),synced:false};
 session.answers.push(a);storeWrite();sync(a);
 document.querySelectorAll('input[name="qs-answer"]').forEach(e=>e.disabled=true);$('qs-insecure').disabled=true;toggle('qs-submit',false);
 if(session.mode==='aprendizagem')feedback(q,a);
 $('qs-next').textContent=session.answers.length===session.ids.length?'Ver resultado':'Próxima questão';toggle('qs-next',true);status('Resposta salva neste navegador.');
}
function finish(){
 if(!session)return;if(!session.finishedAt){session.finishedAt=new Date().toISOString();storeWrite();}
 localStorage.removeItem(ACTIVE);toggle('qs-play',false);toggle('qs-config',false);toggle('qs-summary',true);
 $('qs-result-context').textContent=session.concursoName+' / '+session.mode;
 const c=session.answers.filter(a=>a.result==='correct').length,w=session.answers.filter(a=>a.result==='incorrect').length,b=session.answers.filter(a=>a.result==='blank').length;
 $('qs-stats').replaceChildren(...[['Respondidas',session.answers.length],['Acertos',c],['Erros',w],['Em branco',b]].map(([k,v])=>{const el=elem('div');el.append(elem('strong',v),elem('span',k));return el;}));
 $('qs-score').textContent='Acerto: '+(session.answers.length?(100*c/session.answers.length).toFixed(1)+'%':'sem respostas')+'. '+(session.concursoId==='camara-2026'?'Saldo C/E: '+(c-w)+'. ':'')+'Treino didático, sem equivalência automática com nota de prova.';
 const review=$('qs-reviews');review.replaceChildren();
 session.answers.forEach((a,i)=>{const q=data.map.get(a.questionId);if(!q)return;const d=elem('details');d.className='qs-review';d.append(elem('summary',(i+1)+'. '+(q.subjectName||q.subjectId)+' · '+(a.result==='correct'?'acerto':a.result==='blank'?'em branco':'erro')),elem('p',q.statement),elem('p','Sua resposta: '+(a.answer==='C'?'Certo':a.answer==='E'?'Errado':'Em branco')+' · Gabarito: '+(q.correctAnswer==='C'?'Certo':'Errado')),elem('p',q.explanation));const link=theory(q);if(link)d.append(link);review.append(d);});
 status('Bateria encerrada. Você pode consultar as justificativas abaixo.');
}
function resume(){
 const key=localStorage.getItem(ACTIVE),s=storeRead().find(x=>x.id===key&&!x.finishedAt);
 if(!s||!s.ids.every(x=>data.map.has(x)))return;
 session=s;$('qs-concurso').value=s.concursoId;updateSubjects();toggle('qs-config',false);toggle('qs-play',true);render();status('Bateria anterior retomada.');
}
function exportJson(){
 if(!session)return;const obj={...session,answers:session.answers.map(({synced,...a})=>a)},u=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'})),a=elem('a');a.href=u;a.download='bateria-'+session.concursoId+'-'+session.id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1500);
}
async function auth(){
 toggle('qs-login',!privateOrigin);
 if(!privateOrigin){$('qs-sync').textContent='GitHub Pages: gravação somente neste navegador. Use o ambiente autenticado para sincronizar.';return;}
 try{const r=await fetch('/v1/session',{credentials:'same-origin',cache:'no-store'});loggedIn=r.ok;}catch{loggedIn=false;}
 if(!loggedIn){toggle('qs-login',true);$('qs-login').href='/v1/login/github?return=%2Fquestoes.html';$('qs-login').textContent='Entrar com GitHub para sincronizar';$('qs-sync').textContent='Sem login, respostas ficam apenas neste navegador.';return;}
 $('qs-sync').textContent='GitHub conectado. As respostas serão gravadas no banco privado.';
 for(const s of storeRead())for(const a of s.answers.filter(x=>!x.synced))await sync(a);
}
function theme(){const t=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=t;localStorage.setItem('tema-concursos',t);$('qs-theme').textContent=t==='light'?'modo escuro':'modo claro';}
async function init(){
 $('qs-theme').textContent=document.documentElement.dataset.theme==='light'?'modo escuro':'modo claro';$('qs-theme').addEventListener('click',theme);
 $('qs-concurso').addEventListener('change',updateSubjects);$('qs-materia').addEventListener('change',availability);
 document.querySelectorAll('input[name="qs-scope"]').forEach(e=>e.addEventListener('change',availability));
 $('qs-start').addEventListener('click',start);$('qs-answer-form').addEventListener('submit',answer);
 $('qs-next').addEventListener('click',render);$('qs-finish').addEventListener('click',finish);
 $('qs-restart').addEventListener('click',()=>{session=null;toggle('qs-summary',false);toggle('qs-config',true);status('Escolha a próxima bateria.');});
 $('qs-export').addEventListener('click',exportJson);
 try{
  const r=await fetch('data/questoes-publicas.json',{cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);data=await r.json();
  if(data.version!==1||!Array.isArray(data.questions)||!Array.isArray(data.contests))throw Error('Formato do banco inválido.');
  data.map=new Map(data.questions.map(q=>[q.id,q]));
  try{const m=await fetch('manifest.json').then(r=>r.ok?r.json():[]);manifest=new Map(m.filter(x=>x.articleId).map(x=>[x.articleId,x]));}catch{}
  $('qs-concurso').replaceChildren(...data.contests.map(c=>{const n=data.questions.filter(q=>q.concursoId===c.id).length;const e=elem('option',c.nome+' ('+n+')');e.value=c.id;return e;}));
  const saved=localStorage.getItem('concurso_ativo_id');$('qs-concurso').value=data.contests.some(c=>c.id===saved)?saved:'camara-2026';
  updateSubjects();toggle('qs-config',true);status('Banco carregado. Monte uma bateria.');
  resume();auth();
 }catch(e){status('Não foi possível abrir o banco: '+e.message);}
}
init();
})();