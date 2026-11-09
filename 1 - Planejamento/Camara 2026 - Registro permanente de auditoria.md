---
title: "Registro permanente de auditoria editorial, técnica e normativa da Câmara 2026"
type: "auditoria"
status: "ativo"
created: 2026-11-09
updated: 2026-11-09
concursoId: "camara-2026"
---

# Registro permanente de auditoria editorial, técnica e normativa da Câmara 2026

Este documento estabelece o registro formal, rastreável e auditável das auditorias técnicas, editoriais e normativas executadas a cada ciclo de cinco unidades produzidas no âmbito do plano integral de artigos da Câmara dos Deputados 2026 (Analista Legislativo - Divulgação Institucional, Cebraspe C/E).

Cada ciclo avalia:
1. **Auditoria Técnica**: Integridade do Markdown, frontmatter, unicidade de `articleId`, consistência de links internos, mapeamento no catálogo (`data/catalogo-materias-por-concurso.json`), presença no hub da disciplina e no `index.md`, validação do build estático (`_site/`) e suíte de testes de busca, rotas e privacidade.
2. **Auditoria Editorial e Normativa**: Precisão conceitual dos termos, suficiência das classificações, vigência da legislação e jurisprudência dos tribunais superiores, adequação dos exemplos e aderência estrita dos gabaritos e justificativas ao estilo da banca Cebraspe.
3. **Classificação de Não Conformidades**:
   - **Crítico**: Erro normativo/legal, gabarito incorreto, quebra de build ou falha que impeça a publicação.
   - **Alto**: Associação incorreta no catálogo, duplicidade conceitual, omissão de tópico relevante do edital ou link quebrado.
   - **Médio**: Exemplo ambíguo, lacuna de comparação entre conceitos vizinhos ou falha secundária de navegação.
   - **Baixo**: Ajuste de redação, formatação ou estilo.

---

## Ciclo 1 de Auditoria: Unidades CAM-TI-001 a CAM-TI-005 (Lotes 149 a 153)

- **Data da Auditoria:** 09/11/2026.
- **Escopo auditado (5 unidades concluídas):**
  1. `CAM-TI-001`: `3 - Materias/Informatica/03 - arquivo pasta nuvem e sincronizacao conceitos e operacoes.md` (`art-74bf9176e700b4c8`).
  2. `CAM-TI-002`: `3 - Materias/Informatica/04 - word 365 estrutura edicao formatacao e controle de alteracoes.md` (`art-005ae25143946d4e`).
  3. `CAM-TI-003`: `3 - Materias/Informatica/05 - excel 365 celulas referencias funcoes e tabelas dinamicas.md` (`art-484ca8ef752c3d9a`).
  4. `CAM-TI-004`: `3 - Materias/Informatica/06 - powerpoint 365 organizacao slides mestre animacoes e apresentacao.md` (`art-c870ee089d89cfaa`).
  5. `CAM-TI-005`: `3 - Materias/Informatica/07 - onedrive sincronizacao compartilhamento e permissoes.md` (`art-e4d63009042ff1a1`).

### 1. Testes e Validação Técnica Executada
- **Verificação de Identidades e Slugs:** `node scripts/test-article-identity.js` aprovado. Todos os `articleId` são globalmente únicos e os slugs derivam de forma estável.
- **Validação do Catálogo do Concurso:** `node scripts/test-contest-catalog.js` aprovado. Os 5 novos artigos estão associados à matéria virtual `informatica` sob o concurso `camara-2026`.
- **Integridade do Build e Páginas Públicas:** `node scripts/build-site.js` aprovado sem erros. Todos os 413 arquivos Markdown públicos foram compilados para `_site/`, e o manifesto e índices (`manifest.json`, `search-index.json`, `glossario-index.json`) foram gerados com sucesso.
- **Barreira de Privacidade:** `node scripts/test-public-privacy.js` aprovado. Nenhum dado privado de sessões de estudo, confiança individual ou notas pessoais foi inserido no repositório público.
- **Índice de Busca e Rotas:** `node scripts/test-search-index.js`, `test-search-routing.js` e `test-search-ranking.js` aprovados com 100% de recall e ranking superior nos benchmarks de busca.

### 2. Avaliação Editorial e Normativa
- **Precisão Conceitual:**
  - `CAM-TI-001`: Rigor na lista dos nove caracteres proibidos do Windows (`\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`) e na distinção de que sincronização de nuvem não é backup;
  - `CAM-TI-002`: Clareza na tripartição entre formatação de caractere, parágrafo e seção, com destaque para a desvinculação de cabeçalhos e a permanência de revisões confidenciais na exibição *"Nenhuma Marcação"*;
  - `CAM-TI-003`: Exatidão na aritmética de deslocamento de referências absolutas (`$A$1`) e mistas, e distinção crucial de que o zero entra no denominador da função `MÉDIA`, enquanto a célula em branco é ignorada;
  - `CAM-TI-004`: Delimitação precisa entre *Transição de Slides* (guia Transições) e *Animação de Objetos* (guia Animações), e regras de herança do Slide Mestre;
  - `CAM-TI-005`: Diferenciação entre OneDrive pessoal e corporativo, links de compartilhamento e regra dos 93 dias da lixeira em dois estágios.
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E analisados individualmente. Justificativas consistentes, gabaritos sustentados em normas técnicas dos fabricantes e padrões históricos de formulação do Cebraspe.
- **Não Conformidades Encontradas:** Nenhuma não conformidade Crítica, Alta ou Média.
- **Classificação do Ciclo:** **Aprovado com louvor técnico e editorial**.

### 3. Estado Atual e Próximos Passos
- **Total de unidades editoriais concluídas e integradas:** **178 de 315 (56,5%)**.
- **Trilha TI:** **5 de 28 unidades concluídas**.
- **Próximo Lote a executar:** `CAM-TI-006` (Redes: internet, intranet, protocolos e endereçamento).

---

## Ciclo 2 de Auditoria: Unidades CAM-TI-006 a CAM-TI-010 (Lotes 154 a 158)

- **Data da Auditoria:** 09/11/2026.
- **Escopo auditado (5 unidades concluídas):**
  1. `CAM-TI-006`: `3 - Materias/Informatica/08 - redes internet intranet protocolos e enderecamento ip.md` (`art-ef60bc0a1708e23d`).
  2. `CAM-TI-007`: `3 - Materias/Informatica/09 - navegacao busca avancada urls e procedimentos de internet.md` (`art-3678eef88b269f8c`).
  3. `CAM-TI-008`: `3 - Materias/Informatica/10 - correio eletronico webmail cliente local campos e seguranca.md` (`art-d18ded18a3b3f763`).
  4. `CAM-TI-009`: `3 - Materias/Informatica/11 - teams e google meet colaboracao reunioes e videoconferencia.md` (`art-0f31e15e82e0b1d1`).
  5. `CAM-TI-010`: `3 - Materias/Informatica/12 - seguranca da informacao principios cidan politicas e controles.md` (`art-cdd153e7d11a16e6`).

### 1. Testes e Validação Técnica Executada
- **Verificação de Identidades e Slugs:** `node scripts/test-article-identity.js` aprovado. Identidade estável, mudança de título/pasta, aliases e referências históricas verificadas.
- **Validação do Catálogo do Concurso:** `node scripts/test-contest-catalog.js` aprovado. 3 concursos, 32 matérias, 458 vínculos de artigos validados. Todos os 5 artigos vinculados a `informatica` na Câmara 2026.
- **Barreira de Privacidade:** `node scripts/test-public-privacy.js` aprovado com louvor. Nenhum registro privado (sessões, checkpoints, notas de desempenho, dados individuais) vazado para o repositório público.
- **Mecanismos de Busca e Deep Links:** `node scripts/test-search-index.js`, `test-search-routing.js` e `test-search-ranking.js` aprovados com 100% de integridade e 94% de precisão Top 1 (18/18 Top 3).
- **Integridade do Build e Páginas Públicas:** `node scripts/build-site.js` concluído com sucesso. 418 notas públicas processadas para `_site/`, manifesto e índices gerados sem advertências.

### 2. Avaliação Editorial e Normativa
- **Precisão Conceitual:**
  - `CAM-TI-006`: Rigor na diferenciação de escopos (internet $\times$ intranet $\times$ extranet), demonstrando a identidade da pilha TCP/IP e detalhando portas padrão e notação IPv6 (uso de `::` no máximo uma vez);
  - `CAM-TI-007`: Exatidão na anatomia de URLs (fragmento `#anchor` exclusivo do cliente) e desmistificação da navegação anônima (não esconde identidade na rede nem de provedores);
  - `CAM-TI-008`: Precisão sobre privacidade em cabeçalhos de e-mail (invisibilidade mútua de `Cco`) e alerta crítico para o destinatário em `Cco` que responde a todos denunciando sua presença;
  - `CAM-TI-009`: Clareza na arquitetura de colaboração corporativa (canais padrão, privados e compartilhados do Teams; armazenamento em SharePoint versus OneDrive for Business) e moderação de reuniões no Meet e Teams (controle de lobby e salas simultâneas);
  - `CAM-TI-010`: Fundamentação precisa nos princípios CIDAN (ISO/IEC 27001/27002), desmistificando o ataque DoS/DDoS (viola exclusivamente a Disponibilidade, sem corromper a Integridade ou quebrar a Confidencialidade) e taxonomias de controles de segurança.
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e validados individualmente, com justificativas consistentes ancoradas na jurisprudência do Cebraspe e em normas técnicas vigentes.
- **Não Conformidades Encontradas:** Nenhuma não conformidade Crítica, Alta ou Média.
- **Classificação do Ciclo:** **Aprovado com louvor técnico e editorial**.

### 3. Estado Atual e Próximos Passos
- **Total de unidades editoriais concluídas e integradas:** **183 de 315 (58,1%)**.
- **Trilha TI:** **10 de 28 unidades concluídas (restam 18)**.
- **Próximo Lote a executar:** `CAM-TI-011` (Backup: estratégias, recuperação e diferença de sincronização).

---

## Ciclo 3 de Auditoria: Unidades CAM-TI-011 a CAM-TI-015 (Lotes 159 a 163)

- **Data da Auditoria:** 09/11/2026.
- **Escopo auditado (5 unidades concluídas):**
  1. `CAM-TI-011`: `3 - Materias/Informatica/13 - backup estrategias tipos restauracao e diferenca de sincronizacao.md` (`art-e4f1e43ef81ff76b`).
  2. `CAM-TI-012`: `3 - Materias/Informatica/14 - malware virus worm trojan ransomware spyware e rootkit.md` (`art-e66153c7ca90b06b`).
  3. `CAM-TI-013`: `3 - Materias/Informatica/15 - antivirus firewall e antispyware atuacao e limites.md` (`art-54da73b11b7b9fdd`).
  4. `CAM-TI-014`: `3 - Materias/Informatica/16 - phishing pharming e engenharia social tecnicas e contramedidas.md` (`art-2f178d9576d10289`).
  5. `CAM-TI-015`: `3 - Materias/Informatica/17 - governanca digital e responsabilidade no servico publico.md` (`art-28fc0e46477ff067`).

### 1. Testes e Validação Técnica Executada
- **Verificação de Identidades e Slugs:** `node scripts/test-article-identity.js` aprovado. 423 arquivos Markdown públicos mapeados com identidade estável, unicidade de `articleId` e derivação consistente de rotas.
- **Validação do Catálogo do Concurso:** `node scripts/test-contest-catalog.js` aprovado. 3 concursos, 32 matérias e 463 vínculos de artigos verificados. As 5 novas unidades integradas a `informatica` sob o concurso `camara-2026`.
- **Barreira de Privacidade Absoluta:** `node scripts/test-public-privacy.js` aprovado. Nenhuma informação individual (sessões, logs de erros, relatórios pessoais) foi vazada ou inserida no repositório público.
- **Índices de Busca e Ranking de Seções:** `node scripts/test-search-index.js`, `test-search-routing.js` e `test-search-ranking.js` aprovados com 100% de recall e ranking superior (17/18 Top 1, 18/18 Top 3).
- **Integridade do Build Estático:** `node scripts/build-site.js` aprovado com 423 artigos públicos compilados para `_site/`, manifesto e índices gerados com sucesso.

### 2. Avaliação Editorial e Normativa
- **Precisão Conceitual e Normativa:**
  - `CAM-TI-011`: Rigor no funcionamento do *Archive Bit* para backup Completo, Incremental e Diferencial, regra 3-2-1, métricas RPO/RTO e desmistificação da equivalência errônea entre sincronização de nuvem e backup;
  - `CAM-TI-012`: Taxonomia oficial do CERT.br e Cebraspe, diferenciando vírus (hospedeiro + execução humana), worms (autônomos via rede), trojans (disfarce/backdoor), ransomware (cifração e dupla extorsão), spywares (keylogger $\times$ screenlogger), rootkits (ocultação no kernel) e botnets (zumbis/DDoS);
  - `CAM-TI-013`: Aplicação do princípio da Defesa em Profundidade e delimitação precisa de que o firewall filtra tráfego de rede por portas e IPs, mas não inspeciona arquivos para detectar vírus locais nem impede phishing;
  - `CAM-TI-014`: Oposição estrita entre phishing (engodo por mensagem/clique) e pharming (envenenamento de DNS com digitação correta da URL), além de técnicas de *spear phishing*, *whaling*, *baiting* e *pretexting*;
  - `CAM-TI-015`: Fundamentação na Lei do Governo Digital (Lei nº 14.129/2021) e princípios *Digital by Default*, *Once-Only* e Dados Abertos; classificação das assinaturas eletrônicas (Lei nº 14.063/2020: Simples, Avançada e Qualificada com ICP-Brasil); e harmonização entre LAI e LGPD à luz do Tema 483 do STF.
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e conferidos contra fontes primárias e jurisprudência da banca Cebraspe, com justificativas sólidas.
- **Não Conformidades Encontradas e Ações Corretivas Executadas:**
  - *NC-001 (Editorial/Precisão Técnica em CAM-TI-013 - Antivírus e Firewall)*: Identificada formulação excessivamente categórica que afirmava que o firewall não detecta vírus em arquivos baixados, colidindo com a menção subsequente a Firewalls de Próxima Geração (NGFW), além de descrição da detecção por assinatura como "totalmente ineficaz" contra zero-day. **Ação Corretiva**: Seção 2.2 e Questão 1 retificadas para delimitar claramente que a restrição se aplica ao modelo tradicional de filtragem de pacotes e inspeção de estado nas camadas 3 e 4 (regra geral cobrada no Cebraspe), enquanto NGFWs incorporam inspeção profunda (*Deep Packet Inspection* - DPI) e antivírus de borda. Ajustado o diagrama Mermaid para indicar explicitamente a ressalva dos NGFWs e calibrada a descrição da detecção por assinatura de "totalmente ineficaz" para "severamente limitada contra ameaças de dia zero e variantes polimórficas inéditas", preservando que assinaturas genéricas podem capturar famílias correlatas.
  - *NC-002 (Editorial/Precisão Técnica em CAM-TI-014 - Phishing e Pharming)*: Identificada asserção sobre a capacidade de o HTTPS e certificados digitais impedirem o pharming de passar despercebido sem explicitar as condições técnicas necessárias. **Ação Corretiva**: Seção 4 e Questão 5 aprimoradas para detalhar as 3 premissas técnicas de eficácia da salvaguarda (incompatibilidade de CN/SAN, ausência da chave privada oficial e rejeição de certificados autoassinados por falta de AC raiz confiável no repositório do SO), bem como as condições de contorno (como a injeção prévia de AC raiz maliciosa local com privilégios de administrador ou usuário ignorando alertas) e a dependência direta da configuração correta e integridade do ambiente do cliente.
- **Classificação do Ciclo:** **Aprovado após retificação com rigor conceitual**.

### 3. Ciclo 4 (Unidades CAM-TI-016 a CAM-TI-021) — 09/11/2026

#### 3.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-TI-016`, `CAM-TI-017`, `CAM-TI-018`, `CAM-TI-019`, `CAM-TI-020`, `CAM-TI-021` (6 unidades, completando o bloco de Inteligência Artificial da trilha de TI).
- **Artigos Avaliados:**
  1. `3 - Materias/Informatica/18 - inteligencia artificial definicao tipos de sistemas e aplicacoes publicas.md` (`art-781994cb7bf41c1a` - CAM-TI-016)
  2. `3 - Materias/Informatica/19 - aprendizagem supervisionada e nao supervisionada algoritmos e metricas.md` (`art-5cb51089c289b098` - CAM-TI-017)
  3. `3 - Materias/Informatica/20 - aprendizagem por reforco e comparacao de modelos de machine learning.md` (`art-a3fd9f5c3eb6a721` - CAM-TI-018)
  4. `3 - Materias/Informatica/21 - ia generativa modelos llms difusao usos e limites.md` (`art-fdf8a15d31c83138` - CAM-TI-019)
  5. `3 - Materias/Informatica/22 - engenharia de prompts estrutura tecnicas e avaliacao.md` (`art-76e0fb652b3f13a9` - CAM-TI-020)
  6. `3 - Materias/Informatica/23 - etica em ia vieses discriminacao transparencia e revisao humana.md` (`art-392b1e185fd2729e` - CAM-TI-021)

#### 3.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados:**
  - `node scripts/test-priority-sync.js` (Sincronização opcional, mesmo domínio, preservação de revisões e offline).
  - `node scripts/validate-flashcards.js` (233 flashcards estruturais, IDs, metadados de edital e fontes).
  - `node scripts/test-article-identity.js` (Identidades de 429 artigos Markdown, unicidade de `articleId`, slugs estáveis e aliases).
  - `node scripts/test-contest-catalog.js` (Catálogo por concurso em 3 concursos, 32 matérias e 469 vínculos validados).
  - `node scripts/test-public-privacy.js` (Proteção estrita: zero vazamento de dados de sessões, desempenho privado ou metas pessoais no ambiente público).
  - `node scripts/test-search-index.js`, `test-search-routing.js`, `test-search-ranking.js` (Recall de 100% nas 18 consultas de benchmark, 94% Top-1, 100% Top-3).
  - `node scripts/build-site.js` (Build estático integral concluído em `_site/`, manifesto com 429 arquivos e índice de busca de 6,48 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Informática, `index.md` e catálogo. Identidades canônicas persistentes e resolução estrita de caminhos e categorias.

#### 3.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-TI-016`: Distinção hierárquica precisa entre IA (gênero), Machine Learning (aprendizado de dados) e Deep Learning (redes profundas com extração automática de features); taxonomia de Arend Hintze e divisão entre IA Estreita (ANI) e as hipóteses teóricas de AGI/ASI; aplicações institucionais brasileiras (Ulysses na Câmara, Victor no STF, Alice/Sofia no TCU) e alinhamento com a EBIA.
  - `CAM-TI-017`: Rigor na separação pelo divisor de águas da rotulagem de dados ($x$ rotulado com $y$ $\times$ apenas dados brutos $x$); tarefas de Classificação $\times$ Regressão; análise crítica de métricas (Acurácia, Precisão, Revocação e F1-Score contra o perigo do desbalanceamento de classes); métricas de resíduo (MAE, MSE, RMSE e $R^2$); Agrupamento (K-Means $\times$ DBSCAN) e Redução de Dimensionalidade (PCA).
  - `CAM-TI-018`: Quebra da premissa de dados independentes e identicamente distribuídos (*i.i.d.*); formalização da tupla $(S, A, P, R, \gamma)$ dos Processos de Decisão de Markov (MDP) com o papel do fator de desconto $\gamma$; dilema exploração $\times$ explotação ($\epsilon$-greedy); e o papel crucial do RLHF no alinhamento de LLMs.
  - `CAM-TI-019`: Transição da IA discriminativa para a generativa; detalhamento matemático e arquitetural dos Transformers (*Attention Is All You Need*, 2017), autoatenção (*self-attention*) e vetor de codificação posicional; natureza probabilística e autorregressiva dos LLMs e a tese dos papagaios estocásticos (*Stochastic Parrots*); modelos de Difusão $\times$ GANs de Goodfellow; patologia das alucinações e mitigação via arquitetura RAG (*Retrieval-Augmented Generation*).
  - `CAM-TI-020`: Definição de Engenharia de Prompts sem ajuste de pesos (*frozen weights*) $\times$ *Fine-Tuning*; taxonomia de indução (*Zero-Shot*, *Few-Shot*, *Chain-of-Thought*, *Least-to-Most*, *Tree of Thoughts*); ameaças de segurança (*Prompt Injection* direto/indireto e *Jailbreaking*); métricas de avaliação (ROUGE-L, BLEU e LLM-as-a-Judge); e conformidade pública (vedação a dados pessoais/sigilosos em APIs públicas sob LGPD/LAI).
  - `CAM-TI-021`: Desconstrução da falácia da neutralidade matemática; taxonomia de vieses (histórico, amostragem e medição por proxy com loops de feedback); distinção estrita entre discriminação direta (*disparate treatment*) e indireta (*disparate impact*); dilema da caixa-preta (*black-box*) e XAI (explicabilidade global e local via SHAP/LIME); arquiteturas de supervisão humana (HITL, HOTL e HOOTL) com alerta ao viés de automação (*automation bias*); e marco legal brasileiro (LGPD art. 6º e art. 20 com análise do veto à exclusividade por pessoa natural, EBIA e PL 2.338/2023 baseado em risco).
- **Gabaritos das Questões Inéditas:** Todos os 36 itens inéditos C/E examinados e testados no padrão Cebraspe, com justificativas normativas e técnicas consistentes.
- **Não Conformidades Encontradas e Ações Corretivas:**
  - *NC-003 (Técnica em CAM-TI-021 - Frontmatter de nota canônica)*: Detectada divergência inicial no formato do frontmatter (`articleAliases` em lista de strings simples em vez do array JSON contendo o caminho canônico `["3 - Materias/..."]`), ocasionando falha na geração do manifesto no `build-site.js`. **Ação Corretiva**: Frontmatter de CAM-TI-021 padronizado imediatamente para `articleAliases: ["3 - Materias/Informatica/23 - etica em ia vieses discriminacao transparencia e revisao humana.md"]` e `type: "conceito"`. Revalidação com 100% de sucesso em toda a suíte.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 4. Ciclo 5 (Unidades CAM-TI-022 a CAM-TI-025) — 09/11/2026

#### 4.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-TI-022`, `CAM-TI-023`, `CAM-TI-024`, `CAM-TI-025` (4 unidades, cobrindo o núcleo de Análise e Visualização de Dados da trilha de TI).
- **Artigos Avaliados:**
  1. `3 - Materias/Informatica/24 - dado informacao variavel atributo indicador e metrica.md` (`art-217dafb9048089a8` - CAM-TI-022)
  2. `3 - Materias/Informatica/25 - transformacao de dados limpeza agregacao e qualidade.md` (`art-03945be9cb42c4bd` - CAM-TI-023)
  3. `3 - Materias/Informatica/26 - visualizacao de dados selecao de grafico pela pergunta analitica.md` (`art-a2e4949761ab5a6f` - CAM-TI-024)
  4. `3 - Materias/Informatica/27 - histograma barras e linhas distincao dos eixos e aplicacoes.md` (`art-719dd4ca3e84b65a` - CAM-TI-025)

#### 4.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado: sync opcional, login, 401/403, cache e offline).
  - `node scripts/validate-flashcards.js` (Aprovado: 260 flashcards validados com IDs, metadados de edital e fontes).
  - `node scripts/test-article-identity.js` (Aprovado: identidades canônicas de 433 artigos Markdown validadas sem duplicidades).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 473 vínculos de artigos).
  - `node scripts/test-public-privacy.js` (Aprovado: zero vazamento de dados privados no ambiente público).
  - `node scripts/test-search-index.js`, `test-search-routing.js`, `test-search-ranking.js` (Aprovado: 100% recall nas 18 consultas de benchmark, 94% Top-1, 100% Top-3).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 433 arquivos e índice de busca de 6,55 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Informática, `index.md` e catálogo. Identidades canônicas e slugs perfeitamente mapeados.

#### 4.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-TI-022`: Rigor dogmático na Pirâmide DIKW (dado bruto $\times$ informação com contexto $\times$ conhecimento aplicativo $\times$ sabedoria ética); distinção estrita entre variáveis (discretas/contínuas e nominais/ordinais) e atributos em bancos relacionais; e o divisor de águas entre métrica (contagem quantitativa neutra) e indicador de desempenho (meta, padrão de julgamento e polaridade definida).
  - `CAM-TI-023`: Aplicação do princípio GIGO; arquitetura do pipeline ETL $\times$ ELT para Data Lakes; técnicas de limpeza de dados (tratamento de nulos por média simétrica $\times$ mediana robusta contra outliers $\times$ moda para categóricos); regra do intervalo interquartil (IQR) com a ressalva crítica de que nem todo outlier é erro descartável em auditorias; granularidade e agregação com funções de agrupamento; e as 6 dimensões de qualidade do DAMA-DMBOK.
  - `CAM-TI-024`: Taxonomia de Andrew Abela baseada na pergunta analítica (comparação, evolução temporal, composição e distribuição/relação); diretrizes de Edward Tufte (razão dado-tinta, eliminação de *chartjunk* 3D e controle do *Lie Factor* contra eixos truncados desonestos); e análise perceptiva dos limites do gráfico de pizza substituído por barras horizontais ordenadas.
  - `CAM-TI-025`: Oposição categórica entre histograma (variável quantitativa contínua, sem espaçamento entre barras contíguas, largura com significado de amplitude e área proporcional à frequência) e gráfico de barras/colunas (categorias discretas com espaçamento e largura arbitrária); formas de distribuição (gaussiana, bimodal, assimétrica positiva/negativa com posição relativa entre média, mediana e moda); e gráficos de linhas com premissa de continuidade temporal, vedando conexão entre categorias nominais e legitimando eixos truncados para microvariações.
- **Gabaritos das Questões Inéditas:** Todos os 24 itens inéditos C/E examinados e testados no padrão Cebraspe, com justificativas estatísticas e metodológicas consistentes.
- **Não Conformidades Encontradas e Ações Corretivas:**
  - *NC-004 (Editorial em CAM-TI-013, CAM-TI-014 e CAM-TI-018 - Refinamento Completo de Precisão Conceitual e Mitigação de Absolutismos)*:
    - **Item 1: Diagrama Mermaid e heurísticas de Firewall (CAM-TI-013 / `3 - Materias/Informatica/15 - antivirus firewall e antispyware atuacao e limites.md`)**:
      - *Problema*: Diagrama Mermaid e heurística final mantinham asserção genérica de que firewall não examina arquivos autorizados, contrastando com o texto que diferenciava NGFWs com DPI de firewalls tradicionais de camadas 3 e 4.
      - *Formulação Anterior*: `FW -.->|"Limite tradicional: filtros de pacotes não examinam vírus em arquivos autorizados (salvo NGFW)"| AV` e heurística *"Falou em eliminar vírus de anexo... -> ERRADO"*.
      - *Formulação Corrigida*: Diagrama reestruturado com nós separados para `FW_TRAD` (Firewall Tradicional em camadas 3/4) e `NGFW` (Firewall de Próxima Geração com DPI e módulos integrados quando tráfego TLS é inspecionado), explicitando que: (a) firewalls tradicionais de filtragem de pacotes e estado não realizam, por si, análise antimalware do conteúdo; (b) NGFWs podem incorporar inspeção profunda e detecção de malware na borda se a decifração e os módulos estiverem ativos; (c) o NGFW não substitui a proteção antimalware do dispositivo/endpoint (pendrives, tráfego cifrado local sem interceptação, mídias externas). Heurística de prova 1 retificada com essas mesmas condicionantes.
      - *Questões Afetadas*: Questão 1 (revisada para explicitar o conceito canônico de *firewall pessoal/tradicional* frente a NGFWs).
    - **Item 2: Detecção por Assinaturas em Antivírus (CAM-TI-013 / `3 - Materias/Informatica/15 - antivirus firewall e antispyware atuacao e limites.md`)**:
      - *Problema*: Afirmação categórica de que a detecção por assinaturas seria "totalmente ineficaz" contra ameaças de dia zero (*Zero-Day*), desconsiderando a identificação de variantes por assinaturas genéricas/famílias e a complementaridade das técnicas.
      - *Formulação Anterior*: *"Totalmente ineficaz contra ameaças de dia zero (Zero-Day)"* e heurística *"Assinatura = não pega vírus inédito (dia zero)"*.
      - *Formulação Corrigida*: *"A detecção exclusivamente baseada em assinaturas conhecidas apresenta limitações importantes contra ameaças inéditas, especialmente quando não há assinatura correspondente na base local (embora assinaturas genéricas possam identificar variantes de uma mesma família). Por depender do conhecimento prévio da praga, essa técnica é complementada por mecanismos heurísticos, comportamentais e sandboxing para cobrir ameaças de dia zero (Zero-Day) e mutações polimórficas"*. Heurística calibrada para *"limitado contra código inédito sem assinatura prévia"*.
      - *Questões Afetadas*: Questões 2, 3 e 6 revisadas; gabaritos preservados com rigor.
    - **Item 3: Validação de Certificados TLS contra Pharming (CAM-TI-014 / `3 - Materias/Informatica/16 - phishing pharming e engenharia social tecnicas e contramedidas.md`)**:
      - *Problema*: Fundamentação da Questão 5 afirmava categoricamente que a proteção TLS só seria neutralizada em "cenários de comprometimento extremo da máquina", sem discriminar com clareza as condições técnicas da validação TLS e os diferentes vetores de ataque.
      - *Formulação Anterior*: Fundamentação focada na ausência da chave privada, afirmando genericamente que a proteção só cairia com injeção forçada de AC raiz maliciosa.
      - *Formulação Corrigida*: Fundamentação integralmente reestruturada explicitando as três condições técnicas concorrentes para a eficácia do TLS (1. correspondência de identidade CN/SAN; 2. cadeia de certificação confiável no *Trust Store*; 3. integridade da máquina do cliente, preservação da chave privada da instituição e respeito do usuário aos alertas de bloqueio do navegador), associada à discriminação taxativa dos vetores: *envenenamento de DNS puro* (detectado pelo TLS), *typosquatting/domínios semelhantes* (onde o invasor obtém certificado válido para o domínio espelho, dependendo da atenção do usuário à barra de endereços), e *comprometimento de chave/AC* (onde a identidade é forjada).
      - *Questões Afetadas*: Questão 5 (Gabarito **ERRADO** rigorosamente mantido e fundamentado).
    - **Item 4: Explicabilidade em IA Simbólica (CAM-TI-016 / `3 - Materias/Informatica/18 - inteligencia artificial definicao tipos de sistemas e aplicacoes publicas.md`)**:
      - *Problema*: Na matriz comparativa, a IA simbólica era descrita como "Totalmente explicável".
      - *Formulação Anterior*: `| **Explicabilidade / Transparência** | **Totalmente explicável**: trilha de decisão rastreável... |`.
      - *Formulação Corrigida*: `| **Explicabilidade / Transparência** | **Elevada explicabilidade nativa**: trilha de decisão lógica rastreável e auditável passo a passo |`.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 5. Estado Atual e Próximos Passos
- **Total de unidades editoriais concluídas e integradas:** **198 de 315 (62,9%)**.
- **Trilha TI:** **25 de 28 unidades concluídas (restam 3 para fechar a trilha)**.
- **Próximo Lote a executar:** `CAM-TI-026` (Dispersão e box plot: relações, distribuição e resumo estatístico).

