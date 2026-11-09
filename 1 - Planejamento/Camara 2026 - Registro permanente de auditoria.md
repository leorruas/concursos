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
