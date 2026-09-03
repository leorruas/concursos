export class QuestoesView {
  static render(store) {
    const questoes = store.questoes;

    return `
      <div style="margin-bottom: var(--space-md); display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-sm);">
        <div>
          <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">Banco de Questões e Baterias</h1>
          <p style="color: var(--color-text-muted); font-size: 13px;">Itens calibrados no DNA da banca com gabarito fundamentado.</p>
        </div>
        <div style="font-size: 12px; color: var(--color-text-muted);">
          Total: <strong>${questoes.length}</strong> questões
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        ${questoes.map((q, idx) => {
          const mat = store.getMateria(q.materiaIds[0]);
          return `
            <div class="card" id="card-${q.id}">
              <div class="card-header">
                <div style="display: flex; gap: var(--space-xs); align-items: center;">
                  <span class="badge badge-regular" style="font-family: var(--font-mono);">#${idx + 1}</span>
                  <span class="badge badge-regular">${q.banca} • ${q.ano}</span>
                  <span style="font-size: 12px; color: var(--color-text-muted); font-weight: 600;">${q.disciplina || ''}</span>
                </div>
                <div>
                  ${mat ? `<a href="#/materia/${mat.slug}" style="font-size: 11px;">[Teoria: ${mat.nome}]</a>` : ''}
                </div>
              </div>

              <div style="font-size: 14px; margin-bottom: var(--space-md); line-height: 1.6;">
                ${q.enunciado}
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: var(--space-md);">
                ${q.alternativas.map(alt => `
                  <label style="display: flex; align-items: flex-start; gap: 10px; padding: 8px 12px; background: var(--color-surface-hover); border-radius: var(--radius-sm); cursor: pointer; font-size: 13px;">
                    <input type="radio" name="q-${q.id}" value="${alt.id}" style="margin-top: 3px;" />
                    <span><strong>${alt.id})</strong> ${alt.texto}</span>
                  </label>
                `).join('')}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn-primary btn-verificar" data-qid="${q.id}" data-correta="${q.respostaCorreta}" style="font-size: 12px; padding: 6px 14px;">
                  Conferir Gabarito
                </button>
                <div id="resultado-${q.id}" style="font-size: 13px; font-weight: 600;"></div>
              </div>

              <div id="gabarito-${q.id}" style="display: none; margin-top: var(--space-md); padding: var(--space-md); background: var(--color-bg); border-left: 3px solid var(--color-accent); border-radius: var(--radius-sm); font-size: 13px;">
                <div style="font-weight: 700; color: var(--color-accent); margin-bottom: 4px;">Gabarito Oficial: Alternativa ${q.respostaCorreta}</div>
                <div style="color: var(--color-text-muted); line-height: 1.5;">${q.explicacao}</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  static attachEvents() {
    document.querySelectorAll('.btn-verificar').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qid = btn.dataset.qid;
        const correta = btn.dataset.correta;
        const radioChecked = document.querySelector(`input[name="q-${qid}"]:checked`);
        const resultDiv = document.getElementById(`resultado-${qid}`);
        const gabaritoDiv = document.getElementById(`gabarito-${qid}`);

        if (!radioChecked) {
          resultDiv.innerHTML = '<span style="color: var(--color-warning);">Selecione uma alternativa antes de conferir.</span>';
          return;
        }

        const resposta = radioChecked.value;
        if (resposta === correta) {
          resultDiv.innerHTML = '<span style="color: var(--color-success);">[Acerto] Parabéns! Alternativa correta.</span>';
        } else {
          resultDiv.innerHTML = `<span style="color: var(--color-danger);">[Erro] Você marcou ${resposta}. Gabarito: ${correta}.</span>`;
        }

        gabaritoDiv.style.display = 'block';
      });
    });
  }
}
