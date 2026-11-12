---
title: "Câmara 2026: auditoria integral de Língua Inglesa, Fase 1"
type: "auditoria-materia"
status: "em-curso"
concursoId: "camara-2026"
subjectId: "ingles"
updated: 2026-11-11
---

# Língua Inglesa: Fase 1, diagnóstico e plano de reparos

**Estado em 11/11/2026: EM CURSO.** Apenas auditoria. Nenhum artigo, item, gabarito, ID ou catálogo deve ser alterado nesta fase. Este documento é progressivo e não certifica a disciplina. Frente exclusiva de Inglês: não interferir nos demais relatórios. As notas 01–06 e o hub foram lidos integralmente no bloco 1; as 07–18 foram localizadas e inspecionadas apenas quanto a existência, metadados e títulos de seções, sem leitura crítica completa de texto e exercícios.

## 1. Fontes, regras e limites de verificação

- Governança recuperada: `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, `1 - Planejamento/Camara 2026 - Auditoria integral por materia/Plano e protocolo.md`, `00 - Indice e estado.md`, `01 - Prompt de continuidade.md`; arquitetura conceitual e edital local. Os documentos extensos de governança e o índice geral foram recuperados e consultados em trechos relevantes, sem reivindicar releitura humana exaustiva linha a linha.
- Texto oficial: [Edital nº 1/2026, p. 51 do PDF, item 14.2.3](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades). [Edital nº 5/2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-5-cd-analista-especialidades-de-15-de-outubro-de-2026) e [Edital nº 6/2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-6-cd-especialidades-de-21-de-outubro-de-2026): as retificações publicadas não modificam a seção de Língua Inglesa (a nº 5 altera requisitos do Cargo 1, e tópicos específicos dos cargos 8/9; a nº 6, outros subitens).
- Fonte editorial de pertencimento: `data/catalogo-materias-por-concurso.json`, `contests[concursoId=camara-2026].subjects[subjectId=ingles]`: 18 IDs de artigos e 1 ID de hub, conferidos contra 19 arquivos retornados individualmente pelo conector. O catálogo Dataprev reutiliza 01–06; a Câmara inclui 01–18.
- **Não comprovado:** inexistência de outros artigos de apoio em pastas de Português, Comunicação, técnicas de leitura etc.; somente o conjunto catalogado e os links explicitados foram identificados. A inspeção transversal dos artigos compartilhados e a validação contra provas e gabaritos definitivos da banca continuam pendentes.

## 2. Programa literal e matriz provisória de cobertura

A redação oficial do item 14.2.3 é:

> LÍNGUA INGLESA: 1 Compreensão de textos variados: domínio do vocabulário e da estrutura da língua, ideias principais e secundárias, explícitas e implícitas, relações intratextuais e intertextuais. 2 Itens gramaticais relevantes para compreensão de conteúdos semânticos. 3 Conhecimento e uso das formas contemporâneas da linguagem inglesa.

As subdivisões abaixo são **unidades analíticas da auditoria**, não novos itens literais do edital. Situação `parcial` significa evidência confirmada em 01–06, mas suficiência total ainda não examinada; `pendente` exige leitura integral de 07–18.

| Recorte literal do edital | Habilidade/conceito a avaliar | Notas vinculadas | Estado / ressalva |
| --- | --- | --- | --- |
| 1: `Compreensão de textos variados` | Leitura global e localizada, tese, propósito, tom, gêneros, evidência textual | 01, 07, 08, 18; hub | **Parcial**: 01 possui só um texto de treino integral e item C/E curto; 07/08/18 pendentes |
| 1: `domínio do vocabulário` | Polissemia, classe, coligações, inferência lexical, falsos cognatos, vocabulário contemporâneo | 05, 11; hub | **Parcial**: 05 explica critério e apresenta exemplos; 11 pendente |
| 1: `estrutura da língua` | Negação, oração, relativas, conectivos, voz, tempos, quantificação, equivalência | 02–04, 06, 09, 10, 12–17 | **Parcial**: 02–04/06 examinadas; demais pendentes |
| 1: `ideias principais e secundárias` | Diferenciar proposição central de exemplos, detalhes e funções discursivas | 01, 07, 18 | **Parcial**; 07/18 pendentes |
| 1: `explícitas e implícitas` | Evidência explícita, inferência autorizada, pressuposição, modalização, extrapolação | 01, 04, 06, 08, 15 | **Parcial**; 08/15 pendentes |
| 1: `relações intratextuais e intertextuais` | Referência pronominal, progressão temática, causa, oposição, atribuição e citações | 02, 03, 09, 10, 18 | **Parcial**; dimensão intertextual principalmente pendente |
| 2: `Itens gramaticais relevantes para compreensão de conteúdos semânticos` | Interpretação condicionada por sintaxe, tempo/aspecto, modalidade, passiva, escopo e comparações | 02–04, 06, 09–17 | **Parcial** com erro localizado em 06; testar gramática em texto, não só frase solta |
| 3: `Conhecimento e uso das formas contemporâneas da linguagem inglesa` | Uso real contemporâneo, variação e registro, inglês digital/institucional, interpretação de gêneros atuais | 03, 05, 09, 11, 18 | **Pendente**: existência de tópicos não comprova suficiência de aplicação e variedade de textos |

**Critério final:** fechar cada célula só depois de ler todos os artigos associados, seus exercícios e textos-base; não inferir frequência na banca a partir do edital.

## 3. Inventário efetivo e ordem de leitura

O GitHub retornou conteúdo para os 18 caminhos abaixo e para `ingles.md`. O estado `L` significa texto integral recuperado e avaliado neste bloco; `E`, existência/metadados/seções conferidos, mas auditoria de conteúdo pendente.

| Nº | Caminho dentro de `3 - Materias/Ingles/` | Estado | Relação provável |
| --- | --- | --- | --- |
| Hub | `ingles.md` | L | navegação; conceitos preliminares |
| 01 | `01 - leitura instrumental tese e inferencias.md` | L | 07/08 |
| 02 | `02 - conectivos e relacoes logico semanticas.md` | L | 10 |
| 03 | `03 - referencia pronominal e coesao lexical.md` | L | 09 |
| 04 | `04 - tempos verbais voz passiva e modalizacao.md` | L | 13/14/15 |
| 05 | `05 - vocabulario em contexto e falsos cognatos.md` | L | 11 |
| 06 | `06 - parafrase equivalencia semantica e escopo.md` | L | 16/17 |
| 07 | `07 - como localizar assunto tese e proposito em textos em ingles.md` | E | 01 |
| 08 | `08 - informacoes explicitas inferencias e limites da deducao.md` | E | 01 |
| 09 | `09 - coesao referencial e referentes de pronomes.md` | E | 03 |
| 10 | `10 - conectivos relacoes logicas e sequenciacao discursiva em ingles.md` | E | 02 |
| 11 | `11 - vocabulario contextual polissemia e falsos cognatos em ingles.md` | E | 05 |
| 12 | `12 - estrutura de frases negacao interrogacao e inversao sintatica em ingles.md` | E | 02/06 |
| 13 | `13 - tempos verbais aspecto e sequencia temporal em ingles.md` | E | 04 |
| 14 | `14 - voz ativa passiva e foco informacional em ingles.md` | E | 04 |
| 15 | `15 - modalizacao possibilidade obrigacao deducao e conselho em ingles.md` | E | 04 |
| 16 | `16 - comparativos quantificadores e delimitadores de escopo em ingles.md` | E | 06 |
| 17 | `17 - parafrase equivalencia semantica e mudanca de sentido em ingles.md` | E | 06 |
| 18 | `18 - relacoes intratextuais intertextuais e generos contemporaneos em ingles.md` | E | 01/03 |

**Ordem prevista:** bloco 1: hub + 01–06 (realizado); bloco 2: 07–09; bloco 3: 10–12; bloco 4: 13–15; bloco 5: 16–18; bloco 6: conferência transversal de compartilhados, corpus Cebraspe, inconsistências e matriz fechada. A ordem favorece leitura e inferência antes de sintaxe isolada. Todos os seis artigos antigos incluem exercícios FGV A–E e um item C/E autoral da Câmara; as notas 07–18 têm seções anunciadas de questões Cebraspe, mas cada item, gabarito e explicação ainda precisa ser verificado.

## 4. Auditoria individual: bloco 1, 01–06 e hub

| Arquivo / localização | Diagnóstico localizado | Classificação e intervenção proposta |
| --- | --- | --- |
| `ingles.md`, `## Artigos por unidade` e `## 1. Conectivos e Marcadores Discursivos` | Hub integra 18 notas e funciona como ponto de entrada. Contém lista curta de traduções que convive com explicações mais completas em 02/10. Afirma que conectivos são “altamente cobrados” sem corpus quantitativo apresentado. | **Melhoria / risco de generalização**: substituir a frase por ênfase na função interpretativa, sem estatística; conservar hub como mapa, com aviso de polissemia e fronteiras. |
| `01`, `## Núcleo do conceito`, `## Exemplo: texto original e interpretação`, `## Questão inédita no formato FGV (A–E)` | Distingue tese, assunto, inferência, escopo e estratégias `skimming/scanning`; texto de triagem automática mostra concessão e `may`. Exercícios: alternativa FGV C coerente; C/E **Errado** coerente com `may`. Texto original curto e um único C/E não estabelecem transferência para textos longos e desconhecidos. | **Importante / risco pedagógico**: manter como introdução breve ou integrar seletivamente à 07/08 após revisão. Acrescentar tarefas por texto inédito e inferências encadeadas; não duplicar no estudo da Câmara exercícios FGV como se fossem da banca. |
| `02`, `## Classificação e fronteiras`, `### Polissemia em contexto` | Cobre causa, condição, concessão, contraste e regência de `although/despite`; reconhece `since/while` polissêmicos. Questão FGV B preserva concessão; C/E **Certo** sobre `nevertheless` é defensável. Uso de `unless` com ressalva de escopo é pertinente. Predominam frases construídas, sem reconstrução de argumento extenso. | **Importante / risco**: manter como pré-requisito ou incorporar à 10; exercitar conectores em parágrafos e inversão causal/concessiva. Evitar duas fontes canônicas repetidas. |
| `03`, `## Categorias e exemplos`, `### Orações relativas restritivas e explicativas` | Boa distinção entre anáfora, catáfora, referente proposicional e ambiguidade de `they`. Questão FGV C é coerente com `which` proposicional; C/E **Certo** sobre `this` também. `The auditors, who reviewed the case,` é uma leitura não restritiva plausível, mas exige contexto para justificar grupo definido. | **Melhoria / risco didático**: conservar caso de ambiguidade e criar exercício de rastreamento de referentes em vários parágrafos. Evitar apresentar leituras contextuais como automáticas. Revisar sobreposição com 09. |
| `04`, `## Tempos e aspectos: diferenças decisivas`, `## Modalização: possibilidade, necessidade e inferência` | Explica tempo, aspecto, passiva sem agente e diferença `mustn't/don't have to`. Exercício FGV B e C/E **Certo** são consistentes. As noções de `should` e `must` são prudentemente condicionadas ao contexto, mas aula ampla mistura três sistemas conceituais que ganharam artigos próprios 13–15. | **Importante / risco de redundância**: manter somente como síntese integradora/roteiro de pré-requisitos ou redistribuir entre 13–15; incluir leitura contextual de modalidade, aspecto e responsabilidade. |
| `05`, `## Vocabulário e distinções frequentes`, `### Inferir palavra desconhecida` | Exemplos adequados de `actual/actually`, `claim`, `issue`, `policy`, `oversight`; valor contextual em vez de tradução automática. FGV C correta; C/E **Certo** em `actual expenditure` defensável. O caso textual é apenas uma frase e permite resolver quase tudo por memorização lexical. | **Importante / risco de transferência**: manter conceitos básicos, relacionar com 11 e incorporar teste de significado em textos inéditos, coligações e registro. |
| `06`, `## Fronteiras que decidem a equivalência` | A frase `Only if documents are complete, the request can proceed.` usa `only if` no início sem inversão da oração principal. Em inglês padrão formal, seria `Only if documents are complete can the request proceed`, ou `The request can proceed only if documents are complete`. O exemplo é apresentado como estrutura original correta justamente em material de equivalência. | **CRÍTICO / erro linguístico comprovável**: corrigir em fase posterior; rever comentário que distingue condição necessária e suficiente; examinar se 12 e 17 reproduzem o problema. |
| `06`, `### Condições: if, only if, unless`, `## Questão inédita FGV (A–E)` | A nota diferencia necessidade, suficiência, negação parcial, limiares numéricos, sequência e causalidade. Exercício FGV C e C/E **Errado** são coerentes. A passagem `If a report is approved, it can be published` exige cuidado: `can` exprime possibilidade/permissão contextual, não obrigação. | **Importante / melhoria**: manter cautela sem formalizar implicação lógica mais forte do que o texto permite. Dividir objetivo de quantificadores (16) e paráfrase (17) por autonomia, mantendo 06 como orientação integrada se útil. |

**Conferência dos exercícios do bloco 1:** seis itens FGV A–E (gabaritos C, B, C, B, C, C respectivamente) e seis itens C/E autorais (Errado, Certo, Certo, Certo, Certo, Errado). Os enunciados, alternativas, respostas e comentários foram lidos; não foi identificado erro inequívoco nos gabaritos deste bloco. São exercícios produzidos para estudo e explicitamente identificados como inéditos, **não** questões reais calibradas da Cebraspe. Dificuldade competitiva não mensurada. A construção com `only if` é um erro no corpo do texto didático, não nesses doze gabaritos.

## 5. Achados, severidade e evidência

**ING-001 | CRÍTICO | erro comprovado.** `06 - parafrase equivalencia semantica e escopo.md`, tabela de `## Fronteiras que decidem a equivalência`: inversão obrigatória quando `only if` restritivo abre a oração e focaliza a condição. Reparo posterior: corrigir exemplo em inglês e explicitar diferença entre ordem neutra e inversão, verificando usos documentados em fontes de gramática de referência.

**ING-002 | IMPORTANTE | risco observado.** `01–06`, seções de questões: treino C/E é quase sempre frase única, sem sustentação num texto-base mais longo. Mesmo com gabaritos coerentes, isso pode inflar a impressão de preparo para interpretação de textos inéditos. Teste necessário: quantidade de textos íntegros, variação de gêneros, extensão, itens vinculados ao mesmo texto e justificativa por evidência textual nos artigos 07–18.

**ING-003 | IMPORTANTE | hipótese arquitetural, pendente.** Sobreposições 01↔07/08, 02↔10, 03↔09, 04↔13/14/15, 05↔11, 06↔16/17. A simples coexistência não demonstra redundância indevida: avaliar diferenças reais de autonomia e complexidade após leitura integral das 12 notas.

**ING-004 | IMPORTANTE | risco de calibração.** A biblioteca apresenta questões autorais “no padrão Cebraspe”, mas nenhum item real com prova/cargo/ano/item/gabarito definitivo foi confrontado neste bloco. A alegação de distratores recorrentes, quando feita em planejamento/hub, exige amostra documentada; não afirmar frequência.

**ING-005 | MELHORIA | constatação.** `ingles.md` combina roteador de notas com miniglossário de conectivos e alegação de incidência não documentada. Reorganizar apenas após decidir qual artigo será a fonte canônica.

**ING-006 | IMPORTANTE | hipótese pendente.** O edital exige formas contemporâneas da linguagem inglesa: verificar se os artigos incluem uso real, diversidade de registros/gêneros e variação contextual, e se `18` efetivamente ensina estratégias de uso/leitura, para além de nomenclatura.

## 6. Arquitetura proposta: hipótese de trabalho, não decisão executada

Priorizar três camadas de aprendizagem: (a) **texto completo e tarefas de compreensão** com 07, 08 e 18; (b) **mecanismos de construção do sentido**, 09–11, 12–16; (c) **checagem de equivalência e limites de inferência**, 17 e revisão aplicada. As seis notas antigas devem ser avaliadas como pré-requisitos concisos/rotas para Dataprev (FGV), ou ter conteúdo fundido às novas com preservação dos IDs e redirecionamentos. Não decidir fusão ou exclusão antes do cotejo 07–18, nem misturar técnicas de prova de bancas diferentes. Projetar ao menos um conjunto transversal de leitura de textos inéditos com múltiplos itens C/E de inferência, tese, pronomes, conectores e vocabulário; não fabricar alegação de prova real.

**Prioridade de reparo preliminar:** (1) corrigir erro de `only if` no futuro ciclo autorizado; (2) concluir 07–18 e conferir todos os itens/gabaritos; (3) verificar textos autênticos e formar matriz de leitura em textos novos; (4) validar com cadernos e gabaritos definitivos do Cebraspe; (5) decidir mapa de deduplicação e só então planejar edições. Esforço e impacto são relativos, não estimativas de horas de estudo ou de incidência.

## 7. Checkpoint 1: 11/11/2026

**Arquivos lidos integralmente e avaliados:** `3 - Materias/Ingles/ingles.md`; `01 - leitura instrumental tese e inferencias.md`; `02 - conectivos e relacoes logico semanticas.md`; `03 - referencia pronominal e coesao lexical.md`; `04 - tempos verbais voz passiva e modalizacao.md`; `05 - vocabulario em contexto e falsos cognatos.md`; `06 - parafrase equivalencia semantica e escopo.md`.

**Arquivos cujo retorno foi verificado somente por estrutura/metadados:** `3 - Materias/Ingles/07` a `18` (nomes físicos completos na tabela de inventário). **Pendentes de leitura integral e auditoria de questões:** exatamente `07–18` (12 artigos). Pendem também compartilhados de outras pastas, provas Cebraspe identificadas e gabaritos definitivos. Nenhum artigo foi alterado. **Próximo bloco:** leitura crítica integral 07–09, cotejo de questões e revisão das correspondências 01/03. **Parecer parcial:** 01–05 podem apoiar uma introdução, com a ressalva de falta de calibração competitiva; 06 deve ser estudado com correção explícita do exemplo de `only if`. Matéria **não concluída**.


## 8. Checkpoint 2: leitura integral crítica de 07–09 (11/11/2026)

**Arquivos novos lidos integralmente em sua versão GitHub atual:** `07 - como localizar assunto tese e proposito em textos em ingles.md`, `08 - informacoes explicitas inferencias e limites da deducao.md`, `09 - coesao referencial e referentes de pronomes.md`. Nos três foram examinados conceitos, casos-texto, seis itens C/E cada, gabaritos e justificativas. **Total acumulado:** hub + 01–09 lidos, nove de 18 artigos. **Exatamente pendentes:** 10–18 (nove artigos), compartilhados externos, corpus real e verificação bibliográfica.

### Auditoria individual

**07: assunto, tese e propósito.** `## 1` distingue bem assunto, tese e propósito; `## 6` fornece texto de três parágrafos com tensão entre ganhos de modernização e riscos de governança. Os seis itens foram conferidos à luz do texto: E/E/C/C/E/C são defensáveis, todos **autorais**, sem evidência de dificuldade real. `## 2` e `### 2.1` generalizam a escrita anglo-saxônica como predominantemente dedutiva e linear; afirmam **“80% dos casos”** para topic sentence inicial sem indicar estudo ou amostra. `## 1` declara textos Cebraspe **“invariavelmente autênticos”**, sem base demonstrada. `## 3` trata skimming e scanning como obrigatórios em qualquer item, em vez de estratégias condicionais. `## 4` fala em “repertório fixo” de verbos de comando; `## 5` em “quatro padrões matemáticos” e frequência não demonstrada. **ING-007 | IMPORTANTE | alegações empíricas não verificadas:** remover quantificações, universalizações e determinismos na fase de reparos, salvo prova empírica documentada. **Intervenção proposta:** manter e revisar; incorporar parágrafos com teses implícitas, estruturas indutivas e gêneros de arquitetura não linear. Atenção editorial ao texto sintético que é apresentado como “adaptado do padrão típico”: não o confundir com texto autêntico de prova.

**08: explícito, inferência, pressuposição e hedging.** `## 2` organiza três níveis de inferência; `## 5` distingue associação e causa; `## 6` inclui texto único de análise institucional, com seis julgamentos C/E que foram conferidos como compatíveis com o texto: C/E/C/E/C/E. Porém:
- `## 3`, tabela `Counterfactual conditionals`: **“If the speaker had pauted the bill, it would have passed.”** contém **`pauted`**, forma verbal inventada por transferência do português. Reescrita posterior recomendada: *If the Speaker had scheduled the bill for a vote, it would have passed* (com ajuste contextual de `speaker` e `bill`). **ING-008 | CRÍTICO | erro linguístico comprovado.**
- `## 3`, `Factive verbs and predicates`: `acknowledged that` é apresentado como prova de que dívida ultrapassou limites e como “fato verdadeiro e incontroverso”. Mesmo com leitura factiva do verbo, a verdade no mundo externo e a atribuição ao governo não devem ser confundidas: a proposição é apresentada como reconhecida pelo governo, e sua veracidade independente requer evidência adicional. `reveal/expose` também dependem de leitura contextual, negabilidade e pressuposições. **ING-009 | IMPORTANTE | afirmação excessiva/risco epistêmico:** distinguir pressuposição linguística, compromisso do narrador, relato atribuído e fato extratextual.
- `## 3`, `Cleft sentences`: sugerir “unicidade do agente exclusivo” como pressuposição universal é excessivo; contraste focal e pressuposição de existência não implicam sempre exclusividade factual. **ING-010 | IMPORTANTE | generalização conceitual.**
- `## 4`, escala de certeza: agrupar `will`, `must`, `proves` como “certeza factual / consequência inevitável” ignora funções de futuro, norma, inferência forte e compromisso discursivo. **ING-011 | IMPORTANTE | risco de ensinar equivalência modal indevida**: construir usos com contexto e contraexemplos.
- `## 1` afirma que a maior parte dos erros de candidatos advém de calibração inferencial; `## 5` fala de uma das principais falácias cobradas, sem amostra identificada. Referência genérica a “Cadernos de Questões Comentadas” Cebraspe 2018–2024 não individualiza caderno ou gabarito. **ING-012 | IMPORTANTE | afirmação estatística/bibliográfica pendente.**
- Item 1: a passagem descreve aumento de `website traffic and media citations`, enquanto o item diz `immediate increase`; o texto não explicita **imediatismo**. Embora o sentido central seja compatível, o advérbio `immediate` acrescenta uma condição temporal sem apoio expresso. **ING-013 | CRÍTICO | risco concreto de gabarito falso positivo**, item 1 marcado CERTO. Em exame C/E estrito, a inserção de `immediate` pode tornar o item ERRADO: **revisar gabarito ou retirar o advérbio na fase de reparos**, após segundo cotejo. Não declarar gabarito “comprovadamente errado” sem corpus de correção independente.

**09: referência pronominal.** `## 2–5` ensina endófora, catáfora, exófora, dummy `it`, singular `they`, demonstrativos e orações relativas; `## 6` fornece texto com linhas e sete cadeias referenciais e seis itens C/E. Todos os seis foram cotejados ao texto e os julgamentos E/C/C/E/C/E são defensáveis, **autorais**. `## 1`: o exemplo do `budget oversight committee` trata `they` como obrigatoriamente referente ao comitê, apesar da presença de `executive officials`; a resolução exige controlar contexto, referência coletiva e plausibilidade, não pressupor unicidade. **ING-014 | IMPORTANTE | ambiguidade potencial no exemplo fundacional**: revisar redação para tornar o antecedente inequívoco ou explicitar a ambiguidade. `## 2`: “90% dos itens” trata anáfora como dado de incidência não documentado; `## 4`: “esmagadora maioria das vezes” para `this` proposicional sem corpus. **ING-015 | IMPORTANTE | percentuais/frequências não sustentados.** `## 3.1` afirma que toda oração inglesa exige sujeito explícito; formulação universal não contempla imperativos, estruturas reduzidas e outros usos. **ING-016 | MELHORIA | qualificar regra e definir o domínio de oração finita declarativa**. `## 5.1` apresenta `which` com vírgula como obrigatoriamente sentential, quando relativas não restritivas também podem referir-se a sintagmas nominais; a pontuação sozinha não resolve. **ING-017 | IMPORTANTE | erro de critério de identificação**: mostrar par mínimo `The report, which was delayed, ...` (referência nominal) versus `They delayed the report, which ...` (leitura possivelmente proposicional).

### Revisão da matriz e do plano após o bloco

- **1 / ideias principais e secundárias:** 07 contém texto mult parágrafos e itens sobre tese; cobertura melhor documentada, porém **parcial**, pois a dificuldade real e transferência a textos desconhecidos seguem abertas.
- **1 / explícitas e implícitas:** 08 oferece inferência modal, causal e condições; **parcial com achado crítico no item 1 e erro de forma verbal**.
- **1 / intratextuais:** 09 contém texto numerado de rastreamento; **parcial com ambiguidade e regra excessivamente categórica sobre `which`**.
- **2 / gramática semântica:** os três reforçam interpretação, mas introduzem simplificações que podem gerar respostas incorretas em textos inéditos.
- **3 / formas contemporâneas:** 09 aborda singular `they`; ainda **pendente** de confronto com 11/18 e usos de diferentes registros.

**Checkpoint de persistência:** apenas este relatório foi atualizado; artigos, gabaritos, IDs, `index.md` editorial geral e catálogo permanecem intactos. Próximo bloco exato: `10 - conectivos relacoes logicas e sequenciacao discursiva em ingles.md`; `11 - vocabulario contextual polissemia e falsos cognatos em ingles.md`; `12 - estrutura de frases negacao interrogacao e inversao sintatica em ingles.md`. Antes de declarar finalização, auditar 13–18 e fontes primárias de provas Cebraspe com localizadores e gabaritos definitivos.


## 9. Checkpoint 3: artigos 10–12 (11/11/2026)

**Lidos integralmente:** `10 - conectivos relacoes logicas e sequenciacao discursiva em ingles.md`, `11 - vocabulario contextual polissemia e falsos cognatos em ingles.md`, `12 - estrutura de frases negacao interrogacao e inversao sintatica em ingles.md`, incluindo seis itens C/E autorais e seus comentários por artigo. Acumulado: **12/18 artigos + hub** com leitura crítica. Próximos: **13–18** (seis artigos) e checagens transversais.

**10: conectivos e relações lógicas.** Reorganizar e corrigir. O texto constrói diferenças úteis entre concessão, contraste, causa, consequência, condição, adição e classe de conector; os seis itens C/E foram confrontados com seus excertos e julgamentos E/E/C/C/E/E coerentes. **ING-018 | IMPORTANTE | erro de categoria:** `§1.1` põe `inasmuch as` sob “concessão subordinada”, embora seu uso principal seja causal/limitativo (“na medida em que”, “já que”); precisa ser removido desse grupo e exemplificado conforme sentido. **ING-019 | IMPORTANTE | generalização:** `§1.1` coloca `yet` indistintamente entre advérbios de transição, mas `yet` também funciona como conjunção coordenativa; não pode ser tratado como `however` em qualquer substituição. A abertura descreve conectores como “um dos núcleos de maior incidência” da banca sem amostra. **Risco de treino isolado:** itens são seis frases curtas, sem progressão discursiva real. Revisar sem apagar contrapontos importantes já presentes em 02.

**11: vocabulário institucional e falsos cognatos.** Manter/ampliar com contraexemplos de diferentes variedades do inglês. O artigo destaca `bill/act`, `table` em inglês britânico/americano, `floor`, `policy`, `actual`, `eventually`; os seis itens C/E possuem gabaritos C/E/E/E/C/E alinhados à interpretação lexical pretendida, mas o primeiro merece revisão contextual. **ING-020 | IMPORTANTE | inconsistência do excerto do exercício 1:** a frase `The new act on administrative liability is currently being tabled by the opposition` emprega `act` (lei já promulgada) junto de `being tabled` (apresentada/adiada conforme variedade) e cria incoerência institucional. O item pede definição de `act` e `bill`, mas o próprio texto não modela uma situação parlamentar clara. Não classificar esse item como calibrado para a banca; reescrever o contexto antes de utilizar o gabarito como exercício didático. **ING-021 | IMPORTANTE | risco de variação:** distinguir `act` como lei formal em sistemas jurídicos específicos sem projetar automaticamente procedimentos de uma jurisdição sobre outra; `table` exige especificar variante. A abertura afirma predominância de dois fenômenos lexicais na banca sem levantamento.

**12: ordem, escopo, negação e inversão.** Manter e corrigir detalhes. Explica `rarely` e `under no circumstances` com inversão, condicionais sem `if` e `not only`; os seis exercícios C/E têm gabaritos C/C/E/E/C/E e são, em seus recortes, defensáveis. A estrutura de `only if` explicada aqui oferece o mecanismo que falta na nota 06. **ING-022 | IMPORTANTE | simplificação gramatical:** `§2` declara `double negative` “agramatical na norma culta padrão”; delimitar a negação concordante em variedades não padrão e evitar transformar variação linguística em inexistência de estrutura. **ING-023 | IMPORTANTE | risco de equivalência modal:** `§3.1` usa `Under no circumstances must public officials disclose...` como inversão de `must under no circumstances disclose`; a sequência pode ser lida como “em nenhuma hipótese são obrigados a divulgar”, e não como “é proibido divulgar”, conforme escopo de negação e modalidade. Preferir `Under no circumstances may/should public officials disclose...` ao representar proibição, e conferir semanticamente o exemplo original. **ING-024 | MELHORIA | precisão:** a descrição do `S-V-O` como rigidez absoluta deve admitir objetos ausentes, verbos intransitivos e inversões legítimas. A abertura afirma incidência de inversões formais em provas específicas sem identificá-las.

**Síntese de transferência para texto inédito:** 10–12 reforçam distinções gramaticais e léxicas aplicáveis, mas seus 18 itens C/E são majoritariamente julgamentos de frase, não de um texto com múltiplos parágrafos. O resultado combinado até o bloco 3 sugere assimetria entre leitura extensa (07–09) e treino microestrutural (10–12). **É hipótese de risco pedagógico**, ainda dependente de auditoria de 13–18 e de corpus real. Dificuldade de banca não verificada, nenhum padrão estatístico inferido.

**Persistência e concorrência:** checkpoint exclusivo neste relatório; nenhum artigo nem gabarito alterado. Após ler 13–18, completar questões, fontes, vínculos compartilhados e índice apenas sob SHA recente.


## 10. Checkpoint 4: artigos 13–15 (11/11/2026)

**Lidos integralmente:** `13 - tempos verbais aspecto e sequencia temporal em ingles.md`; `14 - voz ativa passiva e foco informacional em ingles.md`; `15 - modalizacao possibilidade obrigacao deducao e conselho em ingles.md`. Examinados os 18 exercícios C/E autorais, os respectivos excertos e comentários. Acumulado: **15 de 18 artigos + hub**, pendentes exclusivamente **16, 17 e 18** para leitura crítica, além da verificação transversal.

**13: tempos, aspecto e relato indireto. Intervenção: corrigir/ampliar.** `§1`: atribui ao aspecto *Simple* o valor universal de “factual e permanente”, embora eventos no *simple past* possam ser passageiros, e o aspecto simples não indique permanência por si. `§2`: associa *Simple Past* rigidamente a tempo específico e ausência de vínculo atual, simplificação que precisa de exemplos com contexto. `§4`: afirma **recuo temporal obrigatório de todos os verbos** após verbo introdutório passado no *reported speech*. Isso é **falso como regra absoluta**: é possível reter tempos presentes ou `will` quando a afirmação continua verdadeira ou relevante, incluindo fatos futuros. **ING-025 | CRÍTICO | erro linguístico confirmado por Cambridge Grammar (Reported speech: indirect speech)** [fonte](https://dictionary.cambridge.org/grammar/british-grammar/indirect-speech-reporting-questions). Item 4, gabarito **Certo**, afirma que `will guarantee` *should be replaced* por `would guarantee`; **ING-026 | CRÍTICO | gabarito em risco de falsidade/ambiguidade**, pois não há contexto temporal que torne o recuo obrigatório. Os demais itens C/E do artigo: 1 E, 2 E, 3 C, 5 E, 6 C, defensáveis; item 6 denomina *Future Perfect* “Futuro do Pretérito / Futuro Anterior”, tradução incorreta entre categorias gramaticais (é futuro anterior, não futuro do pretérito). **ING-027 | IMPORTANTE | nomenclatura.**

**14: voz ativa, passiva e foco. Intervenção: manter com qualificações.** `§1–3` e tabela de transposição modelam adequadamente `is being reviewed`, `has been finalized`, agente opcional, verbos de dois objetos e passivas preposicionadas. Os seis itens E/C foram conferidos: **C/E/E/C/E/C**, coerentes. **ING-028 | IMPORTANTE | alegação empírica não validada:** abertura afirma que a passiva é “predominante” no texto institucional e que a banca cobra conversões com regularidade; exigir corpus ou tratar como recurso possível, não frequência provada. **ING-029 | MELHORIA | simplificação:** o auxiliar `be` carrega flexão e combina com `been/being`; a preservação é do conjunto tempo/aspecto, não do “mesmo tempo e aspecto de BE” isoladamente. O artigo permite transferência útil para textos, mas exercícios são seis frases independentes, sem comparação de parágrafos ou agência discursiva em contexto extenso.

**15: modalidade e hedging. Intervenção: correção prioritária.** `§1.2` apresenta tabela de probabilidades numéricas por modal: `must=95%`, `will=100%`, `should=70%`, `may=50%`, `might/could=35%`, `cannot=0%`. **ING-030 | CRÍTICO | erro conceitual comprovado:** valores de modalidade dependem de contexto, fonte enunciadora, variedade e interpretação, e não exprimem chances probabilísticas fixas. É particularmente grave atribuir certeza de 100% a `will`. Reparo: excluir percentuais e construir casos contrastivos epistêmico/deôntico/preditivo. `§1.1` representa `shall` como obrigação jurídica sempre, sem diferença jurisdicional ou usos de futuro; `§2.2` transforma `should have + particípio` sempre em obrigação não cumprida (há leitura epistêmica `should have arrived by now`), e `could have` sempre em oportunidade não usada. **ING-031 | IMPORTANTE | generalizações modais causadoras de erro.** Itens 1–6: E/E/C/E/C/E, interpretações aceitáveis no microcontexto, mas não provam calibração Cebraspe.

**Checkpoint:** somente relatório atualizado, preservadas as demais frentes. Próximo bloco exato: `16 - comparativos quantificadores e delimitadores de escopo em ingles.md`, `17 - parafrase equivalencia semantica e mudanca de sentido em ingles.md`, `18 - relacoes intratextuais intertextuais e generos contemporaneos em ingles.md`.


## 11. Checkpoint 5: artigos 16–18 (11/11/2026)

**Lidos integralmente e examinados os seis exercícios C/E de cada um:** `16 - comparativos quantificadores e delimitadores de escopo em ingles.md`, `17 - parafrase equivalencia semantica e mudanca de sentido em ingles.md`, `18 - relacoes intratextuais intertextuais e generos contemporaneos em ingles.md`. **Acumulado: 18/18 artigos catalogados + hub efetivamente examinados.** Os próximos passos são triangulação com provas reais, checagem de apoios compartilhados e revisão da matriz/arquitetura; **a matéria ainda não está certificada**.

**16: comparativos, quantificadores, escopo. Intervenção: corrigir prioritariamente e ampliar a aplicação discursiva.** `§2.2` apresenta uma escala quantitativa inventada `most=70–90%`, `many=50–70%`, `some=20–40%`, `few<5%`. **ING-032 | CRÍTICO | erro conceitual comprovado:** não existem limiares universais associados a esses quantificadores; `many`, `few` e `some` são contextuais, `most` exige maioria, sem teto numérico arbitrário. A escala ensinaria conclusões erradas em itens interpretativos. `§1.2` atribui relação causal estrita à correlação `the more..., the less...`; **ING-033 | IMPORTANTE | causalidade não assegurada pela forma comparativa**. `§4 Questão 3` julga CERTO item que diz que aumento de transparência `directly results in` menor vulnerabilidade, quando a frase original exprime covariação; **ING-034 | CRÍTICO | gabarito potencialmente falso** por inserção de causalidade direta. `§4 Questão 2`: o segmento original `Few legislators were willing to endorse ... without compensatory social investments` fala em disposição condicional, mas item/explicação falam em legisladores que `supported ... unconditionally`; **ING-035 | IMPORTANTE | risco de salto de disposição para ação real** em item C; revisar frase e gabarito. `§4 Questão 6`: `not as costly as` costuma autorizar comparação de menor custo no inglês corrente, mas a equivalência lógica estrita deve ser justificada com semântica e pragmática: **ING-036 | MELHORIA | revisar certeza categórica**. Sequência gabaritos E/C/C/E/E/C; itens 2 e 3 requerem adjudicação independente.

**17: paráfrase e equivalência. Intervenção: manter/ampliar após corrigir granularidade.** Protocolo de duas camadas (gramatical e semântico) e testes `abide by/comply with`, `because/due to`, `result in/result from`, modalidade, passiva e tempo são úteis. Os seis exercícios C/E foram lidos e cotejados: **C/E/C/E/C/C** coerentes nos exemplos fornecidos. **ING-037 | IMPORTANTE | excesso de exigência de identidade pragmática:** `§1` iguala toda paráfrase válida à preservação estrita de `theme/rheme`; reordenação de foco não precisa alterar condições de verdade ou equivalência informativa pretendida pelo item. **ING-038 | MELHORIA | calibrar léxico:** `stems from`, `results from` e `leads to` podem variar em nuances de implicação causal. O artigo serve bem como integração final, mas treino ainda é de seis frases independentes; faltam reescritas dependentes de texto inteiro.

**18: relações intra/intertextuais e gêneros contemporâneos. Intervenção: ampliar substantivamente.** `§1–3` trata progressão temática, voz citada, posturas do autor, `press release`, `oversight report`, `policy brief` e publicação digital. Seis itens C/E examinados **E/C/C/E/C/E** defensáveis em seu próprio contexto. **ING-039 | IMPORTANTE | erro de generalização pragmática:** `§2.1` classifica `claim/allege/assert/contend` como necessariamente céticos e `demonstrate/prove/confirm` como verdade externa garantida; a força de atribuição depende da voz, do enquadramento, da fonte e do texto. **ING-040 | IMPORTANTE | caso institucional ambíguo:** no exercício 3, após alegar que `The Chamber of Deputies has approved ...`, o `bill now proceeds to presidential sanction` omite possíveis etapas bicamerais necessárias; adaptar cenário ou informar que outros trâmites foram superados. O gabarito C (identificação do gênero `press release`) não é por si falso, mas o texto didático é descuidado. **ING-041 | IMPORTANTE | insuficiência de aplicação:** a unidade explica gêneros contemporâneos, porém os seis itens são frases curtas, sem peça real de cada gênero e sem tarefas de comparar 2 textos, rastrear citação e inferir registro. **ING-042 | IMPORTANTE | afirmação não verificada:** dizer que a prova de Câmara usa esses gêneros antes da aplicação de 17/01/2027 é extrapolação; edital permite textos variados, sem assegurar esse conjunto.

**Diagnóstico após 18/18:** os conteúdos-chave estão **representados nominalmente e em teoria**, mas a **capacidade de enfrentar textos inéditos extensos ainda não está demonstrada**. Os artigos 07–09 trazem textos de múltiplos parágrafos e itens conjuntos; 10–18 dependem quase totalmente de fragmentos artificiais específicos, o que mede reconhecimento da regra ensinada e não sua transferência para material desconhecido. O conjunto tem 6 notas antigas com uma questão FGV e uma C/E cada (12 itens), e 12 notas novas com seis itens C/E cada (72 itens), num total inventariado de **78 itens C/E autorais + 6 itens A–E FGV autorais = 84 exercícios**, com 78 C/E. Checar a distinção no catálogo/editoria antes de usar esta contagem como inventário final de banco estruturado: trata-se de exercícios em prosa Markdown, não de entradas JSON da plataforma. Nenhum desses 78 itens é identificado como transcrição de questão real com origem auditável.

**Próximo checkpoint:** corpus oficial da banca e material compartilhado; reconciliar a matriz integral e prioridades com evidência de itens reais. Só o relatório foi alterado.


## 12. Checkpoint 6: caderno real Cebraspe e apoios transversais (11/11/2026)

**Prova real confirmada em fontes primárias:** ANATEL, concurso para Especialista em Regulação de Serviços Públicos de Telecomunicações, **2024**, aplicação **15/09/2024**, **Conhecimentos Básicos, caderno `961_ANATEL_CB1_01`**, texto CB1A2-I, **itens 16–19**, e texto CB1A2-II, **itens 20–23**. [Caderno oficial PDF](https://cdn.cebraspe.org.br/concursos/anatel_24/arquivos/961_ANATEL_CB1_01.PDF), [gabarito oficial definitivo PDF](https://cdn.cebraspe.org.br/concursos/anatel_24/arquivos/GAB_DEFINITIVO_961_ANATEL_CB1_01.PDF). Caderno e gabarito inspecionados em PDF, inclusive visualmente; **não são itens da prova da Câmara e não demonstram frequência estatística**.

| Caderno, cargo e ano | Item real | Competência efetivamente avaliada | Gabarito definitivo | Implicação para os artigos |
| --- | --- | --- | --- | --- |
| ANATEL, Especialista em Regulação, básicos, `961_ANATEL_CB1_01`, 2024 | 16, CB1A2-I | `leveraged` em contexto como `took advantage of` | **C** | 05/11: inferência lexical em texto, não só memorização de tradução |
| Mesmo caderno | 17, CB1A2-I | leitura de `at least 43%` e categoria `indigenous languages`: item atribui incorretamente o percentual total só às indígenas | **E** | 08/16: escopo, quantificador, referente e generalização |
| Mesmo caderno | 18, CB1A2-I | rede comunitária e finalidade de divulgar conteúdo em língua indígena | **C** | 01/07/08: informação explícita e propósito |
| Mesmo caderno | 19, CB1A2-I | inferência problemática de risco crítico com base no número de falantes | **X (anulado)** | 08/09: evitar inferência sem premissa suficiente e desenvolver controle de ambiguidade |
| Mesmo caderno | 20, CB1A2-II | `makeshift` **não** equivale a `obsolete` | **E** | 05/11: substituição contextual em texto de desigualdade digital |
| Mesmo caderno | 21, CB1A2-II | conceito de `digital divide` não se reduz a conexão estável de longo prazo | **E** | 07/08/18: tese e escopo conceitual |
| Mesmo caderno | 22, CB1A2-II | relação discursiva dos números de cobertura versus uso e preparo 5G | **E** | 02/10/16: encadeamento e quantificadores; atenção a foco da afirmação |
| Mesmo caderno | 23, CB1A2-II | exclusão digital e benefícios de tecnologia | **C** | 08/18: implicações autorizadas por texto |

**Achado ING-043 | IMPORTANTE | evidência oficial:** a amostra de oito itens de uma prova real utiliza **dois textos completos**, contextualiza vocabulário, exige leitura global, identifica escopo quantitativo e inclui **anulação por insuficiência interpretativa**. O material 10–18 usa quase exclusivamente frases isoladas; aumentar tarefas com vários itens por texto real/inédito e condições semânticas graduais. A anulação demonstra que o critério de resposta inequívoca deve ser auditado com especial cuidado, sem extrapolar sua taxa à banca inteira.

**Confronto com gramática de referência:** [Cambridge, Reported speech: indirect speech](https://dictionary.cambridge.org/grammar/british-grammar/indirect-speech-reporting-questions) permite não recuar o tempo quando a proposição ainda é verdadeira/relevante: refuta `13 §4` “obrigatório”. [Cambridge, quantifiers](https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of-quantifiers) descreve dependência de substantivos e contexto: não fundamenta os percentuais inventados em `16`. [Cambridge, Conditionals: other expressions](https://dictionary.cambridge.org/grammar/british-grammar/conditionals-other-) confirma inversões formais com `should/had/were`, úteis à correção articulada de 06/12.

**Artigos compartilhados examinados quanto a existência, seções e pertinência:** `3 - Materias/Portugues/12 - texto contexto e producao de sentido.md`, `13 - tema tese e progressao tematica.md`, `14 - informacao explicita pressuposto e inferencia.md`, `18 - referencia textual anafora catafora e deixis.md`, `19 - substituicao elipse repeticao e coesao lexical.md`, `10 - reescrita semantica e preservacao de sentido.md`. São **apoio conceitual contrastivo**, não prova de domínio de formas, regência, leitura e vocabulário da língua inglesa. Os 12/13/14/18/19 (Português, Câmara) cobrem teorias transferíveis de texto, inferência, progressão e referência; o 10, Português/FGV, é apoio de reescrita associado a Dataprev. Não foram integralmente auditados, pois pertencem a outras frentes simultâneas, e não houve alterações neles. **Seus títulos e vínculos não contam como cobertura inglesa independente.**

**Pendente de verificação bibliográfica adicional:** URLs que sustentem percentuais/frequências atribuídos à banca; variação histórica em outras provas e cargos; adjudicação independente dos gabaritos autorais com alto risco (08 item 1; 13 item 4; 16 itens 2/3; 18 caso institucional). Não afirmar sobreposição categórica em todo o material de outras matérias.


## 13. Parecer consolidado da Fase 1 e plano de reparos: 11/11/2026

### Matriz final: cobertura teórica identificada versus desempenho ainda não aferido

| Item literal | Evidência no corpo dos artigos, examinada | Cobertura descritiva e lacuna funcional | Prioridade |
| --- | --- | --- | --- |
| **1**: compreensão de textos variados | 01 e 07 leem tese e finalidade; 08 organiza inferência; 18 compara gêneros e vozes | **Representado, validação prática insuficiente**: amostra autoral concentrada em textos institucionais sintéticos; diversificar imprensa, ciência, legislação, opinião, notícias, mídias digitais e textos com diferentes arquiteturas | Crítica |
| **1**: domínio do vocabulário | 05/11: polissemia, falsos cognatos e léxico legislativo | **Representado com lacuna**: exercício real ANATEL 16/20 exige inferir acepção do texto, não só traduzir termo conhecido; incluir palavras novas, coligações, sinônimos dependentes de contexto e variedade britânica/americana | Importante |
| **1**: estrutura da língua | 02/03/04/06 e 09–17 tratam conectores, referência, inversão, tempos, passiva, modais, escopo | **Representado com erros**: ajustar `only if`, modalidade, comparativos, `which` e `reported speech` antes de usar como fonte normativa | Crítica |
| **1**: ideias principais e secundárias, explícitas e implícitas | 01/07/08: identificação e inferência; 18: posição e intertextualidade | **Representado com riscos**: item 08.1 introduz `immediate`; formular leitura de detalhes válidos porém não centrais, distinção de afirmação do autor e da fonte citada e limite inferencial | Crítica |
| **1**: relações intratextuais e intertextuais | 02/03/09/10/18: coesão, progressão, citações, reporting verbs | **Representado parcialmente em exercícios**: faltam provas de relação intertextual entre dois documentos e exercícios de referência ambígua com resolução por contexto | Importante |
| **2**: itens gramaticais relevantes para compreensão de conteúdos semânticos | 02–04, 06, 09–17 | **Representado com distorções críticas**: 13 exige backshift universal; 15/16 fazem quantificação fictícia; 12 pode alterar proibição por escopo de `must`; reescrever critérios para preservar o significado, sem decorar fórmulas descontextualizadas | Crítica |
| **3**: conhecimento e uso das formas contemporâneas da linguagem inglesa | 05/09/11/18: `singular they`, vocabulário institucional, posts, gêneros e variantes de `table` | **Parcial**: singular `they` é exemplo efetivo de uso contemporâneo, mas abordagem concentra nomenclatura e registros formais; testar inglês digital, variações entre registros, construções contemporâneas em comunicação institucional, convenções atuais e leitura de fontes contemporâneas | Importante |

**Conclusão curricular limitada à Fase 1:** todos os recortes literais do programa encontram pelo menos uma unidade teórica, mas há **erros linguísticos comprováveis e itens autorais potencialmente inválidos**; portanto, a existência dos arquivos ou a etiqueta de “concluído” do planejamento **não prova preparo**. A prova ANATEL 2024 oferece contraste concreto, mas não amostra suficiente para afirmar percentuais históricos da banca.

### Arquitetura pedagógica de reparos proposta

1. **Hub `ingles.md`**: manter como roteiro de aprendizagem e índice; retirar frases de incidência estatística não documentada e separar visão geral de lista de traduções.
2. **Módulo A, compreensão e leitura transferível**: manter 07 (tese/propósito), 08 (explícito/implícito) e 18 (gêneros/intertextualidade) como textos centrais; corrigir overclaims e desenvolver avaliações com **textos inéditos integrais**, resumos, leitura de vozes citadas e peças de registros distintos. 01 funciona como pré-requisito conciso para quem inicia, não como duplicata independente que conta duas vezes a cobertura.
3. **Módulo B, construção local de sentido**: 09 (pronomes) e 10 (articuladores) com análise em parágrafos reais; 03 e 02 como introduções curtas e enlaces; 11 (vocabulário contextual) com léxico em textos completos e variação linguística; 05 como base lexical resumida.
4. **Módulo C, gramática aplicada ao sentido**: 12 (negação/inversão), 13 (tempo/aspecto/discurso indireto), 14 (passiva/agência), 15 (modalidade), 16 (quantificadores). Priorizar eliminar falsos absolutos e percentuais inventados. 04 deve virar síntese transversal e entrada para 13–15, e 06 conservar condição, negação e escopo apenas como guia inicial, sem duplicar exercícios de 16/17.
5. **Módulo D, controle integrado de equivalência**: 17 permanece como síntese de comparação entre formulações no contexto; adicionar pares de trechos em parágrafos distintos, mudança de ênfase e respeito a inferências/condições. O artigo 06 funciona como base preliminar e depende de correção de `only if`.

**Critério de divisão/fusão:** nenhuma fusão ou exclusão autorizada nesta etapa. **Manter e corrigir:** 07–18; **manter como pré-requisitos curtos, com redução de duplicação e referência cruzada:** 01–06. **Ampliar** 07/08/09/11/17/18 principalmente por textos completos, evitando criar artigos apenas para aumentar contagem. **Reduzir** tabelas de regras sem contexto e alegações não demonstradas; **não dividir** 12–18 só porque são longos, pois cada unidade já tem núcleo conceitual distinto. Os 18 IDs devem permanecer estáveis até decisão editorial expressa.

### Backlog técnico e editorial priorizado para uma futura Fase 2, não executado

| Prioridade | Alvos exatos | Reparação verificável / aceite |
| --- | --- | --- |
| P0, erro factual/gramatical | 06 `only if`; 08 `had pauted`; 13 backshift; 15 escala epistêmica 0–100%; 16 escala de quantificadores | Exemplos conformes a gramáticas, retirados números sem base, revisão independente de regras e aplicações |
| P0, risco de gabarito | 08 item C/E 1; 13 item 4; 16 itens 2 e 3 | Dupla adjudicação contra texto integral e prova de consequência semântica; se item ambíguo, reformular ou sinalizar inconclusivo, sem mudar IDs automaticamente |
| P1, erro de sentido ou excesso | 08 factividade/cleft; 09 `which`; 10 `inasmuch as/yet`; 11 `act/tabled`; 12 `under no circumstances must`; 15 `shall/should have`; 18 `claim`/fonte/fluxo legislativo | Par mínimo de uso válido/ inválido, notas de contexto e enquadramento do autor, justificativas verificáveis |
| P1, transferência | 07–18, especialmente 10–18 | Corpus de treino com textos inéditos de vários parágrafos, vários itens por texto, questões que exijam localizar prova textual e defender C/E; retestes em textos de assunto não ensinado |
| P1, banca | Todo o conjunto | Cada item de prova real identificado por órgão, concurso, cargo, ano, caderno, número, URL e gabarito **definitivo**; nenhum item autoral descrito como oficial |
| P2, governança | `ingles.md`, 01–06/07–18 | Reduzir duplicações, sinalizar pré-requisitos e aplicar trilha de revisão por concepção/habilidade; manter o catálogo e IDs intactos até aprovação |
| P2, formas contemporâneas | 09/11/18 | Adicionar registros digitais, variação atual e práticas contemporâneas de comunicação em inglês com exemplos contextualizados |

### Condições de aceite futuras

O material somente poderá receber parecer pedagógico positivo após: (a) corrigir erros e decisões de gabarito; (b) validar conceitos, casos e citações bibliográficas; (c) confrontar mais de um caderno de prova real com gabaritos definitivos de forma rastreável; (d) testar interpretação de textos inéditos, não só lembrança de regras; (e) auditar exercício C/E completo, com linha/trecho que sustenta resposta e eventual ambiguidade; (f) confirmar integridade editorial e preservar artigos compartilhados. As prioridades são **de risco**, sem estimativa de incidência do edital.

**Checkpoint final da Fase 1, diagnóstico:** **inventário concluído: 18 arquivos de artigos, 1 hub, 6 apoios conceituais em Português identificados; matriz literal coberta por evidências analisadas; 84 exercícios autorais em Markdown conferidos estruturalmente, com diagnóstico de riscos dos gabaritos e revisão item a item; uma prova real e respectivo gabarito definitivo Cebraspe contrastados (ANATEL 2024, oito itens)**. Fase 1 produz diagnóstico e plano, **não certifica a disciplina como pronta**, e não autoriza edição de teoria/gabaritos/catálogo. Continuação recomendada: ampliação da calibração com provas adicionais e segunda adjudicação independente dos quatro itens de maior risco antes de iniciar qualquer reparo.


## 14. Checkpoint 7: segunda adjudicação dos quatro itens C/E sob reserva e segundo corpus oficial (11/11/2026)

**Objeto exclusivo:** resolver riscos de gabarito indicados nos checkpoints 2, 4 e 5, sem editar questões, material teórico, IDs nem catálogo. Reconsultadas as versões atuais dos artigos 08, 13 e 16, e cotejadas as seções e os enunciados literais com gramáticas externas. Avaliação analítica independente da *construção do item*, que não equivale a decisão oficial de banca sobre questão autoral.

| Item autoral e localização exata | Gabarito registrado | Resultado da readjudicação | Severidade / reparo futuro |
| --- | --- | --- | --- |
| `Ingles/08`, `## 7. Itens comentados`, **Item 1**, linhas 150–152 | **C** | **Não homologado, risco concreto de ERRADO.** Original: “substantially increased website traffic and media citations”, sem indicar que o aumento foi **imediato**. Assertiva introduz `immediate increase` e extrapola tempo de resposta. O texto informa levantamento **três anos após** implementação, mas esse marco refere-se às pesquisas de percepção, e não à velocidade do aumento de acessos. O enunciado contém informação temporal não garantida. | **Crítico: suspender uso do gabarito C**, não alterá-lo nesta fase. Em reparos, retirar `immediate` ou construir um item E inequívoco, mostrando o trecho exato. |
| `Ingles/13`, `## 5. Questões Comentadas`, **Questão 4**, linhas 144–155 | **C** | **C é possível sob transformação tradicional, mas não obrigatório em inglês real.** `would guarantee` é um backshift legítimo; `will guarantee` também pode permanecer se a garantia ainda é futura/relevante. O comando “should be replaced … to maintain grammatical consistency” afirma necessidade que o contexto não estabelece. | **Crítico: não homologar item C como teste inequívoco**. Cambridge Grammar, seção *No backshift*, e British Council, *Reported speech: statements*, permitem manutenção de tempos em determinadas condições. Reescrever comando para “can be replaced” ou adicionar contexto de recuo necessário. |
| `Ingles/16`, `## 4. Questões Comentadas`, **Questão 2**, linhas 134–145 | **C** | **Misto, não homologado.** `Few legislators were willing to endorse ... without compensatory social investments` fala da **disposição de apoiar sem contrapartidas**. O item diz que quase ninguém **supported** as alterações incondicionalmente: troca intenção por ação efetiva, o que o texto não prova. A segunda parte (trocar `few` por `a few` altera a orientação avaliativa) é válida. A mistura de proposição não demonstrada e proposição correta contamina o julgamento. | **Crítico para uso como item avaliativo; importante na explicação.** Reescrever `supported` para `were willing to support`, conservar o qualificativo `without compensatory social investments`, e então revalidar. |
| `Ingles/16`, `## 4. Questões Comentadas`, **Questão 3**, linhas 149–160 | **C** | **Não homologado, gabarito E plausivelmente exigido.** `The more transparent..., the less vulnerable...` enuncia relação proporcional/covariação, enquanto o item acrescenta `directly results in`, formulação que atribui causalidade direta. Uma variação concomitante não determina por si mecanismo causal. | **Crítico: suspender C e revisar em fase autorizada.** Se o objetivo for testar covariação, trocar `directly results in` por formulação proporcional neutra; se a intenção for testar causalidade, manter item e decidir E com comentário explícito. |

**Nova checagem conceitual externa:** [Cambridge: Reported speech, *No backshift*](https://dictionary.cambridge.org/us/grammar/british-grammar/reported-speech-indirect-speech), [British Council: Reported speech, statements](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements), [Cambridge: Little, a little, few, a few](https://dictionary.cambridge.org/us/grammar/british-grammar/little-a-little-few-a-few%3A), [Cambridge: As … as](https://dictionary.cambridge.org/grammar/british-grammar/as-as). Essas fontes sustentam contextualização do backshift, oposição avaliativa `few/a few` e leitura contextual das comparações, mas **não são gabaritos de prova para os itens inéditos**.

### Segundo corpus oficial: Cebraspe, Instituto Rio Branco, 2025, prova objetiva de Inglês

**Prova real, fonte oficial e gabarito definitivo:** Concurso Público de Admissão à Carreira de Diplomata, cargo Diplomata (Terceiro Secretário), aplicação **20/07/2025**, período da tarde, **caderno `101_IRBRCACDOBJ_002_01`**, bloco `LÍNGUA INGLESA`, itens 121–140. [Caderno PDF Cebraspe](https://cdn.cebraspe.org.br/concursos/IRBR_25_DIPLOMACIA/arquivos/101_IRBRCACDOBJ_002_01.pdf) e [gabarito oficial definitivo PDF Cebraspe](https://cdn.cebraspe.org.br/concursos/irbr_25_diplomacia/arquivos/5489DFECC0CC7A0CCC189179D1A4A92FEB9E8D13614B5EA2D84B7AC310068544.pdf), inspecionados visualmente nas páginas iniciais dos dois PDFs. **A exigência de proficiência do IRBr difere da Câmara; corpus usado para comparar mecanismos identificáveis, não dificuldade ou frequência.**

| Texto, itens reais do caderno 2025 | Gabarito definitivo | Objeto observável / vínculos |
| --- | --- | --- |
| *The Guardian*, mulher em postos de decisão: **121** | **C** | Modo imperativo, proposta e finalidade: 07/12/15 |
| Mesmo texto: **122** | **E** | Função sintática de oração infinitiva: 12/17 |
| Mesmo texto: **123** | **E** | `only reason`: extrapolação da causa exclusiva e voz da fonte: 08/16/18 |
| Mesmo texto: **124** | **E** | Dado `26.9%` versus `more than one-third`: 08/16 |
| Mesmo texto: **125** | **C** | Passiva `remain relegated`: 14 |
| Mesmo texto: **126** | **E** | Referente contextual de `we`, no relato da autoridade: 09/18 |
| Mesmo texto: **127** | **C** | Inferência sobre o limite da ação afirmativa isolada, necessidade de engajamento das mulheres: 07/08/18 |
| Mesmo texto: **128** | **C** | Demonstrativo `that mentality` em retomada de ideia: 09 |
| Mesmo texto: **129** | **C** | Inferência de postura a partir de imagens metafóricas `flexing muscle` e `win at all costs`: 07/08/18 |
| Texto de IA e diplomacia, itens **130–134** | **C, E, E, C, E** | Governança ética/posição do autor; adjuntos adjetivais; impacto sobre desigualdade; impossibilidade de substituir inteiramente julgamento humano; `adopting` não é present perfect continuous: 07/08/12/13/18 |
| Texto histórico, itens **135–138** | **E, E, C, C** | Informação/inferência contextual, relação textual entre povos, referentes de `they`: 07/08/09/18 |
| Itens **139–140** | **C, E** | Gabaritos conferidos; objeto específico precisa de consulta visual às páginas seguintes antes de detalhar correspondências curriculares |

**Amostra ampliada:** ANATEL 2024, 8 itens oficiais (7 válidos, 1 anulado), mais IRBr 2025, 20 itens oficiais (20 válidos no intervalo 121–140): **28 itens oficiais identificados, dos quais 27 com julgamento válido, em dois concursos e dois cadernos**. Esta é a contagem do **recorte examinado**, não frequência nem distribuição de objetos da Cebraspe. O caderno IRBr emprega textos de origem editorial e exige integração de gramática, léxico, informação e inferências; confirma utilidade de um currículo estruturado por **habilidades de leitura** mais do que por lista independente de regras. Não é amostra representativa do Cargo 1 da Câmara.

### Nova conclusão de severidade e estado

**ING-044 | CRÍTICO | adjudicação de itens autorais:** manter 08#1, 13#4, 16#2 e 16#3 marcados `NÃO HOMOLOGADOS/SUSPENDER PARA TREINO` no plano de reparos. Isso é **status diagnóstico no relatório**, não operação sobre item publicado ou dados de desempenho. Em todos, a explicação atual não resolve integralmente a condição introduzida no enunciado. Nenhuma alteração real de gabarito é realizada na Fase 1.

**ING-045 | IMPORTANTE | segunda evidência empírica:** o caderno IRBr demonstra leitura de parágrafos e atribuição de vozes, julgamento de referentes e semântica contextual. **Hipótese de arquitetura reforçada**: 07/08/09/18 devem estruturar treino transversal com textos completos, e 10–17 fornecer mecanismos para justificar respostas. Nada na amostra permite afirmar que determinado conector ou tempo aparece em percentual específico das provas da Câmara.

**Checkpoint exato:** artigo 08 item 1, artigo 13 questão 4, artigo 16 questões 2 e 3 **reexaminados e anotados individualmente**; PDFs originais IRBr 2025 e gabarito definitivo **consultados visualmente nas páginas iniciais**, 20 itens com gabarito conferido (conteúdo detalhado de 139–140 pendente); 18/18 artigos da matéria já examinados em blocos anteriores. **Arquivos ainda pendentes da matéria:** nenhum artigo do catálogo; **verificações pendentes:** outros gabaritos autorais com alto risco secundário, conteúdo de IRBr 139–140 e possível corpus adicional de cargo mais próximo da Câmara. Não declarar conteúdo didático certificado, não avançar à Fase 2 sem autorização. Nenhum arquivo teórico, catálogo, ID ou gabarito alterado.


### Complemento do checkpoint 7: IRBr itens 139–140

A página seguinte do caderno `101_IRBRCACDOBJ_002_01` foi conferida visualmente: ambos os itens se referem ao texto de Michael Cronin, *Eco-Translation*, adaptado. **139 (C definitivo):** a segunda frase do primeiro parágrafo situa em 1800 a existência de 550 motores a vapor e mais de 500 mil moinhos movidos a água, sustentando mudanças humanas na natureza naquele período; relacionar com 08 (informação explícita/implícita) e 13 (referência temporal). **140 (E definitivo):** o texto atribui atratividade econômica de máquinas a vapor a condições econômicas e disputas salariais do contexto, mas o item afirma que “the living conditions of textile workers” foram o fator causador; não se deve trocar aumento de pressão por salários e condições por suposta causalidade direta das condições de vida. Relacionar com 08, 10 e 17. **Com isso, os 20 itens IRBr 121–140 têm conteúdo e gabaritos oficiais identificados.** Nenhuma alteração de artigo ou gabarito autoral.


## 15. Checkpoint 8: verificação dirigida de riscos secundários de referência, modalidade e edição (11/11/2026)

**Escopo e rastreabilidade:** reconsultados no GitHub, sem modificá-los, os arquivos integrais `Ingles/09 - coesao referencial e referentes de pronomes.md` (227 linhas, SHA `1244380fc2a3498b5c3f1831dca42417068e958d`), `11 - vocabulario contextual polissemia e falsos cognatos em ingles.md` (229 linhas, SHA `3e4fc30eb59add29b8515c150544a68f7d23353e`), `12 - estrutura de frases negacao interrogacao e inversao sintatica em ingles.md` (223 linhas, SHA `df204a70cdb692f380eaad709052ac284029d31a`) e `18 - relacoes intratextuais intertextuais e generos contemporaneos em ingles.md` (203 linhas, SHA `f60b036ad007efca419f6a06d978f89511efffe0`). Também revisitadas as alegações anteriores sobre `16#6`. Fontes de referência consultadas nesta rodada: [Cambridge, Relative pronouns](https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns), [Cambridge, Relative clauses](https://dictionary.cambridge.org/us/grammar/british-grammar/relative-clauses_2), [Cambridge, Inversion](https://dictionary.cambridge.org/grammar/british-grammar/inversion), [Cambridge, Must](https://dictionary.cambridge.org/grammar/british-grammar/must?q=Must), [Cambridge, As ... as](https://dictionary.cambridge.org/grammar/british-grammar/as-as), [Cambridge, Reporting verbs](https://dictionary.cambridge.org/grammar/british-grammar/reporting-verbs) e [Cambridge, It, this and that in paragraphs](https://dictionary.cambridge.org/grammar/british-grammar/it-this-and-that-in-paragraphs). A validação é **conceitual e textual**, não certificação estatística da banca.

| Identificador | Localizador e evidência | Julgamento mais preciso | Classificação e reparo proposto |
| --- | --- | --- | --- |
| **ING-046** | `09`, linhas 122, 134–140: a nota apresenta vírgula + `which` como diagnóstico suficiente de referência à frase inteira; a própria nota também usa `which` relativo a coisas | **Erro de regra geral comprovado.** Cambridge distingue relativas não restritivas nominais de relativas proposicionais: ambas podem ser separadas por vírgula. A leitura sentencial é sustentada pelo contexto e compatibilidade semântica, não pela vírgula isolada. | **CRÍTICO para instrução referencial**, importante para revisão do item 6: o gabarito E desse item concreto continua **plausível**, pois ele nega referente **exclusivo** `social engineering`. Substituir a regra por dois contraexemplos e um protocolo de seleção de antecedente. |
| **ING-047** | `09`, linhas 26–33: frase com `the budget oversight committee`, `executive officials` e `they`, cuja referência ao comitê é declarada necessária | **Ambiguidade textual potencial**, não erro provado: `they` também tem antecedente plural explícito em `executive officials`. A coerência favorece uma interpretação no relato, mas não torna a outra gramaticalmente impossível sem contexto adicional. | **IMPORTANTE / risco**: introduzir contexto que selecione claramente os agentes, ou ensinar o próprio caso como ambiguidade legítima. Não usar o trecho como prova de regra absoluta “substantivo mais próximo é sempre errado”. |
| **ING-048** | `11`, linhas 135–143, questão 1: `The Lower House has recently passed an act ... a separate bill ... is currently being tabled` e gabarito C | **Gabarito conceitual C plausível como definição de `act` versus `bill`**, porém o cenário é mal construído: `Lower House ... passed an act` confunde aprovação por uma casa com promulgação de lei, conforme o sistema jurídico implicitamente tomado como referência. `table` pode inverter sentido no inglês britânico e norte-americano. | **IMPORTANTE / problema do texto-base**: retirar o cenário misto, identificar jurisdição, e construir duas frases contrastivas com situações jurídicas verificáveis. Não inverter automaticamente C porque a definição lexical é recuperável. |
| **ING-049** | `12`, linhas 86–88: `Public officials must under no circumstances disclose...` convertido em `Under no circumstances must public officials disclose...` | **Alto risco de mudança de escopo**. Em posição anteposta, a negação pode ter alcance sobre `must`: a forma resultante admite leitura “não existe situação em que sejam obrigados a divulgar”, diferente da proibição original. Cambridge distingue obrigação (`must`) de proibição (`must not`) e explica inversão após negativas. | **CRÍTICO / exemplo didático não confiável**, sem item C/E específico invertido por este exemplo. Trocar por `Under no circumstances may public officials disclose...`, ou explicar a ambiguidade modal com cautela. |
| **ING-050** | `18`, §2.1 e questão 4, linhas 146–154: `demonstrated that ...` interpretado como “provou e comprovou documentalmente”; tabela classifica `claim/allege/assert/contend` em bloco invariavelmente cético | **Generalização epistêmica**, não falsidade automática do item 4: `demonstrated` apresenta o resultado como demonstrado, mas não assegura por si origem documental específica; `claim` pode marcar atribuição sem aprovação, e outros verbos mudam matizes conforme locutor, contexto e gênero. | **IMPORTANTE / comentário requer correção:** diferenciar o compromisso discursivo do enunciador da validação empírica externa; retirar a exigência de “documentalmente” sem suporte. Manter E provisório para 18#4, pois o item afirma ausência de evidência e especulação pura, não sustentadas pelo verbo. |
| **ING-051** | `16`, questão 6: `Digital broadcasting ... is not as costly as maintaining ... offices` e item dizendo que os escritórios são `more costly` | **Gabarito C plausível na leitura idiomática de desigualdade de custos**, confirmada pelo uso de `not as...as` em Cambridge. A fonte aborda *not as...as* como desigualdade comparativa. Há espaço para discussão lógico-formal de “não tão ... quanto”, mas não surgiu evidência suficiente para suspender o item. | **MELHORIA / manter provisoriamente C**, com comentário de implicação pragmática e contexto, sem impor teoria de lógica formal inadequada à língua natural. |

### Checagem de segurança editorial

**Distinção obrigatória:** `ING-046` e `ING-049` são **regras/exemplos didáticos problemáticos**; não implicam automaticamente que a questão 09#6 deva mudar de E nem que a questão 12#3 deva mudar de E. `ING-048` é defeito do cenário, não contestação direta da distinção lexical `act/bill`. `ING-050` critica comentário epistemologicamente mais forte do que o enunciado permite, sem forçar mudança de E. **Suspensos para treino permanecem exatamente os quatro itens do checkpoint anterior:** 08#1, 13#4, 16#2 e 16#3. Não multiplicar a quantidade de “gabaritos errados comprovados” a partir de riscos linguísticos diferentes.

### Estado e continuidade

**Sem arquivos novos de teoria pendentes no catálogo:** 18/18 artigos e o hub foram lidos em blocos, assim como seus 84 exercícios autorais. O relatório agora contém **51 achados identificados historicamente (`ING-001` a `ING-051`)**, que misturam erros, riscos, hipóteses e melhorias; **não equivalem a 51 erros**. Evidência externa desta rodada: gramáticas Cambridge; corpus oficial acumulado anteriormente: ANATEL 2024 (8 itens) e IRBr 2025 (20 itens), sem previsão de frequência. As próximas tarefas documentais da Fase 1 são: rever alegações de caderno real sem página/gabarito documental inspecionado nesta rodada; avaliar os riscos de `inasmuch as`, `yet` e `shall` com fontes específicas; e produzir **gate de encerramento documental** que separe diagnóstico concluído de validação pedagógica ou edição de artigos. Nenhum artigo, gabarito, ID, hub ou catálogo foi alterado.


## 16. Checkpoint 9: conectores e linguagem normativa; gate documental da Fase 1 (11/11/2026)

**Cotejo suplementar de conceitos já registrados como pendência:**

- **ING-052 | IMPORTANTE | erro de categoria confirmado:** `10 - conectivos relacoes logicas e sequenciacao discursiva em ingles.md`, §1.1 inclui `inasmuch as` em “Concessão Subordinada”. O [Cambridge Dictionary, `inasmuch as`](https://dictionary.cambridge.org/dictionary/english/inasmuch-as) registra usos **causal e delimitador de alcance** (`because/since`, `to the extent that`), não uso concessivo típico equivalente a `although`. **Reparo:** retirar da linha de concessão, incluir par de exemplos causal/limitação. Não existe item C/E identificado como diretamente dependente da classificação errada.
- **ING-053 | IMPORTANTE | erro de generalização confirmado:** `10`, §1.1 apresenta `yet` no mesmo grupo “Transição Discursiva Coordenada / Adverbial” de `however/nevertheless`, sem distinguir a função de **conjunção coordenativa**. [Cambridge Grammar, Yet](https://dictionary.cambridge.org/us/grammar/british-grammar/yet%29As) define `yet` também como *conjunction* no sentido de `but` e *nevertheless*. **Reparo:** distinguir conjunção de advérbio e pontuação compatível. Manter os exemplos concessivos/contrastivos válidos de 10.
- **ING-054 | IMPORTANTE | variação de linguagem normativa confirmada:** `15 - modalizacao possibilidade obrigacao deducao e conselho em ingles.md` e `18` tratam `shall` sobretudo como comando obrigatório e `must` como obrigação. [Digital.gov, Familiar terms / Avoid “shall”](https://digital.gov/guides/writing-understanding/familiar-terms) recomenda `must` para obrigações porque `shall` pode ser interpretado como obrigação ou previsão, dependendo da jurisdição e da tradição de redação. **Reparo:** contextualizar `shall` em documentos jurídicos existentes sem ensinar equivalência categórica universal. Questão 15#5, com `Article 12: The Ombudsman shall publish...`, permanece **C defensável nesse contexto normativo explícito**; não inverter gabarito a partir de uma recomendação editorial norte-americana.

### Gate documental proposto

| Critério | Estado auditável | Limite |
| --- | --- | --- |
| Identidade e inventário | **Satisfeito para conjunto catalogado:** 18/18 artigos físicos e um hub | Outros apoios não catalogados podem existir; seis notas de Português são apenas apoio |
| Matriz literal do edital | **Satisfeito para rastreabilidade teórica:** itens 1, 2 e 3 vinculados a passagens e lacunas | Vinculação não prova competência em leitura |
| Leitura crítica dos 18 artigos e exercícios | **Satisfeito como diagnóstico dirigido com registro por artigo:** 84 exercícios autorais identificados, incluindo 78 C/E | Não equivale a homologação independente de todos os gabaritos |
| Evidência de provas oficiais | **Parcial:** ANATEL 2024 e IRBr 2025, 28 itens com referências oficiais registradas em checkpoints anteriores | Amostra reduzida, concursos distintos e sem estimativa de incidência |
| Riscos de gabarito prioritários | **Documentados, não resolvidos por edição:** 08#1, 13#4, 16#2 e 16#3 com uso suspenso | Texto publicado continua inalterado; solução exige Fase 2 |
| Riscos didáticos secundários | **Documentados com fonte:** anáfora `which`, `inasmuch as`, `yet`, `shall`, `must`, `act/bill` | Outros exemplos e itens podem exigir amostragem ou dupla revisão |
| Gate para iniciar reparos | **Pendente de autorização ou mudança explícita de etapa** | Este documento não concede autorização para alterar artigos, gabaritos, IDs ou catálogo |

**Decisão de estado:** Fase 1 possui **diagnóstico suficientemente estruturado para planejamento de reparos**, mas **não será rotulada como matéria concluída ou material certificado**, porque a condição de correção e transferência de leitura ainda não foi satisfeita. O backlog de Fase 2 permanece restrito à proposta. Total histórico de IDs `ING-001` a `ING-054` abrange riscos, hipóteses, lacunas, confirmações e melhorias, **não 54 erros comprovados**. Próxima tarefa, ainda em Fase 1 se necessário: exame de amostra adicional de itens autorais potencialmente ambíguos com segundo leitor, sem confundir validação parcial com certificação total. **Nenhum artigo teórico, item C/E, gabarito, hub, ID ou catálogo alterado.**


## 17. Checkpoint 10: adjudicação dirigida de 30 exercícios autorais C/E, artigos 07, 10, 15, 17 e 18 (11/11/2026)

**Método e corpus efetivamente relidos:** textos integrais de `07 - como localizar assunto tese e proposito em textos em ingles.md` (202 linhas, SHA `abe93ec3d7eb365c7cf249271b7af44e4b161011`), `10 - conectivos relacoes logicas e sequenciacao discursiva em ingles.md` (234 linhas, `46808d5213c081a434d8804bbce35f7da90fc2dc`), `15 - modalizacao possibilidade obrigacao deducao e conselho em ingles.md` (209 linhas, `6c9dd9093dea2d093154e4bb6728e5e52a7f4aa8`), `17 - parafrase equivalencia semantica e mudanca de sentido em ingles.md` (203 linhas, `35e43869b2c6cea70c827654d589f53ae41bd655`) e `18 - relacoes intratextuais intertextuais e generos contemporaneos em ingles.md` (203 linhas, `f60b036ad007efca419f6a06d978f89511efffe0`). Para 07, confrontado excerto da seção 7 com o texto-base estudado na auditoria anterior; para 10/15/17/18, enunciados, excertos, respostas e comentários cotejados diretamente na seção de questões. **30 questões inéditas, seis por arquivo.** Aqui, **M** significa gabarito provisoriamente sustentado no microcontexto e comentário nuclear aceitável; **R** significa gabarito provisoriamente mantido com ressalva material de formulação/comentário; **S** significa suspender o uso por ambiguidade ou defeito mais severo. Essa classificação é só do diagnóstico e não homologa o banco.

| Artigo e item | Gabarito no arquivo | Classe | Fundamentação localizada |
| --- | --- | --- | --- |
| 07#1 | E | M | Não há defesa de retorno à comunicação exclusivamente televisiva; texto favorece modernização com governança |
| 07#2 | E | M | `proponents argue` não é comprovação do autor; `curb` não equivale a eliminar por completo |
| 07#3 | C | M | `However` introduz mudança para riscos e contrapesos na progressão textual |
| 07#4 | C | M | Governança e salvaguardas refletem fechamento da tese sobre modernização digital |
| 07#5 | E | M | `no longer suffice` é premissa, não tese inteira, e parágrafos seguintes não são manuais de TV |
| 07#6 | C | M | Avaliação equilibrada compatível com reconhecimento de benefícios e discussão posterior dos riscos |
| 10#1 | E | M | `although` expressa concessão, não condição necessária de elaboração |
| 10#2 | E | M | `furthermore` é advérbio conector; `in addition to` exige complemento, sem substituição literal simples |
| 10#3 | C | M | `while` contrasta dever de transparência e restrição por privacidade |
| 10#4 | C | M | `due to` e `because of` ambos introduzem causa com sintagma nominal no caso dado |
| 10#5 | E | M | Trocar `unless` por `if` sem negação troca a condição |
| 10#6 | E | M | `despite` é concessivo e não atribui causalidade direta aos cortes |
| 15#1 | E | R | `should have conducted` normalmente sugere avaliação ideal não realizada: é leitura defensável **aqui**, porém o comentário diz que sempre “não foi cumprida”, generalização não universal. [Cambridge, `Should`](https://dictionary.cambridge.org/grammar/british-grammar/should) documenta uso de expectativa/probabilidade em outros contextos. A afirmação de realização “successfully” tampouco é sustentada pelo excerto |
| 15#2 | E | M | `may not restrict` é proibição, não incapacidade física de processar documentos |
| 15#3 | C | R | `must have secured` expressa dedução epistêmica forte feita pelo enunciador, mas não a transforma em prova histórica de acordo fechado; comentário deve limitar `fato incontroverso` ao registro de zero votos contrários |
| 15#4 | E | M | `might` é compatível com possibilidade, não garantia categórica |
| 15#5 | C | R | `shall` em dispositivo numerado apresenta imposição normativa plausível, mas “operador canônico” e “obrigação indeclinável” são absolutos indevidos no comentário, já documentados em ING-054 |
| 15#6 | E | M | `could not have known` contextualiza impossibilidade de conhecer o anexo antes do recebimento, não proibição jurídica |
| 17#1 | C | M | `although` e `despite facing` preservam concessão e agente |
| 17#2 | E | M | A reescrita inverte direção entre vazamento e indignação |
| 17#3 | C | M | `abide by` e `comply with` mantêm valor de cumprimento e `must` |
| 17#4 | E | M | `may reduce` foi reforçado para `will definitely eliminate`, alterando modalidade e escopo |
| 17#5 | C | M | Passiva com present perfect e `by the Chamber` preserva proposição e propósito |
| 17#6 | C | R | `because` e `consequently` mantêm relação causal; porém o item diz “grammatical structure ... correctly preserved” apesar da **troca** de subordinação para coordenação. Gabarito C continua natural se “correção gramatical” for intenção; reescrever o enunciado para evitar exigir identidade estrutural |
| 18#1 | E | M | `however` contrasta observatório e autor, não prova que todos os déficits foram resolvidos |
| 18#2 | C | M | `claimed` atribui declaração à fonte; trecho não acrescenta verificação externa |
| 18#3 | C | R | `FOR IMMEDIATE RELEASE` caracteriza comunicado; fluxo `the bill now proceeds to presidential sanction` omite outras etapas possíveis, como já documentado em ING-040 |
| 18#4 | E | R | `demonstrated` não equivale a “merely speculative hypotheses”; explicação exagera ao exigir comprovação **documental**, ING-050 |
| 18#5 | C | R | `Echoing the guidelines...` sustenta relação intertextual e alinhamento de referência; comentário acrescenta `fundamento` e intencionalidade institucional deliberada sem necessidade de base textual adicional |
| 18#6 | E | M | Propósitos distintos são explícitos no contraste, não diferença apenas de fonte tipográfica |

**Resultado do lote:** **30/30 exercícios examinados neste recorte**, com **23 M**, **7 R**, **0 S novos**. As sete ressalvas são `15#1`, `15#3`, `15#5`, `17#6`, `18#3`, `18#4`, `18#5`. **M não significa gabarito certificado**: significa apenas nenhuma contradição relevante encontrada na avaliação contextual efetuada. **Os quatro itens previamente suspensos (08#1, 13#4, 16#2, 16#3) permanecem sob reserva**, e não foram recontados como novos S. **O histórico de 54 achados não representa 54 inversões de gabaritos.**

**ING-055 | IMPORTANTE | diferença entre inferência e prova:** o comentário `15#3` tende a converter inferência do enunciador baseada em zero dissidentes numa certeza fática sobre acordo partidário. Manter gabarito C, retirar segurança maior que a oferecida pelo modal.

**ING-056 | IMPORTANTE | precisão do comando de reescrita:** `17#6` usa “grammatical structure ... correctly preserved” quando a construção efetivamente transita de subordinação para coordenação. O intuito semântico é claro, mas comandos de prova devem distinguir `grammatical correctness` de `grammatical structure`.

**ING-057 | IMPORTANTE | intertextualidade sem sobreinterpretação:** `18#5` sustenta eco textual da convenção, mas o comentário atribui relação de fundamento normativo e deliberação explícita mais forte que as palavras da frase. O foco legítimo é conexão de ideias, sem supor processo interno deliberativo.

**ING-058 | IMPORTANTE | referência bibliográfica não rastreada:** `07`, seção 9, inclui `CEBRASPE. Bancos de Provas e Padrões de Resposta de Língua Inglesa: Nível Superior (Câmara dos Deputados, Senado Federal, STJ, IPEA, MPO, Diplomacia). Brasília, 2018–2024.` sem cadernos, URLs, códigos de prova ou identificação de uma publicação única verificável com esse título. **Não se deve contar isso como fonte bibliográfica comprovada**, nem atribuir às instituições citadas uma amostra já auditada. Substituir em Fase 2 por cadernos oficiais individualizados, com ano, cargo e itens verificáveis. Não houve consulta a todos os concursos listados.

**Próxima unidade de auditoria:** blocos 08/09/11/12/13/14/16 e, depois, 01–06, distinguindo itens já suspensos dos demais e verificando dados bibliográficos inventariados. **Nenhuma edição de teoria, questão, gabarito, ID, hub ou catálogo.**


## 18. Checkpoint 11: adjudicação dos 42 itens C/E dos artigos 08, 09, 11, 12, 13, 14 e 16 (11/11/2026)

**Método:** sete artigos recuperados diretamente do GitHub, cada um com seis questões inéditas, e enunciados confrontados com textos-base, respostas e comentários. Os textos integrais de 08 e 09 foram relidos. **M**: gabarito provisoriamente mantido, núcleo do comentário sustentável; **R**: gabarito mantido com ressalva relevante no comentário, cenário ou formulação; **S**: questão deve ficar suspensa para estudo confiável até resolução da ambiguidade. A anotação não altera o material original.

| Artigo/item | Gabarito | Classe | Justificativa |
| --- | --- | --- | --- |
| 08#1 | C | **S** | `immediate` não está no texto; C suspenso |
| 08#2 | E | **M** | `may` não garante cinismo universal |
| 08#3 | C | **M** | Possível efeito negativo da transparência sem responsividade |
| 08#4 | E | **M** | Pesquisas não tratam de queda severa na participação |
| 08#5 | C | **M** | `only when` delimita condição necessária |
| 08#6 | E | **M** | Não há exclusividade causal da mídia |
| 09#1 | E | **M** | `they` = atores hostis |
| 09#2 | C | **M** | `them` = relatórios confidenciais |
| 09#3 | C | **M** | `This strategy` resume exfiltração e vazamento |
| 09#4 | E | **M** | `these` = sistemas de análise comportamental |
| 09#5 | C | **M** | `whose` associa origens às ameaças |
| 09#6 | E | **R** | E plausível, mas vírgula + `which` isoladamente não comprova referência oracional |
| 11#1 | C | **R** | Definição `act/bill` defensável; cenário mistura etapa legislativa com lei promulgada |
| 11#2 | E | **M** | `actually` não equivale a `currently` |
| 11#3 | E | **M** | `eventually` não significa ocasionalmente |
| 11#4 | E | **M** | `attend` = comparecer |
| 11#5 | C | **M** | `resume` = retomar |
| 11#6 | E | **M** | `compromise` = acordo, não juramento |
| 12#1 | C | **M** | Inversão após `rarely` |
| 12#2 | C | **M** | `Had ... identified` equivale a `If ... had identified` |
| 12#3 | E | **M** | `under no circumstances should` é proibição, não autorização eventual |
| 12#4 | E | **M** | `Should` inicial é condicional |
| 12#5 | C | **M** | `not only` na ordem direta dispensa `did` |
| 12#6 | E | **M** | `scarcely` não equivale a facilmente |
| 13#1 | E | **R** | E correto; comentário exagera sobre continuidade do processo e efeitos |
| 13#2 | E | **M** | `In 2021` é marco passado incompatível com substituição proposta |
| 13#3 | C | **R** | Anterioridade `had reviewed` válida; cenário `joint session` requer precisão |
| 13#4 | C | **S** | `will→would` possível, não obrigatório; C suspenso |
| 13#5 | E | **M** | `have noted` não sustenta evento remoto sem relevância |
| 13#6 | C | **R** | Future perfect correto; tradução como futuro do pretérito incorreta |
| 14#1 | C | **S** | **Novo S**: alternativa passiva omite `to ensure alignment with fiscal responsibility standards`, embora exija preservar sentido |
| 14#2 | E | **M** | Objeto de pessoa pode ser sujeito passivo |
| 14#3 | E | **M** | Simple past não mantém present perfect |
| 14#4 | C | **M** | Modal + `be` + particípio funciona |
| 14#5 | E | **M** | `look into` deve reter `into` |
| 14#6 | C | **R** | Foco e agente omitido plausíveis, intenção institucional inferida em excesso |
| 16#1 | E | **M** | `little` exclui grande quantidade de provas |
| 16#2 | C | **S** | `were willing` não prova que efetivamente `supported`; C suspenso |
| 16#3 | C | **S** | `directly results in` introduz causalidade; C suspenso |
| 16#4 | E | **M** | `most` não autoriza `all` |
| 16#5 | E | **M** | `exclusively` limita público |
| 16#6 | C | **R** | C idiomático plausível, explicação lógico-formal rígida demais |


**Balanço do lote:** **30 M, 7 R, 5 S**, total **42 itens**. Quatro S já identificados anteriormente: **08#1, 13#4, 16#2, 16#3**. **Novo S: 14#1**.

**ING-059 | CRÍTICO | nova questão de gabarito sob reserva:** em `14 - voz ativa passiva e foco informacional em ingles.md`, questão 1, o texto original informa que a comissão examina emendas constitucionais **“to ensure alignment with fiscal responsibility standards”**. A proposta de passiva diz somente `The proposed constitutional amendments are currently being examined by the special commission`, sem a oração de finalidade. O item pergunta se isso `maintains the original meaning and grammatical correctness`, e traz **Certo**. A frase proposta é gramatical, porém **perde informação essencial de propósito**, tornando perigosa a certificação de equivalência integral. **Suspender C para treino até revisão contextual**, sem alterá-lo nesta fase. Possíveis reparos futuros: restituir finalidade na frase passiva ou limitar o comando à preservação do evento e à correção sintática.

**ING-060 | IMPORTANTE | semântica de tempos:** `13#1` é E defensável, mas o comentário diz que `has expanded ... since` prova necessariamente que a expansão ainda cresce ou que seus efeitos continuam; o aspecto perfeito não prova cada uma dessas leituras isoladamente. `13#6` é C, mas `will have concluded` é *future perfect*, não “futuro do pretérito”, rótulo inadequado.

**ING-061 | IMPORTANTE | intenção e passiva:** `14#6` permite inferência de foco na ação/material e ausência de agente explícito, mas a explicação afirma objetivo comunicativo de “assegurar impessoalidade” sem evidência do redator. Manter C provisório e reduzir excesso.

**ING-062 | IMPORTANTE | referências sem identificação auditável:** 08 e 09 citam `CEBRASPE. Cadernos de Questões Comentadas: Língua Inglesa. Brasília: Cebraspe, 2018–2024` e `CEBRASPE. Provas e Gabaritos Comentados de Língua Inglesa. Brasília: Cebraspe, 2018–2024` sem caderno, edital, ano individual, URL ou publicação identificada. Não tratar como provas verificadas. O achado amplia ING-058 do artigo 07.

**ING-063 | IMPORTANTE | critério de equivalência:** `14#1` demonstra que uma passiva formalmente correta pode preservar agente, tempo e aspecto e ainda perder adjuntos de finalidade. Em Fase 2, conferir propósito, exceções, condições e escopo sempre que a pergunta exigir `original meaning` completo.

**Reconciliação cumulativa:** checkpoints 10 e 11 classificaram individualmente os **72 C/E autorais dos 12 artigos 07–18**: **53 M, 14 R, 5 S**. Há **cinco itens S distintos** (08#1, 13#4, 14#1, 16#2, 16#3), não cinco novos. Restam para classificação individual **seis C/E de 01–06 e seis exercícios autorais FGV A–E**, num conjunto de 84 exercícios Markdown. Corpus oficial de comparação permanece ANATEL 2024 + IRBr 2025, 28 itens identificados em dois concursos, sem inferência de incidência. Identificadores históricos ING-001–063 contemplam erros, riscos, hipóteses e melhorias, **não 63 respostas incorretas**.

**Próximo passo da Fase 1:** classificação dos 12 exercícios de 01–06 e parecer documental final. Nenhuma teoria, item, gabarito, ID, hub ou catálogo foi editado.


## 19. Checkpoint 12: 12 exercícios de 01–06, reconciliação completa dos 84 e fechamento documental da Fase 1 (11/11/2026)

**Escopo de leitura:** artigos preexistentes `01 - leitura instrumental tese e inferencias.md`, `02 - conectivos e relacoes logico semanticas.md`, `03 - referencia pronominal e coesao lexical.md`, `04 - tempos verbais voz passiva e modalizacao.md`, `05 - vocabulario em contexto e falsos cognatos.md` e `06 - parafrase equivalencia semantica e escopo.md`. Cada um contém uma questão inédita FGV A–E com comentário e um item inédito C/E com gabarito. Estes 12 exercícios foram relidos individualmente e comparados com os exemplos base no arquivo. **M** neste relatório significa sustentável provisoriamente diante do próprio texto, sem alegação de validação externa do item. Identidade dos arquivos 02, 04 e 05 recuperada de nomes existentes e das ligações internas; não houve criação/substituição de arquivo.

| Artigo | FGV A–E, gabarito | Classe FGV | C/E, gabarito | Classe C/E | Justificativa |
| --- | --- | --- | --- | --- | --- |
| 01 | C | **M** | E | **M** | Alternativa C preserva papel da triagem com verificação independente; C/E rejeita tratar `may` como ocorrência necessária |
| 02 | B | **M** | C | **M** | `Despite` e `although` expressam concessão com regências diferentes; `nevertheless` contrapõe expectativa |
| 03 | C | **M** | C | **M** | `which` retoma situação de rejeição de pedidos no contexto; `this` pode retomar proposição inteira |
| 04 | B | **M** | C | **M** | `may have been altered` informa possibilidade de alteração anterior sem agente; `mustn't` proíbe, `don't have to` dispensa obrigação |
| 05 | C | **M** | C | **M** | `currently` significa atualmente, `claims` admite pedidos/solicitações e `issued` equivale a emitida; `actual expenditure` designa despesa efetiva |
| 06 | C | **M** | E | **M** | `not all` implica que pelo menos um não recebeu, sem quantificar metade; `after` não implica causação por auditoria |


**Subtotal desta etapa:** seis exercícios FGV A–E classificados **M**, seis exercícios C/E classificados **M**; **zero novas ressalvas de gabarito e zero novas suspensões**. **Ressalva didática importante:** o artigo `06` mantém o exemplo `Only if documents are complete, the request can proceed`, cuja inversão formal, já identificada em ING-001 e backlog, deve ser corrigida na futura Fase 2. Essa falha da **teoria** não muda automaticamente o gabarito dos dois exercícios finais sobre `not all` e `after` versus `cause`. O artigo `03` corretamente observa que pronomes podem referir-se a proposições e que antecedentes podem ser ambíguos, o que contrasta com a regra excessivamente taxativa identificada em `09` (ING-046).

### Quadro final de adjudicação dos exercícios em Markdown

| Conjunto | M, mantido provisoriamente | R, exige ajuste de enunciado/comentário | S, suspender para treino | Total |
| --- | ---: | ---: | ---: | ---: |
| 01–06, seis C/E introdutórios | 6 | 0 | 0 | 6 |
| 01–06, seis FGV A–E introdutórios | 6 | 0 | 0 | 6 |
| 07, 10, 15, 17 e 18, 30 C/E (checkpoint 10) | 23 | 7 | 0 | 30 |
| 08, 09, 11, 12, 13, 14 e 16, 42 C/E (checkpoint 11) | 30 | 7 | 5 | 42 |
| **TOTAL, 84 exercícios autorais** | **65** | **14** | **5** | **84** |

**Os cinco S únicos**: `08#1` (acréscimo temporal `immediate`), `13#4` (recuo obrigatório do futuro no discurso indireto sem contexto), `14#1` (omissão da oração de finalidade na voz passiva), `16#2` (disposição `were willing` transformada em apoio consumado `supported`) e `16#3` (causalidade direta introduzida em proporcionalidade). **S indica risco de gabarito e confiabilidade, não alteração de resposta publicada.** As classes M e R também são diagnósticos e **não** significam homologação oficial.

### Parecer de encerramento documental, separado da certificação pedagógica

**Fase 1 concluída documentalmente quanto ao escopo definido no catálogo, com ressalvas expressas:** (a) programa literal do edital transcrito e mapeado; (b) dezoito artigos, um hub e seis notas correlatas de Português identificados, estes últimos sem auditoria integral; (c) 84/84 exercícios Markdown submetidos a classificação individual, incluindo 78 C/E e seis FGV A–E; (d) cinco exercícios suspensos e 14 com revisões de comentário/comando; (e) triangulação limitada com 28 itens oficiais em dois concursos da Cebraspe, ANATEL 2024 e IRBr 2025, sem extrapolar incidência; (f) arquitetura, riscos e backlog de Fase 2 já registrados nos checkpoints anteriores. Não se pode concluir que a disciplina esteja **pedagogicamente validada** ou que todos os exemplos estejam corretos, pois a fase detectou erros substantivos e não executou reparos ou testes de transferência com textos inéditos. Referências bibliográficas genéricas da banca devem ser substituídas por documentos individuais verificáveis.

**Marco de transição:** o status documental da auditoria é **“Fase 1: diagnóstico fechado, reparos pendentes”**. A Fase 2 terá de corrigir erros conceituais, rever os cinco S, melhorar os 14 R e verificar outros exemplos em contexto, sem apagar a trilha do diagnóstico. **Não iniciar edição de artigos, bancos de itens, gabaritos, identificadores, hubs ou catálogo nesta fase.** A política de concorrência requer ler SHA recente antes de qualquer atualização futura.

**Total histórico de registros `ING-001–ING-063`** permanece contagem de observações e propostas, não de erros comprovados. **Únicos arquivos alterados na presente etapa:** este relatório e sua entrada de estado no índice geral, após atualização segura. Nenhuma fonte de aprendizagem foi reescrita.


## 20. Implementação editorial autorizada: lotes de 11/11/2026

**Escopo:** apenas `3 - Materias/Ingles/`. A autorização posterior à Fase 1 permite correções e expansão nesta matéria, sem modificar diagnósticos de outras frentes. Os commits são individuais para minimizar conflitos com agentes simultâneos. Exercícios continuam **inéditos**, não oficiais Cebraspe.

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
| --- | --- | --- | --- | --- | --- |
| 06 | ING-001, inversão com `only if` anteposto | Exemplo corrigido, explicação de condição necessária e inversão | `d6b75785990d2c2d0d2e99a8dfbd52fb4d86cabf` | Arquivo recuperado e SHA conferido | corrigido |
| 08 | ING-044 e inferências abusivas; verbo `pauted`; pressuposição factiva | Gabarito item 1 C→E com justificativa textual; exemplo lexical e qualificação epistêmica | `3e129ef2820427bf5f3269e3d11025b86c459046` | Releitura/SHA após escrita | corrigido |
| 09 | ING-046, antecedente de `which` | Nota sobre relativa nominal versus proposicional e exemplos contrastivos | `dff71820d893ace744d3ea1f77d37e7a820ed725` | Releitura/SHA após escrita | corrigido |
| 10 | ING-052/053, conectivos | `inasmuch as` retirado da concessão; `yet` distinguido como conjunção | `64f61eeaab9be90c3c4c0a346f368b6ad5978331` | Conteúdo presente em releitura; SHA posterior divergente por gravação concorrente | corrigido |
| 12 | ING-049, escopo da proibição | Exemplo com `under no circumstances may`, sem troca indevida de escopo | `b05f5a15251f16c8108541dd200f364ed7abe74b` | Releitura/SHA após escrita | corrigido |
| 13 | ING-044, backshift obrigatório e aspecto simples | Regra contextualizada; item 4 C→E | `74248c40deaf75cc6146acfb0b4c849a22e885fa` | Releitura/SHA após escrita | corrigido |
| 14 | ING-059, finalidade omitida na passiva | Item 1 C→E e reescrita passiva completa | `2e9ed0a4b8f9a80ee37b650be0f5b5ddc7c04713` | Releitura/SHA após escrita | corrigido |
| 15 | ING-030, percentuais fictícios e `shall` generalizado | Retirados percentuais de modais; variação jurídica de `shall` | `2861d3ce064e8b037b7d39d61812ce261bdb381e`, `d222c2a582cdf90403fc2448ad397093333ec739` | Releitura/SHA em ambos os commits | corrigido |
| 16 | ING-031 e ING-044; escalas arbitrárias e conclusões indevidas | Retirada da escala percentual, nuance lógica universal/existencial; itens 2 e 3 C→E | `d989fff545efdd9e7f7f6d0c0d0a15a4d642065e`, `d2aa7a0fe49d2421739025553855a92d7a45b355` | Releitura/SHA em ambos | corrigido |
| 18 | ING-050, atribuição e transferência entre gêneros | Ajustes em verbos de relato e exercício autoral com três textos ficcionais e quatro itens C/E comentados | `05355f79014721deaef3fea9982c26fb7a29b3f0` | Releitura/SHA e marcadores dos itens presentes | corrigido |

**Limites da validação:** conferência remota de gravação e texto, sem execução local dos scripts; a publicação no GitHub Pages e o conjunto completo de validações editoriais dependem dos workflows. Nenhuma matéria externa, índice global ou catálogo foi modificada.

**Próximos passos:** revisar `11` (act/bill e diferenças UK/US), `07` (afirmações de frequência sem corpus), `17` (preservação de estrutura gramatical na paráfrase) e os 14 itens classificados R no diagnóstico. Ampliar leitura transferível em gêneros não institucionais, verificar fontes e confirmar workflow Pages concluído. A matéria **ainda não está integralmente validada**.
