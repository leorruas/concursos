---
articleId: art-f137aeacb1988047
articleAliases: ["3 - Materias/Informatica/29 - power bi tableau e data studio comparativo e funcoes.md"]
title: "Power BI, Tableau e Looker Studio: arquitetura, modelagem, funções DAX e casos de uso no setor público"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Power BI, Tableau e Looker Studio: arquitetura, modelagem, funções DAX e casos de uso no setor público

## 1. Situação concreta e o ecossistema de Business Intelligence (BI) no setor público

Na administração pública contemporânea — e com expressivo protagonismo no Poder Legislativo —, a prestação de contas, a transparência ativa da Lei de Acesso à Informação (LAI) e a governança estratégica exigem ferramentas modernas de **Business Intelligence (BI) e Self-Service Analytics**. 

Para ilustrar o uso de ferramentas de BI no setor público, este artigo emprega **cenários hipotéticos** de acompanhamento de emendas parlamentares, execução orçamentária, tramitação e votações com **Microsoft Power BI**, **Tableau** e **Google Looker Studio** (antigo Google Data Studio). **Os exemplos não comprovam adoção institucional das três plataformas pela Câmara**.

Nas avaliações do **Cebraspe**, as questões não se limitam a testar comandos de interface, mas exigem compreensão profunda sobre:
1. **Arquitetura conceitual** e ciclo de vida dos relatórios (Desktop $\times$ Serviço em Nuvem/Server $\times$ Mobile).
2. **Modelagem dimensional** (esquema estrela $\times$ esquema floco de neve, tabelas fato $\times$ dimensões, relações e cardinalidade).
3. **Linguagem de modelagem DAX** (diferença entre colunas calculadas e medidas, contexto de linha $\times$ contexto de filtro).
4. **Adequação e casos de uso comparativos** entre as três soluções líderes de mercado.

---

## 2. Modelagem dimensional: a base do Self-Service BI

Para análises com múltiplas tabelas e dimensões, o esquema estrela inspirado na modelagem dimensional de Kimball costuma facilitar a leitura e a manutenção. Contudo, soluções de BI também podem usar fontes planas, conexões diretas ou outros modelos; o esquema estrela não é requisito universal:

```
                          ESQUEMA ESTRELA (STAR SCHEMA)
  
       ┌────────────────┐                  ┌────────────────┐
       │   dCalendario  │                  │    dPartido    │
       │  (Dimensão)    │                  │   (Dimensão)   │
       └───────┬────────┘                  └────────┬───────┘
               │                                    │
               │ 1                                  │ 1
               │                                    │
               │ *                                * │
       ┌───────┴────────────────────────────────────┴───────┐
       │                 fDespesasParlamentares             │
       │                   (Tabela Fato)                    │
       │ - ID_Despesa (Identificador da transação; pode funcionar como dimensão degenerada)          │
       │ - DataKey (FK)                                     │
       │ - PartidoKey (FK)                                  │
       │ - DeputadoKey (FK)                                 │
       │ - ValorReembolsado (Métrica / Fato Numérico)       │
       └────────────────────────┬───────────────────────────┘
                                │ *
                                │
                                │ 1
                       ┌────────┴────────┐
                       │    dDeputado    │
                       │   (Dimensão)    │
                       └─────────────────┘
```

### 2.1. Tabelas Fato versus Tabelas Dimensão
- **Tabela Fato (*Fact Table*):**
  - Armazena as **ocorrências quantitativas dos eventos de negócio** (os fatos ou métricas mensuráveis). Ex.: notas fiscais da Cota Parlamentar (CEAP), votos nominais proferidos, empenhos orçamentários.
  - Caracteriza-se por conter chaves estrangeiras (*Foreign Keys* - FK) que apontam para as dimensões e colunas numéricas que serão somadas, mediadas ou contadas. Possui alta volumetria de linhas e crescimento contínuo.
- **Tabela Dimensão (*Dimension Table*):**
  - Armazena o **contexto descritivo dos fatos** (o *quem*, *quando*, *onde*, *o quê*). Ex.: dados cadastrais dos deputados, partidos políticos, tabela de datas (calendário), órgãos da Câmara.
  - Possui chaves primárias (*Primary Keys* - PK) únicas, menor número de linhas e colunas textuais categóricas usadas para filtrar, fatiar (*slice & dice*) e agrupar as métricas da fato.

### 2.2. Esquema Estrela (*Star Schema*) versus Esquema Floco de Neve (*Snowflake Schema*)
- **Esquema Estrela:** A tabela fato central conecta-se a dimensões geralmente desnormalizadas. Pode facilitar a navegação e reduzir algumas junções, mas desempenho depende de cardinalidade, mecanismo de consulta, volume e implementação; não há garantia universal de consultas mais rápidas.
- **Esquema Floco de Neve:** As dimensões são normalizadas em subtabelas hierárquicas (ex.: `dDeputado` aponta para `dMunicipio`, que aponta para `dEstado`). Isso reduz redundância em certos cenários, mas pode aumentar a complexidade das junções; o impacto de desempenho deve ser medido.

---

## 3. Microsoft Power BI: componentes e motor DAX

O Power BI baseia-se em um poderoso ecossistema de três componentes integrados:

```
  ┌────────────────────────────────────────────────────────────────────────┐
  │                           MICROSOFT POWER BI                           │
  │                                                                        │
  │  [Power Query]           --> ETL / M-Language                          │
  │  (Extração e Limpeza)        (Trata nulos, pivota, mescla tabelas)     │
  │        │                                                               │
  │        ▼                                                               │
  │  [Motor VertiPaq]        --> Modelagem e Compressão Colunar            │
  │  (Armazenamento)             (Armazena dados na memória RAM)           │
  │        │                                                               │
  │        ▼                                                               │
  │  [Linguagem DAX]         --> Métricas Analíticas Avançadas             │
  │  (Data Analysis Expressions) (Medidas dinâmicas e contextos de filtro) │
  │        │                                                               │
  │        ▼                                                               │
  │  [Camada Visual]         --> Painéis Interativos e Storytelling        │
  │  (Relatórios)                (Gráficos, cartões e filtros cruzados)    │
  └────────────────────────────────────────────────────────────────────────┘
```

### 3.1. Power Query e Linguagem M
- Responsável pela fase de **Extração e Transformação**. Opera de forma declarativa gravando cada etapa de transformação em código na **Linguagem M**. Executado antes do carregamento dos dados para o modelo em memória.

### 3.2. DAX (*Data Analysis Expressions*): o divisor de águas
DAX é a linguagem funcional de fórmulas do Power BI (e do Analysis Services). A distinção mais cobrada pelo Cebraspe reside entre **Coluna Calculada** e **Medida**:

| Dimensão | Coluna Calculada (*Calculated Column*) | Medida (*Measure*) |
| :--- | :--- | :--- |
| **Momento do Cálculo** | No **modo Import**, calculada e materializada durante processamento/atualização do modelo; em DirectQuery e outros modos, a execução e as restrições dependem do tipo de conexão. | Avaliada conforme a consulta e o contexto de filtro, sem produzir uma coluna de resultados materializados linha a linha. |
| **Armazenamento** | No **Import**, os resultados das colunas calculadas são armazenados no modelo e consomem espaço; não generalizar essa propriedade a todos os modos de armazenamento. | A definição da medida é armazenada como metadado, mas seus resultados não constituem uma coluna materializada no modelo Import. |
| **Contexto Nativo** | Opera no **Contexto de Linha (*Row Context*)**: avalia linha a linha iterativamente. | Opera no **Contexto de Filtro (*Filter Context*)**: avalia o conjunto de dados filtrado pelos visuais. |
| **Função Recomendada** | Criar novas categorias ou segmentações estáticas para eixos de gráficos. | **Cálculo de métricas quantitativas, totais, médias, razões e KPIs**. |
| **Exemplo Prático** | `FaixaEtaria = IF(dDeputado[Idade] >= 60, "Idoso", "Não Idoso")` | `TotalReembolsado = SUM(fDespesas[Valor])` |

### 3.3. A Função Rainha: `CALCULATE`
- `CALCULATE(<expressão>, <filtro1>, <filtro2>, ...)` avalia uma **expressão escalar** sob contexto de filtro modificado. `CALCULATETABLE(<expressão_tabela>, ...)` faz o mesmo para uma **expressão tabular**. Logo, `CALCULATE` **não é a única função capaz de modificar contexto de filtro**.
- Executa a **transição de contexto** (*Context Transition*), convertendo um contexto de linha em um contexto de filtro equivalente.

---

## 4. Tableau: filosofia visual e arquitetura de cálculos

O **Tableau** fundamenta-se na tecnologia patenteada **VizQL** (*Visual Query Language*), que traduz diretamente as ações de arrastar e soltar do usuário em consultas de banco de dados e renderização gráfica geométrica.

### 4.1. Pilares Arquiteturais do Tableau
- **Dimensões versus Medidas:**
  - *Dimensões (Campos Azuis por padrão):* Campos qualitativos discretos que dividem e fatiam os dados em níveis de detalhe.
  - *Medidas (Campos Verdes por padrão):* Campos quantitativos contínuos que podem ser agregados matematicamente.
  - *Atenção de Prova:* No Tableau, "azul" significa **discreto** e "verde" significa **contínuo**; não confundir cor com dimensão/medida (uma dimensão numérica como ano pode ser contínua/verde, e uma medida agregada pode ser discreta/azul).
- **Cálculos de Nível de Detalhe (LOD - *Level of Detail Expressions*):**
  - Permitem computar valores em níveis de granularidade diferentes do nível exibido na visualização:
    1. `FIXED`: Calcula com as dimensões especificadas, independentemente da granularidade da visualização. Em regra, ignora filtros comuns de dimensão, **mas é afetado por filtros de contexto, extração e fonte de dados** (segundo a ordem de operações do Tableau).
    2. `INCLUDE`: Calcula em um nível de detalhe mais fino do que o presente na tela.
    3. `EXCLUDE`: Omite dimensões da tela para calcular em um nível mais agregado.

---

## 5. Google Looker Studio: características e self-service em nuvem

Antigo *Google Data Studio*, o **Looker Studio** é a ferramenta nativa de nuvem (*SaaS*) voltada para criação rápida de relatórios executivos e conectividade simplificada com o ecossistema Google e bancos em nuvem.

### 5.1. Peculiaridades Técnicas
- **100% Baseado em Navegador:** Não possui cliente Desktop instalado localmente; todo o desenvolvimento e consumo ocorrem via web.
- **Conectividade Nativa:** Integração direta e sem atritos com Google BigQuery, Google Sheets, Google Analytics e Google Drive.
- **Modelagem Leve:** Não possui um motor de modelagem dimensional e cálculos analíticos tão profundo quanto o DAX do Power BI ou as expressões LOD do Tableau; seu foco é o consumo rápido de dados já previamente tratados e agregados no banco de dados.

---

## 6. Quadro comparativo das plataformas de BI

| Critério | Microsoft Power BI | Tableau | Google Looker Studio |
| :--- | :--- | :--- | :--- |
| **Ferramenta de Criação** | Power BI Desktop (Windows) + Serviço em Nuvem | Tableau Desktop + Prep Builder | 100% Web (Navegador) |
| **Linguagem de Modelagem** | DAX (Cálculos) + M (ETL) | Cálculos Tableau + Expressões LOD | Funções de campo calculado básicas |
| **Motor de Armazenamento** | VertiPaq em modelos **Import**; alternativas incluem DirectQuery e outros modos | Hyper em **extrações**; conexões diretas usam a fonte de dados | Consulta à fonte/conector e possível cache conforme configuração |
| **Melhor Caso de Uso** | Ecossistemas corporativos integrados, governança e modelagem pesada | Exploração visual profunda, gráficos científicos e design flexível | Relatórios executivos rápidos conectados ao BigQuery e nuvem |
| **Custo Inicial / Licenciamento** | Desktop gratuito; licença Pro/Premium para compartilhamento | Licenciamento por criador (*Creator/Viewer*) mais elevado | Gratuito na versão básica; versão Pro corporativa |

---

## 7. Casos concretos e aplicações progressivas

### Caso 1: Painel hipotético de tramitação orçamentária
- *Cenário:* A Diretoria-Geral necessita de um painel interativo que cruze empenhos orçamentários com emendas de bancada e individuais.
- *Implementação:* **Power BI**. Cria-se um modelo em esquema estrela no Power BI Desktop com tabelas dimensão (`dDeputado`, `dPartido`, `dCalendario`) e a tabela fato `fEmpenhos`.
- *Uso de DAX:* Cria-se a medida `[Total Liquidado] = SUM(fEmpenhos[ValorLiquidado])` e a medida temporal de inteligência de tempo `[Liquidado Ano Anterior] = CALCULATE([Total Liquidado], SAMEPERIODLASTYEAR(dCalendario[Data]))`.

### Caso 2: Exploração hipotética de padrões de votação partidária
- *Cenário:* Uma equipe de cientistas políticos da Consultoria Legislativa deseja cruzar padrões de votação de 513 deputados em 2.000 votações nominais para identificar agrupamentos ideológicos (*clustering*).
- *Implementação:* **Tableau**. A flexibilidade do motor VizQL e expressões `{ FIXED [Deputado] : AVG([AlineamentoGoverno]) }` permite gerar matrizes de calor (*heatmaps*) e gráficos de dispersão multivariados sem necessidade de codificar pipelines relacionais rígidos.

### Caso 3: Relatório hipotético de engajamento de portal institucional
- *Cenário:* A Secretaria de Comunicação precisa disponibilizar para a imprensa e diretores um relatório público com acessos diários, matérias mais lidas e retenção de vídeo na TV Câmara.
- *Implementação hipotética:* **Looker Studio**. Se a equipe tiver fontes autorizadas no Google Analytics 4 e BigQuery, poderá configurar conectores, credenciais e atualização conforme as políticas aplicáveis. O uso de BigQuery, conectores e edições corporativas **pode gerar custos**, e a atualização/visibilidade dos relatórios depende das permissões e da configuração efetiva.

---

## 8. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** No Microsoft Power BI, uma coluna calculada e uma medida diferenciam-se pelo fato de que a coluna calculada consome memória RAM e espaço em disco ao ser avaliada estaticamente linha a linha durante a carga de dados, enquanto a medida é calculada dinamicamente sob demanda com base no contexto de filtro ativo na visualização.
>
> **Gabarito:** **NÃO HOMOLOGADO (modo de armazenamento omitido)**  
> **Comentário:** Em modelos **Import**, colunas calculadas costumam ser materializadas no modelo e recalculadas no processamento/atualização; medidas são avaliadas sob demanda de acordo com o contexto de filtro, sem coluna de resultados armazenada. Entretanto, o enunciado generaliza ocupação de RAM e disco e avaliação **durante a carga de dados** para todo Power BI, sem delimitar **Import versus DirectQuery** e demais modos de armazenamento. Além disso, medidas podem consumir recursos de memória durante execução. **Versão de treino:** “Em modelo Power BI no modo Import, uma coluna calculada gera valores armazenados no modelo durante o processamento, enquanto uma medida DAX é avaliada conforme o contexto de filtro da consulta.” **Gabarito reformulado: CERTO.**

### Item 2
> **Assertiva:** No design de modelos de dados analíticos para Business Intelligence, o esquema floco de neve (*snowflake schema*) é universalmente preferível ao esquema estrela (*star schema*), uma vez que a desnormalização das tabelas de dimensão no esquema estrela degrada o desempenho das consultas nos motores colunares em memória.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A palavra **“universalmente”** torna o item falso. O esquema estrela costuma facilitar a modelagem dimensional e a consulta analítica, sendo amplamente recomendado em Power BI; já o floco de neve normaliza dimensões e pode atender a necessidades específicas. **Não há superioridade garantida de desempenho em toda ferramenta, carga e arquitetura**. O esquema deve ser escolhido conforme consultas, cardinalidade, armazenamento e manutenção.

### Item 3
> **Assertiva:** Na linguagem DAX do Power BI, a função `CALCULATE` é a única expressão habilitada a modificar o contexto de filtro original aplicado a uma métrica em um relatório interativo.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A expressão **“única”** torna o item falso. `CALCULATE` avalia uma expressão escalar sob contexto de filtro modificado; a função `CALCULATETABLE` também modifica o contexto de filtro, mas retorna uma tabela. A documentação oficial da Microsoft descreve ambas. Fontes: [CALCULATE](https://learn.microsoft.com/pt-br/dax/calculate-function-dax) e [CALCULATETABLE](https://learn.microsoft.com/pt-br/dax/calculatetable-function-dax).

### Item 4
> **Assertiva:** No software Tableau, a cor verde em um campo inserido em uma prateleira de linhas ou colunas identifica obrigatoriamente que aquele campo é uma métrica quantitativa, ao passo que a cor azul denota que o campo é uma dimensão descritiva.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Pegadinha clássica de Tableau. No Tableau:
> - **Azul** significa que o campo é **Discreto** (cria cabeçalhos e rótulos separados).
> - **Verde** significa que o campo é **Contínuo** (cria eixos contínuos ordenados).
> Embora muitas dimensões sejam azuis e a maioria das medidas seja verde, é perfeitamente possível ter uma dimensão contínua (verde, como uma data em linha contínua) ou uma medida discreta (azul, como o total de vendas convertido em cabeçalho discreto).

### Item 5
> **Assertiva:** As tabelas de dimensão em um modelo dimensional caracterizam-se por armazenar exclusivamente chaves primárias e valores numéricos aditivos decorrentes de transações de negócio, sendo vedada a inclusão de atributos textuais ou categóricos em sua estrutura.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** A assertiva descreve as **tabelas fato (*fact tables*)**, e não as dimensões. As **tabelas de dimensão** contêm os atributos qualitativos, descritivos e contextuais (nomes, partidos, categorias, regiões, calendários) que fornecem o contexto e servem como filtros para as métricas numéricas armazenadas nas tabelas fato.

### Item 6
> **Assertiva:** O Google Looker Studio opera como uma solução integralmente baseada em computação em nuvem (*SaaS*), permitindo a conexão direta com fontes de dados relacionais e analíticas e a criação de relatórios interativos via navegador web, prescindindo da instalação de aplicativo cliente dedicado no computador do desenvolvedor.
>
> **Gabarito:** **CERTO**  
> **Comentário:** O Looker Studio é oferecido como serviço web e permite criar relatórios interativos no navegador, **sem aplicativo cliente dedicado obrigatório** para o autor. Dependendo da fonte de dados e da rede institucional, conectores, drivers ou infraestrutura externa podem exigir configuração adicional. Essa possibilidade não invalida o núcleo do item.

---

## 9. Referências conceituais

1. **FERRARI, Alberto; RUSSO, Marco.** *The Definitive Guide to DAX: Business intelligence with Microsoft Power BI, SQL Server Analysis Services, and Excel.* 2nd ed. Microsoft Press, 2019.
2. **KIMBALL, Ralph; ROSS, Margy.** *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling.* 3rd ed. Wiley, 2013.
3. **SLEEPER, Ryan.** *Practical Tableau: 100 Tips, Tutorials, and Strategies from a Tableau Zen Master.* O'Reilly Media, 2018.
4. **MICROSOFT LEARN.** *Visão Geral da Arquitetura do Microsoft Power BI e Otimização de Modelos.* Microsoft, 2024.
5. **CÂMARA DOS DEPUTADOS.** *Diretrizes de Arquitetura de Dados e Painéis BI Corporativos.* Brasília: Centro de Informática (Cenin), 2024.

> **Correção de gabarito (TI-020, 11/11/2026):** o Item 3 foi corrigido de CERTO para **ERRADO** por causa da exclusividade indevida atribuída a `CALCULATE`. Cotejo: [Microsoft Learn, CALCULATE](https://learn.microsoft.com/pt-br/dax/calculate-function-dax), [CALCULATETABLE](https://learn.microsoft.com/pt-br/dax/calculatetable-function-dax); para `FIXED`, consultar [ordem de operações do Tableau](https://help.tableau.com/current/pro/desktop/pt-br/calculations_calculatedfields_lod_filters.htm). Mantidos identificadores e enunciados para rastreabilidade.

> **Auditoria C/E, segunda passagem (11/11/2026):** seis itens examinados. **Item 1 não homologado** por omitir modo de armazenamento e generalizar materialização de colunas; versão condicionada ao modo Import fornecida. Itens 2–6 mantêm **E, E, E, E, C**, incluindo a correção anterior da questão DAX `CALCULATE`/`CALCULATETABLE`. A documentação Microsoft diferencia [colunas calculadas e medidas](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculated-columns) e [modos de armazenamento](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-storage-mode).

---

## Questão substituta S29-1: medidas DAX e colunas calculadas

> Em um modelo do Power BI no **modo Import, com contexto de expressão padrão**, os valores de uma coluna calculada DAX são processados e mantidos no modelo durante a atualização, enquanto uma medida é avaliada conforme o contexto da consulta e dos filtros aplicados no relatório.

**Gabarito: CERTO (inédita, substitui a Questão 1 bloqueada).** A distinção, nesse modo, não é simplesmente “DAX versus não DAX”, pois ambos utilizam DAX; o aspecto central é **valor armazenado por linha** versus **resultado calculado em contexto**.

**Caso progressivo:** em uma tabela com preço e quantidade, `ValorLinha = Tabela[Preço] * Tabela[Quantidade]` pode ser coluna calculada no modo Import. Já `Receita = SUMX(Tabela, Tabela[Preço] * Tabela[Quantidade])` é uma medida agregada, cujo resultado responde aos filtros de produto ou período. Esta segunda expressão não depende de a primeira coluna existir.

**Fronteiras:** modelos **DirectQuery**, modelos compostos e colunas calculadas com **contexto de expressão do usuário** podem ter comportamentos diferentes; não tratar a materialização de qualquer expressão DAX como universal. Durante a consulta, medidas também consomem recursos computacionais e memória transitória.

**Variação C/E:** “No Power BI, o comando `CALCULATE` é a única função DAX capaz de alterar o contexto de filtro.” **ERRADO**: `CALCULATETABLE` também realiza avaliação em contexto de filtro modificado; o contexto ainda pode ser afetado por outras construções conforme o caso.

**Fontes primárias:** [Microsoft Learn: opções de cálculo e materialização](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculations-options), [Microsoft Learn: colunas calculadas](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculated-columns), [Microsoft Learn: medidas](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-measures) e [Microsoft Learn: modos de armazenamento](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-storage-mode).

**Rastreabilidade:** Questão 1 original permanece **NÃO HOMOLOGADA**.
