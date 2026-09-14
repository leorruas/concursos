import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { calcularFingerprintIngestao } from './ingestion-idempotency.js';
import { fileSha256 } from './changeset-transaction.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const DATE = '2026-09-14';
const BATTERY = '00 - Desempenho/Simulados/Bateria-Mista-2026-09-14.md';
const BATTERY_LINK = '[[00 - Desempenho/Simulados/Bateria-Mista-2026-09-14|Bateria mista Dataprev/FGV — 14/09/2026]]';

function full(rel) { return path.join(rootDir, rel); }
function exists(rel) { return fs.existsSync(full(rel)); }
function read(rel) {
  if (!exists(rel)) throw new Error(`Arquivo ausente: ${rel}`);
  return fs.readFileSync(full(rel), 'utf8');
}
function replaceOne(text, regex, replacement, label) {
  if (typeof regex === 'string') {
    if (!text.includes(regex)) throw new Error(`Âncora não encontrada: ${label}`);
    return text.replace(regex, replacement);
  }
  if (!regex.test(text)) throw new Error(`Âncora não encontrada: ${label}`);
  return text.replace(regex, replacement);
}
function ensureAfter(text, anchor, insertion, label) {
  if (text.includes(insertion.trim())) return text;
  if (!text.includes(anchor)) throw new Error(`Âncora não encontrada: ${label}`);
  return text.replace(anchor, anchor + insertion);
}
function updateDate(text) {
  return text.replace(/^updated:\s*\d{4}-\d{2}-\d{2}$/m, `updated: ${DATE}`);
}
function replaceOp(rel, content) {
  return { op: 'replace', path: rel, expectedSha256: fileSha256(full(rel)), content };
}
function createOrReplaceOp(rel, content) {
  if (exists(rel)) return replaceOp(rel, content);
  return { op: 'create', path: rel, content };
}

const inputRel = '00 inbox/00 ingestão.md';
const input = read(inputRel);
const fingerprint = calcularFingerprintIngestao({ content: input, concurso: 'dataprev-2026' });
const operations = [];

// 1) Catálogo de simulados / baterias mistas
{
  const rel = '00 - Desempenho/Simulados/00 - Catalogo de simulados.md';
  let text = updateDate(read(rel));
  if (!text.includes('31,0/36,5 pontos disponíveis')) {
    const marker = '\n\n---\n\n## 2. Mapa de Calor de Erros por Disciplina';
    const note = `\n\n> [!NOTE]\n> Na bateria mista de 14/09, a pontuação ponderada parcial foi **31,0/36,5 pontos disponíveis** nos itens efetivamente respondidos. Esse número descreve apenas a amostra; a nota oficial **/115 não é calculável** porque a composição da bateria não corresponde à distribuição oficial da prova.\n`;
    if (!text.includes(marker)) throw new Error('Âncora do catálogo não encontrada.');
    text = text.replace(marker, note + marker);
  }
  operations.push(replaceOp(rel, text));
}

// 2) Avanços globais
{
  const rel = '00 - Desempenho/00 Avancos globais.md';
  let text = updateDate(read(rel));
  const recent = `- **Sessão mista de 14/09**: ${BATTERY_LINK}: **22/26 questões válidas (84,6%)**, TAP **84,4%** e pontuação ponderada parcial **31,0/36,5** nos itens respondidos. Uma questão de Português foi anulada e excluída do denominador; o bloco de Inglês não teve respostas registradas e não entra nas métricas. Os quatro erros válidos foram: Lógica [C] em \`nenhum → algum\`; Português [C] recorrente em adversativa × concessiva; Comunicação [C] em clipping × auditoria de imagem; Atualidades [K] em regime de metas/IPCA/Selic/Copom. Legislação fechou 4/4. A nota oficial /115 não é calculável para esta bateria.`;
  text = replaceOne(text, /^- \*\*Sessão mista de 14\/09\*\*:.*$/m, recent, 'evolução recente 14/09');

  const week = `| **Semana 38** (14/09 a 20/09) | 26 | 84,6% (22/26) | 84,4% | **Média**: ${BATTERY_LINK}. Sessão mista em cinco disciplinas, com pontuação ponderada parcial de **31,0/36,5** nos itens respondidos. Três erros de confusão conceitual e um de conhecimento; Legislação 4/4. Uma questão de Português anulada ficou fora do denominador e Inglês não foi contado por ausência de respostas. |`;
  text = replaceOne(text, /^\| \*\*Semana 38\*\* \(14\/09 a 20\/09\).*$/m, week, 'semana 38 global');

  const control = `| ${BATTERY_LINK} | 14/09/2026 | 22/26 (84,6%) | Pontuação ponderada parcial: 31,0/36,5; /115 não calculável | 26 válidas; 5 disciplinas; 1 questão de Português anulada; Inglês sem respostas | Diagnóstico de retenção com quatro erros úteis: três [C] e um [K]. Destaques positivos: Legislação 4/4, De Morgan recuperado e Comunicação em 6/7. |`;
  text = replaceOne(text, /^\| Sessão mista Dataprev\/FGV \| 14\/09\/2026 .*$/m, control, 'controle de bateria mista');
  operations.push(replaceOp(rel, text));
}

// 3) Log de saturação diária
{
  const rel = '00 - Desempenho/01 Log de saturacao diaria.md';
  let text = updateDate(read(rel));
  const row = `| 14/09/2026 | 26 | 84,6% (22/26) | 84,4% | **Média**: ${BATTERY_LINK}. Sessão mista em Lógica (5/6), Português (5/6 válidas; 1 anulada), Legislação (4/4), Comunicação (6/7) e Atualidades/IA (2/3). Pontuação ponderada parcial: **31,0/36,5** nos itens respondidos; /115 não calculável. Erros: [C] negação de \`nenhum\`; [C] recorrente adversativa × concessiva; [C] clipping × auditoria de imagem; [K] regime de metas/IPCA/Selic/Copom. O bloco de Inglês não foi contabilizado por ausência de respostas. |`;
  text = replaceOne(text, /^\| 14\/09\/2026 \| 26 \|.*$/m, row, 'linha diária 14/09');
  operations.push(replaceOp(rel, text));
}

// 4) Questões e simulados do projeto
{
  const rel = '4 - Projetos/dataprev-2026/Questoes e Simulados.md';
  let text = updateDate(read(rel));
  const bullet = `- **Sessão mista Dataprev/FGV:** 14/09/2026 — ${BATTERY_LINK}: **22/26 válidas (84,6%)**; pontuação ponderada parcial **31,0/36,5** nos itens respondidos; /115 não calculável. Lógica 5/6; Português 5/6 válidas, com 1 questão anulada fora do denominador; Legislação 4/4; Comunicação 6/7; Atualidades/IA 2/3. O bloco de Inglês foi iniciado, mas não houve respostas registradas e ele não entra nas métricas.`;
  text = replaceOne(text, /^- \*\*Sessão mista Dataprev\/FGV:\*\* 14\/09\/2026.*$/m, bullet, 'histórico de mini-simulados 14/09');
  operations.push(replaceOp(rel, text));
}

// 5) Dashboard: manter último simulado oficial e adicionar última bateria mista.
{
  const rel = '4 - Projetos/dataprev-2026/00 Dashboard.md';
  let text = updateDate(read(rel));
  const section = `\n## Última bateria mista\n\n| Data | Resultado bruto | Pontuação ponderada parcial | Diagnóstico |\n| :--- | :---: | :---: | :--- |\n| 14/09/2026 | ${BATTERY_LINK}: **22/26 — 84,6%** | **31,0/36,5** nos itens respondidos | Quatro erros úteis: 3 [C] e 1 [K]. Legislação 4/4. Inglês sem respostas e Português com 1 questão anulada. A nota /115 não é calculável nesta bateria. |\n`;
  if (/## Última bateria mista[\s\S]*?(?=\n## |$)/m.test(text)) {
    text = text.replace(/\n## Última bateria mista[\s\S]*?(?=\n## |$)/m, section + '\n');
  } else {
    const anchor = '\n## Metas e Foco da Reta Final';
    if (!text.includes(anchor)) throw new Error('Âncora do Dashboard não encontrada.');
    text = text.replace(anchor, section + anchor);
  }
  operations.push(replaceOp(rel, text));
}

// 6) Log clínico de erros
{
  const rel = '4 - Projetos/dataprev-2026/Log de erros.md';
  let text = updateDate(read(rel));
  const oldIntro = 'Consulte o catálogo central de simulados em [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]] e os diagnósticos do [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]] e do [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]].';
  const newIntro = `Consulte o catálogo central de simulados em [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]], os diagnósticos do [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]] e do [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]], e a ${BATTERY_LINK}.`;
  if (text.includes(oldIntro)) text = text.replace(oldIntro, newIntro);
  else if (!text.includes(BATTERY_LINK)) throw new Error('Introdução do Log de erros não encontrada.');
  operations.push(replaceOp(rel, text));
}

// 7) Erros recorrentes: apontar a recorrência de Português para a evidência consolidada.
{
  const rel = 'data/erros-recorrentes.json';
  const data = JSON.parse(read(rel));
  const item = data.find((x) => x.id === 'err-bat-20260914-adversativa-concessiva');
  if (!item) throw new Error('Erro recorrente de Português de 14/09 não encontrado.');
  item.sourcePath = BATTERY;
  operations.push(replaceOp(rel, JSON.stringify(data, null, 2) + '\n'));
}

// 8) Diagnóstico consolidado da bateria: corrigir proveniência e incluir leitura ponderada parcial.
{
  const rel = BATTERY;
  let text = updateDate(read(rel));
  const provenance = `## Proveniência e escopo\n\nFonte primária desta ingestão: arquivo anexado pelo usuário \`00 ingestão.md\`, contendo os enunciados, respostas e correções da sessão de 14/09/2026. Para a operação no vault, essa fonte foi normalizada em \`00 inbox/00 ingestão.md\` sem alterar resultados, erros clínicos, questões anuladas ou questões sem resposta.\n\nA sessão é uma **bateria mista multimatéria**, e não um simulado oficial de 70 questões. O motor foi executado com \`--type simulado\` apenas como categoria operacional para uma sessão mista; isso não autoriza cálculo da nota /115. O dry-run canônico confirmou **22/26 (84,6%)** e quatro erros clínicos. A aplicação formal usa o fingerprint \`${fingerprint}\` e o mecanismo transacional de change set.\n\nO bloco de Inglês permaneceu fora do denominador por ausência de respostas. Em Português, uma questão foi anulada por não possuir alternativa incorreta e também ficou fora do denominador.\n\n## Resultado consolidado`;
  text = replaceOne(text, /## Proveniência e escopo[\s\S]*?## Resultado consolidado/, provenance, 'proveniência da bateria');
  if (!text.includes('31,0/36,5')) {
    const tap = '- TAP da sessão: **84,4%**, aplicando os pesos vigentes do vault.';
    const add = `${tap}\n- Pontuação ponderada parcial Dataprev: **31,0/36,5 pontos disponíveis** nos itens respondidos.\n- Nota ponderada oficial **/115: não calculável**, porque a composição da bateria não corresponde à distribuição oficial da prova.`;
    text = replaceOne(text, tap, add, 'TAP da bateria');
  }
  operations.push(replaceOp(rel, text));
}

// 9) Avanços locais já existentes: ligar todos ao diagnóstico consolidado, sem duplicar teoria.
const localProgress = [
  ['3 - Materias/Logica/Avancos.md', '### Diagnóstico de bateria mista: quantificadores, proposições e condicional (14/09/2026)\n'],
  ['3 - Materias/Portugues/Avancos.md', '### Bateria mista de Português (14/09/2026)\n'],
  ['3 - Materias/Comunicacao/Avancos.md', '### Diagnóstico de bateria FGV: autores, teorias do jornalismo e assessoria (14/09/2026)\n'],
  ['3 - Materias/Atualidades/Avancos.md', '### Diagnóstico de bateria contextual — economia, clima e segurança de IA (14/09/2026)\n']
];
for (const [rel, heading] of localProgress) {
  let text = updateDate(read(rel));
  const line = `- **Diagnóstico consolidado da sessão**: ${BATTERY_LINK}.\n`;
  text = ensureAfter(text, heading, line, `diagnóstico local em ${rel}`);
  operations.push(replaceOp(rel, text));
}

// 10) Avanços locais de Informática/Legislação, ausentes até agora.
{
  const rel = '3 - Materias/Informatica/Avancos.md';
  const content = `---\ntitle: "Avanços e desempenho (Informática e legislação de SI)"\ntype: "hub"\nstatus: "ativo"\ncreated: 2026-09-14\nupdated: 2026-09-14\n---\n\n# Avanços e desempenho (Informática e legislação de SI)\n\n## Volume diário de exercícios\n\n| Data | Quantidade | Matéria | Detalhamento / Blocos |\n| :--- | :--- | :--- | :--- |\n| 14/09/2026 | 4 | Legislação de SI e proteção de dados | Bateria FGV: **4/4 (100%)**. Lei 12.737/2012 e redação vigente do art. 154-A; LGPD e dados sensíveis; Marco Civil e prazos de guarda; sanções e dosimetria da LGPD. |\n\n## Aproveitamento semanal\n\n| Semana / Período | Questões | Aproveitamento | Evolução / Análise de Progresso |\n| :--- | :--- | :--- | :--- |\n| **Semana 38** (14/09 a 20/09) | 4 | **100% (4/4)** | Bateria gabaritada. A questão de maior valor cognitivo foi a distinção entre a redação original de 2012 e a redação vigente do art. 154-A após a Lei 14.155/2021. |\n\n---\n\n## Diagnósticos de desempenho\n\n### Bateria de Legislação de SI e proteção de dados (14/09/2026)\n- **Resultado**: 100% (4/4).\n- **Evidências positivas**: reconheceu que o art. 154-A vigente não exige violação de mecanismo de segurança no caput; distinguiu hipóteses legais de tratamento de dados sensíveis sem consentimento; fixou guarda de registros de conexão por 1 ano e de acesso a aplicações por 6 meses nas hipóteses legais; reconheceu advertência como sanção da LGPD e ausência de automatismo de multa máxima por reincidência.\n- **Ganho de conhecimento**: a Q1 revelou uma lacuna anterior do vault e foi promovida para a nota [[3 - Materias/Informatica/02 - lei 12737 delitos informaticos|Lei 12.737/2012 — delitos informáticos]], com contraste entre redação original e redação vigente após a Lei 14.155/2021.\n- **Destino pedagógico**: as quatro questões entram em métrica. A Q1, por alto valor cognitivo, também cumpriu \`enriquecimento_teorico\`, \`questao_comentada_candidata\` e \`nova_nota\`; a nota canônica já existe, portanto não há duplicação.\n- **Diagnóstico consolidado da sessão**: ${BATTERY_LINK}.\n- **Ação**: revisar por questões mistas; não há erro clínico a corrigir neste bloco.\n`;
  operations.push(createOrReplaceOp(rel, content));
}

// 11) Hub de Informática e índice global passam a expor o novo Avanços.
{
  const rel = '3 - Materias/Informatica/informatica.md';
  let text = updateDate(read(rel));
  const heading = '# Informática (Concursos)\n';
  const insertion = '\n## Acompanhamento\n- [[3 - Materias/Informatica/Avancos|Avanços e desempenho]]\n';
  text = ensureAfter(text, heading, insertion, 'hub Informática');
  operations.push(replaceOp(rel, text));
}
{
  const rel = 'index.md';
  let text = read(rel);
  const anchor = '- [[3 - Materias/Informatica/informatica|Informatica]]\n';
  const insertion = '  - [[3 - Materias/Informatica/Avancos|Avanços e desempenho]]\n';
  text = ensureAfter(text, anchor, insertion, 'índice de Informática');
  operations.push(replaceOp(rel, text));
}

// 12) Checklist: registrar a evidência que fechou a lacuna de legislação.
{
  const rel = '4 - Projetos/dataprev-2026/O que estudar.md';
  let text = updateDate(read(rel));
  const heading = '### 5. Legislação de Segurança da Informação e Proteção de Dados\n';
  const evidence = `\n*Evidência recente:* ${BATTERY_LINK}: **4/4 em 14/09/2026**, incluindo a redação vigente do art. 154-A do Código Penal.\n`;
  text = ensureAfter(text, heading, evidence, 'evidência de legislação no checklist');
  operations.push(replaceOp(rel, text));
}

// 13) log.md é estritamente append-only.
{
  const rel = 'log.md';
  const current = read(rel);
  const marker = '## 2026-09-14 — Formalização transacional da bateria mista Dataprev/FGV';
  if (current.includes(marker)) throw new Error('Registro formal da ingestão já existe em log.md.');
  const entry = `\n\n${marker}\n\n- Fonte: arquivo anexado \`00 ingestão.md\`, normalizado na inbox canônica sem alteração dos resultados pedagógicos.\n- Dry-run canônico concluído com classificação operacional \`simulado\`: **22/26 (84,6%)**, quatro erros clínicos e nota /115 corretamente marcada como não calculável.\n- Fingerprint da evidência: \`${fingerprint}\`.\n- TAP da sessão: **84,4%**. Pontuação ponderada parcial: **31,0/36,5** nos itens efetivamente respondidos.\n- Blocos: Lógica 5/6; Português 5/6 válidas, com 1 anulada; Legislação 4/4; Comunicação 6/7; Atualidades/IA 2/3; Inglês sem respostas e fora das métricas.\n- Erros: Lógica [C] \`nenhum → algum\`; Português [C] recorrente adversativa × concessiva; Comunicação [C] clipping × auditoria de imagem; Atualidades [K] regime de metas/IPCA/Selic/Copom.\n- Teoria já promovida sem duplicação: [[3 - Materias/Informatica/02 - lei 12737 delitos informaticos|Lei 12.737/2012 — delitos informáticos]] e [[3 - Materias/Atualidades/03 - regime de metas inflacao selic copom|Regime de metas, inflação, Selic e Copom]].\n- Criado o acompanhamento local [[3 - Materias/Informatica/Avancos|Avanços de Informática e legislação de SI]] e sincronizadas as camadas local, global, projeto e diagnóstico consolidado.\n`;
  operations.push({ op: 'append', path: rel, expectedSha256: fileSha256(full(rel)), content: entry });
}

const manifest = {
  version: 1,
  draft: false,
  description: 'Formaliza de forma transacional a bateria mista Dataprev/FGV de 14/09/2026 a partir do arquivo anexado pelo usuário.',
  concurso: 'dataprev-2026',
  ingestionFingerprint: fingerprint,
  operations
};

const out = '/tmp/ingestion-20260914.json';
fs.writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`CHANGESET=${out}`);
console.log(`FINGERPRINT=${fingerprint}`);
console.log(`OPERATIONS=${operations.length}`);
