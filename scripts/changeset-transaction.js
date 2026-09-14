import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export function sha256Text(content) {
  return crypto.createHash('sha256').update(String(content), 'utf8').digest('hex');
}

export function fileSha256(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return sha256Text(fs.readFileSync(filePath, 'utf8'));
}

function normalizarPath(relPath) {
  return String(relPath || '').replace(/\\/g, '/').replace(/^\.\//, '');
}

export function validarOperacao(rootDir, operation) {
  const relPath = normalizarPath(operation.path);
  if (!relPath || path.isAbsolute(relPath) || relPath.includes('../')) {
    throw new Error(`Caminho inválido no change set: ${operation.path}`);
  }

  const protegidos = [
    '2 - Editais/',
    '3 - Materias/Comunicacao/referencias/',
    '.git/'
  ];
  if (protegidos.some((prefix) => relPath.startsWith(prefix))) {
    throw new Error(`Change set tentou alterar fonte/camada protegida: ${relPath}`);
  }

  const op = operation.op;
  if (!['create', 'replace', 'append', 'prepend', 'delete'].includes(op)) {
    throw new Error(`Operação inválida em ${relPath}: ${op}`);
  }

  if (relPath === 'log.md' && !['append', 'prepend'].includes(op)) {
    throw new Error('log.md é append-only/prepend-only: replace/delete/create são proibidos pelo aplicador transacional.');
  }

  const fullPath = path.join(rootDir, relPath);
  const exists = fs.existsSync(fullPath);
  const currentHash = exists ? fileSha256(fullPath) : null;

  if (op === 'create') {
    if (exists) throw new Error(`Precondição falhou: create exige arquivo ausente — ${relPath}`);
  } else {
    if (!exists) throw new Error(`Precondição falhou: ${op} exige arquivo existente — ${relPath}`);
    if (!operation.expectedSha256) {
      throw new Error(`Precondição ausente: ${op} exige expectedSha256 — ${relPath}`);
    }
    if (currentHash !== operation.expectedSha256) {
      throw new Error(`Conflito de concorrência em ${relPath}: hash atual ${currentHash}, esperado ${operation.expectedSha256}. Nenhum arquivo deve ser gravado.`);
    }
  }

  if (['create', 'replace', 'append', 'prepend'].includes(op) && typeof operation.content !== 'string') {
    throw new Error(`Operação ${op} exige content textual — ${relPath}`);
  }

  return { ...operation, path: relPath, fullPath, currentHash };
}

export function aplicarChangeSet(rootDir, manifest, { afterApply = null } = {}) {
  if (!manifest || manifest.version !== 1 || !Array.isArray(manifest.operations)) {
    throw new Error('Change set inválido: esperado { version: 1, operations: [...] }.');
  }
  if (manifest.operations.length === 0) {
    throw new Error('Change set vazio: nenhuma operação declarada.');
  }

  const paths = manifest.operations.map((op) => normalizarPath(op.path));
  if (new Set(paths).size !== paths.length) {
    throw new Error('Change set contém mais de uma operação para o mesmo caminho. Consolide antes de aplicar.');
  }

  // Fase 1: validar TODAS as precondições antes da primeira escrita.
  const validated = manifest.operations.map((op) => validarOperacao(rootDir, op));
  const snapshots = new Map();
  const changed = [];

  try {
    // Fase 2: gravar como uma transação lógica; qualquer falha restaura tudo.
    for (const operation of validated) {
      const { fullPath, path: relPath, op, content } = operation;
      const existed = fs.existsSync(fullPath);
      const before = existed ? fs.readFileSync(fullPath, 'utf8') : null;
      snapshots.set(fullPath, before);

      if (op === 'delete') {
        fs.unlinkSync(fullPath);
      } else {
        let next;
        if (op === 'create' || op === 'replace') next = content;
        else if (op === 'append') next = before + content;
        else if (op === 'prepend') next = content + before;

        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
        const tempPath = `${fullPath}.tmp-${process.pid}-${Date.now()}`;
        fs.writeFileSync(tempPath, next, 'utf8');
        fs.renameSync(tempPath, fullPath);
      }
      changed.push(relPath);
    }

    if (afterApply) afterApply(changed);
    return { changed };
  } catch (error) {
    // Rollback total do conjunto já tocado.
    for (const [fullPath, before] of snapshots.entries()) {
      if (before === null) {
        if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
      } else {
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
        fs.writeFileSync(fullPath, before, 'utf8');
      }
    }
    throw error;
  }
}
