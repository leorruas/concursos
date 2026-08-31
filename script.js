// Função para buscar automaticamente todos os arquivos .md do GitHub leorruas/concursos
async function obterListaDeArquivos() {
    try {
        const resposta = await fetch("https://api.github.com/repos/leorruas/concursos/git/trees/main?recursive=1");
        if (!resposta.ok) throw new Error("Erro na API do GitHub");

        const dados = await resposta.json();

        // Filtra apenas os arquivos Markdown (.md), ignorando arquivos de sistema, index raiz e regras de agentes
        return dados.tree
            .filter(item => {
                const pathLower = item.path.toLowerCase();
                const fileName = pathLower.split("/").pop();
                
                if (!item.path.endsWith(".md")) return false;
                if (item.path.includes(".obsidian") || item.path.includes(".git") || item.path.includes(".gemini") || item.path.includes(".agent")) return false;
                if (fileName === "agents.md" || fileName === "index.md" || fileName === "me.md" || fileName === "log.md" || fileName === "gemini.md" || fileName === "readme.md") return false;
                if (fileName.includes(" 2.md")) return false; // Ignora duplicatas de sincronização iCloud
                
                return true;
            })
            .map(item => {
                const nomeSemExtensao = item.path.split("/").pop().replace(".md", "");
                const partes = item.path.split("/");
                let categoria = partes.length > 1 ? partes[0] : "Geral";
                
                // Normalização das pastas para exibição organizada
                if (item.path.startsWith("3 - Materias/")) {
                    categoria = partes[1] || "3 - Materias";
                } else if (item.path.startsWith("00 - Desempenho/Simulados/")) {
                    categoria = "00. Simulados";
                } else if (item.path.startsWith("00 - Desempenho/")) {
                    categoria = "00. Desempenho";
                } else if (item.path.startsWith("4 - Projetos/")) {
                    categoria = "04. Projetos & Edital";
                } else if (item.path.startsWith("1 - Planejamento/")) {
                    categoria = "01. Planejamento";
                } else if (item.path.startsWith("2 - Editais/")) {
                    categoria = "02. Editais";
                }

                const urlSegura = "https://raw.githubusercontent.com/leorruas/concursos/main/" + item.path.split("/").map(encodeURIComponent).join("/");
                return {
                    titulo: nomeSemExtensao,
                    path: urlSegura,
                    sourcePath: item.path,
                    categoria: categoria
                };
            });
    } catch (erro) {
        console.warn("Não foi possível listar via GitHub, usando lista estática de fallback:", erro);
        return [];
    }
}

// Descrições e Metadados das Categorias / Matérias para o Design Suíço
const informacoesDisciplinas = {
    "00. Simulados": { numero: "00", resumo: "catálogo de simulados, diagnóstico de erros e mapa de calor" },
    "00. Desempenho": { numero: "01", resumo: "avanços globais, log de saturação e métricas de consistência" },
    "Portugues": { numero: "02", resumo: "interpretação, concordância, crase, regência e acordo ortográfico" },
    "Logica": { numero: "03", resumo: "conectivos, quantificadores, equivalências, tabela verdade e combinatória" },
    "Comunicacao": { numero: "04", resumo: "comunicação organizacional, pública, digital, crises e teorias" },
    "Informatica": { numero: "05", resumo: "marco civil da internet, segurança da informação e sistemas" },
    "Ingles": { numero: "06", resumo: "conectivos, marcadores discursivos e leitura instrumental" },
    "Calculo Mental": { numero: "07", resumo: "operações rápidas, aproximações e treinamento cognitivo" },
    "Direito Constitucional": { numero: "08", resumo: "direitos fundamentais, nacionalidade, poderes e controle" },
    "Direito Administrativo": { numero: "09", resumo: "princípios, atos, poderes, licitações e responsabilidade civil" },
    "Administracao Publica": { numero: "10", resumo: "modelos de gestão, governança, políticas públicas e eficiência" },
    "Administracao Geral": { numero: "11", resumo: "planejamento estratégico, processos e teorias administrativas" },
    "Atualidades": { numero: "12", resumo: "inteligência artificial, tecnologia e sociedade" },
    "Redacao": { numero: "13", resumo: "técnicas discursivas, estrutura argumentativa e repertório" },
    "04. Projetos & Edital": { numero: "14", resumo: "dashboards, cronogramas e wiki do edital dataprev/tcdf" },
    "01. Planejamento": { numero: "15", resumo: "cronogramas, horários e editais abertos/previstos" }
};

// Variáveis globais
let todosOsArtigos = [];
let todasAsPastas = {};
let artigoAtual = null;

const campoTexto = document.getElementById("main-search-input");
const campoTextoNav = document.getElementById("nav-search-input");
const containerResultados = document.querySelector(".cards-container");
const divResultados = document.getElementById("resultados");
const leitorDeArtigo = document.getElementById("leitor-artigo");
const leitorDeDisciplina = document.getElementById("disciplina-leitor");
const disciplinaCabecalho = document.getElementById("disciplina-cabecalho");
const disciplinaAcoes = document.getElementById("disciplina-acoes");
const artigoTitulo = document.getElementById("artigo-titulo");
const artigoCorpo = document.getElementById("artigo-corpo");
const btnVoltar = document.getElementById("btn-voltar");
const btnVoltarDisciplina = document.getElementById("btn-voltar-disciplina");
const retornoArtigoTexto = document.getElementById("retorno-artigo-texto");
const btnTema = document.getElementById("theme-toggle");

// Controle de Tema (Claro / Escuro)
function aplicarTema(tema, persistir = true) {
    document.documentElement.dataset.theme = tema;
    if (persistir) localStorage.setItem("tema-concursos", tema);
    if (btnTema) {
        const proximoTema = tema === "dark" ? "modo claro" : "modo escuro";
        btnTema.textContent = proximoTema;
        btnTema.setAttribute("aria-label", `Alternar para ${proximoTema}`);
    }
}

function configurarMermaid() {
    if (typeof mermaid === "undefined") return;

    const temaEscuro = document.documentElement.dataset.theme !== "light";
    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily: "Archivo, sans-serif",
        fontSize: 16,
        flowchart: {
            curve: "linear",
            defaultRenderer: "dagre-wrapper",
            nodeSpacing: 42,
            rankSpacing: 56,
            padding: 16
        },
        themeVariables: temaEscuro ? {
            fontFamily: "Archivo, sans-serif",
            fontSize: "16px",
            darkMode: true,
            background: "#101010",
            primaryColor: "#182431",
            primaryTextColor: "#f1f0eb",
            primaryBorderColor: "#6fa8e8",
            lineColor: "#9ab0c5",
            secondaryColor: "#15191d",
            tertiaryColor: "#20262d"
        } : {
            fontFamily: "Archivo, sans-serif",
            fontSize: "16px",
            darkMode: false,
            background: "#ffffff",
            primaryColor: "#eef5fc",
            primaryTextColor: "#151515",
            primaryBorderColor: "#1c5f9f",
            lineColor: "#3f6282",
            secondaryColor: "#f7f9fc",
            tertiaryColor: "#e8f0f8"
        }
    });
}

function renderizarDiagramasMermaid() {
    if (typeof mermaid === "undefined" || !artigoCorpo) return;
    configurarMermaid();

    const diagramas = artigoCorpo.querySelectorAll(".mermaid");
    diagramas.forEach(diagrama => {
        const codigo = diagrama.dataset.mermaidSource || diagrama.textContent;
        diagrama.dataset.mermaidSource = codigo;
        diagrama.removeAttribute("data-processed");
        diagrama.textContent = codigo;
    });

    mermaid.run({ nodes: diagramas }).catch(err => {
        console.error("Erro ao renderizar Mermaid:", err);
    });
}

function inicializarTema() {
    const temaSalvo = localStorage.getItem("tema-concursos");
    const temaDoSistema = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    aplicarTema(temaSalvo || temaDoSistema, false);
}

if (btnTema) {
    btnTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.dataset.theme === "light" ? "light" : "dark";
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        aplicarTema(novoTema, true);
        renderizarDiagramasMermaid();
    });
}

function limparNomeCategoria(categoria) {
    return categoria.replace(/^\d+\.\s*/, "").replace(/^\d+\s*-\s*/, "").toLowerCase();
}

function obterRotaCategoria(categoria) {
    return `#/disciplina/${encodeURIComponent(categoria)}`;
}

function rotaDoArtigo(artigo) {
    return `#/${encodeURIComponent(artigo.categoria)}/${encodeURIComponent(artigo.titulo)}`;
}

// Carrega os arquivos e busca o conteúdo Markdown
async function carregarTodosOsArtigos() {
    inicializarTema();
    const lista = await obterListaDeArquivos();

    const promessas = lista.map(async (item) => {
        try {
            const res = await fetch(item.path);
            if (!res.ok) return null;
            const texto = await res.text();
            
            return {
                titulo: item.titulo,
                conteudo: texto,
                sourcePath: item.sourcePath,
                categoria: item.categoria
            };
        } catch (e) {
            console.error("Erro ao baixar:", item.path, e);
            return null;
        }
    });

    const resultados = await Promise.all(promessas);
    todosOsArtigos = resultados.filter(Boolean);

    // Organiza por categorias
    todasAsPastas = {};
    todosOsArtigos.forEach(artigo => {
        if (!todasAsPastas[artigo.categoria]) {
            todasAsPastas[artigo.categoria] = [];
        }
        todasAsPastas[artigo.categoria].push(artigo);
    });

    // Ordena artigos dentro de cada categoria
    Object.keys(todasAsPastas).forEach(cat => {
        todasAsPastas[cat].sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR", { numeric: true }));
    });

    renderizarOrientacoesIniciais();
    renderizarCardsDisciplinas();
    processarRotaInicial();
}

// Renderiza a Seção de Destaque no Topo (Simulados & Desempenho)
function renderizarOrientacoesIniciais() {
    const container = document.getElementById("orientacoes-container");
    if (!container) return;
    container.innerHTML = "";

    const destaques = ["00. Simulados", "00. Desempenho"];
    destaques.forEach(categoria => {
        const artigos = todasAsPastas[categoria] || [];
        const info = informacoesDisciplinas[categoria] || { numero: "00", resumo: "métricas e simulados" };

        const card = document.createElement("a");
        card.className = "pasta-card card-orientacao";
        card.href = obterRotaCategoria(categoria);

        card.innerHTML = `
            <div class="pasta-card-topo">
                <span class="pasta-numero">${info.numero}</span>
                <span class="pasta-artigos-total">${artigos.length} ${artigos.length === 1 ? "documento" : "documentos"}</span>
            </div>
            <h3 class="pasta-nome">${limparNomeCategoria(categoria)}</h3>
            <p class="pasta-resumo">${info.resumo}</p>
        `;

        card.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            window.location.hash = `/disciplina/${encodeURIComponent(categoria)}`;
        });

        container.appendChild(card);
    });
}

// Renderiza a Grade Suíça de Matérias
function renderizarCardsDisciplinas() {
    const container = document.getElementById("pastas-container");
    if (!container) return;
    container.innerHTML = "";

    const categoriasParaIgnorar = ["00. Simulados", "00. Desempenho"];
    const categorias = Object.keys(todasAsPastas).filter(c => !categoriasParaIgnorar.includes(c));

    categorias.sort((a, b) => {
        const numA = informacoesDisciplinas[a]?.numero || "99";
        const numB = informacoesDisciplinas[b]?.numero || "99";
        return numA.localeCompare(numB, "pt-BR", { numeric: true });
    });

    categorias.forEach((categoria, index) => {
        const artigos = todasAsPastas[categoria] || [];
        const info = informacoesDisciplinas[categoria] || {
            numero: String(index + 1).padStart(2, "0"),
            resumo: "disciplina do edital"
        };

        const card = document.createElement("a");
        card.className = "pasta-card";
        card.href = obterRotaCategoria(categoria);

        card.innerHTML = `
            <div class="pasta-card-topo">
                <span class="pasta-numero">${info.numero}</span>
                <span class="pasta-artigos-total">${artigos.length} ${artigos.length === 1 ? "artigo" : "artigos"}</span>
            </div>
            <h3 class="pasta-nome">${limparNomeCategoria(categoria)}</h3>
            <p class="pasta-resumo">${info.resumo}</p>
        `;

        card.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            window.location.hash = `/disciplina/${encodeURIComponent(categoria)}`;
        });

        container.appendChild(card);
    });
}

// Visualizador da Disciplina / Categoria
function abrirDisciplina(categoria) {
    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    divResultados.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    leitorDeDisciplina.classList.remove("escondido");

    const artigos = todasAsPastas[categoria] || [];
    const info = informacoesDisciplinas[categoria] || { numero: "00", resumo: "" };

    // Breadcrumbs
    const breadcrumbs = document.getElementById("disciplina-breadcrumbs");
    breadcrumbs.innerHTML = `
        <a href="#/" class="breadcrumb-link">início</a>
        <span class="breadcrumb-separador">/</span>
        <span class="breadcrumb-atual">${limparNomeCategoria(categoria)}</span>
    `;

    // Cabeçalho
    disciplinaCabecalho.innerHTML = `
        <span class="disciplina-numero">${info.numero}</span>
        <h2 class="disciplina-titulo-principal">${limparNomeCategoria(categoria)}</h2>
        <p class="disciplina-descricao">${info.resumo}</p>
        <span class="disciplina-total-badge">${artigos.length} ${artigos.length === 1 ? "artigo no módulo" : "artigos no módulo"}</span>
    `;

    // Lista de Artigos
    disciplinaAcoes.innerHTML = "";
    artigos.forEach((artigo, idx) => {
        const item = document.createElement("a");
        item.className = "artigo-lista-card";
        item.href = rotaDoArtigo(artigo);

        item.innerHTML = `
            <span class="artigo-lista-num">${String(idx + 1).padStart(2, "0")}</span>
            <div class="artigo-lista-info">
                <strong class="artigo-lista-titulo">${artigo.titulo}</strong>
                <span class="artigo-lista-caminho">${artigo.sourcePath}</span>
            </div>
            <span class="artigo-lista-seta">&rarr;</span>
        `;

        item.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirArtigo(artigo);
        });

        disciplinaAcoes.appendChild(item);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Leitor de Artigo com TOC Lateral e KaTeX/Mermaid
function abrirArtigo(artigo) {
    artigoAtual = artigo;
    window.location.hash = rotaDoArtigo(artigo);

    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.add("escondido");
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.remove("escondido");

    // Breadcrumbs
    const breadcrumbs = document.getElementById("artigo-breadcrumbs");
    breadcrumbs.innerHTML = `
        <a href="#/" class="breadcrumb-link">início</a>
        <span class="breadcrumb-separador">/</span>
        <a href="${obterRotaCategoria(artigo.categoria)}" class="breadcrumb-link" id="breadcrumb-categoria">${limparNomeCategoria(artigo.categoria)}</a>
        <span class="breadcrumb-separador">/</span>
        <span class="breadcrumb-atual">${artigo.titulo}</span>
    `;

    artigoTitulo.textContent = artigo.titulo;

    // Remove frontmatter para renderização do corpo
    const markdownLimpo = removerFrontmatter(artigo.conteudo);
    
    // Configura marked
    marked.setOptions({
        gfm: true,
        breaks: true
    });

    artigoCorpo.innerHTML = marked.parse(markdownLimpo);

    // Trata links internos Obsidian [[Link|Texto]]
    processarWikilinks(artigoCorpo);

    // Renderiza KaTeX se disponível
    if (typeof renderMathInElement !== "undefined") {
        renderMathInElement(artigoCorpo, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true }
            ],
            throwOnError: false
        });
    }

    // Renderiza Mermaid
    renderizarDiagramasMermaid();

    // Gera Table of Contents (TOC)
    gerarTOC();

    // Configura Botão de Voltar
    btnVoltar.onclick = () => abrirDisciplina(artigo.categoria);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function processarWikilinks(container) {
    const html = container.innerHTML;
    const regex = /\[\[(.*?)\]\]/g;
    container.innerHTML = html.replace(regex, (match, p1) => {
        let destino = p1;
        let rotulo = p1;
        if (p1.includes("|")) {
            const partes = p1.split("|");
            destino = partes[0];
            rotulo = partes[1];
        }
        
        // Remove âncoras de cabeçalho para busca do arquivo
        const nomeArquivo = destino.split("#")[0].split("/").pop();
        const artigoDestino = todosOsArtigos.find(a => a.titulo.toLowerCase() === nomeArquivo.toLowerCase());
        
        if (artigoDestino) {
            return `<a href="${rotaDoArtigo(artigoDestino)}" class="wikilink" data-artigo="${artigoDestino.titulo}">${rotulo}</a>`;
        }
        return `<span class="wikilink-texto">${rotulo}</span>`;
    });

    container.querySelectorAll("a.wikilink").forEach(link => {
        link.addEventListener("click", (e) => {
            const nome = link.dataset.artigo;
            const dest = todosOsArtigos.find(a => a.titulo === nome);
            if (dest) {
                e.preventDefault();
                abrirArtigo(dest);
            }
        });
    });
}

function gerarTOC() {
    const tocNav = document.getElementById("toc-nav");
    if (!tocNav) return;
    tocNav.innerHTML = "";

    const headers = artigoCorpo.querySelectorAll("h2, h3, h4");
    if (headers.length === 0) {
        tocNav.innerHTML = `<span class="toc-vazio">sem subtítulos</span>`;
        return;
    }

    headers.forEach((h, index) => {
        const id = h.id || `secao-${index}`;
        h.id = id;

        const link = document.createElement("a");
        link.className = `toc-link toc-${h.tagName.toLowerCase()}`;
        link.href = `#${id}`;
        link.textContent = h.textContent.replace(/^[0-9.]+\s*/, "");

        link.addEventListener("click", (e) => {
            e.preventDefault();
            h.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        tocNav.appendChild(link);
    });
}

// Filtro de Busca em Tempo Real
function filtrarArtigos(termoBusca) {
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");

    if (!termoBusca || termoBusca.trim() === "") {
        divResultados.classList.add("escondido");
        containerResultados.innerHTML = "";
        document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
        document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
        return;
    }

    const termo = termoBusca.toLowerCase().trim();

    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.remove("escondido");

    if (termo.length < 2) {
        containerResultados.innerHTML = `<p class="mensagem-busca">digite ao menos <strong>duas letras</strong> para pesquisar no vault.</p>`;
        return;
    }

    const filtrados = todosOsArtigos
        .filter(artigo => artigo.titulo.toLowerCase().includes(termo) || artigo.conteudo.toLowerCase().includes(termo))
        .sort((a, b) => {
            const prioridadeA = a.titulo.toLowerCase().includes(termo) ? 0 : 1;
            const prioridadeB = b.titulo.toLowerCase().includes(termo) ? 0 : 1;
            return prioridadeA - prioridadeB || a.titulo.localeCompare(b.titulo, "pt-BR", { numeric: true });
        });

    exibirResultados(filtrados, termo);
}

function exibirResultados(artigos, termo = "") {
    containerResultados.innerHTML = "";
    if (artigos.length === 0) {
        containerResultados.innerHTML = `<p class="mensagem-busca">nenhum conteúdo encontrado para <strong>“${escaparHtml(termo)}”</strong>.</p>`;
        return;
    }

    const resumoBusca = document.createElement("p");
    resumoBusca.className = "resumo-busca";
    resumoBusca.textContent = `${artigos.length} ${artigos.length === 1 ? "resultado encontrado" : "resultados encontrados"}`;
    containerResultados.appendChild(resumoBusca);

    const grupos = {};
    artigos.forEach(artigo => {
        if (!grupos[artigo.categoria]) grupos[artigo.categoria] = [];
        grupos[artigo.categoria].push(artigo);
    });

    Object.keys(grupos).forEach(categoria => {
        const grupoDiv = document.createElement("div");
        grupoDiv.className = "busca-grupo-assunto";

        const tituloGrupo = document.createElement("h3");
        tituloGrupo.className = "busca-assunto-titulo";
        tituloGrupo.textContent = limparNomeCategoria(categoria);
        grupoDiv.appendChild(tituloGrupo);

        const subCardsContainer = document.createElement("div");
        subCardsContainer.className = "resultados-lista";

        grupos[categoria].forEach((artigo, idx) => {
            const card = document.createElement("a");
            card.className = "resultado-item";
            card.href = rotaDoArtigo(artigo);

            card.innerHTML = `
                <span class="resultado-numero">${String(idx + 1).padStart(2, "0")}</span>
                <span class="resultado-conteudo">
                    <strong>${destacarTexto(artigo.titulo, termo)}</strong>
                    <span class="resultado-trecho">${destacarTexto(extrairTrechoRelevante(artigo.conteudo, termo), termo)}</span>
                </span>
            `;

            card.addEventListener("click", (e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
                e.preventDefault();
                abrirArtigo(artigo);
            });

            subCardsContainer.appendChild(card);
        });

        grupoDiv.appendChild(subCardsContainer);
        containerResultados.appendChild(grupoDiv);
    });
}

function destacarTexto(texto, termo) {
    if (!termo) return texto;
    const regex = new RegExp(`(${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return texto.replace(regex, '<mark class="highlight">$1</mark>');
}

function escaparHtml(texto) {
    const el = document.createElement("span");
    el.textContent = texto;
    return el.innerHTML;
}

function removerFrontmatter(markdown) {
    if (!markdown) return "";
    return markdown.replace(/^---[\s\S]*?---\s*/, "");
}

function extrairTrechoRelevante(conteudo, termo) {
    const semFm = removerFrontmatter(conteudo).replace(/[#*`_~\[\]]/g, ' ');
    const pos = semFm.toLowerCase().indexOf(termo.toLowerCase());
    if (pos === -1) return semFm.substring(0, 140) + "...";
    
    const inicio = Math.max(0, pos - 40);
    const fim = Math.min(semFm.length, pos + termo.length + 80);
    let trecho = semFm.substring(inicio, fim);
    if (inicio > 0) trecho = "..." + trecho;
    if (fim < semFm.length) trecho = trecho + "...";
    return trecho;
}

// Router por Hash
function processarRotaInicial() {
    const hash = window.location.hash;
    if (!hash || hash === "#/" || hash === "#") {
        voltarParaHome();
        return;
    }

    if (hash.startsWith("#/disciplina/")) {
        const cat = decodeURIComponent(hash.replace("#/disciplina/", ""));
        abrirDisciplina(cat);
    } else if (hash.startsWith("#/")) {
        const partes = hash.replace("#/", "").split("/");
        if (partes.length >= 2) {
            const cat = decodeURIComponent(partes[0]);
            const tit = decodeURIComponent(partes[1]);
            const art = todosOsArtigos.find(a => a.categoria === cat && a.titulo === tit);
            if (art) {
                abrirArtigo(art);
            }
        }
    }
}

function voltarParaHome() {
    window.location.hash = "#/";
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", processarRotaInicial);

// Event Listeners de Busca e Navegação
if (campoTexto) {
    campoTexto.addEventListener("input", (e) => {
        if (campoTextoNav) campoTextoNav.value = e.target.value;
        filtrarArtigos(e.target.value);
    });
}

if (campoTextoNav) {
    campoTextoNav.addEventListener("input", (e) => {
        if (campoTexto) campoTexto.value = e.target.value;
        filtrarArtigos(e.target.value);
    });
}

if (btnVoltarDisciplina) {
    btnVoltarDisciplina.addEventListener("click", voltarParaHome);
}

document.getElementById("nav-logo")?.addEventListener("click", voltarParaHome);
document.getElementById("nav-link-pastas")?.addEventListener("click", voltarParaHome);

// Inicia aplicação
carregarTodosOsArtigos();
