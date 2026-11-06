---
articleId: art-d64c8e1b705a392f
articleAliases: ["3 - Materias/Comunicacao/114 - producao digital responsividade acessibilidade e formatos.md"]
title: "Produção digital: responsividade, acessibilidade e formatos"
type: "conceito"
status: "ativo"
created: 2026-11-06
updated: 2026-11-06
---

# Produção digital: responsividade, acessibilidade e formatos

## Núcleo do conceito

**Situação concreta:** a Câmara produz uma página para orientar pessoas a participar de audiência pública. No computador, o conteúdo está organizado em três colunas; no celular, a imagem principal fica cortada, o formulário exige rolagem horizontal e o botão de inscrição só pode ser acionado com mouse. Uma equipe propõe diminuir tudo até caber na tela. A solução exige distinguir **responsividade, adaptação de conteúdo, usabilidade, acessibilidade e formato de publicação**.

**Produção digital** é o conjunto de decisões e procedimentos para preparar, implementar, publicar e manter conteúdos e interfaces em ambientes digitais. **Design responsivo** organiza layouts e recursos para se ajustarem a condições de visualização, especialmente tamanho e características do espaço disponível. **Acessibilidade digital** procura remover barreiras de percepção, operação, compreensão e compatibilidade com tecnologias assistivas. **Formato digital** pode designar tipo técnico de arquivo (SVG, JPEG, HTML, PDF) ou configuração editorial (card, vídeo, página); o contexto deve revelar qual acepção está em jogo.

A [[3 - Materias/Comunicacao/12 - producao editorial e design|nota 12]] apresenta raster/vetor, RGB/CMYK e bases do design. A [[3 - Materias/Comunicacao/112 - design grafico hierarquia composicao e legibilidade|nota 112]] aprofunda hierarquia, tipografia e contraste. A [[3 - Materias/Comunicacao/68 - formatos editoriais cards carrosseis videos stories e lives|nota 68]] trata de **card, carrossel, story, vídeo e live como formas editoriais**, e a [[3 - Materias/Comunicacao/77 - usabilidade metodos tecnicas e avaliacao|nota 77]] trata de avaliação com pessoas. Esta unidade examina **como especificar e validar uma publicação digital responsiva e acessível**, em vez de repetir essas classificações.

## Responsivo, adaptativo e mobile-first: princípios diferentes

**Layout responsivo (responsive design)** utiliza regras flexíveis de distribuição, dimensões relativas, mídia adaptável e condições de estilo para reorganizar conteúdos conforme a área disponível e outros recursos do ambiente. **Layout adaptativo** costuma designar conjuntos de composições definidas para faixas ou condições de dispositivo, selecionadas conforme critérios implementados; na prática, responsivo e adaptativo podem ser combinados. **Mobile-first** é uma abordagem de projeto que parte das condições e prioridades de telas menores para ampliar progressivamente a apresentação; **não equivale** a entregar apenas uma versão para celular.

**Exemplo:** três cartões de serviços podem aparecer lado a lado em tela ampla e empilhados em tela estreita, preservando a mesma relação lógica. Em contraste, reduzir o conjunto a 30% da escala sem reorganizar textos e ações pode tornar tudo ilegível. **Responsividade envolve reestruturação**, não apenas miniaturização.

| Recurso | Papel | Fronteira de prova |
| :--- | :--- | :--- |
| **Grid fluido** | Usa proporções e limites para distribuir áreas | Não exige que todas as medidas sejam percentuais |
| **Flexbox** | Organiza itens em um eixo principal, com recursos de alinhamento e distribuição | Não é um sistema exclusivamente de múltiplas colunas |
| **CSS Grid** | Organiza relações em linhas e colunas, com layout bidimensional | Não é sinônimo de design responsivo completo |
| **Media query** | Aplica estilos conforme características ou capacidades do ambiente | Breakpoint não precisa corresponder a modelo específico de aparelho |
| **Container query** | Considera condições do contêiner para adaptar um componente | Distingue-se de consulta ao viewport |
| **Breakpoint** | Condição na qual muda determinada regra de apresentação | Não equivale à largura fixa obrigatória de uma plataforma |
| **Mobile-first** | Começa pelo cenário de menor espaço e acrescenta capacidades | Não é “mobile-only” |
| **Progressive enhancement** | Mantém núcleo utilizável e amplia recursos quando disponíveis | Não exige aparência idêntica em todos os navegadores |

**Viewport** é a área de visualização usada para organizar a apresentação. **Contêiner** é a região que envolve um componente. A distinção interessa: um cartão pode ter pouco espaço dentro de uma página ampla; adaptar-se à largura total da janela não resolve necessariamente seu problema local.

**Breakpoint de conteúdo:** a mudança de layout deve ocorrer quando o conteúdo deixa de funcionar bem, em vez de seguir exclusivamente nomes de dispositivos. Telas de mesma largura podem ter diferenças de densidade, orientação, zoom, modo de entrada e preferências do usuário.

## Responsividade, reflow e ordem de leitura

**Reflow** é a reorganização do conteúdo para permitir leitura e operação em condições de ampliação ou espaço restrito. Na **WCAG 2.2, critério 1.4.10 Reflow, nível AA**, a apresentação deve permitir conteúdo sem perda de informação ou função e sem rolagem em duas direções para a maior parte dos conteúdos, sob condições especificadas equivalentes a largura de **320 pixels CSS** para rolagem vertical ou altura de **256 pixels CSS** para rolagem horizontal, com exceções para componentes que exigem apresentação bidimensional (como determinadas tabelas e mapas).

**Distinção:** uma tabela larga pode legitimamente exigir rolagem em duas direções quando a representação bidimensional é essencial. Isso **não autoriza** fazer todo o texto corrido exigir rolagem horizontal num celular.

**Ordem visual × ordem semântica:** propriedades de layout podem alterar onde um elemento aparece sem alterar a ordem de leitura no código. Um leitor de tela ou o teclado pode seguir uma sequência distinta da visual. **CSS não reorganiza automaticamente a ordem lógica do documento**. O critério de WCAG 2.4.3 (ordem de foco) exige que o foco preserve significado e operabilidade quando sua sequência afeta a navegação; 1.3.2 trata de sequência significativa de leitura.

**Exemplo:** no desktop, instruções aparecem à esquerda e inscrição à direita. No celular, o botão é visualmente movido para cima, mas a navegação por teclado ainda percorre links secundários antes das instruções. A página pode ser responsiva em geometria e problemática em navegação. O teste precisa examinar **leitura e foco**, não apenas captura de tela.

## Acessibilidade: os quatro princípios da WCAG

A estrutura **POUR**, do World Wide Web Consortium (W3C), reúne quatro princípios: **perceptível, operável, compreensível e robusto**. A **Web Content Accessibility Guidelines (WCAG) 2.2** detalha diretrizes, critérios de sucesso testáveis e níveis de conformidade **A, AA e AAA**. O número do nível não indica uma etapa temporal de desenvolvimento.

| Princípio | Pergunta principal | Exemplo | Erro de transposição |
| :--- | :--- | :--- | :--- |
| **Perceptível** | Pessoas conseguem perceber informação e componentes pelos sentidos e recursos disponíveis? | Texto alternativo, contraste, legendas | Tratar visual bonito como acessível |
| **Operável** | É possível navegar e acionar funções por modos diferentes de interação? | Teclado, foco visível, tempo suficiente | Equivaler “clicável com mouse” a operável |
| **Compreensível** | Conteúdo e comportamento são entendíveis e previsíveis? | Instruções claras, erros identificados | Confundir alta legibilidade visual com clareza total |
| **Robusto** | Conteúdo é interpretável por diferentes agentes de usuário, inclusive tecnologias assistivas? | Semântica e nomes/valores corretos | Supor que aparência correta prova compatibilidade técnica |

**Nível A, AA e AAA:** os critérios têm diferentes níveis; alcançar AA significa atender aos critérios A e AA pertinentes, não apenas aos rotulados AA. A WCAG não promete que uma página conforme seja automaticamente fácil de usar por toda pessoa em qualquer condição. O objetivo é reduzir barreiras técnicas especificadas.

**Texto alternativo:** descreve a função ou informação relevante de imagem quando ela precisa de equivalente textual. Imagem estritamente decorativa pode ter alternativa vazia quando implementada adequadamente; imagem usada como link precisa de nome acessível que comunique sua função. **Repetir “imagem de” ou copiar todo texto adjacente indiscriminadamente não é regra de qualidade**.

**Contraste:** o critério 1.4.3 (mínimo, AA) exige, em regra, **4,5:1** para texto comum e **3:1** para texto grande, segundo definições e exceções do padrão. O 1.4.11 trata do **contraste não textual** pertinente, como informação gráfica e limites visuais de componentes, tipicamente **3:1** nas condições aplicáveis. Os detalhes foram estudados na nota 112.

**Uso da cor:** o critério 1.4.1 não permite que a cor seja o **único meio visual** de transmitir informação, indicar ação, provocar resposta ou distinguir um elemento. Uma mensagem de erro apenas em vermelho, sem rótulo ou outro indício, pode falhar mesmo com contraste elevado.

## Operação por teclado, foco, alvo e interações

**Operação por teclado:** o critério WCAG **2.1.1 (Keyboard)** estabelece que as funcionalidades sejam operáveis por interface de teclado, observadas exceções previstas para movimentos que dependam do percurso da ação. **Armadilha de teclado (2.1.2):** ao receber foco, um componente não deve aprisionar o usuário sem forma apropriada de sair. **Foco visível (2.4.7):** a pessoa precisa identificar qual componente está selecionado durante navegação.

**Alvo de ponteiro (2.5.8, Target Size Minimum, nível AA, WCAG 2.2):** requer área de alvo de pelo menos **24 × 24 pixels CSS** ou espaçamento suficiente, com exceções definidas no critério. **Não confundir com um requisito universal de 44 × 44 pixels**, associado a outras recomendações e critérios de nível diferente. O tamanho do ícone visível e a área efetiva de acionamento também podem diferir.

**Arrastar para mover (2.5.7, Dragging Movements, nível AA):** quando uma funcionalidade usa arraste, deve haver alternativa sem arraste, ressalvadas condições do critério. Um carrossel acionável apenas por arraste pode criar barreira para pessoas que usam outras formas de entrada.

**Foco não obscurecido (2.4.11, Focus Not Obscured Minimum, nível AA):** o componente focado não deve ficar inteiramente oculto por conteúdo criado pelo autor. Cabeçalhos fixos e janelas sobrepostas precisam de atenção. **Sticky header** não é problema por definição; o problema ocorre quando impede perceber o item focado.

**Motion e preferências:** transições, movimentos automáticos e efeitos de parallax podem causar desconforto ou dificultar uso. A consulta CSS `prefers-reduced-motion` permite adaptar animações segundo preferência declarada no sistema, sendo recurso relevante, mas não substituindo os demais critérios aplicáveis da WCAG.

## Semântica de HTML e componentes visuais

**HTML semântico** expressa função e estrutura: `<main>` indica região principal, `<nav>` região de navegação, `<button>` ação, `<a>` link, `<label>` identifica campo de formulário e níveis de heading organizam seções. **CSS** organiza apresentação; **JavaScript** pode implementar comportamentos interativos. Uma `<div>` estilizada como botão não adquire automaticamente todas as características de operação e semântica de um botão nativo.

**Exemplo:** uma peça digital apresenta “Inscreva-se” como imagem clicável sem nome acessível. Pode parecer botão para quem vê a tela, mas não comunicar função corretamente a leitor de tela. Um botão com texto claro e foco operável oferece estrutura mais adequada.

**ARIA (Accessible Rich Internet Applications)** acrescenta semântica e relações quando a implementação precisa delas, mas **não implementa sozinho navegação, teclado, foco ou estado funcional**. Usar `role="button"` em elemento sem comportamento de teclado não equivale a um botão HTML nativo bem implementado. Preferir semântica nativa quando suficiente.

**Formulários:** rótulos persistentes, instruções, identificação de campos obrigatórios e mensagens de erro associadas ao campo ajudam a evitar ambiguidade. **Placeholder** é dica temporária e não substitui rótulo programaticamente associado. O usuário precisa compreender o que deu errado e, quando aplicável, como corrigir.

**Legendas, transcrições e audiodescrição:** conteúdos audiovisuais exigem alternativas conforme o tipo de mídia e o critério. **Legenda** representa fala e sons relevantes de áudio, **transcrição** disponibiliza conteúdo textual e pode incluir informações visuais necessárias, e **audiodescrição** verbaliza informação visual que não se obtém pelo áudio comum. Esses recursos **não são sempre substitutos entre si**; o conjunto necessário depende do conteúdo e da exigência aplicável.

## Formatos técnicos: escolher conforme informação, não hábito

| Formato | Características de uso | Vantagem | Limite |
| :--- | :--- | :--- | :--- |
| **JPEG/JPG** | Imagem raster com compressão tipicamente com perdas | Fotografias e imagens de tons contínuos | Artefatos em textos pequenos, sem canal alfa padrão |
| **PNG** | Raster com compressão sem perdas | Capturas, imagens com transparência e linhas definidas | Pode gerar arquivos maiores para fotografias |
| **SVG** | Formato vetorial baseado em XML | Símbolos, diagramas e formas escaláveis | Pode conter código e recursos externos; requer tratamento seguro em publicação |
| **WebP** | Formato de imagem com modos com e sem perdas | Eficiência de distribuição em diversos tipos de imagem | Qualidade, transparência e implementação precisam ser avaliadas |
| **AVIF** | Formato moderno baseado em codificação AV1 para imagem | Potencial de tamanho reduzido com boa qualidade | Compatibilidade e fluxo de produção variam por ambiente |
| **GIF** | Raster animado com paleta limitada | Animações simples em sistemas compatíveis | Cores limitadas e eficiência menor que alternativas em muitos contextos |
| **PDF** | Contêiner de documento com estrutura variável | Arquivo de consulta, impressão, assinaturas e paginação estável | Não é automaticamente responsivo, acessível nem pesquisável |
| **HTML** | Documento semântico para web | Conteúdo refluível, navegável e atualizável | A qualidade depende da implementação |
| **MP4** | Contêiner audiovisual | Distribuição de vídeo com combinações de codecs | MP4 não determina sozinho codec, acessibilidade ou bitrate |

**Formato × codec × contêiner:** MP4 é contêiner, enquanto H.264/AVC, H.265/HEVC ou AV1 são exemplos de tecnologias de compressão/codificação de vídeo. Uma extensão MP4 **não garante** reprodução universal, pois a compatibilidade depende da combinação real de codecs e perfis. Da mesma forma, **SVG não é simplesmente uma fotografia em alta resolução**: é descrição vetorial, podendo incorporar ou referenciar elementos raster.

**Compressão com perdas × sem perdas:** compressão com perdas descarta informação segundo método; compressão sem perdas permite reconstruir o conteúdo codificado sem perda de informação daquela representação. “Sem perdas” não garante que a imagem original já possuía qualidade alta. **Dimensão em pixels, compressão e qualidade perceptiva** são variáveis relacionadas, porém distintas.

**Imagens responsivas:** recursos como `srcset` e `sizes` permitem fornecer versões raster adequadas a condições de exibição; `picture` pode ajudar na escolha de formato ou enquadramento (*art direction*). **Servir imagem maior não garante nitidez útil em todos os contextos** e pode aumentar o tempo de transferência desnecessariamente.

**PDF × HTML:** PDF pode preservar paginação e ser necessário para certos documentos, mas uma página HTML bem implementada geralmente permite melhor reorganização para diferentes telas e tecnologias assistivas. Isso é uma **tendência de uso e implementação**, não uma regra de que todo PDF seja inacessível. PDF etiquetado (*tagged PDF*) e testes com ferramentas assistivas são relevantes quando documentos PDF precisam ser publicados de forma acessível.

## Desempenho de carregamento e experiência

A produção digital precisa equilibrar **qualidade visual, tempo de carregamento, acesso e manutenção**. Imagens enormes, scripts bloqueantes e vídeos iniciados automaticamente podem comprometer o serviço mesmo em layout bonito. **Lazy loading** posterga carregamento de certos recursos até momento apropriado, mas aplicá-lo à imagem principal que deveria aparecer rapidamente pode prejudicar desempenho.

**Dimensões reservadas** para imagens e componentes reduzem mudanças inesperadas de layout durante carregamento. **Compressão**, formatos adequados e recursos adaptativos podem reduzir volume transferido. O desempenho precisa ser avaliado em dispositivos, conexões e contextos representativos, não apenas no computador de desenvolvimento.

**Core Web Vitals**, conforme o ecossistema Google, incluem métricas como **Largest Contentful Paint (LCP)** para carregamento visual principal, **Interaction to Next Paint (INP)** para responsividade às interações e **Cumulative Layout Shift (CLS)** para estabilidade visual. **LCP não é medida de acessibilidade**; **INP não mede compreensão**; **CLS não informa se o conteúdo está correto**. São indicadores técnicos que precisam ser articulados às tarefas do público.

## Fluxo de publicação e controle de qualidade

1. **Objetivo e público:** definir a tarefa, prioridades e necessidades de acesso.
2. **Estrutura e conteúdo:** hierarquia, texto, ordem semântica, formatos e recursos de mídia.
3. **Projeto responsivo:** organizar breakpoints por necessidade de conteúdo, diferentes entradas e ampliação.
4. **Implementação semântica:** títulos, landmarks, formulários, teclado, estado de componentes e alternativas.
5. **Otimização técnica:** formato, compressão, imagens responsivas, performance e compatibilidade.
6. **Revisão editorial:** precisão, fontes, datas, links, terminologia e autoria institucional.
7. **Verificação de acessibilidade:** inspeção e testes manuais com teclado e tecnologias assistivas, além de recursos automatizados.
8. **Teste de uso:** encontrar, compreender e concluir tarefas com pessoas em contextos relevantes.
9. **Publicação e manutenção:** conferir comportamento no ambiente real, monitorar erros e atualizar informação.

**Teste automatizado de acessibilidade** detecta parte dos problemas, como ausência de certos atributos e contrastes mensuráveis; **não substitui** revisão de texto alternativo, sentido de rótulos, ordem de leitura, uso por teclado e avaliação humana. O fato de um validador retornar poucos erros não prova conformidade integral com WCAG.

**Ambientes de publicação:** pré-visualização e homologação permitem examinar comportamentos antes do público; não substituem testes no ambiente final quando integrações e autenticação mudam. O **controle de versão** preserva histórico de mudanças e permite rastrear origem de erros. A governança de conteúdo define responsáveis por revisão e atualização.

## Caso progressivo: página de audiência pública

**Etapa A:** a equipe transforma cartaz em página web e mantém três colunas fixas. No celular surge rolagem horizontal. A decisão deve incorporar **reflow e organização por tarefa**, não mera redução de escala.

**Etapa B:** a página reorganiza data, assunto e inscrição em coluna única, com hierarquia clara. O layout melhora, mas a ordem de foco ainda percorre controles secundários antes do formulário. A correção envolve **semântica e navegação**.

**Etapa C:** um botão visual de inscrição não possui operação por teclado. Substitui-se por controle nativo apropriado e estado de foco visível. O problema era de **operabilidade**, não da escolha de cor.

**Etapa D:** a imagem explicativa é publicada em JPEG com texto pequeno embutido. A equipe separa texto em HTML e utiliza imagem adequada ao conteúdo. A leitura passa a depender menos da qualidade do raster e permite maior adaptação.

**Etapa E:** o vídeo explicativo tem legendas, mas contém uma etapa visual essencial não narrada no áudio. A equipe examina necessidade de **audiodescrição ou alternativa equivalente**, segundo critérios aplicáveis.

**Etapa F:** testes com cidadãos verificam se encontram o procedimento e concluem a inscrição. O projeto melhora quando há evidência da tarefa, não apenas aprovação visual em reunião.

**Caso de fronteira:** uma página obtém boa nota de desempenho e passa em verificações automáticas, mas o botão de inscrição só aparece ao passar o mouse. Os indicadores técnicos **não eliminam a barreira de operação**.

## Como o Cebraspe pode cobrar: itens inéditos C/E

**Item 1.** O desenvolvimento responsivo pode alterar a disposição espacial de componentes conforme o espaço disponível, mas essa reorganização visual não garante, por si só, sequência semântica e ordem de foco adequadas para tecnologias assistivas.

**Certo.** Responsividade geométrica e ordem de operação são dimensões diferentes. **Mecanismo avaliado:** limite de inferência a partir do layout.

**Item 2.** A abordagem mobile-first significa que o conteúdo deve existir exclusivamente na versão para dispositivos móveis, sendo desnecessário considerar telas amplas e outras modalidades de entrada.

**Errado.** Mobile-first organiza prioridade de projeto, não exclusividade de suporte. **Mecanismo do erro:** transposição de estratégia para restrição absoluta.

**Item 3.** A WCAG 2.2 organiza acessibilidade pelos princípios perceptível, operável, compreensível e robusto; a conformidade em nível AA exige também atendimento aos critérios pertinentes de nível A.

**Certo.** Os níveis são cumulativos na conformidade. **Mecanismo avaliado:** estrutura interna da WCAG.

**Item 4.** A atribuição de `role="button"` a um elemento HTML genérico garante automaticamente seu acionamento por teclado, equivalendo a um botão nativo, mesmo sem programação de eventos e gestão de foco.

**Errado.** Semântica ARIA não implementa comportamento. **Mecanismo do erro:** confusão entre nome/role e operação.

**Item 5.** Sob as condições e exceções previstas no critério 1.4.10 de nível AA da WCAG 2.2, conteúdo com rolagem vertical deve permitir reflow sem exigir rolagem horizontal para a maior parte dos elementos ao ser apresentado em largura equivalente a 320 pixels CSS.

**Certo.** O critério exige preservação de informação e função, com exceções para conteúdo necessariamente bidimensional. **Mecanismo avaliado:** norma e limite de escopo.

**Item 6.** SVG e JPEG representam necessariamente a mesma forma de codificação raster, diferenciando-se apenas pela capacidade do JPEG de manter transparência.

**Errado.** SVG é formato vetorial; JPEG é raster e não oferece canal alfa padrão. **Mecanismo do erro:** inversão de formatos e propriedades.

**Item 7.** Em produção audiovisual, MP4 designa contêiner, e sua extensão não determina isoladamente o codec usado para codificar o vídeo nem comprova compatibilidade universal com qualquer dispositivo.

**Certo.** Contêiner e codec são categorias distintas. **Mecanismo avaliado:** taxonomia técnica.

**Item 8.** A aprovação de página em verificação automatizada de acessibilidade comprova sua conformidade integral com a WCAG 2.2 e dispensa testes manuais de teclado, alternativas textuais e sequência de leitura.

**Errado.** A verificação automática cobre apenas parte das exigências e não avalia adequadamente todo o sentido e uso dos componentes. **Mecanismo do erro:** verdade parcial com conclusão excessiva.

## Relações com outros temas

**Responsivo × adaptativo × mobile-first:** comportamentos de layout e estratégia inicial de projeto. **Viewport × contêiner:** área de apresentação geral versus área local de componente. **Reflow × zoom:** reorganizar conteúdo e ampliá-lo são operações relacionadas, não equivalentes. **Perceptível × operável:** disponibilizar conteúdo aos sentidos versus permitir executar ações. **HTML semântico × ARIA:** estruturas nativas e complementos de semântica. **JPEG × PNG × SVG:** raster com perdas, raster sem perdas e vetor. **MP4 × codec:** contêiner versus codificação. **Acessibilidade × usabilidade:** remover barreiras técnicas e permitir atingir objetivos com eficácia, eficiência e satisfação em contextos definidos.

## Tensões e pegadinhas

A banca pode afirmar que **layout responsivo é automaticamente acessível**, que **ARIA substitui JavaScript e teclado**, que **PDF é sempre inacessível**, que **breakpoints correspondem obrigatoriamente a modelos de smartphone**, ou que **um formato moderno é sempre melhor**. O critério decisivo é a relação entre **funcionalidade, conteúdo, tecnologia, contexto e requisito aplicável**.

## Heurísticas

Quando a questão mencionar **mudança de colunas**, pense em responsividade; quando mencionar **ordem de navegação**, examine foco e sequência semântica. Para WCAG, memorize **perceptível, operável, compreensível, robusto**, e confira nível e exceções. Para formatos, identifique **raster, vetor, documento, contêiner ou codec**. Para publicação, separe **validação automática, inspeção manual e teste com pessoas**. Para comunicação institucional, avalie a tarefa: **encontrar, entender e usar a informação**.

## Referências

- [[3 - Materias/Comunicacao/12 - producao editorial e design|Produção editorial e design]]: raster/vetor e fluxo de produção.
- [[3 - Materias/Comunicacao/112 - design grafico hierarquia composicao e legibilidade|Design gráfico]]: contraste e hierarquia.
- [[3 - Materias/Comunicacao/68 - formatos editoriais cards carrosseis videos stories e lives|Formatos editoriais]]: escolhas de narrativa e formatos.
- [[3 - Materias/Comunicacao/77 - usabilidade metodos tecnicas e avaliacao|Usabilidade]]: eficácia, eficiência, satisfação e testes.
- W3C. [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/): princípios, critérios e níveis de conformidade.
- W3C. [Understanding SC 1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html): conteúdo sem perda de informação e necessidade de rolagem bidimensional.
- W3C. [Understanding SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): tamanho de alvo e exceções.
- MDN Web Docs. [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design): grid flexível, media queries e adaptação.
- MDN Web Docs. [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images): `srcset`, `sizes` e `picture`.
- Google. [Web Vitals](https://web.dev/articles/vitals): LCP, INP e CLS e interpretação dos indicadores.

**Nota editorial:** tecnologia, formatos e implementações mudam. Critérios exatos de acessibilidade devem ser conferidos na versão vigente da WCAG e com os limites de cada condição; recomendações de desempenho não substituem inspeção de acessibilidade nem teste de tarefa.
