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

if (falhas > 0) process.exit(1);
console.log('SUCESSO: rotas de busca e deep links preservadas.');
