export class ErrosView {
  static render(store) {
    const erros = store.erros;

    return `
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">Caderno Clínico de Erros</h1>
        <p style="color: var(--color-text-muted); font-size: 13px;">
          Catalogação mandatória baseada na taxonomia [K, C, I, D] para prevenção de falhas reincidentes.
        </p>
      </div>

      <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: var(--space-lg);">
        <div class="card" style="border-left: 3px solid var(--color-danger);">
          <div class="card-title">[K] Conhecimento</div>
          <div class="stat-value">${erros.filter(e => e.tipoErro === 'K').length}</div>
          <div class="stat-meta">Lacuna factual ou teórica.</div>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-warning);">
          <div class="card-title">[C] Confusão Conceitual</div>
          <div class="stat-value">${erros.filter(e => e.tipoErro === 'C').length}</div>
          <div class="stat-meta">Fronteira borrada / inversão.</div>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-purple);">
          <div class="card-title">[I] Interpretação</div>
          <div class="stat-value">${erros.filter(e => e.tipoErro === 'I').length}</div>
          <div class="stat-meta">Extrapolação de premissas.</div>
        </div>
        <div class="card" style="border-left: 3px solid var(--color-accent);">
          <div class="card-title">[D] Distração / Pressa</div>
          <div class="stat-value">${erros.filter(e => e.tipoErro === 'D').length}</div>
          <div class="stat-meta">Lapso de leitura / cálculo.</div>
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 90px;">Data</th>
              <th style="width: 80px;">Tipo</th>
              <th style="width: 160px;">Matéria Canônica</th>
              <th>Diagnóstico e Causa Raiz Clínica</th>
              <th>Ação de Estudo / Prescrição</th>
              <th style="width: 100px;">Ação</th>
            </tr>
          </thead>
          <tbody>
            ${erros.map(err => {
              const mat = store.getMateria(err.materiaId);
              return `
                <tr>
                  <td style="font-family: var(--font-mono); font-size: 12px; color: var(--color-text-muted);">${err.dataRegistro}</td>
                  <td>
                    <span class="badge badge-erro-${err.tipoErro.toLowerCase()}">[${err.tipoErro}]</span>
                  </td>
                  <td>
                    ${mat ? `<a href="#/materia/${mat.slug}"><strong>${mat.nome}</strong></a>` : 'Não vinculado'}
                  </td>
                  <td>
                    <div style="font-size: 13px;">${err.observacao}</div>
                    <div style="font-size: 11px; color: var(--color-text-muted); margin-top: 2px;">Resposta marcada: <code>${err.respostaDada}</code></div>
                  </td>
                  <td style="font-size: 12px; color: var(--color-text-muted);">
                    ${err.acaoEstudo}
                  </td>
                  <td>
                    ${mat ? `<a href="#/materia/${mat.slug}" class="btn-primary" style="padding: 3px 8px; font-size: 11px;">Revisar nota</a>` : '-'}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}
