export class SrsService {
  static getRecomendacoesHoje(store) {
    const hoje = new Date().toISOString().split('T')[0];
    const concursoAtivo = store.getConcursoAtivo();
    const recomendacoes = [];

    // 1. Erros Clínicos Críticos Pendentes de Fixação
    const errosPendentes = store.erros.filter(e => {
      return e.status === 'pendente' && (!e.concursoId || e.concursoId === concursoAtivo.id);
    });

    for (const err of errosPendentes) {
      const mat = store.getMateria(err.materiaId);
      recomendacoes.push({
        tipo: 'erro_clinico',
        prioridadeScore: 100,
        titulo: `Fixação de Erro: [${err.tipoErro}] ${mat ? mat.nome : 'Matéria'}`,
        descricao: err.observacao,
        acao: err.acaoEstudo,
        materiaId: err.materiaId,
        materiaSlug: mat ? mat.slug : null,
        badge: `[Erro ${err.tipoErro}]`
      });
    }

    // 2. Revisões Espaçadas Agendadas
    const revisoesHoje = store.revisoes.filter(r => {
      return r.dataAgendada <= hoje && (!r.concursoId || r.concursoId === concursoAtivo.id);
    });

    for (const rev of revisoesHoje) {
      const mat = store.getMateria(rev.materiaId);
      recomendacoes.push({
        tipo: 'revisao_srs',
        prioridadeScore: 80,
        titulo: `Revisão Espaçada: ${mat ? mat.nome : 'Matéria'}`,
        descricao: `Fase ${rev.faseSRS} do ciclo de repetição espaçada.`,
        acao: 'Revisar notas e resolver bloco de 5 a 10 questões.',
        materiaId: rev.materiaId,
        materiaSlug: mat ? mat.slug : null,
        badge: '[Revisão Vencida]'
      });
    }

    // 3. Matérias do Edital com Domínio Instável e Alta Prioridade
    const itensInstaveis = store.editalAtual.filter(item => {
      return item.dominio === 'instavel' && (item.prioridade === 'critica' || item.prioridade === 'alta');
    });

    for (const item of itensInstaveis) {
      const matId = item.materiaIds[0];
      const mat = store.getMateria(matId);
      recomendacoes.push({
        tipo: 'edital_instavel',
        prioridadeScore: 60,
        titulo: `Alinhamento de Base: ${item.disciplina} (${item.codigo})`,
        descricao: item.descricao,
        acao: 'Sessão 30% teoria + 70% questões difíceis da banca.',
        materiaId: matId,
        materiaSlug: mat ? mat.slug : null,
        badge: '[Instável no Edital]'
      });
    }

    // Ordenar decrescente por score de prioridade
    return recomendacoes.sort((a, b) => b.prioridadeScore - a.prioridadeScore);
  }
}
