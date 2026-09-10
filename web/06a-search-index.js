// Adaptador entre a busca contextual existente e o índice estruturado gerado no build.
// Mantém fallback integral para o índice v1 ou para artigos carregados pelo baseline.
const obterTipoArtigoBuscaBase = obterTipoArtigoBusca;
const obterPapelArtigoBuscaBase = obterPapelArtigoBusca;
const criarEntradaIndiceBuscaBase = criarEntradaIndiceBusca;
const bonusProximidadeBase = bonusProximidade;
const pontuarEntradaBuscaBase = pontuarEntradaBusca;

obterTipoArtigoBusca = function obterTipoArtigoBuscaCompacto(artigo) {
    const dados = artigo && artigo.indiceBusca;
    if (dados && dados.tipo) return normalizarBusca(dados.tipo);
    return obterTipoArtigoBuscaBase(artigo);
};

obterPapelArtigoBusca = function obterPapelArtigoBuscaCompacto(artigo) {
    const caminho = String((artigo && artigo.sourcePath) || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    if (caminho.includes('/referencias/')) return 'referencia';
    return obterPapelArtigoBuscaBase(artigo);
};

criarEntradaIndiceBusca = function criarEntradaIndiceBuscaCompacta(artigo) {
    const dados = artigo && artigo.indiceBusca;
    if (!dados || !Array.isArray(dados.secoes)) {
        return criarEntradaIndiceBuscaBase(artigo);
    }

    const secoes = dados.secoes.map((secao) => {
        const titulo = secao.titulo || "";
        const texto = secao.trecho || "";
        const termos = secao.termos || normalizarBusca(texto);
        return {
            titulo,
            nivel: secao.nivel || 2,
            texto,
            termos,
            tituloNormalizado: normalizarBusca(titulo),
            // A relevância da seção usa todos os termos únicos extraídos no build;
            // o trecho curto é mantido apenas para apresentação ao usuário.
            textoNormalizado: normalizarBusca(`${termos} ${texto}`)
        };
    });

    const tituloReal = artigo.tituloExibicao || artigo.titulo;
    const tituloArquivo = artigo.titulo;
    const cabecalhos = secoes.map(secao => secao.titulo).filter(Boolean).join(" ");
    const categoria = limparNomeCategoria(artigo.categoria);
    const textosEdital = obterTextosEditalBusca(artigo);
    const termosCorpo = secoes.map(secao => secao.termos).filter(Boolean).join(" ");

    return {
        artigo,
        tituloReal: criarCampoIndice(tituloReal, 52),
        tituloArquivo: criarCampoIndice(tituloArquivo, 34),
        cabecalhos: criarCampoIndice(cabecalhos, 28),
        categoria: criarCampoIndice(categoria, 18),
        editalIntegral: criarCampoIndice(textosEdital.integral, 24),
        editalParcial: criarCampoIndice(textosEdital.parcial, 14),
        corpo: criarCampoIndice(termosCorpo, 8),
        secoes,
        itensEdital: obterItensEditalBusca(artigo),
        papel: obterPapelArtigoBusca(artigo),
        indiceCompacto: true
    };
};

bonusProximidade = function bonusProximidadeCompatibilidade(entrada, termos) {
    // O índice v2 deduplica termos para economizar memória/rede; por isso não
    // inventamos uma distância textual que o índice já não representa.
    if (entrada && entrada.indiceCompacto) return 0;
    return bonusProximidadeBase(entrada, termos);
};

pontuarEntradaBusca = function pontuarEntradaBuscaComPapel(entrada, consultaNormalizada, termos) {
    const score = pontuarEntradaBuscaBase(entrada, consultaNormalizada, termos);
    if (!score) return 0;

    // Referências brutas continuam pesquisáveis, mas não devem superar uma nota
    // canônica apenas por repetirem mais vezes o vocabulário da fonte original.
    if (entrada && entrada.papel === 'referencia') {
        return Math.round(score * 0.55 * 100) / 100;
    }
    return score;
};
