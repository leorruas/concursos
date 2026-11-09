---
articleId: art-fbfeb9a2a7fcf639
articleAliases: ["3 - Materias/Ingles/08 - informacoes explicitas inferencias e limites da deducao.md"]
title: "Informações explícitas, inferências e limites da dedução em língua inglesa no padrão Cebraspe"
type: "artigo"
status: "ativo"
created: 2026-11-09
updated: 2026-11-09
concursoId: "camara-2026"
subjectId: "ingles"
unidadeId: "CAM-ING-002"
---

# Informações explícitas, inferências e limites da dedução em língua inglesa no padrão Cebraspe

## 1. Situação-problema: a fronteira sutil entre dedução legítima, probabilidade e extrapolação indevida

Em provas de Língua Inglesa elaboradas pelo Cebraspe para carreiras legislativas, a maior parte dos erros dos candidatos decorre de uma **falha de calibração inferencial**: tratar hipóteses plausíveis ou conhecimentos prévios de mundo como se fossem inferências textualmente autorizadas.

Considere o seguinte trecho sobre processos legislativos e orçamentários:

> *"The finance committee approved the multi-year expenditure framework, but only after inserting a clause that restricts discretionary disbursements whenever annual tax revenues fall short of official forecasts. Although government representatives insisted that this constraint could jeopardize key infrastructure projects, legislative auditors noted that unchecked fiscal deficits had previously triggered severe inflationary pressures."*

Analise três assertivas no estilo C/E formuladas sobre esse trecho:

1. **Assertiva 1 (Informação Explícita / Paráfrase direta):** *"The multi-year expenditure framework was endorsed with a condition that limits discretionary spending in the event of revenue underperformance."*
   * **Julgamento:** **CERTO**. O texto afirma explicitamente que o comitê aprovou (*approved = endorsed*) o marco plurianual com a restrição de liberar gastos discricionários (*discretionary disbursements = discretionary spending*) caso as receitas tributárias fiquem abaixo das previsões (*fall short of official forecasts = in the event of revenue underperformance*). Trata-se de **paráfrase factual fidedigna**.
2. **Assertiva 2 (Inferência Legítima e Fundamentada):** *"It can be inferred from the text that the restriction on discretionary disbursements was introduced as a preventive measure against future inflationary risks stemming from fiscal imbalances."*
   * **Julgamento:** **CERTO**. Os auditores legislativos justificaram a restrição lembrando que déficits descontrolados já haviam desencadeado pressões inflacionárias no passado. A ligação entre a cláusula de contingenciamento e a prevenção do risco inflacionário é uma **inferência necessária e fundamentada** nas evidências textuais.
3. **Assertiva 3 (Extrapolação Indevida / Certeza Inexistente):** *"The text indicates that government infrastructure projects will inevitably be halted during the upcoming fiscal year due to the newly approved clause."*
   * **Julgamento:** **ERRADO (Extrapolação modal e factual)**. O texto diz apenas que representantes do governo insistiram que a restrição **poderia** colocar em risco (*could jeopardize*) projetos-chave de infraestrutura, e que a restrição só opera **se** as receitas ficarem abaixo da previsão (*whenever revenues fall short*). A assertiva transforma uma possibilidade condicional em fato certo e inevitável (*will inevitably be halted*), além de generalizar para todos os projetos de infraestrutura do governo.

Esta unidade aprofunda a **matriz operacional do Cebraspe para validação inferencial em língua inglesa**: o contraste entre informação literal, paráfrase legítima, inferência lógica e extrapolação; os marcadores linguísticos de modalização epistêmica (*hedging*); e os limites da dedução autorizada pelo texto.

---

## 2. A matriz de três camadas: Fato Explícito, Inferência Válida e Suposição/Extrapolação

Para resolver com segurança itens que começam com *"According to the text"*, *"It is stated in the text"*, *"It can be inferred from the text"* ou *"The author implies that"*, o candidato deve separar o enunciado em **três camadas ontológicas**:

```mermaid
flowchart TD
    A["Níveis de Validação Interpretativa no Cebraspe (Inglês)"] --> B["1. Informação Explícita (Factual / Paráfrase)"]
    A --> C["2. Inferência Legítima (Dedução Autorizada)"]
    A --> D["3. Extrapolação / Suposição Indevida (Distrator)"]
    
    B --> B1["Comandos: 'According to the text', 'The text states that'"]
    B --> B2["O texto diz COM TODAS AS LETRAS (paráfrase lexical fiel)"]
    
    C --> C1["Comandos: 'It can be inferred', 'The text implies', 'We can deduce'"]
    C --> C2["O texto NÃO diz expressamente, mas FORNECE PREMISSAS QUE OBRIGAM à conclusão"]
    
    D --> D1["Verdade do senso comum ou conhecimento prévio NÃO contido no texto"]
    D --> D2["Salto indutivo: transformar 'possibilidade' (may/could) em 'certeza' (will/must)"]
    D --> D3["Generalização: transformar 'alguns' (some/many) em 'todos' (all/every)"]

    classDef raiz fill:#fff8e7,stroke:#d4a373,color:#2b2b2b,stroke-width:2px;
    classDef ramo fill:#faedcd,stroke:#d4a373,color:#2b2b2b,stroke-width:1.5px;
    classDef folha fill:#fff8e7,stroke:#d4a373,color:#2b2b2b,stroke-width:1px;

    class A raiz;
    class B,C,D ramo;
    class B1,B2,C1,C2,D1,D2,D3 folha;
```

### 2.1. A regra de ouro da inferência no Cebraspe

> **Regra de Ouro:** Uma inferência só é correta se for **logicamente necessária ou fortemente autorizada pelas premissas do texto**. Se a conclusão depender de uma premissa externa oculta (que você sabe por ser um cidadão bem informado ou jurista, mas que o autor em nenhum momento mencionou), **o item é ERRADO por extrapolação**.

---

## 3. Os ativadores linguísticos de pressuposição e inferência em língua inglesa

Assim como em português, o inglês acadêmico e institucional utiliza marcadores lexicais e gramaticais específicos que embutem pressupostos inquestionáveis:

| Ativador Linguístico em Inglês | Categoria Gramatical | O que o termo torna PRESUPPOSTO / INFERÍVEL | Exemplo no Contexto Legislativo |
| :--- | :--- | :--- | :--- |
| **Change of state verbs** | Verbos de mudança de estado (*stop, cease, discontinue, resume, begin, start*) | A existência ou cessação prévia do estado ou da prática. | *"The committee **stopped** holding closed-door hearings."* $\rightarrow$ **Pressupõe que**, anteriormente, a comissão realizava audiências a portas fechadas. |
| **Iterative adverbs and prefixes** | Advérbios e prefixos iterativos (*again, no longer, still, re-*) | A reiteração ou persistência de um evento ao longo do tempo. | *"The opposition **no longer** boycotts the voting sessions."* $\rightarrow$ **Pressupõe que**, no passado, a oposição boicotava as votações. |
| **Factive verbs and predicates** | Predicados factivos (*realize, acknowledge, regret, be aware of, reveal, expose*) | A verdade incondicional da oração subordinada completiva. | *"The government **acknowledged that** public debt had exceeded legal thresholds."* $\rightarrow$ É **fato verdadeiro e incontroverso** que a dívida ultrapassou o teto. |
| **Definite descriptions and cleft sentences** | Descrições definidas e estruturas clivadas (*It was X that...*) | A existência e unicidade do referente ou do agente exclusivo. | *"It was **the audit report** that prompted the parliamentary inquiry."* $\rightarrow$ **Pressupõe que** uma investigação foi aberta e que o estopim foi o relatório de auditoria. |
| **Counterfactual conditionals** | Orações condicionais contrafactuais (*Third Conditional: If + had + past participle, would have...*) | O fato real ocorrido no passado foi o **oposto** da hipótese formulada. | *"If the speaker **had pauted** the bill, it **would have passed**."* $\rightarrow$ **Fato real inferível:** o presidente **não pautou** o projeto, e o projeto **não foi aprovado**. |

---

## 4. O sistema de *Hedging* e a calibração modal: certeza, probabilidade e possibilidade

Em prosa científica e em relatórios internacionais, os autores evitam afirmações categóricas absolutas, recorrendo à técnica do **hedging** (linguagem de reserva epistêmica, cautela ou moderação). O Cebraspe ataca impiedosamente o candidato que não percebe essa gradação:

```mermaid
flowchart LR
    A["Escala de Força Epistêmica (Do Mais Cauteloso ao Categórico)"]
    
    A1["1. Possibilidade Fraca / Hipótese"] --> A2["2. Probabilidade / Expectativa Plausível"] --> A3["3. Certeza Factual / Consequência Inevitável"]
    
    A1 --- B1["may, might, could, possibly, conceivably, suggests, plausible"]
    A2 --- B2["likely, probable, should, ought to, tends to, presumably, expected to"]
    A3 --- B3["will, must, definitely, inevitably, establishes, proves, conclusively"]

    classDef escala fill:#fff8e7,stroke:#d4a373,color:#2b2b2b,stroke-width:1.5px;
    classDef termos fill:#faedcd,stroke:#d4a373,color:#2b2b2b,stroke-width:1px;

    class A1,A2,A3 escala;
    class B1,B2,B3 termos;
```

### 4.1. Como o Cebraspe fabrica distratores mudando o *Hedging*

| No Texto Original (Cauteloso) | Na Assertiva da Prova (Distorcida) | Veredito e Justificativa no Cebraspe |
| :--- | :--- | :--- |
| *"The adoption of AI tools **may improve** document retrieval."* | *"The adoption of AI tools **will necessarily enhance** document retrieval."* | **ERRADO.** Trocou possibilidade fraca (*may*) por certeza inelutável (*will necessarily*). |
| *"Evidence **suggests** a link between transparency and lower corruption."* | *"The text **proves** that transparency eliminates corruption."* | **ERRADO.** Trocou indício sugestivo (*suggests*) por prova cabal (*proves*), e atenuou a relação causal para erradicação total (*eliminates*). |
| *"Voters **tend to punish** politicians who violate fiscal pledges."* | *"Politicians who violate fiscal pledges **are always rejected** at the polls."* | **ERRADO.** Trocou tendência estatística (*tend to*) por regra universal invariável (*always*). |
| *"Disinformation **can potentially undermine** electoral legitimacy."* | *"Electoral legitimacy **has already been destroyed** by disinformation."* | **ERRADO.** Trocou risco potencial futuro/abstrato (*can potentially*) por dano consumado (*has already been destroyed*). |

---

## 5. Relações de causalidade versus mera correlação no discurso analítico

Uma das principais falácias conceituais cobradas pelo Cebraspe em compreensão de textos é a confusão entre **coocorrência temporal (correlação)** e **relação de causa e efeito (causalidade)**:

* **Conectores e verbos de CAUSALIDADE ESTRITA:**
  * *causes, triggers, drives, leads to, results in, accounts for, is attributable to, stems from, because of, due to, owing to, as a result of*.
* **Conectores e verbos de MERA CORRELAÇÃO / COEXISTÊNCIA:**
  * *is associated with, is linked to, correlates with, accompanies, coincides with, is observed alongside, occurs in tandem with*.
* **A armadilha clássica:** Se o texto diz que *"The increase in digital consultations **coincided with** higher legislative amendments"*, o autor constatou que os dois fenômenos ocorreram na mesma época. Afirmar no item que *"The rise in digital consultations **caused** the increase in legislative amendments"* é **ERRADO**, pois correlação não autoriza deduzir causalidade direta.

---

## 6. Caso prático progressivo: leitura analítica e dedução em relatório institucional

Considere o seguinte excerto inspirado em relatórios da OCDE sobre parlamentos digitais:

> *(Text for items 1 through 6)*
> 
> "A comprehensive assessment of open parliament initiatives across fifteen democracies reveals that making legislative voting records publicly available online does not, by itself, translate into higher civic trust. Although digital accessibility substantially increased website traffic and media citations, public surveys conducted three years after implementation showed no statistically significant shift in citizens' overall perception of political integrity. Analysts point out that when transparency reveals systemic legislative gridlock or partisan acrimony without providing avenues for substantive citizen participation, it may paradoxically heighten public cynicism. Therefore, transparency mechanisms achieve democratic legitimacy only when coupled with institutional responsiveness and genuine deliberative channels."

### Desmontagem lógica e semântica:
1. **Fato constatado:** Publicar votações na internet aumentou tráfego e citações na imprensa (*explícito*), mas **não** produziu aumento na confiança pública (*explícito*).
2. **Hipótese explicativa dos analistas:** Quando a transparência apenas expõe paralisia ou briga partidária sem dar canais reais de participação, ela **pode paradoxalmente aumentar o cinismo público** (*possibilidade/risco*: *"may paradoxically heighten"*).
3. **Conclusão normativa:** A transparência só atinge legitimidade democrática **se for associada a** responsividade e deliberação (*condição necessária* introduzida por *"only when coupled with"*).

---

## 7. Itens comentados no padrão Cebraspe (Certo/Errado)

*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*
> **Com base no texto acima, julgue os itens a seguir:**

**Item 1.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* According to the text, publishing legislative voting records online led to an immediate increase in website traffic and media coverage, but failed to generate a measurable improvement in citizens' trust in political institutions.
* **Gabarito:** **CERTO**.
* **Fundamentação:** Paráfrase rigorosa e perfeita das informações explícitas do primeiro período: o texto afirma que a acessibilidade digital *"substantially increased website traffic and media citations"* (tráfego e cobertura da mídia), mas pesquisas mostraram *"no statistically significant shift in citizens' overall perception of political integrity"* (falha em gerar melhora mensurável na percepção/confiança).

**Item 2.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* It can be correctly inferred from the passage that unmediated exposure to legislative gridlock is guaranteed to produce public cynicism in any democratic society.
* **Gabarito:** **ERRADO**.
* **Fundamentação:** Distrator clássico de quebra de *hedging*: o texto afirma com cautela que expor o impasse legislativo sem participação *"may paradoxically heighten public cynicism"* (pode paradoxalmente aumentar o cinismo). A assertiva substitui a possibilidade atenuada (*may*) por uma certeza universal categórica (*"is guaranteed to produce ... in any democratic society"*).

**Item 3.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* The author implies that digital transparency, in the absence of substantive institutional responsiveness, can have counterproductive consequences for democratic perceptions.
* **Gabarito:** **CERTO**.
* **Fundamentação:** Inferência legítima e precisa. O texto sustenta que a transparência isolada *"may paradoxically heighten public cynicism"* (aumentar o cinismo) e conclui que ela só ganha legitimidade *"when coupled with institutional responsiveness"*. Dizer que ela pode ter consequências contraproducentes (*counterproductive consequences*) para a percepção democrática é a síntese exata da inferência autorizada pelo autor.

**Item 4.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* Based on the survey findings mentioned in the text, it is correct to conclude that the fifteen surveyed democracies experienced a severe decline in political participation following the launch of open parliament initiatives.
* **Gabarito:** **ERRADO**.
* **Fundamentação:** Extrapolação factual pura. O texto afirma que as pesquisas mostraram *"no statistically significant shift in citizens' overall perception of political integrity"* (isto é, estabilidade na percepção, sem mudança significativa). Não há nenhuma menção no texto a um *"declínio severo na participação política"*. A assertiva inventa um resultado que não existe nos dados apresentados.

**Item 5.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* The phrase "only when coupled with" establishes a necessary condition for transparency mechanisms to achieve democratic legitimacy.
* **Gabarito:** **CERTO**.
* **Fundamentação:** Análise lógico-semântica impecável. A locução condicional restritiva **only when** (apenas quando / somente se) introduz uma **condição estritamente necessária** na lógica proposicional: sem responsividade institucional e canais deliberativos, a legitimidade democrática não é alcançada.

**Item 6.** *(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)* The text demonstrates that media organizations were solely responsible for framing parliamentary data in a negative light, thereby directly causing the stagnation of civic trust.
* **Gabarito:** **ERRADO**.
* **Fundamentação:** Falsa atribuição causal. O texto afirma apenas que as citações na mídia aumentaram (*"increased ... media citations"*); em nenhum momento o texto afirma que a imprensa foi a *"única responsável"* (*solely responsible*) nem que ela distorceu os dados de forma negativa. A explicação apontada pelos analistas reside no próprio funcionamento do parlamento (*"systemic legislative gridlock or partisan acrimony"*) e na falta de canais de participação.

---

## 8. Relações com outros conceitos e notas da biblioteca

* **Como localizar assunto, tese e propósito em textos em inglês:** [[3 - Materias/Ingles/07 - como localizar assunto tese e proposito em textos em ingles|07 • Como localizar assunto, tese e propósito (CAM-ING-001)]].
* **Informação explícita, pressuposto e inferência em Língua Portuguesa (fundamentação teórica de Ducrot):** [[3 - Materias/Portugues/14 - informacao explicita pressuposto e inferencia|14 • Informação explícita, pressuposto e inferência (CAM-LP-003)]].
* **Paráfrase, equivalência e escopo:** [[3 - Materias/Ingles/06 - parafrase equivalencia semantica e escopo|06 • Paráfrase, equivalência semântica e escopo]].
* **Próximo passo na trilha de Inglês (Coesão referencial e referentes de pronomes):** Unidade `CAM-ING-003`.

## 9. Referências teóricas e metodológicas

* HYLAND, Ken. **Hedging in Scientific Research Articles**. Amsterdam: John Benjamins, 1998. (Estudo fundamental sobre modalização epistêmica e atenuação em textos acadêmicos).
* LEVINSON, Stephen C. **Pragmatics**. Cambridge: Cambridge University Press, 1983. (Capítulos sobre Pressuposição e Implicatura Conversacional).
* CEBRASPE. **Cadernos de Questões Comentadas: Língua Inglesa**. Brasília: Cebraspe, 2018–2024.
* SWALES, John M. **Genre Analysis: English in academic and research settings**. Cambridge: Cambridge University Press, 1990.
