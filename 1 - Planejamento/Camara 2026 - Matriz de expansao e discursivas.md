---
title: "Câmara 2026: matriz de expansão do banco e treino discursivo"
type: "planejamento"
concursoId: "camara-2026"
status: "operacional"
updated: 2026-11-12
---

# Câmara 2026: matriz de expansão do banco e treino discursivo

## Linha de base após o PR #22

O PR #22 foi integrado em 12/11/2026. Em `data/questoes-camara.json` há **389 questões históricas** (`pilotoDidatico`), **760 itens novos validados** de Comunicação e **32 itens de Português em elaboração**. Total de registros objetivos: **1.181**, dos quais **760 itens novos selecionáveis** pelo seletor da expansão; os 32 itens ainda não são selecionáveis. O alvo anterior de **2.000 itens novos** não inclui os 389 históricos. Restam **1.240 validações de novos itens** até a meta, incluindo a revisão dos 32 já produzidos; faltam redigir **1.208** se os 32 forem aproveitados. O número histórico de **1.600 itens restantes** estava desatualizado.

## Matriz dos 31 lotes restantes (40 itens cada)

| Matéria/unidade | Prova | Novos itens | Lotes | Foco editorial |
| --- | --- | ---: | ---: | --- |
| Língua Portuguesa | P1 | 160 | 4 | Interpretação, reescrita, coesão, sintaxe, regência e crase |
| Língua Inglesa | P1 | 160 | 4 | Leitura, inferência, referência e relações textuais |
| Direito Administrativo | P1 | 200 | 5 | Atos, agentes, poderes, responsabilidade, processo, contratações, LAI/LGPD |
| Administração Pública e Governança | P1 | 120 | 3 | Governança, valor público, coprodução, modelos de gestão, Decreto nº 9.203/2017 |
| Constitucional e regimentos: unidade P1 | P1 | 160 | 4 | Organização do Estado, Poder Legislativo, CF/88 e dispositivos regimentais do edital |
| TI e Dados | P1 | 160 | 4 | Segurança, aplicativos, IA e dados, gráficos e ferramentas |
| Processo Legislativo e Regimento Interno: unidade P2 | P2 | 120 | 3 | Proposições, comissões, votação, procedimentos, competências, sanção e veto |
| Ciência Política | P2 | 40 | 1 | Estado, representação, eleições, partidos e história do voto |
| Processo Legislativo Orçamentário | P2 | 40 | 1 | PPA, LDO, LOA, tramitação e competências do Congresso |
| Ética e Decoro Parlamentar | P2 | 80 | 2 | Código de Ética, deveres e processos: verificar o escopo do edital |
| **Total a validar** | **P1 960 / P2 280** | **1.240** | **31** | **2.000 novos itens ao fim, se todos homologados** |

A distribuição foi planejada para compensar o fato de que os **760 novos itens já validados estão em P2 (Comunicação)**. Ao concluir a matriz, o banco novo terá **960 P1 e 1.040 P2**, sem contar os 389 históricos. Trata-se de uma meta de produção, sujeita a ajuste segundo a aprendizagem e o risco de pouca diversidade de mecanismos.

O lote **020**, Português, possui 32 itens redigidos e nenhum ainda validado. A primeira entrega é completar seus 8 itens pendentes e revisar os 40. A seguir: Administrativo, Ética/Decoro e Regimentos, alternando P1/P2. **Não** reproduzir conteúdos de Comunicação para inflar o número. Novas matérias precisam de variedade de operações cognitivas, enunciados e dificuldade.

## Porta de qualidade por lote

Para cada grupo de 40: identificar subtópico exato do edital, artigo canônico e seção; cotejar legislação e exemplos com fontes primárias quando cabível; revisar individualmente gabarito e justificativa; auditar proximidade lexical e, separadamente, repetição de mecanismo; manter `reviewStatus=gerada` até passar a revisão editorial, depois `validada` com `reviewEvidence`. Validar integridade, contrato de sessão v3, seleção por unidade e execução do CI. Nem diversidade lexical nem teste automático provam exatidão jurídica ou equivalência a itens reais da banca.

As **13 questões originais de TI não homologadas** permanecem excluídas do uso confiável. A proteção do guard e as substitutas nos artigos não devem ser removidas nem reclassificadas por conveniência.

## Classificação das 389 questões antigas

Todas recebem `estimatedDifficulty` com `difficultyAssessment.method=sinais-textuais-v1` e `status=provisoria`. Os sinais usados são extensão, condicionais, quantificadores, referências normativas, relações numéricas, mecanismo e complexidade da explicação. O resultado inicial é **81 fáceis, 227 médias, 72 difíceis e 9 muito difíceis**. Esses números descrevem a **triagem textual**, não dificuldade real observada nem certificação editorial. Comprimento e presença de números, por exemplo, podem gerar falsos positivos; questões curtas sobre exceções pouco conhecidas podem ser subestimadas.

Antes de avaliar equilíbrio do banco inteiro, revisar manualmente uma amostra estratificada por matéria e classe, incluindo todos os itens de `muito-dificil` e exemplos-limite; recalibrar o método e registrar divergências. Dificuldade competitiva requer comparação com provas Cebraspe identificadas e, posteriormente, desempenho do estudante sem confundir familiaridade prévia com facilidade do item. Revisões manuais podem mudar `status` para `revisada` com revisor e justificativa; o verificador preserva essas exceções. Rodar `node scripts/classify-camara-pilot-difficulty.js` para reproduzir a distribuição.

## Discursivas: outro formato, outro instrumento

O arquivo `data/questoes-camara-discursivas.json` reúne **quatro questões autorais de até 20 linhas** e **duas propostas autorais de peça técnica de até 50 linhas**, com comandos, fontes, elementos esperados, erros críticos e critérios ponderados. Os pontos didáticos imitam apenas os totais do edital: **15 por questão e 30 por peça**. Nenhum comando, peso de quesito ou gênero é apresentado como espelho oficial da banca. A peça técnica pode assumir gêneros diferentes de acordo com o comando real da prova.

Corrigir **produções escritas efetivas**, indicando trechos para cada critério e justificativas para pontuação parcial. O script `scripts/score-camara-discursivas.js` apenas soma notas informadas por avaliador; também sinaliza excesso de linhas sem inventar desconto oficial. Respostas e avaliações individuais ficam exclusivamente no repositório privado, nunca no banco público. A produção de textos não entra na contagem dos 2.000 itens Certo/Errado. Prever pelo menos dois treinos escritos por semana conforme a estratégia existente.
