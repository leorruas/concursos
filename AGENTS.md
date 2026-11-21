# Instruções para agentes: vault de concursos

## Variações conceituais e retestes no banco de questões (21/11/2026)

**Diversidade útil, não eliminação de semelhanças por assunto.** É desejável manter duas ou mais questões sobre o mesmo conceito quando representam variações reais da cobrança: caso concreto, inversão de premissas, distinção entre institutos próximos, exceção legal, mudança de agente/âmbito ou alteração do gabarito. A repetição espaçada e o reteste se beneficiam de itens distintos sobre a mesma regra. **Não rejeitar automaticamente novos itens apenas porque compartilham `articleId`, `conceptId` ou vocabulário.**

**Critérios editoriais:** preservar `id` único por enunciado e versão, referenciar capítulo pela sequência editorial do catálogo, registrar `conceptId` e mecanismo de cobrança, indicar fundamento jurídico preciso e gabarito comentado. Verificar a aplicação da regra e eventuais exceções. Distinguir enunciados idênticos ou quase idênticos sem ganho pedagógico de variações úteis: essas últimas podem coexistir, desde que o contraste cognitivo seja identificável. Quando duas formulações equivalentes divergirem no gabarito, bloquear até revisão jurídica. Não inserir dados de tentativas ou respostas privadas no repositório público.

**Reteste:** uma questão alternativa com mesmo conceito não equivale a repetir o mesmo `questionId`. Preservar os dois sinais no histórico: reexecução literal do item e transferência do aprendizado para uma variante. Sem métricas específicas, não afirmar que a simples existência de variantes mede retenção. Em expansões, comparar itens também com o banco existente, documentar o valor da variação e testar IDs, vínculo com o edital, cobertura por capítulo e build/publicação.

## Política de execução direta no repositório público (20/11/2026)

**Preferência expressa do usuário:** em `leorruas/concursos`, implementar e concluir correções e edições editoriais rotineiras **diretamente na `main`**, com commits pequenos, leitura do SHA atual, verificações disponíveis, confirmação do workflow e publicação. **Não abrir PRs rotineiros nem deixar o usuário com a tarefa pendente de integração.** Não converter uma única solicitação em múltiplas etapas de PR e merge, nem pedir autorização adicional para concluir uma correção já solicitada. Se houver falha, reparar antes de declarar conclusão.

**Exceções:** respeitar restrições técnicas de branch protegida ou trabalhos explicitamente solicitados por PR; operações com risco alto, conflito de alterações ou exigências de governança própria podem exigir branch e revisão. O **cofre privado `leorruas/concurso-dados` mantém seu protocolo específico de validação e PR** e não é alterado por esta preferência do repositório público.

**Comunicação:** informar diretamente resultado, commit, estado dos testes e deploy; só destacar pendências reais. O sucesso do commit não prova inspeção visual ou publicação, que devem ser verificados separadamente.

## Contrato de separação de Orçamento Público: CGU e Câmara (17/11/2026)

**Fonte de coordenação:** `1 - Planejamento/Orcamento Publico - Arquitetura CGU e Camara.md`; percursos `1 - Planejamento/CGU 2026 - Percurso editorial Orcamento.md` e `1 - Planejamento/Camara 2026 - Percurso editorial Orcamento.md`. Aplicar esta regra antes de qualquer edição de Orçamento Público; prevalece sobre referências históricas que autorizam múltiplos agentes a alterar índices ou catálogo. Cada concurso possui revisão e certificação próprias por `articleId`; a certificação da Câmara não pode ser atribuída a um derivado da CGU.

**Propriedade:** só a coordenação altera `AGENTS.md`, `index.md`, `3 - Materias/Orcamento Publico/orcamento-publico.md`, `data/catalogo-materias-por-concurso.json`, manifesto EPUB e documentos de coordenação desta migração. O agente CGU cria/revisa exclusivamente `3 - Materias/Orcamento Publico/CGU 2026 - *.md` e seu registro de estado; o agente Câmara cria/revisa exclusivamente `3 - Materias/Orcamento Publico/Camara 2026 - *.md` e artigos legados explicitamente reservados a essa frente. Artigos antigos 01–11 e subdivisões que ainda têm `articleId` compartilhado permanecem congelados para edições concorrentes; 12–15 são exclusivos da Câmara. Solicitar à coordenação inclusão ou troca de vínculos no catálogo, index e hub.

**Compatibilidade:** não mover nem renomear arquivo canônico sem análise de URLs e referências. Para derivar versão, usar ID novo e origem documentada (`derivedFromArticleId` no planejamento; frontmatter novo apenas após validar parser). Preservar caminho, ID e aliases antigos; reconciliar `theoryRefs`, glossário, flashcards, índices e `data/planos-estudo/cgu-2026.json` antes da substituição atômica no catálogo. Não editar `data/questoes-camara.json`; se necessário, abrir etapa técnica separada. Não gerar EPUB nesta missão.


## Regra de nomeação de autoridades e visão completa de blueprints (19/11/2026)

**Autoridade sempre identificada:** não usar "Presidente" isoladamente em artigos, diagramas, legendas, flashcards, glossário ou material legislativo quando houver possibilidade de ambiguidade. Escrever **Presidente da República**, **Presidente da Câmara dos Deputados**, **Presidente do Senado Federal**, **Presidente do Congresso Nacional**, **Presidente da comissão** ou outra designação completa apropriada. Não presumir que Presidente do Congresso e Presidente do Senado sejam funções equivalentes para cada competência. Usar no texto de cada atividade o cargo que efetivamente pratica o ato. Em títulos e células, evitar siglas de órgãos sem expandi-las primeiro.

**Blueprints legislativos:** privilegiar **a visão completa horizontal**, com fases simultaneamente visíveis, navegação por rolagem e identificação das linhas e camadas do serviço; não exigir controles de apresentação por fase. Cada espécie deve mostrar, antes do desenho e na origem, os **legitimados concretos** para a iniciativa, eventuais reservas e a **Casa iniciadora e a Casa revisora**, quando existirem. Em resolução de uma Casa, ato próprio do Congresso, delegação ou procedimento orçamentário, declarar expressamente por que não há revisão bicameral sucessiva comum. Atos da Presidência da República, da Câmara, do Senado e do Congresso devem permanecer diferenciados. Preservar a interface SVG navegável como apresentação principal, sem regressão a tabela visível.

## Decisão de rito nos blueprints: urgência, comissão conclusiva e recurso (19/11/2026)

Todos os blueprints de espécies normativas devem representar, além de prazos e quóruns, **duas dimensões independentes**: (1) regime e gatilhos de tramitação: ordinário, prioridade, urgência regimental, urgência constitucional, urgência própria de medida provisória ou rito especial; (2) órgão que decide: comissões conclusivamente, Plenário, Congresso em sessão conjunta ou outro órgão competente. Mostrar o evento que altera o percurso, o ator que o provoca, as consequências sobre a pauta, os prazos e a competência decisória e as fases em que ocorre.

Na Câmara, o **Regimento Interno, arts. 24, II, e 132, § 2º**, delimita a apreciação conclusiva de **projetos de lei**; exclui projetos de lei complementar, códigos, iniciativa popular, projetos de comissão, matéria indelegável, determinados projetos oriundos do Senado ou por ele emendados, pareceres divergentes e projetos urgentes. **Urgência aprovada retira o caráter conclusivo**, sem dispensar publicação, pareceres ou quórum (art. 152). A urgência regimental (arts. 151 a 157) é distinta da urgência constitucional por solicitação do Presidente da República (art. 64 da Constituição) e da urgência automática de medida provisória após 45 dias (art. 62, § 6º). Não atribuir automaticamente urgência regimental da Câmara a PEC, medida provisória, Senado ou projetos de orçamento.

Se uma comissão concluir a votação de projeto elegível, indicar anúncio, **prazo de 5 sessões para recurso**, legitimidade de **um décimo dos deputados (52)** e a necessidade de o **Plenário prover o recurso** para deliberar sobre a parte recorrida. A decisão conclusiva na Câmara não dispensa revisão pelo Senado, quando aplicável, nem sanção presidencial. Diferenciar expressamente o termo **terminativo no Senado**, sujeito ao regimento próprio. Nos ritos sem poder conclusivo, explicitar que a comissão apenas instrui ou tem competência distinta. Manter links para texto oficial do RICD e capítulos da matéria.

## Quóruns em blueprints legislativos: presença e aprovação (19/11/2026)

Cada espécie normativa deve identificar separadamente o **quórum para deliberar (presença mínima no colegiado)** e o **quórum para aprovar (votos favoráveis necessários)**; esses dados não devem ser confundidos com prazo, intervalo entre turnos, número de turnos ou apoio exigido para apresentação/iniciativa. Na Câmara, a maioria absoluta para presença é 257 deputados; no Senado Federal, 41 senadores, segundo a regra geral do art. 47 da Constituição. A aprovação por maioria simples representa a maioria dos votos dos presentes, respeitado o quórum de presença. Para lei complementar são necessários 257 votos favoráveis na Câmara ou 41 no Senado; para proposta de emenda à Constituição, 308 ou 49 votos favoráveis **em cada turno**, nas respectivas Casas. Em comissões, calcular sobre o número de integrantes do próprio colegiado e conferir regras especiais. Em sessão conjunta do Congresso, não tratar deputados e senadores como um único eleitorado: verificar quóruns e apuração por Casa. Para PDL, PRC, PRS, PRN e matérias orçamentárias, identificar quando uma exigência especial afasta a regra geral. Em fases sem votação, escrever "não se aplica" ou explicar a ausência de deliberação. Em cada célula, citar valores quando úteis para o aprendizado e manter fundamento no artigo/fonte correspondente.

## Regra obrigatória: prazos informativos em blueprints (19/11/2026)

Em todo blueprint legislativo, a faixa de **Prazos, marcos e efeitos** deve mostrar um dado temporal que alguém consiga usar para entender o processo: **quantidade + unidade** (dias corridos, dias úteis, sessões, horas), **evento que inicia a contagem**, **a quem se aplica**, **condição ou regime** e **consequência do vencimento**, quando relevante. Se não houver prazo geral previsto, escrever **"sem prazo geral fixado"**, distinguindo o silêncio da norma de um prazo desconhecido. Não colocar isoladamente `art. 60 CF`, `art. 52 RICD` ou `prazo regimental` na faixa de prazos. Fundamento normativo deve ficar no link de aprofundamento ou na fonte da atividade. **Quórum e número de turnos não são prazos**: colocá-los como requisitos de deliberação em camada própria ou na atividade.

A unidade depende do procedimento: **comissões da Câmara contam sessões**, com relógio do relator concorrente ao da comissão; a **PEC tem rito próprio**, incluindo prazo de comissão especial, emendas e interstício entre turnos na Câmara; **medida provisória** tem relógio constitucional de vigência e urgência; **orçamento** depende do calendário constitucional e dos prazos específicos de cada projeto. Nunca aplicar indiscriminadamente o prazo de uma Casa a outra nem o regime ordinário a procedimentos especiais. Quando um dado depende de ato, calendário, resolução ou Regimento próprio, indicá-lo com precisão e manter a fonte consultável. Verificar normas atualizadas antes de alterar qualquer prazo, sobretudo reformas regimentais.

## Blueprints de serviços: linguagem visual e qualidade obrigatória (19/11/2026)

**Um service blueprint não é um fluxograma com raias nem uma árvore de decisões.** É uma representação matricial da prestação de um serviço ou processo: **fases sucessivas no eixo horizontal (colunas)** e **camadas de atuação e evidências no eixo vertical (linhas)**. Para qualquer pedido de blueprint, começar pela definição explícita de objetivo, recorte, ponto de entrada e de saída, atores, fases, ações e entregas. Quando houver várias espécies normativas ou modalidades de serviço, produzir **um blueprint para cada rota**, preservando um mesmo sistema de camadas para permitir comparação.

**Camadas obrigatórias, na ordem de leitura:** (1) evidências físicas ou digitais e documentos produzidos; (2) ações do usuário, requerente ou proponente; **linha de interação**; (3) ações de contato/frontstage, identificando o ator responsável; **linha de visibilidade**; (4) ações de bastidor/backstage, com ator responsável; **linha de interação interna**; (5) processos, sistemas e equipes de suporte. Usar outras camadas próprias do domínio, como **prazos, quóruns, regras jurídicas, riscos e resultados**, quando ajudarem a leitura. Linhas de separação devem aparecer visualmente no quadro, não apenas em legenda. A visibilidade distingue o contato ou ato público do trabalho de preparação: **backstage não significa segredo, nem implica que os atos internos do Poder Legislativo sejam sigilosos**.

**Proibição de texto substitutivo vago nos quadros:** nunca usar fórmulas como "deliberação segundo regras aplicáveis ao colegiado", "quórum regimental", "conforme legislação vigente", "prazo aplicável" ou "autoridade competente" no lugar da informação que o blueprint deve ensinar. Identificar **qual órgão**, **quem decide**, **presença mínima**, **votos favoráveis**, **prazo com unidade** e **efeito**, conforme a etapa. Se a regra depender do órgão (por exemplo, Plenário da Câmara versus comissão), especificar separadamente cada hipótese, indicando o artigo normativo. Se a norma não fixar prazo/quórum especial, declarar isso e explicitar a regra geral fundamentada; quando ainda não for possível verificar uma regra, marcar a pendência de apuração, em vez de publicar uma fórmula genérica como se fosse explicação. Na revisão editorial, procurar ativamente essas frases em todas as células.

**Construção do conteúdo:** cada célula deve ter atividade com verbo, ator e, quando relevante, entrada e saída. Documentos/autógrafos/emendas/pareceres são **evidências ou entregas**, não atores. Mostrar interações entre atores, repasses, retornos, exceções, atividades simultâneas e momentos em que começa ou para um prazo. Diferenciar unidade do prazo (sessões, dias, dias úteis), condição de aplicação, competência e quórum. **Não preencher artificialmente todas as células**: usar indicação de não aplicável. Não tratar PL, PLP, PEC, MPV, PLV, PDL, PRC, PRS e PRN como a mesma rota, nem confundir projeto com lei ou ato final.

**Escolha de representação:** priorizar **matriz com colunas alinhadas e camadas fixas**, em Markdown/HTML ou formato visual de grade que preserve alinhamento real. Mermaid `flowchart` pode complementar com caminhos condicionais, mas não deve substituir a estrutura matricial nem ser apresentado como blueprint se apenas agrupar atores em `subgraph`: Mermaid não garante alinhamento de fases e linhas de visibilidade. Só usar Mermaid para o quadro principal se o resultado realmente conservar a gramática de blueprint após renderização. Preservar layout explorável e legível em telas estreitas, com rolagem horizontal ou ampliação quando necessário.

**Redação e integração:** a página de blueprint deve ser predominantemente visual, com apenas legenda curta, identificação da origem, limite da rota e links para os **artigos canônicos** que explicam regras, prazos e exceções. Expandir siglas na primeira menção, com formato **nome por extenso (SIGLA)**, inclusive no título de cada espécie. Quando uma descoberta exigir explicação adicional, atualizar a seção correspondente do artigo canônico, conforme a regra editorial de refinamento integrado; não acumular ensaios explicativos na página do blueprint.

**Porta de qualidade:** conferir a linguagem visual completa (fases, atores, evidências, frontstage, backstage, suporte, três linhas de separação), rastrear o fundamento de cada regra, verificar links, testar legibilidade e comportamento de tabelas/diagramas no site em desktop/mobile e nos dois temas. Não declarar inspeção visual concluída sem abertura efetiva da página. Se a ferramenta só permitir fluxograma, explicar a limitação em vez de afirmar que um service blueprint foi feito.


**Implementação da visualização 19/11/2026:** para o artigo `art-8c319e6f2a704bd5`, `web/07-service-blueprint.js` transforma as matrizes Markdown em um componente navegável por seis fases, preservando a tabela original como fonte acessível recolhida em `details`. O leitor apresenta camadas, linhas de separação e navegação de fase em fase, mais uma visão horizontal completa. `web/03-article-navigation.js` chama o renderizador depois de gerar HTML e `index.html` carrega o módulo. Testar desktop/mobile, temas, teclado e conteúdo. O Mermaid 11.15 atual não suporta `swimlane-beta`; o Mermaid 11.16+ suporta raias, mas não garante o segundo eixo de fases rígidas exigido pelo serviço. Não reverter para flowchart com subgraphs sem testar visualmente a linguagem completa.

## Gate de publicação de novos blueprints: registro no renderizador (20/11/2026)

**Incidente a evitar:** o artigo de decoro parlamentar foi publicado com matrizes Markdown visíveis porque o renderizador `web/07-service-blueprint.js` reconhecia somente determinados títulos e assumia seis fases. Uma tabela correta no arquivo-fonte não garante um blueprint visual no site.

**Obrigação para cada novo blueprint:** antes de considerar a entrega concluída, verificar que `web/07-service-blueprint.js` reconhece o novo artigo por identificador estável ou rota consistente, sem depender acidentalmente de um conjunto fechado de nomes antigos. O renderizador deve aceitar a quantidade real de fases de cada rota, inclusive quatro ou cinco, sem introduzir células vazias, perda de colunas ou truncamento de rótulos. Preferir identificação explícita e centralizada dos artigos de blueprint a novas expressões regulares dispersas.

**Contrato da apresentação:** a visualização principal deve ser **SVG matricial com visão completa horizontal**, rolagem lateral e opção de tela cheia; fases alinhadas nas colunas, camadas nas linhas, ações e evidências, além das três linhas de separação perceptíveis. Manter a matriz de origem como alternativa acessível recolhida, sem substituí-la por um fluxograma. A altura das células deve acompanhar o conteúdo: não cortar textos longos, prazos nem decisões. Se o componente usar regras rígidas para um tipo de blueprint, adaptar ou generalizar antes da publicação, preservando os que já funcionam.

**Gate obrigatório de validação:** conferir o artigo **na rota do site** (não só o Markdown), testar se cada quadro foi convertido em SVG, se todos os textos permanecem visíveis e se a matriz alternativa está disponível. Verificar desktop, celular, tema claro e escuro, rolagem horizontal, tela cheia, teclado, links e navegação. Executar testes de build, identidade e catálogo; verificar CI e publicação do SHA correspondente. **Não declarar inspeção visual ou publicação confirmada se essas etapas não tiverem sido efetivamente observadas.** Se houver indisponibilidade de navegador, documentar a pendência de inspeção e não afirmar que o blueprint ficou visualmente conforme.

**Encerramento:** informar separadamente: arquivo e artigo vinculados, renderizador habilitado, testes automáticos, integração à `main`, deploy de Pages e inspeção visual. Nenhum desses marcos substitui outro.

## Gate de legibilidade e conexões dos SVGs de blueprint (20/11/2026)

**Incidente Safari, artigo 40 (decoro parlamentar):** o texto dos cartões avançou além das bordas porque a função de quebra de linha usava uma expressão regular incorreta (`/\\\\s+/` em vez de `/\\s+/`). O renderizador também deixou de desenhar as setas horizontais entre fases. A validação do build, isoladamente, não detectou esses defeitos.

**Medição real e altura dinâmica dos cartões (20/11/2026):** usar medição em pixels com a fonte SVG efetiva para decidir a quebra entre palavras; não usar limites de caracteres como 29/34/52 nem truncar em cinco linhas. Recalcular a altura de **cada faixa inteira** a partir do maior texto quebrado entre as fases, inclusive rótulos, com respiro superior e inferior. Manter todas as fases alinhadas, linhas de interação/visibilidade em posições dinâmicas e conectores centralizados após recalcular. Cobrir palavras longas, tabelas extensas e visualizações em tela cheia. Build sem erro não substitui inspeção real da renderização no Safari.

**Quebra de linhas é requisito funcional:** no SVG, elementos `<text>` não fazem quebra automática como texto HTML. Cada cartão precisa dividir o conteúdo em linhas usando separação real de espaços, e posicionar essas linhas em elementos `<text>` ou `<tspan>` com coordenadas distintas. Calcular altura de cada linha e cartão **com base no texto já quebrado**. Não truncar frases com `slice` sem alternativa legível; testar acentos, siglas, palavras longas e casos com mais de cinco linhas. Não depender de uma largura estimada por número de caracteres quando for possível testar largura real do texto e a margem interna.

**Ordem de pintura do SVG (incidente 20/11/2026):** os elementos posteriores no SVG cobrem os anteriores. Desenhar fundos e cartões antes das setas, ou usar um grupo de conectores explicitamente acima das faixas opacas. A presença de elementos `path` no DOM não prova que as setas estão visíveis. Conferir as pontas, contraste e posicionamento nas lacunas entre os cartões. Esse erro ocultou as setas do blueprint de decoro parlamentar apesar de o build ter passado.

**Decisões condicionais e saídas alternativas (incidente rota C, 20/11/2026):** antes de desenhar uma sequência horizontal, conferir para cada fase se ela é **obrigatória, facultativa ou condicionada a um resultado anterior**. Em pareceres de colegiados, representar separadamente arquivamento, proposta de sanção, requalificação para sanção mais grave ou menos grave e os encaminhamentos correspondentes; nunca ligar todas as saídas automaticamente ao Plenário. Recursos facultativos (como recurso à CCJC por vício jurídico) precisam de rótulo explícito, conector visual distinto e caminho descrito para a hipótese **sem recurso**. O desenho precisa mostrar onde o processo termina, segue ou reinicia defesa e instrução. Setas lineares não devem afirmar uma tramitação obrigatória inexistente. Conferir o dispositivo normativo específico de cada saída.

**Conectores são parte do contrato visual:** desenhar setas direcionais que mostrem a progressão horizontal entre as fases pertinentes, com orientação consistente, cor de destaque e contraste nos temas claro e escuro. Reservar corredores para o desenho das arestas, de modo que elas não passem sobre o texto nem se confundam com as três linhas de separação. Quando houver bifurcação, retorno, etapa facultativa ou caminho alternativo, usar conectores ou uma convenção visual legível para distinguir essas condições; **não desenhar conexão como obrigatória se a rota jurídica não for sequencial ou automática**. Conferir ponta de seta, sentido e continuidade no SVG efetivamente renderizado.

**Validação cruzada obrigatória:** além de testes de unidade da função de quebra e dos conectores, inspecionar no **Safari** e em outro navegador os cartões com textos curtos e longos, títulos, setas, linhas de interação/visibilidade/interna, tela cheia e rolagem horizontal. Conferir pelo menos um caso em tema claro e escuro e uma largura de celular. Registrar se a verificação no Safari foi realmente realizada; não declarar correção visual confirmada apenas por CI ou leitura do código.

## Diagramas Mermaid: paleta, contraste e temas (regra obrigatória)

Antes de criar ou alterar um diagrama Mermaid, examinar os tokens de `style.css` e a configuração de `web/05-mermaid.js`. **A cor de destaque do projeto concursos é amarelo/âmbar**, definida por `--accent-blue` (nome legado da variável, que não significa azul). Não copiar a paleta azul do projeto PUC nem inserir hexadecimais azuis nas definições `classDef`, no tema Mermaid ou no CSS deste projeto.

Usar classes semânticas nos diagramas, como `raiz`, `criterio` e `opcao`, e definir os estilos finais no CSS por variáveis específicas para os modos claro e escuro, também no explorador ampliado. O `classDef` do Markdown é apenas fallback para visualização em GitHub ou Obsidian: escolher amarelo/âmbar e neutros com contraste legível, sem depender das variáveis CSS da página.

**Defesa contra divergência de estilos (incidente de contraste):** em blocos Mermaid, verificar o mesmo par `fill`/`color` em três camadas: `classDef` na nota Markdown, `obterCssSemanticoMermaid()` no JavaScript e variáveis `--mc-*` de `style.css`. As três devem ter contraste próprio, sem depender de cascata CSS ou da classe `.nodeLabel` (o Mermaid pode renderizar HTML dentro de `foreignObject` com estilos próprios). Se não for possível garantir que texto claro seja aplicado, preferir fundo creme e texto escuro em **ambos** os temas. Testar os pares numericamente com WCAG AA, inclusive em visualizadores fora do site. Nunca publicar um `classDef` de fundo escuro supondo que a cor branca do texto será necessariamente aplicada.

**Contraste mínimo:** conferir o texto de cada caixa contra seu fundo real, buscando pelo menos 4,5:1 para texto normal e 3:1 para texto grande (WCAG AA). Texto escuro sobre amarelo/âmbar é a primeira opção; em caixas escuras, usar texto claro. Não supor que branco sobre amarelo, nem o texto geral do site sobre um bloco colorido, tenha contraste suficiente. Verificar também bordas, conectores e rótulos de arestas; não confiar apenas na diferença de cor para comunicar categorias.

**Conflito Mermaid × comentários do Obsidian (incidente 05/11/2026):** `%%` é um marcador válido de comentário Mermaid e também delimita comentários Obsidian. O processamento em `web/03-article-navigation.js` utiliza regex para remover comentários Obsidian e pode corromper um diagrama se alcançar blocos fenced. **É obrigatório proteger todos os blocos fenced antes de processar highlights e comentários**, restaurando-os antes do `marked.parse()`, conforme `protegerBlocosCodigoMarkdown()` e `restaurarBlocosCodigoMarkdown()` em `web/04-markdown.js`. Não corrigir esse tipo de falha apagando o conteúdo do diagrama ou alterando indefinidamente a versão da biblioteca. Regressão mínima: dois blocos ` ```mermaid ` com `%%` e `classDef`, seguidos de texto comum com comentários Obsidian; verificar que ambos chegam intactos ao renderer e que o texto comum é tratado normalmente.

**Padrão visual e funcional da PUC (incidente 05/11/2026, explorador ilegível):** o leitor de concursos deve acompanhar a estrutura comprovada de `leorruas/puc:js/mermaid.js` e as regras `.mermaid-wrapper`, `.mermaid-viewport`, `.mermaid-modal` de `leorruas/puc:style.css`: renderização nova do código no modal, `flowchart.curve: "linear"`, ajuste à tela, pan e zoom. Adaptar exclusivamente cores à identidade âmbar de concursos. **Nunca usar seletores gerais do tipo `.node path` ou `.edgePath path` que atribuam `fill` sólido aos conectores**: isso já criou faixas pretas espessas entre os nós. Estilos de nós devem mirar `rect`/`polygon` e estilos de conectores precisam manter `fill: none`, traço fino e contraste nos dois temas. Para rótulos `foreignObject`, fixar `color` do texto em relação ao fundo de cada classe nos dois temas, incluindo o SVG do explorador. Revisar especialmente legibilidade do texto nos cartões, setas e nós de folhas, e verificar que o modo claro não herda contraste do modo escuro.

**Dependência e recuperação:** manter versão explícita do Mermaid no `index.html`, usando o bundle clássico `mermaid.min.js` compatível com a inicialização global atual; não usar `mermaid@latest` nem URLs sem versão, e não misturar scripts ESM e globais sem teste real. O `marked` entrega cercas Mermaid como `pre > code.language-mermaid`: preservar a conversão antes de renderizar. Renderizar cada diagrama de modo independente, registrar o erro real no console e mostrar fallback de texto caso um deles falhe, sem bloquear a navegação ou os outros diagramas. Alterações em `index.html`, `web/05-mermaid.js` ou cores exigem teste de fumaça no GitHub Pages após o deploy. Uma revisão estática de código não equivale a teste do site publicado.

**Validação antes do commit:** renderizar blocos `mermaid` que passam pelo `marked` no GitHub Pages; testar diagramas no artigo e no modal com zoom, em tema claro e escuro, inclusive após alternar os temas e em tela estreita. Conferir legibilidade do texto dentro dos nós, ausência de azul não intencional e compatibilidade do fallback Markdown com Obsidian. Caso não haja inspeção visual disponível, declarar a validação pendente, sem afirmar que ela ocorreu. Ao copiar recursos da PUC, adaptar as cores e os contratos do repositório concursos antes de publicar.


**Regra operacional de privacidade (05/11/2026):** `leorruas/concurso-dados` é a fonte **privada** para sessões e respostas, lacunas, ledger, resultados, progresso, contexto, revisões e arquivos `Avancos.md`. `leorruas/concursos` é a fonte **pública** para teoria, artigos, catálogo não pessoal e flashcards de conteúdo. **Nunca recriar dados individuais no repositório público**, em arquivos de diagnóstico, mensagens de commit, exemplos de artigo ou logs de CI. O protocolo abaixo que menciona `data/sessoes/` e `data/contexto-estudo/` refere-se ao cofre privado. Consolidações são executadas pelo workflow do cofre e não pelo Pages. O navegador público preserva revisões locais, mas ainda não possui sincronização autenticada do perfil de erros. Em caso de falha ao acessar o cofre, não gravar no público como alternativa. Esta regra prevalece sobre qualquer orientação anterior de registrar progresso no site público.


**Perfil pessoal:** o `me.md` público foi reduzido a protocolos de estudo. Seu conteúdo original, incluindo identidade e proficiência individual, foi preservado e conferido por SHA em `leorruas/concurso-dados:me.md`. Agentes que necessitem desse contexto devem ler a cópia privada e manter esses dados fora da publicação.

## Gate preventivo da gravação privada: vale para todos os agentes

**Lição do incidente Câmara 11/11/2026:** uma sessão no cofre privado pode estar salva, mas seu workflow de consolidação falhar por falta de metadados ou referência incorreta. Nas sessões da Câmara, conferir previamente **cada questão** contra `data/questoes-camara.json > subjects`: `subjectId`, `unitId`, `examPart` (P1/P2) e `editalRef`, inclusive questões elaboradas no chat. Conferir `theoryRefs` em dois níveis: `articleId` pertencente à matéria no catálogo da Câmara e subtítulo idêntico ao Markdown atual. A mera existência da nota não valida o subtítulo nem a aderência ao edital.

**Salvar por branch e PR no repositório privado `leorruas/concurso-dados`**. O workflow `validar-sessoes-pr.yml` executa os mesmos validadores da consolidação sem persistir projeções. Mesclar somente após o check verde. Quem dispõe de shell/Codex pode executar `node scripts/sync-private-study.mjs --validate-only` **a partir do cofre privado** antes do merge. Pelo conector GitHub sem shell, criar a branch e a PR para obter uma execução real; não declarar que validou só porque inspecionou o JSON. Após o merge, confirmar separadamente o commit da sessão e o sucesso do workflow de consolidação. Caso haja falha, preservar o arquivo original e seu ID, corrigir a causa e conferir as projeções.

As invariantes **editoriais globais públicas**, inclusive a indexação de notas novas em `index.md`, pertencem ao CI público (`validar-publico.yml`). Não fazer uma falha editorial não relacionada impedir a atualização dos dados privados. Manter todos os registros pessoais exclusivamente no cofre privado. O `AGENTS.md` e `data/sessoes/README.md` privados são os contratos detalhados desta rotina.

## Mapa operacional entre repositórios (regra prioritária)

Antes de usar caminhos como `data/sessoes/` ou `00 - Desempenho/`, identificar a qual repositório pertencem. Para agentes, o formato `leorruas/<repositorio>:<caminho>` elimina ambiguidades. O cofre possui [instruções próprias](https://github.com/leorruas/concurso-dados/blob/main/AGENTS.md); lê-las sempre que a tarefa envolver histórico individual.

| Repositório | Documentos e uso |
| --- | --- |
| `leorruas/concursos` **público** | `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, `2 - Editais/**`, `3 - Materias/**` exceto `Avancos.md`, `data/flashcards.json`, `data/catalogo-materias-por-concurso.json`, `data/planos-estudo/cgu-2026.json` (sem tentativas pessoais), `data/corpus-*.json` |
| `leorruas/concurso-dados` **privado** | `data/sessoes/README.md`, `data/sessoes/<id>.json`, `data/contexto-estudo/indice.json`, `data/contexto-estudo/<concursoId>.json`, `data/contexto-estudo/<concursoId>/<materia>.json`, `data/contexto-estudo/flashcards-prioridades.json`, `data/questoes-ledger.json`, `data/erros-recorrentes.json`, `data/provas.json`, `data/sessoes-saidas.json`, `data/ingestoes-processadas.json`, `00 - Desempenho/**`, `3 - Materias/**/Avancos.md` |

**Ao retomar estudos:** consultar `CHAT.md` neste repositório e ler os contextos no cofre. Usar a biblioteca pública para notas e fontes. **Ao registrar:** gravar apenas a sessão no cofre; a action privada consolida os indicadores derivados. **Ao fechar uma unidade:** textos e cartões sem dados pessoais são editados no repositório público, enquanto checkpoints e resultados ficam no privado. Commits não são atômicos entre repositórios: validar separadamente cada lado; nunca incluir a sessão no público para simular uma transação única. Uma falha de acesso ao cofre impede o registro remoto pessoal.

**Discursivas:** `data/planos-estudo/cgu-2026.json` no público descreve a rotina, e o campo `discursivePractice.attempts` deve permanecer sem dados individuais; textos, tentativas e correções pertencem a `leorruas/concurso-dados:00 - Desempenho/Provas/`. **Flashcards:** `data/flashcards.json` público contém cartões; prioridades de erros e datas individuais ficam no cofre. O navegador ainda não recebe essas prioridades privadas automaticamente. Instruções antigas que sugiram buscar `raw.githubusercontent.com` para obter prioridades pessoais, editar `00 - Desempenho/` público ou gravar resultados no catálogo público estão revogadas.

**Banca da preparação:** CGU 2026, especialidade Auditoria: **Cebraspe, itens Certo/Errado (C/E)** em todas as matérias, incluindo Contabilidade e Avaliação de Políticas Públicas. Ler `activeExam` no contexto antes de escolher o formato. As instruções da Dataprev/FGV e a regra de cinco alternativas pertencem à Dataprev. A prova histórica CGU 2022/FGV é apoio de conteúdo; o treino da CGU 2026 segue Cebraspe. Na primeira resposta de uma retomada da CGU, indicar brevemente “CGU 2026: Cebraspe, C/E”. Para retomada genérica, seguir a prioridade definida em `CHAT.md`.

**Projeto Dataprev legado:** os arquivos `00 Dashboard.md`, `Log de erros.md`, `Questoes e Simulados.md`, `Cronograma.md` e `O que estudar.md` que registram resultados ou listas concluídas estão em `leorruas/concurso-dados:4 - Projetos/dataprev-2026/`. Não reconstruir suas métricas no público nem criar links públicos para seus caminhos antigos.

## Fluxo rápido de estudo pelo chat: prioridade operacional

A partir de 03/11/2026, aulas e checkpoints de microtreinos seguem `CHAT.md`. Nesse escopo, a entrada curta e `data/contexto-estudo/<concursoId>.json` substituem a releitura integral recorrente de governança e ledger. As regras completas continuam aplicáveis a manutenção, ingestão legada, notas novas e simulados integrais. Salvar uma sessão em `data/sessoes/<id>.json` no fechamento do bloco; a automação atualiza as métricas derivadas. Corrigir na origem, preservar o legado e consolidar teoria obrigatoriamente no fechamento de cada unidade, antes da próxima unidade da matéria, conforme CHAT.md. As antigas exigências de editar manualmente todas as superfícies por microtreino ficam substituídas pela projeção automática validada. Ver `data/sessoes/README.md`.


**Contrato para baterias mistas (v3):** a sessão privada possui `scope: "mixed"`, `subjectId: null`, `unitId: null`; cada questão declara explicitamente seu próprio `subjectId` e `unitId` ou `null` quando a correspondência ao edital não foi comprovada. Sessões de uma matéria usam `scope: "subject"`. O rótulo original `discipline` permanece intocado. `lastActivity` representa a última bateria realizada; `resume` representa o último checkpoint curricular da matéria. Uma bateria mista pode atualizar lacunas e resultados de várias matérias, mas não fecha unidades nem substitui a retomada curricular. Conferir a versão remota de `leorruas/concurso-dados:data/sessoes/README.md` antes da gravação e executar a validação integral. `diagnostico-misto` é marcador legado, não nome de matéria.

## Continuidade por matéria: contrato operacional vigente

O fluxo cotidiano descrito em `CHAT.md` usa os contextos gerados em `data/contexto-estudo/<concurso>/<materia>.json` e novas sessões de formato 3, preservando a leitura do legado nos formatos anteriores. Essa regra prevalece sobre exigências anteriores de reabrir ledger, editar hub, avanços e notas a cada microtreino. O checkpoint único preserva respostas, exposição, fronteiras, dúvidas, destinos editoriais e próximo passo; a consolidação automática projeta os demais arquivos. Hubs e notas organizam conhecimento, sem manter manualmente uma segunda progressão. Para matérias sem notas ou Avancos.md, aceitar fonte normativa e localizador no checkpoint; registrar a lacuna editorial para o fechamento obrigatório da unidade. Conhecimento documentado, exposição, aprendizagem observada, desempenho competitivo e retenção são eixos distintos por concurso. Fechamento didático não comprova retenção; recuperação imediata permite avançar mantendo revisão pendente. O catálogo inicial da CGU reaproveita unidades existentes e mapeia o checklist sem criar aulas ou resultados fictícios. Contrato e auditoria em [[1 - Planejamento/Continuidade de estudo por materia|Continuidade por matéria]].

## Ordem pedagógica do índice, hub e EPUB

Para cada matéria, a ordem da **primeira ocorrência dos links para seus artigos** no hub `3 - Materias/<Matéria>/<matéria>.md` é a sequência didática canônica; o grupo correspondente no `index.md` deve refletir exatamente essa ordem, sem depender da numeração histórica dos arquivos. Cada artigo existente deve constar uma vez nesse percurso, com distinção textual para conteúdos de apoio e outros editais; referências cruzadas, reprises e links externos não contam como capítulos adicionais. Ao criar, mover ou reorganizar uma nota, atualizar hub e índice juntos, conferindo cobertura, links, `articleId`, aliases e `theoryRefs`.

O catálogo v2 registra **pertencimento ao concurso**, que não equivale necessariamente à ordem de leitura: não reordenar `articleIds` cegamente, pois podem existir materiais de apoio, itens de outros editais e consumidores que interpretam essa lista como identidade. Ao exportar EPUB por concurso, usar a ordem do hub filtrada pelos artigos pertencentes ao concurso, descrevendo exclusões; evitar ordenar pelo nome do arquivo. Preservar URLs antigas e validar as referências antes de publicar.

## Fechamento editorial com ressalva visual: critério obrigatório (16/11/2026)

**Duas dimensões independentes:** (1) revisão editorial, didática e jurídica do artigo; (2) publicação e integridade técnica. A inspeção visual em navegador ou Kindle é um terceiro controle **complementar**, consolidado por matéria, que não pode impedir indefinidamente o fechamento de um artigo quando inexequível na sessão. Não se admite declarar inspeção visual feita sem visualização efetiva.

**Estado permitido: `revisão integral concluída com ressalva visual`.** Só atribuir ao artigo quando houver evidência individual e verificável de: leitura do texto inteiro e cotejo das proposições relevantes com fontes primárias vigentes; títulos, termos legais, explicações e exemplos revistos; todos os C/E e gabaritos conferidos; tabelas e Mermaid auditados estruturalmente, com código e legendas íntegros; glossário, flashcards, IDs, aliases e referências relacionados reconciliados; ausência de links e `theoryRefs` quebrados nas validações disponíveis; commit na `main`, CI/build pertinentes aprovados e publicação GitHub Pages confirmada no SHA correspondente, com checagem do conteúdo publicado por meios disponíveis. Anotar fontes, testes executados e limites de evidência no estado da frente. CI verde isoladamente nunca equivale à auditoria integral do conteúdo.

**Ressalva explícita:** registrar `inspeção visual não realizada`, os itens visuais não testados (Mermaid em claro/escuro, modal, mobile, contraste percebido, texto cortado, navegação por teclado e âncoras via navegador) e o motivo da indisponibilidade. Distinguir defeito conhecido de teste indisponível: **falha real** de renderização, link, legibilidade, acessibilidade, norma, gabarito ou build permanece bloqueio a corrigir e **não** pode ser renomeada como ressalva visual. Se o conteúdo publicado não puder ser verificado nem por manifesto/build/artefato servido, manter `publicação pendente`, não certificar.

**Validação automatizada compensatória:** verificar e registrar cobertura e ordenação de artigos do hub/índice/catálogo, integridade de IDs, hashes, `theoryRefs`/headings, links de artigos e imagens, gabaritos C/E, duplicação de códigos editoriais visíveis, blocos Mermaid bem formados e saída de build/manifesto do site. Usar verificadores existentes e ampliar testes quando necessário, em tarefa técnica própria; **não presumir que um validador ausente foi executado**. Testes de sintaxe Mermaid não comprovam renderização nem contraste. No site, ocultação de gabarito e acesso por clique/teclado só podem ser considerados validados após existir implementação correspondente.

**Fechamento consolidado antes do EPUB:** após o conjunto de artigos estar editorialmente concluído, realizar **uma inspeção visual da matéria como um todo**, com amostra representativa das telas e diagramas, navegação, interação e links; corrigir defeitos encontrados antes de converter. Na exportação EPUB, validar sumário, imagens, tabelas e notas clicáveis com retorno, idealmente em Kindle Previewer/leitor real. Quando o teste visual continuar indisponível, registrar risco residual específico e entregar material com ressalva, sem afirmar compatibilidade visual. Não reabrir 34 auditorias editoriais apenas por ausência do teste visual.

**Prioridade sobre instruções históricas:** esta regra substitui exigências anteriores de inspeção visual **por artigo** como condição absoluta de certificação. Evidências de revisões antigas devem ser reclassificadas **caso a caso**, sem declarar todos os artigos concluídos por simples mudança de norma. As frentes A, Didática e B continuam exclusivas e a publicação direta na `main` permanece vigente, sem PR rotineiro.

## Revisão para leitura contínua e exportação EPUB (regra obrigatória desde 16/11/2026)

Antes de revisar **qualquer matéria** para publicação e futura exportação, ler [[1 - Planejamento/Revisao editorial para leitura e EPUB - diretrizes|Revisão editorial para leitura e EPUB]]. Aplicar as regras ao **artigo inteiro**, não só a blocos recém-editados: (a) retirar códigos técnicos de títulos e subtítulos apresentados ao leitor, preservando `articleId`, IDs, frontmatter, URLs/aliases, headings usados em `theoryRefs` e demais vínculos canônicos; não mudar âncoras sem atualizar e validar todas as referências; (b) identificar cada lei e dispositivo com nome/objeto, número/ano e explicação de seu conteúdo, hipótese e efeito; (c) integrar correções e aprofundamentos nos parágrafos/seções pertinentes, sem criar subtítulos editoriais de "refinamento" ou "atualização" sem tema autônomo; (d) eliminar redundâncias entre capítulos mediante definição canônica e remissão contextual, preservando autonomia didática, exceções, exemplos distintos e repetições que tenham função de recuperação ativa; (e) manter gabaritos e justificativas íntegros no Markdown, separando sua exibição por meio.

**Superfícies diferentes:** no GitHub Pages a apresentação desejada para questões C/E é resposta oculta até interação deliberada, com botão/click/touch, teclado, foco e leitor de tela; hover isolado não atende acessibilidade. No EPUB/Kindle, as respostas devem ser notas clicáveis com retorno ao item e fallback compatível, não respostas abertas imediatamente depois da pergunta; exigir teste real no leitor antes de declarar suporte a popup. No Obsidian e no GitHub Markdown, o conteúdo deve continuar acessível sem JavaScript. Essas são diretrizes de implementação, não afirmação de que a interface ou o exportador já foram modificados. A sequência, no repositório público, é revisão na fonte → commit direto na main, validação e publicação Pages → exportação EPUB do SHA verificado. O cofre privado segue sua própria regra de PR.

## Protocolo de aprendizagem conceitual e arquitetura de artigos (Câmara e demais concursos)

**Regra editorial prioritária aprovada em 05/11/2026.** O aluno aprende por construção de conceitos, definição do objeto, estrutura interna e relações progressivas. Evitar panoramas corridos como substituto de teoria, mesmo quando há prazo curto. É preferível dividir um tema em muitos artigos autônomos a criar uma única nota que enumere tópicos sem explicar o funcionamento deles. A granularidade depende da pergunta conceitual e não de limite artificial de extensão.

**Antes de criar artigos:** ler o edital e retificações; construir mapa do programa em unidades com pré-requisitos, conceitos nucleares, classificações, autores, normas, relações e exceções; auditar artigos existentes; preferir refinar/reutilizar o que já tem autonomia e criar novo quando uma pergunta distinta exigir desenvolvimento próprio. Um título em plano não comprova artigo criado ou conhecimento aprendido. Usar apenas o catálogo v2 para vincular artigos ao concurso; não atribuir pertencimento pela pasta física nem copiar uma nota para cada edital.

**Dentro de cada artigo:** começar por situação e pergunta concreta; definir todos os termos necessários antes de usá-los; mostrar finalidade, critério classificatório, componentes, ordem/etapas; limites e exceções; comparar fronteiras apenas depois de construir cada categoria; apresentar casos progressivos com uma variável alterada por vez; incluir contraexemplo e 1 a 3 questões comentadas no formato da banca, quando pertinentes; ligar explicitamente a pré-requisitos e artigos vizinhos. Distinguir fato, hipótese, simplificação didática e norma. O conteúdo deve poder ser estudado isoladamente sem depender de uma aula oral para preencher definições omitidas. Se não houver substância, manter em planejamento, sem publicar stub ou inflar cobertura.

**Autores:** problema investigado → conceitos e termos → modelo/teoria → estrutura e categorias → condições/limites → autores próximos e conflitos de classificação. Não misturar escolas, modelos e paradigmas como categorias de um único eixo. **Normas:** objeto e finalidade → competência/sujeitos → hipótese → procedimento/efeito → exceções/prazos → comparação normativa. **Tecnologia e métodos:** problema → operação → insumos/saídas → condições e riscos → alternativas. A ordem de estudo deve acompanhar esses pré-requisitos, não apenas a enumeração do edital.

**Fases:** F0 mapear fontes e arquitetura; F1 publicar núcleos fundadores; F2 aprofundar estruturas, autores e procedimentos; F3 completar limites e fronteiras; F4 integrar, revisar e auditar cobertura. Publicar em lotes pequenos de 1 a 3 artigos completos, integrando hub, índice e catálogo no mesmo commit. Fazer primeiro um piloto e ajustar o padrão antes de multiplicar. Status editorial (planejado, redigido, validado, publicado) e progresso real (exposto, aplicado, recuperado, retido) são independentes. No estudo pelo chat, revisar e consolidar cada nota imediatamente ao concluir o artigo, e fazer fechamento da unidade conforme CHAT.md; registros de respostas permanecem no cofre privado.

**Câmara 2026:** seguir [[1 - Planejamento/Camara 2026 - Arquitetura conceitual e plano de artigos|arquitetura completa por 13 trilhas e fases]], mantendo os 11 subjectIds existentes até migração explícita. Cebraspe, C/E, Cargo 1 Divulgação Institucional; prova prevista 17/01/2027. Reaproveitar teoria com CGU/Dataprev apenas quando fonte e conceito coincidirem; os itens, formato, discurso e progresso são específicos. Não simplificar para fichas de uma página ou iniciar baterias sobre termos ainda não construídos.

## Lembretes de estudo: protocolo geral para qualquer matéria

O marcador `#lembrete` aciona a nota de **lembretes e distinções para a prova** da matéria corrente, conforme o padrão já usado em [[3 - Materias/Contabilidade Publica/12 - lembretes e distincoes para prova|Contabilidade Pública]]. **Aplicar a todas as matérias e concursos**, sem solicitar o caminho ao estudante.

- Se a nota já existe, acrescentar a anotação por tema. Se não existe, criar `lembretes-<slug-da-materia>.md` na pasta da disciplina, com nome específico para evitar colisões de slug entre matérias e sem numeração que conflite com artigos do edital. Criar um `articleId` estável e incluir a nota no hub, no `index.md` e no catálogo do concurso, em commit atômico, seguindo as regras de novas notas.
- Preservar **literalmente o lembrete do estudante**, sem destaque. Inserir abaixo, quando necessário, uma precisão, explicação, exceção ou contraexemplo do assistente entre marcas `==...==` do Obsidian, por exemplo `==**Precisão:** ...==`. Todo conteúdo acrescentado pelo assistente nessa nota deve ser visualmente distinguível do original. Não editar silenciosamente a frase enviada.
- Vincular cada conceito à seção teórica canônica. Se a dúvida revelar uma lacuna geral, aprimorar também a nota teórica sem duplicar longos trechos. O glossário deve receber refinamento de verbete existente ou novo termo **somente quando houver autonomia conceitual**, com backlog e validação correspondentes. Evitar duplicatas.
- A nota de lembretes registra conhecimento geral, **sem dados pessoais de desempenho, respostas, confiança ou histórico de erros**. Esses registros ficam somente no cofre privado. Um `#lembrete` não conta como exercício, evidência de retenção nem fechamento de artigo.
- Respeitar o gate de integridade do `main` e confirmar publicação. Ao falhar, manter a pendência e não declarar sucesso.

## Glossário: definições completas e autocontidas (regra editorial obrigatória)

**Critério de publicação:** cada verbete publicado deve ser **suficiente para compreender, reconhecer e aplicar o conceito sem depender de conversa anterior, de outro verbete ou da leitura do artigo inteiro**. “Definição completa” significa **suficiência conceitual verificável, não comprimento de texto**. Evitar resumos que só reformulam o nome, siglas sem explicação, definições que omitem condições, categorias sem fronteiras e exemplos que não ajudam a classificar casos. A existência dos campos JSON e o status `reviewed` não demonstram, por si, qualidade didática.

## Regra obrigatória: construir flashcards pela finalidade, fronteira e aplicação (09/11/2026)

**Aplicar a todo cartão novo e a toda revisão editorial**, independentemente de concurso, matéria, banca ou origem (artigo ou glossário). A auditoria editorial de 09/11/2026 completou contrastes aplicados nos 233 cartões então existentes. Isso é uma verificação de estrutura didática, **não** certificação de exatidão normativa ou dificuldade real de prova.

Um flashcard precisa permitir **entender, classificar e justificar** um conceito, não apenas repetir uma definição. Criar e conferir:

1. **Definição e propósito (`definition`)**: dizer o que é, **para que serve** e, quando houver classificação, qual critério determina seu enquadramento. Distinguir **finalidade** (por que/para que se faz), **técnica** (como se faz), condição, etapa, alcance e resultado. Não transportar a definição verdadeira de uma categoria para sua vizinha.
2. **Aplicação observável (`example`)**: criar situação curta, concreta e coerente com a fonte. Se houver valor calculado ou diferença, mostrar expectativa, valor registrado, diferença e seu **significado condicionado**; divergência isolada não prova irregularidade, fraude ou causalidade.
3. **Fronteira conceitual (`confusion`)**: declarar a confusão mais provável entre conceitos próximos e **o critério que resolve a dúvida**. Evitar apenas avisos genéricos como “não confunda A com B”, sem explicar por quê.
4. **Recuperação aplicada (`contrast.prompt` e `contrast.answer`)**: campos obrigatórios editorialmente em cartões novos. A pergunta deve obrigar a **escolher, diferenciar ou justificar** a categoria em um caso ou confronto plausível; a resposta deve explicitar a palavra, condição ou finalidade que muda o enquadramento. Não criar contraste artificial, pergunta cuja resposta seja mera repetição da definição, nem resposta que presuma fato não apresentado.
5. **Fundamentação e identidade**: confirmar fonte, localização normativa quando aplicável, `note.articleId` e `note.section` existentes, `examIds`, `subjectIds` e `editalRefs`. Preservar `id` quando o conceito continua o mesmo; incrementar `revision` em alterações materiais, atualizar `reviewedAt` após conferência e registrar novo ID se mudar o objeto conceitual. Não inventar fonte ou afirmar validação por prova sem conferir a prova.

**Fonte preferencial para novos cartões e refinamentos: erros, comentários e justificativas do estudo real.** Antes de ampliar o banco, consultar o cofre **privado** `leorruas/concurso-dados`: `data/contexto-estudo/<concursoId>/<materia>.json`, respectivas páginas `revisoes-*.json`, `data/sessoes/*.json` da matéria, `data/contexto-estudo/flashcards-prioridades.json` e, quando relevante, `3 - Materias/**/Avancos.md`. Ler especialmente `questions[].studentReasoning`, respostas e confiança, `learning.doubts[].text`, `learning.pending`, diagnósticos e comentários livres. **Uma resposta correta com justificativa errada ou insegurança declarada também pode indicar lacuna**, mas não registrar erro objetivo nem recorrência inexistente.

**Critério de escolha:** cruzar cada confusão observada com `data/flashcards.json` por `conceptIds`, matéria e confronto semântico. Se há cartão correto porém genérico, **refinar** seus exemplos, limites e contrastes; se o comentário revela fronteira aplicada ainda não coberta, criar **novo cartão com caso independente**, vinculado ao `conceptId` existente. Se a dificuldade já tem bons cartões, preferir reteste espaçado ou questão inédita, evitando proliferação de cartões quase iguais. Priorizar erros seguros persistentes, justificativas incorretas apesar de acerto e dúvidas repetidas; preservar a diferença entre evidência de erro, dúvida, recuperação imediata e retenção comprovada.

**Privacidade e rastreabilidade:** usar os registros privados como diagnóstico, nunca copiar respostas pessoais, identificadores de sessão, falas ou desempenho para o JSON público. O cartão público deve conter apenas conceito, caso genérico, referência teórica verificável e `conceptIds` não pessoais. Não fazer do comentário do estudante fonte de verdade jurídica: confrontar o enunciado com lei, manual, edital ou prova real antes de publicar. Não alterar índices, estatísticas nem prioridades privadas manualmente para simular desempenho; a consolidação deve seguir o fluxo previsto no cofre. Anotar editorialmente quais confusões foram contempladas sem reproduzir dados individuais.

**Exemplo de referência: procedimento analítico substantivo.** `Analítico` designa o método de comparar relações e expectativas; `substantivo` designa a finalidade de obter evidência sobre valores, saldos ou transações. A mesma comparação pode apenas selecionar riscos no planejamento. Em 1.200 bolsas de R$ 400, a expectativa de R$ 480 mil versus registro de R$ 495 mil revela diferença de R$ 15 mil; antes de concluir, avaliar dados, precisão da expectativa, limite aceitável e explicações. O contraste deve testar *por que a análise tem ou não finalidade substantiva* e *qual conclusão a diferença permite*.

**Porta de qualidade antes de publicar:** ler isoladamente definição e exemplo como iniciante; depois responder ao `contrast.prompt` sem consultar `contrast.answer`; verificar ao menos um conceito vizinho plausível, exatidão das contas, limites legais e ausência de inferência excessiva. Preferir diferenças reais entre categorias a distratores com palavras absolutas. Conferir a norma e, quando declarada dificuldade de banca, as provas de referência. Rodar os validadores e testes de flashcards existentes e conferir links e campos; **passar em validação de JSON não comprova precisão conceitual**. Não atribuir domínio nem registrar erro individual no repositório público; prioridades e erros individuais pertencem ao `leorruas/concurso-dados`.

Se o cartão vier do glossário, revisar o verbete-fonte para evitar divergência entre a definição publicada e a derivada. Manter consistência com `scripts/FLASHCARDS.md` e com as regras de linguagem simples abaixo.

## Linguagem simples: regra obrigatória para glossário e notas de estudo

**Aplicar antes de publicar ou revisar verbetes, flashcards derivados do glossário e explicações introdutórias dos artigos.** O glossário é a primeira porta de entrada para quem ainda não conhece o conceito: precisa permitir que a pessoa **entenda de fato o significado sem ter de abrir outra nota**. Exatidão técnica permanece obrigatória, mas a linguagem técnica deve ser explicada, e não usada como ponto de partida.

**Ordem editorial dos campos do glossário:**
- `definition`: começar com **“o que é, em palavras comuns”** e para que serve, preferindo uma ou duas frases diretas. Explicar siglas e termos inevitáveis. Colocar artigo de lei, nomenclatura de quadro, atributo técnico e exceções **depois da definição compreensível**, quando necessários.
- `example`: apresentar um **caso concreto, pequeno e observável**, que deixe claro o objeto e o que acontece; usar números simples quando ajudam. O exemplo não pode exigir que a pessoa já saiba o conceito.
- `contrast`: explicar **a diferença para o conceito vizinho** em linguagem comum, mostrando o critério que muda a classificação; só então acrescentar terminologia formal de prova.
- `cebraspeTrap`: indicar a **confusão real que a banca explora**, com o motivo, evitando inventar proibições ou simplificações falsas.
- `aliases` e `sources`: preservar termos que as provas e as normas usam e manter fontes verificáveis. Linguagem simples não autoriza alterar o alcance legal.

**Teste de leitura obrigatório:** antes de salvar, ler somente `definition` e `example` como alguém que nunca estudou a matéria. Se aparecerem expressões como “mobilização ou alienação”, “atributo P”, “passivo patrimonial”, “reconhecimento por competência”, “efetivação” ou siglas sem explicação, perguntar se a pessoa entenderia o texto **sem consultar outra definição**. Substituir por explicação comum ou explicar imediatamente. Manter a palavra técnica entre parênteses quando ela for importante para a prova.

**Exemplo de padrão:** “Ativo permanente é um bem ou valor do governo que, pelas regras do orçamento, não pode ser simplesmente transformado em dinheiro disponível para gastar. Os computadores de uma escola pública são um exemplo.” Depois, na diferença e no detalhamento, explicar o critério da Lei nº 4.320/1964 e distinguir de ativo não circulante. Evitar começar por “categoria legal do segundo quadro” ou “cuja mobilização ou alienação depende de autorização legislativa”.

**Flashcards:** os cartões gerados do glossário herdam `definition`, `example` e `cebraspeTrap`; portanto, corrigir **na fonte do glossário**, não somente no texto de um cartão derivado. Cartões precisam ter frente clara, resposta compreensível, um exemplo e uma confusão útil; verificar limites de campos e executar as validações existentes. Não afrouxar o validador para esconder deficiência editorial.

**Alcance:** aplicar a todos os concursos e matérias, especialmente a contabilidade, direito, orçamento e administração, mantendo a linguagem técnica **como segunda camada** necessária para acertar a prova. Na dúvida, primeiro uma explicação simples, depois o nome técnico, a regra e a exceção. A nota completa pode ser mais aprofundada que o verbete, mas seu começo também deve permitir compreender o assunto.

**Complemento da revisão dos 227 verbetes:** termos técnicos usados em enunciados devem aparecer com uma explicação em palavras comuns. Verificar se o leitor consegue identificar quem deve, quem recebe e o que mudou, sem precisar abrir outro artigo.

**Contrato semântico de cada verbete** em `data/glossario/termos/*.json`:
- `definition`: dizer **o que é, para que serve, qual a regra/critério definidor e em que sistema, etapa, demonstração, quadro ou norma se aplica**, quando relevante. Expandir a sigla na primeira menção e situar o objeto antes da comparação.
- `contrast`: explicar **o que entra, o que não entra, o limite da categoria, exceções e distinções com conceitos vizinhos**, identificando a diferença exata de requisito, causa, momento ou finalidade. Para contas, regimes, obrigações e procedimentos, explicitar **quando surgem, mudam de classificação ou se extinguem**.
- `example`: usar caso suficientemente concreto para verificar o critério; preferir **caso e contraexemplo** ou **mesmo cenário antes/depois do evento que muda a classificação**. Nomear números ou etapas apenas quando agregarem significado; não inventar fatos de órgãos reais.
- `cebraspeTrap`: mostrar a **confusão plausível que a banca poderia explorar**, sem se apoiar apenas em generalizações com “sempre” ou “nunca”. Adaptar o tipo de pegadinha à banca do concurso, mantendo a estrutura já existente.
- `sources`: indicar fontes normativas, manuais e autores pertinentes, **com versão/ano, dispositivo ou seção sempre que necessário**. Distinguir formulação da fonte, exemplo pedagógico e interpretação; não inventar regra para preencher lacuna. `articleIds`, `subjectIds`, `contestIds`, `aliases` e `id` devem continuar íntegros, apontando para artigo canônico e contexto verdadeiro.

**Teste obrigatório antes de marcar `reviewed`:** o leitor precisa conseguir responder **(1) o que é, (2) em qual contexto entra, (3) o que inclui e exclui, (4) quando nasce ou muda, se aplicável, (5) como difere da categoria próxima e (6) como classificaria um exemplo limítrofe**. Quando uma resposta essencial faltar, aprofundar ou sinalizar a lacuna; **não publicar stub nem marcar revisado apenas porque o JSON compila**. Nem toda categoria exige uma etapa temporal: aplicar o critério somente quando pertinente.

**Integração e operação:** antes de criar, buscar termo existente, aliases e notas vinculadas. Evitar duplicatas e corrigir entradas incompletas na origem; fazer a menor alteração que resolva a lacuna. Ao inserir verbete, criar também a entrada correspondente em `data/glossario/backlog-cgu-2026.json` porque `scripts/glossary-data.js` exige a presença do ID e o termo exato no backlog. Preservar IDs e vínculos, revisar a apresentação da UI e os flashcards gerados. Validar JSON, o build, os testes do glossário e a integridade de links antes de declarar publicação concluída. A revisão em lotes do acervo existente está registrada na [issue #15](https://github.com/leorruas/concursos/issues/15): não multiplicar verbetes antes de fechar lacunas relevantes nos atuais.

**Exemplo-guia:** “ativo financeiro”, “ativo permanente”, “passivo financeiro” e “passivo permanente” pertencem ao **2º quadro do Balanço Patrimonial** (critério legal F/P). A definição deve distinguir esses conceitos de **ativo/passivo patrimonial** do **Quadro Principal** e de **circulante/não circulante**; indicar que crédito tributário ainda não arrecadado pode ser P, dinheiro em caixa é F, e empenhar parcela de dívida pode alterar P para F. Fonte: Lei nº 4.320/1964, art. 105, e MCASP 11, Parte IV. Um glossário que omita essas fronteiras ainda precisa de refinamento.

## Siglas por artigo: regra editorial

Na primeira ocorrência em prosa de cada artigo, apresentar o nome completo seguido da sigla entre parênteses; depois usar a sigla. O artigo deve ser compreensível isoladamente, mesmo quando reutilizado em outro concurso. Conferir também listas, tabelas, questões comentadas, títulos e diagramas: quando a sigla aparecer primeiro em um título ou link de navegação, expandi-la na introdução do texto. Siglas ambíguas precisam ser resolvidas conforme a fonte, nunca por substituição em massa. Explicar também o conceito se a expansão não bastar para o estudo. Ver `1 - Planejamento/Padronizacao de siglas e primeiras ocorrencias.md`, `data/dicionario-siglas-editorial.json` e o verificador não bloqueante `node scripts/audit-acronyms.js`. Alertas são hipóteses de revisão, não autorização para editar sem conferir o significado.

## Organização pedagógica por perguntas e conjuntos conceituais

Antes de listar tipos, classificações ou siglas, apresentar a **pergunta que o classificador responde**, sua finalidade e o critério de separação. Em seguida, explicar suas categorias internas com um caso concreto que evolui por uma mudança de cada vez. Só então comparar classificadores vizinhos e aplicar itens de prova. Não usar percentuais de acerto isolados como evidência de compreensão; observar aplicação a casos novos e confiança declarada. O chat pode usar questões curtas durante a aula e baterias maiores na revisão, conforme `CHAT.md`.

Exemplo de organização transversal em Orçamento Público: **natureza da receita** pergunta qual operação originou o ingresso (corrente/capital e origens); **fonte/destinação** pergunta quais regras regem a aplicação do recurso; **indicador de resultado primário** pergunta se a receita entra no cálculo do resultado primário (primária/financeira). São eixos simultâneos e independentes; nunca apresentar corrente/capital como sinônimo de primária/financeira, nem natureza como sinônimo de fonte.

**Ao terminar o estudo de cada artigo**, antes de avançar para o próximo artigo, fazer uma passagem de reorganização editorial do próprio texto: explicitar os conjuntos conceituais e qual pergunta cada um responde; mostrar finalidade, critério, estrutura interna, categorias, fronteiras, contraexemplos, conexões e exemplos progressivos de cobrança da banca. Reorganizar somente o artigo concluído, aproveitando e refinando conteúdo existente; não esperar a conclusão da matéria, da disciplina ou de toda a unidade. Não confundir essa passagem com a consolidação de unidade, que continua obrigatória no seu próprio momento. Evitar reorganização cosmética e duplicação de teoria; preservar `articleId`, aliases, âncoras, fontes, links e vínculos do catálogo. Conferir publicação e registrar a revisão editorial no fluxo aplicável.

### Registro de exercícios no fechamento de cada artigo

**Fechar um artigo implica duas entregas, sem exceção:** (a) revisar e complementar a nota pública com explicações, relações e exemplos; (b) registrar no cofre privado `leorruas/concurso-dados:data/sessoes/` **todos os itens efetivamente respondidos** durante o estudo desse artigo, com enunciado, resposta, gabarito, confiança declarada, correção, tema/conceito e vínculo ao artigo. O registro não depende de o estudante pedir nem de ter sido apresentada uma bateria formal: perguntas C/E respondidas uma de cada vez no chat também contam. Não registrar itens apenas apresentados, sem resposta.

Checkpoints intermediários continuam recomendados ao concluir baterias e em conversas longas para reduzir perdas. **No fechamento do artigo, reconciliar o que já foi gravado com as questões do chat**, registrar apenas o que estiver faltando, manter IDs estáveis e evitar duplicações. Um artigo concluído pode ter vários arquivos de sessão; quando uma sequência atravessar para outro artigo, separar os registros por artigo/unidade e manter o seguinte em andamento. Registrar `confidence: unknown` se a segurança não foi declarada; nunca deduzi-la pelo acerto. Não inventar enunciados, horários exatos, justificativas ou respostas que não estejam no histórico. Marcar como aprendizagem guiada, sem confundir acerto imediato com retenção.

Confirmar **separadamente** gravação da nota pública, checkpoints privados e consolidação do workflow privado; commits entre repositórios não são atômicos. Se uma parte falhar, preservar a pendência concreta e não declarar fechamento completo. As notas públicas recebem apenas conhecimento geral e exemplos **sem respostas e desempenho individual**; todo histórico pessoal fica no cofre privado. Seguir o contrato de `data/sessoes/README.md` do cofre. A revisão editorial obrigatória ao fechar a unidade segue independente deste registro por artigo.

### Progressão quando os conceitos são difíceis

Para disciplinas com classificações próximas e abstrações acumuladas, como **Orçamento Público e Contabilidade Pública**, ajustar a aula antes de aumentar a quantidade de questões. A ordem é: (1) identificar o fato concreto e a pergunta central; (2) apresentar **um único conjunto conceitual** e suas categorias; (3) variar **um detalhe por vez** no mesmo caso para explicitar a fronteira; (4) verificar com um ou dois itens curtos, com confiança declarada; (5) só depois relacionar o conjunto a classificações vizinhas e avançar para baterias maiores.

Quando houver erro recorrente ou acertos inseguros, diagnosticar **qual pergunta classificadora ou critério ainda não foi compreendido**. Fazer até duas reconstruções substantivamente distintas, com exemplos e comparações, em lugar de repetir a definição ou empilhar itens parecidos. Não obrigar o estudante a explicar a teoria longamente com suas palavras: preferir reconhecer, comparar e aplicar em casos curtos. Um acerto imediato não prova retenção.

Se a distinção continuar difícil, registrar no checkpoint privado a **lacuna específica**, a hipótese de confusão, o que foi explicado e um reteste posterior por mecanismo diferente. **Avançar para um conceito independente** para preservar cobertura do edital; não repetir indefinidamente a mesma pergunta. Se a lacuna for pré-requisito necessário para a próxima parte, ensinar o mínimo funcional e fazer uma checagem curta antes de prosseguir, mantendo a revisão pendente. Marcar exposição, aprendizagem observada e retenção separadamente, conforme `CHAT.md`. A revisão editorial ao fim de cada artigo deve incorporar as fronteiras que exigiram reconstrução, sem incluir histórico pessoal em notas públicas.

## Identidade dos artigos e matérias virtuais

Notas canônicas em `3 - Materias/`, exceto Avancos.md, possuem `articleId: art-<identificador-único>` estável no frontmatter e `articleAliases: ["caminho original.md"]` em JSON numa linha. Para nota nova, gerar um ID aleatório único (por exemplo UUID sem hífens), registrar o caminho inicial nos aliases e manter os dois campos em futuras revisões. Renomear/mover preserva o ID e acrescenta o caminho anterior aos aliases; nunca reutilizar ID de nota excluída. O build rejeita identidades duplicadas, aliases conflitantes e notas públicas sem ID.

`data/catalogo-materias-por-concurso.json` formato 2 é a única fonte de pertencimento editorial: `hubArticleId` e `articleIds`. Pastas físicas não determinam vínculos ou ordem em um concurso. O build resolve IDs contra notas públicas e gera os caminhos de compatibilidade no catálogo publicado e metadados no manifesto. Não editar esses derivados. Nova nota pertinente a um percurso deve ser vinculada pelo ID no mesmo commit, além dos contratos de hub/índice existentes. Sessões aceitam `article:<id>#Seção exata`; referências históricas continuam válidas. A biblioteca geral preserva agrupamentos de armazenamento como compatibilidade, sem tratá-los como matéria principal em acessos diretos por edital.

## Leitura para manutenção e hierarquia das instruções

`AGENTS.md` na raiz é o único arquivo de instruções para agentes deste repositório. Para manutenção e operações fora do fluxo rápido, ler também `me.md` (protocolos públicos de estudo; perfil individual no cofre privado), `index.md` (catálogo) e os contratos pertinentes. Para estudo cotidiano, prevalece a entrada curta em `CHAT.md`, conforme a seção anterior. Regras de concurso e contratos específicos complementam este arquivo; não criar outro `AGENTS.md` para duplicá-las.

## Roteamento obrigatório por concurso

Identificar o concurso-alvo antes de preparar estudo, questões ou simulados e antes de registrar desempenho. Concurso explícito prevalece. Para pedidos genéricos, consultar a prioridade vigente em [CHAT.md](CHAT.md) e conferir `activeExam`. Na preparação vigente, a prioridade é Câmara 2026, Cargo 1, Divulgação Institucional.

- **Câmara:** seguir o edital, a estratégia da Câmara e o protocolo Cebraspe-Câmara de `me.md`. O formato objetivo é C/E, com 90 itens em P1 e 90 em P2 (+1/−1/0), além de duas discursivas e uma peça técnica.
- **CGU:** seguir o edital de Auditoria e o protocolo próprio, Cebraspe C/E. Distinguir `coberturaNota` de `exposicaoEstudo`.
- **Dataprev:** atender quando solicitado, com edital e protocolo FGV-Dataprev de `me.md`. A [calibração da reta final de 2026](https://github.com/leorruas/concursos/blob/ea4f106904d9a72aa64356dfb843efd5e249592a/AGENTS.md#L427-L469) serve como histórico de reprodução desse ciclo.
- Reaproveitar teoria comum quando aplicável. Usar banca, formato, pontuação e corpus próprios do concurso. Registrar desempenho no cofre privado, nas superfícies do concurso correspondente e sob seu `concursoId`.

## Protocolo recorrente de entrada de editais

Para todo novo edital ou retificação relevante, ler e atualizar [[1 - Planejamento/Registro de entrada de editais|Registro de entrada de editais]] na mesma operação: fonte, dados em `data/concursos.json`, comparação com notas, checklist no edital, estratégia/discursiva na matéria, acompanhamento em desempenho e simulados, índice, prioridades, publicação e pendências; não criar automaticamente pastas de projeto.

Os projetos em `4 - Projetos/` ficam **fora do Pages por padrão**, mas seus arquivos continuam públicos se estiverem neste repositório Git. Guardar qualquer registro pessoal, checklist preenchido, resultado ou plano de estudo individual **somente** em `leorruas/concurso-dados`. Publicar no Pages apenas notas editoriais expressamente autorizadas com `public: true` e `publicCategoria`. **Estratégias de prova pertencem a `3 - Materias/Estrategia de Prova/` do público; programa e checklist a `2 - Editais/` do público; resultados, tentativas discursivas e simulados a `00 - Desempenho/` do cofre privado.** Não recriar a pasta CGU. `dashboardPath` é opcional; a home não deve mostrar “abrir preparação”. Verificar presença da estratégia no manifesto público e preservação dos dados do concurso, sem confundir commit verde com navegação validada.

## Corpus de provas-espelho: etapa obrigatória do novo edital

Antes de escrever questões ou simulados para um edital recém-publicado, pesquisar **provas reais** do mesmo órgão/cargo e **provas do mesmo formato** da banca. Para CGU, consultar [[00 - Desempenho/Provas/CGU 2026 - Corpus de provas-espelho|corpus CGU]], `data/corpus-provas-espelho.json` e `data/corpus-itens.json`, além do edital e da [[3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E|estratégia]]. CGU 2022/FGV tem valor de conteúdo, mas seu A–E **não representa C/E**. TCE/MG 2026/Cebraspe também usou múltipla escolha; CGE/AL e TCU AUFC usam C/E. Prova localizada não é prova indexada nem simulado calibrado.

Preservar PDFs oficiais e gabaritos na pasta funcional `assets/provas-espelho/` quando a redistribuição for permitida; o download automatizado `scripts/baixar-provas-espelho.mjs` registra hashes. **Não afirmar arquivamento** antes de confirmar binários presentes no branch. Não apresentar gabaritos preliminares como definitivos; verificar anulações/alterações, versão/tipo do caderno e legislação vigente. Para exercícios inéditos, combinar conteúdo do órgão com mecanismos reais da banca sem copiar as questões; para treinos de questões reais, referenciar PDF e item numerado. Continuar separando `data/provas.json` (desempenho pessoal) do arquivo de fontes `data/corpus-provas-espelho.json`.

## Gate de integridade do main

Antes de iniciar qualquer mudança **não corretiva**, provar que o estado atual do vault está saudável.

- Em ambiente local/Work, executar `node scripts/preflight-vault.js`.
- Em operações via GitHub conectado, consultar o workflow mais recente **Publicar no GitHub Pages** correspondente ao `HEAD` atual.
- Se o preflight falhar ou o último workflow do `HEAD` estiver `failure`, considerar o **main vermelho**. Enquanto o main estiver vermelho, são permitidas somente mudanças diretamente destinadas a corrigir a falha atual. É proibido continuar refinando conteúdo, criar notas novas ou fazer housekeeping não relacionado sobre um estado inválido.
- Depois de uma operação lógica concluída, verificar o workflow final antes de iniciar uma operação não relacionada. Não interpretar commits intermediários de uma operação multi-arquivo como conclusão.

Quando a ferramenta GitHub oferecer `create_tree`, `create_commit` e `update_ref`, usar esse caminho para reunir mudanças dependentes em **um único commit atômico**, em vez de vários `update_file` sequenciais.

### Criação de nota canônica

Criar uma nota em `3 - Materias/` é uma operação lógica multi-arquivo. No mesmo commit atômico devem entrar:

1. a nova nota;
2. o hub local da matéria (`type: hub`), quando existir;
3. o `index.md` global.

Não criar a nota primeiro para “indexar depois”. `scripts/validate-change-contract.js` exige essas superfícies no mesmo diff. Se a matéria não possuir hub local, o contrato exige ao menos a nota e o `index.md` global e sinaliza a ausência do hub.

## Regra adicional para artigos de matéria

**Divisão de artigos:** seguir `AGENTS.md`, seção «Divisão progressiva das notas por assunto»: unidade editorial independente, meta orientativa de 8 a 15 mil caracteres, revisão acima de 20 mil, preservação de âncoras e migração gradual. Esta regra complementa o padrão editorial sem substituir profundidade por tamanho.


Sempre que a tarefa criar, revisar, expandir ou auditar uma nota em `3 - Materias/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]**.

Esse documento é a régua canônica para artigos de estudo. Prompts específicos de concurso podem acrescentar contexto de banca, edital e prioridade, mas não devem criar uma arquitetura editorial concorrente.

Para qualquer tarefa em `3 - Materias/Atualidades/`, aplicar também a seção **Extensão editorial para Atualidades** do padrão editorial. Antes de criar ou atualizar conteúdo, ler o hub `[[3 - Materias/Atualidades/atualidades|Atualidades]]`, os artigos existentes, o edital ativo pertinente e os registros de desempenho/erros relacionados. Informações conjunturais exigem pesquisa web e prioridade para fontes oficiais primárias; fundamentos estáveis e snapshots conjunturais devem permanecer explicitamente separados.

### Protocolo de resposta interativa e envio por clique

**Regra de interação aprovada em 02/11/2026:** usar por padrão seletores clicáveis em questões e simulados se a interface da conversa os suportar. Para julgamento Cebraspe: escolha **Certo/Errado** por item. Para múltipla escolha: **A, B, C, D, E**. Manter seleções separadas e revisáveis e disponibilizar botão claro para enviar todas as respostas selecionadas em uma única mensagem; a mensagem deve incluir número/ID do item, modalidade e respostas, para evitar erros de associação. Não acionar correção em mudança de opção: aguardar clique explícito no botão de envio. Para simulado com branco admitido, permitir escolha **Em branco**, sem forçar resposta. Texto opcional pode registrar dúvida/justificativa; não transformar isso em formulário obrigatório nem pedir que digite letras quando o controle clicável funcionar.

**Confiança no formulário clicável de treino:** oferecer as escolhas **Certo/Errado** (ou A–E) e a caixa opcional **“Não estou seguro”**. **Caixa marcada = `confidence: insecure`; desmarcada = `confidence: secure`**. Nas baterias didáticas, retirar **“Em branco”** da interface; exigir resposta e transmitir confiança explícita por item ao clicar em “Enviar para correção”. Para simulados integrais e treinos em que a estratégia de abstenção fizer parte da avaliação, **manter “Em branco” como opção separada**: `userAnswer: null` é questão não respondida, diferente de resposta insegura. Não produzir `unknown` no novo fluxo clicável nem converter os registros anteriores classificados como `unknown`.

Esse formato melhora a interação, mas **não substitui** auditoria da qualidade, fonte, gabarito, classificação de erro e registro no ledger. Fallback: se o cliente não renderizar controles, aceitar sequências compactas digitadas. Evitar decoração, ícones e botões inertes. Os rótulos da banca e o contrato de pontuação prevalecem.

### Questões: declaração prévia de modalidade e evidência de calibração

Para selecionar exercícios de Auditoria Governamental, Orçamento Público e Contabilidade Pública da CGU 2026, consultar primeiro a seção **Banco de questões da CGU 2026** em `leorruas/concurso-dados:AGENTS.md`. O mesmo protocolo orienta a escolha de itens para retestes de erros frequentes e o uso de fontes complementares.

O estudante deve ser informado **antes do enunciado**, sempre que o treino tiver finalidade diferente:

**Treino de aprendizagem:** checagem de conceito e raciocínio após a aula, com questões inéditas didáticas. Formato C/E ou alternativas pode ser usado sem que isso implique semelhança comprovada com a prova. Registrar dúvidas e erros para corrigir teoria; não computar esse resultado como benchmark ou domínio do edital.

**Treino para valer:** questão inédita de prova-espelho com **mecanismo, exigência de leitura, escopo, nível de detalhe, extensão e dificuldade comparados a itens reais previamente examinados** do mesmo formato da banca; priorizar concursos e assuntos similares. Declarar quais provas ou itens foram usados como referência, sem fingir análise de corpus não efetuada. Avaliar erros, confiança e variação de mecanismo. Bateria calibrada indica desempenho apenas no recorte examinado, **não gera estimativa automática da nota integral**.

**Questão real:** usar somente o caderno autêntico e o gabarito definitivo associado a concurso, cargo, banca, ano, item original e tipo de prova. Conferir anulações e validade normativa. Se houver adaptação do texto, identificar como **questão adaptada**, sem atribuir à adaptação o gabarito oficial.

**Simulado para valer:** reproduzir distribuição, dificuldade, pontuação e tempo da prova e seguir protocolo de ledger e registro do concurso. Uma questão ou bateria avulsa não é um simulado.

A modalidade deve constar na **abertura da bateria ou antes de cada item isolado**, e novamente se houver transição. No intensivão, a sequência pode partir de treino de aprendizagem e avançar para treino para valer **após calibração verificável**. Se faltar evidência suficiente, manter a classificação didática, sem alegar validade preditiva. Avisar antecipadamente, sem exigir confirmação do aluno e sem confundir resultado didático com métrica competitiva.

### Ciclo de ensino com gates explícitos de avanço e registro

A implementação do intensivão exige **um único bloco conceitual por ciclo**, escolhido pelo mapa de cobertura e pelos pré-requisitos. O conjunto pode durar mais de uma mensagem, mas deve terminar com síntese documental **antes de mudar de bloco**. Distinguir rigorosamente estas seis etapas:

**[PREPARAÇÃO]** Consultar edital, fonte primária, nota e hub. Definir a pergunta central, os conceitos subordinados, as diferenças difíceis e as regras indispensáveis. Anunciar em uma frase o objetivo de aprendizagem. Não escolher assunto apenas porque surgiu em uma questão.

**[AULA]** Expor primeiro **todo o núcleo pertinente**, com linguagem didática, terminologia exata, requisitos, consequências, exceções e exemplo progressivo. Uma aula pode exigir diversas respostas e não precisa acabar em pergunta. Se uma norma tiver vários itens que funcionam em conjunto, **explicar esse conjunto antes de cobrar uma aparente colisão normativa**. Confrontar texto oficial com a explicação; diferenciar obrigação geral de proibição específica e de exceção.

**[FRONTEIRAS]** Antes de avaliações, apresentar explicitamente os contrastes que o estudante terá de discriminar, com pares de situações reais ou hipotéticas: o que muda com uma condição, um agente competente, um momento, um prazo, uma forma de divulgação, um objeto ou um limite. O propósito é **ensinar limites, não induzir erro em regra inédita**. Se aparecer um subtópico ainda não ensinado, registrar a lacuna e completar a aula.

**[DIAGNÓSTICO DE APRENDIZAGEM]** Após [AULA]+[FRONTEIRAS], aplicar uma checagem pequena, em geral 2 a 4 itens de mecanismos variados, declarando **TREINO DE APRENDIZAGEM**. Corrigir com referência às partes efetivamente ensinadas. Se uma questão contiver regra nova ou exigir norma até então apenas mencionada, o item é **invalidado para diagnóstico de domínio**: assumir a falha de sequência, ensinar a base e só então retestar. Não contar uma sequência de itens didáticos como simulado, nem iniciar automaticamente uma questão **fora de uma bateria combinada** após cada correção. Se o estudante já iniciou uma bateria com quantidade definida, corrigir e apresentar a questão seguinte na mesma resposta, de acordo com `CHAT.md`; o fluxo de aula avulsa continua sem avanço automático.

**[TREINO PARA VALER]** Depois de concluída a instrução, quando houver corpus **de fato lido** da banca/formato e itens identificáveis, oferecer bateria de questões inéditas calibradas (em geral 5 a 8, variando mecanismos e acertos esperados) e/ou reais com gabarito definitivo. Informar fontes e limites de comparabilidade. Não transformar bateria curta em previsão de nota ou status de domínio integral. Se o corpus ainda não sustentar a calibração, manter o rótulo didático e registrar a pendência de prova-espelho.

**[CONSOLIDAÇÃO]** Obrigatória **ao fechar o bloco e antes de abrir o próximo**, não depois de cada resposta isolada e não somente ao fim da matéria inteira. Atualizar a nota canônica correspondente ou criar artigo com autonomia temática e links conforme contrato; explicar normas, fundamentos, estruturas, exemplos e fronteiras, e selecionar apenas questões comentadas que acrescentem distinções. Atualizar o mapa do hub de forma verdadeira: **panorama**, **em aula**, **fronteiras ensinadas**, **nota aprofundada**, **validado em treino**, **pendente**. Essas categorias não devem ser tratadas como um único indicador. Se houver impedimento técnico de gravação, **informar que o bloco continua pendente de consolidação**, sem declarar completo.

**Regra de ritmo e interrupção:** o estudo é intensivo em **matéria**, não em quantidade de perguntas. Usar uma explicação longa quando necessária; não forçar uma questão no fim de toda mensagem. Um erro recorrente exige retorno fundamentado à aula e comparação orientada antes do próximo teste. Quando a resposta do usuário evidenciar falha do próprio ensino, priorizar reparar o conteúdo, não aumentar dificuldade. A **questão de diagnóstico nunca pode ser o primeiro lugar onde se aprende a condição decisiva para respondê-la**.

**Exemplo de aplicação CGU:** antes de perguntar se o sigilo profissional impede comunicação interna, ensinar conjuntamente os **itens 55 a 58 da IN SFC nº 3/2017**, os destinatários competentes e a diferença entre **proteção do dado, comunicação institucional autorizada e divulgação externa indevida**. Se apenas o item 56 foi explicado, a questão que depende do item 58 **não mede domínio do aluno**.

## Uso didático da técnica de Feynman

A técnica de Feynman serve **para explicar**: partir de um problema concreto, usar linguagem simples, tornar visíveis as relações e depois apresentar a formulação técnica correta. Priorizar exemplos e comparações que resolvam dúvidas reais, sem sacrificar a precisão da banca.

**Não criar na nota seções automáticas como “Verificação de compreensão (Feynman)”**, convites para o leitor explicar com as próprias palavras nem questionários metacognitivos. A interação para verificar o entendimento, identificar confusões e corrigir o raciocínio ocorre **no chat**, a partir das respostas reais do estudante. Na wiki, preservar a explicação, as fronteiras conceituais e, quando relevantes, **itens comentados em formato de prova**, que são outra finalidade. Não registrar domínio ou erro sem resposta efetivamente dada.

### Qualidade explicativa: problema real, procedimento completo, contraste e aplicação

**Preferência pedagógica explicitamente confirmada em 02/11/2026:** a aula sobre priorização de auditorias funcionou quando partiu do problema de uma UAIG com capacidade limitada, apresentou a sequência contextual → universo → maturidade → seleção, diferenciou as três bases possíveis de avaliação de riscos, explicou os motivos de uso de cada alternativa, contrastou materialidade, relevância e criticidade e aplicou uma matriz hipotética com notas, justificativas, pesos e limites. Replicar **a lógica** desse ensino, não necessariamente o mesmo tamanho, a tabela ou o tema.

Para qualquer nova aula:
1. **Problema concreto:** descrever a decisão, a dificuldade e as consequências, sem inventar fatos sobre instituições reais;
2. **Caminho explicativo:** ensinar o procedimento do começo ao fim na ordem recomendada pela fonte, mostrando as condições que habilitam cada alternativa;
3. **Definição após função:** introduzir o termo técnico junto da pergunta prática que ele responde; diferenciar termos vizinhos por critérios operacionais;
4. **Exemplo acompanhado:** fazer um único caso evoluir, preferindo números comparáveis ou casos contrastivos quando ajudam, com escalas, pesos, hipóteses e limitações transparentes;
5. **Contrafactual:** alterar uma premissa e explicar por que prioridade, classificação ou consequência mudaria; delimitar regra geral, exceções e ambiguidades terminológicas;
6. **Prova:** apontar transposições de categorias, condições omitidas, falsa equivalência entre fatores e riscos, além de palavras que alteram o julgamento, sem reduzir o treino a truques linguísticos;
7. **Consolidação:** concluir com uma regra de decisão e manter o registro na nota canônica, sem marcar como domínio um conteúdo ainda não testado.

A utilidade de materialidade, relevância e criticidade na priorização indireta foi o exemplo validado. **Sempre explicar o nexo entre conceito, motivo de uso, evidência, escolha e limite.** A organização do texto deve acompanhar o raciocínio em prosa; tabelas e diagramas ficam opcionais e devem justificar seu espaço. Não interromper antes de completar a parte normativa necessária. Não confundir reprodução de texto da fonte com hipótese ilustrativa ou interpretação do assistente.

### Regra editorial de siglas na primeira menção

Toda nota de estudo, roteiro, relatório, questão comentada e explicação de aula deve apresentar **nome oficial ou técnico completo (SIGLA)** no **primeiro uso de cada texto**, reutilizando depois somente a sigla. Isso vale para instituições, unidades, normas, leis, modelos, programas, planos, relatórios e abreviações em línguas estrangeiras. Exemplos: **Controladoria-Geral da União (CGU)**; **Secretaria Federal de Controle Interno (SFC)**; **Unidade de Auditoria Interna Governamental (UAIG)**; **Manual de Orientações Técnicas (MOT)**; **Instrução Normativa (IN)**; **Plano Anual de Auditoria Interna (PAINT)** e **Lei Geral de Proteção de Dados Pessoais (LGPD)**.

Para expressões compostas como **IN SFC nº 3/2017**, desenvolver **IN** e **SFC** antes de empregar a forma abreviada. Títulos e subtítulos também contam: garantir que a expansão apareça antes da primeira sigla ou nessa primeira ocorrência, sem quebrar desnecessariamente âncoras e wikilinks preexistentes. A definição não pode depender de um glossário em outra página. Conferir a **ordem real de leitura** na auditoria editorial. Exceções: URLs, caminhos, nomes de arquivos, identificadores técnicos e citações literais mantêm sua grafia; explicar na prosa o que significam.

## Divisão progressiva das notas por assunto

**Unidade editorial:** cada nota canônica deve tratar de um assunto que possa ser entendido e revisado de maneira independente. Uma unidade didática ou um processo amplo pode reunir vários assuntos; nesse caso, a nota panorâmica deve apresentar as relações e apontar para notas específicas. O hub organiza a sequência de estudo. Não duplicar teoria em diversos arquivos.

**Tamanho orientativo:** preferir aproximadamente **8 mil a 15 mil caracteres** em notas densas. Ao ultrapassar **20 mil caracteres**, ou ao reunir dois assuntos suficientemente independentes mesmo abaixo disso, **revisar obrigatoriamente a estrutura**. O limite é flexível: não reduzir explicações, exemplos, normas e exceções importantes apenas para cumprir uma contagem. Evitar notas artificiais com uma definição isolada.

**Migração em partes:** (1) mapear os conceitos, os títulos e os links existentes; (2) extrair um assunto fechado com teoria, exemplos, fontes e fronteiras relevantes; (3) preservar as âncoras antigas por pequenos encaminhamentos quando já forem referenciadas; (4) atualizar nota, hub da matéria e índice global no mesmo commit, e corrigir links diretos de revisões; (5) verificar integridade e publicação antes de avançar para a próxima divisão. Preservar o registro de desempenho, as respostas e os gabaritos.

**Separação entre teoria e histórico:** explicações, regras e sínteses de erros úteis pertencem à nota de estudo; datas de sessões, respostas, notas e diagnósticos completos permanecem em `Avancos.md`, ledger e sessões. A reorganização não deve reduzir a profundidade necessária para a prova. Aplicar também a régua de `1 - Planejamento/Padrao editorial multi-edital.md`.

### Protocolo para o intensivão de matérias

**Gatilho e prioridade:** vale para pedidos de estudo, explicação, avanço em conteúdo e aprofundamento. A banca, o cargo e as fontes do edital ativo determinam a profundidade. **Para CGU 2026/Auditoria**, ler e seguir `2 - Editais/CGU 2026 - Auditoria.md`, com atenção aos itens de **P2 (fundamentos)** e **P3 (específicos)**, ao MOT/Referencial Técnico e ao corpus de provas-espelho. Revisão e simulado solicitado explicitamente seguem seus protocolos próprios.

**Etapa 1: mapa de cobertura antes de publicar.** Ler o hub e os artigos existentes, confrontar o edital com os conceitos que realmente foram desenvolvidos e construir ou atualizar um mapa de unidades de estudo no hub. Para cada unidade, explicitar: (a) subitens do edital; (b) pergunta central a ser respondida; (c) conceitos, normas, estrutura interna e exceções; (d) fronteiras e distratores plausíveis; (e) pré-requisitos e relações; (f) status **panorama / aprofundamento pendente / aprofundado na nota / validado por resolução**. Priorizar os tópicos de maior peso, risco de erro e interdependência. **Não marcar uma unidade como aprofundada só porque a palavra aparece no texto.**

**Etapa 2: pesquisa e precisão.** Partir das fontes indicadas no edital e da legislação, normas, referenciais e provas reais aplicáveis. Conferir versão, artigo/item normativo e alcance. Distinguir texto normativo, orientação técnica, explicação didática e inferência do agente. Para autores e modelos: **autor/origem → conceito → problema que resolve → estrutura → categorias → limites → aplicação → confusões**. Para procedimentos: **finalidade → momento → agente responsável → entrada → método → resultado → limites e exceções**. Quando houver regra numérica, prazo, condição ou impedimento, **não omitir seu contexto nem criar uma generalização indevida**. Não transformar hipótese ou caso didático em fato da instituição.

**Etapa 3: aula intensiva no chat, antes dos testes.** Explicar um bloco conceitual **completo e relacionado**, em linguagem acessível, mediante caso que evolua ao longo das etapas. Apresentar a formulação técnica, as classificações, as relações causais e as exceções relevantes. Em vez de alternar uma definição e uma pergunta, desenvolver primeiro o raciocínio necessário para responder questões sem depender de reconhecimento de palavras. Quando a explicação revelar uma lacuna de pré-requisito, saná-la antes de prosseguir. Adaptar a duração da aula ao tema e ao pedido do aluno; evitar tanto excesso de resumo quanto enchimento artificial. Feynman é **modo de explicar**, não seção obrigatória de autoavaliação no Markdown.

**Etapa 4: questões como teste de transferência, não como aula substituta.** Depois da explicação, usar pequeno conjunto de questões **inéditas e/ou reais verificadas**, com dificuldade derivada do corpus e do formato do concurso. Variar cenários, enunciados, operações mentais e conceitos próximos. Corrigir no chat: resposta, fundamento, por que o distrator é atraente, condição que muda o gabarito e tipo do erro (conhecimento, interpretação, distração ou confusão). Em Cebraspe C/E, não criar rotina previsível de itens falsos por “necessariamente” nem se limitar a uma exceção verbal. Acertos repetidos em itens fáceis **não autorizam** considerar o conteúdo dominado. A interação e as verificações de compreensão ficam no chat, não como questionário Feynman na nota.

**Etapa 5: síntese editorial posterior.** Ao terminar uma **unidade conceitual coerente**, ou quando o usuário pedir, incorporar à nota somente aprendizado durável: explicação, estruturas, normas, distinções difíceis e questões comentadas selecionadas (sem fazer da nota uma transcrição da conversa). Criar nota distinta quando o tema tiver autonomia suficiente para ser consultado e revisto separadamente; evitar uma nota gigante com assuntos sem unidade e evitar múltiplos microartigos superficiais. Atualizar o hub com a cobertura efetivamente desenvolvida. **Separar:** `coberturaNota` (profundidade documental), `exposicaoEstudo` (o que foi ensinado) e **desempenho** (respostas reais válidas). Não inventar indicadores CGU nem lançar um item avulso como simulado.

**Verificação editorial antes de avançar para outro tema:** a nota explica *o que é, de onde vem, por que existe, como funciona, quem é responsável, quais exceções ou condições importam e como a banca pode confundir*? Uma pessoa que só leu o artigo conseguiria enfrentar um caso novo ou ainda precisaria de uma segunda aula? Se faltar conteúdo material para o edital, **continuar o aprofundamento**, sem marcar a unidade como concluída. Profundidade mede **cobertura das fronteiras relevantes**, não número de caracteres.

### Calibração de Português

- calibrar Português pela prova real da **banca e formato do concurso-alvo**, sem transferir mecanicamente o estilo FGV para Cebraspe;
- evitar baterias em que a maioria dos itens seja resolvida por reconhecimento imediato de regra;
- exigir comparação entre alternativas plausíveis, leitura de escopo, coerência global/local, retomada referencial e efeito semântico quando o corpus da banca sustentar esses mecanismos;
- tratar desempenho alto em simulados como suspeito de subcalibração quando o bloco de Português tiver poucos distratores próximos ou pouca interpretação fina;
- ao auditar um simulado, perguntar explicitamente se ele seria capaz de produzir erros em um candidato que domina a regra, mas lê rápido ou classifica categorias próximas de modo superficial.

### Gate obrigatório de novidade e ledger de questões

`data/questoes-ledger.json` é a fonte canônica para impedir que o candidato aprenda o caderno em vez do conteúdo. Antes de gerar qualquer bateria ou simulado:

1. ler o ledger e os últimos simulados do concurso;
2. em ambiente local/Work, executar `node scripts/question-ledger.js --recent <concursoId> --window 3`;
3. montar um plano com disciplina, tópico, subtópico, `mechanism`, tipo de questão e mecanismo do melhor distrator;
4. validar o plano com `node scripts/question-ledger.js --check-plan caminho/plan.json` antes de redigir o caderno final.

Classificações: **new** = mecanismo não usado na janela; **thematic** = mesmo tema com outra fronteira/operação; **mechanical** = texto muda, mas a operação para acertar é essencialmente a mesma; **exact** = pergunta/associação praticamente equivalente.

Régua padrão: **mínimo 75% new**, **máximo 3% exact**, **máximo 10% mechanical** e **máximo 15% de itens de revisão intencional**. Janela padrão de três simulados; cooldown de cinco para repetição exata e três para mecânica.

Revisão espaçada é permitida, mas deve usar `intentionalReview: true` e descrever a transformação. **Erro recente não é licença para reciclar a mesma questão.** Reteste por outro mecanismo: caso, comparação, inferência, associação diferente, consequência prática ou distrator novo. Não concentrar o próximo simulado nos erros recentes.

Depois da resolução, registrar **todas** as questões no ledger: gabarito, resposta, resultado, segurança, tema, subtópico, autor/taxonomia quando houver, tipo, `mechanism`, mecanismo do distrator, classificação de repetição, referências similares e links teóricos para erros/acertos inseguros. Essa atualização integra a mesma operação atômica de propagação do simulado.

**Protocolo de confiança e chute.** Em todo novo simulado completo resolvido em chat, orientar o usuário a responder com `sem marca = seguro`, `? = dúvida` e `?? = chute`. Persistir como `confidence: secure`, `insecure` e `guess`; usar `unknown` somente quando a segurança não foi registrada. O conceito de “dúvida” é subjetivo e deve refletir a percepção declarada durante a resolução, não ser inferido a posteriori pelo fato de a resposta estar certa ou errada.

No objeto do simulado no ledger, usar `confidenceTracking.coverage: complete` somente quando todas as questões tiveram a segurança capturada por esse protocolo. Se a sessão é anterior ao protocolo ou houve marcação incompleta, usar `coverage: partial`; esses dados podem ser mostrados como contagem mínima, mas ficam **fora da média oficial de incerteza**. `confidence: guess` e `confidence: insecure` em acertos exigem `theoryRefs` ancorados, pois indicam recuperação frágil.

Para auditar calibração metacognitiva, usar `node scripts/question-ledger.js --confidence <concursoId> [--window N]`. O relatório deve separar média de dúvidas, média de chutes, taxa total de incerteza, acurácia quando `secure`, `insecure` e `guess`, além do recorte por disciplina. Isso serve como referência para comparar a sensação na prova real com a distribuição observada nos simulados.

Se um simulado já aplicado violar o gate, não apagar: registrar a auditoria, manter nota e erros, mas marcar `benchmarkEligible: false` e explicar a contaminação.

**Backfill de simulados anteriores ao ledger:** nunca inventar metadados ausentes. Se o arquivo histórico não preservar todas as questões, registrar o simulado com `ledgerCoverage: partial_historical` e `registeredQuestions` igual ao número efetivamente recuperado. Questões cuja correção é conhecida, mas cuja letra não foi preservada, podem usar `answerKnown: false`. Esse backfill participa do bloqueio de mecanismos conhecidos, mas não autoriza inferir as questões ausentes nem calcular taxa histórica de novidade.

## Regra obrigatória para ingestão de questões

Sempre que a tarefa envolver questões resolvidas, baterias dirigidas, simulados, correções, diagnóstico de erros ou ingestão de exercícios, o agente deve também ler e aplicar:

**[[1 - Planejamento/Regras de ingestao de questoes|Regras de ingestão de questões]]**.

Toda questão deve receber um destino pedagógico explícito. Não assumir que erro significa automaticamente alteração teórica, nem que acerto significa ausência de aprendizado. Usar os destinos canônicos `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente` e `nova_nota`, combinando-os quando necessário.

Erros `[C]` e `[K]` são os principais candidatos a enriquecimento/questão comentada; erros `[I]` e `[D]` só devem subir para a teoria quando revelarem mecanismo recorrente e recuperável. Questões acertadas também podem virar candidatas quando possuírem distrator excepcionalmente plausível, fronteira conceitual importante ou mecanismo recorrente de banca.

### Legenda clínica obrigatória na apresentação

Sempre que qualquer artefato de estudo ou desempenho — especialmente `Simulado-XX.md`, baterias, diagnósticos, tabelas de erros e relatórios — usar as siglas `[K]`, `[C]`, `[I]` ou `[D]`, incluir uma **legenda visível no próprio documento, próxima da primeira ocorrência**. Nunca pressupor que o usuário lembrará o significado das siglas.

Legenda padrão:
- **[K] Conhecimento** — faltava saber ou recuperar regra, fato, conceito ou informação específica.
- **[C] Confusão conceitual** — conceito visto, mas com fronteira borrada, categoria trocada ou aplicação indevida.
- **[I] Interpretação** — leitura inadequada do comando, escopo, referência ou premissas.
- **[D] Distração** — lapso de atenção, marcação, delimitador ou cálculo final.
- Combinações como **[K/C]** e **[D/C]** podem aparecer quando mais de um mecanismo tiver contribuído de forma relevante.

A legenda é obrigatória mesmo quando a taxonomia já estiver documentada em outro arquivo do vault.

### Registro obrigatório de microtreinos, questões reais e simulados

**Toda questão efetivamente respondida e corrigida, mesmo durante uma aula, entra nos avanços**, de acordo com `AGENTS.md`. Manter categorias separadas: **aprendizagem** (inédita didática), **para valer** (inédita com calibração verificável), **questão real** (enunciado original com caderno, número, banca, cargo, ano e gabarito definitivo), **questão adaptada** (modificações e fonte declaradas) e **simulado** (caderno estruturado com regras próprias). Não converter uma categoria em outra para elevar resultados.

**Checkpoint:** encerramento da microbateria ou solicitação de registro, mesmo com bateria parcial. Salvar ID estável, concurso, matéria, data, modalidade, quantidade respondida válida, acertos, erros, brancos, anuladas, confiança declarada, mecanismos e status parcial/concluído. Atualizar `Avancos.md` local, avanços globais e log diário; criar links no hub e índice se necessário. Em bateria aberta, **somente respostas efetivamente recebidas**, e na retomada **atualizar o mesmo ID sem dupla contagem**. Separar percentuais didáticos de desempenho competitivo e de nota líquida Cebraspe; não inserir baterias curtas em `data/provas.json` como simulados.

**Contagem:** excluir enunciados apenas apresentados, inválidos ou anulados dos acertos/erros. Manter brancos separados, amostragem insuficiente abaixo de 50 respostas válidas, janela de 30 dias e semana. Amostra numerosa não comprova representatividade. No fluxo por sessão, esses indicadores são projeções automáticas, conforme `CHAT.md`; criar e indexar `Avancos.md` antes de usar uma disciplina nova.

### Rascunhos parciais de simulados

Um simulado ainda em resolução pode ser preservado em `00 - Desempenho/Simulados/Simulado-XX.md` sem contaminar métricas consolidadas. A exceção só vale quando o frontmatter declarar **as duas condições ao mesmo tempo**:

- `status: rascunho`;
- `parcial: true`.

Enquanto essas condições estiverem presentes, o arquivo:

- não exige propagação para catálogo, dashboard, `data/provas.json`, avanços globais, log de saturação ou métricas locais;
- não deve integrar o manifesto, a busca nem o artefato público do GitHub Pages;
- pode registrar respostas já dadas, correção parcial, questões anuladas, dúvidas e ajustes provisórios;
- não pode receber nota final `/115` nem ser tratado como simulado consolidado.

Quando o caderno for concluído, a mesma operação que retirar `status: rascunho` / `parcial: true` deve executar a propagação integral exigida para simulados completos. Um arquivo com apenas uma das duas marcas não recebe a exceção.

### Links ancorados obrigatórios em relatórios de questões e simulados

Em qualquer artefato derivado de resolução de questões — especialmente `Simulado-XX.md`, baterias, diagnósticos, tabelas de erros, `Log de erros.md`, **## Ajustes a partir dos erros**, **## Acertos com dúvida ou recuperação incompleta** e campos de **Estudo/Revisar** — cada referência à teoria deve terminar em um **wikilink direto para o subtítulo exato** que contém o conceito cobrado: `[[Pasta/Nota#Subtítulo exato|Texto]]`.

Não usar apenas link para o topo da nota quando houver seção específica. Se um item agrupar mais de um conceito, incluir um link ancorado para cada conceito. Se o subtítulo adequado ainda não existir, refinar a nota canônica e criar esse destino antes de considerar o diagnóstico concluído.

A exigência vale também no leitor web: o link publicado deve preservar o deep link e abrir diretamente no heading correspondente, não apenas no início do artigo. Mudanças em wikilinks, rotas, anchors ou renderização devem manter a seção na rota pública (atualmente `?secao=`) e possuir teste de regressão.

## Propagação obrigatória de simulados para o painel

A consolidação de um simulado ou bateria é uma **operação multi-arquivo no cofre privado**. Conferir as projeções do painel autenticado antes de considerar o registro concluído.

Para um **simulado integral**, o agente deve atualizar, na mesma operação lógica:

1. `00 - Desempenho/Simulados/Simulado-XX.md`, com resultado, respostas, gabarito, erros, dúvidas e diagnóstico;
2. `00 - Desempenho/Simulados/00 - Catalogo de simulados.md`;
3. catálogo de questões e simulados do concurso, quando existir;
4. log de erros do concurso, quando houver erros ou acertos com lacuna relevante;
5. painel específico, quando mantido pelo concurso. Para CGU, usar os hubs comuns de desempenho e simulados. Para reproduzir registros da Dataprev, consultar o mapa privado em `leorruas/concurso-dados:AGENTS.md`;
6. `data/provas.json`, que alimenta o painel estratégico da interface e deve conter `sourcePath`, resultado, comparabilidade e nota calculável quando aplicável;
7. `00 - Desempenho/00 Avancos globais.md`, recalculando a janela de 30 dias, o acompanhamento semanal e o controle de simulados consolidados;
8. `00 - Desempenho/01 Log de saturacao diaria.md`, registrando volume, aproveitamento bruto, TAP e diagnóstico de carga;
9. os `Avancos.md` locais exigidos por `me.md`, quando o novo resultado alterar métricas da disciplina;
10. `data/questoes-ledger.json`, registrando todas as questões do caderno, mecanismo cognitivo, gabarito, resposta, segurança e relação de repetição.

Para baterias mistas, atualizar as superfícies equivalentes compatíveis com o tipo de registro; não inventar nota /115 quando a composição oficial não tiver sido reproduzida.

Atualizar também o hub por edital/prova, conforme a seção correspondente. As regras de rascunhos, links ancorados, novidade e confiança estão nas seções próprias deste arquivo.

### Hub obrigatório de desempenho por edital e prova

Sempre que um **simulado completo** ou outra prova registrada em `data/provas.json` for criada ou corrigida, atualizar na mesma operação o hub **privado** `leorruas/concurso-dados:00 - Desempenho/Provas/00 - Desempenho por edital e prova.md`, sem replicar resultados no público.

O hub deve:
- registrar o novo resultado na seção do concurso correto;
- distinguir aproveitamento bruto de nota calculada pelas regras do edital;
- declarar a comparabilidade da prova/simulado;
- atualizar a análise comparativa quando o novo resultado altera a leitura da evolução;
- manter as métricas de cada concurso no respectivo recorte;
- permanecer sincronizado com `data/provas.json`, o catálogo de simulados e os dashboards aplicáveis.

Um simulado não está totalmente propagado enquanto esse hub estiver desatualizado.


Antes de inserir questão comentada em uma nota, verificar se já existe questão cobrindo a mesma fronteira. O artigo não deve virar banco de questões: preservar a régua de 1 a 3 questões comentadas de alto valor cognitivo por nota, substituindo ou fundindo quando surgir exemplo melhor.

### Comando canônico, idempotência e apply transacional

Para ingestões novas, usar **`scripts/ingest-safe.js`** como porta de entrada. `scripts/ingest-vault.js` é o motor de análise legado e não deve ser chamado diretamente com `--apply`.

Primeiro executar:

```bash
node scripts/ingest-safe.js --input "00 inbox/00 ingestão.md" --dry-run
```

Depois construir um change set que contenha todos os destinos obrigatórios e o `ingestionFingerprint` exibido no dry-run. A aplicação canônica é:

```bash
node scripts/ingest-safe.js --input "00 inbox/00 ingestão.md" --apply --changeset caminho/change-set.json
```

O change set é regido por **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]** e por `scripts/ingestion-propagation-policy.js`. Toda alteração de arquivo existente deve usar o hash SHA-256 da versão lida como precondição. Se um único arquivo tiver mudado, nada é escrito.

A camada segura calcula fingerprint do conteúdo e consulta `data/ingestoes-processadas.json`. Uma ingestão já aplicada é bloqueada mesmo que a mesma evidência reapareça em outro arquivo ou com outro `--type`. O ledger e a limpeza da inbox canônica entram na mesma transação dos demais arquivos. Em caso de falha das validações pós-escrita, o conjunto inteiro sofre rollback.

É proibido contornar o mecanismo chamando `scripts/ingest-vault.js --apply` diretamente. Também é proibido usar replace/delete em `log.md`; o aplicador transacional aceita apenas `append` ou `prepend` com hash da versão integral atual.

## Regra para mudanças multi-arquivo críticas

Quando uma operação só estiver correta se vários arquivos permanecerem sincronizados — criação de nota canônica, ingestões, propagação de desempenho, catálogos, dashboards e alterações equivalentes — aplicar também **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]**.

- Em ambiente local/Work, preferir `scripts/apply-changeset.js` a uma sequência de gravações independentes.
- Pelo conector GitHub, preferir um único `create_tree` → `create_commit` → `update_ref` para a operação lógica inteira.
- Se a ferramenta disponível não permitir atomicidade, declarar essa limitação e concluir todas as superfícies dependentes antes de tratar a operação como encerrada; não iniciar trabalho não relacionado no intervalo.

## Regra editorial: refinamentos incorporados ao artigo canônico (19/11/2026)

**Toda melhoria de explicação deve integrar o corpo do artigo correspondente, na seção em que o conceito é ensinado.** A dúvida do estudante, um exemplo novo ou a descoberta de uma distinção jurídica são sinais para reler o trecho, corrigir sua sequência didática e reescrever o texto existente quando necessário. Não acrescentar ao final do artigo blocos isolados chamados “Refinamento”, “Complemento”, “Atualização didática”, “Revisão posterior” ou equivalentes, nem empilhar versões da mesma explicação.

Antes de editar, localizar o subtítulo canônico e os links/questões que dependem dele. Manter o título da seção e os IDs estáveis sempre que possível. **Integrar definição, pré-requisito, quem pratica o ato, prazo, efeito, exceção, exemplo e comparação com conceitos próximos no fluxo natural da leitura**, removendo repetições ou frases antigas que tenham ficado incompletas. Quando o tema se encaixa em outro ponto do capítulo, mover/reorganizar o conteúdo em vez de criar um apêndice de correção. Manter coerência do texto integral, tabelas, diagramas, itens Certo/Errado e suas respostas.

**Artigo é a fonte de verdade pedagógica.** Glossário oferece definição autônoma e curta; flashcards servem à recuperação ativa e a contrastes. Ao melhorar qualquer um deles, conferir a explicação correspondente no artigo e corrigir o artigo se ela estiver insuficiente. Não usar cartões ou verbetes para compensar lacunas do texto principal, nem copiar o capítulo inteiro para essas superfícies. Quando a mudança normativa exigir aviso histórico, integrá-lo à explicação pertinente, indicando data e texto vigente.

O registro operacional da auditoria, commits, provas de CI, pendências e limites de verificação pertence ao arquivo de estado ou planejamento, **não ao texto didático do artigo**. Se um artigo já contiver blocos avulsos de refinamento, consolidá-los progressivamente na seção apropriada, preservando âncoras e referências consumidas pelas questões. Para encerrar, reler o trecho anterior e posterior à edição como uma pessoa que estuda o assunto pela primeira vez; validar links, fontes e publicação conforme as regras do vault.

## Alterações diretas de documentação de baixo risco (decisão de 16/11/2026)

**Regra de eficiência, autorizada pelo usuário:** ajustes pequenos e localizados de documentação ou governança textual, como este `AGENTS.md`, instruções, prompts e protocolos em `1 - Planejamento/`, podem ser **gravados diretamente na `main` em um commit**, sem abrir PR, quando não houver regra de proteção que impeça a escrita e quando a mudança não exigir sincronizar conteúdos ou dados de outras superfícies. Verificar a versão atual e o SHA antes de editar, preservar o restante do arquivo, conferir o diff e validar os vínculos quando aplicável. Confirmar o commit na `main` e comunicar o resultado na mesma conversa. Nunca abrir PR apenas para registrar uma orientação já aprovada se a edição direta for tecnicamente permitida.

**Manter PR e checks para mudanças de maior risco**: alterações em código, scripts, lógica de publicação, renderizador, interfaces, Markdown de estudo sujeito a contratos e validação jurídica, metadados e catálogo estruturado, glossário/flashcards, dados, mudanças multi-arquivo com invariantes, alterações que possam quebrar links/deploy ou disputas com agentes paralelos. A proteção de branch e os validadores são requisitos técnicos que não devem ser contornados. O usuário pode pedir simplificação adicional desse fluxo; avaliar por tipo de mudança e risco, em vez de impor PR indiscriminadamente.

**Conclusão direta:** se não for possível editar a `main` devido a proteção, permissão, conflito, ou a operação exigir validação por PR, informar objetivamente a causa e só então usar branch/PR. Não criar uma sequência de PRs desnecessários para pequenas regras textuais.

## Publicação direta na main: padrão geral do vault (decisão de 16/11/2026)

**Prioridade vigente:** o fluxo normal para artigos de estudo, revisões didáticas, glossário, flashcards, documentação e materiais do repositório público `leorruas/concursos` é **editar e fazer commit diretamente na `main`**, sem abrir branch ou Pull Request. Esta orientação substitui, apenas quanto à forma de integração, as instruções antigas neste vault que exigiam PR para toda correção ou artigo. A obrigação de fazer revisão integral, conferir fontes oficiais, preservar `articleId`, manter integridade dos catálogos, testar vínculos e verificar publicação continua.

**Preflight e atomicidade:** antes de gravar, ler `main` e SHAs atuais, checar se outro agente/PR está editando o mesmo artigo ou arquivo compartilhado, validar conteúdo e executar os verificadores locais disponíveis quando houver ambiente para isso. Agrupar modificações relacionadas em commit atômico com a versão da `main` como base; usar `create_tree` → `create_commit` → `update_ref` com lease `expected_sha` e `force=false`, ou `update_file` com blob SHA atual para alteração de um arquivo. Se a `main` avançar, recalcular sobre sua nova versão e nunca sobrescrever a alteração de outra pessoa. Não usar `force push`.

**CI e Pages:** após o commit, verificar workflow de CI/publicação da `main` e a versão do conteúdo servido no GitHub Pages; corrigir falhas com novo commit direto e nova validação. Uma escrita na `main` sozinha não atesta aprovação jurídica nem deploy. Para mudanças somente documentais excluídas do build, basta confirmar commit e conteúdo na `main`; não inventar deploy. Não reduzir a qualidade para dispensar PR.

**Exceções reais:** se proteção de branch impedir escrita direta, ou se a alteração envolver disputa simultânea insolúvel, uma mudança destrutiva, risco de privacidade, ou requisito técnico de CI pré-integração que não possa ser verificado de outro modo, parar essa parte e explicar objetivamente por que será necessário PR ou intervenção. **Não criar PR por hábito.** PRs já abertos em outras execuções podem ser concluídos com checks aprovados ou reconciliados antes do próximo commit direto, sem abandoná-los nem criar duplicações.

**Automações paralelas:** cada frente administrativa conserva a propriedade exclusiva de seus `articleIds` e seu arquivo de estado. O trabalho cotidiano passa a ter publicação direta na `main` com controle de SHA, sem disputa de escrita da matriz global. Esta regra também substitui os passos "criar PR/mesclar" dos prompts antigos, mas não altera automaticamente automações até seus prompts serem atualizados.

## Correções pequenas: validar, integrar e conferir publicação no mesmo atendimento (14/11/2026)

Para correções pontuais de sintaxe, Mermaid, links, ortografia ou erros de apresentação em conteúdo público, o objetivo do atendimento é a alteração **efetivamente disponível no site**, aplicando prioritariamente a publicação direta na main descrita acima.

- Antes de editar, conferir `main`, PRs que alterem o mesmo arquivo e o contrato de publicação. Manter o escopo mínimo, sem reescrever conteúdo não solicitado.
- Nas correções editoriais que se enquadram no fluxo direto, validar o diff e publicar na `main`. Quando uma exigência específica pedir PR, conferir o diff e exigir checks verdes do **HEAD atual**, ausência de conflito e nenhum impedimento de revisão ou proteção de branch. Com autorização do usuário para corrigir/publicar no próprio pedido, realizar o merge na **mesma execução**, sem aguardar um novo comando para uma PR já validada. Não fazer merge se a validação falhar ou estiver pendente.
- Após publicar, conferir o SHA em `main`, o resultado do último workflow `Publicar no GitHub Pages` correspondente e a verificação do conteúdo publicado conforme `Contrato de publicacao GitHub Pages`. Em alterações de um artigo existente, conferir também o trecho corrigido no arquivo servido, pois a presença do artigo no manifesto não prova que o conteúdo novo foi entregue.
- Só dizer **publicado/online** após evidência positiva do deploy e da versão servida. Se a execução ainda estiver na fila ou em andamento, informar que houve merge mas a publicação não está confirmada; deixar link do workflow e apontar a pendência concreta, sem transferir ao usuário a tarefa de mesclar uma PR aprovada.
- Mudanças maiores, conflito com outra frente, alteração normativa, falha de testes ou exigência de revisão humana suspendem o merge automático: relatar o bloqueio e preservar a PR. Não enfraquecer CI, não ignorar proteção de branch, não forçar merge e não mesclar PRs de terceiros sem autorização.

## Regra de publicação de conteúdo público

Sempre que a tarefa criar, mover ou alterar de forma relevante uma página pública em `3 - Materias/` (excluindo `Avancos.md`), o agente deve também ler e aplicar:

**[[1 - Planejamento/Contrato de publicacao GitHub Pages|Contrato de publicação — GitHub Pages]]**.

O commit no repositório **não encerra** a operação. O agente só pode afirmar que o conteúdo foi publicado ou que já aparece no site depois de confirmar o último workflow `Publicar no GitHub Pages` e a presença do catálogo esperado no `manifest.json` servido pelo Pages ao vivo. Se o deploy estiver pendente, deve distinguir claramente “está no repositório” de “publicação confirmada”.

Em Atualidades, fundamentos e snapshots colocados sob `3 - Materias/Atualidades/` são tratados como material público de estudo. Se a intenção for manter algo apenas como fonte bruta ou bastidor, o arquivo deve ir para uma camada não pública apropriada, e não ficar em `Snapshots/` esperando aparecer magicamente no site.

O padrão editorial é evolutivo. Se o uso real do vault revelar uma necessidade recorrente que ainda não esteja prevista — por exemplo, um novo tipo de seção, artefato de estudo, comparação, questão comentada ou mecanismo de navegação — o agente deve **propor a mudança e pedir autorização antes de alterar a governança ou aplicá-la em massa**. Correções locais e aplicação de regras já aprovadas não exigem nova autorização. Um pedido explícito do usuário para alterar a regra conta como autorização para aquela mudança específica.


## Regra obrigatória para mudanças na busca

Sempre que a tarefa alterar busca, ranking, aliases, anchors, deep links, índice de pesquisa ou quando o usuário relatar que uma consulta devolve o resultado errado, ler e aplicar:

**[[1 - Planejamento/Governanca da busca|Governança da busca]]**.

`search-index.json` é artefato derivado e nunca deve ser editado manualmente. Mudanças normais nos artigos são absorvidas automaticamente pelo build.

Quando houver falha semântica de busca, registrar primeiro a consulta em `scripts/search-benchmarks.json` com artigo e seção esperados; só depois alterar aliases, configuração ou algoritmo. Mudanças de pesos devem preservar a régua global de Top 1, Top 3 e seção correta.

Aliases e parâmetros deliberados de ranking vivem em `web/05a-search-config.js`. Não duplicar essa configuração em outros arquivos.


## Regra para testes e validadores novos

Sempre que uma mudança criar ou alterar um teste, validador, script de build ou etapa de CI, o agente deve executar diretamente o novo/alterado script **antes do commit** quando o ambiente disponível permitir.

O preflight do estado anterior não substitui essa verificação: ele prova que o `main` estava saudável antes da mudança, não que o teste recém-criado funciona.

Fluxo obrigatório para scripts novos ou alterados:

1. executar o script isoladamente;
2. corrigir qualquer falha do próprio teste/fixture;
3. executar as validações relacionadas;
4. só então incluir o script e a alteração funcional no commit;
5. após o commit, confirmar o workflow completo.

Não enfraquecer uma asserção apenas para deixar o CI verde. Quando um teste falhar, distinguir entre bug de implementação, fixture incorreta e asserção excessivamente literal; preservar a propriedade semântica que o teste deveria garantir.


## Mapa operacional de scripts e diagnóstico

Para tarefas nos scripts, na interface ou nas integrações entre ingestão, dados, busca e publicação, consultar [[1 - Planejamento/Mapa de scripts e contratos do sistema|Mapa de scripts e contratos do sistema]]. Ele reúne entradas, saídas, dependências, limites dos checks e lacunas verificadas. Conferir o código vigente, localizar a primeira divergência entre produtor e consumidor e aplicar os contratos existentes; o mapa não substitui `me.md` nem as regras deste `AGENTS.md`. Manter a entrada dos scripts afetados atualizada ao concluir mudanças nesse sistema.

## Links legíveis dos artigos

Links públicos novos usam `#/artigo/<articleSlug>`, preservando seção, concurso e origem. O ID interno continua estável. Por padrão, o slug deriva do nome do arquivo no primeiro `articleAliases`, sem número inicial, acentos ou espaços; por isso, renomear título ou arquivo não altera a URL. Preservar a ordem dos aliases e o caminho original em primeiro lugar. Nenhum mapa de slugs é mantido manualmente fora das notas.

Para desambiguar uma nota nova com nome já usado, definir `articleSlug: nome-especifico` no frontmatter; colisões são rejeitadas pelo build, sem renomear automaticamente URLs existentes. Para alterar um slug explícito já publicado, preservar o anterior em `articleSlugAliases: ["slug-anterior"]` em JSON numa linha. O slug derivado original também permanece alias automaticamente. Os links anteriores por ID e por pasta continuam aceitos. O caractere `#` permanece necessário ao roteamento estático do GitHub Pages.

### Protocolo universal: uma questão por vez e trilha de leitura após a bateria

**Escopo:** aplicar a qualquer matéria, banca ou concurso, inclusive artigos antigos e matérias já estudadas. O estudante pode usar questões para decidir quais notas ler primeiro. Este protocolo complementa as regras de correção, ingestão, confiança, novidade, revisão espaçada e privacidade; não altera gabaritos nem torna exercícios didáticos comparáveis à prova.

**Pré-preparo da bateria e correção sem consultas repetidas (prioridade operacional):** antes de iniciar a bateria, selecionar e conferir o conjunto de itens, gabaritos, versão das fontes, metadados e critérios de novidade exigidos. Guardar estado do bloco e placar na conversa. Para cada resposta, usar esse material já validado e **entregar a correção, o placar parcial e a próxima questão na mesma mensagem**, sem consultar novamente GitHub, web, scripts, manifesto ou cofre privado por rotina. Só reconsultar se houver dúvida real sobre fonte, norma, gabarito, integridade ou necessidade de informação não preparada; jamais inventar referência. Registrar uma única sessão privada após o total combinado, com os gates de validação e links de fechamento. A regra de seguir para a próxima vale para bateria iniciada; em aula com questão isolada, não propor item novo automaticamente. Em simulado integral fechado, corrigir após receber a folha de respostas, segundo o protocolo da modalidade. O enunciado integral e a correção específica de cada item continuam obrigatórios.

**Fluxo padrão do chat para questões:** apresentar **uma questão de cada vez**, no formato da banca e na modalidade declarada. Exibir opções de resposta e a marcação opcional **“Não estou seguro”**, nos termos do `CHAT.md`. Após a resposta, corrigir **imediatamente**: reproduzir o enunciado completo, indicar resposta, gabarito e confiança, explicar **brevemente a regra decisiva e a razão do erro/distrator**, e prosseguir à próxima questão. Usar explicação mais longa só quando houver dúvida expressa, erro recorrente, exceção legal ou pedido de aprofundamento. Se o estudante solicitar expressamente um caderno ou bateria inteira para resolver depois, disponibilizar o caderno de uma vez; **a correção continua item a item** após o envio. Preservar a quantidade da bateria (por padrão cerca de 10) e o estado de respostas. Em interrupção ou pausa, só registrar as questões efetivamente respondidas, mantendo o ID da sessão para completar sem dupla contagem. Corrigir também a última questão antes do fechamento.

**Fechamento obrigatório da bateria:** depois de corrigir aproximadamente dez itens, ou ao encerrar a quantidade solicitada, apresentar uma seção curta **“Leituras prioritárias”** com **links clicáveis para as notas publicadas no GitHub Pages**, ordenadas pelos pontos de maior retorno para a prova. Usar no diagnóstico: (1) erros seguros e erros conceituais recorrentes, (2) erros inseguros e lacunas declaradas, (3) acertos inseguros ou por eliminação, (4) pré-requisitos de uma regra e conceitos relevantes que ainda não foram recuperados. Uma única nota pode resolver várias questões; deduplicar e agrupar por assunto, normalmente **3 a 5 links**, ampliando apenas quando a amostra exigir. Exibir **título legível, link direto à seção e uma frase do motivo para ler agora**, com questões relacionadas, se útil. Conteúdo antigo pode ganhar prioridade novamente; não limitar a artigos recém-criados.

**Conferência de links:** resolver cada referência `theoryRefs`/nota canônica a partir do manifesto e dos arquivos atuais do repositório, inclusive `articleSlug`, `articleAliases` e títulos de seções. O leitor usa rotas do tipo `#/artigo/<articleSlug>` e seções via parâmetro **`?secao=` da rota pública**; montar a URL absoluta a partir do **endereço de GitHub Pages realmente publicado e confirmado**, verificando que o caminho e o subtítulo existem e que o link preserva o destino no leitor web. Não inventar domínio, slug ou âncora a partir do título. Não substituir o Pages por uma URL `github.com/.../blob/...` quando o site estiver disponível. Se não for possível confirmar um link publicado, informar a limitação e oferecer o link ao arquivo canônico como alternativa, sem apresentá-lo como Pages.

**Privacidade e registro:** a lista de leitura na resposta pode indicar dificuldades do estudante, mas **não** deve ser gravada no repositório público. No checkpoint `schemaVersion: 3` do repositório privado, preservar `theoryRefs` com subtítulos exatos, `learning.pending` e `learning.next`; não adicionar URL presumida a cada questão nem editar projeções privadas manualmente. Só criar notas ou atualizar teoria editorial no público nos pontos de fechamento previstos. A leitura recomendada não é evidência de aprendizagem concluída; o conceito deve ser retestado depois.

### Correção de questões: enunciado e explicação juntos

**Regra solicitada em 06/11/2026:** toda correção de questão ou bateria deve apresentar o **enunciado integral** da questão imediatamente antes de sua correção, inclusive quando os enunciados foram enviados ou resolvidos na própria conversa. Abaixo dele, informar a resposta registrada, o gabarito, a confiança quando declarada e explicar o trecho decisivo, a verdade parcial ou pegadinha e os cálculos pertinentes. Quando o estudante também explicar o raciocínio oralmente, registrar em poucas palavras o que ele entendeu e separar **erro de conhecimento, confusão conceitual, interpretação de comando/negação ou distração**. Não obrigar o estudante a voltar à mensagem da bateria para recuperar o contexto. Quadros-resumo são complementares e não substituem a correção sob cada enunciado.


## GitHub Pages: economia de execuções e diagnóstico pré-job (09/11/2026)

O workflow `.github/workflows/pages.yml` ignora commits que alterem **apenas** documentação operacional excluída de `_site`, especialmente `1 - Planejamento/**`, `AGENTS.md`, `CHAT.md`, `me.md`, `log.md`, `index.md` e `.agent/**`. Preservar a publicação para alterações em matérias, dados públicos, scripts, interface e workflows. Antes de incluir novos caminhos em `paths-ignore`, confirmar em `scripts/build-site.js` que não são entradas da publicação; alterações misturadas com arquivos públicos ainda devem disparar o workflow.

Ao diagnosticar falha de Pages, consultar primeiro `actions/runs` e `/actions/runs/{run_id}/jobs`. Se uma execução terminou em `failure` com **zero jobs**, nenhum teste ou build executou: investigar limites de minutos/cobrança, runners, políticas de Actions, restrições e incidentes do GitHub antes de alterar scripts de build. Tratar a causa como indeterminada até obter evidência específica; não afirmar que a filtragem de commits restaura uma conta bloqueada. Se houver jobs, identificar a primeira etapa que falhou e obter logs antes de corrigir código. Não reexecutar em massa workflows que tenham falhado antes de iniciar jobs.

## Protocolo obrigatório: baterias diagnósticas multidisciplinares

**Âmbito:** usar em todas as baterias diagnósticas de questões pelo chat. Distinguir bateria diagnóstica (sonda conhecimentos inclusive não estudados), revisão (temas já estudados) e simulado "para valer" (exige comparação de banca e evidência). Manter o formato do concurso ativo: CGU 2026, Cebraspe C/E; Dataprev, FGV A–E, quando selecionado.

**Conteúdos sem restrição de estudo prévio:** as baterias diagnósticas aleatórias podem abranger qualquer matéria, unidade ou artigo previsto no edital do concurso ativo, inclusive conteúdos ainda não estudados. Variar assuntos e mecanismos e priorizar a informação útil para decidir o que estudar; não restringir seleção aos artigos já lidos. Diferenciar lacuna por primeira exposição, erro conceitual, confusão de fronteiras e falha de retenção; nunca inferir retenção de conteúdo não estudado. Manter registro de confiança por questão.

**Dificuldade declarada em cada questão:** antes do enunciado, indicar "Dificuldade estimada: fácil, média ou difícil", com base em complexidade conceitual, número de condições, proximidade entre conceitos, exceções, cálculos e exigência de aplicação. Essa classificação é editorial, não dificuldade estatística medida em candidatos. Revisar, adaptar ou substituir itens quando necessário para garantir precisão normativa, gabarito, qualidade dos distratores e nível proposto. Identificar expressamente a origem como "original do banco" (enunciado literal e ID), "adaptada do banco" (ID de origem e modificações relevantes) ou "inédita". Não apresentar item alterado como transcrição do banco. Guardar na sessão a versão exata respondida, a origem e a dificuldade estimada.

**Fechamento com tabela obrigatória:** depois da correção da décima questão, apresentar placar por matéria, separar erros, acertos inseguros, temas não estudados e confiança, e uma tabela intitulada **Leituras prioritárias**, com as colunas **Prioridade | Artigo e link | Motivo da leitura | Questões**. Normalmente indicar de três a cinco artigos ou seções, ordenados por erros, recorrência, acertos inseguros e pré-requisitos. A coluna de artigo deve conter **link direto do GitHub Pages**, preferencialmente para subtítulo, conferido contra o manifesto/slug e seção publicados. Não inventar rota. Se não for possível verificar o Pages, usar link canônico verificado do GitHub, identificando que é alternativo e assinalando a verificação pendente. A tabela deve estar na resposta visível mesmo se o registro remoto falhar.

**Registro somente após 10 questões:** acumular em memória da conversa as respostas, confiança, enunciados efetivos, gabaritos, dificuldades e referências enquanto as dez questões são resolvidas. **Não gravar no vault a cada resposta.** Depois da décima resposta e sua correção, consultar `leorruas/concurso-dados:AGENTS.md` e `data/sessoes/README.md` e registrar **uma única sessão consolidada** `schemaVersion: 3` em `leorruas/concurso-dados:data/sessoes/<id-estavel>.json`, com as dez questões, fonte, conceitos, diagnóstico, confiança, leituras e próximo passo, usando o contrato real. Confirmar commit e estado de consolidação; se falhar, declarar registro pendente e nunca copiar dados pessoais para o repositório público `leorruas/concursos`. Para baterias explicitamente definidas com tamanho diferente de dez, seguir a quantidade determinada antes de registrar. Sessão interrompida antes da décima permanece pendente até retomada, salvo solicitação expressa para encerrá-la.

**Convivência com os demais protocolos:** as regras de leitura, correção e proteção de dados do `CHAT.md` e do cofre privado permanecem vigentes. Este protocolo esclarece a exceção diagnóstica à regra de não cobrar conteúdo ainda não estudado e o ponto de gravação obrigatório somente ao concluir as dez questões.


## Governança da expansão de questões e da revisão didática da Câmara

- **Expansão:** mantém `data/questoes-camara.json`, preserva os 389 itens históricos em `pilotoDidatico` e conta apenas questões elegíveis de `expansao` integradas à `main`. Confere edital, fonte, gabarito, dificuldade editorial, unicidade de ID e enunciado e proteção dos itens de TI não homologados. Encaminha lacunas de teoria à revisão didática.
- **Revisão didática:** mantém artigos, catálogos, glossário e flashcards. Preserva IDs, aliases, fontes e vínculos canônicos. Quando o texto precisar de uma mudança que afete o banco, coordena o PR com a expansão antes de alterar o subtítulo. Edições do banco são preparadas pela expansão.
- **Subtítulos são parte do contrato.** Antes de renomear ou remover um subtítulo, procure consumidores na `main` e nos PRs em aberto. Confira o `articleId`, o caminho canônico, `source.section`, `theoryRefs`, links e as seções dos verbetes e cartões vinculados. Preserve uma seção significativa para o destino existente ou integre a atualização coordenada dos consumidores na mesma revisão. Verifique se o destino continua explicando o conceito da questão.
- **Início e retomada:** confira o SHA atual de `main`, o gate de integridade e os PRs abertos antes de criar trabalho. Retome o PR existente da mesma frente. Se outro PR alterar o mesmo arquivo, coordene a ordem e atualize a base antes de editar. Mantenha no PR o SHA validado, os resultados, a pendência e o próximo passo. Use a fila editorial ou o planejamento da expansão para registrar progresso já integrado.
- **Validação e integração:** execute `node scripts/audit-camara-reference-headings.js` em ambas as frentes. Execute também os testes de questões na expansão e o build com os validadores de artigos, glossário e flashcards na revisão didática. Em caso de falha, registre o check e a causa no PR, corrija na frente responsável e valide novamente. Integre somente com checks verdes para a revisão atual sobre uma base compatível. Após integrar, confira `main` e o deploy aplicável. Branch, PR e commit sem merge são trabalho pendente.
- **Privacidade:** use o cofre privado para respostas, sessões, desempenho e qualquer evidência individual. PRs, logs, filas e testes públicos usam conteúdo público ou exemplos fictícios. Siga o contrato de estudo e registro do `CHAT.md`.

## Referências cruzadas entre artigos: títulos legíveis (12/11/2026)

**Regra editorial obrigatória para todo o acervo público, artigos novos e revisões.** Ao mencionar outro artigo no corpo de um texto, usar seu **título editorial real como texto âncora do link**, conferido no arquivo/catálogo vigente. Evitar referências voltadas ao leitor como “nota 16”, “nota 17”, “CAM-CP-008”, “artigo CAM-CP-010” ou somente códigos e números de sequência. Os IDs permanecem nos metadados, catálogos, nomes de arquivo e contratos técnicos; não substituí-los ou renumerá-los. A navegação deve ser semântica e compreensível mesmo fora da ordem do curso.

**Exemplo:** escrever “[Formas de governo: República e Monarquia](URL-canônica-verificada)” em vez de “nota 17, CAM-CP-008”. Preferir construções naturais como “O artigo [Regimes políticos: democracia, autoritarismo e hibridismos](URL-canônica-verificada) apresenta...” e “A análise continua em [Representação política: mandato, delegação e responsabilização](URL-canônica-verificada)”. O título ilustrativo deve ser conferido antes da aplicação; nunca presumir que o título sugerido é o oficial.

**Verificação obrigatória:** ao criar, revisar ou auditar artigos, procurar no texto visível referências por número de nota, IDs de unidade/artigo, menções vagas (“nota anterior”, “próxima nota”, “ver nota”) e links cujo texto não corresponda ao artigo de destino. Resolver cada referência pelo catálogo e pelo título efetivo do Markdown, preservando URL, âncoras e significado. Se o destino estiver planejado, mas ainda não publicado, citar o tema por nome em prosa e não inventar link. Não alterar citações bibliográficas, números de leis, questões, IDs em metadados/frontmatter, exemplos técnicos nem referências que não apontem para artigos. Não fazer substituição global cega: revisar o contexto e evitar repetição artificial de títulos longos. Relatar quantidade de arquivos verificados, ocorrências corrigidas e pendências; validar links/rotas e executar os testes editoriais disponíveis antes de declarar a auditoria concluída.

## Disciplina de mudanças editoriais e CI: incidente das referências (12/11/2026)

**Fluxo de PR sempre de leitura e validação:** um workflow disparado por `pull_request` não deve executar correções de conteúdo, criar commits ou usar `git push` na própria branch. A revisão de títulos e links deve ocorrer **antes do check**, no branch de trabalho, em lote com base atualizada e hash/HEAD conferido. O CI apenas relata e testa; não combinar aplicação de correções com validação na mesma execução. Essa separação evita o incidente em que um push a partir de checkout `detached HEAD` foi recusado porque a branch avançou durante a execução. Não usar `force` para contornar conflitos.

**Auditoria de wikilinks:** reconhecer `[[caminho|título]]` e a variante escapada `[[caminho\\|título]]`; resolver caminhos a partir da raiz, relativos à nota e por aliases antes de declarar link quebrado. Separar referências a fontes históricas que já não estão no repositório público, como `00 inbox/`, `00 ingestão` e os destinos privados `Avancos.md`, de links públicos realmente inválidos. Códigos de edital em títulos internos, listas curriculares, tabelas, fontes e metadados podem ser legítimos. Corrigir como referência ao leitor apenas quando o código ou número substitui o título de outro artigo. Nunca retirar IDs estruturais indiscriminadamente.

**Critério de fechamento:** terminar lotes com revisão de diff, relatório da auditoria e CI do **último HEAD**; conferir separadamente o workflow do glossário quando aplicável, o Pages no `main` após merge e o manifesto ao vivo. Distinguir erro real em job de execução cancelada por commit novo, push rejeitado por concorrência e atraso no deploy. Não afirmar publicação concluída apenas por commit ou check do PR.


## Inclusões editoriais pequenas: fechamento em uma execução

Quando o pedido for acrescentar termos e flashcards, agrupar conceitos relacionados em uma única alteração atômica: conferir duplicações e fontes oficiais; atualizar conjuntamente `data/glossario/backlog-camara-2026.json`, arquivo de verbetes, `data/flashcards.json` e vínculos obrigatórios (`articleIds`, `note`, `editalRefs`), conforme o contrato dos validadores. Conferir o workflow verde do HEAD da `main` antes de editar. Criar um único branch e PR, acompanhar os checks do último commit, corrigir falhas de conteúdo no mesmo PR e integrar somente com validações aprovadas. Confirmar separadamente o sucesso do Pages e o conteúdo servido. Não declarar a tarefa publicada se o deploy ainda estiver pendente; não simplificar ignorando os contratos ou misturando registros pessoais.
