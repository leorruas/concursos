---
articleId: art-e3831c8dec419d79
articleAliases: ["3 - Materias/Informatica/28 - dispersao e box plot relacoes distribuicao e resumo estatistico.md"]
title: "Gráfico de dispersão e box plot: relações bivariadas, distribuição, quartis e detecção de outliers"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-09
---

# Gráfico de dispersão e box plot: relações bivariadas, distribuição, quartis e detecção de outliers

## 1. Situação concreta e o desafio da análise exploratória

Na análise de dados legislativos e políticas públicas da Câmara dos Deputados — como a investigação sobre a relação entre o número de assessores e a produção de pareceres em comissões, ou o escrutínio do tempo de tramitação de proposições —, métricas simples de tendência central (como a média aritmética) costumam ocultar informações fundamentais ou distorcer a realidade quando há assimetria acentuada e valores discrepantes (*outliers*).

A análise exploratória de dados (*Exploratory Data Analysis* - EDA) recorre a dois instrumentos gráficos canônicos de alto poder diagnóstico, intensamente cobrados pelo **Cebraspe**:
1. O **Gráfico de Dispersão (*Scatter Plot*)**: projetado para investigar a relação bivariada (associação linear ou não linear, sentido e dispersão) entre duas variáveis quantitativas contínuas.
2. O **Diagrama de Caixas (*Box Plot*)**: projetado para sumarizar a distribuição univariada de uma variável contínua por meio do **resumo dos cinco números** de Tukey, evidenciando simultaneamente mediana, dispersão interquartílica, assimetria e presença de valores atípicos.

---

## 2. O gráfico de dispersão (*scatter plot*): relações bivariadas

O gráfico de dispersão plota pares de observações $(x_i, y_i)$ em um plano cartesiano ortogonal bidimensional, onde:
- O **Eixo Horizontal ($X$)** geralmente representa a variável independente ou preditora.
- O **Eixo Vertical ($Y$)** representa a variável dependente ou de resposta.

```
          CORRELAÇÃO POSITIVA                     CORRELAÇÃO NEGATIVA                      NENHUMA CORRELAÇÃO
     Y ▲        •   ••                       Y ▲   ••                                 Y ▲    •     ••   •
       │      •  ••                            │     ••   •                             │   ••   •   •   ••
       │    ••  •                              │       •   ••                           │     •   ••   •
       │  ••                                   │         •   ••                         │   •   ••   •    •
     0 ┼────────────────►                    0 ┼────────────────►                     0 ┼────────────────►
       0                X                      0                X                       0                X
```

### 2.1. Interpretação dos Padrões de Dispersão
1. **Sentido da Relação:**
   - *Positivo:* Quando valores maiores de $X$ associam-se sistematicamente a valores maiores de $Y$ (nuvem de pontos inclinada para cima à direita).
   - *Negativo (Inverso):* Quando aumentos em $X$ associam-se a reduções em $Y$ (nuvem de pontos inclinada para baixo à direita).
2. **Forma da Relação:**
   - *Linear:* Os pontos distribuem-se em torno de uma linha reta imaginária.
   - *Não Linear (Curvilínea):* A relação segue padrões exponenciais, logarítmicos, quadráticos ou em $U$ invertido.
3. **Força da Associação:**
   - Determinada pela proximidade dos pontos em torno da linha de tendência. Quanto mais concentrada a nuvem, mais forte a correlação (maior o valor absoluto do coeficiente de correlação de Pearson $r$).
4. **Alerta Dogmático de Prova: Correlação não implica Causalidade**
   - O gráfico de dispersão e o coeficiente de Pearson demonstram **associação estatística concomitante**, mas não provam que a variável $X$ seja a causa direta da variável $Y$. A associação pode ser espúria ou mediada por uma terceira variável de confusão (*confounding variable*).

---

## 3. O box plot: o resumo dos cinco números de Tukey

O **Box Plot** (ou diagrama de caixa) foi desenvolvido pelo estatístico John Tukey para representar a distribuição empírica dos dados sem depender da premissa de distribuição normal.

```
       Mínimo Não Outlier         Q1 (25%)        Mediana (50%)       Q3 (75%)         Máximo Não Outlier        Outlier
               ├─────────────────────┌─────────────────┬─────────────────┐─────────────────────┤               *
                                     │                 │                 │
                                     └─────────────────┴─────────────────┘
                                     │◄────────────── IQR ──────────────►│
                                     │  (Intervalo Interquartil = 50%)   │
```

### 3.1. A Anatomia Estrutural dos Cinco Números
1. **Primeiro Quartil ($Q_1$ ou Percentil 25):** 25% das observações ordenadas estão abaixo deste valor e 75% estão acima. Representa a borda inferior da caixa.
2. **Segundo Quartil ($Q_2$, Mediana ou Percentil 50):** O ponto médio exato da amostra. Divide os dados em duas metades iguais (50% abaixo, 50% acima). É representado por uma linha divisória interna na caixa.
3. **Terceiro Quartil ($Q_3$ ou Percentil 75):** 75% das observações estão abaixo deste valor e 25% estão acima. Representa a borda superior da caixa.
4. **Intervalo Interquartil (IQR - *Interquartile Range*):**
   $$\text{IQR} = Q_3 - Q_1$$
   - A altura/comprimento da caixa corresponde exatamente ao IQR, contendo os **50% centrais dos dados**. É uma medida de dispersão robusta contra valores extremos.
5. **Hastes ou Bigodes (*Whiskers*):**
   - Prolongam-se a partir das bordas da caixa até o menor e o maior valor observado que **não sejam classificados como outliers**.
   - O alcance máximo teórico das hastes é de $1{,}5 \times \text{IQR}$ além dos quartis:
     $$\text{Limite Inferior Teórico} = Q_1 - 1{,}5 \times \text{IQR}$$
     $$\text{Limite Superior Teórico} = Q_3 + 1{,}5 \times \text{IQR}$$
   - *Atenção de Prova:* A haste não termina necessariamente em $Q_3 + 1{,}5 \times \text{IQR}$, mas sim no **maior valor real da amostra que ainda seja menor ou igual** a esse limite teórico.
6. **Outliers (Valores Discrepantes Atípicos):**
   - Qualquer observação que ultrapasse os limites teóricos das hastes é plotada individualmente como um ponto isolado ou asterisco ($*$).

---

## 4. Diagnóstico de assimetria pelo box plot

O desenho da caixa e das hastes revela a simetria ou assimetria da distribuição sem necessidade de calcular coeficientes analíticos complexos:

```
    ASSIMETRIA POSITIVA (À DIREITA)             DISTRIBUIÇÃO SIMÉTRICA                ASSIMETRIA NEGATIVA (À ESQUERDA)
        ┌───────┬───────────────┐                  ┌───────────┬───────────┐                  ┌───────────────┬───────┐
  ├───┤ │       │               │ ├──────────┤   ├──┤          │           │ ├──┤   ├──────────┤  │               │       │ ├───┤
        └───────┴───────────────┘                  └───────────┴───────────┘                  └───────────────┴───────┘
          Q1   Med             Q3                    Q1       Med         Q3                    Q1           Med   Q3
```

1. **Distribuição Simétrica:**
   - A linha da mediana situa-se aproximadamente no centro da caixa ($Q_2 - Q_1 \approx Q_3 - Q_2$).
   - As duas hastes possuem comprimentos similares.
2. **Distribuição Assimétrica Positiva (à Direita):**
   - A mediana está mais próxima do primeiro quartil $Q_1$ (a metade superior da caixa é mais larga que a inferior).
   - A haste superior é visivelmente mais longa que a inferior, e os eventuais outliers concentram-se no topo (valores muito altos, como salários e patrimônio).
3. **Distribuição Assimétrica Negativa (à Esquerda):**
   - A mediana está mais próxima do terceiro quartil $Q_3$.
   - A haste inferior é mais longa que a superior, e eventuais outliers situam-se nos valores mínimos.

---

## 5. Comparação e cruzamento de grupos com box plots múltiplos

Uma das maiores utilidades práticas do box plot na administração pública é a comparação lado a lado da mesma variável quantitativa entre diferentes categorias qualitativas (*Side-by-Side Box Plots*).

```
   Dias de Tramitação
 180 ▲           *
 150 │           *
 120 │                     ┌─────┐
  90 │       ┌─────┐       │     │
  60 │ ┌───┐ │  ┬  │       │  ┬  │
  30 │ │ ┬ │ │  ┴  │       │  ┴  │
   0 ┼─┴───┴─┴─────┴───────┴─────┴────►
        PL      PLP         PEC
```

- Permite comparar instantaneamente se uma PEC tem mediana de tramitação superior à de um PL ordinário, se a variabilidade (IQR) das MPs é menor, e quais matérias geram casos anômalos de tramitação arrastada.

---

## 6. Casos concretos e aplicações progressivas

### Caso 1: Investigação de relação entre presença e emendas liberadas
- *Cenário:* Um analista cruza o percentual de presença dos deputados em votações nominais ($X$) com o valor de emendas individuais executadas ($Y$).
- *Visualização:* **Gráfico de Dispersão**.
- *Interpretação:* A nuvem de pontos revela se deputados com 100% de presença recebem volumes sistematicamente maiores de emendas (correlação positiva aparente) ou se a distribuição é dispersa e homogênea (ausência de correlação linear).

### Caso 2: Auditoria de reembolsos da Cota Parlamentar (CEAP)
- *Cenário:* Análise de gastos com locação de veículos por deputados de diferentes bancadas partidárias.
- *Visualização:* **Box plots comparativos por partido**.
- *Diagnóstico:* Identifica-se que determinado partido possui mediana de gastos de R$ 5.000, mas apresenta três deputados plotados como pontos isolados além da haste superior (gastos de R$ 12.000). Esses pontos são categorizados como *outliers* univariados e direcionados para auditoria de notas fiscais.

### Caso 3: Tempo de permanência de processos nas comissões
- *Cenário:* Comparação do tempo (em dias) que os projetos permanecem na Comissão de Constituição e Justiça (CCJ) versus Comissão de Finanças e Tributação (CFT).
- *Visualização:* Dois box plots paralelos.
- *Constatação:* A CCJ apresenta IQR muito mais largo e haste superior longa com outliers, demonstrando alta variabilidade e heterogeneidade no ritmo de deliberação frente à CFT, cuja distribuição é mais concentrada em torno da mediana.

---

## 7. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** No gráfico de dispersão (*scatter plot*), a identificação de um coeficiente de correlação linear próximo de zero entre duas variáveis quantitativas garante a inexistência de qualquer relação matemática de dependência entre elas.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O coeficiente de Pearson afere estritamente a existência de associação **linear**. Se a relação entre as variáveis for curvilínea (não linear, como uma relação quadrática perfeita em parábola ou senoidal), o coeficiente de Pearson pode resultar em zero, embora exista uma dependência funcional matemática perfeita entre as variáveis. O gráfico de dispersão é essencial justamente para revelar padrões não lineares invisíveis ao coeficiente de correlação isolado.

### Item 2
> **Assertiva:** Em um diagrama de caixas (*box plot*), a extensão total da caixa delimitada pelo primeiro e pelo terceiro quartis corresponde ao intervalo interquartil (IQR), representando o intervalo no qual se concentram cinquenta por cento das observações centrais da amostra.
>
> **Gabarito:** **CERTO**  
> **Comentário:** Definição canônica exata do box plot. A caixa retangular é delimitada por $Q_1$ (percentil 25) e $Q_3$ (percentil 75). O seu comprimento representa o Intervalo Interquartil ($\text{IQR} = Q_3 - Q_1$), que abriga os 50% centrais dos dados ordenados.

### Item 3
> **Assertiva:** Caso um box plot apresente a linha da mediana sensivelmente deslocada em direção à borda superior da caixa ($Q_3$) e a haste inferior seja consideravelmente mais longa do que a haste superior, conclui-se que a distribuição de dados é assimétrica positiva (à direita).
>
> **Gabarito:** **ERRADO**  
> **Comentário:** As características descritas (mediana próxima a $Q_3$ e haste inferior longa com cauda estendida para valores mínimos) configuram uma distribuição **assimétrica negativa (à esquerda)**. Na assimetria positiva (à direita), a mediana fica próxima a $Q_1$ e a haste superior é a mais alongada.

### Item 4
> **Assertiva:** A haste superior (*whisker*) de um box plot termina obrigatoriamente no valor exato resultante do cálculo $Q_3 + 1{,}5 \times \text{IQR}$, independentemente de existir uma observação real com esse valor no conjunto de dados.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A expressão $Q_3 + 1{,}5 \times \text{IQR}$ define apenas o **limite teórico** para corte de outliers. A haste termina no **maior valor observado na amostra que seja menor ou igual** a esse limite teórico. Se o maior valor real antes do outlier for menor que o limite, a haste termina nesse valor observado real.

### Item 5
> **Assertiva:** O box plot é uma ferramenta analítica adequada para comparar simultaneamente a dispersão e a posição da mediana de uma mesma variável contínua entre múltiplos grupos categóricos independentes.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O uso de múltiplos box plots dispostos lado a lado (*side-by-side*) é um dos métodos visuais mais eficientes da estatística exploratória para confrontar medianas, variabilidade (tamanho do IQR) e perfis de assimetria entre diferentes categorias (ex.: despesas por partido ou remuneração por cargo).

### Item 6
> **Assertiva:** No gráfico de dispersão, a constatação visual de uma nuvem de pontos com forte alinhamento positivo entre duas variáveis socioeconômicas autoriza o pesquisador a inferir uma relação direta de causa e efeito entre os fenômenos observados.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Regra de ouro da estatística e de provas do Cebraspe: **correlação não implica causalidade**. O alinhamento dos pontos evidencia apenas covariância estatística, a qual pode ser provocada por fatores de confusão, causalidade reversa ou simples coincidência estocástica (correlação espúria).

---

## 8. Referências conceituais

1. **TUKEY, John W.** *Exploratory Data Analysis.* Reading: Addison-Wesley, 1977.
2. **BUSSAB, Wilton de O.; MORETTIN, Pedro A.** *Estatística Básica.* 9ª ed. São Paulo: Saraiva, 2017.
3. **TRIOLA, Mario F.** *Introdução à Estatística.* 12ª ed. Rio de Janeiro: LTC, 2017.
4. **FEW, Stephen.** *Show Me the Numbers: Designing Tables and Graphs to Enlighten.* Analytics Press, 2012.
5. **CÂMARA DOS DEPUTADOS.** *Guia de Análise Exploratória de Dados para Auditoria e Consultoria Legislativa.* Brasília: Cenin/Conleg, 2024.
