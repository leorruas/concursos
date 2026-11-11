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


## Bloco 4: Regimento da Câmara, notas DC23 a DC28 (11/11/2026)

### Arquivos efetivamente recuperados e limites da verificação

Foram recuperados integralmente e examinados em estrutura, abertura, subtítulos, recorte normativo, relações editoriais e fontes os seis artigos seguintes. **Esta rodada constitui inspeção temática e checagem delimitada de fonte primária, não leitura jurídica linha por linha nem validação de todos os gabaritos**:

| Nota | Identidade e intervalo abordado | Situação |
| --- | --- | --- |
| DC23 `regimento da camara organizacao e orgaos artigos 1 a 24.md` | `art-53a7d90f1b264c8e`; organização, Mesa, líderes e comissões, arts.1–24 | Parcial |
| DC24 `regimento camara deliberacao fiscalizacao e sessoes artigos 55 a 80.md` | `art-8c7b2f4d50a963e1`; decisões em comissões, fiscalização e sessões, arts.55–80 | Parcial |
| DC25 `regimento camara expedientes ordem do dia e proposicoes artigos 81 a 105.md` | `art-6d8e3f041b9a52c7`; expediente, Ordem do Dia e proposições, arts.81–105 | Parcial |
| DC26 `deputados mandato licencas vacancia e suplencia artigos 226 a 251.md` | `art-1de8b5094cf736a2`; direitos, licença, imunidade e suplência, arts.226–251 | Parcial |
| DC27 `administracao economia interna e policia da camara artigos 262 a 273.md` | `art-c2e47b0915d863af`; serviços, administração financeira e polícia, arts.262–273 | Parcial |
| DC28 `mapa regimental da camara estrutura e fronteiras do edital.md` | `art-29cf4d6a8b15e730`; mapa transversal dos quatro intervalos delimitados na **síntese local** do edital | Parcial |

Fonte independente desta rodada: [Regimento Interno da Câmara, texto normativo consolidado](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), com acesso efetivo a artigos e respectivos títulos, inclusive **arts.1–5, 20 e 20-A, 65, 226 e 262**. A [página oficial do concurso com os editais 1 e 5–6](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades) também foi consultada, mas **a transcrição literal de todo o programa do cargo ainda requer cotejo com o próprio edital 1**. A síntese local de `2 - Editais` traz os quatro recortes de RICD: **1–24; 65–94; 226–251; 262–273**.

### Achados verificáveis

- **A-PL-015: importante, duplicação de identificador CAM-PL-022.** O arquivo **DC25**, na introdução, associa o tema de **arts.81–105** a `CAM-PL-022`. O arquivo **DC26** também usa `CAM-PL-022` para o tema de **arts.226–251**, que corresponde efetivamente à descrição da unidade 022 na arquitetura editorial. A duplicidade quebra correspondência um-para-um de código e objeto; não prova erro jurídico. Futura correção deve tratar DC25 como cobertura complementar da trilha de sessões/regimento, preservando `articleId` e links, sem falsamente declarar que ambos são o mesmo candidato editorial.
- **A-PL-016: importante, amplitude do recorte versus edital.** DC24 cobre arts.55–80 e DC25 arts.81–105, mas o recorte literal listado para **conhecimentos básicos** na síntese local é **65–94**. Os artigos adicionam material de comissões **55–64** e proposições **95–105**, possivelmente pertinente ao **bloco específico de processo legislativo**. A matriz final deve classificar cada subtrecho por fundamento: básico literal, específico geral ou aprofundamento complementar, sem converter todo o intervalo de cada artigo em exigência literal do edital.
- **A-PL-017: ressalva de hierarquia, potencialmente importante.** DC26 sinaliza a permanência, no texto regimental, de dispositivos históricos referentes a licença e processo criminal (arts.249–251), mas aponta a necessidade de privilegiar a redação constitucional vigente após EC35/2001. Conferir especificamente cada enunciado/questão com CF arts.53–56 antes de validar; risco é ensinar literalidade regimental incompatível com a norma superior.
- **A-PL-018: evidência positiva delimitada.** A fonte oficial confirma, nos dispositivos conferidos, que o art.65 classifica espécies de sessões, o art.226 trata de participação do deputado e o art.262 atribui direção dos serviços administrativos à Mesa, sob regulamentos aprovados pelo Plenário. Os artigos DC24, DC26 e DC27 tratam desses objetos de maneira consistente em suas aberturas. **Não equivale a validação da íntegra**.
- **A-PL-019: arquitetura pedagógica, melhoria a testar.** DC28 organiza por problema, órgão e competência e pode servir como **mapa de revisão**, sem duplicar as notas-base. É necessário verificar se seus exemplos e itens remetem a todos os artigos essenciais e se há excesso de repetições entre DC23–27. Preservar o propósito de mapa transversal na fase posterior.
- **A-PL-020: pendência factual.** DC23 examina os órgãos previstos nos arts.20-A e seguintes, que acumulam mudanças normativas. Confirmar, órgão a órgão, nomenclaturas, competências, condições de eleição e atualizações normativas antes de declarar cobertura completa.

### Matriz de escopo, provisória

| Recorte de RICD indicado na síntese local | Nota principal | Limite da conferência |
| --- | --- | --- |
| arts.1–24 | DC23, com contribuições DC14 | Abertura e tópicos normativos conferidos parcialmente |
| arts.65–94 | DC24 (65–80), DC25 (81–94) | Art.65 confirmado; demais exigem cotejo individual |
| arts.226–251 | DC26 | Art.226 confirmado; dispositivos históricos 249–251 exigem prioridade |
| arts.262–273 | DC27 | Art.262 confirmado; restante pendente |
| Visão integrada das faixas e competências | DC28 | Mapa estrutural, não fonte substitutiva |
| Conteúdo adicional 55–64, 95–105 e comissões 25–54 | DC24, DC25, DC14 | Conferir aderência ao bloco **específico** e não confundir com o básico literal |

### Decisão editorial provisória

Manter temporariamente as seis notas e tratar DC28 como índice conceitual. Corrigir a duplicidade `CAM-PL-022` **apenas na fase de implementação autorizada** e após conferir dependências. Reavaliar a divisão entre DC24/DC25 por pergunta central, mantendo os recortes do edital fáceis de recuperar. Nenhum problema normativo crítico confirmado nesta rodada; **não afirmar que os seis artigos estão integralmente auditados**.

### Próxima ação

Examinar DC29–34 (Regimento Comum, Resoluções do Congresso e Código de Ética), depois DC35–37 e as notas-base DC06/DC10. Paralelamente, completar o cotejo das fontes e de cada gabarito dos DC11–28, principalmente dispositivos regimentais históricos e normas supervenientes. Ao final cruzar edital literal, catálogo de matéria, artigos e dependências e emitir parecer integral. Nenhum conteúdo foi alterado nesta fase.


## Bloco 5: Regimento Comum, resoluções do Congresso e Código de Ética (11/11/2026)

**Método e extensão real:** foram recuperados integralmente os arquivos DC29–34, examinados os títulos, estrutura, seções centrais e trechos normativos de risco. Houve confronto externo específico da Resolução da Câmara nº 25/2001, art. 14 e art. 16, com texto atualizado oficial, e consulta à página oficial do Regimento Comum e às referências da Comissão Representativa e da Resolução 1/2002-CN. **Inspeção parcial, não auditoria linha a linha nem revisão de todas as questões.**

### Inventário por artigo

| Arquivo | ArticleId | Núcleo de conteúdo e risco principal | Estado |
| --- | --- | --- | --- |
| DC29 `regimento comum titulo i sessoes conjuntas artigos 1 a 3.md` | `art-f25a1c9074de83b6` | Título I do RCCN, convocação e direção de sessões conjuntas; conferir cada finalidade do art.1 e os quóruns | Parcial |
| DC30 `regimento comum titulo iv sessoes solenes e materias ate artigo 103.md` | `art-0d62a7f94c8153be` | Solenidades, PEC, projetos orçamentários, revogações e Res.1/2006-CN; cotejo artigo a artigo pendente | Parcial |
| DC31 `regimento comum organizacao comissoes mistas e votacao artigos 4 a 52.md` | `art-91d84ac6f2b70e35` | Lideranças, comissões mistas e votação; conferir regras gerais versus regimes especiais | Parcial |
| DC32 `comissao representativa do congresso resolucao 3 1990.md` | `art-4e9b8c207d16f53a` | Composição 7+16, recesso, calendário constitucional atual versus histórico; confirmar competências e condições | Parcial |
| DC33 `medidas provisorias resolucao 1 2002 CN.md` | `art-7bc9230e51a6d84f` | Prazos e ritos de MPs, ADI 4.029 e 5.127; validar efetividade de dispositivos marcados inconstitucionais | Parcial |
| DC34 `codigo de etica e decoro parlamentar da camara.md` | `art-5b41764164052519` | Infrações, penalidades, Conselho e procedimento disciplinar; **erros normativos de prazo confirmados** | Parcial, com achados críticos |

### Fontes primárias consultadas

- [Código de Ética da Câmara, Resolução nº 25/2001, texto atualizado oficial](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), especialmente arts.14, §4º, II e IV, e 16 caput e §§1º–2º.
- [Página oficial dos regimentos e resoluções do Congresso](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional): texto consolidado da Resolução nº 1/1970-CN, Resolução nº 3/1990-CN e resolução específica das MPs; volume anunciado como atualizado até julho de 2025.
- [Resolução nº 1/2002-CN, texto atualizado](https://www2.camara.leg.br/legin/fed/rescon/2002/resolucao-1-8-maio-2002-497942-normaatualizada-pl.html), aberta; cotejo individual de seus 23 artigos e jurisprudência ainda pendente.

### Não conformidades críticas confirmadas: DC34

**NC-PL-001 (CRÍTICO: prazo de defesa e número de testemunhas).** Em `DC34 > ## 5. O procedimento disciplinar no Conselho de Ética e o julgamento em Plenário > ### Passo a passo detalhado do procedimento`, o texto afirma: **“cinco testemunhas”** e **“cinco sessões ordinárias”** para defesa. Entretanto, o **art.14, §4º, II**, do Código atualizado determina **10 dias úteis** para defesa escrita, indicação de provas e até **8 testemunhas**. A regra apresentada no artigo leva a respostas incorretas sobre quantidade, unidade de tempo e prazo. **Correção proposta na Fase 3:** reconstruir o procedimento com citação literal do inciso vigente, separando regimes de sanção. Evidência: Código oficial, art.14, §4º, II.

**NC-PL-002 (CRÍTICO: instrução e parecer do relator).** A mesma seção descreve parecer do relator em **“cinco sessões ordinárias”**. O **art.14, §4º, IV**, fixa prazo **improrrogável de 40 dias úteis de diligências e instrução na perda do mandato, 30 dias úteis na suspensão temporária do mandato, e 10 dias úteis subsequentes para apresentar parecer**. Reconstituir a sequência e verificar outros prazos do arquivo antes da republicação. Evidência: Código oficial, art.14, §4º, IV.

**NC-PL-003 (CRÍTICO: 60/90 dias e natureza da unidade).** Em `DC34 > ## 5 ... > 7. Prazos máximos de tramitação (art. 16)`, a nota apresenta os limites como **“60 dias”** e **“90 dias”**, sem dizer **úteis**. O **art.16 caput e §1º** estabelece **60 dias úteis** nas penalidades dos incisos II e III do art.10, e **90 dias úteis** para perda do mandato; o texto também deve delimitar exatamente a etapa competente. A omissão de “úteis” produz instrução errada em provas de contagem. Evidência: Código oficial, art.16.

**NC-PL-004 (CRÍTICO: pauta).** Na mesma seção, o artigo escreve: **“prazo improrrogável de dois dias”** para a Mesa incluir a matéria na Ordem do Dia. O **art.16, §2º**, determina **2 sessões ordinárias**, após recebimento, leitura no expediente, publicação e distribuição em avulsos. **Dias corridos/úteis ≠ sessões ordinárias**. Corrigir unidade e marco inicial.

**NC-PL-005 (IMPORTANTE: organização de texto suscetível a mistura de ritos).** O artigo reúne num único passo a passo procedimentos de **suspensão de prerrogativas regimentais (art.13)** e **suspensão do exercício/perda de mandato (art.14)**. O art.13, II, também prevê **10 dias úteis** para defesa, e há diferenças posteriores na instrução. Na Fase 2, propor duas trilhas de decisão por sanção/competência, evitando aplicar prazos de uma à outra. Avaliar outros enunciados e todos os gabaritos à luz dos dispositivos corretos.

### Achados importantes e hipóteses para DC29–33

- **A-PL-021 (verificação de vigência):** DC30 assinala que artigos históricos do RCCN sobre PEC/iniciativa presidencial e orçamentos foram revogados ou superados. Confrontar cada referência marcada “revogada” na consolidação oficial, além da disciplina da CMO pela Resolução 1/2006-CN. Não tratar a lista do arquivo como certificada sem essa conferência.
- **A-PL-022 (fonte e hierarquia):** DC32 reconhece a incompatibilidade entre datas históricas do art.3 da Res.3/1990-CN e os períodos da CF art.57 após EC50/2006. O PDF do Congresso traz nota explícita sobre essa atualização, mas o restante das competências e seus fundamentos devem ser conferidos separadamente.
- **A-PL-023 (voto e órgão):** DC29–31 contrastam reunião conjunta, comissão mista e votações de cada Casa. A existência de artigos independentes parece didaticamente justificável; testar duplicidade real nos exemplos antes de qualquer fusão.
- **A-PL-024 (jurisprudência de MPs):** DC33 distingue ADI4.029 e ADI5.127, além dos dispositivos apontados como inconstitucionais. Confrontar a decisão e sua modulação com os 10 itens inéditos antes de declarar conformidade. Não confundir ausência de revogação expressa com vigência plena de todos os dispositivos.
- **A-PL-025 (tratamento emergencial):** em DC34, os quatro erros confirmados afetam a preparação para julgamento C/E. Recomenda-se **sinalizar o artigo como NÃO CONFIÁVEL PARA MEMORIZAR PRAZOS PROCESSUAIS** até a correção autorizada. Esta é recomendação de uso, sem alterar o artigo na Fase 1.

### Próxima ação

1. Revisar integralmente **todas as questões comentadas e prazos de DC34** contra o texto vigente, ampliando achados e distinguindo arts.13/14/16.
2. Continuar com DC35–37 e bases DC06/10; completar cotejo do edital oficial e conexões com Orçamento.
3. Concluir confronto jurídico, pedagógico e de questões dos DC11–33. A detecção de erros críticos em DC34 recomenda **não inferir qualidade dos demais artigos pela aparência editorial**.
4. Na Fase 1, apenas relatar; alterações do material ficam reservadas para fase posterior expressamente autorizada.

**Estado:** DC11–34 (24 artigos) inventariados/inspecionados em diferentes graus, nenhum integralmente validado; **4 não conformidades críticas de prazo confirmadas em DC34** e uma importante de estrutura didática. Nenhum artigo original alterado.


## Bloco 6: CPI, espécies, controle parlamentar e notas-base DC06/DC10 (11/11/2026)

**Procedimento executado:** cinco arquivos recuperados integralmente do GitHub. Foram examinados identidade, títulos, sumário interno, partes conceituais relevantes, remissões, fontes e alguns exemplos de maior risco. A revisão normativa independente foi **delimitada** à EC 139/2026 e CF art. 71 (fontes oficiais indicadas abaixo), com nova leitura do fluxograma e das seis questões inéditas de DC34. **Nenhuma das cinco notas foi auditada linha a linha, nem se verificaram todos os precedentes ou gabaritos de todas elas.**

| Artigo | Identidade | Conteúdo e conclusão provisória | Validação pendente |
| --- | --- | --- | --- |
| `3 - Materias/Direito Constitucional/35 - comissoes parlamentares de inquerito poderes e limites.md` | `art-25e3bd6ae37991f6`; CAM-PL-031 | Criação de CPI/CPMI, fato determinado, um terço, prazo, poderes de investigação, sigilos, testemunhas, jurisdição e relatórios. Tratamento de garantias e hipóteses concretas identificado | CF art. 58 §3º, RICD art.35 e jurisprudência STF (MS 24.831, MS 26.441, MS 23.452, HC etc.), cada questão |
| `3 - Materias/Direito Constitucional/36 - especies legislativas comparacao por iniciativa quorum e efeito.md` | `art-da9726a3c994a6c6`; CAM-PL-032 | Quadro transversal das sete espécies do art.59, iniciativa, quórum, sanção, irrepetibilidade; potencial bom instrumento de revisão após notas por espécie | Normas CF arts. 47, 59–69 e limites do resumo comparativo; precedentes e seis itens |
| `3 - Materias/Direito Constitucional/37 - controle parlamentar fiscalizacao requerimentos e prestacao de contas.md` | `art-5df4de59dcebb840`; CAM-PL-033 | Convocação, informações, PFC, competências Congresso/TCU e contas presidenciais; casos e síntese | CF arts.49–50,70–75 e peculiaridades de sustação de contratos e precedentes; seis itens |
| `3 - Materias/Direito Constitucional/06 - poder legislativo.md` | `art-f3e70dd8fbe34df4`; complementa CAM-PL-018 | Nota-base de Legislativo e controle externo com refinamento CAM-PL-018, organização do TCU e EC 139/2026 | Completar cotejo CF arts.44–75, TCU e seus itens, preservar reutilização em outros concursos |
| `3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte.md` | `art-4c1041281ca44ee5`; complementa CAM-PL-011 e 015 | Base geral de poder constituinte, espécies, lei ordinária/complementar e PEC, com dois refinamentos explicitamente mapeados | Completar conferência CF art.60 e regras do RICD de PEC; revisar exemplos e precedentes |

### Fontes normativas efetivamente contrastadas

- **EC 139, de 05/05/2026, promulgada e publicada em 06/05/2026**: [texto oficial do Senado](https://legis.senado.leg.br/norma/43257393/publicacao/43258265) e [publicação da Câmara](https://www2.camara.leg.br/legin/fed/emecon/2026/emendaconstitucional-139-5-maio-2026-799072-publicacaooriginal-179182-pl.html). Confirmado que modifica **CF art.31, §1º e art.75** para reconhecer Tribunais de Contas como órgãos permanentes e essenciais, com vedação de extinção, criação e instalação. A menção à emenda na DC06 **é legítima** e não deve ser apagada por suposição de inexistência.
- [CF art.71, texto consolidado do Planalto](https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao): confirmação de que TCU **aprecia** contas anuais do Presidente e **julga** contas dos demais responsáveis; no caso de contrato, Congresso adota ato de sustação e, se Congresso ou Executivo não tomarem medidas em **90 dias**, **o Tribunal decide a respeito** (§§1º–2º). Esse dispositivo não estabelece, literalmente, **anulação automática do contrato**.
- As normas sobre CPI, PEC e RICD que ainda faltam foram **indicadas no inventário, sem fingir validação externa individual**.

### Achados complementares

- **A-PL-026: confirmado, atualização normativa correta na nota-base.** A DC06 cita EC139/2026. O ato foi confirmado nas fontes primárias com alterações em CF arts.31 e 75. Conservar o dado na eventual revisão e conferir seu impacto na interpretação de órgãos de contas subnacionais.
- **A-PL-027: importante, possível extrapolação na síntese de DC37.** O quadro final descreve sustação de contrato irregular como **“Paralisação/anulação da avença contratual bilateral”**. A CF art.71, §§1º–2º, prevê primeiro atuação do Congresso e posteriormente decisão do TCU após 90 dias de inércia, **sem declarar genericamente nulidade automática em qualquer caso**. Recomendar precisão de linguagem: apresentar consequência conforme a medida efetivamente adotada e a competência, com avaliação jurisprudencial. **Classificar como risco de formulação, não erro normativo definitivamente provado** até examinar o contexto integral e precedentes.
- **A-PL-028: importante, natureza comparativa das DC35–37.** Esses textos dependem diretamente de notas-base DC06/DC10, além de DC14/DC16/DC20/DC21. Na fase editorial, examinar se a revisão transversal mantém remissões claras, evitando duplicação de definições e divergência de número/quórum. Não se inferem omissões apenas da repetição de assunto.
- **A-PL-029: crítico, propagação de NC-PL-001 a 004 no fluxograma DC34.** Além do texto corrido, o bloco Mermaid em `DC34 > ## 5. O procedimento disciplinar > flowchart TD` contém os rótulos **“5 sessões ordinárias para Defesa”** (nó F), **“reabre 5 sessões”** (nó G), **“Parecer Final (5 sessões ordinárias)”** (nó I) e **“Ordem do Dia (2 dias)”** (nó O). O mesmo erro surge em múltiplos pontos de aprendizagem. Na fase de correção, revisar **texto + diagrama + exemplos + questões + heurísticas**, preservando os artigos intactos na Fase 1.
- **A-PL-030: revisão dirigida das seis questões inéditas de DC34, sem certificação normativa completa.** Foram lidos **os seis enunciados e os seis comentários**. Nenhum dos seis cobra diretamente os prazos incorretos encontrados no texto e diagrama. Não se conclui, por isso, que estejam juridicamente corretos: é indispensável cotejar art.12/14 do Código e Regulamento do Conselho especialmente as questões 2, 3, 4 e 6. O diagnóstico de alto risco do artigo não deve ser atribuído automaticamente a cada gabarito.

### Situação após inventário de todos os textos associados à trilha

- **29 artigos identificados e parcialmente examinados:** DC11–37 (27 artigos) + duas bases DC06 e DC10. O número **29** conta arquivos únicos, não as 33 unidades de planejamento `CAM-PL-001–033`, algumas desenvolvidas como seções de artigos-base ou refinamentos.
- **Correção factual crítica verificada:** DC34 com quatro não conformidades principais em prazos/quantidades e repetição em fluxograma.
- **Não concluído:** cotejo literal do edital oficial e retificações, linha a linha de todos os 29 arquivos, exame de todos os gabaritos, checagem de cada jurisprudência/norma específica, e correspondência completa entre 33 candidatos editoriais e seus trechos reais.
- **Nenhum artigo alterado** neste procedimento. A fase é exclusivamente de diagnóstico. Antes de declarar a Fase 1 concluída, executar as pendências, especialmente **revisão integral e saneamento conceitual de DC34**, com proposta de correção para autorização futura.

**Próxima rodada recomendada:** verificar juridicamente todas as afirmações e gabaritos de DC34 à luz do Código atualizado, depois concluir uma nota por vez com conferência integral e matriz `CAM-PL` 001–033 × `articleId` × item de edital × fonte primária × avaliação, registrando cada decisão e sua evidência.
