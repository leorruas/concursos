---
title: "Câmara 2026: estado editorial de Orçamento Público por concurso"
type: estado-auditoria-editorial
concursoId: camara-2026
status: acompanhamento-pos-arquitetura
created: 2026-11-17
updated: 2026-11-17
---

# Câmara 2026: estado editorial de Orçamento Público por concurso

**Responsável exclusivo:** agente editorial Câmara 2026. Este arquivo acompanha derivações futuras e alterações de propriedade após a separação; **não substitui os registros históricos A, B e C**. A coordenação histórica registra 19 notas: dez certificadas e nove concluídas com ressalva visual. Conferir os estados individuais antes de usar essa contagem, e não transportar certificação para novo ID.

| Conjunto | Regra | Situação |
| :--- | :--- | :--- |
| Artigos 12–15 históricos | Câmara exclusiva; preservar IDs, URLs e evidências A/C | Conteúdo não migrado |
| Artigos 01–11, 02a, 04a, 04b e 05a compartilhados historicamente | Consultar matriz e reservar ID antes de qualquer edição concorrente | Congelados para migração conjunta |
| Novo `Camara 2026 - *.md` | ID exclusivo; registrar origem e certificação independente | Nenhum criado neste lote |

Consultar [[1 - Planejamento/Camara 2026 - Percurso editorial Orcamento|ordem Câmara]], [[1 - Planejamento/Camara 2026 - Coordenacao editorial Orcamento|certificação anterior]] e [[1 - Planejamento/Orcamento Publico - Arquitetura CGU e Camara|matriz de propriedade]]. Alterações globais de índice, hub, catálogo e EPUB cabem apenas à coordenação.

## Reconciliação pós-arquitetura: 17/11/2026

A separação documental foi liberada em `f04bb02039d2` (precedida por `bf369d41aa5e`), conforme `Orcamento Publico - Arquitetura CGU e Camara.md`. Liberação controlada não significa migração concluída. A trilha Câmara retém os 19 IDs históricos e o percurso publicado. Artigos legados compartilhados permanecem congelados; não foi realizada edição de conteúdo, troca de vínculo ou derivação nesta conferência.

Verificação diretamente na `main` dos quatro artigos de propriedade exclusiva, cotejando identificadores, caminho canônico e blobs atuais com os estados históricos das frentes A/C:

| Artigo | articleId | Blob observado | Certificação histórica preservada |
| :--- | :--- | :--- | :--- |
| 12: elaboração da proposta | `art-4be219d8f750ac63` | `316256eb3c615bff1723a183a3f4dac93e130256` | Integral, frente A |
| 13: tramitação legislativa | `art-d8f21b70c49e563a` | `7719d2e9b477a67669241d96462c587e2379665f` | Integral, frente A |
| 14: Comissão Mista de Orçamento | `art-c917e4a2d63b508f` | `96820ece2d52475a81579ea7e6d4229fc39d80f7` | Integral, frente A |
| 15: emendas e rastreabilidade | `art-9d42c1f68a7be053` | `9b83fe524b3506e6d6801c8c3a1fbbc199c76172` | Integral com ressalva visual, frente C |

Os quatro arquivos foram relidos em sua abertura, delimitação, identificação e referências finais nesta reconciliação. A certificação de mérito permanece baseada nas auditorias detalhadas anteriores, não em uma nova auditoria integral simulada. Evidências históricas: workflows `43994329430` e `43996252562` com conclusão `success` e verificação do conteúdo publicado; workflow de arquitetura `44111853660` também `success` no commit `bf369d41aa5e`. A listagem de workflows consultada ainda não mostrou execução vinculada especificamente ao commit posterior `f04bb02039d2`, portanto não se atribui a ele uma verificação de Pages inexistente. A inspeção visual pendente segue consolidada, sem invalidar as certificações jurídicas já registradas.

**Próxima dependência de coordenação:** inventariar as referências remanescentes dos IDs compartilhados e efetuar migração atômica dos vínculos CGU; não liberar edição dos legados para esta frente sem reserva individual. Eventuais correções nos quatro artigos Câmara exclusivos poderão seguir seus próprios controles de SHA, norma e publicação. Nenhum EPUB foi gerado.

## Controle de cobertura e publicação: continuidade de 17/11/2026

**Etapa realizada:** confronto documental entre `Camara 2026 - Auditoria de cobertura da trilha de Orcamento.md`, a síntese local do edital e a matriz de certificação histórica. A matriz CAM-ORC-001 a CAM-ORC-016 relaciona **16/16 unidades conceituais** a artigos canônicos. Isso demonstra localização editorial do conteúdo; **não encerra a auditoria F4 de correspondência integral entre cada comando do edital oficial, retificações e texto vigente das fontes normativas**. A síntese do edital local não substitui a fonte oficial para certificar F4. Os 19 artigos continuam com 10 certificações integrais e 9 com ressalva visual, sem mudança do estado de mérito nesta execução.

**Etapa técnica:** a consulta de workflows encontrou `44111853660` (commit `bf369d41aa5e`) com `success` para a arquitetura e `44113420604` (commit `cdbf48af5a04`) com `success` para alterações posteriores da frente CGU. A conclusão deste último workflow não é evidência de nova revisão de artigo Câmara, nem de publicação do registro `c8f3f952eddf` especificamente. Os runs históricos `43994329430` e `43996252562` permanecem as evidências editoriais originais da Câmara, conforme estados A/B/C.

**Estado do processo:** arquitetura documental liberada; percurso Câmara independente publicado; 19/19 artigos classificados com evidências históricas; 16/16 unidades mapeadas; migração de vínculos CGU compartilhados ainda pendente com a coordenação; inspeção visual e verificação F4 do edital oficial pendentes. Não alterar os artigos legados congelados, o catálogo, o hub, `index.md` nem a trilha CGU. Não gerar EPUB.

**Próximo passo autorizado:** conferir a matriz F4 com o edital oficial e retificações, item por item, começando pelo rito orçamentário da Câmara e pelos artigos exclusivos 12–15. Corrigir somente defeitos materiais comprovados em arquivos de propriedade Câmara e validar o novo SHA no CI/Pages; enviar à coordenação qualquer vínculo ou alteração compartilhada. Não reabrir automaticamente certificações anteriores.
