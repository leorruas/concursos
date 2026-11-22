# Questoes e simulados

O fluxo de integração definido no AGENTS.md da raiz prevalece sobre referências históricas a PR ou envio direto neste guia.

## Variações conceituais e retestes no banco de questões (21/11/2026)

**Diversidade útil, não eliminação de semelhanças por assunto.** É desejável manter duas ou mais questões sobre o mesmo conceito quando representam variações reais da cobrança: caso concreto, inversão de premissas, distinção entre institutos próximos, exceção legal, mudança de agente/âmbito ou alteração do gabarito. A repetição espaçada e o reteste se beneficiam de itens distintos sobre a mesma regra. **Não rejeitar automaticamente novos itens apenas porque compartilham `articleId`, `conceptId` ou vocabulário.**

**Critérios editoriais:** preservar `id` único por enunciado e versão, referenciar capítulo pela sequência editorial do catálogo, registrar `conceptId` e mecanismo de cobrança, indicar fundamento jurídico preciso e gabarito comentado. Verificar a aplicação da regra e eventuais exceções. Distinguir enunciados idênticos ou quase idênticos sem ganho pedagógico de variações úteis: essas últimas podem coexistir, desde que o contraste cognitivo seja identificável. Quando duas formulações equivalentes divergirem no gabarito, bloquear até revisão jurídica. Não inserir dados de tentativas ou respostas privadas no repositório público.

**Reteste:** uma questão alternativa com mesmo conceito não equivale a repetir o mesmo `questionId`. Preservar os dois sinais no histórico: reexecução literal do item e transferência do aprendizado para uma variante. Sem métricas específicas, não afirmar que a simples existência de variantes mede retenção. Em expansões, comparar itens também com o banco existente, documentar o valor da variação e testar IDs, vínculo com o edital, cobertura por capítulo e build/publicação.

## Corpus de provas-espelho: etapa obrigatória do novo edital

Antes de escrever questões ou simulados para um edital recém-publicado, pesquisar **provas reais** do mesmo órgão/cargo e **provas do mesmo formato** da banca. Para CGU, consultar [[00 - Desempenho/Provas/CGU 2026 - Corpus de provas-espelho|corpus CGU]], `data/corpus-provas-espelho.json` e `data/corpus-itens.json`, além do edital e da [[3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E|estratégia]]. CGU 2022/FGV tem valor de conteúdo, mas seu A–E **não representa C/E**. TCE/MG 2026/Cebraspe também usou múltipla escolha; CGE/AL e TCU AUFC usam C/E. Prova localizada não é prova indexada nem simulado calibrado.

Preservar PDFs oficiais e gabaritos na pasta funcional `assets/provas-espelho/` quando a redistribuição for permitida; o download automatizado `scripts/baixar-provas-espelho.mjs` registra hashes. **Não afirmar arquivamento** antes de confirmar binários presentes no branch. Não apresentar gabaritos preliminares como definitivos; verificar anulações/alterações, versão/tipo do caderno e legislação vigente. Para exercícios inéditos, combinar conteúdo do órgão com mecanismos reais da banca sem copiar as questões; para treinos de questões reais, referenciar PDF e item numerado. Continuar separando `data/provas.json` (desempenho pessoal) do arquivo de fontes `data/corpus-provas-espelho.json`.

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
