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


## Continuação de 11/11/2026: blocos 11–13, fechamento de corpus e verificação primária do edital

**Regra de leitura temporal:** este bloco atualiza os estados anteriores; os itens marcados como pendentes nos blocos precedentes continuam registrados como histórico, mas o estado presente consta abaixo. **Concorrência:** antes de gravar, conferidos o SHA atual deste arquivo, `ddf2e23857e107f649f8adb3fd2a01d7612f1514`, e o commit recente do repositório, `5991bbf9e36ca0dfb4e2c106a6fc25819fde8627`. Modificação restrita a este relatório.

### Bloco 11: Cebraspe TCE-MG, enunciado original e espelho definitivo [CONFERIDO]

**Pendência RD-002 (corpus): parcialmente resolvida.** Localizado o [caderno discursivo original oficial de cargos 6 a 10 do TCE-MG 2025, aplicação em 25/01/2026, PDF](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/3ADF49146A2E55690BB77554138AD177F6BD763BC8B6C35FECD4EB7BAB4A06CD.pdf), p. 4 do PDF (índice 3). A Questão 2 do Cargo 8, Comunicador Social, foi inspecionada visualmente e confrontada com o [padrão definitivo oficial, página/trecho referente à Questão 2](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf). O caderno determina:

| Quesito literal por sentido, sem reproduzir integralmente o enunciado | Valor anunciado | Correspondência no padrão definitivo |
| --- | ---: | --- |
| Papel do profissional de comunicação no planejamento de acessibilidade em eventos | 3,50 | Exige atribuições e planejamento efetivos; mencionar acessibilidade genericamente é conceito insuficiente |
| Pelo menos três recursos de acessibilidade e/ou tecnologias assistivas | 3,00 | Conceitos 0–3 graduam contagem de recursos: nenhum, um, dois, três ou mais |
| Contribuição desses recursos para inclusão social, equidade e combate ao capacitismo | 3,00 | Requer vínculo explicativo de recursos com efeitos sociais e enfrentamento da discriminação |

O próprio caderno reserva até **0,50 ponto** para apresentação e estrutura, totalizando 10,00 pontos. **Regra operacional extraída da prova real:** números e conectivos em comandos são requisitos pontuáveis; um estudante pode explicar profundamente um recurso e deixar dois exemplos exigidos de fora. Também pode listar três recursos e perder o quesito que exige explicar sua contribuição para inclusão/equidade/capacitismo. Uma resposta adequada depende da função de cada trecho, não da simples presença de termos.

**Limite de analogia:** TCE-MG utiliza até **60 linhas** por questão no edital daquele concurso, e não 20; os pesos acima são exclusivos da questão de acessibilidade de 2026, não pesos de futuras questões da Câmara.

**Estado atualizado dos três pares oficiais:** PF Administrativo 2025 (enunciado e padrão definitivo), Câmara Processo Legislativo e Gestão março/2026 (enunciado e padrão definitivo), TCE-MG Cargo 8 janeiro/2026 (enunciado e padrão definitivo) **localizados e cotejados na extensão acima**. A confirmação é documental; não equivale a uma análise estatística da banca nem a predição de temas.

### Bloco 12: revisão do edital atual em fonte primária [CONFERIDO]

Fonte: [Câmara dos Deputados, Edital nº 1, de 02/10/2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades), páginas do PDF **38, 39 e 40 (índice zero)**, itens **9.1, 9.4–9.8.5.5**. Inspeção visual realizada em especial nas páginas 39–40. Confirma:

- Para o **Cargo 1**, **duas questões** com até **20 linhas**, **15 pontos** cada, e uma **peça técnica** com até **50 linhas**, **30 pontos**, todos conhecimentos específicos, total de **60 pontos**.
- `NQi = NCi - (3 × NEi / TLi)` e `NPT = NC - (6 × NE / TL)`. O fator 3 é de cada questão e 6 é da peça; `TL` conta **linhas efetivamente escritas**, não o máximo permitido. NC é a nota de conteúdo que inclui apresentação/estrutura e desenvolvimento do tema; a penalização adicional é da modalidade escrita.
- Critérios linguísticos incluem **grafia, morfossintaxe e propriedade vocabular**; texto excedente ou fora do espaço próprio não entra na avaliação; fuga ao tema ou ausência de texto implicam zero **no respectivo componente**.
- `NFPD = NQ1 + NQ2 + NPT`; aprovação discursiva requer **NFPD >= 30**; nota insuficiente elimina. Não devolver o documento definitivo anula a prova e elimina.
- A avaliação de conteúdo é feita por pelo menos dois examinadores; **25% da nota máxima de conteúdo possível na questão/peça**, não 25% da nota final do concurso, é o limiar de divergência das correções. Terceira correção sob a condição do item 9.8.4.1.3.
- Texto definitivo manuscrito legível com caneta preta transparente (com exceções de atendimento especializado), sem marca identificadora, e sem substituição do documento por erro do candidato; folhas de rascunho não são avaliadas. As provas discursivas só são corrigidas para o grupo habilitado conforme 8.11.6 e seguintes.
- O edital exige *texto dissertativo conforme o comando*. O rótulo genérico `peça técnica` **não define formato único**. Apresentar modelo de parecer/briefing/plano como obrigatório seria conjectura.

**Retificações:** a [página oficial de editais](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades) mostrava até o Edital nº 6 em 11/11/2026. Inspecionadas as páginas do [Edital nº 5 (15/10/2026)](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-5-cd-analista-especialidades-de-15-de-outubro-de-2026) e [nº 6 (21/10/2026)](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-6-cd-especialidades-de-21-de-outubro-de-2026). Nenhum deles alterou os itens de prova discursiva 9.1/9.8.5. O nº 5 modificou requisito profissional do Cargo 1, tema relevante para inscrição, mas **fora da responsabilidade editorial desta matéria**. Os editais 2–4 tratam de vagas e sorteio, conforme sumário da página; não se constatou, pelos seus títulos, mudança do regime discursivo, sem lhes atribuir leitura integral.

### Bloco 13: diagnóstico de transferência e instrumento de aferição [INTERPRETAÇÃO]

A comparação entre os comandos reais reforça um princípio de arquitetura: há pelo menos **quatro operações diferentes** a serem treinadas, com avaliações próprias.

| Operação | Evidência oficial | Erro que o treino precisa revelar | Exercício curto para futura Fase 3 |
| --- | --- | --- | --- |
| Explicar dois efeitos distinguíveis | PF 2025, cultura e relações de poder | Cobrir o primeiro objeto, omitir o segundo; usar uma generalização para ambos | Grade `efeito A / mecanismo / efeito B / mecanismo`, depois texto de 20 linhas em **adaptação didática** |
| Enumerar quantidade mínima | TCE-MG 2026, **três recursos** | Tratar um exemplo detalhado como equivalente à enumeração de três | Listar 3 exemplos corretos e uma função de cada, sem inventar requisito |
| Relacionar conceitos e resultados | TCE-MG 2026, inclusão/equidade/capacitismo | Nomear os três fins sem demonstrar a relação com recursos | Três relações explícitas de causa/efeito/limite na resposta |
| Desenvolver vários subquesitos técnicos ponderados | Câmara 08/03/2026, peça com pesos diferentes | Alocar linhas iguais para itens que exigem diferentes níveis de detalhe | Mapear peso (apenas se conhecido), complexidade e risco de omissão; produzir peça de até 50 linhas |

**Rubrica de treino recomendada para Fase 3, não oficial:** (A) fidelidade ao verbo e ao objeto; (B) unidades de conteúdo completas; (C) precisão conceitual/normativa; (D) organização que permite localizar cada quesito; (E) NE e TL conforme edital; (F) tempo, legibilidade e revisão. Cada indicador deve guardar *evidência textual*, não apenas um número. Em modelos inteiramente autorais sem padrão definitivo, registrar `cobertura de rubrica didática`, **sem converter automaticamente em nota Cebraspe**.

**Dois encontros de estudo por semana:** fixar a primeira produção como questão de até 20 linhas, a segunda como peça de até 50; realizar uma reescrita focada em quesitos ausentes. Em semanas de alta carga objetiva, admitir alternância de peça integral e planejamento detalhado de peça **desde que não se registre planejamento como produção completa**. A meta semanal do plano de 3 horas continua sendo teto, com avaliação quinzenal baseada em cobertura de quesitos, erros repetidos em novos comandos e tempo, não em quantidade de textos.

**Pendências reais após esta atualização:** (1) falta uma **listagem recursiva física confiável** do diretório Redacao para descartar notas órfãs, pois o conector de leitura por caminho informa que o diretório existe mas não fornece seus filhos; `index.md` e catálogo só provam os três artigos registrados, não exaustão física; (2) os materiais compartilhados foram lidos de forma dirigida, sem inspeção normativa integral por essa frente, e devem ser usados somente como repertório cujo cotejo é responsabilidade das auditorias de origem; (3) falta verificar a capacidade de aplicação do método a *textos completos de 20 e 50 linhas*, com rubricagem demonstrada. Esses modelos não foram produzidos nem incorporados aos artigos durante a Fase 1.

**Estado: Fase 1 parcialmente verificada, sem alterações nos artigos, no catálogo e no índice geral.** Não declarar conclusão integral com essas três pendências.


## Continuação de 11/11/2026: blocos 14–16, auditabilidade do treino e inventário por evidência

**Checkpoint de concorrência:** leitura do blob SHA `514a2c8aff45b7c3f3853f265c33834f60819d7c` do relatório e do commit de repositório `9c30de4e15070bde632697bc2a0905f4726d64a5` antes da escrita. Alteração autorizada **somente neste relatório**. Notas, questões, gabaritos, IDs, catálogo, hub e índice global permanecem intactos.

### Bloco 14: inventário aprofundado de habilidades efetivamente ensinadas [CONFERIDO DIRETAMENTE NOS ARQUIVOS]

Foram recuperadas novamente as **versões completas** dos três artigos canônicos e do guia da Câmara, com comparação de seções e mecanismos de aprendizagem:

| Fonte direta e SHA | O que efetivamente apresenta | O que não apresenta e precisa ser testado futuramente |
| --- | --- | --- |
| Redação 01, `10760ff60d31a7ff05acf52e709dd705620676cf` | Explica assunto, tema, recorte, verbo de comando e projeto; três exemplos comentados, inclusive desvio por tangenciamento | Não contém a palavra `quesito`, seção de `exercício` nem tarefa de reescrita; também não traz resposta integral anotada em 20 linhas |
| Redação 02, `bc41dfd39a643fe6284ca894cdcaa0b020b12043` | Define tese e eixo argumentativo, inclui exemplos de tese inadequada e reestruturação | Não usa `quesito`, `exercício` ou `linhas`; nenhuma correção de resposta de prova com critérios por aspecto |
| Redação 03, `6a6c5c37f6c5e5155f5dcdeaa34175336caac8ea` | Diferencia argumentação, exemplo, dados, comparação e causalidade; exemplos comentados e contramodelo de causalidade excessiva | Não contém exercício progressivo de produção, grade por quesitos ou extensão marcada |
| Guia Câmara, `119cb5e48621103c91a17d70d2ed0d8c46a79aeb` | Cita três padrões oficiais, fórmulas do edital, plano de leitura e checklist de 20/50 linhas | Nenhuma sequência de textos completos ou rubrica efetivamente aplicada; orientação ainda intitulada `Na preparação pós-Dataprev`, inadequada ao foco atual |

**Conclusão específica desta leitura:** há **exemplos conceituais**, mas não **exercícios progressivos de execução** no sentido de resposta completa → correção dos quesitos → reescrita → novo comando. Esse achado é confirmado por estrutura e conteúdo, e vai além da mera ausência de palavras-chave. Preservar os artigos: o problema é ausência da segunda camada pedagógica, não inutilidade da primeira.

**Inventário de arquivos não catalogados:** conferidos adicionalmente por consulta de caminho exato os seis nomes planejados no hub (`04 - construcao do paragrafo argumentativo.md` até `09 - revisao final e checklist de erros.md`); os seis retornaram 404 nesses nomes. Isso indica que **não existem com esses caminhos precisos**, mas não prova que a pasta não contenha arquivos com nomes alternativos. A consulta de `3 - Materias/Redacao` confirma que o caminho é um **diretório**, e a leitura por arquivo do conector não lista seus filhos. Busca textual do conector por três títulos canônicos conhecidos retornou zero resultados, apesar de seus arquivos existirem, portanto **não é uma evidência válida de exaustão**. Persistir o estado `inventário físico exaustivo: não verificado`, sem registrar como arquivo inexistente qualquer nome apenas não encontrado por busca.

### Bloco 15: teste analítico de decomposição de uma questão real [ANÁLISE AUTORAL; NÃO É ESPELHO OFICIAL]

**Fonte do enunciado e de seus valores:** questão 2 do caderno oficial [TCE-MG 2026, cargo 8](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/3ADF49146A2E55690BB77554138AD177F6BD763BC8B6C35FECD4EB7BAB4A06CD.pdf), pág. 4, com [padrão definitivo oficial](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf). **Adaptação para a Câmara:** aplicar artificialmente o limite de **20 linhas** a esse comando para testar compressão de conteúdo; o TCE-MG original tinha limite de **60 linhas**. Por isso **não é simulado oficial da Câmara**.

| Subtarefa extraída do original | Evidência que precisaria aparecer na resposta | Contraexemplo de falha que não pode ser confundida com acerto |
| --- | --- | --- |
| Papel do comunicador na acessibilidade em eventos (3,50) | Intervenção do profissional **na fase de planejamento**, identificação de necessidades, articulação com públicos e recursos, verificação antes da realização | `Acessibilidade é importante em eventos` não identifica a função nem o momento de trabalho |
| Exemplificar **pelo menos três** recursos (3,00) | Três recursos distintos e pertinentes, como interpretação em Libras, legendagem em tempo real e audiodescrição **quando aplicáveis ao evento** | Descrever minuciosamente um único recurso e considerar que equivale a três |
| Explicar contribuição à inclusão, equidade e combate ao capacitismo (3,00) | Relacionar recursos à eliminação de barreiras, participação equivalente e redução de exclusões/discriminação | Apenas nomear inclusão, equidade e capacitismo sem explicar uma ligação operacional |

**Microresposta insuficiente, redigida nesta auditoria para diagnóstico:** `A acessibilidade em eventos é essencial para a inclusão social. O comunicador deve preparar campanhas e usar Libras, promovendo a diversidade e combatendo o capacitismo.` A frase contém sinais temáticos corretos, mas omite dois recursos, não explica a organização do planejamento e não demonstra como as medidas produzem inclusão/equidade. **Não atribuir pontuação oficial**: a grade real envolve conceitos de cobertura progressiva, correção de conteúdo e de língua.

**Microestrutura melhorada, também autoral, ainda não equivalente a resposta completa:** `No planejamento do evento, a equipe de comunicação identifica necessidades dos públicos, ajusta materiais e articula os recursos de acessibilidade. Conforme a modalidade do evento, pode prever intérprete de Libras, legendagem em tempo real e audiodescrição. Esses recursos reduzem barreiras distintas ao acesso à informação e à participação, favorecem condições mais equitativas de presença e expressão e enfrentam práticas capacitistas que excluem pessoas com deficiência.` **Precisão:** esta microestrutura cobre os três núcleos em princípio; ainda precisa ser comparada com todos os subaspectos do padrão definitivo e testada em texto integral manuscrito. É demonstração da **possibilidade de condensação**, não nota, gabarito ou promessa de acerto máximo.

**Lição pedagógica comprovável:** com conteúdos já conhecidos, a segunda microestrutura permite localizar as unidades do comando e a primeira não. A correção deve ensinar a **reparar omissões detectáveis**, em vez de recomendar simplesmente `melhorar argumentação`. A questão real exige três recursos: a quantidade mínima é uma condição independente da qualidade da explicação dos demais blocos.

### Bloco 16: teste de arquitetura para peça técnica de 50 linhas [INTERPRETAÇÃO FUNDAMENTADA]

**Base verificável:** [caderno Câmara de 08/03/2026, outro Cargo 1: Processo Legislativo e Gestão](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/4536C347379F236B51C537AC0D040D50717F27BF79FE55B56E95C3E8DFB96839.pdf) e seu [padrão definitivo](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf). O caderno identifica o gênero `parecer técnico` expressamente e estabelece cinco quesitos com valores específicos; isso prova que **o destinatário, a natureza do documento e a cobertura técnica podem ser dados pelo comando**. **Não transportá-los** como previsão de gênero ou pontuação do cargo de Divulgação Institucional.

**Proposta a testar em materiais da Fase 3:** para qualquer comando futuro de peça técnica, criar antes do texto uma tabela de `verbo / objeto / quesito / fonte técnica ou normativa / tipo de conclusão / linhas previstas / verificação`. Quando o enunciado informar pontos por quesito, usar esse dado; quando não informar, equilibrar espaço segundo densidade conceitual e risco de omissão, sem inventar pesos Cebraspe.

Exemplo de **orçamento didático de 50 linhas**, que não é distribuição oficial nem norma estilística:
- 3 linhas: identificação funcional do objeto e finalidade, **se o comando exigir**;
- 7 linhas: contexto e diagnóstico;
- 10 linhas: delimitação do problema, destinatários e objetivos;
- 15 linhas: recomendações fundamentadas, critérios e restrições;
- 10 linhas: execução, governança e indicadores;
- 5 linhas: síntese ou encaminhamento, **se tecnicamente necessário**.

**Autocrítica dessa distribuição:** os seis blocos não são universais. Se a peça do concurso exigir, por exemplo, análise comparativa de decisões, diagnóstico exclusivamente normativo ou uma proposta de estratégia de mídia com pesos específicos, a arquitetura deve ser **reorganizada conforme os verbos e a grade do comando**. A distribuição também não demonstra, por si, que um texto manuscrito cabe em 50 linhas. Só um exercício completo em folha equivalente pode testar legibilidade, densidade real, corte e tempo.

**Critérios de correção propostos, não oficiais:**
1. Evidência textual da resposta a cada verbo e cada objeto obrigatório.
2. Subaspectos ausentes versus apenas mencionados versus explicados e aplicados.
3. Regime jurídico e competência: norma exata e atualizada, sem inventar dispositivo.
4. Finalidade pública, clareza institucional e fundamentação das decisões técnicas.
5. Organização, precisão lexical e contagem de desvios/linhas.
6. Omissões corrigidas na reescrita, sem confundir melhora imediata com retenção em novo comando.

### Encaminhamento e estado consolidado

**Confirmado neste bloco:** leitura renovada e individualizada dos três artigos e guia; ausência de exercícios operacionais completos nas notas; seis caminhos exatos planejados não encontrados; validade do teste autoral de decomposição como *instrumento de diagnóstico*, não como espelho oficial; distinção entre os regimes de linha da PF, do TCE-MG e da Câmara. **Interpretação:** sugerir que o material de execução use matrizes de cobertura e orçamento de linhas flexível, com duas produções semanais no limite de três horas. **Pendente:** inventário físico recursivo confiável da pasta; escrita e análise integral de uma questão de até 20 linhas e uma peça de até 50 em papel; revisão normativa exaustiva das notas compartilhadas, sem sobrepor os agentes de suas matérias.

**Estado da Fase 1: PARCIALMENTE VERIFICADO.** Este bloco apenas identifica e testa conceitualmente o método; não inicia implantação editorial, não modifica artigos, não altera catálogo ou questões e não registra respostas pessoais no repositório público.

## Continuação de 11/11/2026: blocos 17–19, aplicação controlada da matriz

**Checkpoint de concorrência:** leitura do SHA do relatório `b13be6e141f76f26d5d1254db1cb5c8bb8df8770` e leitura do commit recente `0f835dd0ce1664885c3135c9157347d99ecbee07`. Somente este relatório será atualizado. A proposta continua Fase 1, sem alteração dos artigos, do catálogo ou do índice de outros agentes.

### Bloco 17: checagem visual das provas oficiais [CONFERIDO]

Os PDFs foram abertos com inspeção visual de páginas, além da extração do texto. Na [Câmara 2026, caderno de Processo Legislativo e Gestão, primeira página](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/4536C347379F236B51C537AC0D040D50717F27BF79FE55B56E95C3E8DFB96839.pdf), a banca explicita, **naquele concurso**, 0,70 de apresentação/estrutura por questão e 1,50 para a peça, dentro dos máximos respectivos de 15 e 30. O [espelho definitivo da peça, página 4](https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf) enumera subaspectos (i) a (xi), agrupados em quesitos com pontuação gradual. A [questão 2 do TCE-MG, página 4](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/3ADF49146A2E55690BB77554138AD177F6BD763BC8B6C35FECD4EB7BAB4A06CD.pdf) também foi conferida visualmente, inclusive os três verbos de comando e valores de 3,50/3,00/3,00 pontos. Esses valores não são reproduzidos como pesos do cargo de Divulgação Institucional.

**Ajuste de rigor:** o texto do padrão definitivo frequentemente supera o tamanho permitido ao candidato. O critério transferível é reconhecer unidades de conteúdo **independentes**, não contar a extensão ou copiar sua redação. O desconto linguístico da prova atual continua regido pelo edital da nova seleção, e não pelos padrões de concursos anteriores.

### Bloco 18: prova de conceito da resposta curta [MODELO AUTORAL, NÃO OFICIAL]

**Exercício didático de diagnóstico:** adaptar o enunciado REAL do TCE-MG, acessibilidade em eventos, para um **limite artificial de 20 linhas**, de modo a testar condensação. **O TCE-MG original admite 60 linhas e a solução abaixo não é padrão oficial, nem texto de candidato, nem reescrita já testada.** Cada quebra foi inserida manualmente para construir 20 linhas digitais; isso **não garante** ocupar as mesmas linhas numa folha manuscrita, pois tamanho de letra, margem e espaçamento mudam.

```text
01 | O planejamento de acessibilidade começa pela identificação
02 | dos públicos e das barreiras que limitam sua participação.
03 | À equipe de comunicação cabe examinar necessidades
04 | de acesso à informação antes, durante e após o evento.
05 | Isso requer diálogo com pessoas com deficiência,
06 | articulação com a produção e escolha dos recursos
07 | compatíveis com as atividades e os canais previstos.
08 | Em encontros presenciais e transmissões, a interpretação
09 | em Libras pode ampliar o acesso de pessoas surdas
10 | que utilizam a Língua Brasileira de Sinais.
11 | Legendas em tempo real atendem a outras necessidades
12 | de acesso à fala e ao conteúdo apresentado.
13 | A audiodescrição de elementos visuais relevantes
14 | favorece a compreensão por pessoas com deficiência visual.
15 | Esses recursos devem ser planejados e testados,
16 | com informação antecipada sobre sua disponibilidade.
17 | A redução de barreiras de comunicação permite participação
18 | mais equitativa, em vez de mera presença formal.
19 | A inclusão efetiva também exige reconhecer diferenças
20 | e enfrentar práticas capacitistas que excluem públicos.
```

**Rubrica analítica, sem pontuação Cebraspe:** (a) planejamento: identifica públicos, barreiras, articulação e verificação; (b) enumeração: cita três recursos distintos, Libras, legenda em tempo real e audiodescrição, e explica destinatários/uso; (c) finalidade social: vincula recursos à participação, equidade e enfrentamento de exclusão capacitista. O exemplo **cobre os núcleos mais visíveis**, mas a equivalência a um conceito do espelho exige verificação granular de todos os descritores e avaliação humana da precisão lexical. Não foi atribuída nota nem contagem de erros de língua da banca. **Hipótese de falha:** se uma referência genérica a `testes` não explicitar a participação dos públicos, um corretor pode considerá-la incompleta. O modelo precisa ser confrontado com o padrão, não presumido suficiente.

**Lição editorial:** o artigo 01 deveria apresentar comando e matriz; o módulo de execução DIS-002 deveria mostrar ao menos um texto integral, anotando em que linhas cada quesito se materializa, e um contramodelo com omissões. Esse conteúdo pertence à **Fase 3**; aqui a amostra serve como experimento de auditoria.

### Bloco 19: prova de conceito da peça de até 50 linhas [MODELO AUTORAL, NÃO OFICIAL]

**Cenário exclusivamente didático, não previsão de tema:** uma equipe hipotética da Câmara precisa redigir uma nota técnica de comunicação para superar barreiras à compreensão e participação em audiências públicas. O comando simulado exige objeto, diagnóstico, públicos, objetivos, conteúdo e canais, execução, indicadores e limites. O exemplo foi estruturado em **48 linhas digitais**, dentro de um teto de 50, com títulos funcionais apenas porque **o comando didático autorizou essa forma**. Esta peça **não reproduz** a peça jurídica do concurso de março de 2026.

```text
01 | NOTA TÉCNICA: comunicação de audiências públicas
02 | Objeto: avaliar barreiras de informação e propor ações
03 | para ampliar o acesso às audiências da Câmara.
04 | Finalidade: orientar decisões de comunicação institucional.
05 | 1. Diagnóstico e pressupostos
06 | A baixa participação informada não comprova, por si só,
07 | insuficiência de publicidade ou falha do cidadão.
08 | É necessário verificar conhecimento prévio da agenda,
09 | clareza das instruções, canais usados e barreiras de acesso.
10 | A equipe deve consultar registros de dúvidas,
11 | testar o percurso de inscrição e ouvir públicos distintos.
12 | Sem essas evidências, a proposta será preliminar.
13 | 2. Públicos e objetivos
14 | Identificar interessados diretamente afetados pelos temas,
15 | organizações participantes e pessoas com barreiras digitais.
16 | Objetivo: tornar a agenda, os requisitos e as formas
17 | de participação compreensíveis e localizáveis.
18 | Definir indicadores de compreensão e acesso efetivo.
19 | 3. Propostas de conteúdo e distribuição
20 | Publicar explicações objetivas sobre a finalidade
21 | das audiências, calendário e formas de participação.
22 | Vincular as mensagens a fontes e páginas oficiais,
23 | com atualização sempre que houver mudança de agenda.
24 | Preparar formatos acessíveis e linguagem clara,
25 | testando instruções com públicos de perfis diferentes.
26 | Usar canais adequados às necessidades identificadas,
27 | sem depender exclusivamente de redes sociais privadas.
28 | Separar informação institucional de promoção pessoal.
29 | 4. Processo de execução
30 | Designar responsáveis pela apuração dos dados
31 | e pela revisão editorial antes da publicação.
32 | Organizar prazos de atualização e correção de conteúdo.
33 | Verificar a coerência entre portal, convites e mensagens.
34 | Estabelecer atendimento para dúvidas e barreiras.
35 | Registrar alterações, motivos e encaminhamentos.
36 | 5. Avaliação e limites
37 | Medir disponibilidade e alcance como resultados iniciais,
38 | sem presumir que equivalem a participação efetiva.
39 | Acompanhar localização de informações, compreensão
40 | dos requisitos e conclusão de etapas de inscrição.
41 | Comparar evidências antes e depois das ações,
42 | sem atribuir causalidade automaticamente à campanha.
43 | Se surgirem problemas no próprio processo do serviço,
44 | encaminhá-los às áreas competentes.
45 | 6. Encaminhamento
46 | Recomenda-se validar o diagnóstico com as equipes
47 | responsáveis e realizar piloto antes de ampliar ações.
48 | A versão final depende de condições e dados confirmados.
```

**Matriz de auditoria por faixa de linha:** 1–4 identificação de objeto/finalidade; 5–12 diagnóstico e cautela causal; 13–18 públicos e objetivos; 19–28 comunicação e limites; 29–35 responsabilidades/processos; 36–44 métricas e correção de problemas; 45–48 encaminhamento. Essa matriz é **autoral** e só vale para o comando fictício explicitado. Não foram observados tempo de escrita, margem, legibilidade ou necessidade de transcrição; por isso não se pode declarar prontidão operacional do método. A divisão de quesitos não fornece nota oficial sem espelho real.

**Falhas ainda visíveis no modelo:** falta lastro empírico específico sobre os públicos e necessidades do caso; algumas medidas são condicionais; `medir compreensão` não especifica instrumento e denominador; a competência institucional para encaminhamentos deve ser verificada no cenário real. São pontos a aprofundar mediante um comando completo, em vez de preenchê-los com normas ou números inventados. O exercício evidencia que **capacidade de condensação e precisão de decisão são independentes**.

### Parecer provisório pós-experimento

O teste de **20 linhas para questão e 48 para peça** é suficiente para demonstrar a viabilidade de uma matriz operacional dentro de limites **digitais**, e insuficiente para certificar desempenho em folha definitiva sob tempo real. Há duas dimensões ainda separadas: (1) *cobertura verificável de verbos, objetos e quesitos*; (2) *materialização física e linguística* com letra, revisão, limite de linhas e tempo. O aluno pode acertar uma e falhar na outra, razão para fichas de correção separadas.

**Estado do inventário:** os três artigos cadastrados, hub e guia foram lidos; caminhos previstos 04–09 consultados e não encontrados nesses nomes. A busca pública de diretório e a API pública via consulta web não forneceram listagem confiável; não existe prova de ausência de arquivos órfãos. A auditoria não deve ficar declarando `inventário físico concluído` sem árvore de repositório ou listagem real. Os materiais compartilhados de outros agentes foram auditados quanto à **aplicabilidade discursiva**, mantendo a certificação integral das suas normas como responsabilidade das frentes correspondentes.

**Status:** Fase 1 **parcialmente verificada** por indisponibilidade de listagem física exaustiva e ausência de experimento manuscrito ou avaliação de um texto real do estudante. Não transformar ausência de experimento em dado pessoal de proficiência. Sem modificação de notas de estudo, catálogos ou IDs.

## Continuação: blocos 20–22, árvore física e mudanças concorrentes (11/11/2026)

**Checkpoint:** blob do relatório `e4abded93417bafe1603d718ee69168242fbb3ed`; árvore GitHub `main` consultada por `/git/trees/main?recursive=1`, sem truncamento. As mudanças dos outros agentes foram preservadas. **Não houve edição de artigo, hub, índice ou catálogo por este auditor.**

### Bloco 20: inventário físico [CONFERIDO; atualização temporal indispensável]

A primeira consulta à árvore completa retornou **793 entradas** e exatamente **quatro arquivos na pasta de Redação**: `01 - leitura do tema e projeto de texto.md`, `02 - tese e linha argumentativa.md`, `03 - estrategias de argumentacao.md` e `redacao.md`. Essa consulta resolveu o bloqueio técnico das leituras anteriores e comprovou a inexistência de órfãos naquele instante.

**Entretanto, agentes simultâneos publicaram novos conteúdos enquanto este relatório era atualizado.** Uma segunda consulta à árvore retornou **797 entradas**, `truncated: false`, e agora lista **seis arquivos**:

| Caminho relativo a `3 - Materias/Redacao/` | SHA no segundo inventário | Estado |
| --- | --- | --- |
| `01 - leitura do tema e projeto de texto.md` | `10760ff60d31a7ff05acf52e709dd705620676cf` | Preexistente e auditado |
| `02 - tese e linha argumentativa.md` | `bc41dfd39a643fe6284ca894cdcaa0b020b12043` | Preexistente e auditado |
| `03 - estrategias de argumentacao.md` | `6a6c5c37f6c5e5155f5dcdeaa34175336caac8ea` | Preexistente e auditado |
| `04 - decomposicao de comandos e quesitos cebraspe.md` | `468104948cb57e48567df59e061ae793ed2797de` | **Novo, criado por outra execução**; CAM-DIS-001; articleId `art-8c4e3f190be648b2` |
| `05 - resposta conceitual curta de 20 linhas.md` | `f50ad545ff2ed0a7955af32d07d2090470b81915` | **Novo, criado por outra execução**; CAM-DIS-002; articleId `art-b3925d69a8174e0c` |
| `redacao.md` | `529c6fad1693fe37f1618efd23903763a20e9430` | Hub atualizado por outra execução |

O catálogo `data/catalogo-materias-por-concurso.json`, SHA `7942c59edacf9566d876febeda76a0bd63579139`, passou a listar os **cinco artigos** sob `subjectId: redacao`. Assim, **o diagnóstico de três artigos permanece histórico, não descreve mais o catálogo atual**. A pasta contém seis arquivos físicos, contando o hub. Isto também demonstra por que o relatório precisa usar árvores com SHA/timestamp em vez de assumir estabilidade em repositório com agentes concorrentes.

### Bloco 21: avaliação dos dois novos artigos [LEITURA DIRETA, FASE 1]

**04, Decomposição de comandos e quesitos na discursiva Cebraspe.** Apresenta método explícito `verbo → objeto → contexto → limites → grade → conferência`; separa o conceito de quesito do *espelho oficial* e o de grade construída pelo estudante; inclui exemplo e contraexemplo, exercício autoral de 20 linhas, autocorreção por atendimento de exigências e reescrita/reteste. **Decisão:** manter e auditar na próxima etapa de melhoria, sem substituição pelo artigo 01, que trata do recorte temático geral. **Lacunas residuais:** exemplo principal reconstrói um comando autoral a partir de padrão da PF em vez de trabalhar diretamente um enunciado oficial autenticado, embora a autoria esteja identificada corretamente; não há apresentação de várias respostas integrais que permitam comparar níveis de cobertura. Essa limitação é de profundidade pedagógica, não falsidade de proveniência.

**05, Resposta conceitual curta de até 20 linhas.** Diferencia resposta nuclear técnica de tese opinativa, faz a passagem de grade a texto e oferece modelo de 12 linhas artificiais, grade de autocorreção linha a linha, contraexemplo, variação do comando, exercício manuscrito e revisão após 3–7 dias. **Decisão:** manter e aprimorar, pois começa a preencher a lacuna RD-001 sobre produção verificável de respostas curtas. **Limites residuais:** o exemplo de 12 linhas utiliza comando autoral inspirado em PF e não é demonstrativo de nota oficial; não documenta correção por dois examinadores, nem comparação de respostas de qualidade intermediária; o treino precisa de calibração com evidência de manuscrito e rubrica derivada do padrão oficial. O artigo reconhece seus limites sem inventar nota.

**Hub:** a nova seção `Câmara dos Deputados 2026/2027: produção discursiva` encaminha para 04 e 05, preserva artigos 01–03 e explicita a inexistência de gênero predeterminado para a peça. O comentário sobre a Dataprev antiga ainda existe, mas foi marcado como histórico. **Achado de organização:** coexistem uma numeração da trilha genérica antiga, em que `04` significaria construção do parágrafo, e a nova numeração física `04` para decomposição; idem `05`, antes pensado como contra-argumentação. Uma futura intervenção deve harmonizar os roteiros do hub para evitar colisão sem renomear arquivos ou alterar IDs nesta Fase 1.

**Resultado da revisão das lacunas:** a antiga afirmação `nenhum artigo contém exercício de resposta de 20 linhas` era verdadeira no inventário anterior, mas **não é mais verdadeira para o catálogo atual**. Agora existem dois módulos iniciais de execução. **Ainda falta produção guiada de peça técnica de 50 linhas como artigo canônico**, currículo de correção por tipo de falha e série progressiva de exercícios com rastreio. A peça de 48 linhas produzida neste relatório é demonstração autoral de auditoria, não artigo didático formal publicado.

### Bloco 22: atualização da matriz e prioridades [INTERPRETAÇÃO; SEM EXECUÇÃO]

| Competência | Evidência atual no catálogo | Situação |
| --- | --- | --- |
| Identificar recorte, verbo e objetos | Redação 01 + novo 04 | Cobertura explicativa e exercício inicial presentes; ampliar provas reais |
| Responder questão curta com conceitos e mecanismos | Novos 04/05 + fundamentos 02/03 | **Parcialmente atendida**, com modelo e autocorreção; faltam sequência e avaliação externa |
| Argumentação e pertinência | 02/03 e nota 05 | Base disponível, integrar mais tarefas específicas e comparação |
| Normas e conceitos em resposta técnica | Comunicação/Constitucional compartilhados | Repertório presente; falta artigo de resposta normativa aplicada (DIS-004) |
| Produzir peça técnica | Guia Câmara e exemplo autoral neste relatório | **Lacuna crítica persistente**: DIS-005, 006, 007, 008 ainda precisam de módulos de execução |
| Uso do espaço, revisão e tempo | Nota 05 e guia | Orientações presentes; testar limite de folha e correções reais, DIS-009 |
| Rastrear desempenho por quesitos | Notas 04/05: atendido/parcial/ausente/incorreto | Estrutura inicial presente; aplicação longitudinal e privacidade no cofre ainda por desenvolver |

**Backlog corrigido quanto ao estado temporal:** RD-001 deixou de ser ausência total de modelo de 20 linhas e passa a ser **insuficiência de corpus progressivo e ausência de módulo completo de peça**. RD-004 (hub) foi parcialmente mitigada. RD-003 (treino operacional) começou a ser tratado por notas novas, sem evidência de proficiência individual. RD-002 (pareamento documental) permanece verificado no relatório; novas notas devem aproveitar os enunciados oficiais disponíveis, identificando claramente adaptação autoral. Prioridade editorial futura: DIS-005 (peça), DIS-009 (revisão), DIS-004 (normativa), DIS-006 (diagnóstico), DIS-007 (plano), DIS-008 (métricas) e DIS-003 (comparação), na ordem ajustada por dependências.

**Separação de escopos:** as mudanças nos artigos novos e no hub ocorreram por **outros agentes**; esta auditoria apenas as identificou, leu e avaliou. A Fase 1 aqui permanece **parcialmente verificada**, com inventário físico agora resolvido e com reavaliação obrigatória caso haja novos commits na mesma pasta. A verificação exaustiva dos recortes de normas das matérias compartilhadas permanece na responsabilidade das respectivas frentes. Nenhum dado pessoal de tentativa foi publicado.


## Continuação de 11/11/2026: blocos 23–25, consolidação após publicação de CAM-DIS-005 e CAM-DIS-009

**Controle de concorrência e escopo:** arquivo de auditoria lido no SHA `cbe5a3c63350418a8316a73af6d28c1908d0233d`. A árvore completa do GitHub na `main` retornou **802 entradas**, `truncated: false`. Os materiais de outros agentes foram apenas consultados; nenhuma outra pasta, nota, questão, catálogo, ID ou índice foi modificada por esta frente.

### Bloco 23: inventário atualizado e conciliação de fontes [VERIFICADO]

A árvore `GET /repos/leorruas/concursos/git/trees/main?recursive=1` mostra agora **oito arquivos físicos em `3 - Materias/Redacao/`**: um hub e **sete artigos**. O catálogo `data/catalogo-materias-por-concurso.json`, consultado no blob `630d3af030e36ca1f9087e238d9d39f908db6dc0`, lista os sete `articleIds`. O hub foi atualizado para o blob `a92d927980bd298457f86610dcde61e08a8955ac`.

| Artigo | Unidade | SHA conferido nesta rodada | Resultado de auditoria |
| --- | --- | --- | --- |
| 01, leitura do tema e projeto de texto | Fundamento geral | `10760ff60d31a7ff05acf52e709dd705620676cf` | Existente; articulação com comando |
| 02, tese e linha argumentativa | Fundamento geral | `bc41dfd39a643fe6284ca894cdcaa0b020b12043` | Existente; diferenciar tese opinativa de resposta técnica |
| 03, estratégias de argumentação | Fundamento geral | `6a6c5c37f6c5e5155f5dcdeaa34175336caac8ea` | Existente; mecanismos argumentativos |
| 04, decomposição de comandos e quesitos Cebraspe | CAM-DIS-001 | `468104948cb57e48567df59e061ae793ed2797de` | Existente, lido na rodada anterior |
| 05, resposta conceitual curta de 20 linhas | CAM-DIS-002 | `f50ad545ff2ed0a7955af32d07d2090470b81915` | Existente, lido na rodada anterior |
| **06, planejamento e escrita de peça técnica** | **CAM-DIS-005** | `9a21328a7550a1280292ecf2e5fb50c6e20962af` | **Novo, lido integralmente nesta rodada** |
| **07, revisão e autocorreção** | **CAM-DIS-009** | `d9900ed3d0daf9f4c6f2ca6e1478c1cd971e0d8b` | **Novo, lido integralmente nesta rodada** |

**Revisão do estado anterior:** a conclusão histórica de que não havia artigo de peça técnica **está superada**. A falta atual não é de uma introdução ao tema, mas de **corpus progressivo, diversidade de gêneros, maior profundidade técnica e desempenho manuscrito observado**. Este bloco substitui, para fins de decisão futura, o status dos blocos 20–22.

### Bloco 24: avaliação dirigida dos novos artigos [VERIFICADO / JULGAMENTO PEDAGÓGICO]

**CAM-DIS-005, artigo 06 (peça técnica):** acerta ao separar gênero, finalidade e destinatário; orientar o planejamento por verbos e subitens; oferecer modelo de `nota técnica` e contrastá-lo com `briefing`, `plano` e `diagnóstico`. O exercício fictício contém **28 linhas digitais numeradas**, inclusive linhas em branco, e grade de localização do problema, levantamento de evidências, três medidas e monitoramento. O artigo diz expressamente que esse modelo não é oficial e que o gênero da peça do Cargo 1 permanece indeterminado. Isso elimina a antiga lacuna de **ausência completa de peça-modelo**.

**Limitações observadas do 06:** (i) uma peça de 28 linhas não demonstra gestão de um comando densamente pontuado que se aproxime de 50 linhas; (ii) o modelo está baseado em cenário autoral sem **padrão definitivo comparável**, e não valida atendimento de quesitos definidos por examinador; (iii) há diagnóstico cauteloso, mas não há exemplo completo de `plano` ou `briefing`, apenas distinções estruturais; (iv) o exercício oferece acompanhamento genérico e não obriga a explicitar indicadores com unidade, fonte, recorte temporal e limitação de inferência; (v) o texto impresso tem linhas vazias e títulos, portanto o orçamento efetivo de conteúdo é menor do que a indicação nominal. **Ação de Fase 2:** ampliar por um caso de maior densidade, sem apagar o exemplo inicial; criar contramodelos com omissão, comparação por critérios e correção por trecho.

**CAM-DIS-009, artigo 07 (revisão):** contempla duas passagens autônomas, **conteúdo** (atendido/parcial/ausente/incorreto com evidência textual) e **língua, coerência, espaço**, com procedimento de reescrita dirigida, reteste em 3–7 dias e separação entre arquivo público de teoria e registros privados. Reproduz corretamente as duas fórmulas do edital. Os exemplos aritméticos são coerentes: duas ocorrências hipotéticas em 20 linhas de questão produzem desconto `3 × 2 ÷ 20 = 0,30`; em 40 linhas de peça, `6 × 2 ÷ 40 = 0,30`. A própria nota evita simular nota oficial sem `NC`, `NE` e `TL` efetivamente aferidos.

**Limitações observadas do 07:** (i) a autocorreção pode indicar presença de termos, mas é necessário critério para diferenciar **menção, descrição, explicação causal e aplicação correta**; (ii) não há duas respostas completas à mesma tarefa corrigidas lado a lado, com reparo explícito de cada unidade; (iii) o tempo recomendado não foi testado no estudante; (iv) riscos de fórmulas não substituem consulta direta aos itens de nota zero e critérios de correção por examinador. **Ação de Fase 2:** adicionar à ficha `unidade exigida / trecho literal / conceito técnico / suficiência / decisão de revisão` e demonstrar correção de um texto completo com erro, trecho reparado e reteste.

**Hub:** a nova seção da Câmara liga 04 → 05 → 06 → 07, mas preserva a antiga lista `04 - construção do parágrafo`, `05 - contra-argumentação`, `06 - repertório`, `07 - introdução...` como se fosse sequência de artigos. Isso cria **colisão numérica e ambiguidade de navegação** com os arquivos 04–07 já publicados. A advertência `Dataprev ... não é prioridade` continua registrada apesar de 11/10/2026 já ter passado; foi enquadrada no texto como histórica, mas permanece deslocada na experiência de navegação. **Ponto objetivo a corrigir:** distinguir explicitamente `roteiro genérico antigo, não corresponde a arquivos numerados` de `trilha atual para a Câmara` ou reescrever a seção de planejamento sem renomear e sem modificar IDs existentes.

### Bloco 25: decisão técnica consolidada e critérios de saída [RECOMENDAÇÃO]

A biblioteca já contém **núcleo mínimo funcional para iniciar treino**: leitura do comando, análise por quesitos, resposta curta, peça técnica e revisão. As regras de 20/20/50 e a separação entre critérios oficiais e critérios autorais estão presentes. A conclusão **não** presume domínio por parte do estudante, nem que o Cebraspe escolherá nota técnica, briefing ou plano.

**Pendências de melhoria ordenadas pela relação com a prova:**

1. **P0: matriz de correção aplicada ao exemplo de peça mais denso.** O modelo de 28 linhas deve ser complementado por uma peça nova, preferencialmente 40–50 linhas digitais, com comando preciso, rubrica explícita por subaspecto, três níveis de cobertura, contramodelo e reparo. Mostrar a origem **autoral** de todos os pesos ou, se usar caderno oficial, só adotar pesos **daquele caderno**.
2. **P0: integração sem colisão de navegação.** Corrigir divergência entre numeração dos arquivos CAM-DIS e a antiga lista homônima do hub; atualizar a orientação de prioridade de concursos, sem apagar o histórico.
3. **P1: diversidade de operação técnica.** Completar módulos candidatos CAM-DIS-003 (comparação), 004 (normativa), 006 (diagnóstico), 007 (plano) e 008 (indicadores) conforme dependências do currículo; valorizar aplicação dos artigos compartilhados em vez de duplicar teoria.
4. **P1: calibragem com provas.** Usar pares autenticados de enunciado e espelho da PF 2025, TCE-MG 2026 e Câmara de março/2026 para marcar a diferença entre **mencionar e desenvolver** um quesito, sempre com limites de transferência dos cargos.
5. **P1: execução observada.** Cronometrar produção manuscrita de até 20 e até 50 linhas, registrar a quantidade *real* de linhas, conferir legibilidade, grafia e cobertura, corrigir e retestar outro comando. **Sem tentativas reais, não declarar evolução do candidato**. Guardar respostas pessoais no cofre privado e manter apenas teoria/modelos genéricos no público.
6. **P2: documentação transversal.** Evitar certificar normas de Comunicação, Constituição ou Português cujo cotejo pertence às suas auditorias; revisar os recortes específicos que forem usados em modelos de peça.

**Estado conclusivo desta rodada:** inventário **resolvido e atualizado para sete artigos + hub**. A auditoria da **biblioteca própria** é suficiente para orientar uma fase editorial de refinamento, mas continua existindo distinção entre suficiência do inventário e **validação da competência de prova**. A Fase 1 fica registrada como **parcialmente verificada quanto à avaliação transversal profunda e a desempenho real**, sem que isso impeça iniciar correções editoriais fundamentadas sob governança. Este relatório continua sendo o único arquivo modificado por esta execução.


## Continuação de 11/11/2026: blocos 26–28, auditoria de suficiência de exemplos existentes

**Base e escopo:** relatório `09` lido no blob `31df9aaa2b1cca2c331fb00d6a291c846ef5f736`; árvore do repositório `main` consultada sem truncamento, com **804 entradas** e **sete artigos de Redação mais hub**. Nesta etapa, os exemplos publicados nos artigos 05, 06 e 07 foram analisados como **respostas didáticas sujeitas a revisão editorial**, sem simular banca, cronômetro ou desempenho do candidato. Conferência externa atual: [página oficial do certame de Analista Legislativo, especialidades](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades), lista somente os Editais 1–6 nessa seleção em 11/11/2026; os editais posteriores de **outro certame** de Analista e Técnico não devem ser confundidos com as retificações do Cargo 1 de Divulgação Institucional.

### Bloco 26: correção de suficiência do modelo de peça técnica, artigo 06 [LEITURA E JUÍZO ANALÍTICO]

**Fonte:** `3 - Materias/Redacao/06 - planejamento e escrita de peca tecnica.md`, subtítulos `Exercício integral: nota de diagnóstico e encaminhamento (autoral)` e `Produção e revisão`, blob `9a21328a7550a1280292ecf2e5fb50c6e20962af`. Comando **autoral do artigo**, em síntese: identificar o problema de divulgação/acessibilidade de um evento, indicar levantamento de evidências, propor **três medidas** de comunicação e explicar acompanhamento. Limite de 50 linhas; modelo publicado com 28 linhas digitais, incluindo linhas em branco.

| Exigência do comando autoral | Trecho observado no modelo | Parecer de cobertura da auditoria (não oficial) | Correção proposta |
| --- | --- | --- | --- |
| Identificar problema | Linhas 7–10: dificuldade de localização de orientações e barreiras de acesso; relatos ainda não provam frequência e causas | **Atendida**: registra problema e fronteira de inferência | Manter a prudência; não convertê-la em diagnóstico estatístico |
| Indicar levantamento de evidências | Linhas 11–13: observar percurso de busca, materiais e ouvir públicos que usam recursos assistivos | **Atendida em nível inicial**: indica fontes e métodos plausíveis | Explicitar critério de observação, como conclusão da tarefa de localizar data e inscrição |
| Propor três medidas diferentes | Linhas 16–18: página acessível; 19–20: convites claros e alternativas textuais; 21–23: legendas e recursos para vídeos | **Atendida** quanto à contagem e pertinência condicional | Distinguir os canais e verificar viabilidade/correspondência com as barreiras identificadas |
| Explicar acompanhamento de resultados | Linhas 25–28: registrar dúvidas, testar localização e colher retorno | **Parcial**: mede fricção informacional, mas não explicita medição da terceira medida audiovisual, nem define quando/quem avalia | Vincular explicitamente o teste da página à conclusão de tarefas, o convite à compreensão de instruções e o vídeo à efetividade dos recursos de acessibilidade |
| Adequação ao gênero definido no exercício | Título, destinatário, objeto, diagnóstico, encaminhamentos e acompanhamento | **Atendida como nota técnica didática**, com estrutura coerente | Manter a ressalva de que o edital do Cargo 1 **não predetermina esse gênero** |
| Economia de espaço e execução | 28 linhas numeradas, duas linhas vazias visíveis (5 e 14) mais uma (24) | **Apenas digitalmente demonstrada**: 25 linhas com texto, três vazias | Testar folha impressa; não inferir que a mesma caligrafia caberá em 28 linhas reais |

**Correção textual possível, exclusivamente didática, do último bloco:** `No próximo evento, registrar se usuários de perfis distintos conseguem localizar e compreender data, inscrição e canais de atendimento. Testar os convites quanto à leitura das instruções e os vídeos quanto ao uso efetivo das legendas e dos recursos previstos. Consolidar barreiras relatadas e corrigir materiais antes da divulgação seguinte.` Essa reescrita associa **três observações a três medidas**, sem inventar metas, dados de impacto ou padrões oficiais. Sua utilidade ainda deve ser testada contra o comando integral e o orçamento de linhas.

**Achado RD-017, severidade IMPORTANTE:** há **desacoplamento parcial** entre ações propostas e monitoramento no modelo que ensina uma peça de gestão de comunicação. Risco de aprendizagem: reproduzir uma seção de indicadores genéricos e confundi-la com avaliação verificável das intervenções. **Correção futura:** alterar apenas esse exemplo e incluir uma microtabela `ação → observação → limite da inferência`, preservando autoria e referências.

### Bloco 27: correção cruzada de resposta curta e revisão [LEITURA E JUÍZO ANALÍTICO]

**Fonte:** artigo `05 - resposta conceitual curta de 20 linhas.md`, subtítulo `Caso progressivo com referência oficial`, blob `f50ad545ff2ed0a7955af32d07d2090470b81915`. Comando autoral baseado em eixos da PF 2025: cultura, poder, uma dificuldade e dois benefícios da colaboração. O texto de **12 linhas digitais** permite localizar, respectivamente, cultura (linhas 1–4), poder (5–7), dificuldade (8–9), benefícios (10–12). **A grade do próprio artigo efetivamente encontra quatro unidades correspondentes.** Esse é um avanço verificável em relação aos fundamentos 01–03. O modelo, porém, não explicita por que uma alternativa `menciona cultura`, mas não `explica o mecanismo`; essa diferença fica nos comentários e não é testada no mesmo comando por respostas graduadas. Para uma trilha de prova, propor pelo menos três variantes do **mesmo** comando, preservando o vocabulário-chave e variando **cobertura do mecanismo**: (a) mera menção, (b) explicação de só uma dimensão, (c) desenvolvimento articulado completo. Não definir pesos da PF como se fossem da Câmara.

**Fonte:** artigo `07 - revisao e autocorrecao de discursivas e pecas.md`, subtítulos `Duas passagens de revisão`, `Demonstração da revisão` e `Instrumento de autocorreção utilizável`, blob `d9900ed3d0daf9f4c6f2ca6e1478c1cd971e0d8b`. A distinção conteúdo/língua e os quatro estados `atendido/parcial/ausente/incorreto` são adequados ao objetivo didático. **Falha de especificação:** `parcial` ainda é categoria sem critério operacional replicável. Propor definição documental: **atendido** = trecho explícito tecnicamente correto com detalhe solicitado; **parcial** = identifica o objeto, mas não desenvolve mecanismo, exemplo ou condição expressamente pedido; **ausente** = nenhum trecho identificável; **incorreto** = há trecho relacionado, mas a afirmação contradiz conceito/limite documentado. **Regra de precedência:** se um trecho trouxer erro conceitual, marcar `incorreto` antes de decidir se está `parcial`; uma mesma falha não deve ser contada duas vezes como ausência e erro na grade pedagógica.

**Achado RD-018, severidade IMPORTANTE:** o instrumento de correção ainda depende do julgamento intuitivo de suficiência, mesmo que tenha quatro rótulos. **Correção futura:** incluir definições de estado, trechos âncora, regra de precedência e comparação de duas classificações divergentes; manter separação entre avaliação didática e conceitos da banca. Um *checklist* sem critérios pode melhorar consistência de preenchimento sem melhorar consistência da correção.

**Achado RD-019, severidade MELHORIA:** as quatro operações propostas nos artigos 04–07 aparecem em diferentes locais, mas não se transformaram ainda em um **formulário único com campos de fonte, comando original, adaptação, condições, restrições, trechos e reescrita**. Uma ficha privada ou modelo vazio reutilizável reduziria perda de informação sem publicar desempenho.

### Bloco 28: reconciliação editorial, riscos reais e critério de saída

**Achado RD-020, severidade IMPORTANTE:** o hub `3 - Materias/Redacao/redacao.md`, subtítulo `Plano editorial`, ainda conserva uma lista antiga em que os itens `04`, `05`, `06` e `07` designam outros conceitos (parágrafo, contra-argumentação, repertório, introdução). Os arquivos físicos 04–07 possuem títulos diferentes (decomposição, resposta curta, peça, revisão), criando uma **colisão navegacional demonstrável**. O topo do hub usa os nomes atuais corretamente e explica o histórico, mas a seção do plano não discrimina claramente **números de sugestões antigas** de **números reais dos arquivos**. Correção de Fase 2: transformar a lista antiga em `temas candidatos sem numeração de arquivo` ou mapear para IDs conceituais estáveis, preservando `articleId` e aliases; atualizar eventual recomendação de ordem de leitura.

**Matriz de cobertura consolidada nesta rodada:** `01` a `03` cobrem fundamentos; `04` cobre decomposição; `05` produz questão de 12 linhas digitais; `06` produz modelo de peça de 28 linhas digitais; `07` cobre revisão e autocorreção. O corpus oficial já foi conferido nas rodadas anteriores. **Suficiência editorial inicial: sim, com ressalvas**, para conhecer o processo e começar a treinar. **Suficiência para afirmar preparo de prova, equivalência de pontuação ou retenção: não verificada**, pois faltam produções reais manuscritas, tempos e avaliações de resultados. Faltam ainda um exemplo de peça de maior densidade, diversidade de gêneros, classificação consistente de respostas medianas e calibração contra enunciados completos.

**Backlog de decisão atual:** P0: corrigir RD-017 (acompanhar cada medida) e RD-018 (critérios de classificação), além do RD-020 (colisão de navegação). P1: exemplo de peça de 40–50 linhas com grade detalhada; três níveis de resposta ao mesmo comando e reteste; estudo de casos de comunicação institucional apoiado em norma específica. P2: ficha privada de tentativa e evidências manuscritas, na etapa de integração autorizada. **Não alterar nesta Fase 1** os artigos 05–07 nem o hub, e não declarar testes pedagógicos que não ocorreram.

**Parecer desta rodada:** inventário encerrado e biblioteca própria avaliada de forma suficiente para decisão de reorganização; **três achados rastreáveis** foram agora localizados em arquivo/subtítulo/linha, com correção proposta. Os julgamentos sobre `atendido` e `parcial` são **autorais**, não conceitos atribuídos ao Cebraspe. A auditoria normativa dos materiais compartilhados permanece delimitada às frentes de origem. O estado da **Fase 1 continua parcialmente verificado** quanto à avaliação de desempenho e validação transversal, sem impedir elaboração de plano de Fase 2 no momento oportuno.


## Continuação de 11/11/2026: blocos 29–30, verificação de integridade dos links e critério de fechamento

**Controle de concorrência:** leitura do relatório no blob `a47ce2929a51433c412872762b84c6a8dd6f57cb` e do HEAD recente `ec902aa7f4dcc312a0019ee5b8ed21a461d3825e`. A consulta autenticada à árvore do GitHub encontrou **806 entradas** com `truncated: false`, mantendo **sete artigos e um hub** em `3 - Materias/Redacao/`. Não houve alteração de outros agentes nesta frente.

### Bloco 29: auditoria de links internos dos oito arquivos de Redação [CONFERIDO]

Método reproduzível: extrair todos os alvos dos wikilinks `[[alvo|rótulo]]` dos oito arquivos; retirar somente âncora interna e rótulo; conferir caminho absoluto ou relativo e nomes de arquivos efetivos contra a árvore Git do branch `main`. **Resultado:** os links de `01`, `04`, `05`, `06`, `07` e do hub foram resolvidos pelo confronto de caminhos. Há **seis ocorrências de referência quebrada a três alvos distintos** nos artigos `02` e `03`:

| Arquivo e localização exata | Alvo referenciado | Evidência | Correção de Fase 3 proposta |
| --- | --- | --- | --- |
| `02 - tese e linha argumentativa.md`, linha 267, título `Construção do parágrafo argumentativo` | `04 - construcao do paragrafo argumentativo` | Não existe arquivo com esse nome; o arquivo 04 atual é **decomposição de comandos** | Renomear a remissão para um pré-requisito efetivamente existente, ou marcá-la como `tema futuro sem link`; não apontar ao novo 04 por número |
| `03 - estrategias de argumentacao.md`, linha 240, trecho `Esse mecanismo será aprofundado`; linha 314, subtítulo `Contra-argumentação e refutação` | `05 - contra-argumentacao e refutacao` | Não existe esse arquivo; o 05 publicado é **resposta conceitual curta** | Substituir por relação real ao artigo 03 ou registrar tema planejado sem link, conforme decisão de arquitetura |
| `03 - estrategias de argumentacao.md`, linha 288, trecho `Isso prepara o próximo artigo`; linha 310, subtítulo `Construção do parágrafo argumentativo` | `04 - construcao do paragrafo argumentativo` | Não existe esse arquivo; numeração colide | Corrigir o texto sobre `próximo artigo` e a navegação, evitando falsa sequência 03→04 pelo título antigo |
| `03 - estrategias de argumentacao.md`, linha 318, subtítulo `Repertório, exemplos e evidências` | `06 - repertorio exemplos e evidencias` | Não existe esse arquivo; o 06 publicado é **peça técnica** | Registrar tópico futuro sem link ou encaminhar ao artigo existente mais próximo conceitualmente |

**Achado RD-021, severidade IMPORTANTE:** a biblioteca possui **vínculos quebrados verificáveis e colisão semântica de numeração**. Isso já ultrapassa uma simples questão de estilo do hub: dois textos fundamentais encaminham o estudante para destinos ausentes. São *seis ocorrências* de link para *três destinos não existentes*, conforme árvore consultada. Na Fase 1, não corrigir os artigos. A intervenção deverá preservar os atuais `articleId` e aliases e decidir se os temas antigos viram novos artigos ou apenas relações com notas disponíveis.

**Limite técnico:** esta varredura confere wikilinks explícitos do conjunto Redação no branch consultado. Não é um teste de navegação renderizada do Obsidian/GitHub Pages, nem uma garantia sobre URLs web externos ou sobre os links de outras matérias.

### Bloco 30: atualização do estado de saída e ações não executadas

**Nova evidência sobre a fonte oficial:** a [página institucional de Analista Legislativo, especialidades](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades), consultada novamente em 11/11/2026, lista os **Editais 1 a 6**, sem publicação posterior nessa página até o acesso. A retificação nº 5 e a nº 6 não modificam o regime de redação 20/20/50 já cotejado. O relatório não deve presumir publicação adicional.

**Estado editorial por requisito do protocolo:**
- **Inventário físico:** concluído na árvore consultada, com sete artigos canônicos + um hub e seus SHAs.
- **Matriz do edital e espelhos:** requisitos da prova e três pares de enunciado/padrão documentalmente examinados, com ressalvas de transferibilidade.
- **Avaliação individual do núcleo:** registrada para os sete artigos e hub, com correções localizadas e severidade; nenhum texto foi modificado.
- **Links e arquitetura:** seis referências quebradas detectadas nos artigos 02 e 03, além do plano antigo numerado no hub; dependências para correção identificadas.
- **Pedagogia:** materiais atuais são utilizáveis como ponto de partida; o exemplo de peça de 28 linhas tem correspondência incompleta entre medidas e monitoramento; o instrumento de autocorreção ainda exige critérios objetivos para `parcial` e `incorreto`.
- **Pendente de verificação:** auditoria exaustiva dos trechos normativos e conceituais das notas **compartilhadas** selecionadas; execução manuscrita e cronometrada de usuário e análise do desempenho individual. **A segunda é etapa de validação do aprendizado, não pré-requisito lógico da auditoria editorial da biblioteca**.

**Julgamento de fase:** a **auditoria editorial do núcleo próprio de Redação possui diagnóstico suficientemente fundamentado para a fase de planejamento**, inclusive inventário, cobertura, arquitetura e riscos. **A auditoria integral transversal ainda não pode ser certificada como concluída** sem o cotejo profundo das notas compartilhadas relevantes, que devem ser coordenadas com as respectivas frentes. O teste real de aprendizagem permanece uma atividade posterior, que deve acontecer na rotina privada. Mantém-se o status `parcialmente-verificado` de forma específica e honesta, sem impedir autorização futura da Fase 2.

**Prioridade revisada:** P0 corrigir **RD-021** (wikilinks e semântica de numeração), **RD-020** (hub antigo), **RD-017** (relação ação/indicador) e **RD-018** (estados de correção); P1 ampliar peça de 40–50 linhas e respostas comparadas por qualidade; P2 integrar retestes privados e observar folha manuscrita. Todas são **recomendações**, não alterações autorizadas neste turno.
