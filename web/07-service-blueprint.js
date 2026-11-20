
(function(){
"use strict";
const fases=["Origem","Recebimento","Instrução","Deliberação","Revisão e retorno","Conclusão"];
const tipos=["evidence","user","interaction","frontstage","visibility","backstage","internal","support","clock"];
const labels=["Evidências e documentos","Ações do proponente","Linha de interação","Ações públicas e contatos","Linha de visibilidade","Bastidores de preparação","Linha de interação interna","Processos de suporte","Prazos e quóruns"];
const st=`
.leitor-artigo.blueprint-view .artigo-toc-sidebar{display:none!important}
.leitor-artigo.blueprint-view .artigo-layout-container{display:block}
.leitor-artigo.blueprint-view .artigo-corpo{max-width:none}
.sb{border:1px solid color-mix(in srgb,var(--text) 20%,transparent);border-radius:14px;overflow:hidden;margin:18px 0 34px}
.sb-nav{display:flex;overflow:auto;gap:7px;padding:12px;background:var(--accent-blue-alpha-05)}
.sb button{flex-shrink:0;font:inherit;font-size:12px;border-radius:7px;border:1px solid color-mix(in srgb,var(--text) 25%,transparent);padding:8px 10px;background:var(--bg);color:var(--text);cursor:pointer}
.sb button[aria-current=step]{border-color:var(--accent-blue);font-weight:750;background:var(--accent-blue-alpha-05)}
.sb button:focus-visible{outline:3px solid var(--accent-blue);outline-offset:2px}
.sb button:disabled{opacity:.35;cursor:default}
.sb-control{display:flex;flex-wrap:wrap;gap:8px;padding:9px 12px;border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
.sb-toolbar{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:8px 12px;background:var(--bg);border-bottom:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
.sb-toolbar .sb-expand{font-weight:650;min-height:36px}
.sb:fullscreen,.sb.sb-expanded{width:100vw;height:100vh;height:100dvh;max-width:none;max-height:none;border:0;border-radius:0;margin:0;background:var(--bg);display:flex;flex-direction:column}
.sb.sb-expanded{position:fixed;inset:0;z-index:99999}
.sb:fullscreen .sb-toolbar,.sb.sb-expanded .sb-toolbar{flex-shrink:0;padding:12px 18px}
.sb:fullscreen .sb-canvas,.sb.sb-expanded .sb-canvas{flex:1;min-height:0;max-height:none;overscroll-behavior:contain}
.sb:fullscreen .sb-foot,.sb.sb-expanded .sb-foot{flex-shrink:0}
.sb-canvas{overflow:auto;max-height:75vh;background:var(--bg)}
.sb-map{display:block;min-width:100%;height:auto}
.sb-map .phase-label{font:650 13px system-ui,sans-serif;fill:var(--text)}
.sb-map .lane-label{font:600 11px system-ui,sans-serif;fill:var(--text)}
.sb-map .node-text{font:12px system-ui,sans-serif;fill:var(--text)}
.sb-map .minor-text{font:10px system-ui,sans-serif;fill:var(--text)}
.sb-map .node-box{fill:var(--bg);stroke:color-mix(in srgb,var(--text) 25%,transparent);stroke-width:1}
.sb-map .public{stroke:var(--accent-blue);stroke-width:2}
.sb-map .connector{stroke:var(--accent-blue);stroke-width:2;fill:none}
.sb-map .layer-bg{fill:color-mix(in srgb,var(--text) 4%,var(--bg))}
.sb-map .phase-bg{fill:var(--accent-blue-alpha-05)}
.sb-map .phase-line{stroke:color-mix(in srgb,var(--text) 25%,transparent);stroke-dasharray:3 4}
.sb-map .line-label{font:10px system-ui,sans-serif;fill:var(--text)}
.sb-foot{padding:10px 12px;font-size:12px;color:var(--text)}
.sb-source{display:none!important}
.sb-source table{display:none!important}
@media(max-width:700px){.sb-canvas{max-height:68vh}.sb-nav{gap:5px}.sb button{font-size:11px;padding:7px 8px}}
`;
function element(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}

function svgNode(name,attrs,text){
 const node=document.createElementNS("http://www.w3.org/2000/svg",name);
 Object.entries(attrs||{}).forEach(([k,v])=>node.setAttribute(k,String(v)));
 if(text!==undefined)node.textContent=text;
 return node;
}
function wrapLines(str,max=32){
 const words=String(str).split(/\s+/),out=[];let line="";
 for(const word of words){if((line+" "+word).trim().length>max&&line){out.push(line);line=word}else line=(line+" "+word).trim()}
 if(line)out.push(line);return out.slice(0,5);
}
function montar(table){
 const data=[...table.querySelectorAll("tr")].map(r=>[...r.children].map(c=>c.textContent.trim()));
 const fasesLocais=data[0]?.slice(1,7).map((name,i)=>String(name).replace(/^\d+[. ]+/, "")||fases[i])||fases;
 if(data.length<10||!data[0]?.[0]||!/camadas\s*\/\s*fases/i.test(data[0][0]))return false;
 const normalized=data.map(r=>[...r,...Array(Math.max(0,7-r.length)).fill("")].slice(0,7));
 data.splice(0,data.length,...normalized);
 const quorumRows=data.length>=12 && /qu[oó]rum/i.test(data[10]?.[0]||"") && /qu[oó]rum/i.test(data[11]?.[0]||"");
 const card=element("section","sb"),nav=element("nav","sb-nav"),bar=element("div","sb-control"),canvas=element("div","sb-canvas");
 card.setAttribute("aria-label","Mapa do processo legislativo por fases e atores");
 nav.setAttribute("aria-label","Selecionar fase");
 let current=0,all=true;
 const buttons=fasesLocais.map((name,i)=>{const b=element("button","",String(i+1).padStart(2,"0")+" "+name);b.type="button";nav.append(b);b.addEventListener("click",()=>{current=i;all=false;draw()});return b});
 const prev=element("button","","← anterior"),next=element("button","","próxima →"),toggle=element("button","","visão completa");
 [prev,next,toggle].forEach(b=>b.type="button");bar.append(prev,next,toggle);
 const status=element("p","sb-foot");status.setAttribute("aria-live","polite");
 const toolbar=element("div","sb-toolbar");
 const fullscreen=element("button","sb-expand","⛶ Tela cheia");
 fullscreen.type="button";
 fullscreen.setAttribute("aria-label","Abrir blueprint em tela cheia");
 fullscreen.setAttribute("aria-pressed","false");
 toolbar.append(fullscreen);
 card.append(toolbar,canvas,status);
 let fallbackExpanded=false;
 const expanded=()=>document.fullscreenElement===card||fallbackExpanded;
 function syncFullscreen(){
   const active=expanded();
   fullscreen.textContent=active?"↙ Sair da tela cheia":"⛶ Tela cheia";
   fullscreen.setAttribute("aria-label",active?"Sair da tela cheia do blueprint":"Abrir blueprint em tela cheia");
   fullscreen.setAttribute("aria-pressed",String(active));
 }
 function closeFallback(){
   if(!fallbackExpanded)return;
   fallbackExpanded=false;
   card.classList.remove("sb-expanded");
   document.removeEventListener("keydown",fallbackEsc);
   document.body.style.overflow=previousOverflow;
   syncFullscreen();
   fullscreen.focus();
 }
 function fallbackEsc(event){if(event.key==="Escape")closeFallback()}
 let previousOverflow="";
 async function toggleFullscreen(){
   if(fallbackExpanded){closeFallback();return}
   if(document.fullscreenElement===card){if(document.exitFullscreen)await document.exitFullscreen();return}
   // A API nativa ocupa a tela; o modo fixo atende navegadores que não a oferecem.
   if(typeof card.requestFullscreen==="function"){
     try{await card.requestFullscreen();syncFullscreen();return}catch(error){/* fallback abaixo */}
   }
   previousOverflow=document.body.style.overflow;
   document.body.style.overflow="hidden";
   fallbackExpanded=true;
   card.classList.add("sb-expanded");
   document.addEventListener("keydown",fallbackEsc);
   syncFullscreen();
 }
 fullscreen.addEventListener("click",toggleFullscreen);
 card.addEventListener("fullscreenchange",syncFullscreen);
 function draw(){
   const phaseIds=all?[0,1,2,3,4,5]:[current],pw=all?285:550,labelWidth=all?155:182,cellWidth=all?245:490;
   const routeRows=data.length>=14 && /regime de urg[eê]ncia/i.test(data[12]?.[0]||"") && /decis[aã]o conclusiva/i.test(data[13]?.[0]||"");
   const height=quorumRows?(routeRows?1135:940):735,width=labelWidth+phaseIds.length*pw+24;
   const svg=svgNode("svg",{viewBox:"0 0 "+width+" "+height,width:width,height:height,role:"img","aria-label":all?"Blueprint completo de seis fases":"Blueprint da fase "+fasesLocais[current],class:"sb-map"});
   svg.append(svgNode("title",{},all?"Mapa das seis fases":"Mapa da fase "+fasesLocais[current]));
   svg.append(svgNode("rect",{x:0,y:0,width,height,fill:"var(--bg)"}));
   const layers=[{source:1,label:"Evidências",y:84},{source:2,label:"Proponente",y:184},{source:4,label:"Atores públicos",y:288},{source:6,label:"Bastidores",y:390},{source:8,label:"Suporte",y:490},{source:9,label:"Prazos e marcos",y:592}];
   if(quorumRows) layers.push(
     {source:10,label:"Quórum: presença",y:694},
     {source:11,label:"Quórum: aprovação",y:796}
   );
   if(routeRows) layers.push(
     {source:12,label:"Urgência e regime",y:898},
     {source:13,label:"Comissão / Plenário",y:1000}
   );
   const lines=[{y:271,label:"Linha de interação"},{y:374,label:"Linha de visibilidade"},{y:475,label:"Linha interna"}];
   for(const item of layers){
     svg.append(svgNode("rect",{x:0,y:item.y-13,width,height:92,class:"layer-bg"}));
     const label=svgNode("text",{x:12,y:item.y+9,class:"lane-label"},item.label);svg.append(label);
   }
   for(const line of lines){
     svg.append(svgNode("line",{x1:0,y1:line.y,x2:width,y2:line.y,stroke:"var(--accent-blue)","stroke-width":1.4,"stroke-dasharray":"7 5"}));
     svg.append(svgNode("text",{x:12,y:line.y-5,class:"line-label"},line.label));
   }
   phaseIds.forEach((phase,pi)=>{
     const x=labelWidth+pi*pw;
     svg.append(svgNode("rect",{x,y:8,width:pw-8,height:44,rx:7,class:"phase-bg"}));
     svg.append(svgNode("text",{x:x+12,y:34,class:"phase-label"},String(phase+1).padStart(2,"0")+" · "+fasesLocais[phase]));
     svg.append(svgNode("line",{x1:x-10,y1:0,x2:x-10,y2:height,class:"phase-line"}));
     layers.forEach((layer,li)=>{
       const val=data[layer.source][phase+1],empty=/^(não se aplica|·{3}|-{1,2})$/i.test(val);
       if(empty)return;
       const top=layer.y-10,w=pw-26,h=78;
       svg.append(svgNode("rect",{x:x+5,y:top,width:w,height:h,rx:9,class:"node-box"+(li===1||li===2?" public":"")}));
       const lines=wrapLines(val,all?29:52);
       lines.forEach((line,k)=>svg.append(svgNode("text",{x:x+16,y:top+22+k*15,class:"node-text"},line)));
     });
     if(pi>0){
      svg.append(svgNode("path",{d:"M "+(x-19)+" 321 h 18",class:"connector"}));
      svg.append(svgNode("path",{d:"M "+(x-5)+" 317 l 5 4 -5 4",class:"connector"}));
     }
   });
   canvas.replaceChildren(svg);
   card.classList.toggle("sb-full",all);
   buttons.forEach((b,i)=>b.setAttribute("aria-current",!all&&i===current?"step":"false"));
   prev.disabled=all||current===0;next.disabled=all||current===5;
   toggle.textContent=all?"voltar à fase":"visão completa";
   status.textContent="Visão completa: percorra horizontalmente as fases. Os legitimados e as Casas estão descritos acima do mapa.";
   canvas.scrollLeft=0;
 }
 prev.addEventListener("click",()=>{if(current>0){current--;draw()}});
 next.addEventListener("click",()=>{if(current<5){current++;draw()}});
 toggle.addEventListener("click",()=>{all=!all;draw()});
 table.replaceWith(card);draw();return true;
}

function montarDecoro(table) {
 const matrix=[...table.querySelectorAll("tr")].map(row=>[...row.children].map(cell=>cell.textContent.trim()));
 if(!/^camadas\s*\/\s*fases/i.test(matrix[0]?.[0]||""))return false;
 const phaseCount=matrix[0].length-1;
 if(phaseCount<2||phaseCount>8)return false;
 const phaseLabels=matrix[0].slice(1).map((label,i)=>label.replace(/^\d+[. ]+/, "")||"Fase "+(i+1));
 const rows=matrix.slice(1).filter(c=>c.length>=phaseCount+1).map(c=>({
  label:c[0], values:c.slice(1,phaseCount+1)
 })).filter(r=>!/linha de intera[cç][aã]o|linha de visibilidade|linha de intera[cç][aã]o interna/i.test(r.label));
 const card=element("section","sb sb-decoro");
 card.setAttribute("aria-label","Blueprint de decoro parlamentar, fases e camadas");
 const toolbar=element("div","sb-toolbar");
 const btn=element("button","sb-expand","⛶ Tela cheia");
 btn.type="button";toolbar.append(btn);
 const canvas=element("div","sb-canvas");
 const foot=element("p","sb-foot","Visão completa: percorra horizontalmente as fases. Role para o lado no celular.");
 const details=element("details","sb-original");
 const summary=element("summary","","Ver matriz textual acessível");
 const placeholder=document.createElement("span");
 table.replaceWith(placeholder);
 details.append(summary,table);
 card.append(toolbar,canvas,foot,details);
 placeholder.replaceWith(card);
 let overflowAnterior="",fallback=false;
 function sair(){
  if(!fallback)return;
  fallback=false;card.classList.remove("sb-expanded");document.body.style.overflow=overflowAnterior;
  document.removeEventListener("keydown",esc);btn.textContent="⛶ Tela cheia";btn.setAttribute("aria-pressed","false");
 }
 function esc(e){if(e.key==="Escape")sair()}
 btn.addEventListener("click",async()=>{
  if(fallback){sair();return}
  if(document.fullscreenElement===card){await document.exitFullscreen();return}
  if(card.requestFullscreen){try{await card.requestFullscreen();return}catch(e){}}
  overflowAnterior=document.body.style.overflow;document.body.style.overflow="hidden";
  fallback=true;card.classList.add("sb-expanded");document.addEventListener("keydown",esc);
  btn.textContent="↙ Sair da tela cheia";btn.setAttribute("aria-pressed","true");
 });
 card.addEventListener("fullscreenchange",()=>{const active=document.fullscreenElement===card;btn.textContent=active?"↙ Sair da tela cheia":"⛶ Tela cheia";btn.setAttribute("aria-pressed",String(active))});
 function cellLines(value,max=34){
  const out=[];let line="";
  for(const word of String(value).split(/\s+/)){if((line+" "+word).trim().length>max&&line){out.push(line);line=word}else line=(line+" "+word).trim()}
  if(line)out.push(line);
  return out;
 }
 const labelW=182,colW=282,top=68,footer=24;
 const rowHeights=rows.map(r=>Math.max(112,26+Math.max(...r.values.map(v=>cellLines(v).length),cellLines(r.label,23).length)*15));
 const rowTops=rows.map((_,i)=>top+rowHeights.slice(0,i).reduce((a,b)=>a+b,0));
 const width=labelW+phaseCount*colW+18,height=top+rowHeights.reduce((a,b)=>a+b,0)+footer;
 const svg=svgNode("svg",{viewBox:`0 0 ${width} ${height}`,width,height,role:"img","aria-label":"Blueprint completo de "+phaseCount+" fases",class:"sb-map"});
 svg.append(svgNode("title",{},"Responsabilização parlamentar: fases, agentes e evidências"));
 svg.append(svgNode("rect",{x:0,y:0,width,height,fill:"var(--bg)"}));
 phaseLabels.forEach((label,i)=>{
  const x=labelW+i*colW;
  svg.append(svgNode("rect",{x,y:12,width:colW-9,height:44,rx:7,class:"phase-bg"}));
  svg.append(svgNode("text",{x:x+10,y:38,class:"phase-label"},String(i+1).padStart(2,"0")+" · "+label));
  svg.append(svgNode("line",{x1:x-6,y1:0,x2:x-6,y2:height,class:"phase-line"}));
 });
 // Conexões horizontais entre atos públicos consecutivos: o sentido é temporal.
 // O espaço entre cartões permanece livre para o traçado, sem atravessar o texto.
 const frontstageIndex=rows.findIndex(r=>/frontstage|atos institucionais/i.test(r.label));
 if(frontstageIndex>=0){
  const cy=rowTops[frontstageIndex]+rowHeights[frontstageIndex]/2-4;
  for(let i=0;i<phaseCount-1;i++){
   const from=labelW+i*colW+colW-16;
   const to=labelW+(i+1)*colW+3;
   svg.append(svgNode("path",{d:`M ${from} ${cy} H ${to-6}`,class:"connector"}));
   svg.append(svgNode("path",{d:`M ${to-11} ${cy-5} L ${to-5} ${cy} L ${to-11} ${cy+5}`,class:"connector"}));
  }
 }
 rows.forEach((r,ri)=>{
  const y=rowTops[ri],step=rowHeights[ri];
  svg.append(svgNode("rect",{x:0,y:y-8,width,height:step-7,class:"layer-bg"}));
  cellLines(r.label,23).forEach((v,j)=>svg.append(svgNode("text",{x:10,y:y+18+j*17,class:"lane-label"},v)));
  r.values.forEach((value,ci)=>{
   if(!value||/^(n[aã]o se aplica|·+|[-–—]+)$/i.test(value))return;
   const x=labelW+ci*colW+4;
   svg.append(svgNode("rect",{x,y:y-4,width:colW-20,height:step-21,rx:8,class:"node-box"+(/frontstage|atos institucionais/i.test(r.label)?" public":"")}));
   cellLines(value,34).forEach((line,j)=>svg.append(svgNode("text",{x:x+11,y:y+17+j*15,class:"node-text"},line)));
  });
  if(/ações do requerente|ações do representado|ações do requerente\/representado/i.test(r.label)||/frontstage/i.test(r.label)||/backstage/i.test(r.label)){
   const label=/frontstage/i.test(r.label)?"Linha de visibilidade":/backstage/i.test(r.label)?"Linha de interação interna":"Linha de interação";
   svg.append(svgNode("line",{x1:0,y1:y+step-10,x2:width,y2:y+step-10,stroke:"var(--accent-blue)","stroke-width":1.3,"stroke-dasharray":"7 5"}));
   svg.append(svgNode("text",{x:10,y:y+step-15,class:"line-label"},label));
  }
 });
 canvas.append(svg);
 return true;
}

window.renderizarBlueprintsServicos=function(article){
 const body=document.getElementById("artigo-corpo"),reader=document.getElementById("leitor-artigo");
 reader?.classList.remove("blueprint-view");
 if(!body)return;
 const title=String(document.getElementById("artigo-titulo")?.textContent||"");
 const path=decodeURIComponent(String(article?.path||""));
 const normalized=(path+" "+title).normalize("NFD").replace(/[\u0300-\u036f]/g,"");
 const decoro=/blueprint da responsabilizacao por decoro parlamentar|apuracao e responsabilizacao por decoro parlamentar/i.test(normalized);
 if(!decoro && !/(blueprints do processo legislativo|blueprint das proposicoes da camara|blueprint do (processo|ciclo) orcamentario|blueprint do orcamento federal)/i.test(normalized))return;
 if(!document.getElementById("sb-style")){const css=element("style");css.id="sb-style";css.textContent=st;document.head.append(css)}
 let n=0;body.querySelectorAll("table").forEach(t=>{if(decoro?montarDecoro(t):montar(t))n++});
 if(n)reader?.classList.add("blueprint-view");
};
})();