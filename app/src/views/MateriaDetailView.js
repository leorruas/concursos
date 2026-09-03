import { dataService } from '../services/dataService.js';

export class MateriaDetailView {
  static async render(store, slug) {
    const materia = store.materias.find(m => m.slug === slug);
    if (!materia) {
      return `
        <div class="card" style="text-align: center; padding: 40px;">
          <h2>Matéria não encontrada</h2>
          <p style="color: var(--color-text-muted); margin-top: 8px;">O slug <code>${slug}</code> não existe no catálogo canônico.</p>
          <a href="#/materias" class="btn-primary" style="margin-top: 16px;">Voltar ao catálogo</a>
        </div>
      `;
    }

    let markdownContent = '';
    try {
      markdownContent = await dataService.getNotaMarkdown(materia.notaMarkdown);
    } catch (e) {
      markdownContent = `> [!WARNING]\n> Arquivo de nota não encontrado em: \`${materia.notaMarkdown}\`.`;
    }

    // Processar Markdown usando marked global
    let htmlContent = '';
    if (window.marked) {
      // Limpar frontmatter YAML se houver
      const limpo = markdownContent.replace(/^---[\s\S]*?---\n/, '');
      htmlContent = window.marked.parse(limpo);
    } else {
      htmlContent = `<pre>${markdownContent}</pre>`;
    }

    // Questões associadas
    const questoesMat = store.questoes.filter(q => q.materiaIds.includes(materia.id));
    // Erros associados
    const errosMat = store.erros.filter(e => e.materiaId === materia.id);

    return `
      <div style="margin-bottom: var(--space-md); display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: var(--space-sm);">
        <div>
          <div style="font-size: 12px; color: var(--color-text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px;">
            ${materia.area} • Matéria Permanente
          </div>
          <h1 style="font-size: 22px; font-weight: 700; color: var(--color-text-main); margin-bottom: 6px;">
            ${materia.nome}
          </h1>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <span class="badge badge-regular">Custo Cognitivo: ${materia.custoCognitivo}</span>
            ${materia.tags.map(t => `<span class="badge badge-regular" style="font-size: 10px;">#${t}</span>`).join('')}
          </div>
        </div>

        <div>
          <a href="#/materias" style="font-size: 13px;">← Voltar ao catálogo</a>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: var(--space-lg); align-items: flex-start;">
        <!-- Painel Central com Teoria -->
        <div class="card" style="padding: var(--space-xl);">
          <div class="markdown-body">
            ${htmlContent}
          </div>
        </div>

        <!-- Painel Lateral com Rastreabilidade -->
        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          <div class="card">
            <div class="card-header">
              <span class="card-title">Métricas da Matéria</span>
            </div>
            <div style="font-size: 13px; display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--color-text-muted);">Questões no banco:</span>
                <strong>${questoesMat.length}</strong>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--color-text-muted);">Erros clínicos:</span>
                <strong style="color: ${errosMat.length > 0 ? 'var(--color-warning)' : 'var(--color-success)'};">${errosMat.length}</strong>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <span class="card-title">Erros Mapeados</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
              ${errosMat.map(err => `
                <div style="padding: 6px 8px; background: var(--color-surface-hover); border-radius: var(--radius-sm); font-size: 12px; border-left: 3px solid var(--color-warning);">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span class="badge badge-erro-${err.tipoErro.toLowerCase()}">[${err.tipoErro}] ${err.rotuloTipoErro}</span>
                    <span style="color: var(--color-text-muted); font-size: 10px;">${err.dataRegistro}</span>
                  </div>
                  <div style="color: var(--color-text-muted);">${err.observacao}</div>
                </div>
              `).join('') || '<div style="color: var(--color-text-muted); font-size: 12px;">Nenhum erro registrado neste tópico.</div>'}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
