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

function obterNumeroArtigoNoIndice(artigo, caminhoHub, posicaoNoRoteiro) {
    if ((caminhoHub && artigo.sourcePath === caminhoHub) || ehResumoPrincipalDaMateria(artigo)) return "00";
    if (posicaoNoRoteiro != null) return String(posicaoNoRoteiro).padStart(2, "0");
    const capitulo = capitulosDireitoAdministrativo.get(artigo.articleId);
    if (capitulo != null) return String(capitulo).padStart(2, "0");
    const arquivo = (artigo.sourcePath || artigo.titulo || "").split("/").pop();
    const prefixo = /^(\d+)\s*-/.exec(arquivo)?.[1];
    return prefixo?.padStart(2, "0") || "";
}

// Ordem dos capítulos do EPUB de Direito Administrativo, usada no roteiro da Câmara.
const capitulosDireitoAdministrativo = new Map([
    ["art-0242ff68d8ca9529", 1],
    ["art-8946971690804376", 2],
    ["art-86dee064aef44ba4", 3],
    ["art-880b577a5c2ba82d", 4],
    ["art-e9d0b4352f3e1455", 5],
    ["art-a7703dd0e3fc4618", 6],
    ["art-b740cbbd05e54a26", 7],
    ["art-20294d2578a610bd", 8],
    ["art-733c0e474219cd22", 9],
    ["art-10a91f6bf9b53f1a", 10],
    ["art-61c7724cba33648a", 11],
    ["art-0bf3465cd357e76e", 12],
    ["art-6b9002df47604ea5", 13],
    ["art-b1f27b8954f08262", 14],
    ["art-d982b608fc646e5a", 15],
    ["art-2c1333aa75b06e9c", 16],
    ["art-18fed28e7af50bca", 17],
    ["art-71166a1de21cc98f", 18],
    ["art-cc7c145f65061c3a", 19],
    ["art-9f98650edd9e4278", 20],
    ["art-b3edb79bff314c93", 21],
    ["art-4c8a4b35894d4fa9", 22],
    ["art-c61cca38ed36e424", 23],
    ["art-bc65879a85f5b5d8", 24],
    ["art-ea06e80ef83f4af7", 25],
    ["art-cbd0b4285d514319", 26],
    ["art-e3be4825ac4c455a", 27]
]);

function ordenarCapitulosDireitoAdministrativo(a, b) {
    const hubA = ehResumoPrincipalDaMateria(a);
    const hubB = ehResumoPrincipalDaMateria(b);
    if (hubA !== hubB) return hubA ? -1 : 1;

    const capituloA = capitulosDireitoAdministrativo.get(a.articleId) ?? Infinity;
    const capituloB = capitulosDireitoAdministrativo.get(b.articleId) ?? Infinity;
    if (capituloA !== capituloB) return capituloA - capituloB;
    return ordenarArtigosDaMateria(a, b);
}

async function carregarCamadaEstrategica() {
    try {
        const [resConc, resEdital, resCatalogo] = await Promise.all([
            fetch("data/concursos.json"),
            fetch("data/edital-itens.json"),
            fetch("data/catalogo-materias-por-concurso.json", { cache: "no-cache" })
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
    // Glossário público por concurso: Câmara como padrão, CGU quando selecionada.
    const concursoGlossario = concursoAtivo.id === "cgu-2026" ? "cgu-2026" : "camara-2026";
    const destinoGlossario = construirRotaGlossario("", concursoGlossario);
    const acessoGlossario = document.getElementById("home-glossario-entry");
    const navGlossario = document.getElementById("nav-link-glossario");
    if (acessoGlossario) {
        acessoGlossario.classList.remove("escondido");
        acessoGlossario.href = destinoGlossario;
    }
    if (navGlossario) navGlossario.href = destinoGlossario;
    const tituloGlossario = document.getElementById("home-glossario-titulo");
    if (tituloGlossario) tituloGlossario.textContent = "glossário";
    const acessoFlashcards = document.getElementById("home-flashcards-entry");
    if (acessoFlashcards) acessoFlashcards.href =
        "https://concurso-estudo.leoruas.workers.dev/flashcards.html?concurso=" +
        encodeURIComponent(concursoAtivo.id);

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
    const usaCapitulosDoEbook = categoria === "Direito Administrativo" &&
        (modoBibliotecaCompleta || concursoSelecionadoId === "camara-2026");
    const artigosDaMateria = obterArtigosDaMateria(categoria);
    const artigos = usaCapitulosDoEbook
        ? [...artigosDaMateria].sort(ordenarCapitulosDireitoAdministrativo)
        : artigosDaMateria;
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

    // Entrada editorial no interior de Orçamento Público, nunca na grade de matérias.
    // Mantém os dois blueprints separados e visíveis conforme o concurso selecionado.
    if (categoria === "Orcamento Publico" && !modoBibliotecaCompleta) {
        const blueprintId = ({
            "camara-2026": "art-73b824d09ac16e25",
            "cgu-2026": "art-b6e9314c28d7f05a"
        })[concursoSelecionadoId];
        const blueprint = blueprintId && todosOsArtigos.find(artigo => artigo.articleId === blueprintId);
        if (blueprint) {
            const acesso = document.createElement("a");
            acesso.className = "disciplina-acao disciplina-acao-blueprint";
            acesso.href = rotaDoArtigo(blueprint, "", categoria);
            acesso.setAttribute("aria-label", "Abrir mapa do processo orçamentário");
            const numero = document.createElement("span");
            numero.className = "disciplina-acao-numero";
            numero.textContent = "↗";
            const conteudo = document.createElement("span");
            conteudo.className = "disciplina-acao-conteudo";
            const titulo = document.createElement("strong");
            titulo.textContent = concursoSelecionadoId === "camara-2026"
                ? "blueprint: processo orçamentário na Câmara"
                : "blueprint: ciclo orçamentário e auditoria da CGU";
            const detalhes = document.createElement("span");
            detalhes.className = "indice-resumo";
            detalhes.textContent = "mapa visual completo: atores, etapas, documentos e prazos";
            conteudo.append(titulo, detalhes);
            acesso.append(numero, conteudo);
            acesso.addEventListener("click", (event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
                event.preventDefault();
                abrirArtigo(blueprint, true, "", categoria);
            });
            disciplinaAcoes.appendChild(acesso);
        }
    }
    if (artigos.length === 0) {
        disciplinaAcoes.innerHTML = materiaSelecionada
            ? '<p class="mensagem-busca">Ainda não há artigos publicados para esta matéria neste concurso.</p>'
            : '<p class="mensagem-busca">Esta matéria não está mapeada para o concurso selecionado. Selecione outro concurso ou volte às matérias.</p>';
    }
    // O blueprint já tem entrada própria no topo da matéria. Não duplicá-lo na lista.
    const artigosNaLista = categoria === "Orcamento Publico" && !modoBibliotecaCompleta
        ? artigos.filter(artigo => ![
            "art-73b824d09ac16e25", "art-b6e9314c28d7f05a"
        ].includes(artigo.articleId))
        : artigos;
    let posicaoNoRoteiro = 0;
    artigosNaLista.forEach(artigo => {
        const acao = document.createElement("a");
        acao.className = "disciplina-acao";
        if (artigo.articleId === "art-b6e9314c28d7f05a" || artigo.articleId === "art-73b824d09ac16e25") {
            acao.classList.add("disciplina-acao-blueprint");
            acao.setAttribute("data-tipo-artigo", "blueprint");
        }
        const origem = categoria;
        acao.href = rotaDoArtigo(artigo, "", origem);

        const caminhoHub = materiaSelecionada?.hubSourcePath;
        const ehHub = artigo.sourcePath === caminhoHub || ehResumoPrincipalDaMateria(artigo);
        const posicao = materiaSelecionada && !ehHub ? ++posicaoNoRoteiro : undefined;
        const numeroFormatado = obterNumeroArtigoNoIndice(artigo, caminhoHub, posicao);
        const tituloFormatado = artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo);

        acao.setAttribute("aria-label", numeroFormatado ? numeroFormatado + " · " + tituloFormatado : tituloFormatado);
        acao.innerHTML = `
            <span class="disciplina-acao-numero" aria-hidden="true">${numeroFormatado}</span>
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
