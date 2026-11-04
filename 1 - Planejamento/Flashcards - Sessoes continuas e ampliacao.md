---
title: "Flashcards: sessões contínuas e ampliação por matéria"
type: "planejamento-tecnico-pedagogico"
status: "em-implementacao"
created: 2026-11-04
updated: 2026-11-04
---

# Flashcards: sessões contínuas e ampliação por matéria

## Objetivo e estado

Pedido de 04/11/2026: permitir estudar continuamente até decidir parar; o botão hoje chamado **Pausar** encerra a sessão naquele momento, preservando as avaliações; ampliar os flashcards das quinze matérias da CGU com foco nas fronteiras conceituais e nos erros das questões.

**Estado por etapa:** motor de sessão contínua, interface, encerramento voluntário e migração implementados. O primeiro lote editorial orientado por erros foi implementado: 14 novos cartões e reutilização de um cartão em Auditoria para cobrir as 15 lacunas do snapshot de 04/11/2026. **A expansão das seis matérias sem cartões e outras frentes do edital permanece planejada.** O inventário agora reúne 112 cartões únicos. `scripts/FLASHCARDS.md` descreve o comportamento técnico vigente. A publicação do lote depende do workflow do commit final.

A prioridade pedagógica é reduzir lacunas e melhorar recuperação e aplicação. Aumentar o tamanho da coleção não equivale a estudar a matéria, reter os conceitos ou aumentar desempenho competitivo. O conteúdo teórico é reutilizável; edital, banca e resultados continuam separados. CGU 2026: Cebraspe, Certo/Errado.

## Sessão contínua: comportamento esperado

Ao começar, escolher concurso, matéria, escopo e direção como hoje. A sessão segue apresentando cartões elegíveis, sem tela obrigatória de conclusão a cada dez. Uma janela interna curta pode organizar a seleção, mas não representa limite nem exige clicar em “nova rodada”. A posição passa a mostrar **“12 cartões nesta sessão”**, sem denominador ou tempo estimado fixo.

O botão hoje chamado **Pausar** deve finalizar a sessão voluntariamente. Rótulo recomendado: **“Encerrar por agora”**, que comunica melhor esse efeito. A ação fecha a fila ativa e mostra um resumo: apresentações avaliadas, conceitos distintos e distribuição entre “Sei”, “Quase lembrei” e “Não sei”. Esses dados são autoavaliações de memória; não apresentar como percentual de acertos em questões.

Um cartão aberto sem avaliação não recebe nota automática ao encerrar. Todas as avaliações já feitas permanecem salvas e suas revisões futuras continuam agendadas. Uma nova abertura inicia outra sessão; não oferece retomar aquela que foi encerrada explicitamente. Recarregamento ou fechamento acidental preservam a sessão em andamento e permitem retomá-la, com a resposta novamente oculta. Encerramento voluntário e interrupção acidental são estados diferentes.

Se acabarem os cartões elegíveis, apresentar **“Sua fila está em dia”**, com a próxima revisão disponível e opções de escolher outra matéria ou encerrar. A continuidade não deve ser simulada por repetição imediata sem propósito. Oferecer prática antecipada apenas como escolha explícita, preservando a regra de que ensaio no mesmo dia não estabelece retenção espaçada.

## Seleção, erros e espaçamento

Reutilizar a integração já implementada com `data/contexto-estudo/flashcards-prioridades.json`: erros conceituais recorrentes pendentes, outros erros, incertezas e revisões posteriores à recuperação imediata. A importação permanece uma fotografia com corte visível. Este plano não acrescenta sincronização automática entre navegador e GitHub.

Ao repor a janela de cartões, considerar prioridades importadas, revisões vencidas, dificuldades locais e novos conceitos conforme o modo escolhido. Manter diversidade para que um pequeno conjunto de erros não impeça revisar os demais cartões vencidos. Testar a política com filas concorrentes antes de fixar proporções; evitar uma quota universal sem evidência de necessidade.

Manter históricos separados de recuperação direta, inversa e contraste. Contrastes são relevantes para erros de fronteira, mas só entram quando o cartão tiver pergunta e resposta discriminadoras verificadas. O modo explicitamente direto ou inverso deve respeitar a escolha; eventual modo alternado que inclua contraste precisa ter rótulo correspondente.

Um “Não sei” pode voltar depois de pelo menos três **outros conceitos**, quando houver candidatos suficientes, sem multiplicar indefinidamente a mesma falha na fila. Um “Sei” não volta imediatamente só porque a questão de origem continua pendente. A janela de seleção precisa lembrar o que já foi apresentado naquela sessão e respeitar um período de afastamento; erros importados continuam diagnosticados, mas não se tornam autorização para repetição contínua do mesmo cartão.

A recuperação em flashcards altera somente o agendamento e a memória local dos cartões. O estado de um erro das questões depende de evidência posterior nas questões e de importação atualizada. Recuperação imediata, retenção posterior e desempenho competitivo continuam distintos.

## Persistência e migração

Substituir a fila total limitada a dez por uma janela de trabalho limitada em memória, com um buffer curto de apresentações recentes, contadores e estado do cartão atual. Não guardar indefinidamente cada apresentação numa lista crescente nem recalcular todo o histórico ao trocar de cartão. Salvar cada avaliação e a atualização da janela juntas, como uma operação local coerente.

Definir versão nova do armazenamento se o contrato de sessão mudar. Aceitar backups anteriores e migrar a sessão antiga preservando avaliações, prioridades e a fila remanescente; cartões avaliados não devem ser avaliados novamente por efeito da migração. Uma sessão antiga já encerrada não deve ressurgir como ativa. A validação deve ocorrer antes de substituir os dados, preservando a possibilidade de exportar o estado anterior.

O resumo pode registrar os contadores da última sessão encerrada, sem impor histórico ilimitado de sessões no navegador. Falhas de armazenamento continuam explícitas, com possibilidade de exportação. Não enviar avaliações ao site, ledger ou GitHub como efeito dessa mudança.

## Inventário atual e expansão das quinze matérias

Corte deste inventário: 04/11/2026. Há **112 cartões únicos**; a soma de vínculos por matéria é maior porque alguns conceitos são compartilhados. As prioridades abaixo são propostas editoriais baseadas em lacunas, pré-requisitos e cobertura disponível, sem estatística de incidência da banca. Cada lote deve ser conferido no edital e nas fontes antes da redação.

| Matéria CGU | Cartões vinculados hoje | Próximo recorte proposto | Prioridade |
| :--- | ---: | :--- | :--- |
| Auditoria Governamental | 27 | Lacunas da fila: técnicas e finalidades de testes, procedimento analítico, vouching/rastreamento, evidência, objetividade, supervisão, escopo e risco residual | Primeira etapa: erros documentados |
| Contabilidade Pública | 7 | Objeto, regimes e enfoques; variações patrimoniais, demonstrações, custos e estatais conforme o edital | Alta: base extensa e pré-requisitos |
| Políticas Públicas e avaliação | 8 | Avaliabilidade, modelo lógico, implementação, monitoramento, indicadores, avaliação e inferência causal | Primeira etapa: erros documentados |
| Orçamento Público | 59 | Cobrir lacunas concretas: esferas, estatais dependentes, prazos, classificações e critérios da receita; evitar multiplicar sinônimos já cobertos | Primeira etapa: completar fronteiras |
| Direito Administrativo | 5 | Elementos e atributos do ato, poderes, organização, agentes, responsabilidade, licitação e controle conforme recorte CGU | Alta: base conceitual reutilizável |
| Administração Pública | 0 | Modelos de administração, governança, planejamento, gestão e fronteiras previstas no programa | Alta: iniciar coleção |
| Finanças Públicas | 0 | Funções do Estado, falhas de mercado, receitas/gasto/dívida e efeitos fiscais previstos no programa | Alta: iniciar coleção e apoiar orçamento |
| Governança, riscos e integridade | 4 | Governança/gestão, apetite/tolerância/risco residual, respostas a risco e desenho/funcionamento dos controles | Alta: conectar e ampliar bases compartilhadas |
| Contratações e transferências | 0 | Planejamento, seleção, contratação, execução/fiscalização e instrumentos de transferência, conferindo normas e escopo | Alta: iniciar coleção normativa |
| Ética Pública | 2 | Ética, deveres, vedações, conflito de interesses e distinções de responsabilização conforme o edital | Intermediária: ampliar fonte normativa |
| Transparência e ouvidoria | 5 | Transparência ativa/passiva, acesso, sigilo, dados pessoais, manifestações e tratamento das demandas | Intermediária: fronteiras e exceções |
| Integridade e responsabilização | 2 | Instrumentos de integridade, sujeitos, condutas e regimes de responsabilização com seus requisitos | Intermediária: ampliar sem confundir regimes |
| Estado e democracia | 0 | Estado/governo, democracia, cidadania, representação, participação e organização institucional do programa | Iniciar coleção de base |
| Sociedade brasileira | 0 | Desigualdades, diversidade, território, estrutura social e direitos no recorte do edital | Iniciar coleção de base |
| Evidências, dados e inteligência artificial | 0 | Dados/informação/evidência, qualidade, vieses, limites de inferência e uso de IA previstos no programa | Iniciar coleção de base |

**Sequência atualizada:** a fila `unmapped` do corte 04/11 foi coberta por cartões com vínculos aos respectivos conceitos. **Isso resolve o mapeamento editorial, não comprova retenção nem encerra o diagnóstico dos erros nas questões.** Próximas etapas: ampliar Contabilidade, Auditoria, Políticas Públicas e cobrir lacunas remanescentes de Orçamento; abrir as seis matérias sem cartões conforme estudo; aprofundar as demais coleções. Novos erros podem reabrir a fila após a próxima consolidação. A ordem é ajustável por prova, peso, pré-requisitos e novas evidências de erro.

Para matérias sem cartões, começar com um lote editorial pequeno, em geral **8 a 15 conceitos realmente distintos**, e avaliar as lacunas restantes antes de outro lote. A faixa é orientação de trabalho, não meta de cobertura. Orçamento já tem 59: o próximo ganho tende a vir de melhorar fronteiras e aplicações, e não de alcançar um número arbitrário de cartões. Nenhuma matéria deve ser considerada concluída apenas por atingir uma quantidade.

## Régua de conteúdo e manutenção

Um cartão testa uma unidade recuperável: termo/definição, requisito, categoria, ordem, exceção, competência, relação ou contraste. Usar exemplos e casos breves para variar aplicação. Evitar definições vagas, listas longas numa única resposta, inversões que revelam o termo, memorização de letras de gabarito e cartões quase duplicados.

Para cada conceito: conferir nota e fonte primária; identificar a fronteira que merece recuperação; verificar se já há cartão reutilizável; criar ou refinar texto; associar `conceptIds`, artigo/seção e os pares de concurso/matéria efetivamente pertinentes. Se faltar nota específica, explicitar a rota de apoio e a fonte, sem declarar que um hub contém aprofundamento inexistente. Novos conteúdos entram como novos; revisão continua restrita ao conteúdo já visto nos cartões ou estudado e explicitamente associado.

Preservar IDs quando o objeto avaliado continuar o mesmo e incrementar a revisão editorial quando necessário. Mudança material de objeto exige ID novo. Notas e cartões podem servir a mais de um concurso, com pertinência conferida; resultados não são transferidos entre provas. Não transformar automaticamente cada erro em cartão público. Respostas pessoais e contagens permanecem fora da coleção publicada.

No fechamento editorial de cada unidade de estudo, incluir a conferência das lacunas e dos cartões correspondentes. Uma bateria continua gravando somente sua sessão; o gerador atualiza o perfil e a fila. A criação de cartões é trabalho editorial no fechamento, após conferência de fonte, e não uma segunda gravação obrigatória por questão.

## Entregas por etapa e critérios de aceite

1. **Motor contínuo e migração:** retirar o limite de dez apresentações totais; manter fila em memória limitada, seleção elegível e antirrepetição; preservar backups e retomada acidental. Testar sequência superior a dez, coleção pequena, nenhum elegível, retorno de erro, avanço do relógio e ausência de duplicação na migração.
2. **Interface e encerramento:** substituir posição fracionária, remover conclusão forçada da rodada, acrescentar encerramento voluntário e resumo fiel; verificar teclado, foco, telefone, tema claro/escuro, recarga e cartão aberto sem avaliação. Confirmar que encerrar mantém agendamentos e que abrir outra sessão não retoma a encerrada.
3. **Lote editorial de recuperação:** primeiro lote concluído com 14 cartões novos e extensão de pertencimento do cartão de conflito de interesses. As 15 lacunas do snapshot de 04/11 agora possuem vínculo conceitual e recorte de matéria. Conferir a projeção regenerada e não classificar recuperação nos cartões como retenção em questões. Próximas lacunas seguem fluxo incremental.
4. **Expansão por matéria:** ainda pendente nas seis matérias sem cartões. Executar lotes por recorte, conferir com o programa e inventariar as lacunas restantes. Publicar lotes pequenos e verificáveis, sem reescrever todas as notas.
5. **Validação e publicação:** executar os testes de flashcards, continuidade, importação/backup, catálogo, privacidade, build e workflow. Confirmar coleção, interface e rotas no Pages. Apenas depois atualizar o estado de cada etapa para implementada.

Critério principal: estudar por mais de dez cartões sem reiniciar a sessão, encerrar voluntariamente sem perder avaliações, retornar depois com o agendamento preservado e encontrar uma coleção que se amplie de acordo com as lacunas reais das matérias.
