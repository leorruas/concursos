# Flashcards de vocabulário

Criado em 2026-11-04. Coleção inicial: 85 cartões, sendo 53 de Orçamento Público e 7 de Contabilidade Pública; os demais iniciam Auditoria, Políticas Públicas, Ética/Integridade, Transparência e Direito Administrativo. Vínculos múltiplos reutilizam conceitos em Governança e Integridade sem duplicar cartões. Não representa cobertura completa do edital.

## Arquitetura

- `data/flashcards.json`: conteúdo público revisado, sem respostas pessoais. `id` é identidade estável do conceito; `revision` permite evolução sem perder identidade. Uma mudança material no objeto testado exige novo ID.
- `examIds`, `subjectIds`, `editalRefs`: pertencimento explícito, validado contra o catálogo de matérias. Não inferir pelo caminho da nota. Para novo concurso, cadastrar metadados em `exams`, associar cartões pertinentes e validar o catálogo existente.
- `note.articleId` e `note.section`: referência ao ID estável e cabeçalho exato. O caminho não participa da seleção dos cartões. Os links usam a rota pública de artigo por ID, preservando o contexto do concurso.
- `source.url` e `source.locator`: fonte normativa/bibliográfica e localizador. `reviewedAt` documenta revisão editorial; `status: validated` é obrigatório para publicação. Exemplos são hipotéticos.
- `web/09-flashcards-engine.js`: funções puras para seleção, estados, agendamento e validação de backups.
- `web/10-flashcards-ui.js` e `flashcards.html`: interface independente com links para a wiki; reutiliza CSS, temas e tipografia. A home e a navegação superior dão acesso direto.
- Build e auditoria usam allowlist pública explícita. Não copiar diretórios de progresso nem arquivos pessoais.

## Política de revisão

Cada conceito tem históricos separados por direção (`forward`, `reverse`, `contrast`). Primeiro “Sei” agenda 1 dia; lembranças espaçadas seguintes agendam 3, 7, 14 e 30 dias. A sequência só aumenta com intervalo mínimo de 20 horas desde a tentativa anterior naquela direção. “Quase lembrei” reinicia a sequência e agenda 1 dia; “Não sei” reinicia e agenda 10 minutos.

“Conhecidos” exige sequência >=3 em **ambas** as direções direta e inversa. “Em aprendizagem” é todo conceito visto em uma dessas direções sem atingir esse critério. “Ainda não sei” é um subconjunto com última classificação “Não sei” em ao menos uma direção. “Precisam de revisão” conta uma vez cada conceito com alguma direção vencida (incluindo contraste); sobrepõe-se aos demais estados. Um treino só de contraste não estabelece conhecimento direto/inverso.

Sessões selecionam até 10 conceitos; no modo misto priorizam revisões vencidas e depois novos. Empates são embaralhados. Modo difícil permite prática antecipada dos cartões classificados “Não sei”/“Quase lembrei”; isso não antecipa domínio. Modo alternado escolhe uma direção elegível por conceito, priorizando revisões vencidas. Um erro pode voltar após três recuperações intermediárias, substituindo a última entrada para manter no máximo 10 apresentações. A rodada pode ter menos de 10 quando o recorte é menor; a interface mostra o tamanho real e não força revisão futura.

Isso é uma heurística transparente de recuperação autodeclarada, não algoritmo clínico validado nem previsão de desempenho Cebraspe. Não escreve no ledger de questões, no desempenho de simulados ou nos contextos do chat.

## Persistência e privacidade

Chave local: `concursos-flashcards-v1`, formato `{version:1,reviews,session}`. Cada avaliação e o plano de sessão são salvos juntos; recarregar permite retomar sem avaliar duas vezes o mesmo cartão. A resposta volta oculta ao retomar. Não há chamada de rede para transmitir respostas; somente leitura da coleção pública.

O armazenamento pertence à origem, navegador e dispositivo. Não sincroniza com Obsidian, GitHub, chat ou outro dispositivo. Dados podem ser apagados pelo navegador. Falha de gravação é anunciada e a memória pode ser exportada. Exportação gera JSON local; importação valida antes de substituir e exige confirmação. IDs de cartões removidos são ignorados nos históricos; sessão com referência removida é recusada, sem gravação parcial. Backups são pessoais: não os colocar no repositório. Não há mesclagem automática de backups concorrentes.

## Adicionar e revisar cartões

1. Ler a seção da nota e conferir a fonte primária vigente. Não extrair e publicar automaticamente frases sem revisão.
2. Criar um objeto por fronteira recuperável: termo, definição curta, exemplo, confusão, metadados, fonte e seção. Contraste é opcional e só entra se a pergunta tiver resposta discriminadora explícita. Não usar explicações que entreguem o termo em uma definição inversa.
3. Para conceito ainda sem artigo, é permitido apontar para seção pertinente do hub e fonte primária precisa. Os sete cartões contábeis iniciais usam o hub existente como rota; as definições vêm do MCASP, e não de teoria inexistente no hub. Não declarar que o hub contém aprofundamento já escrito. A evolução editorial deve respeitar os contratos de novas notas.
4. Rodar `node scripts/validate-flashcards.js` e `node scripts/test-flashcards.js`. A validação verifica estrutura e vínculos; revisão humana/agente das fontes continua necessária para exatidão semântica e vigência externa.
5. Construir com `node scripts/build-site.js`, depois `node scripts/validate-flashcards.js --site` e `node scripts/validate-integrity.js --audit-site`.
6. Publicar pelo workflow existente. Confirmar o HEAD final, a coleção ao vivo, a página e os links do manifesto. Uma revisão só está publicada depois disso.

Ampliação seguinte: aprofundar Contabilidade (demonstrações, custos e estatais) e as frentes ainda sem cartões específicos — Estado e Democracia, Sociedade Brasileira, Finanças, Evidências/Dados/IA, Contratações e Transferências. O esquema já comporta essas coleções sem mudança na interface; não apresentar a estrutura preparada como conteúdo concluído.

## Ligação com erros das questões

A coleção pública contém `conceptIds` explícitos, revisados editorialmente. A consolidação em `study-sessions.js` usa `flashcard-priorities.js` e as páginas completas de lacunas geradas, não apenas as 20 visíveis. Gera `data/contexto-estudo/flashcards-prioridades.json`, incluído nas saídas automáticas e excluído do site. O perfil acompanha o histórico no repositório: não é segredo em um repositório público. Não copia enunciados ou respostas para a coleção de cartões.

Hierarquia: erro conceitual recorrente pendente, demais erros pendentes, incerteza/chute/branco, revisão posterior de recuperação imediata. Retenção observada e histórico substituído não geram prioridade; falhas posteriores reabrem a fila conforme o motor de estudo. Recuperação imediata só entra a partir da data de revisão. Conceitos sem cartão aparecem em `unmapped`, sem aproximação automática por palavras. A fila orienta a consolidação editorial; não inventa cartões ou sessões.

No site, importar o arquivo pelo controle “Importar prioridades”. A importação substitui apenas a fotografia de prioridades; preserva avaliações e a rodada já iniciada, que não é reordenada no meio. Novas rodadas mistas priorizam a evidência importada e podem retomar um cartão com erro pendente mesmo antes do vencimento local. O modo “Erros das questões” usa somente as prioridades elegíveis; “Novos” e “Revisões pendentes” mantêm seus filtros. O modo difícil reúne dificuldades locais e de questões. Pontuação de prioridade não é nota nem previsão competitiva.

O progresso local continua no formato 1, agora com `priorities` opcional, incluído no backup. Backups antigos continuam válidos. Alterar autoavaliação do cartão não resolve erro no perfil; só nova evidência em questões muda o diagnóstico após nova consolidação e importação. Conceitos e concursos seguem isolados. O corte importado aparece na tela; não existe sincronização automática entre GitHub e armazenamento local.

Primeira integração: vínculos conferidos para orçamento, causalidade em políticas públicas e teste de controle. Acrescentado cartão de consultoria prévia/objetividade (IN SFC 3/2017, itens 52 e 53) para um erro recorrente documentado. Outras lacunas permanecem na fila editorial.
