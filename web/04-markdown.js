function processarCalloutsObsidian() {
    const blockquotes = artigoCorpo.querySelectorAll('blockquote');
    blockquotes.forEach(bq => {
        const conteudo = bq.innerHTML;
        const match = conteudo.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+([^\n<]+))?/i);
        if (match) {
            const tipo = match[1].toUpperCase();
            const tituloCustomizado = match[2] ? match[2].trim() : '';
            
            let htmlLimpo = conteudo.replace(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+[^\n<]+)?/i, '');
            htmlLimpo = htmlLimpo.replace(/<p>\s*<\/p>/g, '');

            const rotulos = {
                'NOTE': 'nota',
                'TIP': 'dica',
                'IMPORTANT': 'importante',
                'WARNING': 'aviso',
                'CAUTION': 'atenção'
            };

            const tituloExibicao = (tituloCustomizado || rotulos[tipo] || tipo).toLowerCase();

            const divCallout = document.createElement('div');
            divCallout.className = `obsidian-callout callout-${tipo.toLowerCase()}`;

            divCallout.innerHTML = `
                <div class="callout-header">
                    <span class="callout-title">${tituloExibicao}</span>
                </div>
                <div class="callout-content">
                    ${htmlLimpo}
                </div>
            `;

            bq.replaceWith(divCallout);
        }
    });
}

function processarComentariosObsidian() {
    const wrappers = artigoCorpo.querySelectorAll('.obsidian-comment-wrapper');
    wrappers.forEach(wrapper => {
        const badge = wrapper.querySelector('.comment-badge');
        const popover = wrapper.querySelector('.comment-popover');
        if (!badge || !popover) return;

        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const estaAtivo = popover.classList.contains('active');
            
            // Fecha todos os outros popovers abertos
            document.querySelectorAll('.comment-popover.active').forEach(p => {
                if (p !== popover) p.classList.remove('active');
            });
            
            popover.classList.toggle('active', !estaAtivo);
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.obsidian-comment-wrapper')) {
            document.querySelectorAll('.comment-popover.active').forEach(p => p.classList.remove('active'));
        }
    });
}

// Table of Contents (TOC) da Barra Lateral
function gerarTableOfContents() {
    const tocNavDesktop = document.getElementById("toc-nav");
    const tocSidebar = document.getElementById("artigo-toc-sidebar");
    if (!tocNavDesktop) return;

    tocNavDesktop.innerHTML = "";

    // Pega H2 e H3 do artigo
    const headings = Array.from(artigoCorpo.querySelectorAll("h2, h3"));

    if (headings.length === 0) {
        if (tocSidebar) tocSidebar.style.display = "none";
        return;
    }

    if (tocSidebar) tocSidebar.style.display = "block";

    const listaDesktop = document.createElement("ul");
    listaDesktop.className = "toc-list";

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-toc-${index}`;
        }

        const liDesktop = document.createElement("li");
        liDesktop.className = "toc-item";
        const linkDesktop = document.createElement("a");
        linkDesktop.textContent = heading.textContent.replace(/^[0-9.]+\s*/, "").toLowerCase();
        linkDesktop.href = `#${heading.id}`;
        linkDesktop.setAttribute("data-target", heading.id);

        if (heading.tagName.toLowerCase() === "h3") {
            linkDesktop.style.paddingLeft = "16px";
            linkDesktop.style.fontSize = "0.74rem";
        }

        linkDesktop.addEventListener("click", (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        liDesktop.appendChild(linkDesktop);
        listaDesktop.appendChild(liDesktop);
    });

    tocNavDesktop.appendChild(listaDesktop);

    const tocFilterInput = document.getElementById("toc-filter-input");
    if (tocFilterInput) {
        tocFilterInput.value = "";
        tocFilterInput.oninput = (e) => {
            const query = e.target.value.toLowerCase().trim();
            const items = listaDesktop.querySelectorAll(".toc-item");
            items.forEach(item => {
                const link = item.querySelector("a");
                if (!link) return;
                const match = link.textContent.toLowerCase().includes(query);
                item.style.display = match ? "block" : "none";
            });
        };
    }

    inicializarScrollspyTOC(headings);
}

function inicializarScrollspyTOC(headings) {
    if (scrollSpyObserver) {
        scrollSpyObserver.disconnect();
    }

    scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const links = document.querySelectorAll(`.toc-list a[data-target="${id}"]`);
                document.querySelectorAll(".toc-list a").forEach(a => a.classList.remove("toc-active"));
                links.forEach(a => a.classList.add("toc-active"));
            }
        });
    }, {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0.1
    });

    headings.forEach(heading => scrollSpyObserver.observe(heading));
}

function processarWikilinks(container) {
    const html = container.innerHTML;
    const regex = /\[\[(.*?)\]\]/g;
    container.innerHTML = html.replace(regex, (match, p1) => {
        let destino = p1;
        let rotulo = p1;
        if (p1.includes("|")) {
            const partes = p1.split("|");
            destino = partes[0];
            rotulo = partes[1];
        }
        
        const nomeArquivo = destino.split("#")[0].split("/").pop();
        const artigoDestino = todosOsArtigos.find(a => a.titulo.toLowerCase() === nomeArquivo.toLowerCase());
        
        if (artigoDestino) {
            return `<a href="${rotaDoArtigo(artigoDestino)}" class="wikilink" data-artigo="${artigoDestino.titulo}">${rotulo}</a>`;
        }
        return `<span class="wikilink-texto">${rotulo}</span>`;
    });

    container.querySelectorAll("a.wikilink").forEach(link => {
        link.addEventListener("click", (e) => {
            const nome = link.dataset.artigo;
            const dest = todosOsArtigos.find(a => a.titulo === nome);
            if (dest) {
                e.preventDefault();
                abrirArtigo(dest);
            }
        });
    });
}

function configurarMermaid() {
