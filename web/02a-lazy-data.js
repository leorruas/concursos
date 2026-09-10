async function carregarIndiceBuscaCompacto() {
    try {
        const resposta = await fetch("search-index.json");
        if (!resposta.ok) return [];
        const dados = await resposta.json();
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.warn("Índice compacto de busca indisponível; busca seguirá com metadados básicos.", erro);
        return [];
    }
}

// Substitui apenas a inicialização pesada do baseline. O restante de
// 02-data-home.js permanece intacto como camada estável de renderização.
carregarTodosOsArtigos = async function carregarTodosOsArtigosLeve() {
    inicializarTema();

    const resultados = await Promise.all([
        obterListaDeArquivos(),
        carregarIndiceBuscaCompacto(),
        carregarCamadaEstrategica()
    ]);

    const lista = resultados[0] || [];
    const indiceBusca = resultados[1] || [];
    const indicePorPath = new Map();

    indiceBusca.forEach((item) => {
        if (item && item.sourcePath) indicePorPath.set(item.sourcePath, item);
    });

    todosOsArtigos = lista.map((item) => {
        const registroBusca = indicePorPath.get(item.sourcePath);
        return {
            titulo: item.titulo,
            tituloExibicao: item.tituloExibicao || formatarNomeArtigo(item.titulo),
            conteudo: registroBusca ? registroBusca.conteudo : "",
            conteudoCompleto: false,
            sourcePath: item.sourcePath,
            path: item.path,
            categoria: item.categoria
        };
    });

    todasAsPastas = {};
    todosOsArtigos.forEach((artigo) => {
        if (!todasAsPastas[artigo.categoria]) todasAsPastas[artigo.categoria] = [];
        todasAsPastas[artigo.categoria].push(artigo);
    });

    Object.values(todasAsPastas).forEach((artigos) => {
        artigos.sort((a, b) => (a.sourcePath || a.path).localeCompare(
            b.sourcePath || b.path,
            "pt-BR",
            { numeric: true }
        ));
    });

    renderizarPastas();
    renderizarPainelConcursoHome();

    if (window.location.hash) tratarHashNavegacao();
};
