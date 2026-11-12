---
articleId: art-a2e4949761ab5a6f
articleAliases: ["3 - Materias/Informatica/26 - visualizacao de dados selecao de grafico pela pergunta analitica.md"]
title: "Visualização de dados: seleção de gráficos pela pergunta analítica, variáveis e carga cognitiva"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Visualização de dados: seleção de gráficos pela pergunta analítica, variáveis e carga cognitiva

## 1. Situação concreta e o papel da visualização na comunicação pública

Na atuação de um Analista da Câmara dos Deputados — especialmente na área de Divulgação Institucional e transparência legislativa —, o objetivo central da visualização de dados (*Data Visualization*) não é o mero embelezamento estético de relatórios, mas sim a **comunicação precisa, rápida e intuitiva de evidências analíticas para o cidadão e para os tomadores de decisão**.

Um gráfico mal selecionado distorce fatos, oculta padrões críticos ou impõe uma carga cognitiva desnecessária ao leitor. Em concursos públicos formulados pelo **Cebraspe**, as questões não exigem apenas o domínio de ferramentas (Power BI, Tableau), mas principalmente a **lógica de escolha do tipo de representação visual** em função:
1. Do tipo das variáveis envolvidas (quantitativas discretas/contínuas $\times$ qualitativas nominais/ordinais).
2. Da **pergunta analítica** que se deseja responder (comparação, evolução temporal, distribuição, composição ou correlação).
3. Da minimização da distorção visual (*Lie Factor*) e eliminação do ruído visual (*Chartjunk*).

---

## 2. A taxonomia analítica de Andrew Abela

Uma referência útil para selecionar gráficos é o esquema de Andrew Abela, que organiza perguntas de comparação, distribuição, composição e relação. Trata-se de uma heurística de design, e não de uma taxonomia universal ou de frequência comprovada em provas:

```
                            QUAL É A SUA PERGUNTA?
                                      │
         ┌──────────────────┬─────────┴─────────┬──────────────────┐
         ▼                  ▼                   ▼                  ▼
    COMPARAÇÃO          EVOLUÇÃO           COMPOSIÇÃO          RELAÇÃO /
    ENTRE ITENS         TEMPORAL            DE PARTES         DISTRIBUIÇÃO
   (Quem é maior?)   (Como mudou?)       (Fatia do todo?)    (Qual o padrão?)
         │                  │                   │                  │
   - Barras /         - Linhas            - Barras            - Dispersão (Scatter)
     Colunas          - Áreas               Empilhadas        - Histograma
                                          - Treemap           - Box Plot
                                          - Pizza (restrito)
```

### 2.1. Comparação entre Itens (*Comparison*)
- **Objetivo:** Confrontar grandezas entre diferentes categorias discretas em um ponto fixo no tempo (ex.: número de proposições apresentadas por partido político em 2026).
- **Gráficos recomendados:**
  - **Gráfico de Barras Horizontais:** Frequentemente adequado a rótulos longos ou muitos grupos, pela legibilidade e possibilidade de ordenação. Não há número fixo de categorias que imponha a orientação.
  - **Gráfico de Colunas Verticais:** Útil para comparações entre grupos com rótulos curtos, desde que haja espaço e escala legíveis; o limite depende do tamanho do gráfico e da audiência.

### 2.2. Evolução Temporal (*Trend over Time*)
- **Objetivo:** Mostrar a trajetória, tendência, aceleração ou sazonalidade de uma métrica contínua ao longo de um eixo cronológico ordenado (ex.: execução orçamentária mensal da Câmara ao longo do ano).
- **Gráficos recomendados:**
  - **Gráfico de Linhas:** É frequentemente adequado para séries temporais com muitos períodos. O olho humano conecta intuitivamente os pontos por linhas contínuas para inferir aceleração e declínio.
  - **Gráfico de Áreas:** Útil para enfatizar o volume total acumulado além da tendência individual.

### 2.3. Composição de um Todo (*Composition*)
- **Objetivo:** Ilustrar como as partes individuais somam para formar um todo de 100% (ex.: distribuição das cadeiras da Câmara por bancada partidária).
- **Gráficos recomendados:**
  - **Barras/Colunas Empilhadas a 100%:** Excelente para comparar composições percentuais entre diferentes grupos.
  - **Treemap (Mapa em Árvore):** Excepcional para composições hierárquicas com múltiplos níveis (ex.: Gastos da União $\rightarrow$ Órgão $\rightarrow$ Programa $\rightarrow$ Ação).
  - **Gráfico de Pizza / Rosca (*Pie / Donut Chart*):** Pode representar composição de um todo quando as fatias são poucas e bem distinguíveis. Para muitas categorias ou diferenças sutis, barras ordenadas geralmente permitem comparação mais precisa; não há proibição matemática acima de 3 ou 5 fatias.

### 2.4. Distribuição e Relação (*Distribution & Correlation*)
- **Objetivo:** Analisar a dispersão de uma variável ou a correlação entre duas variáveis quantitativas (ex.: correlação entre tempo de tramitação e número de emendas recebidas).
- **Gráficos recomendados:**
  - **Histograma:** Mostra a distribuição de frequência de uma variável contínua dividida em intervalos (*bins*).
  - **Box Plot (Diagrama de Caixas):** Exibe mediana, quartis, dispersão e *outliers*.
  - **Gráfico de Dispersão (*Scatter Plot*):** Cruza duas variáveis quantitativas nos eixos $X$ e $Y$, sejam contínuas ou discretas, quando faz sentido representar pares de observações.

---

## 3. Diretrizes de Edward Tufte: integridade e carga cognitiva

O estatístico e pioneiro da visualização Edward Tufte formulou princípios que norteiam as boas práticas de design analítico cobradas pelo Cebraspe:

### 3.1. Razão Dado-Tinta (*Data-Ink Ratio*)
$$\text{Data-Ink Ratio} = \frac{\text{Tinta dedicada à representação dos dados}}{\text{Tinta total utilizada para imprimir o gráfico}}$$
- O objetivo do comunicador público deve ser **maximizar** essa razão, aproximando-a de 1,0.
- Tudo o que não transmite informação deve ser eliminado: linhas de grade pesadas, fundos coloridos, bordas ornamentais desnecessárias e redundâncias visuais.

### 3.2. Eliminação do Lixo Gráfico (*Chartjunk*)
- **Chartjunk** é qualquer elemento visual que distrai, decora superficialmente ou dificulta a leitura dos dados sem acrescentar informação substantiva:
  - Efeitos tridimensionais (3D falso) em gráficos de barras ou pizzas.
  - Texturas pontilhadas ou zebradas que criam efeito de cintilação óptica (*moiré vibration*).
  - Ícones ilustrativos e desenhos ornamentais sobrepostos aos dados.

### 3.3. O Fator de Distorção (*Lie Factor*)
$$\text{Lie Factor} = \frac{\text{Tamanho do efeito visual exibido no gráfico}}{\text{Tamanho do efeito real nos dados}}$$
- Se $\text{Lie Factor} = 1{,}0$, há proporcionalidade entre o efeito visual medido e o efeito numérico segundo a construção da métrica. **Isso, por si só, não comprova honestidade da fonte, representatividade da amostra, precisão dos dados ou adequação de contexto.**
- Valores acima de $1$ indicam exagero visual e valores abaixo de $1$ indicam redução visual, para a comparação definida. Limiares como $0{,}95$ e $1{,}05$ podem funcionar como **convenções analíticas de tolerância**, não como limite universal de verdade ou regra obrigatória do Cebraspe.
- **Exemplo clássico de fraude visual em barras:** Iniciar o eixo vertical $Y$ fora do zero (*truncated axis*) para fazer uma variação de 2% parecer uma explosão de 200%.

```
   EIXO TRUNCADO (DISTORÇÃO)               EIXO COM ZERO (HONESTO)
 105 ▲                                   120 ▲
     │         █                             │
 100 │   █     █                         100 │
     │   █     █                          80 │
  95 │   █     █                          60 │   █     █
  90 ┼───┴─────┴────►                     40 │   █     █
        2025  2026                        20 │   █     █
     (Variação de 3% parece o dobro!)      0 ┼───┴─────┴────►
                                                2025  2026
```

---

## 4. Patologias visuais frequentes e o problema do gráfico de pizza

O **Gráfico de Pizza (*Pie Chart*)** é o gráfico mais abusado na administração pública e o mais criticado na literatura técnica especializada.

### Por que a percepção humana falha no gráfico de pizza?
1. **Dificuldade perceptiva de ângulos e áreas:** O cérebro humano é biologicamente muito eficiente para comparar comprimentos e posições em uma escala comum alinhada (como barras horizontais), mas é péssimo para julgar ângulos radiais, arcos e áreas bidimensionais.
2. **O veneno do efeito 3D:** Em uma pizza tridimensional inclinada, a perspectiva faz com que a fatia posicionada na frente pareça substancialmente maior do que uma fatia de mesmo valor posicionada ao fundo, induzindo o leitor a erro de julgamento.
3. **Múltiplas fatias finas:** Gráficos de pizza com mais de 5 ou 6 categorias tornam-se ilegíveis, exigindo legendas com cores semelhantes que aumentam a carga cognitiva.

> [!TIP]
> **Substituição Recomendada:** Quando houver muitas categorias, rótulos difíceis ou proporções próximas, **considere barras horizontais ordenadas**. A decisão depende da pergunta, da área disponível e das comparações que o público precisa fazer.

---

## 5. Matriz de decisão rápida: pergunta versus gráfico

| Pergunta Analítica | Variáveis Envolvidas | Gráfico Recomendado | Gráfico a Evitar |
| :--- | :--- | :--- | :--- |
| Como uma grandeza contínua variou mês a mês? | 1 Temporal + 1 Numérica Contínua | **Linhas** | Pizza ou Colunas Agrupadas densas |
| Qual secretaria executou o maior volume financeiro? | 1 Categórica Nominal + 1 Numérica | **Barras Horizontais** (ordenadas) | Pizza de 15 fatias ou Radar |
| Como se divide o orçamento da União entre ministérios e programas? | Hierarquia (Pai-Filho) + Numérica | **Treemap** | Pizza multinível concêntrica |
| Existe associação entre anos de estudo e taxa de comparecimento por município? | 2 Numéricas Agregadas | **Dispersão (*Scatter Plot*)** | Gráfico de linhas ligando municípios sem ordem temporal |
| Como se distribuem os salários dos servidores e há *outliers*? | 1 Numérica Contínua | **Histograma ou Box Plot** | Linhas temporais |
| Qual a proporção de votos Sim, Não e Abstenção em uma votação? | 1 Categórica (3 classes) + 1 Contagem | **Barras Empilhadas a 100% ou Pizza simples** | Gráfico 3D inclinado |

---

## 6. Casos concretos e aplicações progressivas

### Caso 1: Divulgação da bancada feminina na Câmara
- *Cenário:* A Secretaria de Comunicação deseja mostrar a evolução percentual da bancada feminina de 1988 a 2026 (10 legislaturas).
- *Escolha Errada:* Criar 10 gráficos de pizza separados (um para cada ano), obrigando o cidadão a alternar o olhar entre 10 círculos para tentar perceber o crescimento do ângulo.
- *Escolha Correta:* Um único **gráfico de linhas** temporal ou um gráfico de barras empilhadas a 100% ao longo dos anos, permitindo percepção visual instantânea da inclinação da curva de crescimento.

### Caso 2: Transparência de emendas parlamentares por estado
- *Cenário:* Exibição do valor total pago em emendas para as 27 unidades da federação.
- *Escolha Técnica:* **Gráfico de barras horizontais ordenadas** da maior para a menor UF, com o valor impresso no topo da barra. Como os nomes/siglas das UFs são 27 categorias, barras horizontais permitem rolagem natural vertical e evitam poluição visual.

### Caso 3: Avaliação de tempo de tramitação de medidas provisórias
- *Cenário:* Uma comissão mista deseja comparar a dispersão do tempo de tramitação de MPs sob diferentes mandatos presidenciais, identificando casos atípicos que trancaram a pauta.
- *Escolha Técnica:* **Box Plot comparativo** por período de governo. O gráfico revela imediatamente a mediana de tramitação, o intervalo interquartil (50% centrais dos casos) e destaca individualmente como pontos isolados as MPs *outliers*.

---

## 7. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** Segundo os princípios de integridade gráfica propostos por Edward Tufte, a utilização de efeitos visuais tridimensionais (3D) em gráficos de barras e setores circulares é recomendável para aumentar o impacto estético e facilitar a precisão na leitura quantitativa dos dados.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Efeitos tridimensionais (3D) em gráficos que representam dados bidimensionais são classificados como *chartjunk* (lixo gráfico) e introduzem distorção visual (*Lie Factor* descalibrado). O ângulo de perspectiva altera a proporção geométrica aparente das barras ou fatias, prejudicando a exatidão da leitura e induzindo o público a erros de julgamento.

### Item 2
> **Assertiva:** Para representar a evolução temporal de uma despesa pública observada mensalmente ao longo de uma série histórica de dez anos, o gráfico de linhas é preferível ao gráfico de colunas verticais, pois evidencia com maior clareza a continuidade, a inclinação das taxas de variação e a tendência da série.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O gráfico de linhas é o padrão de excelência para séries temporais longas com muitas observações (como 120 meses). O cérebro humano conecta intuitivamente a linha contínua, permitindo identificar acelerações, picos sazonais e reversões de tendência sem a sobrecarga visual que 120 colunas verticais justapostas causariam.

### Item 3
> **Assertiva:** A razão dado-tinta (*Data-Ink Ratio*) defendida na teoria da visualização de dados preconiza que o designer deve maximizar os elementos ornamentais de contorno, as linhas de grade espessas e as legendas redundantes para enriquecer o contexto visual da informação apresentada.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A regra da razão dado-tinta preconiza exatamente o oposto: **eliminar ou atenuar tudo o que for tinta não relacionada aos dados** (como grades pesadas, caixas desnecessárias e elementos decorativos), garantindo que a maior parte da "tinta" seja dedicada exclusivamente a transmitir informação pura.

### Item 4
> **Assertiva:** Em um gráfico de barras que compara grandezas entre diferentes categorias nominais, a supressão do valor zero no eixo de base (*eixo truncado*) é uma técnica legítima para realçar diferenças sutis entre os dados, não configurando distorção visual da informação.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Quando barras codificam magnitudes pelo comprimento, começar o eixo no zero é uma **regra geral importante** para preservar proporções. Um eixo truncado pode exagerar diferenças e exige cautela e sinalização; o enunciado afirma que essa prática seria legítima **sem distorção**, razão pela qual o gabarito ERRADO permanece defensável no contexto apresentado.

### Item 5
> **Assertiva:** O gráfico de dispersão (*scatter plot*) é a representação visual indicada quando o objetivo analítico consiste em verificar a existência de correlação, padrão de associação linear ou agrupamentos entre duas variáveis numéricas contínuas.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O gráfico de dispersão plota pares ordenados $(X, Y)$ em um plano cartesiano ortogonal, sendo a ferramenta gráfica por excelência para investigar associações, dispersão, correlação positiva/negativa e presença de outliers bivariados; padrões observados não demonstram causalidade entre duas variáveis quantitativas.

### Item 6
> **Assertiva:** O Treemap é uma visualização analítica adequada para exibir a composição percentual de dados estruturados hierarquicamente em múltiplos níveis, utilizando retângulos aninhados proporcionais à grandeza das variáveis representadas.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O treemap representa composições hierárquicas mediante retângulos aninhados cujas **áreas** codificam os valores; é especialmente útil para visão geral de partes de um todo. Não é necessariamente o melhor gráfico para comparação precisa de diferenças pequenas entre áreas.

---

## 8. Referências conceituais

1. **TUFTE, Edward R.** *The Visual Display of Quantitative Information.* 2nd ed. Cheshire: Graphics Press, 2001.
2. **FEW, Stephen.** *Show Me the Numbers: Designing Tables and Graphs to Enlighten.* 2nd ed. Burlingame: Analytics Press, 2012.
3. **ABELA, Andrew.** *Advanced Presentations by Design: Creating Communication That Drives Action.* Pfeiffer, 2008.
4. **CAIRO, Alberto.** *The Functional Art: An introduction to information graphics and visualization.* New Riders, 2012.
5. **KNAFLIC, Cole Nussbaumer.** *Storytelling com Dados: um guia sobre visualização de dados para profissionais de negócios.* Rio de Janeiro: Alta Books, 2018.

> **Revisão editorial (11/11/2026):** correções dirigidas às ressalvas da auditoria da Câmara, preservando as distinções técnicas e evitando universalizar heurísticas. Questões inéditas ainda não homologadas como questões oficiais da banca.

> **Auditoria C/E, segunda passagem (11/11/2026):** Itens 1–6 mantêm gabaritos (E, C, E, E, C, C) em revisão conceitual dirigida. Foram qualificadas regras de eixo zero e a utilidade do treemap, que dependem da finalidade e da codificação visual.

---

## Da evidência ao gráfico: seleção com limites

A sequência de uma análise pública confiável começa pela pergunta e pela população, **antes** da ferramenta visual. Uma ordem de trabalho é: **pergunta → unidade de análise → variável/denominador → qualidade e transformação → codificação gráfica → inferência e ressalvas**.

| Pergunta concreta | Variável e escala | Escolha inicial | Limite que deve aparecer |
|:--|:--|:--|:--|
| Quantos pedidos por tipo? | Categoria e contagem | Barras | Distinguir categorias de códigos numéricos |
| Como mudou a fila por semana? | Tempo ordenado e quantidade | Linha | Informar semanas sem medição; não interpolar silenciosamente |
| Em quais faixas se concentram tempos de espera? | Tempo contínuo | Histograma | Justificar intervalos e largura das classes |
| Quanto cada canal contribui para o total? | Categoria e parcela de total conhecido | Barras empilhadas ou barras | Explicitar denominador e períodos |
| Mais servidores estão associados a mais atendimentos? | Duas quantidades emparelhadas por unidade | Dispersão | Associação não demonstra efeito causal |

**Exemplo progressivo:** um serviço recebeu 120 solicitações, com 90 casos completos. Um gráfico da média de tempo calculada sobre 90 registros precisa informar a **cobertura da medição**, sob risco de o público interpretar o resultado como descrição integral das 120 solicitações.

**Contraexemplo:** construir um gráfico de linha com códigos nominais 10, 20 e 30, ligados como se fossem valores contínuos, pode sugerir distâncias que não existem na variável categórica.

> **Questão inédita C/E:** A escolha de um gráfico de linhas para comunicar a evolução de uma variável temporal elimina a necessidade de informar o período, unidades, dados ausentes e critérios de agregação.

**Gabarito: ERRADO.** A forma visual não substitui definição da medida, contexto ou qualidade dos dados. **Aplicação discursiva:** em comunicação institucional, explicar a **pergunta**, a **fonte**, a **população** e as **restrições de interpretação** antes de extrair recomendações.

**Relações:** [[3 - Materias/Informatica/24 - dado informacao variavel atributo indicador e metrica|Indicadores]]; [[3 - Materias/Informatica/27 - histograma barras e linhas distincao dos eixos e aplicacoes|Histogramas, barras e linhas]].
