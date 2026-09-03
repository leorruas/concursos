import { SrsService } from '../services/srsService.js';

export class DashboardView {
  static render(store) {
    const concurso = store.getConcursoAtivo();
    const agora = new Date();
    const dataProva = new Date(concurso.dataProva);
    const diffTime = dataProva - agora;
    const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Cálculos de cobertura
    const totalItens = store.editalAtual.length;
    const itensConcluidos = store.editalAtual.filter(i => i.status === 'concluido').length;
    const percCobertura = totalItens > 0 ? Math.round((itensConcluidos / totalItens) * 100) : 0;

    // Erros pendentes
    const errosConcurso = store.getErrosDoConcurso();
    const errosPendentes = errosConcurso.filter(e => e.status === 'pendente');

    // Fila recomendada
    const recomendacoes = SrsService.getRecomendacoesHoje(store);
    const recomendacaoTop = recomendacoes[0];

    return `
      <div class="countdown-banner">
        <div>
          <div class="countdown-title">${concurso.nome} — ${concurso.cargo}</div>
          <div class="countdown-detail">Banca examinadora: <strong>${concurso.banca}</strong> | Prova prevista: <strong>${dataProva.toLocaleDateString('pt-BR')}</strong></div>
        </div>
        <div style="text-align: right;">
          <div class="countdown-days">${diffDias > 0 ? diffDias : 0}</div>
          <div style="font-size: 11px; text-transform: uppercase; color: var(--color-text-muted); font-weight: 600;">Dias restantes</div>
        </div>
      </div>

      <div class="action-cta-card">
        <div>
          <div style="font-size: 11px; text-transform: uppercase; color: var(--color-accent); font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px;">
            Plano Estratégico de Hoje
          </div>
          <div style="font-size: 18px; font-weight: 700; color: var(--color-text-main); margin-bottom: 4px;">
            ${recomendacaoTop ? recomendacaoTop.titulo : 'Edital em dia!'}
          </div>
          <div style="font-size: 13px; color: var(--color-text-muted); max-width: 600px;">
            ${recomendacaoTop ? recomendacaoTop.descricao : 'Nenhuma pendência crítica ou erro pendente registrado.'}
          </div>
        </div>
        <div>
          <a href="#/hoje" class="btn-primary" style="padding: 10px 20px; font-size: 14px;">
            O que estudar hoje (${recomendacoes.length})
          </a>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Cobertura do Edital</span>
            <span class="badge badge-consolidado">${itensConcluidos}/${totalItens} itens</span>
          </div>
          <div class="stat-value">${percCobertura}%</div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${percCobertura}%;"></div>
          </div>
          <div class="stat-meta">Meta oficial de fechamento: 100% de cobertura.</div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">Régua de Pontuação</span>
            <span class="badge badge-regular">Peso 2,5 Específicas</span>
          </div>
          <div class="stat-value">${concurso.reguaPontuacao.metaPontuacao} <span style="font-size: 16px; color: var(--color-text-muted);">/ ${concurso.reguaPontuacao.pontuacaoMaxima} pts</span></div>
          <div class="stat-meta">Régua oficial de corte para classificação competitiva.</div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">Erros em Aberto</span>
            <span class="badge badge-erro-k">${errosPendentes.length} pendentes</span>
          </div>
          <div class="stat-value" style="color: ${errosPendentes.length > 0 ? 'var(--color-danger)' : 'var(--color-success)'};">${errosPendentes.length}</div>
          <div class="stat-meta">Mapeados via taxonomia clínica [K, C, I, D].</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-md);">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Erros Críticos Recentes</span>
            <a href="#/erros" style="font-size: 12px;">Ver caderno</a>
          </div>
          <div style="display: flex; flex-direction: column; gap: var(--space-sm); margin-top: var(--space-xs);">
            ${errosConcurso.slice(0, 3).map(err => {
              const mat = store.getMateria(err.materiaId);
              return `
                <div style="padding: 8px 10px; background: var(--color-surface-hover); border-radius: var(--radius-sm); border-left: 3px solid var(--color-warning);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <strong style="font-size: 13px;">${mat ? mat.nome : 'Matéria'}</strong>
                    <span class="badge badge-erro-${err.tipoErro.toLowerCase()}">[Erro ${err.tipoErro}]</span>
                  </div>
                  <div style="font-size: 12px; color: var(--color-text-muted);">${err.observacao}</div>
                </div>
              `;
            }).join('') || '<div style="color: var(--color-text-muted); font-size: 13px;">Nenhum erro registrado.</div>'}
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span class="card-title">Itens Instáveis no Edital</span>
            <a href="#/edital" style="font-size: 12px;">Ver edital completo</a>
          </div>
          <div style="display: flex; flex-direction: column; gap: var(--space-sm); margin-top: var(--space-xs);">
            ${store.editalAtual.filter(i => i.dominio === 'instavel').slice(0, 3).map(item => `
              <div style="padding: 8px 10px; background: var(--color-surface-hover); border-radius: var(--radius-sm); border-left: 3px solid var(--color-danger);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <strong style="font-size: 13px;">${item.codigo} • ${item.disciplina}</strong>
                  <span class="badge badge-instavel">[Instável]</span>
                </div>
                <div style="font-size: 12px; color: var(--color-text-muted);">${item.descricao}</div>
              </div>
            `).join('') || '<div style="color: var(--color-text-muted); font-size: 13px;">Todos os itens consolidados.</div>'}
          </div>
        </div>
      </div>
    `;
  }
}
