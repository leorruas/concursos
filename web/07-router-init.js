function sincronizarContextoDaRota(rota) {
    const anteriorId = concursoSelecionadoId;
    const anteriorBiblioteca = modoBibliotecaCompleta;
    if (rota.biblioteca) {
        modoBibliotecaCompleta = true;
    } else {
        modoBibliotecaCompleta = false;
        if (rota.concursoId && dadosConcursosEstrategicos.some(item => item.id === rota.concursoId)) {
            concursoSelecionadoId = rota.concursoId;
            localStorage.setItem("concurso_ativo_id", concursoSelecionadoId);
        }
    }
    const alterado = anteriorId !== concursoSelecionadoId || anteriorBiblioteca !== modoBibliotecaCompleta;
    if (alterado && typeof buscaGlobalAtiva !== "undefined") buscaGlobalAtiva = false;
    return alterado;
}

async function tratarHashNavegacao() {
    const rota = parsearHashVault(window.location.hash);
    if (sincronizarContextoDaRota(rota)) {
        renderizarPainelConcursoHome();
        renderizarPastas();
    }

    if (rota.tipo === "home") {
        voltarParaHome(false);
        return;
    }

    if (rota.tipo === "disciplina") {
        abrirDisciplina(rota.categoria, false);
        return;
    }

    if (rota.tipo === "artigo") {
        const artigo = resolverArtigoRota(todosOsArtigos, rota);
        if (artigo) {
            return abrirArtigo(artigo, false, rota.secao || "", rota.origem || "");
        }
    }
}

function voltarParaHome(atualizarRota = true) {
    if (atualizarRota) {
        window.location.hash = construirRotaHome(concursoSelecionadoId, modoBibliotecaCompleta);
    }
    leitorDeDisciplina.classList.add("escondido");
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("painel-concurso-home")?.classList.remove("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-disciplinas")?.classList.remove("escondido");
    atualizarDestinoIndiceTopo("");
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
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;

        e.preventDefault();
        const categoria = navLinkPastas.dataset.categoria || "";

        if (categoria) {
            abrirDisciplina(categoria);
            return;
        }

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

carregarTodosOsArtigos()
    .catch((erro) => {
        console.error("Erro ao carregar o conteúdo inicial:", erro);
    })
    .finally(() => {
        if (window.CONCURSOS_FINALIZAR_CARREGAMENTO) {
            window.CONCURSOS_FINALIZAR_CARREGAMENTO();
        }
    });

