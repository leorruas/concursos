function tratarHashNavegacao() {
    const rota = parsearHashVault(window.location.hash);

    if (rota.tipo === "home") {
        voltarParaHome(false);
        return;
    }

    if (rota.tipo === "disciplina") {
        abrirDisciplina(rota.categoria, false);
        return;
    }

    if (rota.tipo === "artigo") {
        const artigo = todosOsArtigos.find(a =>
            a.categoria.toLowerCase() === rota.categoria.toLowerCase() &&
            a.titulo.toLowerCase() === rota.titulo.toLowerCase()
        );
        if (artigo) {
            abrirArtigo(artigo, false, rota.secao || "");
        }
    }
}

function voltarParaHome(atualizarRota = true) {
    if (atualizarRota) {
        window.location.hash = "#/";
    }
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("painel-concurso-home")?.classList.remove("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("popstate", () => {
    tratarHashNavegacao();
});

// Event Listeners
window.addEventListener("scroll", () => {
    if (!stickyNav) return;
    if (window.scrollY > 80) {
        stickyNav.classList.add("visible");
    } else {
        stickyNav.classList.remove("visible");
    }
});

const mainTitle = document.getElementById("home-title");
if (mainTitle) {
    mainTitle.addEventListener("click", () => voltarParaHome(true));
}

const navLinkPastas = document.getElementById("nav-link-pastas");
if (navLinkPastas) {
    navLinkPastas.addEventListener("click", (e) => {
        e.preventDefault();
        voltarParaHome(true);
        const pastasContainer = document.getElementById("explorar-disciplinas");
        if (pastasContainer) {
            pastasContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

if (campoTexto) {
    campoTexto.addEventListener("input", (e) => {
        if (campoTextoNav) campoTextoNav.value = e.target.value;
        filtrarArtigos(e.target.value);
    });
}

if (campoTextoNav) {
    campoTextoNav.addEventListener("input", (e) => {
        if (campoTexto) campoTexto.value = e.target.value;
        filtrarArtigos(e.target.value);
    });
}

if (btnVoltarDisciplina) {
    btnVoltarDisciplina.addEventListener("click", () => voltarParaHome(true));
}

document.getElementById("nav-logo")?.addEventListener("click", () => voltarParaHome(true));

carregarTodosOsArtigos();

