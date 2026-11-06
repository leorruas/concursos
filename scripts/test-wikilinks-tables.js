import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const codigo = fs.readFileSync(path.join(root, 'web/04-markdown.js'), 'utf8');
const navegacao = fs.readFileSync(path.join(root, 'web/03-article-navigation.js'), 'utf8');
const contexto = { console };
vm.createContext(contexto);
vm.runInContext(codigo, contexto, { filename: 'web/04-markdown.js' });
const escapar = vm.runInContext('escaparSeparadoresWikilinksEmTabelas', contexto);
let falhas = 0;
function check(desc, cond) {
    if (cond) console.log('OK: ' + desc);
    else { console.error('FALHA: ' + desc); falhas++; }
}
const caso = '| 01 | Conteúdo | [[3 - Materias/Teste/nota|Abrir artigo]] e [[outra#Secao|Trecho]] |';
const preparado = escapar(caso);
check('protege os dois pipes de rotulos dentro da tabela', preparado.includes('[[3 - Materias/Teste/nota\\|Abrir artigo]]') && preparado.includes('[[outra#Secao\\|Trecho]]'));
check('mantém apenas os separadores reais de coluna', (preparado.match(/(?<!\\)\|/g) || []).length === 4);
check('a proteção é idempotente', escapar(preparado) === preparado);
check('não modifica wikilink fora de tabela', escapar('Consulte [[caminho/nota|Rótulo]].') === 'Consulte [[caminho/nota|Rótulo]].');
check('aceita tabela sem barra vertical inicial', escapar('Conteúdo | [[nota|Rótulo]]').includes('[[nota\\|Rótulo]]'));
check('preserva links já escapados', escapar('| [[nota\\|Rótulo]] |') === '| [[nota\\|Rótulo]] |');
check('preserva tabela sem wikilinks', escapar('| A | B | C |') === '| A | B | C |');
const bloco = ['~~~md', '| [[nota|Exemplo literal]] |', '~~~', '| [[nota|Link real]] |'].join('\n');
const tratado = escapar(bloco);
check('ignora conteúdo de código cercado por ~~~', tratado.includes('| [[nota|Exemplo literal]] |'));
check('volta a proteger depois de bloco de código', tratado.includes('| [[nota\\|Link real]] |'));
const blocoCrases = [String.fromCharCode(96).repeat(3) + 'md', '| [[nota|Exemplo literal]] |', String.fromCharCode(96).repeat(3), '| [[nota|Link real]] |'].join('\n');
check('ignora conteúdo de código cercado por crases', escapar(blocoCrases).includes('| [[nota|Exemplo literal]] |'));
check('wikilinks são protegidos antes de marked.parse', navegacao.includes('marked.parse(escaparSeparadoresWikilinksEmTabelas(markdownLimpo))'));
check('leitor não interpreta cifras como fórmulas', !navegacao.includes('renderMathInElement('));
const hub = fs.readFileSync(path.join(root, '3 - Materias/Avaliacao de Politicas Publicas/avaliacao-de-politicas-publicas.md'), 'utf8');
check('tabela do hub corrigida na fonte', escapar(hub) === hub);
check('os links das unidades 01, 02 e 03 continuam no hub', ['01 - teoria da mudanca', '02 - implementacao de politicas publicas', '03 - monitoramento e avaliacao de politicas publicas'].every(nome => hub.includes(nome)));
if (falhas) process.exit(1);
console.log('SUCESSO: wikilinks do Obsidian preservados nas tabelas Markdown.');
