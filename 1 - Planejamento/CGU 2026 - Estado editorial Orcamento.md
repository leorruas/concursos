---
title: "CGU 2026: estado editorial de Orçamento Público"
type: estado-auditoria-editorial
concursoId: cgu-2026
status: integracao-catalogo-aprovada-pages-pendente
created: 2026-11-17
updated: 2026-11-17
---

# CGU 2026: estado editorial de Orçamento Público

**Responsável exclusivo:** frente CGU. A arquitetura liberou trabalhos em artigos `CGU 2026 - *.md` e neste estado, mas legados, índice, hub, catálogo v2, glossário e flashcards continuam sob coordenação. Nenhuma certificação da Câmara transfere-se à CGU.

## Gate de arquitetura verificado em 17/11/2026

- Matriz: `1 - Planejamento/Orcamento Publico - Arquitetura CGU e Camara.md`, status `liberacao-controlada`, publicada na `main` pelo commit `f04bb02039d25db7e54ba32a16ebc754d3cbb325`.
- A matriz registra validação estrutural anterior no workflow `44111853660`, resultado `success` para o commit `bf369d41aa5e9293e48b7836460b45019043524f`. Não confundir essa validação com certificação dos artigos da CGU nem inferir verificação de Pages do commit desta atualização.
- O documento específico existente `3 - Materias/Orcamento Publico/CGU 2026 - ppa ldo e loa.md` tem `articleId: art-9dc8a6e2f31b47c0`; preservá-lo.
- Artigos legados compartilhados ficam congelados. Novos derivados exigem `articleId` inédito, `concursoId: cgu-2026`, relação de origem e posterior ajuste atômico dos consumidores pela coordenação.

## Fonte primária e escopo efetivamente cotejado

Edital de abertura do Cebraspe para CGU/AFFC, Cargo 1, especialidade Auditoria, texto oficial do Anexo de objetos de avaliação (seção 15.2.4, bloco **Finanças públicas, orçamento e contabilidade pública**), consultado em 17/11/2026: https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html . A versão PDF oficial é indicada como atualizada pela retificação do Edital nº 3, de 06/11/2026: https://cdn.cebraspe.org.br/concursos/cgu_26_affc/arquivos/9F208573B5EE30224B402D22562A44BD2F387D5E7FBD78CA8A15212F1DE98E7D.pdf . A conferência jurídica integral deve continuar confrontando a versão consolidada e eventuais novos avisos em https://www.cebraspe.org.br/concursos/cgu_26_affc .

A referência inicial ao tema como P3.2.2/P3.2.3 no plano histórico é um agrupamento pedagógico e **não substitui a redação do edital**. No programa oficial há também funções econômicas, tributação, resultados fiscais, contabilidade, balanços, custos, MCASP/MIC e empresas estatais. Não prometer cobertura integral com base em 11 ou 15 artigos.

## Auditoria de cobertura: primeira passagem documental

Esta matriz identifica **material de partida**, sem homologar cobertura integral de cada item nem certificar artigo por simples presença no catálogo.

| Recorte do edital oficial | Material existente a verificar | Estado e ação editorial |
| :--- | :--- | :--- |
| 1.1: funções alocativa, distributiva e estabilizadora; bens públicos, externalidades, monopólios naturais; federalismo fiscal | 01 (ciclo) e outros núcleos de finanças públicas não inventariados | **Lacuna de cobertura nesta matéria**; verificar conteúdo transversal antes de propor nota exclusiva |
| 1.2: progressividade/regressividade, resultado primário e nominal, déficit, financiamento e sustentabilidade | 04a, 11 | **Parcial provável**; cotejar tratamento de resultado nominal, tributação e financiamento |
| 2.1: PPA, LDO, LOA, elaboração, emendas, discussão, aprovação, classificações, créditos, vinculações e metas | CGU PPA/LDO/LOA próprio; legados 01, 02a, 03, 04, 04a, 04b, 05, 05a | **Base aproveitável com adaptação**; separar abordagem de controle interno do rito detalhado CAM-ORC |
| 2.2: programação orçamentária/financeira, limites, contingenciamento e bloqueio | 06 e 10 | **Base aproveitável com verificação** de limitação de empenho versus bloqueio e limites de pagamento |
| 3.1: etapas da receita e despesa, restos a pagar, Conta Única, disponibilidades | 07, 08, 09, 10 | **Base aproveitável com revisão integral** de conceitos, documentos, mecanismos e exemplos CGU |
| 3.2: limites, metas, transparência, dívida e riscos fiscais | 11 e CGU PPA/LDO/LOA | **Parcial provável**; aprofundar dívida, riscos e deveres de controle sob LRF |
| 4.1 e 4.2: execução versus patrimônio; reconhecimento, mensuração, balanços e DVP | Trilha separada de Contabilidade Pública | **Dependência transversal**; verificar notas e não duplicar mecanicamente |
| 5.1 a 5.3: comprovação físico-financeira, custos, eficiência, MCASP 11ª edição e MIC | 08, 10, 11 e trilha de Contabilidade Pública | **Lacuna de integração em casos de auditoria**; explicitar evidências sobre custo e entrega |
| 6.1 a 6.3: demonstrações societárias e efeitos patrimoniais de estatais | 02a apenas para classificação orçamentária; Contabilidade Pública a inventariar | **Não coberto apenas por 02a**; exige verificação societária específica |
| 7.1 a 7.4: governança, finalidade pública, mandatos, resultados e carta anual de estatais | 02a apenas como introdução às esferas da LOA | **Lacuna na matéria de Orçamento**; delimitar ligação à governança das estatais sem presumir cobertura |

**Exclusivos da Câmara a excluir da trilha CGU por padrão:** notas históricas 12 (elaboração detalhada da proposta), 13 (tramitação legislativa), 14 (CMO) e 15 (emendas, deliberação e rastreabilidade) não devem ser incorporadas integralmente. O edital CGU exige noções aplicadas de elaboração, discussão, aprovação e emendas; selecionar e reescrever o necessário para Auditoria, sem transplantar integralmente procedimentos parlamentares.

## Inventário de IDs e limites técnicos

A arquitetura lista 15 referências editoriais CGU no percurso, das quais uma já possui versão própria de PPA/LDO/LOA; os demais links históricos são transitórios. O catálogo v2 da CGU também referencia `art-9be1a39d536a47ea` e `art-3e62a81df4c74b90`. **Os caminhos/assuntos desses dois IDs não foram confirmados nesta verificação**: investigar antes de duplicar, excluir ou redirecionar.

Não modificar `index.md`, hub, catálogo, regras globais, flashcards, glossário, bancos de questões ou artigos da Câmara nesta frente. Qualquer inclusão pública de derivado exige coordenação posterior de indexação e de `theoryRefs`; ausência dessa integração impede alegar publicação navegável/certificação técnica.

## Sequência CGU recomendada

1. Ciclo orçamentário e relação planejamento, autorização, execução e resultado.
2. PPA, LDO e LOA, com provas documentais de aplicação à auditoria.
3. Esferas orçamentárias, princípios e vedações.
4. Classificação de receitas, despesas, fontes, programas e resultados fiscais.
5. Créditos e alterações, vinculações e emendas em perspectiva de fiscalização.
6. Programação, contingenciamento, bloqueios e disponibilidade financeira.
7. Receita e despesa: etapas, evidências e responsabilidades.
8. Restos a pagar, DEA e suprimento de fundos.
9. Conta Única, gestão de disponibilidades, execução financeira.
10. LRF, limites, dívida, relatórios, transparência e controle.
11. Pontes com demonstrações, custos, MCASP/MIC e governança das estatais na trilha de Contabilidade Pública.

O futuro EPUB poderá agrupar conceitos equivalentes por `topicKey`, mantendo `articleId`, `sourceArticleId`, SHA de revisão e certificação individuais de CGU e Câmara. Nenhum EPUB foi gerado.

## Estado de certificação e próximos gates

**Certificados CGU nesta frente: 0.** O artigo `art-9dc8a6e2f31b47c0` foi revisado editorialmente em 17/11/2026 e permanece **em validação técnica e de publicação**, sem certificação antecipada. Nenhuma sessão de estudo foi criada.

### CGU PPA, LDO e LOA: revisão individual de 17/11/2026

- **Artigo e propriedade:** `3 - Materias/Orcamento Publico/CGU 2026 - ppa ldo e loa.md`; `articleId: art-9dc8a6e2f31b47c0`; arquivo exclusivo da CGU. `concursoId: cgu-2026` acrescentado sem modificar articleId, aliases ou títulos de seção preexistentes.
- **SHA de conteúdo:** blob anterior `42bae1584d50012f0f15737b7f13684580cb3553`; blob revisado `2878ac586bae6bcc5d6a1de9b9d4b816d3c7bb06`, commit na main `cdbf48af5a0490ad75635865a3a506caeaec1eec`.
- **Fontes conferidas:** edital oficial CGU 2026, bloco Finanças públicas/Orçamento/Contabilidade item 2.1 (HTML Cebraspe), Constituição Federal arts. 165 e 167 e ADCT art. 35, LRF arts. 4º e 9º, Lei nº 4.320/1964 arts. 58 a 65. A retificação nº 3, de 6/11/2026, é indicada no PDF consolidado. Links oficiais foram mantidos ou acrescidos; a resposta HTTP de cada link no ambiente Pages não foi testada individualmente.
- **Revisão jurídica e didática:** corrigida a identificação do item do edital (o antigo P3.2.2 era rótulo de planejamento); diferenciados crédito/dotação, disponibilidade financeira, empenho, liquidação, pagamento e entrega; detalhados anexos fiscais e hipótese de limitação do art. 9º da LRF; acrescentada tabela com cinco perguntas de auditoria e caso progressivo físico-financeiro. Segunda leitura com termos e siglas apresentados no contexto. Preservadas as duas referências para artigos legados enquanto a arquitetura coordena sua separação.
- **C/E:** os três itens anteriores e seus gabaritos foram mantidos e confrontados com as regras; adicionados itens 4 a 6 (dotação versus entrega; risco fiscal; limitação de empenho versus revogação da LOA). Total: **6 itens didáticos C/E**. Não classificados como itens reais Cebraspe.
- **Checagem de integridade remota:** leitura posterior da `main` confirmou o blob revisado `2878ac...`, tamanho 12.609 caracteres e presença do item 6, sem a identificação antiga do edital.
- **Certificação ainda não atribuída:** `get_commit_combined_status` retornou lista vazia de status para `cdbf48af...` e o endpoint de runs do conector (limitado a eventos de PR) também retornou vazio. **Isso não comprova sucesso nem falha de CI/Pages.** Permanecem pendentes evidência de workflow Pages para o commit, conteúdo efetivamente servido, inspeção de glossário/flashcards vinculados, testes automatizados e inspeção visual. A ressalva visual isolada não impede certificação, mas a falta das demais provas impede o fechamento.


**Próximo gate:** verificar CI/Pages e vínculos de glossário/flashcards do artigo PPA/LDO/LOA no SHA acima, corrigir problemas concretos e somente então classificar a certificação. Em seguida, criar derivados CGU dos legados, um por vez, com IDs novos, sem editar os originais. Requisitar à coordenação a operação atômica de vínculo após cada lote.

## Execução complementar: 17/11/2026, capítulo CGU sobre ciclo orçamentário

- **Novo artigo exclusivo:** `3 - Materias/Orcamento Publico/CGU 2026 - ciclo orcamentario e evidencias de auditoria.md`, `articleId: art-a07c26f4e92031ab`, `concursoId: cgu-2026`, `derivedFromArticleId: art-f6cfe9fbcc764554`. A fonte legada permanece intacta.
- **Escopo do edital verificado:** bloco Finanças públicas, orçamento e contabilidade pública, itens 2.1, 3.1 e 5.1, no PDF oficial com retificação de 06/11/2026 (página 48 do PDF, índice de página 47). Consulta visual e textual do programa oficial.
- **Conteúdo produzido:** fases do ciclo, autorização versus caixa, execução orçamentária versus financeira, controles, competências, evidências e exemplo progressivo com diferença entre entrega e resultado; linguagem simples, tabelas de fronteiras, oito itens didáticos Certo/Errado com comentários, vínculos internos e referências normativas. Fontes: Constituição, arts. 70, 74 e 165; Lei nº 4.320/1964, arts. 2º e 58 a 65; LRF, arts. 8º e 9º; edital CGU retificado.
- **Publicação do conteúdo na main:** criação `5c9382a42a69ec1b44d260f7c2458daf8a9d5068`; correção imediata da forma do ID `66d533f26169e10487c248a2fa3bff41b9190a3a` (blob `9e4a6fec2d0b5aad1af5ede723e81ea3ec81baff`). O ID atual é hexadecimal de 16 caracteres e não replica o ID da fonte.
- **Pendência de coordenação obrigatória:** adicionar o novo ID e caminho à navegação `index.md`, hub, percurso e catálogo CGU v2; auditar referências de `theoryRefs`, glossário e flashcards para o novo ID antes de substituir o legado. A frente CGU não pode editar esses arquivos. **Não declarar capítulo certificado ou publicado no Pages** enquanto essa migração técnica, testes e confirmação do conteúdo servido não estiverem demonstrados.
- **Verificação de flashcards PPA/LDO/LOA:** `data/flashcards.json` foi lido na `main` (blob `6d2dae48e08cfc903823d31ef655b677d26402cd`) e a busca literal pelo `articleId: art-9dc8a6e2f31b47c0` encontrou zero ocorrências. Isso prova ausência de vínculo literal por ID no arquivo, **não prova ausência de cartões por tema**. A coordenação deve verificar cartões e associação sem duplicar conteúdo.
- **Certificação CGU:** 0 artigos certificados nesta execução. O artigo PPA/LDO/LOA permanece revisado editorialmente, com CI/Pages e vínculos pendentes. O novo ciclo orçamentário foi criado e precisa de integração técnica e auditoria final após indexação. A inspeção visual isolada pode ser ressalva segundo `AGENTS.md`, mas não elimina os bloqueios técnicos.

## Continuidade: capítulo CGU sobre esferas da LOA e estatais

**Novo arquivo exclusivo:** `3 - Materias/Orcamento Publico/CGU 2026 - esferas da loa e estatais dependentes.md`. **Identidade:** `art-c84d6e02f3b7a915`, `concursoId: cgu-2026`, `derivedFromArticleId: art-74d90e9fa1b3452c`. **Commit de criação:** `3da5807692436af24a2fa73200d4407e5abd8575`. O artigo histórico da Câmara permaneceu intocado.

**Verificação normativa e didática desta execução:** Constituição Federal art. 165, § 5º; Lei Complementar nº 101/2000, art. 2º, II e III; Decreto nº 12.500/2025, especialmente art. 7º, em texto atualizado. Cotejados conceitos de esfera fiscal/seguridade/investimento, empresa controlada, dependência jurídica e transição regulada. O novo artigo contém tabelas, caso progressivo, roteiro de evidências e oito itens C/E originais comentados. As referências foram incluídas no artigo. A leitura de fontes externas confirma em especial que assinatura de contrato de gestão não extingue automaticamente a dependência jurídica.

**Estado:** criado na `main`, **ainda não certificado**. Necessária validação de CI, Pages, unicidade global de ID, destino dos links e integração por coordenação ao índice, hub, percurso e catálogo CGU, com revisão dos consumidores de `theoryRefs`, glossário e flashcards. Não alterar os arquivos compartilhados nesta frente. A auditoria visual pode constar como ressalva isolada, desde que todos os demais gates sejam comprovados.

**Progresso cumulativo nesta frente:** três artigos CGU exclusivos trabalhados (PPA/LDO/LOA revisado; ciclo e evidências criado; esferas e estatais criado), 22 itens C/E didáticos nos respectivos textos, zero certificações finais demonstradas. O próximo capítulo por sequência é princípios orçamentários e vedações constitucionais, após compatibilização da navegação destes derivados. Nenhuma sessão pessoal ou EPUB foi criada.

## Continuidade: princípios orçamentários e vedações, 17/11/2026

**Novo artigo CGU:** `3 - Materias/Orcamento Publico/CGU 2026 - principios orcamentarios e vedacoes.md`, `articleId: art-b419ac8206de7f35`, `concursoId: cgu-2026`, `derivedFromArticleId: art-a2f47c0d6e184e93`. Criado na `main` em `9faeac48ef9bf8eb093ee0429493de5809830c74`, conteúdo confirmado por releitura remota no blob `d5fc68973847a981fafe95fa6d205c93fc5a502b`.

**Escopo revisado:** unidade, universalidade, anualidade, orçamento bruto, especificação, exclusividade, não afetação de impostos, reabertura de créditos e regra de ouro. Casos de auditoria e dez itens didáticos C/E com comentários e gabaritos. Fontes normativas: Constituição arts. 165 e 167; Lei nº 4.320/1964 arts. 2º a 6º, 20, 22 e 34; LRF art. 5º. Fontes oficiais acessadas e cotejadas com o texto derivado; **a nova versão é uma síntese e não transfere a certificação do legado**.

**Validação parcial:** o conector confirmou caminho, SHA do blob e os 10 itens na `main`. A consulta de status combinados retornou lista vazia, e a consulta de workflow runs do conector (limitada a PR) não trouxe execuções. Assim, CI, Pages e o conteúdo servido **não estão comprovados**. Integração de índice, hub, percurso, catálogo CGU, glossário, flashcards e consumidores de `theoryRefs` permanece com a coordenação de arquitetura.

**Progresso acumulado:** quatro artigos CGU exclusivos trabalhados (PPA/LDO/LOA, ciclo, esferas e princípios), 32 itens didáticos C/E, **zero certificados formalmente** até verificar todos os gates. Próximo tema de produção: classificações de receitas e despesas e respectivos critérios, somente em novos arquivos CGU após reconciliação das referências. Nenhum artigo Câmara, arquivo compartilhado ou dado privado foi alterado; EPUB não gerado.

## Continuidade: classificações de receitas e despesas, 17/11/2026

**Novo artigo CGU exclusivo:** `3 - Materias/Orcamento Publico/CGU 2026 - classificacoes de receitas e despesas.md`, `articleId: art-e6b481a230fc795d`, `concursoId: cgu-2026`, `derivedFromArticleId: art-d8b1c5e6037249fa`. Criado na main em `c87c7e4f3ab0dc62740a9815d8fda20d4819423c`, conferido por releitura do blob `ae2538f05ac18df3b33184185f1bb06bae520520`, com dez itens C/E comentados.

**Auditoria temática:** distinções entre receitas correntes/de capital, tratamento orçamentário/extraorçamentário, fonte, indicador de resultado primário; classificação institucional, funcional, programática, esfera, GND, modalidade de aplicação, elemento, RP, dotação e meta física. Referências conferidas: Manual Técnico de Orçamento 2026, versão 5; Lei nº 15.321/2025, art. 7º; Lei nº 4.320/1964, arts. 11 e 12; Lei Complementar nº 101/2000, art. 44. Casos progressivos fictícios e tabela de evidências para fiscalização. Os artigos legados 04, 04a e 04b não foram alterados.

**Checagem de publicação:** o conector confirmou o blob na main e dez itens. Status combinados retornaram lista vazia, sem evidência conclusiva de sucesso/falha de CI. A coordenação ainda deve integrar artigo no catálogo, hub, índice e percurso CGU e reconciliar `theoryRefs`, glossário e flashcards. Sem comprovação de Pages servido ou testes completos, **não certificar**.

**Progresso acumulado da frente:** cinco artigos CGU exclusivos trabalhados; **42 itens C/E didáticos** nos cinco textos; **0 certificados com todos os gates demonstrados**. Próxima etapa recomendada: verificar com a coordenação a integração dos cinco artigos antes de produzir novas versões; depois avançar às especializações de receita e despesa, sem replicar integralmente os legados.

## Preflight técnico da integração CGU: 17/11/2026

**Diagnóstico verificado diretamente na `main`, sem editar superfícies compartilhadas.** Os quatro artigos CGU criados após a separação existem como arquivos, mas estão ausentes do cadastro `articleIds` de `subjectId: orcamento-publico` em `data/catalogo-materias-por-concurso.json` (blob `2a410af8e42d8a7de774e0e5889837b98de6ab27`). O artigo específico PPA/LDO/LOA (`art-9dc8a6e2f31b47c0`) está presente.

| Ordem CGU | ID derivado | Caminho exato | ID legado a substituir somente na entrada CGU |
| :--- | :--- | :--- | :--- |
| Ciclo | `art-a07c26f4e92031ab` | `3 - Materias/Orcamento Publico/CGU 2026 - ciclo orcamentario e evidencias de auditoria.md` | `art-f6cfe9fbcc764554` |
| Esferas | `art-c84d6e02f3b7a915` | `3 - Materias/Orcamento Publico/CGU 2026 - esferas da loa e estatais dependentes.md` | `art-74d90e9fa1b3452c` |
| Princípios | `art-b419ac8206de7f35` | `3 - Materias/Orcamento Publico/CGU 2026 - principios orcamentarios e vedacoes.md` | `art-a2f47c0d6e184e93` |
| Classificações gerais | `art-e6b481a230fc795d` | `3 - Materias/Orcamento Publico/CGU 2026 - classificacoes de receitas e despesas.md` | `art-d8b1c5e6037249fa` |

**Operação para a coordenação de arquitetura:** (1) inventariar consumidores de cada ID antigo antes de qualquer troca, incluindo `theoryRefs`, fontes de questões, glossário, flashcards, URLs e aliases; (2) validar os quatro IDs e metadados no registro canônico; (3) substituir exclusivamente esses quatro membros da lista `articleIds` da **CGU** no catálogo v2, preservando a ordem do percurso e deixando a lista da Câmara intacta; (4) atualizar atômica e semanticamente `index.md`, hub e `1 - Planejamento/CGU 2026 - Percurso editorial Orcamento.md`, com respectivos títulos editoriais; (5) validar build, relações, integridade, workflow e conteúdo realmente servido no Pages; (6) registrar os SHAs e evidências de cada artigo para certificação. Se alguma referência do ID antigo não puder ser atualizada com segurança, não concluir aquela substituição e registrar o consumidor impeditivo.

**Superfícies inspecionadas:** `index.md` blob `38ede5ffd2935e2d00794101154117fcbfab0e1e`, hub blob `a472de283ad6544041c0521af4c3869feeec9b5a` e percurso CGU blob `6f76539a72263bc3889dde23ba71427e25b3540d`: nenhum contém o caminho dos quatro novos derivados. Em `data/flashcards.json`, blob `6d2dae48e08cfc903823d31ef655b677d26402cd`, os cinco IDs exclusivos CGU (incluindo PPA/LDO/LOA) não aparecem literalmente. Essa ausência de vínculo por ID **não demonstra ausência de cartões por tema**; verificar o esquema efetivo antes de alterar flashcards.

**Atenção aos IDs adicionais do catálogo CGU:** `art-9be1a39d536a47ea` e `art-3e62a81df4c74b90` permanecem sem identificação conclusiva por caminho nesta frente. `art-9be1a39d536a47ea` também consta da lista de Orçamento da Câmara: não remover, substituir nem alterar antes de resolver a propriedade. Não modificar dados pessoais ou `data/questoes-camara.json`.

**Status efetivo:** 5 artigos CGU trabalhados, 42 itens C/E didáticos e 0 certificações finais; quatro novos derivados aguardam integração técnica. Próxima etapa prioritária é a operação coordenada de catálogo/navegação e testes. Não atribuir certificação, conclusão de Pages ou migração apenas com a existência dos commits dos textos.

## Revisão focal: identificadores da despesa, 17/11/2026

A issue [#362](https://github.com/leorruas/concursos/issues/362) segue aberta; a coordenação ainda não integrou os quatro derivados ao catálogo, hub, índice e percurso no momento desta verificação. Sem modificar essas superfícies, a frente CGU realizou nova revisão do artigo `art-e6b481a230fc795d`, `CGU 2026 - classificacoes de receitas e despesas.md`.

**Correção e ampliação:** seção específica para separar identificador de resultado primário (RP), identificador de uso (IU), fonte, modalidade de aplicação (MA) e grupo de natureza da despesa (GND). Referência normativa: Lei nº 15.321/2025, art. 7º, texto vigente da LDO federal de 2026. Incluídos dois itens C/E originais, totalizando **12** no artigo, com respostas comentadas. Commit `8a928e0955574823f6c06accc805394baec39678`; blob verificado na main `7b98434ebedd3e1336711119abef23bfad365531`.

**Total acumulado corrigido:** cinco artigos exclusivos CGU trabalhados, **44 questões didáticas C/E**, **zero certificações finais**. O artigo ampliado exige novamente verificação de testes, CI, Pages, vínculos, título, indexação e escopo jurídico integral antes de certificação. O bloqueio de integração está documentado na issue #362, sob responsabilidade da coordenação; nenhum artefato Câmara nem catálogo global foi alterado nesta frente.

## Verificação normativa e correção focal em 17/11/2026: RP e IU

A issue de integração [#362](https://github.com/leorruas/concursos/issues/362) permanece aberta, sem comentários, e a `main` não apresentou commit da coordenação para resolver o cadastro e a navegação dos quatro derivados. A frente CGU manteve os arquivos compartilhados intactos e não criou novo artigo desconectado da trilha.

A leitura da Lei nº 15.321/2025 em sua publicação oficial confirmou: **art. 7º, § 4º**, RP relacionado à apuração do resultado primário; **art. 7º, § 5º**, IU utilizado para indicar se recursos são contrapartida nacional de empréstimos/doações ou outras aplicações. A redação genérica anterior foi substituída por essa distinção legal no artigo `art-e6b481a230fc795d`, incluindo revisão da justificativa do item C/E 11 e link primário ao Planalto. Commit `dcb0839b071c83a5b1c44d5f23420faf46b4402b`, blob conferido na main `7c3d0cdfc1c92f811f0434f2a96f31688304a039`.

**Progresso inalterado:** 5 artigos exclusivos CGU trabalhados, 44 itens C/E didáticos, 0 certificações demonstradas. A dependência efetiva permanece a integração coordenada e a validação de CI/Pages. Evitar atualizar automaticamente o status para certificado por causa desta correção de conteúdo.

## Auditoria de links cruzados: 17/11/2026

A issue de integração [#362](https://github.com/leorruas/concursos/issues/362) continua aberta (sem comentários e sem commit coordenado até a checagem da `main`). A frente CGU realizou leitura estrutural dos cinco artigos exclusivos, incluindo `articleId`, `concursoId`, `derivedFromArticleId` nos derivados, sequências C/E e wikilinks. Todos os 44 itens usam numeração contínua em seus respectivos artigos, e os quatro artigos derivados possuem IDs próprios e metadados de origem; PPA/LDO/LOA é artigo CGU original, sem `derivedFromArticleId`.

**Problema real corrigido:** `CGU 2026 - ppa ldo e loa.md` apontava para legados compartilhados de ciclo orçamentário e esferas da LOA, embora já existam as duas notas exclusivas CGU. Ambos os wikilinks foram substituídos por destinos CGU já confirmados como arquivos existentes. O aviso editorial antigo foi ajustado para registrar a dependência de integração de catálogo e índice. **Commit:** `e5f7f20f4bde22899fb892c9ed427aade94f642b`, blob `6f28c540338f179cb4182cb20072381108c15b86`; a identidade `art-9dc8a6e2f31b47c0` e os títulos de seção foram preservados. Arquivos da Câmara e compartilhados permaneceram intactos.

**Situação geral:** cinco artigos exclusivos CGU trabalhados, 44 questões C/E, zero certificados. A correção de links internos não substitui atualização coordenada de `articleIds`, indexação, testes CI e verificação real de Pages. Próxima etapa: coordenação executar #362, depois auditar e certificar individualmente no SHA integrado.

## Verificação da fonte da LDO: 17/11/2026

Issue de integração [#362](https://github.com/leorruas/concursos/issues/362) ainda aberta e sem commit coordenado na `main` nesta verificação. Ao conferir a fonte do art. 7º da LDO federal 2026, o endereço do Planalto usado no artigo de classificações redirecionou para a página inicial do portal e não ofereceu o texto solicitado. O link foi substituído por publicação da **Câmara dos Deputados** com o conteúdo legal consultável, preservando a seção e os 12 itens C/E. Commit `c6ade2ab1c820468d7997c55a42ce388295421a0`, blob `3bb5dc2fa02fccbaf2ace599b86d8bbe61a15384`.

Este é reparo de fonte, não certificação jurídica integral ou de Pages. **Progresso:** cinco artigos CGU trabalhados, 44 itens C/E, zero certificados. A integração da navegação depende da coordenação, com testes e publicação por confirmar.

## Correção jurídica relevante: IU e LDO 2026, 17/11/2026

Foi identificada e corrigida **citação normativa incorreta em revisão anterior**: a finalidade do identificador de uso (IU) está no **art. 7º, § 10, da Lei nº 15.321/2025**, e não no § 5º. O **§ 5º** veda em regra dotações financeiras e primárias simultâneas na mesma ação, ressalvada a reserva de contingência. O **§ 4º** trata do identificador de resultado primário (RP). A leitura integral do art. 7º, §§ 4º, 5º e 10, foi confrontada na publicação original da Câmara (Lei nº 15.321/2025). O § 10 também discrimina IU 6 (despesas de saúde) e IU 8 (ensino), além das contrapartidas de empréstimos e doações.

**Reparo aplicado ao artigo exclusivo de classificações CGU:** commit `9b145f8dd66025fd051fb3e640c6556c30ab8458`, blob `47307289394ae47b12159006c5e795da1d7b7fd6`. Atualizada a seção e a explicação do item C/E 11; preservadas 12 questões e `articleId: art-e6b481a230fc795d`.

**Estado:** o erro da referência anterior impede considerar como certificado qualquer estágio jurídico anterior deste artigo. Issue de integração [#362](https://github.com/leorruas/concursos/issues/362) ainda aberta, sem alteração coordenada do catálogo. Progresso mantido: 5 artigos CGU trabalhados, 44 itens C/E e **0 certificações finais**. Antes do fechamento, completar revisão de normas e referências com testes e CI/Pages, sem pressupor certificação por correção isolada.

## Revisão jurídica e integridade ampliada: 17/11/2026

**Fontes oficiais conferidas em HTML:** Constituição Federal atualizada, art. 167, VI e § 5º, no portal do TSE; Lei nº 15.321/2025 (LDO federal 2026), art. 52, §§ 6º, 7º e 9º, na publicação legislativa da Câmara; Decreto nº 12.500/2025, texto atualizado, art. 7º, caput e §§ 1º e 2º, e art. 24, na Câmara. A checagem confrontou regra geral e ressalvas; não significa validação de todos os dispositivos citados nos cinco artigos.

**Artigo CGU Princípios:** `art-b419ac8206de7f35`, commit `fef1e3155d890edf1eea5aaf8a20fbf694d56e34`, blob `349c6e57025cd9c5045642db773bae4a1273d6f2`. Adicionada seção de transposição, remanejamento e transferência: art. 167, VI e ressalva específica do § 5º em ciência, tecnologia e inovação, com critério e evidência de auditoria. Acrescentados itens C/E 11 e 12, total **12**. Não se incluiu outra exceção não confirmada. Mantidos `articleId`, origem, aliases e títulos existentes.

**Artigo CGU Estatais:** `art-c84d6e02f3b7a915`, commit `307ae6833532e4e519555570ca74594fd5313e8d`, blob `7e1cfcdf7d10a132f3e0845cb7d273e7e3725b2e`. Adicionada distinção entre situação jurídica e regime orçamentário no contrato de gestão (Decreto nº 12.500/2025, art. 7º e §§) e hipótese cumulativa do art. 52, § 9º, da LDO 2026. Acrescentados itens C/E 9 e 10, total **10**; inserida fonte oficial da LDO.

**Releitura técnica na main:** cinco notas exclusivas conferidas por blob e `articleId`; todas trazem `concursoId: cgu-2026`; os quatro derivados possuem `derivedFromArticleId`. Quantidades de itens em sequência contínua: PPA/LDO/LOA **6**, ciclo **8**, esferas **10**, princípios **12**, classificações **12**, total **48 itens didáticos C/E**. Todos os wikilinks internos registrados nas cinco notas apontam para os caminhos próprios CGU já identificados, dentro deste conjunto. Não foram executados testes Node locais nesta frente; a confirmação é de leitura remota estática.

**Integração continua impedida:** a issue [#362](https://github.com/leorruas/concursos/issues/362) está aberta e o catálogo `data/catalogo-materias-por-concurso.json` (blob `2a410af8e42d8a7de774e0e5889837b98de6ab27`) contém somente PPA/LDO/LOA entre esses cinco IDs; ciclo, esferas, princípios e classificações não foram integrados. Os testes `scripts/test-article-identity.js`, `scripts/test-contest-catalog.js` e `scripts/test-contest-article-filter.js` foram inspecionados; os dois últimos confirmam por código que a interface do concurso depende do catálogo. O workflow de Pages foi inspecionado, mas a execução CI de cada commit e a publicação servida não foram comprovadas pelo conector (o endpoint disponível é de PR). Não afirmar sucesso.

**Estado geral:** cinco artigos CGU trabalhados, 48 itens C/E e **zero artigos integralmente certificados**. Próxima etapa: integração coordenada de IDs/navegação via #362, validação do último HEAD e Pages, auditoria jurídica/didática final por ID. Nenhum arquivo compartilhado, artigo da Câmara, questão do banco ou EPUB foi alterado nesta execução.

## Integração técnica concluída na main: PR #363, 17/11/2026

A integração anteriormente bloqueada na issue [#362](https://github.com/leorruas/concursos/issues/362) foi preparada em branch isolada `coord/cgu-orcamento-integracao-362`, revisada contra o estado da `main` e integrada por **squash merge** do [PR #363](https://github.com/leorruas/concursos/pull/363). **Commit integrado na main:** `2c26b3219101bae1686136fa66e70b91af0e70c4`. A releitura remota da main confirmou o catálogo atualizado, o índice, o hub, o percurso editorial e os vínculos dos flashcards. Essa operação coordenada respeitou a propriedade de arquivos e manteve os 21 `articleIds` de Orçamento Público da Câmara intactos.

**Quatro substituições realizadas somente no catálogo de Orçamento Público da CGU:** ciclo `art-f6cfe9fbcc764554` → `art-a07c26f4e92031ab`; esferas `art-74d90e9fa1b3452c` → `art-c84d6e02f3b7a915`; princípios `art-a2f47c0d6e184e93` → `art-b419ac8206de7f35`; classificações `art-d8b1c5e6037249fa` → `art-e6b481a230fc795d`. A entrada própria de PPA, LDO e LOA `art-9dc8a6e2f31b47c0`, os dois IDs adicionais não inventariados e os demais legados foram preservados.

**Navegação:** quatro links CGU acrescentados ao `index.md`, nova seção com as cinco entradas no hub histórico, quatro substituições no percurso CGU. As referências antigas da Câmara não foram excluídas. O manifesto e a lista filtrada do concurso foram testados pelo workflow da PR.

**11 flashcards CGU reconciliados:** nove com `note.articleId` apontando para a nova nota CGU de princípios e dois para a nova nota de ciclo. Os 11 campos `note.section` apontam para seções de fato existentes nos novos arquivos. IDs e enunciados dos cartões foram preservados; não houve alteração no banco de questões da Câmara.

**Evidência de CI:** workflow `Validar site público (PR)`, execução [44169126435](https://github.com/leorruas/concursos/actions/runs/44169126435), conclusão `success`, para HEAD da PR `46a1d59b036387a28b200d413a90e612cef4b1e0`. Foram constatados testes de identidade, catálogo, filtro CGU/Câmara, invariantes, build, privacidade, flashcards, glossário e busca aprovados. Duas tentativas anteriores falharam em asserções antigas de contexto orçamentário em `scripts/test-contest-article-filter.js`; o teste foi corrigido e a última execução passou, incluindo verificação da permanência do artigo histórico na Câmara. A última execução da PR passou, **mas não é prova de deploy Pages do merge**.

**Pages:** não foi possível confirmar a execução do workflow de publicação na `main` nem o catálogo realmente servido na URL pública `https://leorruas.github.io/concursos/data/catalogo-materias-por-concurso.json`. A leitura pública não retornou conteúdo verificável por esta interface, e a consulta do conector de GitHub Actions expõe somente runs de PR. É necessário conferir o workflow `Publicar no GitHub Pages` do commit integrado e a URL servida antes de declarar publicação confirmada.

**Certificação:** 5 artigos exclusivos CGU trabalhados, 48 questões C/E didáticas e **0 certificações editoriais finais formalizadas**. A integração de catálogo e os testes da PR estão comprovados; permanece auditoria jurídica/didática de fechamento por ID, conferência das fontes e do site ao vivo e certificação por SHA. A etapa posterior de separação dos demais legados do percurso CGU continua pendente. Nenhum EPUB foi gerado.

## Fechamento do lote técnico pós-integração: 17/11/2026

**Issue #362 atualizada:** a operação de catálogo, índice, hub e percurso foi concluída no PR #363. O título da issue passou a destacar a **verificação do Pages e as certificações**, sem reabrir o bloqueio de arquitetura. Histórico de integração e CI do PR: merge `2c26b3219101bae1686136fa66e70b91af0e70c4`; CI de PR `44169126435`, conclusão `success`.

**Revisão dos cinco rodapés editoriais:** textos que indicavam indevidamente a integração como futura foram atualizados na `main` sem alterar `articleId`, `derivedFromArticleId`, títulos principais, seções de teoria, itens C/E ou gabaritos. Commits sequenciais `5bfa474573f644b8312c445cfbd2f0787bef9b22`, `77584579412c97af1fec4850eac5fa09d55161b8`, `b409482f236faf2148265a8a0a92fe6da7a94119`, `91f5aa81a34ffefdbcee4fe4687d588904d4a4b1` e `f4b4b2c8a997155890a1ef3f7bdf9fb9efaf7283`.

| ArticleId CGU | Assunto | Blob final da leitura remota | Itens C/E e gabaritos |
| :--- | :--- | :--- | ---: |
| `art-9dc8a6e2f31b47c0` | PPA/LDO/LOA | `983e9cc298a3888fdcb4bef422f805d9655ed494` | 6/6 |
| `art-a07c26f4e92031ab` | Ciclo e evidências | `18b408f5c8fdcac46d37283a418f81d5f69d2c86` | 8/8 |
| `art-c84d6e02f3b7a915` | Esferas e estatais | `cc4d84e988fa79fff1724f748550fb7adc9c9e74` | 10/10 |
| `art-b419ac8206de7f35` | Princípios e vedações | `f7c0622362164a2c5a7d83ee868db5abb5e42159` | 12/12 |
| `art-e6b481a230fc795d` | Classificações | `1cf80e48ed9e89d0a10194ee9ace22c36e4281a9` | 12/12 |

**Checagem estática posterior:** todos os 48 itens têm números contínuos dentro do artigo e respostas explícitas **Certo** ou **Errado**; os wikilinks entre as cinco notas têm destinos existentes; os cinco `articleId` e metadados `concursoId` foram preservados. Verificação de referências remotas comprovada apenas para os documentos pontuais indicados nas auditorias anteriores. **Não equivale à releitura jurídica integral de todos os itens**, nem a um teste de renderização real.

**Referências residuais a legados:** foram procurados IDs de origem em `data/flashcards.json`, `data/edital-itens.json`, `data/glossario/flashcard-equivalencias.json` e `data/planos-estudo/cgu-2026.json`: zero correspondências literais para os quatro IDs migrados. Arquivos hipotéticos `data/questoes-cgu.json` e `data/questoes.json` não existem nos caminhos consultados. Essa busca não comprova ausência de referências em arquivos não inventariados; preservar o banco da Câmara.

**Gate Pages ainda não comprovado:** `web` não conseguiu abrir o catálogo público `https://leorruas.github.io/concursos/data/catalogo-materias-por-concurso.json` nem a página das execuções do GitHub; o conector para workflow por SHA cobre somente eventos de PR. O CI verde da integração não é prova do deploy do HEAD posterior. Conferir o workflow `Publicar no GitHub Pages`, o `manifest.json` e o catálogo ao vivo, conforme `1 - Planejamento/Contrato de publicacao GitHub Pages.md`, antes de declarar certificação. A inspeção visual pode ser ressalva isolada se todos os demais requisitos de `AGENTS.md` forem atendidos.

**Progresso:** 5 artigos exclusivos trabalhados, 5 revisões estruturais conferidas, 48 C/E gabaritados, **0 certificados finais**. O trabalho técnico avançou: o antigo bloqueio de catálogo foi resolvido. Próximo gate: Pages ao vivo e segunda leitura jurídica/didática integral por ID e SHA. Nenhum EPUB.

## Auditoria jurídica focal e atualização: 17/11/2026, lote de 55 C/E

**Conferência de normas primárias oficiais:** Lei nº 15.321/2025 (LDO federal de 2026) em publicação integral da Câmara, art. 6º, §§ 2º e 4º, art. 7º, §§ 2º, 4º a 10, e art. 52, §§ 6º, 7º e 9º; Decreto nº 12.500/2025 atualizado, arts. 7º e 9º; ADCT, art. 35, § 2º, incisos I a III, na Câmara. As normas foram cotejadas em suas redações disponibilizadas em 17/11/2026. As demais proposições dos capítulos ainda exigem segunda leitura integral; a presente verificação foi focal.

**PPA/LDO/LOA:** `art-9dc8a6e2f31b47c0`. Incluídos quadro comparativo de prazos federais transitórios do ADCT, com separação entre envio pelo Executivo e devolução pelo Congresso, e dois itens C/E. Commit `bcf0ff682ed910e23ac30a40691a7ef4574f51be`, blob `edbaab34e88481ea2413104e93dd56a8310b3956`. Passou a 8 itens.

**Esferas da LOA e estatais:** `art-c84d6e02f3b7a915`. Esclarecido que o art. 6º, § 2º, da LDO exige a previsão dos repasses do controlador nos Orçamentos Fiscal ou da Seguridade e que o art. 6º, § 4º, estabelece envio à CMO em 30 dias **da aprovação**. Comparado ao Decreto nº 12.500/2025, art. 9º, I, com envio em 30 dias **da assinatura** (observar art. 22 do decreto); dois marcos distintos. Adicionados 3 itens C/E e exemplos de fiscalização. Commits `e8904e94ada846e7d96465af0799c49629a93e56`, `e2c145e34a5db54f0331b5b81010994baf8f809c`, blob `22def67b665a22e766c7bd7164fe1b37f92b34b8`. Passou a 13 itens.

**Classificações:** `art-e6b481a230fc795d`. Inserida tabela de RP 0 a RP 8 (códigos aplicáveis na LDO 2026) e modalidades de aplicação MA 30, 40, 50, 90, 91 e bloqueio de MA 99 no empenho, art. 7º, §§ 4º e 6º a 9º, com dois itens C/E. Commit `d0464668d7b961c4e5ef92bf7030352b18de8d4e`, blob `c21873edc7eeac1b8ff6634926752fe658a74cd9`. Passou a 14 itens.

**Conferência estrutural na main dos cinco artigos:** PPA (8), ciclo (8), esferas (13), princípios (12), classificações (14) = **55 questões didáticas C/E**. Todos os itens têm numeração contínua e gabarito explícito. Os oito wikilinks entre as cinco notas apontam para os destinos reais da mesma trilha. IDs/aliases e origem dos derivados preservados. Outros dois artigos não tiveram revisão jurídica integral adicional nesta rodada. Não houve alteração no catálogo da Câmara, em `data/questoes-camara.json`, nos glossários compartilhados nem em EPUB.

**Testes e deploy:** o CI verde do PR #363 refere-se à integração anterior, não aos últimos três artigos editados. Uma validação do HEAD atualizado é necessária; a publicação efetiva do catálogo e do manifesto no Pages também ainda não foi confirmada. Até comprovação, **0 certificados finais**, mesmo com 55 itens gabaritados. A issue #362 registra o gate do Pages.

### Gate de regressão do lote de 55 itens

Esta revisão solicita nova execução de **`Validar site público (PR)`** com a versão posterior aos commits dos três capítulos jurídicos. Gate a registrar após execução: `run_id`, conclusão, SHA exato do HEAD e etapas de identidade, catálogo por concurso, navegação, build, privacidade, flashcards e busca. A verificação do Pages ao vivo continua uma etapa separada do CI do PR, conforme contrato de publicação. Não encerrar a certificação por inferência de um teste isolado.

## CI de regressão posterior ao lote de 55 itens: sucesso em 17/11/2026

**Comprovação do teste do conjunto atualizado:** o PR [#364](https://github.com/leorruas/concursos/pull/364), branch `audit/cgu-orcamento-55-itens-ci`, HEAD `f7968683c6f64447d93d9ebaccbaa9d3712b13f0`, disparou `Validar site público (PR)`, execução [44171386222](https://github.com/leorruas/concursos/actions/runs/44171386222), concluída com **`success`**. Passaram os testes de flashcards, identidades de artigos, invariantes do vault, catálogo e filtros por concurso, montagem de `_site`, privacidade, glossário, busca e rotas. O PR foi integrado por squash ao `main` em `e7377012ce60777c4468650afcdf9b8519f233c3`. Esse CI considera os conteúdos atualizados que já estavam na base do PR, incluindo as 55 questões dos cinco artigos CGU.

**Escopo do sucesso:** build e testes funcionais da branch/PR. **Não** é evidência do workflow `Publicar no GitHub Pages` do merge, nem confirmação de que o `manifest.json` ao vivo corresponda ao último HEAD. A certificação jurídica editorial continua 0/5, porque a segunda leitura integral e o gate Pages ainda carecem de provas. A verificação estática dos 55 itens e os cotejos normativos focais foram registrados acima. A issue #362 permanece responsável pelo acompanhamento técnico residual.

**Próximo fechamento recomendado:** conferir execução de Pages do commit mais recente que modificou `3 - Materias`, comparar o manifesto ao vivo e validar cada artigo por ID/SHA; registrar apenas então a certificação editorial com eventual ressalva visual.

## Revisão normativa de estatais e nova contagem: 17/11/2026

**Confronto com fonte primária:** Lei nº 15.321/2025 (LDO 2026) publicada pela Câmara, art. 52, §§ 10, 11 e 12, cotejada com o capítulo `art-c84d6e02f3b7a915`. O § 10 afasta das empresas integrantes do Orçamento de Investimento as normas gerais da Lei nº 4.320/1964 quanto a **regime contábil, execução orçamentária e demonstrações contábeis**, com ressalva expressa do § 11 para os arts. 109 e 110. O § 12 exige atualização **online** da execução no SIOP. Esse tratamento era uma omissão didática: o capítulo antes apresentava empenho, liquidação e pagamento como possíveis evidências, mas não contrastava claramente os regimes orçamentários.

**Correção aplicada em `main`:** `CGU 2026 - esferas da loa e estatais dependentes.md`, commit `c6fc09ddca2e9571187b58752e5a4910f2210050`, blob `13b1fecdcb240ba7d87dd3d3ed812f64865c75f7`. Acrescentada seção específica de exceção às normas gerais, referência ao SIOP, correção da tabela de evidências e dois itens comentados (14 e 15). O capítulo passou a **15 itens**.

**Revisão transversal de itens (leitura dos enunciados e justificativas):** PPA 8, ciclo 8, esferas/estatais 15, princípios 12, classificações 14, total **57 itens C/E**. Números consecutivos e presença de gabaritos conferidos nos cinco blobs de `main`: PPA `edbaab34e88481ea2413104e93dd56a8310b3956`, ciclo `18b408f5c8fdcac46d37283a418f81d5f69d2c86`, estatais `13b1fecdcb240ba7d87dd3d3ed812f64865c75f7`, princípios `f7c0622362164a2c5a7d83ee868db5abb5e42159`, classificações `c21873edc7eeac1b8ff6634926752fe658a74cd9`. Cotejo focal com a LDO 2026 e o Decreto nº 12.500/2025, sem extrapolar para certificação de todas as passagens da literatura e da legislação.

**Gates:** PR #364 CI aprovado para o lote anterior de 55 itens, mas ainda não abrange os dois novos itens (56 e 57 acumulados). Necessário novo CI de regressão após a adição. GitHub Pages ao vivo e `manifest.json` mais recente não foram verificáveis por meio da consulta pública disponível; esse bloqueio permanece na issue #362. As revisões jurídicas e didáticas dos cinco artigos são tratadas como **avançadas, sem certificação final**, respeitando o critério de `AGENTS.md`. A integração de catálogo/flashcards permanece concluída; não houve alteração na Câmara.

### Execução de regressão para 57 itens

A presente branch solicita nova execução do workflow de validação PR sobre o conteúdo atualizado (57 itens C/E em cinco notas CGU). Registrar o SHA e o resultado de todas as etapas, mantendo a verificação de Pages separada e sem atribuir certificação por CI isolado.

## Regressão de 57 itens certificada tecnicamente no PR: 17/11/2026

**Evidência GitHub Actions:** [PR #365](https://github.com/leorruas/concursos/pull/365), HEAD `8b1622d65e7e027fcfd899a056ece73691d7c162`, execução [44172356946](https://github.com/leorruas/concursos/actions/runs/44172356946) do workflow `Validar site público (PR)`, resultado **success**. A execução aprovou catálogo/identidades, filtros CGU/Câmara, build, invariantes, privacidade, flashcards, glossário, busca e deep links. PR integrado por squash na `main` no commit `b6817db31da7e974ee2a4460e1b203e4ac2496c2`.

**Escopo comprovado:** o estado da branch continha cinco notas da CGU com **57 itens C/E**, incluindo o acréscimo da distinção de regime do Orçamento de Investimento (art. 52, §§ 10-12, LDO 2026). Os 57 itens foram verificados por sequência e presença de gabarito na main; as normas centrais de LDO 2026 e Decreto 12.500/2025 foram cotejadas nos pontos focalmente alterados. O sucesso do workflow não certifica automaticamente o conteúdo doutrinário e não equivale ao deploy do último HEAD no GitHub Pages.

**Próximos gates:** (1) comprovar execução de Pages e correspondência do manifesto e do catálogo servidos ao commit integrado mais recente; (2) concluir confronto jurídico/didático integral por artigo, com fontes e tabelas, não só enunciados; (3) formalizar certificação por `articleId` e SHA, quando houver as provas. **Certificados finais: 0/5**, por falta de evidência suficiente dos dois gates. A issue #362 segue aberta e rastreia o Pages.

## Proteção automatizada contra regressão: 17/11/2026

**PR [#366](https://github.com/leorruas/concursos/pull/366) integrado à main** por squash, commit `aa5e6e00aaafdc7e10bbedcd1a69995306fa9ab9`. Workflow `Validar site público (PR)`, execução [44174763880](https://github.com/leorruas/concursos/actions/runs/44174763880), HEAD `e7a5cfe5eb95ab82ddaef06868e6a070566ade84`, conclusão **success**.

O teste `scripts/test-contest-catalog.js` agora exige explicitamente a identidade do artigo PPA da CGU e a presença dos outros quatro IDs exclusivos no currículo CGU, sem retorno acidental dos seus IDs históricos ao mesmo catálogo. Simultaneamente, protege a permanência dos quatro artigos históricos na lista da Câmara, sem inclusão indevida dos derivados CGU. O teste também verifica que os flashcards do orçamento CGU não retornem aos IDs antigos e que a presença dos vínculos próprios de ciclo e princípios não seja perdida. O validador canônico `scripts/validate-flashcards.js` continua a verificar a existência das seções referenciadas nos artigos.

**O que essa evidência cobre:** identidade, pertencimento ao concurso, compatibilidade histórica e regressão da navegação/flashcards verificados pelo CI. **Não cobre:** verificação visual, conteúdo jurídico integral, publicação no Pages em produção. A separação técnica está mais protegida, mas a **certificação editorial continua 0/5**. Os cinco capítulos CGU mantêm **57 itens C/E**, IDs próprios e a arquitetura implantada.

**Pages:** tentativas de leitura pública de `/manifest.json` e `/data/catalogo-materias-por-concurso.json` não retornaram conteúdo acessível pelo mecanismo disponível. Não inferir sucesso de deploy a partir de CI de pull request.

## Auditoria de acesso a fontes primárias: 17/11/2026

**Problema documentado:** os endereços do Planalto usados nas cinco notas CGU para Constituição Federal, Lei nº 4.320/1964 e Lei Complementar nº 101/2000 redirecionavam, na consulta pública de 17/11/2026, para portal de verificação de acesso, sem entregar diretamente o texto legal. Foram localizadas e abertas as versões **atualizadas em HTML** dessas três normas no portal oficial da Câmara dos Deputados, com identificação da norma e redação pesquisável:
- Constituição Federal: `https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html`
- Lei nº 4.320/1964: `https://www2.camara.leg.br/legin/fed/lei/1960-1969/lei-4320-17-marco-1964-376590-normaatualizada-pl.html`
- Lei Complementar nº 101/2000: `https://www2.camara.leg.br/legin/fed/leicom/2000/leicomplementar-101-4-maio-2000-351480-normaatualizada-pl.html`

**Reparo realizado nas cinco notas:** 14 ocorrências de referências ao Planalto foram substituídas por links para os textos atualizados da Câmara, sem alterar os enunciados, justificativas, classificações, `articleId` ou vínculos da Câmara. Os endereços antigos do Planalto não permanecem nessas cinco notas. Commits de artigos: `1cd1ec3b3d0df85f5a90ca858509bee3ccc61ab9`, `b3362b3f2ebd1257e576fdeacee2d5457b5bd296`, `c6a171a274abe435ff24dfbd17af444bee2248cc`, `1a61899ca2e4f1f984b73a725a4581f37a6625bf` e `b7490c492aaf123eb1fb01486423abd02162df16`. Os demais links oficiais, incluindo a LDO 2026, ADCT e Decreto nº 12.500/2025, foram mantidos.

**Leitura estrutural posterior na main:** as cinco notas preservam IDs individuais; itens C/E por capítulo: 8 + 8 + 15 + 12 + 14 = **57**. Os 57 itens são consecutivos e têm gabaritos explícitos; os wikilinks examinados entre as cinco notas apontam para os destinos CGU existentes. Não se constatou quebra estrutural na leitura remota.

**Estado de certificação:** o reparo de acessibilidade das fontes não constitui verificação de todas as citações jurídicas ou de efeitos de alterações legislativas. Permanecem **0/5 certificações finais** até a segunda leitura jurídica/didática integral por artigo, aprovação dos gates técnicos atuais e verificação de manifesto e catálogo efetivamente servidos no GitHub Pages. A presente branch solicita CI de regressão sobre o lote de correções de fontes; registrar o run e resultado ao final. A issue #362 acompanha o gate Pages.

## Homologação técnica do reparo de fontes: 17/11/2026

O [PR #367](https://github.com/leorruas/concursos/pull/367) validou por GitHub Actions o estado posterior à troca de 14 URLs oficiais nos cinco artigos CGU. Workflow `Validar site público (PR)`, execução [44177038965](https://github.com/leorruas/concursos/actions/runs/44177038965), HEAD `f7ed5ba2fbbf66948174be16e09b756b7fe2b20a`, conclusão **success**; integrado por squash na `main` no commit `e6759cc1aeacd7ffd484bdeff59fd96b763afa3b`. Preservados os 57 gabaritos C/E e a independência das trilhas CGU/Câmara. O novo CI cobre as mesmas validações funcionais/estruturais do pipeline público de PR, incluindo catálogo, referências, flashcards, build, privacidade e busca; não testa o `manifest.json` servido pelo Pages após o merge.

**Segunda leitura focal de fontes atualizadas da Câmara:** conferidos o art. 35, § 2º, do ADCT para os prazos federais, os arts. 2º, 3º, 5º, 6º e 58 da Lei nº 4.320/1964, os arts. 2º, 4º e 9º da LRF (Lei Complementar nº 101/2000), e os arts. 6º, 7º e 52 da LDO 2026 (Lei nº 15.321/2025) nos pontos utilizados como base para as questões e explicações. Não se infere auditoria integral de todos os trechos constitucionais e legais citados a partir desse cotejo focal.

**Status por artigo mantido:** PPA `art-9dc8a6e2f31b47c0`, ciclo `art-a07c26f4e92031ab`, esferas `art-c84d6e02f3b7a915`, princípios `art-b419ac8206de7f35` e classificações `art-e6b481a230fc795d` continuam integrados, com fontes acessíveis e **certificação editorial final pendente**. Cinco artigos, 57 itens C/E, 0 certificados. O único gate do PR #367 já foi aprovado; verificar a execução de deploy e o catálogo/manifesto ao vivo no Pages e terminar o confronto editorial integral por `articleId` antes da certificação. A issue #362 continua aberta para o fechamento.

## Segunda leitura integral individual: PPA/LDO/LOA e ciclo, 17/11/2026

Foram realizadas leituras integrais do texto, tabelas, exemplos, oito enunciados e oito gabaritos de cada capítulo abaixo, com confronto dos pontos normativos específicos com as **versões atualizadas em HTML da Câmara dos Deputados** e com o programa do edital CGU (Cargo 1, Auditoria). O objetivo foi fechar a dimensão editorial de cada artigo; publicação no Pages é controle distinto.

### PPA, LDO e LOA, `art-9dc8a6e2f31b47c0`

**Blob auditado:** `af7a1cf890b9b013bdd80125b7a27e3baf2d7cb4`. Conferidos: natureza e iniciativa das três leis (CF art. 165); PPA regionalizado e vigência intermandatos (CF art. 165, § 1º; ADCT art. 35, § 2º, I); investimento plurianual e alternativa de lei autorizativa (CF art. 167, § 1º); conteúdo da LDO (CF art. 165, § 2º; LRF art. 4º); limitação bimestral de empenho (LRF art. 9º); LOA e três orçamentos (CF art. 165, § 5º); marcos de envio e devolução dos projetos federais (ADCT art. 35, § 2º, I a III). As tabelas de instrumentos, prazos e evidências foram lidas integralmente e mantidas. C/E **1 a 8** foram cotejados individualmente com os dispositivos e a diferença entre autorização, execução e resultado; gabaritos coerentes. Os dois wikilinks para artigos próprios CGU têm destinos identificados na `main`. Sem Mermaid. Nenhuma lacuna que exigisse alteração foi identificada nesta rodada.

**Status editorial:** `segunda leitura jurídica e didática concluída; certificação técnica de publicação pendente`, com SHA acima. **Não classificar como certificado**, nem mesmo com ressalva visual, até evidência do último Pages correspondente ao conteúdo.

### Ciclo orçamentário e evidências de auditoria, `art-a07c26f4e92031ab`

**Blob auditado:** `3f8a392726c63313155ff53d8849c0f3129983c4`. Conferidos: quatro fases do ciclo e sua sobreposição; iniciativa do Executivo e deliberação legislativa (CF art. 165); lei orçamentária (Lei nº 4.320/1964, art. 2º); empenho, limite de créditos, liquidação e ordem de pagamento (Lei nº 4.320/1964, arts. 58 a 65); programação e limitação de empenho (LRF arts. 8º e 9º); controle interno e externo e avaliação de resultados (CF arts. 70, 71 e 74). Tabelas, caso de equipamentos, evidências documentais, conceitos de produto versus resultado e C/E **1 a 8** revistos individualmente, sem contradições detectadas. Destino do wikilink PPA CGU identificado na `main`; sem Mermaid.

**Status editorial:** `segunda leitura jurídica e didática concluída; certificação técnica de publicação pendente`, no SHA indicado. A certificação final exige Pages ao vivo e os demais gates de `AGENTS.md`.

### Referências primárias efetivamente consultadas

- CF atualizada: `https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html`, arts. 70, 71, 74, 165 e 167.
- ADCT atualizado: `https://www2.camara.leg.br/legin/fed/conadc/1988/constituicao.adct-1988-5-outubro-1988-322234-normaatualizada-pl.html`, art. 35, § 2º.
- Lei nº 4.320/1964 atualizada: `https://www2.camara.leg.br/legin/fed/lei/1960-1969/lei-4320-17-marco-1964-376590-normaatualizada-pl.html`, arts. 2º, 58 a 65.
- LRF atualizada: `https://www2.camara.leg.br/legin/fed/leicom/2000/leicomplementar-101-4-maio-2000-351480-normaatualizada-pl.html`, arts. 4º, 8º e 9º.
- Edital CGU nº 1/2026 (Cebraspe), programa oficial: `https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html`.

**Situação geral desta etapa:** 2 de 5 artigos têm segunda leitura individual e registro documental concluídos; 3 continuam necessitando desse mesmo nível de revisão. Mantidos 57 itens C/E, IDs e referências. **0 de 5 certificações finais**. Evidências técnicas anteriores: PR #367, workflow `44177038965`, `success`; faltam comprovação do Pages ao vivo e certificação no SHA correspondente. Não repetir as revisões já comprovadas sem evidência nova.
