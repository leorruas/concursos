function normalizarTituloArtigo(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/^\s*\d+\s*[-–—.:]\s*/, "")
        .replace(/^\s*[-–—]+\s*/, "")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function removerH1Duplicado(markdown, tituloExibicao) {
    if (!markdown || !tituloExibicao) return markdown;

    return markdown.replace(/^#\s+(.+?)\s*$/m, (linhaCompleta, tituloH1) => {
        const h1Normalizado = normalizarTituloArtigo(tituloH1);
        const tituloNormalizado = normalizarTituloArtigo(tituloExibicao);

        return h1Normalizado && h1Normalizado === tituloNormalizado
            ? ""
            : linhaCompleta;
    });
}

async function carregarConteudoCompletoArtigo(artigo) {
    if (!artigo) throw new Error("Artigo inválido");

    // Compatibilidade com o carregamento antigo: se o artigo já chegou com
    // conteúdo completo e não foi explicitamente marcado como índice compacto,
    // não há motivo para baixá-lo novamente.
    if (artigo.conteudoCompleto === true) return artigo.conteudo || "";
    if (artigo.conteudoCompleto !== false && artigo.conteudo) {
        artigo.conteudoCompleto = true;
        return artigo.conteudo;
    }

    if (!artigo.path) throw new Error("Caminho público do artigo não encontrado");

    const resposta = await fetch(artigo.path);
    if (!resposta.ok) {
        throw new Error(`Falha ao carregar artigo (${resposta.status})`);
    }

    const texto = await resposta.text();
    artigo.conteudo = texto;
    artigo.conteudoCompleto = true;
    return texto;
}

async function abrirArtigo(artigo, atualizarRota = true) {
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

    const tituloNavegacao = artigo.tituloExibicao || formatarNomeArtigo(artigo.titulo);
    const breadcrumbs = document.getElementById("artigo-breadcrumbs");
    breadcrumbs.innerHTML = `
        <button type="button" class="breadcrumb-link" id="btn-bc-art-home">início</button>
        <span class="breadcrumb-separator">/</span>
        <button type="button" class="breadcrumb-link" id="btn-bc-art-cat">${limparNomeCategoria(artigo.categoria)}</button>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-atual">${tituloNavegacao}</span>
    `;
    document.getElementById("btn-bc-art-home")?.addEventListener("click", () => voltarParaHome(true));
    document.getElementById("btn-bc-art-cat")?.addEventListener("click", () => abrirDisciplina(artigo.categoria));

    artigoTitulo.textContent = tituloNavegacao;

    if (artigo.conteudoCompleto === false) {
        artigoCorpo.innerHTML = '<p class="mensagem-busca">carregando artigo…</p>';
    }

    try {
        await carregarConteudoCompletoArtigo(artigo);
    } catch (erro) {
        console.error("Erro ao abrir artigo:", artigo.path, erro);
        artigoCorpo.innerHTML = '<p class="mensagem-busca">não foi possível carregar este artigo. tente novamente.</p>';
        return;
    }

    // O usuário pode ter aberto outro artigo enquanto este fetch estava em curso.
    if (artigoAtual !== artigo) return;

    let markdownLimpo = removerFrontmatter(artigo.conteudo);
    markdownLimpo = removerH1Duplicado(markdownLimpo, tituloNavegacao);
    
    // 1. Suporte a Highlights com comentário associado: ==texto== %% [comentário]: meu comentário %%
    markdownLimpo = markdownLimpo.replace(/==([^=]+)==\s*%%\s*\[(?:comentário|comentario|nota|obs)\]:?\s*([\s\S]*?)\s*%%/gi, (match, texto, comentario) => {
        const comentarioLimpo = comentario.replace(/"/g, '&quot;').trim();
        return `<span class="obsidian-comment-wrapper"><mark class="obsidian-highlight with-comment">${texto}</mark><button type="button" class="comment-badge" aria-label="Ver anotação" title="Ver anotação"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></button><span class="comment-popover"><span class="comment-popover-header">anotação</span><span class="comment-popover-body">${comentarioLimpo}</span></span></span>`;
    });

    // 2. Suporte a Highlights simples: ==texto==
    markdownLimpo = markdownLimpo.replace(/==([^=]+)==/g, '<mark class="obsidian-highlight">$1</mark>');

    // 3. Suporte a Comentários explícitos inline sem highlight: %% [comentário]: meu comentário %%
    markdownLimpo = markdownLimpo.replace(/%%\s*\[(?:comentário|comentario|nota|obs)\]:?\s*([\s\S]*?)\s*%%/gi, (match, comentario) => {
        const comentarioLimpo = comentario.replace(/"/g, '&quot;').trim();
        return `<span class="obsidian-comment-wrapper"><button type="button" class="comment-badge standalone" aria-label="Ver anotação" title="Ver anotação"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></button><span class="comment-popover"><span class="comment-popover-header">anotação</span><span class="comment-popover-body">${comentarioLimpo}</span></span></span>`;
    });

    // 4. Oculta comentários brutos restantes do Obsidian (%% comentário geral %%) igual ao modo de leitura
    markdownLimpo = markdownLimpo.replace(/%%[\s\S]*?%%/g, '');

    marked.setOptions({ gfm: true, breaks: true });
    artigoCorpo.innerHTML = marked.parse(markdownLimpo);

    processarCalloutsObsidian();
    processarComentariosObsidian();
    processarWikilinks(artigoCorpo);
    processarBlocosCopiaveis(artigoCorpo);

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
