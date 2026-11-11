---
articleId: art-719dd4ca3e84b65a
articleAliases: ["3 - Materias/Informatica/27 - histograma barras e linhas distincao dos eixos e aplicacoes.md"]
title: "Histograma, gráficos de barras e gráficos de linhas: distinção dos eixos, escalas e aplicações"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Histograma, gráficos de barras e gráficos de linhas: distinção dos eixos, escalas e aplicações

## 1. Situação concreta e o problema da confusão geométrica

Na análise de dados públicos — como o perfil de idade dos servidores da Câmara dos Deputados, o valor de emendas parlamentares ou a evolução mensal de proposições protocoladas —, gráficos de barras, histogramas e gráficos de linhas compartilham elementos visuais semelhantes (barras retangulares ou traçados cartesianos).

No entanto, no rigor estatístico cobrado pela banca **Cebraspe**, essa semelhança geométrica superficial esconde diferenças fundamentais de **natureza de variáveis**, **definição de eixos**, **continuidade de escalas** e **interpretação matemática**:
- Tratar um histograma como se fosse um simples gráfico de barras verticais.
- Inserir espaçamento arbitrário entre as colunas de uma distribuição contínua.
- Utilizar gráficos de linhas para ligar categorias qualitativas nominais que não possuem ordenamento cronológico ou causal.

Compreender a mecânica interna dessas representações é pré-requisito para responder com segurança a itens de Análise de Informações e Estatística Aplicada.

---

## 2. Histograma versus gráfico de barras: o divisor de águas estatístico

A distinção entre o **Histograma** e o **Gráfico de Barras (Colunas)** é uma das armadilhas clássicas do Cebraspe:

```
        HISTOGRAMA (VARIÁVEL CONTÍNUA)                GRÁFICO DE BARRAS (CATEGÓRICO)
    Freq ▲                                       Valor ▲
         │     ███                                     │   █         █
         │ █   ███ ███                                 │   █         █         █
         │ █   ███ ███ █                               │   █    █    █    █    █
       0 ┼─┴───┴───┴───┴───►                         0 ┼───┴────┴────┴────┴────┴───►
          10  20  30  40  50                               PT   PL  UNIÃO PP  MDB
        (Classes contínuas SEM ESPAÇO)                 (Categorias discretas COM ESPAÇO)
```

### Quadro comparativo dogmático

| Dimensão | Histograma | Gráfico de Barras / Colunas |
| :--- | :--- | :--- |
| **Tipo de Variável no Eixo Horizontal ($X$)** | **Quantitativa Contínua** (ou discreta agrupada em classes/intervalos numéricos). | **Qualitativa (Nominal/Ordinal)** ou Quantitativa Discreta isolada. |
| **Eixo Vertical ($Y$)** | **Frequência** (absoluta, relativa ou densidade de probabilidade). | **Valor da Métrica** (total, média, soma, contagem de ocorrências). |
| **Espaçamento entre as Barras** | **Sem espaçamento** (as barras são adjacentes/coladas, refletindo a continuidade da reta real). | **Com espaçamento visível** (evidencia a descontinuidade entre categorias distintas). |
| **Largura das Barras** | **Significativa**: representa a amplitude da classe/intervalo ($h = \Delta x$). | **Arbitrária**: puramente estética; não possui significado matemático. |
| **Área das Barras** | A **área** é proporcional à frequência. Para classes com larguras distintas, a altura deve representar a **densidade de frequência**: frequência dividida pela largura da classe. Em classes iguais, altura e frequência são proporcionais. | Apenas o **comprimento/altura** representa a grandeza medida. |
| **Ordem no Eixo $X$** | **Rígida e imutável**: obedece à ordem natural dos números reais ($10 \rightarrow 20 \rightarrow 30$). | **Flexível**: pode ser reordenado por conveniência (alfabética, ordem de grandeza, etc.). |

---

## 3. Anatomia matemática do histograma

### 3.1. Construção de Classes e Intervalos (*Bins*)
Para construir um histograma a partir de uma amostra de tamanho $n$:
1. Calcula-se a amplitude total: $R = X_{\max} - X_{\min}$.
2. Define-se o número de classes $k$ (frequentemente pela Regra de Sturges: $k \approx 1 + 3{,}322 \log_{10}(n)$ ou $k \approx \sqrt{n}$).
3. Define-se a amplitude de classe: $h = R / k$.

### 3.2. Formas da Distribuição de Frequências no Histograma
O perfil visual do histograma revela o comportamento probabilístico da população:
- **Simétrico / Em Forma de Sino (Gaussiano):** A distribuição aproxima-se da Normal ($\text{Média} \approx \text{Mediana} \approx \text{Moda}$).
- **Assimétrico à Direita (Positiva):** Cauda longa estendendo-se para valores elevados ($\text{Média} > \text{Mediana} > \text{Moda}$), típico de salários, patrimônio e tempo de tramitação.
- **Assimétrico à Esquerda (Negativa):** Cauda longa para a esquerda ($\text{Moda} > \text{Mediana} > \text{Média}$), comum em idades de aposentadoria de servidores públicos.
- **Bimodal:** Dois picos nítidos, evidenciando que a amostra pode ser composta por duas populações distintas misturadas (ex.: servidores de nível médio versus consultores de nível superior).

---

## 4. Gráfico de barras: horizontais versus verticais (colunas)

Embora intercambiáveis do ponto de vista matemático, a orientação espacial do gráfico de barras obedece a regras de ergonomia cognitiva:

```
               QUANDO USAR BARRAS HORIZONTAIS OU VERTICAIS?
                                     │
        ┌────────────────────────────┴────────────────────────────┐
        ▼                                                         ▼
BARRAS HORIZONTAIS (Y = Categoria, X = Métrica)         COLUNAS VERTICAIS (X = Categoria, Y = Métrica)
- Rótulos textuais longos (nomes de ministérios, UFs)   - Poucas categorias, conforme espaço e comprimento dos rótulos
- Muitas categorias, conforme espaço e comprimento dos rótulos             - Rótulos curtos (siglas partidárias: PT, PL, PP)
- Facilita rolagem vertical em relatórios e telas       - Quando as categorias possuem sequência natural
- Ordenação decrescente quando a comparação por ranking for o objetivo; outras ordens podem ser adequadas           - Séries cronológicas discretas (anos, trimestres)
```

> [!WARNING]
> **Regra de integridade visual:** em gráficos de barras que codificam magnitude pelo comprimento, o eixo quantitativo **deve, como padrão, começar em zero** para preservar a proporcionalidade. Cortes de escala exigem identificação explícita e justificativa, e frequentemente tornam outro tipo de gráfico mais adequado. Evite tratar essa recomendação como proibição matemática universal.

---

## 5. Gráfico de linhas: a continuidade temporal e suas fronteiras

### 5.1. A Premissa da Continuidade
O gráfico de linhas plota pares ordenados $(t_i, y_i)$ e liga os pontos sucessivos por segmentos de reta. Essa ligação pressupõe que:
1. O eixo horizontal $X$ possui uma **ordem estrita, cronológica e contínua** (tempo: horas, dias, meses, anos).
2. O fenômeno medido continua a existir nos instantes intermediários entre as observações, ainda que não tenha sido medido a cada segundo.

### 5.2. O Erro Grave de Conectar Categorias Nominais
Nunca se deve utilizar gráficos de linhas para ligar categorias qualitativas nominais não ordenadas (ex.: ligar a bancada do PT, do PL e do MDB por uma linha contínua). A inclinação da linha sugeriria falsamente que o PL "subiu em relação ao PT" ou que existe um ponto intermediário de transição física entre um partido e outro, o que é conceitualmente absurdo.

### 5.3. Eixos Truncados em Gráficos de Linhas: a exceção à regra
Diferentemente da recomendação padrão para gráficos de barras, **em gráficos de linhas pode ser admissível que o eixo vertical $Y$ não comece no zero**, desde que o objetivo seja evidenciar a volatilidade ou microvariações de uma métrica em torno de um patamar elevado (ex.: variação da taxa Selic de $10{,}25\%$ para $10{,}75\%$ ou batimentos cardíacos de um paciente). O gráfico de linhas não codifica a informação pelo comprimento de uma coluna a partir da base, mas sim pela **posição espacial dos pontos e pela inclinação das retas**.

---

## 6. Casos concretos e aplicações progressivas

### Caso 1: Análise de idade dos parlamentares da 57ª Legislatura
- *Cenário:* Deseja-se compreender a distribuição etária dos 513 deputados federais empossados.
- *Aplicação Correta:* **Histograma**. A variável "idade" é quantitativa contínua agrupada em intervalos de classe (ex.: 20 a 30 anos, 30 a 40 anos, etc.). As barras são desenhadas contíguas (coladas) e o eixo vertical exibe a quantidade absoluta de deputados em cada faixa etária.

### Caso 2: Total de emendas parlamentares pagas por bancada partidária
- *Cenário:* Comparação do montante em reais destinado aos 20 partidos políticos com representação na Câmara.
- *Aplicação Correta:* **Gráfico de Barras Horizontais** ordenado em ordem decrescente de valor. Como são 20 partidos e os nomes/siglas seriam difíceis de ler na horizontal com colunas verticais estreitas, as barras horizontais garantem legibilidade tipográfica imediata e comparação rápida de comprimentos.

### Caso 3: Execução orçamentária mensal da Câmara dos Deputados
- *Cenário:* Acompanhamento dos empenhos realizados mês a mês de janeiro a dezembro de 2026.
- *Aplicação Correta:* **Gráfico de Linhas**. O eixo $X$ representa a escala contínua temporal (meses) e o eixo $Y$ o valor em milhões de reais, permitindo identificar com precisão a sazonalidade e o pico clássico de empenhos no mês de dezembro.

---

## 7. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** O histograma diferencia-se do gráfico de barras verticais por ser construído com barras adjacentes, sem espaçamento entre elas, visto que representa a distribuição de frequências de uma variável quantitativa contínua agrupada em intervalos de classe.
>
> **Gabarito:** **CERTO**  
> **Comentário:** Histogramas representam classes contíguas de uma distribuição quantitativa, geralmente com retângulos adjacentes. Em gráficos categóricos, o uso de espaçamento é uma convenção visual útil, **não obrigação matemática universal**. O núcleo da distinção do enunciado está correto em sua apresentação convencional.

### Item 2
> **Assertiva:** Em um histograma cujas classes possuem amplitudes desiguais, a altura de cada retângulo deve ser mantida estritamente igual à frequência absoluta da respectiva classe para assegurar a fidelidade visual dos dados.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Quando as classes possuem amplitudes desiguais ($h_i$ distintos), manter a altura igual à frequência absoluta distorce a percepção, pois a área da barra ficaria desproporcional. Nesses casos, a altura da barra deve ser ajustada para a **densidade de frequência** ($\text{Densidade} = \text{Frequência} / \text{Amplitude}$), garantindo que a **área do retângulo** continue proporcional à probabilidade/frequência observada.

### Item 3
> **Assertiva:** Para comparar o volume de recursos alocados entre trinta diferentes órgãos públicos com nomenclaturas extensas, o gráfico de barras verticais (colunas) é preferível ao gráfico de barras horizontais, por permitir melhor aproveitamento do espaço da página.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Para muitas categorias (30 órgãos) e rótulos extensos, o gráfico de **barras horizontais** é amplamente superior. Colunas verticais obrigariam a inclinar os textos em $45^\circ$ ou $90^\circ$ ou a truncar os nomes, gerando enorme poluição visual e fadiga de leitura.

### Item 4
> **Assertiva:** A utilização de gráficos de linhas é tecnicamente inadequada quando o eixo horizontal for composto por variáveis qualitativas nominais desprovidas de relação cronológica, lógica ou causal, haja vista que a inclinação do segmento de reta sugere indevidamente uma continuidade inexistente entre as categorias.
>
> **Gabarito:** **CERTO**  
> **Comentário:** Conectar pontos que representam categorias nominais arbitrárias (ex.: partidos políticos, estados ou departamentos) por uma linha contínua induz a uma falsa interpretação de tendência e continuidade, configurando grave erro de visualização.

### Item 5
> **Assertiva:** A obrigatoriedade de iniciar o eixo quantitativo no valor zero absoluto aplica-se estritamente aos gráficos de barras e colunas, sendo metodologicamente aceitável que gráficos de linhas temporais utilizem eixos truncados para realçar variações sutis em torno de patamares elevados.
>
> **Gabarito:** **NÃO HOMOLOGADO (regra absoluta de eixo)**  
> **Comentário:** Para barras que codificam magnitude por comprimento, recomenda-se iniciar no zero para manter a proporção visual. Gráficos de linhas podem usar faixas verticais restritas quando adequadamente identificadas. Entretanto, o item afirma **“obrigatoriedade ... estritamente”**, sem admitir qualquer exceção ou outra codificação gráfica; isso torna a resposta CERTO excessivamente categórica. **Versão de treino:** “Em barras usadas para comparar magnitudes pelo comprimento, iniciar o eixo de valor em zero é a recomendação geral; gráficos de linhas podem empregar faixas verticais restritas, desde que a escala esteja clara.” **Gabarito reformulado: CERTO.**

### Item 6
> **Assertiva:** Em uma distribuição de frequências representada por um histograma assimétrico positivo (à direita), a média aritmética situa-se tipicamente à esquerda da mediana e da moda.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Em exemplos didáticos de distribuições **unimodais** com assimetria positiva, costuma-se observar média à direita da mediana e da moda. Essa ordem não é teorema para todas as distribuições assimétricas, especialmente as multimodais. Como o enunciado diz **“tipicamente”** e coloca a média à esquerda, o gabarito ERRADO é defensável no modelo didático habitual, com essa ressalva.

---

## 8. Referências conceituais

1. **BUSSAB, Wilton de O.; MORETTIN, Pedro A.** *Estatística Básica.* 9ª ed. São Paulo: Saraiva, 2017.
2. **TRIOLA, Mario F.** *Introdução à Estatística.* 12ª ed. Rio de Janeiro: LTC, 2017.
3. **TUFTE, Edward R.** *The Visual Display of Quantitative Information.* Cheshire: Graphics Press, 2001.
4. **FEW, Stephen.** *Show Me the Numbers: Designing Tables and Graphs to Enlighten.* Analytics Press, 2012.
5. **CÂMARA DOS DEPUTADOS.** *Diretrizes para Publicação de Dados Abertos e Gráficos da Transparência Legislativa.* Brasília: Cenin, 2024.

> **Revisão editorial (11/11/2026):** ajustes localizados a partir da auditoria Câmara 2026, para explicitar o alcance das regras e separar exemplos hipotéticos de fatos. Os itens inéditos continuam sujeitos à validação integral de enunciados, comentários e referências.

> **Auditoria C/E, segunda passagem (11/11/2026):** Itens 1–4 e 6 mantêm gabaritos (C, E, E, C, E); item 5 **não homologado** por transformar regra de design em obrigação universal. Reformulação e resultado sugeridos registrados no próprio comentário.

---

## Questão substituta S27-5: linha de base, magnitude e posição

> Em um gráfico de barras em que a magnitude é codificada pelo **comprimento da barra**, iniciar a escala quantitativa no zero é uma recomendação de integridade visual, pois truncá-la pode aumentar artificialmente a diferença aparente entre os comprimentos. Em um gráfico de linhas, uma escala vertical restrita pode ser adequada quando claramente indicada e interpretada.

**Gabarito: CERTO (inédita, substitui a Questão 5 bloqueada).** Em barras, com base zero, valores 98 e 100 produzem comprimentos próximos. Com base artificial em 97, passam a produzir comprimentos aparentes de 1 e 3. O segundo comprimento é três vezes o primeiro, apesar de os valores originais diferirem apenas cerca de 2%.

**Fronteira:** em gráficos de linhas, os valores são geralmente codificados pela **posição vertical dos pontos**; faixas menores podem revelar oscilações relevantes, mas a escala deve estar legível e não pode ser usada para ocultar o contexto. Nem toda representação de barras usa a mesma codificação de magnitude, de modo que “obrigatoriamente para todo gráfico de barras” é formulação imprecisa.

**Variação C/E:** “É sempre legítimo truncar a base de barras sem avisar a audiência, pois a escala numérica continua visível.” **ERRADO**: a percepção pode ser distorcida, e transparência de eixos é necessária.

**Relação:** [[3 - Materias/Informatica/26 - visualizacao de dados selecao de grafico pela pergunta analitica|Integridade e codificações gráficas]] e [[3 - Materias/Informatica/30 - storytelling com dados estrutura narrativa contexto e persuasao|Comunicação responsável de resultados]].

**Rastreabilidade:** Questão 5 original permanece **NÃO HOMOLOGADA**.
