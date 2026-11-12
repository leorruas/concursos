---
title: "Câmara 2026: encerramento editorial e técnico"
status: "ENCERRAMENTO PENDENTE"
updated: 2026-11-11
---

# Câmara 2026: encerramento editorial e técnico

## Natureza deste registro

**Checkpoint de reconciliação, não certificado final.** Fonte de contagem: `data/catalogo-materias-por-concurso.json`, entrada `camara-2026`, lida na branch `main` em 11/11/2026. Foram consultados `AGENTS.md`, `CHAT.md`, `me.md`, a estrutura do planejamento, o índice da auditoria, a matriz de Ciência Política, a consolidação de TI, o relatório de implementação PL/ORC e o registro permanente. **Não houve leitura integral e atual de todos os 333 artigos, nem cotejo completo do edital/retificações ou execução local de testes nesta rodada.** Números históricos de questões são evidência documental, não homologação.

## Matriz única

| Matéria | artigos no catálogo | artigos examinados nesta rodada | artigos corrigidos/criados nesta rodada | cobertura do edital | questões examinadas nesta rodada | problemas críticos abertos | estado editorial | estado técnico | pendências |
| --- | ---: | ---: | ---: | --- | ---: | --- | --- | --- | --- |
| Língua Portuguesa | 34 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Reconciliar exercícios suspensos e comentários revisados com os arquivos atuais. |
| Língua Inglesa | 18 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Fase 1 registra 84 exercícios: 65 M, 14 R e 5 S; confirmar reparos posteriores individualmente. |
| Direito Administrativo | 27 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Reconciliar reparos normativos e questões com os artigos atuais. |
| Administração Pública | 7 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Conferir cobertura de coprodução, cadeia de valor e legislação; Fase 1 histórica indica ressalvas. |
| Direito Constitucional e processo legislativo | 38 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Confirmar parecer individual e cobertura literal do edital. |
| Tecnologia da Informação e Dados | 30 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Histórico: 168 exercícios originais em 28 artigos próprios, 13 não homologados e 13 substitutas; verificar todos os contratos e testes. |
| Comunicação Social e Divulgação Institucional | 120 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Conciliar inventário histórico de 128 textos com 120 IDs atuais, incluindo variantes, compartilhados e textos físicos; certificar individualmente. |
| Ciência Política e Estado | 26 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Matriz histórica: 199 itens, 182 com cotejo seletivo e 17 somente lidos; nenhum integralmente certificado nessa matriz. |
| Orçamento e processo legislativo orçamentário | 21 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Relatórios 78–81 indicam reparos e exercícios adicionais; cotejar estado final e testes. |
| Ética e decoro parlamentar | 9 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Não reabrir DC34 sem defeito demonstrado; confirmar parecer da matéria. |
| Redação discursiva e peça técnica | 9 | 0 (relatórios consultados parcialmente) | 0 | Não certificada nesta rodada | 0 | Não determinado por exame integral | PENDENTE DE EVIDÊNCIA | PENDENTE DE EVIDÊNCIA | Confirmar nove unidades, referências, exercícios, links e duplicações. |

**Total:** 339 vínculos matéria-artigo; **333 `articleIds` distintos**, sem dupla contagem de compartilhados. Hubs (`hubArticleId`) não foram adicionados a esse total. A contagem de 28 artigos próprios de TI e a contagem de 30 IDs associados à matéria no catálogo têm escopos diferentes; exigem conciliação, não ajuste arbitrário.

## Critérios de classificação

**CONCLUÍDO:** parecer individual atualizado, cobertura do edital identificada, erros obrigatórios resolvidos ou isolados, questões problemáticas tratadas, integração verificada e evidência técnica suficiente. **CONCLUÍDO COM RESSALVAS:** utilizável sem erro crítico conhecido, com limitações expressas. **BLOQUEADO:** falha material demonstrada que compromete o estudo. **PENDENTE DE EVIDÊNCIA:** falta exame ou teste essencial para decidir. Os onze pareceres acima estão provisoriamente **PENDENTE DE EVIDÊNCIA**: isso não implica onze matérias defeituosas, nem equivale a aprovação.

## Evidências técnicas disponíveis

O GitHub Actions `Publicar no GitHub Pages`, execução [43131456339](https://github.com/leorruas/concursos/actions/runs/43131456339), informa `completed/success` para o commit `a3ef568cc687fa30db84a5a01c398cfd62a6df61`. Esse resultado é evidência de sucesso daquele workflow e commit, não de homologação editorial dos 333 artigos nem de inspeção visual desta rodada. O relatório TI registra sucesso anterior na [execução 43129779596](https://github.com/leorruas/concursos/actions/runs/43129779596), com testes de questões, build, deploy e verificação automatizada do site. Não houve execução de Node local, inspeção visual de Mermaid em temas claro/escuro ou conferência manual de todos os links nesta rodada.

## Pendências indispensáveis e limites

1. Reconciliar os relatórios individuais com o conteúdo atual de cada artigo e seus SHAs; distinguir edição, revisão, certificação e simples inventário.
2. Cotejar edital e retificações com as onze matérias e justificar eventuais lacunas reais.
3. Ciência Política: cotejar os 17 itens marcados somente lidos, sem converter os 182 cotejos seletivos em homologação integral automática.
4. Comunicação: resolver a diferença entre os 128 textos do inventário histórico e os 120 IDs atuais, considerando arquivos físicos, variantes e compartilhamentos.
5. Português e Inglês: verificar no Markdown atual cada suspensão e correção; manter questões duvidosas fora do treino confiável até tratamento.
6. TI: preservar bloqueio das 13 questões originais não homologadas e verificar o vínculo de cada substituta, sem promover as 155 restantes a homologadas por exclusão.
7. Consolidar DA/AP, DC, PL/ORC, Ética e Redação com evidência de cobertura, integridade, fontes e questões.
8. Validar a versão final do catálogo, links, navegação, integridade Markdown/Mermaid, banco de questões, workflows e publicação após qualquer commit de fechamento.

## Decisão

**ENCERRAMENTO PENDENTE.** Ainda faltam evidências editoriais essenciais para declarar biblioteca certificada. Nenhuma alteração de artigo, gabarito, catálogo, hub, índice ou dados pessoais foi feita nesta rodada. Este documento é o único registro novo; os relatórios históricos permanecem preservados. A política de manutenção restrita já se aplica: somente corrigir defeitos demonstrados, sem ampliar escopo por iniciativa própria.
