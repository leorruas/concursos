---
title: "Orçamento Público: arquitetura editorial separada CGU e Câmara"
type: coordenacao-editorial
status: liberacao-controlada
created: 2026-11-17
updated: 2026-11-17
---

# Orçamento Público: arquitetura editorial CGU 2026 e Câmara 2026

## Estado e decisão de segurança

**Arquitetura documental implementada; migração dos artigos não concluída; liberadas apenas as frentes com propriedade de arquivos explicitamente definida.** Este documento não certifica qualquer novo artigo nem substitui os três arquivos de estado históricos da Câmara. O repositório já contém uma separação pontual entre `CGU 2026 - ppa ldo e loa.md` (`art-9dc8a6e2f31b47c0`) e `02 - ppa ldo e loa.md` (`art-c301f2c741504403`). O índice e o catálogo já refletem essa coexistência. Não deslocar ou sobrescrever nenhum dos dois.

A separação é **por concurso, identidade e ciclo de revisão**, preservando fontes comuns. Todo artigo novo ou derivado recebe `articleId` inédito, `concursoId` e `derivedFromArticleId` quando couber. O original mantém ID, caminho e aliases antigos, a menos que haja migração técnica comprovada das referências. A mera presença de artigo num catálogo não prova revisão ou certificação para aquele concurso.

## Caminhos e identificadores

- Hub histórico permanente: `3 - Materias/Orcamento Publico/orcamento-publico.md`, ID `art-61a554a75c574053`. É entrada geral e não deve ser duplicado nem renomeado.
- Conteúdo legado: `3 - Materias/Orcamento Publico/<arquivo atual>.md`, preservado até a conclusão da compatibilidade.
- Novas versões CGU: `3 - Materias/Orcamento Publico/CGU 2026 - <assunto>.md`. Manter a versão específica já existente no mesmo padrão.
- Novas versões Câmara: `3 - Materias/Orcamento Publico/Camara 2026 - <assunto>.md`; só criar quando a análise justificar desdobramento. As notas exclusivas 12–15 podem continuar em seu caminho atual, com vínculo exclusivo no catálogo, sem renomeação.
- Manter no catálogo v2 `subjectId: orcamento-publico` independente para cada `concursoId`. A ordem editorial das trilhas deve ser especificada de modo explícito nos respectivos roteiros, não deduzida de números de arquivo nem da ordem histórica de `articleIds`.
- Estados novos: `1 - Planejamento/CGU 2026 - Estado editorial Orcamento.md` e `1 - Planejamento/Camara 2026 - Estado editorial Orcamento por concurso.md`; estados A/B/C da Câmara permanecem como evidência histórica e não devem ser reclassificados automaticamente.

## Matriz de migração: 19 artigos históricos

A classificação abaixo indica a **decisão de arquitetura**, não certificação CGU. `Compartilhado: separar por versão` significa que a nota histórica ainda pode aparecer nos dois catálogos enquanto não existir a substituta com vínculo e referências reconciliados. Somente a trilha Câmara mantém a certificação histórica, sujeita à integridade do arquivo correspondente.

| Arquivo histórico | articleId legado | Destino de arquitetura |
| :--- | :--- | :--- |
| 01: orçamento público e ciclo orçamentário | `art-f6cfe9fbcc764554` | Compartilhado: separar por versão |
| 02: PPA, LDO e LOA | `art-c301f2c741504403` | Câmara legado; CGU já possui `art-9dc8a6e2f31b47c0` |
| 02a: esferas da LOA e estatais | `art-74d90e9fa1b3452c` | Compartilhado: separar por versão |
| 03: princípios orçamentários | `art-a2f47c0d6e184e93` | Compartilhado: separar por versão |
| 04: classificações de receita e despesa | `art-d8b1c5e6037249fa` | Compartilhado: separar por versão |
| 04a: classificação da receita | `art-f13b65a28d8c4e91` | Compartilhado: separar por versão |
| 04b: classificação da despesa | `art-28b3d9ef86aa4510` | Compartilhado: separar por versão |
| 05: créditos adicionais | `art-87b69e1d4ac54f20` | Compartilhado: separar por versão |
| 05a: emendas parlamentares | `art-715e2d16a93446cb` | Compartilhado: separar por versão, conforme aderência CGU |
| 06: programação e contingenciamento | `art-0fb9b88e4d6c4151` | Compartilhado: separar por versão |
| 07: receitas públicas | `art-4677cfa327ce43bb` | Compartilhado: separar por versão |
| 08: despesas públicas | `art-67167e9c18284c4c` | Compartilhado: separar por versão |
| 09: restos a pagar, DEA e suprimento | `art-6e4e79c7f4bb4aa3` | Compartilhado: separar por versão |
| 10: Conta Única e execução | `art-743d234d819842d1` | Compartilhado: separar por versão |
| 11: responsabilidade fiscal | `art-91ab320cdfb64b8a` | Compartilhado: separar por versão |
| 12: elaboração da proposta | `art-4be219d8f750ac63` | Câmara exclusiva; manter legado |
| 13: tramitação legislativa | `art-d8f21b70c49e563a` | Câmara exclusiva; manter legado |
| 14: Comissão Mista de Orçamento | `art-c917e4a2d63b508f` | Câmara exclusiva; manter legado |
| 15: emendas, deliberação e rastreabilidade | `art-9d42c1f68a7be053` | Câmara exclusiva; manter legado |

A decisão sobre a versão CGU de 05a depende de confronto individual com o edital. Não transportar automaticamente conteúdo legislativo da Câmara para a CGU. A CGU já possui outros artigos específicos no catálogo, que precisam ser inventariados e verificados antes de qualquer remoção de IDs antigos.

## Matriz de propriedade

| Dono | Pode modificar | Não pode modificar |
| :--- | :--- | :--- |
| Arquitetura (exclusivo) | `AGENTS.md`, `index.md`, hub, catálogo v2, documentos de coordenação, definições de trilha e manifesto EPUB | Auditoria integral jurídica/didática dos artigos das frentes |
| CGU (exclusivo) | Artigos novos `CGU 2026 - *.md`, seu estado editorial, plano de cobertura CGU sob sua propriedade | Artigos Câmara, originais compartilhados, catálogo/hub/index, estados Câmara |
| Câmara (exclusivo) | Artigos novos `Camara 2026 - *.md`, artigos históricos 12–15 e os legados explicitamente reservados após reconciliação, seu estado editorial | Artigos CGU, catálogo/hub/index, estados CGU |
| Compatibilidade técnica (operação coordenada) | Validadores, aliases e migração de referências após teste de impacto | `data/questoes-camara.json` nesta missão |

**Regra de conflito:** os legados 01–11, 02a, 04a/04b e 05a ficam congelados para alterações concorrentes de conteúdo até a atribuição individual e o commit de liberação. Se a Câmara precisar corrigir a versão histórica, coordenação registra exclusividade temporária e impedimento de edição pela CGU. Nenhum agente modifica arquivos compartilhados; solicita a alteração à coordenação com `articleId`, caminho e justificativa.

## Compatibilidade e critérios para cada migração

1. Levantar referências do ID e caminho antigos: URLs Pages, aliases, wikilinks, `index.md`, hub, catálogo v2, flashcards, glossário, `data/planos-estudo/cgu-2026.json`, `theoryRefs` e banco de questões. Preservar o legado como destino válido.
2. Criar a versão nova com ID novo e vínculo explícito `derivedFromArticleId`; verificar títulos e anchors, origem normativa e cobertura do edital. Não duplicar cegamente.
3. Atualizar **atomicamente** catálogo, índice e percurso correspondente; substituir o pertencimento no concurso destinatário somente após resoluções de `theoryRefs` e links. O artigo original permanece no concurso de origem.
4. Validar IDs únicos, destinos, frontmatter, glossário, flashcards, navegação, build e conteúdo efetivamente servido no Pages. Registrar SHA, workflow e limites de teste.
5. Registrar certificação jurídica/didática **por concurso e por ID**, sem transferir certificação do original para o derivado. Não editar `data/questoes-camara.json`; qualquer referência que exija mudança no banco bloqueia a substituição e abre tarefa técnica separada.

## EPUB integrado futuro: contrato do manifesto

Planejar `1 - Planejamento/Orcamento Publico - Manifesto EPUB integrado.json` como saída editorial de configuração, sem gerar EPUB nesta missão. Cada entrada: `chapterKey`, `articleId`, `sourcePath`, `concursoId`, `sourceArticleId` (se derivada), `revisionSha`, `certificationStatus`, `sequence`, `topicKey`, `include` e `replacementFor`. Somente entradas certificadas e verificadas no SHA entram na exportação. Para conceitos equivalentes, escolher uma versão principal e outra apenas quando trouxer recorte didático próprio; justificar a escolha em `dedupReason`. Um artigo original nunca é modificado para compor o EPUB. Não consolidar duas certificações em um mesmo capítulo sem preservar as fontes e os IDs.

## Pendências e gate de liberação

**Implantado:** roteiros independentes CGU/Câmara em `1 - Planejamento/`, links no índice e no hub, matriz de propriedade no `AGENTS.md`, manifesto EPUB em JSON sem capítulos e arquivos de estado distintos por concurso. **Pendente:** inventário completo dos consumidores de IDs compartilhados, identificação dos IDs CGU próprios adicionais, validação de campos extras de frontmatter, migração gradual dos legados e conferência integral dos editais por cada agente.

**Validação estrutural anterior:** commit `bf369d41aa5e9293e48b7836460b45019043524f`, workflow [44111853660](https://github.com/leorruas/concursos/actions/runs/44111853660) com conclusão `success`, incluindo build, validações de IDs/catálogo e confirmação de catálogo servido no Pages. Conferência estática adicional: 22 caminhos distintos de notas de Orçamento Público usados pelos novos documentos, nenhum ausente. Este commit de liberação documental exige verificação própria do Pages.

**Liberação controlada:** agentes CGU e Câmara podem iniciar suas respectivas revisões e produzir **somente** arquivos de sua propriedade, conforme matriz, com IDs inéditos em derivados e estados separados. Não podem substituir entradas do catálogo, reescrever índices/hub nem alterar legados congelados. Cada troca de ID ou vínculo depende de commit atômico exclusivo da coordenação, após inventário das referências. A migração integral não está concluída; conteúdo ainda compartilhado é transitório.
