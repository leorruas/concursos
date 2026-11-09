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

### 5. Ciclo 6 (Unidades CAM-TI-026 a CAM-TI-028) — Encerramento da Trilha de TI (28/28) — 09/11/2026

#### 5.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-TI-026`, `CAM-TI-027`, `CAM-TI-028` (3 unidades, fechamento integral da Trilha de Tecnologia da Informação e Dados).
- **Artigos Avaliados:**
  1. `3 - Materias/Informatica/28 - dispersao e box plot relacoes distribuicao e resumo estatistico.md` (`art-e3831c8dec419d79` - CAM-TI-026)
  2. `3 - Materias/Informatica/29 - power bi tableau e data studio comparativo e funcoes.md` (`art-f137aeacb1988047` - CAM-TI-027)
  3. `3 - Materias/Informatica/30 - storytelling com dados estrutura narrativa contexto e persuasao.md` (`art-2fde27c0e00dc520` - CAM-TI-028)

#### 5.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado: sync opcional, mesmo domínio, revisões intactas, login, 401/403, cache e offline).
  - `node scripts/validate-flashcards.js` (Aprovado: 270 flashcards estruturais, IDs, metadados de edital e fontes).
  - `node scripts/test-article-identity.js` (Aprovado: identidades estáveis de 436 artigos Markdown validadas sem duplicidades).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 476 vínculos de artigos).
  - `node scripts/test-public-privacy.js` (Aprovado: barreira estrita mantida, sem vazamento de histórico pessoal ou sessões privadas).
  - `node scripts/test-search-index.js` (Aprovado: recall de 100% nas 18 consultas de benchmark, integridade de âncoras e seções).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 436 arquivos e índice de busca de 6,61 MB).
  - **CI e GitHub Pages:** Run `42643715440` (disparado para o commit `6ed81a0`) monitorado via API do GitHub Actions.
- **Evidências de Integridade:** Zero links quebrados no hub de Informática (`informatica.md`), `index.md` e catálogo. Identidades canônicas persistentes e resoluções estritas de slugs.

#### 5.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-TI-026`: Rigor matemático e geométrico no gráfico de dispersão (*scatter plot*) para pares contínuos $(X, Y)$, com reforço dogmático de que correlação não implica causalidade; anatomia do diagrama de caixas (*box plot*) de John Tukey com o resumo dos cinco números (Mínimo, $Q_1$, Mediana $Q_2$, $Q_3$, Máximo) e amplitude interquartil ($	ext{IQR} = Q_3 - Q_1$); regra do limite de hastes ($1{,}5 	imes 	ext{IQR}$) e plotagem individual de outliers; e diagnóstico visual de assimetria.
  - `CAM-TI-027`: Comparativo estruturado do ecossistema de BI (Power BI, Tableau e Google Looker Studio); camadas de ingestão (Import Mode/VertiPaq colunar $	imes$ DirectQuery/Live Connection $	imes$ Modelos Compostos); modelagem dimensional (Star Schema $	imes$ Snowflake); distinção crucial entre colunas calculadas estáticas e medidas DAX dinâmicas com contexto de filtro e transição de contexto (`CALCULATE`); e cálculos LOD no Tableau (`FIXED`, `INCLUDE`, `EXCLUDE`).
  - `CAM-TI-028`: Tríade do storytelling com dados segundo Cole Nussbaumer Knaflic (Dados, Visualização e Narrativa); divisor metodológico entre análise exploratória (busca de padrões pelo analista) e comunicação explanatória (comunicação de achado específico para tomada de ação da audiência); preparação de contexto (Quem, O Quê, Teste dos Três Minutos e Grande Ideia / *Big Idea*); redução da carga cognitiva extrínseca pelo *decluttering* (eliminação do *chartjunk* de Tufte via princípios Gestalt); hierarquia visual por atributos pré-atentivos (cor estratégica, tamanho, posição e contraste); arco dramático de três atos (Status Quo $ightarrow$ Conflito/Evidência nos dados $ightarrow$ Resolução/Next Steps); e limites éticos no setor público (rejeição a 3D decorativo, duplo eixo Y desproporcional e vedação ao truncamento do ponto zero em gráficos de barras/colunas).
- **Gabaritos das Questões Inéditas:** Todos os 18 itens inéditos C/E examinados e testados no padrão Cebraspe, com justificativas técnicas consistentes.
- **Não Conformidades Encontradas e Ações Corretivas:**
  - *NC-005 (Técnica em CAM-TI-028 - Formatação de frontmatter canônico)*: Inicialmente, `CAM-TI-028` foi salvo com `tags` em lista e `articleAliases` com indentação YAML multilinha, gerando erro de slug no `build-site.js`. **Ação Corretiva**: Frontmatter reestruturado para o formato padrão estrito (`articleAliases: ["3 - Materias/Informatica/30 - storytelling com dados estrutura narrativa contexto e persuasao.md"]`, `type: "conceito"`, `status: "ativo"`), com revalidação imediata e sucesso no build.
  - *NC-006 (Editorial e Normativa em CAM-LP-001 e CAM-TI-030 - Precisão de exemplos linguísticos, sobrestamento por MP e taxonomia de questões)*:
    - **Item 1: Exemplo de zeugma e elipse em CAM-LP-001 (`3 - Materias/Portugues/12 - texto contexto e producao de sentido.md`)**:
      - *Problema*: Exemplo truncado de zeugma sem verbo recuperável expresso anteriormente.
      - *Formulação Anterior*: *"O relator da proposta na CCJC apresentou parecer favorável. O Plenário da Câmara, por maioria absoluta, a aprovação final em dois turnos"*.
      - *Formulação Corrigida*: Distinção teórica explícita entre elipse (omissão de termo subentendido pelo contexto sem presença verbal anterior) e zeugma (omissão de termo expresso em oração anterior). Exemplo reescrito: *"A CCJC aprovou a admissibilidade da PEC; a Comissão Especial, o mérito da proposição"*, demonstrando formalmente a recuperação do verbo transitivo direto *"aprovou"*.
    - **Item 2: Sobrestamento de pauta por Medida Provisória (CF, art. 62, § 6º) em CAM-LP-001 (`3 - Materias/Portugues/12 - texto contexto e producao de sentido.md`)**:
      - *Problema*: Exemplo inicial sugeria sobrestamento indiscriminado; a primeira correção empregava a expressão "implicatura conversacional necessária", terminologia excessivamente categórica que não discriminava a fronteira entre probabilidade contextual e conclusão indevida.
      - *Formulação Anterior*: *"o enunciado gera a implicatura conversacional necessária de que a proposição não poderá ser votada enquanto não forem desimpedidas as MPs da pauta"*.
      - *Formulação Corrigida (Refinamento NC-006)*: Análise reestruturada metodologicamente em **três níveis de significação textual**:
        1. *Informação explícita (superfície textual)*: o Presidente afirma que o Plenário é soberano e que duas MPs com prazo esgotado aguardam votação prioritária (sem recusar expressamente a votação do projeto).
        2. *Inferência contextual fundamentada (implicatura provável)*: à luz do art. 62, § 6º, da CF e da jurisprudência do STF (MS 27.931/DF e MS 28.850/DF-QO), é altamente plausível e fundamentado inferir que o projeto de lei ordinária não será apreciado na sessão ordinária enquanto persistir o impedimento.
        3. *Conclusão indevida / Extrapolação*: afirmar categoricamente que o projeto *sob hipótese alguma será votado naquela semana*, ignorando variáveis fáticas e regimentais não abordadas (votação/revogação prévia das MPs, sessão extraordinária ou perda de eficácia por decurso de prazo). A correção consolida a regra permanente de calibração modal no Cebraspe.
    - **Item 3: Classificação e origem das questões em CAM-LP-001 e CAM-TI-028 (`3 - Materias/Informatica/30 - storytelling...md`)**:
      - *Problema*: Questões inéditas formuladas no padrão da banca estavam rotuladas como "Cebraspe – Adaptada", sem indicação de prova ou ano real.
      - *Formulação Anterior*: `*(Cebraspe – Adaptada / ...)*`.
      - *Formulação Corrigida*: Rótulo padronizado para `*(Inédita: estilo Cebraspe / ...)*` em todas as questões criadas, reservando a etiqueta "Adaptada" exclusivamente para itens que possuam prova, órgão, ano e número de item originais comprovadamente verificados.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 6. Justificativa Editorial da Sequência de Trilhas e Estado Atual
- **Auditoria de Transição e Sequência do Edital:**
  - O planejamento inicial indicava *Teorias da Comunicação (CAM-TC)* como próxima etapa após TI. Contudo, a auditoria do repositório constatou que a trilha **CAM-TC (24/24 unidades)** já foi integralmente produzida e publicada nos Lotes 1 a 10 (incluindo o artigo piloto inaugural `art-d5d369c071d44fe1`).
  - Além de TC, auditações anteriores constataram que as trilhas **CO (32/32)**, **DI (46/46)**, **CP (22/22)** e **PL (33/33)** também já se encontravam concluídas.
  - Conforme o programa do Edital da Câmara dos Deputados 2026 (itens 14.2.3 — Conhecimentos Básicos), a esteira de matérias prioritárias pendentes recai sobre o bloco de conhecimentos gerais: **Língua Portuguesa (CAM-LP, 23 unidades)**, **Língua Inglesa (CAM-ING, 12 unidades)**, **Direito Administrativo (CAM-DAD, 34 unidades)**, **Administração Pública e Governança (CAM-AP, 15 unidades)** e **Direito Constitucional (CAM-DC, 21 unidades)**.
  - Portanto, a transição para a trilha **Língua Portuguesa (CAM-LP)** respeita estritamente o inventário real de pendências e o programa oficial do certame.
- **Total de unidades editoriais concluídas e integradas:** **216 de 315 (68,6%)**.
- **Trilha Língua Portuguesa (LP):** **15 de 23 unidades concluídas** (`CAM-LP-001` a `CAM-LP-015`).
- **Próximo Lote a executar:** `CAM-LP-016` (Concordância verbal e nominal: regras e casos de fronteira).

### 7. Ciclo 7 (Unidades CAM-LP-001 a CAM-LP-005) — Bloco Inicial de Língua Portuguesa — 09/11/2026

#### 7.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-LP-001`, `CAM-LP-002`, `CAM-LP-003`, `CAM-LP-004`, `CAM-LP-005` (5 unidades de fundação textual e discursiva da trilha de Língua Portuguesa).
- **Artigos Avaliados:**
  1. `3 - Materias/Portugues/12 - texto contexto e producao de sentido.md` (`art-78645a9b4c365a83` - CAM-LP-001)
  2. `3 - Materias/Portugues/13 - tema tese e progressao tematica.md` (`art-554511538d877686` - CAM-LP-002)
  3. `3 - Materias/Portugues/14 - informacao explicita pressuposto e inferencia.md` (`art-90192f46b01d2516` - CAM-LP-003)
  4. `3 - Materias/Portugues/15 - tipologia textual criterios de distincao e sequencias prototipicas.md` (`art-7a7433d13f34cbad` - CAM-LP-004)
  5. `3 - Materias/Portugues/16 - genero textual situacao de uso suporte e finalidade.md` (`art-61af04b165d9d678` - CAM-LP-005)

#### 7.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado: sync opcional, mesmo domínio, revisões intactas, autenticação e offline).
  - `node scripts/validate-flashcards.js` (Aprovado: 270 flashcards estruturais validados sem erros de schema ou formato).
  - `node scripts/test-article-identity.js` (Aprovado: identidades estáveis de 441 artigos Markdown verificadas sem colisões).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 481 vínculos de artigos).
  - `node scripts/test-public-privacy.js` (Aprovado: barreira estrita confirmada, sem vazamento de histórico pessoal ou sessões privadas).
  - `node scripts/test-search-index.js`, `test-search-routing.js`, `test-search-ranking.js` (Aprovado: recall 100%, 94% Top-1, 100% Top-3).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 441 arquivos e índice de busca de 6,71 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Português (`portugues.md`), `index.md` e catálogo. Identidades canônicas persistentes e resoluções estritas de slugs e aliases.

#### 7.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-LP-001`: Texto como evento comunicativo situado; os sete fatores de textualidade de Beaugrande & Dressler (coesão e coerência textuais; intencionalidade, aceitabilidade, situacionalidade, informatividade e intertextualidade pragmáticas); atos de fala de Austin e Searle (locucionário, ilocucionário e perlocucionário); máximas conversacionais de Grice; e a tríade de níveis de leitura do Cebraspe (explícito/paráfrase $\times$ inferência fundamentada $\times$ extrapolação indevida).
  - `CAM-LP-002`: Hierarquia semântica estrita entre assunto (campo abstrato amplo), tema (recorte neutro delimitado) e tese (juízo de valor central sustentado por argumentos); as quatro macrorregras de redução semântica de Teun van Dijk (apagamento, seleção, generalização e construção); a dinâmica oracional de Tema (Dado/Conhecido) e Rema (Novo/Foco); a progressão temática de Bernard Combettes (tema constante, linear, hipertema e contraste); e patologias discursivas (circularidade/tautologia, dispersão e deriva temática).
  - `CAM-LP-003`: Oposição categórica entre informação explícita e implícita; a teoria da pressuposição de Oswald Ducrot e os ativadores linguísticos formais (verbos de mudança de estado, advérbios aspectuais iterativos como *já* e *ainda*, orações adjetivas explicativas $\times$ restritivas, verbos factivos), com destaque para a resistência ao teste da negação e interrogação; subentendido como inferência pragmática cancelável; e matriz Cebraspe de controle contra distorções do senso comum e confusões de correlação $\times$ causalidade.
  - `CAM-LP-004`: Distinção categórica entre tipo textual (abstrato, linguístico e finito) e gênero textual (concreto, sociocomunicativo e infinito); a matriz de Jean-Michel Adam e as 5 sequências prototípicas (narrativa, descritiva, dissertativa expositiva, dissertativa argumentativa e injuntiva/prescritiva); o divisor de águas entre exposição (transmissão neutra de conceitos/dados sem tese) e argumentação (defesa de tese com predicados avaliativos e persuasão); e o fenômeno da heterogeneidade tipológica subordinada à dominância global.
  - `CAM-LP-005`: Teoria dos gêneros do discurso de Mikhail Bakhtin (conteúdo temático, estilo verbal e construção composicional como elementos indissociáveis do enunciado relativamente estável); classificação em gêneros primários (espontâneos, orais e cotidianos) e secundários (complexos, formais, escritos e institucionais); tríade de Marcuschi (tipo $\times$ gênero $\times$ suporte); funções e estruturas dos gêneros na esfera parlamentar (pareceres CCJC, editais vinculantes, discursos taquigrafados e notícias); intergenericidade/hibridismo funcional; e independência da estabilidade do gênero em face da mera transposição de suporte técnico físico para digital.
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e testados no padrão Cebraspe, rotulados rigorosamente como `*(Inédita: estilo Cebraspe / ...)*`, com justificativas técnicas, linguísticas e normativas profundas e distratores baseados em quebras sutis de escopo e modalidade.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 8. Ciclo 8 (Unidades CAM-LP-006 a CAM-LP-010) — Bloco de Convenções da Escrita, Coesão e Sistema Verbal — 09/11/2026

#### 8.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-LP-006`, `CAM-LP-007`, `CAM-LP-008`, `CAM-LP-009`, `CAM-LP-010` (5 unidades sobre ortografia/acentuação, referenciação, coesão lexical/elipse, conectores argumentativos e correlação verbal).
- **Artigos Avaliados:**
  1. `3 - Materias/Portugues/17 - ortografia convencoes da escrita acentuacao e hifenizacao.md` (`art-f0bd45f90ed9276a` - CAM-LP-006)
  2. `3 - Materias/Portugues/18 - referencia textual anafora catafora e deixis.md` (`art-642578f70775bddb` - CAM-LP-007)
  3. `3 - Materias/Portugues/19 - substituicao elipse repeticao e coesao lexical.md` (`art-952aa54cbc30eb00` - CAM-LP-008)
  4. `3 - Materias/Portugues/20 - conectores relacoes logicas e sequenciacao.md` (`art-10e06314b6caf790` - CAM-LP-009)
  5. `3 - Materias/Portugues/21 - tempo modo e aspecto verbal na construcao do texto.md` (`art-3c2532290c3996fa` - CAM-LP-010)

#### 8.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado: sincronização opcional e isolada).
  - `node scripts/validate-flashcards.js` (Aprovado: 270 flashcards validados).
  - `node scripts/test-article-identity.js` (Aprovado: identidades estáveis de 446 artigos Markdown verificadas).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 486 vínculos).
  - `node scripts/test-public-privacy.js` (Aprovado: zero vazamento de dados privados no bundle público).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 446 arquivos e índice de busca de 6,80 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Português (`portugues.md`), `index.md` e catálogo.

#### 8.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-LP-006`: Regras gerais e especiais de acentuação gráfica; distinção e aceitação pelo Cebraspe da dupla análise de paroxítonas em ditongo crescente e proparoxítonas eventuais; supressão de acento em ditongos abertos paroxítonos (*ideia, assembleia*); acentos diferenciais obrigatórios (*pôde/pode*, *pôr/por*, *têm/vêm* e derivados oxítonos); hifenização sob o Acordo de 1990 (regra dos opostos, soberania do H, duplicação de R/S, casos de *hífen/hifens*); e parônimos/homônimos da administração pública.
  - `CAM-LP-007`: Oposição entre referência exofórica (dêixis pessoal, espacial e temporal) e referência endofórica (anáfora retrospectiva e catáfora prospectiva); quadro completo de pronomes demonstrativos (*este/esse/aquele*) no espaço, no tempo e no discurso; anáfora encapsuladora (rotulização conceitual de fatos) e anáfora associativa (*frames* cognitivos); e refutação da regra falsa do "referente mais próximo".
  - `CAM-LP-008`: Coesão gramatical por elipse (sujeito oculto e zeugma com vírgula vicária) e por substituição vicária (*fazer, o*), com alerta à condenação do MRPR ao uso de *"o mesmo"* como pronome pessoal; coesão lexical por sinonímia contextual, escala hiperonímica $\times$ hiponímica (generalização legítima hipônimo $\rightarrow$ hiperônimo versus extrapolação indevida na especificação hiperônimo $\rightarrow$ hipônimo), nominalização e repetição vocabular funcional.
  - `CAM-LP-009`: Divisor argumentativo entre coordenação adversativa (*mas* introduz o argumento decisivo mais forte) e subordinação concessiva (*embora* introduz ressalva superada de menor peso persuasivo); correlação obrigatória de modos verbais na permuta indicativo $\leftrightarrow$ subjuntivo; distinção entre causa, consequência e explicação; contraste entre *à medida que* (proporção) e *na medida em que* (causa); e conectivos polissêmicos (*como*, *se*, *pois* posposto conclusivo, *posto que* concessivo).
  - `CAM-LP-010`: Modos verbais (indicativo, subjuntivo e imperativo) e categorias de aspecto verbal (perfectivo concluso, imperfectivo durativo/habitual e iterativo continuado no pretérito perfeito composto *tem aprovado*); valores do presente (gnômico, histórico, habitual); tríade dos pretéritos do indicativo e equivalência clássica Cebraspe entre mais-que-perfeito simples (*encerrara*) e composto (*tinha/havia encerrado*); futuro do pretérito modalizador de incerteza; e tabela de correlação verbal (*consecutio temporum*).
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e validados no padrão Cebraspe, rotulados como `*(Inédita: estilo Cebraspe / ...)*`, sem absolutismos artificiais.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 9. Ciclo 9 (Unidades CAM-LP-011 a CAM-LP-015) — Bloco de Morfossintaxe, Período Composto e Pontuação — 09/11/2026

#### 9.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-LP-011`, `CAM-LP-012`, `CAM-LP-013`, `CAM-LP-014`, `CAM-LP-015` (5 unidades sobre classes de palavras e morfossintaxe, termos da oração, coordenação, subordinação e pontuação).
- **Artigos Avaliados:**
  1. `3 - Materias/Portugues/22 - classes de palavras e suas funcoes no periodo.md` (`art-a64c0b4be746abff` - CAM-LP-011)
  2. `3 - Materias/Portugues/23 - termos essenciais integrantes e acessorios da oracao.md` (`art-26917d1e99d3ceed` - CAM-LP-012)
  3. `3 - Materias/Portugues/24 - coordenacao relacoes sintaticas e semanticas.md` (`art-cd7059fe8508b9d0` - CAM-LP-013)
  4. `3 - Materias/Portugues/25 - subordinacao substantiva adjetiva e adverbial.md` (`art-33566ad5fe490701` - CAM-LP-014)
  5. `3 - Materias/Portugues/26 - pontuacao e efeitos na estrutura e no sentido.md` (`art-1008794d803c4eff` - CAM-LP-015)

#### 9.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado).
  - `node scripts/validate-flashcards.js` (Aprovado: 270 flashcards validados).
  - `node scripts/test-article-identity.js` (Aprovado: identidades estáveis de 451 artigos Markdown verificadas).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 491 vínculos).
  - `node scripts/test-public-privacy.js` (Aprovado: zero vazamento de dados privados no bundle público).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 451 arquivos e índice de busca de 6,89 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Português (`portugues.md`), `index.md` e catálogo.

#### 9.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-LP-011`: Morfossintaxe de substantivos, adjetivos e advérbios; inversão posicional substantivo-adjetivo e mudança de sentido/classe; variabilidade de *bastante/bastantes*, *meio/meia* e *anexo $\times$ em anexo*; duelo morfossintático da palavra *QUE* (pronome relativo com função sintática $\times$ conjunção integrante sem função sintática $\times$ partícula expletiva); as cinco funções da partícula *SE* (pronome apassivador, índice de indeterminação do sujeito no singular obrigatório, parte integrante do verbo, pronome reflexivo e conjunção); e preposições relacionais $\times$ nocionais.
  - `CAM-LP-012`: Tipologia do sujeito e recuperabilidade (determinado simples, composto e oculto/elíptico $\times$ indeterminado $\times$ sujeito oracional no singular $\times$ oração sem sujeito com *haver* e *fazer* versus verbo pessoal *existir*); transitividade verbal e pronomes átonos (*o/a* OD $\times$ *lhe* OI); árvore de decisão entre Complemento Nominal (paciente/alvo de substantivo abstrato, adjetivo ou advérbio) e Adjunto Adnominal (agente/possuidor exclusivamente de substantivo); e modalidades de aposto (explicativo com vírgula $\times$ especificativo sem vírgula) e vocativo.
  - `CAM-LP-013`: Independência sintática e interdependência semântica na coordenação; orações assindéticas e as 5 sindéticas; polissemia de *E* (adversativo e consecutivo) e valor aditivo de *MAS* em *não só... mas também*; distinção entre *nem*, *tampouco* (= também não) e *tão pouco* (= muito pouco); vírgula antes do *E* (facultativa com sujeitos diferentes) e isolamento entre vírgulas das conjunções adversativas e conclusivas deslocadas.
  - `CAM-LP-014`: As 6 orações subordinadas substantivas e o teste do *ISSO* (com elipse autorizada da preposição antes da conjunção integrante); o duelo semântico e pontuacional das adjetivas restritivas (sem vírgula) $\times$ explicativas (com vírgulas); sintaxe dos pronomes relativos (*cujo* possessivo antecedido de preposição exigida, *onde* para lugar físico $\times$ *aonde*, *quem* para pessoa); pontuação das 9 subordinadas adverbiais (vírgula obrigatória quando antepostas); e desenvolvimento de reduzidas de infinitivo, gerúndio e particípio.
  - `CAM-LP-015`: As 3 proibições absolutas da vírgula na ordem direta S-V-C (inclusive sujeito posposto ou oracional); vedação à retirada de apenas uma das duas vírgulas de termo intercalado; vírgula facultativa em adjunto adverbial curto deslocado $\times$ obrigatória em longo; permutabilidade entre vírgulas duplas, travessões duplos e parênteses; as 4 funções dos dois-pontos e equivalência com *, pois*; e ponto e vírgula em coordenações com zeugma.
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e validados no padrão Cebraspe, rotulados como `*(Inédita: estilo Cebraspe / ...)*`.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.

### 10. Ciclo 10 (Unidades CAM-LP-016 a CAM-LP-020) — Bloco de Concordância, Regência, Crase, Colocação Pronominal e Semântica — 09/11/2026

#### 10.1. Escopo Amostrado e Auditado
- **Lote de Unidades:** `CAM-LP-016`, `CAM-LP-017`, `CAM-LP-018`, `CAM-LP-019`, `CAM-LP-020` (5 unidades sobre concordância verbal e nominal, regência verbal e nominal, crase, colocação pronominal e significação lexical/ambiguidade).
- **Artigos Avaliados:**
  1. `3 - Materias/Portugues/27 - concordancia verbal e nominal regras e casos de fronteira.md` (`art-0655bb314882606f` - CAM-LP-016)
  2. `3 - Materias/Portugues/28 - regencia verbal e nominal transitividade e sentidos.md` (`art-0cb14544830d0b6d` - CAM-LP-017)
  3. `3 - Materias/Portugues/29 - crase condicoes de ocorrencia casos facultativos e impedimentos.md` (`art-3f8cfa8b8d43c2bd` - CAM-LP-018)
  4. `3 - Materias/Portugues/30 - colocacao dos pronomes atonos proclise mesoclise e enclise.md` (`art-3e69afeada1328e6` - CAM-LP-019)
  5. `3 - Materias/Portugues/31 - significacao lexical polissemia homonimia paronimia e ambiguidade.md` (`art-569c69df60f66dfd` - CAM-LP-020)

#### 10.2. Auditoria Técnica e de Integridade da Plataforma
- **Comandos Executados e Resultados:**
  - `node scripts/test-priority-sync.js` (Aprovado).
  - `node scripts/validate-flashcards.js` (Aprovado: 270 flashcards validados).
  - `node scripts/test-article-identity.js` (Aprovado: identidades estáveis de 456 artigos Markdown verificadas).
  - `node scripts/test-contest-catalog.js` (Aprovado: catálogo com 3 concursos, 32 matérias e 496 vínculos).
  - `node scripts/test-public-privacy.js` (Aprovado: zero vazamento de dados privados no bundle público).
  - `node scripts/build-site.js` (Aprovado: build estático concluído em `_site/`, manifesto com 456 arquivos e índice de busca de 6,98 MB).
- **Evidências de Integridade:** Zero links quebrados no hub de Português (`portugues.md`), `index.md` e catálogo.

#### 10.3. Auditoria Editorial, Doutrinária e Normativa
- **Conformidade Doutrinária e Precisão dos Conceitos:**
  - `CAM-LP-016`: Concordância com sujeito simples distante/posposto e sujeito composto anteposto (plural) $\times$ posposto (plural ou núcleo mais próximo); dupla concordância em expressões partitivas (*a maioria de*), porcentagens e frações; contraste entre *que* (concorda com antecedente) e *quem* (3ª sing. ou antecedente); verbos impessoais (*haver* e *fazer*) e contaminação do auxiliar; passiva sintética $\times$ indeterminação do sujeito $\times$ sujeito oracional; regras do verbo *ser*; e vocábulos de fronteira na concordância nominal (*é proibido/proibida, anexo/em anexo, mesmo, próprio, bastante, meio, só/a sós, quite, haja vista*).
  - `CAM-LP-017`: Verbos com mudança de sentido conforme a transitividade (*assistir, aspirar, visar, querer, proceder, implicar, agradar, pagar/perdoar*); sintaxe reversível dos bitransitivos (*informar, avisar, cientificar, notificar*) vedando dois objetos indiretos; contraste entre *lembrar/esquecer* (VTD) e *lembrar-se/esquecer-se* (VTI com *de*); migração obrigatória da preposição para antes dos pronomes relativos (*a que, de que, em que, a cujo*) $\times$ elipse facultativa antes da conjunção integrante *que*; vedação ao compartilhamento de complemento por verbos de regências diferentes; e quadro de regência nominal.
  - `CAM-LP-018`: Condição geral da crase ($a + a$); 9 impedimentos absolutos (palavra masculina, verbo, *a* singular antes de plural, pronomes pessoais/indefinidos/tratamento, *esta/essa/cuja*, palavras repetidas, numeral cardinal e após outras preposições salvo *até*); casos obrigatórios (locuções femininas, horas exatas e paralelismo *de... a... $\times$ da... à...*); 3 casos facultativos (possessivo feminino singular adjetivo, nome próprio feminino sem especificador e após *até*); vocábulos especiais (*casa, terra, distância* e topônimos); e efeitos semânticos/sintáticos da retirada do acento grave.
  - `CAM-LP-019`: 3 proibições absolutas na colocação pronominal (início de período/após pausa, após futuro e após particípio); 7 grupos de fatores de próclise obrigatória (negativas, advérbios sem vírgula, relativos, indefinidos, demonstrativos, conjunções subordinativas e *em + gerúndio*); casos facultativos (sujeito explícito antes do verbo, coordenadas e infinitivo precedido de preposição ou negação); formação da mesóclise e hierarquia Próclise > Mesóclise; adaptações fonéticas (*lo/la, no/na*); e colocação nas locuções verbais.
  - `CAM-LP-020`: Denotação $\times$ conotação; fronteira entre polissemia (mesma raiz e sentidos interligados) e homonímia (origens distintas: homônimos perfeitos, homófonos e homógrafos); quadro de 20 pares de parônimos/homófonos da administração pública (*ratificar/retificar, infringir/infligir, deferir/diferir, avocar/evocar, discriminar/descriminar, elidir/ilidir, eminente/iminente, sortir/surtir, vultoso/vultuoso, incipiente/insipiente, ao encontro de/de encontro a*); e 5 mecanismos estruturais de ambiguidade (anfibologia).
- **Gabaritos das Questões Inéditas:** Todos os 30 itens C/E examinados e validados no padrão Cebraspe, rotulados como `*(Inédita: estilo Cebraspe / ...)*`.
- **Classificação do Ciclo:** **Aprovado com conformidade integral e validação técnica comprovada**.





