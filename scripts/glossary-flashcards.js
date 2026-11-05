// Projeção pública de cartões a partir de definições já revisadas do glossário.
// Não altera data/flashcards.json nem os registros locais de revisão.
const normalizar = valor => String(valor || '')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function exigir(condicao, mensagem) {
  if (!condicao) throw new Error('Glossário → flashcards: ' + mensagem);
}

export function buildGlossaryFlashcards(glossary, collection, equivalences) {
  exigir(glossary?.schemaVersion === 1 && Array.isArray(glossary.terms), 'índice de glossário inválido');
  exigir(collection?.version === 1 && Array.isArray(collection.cards), 'coleção de flashcards inválida');
  exigir(equivalences?.schemaVersion === 1 && Array.isArray(equivalences.links), 'equivalências inválidas');

  const cardsById = new Map(collection.cards.map(card => [card.id, card]));
  exigir(cardsById.size === collection.cards.length, 'IDs duplicados na coleção existente');
  const terms = glossary.terms.filter(term => term.status === 'reviewed');
  const termsById = new Map(terms.map(term => [term.id, term]));
  exigir(termsById.size === terms.length, 'IDs duplicados no glossário');

  const explicit = new Map();
  for (const pair of equivalences.links) {
    exigir(typeof pair.glossaryId === 'string' && typeof pair.cardId === 'string', 'vínculo incompleto');
    exigir(!explicit.has(pair.glossaryId), 'termo mapeado mais de uma vez: ' + pair.glossaryId);
    const term = termsById.get(pair.glossaryId);
    const card = cardsById.get(pair.cardId);
    exigir(term && card, 'vínculo para termo ou cartão inexistente: ' + pair.glossaryId);
    exigir(term.contestIds.some(id => card.examIds.includes(id)), 'concurso incompatível: ' + term.id);
    exigir(term.subjectIds.some(id => card.subjectIds.includes(id)), 'matéria incompatível: ' + term.id);
    explicit.set(pair.glossaryId, pair.cardId);
  }

  const exact = new Map();
  for (const card of collection.cards.filter(card => card.status === 'validated')) {
    const key = normalizar(card.term);
    if (!exact.has(key)) exact.set(key, []);
    exact.get(key).push(card);
  }
  const names = new Map(collection.subjects.map(s => [s.id, s.title]));
  const generated = [], linked = [], outputIds = new Set(collection.cards.map(c => c.id));

  for (const term of terms) {
    exigir(Array.isArray(term.contestIds) && term.contestIds.length > 0, 'concurso ausente: ' + term.id);
    exigir(Array.isArray(term.subjectIds) && term.subjectIds.length > 0, 'matéria ausente: ' + term.id);
    exigir(Array.isArray(term.articleIds) && term.articleIds.length > 0, 'artigo ausente: ' + term.id);
    exigir(Array.isArray(term.sources) && term.sources.length > 0, 'fonte ausente: ' + term.id);

    let existing = explicit.get(term.id) || '';
    if (!existing) {
      const matches = (exact.get(normalizar(term.term)) || []).filter(card =>
        term.contestIds.some(id => card.examIds.includes(id)) &&
        term.subjectIds.some(id => card.subjectIds.includes(id)));
      exigir(matches.length <= 1, 'equivalência exata ambígua: ' + term.id);
      if (matches.length) existing = matches[0].id;
    }
    if (existing) {
      linked.push({ glossaryId: term.id, cardId: existing });
      continue;
    }

    const id = 'glossary-' + term.id;
    exigir(!outputIds.has(id), 'ID derivado colide com cartão existente: ' + id);
    outputIds.add(id);
    const source = term.sources[0];
    const card = {
      id, term: term.term, definition: term.definition,
      example: term.example,
      confusion: term.cebraspeTrap,
      topic: 'Glossário: ' + (names.get(term.subjectIds[0]) || term.subjectIds[0]),
      subjectIds: [...term.subjectIds],
      examIds: [...term.contestIds],
      editalRefs: [term.examBlock],
      note: { articleId: term.articleIds[0], section: '' },
      source: { title: source.label, url: source.url, locator: 'Glossário revisado: ' + term.term },
      glossaryId: term.id,
      contrast: { prompt: 'Qual a distinção conceitual importante sobre ' + term.term + '?', answer: term.contrast },
      status: 'validated',
      revision: 1,
      conceptIds: [term.id]
    };
    for (const key of ['term', 'definition', 'example', 'confusion', 'topic']) {
      exigir(typeof card[key] === 'string' && card[key].trim() && card[key].length <= 600,
        'campo inválido no cartão ' + id + ': ' + key);
    }
    exigir(card.contrast.prompt.length <= 600 && card.contrast.answer.length <= 600,
      'contraste excessivo: ' + id);
    generated.push(card);
  }

  exigir(linked.length + generated.length === terms.length, 'algum termo revisado não foi processado');
  return {
    schemaVersion: 1,
    reviewedCount: terms.length,
    linkedCount: linked.length,
    generatedCount: generated.length,
    links: linked,
    cards: generated
  };
}
