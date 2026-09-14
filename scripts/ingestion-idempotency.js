import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export function normalizarConteudoIngestao(content) {
  return String(content || '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

export function calcularFingerprintIngestao({ content, concurso = '' }) {
  const payload = JSON.stringify({
    content: normalizarConteudoIngestao(content),
    concurso: String(concurso || '').trim().toLowerCase()
  });
  return crypto.createHash('sha256').update(payload, 'utf8').digest('hex');
}

export function carregarLedger(ledgerPath) {
  if (!fs.existsSync(ledgerPath)) return [];
  const raw = fs.readFileSync(ledgerPath, 'utf8').trim();
  if (!raw) return [];
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`Ledger de ingestão inválido: esperado array em ${ledgerPath}`);
  }
  return parsed;
}

export function localizarFingerprint(ledger, fingerprint) {
  return ledger.find((entry) => entry.fingerprint === fingerprint) || null;
}

export function registrarFingerprintAtomico(ledgerPath, entry) {
  const ledger = carregarLedger(ledgerPath);
  if (localizarFingerprint(ledger, entry.fingerprint)) {
    return { added: false, ledger };
  }

  const next = [...ledger, entry];
  const parent = path.dirname(ledgerPath);
  fs.mkdirSync(parent, { recursive: true });
  const tempPath = `${ledgerPath}.tmp-${process.pid}-${Date.now()}`;
  fs.writeFileSync(tempPath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  fs.renameSync(tempPath, ledgerPath);
  return { added: true, ledger: next };
}
