---
title: "Câmara 2026: auditoria de Processo Legislativo, Regimentos e Ética"
type: "relatorio-auditoria"
status: "em-curso"
concursoId: "camara-2026"
created: 2026-11-11
updated: 2026-11-11
---

# Processo Legislativo, Regimentos e Ética: auditoria integral

**Etapa:** fase 1, em curso. Não realizar correções dos artigos nesta etapa. Este relatório será completado por blocos. A ausência de conclusão não autoriza declarar cobertura aprovada.

## Delimitação e inventário inicial (11/11/2026)

Fontes consultadas: `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, `1 - Planejamento/Camara 2026 - Arquitetura conceitual e plano de artigos.md`, `1 - Planejamento/Camara 2026 - Estrategia de estudo ate janeiro.md`, `2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional.md`, `data/catalogo-materias-por-concurso.json` e listagem atual da pasta `3 - Materias/Direito Constitucional/`. A versão online do RICD, Resolução 17/1989, foi consultada nos arts. 52, 100 e 113: https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html . O edital oficial foi tentado, mas o acesso externo retornou HTTP 429 neste bloco; **cotejo literal com o edital oficial e retificações permanece pendente**. A síntese interna foi utilizada provisoriamente.

O planejamento registra **33 candidatos CAM-PL-001 a CAM-PL-033**, na trilha PL, com destino à matéria virtual `direito-constitucional`. O plano distingue também a trilha própria de Orçamento (CAM-ORC). O inventário real de Direito Constitucional mostra notas numeradas 11 a 37 relativas ao processo legislativo e regimentos, além de notas-base 06 e 10, e o hub. **Não equivale a 33 artigos independentes**: CAM-PL-016 aparece dentro de PL-001; CAM-PL-017 dentro de PL-002; CAM-PL-008 dentro de PL-003. Há tópicos compostos e sobreposições. A arquitetura de PL mantém quase todos os 33 itens com `[ ]` apesar da presença de arquivos com títulos correspondentes. É um **achado de rastreabilidade**, não prova de cobertura integral nem de erro conceitual.

### Matriz inicial de cobertura (status provisório; ainda não auditada integralmente)

| Bloco do edital resumido | Notas candidatas identificadas | Estado |
| --- | --- | --- |
| Proposições, espécies, iniciativa e processo | DC 10, DC 11–13, DC 20–22, DC 36 | Artigos localizados; conteúdo parcialmente examinado |
| Comissões, pareceres, deliberação, votação | DC 14–16, DC 35 | Artigos localizados; conteúdo não auditado |
| Sanção, veto e procedimentos | DC 17–19, DC 21 | Artigos localizados; conteúdo não auditado |
| Regimento da Câmara, arts. 1–24, 65–94, 226–251, 262–273 | DC 23–28 | Artigos localizados; precisão e limites do edital pendentes |
| Regimento Comum e resoluções do Congresso | DC 29–33 | Artigos localizados; precisão e limites pendentes |
| Código de Ética e Decoro Parlamentar da Câmara | DC 34 | Artigo localizado; conteúdo não auditado |
| Fiscalização e controle parlamentar | DC 35, DC 37 e vínculos com Orçamento | Artigos localizados; conteúdo não auditado |
| Orçamento e processo legislativo orçamentário | Trilha CAM-ORC, notas de Orçamento Público | **Fronteira intertrilhas:** auditoria própria de Orçamento ainda pendente; apontar conexões sem duplicar |

### Bloco 1: artigos examinados inicialmente

Arquivos recuperados do GitHub e inspecionados quanto à arquitetura, estrutura das seções, conceitos-chave, exemplos, itens e fontes:
1. `3 - Materias/Direito Constitucional/11 - proposicoes legislativas conceito e classificacao.md` (`art-0a6be439c28f517d`), cerca de 37 mil caracteres. Integra CAM-PL-001 e refinamento CAM-PL-016. Seções de entrada, dois classificadores (art. 59 CF vs. art. 100 RICD), categorias e fronteiras, requisitos formais, caso progressivo, itens inéditos, contribuição discursiva e fontes.
2. `3 - Materias/Direito Constitucional/12 - iniciativa legislativa sujeitos e limites.md`, cerca de 44 mil caracteres. Integra CAM-PL-002 e refinamento CAM-PL-017. Seções sobre legitimados, reserva de iniciativa, iniciativa popular, emendas, casos e jurisprudência, itens e discursiva.
3. `3 - Materias/Direito Constitucional/13 - tramitacao e fases do processo legislativo.md`, cerca de 46 mil caracteres. Integra CAM-PL-003 e refinamento CAM-PL-008. Separa fases, poder conclusivo, bicameralismo e **espécie normativa / procedimento / regime de tramitação / modalidade de apreciação**; inclui prazos regimentais e casos.

**Nível de verificação realizado neste bloco:** inspeção estrutural de três textos e exame de passagens selecionadas, com cotejo primário dos artigos regimentais indicados. **Ainda não equivale à leitura crítica exaustiva de todas as linhas, de todas as questões ou de todas as fontes desses três arquivos**; status de auditoria individual: parcialmente verificado.

### Achados e hipóteses, sem antecipar correções

- **A-PL-001: importante, rastreabilidade editorial.** A arquitetura registra CAM-PL-001 a 029 como pendentes, mas há arquivos publicados com temas correspondentes. A ausência de `[x]` não significa ausência de artigo. Conferir cada correspondência, identidade e cobertura antes de atualizar o mapa em fase autorizada. Fonte: seção `PL: Processo Legislativo e Regimentos` da arquitetura, confrontada com listagem real.
- **A-PL-002: melhoria/risco a investigar, extensão e repetição.** As notas 11, 12 e 13 são extensas e recebem refinamentos adicionais CAM-PL-016, 017 e 008. A integração evita duplicação editorial, mas pode dificultar recuperação por pergunta e segmentação do estudo. Comparar redundâncias reais e autonomia antes de recomendar divisão. Não dividir apenas por contagem de caracteres.
- **A-PL-003: evidência positiva parcial, distinções conceituais.** DC 11 separa proposição regimental e espécie normativa; DC 13 distingue regime, rito e apreciação. Os arts. 100 e 52 do RICD oficial corroboram as definições e os prazos nucleares utilizados. Isso não valida o conjunto dos enunciados, gabaritos ou exceções.
- **A-PL-004: escopo crítico pendente, delimitação do edital.** A síntese local cita faixas expressas de artigos do RICD em Conhecimentos Básicos e o regimento como conteúdo específico. Confirmar o alcance literal do edital e retificações antes de declarar omissões ou excesso. A página oficial do edital não foi obtida neste bloco (429); **sem não conformidade normativa crítica confirmada**.

### Parecer provisório por artigo

| Arquivo | Estrutura pedagógica observada | Qualidade normativa verificada | Decisão preliminar |
| --- | --- | --- | --- |
| DC 11, Proposições | Pergunta inicial, classificações independentes, casos e itens presentes | RICD art. 100 e art. 113 confirmados; outras passagens pendentes | Manter sob exame; investigar repetição e precisão de cada item |
| DC 12, Iniciativa | Reserva, legitimados e fronteiras com exemplos; múltiplos casos e itens | Jurisprudência e normas citadas ainda não cotejadas individualmente | Manter sob exame; verificar especialmente reservas e precedentes |
| DC 13, Tramitação | Fases, órgãos e regimes separados, caso progressivo; PL-008 integrado | RICD art. 52 cotejado; restante pendente | Manter sob exame; verificar prazos, exceções e todos os itens |

### Próximos passos verificáveis

1. Cotejar **edital oficial, retificações e recorte de artigos do RICD**; identificar itens literais para a matriz definitiva.
2. Concluir revisão integral, parágrafo a parágrafo e item a item, de DC 11–13, verificando dispositivos e julgados contra fontes primárias e registrando cada achado com subtítulo.
3. Examinar DC 14–17 e 18–22, depois DC 23–28, DC 29–34, DC 35–37 e os artigos-base DC 06/10. Conferir conexões e alcance de Orçamento em etapa própria.
4. Consolidar matriz item a item, decisões manter/reorganizar/dividir/fundir/ampliar, severidade, backlog, verificação de todas as fontes e parecer final somente após a leitura integral de todas as notas relevantes.
5. Atualizar este documento e o índice central após cada bloco usando SHA atual para evitar conflito com outra conversa.

**Condição de encerramento:** atualmente **não concluída**. Nenhum artigo foi corrigido, dividido ou publicado por esta auditoria.


## Bloco 2: comissões, pareceres, quóruns e atos finais (11/11/2026)

**Escopo verificado:** os quatro arquivos abaixo foram recuperados integralmente do GitHub e inspecionados quanto a estrutura, seções, afirmações centrais, casos e todos os enunciados/gabaritos da seção numerada `Questões inéditas Cebraspe` (6 em DC14, 8 em DC15, 9 em DC16, 10 em DC17). Nos itens adicionais presentes no refinamento CAM-PL-020 de DC14, houve leitura dos enunciados e justificativas. **O cotejo independente e exaustivo de todos os dispositivos legais, precedentes e afirmações de cada nota continua pendente.** Portanto nenhum artigo é declarado integralmente auditado.

Arquivos:
- `3 - Materias/Direito Constitucional/14 - comissoes parlamentares natureza competencias e poderes.md` (`art-b6f0d82c91a74e35`, 43.412 caracteres). Integra CAM-PL-004 e o refinamento CAM-PL-020, que trata de comissões (arts. 25–54).
- `3 - Materias/Direito Constitucional/15 - parecer legislativo relatorio voto e deliberacao.md` (`art-2589a6f0c3d74be1`, 25.386 caracteres). CAM-PL-005, relatório, voto e parecer institucional.
- `3 - Materias/Direito Constitucional/16 - discussao votacao quoruns e modalidades de decisao.md` (`art-3d89c1b75a4e60f2`, 26.027 caracteres). CAM-PL-006, maioria, quóruns, verificação e modalidades de voto.
- `3 - Materias/Direito Constitucional/17 - sancao veto promulgacao e publicacao.md` (`art-51c7e2f904a68db3`, 27.425 caracteres). CAM-PL-007, CF art. 66, veto e atos finais.

**Fonte primária consultada de forma independente:** [RICD consolidado no portal oficial da Câmara](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), especialmente arts. 52, 126–130, 183–186. A fonte oficial confirma: (a) prazo-base das comissões de 5/10/40 sessões para urgência/prioridade/ordinário e metade ao relator, ressalvadas as disposições especiais; (b) as três partes do parecer escrito, com exceção para parecer sobre emenda no art. 129, §1º; (c) a distinção entre maioria presente, maioria dos votos, abstenção e modalidade; (d) apoio de seis centésimos dos membros para verificação ordinária de votação simbólica e regra de um décimo mais deliberação do Plenário para nova verificação antes de uma hora. Isso é **verificação delimitada**, não certificação total das questões.

### Achados adicionais

- **A-PL-005: importante, colisão de códigos de planejamento.** A seção `Refinamento CAM-PL-020` em DC14 classifica *funcionamento das comissões nos arts. 25 a 54*. Porém a arquitetura `CAM-PL-020` descreve *Regimento da Câmara: Mesa e órgãos da Casa, arts. 1 a 24*. Verificar se foi reprogramação deliberada e preservar um mapa de `articleId`/conteúdo/código antes de propor saneamento na fase posterior. A origem está na seção homônima de DC14 e na lista PL da arquitetura.
- **A-PL-006: importante, escopo normativo distribuído.** DC14 concentra arts. 25–54, enquanto o planejamento para PL19/PL20 concentra arts. 1–24 e prevê PL21/22/23 para outras faixas. A arquitetura não descreve de modo coerente onde os arts. 25–54 são cobertos. Os arquivos existem, mas **a matriz de cobertura precisa ser por dispositivo e por objeto**, não somente por códigos editoriais.
- **A-PL-007: evidência positiva localizada.** DC15 separa corretamente as três partes do parecer (art.129), inclusive a exceção de parecer sobre emenda; DC16 distingue apoio de 6% para verificação ordinária e 10% com deliberação para nova verificação antes de uma hora (art.185 §§3º–4º), conforme RICD oficial. Há exemplos com variável modificada e itens C/E que testam inversão de requisitos. Os exemplos de votação comum de DC16 separam presença de votos favoráveis. O restante da nota não está certificado.
- **A-PL-008: pendência normativa específica.** DC17 trabalha com decisões sobre veto, prazos, ordem subsidiária de promulgação, controle congressual e precedentes ADPF 1.078/893. É necessária conferência específica da Constituição atual e dos julgados, antes de confirmar os dez gabaritos; **nenhum erro nesses itens foi declarado sem essa confrontação**.
- **A-PL-009: risco pedagógico, assuntos combinados.** DC14 tem mais de 43 mil caracteres e combina classificação das comissões com regras detalhadas de funcionamento e prazos; apresenta seção própria CAM-PL-020. Examinar se o percurso didático e a recuperação de assuntos melhorariam com duas unidades de perguntas independentes. Não recomendar divisão automática por extensão.

### Situação de qualidade, ainda provisória

| Nota | Distinção central efetivamente observada | Cotejo normativo realizado | Próxima validação |
| --- | --- | --- | --- |
| DC14 | Permanente/temporária; especial/CPI/externa; regras dos arts.25–54 | Art. 52 e vínculo com comissão, apenas | Arts. 22–54, todos os itens e classificação da exceção |
| DC15 | Texto do relator e parecer adotado; terminativo/conclusivo | Arts. 126–130, especialmente art. 129 | Arts. 53–59, 144–147 e questões correlatas |
| DC16 | Presença/aprovação/modalidade; verificação 6%/10% | Arts. 183–186 | Arts. 165–200, sobretudo encerramento, destaque, desempate |
| DC17 | Sanção/veto/promulgação/publicação; prazos e dois quóruns | Ainda sem cotejo externo sistemático da CF art. 66 | Art. 66 integral, Regimento Comum e ADPFs |

**Próxima ação após este bloco:** cotejar CF art. 66 e jurisprudência do DC17; concluir conferências ainda pendentes de DC11–16; depois avançar para DC18–22. A auditoria permanece aberta, sem edição de artigos.


## Bloco 3: veto, procedimentos especiais, lei delegada, medida provisória e atos sem sanção (11/11/2026)

### Método, arquivos e fontes

Foram recuperados integralmente e examinados estruturalmente, com leitura de passagens jurídicas e de exemplos centrais, os seguintes artigos:
- `DC 18: procedimentos abreviado e sumario.md` (`art-68b5cf209e4d731a`, 28.561 caracteres; CAM-PL-009).
- `DC 19: procedimentos sumarissimo especial e concentrado.md` (`art-c8e43a75d9061bf2`, 31.736 caracteres; CAM-PL-010).
- `DC 20: lei delegada e delegacao legislativa.md` (`art-6bc728a14d0e49f3`, 15.871 caracteres; CAM-PL-012).
- `DC 21: medida provisoria pressupostos prazos e efeitos.md` (`art-7e91b362a40c58d2`, 17.506 caracteres; CAM-PL-013).
- `DC 22: projetos de decreto legislativo e resolucao.md` (`art-a3f905cb76e1428d`, 21.973 caracteres; CAM-PL-014).

Também foi realizado cotejo independente da **estrutura central do DC 17**, `sancao veto promulgacao e publicacao.md`, com o [art. 66 da Constituição consolidada no portal da Câmara](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), §§ 1º a 7º. O portal oficial foi acessível neste bloco. Foram cotejados ainda o [art. 64 da Constituição](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), o [art. 68](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), o [art. 155 do RICD vigente](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) e a [explicação oficial do Congresso sobre medidas provisórias](https://www.congressonacional.leg.br/materias/medidas-provisorias/entenda-a-tramitacao-da-medida-provisoria).

**Limitação:** o bloco consiste em inspeção estrutural e cotejo factual seletivo de proposições nucleares, não releitura crítica parágrafo a parágrafo, verificação individual de todos os itens inéditos, fontes doutrinárias e precedentes. As cinco notas permanecem **parcialmente verificadas**.

### Matriz provisória, artigo por artigo

| Arquivo | Objeto e distinções presentes | Cotejo independente e observação | Estado |
| --- | --- | --- | --- |
| DC17 (retomado) | Sanção, veto total/parcial, comunicação, rejeição e promulgação subsidiária | CF art. 66 corrobora **15 dias úteis para veto**, **48 horas para comunicação**, veto parcial por unidade integral de artigo/parágrafo/inciso/alínea, **30 dias para apreciação do veto**, maioria absoluta de deputados e senadores, regras dos §§ 6º e 7º. ADPF 1.078/893 e aplicação à hipótese concreta pendentes | Parcial, com núcleo constitucional cotejado |
| DC18 | Abreviado (apreciação conclusiva) × sumário (urgência presidencial) × prioridade regimental | CF art. 64 §§1º–4º confirma urgência solicitada pelo Presidente, janelas sucessivas de **45 dias por Casa**, prazo de **10 dias** para emendas do Senado, suspensão no recesso e exclusão de projetos de código. Verificar exceções de apreciação conclusiva | Parcial |
| DC19 | Sumaríssimo do art.155 × ritos especiais (PEC, MP, lei delegada) × procedimentos conjuntos | RICD art.155 exige requerimento da maioria absoluta dos membros ou Líderes representativos **e aprovação por maioria absoluta dos deputados**, com hipótese de imediata Ordem do Dia. Os nomes doutrinários não são categorias literais do art.151 | Parcial |
| DC20 | Resolução delegante × lei delegada; vedação de matérias; retorno opcional para votação única sem emendas | CF art.68 caput e §§1º–3º corrobora estrutura da lei delegada e vedações (lei complementar, competência exclusiva/privativa, direitos e orçamento etc.). Conferência RCCN arts.116–127 pendente | Parcial |
| DC21 | MP eficácia inicial × prazo × comissão mista × votação pelas Casas × conversão/rejeição | Página oficial do Congresso confirma eficácia imediata, **60 dias + prorrogação por mais 60**, urgência após **45 dias** e comissão mista seguida de Câmara e Senado separadamente. Ainda faltam revisão integral art.62, Res.1/2002 e todos os itens | Parcial |
| DC22 | Projeto de decreto legislativo × projeto de resolução × lei sancionável; órgãos competentes | Passagens selecionadas examinadas; cotejo individual de CF arts.49,51,52 e RICD arts.108–109 e exceções ainda pendente | Parcial |

### Achados adicionais

- **A-PL-010: importante, precisão da matriz editorial.** As classificações *abreviado*, *sumário*, *sumaríssimo*, *especial* e *concentrado* pertencem a exposição didático-doutrinária com recortes diversos; os três **regimes regimentais** do art.151 do RICD são outra pergunta. As notas 18 e 19 explicitam essa separação. Preservá-la ao avaliar propostas de fusão, evitando equiparar terminologia doutrinária a literalidade regimental.
- **A-PL-011: importante, fronteira das Casas.** A nota DC21 explica que comissão **mista** examina a medida provisória, mas a Câmara e o Senado deliberam **separadamente**, em vez de sessão conjunta. Confirmado pela orientação oficial do Congresso. Um mapa unificado de procedimentos precisa manter essa distinção.
- **A-PL-012: prioridade de validação normativa.** O núcleo do art.66 do DC17 é compatível com a Constituição, mas o artigo invoca jurisprudência sobre tempestividade de comunicação do veto e efeitos de atos administrativos. Não atribuir a precedentes alcance ainda não lido; examinar os acórdãos/teses integralmente antes do parecer final.
- **A-PL-013: possível duplicidade funcional a mapear.** DC18/19 introduzem procedimentos que DC20/21/22 desenvolvem por espécie. Essa progressão pode ser intencional e útil como mapa de orientação, mas também pode gerar repetição e inconsistência durante futuras edições. Auditar com critério: texto de visão geral deve remeter ao tratamento aprofundado, com nomenclatura e limites consistentes.
- **A-PL-014: ressalva metodológica.** A confirmação de enunciados centrais em normas primárias **não comprova** a correção de cada gabarito, a atualização da jurisprudência ou a cobertura completa do edital. Nenhum dos cinco artigos foi aprovado integralmente.

### Próximo bloco

1. Completar conferência de itens e referências de DC11–22, em especial jurisprudência em DC12/17 e procedimentos do RCCN/Resolução 1/2002 em DC20/21.
2. Examinar DC23–28: Regimento da Câmara e faixas de artigos cobradas nos blocos básico/específico.
3. Em seguida DC29–34: Regimento Comum, resoluções e Código de Ética; depois DC35–37, DC06/10 e vínculos à trilha Orçamento.
4. Não avançar para edição dos artigos; todos os resultados continuam provisórios até que a matriz integral e o exame das questões estejam completos.

**Estado após o bloco 3:** DC11–22 (12 notas) localizadas e examinadas em diferentes graus, sem validação integral; DC17 recebeu cotejo constitucional adicional. **Nenhum erro normativo crítico confirmado neste bloco e nenhum artigo alterado.**
