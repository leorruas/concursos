# Estudo e cofre privado

O fluxo de integração definido no AGENTS.md da raiz prevalece sobre referências históricas a PR ou envio direto neste guia.

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
