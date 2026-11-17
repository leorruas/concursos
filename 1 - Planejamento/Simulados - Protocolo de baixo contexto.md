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
