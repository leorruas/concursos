---
title: "Orçamento Público: dependências de IDs compartilhados CGU/Câmara"
type: auditoria-arquitetura
status: dez-derivados-criados-vinculos-legados-pendentes
created: 2026-11-17
updated: 2026-11-17
---

# Orçamento Público: dependências e migração dos 11 IDs

**Snapshot:** catálogo v2 e árvore da `main` em `229ba45becb569d17f0a2fa3685392670e2319e3`, com inspeção textual das superfícies de apoio. O estado de certificação dos artigos não foi alterado. O diagnóstico é uma fotografia e deve ser revalidado após commits paralelos.

## Conclusão técnica

O catálogo v2 mantém **11 `articleIds` simultaneamente em CGU 2026 e Câmara 2026**: **10 artigos legados de Orçamento Público** potencialmente destinados a versões CGU e **uma referência transversal de Atualidades** que não deve ser duplicada automaticamente. Há agora **15 notas específicas da CGU na árvore**, sendo cinco certificadas anteriormente e dez versões novas redigidas, ainda sem certificação individual. As cinco originais desse ciclo são: `CGU 2026 - ciclo orcamentario e evidencias de auditoria.md` (`art-a07c26f4e92031ab`), `CGU 2026 - ppa ldo e loa.md` (`art-9dc8a6e2f31b47c0`), `CGU 2026 - esferas da loa e estatais dependentes.md` (`art-c84d6e02f3b7a915`), `CGU 2026 - principios orcamentarios e vedacoes.md` (`art-b419ac8206de7f35`) e `CGU 2026 - classificacoes de receitas e despesas.md` (`art-e6b481a230fc795d`). A existência de um artigo derivado não certifica automaticamente seu conteúdo nem autoriza remover seu artigo de origem.

## Dependências nas superfícies públicas

| Artigo legado | articleId compartilhado | Ocorrências em flashcards | Ocorrências em glossários de Orçamento |
| :--- | :--- | ---: | ---: |
| 04a: natureza e fonte da receita | `art-f13b65a28d8c4e91` | 7 | 23 |
| 04b: classificações da despesa | `art-28b3d9ef86aa4510` | 27 | 30 |
| 05: créditos adicionais | `art-87b69e1d4ac54f20` | 9 | 7 |
| 05a: emendas e orçamento impositivo | `art-715e2d16a93446cb` | 3 | 7 |
| 06: programação e contingenciamento | `art-0fb9b88e4d6c4151` | 5 | 6 |
| 07: receitas e estágios | `art-4677cfa327ce43bb` | 15 | 14 |
| 08: despesas e estágios | `art-67167e9c18284c4c` | 12 | 22 |
| 09: restos a pagar e DEA | `art-6e4e79c7f4bb4aa3` | 9 | 11 |
| 10: Conta Única e execução | `art-743d234d819842d1` | 3 | 3 |
| 11: responsabilidade fiscal | `art-91ab320cdfb64b8a` | 7 | 13 |
| Política fiscal, resultado primário e dívida pública: apoio transversal | `art-9be1a39d536a47ea` | 4 | 0 |

**Método:** contagem de aparições literais do ID nas strings JSON, e não de cartões/verbetes distintos. Arquivos examinados: `data/flashcards.json` e `data/glossario/termos/orcamento-publico{,-complementos,-empenho,-fiscal,-siglas}.json`. Há **101 ocorrências de IDs compartilhados em flashcards**. A contagem dos glossários cobre apenas os cinco arquivos listados, não todo o acervo de referências. `data/questoes-camara.json` não foi efetivamente inspecionado: a leitura por esta conexão retornou conteúdo vazio, impossibilitando qualquer afirmação sobre integridade de `theoryRefs` desse banco. **O banco não foi modificado.**

## Bloqueios e decisões de migração

**ID transversal resolvido:** `art-9be1a39d536a47ea` pertence a `3 - Materias/Atualidades/06 - politica fiscal resultado primario e divida publica.md` (título: *Política fiscal, resultado primário e dívida pública*, `layer: fundamento_estavel`). Aparece ainda em Finanças Públicas da CGU e Atualidades da Dataprev. Sua reutilização pode ser intencional e deve permanecer enquanto a pertinência aos dois editais não for auditada. Não criar clone de Orçamento para resolver apenas a sobreposição de ID. O `art-3e62a81df4c74b90` identifica, separadamente, os lembretes da matéria.

Os originais 04a, 04b, 05, 05a, 06, 07, 08, 09, 10 e 11 continuam com seus IDs estáveis e devem conservar as URLs, os aliases, a certificação Câmara e os vínculos existentes. O agente CGU **já produziu os dez derivados com `articleId` exclusivo e origem explícita**, incluídos no índice, hub, catálogo e roteiro CGU. **Somente a coordenação** poderá realizar a troca de `articleIds` no catálogo e de links no índice, hub e percursos, em operação atômica com proteção de SHA.

Antes de cada troca, exigir (1) artigo CGU completo e certificado individualmente; (2) headings e `theoryRefs` resolvidos; (3) referências de glossário/flashcards classificadas como genéricas ou específicas por concurso, sem substituição indiscriminada; (4) ausência de perda de URL ou alias legado; (5) testes de build, identidade, navegação, CI e Pages no SHA final. Caso a troca exija modificação de `data/questoes-camara.json`, interromper e abrir uma etapa técnica própria, sem alterar o banco nesta missão.

**Os dez derivados já existem; restam dez vínculos de IDs históricos no catálogo da CGU, mais uma referência transversal de Atualidades.**

**Próximas unidades de certificação:** classificações de receita (04a) e despesa (04b), créditos (05), emendas (05a), programação (06), receitas (07), despesas (08), restos a pagar (09), execução financeira (10) e responsabilidade fiscal (11). Não criar novos clones: conferir normas, fontes, dez itens C/E de cada derivado, links, glossário, flashcards e publicação; somente depois reconciliar e substituir associações dos IDs antigos. Preservar a especificidade de CGU e Câmara e evitar repetição no futuro EPUB por `topicKey` e certificação individual.

**Estado do trabalho:** 15 artigos próprios CGU presentes, dez aguardando auditoria individual; 11 IDs ainda compartilhados no catálogo (dez legados e um transversal); nenhum EPUB gerado, nenhuma exclusão ou renomeação executada.

## Auditoria das referências diretas de flashcards: 17/11/2026

Leitura estruturada do array `cards` em `data/flashcards.json`, usando `card.note.articleId` e os `examIds` de cada cartão. O arquivo possui 356 cartões explícitos, dos quais **101 apontam aos 11 IDs ainda compartilhados**. A soma por concurso abaixo não é exclusiva, pois quatro cartões têm simultaneamente CGU e Câmara em `examIds`.

| ID legado | Cartões | Com CGU | Com Câmara | Decisão |
| :--- | ---: | ---: | ---: | :--- |
| `art-f13b65a28d8c4e91` | 7 | 7 | 0 | Migrar apenas após mapear headings para novo artigo de receita |
| `art-28b3d9ef86aa4510` | 27 | 27 | 0 | Vários headings especializados; revisão manual prioritária antes da remoção |
| `art-87b69e1d4ac54f20` | 9 | 9 | 0 | Conferir fontes e headings do derivado de créditos |
| `art-715e2d16a93446cb` | 3 | 0 | 3 | Manter no histórico Câmara; retirar vínculo CGU apenas após conferir outros consumidores |
| `art-0fb9b88e4d6c4151` | 5 | 5 | 0 | Reconciliar com novo capítulo de programação |
| `art-4677cfa327ce43bb` | 15 | 15 | 2 | Dois cartões servem também à Câmara; evitar troca global |
| `art-67167e9c18284c4c` | 12 | 12 | 2 | Dois cartões servem também à Câmara; preservar a referência original nesses casos |
| `art-6e4e79c7f4bb4aa3` | 9 | 9 | 0 | Reconciliar com novo capítulo de restos a pagar e DEA |
| `art-743d234d819842d1` | 3 | 0 | 3 | Manter no histórico Câmara; conferir necessidade real de associação CGU |
| `art-91ab320cdfb64b8a` | 7 | 7 | 0 | Reconciliar com capítulo CGU da LRF |
| `art-9be1a39d536a47ea` | 4 | 4 | 0 | Referência transversal válida: preservar artigo de Atualidades |

**Bloqueio demonstrado:** retirar imediatamente os dez IDs históricos do catálogo CGU deixaria cartões com `examIds: [cgu-2026]` apontando a artigo fora da matéria. A simples troca do ID também seria insegura porque `card.note.section` contém headings exatos dos artigos antigos, enquanto os capítulos derivados possuem seções e abordagem distintas. Antes da migração, avaliar cartão por cartão: objeto do conceito, fonte, seção no novo texto, contextos de CGU/Câmara, e revisar ID, heading e eventual duplicação juntos. Não usar busca/substituição textual sobre o JSON.

**Limite da contagem:** são cartões escritos no arquivo, não os flashcards adicionais derivados automaticamente do glossário durante o build. A matriz anterior de ocorrências textuais nos arquivos de glossário continua válida como triagem, não como levantamento de verbetes únicos. O banco `data/questoes-camara.json` não foi alterado.

## Migração atômica controlada dos vínculos 05a e 10 (17/11/2026)

**Decisão:** os IDs históricos `art-715e2d16a93446cb` (emendas, 05a) e `art-743d234d819842d1` (Conta Única, 10) foram retirados **somente da lista CGU** do catálogo v2, pois já existem derivados específicos certificados (`art-a91ef3c628d04b57` e `art-7a4f21e965d048b3`). Os dois IDs históricos continuam íntegros no catálogo Câmara, nos artigos originais, em suas URLs e aliases.

**Flashcards diretos:** os três cartões de cada um desses dois IDs em `data/flashcards.json` possuem `examIds` exclusivamente `camara-2026`, e foram preservados, com os caminhos antigos válidos. Nenhum cartão da CGU aponta diretamente para os dois IDs retirados, no inventário verificado nesta execução.

**Glossário CGU:** sete verbetes em `data/glossario/termos/orcamento-publico-complementos.json`, todos com `contestIds: [cgu-2026]`, tiveram seu `articleIds` reconciliado para `art-a91ef3c628d04b57`: `glo-emenda-parlamentar-individual`, `glo-emenda-parlamentar-de-bancada`, `glo-emenda-parlamentar-de-comissao`, `glo-emenda-parlamentar-impositiva`, `glo-transferencia-especial-emenda-parlamentar`, `glo-transferencia-com-finalidade-definida-emenda-parlamentar`, `glo-impedimento-tecnico-de-emenda-parlamentar`. Em três verbetes havia também referência ao artigo legislativo da Câmara `art-9d42c1f68a7be053`; esta referência foi retirada **apenas desses verbetes CGU**, preservando o artigo da Câmara. Os três verbetes de Conta Única presentes nos glossários têm `contestIds: [camara-2026]` e mantiveram seus vínculos históricos, sem interferência na CGU.

**Proteção:** operação sobre catálogo, um arquivo de glossário e este registro, preservando originais e `data/questoes-camara.json`. É preciso validar catálogo/glossário, build, CI e Pages do SHA de migração antes de considerar o gate técnico fechado. Os demais vínculos históricos exigem migração individual, incluindo flashcards CGU e headings antigos.

## Migração integral dos consumidores diretos de programação (06) (17/11/2026)

O ID histórico `art-0fb9b88e4d6c4151` foi retirado apenas do catálogo CGU, preservado na Câmara e nos arquivos históricos. O derivado CGU certificado `art-6f2c1ae9d483457b` foi mantido. Em `data/flashcards.json`, cinco cartões exclusivamente CGU (`dotacao`, `limite-empenho`, `programacao-financeira`, `cronograma`, `contingenciamento`) passaram a apontar para o novo `articleId` e para seções específicas verificadas no Markdown: `Quatro valores diferentes`, `Programação orçamentária e financeira: sequência de decisões` e `Contingenciamento: a receita projetada ameaça a meta`. Foram migrados também seis verbetes exclusivamente CGU (`glo-programacao-financeira`, `glo-cronograma-de-desembolso`, `glo-contingenciamento`, `glo-limite-de-empenho`, `glo-limite-de-pagamento`, `glo-bloqueio-de-dotacao`) em três arquivos de glossário. Nenhum cartão ou verbete da Câmara foi alterado. A migração ocorre num commit atômico sobre catálogo, flashcards, três glossários e estado; deve passar no workflow de catálogo, flashcards e Pages antes do fechamento técnico. Não alterar `data/questoes-camara.json`.

## Migração dos consumidores diretos de créditos adicionais (05) (17/11/2026)

O ID histórico `art-87b69e1d4ac54f20` foi retirado somente do catálogo CGU, preservado na Câmara. Nove cartões exclusivamente CGU (`credito-adicional`, `suplementar`, `especial`, `extraordinario`, `superavit-financeiro`, `excesso-arrecadacao`, `emenda-projeto-orcamentario`, `orc-erro-fonte-credito-ato`, `orc-ref-excesso-tendencia`) foram reconciliados no arquivo de flashcards para o derivado certificado `art-83d7c5ef2a0b4916` e para três headings existentes, mapeando espécies, fontes do art. 43 e autorização de créditos. Sete verbetes exclusivamente CGU (`glo-credito-suplementar`, `glo-credito-especial`, `glo-credito-extraordinario`, `glo-superavit-financeiro`, `glo-excesso-de-arrecadacao`, `glo-anulacao-de-dotacao`, `glo-reabertura-de-creditos-especiais-e-extraordinarios`) passaram a referenciar a versão própria em dois arquivos de glossário. Os artigos, cartões e verbetes pertencentes à Câmara não foram modificados. A edição do catálogo, dos cartões, dos glossários e deste registro foi atômica e protegida por SHA; verificar CI/Pages antes de fechar o gate. O banco `data/questoes-camara.json` segue inalterado.

## Migração de restos a pagar (09) e revalidação individual

A migração do ID histórico `art-6e4e79c7f4bb4aa3` para `art-c85e29a3741f40bd` ocorreu com criação prévia de seção específica no artigo CGU, para cobrir duas distinções presentes nos flashcards antigos e ausentes do novo texto. Nove flashcards CGU foram redirecionados e suas seções verificadas; 11 verbetes exclusivos CGU foram redirecionados nos três glossários; apenas o catálogo CGU perdeu a associação antiga. O histórico Câmara foi mantido. A versão nova do artigo, blob `4bf85158d6448c67cf11974232c880e7c2527780`, encontra-se em **revalidação editorial pendente** após mudança de conteúdo. Ver estado CGU e CI/Pages do commit de migração.

## Reconciliação de IDs: estado após cinco migrações

**Estado consolidado mais recente:** a interseção de Orçamento Público entre os catálogos CGU e Câmara reduziu-se de 11 para **6 IDs**: cinco artigos históricos ainda associados à CGU (`art-f13b65a28d8c4e91`, `art-28b3d9ef86aa4510`, `art-4677cfa327ce43bb`, `art-67167e9c18284c4c`, `art-91ab320cdfb64b8a`) e um material transversal de Atualidades (`art-9be1a39d536a47ea`). Os originais Câmara e seus links permanecem existentes. O título histórico desta auditoria retrata o diagnóstico inicial, não a contagem atual.

**Migrados com consumidores explicitamente conferidos:** (1) emendas 05a, (2) Conta Única 10, (3) programação 06, (4) créditos 05 e (5) restos a pagar 09. As migrações 06 e 05 mapearam respectivamente cinco e nove cartões para seções presentes nos novos artigos; a migração 09 mapeou nove cartões após ampliar o tratamento de cancelamento de RP e restituição de suprimento. Os verbetes foram reconciliados por concurso, sem editar `data/questoes-camara.json`.

**Pendências por prioridade:** 04a receita (7 cartões CGU e 23 verbetes CGU, conferir termos adicionais); 04b despesa (27 cartões CGU, 30 verbetes, um deles também associado à Câmara); 07 receitas (15 cartões, incluindo dois com ambos os concursos); 08 despesas (12 cartões, incluindo dois com ambos os concursos); 11 responsabilidade fiscal (7 cartões CGU e 13 verbetes CGU, conferir conceitos de fim de mandato). Para casos de cartão compartilhado, preservar a versão da Câmara e criar referência CGU própria somente se o teste e o contrato de identidade aprovarem a separação. Manter o ID transversal, sem duplicação.

**Gate técnico:** commit de migração de restos a pagar `8821e51fb36ada6097ca484c2b210d13a0d3c39c` preservou históricos; publicação daquele SHA foi cancelada por commits concorrentes. O teste do glossário que utilizava limite histórico fixo foi reparado em `94ab692832f8f9e32216a9cc8b225b22ab8e7375`, CI/Pages [44190365316](https://github.com/leorruas/concursos/actions/runs/44190365316) aprovado. Posteriormente a falha CommonJS de teste de retestes foi corrigida em `f52d9d7e0ae43ac0e048dbe155aa63e67eaf4775`; verificar publicação subsequente antes de afirmar fechamento da migração 09. O novo blob de RP `4bf85158d6448c67cf11974232c880e7c2527780` está em revalidação, com certificação visual/jurídica anterior preservada apenas para o SHA antigo.

## Migração de classificação de receita (04a)

O derivado `art-e4c982a6713d4bf5` foi complementado com origens e receita intraorçamentária para cobrir os verbetes antigos. Em seguida, sete cartões CGU foram reconciliados com headings reais, 23 verbetes exclusivamente CGU foram migrados e o ID original `art-f13b65a28d8c4e91` foi removido somente do catálogo CGU, preservado no da Câmara. Novo blob `1a27578226bfb8b240ae2f212139264c346af8f7`, ainda em **revalidação**; verificar CI/Pages e a segunda leitura antes de devolver a certificação individual. A operação foi atômica com proteção de SHA. Restam quatro IDs históricos compartilhados e o transversal de Atualidades.
