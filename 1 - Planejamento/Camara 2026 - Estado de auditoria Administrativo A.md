---
type: planejamento-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-15
updated: 2026-11-16
---

# Câmara 2026: registro independente da auditoria A

**Escopo exclusivo:** 12 artigos atribuídos à frente **A**, conforme [[1 - Planejamento/Camara 2026 - Coordenacao editorial Administrativo]]. Este documento registra **evidência real de cada auditoria**, não metas ou desempenho individual. Abrir e verificar a `main` e os PRs a cada execução.

**Estados permitidos:** a conferir; reservado; em PR; integrado, deploy pendente; publicado, revisão parcial; publicado, revisão integral certificada; adequado sem alterações (com evidência); bloqueado (motivo). O estado inicial `a conferir` não significa que o artigo nunca foi revisado. Sempre reconciliar certificações históricas antes de mudar de estado.

| articleId | Artigo | Estado inicial em 15/11/2026 | Evidência / PR / SHA / URL e próxima ação |
| :--- | :--- | :--- | :--- |
| `art-8946971690804376` | `3 - Materias/Direito Administrativo/01 - principios e lei de acesso a informacao.md` | **revisão parcial, certificação integral pendente** | PR #343 integrado no merge `cae5d976`; PR #344 encerrado sem merge em 15/11 porque editava a antiga fila geral, agora congelada pela coordenação. Registro histórico preservado neste estado. Auditoria jurídica integral pendente |
| `art-86dee064aef44ba4` | `3 - Materias/Direito Administrativo/02 - organizacao administrativa.md` | **integrado na main; validação e publicação pendentes** | Revisão integral textual do artigo, seis itens C/E, diagramas, fontes, títulos e distinções de fundações, competência, supervisão e regimes de pessoal; dois verbetes novos cadastrados no backlog da Câmara, com flashcards derivados automaticamente pelo build. Revisão editorial baseada em Constituição, DL 200/1967, leis 8.112/1990 e 13.303/2016, STF Tema 545, ADI 2135 e Súmulas 517/556, Parecer AGU AC-51. Registrar SHA final, CI/Pages e inspeção do site antes de certificação. PR antigo #355 será reconciliado para evitar duplicação. |
| `art-a7703dd0e3fc4618` | `3 - Materias/Direito Administrativo/03 - atos administrativos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-b740cbbd05e54a26` | `3 - Materias/Direito Administrativo/04 - poderes administrativos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-0242ff68d8ca9529` | `3 - Materias/Direito Administrativo/12 - estado governo administracao e funcao administrativa.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-880b577a5c2ba82d` | `3 - Materias/Direito Administrativo/13 - centralizacao descentralizacao concentracao e desconcentracao.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-e9d0b4352f3e1455` | `3 - Materias/Direito Administrativo/14 - ato administrativo conceito e distincao de fato administrativo.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-733c0e474219cd22` | `3 - Materias/Direito Administrativo/15 - atributos do ato administrativo presuncao imperatividade autoexecutoriedade e tipicidade.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-10a91f6bf9b53f1a` | `3 - Materias/Direito Administrativo/16 - classificacoes e especies de atos administrativos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-61c7724cba33648a` | `3 - Materias/Direito Administrativo/17 - anulacao revogacao convalidacao e extincao de atos administrativos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-0bf3465cd357e76e` | `3 - Materias/Direito Administrativo/18 - parecer administrativo natureza tipos e responsabilidade do parecerista.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-20294d2578a610bd` | `3 - Materias/Direito Administrativo/27 - poder hierarquico e poder disciplinar limites e distincoes.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |

## Histórico da frente

- **15/11/2026:** divisão operacional criada com matriz imutável de propriedade por `articleId`, sem atribuir aprovação ou publicação fictícia. Cada nova rodada deve acrescentar somente evidências desta frente.

**Regra de edição:** esta frente escreve apenas neste arquivo de estado; as outras frentes não o alteram. Não editar a fila geral compartilhada para registrar status cotidiano. Na auditoria de cada artigo, conferir todas as seções, os C/E, diagramas, fontes e vínculos de glossário/flashcards. PR, CI, integração e comprovação do Pages são etapas separadas; cada estado deve refletir seu grau de prova.

- **15/11/2026, rodada A:** PR #344 fechado sem merge: sua única alteração era na fila geral compartilhada, incompatível com a coordenação atual. O registro histórico do PR #343 foi transferido para este arquivo próprio. Selecionado o artigo `art-86dee064aef44ba4` (DAD02), sem PR concorrente no arquivo na consulta inicial. Revisão jurídica **dirigida, não integral**, dos seis itens C/E, com correção dos itens 2, 5 e 6 e ajuste do texto sobre vinculação. Fontes indicadas no artigo: Constituição, Decreto-Lei 200/1967, Lei 13.303/2016; cotejo jurisprudencial oficial integral ainda pendente. Branch `editorial/a-dad02-organizacao-20261115`. Não alterar status para publicado antes de CI, merge, Pages e conferência da página.

- **15/11/2026, continuação A:** PR #348 teve CI `success` no SHA `d81c3567` ([execução 43739827624](https://github.com/leorruas/concursos/actions/runs/43739827624)). Detectado erro remanescente: item C/E 6 estava marcado Certo embora o próprio comentário demonstrasse que a classificação automática como desvio de finalidade é falsa. Corrigido para Errado no commit `da942a719c75e5ba80d13c6b5cb7bd2a8be18759`. Exige novo CI no SHA final antes de merge. A auditoria integral e o cotejo oficial permanecem pendentes; não certificar nem declarar publicação sem comprovação.

- **16/11/2026, rodada A:** reescrito e cotejado DAD02 (`art-86dee064aef44ba4`), revisados seis itens C/E e fontes oficiais, integradas explicações nas seções de origem; verbetes novos cadastrados no backlog para geração de cartões sem duplicação editorial. Pendência de certificação: CI final, verificação de build, Pages e inspeção visual dos dois diagramas; registrar em nova evidência após retorno dos workflows.
