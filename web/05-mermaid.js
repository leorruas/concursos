function configurarMermaid() {
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
            primaryColor: "#302518",
            primaryTextColor: "#f1f0eb",
            primaryBorderColor: "#f59e0b",
            lineColor: "#d6aa62"
        } : {
            fontFamily: "Archivo, sans-serif",
            darkMode: false,
            background: "#ffffff",
            primaryColor: "#fff7ed",
            primaryTextColor: "#151515",
            primaryBorderColor: "#b45309",
            lineColor: "#92400e"
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
    mermaid.run({ nodes: diagramas }).then(() => equiparExploradorMermaid(diagramas)).catch(err => console.error("Erro Mermaid:", err));
}


/* Explorador de diagramas: inspirado no projeto PUC, sem dependências adicionais. */
function equiparExploradorMermaid(diagramas) {
    diagramas.forEach(diagrama => {
        if (!diagrama.querySelector("svg")) return;
        let wrapper = diagrama.closest(".mermaid-explorador");
        if (!wrapper) {
            wrapper = document.createElement("div");
            wrapper.className = "mermaid-explorador";
            diagrama.parentNode.insertBefore(wrapper, diagrama);
            wrapper.appendChild(diagrama);
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "mermaid-ampliar";
            botao.textContent = "ampliar diagrama";
            botao.setAttribute("aria-label", "Abrir diagrama em tela cheia");
            wrapper.insertBefore(botao, diagrama);
            botao.addEventListener("click", () => abrirExploradorMermaid(diagrama));
        }
    });
}

function abrirExploradorMermaid(diagrama) {
    const original = diagrama.querySelector("svg");
    if (!original) return;
    document.querySelector(".mermaid-explorador-modal")?.remove();
    const modal = document.createElement("div");
    modal.className = "mermaid-explorador-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Explorador de diagrama");
    modal.innerHTML = '<div class="mermaid-explorador-topo"><strong>Explorador de diagrama</strong><div class="mermaid-explorador-controles"><button type="button" data-acao="menos" aria-label="Reduzir zoom">−</button><span class="mermaid-escala" aria-live="polite"></span><button type="button" data-acao="mais" aria-label="Ampliar zoom">+</button><button type="button" data-acao="ajustar">ajustar</button><button type="button" data-acao="real">1:1</button><button type="button" data-acao="fechar">fechar</button></div></div><div class="mermaid-explorador-area"><div class="mermaid-explorador-palco"></div></div>';
    document.body.appendChild(modal);
    const area = modal.querySelector(".mermaid-explorador-area");
    const palco = modal.querySelector(".mermaid-explorador-palco");
    const svg = original.cloneNode(true);
    svg.removeAttribute("id");
    svg.setAttribute("aria-label", "Diagrama ampliado");
    palco.appendChild(svg);
    const vb = original.viewBox?.baseVal;
    const largura = vb?.width || Number(original.getAttribute("width")) || original.getBoundingClientRect().width || 900;
    const altura = vb?.height || Number(original.getAttribute("height")) || original.getBoundingClientRect().height || 600;
    svg.style.width = largura + "px";
    svg.style.height = altura + "px";
    palco.style.width = largura + "px";
    palco.style.height = altura + "px";
    let escala = 1, x = 0, y = 0, movendo = false, inicioX = 0, inicioY = 0;
    const indicador = modal.querySelector(".mermaid-escala");
    const aplicar = () => {
        palco.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${escala})`;
        indicador.textContent = Math.round(escala * 100) + "%";
    };
    const ajustar = () => {
        escala = Math.min(1, Math.max(.1, (area.clientWidth - 48) / largura), Math.max(.1, (area.clientHeight - 48) / altura));
        x = 0; y = 0; aplicar();
    };
    const zoom = fator => { escala = Math.min(5, Math.max(.1, escala * fator)); aplicar(); };
    const fechar = () => {
        modal.remove();
        window.removeEventListener("keydown", tecla);
        window.removeEventListener("resize", ajustar);
    };
    const tecla = evento => {
        if (evento.key === "Escape") fechar();
        if (evento.key === "+" || evento.key === "=") zoom(1.2);
        if (evento.key === "-") zoom(1 / 1.2);
        if (evento.key.toLowerCase() === "f") ajustar();
    };
    modal.querySelectorAll("[data-acao]").forEach(botao => botao.addEventListener("click", () => {
        const acao = botao.dataset.acao;
        if (acao === "fechar") fechar();
        if (acao === "ajustar") ajustar();
        if (acao === "real") { escala = 1; x = 0; y = 0; aplicar(); }
        if (acao === "mais") zoom(1.2);
        if (acao === "menos") zoom(1 / 1.2);
    }));
    area.addEventListener("pointerdown", e => {
        if (e.button !== 0) return;
        movendo = true; inicioX = e.clientX - x; inicioY = e.clientY - y;
        area.setPointerCapture(e.pointerId);
    });
    area.addEventListener("pointermove", e => {
        if (!movendo) return;
        x = e.clientX - inicioX; y = e.clientY - inicioY; aplicar();
    });
    const parar = () => { movendo = false; };
    area.addEventListener("pointerup", parar);
    area.addEventListener("pointercancel", parar);
    area.addEventListener("wheel", e => { e.preventDefault(); zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15); }, { passive: false });
    modal.addEventListener("click", e => { if (e.target === modal) fechar(); });
    window.addEventListener("keydown", tecla);
    window.addEventListener("resize", ajustar);
    requestAnimationFrame(ajustar);
    modal.querySelector('[data-acao="fechar"]').focus();
}
