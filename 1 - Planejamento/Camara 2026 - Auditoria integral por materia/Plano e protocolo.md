---
title: "Câmara 2026: plano de auditoria integral por matéria"
type: "planejamento-auditoria"
status: "ativo"
concursoId: "camara-2026"
created: 2026-11-11
updated: 2026-11-11
---

# Auditoria pedagógica, conceitual e normativa: Câmara dos Deputados 2026/2027

## Escopo e objetivo

Auditar **todas as matérias** do Cargo 1, Analista Legislativo, Comunicação Social, área de Divulgação Institucional, com prova prevista para **17/01/2027**, banca Cebraspe. Transformar a biblioteca em materiais corretos, organizados, completos e adequados à aprendizagem, itens C/E e discursivas. A auditoria será realizada pelo **ChatGPT com o conector GitHub e fontes externas, sem Codex**.

Este procedimento é **diferente** do registro prévio [[1 - Planejamento/Camara 2026 - Registro permanente de auditoria|auditorias de lotes editoriais]]. Aprovação anterior, testes automatizados e `confidenceLevel: high` não demonstram, por si, suficiência pedagógica ou correção normativa.

Fontes obrigatórias: `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, [[1 - Planejamento/Camara 2026 - Arquitetura conceitual e plano de artigos|arquitetura e plano dos artigos]], [[1 - Planejamento/Camara 2026 - Estrategia de estudo ate janeiro|estratégia até janeiro]], [[2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional|edital local]], **edital oficial e retificações**, catálogo `data/catalogo-materias-por-concurso.json`, artigos efetivamente existentes e corpus documentado. Consultar `leorruas/concurso-dados` apenas quando indispensável para compreender lacunas, **sem reproduzir dados pessoais no repositório público**. Separar fatos verificados, interpretação, hipótese e não verificado.

## Fases, na ordem

1. **Auditoria completa, matéria por matéria**: única fase autorizada agora. Não modificar artigos.
2. Planejamento da reorganização dos artigos.
3. Correção, divisão, fusão e criação de artigos.
4. Validação editorial, técnica e normativa das alterações.
5. Integração dos materiais ao sistema de questões, revisões e discursivas.

Nas fases posteriores, preservar `articleId`, aliases, links, catálogo e associações a questões; documentar impactos na fase 1. Não iniciar alterações de conteúdo sem autorização.

## Método obrigatório para cada matéria

**Inventário e edital.** Identificar artigos próprios e reutilizados de outros concursos. Conferir arquivos reais, planejamento e catálogo. Construir matriz com item exato do edital, conceitos exigidos, artigos correspondentes, cobertura (**completo / parcial / ausente / pendente de verificação**), lacunas e necessidade de revisão/novo artigo. Ler o conteúdo: título semelhante não comprova cobertura.

**Qualidade conceitual e pedagógica.** Ler **integralmente** cada artigo. Verificar definição anterior ao uso, problema e finalidade do conceito, estrutura, categorias, condições, limites, exceções, relações, diferenças entre classificações, exemplos e contraexemplos, casos progressivos mudando uma variável, recuperação posterior e pré-requisitos entre artigos. Sinalizar conceitos apenas mencionados, enumerações sem relações e pressupostos ocultos.

**Precisão factual e normativa.** Verificar definições, atribuições a autores, classificações, datas, referências, dispositivos vigentes, hipóteses, exceções, consequências jurídicas, funcionalidades e limitações técnicas. Revisar cada questão comentada: gabarito, justificativa, ambiguidades, interpretação alternativa, conceito efetivamente testado, plausibilidade do distrator e evidência de dificuldade Cebraspe. Para cada erro, registrar arquivo, subtítulo, trecho/localização, fonte e correção proposta. Não confiar em carimbos de auditoria anteriores.

**Arquitetura.** Classificar cada artigo como **manter, reorganizar, dividir, fundir, ampliar, reduzir ou corrigir**. Basear divisões em autonomia conceitual, perguntas, classificações, pré-requisitos e reutilização, não em contagem de palavras. Para fusões/divisões propor títulos, fronteiras de conteúdo e relações. Evitar duplicar conceitos canônicos compartilhados entre editais.

**Cebraspe e discursivas.** Verificar se os textos sustentam julgamento de condições/exceções, inversões, casos concretos, causalidade, classificações, competências, normas e relações interdisciplinares; quando aplicável, respostas discursivas e peças técnicas. Inferir mecanismos de cobrança apenas do corpus real identificado, sem inventar frequência, padrão ou dificuldade.

**Vínculos e reutilização.** Detectar duplicatas, divergências, links obsoletos, referências circulares e pré-requisitos defeituosos; propor dependências, complementaridades e comparações; documentar impactos de futuras mudanças na identidade e nos vínculos.

**Severidade e prazo.** **Crítico**: erro que ensina resposta incorreta, omissão importante do edital ou contradição normativa. **Importante**: conceito essencial ausente, explicação insuficiente, estrutura que impede entendimento ou redundância significativa. **Melhoria**: linguagem, exemplos, apresentação, navegação ou refinamento editorial de texto já utilizável. Ordenar intervenções também pelo efeito provável até 17/01/2027, com justificativa e sem presumir estatísticas.

## Entregável de cada matéria

Criar um relatório Markdown progressivo na mesma pasta, contendo obrigatoriamente: (1) diagnóstico fundamentado; (2) matriz integral de cobertura do edital; (3) avaliação **individual de cada artigo** quanto a conceitos, correção, clareza, organização, prova e intervenção; (4) achados críticos com fontes e correção proposta; (5) reorganização resultante com títulos e relações; (6) backlog priorizado, dependências e esforço relativo; (7) pendências de verificação; (8) parecer indicando o que pode ser estudado com confiança, com ressalvas ou só após correção. Cada achado deve localizar arquivo e subtítulo exatos quando disponíveis.

A matéria só está concluída após examinar todos os seus artigos relevantes e confrontar o edital. Em matéria extensa, registrar **exatamente** os arquivos lidos e o bloco pendente; não declarar conclusão parcial como auditoria final. Cobertura editorial e qualidade pedagógica são dimensões separadas. Não inventar percentuais, dados de aprendizagem ou verificações. Criticar decisões pedagógicas anteriores com evidência e justificativa.

## Execução e continuidade

Ler o planejamento para reconhecer as **13 trilhas conceituais** e as **11 matérias virtuais**; estas são camadas distintas. Determinar a ordem de auditoria em função de risco de erro, relevância para a prova, número de artigos e pré-requisitos. Conferir essa ordem no índice antes de iniciar a primeira matéria. Trabalhar em **uma matéria por vez**, prosseguindo nos blocos necessários. Ao fechar a primeira matéria, entregar diagnóstico e reorganização recomendada; **não executar as correções**.

Manter [[1 - Planejamento/Camara 2026 - Auditoria integral por materia/00 - Indice e estado|índice e estado]] após cada bloco: matéria atual, arquivos efetivamente lidos, áreas pendentes, achados críticos e próximos passos. Registrar somente fatos efetivamente verificados. Para retomar em outro chat, usar [[1 - Planejamento/Camara 2026 - Auditoria integral por materia/01 - Prompt de continuidade|prompt de continuidade]].

**Estado inicial (11/11/2026):** plano protocolado; **nenhuma matéria auditada sob este novo procedimento**. Os registros prévios de ciclos não substituem esta auditoria.
