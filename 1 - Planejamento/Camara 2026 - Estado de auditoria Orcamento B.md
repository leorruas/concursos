---
type: estado-auditoria-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-16
updated: 2026-11-16
---

# Câmara 2026: estado da auditoria de Orçamento Público, frente B

**Propriedade:** Classificações, arrecadação e execução da despesa. Os 6 `articleIds` abaixo são exclusivos desta frente. Estado inicial **a verificar** significa ausência de certificação individual neste registro, não ausência de revisões anteriores. Conferir `main`, histórico e evidências antes de classificar. Não editar o estado de outras frentes.

| articleId | Artigo | Estado | Evidências (SHA, fontes, checks, Pages, ressalvas) |
| :--- | :--- | :--- | :--- |
| `art-d8b1c5e6037249fa` | `04 - classificacoes da receita e da despesa.md` | Revisão parcial, sem certificação | `8f06825ad8f463bc73b6cb6f68ce1c6a204f6c25`: caso numérico e separação das classificações integrados na `main`, blob `7d1fff593ea56006afdeefda389413bfd009650c`. Conferidos MCASP 11ª, MTO 2026 (4ª versão), STN fontes/destinação (atualizada em 13/08/2026). Leitura remota confirmou inserção. Workflow por SHA retornou lista vazia; CI, Pages, validação integral de links, flashcards/glossário e visual pendentes. |
| `art-f13b65a28d8c4e91` | `04a - classificacao da receita.md` | A verificar | Consultar fontes vigentes, histórico e publicação antes de atribuir certificação |
| `art-28b3d9ef86aa4510` | `04b - classificacao da despesa.md` | A verificar | Consultar fontes vigentes, histórico e publicação antes de atribuir certificação |
| `art-0fb9b88e4d6c4151` | `06 - programacao orcamentaria e contingenciamento.md` | A verificar | Consultar fontes vigentes, histórico e publicação antes de atribuir certificação |
| `art-4677cfa327ce43bb` | `07 - receitas publicas e estagios.md` | A verificar | Consultar fontes vigentes, histórico e publicação antes de atribuir certificação |
| `art-67167e9c18284c4c` | `08 - despesas publicas e estagios.md` | A verificar | Consultar fontes vigentes, histórico e publicação antes de atribuir certificação |

## Fechamento e retomada

Aplicar a matriz `1 - Planejamento/Camara 2026 - Coordenacao editorial Orcamento.md`, a publicação direta na `main` e o critério de **revisão integral concluída com ressalva visual** do `AGENTS.md`. Trabalhar um artigo por vez e registrar aqui evidências individuais reais, a correção integral e as pendências específicas de inspeção visual. Sem criar EPUB, sessões de estudo ou resultados fictícios. Não marcar como publicado sem evidências de CI e Pages pertinentes.

## Registro de execução de 16/11/2026

A frente B iniciou pelo artigo 04, preservou `articleId` e aliases e publicou um caso numérico com receita primária versus financeira, fonte/destinação e dimensões da despesa. Commit `8f06825ad8f463bc73b6cb6f68ce1c6a204f6c25`. Fontes consultadas: [MCASP 11ª](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/manuais/manual-de-contabilidade-aplicada-ao-setor-publico-mcasp-1), [MTO 2026, 4ª versão](https://www1.siop.planejamento.gov.br/mto/lib/exe/fetch.php/mto2026%3Amto_2026_-_versao_4_.pdf) e [STN: fonte/destinação](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/federacao/fonte-ou-destinacao-de-recursos). A consulta a workflows por commit não trouxe execuções; não há certificado de CI/Pages. Permanecem pendentes conferência jurídica integral, cada C/E, Mermaid, links, glossário, flashcards e inspeção visual. Os outros cinco artigos continuam sem certificação individual nesta frente. Nenhum EPUB foi gerado.
