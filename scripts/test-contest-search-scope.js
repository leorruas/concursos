import { articleInventory, resolveCatalog } from './article-identity.js';
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const catalogo = resolveCatalog(JSON.parse(fs.readFileSync(new URL('../data/catalogo-materias-por-concurso.json', import.meta.url))), articleInventory(new URL('..', import.meta.url).pathname));
const codigoBusca = fs.readFileSync(new URL('../web/06-search.js', import.meta.url), 'utf8');
const contexto = {
    console,
    dadosCatalogoMaterias: catalogo,
    dadosEditalEstrategico: [
        {concursoId:"dataprev-2026",notaPath:"3 - Materias/Comunicacao/01 - comunicacao organizacional.md",coberturaNota:"integral"},
        {concursoId:"cgu-2026",notaPath:"3 - Materias/Comunicacao/01 - comunicacao organizacional.md",coberturaNota:"parcial"}
    ],
    todosOsArtigos: [{sourcePath:"3 - Materias/Comunicacao/01 - comunicacao organizacional.md"}],
    concursoSelecionadoId: 'cgu-2026',
    modoBibliotecaCompleta: false,
    obterProgramaSelecionado() {
        if (contexto.modoBibliotecaCompleta) return null;
        return contexto.dadosCatalogoMaterias.contests.find(item => item.concursoId === contexto.concursoSelecionadoId);
    }
};
vm.createContext(contexto);
// Executa helpers reais e captura o escopo antes da avaliação do ranking.
vm.runInContext(codigoBusca + '\nglobalThis.__api = { obterCaminhosPermitidosBusca, obterItensEditalBusca, calcularAssinaturaIndiceBusca };', contexto);
const get = () => contexto.__api.obterCaminhosPermitidosBusca();
const cgu = get();
assert.ok(cgu && cgu.size > 20, 'CGU deve ter artigos de conteúdo e apoio');
assert.ok(cgu.has('3 - Materias/Avaliacao de Politicas Publicas/01 - teoria da mudanca.md'));
assert.ok(!cgu.has('3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa.md'));
const assinaturaCgu = contexto.__api.calcularAssinaturaIndiceBusca();
contexto.concursoSelecionadoId = 'dataprev-2026';
assert.notEqual(contexto.__api.calcularAssinaturaIndiceBusca(), assinaturaCgu, 'trocar concurso invalida metadados da busca');
assert.equal(contexto.__api.obterItensEditalBusca({sourcePath:'3 - Materias/Comunicacao/01 - comunicacao organizacional.md'}).length,1, 'Dataprev usa somente metadados FGV');
const dp = get();
assert.ok(dp.has('3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa.md'));
assert.ok(!dp.has('3 - Materias/Avaliacao de Politicas Publicas/01 - teoria da mudanca.md'));
contexto.concursoSelecionadoId = 'camara-2026';
const cam = get();
assert.ok(cam.has('3 - Materias/Comunicacao/01 - comunicacao organizacional.md'));
assert.equal(contexto.__api.obterItensEditalBusca({sourcePath:'3 - Materias/Comunicacao/01 - comunicacao organizacional.md'}).length,0, 'Câmara não herda metadados dos outros concursos');
assert.ok(!cam.has('3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa.md'));
vm.runInContext('buscaGlobalAtiva = true', contexto);
assert.equal(get(), null, 'modo todo o vault desliga filtro');
assert.equal(contexto.__api.obterItensEditalBusca({sourcePath:'3 - Materias/Comunicacao/01 - comunicacao organizacional.md'}).length,2, 'busca global permite metadados dos dois concursos');
vm.runInContext('buscaGlobalAtiva = false', contexto);
contexto.modoBibliotecaCompleta = true;
assert.equal(get(), null, 'biblioteca completa não impõe filtro de concurso');
assert.match(codigoBusca, /\.filter\(entrada => !permitidos \|\| permitidos\.has\(entrada\.artigo\.sourcePath\)\)/);
assert.match(codigoBusca, /data-busca-global/);
console.log('SUCESSO: busca CGU/Dataprev/Câmara contextual, artigos compartilhados e busca geral preservados.');
