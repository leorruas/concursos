# Redesign de Meus resultados: plano de execução

Data: 19/11/2026. Origem: solicitação de reduzir volume de informação, separar páginas, melhorar aparência e ligar retestes a Questões.

## Diagnóstico
A página `resultados.html` agrega visão adaptativa, indicadores globais, retenção, cobertura, prioridades, dificuldade, matérias, conceitos, próximos estudos, fila de revisão, questões respondidas, transferência e retestes. Atualmente a maior parte aparece em um fluxo longo ou dentro de um único `details`. O mecanismo de bateria direcionada já existe via `questoes.html#concurso=...&questoes=...`, com checagem de IDs e concurso, limitado a seis questões.

## Modelo de informação
- **Resumo** (`?visao=resumo`): próximos passos, números principais e sinais recentes. Limitar apresentação inicial e eliminar textos explicativos repetidos.
- **Revisões** (`?visao=revisoes`): artigos prioritários, conceitos, sequência e fila. Cada indicação elegível deve levar a uma bateria com IDs verificados.
- **Matérias** (`?visao=materias`): desempenho, cobertura, dificuldades e questões respondidas.
- **Histórico** (`?visao=historico`): transferência, retestes e evidências pormenorizadas, com metodologia sob demanda.

## Regras
Manter o filtro de concurso e matéria, IDs, cálculos e histórico; preservar os dados pessoais na API privada e no cofre `concurso-dados`. Não publicar tentativas nem métricas pessoais no GitHub público. Usar os tokens existentes em `style.css`, com pouca decoração e hierarquia forte. Links para Questões devem respeitar o concurso, itens elegíveis e limites do fluxo atual. Não simular bateria quando faltarem itens aptos. Reter acessibilidade, navegação por teclado, estados vazios, telas pequenas e URLs compartilháveis.

## Etapas e aceite
1. **Arquitetura e navegação:** divisão em quatro visões, com URLs estáveis, navegação e retorno pelo histórico; sem alterar agregações. [implementação inicial]
2. **Resumo visual:** cortar prosa desnecessária, reduzir seções e privilegiar decisão de estudo; conferir conteúdo em cada estado.
3. **Retestes direcionados:** mapear dificuldades a IDs de questões reais, gerar link para bateria filtrada e manter fallback de estudo quando não houver correspondência.
4. **Validação:** testes de navegação, filtros, URLs, login, resultados vazios, execução de baterias, mobile e acessibilidade; CI e publicação. Inspeção visual real é requisito para aprovação estética.

Evitar conflitos com a frente editorial PL15–PL38 no PR #383 e com mudanças concorrentes do Codex. Integrar apenas após revalidar a main.