---
title: "CGU 2026: estado editorial de Orçamento Público"
type: estado-auditoria-editorial
concursoId: cgu-2026
status: revisao-em-andamento
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
