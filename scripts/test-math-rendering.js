import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const codigo = fs.readFileSync(path.join(root, 'web/04-markdown.js'), 'utf8');
const navegador = fs.readFileSync(path.join(root, 'web/03-article-navigation.js'), 'utf8');
const pagina = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const contexto = { console };
vm.createContext(contexto);
vm.runInContext(codigo, contexto, { filename: 'web/04-markdown.js' });
vm.runInContext('globalThis.mathAPI = { protegerBlocosMatematicosMarkdown, restaurarBlocosMatematicosHtml }', contexto);
const proteger = contexto.mathAPI.protegerBlocosMatematicosMarkdown;
const restaurar = contexto.mathAPI.restaurarBlocosMatematicosHtml;

let falhas = 0;
function verificar(nome, condicao) {
    if (condicao) console.log('OK: ' + nome);
    else { console.error('FALHA: ' + nome); falhas += 1; }
}

const crase = String.fromCharCode(96);
const cenario = [
    '- **Restauração:** $$\\text{Full (Domingo)} \\rightarrow \\text{Inc 1 (Seg)}$$',
    'A conta é \\(51 \\times 49 = 2499\\), e $\\frac{a}{b}$ é uma fração.',
    '| Tipo | \\(198 \\times 51\\) |',
    'A faixa de preço é R$ 120,00 a R$ 250,00.',
    crase + '$\\text{literal}$' + crase + ' deve continuar como código.',
    '~~~text',
    '$$\\text{literal em bloco}$$',
    '~~~'
].join('\n');
const protegido = proteger(cenario);
verificar('identifica as quatro fórmulas reais', protegido.blocos.length === 4);
verificar('conserva o backup como fórmula em bloco', protegido.blocos[0].display === true && protegido.blocos[0].formula.includes('\\rightarrow'));
verificar('não converte valores em reais', protegido.markdown.includes('R$ 120,00 a R$ 250,00'));
verificar('preserva fórmulas literais em código', protegido.markdown.includes(crase + '$\\text{literal}$' + crase) && protegido.markdown.includes('$$\\text{literal em bloco}$$'));
verificar('protege matemática antes do parser Markdown', protegido.markdown.includes('MATHFORMULATOKEN0END'));
const multilinha = proteger('$$\n\\frac{a}{b}\n$$\n\\[x+1\\]');
verificar('suporta $$ em várias linhas e \\[...\\]', multilinha.blocos.length === 2 && multilinha.blocos.every(b => b.display));
const fallback = restaurar('<p>MATHFORMULATOKEN0END</p>', protegido.blocos);
verificar('fallback preserva expressão sem KaTeX', fallback.includes('math-fallback') && fallback.includes('\\rightarrow'));
vm.runInContext('globalThis.katex = { renderToString: (f, opts) => "<span data-display=" + opts.displayMode + ">ok</span>" }', contexto);
const html = restaurar('<p>MATHFORMULATOKEN0END MATHFORMULATOKEN1END</p>', protegido.blocos);
verificar('renderiza fórmula em bloco e fórmula inline', html.includes('data-display=true') && html.includes('data-display=false') && !html.includes('\\text'));
verificar('leitor chama protetor e restauração', navegador.includes('protegerBlocosMatematicosMarkdown(markdownLimpo)') && navegador.includes('restaurarBlocosMatematicosHtml(htmlArtigo, matematicaProtegida.blocos)'));
verificar('KaTeX tem versão fixa e CSS', pagina.includes('katex@0.16.11/dist/katex.min.js') && pagina.includes('katex@0.16.11/dist/katex.min.css'));
verificar('não ativa conversão automática de cifras', !navegador.includes('renderMathInElement('));

function listarMarkdown(pasta) {
    return fs.readdirSync(pasta, { withFileTypes: true }).flatMap(entrada => {
        const arquivo = path.join(pasta, entrada.name);
        return entrada.isDirectory() ? listarMarkdown(arquivo) : entrada.name.endsWith('.md') ? [arquivo] : [];
    });
}
const arquivos = listarMarkdown(path.join(root, '3 - Materias'));
let comMatematica = 0, formulas = 0;
const destaques = [];
for (const arquivo of arquivos) {
    const resultado = proteger(fs.readFileSync(arquivo, 'utf8'));
    if (resultado.blocos.length) {
        comMatematica += 1;
        formulas += resultado.blocos.length;
        destaques.push([path.relative(root, arquivo), resultado.blocos.length]);
    }
}
destaques.sort((a,b) => b[1] - a[1]);
console.log('AUDITORIA: ' + arquivos.length + ' artigos; ' + comMatematica + ' com fórmulas; ' + formulas + ' expressões reconhecidas.');
console.log('Maiores concentrações: ' + destaques.slice(0,8).map(x => x[0] + ' (' + x[1] + ')').join('; '));
if (falhas) process.exit(1);
console.log('SUCESSO: matemática do leitor corrigida e cifras preservadas.');
