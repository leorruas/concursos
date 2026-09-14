---
title: "Contrato transacional de mudanças"
type: "governanca-operacional"
status: "ativo"
created: 2026-09-14
updated: 2026-09-14
---

# Contrato transacional de mudanças

Este documento define como executar alterações que dependem de vários arquivos do vault. O objetivo é eliminar estados parciais, sobrescritas por concorrência e falsos sucessos em operações de propagação.

## Quando usar

Usar uma transação multi-arquivo quando a correção só estiver completa se vários arquivos permanecerem sincronizados. Casos prioritários: ingestão de questões e simulados; propagação entre `Avancos.md`, painéis globais e arquivos de projeto; atualizações de catálogo; operações que incluem `log.md`; e qualquer alteração em que um agente ou workflow paralelo possa modificar um dos mesmos arquivos durante a execução.

Mudanças locais e independentes em um único artigo não precisam ser artificialmente convertidas em change set.

## Regra de atomicidade

Uma operação multi-arquivo deve obedecer à lógica **tudo ou nada**. Antes da primeira gravação, o aplicador verifica as precondições de todos os arquivos. Se uma única precondição falhar, nenhum arquivo é modificado. Se uma validação posterior à escrita falhar, todos os arquivos tocados retornam ao estado anterior.

O mecanismo canônico é:

```bash
node scripts/apply-changeset.js --file caminho/change-set.json
```

A implementação vive em `scripts/changeset-transaction.js` e é coberta por `scripts/test-changeset-transaction.js`.

## Precondição por hash

Toda alteração de arquivo existente deve declarar `expectedSha256`. O hash representa a versão lida e aprovada pelo agente antes da edição. Se o arquivo mudar depois dessa leitura, a transação é abortada em vez de sobrescrever silenciosamente a alteração concorrente.

Exemplo:

```json
{
  "version": 1,
  "description": "Propagação de uma bateria de questões",
  "operations": [
    {
      "op": "replace",
      "path": "3 - Materias/Logica/Avancos.md",
      "expectedSha256": "...",
      "content": "conteúdo completo novo"
    }
  ]
}
```

Operações permitidas: `create`, `replace`, `append`, `prepend` e `delete`.

## Regra especial para log.md

`log.md` é histórico acumulativo. O aplicador proíbe `replace`, `delete` e `create` para esse arquivo. Apenas `append` ou `prepend` são aceitos, sempre com hash da versão integral atual como precondição.

Isso impede o erro de reconstruir `log.md` a partir de uma visualização truncada e apagar histórico anterior.

## Fontes protegidas

Change sets não podem alterar fontes brutas protegidas, incluindo `2 - Editais/` e referências imutáveis de Comunicação. A transação não é mecanismo para contornar as regras de proveniência do vault.

## Ingestão de questões

Para ingestões, `scripts/ingest-safe.js` é a porta canônica. O fluxo é:

```text
ingest-safe --dry-run
→ construir change set com todos os destinos obrigatórios
→ ingest-safe --apply --changeset <arquivo>
→ validar invariantes
→ commit
→ CI valida propagação
→ Pages confirma publicação quando houver conteúdo público
```

O change set deve declarar `ingestionFingerprint` igual ao fingerprint produzido no dry-run. `scripts/ingestion-propagation-policy.js` define o conjunto mínimo de arquivos exigido para baterias, simulados e teoria.

O próprio `ingest-safe.js` acrescenta à transação o registro em `data/ingestoes-processadas.json` e, quando a entrada é a inbox canônica, a limpeza de `00 inbox/00 ingestão.md`. Assim, dados, ledger e housekeeping são efetivados ou revertidos juntos.

## Critério de conclusão

Uma operação multi-arquivo só pode ser descrita como concluída quando:

1. todas as precondições de hash foram satisfeitas;
2. todas as operações previstas foram aplicadas;
3. as validações pós-escrita passaram;
4. o commit contém a propagação mínima exigida pelo tipo de mudança;
5. o CI passou pelo `validate-change-contract.js` e pelas invariantes globais;
6. quando houver conteúdo público, o contrato de publicação do GitHub Pages também foi satisfeito.

Se algum desses pontos estiver pendente, declarar o estado real em vez de anunciar conclusão.
