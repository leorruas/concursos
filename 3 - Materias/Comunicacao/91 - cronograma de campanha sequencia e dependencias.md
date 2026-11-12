---
articleId: art-6a72b9d104e85cf3
articleAliases: ["3 - Materias/Comunicacao/91 - cronograma de campanha sequencia e dependencias.md"]
title: "Cronograma de campanha: sequência, dependências e caminho crítico"
type: "conceito"
status: "ativo"
created: 2026-11-06
updated: 2026-11-11
---

# Cronograma de campanha: sequência, dependências e caminho crítico

## Núcleo do conceito

**Situação:** a Câmara pretende divulgar uma campanha sobre acompanhamento de audiências públicas. A equipe prevê criação de textos, direção de arte, verificação jurídica, legendagem e publicação. Se a veiculação foi marcada para sexta-feira, mas a revisão institucional só termina na segunda-feira seguinte, o cronograma é **inexequível**, ainda que todos os profissionais tenham recebido suas tarefas.

**Cronograma de campanha** é o instrumento que organiza **atividades, responsáveis, prazos, sequência, dependências, marcos e restrições temporais** para viabilizar a execução do plano. Ele converte as ações planejadas em um percurso de trabalho com datas e relações verificáveis. A duração total não é necessariamente a soma de todas as atividades: tarefas independentes podem ocorrer **em paralelo**; outras só começam depois da conclusão de predecessoras.

**Planejamento de campanha** define objetivos e estratégias; **cronograma** organiza quando e em que ordem as ações serão realizadas; **plano de mídia** define onde, quanto e com qual intensidade a campanha circulará; **calendário editorial** organiza pautas e publicações. Um mesmo calendário pode exibir informações dessas ferramentas, mas as funções analíticas permanecem diferentes.

A [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia|Campanhas e planejamento de mídia]] diferencia planejamento e mídia; [[3 - Materias/Comunicacao/82 - briefing publicitario problema contexto informacoes e qualidade|Briefing publicitário: problema, contexto, informações e critérios de qualidade]] desenvolve informações iniciais e prazos; [[3 - Materias/Comunicacao/88 - atendimento em publicidade responsabilidades e etapas|Atendimento em publicidade: responsabilidades, etapas e decisões]] trata do acompanhamento das aprovações; [[3 - Materias/Comunicacao/90 - plano de midia alcance frequencia cobertura e investimento|Plano de mídia: alcance, frequência, cobertura e investimento]] aprofunda distribuição. O foco aqui é **gestão do tempo e das dependências**.

## Estrutura interna: atividade, duração, marco, prazo e dependência

| Elemento | Significado | Confusão possível |
| :--- | :--- | :--- |
| **Atividade/tarefa** | Trabalho executável que consome tempo ou recursos | Confundir com resultado ou objetivo |
| **Duração** | Tempo necessário à execução, segundo calendário e recursos | Tratar duração como data final |
| **Marco (milestone)** | Evento de verificação ou decisão, geralmente representado com duração zero | Confundir aprovação com dias de trabalho necessários para obtê-la |
| **Prazo (deadline)** | Data-limite exigida para entrega ou decisão | Tratar prazo imposto como prova de viabilidade |
| **Dependência** | Relação lógica ou externa que condiciona outra atividade | Considerar todas as tarefas independentes |
| **Predecessora/sucessora** | Atividade anterior ou posterior em determinada relação | Supor que toda predecessora é imediatamente anterior no calendário |
| **Folga total** | Tempo de atraso permitido antes de afetar a data final calculada, dadas as condições do modelo | Confundir com reserva financeira ou tempo de produção |
| **Caminho crítico** | Sequência de atividades que determina a duração mais longa do projeto no modelo | Confundir com sequência de maior custo ou maior relevância política |
| **Linha de base do cronograma** | Versão aprovada para comparar o realizado ao planejado | Confundir com previsão atualizada |

**Marco versus atividade:** “aprovação final concluída” pode ser marco; “analisar texto e registrar parecer” consome tempo. Um marco de duração zero não significa que a revisão possa ocorrer instantaneamente.

**Duração versus esforço:** uma tarefa pode exigir 16 horas de trabalho e durar quatro dias úteis em razão da disponibilidade parcial do profissional. Somar horas estimadas não basta para calcular a data de término.

## Dependências: quatro relações usuais

**Término para início (Finish-to-Start, FS):** a atividade sucessora começa após o término da predecessora. Exemplo: publicar após aprovação.

**Início para início (Start-to-Start, SS):** a sucessora pode iniciar depois de iniciada a predecessora, com condições definidas. Exemplo: iniciar adaptação gráfica após começo da redação, desde que haja conteúdo suficiente.

**Término para término (Finish-to-Finish, FF):** o término de uma atividade condiciona o término da outra. Exemplo: revisão final e fechamento de arquivo precisam terminar em ordem compatível.

**Início para término (Start-to-Finish, SF):** o término de uma atividade depende do início de outra; é relação menos comum e deve ser interpretada com cuidado. Exemplo didático: uma equipe de plantão encerra sua cobertura depois que a equipe substituta inicia a operação.

As quatro relações descrevem lógica de precedência; não são categorias exclusivas da publicidade. A relação FS é comum, mas **não é a única possível**.

**Antecipação (lead)** autoriza sobreposição em relação a um marco de referência. **Espera (lag)** introduz intervalo, como tempo necessário para receber resposta de um fornecedor. É erro considerar ambos sinônimos de atraso imprevisto. A antecipação precisa respeitar a viabilidade real e a qualidade das informações disponíveis.

## Caminho crítico: exemplo com cálculo

Considere seis atividades, com durações hipotéticas em **dias úteis**, sem feriados, alocação limitada de recursos nem outras restrições além das precedências indicadas:

| Código | Atividade | Duração | Predecessora |
| :--- | :--- | ---: | :--- |
| A | Validar briefing | 2 | Nenhuma |
| B | Redigir roteiro | 3 | A |
| C | Preparar elementos gráficos | 4 | A |
| D | Montar peça final | 2 | B e C |
| E | Revisar conteúdo e acessibilidade | 3 | D |
| F | Publicar | 1 | E |

**Percurso A-B-D-E-F:** 2 + 3 + 2 + 3 + 1 = **11 dias úteis**.

**Percurso A-C-D-E-F:** 2 + 4 + 2 + 3 + 1 = **12 dias úteis**.

O **caminho crítico é A-C-D-E-F**, com duração total de **12 dias úteis**. B possui, sob estas hipóteses, **um dia de folga total**: atrasá-la em um dia não modifica a data final enquanto C continuar determinando o início de D.

**Pegadinha:** o caminho crítico não é necessariamente a tarefa mais cara, mais difícil ou mais longa isoladamente. Ele é a sequência que condiciona a conclusão total segundo o modelo de dependências e durações. Também podem existir **múltiplos caminhos críticos** quando diferentes sequências têm a mesma duração máxima.

**Se C atrasar dois dias**, a duração estimada aumenta para 14 dias, se nenhuma intervenção ou alteração de lógica compensar o atraso. **Se B atrasar um dia**, continua terminando junto de C, e a data final calculada não muda.

No planejamento real, restrições de recursos, calendários, prazos fixos e alterações podem modificar a determinação do caminho crítico e das folgas. O modelo aritmético é simplificação didática.

## Gráfico de Gantt, rede de precedências e PERT

**Gráfico de Gantt:** representa tarefas em barras distribuídas ao longo do tempo, mostrando datas, durações, possíveis sobreposições e acompanhamento. Ajuda a comunicar o plano, mas o simples desenho de barras **não prova a lógica de todas as dependências** se elas não estiverem explicitadas.

**Diagrama de rede:** destaca vínculos lógicos entre atividades e permite analisar sequências, paralelismo e caminhos. É útil para compreender qual atraso ameaça a conclusão.

**CPM (Critical Path Method, método do caminho crítico):** usa a lógica das atividades e suas durações para identificar o caminho crítico e calcular folgas. O nome da técnica não deve ser confundido com **CPM publicitário, custo por mil impressões**, estudado no CAM-DI-012. **A sigla igual é uma armadilha interdisciplinar excelente para a prova.**

**PERT (Program Evaluation and Review Technique):** trabalha com estimativas de duração sob incerteza. Na fórmula clássica de três pontos, a estimativa esperada é:

\[
t_e = \frac{o + 4m + p}{6}
\]

Em que **o** é a duração otimista, **m** a mais provável e **p** a pessimista. Se uma etapa tem estimativas de 2, 5 e 8 dias, respectivamente, a duração esperada é **(2 + 4×5 + 8) ÷ 6 = 5 dias**.

**PERT não garante a duração efetiva** nem elimina a necessidade de considerar disponibilidade de recursos, aprovações e variação das tarefas. Uma estimativa de duração é diferente de prazo imposto por autoridade.

## Cronograma de produção versus programação de mídia

**Cronograma de produção** registra briefing, pesquisa, criação, checagem, adaptações, revisões, aprovações e entrega dos arquivos. **Programação de mídia** registra períodos, inserções e intensidade de veiculação, conforme veículos e plataformas.

Na [[3 - Materias/Comunicacao/90 - plano de midia alcance frequencia cobertura e investimento|Plano de mídia: alcance, frequência, cobertura e investimento]], os padrões são **continuidade**, **ondas (flighting)** e **pulsação (pulsing)**. Essas são estratégias de intensidade temporal de veiculação, **não relações de precedência** como FS ou SS.

**Caso-limite:** uma campanha pode estar pronta na data prevista e não alcançar o público porque a compra de mídia não foi programada. Também pode ter espaço contratado e não ter a peça aprovada, impedindo a veiculação. A integração dos cronogramas é necessária.

## Recursos, aprovações e controle de mudanças

O cronograma precisa considerar **responsáveis, recursos, revisores, decisores, fornecedores, acessibilidade, direitos autorais, validação de informação, orçamento e publicação** quando pertinentes. O prazo de uma tarefa não depende apenas da rapidez do profissional que a executa: pode depender de decisão externa ou disponibilidade de outra área.

**Dependência interna:** revisão institucional antes de veiculação. **Dependência externa:** fornecedor entregar arquivo ou emissora cumprir data de fechamento. **Restrição:** janela legal, institucional ou contratual. **Risco:** possibilidade de atraso ou retrabalho que pode exigir plano de resposta.

**Reserva de contingência de prazo:** margem planejada para incertezas e riscos identificados. Não equivale necessariamente à **folga total** calculada por rede. Uma folga resulta das relações e durações do cronograma; uma reserva pode ser decisão deliberada de gestão de risco.

**Mudança de escopo:** acrescentar formatos pode exigir novas adaptações, aprovações e orçamento. **Replanejamento:** reorganiza datas e dependências segundo mudanças. **Controle de mudanças:** registra o motivo, o impacto e quem autorizou a alteração. Uma nova previsão deve ser diferenciada da linha de base original para permitir avaliação.

**Paralelismo:** fazer duas atividades simultaneamente pode reduzir a duração, mas também elevar risco de retrabalho se uma depende de informações ainda não validadas. **Compressão por reforço de recursos (crashing):** reduzir a duração de atividades mediante maior investimento, quando viável. **Fast tracking:** executar em paralelo tarefas que seriam sequenciais, com risco maior de retrabalho. Não são técnicas equivalentes.

## Comunicação pública e a sequência de validação

Na Câmara, a publicação deve respeitar a **Política de Comunicação da Casa, Ato da Mesa nº 218/2025**, e os princípios constitucionais aplicáveis à publicidade pública. O cronograma não autoriza suprimir checagem factual, revisão necessária, análise de direitos ou aprovação por agente competente.

**Exemplo:** a campanha anuncia data de audiência ainda sujeita a confirmação. Antecipar a criação de um modelo visual pode ser viável; publicar o texto com a data não confirmada compromete a precisão institucional. A possibilidade de fazer etapas em paralelo depende das informações realmente estabilizadas.

A **Lei nº 12.232/2010** pode incidir em serviços publicitários contratados, conforme seu objeto. A existência de um calendário de agência não altera automaticamente responsabilidades de contratação, fiscalização e aprovação pública.

**Critério de qualidade:** cronograma viável permite observar o que deve ocorrer **antes da publicação**, quem decide e que evidência comprova a conclusão de cada marco. A conformidade institucional faz parte do planejamento do tempo.

## Casos progressivos

**Caso A, erro de ordem:** a veiculação foi agendada antes da checagem final. O cronograma precisa respeitar a dependência entre validação e publicação.

**Caso B, paralelismo legítimo:** redação e levantamento de referências visuais podem ocorrer em paralelo após a definição do problema. Isso reduz tempo sem necessariamente eliminar a revisão final.

**Caso C, folga:** uma atividade de três dias termina um dia antes da atividade paralela de quatro dias que condiciona a montagem. Sob o exemplo e restrições estabelecidos, a primeira pode possuir folga de um dia.

**Caso D, prazo não viável:** o demandante pede publicação em 48 horas, mas a sequência de tarefas críticas exige cinco dias úteis. A imposição do prazo não reduz a duração por si.

**Caso E, alteração tardia:** uma nova regra de serviço obriga revisão de todas as peças. A gestão deve registrar impacto, atualizar a previsão e obter aprovações pertinentes.

**Contraexemplo:** entregar todas as peças no prazo não significa necessariamente que a campanha foi eficaz. Cronograma verifica organização temporal; avaliação de comunicação verifica resultados perante o público.

## Como o Cebraspe cobra: itens inéditos Certo/Errado

**Item 1.** Em um cronograma de campanha, tarefas sem dependência lógica entre si podem ser realizadas em paralelo, de modo que a duração total do projeto não corresponde necessariamente à soma das durações de todas as atividades.

**Gabarito: Certo.** A sequência relevante depende da rede de precedências. A soma integral pode superestimar o tempo quando existem atividades paralelas.

**Item 2.** No método do caminho crítico, as atividades críticas são necessariamente as de maior custo financeiro, pois o caminho crítico se define pela soma dos investimentos necessários à execução da campanha.

**Gabarito: Errado.** O caminho crítico decorre de **durações e dependências**, não da soma dos custos. O item desloca uma variável de orçamento para a técnica de cronograma.

**Item 3.** Em programação de mídia, a estratégia de veiculação em ondas corresponde à relação de precedência término para início (FS), pois ambas definem uma atividade que só começa após a anterior terminar.

**Gabarito: Errado.** **Ondas** organizam períodos de intensidade e pausa de veiculação; **FS** é dependência lógica entre tarefas. A semelhança temporal não torna os conceitos equivalentes.

## Verificação aritmética e limites do caminho crítico (11/11/2026)

A rede didática do artigo foi **recalculada**: **A–B–D–E–F = 2+3+2+3+1 = 11 dias úteis**; **A–C–D–E–F = 2+4+2+3+1 = 12 dias úteis**. Logo, sob as precedências e calendários assumidos, o caminho crítico é **A–C–D–E–F** e a atividade B possui **1 dia de folga total**. A [orientação do Project Management Institute sobre caminho crítico e folga](https://www.pmi.org/learning/library/critical-path-method-calculations-scheduling-8040) confirma que folga representa atraso admissível sem prejudicar o marco ou a conclusão, dependendo das restrições.

**Item 1: Certo**, atividades independentes podem ocorrer em paralelo. **Item 2: Errado**, caminho crítico é construído por rede e durações, não por custo. **Item 3: Errado**, *flight/hiatus* de veiculação e dependência término-início (FS) são objetos distintos. Não foram encontradas inversões nos três gabaritos. **C/E novo, inédito:** “Na rede A–C–D–E–F de 12 dias, a atividade B pode atrasar até um dia sem alterar a conclusão, desde que nenhuma outra condição mude.” **Certo**.

**Ponto técnico:** caminho crítico e folga não são propriedades fixas de um tipo de tarefa, mas resultados da rede e das hipóteses de capacidade, calendário, marcos e restrições. Em projetos com múltiplos caminhos, um atraso pode deslocar a criticidade. O exemplo não estima efeitos de restrição de pessoal, feriados ou revisão jurídica extraordinária.

## Relações e heurísticas

[[3 - Materias/Comunicacao/88 - atendimento em publicidade responsabilidades e etapas|Atendimento]]: coordenação, autorizações e alterações. [[3 - Materias/Comunicacao/90 - plano de midia alcance frequencia cobertura e investimento|Plano de mídia]]: intensidade de circulação e CPM por mil impressões. [[3 - Materias/Comunicacao/82 - briefing publicitario problema contexto informacoes e qualidade|Briefing]]: recursos e prazos. [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento]]: estrutura da campanha.

**Heurísticas:** atividade consome tempo; marco indica evento; dependência define sequência; **caminho crítico define duração**, folga indica tolerância calculada; Gantt apresenta a distribuição temporal; PERT usa três estimativas; programação em ondas é mídia, não precedência. **CPM de cronograma ≠ CPM de publicidade.**

## Fontes e limites

- PROJECT MANAGEMENT INSTITUTE (PMI). [Practice Standard for Scheduling, 2ª edição](https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/practice-standard-scheduling.pdf). Método do caminho crítico, folga total e folga livre.
- PMI. *A Guide to the Project Management Body of Knowledge (PMBOK Guide)*, referências de planejamento, estimativas e controle de cronograma.
- PRAXIS FRAMEWORK. [PERT analysis](https://www.praxisframework.org/en/library/pert-analysis), estimativas otimista, provável e pessimista.
- BRASIL. [Constituição Federal, art. 37, § 1º](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm).
- CÂMARA DOS DEPUTADOS. [Ato da Mesa nº 218/2025](https://www2.camara.leg.br/legin/int/atomes/2025/atodamesa-218-30-setembro-2025-798137-publicacaooriginal-176730-cd-mesa.html).
- BRASIL. [Lei nº 12.232/2010](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12232.htm).

**Limites:** a rede com seis atividades é exemplo hipotético, sem restrição de recursos, calendários múltiplos ou interferência externa. O cronograma apresentado não é procedimento normativo da Câmara. O artigo fornece estudo editorial, sem presumir desempenho ou retenção.
