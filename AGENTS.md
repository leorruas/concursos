# Instruções para agentes do vault de concursos

## Regras gerais

- `leorruas/concursos` é público. Teoria, artigos e bancos genéricos ficam aqui. Sessões, respostas, lacunas, prioridades individuais, resultados, progresso e arquivos `Avancos.md` ficam exclusivamente no cofre privado `leorruas/concurso-dados`. Nunca copie dados pessoais para código, logs, exemplos, commits ou artefatos públicos. Se não houver acesso ao cofre, preserve essa separação.
- Confira o concurso, a matéria e o edital antes de editar. Na retomada da CGU 2026 Auditoria, indique que o formato é Cebraspe, Certo/Errado. Para estudo cotidiano, siga `CHAT.md`. Para registros individuais, leia também o `AGENTS.md` do cofre.
- Preserve IDs, referências, fontes, vínculos com edital e alterações de outras pessoas. Entregue arquivos interdependentes no mesmo commit. Em glossário, verbete e backlog do concurso precisam ter o mesmo ID e termo.
- Em caso de main vermelho, diagnostique e corrija a falha antes de iniciar trabalho não relacionado. Use o log da primeira etapa que falhou e confira o SHA.

- A ingestão usa `scripts/ingest-safe.js` conforme o guia de questões. O ledger canônico fica no cofre privado em `data/questoes-ledger.json`.
- Siga o [[1 - Planejamento/Contrato de publicacao GitHub Pages]] e o [[1 - Planejamento/Contrato transacional de mudancas]] quando aplicáveis.

## Leia o guia da tarefa antes de editar

| Se for mexer em | Leia |
| --- | --- |
| Artigos, siglas, capítulos, EPUB, editais ou indexação | [Edição de conteúdo](1%20-%20Planejamento/Contratos%20por%20tarefa%20-%20Edicao%20de%20conteudo.md) |
| Glossário, flashcards ou linguagem simples das notas | [Glossário e flashcards](1%20-%20Planejamento/Guia%20editorial%20-%20Glossario%2C%20flashcards%20e%20linguagem%20simples.md) |
| Questões, bancos, retestes, baterias e simulados | [Questões e simulados](1%20-%20Planejamento/Contratos%20por%20tarefa%20-%20Questoes%20e%20simulados.md) |
| Histórico individual, sessões, revisões ou migrações de dados | [Estudo e cofre privado](1%20-%20Planejamento/Contratos%20por%20tarefa%20-%20Estudo%20e%20cofre%20privado.md) |
| Interface, busca, blueprints ou diagramas | [Interface e diagramas](1%20-%20Planejamento/Contratos%20por%20tarefa%20-%20Interface%20e%20diagramas.md). Para Mermaid, leia também o [guia específico](1%20-%20Planejamento/Guia%20operacional%20-%20Mermaid.md). |
| Validação, diagnóstico de CI ou publicação | [Validação e publicação](1%20-%20Planejamento/Contratos%20por%20tarefa%20-%20Validacao%20e%20publicacao.md) |

## Integração pública sem PR

1. Atualize a base a partir de `origin/main`. Execute `node scripts/preflight-vault.js` sobre o lote completo, faça um commit atômico e publique esse commit em `codex/preflight/<nome>`.
2. Aguarde o check **Preflight público** para o SHA exato. Se a `main` avançar, reaplique a mudança sobre a versão atual e valide o novo SHA. Após o check bem-sucedido, envie o mesmo SHA à `main` por fast-forward. Nunca force o envio.
3. Confira o workflow final e o conteúdo servido para declarar mudanças públicas publicadas. Para arquivos operacionais excluídos do site, confira o commit na `main`.
4. Se o check ou o envio falhar, corrija a causa. O agente conduz o processo sem abrir PR no fluxo rotineiro. A política do cofre privado continua em vigor.

Este arquivo prevalece nas regras de privacidade e integração. Os guias preservam os contratos específicos por tarefa.
