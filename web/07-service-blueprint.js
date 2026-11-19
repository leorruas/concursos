
(function(){
"use strict";
const fases=["Origem","Recebimento","Instrução","Deliberação","Revisão e retorno","Conclusão"];
const tipos=["evidence","user","interaction","frontstage","visibility","backstage","internal","support","clock"];
const labels=["Evidências e documentos","Ações do proponente","Linha de interação","Ações públicas e contatos","Linha de visibilidade","Bastidores de preparação","Linha de interação interna","Processos de suporte","Prazos e quóruns"];
const st=`
.leitor-artigo.blueprint-view .artigo-toc-sidebar{display:none!important}
.leitor-artigo.blueprint-view .artigo-layout-container{display:block}
.leitor-artigo.blueprint-view .artigo-corpo{max-width:none}
.sb{border:1px solid color-mix(in srgb,var(--text) 20%,transparent);border-radius:12px;overflow:hidden;margin:18px 0 30px}
.sb-nav{display:flex;overflow-x:auto;gap:7px;padding:12px;background:var(--accent-blue-alpha-05)}
.sb button{flex-shrink:0;font:inherit;font-size:12px;border-radius:7px;border:1px solid color-mix(in srgb,var(--text) 25%,transparent);padding:8px 10px;background:var(--bg);color:var(--text);cursor:pointer}
.sb button[aria-current=step]{border-color:var(--accent-blue);font-weight:750;background:var(--accent-blue-alpha-05)}
.sb button:focus-visible{outline:3px solid var(--accent-blue);outline-offset:2px}
.sb button:disabled{opacity:.35;cursor:default}
.sb-control{display:flex;gap:8px;padding:8px 12px;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
.sb-canvas{overflow-x:auto}
.sb-steps{display:flex;align-items:stretch;min-width:0}
.sb-phase{flex:1 0 100%;min-width:0}
.sb-phase[hidden]{display:none}
.sb-complete .sb-phase{flex:0 0 335px;width:335px;border-right:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
.sb-phase h3{margin:0!important;background:var(--accent-blue-alpha-05);padding:13px!important;border-bottom:2px solid var(--accent-blue);font-size:15px!important}
.sb-layer{display:grid;grid-template-columns:minmax(130px,22%) minmax(0,1fr);gap:12px;padding:9px 14px;border-bottom:1px solid color-mix(in srgb,var(--text) 10%,transparent);min-height:58px}
.sb-layer-label{font-size:11px;font-weight:650;align-self:center;opacity:.7}
.sb-action{border-radius:7px;border:1px solid color-mix(in srgb,var(--text) 15%,transparent);padding:9px 11px;background:color-mix(in srgb,var(--text) 6%,var(--bg));font-size:13px;line-height:1.4;align-self:center}
.sb-user .sb-action,.sb-frontstage .sb-action{border-left:4px solid var(--accent-blue);background:var(--accent-blue-alpha-05)}
.sb-evidence .sb-action{border-style:dashed}
.sb-clock .sb-action{font-weight:600;background:transparent}
.sb-action.empty{opacity:.18;min-height:22px}
.sb-rule{position:relative;height:22px;border-bottom:2px dashed color-mix(in srgb,var(--text) 35%,transparent);font-size:10px;text-transform:uppercase;opacity:.8}
.sb-rule span{position:absolute;top:6px;left:15px;padding:0 8px;background:var(--bg)}
.sb-visibility{border-bottom-color:var(--accent-blue)}
.sb-internal{border-bottom-style:dotted}
.sb-foot{padding:9px 12px;font-size:12px;opacity:.8}
.sb-complete .sb-layer{display:block;min-height:85px;padding:8px 10px}
.sb-complete .sb-layer-label{display:block;margin-bottom:6px}
.sb-complete .sb-action{font-size:11px;min-height:38px}
.sb-complete .sb-phase h3{min-height:55px}
.sb-source{padding:10px 12px;border-top:1px solid color-mix(in srgb,var(--text) 15%,transparent)}
.sb-source summary{cursor:pointer;font-size:12px}
@media(max-width:700px){.sb-layer{grid-template-columns:100px minmax(0,1fr);gap:8px;padding:8px}.sb-action{font-size:12px}}
`;
function element(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function montar(table){
 const data=[...table.querySelectorAll("tr")].map(r=>[...r.children].map(c=>c.textContent.trim()));
 if(data.length!==10||data[0].length!==7||!/camadas.*fases/i.test(data[0][0])||data.some(r=>r.length!==7))return false;
 const card=element("section","sb"),nav=element("nav","sb-nav"),bar=element("div","sb-control"),view=element("div","sb-canvas"),steps=element("div","sb-steps");
 nav.setAttribute("aria-label","Navegação por fase");
 let current=0,all=false;
 const phases=fases.map((name,i)=>{
  const panel=element("section","sb-phase");panel.setAttribute("aria-label",name);panel.append(element("h3","",String(i+1).padStart(2,"0")+" · "+name));
  tipos.forEach((kind,k)=>{
   if(["interaction","visibility","internal"].includes(kind)){
    const line=element("div","sb-rule sb-"+kind);line.append(element("span","",labels[k]));panel.append(line);return;
   }
   const row=element("div","sb-layer sb-"+kind);row.append(element("span","sb-layer-label",labels[k]));
   const val=data[k+1][i+1],empty=/^(não se aplica|·{3}|-{1,2})$/i.test(val);
   row.append(element("span","sb-action"+(empty?" empty":""),empty?" ":val));panel.append(row);
  });steps.append(panel);return panel;
 });
 const buttons=fases.map((name,i)=>{const b=element("button","",String(i+1).padStart(2,"0")+" "+name);b.type="button";nav.append(b);b.addEventListener("click",()=>{current=i;all=false;draw()});return b});
 const prev=element("button","","← anterior"),next=element("button","","próxima →"),toggle=element("button","","ver todas as fases");
 [prev,next,toggle].forEach(b=>b.type="button");bar.append(prev,next,toggle);
 const status=element("p","sb-foot");status.setAttribute("aria-live","polite");
 view.append(steps);card.append(nav,bar,view,status);
 function draw(){
  card.classList.toggle("sb-complete",all);phases.forEach((p,i)=>p.hidden=!all&&current!==i);
  buttons.forEach((b,i)=>b.setAttribute("aria-current",!all&&i===current?"step":"false"));
  prev.disabled=all||current===0;next.disabled=all||current===5;
  toggle.textContent=all?"voltar à fase":"ver todas as fases";
  status.textContent=all?"Visão completa: navegue horizontalmente.":"Fase "+(current+1)+" de 6: "+fases[current];view.scrollLeft=0;
 }
 prev.addEventListener("click",()=>{if(current>0){current--;draw()}});
 next.addEventListener("click",()=>{if(current<5){current++;draw()}});
 toggle.addEventListener("click",()=>{all=!all;draw()});
 const backup=element("details","sb-source");backup.append(element("summary","","dados originais em tabela"));
 table.before(card);table.replaceWith(backup);backup.append(table);card.after(backup);draw();return true;
}
window.renderizarBlueprintsServicos=function(article){
 const body=document.getElementById("artigo-corpo"),reader=document.getElementById("leitor-artigo");
 reader?.classList.remove("blueprint-view");
 if(!body||!/38 - blueprints do processo legislativo/.test(article?.path||""))return;
 if(!document.getElementById("sb-style")){const css=element("style");css.id="sb-style";css.textContent=st;document.head.append(css)}
 let n=0;body.querySelectorAll("table").forEach(t=>{if(montar(t))n++});
 if(n)reader?.classList.add("blueprint-view");
};
})();