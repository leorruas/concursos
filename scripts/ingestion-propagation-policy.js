export function mapearPastaMateria(nomeDisc) {
  if (!nomeDisc) return null;
  const lower = String(nomeDisc).toLowerCase();
  if (lower.includes('lógic') || lower.includes('logic')) return 'Logica';
  if (lower.includes('portugu')) return 'Portugues';
  if (lower.includes('comunica')) return 'Comunicacao';
  if (lower.includes('ingl')) return 'Ingles';
  if (lower.includes('cálculo') || lower.includes('calculo')) return 'Calculo Mental';
  if (lower.includes('constitucional')) return 'Direito Constitucional';
  if (lower.includes('administrativo')) return 'Direito Administrativo';
  if (lower.includes('atualidades') || lower.includes('inteligência') || lower.includes('ia')) return 'Atualidades';
  if (lower.includes('informática') || lower.includes('informatica')) return 'Informatica';
  if (lower.includes('administração geral') || lower.includes('administracao geral')) return 'Administracao Geral';
  if (lower.includes('administração pública') || lower.includes('administracao publica')) return 'Administracao Publica';
  return null;
}

export function extrairDisciplinaDaEntrada(content) {
  const match = String(content || '').match(/(?:disciplina|matéria)\s*:\s*([^\r\n]+)/i);
  return match ? match[1].trim() : null;
}

export function destinosObrigatoriosIngestao({ classification, disciplina = null, hasErrors = false } = {}) {
  const required = new Set(['log.md']);

  if (classification === 'bateria_dirigida') {
    const pasta = mapearPastaMateria(disciplina);
    if (!pasta) {
      throw new Error(`Não foi possível mapear a disciplina da bateria para uma pasta canônica: ${disciplina || '(ausente)'}`);
    }
    required.add(`3 - Materias/${pasta}/Avancos.md`);
    required.add('00 - Desempenho/00 Avancos globais.md');
    required.add('00 - Desempenho/01 Log de saturacao diaria.md');
    required.add('4 - Projetos/dataprev-2026/Questoes e Simulados.md');
    if (hasErrors) {
      required.add('4 - Projetos/dataprev-2026/Log de erros.md');
      required.add('data/erros-recorrentes.json');
    }
  }

  if (classification === 'simulado') {
    required.add('00 - Desempenho/Simulados/00 - Catalogo de simulados.md');
    required.add('00 - Desempenho/00 Avancos globais.md');
    required.add('00 - Desempenho/01 Log de saturacao diaria.md');
    required.add('4 - Projetos/dataprev-2026/Questoes e Simulados.md');
    required.add('4 - Projetos/dataprev-2026/00 Dashboard.md');
    if (hasErrors) {
      required.add('4 - Projetos/dataprev-2026/Log de erros.md');
      required.add('data/erros-recorrentes.json');
    }
  }

  if (classification === 'teoria') {
    // A nota concreta é escolhida pelo agente com base no conteúdo, mas index.md
    // e o histórico precisam fazer parte da mesma transação.
    required.add('index.md');
  }

  return Array.from(required);
}

export function validarManifestoPropagacao(manifest, context) {
  const paths = new Set((manifest.operations || []).map((op) => String(op.path || '').replace(/\\/g, '/')));
  const required = destinosObrigatoriosIngestao(context);
  const missing = required.filter((p) => !paths.has(p));

  if (context.classification === 'teoria') {
    const hasTheoryNote = Array.from(paths).some((p) => p.startsWith('3 - Materias/') && p.endsWith('.md') && !p.endsWith('/Avancos.md'));
    if (!hasTheoryNote) missing.push('3 - Materias/<nota canônica>.md');
  }

  if (missing.length > 0) {
    throw new Error(`Change set de ingestão incompleto. Destinos obrigatórios ausentes: ${missing.join(', ')}`);
  }
  return required;
}
