---
title: "Orçamento Público: dependências de IDs compartilhados CGU/Câmara"
type: auditoria-arquitetura
status: diagnostico-parcial
created: 2026-11-17
updated: 2026-11-17
---

# Orçamento Público: dependências e migração dos 11 IDs

**Snapshot:** catálogo v2 e árvore da `main` em `229ba45becb569d17f0a2fa3685392670e2319e3`, com inspeção textual das superfícies de apoio. O estado de certificação dos artigos não foi alterado. O diagnóstico é uma fotografia e deve ser revalidado após commits paralelos.

## Conclusão técnica

O catálogo v2 mantém **11 `articleIds` de Orçamento Público simultaneamente em CGU 2026 e Câmara 2026**. Há cinco notas específicas da CGU na árvore: `CGU 2026 - ciclo orcamentario e evidencias de auditoria.md` (`art-a07c26f4e92031ab`), `CGU 2026 - ppa ldo e loa.md` (`art-9dc8a6e2f31b47c0`), `CGU 2026 - esferas da loa e estatais dependentes.md` (`art-c84d6e02f3b7a915`), `CGU 2026 - principios orcamentarios e vedacoes.md` (`art-b419ac8206de7f35`) e `CGU 2026 - classificacoes de receitas e despesas.md` (`art-e6b481a230fc795d`). A existência de um artigo derivado não certifica automaticamente seu conteúdo nem autoriza remover seu artigo de origem.

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
| ID a localizar no inventário canônico | `art-9be1a39d536a47ea` | 4 | 0 |

**Método:** contagem de aparições literais do ID nas strings JSON, e não de cartões/verbetes distintos. Arquivos examinados: `data/flashcards.json` e `data/glossario/termos/orcamento-publico{,-complementos,-empenho,-fiscal,-siglas}.json`. Há **101 ocorrências de IDs compartilhados em flashcards**. A contagem dos glossários cobre apenas os cinco arquivos listados, não todo o acervo de referências. `data/questoes-camara.json` não foi efetivamente inspecionado: a leitura por esta conexão retornou conteúdo vazio, impossibilitando qualquer afirmação sobre integridade de `theoryRefs` desse banco. **O banco não foi modificado.**

## Bloqueios e decisões de migração

O `art-9be1a39d536a47ea` está em ambos os catálogos e em quatro ocorrências no catálogo de flashcards, mas **seu caminho canônico ainda precisa ser determinado**. Não associá-lo arbitrariamente a um dos 19 artigos históricos. O `art-3e62a81df4c74b90` foi identificado como a nota de lembretes, diferente desse ID compartilhado.

Os originais 04a, 04b, 05, 05a, 06, 07, 08, 09, 10 e 11 continuam com seus IDs estáveis e devem conservar as URLs, os aliases, a certificação Câmara e os vínculos existentes. O agente CGU poderá produzir derivados com `articleId` exclusivo e origem explícita. **Somente a coordenação** poderá realizar a troca de `articleIds` no catálogo e de links no índice, hub e percursos, em operação atômica com proteção de SHA.

Antes de cada troca, exigir (1) artigo CGU completo e certificado individualmente; (2) headings e `theoryRefs` resolvidos; (3) referências de glossário/flashcards classificadas como genéricas ou específicas por concurso, sem substituição indiscriminada; (4) ausência de perda de URL ou alias legado; (5) testes de build, identidade, navegação, CI e Pages no SHA final. Caso a troca exija modificação de `data/questoes-camara.json`, interromper e abrir uma etapa técnica própria, sem alterar o banco nesta missão.

**Próximas unidades:** classificações de receita (04a) e despesa (04b), créditos (05), emendas (05a), programação (06), receitas (07), despesas (08), restos a pagar (09), execução financeira (10) e responsabilidade fiscal (11). Esta ordem de tratamento é uma fila técnica e não equivale a autorizar duplicação sem revisão. Preservar a especificidade de CGU e Câmara e evitar repetição no futuro EPUB por `topicKey` e certificação individual.

**Estado do trabalho:** inventário parcial concluído, conteúdo ainda compartilhado, nenhum EPUB gerado, nenhuma exclusão ou renomeação executada.
