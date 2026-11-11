---
articleId: art-217dafb9048089a8
articleAliases: ["3 - Materias/Informatica/24 - dado informacao variavel atributo indicador e metrica.md"]
title: "Dado, informação, variável, atributo, indicador e métrica: hierarquia e distinções operacionais"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Dado, informação, variável, atributo, indicador e métrica: hierarquia e distinções operacionais

## 1. Situação concreta e problema analítico no setor público

No contexto da administração pública contemporânea orientada por dados (*Data-Driven Government*), a formulação, o monitoramento e a comunicação de políticas públicas dependem da manipulação rigorosa de conceitos analíticos. No âmbito da Câmara dos Deputados — seja na divulgação institucional, no portal da transparência ou no trabalho das consultorias e comissões —, termos como "dado", "informação", "indicador" e "métrica" são frequentemente utilizados de forma indiscriminada na linguagem cotidiana.

Em provas de concurso público elaboradas pela banca **Cebraspe**, essa confusão de vocabulário é intencionalmente explorada como distrator:
- Tomar um dado bruto desconectado de contexto como se fosse informação acabada.
- Confundir uma métrica operacional com um indicador usado para monitorar objetivos; metas e polaridade podem ser úteis na gestão, mas não definem todo indicador.
- Tratar variáveis e atributos como sinônimos perfeitos em modelagem de dados e análise estatística.

A precisão conceitual é indispensável para evitar conclusões precipitadas em relatórios de desempenho e para gabaritar itens de Informática e Análise de Dados.

---

## 2. A Pirâmide DIKW: dado, informação, conhecimento e sabedoria

A estrutura clássica de transformação cognitiva da Ciência da Informação e da Computação é sintetizada pela **Pirâmide DIKW** (*Data, Information, Knowledge, Wisdom*):

```
                       ▲
                      / \
                     /Sab\            SABEDORIA: "Por que fazer / O que é ético e prudente"
                    /edoria\                     (Juízo de valor e tomada de decisão estratégica)
                   /────────\
                  / Conheci- \        CONHECIMENTO: "Como fazer / Entendimento"
                 /   mento    \                     (Padrões, modelos, regras e experiência humana)
                /──────────────\
               /   Informação   \     INFORMAÇÃO: "Quem, O que, Onde, Quando"
              /                  \                (Dados contextualizados, dotados de sentido e propósito)
             /────────────────────\
            /         Dado         \  DADO: "Fatos brutos, sinais e registros objetivos"
           /                        \       (Sem contexto, sem interpretação isolada)
          ────────────────────────────
```

### 2.1. Dado (*Data*)
- **Definição:** Registro bruto, primário, objetivo e quantitativo ou qualitativo de um evento, fato ou medição física, desprovido de contexto, significado intrínseco ou relação estruturada.
- **Natureza:** É o bloco elementar de construção. Isoladamente, um dado não orienta a ação humana nem possui intencionalidade.
- **Exemplo concreto:** O número `513`, a cadeia de caracteres `"PL 1234/2026"` ou o valor `84,2` gravado em uma célula de banco de dados. Sem metadados ou contexto semântico, é impossível saber se `84,2` refere-se a porcentagem de votos, temperatura de um servidor ou índice de umidade do Distrito Federal.

### 2.2. Informação (*Information*)
- **Definição:** Conjunto de dados que foram coletados, organizados, estruturados, formatados e contextualizados para transmitir um significado compreensível a um receptor humano ou sistema computacional.
- **Equação conceitual:** $\text{Informação} = \text{Dado} + \text{Contexto/Propósito}$.
- **Exemplo concreto:** `"A Câmara dos Deputados é composta por 513 parlamentares eleitos pelo sistema proporcional"` ou `"A temperatura atual do datacenter da Câmara atingiu 84,2 graus Fahrenheit"`. Agora o dado bruto possui sentido e responde a perguntas fundamentais (*o quê*, *quem*, *quando*, *onde*).

### 2.3. Conhecimento (*Knowledge*)
- **Definição:** Aplicação, integração e apropriação da informação pela mente humana por meio de experiência, aprendizado, reflexão e associação com regras, normas e modelos conceituais prévios.
- **Natureza:** O conhecimento responde ao *"como"* (*know-how*) e compreende as relações de causa e efeito.
- **Exemplo concreto:** Compreender a dinâmica regimental de que, para aprovar uma Proposta de Emenda à Constituição (PEC), é exigido quórum qualificado de $3/5$ dos 513 deputados (308 votos favoráveis) em dois turnos de votação.

### 2.4. Sabedoria (*Wisdom*)
- **Definição:** Estágio superior de julgamento, intuição ética e discernimento estratégico para avaliar as implicações morais, políticas e sociais das decisões tomadas com base no conhecimento acumulado. Responde ao *"por que fazer"* e *"o que é justo ou sustentável"*.

---

## 3. Variáveis e atributos: fundamentos de modelagem e estatística

Na transição da teoria da informação para a Ciência de Dados e Estatística Descritiva, surgem os conceitos de **Variável** e **Atributo**.

```
                   VARIÁVEL (Dimensão de Variação)
     ex.: "Regime de Tramitação da Proposição"
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                     ▼
Atributo / Categoria A               Atributo / Categoria B
"Urgência urgentíssima"              "Tramitação ordinária"
```

### 3.1. Variável
- **Definição:** Característica, fenômeno, propriedade ou quantidade passível de medição ou observação, que assume **diferentes valores ou categorias** entre os elementos de uma população ou amostra analisada.
- **Classificação Estatística das Variáveis:**
  1. **Quantitativa (Numérica):**
     - *Discreta:* Valores contáveis inteiros finitos (ex.: número de emendas apresentadas: $0, 1, 2, 3$).
     - *Contínua:* Valores mensuráveis em uma escala contínua real, admitindo casas decimais (ex.: tempo de discurso em minutos, valor empenhado em reais).
  2. **Qualitativa (Categórica):**
     - *Nominal:* Categorias sem ordem hierárquica intrínseca (ex.: partido político, unidade federativa de representação, gênero).
     - *Ordinal:* Categorias que possuem ordenamento ou gradação hierárquica natural, embora não quantificável matematicamente por soma (ex.: escolaridade, nível de urgência regimental: baixa, média, alta).

### 3.2. Atributo
- **Definição:** No contexto de banco de dados relacional e modelagem de entidades, o atributo é a coluna, campo ou propriedade nomeada de uma entidade (ex.: entidade `Deputado` possui atributos `NomeParlamentar`, `UF`, `DataPosse`). Na estatística descritiva, o termo é frequentemente utilizado para designar a qualidade ou categoria específica que a variável assume em uma instância.

---

## 4. Métrica versus indicador: o divisor de águas da gestão

Esta é uma das distinções com maior taxa de erro em provas de controle, comunicação e planejamento governamental:

| Dimensão | Métrica (*Metric*) | Indicador (*Key Performance Indicator - KPI*) |
| :--- | :--- | :--- |
| **Definição** | Medida quantitativa de um fenômeno, direta ou calculada. | Medida selecionada para representar e acompanhar uma condição, objetivo ou resultado; pode ser simples ou composta. Um **KPI** é um indicador-chave escolhido para acompanhar prioridades de desempenho. |
| **Vinculação a Metas** | Pode ter meta, dependendo do uso. | Indicadores podem ser descritivos e existir sem meta; indicadores de desempenho podem receber metas e referências para avaliação. |
| **Significado Decisório** | Isoladamente, não expressa sucesso ou fracasso. | Expressa julgamento qualitativo sobre o rumo da organização (aponta se o resultado é satisfatório ou insatisfatório). |
| **Polaridade** | A direção desejável depende do contexto. | Em indicadores de desempenho, convém explicitar a direção desejável quando houver, inclusive situações em que o melhor resultado esteja em uma faixa ou próximo de um valor-alvo. |
| **Fórmula de Construção** | Geralmente é uma contagem, soma ou cálculo matemático simples. | Frequentemente é uma taxa, razão, índice composto ou proporção que pondera esforço por resultado. |
| **Exemplo na Câmara** | *"A Agência Câmara publicou 1.250 matérias jornalísticas no mês de outubro"*. | *"Taxa de alcance e engajamento cidadão nas matérias institucionais da Câmara, com meta de 80% de aprovação"*. |

> [!IMPORTANT]
> **Regra de Ouro (Cebraspe):** Toda métrica é uma medida quantitativa, mas **nem toda métrica é um indicador**. Uma métrica pode servir de indicador quando é selecionada para acompanhar um fenômeno ou objetivo. **Indicador**, **indicador de desempenho** e **KPI** não são termos perfeitamente equivalentes; a existência de meta não é condição universal para todo indicador.

---

## 5. Anatomia de um indicador de desempenho público

Um indicador consistente no setor público e no plano estratégico da Câmara dos Deputados deve ser composto por:
1. **Nome / Descritor:** Denominação clara do que está sendo medido.
2. **Fórmula de Cálculo:** Expressão matemática reproduzível e auditável (ex.: $\text{Taxa} = \frac{\text{Emendas Executadas}}{\text{Emendas Aprovadas}} \times 100$).
3. **Unidade de Medida:** Porcentagem (%), dias, reais (R$), índice adimensional.
4. **Linha de Base (*Baseline*):** Valor histórico de partida antes da intervenção.
5. **Meta (*Target*):** Valor numérico almejado em prazo determinado.
6. **Polaridade:** Direção desejável do indicador (*quanto maior, melhor* ou *quanto menor, melhor*).
7. **Periodicidade:** Mensal, trimestral, anual.
8. **Fonte e Responsável:** Órgão ou sistema de extração dos dados (garantindo rastreabilidade).

---

## 6. Casos concretos e aplicações progressivas

### Caso 1: Divulgação institucional da TV Câmara e portal web
- *Cenário hipotético e unidade de medida:* considere **4.500.000 usuários únicos no mês de outubro**, segundo uma ferramenta de análise definida; esses valores são ilustrativos, não estatísticas oficiais da Câmara.
- *Informação:* "No cenário, o portal registrou 4,5 milhões de usuários únicos em outubro, contra aproximadamente 3,21 milhões em setembro: crescimento de cerca de 40% em relação ao mês anterior." A comparação só é válida se método de contagem e períodos forem equivalentes.
- *Métrica:* Volume mensal total de acessos únicos.
- *Indicador de Desempenho:* Índice de Efetividade da Comunicação Pública (proporção de cidadãos que avaliaram a explicação da reforma como clara, com meta de alcançar pelo menos 75% de satisfação).

### Caso 2: Tramitação de proposições legislativas
- *Variável:* Tempo total de tramitação de um Projeto de Lei (Variável Quantitativa Contínua).
- *Atributo do Projeto de Lei:* Código `PL 2338/2023`, com atributos `Status="Em Tramitação"` e `Regime="Urgência"`.
- *Métrica:* 42 dias decorridos entre a apresentação e o parecer na comissão temática.
- *Indicador:* Tempo Médio de Resposta Regimental das Comissões frente a uma meta administrativa **hipotética** de 30 dias (não apresentada aqui como prazo regimental legal).

### Caso 3: Ouvidoria Parlamentar da Câmara
- *Dado Bruto:* Registros `Protocolo #89432`, `Protocolo #89433`, `Protocolo #89434`.
- *Variável Categórica Nominal:* Tipo de manifestação (Elogio, Reclamação, Pedido de Acesso à Informação, Sugestão).
- *Métrica:* 3.200 pedidos de acesso à informação (LAI) recebidos no trimestre.
- *Indicador de Gestão:* Taxa de Atendimento dos Pedidos LAI no Prazo Legal de 20 Dias ($\text{meta} \ge 98\%$, polaridade: quanto maior, melhor).

---

## 7. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** Na pirâmide do conhecimento (DIKW), a informação diferencia-se do dado por apresentar contextualização e estrutura semântica que lhe conferem significado compreensível ao usuário, ao passo que o dado constitui um elemento bruto e desprovido de contexto relacional.
>
> **Gabarito:** **CERTO**  
> **Comentário:** Descrição impecável da relação entre dado e informação. O dado bruto (ex.: um número isolado) transforma-se em informação quando situado em determinado contexto e dotado de propósito e significado.

### Item 2
> **Assertiva:** No âmbito da gestão estratégica e da análise de dados do setor público, os conceitos de métrica e indicador são sinônimos perfeitos, de modo que qualquer contagem quantitativa de atendimentos ou de despesas pode ser classificada formalmente como um indicador de desempenho institucional.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Métrica e indicador não são sinônimos. A métrica é uma medição quantitativa simples (ex.: número bruto de atendimentos). Um indicador é uma medida escolhida para acompanhar um fenômeno ou objetivo; quando se trata de um indicador de desempenho, metas, referências e direção desejada podem apoiar seu julgamento. Indicadores descritivos não exigem necessariamente meta formal. Toda métrica quantifica, mas apenas o indicador orienta formalmente a avaliação estratégica.

### Item 3
> **Situação hipotética:** Em um estudo estatístico sobre a atuação dos deputados federais, o analista registrou as seguintes características: número de mandatos consecutivos cumpridos pelo parlamentar e escolaridade (ensino médio, superior e pós-graduação).  
> **Assertiva:** Nessa situação, o número de mandatos e a escolaridade classificam-se, respectivamente, como variável quantitativa contínua e variável qualitativa nominal.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O número de mandatos é uma variável quantitativa **discreta** (assume apenas valores inteiros contáveis: 1, 2, 3 mandatos, não admitindo frações como 1,7 mandato). Por sua vez, a escolaridade é uma variável qualitativa **ordinal**, pois suas categorias apresentam uma relação intrínseca de ordem e hierarquia (médio < superior < pós-graduação), não sendo meramente nominal.

### Item 4
> **Assertiva:** Um indicador de desempenho eficiente prescinde da definição de polaridade quando sua fórmula matemática de cálculo for baseada em proporções simples ou porcentagens.
>
> **Gabarito:** **NÃO HOMOLOGADO (redação normativa ambígua)**  
> **Comentário:** Uma **proporção** ou **porcentagem**, por si, não determina o sentido desejável do desempenho. Para alguns indicadores, convém definir polaridade (“maior é melhor” ou “menor é melhor”); outros são avaliados por **faixa aceitável ou aproximação a uma meta**, sem polaridade única. A expressão “indicador de desempenho eficiente prescinde” torna a assertiva dependente da finalidade e da forma de avaliação. **Redação de treino:** “O fato de um indicador ser expresso em porcentagem não determina automaticamente a direção desejável do seu resultado.” **Gabarito reformulado: CERTO.**

### Item 5
> **Assertiva:** Na modelagem de dados de um sistema legislativo, o atributo corresponde à propriedade ou característica de uma entidade que armazena determinado valor de uma variável em um registro de banco de dados.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O atributo é a denominação técnica do campo ou propriedade de uma entidade (ex.: entidade `Proposição` possui o atributo `AnoApresentacao`), sendo o veículo computacional pelo qual a variável é operacionalizada e armazenada no modelo de dados.

### Item 6
> **Assertiva:** Segundo o modelo conceitual DIKW, o estágio da sabedoria (*wisdom*) caracteriza-se pelo processamento algorítmico automatizado de grandes volumes de dados não estruturados (*big data*), dispensando o julgamento ético e a experiência humana na tomada de decisões.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O processamento em larga escala pertence às camadas inferiores e intermediárias (dados e informações computadas). A **sabedoria (*wisdom*)** é intrinsecamente humana e filosófica; reside no discernimento moral, ético e estratégico sobre o propósito das ações (*por que fazer* e *o que deve ser feito*), sendo impossível de ser substituída por processamento puramente mecanicista.

---

## 8. Referências conceituais

1. **ROWLEY, Jennifer.** *The wisdom hierarchy: representations of the DIKW hierarchy.* Journal of Information Science, 33(2), 2007.
2. **ACKOFF, Russell L.** *From Data to Wisdom.* Journal of Applied Systems Analysis, v. 16, 1989.
3. **BUSSAB, Wilton de O.; MORETTIN, Pedro A.** *Estatística Básica.* 9ª ed. São Paulo: Saraiva, 2017.
4. **BRASIL. Tribunal de Contas da União (TCU).** *Manual de Indicadores de Desempenho e Metas.* Brasília: TCU, 2021.
5. **CÂMARA DOS DEPUTADOS.** *Planejamento Estratégico da Câmara dos Deputados: Cadeia de Valor e Painéis de Indicadores.* Brasília: Diretoria-Geral, 2024.

> **Revisão editorial (11/11/2026):** ajustes localizados a partir da auditoria Câmara 2026, para explicitar o alcance das regras e separar exemplos hipotéticos de fatos. Os itens inéditos continuam sujeitos à validação integral de enunciados, comentários e referências.

> **Auditoria C/E, segunda passagem (11/11/2026):** Item 4 **não homologado** devido à ausência de critério de avaliação no enunciado. Os demais itens 1–3 e 5–6 mantêm gabaritos em revisão conceitual; o modelo DIKW é uma estrutura didática, e o uso de “sabedoria” não deve virar alegação empírica universal sobre humanos e máquinas.

---

## Questão substituta S24-4: direção de melhoria e metas

> Um indicador expresso em porcentagem não informa, apenas por sua unidade, se aumentar seu valor representa melhora: taxas de conclusão podem ser avaliadas como “quanto maior, melhor”, enquanto taxas de retrabalho podem ser avaliadas como “quanto menor, melhor”.

**Gabarito: CERTO (inédita, substitui a Questão 4 bloqueada).** Para interpretar o desempenho, deve-se explicitar **objeto medido**, **numerador**, **denominador**, **período**, **população** e **critério de sucesso**. A polaridade pode ser crescente ou decrescente; alguns indicadores são avaliados por **faixa-alvo** ou proximidade a um valor, não por uma direção única.

**Caso progressivo:** uma taxa de conclusão de 80% pode ser melhor que 60%, mantidas as demais condições. Para incidência de erros, 2% pode ser melhor que 8%. Já para ocupação de um serviço, tanto 10% quanto 100% podem ser indesejáveis quando a meta é operar entre 70% e 85%.

**Contraexemplo:** “Toda taxa percentual deve ser maximizada” é **ERRADO**. A fórmula por si só não estabelece polaridade.

**Relações:** [[3 - Materias/Informatica/25 - transformacao de dados limpeza agregacao e qualidade|Qualidade de dados]] e [[3 - Materias/Informatica/26 - visualizacao de dados selecao de grafico pela pergunta analitica|Pergunta analítica e seleção de gráfico]].

**Rastreabilidade:** Questão 4 original permanece **NÃO HOMOLOGADA**.
