#!/usr/bin/env node

/**
 * Política canônica de destino pedagógico para questões ingeridas.
 *
 * Complementa scripts/ingest-vault.js sem alterar o motor principal.
 * A governança textual vive em:
 * 1 - Planejamento/Regras de ingestao de questoes.md
 */

export const DESTINOS_QUESTAO = Object.freeze({
  METRICA: 'metrica_apenas',
  TEORIA: 'enriquecimento_teorico',
  COMENTADA: 'questao_comentada_candidata',
  RECORRENTE: 'erro_recorrente',
  NOVA_NOTA: 'nova_nota'
});

/**
 * @param {Object} entrada
 * @param {'K'|'C'|'I'|'D'|null} entrada.taxonomia
 * @param {'acerto'|'erro'} entrada.resultado
 * @param {boolean} [entrada.valorCognitivo=false]
 * @param {boolean} [entrada.mecanismoRecorrente=false]
 * @param {boolean} [entrada.conteudoAusente=false]
 * @param {boolean} [entrada.distratorForte=false]
 * @returns {{destinos: string[], motivo: string}}
 */
export function classificarDestinoQuestao({
  taxonomia = null,
  resultado = 'acerto',
  valorCognitivo = false,
  mecanismoRecorrente = false,
  conteudoAusente = false,
  distratorForte = false
} = {}) {
  const destinos = new Set([DESTINOS_QUESTAO.METRICA]);
  const motivos = [];

  if (conteudoAusente) {
    destinos.add(DESTINOS_QUESTAO.NOVA_NOTA);
    destinos.add(DESTINOS_QUESTAO.TEORIA);
    motivos.push('conteúdo ainda não possui nota canônica adequada');
  }

  if (resultado === 'erro') {
    if (taxonomia === 'K') {
      destinos.add(DESTINOS_QUESTAO.TEORIA);
      motivos.push('erro de conhecimento exige recuperar ou criar teoria');
      if (valorCognitivo || distratorForte) destinos.add(DESTINOS_QUESTAO.COMENTADA);
    }

    if (taxonomia === 'C') {
      destinos.add(DESTINOS_QUESTAO.TEORIA);
      destinos.add(DESTINOS_QUESTAO.COMENTADA);
      motivos.push('confusão conceitual indica fronteira útil para decisão em prova');
    }

    if (taxonomia === 'I') {
      motivos.push('erro de interpretação permanece no desempenho por padrão');
      if (mecanismoRecorrente || valorCognitivo) {
        destinos.add(DESTINOS_QUESTAO.TEORIA);
        destinos.add(DESTINOS_QUESTAO.COMENTADA);
        motivos.push('padrão interpretativo recorrente ou recuperável');
      }
    }

    if (taxonomia === 'D') {
      motivos.push('distração permanece no desempenho por padrão');
      if (mecanismoRecorrente) {
        destinos.add(DESTINOS_QUESTAO.RECORRENTE);
        destinos.add(DESTINOS_QUESTAO.TEORIA);
        motivos.push('lapso repetido justifica heurística recuperável');
      }
    }
  }

  if (resultado === 'acerto' && (valorCognitivo || distratorForte)) {
    destinos.add(DESTINOS_QUESTAO.COMENTADA);
    motivos.push('acerto com alto valor cognitivo ou distrator forte');
  }

  if (mecanismoRecorrente) {
    destinos.add(DESTINOS_QUESTAO.RECORRENTE);
    motivos.push('mecanismo já observado mais de uma vez');
  }

  return {
    destinos: Array.from(destinos),
    motivo: motivos.length > 0 ? motivos.join('; ') : 'questão sem ganho teórico adicional'
  };
}

// CLI simples para teste manual:
// node scripts/question-ingestion-policy.js '{"taxonomia":"C","resultado":"erro"}'
if (process.argv[1] && process.argv[1].endsWith('question-ingestion-policy.js') && process.argv[2]) {
  try {
    const entrada = JSON.parse(process.argv[2]);
    process.stdout.write(`${JSON.stringify(classificarDestinoQuestao(entrada), null, 2)}\n`);
  } catch (erro) {
    console.error(`Entrada JSON inválida: ${erro.message}`);
    process.exitCode = 1;
  }
}
