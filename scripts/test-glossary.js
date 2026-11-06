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
assert(published.plannedCount >= 327, 'Backlog deve preservar os 200 iniciais e as duas expansões de Orçamento');
assert(published.publishedCount >= 212, 'Glossário deve preservar as 143 definições anteriores, as ampliações e o PCASP revisado');
assert.equal(published.terms.length, published.publishedCount);
assert.equal(new Set(published.terms.map(x => x.id)).size, published.publishedCount);
assert(published.subjects.length >= 3);
for (const [subject, minimo] of [['auditoria-governamental',35],['orcamento-publico',140],['contabilidade-publica',37]]) {
  assert(published.terms.filter(t => t.subjectIds.includes(subject)).length >= minimo, subject + ': termo faltante');
}
assert(published.terms.every(t => t.status === 'reviewed' && t.sources.length > 0 && t.sources.every(s => /^https:\/\//.test(s.url))));
assert(published.terms.every(t => t.articleLinks.length && t.articleLinks.every(a => a.href.startsWith('#/artigo/'))));
assert(home.includes('id="glossario-pagina"') && home.includes('web/09-glossary.js'));
assert(home.includes('id="nav-link-glossario"') && home.includes('id="home-glossario-entry"'));
assert(home.includes('id="glossario-artigo"') && home.includes('id="glossario-organizacao"'), 'Filtros por artigo e organização ausentes da interface');
assert(home.includes('id="glossario-voltar-topo"') && home.includes('class="glossario-voltar-topo"'),
  'Botão voltar ao topo deve estar visível no glossário sem depender da rolagem');
assert(!/id="glossario-voltar-topo"[^>]*escondido/.test(home),
  'Botão não pode iniciar oculto no próprio elemento; sua seção controla a visibilidade');
const glossaryUI = fs.readFileSync(path.join(root, 'web/09-glossary.js'), 'utf8');
const style = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
assert(glossaryUI.includes('class="glossario-artigo-grupo"') &&
  glossaryUI.includes('class="glossario-artigo-titulo"'), 'Agrupamento por artigo deve usar classes próprias');
assert(glossaryUI.includes('function pesquisarGlossarioPelaNavbar') &&
  glossaryUI.includes("'buscar no glossário...'"),
  'Busca da barra deve atuar como busca do glossário na rota correspondente');
assert(!glossaryUI.includes('class="glossario-grupo"'), 'Classe de grade dos artigos não pode ser reutilizada no glossário');
assert(style.includes('.glossario-artigo-grupo{display:block;'), 'Grupos do glossário devem empilhar título e verbetes');
assert(style.includes('.glossario-voltar-topo{position:fixed;'),
  'Botão voltar ao topo deve ficar fixo e restrito ao glossário');
assert(style.includes('.glossario-grupo {\n    display: grid;'), 'Grade dos glossários internos dos artigos deve ser preservada');
assert.equal(parsearHashVault('#/glossario?concurso=cgu-2026').tipo, 'glossario');
assert.equal(parsearHashVault('#/glossario/glo-ppa?concurso=cgu-2026').termoId, 'glo-ppa');
assert.equal(construirRotaGlossario('glo-ppa', 'cgu-2026'), '#/glossario/glo-ppa?concurso=cgu-2026');
const ctx = {console,window:{},Intl,Array,Set,String};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'web/09-glossary.js'), 'utf8'), ctx);
// Navegação longa: o botão deve estar sempre acessível ao abrir o glossário.
// A seção pai controla sua presença nas outras páginas, mesmo sem evento de scroll.
const mockListeners = new Map();
let scrollToTopOptions = null;
const mockControls = Object.fromEntries([
  'glossario-busca','glossario-bloco','glossario-materia',
  'glossario-artigo','glossario-organizacao','glossario-voltar-topo'
].map(id => [id, { value: '', addEventListener(type, fn) {
  mockListeners.set(id + ':' + type, fn);
} }]));
const mockRoot = {
  scrollIntoView(options) { scrollToTopOptions = options; }
};
ctx.document = {getElementById(id) {
  if(id === 'glossario-pagina') return mockRoot;
  return mockControls[id] || null;
}};
ctx.window.addEventListener = (type, fn) => mockListeners.set('window:' + type, fn);
ctx.window.matchMedia = () => ({matches:false});
ctx.prepararGlossario();
assert.equal(mockListeners.has('glossario-voltar-topo:click'), true,
  'Botão deve receber tratamento de clique');
assert.equal(mockListeners.has('window:scroll'), false,
  'Visibilidade do botão não pode depender do scrollY');
mockListeners.get('glossario-voltar-topo:click')();
assert.equal(scrollToTopOptions.behavior, 'smooth');
assert.equal(scrollToTopOptions.block, 'start');
ctx.window.matchMedia = () => ({matches:true});
mockListeners.get('glossario-voltar-topo:click')();
assert.equal(scrollToTopOptions.behavior, 'auto', 'Respeitar preferência por movimento reduzido');
const workflowText = fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');
assert(workflowText.includes('name: github-pages-${{ github.run_attempt }}') &&
       workflowText.includes('artifact_name: github-pages-${{ github.run_attempt }}'),
  'Tentativas do workflow devem produzir artefatos de nomes distintos');
const termos = JSON.parse(JSON.stringify(published.terms));
const match = (query, block = '', subject = '', article = '') => ctx.filtrarTermosGlossario(termos, query, block, subject, article);
assert(match('criterio').some(t => t.id === 'glo-criterio-de-auditoria'));
assert(match('liquidacao').some(t => t.id === 'glo-liquidacao-da-despesa'));
assert(match('PPA').some(t => t.id === 'glo-ppa'));
assert(match('PAINT').some(t => t.id === 'glo-paint'));
assert(match('DEA').some(t => t.id === 'glo-despesas-de-exercicios-anteriores'));
assert(match('SIC').some(t => t.id === 'glo-sistema-de-informacao-de-custos-sic'));
for (const [consulta, id, more] of [
  ['ativo', 'glo-ativo', 'glo-ativo-patrimonial'],
  ['passivo', 'glo-passivo', 'glo-passivo-patrimonial']
]) {
  const hits = match(consulta, 'P3', 'contabilidade-publica');
  assert.equal(hits[0].id, id, 'O conceito simples deve aparecer antes do conceito patrimonial: ' + consulta);
  assert(hits.some(item => item.id === more), 'A forma patrimonial deve permanecer acessível: ' + consulta);
  const simple = published.terms.find(item => item.id === id);
  assert(simple && simple.articleLinks.some(a => a.articleId === 'art-85b3a61ad09e44c1'), 'Vínculo com a nota contábil ausente: ' + consulta);
  for (const field of ['definition', 'contrast', 'cebraspeTrap', 'example']) {
    assert(simple[field] && simple[field].length >= 30, 'Conceito incompleto: '+id+' / '+field);
  }
}
assert(fs.existsSync(path.join(root, 'data/glossario/termos/contabilidade-publica-fundamentos.json')), 'Arquivo com conceitos básicos não incluído');
assert(fs.existsSync(path.join(root, 'data/glossario/termos/contabilidade-publica-financeiro.json')),
  'Os dois conceitos financeiros devem ser publicados em arquivo próprio');
for(const [term,id,generalId] of [
  ['ativo financeiro','glo-ativo-financeiro','glo-ativo'],
  ['passivo financeiro','glo-passivo-financeiro','glo-passivo']
]) {
  const exact = match(term,'P3','contabilidade-publica');
  assert.equal(exact[0]?.id,id, 'Busca exata por '+term+' deve priorizar o conceito legal');
  const generic = match(term.split(' ')[0],'P3','contabilidade-publica');
  assert(generic.some(t=>t.id===id) && generic.some(t=>t.id===generalId),
    'Consulta simples deve trazer o conceito amplo e a classificação financeira: '+term);
  const newEntry = published.terms.find(t=>t.id===id);
  assert(newEntry?.articleLinks.some(a=>a.articleId==='art-bf384b8a28aa4753'),
    'Verbete financeiro sem vínculo com Balanço Patrimonial: '+term);
  assert(newEntry.definition.length > 45 && newEntry.contrast.length > 80 &&
    newEntry.cebraspeTrap.length > 40 && newEntry.example.length > 45,
    'Verbete financeiro exige explicação, contraste, pegadinha e exemplo: '+term);
  assert(newEntry.sources.some(src=>src.url.includes('lei-4320')) &&
    newEntry.sources.some(src=>src.url.includes('MCASP')),
    'Fontes legais e MCASP obrigatórias para classificação financeira: '+term);
}
const passivoFinanceiro = published.terms.find(t=>t.id==='glo-passivo-financeiro');
assert(/sem (?:uma )?(?:dívida|obrigação|passivo) patrimonial|ainda não representa uma dívida patrimonial/.test(
  passivoFinanceiro.contrast+' '+passivoFinanceiro.example),
  'Explicação deve cobrir passivo financeiro sem passivo patrimonial associado');
for(const termId of ['glo-ativo','glo-passivo','glo-ativo-patrimonial','glo-passivo-patrimonial']) {
  const entry=published.terms.find(t=>t.id===termId);
  assert(entry && /financeir/.test(entry.contrast),
    'Verbetes gerais precisam explicar a diferença para a classificação financeira: '+termId);
}
const bpNote = fs.readFileSync(path.join(root,
  '3 - Materias/Contabilidade Publica/03 - balanco patrimonial e demonstracao das variacoes patrimoniais.md'),'utf8');
assert(bpNote.includes('**Ativo patrimonial**') &&
  bpNote.includes('**Ativo financeiro**') &&
  bpNote.includes('**Passivo patrimonial**') &&
  bpNote.includes('**Passivo financeiro (legal)**') &&
  bpNote.includes('sem passivo patrimonial'),
  'Nota canônica deve destacar a fronteira entre os quatro conceitos');

const novosFatos = [
  'fato-contabil',
  'fato-permutativo',
  'fato-modificativo',
  'fato-modificativo-aumentativo',
  'fato-modificativo-diminutivo',
  'fato-misto',
  'ato-administrativo-sem-efeito-patrimonial-imediato'
];
for(const slug of novosFatos) {
  const id = 'glo-' + slug;
  const entry = published.terms.find(t => t.id === id);
  assert(entry && entry.subjectIds.includes('contabilidade-publica'), 'Fato contábil novo ausente: ' + id);
  assert(entry.articleLinks.some(a => a.articleId === 'art-85b3a61ad09e44c1'), 'Fato contábil sem nota canônica: ' + id);
  assert(match(entry.term).some(t => t.id === id), 'Busca não encontra fato contábil: ' + id);
}
assert(match('permutativo').some(t => t.id === 'glo-fato-permutativo'));
assert(match('fatos modificativos').some(t => t.id === 'glo-fato-modificativo'));
assert(match('fato composto').some(t => t.id === 'glo-fato-misto'));
const editorialBacklog = JSON.parse(fs.readFileSync(path.join(root, 'data/glossario/backlog-cgu-2026.json'), 'utf8'));
const pcasp = editorialBacklog.terms.find(t => t.id === 'glo-plano-de-contas-aplicado-ao-setor-publico-pcasp');
assert(pcasp && pcasp.status === 'planned', 'Backlog deve preservar a proposta original do PCASP');
const pcaspPublished = published.terms.find(t => t.id === pcasp.id);
assert(pcaspPublished?.status === 'reviewed', 'PCASP deve ser publicado somente após revisão');
assert(pcaspPublished.aliases.includes('PCASP'), 'Sigla PCASP deve ser pesquisável');
assert(/três naturezas/.test(pcaspPublished.contrast) && /classes 1 a 4/.test(pcaspPublished.contrast) &&
  /classes 5 e 6/.test(pcaspPublished.contrast) && /7 e 8/.test(pcaspPublished.contrast),
  'PCASP deve explicar as três naturezas e as oito classes');
assert(/quarta natureza/.test(pcaspPublished.contrast) && /classes 5 e 6/.test(pcaspPublished.cebraspeTrap),
  'PCASP deve cobrir as armadilhas de natureza e de classes');
assert(match('PCASP').some(t => t.id === pcasp.id), 'Busca deve encontrar PCASP pela sigla');
const reviewPlan = fs.readFileSync(path.join(root, '1 - Planejamento/Glossario CGU 2026 - Arquitetura e backlog de 200 termos.md'), 'utf8');
assert(reviewPlan.includes('Plano de revisão de linguagem de todo o glossário') &&
    reviewPlan.includes('Última etapa do roadmap: PCASP'), 'Plano de simplificação integral e PCASP devem ficar documentados');
for (const [id, conceptPattern] of [
  ['glo-regime-de-competencia', /dinheiro.{0,45}(?:depois|mais tarde)/],
  ['glo-risco-inerente', /antes de considerar.{0,30}controles/],
  ['glo-regra-de-ouro', /operações de crédito.{0,85}despesas de capital/]
]) {
  assert(conceptPattern.test(published.terms.find(t => t.id === id)?.definition || ''),
    'Definição perdeu a distinção conceitual exigida: ' + id);
}

assert(match('programacao fisica').some(t => t.id === 'glo-programacao-fisica-cumprida'));
const siglasEsperadas = [
  ['BO', 'glo-balanco-orcamentario'],
  ['BF', 'glo-balanco-financeiro'],
  ['BP', 'glo-balanco-patrimonial'],
  ['VPA', 'glo-variacao-patrimonial-aumentativa'],
  ['VPD', 'glo-variacao-patrimonial-diminutiva'],
  ['PL', 'glo-patrimonio-liquido'],
  ['DVP', 'glo-demonstracao-das-variacoes-patrimoniais'],
  ['DFC', 'glo-demonstracao-dos-fluxos-de-caixa'],
  ['PPA', 'glo-ppa'],
  ['LDO', 'glo-ldo'],
  ['LOA', 'glo-loa'],
  ['RPP', 'glo-restos-a-pagar-processados'],
  ['RPNP', 'glo-restos-a-pagar-nao-processados'],
  ['DEA', 'glo-despesas-de-exercicios-anteriores'],
  ['PAINT', 'glo-paint'],
  ['RAINT', 'glo-raint'],
  ['PCASP', 'glo-plano-de-contas-aplicado-ao-setor-publico-pcasp'],
  ['AMF', 'glo-anexo-de-metas-fiscais'],
  ['ARF', 'glo-anexo-de-riscos-fiscais'],
  ['ARO', 'glo-antecipacao-de-receita-orcamentaria-aro'],
  ['DOCC', 'glo-despesa-obrigatoria-de-carater-continuado'],
  ['GND', 'glo-grupo-de-natureza-da-despesa-gnd'],
  ['RCL', 'glo-receita-corrente-liquida-rcl'],
  ['RGF', 'glo-rgf-relatorio-de-gestao-fiscal'],
  ['RREO', 'glo-rreo-relatorio-resumido-da-execucao-orcamentaria'],
  ['SIC', 'glo-sistema-de-informacao-de-custos-sic'],
  ['UO', 'glo-unidade-orcamentaria'],
  ['NE', 'glo-nota-de-empenho'],
  ['OP', 'glo-ordem-de-pagamento'],
  ['AUDIN', 'glo-auditoria-interna-audin'],
  ['UAIG', 'glo-unidade-de-auditoria-interna-governamental-uaig'],
  ['MOT', 'glo-manual-de-orientacoes-tecnicas-mot'],
  ['CASP', 'glo-contabilidade-aplicada-ao-setor-publico-casp'],
  ['MCASP', 'glo-manual-de-contabilidade-aplicada-ao-setor-publico-mcasp'],
  ['LRF', 'glo-lei-de-responsabilidade-fiscal-lrf'],
  ['SIAFI', 'glo-sistema-integrado-administracao-financeira-governo-federal-siafi'],
  ['MTO', 'glo-manual-tecnico-orcamento-mto'],
  ['CTN', 'glo-codigo-tributario-nacional-ctn'],
  ['SCI', 'glo-sistema-controle-interno-sci'],
  ['NBC TSP', 'glo-normas-brasileiras-contabilidade-setor-publico-nbc-tsp']
];
for (const [sigla, id] of siglasEsperadas) {
  const entry = published.terms.find(term => term.id === id);
  assert(entry && (entry.term === sigla || entry.aliases.includes(sigla) ||
    new RegExp('(^|\\W)' + sigla + '($|\\W)').test(entry.term)),
    'Sigla ausente no verbete correspondente: ' + sigla);
  assert.equal(match(sigla)[0]?.id, id, 'Busca deve priorizar a sigla: ' + sigla);
}
assert(glossaryUI.includes('Siglas e nomes equivalentes:'),
  'Detalhe do glossário deve mostrar siglas e nomes equivalentes');
// A consulta deve tolerar flexão nominal, acentos, plurais e várias palavras.
const primarios = [
  'glo-receita-primaria',
  'glo-despesa-primaria',
  'glo-resultado-primario',
  'glo-identificador-de-resultado-primario-da-despesa'
];
for (const query of ['primário', 'primaria', 'PRIMARIOS', 'primárias', 'primario']) {
  const encontrados = match(query);
  for (const id of primarios) {
    assert(encontrados.some(item => item.id === id), 'Variação '+query+' não encontra '+id);
  }
  assert.equal(new Set(encontrados.map(t => t.id)).size, encontrados.length, 'Consulta duplicou verbetes');
}
for (const query of ['financeiro', 'financeira', 'financeiros', 'financeiras']) {
  for (const id of ['glo-receita-financeira', 'glo-despesa-financeira', 'glo-superavit-financeiro']) {
    assert(match(query).some(item => item.id === id), query+' deixou de localizar '+id);
  }
}
for (const [query, id] of [
  ['acoes','glo-acao-orcamentaria'],
  ['ações','glo-acao-orcamentaria'],
  ['fiscais','glo-meta-fiscal'],
  ['liquidos','glo-receita-corrente-liquida-rcl'],
  ['receitas primarias','glo-receita-primaria'],
  ['RECEITA PRIMÁRIO','glo-receita-primaria'],
  ['orcamentarias','glo-acao-orcamentaria']
]) assert(match(query).some(t => t.id === id), 'Busca com flexão ausente: '+query);
assert.equal(match('receita primária')[0].id, 'glo-receita-primaria', 'Correspondência exata deve aparecer primeiro');
assert.equal(match('primário', 'P3', 'orcamento-publico').some(t => t.id === 'glo-receita-primaria'), true);
assert.equal(match('primário', 'P3', 'contabilidade-publica').some(t => t.id === 'glo-receita-primaria'), false);
assert(match('empenho liquidacao').some(t => t.id === 'glo-empenho'), 'Busca com termos em campos diferentes deve funcionar');
assert(match('PAINT')[0].id === 'glo-paint', 'Siglas exatas precisam preceder correspondências no texto');
assert(match('sem termo impossível').length === 0, 'Consultas inexistentes não devem receber correspondências arbitrárias');
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
assert(match('', '', 'orcamento-publico').length >= 140);
const idsOrcamento = published.terms.filter(t=>t.subjectIds.includes('orcamento-publico')).map(t=>t.id);
assert.equal(new Set(idsOrcamento).size, idsOrcamento.length, 'IDs de orçamento duplicados');
for(const [q,id] of [['GND','glo-grupo-de-natureza-da-despesa-gnd'],['empenho global','glo-empenho-global'],['superavit financeiro','glo-superavit-financeiro'],['RREO','glo-rreo-relatorio-resumido-da-execucao-orcamentaria'],['AMF','glo-anexo-de-metas-fiscais'],['suprimento de fundos','glo-suprimento-de-fundos']]) assert(match(q).some(t=>t.id===id),'Termo não encontrado: '+q);
assert(fs.existsSync(path.join(root,'data/glossario/termos/orcamento-publico-complementos.json')));
assert(fs.existsSync(path.join(root,'data/glossario/termos/orcamento-publico-empenho.json')),'Lote novo de empenho ausente');
const empenho = published.terms.find(t => t.id === 'glo-empenho');
assert(empenho && empenho.definition.includes('pendente ou não de implemento de condição'),'Empenho: redação legal do art. 58 foi alterada');
assert(empenho.articleLinks.some(a => a.articleId === 'art-67167e9c18284c4c'));
for (const [query, id] of [
 ['empenho prévio','glo-empenho-previo'],
 ['reforço de empenho','glo-reforco-de-empenho'],
 ['anulação de empenho','glo-anulacao-de-empenho'],
 ['dispensa de emissão da nota','glo-dispensa-de-emissao-da-nota-de-empenho'],
 ['limite de empenho','glo-limite-de-empenho'],
 ['crédito empenhado em liquidação','glo-credito-empenhado-em-liquidacao'],
 ['crédito empenhado liquidado a pagar','glo-credito-empenhado-liquidado-a-pagar'],
 ['ateste de recebimento','glo-ateste-de-recebimento'],
 ['recebimento definitivo','glo-recebimento-definitivo-do-objeto'],
 ['inscrição em restos a pagar','glo-inscricao-em-restos-a-pagar'],
 ['cancelamento de restos a pagar','glo-cancelamento-de-restos-a-pagar'],
 ['pagamento de restos a pagar','glo-pagamento-de-restos-a-pagar'],
 ['disponibilidade de caixa','glo-disponibilidade-de-caixa']
]) assert(match(query).some(t => t.id === id),'Verbetes de empenho: falta '+query);
const notaEmpenho = fs.readFileSync(path.join(root,'3 - Materias/Orcamento Publico/08 - despesas publicas e estagios.md'),'utf8');
assert(notaEmpenho.includes('**pendente ou não de implemento de condição**'),'Artigo canônico deve preservar o alcance literal do art. 58');
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
// Revisão editorial de linguagem: definições curtas, com contraste e exemplo próprio.
// Os testes mecânicos preservam limites e conceitos essenciais; a compreensão
// final ainda exige leitura humana, conforme o roteiro editorial.
assert(published.publishedCount >= 213, 'Glossário deve manter o novo verbete e todos os anteriores');
assert(published.terms.every(t => t.definition.length <= 320),
  'Definições devem ser curtas; detalhes técnicos ficam em contraste, exemplo e artigo');
for(const [id, fragments] of [
  ['glo-paint',['Plano Anual de Auditoria Interna','trabalhos']],
  ['glo-modelo-das-tres-linhas',['primeira linha','segunda','terceira']],
  ['glo-balanco-patrimonial',['Relatório','ativos','passivos']],
  ['glo-patrimonio-liquido',['Diferença','ativos','passivos']],
  ['glo-receita-primaria',['Entrada','resultado primário']],
  ['glo-grupo-de-natureza-da-despesa-gnd',['seis grupos','amortização']],
  ['glo-empenho',['pendente ou não de implemento de condição']],
  ['glo-credito-extraordinario',['imprevisível','urgente']],
  ['glo-superavit-financeiro',['ano anterior']],
  ['glo-fonte-destinacao-de-recursos',['regras','receita']],
  ['glo-teste-de-controles',['Exame','funcionou']],
  ['glo-despesa-primaria',['resultado primário']]
]) {
  const term = published.terms.find(t => t.id === id);
  assert(term, 'Termo de revisão ausente: '+id);
  for(const part of fragments) assert(term.definition.includes(part),
    'Simplificação alterou a distinção central de '+id+': '+part);
}
const plannedText = fs.readFileSync(path.join(root,
  '1 - Planejamento/Glossario CGU 2026 - Arquitetura e backlog de 200 termos.md'), 'utf8');
assert(plannedText.includes('**202/202 verbetes anteriores**') &&
       plannedText.includes('**166 definições ou contrastes**') &&
       plannedText.includes('Última etapa do roadmap: PCASP'),
       'Plano deve registrar revisão de todas as matérias e a etapa final do PCASP');
console.log('SUCESSO: '+published.publishedCount+' verbetes, distinção financeiro/patrimonial, PCASP, links e glossário testados.');
