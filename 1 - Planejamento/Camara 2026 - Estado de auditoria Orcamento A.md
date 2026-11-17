---
type: estado-auditoria-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-16
updated: 2026-11-16
---

# Câmara 2026: estado da auditoria de Orçamento Público, frente A

**Propriedade:** Planejamento e processo legislativo orçamentário. Os 7 `articleIds` abaixo são exclusivos desta frente. Estado inicial **a verificar** significa ausência de certificação individual neste registro, não ausência de revisões anteriores. Conferir `main`, histórico e evidências antes de classificar. Não editar o estado de outras frentes.

| articleId | Artigo | Estado | Evidências (SHA, fontes, checks, Pages, ressalvas) |
| :--- | :--- | :--- | :--- |
| `art-f6cfe9fbcc764554` | `01 - orcamento publico e ciclo orcamentario.md` | Leitura de linguagem simples aprofundada; publicação e certificação integral pendentes | Commits de linguagem na `main`: `c51964283fc6211b2430765f099fc916ec9437f1`, `c094ef26d189c1f738cea0421ebfe835170fbf8a`, `6e6818298d72793f49ad993a39a59fceb45b5337`. Cotejo pontual com CF art. 166 e Lei 4.320/1964 arts. 58–64. Tabelas, quatro gabaritos e seção final revistos textualmente. Faltam auditoria externa integral dos vínculos e artefatos associados, CI e conteúdo servido no Pages. Não certificado. |
| `art-c301f2c741504403` | `02 - ppa ldo e loa.md` | Revisão didática e linguagem simples avançada; não certificado | Commits `b34eabfad39cb2a7d29c40e2cb2a481b394a4bed` e `bc5a80650b1b091787f1d8647add766686dc0efa` na `main`; esferas, estatais, metas e riscos, MTO, prazos, princípio da exclusividade e três gabaritos revistos. Flashcards vinculados (8/8) com headings existentes; catálogo v2 inclui ID. Falta cotejo jurídico integral, segunda leitura final, CI e Pages. |
| `art-74d90e9fa1b3452c` | `02a - esferas da loa e estatais dependentes.md` | Linguagem simples em andamento; não certificado | Commit `fb7592df1459bbd591c165317d95ca5b458aef57` na `main`: seis revisões em conceitos de esferas, GND, capital, transferência e três gabaritos C/E. ID preservado; nenhum flashcard vinculado diretamente ao ID encontrado no JSON consultado. Falta verificar cobertura semântica do glossário, fontes jurídicas, todos os links e CI/Pages. |
| `art-a2f47c0d6e184e93` | `03 - principios orcamentarios e vedacoes constitucionais.md` | Revisão de linguagem simples parcial; não certificado | Commits `1b6387a27cf66572241f652dfa90c5041416d419` e `14f9d5cf0a4ce5f9d84bec8ab51ae456af612ec2`. Cotejo pontual CF art. 167 e Lei 4.320/1964, arts. 20 e 22; corrigidos conceitos de ingresso extraorçamentário, reabertura de créditos e três C/E. Nove flashcards apontam para headings existentes; um diagrama Mermaid aguarda teste visual. CI/Pages e revisão jurídica integral pendentes. |
| `art-4be219d8f750ac63` | `12 - elaboracao da proposta orcamentaria orgaos e etapas.md` | Linguagem simples em andamento; não certificado | Commit `b8ce8bcc00d63b1dbfc17c5dfd66f9083eda9ca2` na `main`: nove correções sobre atores e etapas, valores qualitativos/quantitativos, execução e quatro gabaritos. ID presente no catálogo v2; zero flashcards com `note.articleId` correspondente no JSON consultado. Faltam segunda leitura integral, cotejo jurídico completo, auditoria dos links, CI e Pages. |
| `art-d8f21b70c49e563a` | `13 - tramitacao legislativa das leis orcamentarias.md` | Linguagem simples parcial; não certificado | Commit `e1d55f14a687d743982266b872d9bd47f4eb394b`: sete revisões sobre tramitação, autuação, relatórios, atos após aprovação e três gabaritos C/E. ID no catálogo; nenhum flashcard diretamente ligado por `note.articleId`, sem Mermaid. Segunda leitura e cotejo jurídico integrais, CI e Pages pendentes. |
| `art-c917e4a2d63b508f` | `14 - comissao mista de orcamento composicao comites e competencias.md` | Linguagem simples parcial; não certificado | Commit `e21f4afcbbbf87154888a631b08660689969da75`: sete revisões na abertura, comitês, maioria absoluta, decisão terminativa e três gabaritos C/E. ID no catálogo; nenhum flashcard diretamente vinculado por `note.articleId`. Pendente cotejo jurídico integral, segunda leitura, CI/Pages. |

## Fechamento e retomada

Aplicar a matriz `1 - Planejamento/Camara 2026 - Coordenacao editorial Orcamento.md`, a publicação direta na `main` e o critério de **revisão integral concluída com ressalva visual** do `AGENTS.md`. Trabalhar um artigo por vez e registrar aqui evidências individuais reais, a correção integral e as pendências específicas de inspeção visual. Sem criar EPUB, sessões de estudo ou resultados fictícios. Não marcar como publicado sem evidências de CI e Pages pertinentes.

## Evidências da execução de 16/11/2026

- Artigo 01: leitura integral do Markdown original e edição pedagógica na seção de ciclo; arquivo atualizado diretamente na `main`, commit `4ba35667dfb7757532f628c63a047a458f433775`. A alteração não modifica outros artigos, catálogo, índice, banco de questões ou dados pessoais.
- O commit comprova somente a gravação do texto no repositório. **Sem evidência de checks e Pages correspondente, a certificação fica pendente**. Não atribuir a situação “revisão integral concluída com ressalva visual” nesta etapa.
- Fontes primárias para cotejo: Constituição (arts. 165 e 166), Lei 4.320/1964, Manual Técnico de Orçamento da SOF (edição 2026). Para o tema tramitação, conferir Regimento Comum e Resolução 1/2006-CN atualizada nos artigos 13–14.

## Gate obrigatório de linguagem simples (16/11/2026)

**Aplicação:** todos os sete `articleIds` exclusivos da frente A. A certificação de cada artigo requer três pareceres independentes: (1) correção jurídica e técnica, com cotejo de fontes primárias e condições/exceções; (2) qualidade didática, inclusive mecanismos, exemplos e C/E; (3) linguagem simples, mediante **segunda leitura integral do texto final**, do primeiro título às fontes, incluindo tabelas, diagramas e comentários de gabaritos. CI e publicação são verificações técnicas adicionais obrigatórias.

**Roteiro de segunda leitura:** identificar jargão não definido na primeira ocorrência, siglas não expandidas, frases e parágrafos com múltiplas condições sem percurso claro, sujeitos ocultos, dispositivo legal citado sem consequência explicada, classificação sem critério, conhecimento prévio exigido, repetição sem valor, diagramas sem interpretação e gabaritos sem explicação do mecanismo e de suas ressalvas. Integrar as correções às seções naturais, preservar `articleId`, subtítulos usados em `theoryRefs`, aliases e vínculos.

**Registro individual obrigatório antes de certificar:** declarar se a segunda leitura foi integral; anotar concretamente os problemas encontrados e corrigidos, eventual dependência de pré-requisito ainda não ensinado e os limites remanescentes. A revisão jurídica anterior ou CI verde não substituem essa leitura. **Nenhum dos sete artigos da tabela acima tem, por enquanto, essa verificação registrada como integralmente concluída**. A anotação é um requisito de continuidade, não uma certificação retroativa.

### Linguagem simples: artigo 01, execução complementar de 16/11/2026

- **Realizada integralmente? Não.** Leitura dirigida de abertura, núcleo conceitual, ciclo e competências; ainda não há segunda leitura completa de tabelas, todas as questões e fontes.
- **Lacunas reais corrigidas nas seções originais:** dotação definida já no exemplo introdutório; função do orçamento explicada antes de categorias; explicada a simultaneidade temporal das fases; empenho, liquidação e pagamento apresentados por função, sequência e exemplo; economicidade e efetividade traduzidas com contraexemplo; sujeitos da preparação e da iniciativa federal identificados. Preservados títulos, IDs e links.
- **Pré-requisitos e limites restantes:** conferir se primeira ocorrência de outras siglas e termos técnicos nos parágrafos posteriores é compreensível; explicar conceitos de LRF, limites de empenho e programação financeira quando necessários; revisar cada gabarito C/E e tabela, além de flashcards e glossário correspondentes. Conferir ainda fontes, links, verificações automatizadas e conteúdo servido no Pages. Esses itens são pendências, não ressalva visual admissível.
- **Evidência de mudança:** commit na `main` `c51964283fc6211b2430765f099fc916ec9437f1`.

### Continuidade da linguagem simples: artigo 01, segunda passagem textual

- **Escopo conferido:** todas as seções do artigo, duas tabelas conceituais, exemplos, distinções, itens C/E 1–4 e referências; ausência de blocos Mermaid no artigo 01. A revisão textual se estendeu à primeira ocorrência de siglas e termos relevantes e ao encadeamento das explicações. Não confundir esta leitura com validação de vínculos externos.
- **Alterações publicadas:** `c094ef26d189c1f738cea0421ebfe835170fbf8a` detalha crédito/dotação/caixa, PLOA, CMO, autorizações e comentários dos quatro gabaritos. `6e6818298d72793f49ad993a39a59fceb45b5337` define PPA/LDO/LOA na abertura, meta física, programação financeira, meta reprogramada e diferença entre áreas de conhecimento.
- **Conferência jurídica parcial:** art. 166 da Constituição (tramitação federal e parecer da comissão) e arts. 58 a 64 da Lei 4.320/1964 (empenho, liquidação e pagamento) cotejados em fontes oficiais. Necessário ampliar cotejo para todas as proposições antes do parecer jurídico integral.
- **Limitações restantes:** reconciliação sistemática de glossário, flashcards, catálogo, headings e `theoryRefs`; validação dos links, testes técnicos, CI e conferência do Pages no SHA mais recente. Esses controles impedem certificação e não equivalem à simples ressalva visual. Os demais seis artigos permanecem a verificar.

### Retomada de 16/11/2026: vínculos e artigo 02

- **Verificações estruturais dos artigos 01 e 02:** o catálogo v2 contém os dois `articleIds`. O `data/flashcards.json` contém dois cartões vinculados ao artigo 01 e oito vinculados ao artigo 02; **todos os dez referenciam headings que permanecem no Markdown atual**. Verificação documental de IDs e títulos, sem alterar arquivo compartilhado; isso não verifica todos os links, nem equivale à revisão semântica exaustiva dos cartões.
- **Artigo 02:** identificada dependência excessiva de artigo externo para compreender as esferas da LOA, distinção entre controle e dependência de estatal, metas e riscos fiscais e sequência do processo de envio/devolução. Inseridas oito explicações nas seções originais, com exemplos de escola, saúde e investimento estatal, além da definição de iniciativa, emenda e marcos do MTO. Commit `b34eabfad39cb2a7d29c40e2cb2a481b394a4bed`.
- **Fonte jurídica parcialmente cotejada:** Constituição, arts. 165–166 e ADCT art. 35; consultar também LRF art. 2º e art. 4º e MTO 2027 para validar integralmente as novas formulações. **Segunda leitura integral de linguagem simples do artigo 02: pendente.** Persistem testes e comprovação CI/Pages; nenhum artigo recebe ainda certificação.

### Continuação editorial da frente A: artigos 02 e 02a (16/11/2026)

- Artigo 02: revisão adicional de linguagem simples e precisão das explicações de dois itens C/E da seção final e do item sobre linha de base no MTO 2027. O texto explica agora o alcance do ADCT art. 35, § 2º, I, a exceção da LOA para créditos suplementares e a função distinta das projeções plurianuais. Commit `bc5a80650b1b091787f1d8647add766686dc0efa`. Não classificado como auditoria jurídica integral.
- Artigo 02a: revisão de abertura e classificação em três perguntas, explicação dos três sentidos de capital e comentários dos três itens C/E, com seis mudanças incorporadas em seções originais. Commit `fb7592df1459bbd591c165317d95ca5b458aef57`. Frontmatter `art-74d90e9fa1b3452c` mantido; o arquivo não contém blocos Mermaid. A busca exata por `note.articleId` no `data/flashcards.json` consultado retornou zero cartões; isso não comprova ausência de conceitos em cartões de outros artigos.
- **Não certificados:** falta a leitura integral final independente de linguagem simples, cotejo jurídico sistemático, validação dos links e `theoryRefs`, CI e conteúdo publicado do Pages. Não converter pendências técnicas ou jurídicas em mera ressalva visual.

### Artigo 03: auditoria parcial de linguagem simples

- **Segunda leitura integral:** pendente. Trechos corrigidos sobre universalidade, anualidade, remanejamento, vedações e comentários dos três itens C/E. Estão pendentes as demais tabelas e a legibilidade visual do diagrama Mermaid.
- **Vínculos conferidos:** artigo `art-a2f47c0d6e184e93` no catálogo v2; nove flashcards com `note.articleId` correspondente e headings existentes. As ligações foram conferidas por título e ID, sem avaliação semântica exaustiva dos cartões.
- **Condições de certificação pendentes:** cotejo jurídico integral das proposições, verificação de fontes, CI, GitHub Pages e visualização Mermaid nos dois temas. Nenhum artigo certificado por esta anotação.

### Artigo 12: leitura de linguagem simples e verificações de vínculos

- **Segunda leitura integral:** pendente. Foram revisadas as etapas de elaboração, distinções entre competências, proposta qualitativa/quantitativa e os três itens finais C/E, além do item sobre linha de base. Faltam verificação de todas as tabelas, referências e revisão jurídica completa.
- **Lacunas corrigidas:** conceitos físicos, programáticos e financeiros antes resumidos; referencial monetário sem definição; diferença entre valores propostos, aprovados e pagos; explicação excessivamente curta de empenho, liquidação e pagamento; gabaritos sem exemplo de erro de classificação. Correções nas seções existentes, sem mudar headings.
- **Vínculos:** frontmatter `art-4be219d8f750ac63` preservado e ID localizado no catálogo v2. O `data/flashcards.json` consultado não contém cartão com `note.articleId` igual ao ID, o que demanda avaliar cobertura ou vínculos indiretos. O artigo não tem bloco Mermaid.
- **Comprovação técnica e editorial pendente:** confrontar todas as normas (CF arts. 99, 127, 134, 165–166; ADCT art. 35; MTO 2027 e Lei 4.320/1964 art. 63) e validar CI, GitHub Pages e links. Não há certificação com mera ressalva visual.

### Artigo 13: revisão inicial de linguagem simples e técnica

- **Leitura integral de linguagem simples:** pendente. Alterados o núcleo explicativo, a sequência de recebimento e exame, definições de projeto/parecer/autógrafo/sanção/veto/promulgação/publicação e comentários dos três itens C/E. As demais seções e referências exigem segunda leitura.
- **Pontos corrigidos:** atos parlamentares sem definição, finalidade dos relatórios muito abstrata, distinção insuficiente entre apresentação e aprovação da lei, e justificativas telegráficas sobre emendas e regra específica da LDO. O texto não modifica headings nem IDs.
- **Vínculos:** `art-d8f21b70c49e563a` presente no catálogo v2; zero cartões ligados diretamente ao ID no JSON de flashcards consultado, sem inferir que conceitos estejam ausentes de cartões vinculados a outros artigos. Sem Mermaid.
- **Fontes e limitações:** confrontar integralmente Constituição arts. 57, 165 e 166 e a Resolução 1/2006-CN consolidada, em especial alterações de 2025; validar links, CI e Pages antes de certificar.

### Artigo 14: revisão de linguagem simples e atribuições da CMO

- **Segunda leitura integral:** pendente. Foram revisadas abertura, composição dos comitês, votação interna, caráter terminativo do parecer sobre informações do TCU e gabaritos dos três itens C/E; restam reexame integral das demais seções, tabelas e fontes.
- **Correções concretas:** definidas emenda e dotação na situação inicial; diferenciação entre relator, comitê e CMO; exemplo numérico para maioria absoluta; explicação de decisão terminativa com ressalva de recurso; gabaritos passaram a identificar expressamente erro de competência e exceção regimental. Heads, IDs e links preservados.
- **Vínculos e limites:** `art-c917e4a2d63b508f` no catálogo v2; zero cartões com `note.articleId` correspondente na versão consultada de flashcards, sem conclusão de que os conceitos não estejam contemplados em cartões de outros artigos. Sem Mermaid. Cotejar todos os requisitos da Resolução 1/2006-CN atualizada pela Resolução 1/2025-CN, CF arts. 70, 71, 165–166, e confirmar CI e GitHub Pages antes de qualquer certificação.

### Situação global após esta execução

- Os sete artigos de propriedade da frente A receberam alterações editoriais nesta sequência de execuções: 01, 02, 02a, 03, 12, 13 e 14.
- **Certificação editorial: zero de sete**. Uma correção publicada em `main` não substitui segunda leitura integral de linguagem simples, cotejo jurídico integral nem validação de CI/Pages. Sem EPUB e sem alterações nos artigos das frentes B e C.

### Retomada do artigo 01: fontes, linguagem e vínculos (16/11/2026)

- **Alteração verificada na `main`:** commit `a929778cadd17dddbf5f4a99e3fb878c8bfe7c87`, com definição de controle prévio, concomitante e posterior; distinção concreta entre controle interno e controle externo; exemplo corrigido de empenho, liquidação e pagamento. Mantidos `articleId`, headings e referências.
- **Cotejo jurídico realizado nesta etapa:** Constituição Federal arts. 165 e 166 (iniciativa do Executivo, exame da comissão mista, apreciação pelo Congresso); arts. 70 e 71 (controle externo); Lei nº 4.320/1964 arts. 2º, 34, 58, 62 a 65 e 75 a 77 (orçamento, exercício, estágios da despesa e momentos do controle). Fontes oficiais: `https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao` e `https://legis.senado.leg.br/norma/546169/publicacao/34620275`. O cotejo não cobre, por si, cada referência de SOF e LRF presente no artigo.
- **Vínculos estruturais:** os 12 documentos distintos referidos por wikilinks do artigo foram localizados na versão atual do repositório. As três âncoras explícitas em documentos de destino coincidem com seus subtítulos. Os dois cartões de flashcards vinculados ao `articleId` têm `note.section` correspondente a subtítulo existente; suas definições foram comparadas ao conteúdo do artigo. `articleId` consta no catálogo v2; artigo aparece no hub e no `index.md`. Sem alterações nos arquivos compartilhados.
- **Linguagem simples:** abertura, etapas, exemplos, duas tabelas principais e quatro comentários C/E já receberam revisão textual nas execuções da frente. A verificação de todas as ocorrências de terminologia, das fontes e dos materiais vinculados como auditoria independente integral ainda não foi certificada.
- **Bloqueios:** acesso ao `manifest.json` e ao site Pages ao vivo não retornou conteúdo verificável; não foi possível associar execução de CI de publicação ao SHA final. Falta cotejo integral de todas as fontes e teste no leitor publicado. Não atribuir certificação jurídica, técnica ou de publicação, nem usar apenas ressalva visual.

### Revisão dirigida LRF do artigo 01 (16/11/2026)

- **Evidência de alteração textual:** commit `564f37c66c15b71e7862db7fdbc61f9deff4b630` na `main`; quatro correções integradas às seções de execução, dotação, pegadinha e referências. Artigo mantém `articleId` e headings.
- **Normas confrontadas:** Lei Complementar nº 101/2000, arts. 8º e 9º: programação financeira e cronograma mensal após publicação dos orçamentos, limitação de empenho diante das condições fiscais e critérios da LDO; Lei nº 4.320/1964, arts. 40–43, 58–65 e 75–77, sobre créditos, estágios e controle. Texto oficial da Lei 4.320 disponível no Senado: https://legis.senado.leg.br/norma/546169/publicacao/34620275. Referência oficial à LRF: https://legis.senado.leg.br/norma/572856.
- **Problema concreto corrigido:** o leitor podia entender `limite de empenho` como redução automática da dotação ou confundir cronograma de desembolso com pagamento já realizado. Foram explicitados os sujeitos, o prazo do art. 8º, as condições gerais do art. 9º e as consequências na execução.
- **Certificação ainda pendente:** revisão integral independente final, validação completa da SOF/MTO e confirmação de CI e `manifest.json` servido por Pages para o commit final. A consulta pública ao manifesto não retornou conteúdo utilizável; essa ausência não é prova de falha no deploy. Não certificar por inferência.

### Cotejo adicional SOF: artigo 01 (16/11/2026)

- **Lacuna jurídica e didática concreta encontrada:** o artigo mencionava que a captação do realizado físico no SIOP depende de liquidação, mas não explicava a diferença entre entrega observável, registro do realizado físico e o regime de restos a pagar não processados.
- **Fonte primária conferida:** SOF, *Orientador do Acompanhamento Físico-Financeiro do Orçamento*, atualizado em 23/10/2026, itens 4.3.1 a 4.3.2 e 4.5.1; URL https://www1.siop.planejamento.gov.br/siopdoc/doku.php/acompanhamento_orcamentario:orientador_acompanhamento_orcamentario. Item 4.3.1 exige liquidação financeira para computar realizado físico do período; item 4.5.1 exige pagamento dos restos a pagar não processados para o registro físico correspondente. O critério de produto/unidade permanece no item 4.3.2.
- **Correção publicada na `main`:** commit `fbf26f0f2d8705d271110954fad3c32d20b526f0` no artigo 01, dentro da seção já existente de programação física. Explicados momento, sujeitos e exceção operacional com exemplo; preservados os headings e `articleId`.
- **Verificação de publicação:** a consulta pública à URL presumida `https://leorruas.github.io/concursos/manifest.json` e à raiz não retornou conteúdo acessível pela ferramenta web. O domínio e o caminho não foram confirmados pelo workflow nesta execução. Não há prova de falha, aprovação do deploy ou sincronização do site; continuar sem certificar.
- **Pendências:** cotejo jurídico e técnico de todos os dispositivos restantes, segunda leitura completa independente, CI do SHA final e manifesto ao vivo efetivamente confirmado. O commit, por si, não atende ao contrato de publicação.

### Segunda leitura específica SIOP: artigo 01, 16/11/2026

- **Problema identificado:** o parágrafo de acompanhamento físico concentrava condições diferentes (liquidação e restos a pagar) em uma frase extensa e usava termos antes de contextualizá-los. As referências da seção final também não discriminavam LRF arts. 8º–9º, Lei 4.320 arts. 40–43, 58–65 e 75–77, nem os itens completos do orientador da SOF.
- **Correção confirmada em `main`:** commit `122bee71beb6f9eaeabad438b6cde15061c7a06d`. A seção existente foi reestruturada em explicação de entrega versus registro, despesas do exercício, restos a pagar e exemplo de cinco escolas. Fontes atualizadas sem alterar `articleId` ou headings.
- **Fonte primária:** Orientador SOF atualizado em 23/10/2026, itens 3.5.1–3.5.2, 4.3.1–4.3.2 e 4.5.1, confirmado na fonte pública. Condições descritas como regras de captação do SIOP, não como equivalência entre pagamento e entrega. URL: https://www1.siop.planejamento.gov.br/siopdoc/doku.php/acompanhamento_orcamentario:orientador_acompanhamento_orcamentario.
- **Critérios individuais:** correção jurídica/técnica ainda não certificada em sua totalidade; qualidade didática revisada em seções e C/E; linguagem simples ampliada no texto final, mas segunda leitura integral independente ainda por atestar após estabilização. Persistem confirmação do workflow de publicação do último commit, manifesto e busca do Pages ao vivo e teste visual. A consulta web direta ao endereço presumido de Pages não retornou resposta verificável; isso não comprova falha de deploy.
