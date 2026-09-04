// ==========================================================================
// SCRIPT DE SPA EDITORIAL - CONCURSOS LEORRUAS
// Design System Editorial Suíço • Biblioteca de Conhecimento e Camada Estratégica
// ==========================================================================

// --------------------------------------------------------------------------
// 1. ESTADO GLOBAL E CACHE EM MEMÓRIA
// --------------------------------------------------------------------------

let todosOsArtigos = [];
let todasAsPastas = {};
let artigoAtual = null;
let scrollSpyObserver = null;
let indiceDeBuscaPronto = false;
let timeoutDebounceBusca = null;
let proximoIdRenderizacaoMermaid = 0;

// Cache em memória para conteúdo de artigos carregados sob demanda ou em lote
const cacheArtigos = new Map();

// Elementos principais do DOM
const campoTexto = document.getElementById("main-search-input");
const campoTextoNav = document.getElementById("nav-search-input");
const btnLimparMain = document.getElementById("btn-limpar-main");
const btnLimparNav = document.getElementById("btn-limpar-nav");
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

// Metadados das Disciplinas para a Grade Suíça
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

// Dados da Camada Estratégica
let dadosConcursosEstrategicos = [];
let dadosEditalEstrategico = [];
let dadosErrosEstrategicos = [];
let concursoSelecionadoId = localStorage.getItem("concurso_ativo_id") || "dataprev-2026";

// --------------------------------------------------------------------------
// 2. TEMA (CLARO / ESCURO)
// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------
// 3. UTILITÁRIOS E NORMALIZAÇÃO
// --------------------------------------------------------------------------

function normalizarTextoParaBusca(texto = "") {
    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt-BR");
}

function termosDaBusca(termoBusca) {
    return normalizarTextoParaBusca(termoBusca)
        .replace(/[^\p{L}\p{N}]+/gu, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}

function contemTodosOsTermos(texto, termos) {
    if (!termos || termos.length === 0) return true;
    const textoNorm = normalizarTextoParaBusca(texto);
    return termos.every(termo => textoNorm.includes(termo));
}

function escaparHtml(texto = "") {
    const span = document.createElement("span");
    span.textContent = String(texto);
    return span.innerHTML;
}

function extrairTituloReal(conteudo, nomeArquivoFallback) {
    if (!conteudo) return formatarNomeArtigo(nomeArquivoFallback);
    
    // 1. Tenta extrair do YAML Frontmatter: title: "..."
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

function removerFrontmatter(markdown) {
    if (!markdown) return "";
    return markdown.replace(/^---[\s\S]*?---\s*/, "");
}

function removerPrimeiroH1(markdown) {
    if (!markdown) return "";
    return markdown.replace(/^\s*#\s+[^\n\r]+(\r?\n|$)/, "");
}

// --------------------------------------------------------------------------
// 4. CARREGAMENTO DE DADOS E RESILIÊNCIA
// --------------------------------------------------------------------------

async function obterListaDeArquivos() {
    // 1. PRIORIDADE MÁXIMA: manifesto gerado no build (estático, sem rate limit)
    try {
        const resManifest = await fetch("manifest.json");
        if (resManifest.ok) {
            const manifestData = await resManifest.json();
            if (Array.isArray(manifestData) && manifestData.length > 0) {
                return manifestData;
            }
        }
    } catch (e) {
        console.warn("Manifesto estático não encontrado, usando fallback:", e);
    }

    // 2. FALLBACK SEGURO: API do GitHub
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
                if (fileName.includes(" 2.md") || item.path.includes(" 2/")) return false;
                
                if (item.path.startsWith("00 inbox/") || item.path.startsWith("2 - Editais/") || item.path.startsWith("materias/") || item.path.startsWith("wiki/")) return false;
                if (item.path.startsWith("1 - Planejamento/") || item.path.startsWith("4 - Projetos/") || item.path.startsWith("scripts/") || item.path.startsWith("_site/")) return false;
                
                return item.path.startsWith("3 - Materias/") || item.path.startsWith("00 - Desempenho/");
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

                const urlSegura = item.path.split("/").map(encodeURIComponent).join("/");
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

async function carregarCamadaEstrategica() {
    try {
        const [resConc, resEdital, resErros] = await Promise.all([
            fetch("data/concursos.json"),
            fetch("data/edital-itens.json"),
            fetch("data/erros-recorrentes.json")
        ]);
        if (resConc.ok) dadosConcursosEstrategicos = await resConc.json();
        if (resEdital.ok) dadosEditalEstrategico = await resEdital.json();
        if (resErros.ok) dadosErrosEstrategicos = await resErros.json();
    } catch (e) {
        dadosConcursosEstrategicos = [];
        dadosEditalEstrategico = [];
        dadosErrosEstrategicos = [];
    }
}

async function obterConteudoArtigo(artigo) {
    if (!artigo) return "";
    if (artigo.conteudo) return artigo.conteudo;
    if (cacheArtigos.has(artigo.path)) return cacheArtigos.get(artigo.path);

    try {
        const res = await fetch(artigo.path);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const texto = await res.text();
        cacheArtigos.set(artigo.path, texto);
        artigo.conteudo = texto;
        if (!artigo.tituloExibicao) {
            artigo.tituloExibicao = extrairTituloReal(texto, artigo.titulo);
        }
        return texto;
    } catch (err) {
        console.error(`Erro ao carregar conteúdo de ${artigo.path}:`, err);
        return null;
    }
}

async function carregarTodosOsArtigos() {
    inicializarTema();

    const lista = await obterListaDeArquivos();

    if (!lista || lista.length === 0) {
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) {
            pastasContainer.innerHTML = `
                <div class="mensagem-busca">
                    não foi possível carregar a lista de matérias no momento. verifique sua conexão ou recarregue a página.
                </div>
            `;
        }
        return;
    }

    // Carregamento paralelo em lote com cache em memória
    const promessas = lista.map(async (item) => {
        try {
            const res = await fetch(item.path);
            if (!res.ok) {
                return {
                    titulo: item.titulo,
                    tituloExibicao: item.tituloExibicao || formatarNomeArtigo(item.titulo),
                    conteudo: "",
                    sourcePath: item.sourcePath || item.path,
                    categoria: item.categoria,
                    path: item.path
                };
            }
            const texto = await res.text();
            cacheArtigos.set(item.path, texto);

            return {
                titulo: item.titulo,
                tituloExibicao: item.tituloExibicao || extrairTituloReal(texto, item.titulo),
                conteudo: texto,
                sourcePath: item.sourcePath || item.path,
                categoria: item.categoria,
                path: item.path
            };
        } catch (e) {
            return {
                titulo: item.titulo,
                tituloExibicao: item.tituloExibicao || formatarNomeArtigo(item.titulo),
                conteudo: "",
                sourcePath: item.sourcePath || item.path,
                categoria: item.categoria,
                path: item.path
            };
        }
    });

    const resultados = await Promise.all(promessas);
    todosOsArtigos = resultados.filter(Boolean);
    indiceDeBuscaPronto = true;

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

    await carregarCamadaEstrategica();
    renderizarPainelConcursoHome();

    if (window.location.hash) {
        tratarHashNavegacao();
    }
}

// --------------------------------------------------------------------------
// 5. PAINEL DE CONCURSOS E GRADE SUÍÇA
// --------------------------------------------------------------------------

function renderizarPainelConcursoHome() {
    const container = document.getElementById("painel-concurso-home");
    const conteudo = document.getElementById("concurso-home-conteudo");
    if (!container || !conteudo) return;

    if (!dadosConcursosEstrategicos || dadosConcursosEstrategicos.length === 0) {
        container.classList.add("escondido");
        return;
    }

    container.classList.remove("escondido");

    const concursoAtivo = dadosConcursosEstrategicos.find(c => c.id === concursoSelecionadoId) || dadosConcursosEstrategicos[0];
    const dataProva = new Date(concursoAtivo.dataProva);
    const hoje = new Date();
    const diffDias = Math.ceil((dataProva - hoje) / (1000 * 60 * 60 * 24));

    const itensConcurso = dadosEditalEstrategico.filter(i => i.concursoId === concursoAtivo.id);
    const totalItens = itensConcurso.length;

    const mapeados = itensConcurso.filter(i => !!i.notaPath);
    let textoCobertura = "—";
    let detalheCobertura = "sem itens cadastrados no edital";
    if (totalItens > 0) {
        const pctCobertura = Math.round((mapeados.length / totalItens) * 100);
        textoCobertura = `${pctCobertura}%`;
        detalheCobertura = `${mapeados.length} de ${totalItens} tópicos do edital mapeados no vault`;
    }

    const itensComRastreioExposicao = itensConcurso.filter(i => typeof i.exposicaoEstudo === "boolean");
    let textoExposicao = "—";
    let detalheExposicao = "dados insuficientes de sessões";
    if (itensComRastreioExposicao.length > 0 && totalItens > 0) {
        const expostos = itensConcurso.filter(i => i.exposicaoEstudo === true);
        const pctExposicao = Math.round((expostos.length / totalItens) * 100);
        textoExposicao = `${pctExposicao}%`;
        detalheExposicao = `${expostos.length} de ${totalItens} tópicos já trabalhados`;
    }

    const comEvidencia = itensConcurso.filter(i => i.dominioMensuravel === true && i.evidencia);
    const validados = comEvidencia.filter(i => i.evidencia.status === "validado");
    let textoDominio = "ainda não mensurável";
    let detalheDominio = "requer evidência empírica por simulados";
    if (validados.length > 0 && totalItens > 0) {
        const pctDom = Math.round((validados.length / totalItens) * 100);
        textoDominio = `${pctDom}%`;
        detalheDominio = `${validados.length} de ${totalItens} tópicos com retenção comprovada`;
    }

    const erroPendente = dadosErrosEstrategicos.find(e => e.concursoId === concursoAtivo.id && e.status === "pendente");
    let artigoParaRevisar = null;
    if (erroPendente && erroPendente.notaPath) {
        artigoParaRevisar = buscarArtigoPorCaminho(erroPendente.notaPath);
    }

    conteudo.innerHTML = `
        <div class="concurso-linha-topo">
            <div class="concurso-seletor-textual">
                <span class="concurso-seletor-rotulo">concurso:</span>
                ${dadosConcursosEstrategicos.map((c, idx) => `
                    <button type="button" class="concurso-btn-opcao ${c.id === concursoAtivo.id ? 'concurso-selecionado' : ''}" data-concurso-id="${c.id}">
                        ${c.nome.toLowerCase()}
                    </button>
                    ${idx < dadosConcursosEstrategicos.length - 1 ? '<span class="concurso-barra-separadora">/</span>' : ''}
                `).join("")}
            </div>
            <div class="concurso-dias-container">
                <span class="concurso-dias-destaque">${diffDias > 0 ? diffDias : 0}</span> dias até a prova (${concursoAtivo.banca} · ${dataProva.toLocaleDateString('pt-BR')})
            </div>
        </div>

        ${erroPendente ? `
            <div class="concurso-prioridade-linha">
                <span class="concurso-prioridade-tag">prioridade atual</span>
                <div>
                    <p class="concurso-prioridade-texto">${escaparHtml(erroPendente.assunto)}</p>
                    <p class="concurso-prioridade-sub">${escaparHtml(erroPendente.disciplina)} · Fonte: ${escaparHtml(erroPendente.sourcePath)}</p>
                </div>
                <div>
                    ${artigoParaRevisar ? `
                        <a href="${rotaDoArtigo(artigoParaRevisar)}" class="concurso-link-estudo" data-link-artigo="${artigoParaRevisar.titulo}">
                            revisar nota →
                        </a>
                    ` : ''}
                </div>
            </div>
        ` : ''}

        <div class="concurso-regua-indicadores">
            <div class="concurso-celula-indicador">
                <div class="concurso-indicador-rotulo">cobertura estrutural</div>
                <div class="concurso-indicador-valor ${textoCobertura.includes('%') ? '' : 'valor-indisponivel'}">${textoCobertura}</div>
                <div class="concurso-indicador-detalhe">${detalheCobertura}</div>
            </div>

            <div class="concurso-celula-indicador">
                <div class="concurso-indicador-rotulo">exposição ao conteúdo</div>
                <div class="concurso-indicador-valor ${textoExposicao.includes('%') ? '' : 'valor-indisponivel'}">${textoExposicao}</div>
                <div class="concurso-indicador-detalhe">${detalheExposicao}</div>
            </div>

            <div class="concurso-celula-indicador">
                <div class="concurso-indicador-rotulo">domínio validado</div>
                <div class="concurso-indicador-valor ${textoDominio.includes('%') ? '' : 'valor-indisponivel'}">${textoDominio}</div>
                <div class="concurso-indicador-detalhe">${detalheDominio}</div>
            </div>
        </div>
    `;

    conteudo.querySelectorAll(".concurso-btn-opcao").forEach(btn => {
        btn.addEventListener("click", () => {
            concursoSelecionadoId = btn.dataset.concursoId;
            localStorage.setItem("concurso_ativo_id", concursoSelecionadoId);
            renderizarPainelConcursoHome();
        });
    });

    const linkRevisao = conteudo.querySelector(".concurso-link-estudo");
    if (linkRevisao && artigoParaRevisar) {
        linkRevisao.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            abrirArtigo(artigoParaRevisar);
        });
    }
}

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

function abrirDisciplina(categoria, atualizarRota = true) {
    const artigos = todasAsPastas[categoria] || [];
    if (artigos.length === 0) return;

    limparCamposDeBusca();
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("painel-concurso-home")?.classList.add("escondido");
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

// --------------------------------------------------------------------------
// 6. SISTEMA AVANÇADO DE MERMAID (BASEADO NA PUC COM CONTROLES COMPLETOS)
// --------------------------------------------------------------------------

function obterTokensTemaMermaid() {
    const escuro = document.documentElement.dataset.theme !== "light";
    return escuro ? {
        fontFamily: "Archivo, sans-serif",
        fontSize: "14px",
        darkMode: true,
        background: "transparent",
        primaryColor: "#1c1c1e",
        primaryTextColor: "#f5f5f7",
        primaryBorderColor: "#f59e0b",
        secondaryColor: "#111111",
        secondaryTextColor: "#f5f5f7",
        secondaryBorderColor: "#475569",
        tertiaryColor: "#18181b",
        tertiaryTextColor: "#f5f5f7",
        tertiaryBorderColor: "#475569",
        clusterBkg: "#18181b",
        clusterBorder: "#475569",
        lineColor: "#fbbf24",
        arrowheadColor: "#fbbf24",
        textColor: "#f5f5f7",
        edgeLabelBackground: "#050505"
    } : {
        fontFamily: "Archivo, sans-serif",
        fontSize: "14px",
        darkMode: false,
        background: "transparent",
        primaryColor: "#ffffff",
        primaryTextColor: "#0f172a",
        primaryBorderColor: "#d97706",
        secondaryColor: "#f8fafc",
        secondaryTextColor: "#0f172a",
        secondaryBorderColor: "#cbd5e1",
        tertiaryColor: "#f1f5f9",
        tertiaryTextColor: "#0f172a",
        tertiaryBorderColor: "#94a3b8",
        clusterBkg: "#f8fafc",
        clusterBorder: "#cbd5e1",
        lineColor: "#b45309",
        arrowheadColor: "#b45309",
        textColor: "#0f172a",
        edgeLabelBackground: "#ffffff"
    };
}

function configurarMermaid() {
    if (typeof mermaid === "undefined") return;
    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily: "Archivo, sans-serif",
        fontSize: 14,
        flowchart: { curve: "linear", htmlLabels: true, nodeSpacing: 46, rankSpacing: 52, padding: 18 },
        themeVariables: obterTokensTemaMermaid()
    });
}

async function aguardarFontes() {
    if (!document.fonts?.ready) return;
    try { await document.fonts.ready; } catch (_) {}
}

async function renderizarSvgMermaid(codigo) {
    configurarMermaid();
    return mermaid.render(`mermaid-diag-${++proximoIdRenderizacaoMermaid}`, codigo);
}

function dimensoesDoSvg(svg) {
    const viewBox = svg.viewBox?.baseVal;
    if (viewBox?.width > 0 && viewBox.height > 0) {
        return { largura: viewBox.width, altura: viewBox.height };
    }
    const largura = Number.parseFloat(svg.getAttribute("width"));
    const altura = Number.parseFloat(svg.getAttribute("height"));
    return {
        largura: Number.isFinite(largura) && largura > 0 ? largura : 800,
        altura: Number.isFinite(altura) && altura > 0 ? altura : 600
    };
}

function estimarComplexidadeDiagrama(codigo = "") {
    const linhas = codigo.split("\n").length;
    const conexoes = (codigo.match(/-->|---|==>|-.->/g) || []).length;
    const nos = (codigo.match(/\[[^\]]+\]|\([^\)]+\)|\{[^\}]+\}/g) || []).length;
    
    if (conexoes > 8 || nos > 8 || linhas > 15) return "complexo";
    if (conexoes > 3 || nos > 4 || linhas > 7) return "medio";
    return "simples";
}

function abrirModalExploradorMermaid(codigo) {
    if (!codigo || typeof mermaid === "undefined") return;
    document.querySelector(".mermaid-modal")?.remove();

    const modal = document.createElement("div");
    modal.className = "mermaid-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-label", "Explorador de diagrama em tela cheia");

    modal.innerHTML = `
        <header class="mermaid-modal-header">
            <div class="mermaid-modal-title"><span>explorador de diagrama</span></div>
            <div class="mermaid-modal-controls">
                <button type="button" class="btn-mermaid-zoom-out" aria-label="Diminuir zoom (ou scroll)" title="Diminuir zoom (−)">−</button>
                <span class="mermaid-modal-zoom-display">ajustado</span>
                <button type="button" class="btn-mermaid-zoom-in" aria-label="Aumentar zoom (ou scroll)" title="Aumentar zoom (+)">+</button>
                <button type="button" class="btn-mermaid-fit" aria-label="Ajustar à tela inteira" title="Ajustar à tela (f)">ajustar</button>
                <button type="button" class="btn-mermaid-reset" aria-label="Tamanho original 100%" title="Tamanho original (0)">1:1</button>
                <button type="button" class="btn-mermaid-fechar" aria-label="Fechar explorador" title="Fechar (Esc)">&times; fechar</button>
            </div>
        </header>
        <div class="mermaid-modal-body"><div class="mermaid-modal-stage" aria-live="polite"></div></div>
    `;
    document.body.appendChild(modal);

    const stage = modal.querySelector(".mermaid-modal-stage");
    const body = modal.querySelector(".mermaid-modal-body");
    const zoomDisplay = modal.querySelector(".mermaid-modal-zoom-display");

    (async () => {
        try {
            await aguardarFontes();
            const resultado = await renderizarSvgMermaid(codigo);
            stage.innerHTML = resultado.svg;
            resultado.bindFunctions?.(stage);

            const svg = stage.querySelector("svg");
            if (!svg) return;
            const { largura, altura } = dimensoesDoSvg(svg);
            stage.style.width = `${Math.ceil(largura)}px`;
            stage.style.height = `${Math.ceil(altura)}px`;

            let escala = 1;
            let deslocamentoX = 0;
            let deslocamentoY = 0;
            let arrastando = false;
            let origemX = 0;
            let origemY = 0;
            let ajustado = true;

            function aplicarTransformacao() {
                stage.style.transform = `translate(calc(-50% + ${deslocamentoX}px), calc(-50% + ${deslocamentoY}px)) scale(${escala})`;
                zoomDisplay.textContent = ajustado ? `ajustado · ${Math.round(escala * 100)}%` : `${Math.round(escala * 100)}%`;
            }

            function ajustar() {
                const area = body.getBoundingClientRect();
                const margem = 48;
                escala = Math.min(
                    Math.max(0.1, (area.width - margem * 2) / largura),
                    Math.max(0.1, (area.height - margem * 2) / altura),
                    4.0
                );
                deslocamentoX = 0;
                deslocamentoY = 0;
                ajustado = true;
                aplicarTransformacao();
            }

            function alterarZoom(fator, x, y) {
                const anterior = escala;
                escala = Math.min(5, Math.max(0.15, escala * fator));
                if (x !== undefined && y !== undefined) {
                    const area = body.getBoundingClientRect();
                    const relativoX = x - area.left - area.width / 2;
                    const relativoY = y - area.top - area.height / 2;
                    deslocamentoX = (deslocamentoX - relativoX) * (escala / anterior) + relativoX;
                    deslocamentoY = (deslocamentoY - relativoY) * (escala / anterior) + relativoY;
                }
                ajustado = false;
                aplicarTransformacao();
            }

            const tamanhoReal = () => {
                escala = 1;
                deslocamentoX = 0;
                deslocamentoY = 0;
                ajustado = false;
                aplicarTransformacao();
            };

            const fechar = () => {
                limparListeners();
                modal.remove();
            };

            const aoTeclar = evento => {
                if (evento.key === "Escape") fechar();
                else if (evento.key.toLowerCase() === "f") ajustar();
                else if (evento.key === "0") tamanhoReal();
                else if (evento.key === "+" || evento.key === "=") alterarZoom(1.25);
                else if (evento.key === "-") alterarZoom(0.8);
            };

            const aoRolar = evento => {
                evento.preventDefault();
                alterarZoom(evento.deltaY < 0 ? 1.15 : 0.87, evento.clientX, evento.clientY);
            };

            const aoIniciarArrasto = evento => {
                if (evento.button !== 0) return;
                arrastando = true;
                origemX = evento.clientX - deslocamentoX;
                origemY = evento.clientY - deslocamentoY;
                body.classList.add("is-dragging");
                body.setPointerCapture(evento.pointerId);
            };

            const aoArrastar = evento => {
                if (!arrastando) return;
                deslocamentoX = evento.clientX - origemX;
                deslocamentoY = evento.clientY - origemY;
                ajustado = false;
                aplicarTransformacao();
            };

            const encerrarArrasto = evento => {
                if (!arrastando) return;
                arrastando = false;
                body.classList.remove("is-dragging");
                try { body.releasePointerCapture(evento.pointerId); } catch (_) {}
            };

            modal.querySelector(".btn-mermaid-zoom-in").addEventListener("click", () => alterarZoom(1.25));
            modal.querySelector(".btn-mermaid-zoom-out").addEventListener("click", () => alterarZoom(0.8));
            modal.querySelector(".btn-mermaid-fit").addEventListener("click", ajustar);
            modal.querySelector(".btn-mermaid-reset").addEventListener("click", tamanhoReal);
            modal.querySelector(".btn-mermaid-fechar").addEventListener("click", fechar);

            window.addEventListener("keydown", aoTeclar);
            window.addEventListener("resize", ajustar);
            body.addEventListener("wheel", aoRolar, { passive: false });
            body.addEventListener("pointerdown", aoIniciarArrasto);
            body.addEventListener("pointermove", aoArrastar);
            body.addEventListener("pointerup", encerrarArrasto);
            body.addEventListener("pointercancel", encerrarArrasto);

            function limparListeners() {
                window.removeEventListener("keydown", aoTeclar);
                window.removeEventListener("resize", ajustar);
                body.removeEventListener("wheel", aoRolar);
                body.removeEventListener("pointerdown", aoIniciarArrasto);
                body.removeEventListener("pointermove", aoArrastar);
                body.removeEventListener("pointerup", encerrarArrasto);
                body.removeEventListener("pointercancel", encerrarArrasto);
            }

            requestAnimationFrame(ajustar);
        } catch (erro) {
            console.error("Erro ao renderizar Mermaid no modal:", erro);
            stage.innerHTML = `
                <div class="mermaid-erro-card">
                    <p>não foi possível renderizar a visualização em tela cheia.</p>
                    <pre><code>${escaparHtml(codigo)}</code></pre>
                </div>
            `;
        }
    })();
}

function equiparDiagramasMermaidInterativos(container) {
    if (!container) return;

    container.querySelectorAll(".mermaid").forEach(diagrama => {
        if (!diagrama.querySelector("svg") || diagrama.closest(".diagrama-wrapper")) return;

        const codigoOriginal = diagrama.dataset.mermaidSource || "";
        const complexidade = estimarComplexidadeDiagrama(codigoOriginal);

        const wrapper = document.createElement("div");
        wrapper.className = `diagrama-wrapper diagrama-${complexidade}`;

        const toolbar = document.createElement("div");
        toolbar.className = "diagrama-toolbar";

        // Botões da barra de ferramentas
        const btnAjustar = document.createElement("button");
        btnAjustar.type = "button";
        btnAjustar.className = "diagrama-btn btn-ajustar";
        btnAjustar.setAttribute("aria-label", "Ajustar diagrama à largura disponível");
        btnAjustar.textContent = "ajustar";

        const btnZoomIn = document.createElement("button");
        btnZoomIn.type = "button";
        btnZoomIn.className = "diagrama-btn btn-zoom-in";
        btnZoomIn.setAttribute("aria-label", "Aproximar diagrama");
        btnZoomIn.textContent = "+";

        const btnZoomOut = document.createElement("button");
        btnZoomOut.type = "button";
        btnZoomOut.className = "diagrama-btn btn-zoom-out";
        btnZoomOut.setAttribute("aria-label", "Afastar diagrama");
        btnZoomOut.textContent = "−";

        const btnReset = document.createElement("button");
        btnReset.type = "button";
        btnReset.className = "diagrama-btn btn-reset";
        btnReset.setAttribute("aria-label", "Restaurar escala original");
        btnReset.textContent = "1:1";

        const btnExplorar = document.createElement("button");
        btnExplorar.type = "button";
        btnExplorar.className = "diagrama-btn btn-explorar";
        btnExplorar.setAttribute("aria-label", "Abrir diagrama em tela cheia com zoom e navegação");
        btnExplorar.textContent = "tela cheia";

        toolbar.append(btnAjustar, btnZoomIn, btnZoomOut, btnReset, btnExplorar);

        const viewport = document.createElement("div");
        viewport.className = "diagrama-viewport";

        // Indicação discreta de interação
        const dica = document.createElement("span");
        dica.className = "diagrama-dica-interacao";
        dica.textContent = "diagrama interativo • use a barra para ampliar";

        // Área recolhível para inspecionar o código-fonte
        const detailsSource = document.createElement("details");
        detailsSource.className = "diagrama-source";
        detailsSource.innerHTML = `
            <summary>ver código-fonte mermaid</summary>
            <pre><code>${escaparHtml(codigoOriginal)}</code></pre>
        `;

        diagrama.parentNode.insertBefore(wrapper, diagrama);
        viewport.appendChild(diagrama);
        wrapper.append(toolbar, viewport, dica, detailsSource);

        let zoomLocal = 1;
        const svg = diagrama.querySelector("svg");

        btnAjustar.addEventListener("click", () => {
            wrapper.classList.toggle("modo-ajustado");
            if (wrapper.classList.contains("modo-ajustado")) {
                if (svg) svg.style.transform = "";
                zoomLocal = 1;
                btnAjustar.style.borderColor = "var(--accent-blue)";
            } else {
                btnAjustar.style.borderColor = "";
            }
        });

        btnZoomIn.addEventListener("click", () => {
            wrapper.classList.remove("modo-ajustado");
            zoomLocal = Math.min(3, zoomLocal + 0.2);
            if (svg) svg.style.transform = `scale(${zoomLocal})`;
            if (svg) svg.style.transformOrigin = "top left";
        });

        btnZoomOut.addEventListener("click", () => {
            wrapper.classList.remove("modo-ajustado");
            zoomLocal = Math.max(0.4, zoomLocal - 0.2);
            if (svg) svg.style.transform = `scale(${zoomLocal})`;
            if (svg) svg.style.transformOrigin = "top left";
        });

        btnReset.addEventListener("click", () => {
            wrapper.classList.remove("modo-ajustado");
            zoomLocal = 1;
            if (svg) svg.style.transform = "";
        });

        btnExplorar.addEventListener("click", () => {
            abrirModalExploradorMermaid(codigoOriginal);
        });
    });
}

async function renderizarDiagramasMermaid() {
    if (typeof mermaid === "undefined" || !artigoCorpo) return;
    await aguardarFontes();
    configurarMermaid();

    // Converte blocos Markdown pre code.language-mermaid gerados pelo marked em divs .mermaid
    const blocosPre = artigoCorpo.querySelectorAll('pre code.language-mermaid, pre.language-mermaid');
    blocosPre.forEach(bloco => {
        const pre = bloco.tagName.toLowerCase() === 'pre' ? bloco : bloco.parentElement;
        const codigo = bloco.textContent;
        const divMermaid = document.createElement('div');
        divMermaid.className = 'mermaid';
        divMermaid.dataset.mermaidSource = codigo;
        divMermaid.textContent = codigo;
        pre.replaceWith(divMermaid);
    });

    const diagramas = artigoCorpo.querySelectorAll(".mermaid");
    diagramas.forEach(diagrama => {
        const codigo = diagrama.dataset.mermaidSource || diagrama.textContent;
        diagrama.dataset.mermaidSource = codigo;
        diagrama.removeAttribute("data-processed");
        diagrama.textContent = codigo;
    });

    try {
        await mermaid.run({ nodes: diagramas });
        equiparDiagramasMermaidInterativos(artigoCorpo);
    } catch (erro) {
        console.warn("Erro ao renderizar diagramas Mermaid:", erro);
        diagramas.forEach(diagrama => {
            if (!diagrama.querySelector("svg")) {
                const codigo = diagrama.dataset.mermaidSource || "";
                diagrama.innerHTML = `
                    <div class="mermaid-erro-card">
                        <p>não foi possível renderizar o diagrama mermaid.</p>
                        <pre><code>${escaparHtml(codigo)}</code></pre>
                    </div>
                `;
            }
        });
    }
}

// --------------------------------------------------------------------------
// 7. WIKILINKS, ÂNCORAS E LEITOR DE ARTIGO
// --------------------------------------------------------------------------

function buscarArtigoPorCaminho(nomeOuCaminho) {
    if (!nomeOuCaminho) return null;
    
    const normalizar = (str) => {
        try {
            str = decodeURIComponent(decodeURI(str));
        } catch (e) {}
        return str
            .replace(/^\.\//, "")
            .trim()
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\.md$/i, "")
            .replace(/[(),:;+]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    };

    const limpo = normalizar(nomeOuCaminho);
    const limpoApenasNome = limpo.split("/").pop().trim();

    return todosOsArtigos.find(a => {
        const caminhoSemExtensao = normalizar(a.sourcePath || a.path);
        const nomeArquivo = normalizar((a.sourcePath || a.path).split("/").pop());
        const tituloNorm = normalizar(a.titulo);

        return caminhoSemExtensao === limpo ||
               nomeArquivo === limpo ||
               nomeArquivo === limpoApenasNome ||
               tituloNorm === limpo ||
               tituloNorm === limpoApenasNome;
    }) || todosOsArtigos.find(a => {
        const nomeArquivo = normalizar((a.sourcePath || a.path).split("/").pop());
        const tituloNorm = normalizar(a.titulo);
        return (limpoApenasNome.length > 3 && (nomeArquivo.includes(limpoApenasNome) || limpoApenasNome.includes(nomeArquivo) || tituloNorm.includes(limpoApenasNome)));
    }) || null;
}

function separarDestinoEHash(destino) {
    if (!destino) return { nomeArtigo: "", hashSecao: "" };

    let destinoDecodificado = destino.trim();
    try {
        destinoDecodificado = decodeURIComponent(decodeURI(destinoDecodificado));
    } catch (e) {}

    if (destinoDecodificado.startsWith("#")) {
        return { nomeArtigo: "", hashSecao: destinoDecodificado.replace(/^#/, "").trim() };
    }

    const partes = destinoDecodificado.split(/(?<![cC])#/);
    if (partes.length > 1) {
        const candidatoNome = partes[0].trim();
        const candidatoSecao = partes.slice(1).join("#").trim();
        if (buscarArtigoPorCaminho(candidatoNome)) {
            return { nomeArtigo: candidatoNome, hashSecao: candidatoSecao };
        }
    }

    if (buscarArtigoPorCaminho(destinoDecodificado)) {
        return { nomeArtigo: destinoDecodificado, hashSecao: "" };
    }

    const ultimoHash = destinoDecodificado.lastIndexOf("#");
    if (ultimoHash > 0) {
        const candidatoNome = destinoDecodificado.substring(0, ultimoHash).trim();
        const candidatoSecao = destinoDecodificado.substring(ultimoHash + 1).trim();
        if (buscarArtigoPorCaminho(candidatoNome)) {
            return { nomeArtigo: candidatoNome, hashSecao: candidatoSecao };
        }
    }

    return { nomeArtigo: destinoDecodificado, hashSecao: "" };
}

function scrollParaHeading(idOuTexto) {
    if (!idOuTexto || !artigoCorpo) return;
    
    if (idOuTexto instanceof HTMLElement) {
        const offset = (stickyNav ? stickyNav.offsetHeight : 60) + 20;
        const pos = idOuTexto.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, pos - offset), behavior: "smooth" });
        return;
    }

    const decodificado = decodeURIComponent(idOuTexto).trim();
    const normalizar = (s) => (s || "").toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const slug = normalizar(decodificado).replace(/\s+/g, "-");
    const termoLimpo = normalizar(decodificado);

    let el = document.getElementById(decodificado) || 
             document.getElementById(slug) || 
             document.getElementById(`heading-${slug}`);

    if (!el) {
        const headings = Array.from(artigoCorpo.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        el = headings.find(h => {
            const hNorm = normalizar(h.textContent);
            const hSlug = hNorm.replace(/\s+/g, "-");
            return h.id === decodificado || h.id === slug || hNorm === termoLimpo || hSlug === slug;
        }) || headings.find(h => {
            const hNorm = normalizar(h.textContent);
            return (termoLimpo.length > 4 && hNorm.includes(termoLimpo)) || (hNorm.length > 4 && termoLimpo.includes(hNorm));
        });
    }

    if (el) {
        const offset = (stickyNav ? stickyNav.offsetHeight : 60) + 20;
        const pos = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, pos - offset), behavior: "smooth" });
    }
}

function navegarParaLinkObsidian(destino, atualizarRota = true) {
    if (!destino) return;

    const { nomeArtigo, hashSecao } = separarDestinoEHash(destino);

    if (!nomeArtigo && hashSecao) {
        scrollParaHeading(hashSecao);
        return;
    }

    const artigoDestino = buscarArtigoPorCaminho(nomeArtigo);
    if (artigoDestino) {
        abrirArtigo(artigoDestino, atualizarRota);
        if (hashSecao) {
            setTimeout(() => scrollParaHeading(hashSecao), 200);
            setTimeout(() => scrollParaHeading(hashSecao), 500);
        }
    } else {
        console.warn(`[Concursos] Wikilink não resolvido para: "${destino}"`);
    }
}

function processarWikilinks(container) {
    if (!container) return;

    // Isola e protege tags onde wikilinks NÃO devem ser convertidos (pre, code, script, style)
    const tagsIgnoradas = container.querySelectorAll("pre, code, script, style");
    const marcadoresIgnorados = [];
    tagsIgnoradas.forEach((el, idx) => {
        const placeholder = `<!--@@PROTECTED_TAG_${idx}@@-->`;
        marcadoresIgnorados.push({ placeholder, elemento: el });
    });

    let html = container.innerHTML;
    const regexWikilink = /\[\[([^\]\n]+)\]\]/g;

    html = html.replace(regexWikilink, (match, conteudoInterno) => {
        let destino = conteudoInterno;
        let rotulo = conteudoInterno;

        if (conteudoInterno.includes("|")) {
            const partes = conteudoInterno.split("|");
            destino = partes[0].trim();
            rotulo = partes.slice(1).join("|").trim();
        }

        const { nomeArtigo, hashSecao } = separarDestinoEHash(destino);
        const artigoDestino = buscarArtigoPorCaminho(nomeArtigo);

        if (artigoDestino) {
            const href = hashSecao ? `${rotaDoArtigo(artigoDestino)}#${encodeURIComponent(hashSecao)}` : rotaDoArtigo(artigoDestino);
            return `<a href="${href}" class="wikilink" data-destino="${escaparHtml(destino)}">${rotulo}</a>`;
        } else if (!nomeArtigo && hashSecao) {
            return `<a href="#${encodeURIComponent(hashSecao)}" class="wikilink" data-destino="#${escaparHtml(hashSecao)}">${rotulo}</a>`;
        } else {
            console.warn(`[Concursos] Link interno não encontrado: ${destino}`);
            return `<span class="wikilink-texto wikilink-quebrado" title="Nota não encontrada no acervo público: ${escaparHtml(destino)}">${rotulo}</span>`;
        }
    });

    container.innerHTML = html;

    container.querySelectorAll("a.wikilink").forEach(link => {
        link.addEventListener("click", (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
            e.preventDefault();
            const destino = link.dataset.destino;
            navegarParaLinkObsidian(destino, true);
        });
    });
}

function processarCalloutsObsidian() {
    const blockquotes = artigoCorpo.querySelectorAll('blockquote');
    blockquotes.forEach(bq => {
        const conteudo = bq.innerHTML;
        const match = conteudo.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+([^\n<]+))?/i);
        if (match) {
            const tipo = match[1].toUpperCase();
            const tituloCustomizado = match[2] ? match[2].trim() : '';
            
            let htmlLimpo = conteudo.replace(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+[^\n<]+)?/i, '');
            htmlLimpo = htmlLimpo.replace(/<p>\s*<\/p>/g, '');

            const rotulos = {
                'NOTE': 'nota',
                'TIP': 'dica',
                'IMPORTANT': 'importante',
                'WARNING': 'aviso',
                'CAUTION': 'atenção'
            };

            const tituloExibicao = (tituloCustomizado || rotulos[tipo] || tipo).toLowerCase();

            const divCallout = document.createElement('div');
            divCallout.className = `obsidian-callout callout-${tipo.toLowerCase()}`;

            divCallout.innerHTML = `
                <div class="callout-header">
                    <span class="callout-title">${tituloExibicao}</span>
                </div>
                <div class="callout-content">
                    ${htmlLimpo}
                </div>
            `;

            bq.replaceWith(divCallout);
        }
    });
}

function processarComentariosObsidian() {
    const wrappers = artigoCorpo.querySelectorAll('.obsidian-comment-wrapper');
    wrappers.forEach(wrapper => {
        const badge = wrapper.querySelector('.comment-badge');
        const popover = wrapper.querySelector('.comment-popover');
        if (!badge || !popover) return;

        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const estaAtivo = popover.classList.contains('active');
            document.querySelectorAll('.comment-popover.active').forEach(p => {
                if (p !== popover) p.classList.remove('active');
            });
            popover.classList.toggle('active', !estaAtivo);
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.obsidian-comment-wrapper')) {
            document.querySelectorAll('.comment-popover.active').forEach(p => p.classList.remove('active'));
        }
    });
}

async function abrirArtigo(artigo, atualizarRota = true) {
    if (!artigo) return;
    artigoAtual = artigo;

    if (atualizarRota && window.location.hash !== rotaDoArtigo(artigo)) {
        history.pushState({ artigo: artigo.titulo, categoria: artigo.categoria }, "", rotaDoArtigo(artigo));
    }

    document.getElementById("painel-concurso-home")?.classList.add("escondido");
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
        <span class="breadcrumb-atual">${artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo)}</span>
    `;
    document.getElementById("btn-bc-art-home")?.addEventListener("click", () => voltarParaHome(true));
    document.getElementById("btn-bc-art-cat")?.addEventListener("click", () => abrirDisciplina(artigo.categoria));

    artigoTitulo.textContent = artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo);

    // Carrega conteúdo sob demanda se ainda não estiver em memória
    if (!artigo.conteudo) {
        artigoCorpo.innerHTML = `<p class="mensagem-busca">carregando nota...</p>`;
        await obterConteudoArtigo(artigo);
    }

    let markdownLimpo = removerFrontmatter(artigo.conteudo || "");
    markdownLimpo = removerPrimeiroH1(markdownLimpo);

    // Pré-processamento de tabelas sem cabeçalho (Garantia de rendering GFM)
    markdownLimpo = markdownLimpo.replace(/(?:^|\n\n)(\|[^\n]+\|\n)(?!\s*\|[\s:-]+---[\s:-]*\|)/g, (match, linha) => {
        const colunas = (linha.match(/\|/g) || []).length - 1;
        if (colunas > 0) {
            const linhaDelimitadora = "|" + Array(colunas).fill(" :--- ").join("|") + "|\n";
            return `\n\n${linha}${linhaDelimitadora}`;
        }
        return match;
    });

    // Highlights com anotação associada
    markdownLimpo = markdownLimpo.replace(/==([^=]+)==\s*%%\s*\[(?:comentário|comentario|nota|obs)\]:?\s*([\s\S]*?)\s*%%/gi, (match, texto, comentario) => {
        const comentarioLimpo = comentario.replace(/"/g, '&quot;').trim();
        return `<span class="obsidian-comment-wrapper"><mark class="obsidian-highlight with-comment">${texto}</mark><button type="button" class="comment-badge" aria-label="Ver anotação" title="Ver anotação"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></button><span class="comment-popover"><span class="comment-popover-header">anotação</span><span class="comment-popover-body">${comentarioLimpo}</span></span></span>`;
    });

    // Highlights simples
    markdownLimpo = markdownLimpo.replace(/==([^=]+)==/g, '<mark class="obsidian-highlight">$1</mark>');

    // Comentários explícitos inline
    markdownLimpo = markdownLimpo.replace(/%%\s*\[(?:comentário|comentario|nota|obs)\]:?\s*([\s\S]*?)\s*%%/gi, (match, comentario) => {
        const comentarioLimpo = comentario.replace(/"/g, '&quot;').trim();
        return `<span class="obsidian-comment-wrapper"><button type="button" class="comment-badge standalone" aria-label="Ver anotação" title="Ver anotação"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></button><span class="comment-popover"><span class="comment-popover-header">anotação</span><span class="comment-popover-body">${comentarioLimpo}</span></span></span>`;
    });

    // Oculta comentários brutos restantes do Obsidian
    markdownLimpo = markdownLimpo.replace(/%%[\s\S]*?%%/g, '');

    marked.setOptions({ gfm: true, breaks: true });
    artigoCorpo.innerHTML = marked.parse(markdownLimpo);

    processarCalloutsObsidian();
    processarComentariosObsidian();
    processarWikilinks(artigoCorpo);

    if (typeof renderMathInElement !== "undefined") {
        try {
            renderMathInElement(artigoCorpo, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "\\[", right: "\\]", display: true }
                ],
                throwOnError: false,
                ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
            });
        } catch (eMath) {
            console.warn("Erro ao renderizar KaTeX:", eMath);
        }
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

function gerarTableOfContents() {
    const tocNavDesktop = document.getElementById("toc-nav");
    const tocSidebar = document.getElementById("artigo-toc-sidebar");
    if (!tocNavDesktop) return;

    tocNavDesktop.innerHTML = "";

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
            scrollParaHeading(heading);
        });

        liDesktop.appendChild(linkDesktop);
        listaDesktop.appendChild(liDesktop);
    });

    tocNavDesktop.appendChild(listaDesktop);

    const tocFilterInput = document.getElementById("toc-filter-input");
    if (tocFilterInput) {
        tocFilterInput.value = "";
        tocFilterInput.oninput = (e) => {
            const query = normalizarTextoParaBusca(e.target.value.trim());
            const items = listaDesktop.querySelectorAll(".toc-item");
            items.forEach(item => {
                const link = item.querySelector("a");
                if (!link) return;
                const match = normalizarTextoParaBusca(link.textContent).includes(query);
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

// --------------------------------------------------------------------------
// 8. BUSCA COM DEBOUNCE, PONTUAÇÃO E SEGURANÇA
// --------------------------------------------------------------------------

function criarIndiceNormalizado(texto = "") {
    const caracteres = Array.from(String(texto));
    const origens = [];
    let normalizado = "";

    caracteres.forEach((caractere, indiceOriginal) => {
        const trechoNormalizado = normalizarTextoParaBusca(caractere);
        for (const caractereNormalizado of trechoNormalizado) {
            normalizado += caractereNormalizado;
            origens.push(indiceOriginal);
        }
    });

    return { caracteres, normalizado, origens };
}

function destacarTexto(texto, termo) {
    const termos = termosDaBusca(termo);
    if (!termos.length) return escaparHtml(texto);

    const indice = criarIndiceNormalizado(texto);
    const intervalos = [];
    termos.forEach(termoNormalizado => {
        let posicao = indice.normalizado.indexOf(termoNormalizado);
        while (posicao !== -1) {
            const inicio = indice.origens[posicao];
            const fim = indice.origens[posicao + termoNormalizado.length - 1] + 1;
            intervalos.push([inicio, fim]);
            posicao = indice.normalizado.indexOf(termoNormalizado, posicao + termoNormalizado.length);
        }
    });

    const mesclados = intervalos
        .sort((a, b) => a[0] - b[0])
        .reduce((resultado, intervalo) => {
            const ultimo = resultado.at(-1);
            if (ultimo && intervalo[0] <= ultimo[1]) ultimo[1] = Math.max(ultimo[1], intervalo[1]);
            else resultado.push([...intervalo]);
            return resultado;
        }, []);

    let cursor = 0;
    return mesclados.map(([inicio, fim]) => {
        const antes = escaparHtml(indice.caracteres.slice(cursor, inicio).join(""));
        const marcado = escaparHtml(indice.caracteres.slice(inicio, fim).join(""));
        cursor = fim;
        return `${antes}<mark class="highlight">${marcado}</mark>`;
    }).join("") + escaparHtml(indice.caracteres.slice(cursor).join(""));
}

function extrairTrechoRelevante(conteudo, termo) {
    const conteudoSemFrontmatter = removerFrontmatter(conteudo || "");
    const textoLimpo = conteudoSemFrontmatter.replace(/==/g, '').replace(/[#*`_~\[\]]/g, ' ');
    const indice = criarIndiceNormalizado(textoLimpo);
    const termos = termosDaBusca(termo);
    const posicaoNormalizada = Math.min(...termos
        .map(termoNormalizado => indice.normalizado.indexOf(termoNormalizado))
        .filter(posicao => posicao >= 0));
    const pos = Number.isFinite(posicaoNormalizada)
        ? indice.caracteres.slice(0, indice.origens[posicaoNormalizada]).join("").length
        : -1;
    
    if (pos === -1) {
        return textoLimpo.substring(0, 140) + "...";
    }
    
    const inicio = Math.max(0, pos - 50);
    const fim = Math.min(textoLimpo.length, pos + 90);
    let trecho = textoLimpo.substring(inicio, fim);
    
    if (inicio > 0) trecho = "..." + trecho;
    if (fim < textoLimpo.length) trecho = trecho + "...";
    
    return trecho;
}

function pontuarArtigoNaBusca(artigo, consultaNormalizada, termos) {
    let pontuacao = 0;
    const tituloExibicaoNorm = normalizarTextoParaBusca(artigo.tituloExibicao || "");
    const tituloArquivoNorm = normalizarTextoParaBusca(artigo.titulo || "");
    const conteudoNorm = normalizarTextoParaBusca(artigo.conteudo || "");
    const categoriaNorm = normalizarTextoParaBusca(artigo.categoria || "");

    // 1. Título real ou arquivo
    if (tituloExibicaoNorm === consultaNormalizada || tituloArquivoNorm === consultaNormalizada) {
        pontuacao += 100;
    } else if (tituloExibicaoNorm.includes(consultaNormalizada) || tituloArquivoNorm.includes(consultaNormalizada)) {
        pontuacao += 60;
    } else if (contemTodosOsTermos(tituloExibicaoNorm, termos)) {
        pontuacao += 40;
    }

    // 2. Cabeçalhos (H2/H3)
    const matchHeadings = (artigo.conteudo || "").match(/^#{2,4}\s+([^\r\n]+)/gm) || [];
    for (const h of matchHeadings) {
        const hNorm = normalizarTextoParaBusca(h);
        if (hNorm.includes(consultaNormalizada)) {
            pontuacao += 25;
            break;
        }
    }

    // 3. Matéria/Categoria
    if (categoriaNorm.includes(consultaNormalizada)) {
        pontuacao += 15;
    }

    // 4. Corpo
    if (conteudoNorm.includes(consultaNormalizada)) {
        pontuacao += 10;
    } else if (contemTodosOsTermos(conteudoNorm, termos)) {
        pontuacao += 5;
    }

    return pontuacao;
}

function filtrarArtigos(termoBusca, atualizarRota = true) {
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");

    const termo = (termoBusca || "").trim();
    atualizarBotoesLimparBusca(termo);

    if (!termo) {
        divResultados.classList.add("escondido");
        containerResultados.innerHTML = "";
        document.getElementById("painel-concurso-home")?.classList.remove("escondido");
        document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
        document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
        if (atualizarRota && window.location.hash.startsWith("#/busca")) {
            history.pushState(null, "", "#/");
        }
        return;
    }

    document.getElementById("painel-concurso-home")?.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.remove("escondido");

    if (atualizarRota) {
        const novaRota = `#/busca?q=${encodeURIComponent(termo)}`;
        if (window.location.hash !== novaRota) {
            history.replaceState({ busca: termo }, "", novaRota);
        }
    }

    const termos = termosDaBusca(termo);
    const consultaNorm = normalizarTextoParaBusca(termo);

    if (consultaNorm.length < 2) {
        containerResultados.innerHTML = `<p class="mensagem-busca">digite ao menos <strong>duas letras</strong> para pesquisar.</p>`;
        return;
    }

    const filtrados = todosOsArtigos
        .filter(artigo => contemTodosOsTermos(`${artigo.tituloExibicao || ""} ${artigo.titulo} ${artigo.categoria} ${artigo.conteudo}`, termos))
        .map(artigo => ({
            artigo,
            pontos: pontuarArtigoNaBusca(artigo, consultaNorm, termos)
        }))
        .sort((a, b) => b.pontos - a.pontos || a.artigo.titulo.localeCompare(b.artigo.titulo, "pt-BR", { numeric: true }))
        .map(item => item.artigo);

    exibirResultados(filtrados, termo, termos);
}

function exibirResultados(artigos, termo = "", termos = []) {
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

            const tituloFormatado = artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo);

            card.innerHTML = `
                <span class="resultado-numero">${String(idx + 1).padStart(2, "0")}</span>
                <span class="resultado-conteudo">
                    <strong>${destacarTexto(tituloFormatado, termo)}</strong>
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

function atualizarBotoesLimparBusca(termo) {
    if (btnLimparMain) {
        btnLimparMain.classList.toggle("escondido", !termo);
    }
    if (btnLimparNav) {
        btnLimparNav.classList.toggle("escondido", !termo);
    }
}

function limparCamposDeBusca() {
    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    atualizarBotoesLimparBusca("");
}

// --------------------------------------------------------------------------
// 9. ROTEAMENTO E TRANSIÇÕES DE ESTADO
// --------------------------------------------------------------------------

function tratarHashNavegacao() {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") {
        voltarParaHome(false);
        return;
    }

    const rotaLimpa = decodeURIComponent(hash.replace(/^#\/?/, "").trim());
    
    // Rota de busca: #/busca?q=termo
    if (rotaLimpa.startsWith("busca")) {
        const matchQ = hash.match(/[?&]q=([^&]+)/);
        const termo = matchQ ? decodeURIComponent(matchQ[1]) : "";
        if (campoTexto) campoTexto.value = termo;
        if (campoTextoNav) campoTextoNav.value = termo;
        filtrarArtigos(termo, false);
        return;
    }

    if (rotaLimpa.startsWith("disciplina/")) {
        const categoria = rotaLimpa.replace("disciplina/", "").trim();
        abrirDisciplina(categoria, false);
        return;
    }

    const partes = rotaLimpa.split("/");
    if (partes.length >= 2) {
        const [categoria, ...resto] = partes;
        const nomeArtigoComHash = resto.join("/");
        const { nomeArtigo, hashSecao } = separarDestinoEHash(nomeArtigoComHash);

        const artigo = todosOsArtigos.find(a => 
            a.categoria.toLowerCase() === categoria.toLowerCase() && 
            (a.titulo.toLowerCase() === nomeArtigo.toLowerCase() || 
             normalizarTextoParaBusca(a.titulo) === normalizarTextoParaBusca(nomeArtigo))
        ) || buscarArtigoPorCaminho(nomeArtigo);

        if (artigo) {
            abrirArtigo(artigo, false);
            if (hashSecao) {
                setTimeout(() => scrollParaHeading(hashSecao), 200);
                setTimeout(() => scrollParaHeading(hashSecao), 500);
            }
            return;
        }
    }

    // Se a rota não foi encontrada, retorna à home
    voltarParaHome(false);
}

function voltarParaHome(atualizarRota = true) {
    if (atualizarRota) {
        window.location.hash = "#/";
    }
    limparCamposDeBusca();
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("painel-concurso-home")?.classList.remove("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --------------------------------------------------------------------------
// 10. EVENT LISTENERS E INICIALIZAÇÃO
// --------------------------------------------------------------------------

window.addEventListener("popstate", () => {
    tratarHashNavegacao();
});

window.addEventListener("scroll", () => {
    if (!stickyNav) return;
    if (window.scrollY > 80) {
        stickyNav.classList.add("visible");
    } else {
        stickyNav.classList.remove("visible");
    }
});

if (btnTema) {
    btnTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.dataset.theme === "light" ? "light" : "dark";
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        aplicarTema(novoTema, true);
        renderizarDiagramasMermaid();
    });
}

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

function configurarDebounceBusca(inputOrigem, inputEspelho) {
    if (!inputOrigem) return;
    inputOrigem.addEventListener("input", (e) => {
        const valor = e.target.value;
        if (inputEspelho) inputEspelho.value = valor;
        clearTimeout(timeoutDebounceBusca);
        timeoutDebounceBusca = setTimeout(() => {
            filtrarArtigos(valor, true);
        }, 250);
    });
}

configurarDebounceBusca(campoTexto, campoTextoNav);
configurarDebounceBusca(campoTextoNav, campoTexto);

btnLimparMain?.addEventListener("click", () => {
    limparCamposDeBusca();
    filtrarArtigos("", true);
    campoTexto?.focus();
});

btnLimparNav?.addEventListener("click", () => {
    limparCamposDeBusca();
    filtrarArtigos("", true);
    campoTextoNav?.focus();
});

// Atalho de teclado '/' para focar a pesquisa
window.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        const inputAtivo = stickyNav && stickyNav.classList.contains("visible") ? campoTextoNav : campoTexto;
        inputAtivo?.focus();
    }
});

if (btnVoltarDisciplina) {
    btnVoltarDisciplina.addEventListener("click", () => voltarParaHome(true));
}

document.getElementById("nav-logo")?.addEventListener("click", () => voltarParaHome(true));

// Inicia aplicação
carregarTodosOsArtigos();
