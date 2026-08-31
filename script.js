// ==========================================
// SCRIPT DE SPA EDITORIAL - CONCURSOS LEORRUAS
// Compatível 1:1 com o Design System da PUC
// ==========================================

async function obterListaDeArquivos() {
    try {
        const resposta = await fetch("https://api.github.com/repos/leorruas/concursos/git/trees/main?recursive=1");
        if (!resposta.ok) throw new Error("Erro na API do GitHub");

        const dados = await resposta.json();

        return dados.tree
            .filter(item => {
                const pathLower = item.path.toLowerCase();
                const fileName = pathLower.split("/").pop();
                
                if (!item.path.endsWith(".md")) return false;
                if (item.path.includes(".obsidian") || item.path.includes(".git") || item.path.includes(".gemini") || item.path.includes(".agent")) return false;
                if (fileName === "agents.md" || fileName === "index.md" || fileName === "me.md" || fileName === "log.md" || fileName === "gemini.md" || fileName === "readme.md") return false;
                if (fileName.includes(" 2.md") || item.path.includes(" 2/")) return false; // Ignora duplicatas de sincronização
                
                // Ignora pastas privadas ou transitórias
                if (item.path.startsWith("00 inbox/") || item.path.startsWith("2 - Editais/") || item.path.startsWith("materias/") || item.path.startsWith("wiki/")) return false;
                if (item.path.startsWith("1 - Planejamento/") || item.path.startsWith("4 - Projetos/")) return false;
                
                return true;
            })
            .map(item => {
                const nomeSemExtensao = item.path.split("/").pop().replace(".md", "");
                const partes = item.path.split("/");
                let categoria = partes.length > 1 ? partes[0] : "Geral";
                
                if (item.path.startsWith("3 - Materias/")) {
                    categoria = partes[1] || "Matérias";
                } else if (item.path.startsWith("00 - Desempenho/Simulados/")) {
                    categoria = "00. Simulados";
                } else if (item.path.startsWith("00 - Desempenho/")) {
                    categoria = "00. Desempenho";
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
        console.warn("Não foi possível listar via GitHub:", erro);
        return [];
    }
}

// Metadados das Disciplinas para o Grid Suíço com Acentuação Correta
const informacoesDisciplinas = {
    "00. Simulados": { numero: "00", nome: "simulados", resumo: "catálogo de simulados, diagnóstico clínico e mapa de calor" },
    "00. Desempenho": { numero: "01", nome: "desempenho", resumo: "avanços globais, log de saturação e métricas de consistência" },
    "Portugues": { numero: "02", nome: "língua portuguesa", resumo: "interpretação, concordância, crase, regência e acordo ortográfico" },
    "Logica": { numero: "03", nome: "raciocínio lógico", resumo: "conectivos, quantificadores, equivalências, tabela verdade e combinatória" },
    "Comunicacao": { numero: "04", nome: "comunicação social", resumo: "comunicação organizacional, pública, digital, crises e teorias" },
    "Informatica": { numero: "05", nome: "informática & legislação digital", resumo: "marco civil da internet, segurança da informação e redes" },
    "Ingles": { numero: "06", nome: "língua inglesa", resumo: "conectivos, marcadores discursivos e leitura instrumental" },
    "Calculo Mental": { numero: "07", nome: "cálculo mental", resumo: "operações mentais, aproximações e agilidade cognitiva" },
    "Direito Constitucional": { numero: "08", nome: "direito constitucional", resumo: "direitos fundamentais, nacionalidade, poderes e controle" },
    "Direito Administrativo": { numero: "09", nome: "direito administrativo", resumo: "princípios, atos, poderes, licitações e responsabilidade civil" },
    "Administracao Publica": { numero: "10", nome: "administração pública", resumo: "modelos de gestão pública, governança e eficiência" },
    "Administracao Geral": { numero: "11", nome: "administração geral", resumo: "planejamento estratégico, processos e teorias" },
    "Atualidades": { numero: "12", nome: "atualidades", resumo: "inteligência artificial, tecnologia e sociedade" },
    "Redacao": { numero: "13", nome: "redação discursiva", resumo: "técnicas discursivas, estrutura argumentativa e repertório" },
    "04. Projetos & Edital": { numero: "14", nome: "projetos & edital", resumo: "dashboards, cronogramas e wiki do edital dataprev/tcdf" },
    "01. Planejamento": { numero: "15", nome: "planejamento", resumo: "cronogramas, horários e editais abertos/previstos" }
};

// Variáveis Globais
let todosOsArtigos = [];
let todasAsPastas = {};
let artigoAtual = null;
let scrollSpyObserver = null;

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
const stickyNav = document.getElementById("sticky-nav");

// Controle de Tema
function aplicarTema(tema, persistir = true) {
    document.documentElement.dataset.theme = tema;
    if (persistir) localStorage.setItem("tema-concursos", tema);
    if (btnTema) {
        const proximoTema = tema === "dark" ? "modo claro" : "modo escuro";
        btnTema.textContent = proximoTema;
        btnTema.setAttribute("aria-label", `Alternar para ${proximoTema}`);
    }
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

function extrairTituloReal(conteudo, nomeArquivoFallback) {
    if (!conteudo) return formatarNomeArtigo(nomeArquivoFallback);
    
    // 1. Tenta extrair do YAML Frontmatter: title: "..." ou title: ...
    const matchYaml = conteudo.match(/^---\s*[\r\n]+[\s\S]*?^title:\s*["']?([^"'\r\n]+)["']?/m);
    if (matchYaml && matchYaml[1]) {
        return matchYaml[1].trim();
    }

    // 2. Tenta extrair do primeiro # H1
    const matchH1 = conteudo.match(/^#\s+([^\r\n]+)/m);
    if (matchH1 && matchH1[1]) {
        return matchH1[1].trim();
    }

    return formatarNomeArtigo(nomeArquivoFallback);
}

function formatarNomeArtigo(nome) {
    if (!nome) return "";
    return nome.replace(/^\d+\s*-\s*/, "").replace(/^\d+\.\s*/, "").trim();
}

function limparNomeCategoria(categoria) {
    if (informacoesDisciplinas[categoria]?.nome) {
        return informacoesDisciplinas[categoria].nome;
    }
    return categoria.replace(/^\d+\.\s*/, "").replace(/^\d+\s*-\s*/, "").toLowerCase();
}

function obterRotaCategoria(categoria) {
    return `#/disciplina/${encodeURIComponent(categoria)}`;
}

function rotaDoArtigo(artigo) {
    return `#/${encodeURIComponent(artigo.categoria)}/${encodeURIComponent(artigo.titulo)}`;
}

// Carregamento de Dados
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
                tituloExibicao: extrairTituloReal(texto, item.titulo),
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

    todasAsPastas = {};
    todosOsArtigos.forEach(artigo => {
        if (!todasAsPastas[artigo.categoria]) {
            todasAsPastas[artigo.categoria] = [];
        }
        todasAsPastas[artigo.categoria].push(artigo);
    });

    Object.values(todasAsPastas).forEach(artigos => {
        artigos.sort((a, b) => (a.sourcePath || a.path).localeCompare(b.sourcePath || b.path, "pt-BR", { numeric: true }));
    });

    renderizarPastas();

    if (window.location.hash) {
        tratarHashNavegacao();
    }
}

// Renderiza a Grade Suíça
function renderizarPastas() {
    const orientacoesContainer = document.getElementById("orientacoes-container");
    const pastasContainer = document.getElementById("pastas-container");
    if (!pastasContainer || !orientacoesContainer) return;

    pastasContainer.innerHTML = "";
    orientacoesContainer.innerHTML = "";

    const todasCategorias = Object.keys(todasAsPastas).sort((a, b) => {
        const numA = informacoesDisciplinas[a]?.numero || "99";
        const numB = informacoesDisciplinas[b]?.numero || "99";
        return numA.localeCompare(numB, "pt-BR", { numeric: true });
    });

    const categoriasOrientacao = ["00. Simulados", "00. Desempenho"];

    todasCategorias.forEach(categoria => {
        const info = informacoesDisciplinas[categoria] || {
            numero: "•",
            resumo: `${todasAsPastas[categoria].length} artigos disponíveis`
        };

        const card = document.createElement("a");
        card.className = "disciplina-card";
        card.href = obterRotaCategoria(categoria);
        card.setAttribute("aria-label", `Abrir ${limparNomeCategoria(categoria)}`);

        card.innerHTML = `
            <span class="indice-numero">${info.numero}</span>
            <span class="disciplina-card-conteudo">
                <strong>${limparNomeCategoria(categoria)}</strong>
                <span class="indice-resumo">${info.resumo}</span>
            </span>
        `;

        card.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirDisciplina(categoria);
        });

        if (categoriasOrientacao.includes(categoria)) {
            orientacoesContainer.appendChild(card);
        } else {
            pastasContainer.appendChild(card);
        }
    });
}

// Visualizador da Disciplina
function abrirDisciplina(categoria, atualizarRota = true) {
    const artigos = todasAsPastas[categoria] || [];
    if (artigos.length === 0) return;

    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    leitorDeDisciplina.classList.remove("escondido");
    artigoAtual = null;

    if (atualizarRota && window.location.hash !== obterRotaCategoria(categoria)) {
        history.pushState({ categoria: categoria }, "", obterRotaCategoria(categoria));
    }

    const breadcrumbs = document.getElementById("disciplina-breadcrumbs");
    breadcrumbs.innerHTML = `
        <button type="button" class="breadcrumb-link" id="btn-bc-home">início</button>
        <span class="breadcrumb-separator">/</span>
        <span>${limparNomeCategoria(categoria)}</span>
    `;
    document.getElementById("btn-bc-home")?.addEventListener("click", () => voltarParaHome(true));

    disciplinaCabecalho.innerHTML = `
        <p class="disciplina-rotulo">matéria • ${artigos.length} artigos</p>
        <h2>${limparNomeCategoria(categoria)}</h2>
    `;

    disciplinaAcoes.innerHTML = "";
    artigos.forEach((artigo, idx) => {
        const acao = document.createElement("a");
        acao.className = "disciplina-acao";
        acao.href = rotaDoArtigo(artigo);
        acao.setAttribute("aria-label", artigo.titulo);

        const numeroFormatado = String(idx + 1).padStart(2, "0");
        const tituloFormatado = artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo);

        acao.innerHTML = `
            <span class="disciplina-acao-numero">${numeroFormatado}</span>
            <span class="disciplina-acao-conteudo">
                <strong>${tituloFormatado}</strong>
            </span>
        `;

        acao.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirArtigo(artigo);
        });

        disciplinaAcoes.appendChild(acao);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Leitor de Artigo Individual
function abrirArtigo(artigo, atualizarRota = true) {
    artigoAtual = artigo;
    if (atualizarRota && window.location.hash !== rotaDoArtigo(artigo)) {
        history.pushState({ artigo: artigo.titulo, categoria: artigo.categoria }, "", rotaDoArtigo(artigo));
    }

    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.add("escondido");
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.remove("escondido");

    const breadcrumbs = document.getElementById("artigo-breadcrumbs");
    breadcrumbs.innerHTML = `
        <button type="button" class="breadcrumb-link" id="btn-bc-art-home">início</button>
        <span class="breadcrumb-separator">/</span>
        <button type="button" class="breadcrumb-link" id="btn-bc-art-cat">${limparNomeCategoria(artigo.categoria)}</button>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-atual">${artigo.titulo}</span>
    `;
    document.getElementById("btn-bc-art-home")?.addEventListener("click", () => voltarParaHome(true));
    document.getElementById("btn-bc-art-cat")?.addEventListener("click", () => abrirDisciplina(artigo.categoria));

    artigoTitulo.textContent = artigo.titulo;

    const markdownLimpo = removerFrontmatter(artigo.conteudo);
    marked.setOptions({ gfm: true, breaks: true });
    artigoCorpo.innerHTML = marked.parse(markdownLimpo);

    processarWikilinks(artigoCorpo);

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

    renderizarDiagramasMermaid();
    gerarTableOfContents();
    renderizarBotoesNavegacao(artigo);

    btnVoltar.textContent = `← voltar para ${limparNomeCategoria(artigo.categoria)}`;
    btnVoltar.onclick = () => abrirDisciplina(artigo.categoria);
    if (retornoArtigoTexto) {
        retornoArtigoTexto.innerHTML = `terminou este artigo? <strong>continue pelas outras notas de ${limparNomeCategoria(artigo.categoria)}.</strong>`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderizarBotoesNavegacao(artigoAtual) {
    const rodapeNavContainer = document.getElementById("artigo-nav-rodape");
    if (!rodapeNavContainer) return;

    rodapeNavContainer.innerHTML = "";

    const artigosDaCategoria = todasAsPastas[artigoAtual.categoria] || [];
    if (artigosDaCategoria.length <= 1) return;

    const indiceAtual = artigosDaCategoria.findIndex(a => a.titulo === artigoAtual.titulo);
    if (indiceAtual === -1) return;

    const artigoAnterior = indiceAtual > 0 ? artigosDaCategoria[indiceAtual - 1] : null;
    const artigoProximo = indiceAtual < artigosDaCategoria.length - 1 ? artigosDaCategoria[indiceAtual + 1] : null;

    if (!artigoAnterior && !artigoProximo) return;

    const grid = document.createElement("div");
    grid.className = "artigo-nav-cards-grid";

    if (artigoAnterior) {
        const cardPrev = document.createElement("a");
        cardPrev.className = "nav-card nav-card-prev";
        cardPrev.href = rotaDoArtigo(artigoAnterior);
        const tituloLimpo = artigoAnterior.tituloExibicao || formatarNomeArtigo(artigoAnterior.titulo);
        cardPrev.innerHTML = `
            <span class="nav-card-label">← anterior</span>
            <span class="nav-card-title">${tituloLimpo}</span>
        `;
        cardPrev.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirArtigo(artigoAnterior);
        });
        grid.appendChild(cardPrev);
    } else {
        const placeholder = document.createElement("div");
        placeholder.className = "nav-card nav-card-placeholder";
        grid.appendChild(placeholder);
    }

    if (artigoProximo) {
        const cardNext = document.createElement("a");
        cardNext.className = "nav-card nav-card-next";
        cardNext.href = rotaDoArtigo(artigoProximo);
        const tituloLimpo = artigoProximo.tituloExibicao || formatarNomeArtigo(artigoProximo.titulo);
        cardNext.innerHTML = `
            <span class="nav-card-label">próximo →</span>
            <span class="nav-card-title">${tituloLimpo}</span>
        `;
        cardNext.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirArtigo(artigoProximo);
        });
        grid.appendChild(cardNext);
    } else {
        const placeholder = document.createElement("div");
        placeholder.className = "nav-card nav-card-placeholder";
        grid.appendChild(placeholder);
    }

    rodapeNavContainer.appendChild(grid);
}

// Table of Contents (TOC) da Barra Lateral
function gerarTableOfContents() {
    const tocNavDesktop = document.getElementById("toc-nav");
    const tocSidebar = document.getElementById("artigo-toc-sidebar");
    if (!tocNavDesktop) return;

    tocNavDesktop.innerHTML = "";

    // Pega H2 e H3 do artigo
    const headings = Array.from(artigoCorpo.querySelectorAll("h2, h3"));

    if (headings.length === 0) {
        if (tocSidebar) tocSidebar.style.display = "none";
        return;
    }

    if (tocSidebar) tocSidebar.style.display = "block";

    const listaDesktop = document.createElement("ul");
    listaDesktop.className = "toc-list";

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-toc-${index}`;
        }

        const liDesktop = document.createElement("li");
        liDesktop.className = "toc-item";
        const linkDesktop = document.createElement("a");
        linkDesktop.textContent = heading.textContent.replace(/^[0-9.]+\s*/, "").toLowerCase();
        linkDesktop.href = `#${heading.id}`;
        linkDesktop.setAttribute("data-target", heading.id);

        if (heading.tagName.toLowerCase() === "h3") {
            linkDesktop.style.paddingLeft = "16px";
            linkDesktop.style.fontSize = "0.74rem";
        }

        linkDesktop.addEventListener("click", (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        liDesktop.appendChild(linkDesktop);
        listaDesktop.appendChild(liDesktop);
    });

    tocNavDesktop.appendChild(listaDesktop);

    const tocFilterInput = document.getElementById("toc-filter-input");
    if (tocFilterInput) {
        tocFilterInput.value = "";
        tocFilterInput.oninput = (e) => {
            const query = e.target.value.toLowerCase().trim();
            const items = listaDesktop.querySelectorAll(".toc-item");
            items.forEach(item => {
                const link = item.querySelector("a");
                if (!link) return;
                const match = link.textContent.toLowerCase().includes(query);
                item.style.display = match ? "block" : "none";
            });
        };
    }

    inicializarScrollspyTOC(headings);
}

function inicializarScrollspyTOC(headings) {
    if (scrollSpyObserver) {
        scrollSpyObserver.disconnect();
    }

    scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const links = document.querySelectorAll(`.toc-list a[data-target="${id}"]`);
                document.querySelectorAll(".toc-list a").forEach(a => a.classList.remove("toc-active"));
                links.forEach(a => a.classList.add("toc-active"));
            }
        });
    }, {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0.1
    });

    headings.forEach(heading => scrollSpyObserver.observe(heading));
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

function configurarMermaid() {
    if (typeof mermaid === "undefined") return;
    const temaEscuro = document.documentElement.dataset.theme !== "light";
    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily: "Archivo, sans-serif",
        themeVariables: temaEscuro ? {
            fontFamily: "Archivo, sans-serif",
            darkMode: true,
            background: "#101010",
            primaryColor: "#182431",
            primaryTextColor: "#f1f0eb",
            primaryBorderColor: "#6fa8e8",
            lineColor: "#9ab0c5"
        } : {
            fontFamily: "Archivo, sans-serif",
            darkMode: false,
            background: "#ffffff",
            primaryColor: "#eef5fc",
            primaryTextColor: "#151515",
            primaryBorderColor: "#1c5f9f",
            lineColor: "#3f6282"
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
    mermaid.run({ nodes: diagramas }).catch(err => console.error("Erro Mermaid:", err));
}

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
        containerResultados.innerHTML = `<p class="mensagem-busca">digite ao menos <strong>duas letras</strong> para pesquisar.</p>`;
        return;
    }

    const filtrados = todosOsArtigos.filter(artigo => 
        artigo.titulo.toLowerCase().includes(termo) || artigo.conteudo.toLowerCase().includes(termo)
    );

    exibirResultados(filtrados, termo);
}

function exibirResultados(artigos, termo = "") {
    containerResultados.innerHTML = "";
    if (artigos.length === 0) {
        containerResultados.innerHTML = `<p class="mensagem-busca">nenhum artigo encontrado para “${escaparHtml(termo)}”.</p>`;
        return;
    }

    const resumo = document.createElement("p");
    resumo.className = "resumo-busca";
    resumo.textContent = `${artigos.length} ${artigos.length === 1 ? "artigo encontrado" : "artigos encontrados"}`;
    containerResultados.appendChild(resumo);

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

        const subCards = document.createElement("div");
        subCards.className = "resultados-lista";

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

            subCards.appendChild(card);
        });

        grupoDiv.appendChild(subCards);
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

function tratarHashNavegacao() {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") {
        voltarParaHome(false);
        return;
    }

    const rotaLimpa = decodeURIComponent(hash.replace(/^#\/?/, "").trim());
    
    if (rotaLimpa.startsWith("disciplina/")) {
        const categoria = rotaLimpa.replace("disciplina/", "").trim();
        abrirDisciplina(categoria, false);
        return;
    }

    const partes = rotaLimpa.split("/");
    if (partes.length >= 2) {
        const [categoria, ...resto] = partes;
        const nomeArtigo = resto.join("/");
        const artigo = todosOsArtigos.find(a => 
            a.categoria.toLowerCase() === categoria.toLowerCase() && 
            a.titulo.toLowerCase() === nomeArtigo.toLowerCase()
        );
        if (artigo) {
            abrirArtigo(artigo, false);
            return;
        }
    }
}

function voltarParaHome(atualizarRota = true) {
    if (atualizarRota) {
        window.location.hash = "#/";
    }
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("popstate", () => {
    tratarHashNavegacao();
});

// Event Listeners
window.addEventListener("scroll", () => {
    if (!stickyNav) return;
    if (window.scrollY > 80) {
        stickyNav.classList.add("visible");
    } else {
        stickyNav.classList.remove("visible");
    }
});

const mainTitle = document.getElementById("home-title");
if (mainTitle) {
    mainTitle.addEventListener("click", () => voltarParaHome(true));
}

const navLinkPastas = document.getElementById("nav-link-pastas");
if (navLinkPastas) {
    navLinkPastas.addEventListener("click", (e) => {
        e.preventDefault();
        voltarParaHome(true);
        const pastasContainer = document.getElementById("explorar-disciplinas");
        if (pastasContainer) {
            pastasContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

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
    btnVoltarDisciplina.addEventListener("click", () => voltarParaHome(true));
}

document.getElementById("nav-logo")?.addEventListener("click", () => voltarParaHome(true));

carregarTodosOsArtigos();
