# Estudo pelo chat

**Banca da preparação:** CGU 2026, especialidade Auditoria: **Cebraspe, itens Certo/Errado (C/E)** em todas as matérias, incluindo Contabilidade e Avaliação de Políticas Públicas. Ler `activeExam` no contexto antes de escolher o formato. As instruções da Dataprev/FGV e a regra de cinco alternativas pertencem à Dataprev. A prova histórica CGU 2022/FGV é apoio de conteúdo; o treino da CGU 2026 segue Cebraspe. Na primeira resposta de cada retomada, indicar brevemente “CGU 2026: Cebraspe, C/E”.

Protocolo cotidiano único. Para aulas, revisões e baterias, esta entrada substitui a releitura integral de governança e histórico. Manutenção, notas novas e simulados integrais seguem `AGENTS.md` e os contratos.

## Encontrar o ponto de retomada

Concurso explícito prevalece. Entre 12/10 e 13/12/2026, o padrão é Controladoria-Geral da União (CGU), Auditoria. As datas e aliases estão em `data/contexto-estudo/indice.json`; consultar o índice só para alias desconhecido, ambiguidade ou troca de concurso.

Com matéria explícita, ler diretamente `data/contexto-estudo/<concurso>/<materia-em-slug>.json`: por exemplo, `cgu-2026/contabilidade-publica.json`, `cgu-2026/auditoria-governamental.json` ou `cgu-2026/direito-administrativo.json`. O assistente resolve nomes e caminhos; o estudante não informa IDs. Para “continuar a CGU de onde parei”, ler `data/contexto-estudo/cgu-2026.json` e seguir `resume.path`.

Depois, ler a nota/seção de `resume.noteRef` e a fonte com o recorte indicado em `resume.sourceIds`. Fluxo habitual: protocolo → contexto da matéria → nota → fonte. Se faltar nota, usar a fonte primária e preservar a lacuna editorial. Pedido de revisão usa `gaps`, `openDoubts` e `pendingReviews`; filas extensas têm páginas em `reviewIndex.pages`. Comparar vencimentos com a data atual, pois `cut` é o último dia documentado.

Os contextos são gerados: se a última gravação ainda estiver em processamento ou o workflow tiver falhado, conferir o arquivo de sessão do commit mais recente antes de afirmar o ponto de retomada. Aproveitar o contexto anterior e o checkpoint bruto, sem reler todo o ledger. Dizer “registro salvo, consolidação pendente” quando necessário.

## Ensinar, avaliar e registrar

**Marcação opcional de insegurança:** ao lado de cada item, usar a caixa **“Respondi com insegurança”**. Marcada: `confidence: insecure`. Desmarcada: `confidence: unknown`; nunca presumir `secure`. Segurança declarada pelo estudante deve ser recolhida separadamente quando necessária à revisão espaçada. Respostas já registradas como `unknown` continuam assim, sem reinterpretar retroativamente.

Seguir preparação → aula pelo caso/mecanismo/decisão/limites → fronteiras → aprendizagem → treino calibrado → correção → checkpoint → revisão espaçada. Não cobrar regra ainda não ensinada. Explicar siglas na primeira ocorrência; sem ícones. Usar controles clicáveis se disponíveis, com envio explícito; aceitar respostas compactas. Corrigir no chat, diagnosticando conhecimento, confusão conceitual, interpretação ou distração.

Separar notas disponíveis, conteúdo explicado, aprendizagem didática, desempenho competitivo e retenção. “Para valer” exige comparação real com corpus identificado do concurso/banca/formato; rótulo ou gabarito isolado não provam calibração. Dúvida e chute são declarados, nunca inferidos pelo acerto. Recuperação no mesmo dia permite continuar com revisão pendente; retenção exige recuperação posterior, segura e por mecanismo diferente. Pré-requisitos e lacunas orientam o próximo passo, sem bloqueio indefinido por um erro.

Ao encerrar cada bateria, salvar **um único arquivo** `data/sessoes/<id-estavel>.json`, com `schemaVersion: 2`, conforme `data/sessoes/README.md`: respostas completas, confiança, conceitos, fontes, destinos e `learning` com exposição, fronteiras, pendências e próximo passo. Retestes usam `retrievalOf` para ligar a evidência ao item anterior. Aula interrompida sem questões pode ser salva como `kind: aula`, com lista vazia, sem inventar desempenho. Preservar ID/data de início ao corrigir; anular com motivo em vez de remover respostas.

Usar versão atual e SHA como precondição. A automação valida e gera contextos, filas e métricas; não editar derivados, hubs, índices ou relatórios a cada bateria. Nuances ainda sem nota canônica ficam na sessão, com fonte/localizador, até o fechamento obrigatório da unidade. A aula seguinte pode continuar enquanto o GitHub processa. Só afirmar publicação confirmada após sucesso do workflow; reparar falhas antes de outra gravação não relacionada. Trabalho cotidiano não exige Work nem execução local de scripts.

## Fechar a unidade e seus artigos

Ao concluir uma unidade, conferir suas sessões e consolidar nas notas canônicas o conteúdo ensinado, fronteiras, exemplos úteis, dúvidas e correções, antes de iniciar a próxima unidade dessa matéria. Ler o padrão editorial e os contratos pertinentes nessa etapa. Refinar notas existentes; criar nota apenas quando houver autonomia temática. Fazer tudo diretamente pelo GitHub, sem exigir Work nem autorização recorrente.

Registrar `learning.editorialConsolidation` conforme `data/sessoes/README.md`. No fechamento, um único commit atômico reúne a sessão final e os artigos alterados; nota nova exige hub e índice no mesmo commit. Se as notas já cobrem integralmente o conteúdo, registrar revisão justificada sem alteração. As baterias intermediárias continuam gravando somente a sessão.

`unitCompleted` indica conclusão didática; `pendingEditorial` e `resume.stage: consolidacao` impedem declarar fechamento completo enquanto faltar a conferência dos artigos. Se houver impedimento técnico, salvar o checkpoint e informar a pendência. A próxima retomada resolve essa etapa antes de avançar na mesma matéria. Trocar de matéria e manter revisões espaçadas continua possível. O gerador detecta e encaminha a pendência; o assistente escreve e confere a teoria.
