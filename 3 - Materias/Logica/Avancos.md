---
title: "Avanços e desempenho"
type: "hub"
status: "ativo"
created: 2026-05-28
updated: 2026-09-03
---
# Avanços e desempenho

## Simulado 02 — 01/09/2026

- **Erros identificados:** 2: Q15 e Q35, ambos [C] Confusão conceitual.
- **Recortes:** negação de universal com conjunção; equivalência disjuntiva da condicional e distinção da recíproca.
- **Ação:** 30% de microrevisão dirigida e 70% de questões.
- **Estudo:** [[3 - Materias/Logica/03 - quantificadores#Negação de Universal com Predicados Compostos ("Todo... e...")|Negação de universal composta]] e [[3 - Materias/Logica/04 - equivalencias#2. Regra do "NEyMar" (Condicional Disjuntiva)|Condicional disjuntiva]].
- **Limite quantitativo:** o número total de questões de Lógica no simulado não foi registrado; aproveitamento local e janela de 30 dias não foram recalculados para evitar inferência sem base.


## Volume diário de exercícios

| Data | Quantidade | Matéria | Detalhamento / Blocos |
| :--- | :--- | :--- | :--- |
| 02/09/2026 | 13 | Raciocínio Lógico | Ingestão de Inbox (Bateria Dirigida — Condicional e Linguagem Natural): Bateria 1 (3/5), Bateria 2 (1/4) e Bateria 3 (2/4 válida; Q2 anulada por ambiguidade técnica). Total útil: 6/13 (46,2%) |
| 02/07/2026 | 10 | Raciocínio Lógico | Bloco de Revisão Possível × Necessário × Impossível (8/10) |
| 30/06/2026 | 30 | Raciocínio Lógico | Revisão Geral: Módulo 1 (3/5) + Bloco De Morgan (5/5) + Inversão de Inclusão (8/10) + Bloco de Fixação (Modus Tollens vs Inversão) (10/10) |
| 20/06/2026 | 15 | Raciocínio Lógico | Bloco 1 - Reflexo do Complemento (10/10) + Bloco 2 - Combinação com Restrições (5/5) |
| 16/06/2026 | 25 | Raciocínio Lógico | Bloco de Revisão de Combinatória (10/10) + Bloco de Fixação "Quem fica de fora?" (11/15) |
| 08/06/2026 | 43 | Raciocínio Lógico | Revisão de Combinatória (1-10: 9/10); Bloco Conceitual (11-20: 10/10); Arranjo (1-5: 5/5); Arranjo com Restrições (6-10: 4/5); Arranjo com Restrições (11-20: 8/10); Treino de Inclusão-Exclusão (1-3: 2/3) |
| 31/05/2026 | 40 | Raciocínio Lógico | Diagnóstico PFC e Princípio Aditivo/Multiplicativo (1-10: 10/10; 11-15: 5/5); Exercícios Nível Acima (1-5: 5/5), Diagnóstico Ordem Importa (6-10: 2/5), Treino de Permutação (11-15: 5/5); Teste Misto de Fixação (16-25: 9/10) |
| 30/05/2026 | 65 | Raciocínio Lógico | Bloco de Possibilidade vs Necessidade (Exercícios 1-5, 6-15, 11-20), Simulado Estilo FGV (21-30), Simulado FGV de Verdade N-P-I (1-10) e Treino de Silogismos Avançados (11-20 e 21-30) |
| 29/05/2026 | 150 | Raciocínio Lógico | Simulado Geral (100 Qs - 95/100) + Simulado Avançado (5 Qs), Teste de Negação (5 Qs), Mini-bloco Misto (10 Qs), Simulado Focado (20 Qs) e Bloco de Relações Existenciais (10 Qs - 7/10) |
| 28/05/2026 | 100 | Raciocínio Lógico | 10 blocks de 10 questões (Diagramas 1-10, 11-20, 21-30, 31-40; Argumentação 1-10, 11-20, 21-30, 31-40, 41-50; Implicação/Negação) |
| 27/05/2026 | 10 | Raciocínio Lógico | Teste 6 (Equivalências e Negações) |
| 26/05/2026 | 54 | Raciocínio Lógico | Simulado misto (20 Qs), Proposições e Quantificadores (8 Qs), Testes 2, 3, 5 (26 Qs) |

---

## Diagnósticos de desempenho

### Diagnóstico de Bateria Dirigida — Condicional e Tradução da Linguagem Natural (02/09/2026)
- **Resultado**: 46,2% no consolidado útil (6/13 acertos válidos; 1 questão anulada por formulação concorrente).
  - *Bateria 1 (Equivalências, De Morgan e Categórica)*: 3/5 acertos (Erros nas Q1 e Q3).
  - *Bateria 2 (Linguagem Natural, Falsidade e Aplicação)*: 1/4 acertos (Q2 correta; erros nas Q1, Q3 e Q4).
  - *Bateria 3 (Tradução Avançada: Se, Somente Se, Necessário, A Menos Que)*: 2/4 acertos úteis (Q3 e Q5 corretas; erros nas Q1 e Q4; Q2 anulada).
- **Diagnóstico Clínico**: O treino adaptativo confirmou que as negações de quantificadores com conjunção (Q15 do Simulado 02) e as inferências categóricas básicas foram plenamente recuperadas. O gargalo real e persistente foi isolado na **tradução da linguagem natural para a direção da implicação ($P \to Q$)** e na identificação instantânea da condicional falsa ($V \to F$ como único caso proibido):
  1. **"P se Q" $\implies Q \to P$**: Reincidência na inversão da seta (tratando o termo introduzido por "se" como consequente em vez de antecedente/suficiente).
  2. **Condicional Falsa ($V \to F$)**: Hesitação em identificar que $P \to Q$ só é mentira quando a hipótese se realiza e a promessa é descumprida ($P=V$ e $Q=F$).
  3. **"P a menos que Q" $\implies \neg Q \to P$**: Nova fronteira identificada e formalizada como $\neg Q \to P \equiv \neg P \to Q$.
  4. **"Somente se" e "É necessário"**: Plenamente assimilados e acertados na Bateria 3.
- **Erros Mapeados**:
  - *Q1 (Bateria 1)*: Contrapositiva desconsiderada na equivalência de $P \to Q$ ($1D$ vs $1B$).
  - *Q3 (Bateria 1)*: Falsidade de condicional; marcou $A$ ($¬P \land Q$) em vez de $B$ ($P \land ¬Q$).
  - *Q1 (Bateria 2)*: "Contratação se documentação"; confundiu suficiência com recíproca necessária.
  - *Q3 (Bateria 2)*: Falsidade de declaração condicional ("se receber, enviarei"); marcou $B$ em vez de $D$.
  - *Q4 (Bateria 2)*: Situação incompatível com norma condicional; marcou $F \to V$ em vez de $V \to F$ ($E$).
  - *Q1 (Bateria 3)*: Convocação se nota $>80$; inverteu direção marcando condição necessária ($D$) em vez de contrapositiva ($C$).
  - *Q4 (Bateria 3)*: "A menos que"; marcou $P \to Q$ em vez de $Q \to P$ ($B$).
- **Diretrizes e Ajustes**:
  - Fixar o modelo mental: $P \to Q$ proíbe unicamente $P \land \neg Q$. Toda situação restante é válida.
  - Fixar a heurística de tradução: "se" introduz antecedente (suficiente); "somente se" introduz consequente (necessário).
  - Enriquecida a nota teórica [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|02 • Conectivos lógicos]].

### Diagnóstico de Revisão - Possível × Necessário × Impossível (02/07/2026)
- **Resultado**: 80,0% (8/10 acertos).
- **Diagnóstico**: O retorno aos estudos em julho confirmou a consolidação de grande parte dos atalhos e estruturas lógicas após um hiato de revisões. No entanto, os dois únicos erros (Q3 e Q7) repetiram exatamente o clássico gargalo do candidato: o acoplamento de proposições existenciais com exclusões universais. O candidato tende a hesitar sob a incerteza do termo "alguns", sem perceber que o termo médio comum obriga a herança da exclusão.
- **Erros Mapeados**:
  - **Herança em Proposição Existencial com Exclusão**: Em Q3 ("Nenhum robô é humano" + "Alguns humanos são médicos" $\implies$ "Alguns médicos não são robôs") e Q7 ("Alguns artistas são músicos" + "Nenhum músico é robô" $\implies$ "Alguns artistas não são robôs"), o candidato classificou erroneamente como Possível (P) em vez de **Necessária (N)**. A interseção existencial garante um elemento comum que obrigatoriamente herda a propriedade de não pertencer ao conjunto excluído.
- **Diretrizes e Ajustes**:
  - Para a próxima sessão, estruturar um bloco focado unicamente no padrão $Alguns\ A\ são\ B + Nenhum\ B\ é\ C \implies Alguns\ A\ não\ são\ C$, fixando a heurística de personificação ("João é o médico humano/artista músico que não pode ser robô") para destravar a intuição lógica instantânea.

---

### Diagnóstico de Revisão Geral - Proposições, De Morgan e Inclusão (30/06/2026)
- **Resultado**: 86,7% (26/30 acertos no consolidado).
  - Módulo 1 (Fundamentos/Negação): 3/5 acertos.
  - Bloco De Morgan: 5/5 acertos.
  - Inversão de Inclusão: 8/10 acertos.
  - Bloco de Fixação (Modus Tollens vs Inversão): 10/10 acertos.
- **Diagnóstico**: A revisão espaçada identificou pontos específicos de desvanecimento na memória após um mês de estudo. No Módulo 1, o candidato escorregou em De Morgan por pressa/esquecimento do conectivo correspondente. No entanto, após reconstrução intuitiva da negação com foco no cenário falso, gabaritou o bloco de fixação. Em conjuntos, o erro histórico de inversão de inclusão reapareceu na Q10 e o Modus Tollens falhou na Q5. O bloco de fixação de 10 questões resolveu essas oscilações com aproveitamento de 100%, mostrando que a base lógica está consolidada, necessitando apenas de gatilhos corretos.
- **Erros Mapeados**:
  - **De Morgan**: Negou "João estudou e Maria trabalhou" com "ou Maria trabalhou" (esqueceu a negação do segundo termo) e "não A ou não B" para o "ou" (esqueceu a troca de conectivo). Sanado após revisão conceitual.
  - **Inversão da Inclusão**: Assumiu que "algumas pessoas publicam artigos" e "todo pesquisador publica" implicava que "algumas pessoas são pesquisadoras".
  - **Modus Tollens**: Falhou em deduzir que se "Todo professor é servidor" e "Ana não é servidora", então "Ana não é professora".

---

### Diagnóstico de Análise Combinatória - Complementos e Restrições (20/06/2026)
- **Resultado**: 100,0% (15/15 acertos no consolidado do dia).
  - Bloco 1 (Reflexo do Complemento): 10/10 acertos.
  - Bloco 2 (Combinação com Restrições): 5/5 acertos.
- **Diagnóstico**: Excelente consolidação dos conceitos de complemento e restrições. O candidato automatizou completamente o reflexo de complementos simples (ex: $C(100, 97) \to C(100, 3)$) e superou por completo o erro recorrente do dia 16/06 (quando confundia escolher quase todos com escolher o número de selecionados). A regra de fixar elementos obrigatórios (comissão de 4 entre 9 com João obrigatório e Maria proibida $\to C(7, 3)$) foi aplicada de forma instantânea e por intuição de diagramas/modelagem.
- **Observações**: O candidato relatou facilidade na simplificação e nos cortes das frações quando utiliza rascunho de papel, corroborando o diagnóstico de que os gargalos anteriores eram puramente de saturação aritmética e não conceitual.

### Diagnóstico de Análise Combinatória - Revisão Geral e Método do Complemento (16/06/2026)
- **Resultado**: 21/25 acertos (84,0% de aproveitamento diário - 25 Qs resolvidas no dia, sendo 21 acertos e 4 erros).
  - Bloco 1 (Revisão Geral de Combinatória): 10/10 acertos.
  - Bloco 2 (Exercícios "Quem fica de fora?" / Complemento): 11/15 acertos (Erros nas Q1, Q2, Q3 e Q15).
- **Diagnóstico**: O candidato apresentou uma retenção excelente no bloco de revisão mesmo após um período de hiato sem estudar combinatória, recuperando conceitos de arranjo, permutação e restrições por raciocínio intuitivo de contagem. No segundo bloco, focado na heurística do complemento ($C(n,k) = C(n, n-k)$), o conceito geral foi compreendido e aplicado com sucesso (inclusive na Q7 e Q10), mas o candidato escorregou nas questões mais básicas de "sobra 1" (Q1, Q2, Q3), escolhendo incorretamente o número de selecionados ($n-1$) em vez de o número total de possibilidades ($n$). Na Q15, houve um erro conceitual menor ao confundir a justificativa matemática da equivalência.
- **Erros Mapeados**:
  - **Falha no atalho de "sobra 1"**: Em Q1 ($C(12,11)$), Q2 ($C(15,14)$) e Q3 ($C(20,19)$), respondeu as opções correspondentes a $n-1$ (11, 14, 19) em vez do número total de combinações ($n = 12, 15, 20$).
  - **Fadiga de cálculo em conta grande**: Na Q7 ($C(40,35)$), embora tenha acertado por eliminação de alternativas, o candidato relatou embotamento e cansaço devido ao tamanho da computação aritmética bruta.
- **Diretrizes e Ajustes**:
  - **Automatizar o caso base**: Fixar a regra imediata de que escolher quase todos ($n-1$) de um grupo de $n$ pessoas é simplesmente escolher 1 para ficar de fora, o que sempre resulta em $n$ maneiras possíveis ($C(n, n-1) = n$).

### Teste Misto de Fixação e Carga Cognitiva — Módulo 3 (31/05/2026)
- **Resultado**: 9/10 acertos (90% de aproveitamento - Q22 errada, Q24 acertada por chute).
- **Diagnóstico**: O aproveitamento quantitativo é excelente, confirmando que os princípios fundamentais foram assimilados. No entanto, o teste confirmou que o principal limitador do candidato neste momento não é a teoria, mas sim a **carga de memória de trabalho (RAM mental)** sob fadiga acumulada.
- **Erros e Dificuldades Mapeados**:
  - **Q22 (Ordem Importa / Pódio)**: O candidato errou a distribuição de medalhas entre 3 pessoas (Ana, Bruno, Carlos), marcando 9 (Q22c) em vez de 6 (gabarito `b`), devido à fadiga no encadeamento de possibilidades mentais.
  - **Q24 (Cálculo sob stress)**: Acertou via eliminação de alternativas ($1.757.600$), mas relatou saturação cognitiva ao processar multiplicações maiores de cabeça ($676 \times 26$).
- **Plano de Ação**: Encerrar os estudos de Lógica/Matemática por hoje. O conceito foi fixado com sucesso, mas o esgotamento da memória de curto prazo impede o avanço saudável para tópicos de maior complexidade.

### Diagnóstico de Ordem e Permutação — Módulo 3 (31/05/2026)
- **Resultado**: 12/15 acertos (80% de aproveitamento consolidado na sessão).
  - Exercícios Nível Acima (1-5): 5/5 acertos.
  - Diagnóstico Ordem Importa (6-10): 2/5 acertos (Erros nas Q6, Q7 e Q9).
  - Treino de Permutação (11-15): 5/5 acertos.
- **Diagnóstico**: O candidato demonstra facilidade com a aplicação imediata do PFC e cálculo de fatoriais/permutações simples. Contudo, foi identificado o primeiro gargalo conceitual do módulo na fronteira da **ordem dos elementos**:
  - Dificuldade em perceber quando a mudança de posição de elementos gera um novo agrupamento (ex: sequências de letras e pódios). O candidato desconsiderou as permutações internas (ex: contou "AB", mas esqueceu "BA"), confundindo a restrição de "ordem importa" com a de "ordem não importa".
- **Erros Mapeados**:
  - **Q6, Q7 & Q9 (Ordem Importa)**: Em problemas de sequências de letras (Q6), posições de fila/pódio (Q7) e algarismos de números (Q9), o candidato desconsiderou as permutações internas.
- **Plano de Ação**: Introduzir exercícios intermediários específicos para treinar o filtro de decisão "A ordem importa?". Focar em fixar a pergunta heurística: *"Se eu trocar a posição dos elementos, obtenho um resultado novo?"*. Não avançar para fórmulas de Arranjo e Combinação antes de sanar essa distinção.

### Diagnóstico de Princípios de Contagem — Módulo 3 (31/05/2026)
- **Resultado**: 15/15 acertos (100% de aproveitamento).
  - Bloco PFC (1-10): 10/10 acertos.
  - Bloco Aditivo vs. Multiplicativo (11-15): 5/5 acertos.
- **Diagnóstico**: O candidato internalizou com rapidez a regra básica do Princípio Fundamental da Contagem (PFC) e demonstrou facilidade para diferenciar quando somar (escolhas exclusivas - "ou") e quando multiplicar (etapas independentes - "e") sem a necessidade de decorar fórmulas formais.
- **Dúvida Resolvida**: Esclarecida a base algébrica e a visualização intuitiva da expansão quadrática de $(a+b)^2$, que será útil para otimização de cálculos rápidos de cabeça durante a prova.
- **Plano de Ação**: Avançar na trilha de contagem estruturando a intuição de árvores de decisão e contagem por casos, evitando introduzir fórmulas de permutação, arranjo e combinação precocemente.

### Simulado de Silogismos e Existência Avançada (30/05/2026 - Módulo 2)
- **Resultado**: 
  - Treino 11-20: 10/10 acertos (100% de aproveitamento).
  - Treino 21-30: 9/10 acertos (Q28 errada por fadiga mental).
- **Diagnóstico**: Consolidação definitiva do transporte de propriedades em quantificadores existenciais. Os acertos (19/20 no total) mostram que a base foi solidificada. O erro pontual na Q28 foi resultado de cansaço mental por repetição exaustiva (reconhecimento automático de padrão visual).
- **Erro Mapeado**:
  - **Q28 (Fadiga no rastreamento de existência)**: Premissas: *"Alguns médicos são pesquisadores"*; *"Alguns pesquisadores são professores"*; *"Nenhum professor é robô"*. Afirmação: *"Alguns pesquisadores não são robôs"*. Classificou-se como Possível (P). Erro: é **Necessária (N)**, pois a premissa 2 cria um pesquisador professor, e como nenhum professor é robô, esse pesquisador não é robô.
- **Plano de Ação**: Encerrar o Módulo 2 de Lógica Verbal devido ao declínio do retorno de aprendizado e transicionar para o Módulo 3 (**Análise Combinatória**).

### Simulado FGV de Verdade N-P-I (1–10) (30/05/2026)
- **Resultado**: 8/10 acertos (80% de aproveitamento).
- **Diagnóstico**: Identificados pontos residuais de oscilação na fronteira de conclusões apenas *possíveis* vs. *necessárias*.
- **Erros Mapeados**:
  - **Q2**: Premissas: *"Todo médico é formado"*; *"Alguns formados são pesquisadores"*. Afirmação: *"Nenhum médico é pesquisador"*. Concluiu-se como Necessária (N). Erro: a afirmação é **apenas possível (P)**, pois os formados pesquisadores podem estar localizados fora ou dentro do conjunto de médicos.
  - **Q3**: Premissas: *"Nenhum professor é robô"*; *"Alguns servidores são professores"*. Afirmação: *"Alguns servidores não são robôs"*. Concluiu-se como Possível (P). Erro: a afirmação é **necessária (N)**, pois o indivíduo que é servidor e professor herda a exclusão e obrigatoriamente não é robô.

### Simulado Estilo FGV — Possibilidade vs Necessidade (30/05/2026)
- **Resultado**: 9/9 acertos válidos (Q28 de alternativa única anulada por duplo gabarito).
- **Diagnóstico**: Domínio conceitual completo e detecção de ambiguidades na modelagem das questões.
- **Aprendizado / Heurística**: 
  - A alternativa *"Todos os trabalhadores estudam lógica"* não contradiz necessariamente a premissa *"Alguns trabalhadores estudam lógica"*. A relação existencial ("Alguns") é logicamente compatível com a totalidade ("Todos"). Apenas a disjunção universal *"Nenhum..."* contradiz a premissa existencial.
  - A interpretação de *"Alguns A não são D"* não pressupõe ou exige qualquer sobreposição ou elemento de $A$ em $D$. Ela apenas atesta que existe ao menos um $A$ fora de $D$.

### Treino de Possibilidade vs Necessidade (30/05/2026)
- **Resultado**: 
  - Bloco 1-5: 4/4 válidas (Q2 anulada por erro de formulação).
  - Bloco 6-15: 9/10 acertos (Q14 errada, Q15 certa).
  - Bloco 11-20 (Avançado): 10/10 acertos (100% de aproveitamento conceitual, detectando com sucesso as inconsistências de alternativa única).
- **Diagnóstico**: Ótimo progresso na transitividade de inclusão e na montagem de diagramas lógicos para testar possibilidade.
- **Erros Mapeados**:
  - **Q4 (Existência com propriedade herdada)**: Classificou erroneamente *"Alguns professores não são robôs"* como possível. Correto: é necessária, pois a premissa garante o professor pesquisador, e nenhum pesquisador é robô.
  - **Q14 (Transitividade de inclusão)**: Avaliou *"Todo A é B. Todo B é C. Logo, A está contido em C"* como apenas possível. Correto: é necessária (transitividade clássica).
- **Próxima ação**: Usar a heurística da personificação ("João") para carregar propriedades de quantificadores existenciais e evitar erros de transitividade e herança.

### Bloco de Relações Existenciais (29/05/2026)
- **Resultado**: 7/10 acertos (70% de aproveitamento).
- **Diagnóstico**: Erros concentrados em rastreamento de existência parcial em cadeia e na conexão indevida de existenciais independentes.
- **Erros Mapeados**:
  - **Q23 (Conexão de existenciais independentes)**: Premissas: *"Nenhum robô é humano"*, *"Alguns humanos são médicos"*, *"Alguns médicos são pesquisadores"*. Concluiu-se que *"alguns pesquisadores não são robôs"*. Erro: não se pode garantir que o médico humano é o mesmo médico pesquisador. Logo, não há conclusão necessária sobre pesquisadores.
  - **Q26 (Inversão de inclusão)**: Premissas: *"Todo auditor é servidor"*, *"Todo servidor possui matrícula"*, *"João possui matrícula"*. Concluiu-se que João é servidor. Erro: possuir matrícula apenas insere João no conjunto mais amplo, mas não garante que ele pertença ao subconjunto de servidores ou auditores.
  - **Q27 (Existência parcial com exclusão)**: Premissas: *"Alguns professores são pesquisadores"*, *"Nenhum pesquisador é robô"*. Concluiu-se *"Nenhum professor é robô"*, mas a única dedução obrigatória é *"Alguns professores não são robôs"*. Erro: a exclusão parcial de *"Alguns não"* jamais se inflaciona para a exclusão universal de *"Nenhum"*.
- **Próxima ação**: Estudar e reter a regra de não acoplamento de existenciais e a heurística de "alguns não".

### Simulado Focado — Pontos de Risco (29/05/2026)
- **Resultado**: 19/20 acertos (95% de aproveitamento).
- **Diagnóstico**: Evolução e consistência excepcionais. O erro pontual foi estritamente de rastreamento visual das relações, não conceitual.
- **Erro Mapeado**:
  - **Q2 (Conclusão existencial em cadeia)**: De *"Nenhum auditor é terceirizado"* e *"Alguns servidores são auditores"*, conclui-se formalmente que *"Alguns servidores não são terceirizados"*. O candidato marcou *"Alguns terceirizados são servidores"* por eliminação e pressa.

### Mini-bloco de Lógica Mista (29/05/2026)
- **Resultado**: 5/10 acertos (50% de aproveitamento).
- **Diagnóstico**: Desempenho afetado por dois pontos específicos: falhas ao encadear existência parcial com exclusão universal ("alguns + nenhum") e a inversão clássica de inclusão em enunciados longos.
- **Erros Mapeados**:
  - **Q1 & Q7 (Conclusão existencial em cadeia)**: Dificuldade em perceber que "Alguns A são B" + "Nenhum B é C" garante a existência de pelo menos um A que não é C.
  - **Q4 (Negação de implicação)**: Escorregou na regra do caso proibido, marcando $p \to \neg q$ em vez do correto $p \land \neg q$.
  - **Q10 (Inversão de inclusão)**: Assumiu que "alguns estudantes são engenheiros" a partir de "todo engenheiro estudou matemática" e "alguns estudantes estudaram matemática" ($Engenheiro \subset Estudou\ Matematica$).

### Teste de Validação — Negação de Quantificadores (29/05/2026)
- **Resultado**: 5/5 acertos (100% de aproveitamento).
- **Diagnóstico**: Consolidação total da teoria. Demonstrou domínio da regra de que a negação deve invalidar/destruir a frase original (teste da coexistência impossível).

### Simulado Avançado — 5 Questões (29/05/2026)
- **Resultado**: 4/5 acertos (80% de aproveitamento).
- **Diagnóstico**: Domínio sólido em encadeamento lógico, implicação encadeada, conjuntos e existência parcial. Errou a Q4 por envolver conteúdo ainda não estudado (Negação de quantificadores), o qual foi formalizado após este teste.
- **Erro Mapeado**:
  - **Q4 (Negação de quantificadores)**: Negou a frase universal *"Todo servidor público conhece a legislação"* como *"Nenhum..."*. A negação correta deve ser existencial: *"Existe pelo menos um servidor que não conhece..."* (ou *"Alguns servidores não conhecem..."*).
- **Próxima ação**: Resolver exercícios dedicados de negação de quantificadores para fixação.

### Simulado Geral de Lógica — 100 Questões (29/05/2026)
- **Resultado Geral**: 95/100 acertos (95% de aproveitamento).
  - Blocos 1 a 4 (1–40): 40/40
  - Bloco 5 (41–50): 8/10 (Erros: Q46, Q49)
  - Blocos 6 a 9 (51–90): 40/40
  - Bloco 10 (91–100): 8/10 (Erros: Q92, Q98)
- **Erros Mapeados**:
  - **Q7 (Modus Tollens)**: Oscilação na identificação do padrão em linguagem natural ("sistema online, usuários acessam"). Corrigido na revisão.
  - **Q46 (Modus Ponens)**: Erro por reflexo/desatenção. Validou como inválido um argumento do tipo $p \to q; p; \therefore q$ sob pressa.
  - **Q49 (Conceito de proposição)**: Confundiu a falta de contexto com ausência de valor lógico na frase "Ele foi aprovado". O examinador considera proposição mesmo sem determinar o sujeito (pode ser V ou F). (Atenção: há divergência de bancas sobre sentenças abertas com pronome "ele").
  - **Q92 (Inversão de inclusão)**: Concluiu incorretamente que Marcos é servidor apenas por estar cadastrado, violando o princípio de conjuntos ($Servidores \subset Cadastrados$).
  - **Q98 (Leis de De Morgan)**: Esqueceu de trocar o conectivo na negação da disjunção, marcando $\neg(p \lor q) \equiv \neg p \lor \neg q$ em vez do correto $\neg p \land \neg q$.
- **Pontos de Risco**: Leis de De Morgan sob pressão de tempo e inversão de inclusão em enunciados narrativos longos.

### Simulado/Treino — Diagramas Lógicos e Conjuntos 31-40 (28/05/2026)
- **Resultado**: 8/10 acertos.
- **Diagnóstico**: Erros na Q32 e Q40 repetindo o padrão de oscilação na combinação de existência parcial e exclusão.
- **Regra chave**: Quando "Alguns A são B" e "Nenhum B é C", conclui-se formalmente que "Alguns A não são C".
- **Refinamento**: "Alguns não" apenas garante pelo menos um fora, não zerando a interseção, ao contrário de "Nenhum" que zera a interseção completamente.

### Simulado/Treino — Diagramas Lógicos e Conjuntos 21-30 (28/05/2026)
- **Resultado**: 7/10 acertos.
- **Diagnóstico**: Errou Q27, Q29 e Q30 por falha na relação entre existência parcial e inclusão, e inversão clássica de inclusão ($A \subset B$, existe $B \not\to$ existe $A$). Dúvida importante sanada na Q24: em lógica, deve-se pensar estritamente pelos dados formais do enunciado, sem completar o cenário com suposições de mundo real.

### Simulado/Treino — Diagramas Lógicos e Conjuntos 11-20 (28/05/2026)
- **Resultado**: 10/10 acertos.
- **Diagnóstico**: Entendimento muito sólido sobre a diferença de encadeamento necessário e interseção apenas possível (acerto da Q14 e Q19 demonstrando que "alguns A são B" + "alguns B são C" não obriga conexão direta entre A e C).

### Simulado/Treino — Diagramas Lógicos e Conjuntos 1-10 (28/05/2026)
- **Resultado**: 10/10 acertos.
- **Diagnóstico**: Alta intuição para o raciocínio espacial e relações de inclusão/exclusão/interseção sem cair em pegadinhas comuns (como inverter inclusões).

### Simulado/Treino — Argumentação Lógica 41-50 (28/05/2026)
- **Resultado**: 10/10 acertos.
- **Diagnóstico**: Consolidação completa do Modus Tollens (separação do "q aconteceu" vs. "p causou q").

### Simulado/Treino — Argumentação Lógica 31-40 (28/05/2026)
- **Resultado**: 8/10 acertos.
- **Diagnóstico**: Erros na Q35 e Q37 de Modus Tollens devido à tensão cognitiva entre a semântica do mundo real e a consistência estrutural formal.

### Simulado/Treino — Argumentação Lógica 21-30 (28/05/2026)
- **Resultado**: 8/10 acertos.
- **Diagnóstico**: Erros na Q24 e Q28 por oscilação na identificação do padrão "não q, logo não p".

### Simulado/Treino — Implicação/Negação (28/05/2026)
- **Resultado**: 9/10 acertos (errou a Q52 de negação em linguagem natural, confundindo-a com disjunção).
- **Diagnóstico**: Confundiu a negação da implicação ($p \land \neg q$) com a disjunção ($p \lor \neg q$). A negação exige forçar a quebra da regra (antecedente verdadeiro e consequente falso), enquanto a disjunção não garante essa violação.
- **Próxima ação**: Revisar a tabela de operações e praticar a escrita automática de negações de implicação sem escorregar para a disjunção.

### Simulado/Treino — Argumentação Lógica 1-10 (28/05/2026)
- **Resultado**: 9/10 acertos (errou a Q6 de Modus Tollens).
- **Diagnóstico**: Dificuldade em reconhecer a validade do argumento Modus Tollens ($p \to q; \neg q; \therefore \neg p$) em linguagem natural.
- **Próxima ação**: Praticar o reconhecimento de Modus Tollens em enunciados cotidianos.

### Simulado/Treino — Argumentação Lógica 11-20 (28/05/2026)
- **Resultado**: 9/10 acertos (errou a Q14 de Negação do Antecedente).
- **Diagnóstico**: Confundiu a falácia da Negação do Antecedente ($p \to q; \neg p; \therefore \neg q$), que é um argumento inválido, com uma estrutura válida. Não estudar lógica não impede a melhora por outros meios.
- **Próxima ação**: Reter a regra prática de que negar o antecedente não permite concluir a negação do consequente.

### Simulado/Treino — Equivalências e Negações Lógicas (27/05/2026 - Teste 6)
- **Resultado**: Acertos: 23, 24, 25, 28, 29, 30 | Erros: 21, 22, 26, 27
- **Diagnóstico**: O erro recorrente foi a tradução intuitiva de condicional ($p \to q$) como se fosse conjunção ($p \land q$). 
  1. **Implicação não afirma ocorrência** (erros nas questões 21 e 27): a implicação apenas proíbe um cenário, sem exigir a coexistência de $p$ e $q$. Ver [[3 - Materias/Logica/04 - equivalencias#Modelo de Raciocinio Implicacao p to q vs Conjuncao p land q|Modelo de Raciocínio: Implicação vs Conjunção]].
  2. **Negação de implicação como o caso proibido** (erros nas questões 22 e 26): negar a condicional significa demonstrar que a regra foi quebrada ($p \land \neg q$). Ver [[3 - Materias/Logica/04 - equivalencias#3 A Regra Proibida e o Porque da Negacao|A Regra Proibida e o Porquê da Negação]].
- **Próxima ação**: Estudar e fixar o checklist mental:
  - $p \land q$: Os dois acontecem.
  - $p \lor q$: Pelo menos um acontece.
  - $p \to q$: Um cenário é proibido.
  - $\neg(p \to q)$: O cenário proibido ocorreu.

### Simulado/Treino — Linguagem natural e plausibilidade (26/05/2026 - Teste 5)
- **Resultado**: Oscilação esperada devido ao contexto de linguagem natural (errou questões 1, 2, 3 e 4).
- **Diagnóstico**: O erro principal foi misturar a lógica de fechamento estrutural com a plausibilidade do mundo real ou com a falta de dados factuais:
  1. **Avaliar verdade sem informação** (erros nas questões 1 e 2): ver [[3 - Materias/Logica/01 - proposicao#Proposicoes em linguagem natural (ausencia de dados de contexto)|Proposições em linguagem natural (ausência de dados de contexto)]].
  2. **Regras condicionais são proposições** (erro na questão 3): ver [[3 - Materias/Logica/01 - proposicao#Regras condicionais sao proposicoes|Regras condicionais são proposições]].
  3. **Ausência de plausibilidade vs. proposição** (erro na questão 4): ver [[3 - Materias/Logica/01 - proposicao#Proposicao nao depende de plausibilidade|Proposição não depende de plausibilidade]].
  4. **Heurística de linguagem natural**: ver [[3 - Materias/Logica/01 - proposicao#Heuristica para linguagem natural|Heurística para linguagem natural]].
- **Próxima ação**: Resolver exercícios de linguagem natural focando estritamente em classificar como proposição usando os três filtros (universal, existencial e condicional geral), ignorando a plausibilidade prática.

### Simulado/Treino — Simulado misto de prova (26/05/2026 - Teste 4)
- **Resultado**: Acertos: 19/20 (Errou apenas a questão 20)
- **Diagnóstico**: Domínio quase total do conteúdo de prova. O erro pontual na questão 20 indica uma oscilação na leitura de disjunções sob o existencial:
  1. **Disjunção com quantificador existencial** (interpretação sutil do "ou" inclusivo): ver [[3 - Materias/Logica/03 - quantificadores#Disjuncao com quantificador existencial|Disjunção com quantificador existencial]].
  2. **Evitar simetria mental** (não confundir cobertura total do conjunto com falsidade da proposição existencial).
- **Próxima ação**: Estudar a fundo a **negação de quantificadores** (passo seguinte natural do planejamento).

### Simulado/Treino — Leitura formal e precedência lógica (26/05/2026 - Teste 3)
- **Resultado**: Acertos: 2, 3, 4, 5, 6, 7, 8 | Erros: 1
- **Diagnóstico**: Evolução nítida. O erro na questão 1 revela um ponto avançado de precedência de operadores:
  1. **Precedência lógica** ("e" tem prioridade sobre "ou" sem parênteses): ver [[3 - Materias/Logica/02 - conectivos#Prioridade dos conectivos (ordem de avaliacao)|Prioridade dos conectivos (ordem de avaliação)]].
  2. **Leitura estrutural vs. linear** (quebrar a leitura da esquerda para a direita para identificar os blocos lógicos primeiro): ver [[3 - Materias/Logica/02 - conectivos#Leitura estrutural vs leitura linear|Leitura estrutural vs leitura linear]].
- **Próxima ação**: Praticar a reescrita de proposições compostas complexas adicionando parênteses explícitos de precedência antes de tentar resolvê-las.

### Simulado/Treino — Leitura estrutural e conectivos (26/05/2026 - Teste 2)
- **Resultado**: Acertos: 1, 2, 7 | Erros: 3, 4, 5, 6, 8
- **Diagnóstico**: O escopo simples de quantificador está claro, mas o raciocínio falha na mistura com conectivos e na conceituação de proposição. Três focos específicos:
  1. **Escopo do quantificador com conectivo "e"** (erro nas questões 3 e 4): ver [[3 - Materias/Logica/03 - quantificadores#Escopo com "e"|Escopo com "e"]].
  2. **Contradição/impossível $\neq$ não proposição** (erro nas questões 4 e 6): ver [[3 - Materias/Logica/01 - proposicao#Contradicao nao anula proposicao|Contradição não anula proposição]].
  3. **Independência de variáveis em múltiplos quantificadores** (erro na questão 8): ver [[3 - Materias/Logica/03 - quantificadores#Independencia de variaveis quantificadas|Independência de variáveis quantificadas]].
- **Próxima ação**: Estudar a negação de quantificadores e praticar a identificação de proposições em expressões de contradição pura.

### Simulado/Treino — Proposições e Quantificadores (26/05/2026)
- **Resultado**: Acertos: 1, 2, 3, 5, 6 | Erros: 4, 7 (chute na 8)
- **Diagnóstico**: A base está formada, mas falta consolidar três blocos específicos:
  1. **Escopo de quantificadores** (onde a variável é fechada): ver [[3 - Materias/Logica/03 - quantificadores#Escopo do quantificador (onde ele atua)|Escopo do quantificador (onde ele atua)]].
  2. **Fluxo de resolução** (estrutura vs. valor lógico): ver [[3 - Materias/Logica/01 - proposicao#Fluxo correto de resolucao|Fluxo correto de resolução]].
  3. **Teste por exemplo e contraexemplo**: ver [[3 - Materias/Logica/03 - quantificadores#Teste por exemplo e contraexemplo|Teste por exemplo e contraexemplo]].
- **Próxima ação**: Resolver 5 exercícios focados exclusivamente em **escopo de quantificadores**.
