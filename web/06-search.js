function normalizarBusca(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function extrairCabecalhosBusca(conteudo) {
    if (!conteudo) return "";
    const cabecalhos = [];
    const regex = /^#{2,3}\s+(.+)$/gm;
    let match;

    while ((match = regex.exec(removerFrontmatter(conteudo))) !== null) {
        cabecalhos.push(match[1]);
    }

    return cabecalhos.join(" ");
}

function pontuarArtigoBusca(artigo, consultaNormalizada, termos) {
    const tituloReal = normalizarBusca(artigo.tituloExibicao || artigo.titulo);
    const tituloArquivo = normalizarBusca(artigo.titulo);
    const cabecalhos = normalizarBusca(extrairCabecalhosBusca(artigo.conteudo));
    const categoria = normalizarBusca(limparNomeCategoria(artigo.categoria));
    const corpo = normalizarBusca(removerFrontmatter(artigo.conteudo));

    const campos = [tituloReal, tituloArquivo, cabecalhos, categoria, corpo];
    const todosOsTermosPresentes = termos.every(termo => campos.some(campo => campo.includes(termo)));
    if (!todosOsTermosPresentes) return 0;

    let score = 0;

    if (tituloReal === consultaNormalizada) score += 160;
    else if (tituloReal.startsWith(consultaNormalizada)) score += 120;
    else if (tituloReal.includes(consultaNormalizada)) score += 100;

    if (tituloArquivo.includes(consultaNormalizada)) score += 70;
    if (cabecalhos.includes(consultaNormalizada)) score += 45;
    if (categoria.includes(consultaNormalizada)) score += 25;
    if (corpo.includes(consultaNormalizada)) score += 15;

    termos.forEach(termo => {
        if (tituloReal.includes(termo)) score += 45;
        if (tituloArquivo.includes(termo)) score += 30;
        if (cabecalhos.includes(termo)) score += 20;
        if (categoria.includes(termo)) score += 10;
        if (corpo.includes(termo)) score += 5;
    });

    if (termos.every(termo => tituloReal.includes(termo))) score += 35;
    if (termos.every(termo => cabecalhos.includes(termo))) score += 20;

    return score;
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

    const termoOriginal = termoBusca.trim();
    const consultaNormalizada = normalizarBusca(termoOriginal);
    const termos = consultaNormalizada.split(" ").filter(Boolean);

    document.getElementById("painel-concurso-home")?.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.remove("escondido");

    if (consultaNormalizada.length < 2) {
        containerResultados.innerHTML = `<p class="mensagem-busca">digite ao menos <strong>duas letras</strong> para pesquisar.</p>`;
        return;
    }

    const ranqueados = todosOsArtigos
        .map(artigo => ({
            artigo,
            score: pontuarArtigoBusca(artigo, consultaNormalizada, termos)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return (a.artigo.sourcePath || a.artigo.titulo).localeCompare(
                b.artigo.sourcePath || b.artigo.titulo,
                "pt-BR",
                { numeric: true }
            );
        });

    exibirResultados(ranqueados.map(item => item.artigo), termoOriginal);
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
                    <strong>${destacarTexto(artigo.tituloExibicao || artigo.titulo, termo)}</strong>
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

    const termos = termo
        .trim()
        .split(/\s+/)
        .filter(t => t.length > 1)
        .sort((a, b) => b.length - a.length);

    if (termos.length === 0) return texto;

    const padrao = termos
        .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");

    const regex = new RegExp(`(${padrao})`, "gi");
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
    const semFm = removerFrontmatter(conteudo).replace(/[#*`_~\[\]]/g, " ");
    const textoNormalizado = normalizarBusca(semFm);
    const consultaNormalizada = normalizarBusca(termo);
    const termos = consultaNormalizada.split(" ").filter(Boolean);

    let pos = textoNormalizado.indexOf(consultaNormalizada);
    let comprimento = consultaNormalizada.length;

    if (pos === -1) {
        for (const parte of termos) {
            pos = textoNormalizado.indexOf(parte);
            if (pos !== -1) {
                comprimento = parte.length;
                break;
            }
        }
    }

    if (pos === -1) return semFm.substring(0, 140) + (semFm.length > 140 ? "..." : "");

    const inicio = Math.max(0, pos - 40);
    const fim = Math.min(semFm.length, pos + comprimento + 80);
    let trecho = semFm.substring(inicio, fim);
    if (inicio > 0) trecho = "..." + trecho;
    if (fim < semFm.length) trecho = trecho + "...";
    return trecho;
}
