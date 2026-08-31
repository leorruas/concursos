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
const nomesMaterias = {
  "Administracao Geral": "Administração geral", "Administracao Publica": "Administração pública", Atualidades: "Atualidades", "Calculo Mental": "Cálculo mental", Comunicacao: "Comunicação", "Direito Administrativo": "Direito administrativo", "Direito Constitucional": "Direito constitucional", Informatica: "Informática", Logica: "Lógica", Portugues: "Português", Redacao: "Redação"
};
const ordemMaterias = ["Portugues", "Logica", "Calculo Mental", "Informatica", "Direito Constitucional", "Direito Administrativo", "Administracao Publica", "Administracao Geral", "Comunicacao", "Atualidades", "Redacao"];
const normalizar = valor => valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const tituloDoArquivo = caminho => caminho.split("/").pop().replace(/\.md$/i, "").replace(/^\d+\s*-\s*/, "").replace(/-/g, " ");
const tituloLegivel = valor => valor.replace(/\b\w/g, letra => letra.toUpperCase()).replace(/\bLai\b/g, "LAI").replace(/\bLgpd\b/g, "LGPD");
const categoriaDoArquivo = caminho => caminho.split("/")[1];
const slug = valor => normalizar(valor).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
const escapar = valor => valor.replace(/[&<>"]/g, caractere => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[caractere]));
const ordenarArtigos = lista => [...lista].sort((a, b) => arquivos.indexOf(a.caminho) - arquivos.indexOf(b.caminho));

const home = document.getElementById("home-view"); const topics = document.getElementById("topics-view"); const article = document.getElementById("article-view"); const grid = document.getElementById("areas-grid"); const search = document.getElementById("search-input"); const homeSearch = document.getElementById("home-search-input"); const topbar = document.querySelector(".topbar");
let artigos = []; let artigoAtual = null;
let atualizarTocAtivo = null;
let tema = localStorage.getItem("concursos-theme") || "dark";

function configurarMermaid() {
  const claro = tema === "light";
  mermaid.initialize({ startOnLoad:false, theme:claro ? "base" : "dark", securityLevel:"strict", themeVariables:{ primaryColor:claro ? "#ede9df" : "#191919", primaryTextColor:claro ? "#171614" : "#f4f2ee", primaryBorderColor:claro ? "#a87800" : "#ffd52e", lineColor:claro ? "#a87800" : "#ffd52e", secondaryColor:claro ? "#e8e4da" : "#242222", tertiaryColor:claro ? "#f6f4ee" : "#101010" } });
}
function aplicarTema(novoTema) {
  tema = novoTema;
  document.documentElement.dataset.theme = tema;
  localStorage.setItem("concursos-theme", tema);
  document.querySelectorAll("[data-theme-toggle]").forEach(botao => botao.textContent = tema === "dark" ? "modo claro" : "modo escuro");
  configurarMermaid();
  if (artigoAtual && !article.hidden) abrirArtigo(artigoAtual, false);
}

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
  const termo = normalizar(homeSearch.value.trim());
  const porCategoria = artigos.reduce((grupos, item) => ({ ...grupos, [item.categoria]: [...(grupos[item.categoria] || []), item] }), {});
  const categorias = ordemMaterias.filter(categoria => porCategoria[categoria]);
  const visiveis = categorias.filter(categoria => !termo || normalizar(`${categoria} ${descricoes[categoria] || ""} ${porCategoria[categoria].map(({titulo}) => titulo).join(" ")}`).includes(termo));
  document.getElementById("results-summary").textContent = termo ? `${visiveis.length} matérias encontradas` : `${categorias.length} matérias públicas`;
  grid.innerHTML = visiveis.length ? visiveis.map(categoria => `<button class="area-card" type="button" data-categoria="${escapar(categoria)}"><span class="area-number">${String(ordemMaterias.indexOf(categoria)+1).padStart(2,"0")}</span><span><span class="area-name">${escapar(nomesMaterias[categoria] || tituloLegivel(categoria))}</span><span class="area-description">${escapar(descricoes[categoria] || `${porCategoria[categoria].length} notas de estudo`)}</span></span><span class="area-arrow">→</span></button>`).join("") : '<p class="empty">Nenhuma matéria encontrada.</p>';
  grid.querySelectorAll("[data-categoria]").forEach(botao => botao.addEventListener("click", () => abrirMateria(botao.dataset.categoria)));
}

function abrirMateria(categoria) {
  if (window.location.hash !== `#/materia/${encodeURIComponent(categoria)}`) { window.location.hash = `#/materia/${encodeURIComponent(categoria)}`; return; }
  const lista = ordenarArtigos(artigos.filter(artigo => artigo.categoria === categoria));
  home.hidden = true; article.hidden = true; topics.hidden = false;
  document.getElementById("topics-title").textContent = nomesMaterias[categoria] || tituloLegivel(categoria);
  document.getElementById("topics-count").textContent = `${lista.length} tópicos`;
  document.getElementById("topics-breadcrumbs").innerHTML = '<button type="button" data-home>início</button><span>/</span><span>matérias</span>';
  document.getElementById("topics-breadcrumbs").querySelector("[data-home]").addEventListener("click", voltarHome);
  document.getElementById("topics-list").innerHTML = lista.map((item, indice) => `<button type="button" class="topic-item" data-caminho="${escapar(item.caminho)}"><span class="topic-number">${String(indice + 1).padStart(2,"0")}</span><strong>${escapar(item.titulo)}</strong><span class="area-arrow">→</span></button>`).join("");
  document.querySelectorAll("#topics-list [data-caminho]").forEach(botao => botao.addEventListener("click", () => abrirArtigo(artigos.find(item => item.caminho === botao.dataset.caminho))));
  rolarParaTopo();
}

function encontrarWikiLink(destino, origem) {
  const alvo = destino.split("#")[0].replace(/^3\s*-\s*Materias\//i, "").replace(/\.md$/i, "").trim();
  if (!alvo) return null;
  const chave = normalizar(alvo);
  const daMesmaMateria = artigos.filter(artigo => artigo.categoria === origem.categoria);
  return [...daMesmaMateria, ...artigos.filter(artigo => artigo.categoria !== origem.categoria)].find(artigo => {
    const caminho = artigo.caminho.replace(/^materias\//i, "").replace(/\.md$/i, "");
    const nomeDoArquivo = artigo.caminho.split("/").pop().replace(/\.md$/i, "");
    return normalizar(caminho) === chave || normalizar(nomeDoArquivo) === chave || normalizar(tituloDoArquivo(artigo.caminho)) === chave || normalizar(artigo.titulo) === chave;
  }) || null;
}
function converterDestaquesMarkdown(markdown) {
  let sequencia = 0;
  return markdown.split(/(```[\s\S]*?```)/g).map(bloco => bloco.startsWith("```") ? bloco : bloco.split(/(`[^`\n]*`)/g).map(trecho => trecho.startsWith("`") ? trecho : trecho.replace(/==([^=\n]+)==/g, (_, conteudo) => {
    const id = sequencia++;
    return `@@HL_START_${id}@@${conteudo}@@HL_END_${id}@@`;
  })).join("")).join("");
}
function limparMarkdown(markdown, origem) {
  const limpo = markdown.replace(/^---[\s\S]*?---\s*/, "").replace(/^>\s*\[!(\w+)\]\s*/gm, "> **$1** ").replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, destino, rotulo) => {
    const artigoDestino = encontrarWikiLink(destino, origem);
    return artigoDestino ? `[${rotulo}](#/artigo/${encodeURIComponent(artigoDestino.caminho)})` : rotulo;
  }).replace(/\[\[([^\]]+)\]\]/g, (_, destino) => {
    const artigoDestino = encontrarWikiLink(destino, origem);
    const rotulo = destino.split("#")[0];
    return artigoDestino ? `[${rotulo}](#/artigo/${encodeURIComponent(artigoDestino.caminho)})` : rotulo;
  });
  return converterDestaquesMarkdown(limpo);
}
function aplicarDestaques(corpo) {
  const marcadores = new Map();
  const walker = document.createTreeWalker(corpo, NodeFilter.SHOW_TEXT, { acceptNode: texto => texto.parentElement?.closest("code, pre, script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  while (walker.nextNode()) {
    const texto = walker.currentNode;
    [...texto.nodeValue.matchAll(/@@HL_(START|END)_(\d+)@@/g)].forEach(resultado => {
      const entrada = marcadores.get(resultado[2]) || {};
      entrada[resultado[1].toLowerCase()] = { texto, inicio:resultado.index, fim:resultado.index + resultado[0].length };
      marcadores.set(resultado[2], entrada);
    });
  }
  [...marcadores.values()].reverse().forEach(({ start, end }) => {
    if (!start || !end) return;
    const faixa = document.createRange();
    faixa.setStart(start.texto, start.inicio); faixa.setEnd(end.texto, end.fim);
    const destaque = document.createElement("mark");
    destaque.append(faixa.extractContents()); faixa.insertNode(destaque);
    const limpar = document.createTreeWalker(destaque, NodeFilter.SHOW_TEXT);
    while (limpar.nextNode()) limpar.currentNode.nodeValue = limpar.currentNode.nodeValue.replace(/@@HL_(START|END)_\d+@@/g, "");
  });
}
function removerMetadadosPrivados(corpo) { corpo.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(cabecalho => { if (!/^fontes brutas:?$/i.test(cabecalho.textContent.trim())) return; const nivel = Number(cabecalho.tagName.slice(1)); let proximo = cabecalho.nextElementSibling; cabecalho.remove(); while (proximo) { const seguinte = proximo.nextElementSibling; if (/^H[1-6]$/.test(proximo.tagName) && Number(proximo.tagName.slice(1)) <= nivel) break; proximo.remove(); proximo = seguinte; } }); }
function abrirArtigo(item, atualizarHash = true) {
  if (atualizarHash && window.location.hash !== `#/artigo/${encodeURIComponent(item.caminho)}`) { window.location.hash = `#/artigo/${encodeURIComponent(item.caminho)}`; return; }
  artigoAtual = item; home.hidden = true; topics.hidden = true; article.hidden = false; document.getElementById("article-title").textContent = item.titulo;
  const corpo = document.getElementById("article-body"); corpo.innerHTML = marked.parse(limparMarkdown(item.conteudo, item), { gfm:true, breaks:false });
  aplicarDestaques(corpo);
  const tituloRepetido = corpo.querySelector("h1");
  if (tituloRepetido && normalizar(tituloRepetido.textContent) === normalizar(item.titulo)) tituloRepetido.remove();
  removerMetadadosPrivados(corpo);
  corpo.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((titulo, indice) => titulo.id = titulo.id || `${slug(titulo.textContent)}-${indice}`);
  corpo.querySelectorAll('a[href^="#"]:not([href^="#/"])').forEach(link => link.addEventListener("click", evento => { evento.preventDefault(); document.getElementById(link.getAttribute("href").slice(1))?.scrollIntoView({ behavior:"smooth", block:"start" }); }));
  adicionarCopiarCodigo(corpo); renderizarMermaid(corpo); renderizarBreadcrumbs(item); renderizarToc(corpo); renderizarNav(item); rolarParaTopo();
}
function renderizarBreadcrumbs(item) { const el=document.getElementById("breadcrumbs"); el.innerHTML=`<button type="button" data-home>início</button><span>/</span><button type="button" data-categoria>${escapar(nomesMaterias[item.categoria] || tituloLegivel(item.categoria))}</button><span>/</span><span>${escapar(item.titulo)}</span>`; el.querySelector("[data-home]").addEventListener("click", voltarHome); el.querySelector("[data-categoria]").addEventListener("click", () => abrirMateria(item.categoria)); }
function renderizarToc(corpo) {
  const toc = document.getElementById("toc"); const titulos = [...corpo.querySelectorAll("h1,h2")];
  toc.innerHTML = titulos.map(titulo => `<a href="#${titulo.id}" data-secao="${titulo.id}">${escapar(titulo.textContent)}</a>`).join("");
  toc.querySelectorAll("a").forEach(link => link.addEventListener("click", evento => { evento.preventDefault(); document.getElementById(link.dataset.secao)?.scrollIntoView({ behavior:"smooth", block:"start" }); }));
  document.getElementById("toc-filter").oninput = e => toc.querySelectorAll("a").forEach(link => link.hidden = !normalizar(link.textContent).includes(normalizar(e.target.value)));
  if (atualizarTocAtivo) window.removeEventListener("scroll", atualizarTocAtivo);
  atualizarTocAtivo = () => {
    let atual = titulos[0];
    titulos.forEach(titulo => { if (titulo.getBoundingClientRect().top <= 132) atual = titulo; });
    toc.querySelectorAll("a").forEach(link => link.classList.toggle("is-active", link.dataset.secao === atual?.id));
  };
  window.addEventListener("scroll", atualizarTocAtivo, { passive:true });
  atualizarTocAtivo();
}
function renderizarNav(item) { const lista=ordenarArtigos(artigos.filter(artigo=>artigo.categoria===item.categoria)); const indice=lista.indexOf(item); const destino=[ [lista[indice-1],"← artigo anterior"],[lista[indice+1],"próximo artigo →"] ]; document.getElementById("article-nav").innerHTML=destino.map(([artigo,rotulo])=>artigo?`<button type="button" data-caminho="${escapar(artigo.caminho)}"><span>${rotulo}</span><strong>${escapar(artigo.titulo)}</strong></button>`:"<span></span>").join(""); document.querySelectorAll("#article-nav [data-caminho]").forEach(botao=>botao.addEventListener("click",()=>abrirArtigo(artigos.find(item=>item.caminho===botao.dataset.caminho)))); }
function adicionarCopiarCodigo(corpo) { corpo.querySelectorAll("pre").forEach(pre=>{ const botao=document.createElement("button"); botao.className="copy-button"; botao.textContent="copiar"; botao.addEventListener("click",async()=>{await navigator.clipboard?.writeText(pre.innerText); botao.textContent="copiado"; setTimeout(()=>botao.textContent="copiar",1200);}); pre.append(botao); }); }
async function renderizarMermaid(corpo) { const blocos=[...corpo.querySelectorAll("pre > code.language-mermaid")]; for (const [indice,codigo] of blocos.entries()) { const conteiner=document.createElement("div"); conteiner.className="mermaid"; conteiner.id=`mermaid-${Date.now()}-${indice}`; conteiner.textContent=codigo.textContent; codigo.parentElement.replaceWith(conteiner); try { await mermaid.run({nodes:[conteiner]}); } catch { const pre=document.createElement("pre"); pre.textContent=codigo.textContent; conteiner.replaceWith(pre); } } }
function atualizarNavbar() { topbar.classList.toggle("visible", home.hidden || window.scrollY > 180); }
function rolarParaTopo() { requestAnimationFrame(() => { window.scrollTo({top:0, left:0, behavior:"auto"}); atualizarNavbar(); }); }
function voltarHome(limparBusca = true) { window.history.pushState({},"",window.location.pathname); article.hidden=true; topics.hidden=true; home.hidden=false; if (limparBusca) { search.value=""; homeSearch.value=""; } renderizarHome(); rolarParaTopo(); }
function tratarRota() { const rota=window.location.hash; if(rota.startsWith("#/materia/")) { const categoria=decodeURIComponent(rota.slice("#/materia/".length)); return ordemMaterias.includes(categoria) ? abrirMateria(categoria) : voltarHome(); } if(rota.startsWith("#/artigo/")) { const caminho=decodeURIComponent(rota.slice("#/artigo/".length)); const item=artigos.find(artigo=>artigo.caminho===caminho); return item ? abrirArtigo(item,false) : voltarHome(); } voltarHome(); }
aplicarTema(tema);
document.getElementById("brand").addEventListener("click",voltarHome); document.getElementById("back-button").addEventListener("click",() => abrirMateria(artigoAtual.categoria)); document.getElementById("topics-back-button").addEventListener("click",voltarHome); document.querySelectorAll("[data-theme-toggle]").forEach(botao => botao.addEventListener("click", () => aplicarTema(tema === "dark" ? "light" : "dark"))); homeSearch.addEventListener("input", () => { search.value = homeSearch.value; renderizarHome(); }); search.addEventListener("input", () => { homeSearch.value = search.value; voltarHome(false); }); window.addEventListener("hashchange",tratarRota); window.addEventListener("popstate",tratarRota); window.addEventListener("scroll",atualizarNavbar,{passive:true}); carregarArtigos();
