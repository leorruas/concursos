---
title: "Continuidade de estudo por matéria"
type: "governanca-operacional"
status: "ativo"
created: 2026-11-03
updated: 2026-11-03
---

# Continuidade de estudo por matéria

Auditoria e implementação de **03/11/2026**, sobre o estado-base `b2125b4d5b58c92ff3487cef4afaec1d2a4c8bb2`. Este documento explica a infraestrutura; o ponto de retomada vivo está nos contextos gerados. Não usar os exemplos datados abaixo como progresso atual.

## Diagnóstico da arquitetura anterior

| Camada examinada | O que funcionava | Limite encontrado | Decisão |
| :--- | :--- | :--- | :--- |
| `AGENTS.md` e `CHAT.md` | Instrução global única e entrada cotidiana mais curta | Entrada ainda orientada ao concurso inteiro | Manter únicos e rotear por matéria |
| Sessões | Um arquivo por bateria, respostas completas, correção sem dupla contagem | Apenas questões; unidade, exposição e próximo passo em texto livre | Formato 2 com metadados pedagógicos no mesmo arquivo; formato 1 preservado |
| Ledger | Questões individualizadas, origem, confiança e mecanismos | Dados antigos incompletos e unidades não indexadas | Preservar legado; mapear fontes auditadas, sem inventar itens |
| Hubs | Teoria organizada e roteiro de Auditoria de 14 unidades | Situação textual já divergente do último checkpoint da unidade 07 | Hub organiza conhecimento; progressão nova é projeção das sessões |
| `Avancos.md` | Histórico e métricas locais | Ausência do arquivo impedia estudar matéria nova | Projetar onde já existe; contexto em dados funciona sem criar Avancos |
| Contextos | Resumo compacto por concurso | Só três sessões recentes, sem unidades ou isolamento por matéria | Contextos por concurso/matéria, índice leve e filas paginadas |
| Edital | Checklist distingue cobertura de estudo | `data/edital-itens.json` só continha amostra Dataprev; CGU não estruturada | Catalogar as rotas da síntese CGU, sem alterar a fonte nem misturar resultados |
| Publicação | Pipeline valida, deriva, salva e publica | Rotas novas e retenção ainda sem testes | Integrar testes de continuidade ao preflight e workflow existentes |

As contagens humanas em hubs/edital/avanços são históricas ou editoriais; não manter esses textos como uma segunda fonte de números. Os blocos automáticos são regenerados, preservando o restante. O catálogo inicial documenta a exposição histórica que só existia em prosa e a vincula à sua fonte. Não cria sessões retrospectivas.

## Fontes de verdade e fluxo

| Informação | Fonte de verdade | Representação gerada |
| :--- | :--- | :--- |
| Teoria e explicações canônicas | Notas em `3 - Materias/`, organizadas pelos hubs | Referências de conhecimento nos contextos; conteúdo teórico não copiado |
| Programa | Edital/checklist existente; PDF oficial e retificações prevalecem | Identificadores e títulos lidos da síntese local |
| Roteiro, aliases, fontes e pré-requisitos | `data/planos-estudo/cgu-2026.json` | Unidades e rotas compactas por matéria |
| Exposição histórica sem checkpoint estruturado | Evidência auditada no catálogo, com data e link do hub | Estado histórico, sem questões inventadas |
| Exposição nova, respostas, diagnóstico e decisão de avanço | Um arquivo em `data/sessoes/` | Contextos, filas, ledger projetado e métricas |
| Respostas anteriores ao formato por sessão | Entradas históricas preservadas no ledger | Apenas observações efetivamente recuperáveis |

O catálogo não é atualizado a cada bateria. Mudanças curriculares e novas notas podem exigir manutenção editorial separada; evolução cotidiana vem da sessão. O motor `study-sessions.js` continua sendo o único aplicador das projeções, usando a transação existente. `study-context.js` é uma biblioteca pura de leitura/validação/derivação, não um segundo gravador.

O fechamento envolve uma gravação do assistente no arquivo da sessão. O workflow existente valida a entrada, calcula projeções, executa os checks, grava apenas arquivos derivados e publica na mesma execução. A gravação técnica da automação é adicional à gravação do chat; não exige operação manual nem Work. Push normal protege contra concorrência: em conflito, preservar a entrada e recalcular sobre o HEAD atualizado, nunca forçar sobrescrita.

## Cinco eixos independentes

**Conhecimento documentado:** existência, papel e cobertura aproximada das notas. Uma referência adjacente não cobre integralmente o item.

**Exposição:** conteúdo e fronteiras explicitamente ensinados, com fonte histórica ou checkpoint. Questão respondida isoladamente não comprova que toda a unidade foi explicada.

**Aprendizagem observada:** acertos, erros, brancos e anulados no treino didático. Não prevê nota integral.

**Desempenho competitivo:** resultados separados em itens reais, adaptados, baterias declaradas calibradas e simulados. O motor confere metadados, não realiza calibração semântica. A comparação com corpus real e a validade normativa continuam sendo responsabilidade do assistente antes do treino. Referência textual ou rótulo não prova equivalência de dificuldade.

**Retenção:** recuperação correta e segura, em outro dia, ligada explicitamente ao conceito anterior e com mecanismo diferente. A evidência vale para o conceito testado; não certifica a unidade inteira. Histórico sem esse vínculo fica como retenção não demonstrada.

## Mapa inicial da Controladoria-Geral da União (CGU)

O catálogo cobre **14 blocos e 81 itens da síntese local** do programa de Auditoria, em **15 matérias e 85 unidades pedagógicas**. Isso é cobertura de roteamento, não auditoria integral do PDF oficial nem conteúdo estudado. Finanças, Orçamento e Contabilidade são entradas separadas de um mesmo bloco; fundamentos e específicos de Auditoria compartilham o roteiro existente. A prioridade é proposta pedagógica, baseada em peso, extensão, dependências e lacunas, sem estimativa de frequência da banca por assunto.

| Matéria / entrada natural | Recorte inicial | Hub aproveitado | Prioridade e estado inicial |
| :--- | :--- | :--- | :--- |
| Auditoria Governamental | P2.5 e P3.1; apoio a P2.1 | Auditoria Governamental | A: peso 2 e situação-problema; unidades 02 a 06 encerradas didaticamente, 07 em aprendizagem |
| Estado e democracia | P1.1 | Direito Constitucional | C: base parcial; sem exposição CGU registrada |
| Sociedade brasileira | P1.2 | Atualidades | C: base parcial; sem exposição CGU registrada |
| Ética pública | P1.3 | Sem hub específico; notas de apoio | C: fonte normativa e aplicação próprias; não iniciada |
| Administração Pública | P1.4 | Administração Pública | C: base parcial; não iniciada para CGU |
| Governança, riscos e integridade | P2.1 | Administração Pública e notas de Auditoria | C: exposição parcial compartilhada em governança/riscos, sem duplicar resultados de Auditoria |
| Transparência e ouvidoria | P2.2 | Administração Pública | C: base de acesso e dados; atuação CGU pendente |
| Direito Administrativo | P2.3 | Direito Administrativo | C: notas existentes; desempenho de outro concurso não comprova estudo CGU |
| Evidências, dados e inteligência artificial | P2.4 | Notas de pesquisa, dados e Auditoria | C: recorte integrado ainda não iniciado |
| Finanças Públicas | P3.2.1 | Política fiscal como base adjacente | B: peso 2; sem estudo CGU registrado |
| Orçamento Público | P3.2.2 e P3.2.3 | Sem hub específico | A: peso 2, extensão e lacunas de execução |
| Contabilidade Pública | P3.2.4 a P3.2.7, com entrada de fundamentos | Sem hub específico | A: peso 2, lacuna extensa; não iniciada |
| Políticas Públicas e avaliação | P3.3 | Administração Pública e métodos de pesquisa | B: avaliação causal, métodos e aplicações pendentes |
| Contratações e transferências | P3.4 | Direito Administrativo, como apoio | B: base de licitações; transferências e testes pendentes |
| Integridade e responsabilização | P3.5 | Notas de processo, improbidade, acesso e dados | B: instrumentos e integração ainda pendentes |

Cada item da síntese deve ter pelo menos uma rota. Itens compartilhados não somam resultados de matérias diferentes nem geram conclusão automática. Checkboxes antigos são evidência a consultar, não gatilhos para preencher exposição. Unidades pendentes podem ter teoria disponível e continuar sem aula, exercício ou retenção.

As outras matérias e concursos recebem inventário automático dos diretórios/hubs existentes e podem usar checkpoints de formato 2. A sequência curricular desses outros editais fica explicitamente **não auditada**, até configuração própria. A progressão e os resultados permanecem separados por `concursoId`.

## Conteúdo dos contextos e custo de leitura

`data/contexto-estudo/<concurso>/<materia>.json` contém concurso, matéria, banca/formato, cobertura e notas, unidades, exposição/fronteiras, fechamento didático, resultados por modalidade, fonte do último checkpoint, lacunas, dúvidas, revisões, fontes do próximo bloco e `resume`. Os nomes naturais e aliases são resolvidos em `data/contexto-estudo/indice.json`; `resolveCommand` permite verificar esse contrato em testes sem executar qualquer escrita.

Para nome canônico conhecido: `CHAT.md` → contexto da matéria → nota/seção → fonte. Alias desconhecido requer uma leitura extra do índice; “de onde parei” usa o resumo do concurso para localizar a matéria mais recente. O estudante não informa identificadores. Os contextos e páginas de revisão usam JSON compacto; sessões e catálogo de origem permanecem legíveis e indentados. O contexto tem até 20 lacunas prioritárias; a fila completa está paginada em arquivos de até 20 itens, acessados quando a revisão exigir. Não é necessário carregar ledger ou histórico integral.

`cut` é o último dia registrado, não a data atual. O chat compara prazos com hoje. Notas têm fingerprint para rastrear sua versão. Se o workflow ainda estiver rodando ou falhar, a sessão é a evidência primária da última gravação; conferir o arquivo do commit recente e informar consolidação pendente. Não afirmar que um contexto antigo já incorpora uma sessão nova.

## Decisões de avanço e revisão

Erros de conhecimento/confusão ainda não recuperados na unidade atual propõem retorno às fronteiras. Acertos inseguros/chutes e brancos propõem checagem de aprendizagem. Uma recuperação correta segura no mesmo dia muda o estado para recuperação imediata, mantendo revisão posterior. `retrievalOf` aponta para a questão anterior; sem vínculo explícito não se presume equivalência apenas por tema ou por `similarTo`.

Nova falha preserva a anterior no histórico e reabre a fila do conceito. Intervalos de **1, 7 e 21 dias** são heurísticas ajustáveis para revisão, não garantia científica de retenção. Revisões por conceito não certificam a unidade inteira. O contexto orienta revisar um recorte viável e depois continuar; erros antigos não bloqueiam indefinidamente todo o currículo. Fechamento com erro conceitual ou insegurança exige justificativa em `advanceWithGaps`, preservando as pendências.

A conclusão é explícita e documental: `unitCompleted` não é inferido de um percentual alto. Conteúdo explicado sem avaliação pode ser salvo como aula, sem questões; resultados continuam vazios. Os pré-requisitos são orientações pedagógicas, não requisitos oficiais da inscrição ou bloqueios permanentes.

Nuances e destinos como enriquecimento teórico são preservados no arquivo da sessão. Uma nota nova/edição de teoria segue seu contrato editorial próprio. Não transformar automaticamente erro circunstancial em artigo nem exigir três gravações editoriais para salvar uma bateria em matéria nova. Na ausência de nota canônica, o formato 2 permite fonte normativa catalogada e localizador exato; o contexto mantém a lacuna editorial.

## Demonstrações com evidência real do estado-base

**“Continuar Auditoria Governamental”** resolve a matéria CGU e encontra unidade 07, enquanto a unidade 06 é o último fechamento didático. O histórico das duas baterias da unidade 07 registra **8 acertos em 9 itens de aprendizagem**, sem treino competitivo da unidade. A última sessão registra erro/dúvida sobre inspeção documental poder servir a teste de controle conforme a finalidade. O próximo passo é reparar essa fronteira, ler a seção de execução da nota do ciclo e conferir testes/técnicas no Manual de Orientações Técnicas da CGU. O 4/4 inicial do hub não substitui a bateria posterior de 4/5. Revisões antigas continuam na fila, sem prometer domínio.

**“Estudar Contabilidade Pública”** encontra estado não iniciado, sem resultados inventados. A entrada é patrimônio e óticas orçamentária, financeira e patrimonial. Falta nota específica: usar a Parte Geral do Manual de Contabilidade Aplicada ao Setor Público (MCASP), 11ª edição, e preservar a pendência editorial. O catálogo inclui link direto do Tesouro Nacional e o recorte inicial. A aula pode ser registrada sem questões; depois, uma bateria acrescenta aprendizagem observada. Fontes de custos e contabilidade societária de estatais precisam de seleção própria quando esses blocos forem abertos.

**“Revisar meus erros de Direito Administrativo”** consulta somente o contexto CGU: ainda sem questões próprias, não importa silenciosamente erros da Dataprev. Pode oferecer diagnóstico inicial ou, se o estudante indicar outro concurso, trocar explicitamente a série.

**“Continuar a CGU de onde parei”** consulta `resume.path` do resumo do concurso e segue a última matéria com checkpoint. Mudar de matéria atualiza esse ponteiro, preservando o estado das demais.

## Validação, arquivos e limites

`test-study-context.js` testa: programa completo da síntese; roteamento dos quatro comandos; separação entre notas e exposição; alternância Auditoria/Contabilidade; retorno dias depois; insegurança que não resolve lacuna; recuperação imediata versus retenção; aula sem questões; fonte normativa sem nota; correção de gabarito sem duplicação; rejeição de referências a outro concurso; preservação de questões; paginação e retirada transacional de páginas excedentes; orçamento de tamanho dos contextos; aliases, unidades e pré-requisitos inválidos. As fixtures usam apenas diretório temporário e nunca viram progresso do estudante.

Criados: catálogo curricular, biblioteca e teste de continuidade, contextos de matéria, índice e filas geradas. Modificados: protocolo curto, instrução global, contrato de sessão, gerador/validador do ledger e integração com preflight/workflow. Dispensados: novos AGENTS/CHAT por disciplina, projetos CGU paralelos, novos artigos teóricos e Avancos vazios em matérias não iniciadas.

A automação valida consistência estrutural e recalcula projeções; qualidade da aula, calibração real da bateria, escolha de fonte, interpretação normativa e decisão pedagógica continuam exigindo trabalho do assistente. O histórico anterior não permite reconstruir fronteiras e segurança ausentes. Leituras pelo chat dependem de conexão GitHub com acesso; a gravação cotidiana depende de ferramentas de escrita disponíveis nesse chat. O repositório não pode habilitar capacidades ausentes do cliente. Contexto salvo também não recupera mensagens que nunca foram registradas em checkpoint.
