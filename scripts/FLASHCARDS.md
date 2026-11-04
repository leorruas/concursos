# Flashcards de vocabulário

Criado em 2026-11-04. Coleção atual: 228 cartões únicos, sendo 200 vinculados à CGU 2026 e 28 à Dataprev 2026. Na CGU, há 73 cartões de Orçamento Público, 15 de Avaliação de Políticas Públicas, 14 de Contabilidade Pública e coleções parciais nas demais matérias. A Dataprev inclui Português, Lógica, Informática/Legislação, Atualidades e Comunicação. Os vínculos cruzados reutilizam conceitos sem duplicar cartões. Vínculos múltiplos reutilizam conceitos em Governança e Integridade sem duplicar cartões. Não representa cobertura completa do edital.

Lote didático de 04/11/2026: 14 novos cartões de classificações, natureza da despesa, PLOA e emendas, além de 7 cartões existentes refinados com contraste. Exemplos de vacinação e universidade foram incorporados aos artigos canônicos; o lote só será considerado publicado após as verificações do workflow e do site.

## Arquitetura

- `data/flashcards.json`: conteúdo público revisado, sem respostas pessoais. `id` é identidade estável do conceito; `revision` permite evolução sem perder identidade. Uma mudança material no objeto testado exige novo ID.
- `examIds`, `subjectIds`, `editalRefs`: pertencimento explícito, validado contra o catálogo de matérias. Não inferir pelo caminho da nota. Para novo concurso, cadastrar metadados em `exams`, associar cartões pertinentes e validar o catálogo existente. CGU usa P1/P2/P3; para Dataprev usam-se `DP-GER` e `DP-ESP` como rótulos internos de conhecimento geral/específico, sem apresentá-los como nomes de prova do edital.
- `note.articleId` e `note.section`: referência ao ID estável e cabeçalho exato. O caminho não participa da seleção dos cartões. Os links usam a rota pública de artigo por ID, preservando o contexto do concurso.
- `source.url` e `source.locator`: fonte normativa/bibliográfica e localizador. `reviewedAt` documenta revisão editorial; `status: validated` é obrigatório para publicação. Exemplos são hipotéticos.
- `web/09-flashcards-engine.js`: funções puras para seleção, estados, agendamento e validação de backups.
- `web/10-flashcards-ui.js` e `flashcards.html`: interface independente com links para a wiki; reutiliza CSS, temas e tipografia. A home e a navegação superior dão acesso direto.
- Build e auditoria usam allowlist pública explícita. Não copiar diretórios de progresso nem arquivos pessoais.

## Política de revisão

Cada conceito tem históricos separados por direção (`forward`, `reverse`, `contrast`). Primeiro “Sei” agenda 1 dia; lembranças espaçadas seguintes agendam 3, 7, 14 e 30 dias. A sequência só aumenta com intervalo mínimo de 20 horas desde a tentativa anterior naquela direção. “Quase lembrei” reinicia a sequência e agenda 1 dia; “Não sei” reinicia e agenda 10 minutos.

“Conhecidos” exige sequência >=3 em **ambas** as direções direta e inversa. “Em aprendizagem” é todo conceito visto em uma dessas direções sem atingir esse critério. “Ainda não sei” é um subconjunto com última classificação “Não sei” em ao menos uma direção. “Precisam de revisão” conta uma vez cada conceito com alguma direção vencida (incluindo contraste); sobrepõe-se aos demais estados. Um treino só de contraste não estabelece conhecimento direto/inverso.

Sessões contínuas usam uma janela de até dez cartões em memória, mas permitem avançar sem limite fixo de apresentações. Ao terminar uma janela, novas recuperações elegíveis são selecionadas, sem reapresentar conceitos já vistos na sessão, exceto a retentativa deliberada de um “Não sei” após três outros conceitos distintos. Essa retentativa ocorre uma vez por direção na sessão e não altera a exigência de revisão espaçada para consolidar o conhecimento. No modo misto, revisões vencidas e prioridades importadas competem com novos conceitos. A fila se encerra quando não há mais cartões elegíveis para o recorte, em vez de repetir indefinidamente os mesmos erros.

Isso é uma heurística transparente de recuperação autodeclarada, não algoritmo clínico validado nem previsão de desempenho Cebraspe. Não escreve no ledger de questões, no desempenho de simulados ou nos contextos do chat.

## Persistência e privacidade

Chave local preservada: `concursos-flashcards-v1`; formato atual `{version:2,reviews,session,priorities,lastSession}`. Backups no formato 1 são migrados na leitura, preservando revisões e fila ainda não avaliada. Uma rodada antiga concluída não reabre. Cada avaliação e reposição da janela são salvas juntas; recarregar permite retomar uma interrupção acidental, com a resposta oculta. A resposta volta oculta ao retomar. Não há chamada de rede para transmitir respostas; somente leitura da coleção pública.

O armazenamento pertence à origem, navegador e dispositivo. Não sincroniza com Obsidian, GitHub, chat ou outro dispositivo. Dados podem ser apagados pelo navegador. Falha de gravação é anunciada e a memória pode ser exportada. Exportação gera JSON local como cópia de segurança; a interface não oferece importação de arquivos. O motor ainda consegue validar estados antigos, sem formulário de upload. IDs de cartões removidos são ignorados nos históricos; sessão com referência removida é recusada, sem gravação parcial. Backups são pessoais: não os colocar no repositório. Não há mesclagem automática de backups concorrentes.

## Adicionar e revisar cartões

1. Ler a seção da nota e conferir a fonte primária vigente. Não extrair e publicar automaticamente frases sem revisão.
2. Criar um objeto por fronteira recuperável: termo, definição curta, exemplo, confusão, metadados, fonte e seção. Contraste é opcional e só entra se a pergunta tiver resposta discriminadora explícita. Não usar explicações que entreguem o termo em uma definição inversa.
3. Para conceito ainda sem artigo, é permitido apontar para seção pertinente do hub e fonte primária precisa. Os sete cartões contábeis iniciais usam o hub existente como rota; as definições vêm do MCASP, e não de teoria inexistente no hub. Não declarar que o hub contém aprofundamento já escrito. A evolução editorial deve respeitar os contratos de novas notas.
4. Rodar `node scripts/validate-flashcards.js` e `node scripts/test-flashcards.js`. A validação verifica estrutura e vínculos; revisão humana/agente das fontes continua necessária para exatidão semântica e vigência externa.
5. Construir com `node scripts/build-site.js`, depois `node scripts/validate-flashcards.js --site` e `node scripts/validate-integrity.js --audit-site`.
6. Publicar pelo workflow existente. Confirmar o HEAD final, a coleção ao vivo, a página e os links do manifesto. Uma revisão só está publicada depois disso.

Ampliação seguinte: aprofundar Contabilidade em DVP, custos e estatais com notas específicas; ampliar contratos de transferências, finanças e auditoria aplicada, preservando apenas conceitos efetivamente documentados. Não confundir coleção parcial com domínio da matéria. O esquema já comporta essas coleções sem mudança na interface; não apresentar a estrutura preparada como conteúdo concluído.

Lote de Auditoria (04/11): três cartões novos para distinguir teste de controle, teste substantivo de detalhes e observação versus reexecução; quatro refinamentos de cartões já existentes; caso guiado incluído no artigo de procedimentos. O lote não registra sessão, pontuação ou retenção.

Lote transversal de 04/11: **7 novos cartões** em Avaliação de Políticas Públicas (teoria da mudança, modelo lógico, insumos/atividades, produtos/resultados, impacto na cadeia versus inferência causal, avaliabilidade por pergunta, mudança observada e economicidade/eficiência). **8 cartões existentes refinados**, quatro em Políticas Públicas e quatro em Orçamento. Dois artigos de Políticas Públicas e o artigo de PPA/LDO/LOA receberam casos guiados. As prioridades continuam derivadas das sessões; editar cartões não gera retenção nem novos resultados pessoais.

## Integração contínua: cartões e interface

As sessões registradas no GitHub geram prioridades por `conceptIds`. O navegador consulta esse arquivo e ajusta a ordem das revisões sem importação manual. **O conteúdo dos cartões é outra etapa:** no fechamento de cada unidade, o agente revisa conceitos ainda sem cartão e acrescenta pequenos lotes a `data/flashcards.json` com fontes, artigo e metadados validados. O Pages passa a disponibilizar esses cartões após publicação; não há geração automática de conteúdo não revisado no navegador.

O formulário nativo de envio de arquivo foi retirado da seção principal. A importação de cópias foi retirada também da seção de ajuda; resta a exportação de segurança. Não há restauração de arquivo pela interface. Nenhum arquivo pessoal passa para o build público.

## Ligação com erros das questões

A coleção pública contém `conceptIds` explícitos, revisados editorialmente. `legacyErrorIds` é um vínculo opcional com erros já registrados em `data/erros-recorrentes.json`, preservando a identidade do conceito separada da identidade da ocorrência do erro. A consolidação em `study-sessions.js` usa `flashcard-priorities.js` e as páginas completas de lacunas geradas, não apenas as 20 visíveis. Gera `data/contexto-estudo/flashcards-prioridades.json`, incluído nas saídas automáticas e excluído do site. O perfil acompanha o histórico no repositório: não é segredo em um repositório público. Não copia enunciados ou respostas para a coleção de cartões.

Hierarquia: erro conceitual recorrente pendente, demais erros pendentes, incerteza/chute/branco, revisão posterior de recuperação imediata. Retenção observada e histórico substituído não geram prioridade; falhas posteriores reabrem a fila conforme o motor de estudo. Recuperação imediata só entra a partir da data de revisão. Conceitos sem cartão aparecem em `unmapped`, sem aproximação automática por palavras. A fila orienta a consolidação editorial; não inventa cartões ou sessões.

No site, as prioridades são obtidas **automaticamente**, por leitura do arquivo `data/contexto-estudo/flashcards-prioridades.json` no branch `main` do GitHub público (`raw.githubusercontent.com`). O arquivo completo continua fora do build do GitHub Pages; no entanto, **já está publicamente acessível pelo repositório**, e a interface mostra somente a contagem e a data de referência. A consulta acontece ao abrir a página, ao voltar para a aba (com limite de frequência) e antes de iniciar uma sessão específica de erros. Uma consulta malsucedida mantém a última cópia válida no armazenamento local; a ausência de cópia não bloqueia os demais modos. Uma cópia de data anterior jamais sobrescreve uma mais nova. Sincronização atualiza somente as prioridades: preserva revisões, sessão ativa e fila já montada. Novas janelas mistas priorizam erros elegíveis; “Erros das questões” usa apenas as prioridades disponíveis; “Novos” e “Revisões pendentes” mantêm seus filtros. O modo difícil reúne dificuldades locais e de questões. Pontuação de prioridade não é nota nem previsão competitiva.

O progresso local usa formato 2, com `priorities` opcional e resumo da última sessão encerrada. Backups no formato 1 continuam aceitos e são migrados. O botão “Encerrar por agora” finaliza voluntariamente a sessão, mantém avaliações e agendamentos e informa quantas recuperações e conceitos distintos foram trabalhados. Alterar autoavaliação do cartão não resolve erro no perfil; só nova evidência em questões muda o diagnóstico após nova consolidação no GitHub e atualização da consulta. Conceitos e concursos seguem isolados. O corte do perfil aparece na tela; a leitura automática não envia revisões ou backups ao GitHub.

Primeira integração: vínculos conferidos para orçamento, causalidade em políticas públicas e teste de controle. Acrescentado cartão de consultoria prévia/objetividade (IN SFC 3/2017, itens 52 e 53) para erro recorrente. Segundo lote de 04/11: 14 cartões novos para as lacunas ainda não mapeadas na importação (auditoria, políticas públicas e orçamento) e reaproveitamento do cartão existente de conflito de interesses para Auditoria. Terceiro lote: 30 novos cartões, sendo 28 para erros históricos da Dataprev e 2 para fronteiras da CGU ainda relevantes, além de dois refinamentos de vínculos em cartões existentes. As notas e fontes foram confrontadas com os erros do ledger e com o catálogo. Os dados de prioridade são regenerados pelo consolidado das sessões, agora incorporando os erros históricos **pendentes** da Dataprev. Erros marcados como superados não são reabertos. Para atualizar o foco das questões no navegador, basta abrir ou retornar à página: a nova fotografia é consultada no GitHub, quando o consolidado estiver publicado. A prioridade do legado é um retrato documental, não uma medição de retenção em 04/11. Os novos cartões continuam sujeitos a revisões e ao estudo espaçado.

## Evolução por etapas

Plano canônico: [[1 - Planejamento/Flashcards - Sessoes continuas e ampliacao|Sessões contínuas e ampliação por matéria]]. Motor contínuo, encerramento voluntário, migração v1→v2 e interface foram implementados. **Dois lotes de recuperação implementados: 14 cartões de lacunas recentes da CGU, seguidos de 28 cartões de erros históricos da Dataprev e 2 novos cartões para conceitos da CGU. Todas as seis matérias que estavam vazias receberam uma coleção inicial; ampliar profundidade e cobertura do edital continua pendente.** Os testes cobrem continuidade acima de dez cartões, retentativa, migração de backups e preservação de avaliações após encerramento. A publicação requer validação do workflow no commit final.


### Ocorrências históricas ainda sem cartão

Em 04/11/2026, o arquivo de erros históricos tinha 38 ocorrências da Dataprev: **35 pendentes e 3 superadas**. Os 28 cartões da Dataprev estão associados a **33 ocorrências pendentes**. Permanecem duas lacunas em `unmapped`: escolha de título por síntese global em inglês e modelagem de problemas de idades. São dificuldades de aplicação que exigem exercícios contextualizados, em vez de cartões de definição vaga. O erro de leitura de **EXCETO** foi associado ao conceito de texto manchetado, mas a recuperação do conceito não substitui a prática de atenção ao comando.


### Primeiro lote das seis matérias da CGU antes vazias

Em 04/11/2026, foram acrescentados **25 cartões inéditos** distribuídos entre Estado e Democracia (4), Sociedade Brasileira (4), Administração Pública (4), Finanças Públicas (4), Contratações e Transferências (4) e Evidências, Dados e IA (5). Outros três cartões previamente existentes foram associados a matérias adicionais: `accountability` (Administração Pública), `equidade` (Sociedade Brasileira) e `contrafactual` (Evidências, Dados e IA). Total de cartões por matéria após os vínculos: respectivamente **4, 5, 5, 4, 4 e 6**. As notas originais dos conceitos estão em Constitucional, Administrativo, Administração Pública, Atualidades, Auditoria e Avaliação de Políticas. O hub de cada matéria ainda é roteiro: **presença de cartão não equivale a aula, retenção ou cobertura completa do edital**.


### Lote de ampliação de 04/11/2026: contabilidade, finanças, contratos e auditoria

**37 cartões novos**, totalizando 204. Distribuição: **Contabilidade Pública +7 (14 no total); Finanças Públicas +6 (10); Contratações e Transferências +9 (13); Auditoria Governamental +15 (44)**. Os vínculos das notas vêm dos artigos canônicos já existentes de Orçamento Público, Direito Administrativo e Auditoria. O lote separa estágio orçamentário, entrada de caixa e reconhecimento patrimonial; limites e demonstrações fiscais; hipóteses de alteração e encerramento contratual; amostragem, achados e monitoramento da auditoria.

**Limite editorial:** a nota própria de Contabilidade Pública ainda é um hub de planejamento. Os cartões adicionais são fronteiras patrimoniais sustentadas por notas de receita, despesa e restos a pagar; não cobrem integralmente balanços, DVP, MIC/custos, provisões e estatais. Da mesma forma, os cartões de Contratações cobrem principalmente a Lei nº 14.133/2021 e ainda não esgotam o regime de transferências e parcerias. Fonte normativa de referência: MCASP 11ª edição, Lei 4.320/1964, LRF, Lei 14.133/2021, MOT/IN 10/2020. Não registrar avanço em domínio ou retenção sem nova evidência de questões.
