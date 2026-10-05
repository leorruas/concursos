---
title: "Log de erros - Dataprev 2026"
type: "projeto"
status: "ativo"
created: 2026-07-05
updated: 2026-10-05
---

# Log de erros - Dataprev 2026

Registro de erros recorrentes, pegadinhas de banca e falsos cognatos lógicos identificados durante a resolução de questões e simulados da FGV.

Consulte o catálogo central de simulados em [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]], os diagnósticos dos [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]], [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]], [[00 - Desempenho/Simulados/Simulado-03|Simulado 03]], [[00 - Desempenho/Simulados/Simulado-04|Simulado 04]] e [[00 - Desempenho/Simulados/Simulado-05|Simulado 05]], além da [[00 - Desempenho/Simulados/Bateria-Mista-2026-09-14|Bateria mista Dataprev/FGV — 14/09/2026]].

## Língua Portuguesa (FGV)
- **Funções do "SE" (PA vs. IIS):** Q21 do Simulado 01 — *VTD/VTDI com sujeito paciente no plural exige concordância passiva (PA)*; *VTI/VI com preposição mantém verbo invariável na 3ª pessoa do singular (IIS)*. [[3 - Materias/Portugues/02 - sujeito#Sujeito Determinado vs. Indeterminado e as Funções da Partícula "SE"|Estudo em Sujeito]].
- **Crase antes de "que":** Q26 do Simulado 01 — *Diante de pronome relativo "que", a crase só ocorre se houver fusão da preposição "a" exigida pelo termo regente com o pronome demonstrativo "a" (= aquela) subentendido*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].
- **Regência culta de Verbos Transitivos Indiretos:** Q31 do Simulado 01 — *Assistir no sentido de ver/presenciar exige preposição "a" (assistir ao filme)*; *Preferir exige "X a Y", sendo vedado "do que" ou "mais que"*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].

- **Concordância com `haver`, `existir` e `ocorrer`:** Q21 do Simulado 02 — [D/C]. `Haver` existencial é impessoal; `existir` e `ocorrer` são pessoais e concordam com o sujeito. [[3 - Materias/Portugues/02 - sujeito#Locuções Verbais com Verbos Impessoais vs. Pessoais (Pegadinha FGV)|Estudo em sujeito e concordância]].
- **Adversativas × concessivas:** dúvida da Q12 do Simulado 02 e erro Q4 da bateria de 14/09/2026 — [C, recorrente]. `mas` e `contudo` preservam a coordenação; `embora` introduz subordinação concessiva e exige reconstrução da arquitetura argumentativa, normalmente com subjuntivo. A reincidência confirma problema de recuperação da fronteira, não ausência de teoria. [[3 - Materias/Portugues/03 - pontuacao e virgula#Coordenação adversativa × subordinação concessiva|Estudo em pontuação e conectivos]].

## Raciocínio Lógico (FGV)
- **Equivalência da Condicional (Contrapositiva):** Q61 do Simulado 01 — *$P \to Q \equiv \neg Q \to \neg P$ ("Volta Negando"). A negação $\neg(P \to Q) \equiv P \land \neg Q$ é negação, não equivalência*. [[3 - Materias/Logica/04 - equivalencias#1. Regra do "Volta Negando" (Contrapositiva)|Estudo em Equivalências]].
- **Tabela Verdade da Condicional:** Q65 do Simulado 01 — *A condicional $P \to Q$ só é FALSA quando $P$ é Verdadeiro e $Q$ é Falso ($V \to F$). Em todos os outros 3 casos ($V \to V$, $F \to V$, $F \to F$), a proposição composta é VERDADEIRA*. [[3 - Materias/Logica/05 - tabela verdade|Estudo em Tabela Verdade]].
- **Negação de Universais com Predicados Compostos:** Q70 do Simulado 01 — *$\neg(\forall x, P(x) \land Q(x)) \equiv \exists x, \neg P(x) \lor \neg Q(x)$ ("Pelo menos um não P ou não Q")*. [[3 - Materias/Logica/03 - quantificadores#Negação de Proposições Categóricas|Estudo em Quantificadores]].

- **Negação de universal com conjunção:** Q15 do Simulado 02 — [C]. `¬∀x(P ∧ Q) ≡ ∃x(¬P ∨ ¬Q)`. [[3 - Materias/Logica/03 - quantificadores#Negação de Universal com Predicados Compostos ("Todo... e...")|Estudo em quantificadores]].
- **Condicional disjuntiva e recíproca:** Q35 do Simulado 02 — [C]. `P → Q ≡ ¬P ∨ Q ≡ ¬Q → ¬P`; `¬Q ∨ P` representa a recíproca. [[3 - Materias/Logica/04 - equivalencias#2. Regra do "NEyMar" (Condicional Disjuntiva)|Estudo em equivalências]].
- **Tradução de "P se Q" na Linguagem Natural:** Bateria Dirigida (02/09/2026) — [C]. *"P se Q"* equivale a $Q \to P$ (o que vem após "se" é condição suficiente/antecedente). Inverter para $P \to Q$ gera a falácia da recíproca. [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|Estudo em Conectivos]].
- **Condicional Falsa e Violação de Regra:** Bateria Dirigida (02/09/2026) — [C]. Toda condicional $P \to Q$ estabelece uma proibição exclusiva: não pode ocorrer $P \land \neg Q$ ($V \to F$). Todos os demais cenários ($V \to V$, $F \to V$, $F \to F$) mantêm a proposição verdadeira e compatível. [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|Estudo em Conectivos]].
- **"P a menos que Q":** Bateria Dirigida (02/09/2026) — [K/C]. Equivale a $\neg Q \to P$ (ou $\neg P \to Q$). *"Não entregarei a menos que receba os dados"* $\equiv$ *não receber dados $\to$ não entregar relatório* $\equiv$ *entregar relatório $\to$ receber dados*. [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|Estudo em Conectivos]].
- **"P somente se Q" e Condição Necessária:** Bateria Dirigida (03/09/2026) — [C]. *"P somente se Q"* traduz-se formalmente como $P \to Q$ (o que vem após "somente se" é condição necessária/consequente). Inverter para $Q \to P$ confunde requisito necessário com garantia suficiente. Realizar a prova prática somente se aprovado na objetiva $\equiv \text{prática} \to \text{objetiva}$. [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|Estudo em Conectivos]].
- **"Sem Q, não ocorre P":** Bateria Dirigida (03/09/2026) — [C]. Estrutura de condição necessária ($\neg Q \to \neg P \equiv P \to Q$). Concluir $Q \to P$ (ex: "se tem autorização, o documento será enviado") é falácia da afirmação do consequente/recíproca; a contrapositiva válida é $P \to Q$ ("se o documento foi enviado, houve autorização"). [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|Estudo em Conectivos]].
- **Leis de De Morgan em Proposição Composta:** Bateria Mista (04/09/2026) — [C]. Ao negar uma conjunção $\neg(P \land Q)$, a negação distribui-se obrigatoriamente para **ambas** as proposições e inverte o conectivo para disjunção: $\neg(P \land Q) \equiv \neg P \lor \neg Q$. *"Não é verdade que Ana revisará e Bruno aprovará"* $\equiv$ *"Ana não revisará OU Bruno não aprovará"*. [[3 - Materias/Logica/04 - equivalencias#3. Leis de De Morgan (Negação de land e lor)|Estudo em Equivalências]].
- **Contrapositiva vs. Inversa na Condicional:** Bateria Mista (04/09/2026) — [C]. Dada a condicional $P \to Q$, a única condicional logicamente equivalente é a **contrapositiva** ($\neg Q \to \neg P$ — inverte a posição e nega ambos). A **inversa** ($\neg P \to \neg Q$ — nega ambos sem inverter) e a **recíproca** ($Q \to P$) **NÃO** são equivalentes à original. *"Se o sistema estiver indisponível, o atendimento será suspenso"* $\equiv$ *"Se o atendimento não for suspenso, o sistema não estará indisponível"*. [[3 - Materias/Logica/04 - equivalencias#1. Regra do "Volta Negando" (Contrapositiva)|Estudo em Equivalências]].
- **Negação de `nenhum`:** Q2 da bateria mista de 14/09/2026 — [C]. `Nenhum A é B` afirma interseção vazia; sua negação exige apenas que exista pelo menos um elemento na interseção: `Algum A é B`. Marcar `Todo A é B` transforma a negação em afirmação muito mais forte do que o necessário. [[3 - Materias/Logica/03 - quantificadores#Negação dos quantificadores|Estudo em quantificadores]].

## Legislação de SI e Proteção de Dados (Marco Civil e LGPD)
- **Marco Civil da Internet (Art. 2º - Fundamentos):** Q22 do Simulado 01 — *Livre iniciativa, livre concorrência e defesa do consumidor são fundamentos expressos do uso da internet no Brasil (art. 2º, V)*. [[3 - Materias/Informatica/01 - marco civil da internet#Fundamentos da internet no Brasil (art. 2º)|Estudo no Marco Civil]].
- **Neutralidade de Rede (Art. 9º):** Q24 do Simulado 01 — *Neutralidade refere-se estritamente ao tráfego isonômico de pacotes de dados na camada de transporte/infraestrutura, e não à gratuidade ou classificação jurídica de conteúdos*. [[3 - Materias/Informatica/01 - marco civil da internet#Princípios expressos (art. 3º) e a neutralidade de rede (art. 9º)|Estudo no Marco Civil]].
- **LGPD no Setor Público (Art. 23):** Q14 do Simulado 01 e Bateria LGPD — *Tratamento para execução de políticas públicas legais dispensa consentimento, mas exige estrita observância da finalidade pública e princípios da lei*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#3. Tratamento de dados pelo Poder Público e Empresas Estatais|Estudo na LGPD]].
- **Legítimo Interesse em Dados Sensíveis:** Q32 da Bateria LGPD — *Legítimo interesse (art. 7º, IX) é base apenas para dados comuns; NÃO existe legítimo interesse para dados pessoais sensíveis no art. 11*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#2. Bases legais e o regime do consentimento|Estudo na LGPD]].

## Comunicação Social (FGV)
- **Níveis de Cultura Organizacional de Schein:** Q10 e Q13 do Simulado 01 — *Artefatos (visíveis/superficiais: layout, vestimenta, rituais); Valores Compartilhados (discursos declarados, metas, justificativas conscientes); Pressupostos Básicos (invisíveis, inconscientes, verdades inquestionáveis que moldam a ação real)*. [[3 - Materias/Comunicacao/09 - comunicacao interna#3. Cultura Organizacional e os Três Níveis de Edgar Schein|Estudo em Cultura Organizacional]].
- **Clipping × auditoria de imagem na mídia:** Q5 da bateria de Comunicação de 14/09/2026 — [C]. Clipping é coleta e organização de inserções; análise de meses de cobertura comparando temas, veículos, fontes, concorrentes e padrões de exposição caracteriza auditoria de imagem na mídia. O distrator deslocava uma definição verdadeira para a etapa imediatamente anterior. [[3 - Materias/Comunicacao/08 - assessoria de imprensa#6. Clipping, análise tópica e auditoria de imagem|Estudo em assessoria de imprensa]].

## Atualidades / IA
- **Regime de metas, IPCA, Selic e Copom:** Q1 da bateria de 14/09/2026 — [K]. Queda do IPCA não produz redução automática da Selic nem na mesma proporção. A leitura correta exige separar meta central (3,0%), faixa de tolerância (1,5% a 4,5%), critério formal de seis meses consecutivos fora da faixa e decisão do Copom baseada no conjunto do cenário e expectativas. [[3 - Materias/Atualidades/03 - regime de metas inflacao selic copom#Tensões e pegadinhas|Estudo em regime de metas, inflação, Selic e Copom]].


## Simulado 05 — 05/10/2026

**Resultado:** 63/70 = 90,0%. **103,5/115 = 90,0%**. Conhecimentos Gerais: 36/40; Comunicação: 27/30.

### Língua Portuguesa
- **Q2 — condição necessária × suficiente:** [C]. “Só P se Q” foi tratado como se Q fosse suficiente; Q é condição necessária. [[3 - Materias/Logica/02 - conectivos#Condição suficiente e necessária|Condição suficiente e necessária]]
- **Q12 — discurso indireto:** [K/C]. Futuro do discurso direto exigia transposição para futuro do pretérito e ajuste do marcador temporal. [[3 - Materias/Portugues/10 - reescrita semantica e preservacao de sentido#6. Discurso direto × indireto|Discurso direto × indireto]]

### Raciocínio Lógico
- **Q27 — combinação por complemento:** [C]. Pelo menos uma entre A e B = total menos seleções sem A e B. [[3 - Materias/Logica/09 - analise combinatoria#Complemento com restrições|Complemento com restrições]]
- **Q29 original:** anulada por duas respostas necessariamente verdadeiras; não é erro do candidato. A Q29-R substituta foi acertada.

### Legislação
- **Q37 — prazos do Marco Civil:** [K, recorrente]. Segundo simulado consecutivo com a mesma inversão: conexão = 1 ano; acesso a aplicações = 6 meses. [[3 - Materias/Informatica/01 - marco civil da internet#Guarda de registros|Guarda de registros]]

### Comunicação Social
- **Q47 — Sérgio Mattos:** [K]. 1975–1985 = desenvolvimento tecnológico. [[3 - Materias/Comunicacao/23 - historia da midia e comunicacao empresarial no brasil#Fases da televisão brasileira — Sérgio Mattos|Fases da televisão brasileira]]
- **Q48 — texto manchetado:** [I]. O comando era EXCETO; a alternativa incompatível trazia períodos longos e vocabulário rebuscado. [[3 - Materias/Comunicacao/24 - radiojornalismo telejornalismo e linguagem audiovisual#Texto manchetado|Texto manchetado]]
- **Q49 — telejornalismo:** [C]. Sequência correta: off → passagem → sonora → pé → cabeça. [[3 - Materias/Comunicacao/24 - radiojornalismo telejornalismo e linguagem audiovisual#Telejornalismo: cinco elementos estruturais|Elementos do telejornalismo]]

### Acertos inseguros ou de alto valor
- Q7: injunção.
- Q30–Q33: Atualidades acertadas com baixa segurança declarada.
- Q39: incidente de segurança acertado com dúvida.
- Q45: neutralidade absoluta em comunicação pública rejeitada corretamente e nota refinada.
- Q52: issues management acertado; lacuna nominal do vault corrigida.
- Q55: Aaker acertado com dúvida; cinco dimensões já estavam consolidadas.

## Simulado 04 — 03/10/2026

**Resultado:** 63/70 = 90,0%. **105/115 = 91,3%**. Módulo I: 35/40; Comunicação: 28/30.

### Língua portuguesa
- **Q7 — ambiguidade de referência pronominal:** [I]. "Seu relatório" admitia dois antecedentes plausíveis. [[3 - Materias/Portugues/08 - coesao textual referenciacao e tempos verbais#Refinamento — ambiguidade de referência pronominal|Ambiguidade referencial]].
- **Q11 — hífen com prefixos:** [K]. Reincidência de recuperação ortográfica. [[3 - Materias/Portugues/05 - acordo ortografico#Refinamento — teste rápido de hífen|Hífen com prefixos]].

### Raciocínio lógico
- **Q28 — método do bloco:** [C, recorrente]. Cinco objetos externos × 3! ordens internas = 720. [[3 - Materias/Logica/09 - analise combinatoria#Elementos que devem ficar juntos: método do bloco|Método do bloco]].
- **Q25 — contrapositiva, acerto inseguro:** manter P → Q ≡ ¬Q → ¬P em recuperação espaçada. [[3 - Materias/Logica/04 - equivalencias#Contrapositiva — voltar negando|Contrapositiva]].

### Atualidades e IA
- **Q30 — regime de metas/Selic:** [K, recorrente]. Separar meta, faixa, expectativas, horizonte e decisão do Copom. [[3 - Materias/Atualidades/03 - regime de metas inflacao selic copom#Novo exemplo — corte da Selic com inflação ainda acima da meta|Regime de metas e Copom]].
- **Q31 — COP × Pre-COP, acerto inseguro:** baixa familiaridade declarada. [[3 - Materias/Atualidades/10 - mudanca climatica cop e mercado de carbono#Refinamento — COP × Pre-COP|COP × Pre-COP]].

### Legislação
- **Q37 — Marco Civil:** [K]. Conexão = 1 ano; acesso a aplicações = 6 meses. [[3 - Materias/Informatica/01 - marco civil da internet#Guarda de registros|Guarda de registros]].
- **Q36 — LAI, acerto com lacuna do vault:** acertou 25/15/5, mas a teoria não continha a tríade e foi refinada. [[3 - Materias/Direito Administrativo/01 - principios e lei de acesso a informacao#Refinamento — graus e prazos de sigilo|Graus e prazos de sigilo]].

### Comunicação social
- **Q41 — Jorge Duarte:** [C]. Interação × ouvidoria social. [[3 - Materias/Comunicacao/02 - comunicacao publica#Ouvidoria social|Ouvidoria social]].
- **Q45 — 7 Ps:** [C]. Process × Physical Evidence. [[3 - Materias/Comunicacao/19 - marketing institucional e branding#Refinamento — Process × Physical Evidence|7 Ps de serviços]].

## Simulado 03 — 30/09/2026

**Resultado:** 63/70 questões = 90,0%. Pontuação ponderada: **103,5/115 = 90,0%**.  
Módulo I: 36/40. Comunicação: 27/30 = 67,5/75.

### Lógica
- **Q26 — negação de universal com disjunção:** [C]. `¬∀x(D ∨ J) ≡ ∃x(¬D ∧ ¬J)`. A alternativa marcada usou `¬D ∨ ¬J`, que corresponde à negação de uma conjunção, não da disjunção original. [[3 - Materias/Logica/03 - quantificadores#Quantificador + `e` / `ou`|Quantificadores + De Morgan]].
- **Q27 — divisão diretamente proporcional:** [D]. Na razão 2:3:4, a soma é 9; R$ 7.200/9 = R$ 800 por unidade; a parcela da razão 2 é R$ 1.600. R$ 2.400 corresponde à razão 3. [[3 - Materias/Logica/10 - razoes proporcoes e divisao proporcional#Exemplos comentados|Divisão proporcional]].
- **Q28 — elementos juntos em permutação:** [C]. Tratar P e L como bloco gera 4! posições, mas é preciso multiplicar pelas 2! ordens internas do bloco: 4! × 2! = 48. [[3 - Materias/Logica/09 - analise combinatoria#Elementos que devem ficar juntos: método do bloco|Método do bloco]].

### Legislação
- **Q38 — art. 154-A vigente:** [C]. A obtenção efetiva de dados não é requisito do tipo básico; o caput exige invasão com finalidade específica. A redação vigente também não exige violação de mecanismo de segurança e prevê reclusão de 1 a 4 anos e multa. [[3 - Materias/Informatica/02 - lei 12737 delitos informaticos#Estrutura do art. 154-A|Lei 12.737 / art. 154-A]].

### Comunicação
- **Q56 — malinformation:** [C]. Informação verdadeira originalmente privada, divulgada deliberadamente para causar dano, enquadra-se em `malinformation`; deepfake é técnica de mídia sintética/manipulada e não foi descrita no caso. [[3 - Materias/Comunicacao/18 - fact checking e desinformacao#Wardle e Derakhshan: três tipos de desordem informacional|Wardle e Derakhshan]].
- **Q57 — conversão × alcance:** [C]. Realização de ação desejada é conversão; alcance mede pessoas/contas únicas expostas. [[3 - Materias/Comunicacao/06 - comunicacao digital#4. Métricas, KPIs e comunicação baseada em dados|Métricas digitais]].
- **Q58 — ROAS × ROI:** [C]. ROAS = receita atribuída à publicidade / gasto publicitário = 80/20 = 4. O valor 3 corresponde ao cálculo de ROI `(80-20)/20`. [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia#ROI × ROAS|ROI × ROAS]].

### Acertos com dúvida / lacunas de terminologia
- **Q6 — partícula apassivadora × IIS:** acerto com dúvida. `Precisa-se de profissionais` usa verbo transitivo indireto e `se` como índice de indeterminação do sujeito. [[3 - Materias/Portugues/02 - sujeito#A partícula `se`: partícula apassivadora × índice de indeterminação|Funções do se]].
- **Q12 — anáfora:** acerto por contexto, mas lacuna terminológica. Anáfora retoma conteúdo anterior; catáfora antecipa conteúdo posterior. [[3 - Materias/Portugues/01 - interpretacao de texto#Anáfora × catáfora|Anáfora × catáfora]].
- **Q44 — gatekeeping × agenda-setting:** acerto com dúvida. Selecionar o que entra/sai do fluxo noticioso = gatekeeping; saliência de temas = agenda-setting. [[3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa#Gatekeeping: seleção|Gatekeeping]].
- **Q66 — amostragem estratificada:** acerto sem recuperação consciente do conteúdo. População dividida em estratos relevantes, com seleção dentro de cada estrato; útil quando se quer garantir representação de subgrupos. [[3 - Materias/Comunicacao/17 - pesquisa em comunicacao#Fronteiras entre os principais desenhos probabilísticos|Amostragem estratificada]].
