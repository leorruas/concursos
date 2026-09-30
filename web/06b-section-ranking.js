// Ranking v3: a unidade principal de relevância é a melhor seção do artigo.
// Mantém sinais contextuais do ranking anterior, mas impede que contexto fraco
// vença uma correspondência lexical forte em um H2/H3.
const pontuarEntradaBuscaArtigoBase = pontuarEntradaBusca;
const obterSecaoMaisRelevanteBase = obterSecaoMaisRelevante;
const CONFIG_RANKING_BUSCA = typeof CONFIG_BUSCA_VAULT !== "undefined" && CONFIG_BUSCA_VAULT.ranking
    ? CONFIG_BUSCA_VAULT.ranking
    : {};

function parametroRankingBusca(nome, fallback) {
    const valor = Number(CONFIG_RANKING_BUSCA[nome]);
    return Number.isFinite(valor) ? valor : fallback;
}

function pontuarSecaoBusca(secao, consultaNormalizada, termos) {
    if (!secao) return 0;

    const tituloCampo = criarCampoIndice(secao.titulo || "", parametroRankingBusca("pesoTituloSecao", 70));
    const textoCampo = criarCampoIndice(
        [secao.termos || "", secao.textoNormalizado || "", secao.texto || ""].join(" "),
        parametroRankingBusca("pesoTextoSecao", 18)
    );
    const consultaEssencial = termos.join(" ");
    const aliasesConsulta = obterAliasesConsulta(consultaNormalizada);
    let score = 0;

    score += bonusFraseCampo(tituloCampo, consultaNormalizada, consultaEssencial, aliasesConsulta, parametroRankingBusca("multiplicadorFraseTituloSecao", 1.55));
    score += bonusFraseCampo(textoCampo, consultaNormalizada, consultaEssencial, aliasesConsulta, parametroRankingBusca("multiplicadorFraseTextoSecao", 0.52));

    let correspondencias = 0;
    termos.forEach(termo => {
        const titulo = qualidadeMatchToken(termo, tituloCampo) * tituloCampo.peso;
        const texto = qualidadeMatchToken(termo, textoCampo) * textoCampo.peso;
        const melhor = Math.max(titulo, texto);
        if (melhor > 0) {
            correspondencias += 1;
            score += melhor;
        }
    });

    if (correspondencias === 0) return 0;

    const minimo = termos.length <= 2 ? termos.length : Math.max(2, Math.ceil(termos.length * 0.6));
    if (correspondencias < minimo) return 0;

    const cobertura = correspondencias / Math.max(1, termos.length);
    score += cobertura * parametroRankingBusca("bonusCoberturaTermosSecao", 52);
    if (cobertura === 1) score += parametroRankingBusca("bonusCoberturaIntegralSecao", 34);
    if (secao.nivel === 2) score += parametroRankingBusca("bonusH2", 4);

    return Math.max(0, Math.round(score * 100) / 100);
}

function calcularMelhorSecaoBusca(entrada, consultaNormalizada, termos) {
    let melhorSecao = null;
    let melhorScore = 0;

    (entrada.secoes || []).forEach(secao => {
        const score = pontuarSecaoBusca(secao, consultaNormalizada, termos);
        if (score > melhorScore) {
            melhorScore = score;
            melhorSecao = secao;
        }
    });

    return { secao: melhorSecao, score: melhorScore };
}

obterSecaoMaisRelevante = function obterSecaoMaisRelevanteV3(entrada, termo, termos) {
    const consultaNormalizada = normalizarBusca(termo);
    const detalhe = calcularMelhorSecaoBusca(entrada, consultaNormalizada, termos);
    if (detalhe.secao) return detalhe.secao;
    return obterSecaoMaisRelevanteBase(entrada, termo, termos);
};

pontuarEntradaBusca = function pontuarEntradaBuscaV3(entrada, consultaNormalizada, termos) {
    const scoreArtigo = pontuarEntradaBuscaArtigoBase(entrada, consultaNormalizada, termos);
    const detalhe = calcularMelhorSecaoBusca(entrada, consultaNormalizada, termos);

    if (!scoreArtigo && !detalhe.score) return 0;

    // A seção responde pela maior parte da relevância. O score legado fica como
    // sinal de título do artigo, categoria, edital ativo, erro recorrente e papel.
    const combinado =
        (detalhe.score * parametroRankingBusca("contribuicaoSecao", 0.82)) +
        (scoreArtigo * parametroRankingBusca("contribuicaoArtigo", 0.38));
    return Math.max(0, Math.round(combinado * 100) / 100);
};
