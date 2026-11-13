---
title: "CGU 2026: isolamento editorial dos artigos"
type: "planejamento"
status: "em-revisao"
created: 2026-11-13
updated: 2026-11-13
---

# CGU 2026: isolamento editorial dos artigos

## Problema confirmado

Na `main` consultada em 13/11/2026 (commit `c621ab34e25b05dc418549e545fef1020534c384`), `data/catalogo-materias-por-concurso.json` associa artigos canônicos tanto a `cgu-2026` quanto a `camara-2026`. Isso impede que a revisão de uma preparação seja independente da outra. O plano de matérias da CGU ainda recomenda compartilhar artigos canônicos entre matérias, mas essa orientação não deve ser aplicada **entre concursos diferentes**.

A CGU é a preparação para Auditor Federal de Finanças e Controle, especialidade Auditoria, banca Cebraspe, itens Certo/Errado, conforme `2 - Editais/CGU 2026 - Auditoria.md`. A matriz do edital e suas retificações precisam ser conferidas antes de cada novo artigo.

## Regra editorial

- Um artigo didático pertence a um concurso. CGU e Câmara não compartilham `articleId`, caminho, nota canônica nem referência do catálogo, mesmo quando tratam do mesmo conceito.
- É permitido compartilhar definições gerais de glossário e infraestrutura técnica se o esquema permitir vínculo inequívoco com o concurso e seu artigo específico. Nenhuma revisão CGU pode substituir vínculos da Câmara.
- Os 35 IDs compartilhados identificados na auditoria anterior são uma **fila de migração**, não autorização para duplicação automática. Recontar e identificar IDs na `main` antes de cada lote; um mesmo ID pode aparecer em várias matérias da CGU.
- Artigos existentes da Câmara e seus IDs permanecem intactos. Criar artigo CGU novo somente depois de verificar a pertinência no edital, se já existe artigo CGU próprio e as dependências de links, headings, catálogo, flashcards e glossário.
- Não editar bancos de questões, resultados pessoais nem dados privados; não modificar artigos da Câmara.
- Uma mudança de vínculo do catálogo deve ocorrer no mesmo PR que cria o novo artigo CGU, com `articleId` exclusivo, frontmatter, índice, hubs e referências coerentes. Não remover referência antiga antes de criar e validar sua substituição.

## Fila operacional por microfase

1. Inventariar as interseções de `articleIds` CGU × Câmara na `main` atual e mapear cada ID para caminho, matéria, unidade e subitem do edital. Conferir também dependências com Dataprev, mas priorizar isolamento CGU × Câmara.
2. Escolher **um** artigo compartilhado, priorizando uma matéria jurídica ou orçamentária. Confirmar o texto do edital e as fontes normativas primárias pertinentes.
3. Criar uma versão própria para CGU, em caminho/ID exclusivos, com caso concreto inicial, termos definidos, mecanismo, limites, exemplo, contraexemplo e cobrança Cebraspe. Preservar a versão da Câmara.
4. Ajustar catálogo e links da CGU, glossário/flashcards aplicáveis e navegação, sem alterar referências da Câmara. Validar IDs, links/âncoras, siglas, integridade pública e build. Conferir CI no HEAD do PR e só mesclar se estiver verde.
5. Recontar a interseção após o merge, registrar a próxima pendência e repetir em lotes pequenos até zerar os vínculos compartilhados.

## Critério de conclusão

O catálogo não contém IDs comuns entre `cgu-2026` e `camara-2026`; cada nota CGU possui caminho e ID próprios, com links e referências resolvidos; o site e os testes continuam válidos. A separação no catálogo é necessária, mas não suficiente: auditar também vínculos do glossário, flashcards e artigos/hubs. Não declarar isolamento concluído apenas por ausência de IDs duplicados.

## Estado

Proposta de arquitetura para PR próprio. Nenhum artigo nem banco de questões foi alterado nesta microfase. Próxima ação: inventário atualizado de IDs compartilhados e seleção de uma nota para migração editorial CGU.
