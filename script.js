const arquivos = [
  "materias/Administracao Geral/administracao-geral.md", "materias/Administracao Publica/administracao-publica.md", "materias/Atualidades/atualidades.md", "materias/Calculo Mental/calculo-mental.md",
  "materias/Comunicacao/01 - comunicacao organizacional.md", "materias/Comunicacao/02 - comunicacao publica.md", "materias/Comunicacao/03 - lai lgpd e transparencia.md", "materias/Comunicacao/04 - criterios de noticiabilidade.md", "materias/Comunicacao/05 - lead piramide invertida e storytelling.md", "materias/Comunicacao/06 - comunicacao digital.md", "materias/Comunicacao/07 - gestao de crises.md", "materias/Comunicacao/08 - assessoria de imprensa.md", "materias/Comunicacao/09 - comunicacao interna.md", "materias/Comunicacao/10 - linguagem simples.md", "materias/Comunicacao/11 - etica em comunicacao.md", "materias/Comunicacao/12 - producao editorial e design.md", "materias/Comunicacao/13 - generos jornalisticos.md", "materias/Comunicacao/14 - entrevista jornalistica.md", "materias/Comunicacao/15 - publicos e stakeholders.md", "materias/Comunicacao/16 - planejamento de comunicacao.md", "materias/Comunicacao/17 - pesquisa em comunicacao.md", "materias/Comunicacao/18 - fact checking e desinformacao.md", "materias/Comunicacao/19 - marketing institucional e branding.md", "materias/Comunicacao/20 - campanhas e planejamento de midia.md", "materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa.md", "materias/Comunicacao/comunicacao.md",
  "materias/Direito Administrativo/01 - principios e lei de acesso a informacao.md", "materias/Direito Administrativo/02 - organizacao administrativa.md", "materias/Direito Administrativo/03 - atos administrativos.md", "materias/Direito Administrativo/04 - poderes administrativos.md", "materias/Direito Administrativo/05 - agentes publicos.md", "materias/Direito Administrativo/06 - responsabilidade civil do estado.md", "materias/Direito Administrativo/07 - improbidade administrativa.md", "materias/Direito Administrativo/08 - licitacoes e contratos.md", "materias/Direito Administrativo/09 - processo administrativo federal.md", "materias/Direito Administrativo/direito-administrativo.md",
  "materias/Direito Constitucional/01 - principios fundamentais.md", "materias/Direito Constitucional/02 - direitos e garantias fundamentais.md", "materias/Direito Constitucional/03 - direitos sociais.md", "materias/Direito Constitucional/04 - nacionalidade.md", "materias/Direito Constitucional/05 - direitos politicos.md", "materias/Direito Constitucional/06 - poder legislativo.md", "materias/Direito Constitucional/07 - poder executivo.md", "materias/Direito Constitucional/08 - poder judiciario e controle de constitucionalidade.md", "materias/Direito Constitucional/09 - funcoes essenciais a justica.md", "materias/Direito Constitucional/10 - processo legislativo e poder constituinte.md", "materias/Direito Constitucional/direito-constitucional.md",
  "materias/Informatica/informatica.md", "materias/Logica/00 - logica.md", "materias/Logica/01 - proposicao.md", "materias/Logica/02 - conectivos.md", "materias/Logica/03 - quantificadores.md", "materias/Logica/04 - equivalencias.md", "materias/Logica/05 - tabela verdade.md", "materias/Logica/06 - argumentacao logica.md", "materias/Logica/07 - diagramas logicos e conjuntos.md", "materias/Logica/08 - possibilidade e necessidade.md", "materias/Logica/09 - analise combinatoria.md",
  "materias/Portugues/01 - interpretacao de texto.md", "materias/Portugues/02 - sujeito.md", "materias/Portugues/03 - pontuacao e virgula.md", "materias/Portugues/04 - regencia.md", "materias/Portugues/05 - acordo ortografico.md", "materias/Portugues/portugues.md", "materias/Redacao/redacao.md"
];

const descricoes = {
  "Administracao Geral": "fundamentos, processos e funções administrativas", "Administracao Publica": "Estado, gestão pública e políticas", Atualidades: "contexto social, político e tecnológico", "Calculo Mental": "agilidade numérica e estratégias de cálculo", Comunicacao: "comunicação pública, jornalismo e estratégia", "Direito Administrativo": "administração pública, atos e agentes", "Direito Constitucional": "Constituição, direitos e organização do Estado", Informatica: "conceitos e ferramentas de informática", Logica: "proposições, argumentos e raciocínio", Portugues: "língua portuguesa e interpretação", Redacao: "produção textual e argumentação"
};
const ordemMaterias = ["Portugues", "Logica", "Calculo Mental", "Informatica", "Direito Constitucional", "Direito Administrativo", "Administracao Publica", "Administracao Geral", "Comunicacao", "Atualidades", "Redacao"];
const normalizar = valor => valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const tituloDoArquivo = caminho => caminho.split("/").pop().replace(/\.md$/i, "").replace(/^\d+\s*-\s*/, "").replace(/-/g, " ");
const tituloLegivel = valor => valor.replace(/\b\w/g, letra => letra.toUpperCase()).replace(/\bLai\b/g, "LAI").replace(/\bLgpd\b/g, "LGPD");
const categoriaDoArquivo = caminho => caminho.split("/")[1];
const slug = valor => normalizar(valor).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
const escapar = valor => valor.replace(/[&<>"]/g, caractere => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[caractere]));

const home = document.getElementById("home-view"); const topics = document.getElementById("topics-view"); const article = document.getElementById("article-view"); const grid = document.getElementById("areas-grid"); const search = document.getElementById("search-input");
let artigos = []; let artigoAtual = null;

async function carregarArtigos() {
  artigos = await Promise.all(arquivos.map(async caminho => {
    const conteudo = await fetch(encodeURI(caminho)).then(resposta => resposta.ok ? resposta.text() : "");
    const frontmatter = conteudo.match(/^---\n([\s\S]*?)\n---\n?/);
    const titulo = frontmatter?.[1].match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || tituloLegivel(tituloDoArquivo(caminho));
    return { caminho, conteudo, titulo, categoria: categoriaDoArquivo(caminho) };
  }));
  renderizarHome(); tratarRota();
}

function renderizarHome() {
  const termo = normalizar(search.value.trim());
  const porCategoria = artigos.reduce((grupos, item) => ({ ...grupos, [item.categoria]: [...(grupos[item.categoria] || []), item] }), {});
  const categorias = ordemMaterias.filter(categoria => porCategoria[categoria]);
  const visiveis = categorias.filter(categoria => !termo || normalizar(`${categoria} ${descricoes[categoria] || ""} ${porCategoria[categoria].map(({titulo}) => titulo).join(" ")}`).includes(termo));
  document.getElementById("results-summary").textContent = termo ? `${visiveis.length} matérias encontradas` : `${categorias.length} matérias públicas`;
  grid.innerHTML = visiveis.length ? visiveis.map(categoria => `<button class="area-card" type="button" data-categoria="${escapar(categoria)}"><span class="area-number">${String(ordemMaterias.indexOf(categoria)+1).padStart(2,"0")}</span><span><span class="area-name">${escapar(tituloLegivel(categoria))}</span><span class="area-description">${escapar(descricoes[categoria] || `${porCategoria[categoria].length} notas de estudo`)}</span></span><span class="area-arrow">→</span></button>`).join("") : '<p class="empty">Nenhuma matéria encontrada.</p>';
  grid.querySelectorAll("[data-categoria]").forEach(botao => botao.addEventListener("click", () => abrirMateria(botao.dataset.categoria)));
}

function abrirMateria(categoria) {
  if (window.location.hash !== `#/materia/${encodeURIComponent(categoria)}`) { window.location.hash = `#/materia/${encodeURIComponent(categoria)}`; return; }
  const lista = artigos.filter(artigo => artigo.categoria === categoria).sort((a,b) => a.titulo.localeCompare(b.titulo,"pt-BR",{numeric:true}));
  home.hidden = true; article.hidden = true; topics.hidden = false;
  document.getElementById("topics-title").textContent = tituloLegivel(categoria);
  document.getElementById("topics-count").textContent = `${lista.length} tópicos`;
  document.getElementById("topics-breadcrumbs").innerHTML = '<button type="button" data-home>início</button><span>/</span><span>matérias</span>';
  document.getElementById("topics-breadcrumbs").querySelector("[data-home]").addEventListener("click", voltarHome);
  document.getElementById("topics-list").innerHTML = lista.map((item, indice) => `<button type="button" class="topic-item" data-caminho="${escapar(item.caminho)}"><span class="topic-number">${String(indice + 1).padStart(2,"0")}</span><strong>${escapar(item.titulo)}</strong><span class="area-arrow">→</span></button>`).join("");
  document.querySelectorAll("#topics-list [data-caminho]").forEach(botao => botao.addEventListener("click", () => abrirArtigo(artigos.find(item => item.caminho === botao.dataset.caminho))));
  rolarParaTopo();
}

function limparMarkdown(markdown) { return markdown.replace(/^---[\s\S]*?---\s*/, "").replace(/^>\s*\[!(\w+)\]\s*/gm, "> **$1** ").replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1"); }
function abrirArtigo(item, atualizarHash = true) {
  if (atualizarHash && window.location.hash !== `#/artigo/${encodeURIComponent(item.caminho)}`) { window.location.hash = `#/artigo/${encodeURIComponent(item.caminho)}`; return; }
  artigoAtual = item; home.hidden = true; topics.hidden = true; article.hidden = false; document.getElementById("article-title").textContent = item.titulo;
  const corpo = document.getElementById("article-body"); corpo.innerHTML = marked.parse(limparMarkdown(item.conteudo), { gfm:true, breaks:false });
  corpo.querySelectorAll("h1,h2,h3").forEach((titulo, indice) => titulo.id = titulo.id || `${slug(titulo.textContent)}-${indice}`);
  adicionarCopiarCodigo(corpo); renderizarMermaid(corpo); renderizarBreadcrumbs(item); renderizarToc(corpo); renderizarNav(item); rolarParaTopo();
}
function renderizarBreadcrumbs(item) { const el=document.getElementById("breadcrumbs"); el.innerHTML=`<button type="button" data-home>início</button><span>/</span><button type="button" data-categoria>${escapar(tituloLegivel(item.categoria))}</button><span>/</span><span>${escapar(item.titulo)}</span>`; el.querySelector("[data-home]").addEventListener("click", voltarHome); el.querySelector("[data-categoria]").addEventListener("click", () => abrirMateria(item.categoria)); }
function renderizarToc(corpo) { const toc=document.getElementById("toc"); const titulos=[...corpo.querySelectorAll("h1,h2,h3")]; toc.innerHTML=titulos.map(titulo=>`<a href="#${titulo.id}">${escapar(titulo.textContent)}</a>`).join(""); document.getElementById("toc-filter").oninput=e=>toc.querySelectorAll("a").forEach(link=>link.hidden=!normalizar(link.textContent).includes(normalizar(e.target.value))); }
function renderizarNav(item) { const lista=artigos.filter(artigo=>artigo.categoria===item.categoria).sort((a,b)=>a.titulo.localeCompare(b.titulo,"pt-BR",{numeric:true})); const indice=lista.indexOf(item); const destino=[ [lista[indice-1],"← artigo anterior"],[lista[indice+1],"próximo artigo →"] ]; document.getElementById("article-nav").innerHTML=destino.map(([artigo,rotulo])=>artigo?`<button type="button" data-caminho="${escapar(artigo.caminho)}"><span>${rotulo}</span><strong>${escapar(artigo.titulo)}</strong></button>`:"<span></span>").join(""); document.querySelectorAll("#article-nav [data-caminho]").forEach(botao=>botao.addEventListener("click",()=>abrirArtigo(artigos.find(item=>item.caminho===botao.dataset.caminho)))); }
function adicionarCopiarCodigo(corpo) { corpo.querySelectorAll("pre").forEach(pre=>{ const botao=document.createElement("button"); botao.className="copy-button"; botao.textContent="copiar"; botao.addEventListener("click",async()=>{await navigator.clipboard?.writeText(pre.innerText); botao.textContent="copiado"; setTimeout(()=>botao.textContent="copiar",1200);}); pre.append(botao); }); }
async function renderizarMermaid(corpo) { const blocos=[...corpo.querySelectorAll("pre > code.language-mermaid")]; for (const [indice,codigo] of blocos.entries()) { const conteiner=document.createElement("div"); conteiner.className="mermaid"; conteiner.id=`mermaid-${Date.now()}-${indice}`; conteiner.textContent=codigo.textContent; codigo.parentElement.replaceWith(conteiner); try { await mermaid.run({nodes:[conteiner]}); } catch { const pre=document.createElement("pre"); pre.textContent=codigo.textContent; conteiner.replaceWith(pre); } } }
function rolarParaTopo() { requestAnimationFrame(() => window.scrollTo({top:0, left:0, behavior:"auto"})); }
function voltarHome() { window.history.pushState({},"",window.location.pathname); article.hidden=true; topics.hidden=true; home.hidden=false; search.value=""; renderizarHome(); rolarParaTopo(); }
function tratarRota() { const rota=window.location.hash; if(rota.startsWith("#/materia/")) { const categoria=decodeURIComponent(rota.slice("#/materia/".length)); return ordemMaterias.includes(categoria) ? abrirMateria(categoria) : voltarHome(); } if(rota.startsWith("#/artigo/")) { const caminho=decodeURIComponent(rota.slice("#/artigo/".length)); const item=artigos.find(artigo=>artigo.caminho===caminho); return item ? abrirArtigo(item,false) : voltarHome(); } voltarHome(); }
mermaid.initialize({ startOnLoad:false, theme:"dark", securityLevel:"strict", themeVariables:{ primaryColor:"#191919", primaryTextColor:"#f4f2ee", primaryBorderColor:"#ffd52e", lineColor:"#ffd52e", secondaryColor:"#242222", tertiaryColor:"#101010" } });
document.getElementById("brand").addEventListener("click",voltarHome); document.getElementById("back-button").addEventListener("click",() => abrirMateria(artigoAtual.categoria)); document.getElementById("topics-back-button").addEventListener("click",voltarHome); search.addEventListener("input",renderizarHome); window.addEventListener("hashchange",tratarRota); carregarArtigos();
