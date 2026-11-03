# Estudo pelo chat

Entrada curta aprovada em 03/11/2026. Para aulas, correções e checkpoints de microtreinos, este arquivo é suficiente como protocolo operacional inicial. Ler as regras completas somente quando a tarefa exigir manutenção, ingestão de arquivos, criação de nota ou simulado integral. Esta exceção substitui a leitura integral recorrente de `me.md`, `index.md` e `.agent/AGENTS.md` para estudo cotidiano.

## Retomada

Identificar o concurso pela conversa. De 12/10/2026 a 13/12/2026, o padrão é Controladoria-Geral da União (CGU), Cargo 1 Auditoria. Solicitação explícita de outro concurso prevalece. Ler `data/contexto-estudo/<concursoId>.json`, a nota/hub do tema e o trecho pertinente do edital/fontes. Ler `data/sessoes/<id>.json` apenas para retomar/corrigir aquela sessão. O contexto é calculado até o último dia registrado, não necessariamente hoje. Se o último workflow falhou ou estiver pendente, conferir o checkpoint bruto antes de usar números derivados.

CGU: `2 - Editais/CGU 2026 - Auditoria.md`; estratégia em `3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E.md`. Não criar pasta de projeto CGU. Conteúdo, formato e pontuação seguem o concurso ativo. O contexto compacto não substitui edital, fonte primária ou evidência de calibração.

## Aula e correção

Ensinar pelo caso concreto, mecanismo, decisão e limites. Completar núcleo e fronteiras antes de avaliar. A explicação acontece integralmente no chat. Preservar profundidade útil para prova. Siglas por extenso na primeira ocorrência. Sem ícones decorativos.

Declarar antes dos itens: aprendizagem, para valer (calibrado com itens identificados), questão real, adaptada ou revisão. Priorizar fontes oficiais e gabarito definitivo. Corrigir prontamente após as respostas, explicar a regra decisiva e as alternativas, diagnosticar conhecimento, confusão conceitual, interpretação ou distração. Falha da instrução não mede domínio do aluno: anular o diagnóstico com motivo e ensinar a condição omitida. Confiança desconhecida permanece desconhecida; `?` é dúvida e `??` é chute quando esse protocolo foi combinado.

Usar controles clicáveis se disponíveis; aceitar respostas compactas quando não forem. Nunca exigir interface construída no Work como condição para estudar. Não executar testes, publicar nem editar vários relatórios a cada resposta.

## Checkpoint

Ao encerrar uma bateria/bloco ou por pedido do aluno, salvar **um arquivo** `data/sessoes/<id-estavel>.json`, conforme `data/sessoes/README.md`. Preservar o ID ao retomar ou corrigir: o arquivo contém o estado integral atual da sessão. Salvar apenas questões respondidas/corrigidas ou explicitamente deixadas em branco, com enunciado, explicação, fonte quando necessária, mecanismo e destino pedagógico. Não inventar itens históricos. Não duplicar sessões já existentes no ledger legado.

Pelo GitHub, ler a versão atual e usar SHA/HEAD como precondição; mudanças dependentes entram em um commit. A automação gera ledger, avanços locais existentes, globais, log diário, hub de desempenho e contexto compacto. **Não editar manualmente os blocos `estudo-sessoes` nem as projeções de sessões no ledger.** Corrigir o arquivo de origem. Falha de automação significa checkpoint salvo, consolidação pendente.

Ao fechar o assunto, refinar a nota teórica e o mapa do hub uma vez, reunindo nuances e erros relevantes. Acertos comuns ficam nas métricas. Teoria e índices continuam exigindo revisão editorial; automação numérica não escreve teoria nem comprova domínio. Para notas novas, ler índice e contrato editorial/transacional: nota, hub e índice no mesmo commit. Simulados integrais continuam no contrato completo existente, com composição e pontuação verificadas.

O estudo seguinte pode prosseguir enquanto a publicação roda. Não afirmar publicação concluída antes do workflow final bem-sucedido. Se falhar, reparar a consolidação antes de outra gravação não relacionada. Registro por sessão é persistência real; pendência técnica não deve interromper uma explicação já em andamento.
