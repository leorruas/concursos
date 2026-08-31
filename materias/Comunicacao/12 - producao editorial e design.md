---
title: "Produção editorial e design"
type: "conceito"
status: "ativo"
created: 2026-07-20
updated: 2026-08-10
---
# Produção editorial e design

Este módulo organiza os conceitos fundamentais de design gráfico, tipografia, editoração eletrônica, produção gráfica, produção audiovisual, roteirização, fotografia institucional e sistemas de identidade visual sob a perspectiva da **Arqueologia do Design**: investigando que problemas de comunicação e engenharia de compreensão cada técnica ou conceito surgiu para resolver.

---

## 1. O Processo Editorial (O problema da escala e da organização)
A etapa responsável pelo fluxo de produção de uma publicação não se resume à diagramação. O processo editorial envolve um fluxo lógico composto por etapas distintas, com funções claras e delimitadas:

```
Planejamento editorial ➔ Projeto gráfico ➔ Editoração ➔ Fechamento de arquivos ➔ Produção gráfica
```

*   **Planejamento Editorial** (*Por quê? Para quem? O quê?*): Fase estratégica que define o público-alvo, periodicidade, linguagem, suportes e fluxos de aprovação. Nenhuma decisão tipográfica ou estética é tomada aqui.
*   **Projeto Gráfico** (*Como será a identidade visual?*): Define as diretrizes e padrões de identidade visual da publicação (estilos tipográficos, hierarquias, cores institucionais, grids, padrões visuais). Funciona como a "planta arquitetônica" do projeto.
*   **Editoração Eletrônica** (*Como montar página por página?*): A aplicação prática do projeto gráfico ao conteúdo real e definitivo, distribuindo textos e imagens ao longo das páginas. É a "construção da casa" utilizando ferramentas como o Adobe InDesign.
*   **Produção Gráfica** (*Como finalizar e imprimir?*): A fase de materialização física (impressão) ou exportação final para suportes digitais.

---

## 2. Vetor vs. Bitmap (O problema do armazenamento e da escalabilidade)
O computador representa a informação gráfica através de dois modelos opostos de manipulação de dados:

| Categoria | Vetor | Bitmap (Raster) |
| :--- | :--- | :--- |
| **Ação Principal** | **Descreve** a imagem matematicamente. | **Registra** amostras cromáticas (pixels). |
| **Unidade Básica** | Fórmulas, caminhos e pontos geométricos. | Matriz de pixels (quadrados de cor). |
| **Escalabilidade** | Infinita. Recalculada sem perda de nitidez. | Limitada. A ampliação revela pixels (pixelado). |
| **Ideal Para** | Logotipos, ícones, infográficos, tipografia. | Fotografias, texturas e imagens realistas. |
| **Formatos** | AI, SVG, EPS, PDF (vetorial). | JPG, PNG, TIFF, PSD, WebP, GIF. |
| **Software Core** | Adobe Illustrator. | Adobe Photoshop. |

> [!TIP]
> **Heurística de Prova**: Se a questão mencionar logotipo institucional ou elemento geométrico que precisa ser ampliado mantendo contorno limpo, selecione **vetor**. Se mencionar fotografia institucional ou riqueza de detalhes capturados da realidade, selecione **bitmap**. O PDF pode carregar ambos os formatos.

---

## 3. RGB vs. CMYK (O problema da física da cor)
Os sistemas cromáticos respondem à física de como a cor é gerada no meio de exibição final:

### RGB (Sistema Aditivo — Luz)
*   **Propósito**: Emitir luz diretamente das telas (monitores, celulares, TVs).
*   **Princípio**: O ponto de partida é o preto absoluto (tela apagada). A adição gradual de luzes Vermelha (*Red*), Verde (*Green*) e Azul (*Blue*) caminha em direção ao branco total.
*   **Fórmula**: `Preto + R + G + B = Branco`.

### CMYK (Sistema Subtrativo — Pigmento)
*   **Propósito**: Bloquear a luz refletida pelo papel físico (impressão offset, digital).
*   **Princípio**: O ponto de partida é a folha branca de papel que reflete a luz ambiente. As tintas Ciano (*Cyan*), Magenta (*Magenta*) e Amarela (*Yellow*) atuam como filtros que absorvem (subtraem) a luz. A sobreposição máxima das tintas caminha para o preto.
*   **Fórmula**: `Branco - C - M - Y = Preto`.
*   **A função do K (Key - Preto)**: A mistura pura de C + M + Y resulta em um marrom escuro instável. O preto físico (K) é adicionado para economizar tintas coloridas, garantir contraste profundo e assegurar a nitidez de textos pequenos.

> [!WARNING]
> **Gamut**: O gamut é o limite físico de cores que um sistema consegue reproduzir. O gamut do RGB (telas luminosas) é muito maior que o do CMYK (pigmentos físicos). Cores brilhantes criadas em telas sofrem conversão obrigatória e perdem vivacidade ao serem impressas.
> **Pegadinha da FGV**: O sistema de cor é definido exclusivamente pelo **meio de exibição final da peça**, e não pelo tema da campanha. Um banner de teor institucional digital deve usar RGB; um banner institucional impresso deve usar CMYK.

---

## 4. Densidade e Resolução (O problema da nitidez espacial)
A resolução é a densidade de informações gráficas distribuídas por unidade de espaço físico:

*   **PPI (Pixels Per Inch — Pixels por Polegada)**: Propriedade exclusiva da **imagem digital**. Descreve a densidade dos dados do arquivo. Para exibição exclusiva em páginas web e telas, o metadado de PPI é ignorado; apenas a dimensão bruta em pixels importa.
*   **DPI (Dots Per Inch — Pontos por Polegada)**: Propriedade física da **impressora**. Mede a quantidade de gotas de tinta que o equipamento consegue depositar no papel por polegada.
*   **Heurística de Nitidez**: Não há resolução absoluta sem tamanho. A nitidez depende da relação direta entre a quantidade bruta de pixels da imagem e o tamanho físico de sua reprodução.
*   **Distância de Observação**: Quanto maior a distância de leitura, menor a necessidade de densidade (PPI). Um outdoor visto a 50 metros pode ter 15 PPI; um folheto lido a 30 centímetros exige 300 PPI para esconder os pixels do olho humano.

---

## 5. O Grid (O problema do caos e do custo de orientação)
O grid é um sistema estrutural de linhas, colunas, margens e espaços que estabelece as regras geométricas da página.
*   **Origem Histórica**: Surge da necessidade de organizar múltiplos elementos (títulos, textos, imagens, anúncios) de forma previsível e legível.
*   **Objetivo**: Não é um recurso meramente decorativo. Sua função principal é gerar **consistência visual, alinhamento, ritmo e hierarquia**, reduzindo o esforço do leitor para decifrar a navegação da página.
*   **Grid vs. Template**: O grid é a planta estrutural invisível. O template é um modelo ou aplicação física que aproveita essa estrutura.

---

## 6. Hierarquia Visual (O problema da distribuição da atenção)
Mapeia a ordem em que os elementos visuais de uma página são percebidos pelo cérebro do leitor.
*   **Princípio de Comparação**: O cérebro detecta a importância relativa por meio do contraste. Se todos os elementos da página possuem o mesmo tamanho, cor ou peso, nenhum deles se destaca.
*   **Ferramentas de Destaque**: Criado através do tamanho, peso tipográfico (negrito), contraste de cor, posição espacial na página e o **espaço em branco** (o silêncio visual que dá importância ao elemento isolado).
*   ** Wittgenstein e Relação**: Um texto não "é" um título por si só; ele torna-se um título por estar inserido em uma relação de hierarquia contrastante com o restante do documento.

---

## 7. Legibilidade vs. Leiturabilidade (O problema de enxergar vs. compreender)
A FGV explora rigorosamente a separação entre os aspectos ópticos e os cognitivos da leitura:

*   **Legibilidade** (*"Consigo distinguir os caracteres?"*): É uma propriedade visual e física. Depende do desenho tipográfico, tamanho da fonte, contraste de cor em relação ao fundo, entrelinhamento e qualidade técnica de exibição.
*   **Leiturabilidade / Readability** (*"Consigo compreender o texto?"*): É uma propriedade linguística e cognitiva. Depende do vocabulário escolhido, tamanho dos períodos, estrutura sintática direta e organização lógica do texto.

> [!NOTE]
> Um texto jurídico denso impresso com tipografia impecável em papel de alto contraste possui excelente **legibilidade**, mas baixíssima **leiturabilidade** para o cidadão comum. Uma receita simples escrita em tom coloquial, mas impressa em cinza claro sobre fundo branco, possui excelente **leiturabilidade**, mas péssima **legibilidade**.

---

## 8. Tipografia (O problema da reprodução em larga escala)
A tipografia nasceu com Gutenberg para resolver o problema de escala de produção do conhecimento, garantindo a reprodução mecânica idêntica e rápida de textos.
*   **Serifa**: Prolongamentos ou pequenos traços nas pontas das hastes das letras. Historicamente ligada ao entalhe romano em pedras e, posteriormente, usada para guiar a leitura horizontal de textos longos impressos (livros e jornais).
*   **Sans-Serif (Sem Serifa)**: Letras retas e sem ornamentação. Surgiram com a Revolução Industrial para atender à publicidade e sinalização, destacando-se pela legibilidade rápida a distâncias elevadas.
*   **Relações com UX**: O design tipográfico ideal é invisível. A fonte não deve chamar a atenção para si, mas atuar como infraestrutura transparente de mediação da leitura.

---

## 9. Espaço em Branco / Whitespace (O problema do pertencimento e do silêncio visual)
O espaço em branco (ou espaço negativo) não representa a ausência de design; ele é um elemento ativo de diagramação.
*   **Origem Histórica**: O espaço em branco entre palavras substituiu a *scriptio continua* (séculos VII a IX) para reduzir a ambiguidade e o custo cognitivo da leitura.
*   **Funcionalidades**:
    *   **Separação e Categorização (Gestalt)**: Atua diretamente na *Lei da Proximidade*. Objetos cercados de branco se separam de outros, gerando relações de pertinência/independência.
    *   **Amplificador de Prioridade**: Elementos isolados em grandes áreas de espaço em branco ganham destaque visual imediato (funciona como silêncio que amplifica o som).
    *   **UX**: Essencial para escaneabilidade e redução do esforço visual em interfaces.

---

## 10. Alinhamento (O problema da continuidade e causalidade visual)
O alinhamento é a organização de múltiplos elementos gráficos seguindo um eixo ou linha comum.
*   **Funcionalidades**:
    *   **Continuidade e Eixo Comum**: O alinhamento diz ao cérebro que itens dispersos compartilham o mesmo sistema lógico ou pertencem à mesma cadeia de significados (causalidade visual).
    *   **Previsibilidade de Varredura**: Reduz o esforço de reorientação ocular. O texto alinhado à esquerda no Ocidente permite que os olhos encontrem o ponto de partida de cada linha sem recalcular coordenadas.
    *   **Texto Justificado**: Embora visualmente rígido e limpo, pode criar caminhos vazios irregulares (chamados de "rios" ou *rivers*) que prejudicam a fluidez. Em mídias digitais, o alinhamento à esquerda é preferido para melhor conforto e acessibilidade.

---

## 11. Fechamento de Arquivos para Impressão (O problema da fidelidade e integridade física)
O fechamento de arquivos é a preparação técnica de documentos digitais para que sejam reproduzidos fisicamente por equipamentos gráficos profissionais sem perdas ou distorções.
*   **Sangria (Bleed)**: Extensão dos fundos (linhas, cores ou fotos) para além da margem de corte do papel. Como o corte físico das gráficas possui margens de erro toleráveis, a sangria evita o surgimento de bordas brancas indesejadas na peça final.
*   **Margem de Segurança**: Distância mínima que elementos importantes (textos, logos, QR Codes) devem manter em relação à linha de corte físico para evitar que sejam aparados por imprecisões da guilhotina.
*   **Incorporação de Fontes**: Conversão dos textos em curvas/vetores ou incorporação completa do arquivo de fonte (.ttf/.otf) no PDF final. Evita que o sistema da gráfica substitua a tipografia planejada por outra padrão.
*   **Formato de Exportação**: O formato PDF puro não é garantia de prontidão. Impressões profissionais exigem padrões normatizados específicos, sendo o **PDF/X** (ex: PDF/X-1a ou PDF/X-4) o padrão para controle de transparências, fontes e conversões de cores.

---
**Fontes Brutas:**
- [[00 inbox/00 ingestão]]

---

## 12. Visualização da Informação, Infografia e Data Storytelling (O problema da redução de carga cognitiva)

A visualização da informação não tem como finalidade primordial "deixar a página bonita" ou ornamentar, mas sim **reduzir a carga cognitiva** necessária para interpretar dados, identificar padrões e tomar decisões.

### 12.1 Infográfico vs. Gráfico Isolado
* **Infográfico**: Peça de comunicação integrada que articula texto, dados, gráficos, mapas, diagramas e ilustrações para explicar um tema de forma autônoma.
* **Gráfico Isolado**: Representação matemática de variáveis. Pode compor um infográfico, mas não o define sozinho.

### 12.2 Escolha da Representação Visual conforme a Pergunta
A escolha do gráfico decorre da pergunta que o público precisa responder:
* **Gráfico de Barras**: Responde *"Quem tem mais?"* ou *"Qual a comparação entre categorias?"*. Exige em geral que o eixo comece em zero.
* **Gráfico de Linhas**: Responde *"Como variou ao longo do tempo?"*. Ideal para séries temporais e evolução contínua.
* **Gráfico de Pizza (Setores)**: Responde *"Como um todo se divide?"*. Adequado **apenas** quando há poucas categorias que somam 100%. *Atenção*: Efeitos 3D e muitas fatias distorcem a percepção visual.
* **Gráfico de Dispersão (Scatterplot)**: Responde *"Existe associação entre duas variáveis?"*. Útil para identificar correlações. *Atenção*: Correlação não comprova causalidade.
* **Histograma**: Responde *"Como se distribuem os dados em intervalos contínuos?"*. Barras encostadas representam faixas de dados contínuos (diferente do gráfico de barras para categorias discretas).
* **Tabelas**: Preferíveis quando o usuário precisa consultar **valores exatos**, e não identificar tendências visuais de forma rápida.

### 12.3 Princípios de Edward Tufte e Integridade Gráfica
* **Data-Ink Ratio**: Proporção entre a tinta usada para apresentar os dados e a tinta total do gráfico. Deve-se maximizar a tinta dedicada à informação direta.
* **Chartjunk**: Excesso de elementos decorativos (sombras 3D, gradientes, ícones repetitivos, linhas de grade excessivas) que competem com os dados e dificultam a compreensão.
* **Integridade Gráfica**: A forma visual deve respeitar rigorosamente a proporção matemática dos dados.
* **Distorções Visuais Frequentes (Pegadinhas FGV)**:
  * **Eixo Truncado**: Iniciar o eixo de barras acima de zero exagera visualmente pequenas diferenças percentuais.
  * **Proporção de Área**: Redimensionar um elemento 2D (ex: círculo ou foto) dobrando seu diâmetro quadruplica sua área visual, distorcendo o dado real.
  * **Percentual sem Base**: Informar crescimento percentual (ex: "+100%") sem informar os valores absolutos (ex: de 1 para 2 vs. de 5.000 para 10.000) oculta a magnitude real do impacto.

### 12.4 Data Storytelling
Consiste na tríade integrada: **Dados + Narrativa + Visualização**.
* A narrativa organiza a sequência e demonstra *por que* o padrão importa.
* Os dados sustentam a interpretação e devem manter contexto, período, fonte, metodologia e limitações.

---

## 13. Produção Audiovisual e Linguagem do Vídeo (O problema da construção multimodal de sentido)

A produção audiovisual articula imagem, som, movimento, montagem e texto para produzir significado. Diferente do texto ilustrado, esses elementos atuam de forma integrada sem mera repetição redundante.

### 13.1 Plano vs. Enquadramento
* **Plano** (*Quanto aparece?*): Unidade básica da gravação audiovisual, definida como o trecho contínuo registrado entre o início e o fim de uma tomada.
  * **Plano Geral (PG)**: Mostra o ambiente/cenário amplo. Função principal: contextualizar a cena (*"Onde estamos?"*).
  * **Plano Médio (PM)**: Mostra a pessoa da cintura para cima. Equilibra expressão humana e contexto; muito utilizado em entrevistas.
  * **Close (ou Plano Fechado)**: Destaca rostos, expressões, mãos ou objetos. Função principal: direcionar a atenção e criar aproximação emocional/detalhada.
* **Enquadramento** (*Como aparece?*): Composição e organização visual dos elementos dentro do quadro (deslocado, centralizado, regra dos terços). Um mesmo tipo de plano pode ter diferentes enquadramentos.

### 13.2 Regra dos Terços, Continuidade e Recursos de Edição
* **Regra dos Terços**: Heurística composicional que divide o quadro por duas linhas horizontais e duas verticais, posicionando pontos de interesse nos cruzamentos. Não é lei absoluta, mas diretriz de equilíbrio.
* **Continuidade**: Preservação da coerência espacial, temporal e de ações entre planos sequenciais. Cortes entre tomadas são normais; a quebra ocorre quando erros incoerentes (ex: objeto trocando de mão) confundem o leitor/espectador.
* **A-roll vs. B-roll**:
  * **A-roll**: Conteúdo principal da peça (entrevista, apresentador, depoimento).
  * **B-roll**: Imagens complementares de apoio inseridas na edição sobre a voz/áudio para dinamizar a narrativa e ilustrar a fala.
* **Storyboard**: Ferramenta gráfica de **planejamento visual** utilizada *antes* da gravação para desenhar e sequenciar cenas, movimentos de câmera e transições (não é ferramenta de edição).

---

## 14. Roteirização para Vídeo e Podcast (O problema do documento de produção e áudio autônomo)

O roteiro audiovisual não é um mero texto narrativo; é um **documento de produção** que orienta gravação, captação sonora e montagem.

### 14.1 Roteiro Literário vs. Roteiro Técnico
* **Roteiro Literário**: Focado na narrativa, ações, cenários e falas (*"João entra na agência e solicita atendimento"*).
* **Roteiro Técnico**: Acrescenta todas as instruções operacionais de execução audiovisual (*"Plano Médio. Câmera em travessia. Entra trilha suave em BG. Corte para close na tela"*).

### 14.2 Vocabulário Técnico Audiovisual / Jornalístico
* **Off (Narração em Off)**: Fala ou narração ouvida enquanto a imagem exibida é outra (o narrador não aparece na tela).
* **Sonora**: Fala gravada do entrevistado ou personagem inserida na edição.
* **Cabeça**: Introdução curta lida pelo apresentador no estúdio antes da entrada da reportagem.
* **Passagem**: Momento em que o repórter aparece falando diretamente para a câmera durante a matéria no local dos fatos.

### 14.3 Roteiro para Podcast e Produção Sonora
* A ausência de apoio visual exige que o roteiro construa o cenário e a atmosfera puramente através da **palavra, efeitos sonoros (foley), trilha e pausas**.
* Expressões como *"como podemos ver aqui"* tornam-se inadequada, exigindo metáforas e descrições verbais precisas (*"imagine uma sala lotada..."*).

---

## 15. Fotografia Institucional (O problema da representação e do enquadramento editorial)

A fotografia institucional cumpre funções documentais, informativas, memoriais, de prestação de contas e de construção de identidade. Não se reduz à mera promoção comercial nem ao registro protocolar de autoridades.

### 15.1 Enquadramento Editorial (Framing)
* Todo enquadramento fotográfico constitui uma **decisão editorial**: selecionar o que entra e o que fica fora do quadro altera a interpretação do fato público (ex: enquadrar apenas autoridades oculta os usuários e a utilidade social do serviço).

### 15.2 Triângulo de Exposição
A exposição resultante da captura fotográfica é regulada por três variáveis interdependentes:

```
          Abertura (número f)
             /          \
            /            \
Obturador (tempo) ──── ISO (sensibilidade)
```

* **Abertura da Lente (número f)**: Controla a quantidade física de luz e a **profundidade de campo**.
  * **Pegadinha da FGV (Relação Inversa)**: O número f representa uma fração. Portanto:
  * **f pequeno (ex: f/2.8)** = Abertura física GRANDE ➔ Mais luz ➔ **Menor profundidade de campo** (fundo desfocado).
  * **f grande (ex: f/16)** = Abertura física PEQUENA ➔ Menos luz ➔ **Maior profundidade de campo** (tudo em foco).
* **Velocidade do Obturador**: Controla o tempo de entrada da luz. Velocidades altas (ex: 1/1000s) **congelam movimentos** rápidos; velocidades baixas (ex: 1/15s) registram o movimento borrado.
* **ISO**: Sensibilidade do sensor digital à luz. Aumentar o ISO permite fotografar em ambientes escuros, mas pode gerar **ruído digital** e perda de nitidez.

### 15.3 Formatos, Balanço de Branco e Elementos Textuais
* **JPEG vs. RAW**: JPEG é o formato final comprimido eficiente para publicação. RAW preserva os dados brutos do sensor, oferecendo maior latitude de edição técnica, gerando arquivos pesados não prontos para web.
* **Balanço de Branco (White Balance)**: Ajusta a reprodução das cores segundo a temperatura de cor da fonte de iluminação (evita fotos amareladas ou azuladas).
* **Legenda vs. Crédito**: Legenda identifica contextualizadamente pessoas, local, data e ação. Crédito declara estritamente a autoria ou a fonte da imagem.

---

## 16. Identidade Visual, Direção de Arte e Design Editorial (O problema do sistema visual e do CRAP)

### 16.1 Identidade Visual vs. Marca
* **Marca**: Ativo simbólico intangível que abrange reputação, percepções, sentimentos e valor histórico na mente do público.
* **Identidade Visual**: Sistema normatizado de elementos gráficos (logotipo, paleta de cores, tipografias, ícones, grafismos, estilos fotográficos, grids) que expressam visualmente a marca.
* **Manual de Identidade Visual**: Documento normativo que estabelece regras de aplicação (tamanhos mínimos, área de proteção, usos proibidos, marcas sobre fundos). Seu objetivo é **garantir consistência e inteligibilidade**, e não tolher arbitrariamente a criação.

### 16.2 Os Quatro Princípios do Design Editorial (CRAP)
* **Contraste (Contrast)**: Destacar elementos diferentes para criar hierarquia visual clara e atração óptica.
* **Repetição (Repetition)**: Repetir padrões (títulos, ícones, cores, margens) para criar unidade, ritmo e previsibilidade de navegação.
* **Alinhamento (Alignment)**: Conectar visualmente todos os elementos a um eixo comum para transmitir ordem e rigor.
* **Proximidade (Proximity)**: Agrupar itens relacionados espacialmente (princípio da Gestalt) para indicar pertinência temática.

### 16.3 Direção de Arte na Comunicação Pública
* A direção de arte coordena o ecossistema estético da comunicação. No setor público, a consistência gráfica reduz ambiguidades, previne fraudes/golpes de falsa identidade governamental e consolida a confiança institucional do cidadão.

---
**Fontes Brutas:**
- [[00 inbox/00 ingestão]]

