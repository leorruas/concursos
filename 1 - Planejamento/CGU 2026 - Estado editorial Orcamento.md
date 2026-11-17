---
title: "CGU 2026: estado editorial de Orçamento Público"
type: estado-auditoria-editorial
concursoId: cgu-2026
status: auditoria-de-cobertura-iniciada
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

**Certificados CGU nesta frente: 0.** O artigo próprio `art-9dc8a6e2f31b47c0` permanece **a verificar integralmente**: leitura jurídica, didática, C/E, glossário, flashcards, links, provas técnicas e Pages. Nenhuma sessão de estudo foi criada.

**Próximo artigo:** `CGU 2026 - ppa ldo e loa.md`; após auditoria integral, registrar resultado por SHA, normas, testes e evidência efetiva de publicação, admitindo apenas ressalva visual isolada. Depois, criar derivados CGU dos legados, um por vez, com IDs novos, sem editar os originais. Requisitar à coordenação a operação atômica de vínculo após cada lote.
