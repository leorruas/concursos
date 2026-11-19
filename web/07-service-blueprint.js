
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
 const normalized=data.slice(0,10).map(r=>[...r,...Array(Math.max(0,7-r.length)).fill("")].slice(0,7));
 data.splice(0,data.length,...normalized);
 const card=element("section","sb"),nav=element("nav","sb-nav"),bar=element("div","sb-control"),canvas=element("div","sb-canvas");
 card.setAttribute("aria-label","Mapa do processo legislativo por fases e atores");
 nav.setAttribute("aria-label","Selecionar fase");
 let current=0,all=true;
 const buttons=fasesLocais.map((name,i)=>{const b=element("button","",String(i+1).padStart(2,"0")+" "+name);b.type="button";nav.append(b);b.addEventListener("click",()=>{current=i;all=false;draw()});return b});
 const prev=element("button","","← anterior"),next=element("button","","próxima →"),toggle=element("button","","visão completa");
 [prev,next,toggle].forEach(b=>b.type="button");bar.append(prev,next,toggle);
 const status=element("p","sb-foot");status.setAttribute("aria-live","polite");
 card.append(canvas,status);
 function draw(){
   const phaseIds=all?[0,1,2,3,4,5]:[current],pw=all?285:550,labelWidth=all?155:182,cellWidth=all?245:490;
   const rowYs=[72,174,276,378,480,582],height=735,width=labelWidth+phaseIds.length*pw+24;
   const svg=svgNode("svg",{viewBox:"0 0 "+width+" "+height,width:width,height:height,role:"img","aria-label":all?"Blueprint completo de seis fases":"Blueprint da fase "+fasesLocais[current],class:"sb-map"});
   svg.append(svgNode("title",{},all?"Mapa das seis fases":"Mapa da fase "+fasesLocais[current]));
   svg.append(svgNode("rect",{x:0,y:0,width,height,fill:"var(--bg)"}));
   const layers=[{source:1,label:"Evidências",y:84},{source:2,label:"Proponente",y:184},{source:4,label:"Atores públicos",y:288},{source:6,label:"Bastidores",y:390},{source:8,label:"Suporte",y:490},{source:9,label:"Prazos e marcos",y:592}];
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
window.renderizarBlueprintsServicos=function(article){
 const body=document.getElementById("artigo-corpo"),reader=document.getElementById("leitor-artigo");
 reader?.classList.remove("blueprint-view");
 if(!body)return;
 const title=String(document.getElementById("artigo-titulo")?.textContent||"");
 const path=decodeURIComponent(String(article?.path||""));
 if(!/(blueprints do processo legislativo|blueprint das proposicoes da camara|blueprint do (processo|ciclo) orcamentario|blueprint do orcamento federal)/i.test(path.normalize("NFD").replace(/[\u0300-\u036f]/g,"")+" "+title.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))return;
 if(!document.getElementById("sb-style")){const css=element("style");css.id="sb-style";css.textContent=st;document.head.append(css)}
 let n=0;body.querySelectorAll("table").forEach(t=>{if(montar(t))n++});
 if(n)reader?.classList.add("blueprint-view");
};
})();