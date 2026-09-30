import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const codigo = fs.readFileSync(path.join(rootDir, 'web/04-markdown.js'), 'utf8');
const contexto = { console };
vm.createContext(contexto);
vm.runInContext(codigo, contexto, { filename: 'web/04-markdown.js' });

vm.runInContext(`globalThis.__mathApi = {
  protegerBlocosMatematicosMarkdown,
  restaurarBlocosMatematicosHtml
};`, contexto);

const api = contexto.__mathApi;
let falhas = 0;

function check(desc, cond) {
  if (cond) console.log('✓ ' + desc);
  else { console.error('✗ ' + desc); falhas += 1; }
}

const origem = [
  'Considere:',
  '',
  '$$',
  '\\exists x\\,(A(x) \\land \\neg B(x))',
  '$$',
  '',
  'Depois.'
].join('\n');

const protegido = api.protegerBlocosMatematicosMarkdown(origem);
check('captura um bloco matemático', protegido.blocos.length === 1);
check('preserva a fórmula sem delimitadores', protegido.blocos[0] === '\\exists x\\,(A(x) \\land \\neg B(x))');
check('retira $$ do markdown antes do marked', !protegido.markdown.includes('$$'));
check('insere token estável no lugar do bloco', protegido.markdown.includes('MATHBLOCKTOKEN0END'));

const htmlSimulado = '<p>Considere:</p>\n<p>MATHBLOCKTOKEN0END</p>\n<p>Depois.</p>';
const restaurado = api.restaurarBlocosMatematicosHtml(htmlSimulado, protegido.blocos);
const matchBloco = restaurado.match(/<div class="math-display">([\s\S]*?)<\/div>/);
check('restaura bloco matemático em nó próprio', Boolean(matchBloco));
check('restaura delimitador de abertura $', Boolean(matchBloco && matchBloco[1].startsWith('$')));
check('restaura delimitador de fechamento $', Boolean(matchBloco && matchBloco[1].endsWith('$')));
check('preserva a fórmula dentro do bloco restaurado', Boolean(matchBloco && matchBloco[1].includes('\\exists x\\,(A(x) \\land \\neg B(x))')));
check('não introduz <br> dentro do bloco matemático', !restaurado.match(/math-display[^]*?<br[^>]*>/));

const comCodigo = [
  '```text',
  '$$',
  'nao deve virar formula',
  '$$',
  '```'
].join('\n');
const protegidoCodigo = api.protegerBlocosMatematicosMarkdown(comCodigo);
check('não altera $$ dentro de bloco de código', protegidoCodigo.blocos.length === 0 && protegidoCodigo.markdown.includes('nao deve virar formula'));

if (falhas > 0) process.exit(1);
console.log('SUCESSO: blocos matemáticos preservados antes do Markdown e restaurados para o KaTeX.');
