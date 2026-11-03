# Registro de microtreinos

Cada arquivo `<id>.json` é uma sessão real, pequena e independente. Não guardar exemplos fictícios nesta pasta com extensão JSON. Não importar o legado novamente. O histórico anterior permanece no ledger. Usar o mesmo identificador e substituir o estado completo nas retomadas/correções. Não apagar arquivos: anular item inválido com motivo. Questões apenas apresentadas ficam fora até resposta ou branco explícito.

O assistente prepara este registro; o estudante só precisa responder às questões. Exemplo de formato (substituir todos os dados pelo ocorrido):

```json
{
  "schemaVersion": 1,
  "id": "cgu-2026-2026-11-03-auditoria-b01",
  "date": "2026-11-03",
  "concursoId": "cgu-2026",
  "banca": "Cebraspe",
  "kind": "microtreino",
  "trainingMode": "aprendizagem",
  "status": "parcial",
  "diagnosis": "Entendimento observado, com limites da amostra.",
  "nextStep": "Próximo recorte e pendências.",
  "questions": [{
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

Modalidades: `aprendizagem`, `para_valer`, `real`, `adaptada`, `revisao`. Separar arquivos se a modalidade mudar. `status`: `parcial` ou `concluido`. `discipline` é o nome exato da pasta da matéria e exige `Avancos.md` já criado/indexado. Sessões mistas podem ter várias disciplinas. `date` é a data local da resolução, em America/Sao_Paulo; separar dias diferentes em sessões distintas.

`format`: `CE` aceita C/E; `AE` aceita A/B/C/D/E e exige `options` com cinco textos em ordem. `userAnswer: null` significa branco explícito. `confidence`: `secure`, `insecure`, `guess`, `unknown`. Não deduzir segurança pelo acerto. `origin`: `inedita`, `real`, `adaptada`. Questões reais/adaptadas e treino para valer exigem `sourceEvidence` com identificação verificável de prova, item e gabarito/calibração. Para adaptações, declarar as mudanças. O validador verifica presença; a conferência factual é tarefa do assistente.

`errorType`: `conhecimento`, `confusao_conceitual`, `interpretacao`, `distracao` para erro válido; `null` nos demais. Anulação exige `annulled: true` e `annulmentReason`. Erros e acertos com dúvida/chute exigem `theoryRefs` no formato `3 - Materias/Pasta/Nota#Subtítulo exato`, validado contra cabeçalhos existentes.

Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente`, `nova_nota`. A automação preserva destinos e causas no ledger; promoção à teoria e avaliação de recorrência continuam editoriais. Não transformar todo erro em erro recorrente.

Repetição: `new`, `thematic`, `mechanical`, `exact`. As três últimas exigem IDs válidos em `similarTo`; repetição mecânica/exata exige `intentional: true` e `transformation`. Consultar contexto e itens semelhantes antes de gerar. Se a bateria ultrapassar os limites de repetição do ledger, declarar `noveltyException` na sessão com justificativa factual da revisão intencional; a auditoria é calculada e a sessão permanece fora de benchmark. Simulados integrais não entram neste formato: seguem a propagação completa existente, sem estimativa de nota por microtreino.

## Processamento

`node scripts/study-sessions.js` valida todas as entradas antes de gravar e aplica as projeções em transação com precondições de hash. `--check` verifica se estão atualizadas. Rodar `node scripts/test-study-sessions.js` para os testes. O workflow de Pages executa esses passos, os validadores existentes, persiste apenas os destinos de `data/sessoes-saidas.json` e publica. Push por token do GitHub Actions não abre outro workflow: a mesma execução publica a consolidação. A gravação gerada usa push normal e falha se houver concorrência; não usar force/rebase automático.

`data/contexto-estudo/<concursoId>.json` traz totais separados, três sessões recentes, mecanismos e até 30 erros/dúvidas. Para detalhes completos, consultar a sessão ou ledger. Corte das janelas: último dia documentado; 30 dias inclusivos e semana segunda a domingo. Brancos/anulados separados; acurácia entre respostas válidas. Os totais cobrem itens individualizados, sem reconstruir registros históricos incompletos.

Salvar o checkpoint não equivale a consolidação confirmada. Em falha, preservar a sessão e reparar o workflow. Nenhum registro fictício é criado pela instalação.
