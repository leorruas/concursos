export class EditalView {
  static render(store) {
    const concurso = store.getConcursoAtivo();
    const edital = store.editalAtual;

    const disciplinas = [...new Set(edital.map(i => i.disciplina))];
    const modulos = [...new Set(edital.map(i => i.modulo))];

    return `
      <div style="margin-bottom: var(--space-md); display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-sm);">
        <div>
          <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">Edital Verticalizado — ${concurso.nome}</h1>
          <p style="color: var(--color-text-muted); font-size: 13px;">Acompanhamento de cobertura e domínio por disciplina oficial da banca ${concurso.banca}.</p>
        </div>
        <div style="font-size: 12px; color: var(--color-text-muted);">
          Total: <strong>${edital.length}</strong> itens catalogados
        </div>
      </div>

      <div class="filter-bar">
        <input type="text" id="edital-search" class="input-search" placeholder="Pesquisar por assunto, código ou palavra-chave..." />
        <select id="filter-disciplina" class="select-filter">
          <option value="">Todas as disciplinas</option>
          ${disciplinas.map(d => `<option value="${d}">${d}</option>`).join('')}
        </select>
        <select id="filter-dominio" class="select-filter">
          <option value="">Todos os domínios</option>
          <option value="consolidado">Consolidado</option>
          <option value="instavel">Instável</option>
          <option value="nao_estudado">Não estudado</option>
        </select>
        <select id="filter-prioridade" class="select-filter">
          <option value="">Todas as prioridades</option>
          <option value="critica">Crítica</option>
          <option value="alta">Alta</option>
          <option value="media">Média</option>
        </select>
      </div>

      <div class="table-container">
        <table id="edital-table">
          <thead>
            <tr>
              <th style="width: 80px;">Código</th>
              <th style="width: 160px;">Disciplina</th>
              <th>Descrição do Item de Edital</th>
              <th style="width: 140px;">Matéria Canônica</th>
              <th style="width: 90px;">Prioridade</th>
              <th style="width: 110px;">Domínio</th>
            </tr>
          </thead>
          <tbody>
            ${edital.map(item => {
              const mat = store.getMateria(item.materiaIds[0]);
              return `
                <tr data-disciplina="${item.disciplina}" data-dominio="${item.dominio}" data-prioridade="${item.prioridade}" data-text="${(item.codigo + ' ' + item.disciplina + ' ' + item.descricao).toLowerCase()}">
                  <td style="font-family: var(--font-mono); font-weight: 600; font-size: 12px;">${item.codigo}</td>
                  <td><span style="font-size: 12px; color: var(--color-text-muted);">${item.disciplina}</span></td>
                  <td><strong>${item.descricao}</strong></td>
                  <td>
                    ${mat ? `<a href="#/materia/${mat.slug}" style="font-size: 12px;">${mat.nome}</a>` : '<span style="color: var(--color-text-muted); font-size: 11px;">Não vinculado</span>'}
                  </td>
                  <td><span class="badge badge-${item.prioridade}">[${item.prioridade}]</span></td>
                  <td>
                    <span class="badge badge-${item.dominio}">[${item.dominio}]</span>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  static attachEvents() {
    const searchInput = document.getElementById('edital-search');
    const filterDisc = document.getElementById('filter-disciplina');
    const filterDom = document.getElementById('filter-dominio');
    const filterPrio = document.getElementById('filter-prioridade');
    const rows = document.querySelectorAll('#edital-table tbody tr');

    function applyFilter() {
      const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const disc = filterDisc ? filterDisc.value : '';
      const dom = filterDom ? filterDom.value : '';
      const prio = filterPrio ? filterPrio.value : '';

      rows.forEach(tr => {
        const textMatch = !q || tr.dataset.text.includes(q);
        const discMatch = !disc || tr.dataset.disciplina === disc;
        const domMatch = !dom || tr.dataset.dominio === dom;
        const prioMatch = !prio || tr.dataset.prioridade === prio;

        tr.style.display = (textMatch && discMatch && domMatch && prioMatch) ? '' : 'none';
      });
    }

    if (searchInput) searchInput.addEventListener('input', applyFilter);
    if (filterDisc) filterDisc.addEventListener('change', applyFilter);
    if (filterDom) filterDom.addEventListener('change', applyFilter);
    if (filterPrio) filterPrio.addEventListener('change', applyFilter);
  }
}
