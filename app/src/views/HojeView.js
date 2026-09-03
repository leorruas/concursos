import { SrsService } from '../services/srsService.js';

export class HojeView {
  static render(store) {
    const concurso = store.getConcursoAtivo();
    const recomendacoes = SrsService.getRecomendacoesHoje(store);

    return `
      <div style="margin-bottom: var(--space-md);">
        <div style="font-size: 12px; color: var(--color-accent); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px;">
          Fila Inteligente • ${concurso.nome}
        </div>
        <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">O Que Estudar Hoje</h1>
        <p style="color: var(--color-text-muted); font-size: 13px;">
          Prescrição clínica priorizada: Erros recentes [K, C, I, D] -> Revisões espaçadas vencidas -> Tópicos instáveis do edital.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        ${recomendacoes.map((rec, idx) => `
          <div class="card" style="border-left: 4px solid ${rec.tipo === 'erro_clinico' ? 'var(--color-danger)' : rec.tipo === 'revisao_srs' ? 'var(--color-warning)' : 'var(--color-accent)'};">
            <div class="card-header">
              <div style="display: flex; gap: var(--space-xs); align-items: center;">
                <span class="badge badge-regular" style="font-family: var(--font-mono);">Prioridade #${idx + 1}</span>
                <span class="badge ${rec.tipo === 'erro_clinico' ? 'badge-erro-k' : rec.tipo === 'revisao_srs' ? 'badge-alta' : 'badge-instavel'}">${rec.badge}</span>
              </div>
              <div>
                ${rec.materiaSlug ? `<a href="#/materia/${rec.materiaSlug}" class="btn-primary" style="padding: 4px 10px; font-size: 11px;">Estudar Teoria</a>` : ''}
              </div>
            </div>

            <h3 style="font-size: 16px; font-weight: 700; color: var(--color-text-main); margin-bottom: 4px;">
              ${rec.titulo}
            </h3>

            <p style="font-size: 13px; color: var(--color-text-muted); margin-bottom: var(--space-sm);">
              ${rec.descricao}
            </p>

            <div style="padding: 8px 12px; background: var(--color-surface-hover); border-radius: var(--radius-sm); font-size: 12px;">
              <strong>Prescrição de Estudo:</strong> ${rec.acao}
            </div>
          </div>
        `).join('') || `
          <div class="card" style="text-align: center; padding: 40px;">
            <h3>Fila Zerada!</h3>
            <p style="color: var(--color-text-muted); margin-top: 8px;">Todos os erros críticos foram saneados e as revisões estão em dia.</p>
            <a href="#/questoes" class="btn-primary" style="margin-top: 16px;">Resolver Bateria de Manutenção</a>
          </div>
        `}
      </div>
    `;
  }
}
