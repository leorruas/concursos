// Consulta pública: dados revisados gerados pelo build. Nenhum resultado pessoal.
const glossarioState = { data: null, pending: null, contestId: 'camara-2026', query: '', block: '', subject: '', article: '', organization: 'termo', letter: '', openId: '', connected: false };
function normalizarGlossario(valor) {
    return String(valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}
// Busca local: aproxima flexões de gênero e plural sem confundir raízes arbitrárias.
// Exemplos: primário/primária, financeiro/financeira, públicos/públicas, ação/ações.
function palavrasGlossario(value) {
    return normalizarGlossario(value).match(/[a-z0-9]+/g) || [];
}
function formaBuscaGlossario(word) {
    let term = word;
    if (term.length >= 5) {
        if (term.endsWith('coes')) term = term.slice(0, -4) + 'cao';
        else if (term.endsWith('soes')) term = term.slice(0, -4) + 'sao';
        else if (term.length >= 6 && term.endsWith('ais')) term = term.slice(0, -3) + 'al';
        else if (term.length >= 6 && term.endsWith('eis')) term = term.slice(0, -3) + 'el';
        else if (term.endsWith('s')) term = term.slice(0, -1);
    }
    if (term.length >= 6 && /(ari|eir|iv|ad|id|ic|os|ent)[oa]$/.test(term)) {
        return term.slice(0, -1);
    }
    return term;
}
function palavraCompativelGlossario(queryWord, indexedWord) {
    return indexedWord.startsWith(queryWord) ||
        (queryWord.length >= 5 && formaBuscaGlossario(queryWord) === formaBuscaGlossario(indexedWord));
}
function palavrasEncontradasGlossario(queryWords, content) {
    const indexedWords = palavrasGlossario(content);
    return queryWords.every(word => indexedWords.some(candidate => palavraCompativelGlossario(word, candidate)));
}
function relevanciaTermoGlossario(term, query) {
    const seek = normalizarGlossario(query);
    if (!seek) return 0;
    const queryWords = palavrasGlossario(seek);
    if (!queryWords.length) return 0;
    const title = normalizarGlossario(term.term);
    const aliases = (term.aliases || []).map(normalizarGlossario);
    if (title === seek) return 0;
    if (aliases.includes(seek)) return 1;
    if (title.startsWith(seek)) return 2;
    if (palavrasEncontradasGlossario(queryWords, term.term)) return 3;
    if (aliases.some(alias => palavrasEncontradasGlossario(queryWords, alias))) return 4;
    const titlesAndAliases = [term.term, ...(term.aliases || [])].join(' ');
    if (palavrasEncontradasGlossario(queryWords, titlesAndAliases)) return 5;
    const fullContent = [titlesAndAliases, term.definition, term.contrast, term.cebraspeTrap, term.example].join(' ');
    return palavrasEncontradasGlossario(queryWords, fullContent) ? 6 : Infinity;
}
function filtrarTermosGlossario(terms, query = '', block = '', subject = '', article = '') {
    const seek = normalizarGlossario(query);
    const matches = (terms || []).filter(term => {
        if (block && !String(term.examBlock || '').split('/').includes(block)) return false;
        if (subject && !(term.subjectIds || []).includes(subject)) return false;
        if (article && !(term.articleIds || []).includes(article)) return false;
        return !seek || relevanciaTermoGlossario(term, seek) < Infinity;
    });
    if (seek) matches.sort((a, b) =>
        relevanciaTermoGlossario(a, seek) - relevanciaTermoGlossario(b, seek) ||
        a.term.localeCompare(b.term, 'pt-BR'));
    return matches;
}
function listarArtigosGlossario(terms, block = '', subject = '') {
    const articles = new Map();
    for (const term of filtrarTermosGlossario(terms, '', block, subject)) {
        for (const article of term.articleLinks || []) {
            const existing = articles.get(article.articleId);
            if (existing) existing.count += 1;
            else articles.set(article.articleId, { ...article, count: 1 });
        }
    }
    return [...articles.values()].sort((a, b) =>
        a.title.localeCompare(b.title, 'pt-BR', { numeric: true }) || a.articleId.localeCompare(b.articleId));
}
function agruparTermosGlossario(terms, selectedArticle = '') {
    const grouped = new Map();
    for (const item of terms || []) {
        const links = item.articleLinks || [];
        const article = links.find(a => a.articleId === selectedArticle) || links[0];
        if (!article) continue;
        if (!grouped.has(article.articleId)) grouped.set(article.articleId, { article, terms: [] });
        grouped.get(article.articleId).terms.push(item);
    }
    return [...grouped.values()].sort((a, b) =>
        a.article.title.localeCompare(b.article.title, 'pt-BR', { numeric: true }));
}
function escaparGlossario(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
}
function glossarioRotaTermo(id = '') {
    return construirRotaGlossario(id, glossarioState.contestId);
}
function glossarioTermosDoConcurso(data = glossarioState.data) {
    return (data?.terms || []).filter(item => (item.contestIds || []).includes(glossarioState.contestId));
}
function glossarioArtigoHref(article) {
    return construirRotaArtigoId(article.articleSlug || article.articleId, '', glossarioState.contestId);
}
function glossarioConfigConcurso(data = glossarioState.data) {
    return (data?.contests || []).find(item => item.id === glossarioState.contestId);
}
function definirBuscaNavbarComoGlossario(ativa) {
    const buscaNavbar = document.getElementById('nav-search-input');
    if (!buscaNavbar) return;
    buscaNavbar.placeholder = ativa ? 'buscar no glossário...' : 'pesquisar...';
    buscaNavbar.setAttribute('aria-label', ativa ? 'Pesquisar termos do glossário' : 'Pesquisar nas matérias');
    buscaNavbar.value = ativa ? glossarioState.query : '';
}
function pesquisarGlossarioPelaNavbar(consulta) {
    glossarioState.query = String(consulta || '');
    glossarioState.letter = '';
    const buscaLocal = document.getElementById('glossario-busca');
    if (buscaLocal) buscaLocal.value = glossarioState.query;
    renderizarGlossario();
}
async function carregarGlossario() {
    if (glossarioState.data) return glossarioState.data;
    if (!glossarioState.pending) {
        glossarioState.pending = fetch('glossario-index.json', { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.json();
            })
            .then(data => {
                if (!data || !Array.isArray(data.terms)) throw new Error('Formato de glossário inválido');
                glossarioState.data = data;
                return data;
            })
            .finally(() => { glossarioState.pending = null; });
    }
    return glossarioState.pending;
}
function prepararGlossario() {
    if (glossarioState.connected) return;
    const search = document.getElementById('glossario-busca');
    const block = document.getElementById('glossario-bloco');
    const subject = document.getElementById('glossario-materia');
    const article = document.getElementById('glossario-artigo');
    const organization = document.getElementById('glossario-organizacao');
    const topButton = document.getElementById('glossario-voltar-topo');
    if (!search || !block || !subject || !article || !organization || !topButton) return;
    search.addEventListener('input', () => {
        glossarioState.query = search.value;
        glossarioState.letter = '';
        const buscaNavbar = document.getElementById('nav-search-input');
        if (buscaNavbar) buscaNavbar.value = search.value;
        renderizarGlossario();
    });
    block.addEventListener('change', () => {
        glossarioState.block = block.value;
        glossarioState.letter = '';
        montarArtigosGlossario(glossarioState.data);
        renderizarGlossario();
    });
    subject.addEventListener('change', () => {
        glossarioState.subject = subject.value;
        glossarioState.letter = '';
        montarArtigosGlossario(glossarioState.data);
        renderizarGlossario();
    });
    article.addEventListener('change', () => {
        glossarioState.article = article.value;
        glossarioState.letter = '';
        renderizarGlossario();
    });
    organization.addEventListener('change', () => {
        glossarioState.organization = organization.value === 'artigo' ? 'artigo' : 'termo';
        renderizarGlossario();
    });
    topButton.addEventListener('click', () => {
        document.getElementById('glossario-pagina')?.scrollIntoView({
            behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
        });
    });
    glossarioState.connected = true;
}
function montarFiltrosGlossario(data) {
    const subject = document.getElementById('glossario-materia');
    if (!subject) return;
    const groups = glossarioConfigConcurso(data)?.subjects || data.subjects || [];
    if (subject.dataset.populated !== glossarioState.contestId) {
        subject.innerHTML = '<option value="">todas as matérias</option>' +
            groups.map(group => '<option value="' + escaparGlossario(group.id) + '">' + escaparGlossario(group.label) + '</option>').join('');
        subject.dataset.populated = glossarioState.contestId;
        glossarioState.subject = '';
    }
    subject.value = glossarioState.subject;
    const bloco = document.getElementById('glossario-bloco-filtro');
    if (bloco) bloco.hidden = glossarioState.contestId !== 'cgu-2026';
}
function montarArtigosGlossario(data) {
    const select = document.getElementById('glossario-artigo');
    if (!select || !data) return;
    const options = listarArtigosGlossario(glossarioTermosDoConcurso(data), glossarioState.block, glossarioState.subject);
    if (glossarioState.article && !options.some(item => item.articleId === glossarioState.article)) {
        glossarioState.article = '';
    }
    select.innerHTML = '<option value="">todos os artigos</option>' +
        options.map(item => '<option value="' + escaparGlossario(item.articleId) + '">' +
            escaparGlossario(item.title) + ' (' + item.count + ')</option>').join('');
    select.value = glossarioState.article;
    select.disabled = options.length === 0;
}
function renderizarGlossario() {
    const data = glossarioState.data;
    if (!data) return;
    const lista = document.getElementById('glossario-resultados');
    const status = document.getElementById('glossario-contador');
    const letras = document.getElementById('glossario-letras');
    const title = document.getElementById('glossario-titulo');
    if (!lista || !status || !letras) return;
    const config = glossarioConfigConcurso(data);
    if (title) title.textContent = glossarioState.contestId === 'cgu-2026' ? 'glossário: CGU' : 'glossário: Câmara dos Deputados';
    const filtered = filtrarTermosGlossario(glossarioTermosDoConcurso(data), glossarioState.query, glossarioState.block, glossarioState.subject, glossarioState.article);
    const initials = [...new Set(filtered.map(x => normalizarGlossario(x.term).charAt(0).toUpperCase()))].sort();
    if (glossarioState.letter && !initials.includes(glossarioState.letter)) glossarioState.letter = '';
    const visible = glossarioState.letter ?
        filtered.filter(x => normalizarGlossario(x.term).charAt(0).toUpperCase() === glossarioState.letter) : filtered;
    status.textContent = visible.length + ' resultado(s) · ' + (config?.publishedCount ?? data.publishedCount) +
        ' definições publicadas de ' + (config?.plannedCount ?? data.plannedCount) + ' planejadas para este concurso';
    letras.innerHTML = '<button type="button" data-letter="" aria-pressed="' + (!glossarioState.letter) + '">todos</button>' +
        initials.map(letter => '<button type="button" data-letter="' + escaparGlossario(letter) + '" aria-pressed="' +
            (glossarioState.letter === letter) + '">' + escaparGlossario(letter) + '</button>').join('');
    letras.querySelectorAll('[data-letter]').forEach(button => button.addEventListener('click', () => {
        glossarioState.letter = button.dataset.letter || '';
        renderizarGlossario();
    }));
    if (!visible.length) {
        lista.innerHTML = '<p class="glossario-vazio">Nenhuma definição encontrada para esses filtros.</p>';
        return;
    }
    const subjects = new Map((config?.subjects || data.subjects || []).map(item => [item.id, item.label]));
    const montarTermo = item => {
        const expanded = glossarioState.openId === item.id;
        const titulo = escaparGlossario(item.term);
        const id = escaparGlossario(item.id);
        const subjectId = (item.subjectIds || []).find(id => subjects.has(id)) || item.subjectIds[0];
        const subjectName = escaparGlossario(subjects.get(subjectId) || subjectId);
        const articleLinks = (item.articleLinks || []).map(a =>
            '<a href="' + escaparGlossario(glossarioArtigoHref(a)) + '">' + escaparGlossario(a.title) + '</a>').join(' · ');
        const bloco = item.contestIds.length > 1 && glossarioState.contestId === 'camara-2026' && !item.id.startsWith('glo-camara-')
            ? 'conceito compartilhado' : (glossarioState.contestId === 'cgu-2026' && item.id.startsWith('glo-camara-')
                ? 'conceito compartilhado' : item.examBlock || '');
        const sources = (item.sources || []).map(source =>
            '<a href="' + escaparGlossario(source.url) + '" target="_blank" rel="noopener noreferrer">' + escaparGlossario(source.label) + '</a>').join(' · ');
        const aliases = (item.aliases || []).filter(Boolean);
        const aliasesHtml = aliases.length ? '<p class="glossario-fonte">Siglas e nomes equivalentes: ' +
            aliases.map(escaparGlossario).join(' · ') + '</p>' : '';
        const detail = expanded ? '<div class="glossario-detalhe" id="glossario-detalhe-' + id + '">' +
            '<p class="glossario-definicao">' + escaparGlossario(item.definition) + '</p>' +
            '<dl><dt>Diferença importante</dt><dd>' + escaparGlossario(item.contrast) + '</dd>' +
            '<dt>Armadilha Cebraspe</dt><dd>' + escaparGlossario(item.cebraspeTrap) + '</dd>' +
            '<dt>Exemplo</dt><dd>' + escaparGlossario(item.example) + '</dd></dl>' +
            aliasesHtml +
            '<p class="glossario-fonte">Aprofundar: ' + articleLinks + '</p>' +
            '<p class="glossario-fonte">Fontes: ' + sources + '</p>' +
            '<a class="glossario-permalink" href="' + escaparGlossario(glossarioRotaTermo(item.id)) + '">link permanente desta definição</a>' +
            '</div>' : '';
        return '<article class="glossario-item" id="glossario-item-' + id + '">' +
            '<button type="button" class="glossario-termo" data-glossario-term="' + id +
            '" aria-expanded="' + expanded + '">' +
            '<span><strong>' + titulo + '</strong><small>' + subjectName + ' · ' + escaparGlossario(bloco) + '</small></span>' +
            '<span class="glossario-indicador" aria-hidden="true">' + (expanded ? 'fechar' : 'abrir') + '</span></button>' + detail +
            '</article>';
    };
    if (glossarioState.organization === 'artigo') {
        lista.innerHTML = agruparTermosGlossario(visible, glossarioState.article).map(group =>
            '<section class="glossario-artigo-grupo" aria-label="' + escaparGlossario(group.article.title) + '">' +
            '<h3 class="glossario-artigo-titulo"><a href="' + escaparGlossario(glossarioArtigoHref(group.article)) + '">' +
            escaparGlossario(group.article.title) + '</a><span>' + group.terms.length +
            ' termo(s)</span></h3>' + group.terms.map(montarTermo).join('') + '</section>').join('');
    } else {
        lista.innerHTML = visible.map(montarTermo).join('');
    }
    lista.querySelectorAll('[data-glossario-term]').forEach(button => button.addEventListener('click', () => {
        const next = glossarioState.openId === button.dataset.glossarioTerm ? '' : button.dataset.glossarioTerm;
        abrirGlossario(next, true, true);
    }));
}
async function abrirGlossario(id = '', atualizarRota = true, preservarFiltros = false) {
    const container = document.getElementById('glossario-pagina');
    if (!container) return;
    const rota = parsearHashVault(window.location.hash);
    const concursoRota = rota.tipo === 'glossario' ? rota.concursoId : '';
    const proximoConcurso = concursoRota === 'cgu-2026' || concursoRota === 'camara-2026'
        ? concursoRota
        : (typeof concursoSelecionadoId !== 'undefined' && concursoSelecionadoId === 'cgu-2026' ? 'cgu-2026' : 'camara-2026');
    if (glossarioState.contestId !== proximoConcurso) {
        glossarioState.contestId = proximoConcurso;
        glossarioState.query = '';
        glossarioState.block = '';
        glossarioState.subject = '';
        glossarioState.article = '';
        glossarioState.letter = '';
        glossarioState.openId = '';
        const busca = document.getElementById('glossario-busca');
        const navbar = document.getElementById('nav-search-input');
        if (busca) busca.value = '';
        if (navbar) navbar.value = '';
        const blocoSelect = document.getElementById('glossario-bloco');
        if (blocoSelect) blocoSelect.value = '';
    }
    const sigla = glossarioState.contestId === 'cgu-2026' ? 'CGU 2026' : 'Câmara dos Deputados 2026';
    const breadcrumb = document.getElementById('glossario-concurso-breadcrumb');
    const inicio = document.getElementById('glossario-inicio-link');
    if (breadcrumb) breadcrumb.textContent = sigla;
    if (inicio) inicio.href = construirRotaHome(glossarioState.contestId);
    if (atualizarRota) {
        const target = glossarioRotaTermo(id);
        if (window.location.hash !== target) history.pushState({ glossario: id }, '', target);
    }
    for (const node of ['painel-concurso-home', 'orientacoes-iniciais', 'explorar-disciplinas',
        'resultados', 'disciplina-leitor', 'leitor-artigo']) {
        document.getElementById(node)?.classList.add('escondido');
    }
    container.classList.remove('escondido');
    if (typeof atualizarDestinoIndiceTopo === 'function') atualizarDestinoIndiceTopo('');
    prepararGlossario();
    const lista = document.getElementById('glossario-resultados');
    if (lista && !glossarioState.data) lista.textContent = 'Carregando definições...';
    try {
        const data = await carregarGlossario();
        montarFiltrosGlossario(data);
        montarArtigosGlossario(data);
        const termosConcurso = glossarioTermosDoConcurso(data);
        glossarioState.openId = termosConcurso.some(term => term.id === id) ? id : '';
        const termoVisivel = filtrarTermosGlossario(termosConcurso, glossarioState.query, glossarioState.block,
            glossarioState.subject, glossarioState.article).some(term =>
            term.id === glossarioState.openId && (!glossarioState.letter ||
                normalizarGlossario(term.term).charAt(0).toUpperCase() === glossarioState.letter));
        if (glossarioState.openId && !termoVisivel && !preservarFiltros) {
            glossarioState.query = '';
            glossarioState.block = '';
            glossarioState.subject = '';
            glossarioState.article = '';
            glossarioState.letter = '';
            document.getElementById('glossario-busca').value = '';
            document.getElementById('glossario-bloco').value = '';
            document.getElementById('glossario-materia').value = '';
            montarArtigosGlossario(data);
        }
        renderizarGlossario();
        if (id && glossarioState.openId) {
            document.getElementById('glossario-item-' + id)?.scrollIntoView({ block: 'start' });
        } else if (atualizarRota && !preservarFiltros) window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Falha no glossário', error);
        if (lista) lista.textContent = 'Não foi possível carregar as definições. Reabra o glossário para tentar novamente.';
    }
}
