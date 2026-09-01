---
title: "me"
type: "perfil-pessoal"
status: "ativo"
leitura: "mandatória — ler antes de qualquer operação no vault"
created: 2026-04-25
updated: 2026-08-31
---

# me

> [!IMPORTANT]
> **LEITURA MANDATÓRIA PARA AGENTES:** Este arquivo é a âncora de identidade do vault. ABSOLUTAMENTE TODO agente ou assistente de IA deve ler este documento na íntegra antes de qualquer operação. Ele define quem sou, como penso, as regras críticas de escrita e os protocolos de atualização de log/index que regem este espaço.

---

## Quem sou

**Leo Ruas** — Designer gráfico, designer estratégico e pesquisador de UX, brasileiro, baseado em Belo Horizonte (BH). Atuo na interseção entre pesquisa qualitativa, inteligência artificial e sistemas de conhecimento. Trabalho como designer gráfico/servidor público no IFMG (regime de 4h) e estou focado em preparação para novos concursos públicos e no posicionamento para oportunidades de mercado (empresas de produto).

**Perfil estendido:** [[Perfil e Identidade Profissional|Identidade Profissional]]

### Fatos Relevantes
- Língua nativa: **Português (pt-BR)**. Escrevo e penso em português — toda comunicação comigo deve ser em pt-BR por padrão, salvo quando eu explicitamente mudar.
- Background híbrido: design, filosofia e dados. Não sou engenheiro de software, mas me viro bem em código quando necessário.
- Trabalho melhor com **contexto denso** — prefiro um agente que leu tudo do que um que pergunta o óbvio.
- Sou designer gráfico no IFMG e tenho interesse ativo em como instituições públicas comunicam informação.
- Foco atual: estudo ativo para concursos públicos e preparação para processos seletivos de empresas de produto.

---

## Como trabalho com IA

### Princípios

1. **Co-criação, não automação cega.** Uso IA como parceiro de pensamento, não como máquina de texto. Espero que o agente questione quando algo não faz sentido, identifique lacunas e sinalize quando está inferindo.
2. **Contexto antes de ação.** Antes de produzir qualquer artefato, o agente deve ler os arquivos relevantes do vault. Nunca preencha lacunas com suposições — pergunte.
3. **Qualidade sobre quantidade.** Prefiro uma resposta densa e precisa a uma longa e genérica. Corte o fluff.
4. **Transparência metodológica.** Se o agente estiver interpretando, inferindo ou completando algo sem fonte explícita, deve declarar isso.
5. **Sem elogios desnecessários.** Não preciso de "ótima pergunta!" ou afirmações motivacionais. Vá direto ao ponto.

### O que espero do agente neste vault
- Ler este arquivo (`me.md`) e o `index.md` antes de qualquer operação.
- Respeitar a arquitetura do vault (fontes brutas são imutáveis; sínteses vão para `wiki/`).
- Usar wikilinks `[[Link]]` para referências internas — nunca caminhos absolutos de sistema.
- **CRÍTICO:** Atualizar o `index.md` e o `log.md` (registro de alterações) a cada nova página criada ou modificação significativa na wiki. Nunca pular esta etapa.
- Sinalizar quando identificar contradições, lacunas ou pontos que exigem minha decisão.

### Estilo de interação preferido
- **Direto e denso.** Resposta em tópicos ou prosa curta — sem padding.
- **Português pt-BR** sempre, mesmo que eu escreva algo em inglês no prompt (a não ser que eu peça explicitamente em inglês).
- **Perguntas pontuais.** Se precisar esclarecer algo, faça uma pergunta de cada vez.
- **Links com referência de linha:** Ao se referenciar a trechos ou arquivos específicos, sempre fornecer o link de sistema com a referência exata da linha (ex: `[nome.md](file:///caminho/para/nome.md#L10-L20)`).
- **Sem assumir.** Se não tiver certeza de algo sobre mim, meus projetos ou minha intenção — pergunte antes de executar.

---

## Governança e Operação do Vault

### Arquitetura do Sistema
1.  **Raw Sources (Camada 1)**: Todo o vault (academia, career, daily, talvegue/itens). Tratar como **Fontes Brutas (Imutáveis)**. Nunca modificar sem pedido explícito.
2.  **The Wiki (Camada 2)**: Diretório `wiki/`. Local de toda síntese transversal e conhecimento consolidado.
3.  **Governance (Camada 3)**: Este arquivo (`me.md`).

### Regras de Operação Críticas
- **Acurácia Estrita**: Verificar toda informação nas fontes brutas. Proibido alucinar ou extrapolar. Em caso de lacuna, **pare e pergunte**.
- **Citações Literais**: Transcrever de forma 100% fiel. Sem refraseamentos. Somente textos literais podem estar entre aspas.
- **Atribuição**: Informações sintéticas (resumos) nunca devem ser atribuídas como fala direta do autor.
- **Neutralidade de Conceitos**: Conceitos na `wiki/6 - Conceitos/` devem ser genéricos e reutilizáveis, sem amarras a projetos específicos.
- **Deduplicação**: Sempre ler o `index.md` para evitar criar páginas sobre temas já existentes.

### Workflows Mandatórios
- **Ingestão**: Ler fontes → Sintetizar na `wiki/` (ou na respectiva pasta da matéria) → Linkar via `[[Wikilinks]]` → Atualizar `index.md` e `log.md`. **Aproveitamento Máximo**: Todo conteúdo processado a partir do inbox deve ser aproveitado ao máximo para criar ou enriquecer as notas de matérias/teoria correspondentes no vault, indo além do mero registro de métricas e diagnósticos nos logs de avanços. **Enriquecimento Imediato de Teoria**: Sempre que uma questão ou simulação do inbox trouxer uma nuance, pegadinha clássica ou critério de classificação específico da banca, o agente deve obrigatoriamente atualizar a nota teórica correspondente (Camada 2) com essa informação (ex: enquadramento de vestibulares, hierarquia de releases, tipos de clipping, etc.), transformando os aprendizados das questões em teoria integrada. **Sincronia do Edital**: Ao ingerir e processar novos tópicos de estudo do inbox, o agente deve verificar de imediato quais itens do edital foram cobertos, atualizando o arquivo [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]] e recalculando e atualizando a cobertura no [[4 - Projetos/dataprev-2026/00 Dashboard|Dashboard]].
- **Fase de Simulados e Catalogação de Erros (Mandatório)**: Todo simulado ou bateria mista de questões resolvido a partir do inbox deve ser catalogado na pasta dedicada `00 - Desempenho/Simulados/`, atualizando o hub central [[00 - Desempenho/Simulados/00 - Catalogo de simulados|00 - Catalogo de simulados.md]] e gerando/atualizando o arquivo de diagnóstico correspondente (`Simulado-XX.md`). Adicionalmente, o agente **deve atualizar obrigatoriamente os arquivos de projeto correspondentes**, incluindo [[4 - Projetos/dataprev-2026/Questoes e Simulados|Questões e simulados (Dataprev)]], [[4 - Projetos/dataprev-2026/Log de erros|Log de erros (FGV)]] e o [[00 Dashboard|Dashboard do concurso]], garantindo sincronia total de métricas. A cada erro mapeado, o agente **DEVE OBRIGATORIAMENTE**:
  1. Identificar a **disciplina e o recorte exato do tema**.
  2. Declarar a **causa raiz clínica do erro** (pegadinha de banca, armadilha formal, lacuna teórica ou desatenção).
  3. Explicitar **o que estudar exatamente** para sanar o desvio.
  4. Apontar o **link direto de estudo no vault com âncora de cabeçalho específica** (`[[Pasta/Nota#Seção ou Cabeçalho Exato|Texto]]`), permitindo que o usuário clique e caia diretamente no parágrafo/seção teórica pertinente.
  5. **Criação Imediata de Teoria Faltante**: Se o assunto ou matéria cobrada na questão não existir no vault (ex: legislações específicas, teorias organizacionais, matérias básicas novas), o agente **deve criar a nota teórica correspondente de imediato** na respectiva pasta de `3 - Materias/`, indexá-la no `index.md` e utilizá-la como destino da referência cruzada.
- **Acompanhamento de Desempenho (Avanços)**: Todo diagnóstico de simulados, erros recorrentes e planos de ação deve ser registrado em arquivos separados denominados `Avancos.md` (ou similares, sem acento no nome físico). O ideal é que esses arquivos de progresso sejam **setorizados dentro das respectivas pastas de cada matéria** (ex: `3 - Materias/Logica/Avancos.md`), permitindo revisar facilmente as dificuldades específicas da matéria por meio de exercícios estruturados posteriormente. **A cada nova ingestão de exercícios do inbox, o agente deve obrigatoriamente, sem exceção e de imediato, recalcular e atualizar a tabela de volume diário de exercícios e a tabela de aproveitamento semanal local nesses arquivos de progresso locais, mantendo a tabela, o aproveitamento semanal e os blocos de diagnóstico sempre em ordem cronológica decrescente (datas/semanas mais recentes no topo). Adicionalmente, deve atualizar a tabela de Acompanhamento semanal de saturação e volume, a tabela de Controle de simulados consolidados e o painel de desempenho por disciplina em [[00 Avancos globais|Avanços globais]], além do [[01 Log de saturacao diaria|Log de saturação diária]], refletindo o rendimento atualizado com base em sete regras estritas: (1) a Janela Deslizante de 30 dias (aproveitamento e volume computam todas as resoluções de todas as matérias feitas nos últimos 30 dias, recalculando a média ponderada/aritmética com precisão), (2) a Sinalização de Amostragem (marcar como 'Amostragem sólida' se houver >= 50 questões nos últimos 30 dias, e 'Amostragem insuficiente' com percentual em itálico caso o volume seja inferior a 50 Qs), (3) o cálculo da Taxa de Aproveitamento Ponderada (TAP) no [[01 Log de saturacao diaria|Log de saturação diária]] aplicando os pesos de custo cognitivo (Cálculo Mental = 2.0; Raciocínio Lógico = 1.5; Português / Inglês = 1.2; Direito / Comunicação Social / Atualidades / Outros = 1.0), (4) a inclusão ou revisão obrigatória de uma seção de 'Análise de evolução recente' (logo abaixo da tabela de disciplinas em Avanços globais) com a síntese qualitativa e quantitativa do progresso recente do candidato, (5) a manutenção e atualização mandatória da tabela de 'Acompanhamento semanal de saturação e volume' (iniciando em segundas-feiras e terminando em domingos) no painel global consolidado, contendo a discriminação exata e detalhada de todas as questões resolvidas por disciplina no período correspondente, (6) o registro imediato na tabela de 'Controle de simulados consolidados (Consistência)' de todo simulado completo ou bateria mista executada, e (7) a garantia de coerência qualitativa, sendo terminantemente proibido caracterizar quedas ou oscilações evidentes de desempenho como "manutenção de consistência", devendo-se explicitar a fadiga cognitiva ou carga de exatas envolvida. O agente deve garantir precisão matemática absoluta nas somas e correlação exata entre os logs locais, a tabela semanal, o painel diário e o painel global.**
- **Relatórios**: Documentos com dados quantitativos devem declarar o período de coleta/extração no início.
- **Housekeeping**: Deletar scripts temporários imediatamente após o uso. Não deletar o arquivo de ingestão (`00 inbox/ingestão.md`), apenas limpar o seu conteúdo mantendo o arquivo com o seu título.
- **Atualização de Progresso do Edital (Dataprev)**: Sempre que houver qualquer atualização no checklist de conteúdos estudados em [[4 - Projetos/dataprev-2026/O que estudar|O que estudar (Checklist)]], o agente deve obrigatoriamente recalcular a quantidade de itens concluídos por matéria (considerando apenas os itens finais/folhas de cada subseção para evitar dupla contagem) e atualizar a tabela correspondente em [[00 Dashboard|Dataprev 2026 (Dashboard)]].

---

## Padrões de Escrita e Nomenclatura

### Língua e Tom
- Todo o vault é em **pt-BR** (exceto termos técnicos como *framework*, *JTBD*).
- **Capitalização estrita (Sentence case):** Em títulos, cabeçalhos, chamadas em negrito e itens de listas em português, **nunca usar Title Case** (capitalizar todas as palavras). Usar sempre *Sentence case* (apenas a primeira letra da frase/expressão em maiúscula), exceto para nomes próprios, siglas e leis específicas.
- **Premium e direto.** Sem enrolação. Tom clínico para relatórios técnicos.
- **Negrito** para termos-chave, não decoração.
- **Proibição de Emojis (Estrita):** É terminantemente proibido o uso de emojis (sejam decorativos em cabeçalhos/tópicos ou como ícones de status como , , , , etc.). O vault e a interface seguem um design system editorial e suíço sóbrio. Status de questões, tabelas e avisos devem ser expressos textualmente (ex: `Acerto`, `Erro`, `Atenção`, `Insuficiente`).
- **Explicação de acrônimos:** Sempre explicar ou definir por extenso qualquer sigla ou acrônimo na primeira vez em que for mencionado em um arquivo (ex: declarar *Princípio Fundamental da Contagem (PFC)* antes de usar apenas *PFC*).

### Estrutura de Arquivo Wiki
```markdown
---
title: "Título"
type: "hub | conceito | projeto | perfil | template | guia"
status: "ativo | rascunho | arquivado"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
# Título
[Abertura curta]
## Seções...
---
**Fontes Brutas:**
- [[link]]
```

### Controle de Histórico e Datas (Metadados)
Para manter o histórico e a rastreabilidade da evolução do vault, todos os arquivos criados ou modificados de forma significativa devem registrar datas de criação e modificação em seu frontmatter (YAML):
- **`created`**: Data de criação original do arquivo no formato `YYYY-MM-DD`.
- **`updated`**: Data da última atualização significativa no formato `YYYY-MM-DD`.

Exemplo de Frontmatter obrigatório:
```yaml
---
title: "Título"
type: "hub | conceito | projeto | perfil | template | guia"
status: "ativo | rascunho | arquivado"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

### Autonomia e Padrões Emergentes
- **Reconhecimento de Padrão**: Uma vez que um padrão de formatação ou estrutura for aprovado pelo usuário para um conjunto de arquivos (ex: uma pasta específica), o agente tem **autonomia** para aplicar esse mesmo padrão retroativamente em todos os arquivos similares daquela seção, visando consistência total sem necessidade de aprovação individual por arquivo.
- **Proatividade em Limpeza**: Se identificar arquivos que fogem do padrão estabelecido (links quebrados, falta de frontmatter, headers inconsistentes), o agente deve propor a correção em lote.

### Padrão para Notas de Ferramentas (`wiki/4 - Tecnologia/ferramentas/`)
Para garantir a densidade e utilidade das notas técnicas, seguir sempre esta estrutura:
1.  **# Título** (H1)
2.  **Link:** `[Texto](URL)` (Logo abaixo do título)
3.  **## Visão Geral** (O que é e qual o valor principal)
4.  **## Principais Funcionalidades** (Lista em bullet points das capacidades core)
5.  **## Links e Referências** (Documentação, GitHub, tutoriais e comandos de instalação)

### Nomenclatura de Arquivos
- **Wiki (Geral)**: `Título em Title Case.md`. Sem acentos no nome do arquivo.
- **Wiki (Conceitos - Cat. 6)**: `nome em caixa baixa.md` (Ex: `jtbd.md`).
- **Projetos**: `nome-do-projeto/` (kebab-case).
- **Proibido**: Nunca usar `_` (underscore). Preferir hífens ou espaços (na wiki).

### Redação de Projetos Acadêmicos
- Evitar formulações defensivas do tipo **"não é X, mas Y"** ou **"o objeto principal não é..."**. Elas chamam atenção para o enquadramento errado e enfraquecem a proposição. Preferir afirmações diretas: declarar o objeto, o recorte e a contribuição sem primeiro negar alternativas.

### Templates do Vault
Utilizar estes modelos como base para garantir consistência:
- [[wiki/templates/template-conceito|Template de Conceito]]
- [[wiki/templates/tecnologia|Template de Tecnologia]]
- [[wiki/templates/template-daily|Template Daily]]
- [[wiki/templates/Sessao de Estudo|Template de Sessão de Estudo]]

---

## Ingestão de Citações (`talvegue/itens/`)

### Frontmatter Obrigatório
```yaml
---
title: "Título Conceitual"
author: nome do autor (caixa baixa)
source: nome da obra
tags: ["tema-a", "tema-b"] # kebab-case, sem "quote" ou "kindle"
location: "p. 42" ou "loc. 1234" # Obrigatório para livros/Kindle
url: "https://..." # Obrigatório para links da internet
---
```

### Regras de Conteúdo
- **Livros e Kindle**: Manter obrigatoriamente a página ou localização original no campo `location`.
- **Links da Internet**: Trazer o **texto integral** da citação para o corpo da nota e manter o link original no campo `url`.

### Corpo da Citação
- Usar bloco `>`.
- Abaixo, incluir referência em itálico: `*Autor. Obra (Local). Edição.*`

---

## Subsistemas Específicos

### Talvegue
O Talvegue é uma vault autônoma, irmã de `all`.
- **Acervo vivo**: `../talvegue/`.
- **Compatibilidade em all**: `all/talvegue/` mantém apenas cópias de itens ainda citados pela wiki geral.
- **Imutável**: os itens atômicos do Talvegue vivo ficam em `../talvegue/itens/`.
- **Operacional**: index, log, inbox e bases do Talvegue devem ser mantidos em `../talvegue/`, não em `all/talvegue/`.
- **Workflow**: Ler `../talvegue/itens/` → Criar sínteses na wiki adequada → Registrar no index/log da vault correspondente.

---

## Perfil de Raciocínio Lógico (IA)
Mapeamento de proficiência lógica construído e refinado através de simulados resolvidos no vault:
- **Consolidado**:
  - Classificação de proposições e conectivos lógicos ($e$, $ou$, $se... então$, $se\ e\ somente\ se$).
  - Modus Ponens e Modus Tollens.
  - Equivalências e Negações ($\neg(p \to q) \equiv p \land \neg q$ — regra do caso proibido).
  - Leis de De Morgan.
  - Quantificadores lógicos (Universal e Existencial) e suas negações.
  - Diagramas lógicos e transitividade de inclusão ($A \subset B \subset C \implies A \subset C$).
  - Distinção entre Necessário (provado), Possível (consistente/talvez) e Impossível (contraditório).
- **Pontos de Atenção**:
  - **Negação Interna**: A frase *"Alguns A não são B"* indica unicamente que existe pelo menos um elemento de $A$ fora de $B$. Não implica nem pressupõe nenhuma relação ou cruzamento positivo com $B$ (ex: não supõe que alguns $A$ pertençam a $B$).
    - ==**Caso de Estudo (Inbox)**: Analisando as premissas "Todo A é B; Todo B é C; Nenhum C é D; Existem alguns A", a afirmação "Alguns A não são D" é **necessariamente verdadeira** (e não apenas "possível"), porque sabemos que existem alguns A, e nenhum A pode pertençar a D. Ela apenas afirma que existe A fora de D, sem supor que exista qualquer A dentro de D.==
  - **A palavra "alguns"**: Evitar completar o cenário mentalmente para tentar deduzir o estado do resto do grupo. Apenas o que é estritamente garantido pelas premissas é necessário.
  - **Fadiga de Reconhecimento de Padrão Visual**: Após resolver extensivamente exercícios de estrutura repetitiva (ex: +200 questões de diagramas/silogismos), o cérebro deixa de processar a estrutura lógica de forma ativa e passa a agir por reflexo visual, gerando erros bobos de desatenção. **Ação**: Transicionar imediatamente para uma matéria ou tipo de problema diferente (ex: Análise Combinatória / Contagem) para quebrar o padrão.

---

## Contexto Pessoal para IA
- **Áreas:** UX Research, Design Estratégico, AI Systems.
- **Nível:** Pleno / Sênior (experiência sênior com cargos formais pleno).
- **Ferramentas:** Obsidian, Claude, Cursor, Figma, Firebase, Git, MarkItDown.
- **Fuso:** America/Sao_Paulo (UTC-3).

---
*Última atualização: 2026-06-10*
