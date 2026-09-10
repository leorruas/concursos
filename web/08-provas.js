// --------------------------------------------------------------------------
// DESEMPENHO POR PROVA E EDITAL
// Camada aditiva: preserva o painel estratégico existente e injeta apenas
// resultados cuja proveniência e comparabilidade estejam declaradas.
// --------------------------------------------------------------------------

let dadosProvasEstrategicas = [];

function provasEscapeHtml(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function provasFormatarNumero(valor, casas = 1) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) return null;
    return numero.toLocaleString("pt-BR", {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}

function provasRotuloComparabilidade(status) {
    const rotulos = {
        muito_alta: "comparabilidade muito alta",
        alta: "comparabilidade alta",
        media: "comparabilidade média",
        baixa: "comparabilidade baixa",
        nao_comparavel_para_nota_ponderada: "não comparável para nota ponderada"
    };
    return rotulos[status] || "comparabilidade não classificada";
}

function provasCalcularNotaDataprev(prova) {
    const resultado = prova?.resultado;
    if (!resultado || prova?.comparabilidadeEdital?.notaEditalAtualCalculavel !== true) return null;

    if (Number.isFinite(Number(resultado.notaPonderada))) {
        return Number(resultado.notaPonderada);
    }

    const gerais = Number(resultado.acertosGerais);
    const especificos = Number(resultado.acertosEspecificos);
    if (Number.isFinite(gerais) && Number.isFinite(especificos)) {
        return gerais + (especificos * 2.5);
    }

    const d = resultado.disciplinas;
    if (!d || typeof d !== "object") return null;

    const nomesGerais = [
        "linguaPortuguesa",
        "linguaInglesa",
        "raciocinioLogicoMatematico",
        "atualidadesInteligenciaArtificial",
        "legislacaoSegurancaInformacaoProtecaoDados"
    ];
    const valoresGerais = nomesGerais.map(nome => Number(d[nome]?.acertos ?? d[nome]));
    const especificosComunicacao = Number(
        d.conhecimentosEspecificosComunicacao?.acertos ??
        d.conhecimentosEspecificosComunicacao
    );

    if (valoresGerais.some(v => !Number.isFinite(v)) || !Number.isFinite(especificosComunicacao)) {
        return null;
    }

    return valoresGerais.reduce((soma, valor) => soma + valor, 0) + (especificosComunicacao * 2.5);
}

function provasCalcularNotaLiquidaTCDF(prova, concurso) {
    const resultado = prova?.resultado;
    if (!resultado) return null;

    if (Number.isFinite(Number(resultado.notaLiquida))) {
        return {
            total: Number(resultado.notaLiquida),
            blocos: resultado.notasPorBloco || null,
            atendeMinimos: null
        };
    }

    const blocos = resultado.blocos;
    if (!blocos || typeof blocos !== "object") return null;

    const chaves = ["p1", "p2", "p3"];
    const notas = {};
    for (const chave of chaves) {
        const bloco = blocos[chave];
        if (!bloco) return null;
        const acertos = Number(bloco.acertos ?? 0);
        const erros = Number(bloco.erros ?? 0);
        if (!Number.isFinite(acertos) || !Number.isFinite(erros)) return null;
        notas[chave] = acertos - erros;
    }

    const total = notas.p1 + notas.p2 + notas.p3;
    const estrutura = concurso?.estruturaProva;
    let atendeMinimos = null;
    if (estrutura?.modulos && Number.isFinite(Number(estrutura.minimoAprovacaoConjunto))) {
        atendeMinimos = chaves.every(chave => {
            const minimo = Number(estrutura.modulos[chave]?.minimoAprovacao);
            return !Number.isFinite(minimo) || notas[chave] >= minimo;
        }) && total >= Number(estrutura.minimoAprovacaoConjunto);
    }

    return { total, blocos: notas, atendeMinimos };
}

function provasDescreverResultado(prova, concurso) {
    if (prova?.resolvida === false || !prova?.resultado) {
        return "ainda não resolvida";
    }

    const resultado = prova.resultado;

    if (concurso?.id === "dataprev-2026") {
        const notaPonderada = provasCalcularNotaDataprev(prova);
        const bruto = Number.isFinite(Number(resultado.percentualBruto))
            ? `${provasFormatarNumero(resultado.percentualBruto)}% bruto`
            : null;
        const fracao = Number.isFinite(Number(resultado.acertos)) && Number.isFinite(Number(resultado.totalQuestoes))
            ? `${resultado.acertos}/${resultado.totalQuestoes}`
            : null;

        if (notaPonderada !== null) {
            const partes = [`${provasFormatarNumero(notaPonderada)}/115`];
            if (fracao) partes.push(fracao);
            if (bruto) partes.push(bruto);
            return partes.join(" · ");
        }

        const partes = [fracao, bruto].filter(Boolean);
        partes.push("nota /115 não calculável");
        return partes.join(" · ");
    }

    if (concurso?.id === "tcdf-2026") {
        const nota = provasCalcularNotaLiquidaTCDF(prova, concurso);
        if (!nota) return "resultado registrado sem dados suficientes para nota líquida";

        const partes = [`${provasFormatarNumero(nota.total)}/150 líquido`];
        if (nota.blocos) {
            partes.push(`P1 ${provasFormatarNumero(nota.blocos.p1)} · P2 ${provasFormatarNumero(nota.blocos.p2)} · P3 ${provasFormatarNumero(nota.blocos.p3)}`);
        }
        if (nota.atendeMinimos === true) partes.push("mínimos objetivos atendidos");
        if (nota.atendeMinimos === false) partes.push("algum mínimo objetivo não atendido");
        return partes.join(" · ");
    }

    if (Number.isFinite(Number(resultado.percentualBruto))) {
        return `${provasFormatarNumero(resultado.percentualBruto)}% bruto`;
    }

    return "resultado registrado";
}

function provasEncontrarArtigo(sourcePath) {
    if (!sourcePath || !Array.isArray(todosOsArtigos)) return null;
    return todosOsArtigos.find(artigo => artigo.sourcePath === sourcePath) || null;
}

function provasLinkArtigo(prova) {
    const artigo = provasEncontrarArtigo(prova?.sourcePath);
    if (!artigo) return "";
    const href = rotaDoArtigo(artigo);
    return ` <a class="concurso-link-estudo" href="${href}">abrir →</a>`;
}

function provasOrdenar(lista) {
    return [...lista].sort((a, b) => {
        const aResolvida = a.resultado ? 1 : 0;
        const bResolvida = b.resultado ? 1 : 0;
        if (aResolvida !== bResolvida) return bResolvida - aResolvida;

        const dataA = a.data || `${a.ano || 0}-01-01`;
        const dataB = b.data || `${b.ano || 0}-01-01`;
        return String(dataB).localeCompare(String(dataA));
    });
}

function renderizarPainelProvas() {
    const conteudo = document.getElementById("concurso-home-conteudo");
    if (!conteudo || conteudo.querySelector("[data-painel-provas]")) return;
    if (!Array.isArray(dadosProvasEstrategicas) || dadosProvasEstrategicas.length === 0) return;
    if (!Array.isArray(dadosConcursosEstrategicos) || dadosConcursosEstrategicos.length === 0) return;

    const regua = conteudo.querySelector(".concurso-regua-indicadores");
    if (!regua) return;

    const concurso = dadosConcursosEstrategicos.find(c => c.id === concursoSelecionadoId) || dadosConcursosEstrategicos[0];
    const provas = provasOrdenar(dadosProvasEstrategicas.filter(p => p.concursoId === concurso.id));
    if (provas.length === 0) return;

    const painel = document.createElement("div");
    painel.className = "concurso-prioridade-linha";
    painel.dataset.painelProvas = "true";
    painel.style.marginTop = "24px";

    const linhas = provas.map((prova, indice) => {
        const nome = provasEscapeHtml(prova.nome);
        const resultado = provasEscapeHtml(provasDescreverResultado(prova, concurso));
        const comparabilidade = provasEscapeHtml(provasRotuloComparabilidade(prova?.comparabilidadeEdital?.status));
        const separador = indice < provas.length - 1 ? "<br>" : "";
        return `
            <p class="concurso-prioridade-texto"><strong>${nome}</strong>${provasLinkArtigo(prova)}</p>
            <p class="concurso-prioridade-sub">${resultado} · ${comparabilidade}</p>
            ${separador}
        `;
    }).join("");

    const hub = provasEncontrarArtigo("00 - Desempenho/Provas/00 - Desempenho por edital e prova.md");
    const linkHub = hub
        ? `<a class="concurso-link-estudo" href="${rotaDoArtigo(hub)}">ver detalhes →</a>`
        : "";

    painel.innerHTML = `
        <span class="concurso-prioridade-tag">desempenho em provas</span>
        <div>${linhas}</div>
        <div>${linkHub}</div>
    `;

    regua.insertAdjacentElement("afterend", painel);
}

async function carregarProvasEstrategicas() {
    try {
        const resposta = await fetch("data/provas.json");
        if (!resposta.ok) return;
        const dados = await resposta.json();
        dadosProvasEstrategicas = Array.isArray(dados) ? dados : [];
        renderizarPainelProvas();
    } catch (erro) {
        console.warn("Não foi possível carregar o desempenho por prova:", erro);
    }
}

const provasPainelConteudo = document.getElementById("concurso-home-conteudo");
if (provasPainelConteudo) {
    const provasObserver = new MutationObserver(() => {
        if (!provasPainelConteudo.querySelector("[data-painel-provas]")) {
            queueMicrotask(renderizarPainelProvas);
        }
    });
    provasObserver.observe(provasPainelConteudo, { childList: true, subtree: true });
}

carregarProvasEstrategicas();
