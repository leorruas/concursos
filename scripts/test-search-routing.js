import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import '../web/00-route-utils.js';

let falhas = 0;
function check(desc, cond) {
  if (cond) console.log('✓ ' + desc);
  else { console.error('✗ ' + desc); falhas += 1; }
}

const artigo = construirRotaArtigo('Direito Administrativo', '06 - responsabilidade civil do estado', 'vitima-estado-agente-publico');
const parsed = parsearHashVault(artigo);
check('rota de artigo preserva categoria', parsed.categoria === 'Direito Administrativo');
check('rota de artigo preserva título', parsed.titulo === '06 - responsabilidade civil do estado');
check('rota de artigo preserva seção', parsed.secao === 'vitima-estado-agente-publico');

const semSecao = parsearHashVault(construirRotaArtigo('Comunicação', '18 - fact checking e desinformacao', ''));
check('rota antiga sem seção continua válida', semSecao.tipo === 'artigo' && semSecao.secao === '');

const disciplina = parsearHashVault('#/disciplina/Direito%20Constitucional');
check('rota de disciplina continua válida', disciplina.tipo === 'disciplina' && disciplina.categoria === 'Direito Constitucional');

check('home continua válido', parsearHashVault('#/').tipo === 'home');
check('home com concurso preserva contexto', parsearHashVault(construirRotaHome('cgu-2026')).concursoId === 'cgu-2026');
check('home com biblioteca geral preserva modo', parsearHashVault(construirRotaHome('', true)).biblioteca === true);
const rotDisciplina = construirRotaDisciplina('Avaliacao de Politicas Publicas', 'cgu-2026');
check('disciplina preserva concurso', parsearHashVault(rotDisciplina).concursoId === 'cgu-2026');
const rotArtigo = construirRotaArtigo('Direito Constitucional', 'direito-constitucional', 'primeira-secao', 'camara-2026');
check('artigo preserva concurso e seção juntos', parsearHashVault(rotArtigo).concursoId === 'camara-2026' && parsearHashVault(rotArtigo).secao === 'primeira-secao');
const rotBiblioteca = construirRotaArtigo('Comunicacao', 'comunicacao', 'trecho', 'dataprev-2026', true);
check('biblioteca geral prevalece e não apaga seção', parsearHashVault(rotBiblioteca).biblioteca && parsearHashVault(rotBiblioteca).secao === 'trecho' && !parsearHashVault(rotBiblioteca).concursoId);
check('rota antiga com secao continua válida', parsearHashVault('#/Informatica/informatica?secao=apresentacao').secao === 'apresentacao');
const linkCompartilhado = construirRotaArtigo('Comunicacao', '17 - pesquisa em comunicacao', 'hipoteses', 'cgu-2026', false, 'Avaliacao de Politicas Publicas');
const parsedCompartilhado = parsearHashVault(linkCompartilhado);
check('origem de artigo compartilhado e secao sao preservadas', parsedCompartilhado.origem === 'Avaliacao de Politicas Publicas' && parsedCompartilhado.secao === 'hipoteses' && parsedCompartilhado.concursoId === 'cgu-2026');

const raizRepo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const markdownWeb = fs.readFileSync(path.join(raizRepo, 'web/04-markdown.js'), 'utf8');
check(
  'wikilink ancorado preserva seção no href público',
  markdownWeb.includes('rotaDoArtigo(artigoDestino, secao)')
);
check(
  'clique em wikilink ancorado abre artigo na seção',
  markdownWeb.includes('abrirArtigo(dest, true, secao)')
);


// Regressão: em tabelas Markdown do Obsidian, o pipe no alias do wikilink
// precisa ser escapado para não virar uma nova coluna antes do renderizador.
const hubAuditoria = fs.readFileSync(
  path.join(raizRepo, '3 - Materias/Auditoria Governamental/auditoria-governamental.md'),
  'utf8'
);
const linhasMatriz = hubAuditoria.split(/\r?\n/).filter(linha => /^\| (?:0[1-9]|1[0-4]) \|/.test(linha));
check('matriz de auditoria preserva 14 unidades e quatro colunas', (
  linhasMatriz.length === 14 &&
  linhasMatriz.every(linha => (linha.match(/(?<!\\)\|/g) || []).length === 5)
));
check('links da matriz preservam notas históricas e atalhos para etapas do ciclo', (
  ['01 - finalidades e tres linhas', '03 - independencia objetividade e sigilo',
   '04 - proficiencia zelo e ceticismo profissional'
  ].every(arquivo => linhasMatriz.some(linha => linha.includes(
    '[[3 - Materias/Auditoria Governamental/' + arquivo + '\\|nota '
  ))) &&
  linhasMatriz.some(linha => linha.includes(
    '[[3 - Materias/Auditoria Governamental/02 - ciclo de auditoria#3. Comunicação: transformar evidências em conclusões úteis\\|etapa de comunicação]]'
  )) &&
  linhasMatriz.some(linha => linha.includes(
    '[[3 - Materias/Auditoria Governamental/02 - ciclo de auditoria#4. Monitoramento: verificar a resposta e o resultado\\|etapa de monitoramento]]'
  ))
));

if (falhas > 0) process.exit(1);
console.log('SUCESSO: rotas de busca e deep links preservadas.');
