---
title: "Câmara 2026: auditoria de Redação Discursiva e Peça Técnica, Fase 1"
type: "auditoria-por-materia"
status: "parcialmente-verificado"
concursoId: "camara-2026"
updated: 2026-11-11
escopo: "somente Redação Discursiva e Peça Técnica"
---

# Redação Discursiva e Peça Técnica: auditoria da Fase 1

> **Estado em 11/11/2026: PARCIALMENTE VERIFICADO.** Este documento é um relatório progressivo, não certificado de conclusão da auditoria integral. Não alterar artigos, IDs, catálogo, hub ou índice compartilhado nesta fase. Não registrar tentativas ou desempenho individual no repositório público.

## Escopo, método e checkpoint de concorrência

Cargo 1: Analista Legislativo, Comunicação Social, Divulgação Institucional, Cebraspe, prova prevista para 17/01/2027. Leitura documental pelo conector GitHub e cotejo da fonte primária externa. Base: `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, `1 - Planejamento/Camara 2026 - Auditoria integral por materia/Plano e protocolo.md`, `00 - Indice e estado.md`, `01 - Prompt de continuidade.md`, `1 - Planejamento/Camara 2026 - Estrategia de estudo ate janeiro.md`, `1 - Planejamento/Camara 2026 - Arquitetura conceitual e plano de artigos.md`, catálogo e guia específico.

**Checkpoint GitHub antes da escrita:** commit recente de referência `fbf13e79bb4619a7f0e9f6a24dc614b009b76054`; destino consultado antes da criação, resposta 404 (arquivo ausente). Como há agentes simultâneos, não houve edição do índice nem de outra matéria. Os SHAs dos artigos auditados estão no inventário.

## Bloco 1: matriz das exigências oficiais [conferido]

**Fonte primária:** [edital nº 1, de 02/10/2026, PDF](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades), especialmente itens 9.1, 9.4 a 9.9, páginas PDF 38–41. [Página de editais e retificações](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades): edital nº 5 (15/10) e nº 6 (21/10); nenhum altera os itens 9.1 e 9.8.5 aqui examinados. Atenção: os editais 2–4 são relativos à distribuição/sorteio de vagas; registro de verificação detalhada desses documentos ainda pendente.

| Exigência | Localizador oficial | Implicação pedagógica | Estado |
| --- | --- | --- | --- |
| Duas questões específicas, até 20 linhas cada, 15 pontos cada | 9.1(a) | Treinar duas respostas completas independentes; não usar modelo único de redação escolar | Conferido |
| Uma peça técnica específica, até 50 linhas, 30 pontos | 9.1(b) | Treinar função, destinatário, objeto, decisão e cobertura de vários quesitos, sem presumir gênero anunciado | Conferido |
| Total de 60 pontos; mínimo de aprovação de 30 | 9.8.5.3–4 | Analisar notas por componente e corte; mínimo não é meta competitiva | Conferido |
| Conteúdo, expressão escrita, norma formal, coerência, coesão; texto dissertativo conforme comando | 9.8.4 | Treino de redação subordinado ao enunciado e à precisão técnica | Conferido |
| Correção de conteúdo por no mínimo dois examinadores, com regra de convergência de 25% e terceira correção conforme divergência | 9.8.4.1.1–3 | Rubricas simuladas são aproximação, não nota oficial | Conferido |
| Questão: `NQi = NCi - 3 × NEi ÷ TLi` | 9.8.5.1(d) | Contar linhas efetivamente escritas e erros de língua; nunca deduzir nota formal sem NC justificada | Conferido |
| Peça: `NPT = NC - 6 × NE ÷ TL` | 9.8.5.2(d) | Treinar revisão linguística e gestão da extensão | Conferido |
| Grafia, morfossintaxe e propriedade vocabular na contagem de erros | 9.8.5.1(b), 9.8.5.2(b) | Ficha de revisão de desvios e vocabulário técnico | Conferido |
| Trechos fora da área ou do limite de linhas desconsiderados; fuga ao tema ou ausência de texto: zero na produção | 9.8.5.1(c,f), 9.8.5.2(c,f) | Simular folha com limites reais; checklist de cobertura | Conferido |
| Nota negativa ajustada a zero em cada produção | 9.8.5.1(e), 9.8.5.2(e) | Não transportar resultado negativo ao total | Conferido |
| Texto manuscrito legível e caneta esferográfica preta de material transparente, ressalvas de atendimento especializado | 9.4, 9.4.1 | Fazer ao menos treinos em papel | Conferido |
| Sem assinatura, rubrica ou marca identificadora fora do campo próprio: anulação | 9.5 | Treinar anonimato da folha definitiva | Conferido |
| Só documento definitivo válido; rascunho não avaliado; sem substituição por erro | 9.6–9.7 | Treinar transcrição ou escrita definitiva e controle de tempo | Conferido |
| Não devolver documento definitivo: anulação e eliminação; nota abaixo de 30: eliminação | 9.8.5.4–5 | Procedimento final explícito | Conferido |
| Discursivas corrigidas apenas para aprovados nas objetivas dentro das regras de convocação | 9.8.1–2, 8.11.6 e seguintes | Não pressupor que atingir o mínimo objetivo garante correção | Conferido no princípio; revisar detalhes e reservas |

**Importante:** a fórmula é desconto por erro proporcional às linhas produzidas, não desconto fixo por ocorrência. Exemplo *meramente aritmético*: dois erros em questão de 20 linhas correspondem a 0,30 ponto de desconto, mantida a nota de conteúdo; dois erros em peça de 40 linhas, 0,30. Não usar o exemplo como estimativa de avaliação de conteúdo.

**Não há gênero documental previamente determinado no item 9.1(b).** Parecer, relatório, briefing e plano são hipóteses de exercícios, não previsão oficial. A peça do Cargo 1 não deve ser confundida com parecer legislativo próprio de outro cargo.

## Bloco 2: inventário e avaliação individual [conferência direta]

A matriz da matéria virtual `redacao` no catálogo `data/catalogo-materias-por-concurso.json` contém hub `art-53aaeb5f3d694d57` e três artigos: `art-eee736362f70467f`, `art-7bcedf840e464bd8`, `art-1d85f42895fe4b85`. A consulta ao `index.md` indica exatamente os três links canônicos abaixo, mais o hub. **Isso confirma os cadastrados, não garante a ausência de arquivos órfãos**: varredura física completa da pasta e referências externas ainda pendentes.

| Material e SHA lido | Avaliação baseada no texto | Decisão para fase futura |
| --- | --- | --- |
| `3 - Materias/Redacao/redacao.md`; `1c1a91192e23238b3c88d71f518785551a53b373` | Hub genérico, estrutura introdução–desenvolvimento–conclusão e plano editorial 01–09. Menção datada à Dataprev como razão para adiar a redação; não reflete prioridade Câmara nem divisão 20/20/50. Não oferece roteiro operacional nem rubrica. **Importante** | **Corrigir** a orientação e tornar hub de navegação entre produção de questões e peça, preservando IDs. |
| `01 - leitura do tema e projeto de texto.md`; `10760ff60d31a7ff05acf52e709dd705620676cf` | Distinções sólidas assunto/tema/recorte/comando e exemplos comentados, inclusive diferenciação entre resposta técnica e dissertação. Falta transformação demonstrada de um comando *real* de Cebraspe em grade de quesitos, resposta integral de 20 linhas e avaliação. **Importante** | **Manter e corrigir**, acrescentar comando real documentado, grade de cobertura, contramodelo e treino graduado; não fundir com guia técnico. |
| `02 - tese e linha argumentativa.md`; `bc41dfd39a643fe6284ca894cdcaa0b020b12043` | Ensina distinção entre tese/opinião/argumento, coerência e extensão proporcional; exemplos de teses fortes/fracas. Há risco de superestimar exigência de tese opinativa em resposta normativa ou descritiva. Sem resposta completa por espelho oficial. **Importante** | **Manter e corrigir**: acrescentar função da *resposta nuclear* técnico-conceitual sem tese valorativa, com comparação de gêneros. |
| `03 - estrategias de argumentacao.md`; `6a6c5c37f6c5e5155f5dcdeaa34175336caac8ea` | Explica mecanismos causais, comparação, definição, dado, autoridade, analogia e limites; oferece exemplos e contraexemplos. Não mostra seleção estratégica para cumprir quesitos específicos em 20 linhas ou peça de 50; não mede execução. **Importante** | **Manter e corrigir**, incluir exercícios de síntese e escolha de argumento por quesito; manter separado do artigo 02. |
| `4 - Projetos/camara-2026/Discursiva Cebraspe - Camara 2026.md`; `119cb5e48621103c91a17d70d2ed0d8c46a79aeb` | Guia específico: estrutura, fórmulas, corpus referenciado, checklist para comando e espaços, possíveis objetos técnicos. Recurso mais próximo da prova. Entretanto não contém banco graduado de produção, folhas de resposta, reescritas demonstradas ou rubrica completa aplicada a texto do tamanho da prova. **Crítico de treinamento** | **Manter como guia-base**, corrigir e desdobrar os métodos operacionais em notas próprias; não duplicar fórmulas em cada texto. |

**Resultado pedagógico dos cinco materiais principais:** excelente ponto de partida conceitual em identificação de comando, tese e estratégia, porém **capacidade de produção em tempo e espaço reais não está demonstrada**. Ter exemplos de frases, mapas ou recomendações não equivale a entregar respostas completas, com revisão e pontuação por quesitos.

## Bloco 3: materiais compartilhados e fronteiras [amostra conferida, expansão pendente]

Artigos diretamente recuperados e examinados estruturalmente e em conteúdo introdutório:

- `3 - Materias/Comunicacao/52 - comunicacao institucional finalidade funcoes e publicos.md`: funções, públicos, identidade, imagem e legitimidade; seção `Aplicação discursiva`.
- `3 - Materias/Comunicacao/61 - planejamento estrategico de comunicacao e diagnostico organizacional.md`: diagnóstico, Kunsch, RACE, caso progressivo e seção discursiva.
- `3 - Materias/Comunicacao/70 - transparencia publica aplicada a comunicacao institucional.md`: transparência ativa/passiva, LAI, fontes e comunicação editorial.
- `3 - Materias/Comunicacao/71 - comunicacao publica governamental e politico partidaria.md`: finalidade e fronteiras, Ato da Mesa nº 218/2025.
- `3 - Materias/Comunicacao/78 - publicidade institucional promocao pessoal e artigo 37 paragrafo 1.md`: art. 37, §1º, finalidades e promoção pessoal.
- `3 - Materias/Comunicacao/82 - briefing publicitario problema contexto informacoes e qualidade.md`: objeto, problema/sintoma, público e qualidade do briefing.
- `3 - Materias/Direito Constitucional/13 - tramitacao e fases do processo legislativo.md`: fases, comissões, bicameralismo e seção de contribuição discursiva.
- `3 - Materias/Direito Constitucional/15 - parecer legislativo relatorio voto e deliberacao.md`: estrutura regimental de parecer de comissão, que **não prova** que a peça do Cargo 1 terá esse gênero.

**Limite deste checkpoint:** as oito notas foram recuperadas, com títulos, seções e trechos analisados; ainda falta leitura exaustiva das notas compartilhadas e cruzamento sistemático com outras fontes, especialmente Comunicação 60, 65, 75–76, 79–83, 87, 93, 97, 104, 108, 119–123; Português 08, 13, 20 e 34; e Direito Constitucional 06, 10–12, 16–17, 22, 36. As notas de outro cargo precisam ser usadas como repertório temático, sem misturar atribuições. A cobertura conceitual desses arquivos **não foi certificada nesta auditoria**.

## Bloco 4: comparação com padrões reais da banca [fontes oficiais conferidas]

Fontes públicas de padrões **definitivos** verificadas:
1. [PF Administrativo 2025, cargo 14, Técnico em Comunicação Social](https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/PF_25_ADM_PADR%C3%83O_DE_RESPOSTA_DEFINITIVO_CARGO_14.pdf): enuncia quesitos separados sobre efeitos de mídias digitais na cultura/relações de poder e desafios/benefícios do compartilhamento, com conceitos escalonados (0 a 4, etc.). Texto de modelo oficial é longo; o candidato não deve tentar copiá-lo integralmente.
2. [TCE-MG 2026, cargo 8, Comunicador Social, questão 2](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf): padrão sobre acessibilidade em eventos separa atuação profissional, exemplos de recursos e dimensão de inclusão; confirma cobrança de aspectos enumeráveis.
3. [Câmara, Processo Legislativo e Gestão, prova aplicada em 08/03/2026](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf): padrão definitivo consultado e previamente descrito no guia local; reforça segmentação por quesitos no contexto legislativo, **sem antecipar o gênero da peça de Divulgação Institucional**.

**Interpretação:** uma boa resposta da banca é verificável por unidade de conteúdo. O método deveria ensinar `comando → aspectos exigidos → conceitos/normas → microestrutura → redação → conferência de quesitos → revisão da língua`. O guia aproxima-se disso, mas faltam exemplares completos e treino orientado por falhas. **Pendente:** recuperar também os *enunciados/cadernos* correspondentes aos três padrões para construir pares íntegros enunciado–espelho; cotejar todos os quesitos da peça da Câmara e não usar apenas o resumo do guia.

## Bloco 5: matriz de competências para a produção [interpretação fundamentada]

| Competência | Evidência atual | Lacuna e risco |
| --- | --- | --- |
| Discursivas curtas | 01 e guia explicam comando/roteiro | **Crítico**: faltam respostas completas e reescritas em 20 linhas |
| Organização e argumentos | 02 e 03 detalhados | **Importante**: treino de densidade sem introduções longas |
| Conceitos e normas | Artigos compartilhados com repertório | **Crítico**: falta protocolo de citação segura, hipótese jurídica e consequência, sem inventar artigo ou jurisprudência |
| Linguagem institucional | Princípios espalhados em Comunicação e Português | **Importante**: distinguir voz pública, linguagem simples, neutralidade institucional, gênero do comando |
| Peça técnica | Guia lista possíveis formatos e lógica de quesitos | **Crítico**: nenhum modelo de peça completa de 50 linhas identificado; ausência de formatos contrastados e critérios de seleção |
| Espaço e revisão | Fórmulas e alertas no guia | **Crítico**: falta prática manuscrita, estimativa linhas/quesito, gestão do tempo e dupla revisão |
| Atendimento ao espelho | Guia cita padrões e orienta cobertura | **Crítico**: falta rubrica aplicada a resposta real/autoral, com erros anotados e versões reescritas |
| Exercícios progressivos | Exemplos de frases e mapas nos artigos | **Crítico**: não há sequência regular identificada de produções completas sob restrições |

O perigo principal é **fluência aparente**: conseguir explicar oralmente conceitos e identificar argumentos, mas perder muitos quesitos ao condensá-los. Não tratar domínio de teoria como prova de competência escrita.

## Bloco 6: arquitetura recomendada, sem executar Fases 2–5

Preservar os três artigos atuais e seu hub. O guia Câmara permanece documento de estratégia e fonte de fórmulas. Na fase posterior, organizar novos objetos pelos nove candidatos `CAM-DIS-001–009`, respeitando dependências:

| Prioridade | Proposta | Finalidade e pré-requisito |
| --- | --- | --- |
| P0 | **CAM-DIS-001: decomposição de comando e espelho** | Cada verbo, objeto e detalhe obrigatório vira linha da rubrica; depende do artigo Redação 01 e dos padrões oficiais |
| P0 | **CAM-DIS-002: resposta conceitual curta de 20 linhas** | Modelos completos e contramodelos comentados; depende de DIS-001 e teoria de Comunicação |
| P0 | **CAM-DIS-005: peça técnica, finalidade e gênero** | Estruturas adaptáveis sem supor formato; depende de DIS-001 e guia Câmara |
| P0 | **CAM-DIS-009: revisão, corte e precisão** | Revisar conteúdo, norma, propriedade lexical, número de linhas e prova manuscrita; depende de DIS-002 e DIS-005 |
| P1 | **CAM-DIS-003: comparação e fronteira** | Treinar critério único, alternativas e consequências; depende de DIS-002 e Redação 03 |
| P1 | **CAM-DIS-004: resposta normativa aplicada** | Dispositivo, hipótese, condição, exceção, consequência; depende de DIS-002 e notas jurídicas certificadas |
| P1 | **CAM-DIS-006: diagnóstico de comunicação em peça** | Contexto, evidência, problema, objetivo, público e decisão; depende de DIS-005 e Comunicação 61/82 |
| P1 | **CAM-DIS-007: plano de comunicação/campanha** | Diferenciar situação, metas, ações, públicos, meios e limitações; depende de DIS-006 e artigos de planejamento |
| P1 | **CAM-DIS-008: justificativa, indicadores e avaliação** | Vincular solução a evidência, medida e interpretação; depende de DIS-007 e artigos de métricas |

Evitar duplicação: `Redação 02` continua como teoria da tese; `DIS-002` mostra como produzir a resposta técnica completa. `Redação 03` continua como biblioteca de estratégias; `DIS-003` treina a comparação corrigível. **Não fundir** os três artigos fundamentais. Rever o hub obsoleto apenas na fase autorizada.

### Rotina compatível com 3 horas e duas produções semanais

**Prática A: 75–90 minutos**, questão de 20 linhas (10 minutos decomposição + 25–30 produção manuscrita + 20 análise por quesitos + 15–25 reescrita cirúrgica). Uma semana pode alternar questão conceitual e normativa. **Prática B: 90–105 minutos**, peça de até 50 linhas (10–15 minutos de leitura e grade + 45–50 produção + 20–25 correção + 10–15 reescrita dirigida). Alternar peças de diagnóstico, briefing, plano, justificativa e análise institucional **como objetos didáticos hipotéticos**.

O plano vigente já reserva **3 horas/semana** para discursiva, correção e reescrita e **dois momentos de produção**. O orçamento proposto soma aproximadamente 165–195 minutos; o teto deve ser mantido em 180 minutos, reduzindo a segunda prática a 90 quando a primeira consumir 90. Não aumentar carga geral por simples acumulação. No começo, usar a primeira semana para uma linha de base, conforme estratégia existente; depois manter duas produções semanais, integrando conteúdos estudados nos blocos de Comunicação e Legislativo.

### Instrumento de correção: obrigatório antes de pontuar

Para cada tentativa, produzir uma ficha: identificação de fonte/enunciado (oficial ou inédito **autoral**), limites e tempo; tabela de quesitos exigidos; evidência literal do candidato; status `atendido/parcial/ausente/incorreto`; erro técnico ou normativo; erros de gramática, grafia e vocabulário; TL; texto corrigido; reescrita sugerida e nova tentativa em 3–7 dias. Calcular fórmula do edital **somente quando houver base justificável de NC e contagem de NE/TL**. Uma rubrica criada para treino deve declarar expressamente `rubrica didática, não espelho oficial`; nunca inventar nota oficial nem usar a nota do texto-modelo como referência automática.

Manter as produções e dados individuais exclusivamente no cofre privado `leorruas/concurso-dados`, após checar seu contrato. O relatório editorial público pode registrar **apenas modelos genéricos sem texto individual** e metodologia, sem histórico do estudante.

## Backlog de problemas

| ID | Grau | Achado | Ação futura verificável | Estado |
| --- | --- | --- | --- | --- |
| RD-001 | Crítico | Falta de respostas completas de 20 e 50 linhas avaliadas com rubrica | Elaborar 2 modelos de questão e 2 de peça, com contramodelos e grade por quesito | Proposto |
| RD-002 | Crítico | Sem banco de pares enunciado–padrão oficial–autópsia | Recuperar cadernos originais PF/TCE/Câmara e cotejar todos os quesitos | Pendente |
| RD-003 | Crítico | Treino de transferência teoria→escrita não operacionalizado | Executar baseline e protocolo de duas práticas/semana com reescrita | Proposto |
| RD-004 | Importante | Hub ainda orientado à Dataprev e à redação genérica | Atualizar o hub para Cargo 1 e provas 20/20/50 | Proposto |
| RD-005 | Importante | Tese opinativa pode ser indevidamente aplicada a questões técnicas | Exemplos contrastados de resposta conceitual, normativa e argumentativa | Proposto |
| RD-006 | Importante | Sem protocolo de citação jurídica segura e fronteiras institucionais | Criar DIS-004, vincular normas oficiais verificadas | Proposto |
| RD-007 | Importante | Material compartilhado ainda não lido integralmente | Completar matriz de fontes de Comunicação, Direito e Português | Pendente |
| RD-008 | Importante | Sem evidência de execução manuscrita sob tempo | Criar folhas com limites reais e revisão de legibilidade | Proposto |
| RD-009 | Melhoria | Exemplo e contraexemplo pouco conectados à avaliação da banca | Marcar o quesito ganho/perdido em cada trecho | Proposto |
| RD-010 | Importante | Inventário físico e órfãos não verificados | Auditar integralmente árvore da pasta e remissões externas | Pendente |

## Checkpoints e próximos passos

- **B1: exigências formais e cálculo do edital nº 1**: verificados diretamente; retificações nº 5 e nº 6 acessadas, sem alteração do regime discursivo.
- **B2: catálogo, hub, três artigos e guia especializado**: recuperados e lidos; decisões de manter/refinar registradas; nenhum conteúdo alterado.
- **B3: compartilhados**: oito notas recuperadas e inspecionadas em recortes; **leitura exaustiva e ampliação pendentes**.
- **B4: padrões oficiais**: três fontes definitivas acessadas; **enunciados e correspondência granular integral pendentes**.
- **B5: matriz de lacunas e arquitetura**: hipótese pedagógica fundamentada, **ainda sem teste de produção real**.
- **B6: persistência**: somente este arquivo de auditoria; índice e demais matérias não editados.

**Próximo bloco obrigatório para declarar Fase 1 integral:** varredura física de todos os arquivos de Redação e links externos; leitura integral dos compartilhados de maior potencial; pareamento enunciado–padrão definitivo, em especial a peça da Câmara; revisão sistemática das exigências formais do edital e de retificações posteriores que venham a surgir; fechamento da matriz de cobertura e distinção entre referências verificadas e propostas autorais. **Não declarar concluído antes desses passos.**


## Continuação de 11/11/2026: blocos 7–10, corpus real e ampliação transversal

**Controle de concorrência:** esta continuação parte do arquivo de auditoria com blob SHA `e8b586cffb3053d33c8c6092edbab5abda572847` e da leitura do commit de referência mais recente `a5d21dddfcf7c1cd49b61ce64e24177bd15be9df` antes da gravação. Somente este relatório será atualizado. Fase 1 continua **parcialmente verificada**; nenhum artigo de estudo, catálogo, gabarito ou índice geral deve ser modificado.

### Bloco 7: pareamento documental com cadernos oficiais [parcialmente conferido]

**Cebraspe, Polícia Federal 2025, Técnico em Comunicação Social:** foram lidos lado a lado o [enunciado original da prova](https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/094_PF_014_DISC.pdf) e o [padrão definitivo](https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/PF_25_ADM_PADR%C3%83O_DE_RESPOSTA_DEFINITIVO_CARGO_14.pdf). O enunciado cobra: (1) efeitos das mídias digitais na cultura organizacional **e** nas relações de poder, com valor de 9 pontos; (2) desafios **e** benefícios do compartilhamento conforme colaboração, com valor de 10 pontos. O ponto de apresentação/estrutura completa os 20 pontos daquela prova. O padrão diferencia atendimento apenas de um subaspecto (cultura **ou** poder) do atendimento simultâneo de ambos; no segundo quesito discrimina aspectos de resistência e vantagens organizacionais. **Transferência pedagógica:** passar do verbo geral para uma matriz de subaspectos e verificar cada um no texto, inclusive relações de causalidade. **Limite:** o caderno da PF oferece **30 linhas**, portanto não equivale ao limite de 20 linhas da Câmara atual; pontuação e fórmula da PF não devem ser copiadas.

**Cebraspe, Câmara dos Deputados, cargo de Processo Legislativo e Gestão, prova aplicada em 08/03/2026:** foi localizado o [caderno original completo da prova discursiva](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/4536C347379F236B51C537AC0D040D50717F27BF79FE55B56E95C3E8DFB96839.pdf), confrontado com o [padrão de resposta definitivo](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf). O caderno original dá **20 linhas para cada questão e 50 linhas para a peça**, mesma arquitetura de espaço do cargo-alvo, mas outro conteúdo e cargo. A peça exigiu expressamente **parecer técnico** solicitado pelo presidente da Câmara à Secretaria-Geral da Mesa, sobre uma medida provisória de crédito extraordinário. Seus cinco aspectos tinham pesos **6,00 / 8,00 / 2,00 / 7,00 / 5,50 pontos**, mais até **1,50** de apresentação/estrutura, conforme aquele caderno. A estrutura oficial é de cinco **quesitos**, com subaspectos enumerados no padrão. O candidato teria de cobrir rito, requisitos constitucionais, distinção entre créditos, vício/convalidação e efeitos da rejeição. **Transferência pedagógica:** treinar peças que respondam integralmente ao comando, com distribuição de espaço por pesos e complexidade, sem presumir que a peça para Divulgação Institucional será parecer jurídico ou que reserva 1,50 ponto de apresentação na prova futura. Para as questões dessa prova de março, o caderno destinava até **0,70 ponto** à apresentação/estrutura; isso é constatação do concurso de comparação, não regra antecipada do Cargo 1 de Divulgação Institucional em janeiro.

**Cebraspe, TCE-MG 2026, Comunicador Social:** [padrão definitivo da questão 2](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf) analisado. O espelho considera o papel do profissional de comunicação, enumeração de recursos concretos de acessibilidade e inclusão/equidade, e distingue um, dois ou três exemplos na escala de pontuação do quesito 2.2. **O enunciado original dessa questão ainda não foi recuperado**: não afirmar pareamento documental completo. O edital daquele certame permitia até **60 linhas por questão**, formato distinto; não transportar sua extensão ou fórmula à Câmara.

**Contraste entre dois tipos de evidência:** o *padrão de resposta* costuma ser mais longo do que a resposta limitada na folha do candidato. Portanto o material precisa ensinar **extração das unidades pontuáveis do espelho**, não imitação da extensão do padrão oficial. O texto autoral completo de 20/50 linhas e qualquer avaliação simulada devem ser rotulados expressamente como **modelo didático**, nunca resposta oficial.

### Bloco 8: matriz ampliada de material compartilhado [inventário e leitura dirigida; sem certificação integral]

Foram acessados diretamente os arquivos abaixo, confirmando seus títulos internos, seção temática e, quando aplicável, exemplos e orientações de aplicação. A função pedagógica indicada decorre do conteúdo lido; **não implica que todos os dispositivos ou autores de cada nota tenham sido revalidados independentemente**.

| Núcleo e artigos recuperados | Potencial para a discursiva e a peça | Risco específico |
| --- | --- | --- |
| **Comunicação institucional e públicos:** Comunicação 52, 60 | Definir função institucional; mapear interessados e barreiras; distinguir público afetado de público alcançado | Tratar classificação de públicos como diagnóstico suficiente ou reduzir legitimidade a reputação |
| **Planejamento e canais:** Comunicação 61, 65, 82, 83 | Construir diagnóstico, briefing, finalidade, público, linha editorial, meios, decisão e evidência | Propor campanha antes de esclarecer o problema; confundir atividade com objetivo |
| **Comunicação pública e transparência:** Comunicação 70, 71, 75, 76, 78 | Relacionar art. 37, §1º, LAI, finalidade institucional, linguagem simples, limites e testes de compreensão | Misturar comunicação institucional, promoção pessoal, orientação de serviço e publicidade político-partidária |
| **Publicidade e redação profissional:** Comunicação 79, 81, 87, 93, 97 | Distinguir categorias de publicidade, mensagem, suporte, argumento, redação impessoal e finalidade pública | Usar tom publicitário inadequado à peça técnica ou importar normas do Executivo sem examinar regime da Câmara |
| **Avaliação e evidências:** Comunicação 104, 108, 119 | Seleção de indicadores, limites da inferência, distribuição e avaliação de resultados | Confundir visualização/alcance com impacto ou atribuir causalidade sem base |
| **Ética e contratação:** Comunicação 120, 123 | Limites de conteúdo e contratação da publicidade: fronteiras de CONAR, CDC e Lei nº 12.232/2010 | Afirmar regra jurídica sem verificar hipótese de incidência, competência, edição e relação com a Câmara |
| **Português:** Português 08, 13, 20, 34 | Coesão, encadeamento argumentativo, conectores e adaptação de formalidade a texto institucional | Texto elegante, mas sem cobertura de comando; encadeamento adversativo/concessivo incorreto; redação oficial confundida com formato técnico não pedido |
| **Processo legislativo e Constituição:** Direito Constitucional 06, 10, 11, 12, 13, 15, 16, 17, 22, 36 | Contextualizar rito, competências, proposições, deliberação, produção de lei e significado de parecer **quando o comando envolver comunicação legislativa** | Importar peça técnico-jurídica do cargo de Processo Legislativo e Gestão como gênero certo para Divulgação Institucional |

**Nota de rastreabilidade:** as notas Comunicação 104 e Direito Constitucional 16 foram localizadas após recuperar seus nomes físicos **corretos** do `index.md`: `3 - Materias/Comunicacao/104 - pesquisa de opiniao publica objeto perguntas e limites.md` e `3 - Materias/Direito Constitucional/16 - discussao votacao quoruns e modalidades de decisao.md`. Tentativas com nomes deduzidos retornaram 404; 404 por caminho incorreto **não significa** ausência de conteúdo. Estes dois caminhos foram recuperados e confirmados.

**Análise de adequação ao cargo:** artigos de comunicação oferecem repertório teórico e alguns já incluem seções de `Aplicação discursiva`, mas predominantemente explicam **o que pensar**, não demonstram **como entregar** uma resposta inteira de 20 linhas ou uma peça de 50 linhas corrigível por quesitos. Artigos de Processo Legislativo servem como base contextual, mas **não devem deslocar o foco específico de gestão, planejamento e execução de comunicação institucional**. No caso de uma peça sobre divulgação de atividades legislativas, os procedimentos legislativos são contexto a representar com fidelidade, não necessariamente o núcleo de avaliação jurídica.

**Pendente:** auditoria exaustiva de cada seção de todos os artigos compartilhados, verificando conceitos, fontes, exceções e atualização normativa, pertence às respectivas frentes disciplinares. Esta auditoria de Redação limita a revisão transversal à **utilidade para escrita**, sem emitir certificação normativa sobre artigos que outros agentes estão auditando.

### Bloco 9: achados metodológicos incrementais

1. **RD-011 (crítico): confusão entre padrão e resposta executável.** O espelho oficial apresenta desenvolvimento mais extenso que a folha. Exigir nos novos materiais uma coluna `aspecto oficial → frase(s) suficiente(s) → linhas reservadas` e distinguir requisito mínimo comprovado de formulação apenas elegante.
2. **RD-012 (crítico): ausência de treino de alocação ponderada.** Caderno Câmara março/2026: pesos 6/8/2/7/5,5. Exigir escolha deliberada de prioridades de conteúdo e checagem de aspectos de maior peso. **Não transpor esses pesos a exercício inédito sem chamá-los de arbitrados.**
3. **RD-013 (importante): autenticidade e rastreabilidade de corpus.** Guardar separadamente link e data de enunciado e de padrão definitivo; caderno PF e Câmara foram pareados, TCE-MG apenas espelho até o momento.
4. **RD-014 (importante): papel institucional e gênero.** Parecer técnico foi expressamente requerido em março/2026 para outro cargo. O edital atual apenas anuncia `peça de natureza técnica`; treino de Comunicação deve incluir formas funcionais diversas sem tratar nenhuma como gênero confirmado.
5. **RD-015 (importante): revisão da nota de conteúdo.** O edital 9.8.4/9.8.5 avalia estrutura, desenvolvimento e gramática por fórmula. A correção por quesitos de um treino precisa separar cobertura conceptual, erro normativo, organização e desvio linguístico, sem prometer equivalência psicométrica ao Cebraspe.
6. **RD-016 (melhoria): produção em papel.** O caderno Câmara 2026 apresenta 20/20/50 linhas; medir em folha real, pois linhas em Markdown ou editor digital não são equivalentes.

### Bloco 10: checkpoints, status e integridade

- **Fontes oficiais agora cotejadas com enunciados:** PF Administrativo 2025 e Câmara Processo Legislativo e Gestão 08/03/2026, com padrões definitivos e limites registrados. **TCE-MG:** padrão oficial verificado, enunciado pendente.
- **Artigos de Redação:** três artigos canônicos, hub e guia específico preservados e previamente avaliados. `index.md` e catálogo confirmam vínculos, mas **inventário físico exaustivo de possíveis arquivos órfãos continua pendente**; a API de arquivos pontuais não fornece listagem de diretório neste fluxo.
- **Compartilhados:** novos arquivos de Comunicação, Português e Processo Legislativo efetivamente recuperados, com leitura dirigida de estrutura e trechos-chave, completando amostra mais representativa. Não equiparar isso a leitura exaustiva ou verificação independente da norma.
- **Estado final deste bloco:** **Fase 1 continua parcialmente verificada**. Para encerramento integral, resta listagem física inequívoca de Redação, inspeção integral das fontes adicionais que sustentem modelos, enunciado TCE-MG, verificação da matriz do edital frente a retificações posteriores e aplicação demonstrativa de rubrica em peças completas (autoria identificada). O relatório não cria nem modifica essas peças nesta etapa.
