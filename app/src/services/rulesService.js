/**
 * Motor de Regras de Negócio e Cálculos de Consistência
 * Sistema de Governança para Estudos Multi-Concurso
 */

export const STATUS_ITEM_EDITAL = {
  NAO_INICIADO: 'nao_iniciado',
  EM_ESTUDO: 'em_estudo',
  REVISADO: 'revisado',
  DOMINADO: 'dominado',
  PRECISA_REFORCO: 'precisa_reforco'
};

export const ROTULOS_STATUS_ITEM = {
  nao_iniciado: 'Não iniciado',
  em_estudo: 'Em estudo',
  revisado: 'Revisado',
  dominado: 'Dominado',
  precisa_reforco: 'Precisa de reforço'
};

export const TIPOS_ERRO = {
  K: { id: 'K', rotulo: 'Falta de conhecimento (lacuna teórica/factual)' },
  C: { id: 'C', rotulo: 'Confusão conceitual (fronteira borrada/inversão)' },
  I: { id: 'I', rotulo: 'Erro de interpretação (leitura de premissas)' },
  D: { id: 'D', rotulo: 'Distração / Pressa (lapso em delimitador)' },
  CALC: { id: 'CALC', rotulo: 'Erro de cálculo mental/aritmético' },
  LEG: { id: 'LEG', rotulo: 'Desconhecimento da legislação/texto de lei' }
};

export class RulesService {
  /**
   * Cálculo dos Três Indicadores Independentes de Cobertura
   * 1. Cobertura do Edital: Itens que possuem matérias canônicas vinculadas.
   * 2. Progresso de Estudo: Itens que saíram do estado 'não iniciado'.
   * 3. Domínio Real: Itens classificados estritamente como 'dominado'.
   */
  static calcularMetricasEdital(editalItens) {
    const totalItens = editalItens.length;
    if (totalItens === 0) {
      return {
        total: 0,
        coberturaMapeada: { qtd: 0, percentual: 0 },
        progressoEstudo: { qtd: 0, percentual: 0 },
        dominioValidado: { qtd: 0, percentual: 0 },
        naoMapeados: []
      };
    }

    const mapeados = editalItens.filter(i => Array.isArray(i.materiaIds) && i.materiaIds.length > 0);
    const estudados = editalItens.filter(i => 
      i.status === STATUS_ITEM_EDITAL.EM_ESTUDO ||
      i.status === STATUS_ITEM_EDITAL.REVISADO ||
      i.status === STATUS_ITEM_EDITAL.DOMINADO ||
      i.status === STATUS_ITEM_EDITAL.PRECISA_REFORCO
    );
    const dominados = editalItens.filter(i => i.status === STATUS_ITEM_EDITAL.DOMINADO);
    const naoMapeados = editalItens.filter(i => !Array.isArray(i.materiaIds) || i.materiaIds.length === 0);

    return {
      total: totalItens,
      coberturaMapeada: {
        qtd: mapeados.length,
        percentual: Math.round((mapeados.length / totalItens) * 100)
      },
      progressoEstudo: {
        qtd: estudados.length,
        percentual: Math.round((estudados.length / totalItens) * 100)
      },
      dominioValidado: {
        qtd: dominados.length,
        percentual: Math.round((dominados.length / totalItens) * 100)
      },
      naoMapeados
    };
  }

  /**
   * Fórmula Matemática Transparente de Prioridade Dinâmica (Score 0 a 100):
   *
   * Score = (PesoConcurso * FatorPeso)
   *       + (FatorUrgenciaPrazo)
   *       + (FatorDeficitDominio)
   *       + (FatorErrosRecorrentes)
   *       + (FatorAtrasoRevisao)
   *       + (AjusteManualUsuario)
   */
  static calcularScorePrioridade({
    pesoConcurso = 1.0,        // 1.0 a 2.5
    diasAteProva = 60,         // dias restantes
    statusItem = 'nao_iniciado', // status padronizado
    errosCount = 0,            // quantidade de erros na matéria
    temRevisaoAtrasada = false,
    recorrenciaBanca = 'media', // 'baixa', 'media', 'alta'
    ajusteManual = 0           // -20 a +20
  }) {
    // 1. Componente Peso do Concurso (0 a 25 pts)
    const ptsPeso = Math.min(25, (pesoConcurso / 2.5) * 25);

    // 2. Componente Proximidade da Prova (0 a 20 pts)
    let ptsPrazo = 0;
    if (diasAteProva <= 15) ptsPrazo = 20;
    else if (diasAteProva <= 45) ptsPrazo = 15;
    else if (diasAteProva <= 90) ptsPrazo = 10;
    else ptsPrazo = 5;

    // 3. Componente Nível de Domínio (0 a 25 pts)
    let ptsDominio = 0;
    switch (statusItem) {
      case STATUS_ITEM_EDITAL.PRECISA_REFORCO: ptsDominio = 25; break;
      case STATUS_ITEM_EDITAL.NAO_INICIADO: ptsDominio = 20; break;
      case STATUS_ITEM_EDITAL.EM_ESTUDO: ptsDominio = 15; break;
      case STATUS_ITEM_EDITAL.REVISADO: ptsDominio = 8; break;
      case STATUS_ITEM_EDITAL.DOMINADO: ptsDominio = 0; break;
      default: ptsDominio = 15;
    }

    // 4. Componente Frequência de Erros e Recorrência na Banca (0 a 20 pts)
    const ptsErros = Math.min(15, errosCount * 5);
    const ptsBanca = recorrenciaBanca === 'alta' ? 5 : recorrenciaBanca === 'media' ? 3 : 1;

    // 5. Componente Revisão Atrasada (0 a 10 pts)
    const ptsAtraso = temRevisaoAtrasada ? 10 : 0;

    // Soma ponderada limitada a [0, 100]
    let totalScore = ptsPeso + ptsPrazo + ptsDominio + ptsErros + ptsBanca + ptsAtraso + ajusteManual;
    return Math.max(0, Math.min(100, Math.round(totalScore)));
  }

  /**
   * Validação de Integridade de Dados antes de Salvar/Persistir
   */
  static validarIntegridade({ materias, concursos, editalItens, questoes, erros }) {
    const inconsistencias = [];
    const materiaIds = new Set(materias.map(m => m.id));
    const concursoIds = new Set(concursos.map(c => c.id));
    const questaoIds = new Set(questoes.map(q => q.id));

    // 1. Validar Matérias
    const slugs = new Set();
    for (const m of materias) {
      if (!m.id) inconsistencias.push({ tipo: 'erro', mensagem: `Matéria sem ID obrigatório.` });
      if (!m.slug) inconsistencias.push({ tipo: 'erro', mensagem: `Matéria ${m.id} sem slug.` });
      if (slugs.has(m.slug)) inconsistencias.push({ tipo: 'erro', mensagem: `Slug duplicado: ${m.slug}.` });
      slugs.add(m.slug);

      if (!m.notaMarkdown) {
        inconsistencias.push({ tipo: 'aviso', mensagem: `Matéria [${m.nome}] sem nota principal associada.` });
      }
    }

    // 2. Validar Concursos
    const concsNomes = new Set();
    let ativos = 0;
    for (const c of concursos) {
      if (!c.id || !c.banca || !c.cargo || !c.dataProva) {
        inconsistencias.push({ tipo: 'erro', mensagem: `Concurso ${c.id || 'sem ID'} incompleto.` });
      }
      if (concsNomes.has(c.nome)) {
        inconsistencias.push({ tipo: 'erro', mensagem: `Concurso cadastrado em duplicidade: ${c.nome}.` });
      }
      concsNomes.add(c.nome);
      if (c.status === 'ativo') ativos++;
    }

    if (ativos > 1) {
      inconsistencias.push({ tipo: 'aviso', mensagem: `Existe mais de um concurso com status 'ativo'.` });
    }

    // 3. Validar Itens de Edital
    for (const item of editalItens) {
      if (!item.concursoId || !concursoIds.has(item.concursoId)) {
        inconsistencias.push({ tipo: 'erro', mensagem: `Item ${item.codigo} aponta para concurso inexistente.` });
      }
      if (!Array.isArray(item.materiaIds) || item.materiaIds.length === 0) {
        inconsistencias.push({ tipo: 'aviso', mensagem: `Item de edital ${item.codigo} não está mapeado para matérias.` });
      } else {
        for (const mId of item.materiaIds) {
          if (!materiaIds.has(mId)) {
            inconsistencias.push({ tipo: 'erro', mensagem: `Item ${item.codigo} aponta para matéria inexistente [${mId}].` });
          }
        }
      }
    }

    // 4. Validar Questões e Erros
    for (const q of questoes) {
      for (const mId of q.materiaIds) {
        if (!materiaIds.has(mId)) {
          inconsistencias.push({ tipo: 'erro', mensagem: `Questão ${q.id} vinculada à matéria inexistente [${mId}].` });
        }
      }
    }

    for (const err of erros) {
      if (!questaoIds.has(err.questaoId)) {
        inconsistencias.push({ tipo: 'aviso', mensagem: `Erro ${err.id} aponta para questão não indexada.` });
      }
      if (!materiaIds.has(err.materiaId)) {
        inconsistencias.push({ tipo: 'erro', mensagem: `Erro ${err.id} vinculado à matéria inexistente [${err.materiaId}].` });
      }
    }

    return inconsistencias;
  }
}
