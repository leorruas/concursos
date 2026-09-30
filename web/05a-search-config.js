// Configuração semântica canônica da busca.
// search-index.json é derivado no build e NUNCA deve ser editado manualmente.
var CONFIG_BUSCA_VAULT = {
    versao: 1,
    aliases: [
        ["ia", "ai", "inteligencia artificial"],
        ["lgpd", "lei geral de protecao de dados", "protecao de dados", "dados pessoais"],
        ["lai", "lei de acesso a informacao", "acesso a informacao"],
        ["ux", "user experience", "experiencia do usuario"],
        ["fact checking", "fact-checking", "checagem de fatos", "verificacao de fatos"],
        ["assessoria de imprensa", "assessoria imprensa", "relacoes com a imprensa"],
        ["raciocinio logico", "logica", "logica proposicional"],
        ["jornalismo", "jornalista", "jornalistico", "jornalistica"],
        ["organizacao", "organizacoes", "organizacional"],
        ["comunicacao", "comunicacional"],
        ["midia", "midias"],
        ["publicidade", "publicitario", "publicitaria"],
        ["redacao", "texto discursivo", "discursiva"],
        ["cebraspe", "cespe"],
        ["fgv", "fundacao getulio vargas"]
    ],
    ranking: {
        pesoTituloSecao: 70,
        pesoTextoSecao: 18,
        multiplicadorFraseTituloSecao: 1.55,
        multiplicadorFraseTextoSecao: 0.52,
        bonusCoberturaTermosSecao: 52,
        bonusCoberturaIntegralSecao: 34,
        bonusH2: 4,
        contribuicaoSecao: 0.82,
        contribuicaoArtigo: 0.38,
        taxaMinimaTop1Benchmark: 0.72
    }
};
