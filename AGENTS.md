# Instruções para agentes: vault de concursos

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

## Mapa operacional entre repositórios (regra prioritária)

Antes de usar caminhos como `data/sessoes/` ou `00 - Desempenho/`, identificar a qual repositório pertencem. Para agentes, o formato `leorruas/<repositorio>:<caminho>` elimina ambiguidades. O cofre possui [instruções próprias](https://github.com/leorruas/concurso-dados/blob/main/AGENTS.md); lê-las sempre que a tarefa envolver histórico individual.

| Repositório | Documentos e uso |
| --- | --- |
| `leorruas/concursos` **público** | `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, `2 - Editais/**`, `3 - Materias/**` exceto `Avancos.md`, `data/flashcards.json`, `data/catalogo-materias-por-concurso.json`, `data/planos-estudo/cgu-2026.json` (sem tentativas pessoais), `data/corpus-*.json` |
| `leorruas/concurso-dados` **privado** | `data/sessoes/README.md`, `data/sessoes/<id>.json`, `data/contexto-estudo/indice.json`, `data/contexto-estudo/<concursoId>.json`, `data/contexto-estudo/<concursoId>/<materia>.json`, `data/contexto-estudo/flashcards-prioridades.json`, `data/questoes-ledger.json`, `data/erros-recorrentes.json`, `data/provas.json`, `data/sessoes-saidas.json`, `data/ingestoes-processadas.json`, `00 - Desempenho/**`, `3 - Materias/**/Avancos.md` |

**Ao retomar estudos:** consultar `CHAT.md` neste repositório e ler os contextos no cofre. Usar a biblioteca pública para notas e fontes. **Ao registrar:** gravar apenas a sessão no cofre; a action privada consolida os indicadores derivados. **Ao fechar uma unidade:** textos e cartões sem dados pessoais são editados no repositório público, enquanto checkpoints e resultados ficam no privado. Commits não são atômicos entre repositórios: validar separadamente cada lado; nunca incluir a sessão no público para simular uma transação única. Uma falha de acesso ao cofre impede o registro remoto pessoal.

**Discursivas:** `data/planos-estudo/cgu-2026.json` no público descreve a rotina, e o campo `discursivePractice.attempts` deve permanecer sem dados individuais; textos, tentativas e correções pertencem a `leorruas/concurso-dados:00 - Desempenho/Provas/`. **Flashcards:** `data/flashcards.json` público contém cartões; prioridades de erros e datas individuais ficam no cofre. O navegador ainda não recebe essas prioridades privadas automaticamente. Instruções antigas que sugiram buscar `raw.githubusercontent.com` para obter prioridades pessoais, editar `00 - Desempenho/` público ou gravar resultados no catálogo público estão revogadas.

**Banca da preparação:** CGU 2026, especialidade Auditoria: **Cebraspe, itens Certo/Errado (C/E)** em todas as matérias, incluindo Contabilidade e Avaliação de Políticas Públicas. Ler `activeExam` no contexto antes de escolher o formato. As instruções da Dataprev/FGV e a regra de cinco alternativas pertencem à Dataprev. A prova histórica CGU 2022/FGV é apoio de conteúdo; o treino da CGU 2026 segue Cebraspe. Na primeira resposta de cada retomada, indicar brevemente “CGU 2026: Cebraspe, C/E”.

**Projeto Dataprev legado:** os arquivos `00 Dashboard.md`, `Log de erros.md`, `Questoes e Simulados.md`, `Cronograma.md` e `O que estudar.md` que registram resultados ou listas concluídas estão em `leorruas/concurso-dados:4 - Projetos/dataprev-2026/`. Não reconstruir suas métricas no público nem criar links públicos para seus caminhos antigos.

## Fluxo rápido de estudo pelo chat: prioridade operacional

A partir de 03/11/2026, aulas e checkpoints de microtreinos seguem `CHAT.md`. Nesse escopo, a entrada curta e `data/contexto-estudo/<concursoId>.json` substituem a releitura integral recorrente de governança e ledger. As regras completas continuam aplicáveis a manutenção, ingestão legada, notas novas e simulados integrais. Salvar uma sessão em `data/sessoes/<id>.json` no fechamento do bloco; a automação atualiza as métricas derivadas. Corrigir na origem, preservar o legado e consolidar teoria obrigatoriamente no fechamento de cada unidade, antes da próxima unidade da matéria, conforme CHAT.md. As antigas exigências de editar manualmente todas as superfícies por microtreino ficam substituídas pela projeção automática validada. Ver `data/sessoes/README.md`.


## Continuidade por matéria: contrato operacional vigente

O fluxo cotidiano descrito em `CHAT.md` usa os contextos gerados em `data/contexto-estudo/<concurso>/<materia>.json` e sessões de formato 2. Essa regra prevalece sobre exigências anteriores de reabrir ledger, editar hub, avanços e notas a cada microtreino. O checkpoint único preserva respostas, exposição, fronteiras, dúvidas, destinos editoriais e próximo passo; a consolidação automática projeta os demais arquivos. Hubs e notas organizam conhecimento, sem manter manualmente uma segunda progressão. Para matérias sem notas ou Avancos.md, aceitar fonte normativa e localizador no checkpoint; registrar a lacuna editorial para o fechamento obrigatório da unidade. Conhecimento documentado, exposição, aprendizagem observada, desempenho competitivo e retenção são eixos distintos por concurso. Fechamento didático não comprova retenção; recuperação imediata permite avançar mantendo revisão pendente. O catálogo inicial da CGU reaproveita unidades existentes e mapeia o checklist sem criar aulas ou resultados fictícios. Contrato e auditoria em [[1 - Planejamento/Continuidade de estudo por materia|Continuidade por matéria]].

## Protocolo de aprendizagem conceitual e arquitetura de artigos (Câmara e demais concursos)

**Regra editorial prioritária aprovada em 05/11/2026.** O aluno aprende por construção de conceitos, definição do objeto, estrutura interna e relações progressivas. Evitar panoramas corridos como substituto de teoria, mesmo quando há prazo curto. É preferível dividir um tema em muitos artigos autônomos a criar uma única nota que enumere tópicos sem explicar o funcionamento deles. A granularidade depende da pergunta conceitual e não de limite artificial de extensão.

**Antes de criar artigos:** ler o edital e retificações; construir mapa do programa em unidades com pré-requisitos, conceitos nucleares, classificações, autores, normas, relações e exceções; auditar artigos existentes; preferir refinar/reutilizar o que já tem autonomia e criar novo quando uma pergunta distinta exigir desenvolvimento próprio. Um título em plano não comprova artigo criado ou conhecimento aprendido. Usar apenas o catálogo v2 para vincular artigos ao concurso; não atribuir pertencimento pela pasta física nem copiar uma nota para cada edital.

**Dentro de cada artigo:** começar por situação e pergunta concreta; definir todos os termos necessários antes de usá-los; mostrar finalidade, critério classificatório, componentes, ordem/etapas; limites e exceções; comparar fronteiras apenas depois de construir cada categoria; apresentar casos progressivos com uma variável alterada por vez; incluir contraexemplo e 1 a 3 questões comentadas no formato da banca, quando pertinentes; ligar explicitamente a pré-requisitos e artigos vizinhos. Distinguir fato, hipótese, simplificação didática e norma. O conteúdo deve poder ser estudado isoladamente sem depender de uma aula oral para preencher definições omitidas. Se não houver substância, manter em planejamento, sem publicar stub ou inflar cobertura.

**Autores:** problema investigado → conceitos e termos → modelo/teoria → estrutura e categorias → condições/limites → autores próximos e conflitos de classificação. Não misturar escolas, modelos e paradigmas como categorias de um único eixo. **Normas:** objeto e finalidade → competência/sujeitos → hipótese → procedimento/efeito → exceções/prazos → comparação normativa. **Tecnologia e métodos:** problema → operação → insumos/saídas → condições e riscos → alternativas. A ordem de estudo deve acompanhar esses pré-requisitos, não apenas a enumeração do edital.

**Fases:** F0 mapear fontes e arquitetura; F1 publicar núcleos fundadores; F2 aprofundar estruturas, autores e procedimentos; F3 completar limites e fronteiras; F4 integrar, revisar e auditar cobertura. Publicar em lotes pequenos de 1 a 3 artigos completos, integrando hub, índice e catálogo no mesmo commit. Fazer primeiro um piloto e ajustar o padrão antes de multiplicar. Status editorial (planejado, redigido, validado, publicado) e progresso real (exposto, aplicado, recuperado, retido) são independentes. No estudo pelo chat, revisar e consolidar cada nota imediatamente ao concluir o artigo, e fazer fechamento da unidade conforme CHAT.md; registros de respostas permanecem no cofre privado.

**Câmara 2026:** seguir [[1 - Planejamento/Camara 2026 - Arquitetura conceitual e plano de artigos|arquitetura completa por 13 trilhas e fases]], mantendo os 11 subjectIds existentes até migração explícita. Cebraspe, C/E, Cargo 1 Divulgação Institucional; prova prevista 17/01/2027. Reaproveitar teoria com CGU/Dataprev apenas quando fonte e conceito coincidirem; os itens, formato, discurso e progresso são específicos. Não simplificar para fichas de uma página ou iniciar baterias sobre termos ainda não construídos.

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

Antes de gerar estudo, questões, baterias, simulados ou registrar desempenho, identificar o concurso-alvo pelo contexto explícito da conversa.

- Até **11/10/2026**, pedidos genéricos ou ambíguos continuam vinculados à **Dataprev**, que permanece como prioridade temporal até a prova.
- Referência explícita à **Dataprev** aciona o protocolo FGV-Dataprev de `me.md`. Nesta reta final, o fluxo padrão é de **simulados integrais**, com teoria apenas como microrevisão derivada de erros, salvo pedido explícito em contrário.
- De **12/10/2026 a 13/12/2026**, após a Dataprev, o padrão para pedidos genéricos será **CGU 2026, Cargo 1 Auditoria**, conforme decisão de 09/10/2026, com fonte em `2 - Editais/CGU 2026 - Auditoria.md`, estratégia e discursiva em `3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E.md` e acompanhamento em `leorruas/concurso-dados:00 - Desempenho/` (sem pasta de projeto CGU). Usar o edital CGU, Cebraspe C/E, pesos +1/-1 (P1/P2) e +2/-2 (P3), as duas discursivas próprias e ledger de desempenho separado.
- Referência explícita à **CGU** sempre aciona seu projeto, inclusive antes de 11/10. Não transformar nota existente em conhecimento comprovado; `coberturaNota` e `exposicaoEstudo` devem permanecer distintos.
- Referência explícita à **Câmara dos Deputados** aciona o projeto `4 - Projetos/camara-2026/`, o edital da Câmara e o protocolo **Cebraspe-Câmara** de `me.md`. Estudo teórico, revisão, questões e simulados da Câmara seguem o padrão Cebraspe/Cespe e o formato C/E.
- Nunca misturar banca ou formato: **FGV para Dataprev; Cebraspe para Câmara e CGU, cada uma com seu edital e pontuação**. Notas teóricas compartilhadas podem ser reutilizadas, mas a mecânica de cobrança, o corpus de calibração e os registros de desempenho pertencem ao concurso-alvo.
- Ao registrar desempenho, atualizar apenas as superfícies do projeto correspondente. É proibido lançar uma sessão da Câmara, da CGU ou da Dataprev em arquivos de outro concurso.

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

### Marcador visual de artigos da semana final

Durante a reta final da Dataprev até 11/10/2026, todo artigo de estudo em `3 - Materias/` que for **criado** ou **substancialmente atualizado** para fechar o backlog da semana deve receber um marcador visual no **título exibido**, sem alterar o nome físico do arquivo:

- **🆕** para artigo novo;
- **🔄** para artigo existente que recebeu atualização substancial.

Aplicar o emoji tanto no campo `title:` do frontmatter quanto no `# H1` da nota, mantendo o wikilink pelo nome físico do arquivo. Não usar emoji para correção tipográfica mínima, ajuste de link ou housekeeping sem ganho de conteúdo.

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

**[DIAGNÓSTICO DE APRENDIZAGEM]** Após [AULA]+[FRONTEIRAS], aplicar uma checagem pequena, em geral 2 a 4 itens de mecanismos variados, declarando **TREINO DE APRENDIZAGEM**. Corrigir com referência às partes efetivamente ensinadas. Se uma questão contiver regra nova ou exigir norma até então apenas mencionada, o item é **invalidado para diagnóstico de domínio**: assumir a falha de sequência, ensinar a base e só então retestar. Não contar uma sequência de itens didáticos como simulado, nem fazer nova questão automática após cada correção.

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

### Calibração vigente pós-Simulado 04 — próximo simulado Dataprev

Até nova autópsia substituir esta régua, o próximo simulado integral da Dataprev deve mirar a dificuldade observada na prova oficial FGV Dataprev 2024, sem copiar itens.

**Composição obrigatória:** 12 Português + 12 Inglês + 5 Lógica + 6 Atualidades/IA + 5 Legislação + 30 Comunicação.

**Português**
- usar trechos reais ou verossímeis em parte relevante do bloco;
- privilegiar classificação sintática/semântica, regência, concordância, coesão, reescrita e variação, com alternativas próximas;
- evitar excesso de itens resolvíveis apenas por reconhecer uma regra evidente.

**Inglês**
- preferir 2 a 3 textos, com pelo menos um texto mais longo;
- misturar interpretação, referência pronominal, conectores, vocabulário, modalização e classe/função da palavra;
- evitar transformar o bloco em gramática isolada.

**Lógica**
- incluir ao menos dois problemas contextualizados ou em duas etapas;
- misturar lógica formal com aritmética/proporção, ordenação/contagem e um item de padrão, álgebra, geometria ou raciocínio matricial;
- dificuldade deve vir da modelagem, não de conta longa.

**Atualidades/IA**
- priorizar 4 itens de fatos/instituições recentes e 2 de IA, ajustando apenas se a conjuntura justificar;
- incluir naturalmente I/II/III ou V/F;
- o enunciado não deve fornecer a definição que resolve a própria questão;
- fatos conjunturais precisam ser verificados em fontes atuais antes da geração;
- **para simulados Dataprev até 11/10/2026, não usar a data de geração como corte de Atualidades**: o simulado deve reproduzir o universo plausível de um caderno já fechado editorialmente. Priorizar fatos consolidados com antecedência e reduzir fortemente fatos dos últimos dias de setembro ou de outubro. Não inventar uma data oficial de corte da FGV.

**Legislação**
- distribuir as 5 questões entre LAI/Decretos, Lei 12.737/art. 154-A, Marco Civil e LGPD;
- usar alternativas juridicamente próximas, exceções, sujeitos, prazos, competências e condições;
- evitar cinco perguntas de literalidade de primeira camada.

**Comunicação**
- cobrir todos os dez blocos do edital ao longo das 30 questões, sem forçar três questões por bloco;
- aumentar materialmente história/repertório, autores, estruturas internas, taxonomias e terminologia profissional;
- mesclar reconhecimento factual, associação/correlação, I/II/III, EXCETO, interpretação de trecho teórico e caso profissional;
- aproximadamente um terço do bloco deve exigir recuperação factual/autoral/taxonômica e não apenas aplicação intuitiva;
- incluir rádio/TV, história da imprensa e comunicação empresarial, além de digital/marketing/pesquisa/design;
- não super-representar os erros recentes do candidato.

**Régua de dificuldade:** igual ou levemente acima da prova-espelho de 2024. A dificuldade deve vir de alternativas próximas, verdade parcial, transposição conceitual, recuperação factual e duas etapas de raciocínio — não de obscuridade gratuita, enunciado artificialmente longo ou conhecimento fora do edital.

### Lição transferível pós-Dataprev — calibração de Português

A reconstrução parcial da prova real Dataprev 2026, ainda sob **gabarito preliminar** e sem cartão-resposta confirmado, apontou risco de falsa segurança em Português: o bloco real exigiu mais discriminação em **coerência, referenciação, valor semântico, tipologia e fronteiras classificatórias**, e não apenas recuperação de regras gramaticais. Esse sinal deve influenciar o desenho de treinos futuros, mas **não deve ser registrado como nota oficial** até haver respostas confirmadas e gabarito definitivo.

Para qualquer próximo concurso:
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

Todo simulado ou bateria que deva aparecer na interface pública é uma **operação multi-arquivo**. Não considerar o registro concluído após atualizar apenas o `Log de erros.md`.

Para um **simulado integral**, o agente deve atualizar, na mesma operação lógica:

1. `00 - Desempenho/Simulados/Simulado-XX.md`, com resultado, respostas, gabarito, erros, dúvidas e diagnóstico;
2. `00 - Desempenho/Simulados/00 - Catalogo de simulados.md`;
3. `leorruas/concurso-dados:4 - Projetos/dataprev-2026/Questoes e Simulados.md` (para CGU, usar os hubs comuns de desempenho e simulados, sem projeto próprio);
4. `leorruas/concurso-dados:4 - Projetos/dataprev-2026/Log de erros.md`, quando houver erros ou acertos com lacuna relevante;
5. `leorruas/concurso-dados:4 - Projetos/dataprev-2026/00 Dashboard.md` apenas em concursos com painel legado; **CGU não tem dashboard**;
6. `data/provas.json`, que alimenta o painel estratégico da interface e deve conter `sourcePath`, resultado, comparabilidade e nota calculável quando aplicável;
7. `00 - Desempenho/00 Avancos globais.md`, recalculando a janela de 30 dias, o acompanhamento semanal e o controle de simulados consolidados;
8. `00 - Desempenho/01 Log de saturacao diaria.md`, registrando volume, aproveitamento bruto, TAP e diagnóstico de carga;
9. os `Avancos.md` locais exigidos por `me.md`, quando o novo resultado alterar métricas da disciplina;
10. `data/questoes-ledger.json`, registrando todas as questões do caderno, mecanismo cognitivo, gabarito, resposta, segurança e relação de repetição.

Para baterias mistas, atualizar as superfícies equivalentes compatíveis com o tipo de registro; não inventar nota /115 quando a composição oficial não tiver sido reproduzida.

Para Câmara ou outro concurso, usar as superfícies equivalentes do concurso-alvo; nunca escrever na Dataprev por padrão. Atualizar também o hub por edital/prova, conforme a seção correspondente. As regras de rascunhos, links ancorados, novidade e confiança estão nas seções próprias deste arquivo.

### Hub obrigatório de desempenho por edital e prova

Sempre que um **simulado completo** ou outra prova registrada em `data/provas.json` for criada ou corrigida, atualizar na mesma operação o hub **privado** `leorruas/concurso-dados:00 - Desempenho/Provas/00 - Desempenho por edital e prova.md`, sem replicar resultados no público.

O hub deve:
- registrar o novo resultado na seção do concurso correto;
- distinguir aproveitamento bruto de nota calculada pelas regras do edital;
- declarar a comparabilidade da prova/simulado;
- atualizar a análise comparativa quando o novo resultado altera a leitura da evolução;
- nunca misturar métricas da Dataprev com Câmara ou outro concurso;
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
