---
title: "CGU 2026: proposta de isolamento editorial dos artigos"
type: "governanca-operacional"
status: "proposta"
created: 2026-11-14
---

# CGU 2026: proposta de isolamento editorial dos artigos

## Problema confirmado

O catálogo v2 `data/catalogo-materias-por-concurso.json` vincula artigos por `articleId` a concursos distintos. A arquitetura documentada em `AGENTS.md` permite esse reaproveitamento. A revisão didática CGU exige identidade, conteúdo, exemplos e vínculos próprios por concurso. Antes de alterar textos compartilhados, é necessário separar suas referências para não modificar a trilha da Câmara.

## Contrato mínimo proposto

1. Preservar todos os arquivos, `articleId`, headings, caminhos e vínculos existentes da Câmara. Nenhuma migração destrutiva.
2. Para cada tema CGU prioritário, conferir o item do edital oficial, o catálogo atual e o artigo físico correspondente. Criar uma nota CGU autônoma apenas se não existir equivalente exclusivo CGU. Atribuir `articleId` novo e estável, frontmatter e `contestId: cgu-2026` se o contrato de metadados aceitar esse campo. Não atribuir `articleId` da Câmara à nova nota.
3. Atualizar exclusivamente a associação CGU no catálogo v2, preservando as associações da Câmara. Quando um conceito geral for compartilhado em glossário ou flashcards, manter vínculos explícitos e independentes para cada artigo/concurso; não substituir o vínculo da Câmara.
4. Adaptar o conteúdo CGU ao Edital 1/2026, Cargo 1, Auditoria, e à banca Cebraspe, com cotejo das retificações e normas oficiais. O edital e as normas precisam de conferência atual antes de homologar cada artigo.
5. Antes da primeira migração, identificar os scripts que leem o catálogo e validam `articleId`, frontmatter, headings, flashcards e glossário. Acrescentar testes para impedir colisões de identidade e referências cruzadas involuntárias, sem impor restrição retroativa que quebre o acervo existente.
6. Migrar por artigo em PR editorial CGU independente. Confirmar CI no SHA do PR e main após merge. Não tocar em questões ou dados pessoais.

## Primeira pendência verificável

Inventariar a interseção dos `articleIds` de `cgu-2026` com `camara-2026` no catálogo v2; localizar caminhos físicos e consumidores do catálogo; definir pasta e frontmatter CGU a partir dos contratos reais. Em seguida, escolher um artigo do bloco P3.2 ou P3.3 para a primeira separação e revisão. Até isso ocorrer, **não editar nenhum artigo compartilhado**.

Esta proposta não representa migração concluída, validação de CI nem confirmação de vigência normativa.
