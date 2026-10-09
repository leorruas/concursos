import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(raiz, '_site');
const manifesto = JSON.parse(fs.readFileSync(path.join(site, 'manifest.json'), 'utf8'));
const indice = JSON.parse(fs.readFileSync(path.join(site, 'search-index.json'), 'utf8'));
const concursos = JSON.parse(fs.readFileSync(path.join(raiz, 'data/concursos.json'), 'utf8'));
const pathsPublicos = new Set(manifesto.map(item => item.sourcePath));
const pathsBusca = new Set(indice.map(item => item.sourcePath));

for (const item of manifesto.filter(item => item.sourcePath.startsWith('4 - Projetos/'))) {
    const conteudo = fs.readFileSync(path.join(raiz, item.sourcePath), 'utf8');
    assert.match(conteudo, /^public:\s*true\s*$/m, `${item.sourcePath}: falta opt-in`);
    assert.ok(pathsBusca.has(item.sourcePath), `${item.sourcePath}: faltando na busca`);
    assert.ok(fs.existsSync(path.join(site, item.sourcePath)), `${item.sourcePath}: arquivo não copiado`);
}
for (const concurso of concursos.filter(item => item.dashboardPath)) {
    assert.ok(pathsPublicos.has(concurso.dashboardPath), `${concurso.id}: dashboard não publicado`);
    assert.ok(pathsBusca.has(concurso.dashboardPath), `${concurso.id}: dashboard ausente da busca`);
}
for (const pathPrivado of [
    '4 - Projetos/dataprev-2026/00 Dashboard.md',
    '4 - Projetos/camara-2026/O que estudar.md',
    'me.md', 'AGENTS.md', 'index.md', 'log.md'
]) {
    assert.ok(!pathsPublicos.has(pathPrivado), `${pathPrivado}: vazamento no catálogo`);
    assert.ok(!fs.existsSync(path.join(site, pathPrivado)), `${pathPrivado}: vazamento de arquivo`);
}
assert.equal(manifesto.filter(x => x.sourcePath.startsWith('4 - Projetos/cgu-2026/')).length, 3,
    'Exatamente três notas CGU de projeto foram autorizadas');
const estrategiaCGU = '3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E.md';
assert.ok(pathsPublicos.has(estrategiaCGU), 'Estratégia CGU ausente da matéria canônica');
assert.ok(pathsBusca.has(estrategiaCGU), 'Estratégia CGU ausente da busca pública');
assert.ok(!pathsPublicos.has('4 - Projetos/cgu-2026/Estrategia.md'),
    'Estratégia duplicada na antiga pasta de projeto');
console.log('SUCESSO: dashboards públicos, índice de busca e privacidade dos projetos verificados.');
