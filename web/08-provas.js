// --------------------------------------------------------------------------
// DESEMPENHO POR PROVA E EDITAL
// Compatibilidade: preserva cálculos e descrição de resultados, sem montar painel.
// Mantém apenas
// helpers de proveniência e comparabilidade. A home não exibe resultados de provas.
// --------------------------------------------------------------------------


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
        nao_comparavel_para_nota_ponderada: "não comparável para nota ponderada",
        nao_comparavel_para_nota_liquida: "não comparável para nota líquida"
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
    if (!resultado || prova?.comparabilidadeEdital?.notaEditalAtualCalculavel !== true) return null;

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

function provasResumoBrutoTCDF(resultado) {
    const blocos = resultado?.blocos;
    if (!blocos || typeof blocos !== "object") return null;

    let acertos = 0;
    let erros = 0;
    let brancos = 0;
    let encontrou = false;

    Object.values(blocos).forEach(bloco => {
        if (!bloco) return;
        const a = Number(bloco.acertos);
        const e = Number(bloco.erros);
        const b = Number(bloco.brancos);
        if (Number.isFinite(a)) { acertos += a; encontrou = true; }
        if (Number.isFinite(e)) { erros += e; encontrou = true; }
        if (Number.isFinite(b)) { brancos += b; encontrou = true; }
    });

    if (!encontrou) return null;
    return `${acertos} acertos · ${erros} erros · ${brancos} brancos`;
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
        if (!nota) {
            const bruto = provasResumoBrutoTCDF(resultado);
            return bruto
                ? `${bruto} · nota do edital atual não calculável`
                : "resultado registrado · nota do edital atual não calculável";
        }

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
