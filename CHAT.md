# Estudo pelo chat

**Banca da preparação:** CGU 2026, especialidade Auditoria: **Cebraspe, itens Certo/Errado (C/E)** em todas as matérias, incluindo Contabilidade e Avaliação de Políticas Públicas. Ler `activeExam` no contexto antes de escolher o formato. As instruções da Dataprev/FGV e a regra de cinco alternativas pertencem à Dataprev. A prova histórica CGU 2022/FGV é apoio de conteúdo; o treino da CGU 2026 segue Cebraspe. Na primeira resposta de cada retomada, indicar brevemente “CGU 2026: Cebraspe, C/E”.

Protocolo cotidiano único. Para aulas, revisões e baterias, esta entrada substitui a releitura integral de governança e histórico. Manutenção, notas novas e simulados integrais seguem `AGENTS.md` e os contratos.

## Encontrar o ponto de retomada

Concurso explícito prevalece. Entre 12/10 e 13/12/2026, o padrão é Controladoria-Geral da União (CGU), Auditoria. As datas e aliases estão em `data/contexto-estudo/indice.json`; consultar o índice só para alias desconhecido, ambiguidade ou troca de concurso.

Com matéria explícita, ler diretamente `data/contexto-estudo/<concurso>/<materia-em-slug>.json`: por exemplo, `cgu-2026/contabilidade-publica.json`, `cgu-2026/auditoria-governamental.json` ou `cgu-2026/direito-administrativo.json`. O assistente resolve nomes e caminhos; o estudante não informa IDs. Para “continuar a CGU de onde parei”, ler `data/contexto-estudo/cgu-2026.json` e seguir `resume.path`.

Depois, ler a nota/seção de `resume.noteRef` e a fonte com o recorte indicado em `resume.sourceIds`. Fluxo habitual: protocolo → contexto da matéria → nota → fonte. Se faltar nota, usar a fonte primária e preservar a lacuna editorial. Pedido de revisão usa `gaps`, `openDoubts` e `pendingReviews`; filas extensas têm páginas em `reviewIndex.pages`. Comparar vencimentos com a data atual, pois `cut` é o último dia documentado.

Os contextos são gerados: se a última gravação ainda estiver em processamento ou o workflow tiver falhado, conferir o arquivo de sessão do commit mais recente antes de afirmar o ponto de retomada. Aproveitar o contexto anterior e o checkpoint bruto, sem reler todo o ledger. Dizer “registro salvo, consolidação pendente” quando necessário.

## Ensinar, avaliar e registrar

Seguir preparação → aula pelo caso/mecanismo/decisão/limites → fronteiras → aprendizagem → treino calibrado → correção → checkpoint → revisão espaçada. Não cobrar regra ainda não ensinada. Explicar siglas na primeira ocorrência; sem ícones. Usar controles clicáveis se disponíveis, com envio explícito; aceitar respostas compactas. Corrigir no chat, diagnosticando conhecimento, confusão conceitual, interpretação ou distração.

Separar notas disponíveis, conteúdo explicado, aprendizagem didática, desempenho competitivo e retenção. “Para valer” exige comparação real com corpus identificado do concurso/banca/formato; rótulo ou gabarito isolado não provam calibração. Dúvida e chute são declarados, nunca inferidos pelo acerto. Recuperação no mesmo dia permite continuar com revisão pendente; retenção exige recuperação posterior, segura e por mecanismo diferente. Pré-requisitos e lacunas orientam o próximo passo, sem bloqueio indefinido por um erro.

Ao encerrar cada bateria, salvar **um único arquivo** `data/sessoes/<id-estavel>.json`, com `schemaVersion: 2`, conforme `data/sessoes/README.md`: respostas completas, confiança, conceitos, fontes, destinos e `learning` com exposição, fronteiras, pendências e próximo passo. Retestes usam `retrievalOf` para ligar a evidência ao item anterior. Aula interrompida sem questões pode ser salva como `kind: aula`, com lista vazia, sem inventar desempenho. Preservar ID/data de início ao corrigir; anular com motivo em vez de remover respostas.

Usar versão atual e SHA como precondição. A automação valida e gera contextos, filas e métricas; não editar derivados, hubs, índices ou relatórios a cada bateria. Nuances ainda sem nota canônica ficam como pendência editorial, com fonte/localizador na sessão, até consolidação teórica própria. A aula seguinte pode continuar enquanto o GitHub processa. Só afirmar publicação confirmada após sucesso do workflow; reparar falhas antes de outra gravação não relacionada. Trabalho cotidiano não exige Work nem execução local de scripts.
