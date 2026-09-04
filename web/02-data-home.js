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

    if (!dadosConcursosEstrategicos || dadosConcursosEstrategicos.length === 0) {
        container.classList.add("escondido");
        return;
    }

    container.classList.remove("escondido");

    const concursoAtivo = dadosConcursosEstrategicos.find(c => c.id === concursoSelecionadoId) || dadosConcursosEstrategicos[0];
    const dataProva = new Date(concursoAtivo.dataProva);
    const hoje = new Date();
    const diffDias = Math.ceil((dataProva - hoje) / (1000 * 60 * 60 * 24));

    // Itens do edital do concurso selecionado
    const itensConcurso = dadosEditalEstrategico.filter(i => i.concursoId === concursoAtivo.id);
    const totalItens = itensConcurso.length;

    // 1. Cobertura estrutural: itens que possuem notaPath definida e existente
    const mapeados = itensConcurso.filter(i => !!i.notaPath);
    let textoCobertura = "—";
    let detalheCobertura = "sem itens cadastrados no edital";
    if (totalItens > 0) {
        const pctCobertura = Math.round((mapeados.length / totalItens) * 100);
        textoCobertura = `${pctCobertura}%`;
        detalheCobertura = `${mapeados.length} de ${totalItens} tópicos do edital mapeados no vault`;
    }

    // 2. Exposição: itens trabalhados em sessões registradas
    // Se o concurso não tem rastreio formal de sessões ou se nenhum item foi marcado, registrar ausência de dados
    const itensComRastreioExposicao = itensConcurso.filter(i => typeof i.exposicaoEstudo === "boolean");
    let textoExposicao = "—";
    let detalheExposicao = "dados insuficientes de sessões";
    if (itensComRastreioExposicao.length > 0 && totalItens > 0) {
        const expostos = itensConcurso.filter(i => i.exposicaoEstudo === true);
        const pctExposicao = Math.round((expostos.length / totalItens) * 100);
        textoExposicao = `${pctExposicao}%`;
        detalheExposicao = `${expostos.length} de ${totalItens} tópicos já trabalhados`;
    }

    // 3. Domínio: somente quando houver evidência empírica por simulados
    const comEvidencia = itensConcurso.filter(i => i.dominioMensuravel === true && i.evidencia);
    const validados = comEvidencia.filter(i => i.evidencia.status === "validado");
    let textoDominio = "ainda não mensurável";
    let detalheDominio = "requer evidência empírica por simulados";
    if (validados.length > 0 && totalItens > 0) {
        const pctDom = Math.round((validados.length / totalItens) * 100);
        textoDominio = `${pctDom}%`;
        detalheDominio = `${validados.length} de ${totalItens} tópicos com retenção comprovada`;
    }

    // Próxima Prioridade Real (a partir de erros ou tópicos em reforço)
    const erroPendente = dadosErrosEstrategicos.find(e => e.concursoId === concursoAtivo.id && e.status === "pendente");
    let artigoParaRevisar = null;
    if (erroPendente && erroPendente.notaPath) {
        const nomeNota = erroPendente.notaPath.split("/").pop().replace(".md", "");
        artigoParaRevisar = todosOsArtigos.find(a => a.titulo.toLowerCase() === nomeNota.toLowerCase());
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
                    <p class="concurso-prioridade-texto">${erroPendente.assunto}</p>
                    <p class="concurso-prioridade-sub">${erroPendente.disciplina} · Fonte: ${erroPendente.sourcePath}</p>
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

    // Eventos dos botões de seleção de concurso
    conteudo.querySelectorAll(".concurso-btn-opcao").forEach(btn => {
        btn.addEventListener("click", () => {
            concursoSelecionadoId = btn.dataset.concursoId;
            localStorage.setItem("concurso_ativo_id", concursoSelecionadoId);
            renderizarPainelConcursoHome();
        });
    });

    // Evento de clique no link de revisão
    const linkRevisao = conteudo.querySelector(".concurso-link-estudo");
    if (linkRevisao && artigoParaRevisar) {
        linkRevisao.addEventListener("click", (e) => {
            e.preventDefault();
            abrirArtigo(artigoParaRevisar);
        });
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
