---
title: "Simulados por chat: protocolo de baixo contexto"
type: planejamento
status: proposta-em-validacao
updated: 2026-11-17
---

# Simulados por chat: protocolo de baixo contexto

## Objetivo e limites

Diminuir o volume de leituras, repetições e resultados de ferramentas durante uma bateria, preservando qualidade das questões, confidencialidade e retomada. Não há medição de tokens por conversa nem comprovação de que o limite decorra exclusivamente de consultas ao GitHub. Comparar antes/depois em baterias equivalentes.

**Não substituir** as regras de privacidade, integridade, bancas, pontuação e pré-validação em `CHAT.md`, `AGENTS.md` e no cofre privado `leorruas/concurso-dados`. Em conflito, esses contratos prevalecem até sua alteração deliberada. Este documento não autoriza gravar dados individuais no repositório público.

## Estado atual verificado (17/11/2026)

- `CHAT.md` já prescreve preparar itens uma vez e proíbe leituras repetidas entre respostas quando os dados necessários foram conferidos.
- A preparação depende de concurso ativo, contexto do cofre privado, histórico e conferência dos metadados `subjectId`, `unitId`, `examPart`, `editalRef`, `conceptId` e `theoryRefs`.
- `data/questoes-camara.json` contém rotas de matérias/edital. **A existência do arquivo não demonstra que cada entrada seja um enunciado pronto para aplicar.** Confirmar a estrutura real antes de implementar um seletor automático.
- O cofre privado guarda `data/sessoes/<id>.json`; seus workflows recalculam projeções. O site grava tentativas em Cloudflare D1, e o painel unificado lê ambas as fontes sem duplicar tentativas.
- `CHAT.md` exige na correção enunciado integral, resposta, gabarito, comentário e placar. Reduzir essa apresentação demanda alteração explícita do contrato, ainda não autorizada por este plano.

## Ciclo pretendido

### 1. Preparar bateria em lote, uma vez

1. Resolver concurso e formato pelo contexto privado (nunca por hipótese). Separar Câmara/CGU/Dataprev.
2. Buscar histórico relevante, revisões vencidas e tentativas do site quando houver acesso autorizado. Se uma fonte faltar, declarar que seleção/diagnóstico são parciais.
3. Selecionar e conferir **apenas N itens** com origem comprovada, gabaritos, versão normativa e metadados; não afirmar que são reais sem fonte rastreável. Não repetir a mesma operação entre as respostas.
4. Gerar **manifesto mínimo**: `sessionId` estável; `concursoId`, `mode`, `count`; `questionId`, `sourceVersion` e identificadores curriculares; itens em ordem. Os gabaritos e as justificativas ficam disponíveis ao corretor, mas ocultos na pergunta apresentada.
5. Manter a pré-validação da Câmara e a conferência de novidade. Falha ou ambiguidade bloqueia o item afetado, não gera metadados fictícios.

### 2. Aplicar, sem consultas redundantes

- Apresentar uma questão por turno. Em bateria didática, aceitar C/E + insegurança; em simulado integral, preservar a opção em branco.
- Corrigir e avançar na mesma resposta de acordo com `CHAT.md`. O enunciado integral e o comentário seguem obrigatórios enquanto a regra não mudar.
- Consultar GitHub/fontes apenas por motivo novo: contestação de gabarito, alteração normativa, item faltante/inválido ou interrupção que exija retomada.
- Manter progresso local transitório: índice atual, respostas, confiança e placar. Não tratar o histórico do chat como persistência garantida.
- Se o limite de conversa estiver próximo, fornecer prompt de continuidade com **identificador da sessão e último item confirmado**, sem publicar respostas privadas no vault público.

### 3. Persistir e retomar

- No fechamento da bateria, gravar **uma única sessão** no cofre privado, `schemaVersion: 3`, conforme `data/sessoes/README.md`; validar antes do merge e verificar o workflow de consolidação.
- Distinguir `salvo`, `validado` e `consolidado`; não declarar sucesso antes de evidência.
- Sessão interrompida: futura persistência privada de checkpoint com status `in_progress`, `lastConfirmedIndex`, `sourceVersion`, `answerCount` e `updatedAt`. **Não enviar checkpoint parcial como sessão concluída** nem alterar os arquivos derivados. O formato e os controles de atualização idempotente exigem compatibilização com o cofre antes de implementar.
- Retomada entre chats: recuperar pacote privado por `sessionId`, verificar versão e respostas existentes e só apresentar próximo item não respondido. Nunca reconstruir respostas por inferência.

## Contrato proposto de pacote mínimo (ilustrativo; NÃO é schema homologado)

```json
{
  "schemaVersion": 1,
  "sessionId": "camara-2026-EXEMPLO",
  "concursoId": "camara-2026",
  "mode": "bateria_didatica",
  "questionCount": 10,
  "items": [
    {
      "questionId": "ID-CANONICO",
      "sourceVersion": "SHA-OU-VERSAO",
      "subjectId": "ID-MATERIA",
      "unitId": "ID-UNIDADE",
      "examPart": "P1",
      "editalRef": "REFERENCIA-VERIFICADA",
      "conceptId": "ID-CONCEITO",
      "theoryRefs": [],
      "stem": "ENUNCIADO-VERIFICADO",
      "answerKey": "C",
      "rationale": "EXPLICACAO-VERIFICADA"
    }
  ]
}
```

O exemplo descreve transporte e **não** substitui os modelos canônicos; a estrutura efetiva dos itens e a classificação de `theoryRefs` precisam ser obtidas da fonte atual. Pacotes com gabarito não devem ser publicados em interfaces acessíveis ao estudante antes da resposta. Pacotes combinados com histórico individual devem permanecer privados.

## Alternativas técnicas a verificar antes de programar

1. Reutilizar um seletor existente no site, caso já tenha filtros de `data/questoes-camara.json` ou outra fonte canônica real de itens.
2. Preferir endpoint autenticado que entregue somente a próxima questão e estado, mantendo gabarito no servidor. Um único lote enviado ao modelo reduz leituras, mas **aumenta o contexto inicial** e expõe os gabaritos ao modelo. Medir a diferença.
3. Não criar um segundo ledger. Integrar leitura unificada D1 + cofre e manter a propriedade de cada tentativa definida em `CHAT.md`.
4. Evitar commits por questão, reabertura de `AGENTS.md` e releitura de contextos longos entre respostas.

## Aceite mensurável

- Bateria de 10 itens: no máximo uma fase de consultas de preparação; zero consultas redundantes entre questões; uma gravação consolidada ao final (salvo exceções justificadas).
- Itens, gabaritos, modalidade, confiança e pontuação continuam corretos; nenhum histórico pessoal em `leorruas/concursos`.
- Correção, relatório final, links verificados e pré-validação continuam atendidos.
- Comparar volume de conteúdo de ferramentas e número de chamadas por 10 questões, antes/depois. **Não prometer aumento quantitativo do limite de chats sem medição real.**
- Retomada: interromper após uma resposta, abrir outro chat e recuperar a próxima questão sem perda, duplicação ou vazamento (somente após suporte a checkpoint privado).

## Etapas de implementação

- **Etapa A, análise e contrato:** este documento. Estado: preparado para revisão.
- **Etapa B, piloto de leitura leve:** mapear corpus real, seletores existentes e fazer bateria comparável sem releituras redundantes.
- **Etapa C, persistência parcial:** desenvolver checkpoint idempotente no cofre privado, com validação e teste de retomada.
- **Etapa D, interface de seleção e correção:** avaliar endpoint/CLI e possível redução das explicações para acertos seguros, mediante revisão explícita de `CHAT.md` e `AGENTS.md`.


## Auditoria adicional: infraestrutura já disponível

O código `web/15-questoes-ui.js` confirma que o site **já seleciona questões reais do banco público revisado** em `data/questoes-publicas.json`, com `data.questions` (`id`, `concursoId`, `subjectId`, `unitId`, `estimatedDifficulty`, `statement`, `correctAnswer`, `explanation`). O site tem `choose(n)`, que busca preferencialmente itens ainda não respondidos neste navegador, distribui matérias e usa filtro de dificuldade. É a fonte mais adequada para um primeiro piloto de seleção no chat, desde que se confirme cobertura, atualização e compatibilidade de metadados com o cofre.

O site também cria `session.id` por UUID, preserva `ids`, `answers` e `finishedAt` no `localStorage`, retoma sessão ativa pelo identificador local e envia cada tentativa individual a `POST /v1/study/quiz` no ambiente autenticado. Portanto, **já existe checkpoint no navegador**, mas isso não prova retomada entre dispositivos ou entre conversas do ChatGPT. Em GitHub Pages, sem origem autenticada, o código informa que só grava no navegador. A consolidação do chat no cofre privado continua sendo outro caminho.

**Decisão técnica ajustada:** construir primeiro um adaptador de leitura entre o banco público revisado e as sessões do chat, sem alterar o armazenamento das respostas. Antes de escrever esse adaptador, verificar a forma publicada de `data/questoes-publicas.json` e seu processo de geração. Em particular, o site contém gabaritos públicos para correção local; um endpoint autenticado que esconda o gabarito pode melhorar o controle de apresentação, mas é uma evolução e não uma propriedade atual.

**Teste de integração proposto:** selecionar dez `questionId` do banco revisado, garantir `subjectId`, `unitId`, `examPart` e `editalRef` verificáveis, aplicar dez no chat sem reler o banco, salvar uma sessão de dez respostas apenas no cofre privado e checar o painel unificado. Evitar enviar as mesmas tentativas também pelo endpoint do site, a menos que compartilhem ID de origem rastreável e haja garantia de deduplicação.


## Piloto implementado no PR #372

`scripts/prepare-chat-battery.js` reaproveita `selectCamaraQuestions`, trabalhando **somente com `expansao` validada** (`reviewStatus: validada` e `reviewEvidence` presente). Rejeita quantidade insuficiente, campos curriculares ausentes, gabarito inválido, ID duplicado ou concurso/cargo incompatível. **Não inclui** automaticamente `pilotoDidatico`, questões reais de cadernos externos, CGU ou Dataprev. O arquivo não lê o cofre privado.

Uso em ambiente que tenha checkout do repositório e Node.js:

```bash
node scripts/prepare-chat-battery.js --subject direito-constitucional --count 10
node scripts/prepare-chat-battery.js --unit processo-legislativo --count 10 --exclude /caminho/privado/ids-respondidos.json
node scripts/test-prepare-chat-battery.js
```

`--exclude` recebe um arquivo JSON com **somente a lista de IDs de questões anteriores**. Gerar esse arquivo do histórico privado em ambiente autorizado; nunca versioná-lo no público. A saída vai a stdout e inclui gabaritos para o corretor. Evitar expor o pacote em URLs públicas e jamais tratá-lo como uma nova sessão concluída. `--source-version` aceita SHA fornecido pelo processo de chamada para rastreabilidade.

**Limites deste piloto:** a execução do CLI depende de um ambiente com Node e acesso aos arquivos (não é uma função remota da conexão GitHub dentro do chat). Não há recuperação automática de pacote por ID nem checkpoint de chat entre conversas. Também não há integração com D1/cofre ou medição de tokens reais. O teste CI cobre seleção, filtros, integridade e tamanho de saída, mas **não** mede persistência privada, retomada, UI ou economia de contexto no produto.

A próxima implementação deve ser um ponto de acesso autorizado que faça a seleção e devolva ao assistente somente N itens, mais um ponto de checkpoint privado idempotente. Até lá, este script é uma prova de integração local, sem alterar a operação padrão do chat.


## Incremento: retomada validada em memória (17/11/2026)

O módulo `scripts/resume-chat-battery.js` oferece duas funções puras: `newPreparedCheckpoint(packet, sessionId)` e `resumePreparedBattery(packet, checkpoint)`. Aceita somente a **sequência originalmente preparada**, o concurso e a versão de fonte registrados, respostas sequenciais únicas e níveis de confiança previstos. Ao retomar, devolve somente `nextQuestion` sem gabarito, além de índice e totais. Baterias didáticas não aceitam branco; simulados podem registrar branco com confiança `unknown`.

O formato de checkpoint dessa biblioteca é **transitório e não homologado como arquivo do cofre**. Embora o cofre já aceite sessões v3 com `status: parcial`, essas sessões têm campos pedagógicos e validação próprios. Nunca gravar diretamente o objeto transitório em `data/sessoes/*.json`. Antes de persistir, um adaptador privado deverá converter respostas reais ao schema v3 e passar pelo workflow de pré-validação privada. Não duplicar tentativa de site no cofre. Não adicionar dados de estudo pessoais ao projeto público.

Teste: `node scripts/test-resume-chat-battery.js`; executado no CI público. Casos: retomada com zero/uma/todas as respostas; item duplicado, ordem divergente, mudança de versão, banca/concurso diferente, branco incompatível e separação do gabarito. Os testes são sintéticos e não verificam autenticação nem escrita no cofre.

**Dependência ainda aberta:** acesso autenticado ao pacote privado com ID estável e um mecanismo de gravação parcial idempotente entre chats, respeitando `leorruas/concurso-dados/AGENTS.md` e `data/sessoes/README.md`. Sem ele, a função permite calcular uma retomada a partir de dados recebidos, mas não oferece sozinha a recuperação automática entre conversas.


## Recuperação sem carregar o banco inteiro (etapa adicional)

A rota de pequenos lotes do Worker público já está disponível em produção, conforme smoke real executado via GitHub Actions em 17/11/2026. O módulo `scripts/recover-public-chat-question.js` aceita o **checkpoint privado já recuperado** e a resposta de **uma única questão pública** retornada por `GET /v1/public/quiz/batch?question=<ID>`. Verifica a lista de respostas em ordem, ausência de duplicatas, fonte, versão SHA-256 e ID esperado. Retorna apenas o item seguinte com enunciado, gabarito e explicação para o corretor, sem transportar os registros de respostas para a saída. A apresentação ao estudante continua limitada ao enunciado até a resposta.

Fluxo de retomada assistida:
1. Ler `leorruas/concurso-dados:data/chat-checkpoints/<id>.json` pelo conector GitHub autenticado; validar o contrato privado.
2. Chamar `nextPublicQuestionId(checkpoint)` para descobrir somente o ID seguinte. Se a sessão já estiver completa, encerrar.
3. Solicitar `GET https://concurso-estudo.leoruas.workers.dev/v1/public/quiz/batch?question=<ID>`. Esse endpoint não recebe o ID da sessão nem respostas pessoais.
4. Aplicar `recoverPublicChatQuestion(checkpoint,response)`, comparar a versão e apresentar o enunciado. Se o banco público mudou, bloquear a retomada ou recuperar fonte histórica exata em ambiente autorizado.
5. Ao fechar um bloco, gravar checkpoint privado por `create_file/update_file` com proteção SHA e o contrato de transição, sem duplicar respostas do site. Concluir sessão pedagógica v3 separadamente pelos gates.

Este módulo é **puro**: não executa a conexão GitHub nem requisições HTTP. O modelo ou executor autorizado precisa realizar essas leituras. Sem uma integração do conector ao fluxo, a recuperação entre chats ainda é assistida, não automática. Testar com sessão real consentida e medir chamadas e volume de texto antes de afirmar economia de contexto.
