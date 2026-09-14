---
title: "Contrato de publicação — GitHub Pages"
type: "governanca-operacional"
status: "ativo"
created: 2026-09-14
updated: 2026-09-14
---

# Contrato de publicação — GitHub Pages

Este documento define quando uma criação ou alteração de conteúdo público pode ser considerada concluída. O repositório GitHub é a fonte de conteúdo; o GitHub Pages é a superfície pública de estudo. **Commit realizado não é sinônimo de publicação concluída.**

## Escopo público

Todo Markdown aceito pelas regras de visibilidade de `scripts/build-site.js` deve ser representado no `manifest.json`, no `search-index.json` e no artefato `_site/`. Em especial, notas sob `3 - Materias/` e materiais públicos sob `00 - Desempenho/` devem ser publicados automaticamente, salvo exclusão explícita e documentada na regra canônica de visibilidade.

Não criar listas paralelas manuais para decidir quais artigos de matéria aparecem no site. A fonte da verdade deve continuar sendo a árvore pública do vault + a função canônica de visibilidade do build.

## Definição de pronto para artigo público

Uma criação ou alteração em `3 - Materias/` só pode ser considerada concluída quando as etapas aplicáveis abaixo estiverem satisfeitas:

1. o arquivo existe no branch principal com caminho e frontmatter válidos;
2. quando for página nova, `index.md` foi atualizado se a governança exigir indexação;
3. o build encontrou o arquivo e o incluiu no `manifest.json`;
4. o `search-index.json` contém o mesmo `sourcePath`;
5. a auditoria de privacidade do `_site/` passou;
6. o workflow `Publicar no GitHub Pages` terminou com sucesso;
7. o `manifest.json` **do Pages ao vivo** contém exatamente o catálogo que acabou de ser construído.

O agente não deve afirmar “publicado”, “já aparece no site” ou equivalente antes da etapa 7. Se apenas o commit estiver concluído, dizer explicitamente que o conteúdo está no repositório e que a publicação ainda não foi confirmada.

## Verificação automática

O workflow de Pages deve executar, depois de `actions/deploy-pages`, uma verificação do catálogo ao vivo. `scripts/verify-live-pages.js` compara `_site/manifest.json` com o `manifest.json` servido pelo Pages e falha se houver artigo faltando ou catálogo divergente.

Essa verificação é complementar às validações anteriores do build. O objetivo é detectar o caso em que o artefato está correto, mas a superfície ao vivo ainda não corresponde ao commit esperado.

## Muitos commits em sequência

O workflow usa concorrência com cancelamento do deploy anterior. Portanto, vários commits em sequência podem deixar temporariamente o Pages atrás do branch `main` enquanto o último deploy não termina.

Por isso:

- durante uma sequência longa de alterações, não verificar publicação a cada commit intermediário;
- ao encerrar um lote, verificar o **último** workflow de Pages correspondente ao estado final;
- não interpretar workflow cancelado por commit posterior como falha do conteúdo;
- não encerrar a tarefa afirmando que o site está sincronizado enquanto o último deploy estiver `queued`, `waiting` ou `in_progress`.

## Atualidades

As duas camadas públicas de Atualidades — fundamentos estáveis e snapshots conjunturais destinados a estudo — devem aparecer no Pages quando armazenadas sob `3 - Materias/Atualidades/`.

Um snapshot em `3 - Materias/Atualidades/Snapshots/` não é mero arquivo de bastidor: se foi criado como nota de estudo pública, deve integrar o manifesto, a busca e a navegação da disciplina. Se um snapshot for apenas fonte bruta ou material transitório, ele deve ser armazenado em camada não pública apropriada, e não em `3 - Materias/Atualidades/Snapshots/`.

Ao criar um fundamento ou snapshot público de Atualidades, o agente deve conferir no fechamento do lote se o arquivo está no catálogo ao vivo. A existência do arquivo no GitHub, isoladamente, não satisfaz esta regra.

## Diagnóstico quando um artigo não aparece

Seguir esta ordem, sem tentar corrigir conteúdo antes de localizar a camada da falha:

1. confirmar que o arquivo existe em `main`;
2. confirmar se o caminho é aceito por `isArquivoPublico()` em `scripts/build-site.js`;
3. confirmar presença no `_site/manifest.json` e `_site/search-index.json`;
4. verificar o resultado do workflow de Pages;
5. conferir o `manifest.json` servido pelo Pages ao vivo;
6. se o manifesto ao vivo contém o artigo mas a interface não o mostra, tratar como bug de categorização, navegação ou cliente — não como problema de publicação;
7. se o manifesto ao vivo não contém o artigo, tratar como problema de deploy/sincronização.

## Regra para agentes

Sempre que um agente criar ou mover uma página pública, deve considerar a publicação parte da mesma operação. Se perceber recorrência de arquivos presentes no repositório mas ausentes no Pages, não deve apenas republicar manualmente: deve fortalecer build, validação ou governança para impedir recorrência.
