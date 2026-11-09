---
articleId: art-217dafb9048089a8
articleAliases: ["3 - Materias/Informatica/24 - dado informacao variavel atributo indicador e metrica.md"]
title: "Dado, informação, variável, atributo, indicador e métrica: hierarquia e distinções operacionais"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-09
---

# Dado, informação, variável, atributo, indicador e métrica: hierarquia e distinções operacionais

## 1. Situação concreta e problema analítico no setor público

No contexto da administração pública contemporânea orientada por dados (*Data-Driven Government*), a formulação, o monitoramento e a comunicação de políticas públicas dependem da manipulação rigorosa de conceitos analíticos. No âmbito da Câmara dos Deputados — seja na divulgação institucional, no portal da transparência ou no trabalho das consultorias e comissões —, termos como "dado", "informação", "indicador" e "métrica" são frequentemente utilizados de forma indiscriminada na linguagem cotidiana.

Em provas de concurso público elaboradas pela banca **Cebraspe**, essa confusão de vocabulário é intencionalmente explorada como distrator:
- Tomar um dado bruto desconectado de contexto como se fosse informação acabada.
- Confundir uma métrica simples (contagem pura de ocorrências) com um indicador estratégico composto dotado de meta, polaridade e significado decisório.
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
| **Definição** | Medida puramente numérica direta, bruta ou derivada, que quantifica um aspecto operacional ou volume de atividades. | Parâmetro analítico e estratégico construído a partir de métricas, vinculado a um **objetivo**, uma **meta** e um **padrão de julgamento**. |
| **Vinculação a Metas** | Não requer meta predefinida. É neutra e descritiva. | **Obrigatoriamente vinculado** a um referencial, padrão de conformidade ou meta preestabelecida. |
| **Significado Decisório** | Isoladamente, não expressa sucesso ou fracasso. | Expressa julgamento qualitativo sobre o rumo da organização (aponta se o resultado é satisfatório ou insatisfatório). |
| **Polaridade** | Não possui polaridade inerente. | **Possui polaridade clara**: "quanto maior, melhor" (ex.: índice de resolução de demandas) ou "quanto menor, melhor" (ex.: tempo médio de espera). |
| **Fórmula de Construção** | Geralmente é uma contagem, soma ou cálculo matemático simples. | Frequentemente é uma taxa, razão, índice composto ou proporção que pondera esforço por resultado. |
| **Exemplo na Câmara** | *"A Agência Câmara publicou 1.250 matérias jornalísticas no mês de outubro"*. | *"Taxa de alcance e engajamento cidadão nas matérias institucionais da Câmara, com meta de 80% de aprovação"*. |

> [!IMPORTANT]
> **Regra de Ouro (Cebraspe):** Toda métrica é uma medida quantitativa, mas **nem toda métrica é um indicador**. Uma métrica torna-se um indicador quando passa a informar a tomada de decisão em relação a um objetivo e uma meta predeterminada.

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
- *Dado:* `4.500.000` acessos únicos em outubro.
- *Informação:* "O portal da Câmara registrou 4,5 milhões de acessos únicos durante a semana de votação da reforma tributária, representando aumento de 40% em relação ao mês anterior."
- *Métrica:* Volume mensal total de acessos únicos.
- *Indicador de Desempenho:* Índice de Efetividade da Comunicação Pública (proporção de cidadãos que avaliaram a explicação da reforma como clara, com meta de alcançar pelo menos 75% de satisfação).

### Caso 2: Tramitação de proposições legislativas
- *Variável:* Tempo total de tramitação de um Projeto de Lei (Variável Quantitativa Contínua).
- *Atributo do Projeto de Lei:* Código `PL 2338/2023`, com atributos `Status="Em Tramitação"` e `Regime="Urgência"`.
- *Métrica:* 42 dias decorridos entre a apresentação e o parecer na comissão temática.
- *Indicador:* Tempo Médio de Resposta Regimental das Comissões frente ao padrão normativo regimental de 30 dias.

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
> **Comentário:** Métrica e indicador não são sinônimos. A métrica é uma medição quantitativa simples (ex.: número bruto de atendimentos). O indicador é uma medida articulada a um objetivo, vinculada a uma meta institucional e dotada de polaridade (quanto maior, melhor ou quanto menor, melhor) que permite emitir julgamento de valor sobre o desempenho. Toda métrica quantifica, mas apenas o indicador orienta formalmente a avaliação estratégica.

### Item 3
> **Situação hipotética:** Em um estudo estatístico sobre a atuação dos deputados federais, o analista registrou as seguintes características: número de mandatos consecutivos cumpridos pelo parlamentar e escolaridade (ensino médio, superior e pós-graduação).  
> **Assertiva:** Nessa situação, o número de mandatos e a escolaridade classificam-se, respectivamente, como variável quantitativa contínua e variável qualitativa nominal.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O número de mandatos é uma variável quantitativa **discreta** (assume apenas valores inteiros contáveis: 1, 2, 3 mandatos, não admitindo frações como 1,7 mandato). Por sua vez, a escolaridade é uma variável qualitativa **ordinal**, pois suas categorias apresentam uma relação intrínseca de ordem e hierarquia (médio < superior < pós-graduação), não sendo meramente nominal.

### Item 4
> **Assertiva:** Um indicador de desempenho eficiente prescinde da definição de polaridade quando sua fórmula matemática de cálculo for baseada em proporções simples ou porcentagens.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Nenhum indicador de desempenho prescinde de polaridade. A polaridade define o sentido desejável do resultado: se o percentual refere-se à "taxa de evasão escolar" ou "tempo de resposta a pedidos de informação", o sentido é "quanto menor, melhor"; se refere-se à "taxa de resolução de demandas", o sentido é "quanto maior, melhor". Sem polaridade, o gestor não sabe se a subida do percentual representa sucesso ou fracasso da gestão.

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
