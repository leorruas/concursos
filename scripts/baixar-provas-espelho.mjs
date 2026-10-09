#!/usr/bin/env node
/**
 * Arquivo de provas-espelho oficiais.
 * Executar: node scripts/baixar-provas-espelho.mjs
 * Os PDFs são fontes históricas: o script NÃO extrai, reproduz nem publica seus enunciados.
 * Registro de integridade: data/corpus-pdfs-verificados.json.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arquivoCatalogo = path.join(root, 'data/corpus-provas-espelho.json');
const catalogo = JSON.parse(fs.readFileSync(arquivoCatalogo, 'utf8'));
const maxBytes = 16 * 1024 * 1024;
const entradas = [];

function assegurarDestino(rel) {
  if (!/^assets\/provas-espelho\/[a-z0-9][a-z0-9._-]*\.pdf$/.test(rel)) {
    throw new Error('Caminho de fonte inválido: ' + rel);
  }
  const absoluto = path.resolve(root, rel);
  if (!absoluto.startsWith(root + path.sep)) throw new Error('Destino fora do repositório');
  return absoluto;
}
function hash(bytes) { return createHash('sha256').update(bytes).digest('hex'); }
function validarPdf(bytes, id) {
  if (bytes.length < 400 || bytes.length > maxBytes) throw new Error(id + ': tamanho PDF inválido');
  if (bytes.subarray(0, 5).toString('ascii') !== '%PDF-') throw new Error(id + ': arquivo não é PDF');
}

async function baixar(url) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(80000),
    headers: { 'User-Agent': 'ConcursosCorpusBot/1.0 (arquivo de estudo; repositorio GitHub)' },
    redirect: 'follow'
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const len = Number(res.headers.get('content-length') || 0);
  if (len > maxBytes) throw new Error('PDF excede 16 MiB');
  return Buffer.from(await res.arrayBuffer());
}

for (const fonte of catalogo.provas) {
  const pdf = fonte.pdf;
  if (!pdf?.archivarNoGitHub) continue;
  if (!pdf.url || !pdf.repoPath || !/^https:\/\//.test(pdf.url)) {
    throw new Error(fonte.id + ': fonte arquivável sem URL https e caminho');
  }
  const dest = assegurarDestino(pdf.repoPath);
  let bytes;
  let situacao = 'arquivado';
  try {
    if (fs.existsSync(dest)) {
      bytes = fs.readFileSync(dest);
      validarPdf(bytes, fonte.id);
      situacao = 'ja_existente';
    } else {
      let erro;
      for (let tentativa = 1; tentativa <= 2; tentativa++) {
        try { bytes = await baixar(pdf.url); validarPdf(bytes, fonte.id); break; }
        catch (e) { erro = e; console.warn(fonte.id, 'tentativa', tentativa, String(e.message).slice(0, 120)); }
      }
      if (!bytes) throw erro;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, bytes);
    }
    const record = {
      id: fonte.id, pdfPath: pdf.repoPath, origem: pdf.url,
      bytes: bytes.length, sha256: hash(bytes), situacao
    };
    entradas.push(record);
    console.log('PDF verificado:', fonte.id, bytes.length, 'bytes', record.sha256);
  } catch (err) {
    entradas.push({id: fonte.id, origem: pdf.url, pdfPath: pdf.repoPath, situacao: 'falha_download',
      erro: String(err.message).slice(0, 200)});
    console.error('PDF pendente:', fonte.id, String(err.message));
  }
}
const saida = path.join(root, 'data/corpus-pdfs-verificados.json');
fs.writeFileSync(saida, JSON.stringify({
  versao: 1,
  comentario: 'PDF confirmado apenas quando pdfPath existe no GitHub e o sha256 confere; falha_download não é acervo.',
  arquivos: entradas
}, null, 2) + '\n');
const ok = entradas.filter(x => x.sha256).length;
console.log('Arquivamento concluído:', ok, '/', entradas.length, 'PDFs verificados.');
if (!ok) { process.exitCode = 1; }
