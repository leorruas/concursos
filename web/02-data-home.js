function normalizarIdentificadorMateria(valor) {
    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\.md$/i, "")
        .replace(/[^a-z0-9]+/g, "");
}

function ehResumoPrincipalDaMateria(artigo) {
    const sourcePath = artigo?.sourcePath || "";
    if (!sourcePath.startsWith("3 - Materias/")) return false;

    if (String(artigo.tipo || "").trim().toLowerCase() === "hub") return true;

    const nomeArquivo = sourcePath.split("/").pop() || "";
    return normalizarIdentificadorMateria(nomeArquivo) === normalizarIdentificadorMateria(artigo.categoria);
}

function ordenarArtigosDaMateria(a, b) {
    const resumoA = ehResumoPrincipalDaMateria(a) ? 0 : 1;
    const resumoB = ehResumoPrincipalDaMateria(b) ? 0 : 1;

    if (resumoA !== resumoB) return resumoA - resumoB;

    return (a.sourcePath || a.path || "").localeCompare(
        b.sourcePath || b.path || "",
        "pt-BR",
        { numeric: true }
    );
}

async function carregarCamadaEstrategica() {
    try {
        const [resConc, resEdital, resCatalogo] = await Promise.all([
            fetch("data/concursos.json"),
            fetch("data/edital-itens.json"),
            fetch("data/catalogo-materias-por-concurso.json")
        ]);
        if (resConc.ok) dadosConcursosEstrategicos = await resConc.json();
        if (resEdital.ok) dadosEditalEstrategico = await resEdital.json();
        // O ranking público não usa históricos pessoais de erros.
        dadosErrosEstrategicos = [];
        if (resCatalogo.ok) {
            const catalogo = await resCatalogo.json();
            if (catalogo?.schemaVersion === 1 && Array.isArray(catalogo.contests)) {
                dadosCatalogoMaterias = catalogo;
            }
        }
    } catch (e) {
        // Se a pasta data/ não existir ou falhar, a biblioteca continua 100% funcional!
        dadosConcursosEstrategicos = [];
        dadosEditalEstrategico = [];
        dadosErrosEstrategicos = [];
        dadosCatalogoMaterias = null;
    }
}

// Carregamento de Dados
async function carregarTodosOsArtigos() {
    inicializarTema();
    
    // 1. Carregamento autônomo da biblioteca de conhecimento (como no baseline)
    const lista = await obterListaDeArquivos();

    const promessas = lista.map(async (item) => {
        try {
            const res = await fetch(item.path, { cache: "no-cache" });
            if (!res.ok) return null;
            const texto = await res.text();
            
            const tipoMatch = texto.match(/^---\s*[\r\n]+[\s\S]*?^type:\s*["']?([^"'\r\n]+)["']?/m);

            return {
                titulo: item.titulo,
                tituloExibicao: extrairTituloReal(texto, item.titulo),
                tipo: tipoMatch?.[1]?.trim().toLowerCase() || "",
                conteudo: texto,
                articleId: item.articleId,
            articleSlug: item.articleSlug,
            articleSlugAliases: item.articleSlugAliases || [],
            articleAliases: item.articleAliases || [],
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
        artigos.sort(ordenarArtigosDaMateria);
    });

    // Resolver concurso e catálogo antes da primeira apresentação da grade.
    await carregarCamadaEstrategica();
    renderizarPainelConcursoHome();
    renderizarPastas();

    if (window.location.hash) {
        await tratarHashNavegacao();
    }
}

// --------------------------------------------------------------------------
// RENDERIZADOR DO PAINEL DE CONCURSO (DESIGN SUÍÇO / REGRAS SEMÂNTICAS)
// --------------------------------------------------------------------------
let modoBibliotecaCompleta = false;

function persistirEscopoNaRota() {
    if (typeof window === "undefined" || typeof history === "undefined" || typeof parsearHashVault !== "function") return;
    const rota = parsearHashVault(window.location.hash);
    let destino;
    if (rota.tipo === "disciplina") {
        destino = obterRotaCategoria(rota.categoria);
    } else if (rota.tipo === "artigo") {
        destino = rota.articleId ? construirRotaArtigoId(rota.articleId, rota.secao, concursoSelecionadoId, modoBibliotecaCompleta, rota.origem) : construirRotaArtigo(rota.categoria, rota.titulo, rota.secao, concursoSelecionadoId, modoBibliotecaCompleta, rota.origem);
    } else {
        destino = construirRotaHome(concursoSelecionadoId, modoBibliotecaCompleta);
    }
    if (destino !== window.location.hash) history.pushState({ concursoId: concursoSelecionadoId, biblioteca: modoBibliotecaCompleta }, "", destino);
    if (rota.tipo === "disciplina") abrirDisciplina(rota.categoria, false);
    else if (rota.tipo === "artigo") tratarHashNavegacao();
}

function selecionarBibliotecaCompleta() {
    if (modoBibliotecaCompleta) return;
    modoBibliotecaCompleta = true;
    if (typeof buscaGlobalAtiva !== "undefined") buscaGlobalAtiva = false;
    renderizarPainelConcursoHome();
    renderizarPastas();
    persistirEscopoNaRota();
}

// Ponto único de mudança de concurso, reutilizável no seletor da lista interna.
function selecionarConcurso(novoConcursoId) {
    if (!dadosConcursosEstrategicos.some(item => item.id === novoConcursoId)) return;
    if (concursoSelecionadoId === novoConcursoId && !modoBibliotecaCompleta) return;
    modoBibliotecaCompleta = false;
    if (typeof buscaGlobalAtiva !== "undefined") buscaGlobalAtiva = false;
    concursoSelecionadoId = novoConcursoId;
    localStorage.setItem("concurso_ativo_id", novoConcursoId);
    renderizarPainelConcursoHome();
    renderizarPastas();
    persistirEscopoNaRota();
}

function obterProgramaSelecionado() {
    if (modoBibliotecaCompleta) return null;
    const dados = typeof dadosCatalogoMaterias !== "undefined" ? dadosCatalogoMaterias : null;
    return dados?.contests?.find(item => item.concursoId === concursoSelecionadoId) || null;
}

function montarSeletorConcursos(concursoIdAtivo) {
    return dadosConcursosEstrategicos.filter(c => c.dataProva).map((concurso, indice) => {
        const selecionado = concurso.id === concursoIdAtivo;
        const separador = indice > 0
            ? '<span class="concurso-barra-separadora" aria-hidden="true">/</span>'
            : '';
        return `${separador}<button
            type="button"
            class="concurso-btn-opcao${selecionado ? " concurso-selecionado" : ""}"
            data-concurso-id="${concurso.id}"
            aria-pressed="${selecionado ? "true" : "false"}"
        >${concurso.nome.toLowerCase()}</button>`;
    }).join("") + '<span class="concurso-barra-separadora" aria-hidden="true">/</span>' +
        `<button type="button" class="concurso-btn-opcao${modoBibliotecaCompleta ? " concurso-selecionado" : ""}" data-biblioteca-completa="true" aria-pressed="${modoBibliotecaCompleta}">todas matérias</button>`;
}

function obterArtigosDaMateria(categoria) {
    const programa = obterProgramaSelecionado();
    if (!programa) return todasAsPastas[categoria] || [];

    const materia = programa.subjects.find(item => item.categoria === categoria);
    if (!materia) return [];

    const porCaminho = new Map(todosOsArtigos.map(artigo => [artigo.sourcePath, artigo]));
    const caminhos = [materia.hubSourcePath, ...materia.articleSourcePaths];
    return [...new Set(caminhos)].map(caminho => porCaminho.get(caminho)).filter(Boolean);
}

function renderizarPainelConcursoHome() {
    const container = document.getElementById("painel-concurso-home");
    const conteudo = document.getElementById("concurso-home-conteudo");
    if (!container || !conteudo) return;

    const concursosComData = dadosConcursosEstrategicos.filter(c => c.dataProva);
    const agora = new Date();
    const selecionado = concursosComData.find(c => c.id === concursoSelecionadoId);
    const proximo = [...concursosComData]
        .filter(c => new Date(c.dataProva) >= agora)
        .sort((a, b) => new Date(a.dataProva) - new Date(b.dataProva))[0];
    // A escolha explícita continua válida mesmo quando a data da prova já passou.
    const concursoAtivo = selecionado || proximo || concursosComData[0];

    if (!concursoAtivo) {
        container.classList.add("escondido");
        return;
    }

    container.classList.remove("escondido");
    concursoSelecionadoId = concursoAtivo.id;
    const acessoGlossario = document.getElementById("home-glossario-entry");
    if (acessoGlossario) acessoGlossario.classList[concursoAtivo.id === "cgu-2026" ? "remove" : "add"]("escondido");

    const dataProva = new Date(concursoAtivo.dataProva);
    const hoje = new Date();
    const diffDias = Math.max(0, Math.ceil((dataProva - hoje) / (1000 * 60 * 60 * 24)));

    const seletorConcursos = montarSeletorConcursos(concursoAtivo.id);

    conteudo.innerHTML = `
        <div class="concurso-linha-topo">
            <div class="concurso-seletor-textual">
                <span class="concurso-seletor-rotulo">concurso:</span>
                ${seletorConcursos}
            </div>
            <div class="concurso-dias-container">
                <span class="concurso-dias-destaque">${diffDias}</span> dias até a prova (${concursoAtivo.banca} · ${dataProva.toLocaleDateString("pt-BR")})
            </div>
        </div>
    `;

    // Um único registro por controle: evita callbacks sobrescritos em renderizações e DOMs simplificados.
    conteudo.querySelectorAll(".concurso-btn-opcao").forEach(botao => {
        if (botao.dataset?.concursoId) {
            botao.addEventListener("click", () => selecionarConcurso(botao.dataset.concursoId));
        } else if (botao.dataset?.bibliotecaCompleta) {
            botao.addEventListener("click", selecionarBibliotecaCompleta);
        }
    });
}

// Renderiza a Grade Suíça
function renderizarPastas() {
    const orientacoesContainer = document.getElementById("orientacoes-container");
    const pastasContainer = document.getElementById("pastas-container");
    if (!pastasContainer || !orientacoesContainer) return;

    pastasContainer.innerHTML = "";
    orientacoesContainer.innerHTML = "";

    const programa = obterProgramaSelecionado();
    const materias = programa?.subjects?.slice().sort((a, b) => a.ordem - b.ordem) || [];
    const materiaPorCategoria = new Map(materias.map(m => [m.categoria, m]));
    const todasCategorias = programa
        ? materias.map(m => m.categoria)
        : Object.keys(todasAsPastas).sort((a, b) => {
            const numA = informacoesDisciplinas[a]?.numero || "99";
            const numB = informacoesDisciplinas[b]?.numero || "99";
            return numA.localeCompare(numB, "pt-BR", { numeric: true });
        });
    const titulo = document.getElementById("disciplinas-titulo");
    const concurso = dadosConcursosEstrategicos.find(c => c.id === concursoSelecionadoId);
    if (titulo) titulo.textContent = programa
        ? "matérias: " + (concurso?.nome || concursoSelecionadoId).toLowerCase()
        : "matérias: biblioteca geral";
    if (!programa && concursoSelecionadoId && !modoBibliotecaCompleta) {
        const aviso = document.createElement("p");
        aviso.className = "mensagem-busca";
        aviso.textContent = "Catálogo indisponível: exibindo a biblioteca geral, sem filtro por edital.";
        pastasContainer.appendChild(aviso);
    }

    const categoriasOrientacao = ["00. Simulados", "00. Desempenho"];

    // Numeração editorial da biblioteca geral: garantir número também para futuras matérias.
    // O filtro por edital previsto no planejamento substituirá esta ordem pela do concurso.
    const inicioAdicionais = Math.max(...Object.values(informacoesDisciplinas)
        .map(info => Number(info.numero)).filter(Number.isFinite)) + 1;
    const categoriasNovas = todasCategorias.filter(categoria => !informacoesDisciplinas[categoria]);
    const numerosNovos = new Map(categoriasNovas.map((categoria, i) =>
        [categoria, String(inicioAdicionais + i).padStart(2, "0")]
    ));

    todasCategorias.forEach(categoria => {
        const registro = materiaPorCategoria.get(categoria);
        const infoBase = informacoesDisciplinas[categoria] || {};
        const info = {
            numero: registro ? String(registro.ordem).padStart(2, "0") : (infoBase.numero || numerosNovos.get(categoria)),
            resumo: infoBase.resumo || ((todasAsPastas[categoria]?.length || 0) + " artigos disponíveis")
        };
        const nomeExibicao = registro?.rotulo?.toLowerCase() || limparNomeCategoria(categoria);

        const card = document.createElement("a");
        card.className = "disciplina-card";
        card.href = obterRotaCategoria(categoria);
        card.setAttribute("aria-label", `Abrir ${nomeExibicao}`);

        card.innerHTML = `
            <span class="indice-numero">${info.numero}</span>
            <span class="disciplina-card-conteudo">
                <strong>${nomeExibicao}</strong>
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

    // O relatório é uma página de apoio ao estudo, não uma disciplina do edital.
    // Entrada visual no mesmo padrão dos cards de matéria, com rota própria de artigo.
    if (!modoBibliotecaCompleta && concursoSelecionadoId === "camara-2026") {
        const relatorio = todosOsArtigos.find(artigo => artigo.articleId === "art-e1d0a2026ca8f010");
        if (relatorio) {
            const card = document.createElement("a");
            card.className = "disciplina-card";
            card.href = rotaDoArtigo(relatorio);
            card.setAttribute("aria-label", "Abrir relatório de estudos da Câmara");
            card.innerHTML = `
                <span class="indice-numero">•</span>
                <span class="disciplina-card-conteudo">
                    <strong>relatório de estudos</strong>
                    <span class="indice-resumo">placar, diagnóstico e leituras prioritárias</span>
                </span>
            `;
            card.addEventListener("click", (event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
                event.preventDefault();
                abrirArtigo(relatorio, true);
            });
            pastasContainer.appendChild(card);
        }
    }
}

// Visualizador da Disciplina
function abrirDisciplina(categoria, atualizarRota = true) {
    if (!(todasAsPastas[categoria]?.length) && !obterProgramaSelecionado()?.subjects.some(m => m.categoria === categoria)) return;
    const artigos = obterArtigosDaMateria(categoria);
    const materiaSelecionada = obterProgramaSelecionado()
        ?.subjects.find(item => item.categoria === categoria) || null;

    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("glossario-pagina")?.classList.add("escondido");
    document.getElementById("painel-concurso-home")?.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    leitorDeDisciplina.classList.remove("escondido");
    artigoAtual = null;
    atualizarDestinoIndiceTopo("");

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

    const tituloMateria = materiaSelecionada?.rotulo?.toLowerCase() || limparNomeCategoria(categoria);
    disciplinaCabecalho.innerHTML = `
        <p class="disciplina-rotulo">matéria • ${artigos.length} ${artigos.length === 1 ? "artigo" : "artigos"}</p>
        <h2>${tituloMateria}</h2>
        <div class="disciplina-concurso-seletor">
            <div class="concurso-seletor-textual" role="group" aria-label="Filtrar artigos por concurso">
                <span class="concurso-seletor-rotulo">concurso:</span>
                ${montarSeletorConcursos(concursoSelecionadoId)}
            </div>
        </div>
    `;

    disciplinaCabecalho.querySelectorAll(".disciplina-concurso-seletor .concurso-btn-opcao[data-concurso-id]")
        .forEach(botao => botao.addEventListener("click", () => {
            const proximoId = botao.dataset.concursoId;
            if (!proximoId || proximoId === concursoSelecionadoId) return;
            selecionarConcurso(proximoId);
        }));
    disciplinaCabecalho.querySelectorAll(".disciplina-concurso-seletor .concurso-btn-opcao[data-biblioteca-completa]")
        .forEach(botao => botao.addEventListener("click", selecionarBibliotecaCompleta));

    disciplinaAcoes.innerHTML = "";
    if (artigos.length === 0) {
        disciplinaAcoes.innerHTML = materiaSelecionada
            ? '<p class="mensagem-busca">Ainda não há artigos publicados para esta matéria neste concurso.</p>'
            : '<p class="mensagem-busca">Esta matéria não está mapeada para o concurso selecionado. Selecione outro concurso ou volte às matérias.</p>';
    }
    artigos.forEach((artigo, idx) => {
        const acao = document.createElement("a");
        acao.className = "disciplina-acao";
        const origem = categoria;
        acao.href = rotaDoArtigo(artigo, "", origem);
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
            abrirArtigo(artigo, true, "", origem);
        });

        disciplinaAcoes.appendChild(acao);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Leitor de Artigo Individual
