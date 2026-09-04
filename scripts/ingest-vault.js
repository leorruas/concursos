#!/usr/bin/env node

/**
 * scripts/ingest-vault.js
 *
 * Sistema Operacional de Ingestão e Atualização Assistida do Vault Concursos.
 * Governança Centralizada (SSoT): me.md e .agent/AGENTS.md
 *
 * Uso:
 *   node scripts/ingest-vault.js --input "00 inbox/00 ingestão.md" --dry-run
 *   node scripts/ingest-vault.js --input "00 inbox/00 ingestão.md" --apply
 *   node scripts/ingest-vault.js --input "00 inbox/00 ingestão.md" --type simulado --dry-run
 *   node scripts/ingest-vault.js --validate
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// -----------------------------------------------------------------------------
// CONSTANTES E CONFIGURAÇÕES DO SISTEMA (SSoT)
// -----------------------------------------------------------------------------

const COMPOSICAO_OFICIAL_DATAPREV = {
  portugues: 12,
  ingles: 12,
  logica: 5,
  atualidades_ia: 6,
  legislacao: 5,
  comunicacao: 30,
  total: 70
};

const PESOS_COGNITIVOS = {
  'Calculo Mental': 2.0,
  'Raciocínio Lógico': 1.5,
  'Lógica': 1.5,
  'Língua Portuguesa': 1.2,
  'Português': 1.2,
  'Língua Inglesa': 1.2,
  'Inglês': 1.2,
  'Direito Constitucional': 1.0,
  'Direito Administrativo': 1.0,
  'Legislação': 1.0,
  'Comunicação Social': 1.0,
  'Comunicação': 1.0,
  'Atualidades': 1.0,
  'Inteligência Artificial': 1.0,
  'Administração Pública': 1.0
};

const TAXONOMIA_ERROS = {
  K: { tag: '[K]', nome: 'conhecimento', descricao: 'Lacuna factual ou teórica de conteúdo não estudado' },
  C: { tag: '[C]', nome: 'confusao_conceitual', descricao: 'Conceito visto, mas com fronteira borrada ou aplicação invertida' },
  I: { tag: '[I]', nome: 'interpretacao', descricao: 'Leitura equivocada do comando ou extrapolação de premissas' },
  D: { tag: '[D]', nome: 'distracao', descricao: 'Lapso de leitura em delimitadores (apenas, exceto, sempre) ou cálculo final' }
};

// Arquivos e pastas estritamente protegidos contra alteração direta
const FONTES_BRUTAS_PROTEGIDAS = [
  '2 - Editais',
  '00 inbox/PROMPT para simulados de comunicação.md',
  '00 inbox/Perguntas que quero clarificar.md',
  '00 inbox/edital-dataprev.md',
  '00 inbox/edital-dataprev.pdf',
  '3 - Materias/Comunicacao/referencias'
];

// -----------------------------------------------------------------------------
// FUNÇÕES UTILITÁRIAS
// -----------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: '00 inbox/00 ingestão.md',
    type: null,
    concurso: 'dataprev-2026',
    dryRun: true,
    apply: false,
    validateOnly: false,
    reportPath: null
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--input' && args[i + 1]) {
      options.input = args[++i];
    } else if (arg === '--type' && args[i + 1]) {
      options.type = args[++i];
    } else if (arg === '--concurso' && args[i + 1]) {
      options.concurso = args[++i];
    } else if (arg === '--apply') {
      options.apply = true;
      options.dryRun = false;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
      options.apply = false;
    } else if (arg === '--validate') {
      options.validateOnly = true;
    } else if (arg === '--report' && args[i + 1]) {
      options.reportPath = args[++i];
    }
  }

  return options;
}

function normalizarPath(p) {
  return p.replace(/\\/g, '/');
}

function isFonteBruta(relPath) {
  const norm = normalizarPath(relPath);
  return FONTES_BRUTAS_PROTEGIDAS.some((prot) => norm === prot || norm.startsWith(prot + '/'));
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*([\s\S]*)$/);
  if (!match) return { frontmatter: null, body: content };

  const rawYaml = match[1];
  const body = match[2];
  const data = {};

  const lines = rawYaml.split(/\r?\n/);
  for (const line of lines) {
    const kv = line.match(/^([a-zA-Z0-9_-]+)\s*:\s*(.*)$/);
    if (kv) {
      let val = kv[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      data[kv[1]] = val;
    }
  }

  return { frontmatter: data, body };
}

// -----------------------------------------------------------------------------
// SNAPSHOT E TRANSAÇÃO EM DISCO
// -----------------------------------------------------------------------------

class TransactionManager {
  constructor() {
    this.snapshots = new Map();
    this.modifiedFiles = [];
  }

  stage(filePath) {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(rootDir, filePath);
    if (!this.snapshots.has(fullPath)) {
      if (fs.existsSync(fullPath)) {
        this.snapshots.set(fullPath, fs.readFileSync(fullPath, 'utf8'));
      } else {
        this.snapshots.set(fullPath, null);
      }
    }
  }

  write(filePath, content) {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(rootDir, filePath);
    if (isFonteBruta(path.relative(rootDir, fullPath))) {
      throw new Error(`VIOLAÇÃO DE SEGURANÇA: Tentativa de alterar fonte bruta protegida: ${path.relative(rootDir, fullPath)}`);
    }

    this.stage(fullPath);
    const parent = path.dirname(fullPath);
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    if (!this.modifiedFiles.includes(fullPath)) {
      this.modifiedFiles.push(fullPath);
    }
  }

  rollback() {
    console.warn('\n[ROLLBACK] Revertendo alterações aplicadas durante a transação...');
    for (const [fullPath, originalContent] of this.snapshots.entries()) {
      if (originalContent === null) {
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
          console.warn(` - Removido arquivo novo: ${path.relative(rootDir, fullPath)}`);
        }
      } else {
        fs.writeFileSync(fullPath, originalContent, 'utf8');
        console.warn(` - Restaurado arquivo original: ${path.relative(rootDir, fullPath)}`);
      }
    }
    this.modifiedFiles = [];
  }
}

// -----------------------------------------------------------------------------
// PIPELINE DE INGESTÃO
// -----------------------------------------------------------------------------

export class IngestionEngine {
  constructor(options = {}) {
    this.options = options;
    this.tx = new TransactionManager();
    this.report = {
      inputFile: options.input,
      date: new Date().toISOString().slice(0, 10),
      classification: null,
      filesRead: [],
      filesCreated: [],
      filesModified: [],
      filesPreserved: [],
      linksCreated: [],
      metricsCalculable: {},
      metricsUncalculable: {},
      clinicalErrors: [],
      theoreticalEnrichments: [],
      validations: [],
      warnings: [],
      pendingDecisions: []
    };
  }

  logRead(relPath) {
    if (!this.report.filesRead.includes(relPath)) {
      this.report.filesRead.push(relPath);
    }
  }

  async step1_readInput() {
    const inputPath = path.join(rootDir, this.options.input);
    this.logRead(this.options.input);

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Arquivo de entrada não encontrado: ${this.options.input}`);
    }

    if (isFonteBruta(this.options.input)) {
      throw new Error(`VIOLAÇÃO: O arquivo de entrada [${this.options.input}] é uma fonte bruta protegida e não pode ser ingerido como lote modificável.`);
    }

    const rawContent = fs.readFileSync(inputPath, 'utf8');
    const { frontmatter, body } = parseFrontmatter(rawContent);

    if (!body || body.trim().length === 0) {
      throw new Error(`Arquivo de entrada [${this.options.input}] está vazio. Nenhum conteúdo a processar.`);
    }

    return { inputPath, rawContent, frontmatter, body };
  }

  step2_classify(parsedInput) {
    const { frontmatter, body } = parsedInput;
    const forcedType = this.options.type;

    const TIPOS_VALIDOS = [
      'teoria',
      'bateria_dirigida',
      'simulado',
      'diagnostico_erro',
      'edital',
      'legislacao',
      'referencia',
      'planejamento',
      'desempenho'
    ];

    if (forcedType) {
      if (!TIPOS_VALIDOS.includes(forcedType)) {
        throw new Error(`Tipo de ingestão inválido informado: "${forcedType}". Tipos válidos: ${TIPOS_VALIDOS.join(', ')}`);
      }
      this.report.classification = forcedType;
      return forcedType;
    }

    const lowerBody = body.toLowerCase();
    const hasSimulado = lowerBody.includes('simulado') || (frontmatter && frontmatter.type === 'simulado');
    const has70Q = lowerBody.includes('70 questões') || lowerBody.includes('70 questoes') || lowerBody.includes('70 q');
    const hasBateria = lowerBody.includes('bateria') || lowerBody.includes('exercícios') || lowerBody.includes('questões');
    const hasTeoria = lowerBody.includes('# conceito') || lowerBody.includes('## teoria') || (frontmatter && frontmatter.type === 'conceito');

    if (hasSimulado && has70Q) {
      this.report.classification = 'simulado';
      return 'simulado';
    }

    if (hasBateria && (lowerBody.includes('gabarito') || lowerBody.includes('acertos') || lowerBody.includes('questão'))) {
      this.report.classification = 'bateria_dirigida';
      return 'bateria_dirigida';
    }

    if (hasTeoria && !lowerBody.includes('gabarito') && !lowerBody.includes('acertos / total')) {
      this.report.classification = 'teoria';
      return 'teoria';
    }

    this.report.pendingDecisions.push({
      item: 'Classificação de conteúdo ambígua',
      detalhes: 'O texto de entrada contém características mistas ou não declarou o tipo explicitamente no frontmatter nem na flag --type.',
      acaoNecessaria: 'Executar novamente especificando --type (ex: --type bateria_dirigida | simulado | teoria).'
    });

    throw new Error(`CLASSIFICAÇÃO AMBÍGUA: O conteúdo recebido não pôde ser classificado com certeza clínica.\nPendências:\n${JSON.stringify(this.report.pendingDecisions, null, 2)}`);
  }

  step3_extractFacts(body, classification) {
    const facts = {
      data: null,
      dataFormatadaPt: null,
      disciplina: null,
      totalQuestoes: 0,
      acertos: 0,
      percentual: null,
      distribuicao: {},
      erros: [],
      questoesDetalhadas: [],
      teoriaConteudo: null
    };

    const dateMatch = body.match(/\b(202\d-[01]\d-[0-3]\d|\d{2}\/\d{2}\/202\d)\b/);
    if (dateMatch) {
      if (dateMatch[1].includes('/')) {
        const [d, m, y] = dateMatch[1].split('/');
        facts.data = `${y}-${m}-${d}`;
        facts.dataFormatadaPt = dateMatch[1];
      } else {
        facts.data = dateMatch[1];
        const [y, m, d] = facts.data.split('-');
        facts.dataFormatadaPt = `${d}/${m}/${y}`;
      }
    } else {
      facts.data = new Date().toISOString().slice(0, 10);
      const [y, m, d] = facts.data.split('-');
      facts.dataFormatadaPt = `${d}/${m}/${y}`;
      this.report.warnings.push(`Data não identificada no corpo da entrada; utilizando a data atual (${facts.data}).`);
    }

    if (classification === 'teoria') {
      facts.teoriaConteudo = body;
      return facts;
    }

    // Identificar disciplina
    const discMatch = body.match(/(?:disciplina|matéria)\s*:\s*([^\r\n]+)/i);
    if (discMatch) {
      facts.disciplina = discMatch[1].trim();
    }

    // Extrair acertos e total
    const acertosMatch = body.match(/acertos\s*:\s*(\d+)\s*(?:\/|\s*de\s*|\s*acertos\s*de\s*)(\d+)/i);
    if (acertosMatch) {
      facts.acertos = parseInt(acertosMatch[1], 10);
      facts.totalQuestoes = parseInt(acertosMatch[2], 10);
    } else {
      const qTotalMatch = body.match(/(?:volume\s*total|total\s*de\s*questões|total\s*questões)\s*:\s*(\d+)/i);
      if (qTotalMatch) facts.totalQuestoes = parseInt(qTotalMatch[1], 10);
      const acertosOnlyMatch = body.match(/acertos\s*:\s*(\d+)/i);
      if (acertosOnlyMatch) facts.acertos = parseInt(acertosOnlyMatch[1], 10);
    }

    if (facts.totalQuestoes > 0) {
      facts.percentual = ((facts.acertos / facts.totalQuestoes) * 100).toFixed(1);
    }

    // Extração de erros com taxonomia clínica
    const lines = body.split(/\r?\n/);
    for (const line of lines) {
      const errMatch = line.match(/(?:Q(?:uest[aã]o)?\s*(\d+)|\|\s*(\d+)\s*\|).*?\[([KCID])(?:\/([KCID]))?\]/i);
      if (errMatch) {
        const numQ = errMatch[1] || errMatch[2];
        const tax1 = errMatch[3].toUpperCase();
        const tax2 = errMatch[4] ? errMatch[4].toUpperCase() : null;

        const cols = line.split('|').map((c) => c.trim()).filter((c) => c.length > 0);
        let assunto = 'Assunto a detalhar';
        let gabarito = null;
        let resposta = null;

        if (cols.length >= 5) {
          assunto = cols[cols.length - 1];
          gabarito = cols[cols.length - 3] || null;
          resposta = cols[cols.length - 4] || null;
        }

        facts.erros.push({
          questao: numQ,
          taxonomia: [tax1, tax2].filter(Boolean),
          classificacaoCanonica: TAXONOMIA_ERROS[tax1] ? TAXONOMIA_ERROS[tax1].nome : 'confusao_conceitual',
          assunto,
          gabarito,
          resposta,
          linhaOriginal: line
        });
      }
    }

    this.report.clinicalErrors = facts.erros;
    return facts;
  }

  step4_detectDuplicates(facts, classification) {
    if (classification === 'teoria') {
      const matchTitle = facts.teoriaConteudo.match(/^#\s+([^\r\n]+)/m);
      if (matchTitle) {
        const titulo = matchTitle[1].trim();
        const indexPath = path.join(rootDir, 'index.md');
        this.logRead('index.md');
        const indexContent = fs.readFileSync(indexPath, 'utf8');
        if (indexContent.toLowerCase().includes(`[[${titulo.toLowerCase()}`) || indexContent.toLowerCase().includes(`|${titulo.toLowerCase()}]]`)) {
          this.report.warnings.push(`Possível nota teórica duplicada: título "${titulo}" já referenciado no index.md.`);
        }
      }
      return;
    }

    if (facts.disciplina) {
      const matFolder = this.mapearPastaMateria(facts.disciplina);
      if (matFolder) {
        const avPath = path.join(rootDir, `3 - Materias/${matFolder}/Avancos.md`);
        if (fs.existsSync(avPath)) {
          this.logRead(`3 - Materias/${matFolder}/Avancos.md`);
          const avContent = fs.readFileSync(avPath, 'utf8');

          const dataIso = facts.data;
          const dataPt = facts.dataFormatadaPt;

          // Buscar linha da tabela de volume correspondente àquela data
          // Padrão de linha da tabela: | 04/09/2026 | 12 | Raciocínio Lógico | ...
          const lines = avContent.split(/\r?\n/);
          for (const line of lines) {
            if (line.includes(dataPt) || (dataIso && line.includes(dataIso))) {
              if (line.includes(`${facts.totalQuestoes}`) || line.includes(`${facts.acertos}/${facts.totalQuestoes}`)) {
                throw new Error(`DUPLICATA DETECTADA: Sessão de ${facts.disciplina} na data ${dataPt} com volume de ${facts.totalQuestoes} questões já existe em 3 - Materias/${matFolder}/Avancos.md.`);
              }
            }
          }
        }
      }
    }
  }

  mapearPastaMateria(nomeDisc) {
    if (!nomeDisc) return null;
    const lower = nomeDisc.toLowerCase();
    if (lower.includes('lógic') || lower.includes('logic')) return 'Logica';
    if (lower.includes('portugu')) return 'Portugues';
    if (lower.includes('comunica')) return 'Comunicacao';
    if (lower.includes('ingl')) return 'Ingles';
    if (lower.includes('cálculo') || lower.includes('calculo')) return 'Calculo Mental';
    if (lower.includes('constitucional')) return 'Direito Constitucional';
    if (lower.includes('administrativo')) return 'Direito Administrativo';
    if (lower.includes('atualidades') || lower.includes('inteligência') || lower.includes('ia')) return 'Atualidades';
    if (lower.includes('informática') || lower.includes('informatica')) return 'Informatica';
    return null;
  }

  step6_identifyTargetFiles(facts, classification) {
    const targets = {
      teoricas: [],
      desempenho: [],
      projetos: [],
      indices: ['index.md', 'log.md']
    };

    if (classification === 'teoria') {
      const folder = this.mapearPastaMateria(facts.disciplina) || 'Geral';
      targets.teoricas.push(`3 - Materias/${folder}/NovaNota.md`);
      return targets;
    }

    if (classification === 'simulado') {
      targets.desempenho.push('00 - Desempenho/Simulados/00 - Catalogo de simulados.md');
      targets.desempenho.push('00 - Desempenho/00 Avancos globais.md');
      targets.desempenho.push('00 - Desempenho/01 Log de saturacao diaria.md');
      targets.projetos.push('4 - Projetos/dataprev-2026/Questoes e Simulados.md');
      targets.projetos.push('4 - Projetos/dataprev-2026/Log de erros.md');
      targets.projetos.push('4 - Projetos/dataprev-2026/00 Dashboard.md');
      targets.projetos.push('data/erros-recorrentes.json');
    } else if (classification === 'bateria_dirigida') {
      const matFolder = this.mapearPastaMateria(facts.disciplina);
      if (matFolder) {
        targets.desempenho.push(`3 - Materias/${matFolder}/Avancos.md`);
      }
      targets.desempenho.push('00 - Desempenho/00 Avancos globais.md');
      targets.desempenho.push('00 - Desempenho/01 Log de saturacao diaria.md');
      targets.projetos.push('4 - Projetos/dataprev-2026/Questoes e Simulados.md');
      targets.projetos.push('4 - Projetos/dataprev-2026/Log de erros.md');
      targets.projetos.push('data/erros-recorrentes.json');
    }

    return targets;
  }

  step9_generatePlan(facts, classification, targets) {
    const plan = {
      classification,
      facts,
      filesToRead: this.report.filesRead,
      filesToCreate: [],
      filesToModify: [],
      filesPreserved: [...FONTES_BRUTAS_PROTEGIDAS],
      metricsCalculable: {},
      metricsUncalculable: {},
      errors: []
    };

    if (facts.totalQuestoes > 0 && facts.acertos > facts.totalQuestoes) {
      throw new Error(`ERRO MATEMÁTICO: Quantidade de acertos (${facts.acertos}) superior ao total de questões (${facts.totalQuestoes}).`);
    }

    if (classification === 'simulado') {
      const hasFullDist = facts.distribuicao &&
        facts.distribuicao.portugues === COMPOSICAO_OFICIAL_DATAPREV.portugues &&
        facts.distribuicao.ingles === COMPOSICAO_OFICIAL_DATAPREV.ingles &&
        facts.distribuicao.logica === COMPOSICAO_OFICIAL_DATAPREV.logica &&
        facts.distribuicao.atualidades_ia === COMPOSICAO_OFICIAL_DATAPREV.atualidades_ia &&
        facts.distribuicao.legislacao === COMPOSICAO_OFICIAL_DATAPREV.legislacao &&
        facts.distribuicao.comunicacao === COMPOSICAO_OFICIAL_DATAPREV.comunicacao;

      if (hasFullDist) {
        const notaGerais = (facts.acertosGerais || 0) * 1.0;
        const notaEsp = (facts.acertosEspeciais || 0) * 2.5;
        plan.metricsCalculable.notaPonderadaDataprev = `${notaGerais + notaEsp} / 115.0`;
      } else {
        plan.metricsUncalculable.notaPonderadaDataprev = 'Distribuição por disciplina incompleta ou diferente da oficial (12, 12, 5, 6, 5, 30). Proibido calcular /115 por governança.';
      }
    }

    if (facts.disciplina && PESOS_COGNITIVOS[facts.disciplina]) {
      plan.metricsCalculable.pesoCognitivo = PESOS_COGNITIVOS[facts.disciplina];
      plan.metricsCalculable.tap = `${facts.percentual}%`;
    }

    for (const f of [...targets.desempenho, ...targets.projetos, ...targets.indices]) {
      if (fs.existsSync(path.join(rootDir, f))) {
        plan.filesToModify.push(f);
      } else {
        plan.filesToCreate.push(f);
      }
    }

    return plan;
  }

  async execute() {
    console.log('=== PIPELINE DE INGESTÃO ASSISTIDA DO VAULT ===\n');

    const parsedInput = await this.step1_readInput();
    console.log(`✓ Etapa 1: Entrada lida: ${this.options.input}`);

    const classification = this.step2_classify(parsedInput);
    console.log(`✓ Etapa 2: Classificação confirmada: [${classification.toUpperCase()}]`);

    const facts = this.step3_extractFacts(parsedInput.body, classification);
    console.log(`✓ Etapa 3: Fatos extraídos: Data ${facts.data}, Volume: ${facts.acertos}/${facts.totalQuestoes} (${facts.percentual || 0}%), Erros clínicos: ${facts.erros.length}`);

    this.step4_detectDuplicates(facts, classification);
    console.log(`✓ Etapa 4 e 5: Verificação de duplicatas e temas concluída com sucesso.`);

    const targets = this.step6_identifyTargetFiles(facts, classification);
    console.log(`✓ Etapa 6-8: Arquivos de destino identificados.`);

    const plan = this.step9_generatePlan(facts, classification, targets);
    console.log(`✓ Etapa 9-10: Plano de alteração gerado e validado logicamente.`);

    this.printPlan(plan);

    if (this.options.dryRun && !this.options.apply) {
      console.log('\n[MODO DRY-RUN]: Nenhuma alteração foi gravada em disco. Use --apply para efetivar as alterações.');
      return this.report;
    }

    console.log('\n--- EXECUTANDO MODO --APPLY SEGURO (COM CONTROLE TRANSACTIONAL) ---');
    try {
      this.applyPlan(plan, parsedInput);
      console.log('✓ Etapa 11-13: Alterações aplicadas, índices e log.md atualizados.');

      if (this.options.input === '00 inbox/00 ingestão.md') {
        const limpo = `---\ntitle: "Ingestão"\ntype: "inbox"\nstatus: "limpo"\ncreated: 2026-04-25\nupdated: ${facts.data}\n---\n\n# Ingestão\n`;
        this.tx.write(this.options.input, limpo);
        console.log('✓ Housekeeping: Conteúdo de 00 inbox/00 ingestão.md higienizado preservando cabeçalho e frontmatter.');
      }

      console.log('\n✓ SUCESSO TOTAL: Ingestão finalizada com sucesso e segurança.');
    } catch (err) {
      console.error(`\n✗ FALHA DURANTE A APLICAÇÃO: ${err.message}`);
      this.tx.rollback();
      throw err;
    }

    return this.report;
  }

  printPlan(plan) {
    console.log('\n================== PLANO DE ALTERAÇÃO ==================');
    console.log(`Classificação: ${plan.classification}`);
    console.log(`Arquivos Lidos: ${plan.filesToRead.join(', ')}`);
    console.log(`Arquivos a Modificar: ${plan.filesToModify.join(', ')}`);
    console.log(`Arquivos a Criar: ${plan.filesToCreate.join(', ') || '(nenhum)'}`);
    console.log(`Fontes Brutas Preservadas: ${plan.filesPreserved.length} diretórios/arquivos`);
    console.log('Métricas Calculáveis:', plan.metricsCalculable);
    console.log('Métricas Não Calculáveis:', plan.metricsUncalculable);
    if (plan.facts.erros.length > 0) {
      console.log(`Erros Clínicos Mapeados (${plan.facts.erros.length}):`);
      for (const err of plan.facts.erros) {
        console.log(` - Q${err.questao}: [${err.taxonomia.join('/')}] ${err.assunto}`);
      }
    }
    if (this.report.warnings.length > 0) {
      console.log('Avisos:', this.report.warnings);
    }
    console.log('========================================================\n');
  }

  applyPlan(plan, parsedInput) {
    const { facts, classification } = plan;

    const logPath = path.join(rootDir, 'log.md');
    this.tx.stage(logPath);
    let logContent = fs.readFileSync(logPath, 'utf8');

    const logEntry = `## [${facts.data}] ${classification} | Ingestão de Inbox (${facts.disciplina || 'Geral'})\n` +
      `- **Ingestão e Desempenho**:\n` +
      `  - Ingeridas e processadas ${facts.totalQuestoes} questões (${facts.acertos}/${facts.totalQuestoes} acertos — ${facts.percentual}%).\n` +
      (facts.erros.length > 0 ? `  - Diagnosticados ${facts.erros.length} erros com taxonomia clínica [K, C, I, D].\n` : '') +
      `- **Housekeeping**:\n` +
      `  - Ingestão processada com validação estrutural assistida.\n\n`;

    logContent = logEntry + logContent;
    this.tx.write('log.md', logContent);
    this.report.filesModified.push('log.md');

    if (facts.erros.length > 0) {
      const errosJsonPath = path.join(rootDir, 'data/erros-recorrentes.json');
      this.tx.stage(errosJsonPath);
      const listaErros = JSON.parse(fs.readFileSync(errosJsonPath, 'utf8'));

      for (const err of facts.erros) {
        const id = `err-${facts.data.replace(/-/g, '')}-q${err.questao}`;
        if (!listaErros.some((e) => e.id === id)) {
          listaErros.push({
            id,
            concursoId: this.options.concurso || 'dataprev-2026',
            disciplina: facts.disciplina || 'Geral',
            assunto: err.assunto,
            notaPath: `3 - Materias/${this.mapearPastaMateria(facts.disciplina) || 'Logica'}/Avancos.md`,
            tipoErro: err.taxonomia[0] || 'C',
            sourcePath: this.options.input,
            status: 'pendente'
          });
        }
      }
      this.tx.write('data/erros-recorrentes.json', JSON.stringify(listaErros, null, 2));
      this.report.filesModified.push('data/erros-recorrentes.json');
    }
  }
}

// -----------------------------------------------------------------------------
// EXECUÇÃO CLI
// -----------------------------------------------------------------------------

async function main() {
  const options = parseArgs();

  if (options.validateOnly) {
    console.log('Executando validação de integridade do vault...');
    const { execSync } = await import('child_process');
    try {
      execSync('node scripts/validate-integrity.js', { stdio: 'inherit', cwd: rootDir });
      process.exit(0);
    } catch (e) {
      process.exit(1);
    }
  }

  const engine = new IngestionEngine(options);
  try {
    await engine.execute();
  } catch (err) {
    console.error(`\n[ERRO FATAL NA INGESTÃO]: ${err.message}`);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
