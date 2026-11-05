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
assert(published.plannedCount >= 288, 'Backlog deve preservar os 200 iniciais e as duas expansões de Orçamento');
assert(published.publishedCount >= 173, 'Glossário deve preservar as 143 definições anteriores e mais 30 de orçamento');
assert.equal(published.terms.length, published.publishedCount);
assert.equal(new Set(published.terms.map(x => x.id)).size, published.publishedCount);
assert(published.subjects.length >= 3);
for (const [subject, minimo] of [['auditoria-governamental',35],['orcamento-publico',113],['contabilidade-publica',25]]) {
  assert(published.terms.filter(t => t.subjectIds.includes(subject)).length >= minimo, subject + ': termo faltante');
}
assert(published.terms.every(t => t.status === 'reviewed' && t.sources.length > 0 && t.sources.every(s => /^https:\/\//.test(s.url))));
assert(published.terms.every(t => t.articleLinks.length && t.articleLinks.every(a => a.href.startsWith('#/artigo/'))));
assert(home.includes('id="glossario-pagina"') && home.includes('web/09-glossary.js'));
assert(home.includes('id="nav-link-glossario"') && home.includes('id="home-glossario-entry"'));
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
assert(match('', '', 'orcamento-publico').length >= 113);
const idsOrcamento = published.terms.filter(t=>t.subjectIds.includes('orcamento-publico')).map(t=>t.id);
assert.equal(new Set(idsOrcamento).size, idsOrcamento.length, 'IDs de orçamento duplicados');
for(const [q,id] of [['GND','glo-grupo-de-natureza-da-despesa-gnd'],['empenho global','glo-empenho-global'],['superavit financeiro','glo-superavit-financeiro'],['RREO','glo-rreo-relatorio-resumido-da-execucao-orcamentaria'],['AMF','glo-anexo-de-metas-fiscais'],['suprimento de fundos','glo-suprimento-de-fundos']]) assert(match(q).some(t=>t.id===id),'Termo não encontrado: '+q);
assert(fs.existsSync(path.join(root,'data/glossario/termos/orcamento-publico-complementos.json')));
assert(match('sem termo impossível').length === 0);
console.log('SUCESSO: ao menos 173 definições, incluindo 113 de orçamento, com fontes, filtros, aliases e links íntegros.');
