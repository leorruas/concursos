# Registro de microtreinos

Cada arquivo `<id>.json` é uma sessão real, pequena e independente. Novos registros usam `schemaVersion: 2`; o formato 1 permanece aceito para preservar o legado. O assistente resolve a matéria e unidade pelo contexto e prepara o registro; o estudante não precisa informar identificadores. Não guardar exemplos fictícios nesta pasta com extensão JSON. Não importar o legado novamente. O histórico anterior permanece no ledger. Usar o mesmo identificador e substituir o estado completo nas retomadas/correções. Não apagar arquivos: anular item inválido com motivo. Questões apenas apresentadas ficam fora até resposta ou branco explícito.

O assistente prepara este registro; o estudante só precisa responder às questões. Exemplo de formato (substituir todos os dados pelo ocorrido):

```json
{
  "schemaVersion": 2,
  "subjectId": "auditoria-governamental",
  "unitId": "u07",
  "id": "cgu-2026-2026-11-03-auditoria-b01",
  "date": "2026-11-03",
  "startedAt": "2026-11-03T18:00:00-03:00",
  "concursoId": "cgu-2026",
  "banca": "Cebraspe",
  "kind": "microtreino",
  "trainingMode": "aprendizagem",
  "status": "parcial",
  "diagnosis": "Entendimento observado, com limites da amostra.",
  "nextStep": "Próximo recorte e pendências.",
  "learning": {
    "stage": "aprendizagem",
    "taughtConcepts": ["finalidades dos testes"],
    "boundaries": ["técnica versus finalidade"],
    "pending": ["treino calibrado e retenção"],
    "unitCompleted": false,
    "next": {
      "unitId": "u07",
      "stage": "fronteiras",
      "objective": "Comparar finalidade dos testes em um novo caso.",
      "noteRef": "3 - Materias/Auditoria Governamental/02 - ciclo de auditoria#2. Execução: testar, comparar e documentar",
      "sourceIds": ["mot"]
    }
  },
  "questions": [{
    "conceptId": "finalidade-do-teste",
    "number": 1,
    "discipline": "Auditoria Governamental",
    "topic": "Tema estudado",
    "subtopic": "Fronteira avaliada",
    "questionType": "comparison",
    "mechanism": "comparar-competencias",
    "distractorMechanism": "inversao-de-competencia",
    "statement": "Enunciado efetivamente apresentado.",
    "explanation": "Correção e raciocínio decisivo.",
    "format": "CE",
    "correctAnswer": "C",
    "userAnswer": "C",
    "confidence": "unknown",
    "origin": "inedita",
    "destinations": ["metrica_apenas"],
    "annulled": false,
    "errorType": null,
    "theoryRefs": [],
    "repetition": {"classification": "new", "similarTo": [], "intentional": false}
  }]
}
```

Modalidades: `aprendizagem`, `para_valer`, `real`, `adaptada`, `revisao`. Separar arquivos se a modalidade mudar. `status`: `parcial` ou `concluido`. `subjectId` identifica a matéria no contexto; `unitId` identifica a unidade. `discipline` deve corresponder a um nome/alias de disciplina do catálogo. No formato 2, uma matéria sem pasta ou `Avancos.md` funciona pelos contextos em dados, sem criar artigo teórico nem editar índices. No legado, continua exigido `Avancos.md` existente. Sessões mistas podem ter várias disciplinas. `startedAt` é a data/hora de início com fuso, preservada nas correções para ordenar sessões do mesmo dia. `date` é a data local da resolução, em America/Sao_Paulo; separar dias diferentes em sessões distintas.

`format`: `CE` aceita C/E; `AE` aceita A/B/C/D/E e exige `options` com cinco textos em ordem. `userAnswer: null` significa branco explícito. `confidence`: `secure`, `insecure`, `guess`, `unknown`. Não deduzir segurança pelo acerto. `origin`: `inedita`, `real`, `adaptada`. Questões reais/adaptadas e treino para valer exigem `sourceEvidence` com identificação verificável de prova, item e gabarito/calibração. Para adaptações, declarar as mudanças. O validador verifica presença; a conferência factual é tarefa do assistente.

`errorType`: `conhecimento`, `confusao_conceitual`, `interpretacao`, `distracao` para erro válido; `null` nos demais. Anulação exige `annulled: true` e `annulmentReason`. Erros e acertos com dúvida/chute exigem destino de revisão. Preferir `theoryRefs` no formato `3 - Materias/Pasta/Nota#Subtítulo exato`, validado contra cabeçalhos existentes. No formato 2, quando faltar teoria específica, aceitar `sourceRefs: [{"sourceId": "mcasp", "locator": "Parte Geral: seção exata estudada"}]`, usando fonte do contexto e localizador verificável. Isso preserva o diagnóstico sem exigir criação de nota no fechamento da bateria; a lacuna editorial permanece pendente.

Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente`, `nova_nota`. A automação preserva destinos e causas no ledger; promoção à teoria e avaliação de recorrência continuam editoriais. Não transformar todo erro em erro recorrente.

Repetição: `new`, `thematic`, `mechanical`, `exact`. As três últimas exigem IDs válidos em `similarTo`; repetição mecânica/exata exige `intentional: true` e `transformation`. Consultar contexto e itens semelhantes antes de gerar. Se a bateria ultrapassar os limites de repetição do ledger, declarar `noveltyException` na sessão com justificativa factual da revisão intencional; a auditoria é calculada e a sessão permanece fora de benchmark. Simulados integrais não entram neste formato: seguem a propagação completa existente, sem estimativa de nota por microtreino.

## Processamento

`node scripts/study-sessions.js` valida todas as entradas antes de gravar e aplica as projeções em transação com precondições de hash. `--check` verifica se estão atualizadas. Rodar `node scripts/test-study-sessions.js` para os testes. O workflow de Pages executa esses passos, os validadores existentes, persiste apenas os destinos de `data/sessoes-saidas.json` e publica. Push por token do GitHub Actions não abre outro workflow: a mesma execução publica a consolidação. A gravação gerada usa push normal e falha se houver concorrência; não usar force/rebase automático.

`data/contexto-estudo/<concursoId>.json` traz totais separados, três sessões recentes, mecanismos e até 30 erros/dúvidas. Para detalhes completos, consultar a sessão ou ledger. Corte das janelas: último dia documentado; 30 dias inclusivos e semana segunda a domingo. Brancos/anulados separados; acurácia entre respostas válidas. Os totais cobrem itens individualizados, sem reconstruir registros históricos incompletos.

Salvar o checkpoint não equivale a consolidação confirmada. Em falha, preservar a sessão e reparar o workflow. Nenhum registro fictício é criado pela instalação.


## Progressão e recuperação no formato 2

`learning` registra o que aconteceu, não o plano inteiro: `stage` aceita `preparacao`, `aula`, `fronteiras`, `aprendizagem`, `para_valer`, `correcao`, `revisao`; `taughtConcepts`, `boundaries` e `pending` são listas de recortes curtos; `next` deve indicar unidade, etapa, objetivo, nota quando existir e fontes. Não copiar teoria para esses campos. `unitCompleted` é fechamento didático explícito. Se houver erro conceitual ou recuperação insegura, fechamento exige `advanceWithGaps` explicando a decisão e mantendo revisão. Bateria curta nunca certifica domínio ou nota integral.

Cada questão tem `conceptId` estável e pode usar `unitId` próprio numa revisão mista da mesma matéria. `retrievalOf` lista IDs de questões anteriores cujo conceito está sendo retestado; fontes devem pertencer à mesma matéria e concurso. Resposta correta com confiança `secure` registra recuperação: no mesmo dia é imediata; em outro dia, por mecanismo não exato/mecânico, fornece evidência de retenção desse conceito. Acerto inseguro, chute, anulação ou mera semelhança temática não resolvem automaticamente uma lacuna. Nova falha reabre a fila, preservando o histórico. Reincidência usa conceito explícito ou vínculo entre questões, sem inferir equivalência apenas pelo tema.

Dúvidas declaradas podem ser mantidas em `learning.doubts`: objetos `{id, text, status: "aberta"|"resolvida", evidenceQuestionNumbers: []}`. Resolução exige questão correta e segura da sessão. Para conteúdo explicado sem avaliação, usar `kind: "aula"`, `questions: []` e os demais metadados; o contexto registra exposição, mantendo resultados de aprendizagem vazios. Nunca criar uma questão só para salvar progresso.

A configuração inicial de disciplinas, unidades, fontes e pré-requisitos é `data/planos-estudo/cgu-2026.json`. O programa textual continua no edital; as notas continuam nos hubs canônicos. As evidências antigas não estruturadas foram auditadas com referência ao hub, sem recriar sessões. Novas exposições e resultados vêm da sessão; não atualizar esse catálogo a cada bateria. Outros concursos recebem inventário reutilizável por matéria, com a sequência do edital explicitamente ainda não auditada.

A mesma consolidação gera `data/contexto-estudo/<concurso>/<materia>.json`, índice de roteamento e páginas de revisão com até 20 itens. O contexto contém até 20 lacunas prioritárias e aponta para a fila completa. Revisões usam intervalos propostos de 1, 7 e 21 dias, ajustáveis; não equivalem a garantias de retenção. O chat compara datas com hoje e escolhe um recorte viável, sem paralisar o estudo novo indefinidamente. Correção/anulação recalcula projeções e remove páginas derivadas excedentes.

## Fechamento editorial obrigatório da unidade

Ao encerrar didaticamente a unidade (`unitCompleted: true`), o contexto passa a exigir conferência dos artigos antes da próxima unidade. Baterias intermediárias mantêm o checkpoint único. No fechamento, o assistente lê as sessões da unidade e incorpora nas notas canônicas o que acrescenta explicação, fontes, fronteiras e exemplos, preservando os contratos editoriais. Registrar na sessão final `learning.editorialConsolidation`:

```json
{
  "status": "consolidado",
  "noteRefs": ["3 - Materias/Pasta/Nota#Seção exata"],
  "coveredSessionIds": ["id-da-sessao-conferida"],
  "summary": "Conceitos e fronteiras incorporados e respectivas seções."
}
```

Usar `consolidado` quando houver alterações nos artigos no mesmo commit atômico. Se os artigos já contemplam integralmente as sessões, usar `revisado-sem-alteracao` e explicar concretamente em `summary` o que foi conferido. `coveredSessionIds` deve cobrir todos os IDs de `units[].editorial.requiredSessionIds`, sempre da mesma unidade, matéria e concurso, inclusive legado mapeado. Referências e seções precisam existir. A revisão editorial é responsabilidade do assistente; o validador verifica consistência, não qualidade semântica.

Se o fechamento for feito depois da bateria, criar sessão `kind: "fechamento"`, `questions: []`, `learning.stage: "consolidacao"`, com os demais campos do formato 2. Não repetir aula ou respostas para registrar a conferência. Pode manter `unitCompleted: false` nesse recibo quando a conclusão já estiver documentada na sessão anterior. `learning.next` preserva o destino pedagógico. A sessão editorial não cria acertos nem exposição nova.

Sem recibo completo, `pendingEditorial` aponta as sessões a conferir e `resume.stage` vira `consolidacao`; `resume.afterEditorial` preserva a proposta de continuação. Novas sessões da unidade tornam o recibo anterior insuficiente até nova conferência. Fechamentos históricos sem checkpoint explícito aparecem como `historico-a-conferir`, sem bloqueio retroativo. `lastCompletedUnit` continua significando conclusão didática; `lastEditoriallyClosedUnit` distingue fechamento editorial comprovado. Não editar manualmente os contextos gerados.
