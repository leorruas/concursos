# Validacao e publicacao

O fluxo de integração definido no AGENTS.md da raiz prevalece sobre referências históricas a PR ou envio direto neste guia.

## Leitura para manutenção e hierarquia das instruções

`AGENTS.md` na raiz é o único arquivo de instruções para agentes deste repositório. Para manutenção e operações fora do fluxo rápido, ler também `me.md` (protocolos públicos de estudo; perfil individual no cofre privado), `index.md` (catálogo) e os contratos pertinentes. Para estudo cotidiano, prevalece a entrada curta em `CHAT.md`, conforme a seção anterior. Regras de concurso e contratos específicos complementam este arquivo; não criar outro `AGENTS.md` para duplicá-las.

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

## Regra para mudanças multi-arquivo críticas

Quando uma operação só estiver correta se vários arquivos permanecerem sincronizados — criação de nota canônica, ingestões, propagação de desempenho, catálogos, dashboards e alterações equivalentes — aplicar também **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]**.

- Em ambiente local/Work, preferir `scripts/apply-changeset.js` a uma sequência de gravações independentes.
- Pelo conector GitHub, preferir um único `create_tree` → `create_commit` → `update_ref` para a operação lógica inteira.
- Se a ferramenta disponível não permitir atomicidade, declarar essa limitação e concluir todas as superfícies dependentes antes de tratar a operação como encerrada; não iniciar trabalho não relacionado no intervalo.

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

## GitHub Pages: economia de execuções e diagnóstico pré-job (09/11/2026)

O workflow `.github/workflows/pages.yml` ignora commits que alterem **apenas** documentação operacional excluída de `_site`, especialmente `1 - Planejamento/**`, `AGENTS.md`, `CHAT.md`, `me.md`, `log.md`, `index.md` e `.agent/**`. Preservar a publicação para alterações em matérias, dados públicos, scripts, interface e workflows. Antes de incluir novos caminhos em `paths-ignore`, confirmar em `scripts/build-site.js` que não são entradas da publicação; alterações misturadas com arquivos públicos ainda devem disparar o workflow.

Ao diagnosticar falha de Pages, consultar primeiro `actions/runs` e `/actions/runs/{run_id}/jobs`. Se uma execução terminou em `failure` com **zero jobs**, nenhum teste ou build executou: investigar limites de minutos/cobrança, runners, políticas de Actions, restrições e incidentes do GitHub antes de alterar scripts de build. Tratar a causa como indeterminada até obter evidência específica; não afirmar que a filtragem de commits restaura uma conta bloqueada. Se houver jobs, identificar a primeira etapa que falhou e obter logs antes de corrigir código. Não reexecutar em massa workflows que tenham falhado antes de iniciar jobs.

## Referências cruzadas entre artigos: títulos legíveis (12/11/2026)

**Regra editorial obrigatória para todo o acervo público, artigos novos e revisões.** Ao mencionar outro artigo no corpo de um texto, usar seu **título editorial real como texto âncora do link**, conferido no arquivo/catálogo vigente. Evitar referências voltadas ao leitor como “nota 16”, “nota 17”, “CAM-CP-008”, “artigo CAM-CP-010” ou somente códigos e números de sequência. Os IDs permanecem nos metadados, catálogos, nomes de arquivo e contratos técnicos; não substituí-los ou renumerá-los. A navegação deve ser semântica e compreensível mesmo fora da ordem do curso.

**Exemplo:** escrever “[Formas de governo: República e Monarquia](URL-canônica-verificada)” em vez de “nota 17, CAM-CP-008”. Preferir construções naturais como “O artigo [Regimes políticos: democracia, autoritarismo e hibridismos](URL-canônica-verificada) apresenta...” e “A análise continua em [Representação política: mandato, delegação e responsabilização](URL-canônica-verificada)”. O título ilustrativo deve ser conferido antes da aplicação; nunca presumir que o título sugerido é o oficial.

**Verificação obrigatória:** ao criar, revisar ou auditar artigos, procurar no texto visível referências por número de nota, IDs de unidade/artigo, menções vagas (“nota anterior”, “próxima nota”, “ver nota”) e links cujo texto não corresponda ao artigo de destino. Resolver cada referência pelo catálogo e pelo título efetivo do Markdown, preservando URL, âncoras e significado. Se o destino estiver planejado, mas ainda não publicado, citar o tema por nome em prosa e não inventar link. Não alterar citações bibliográficas, números de leis, questões, IDs em metadados/frontmatter, exemplos técnicos nem referências que não apontem para artigos. Não fazer substituição global cega: revisar o contexto e evitar repetição artificial de títulos longos. Relatar quantidade de arquivos verificados, ocorrências corrigidas e pendências; validar links/rotas e executar os testes editoriais disponíveis antes de declarar a auditoria concluída.

## Disciplina de mudanças editoriais e CI: incidente das referências (12/11/2026)

**Fluxo de PR sempre de leitura e validação:** um workflow disparado por `pull_request` não deve executar correções de conteúdo, criar commits ou usar `git push` na própria branch. A revisão de títulos e links deve ocorrer **antes do check**, no branch de trabalho, em lote com base atualizada e hash/HEAD conferido. O CI apenas relata e testa; não combinar aplicação de correções com validação na mesma execução. Essa separação evita o incidente em que um push a partir de checkout `detached HEAD` foi recusado porque a branch avançou durante a execução. Não usar `force` para contornar conflitos.

**Auditoria de wikilinks:** reconhecer `[[caminho|título]]` e a variante escapada `[[caminho\\|título]]`; resolver caminhos a partir da raiz, relativos à nota e por aliases antes de declarar link quebrado. Separar referências a fontes históricas que já não estão no repositório público, como `00 inbox/`, `00 ingestão` e os destinos privados `Avancos.md`, de links públicos realmente inválidos. Códigos de edital em títulos internos, listas curriculares, tabelas, fontes e metadados podem ser legítimos. Corrigir como referência ao leitor apenas quando o código ou número substitui o título de outro artigo. Nunca retirar IDs estruturais indiscriminadamente.

**Critério de fechamento:** terminar lotes com revisão de diff, relatório da auditoria e CI do **último HEAD**; conferir separadamente o workflow do glossário quando aplicável, o Pages no `main` após merge e o manifesto ao vivo. Distinguir erro real em job de execução cancelada por commit novo, push rejeitado por concorrência e atraso no deploy. Não afirmar publicação concluída apenas por commit ou check do PR.
