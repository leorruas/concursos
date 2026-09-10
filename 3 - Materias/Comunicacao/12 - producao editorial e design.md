---
title: "Produção editorial e design"
type: "conceito"
status: "ativo"
created: 2026-07-20
updated: 2026-09-10
---
# Produção editorial e design

O bloco de produção editorial, design e audiovisual reúne técnicas diferentes, mas ligadas por uma mesma finalidade: **transformar conteúdo em uma forma visual, gráfica ou audiovisual adequada ao suporte, ao público e à finalidade comunicacional**. Para prova, o ganho não está em decorar softwares isolados, e sim em distinguir níveis que a FGV costuma misturar: planejamento editorial, projeto gráfico, editoração, pré-impressão, produção gráfica, princípios de design, visualização de informação e linguagem audiovisual.

A prova-espelho da Dataprev de 2024 cobrou diretamente **classificação tipográfica** e **sangria**. Em provas recentes de comunicação visual e design, a FGV também cobrou RGB × CMYK, acabamentos gráficos e princípio da proximidade. Isso torna especialmente importantes as fronteiras técnicas desta nota.

## 1. Produção editorial e gráfica

### 1.1 Planejamento editorial, projeto gráfico, editoração e produção

Essas etapas pertencem ao mesmo fluxo, mas não são sinônimas.

```text
Planejamento editorial → Projeto gráfico → Editoração/diagramação → Pré-impressão/fechamento → Produção gráfica ou publicação digital
```

**Planejamento editorial** define finalidade, público, linha editorial, periodicidade, suporte, volume de conteúdo, responsabilidades e fluxo de aprovação. É a camada estratégica do produto editorial.

**Projeto gráfico** transforma essas definições em sistema visual: formato, grid, margens, hierarquias, famílias tipográficas, paleta, estilos de imagens e padrões recorrentes.

**Editoração eletrônica/diagramação** aplica o projeto gráfico ao conteúdo concreto, página por página ou tela por tela, articulando textos, imagens, tabelas e demais elementos. Adobe InDesign é uma ferramenta típica, mas a definição não depende de um software específico.

**Pré-impressão/fechamento** verifica se o arquivo está tecnicamente adequado para reprodução: sangria, resolução das imagens, espaços de cor, fontes, transparências, marcas e padrão de PDF, de acordo com o fluxo da gráfica.

**Produção gráfica** é a etapa de materialização do impresso, envolvendo processo de impressão, suporte, tintas e acabamentos. Em produto exclusivamente digital, essa etapa é substituída pela preparação e publicação apropriadas ao meio digital.

> [!WARNING]
> **Planejamento não é diagramação.** Se a questão fala em definir público, periodicidade e linha editorial, está antes do projeto gráfico. Se fala em distribuir textos e imagens numa página concreta, está na editoração/diagramação.

### 1.2 Imagem raster/bitmap × vetor

Imagens **raster** são formadas por uma grade de pixels. Fotografias e pinturas digitais são exemplos típicos. Como possuem número finito de pixels, são **dependentes de resolução**: ampliar muito uma imagem sem dados suficientes reduz nitidez ou exige interpolação.

Gráficos **vetoriais** descrevem formas por pontos, linhas, curvas e relações geométricas. Em uso normal, podem ser redimensionados sem a pixelização típica do raster, porque os contornos são recalculados na saída. Isso não significa “escalabilidade infinita” em qualquer sistema, mas sim **independência de uma grade fixa de pixels**.

| Raster/bitmap | Vetor |
|---|---|
| grade de pixels | formas definidas matematicamente |
| fotografia, textura, pintura digital | logotipo, ícone, ilustração geométrica, diagrama |
| resolução dependente | resolução independente para formas vetoriais |
| JPEG, PNG, TIFF, PSD | SVG, AI, EPS e objetos vetoriais em PDF |

**PDF é um contêiner**, não sinônimo de vetor: pode reunir texto, formas vetoriais e imagens raster no mesmo arquivo.

### 1.3 RGB × CMYK

**RGB** é um modelo aditivo baseado em luz, usado em telas e outros dispositivos emissores. Vermelho, verde e azul são combinados em diferentes intensidades; valores máximos dos três canais produzem branco.

**CMYK** é o modelo usado na impressão em quatro cores de processo. Ciano, magenta, amarelo e preto são aplicados como tintas. A reprodução é subtrativa porque as tintas absorvem parcelas da luz refletida pelo suporte.

O canal **K** é o preto da separação de quatro cores, historicamente associado à *key plate*. Sua presença melhora densidade e neutralidade de pretos, reprodução de detalhes e eficiência do uso das tintas coloridas. É errado dizer que K significa *keylight*.

> [!IMPORTANT]
> **Gamut depende de dispositivo, tinta, papel e perfil de cor.** É comum que cores vistas em espaços RGB de tela não possam ser reproduzidas exatamente em determinada condição CMYK, mas não trate “RGB tem sempre gamut maior que CMYK” como lei abstrata independente de perfis.

Para uma peça impressa em processo CMYK, a preparação final deve considerar o perfil e as exigências da gráfica. Para conteúdo destinado a tela, o fluxo é normalmente RGB. Converter cedo demais para CMYK pode descartar cores que ainda seriam úteis durante a edição; por isso, fluxos profissionais frequentemente editam em RGB e fazem conversão controlada para a condição de impressão no fechamento.

### 1.4 PPI, DPI e resolução

**PPI (*pixels per inch*)** descreve a relação entre pixels de uma imagem raster e o tamanho físico em que ela será reproduzida ou interpretada. Uma fotografia de 3000 × 2000 pixels possui a mesma quantidade de informação raster independentemente do número de PPI gravado no metadado; o PPI passa a importar quando se relaciona essa quantidade de pixels a um tamanho físico de saída.

**DPI (*dots per inch*)** se refere aos pontos físicos produzidos por um dispositivo de saída, como uma impressora. PPI e DPI podem estar relacionados num fluxo de impressão, mas não são sinônimos.

A regra “web = 72 PPI” é uma simplificação histórica perigosa. Para exibição digital, importam sobretudo **dimensões em pixels**, densidade física do dispositivo, escala da interface e forma como o navegador/aplicativo exibe a imagem. O valor 72 gravado como metadado não cria qualidade visual por si só.

Para impressão de leitura próxima, **300 PPI no tamanho final** é uma referência comum para imagens fotográficas de alta qualidade, mas não é uma lei universal. Distância de observação, método de impressão, lineatura, tipo de imagem e exigência da gráfica mudam a densidade necessária.

### 1.5 Sangria, margem de segurança e marcas

**Sangria (*bleed*)** é a extensão de fundos, imagens ou outros elementos para além da linha de corte final. Ela compensa pequenas variações de impressão e acabamento e evita filetes brancos indesejados nas bordas.

A sangria comercial costuma ser configurada em torno de **3 mm**, mas o valor deve ser confirmado com o fornecedor. A prova Dataprev 2024 descreveu exatamente esse conceito ao perguntar pela área extra além da linha de corte.

**Margem de segurança** é outra coisa: mantém textos, logotipos, QR codes e elementos essenciais afastados do corte para evitar perda acidental. Sangria ultrapassa o corte; margem de segurança recua para dentro dele.

**Marcas de corte** indicam onde o material será aparado. **Marcas de registro** ajudam no alinhamento das separações; barras de cor e outras marcas podem apoiar controle de impressão. Nem todo fornecedor exige que o designer insira manualmente todas as marcas, portanto a especificação da gráfica prevalece.

### 1.6 PDF/X, fontes e preflight

Um PDF comum pode conter problemas de impressão, como imagem de baixa resolução, fonte ausente ou espaço de cor inadequado. A família **PDF/X** estabelece requisitos voltados à troca de arquivos gráficos profissionais. Em fluxos atuais, **PDF/X-4** é uma opção comum, mas o padrão correto deve seguir a gráfica e a cadeia de produção.

**Incorporar fontes** no PDF preserva os recursos tipográficos necessários para a reprodução. **Converter texto em contornos/curvas** é uma operação diferente: transforma glifos em formas vetoriais. Pode ser útil em fluxos específicos, mas elimina propriedades de texto e não deve ser tratado como sinônimo de incorporação de fontes nem como procedimento obrigatório universal.

**Preflight** é a checagem técnica do arquivo antes da saída. Pode verificar fontes, imagens de baixa resolução, overset text, espaços de cor, transparências, sangria e outros requisitos.

### 1.7 Papel, impressão e acabamentos

Na produção gráfica, suporte e acabamento mudam aparência e função do impresso. **Papel couché** possui revestimento que produz superfície mais lisa e menor absorção, favorecendo reprodução de imagens e cores. Papéis não revestidos, como offset, absorvem tinta de modo diferente e produzem resultado visual distinto. **Gramatura**, expressa em g/m², mede massa por área e não deve ser confundida automaticamente com espessura.

Acabamentos comuns incluem:

- **laminação/plastificação**: película aplicada à superfície para proteção e acabamento;
- **verniz**, inclusive localizado/UV: camada de acabamento que pode proteger e destacar áreas específicas;
- **hot stamping**: aplicação de película, frequentemente metálica, por calor e pressão;
- **relevo/baixo-relevo**: deformação do suporte para criar volume;
- **corte especial/faca**: recorte em formato não obtido apenas pelo refile reto;
- **vinco**: marca que orienta dobra e reduz risco de quebra do material.

A FGV costuma explorar a finalidade física do acabamento, oferecendo técnicas reais aplicadas ao objetivo errado.

## 2. Design editorial, tipografia e hierarquia

### 2.1 Grid

**Grid** é um sistema estrutural de colunas, margens, módulos e linhas de referência que ajuda a organizar elementos da página. Sua função não é decorar, mas produzir consistência, alinhamento, ritmo e previsibilidade.

**Grid × template:** grid é a estrutura subjacente; template é um modelo já configurado que pode aplicar essa estrutura a páginas ou peças recorrentes.

### 2.2 Hierarquia visual

Hierarquia visual organiza a prioridade percebida dos elementos. Tamanho, peso, contraste, posição, cor e espaço em branco podem alterar a ordem de atenção. Se todos os elementos recebem o mesmo destaque, a hierarquia perde força.

Em prova, não confunda **hierarquia** com simples aumento de tamanho. Uma informação pode ganhar prioridade por posição, contraste ou isolamento mesmo sem ser o maior objeto da página.

### 2.3 Proximidade, alinhamento, repetição e contraste

Robin Williams popularizou no ensino de design os quatro princípios conhecidos pelo acrônimo **CRAP**: contraste, repetição, alinhamento e proximidade. Eles são heurísticas de composição, não leis naturais exclusivas de uma autora.

**Contraste** torna diferenças visíveis e ajuda a criar hierarquia. **Repetição** cria consistência e unidade. **Alinhamento** estabelece relações visuais por eixos comuns. **Proximidade** agrupa espacialmente elementos relacionados, dialogando com princípios perceptivos da Gestalt.

A FGV já cobrou diretamente o princípio da **proximidade**, descrevendo a necessidade de aproximar elementos relacionados para formar unidades visuais coerentes.

### 2.4 Espaço em branco

Espaço em branco ou espaço negativo é a área não ocupada entre elementos. Pode separar grupos, reduzir competição visual, aumentar legibilidade e destacar conteúdos. “Espaço vazio” não é automaticamente desperdício de área.

### 2.5 Alinhamento e texto justificado

Alinhamento cria eixos previsíveis. Em alfabetos lidos da esquerda para a direita, texto alinhado à esquerda preserva um ponto inicial estável para cada linha. Texto justificado pode funcionar muito bem em projetos editoriais quando composição, largura de coluna, hifenização e espaçamento são controlados; em condições ruins, pode formar espaços irregulares e “rios”. Portanto, “alinhado à esquerda é sempre mais acessível” é absoluto excessivo.

### 2.6 Tipografia: categoria, família, fonte e estilo

Em prova, a FGV pode misturar **categoria tipográfica** e **nome de família**.

- **Serifada (*serif*)**: possui serifas nas terminações dos traços. Exemplos de famílias incluem Garamond e Times New Roman.
- **Sem serifa (*sans serif*)**: não possui serifas. Helvetica é uma família sans serif.
- **Script**: imita ou se aproxima de escrita manual, caligráfica ou cursiva. Foi exatamente a categoria cobrada na prova Dataprev 2024.
- **Slab serif**: serifas espessas e geralmente pouco contrastadas; é uma categoria de serifada.
- **Didone/modern serif**: alto contraste entre hastes e serifas finas; Bodoni é exemplo clássico dessa tradição, não o nome da categoria “script”.
- **Display/decorativa**: projetada sobretudo para títulos e usos de destaque; não descreve uma única anatomia formal.

**Família tipográfica** reúne faces relacionadas. **Peso** e **estilo** incluem variações como regular, bold e italic. “Fonte” é frequentemente usado no cotidiano como sinônimo de família, mas tecnicamente pode designar uma instância específica de família + peso + estilo.

> [!NOTE]
> Na questão Dataprev 2024, `Helvetica`, `Bodoni` e `Script` não estavam no mesmo nível taxonômico: Helvetica e Bodoni são nomes de famílias/tradições tipográficas específicas; Script é categoria geral. Esse é um mecanismo clássico de distrator.

### 2.7 Legibilidade × leiturabilidade

**Legibilidade (*legibility*)** trata principalmente da facilidade de distinguir caracteres e palavras visualmente. Desenho dos glifos, tamanho, contraste, espaçamento e qualidade de reprodução influenciam esse aspecto.

**Leiturabilidade (*readability*)** trata da facilidade de acompanhar e compreender um texto em contexto. Organização, extensão dos períodos, vocabulário, estrutura, largura de linha e apresentação editorial podem contribuir para ela.

As duas dimensões se relacionam, mas não são equivalentes. Um texto pode usar caracteres muito nítidos e ainda ser linguisticamente difícil; também pode ser simples linguisticamente e estar visualmente mal apresentado.

## 3. Infografia e visualização da informação

### 3.1 Infográfico × gráfico isolado

**Gráfico** representa relações entre dados. **Infográfico** combina visualizações, texto, mapas, diagramas, ilustrações e outros recursos para explicar um tema ou processo. Um gráfico pode fazer parte de um infográfico sem ser, sozinho, um infográfico completo.

### 3.2 Escolha da visualização pela pergunta

A representação deve corresponder à tarefa analítica.

| Pergunta | Forma frequente |
|---|---|
| comparar categorias | barras |
| observar evolução temporal | linhas |
| observar composição de um todo | setores/pizza, com poucas categorias e total coerente |
| verificar associação entre duas variáveis | dispersão |
| observar distribuição de valores contínuos | histograma |
| consultar valores exatos | tabela |

Em **gráficos de barras**, o comprimento da barra codifica magnitude e, por isso, a linha de base em zero é normalmente necessária para evitar distorções. Essa regra não se transfere mecanicamente a todo tipo de gráfico. Em linhas temporais, por exemplo, um eixo truncado pode ser legítimo quando claramente indicado e analiticamente justificado.

**Correlação não demonstra causalidade.** Um gráfico de dispersão pode revelar associação sem explicar seu mecanismo causal.

### 3.3 Tufte: data-ink e chartjunk

Edward Tufte popularizou conceitos como **data-ink ratio** e **chartjunk**. A ideia geral é reduzir elementos gráficos que não ajudam a comunicar os dados e evitar efeitos decorativos que distorçam a percepção.

Esses princípios são heurísticas, não obrigação de tornar todo gráfico minimalista. Rótulos, linhas de referência, anotações e elementos contextuais podem ser necessários quando melhoram interpretação.

Distorções comuns incluem barras com eixo inadequadamente truncado, símbolos cuja área cresce desproporcionalmente ao valor representado, efeitos 3D e percentuais sem base de comparação.

### 3.4 Data storytelling

“Dados + narrativa + visualização” é uma síntese didática popular para **data storytelling**, não uma taxonomia legal ou universal. O ponto útil é que números precisam de contexto e a narrativa deve permanecer subordinada à evidência. Fonte, período, universo, metodologia e limitações não desaparecem porque a apresentação é visualmente persuasiva.

## 4. Audiovisual, roteiro e fotografia

### 4.1 Plano, enquadramento e composição

Na linguagem audiovisual, **plano** pode designar tanto o trecho contínuo captado entre cortes quanto, em classificações didáticas, a escala de enquadramento. Em concurso, observe qual sentido o enunciado utiliza.

Como escala de enquadramento:

- **plano geral** privilegia ambiente e contexto;
- **plano médio** equilibra personagem e entorno e é frequente em entrevistas;
- **close/plano fechado** aproxima rosto, expressão ou detalhe.

**Enquadramento** diz respeito à seleção e organização do que aparece dentro do quadro. A **regra dos terços** é uma heurística composicional, não uma lei obrigatória.

### 4.2 Continuidade, A-roll, B-roll e storyboard

**Continuidade** mantém coerência espacial, temporal e de ação entre planos. Um corte não é quebra de continuidade por si só; o problema surge quando a montagem cria inconsistência perceptível.

**A-roll** é o material principal, como entrevista ou apresentação. **B-roll** é material complementar usado para ilustrar, contextualizar ou cobrir visualmente a edição.

**Storyboard** é instrumento de planejamento visual anterior à gravação. Organiza cenas, enquadramentos e transições; não é software nem etapa de edição final.

### 4.3 Roteiro literário × roteiro técnico

**Roteiro literário** enfatiza ações, cenas, falas e progressão narrativa. **Roteiro técnico** acrescenta instruções de produção e realização, como planos, movimentos, som, grafismos e transições. A nomenclatura pode variar entre produtoras; para prova, a diferença central é narrativa/conteúdo × instruções técnicas de execução.

### 4.4 Vocabulário de TV e vídeo

**Off** é a narração ou fala ouvida sem que o emissor correspondente esteja aparecendo naquele momento. **Sonora** é o trecho de fala gravada de fonte/personagem inserido na matéria. **Cabeça** é a introdução feita pelo apresentador antes de uma reportagem. **Passagem** é o momento em que o repórter aparece no local, falando diretamente à câmera.

Esses termos pertencem à linguagem de produção jornalística audiovisual e podem variar em detalhes de redação entre manuais, mas suas funções básicas são distintas.

### 4.5 Podcast e produção sonora

Sem apoio visual, roteiro de áudio precisa tornar relações, personagens, dados e transições compreensíveis pela palavra e pelo som. Trilha, efeitos, silêncio, ritmo e ambientação sonora podem exercer função narrativa. O princípio não é “descrever tudo”, mas garantir que informação necessária à compreensão não dependa de algo que o ouvinte não pode ver.

### 4.6 Fotografia institucional e triângulo de exposição

Fotografia institucional pode documentar atividades, registrar memória, apoiar prestação de contas e expressar identidade. A escolha de enquadramento é editorial porque inclui alguns elementos e exclui outros, mas isso não torna toda fotografia institucional automaticamente manipuladora.

A exposição é influenciada por **abertura, tempo do obturador e ISO**.

**Abertura:** números f menores correspondem a aberturas maiores. Mantidas as demais condições, aberturas maiores deixam entrar mais luz e tendem a reduzir a profundidade de campo. Profundidade de campo também depende de distância de foco, distância focal, tamanho do sensor e outros fatores; portanto `f/2.8 = fundo desfocado` não é regra absoluta isolada.

**Obturador:** tempos mais curtos ajudam a congelar movimento; tempos mais longos aumentam borrão de movimento e captam mais luz, se os demais fatores permanecerem constantes.

**ISO:** em câmeras digitais, elevar ISO **não torna fisicamente o sensor mais sensível à luz**. É uma configuração do sistema de captura/processamento que produz resultado mais claro a partir de menos sinal e geralmente aumenta a visibilidade de ruído e pode reduzir faixa dinâmica. Materiais didáticos frequentemente chamam ISO de “sensibilidade”, mas para precisão técnica essa é uma simplificação.

### 4.7 RAW × JPEG, balanço de branco, legenda × crédito

**RAW** preserva dados de captura com grande latitude de processamento e requer revelação/edição antes da publicação normal. **JPEG** é um formato comprimido já processado, muito usado na distribuição final.

**Balanço de branco** ajusta a interpretação das cores em relação à iluminação, evitando dominantes indesejadas quando é necessária reprodução neutra.

**Legenda** contextualiza a imagem, identificando o que é relevante para sua compreensão. **Crédito** informa autoria ou fonte. Uma fotografia pode precisar dos dois.

## 5. Identidade visual e direção de arte

**Identidade visual** é o sistema de elementos gráficos usados para tornar a organização reconhecível e coerente: assinaturas, cores, tipografia, grafismos, ícones, estilos de imagem e regras de aplicação.

**Marca** é conceito mais amplo e não deve ser reduzido ao logotipo. **Imagem** e **reputação** são percepções dos públicos construídas ao longo das interações; não são controladas integralmente pelo manual de identidade. Ver [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]] e [[3 - Materias/Comunicacao/19 - marketing institucional e branding|Marketing institucional e branding]].

**Manual de identidade visual** registra padrões de aplicação, como área de proteção, tamanhos mínimos, versões de assinatura e usos sobre fundos. Ele busca consistência; não define sozinho toda a estratégia de marca.

**Direção de arte** coordena escolhas visuais de uma peça, campanha ou sistema para manter coerência entre conceito, conteúdo, imagem, tipografia, cor e suporte.

## Como a FGV cobra

A FGV tende a usar conceitos técnicos muito concretos e distratores construídos com termos verdadeiros da mesma área. Na prova Dataprev 2024, uma imagem de lettering manuscrito levou à identificação da categoria **Script**; em seguida, a banca descreveu a área que ultrapassa a linha de corte e exigiu **sangria**. Em provas recentes de comunicação visual, cobrou também RGB/CMYK, acabamento e proximidade.

O padrão recorrente é de **fronteira**:

- RGB × CMYK;
- raster × vetor;
- PPI × DPI;
- sangria × margem de segurança × marca de corte;
- fonte incorporada × texto convertido em contorno;
- categoria tipográfica × nome de família;
- proximidade × alinhamento × repetição × contraste;
- gráfico × infográfico;
- plano × enquadramento;
- legenda × crédito;
- marca × identidade visual.

## Tensões e pegadinhas

**72 PPI não é “resolução obrigatória da web”.** Dimensão em pixels e dispositivo de exibição importam mais do que esse metadado isolado.

**300 PPI não é lei universal.** É referência comum de impressão fotográfica em leitura próxima, dependente de tamanho e processo.

**PDF não é sinônimo de vetor nem de arquivo pronto para gráfica.** Pode conter raster, vetor, fontes e configurações inadequadas.

**PDF/X não significa que qualquer gráfica exija exatamente a mesma variante.** O fornecedor e o fluxo de impressão definem o padrão de entrega.

**Script é categoria tipográfica; Helvetica e Bodoni são famílias/tradições específicas.** A FGV já explorou esse deslocamento.

**RGB e CMYK não são definidos pelo “tipo de campanha”, mas pelo sistema de reprodução.** Uma campanha institucional pode ter peças RGB para tela e CMYK para impressão.

**Storytelling de dados não autoriza distorção visual.** Narrativa continua subordinada a integridade dos dados.

**ISO alto não capta mais luz por si só.** Para captar mais luz, alteram-se abertura, tempo ou iluminação; ISO muda o tratamento do sinal/exposição resultante.

## Relações com outros temas

[[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]] define objetivos e públicos antes das decisões de peça e canal. [[3 - Materias/Comunicacao/20 - campanhas e planejamento de midia|Campanhas e planejamento de mídia]] escolhe meios e formatos, enquanto esta nota trata da materialização técnica e visual. [[3 - Materias/Comunicacao/06 - comunicacao digital|Comunicação digital]] aborda publicação, plataformas e experiência digital. [[3 - Materias/Comunicacao/05 - lead piramide invertida e storytelling|Lead, pirâmide invertida e storytelling]] trata de organização narrativa jornalística, distinta de data storytelling e roteiro audiovisual.

## Heurísticas

Se o problema é **ampliar sem pixelar**, pense em vetor. Se é **fotografia**, pense em raster. Se fala em **luz/tela**, RGB; se fala em **quatro tintas de processo**, CMYK. Se o elemento ultrapassa a linha final de corte, é **sangria**; se precisa ficar protegido dentro da página, é **margem de segurança**. Se a questão mostra aparência manuscrita, pense em **Script**. Se pede agrupar elementos relacionados, pense em **proximidade**. Se pede consultar números exatos, tabela tende a ser melhor que gráfico. Se o objetivo é comparar categorias, barras; se é evolução temporal, linhas; se é relação entre duas variáveis, dispersão.

## Referências de verificação

- Adobe. *Raster and vector* e *Photoshop image essentials*: raster como grade de pixels e vetor como formas definidas geometricamente.
- Adobe Photoshop. *Color modes*: uso de RGB em tela e CMYK em impressão, com variação de gamut conforme condições e perfis.
- Adobe InDesign. *Print bleed and slug areas*: finalidade de sangria, marcas e necessidade de seguir especificações do fornecedor.
- Adobe Acrobat/InDesign. Documentação de produção de impressão e PDF/X.
- Adobe. Materiais sobre ISO e ruído em fotografia digital.
- TUFTE, Edward R. Obras sobre visualização de dados e integridade gráfica.
- WILLIAMS, Robin. *The Non-Designer’s Design Book*: contraste, repetição, alinhamento e proximidade.
- FGV Conhecimento. Dataprev 2024, ATI Comunicação Social, questões 59 e 60.

**Fontes Brutas:**
- [[00 inbox/00 ingestão]]
