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
    document.getElementById("painel-concurso-home")?.classList.add("escondido");
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
