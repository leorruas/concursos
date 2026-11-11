---
articleId: art-392b1e185fd2729e
articleAliases: ["3 - Materias/Informatica/23 - etica em ia vieses discriminacao transparencia e revisao humana.md"]
title: "Ética em inteligência artificial: vieses, discriminação algorítmica, explicabilidade e supervisão humana"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Ética em inteligência artificial: vieses, discriminação algorítmica, explicabilidade e supervisão humana

## 1. Situação concreta e problema ético-institucional

No setor público contemporâneo, a adoção de sistemas de inteligência artificial (IA) migrou de meras ferramentas experimentais para a automação de processos decisórios de alto impacto sobre direitos fundamentais e políticas de Estado:
1. **Triagem de benefícios sociais e previdenciários:** algoritmos preditivos que classificam requerentes e elegibilidade com base em histórico socioeconômico.
2. **Reconhecimento facial e segurança pública:** vigilância algorítmica em grandes aglomerações e triagem de mandados de prisão.
3. **Seleção de pessoal e contratações públicas:** triagem automatizada de currículos e perfis funcionais.
4. **Alocação de leitos de saúde e filas de atendimento:** priorização automatizada por modelos probabilísticos de sobrevida ou gravidade.
5. **Automação legislativa e processual:** sumarização de emendas parlamentares, classificação de proposições e sugestões de minutas de pareceres na Câmara dos Deputados.

### O problema da falácia da neutralidade matemática
A cobrança recorrente em concursos (especialmente Cebraspe) parte do mito da "imparcialidade tecnológica": a crença ingênua de que, por operarem com números, equações e códigos binários, algoritmos seriam imunes a preconceitos, distorções e injustiças humanas.

Na realidade fática e jurídica, **a inteligência artificial não é neutra**:
- Ela reflete e amplifica os dados históricos com os quais foi alimentada (vieses de dados).
- Ela codifica as premissas e simplificações de seus desenvolvedores (vieses de desenho).
- Ela pode reproduzir exclusões sistêmicas históricas sob um manto pseudocientífico de legitimidade matemática.

O desafio central da governança pública é garantir que a eficiência preditiva não atropele garantias constitucionais como a isonomia (CF/88, art. 5º, caput), o devido processo legal e contraditório (art. 5º, LIV e LV), a publicidade e motivação dos atos administrativos (art. 37, caput), e a autodeterminação informativa protegida pela LGPD (Lei nº 13.709/2018).

---

## 2. Taxonomia dos vieses algorítmicos: origens e manifestações

O **viés algorítmico (*algorithmic bias*)** ocorre quando um sistema computacional produz sistematicamente resultados distorcidos, preconceituosos ou injustos que colocam em desvantagem determinado grupo social ou demográfico.

```
                      FONTES DE VIÉS EM IA
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
VIESES DE DADOS (INTRÍNSECOS)             VIESES DE ALGORITMO E DESENHO
- Viés Histórico                          - Viés de Agregação
- Viés de Representatividade/Amostragem   - Viés de Confirmação/Loop de Feedback
- Viés de Medição / Proxy Indireto        - Otimização Monodimensional de Métrica
```

### 2.1. Vieses originados nos dados de treinamento
1. **Viés Histórico (*Historical Bias*):**
   - *Conceito:* Ocorre quando os dados coletados refletem fielmente a realidade do passado, mas essa realidade histórica é intrinsecamente injusta, preconceituosa ou desigual.
   - *Exemplo clássico:* Um modelo de IA treinado para selecionar executivos ou analistas com base no histórico dos últimos 30 anos de promoções corporativas. Como historicamente homens brancos ocuparam desproporcionalmente cargos de chefia, o modelo aprende que o gênero masculino é uma "variável preditiva positiva" para liderança, desclassificando mulheres qualificadas mesmo que o campo "gênero" tenha sido formalmente removido (o modelo descobre palavras-gatilho correlacionadas, como esportes universitários masculinos ou colégios de origem).
2. **Viés de Representatividade ou Amostragem (*Sampling Bias / Representation Bias*):**
   - *Conceito:* Acontece quando a base de dados utilizada para o treinamento não possui proporção equivalente ou qualidade suficiente em relação à população real sobre a qual o modelo operará.
   - *Exemplo fático:* Softwares de reconhecimento facial treinados predominantemente com imagens de indivíduos caucasianos do hemisfério norte. Quando aplicados a populações negras, indígenas ou asiáticas, o modelo apresenta taxas de falsos positivos (acusar falsamente um inocente) até cem vezes maiores, decorrente da sub-representação na base de treino.
3. **Viés de Medição e Variáveis *Proxy* (*Measurement Bias & Proxy Discrimination*):**
   - *Conceito:* Ocorre quando a variável de interesse real (ex.: competência moral, propensão ao trabalho, honestidade) não pode ser medida diretamente e o desenvolvedor escolhe uma variável substituta (*proxy*). Se a variável substituta carregar viés estrutural, o modelo reproduzirá discriminação indireta.
   - *Exemplo no serviço público:* Um sistema de crédito ou concessão habitacional que utiliza o "CEP de residência" como substituto da capacidade de solvência. Como bairros periféricos concentram populações vulneráveis e minorias étnicas, o algoritmo nega direitos a indivíduos com renda suficiente apenas por residirem naquela região, incorrendo em discriminação racial e social indireta.

### 2.2. Vieses de modelagem e ciclos viciosos de retroalimentação
1. **Viés de Confirmação e Loops de Retroalimentação (*Feedback Loops*):**
   - *Conceito:* Ocorre quando as predições do algoritmo alteram o mundo real de forma a gerar novos dados que confirmam e agravam a própria predição original.
   - *Cenário típico de prova (Policiamento Preditivo):* Um algoritmo prediz que determinado bairro periférico tem maior probabilidade de crime. O comando envia mais viaturas policiais para lá. Como há mais policiais abordando pedestres naquele bairro, mais pequenos delitos (como porte de entorpecentes) são registrados lá do que em bairros nobres onde não há blitz. Esses novos registros são alimentados no banco de dados da IA, que conclui: "eu estava certa, ali tem mais crime, mandem ainda mais policiais". Trata-se de uma profecia autorrealizável matematicamente construída.

---

## 3. Discriminação algorítmica direta versus indireta

No direito aplicado à tecnologia, a discriminação pode ocorrer por duas vias que são frequentemente exploradas pelo Cebraspe:

| Dimensão | Discriminação Direta (*Disparate Treatment*) | Discriminação Indireta (*Disparate Impact*) |
| :--- | :--- | :--- |
| **Mecanismo** | O algoritmo utiliza explicitamente atributos sensíveis/protegidos (ex.: raça, gênero, orientação sexual, religião) como regra de decisão ou peso ponderado. | O algoritmo **não utiliza** nenhum atributo sensível diretamente. Ele baseia-se em dados aparentemente neutros (CEP, histórico de consumo, escola de ensino médio, vocabulário). |
| **Intencionalidade** | Geralmente deliberada ou derivada de código explícito proibido. | Aparentemente neutra e desprovida de dolo inicial, mas com resultado prático discriminatório. |
| **Resultado** | Tratamento desigual formal imediato. | Impacto adverso desproporcional sobre determinado grupo protegido. |
| **Vedação Jurídica** | Ilegalidade manifesta (CF/88, art. 3º, IV, art. 5º; LGPD, art. 11). | Vedada pela doutrina constitucional e pela LGPD (art. 6º, IX - princípio da não discriminação). |

> [!IMPORTANT]
> **Pegadinha Clássica de Prova (Cebraspe):** Afirmar que a eliminação de campos como "gênero", "raça" ou "etnia" de um banco de dados garante que o modelo treinado será imune à discriminação. **Isso é FALSO**. Devido à alta dimensionalidade e correlação dos dados, algoritmos avançados descobrem facilmente correlações latentes (*proxies*) que reconstroem as variáveis protegidas de maneira indireta.

---

## 4. O dilema da Caixa-Preta (*Black-Box*) e a Explicabilidade (XAI)

### 4.1. O *Trade-off* entre Desempenho e Interpretabilidade
Historicamente, na ciência de dados e machine learning, existe uma tensão entre a capacidade preditiva do modelo e a sua capacidade de ter a lógica interna compreendida por seres humanos:

```
Alta   ▲
       │  [Regressão Linear / Logística]
       │  [Árvores de Decisão Simples]
Inter- │  [Sistemas Baseados em Regras]
preta- │                                 [Florestas Aleatórias / Random Forest]
bili-  │                                 [Support Vector Machines - SVM]
dade   │                                                          [Deep Learning / Redes Neurais]
       │                                                          [Modelos Fundacionais / LLMs]
Baixa  ▼────────────────────────────────────────────────────────────────────────────────────────►
       Baixo                 Complexidade Preditiva e Parâmetros                     Alto
```

1. **Modelos Interpretáveis por Natureza (*White-Box* ou Transparentes):**
   - Modelos lineares simples e árvores de decisão rasas. É possível apontar exatamente qual variável contribuiu com quantos pontos percentuais para a decisão final.
2. **Modelos Opacos (*Black-Box*):**
   - Redes neurais profundas com milhões ou bilhões de parâmetros e relações não lineares complexas. O sistema recebe a entrada $X$ e devolve a resposta $Y$ com desempenho que depende do problema, dos dados e da avaliação. Embora o cálculo matemático da saída possa ser reproduzido, explicar de forma fiel e inteligível o papel das variáveis em cada previsão pode ser difícil; a explicação estatística não equivale, por si só, a uma demonstração causal.

### 4.2. Explicabilidade (XAI - *Explainable Artificial Intelligence*)
Diante da exigência constitucional de motivação dos atos administrativos (CF/88, art. 37 e Lei nº 9.784/1999, art. 50), o Estado não pode se escudar na desculpa de que "o computador decidiu e ninguém sabe como".

A **XAI** abrange métodos e ferramentas que visam tornar as saídas de modelos complexos compreensíveis para humanos:
- **Transparência Global:** Como o modelo funciona como um todo (quais variáveis gerais pesam mais no comportamento geral da máquina).
- **Transparência Local (Explicabilidade da Decisão Individual):** Por que o cidadão Fulano de Tal teve seu pedido de aposentadoria ou benefício negado hoje? O que ele precisaria alterar para reverter a decisão? (Uso de técnicas agnósticas como SHAP - *SHapley Additive exPlanations* e LIME - *Local Interpretable Model-agnostic Explanations*).

---

## 5. Supervisão humana: modelos de integração e falácias de controle

A governança ética recomenda supervisão proporcional ao risco, mas a obrigação jurídica de intervenção humana depende da norma aplicável. O art. 20 da LGPD assegura ao titular solicitar revisão de decisões unicamente automatizadas que afetem seus interesses, sem exigir, como regra geral, que a revisão seja feita por pessoa natural. Existem três configurações de controle:

```
               ARQUITETURAS DE SUPERVISÃO HUMANA
  
  [Human-in-the-Loop]    --> O humano participa OBRIGATORIAMENTE da decisão.
      (HITL)                 A IA apenas sugere/subsidia; a decisão final é humana.
  
  [Human-on-the-Loop]    --> O sistema opera com autonomia em tempo de execução,
      (HOTL)                 mas um humano monitora e pode intervir/abortar (botão de emergência).
  
  [Human-out-of-the-Loop]--> O sistema decide e executa totalmente sem interferência humana
      (HOOTL)                (não é universalmente proibido por essa denominação; verificar a legislação aplicável a cada decisão).
```

### O Viés de Automação (*Automation Bias*)
Ter um servidor público assinando a decisão gerada pela IA não garante, por si só, supervisão humana efetiva.
- **Conceito de Viés de Automação:** A tendência psicológica do ser humano de confiar cegamente nas recomendações fornecidas por sistemas automatizados, negligenciando erros óbvios ou deixando de exercer seu julgamento crítico independente.
- **Decisão "Carimbo" (*Rubber-Stamping*):** Quando um agente público homologa centenas de despachos gerados por IA por minuto sem capacidade temporal de conferência, a supervisão é puramente fictícia e ilusória, configurando desvio de finalidade e violação do devido processo legal.

---

## 6. Marco regulatório e parâmetros jurídicos brasileiros

### 6.1. A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
A LGPD estabelece parâmetros fundamentais para a governança de dados em IA:
1. **Princípio da Não Discriminação (art. 6º, IX):** Impossibilidade de realização de tratamento de dados para fins discriminatórios, ilícitos ou abusivos.
2. **Princípio da Transparência (art. 6º, VI):** Garantia, aos titulares, de informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os critérios utilizados.
3. **Direito à Revisão de Decisões Automatizadas (art. 20):**
   - O titular dos dados tem direito a solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses (crédito, perfil profissional, pessoal ou de personalidade).
   - **Histórico Legislativo e Atenção para Prova:** No texto original aprovado pelo Congresso, previa-se que a revisão deveria ser feita "por pessoa natural". Houve veto presidencial a essa expressão específica. Portanto, o texto legal vigente diz apenas **"solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado"**. No entanto, o § 1º assegura ao titular o direito de obter informações claras a respeito dos critérios e procedimentos utilizados para a decisão automatizada, resguardados os segredos comercial e industrial.

### 6.2. Estratégia Brasileira de Inteligência Artificial (EBIA)
Instituída pela Portaria MCTI nº 4.617/2021, fixa 6 eixos verticais e 3 eixos transversais, colocando **Legislação, Regulação e Uso Ético** como eixo estruturante transversal, orientada pelos princípios da OCDE:
- Crescimento inclusivo, desenvolvimento sustentável e bem-estar.
- Valores centrados no ser humano e equidade (*fairness*).
- Transparência e explicabilidade (*transparency and explainability*).
- Robustez, segurança e proteção (*robustness, security and safety*).
- Responsabilidade e prestação de contas (*accountability*).

### 6.3. Marco Legal da IA no Brasil (PL nº 2.338/2023 - Em tramitação no Congresso)
**Proposta legislativa, não direito vigente:** o PL nº 2.338/2023 discute uma abordagem baseada em risco. Suas categorias e deveres dependem do texto aprovado ao fim da tramitação e não podem ser cobrados como obrigações legais já em vigor:
- **Risco Excessivo / Inaceitável (proibições propostas no PL):** Técnicas subliminares que induzam comportamento nocivo, exploração de vulnerabilidades (idade, deficiência) e avaliação social com ranqueamento pelo Estado (*social scoring*).
- **Alto Risco (obrigações propostas no PL):** Aplicações em identificação biométrica remota em tempo real, gestão de infraestruturas críticas, avaliação de estudantes em exames de acesso, triagem em RH/recrutamento, concessão de crédito essencial e decisões judiciais/administrativas vinculantes. O projeto prevê mecanismos de avaliação de impacto algorítmico; o alcance e as condições de exigência dependem da redação final da eventual lei.
- **Baixo Risco:** Aplicações corriqueiras com deveres gerais de transparência.

---

## 7. Casos concretos e aplicações progressivas

### Caso 1: Triagem de emendas parlamentares na Câmara dos Deputados
- *Cenário:* Um modelo de Processamento de Linguagem Natural classifica emendas orçamentárias recebidas para verificar pertinência temática e constitucionalidade aparente.
- *Aplicação Ética:* O modelo opera estritamente sob o arranjo *Human-in-the-Loop* (HITL). Ele destaca trechos e sugere parecer preliminar com indicação das regras do Regimento Interno aplicadas. O Consultor Legislativo ou Deputado Relator é obrigado a ler o texto original e fundamentar sua decisão, respondendo funcionalmente pela autoria do relatório.

### Caso 2: Reconhecimento facial nas portarias e plenários do Congresso
- *Cenário:* Implantação de câmeras com reconhecimento facial para controle de acesso ao Palácio do Congresso Nacional.
- *Avaliação de Risco:* Configura sistema de alto risco com tratamento de dados biométricos sensíveis (LGPD, art. 11).
- *Medidas a avaliar conforme o risco e a base legal:* examinar necessidade de RIPD conforme a LGPD e orientações da ANPD, testar diferenças de erro entre grupos, definir supervisão e contestação adequadas, limitar coleta, retenção e acesso aos dados biométricos e observar as normas específicas de segurança pública. A classificação como alto risco e cada obrigação jurídica exigem fundamento normativo próprio; não decorrem automaticamente do PL enquanto ele estiver em tramitação.

### Caso 3: Descarte de currículos em estágio parlamentar com viés por faculdade
- *Cenário:* Um gabinete implementa triagem algorítmica de currículos com modelo preditivo treinado no histórico de assessores anteriores que receberam elogios. O modelo descarta automaticamente candidatos que não estudaram em universidades de elite do eixo Sul-Sudeste.
- *Diagnóstico:* Ocorre **viés histórico** e **discriminação indireta por proxy geográfico/socioeconômico**. A decisão perpetua barreiras estruturais históricas sem correlação direta com a competência do candidato, violando o princípio da impessoalidade e isonomia.

### Caso 4: Geração de minutas jurídicas com citações de julgados inexistentes
- *Cenário:* Uma procuradoria adota modelo generativo para redigir contestações em processos judiciais. O modelo gera uma fundamentação elegante, citando acórdãos inexistentes do STF com numeração e nomes de ministros fictícios (alucinação).
- *Implicação de Responsabilidade:* O advogado público assinou a peça sem conferir a base de dados jurisprudencial. Configura violação do dever de diligência profissional e do princípio da veracidade dos atos processuais. A falha humana de supervisão não pode ser atribuída à "IA", respondendo o subscritor pelo erro funcional.

---

## 8. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Situação hipotética:** Determinado órgão público implementou um sistema de aprendizado de máquina para ranquear candidatos em processo seletivo simplificado. Para assegurar total isonomia e evitar acusações de preconceito, a equipe técnica expurgou do banco de dados de treino todas as colunas referentes a gênero, cor, raça e estado civil dos candidatos.  
> **Assertiva:** Nessa situação, ao suprimir variáveis sensíveis do conjunto de dados, o órgão público garantiu matematicamente a eliminação de vieses algorítmicos e impediu a ocorrência de discriminação contra grupos minoritários.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A eliminação de atributos protegidos (*fairness through unawareness*) não impede a discriminação algorítmica. Os algoritmos de aprendizado de máquina operam em espaços de alta dimensionalidade e conseguem facilmente reconstruir atributos protegidos por meio de variáveis substitutas (*proxies*) fortemente correlacionadas, como endereço, histórico escolar, atividades extracurriculares ou padrões linguísticos, resultando em discriminação indireta (*disparate impact*).

### Item 2
> **Assertiva:** O viés de automação (*automation bias*) caracteriza-se pela recusa deliberada e resistência psicológica dos servidores públicos em utilizar ferramentas de inteligência artificial em suas rotinas laborais, motivada pelo receio de obsolescência funcional e desemprego tecnológico.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O item inverte completamente o conceito. O viés de automação não é a recusa ao uso da máquina, mas sim a **tendência do ser humano de confiar excessiva e cegamente nas sugestões fornecidas por sistemas automatizados**, suspendendo o pensamento crítico e deixando de conferir ou validar as decisões propostas pelo algoritmo, o que esvazia a supervisão humana.

### Item 3
> **Assertiva:** Em sistemas preditivos de inteligência artificial aplicados à segurança pública e à concessão de crédito, a discriminação indireta (*disparate impact*) pode se configurar mesmo na ausência de intenção discriminatória por parte dos desenvolvedores do modelo e sem o uso explícito de variáveis sensíveis na arquitetura computacional.
>
> **Gabarito:** **CERTO**  
> **Comentário:** A discriminação indireta prescinde de dolo ou intenção; ela é aferida pelo **impacto adverso e desproporcional** que critérios aparentemente neutros geram sobre grupos vulneráveis protegidos, em conformidade com o princípio da não discriminação consagrado na LGPD e na jurisprudência constitucional.

### Item 4
> **Assertiva:** De acordo com o texto atualmente vigente da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), todo titular de dados pessoais tem o direito subjetivo incondicional de exigir que a revisão de decisões tomadas unicamente com base em tratamento automatizado seja realizada obrigatoriamente por pessoa natural.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Pegadinha clássica e de alto índice de erro. O texto original da LGPD continha a expressão "por pessoa natural", mas ela foi **expressamente vetada** pela Presidência da República quando da conversão da lei. O caput do art. 20 da LGPD vigente assegura o direito à revisão de decisões automatizadas, mas não prevê textualmente a obrigatoriedade de que essa revisão seja realizada por ser humano (embora a ANPD e a doutrina debatam os limites dessa revisão).

### Item 5
> **Assertiva:** O método de aprendizado conhecido como XAI (*Explainable Artificial Intelligence*) busca desenvolver técnicas que tornem as decisões tomadas por modelos estatísticos complexos e redes neurais profundas inteligíveis para seres humanos, viabilizando o cumprimento do dever de fundamentação e motivação dos atos administrativos no âmbito do poder público.
>
> **Gabarito:** **CERTO**  
> **Comentário:** XAI procura tornar compreensíveis aspectos de funcionamento e resultados dos modelos, auxiliando auditorias e a motivação administrativa. **Uma explicação gerada por XAI não equivale automaticamente à fundamentação jurídica suficiente do ato**, que depende da decisão concreta, das evidências e das normas pertinentes. O gabarito CERTO descreve a finalidade da técnica, não garantia de conformidade.

### Item 6
> **Assertiva:** O arranjo de governança algorítmica denominado *Human-in-the-Loop* (HITL) caracteriza-se por permitir que o sistema de inteligência artificial tome e execute decisões administrativas de forma autônoma e instantânea, mantendo o operador humano apenas como um auditor retrospectivo que avalia relatórios gerenciais e estatísticas mensais de erros após a consumação dos atos.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O cenário descreve supervisão **posterior** à execução, e não intervenção humana como parte do processo decisório. Em usos comuns da expressão **Human-in-the-Loop (HITL)**, pessoas participam de uma etapa relevante do fluxo de decisão, segundo o desenho do sistema. A taxonomia de formas de supervisão varia entre autores; não se deve inferir exigência legal universal de chancela humana prévia em todo sistema de IA.

---

## 9. Referências conceituais e normativas

1. **BRASIL.** *Constituição da República Federativa do Brasil de 1988.* Arts. 5º (caput, incisos LIV e LV) e 37 (princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência).
2. **BRASIL.** *Lei nº 13.709, de 14 de agosto de 2018.* Lei Geral de Proteção de Dados Pessoais (LGPD). Arts. 6º (princípios de transparência e não discriminação) e 20 (revisão de decisões automatizadas).
3. **BRASIL.** *Ministério da Ciência, Tecnologia e Inovações.* Portaria MCTI nº 4.617, de 6 de abril de 2021. Estratégia Brasileira de Inteligência Artificial (EBIA).
4. **BRASIL.** *Congresso Nacional.* Projeto de Lei nº 2.338/2023. Marco Legal da Inteligência Artificial no Brasil.
5. **O'NEIL, Cathy.** *Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy.* Crown Publishing, 2016.
6. **RUSSELL, Stuart; NORVIG, Peter.** *Inteligência Artificial: uma abordagem moderna.* 4ª ed. Rio de Janeiro: GEN LTC, 2022.
7. **BAROCAS, Solon; HARDT, Moritz; NARAYANAN, Arvind.** *Fairness and Machine Learning: Limitations and Opportunities.* MIT Press, 2023.

> **Nota de revisão (11/11/2026):** revisão pontual dos achados TI-002, TI-003 e TI-008, com distinção entre princípio ético, direito vigente e proposta legislativa. Consultar [LGPD, art. 20](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html) e [tramitação oficial do PL nº 2.338/2023](https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262). A auditoria integral e a certificação dos gabaritos inéditos continuam pendentes.

> **Auditoria C/E, segunda passagem (11/11/2026):** Q1–Q6 mantêm gabaritos no núcleo conceitual (E, E, C, E, C, E). Q5 e Q6 receberam ressalvas sobre limites de XAI e variação da taxonomia HITL. A aplicabilidade de deveres jurídicos depende de normas vigentes específicas.
