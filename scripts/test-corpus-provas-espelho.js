#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const raiz = path.resolve(import.meta.dirname, '..');
const corpus = JSON.parse(fs.readFileSync(path.join(raiz, 'data/corpus-provas-espelho.json'), 'utf8'));
const indice = JSON.parse(fs.readFileSync(path.join(raiz, 'data/corpus-itens.json'), 'utf8'));
assert.equal(corpus.concursoAlvo, 'cgu-2026');
assert.equal(indice.concursoAlvo, 'cgu-2026');
assert.ok(Array.isArray(corpus.provas) && corpus.provas.length >= 3);
assert.ok(Array.isArray(indice.itens));
const ids = new Set();
const pastas = new Set();
const porId = new Map();
for (const prova of corpus.provas) {
  assert.ok(!ids.has(prova.id), 'ID duplicado: ' + prova.id);
  ids.add(prova.id);
  porId.set(prova.id, prova);
  assert.ok(['certo_errado', 'multipla_escolha_5', 'gabarito'].includes(prova.formato));
  assert.ok(['principal_conteudo','secundaria_conteudo','principal_formato_potencial','secundaria_formato','gabarito'].includes(prova.papel));
  assert.match(prova.edital, /^https:\/\//);
  if (prova.pdf?.archivarNoGitHub) {
    assert.match(prova.pdf.url, /^https:\/\//);
    assert.match(prova.pdf.repoPath, /^assets\/provas-espelho\/[a-z0-9._-]+\.pdf$/);
    assert.ok(!pastas.has(prova.pdf.repoPath), 'PDF em caminhos duplicados');
    pastas.add(prova.pdf.repoPath);
  }
}
assert.equal(porId.get('tce-mg-2026-cebraspe-contabeis')?.formato, 'multipla_escolha_5',
  'TCE/MG Cebraspe não pode ser rotulado como C/E');
assert.equal(porId.get('cge-al-2026-cebraspe-controle-interno')?.formato, 'certo_errado');
assert.equal(porId.get('cgu-2022-fgv-auditoria-especificos-t1')?.formato, 'multipla_escolha_5');
for (const item of indice.itens) {
  assert.ok(porId.has(item.idProva), 'Item com idProva inexistente: ' + item.idProva);
  assert.ok(Number.isInteger(item.numeroOriginal) && item.numeroOriginal > 0);
  assert.ok(['P1','P2','P3'].includes(item.blocoCGU));
  assert.ok(item.tema && item.mecanismo && item.evidenciaFonte);
  assert.ok(item.situacaoGabarito && item.validadeNormativa);
  if (item.gabaritoDefinitivo != null) {
    assert.equal(item.situacaoGabarito, 'definitivo_conferido',
      'Resposta não deve ser atribuída a gabarito preliminar');
  }
}
const verificadosPath = path.join(raiz, 'data/corpus-pdfs-verificados.json');
if (fs.existsSync(verificadosPath)) {
  const lista = JSON.parse(fs.readFileSync(verificadosPath, 'utf8'));
  for (const entry of lista.arquivos) {
    if (entry.situacao === 'falha_download') continue;
    const prova = porId.get(entry.id);
    assert.ok(prova?.pdf?.repoPath === entry.pdfPath);
    const full = path.join(raiz, entry.pdfPath);
    assert.ok(fs.existsSync(full), 'PDF verificado mas inexistente: ' + entry.pdfPath);
    const bytes = fs.readFileSync(full);
    assert.equal(bytes.subarray(0,5).toString(), '%PDF-');
    assert.equal(bytes.length, entry.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.sha256);
  }
}
console.log('SUCESSO: corpus, itens e PDFs arquivados (quando presentes) consistentes.');
