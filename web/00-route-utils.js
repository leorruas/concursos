(function (global) {
    function decodificar(valor) {
        try { return decodeURIComponent(valor || ""); }
        catch (erro) { return String(valor || ""); }
    }

    function queryEscopo(concursoId = "", biblioteca = false, secao = "") {
        const partes = [];
        if (secao) partes.push("secao=" + encodeURIComponent(secao));
        if (biblioteca) partes.push("biblioteca=1");
        else if (concursoId) partes.push("concurso=" + encodeURIComponent(concursoId));
        return partes.length ? "?" + partes.join("&") : "";
    }

    function construirRotaHome(concursoId = "", biblioteca = false) {
        return "#/" + queryEscopo(concursoId, biblioteca);
    }

    function construirRotaDisciplina(categoria, concursoId = "", biblioteca = false) {
        return "#/disciplina/" + encodeURIComponent(categoria || "") + queryEscopo(concursoId, biblioteca);
    }

    // Preserva a assinatura antiga de três argumentos e a âncora por seção.
    function construirRotaArtigo(categoria, titulo, secao = "", concursoId = "", biblioteca = false) {
        const base = "#/" + encodeURIComponent(categoria || "") + "/" + encodeURIComponent(titulo || "");
        return base + queryEscopo(concursoId, biblioteca, secao);
    }

    function parsearHashVault(hash) {
        const valor = String(hash || "").trim();
        if (!valor || valor === "#" || valor === "#/") return { tipo: "home", concursoId: "", biblioteca: false };
        const semHash = valor.replace(/^#\/?/, "");
        const queryIdx = semHash.indexOf("?");
        const caminho = queryIdx < 0 ? semHash : semHash.slice(0, queryIdx);
        const qs = queryIdx < 0 ? "" : semHash.slice(queryIdx + 1);
        const params = {};
        for (const item of qs.split("&").filter(Boolean)) {
            const idx = item.indexOf("=");
            const chave = idx < 0 ? item : item.slice(0, idx);
            const v = idx < 0 ? "" : item.slice(idx + 1);
            params[decodificar(chave)] = decodificar(v);
        }
        const segmentos = caminho.split("/").filter(Boolean);
        const contexto = {
            concursoId: params.concurso || "",
            biblioteca: params.biblioteca === "1"
        };
        if (segmentos.length === 0) return { tipo: "home", ...contexto };
        if (segmentos[0] === "disciplina") {
            return { tipo: "disciplina", categoria: decodificar(segmentos.slice(1).join("/")), ...contexto };
        }
        if (segmentos.length >= 2) {
            return {
                tipo: "artigo",
                categoria: decodificar(segmentos[0]),
                titulo: decodificar(segmentos.slice(1).join("/")),
                secao: params.secao || "",
                ...contexto
            };
        }
        return { tipo: "desconhecida", ...contexto };
    }

    global.construirRotaHome = construirRotaHome;
    global.construirRotaDisciplina = construirRotaDisciplina;
    global.construirRotaArtigo = construirRotaArtigo;
    global.parsearHashVault = parsearHashVault;
})(typeof window !== "undefined" ? window : globalThis);
