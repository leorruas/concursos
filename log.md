## [2026-09-03] infraestrutura e segurança | Arquitetura de Publicação Isolada (_site, manifest.json e allowlist fail-closed)
- **Eliminação de Vazamento de Repositório no GitHub Pages**:
  - Descontinuada a publicação de `path: .` em [[.github/workflows/pages.yml]], impedindo o vazamento de pastas e arquivos internos (`00 inbox/`, `1 - Planejamento/`, `2 - Editais/`, `4 - Projetos/`, `me.md`, `agents.md`, `.agent/`, `scripts/`).
  - Implementado o script de montagem estática [[scripts/build-site.js]], gerando o diretório isolado de distribuição `_site/` contendo estritamente os arquivos da SPA (`index.html`, `style.css`, `script.js`), a camada declarativa (`data/`) e as notas públicas de `3 - Materias/` e `00 - Desempenho/`.
- **Política de Publicação Diferenciada**:
  - *Markdown público*: descoberta automática (qualquer nova nota em pasta pública entra automaticamente no manifesto e no deploy).
  - *JSON estratégico*: política estrita de allowlist fail-closed (somente `concursos.json`, `edital-itens.json` e `erros-recorrentes.json` são copiados para `_site/data/`; novos JSONs não entram sem autorização expressa).
- **Manifesto Automático de Conteúdos Públicos (`manifest.json`)**:
  - Centralizadas as regras canônicas de visibilidade em `scripts/build-site.js` (SSoT).
  - O build gera automaticamente `_site/manifest.json` com todas as 90 notas públicas do vault, seus títulos reais e categorias.
  - Zero-maintenance: ao criar qualquer nova nota em `3 - Materias/`, ela é automaticamente incluída no manifesto e no deploy sem necessidade de edição de JSONs manuais.
- **Consumo Prioritário e Resiliente**:
  - `script.js` consome preferencialmente `manifest.json` (eliminando o gargalo de rate limit da API do GitHub e bloqueio HTTP 403), preservando fallback gracioso.
- **Auditoria Automatizada em CI**:
  - Adicionada a flag `--audit-site` em [[scripts/validate-integrity.js]] para inspecionar recursivamente o conteúdo de `_site/` e `_site/data/` antes do deploy, abortando o pipeline se qualquer arquivo não autorizado for detectado.

## [2026-09-03] governança e dados | Consolidação e Auditoria Rigorosa de Proveniência
- **Auditoria de Fontes em `data/concursos.json`**:
  - Dados de edital (banca, cargo, data e horário da prova, 70 questões, peso 1,0 e 2,5, pontuação máxima 115,0, critérios de corte) auditados e confirmados 1:1 contra `2 - Editais/Dataprev 2026 (Original).md` e `2 - Editais/TCDF 2026 ANACE.md`.
  - Corrigido o horário da prova Dataprev para 13h (conforme edital).
  - Corrigida a data da prova do TCDF para 22/11/2026 (conforme edital, descartando a data de 06/12 que era não confirmada).
- **Separação Epistemológica Estrita (Edital vs. Metas)**:
  - Isoladas as metas pessoais do candidato (`metasCandidato`) da estrutura normativa da prova (`estruturaProva`). Meta de 102 pontos na Dataprev ancorada formalmente em `4 - Projetos/dataprev-2026/Estrategia.md`. TCDF marcado com meta ausente (`null`), sem inferências fictícias.
- **Auditoria Semântica de Indicadores e Ausência de Dados**:
  - Ajustado `script.js` para diferenciar explicitamente `0%` real de ausência de dados estruturados.
  - Se não houver rastreio de sessões ou se não houver itens cadastrados, a interface exibe `—` e `dados insuficientes de sessões`, em vez de um número artificial.
- **Validação de CI Expandida**:
  - Atualizado `scripts/validate-integrity.js` para auditar a separação factual de metas e a existência física de todos os documentos-fonte declarados.

## [2026-09-03] arquitetura e design | Restauração do Baseline e Camada Estratégica Desacoplada
- **Desacoplamento Ontológico Estrito (Biblioteca vs. Concursos)**:
  - Restaurado o baseline funcional e visual estável (`acecd96c`): todas as matérias, notas públicas, simulados, busca, leitor com KaTeX, Mermaid e comentários recuperados em sua totalidade.
  - A biblioteca de conhecimento NÃO depende mais de nenhum JSON para existir ou listar notas; a descoberta do vault continua autônoma e completa.
  - Se a pasta `data/` for removida, o site continua 100% funcional como a biblioteca original.
- **Camada Estratégica Opcional e Auditável**:
  - Criados [[data/concursos.json]] (Dataprev 2026 e TCDF 2026 com links aos editais oficiais) e [[data/edital-itens.json]] (itens oficiais mapeados para notas reais do vault ou `null`).
  - Erros reais documentados em [[data/erros-recorrentes.json]] extraídos de `00 - Desempenho/Simulados/Simulado-02.md` e `3 - Materias/Logica/Avancos.md`.
  - Zero mocks: arquivos sintéticos de questões e SRS fictício descartados.
- **Interface Suíça Não-Invasiva**:
  - Painel estratégico renderizado **exclusivamente na Home**, desaparecendo por completo ao entrar em qualquer disciplina, artigo ou busca.
  - Seletor textual minimalista (`concurso: dataprev 2026 / tcdf 2026`) com persistência em `localStorage`.
  - Três indicadores tipográficos sem cards: **cobertura estrutural**, **exposição ao conteúdo** e **domínio validado** (exibindo "ainda não mensurável" na ausência de validação estatística).
  - Linha editorial "Prioridade atual" ligada diretamente ao erro pendente real.
- **Validação de CI**:
  - Script [[scripts/validate-integrity.js]] checando unicidade de IDs, integridade referencial com o vault e bloqueando mocks. Integrado em [[.github/workflows/pages.yml]].

## [2026-09-03] tecnologia e projetos | Evolução Arquitetural de leorruas/concursos (GitHub Pages)
- **Diagnóstico e Evolução Não-Destrutiva**:
  - Eliminado o gargalo de dependência da API do GitHub em runtime (que sofria com rate limit de 60 req/h com bloqueio HTTP 403) e as filtragens frágeis baseadas em nome de pastas no cliente.
  - Implementado modelo de dados estruturado na raiz: [[data/materias.json]] (matérias canônicas permanentes com `notaPrincipal` apontando para `3 - Materias/`), [[data/concursos.json]] (Dataprev 2026 e TCDF 2026), [[data/edital-itens.json]] (com relacionamento N:M, status padronizados e prioridade manual), [[data/questoes.json]], [[data/erros.json]] e [[data/revisoes.json]].
  - Preservados 100% dos recursos prévios: leitor de artigos Markdown com suporte a KaTeX, Mermaid, callouts do Obsidian, comentários inline, Table of Contents (TOC) e modo claro/escuro.
  - Refatorados [[index.html]] e [[script.js]]: inserido seletor de concurso ativo na barra de navegação, painel dinâmico com contagem regressiva de dias, botão prioritário **"O que estudar hoje"**, e os **três indicadores independentes** (Cobertura do Edital, Progresso de Estudo e Domínio Validado), além da visualização explícita de itens "não mapeados".
  - Criado o script de auditoria [[scripts/validate-integrity.js]] e integrado ao workflow oficial [[.github/workflows/pages.yml]].

## [2026-09-03] tecnologia e projetos | Painel Pessoal de Estudos Multi-Concurso (GitHub Pages)
- **Arquitetura e Implementação**:
  - Projetada e construída a aplicação web estática SPA em `app/`, frontend-only e pronta para publicação direta no GitHub Pages.
  - Implementada a separação estrita da informação sob o princípio central de que *a matéria é permanente e o concurso é uma camada de seleção, prioridade e prazo*.
  - Base de dados estruturada em JSON: [[app/data/materias.json]] (matérias canônicas permanentes), [[app/data/concursos.json]] (Dataprev 2026 e TCDF 2026 com réguas de pontuação e pesos oficiais), [[app/data/dataprev-2026-edital.json]], [[app/data/tcdf-2026-edital.json]], [[app/data/questoes.json]], [[app/data/erros.json]] e [[app/data/revisoes.json]].
  - Views implementadas: Dashboard com contagem regressiva e métricas, Fila "O que estudar hoje" (SRS e erros clínicos), Tabela dinâmica de Edital com filtros rápidos, Catálogo de Matérias, Leitor Markdown integrado com fórmulas KaTeX, Banco de Questões com gabarito dinâmico e Caderno Clínico de Erros [K, C, I, D].
  - Criado o script automatizado de auditoria referencial [[app/scripts/validate-integrity.js]] garantindo 100% de integridade nos links e caminhos Markdown.
  - Configurado o workflow de deploy contínuo em [[.github/workflows/deploy.yml]].

## [2026-09-03] desempenho e matérias | Ingestão de Inbox (Bateria Dirigida de Lógica — 02/09/2026)
- **Ingestão e Desempenho**:
  - Ingeridas e processadas as 14 questões da bateria adaptativa de Raciocínio Lógico (02/09/2026) focada em condicional e tradução da linguagem natural, executada em três blocos após os erros do Simulado 02 (Q15 e Q35).
  - Resultado útil: 6/13 acertos válidos (46,2%), com 1 questão anulada por formulação concorrente (Q2 do Bloco 3).
  - Diagnosticada clinicamente a retenção sólida em negação de quantificadores com conjunção e em inferências categóricas, isolando a vulnerabilidade restante na tradução da linguagem natural para a implicação ($P \to Q$), na identificação da condicional falsa ($V \to F$ como único caso proibido) e na estrutura "a menos que".
- **Enriquecimento Teórico**:
  - Enriquecida a nota [[3 - Materias/Logica/02 - conectivos#Tradução da linguagem natural para a condicional (direção da seta)|02 • Conectivos lógicos]] com as regras formais de conversão de linguagem natural para implicação: *"P se Q"* ($\implies Q \to P$), *"P somente se Q"* ($\implies P \to Q$), *"Q é necessário para P"* ($\implies P \to Q$), *"P a menos que Q"* ($\implies \neg Q \to P \equiv \neg P \to Q$) e a heurística operacional do caso proibido ($P \land \neg Q$).
- **Sincronia de Desempenho e Projetos**:
  - Registrada a sessão e o diagnóstico clínico completo em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
  - Atualizados o [[00 - Desempenho/00 Avancos globais|Avanços globais]] (janela deslizante de 30 dias de Lógica recalculada para 42,1% em 19 Qs; Semana 36 consolidada em 190 Qs e 157 acertos) e o [[00 - Desempenho/01 Log de saturacao diaria|Log de saturação diária]] (sessão de 02/09 com 13 Qs úteis, 46,2% TAP).
  - Atualizados os arquivos de acompanhamento do projeto Dataprev: [[4 - Projetos/dataprev-2026/Questoes e Simulados|Questões e simulados]] (histórico de mini-simulados) e [[4 - Projetos/dataprev-2026/Log de erros|Log de erros (FGV)]].
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando cabeçalho e frontmatter em conformidade com as diretrizes do vault.

## [2026-09-01] desempenho e matérias | Simulado 02 completo
- **Catalogação:** Criado e indexado o [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]], com resultado bruto de 67/70 (95,7%) e três erros: Q15 [C], Q21 [D/C] e Q35 [C].
- **Limite metodológico:** A distribuição real das questões por disciplina não foi preservada; por isso, a nota ponderada Dataprev /115 e a Taxa de Aproveitamento Ponderada (TAP) foram registradas como não calculáveis.
- **Sincronia:** Atualizados o [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]], [[4 - Projetos/dataprev-2026/Questoes e Simulados|Questões e simulados]], [[4 - Projetos/dataprev-2026/Log de erros|Log de erros]], [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard]], [[00 - Desempenho/00 Avancos globais|Avanços globais]], [[00 - Desempenho/01 Log de saturacao diaria|Log de saturação diária]] e [[index]].
- **Teoria:** Refinada a nota [[3 - Materias/Portugues/03 - pontuacao e virgula#Coordenação adversativa × subordinação concessiva|Pontuação e vírgula]] para distinguir substituição semântica e reconstrução sintática com `mas`, `contudo` e `embora`.

## [2026-08-31] materias e desempenho | Ingestão de Teoria e Exercícios — LGPD Aprofundada (Poder Público, Bases Legais, Consentimento, Estatais e Sanções ANPD)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia|03 • LAI, LGPD e transparência]] com:
    - Árvore e taxonomia completa de dados (dado pessoal, dado comum, rol legal taxativo de dados sensíveis, dados anonimizados e pseudonimizados);
    - Fixação de fronteiras FGV: dados confidenciais/salariais vs. dados sensíveis, independência dimensional (*natureza da informação* vs. *possibilidade de identificação*) e não contaminação da base;
    - Regime de bases legais: proibição de legítimo interesse para dados sensíveis (art. 11), regras estritas do consentimento (cláusula destacada, nulidade de autorizações genéricas, ônus da prova ao controlador e revogação sem retroatividade);
    - Regime do Poder Público e Empresas Estatais: finalidade pública, competências legais e divisão de regime de estatais (privado em concorrência de mercado vs. público em execução de políticas públicas);
    - Agentes de tratamento e incidentes: responsabilidade funcional, notificação privativa pelo controlador em caso de risco relevante;
    - Sanções administrativas e ANPD: escadinha de sanções (advertência, multas, publicização, bloqueio/eliminação) e regras de dosimetria (reincidência como agravante sem multa máxima automática).
  - Atualizados os links de teoria na nota [[4 - Projetos/dataprev-2026/Wiki do edital/G5 - Legislacao SI|Wiki do edital (G5)]].
- **Avanços Globais / Log de Saturação**:
  - Atualizados o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 31/08/2026 (37 Qs, 30/37 acertos, TAP diária de 81,1%).
  - Atualizada a janela deslizante de 30 dias (`02/08/2026 a 31/08/2026`), com 181 Qs resolvidas em Comunicação Social (92,3% de aproveitamento) mantendo **Amostragem sólida**, e inaugurada a **Semana 36** (37 Qs, 81,1% bruto e ponderado).
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão de 37 Qs e o respectivo diagnóstico detalhado.
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando apenas seu cabeçalho e frontmatter conforme a governança mandatória do vault.

## [2026-08-31] desempenho e materias | Simulado 01 Completo (70 Questões) — Catalogação de Erros, Enriquecimento de Marco Civil e Lógica
- **Catálogo de Simulados & Desempenho**:
  - Ingeridas e processadas as 70 questões do [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]] (54/70 acertos — **77,1%**).
  - Atualizado o hub [[00 - Desempenho/Simulados/00 - Catalogo de simulados|00 • Catálogo de simulados]] com o mapa de calor completo de 13 disciplinas/tópicos.
  - Diagnosticados todos os 16 erros mapeados (Q3, Q5, Q10, Q13, Q14, Q21, Q22, Q24, Q26, Q31, Q48, Q54, Q58, Q61, Q65, Q70) com âncoras diretas de estudo para cada seção no vault.
- **Criação e Enriquecimento Teórico**:
  - **Enriquecida** a nota [[3 - Materias/Informatica/01 - marco civil da internet|01 • Marco Civil da Internet]] com os Fundamentos legais do Art. 2º (livre iniciativa, concorrência e defesa do consumidor) e detalhamento estrito da Neutralidade de Rede do Art. 9º (tratamento isonômico de tráfego de pacotes de dados vs. conteúdo).
  - **Enriquecida** a nota [[3 - Materias/Portugues/02 - sujeito|02 • Sujeito e termos da oração]] com funções do "SE" (PA vs. IIS).
  - **Enriquecida** a nota [[3 - Materias/Logica/03 - quantificadores|03 • Quantificadores]] com negações de universais com predicados compostos.
- **Housekeeping & Governança**:
  - Limpo integralmente o arquivo [[00 inbox/00 ingestão.md]], mantendo o frontmatter e pronto para novos simulados.
- **Criação e Enriquecimento Teórico**:
  - **Enriquecida** a nota [[3 - Materias/Portugues/02 - sujeito|02 • Sujeito e termos da oração]] com a seção detalhada de Funções do "SE": Partícula Apassivadora (PA - VTD/VTDI com sujeito paciente concordando) vs. Índice de Indeterminação do Sujeito (IIS - VTI/VI com preposição e verbo fixo no singular).
  - **Enriquecida** a nota [[3 - Materias/Logica/03 - quantificadores|03 • Quantificadores]] com a regra de negação de universais com predicados compostos ("Todo P e Q" $\to$ "Pelo menos um não P ou não Q").
  - **Criadas** anteriormente as notas [[3 - Materias/Informatica/01 - marco civil da internet|01 • Marco Civil da Internet]] e [[3 - Materias/Ingles/ingles|Língua inglesa]].
- **Housekeeping & Governança**:
  - Limpo integralmente o arquivo [[00 inbox/00 ingestão.md]], preservando o frontmatter obrigatório.
  - Atualizada a regra mandatória de simulados e diagnósticos no [[me|me.md]].

## [2026-08-12] materias e planejamento | Ingestão de Exercícios e Teoria - Língua Portuguesa (Baterias FGV de Acentuação, Impessoalidade, Regência e Coesão)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Portugues/02 - sujeito|02 • Sujeito e termos da oração]] com a transmissão de impessoalidade em locuções verbais (*deve fazer / pode haver* no singular) vs. locuções com verbos pessoais (*podem existir* no plural).
  - Enriquecida a nota [[3 - Materias/Portugues/04 - regencia|04 • Regência verbal e nominal]] com o teste de regência e crase em nomes geográficos e de cidades (*“Vou a, volto da: crase há. Vou a, volto de: crase pra quê?”*).
  - Enriquecida a nota [[3 - Materias/Portugues/05 - acordo ortografico|05 • Acordo ortográfico]] com a regra do hiato tônico em *i* e *u* (*saúde, país, saída*) e sua diferenciação da regra das paroxítonas terminadas em L (*fácil*).
  - Enriquecida a nota [[3 - Materias/Portugues/01 - interpretacao de texto|01 • Interpretação de texto]] com a seção de Coesão Textual e Ambiguidade Referencial de Pronomes (FGV e a viabilidade gramatical de múltiplos antecedentes).
- **Avanços Globais / Log de Saturação**:
  - Atualizados o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 12/08/2026 (18 Qs, 12/18 acertos, TAP diária de 66.7%).
  - Atualizada a janela móvel de 30 dias (`14/07/2026 a 12/08/2026`) para Língua Portuguesa (18 Qs, 66.7% de aproveitamento) e a Semana 33 acumulando 113 Qs (91.2% bruto, 90.4% TAP).
  - Atualizada a nota local [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]] registrando as 18 Qs e o respectivo diagnóstico dos 5 gargalos mapeados.
- **Housekeeping**:
  - Limpo o conteúdo do arquivo de ingestão [[00 inbox/00 ingestão.md]], mantendo título e cabeçalho conforme as regras de governança do vault.

## [2026-08-11] materias e planejamento | Ingestão de Teoria e Exercícios - Fechamento do Edital de Comunicação Social (Bridging, Nielsen, Redes Gov, CMS/Adobe, Produção por Meio e Transparência)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/08 - assessoria de imprensa|08 • Assessoria de imprensa]] com as subseções de Bridging (responder ➔ contextualizar ➔ mensagem-chave sem evasão), entrevistas ao vivo e *sound bites*, coletivas de imprensa (credenciamento objetivo sem discriminação de veículos críticos e press kit como apoio documental).
  - Enriquecida a nota [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] com 4 novas seções: 12 (Heurísticas de Nielsen aplicadas ao UX Writing e regras de fronteira temporal/suporte), 13 (Boas Práticas em Redes Sociais Governamentais, princípio da impessoalidade, LGPD no atendimento e moderação ética democrática), 14 (Produção de Conteúdo Específica por Meio, SEO orientado a tarefas e CTAs descritivos) e 15 (Conceito de CMS, separação entre conteúdo e apresentação, e vocações primárias da suíte Adobe Creative Cloud).
  - Enriquecida a nota [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia|03 • LAI, LGPD e transparência]] com as seções de Transparência Pública (Ativa vs. Passiva), Transparência Formal vs. Efetiva (usabilidade e linguagem simples), Participação Social e Prestação de Contas (*accountability* vs. publicidade institucional).
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluídos os tópicos de Transparência/Participação (1.5), Produção para múltiplos meios (2.7), Entrevista ao vivo/Bridging (3.4.2), Coletivas de Imprensa (3.6 e 3.6.1), Heurísticas de Nielsen (4.6.2), e Boas Práticas em Redes Digitais (4.10 e 4.10.1).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], atingindo **100.0% de cobertura do Módulo II de Comunicação Social** (97/97 itens de folha) e elevando a cobertura **Total do Edital para 86.2%** (112/130 itens).
  - Atualizado e reestruturado o documento [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]], detalhando todos os 130 tópicos de folhas do edital (Módulo I e Módulo II) com seus respectivos status, consolidando o encerramento do Módulo II e mapeando as 18 pendências concentradas no Módulo I.
- **Avanços Globais / Log de Saturação**:
  - Atualizados o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 11/08/2026 (44 Qs, 40/44 acertos, TAP diária de 90.9%).
  - Atualizada a janela móvel de 30 dias (`13/07/2026 a 11/08/2026`), com 278 Qs resolvidas em Comunicação Social (95.3% de aproveitamento) e a Semana 33 acumulando 95 Qs (95.8% de aproveitamento).
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão de 44 Qs e o respectivo diagnóstico de encerramento do edital.
- **Housekeeping**:
  - Limpo o conteúdo do arquivo de ingestão [[00 inbox/00 ingestão.md]], mantendo o título e cabeçalho conforme as regras de governança do vault.

## [2026-08-05] materias e planejamento | Ingestão de Teoria e Exercícios - Teorias do Jornalismo, História da Imprensa, Papel Social, Infografia e Data Storytelling (Aulas 42 a 45 + Aprofundamentos)
- **Criação e Enriquecimento de Notas Teóricas**:
  - Criada a nota [[3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa|21 • Teorias do jornalismo e história da imprensa]] consolidando a evolução dos meios (Gutenberg ao digital, telégrafo, rádio, TV, convergência midiática), as 5 teorias clássicas (Espelho, Gatekeeping, Newsmaking, Agenda Setting, Espiral do Silêncio) + Framing (enquadramento), o ciclo de vida comunicacional da notícia, e o papel social da imprensa e função de *watchdog* na democracia.
  - Enriquecida a nota [[3 - Materias/Comunicacao/12 - producao editorial e design|12 • Produção editorial e design]] com a seção 12 sobre Visualização da Informação, Infografia (redução de carga cognitiva vs ornamentação), Princípios de Edward Tufte (Chartjunk, Data-ink ratio, integridade gráfica), escolha técnica de gráficos conforme a pergunta, distorções visuais (eixos truncados, proporção de áreas 2D, percentual sem base) e a tríade de Data Storytelling.
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluídos os tópicos de História e Conceitos do Jornalismo (2.1, incluindo 2.1.1, 2.1.2 e 2.1.3) e Infográficos e Visualização da Informação (8.8, incluindo 8.8.1, 8.8.2 e 8.8.3).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], elevando o progresso de Jornalismo para **90.9%** (10/11) e Produção Editorial para **70.0%** (7/10), a cobertura do Módulo II para **84.0%** (79/94) e o total do edital para **74.0%** (94/127).
- **Master Index & Hubs**:
  - Vinculada a nova nota [[3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa|21 • Teorias do jornalismo e história da imprensa]] no [[index|Master Index]] e no hub [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 05/08/2026 (22 Qs, 22/22 acertos, TAP diária de 100%).
  - Atualizada a janela deslizante de 30 dias para `07/07/2026 a 05/08/2026`, recalculando o aproveitamento de Comunicação para **95.9%** (235/245 Qs) e registrando a Semana 32 com volume acumulado de 45 Qs (100% de aproveitamento).
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão e o respectivo diagnóstico.
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando apenas seu cabeçalho conforme governança do vault.

## [2026-08-04] materias e planejamento | Ingestão de Teoria e Exercícios - Marketing de Conteúdo, Funil e ROI/ROAS (Aulas 40 e Avaliação)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/19 - marketing institucional e branding|19 • Marketing institucional e branding]] com as definições de Marketing de Conteúdo, etapas do funil público (topo, meio e fundo), a dinâmica de funil vs. jornada e a coerência entre a promessa de conteúdo e a experiência de serviço entregue.
  - Enriquecida a nota [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia|20 • Campanhas e planejamento de mídia]] com a seção de Avaliação Financeira (fórmulas e heurística de diferenciação estratégica entre ROI e ROAS no setor público).
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluído o tópico de Marketing de Conteúdo (5.7).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], elevando a seção 5 (Marketing e Branding) para **100%** (13/13), a cobertura do Módulo II para **77.7%** (73/94) e o total do edital para **69.3%** (88/127).
  - Atualizado o [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]], declarando a seção 5 (Marketing) como totalmente **CONCLUÍDA**.
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 04/08/2026 (12 Qs, 12/12 acertos, TAP diária de 100%).
  - Atualizada a janela deslizante de 30 dias para `06/07/2026 a 04/08/2026`, recalculando o aproveitamento de Comunicação para **95.5%** (213/223 Qs) e registrando a Semana 32 com volume acumulado de 23 Qs (100% de aproveitamento).
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão e o respectivo diagnóstico.
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando apenas seu cabeçalho conforme governança do vault.

## [2026-08-03] materias e planejamento | Ingestão de Teoria e Exercícios - Mídias Próprias, Pagas e Ganhas e Planejamento/Briefing de Campanhas (Aulas 38 e 39)
- **Criação de Notas Teóricas**:
  - Criada a nota [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia|20 • Campanhas e planejamento de mídia]] consolidando as Aulas 38 e 39: tipologia de mídias (Owned, Paid, Earned, Shared/PESO), integração de mídias com os 4 Ps (Praça), pegadinhas de controle de publicação e assessoria, estrutura do briefing (objetivos, entregas, mandatórios), sintomas vs. causas, alinhamento de promessa e capacidade de entrega, e testes de campanha (pré-teste e pós-teste).
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluídos os tópicos de Campanhas Institucionais e Planejamento/Avaliação de campanhas (5.8 e 5.9, incluindo 5.9.1, 5.9.2 e 5.9.3).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], elevando o progresso da seção 5 (Marketing e Branding) para **92.3%** (12/13), a cobertura do Módulo II para **76.6%** (72/94) e o total do edital para **68.5%** (87/127).
- **Master Index & Hubs**:
  - Vinculada a nova nota no [[index|Master Index]].
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 03/08/2026 (11 Qs, 11/11 acertos, TAP diária de 100%) e inaugurando a Semana 32 com volume e aproveitamento atualizados, além de ajustar as amostragens na janela de 30 dias.
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão e o diagnóstico qualitativo correspondente.
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando apenas seu cabeçalho conforme governança do vault.

## [2026-07-31] materias e planejamento | Ingestão de Teoria e Exercícios - Fundamentos do Marketing, 4 Ps, 7 Ps, Segmentação e Posicionamento (Aulas 36 e 37)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/19 - marketing institucional e branding|19 • Marketing institucional e branding]] com as Aulas 36 e 37: definições de marketing como processo de valor, a lógica evolutiva de Kotler (Marketing 1.0 a 5.0), a matriz clássica de 4 Ps (adaptada ao setor público com custos não monetários no Preço) e a matriz de 7 Ps de serviços (Pessoas, Processos e Evidências Físicas - chanceladas como touchpoints no design), além de critérios de segmentação (geográfico, demográfico, psicográfico e comportamental), público-alvo, personas e posicionamento estratégico pretendido vs. imagem percebida.
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluídos os tópicos de Conceitos de Marketing (5.1, 5.1.1, 5.1.2 e 5.1.3).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], elevando o progresso da seção 5 (Marketing e Branding) para **61.5%** (8/13), a cobertura do Módulo II para **72.3%** (68/94) e o total do edital para **65.4%** (83/127).
- **Relatório de Tópicos Faltantes**:
  - Atualizado o [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]], removendo os itens consolidados de conceitos de marketing, mix de marketing e segmentação/posicionamento.
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 31/07/2026 (10 Qs, 10/10 acertos, TAP diária de 100%) e atualizando a Semana 31 para **75 Qs, 92.0% bruto, TAP de 92.0%**.
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão e o diagnóstico correspondente.
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 Ingestão.md]], preservando apenas seu cabeçalho conforme governança do vault.

## [2026-07-29] materias e planejamento | Ingestão de Teoria e Conclusão do Módulo de Comunicação Interna e RP (Aulas 33, 34 e 35)
- **Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/09 - comunicacao interna|09 • Comunicação interna]] consolidando os conceitos das Aulas 33, 34 e 35: diferenciação estratégica entre Comunicação Interna e Endomarketing, gestão da mudança (mitigação de incertezas e modelo de Kotter), cultura organizacional de Edgar Schein (artefatos, valores e pressupostos básicos), clima organizacional (conjuntural), tipologia de canais internos (intranet, newsletters, murais, mensageria e reuniões), fluxos comunicacionais (descendente, ascendente, horizontal e transversal), e instrumentos de Relações Públicas (eventos institucionais, visitas dirigidas, lobby legítimo vs. tráfico de influência/corrupção e responsabilidade social).
- **Acompanhamento de Cobertura e Dashboard**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] marcando como concluídos todos os 12 subtópicos da seções 6.1 a 6.7 (Comunicação Interna, Endomarketing, Gestão da Mudança, Cultura Organizacional, Canais Internos, Stakeholders e Técnicas de RP).
  - Recalculada a tabela de progresso no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard (Dataprev 2026)]], elevando o progresso da seção 6 para **100%** (12/12), a cobertura do Módulo II para **69.1%** (65/94) e o total do edital para **63.0%** (80/127).
- **Relatório de Tópicos Faltantes**:
  - Atualizado o [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]], declarando a seção 6 (Comunicação Interna e Relacionamento com Públicos) como totalmente **CONCLUÍDA**.
- **Master Index & Hubs**:
  - Atualizadas as datas no [[index|Master Index]] e no hub de [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Housekeeping**:
  - Limpo o arquivo de ingestão [[00 inbox/00 ingestão.md]], preservando apenas seu cabeçalho conforme governança do vault.

## [2026-07-29] materias e planejamento | Ingestão de Teoria e Exercícios - Copywriting, UX Writing, Storytelling e Gestão de Crise (Aulas 31 e 32)
- **Detalhamento do Edital (Subtópicos)**:
  - Adicionados subtópicos estruturados e granulares a 10 disciplinas no checklist [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] para melhor controle de estudo (Jornalismo, Marketing, Campanhas, Endomarketing, Mudança, Cultura, Canais Internos, Relações Públicas, Infográficos e Tendências Digitais).
- **Criação e Enriquecimento de Notas Teóricas**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 • Lead, pirâmide invertida e storytelling]] com a técnica de Storytelling (contexto, conflito, transformação, resolução) e a tríade persuasiva de Logos, Ethos, Pathos.
  - Enriquecida a nota [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] com as definições de Copywriting governamental ético, UX Writing (usabilidade e clareza de fluxo), Microcopy, CTAs, Fricção Cognitiva, e a relação de Voice x Tone.
  - Enriquecida a nota [[3 - Materias/Comunicacao/07 - gestao de crises|07 • Gestão de crises]] com a diferença entre incidentes/emergências/crises, o ciclo de crises (antes/durante/depois), holding statements, dinâmicas de crise digital (segunda tela institucional, monitoramento qualitativo, dark sites, sala de crise) e diretrizes de moderação ética nas redes sociais.
- **Acompanhamento de Cobertura**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] marcando como concluídos os itens 3.4, 4.5, 4.6, 4.8 e 4.9.
  - Recalculada e atualizada a tabela de progresso no [[00 Dashboard|Dashboard]], elevando a cobertura de Comunicação Institucional para **88.9%** (8/9), Comunicação Digital para **81.8%** (9/11), o Módulo II para **58.5%** (55/94) e o total geral do Edital para **55.1%** (70/127).
- **Relatório de Tópicos Faltantes**:
  - Atualizado o [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]] incorporando os novos subtópicos de planejamento e removendo/marcando como concluídos os itens de Media training, Storytelling digital, Copywriting/UX Writing, Monitoramento e Gestão de crises digitais.
  - Adicionados os subtópicos específicos de aprofundamento (heurísticas de Nielsen em UX Writing, técnicas de bridging em Media Training e notificação formal LGPD/ANPD em crises) tanto no [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]] quanto no [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]].
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 29/07/2026 (11 Qs, 11/11 acertos, TAP diária de 100%) e atualizando o consolidado semanal para **65 Qs, 90.8% bruto, TAP de 90.8%**.
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão e o diagnóstico qualitativo correspondente.

## [2026-07-28] materias | Ingestão de Teoria e Exercícios - Multiplataforma, Acessibilidade, AI, SEO e Métricas (Aulas 24 a 30)
- **Criação e Enriquecimento de Notas Teóricas**:
  - Reestruturada e expandida a nota [[3 - Materias/Comunicacao/10 - linguagem simples|10 • Linguagem simples e acessibilidade digital]], incorporando as dimensões de Linguagem Simples e os conceitos de Acessibilidade Digital (princípios WCAG/POUR, eMAG e a norma ABNT NBR 17225 para imagens acessíveis).
  - Enriquecida a nota [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] adicionando as seções completas de *Produção multiplataforma e calendário editorial* (conteúdo-matriz, narrativa transmídia, calendário editorial, perene vs. oportuno), *Linha editorial, tom de voz e gestão de comunidades* (linha editorial, tom de voz, comunidades como inteligência e moderação), bem como detalhando métricas de *Distribuição, Interação e Conversão* (alcance vs. impressões, frequência, CTR, conversão) e métricas de *Recuperação da Informação e SEO* (precisão, revocação, sitemap e metadescrições/snippets).
- **Acompanhamento de Cobertura**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (marcando como concluídos os itens 4.3, 4.4, 4.7 e 4.11).
  - Recalculada e atualizada a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]], elevando o progresso de Comunicação Digital e Redes Sociais para **45.5%**, o progresso do Módulo II para **63.3%** e o total do Edital para **58.0%**.
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 28/07/2026 (42 Qs, 39/42 acertos, TAP diária de 92.9%) e atualizando a Semana 31 para **54 Qs, 88.9% bruto, TAP de 88.9%**.
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão de 28/07/2026 e o diagnóstico qualitativo de erros de CTR e conceitos de SEO.
- **Master Index / Hubs**:
  - Atualizado o nome da nota no [[index|Master Index]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-27] materias | Ingestão de Teoria - Marketing Institucional, Branding e Arquitetura de Marcas (Aulas 22 e 23)
- **Criação de Notas Teóricas**:
  - Criada a nota [[3 - Materias/Comunicacao/19 - marketing institucional e branding|19 • Marketing institucional e branding]], consolidando o ecossistema de marcas, branding no setor público, a distinção temporal e de controle entre ativos intangíveis (Identidade ➔ Expressão ➔ Imagens ➔ Reputação), o conceito de Brand Equity e os três modelos de arquitetura de marca (branded house, house of brands e marcas endossadas).
- **Acompanhamento de Cobertura**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (marcando como concluídos os itens 5.2, 5.3, 5.4, 5.5 e 5.6).
  - Recalculada e atualizada a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]], elevando o progresso de Marketing e Branding para **55.6%**, o progresso do Módulo II para **58.2%** e o total do Edital para **54.5%**.
- **Avanços Globais / Log de Saturação**:
  - Atualizado o [[00 - Desempenho/00 Avancos globais|00 Avancos globais]] e o [[00 - Desempenho/01 Log de saturacao diaria|01 Log de saturação diária]], registrando a sessão de 27/07/2026 (12 Qs, 9/12 acertos, TAP diária de 75.0%) e atualizando a janela de amostragem de 30 dias de Raciocínio Lógico e Cálculo Mental por decaimento temporal do período móvel.
  - Atualizada a nota local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão de 27/07/2026.
- **Master Index / Hubs**:
  - Vinculada a nova nota no [[index|Master Index]] e no hub de [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-22] materias | Ingestao de Teoria - Planejamento, Pesquisa, Stakeholders e Desinformação (Aulas 17, 18, 19, 20 e 21)
- **Criação de Notas Teóricas**:
  - Criada a nota [[3 - Materias/Comunicacao/15 - publicos e stakeholders|15 • Públicos e stakeholders]], estabelecendo a taxonomia de stakeholders internos e externos, além do mapeamento estratégico (poder vs. interesse) sob a ótica de Kunsch.
  - Criada a nota [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|16 • Planejamento de comunicação]], detalhando a estrutura lógica de planos estratégicos (diagnóstico, objetivos, estratégias, ações, KPIs e avaliação) e as distinções entre Eficiência, Eficácia e Efetividade.
  - Criada a nota [[3 - Materias/Comunicacao/17 - pesquisa em comunicacao|17 • Pesquisa em comunicação]], abordando métodos quantitativos e qualitativos de forma complementar, além de fontes de viés e limitações estatísticas.
  - Criada a nota [[3 - Materias/Comunicacao/18 - fact checking e desinformacao|18 • Fact-checking e desinformação]], definindo a desordem informativa (mis, dis e mal-information), checagem de fatos, curadoria humana de IA, deepfakes e gestão pública de crises de desinformação.
- **Enriquecimento de Teoria**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/08 - assessoria de imprensa|08 • Assessoria de imprensa]] com as distinções da Aula 18 (assessoria vs. publicidade/comunicação institucional, acordos éticos de *off the record* e gerenciamento ágil, transparente e preciso de crises).
- **Acompanhamento de Cobertura**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (marcando como concluídos os itens 2.8, 3.2, 3.3, 6.6, 7.1 a 7.6, 7.8 a 7.10, 10.3 e 10.4).
  - Recalculada e atualizada a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]], elevando o progresso do Bloco II para **51.9%** e o progresso total do Edital para **50.0%**.
  - Marcados os tópicos concluídos no [[00 inbox/Relatorio de topicos faltantes|Relatório de tópicos faltantes]].
- **Master Index / Hubs**:
  - Vinculadas as quatro novas notas no [[index|Master Index]] e no hub de [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-22] materias | Ingestao de Teoria - Jornalismo e Produção de Conteúdo (Aulas 13, 14, 15 e 16)
- **Criação de Notas Teóricas**:
  - Criada a nota [[3 - Materias/Comunicacao/13 - generos jornalisticos|13 • Gêneros jornalísticos]], estruturando os gêneros informativos, opinativos e interpretativos com heurísticas e distinções de prova da banca FGV (como Editorial vs. Artigo).
  - Criada a nota [[3 - Materias/Comunicacao/14 - entrevista jornalistica|14 • Entrevista jornalística]], detalhando a entrevista como gênero e técnica, tipos de perguntas (abertas/fechadas) e a relação com UX Research.
- **Enriquecimento de Teoria**:
  - Enriquecida a nota [[3 - Materias/Comunicacao/04 - criterios de noticiabilidade|04 • Critérios de noticiabilidade]] com as distinções da Aula 13 (Fato vs. Notícia vs. Opinião vs. Release e Interesse Público vs. Interesse do Público).
  - Enriquecida a nota [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 • Lead, pirâmide invertida e storytelling]] adicionando a teoria de Apuração Jornalística (procedimentos, fontes oficiais vs. neutras, cruzamento de fontes, contraditório e objetividade).
- **Acompanhamento de Cobertura**:
  - Atualizado o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (itens 2.3, 2.4 e 2.5 marcados como concluídos).
  - Recalculada e atualizada a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]], elevando o progresso do Bloco II para **32.9%** e do Edital Geral para **36.6%**.
  - Marcados os itens correspondentes como concluídos em [[00 inbox/Relatorio de topicos faltantes|Relatório de tópicos faltantes]].
- **Master Index / Hubs**:
  - Vinculadas as duas novas notas no [[index|Master Index]] e no hub de [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-20] governanca | Atualizacao do Workflow de Ingestao (Aprendizado /learn)
- **Governança (/learn)**: Inserida a regra de `Sincronia do Edital` ao workflow de Ingestão em [[me|me.md]] após aprovação da proposta de aprendizado. O agente agora é obrigado a atualizar o checklist de matérias e o progresso no dashboard de forma automática e imediata em qualquer ingestão de novos temas.
- **Relatório de Faltantes**: Atualizado o arquivo [[00 inbox/Relatorio de topicos faltantes|Relatório de tópicos faltantes]] marcando como concluídos/consolidados os novos tópicos de Produção Editorial (8.1 a 8.4) e os tópicos maduros do edital.


## [2026-07-20] materias | Ingestao de Teoria - Whitespace, Alinhamento e Fechamento de Arquivos
- **Enriquecimento de Teoria**: Atualizada a nota [[3 - Materias/Comunicacao/12 - producao editorial e design|12 • Produção editorial e design]] com as Aulas 9, 10 e 12 da inbox, consolidando os eixos de Espaço em Branco (whitespace), Alinhamento e Fechamento de Arquivos para Gráfica (sangria, margem de segurança, fontes e PDF/X) com foco calibrado nas regras de prova da banca FGV.
- **Atualização de Avanços Locais**: Adicionado o diagnóstico da sessão teórica em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-20] materias | Ingestao e Criacao de Teoria - Producao Editorial e Design
- **Nova Nota de Teoria**: Criada a nota [[3 - Materias/Comunicacao/12 - producao editorial e design|12 • Produção editorial e design]], sintetizando os principais eixos conceituais de design gráfico, tipografia, computação gráfica, legibilidade e grids sob o modelo mental da *Arqueologia do Design*.
- **Acompanhamento de Cobertura**: Atualizados os checklists em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (itens 8.1, 8.2, 8.3 e 8.4 como concluídos) e a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]], subindo a cobertura do Bloco II para **29.1%** e do Edital Geral para **33.9%**.
- **Atualização de Avanços Locais**: Adicionado o diagnóstico de consolidação teórica em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
- **Master Index / Hubs**: Vinculada a nova nota no [[index|Master Index]] e no hub de [[3 - Materias/Comunicacao/comunicacao|Comunicação Social]].
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-20] governanca | Enriquecimento Imediato de Teoria e Ingestao de Inbox
- **Enriquecimento de Teoria**: Atualizada a nota [[3 - Materias/Comunicacao/08 - assessoria de imprensa|08 • Assessoria de imprensa]] com as nuances de *hierarquia informativa de releases* e *clipping analítico vs. básico* trazidas pelas questões do simulado.
- **Governança**: Adicionada a regra de `Enriquecimento Imediato de Teoria` ao workflow de Ingestão em [[me|me.md]], definindo a obrigatoriedade de transpor os aprendizados de pegadinhas e distinções de bancas diretamente para as notas de matéria.
- **Housekeeping**: Higienizado o arquivo de inbox [[00 inbox/00 ingestão.md]] mantendo apenas o título.

## [2026-07-20] materias | Ingestao de Comunicacao Social (Simulado FGV Bateria 1 e 2)
- **Ingestão de Exercícios**: Processadas 20 questões do simulado de Comunicação Social do inbox (19/20 acertos).
- **Acompanhamento de Cobertura**: Atualizada a tabela de progresso em [[4 - Projetos/dataprev-2026/00 Dashboard|00 Dashboard]] refletindo o novo status após a validação e marcação dos temas consolidados do "Grupo A" no checklist de estudos.
- **Notas de Teoria/Matérias**:
  - Atualizada a nota [[3 - Materias/Comunicacao/01 - comunicacao organizacional|01 • Comunicação organizacional]] com a heurística de finalidade predominante aplicada a vestibulares/processos seletivos públicos (Kunsch).
  - Atualizada a nota [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a sessão de 20/07/2026 e o diagnóstico do erro de finalidade predominante.
- **Avanços Globais / Log de Saturação**:
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], recalculando a janela de 30 dias móvel (avançada para 140 Qs, aproveitamento de 96,4%) e inserindo a **Semana 30** (**20 Qs, 95,0% bruto, TAP de 95,0%**).
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] mantendo apenas o título, e gerado o arquivo [[00 inbox/Relatorio de topicos faltantes|Relatório de tópicos faltantes]] consolidando tudo que resta estudar conforme o edital oficial.

## [2026-07-20] governanca | Cobertura do Edital no Dashboard da Dataprev
- **Acompanhamento de Cobertura**: Adicionada a seção `## Progresso de Cobertura do Edital` em [[00 Dashboard|Dashboard - Dataprev 2026]], exibindo uma tabela detalhada com itens concluídos, porcentagem e barras de progresso visual para cada matéria com base nas folhas do edital de [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]].
- **Governança**: Adicionada regra mandatória em [[me|me.md]] definindo a obrigatoriedade de atualização da tabela de progresso do dashboard sempre que o checklist for modificado.

## [2026-07-20] materias | Ingestao de Inbox (Melhorias no Log de Comunicacao e Template de Estudos)
- **Ingestão de Recomendações**: Processadas as sugestões de otimização de estudo do inbox (quinta-feira, 16/07).
- **Notas de Teoria/Matérias**:
  - Atualizada a nota de progresso [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] criando a seção permanente de `## Perfil de erros FGV` contendo os principais padrões de erro (predominância vs. soluções híbridas, extrapolação de fatos, bom senso prático vs. vocabulário técnico e atenção a termos decisivos).
  - Atualizado o [[wiki/templates/Sessao de Estudo|Template de Sessão de Estudo]] inserindo a coluna de **Confiança (0-100%)** nas tabelas de questões resolvidas para mapear disparidades entre a convicção do candidato e a acurácia teórica.
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] mantendo apenas o título.

## [2026-07-16] materias | Ingestao de Comunicacao Social (IA como Objeto de Comunicacao)
- **Ingestão de Exercícios**: Ingerida a rodada de exercícios do inbox do dia 16/07/2026 (4 Qs objetivas, 4/4 acertos nas objetivas e resolução de 1 Estudo de Caso), tratando da Inteligência Artificial como objeto de comunicação no contexto da Dataprev.
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota de teoria [[wiki/inteligencia artificial|Inteligência artificial]] incluindo a contextualização da IA na comunicação pública de acordo com a FGV, enfatizando a imutabilidade da responsabilidade institucional ("a IA não substitui a responsabilidade pública"), a mitigação do antropomorfismo algorítmico ("a IA decidiu") e a necessidade de focar a divulgação nos benefícios e impactos aos cidadãos, evitando o excesso de detalhes matemáticos ou de arquitetura.
  - Conectada a nota [[3 - Materias/Comunicacao/02 - comunicacao publica|02 • Comunicação pública]] ao tema, referenciando a seção de IA na Comunicação Pública.
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso de comunicação em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento acumulado de 16/07/2026 (4 Qs, 100% de acertos, TAP diária de 100%).
  - Recalculado o painel de 30 dias móvel de Comunicação Social (avançada para 120 Qs, aproveitamento de 96,7%) e a **Semana 29** (**87 Qs, 93,1% bruto, TAP de 91,7%**).
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] limpando o seu conteúdo e preservando apenas o título.

## [2026-07-15] materias | Ingestao de Atualidades/IA e Comunicacao Social (Transformers, Avaliacao, Etica)
- **Ingestão de Exercícios**: Ingeridas as sessões do inbox do dia 15/07/2026 (14 Qs totais, 14/14 acertos) abrangendo:
  - *Atualidades / Inteligência Artificial* (8 Qs, 8/8 acertos): Questões de aprofundamento cobrando o funcionamento dos LLMs, tokens, o mecanismo de *attention* nos Transformers, a natureza das alucinações (e a não-antropomorfização da FGV), a integração da IA na comunicação pública e responsabilidade institucional, deepfakes vs. desinformação em gestão de crises e os princípios de governança e ética da IA (transparência, supervisão humana e aplicação da LGPD).
  - *Comunicação Social* (6 Qs, 6/6 acertos): Questões de Ingestão de Inbox cobrando Avaliação da Comunicação (3 Qs e Estudo de Caso de KPIs e abandono de formulário) e Ética na Comunicação (3 Qs e Estudo de Caso de transparência/contextualização de dados).
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota de teoria [[wiki/inteligencia artificial|Inteligência artificial]] sistematizando as distinções de tokens vs. palavras, a arquitetura Transformer (mecanismo de attention), a origem das alucinações como fenômeno probabilístico, a governança da IA na Comunicação Pública (responsabilidade civil/administrativa indivisível e curadoria humana), a diferenciação técnica e estratégica de deepfakes vs. desinformação em momentos de crise, e os cinco princípios de governança (transparência, supervisão humana, accountability, equidade/fairness e proteção de dados/LGPD).
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] estruturando o modelo de desdobramento de indicadores (Objetivo ➔ Comportamento ➔ Indicador ➔ Métrica) e a relação/interpretação qualificada de indicadores (paradoxo de denúncias e análise cruzada de tempo/conclusão).
  - Criada a nota de teoria [[3 - Materias/Comunicacao/11 - etica em comunicacao|11 • Ética em comunicação]] consolidando os princípios fundamentais (compromisso com a verdade, contextualização, transparência, integridade de dados e prudência corporativa) e sua cobrança pela banca FGV.
  - Atualizadas a nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice master [[index.md]] para incluir o módulo 11.
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso de atualidades em [[3 - Materias/Atualidades/Avancos|Avanços e desempenho (Atualidades)]] e de comunicação em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
  - Atualizado o [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], registrando a sessão consolidada de 15/07/2026 (14 Qs, 14/14 acertos, TAP diária de 100%). Recalculado o painel de 30 dias móvel (Comunicação Social em 116 Qs, 96,6%) e atualizada a **Semana 29** (**83 Qs, 92,8% bruto, TAP de 91,4%**).
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] limpando o seu conteúdo e preservando apenas o título.

## [2026-07-14] materias | Ingestao de Calculo Mental, Comunicacao e Atualidades (Auditoria, Canais e IA)
- **Ingestão de Exercícios**: Ingerida a sessão do inbox do dia 14/07/2026 (36 Qs totais, 32/36 acertos) abrangendo:
  - *Cálculo Mental* (20 Qs, 17/20 acertos): Bateria 1 de Repertório (7/10) com erros leves no pouso de $97 \times 68$, digitação ($24\%$ de $700$) e decomposição ($125 \times 144$); e Bateria 2 de Auditoria Mental (10/10) gabaritada, validando o radar de propriedades estruturais sem recalcular.
  - *Comunicação Social* (13 Qs, 12/13 acertos): Blocos de Comunicação Digital e Redes Sociais (3/3), Morville (1/1) e Simulado FGV de Comunicação (8/9, com erro de julgamento sobre função jornalística e critérios de noticiabilidade na Q4), além de resolução de Estudo de Caso (Q10 discursiva) sobre abandono de formulários digitais.
  - *Atualidades / Inteligência Artificial* (3 Qs, 3/3 acertos): Questões conceituais sobre a taxonomia e as hierarquias de IA (IA vs. ML vs. IA Generativa vs. LLM vs. Aplicações).
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota de teoria [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]] com a seção de *Auditoria Mental e Radar Estrutural*, definindo heurísticas de verificação baseadas em limites de magnitude, dezenas simétricas e frações.
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] com os conceitos de *Estratégia de Canais e Jornada do Usuário* (heurística de momento de descoberta da informação) e *Rastro de Informação (Scent of Information)* integrado.
  - Criada a nota conceitual permanente [[wiki/inteligencia artificial|Inteligência artificial]] sistematizando subconjuntos (IA, ML, IA Generativa, LLM) e o funcionamento estatístico dos modelos de linguagem.
  - Criada a nota conceitual permanente [[wiki/quarto chines|Quarto chinês]] abordando o argumento clássico de John Searle (1980) de que sintaxe não produz semântica.
  - Adicionado o texto clássico de John Searle em [[3 - Materias/Atualidades/referencias/Minds Brains and Programs|Minds, Brains, and Programs (1980)]] na pasta de referências de Atualidades.
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso de cálculo mental em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
  - Atualizada a nota de progresso de comunicação em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
  - Atualizada a nota de progresso de atualidades em [[3 - Materias/Atualidades/Avancos|Avanços e desempenho (Atualidades)]].
  - Atualizado o [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], registrando a sessão de 14/07/2026 (36 Qs, 32/36 acertos, TAP diária de 87,5%). Recalculado o painel de 30 dias móvel e atualizada a **Semana 29** (**69 Qs, 91,3% bruto, TAP de 90,2%**).
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] limpando o seu conteúdo e preservando apenas o título.

## [2026-07-13] materias | Ingestao de Calculo Mental e Comunicacao (Noticiabilidade, Lead, Generos, Web e AI)
- **Ingestão de Exercícios**: Ingerida a sessão do inbox do dia 13/07/2026 (33 Qs totais, 31/33 acertos) abrangendo:
  - *Cálculo Mental* (13 Qs, 12/13 acertos): Bloco 1 de Repertório (4/5) com desvio residual por digitação em 98 × 74, e Bloco 2 de RAM Mista (8/8) gabaritado sob alternância de métodos.
  - *Comunicação Social* (20 Qs, 19/20 acertos): Noticiabilidade (3/3), Lead e Pirâmide (3/4, com erro atencional na Q4), Hierarquia (1/1), Título Jornalístico (3/3), Gêneros Jornalísticos (3/3), Redação Web (3/3) e Arquitetura da Informação (3/3).
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/04 - criterios de noticiabilidade|04 • Critérios de noticiabilidade]] com definições e heurísticas sobre relevância social, interesse humano e impacto ao cidadão.
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 • Lead, pirâmide invertida e storytelling]] com a sistematização completa de Gêneros Jornalísticos (Notícia, Reportagem, Artigo, Editorial, Crônica e Entrevista) e o modelo de retórica clássica (Logos, Ethos, Pathos) como heurística mental.
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] adicionando as seções completas de *Redação para web* (escaneabilidade, encontrabilidade, objetividade, hipertexto) e *Arquitetura da informação aplicada* (esquemas exatos vs. ambíguos de Peter Morville, percursos cognitivos e a tensão Instituição vs. Cidadão).
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso de cálculo mental em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
  - Atualizada a nota de progresso de comunicação em [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]].
  - Atualizado o [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], registrando a sessão de 13/07/2026 (33 Qs, 31/33 acertos, TAP diária de 93,5%). Recalculado o painel de 30 dias móvel e adicionada a **Semana 29** (**33 Qs, 93,9% bruto, TAP de 93,5%**).
- **Housekeeping**: Higienizado o arquivo de inbox [[00 ingestão]] limpando o seu conteúdo e preservando apenas o título.

## [2026-07-10] materias | Ingestao de Comunicacao Publica, Interna e Linguagem Simples do Inbox
- **Ingestão de Exercícios**: Ingeridas as baterias remanescentes de exercícios do inbox (19 Qs, 19 acertos nas objetivas) contemplando:
  - *Comunicação Pública* (11 Qs): Abordando os conceitos de Jorge Duarte, distinção com a comunicação governamental, organizações privadas exercendo fins públicos, os 4 eixos (Transparência, Acesso, Interação, Ouvidoria Social) e o funil de apropriação/ação.
  - *Comunicação Interna* (4 Qs): Abordando os três fluxos de comunicação (ascendente, descendente e horizontal) e a finalidade de coordenação.
  - *Linguagem Simples* (4 Qs): Mapeando as 4 dimensões (linguística, estrutural, visual e contextual), distinção com a linguagem coloquial e a conexão estratégica com Service Design.
- **Notas de Teoria/Matérias**:
  - Criada a nota conceitual permanente [[3 - Materias/Comunicacao/09 - comunicacao interna|09 • Comunicação interna]].
  - Criada a nota conceitual permanente [[3 - Materias/Comunicacao/10 - linguagem simples|10 • Linguagem simples]].
  - Enriquecida a nota de teoria [[3 - Materias/Comunicacao/02 - comunicacao publica|02 • Comunicação pública]] com os quatro eixos de Duarte e a distinção de marcas/imagens corporativas vs. utilidade cidadã.
  - Atualizadas as notas hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice master [[index.md]].
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a estatística de acertos e o diagnóstico de fixação da sessão.
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento acumulado de 10/07/2026 (elevado para 23 Qs, 100% de acertos, TAP diária de 100%).
  - Recalculada a janela deslizante de 30 dias de Comunicação Social (avançada de 58 Qs para 77 Qs, com aproveitamento ponderado final de 97,4%).
  - Atualizada a Semana 28 (**90 Qs, 91,1% bruto, TAP de 89,3%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/ingestão.md` limpando o seu conteúdo e mantendo apenas o título.

## [2026-07-10] referencias | Formatacao de Referencias de Comunicacao
- **Formatação de Referências**: Corrigida a formatação dos arquivos de referência [[3 - Materias/Comunicacao/referencias/Comunicacao publica e democracia|Comunicacao publica e democracia.md]] e [[3 - Materias/Comunicacao/referencias/Midias sociais - Jorge Duarte|Midias sociais - Jorge Duarte.md]].
  - Removido o prefixo de citação/bloco `> ` que envelopava os arquivos como um bloco único.
  - Reestruturado o fluxo de texto em parágrafos legítimos baseados nas quebras de página originais e término de sentenças.
  - Ajustadas as quebras de linha e hifenizações incorretas decorrentes da conversão de PDF.
  - Formatados os cabeçalhos, metadados (como resumos e abstracts) e listas de referências bibliográficas no padrão Markdown.
  - Adicionado o frontmatter obrigatório com os campos `created` e `updated` para rastreamento.

## [2026-07-10] editais | Ingestao do Edital TCDF 2026 ANACE
- **Ingestão do Edital (TCDF 2026)**: Ingerido o edital nº 1 TCDF ANACE de 8 de julho de 2026, mapeando requisitos, remuneração (R$ 14.990,41 iniciais), estrutura de provas (Cebraspe, 150 itens certo/errado, discursiva) e cronograma (inscrições de 26/08 a 17/09, prova em 22/11/2026). Nova nota de edital criada em [[2 - Editais/TCDF 2026 ANACE|TCDF 2026 ANACE]].
- **Planejamento e Roadmap**:
  - Criado o arquivo [[1 - Planejamento/Roadmap Dataprev e TCDF|Roadmap Dataprev e TCDF]] consolidando as datas importantes (isenção de taxa, inscrições, provas) e estruturando o plano de transição de estudos pós-Dataprev em 4 fases.
  - Atualizada a tabela de concursos ativos com edital publicado em [[1 - Planejamento/concursos abertos|concursos abertos]].
- **Index**: Registrados os novos arquivos em [[index.md]].


## [2026-07-10] materias | Ingestao de Assessoria de Imprensa do Inbox
- **Ingestão de Exercícios**: Ingerida a rodada do inbox (4 Qs, 4 acertos nas objetivas) de Assessoria de Imprensa, abrangendo release, clipping, autonomia editorial e relação com a imprensa, além da resolução do Estudo de Caso de Assessoria da Dataprev.
- **Notas de Teoria/Matérias**:
  - Criada a nota conceitual permanente [[3 - Materias/Comunicacao/08 - assessoria de imprensa|08 • Assessoria de imprensa]] abordando os conceitos de release, press kit, clipping, media training e a ótica de credibilidade de longo prazo segundo a FGV.
  - Atualizada a nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice master [[index.md]].
- **Conversão de Referências (PDF ➔ MD)**:
  - Localizados os 5 arquivos de artigos na pasta do iCloud (`*artigos para ler - concurso `).
  - Convertidos os arquivos com texto nativo (`Comunicacao publica e democracia.pdf`, `comunicao publica jorge duarte.pdf` e `jorge-duarte - midias sociais.pdf`) para Markdown usando a biblioteca `pypdf`.
  - Processados os arquivos escaneados/imagem (`assessoria de impressa - jorge duarte .PDF` e `kunsch.pdf`) usando um script Swift customizado integrado ao framework nativo **Vision OCR** do macOS, sanando a ausência de texto nativo.
  - Implementado um script Python pós-processador para **reconstruir parágrafos**, limpando todas as quebras de linha fragmentadas herdadas do PDF em todos os 5 documentos.
  - Organizados e movidos com nomenclatura limpa (sem acentos) para a pasta `3 - Materias/Comunicacao/referencias/`:
    - `Assessoria de imprensa - Jorge Duarte.md`
    - `Comunicacao publica e democracia.md`
    - `Comunicacao publica - Jorge Duarte.md`
    - `Midias sociais - Jorge Duarte.md`
    - `Kunsch.md`
  - Vinculadas as novas referências na nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]].
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a estatística de acertos e o diagnóstico de fixação da sessão.
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento do dia 10/07/2026 (4 Qs, 100% de acertos, TAP diária de 100%).
  - Recalculada a janela deslizante de 30 dias, deslocando o período móvel para 10/06/2026 a 10/07/2026. Comunicação Social manteve amostragem sólida (58 Qs, 96,6% de aproveitamento), enquanto Língua Portuguesa caiu para amostragem insuficiente (19 Qs, 73,7% de aproveitamento).
  - Atualizada a Semana 28 (**71 Qs, 88,7% bruto, TAP de 86,9%**).
- **Housekeeping**: Conteúdo do arquivo de inbox `00 inbox/ingestão.md` limpo, mantendo o arquivo físico e seu título conforme a nova regra de preservação.

## [2026-07-08] materias | Ingestao de Comunicacao Social (Simulacao/Crises) e Calculo Mental do Inbox
- **Ingestão de Exercícios**: Ingeridas as rodadas do inbox (22 Qs, 20 acertos nas objetivas) englobando:
  - *Comunicação Social* (13 Qs, 100% nas objetivas): Mídias Sociais e Conteúdo Digital (4 Qs), Eficiência/Eficácia/Efetividade (3 Qs e 1 Estudo de Caso), e Simulação de Crise 'Meu INSS' (6 Qs e 2 discursivas/casos práticos).
  - *Cálculo Mental* (9 Qs, 7/9): Bloco 1: Repertório (4/5, erro de aterrissagem em 24% de 850), Bloco 2: RAM (0/1, erro de produção/fala na centena em 387+126), e Bloco 3: Microcontas (3/3 acertos em pouso de centena).
- **Notas de Teoria/Matérias**:
  - Criada a nota conceitual permanente [[3 - Materias/Comunicacao/07 - gestao de crises|07 • Gestão de crises]] cobrando a distinção de crise operacional vs. de comunicação, o ciclo de primeira manifestação, combate a rumores com fatos, a definição e aplicação do trio Eficiência, Eficácia e Efetividade, além das pegadinhas clássicas da FGV.
  - Atualizada a nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice master [[index.md]].
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a estatística de acertos e o diagnóstico de fixação da sessão.
  - Atualizada a nota de progresso local [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo mental)]] registrando o desempenho e as novas heurísticas (Modo B de silêncio executivo e verificação de vizinhança de 3s).
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento do dia 08/07/2026 (22 Qs, 90,9% nas objetivas, TAP diária de 87,1%).
  - Recalculada a janela deslizante de 30 dias de Comunicação Social, que atingiu **amostragem sólida** (54 Qs, 96,3% de aproveitamento), de Cálculo Mental (309 Qs, 74,4%) e de Direito Administrativo (150 Qs, 93,3% - após o deslocamento do limite móvel que removeu o dia 07/06).
  - Atualizada a Semana 28 (**67 Qs, 88,1% bruto, TAP de 86,2%**).
- **Housekeeping**: Limpo o arquivo de inbox `00 inbox/08-06-2026.md`.

## [2026-07-07] housekeeping | Correcao de Formato na Tabela Semanal de Avancos Globais
- **Correção de Tabela**: Removidas colunas duplicadas e corrompidas no final das linhas referentes às semanas 27 e 22 na tabela de Acompanhamento Semanal em [[00 Avancos globais|Avanços globais]].

## [2026-07-07] materias | Ingestao de Simulado de Fechamento de Comunicacao e Bateria de Portugues do Inbox
- **Ingestão de Exercícios**: Ingeridas as rodadas do inbox (35 Qs, 29 acertos) englobando Simulado de Fechamento Parcial (7/8), Questões Tipo C (3/3), Simulado FGV de Planejamento (5/5) em Comunicação Social, além de Bateria Geral de Português (6/10) e Teste de Tonicidade (8/9).
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota conceitual permanente [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 • Lead, pirâmide invertida e storytelling]] com a distinção teórica entre estrutura narrativa (Pirâmide Invertida) e gênero jornalístico (Reportagem/Notícia).
  - Atualizada a nota [[3 - Materias/Portugues/05 - acordo ortografico|05 • Acordo ortográfico]] vinculando-a às fontes da sessão.
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a estatística de acertos e o diagnóstico de fixação da sessão.
  - Atualizada a nota de progresso local [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]] registrando o desempenho e os gargalos residuais em ortografia, impessoalidade de "fazer" e leitura de quantificadores.
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento do dia 07/07/2026 (35 Qs, 82,9% bruto, TAP diária de 82,0%).
  - Recalculados os acumulados deslizantes de 30 dias de Língua Portuguesa (agora 59 Qs, 76,3% de aproveitamento - amostragem sólida), Comunicação Social (41 Qs, *95,1%*) e Cálculo Mental (320 Qs, 74,4%).
  - Atualizada a Semana 28 (**45 Qs, 86,7% bruto, TAP de 85,7%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/07-07-2026.md` deletando-o.

## [2026-07-07] materias | Conclusao e Enriquecimento da Ingestao de Comunicacao Digital
- **Enriquecimento Teórico**: Consolidado o conteúdo pendente da inbox de 06/07/2026 na nota permanent [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]], inserindo a comparação entre modelos clássico e contemporâneo, a interface com Service Design, impactos de LGPD em coletas de dados, o Dicionário de Equivalências (Design ➔ FGV) e a estrutura formal de discursivas FGV.
- **Index e Metadados**: Atualizada a data de modificação da nota e do índice geral [[index.md]].
- **Housekeeping**: Higienizado o diretório de inbox com a remoção definitiva de `00 inbox/06-07-2026.md`.

## [2026-07-06] materias | Ingestao de Comunicacao Organizacional e Digital do Inbox
- **Ingestão de Comunicação**: Ingeridas as rodadas de exercícios (10 Qs, 10 acertos) de 06/07/2026, com aproveitamento perfeito (100% de acertos).
- **Notas de Teoria/Matérias**:
  - Enriquecida a nota conceitual permanente [[3 - Materias/Comunicacao/01 - comunicacao organizacional|01 • Comunicação organizacional]] com o detalhamento dos ativos intangíveis (Identidade, Imagem, Reputação, Legitimidade, Marca).
  - Criada a nova nota conceitual permanente [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] estruturando a definição, o ciclo da comunicação digital, a diferença essencial entre Métricas e KPIs (Key Performance Indicators) e heurísticas/pegadinhas de prova.
  - Atualizada a nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice master [[index.md]].
- **Avanços Globais / Log de Saturação**:
  - Atualizada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] registrando a estatística de acertos e o diagnóstico de fixação da sessão.
  - Atualizados os painéis globais [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]], consolidando o rendimento do dia 06/07/2026 (TAP diária de 100%).
  - Recalculados os acumulados deslizantes de 30 dias de Comunicação Social (agora 25 Qs, 96,0% de aproveitamento).
  - Registrada a inicialização quantitativa da Semana 28 (**10 Qs, 100% de acertos, TAP de 100%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/06-07-2026.md` deletando-o.

## [2026-07-06] materias | Ingestao de Comunicação Social e Atualização de Avanços do Inbox
- **Ingestão de Comunicação Social**: Ingeridas as rodadas do inbox (15 Qs, 14 acertos) de 05/07/2026 abrangendo Comunicação Organizacional, Comunicação Pública, Relações LAI/LGPD, Critérios de Noticiabilidade, e Técnicas de Redação (Lead/Pirâmide).
- **Notas de Teoria/Matérias**:
  - Criadas 5 notas conceituais permanentes em [[3 - Materias/Comunicacao/]]: [[3 - Materias/Comunicacao/01 - comunicacao organizacional|01 • Comunicação organizacional]], [[3 - Materias/Comunicacao/02 - comunicacao publica|02 • Comunicação pública]], [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia|03 • LAI, LGPD e transparência]], [[3 - Materias/Comunicacao/04 - criterios de noticiabilidade|04 • Critérios de noticiabilidade]], e [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 • Lead, pirâmide invertida e storytelling]].
  - Criada a nota de progresso local [[3 - Materias/Comunicacao/Avancos|Avanços e desempenho (Comunicação)]] para armazenar o diagnóstico qualitativo e a estatística local.
  - Atualizada a nota hub [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] e o índice geral [[index.md]].
- **Avanços Globais / Log de Saturação**:
  - Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] consolidando a sessão de 05/07/2026 (TAP diária de 93,3%).
  - Recalculados os acumulados deslizantes de 30 dias de todas as matérias.
  - Atualizada a Semana 27 (**189 Qs, 91,0% de acertos, TAP de 89,6%**) e inicializada a Semana 28.
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/05-07-2026.md` e os scripts de apoio temporários deletando-os.

## [2026-07-05] arquitetura | Evolucao Incremental de Arquitetura e Estruturacao do Projeto Dataprev 2026
- **Nova Camada de Projetos**: Criado o diretório [[4 - Projetos/dataprev-2026/]] como o QG central do concurso. Inicializadas as notas de suporte [[00 Dashboard]], [[Estrategia]], [[Cronograma]], [[Edital comentado]], [[Questoes e Simulados]], [[Log de erros]] e [[Revisao final]].
- **Wiki do Edital**: Criada a subpasta [[4 - Projetos/dataprev-2026/Wiki do edital/]] com notas de hub mapeando os módulos do edital por meio de links de referência para a teoria permanente em [[3 - Materias/]]: [[Wiki do edital/G1 - Portugues|G1 • Língua portuguesa]], [[Wiki do edital/G3 - Raciocinio Logico|G3 • Raciocínio lógico]], [[Wiki do edital/G5 - Legislacao SI|G5 • Legislação de SI]] e [[Wiki do edital/E9 - Comunicacao Social|E9 • Comunicação social]].
- **Camada de Desempenho**: Criada a pasta [[5 - Desempenho/]] para isolar as métricas gerais de estudo. Movidas as notas [[00 Avancos globais|00 Avancos globais]], [[01 Log de saturacao diaria|01 Log de saturacao diaria]] e [[02 Metricas e metas|02 Metricas e metas]] para a nova camada.
- **Ajuste de Pesos da TAP**: Atualizados os pesos de custo cognitivo no [[me|me.md]] (SSoT) e no [[01 Log de saturacao diaria|01 Log de saturacao diaria.md]] para englobar as novas matérias (Inglês com peso 1.2; Legislação de SI, Comunicação Social e Atualidades/IA com peso 1.0).
- **Renomeação e Housekeeping**: Renomeada a pasta de planejamento para [[1 - Planejamento/]]. Renomeada a nota do edital seco para [[2 - Editais/Dataprev 2026 (Original)|Dataprev 2026 (Original)]]. Mapeados os novos caminhos e links no índice geral [[index.md]].

## [2026-07-05] editais | Conversao de Edital Dataprev para Markdown via MarkItDown
- **Conversão de Edital (Dataprev 2026)**: Convertido o edital original em PDF para markdown utilizando a ferramenta oficial `markitdown` com suporte a PDF (`markitdown[pdf]`) executado dinamicamente via `uvx` (gerenciador `uv` em Python 3.11), salvando o arquivo resultante em [[00 inbox/edital-dataprev.md]].
- **Checklist de Estudos**: Criada a nota de planejamento [[2 - Editais/Dataprev 2026 - O que estudar|Dataprev 2026 - O que estudar]], com checklists de todos os tópicos e conexões aos hubs correspondentes no vault.
- **Index**: Registrado o novo checklist no [[index.md]].
- **Housekeeping**: Removidos os arquivos temporários de teste e a conversão anterior.

## [2026-07-03] editais | Ingestao de Edital Dataprev 2026
- **Ingestão de Edital (Dataprev 2026)**: Ingerido o edital do concurso público da Dataprev para o cargo de Analista de Tecnologia da Informação (Perfil: 9. Comunicação Social), mapeando requisitos, remuneração (R$ 10.685,44 iniciais mais benefícios), estrutura de provas (FGV, 70 questões, módulo de conhecimentos gerais e específicos) e cronograma (inscrições de 06/07 a 06/08, prova em 11/10/2026). Nova nota criada em [[2 - Editais/Dataprev 2026|Dataprev 2026]].
- **Index**: Registrado o novo edital em [[index.md]].

## [2026-07-02] materias | Ingestao de Raciocinio Logico (Revisao) e Calculo Mental (Repertorio)
- **Ingestão de Raciocínio Lógico (Revisão)**: Ingeridos os exercícios do inbox (10 Qs, 8 acertos) de Possível x Necessário x Impossível. Diagnosticada a reincidência de erro em herança existencial de exclusão em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Ingestão de Cálculo Mental (Repertório)**: Ingeridas as rodadas do Bloco 1 (5 Qs, 4 acertos), com mapeamento do erro em 18% de 950 por quebra de método de referência, registrado em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 02/07/2026, consolidando 15 questões brutas, 80,0% de aproveitamento bruto e TAP de 80,0%. Recalculada a janela deslizante de 30 dias das disciplinas e a Qualidade de Transformação para **95,3%** (215 Qs monitoradas no total). Atualizada a Semana 27 (**174 Qs, 90,8%, TAP de 89,3%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/02-07-2026.md` deletando-o.

## [2026-06-30] materias | Ingestao de Calculo Mental e Raciocinio Logico (Revisao Geral)
- **Ingestão de Cálculo Mental**: Ingeridas as rodadas do inbox (15 Qs, 13 acertos) com a transição para o Bloco 2: RAM (Resistência e manutenção de estados), gabaritando as 5 séries em voz alta com uso de alça fonológica. Registrado o diagnóstico local em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Raciocínio Lógico (Revisão Geral)**: Ingeridos os exercícios do inbox (30 Qs, 26 acertos) abrangendo Módulo 1 (Fundamentos), Bloco De Morgan, Inversão de Inclusão e Bloco de Fixação (Modus Tollens vs Inversão). Registrado o diagnóstico local em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Teoria e Conceitos**:
  - *Cálculo Mental*: Enriquecida a nota [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]] com a estratégia de **Alça Fonológica (Phonological Loop)** como heurística para estabilização de estados intermediários na RAM mental.
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 30/06/2026, consolidando 45 questões brutas, 86,7% de aproveitamento bruto e TAP de 86,7%. Atualizados os acumulados deslizantes de 30 dias de Cálculo Mental (**471 Qs, 73,8%**), Raciocínio Lógico (**113 Qs, 88,5%**) e Direito Constitucional (**746 Qs, 96,0%**). Recalculada a Qualidade da Transformação para **95,6%** (210 Qs monitoradas no total). Atualizada a Semana 27 (**159 Qs, 91,8%, TAP de 90,4%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/30-06-2026.md` deletando-o.

## [2026-06-29] materias | Ingestao de Calculo Mental, Direito Constitucional e Direito Administrativo
- **Ingestão de Cálculo Mental**: Ingeridos os exercícios do inbox (30 Qs, 26 acertos) de baterias mistas e flexibilidade. Registrado o diagnóstico estratégico local em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Direito Constitucional**: Ingeridas as rodadas do inbox (58 Qs, 57 acertos) englobando Nacionalidade, cargos privativos de brasileiro nato e perda da nacionalidade (EC 131/2023). Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Direito Administrativo**: Ingeridas as rodadas de revisões mistas e início da Lei nº 9.784/1999 (Processo Administrativo Federal) com foco em Motivação e Contraditório/Ampla Defesa (26 Qs, 24 acertos). Registrado o diagnóstico local em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Enriquecida a nota [[3 - Materias/Direito Constitucional/04 - nacionalidade|04 • Nacionalidade]] com as regras de jus soli/sanguinis, cargos privativos de brasileiro nato (art. 12, § 3º) e a nova regra de perda de nacionalidade (EC 131/2023).
  - *Administrativo*: Criada a nota conceitual [[3 - Materias/Direito Administrativo/09 - processo administrativo federal|09 • Processo administrativo federal]] detalhando princípios da Lei nº 9.784/1999, motivação, contraditório/ampla defesa, delegação e avocação de competência.
  - *Index*: Atualizado o índice geral [[index.md]] com os links da nova nota.
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 29/06/2026, consolidando 114 questões brutas, 93,9% de aproveitamento bruto e TAP de 92,4%. Atualizados os acumulados deslizantes de 30 dias de Cálculo Mental (**514 Qs, 74,5%**), Direito Constitucional (**766 Qs, 96,1%**) e Direito Administrativo (**304 Qs, 95,4%**). Recalculada a Qualidade da Transformação para **95,5%** (200 Qs monitoradas no total). Atualizada a Semana 27 (**114 Qs, 93,9%, TAP de 92,4%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/29-06-2026.md` deletando-o.

## [2026-06-23] materias | Ingestao de Direito Constitucional e Calculo Mental
- **Ingestão de Direito Constitucional**: Ingeridos os exercícios do inbox (130 Qs, 121 acertos) englobando Introdução à Administração Pública, Direitos Políticos e Nacionalidade. Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Cálculo Mental**: Ingeridos os exercícios do inbox (45 Qs, 34 acertos) focando em porcentagens, mapeando atalhos de 20% - 2% (para 18%) e 25% - 1% (para 24%), registrando o diagnóstico em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Enriquecidas as notas conceituais [[3 - Materias/Direito Constitucional/05 - direitos politicos|05 • Direitos políticos]] (com condições de elegibilidade, idade mínima, inelegibilidades absolutas/relativas, perda e suspensão) e [[3 - Materias/Direito Constitucional/04 - nacionalidade|04 • Nacionalidade]] (com nacionalidade originária vs adquirida e repercussões para cidadania).
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 23/06/2026, consolidando 175 questões brutas, 88,6% de aproveitamento bruto e TAP de 85,9%. Atualizados os acumulados deslizantes de 30 dias de Cálculo Mental (**484 Qs, 73,7%**) e Direito Constitucional (**708 Qs, 95,9%**). Recalculada a Qualidade da Transformação para **94,7%** (170 Qs monitoradas no total). Atualizada a Semana 26 (**260 Qs, 89,2%, TAP de 86,4%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/23-06-2026.md` deletando-o.

## [2026-06-22] materias | Ingestao de Direito Constitucional e Calculo Mental
- **Ingestão de Direito Constitucional**: Ingeridas as rodadas do inbox (60 Qs, 58 acertos) englobando bicameralismo, repartição de competências e controle recíproco sob viés doutrinário e de bancas. Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Cálculo Mental**: Ingeridas as rodadas do inbox (25 Qs, 19 acertos) voltadas a validar a ordem de grandeza e consolidar a auditoria antes da resposta, registrando o diagnóstico em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 22/06/2026, consolidando 85 questões brutas, 90,6% de aproveitamento bruto e TAP de 87,3%. Atualizados os acumulados deslizantes de 30 dias de Cálculo Mental (**439 Qs, 73,5%**) e Direito Constitucional (**578 Qs, 96,5%**). Recalculada a Qualidade da Transformação para **95,2%** (125 Qs monitoradas no total). Atualizada a Semana 26 (**85 Qs, 90,6%, TAP de 87,3%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/22-06-2026.md` deletando-o.

## [2026-06-20] materias | Ingestao de Direito Constitucional, Raciocinio Logico (Combinatoria), Calculo Mental e Edital
- **Ingestão de Edital (Fundação Florestal SP 2026)**: Ingeridas informações sobre o concurso publicado para Analista de Gestão – Comunicação Social, criando a nota de edital em [[2 - Editais/Fundacao Florestal SP 2026|Fundação Florestal SP 2026]] e vinculando-a às matérias correspondentes no vault.
- **Ingestão de Direito Constitucional**: Ingeridas as rodadas do inbox (79 Qs, 76 acertos) englobando Bicameralismo, Competências da Câmara e Senado, e Freios e Contrapesos. Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Raciocínio Lógico (Combinatória)**: Ingeridas as rodadas do inbox (15 Qs, 15 acertos) englobando Método do Complemento e Combinação com Restrições. Registrado o diagnóstico estratégico local em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Ingestão de Cálculo Mental**: Ingeridas as rodadas do inbox (15 Qs, 13 acertos) de diagnóstico de retorno e mistura de famílias, registrando o diagnóstico estratégico local em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**: Enriquecida a nota conceitual [[3 - Materias/Logica/09 - analise combinatoria|09 • Análise combinatória]] com as seções de Combinação, Propriedade do Complemento (Simetria) e Combinação com Restrições (elementos obrigatórios, proibidos e complemento com restrições).
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 20/06/2026, consolidando 109 questões brutas, 95,4% de aproveitamento bruto e TAP de 94,7%. Atualizados os acumulados deslizantes de 30 dias de Raciocínio Lógico (**502 Qs, 87,3%**), Cálculo Mental (**414 Qs, 73,3%**) e Direito Constitucional (**518 Qs, 96,5%**). Recalculada a Qualidade da Transformação para **94,0%** (100 Qs monitoradas no total). Atualizada a Semana 25 (**299 Qs, 92,0%, TAP de 89,3%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/20-06-2026.md` deletando-o.

## [2026-06-16] materias | Ingestao de Raciocinio Logico (Combinatoria) e Calculo Mental do Inbox
- **Ingestão de Raciocínio Lógico (Combinatória)**: Ingeridas 2 rodadas do inbox (25 Qs, 21 acertos) abrangendo revisão geral de combinatória (10/10) e fixação do método do complemento "Quem fica de fora?" (11/15). Registrado o diagnóstico estratégico local em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Ingestão de Cálculo Mental**: Ingerida a rodada de exercícios do inbox (10 Qs, 7 acertos) avaliando seleção consciente de âncoras convenientes e freio de segurança (autocorreção). Registrado o diagnóstico estratégico em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Avanços Globais / Log de Saturação**: Reajustados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturacao diaria|Log de saturação diária]] para o dia 16/06/2026, consolidando 35 questões brutas, 80,0% de aproveitamento bruto e TAP de 79,1%. Atualizados os acumulados deslizantes de 30 dias de Raciocínio Lógico (**487 Qs, 86,9%**) e Cálculo Mental (**399 Qs, 72,8%**). Recalculada a Qualidade de Transformação para **92,9%** (85 Qs monitoradas). Atualizada a Semana 25 (**190 Qs, 90,0%, TAP de 86,2%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/16-06-2026.md` deletando-o.

## [2026-06-15] materias | Ingestao de Direito Constitucional, Direito Administrativo e Calculo Mental do Inbox
- **Ingestão de Direito Constitucional**: Ingeridas 9 rodadas do inbox (82 Qs, 80 acertos) englobando Processo Legislativo, Cláusulas Pétreas e Poder Constituinte. Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Direito Administrativo**: Ingeridas 8 rodadas do inbox (53 Qs, 51 acertos) englobando aprofundamento de Licitações (fases, princípios e critérios de julgamento) e revisão de Improbidade (dolo e relevância material). Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Cálculo Mental**: Ingeridas as rodadas de cálculo mental do inbox (20 Qs, 12 acertos) avaliando compensação de salto e filtros de plausibilidade. Registrado o diagnóstico estratégico local em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Criada a nota conceitual [[3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte|10 • Processo legislativo e poder constituinte]]. Atualizado o hub [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]].
  - *Administrativo*: Enriquecida a nota conceitual [[3 - Materias/Direito Administrativo/08 - licitacoes e contratos|08 • Licitações e contratos]] com as fases do procedimento licitatório, princípios específicos (julgamento objetivo, segregação de funções, etc.) e critérios de julgamento de propostas.
  - *Index*: Atualizado o índice geral [[index.md]] com os links da nova nota.
- **Avanços Globais / Log de Saturação**: Reajustados os painéis [[00 Avancos globais|Avanços globais]] e o [[01 Log de saturação diária|Log de saturação diária]] para o dia 15/06/2026, consolidando 155 questões brutas, 92,3% de aproveitamento bruto e TAP de 88,6%. Atualizados os acumulados deslizantes de 30 dias de Direito Constitucional (**439 Qs, 96,6%**), Cálculo Mental (**389 Qs, 72,9%**) e Direito Administrativo (**278 Qs, 95,7%**). Recalculada a Qualidade de Transformação para **93,3%** (75 Qs monitoradas). Atualizada a Semana 25 (**155 Qs, 92,3%, TAP de 88,6%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/15-06-2026.md` deletando-o.

## [2026-06-12] materias | Ingestao de Direito Administrativo, Direito Constitucional e Calculo Mental do Inbox
- **Ingestão de Direito Administrativo**: Ingeridas as rodadas do inbox (43 Qs, 41.5 acertos) englobando Improbidade e Licitações (dispensa vs. inexigibilidade). Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Direito Constitucional**: Ingeridas as rodadas do inbox (36 Qs, 36 acertos) englobando as Funções Essenciais à Justiça (MP, Defensoria, Advocacia Pública). Registrado o diagnóstico estratégico local em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Cálculo Mental**: Ingerida a rodada de exercícios do inbox (25 Qs, 19 acertos). Identificada a consolidação de novo atalho cognitivo de salto e compensação redonda para subtrações de três dígitos (ex: $-400+14$), melhorando o controle da RAM mental. Registrado o diagnóstico estratégico e os erros de aterrissagem em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**:
  - *Administrativo*: Enriquecida a nota [[3 - Materias/Direito Administrativo/07 - improbidade administrativa|07 • Improbidade administrativa]] com a seção de Sanções, regra de parentesco e divergência de interpretação. Criada a nota [[3 - Materias/Direito Administrativo/08 - licitacoes e contratos|08 • Licitações e contratos]] com a distinção de dispensa vs. inexigibilidade. Atualizado o hub [[3 - Materias/Direito Administrativo/direito-administrativo|Direito administrativo]].
  - *Constitucional*: Criada a nota [[3 - Materias/Direito Constitucional/09 - funcoes essenciais a justica|09 • Funções essenciais à Justiça]] detalhando o papel e princípios de cada instituição. Atualizado o hub [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]].
  - *Index*: Atualizado o índice geral [[index.md]] com os links das novas notas.
- **Avanços Globais / Log de Saturação**: Reajustados os painéis [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária para o dia 12/06/2026, consolidando 104 questões brutas, 92,8% de aproveitamento bruto e TAP de 89,5%. Atualizados os acumulados deslizantes de 30 dias de Direito Constitucional (**357 Qs, 96,4%**) e Direito Administrativo (**225 Qs, 95,6%**). Recalculado o volume deslizante de 30 dias de Cálculo Mental (**369 Qs, 73,6%**) e a métrica de Qualidade de Transformação (**90,9%** em 55 Qs monitoradas), atingindo status de amostragem sólida. Atualizada a Semana 24 (**473 Qs, 87,0%, TAP de 83,4%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/12-06-2026.md` arquivando-o (deletado).

## [2026-06-11] materias | Ingestao de Direito Administrativo e Calculo Mental do Inbox
- **Ingestão de Direito Administrativo (Controle, Poderes e Improbidade)**: Processadas as rodadas de Direito Administrativo: Revisão de Recuperação de Controle e Poderes (10 Qs, 8 acertos), Bateria de Fixação de Atos e Poderes (8 Qs, 8 acertos), Bateria de Improbidade (5 Qs, 4 acertos) e Bateria de Improbidade/Ilegalidade/Irregularidade (5 Qs, 4 acertos), totalizando 28 questões (24 acertos). Registrados os diagnósticos locais em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Cálculo Mental**: Processadas as rodadas de Cálculo Mental de hoje: Rodada Matinal de Mistura (15 Qs, 12 acertos) e Rodada de Alta Carga e Quadrados (20 Qs, 12 acertos), totalizando 35 questões (24 acertos). Incorporada a análise da Qualidade da Transformação (**80,0% no dia / 8/10 representações**) e registrados os diagnósticos qualitativos em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**: Criada a nota conceitual [[3 - Materias/Direito Administrativo/07 - improbidade administrativa|07 • Improbidade administrativa]] estruturando a escada de gravidade (irregularidade × ilegalidade × improbidade), a exigência de dolo e os três grupos de condutas ilícitas. Atualizada a nota hub [[3 - Materias/Direito Administrativo/direito-administrativo|Direito administrativo]] e o índice master [[index.md]].
- **Avanços Globais / Log de Saturação**: Atualizados os painéis [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária para o dia 11/06/2026, consolidando 63 questões resolvidas, 76,2% de aproveitamento bruto e TAP de 73,5%. Recalculados os volumes deslizantes de 30 dias de Direito Administrativo (**182 Qs, 95,3%**) e Cálculo Mental (**344 Qs, 73,4%**). Atualizada a tabela de acompanhamento semanal para a Semana 24 (**369 Qs, 85,4%, TAP de 81,8%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/11-06-2026.md` arquivando-o (deletado).

## [2026-06-10] materias | Ingestao de Direito Constitucional, Direito Administrativo e Calculo Mental do Inbox
- **Ingestão de Direito Constitucional (Poder Judiciário & Controle)**: Processada a sessão conceitual de Poder Judiciário e Controle do inbox, contendo 5 baterias de questões: Inércia da Jurisdição (8 Qs, 8/8), Garantias da Magistratura (10 Qs, 9/10), CNJ (10 Qs, 10/10), Controle Interno/Externo (8 Qs, 8/8) e Revisão de Poderes (12 Qs, 12/12), totalizando 48 questões (47 acertos). Registrados os diagnósticos e o alerta para universais e absolutos ("qualquer") em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Direito Administrativo (Organização, Poderes, Atos e Controle)**: Processados os exercícios de Organização, Poderes e Atos (20 Qs, 19/20) e Controle de Legalidade/Mérito (5 Qs, 5/5), totalizando 25 questões (24 acertos). Registrados os diagnósticos e o erro mapeado de regime jurídico (direito privado) para EPs e SEMs em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Cálculo Mental**: Processadas as rodadas de Cálculo Mental de hoje: Rodada Matinal de Mistura Geral (15 Qs, 12 acertos), Rodada Cirúrgica de Compensação $100 \pm n$ (10 Qs, 6 acertos) e Segunda Tentativa de Compensação (5 Qs, 4 acertos), totalizando 30 questões (22 acertos). Registrados os diagnósticos (avanços em memória operacional e identificação de instabilidade de operador e magnitude nos desvios de compensações de bases livres) e o microtreino de sinais em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Atualizada a nota conceitual [[3 - Materias/Direito Constitucional/08 - poder judiciario e controle de constitucionalidade|08 • Poder judiciário e controle de constitucionalidade]] com as novas seções de Inércia da Jurisdição, Garantias da Magistratura (vitaliciedade, inamovibilidade, irredutibilidade de subsídios), Conselho Nacional de Justiça (CNJ - controle administrativo/disciplinar sem controle de mérito de decisões) e Controle da Administração Pública (Interno vs. Externo).
  - *Administrativo*: Atualizada a nota conceitual [[3 - Materias/Direito Administrativo/03 - atos administrativos|03 • Atos administrativos]] com as perguntas discriminadoras para controle de legalidade vs. controle de mérito.
- **Templates**: Criado o [[wiki/templates/Sessao de Estudo|Template de Sessão de Estudo]] para monitoramento de carga cognitiva (tempo sem pausa, dor lateral da cabeça e atenção percebida), atualizando o [[me|me.md]].
- **Avanços Globais / Log de Saturação**: Atualizado o painel consolidado [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária para o dia 10/06/2026, com 103 questões resolvidas, 90,3% de aproveitamento bruto e TAP de 86,5%. Atualizados os acumulados na janela deslizante de 30 dias de Cálculo Mental (**309 Qs, 73,9%**), Direito Constitucional (**321 Qs, 96,0%**) e Direito Administrativo (**154 Qs, 97,1%**). Atualizada a tabela de acompanhamento semanal para a Semana 24 (**306 Qs, 87,3%, TAP de 83,8%**).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/10-06-2026.md` marcando-o como `[Ingerido]`.


## [2026-06-09] materias | Ingestao de Direito Constitucional, Direito Administrativo e Calculo Mental (com Rodada Noturna)
- **Ingestão de Direito Constitucional (Poderes)**: Ingeridos os exercícios de Poder Legislativo (25 Qs, 25/25), Poder Executivo (16 Qs, 16/16) e STF/Constitucionalidade (8 Qs, 8/8), totalizando 49 questões (49 acertos). Registrados os diagnósticos em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Direito Administrativo**: Ingeridos os exercícios de Organização Administrativa (Indireta: 18 Qs, 18/18) e Concurso Público (8 Qs, 8/8), totalizando 26 questões (26 acertos). Registrados os diagnósticos em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Cálculo Mental**: Ingerida a rodada de Mistura de Famílias e Supermercado à tarde (20 questões, 8 acertos) e a Rodada Noturna de Recuperação às 20h (5 questões, 4 acertos), totalizando 25 questões (12 acertos) no dia. Registrados os diagnósticos e a heurística de desaceleração de ritmo em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Criadas as notas conceituais [[3 - Materias/Direito Constitucional/06 - poder legislativo|06 • Poder legislativo]], [[3 - Materias/Direito Constitucional/07 - poder executivo|07 • Poder executivo]] e [[3 - Materias/Direito Constitucional/08 - poder judiciario e controle de constitucionalidade|08 • Poder judiciário e controle de constitucionalidade]] compilando a estrutura institucional, bicameralismo, chefia de governo/estado, checks and balances e o papel do STF. Atualizado o hub [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]].
  - *Administrativo*: Atualizada a nota conceitual [[3 - Materias/Direito Administrativo/05 - agentes publicos|05 • Agentes públicos]] com a seção de Concurso Público e Exceções (cargos em comissão).
- **Avanços Globais**: Atualizado o painel consolidado [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, totalizando 100 questões resolvidas no dia, com 87,0% de aproveitamento bruto e TAP de 79,2%. Atualizados os acumulados na janela deslizante de 30 dias: Direito Constitucional (**273 Qs, 95,6%**), Direito Administrativo (**129 Qs, 97,3%**) e Cálculo Mental (**279 Qs, 74,0%**). Atualizada a tabela de acompanhamento semanal para a Semana 24 (**203 Qs, 85,7%, TAP de 82,6%**).
- **Index**: Atualizado o índice master [[index.md]] com os links das novas notas de Direito Constitucional.
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/09-06-2026.md` marcando-o como `[Ingerido]`.


## [2026-06-08] materias | Ingestao de Combinatoria, Calculo Mental e Ortografia
- **Ingestão de Raciocínio Lógico (Combinatória)**: Ingeridos os exercícios de Revisão (10 Qs, 9/10), Bloco Conceitual (10 Qs, 10/10), Arranjo (5 Qs, 5/5), Arranjo com Restrições 1 (5 Qs, 4/5), Arranjo com Restrições 2 (10 Qs, 8/10) e Treino de Inclusão-Exclusão (3 Qs, 2/3), totalizando 43 questões (38 acertos). Registrados os diagnósticos em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Ingestão de Cálculo Mental**: Ingeridos os resultados da rodada mista sem consulta (20 questões no total, 18 acertos). Registrados os diagnósticos e planos de ação em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Língua Portuguesa (Ortografia)**: Processada a bateria de Acordo Ortográfico (30 Qs, 21/30) e o teste de fixação de hífens (10 Qs, 10/10), totalizando 40 questões (31 acertos). Registrados os diagnósticos e plano de ação em [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]].
- **Teoria e Conceitos**:
  - *Lógica*: Enriquecida a nota de conteúdo [[3 - Materias/Logica/09 - analise combinatoria|09 • Análise combinatória]] com as seções de Arranjo (restrições e divisão em casos) e Princípio da Inclusão-Exclusão (relação lógica com conjuntos).
  - *Português*: Criada a nota conceitual [[3 - Materias/Portugues/05 - acordo ortografico|05 • Acordo ortográfico]] compilando as regras de acentuação (ditongos abertos e vogais dobradas) e hifenização com prefixos. Atualizado o hub [[3 - Materias/Portugues/portugues|Língua portuguesa]].
- **Avanços Globais**: Atualizado o painel consolidado [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, totalizando 103 questões resolvidas no dia, com 84,5% de aproveitamento bruto e TAP de 85,4%. Atualizados os acumulados na janela deslizante de 30 dias: Raciocínio Lógico (**462 Qs, 87,0%**), Cálculo Mental (**254 Qs, 76,6%**) e Português (**160 Qs, 85,0%**). **Adicionada a tabela de acompanhamento semanal com o histórico e breakdown de disciplinas para as semanas 22, 23 e 24.**
- **Index**: Atualizado o índice master [[index.md]] com os links das notas de lógica [[3 - Materias/Logica/08 - possibilidade e necessidade|08 • Possibilidade e necessidade]], [[3 - Materias/Logica/09 - analise combinatoria|09 • Análise combinatória]], a nova nota de português [[3 - Materias/Portugues/05 - acordo ortografico|05 • Acordo ortográfico]] e o novo log [[01 Log de saturacao diaria|Log de saturação diária]].
- **SSoT (me.md)**: Atualizado o documento de governança geral [[me|me.md]] para consolidar a nova arquitetura de acompanhamento de avanços, refletindo a descentralização do [[01 Log de saturacao diaria|Log de saturação diária]] em arquivo próprio, a introdução da tabela de volume semanal em [[00 Avancos globais|Avanços globais]], e formalizando a nova regra (5) do acompanhamento semanal de volume.
- **Estrutura e Organização**: Descentralizada a seção conceitual **Análise de resistência cognitiva e fadiga** e o **Log de Saturação Diária** de [[00 Avancos globais|Avanços globais]] para a nota dedicada [[01 Log de saturacao diaria|Log de saturação diária]]. Em contrapartida, consolidou-se o monitoramento de fadiga no painel global por meio da tabela semanal **Acompanhamento semanal de saturação e volume** (com agregados de volume bruto, aproveitamento bruto, TAP e sintomas qualitativos por semana).
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/08-06-2026.md` marcando-o como `[Ingerido]`.

## [2026-06-07] materias | Ingestao de Direito Administrativo e Calculo Mental
- **Ingestão de Direito Administrativo**: Processados os resultados da revisão e baterias de fixação (30 questões no total, 30 acertos). Registrados os diagnósticos e planos de ação em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Ingestão de Cálculo Mental**: Ingeridos os resultados da rodada de cálculo mental do metrô (20 questões, 15 acertos reais confirmados). Registrados os diagnósticos em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Teoria e Conceitos**: Atualizada a nota [[3 - Materias/Direito Administrativo/05 - agentes publicos|05 • Agentes públicos]] com a distinção entre cargo efetivo, cargo em comissão e função de confiança, incluindo a pergunta discriminadora.
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] com o progresso de 30 dias em Direito Administrativo (acumulado atualizado para **103 questões** e **96,6%** de aproveitamento deslizante) e Cálculo Mental (acumulado ajustado para **234 questões** e **76,1%** de aproveitamento). Atualizada a TAP do dia e recalculado o volume deslizante.
- **Index**: Atualizado o índice mestre [[index.md]] com a data de última modificação.

## [2026-06-06] materias | Ingestao de Calculo Mental
- **Ingestão de Cálculo Mental**: Processados os resultados da rodada de novas famílias (10 questões, 9 acertos). Registrados em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, recalculando o rendimento acumulado de Cálculo Mental para **214 questões** e **75,5%** de aproveitamento deslizante de 30 dias. Atualizada a Qualidade da Transformação para **91,4%** (35 questões monitoradas).
- **Index**: Atualizada a data de última modificação no índice master [[index.md]].

## [2026-06-05] materias | Ingestao de Calculo Mental
- **Ingestão de Cálculo Mental**: Processados os resultados de mercado e famílias de transformações (25 questões no total, 20.5 acertos). Registrados em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Métricas e Metas**: Adicionada e definida a métrica **Qualidade da Transformação** no guia [[02 Metricas e metas|Métricas e metas]] para isolar o raciocínio estrutural da precisão aritmética no Cálculo Mental.
- **Teoria e Conceitos**: Enriquecida a nota de conteúdo [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]] com novas heurísticas (Escalar a unidade, Proporções de mercado, Atalhos multiplicativos de 15 e 125, Diferença de quadrados e Quadrados de binômios).
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, recalculando o rendimento acumulado de Cálculo Mental para **204 questões** e **74,8%** de aproveitamento deslizante de 30 dias. Criada uma **mini-tabela de métricas específicas** para acompanhar o rendimento de **92,0%** na Qualidade da Transformação (com amostragem inicial de 25 questões monitoradas).
- **Index**: Atualizada a data de última atualização no índice master [[index.md]].
- **Housekeeping**: Higienizado o arquivo de inbox `00 inbox/05-06-2026.md` marcando-o como `[Ingerido]`.

## [2026-06-04] materias | Ingestao de Calculo Mental, Direito Constitucional e Direito Administrativo
- **Ingestão de Cálculo Mental**: Processados os resultados da sessão de Caça ao Atalho (35 questões no total, 28 acertos). Registrados em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Direito Constitucional**: Processados os resultados de Organização do Estado, DF, Territórios e Princípios da Administração (121 questões no total, 115 acertos). Registrados em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Direito Administrativo**: Processados os resultados de Processo Administrativo, Licitações, Revisão Geral e Casos Mistos (26 questões no total, 26 acertos). Registrados em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Avanços Globais**: Atualizado o painel consolidado [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária para o dia 04/06/2026, totalizando **182 questões resolvidas** com **92,9% de aproveitamento bruto** e **90,8% de TAP** ponderada. Atualizados os volumes na janela móvel de 30 dias: Direito Constitucional (**224 Qs, 94,6%**) e Direito Administrativo (**73 Qs, 95,2%**), transicionando Direito Administrativo para o status de **Amostragem sólida**.
- **Teoria e Conceitos**: Criadas as notas de conteúdo [[3 - Materias/Direito Administrativo/05 - agentes publicos|05 • Agentes públicos]] e [[3 - Materias/Direito Administrativo/06 - responsabilidade civil do estado|06 • Responsabilidade civil do Estado]] a partir dos diagnósticos consolidados em simulados anteriores. Atualizado o hub [[3 - Materias/Direito Administrativo/direito-administrativo|direito-administrativo.md]].
- **Index**: Atualizada a data de última modificação no índice mestre em [[index.md]].
- **Housekeeping**: Limpo e higienizado o arquivo de inbox `00 inbox/04-06-2026.md` marcando-o como `[Ingerido]`.

## [2026-06-03] materias | Ingestao de Portugues e Direito Constitucional
- **Ingestão de Língua Portuguesa**: Processados os resultados da Bateria Misturada, Interpretação e Semântica (20 questões no total, 19 acertos). Registrados em [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]].
- **Ingestão de Direito Constitucional**: Processados os resultados de Nacionalidade, Direitos Políticos e Revisão Geral (48 questões no total, 44 acertos). Registrados em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Criadas as notas [[3 - Materias/Direito Constitucional/04 - nacionalidade|04 • Nacionalidade]] e [[3 - Materias/Direito Constitucional/05 - direitos politicos|05 • Direitos políticos]]. Atualizada a nota [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]].
- **Avanços Globais**: Atualizado o painel estratégico [[1 - Planejamento/Avancos globais|Avanços globais]] e o Log de Saturação Diária, consolidando hoje um acumulado de **110 questões** com **88,2% de aproveitamento bruto** e **85,5% de TAP**. Atualizados os volumes acumulados de Português (120 Qs, 87,5%) e Direito Constitucional (103 Qs, 94,2%).
- **Index**: Atualizado o índice master em [[index.md]] com os links das novas notas.
- **Housekeeping**: Limpo e higienizado o arquivo de inbox `00 inbox/03-06-2026.md` marcando-o como `[Ingerido]`.

## [2026-06-03] planejamento | Descentralização de métricas e metas de avanços globais
- **Desmembramento de Métricas**: Criado o arquivo [[02 Metricas e metas|Métricas e metas]] contendo a Metodologia de medição deslizante, a Régua de competitividade e as Metas de progresso, movendo-as de [[00 Avancos globais|Avanços globais]].
- **Avanços Globais**: Removidas as seções de [[00 Avancos globais|Avanços globais.md]] e substituídas por link para a nova nota.
- **Index**: Adicionado o link do novo arquivo em [[index.md]].

## [2026-06-03] materias | Ingestao de Cálculo Mental e Direito Administrativo
- **Ingestão de Cálculo Mental**: Processados os resultados da sessão de Compensação e Números Redondos (25 questões no total, 18 acertos). Registrados em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Direito Administrativo**: Processados os resultados de Poderes Administrativos, Agentes Públicos e Responsabilidade Civil do Estado (17 questões no total, 16 acertos). Registrados em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, consolidando **42 questões no total** no dia 03/06/2026 com **81,0% de aproveitamento bruto** e **77,6% de TAP**. Atualizados os volumes de Cálculo Mental (144 Qs, 72,2%) e Direito Administrativo (47 Qs, 92,6% — amostragem insuficiente).
- **Index**: Atualizada a data de última atualização do índice master em [[index.md]].
- **Housekeeping**: Arquivo `00 inbox/03-06-2026.md` higienizado e marcado como `[Ingerido]`.

## [2026-06-02] materias | Ingestao de Cálculo Mental, Direito Constitucional, Português e Direito Administrativo (Parte 1 e 2)
- **Ingestão de Cálculo Mental**: Processados os resultados dos Treinos 21, 22 e 23 (15 questões no total, 10 acertos). Registrados em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ingestão de Direito Constitucional**: Processados os resultados de Direitos Sociais, Dimensões, Liberdades e Revisão Geral (35 questões no total, 33 acertos). Registrados em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]].
- **Ingestão de Língua Portuguesa**: Processados os resultados do bloco de Reescritas e Sentido (15 questões, 14 acertos). Registrados em [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]].
- **Ingestão de Direito Administrativo (Sessão Completa)**:
  - *Fase 1 (Estrutura)*: Processados os resultados de Órgãos vs. Entidades e Desconcentração vs. Descentralização (10 questões, 10 acertos).
  - *Fase 2 (Atos e Poderes)*: Ingeridos os exercícios de Atos Administrativos (COFIFOMO e Anulação/Revogação: 10 Qs, 9.5 acertos) e Poderes (Vinc/Disc e Disc/Polícia: 10 Qs, 8 acertos). Totalizando 30 questões (27.5 acertos) em [[3 - Materias/Direito Administrativo/Avancos|Avanços e desempenho (Direito administrativo)]].
- **Teoria e Conceitos**:
  - *Constitucional*: Criada a nota conceitual [[3 - Materias/Direito Constitucional/03 - direitos sociais|03 • Direitos sociais]]. Atualizadas as notas [[3 - Materias/Direito Constitucional/01 - principios fundamentais|01 • Princípios fundamentais]] e [[3 - Materias/Direito Constitucional/02 - direitos e garantias fundamentais|02 • Direitos e garantias fundamentais]].
  - *Português*: Atualizada a nota [[3 - Materias/Portugues/01 - interpretacao de texto|01 • Interpretação de texto]] adicionando regras de Reescrita e equivalência.
  - *Administrativo*: Criadas as notas [[3 - Materias/Direito Administrativo/01 - principios e lei de acesso a informacao|01 • Princípios e LAI]], [[3 - Materias/Direito Administrativo/02 - organizacao administrativa|02 • Organização administrativa]], [[3 - Materias/Direito Administrativo/03 - atos administrativos|03 • Atos administrativos]] e [[3 - Materias/Direito Administrativo/04 - poderes administrativos|04 • Poderes administrativos]].
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, consolidando **95 questões no total** no dia 02/06/2026 com **88,9% de aproveitamento bruto** e **86,1% de TAP**. Atualizados os volumes de Cálculo Mental (119 Qs, 72,3%), Direito Constitucional (55 Qs, 96,4%), Português (100 Qs, 86,0%) e Direito Administrativo (30 Qs, 91,7% — amostragem insuficiente).
- **Treino Proposto**: Atualizados os treinos propostos para incluir o Treino 24 (Experimento Multidispositivo).
- **Housekeeping**: Arquivo `inbox/02-06-2026.md` higienizado e marcado como `[Ingerido]`.


## [2026-06-01] materias | Correção do Volume de Cálculo Mental (Inclusão da Rodada R8)
- **Correção de Métricas**: Corrigida a omissão do Treino 18 (Rodada R8 de 8 questões, com 3 acertos) resolvido na sessão de Cálculo Mental de 01/06/2026. O volume diário foi ajustado de 38 para **46 questões** (28 acertos).
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] e o Log de Saturação Diária, reajustando a TAP do dia para **60,9%** (bruto: 60,9%) e o volume consolidado de Cálculo Mental na janela de 30 dias para **104 questões** com **73,1%** de aproveitamento.
- **Log de Avanços de Cálculo Mental**: Reindexadas e atualizadas as sessões de treino em [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]] (inserido o Treino 18 de complexidade R8, e reordenados os treinos seguintes até o proposto Treino 21).

## [2026-06-01] estrutura | Migração do Log de Treinos para Avanços
- **Cálculo Mental**: Movido todo o histórico detalhado de sessões de cálculo mental (Treinos 1 a 19 e o proposto Treino 20) do arquivo hub [[3 - Materias/Calculo Mental/calculo-mental|calculo-mental.md]] para a nota de progresso dedicada [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]], mantendo a separação entre teoria e execução.

## [2026-06-01] materias | Ingestao de Cálculo Mental do Inbox (Fase 2)
- **Ingestão de Desempenho**: Ingerida a rodada final de Cálculo Mental do inbox (Treinos 18 e 19, somando mais 4 questões e 0 acertos). Atualizados os volumes de Cálculo Mental e o Log de Saturação Diária em [[00 Avancos globais|Avanços globais]] (TAP atualizada para **65,8%** no dia e aproveitamento geral de 30d ajustado para **76,0%** em 96 questões).
- **Teoria e Conceitos**: Registrados os resultados dos Treinos 18 e 19 em [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]] e proposto o Treino 20 (focado em Estabilização de Operador e Sinal).
- **Housekeeping**: Arquivo `inbox/01-06-2026.md` re-limpo após ingestão.

## [2026-06-01] planejamento | Metodo de Carga Executiva e Taxa de Aproveitamento Ponderada (TAP)
- **Metodologia TAP**: Criada e implementada a **Taxa de Aproveitamento Ponderada (TAP)** no painel consolidado [[00 Avancos globais|Avanços globais]], definindo pesos de esforço cognitivo para cada disciplina (Cálculo Mental = 2.0; Raciocínio Lógico = 1.5; Português = 1.2; Direitos = 1.0).
- **Log de Saturação**: Integrada a tabela de **Log de Saturação Diária** em [[1 - Planejamento/Avancos globais|Avanços globais** para monitorar a TAP contra o cansaço qualitativo do dia (calculando os dados históricos recentes de 30/05, 31/05 e 01/06).
- **Limpeza de Avanços**: Removidos os blocos redundantes de fadiga das páginas de progresso de matérias (como [[3 - Materias/Portugues/Avancos|Avanços de Português]]) e substituídos por redirecionamentos em wikilinks.
- **Governança (me.md)**: Atualizado o arquivo de governança geral [[me|me.md]] para registrar a obrigatoriedade de aplicar pesos de carga executiva e reportar a TAP a cada nova ingestão.

## [2026-06-01] estrutura | Separacao de Calculo Mental como Disciplina Autonoma
- **Nova Matéria**: Separada a matéria de **Cálculo mental** do escopo de *Raciocínio lógico*, criando o diretório [[3 - Materias/Calculo Mental/|Calculo Mental]], a nota conceitual [[3 - Materias/Calculo Mental/calculo-mental|calculo-mental.md]] e o arquivo dedicado de [[3 - Materias/Calculo Mental/Avancos|Avanços e desempenho (Cálculo Mental)]].
- **Ajustes de Hubs e Index**: Atualizado o índice mestre [[index.md]] e o hub de lógica [[3 - Materias/Logica/00 - logica|00 - logica.md]] para refletir a nova hierarquia, e removido o arquivo antigo `3 - Materias/Logica/10 - calculo mental.md`.
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] refletindo o aproveitamento e volumes independentes de Raciocínio Lógico (agora com total de 419 questões e **87,4%** de aproveitamento) e de Cálculo Mental (totalizando 92 questões e **79,3%** de aproveitamento).
- **Log de Avanços de Lógica**: Expurgados os dados de volume e diagnóstico de Cálculo Mental do arquivo [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]], recalculando o histórico de 31/05/2026 para 40 questões e removendo o registro do dia 01/06/2026 (pois foi composto unicamente de cálculo mental).

## [2026-06-01] materias | Ingestao de Calculo Mental do Inbox
- **Ingestão de Desempenho**: Ingeridos os exercícios resolvidos de Cálculo Mental dos dias 31/05/2026 (43 questões, 36 acertos) e 01/06/2026 (34 questões, 25 acertos). Atualizado o volume diário de exercícios e incluído o diagnóstico cognitivo detalhado em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Teoria e Conceitos**: Atualizada a nota [[3 - Materias/Logica/10 - calculo mental|Cálculo mental]] com novas heurísticas (Tabuada do 9, Tabuada do 8 e Método de Checkpoints) e o registro detalhado de todos os treinos de Cálculo Mental realizados (Treinos 4 a 17, além de propor o Treino 18).
- **Avanços Globais**: Atualizado o painel estratégico [[00 Avancos globais|Avanços globais]] para Raciocínio Lógico (agora com total de 472 questões e **77,1%** de aproveitamento) e para Cálculo Mental (alcançando o patamar de **Amostragem sólida** com 92 questões e **79,3%** de aproveitamento).
- **Housekeeping**: Removidos os arquivos temporários do inbox (`inbox/31-05-2026.md` e `inbox/01-06-2026.md`).

## [2026-05-31] materias | Ingestao de Direito Constitucional (Principios e Art. 5º)
- **Ingestão de Desempenho**: Processados os resultados dos blocos iniciais de Direito Constitucional (20 questões resolvidas hoje, com 20/20 acertos no total). Registrados em [[3 - Materias/Direito Constitucional/Avancos|Avanços e desempenho (Direito constitucional)]] com o diagnóstico conceitual.
- **Novas Notas**: Criadas as notas [[3 - Materias/Direito Constitucional/01 - principios fundamentais|01 • Princípios fundamentais]] e [[3 - Materias/Direito Constitucional/02 - direitos e garantias fundamentais|02 • Direitos e garantias fundamentais]], estruturando o vocabulário, etimologias e mnemônicos (como a associação do caso real do IFMG no Mandado de Segurança). Atualizado o hub [[3 - Materias/Direito Constitucional/direito-constitucional|direito-constitucional.md]].
- **Avanços Globais**: Atualizado o painel [[00 Avancos globais|Avanços globais]] refletindo o aproveitamento inicial de *100%* em 20 questões (sinalizado com amostragem insuficiente até atingir $\ge$ 50 questões).

## [2026-05-31] planejamento | Implementacao de Metricas Globais Deslizantes (30 Dias)
- **Painel Estratégico**: Reestruturado o arquivo [[00 Avancos globais|Avanços globais]] para adotar a metodologia de **janela móvel de 30 dias** e filtros de significância estatística (exibição de *Amostragem sólida* para $\ge$ 50 Qs e *Amostragem insuficiente* com percentual em itálico para volumes inferiores).
- **Governança**: Formalizadas as regras de janela deslizante e verificação de amostragem na governança geral do vault no [[me|me.md]].

## [2026-05-31] materias | Ingestao de Logica, Combinatoria e Calculo Mental
- **Ingestão de Desempenho**: Ingeridos os resultados de todos os blocos de Raciocínio Lógico (55 questões resolvidas hoje no total). Registrados os aproveitamentos (12/15 em Ordem/Permutação, 9/10 no Teste Misto de Fixação sob fadiga e 12/15 nos treinos de Cálculo Mental), catalogados em [[3 - Materias/Logica/Avancos|Avanços e desempenho (Lógica)]].
- **Teoria e Conceitos**: Expandida a nota [[3 - Materias/Logica/09 - analise combinatoria|Análise combinatória]] com a heurística "A ordem importa?" e a definição do acrônimo PFC. Criada e expandida a nota dedicada [[3 - Materias/Logica/10 - calculo mental|Cálculo mental]] contendo as técnicas, o método incremental, a regra de evitar a dupla aproximação e os novos treinos propostos.
- **Avanços Globais & Governança**: Atualizado o painel global [[00 Avancos globais|Avanços globais]] para 395 questões de Lógica (aproveitamento médio recalculado para **76,7%**) e 15 questões de Cálculo Mental (aproveitamento recalculado para **80%**), incorporada a seção de **Análise de resistência cognitiva e fadiga** e formalizadas no [[me|me.md]] as regras de atualização de avanços globais e de **explicação de acrônimos**.

## [2026-05-31] planejamento | Criacao de Painel de Avancos Globais
- **Métricas e Consistência**: Criado o painel [[00 Avancos globais|Avanços globais]] para monitorar a taxa de acerto consolidada por disciplina, metas de curto/médio/longo prazo e variabilidade/estabilidade de simulados com base nas diretrizes de competitividade dos aprovados.
- **Indexação**: Integrado o novo painel no mestre [[index.md]].

## [2026-05-31] materias | Inclusao de Novas Materias no Vault
- **Inclusão de Matérias**: Criados os hubs e pastas para as matérias [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]], [[3 - Materias/Direito Administrativo/direito-administrativo|Direito administrativo]], [[3 - Materias/Administracao Publica/administracao-publica|Administração pública]], [[3 - Materias/Administracao Geral/administracao-geral|Administração geral]] e [[3 - Materias/Atualidades/atualidades|Atualidades]].
- **Arquivos de Progresso**: Adicionados arquivos de acompanhamento de `Avancos.md` específicos em cada nova pasta de matéria para estruturação de simulados futuros.
- **Indexação**: Atualizado o índice mestre [[index.md]] com os links e hierarquia das novas matérias organizadas.

## [2026-05-31] planejamento | Ingestao de Relatorio de Concursos de Comunicacao e Atualizacao de Previstos
- **Ingestão de Fonte Bruta**: Copiado e estruturado o arquivo [[Relatorio Concursos Comunicacao 2026-05-29|Relatorio Concursos Comunicacao 2026-05-29.md]] vindo da pasta de Downloads, adicionando metadados YAML em conformidade com o [[me|me.md]].
- **Atualização de Planejamento**: Ingeridos os novos concursos previstos no arquivo [[concursos previstos|concursos previstos.md]] (TCU, Senado, BACEN, Agências Reguladoras, TRT 3, TRT 4 e outros TRTs) e atualizadas as informações da Câmara dos Deputados com foco na vaga específica de Comunicação Social. Adicionado frontmatter YAML ausente.
- **Indexação**: Catalogado o novo relatório no master index [[index.md]].

## [2026-05-30] materias | Ingestao de Portugues - Interpretacao, Sintaxe, Pontuacao e Regencia
- **Novas Notas e Teoria**: Criadas as notas de conceito [[3 - Materias/Portugues/01 - interpretacao de texto|01 - interpretacao de texto.md]] (teoria de interpretação), [[3 - Materias/Portugues/02 - sujeito|02 - sujeito.md]] (sintaxe de sujeito e concordância de casos especiais como expressões partitivas, pronomes interrogativos e nomes geográficos), [[3 - Materias/Portugues/03 - pontuacao e virgula|03 - pontuacao e virgula.md]] (regras de vírgula, restritiva vs. explicativa e conjunções adversativas), e [[3 - Materias/Portugues/04 - regencia|04 - regencia.md]] (regência verbal de alta incidência e bitransitivos).
- **Diagnóstico e Volume (Inbox)**: Registrado o aproveitamento total de **85 questões** de Português resolvidas hoje em [[3 - Materias/Portugues/Avancos|Avanços e desempenho (Português)]], catalogando erros conceituais e estruturando o estudo de resistência cognitiva e fadiga.
- **Indexação**: Atualizados o hub [[3 - Materias/Portugues/portugues|portugues.md]] e o master index [[index.md]] para catalogar todas as novas páginas.
- **Housekeeping**: Removido o arquivo de inbox temporário `inbox/2026.md` após ingestão de ambas as fases.


## [2026-05-30] materias | Ingestao de Lógica de Possibilidade vs Necessidade
- **Nova Nota e Teoria**: Criada a nota de conceito [[3 - Materias/Logica/08 - possibilidade e necessidade|08 - possibilidade e necessidade.md]] contendo a teoria de três estados (necessário, possível, impossível), a pergunta secreta e heurísticas existenciais (personificação e acoplamento). Expandida para incluir a seção *"A sutileza de 'Alguns A não são B'"* com base no estudo de caso destacado do inbox.
- **SSoT (me.md)**: Atualizado o documento de governança [[me|me.md]] para incluir o **Perfil de Raciocínio Lógico (IA)**. Ingerido como destaque o estudo de caso prático de negação interna de existenciais e adicionada a regra prática/política de **Fadiga de Reconhecimento de Padrão Visual** para forçar transição temática.
- **Indexação**: Atualizado o hub [[3 - Materias/Logica/00 - logica|00 - logica.md]] para indexar a nova nota de Lógica.
- **Diagnóstico e Volume**: Adicionados os logs de desempenho do Treino de Possibilidade vs Necessidade (1-5, 6-15, 11-20), do Simulado Estilo FGV (21-30), do Simulado FGV de Verdade (1-10) e do Treino de Silogismos Avançados (11-20 e 21-30, com 19/20 acertos no total), totalizando **65 questões resolvidas** hoje em [[3 - Materias/Logica/Avancos|Avanços e desempenho]].
- **Housekeeping**: Removidas as notas temporárias de inbox `inbox/2026-05-30.md` e `inbox/30-05-2026.md` após ingestão completa no vault.

## [2026-05-29] materias | Ingestao de Bloco de Relações Existenciais e Reorganização do Hub
- **Reorganização de Índice**: Reestruturado o arquivo [[3 - Materias/Logica/00 - logica|00 - logica.md]] para indexar explicitamente a localização das **Leis de De Morgan** (em [[3 - Materias/Logica/04 - equivalencias|04 - equivalencias.md]]) e das regras de inferência **Modus Ponens** e **Modus Tollens** (em [[3 - Materias/Logica/06 - argumentacao logica|06 - argumentacao logica.md]]), além de suas falácias correlatas.
- **Teoria de Conjuntos e Diagramas**: Inserida a definição do **Diagrama de Venn** (inclusão, interseção e exclusão) e incorporadas as heurísticas extraídas dos erros do simulado no arquivo [[3 - Materias/Logica/07 - diagramas logicos e conjuntos|07 - diagramas logicos e conjuntos.md]], especificando a inversão de inclusão, a regra "Alguns não" vs "Nenhum" e o perigo de conectar existenciais independentes.
- **Diagnóstico e Volume (Inbox)**: Processada a nota de desempenho do Bloco de Relações Existenciais (10 Qs - 7/10 acertos) e atualizada a tabela de volume de hoje para **150 questões** em [[3 - Materias/Logica/Avancos|Avanços e desempenho]].
- **Housekeeping**: Removida a nota temporária de inbox `inbox/2026.md` após ingestão dos dados de desempenho e teoria.

## [2026-05-29] materias | Ingestao de Consolidação de Quantificadores e Simulado de Risco
- **Diagnóstico e Volume**: Processados os blocos adicionais de exercícios de Lógica de hoje (total de 35 questões extras, com destaque para a consolidação de Negação de Quantificadores com 5/5 e o Simulado Focado em Pontos de Risco com 19/20) e atualizada a tabela de volume acumulado de hoje para **140 questões** (incluindo o simulado geral de 100) em [[3 - Materias/Logica/Avancos|Avanços e desempenho]].
- **Refinamento de Teoria**: Inserida a **Heurística de Unificação (O Contraexemplo Único)** e o **Teste da Coexistência** para negações em [[3 - Materias/Logica/04 - equivalencias|04 - equivalencias.md]].
- **Housekeeping**: Removido o arquivo temporário `inbox/2026.md`.

## [2026-05-29] materias | Ingestao de Simulado Avançado e Teoria de Quantificadores
- **Diagnóstico e Volume**: Ingerido o Simulado Avançado de 5 questões (4/5 acertos) e atualizada a tabela de volume diário de exercícios em [[3 - Materias/Logica/Avancos|Avanços e desempenho]].
- **Nova Teoria**: Adicionado o conteúdo completo de **Negação de quantificadores** (universal para existencial e vice-versa) em [[3 - Materias/Logica/03 - quantificadores|03 - quantificadores.md]].
- **Housekeeping**: Deletado o arquivo temporário `inbox/2026.md`.

## [2026-05-29] materias | Ingestao de Simulado de 100 Questões de Lógica
- **Diagnóstico Geral**: Ingerido o desempenho do Simulado de 100 Questões (95/100) e alocado corretamente sob a data de hoje (29/05/2026) no arquivo [[3 - Materias/Logica/Avancos|Avanços e desempenho]], mapeando erros de De Morgan, inversão de inclusão e Modus Tollens.
- **Refinamento de Teoria**: Adicionado aviso de divergência de bancas sobre classificação de pronomes ("ele/ela") sem referente explícito na nota [[3 - Materias/Logica/01 - proposicao|01 - proposicao.md]].
- **Diretriz de Governança**: Atualizado o [[me.md]] para tornar obrigatória a atualização da tabela de volume diário de exercícios em arquivos de progresso a cada nova ingestão.
- **Housekeeping**: Removido o arquivo de relatório temporário `inbox/28-05-2026.md`.

## [2026-05-29] planejamento | Remoção de Concursos não Registrados
- **Remoção de Editais**: Excluídas as notas de editais para os quais não houve inscrição (`2 - Editais/sefaz ce.md`, `2 - Editais/conter.md` e `2 - Editais/nav brasil.md`).
- **Planejamento e Indexação**: Limpo o painel de [[concursos abertos|Concursos abertos]] e atualizado o [[index.md]] para remover as referências aos editais excluídos.

## [2026-05-28] materias | Ingestao de Simulados de Diagramas Logicos
- **Atualização de Conteúdo**:
  - Atualizada a nota [[3 - Materias/Logica/07 - diagramas logicos e conjuntos|07 • Diagramas lógicos e conjuntos]] com novas diretrizes teóricas sobre restrições formais, inversão de inclusão, regra da existência parcial com exclusão ("Algum + Nenhum" gerando "Alguns não") e a diferença semântica e de interseção de "Alguns não" vs "Nenhum".
- **Histórico e Desempenho**:
  - Ingeridos novos simulados de Diagramas Lógicos no arquivo [[3 - Materias/Logica/Avancos|Avanços e desempenho]] (blocos 11-20, 21-30 e 31-40) com seus diagnósticos e atualizado o volume diário de exercícios de Raciocínio Lógico para o total de 100 questões resolvidas hoje.
- **Housekeeping**:
  - Excluído o arquivo temporário de inbox `inbox/28-05.md`.

## [2026-05-28] materias | Ingestao de Diagramas Logicos e Conjuntos
- **Nova Nota Criada**:
  - Criada a nota [[3 - Materias/Logica/07 - diagramas logicos e conjuntos|07 • Diagramas lógicos e conjuntos]] com o núcleo do conceito de relações de inclusão, interseção, exclusão e suas pegadinhas comuns em provas de concurso.
- **Histórico e Desempenho**:
  - Atualizado o arquivo [[3 - Materias/Logica/Avancos|Avanços e desempenho]] com os novos diagnósticos dos simulados de Diagramas Lógicos e Argumentação Lógica (Modus Tollens), e adicionada a seção de rastreamento de volume diário de exercícios.
- **Indexação e Housekeeping**:
  - Atualizado o index geral [[index.md]] e a nota hub de lógica [[3 - Materias/Logica/00 - logica|00 • Raciocínio lógico]] com os novos links estruturados.
  - Excluído o arquivo temporário de inbox `inbox/28-05-2026.md`.

## [2026-05-28] matérias | Ingestão de Tabela Verdade e Argumentação Lógica
- **Novas Notas Criadas**:
  - Criada a nota [[3 - Materias/Logica/05 - tabela verdade|05 • Tabela verdade]] com a estruturação de linhas, conectivos lógicos e conceitos de tautologia, contradição e contingência.
  - Criada a nota [[3 - Materias/Logica/06 - argumentacao logica|06 • Argumentação lógica]] abordando validade lógica, Modus Ponens, Modus Tollens e as falácias de Afirmação do Consequente e Negação do Antecedente.
- **Histórico, Planejamento e Governança**:
  - Criado o arquivo setorizado [[3 - Materias/Logica/Avancos|Avanços e desempenho]] sob a pasta da matéria, consolidando o histórico de desempenho e simulados.
  - Atualizado o [[me.md]] para documentar a diretriz mandatória de atualizar os avanços de forma setorizada dentro da pasta de cada matéria para facilitar a revisão futura de dificuldades por meio de exercícios.
- **Deduplicação e Housekeeping**:
  - Limpo o arquivo [[3 - Materias/Logica/00 - logica|00 • Raciocínio lógico]] após a transferência da seção de desempenho, adicionando links para as novas notas de Lógica e para a nota de Avanços da matéria.
  - Excluído o arquivo temporário de ingestão `inbox/para ingestao 28-05.md`.
- **Indexação**:
  - Atualizado o [[index.md]] com os novos links estruturados.

## [2026-05-28] estrutura | Remoção de Acentos dos Arquivos e Links
- **Nomenclatura e Conformidade**: Renomeados todos os arquivos e pastas com acentos e caracteres especiais para atender à regra de governança do vault ("Sem acentos no nome do arquivo"). A pasta `3 - Matérias` foi renomeada para `3 - Materias` e subpastas e notas correspondentes foram higienizadas (incluindo `horários.md` para `horarios.md` e remoção de bullets `•` dos nomes físicos das notas).
- **Integridade de Referências**: Atualizados todos os links internos (`[[wikilinks]]`) em todo o vault para apontarem para as novas localizações sem quebrar a navegação no Obsidian.

## [2026-05-27] matérias | Ingestão de Equivalências Lógicas
- **Atualização de Conteúdo**: Expandida a nota [[3 - Materias/Logica/04 - equivalencias|04 • equivalências.md]] com definições de equivalência lógica, aplicação em provas, dupla negação, Leis de De Morgan e notas sobre raciocínio estrutural.
- **Ajuste de Erro e Modelo de Raciocínio**: Criado e refinado o comparativo estrutural completo de Implicação ($p \to q$) vs Conjunção ($p \land q$), adicionando também a Disjunção ($p \lor q$), a regra proibida ($p \land \neg q$), e o guia rápido de fixação operacional.
- **Refinamento Conceitual**: Ajustados os exemplos de tautologia em linguagem natural, distinguindo tautologias estritas (formalmente fechadas) de aproximações didáticas da banca. Ajustado também o exemplo de negação da bicondicional para explicitar o comportamento lógico da disjunção exclusiva (XOR/exclusividade de eventos).
- **Diagnóstico de Simulado**: Inserido o log de desempenho e plano de ação do Teste 6 (Equivalências e Negações) no hub [[3 - Materias/Logica/00 - logica|00 • lógica.md]].

## [2026-05-26] matérias | Refatoração de Lógica: Nota Dedicada para Equivalências e Negações
- **Nova Nota Criada**: Criada a nota [[3 - Materias/Logica/04 - equivalencias|04 • equivalências.md]] contendo equivalências da condicional (contrapositiva e Neymar), negações de compostas (MAné, bicondicional) e a regra de ouro da negação sob tautologias e contradições.
- **Deduplicação e Limpeza**: Removidas as subseções redundantes de tautologias e contradições das notas [[3 - Materias/Logica/01 - proposicao|01 • proposição.md]] e [[3 - Materias/Logica/03 - quantificadores|03 • quantificadores.md]], substituindo-as por links diretos.
- **Indexação**: Atualizados o [[index.md]] e o hub [[3 - Materias/Logica/00 - logica|00 • lógica.md]] com os novos links estruturados.

## [2026-05-26] matérias | Ingestão de Notas de Tautologia + Negação em Lógica
- **Diagnóstico consolidado**: Ingerido o diagnóstico final das 100 questões em [[3 - Materias/Logica/01 - proposicao|01 • proposição.md]] e [[3 - Materias/Logica/03 - quantificadores|03 • quantificadores.md]].
- **Conteúdo expandido (Tautologias e Contradições)**: Adicionada a seção "Tautologias e contradições em linguagem natural", detalhando o impacto na negação e a "regra de ouro da negação" (verificação prévia de tautologia antes de aplicar a negação) em [[3 - Materias/Logica/01 - proposicao|01 • proposição.md]].
- **Conteúdo expandido (Quantificadores e Negação)**: Inserida a seção "Negação de Tautologias e Contradições Quantificadas", com análise do "Existencial com Tautologia Interna", uma tabela de operações de negação direta, e um "Checklist rápido para Provas" em [[3 - Materias/Logica/03 - quantificadores|03 • quantificadores.md]].
- **Metadados**: Atualizados YAML frontmatters das notas modificadas.

## [2026-05-26] matérias | Atualização de Lógica (Diagnósticos e Expansões)
- **Diagnósticos adicionados**: Registrados resultados e diagnósticos dos simulados 1 a 5 em [[3 - Materias/Logica/00 - logica|00 • lógica.md]] com linkagem direta para as novas seções de escopo, contradição, precedência, disjunção existencial e linguagem natural.
- **Conteúdo expandido (Proposição)**: Adicionados o "Fluxo correto de resolução", a regra "Contradição não anula proposição", e novas seções de linguagem natural ("Proposições em linguagem natural", "Regras condicionais são proposições", "Proposição não depende de plausibilidade" e a "Heurística para linguagem natural") na nota [[3 - Materias/Logica/01 - proposicao|01 • proposição.md]].
- **Conteúdo expandido (Conectivos)**: Inseridos "Prioridade dos conectivos (ordem de avaliação)" (comportamento de "e" com precedência sobre "ou") e a diferença "Leitura estrutural vs. leitura linear" na nota [[3 - Materias/Logica/02 - conectivos|02 • conectivos.md]].
- **Conteúdo expandido (Quantificadores)**: Expandido o "Escopo do quantificador" (comportamento de "ou" vs. "e"), adicionada a "Independência de variáveis quantificadas" (múltiplos escopos independentes de $x$), atualizado o "Teste por exemplo e contraexemplo", inserida a "Disjunção com quantificador existencial" e inserido um guia básico para o próximo passo (**Negação de quantificadores**) em [[3 - Materias/Logica/03 - quantificadores|03 • quantificadores.md]].
- **Metadados**: Inseridos e atualizados YAML frontmatters em todas as quatro notas de Lógica com a data de atualização atual (2026-05-26).

## [2026-05-25] matérias | Reorganização em pastas
- **Pastas criadas**: Criadas subpastas individuais para cada matéria em `3 - Matérias/` (Português, Informática, Lógica, Comunicação, Redação).
- **Notas movidas**: Movidos os arquivos originais de matérias para dentro de suas respectivas subpastas.
- **Links atualizados**: Atualizados os links no [[index.md]] para apontarem para a nova estrutura.
- **Conteúdo aprofundado**: Expandida a nota [[3 - Materias/Logica/02 - conectivos|02 • conectivos.md]] de Raciocínio Lógico com disjunção exclusiva, bicondicional, equivalências, negações, relações de condição suficiente/necessária e exemplos práticos de todos os operadores, preservando as marcações de destaque.
- **Conteúdo aprofundado**: Expandida a nota [[3 - Materias/Logica/01 - proposicao|01 • proposição.md]] com princípios lógicos fundamentais, classificação detalhada das sentenças que não são proposições, regras de quantificadores e criação da seção "versão mastigada", mantendo todos os destaques do usuário.

## [2026-05-24] estrutura | Inicialização do Vault de Concursos
- **Estrutura copiada**: Copiadas as configurações `.obsidian` e o diretório de agentes `.agent` do vault principal `all`.
- **Governança**: Copiada a nota de identidade do proprietário [[me.md]] para o root e inicializados os arquivos de controle [[index.md]] e [[log.md]].

## [2026-08-10] ingestão | Ingestão de Inbox (Algoritmos, Omnichannel, Big Data, LGPD e Incidentes ANPD)
- **Teoria Enriquecida**: Atualizadas as notas [[3 - Materias/Comunicacao/06 - comunicacao digital|06 • Comunicação digital]] (distribuição algorítmica, alcance orgânico vs pago, não neutralidade, engajamento contextual, Filter bubble vs Echo chamber, Multicanalidade vs Cross-Channel vs Omnichannel, Big Data, personalização, chatbots com escalonamento humano, VR/AR/MR, Web3 e Blockchain), [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia|03 • LAI, LGPD e transparência]] (dados pessoais/sensíveis, bases legais públicas além do consentimento, minimização, imagens identificáveis, anonimização vs pseudonimização e protocolo ANPD da Resolução CD/ANPD nº 15/2024: 3 dias úteis pelo Controlador, notificação em linguagem simples e registro por 5 anos) e [[3 - Materias/Comunicacao/17 - pesquisa em comunicacao|17 • Pesquisa em comunicação]] (LGPD e ética em pesquisas de comunicação e UX, pseudonimização com códigos P01/P02, relatórios com dados agregados/anonimizados, riscos de reidentificação por recortes pequenos, paráfrase de citações e descarte).
- **Avanços e Desempenho**: Atualizados [[3 - Materias/Comunicacao/Avancos|Avanços de Comunicação]], [[00 - Desempenho/01 Log de saturacao diaria|Log de saturação diária]] e [[00 - Desempenho/00 Avancos globais|Avanços globais]], registrando 30/30 acertos neste lote (51/51 no total do dia - 100%), aproveitamento móvel de 30 dias de 96,5% (254 Qs) em Comunicação Social.
- **Projeto Dataprev**: Atualizados o checklist em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar]] (marcando 1.8, 4.2.1, 4.9.2, 9.1, 9.2, 9.3, 10.5.1, 10.5.2, 10.5.3), o [[00 inbox/Relatorio de topicos faltantes|Relatório de Tópicos Faltantes]] e o [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard Dataprev]], elevando o Módulo II para 96,8% (91/94 itens) e o Total do Edital para 83,5% (106/127 itens).
- **Housekeeping**: Limpo o conteúdo de [[00 inbox/00 ingestão]] preservando seu arquivo e título.


