---
title: "Câmara 2026: matriz de expansão das questões por matéria"
type: planejamento-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-12
---

# Matriz de expansão de questões: Cargo 1

> **Estado de transição do lote 026, auditado em 12/11/2026.** A `main` contém 1.000 novas questões validadas e 389 históricas de `pilotoDidatico`. No PR #44, 40 questões de Tecnologia da Informação e Dados passaram por revisão técnica incremental, correção de 28 mecanismos redundantes, conferência de 20 C/20 E, IDs únicos, referências literais e evidências individuais. Elas receberam `reviewStatus: validada` **somente na branch do PR**. **Contagem projetada após CI verde e merge confirmado: 1.040/2.000; saldo 960**, incluindo 120 itens de TI ainda a produzir. Enquanto o PR estiver aberto, a contagem real da `main` permanece 1.000/2.000. A tabela abaixo reflete o marco histórico pós-PR #22 e não deve ser usada como contagem atual; consultar o JSON integral da `main` em cada rodada.


**Marco pós-PR #22:** 760 questões novas de Comunicação Social e Divulgação Institucional com status `validada`, 32 questões de Português com status `gerada`, e 389 registros legados em `pilotoDidatico`. O arquivo `data/questoes-camara.json` preserva as duas coleções, que não devem ser somadas como itens novos da meta de expansão.

**Meta editorial vigente:** 2.000 questões novas validadas, além do piloto histórico. Restam **1.240** validações para essa meta, incluindo a revisão das 32 questões já geradas. A indicação anterior de '1.600 próximas questões' foi feita antes do avanço do PR: manter o número antigo criaria dupla contagem. O restante corresponde a **31 lotes de 40 itens**. Contar progresso apenas por `reviewStatus: validada`, nunca por quantidade de enunciados redigidos.

## Alocação dos 31 lotes restantes

| Matéria canônica | Novas questões a validar | Lotes | Foco inicial |
| --- | ---: | ---: | --- |
| Língua Portuguesa | 160 (inclui as 32 geradas) | 4 | Interpretação, semântica, reescrita, gramática em contexto |
| Língua Inglesa | 120 | 3 | Leitura, inferências, coesão, gramática em uso |
| Direito Administrativo | 200 | 5 | Atos, agentes, Lei 8.112/1990, Lei 9.784/1999, licitações, LAI/LGPD |
| Administração Pública e Governança | 120 | 3 | Modelos, redes, valor público, governança, participação |
| Direito Constitucional e processo legislativo | 200 | 5 | Constituição e Regimentos, competências, comissões, votação e procedimento |
| Tecnologia da Informação e Dados | 160 | 4 | Microsoft 365, segurança, IA, dados e gráficos |
| Ciência Política | 80 | 2 | Estado, representação, sistemas e história política |
| Processo Legislativo Orçamentário | 80 | 2 | PPA, LDO, LOA, LRF, competências e tramitação |
| Ética Pública e Decoro Parlamentar | 120 | 3 | Código de Ética, decoro e situações de aplicação regimental |
| **Total restante** | **1.240** | **31** | |

Esta matriz é uma **alocação de produção**, não uma previsão de distribuição de questões da prova. As 760 questões novas de Comunicação já cobrem os 19 itens de seu programa, mas ainda podem demandar correção editorial. A nova produção concentra-se nas nove matérias sem expansão validada. O bloco constitucional deve reservar também casos da unidade específica de Processo Legislativo (P2); checar equilíbrio P1/P2 por `examPart` de cada questão, não só pelo nome da matéria.

## Ordem operacional

1. **Lote 020:** revisar as 32 questões de Português (`gerada`), verificar cada resposta e referência, substituir sobreposições e completar mais oito itens. Somente então registrar as 40 como `validada`.
2. **Lotes 021 a 025:** alternar Direito Administrativo, Ética, Constitucional/Regimento, Administração Pública e Inglês, evitando concentrar cinco lotes seguidos em uma só matéria. Direito Administrativo começa com 18 questões antigas e Ética com 12, portanto exigem prioridade de cobertura.
3. **Lotes seguintes:** intercalar TI, Orçamento, Ciência Política, Português e as demais matérias conforme a matriz; reavaliar cotas à luz de lacunas reais de estudo, sem confundir volume produzido com aprendizado.
4. **A cada lote de 40:** conferir correspondência literal a item do edital, `articleId` e subtítulo, precisão do gabarito, diversidade de `conceptId` e `mechanism`, repetição em artigos e no banco, dificuldade estimada, operação cognitiva e evidência específica da revisão. Executar `test-camara-questions.js`, `test-camara-expansion.js` e a triagem de similaridade; aprovar apenas com `reviewEvidence` verificada.
5. **A cada cinco lotes:** recalcular distribuição P1/P2, assuntos, mecanismos, dificuldade e C/E; verificar correspondência com provas-espelho efetivamente lidas. A dificuldade continua estimada até avaliação real; não anunciar calibração empírica sem evidência.

## Classificação das 389 antigas

`pilotoDidatico` recebeu `estimatedDifficulty` por **triagem estrutural heurística v1**, com `difficultyReviewStatus: pendente` e `difficultyMethod: triagem-estrutural-v1`. A triagem considera extensão do enunciado, condições, quantificadores, valores, exceções, mecanismo de distrator e extensão da justificativa. Tais sinais podem falhar: um enunciado longo pode ser fácil e um item curto pode exigir domínio normativo elevado.

A classificação provisória permite localizar lacunas de metadados, **mas não autoriza inferir o equilíbrio real de dificuldade nem selecionar a amostra como se fosse calibrada**. Revisar uma a uma, idealmente em grupos de 40, confrontando conceito, mecanismo e prova-espelho; mudar para `difficultyReviewStatus: revisada` somente após cotejo humano/editorial. Reexecutar `scripts/classify-camara-pilot-difficulty.js` sem `--apply` para auditoria, ou com `--apply` para recomputar exclusivamente itens não revisados.

## Discursiva: banco independente

Usar `data/propostas-discursivas-camara.json` para propostas de até 20 linhas e peças técnicas de até 50 linhas, com critérios autorais de cobertura dos quesitos, correção técnica e linguagem. O edital prevê duas questões de 15 pontos e uma peça de 30 pontos. A grade aqui é **instrumento pedagógico**, não espelho oficial nem previsão do gênero da peça. Guardar respostas efetivas e notas pessoais exclusivamente no cofre privado; o repositório público contém apenas prompts e critérios. Não inserir discursivas em `pilotoDidatico` ou `expansao` como itens C/E.

As **13 questões originais de TI marcadas não homologadas** continuam bloqueadas no material fonte, com substitutas rastreáveis, sujeitas ao teste de regressão. Nenhum processo de expansão deve republicá-las como questão validada.
