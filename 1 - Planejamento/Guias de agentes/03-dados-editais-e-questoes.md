# dados editais e questoes

> Conteúdo transferido do AGENTS.md em 22/11/2026. Em caso de conflito, prevalecem as regras da raiz, seguidas da regra específica mais recente.

## Contrato de separação de Orçamento Público: CGU e Câmara (17/11/2026)

**Fonte de coordenação:** `1 - Planejamento/Orcamento Publico - Arquitetura CGU e Camara.md`; percursos `1 - Planejamento/CGU 2026 - Percurso editorial Orcamento.md` e `1 - Planejamento/Camara 2026 - Percurso editorial Orcamento.md`. Aplicar esta regra antes de qualquer edição de Orçamento Público; prevalece sobre referências históricas que autorizam múltiplos agentes a alterar índices ou catálogo. Cada concurso possui revisão e certificação próprias por `articleId`; a certificação da Câmara não pode ser atribuída a um derivado da CGU.

**Propriedade:** só a coordenação altera `AGENTS.md`, `index.md`, `3 - Materias/Orcamento Publico/orcamento-publico.md`, `data/catalogo-materias-por-concurso.json`, manifesto EPUB e documentos de coordenação desta migração. O agente CGU cria/revisa exclusivamente `3 - Materias/Orcamento Publico/CGU 2026 - *.md` e seu registro de estado; o agente Câmara cria/revisa exclusivamente `3 - Materias/Orcamento Publico/Camara 2026 - *.md` e artigos legados explicitamente reservados a essa frente. Artigos antigos 01–11 e subdivisões que ainda têm `articleId` compartilhado permanecem congelados para edições concorrentes; 12–15 são exclusivos da Câmara. Solicitar à coordenação inclusão ou troca de vínculos no catálogo, index e hub.

**Compatibilidade:** não mover nem renomear arquivo canônico sem análise de URLs e referências. Para derivar versão, usar ID novo e origem documentada (`derivedFromArticleId` no planejamento; frontmatter novo apenas após validar parser). Preservar caminho, ID e aliases antigos; reconciliar `theoryRefs`, glossário, flashcards, índices e `data/planos-estudo/cgu-2026.json` antes da substituição atômica no catálogo. Não editar `data/questoes-camara.json`; se necessário, abrir etapa técnica separada. Não gerar EPUB nesta missão.


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
