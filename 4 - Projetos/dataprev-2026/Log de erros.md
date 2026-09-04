---
title: "Log de erros - Dataprev 2026"
type: "projeto"
status: "ativo"
created: 2026-07-05
updated: 2026-09-04
---

# Log de erros - Dataprev 2026

Registro de erros recorrentes, pegadinhas de banca e falsos cognatos lógicos identificados durante a resolução de questões e simulados da FGV.

Consulte o catálogo central de simulados em [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]] e os diagnósticos do [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]] e do [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]].

## Língua Portuguesa (FGV)
- **Funções do "SE" (PA vs. IIS):** Q21 do Simulado 01 — *VTD/VTDI com sujeito paciente no plural exige concordância passiva (PA)*; *VTI/VI com preposição mantém verbo invariável na 3ª pessoa do singular (IIS)*. [[3 - Materias/Portugues/02 - sujeito#Sujeito Determinado vs. Indeterminado e as Funções da Partícula "SE"|Estudo em Sujeito]].
- **Crase antes de "que":** Q26 do Simulado 01 — *Diante de pronome relativo "que", a crase só ocorre se houver fusão da preposição "a" exigida pelo termo regente com o pronome demonstrativo "a" (= aquela) subentendido*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].
- **Regência culta de Verbos Transitivos Indiretos:** Q31 do Simulado 01 — *Assistir no sentido de ver/presenciar exige preposição "a" (assistir ao filme)*; *Preferir exige "X a Y", sendo vedado "do que" ou "mais que"*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].

- **Concordância com `haver`, `existir` e `ocorrer`:** Q21 do Simulado 02 — [D/C]. `Haver` existencial é impessoal; `existir` e `ocorrer` são pessoais e concordam com o sujeito. [[3 - Materias/Portugues/02 - sujeito#Locuções Verbais com Verbos Impessoais vs. Pessoais (Pegadinha FGV)|Estudo em sujeito e concordância]].
- **Adversativas × concessivas:** dúvida da Q12 do Simulado 02 — `mas` e `contudo` preservam a coordenação; `embora` introduz subordinação concessiva e exige reconstrução, normalmente com subjuntivo. [[3 - Materias/Portugues/03 - pontuacao e virgula#Coordenação adversativa × subordinação concessiva|Estudo em pontuação e conectivos]].

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

## Legislação de SI e Proteção de Dados (Marco Civil e LGPD)
- **Marco Civil da Internet (Art. 2º - Fundamentos):** Q22 do Simulado 01 — *Livre iniciativa, livre concorrência e defesa do consumidor são fundamentos expressos do uso da internet no Brasil (art. 2º, V)*. [[3 - Materias/Informatica/01 - marco civil da internet#Fundamentos da internet no Brasil (art. 2º)|Estudo no Marco Civil]].
- **Neutralidade de Rede (Art. 9º):** Q24 do Simulado 01 — *Neutralidade refere-se estritamente ao tráfego isonômico de pacotes de dados na camada de transporte/infraestrutura, e não à gratuidade ou classificação jurídica de conteúdos*. [[3 - Materias/Informatica/01 - marco civil da internet#Princípios expressos (art. 3º) e a neutralidade de rede (art. 9º)|Estudo no Marco Civil]].
- **LGPD no Setor Público (Art. 23):** Q14 do Simulado 01 e Bateria LGPD — *Tratamento para execução de políticas públicas legais dispensa consentimento, mas exige estrita observância da finalidade pública e princípios da lei*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#3. Tratamento de dados pelo Poder Público e Empresas Estatais|Estudo na LGPD]].
- **Legítimo Interesse em Dados Sensíveis:** Q32 da Bateria LGPD — *Legítimo interesse (art. 7º, IX) é base apenas para dados comuns; NÃO existe legítimo interesse para dados pessoais sensíveis no art. 11*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#2. Bases legais e o regime do consentimento|Estudo na LGPD]].

## Comunicação Social (FGV)
- **Níveis de Cultura Organizacional de Schein:** Q10 e Q13 do Simulado 01 — *Artefatos (visíveis/superficiais: layout, vestimenta, rituais); Valores Compartilhados (discursos declarados, metas, justificativas conscientes); Pressupostos Básicos (invisíveis, inconscientes, verdades inquestionáveis que moldam a ação real)*. [[3 - Materias/Comunicacao/09 - comunicacao interna#3. Cultura Organizacional e os Três Níveis de Edgar Schein|Estudo em Cultura Organizacional]].
