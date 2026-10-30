# Instruções para agentes — vault de concursos

Antes de modificar este repositório, leia integralmente `me.md`, `index.md` e `.agent/AGENTS.md`. Para a CGU, **não recriar `4 - Projetos/cgu-2026/`**: edital/checklist em `2 - Editais/`, objetiva/discursiva em Estratégia de Prova, métricas/simulados em `00 - Desempenho/`. As regras operacionais detalhadas ficam em `.agent/AGENTS.md`.

## Entrada de edital: corpus e geração de exercícios

É obrigatório localizar provas-espelho, identificar **mesmo cargo/conteúdo** e **mesma banca/formato**, registrar URLs oficiais no catálogo `data/corpus-provas-espelho.json` e criar/atualizar o dossiê em `00 - Desempenho/Provas/`. Preservar PDFs e gabaritos com SHA-256 em `assets/provas-espelho/` se autorizados; não considerar fonte arquivada sem arquivo verificável no Git. A indexação real usa `data/corpus-itens.json` e exige gabarito definitivo, modelo da prova, validade normativa e item numerado. Questões inéditas devem reproduzir mecanismos comprovados sem copiar o enunciado. CGU 2026: conteúdo CGU 2022/FGV; formato C/E CGE/AL e TCU AUFC; TCE/MG 2026 é A–E, mesmo com banca Cebraspe. Ver [[1 - Planejamento/Registro de entrada de editais|Registro de entrada de editais]].

## Uso didático da técnica de Feynman

A técnica de Feynman serve **para explicar**: partir de um problema concreto, usar linguagem simples, tornar visíveis as relações e depois apresentar a formulação técnica correta. Priorizar exemplos e comparações que resolvam dúvidas reais, sem sacrificar a precisão da banca.

**Não criar na nota seções automáticas como “Verificação de compreensão (Feynman)”**, convites para o leitor explicar com as próprias palavras nem questionários metacognitivos. A interação para verificar o entendimento, identificar confusões e corrigir o raciocínio ocorre **no chat**, a partir das respostas reais do estudante. Na wiki, preservar a explicação, as fronteiras conceituais e, quando relevantes, **itens comentados em formato de prova**, que são outra finalidade. Não registrar domínio ou erro sem resposta efetivamente dada.

## Identificação das questões: aprendizagem e para valer

**Antes de apresentar qualquer questão ou bateria no chat**, rotular explicitamente sua função. Usar três modalidades:

- **Treino de aprendizagem:** questão inédita, didática, destinada a verificar entendimento e encontrar lacunas. Pode ter formato C/E do Cebraspe sem imitar fielmente sua dificuldade. Seus acertos **não medem prontidão para a prova**.
- **Treino para valer:** questão inédita **calibrada por leitura e comparação efetiva com itens reais identificáveis** da banca, do mesmo formato e, sempre que possível, da mesma área. Informar a fonte da calibração. Uma bateria calibrada é diagnóstico parcial; **não equivale a simulado integral**.
- **Questão real da banca:** item efetivamente encontrado em caderno oficial, com concurso, cargo, ano, número/tipo, e gabarito definitivo conferido. Se adaptado ou parafraseado, rotular como **adaptado**, não como questão real transcrita.

**Não chamar de “para valer” um item apenas porque tem o formato C/E, usa termos jurídicos ou parece difícil.** Sem base empírica documentada, o rótulo será “Treino de aprendizagem”. Avisar **antes do item** e sempre que mudar a modalidade, sem esperar que o usuário pergunte. Na correção, diferenciar diagnóstico de compreensão e diagnóstico de desempenho. Acertos avulsos não demonstram domínio de uma unidade do edital.

## Cadência pedagógica obrigatória: aula → fronteiras → diagnóstico → consolidação

**Para cada bloco conceitual do edital, cumprir um ciclo fechado, nessa ordem.** A pergunta não deve ser o motor automático da aula. Avisar no chat qual etapa está em andamento e não saltar etapas para acumular questões.

1. **Preparação e mapa:** indicar o recorte do edital, pré-requisitos, estruturas e normas a ensinar. Se um conceito próximo for necessário, inseri-lo no plano antes da prova.
2. **Aula de conteúdo:** ensinar a matéria de forma suficiente para enfrentar casos novos: finalidade, funcionamento, categorias, responsáveis, requisitos, condições, exceções e exemplo trabalhado. Em temas normativos, conferir os itens aplicáveis. **Não interromper uma explicação incompleta com questão-surpresa.**
3. **Teste de fronteiras:** comparar cenários quase idênticos e mostrar o efeito de trocar uma condição, sujeito, prazo, objeto ou finalidade. **Primeiro ensinar as diferenças; depois exigi-las.** Se a fronteira revelar conceito não explicado, voltar à aula.
4. **Diagnóstico didático:** após a base e as fronteiras, usar poucas questões explicitamente rotuladas **TREINO DE APRENDIZAGEM**. Corrigir raciocínio e fonte. Se o item depender de regra não ensinada, classificá-lo como **lacuna da instrução**, explicar antes de retestar e **não interpretar o erro como medida de domínio do estudante**.
5. **Diagnóstico para valer:** somente depois, e quando houver comparação efetiva com provas reais, apresentar uma bateria variada e rotulada **TREINO PARA VALER**, com fonte de calibração e leitura cautelosa do resultado; caso contrário permanecer no treino didático.
6. **Fechamento no vault:** **antes de mudar de bloco conceitual**, atualizar a nota canônica com a teoria completa, condições e exceções, fronteiras importantes, exemplos e erros relevantes; atualizar o hub com estado **ensinado / aprofundado na nota / validado com questões / pendente**. Não publicar a cada item nem deixar vários blocos passarem sem consolidação.

**Ritmo:** preferir desenvolvimento do conteúdo e das fronteiras a uma sequência de “certo ou errado?”. Não iniciar uma nova norma apenas para construir a questão seguinte. A cada erro, distinguir erro real de conhecimento de falha da sequência didática. Não declarar unidade concluída com base somente em acertos. Para material que ainda será ensinado, registrar a pendência no mapa do hub, não transformá-la em uma nota superficial.

## Siglas e acrônimos: expansão na primeira ocorrência

Em **cada nota, artigo, roteiro, questão comentada, relatório e aula no chat**, escrever o **nome por extenso seguido da sigla entre parênteses na primeira ocorrência**, por exemplo: **Unidade de Auditoria Interna Governamental (UAIG)**. Nas menções seguintes do mesmo texto, usar **UAIG**. Aplicar também a órgãos, leis, normas, cargos, planos, relatórios, programas, métodos e siglas em outros idiomas.

**Cada nota deve ser compreensível de forma independente**, mesmo que a sigla tenha sido explicada em outro artigo. Quando aparecer no título ou subtítulo, expandir no primeiro ponto visível ou antes dele, preservando âncoras e links já existentes. Em siglas compostas, explicar cada elemento importante, como **Instrução Normativa (IN)** e **Secretaria Federal de Controle Interno (SFC)** antes de escrever **IN SFC nº 3/2017**. Não modificar siglas literais em URLs, caminhos ou citações exatas.

**Antes de publicar**, revisar as primeiras ocorrências na ordem de leitura. Evitar repetir o nome extenso em todos os usos ou substituir a explicação por um glossário desconectado. Ao revisar um artigo existente, corrigir também as siglas que nele ficaram sem expansão.

## Modo intensivão: profundidade e cobertura antes de avançar

Quando o pedido for **aprender matéria nova, aprofundar conteúdo ou fazer um intensivão**, a tarefa principal é **ensinar o assunto com densidade suficiente para o edital**, e não produzir rapidamente uma nota ou uma sequência de questões. Aplicar o protocolo detalhado de `.agent/AGENTS.md` e a régua de cobertura de [[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]].

**Antes de escrever:** ler o trecho pertinente do edital, as fontes primárias (normas, manuais, autores) e as notas existentes; decompor o assunto em conceitos, estruturas, etapas, condições, exceções, exemplos e fronteiras entre conceitos próximos. Manter um **roteiro de aprofundamento no hub da matéria**, com itens cobertos, superficiais e pendentes, priorizados pelo concurso. Uma nota panorâmica não equivale a domínio de seus subtópicos.

**Durante a aula no chat:** ensinar por explicação progressiva e exemplos concretos (técnica de Feynman), apresentar a terminologia técnica e as exceções e conectar os conceitos. O aluno deve receber a **explicação completa aqui**, sem precisar abrir o GitHub para aprender. Só depois de apresentar a base necessária, aplicar questões do formato da banca que discriminem fronteiras reais. Uma resposta correta isolada não comprova domínio.

**Ao consolidar:** refinar notas canônicas existentes ou criar novas notas somente quando o conteúdo justificar estudo independente. Preservar origens, condições e limites das regras, exemplos resolvidos, diferenças perigosas, relações com o edital e pegadinhas relevantes. **Consolidar ao final de um bloco coerente de estudo ou quando o usuário pedir**, em vez de publicar a cada resposta. Registrar lacunas sem inventar detalhes e distinguir cobertura da nota, exposição no chat e desempenho efetivamente medido. A meta é **profundidade útil para prova**, não volume de texto, de notas ou de questões.

## Criação de notas em `3 - Materias/`

Uma nota canônica nova exige, na mesma operação e no mesmo commit, a nota, o link no hub da matéria (quando existir) e o wikilink com o caminho exato no `index.md` global. Confira os três arquivos antes de gravar. Não crie a nota primeiro para indexá-la em um commit posterior.

Antes de encerrar a operação, execute as validações disponíveis, incluindo `node scripts/validate-vault-invariants.js` e `node scripts/validate-integrity.js`. Se estiver operando pelo GitHub conectado, acompanhe o workflow **Publicar no GitHub Pages** do HEAD final. Se ele falhar, corrija a falha antes de iniciar conteúdo não relacionado; se estiver pendente, não anuncie publicação concluída.

O contrato completo de mudança e publicação está em `1 - Planejamento/Contrato transacional de mudancas.md` e `1 - Planejamento/Contrato de publicacao GitHub Pages.md`.


## Registro obrigatório de todas as questões respondidas

**Toda questão respondida e corrigida no chat precisa ser registrada**, inclusive itens avulsos, questões de aula e baterias incompletas. Em cada checkpoint (fim de bloco ou pedido do estudante), atualizar `Avancos.md` da disciplina, `00 - Desempenho/00 Avancos globais.md` e `00 - Desempenho/01 Log de saturacao diaria.md`; criar e indexar `Avancos.md` caso não exista. **Não esperar por um simulado completo.** Registrar separadamente concurso, disciplina, data, ID estável da sessão, itens respondidos válidos, acertos, erros, brancos, questões anuladas, dúvidas, diagnóstico e estágio parcial/concluído. Na retomada, atualizar a **mesma sessão sem duplicar contagens**.

**Modalidades obrigatoriamente separadas nas métricas:**
- **Treino de aprendizagem:** questão inédita didática. Serve para medir compreensão, não previsão de nota.
- **Treino para valer:** questão inédita calibrada com provas reais identificadas. Registrar a fonte da calibração; não é questão real.
- **Questão real:** item original de prova, com banca, ano, concurso, cargo, caderno, número e gabarito definitivo verificado.
- **Questão adaptada:** derivada de item real, com mudanças declaradas e fonte; não contabilizar como item original.
- **Simulado:** avaliação estruturada e concluída; usar protocolo específico de pontuação, ledger e propagação.

**Não contabilizar enunciados apenas apresentados, ainda não respondidos, inválidos ou anulados** como acertos/erros. O volume total pode ser agregado somente com modalidade, origem e concurso identificados; manter taxas separadas e amostragem insuficiente abaixo de 50 questões. **Microbateria não vira simulado em `data/provas.json` nem produz nota líquida oficial.** No fim de uma bateria, atualizar os indicadores de 30 dias e semana, e conferir a consistência local/global e o deploy.

## Propagação obrigatória de simulados para o painel

Todo simulado ou bateria que deva aparecer na interface pública é uma **operação multi-arquivo**. Não considerar o registro concluído após atualizar apenas o `Log de erros.md`.

Para um **simulado integral**, o agente deve atualizar, na mesma operação lógica:

1. `00 - Desempenho/Simulados/Simulado-XX.md`, com resultado, respostas, gabarito, erros, dúvidas e diagnóstico;
2. `00 - Desempenho/Simulados/00 - Catalogo de simulados.md`;
3. `4 - Projetos/dataprev-2026/Questoes e Simulados.md` (para CGU, usar os hubs comuns de desempenho e simulados, sem projeto próprio);
4. `4 - Projetos/dataprev-2026/Log de erros.md`, quando houver erros ou acertos com lacuna relevante;
5. `4 - Projetos/dataprev-2026/00 Dashboard.md` apenas em concursos com painel legado; **CGU não tem dashboard**;
6. `data/provas.json`, que alimenta o painel estratégico da interface e deve conter `sourcePath`, resultado, comparabilidade e nota calculável quando aplicável;
7. `00 - Desempenho/00 Avancos globais.md`, recalculando a janela de 30 dias, o acompanhamento semanal e o controle de simulados consolidados;
8. `00 - Desempenho/01 Log de saturacao diaria.md`, registrando volume, aproveitamento bruto, TAP e diagnóstico de carga;
9. os `Avancos.md` locais exigidos por `me.md`, quando o novo resultado alterar métricas da disciplina;
10. `data/questoes-ledger.json`, registrando todas as questões do caderno, mecanismo cognitivo, gabarito, resposta, segurança e relação de repetição.

Para baterias mistas, atualizar as superfícies equivalentes compatíveis com o tipo de registro; não inventar nota /115 quando a composição oficial não tiver sido reproduzida.

**Rascunho parcial:** um simulado ainda em resolução pode ser salvo em `00 - Desempenho/Simulados/Simulado-XX.md` sem propagação para catálogo, dashboard, `data/provas.json`, avanços ou métricas finais **somente** quando o frontmatter declarar simultaneamente `status: rascunho` e `parcial: true`. Esse rascunho também não deve integrar o GitHub Pages. Ao concluir o caderno, remover a condição de parcial/rascunho e executar a propagação integral na mesma operação lógica.

**Regra de interface:** criar o Markdown do simulado não basta. Se `data/provas.json` ou o catálogo estiverem desatualizados, o painel está inconsistente. Após a alteração, acompanhar o workflow **Publicar no GitHub Pages** e só afirmar que o simulado “aparece no painel” depois de confirmar o deploy do HEAD e, quando aplicável, a presença do arquivo no manifesto/site publicado.

**Regra de links de revisão:** em relatórios de questões, baterias e simulados — incluindo `## Ajustes a partir dos erros`, acertos com dúvida/baixa segurança, `Log de erros.md`, diagnósticos e campos de estudo/revisão — todo link para teoria deve apontar para o **subtítulo exato** que contém o conceito: `[[Pasta/Nota#Subtítulo exato|Texto]]`. Linkar apenas o topo da nota não satisfaz a regra quando existe um destino mais específico. Se o subtítulo adequado ainda não existir, refinar a nota canônica antes de concluir o relatório. No GitHub Pages, o deep link deve abrir diretamente nessa seção; mudanças no renderizador de wikilinks devem preservar e testar a seção na rota pública.

**Governança anti-repetição:** antes de gerar questões, baterias ou simulados, consultar `data/questoes-ledger.json` e, quando houver ambiente de execução, rodar `node scripts/question-ledger.js --recent <concursoId> --window 3`. Um simulado completo deve ser planejado por mecanismo cognitivo antes da redação final e passar por `--check-plan`. Régua padrão: **≥ 75% de mecanismos novos**, **≤ 3% de repetição exata**, **≤ 10% de repetição mecânica** e **≤ 15% de revisão intencional**. Erro recente não autoriza repetir a mesma pergunta: a revisão deve mudar o mecanismo de cobrança. Após a resolução, registrar o caderno inteiro no ledger na mesma operação de propagação; simulado completo sem ledger atualizado é incompleto. Se um caderno já aplicado violar a régua, preservar o resultado, medir a contaminação e marcar `benchmarkEligible: false` com justificativa, em vez de apagar o histórico.

**Rastreamento de confiança:** nos simulados resolvidos em chat, adotar por padrão `sem marca = secure`, `? = insecure/dúvida` e `?? = guess/chute`. O ledger aceita `confidence: secure|insecure|guess|unknown`. Só declarar `confidenceTracking.coverage: complete` quando o protocolo tiver sido aplicado ao caderno inteiro; sessões antigas ou incompletamente marcadas ficam como `partial` e não entram na média oficial. Para medir dúvida/chute, usar `node scripts/question-ledger.js --confidence <concursoId> [--window N]`, que calcula média de questões incertas e acurácia por nível de confiança e por disciplina.

Mudanças dependentes de um mesmo simulado devem preferencialmente entrar em **um único commit atômico**.

## Mapa operacional de scripts e diagnóstico

Para tarefas nos scripts, na interface ou nas integrações entre ingestão, dados, busca e publicação, consultar [[1 - Planejamento/Mapa de scripts e contratos do sistema|Mapa de scripts e contratos do sistema]]. Ele reúne entradas, saídas, dependências, limites dos checks e lacunas verificadas. Conferir o código vigente, localizar a primeira divergência entre produtor e consumidor e aplicar os contratos existentes; o mapa não substitui `me.md` nem as regras detalhadas de `.agent/AGENTS.md`. Manter a entrada dos scripts afetados atualizada ao concluir mudanças nesse sistema.
