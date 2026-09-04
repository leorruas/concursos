    if (typeof mermaid === "undefined") return;
    const temaEscuro = document.documentElement.dataset.theme !== "light";
    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily: "Archivo, sans-serif",
        themeVariables: temaEscuro ? {
            fontFamily: "Archivo, sans-serif",
            darkMode: true,
            background: "#101010",
            primaryColor: "#182431",
            primaryTextColor: "#f1f0eb",
            primaryBorderColor: "#6fa8e8",
            lineColor: "#9ab0c5"
        } : {
            fontFamily: "Archivo, sans-serif",
            darkMode: false,
            background: "#ffffff",
            primaryColor: "#eef5fc",
            primaryTextColor: "#151515",
            primaryBorderColor: "#1c5f9f",
            lineColor: "#3f6282"
        }
    });
}

function renderizarDiagramasMermaid() {
    if (typeof mermaid === "undefined" || !artigoCorpo) return;
    configurarMermaid();
    const diagramas = artigoCorpo.querySelectorAll(".mermaid");
    diagramas.forEach(diagrama => {
        const codigo = diagrama.dataset.mermaidSource || diagrama.textContent;
        diagrama.dataset.mermaidSource = codigo;
        diagrama.removeAttribute("data-processed");
        diagrama.textContent = codigo;
    });
    mermaid.run({ nodes: diagramas }).catch(err => console.error("Erro Mermaid:", err));
}

function filtrarArtigos(termoBusca) {
