---
articleId: art-7e9c4a1d68b24f30
articleAliases: ["3 - Materias/Avaliacao de Politicas Publicas/05 - identificacao causal e avaliacao economica.md"]
title: "Identificação causal e avaliação econômica"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-05
aliases:
  - "Contrafactual e avaliação de impacto"
  - "Diferenças em diferenças, regressão descontínua e pareamento"
  - "Análise custo-benefício e custo-efetividade"
---

# Identificação causal e avaliação econômica

## Núcleo do conceito

Uma política pode ter sido executada, os indicadores podem ter melhorado e, ainda assim, **não ser possível atribuir essa melhora à política**. A pergunta de identificação causal é: **o que teria ocorrido com as mesmas pessoas, organizações ou territórios na ausência da intervenção?** A resposta é o **resultado contrafactual**, que não pode ser observado simultaneamente ao resultado sob tratamento para a mesma unidade e período. A avaliação de impacto procura estimá-lo com um grupo, regra de atribuição ou desenho de pesquisa defensável.

A análise econômica responde a uma pergunta diferente: **os benefícios ou resultados justificam os recursos sacrificados, em comparação com alternativas?** Uma política com efeito causal positivo pode ter custo excessivo; outra pode custar menos por resultado, mas distribuir benefícios de forma desigual. Impacto, economicidade e equidade precisam de evidências próprias.

Na CGU 2026 (Cebraspe, C/E), os subitens 5.1, 5.2 e 5.3 de **Políticas públicas e métodos de investigação e avaliação** exigem interpretação aplicada, hipóteses e ameaças à validade. Esta nota é uma base conceitual para estudo; publicação **não** constitui validação de aprendizagem nem auditoria de todas as fontes.

## Contrafactual, seleção e confundimento (5.1)

Para uma unidade, denote por **Y(1)** o resultado com a política e por **Y(0)** o resultado sem ela. O efeito individual é `Y(1) - Y(0)`, mas apenas um desses estados é observado. Uma estimativa de impacto compara resultados observados com um contrafactual estimado. O **efeito médio sobre os tratados (ATT)** é a média de `Y(1) - Y(0)` entre quem efetivamente recebeu a intervenção; difere do efeito médio na população (ATE).

**Viés de seleção:** participantes e não participantes podem ter características diferentes antes da política. Exemplo: famílias mais motivadas procuram reforço escolar e, independentemente do programa, tenderiam a ter maior presença em aulas. Comparar médias finais confundiria motivação com efeito do reforço.

**Confundimento:** uma variável afeta tanto o recebimento da política quanto o resultado, produzindo associação sem a interpretação causal pretendida. Um novo diretor pode aumentar simultaneamente adesão ao programa e qualidade do ensino. **Causalidade reversa** é outro risco: municípios com indicadores ruins podem ser escolhidos justamente para receber intervenção.

**Regressão à média:** unidades selecionadas após resultado excepcionalmente ruim tendem a apresentar valores menos extremos mesmo sem intervenção. **Tendência temporal e choques externos:** um aumento geral de renda ou mudança de regra pode alterar os resultados no mesmo período. Medir antes e depois ajuda a compreender tendências, mas **não resolve sozinho** a ausência de contrafactual.

### Experimentos e quase experimentos

**Experimento aleatorizado:** quando a atribuição ao tratamento é realmente aleatória e o desenho é bem executado, grupos são comparáveis *em expectativa* quanto a características observadas e não observadas. Amostras pequenas, perdas de seguimento, contaminação, descumprimento da atribuição e interferência entre unidades podem comprometer interpretação. O efeito da **oferta/atribuição** (intention-to-treat, ITT) não é necessariamente igual ao efeito de efetivamente participar; comparar apenas quem aderiu pode reintroduzir seleção.

**Quase experimento:** usa uma fonte de variação que possibilita comparação causal plausível sem randomização individual, como regra de corte, mudança de política ou grupos com trajetórias comparáveis. A ausência de sorteio **não implica** automaticamente que o desenho seja inválido; tampouco um método estatístico, por si só, elimina viés. O ponto decisivo são as **hipóteses de identificação** e sua plausibilidade empírica e institucional.

**Grupo de comparação** não equivale necessariamente a grupo aleatório, e não é automaticamente um contrafactual adequado. **Linha de base** é a medida anterior à intervenção, útil para examinar equilíbrio, tendências e mudanças; em certos desenhos ela é fundamental, mas não substitui verificação das hipóteses.

## Diferenças em diferenças (DiD): mudanças, não níveis (5.2)

**Ideia:** comparar a mudança do resultado do grupo tratado com a mudança do grupo de comparação no mesmo intervalo:

`DiD = (Y_tratado,depois - Y_tratado,antes) - (Y_comparação,depois - Y_comparação,antes)`.

| Grupo | Antes | Depois | Mudança |
| :--- | ---: | ---: | ---: |
| Com programa | 40 | 58 | +18 |
| Sem programa | 35 | 45 | +10 |

O estimador DiD é **18 - 10 = 8 pontos**. A diferença final entre grupos é 13 pontos (58 - 45), e a diferença inicial é 5 pontos (40 - 35); **13 - 5 = 8**. Dizer que o impacto é 18 ou 13 confunde mudança bruta ou diferença final com mudança líquida.

**Hipótese decisiva: tendências paralelas contrafactuais.** Na ausência da política, a evolução média dos tratados teria acompanhado a evolução dos controles. Não é necessário que os níveis iniciais sejam iguais. Observar tendências semelhantes **antes** reforça a plausibilidade, mas não prova que continuariam paralelas sem a política.

**Ameaças:** choque simultâneo exclusivo dos tratados, antecipação do tratamento, mudança seletiva na composição dos grupos e política concorrente. Com implementação escalonada e efeitos heterogêneos ao longo do tempo, uma regressão convencional com efeitos fixos de grupo e período pode combinar comparações inadequadas: é necessário verificar estimador e desenho, não aplicar automaticamente a fórmula simples.

**Como julgar:** a constatação de duas séries ascendentes não basta; identificar o que torna plausível que a comparação represente a evolução sem o programa.

## Regressão descontínua (RDD): perto do limiar (5.2)

Uma política concede benefício a municípios com índice de vulnerabilidade **acima de 70**. O método compara unidades com valores **imediatamente de um lado e do outro do corte** (por exemplo, 69,8 e 70,2), que podem ser semelhantes em características relevantes. Uma descontinuidade no resultado em torno do limiar pode indicar efeito causal **local**.

**Hipóteses:** na ausência do tratamento, os resultados potenciais deveriam variar de maneira contínua no índice ao redor do corte; não deve existir manipulação precisa do indicador que determina elegibilidade. Também é necessário examinar outras políticas ou regras que mudem no mesmo limiar. Escolha de janela (bandwidth), especificação e observações muito próximas ao corte influenciam precisão e robustez.

**Desenho nítido (sharp):** cruzar o limiar determina perfeitamente o tratamento. **Desenho difuso (fuzzy):** o limiar altera a probabilidade de tratamento, sem atribuição perfeita; a interpretação causal do efeito de receber o tratamento requer hipóteses adicionais, semelhantes às de variável instrumental.

**Limite:** efeito estimado perto do limiar não autoriza afirmar o mesmo efeito para municípios muito pobres ou muito ricos, longe do corte. Também não é válido chamar de RDD toda comparação entre elegíveis e não elegíveis sem examinar descontinuidade e manipulação.

## Pareamento: semelhança observável e limites (5.2)

**Pareamento (matching)** busca unidades não tratadas semelhantes às tratadas segundo variáveis observadas antes do programa: por exemplo, porte, renda inicial e escolaridade. O **escore de propensão** é a probabilidade estimada de receber o tratamento dadas essas covariáveis; parear escores não prova equivalência em fatores não medidos.

**Hipóteses importantes:** (a) não haver confundimento relevante **não observado**, condicional às covariáveis escolhidas (ignorabilidade condicional); (b) existir **sobreposição ou suporte comum**, isto é, tratados encontrarem controles plausíveis com perfis comparáveis. Incluir variável afetada pelo tratamento ou selecionar controles por resultados posteriores pode criar viés.

Após parear, verificar equilíbrio das covariáveis e perda de observações sem correspondência. A melhora do equilíbrio nas características observáveis **não resolve** automaticamente motivação, capacidade administrativa ou choques não medidos. Pareamento e DiD podem ser combinados, mas as respectivas hipóteses ainda precisam ser avaliadas.

### Verificação metodológica dirigida: testes de identificação, não certificados de causalidade

A [síntese do Banco Mundial sobre estudos de eventos e diferenças em diferenças](https://blogs.worldbank.org/en/impactevaluations/econometrics-sandbox-event-study-designs-co) explicita um risco especialmente útil: **tendências anteriores aparentemente paralelas podem coexistir com viés quando a política é atribuída em resposta a choques contemporâneos não observados no período prévio**. Portanto, verificar tendências prévias é um diagnóstico de plausibilidade, não prova lógica de validade futura. Um *placebo* sem efeito aparente reduz algumas preocupações, mas não elimina todos os confundidores.

O [material do BID sobre métodos de avaliação de impacto](https://publications.iadb.org/publications/english/document/Development-Effectiveness-Overview-%28DEO%29-2010.pdf) distingue o grupo de comparação construído por mudança temporal, proximidade de um limiar e semelhança de características observadas. A escolha depende da fonte de variação, da seleção para tratamento e de pressupostos passíveis de exame.

| Desenho | Verificação dirigida | O que a verificação não assegura |
| :--- | :--- | :--- |
| **DiD** | Trajetórias prévias, choques simultâneos, antecipação, composição dos grupos | Tendências contrafactuais futuras comprovadas |
| **RDD** | Distribuição do índice perto do corte, covariáveis e outras regras no mesmo limiar | Validade para unidades distantes do corte |
| **Pareamento** | Equilíbrio das covariáveis **pré-tratamento**, suporte comum e exclusão de variáveis pós-tratamento | Ausência de confundidores não medidos |

**Item C/E inédito.** Em diferenças em diferenças, a existência de trajetórias paralelas nos períodos observados antes da política é suficiente para demonstrar a hipótese de tendências paralelas contrafactuais nos períodos posteriores.

**Gabarito: Errado.** O dado histórico pode apoiar a hipótese, mas o contrafactual pós-intervenção não é observado e pode ser alterado por choques e seleção. O erro é trocar **evidência favorável à plausibilidade** por **prova da hipótese**.

## Auditoria metodológica: adoção escalonada, RDD difusa e pareamento

### Diferenças em diferenças com adoção escalonada

Na versão simples de DiD, há dois grupos e dois períodos. Em implantação escalonada, municípios entram em uma política em **anos diferentes**. Um modelo de efeitos fixos de unidade e tempo (*two-way fixed effects*, TWFE) pode comparar municípios tratados cedo com municípios tratados depois, inclusive em períodos nos quais ambos já recebem tratamento. Quando o efeito varia por coorte ou tempo desde a entrada, esses contrastes podem distorcer o efeito médio de interesse.

**Goodman-Bacon (2021)** demonstra que o estimador TWFE pode ser decomposto em comparações DiD de dois grupos e dois períodos, com pesos que, em certas situações de heterogeneidade temporal, produzem estimativa difícil de interpretar como média dos efeitos causais. **Callaway e Sant'Anna (2021)** propõem estimar efeitos específicos por **coorte de entrada** e **período**: `ATT(g,t)`, em que `g` é a primeira data de tratamento e `t` o período observado. Essas estimativas podem depois ser agregadas com pesos e população-alvo explicitados.

**Exemplo:** municípios A entram no programa em 2024, B em 2026 e C não entram até 2027. Em 2025, B pode servir como controle ainda não tratado de A se as hipóteses forem plausíveis. Em 2027, A já tratado não é automaticamente um controle válido do início do tratamento de B, porque seu próprio efeito pode continuar evoluindo.

**Fronteiras importantes:** (a) escalonamento **não invalida por si só** uma avaliação; (b) testar tendências prévias não prova tendências contrafactuais; (c) grupos "ainda não tratados" e "nunca tratados" podem ser comparadores pertinentes, mas a escolha depende de antecipação, disponibilidade e pressupostos; (d) não basta calcular um coeficiente TWFE e chamá-lo de ATT médio sem avaliar heterogeneidade, composição e ponderação.

### Regressão descontínua difusa (*fuzzy RDD*)

Na RDD **nítida**, a passagem pelo corte altera a probabilidade de tratamento de 0 para 1. Na **difusa**, cruzar o corte altera a probabilidade, mas parte dos elegíveis pode não aderir e parte dos inelegíveis pode receber o programa. Logo, a descontinuidade observada no resultado mede inicialmente o efeito da **regra de elegibilidade ou oferta**, e não automaticamente o efeito de efetivamente receber a intervenção.

Em uma RDD difusa com condições instrumentais adequadas, o efeito causal local para **aderentes induzidos pelo corte** (*compliers*) pode ser estimado pela razão entre a descontinuidade no resultado e a descontinuidade na probabilidade de tratamento:

`Efeito local ≈ salto no resultado / salto na participação`.

**Exemplo hipotético:** imediatamente junto ao limiar, a taxa de participação aumenta de 20% para 70% (salto de 0,50), enquanto a aprovação aumenta de 60% para 64% (salto de 0,04). A razão é **0,04 / 0,50 = 0,08**, isto é, oito pontos percentuais de efeito local estimado da participação para os aderentes induzidos pela regra, **somente** se forem sustentadas as condições de continuidade, relevância do salto, exclusão de outros canais relevantes, monotonicidade quando exigida e ausência de manipulação que invalide a comparação. O salto bruto de quatro pontos percentuais não deve ser confundido com essa estimativa.

**Atenção:** se o corte também desencadeia outra política que afeta aprovação, a razão pode deixar de identificar o efeito isolado da intervenção. Se a probabilidade de tratamento quase não muda, a identificação é fraca. Uma estimativa local não é uma previsão para toda a população.

### Pareamento e confundimento não observado

O pareamento tenta equilibrar características **medidas antes da intervenção**. Com suporte comum e hipótese de ausência de confundimento não observado condicionada às covariáveis, pode aproximar um contrafactual. O escore de propensão é uma ferramenta para organizar a comparação; não é um certificado de causalidade.

**Exemplo:** dois municípios possuem renda, tamanho e indicador educacional semelhantes, mas apenas um tem diretor escolar excepcionalmente eficaz. Se a capacidade desse diretor influencia adesão e aprendizagem, e não foi medida, o pareamento não remove esse confundimento. Desse modo, **equilíbrio estatístico das variáveis observadas é necessário à credibilidade do pareamento, mas não prova ignorabilidade condicional**.

**Três verificações complementares:** (1) qualidade dos dados e temporalidade das covariáveis, evitando ajuste por variáveis afetadas pela política; (2) suporte comum e equilíbrio após parear; (3) análise de sensibilidade a confundimento não observado e coerência com conhecimento substantivo. Combinar pareamento com DiD pode lidar com certas diferenças de nível observadas e tendências, mas as hipóteses causais de ambos permanecem necessárias.

### Quadro de discriminação para itens C/E

| Afirmação | Julgamento | Razão |
| :--- | :--- | :--- |
| Implantação em diferentes anos inviabiliza qualquer DiD | **Errada** | Há estimadores para grupos e tempos distintos, sob hipóteses explícitas |
| Na RDD difusa, o salto do resultado equivale sempre ao efeito de receber tratamento | **Errada** | O salto bruto refere-se à regra; o efeito do tratamento exige outras hipóteses e ajuste pelo salto na participação |
| Pareamento equilibra automaticamente características não observadas | **Errada** | O método usa características observadas e depende de hipótese não testável diretamente |
| Controles ainda não tratados podem contribuir em DiD escalonada | **Certa, com condições** | É preciso examinar ausência de antecipação, comparabilidade, período e pressupostos |

### Questões comentadas: inéditas C/E

**Item 4.** Em uma política implantada em anos diferentes, um modelo convencional de efeitos fixos de unidade e período pode produzir um coeficiente que não corresponde à média causal pretendida quando os efeitos variam entre coortes e ao longo do tempo.

**Gabarito: Certo.** O modelo pode incorporar comparações com unidades já tratadas e ponderações inadequadas à média almejada. O problema é de interpretação e identificação, não uma proibição geral de DiD.

**Item 5.** Em regressão descontínua difusa, uma descontinuidade na probabilidade de receber o programa pode ser explorada para identificar efeito local sobre aderentes induzidos pelo corte, desde que condições adicionais sejam satisfeitas.

**Gabarito: Certo.** A interpretação do salto do resultado como efeito de receber tratamento depende de hipóteses instrumentais e do salto da participação, além da continuidade do desenho.

**Item 6.** Após pareamento por escore de propensão, o equilíbrio entre renda e escolaridade observadas torna desnecessário investigar a possibilidade de fatores não mensurados influenciarem tratamento e resultados.

**Gabarito: Errado.** O pareamento não controla automaticamente fatores não observados, e equilíbrio observável não demonstra ausência de confundimento residual.

**Fontes específicas desta auditoria:**
- Goodman-Bacon, A. (2021). [*Difference-in-Differences with Variation in Treatment Timing*](https://doi.org/10.1016/j.jeconom.2021.03.014), *Journal of Econometrics*, 225(2), 254–277.
- Callaway, B.; Sant'Anna, P. H. C. (2021). [*Difference-in-Differences with Multiple Time Periods*](https://doi.org/10.1016/j.jeconom.2020.12.001), *Journal of Econometrics*, 225(2), 200–230.
- Banco Mundial, [*Regression Discontinuity*, DIME Wiki](https://dimewiki.worldbank.org/Regression_Discontinuity), seção *Fuzzy vs. Sharp Design*.
- Banco Mundial e BID, [*Impact Evaluation in Practice*, 2ª edição, capítulos 6 a 8](https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice).

**Limite:** as fontes corroboram as distinções conceituais centrais. Os números são didáticos e o texto não substitui especificação de estimadores, diagnóstico de hipóteses em dados reais ou validação de proficiência.

## Comparação dos desenhos

| Método | O que aproxima o contrafactual | Hipótese ou limitação crítica |
| :--- | :--- | :--- |
| Ensaio aleatorizado | Sorteio de atribuição | Integridade da randomização, perdas, adesão, interferências |
| DiD | Mudança em grupo comparável | Tendências paralelas na ausência da política |
| RDD | Unidades vizinhas ao corte | Continuidade dos potenciais resultados e ausência de manipulação precisa |
| Pareamento | Semelhança em características medidas antes | Confundidores relevantes observados e suporte comum |
| Antes/depois simples | A mesma unidade em momentos distintos | Sem controle dos choques, não identifica impacto por si só |

**Validade interna** diz respeito à credibilidade causal da estimativa no contexto estudado. **Validade externa** diz respeito à extensão a outras populações, lugares e períodos. Um RDD pode ter boa validade interna junto ao corte e baixa generalização para os demais grupos. Estatística precisa não corrige identificação inadequada.

## Custo-benefício, custo-efetividade e oportunidade (5.3)

### Análise de custo-benefício (ACB)

Compara **custos e benefícios expressos em unidades monetárias**, em geral considerados ao longo do tempo e trazidos a valor presente por uma taxa de desconto justificada. Para valor presente de benefícios `VP(B)` e custos `VP(C)`:

- **Valor presente líquido social (VPL):** `VP(B) - VP(C)`.
- **Razão benefício/custo:** `VP(B) / VP(C)`, quando aplicada com critérios consistentes de custos e benefícios.

Exemplo hipotético simplificado, com valores já trazidos a presente: benefícios R$ 15 milhões, custos R$ 12 milhões. VPL = **R$ 3 milhões** e razão benefício/custo = **1,25**. Há benefício líquido social positivo sob as estimativas usadas; isso não prova distribuição equitativa dos benefícios, financiamento viável, causalidade da estimativa de impactos ou ausência de efeitos não monetizados. Razões podem ser sensíveis à classificação de itens como benefícios ou reduções de custo; VPL costuma ser critério mais robusto de comparação entre projetos mutuamente exclusivos sob orçamento e escopo definidos.

**Custo de oportunidade:** valor da melhor alternativa sacrificada ao usar o recurso. É um conceito **econômico**, distinto do valor desembolsado no orçamento. Trabalho voluntário, terreno próprio e tempo dos usuários podem ter custo de oportunidade, ainda que não gerem despesa financeira. **Transferências** entre grupos podem alterar distribuição sem representar automaticamente custo líquido de recursos para a sociedade; é preciso definir perspectiva e evitar dupla contagem.

### Análise de custo-efetividade (ACE)

Compara custos com **resultados em unidades não monetárias**, como abandono escolar evitado, anos de vida saudável ou casos prevenidos. Não exige atribuir preço em reais a cada resultado; exige **mesma medida de efeito e denominador comparável**.

| Alternativa hipotética | Custo | Evasões evitadas | Custo médio por evasão evitada |
| :--- | ---: | ---: | ---: |
| A | R$ 1.200.000 | 120 | R$ 10.000 |
| B | R$ 1.500.000 | 180 | R$ 8.333,33 |

B tem **menor custo médio por resultado**, embora maior custo total. Comparando B com A, o **custo-efetividade incremental (ICER)** é `(1.500.000 - 1.200.000)/(180 - 120) = R$ 5.000 por evasão adicional evitada`. Esse valor incremental não é a média de B. A decisão depende do orçamento, do valor social da evasão evitada e das restrições. Se B custasse menos e evitasse mais evasões, **dominaria** A nessa comparação, desde que qualidade, horizonte e população fossem comparáveis.

**ACB × ACE:** na ACB os benefícios são monetizados; na ACE os efeitos permanecem em unidades substantivas. Uma ACE com custo por aluno atendido pode descrever apenas entrega: se o objetivo é reduzir evasão, o denominador relevante requer resultados ou efeitos estimados, não apenas volume de atendimento.

### Sensibilidade, heterogeneidade e equidade

**Análise de sensibilidade** modifica pressupostos relevantes, por exemplo taxa de desconto, custo unitário, adesão, vida útil ou tamanho do efeito, para verificar se a conclusão muda. **Cenário** reúne um conjunto plausível de hipóteses; **análise probabilística**, quando apropriada, representa distribuições de incerteza. Resultado estável em vários cenários é mais robusto, mas não transforma dados ruins em bons.

**Heterogeneidade de efeito** significa que o impacto pode diferir por renda, gênero, município, capacidade local ou vulnerabilidade. Uma média nacional positiva pode ocultar impacto nulo ou negativo em parte dos territórios. Subgrupos exigem cuidado com amostras pequenas, comparações múltiplas e testes definidos após observar resultados. **Equidade** considera quem paga e quem recebe benefícios; menor custo médio não define sozinho a decisão pública.

## Caso integrado: dois municípios e duas perguntas

Um município informa que o reforço escolar elevou a frequência de 60% a 75%. Outro município, sem o programa, passou de 62% a 72%. O ganho bruto dos tratados é de 15 pontos; uma DiD simples resulta em **15 - 10 = 5 pontos**, *sob a hipótese de tendências paralelas*. Esse é um candidato a impacto, não uma prova definitiva.

Se o programa custou R$ 200 mil e evitou **20 evasões adicionais atribuíveis** à intervenção, o custo médio por evasão adicional evitada foi R$ 10 mil. A validade dessa razão depende da credibilidade dos 20 efeitos atribuídos, da definição de custos e da ausência de dupla contagem. Trocar 20 evasões evitadas por 100 matrículas atendidas mudaria o objeto do indicador, não apenas o número.

Uma recomendação de expansão precisa ponderar se o grupo de comparação era adequado, se haveria capacidade para manter a intervenção, como o custo varia ao escalar e se regiões de maior vulnerabilidade apresentam outros efeitos.

## Como a Cebraspe pode cobrar

A banca pode apresentar números antes/depois e perguntar por efeito causal, deslocar **tendências paralelas** para a regressão descontínua, afirmar que pareamento elimina confundimento não observado ou extrapolar um efeito local do corte a toda a população. Em análise econômica, pode trocar custo médio por incremental, ACB por ACE ou confundir receita/desembolso com custo econômico.

A indicação de cobrança é **hipótese pedagógica baseada nas fronteiras do programa**, não contagem estatística de incidência em provas reais.

## Questões comentadas: treino inédito C/E

**Item 1.** Em uma avaliação por diferenças em diferenças, a hipótese de tendências paralelas significa que os grupos tratado e de comparação devem apresentar o mesmo nível de resultado antes da implementação.

**Gabarito: Errado.** A hipótese refere-se à **evolução contrafactual** dos grupos, não à igualdade dos valores iniciais. Grupos podem começar em níveis diferentes.

**Item 2.** Em regressão descontínua baseada em limiar de elegibilidade, uma estimativa causal válida junto ao corte pode não representar o efeito da política em unidades muito distantes desse limiar.

**Gabarito: Certo.** A identificação é local. Generalização exige evidência adicional; além disso, a validade perto do corte requer hipóteses como continuidade e ausência de manipulação precisa.

**Item 3.** Se duas alternativas produzem o mesmo tipo de resultado, mas a alternativa B tem custo médio por resultado menor, sua vantagem econômica está demonstrada independentemente de custos incrementais, limite orçamentário, qualidade da entrega e distribuição territorial.

**Gabarito: Errado.** O custo médio é uma informação, não uma decisão automática; comparar alternativas requer examinar efeito incremental, orçamento, comparabilidade e equidade.

## Relações com outros temas

- [[3 - Materias/Avaliacao de Politicas Publicas/01 - teoria da mudanca|Teoria da mudança]]: explicação do mecanismo esperado; não substitui identificação causal.
- [[3 - Materias/Avaliacao de Politicas Publicas/03 - monitoramento e avaliacao de politicas publicas|Monitoramento e avaliação]]: produto, resultado, impacto e atribuição.
- [[3 - Materias/Contabilidade Publica/05 - custos publicos fundamentos e objetos de custo|Custos públicos]]: identificação de custos e objetos, sem equivalência automática a custo-benefício social.
- [[3 - Materias/Comunicacao/17 - pesquisa em comunicacao|Pesquisa em comunicação]]: seleção, medida, amostras e vieses.

## Tensões e pegadinhas

**Efeito observado ≠ efeito causado.** **Grupo semelhante ≠ contrafactual válido sem hipóteses.** **Tendências paralelas ≠ níveis iguais.** **Regressão descontínua ≠ regressão linear comum.** **Pareamento observável ≠ controle do não observado.** **Efeito local ≠ efeito nacional.** **Custo médio ≠ custo incremental.** **Custo contábil ≠ custo de oportunidade social.** **Eficiência média ≠ equidade territorial.**

## Heurísticas

Identifique primeiro a **pergunta** (impacto, entrega, custo, distribuição), depois o **desenho** (sorteio, mudança temporal comparada, limiar, semelhança observada) e, em seguida, a **hipótese que permitiria identificação**. Para números de DiD, calcule duas mudanças e subtraia. Para RDD, procure o corte e a vizinhança. Para pareamento, procure confundidores observados e sobreposição. Em ACE, confira unidade de efeito e diferença entre custo médio e incremental.

## Fontes e limites

- [Edital CGU 2026, Cargo 1, item 15.2.4](https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html): delimitação dos subitens 5.1 a 5.3.
- [World Bank, *Impact Evaluation in Practice*](https://documents1.worldbank.org/curated/en/823791468325239704/pdf/Impact-evaluation-in-practice.pdf): desenhos de impacto e pressupostos (verificar edição e capítulos aplicáveis antes de citações literais).
- [Casa Civil, Avaliação de Políticas Públicas](https://www.gov.br/casacivil/pt-br/assuntos/governanca/avaliacao-de-politicas): referências oficiais aos guias de análise ex ante e ex post.
- [Guia Prático de Análise Ex Ante, Ipea/Casa Civil (2018)](https://www.gov.br/gestao/pt-br/acesso-a-informacao/estrategia-e-governanca/planejamento_estrategico_arquivos/livros_guias_publicacoes/avaliacao-de-politicas-publicas-guia-pratico-de-analise-ex-ante-volume-1-ipea-2018.pdf/%40%40download/file): análise de alternativas e custos-benefícios.

**Confiabilidade:** conceitos e cálculos hipotéticos conferidos aritmeticamente; recomenda-se cotejo metodológico mais fino dos detalhes de identificação, aplicações nacionais e escolhas de taxa de desconto. Não atribuir números ilustrativos a políticas reais.
