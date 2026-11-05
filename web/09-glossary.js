// Consulta pública: dados revisados gerados pelo build. Nenhum resultado pessoal.
const glossarioState = { data: null, pending: null, query: '', block: '', subject: '', letter: '', openId: '', connected: false };
function normalizarGlossario(valor) {
    return String(valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}
function filtrarTermosGlossario(terms, query = '', block = '', subject = '') {
    const seek = normalizarGlossario(query);
    return (terms || []).filter(term => {
        if (block && !String(term.examBlock || '').split('/').includes(block)) return false;
        if (subject && !(term.subjectIds || []).includes(subject)) return false;
        if (!seek) return true;
        return [term.term, ...(term.aliases || []), term.definition, term.contrast]
            .some(value => normalizarGlossario(value).includes(seek));
    });
}
function escaparGlossario(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
}
function glossarioRotaTermo(id = '') {
    return construirRotaGlossario(id, 'cgu-2026');
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
    if (!search || !block || !subject) return;
    search.addEventListener('input', () => {
        glossarioState.query = search.value;
        glossarioState.letter = '';
        renderizarGlossario();
    });
    block.addEventListener('change', () => {
        glossarioState.block = block.value;
        glossarioState.letter = '';
        renderizarGlossario();
    });
    subject.addEventListener('change', () => {
        glossarioState.subject = subject.value;
        glossarioState.letter = '';
        renderizarGlossario();
    });
    glossarioState.connected = true;
}
function montarFiltrosGlossario(data) {
    const subject = document.getElementById('glossario-materia');
    if (!subject || subject.dataset.populated === 'true') return;
    const groups = data.subjects || [];
    subject.innerHTML = '<option value="">todas as matérias</option>' +
        groups.map(group => '<option value="' + escaparGlossario(group.id) + '">' + escaparGlossario(group.label) + '</option>').join('');
    subject.dataset.populated = 'true';
}
function renderizarGlossario() {
    const data = glossarioState.data;
    if (!data) return;
    const lista = document.getElementById('glossario-resultados');
    const status = document.getElementById('glossario-contador');
    const letras = document.getElementById('glossario-letras');
    const title = document.getElementById('glossario-titulo');
    if (!lista || !status || !letras) return;
    if (title) title.textContent = 'glossário: CGU';
    const filtered = filtrarTermosGlossario(data.terms, glossarioState.query, glossarioState.block, glossarioState.subject);
    const initials = [...new Set(filtered.map(x => normalizarGlossario(x.term).charAt(0).toUpperCase()))].sort();
    if (glossarioState.letter && !initials.includes(glossarioState.letter)) glossarioState.letter = '';
    const visible = glossarioState.letter ?
        filtered.filter(x => normalizarGlossario(x.term).charAt(0).toUpperCase() === glossarioState.letter) : filtered;
    status.textContent = visible.length + ' resultado(s) · ' + data.publishedCount +
        ' definições publicadas de ' + data.plannedCount + ' planejadas';
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
    const subjects = new Map((data.subjects || []).map(item => [item.id, item.label]));
    lista.innerHTML = visible.map(item => {
        const expanded = glossarioState.openId === item.id;
        const titulo = escaparGlossario(item.term);
        const id = escaparGlossario(item.id);
        const subjectName = escaparGlossario(subjects.get(item.subjectIds[0]) || item.subjectIds[0]);
        const articleLinks = (item.articleLinks || []).map(a =>
            '<a href="' + escaparGlossario(a.href) + '">' + escaparGlossario(a.title) + '</a>').join(' · ');
        const sources = (item.sources || []).map(source =>
            '<a href="' + escaparGlossario(source.url) + '" target="_blank" rel="noopener noreferrer">' + escaparGlossario(source.label) + '</a>').join(' · ');
        const detail = expanded ? '<div class="glossario-detalhe" id="glossario-detalhe-' + id + '">' +
            '<p class="glossario-definicao">' + escaparGlossario(item.definition) + '</p>' +
            '<dl><dt>Diferença importante</dt><dd>' + escaparGlossario(item.contrast) + '</dd>' +
            '<dt>Armadilha Cebraspe</dt><dd>' + escaparGlossario(item.cebraspeTrap) + '</dd>' +
            '<dt>Exemplo</dt><dd>' + escaparGlossario(item.example) + '</dd></dl>' +
            '<p class="glossario-fonte">Aprofundar: ' + articleLinks + '</p>' +
            '<p class="glossario-fonte">Fontes: ' + sources + '</p>' +
            '<a class="glossario-permalink" href="' + escaparGlossario(glossarioRotaTermo(item.id)) + '">link permanente desta definição</a>' +
            '</div>' : '';
        return '<article class="glossario-item" id="glossario-item-' + id + '">' +
            '<button type="button" class="glossario-termo" data-glossario-term="' + id +
            '" aria-expanded="' + expanded + '">' +
            '<span><strong>' + titulo + '</strong><small>' + subjectName + ' · ' + escaparGlossario(item.examBlock || '') + '</small></span>' +
            '<span class="glossario-indicador" aria-hidden="true">' + (expanded ? 'fechar' : 'abrir') + '</span></button>' + detail +
            '</article>';
    }).join('');
    lista.querySelectorAll('[data-glossario-term]').forEach(button => button.addEventListener('click', () => {
        const next = glossarioState.openId === button.dataset.glossarioTerm ? '' : button.dataset.glossarioTerm;
        abrirGlossario(next, true);
    }));
}
async function abrirGlossario(id = '', atualizarRota = true) {
    const container = document.getElementById('glossario-pagina');
    if (!container) return;
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
        glossarioState.openId = data.terms.some(term => term.id === id) ? id : '';
        if (glossarioState.openId) {
            glossarioState.query = '';
            glossarioState.block = '';
            glossarioState.subject = '';
            glossarioState.letter = '';
            document.getElementById('glossario-busca').value = '';
            document.getElementById('glossario-bloco').value = '';
            document.getElementById('glossario-materia').value = '';
        }
        renderizarGlossario();
        if (id && glossarioState.openId) {
            document.getElementById('glossario-item-' + id)?.scrollIntoView({ block: 'start' });
        } else if (atualizarRota) window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Falha no glossário', error);
        if (lista) lista.textContent = 'Não foi possível carregar as definições. Reabra o glossário para tentar novamente.';
    }
}
