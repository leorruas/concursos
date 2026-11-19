// Teste de regressão do explorador Mermaid, sem browser ou dependências externas.
// Simula os controles e o ciclo de vida do modal; não substitui auditoria visual.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(require('node:path').join(__dirname, '../web/05-mermaid.js'), 'utf8');

function criarAmbiente(renderizar) {
    const listenersGlobais = new Map();
    const controles = new Map();
    const document = {
        activeElement: null,
        fonts: { ready: Promise.resolve() },
        documentElement: { dataset: { theme: 'light' } },
        querySelector(seletor) { return seletor === '.mermaid-modal' ? this.modal?.isConnected ? this.modal : null : null; },
        createElement(tag) {
            assert.equal(tag, 'div');
            const modal = {
                isConnected: false,
                style: {},
                attrs: {},
                setAttribute(chave, valor) { this.attrs[chave] = valor; },
                set innerHTML(html) { this.html = html; },
                remove() { this.isConnected = false; },
                querySelector(seletor) {
                    if (seletor === '.mermaid-modal-stage') return stage;
                    if (seletor === '.mermaid-modal-body') return body;
                    if (seletor === '.mermaid-modal-zoom-display') return zoomDisplay;
                    return controles.get(seletor) || null;
                },
                querySelectorAll(seletor) {
                    const botoes = Array.from(controles.values());
                    if (seletor === '.mermaid-modal-controls button:not(.btn-mermaid-fechar)' ||
                        seletor === 'button:not(.btn-mermaid-fechar)') return botoes.filter(b => b !== fechar);
                    if (seletor === 'button:not([disabled])') return botoes.filter(b => !b.disabled);
                    return [];
                },
                contains(elemento) { return Array.from(controles.values()).includes(elemento); }
            };
            document.modal = modal;
            return modal;
        },
        body: { appendChild(elemento) { elemento.isConnected = true; } }
    };
    function botao(nome) {
        const ouvintes = new Map();
        const o = {
            disabled: false,
            isConnected: true,
            addEventListener(tipo, callback) { ouvintes.set(tipo, callback); },
            removeEventListener(tipo, callback) { if (ouvintes.get(tipo) === callback) ouvintes.delete(tipo); },
            focus() { document.activeElement = o; },
            click() { if (!o.disabled) ouvintes.get('click')?.(); }
        };
        controles.set(nome, o);
        return o;
    }
    const afastar = botao('.btn-mermaid-zoom-out');
    const aproximar = botao('.btn-mermaid-zoom-in');
    const ajustar = botao('.btn-mermaid-fit');
    const real = botao('.btn-mermaid-reset');
    const fechar = botao('.btn-mermaid-fechar');
    const stage = {
        style: {},
        set innerHTML(html) { this.html = html; },
        get innerHTML() { return this.html; },
        querySelector(seletor) {
            if (seletor !== 'svg' || !this.html?.includes('<svg')) return null;
            return { viewBox: { baseVal: { width: 800, height: 400 } } };
        }
    };
    const body = {
        style: {},
        classList: { add() {}, remove() {} },
        getBoundingClientRect() { return { width: 1000, height: 700, left: 0, top: 0 }; },
        addEventListener() {},
        removeEventListener() {}
    };
    const zoomDisplay = { textContent: '' };
    const window = {
        addEventListener(tipo, cb) { listenersGlobais.set(tipo, cb); },
        removeEventListener(tipo, cb) { if (listenersGlobais.get(tipo) === cb) listenersGlobais.delete(tipo); }
    };
    const original = { isConnected: true, focus() { document.activeElement = this; } };
    document.activeElement = original;
    const context = {
        document, window,
        mermaid: { initialize() {}, render: renderizar },
        requestAnimationFrame(fn) { fn(); },
        console
    };
    const ambiente = vm.createContext(context);
    vm.runInContext(source, ambiente, { filename: 'web/05-mermaid.js' });
    const executar = () => vm.runInContext('abrirModalExploradorMermaid("flowchart TD\\nA-->B")', ambiente);
    const tecla = (key, shiftKey = false) => {
        const evento = { key, shiftKey, preventDefault() { this.prevented = true; } };
        listenersGlobais.get('keydown')?.(evento);
        return evento;
    };
    return { executar, tecla, document, original, controles, fechar, aproximar, afastar, ajustar, real, listenersGlobais };
}

async function testarFecharDuranteCarga() {
    let resolver;
    const pendente = new Promise(ok => { resolver = ok; });
    const t = criarAmbiente(() => pendente);
    const abertura = t.executar();
    await Promise.resolve();
    assert.equal(t.document.modal.attrs.role, 'dialog');
    assert.equal(t.document.modal.attrs['aria-modal'], 'true');
    assert.equal(t.document.activeElement, t.fechar);
    assert.equal(t.aproximar.disabled, true);
    assert.equal(t.tecla('Escape').prevented, true);
    assert.equal(t.document.modal.isConnected, false);
    assert.equal(t.document.activeElement, t.original);
    resolver({ svg: '<svg></svg>' });
    await abertura;
    assert.equal(t.listenersGlobais.has('keydown'), false);
}

async function testarSucessoETeclado() {
    const t = criarAmbiente(async () => ({ svg: '<svg></svg>' }));
    await t.executar();
    assert.equal(t.aproximar.disabled, false);
    assert.equal(t.document.modal.isConnected, true);
    t.fechar.focus();
    assert.equal(t.tecla('Tab').prevented, true);
    assert.equal(t.document.activeElement, t.afastar);
    t.afastar.focus();
    assert.equal(t.tecla('Tab', true).prevented, true);
    assert.equal(t.document.activeElement, t.fechar);
    t.tecla('Escape');
    assert.equal(t.document.modal.isConnected, false);
    assert.equal(t.document.activeElement, t.original);
    assert.equal(t.listenersGlobais.has('keydown'), false);
}

async function testarErroRenderizacao() {
    const t = criarAmbiente(async () => { throw new Error('diagrama inválido'); });
    await t.executar();
    assert.equal(t.document.modal.isConnected, true);
    assert.equal(t.aproximar.disabled, true);
    assert.match(t.document.modal.querySelector('.mermaid-modal-stage').textContent, /Não foi possível renderizar/);
    t.fechar.click();
    assert.equal(t.document.modal.isConnected, false);
    assert.equal(t.document.activeElement, t.original);
    assert.equal(t.listenersGlobais.has('keydown'), false);
}

async function main() {
    await testarFecharDuranteCarga();
    await testarSucessoETeclado();
    await testarErroRenderizacao();
    console.log('SUCESSO: modal Mermaid pode ser fechado durante carga, após sucesso e após erro.');
}
main().catch(erro => { console.error(erro); process.exitCode = 1; });
