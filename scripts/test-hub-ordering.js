import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const codigo = fs.readFileSync(path.join(rootDir, 'web/02-data-home.js'), 'utf8');
const recorteFim = codigo.indexOf('async function carregarCamadaEstrategica');
const helpers = recorteFim > 0 ? codigo.slice(0, recorteFim) : codigo;

const contexto = { console };
vm.createContext(contexto);
vm.runInContext(helpers + '\nglobalThis.__hubApi = { ehResumoPrincipalDaMateria, ordenarArtigosDaMateria, obterNumeroArtigoNoIndice, ordenarCapitulosDireitoAdministrativo };', contexto);
const api = contexto.__hubApi;

let falhas = 0;
function check(desc, cond) {
  if (cond) console.log('✓ ' + desc);
  else { console.error('✗ ' + desc); falhas += 1; }
}

const artigos = [
  {
    titulo: '01 - inteligencia artificial',
    tipo: 'conceito',
    sourcePath: '3 - Materias/Atualidades/01 - inteligencia artificial.md',
    categoria: 'Atualidades'
  },
  {
    titulo: 'atualidades',
    tipo: 'hub',
    sourcePath: '3 - Materias/Atualidades/atualidades.md',
    categoria: 'Atualidades'
  },
  {
    titulo: 'direito-constitucional',
    tipo: '',
    sourcePath: '3 - Materias/Direito Constitucional/direito-constitucional.md',
    categoria: 'Direito Constitucional'
  },
  {
    titulo: '01 - principios fundamentais',
    tipo: 'conceito',
    sourcePath: '3 - Materias/Direito Constitucional/01 - principios fundamentais.md',
    categoria: 'Direito Constitucional'
  }
];

const atualidades = artigos.filter(a => a.categoria === 'Atualidades').sort(api.ordenarArtigosDaMateria);
check('hub explícito de Atualidades fica em primeiro', atualidades[0].tipo === 'hub');

const constitucional = artigos.filter(a => a.categoria === 'Direito Constitucional').sort(api.ordenarArtigosDaMateria);
check('hub legado pelo nome da matéria fica em primeiro', constitucional[0].titulo === 'direito-constitucional');

check('type hub é reconhecido independentemente de nome numerado', api.ehResumoPrincipalDaMateria({
  tipo: 'HUB',
  sourcePath: '3 - Materias/Teste/99 - qualquer nome.md',
  categoria: 'Teste'
}));

check('Direito Constitucional exibe 00 no resumo e 01 em Princípios Fundamentais',
  constitucional.map(artigo => api.obterNumeroArtigoNoIndice(artigo)).join(',') === '00,01');
check('índice preserva o número editorial mesmo em uma lista filtrada',
  api.obterNumeroArtigoNoIndice({sourcePath:'3 - Materias/Teste/27 - recorte.md'}) === '27');
check('hub indicado pelo catálogo recebe 00',
  api.obterNumeroArtigoNoIndice({ sourcePath:'3 - Materias/Teste/visao-geral.md' },
    '3 - Materias/Teste/visao-geral.md') === '00');
check('título sem prefixo fica sem número',
  api.obterNumeroArtigoNoIndice({titulo:'lembretes'}) === '');

const pastaAdministrativo = '3 - Materias/Direito Administrativo';
const capitulos = fs.readdirSync(path.join(rootDir, pastaAdministrativo))
  .filter(file => /^\d+ - /.test(file))
  .map(file => ({
    sourcePath: pastaAdministrativo + '/' + file,
    articleId: fs.readFileSync(path.join(rootDir, pastaAdministrativo, file), 'utf8')
      .match(/^articleId: "?([^"\r\n]+)/m)?.[1]
  }));
const ordemEbook = [12, 1, 2, 13, 14, 3, 4, 27, 15, 16, 17, 18, 5, 19, 20, 21, 22, 23, 24, 6, 10, 9, 25, 26, 7, 11, 8];
const ordemPublicada = capitulos.filter(artigo => api.obterNumeroArtigoNoIndice(artigo))
  .sort(api.ordenarCapitulosDireitoAdministrativo);
check('Direito Administrativo segue os 27 capítulos do sumário do EPUB',
  ordemPublicada.slice(0, 27).every((artigo, i) =>
    Number(path.basename(artigo.sourcePath).slice(0, 2)) === ordemEbook[i] &&
    Number(api.obterNumeroArtigoNoIndice(artigo)) === i + 1) && ordemPublicada.length >= 27);
const recorte = [ordemPublicada[7], ordemPublicada[1]].sort(api.ordenarCapitulosDireitoAdministrativo);
check('um recorte de edital mantém os números 02 e 08 do EPUB',
  recorte.map(artigo => api.obterNumeroArtigoNoIndice(artigo)).join(',') === '02,08');

const lazy = fs.readFileSync(path.join(rootDir, 'web/02a-lazy-data.js'), 'utf8');
check('camada lazy preserva metadado tipo', /tipo:\s*String\(/.test(lazy));
check('camada lazy reutiliza ordenação canônica', /sort\(ordenarArtigosDaMateria\)/.test(lazy));
check('camada lazy aguarda navegação inicial', /await tratarHashNavegacao\(\)/.test(lazy));

if (falhas > 0) process.exit(1);
console.log('SUCESSO: hubs permanecem no topo também no carregamento lazy.');
