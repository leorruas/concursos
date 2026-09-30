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
        // Se a pasta data/ não existir ou falhar, a biblioteca continua 100% funcional!
        dadosConcursosEstrategicos = [];
        dadosEditalEstrategico = [];
        dadosErrosEstrategicos = [];
    }
}

// Carregamento de Dados
async function carregarTodosOsArtigos() {
    inicializarTema();
    
    // 1. Carregamento autônomo da biblioteca de conhecimento (como no baseline)
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

    // 2. Enriquecimento da Home com a camada estratégica de concursos (se disponível)
    await carregarCamadaEstrategica();
    renderizarPainelConcursoHome();

    if (window.location.hash) {
        tratarHashNavegacao();
    }
}

// --------------------------------------------------------------------------
// RENDERIZADOR DO PAINEL DE CONCURSO (DESIGN SUÍÇO / REGRAS SEMÂNTICAS)
// --------------------------------------------------------------------------

function renderizarPainelConcursoHome() {
    const container = document.getElementById("painel-concurso-home");
    const conteudo = document.getElementById("concurso-home-conteudo");
    if (!container || !conteudo) return;

    const concursoAtivo = dadosConcursosEstrategicos.find(c => c.id === "dataprev-2026");
    if (!concursoAtivo) {
        container.classList.add("escondido");
        return;
    }

    container.classList.remove("escondido");

    const dataProva = new Date(concursoAtivo.dataProva);
    const hoje = new Date();
    const diffDias = Math.max(0, Math.ceil((dataProva - hoje) / (1000 * 60 * 60 * 24)));

    conteudo.innerHTML = `
        <div class="concurso-linha-topo">
            <div class="concurso-seletor-textual">
                <span class="concurso-seletor-rotulo">concurso:</span>
                <span class="concurso-btn-opcao concurso-selecionado" aria-current="true">${concursoAtivo.nome.toLowerCase()}</span>
            </div>
            <div class="concurso-dias-container">
                <span class="concurso-dias-destaque">${diffDias}</span> dias até a prova (${concursoAtivo.banca} · ${dataProva.toLocaleDateString("pt-BR")})
            </div>
        </div>
    `;
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

// Leitor de Artigo Individual
