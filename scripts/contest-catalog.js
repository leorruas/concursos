// Contrato puro do catálogo público. Não lê sessões ou contextos pessoais.
export function validarCatalogoMaterias(catalogo, manifesto, concursos) {
  const falhar = mensagem => { throw new Error('Catálogo de matérias: ' + mensagem); };
  if (catalogo?.schemaVersion !== 1 || !Array.isArray(catalogo.contests)) falhar('schemaVersion/contests inválido');
  if (!Array.isArray(manifesto) || !Array.isArray(concursos)) falhar('fontes de validação ausentes');
  const idsConcursos = new Set(concursos.map(item => item.id));
  const caminhos = new Set(manifesto.map(item => item.sourcePath));
  const idsVistos = new Set();
  let totalMaterias = 0;
  let totalVinculos = 0;
  for (const bloco of catalogo.contests) {
    const id = bloco?.concursoId;
    if (!idsConcursos.has(id) || idsVistos.has(id)) falhar('concurso inválido ou repetido: ' + id);
    idsVistos.add(id);
    if (!Array.isArray(bloco.subjects) || !bloco.subjects.length) falhar('matérias ausentes em ' + id);
    const categorias = new Set();
    const subjectIds = new Set();
    const ordens = new Set();
    for (const materia of bloco.subjects) {
      const { subjectId, categoria, ordem, rotulo, itemEdital, hubSourcePath, articleSourcePaths } = materia;
      if (![subjectId, categoria, rotulo, itemEdital].every(v => typeof v === 'string' && v.trim())) falhar('metadados incompletos em ' + id);
      if (categorias.has(categoria) || subjectIds.has(subjectId)) falhar('matéria/categoria duplicada em ' + id + ': ' + categoria);
      categorias.add(categoria);
      subjectIds.add(subjectId);
      if (!Number.isInteger(ordem) || ordem < 1 || ordens.has(ordem)) falhar('ordem inválida em ' + id);
      ordens.add(ordem);
      if (typeof hubSourcePath !== 'string' || !hubSourcePath.startsWith('3 - Materias/' + categoria + '/') || !hubSourcePath.endsWith('.md') || !caminhos.has(hubSourcePath)) falhar('hub não público: ' + hubSourcePath);
      if (!Array.isArray(articleSourcePaths)) falhar('lista de artigos inválida para ' + subjectId);
      const vistos = new Set([hubSourcePath]);
      for (const nota of articleSourcePaths) {
        if (typeof nota !== 'string' || !nota.startsWith('3 - Materias/') || !nota.endsWith('.md') || !caminhos.has(nota) || vistos.has(nota)) falhar('artigo privado, inexistente ou duplicado: ' + nota);
        if (nota.endsWith('/Avancos.md')) falhar('Avancos.md não é artigo de programa: ' + nota);
        vistos.add(nota);
        totalVinculos += 1;
      }
      totalMaterias += 1;
    }
    for (let n = 1; n <= bloco.subjects.length; n += 1) {
      if (!ordens.has(n)) falhar('ordem não contínua para ' + id + ', faltando ' + n);
    }
  }
  if (idsVistos.size !== idsConcursos.size) falhar('concurso sem catálogo: ' + [...idsConcursos].filter(x => !idsVistos.has(x)).join(', '));
  return { concursos: idsVistos.size, materias: totalMaterias, vinculos: totalVinculos };
}
