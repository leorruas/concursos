import fs from 'fs';
import vm from 'vm';
import assert from 'node:assert/strict';
import { destinosObrigatoriosIngestao } from './ingestion-propagation-policy.js';

const codigo = fs.readFileSync(new URL('./validate-change-contract.js', import.meta.url), 'utf8');
const inicio = codigo.indexOf('function validarPropagacaoIngestao(');
const fim = codigo.indexOf("\nconsole.log('=== CONTRATO DE MUDANÇA", inicio);
const sourcePath = '00 - Desempenho/Simulados/Simulado-fixture.md';
function executar({concurso = 'dataprev-2026', parcial = false, omit = null, registro = true, status = 'M'} = {}) {
  const falhas = [];
  const provas = registro ? [{sourcePath, concursoId:concurso, resultado:{acertos:1}, comparabilidadeEdital:{status:'alta'}}] : [];
  const paths = destinosObrigatoriosIngestao({classification:'simulado', concurso, sourcePath}).filter(p=>p!==omit);
  const ctx = {
    destinosObrigatoriosIngestao, fail:m=>falhas.push(m), ok:()=>{},
    exists:()=>true, read:p=>p==='data/provas.json' ? JSON.stringify(provas) : '',
    parseFrontmatter:()=>({concurso_referencia:concurso}),
    isSimuladoParcialRascunho:()=>parcial,
    exigirMudancas:(ps,set)=>ps.filter(p=>!set.has(p)).forEach(p=>falhas.push(p))
  };
  vm.createContext(ctx);
  vm.runInContext(codigo.slice(inicio,fim),ctx);
  const changes = paths.map(p=>({path:p,status:p===sourcePath?status:'M'}));
  ctx.validarPropagacaoIngestao(changes,new Set(paths));
  return falhas;
}
assert.deepEqual(executar(), [], 'Conclusão/edição completa deve passar');
assert.ok(executar({omit:'data/provas.json'}).length, 'Conclusão de rascunho sem JSON no diff deve falhar');
assert.ok(executar({registro:false}).length, 'Presença do arquivo sem registro não basta');
assert.ok(executar({omit:'00 - Desempenho/Provas/00 - Desempenho por edital e prova.md'}).length, 'Hub deve entrar junto');
assert.deepEqual(executar({parcial:true,omit:'data/provas.json',registro:false}), [], 'Rascunho parcial mantém exceção');
assert.deepEqual(executar({concurso:'camara-2026'}), [], 'Câmara completa não exige Dataprev');
assert.deepEqual(executar({status:'A'}), [], 'Novo simulado usa o mesmo contrato');
console.log('SUCESSO: simulado novo, concluído e atualizado exige propagação rastreável do concurso correto.');
