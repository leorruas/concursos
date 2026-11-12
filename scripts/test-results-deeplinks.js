import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const ctx = { console };
ctx.window = ctx;
ctx.setTimeout = () => 0;
vm.createContext(ctx);
for (const file of ['web/00-route-utils.js', 'web/03-article-navigation.js', 'web/04-markdown.js']) {
  vm.runInContext(read(file), ctx, { filename: file });
}

let falhas = 0;
function check(titulo, ok) {
  if (ok) console.log('✓ ' + titulo);
  else { console.error('✗ ' + titulo); falhas++; }
}

const casos = [
  {
    titulo: 'Regime orçamentário e regime patrimonial',
    anchor: 'regime-orcamentario-e-regime-patrimonial'
  },
  {
    titulo: 'Quadro financeiro e permanente: art. 105 da Lei nº 4.320/1964',
    anchor: 'quadro-financeiro-e-permanente-art-105-da-lei-n-4-320-1964'
  },
  {
    titulo: '1.2 As Duas Grandes Tarefas Supervisionadas',
    anchor: '1-2-as-duas-grandes-tarefas-supervisionadas'
  }
];

for (const caso of casos) {
  const rolagens = [];
  const titulo = { id: caso.anchor, textContent: caso.titulo,
    scrollIntoView: info => rolagens.push(info),
    classList: { add() {}, remove() {} } };
  ctx.document = { getElementById: id => id === caso.anchor ? titulo : null };
  ctx.artigoCorpo = { contains: x => x === titulo, querySelectorAll: () => [titulo] };
  ctx.artigoAtual = { indiceBusca: { secoes: [{ titulo: caso.titulo, anchor: caso.anchor }] } };

  check('título de teoria chega ao trecho: ' + caso.titulo,
    vm.runInContext('irParaSecaoArtigo(' + JSON.stringify(caso.titulo) + ', "auto")', ctx) &&
    rolagens.length === 1 && rolagens[0].block === 'start');
  rolagens.length = 0;
  check('âncora canônica permanece navegável: ' + caso.anchor,
    vm.runInContext('irParaSecaoArtigo(' + JSON.stringify(caso.anchor) + ', "auto")', ctx) &&
    rolagens.length === 1);
}

{
  const titulo = { id: 'heading-toc-0', textContent: 'Regime orçamentário e regime patrimonial',
    scrollIntoView() { this.scrolled = true; }, classList: { add() {}, remove() {} } };
  ctx.document = { getElementById: id => id === titulo.id ? titulo : null };
  ctx.artigoCorpo = { contains: x => x === titulo, querySelectorAll: () => [titulo] };
  ctx.artigoAtual = { indiceBusca: null };
  check('funciona sem índice compacto, pelo texto do cabeçalho',
    vm.runInContext('irParaSecaoArtigo("Regime orçamentário e regime patrimonial", "auto")', ctx) &&
    titulo.scrolled === true);
  check('não aponta a uma seção diferente quando o título não existe',
    vm.runInContext('irParaSecaoArtigo("Título inexistente", "auto")', ctx) === false);
}

const url = vm.runInContext(
  'construirRotaArtigoId("resumo-contabilidade", "Regime orçamentário e regime patrimonial", "cgu-2026")', ctx
);
ctx.rotaTeste = url;
check('link externo preserva título da seção e concurso na URL',
  vm.runInContext('parsearHashVault(rotaTeste).secao === "Regime orçamentário e regime patrimonial" && parsearHashVault(rotaTeste).concursoId === "cgu-2026"', ctx));

const resultados = read('web/13-results-ui.js');
const rodape = read('web/14-article-errors.js');
check('painel privado envia referência de seção na URL', resultados.includes('articleLink(article,q.section)'));
check('questões ao final do artigo rolam diretamente ao trecho', rodape.includes("irParaSecaoArtigo(q.section,'smooth')"));
check('questões ao final do artigo não forçam rolagem ao topo', !rodape.includes("document.querySelector('main')?.scrollIntoView"));

if (falhas) process.exit(1);
console.log('SUCESSO: links de teoria do painel e dos erros de artigo validados.');
