const STOPWORDS_BUSCA = new Set([
    "a", "ao", "aos", "as", "como", "com", "da", "das", "de", "do", "dos", "e", "em", "entre",
    "essa", "esse", "esta", "este", "eu", "exemplo", "exemplos", "explica", "explicar", "faz", "foi",
    "na", "nas", "no", "nos", "o", "os", "ou", "para", "pela", "pelas", "pelo", "pelos", "por",
    "qual", "quais", "que", "se", "ser", "sobre", "tem", "uma", "um", "vs", "versus", "diferenca",
    "diferencas", "conceito", "conceitos", "quem", "quando", "onde", "porque", "pra", "significa",
    "significado", "definicao", "definir", "explicacao", "funciona", "funcionar", "relacao", "relacoes"
]);

const GRUPOS_ALIASES_BUSCA = [
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
].map(grupo => grupo.map(item => normalizarBusca(item)));

let indiceBuscaArtigos = [];
let assinaturaIndiceBusca = "";

function normalizarBusca(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[“”"'`´’]/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function tokenizarBusca(texto) {
    return normalizarBusca(texto).split(" ").filter(Boolean);
}

function limparMarkdownParaBusca(markdown) {
    return removerFrontmatter(markdown || "")
        .replace(/```[\s\S]*?```/g, match => match.replace(/^```[^\n]*\n?/, "").replace(/```$/, ""))
        .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
        .replace(/\[\[([^\]]+)\]\]/g, "$1")
        .replace(/<[^>]+>/g, " ")
        .replace(/[#>*_~|]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function extrairCabecalhosBusca(conteudo) {
    if (!conteudo) return "";
    const cabecalhos = [];
    const regex = /^#{2,3}\s+(.+)$/gm;
    let match;
    while ((match = regex.exec(removerFrontmatter(conteudo))) !== null) {
        cabecalhos.push(match[1].trim());
    }
    return cabecalhos.join(" ");
}

function extrairSecoesBusca(conteudo) {
    const markdown = removerFrontmatter(conteudo || "");
    const linhas = markdown.split(/\r?\n/);
    const secoes = [];
    let titulo = "";
    let nivel = 0;
    let buffer = [];

    const salvar = () => {
        const texto = limparMarkdownParaBusca(buffer.join("\n"));
        if (texto || titulo) {
            secoes.push({
                titulo,
                nivel,
                texto,
                tituloNormalizado: normalizarBusca(titulo),
                textoNormalizado: normalizarBusca(texto)
            });
        }
        buffer = [];
    };

    linhas.forEach(linha => {
        const match = linha.match(/^(#{2,3})\s+(.+)$/);
        if (match) {
            salvar();
            nivel = match[1].length;
            titulo = match[2].trim();
        } else {
            buffer.push(linha);
        }
    });
    salvar();
    return secoes;
}

function obterTipoArtigoBusca(artigo) {
    const conteudo = artigo?.conteudo || "";
    const frontmatter = conteudo.match(/^---\s*([\s\S]*?)---/);
    if (!frontmatter) return "";
    const tipo = frontmatter[1].match(/^type:\s*["']?([^"'\n]+)["']?\s*$/m);
    return normalizarBusca(tipo?.[1] || "");
}

function obterPapelArtigoBusca(artigo) {
    const caminho = String(artigo?.sourcePath || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    const tipo = obterTipoArtigoBusca(artigo);
    if (caminho.endsWith("/avancos.md")) return "desempenho";
    if (tipo === "auditoria") return "auditoria";
    if (tipo === "hub") return "hub";
    return "conteudo";
}

function obterItensEditalBusca(artigo) {
    if (!artigo || !artigo.sourcePath || !Array.isArray(dadosEditalEstrategico)) return [];
    return dadosEditalEstrategico.filter(item =>
        item &&
        item.notaPath === artigo.sourcePath &&
        item.coberturaNota !== "ausente"
    );
}

function obterTextosEditalBusca(artigo) {
    const grupos = { integral: [], parcial: [] };
    obterItensEditalBusca(artigo).forEach(item => {
        const texto = [item.codigo, item.disciplina, item.descricao, item.topico, item.concursoId]
            .filter(Boolean)
            .join(" ");
        const cobertura = item.coberturaNota === "parcial" ? "parcial" : "integral";
        grupos[cobertura].push(texto);
    });
    return { integral: grupos.integral.join(" "), parcial: grupos.parcial.join(" ") };
}

function criarCampoIndice(texto, peso) {
    const normalizado = normalizarBusca(texto);
    const tokens = tokenizarBusca(normalizado);
    return { texto: normalizado, peso, tokens, tokenSet: new Set(tokens) };
}

function criarEntradaIndiceBusca(artigo) {
    const tituloReal = artigo.tituloExibicao || artigo.titulo;
    const tituloArquivo = artigo.titulo;
    const cabecalhos = extrairCabecalhosBusca(artigo.conteudo);
    const categoria = limparNomeCategoria(artigo.categoria);
    const textosEdital = obterTextosEditalBusca(artigo);
    const corpo = limparMarkdownParaBusca(artigo.conteudo);
    return {
        artigo,
        tituloReal: criarCampoIndice(tituloReal, 52),
        tituloArquivo: criarCampoIndice(tituloArquivo, 34),
        cabecalhos: criarCampoIndice(cabecalhos, 28),
        categoria: criarCampoIndice(categoria, 18),
        editalIntegral: criarCampoIndice(textosEdital.integral, 24),
        editalParcial: criarCampoIndice(textosEdital.parcial, 14),
        corpo: criarCampoIndice(corpo, 8),
        secoes: extrairSecoesBusca(artigo.conteudo),
        itensEdital: obterItensEditalBusca(artigo),
        papel: obterPapelArtigoBusca(artigo)
    };
}

function calcularAssinaturaIndiceBusca() {
    return [
        todosOsArtigos.length,
        Array.isArray(dadosEditalEstrategico) ? dadosEditalEstrategico.length : 0,
        todosOsArtigos.map(a => a.sourcePath || a.titulo).join("|")
    ].join("::");
}

function reconstruirIndiceBusca() {
    indiceBuscaArtigos = todosOsArtigos.map(criarEntradaIndiceBusca);
    assinaturaIndiceBusca = calcularAssinaturaIndiceBusca();
}

function garantirIndiceBusca() {
    const assinaturaAtual = calcularAssinaturaIndiceBusca();
    if (assinaturaIndiceBusca !== assinaturaAtual || indiceBuscaArtigos.length !== todosOsArtigos.length) {
        reconstruirIndiceBusca();
    }
}

function obterTermosEssenciais(consultaNormalizada) {
    const todos = tokenizarBusca(consultaNormalizada);
    const filtrados = todos.filter(termo => termo.length > 1 && !STOPWORDS_BUSCA.has(termo));
    return filtrados.length > 0 ? filtrados : todos.filter(termo => termo.length > 1);
}

function obterAlternativasTermo(termo) {
    const alternativas = new Set([termo]);
    GRUPOS_ALIASES_BUSCA.forEach(grupo => {
        if (grupo.includes(termo)) grupo.forEach(alias => alternativas.add(alias));
    });
    return Array.from(alternativas);
}

function obterAliasesConsulta(consultaNormalizada) {
    const aliases = new Set();
    GRUPOS_ALIASES_BUSCA.forEach(grupo => {
        if (grupo.some(alias => consultaNormalizada === alias || consultaNormalizada.includes(alias))) {
            grupo.forEach(alias => aliases.add(alias));
        }
    });
    aliases.delete(consultaNormalizada);
    return Array.from(aliases);
}

function distanciaLevenshteinLimitada(a, b, limite) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > limite) return limite + 1;
    let anterior = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i += 1) {
        const atual = [i];
        let menorLinha = atual[0];
        for (let j = 1; j <= b.length; j += 1) {
            const custo = a[i - 1] === b[j - 1] ? 0 : 1;
            const valor = Math.min(atual[j - 1] + 1, anterior[j] + 1, anterior[j - 1] + custo);
            atual[j] = valor;
            if (valor < menorLinha) menorLinha = valor;
        }
        if (menorLinha > limite) return limite + 1;
        anterior = atual;
    }
    return anterior[b.length];
}

function qualidadeMatchToken(termo, campo) {
    if (!termo || !campo?.texto) return 0;
    const alternativas = obterAlternativasTermo(termo);
    for (const alternativa of alternativas) {
        if (alternativa.includes(" ")) {
            if (campo.texto.includes(alternativa)) return 0.94;
            continue;
        }
        if (campo.tokenSet.has(alternativa)) return alternativa === termo ? 1 : 0.92;
    }
    if (termo.length < 4) return 0;
    for (const token of campo.tokens) {
        if (token.length < 3) continue;
        if (token.startsWith(termo) || termo.startsWith(token)) {
            const proporcao = Math.min(token.length, termo.length) / Math.max(token.length, termo.length);
            if (proporcao >= 0.72) return 0.82;
        }
    }
    const limite = termo.length >= 8 ? 2 : 1;
    for (const token of campo.tokens) {
        if (!token || token[0] !== termo[0]) continue;
        if (Math.abs(token.length - termo.length) > limite) continue;
        const distancia = distanciaLevenshteinLimitada(termo, token, limite);
        if (distancia <= limite) return distancia === 1 ? 0.76 : 0.68;
    }
    return 0;
}

function bonusFraseCampo(campo, consultaNormalizada, consultaEssencial, aliasesConsulta, multiplicador) {
    if (!campo?.texto) return 0;
    let bonus = 0;
    if (consultaNormalizada && campo.texto === consultaNormalizada) bonus = Math.max(bonus, 150 * multiplicador);
    else if (consultaNormalizada && campo.texto.startsWith(consultaNormalizada)) bonus = Math.max(bonus, 110 * multiplicador);
    else if (consultaNormalizada && campo.texto.includes(consultaNormalizada)) bonus = Math.max(bonus, 88 * multiplicador);
    if (consultaEssencial && consultaEssencial !== consultaNormalizada && campo.texto.includes(consultaEssencial)) {
        bonus = Math.max(bonus, 64 * multiplicador);
    }
    aliasesConsulta.forEach(alias => {
        if (campo.texto.includes(alias)) bonus = Math.max(bonus, 48 * multiplicador);
    });
    return bonus;
}

function bonusProximidade(entrada, termos) {
    if (termos.length < 2) return 0;
    const texto = entrada.corpo.texto;
    const posicoes = termos.map(termo => {
        const alternativas = obterAlternativasTermo(termo);
        let melhor = -1;
        alternativas.forEach(alt => {
            const pos = texto.indexOf(alt);
            if (pos !== -1 && (melhor === -1 || pos < melhor)) melhor = pos;
        });
        return melhor;
    });
    if (posicoes.some(pos => pos === -1)) return 0;
    const janela = Math.max(...posicoes) - Math.min(...posicoes);
    if (janela <= 90) return 34;
    if (janela <= 220) return 20;
    if (janela <= 500) return 10;
    return 0;
}

function obterErrosAtivosArtigo(artigo) {
    if (!Array.isArray(dadosErrosEstrategicos)) return [];
    return dadosErrosEstrategicos.filter(erro =>
        erro && erro.concursoId === concursoSelecionadoId && erro.notaPath === artigo.sourcePath
    );
}

function pontuarEntradaBusca(entrada, consultaNormalizada, termos) {
    if (entrada.papel === "desempenho") return 0;
    const consultaEssencial = termos.join(" ");
    const aliasesConsulta = obterAliasesConsulta(consultaNormalizada);
    const campos = [
        entrada.tituloReal,
        entrada.tituloArquivo,
        entrada.cabecalhos,
        entrada.editalIntegral,
        entrada.editalParcial,
        entrada.categoria,
        entrada.corpo
    ];
    let score = 0;
    score += bonusFraseCampo(entrada.tituloReal, consultaNormalizada, consultaEssencial, aliasesConsulta, 1.35);
    score += bonusFraseCampo(entrada.tituloArquivo, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.9);
    score += bonusFraseCampo(entrada.cabecalhos, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.8);
    score += bonusFraseCampo(entrada.editalIntegral, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.75);
    score += bonusFraseCampo(entrada.editalParcial, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.45);
    score += bonusFraseCampo(entrada.categoria, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.55);
    score += bonusFraseCampo(entrada.corpo, consultaNormalizada, consultaEssencial, aliasesConsulta, 0.28);

    let termosCorrespondentes = 0;
    termos.forEach(termo => {
        let melhor = 0;
        campos.forEach(campo => {
            const valor = qualidadeMatchToken(termo, campo) * campo.peso;
            if (valor > melhor) melhor = valor;
        });
        if (melhor > 0) {
            termosCorrespondentes += 1;
            score += melhor;
        }
    });
    if (termosCorrespondentes === 0) return 0;
    const minimoCorrespondencias = termos.length <= 2 ? termos.length : Math.max(2, Math.ceil(termos.length * 0.6));
    if (termosCorrespondentes < minimoCorrespondencias) return 0;

    const cobertura = termosCorrespondentes / Math.max(1, termos.length);
    score += cobertura * 42;
    if (cobertura === 1) score += 28;
    score -= (termos.length - termosCorrespondentes) * 12;
    score += bonusProximidade(entrada, termos);

    const itensAtivos = entrada.itensEdital.filter(item => item.concursoId === concursoSelecionadoId);
    if (itensAtivos.length > 0) {
        const temCoberturaIntegral = itensAtivos.some(item => item.coberturaNota !== "parcial");
        score += temCoberturaIntegral ? 28 : 16;
        const textoAtivo = normalizarBusca(itensAtivos.map(item =>
            [item.codigo, item.disciplina, item.descricao, item.topico].filter(Boolean).join(" ")
        ).join(" "));
        const matchesEditalAtivo = termos.filter(termo =>
            obterAlternativasTermo(termo).some(alt => textoAtivo.includes(alt))
        ).length;
        score += matchesEditalAtivo * 10;
    }

    const errosAtivos = obterErrosAtivosArtigo(entrada.artigo);
    if (errosAtivos.length > 0) {
        score += 10;
        const textoErros = normalizarBusca(errosAtivos.map(e =>
            [e.assunto, e.disciplina, e.tipo, e.status].filter(Boolean).join(" ")
        ).join(" "));
        const matchesErro = termos.filter(termo =>
            obterAlternativasTermo(termo).some(alt => textoErros.includes(alt))
        ).length;
        score += matchesErro * 12;
    }

    if (entrada.papel === "hub") score -= 45;
    if (entrada.papel === "auditoria") score -= 80;
    return Math.max(0, Math.round(score * 100) / 100);
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
    const termos = obterTermosEssenciais(consultaNormalizada);
    document.getElementById("painel-concurso-home")?.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-disciplinas")?.classList.add("escondido");
    divResultados.classList.remove("escondido");

    if (consultaNormalizada.length < 2) {
        containerResultados.innerHTML = `<p class="mensagem-busca">digite ao menos <strong>duas letras</strong> para pesquisar.</p>`;
        return;
    }

    garantirIndiceBusca();
    const ranqueados = indiceBuscaArtigos
        .map(entrada => ({ entrada, artigo: entrada.artigo, score: pontuarEntradaBusca(entrada, consultaNormalizada, termos) }))
        .filter(item => item.score > 0)
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return (a.artigo.sourcePath || a.artigo.titulo).localeCompare(
                b.artigo.sourcePath || b.artigo.titulo,
                "pt-BR",
                { numeric: true }
            );
        })
        .slice(0, 60);
    exibirResultados(ranqueados, termoOriginal, termos);
}

function obterSecaoMaisRelevante(entrada, termo, termos) {
    const consulta = normalizarBusca(termo);
    let melhor = null;
    let melhorScore = -1;
    entrada.secoes.forEach(secao => {
        let score = 0;
        if (consulta && secao.tituloNormalizado.includes(consulta)) score += 80;
        if (consulta && secao.textoNormalizado.includes(consulta)) score += 45;
        termos.forEach(t => {
            const alternativas = obterAlternativasTermo(t);
            if (alternativas.some(alt => secao.tituloNormalizado.includes(alt))) score += 24;
            if (alternativas.some(alt => secao.textoNormalizado.includes(alt))) score += 8;
        });
        if (score > melhorScore) {
            melhor = secao;
            melhorScore = score;
        }
    });
    return melhorScore > 0 ? melhor : entrada.secoes[0] || null;
}

function extrairTrechoDaSecao(secao, termo, termos) {
    if (!secao?.texto) return "";
    const frases = (secao.texto.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [secao.texto])
        .map(frase => frase.trim())
        .filter(Boolean);
    let melhorFrase = frases[0] || secao.texto;
    let melhorScore = -1;
    const consulta = normalizarBusca(termo);
    frases.forEach(frase => {
        const normalizada = normalizarBusca(frase);
        let score = consulta && normalizada.includes(consulta) ? 12 : 0;
        termos.forEach(t => {
            if (obterAlternativasTermo(t).some(alt => normalizada.includes(alt))) score += 3;
        });
        if (score > melhorScore) {
            melhorScore = score;
            melhorFrase = frase;
        }
    });
    const limite = 220;
    return melhorFrase.length > limite ? `${melhorFrase.slice(0, limite).trim()}…` : melhorFrase.trim();
}

function obterItemEditalContexto(entrada, termos) {
    const ativos = entrada.itensEdital.filter(item => item.concursoId === concursoSelecionadoId);
    const candidatos = ativos.length > 0 ? ativos : entrada.itensEdital;
    if (candidatos.length === 0) return null;
    const porRelevancia = candidatos
        .map(item => {
            const texto = normalizarBusca([item.codigo, item.disciplina, item.descricao, item.topico].filter(Boolean).join(" "));
            const score = termos.reduce((acc, termo) =>
                acc + (obterAlternativasTermo(termo).some(alt => texto.includes(alt)) ? 1 : 0), 0);
            return { item, score };
        })
        .sort((a, b) => b.score - a.score);
    return porRelevancia[0]?.item || null;
}

function obterContextoResultado(entrada, termo, termos) {
    const partes = [];
    const itemEdital = obterItemEditalContexto(entrada, termos);
    const secao = obterSecaoMaisRelevante(entrada, termo, termos);
    if (itemEdital) {
        const concurso = Array.isArray(dadosConcursosEstrategicos)
            ? dadosConcursosEstrategicos.find(c => c.id === itemEdital.concursoId)
            : null;
        if (concurso?.nome) partes.push(concurso.nome);
        if (itemEdital.codigo) {
            const cobertura = itemEdital.coberturaNota === "parcial" ? " · cobertura parcial" : "";
            partes.push(`edital ${itemEdital.codigo}${cobertura}`);
        }
        if (itemEdital.disciplina) partes.push(itemEdital.disciplina);
    }
    if (secao?.titulo) partes.push(secao.titulo);
    const meta = partes.filter(Boolean).slice(0, 4).join(" · ");
    const trecho = extrairTrechoDaSecao(secao, termo, termos) || limparMarkdownParaBusca(entrada.artigo.conteudo).slice(0, 220);
    return meta ? `${meta} — ${trecho}` : trecho;
}

function exibirResultados(resultados, termo = "", termos = []) {
    containerResultados.innerHTML = "";
    if (resultados.length === 0) {
        containerResultados.innerHTML = `<p class="mensagem-busca">nenhum artigo encontrado para “${escaparHtml(termo)}”. tente menos termos ou outra forma de escrever o conceito.</p>`;
        return;
    }

    const concursoAtivo = Array.isArray(dadosConcursosEstrategicos)
        ? dadosConcursosEstrategicos.find(c => c.id === concursoSelecionadoId)
        : null;
    const resumo = document.createElement("p");
    resumo.className = "resumo-busca";
    resumo.textContent = `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"}${concursoAtivo?.nome ? ` · prioridade contextual: ${concursoAtivo.nome}` : ""}`;
    containerResultados.appendChild(resumo);

    const grupos = {};
    resultados.forEach(resultado => {
        const categoria = resultado.artigo.categoria;
        if (!grupos[categoria]) grupos[categoria] = [];
        grupos[categoria].push(resultado);
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

        grupos[categoria].forEach((resultado, idx) => {
            const artigo = resultado.artigo;
            const card = document.createElement("a");
            card.className = "resultado-item";
            card.href = rotaDoArtigo(artigo);
            const contexto = obterContextoResultado(resultado.entrada, termo, termos);
            card.innerHTML = `
                <span class="resultado-numero">${String(idx + 1).padStart(2, "0")}</span>
                <span class="resultado-conteudo">
                    <strong>${destacarTexto(artigo.tituloExibicao || artigo.titulo, termo)}</strong>
                    <span class="resultado-trecho">${destacarTexto(contexto, termo)}</span>
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
    const seguro = escaparHtml(String(texto || ""));
    if (!termo) return seguro;
    const termos = termo
        .trim()
        .split(/\s+/)
        .filter(t => t.length > 1)
        .sort((a, b) => b.length - a.length);
    if (termos.length === 0) return seguro;
    const padrao = termos.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    const regex = new RegExp(`(${padrao})`, "gi");
    return seguro.replace(regex, '<mark class="highlight">$1</mark>');
}

function escaparHtml(texto) {
    const el = document.createElement("span");
    el.textContent = String(texto || "");
    return el.innerHTML;
}

function removerFrontmatter(markdown) {
    if (!markdown) return "";
    return markdown.replace(/^---[\s\S]*?---\s*/, "");
}

function extrairTrechoRelevante(artigo, termo) {
    garantirIndiceBusca();
    const entrada = indiceBuscaArtigos.find(item => item.artigo === artigo || item.artigo.sourcePath === artigo?.sourcePath);
    if (!entrada) return limparMarkdownParaBusca(artigo?.conteudo || "").slice(0, 220);
    const termos = obterTermosEssenciais(normalizarBusca(termo));
    return obterContextoResultado(entrada, termo, termos);
}
