import fs from 'node:fs';
import path from 'node:path';

const normalizar = (valor) => String(valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
function verificar(condicao, mensagem) {
  if (!condicao) throw new Error('Glossário: ' + mensagem);
}
const listaValida = (valor) => Array.isArray(valor) && valor.length > 0 && valor.every(x => typeof x === 'string' && x.trim().length > 0);

export function buildGlossary(rootDir, manifest, catalog, contests) {
  const dir = path.join(rootDir, 'data/glossario/termos');
  const backlog = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/glossario/backlog-cgu-2026.json'), 'utf8'));
  const backlogCamara = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/glossario/backlog-camara-2026.json'), 'utf8'));
  verificar(backlog.terms.length >= 200, 'backlog inicial deve preservar pelo menos 200 candidatos');
  verificar(backlogCamara.terms.length >= 20, 'glossário da Câmara exige pelo menos 20 conceitos específicos revisados');
  const todosPlanejados = [...backlog.terms, ...backlogCamara.terms];
  const planned = new Map(todosPlanejados.map(x => [x.id, x]));
  verificar(planned.size === todosPlanejados.length, 'IDs duplicados nos backlogs');
  const articles = new Map(manifest.map(x => [x.articleId, x]));
  const knownContests = new Set(contests.map(x => x.id));
  const subjectsByContest = new Map(catalog.contests.map(c => [c.concursoId, new Map(c.subjects.map(s => [s.subjectId, s.rotulo || s.categoria]))]));
  const camaraSubjects = catalog.contests.find(c => c.concursoId === 'camara-2026')?.subjects || [];
  const artigosCamaraPorMateria = new Map(camaraSubjects.map(s =>
    [s.subjectId, new Set([s.hubArticleId, ...(s.articleIds || [])].filter(Boolean))]));
  const used = new Set();
  const aliases = new Map();
  const terms = [];
  verificar(fs.existsSync(dir), 'pasta de definições não encontrada');
  for (const file of fs.readdirSync(dir).filter(x => x.endsWith('.json')).sort()) {
    const source = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    verificar(source.schemaVersion === 1 && Array.isArray(source.entries), 'formato inválido em ' + file);
    for (const entry of source.entries) {
      verificar(entry.status === 'reviewed', 'entrada sem revisão: ' + entry.id);
      verificar(/^glo-[a-z0-9-]+$/.test(entry.id), 'ID inválido: ' + entry.id);
      verificar(!used.has(entry.id), 'ID duplicado: ' + entry.id);
      used.add(entry.id);
      verificar(planned.has(entry.id) && planned.get(entry.id).term === entry.term, 'termo fora do backlog: ' + entry.id);
      for (const key of ['definition', 'contrast', 'cebraspeTrap', 'example']) {
        verificar(typeof entry[key] === 'string' && entry[key].trim().length >= 30, 'campo ' + key + ' insuficiente: ' + entry.id);
      }
      verificar(Array.isArray(entry.aliases) && entry.aliases.every(x => typeof x === 'string'), 'aliases inválidos');
      verificar(listaValida(entry.subjectIds) && listaValida(entry.contestIds) && listaValida(entry.articleIds), 'vínculos ausentes: ' + entry.id);
      verificar(entry.subjectIds.includes(source.subjectId), 'matéria de arquivo divergente: ' + entry.id);
      for (const contest of entry.contestIds) {
        verificar(knownContests.has(contest), 'concurso inexistente: ' + contest);
        verificar(entry.subjectIds.some(s => subjectsByContest.get(contest)?.has(s)), 'matéria fora do concurso: ' + entry.id);
      }
      const isCamara = planned.get(entry.id).contestId === 'camara-2026';
      verificar(entry.contestIds.includes(isCamara ? 'camara-2026' : 'cgu-2026'),
        'concurso principal incompatível com o backlog: ' + entry.id);
      // Reuso controlado: uma definição de Orçamento da CGU só entra na Câmara
      // se seu artigo também estiver no catálogo de Orçamento da Câmara.
      const eligibleCamara = !isCamara && entry.subjectIds.some(id =>
        id === 'orcamento-publico' && entry.articleIds.some(a => artigosCamaraPorMateria.get(id)?.has(a)));
      const contestIds = [...new Set([...entry.contestIds, ...(eligibleCamara ? ['camara-2026'] : [])])];
      verificar(Array.isArray(entry.sources) && entry.sources.length > 0 && entry.sources.every(s => typeof s.label === 'string' && s.label && /^https:\/\//.test(s.url)), 'fonte não verificável: ' + entry.id);
      for (const alias of [entry.term, ...entry.aliases]) {
        const key = normalizar(alias);
        verificar(key && (!aliases.has(key) || aliases.get(key) === entry.id), 'alias colide entre conceitos: ' + alias);
        aliases.set(key, entry.id);
      }
      const articleLinks = entry.articleIds.map(id => {
        const article = articles.get(id);
        verificar(article?.articleSlug && article?.sourcePath?.startsWith('3 - Materias/'), 'artigo canônico inexistente: ' + id);
        return { articleId: id, articleSlug: article.articleSlug, title: article.tituloExibicao || article.titulo,
          href: '#/artigo/' + encodeURIComponent(article.articleSlug) + '?concurso=' + (isCamara ? 'camara-2026' : 'cgu-2026') };
      });
      terms.push({ ...entry, contestIds, examBlock: planned.get(entry.id).examBlock, articleLinks });
    }
  }
  terms.sort((a, b) => a.term.localeCompare(b.term, 'pt-BR'));
  const subjectIds = new Set(terms.flatMap(x => x.subjectIds));
  const subjects = [...subjectIds].map(id => ({
    id,
    label: subjectsByContest.get('camara-2026')?.get(id) ||
      subjectsByContest.get('cgu-2026')?.get(id) || id
  })).sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));
  const porConcurso = ['camara-2026', 'cgu-2026'].map(id => {
    const ownPrefix = id === 'camara-2026' ? 'glo-camara-' : 'glo-';
    const isOwn = t => id === 'camara-2026' ? t.id.startsWith(ownPrefix) : !t.id.startsWith('glo-camara-');
    const published = terms.filter(t => t.contestIds.includes(id));
    const shared = published.filter(t => !isOwn(t));
    const ownPlannedCount = id === 'camara-2026' ? backlogCamara.terms.length : backlog.terms.length;
    return {
      id,
      plannedCount: ownPlannedCount + shared.length,
      ownPlannedCount,
      ownPublishedCount: published.length - shared.length,
      sharedCount: shared.length,
      publishedCount: published.length,
      subjects: subjects.filter(s => subjectsByContest.get(id)?.has(s.id))
    };
  });
  return {
    schemaVersion: 1, plannedCount: todosPlanejados.length, publishedCount: terms.length,
    contests: porConcurso, subjects, terms
  };
}
