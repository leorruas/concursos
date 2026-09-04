// ==========================================
// SCRIPT DE SPA EDITORIAL - CONCURSOS LEORRUAS
// Compatível 1:1 com o Design System da PUC
// ==========================================

async function obterListaDeArquivos() {
    // 1. PRIORIDADE MÁXIMA: Tenta carregar o manifesto gerado no build (rápido, estático, sem rate limit e sem vazar arquivos)
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

    // 2. FALLBACK SEGURO: API do GitHub (caso aberto sem build prévio ou localmente)
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
                if (item.path.startsWith("1 - Planejamento/") || item.path.startsWith("4 - Projetos/") || item.path.startsWith("scripts/") || item.path.startsWith("_site/")) return false;
                
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

                // Caminho relativo para funcionar tanto no _site local quanto no GitHub Pages
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

// Variáveis da Camada Estratégica (Opcional e Não-Invasiva)
let dadosConcursosEstrategicos = [];
let dadosEditalEstrategico = [];
let dadosErrosEstrategicos = [];
let concursoSelecionadoId = localStorage.getItem("concurso_ativo_id") || "dataprev-2026";

