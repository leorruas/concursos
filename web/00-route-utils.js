(function (global) {
    function decodificar(valor) {
        try { return decodeURIComponent(valor || ""); }
        catch (erro) { return String(valor || ""); }
    }

    function queryEscopo(concursoId = "", biblioteca = false, secao = "", origem = "") {
        const partes = [];
        if (secao) partes.push("secao=" + encodeURIComponent(secao));
        if (origem) partes.push("origem=" + encodeURIComponent(origem));
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
    function construirRotaArtigo(categoria, titulo, secao = "", concursoId = "", biblioteca = false, origem = "") {
        const base = "#/" + encodeURIComponent(categoria || "") + "/" + encodeURIComponent(titulo || "");
        return base + queryEscopo(concursoId, biblioteca, secao, origem && origem !== categoria ? origem : "");
    }

    function construirRotaArtigoId(articleId, secao = "", concursoId = "", biblioteca = false, origem = "") {
        return "#/artigo/" + encodeURIComponent(articleId) + queryEscopo(concursoId, biblioteca, secao, origem);
    }

    function construirRotaGlossario(termoId = "", concursoId = "cgu-2026") {
        return "#/glossario" + (termoId ? "/" + encodeURIComponent(termoId) : "") + queryEscopo(concursoId);
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
        if (segmentos[0] === "glossario" && segmentos.length <= 2) return { tipo: "glossario", termoId: decodificar(segmentos[1] || ""), ...contexto };
        if (segmentos[0] === "artigo" && segmentos.length === 2) return {tipo:"artigo", articleId:decodificar(segmentos[1]), secao:params.secao||"", origem:params.origem||"", ...contexto};
        if (segmentos[0] === "disciplina") {
            return { tipo: "disciplina", categoria: decodificar(segmentos.slice(1).join("/")), ...contexto };
        }
        if (segmentos.length >= 2) {
            return {
                tipo: "artigo",
                categoria: decodificar(segmentos[0]),
                titulo: decodificar(segmentos.slice(1).join("/")),
                secao: params.secao || "",
                origem: params.origem || "",
                ...contexto
            };
        }
        return { tipo: "desconhecida", ...contexto };
    }

    function resolverArtigoRota(artigos, rota) {
        if(rota.articleId) return artigos.find(a => a.articleId === rota.articleId) || artigos.find(a => a.articleSlug === rota.articleId || (a.articleSlugAliases||[]).includes(rota.articleId));
        const lower=s=>String(s||"").toLowerCase();
        return artigos.find(a => lower(a.categoria)===lower(rota.categoria) && lower(a.titulo)===lower(rota.titulo)) ||
            artigos.find(a => (a.articleAliases||[]).some(p => lower(p.split('/')[1])===lower(rota.categoria) && lower(p.split('/').at(-1).replace(/\.md$/, ""))===lower(rota.titulo)));
    }
    global.resolverArtigoRota = resolverArtigoRota;
    global.construirRotaArtigoId = construirRotaArtigoId;
    global.construirRotaGlossario = construirRotaGlossario;
    global.construirRotaHome = construirRotaHome;
    global.construirRotaDisciplina = construirRotaDisciplina;
    global.construirRotaArtigo = construirRotaArtigo;
    global.parsearHashVault = parsearHashVault;
})(typeof window !== "undefined" ? window : globalThis);
