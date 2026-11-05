import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import '../web/00-route-utils.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const published = JSON.parse(fs.readFileSync(path.join(root, '_site/glossario-index.json'), 'utf8'));
const home = fs.readFileSync(path.join(root, '_site/index.html'), 'utf8');
assert.equal(published.schemaVersion, 1);
assert(published.plannedCount >= 295, 'Backlog deve preservar os 200 iniciais e as duas expansões de Orçamento');
assert(published.publishedCount >= 180, 'Glossário deve preservar as 143 definições anteriores e mais 30 de orçamento');
assert.equal(published.terms.length, published.publishedCount);
assert.equal(new Set(published.terms.map(x => x.id)).size, published.publishedCount);
assert(published.subjects.length >= 3);
for (const [subject, minimo] of [['auditoria-governamental',35],['orcamento-publico',120],['contabilidade-publica',25]]) {
  assert(published.terms.filter(t => t.subjectIds.includes(subject)).length >= minimo, subject + ': termo faltante');
}
assert(published.terms.every(t => t.status === 'reviewed' && t.sources.length > 0 && t.sources.every(s => /^https:\/\//.test(s.url))));
assert(published.terms.every(t => t.articleLinks.length && t.articleLinks.every(a => a.href.startsWith('#/artigo/'))));
assert(home.includes('id="glossario-pagina"') && home.includes('web/09-glossary.js'));
assert(home.includes('id="nav-link-glossario"') && home.includes('id="home-glossario-entry"'));
assert(home.includes('id="glossario-artigo"') && home.includes('id="glossario-organizacao"'), 'Filtros por artigo e organização ausentes da interface');
assert.equal(parsearHashVault('#/glossario?concurso=cgu-2026').tipo, 'glossario');
assert.equal(parsearHashVault('#/glossario/glo-ppa?concurso=cgu-2026').termoId, 'glo-ppa');
assert.equal(construirRotaGlossario('glo-ppa', 'cgu-2026'), '#/glossario/glo-ppa?concurso=cgu-2026');
const ctx = {console,window:{},Intl,Array,Set,String};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'web/09-glossary.js'), 'utf8'), ctx);
const termos = JSON.parse(JSON.stringify(published.terms));
const match = (query, block = '', subject = '') => ctx.filtrarTermosGlossario(termos, query, block, subject);
assert(match('criterio').some(t => t.id === 'glo-criterio-de-auditoria'));
assert(match('liquidacao').some(t => t.id === 'glo-liquidacao-da-despesa'));
assert(match('PPA').some(t => t.id === 'glo-ppa'));
assert(match('PAINT').some(t => t.id === 'glo-paint'));
assert(match('DEA').some(t => t.id === 'glo-despesas-de-exercicios-anteriores'));
assert(match('SIC').some(t => t.id === 'glo-sistema-de-informacao-de-custos-sic'));
assert(match('programacao fisica').some(t => t.id === 'glo-programacao-fisica-cumprida'));
for (const [consulta, id] of [
  ['receita primaria','glo-receita-primaria'],
  ['receita financeira','glo-receita-financeira'],
  ['receita corrente liquida','glo-receita-corrente-liquida-rcl'],
  ['RCL','glo-receita-corrente-liquida-rcl'],
  ['ARO','glo-antecipacao-de-receita-orcamentaria-aro'],
  ['gnd','glo-grupo-de-natureza-da-despesa-gnd'],
  ['subfuncao','glo-subfuncao-orcamentaria'],
  ['destinacao de recursos','glo-fonte-destinacao-de-recursos'],
  ['inversoes financeiras','glo-inversoes-financeiras-gnd']
]) assert(match(consulta).some(t => t.id === id), 'Busca falhou para '+consulta);
const programacaoFisica = published.terms.find(t => t.id === 'glo-programacao-fisica-cumprida');
assert(programacaoFisica.articleLinks.some(a => a.articleId === 'art-f6cfe9fbcc764554'), 'programação física vinculada ao artigo onde é explicada');
assert(match('', 'P3').length >= 108);
assert(match('', 'P2').length >= 35);
assert(match('', '', 'auditoria-governamental').length >= 35);
assert(match('', '', 'orcamento-publico').length >= 120);
const idsOrcamento = published.terms.filter(t=>t.subjectIds.includes('orcamento-publico')).map(t=>t.id);
assert.equal(new Set(idsOrcamento).size, idsOrcamento.length, 'IDs de orçamento duplicados');
for(const [q,id] of [['GND','glo-grupo-de-natureza-da-despesa-gnd'],['empenho global','glo-empenho-global'],['superavit financeiro','glo-superavit-financeiro'],['RREO','glo-rreo-relatorio-resumido-da-execucao-orcamentaria'],['AMF','glo-anexo-de-metas-fiscais'],['suprimento de fundos','glo-suprimento-de-fundos']]) assert(match(q).some(t=>t.id===id),'Termo não encontrado: '+q);
assert(fs.existsSync(path.join(root,'data/glossario/termos/orcamento-publico-complementos.json')));
const articleId = 'art-d8b1c5e6037249fa';
const articleList = JSON.parse(JSON.stringify(ctx.listarArtigosGlossario(termos)));
assert(articleList.length >= 32, 'Artigos vinculados devem ser listados sem duplicação');
assert.equal(new Set(articleList.map(a => a.articleId)).size, articleList.length);
assert(articleList.every(a => a.count > 0 && a.title && a.href.startsWith('#/artigo/')));
const articleWithDefinitions = articleList.find(a => a.articleId === articleId);
assert(articleWithDefinitions && articleWithDefinitions.count >= 52);
const articleMatches = match('', '', '', articleId);
assert.equal(articleMatches.length, articleWithDefinitions.count, 'Contagem do seletor deve bater com o filtro por artigo');
assert(articleMatches.every(term => term.articleIds.includes(articleId)));
assert.equal(match('', '', 'contabilidade-publica', articleId).length, 0, 'Matéria e artigo devem ser combináveis');
assert(ctx.listarArtigosGlossario(termos, '', 'contabilidade-publica').every(a => a.articleId !== articleId), 'Seletor deve mostrar apenas artigos da matéria');
assert.equal(match('', '', '', 'artigo-inexistente').length, 0);
const groups = JSON.parse(JSON.stringify(ctx.agruparTermosGlossario(termos)));
assert.equal(groups.reduce((total, group) => total + group.terms.length, 0), termos.length, 'Agrupamento não deve perder ou duplicar verbetes');
assert.equal(groups.length, articleList.length);
const selectedGroups = JSON.parse(JSON.stringify(ctx.agruparTermosGlossario(articleMatches, articleId)));
assert.equal(selectedGroups.length, 1, 'Artigo selecionado deve produzir um grupo');
assert.equal(selectedGroups[0].terms.length, articleMatches.length);
for (const [query, id] of [['regra de ouro', 'glo-regra-de-ouro'], ['DOCC', 'glo-despesa-obrigatoria-de-carater-continuado'], ['estatal dependente','glo-empresa-estatal-dependente']]) {
    assert(match(query).some(t => t.id === id), 'Novo conceito de orçamento ausente: ' + query);
}
assert(match('sem termo impossível').length === 0);
console.log('SUCESSO: ao menos 180 definições, incluindo 120 de orçamento, com filtro e agrupamento por artigo, com fontes, filtros, aliases e links íntegros.');
