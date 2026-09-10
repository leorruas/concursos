---
title: "Auditoria editorial do vault"
type: "auditoria"
status: "ativo"
created: 2026-09-10
updated: 2026-09-10
scope: "comunicacao"
---

# Auditoria editorial do vault

Esta auditoria usa como referência o [[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]. O objetivo é escolher onde a revisão gera maior retorno para prova, sem reescrever notas fortes por simples uniformização. A auditoria cresce por lotes e separa qualidade editorial, confiabilidade e prioridade estratégica.

## Critérios

Cada nota recebe três leituras independentes. **Qualidade editorial** avalia se o artigo permite compreender o conceito, suas estruturas internas, fronteiras, relações e mecanismos de cobrança. **Confiabilidade** avalia se classificações, regras, autores e afirmações normativas possuem base adequada e se simplificações perigosas estão sinalizadas. **Prioridade estratégica** considera editais ativos, reutilização entre concursos, peso da disciplina, proximidade da prova e evidências em `data/erros-recorrentes.json`.

A auditoria não promove inferências a fatos e não corrige conteúdo sem fonte adequada. Tamanho não é sinônimo de qualidade: uma nota longa pode ser menos segura para revisão que uma nota curta quando mistura autores, classificações ou regras profissionais sem proveniência.

## Lote piloto

| Nota | Qualidade editorial | Confiabilidade | Prioridade | Diagnóstico | Próxima ação |
|---|---|---|---|---|---|
| [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]] | forte | boa_base | alta | Conteúdo amplo e já enriquecido por erros reais. O principal risco era recuperação de subtemas concentrados em nota longa. | Aguardar evidência da busca multi-edital antes de alterar estrutura. |
| [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]] | forte | verificar | alta | Cobre contrapositiva, recíproca, inversa, equivalência disjuntiva, negação e De Morgan. Metadados e relações foram refinados em 10/09/2026. | Verificar pontos formais e fontes antes de consolidar confiabilidade. |
| [[3 - Materias/Portugues/04 - regencia|Regência verbal e nominal]] | forte após revisão | boa_base | média-alta | Revisada tecnicamente em 10/09/2026. Foram corrigidas simplificações sobre `chegar em` e sobre a regência de `comunicar`; foram adicionadas fronteiras, relações e heurísticas. | Preservar e validar por questões. |
| [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]] | forte | boa_base | alta | Estrutura madura: Schein, Kunsch, modalidades, ativos intangíveis, fronteiras conceituais e heurísticas. | Preservar como benchmark. |
| [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]] | forte após revisão | boa_base | alta | Fronteiras entre diagnóstico, objetivo, estratégia, tática, indicador e avaliação foram explicitadas, com relações a pesquisa, públicos e mídia. | Preservar e validar por questões de classificação. |

## Lote 2: Comunicação

### Diagnóstico geral

A disciplina está mais madura do que a simples contagem de seções sugeriria. O principal problema não é ausência de conteúdo, mas **heterogeneidade epistemológica**. Algumas notas são boas sínteses de prova; outras incorporaram modelos, história, prática profissional, UX, marketing ou legislação sem deixar claro o que é definição consolidada, modelo de um autor, aproximação didática ou aplicação construída para o concurso.

A revisão de Comunicação deve, portanto, priorizar três riscos: taxonomias sem autoria, afirmações absolutas sem fonte normativa e artigos que acumulam assuntos demais e passam a competir com notas especializadas já existentes.

| Nota | Qualidade editorial | Confiabilidade | Prioridade | Diagnóstico | Próxima ação |
|---|---|---|---|---|---|
| [[3 - Materias/Comunicacao/01 - comunicacao organizacional|01 Comunicação organizacional]] | forte | boa_base | alta | Benchmark atual; boas fronteiras entre modalidades e ativos intangíveis. | Preservar; conferir proveniência quando houver nova revisão. |
| [[3 - Materias/Comunicacao/02 - comunicacao publica|02 Comunicação pública]] | forte | verificar_autor | alta | Compacta e útil, mas os quatro eixos e o modelo de apropriação são atribuídos a Jorge Duarte e devem permanecer fiéis à fonte de referência. | Conferir a nota contra a referência de Duarte e ajustar somente se houver divergência. |
| [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia|03 LAI, LGPD e transparência]] | forte_muito_longa | verificar_legal | alta | Boa cobertura e muitas pegadinhas, mas reúne legislação, transparência, participação, accountability, agentes, bases legais e sanções. Em matéria jurídica, pequenas simplificações podem mudar a resposta. | Auditar artigo por artigo de lei e separar claramente literalidade legal, síntese e aplicação comunicacional. Não dividir antes de testar navegação. |
| [[3 - Materias/Comunicacao/04 - criterios de noticiabilidade|04 Critérios de noticiabilidade]] | forte | boa_base | alta | Boa distinção entre noticiabilidade, veracidade, fato, notícia, opinião e release; relações bem estabelecidas. | Preservar. Acrescentar autoria apenas se edital/prova exigir taxonomia específica. |
| [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|05 Lead, pirâmide invertida e storytelling]] | precisa_refinamento | verificar | alta | A nota mistura apuração, fontes, lead, storytelling, gêneros e retórica. Há duplicação com as notas 13 e 14 e formulações fortes, como tratar storytelling como lógica contrária à pirâmide invertida e atribuir predominância rígida a logos/ethos/pathos. | Revisar cedo. Reduzir sobreposição e distinguir técnica narrativa, estrutura textual, gênero e apuração. |
| [[3 - Materias/Comunicacao/06 - comunicacao digital|06 Comunicação digital]] | forte_muito_longa | verificar | alta | É uma das notas mais extensas do vault e reúne métricas, SEO, busca, Service Design, arquitetura da informação, redação web e outros recortes. Há conteúdo útil, mas o volume dificulta saber qual conceito é canônico em cada tema. | Fazer auditoria de escopo e navegação. Identificar trechos que devem apenas linkar para notas especializadas antes de qualquer divisão. |
| [[3 - Materias/Comunicacao/07 - gestao de crises|07 Gestão de crises]] | forte | verificar | média-alta | Estrutura de antes/durante/depois e tensão velocidade × precisão são úteis. Alguns absolutos profissionais, como condutas “terminantemente proibidas” ou procedimentos “mandatórios”, precisam de fonte ou reformulação como boa prática. | Verificar absolutos e terminologia; preservar estrutura. |
| [[3 - Materias/Comunicacao/08 - assessoria de imprensa|08 Assessoria de imprensa]] | forte | verificar | alta | Boa diferenciação de release, clipping, media training e autonomia editorial. Há regras profissionais apresentadas como universais, especialmente sobre off, clipping e “sem comentários”. | Conferir com a referência de Jorge Duarte e transformar boas práticas em regras apenas quando a fonte sustentar. |
| [[3 - Materias/Comunicacao/09 - comunicacao interna|09 Comunicação interna]] | forte | verificar_autores | alta | Boas fronteiras entre comunicação interna, endomarketing, clima e cultura. A nota incorpora Schein e Kotter sem desenvolver a proveniência de cada estrutura. | Atribuir explicitamente modelos e verificar a formulação de Kotter e endomarketing. |
| [[3 - Materias/Comunicacao/10 - linguagem simples|10 Linguagem simples e acessibilidade digital]] | forte | verificar_normas | alta | Boa distinção entre linguagem simples e acessibilidade, com WCAG, eMAG e NBR. Como depende de padrões técnicos, versão e escopo precisam ser precisos. | Conferir WCAG/eMAG/NBR e distinguir recomendação de acessibilidade, exigência normativa e heurística editorial. |
| [[3 - Materias/Comunicacao/11 - etica em comunicacao|11 Ética em comunicação]] | precisa_refinamento | verificar | média | Conceitos úteis, porém muito normativos e baseados quase só em princípios gerais; “as alternativas corretas sempre priorizam” é formulação excessiva. | Ancorar em códigos, legislação ou autores e remover universais de banca não demonstrados. |
| [[3 - Materias/Comunicacao/12 - producao editorial e design|12 Produção editorial e design]] | precisa_reestruturacao | verificar | alta | Artigo enciclopédico: processo editorial, cor, resolução, grid, tipografia, impressão, visualização de dados, audiovisual e história do design convivem na mesma nota. Há afirmações históricas e técnicas que pedem fontes específicas. | Prioridade alta de arquitetura. Criar mapa interno de subtemas, conferir simplificações técnicas e decidir o que merece nota própria somente depois. |
| [[3 - Materias/Comunicacao/13 - generos jornalisticos|13 Gêneros jornalísticos]] | precisa_refinamento | verificar_autor | alta | A classificação é funcionalmente boa para prova, mas taxonomias de gêneros variam por autor; a posição da reportagem entre informativo e interpretativo não deve aparecer como classificação neutra universal. | Identificar autor/modelo de referência e organizar Autor → categorias → fronteiras → divergências. |
| [[3 - Materias/Comunicacao/14 - entrevista jornalistica|14 Entrevista jornalística]] | forte | verificar_autor | média-alta | Boa distinção entrevista como técnica × gênero. A tipologia informativa/opinativa/interpretativa/perfil precisa ser atribuída à fonte correspondente. | Conferir autoria da classificação e preservar as fronteiras de prova. |
| [[3 - Materias/Comunicacao/15 - publicos e stakeholders|15 Públicos e stakeholders]] | precisa_refinamento | verificar_autores | alta | A definição clássica de stakeholder é reconhecível, mas “público-alvo é uma subdivisão dos stakeholders” é simplificação discutível; a matriz poder × interesse também pede autoria/modelo. | Revisar Freeman e modelo de mapeamento; separar stakeholder, público, público-alvo e segmentação sem equivalências automáticas. |
| [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|16 Planejamento de comunicação]] | forte após revisão | boa_base | alta | Revisado no lote piloto. | Validar por questões. |
| [[3 - Materias/Comunicacao/17 - pesquisa em comunicacao|17 Pesquisa em comunicação]] | forte | verificar_metodologia_legal | alta | Boa complementaridade quali × quanti e relação com planejamento. Parte de LGPD e anonimização precisa manter precisão jurídica; “quantitativa exige amostra representativa” não vale para todo desenho quantitativo. | Refinar limites metodológicos e remeter detalhes jurídicos à nota de LGPD. |
| [[3 - Materias/Comunicacao/18 - fact checking e desinformacao|18 Fact-checking e desinformação]] | precisa_refinamento | verificar_autor | média-alta | A taxonomia misinformation/disinformation/malinformation está correta como família conceitual, mas deve ser atribuída; o método de checagem e afirmações sobre IA precisam de fonte e escopo. | Atribuir Wardle/Derakhshan ou referência adotada e separar taxonomia, processo de checagem e aplicações de IA. |
| [[3 - Materias/Comunicacao/19 - marketing institucional e branding|19 Marketing institucional e branding]] | forte_muito_longa | verificar_autores | alta | Reúne Kotler, 4Ps/7Ps, segmentação, persona, posicionamento, identidade/imagem/reputação, brand equity, arquitetura de marcas e funil. Algumas equivalências com Design de Serviços são aproximações didáticas, não identidades conceituais. | Auditar por autor e remover equivalências fortes; considerar modularização futura por blocos conceituais. |
| [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia|20 Campanhas e planejamento de mídia]] | forte | verificar_modelos | alta | Owned/Paid/Earned, PESO, briefing, pré/pós-teste, ROI/ROAS e capacidade de entrega estão bem conectados, mas diferentes modelos são apresentados sem autoria consistente. | Atribuir PESO e demais modelos; alinhar fronteiras com a nota 16 para evitar duplicação. |
| [[3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa|21 Teorias do jornalismo e história da imprensa]] | precisa_refinamento | verificar_autores | alta | A tabela comparativa é útil, mas a frase de que as teorias “não competem” e a linha `Realidade → Espelho → Gatekeeping → Newsmaking → Framing → Agenda Setting → Espiral do Silêncio` transformam teorias distintas em etapas de um processo, o que é didático demais e pode induzir erro. A fórmula simplificada da agenda-setting também pede cuidado. | Primeira revisão de conteúdo do Lote 2. Reorganizar por autor/pergunta teórica e remover a falsa cronologia entre teorias. |

### Ordem de intervenção em Comunicação

A auditoria indica quatro frentes, não uma revisão sequencial de 01 a 21.

**Prioridade A, risco conceitual:** 21 Teorias do jornalismo; 05 Lead/pirâmide/storytelling; 13 Gêneros jornalísticos; 15 Públicos e stakeholders. São notas em que uma simplificação de taxonomia ou relação entre conceitos pode produzir distrator plausível.

**Prioridade B, risco por escopo excessivo:** 12 Produção editorial e design; 06 Comunicação digital; 19 Marketing institucional e branding; 03 LAI/LGPD/transparência. O objetivo não é cortar conteúdo, mas determinar núcleos canônicos, links e fronteiras antes que novas expansões aumentem a mistura.

**Prioridade C, checagem de fonte/modelo:** 02 Comunicação pública; 07 Gestão de crises; 08 Assessoria de imprensa; 09 Comunicação interna; 10 Linguagem simples; 14 Entrevista; 17 Pesquisa; 18 Fact-checking; 20 Campanhas. Em geral são boas notas que precisam mais de proveniência e limites do que de crescimento.

**Preservar:** 01 Comunicação organizacional, 04 Critérios de noticiabilidade e 16 Planejamento de comunicação estão maduros o suficiente para não justificar reforma agora.

## Leitura transversal

O piloto confirmou que qualidade da nota e prioridade de estudo não são a mesma coisa. O Lote 2 acrescenta outra distinção: **amplitude também não é maturidade**. As notas maiores de Comunicação frequentemente nasceram de acúmulos sucessivos e hoje precisam de arquitetura e proveniência, não de mais conteúdo.

O padrão atual revela ainda inconsistência histórica entre notas criadas sob prompts diferentes. Algumas usam `Como isso aparece em prova`, outras `Como a banca cobra`; algumas têm `Heurísticas`, outras `Notas de raciocínio`. Isso não deve provocar reforma mecânica. A auditoria verifica função cognitiva, não correspondência literal de títulos.

## Sinais multi-edital já existentes

`data/edital-itens.json` usa `concursoId` e `notaPath`, permitindo que concursos diferentes reutilizem a mesma nota. `data/provas.json` separa provas e bancas, incluindo FGV e Cebraspe. A evolução do vault deve aproveitar essa estrutura em vez de criar conhecimento duplicado por concurso.

A busca web passou a usar essas relações em 10/09/2026. Um item de edital contribui para a recuperação da nota apontada por `notaPath`, independentemente do concurso atualmente selecionado na interface. Assim, vocabulários diferentes de editais podem levar ao mesmo artigo canônico.

## Fila de revisão

### Lote 1: encerrado

Conectivos, Equivalências, Regência, Comunicação organizacional e Planejamento de comunicação foram usados como piloto. Regência e Planejamento foram revisados; Comunicação organizacional foi preservada como benchmark; Conectivos aguarda evidência da busca; Equivalências ainda pede verificação formal/fonte.

### Lote 2: Comunicação em execução

A auditoria estrutural está concluída. A primeira revisão de conteúdo deve ser [[3 - Materias/Comunicacao/21 - teorias do jornalismo e historia da imprensa|Teorias do jornalismo e história da imprensa]], seguida de [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|Lead, pirâmide invertida e storytelling]]. Depois, revisar taxonomias em Gêneros e Públicos/Stakeholders. Somente então atacar os artigos enciclopédicos.

### Lote 3: matérias reaproveitáveis entre concursos

Auditar Direito Constitucional, Direito Administrativo, Administração Pública, Administração Geral e Informática. A prioridade deve crescer quando novos editais mapearem os mesmos conceitos, evitando reescrita específica para cada órgão.

### Lote 4: baixa cobertura atual

Auditar matérias com poucas notas ou notas-hub muito curtas, como Inglês e Redação, distinguindo ausência real de conhecimento consolidado de matérias que funcionam melhor por prática do que por artigos teóricos extensos.

## Busca: baseline e progresso

O primeiro incremento foi implementado em `web/06-search.js` em 10/09/2026. A busca normaliza acentos e caixa, trabalha com múltiplos termos e calcula relevância por título real, título do arquivo, cabeçalhos H2/H3, matéria e corpo. A ordenação deixou de depender apenas de ocorrência literal.

O segundo incremento também foi implementado em 10/09/2026. Os itens de `data/edital-itens.json` ligados à `notaPath` agora entram como campo de busca com peso próprio. A recuperação não fica presa ao concurso selecionado: o objetivo é fazer o vocabulário de qualquer edital cadastrado conduzir ao conhecimento canônico correspondente.

Quando a correspondência existir apenas no edital, o trecho de resultado informa o código e a descrição do item que produziu a relação. Isso permite distinguir um acerto por conteúdo textual de um acerto por mapeamento editorial.

Antes de adicionar fuzzy search ou `concept_id`, manter um conjunto pequeno de consultas de referência:

| Consulta | Resultado esperado entre os primeiros | Estado atual esperado |
|---|---|---|
| `condição necessária` | Conectivos lógicos | conteúdo da nota |
| `contrapositiva` | Equivalências e negações lógicas | conteúdo da nota |
| `lógica sentencial` | Conectivos lógicos | mapeamento TCDF `P.03` |
| `G3.1` | Conectivos lógicos | mapeamento Dataprev `G3.1` |
| `cultura organizacional` | Comunicação organizacional e Comunicação interna | conteúdo + mapeamento de edital |
| `eficácia efetividade` | Planejamento de comunicação | conteúdo da nota |
| `crase cidade` | Regência verbal e nominal | conteúdo da nota revisada |

Essas consultas funcionam como teste de regressão da busca. O objetivo é medir relevância, não apenas verificar se algum resultado existe.

## Próxima execução

Revisar `21 - teorias do jornalismo e historia da imprensa.md` sem expandir o escopo. O objetivo é substituir a falsa cronologia entre teorias por uma arquitetura `autor/teoria → pergunta → mecanismo → limite → confusão provável`, preservar as comparações úteis e marcar simplificações didáticas. Depois, fazer o mesmo tipo de limpeza em `05 - lead piramide invertida e storytelling.md`.

Na busca, não adicionar fuzzy search ainda. Primeiro observar consultas reais e decidir se aliases ou índice pré-compilado resolvem lacunas concretas.