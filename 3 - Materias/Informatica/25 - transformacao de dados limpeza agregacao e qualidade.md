---
articleId: art-03945be9cb42c4bd
articleAliases: ["3 - Materias/Informatica/25 - transformacao de dados limpeza agregacao e qualidade.md"]
title: "Transformação de dados: limpeza, tratamento de nulos, agregação e dimensões de qualidade"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Transformação de dados: limpeza, tratamento de nulos, agregação e dimensões de qualidade

## 1. Situação concreta e o princípio "Garbage In, Garbage Out"

No setor público, órgãos como a Câmara dos Deputados, o Tribunal de Contas da União (TCU) e a Controladoria-Geral da União (CGU) consomem diariamente bases de dados massivas e heterogêneas: execução orçamentária (Siafi), folha de pagamentos, cadastros de fornecedores (Compras.gov.br), votações em plenário e registros de presença de parlamentares.

Raramente os dados brutos chegam prontos para consumo analítico direto. Eles contêm inconsistências cadastrais, valores omissos (*missing values*), duplicidades, erros de digitação e formatações divergentes.

Se a equipe de análise ou comunicação alimentar painéis gerenciais (*dashboards*), relatórios de auditoria ou modelos preditivos com dados corrompidos, as conclusões serão inevitavelmente falaciosas. Esse fenômeno é sintetizado pelo princípio clássico da ciência da computação:
$$\textbf{GIGO} \quad (\textit{Garbage In, Garbage Out} - \text{Se entra lixo, sai lixo})$$

A **preparação de dados** (*data preparation/wrangling*) costuma demandar esforço significativo, mas a proporção varia entre projetos e não há base para afirmar que corresponda a 70% a 80% de **qualquer** projeto. A transformação e a qualidade dos dados são relevantes para questões de análise de dados.

---

## 2. O pipeline ETL: extração, transformação e carga

A movimentação de dados operacionais transacionais (OLTP) para ambientes analíticos e *Data Warehouses* (OLAP) segue o fluxo **ETL**:

```
 ┌──────────────┐       ┌────────────────────────┐       ┌────────────────────┐
 │  EXTRAÇÃO    │       │     TRANSFORMAÇÃO      │       │       CARGA        │
 │   (Extract)  │ ───►  │      (Transform)       │ ───►  │       (Load)       │
 └──────────────┘       └────────────────────────┘       └────────────────────┘
  - Bancos OLTP          - Limpeza e Padronização         - Data Warehouse
  - APIs REST            - Tratamento de Nulos            - Data Lake
  - Arquivos CSV/JSON    - Deduplicação / Validação       - Cubos Analíticos
  - Web Scraping         - Agregação e Junção             - Data Marts Temáticos
```

No paradigma mais recente orientado a *Big Data* e *Data Lakes*, inverte-se frequentemente a ordem para **ELT** (os dados são carregados em sua forma bruta no Data Lake e a transformação ocorre internamente com o poder de processamento distribuído da nuvem).

---

## 3. Limpeza de dados (*Data Cleansing*): operações fundamentais

### 3.1. Tratamento de Valores Faltantes ou Nulos (*Missing Values*)
A ocorrência de valores ausentes em um conjunto de dados pode ter naturezas estatísticas distintas (MCAR - *Missing Completely at Random*, MAR - *Missing at Random*, MNAR - *Missing Not at Random*). O analista dispõe de três estratégias principais:

```
                  ESTRATÉGIAS PARA VALORES NULOS
                                │
        ┌───────────────────────┴───────────────────────┐
        ▼                                               ▼
EXCLUSÃO / DELEÇÃO                              IMPUTAÇÃO DE VALORES
- Remoção da linha (registro)                   - Medidas de tendência central (Média/Mediana)
- Remoção da coluna (variável)                  - Moda (para categóricos)
                                                - Interpolação / Forward-fill (séries temporais)
                                                - Algoritmos preditivos (KNN / Regressão)
```

1. **Exclusão de Registros (*Listwise / Pairwise Deletion*):**
   - *Quando usar:* A análise do mecanismo de ausência e do impacto da exclusão mostra que a perda de linhas não compromete as estimativas nem introduz viés relevante. Um percentual pequeno, isoladamente, não garante exclusão segura.
   - *Risco:* Pode introduzir viés de seleção grave se os dados não faltarem de forma puramente aleatória.
2. **Imputação por Tendência Central (Média versus Mediana):**
   - **Média:** Recomendada apenas para distribuições estritamente simétricas e sem valores discrepantes (*outliers*).
   - **Mediana:** É a medida **robusta** preferida quando a distribuição for assimétrica ou contiver *outliers* expressivos (ex.: remunerações de servidores ou patrimônio declarado).
   - **Moda (Valor mais frequente):** Padrão exclusivo para imputação em variáveis qualitativas/categóricas nominais.
3. **Imputação Temporal (*Forward Fill / Backward Fill*):**
   - Propaga o último valor válido observado para a data seguinte. Muito comum em cotações e indicadores econômicos diários.

### 3.2. Detecção e Tratamento de Valores Discrepantes (*Outliers*)
Um *outlier* é uma observação que se desvia substancialmente do padrão geral dos dados.
- **Origens:** Erro de medição/digitação (ex.: idade de um deputado digitada como `550` anos) versus valor atípico real e legítimo (ex.: uma compra emergencial vultosa na pandemia).
- **Regra do Intervalo Interquartil (IQR - *Interquartile Range*):**
  $$\text{IQR} = Q_3 - Q_1$$
  $$\text{Limite Inferior} = Q_1 - 1{,}5 \times \text{IQR} \qquad \text{Limite Superior} = Q_3 + 1{,}5 \times \text{IQR}$$
  Qualquer valor abaixo do limite inferior ou acima do superior é candidato a *outlier* em um gráfico *Box Plot*.
- **Atenção de Prova:** Um *outlier* nem sempre deve ser apagado. Se ele representar um evento real (como uma fraude financeira pontual), excluí-lo mascarará o fenômeno investigado pelo auditor.

### 3.3. Deduplicação e Padronização Cadastral
- **Deduplicação Exata:** Registros idênticos em todos os campos decorrentes de falhas de replicação de banco.
- **Correspondência Difusa (*Fuzzy Matching*):** Identificação de registros que se referem à mesma entidade com grafias ligeiramente diferentes (ex.: `"Câmara dos Deputados"` $\times$ `"Camara dos Deputados"` $\times$ `"CAMARA DOS DEPUTADOS - DF"`). Utiliza métricas de distância de edição (como Distância de Levenshtein).

---

## 4. Agregação e granularidade de dados

A **granularidade** (ou grão do dado) refere-se ao **nível de detalhe atômico** com que as informações são representadas no conjunto de dados.

```
Nível Alto   [Tabela Sintética Agregada]  --> Total gasto por Partido Político por Ano
   ▲
   │         [Tabela Agregada Intermediária] --> Total gasto por Deputado por Mês
   │
Nível Baixo  [Tabela Analítica Atômica]   --> Cada nota fiscal individual de reembolso (CEAP)
```

### 4.1. Funções de Agregação e Agrupamento
Na linguagem SQL e nas ferramentas de BI, a operação de transformar dados atômicos em dados resumidos é realizada por cláusulas `GROUP BY` associadas a funções matemáticas:
- `SUM()`: Soma cumulativa de valores contínuos.
- `AVG()`: Média aritmética.
- `COUNT(*)`: Conta linhas, inclusive as que contêm valores `NULL` em colunas; `COUNT(coluna)` conta apenas os valores não nulos dessa coluna; `COUNT(DISTINCT coluna)` conta valores distintos não nulos.
- `MIN()` e `MAX()`: Valores extremos no grupo.

### 4.2. O Trade-off da Granularidade
- **Alta Granularidade (Mais Detalhada/Fina):** Permite investigações pontuais, cruzamento de notas fiscais e auditoria fina. Inconveniente: exige imensa capacidade de armazenamento e consultas mais lentas.
- **Baixa Granularidade (Agregada/Grossa):** Gera relatórios executivos rápidos e gráficos limpos. Inconveniente: **perda irreversível de informação de detalhe** (é impossível derivar o detalhe de uma nota fiscal a partir de um valor já agregado anualmente).

---

## 5. As dimensões da qualidade de dados (*Data Quality*)

A governança corporativa de dados (conforme o framework *DAMA-DMBOK - Data Management Body of Knowledge*) estabelece as dimensões fundamentais para atestar a qualidade de uma base pública:

```
                    DIMENSÕES DE QUALIDADE (DAMA-DMBOK)
  
  [Exatidão]      --> O dado retrata fielmente a realidade objetiva?
  [Completude]    --> Há campos nulos essenciais ou registros faltantes?
  [Consistência]  --> Os dados não se contradizem entre diferentes tabelas?
  [Atualidade]    --> O dado reflete o momento temporal correto e recente?
  [Validade]      --> O dado atende aos formatos, tipos e regras de negócio?
  [Unicidade]     --> Cada entidade do mundo real está representada apenas uma vez?
```

1. **Exatidão (*Accuracy*):** O valor registrado corresponde à verdade fática (ex.: o saldo da conta no Siafi bate exatamente com o extrato do Banco do Brasil).
2. **Completude (*Completeness*):** Ausência de omissões (ex.: 100% dos deputados em exercício possuem CPF cadastrado).
3. **Consistência (*Consistency*):** Harmonia entre bases (ex.: um servidor não pode constar como "ativo" na folha de pagamento e "aposentado" no cadastro previdenciário no mesmo mês).
4. **Atualidade / Tempestividade (*Timeliness*):** O dado está disponível no tempo hábil necessário para a decisão (um relatório financeiro com seis meses de atraso perde utilidade operacional).
5. **Validade (*Validity*):** O dado obedece à sintaxe e ao domínio permitido (ex.: o campo UF contém apenas siglas válidas de 2 letras e o campo data segue o formato ISO AAAA-MM-DD).
6. **Unicidade (*Uniqueness*):** Ausência de duplicidade cadastral para a mesma entidade.

---

## 6. Casos concretos e aplicações progressivas

### Caso 1: Tratamento da Cota Parlamentar (CEAP) na Câmara
- *Cenário:* Uma planilha de prestação de contas de despesas parlamentares apresenta o campo "Valor Reembolsado" preenchido ora como string `"R$ 1.500,00"`, ora como float numérico `1500.00`, além de registros com valor negativo e datas futuras.
- *Etapas de Limpeza:*
  1. Padronização sintática: remoção do prefixo `"R$ "` e conversão de vírgula em ponto para tipagem numérica float (*Validade*).
  2. Filtragem de inconsistências de negócio: rejeição de valores negativos e validação temporal para impedir datas futuras (*Validade e Exatidão*).
  3. Agregação: sumarização do valor total por deputado e por tipo de despesa (combustível, passagens, hospedagem).

### Caso 2: Auditoria de presença em votações nominais
- *Cenário:* O sistema registra votações em painel eletrônico. Em determinada sessão, 10 deputados constam simultaneamente como "Presente em Plenário" e "Em Missão Oficial no Exterior com Afastamento Deferido".
- *Diagnóstico:* Violação da dimensão de **Consistência**. As regras de negócio do Regimento Interno impedem a duplicidade concomitante dessas duas situações funcionais.

### Caso 3: Imputação de remuneração em levantamento estatístico
- *Cenário:* Em uma base sobre cargos comissionados, 5% dos registros possuem a remuneração em branco. A distribuição salarial dos cargos é altamente assimétrica, com poucos diretores recebendo subsídios muito elevados que puxam a média para cima.
- *Decisão Técnica ilustrativa:* Considerar imputação pela **mediana** de um grupo comparável pode reduzir a influência de valores extremos; antes de adotar o procedimento, é necessário verificar por que os dados faltam e testar o efeito da imputação nos resultados.

---

## 7. Questões inéditas no padrão Cebraspe (C/E)

### Item 1
> **Assertiva:** No processo de preparação e transformação de dados (ETL), a substituição de valores ausentes em uma distribuição de renda altamente assimétrica deve ser realizada preferencialmente pela mediana dos valores observados, uma vez que a média aritmética é sensível à presença de valores extremos (*outliers*).
>
> **Gabarito:** **CERTO**  
> **Comentário:** A mediana é menos sensível a valores extremos do que a média e pode ser uma escolha introdutória razoável para dados assimétricos. Contudo, nenhuma imputação simples é universalmente adequada: é preciso avaliar o mecanismo de ausência (MCAR, MAR ou MNAR), o objetivo da análise e a perda de variabilidade produzida pela imputação.

### Item 2
> **Assertiva:** O aumento do nível de granularidade de uma base de dados implica uma redução no grau de detalhamento das informações armazenadas, resultando em dados mais sintéticos e tabelas agregadas.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O item inverte o conceito de granularidade. **Maior granularidade** significa maior detalhamento e dados mais atômicos/específicos (ex.: registro de cada transação de compra). **Menor granularidade** significa dados mais resumidos, agregados e sintéticos (ex.: total de compras por ano).

### Item 3
> **Assertiva:** A eliminação sumária de todos os *outliers* identificados pelo método do Intervalo Interquartil (IQR) é um procedimento padrão obrigatório na fase de limpeza de dados, haja vista que tais valores representam invariavelmente erros de digitação ou corrupção de arquivos.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Nem todo *outlier* é erro ou ruído a ser descartado. Em auditorias, fraudes fiscais, cibersegurança ou análises de políticas públicas, o *outlier* pode representar exatamente o evento de maior interesse analítico (ex.: um pagamento atípico suspeito de corrupção ou um ataque cibernético). A exclusão mecânica de outliers destrói o fenômeno a ser investigado.

### Item 4
> **Assertiva:** De acordo com o framework DAMA-DMBOK, a dimensão de qualidade de dados denominada completude (*completeness*) refere-se ao grau em que os valores armazenados retratam com fidelidade a realidade física do mundo real, independentemente da presença de registros omissos ou campos nulos.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** O enunciado define a dimensão de **Exatidão (*Accuracy*)**, e não de completude. A **Completude (*Completeness*)** diz respeito especificamente à ausência de campos nulos, omissões ou lacunas no conjunto de dados (se todos os dados esperados foram efetivamente registrados).

### Item 5
> **Assertiva:** No paradigma moderno de manipulação de dados em Data Lakes denominado ELT (*Extract, Load, Transform*), os dados brutos são extraídos das fontes e carregados diretamente no repositório antes da execução das transformações e limpezas analíticas.
>
> **Gabarito:** **CERTO**  
> **Comentário:** Essa é a essência do ELT. Diferentemente do ETL clássico (onde a transformação ocorre em uma área de *staging* intermediária antes da carga no Data Warehouse), no ELT os dados são ingeridos rapidamente em sua forma original no Data Lake, aproveitando o poder computacional distribuído do destino para realizar as transformações sob demanda.

### Item 6
> **Assertiva:** A dimensão de qualidade de dados conhecida como consistência verifica se os dados armazenados em determinado repositório estão em conformidade com o formato sintático e as restrições de tipo de dados definidas pelo esquema do banco.
>
> **Gabarito:** **ERRADO**  
> **Comentário:** Respeito a **formato, tipo e domínio** corresponde frequentemente à dimensão **validade (*validity*)**. **Consistência (*consistency*)** pode tratar coerência entre registros, tabelas e regras de negócio. As dimensões de qualidade variam conforme a taxonomia e podem se sobrepor; não é correto tratar validade e consistência como mutuamente exclusivas em todo framework. O gabarito ERRADO é mantido em leitura da distinção didática adotada no artigo, mas exige referência ao padrão específico antes de homologação externa.

---

## 8. Referências conceituais e normativas

1. **DAMA INTERNATIONAL.** *DAMA-DMBOK: Data Management Body of Knowledge.* 2nd ed. Technics Publications, 2017.
2. **KIMBALL, Ralph; CASERTA, Joe.** *The Data Warehouse ETL Toolkit: Practical Techniques for Extracting, Cleaning, Conforming, and Delivering Data.* Wiley, 2004.
3. **WICKHAM, Hadley.** *Tidy Data.* Journal of Statistical Software, 59(10), 2014.
4. **BRASIL. Tribunal de Contas da União.** *Orientações para Governança e Gestão de Dados Públicos.* Brasília: TCU, 2022.
5. **CÂMARA DOS DEPUTADOS.** *Manual de Abertura e Qualidade de Dados Legislativos.* Brasília: Centro de Informática (Cenin), 2023.

> **Revisão editorial (11/11/2026):** correções dirigidas às ressalvas da auditoria da Câmara, preservando as distinções técnicas e evitando universalizar heurísticas. Questões inéditas ainda não homologadas como questões oficiais da banca.

> **Auditoria C/E, segunda passagem (11/11/2026):** Q1–Q6 preservam respostas de leitura dirigida (C, E, E, E, C, E). Item 6 sob ressalva por sobreposição terminológica de dimensões de qualidade; a nomenclatura deve ser ancorada no framework utilizado pelo enunciado.
