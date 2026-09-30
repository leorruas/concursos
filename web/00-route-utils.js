(function (global) {
    function decodificar(valor) {
        try {
            return decodeURIComponent(valor || "");
        } catch (erro) {
            return String(valor || "");
        }
    }

    function construirRotaArtigo(categoria, titulo, secao) {
        const base = "#/" + encodeURIComponent(categoria || "") + "/" + encodeURIComponent(titulo || "");
        return secao ? base + "?secao=" + encodeURIComponent(secao) : base;
    }

    function parsearHashVault(hash) {
        const valor = String(hash || "").trim();
        if (!valor || valor === "#" || valor === "#/") return { tipo: "home" };

        const semHash = valor.replace(/^#\/?/, "");
        const partesQuery = semHash.split("?");
        const rota = partesQuery.shift() || "";
        const query = partesQuery.join("?");
        const segmentos = rota.split("/").filter(Boolean);

        if (segmentos[0] === "disciplina") {
            return {
                tipo: "disciplina",
                categoria: decodificar(segmentos.slice(1).join("/"))
            };
        }

        if (segmentos.length >= 2) {
            let secao = "";
            query.split("&").forEach(function (par) {
                const indice = par.indexOf("=");
                const chave = indice >= 0 ? par.slice(0, indice) : par;
                const valorPar = indice >= 0 ? par.slice(indice + 1) : "";
                if (chave === "secao") secao = decodificar(valorPar);
            });
            return {
                tipo: "artigo",
                categoria: decodificar(segmentos[0]),
                titulo: decodificar(segmentos.slice(1).join("/")),
                secao: secao
            };
        }

        return { tipo: "desconhecida" };
    }

    global.construirRotaArtigo = construirRotaArtigo;
    global.parsearHashVault = parsearHashVault;
})(typeof window !== "undefined" ? window : globalThis);
