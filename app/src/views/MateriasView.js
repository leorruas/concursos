export class MateriasView {
  static render(store) {
    const materias = store.materias;
    const areas = [...new Set(materias.map(m => m.area))];

    return `
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">Catálogo Permanente de Matérias</h1>
        <p style="color: var(--color-text-muted); font-size: 13px;">
          Base canônica de conhecimento. A matéria é permanente; os editais referenciam estes módulos transversais.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-md);">
        ${materias.map(m => {
          // Achar quais concursos referenciam essa matéria
          const editaisVinculados = store.editalAtual.filter(item => item.materiaIds.includes(m.id));
          
          return `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="card-header">
                  <span class="card-title">${m.area}</span>
                  <span class="badge badge-regular" style="font-size: 10px;">Custo RAM: ${m.custoCognitivo}</span>
                </div>
                <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 6px;">
                  <a href="#/materia/${m.slug}">${m.nome}</a>
                </h3>
                <p style="font-size: 12px; color: var(--color-text-muted); margin-bottom: var(--space-sm);">
                  ${m.resumo || 'Sem descrição cadastrada.'}
                </p>
                <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: var(--space-sm);">
                  ${m.tags.map(t => `<span style="font-size: 10px; background: var(--color-surface-hover); color: var(--color-text-muted); padding: 1px 5px; border-radius: 3px; font-family: var(--font-mono);">#${t}</span>`).join('')}
                </div>
              </div>

              <div style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-sm); margin-top: var(--space-sm); font-size: 11px; color: var(--color-text-muted); display: flex; justify-content: space-between; align-items: center;">
                <span>Vinculação no concurso ativo: <strong>${editaisVinculados.length} item(ns)</strong></span>
                <a href="#/materia/${m.slug}" class="btn-primary" style="padding: 4px 10px; font-size: 11px;">Estudar nota</a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}
