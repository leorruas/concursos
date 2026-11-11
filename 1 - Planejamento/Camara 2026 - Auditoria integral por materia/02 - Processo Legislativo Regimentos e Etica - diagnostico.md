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


## Bloco 7: verificação dirigida de DC34, Código de Ética (11/11/2026)

**Escopo desta rodada:** leitura completa da seção de organização e procedimento disciplinar, fluxograma e dos **seis itens C/E comentados** de `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md` (`art-5b41764164052519`). Cotejo com a [Resolução da Câmara nº 25/2001, texto consolidado atualizado](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), arts. 7–16. Ato consolidado consultado em 11/11/2026. Este exame **não equivale a validação integral** dos argumentos doutrinários, de todas as referências do Regulamento do Conselho ou de toda a jurisprudência citada.

### Novas não conformidades confirmadas e localizadas

**NC-PL-006, CRÍTICO: voto da Corregedoria.** Em `DC34 > ## 4. O Conselho de Ética... > Composição e mandato`, o artigo afirma que o Corregedor participa do Conselho **com voz e voto**; a mesma afirmação reaparece na tabela da seção 7 (`Corregedoria Parlamentar`). O **art. 9º, § 4º, do Código vigente** permite que o Corregedor participe de todas as fases do processo, inclusive discussões, **sem direito a voto**. Corrigir ambos os locais e conferir a afirmação conexa de «assento especial»/contagem partidária diante do texto atualizado. Risco de item C/E diretamente invertido.

**NC-PL-007, IMPORTANTE: artigo de legitimidade de cidadãos mal citado.** Em `DC34 > ## 5... > 1. Iniciativa e Legitimidade ativa`, e no `Caso 3`, o conteúdo associa petição de cidadãos ao **art. 14, § 2º**. A norma vigente disciplina representações feitas à Mesa e legitimidade de cidadãos no **art. 9º, caput e §§ 1º–2º**. O art.14, §2º trata de **convocação de suplente quando suspensão ultrapassa 120 dias**. A regra de encaminhar à Mesa está adequada, mas a ancoragem normativa está errada. Corrigir referências e distinguir requerimento do cidadão, exame prévio da Mesa e representação formal.

**NC-PL-008, IMPORTANTE: remissão incorreta dos impedimentos do Conselho.** A seção `Composição e mandato` localiza os impedimentos de integrantes do Conselho no **art. 7º, § 3º**; o Código consolidado estabelece essas restrições no **art. 7º, § 2º, incisos I–IV**; o §3º cuida de **proporcionalidade partidária**. A lista pedagógica do artigo apresenta apenas dois impedimentos, omitindo **suplente convocado** e **deputado condenado criminalmente por órgão jurisdicional colegiado**, ainda que sem trânsito em julgado. Há risco de incompletude e de confusão sobre §/inciso.

**NC-PL-009, IMPORTANTE: remissão das prerrogativas suspensas.** A seção `O rol das prerrogativas parlamentares passíveis de suspensão` aponta **art. 13, V**. O rol é do **art. 13, VI, alíneas a–d**, enquanto o inciso V trata de encaminhamento do parecer aprovado à Mesa. O trecho também abrevia a enumeração da alínea **c** (Mesa, Ouvidoria Parlamentar, Procuradoria Parlamentar, presidências de comissões e integrantes de CPI). Revisar a lista, objeto e referência.

**NC-PL-010, IMPORTANTE: afastamento do Conselho e prazo de mandato.** A nota diz `Afastamento cautelar de membro representado (art. 7º, § 4º)`; a norma contém regra no **art. 7º, § 7º**, exigindo instauração de processo disciplinar contra integrante do Conselho e prova inequívoca da acusação. O §4º do art.7 trata das indicações anuais pelos líderes. Evitar `recebimento de representação` como gatilho automático quando a condição textual é outra.

**NC-PL-011, CRÍTICO, correção de fundamento anterior: confusão do prazo de novo relator com prazo comum.** O art. 16, § 4º, I e II prevê **cinco dias úteis** exclusivamente nas hipóteses em que a Presidência **avoca a relatoria ou designa novo relator** por descumprimento do prazo; não são cinco sessões ordinárias e não constituem o prazo geral do parecer do art. 14, § 4º, IV (**dez dias úteis**). O fluxograma e o texto devem modelar os dois caminhos com condições independentes.

**NC-PL-012, IMPORTANTE: premissa sobre penas do art. 16.** O texto DC34 chama 60 dias de teto para processos de `censura e suspensão`. O art. 16 caput especifica apenas **sanções dos incisos II e III do art.10**: suspensão de prerrogativas regimentais e suspensão do exercício do mandato. A **censura, inciso I**, não integra esse recorte. Essa imprecisão é autônoma em relação à omissão de «dias úteis» já registrada em NC-PL-003.

### Seis questões C/E: inventário de verificações

| Questão DC34 | Gabarito no artigo | Cotejo nesta rodada |
| --- | --- | --- |
| 1, fraude de deliberação | ERRADO | **Corroborado**: Código art.4º, IV tipifica conduta incompatível, punível com perda do mandato, não suspensão de prerrogativas |
| 2, censura escrita por ofensa | CERTO | **Corroborado com ressalva de redação**: art.12 atribui a aplicação à Mesa por provocação do ofendido na hipótese do art.5º, III; o item não explicita o tempo da defesa, mas sua proposição central é compatível |
| 3, 21 titulares e 21 suplentes, impedimentos do relator | CERTO | **Parcial**: composição no art.7º é confirmada; vedação de relator de mesmo partido/Estado figura art.13, I, a–b, aplicado por art.14, §4º, I; menção específica ao Regulamento ainda exige leitura direta |
| 4, relator pode decretar quebra de sigilo | ERRADO | **Fundamento constitucional geral corroborado**: Código não atribui poderes de CPI ao Conselho; rito afirmado sobre Mesa/Plenário e Regulamento arts.14–16 ainda não cotejado no próprio Regulamento |
| 5, perda de mandato secreta e 2/3 | ERRADO | **Corroborado**: CF art.55, §2º, e Código art.14 exigem votação ostensiva e maioria absoluta |
| 6, CCJC reexamina mérito disciplinar | ERRADO | **Corroborado**: art.14, §4º, VII delimita recurso a violação constitucional, regimental ou do Código, restrito aos vícios apontados |

**Resultado:** os seis gabaritos das questões numeradas **não foram contraditos pela leitura normativa**, com reservas de fundamento específico na questão 4 e referência complementar na questão 3. **Não confundir validação das questões com validação do artigo:** o texto corrido, o quadro e o Mermaid contêm problemas que afetam a aprendizagem mesmo quando os itens finais parecem corretos.

### Arquitetura mínima de correção futura, sem editar nesta Fase 1

1. Usar o **art.9º** para legitimidade, Mesa e representação; distinguir legitimidade inicial de cidadão e iniciativa de partido/Mesa para o rito de sanções graves.
2. Separar **censura verbal (art.11)**, **censura escrita (art.12)**, **suspensão de prerrogativas (art.13)** e **suspensão do mandato/perda (art.14)**, com competente, pressuposto, defesa, instrução, parecer, recurso e decisão para cada ramo.
3. Explicitar **art.14: defesa 10 dias úteis, até 8 testemunhas; instrução 30/40 dias úteis, parecer 10 dias úteis; recurso à CCJC 5 dias úteis, julgamento sobre vícios 5 dias úteis**. Tratar a substituição de relator do **art.16, §4º** separadamente.
4. Registrar **art.16: 60/90 dias úteis** para os procedimentos e sanções indicados, e **2 sessões ordinárias** para pauta. Diferenciar dias úteis e sessões em todos os nós do Mermaid, quadros e casos.
5. Rever composição, impedimentos, Corregedoria **sem voto**, e correspondência exata com art.7º §§2º e 7º.
6. Manter identidade, caminho e links do artigo. A correção de mérito ficará para fase autorizada, com teste técnico de Mermaid e leitura integral contra fonte oficial.

**Estado:** DC34 segue **não aprovado**, com NC-PL-001 a 004 e NC-PL-006 a 012 (NC-PL-005 era risco pedagógico de mistura de ritos), em diferentes severidades, sendo confirmadas normas críticas em prazos e poder de voto. Não houve modificação de artigo de estudo nesta fase. Demais 28 artigos permanecem somente parcialmente examinados.


## Bloco 8: Regulamento do Conselho de Ética e antinomia temporal (11/11/2026)

**Fonte primária:** [Regulamento do Conselho de Ética e Decoro Parlamentar publicado pela Câmara](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/arquivos/regulamento-1/view), aprovado em 31/10/2001, arts.1–24; [Código consolidado atualizado, Resolução 25/2001](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html) com alterações da Resolução 2/2011; [ata oficial do Conselho, 01/06/2011](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/atas/atas-de-reunioes-2011/ata-01_06_11); [notícia oficial sobre escolha de relatores, 16/09/2025](https://www.camara.leg.br/noticias/1199934-conselho-de-etica-sorteia-nomes-para-a-escolha-de-relatores-de-tres-processos-movidos-pelo-pl/). O PDF do Regulamento teve texto recuperado pelo portal, mas a captura de páginas do visualizador falhou nesta rodada; portanto registrar essa limitação de inspeção visual. A redação normativa consolidada HTML foi consultada diretamente.

### Descoberta central: origem dos erros de DC34

O Regulamento originalmente aprovado em 2001 **de fato contém** o prazo de **5 sessões ordinárias para a defesa e até 5 testemunhas** nos **arts.8 e 9**. A mesma norma estabelece **5 sessões ordinárias para relator em consulta ao Conselho** (**art.6**, que não é prazo geral de parecer disciplinar), e **5 sessões ordinárias para apreciação do parecer depois de entregue** (**art.17**, não para o relator redigir o parecer). O Código de Ética consolidado após as alterações de 2011 regula especificamente o procedimento da sanção de suspensão/perda do mandato em **art.14, §4º, II e IV**, com **10 dias úteis, até 8 testemunhas, instrução de 30/40 dias úteis e 10 dias úteis para parecer**. A ata oficial de 01/06/2011 explicita a mudança de **sessões ordinárias para dias úteis** e a elevação **de 5 para 8 testemunhas**.

**A-PL-031 (CRÍTICO: mistura normativa confirmada).** Os trechos errados de DC34 podem ter sido importados do Regulamento antigo, cuja redação publicada não foi integralmente harmonizada com o Código consolidado. Na correção, **não apagar indiscriminadamente o Regulamento de 2001**: distinguir disposição complementar compatível, texto histórico superado e regra atual do Código de hierarquia prevalente, além de acordos de procedimento posteriores. Marcar no material a data e a fonte de cada prazo e o rito a que se aplica. Os erros já anotados NC-PL-001/002 e A-PL-029 mantêm a classificação crítica.

### Questões 3 e 4 do DC34: conferência específica encerrada nos pontos controvertidos

- **Q3, CERTO:** composição de **21 titulares e 21 suplentes** no **art.7 do Código**. A vedação ao relator da mesma sigla partidária ou Estado está **expressa no art.7, §1º, do Regulamento**, e aparece também no **art.13, I, a–c do Código consolidado**. Portanto o núcleo das duas proposições da Q3 foi confirmado nas duas fontes, **sem afirmar validação geral de todos os comentários do artigo**.
- **Q4, ERRADO:** os **arts.14–16 do Regulamento** determinam que, em processos de perda ou suspensão de mandato, o Conselho **pode solicitar justificadamente à Mesa** que submeta ao Plenário requerimento de quebra de sigilo bancário, fiscal e telefônico; também permite pedir transferência dos dados licitamente obtidos por CPI e condiciona acesso a dados de terceiros. Não autorizam o relator **decretar sozinho** a quebra. O fundamento central do gabarito e da explicação foi conferido. **Reserva:** a aplicação atual desses arts.14–16, o alcance da autorização pelo Plenário e eventuais precedentes judiciais devem ser cotejados antes de certificar juridicamente qualquer medida concreta de sigilo.

### Novos riscos editoriais relacionados

- **A-PL-032 (IMPORTANTE: prazo de consulta versus parecer disciplinar).** O art.6 do Regulamento prevê **5 sessões ordinárias** para parecer sobre **consultas**; o art.17 prevê **apreciação colegiada** em 5 sessões após a entrega do parecer disciplinar; o art.14 §4º IV do Código prevê **10 dias úteis para o parecer do relator** no rito grave. Colocar esses prazos lado a lado com o objeto e marco inicial impede que frases literalmente verdadeiras se tornem falsas por mudança de contexto.
- **A-PL-033 (IMPORTANTE: governança normativa 2011–2027).** A ata de 2011 descreve necessidade de atualizar o Regulamento; documento de **Acordo de Procedimentos do biênio 2025–2027** consta no portal oficial do Conselho. Regras de reunião e sorteio podem ser detalhadas por esse acordo, sem afastar Código/Constituição. Ainda não foi realizada leitura jurídica integral do acordo ou levantamento exaustivo de suas alterações.
- **A-PL-034 (IMPORTANTE: representação de processo versus consulta).** O Regulamento art.6 trata da autuação de *consultas*; não transportar seus prazos ao processo disciplinar do art.14 do Código. Este erro é particularmente suscetível ao padrão C/E.

**Situação:** o cotejo documental específico de **Q3 e Q4** foi realizado, encerrando as duas pendências de referência do bloco 7 em seus fundamentos centrais. Permanece **pendente** validação jurídica integral do DC34, incluindo demais remissões do Regulamento, acordo atual e jurisprudência. Material de estudo não alterado. Ao retomar, completar Código arts.3–18 e Regulamento quanto à vigência residual, depois estruturar as 33 unidades CAM-PL para diagnóstico integral.


## Bloco 9: Acordo de Procedimentos 2025–2027 e primeira matriz das 33 unidades (11/11/2026)

### Fonte independente e método

Examinado o documento oficial [Acordo de Procedimentos do Conselho de Ética, biênio 2025–2027](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/acordo-de-procedimentos-2025-2027/acordo-de-procedimentos-2025-2027-1/view), 180 linhas extraídas, e a [ata de aprovação de 08/07/2025](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/atas/atas-de-reunioes-2025/ata-8-de-julho-de-2025-eleicao-do-2deg-vice-presidente-e-instauracao-do-processo-em-desfavor-do-deputado-gilvan-da-federal). **A captura visual do PDF via screenshot falhou**; os pontos decisivos foram confirmados na ata HTML oficial, publicada separadamente. Também recuperada a seção `PL: Processo Legislativo e Regimentos (33 candidatos)` da arquitetura editorial pública. Isso permite mapeamento de identidades, **não** validação exaustiva de todos os dispositivos e todos os itens C/E.

### Novo erro normativo confirmado em DC34

**NC-PL-013, CRÍTICO, maioria de presença confundida com maioria de aprovação.** O texto `DC34 > ##5 > 5. Parecer, votação no Conselho e substituição de relatoria` afirma: **“O parecer é deliberado em sessão pública, por votação nominal e maioria absoluta dos membros do Conselho.”** O Acordo 2025–2027, item 5, especifica **votação nominal, por MAIORIA SIMPLES, PRESENTE A MAIORIA ABSOLUTA**. A ata de 08/07/2025 ratifica o mesmo procedimento. A expressão do artigo é inadequada como regra de aprovação: confunde quórum de presença com votos favoráveis necessários. A distinção deve ser aplicada na correção do texto, Mermaid e matrizes de competências, separando Conselho de Ética de votação final pelo Plenário da Câmara sobre perda de mandato. Fonte: acordo, linhas 116–122; ata, linhas 49–51.

### Regras confirmadas pelo Acordo e ausentes ou insuficientes no DC34

- **A-PL-035, IMPORTANTE: três prazos com funções distintas.** Parecer **preliminar** do relator em **10 dias úteis desde designação**; **vista** em **2 dias úteis** após a leitura do voto e antes do início da votação. Não confundir com os 10 dias úteis de parecer após instrução do rito de sanções graves. Fonte: acordo, item 3.
- **A-PL-036, IMPORTANTE: escolha de relator.** Acordo afasta, para fins de sorteio, blocos parlamentares e considera **partido/federação** do representado; contempla também incompatibilidade com agremiação representante e alteração aprovada em 05/08/2025 relativa a requerimento do líder aprovado pela Mesa. **Titulares e suplentes** participam do sorteio, sob requisitos do art.13. O enunciado Q3 do DC34 permanece correto no seu núcleo (mesmo partido/Estado é vedado), mas a explicação é incompleta para casos envolvendo **federações e representação partidária**. Fonte: acordo, item 2, e ata de 08/07/2025.
- **A-PL-037, IMPORTANTE: votação e direção.** O Presidente do Conselho **somente vota para desempatar**, embora sua presença conte para quórum; voto do relator divulgado quando lido em reunião. Acordo, item 5. Distinto do Corregedor, que participa **sem voto** por força do Código.
- **A-PL-038, IMPORTANTE: reuniões e pauta.** Reuniões não deliberativas para instaurar processo, sortear lista tríplice e ouvir testemunhas são públicas e não requerem quórum. O acordo prevê procedimento especial para **sobrestamento de pauta** por processos atrasados e para **suspensão cautelar temporária**, com janela de 3 dias úteis, além de regras para documentos sigilosos e divulgação de peças no SILEG. Essas regras especiais não devem ser confundidas com o procedimento geral de suspensão do mandato após julgamento do mérito. Fonte: acordo, itens 1, 6, e ata de 08/07/2025.
- **A-PL-039, IMPORTANTE: limite hierárquico e temporal.** Acordo de procedimentos organiza trabalhos do biênio; **não substitui** Constituição, Código de Ética ou Regimento. Ao revisar a nota, indicar hierarquia e objeto exato de cada regra, bem como verificar qualquer alteração posterior ao texto de 2025 antes de proclamar atualidade em 2027.

### Matriz editorial inicial: 33 unidades CAM-PL × arquivo público

A correspondência abaixo deriva da **descrição literal da arquitetura** e dos `articleId`, títulos, cabeçalhos, aliases ou subtítulos dos **29 arquivos efetivamente recuperados**. Referências de `DCnn` significam `3 - Materias/Direito Constitucional/nn - [título vigente].md` na pasta já inventariada. **Estado da matriz: identidade/cobertura alegada, não correção ou suficiência normativas**.

| Candidato | Unidade planejada (resumo) | Evidência e destino observado | Estado editorial |
| --- | --- | --- | --- |
| 001 | Proposições | DC11 | Correspondente |
| 002 | Iniciativa | DC12 | Correspondente |
| 003 | Tramitação | DC13 | Correspondente |
| 004 | Comissões | DC14 | Correspondente |
| 005 | Pareceres | DC15 | Correspondente |
| 006 | Discussão e votação | DC16 | Correspondente |
| 007 | Sanção e veto | DC17 | Correspondente |
| 008 | Procedimento ordinário | Refinamento identificado em DC13 | Incorporado |
| 009 | Abreviado/sumário | DC18 | Correspondente |
| 010 | Sumaríssimo/especial/concentrado | DC19 | Correspondente |
| 011 | Leis ordinária e complementar | Expansão em DC10 | Incorporado |
| 012 | Lei delegada | DC20 | Correspondente |
| 013 | MP: pressupostos | DC21 | Correspondente |
| 014 | Decreto legislativo/resolução | DC22 | Correspondente |
| 015 | PEC | Refinamento em DC10 | Incorporado |
| 016 | Indicações e requerimentos | Refinamento em DC11 | Incorporado |
| 017 | Sujeitos da iniciativa | Refinamento em DC12 | Incorporado |
| 018 | Fiscalização contábil | Refinamento em DC06; complementar DC37 | Incorporado e transversal |
| 019 | Regimento Câmara arts.1–24 | DC23 | Correspondente |
| 020 | Mesa e órgãos arts.1–24 | **DC23 contém objeto**, mas o subtítulo de DC14 usa `CAM-PL-020` para **comissões 25–54** | **Colisão de código; resolver** |
| 021 | Sessões arts.65–94 | DC24 arts.65–80 e DC25 arts.81–94 | **Dividido entre dois arquivos** |
| 022 | Deputados arts.226–251 | DC26; **DC25 também se autodenomina CAM-PL-022, mas cobre 81–105** | **Colisão de código; resolver** |
| 023 | Administração arts.262–273 | DC27 | Correspondente |
| 024 | Mapa de estrutura e tópicos específicos | DC28 | Correspondente |
| 025 | Regimento Comum Título I | DC29 | Correspondente |
| 026 | RCCN Título IV cap.II/III até 103 | DC30 | Correspondente |
| 027 | Res.1/1970-CN | DC31 | Correspondente |
| 028 | Res.3/1990-CN | DC32 | Correspondente |
| 029 | Res.1/2002-CN | DC33 | Correspondente |
| 030 | Código de Ética | DC34 | Correspondente **COM ERROS CRÍTICOS** |
| 031 | CPI | DC35 | Correspondente |
| 032 | Comparação de espécies | DC36 | Correspondente |
| 033 | Controle parlamentar | DC37 | Correspondente |

**Síntese quantitativa responsável:** 33 candidatos editoriais correspondem a **29 arquivos únicos** recuperados na trilha (DC11–37 = 27, mais DC06/DC10). Vários candidatos são expansões dentro do mesmo arquivo; **nenhuma lacuna de ARQUIVO obrigatória está confirmada apenas pela ausência de um arquivo autônomo**. Existem duas **colisões confirmadas de identidade** (020 e 022), uma distribuição transversal da unidade 021 e um risco jurídico grave em DC34. A tabela não substitui cruzamento final com o **edital oficial literal e suas retificações**.

### Próximo passo técnico e editorial

1. Verificar a existência de alterações posteriores no acordo e incluir a regra específica de suspensão cautelar temporária na conferência do RICD.
2. Encerrar revisão integral de todas as remissões do DC34, com prioridade às competências punitivas e prazos, e produzir proposta consolidada de correção **sem editar o artigo nesta fase**.
3. Executar cotejo exaustivo, arquivo por arquivo, dos demais 28 textos, seus itens, precedentes e regras especiais.
4. Amarrar matriz de 33 unidades ao **texto oficial literal do edital** e às retificações, separando exigência básica, específica e aprofundamento complementar.

**Estado após bloco 9:** matriz de **identidade** de 33 unidades publicada; cobertura temática **ainda não certificada**. Em DC34, novo erro crítico de quórum confirmado. Nenhum artigo de estudo alterado.


## Bloco 10: conferência da redação consolidada do Código, art. 18 e sanções (11/11/2026)

**Método:** confronto direto do arquivo `DC34 - codigo de etica e decoro parlamentar da camara.md` (306 linhas, artigo `art-5b41764164052519`) com os **arts. 7º a 18 da [Resolução 25/2001 consolidada oficial](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html)**, consultada nesta rodada, e o [Acordo 2025–2027](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/acordo-de-procedimentos-2025-2027/acordo-de-procedimentos-2025-2027/view). O escopo recaiu sobre **novas inconformidades materiais** que permaneceram após blocos 7–9. Jurisprudência e versão integral do Regulamento ainda exigem verificação posterior por dispositivo; nenhuma edição do artigo original foi feita.

### Não conformidades adicionais confirmadas

**NC-PL-014, CRÍTICO: art. 18, obrigações patrimoniais antigas ensinadas como vigentes.** `DC34 > ## 6. Declarações patrimoniais obrigatórias e prevenção de conflitos de interesse`, itens 1 e 2, diz que o parlamentar deve **reapresentar declaração 90 dias antes das eleições gerais no último ano da legislatura** e enviar **cópia anual do Imposto de Renda até 30 dias após o prazo fiscal**. A redação atual do **art.18, I e II**, dada pela Resolução 2/2011, apresenta apenas: (I) **Autorização de Acesso aos Dados das Declarações de Ajuste Anual do IRPF e retificações**, ao assumir mandato e quando solicitada pelo órgão competente; (II) **declaração de impedimento** no início da apreciação de matéria de interesse patrimonial direto e específico. Há regras de autuação, cópia enviada ao TCU e sigilo (§§1º–4º). **Esses dois deveres temporais que o artigo ensina como texto vigente não figuram no art.18 consolidado**, e não devem ser apresentados como exigências deste Código. Conferir legislação autônoma antes de declarar que jamais existam outras obrigações em outra fonte; a presente conclusão é sobre **atribuição ao art.18 do Código**.

**NC-PL-015, IMPORTANTE: art. 18, documento substituído.** O texto DC34 diz genericamente «apresentação de declaração de bens e rendas à Mesa ao assumir o mandato» e «cópia das declarações de bens e rendas ao TCU», em vez da fórmula consolidada **Autorização de Acesso aos Dados das Declarações de Ajuste Anual do IRPF**. A distinção entre documento/autorizações é essencial para evitar itens literalistas. Reescrever cuidadosamente, sem suprimir a regra de remessa do art.18, §2º.

**NC-PL-016, IMPORTANTE: desfecho automático indevido na censura e proporção da pena.** A nota DC34 afirma no caso de ofensa verbal recíproca: «a simples ofensa mútua... **sendo vedada a cassação** de mandato para conduta apenável por censura». A prescrição de penas do Código exige **tipificação e apuração dos fatos efetivamente verificados**; o art.4º, VI, trata de irregularidades graves que afetem dignidade da representação e art.10, §2º autoriza requalificar penalidade conforme os fatos. A regra didática absoluta «vedada» vai além do exemplo descrito sem delimitar circunstâncias. **Classificação: risco de generalização, não erro normativo matematicamente comprovado**; examinar jurisprudência e aplicação antes de corrigir.

### Conferências positivas delimitadas e alerta temporal

- **CF/Code, sanções:** os arts.11,12,13,14 estabelecem mecanismos distintos, como já descrito em blocos anteriores. Em especial, art.12, §1º: defesa na censura escrita **5 dias úteis**; art.11, parágrafo único: recurso contra censura verbal em **2 dias úteis**; art.12, §2º: recurso contra censura escrita em **2 dias úteis**. Esses prazos **não aparecem suficientemente no quadro da nota** e devem ser incluídos na correção futura, sem confundir com defesa de 10 dias úteis do rito grave.
- **Código art.8º §3º:** prazos do Conselho são contados **em dias úteis**, inclusive recurso e vista, e **suspensos no recesso**, ressalvada convocação extraordinária constitucional. Este princípio deve preceder todas as tabelas temporais.
- **Art. 10 e requalificação:** o Código autoriza avaliar sanção mais ou menos grave conforme fatos apurados; evitar equivalências automáticas entre descrição simplificada de uma conduta e pena final sem verificar concurso de fatos.
- **Atualização do acordo:** a consulta pública encontrou **registro oficial de reunião de 29/04/2026** em que a Presidência do Conselho invoca expressamente o acordo 2025–2027, item 6(a), para interpretação do sobrestamento de pauta. Fonte: [notas taquigráficas HTML da Câmara, reunião 29/04/2026](https://escriba.camara.leg.br/escriba-servicosweb/html/81826). Isso é evidência de uso operacional em 2026, **não certificação de ausência de modificações depois dessa data**.

### Backlog executável para futura correção do artigo

1. Atualizar seção de patrimônio: alinhar itens e exemplos ao **art.18 vigente**, retirando a atribuição indevida de obrigações de 90 dias pré-eleição e de entrega anual a esse artigo.
2. Separar prazos e decisões para **censura verbal, censura escrita, suspensão de prerrogativas, suspensão de mandato e perda de mandato**, com instância competente, defesa, recurso e prazo.
3. Corrigir remissões a art.7, art.9, art.13, art.14, art.16 e incluir o princípio do art.8º, §3º.
4. Revisar quadro geral, **todos os nós do Mermaid** e o caso progressivo; conferir todos os enunciados C/E após as correções previstas, mesmo os antes corroborados.
5. Validar o texto final contra Código, Regulamento e Acordo 2025–2027 com referência específica para cada regra. **Fase 1 autoriza apenas diagnosticar; artigo permanece intocado**.

**Estado:** DC34 ainda com erros críticos de natureza **normativa e temporal**, inclusive **art.18**. Não declarar auditoria integral da matéria concluída nem o artigo pronto para memorização. A matriz de 33 unidades e a análise dos outros 28 arquivos permanecem parcialmente concluídas.


## Bloco 11: pacote de correção proposto para DC34 e revisão dirigida de CPI/DC35 (11/11/2026)

### 11.1 Especificação de reparos para artigo 34: **não executar na Fase 1**

Este pacote consolida os achados NC-PL-001 a NC-PL-016, com critérios de verificação e efeito em cada parte de `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md`. **É uma proposta de alteração, não uma alteração feita.**

| Trecho ou estrutura | Reparação proposta | Critério de aceitação / fonte |
| --- | --- | --- |
| `## 3`, matriz de penalidades | Explicitar cinco efeitos práticos das quatro famílias de sanção: censura verbal, censura escrita, suspensão de prerrogativas, suspensão temporária do mandato e perda. Para cada um: infração, proponente, órgão julgador, quórum, prazo de defesa, recurso e fundamento | Código de Ética, arts. 4º–5º, 10–14; nunca transferir o quórum do Plenário para o Conselho |
| `## 4`, composição do Conselho | Substituir `Corregedor com voz e voto` por participação **sem voto**, conferir as regras de designação/impedimentos e seus parágrafos corretos; recuperar a lista integral de impedimentos | Código, arts. 7º e 9º; RICD art. 21-E |
| `## 5`, legitimidade | Corrigir remissão de representação popular para art. 9º, distinguindo cidadão → Mesa de partido/Mesa → Conselho | Código arts. 9º, 13 e 14 |
| `## 5`, defesa, instrução, parecer | Substituir `5 sessões, 5 testemunhas` por **10 dias úteis, até 8 testemunhas** no rito do art.14; discriminar **30/40 dias úteis de instrução**, **10 dias úteis de parecer**, recurso de **5 dias úteis** e eventuais prazos específicos do Acordo; separar o prazo de **5 dias úteis para novo relator no art.16, §4º** | Código art.14, §4º e art.16; Regulamento 2001 apenas na parte compatível; Acordo 2025–27 |
| `## 5`, votação colegiada | Explicitar **maioria simples com presença de maioria absoluta** para votação de parecer no Conselho segundo Acordo do biênio; distinta de maioria absoluta exigida em decisões sancionatórias finais do Plenário nas hipóteses legais | Acordo 2025–27, item 5; Código arts.13 e 14 |
| `## 5`, prazo máximo e pauta | Retificar **60/90 dias úteis**, somente para sanções referidas no art.16; excluir censura do intervalo que o dispositivo não abrange; corrigir **2 sessões ordinárias** para inclusão na pauta; discriminar marco inicial | Código art.16 |
| `## 6`, dados fiscais e impedimento patrimonial | Substituir deveres atribuídos erroneamente ao art.18 (declaração 90 dias antes de eleições e envio anual de IR até 30 dias) pela **autorização de acesso aos dados de IRPF** e pela **declaração de impedimento** no interesse patrimonial direto, com regras de sigilo, juntada e remessa | Código art.18 consolidado; se houver dever adicional previsto em lei diversa, identificar a lei separadamente |
| `## 7`, tabela de órgãos | Remover atribuição de voto ao Corregedor; alinhar função de Corregedoria/Conselho/Procuradoria com Código e RICD vigentes | Código art.9º, §4º; RICD arts. 21-E a 21-G |
| Fluxograma `flowchart TD` | Reconstruir como **ramos por espécie de penalidade**, não cadeia única; consertar os nós F, G, I, J e O: prazos, número de testemunhas, quórum do Conselho e pauta; guardar reserva de jurisdição nos pedidos de sigilo | Código/Regulamento/Acordo; renderizar e verificar se cada conexão expressa uma transição legal possível |
| Seis itens C/E | Reler comentários e verificar se a revisão do artigo alterou fundamentos. Gabaritos principais mantidos provisoriamente; Q3/Q4 tiveram referências complementares cotejadas no bloco 8 | Não declarar “validado” até revisão de toda a nota, de cada norma e de precedentes de sigilo |

**Sequência de reparação futura:** (1) construir matriz de fontes por penalidade; (2) corrigir tabelas e narrativa; (3) reconstruir fluxograma; (4) conferir seis questões e exemplos; (5) checar links, renderização e remissões; (6) obter validação independente antes de remover o alerta “não confiável para prazos e procedimentos”.

### 11.2 Artigo DC35: CPI, checagem independente seletiva

Arquivo efetivamente recuperado do GitHub: `3 - Materias/Direito Constitucional/35 - comissoes parlamentares de inquerito poderes e limites.md` (`art-25e3bd6ae37991f6`, 262 linhas). Lidos integralmente a seção de seis questões inéditas e comentários e passagens de criação, duração, sigilo, garantias. Comparado com o [RICD oficial, art. 35 e §§ 1º–6º](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) e com a [jurisprudência STF, MS 23.452, disponível no portal oficial `A Constituição e o Supremo`](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=5&abrirBase=CF). **Não é validação exaustiva de todo o artigo ou de todos os precedentes citados**.

**NC-PL-017, CRÍTICO: órgão competente para prorrogação de CPI.** Em `DC35 > ## 1 > ### C. Prazo certo e prorrogação regimental` o artigo registra que CPI de até 120 dias pode ser prorrogada “**mediante deliberação da própria comissão, ou por prazo determinado mediante requerimento da maioria de seus membros ou de um terço da Câmara**”. O texto vigente do **RICD art.35, §3º** diz: comissão tem **120 dias, prorrogáveis por até metade, mediante deliberação do PLENÁRIO**. A redação do artigo inventa caminhos adicionais e atribui competência a órgão diverso. Reparação futura: transcrever o mecanismo do art.35 §3º sem acrescentar exceções não documentadas; manter separado o requisito de criação (um terço) do de prorrogação (deliberação do Plenário). **Alerta preventivo para estudo de prazos de CPI.**

**A-PL-040, positivo localizado, sigilo.** `DC35 > ## 2–3` distingue quebra de **dados/registros telefônicos pretéritos** da **interceptação de comunicação em curso**, sujeita a reserva de jurisdição. O **MS 23.452** corroborou que quebra de sigilos bancário/fiscal/telefônico pela CPI exige causa provável, motivação contemporânea, necessidade e nexo com fatos investigados; uma decisão monocrática de relator não supre deliberação do colegiado. A orientação oficial da Receita Federal também destaca a exigência de motivação e determinação do objeto. Fontes: [STF, art. 5º](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=5&abrirBase=CF); [Receita Federal: CPIs e sigilo fiscal](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/sigilo-fiscal/CPIs-criadas-pelo-congresso-nacional-e-suas-casas).

**Questões inéditas de DC35:** seis itens e seis comentários lidos. Gabaritos publicados: 1 ERRADO (busca domiciliar), 2 CERTO (direito da minoria), 3 CERTO (garantias do investigado), 4 ERRADO (sigilo por relator sozinho), 5 CERTO (condução coercitiva de governador em fiscalização de assunto estadual), 6 ERRADO (relatório de CPI não vincula MP). **Verificados diretamente apenas os núcleos normativos de Q1 e Q4** no STF/CF/RICD; Q2/Q3/Q5/Q6 ainda requerem cotejo jurisprudencial e de particularidades de caso. Não classificar os seis gabaritos como integralmente validados.

**Próxima ação:** aprofundar em DC35 o texto do art.35, jurisprudência sobre Chefes do Executivo estadual, direito de minoria e condução coercitiva, além de conferir Q2/Q3/Q5/Q6. Depois auditar DC36 e DC37 com a mesma granularidade. A auditoria segue em Fase 1 e nenhum artigo de estudo foi alterado.


## Bloco 12: jurisprudência de CPIs/DC35, Súmula 5/DC36 e controle externo/DC37 (11/11/2026)

**Método:** recuperação novamente dos artigos DC35 (`art-25e3bd6ae37991f6`), DC36 (`art-da9726a3c994a6c6`) e DC37 (`art-5df4de59dcebb840`) do GitHub; leitura dos 6 itens numerados de DC35 no bloco anterior, de passagens controversas de DC35–37 nesta rodada; cotejo independente de STF, Constituição e informativo oficial recente. **Este bloco acrescenta verificações específicas, não constitui certificação integral de nenhum dos três artigos nem de todos os itens de DC36/DC37.**

### DC35: jurisprudência e novos limites de interpretação

- **A-PL-041, corroborado:** STF [MS 24.831 e MS 26.441 no art.58 da Constituição e o Supremo](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=58&abrirBase=CF) confirma direito público subjetivo da minoria, que não depende de aprovação de conveniência pelo Plenário, se preenchidos um terço, fato determinado e prazo certo. **Q2 (CERTO)** tem núcleo jurisprudencial corroborado.
- **A-PL-042, corroborado e delimitado:** [ADPF 395](https://portal.stf.jus.br/peticaoInicial/verPeticaoInicial.asp?base=ADPF&numProcesso=395) e [ADPF 444](https://portal.stf.jus.br/peticaoInicial/verPeticaoInicial.asp?base=ADPF&numProcesso=444) proíbem condução coercitiva **de investigado/réu para interrogatório**. Não decidiram genericamente todas as outras situações de condução ou oitiva de testemunhas, distinção que precisa ser mantida. **Q3 (CERTO)**, sobre direito ao silêncio, assistência de advogado e não prestação de compromisso pelo investigado, é **corroborada no núcleo**, mas não certifica toda a redação sobre dever de comparecimento em contextos distintos.
- **A-PL-043, ressalva à Q5:** [STF ADPF 848, liminar e notícia institucional de 21/06/2021](https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=467969&ori=1) registra suspensão de convocações coercitivas de governadores por CPI federal, em respeito a autonomia federativa. **Q5 (CERTO)**, restrita a governador e receitas estaduais, é consistente **com essa decisão**, mas o arquivo generaliza a mesma fórmula também a prefeitos e descreve as ADI 4.298/ACO 730 sem cotejo do inteiro teor. Confirmar decisões e diferença entre investigar fatos relacionados à União e compelir chefe de outro Executivo a comparecer.
- **A-PL-044, corroborado no dispositivo:** CF art.58 §3º dispõe encaminhamento das conclusões ao Ministério Público; independência funcional do MP e titularidade da ação pública pelos arts.127 §1º e 129 I impedem a conclusão de que CPI determine denúncia automática. **Q6 (ERRADO)** tem núcleo constitucional coerente. Conferência de aplicação processual completa ainda pendente.
- **A-PL-045, ATUALIZAÇÃO JURISPRUDENCIAL de 2026:** [Informativo 1210 do STF, 08/04/2026, MS 40.799/DF julgado em 26/03/2026](https://www.stf.jus.br/arquivo/informativo/documento/informativo1210.htm) enfatiza duração certa, repudia prorrogações sucessivas/automáticas da comissão parlamentar mista de inquérito e aponta regras regimentais próprias e deliberação da Casa, sem atribuir ao Judiciário controle indiscriminado de atos interna corporis. **Não transpor automaticamente as regras da CPMI para a CPI exclusiva da Câmara:** RICD art.35 §3º continua sendo fonte para a regra de 120 dias e prorrogação até metade por deliberação do Plenário (NC-PL-017).

### DC36: referência jurisprudencial materialmente invertida

**NC-PL-018, CRÍTICO, fonte do STF apresentada ao contrário.** O arquivo DC36 afirma na seção `## 2. O critério da Iniciativa > ### O vício de iniciativa e o STF (Súmula 5)`, no comentário da **Questão 2** e nas **Fontes**, que **“Súmula nº 5 do STF e Tema 22 da Repercussão Geral”** ensinam que a sanção presidencial **não convalida** vício de iniciativa. O [enunciado literal da Súmula 5 no próprio STF](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1318) é precisamente: **“A sanção do projeto supre a falta de iniciativa do Poder Executivo.”** O portal oficial também registra expressamente a **superação desse entendimento**, citando ADI 1197 e AR 1753; hoje a sanção não convalida o vício formal de iniciativa. Portanto:
1. **Conclusão jurídica atual do artigo é correta** na questão da sanção e vício;
2. **Fundamentação por Súmula 5 como se ela enunciasse essa conclusão é falsa**;
3. futura correção deverá ensinar explicitamente **“Súmula 5: teor histórico superado; jurisprudência atual: sanção não convalida”**, com precedente contemporâneo, em vez de usar o enunciado como autoridade favorável;
4. **Referência ao Tema 22 precisa de verificação separada** antes de ser mantida ou substituída; não aceitar associação por repetição editorial.
O item C/E Q2 (**ERRADO**, conforme comentário) não foi revertido por este achado: o erro é sua **citação jurídica**, não necessariamente o sentido da resposta.

### DC37: limites das medidas do TCU

- **A-PL-046, precisão:** a [CF art.71 §§1º–2º](https://www4.planalto.gov.br/legislacao/legis-federal/constituicao) determina sustação de contrato irregular diretamente pelo Congresso e atuação do TCU depois de 90 dias sem as medidas pertinentes, utilizando o texto **“o Tribunal decidirá a respeito”**. O artigo DC37 usa na seção de contratos e no caso progressivo linguagem de `sustar o contrato` e no quadro final `paralisação/anulação da avença contratual bilateral`. Essa última expressão **não decorre literalmente do §2º**; evitar representar anulação como consequência constitucional automática. Também pode haver competências cautelares dos Tribunais de Contas, sujeitas a jurisprudência; examinar caso concreto antes de declarar ilegal **toda** medida cautelar imediata do TCU.
- **A-PL-047, necessidade de granularidade:** as seis questões de DC37 têm gabaritos visíveis no repositório, mas **não foram cotejadas individualmente** nesta rodada. Em particular, separar efeitos de parecer prévio, julgamento de contas presidenciais, controle de contas municipais e contratos.
  
**Estado:** revisão específica adicionou 1 erro crítico de referência em DC36 (NC-PL-018); 4 núcleos de itens DC35 receberam cotejo ou corroboração, com reservas expressas. Distinguir rigorosamente norma, precedente e interpretação editorial. Todos os artigos originais permanecem intactos. Próximo: conferir `Tema 22` e examinar cada item DC36/DC37, além de finalizar jurisprudência de Q5/DC35.


## Início das correções autorizadas: execução parcial (11/11/2026)

**Mudança de fase por solicitação do usuário:** as seções anteriores documentam a Fase 1, que proibia edições naquele momento. A partir deste registro começaram correções pontuais nos artigos, sem declarar encerramento ou validação integral da auditoria.

- **DC35, NC-PL-017, corrigida no texto:** substituída a competência equivocada da própria CPI pela **deliberação do Plenário** para prorrogação de até metade dos 120 dias (RICD, art. 35, § 3º); ajustado o resumo dos requisitos. Corrigida também a exceção ao limite de cinco CPIs para mencionar **projeto de resolução com o mesmo quórum de apresentação do caput** (art. 35, § 4º). Commit: `700ce615a443d34e212fdb5d63f15449fb2e2cf5`.
- **DC34, NC sobre voto do Corregedor, corrigida pontualmente:** indicação de participação **com voz, sem voto**, conforme art. 9º, § 4º, do Código de Ética consolidado. Foi inserido aviso explícito de que prazos, sanções, fluxo e declarações patrimoniais seguem em revisão e não devem ser memorizados como versão validada. Commit: `04372d05b1fb3c412690164496ffc755ff9d7e3e`.

**Estado das demais NC-PL, itens C/E, Mermaid e remissões de DC34:** pendentes. As correções acima não certificam os artigos completos. Fontes primárias: [RICD, art. 35](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) e [Código de Ética, art. 9º, § 4º](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html).


## Bloco 13: Tema 22 do STF e auditoria dos 12 itens DC36/DC37 (11/11/2026)

**Método:** recuperados os enunciados, gabaritos e comentários de **6 questões do DC36** e **6 questões do DC37** diretamente do repositório público; realizado cotejo normativo seletivo com **CF arts. 47, 49, 50, 60, 62, 67, 69, 70 e 71** e consulta à página oficial do STF da Súmula 5 e ao processo paradigma oficial do **Tema 22**. Este é **exame individual de coerência das doze questões**, não auditoria completa de toda a fundamentação e jurisprudência de ambos os artigos.

### Achado jurídico conclusivo: Tema 22 é outro assunto

**NC-PL-019, CRÍTICO: número de repercussão geral totalmente errado (DC36).** Nas seções `O vício de iniciativa e o STF`, `Questão 2 > Comentário` e `Fontes primárias e jurisprudência`, DC36 atribui ao **Tema 22 da repercussão geral** a conclusão de que sanção presidencial não sana vício de iniciativa. O [STF, Tema 22, RE 560.900](https://portal.stf.jus.br/jurisprudenciarepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=2551965&numeroProcesso=560900&numeroTema=22) define **restrição à participação em concurso público de candidato que responde a inquérito ou ação penal**. O assunto **não guarda relação com iniciativa privativa de leis**. Deve ser removido da fundamentação da questão e da fonte do artigo, sem criar número substituto sem pesquisa de precedente específico. Fonte oficial comprova diretamente a divergência.

**NC-PL-018, confirmação complementar:** [STF, aplicação da Súmula 5](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1318) registra texto histórico **“A sanção do projeto supre a falta de iniciativa do Poder Executivo”**, já superado; a página apresenta **ADI 1.197** e **AR 1.753** como decisões explicando a ausência de convalidação. **Recomendação:** conservar a conclusão jurídica atual da Q2 (ERRADO), retirar a suposta sustentação no Tema 22 e apresentar Súmula 5 como entendimento histórico superado, e não como autoridade favorável.

### Matriz das questões DC36

| Q | Gabarito publicado | Análise e condição |
| --- | --- | --- |
| 1 | CERTO | **Corroborado** pela CF art.60, §§2º–3º (PEC, 2 turnos, 3/5, Mesas, sem sanção) |
| 2 | ERRADO | **Gabarito corroborado**, comentário **normativamente defeituoso** por Súmula 5 e Tema 22: NC-PL-018/019 |
| 3 | ERRADO | **Corroborado** pela CF art.69: lei complementar exige maioria absoluta, e não simples |
| 4 | CERTO | **Compatível com o exemplo de tratados aprovados por decreto legislativo**. **Ressalva:** a expressão “a fiscalização de atos do Poder Executivo” é ampla; fiscalizar também ocorre por comissões, requerimentos e outros mecanismos, nem toda fiscalização é formalizada por decreto legislativo. Reduzir o alcance no comentário/enunciado ou demonstrar que só se referem às matérias exclusivas materializadas em decreto legislativo. **Não inverter sem revisão semântica do item completo** |
| 5 | ERRADO | **Corroborado** por CF art.67 (projeto de lei pode ser objeto de nova proposta com maioria absoluta de qualquer Casa) versus art.60 §5º (PEC rejeitada/prejudicada não pode ser objeto de nova proposta na mesma sessão) |
| 6 | CERTO | **Corroborado** por CF art.62 §12: PLV com alterações encaminhado para sanção/veto. O comentário deve evitar dizer que sanção alcança apenas «inovações»: o procedimento submete o **projeto de lei de conversão**, não uma lista autônoma de emendas, à apreciação presidencial |

### Matriz das questões DC37

| Item | Gabarito publicado | Análise e condição |
| --- | --- | --- |
| 1 | ERRADO | **Corroborado**: CF art.50 inclui Ministros e titulares especificados, não Presidente da República na convocação coercitiva |
| 2 | CERTO | **Corroborado**: CF art.50 §2º: prazo de 30 dias e crime de responsabilidade por recusa, omissão de resposta e informações falsas |
| 3 | ERRADO | **Corroborado no núcleo**: CF art.31 §2º prevê 2/3 da Câmara Municipal para afastar parecer sobre contas do prefeito; não se estende diretamente ao Congresso e TCU. Pendente conferir regra específica de votação em sessão conjunta citada no comentário |
| 4 | CERTO | **Corroborado** por CF art.49 V, sustação de atos normativos exorbitantes. Recomenda-se remissão ao decreto legislativo no ato final, sem generalizar a todo instrumento de fiscalização |
| 5 | ERRADO | **Corroborado** por CF art.71 §§1º–2º: Congresso tem atribuição primária para sustar contratos, com 90 dias como marco para deliberação do TCU. **Ressalva:** comentário e exemplos do DC37 não devem afirmar que toda cautelar preventiva do TCU seria proibida sem prazo de 90 dias; distinguir cautelar de sustação definitiva |
| 6 | CERTO | **Corroborado no núcleo** por RICD arts.60–61 e CF art.71 IV: comissão pode ensejar inspeções/auditorias. Pendentes pormenores regimentais e a proposição absoluta «não pode se recusar» |

**Resultado desta rodada:** 12/12 enunciados lidos e contrastados com seus pontos jurídicos centrais. **Não foi confirmada necessidade de inversão de gabarito**, mas ainda há **reservas de precisão** em DC36 Q4/Q6 e DC37 Q3/Q5/Q6. Duas referências críticas da DC36 Q2 estão erradas e exigem correção futura. **Não confundir verificação seletiva de núcleo com certificação de todos os fundamentos ou do artigo inteiro.**

### Próxima etapa

Reexaminar DC37 sobre cautelares do TCU mediante precedentes atuais e completar regras de sessões conjuntas da Q3; aprofundar literalidade e compatibilidade semântica da DC36 Q4. Em seguida retomar revisão integral sequencial DC11–33, considerando que referências jurisprudenciais erradas foram detectadas mesmo quando gabaritos estavam corretos. **Fase 1: nenhum artigo de estudo alterado.**


### Execução adicional em DC34 (11/11/2026)

Commit `2aee7a108b444a595968fbbe0b84663ba13c922b`: 19 substituições localizadas, incluindo impedimentos do art. 7º, §§ 2º/7º; atualização de remissões; censuras dos arts. 11–12 e seus recursos/defesa; distinção de ritos por sanção; correção dos 10 dias úteis e até 8 testemunhas no rito grave; deliberação do Conselho; prazos do art. 16; substituição completa da seção patrimonial pelos deveres do art. 18 consolidado; correções sobre atuação do Corregedor e generalizações de casos. **Permanecem pendentes a reconstrução do Mermaid, revisão exaustiva do art. 13/14 e todos os itens C/E, conferência de fontes e testes de renderização.** As correções feitas não autorizam marcar DC34 como integralmente validado.


## Bloco 14: cautelares do TCU e retomada do artigo DC11 (11/11/2026)

**Escopo realizado:** pesquisa em precedentes e decisões publicadas **pelo STF e TCU** sobre CF art.71; leitura dirigida das seções de contrato e do caso progressivo do `DC37`; recuperação do início e das classificações do `DC11 - proposicoes legislativas conceito e classificacao.md` (`art-0a6be439c28f517d`) e cotejo com [RICD oficial arts.100, 108, 109, 113 e 114](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html). **Não foi feita ainda revisão completa das questões e de todos os parágrafos de DC11**.

### DC37: distinção confirmada entre sustação constitucional e cautela

**NC-PL-020, IMPORTANTE/ALTO RISCO: generalização inconstitucional sobre poder cautelar do TCU.** A seção `DC37 > ## 5 > 5.2` e o `Caso 4` reduzem o regime de contratos à espera de **90 dias** e afirmam que **medida cautelar imediata** sobre contrato seria inválida porque a sustação pertence primeiro ao Congresso. A [página oficial STF sobre art.71](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=71&abrirBase=CF) reúne **MS 24.510, MS 25.149, MS 33.092, MS 35.715 e MS 35.920** reconhecendo poder geral de cautela do TCU para impedir lesão ao erário e preservar decisões, observados proporcionalidade, devido processo e limites de competência. O [TCU, acórdão sobre cautela e execução de contratos](https://pesquisa.apps.tcu.gov.br/documento/acordao-completo/2391%252F2018/%2520/DTRELEVANCIA%2520desc%252C%2520NUMACORDAOINT%2520desc/16) distingue **sustação constitucional definitiva**, atribuída inicialmente ao Congresso, de **determinação cautelar à Administração para suspender/adequar a execução** a fim de evitar dano.

**Precisão necessária:** a CF art.71, §§1º–2º mantém regime de **sustação contratual** sob atuação inicial do Congresso e regra de 90 dias; isso **não proíbe toda medida preventiva anterior** relacionada à execução do contrato. No `Caso 4`, a expressão `anulação e sustação` como decisão direta do TCU introduz uma **segunda razão** para reprovação do ato além da ausência de prazo: o STF afirma no **MS 23.550** que TCU não dispõe de poder para **anular diretamente** contrato, embora possa determinar que autoridade administrativa promova anulação se cabível. **Não inverter automaticamente o juízo sobre o caso concreto**, porque o enunciado menciona anulação direta; separar as duas competências e explicitar que cautelares próprias podem ser legítimas. Reparação futura deve reescrever explicação, caso 4, heurística e quadro do final para evitar o absoluto «nenhuma medida antes de 90 dias».

**A-PL-048, suporte de fonte atual:** [TCU, Acórdão 1160/2024-Plenário](https://pesquisa.apps.tcu.gov.br/doc/acordao-completo/1160/2024/Plen%C3%A1rio) reafirma distinção entre determinação administrativa de correção e competência inicial do Congresso para sustação. O [STF, MS 35.920](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=71&abrirBase=CF) também esclarece limites da análise prévia de contratos e do poder cautelar. Conservar ambos para separar sustação, cautela, recomendação e decisão final.

**A-PL-049, Q3/DC37:** a [página oficial do Congresso sobre contas presidenciais](https://www.congressonacional.leg.br/materias/materias-orcamentarias/contas-da-presidencia) confirma fluxo **contas anuais → parecer prévio do TCU → parecer da CMO e projeto de decreto legislativo → Mesa do Congresso e deliberação parlamentar**. O núcleo do gabarito Q3 permanece correto: não se transplanta o quórum municipal de dois terços ao julgamento de contas do Presidente. **Permanece pendente** validação literal do quórum em sessão conjunta afirmado no comentário do artigo, por leitura do RCCN aplicável e exceções.

### DC11: conferência normativa inicial, pontual

**A-PL-050, corroborado:** o [RICD art.100, caput e §1º](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) define proposição como matéria sujeita à deliberação da Câmara e enumera PEC, projeto, emenda, indicação, requerimento, recurso, parecer e proposta de fiscalização e controle. O tratamento de DC11 **distingue corretamente**, na introdução e tabela, essas **proposições regimentais** dos **produtos normativos do art.59 da CF**. A classificação do texto-base é sustentável.
 
**A-PL-051, corroborado:** o RICD art.109 distingue projetos de **lei** (com sanção), **decreto legislativo** (competência exclusiva, sem sanção), **resolução** (competência privativa da Câmara); o DC11 ensina as três fronteiras nos exemplos centrais. Ressalvar regimes especiais e não generalizar «toda resolução» a todas as Casas.

**A-PL-052, corroborado:** o RICD art.113 diferencia indicação a **outro Poder**, de iniciativa exclusiva, e sugestão a **comissão**, com prazo de **20 sessões prorrogável a critério da Presidência da Comissão** para o parecer, ponto corretamente exposto pelo DC11. O art.114 prevê requerimentos decididos pelo Presidente; estes não são, por natureza, sempre levados ao Plenário. O foco pedagógico da nota encontra respaldo direto.

**Limitação expressa do DC11:** inspeção inicial das seções de conceito, classificações e indicações. Ainda precisam ser lidos e cotejados **todos os itens C/E, gabaritos, autoria e trâmite digital, emendas, recursos, hipóteses de retirada/arquivamento e todos os exemplos**. Não declarar DC11 validado.

**Estado:** erro/risco significativo identificado no argumento do Caso 4 de DC37, com sustentação explícita na jurisprudência de cautelares; DC11 retomado com pontos normativos centrais corroborados. Todos os artigos originais continuam sem alteração. Próxima rodada: concluir DC11, incluindo a análise de suas questões e hipóteses regimentais, e cotejar a regra de votos separados na sessão conjunta aplicada a contas presidenciais.


### Execução: reestruturação do diagrama e dos prazos do DC34 (11/11/2026)

Commit `14ded4f9997664e9aa48d6573ff898e4b8f791a0`: fluxograma linear substituído por ramos de censura verbal, censura escrita, suspensão de prerrogativas e suspensão/perda do mandato; inseridos prazos específicos e recursos dos arts. 11–16. Corrigida a atribuição indevida do prazo do art. 16, § 4º, à rejeição de parecer: o dispositivo disciplina a substituição por atraso do relator. Atualizada a matriz de penalidades e completada a lista de prerrogativas do art. 13, VI.

**Situação:** alterações registradas; conferência visual no site, revisão integral das seis questões, jurisprudência, exceções procedimentais e validação final do DC34 permanecem pendentes. Fonte: [Código consolidado, arts. 11–16](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html).


## Bloco 15: DC11, 13 itens C/E, e regra de votação das contas presidenciais (11/11/2026)

### Fontes efetivamente cotejadas

- [RICD vigente, Resolução 17/1989, arts.100–117 e 126–130](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), com inspeção dirigida dos arts.100, 102, 104, 105, 113, 114–117, 126, 129. 
- [Regimento Comum do Congresso, consolidação do Senado](https://legis.senado.leg.br/norma/561098/publicacao/36852069), art.43 (votos de deputados e senadores computados separadamente), arts.28 e 36, arts.104–106-D (veto).
- [Portal oficial do Congresso: atribuições e sessões conjuntas](https://www.congressonacional.leg.br/institucional/atribuicoes), que esclarece votação separada das Casas.

**Escopo:** lidos o arquivo `3 - Materias/Direito Constitucional/11 - proposicoes legislativas conceito e classificacao.md` e seus **13 enunciados/gabaritos**: 8 do refinamento `CAM-PL-016`, e 5 da seção final geral `CAM-PL-001`. A conferência documental concentrada em normas expressamente citadas **não cobre toda a jurisprudência, cada remissão secundária nem o edital oficial**. Nenhum artigo de estudo alterado.

### Matriz de questões do DC11: refinamento CAM-PL-016

| Item | Gabarito publicado | Conferência pontual |
| --- | --- | --- |
| 1, indicação substitui iniciativa | ERRADO | RICD art.113 I: apenas **sugere** envio de projeto por Poder titular |
| 2, informação e convocação têm decisor idêntico | ERRADO | RICD 115/116 (Presidente, ouvida Mesa) × 117 II (Plenário) |
| 3, requerimento não pergunta intenções futuras | CERTO | Art.116 II–III: objeto de ato/fato, não conselho ou indagação de propósito |
| 4, prazo 5 sessões do despacho é idêntico aos 30 dias de resposta | ERRADO | Art.115 (5 sessões) × art.116 e CF50 §2º (30 dias) |
| 5, voto do relator pode divergir do parecer final | CERTO | Arts.126/129: posição individual não substitui conclusão colegiada |
| 6, veto parcial de expressão isolada | ERRADO | CF art.66 §2º: veto parcial atinge unidade integral artigo/parágrafo/inciso/alínea |
| 7, derrubada do veto por contagem única de congressistas | ERRADO | CF art.66 §4º e RCCN art.43: votos separados por Casa |
| 8, destaque de veto prescinde de aprovação plenária | CERTO | RCCN art.106-D: apresentação por liderança sob limites proporcionais, sem aprovação plenária |

### Matriz de questões gerais CAM-PL-001

| Item | Gabarito publicado | Conferência pontual |
| --- | --- | --- |
| 1, proposição abrange categorias além de projeto | CERTO | RICD art.100 caput e §1º |
| 2, indicação produz efeito de lei e substitui iniciativa | ERRADO | RICD art.113 e CF regras de iniciativa |
| 3, retirada invariavelmente decidida pelo Presidente após parecer favorável | ERRADO | RICD art.104 §1º: decisão somente do Plenário se já houver parecer favorável |
| 4, autoria coletiva e todos signatários autores | CERTO | RICD art.102 §§1º–4º |
| 5, projetos de iniciativa popular e de código sempre arquivados | ERRADO | RICD art.105 IV/VII, redação de 2022: exceções expressas |

**Resultado delimitado:** os **13 gabaritos estão compatíveis com os dispositivos centrais diretamente conferidos**. Não foi observada inversão inequívoca de resposta. A conformidade das 13 questões **não equivale à certificação integral da nota**, principalmente quanto a todas as condições e exceções espalhadas no texto.

### Achados adicionais do conteúdo DC11

- **A-PL-053, corroborado:** art.104 regula retirada por autor, deferimento pela Presidência com recurso, reserva ao Plenário após parecer favorável, e necessidade de **metade mais um dos subscritores** na iniciativa coletiva. O DC11 ensina essas condições e o exemplo de parecer favorável de modo correto.
- **A-PL-054, corroborado:** art.105 atualizado em 2022 inclui exceções para **iniciativa popular, códigos, tratados, contas presidenciais, projetos da espécie art.59 que não atravessaram três legislaturas completas** e outros casos. A explicação geral DC11 é compatível; manter enumeração completa quando a questão exigir literalidade.
- **A-PL-055, ressalva de norma histórica:** [RCCN consolidado art.106-D, inciso II, b](https://legis.senado.leg.br/norma/561098/publicacao/36852069) exibe a incongruência editorial literal **“de 6 (cinco) a 11 (onze) Senadores”**. DC11 não reproduz o número, e seu item 8 trata apenas da dispensa de aprovação plenária; **não é defeito do DC11**. Qualquer questão futura de proporcionalidade de destaques deve esclarecer o valor normativo efetivo com ato atualizado/consolidação antes de construir gabarito.
- **A-PL-056, possível sobreposição produtiva:** DC11 integra CAM-PL-001 e refinamento CAM-PL-016, com duas baterias independentes. Uma futura edição pode preservar os dois objetivos e sinalizar claramente qual avaliação mede cada competência, evitando contar 13 itens como se fossem prova única.

### Quórum do Congresso ao julgar contas presidenciais, relação com DC37 Q3

**A-PL-057, confirmado:** o **RCCN art.43** estabelece que os votos das duas Casas sejam sempre computados separadamente e o voto contrário de uma Casa importa rejeição da matéria. O **art.28 (1/6 por Casa)** trata apenas de quórum para **abrir a sessão**, **não** do quórum necessário para aprovar uma deliberação. O **art.36** prevê regra geral de discussão/votação em turno único. A CF art.47 estabelece como regra geral maioria de votos com presença da maioria absoluta dos membros.

**Ressalva relevante:** o comentário ao item 3 de DC37 afirma maioria simples dos presentes, respeitada maioria absoluta de presença em cada Casa; isto é **compatível com a regra geral**, mas para certificar a incidência integral sobre votação das contas anuais é preciso cotejar eventuais normas procedimentais especiais relativas ao parecer da CMO e projeto de decreto legislativo. A diferença entre **quórum de abertura (RCCN art.28)** e **quórum deliberativo** deve ficar expressa no material. **Q3 continua ERRADO quanto à tentativa de aplicar o quórum municipal de dois terços às contas da Presidência da República**, mesmo com a ressalva pendente sobre o rito da deliberação federal.

### Próximos passos

1. Examinar DC12 integralmente (iniciativa, CF art.61, legitimados, precedentes e todos os gabaritos) e conferir consistência da matriz 33 CAM-PL.
2. Concluir fontes subsidiárias e eventual norma especial sobre contas presidenciais antes de certificar a exposição de quórum no DC37.
3. Prosseguir com DC13 a DC33 de forma sequencial, sob a regra de **não atualizar os materiais até autorização para Fase 2/3**.

**Estado:** DC11 com **13 gabaritos verificados nos núcleos normativos** e nenhuma inversão confirmada. Fase 1 segue aberta; sem edições aos artigos.


### Execução: conferência dirigida de questões do DC34 (11/11/2026)

Commit `366059b43995a50fdc38eb371e046880cfc110c9`: revistos os enunciados e comentários das **seis questões C/E** frente aos dispositivos centrais dos arts. 4º, 5º, 7º, 12–14 e 16 da [Resolução nº 25/2001 consolidada](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html). Os seis gabaritos foram mantidos; aprofundados os comentários de Q1–Q3 e Q6, corrigida a remissão do recurso à CCJC de art. 14, § 4º, VIII para **VII**, e complementadas defesa, recursos e impedimentos de relatoria. Retirada a generalização indevida de vedação de recondução de qualquer membro do Conselho: a restrição de reeleição para o mesmo cargo na eleição seguinte consta no art. 7º, § 5º, para a direção do Conselho.

**Ainda pendentes:** conferência independente do Regulamento de 2001 e do Acordo 2025–2027, revisão de todas as exceções do fluxograma e validação visual da renderização; não declarar DC34 certificado integralmente. **Andamento: 2 dos 29 artigos da trilha receberam alterações; 0 dos 29 foram certificados em revisão integral.** A contagem de artigos modificados não corresponde a percentual de correção completa da auditoria.


## Bloco 16: iniciativa legislativa DC12, 14 itens C/E e precedentes STF (11/11/2026)

**Arquivo:** `3 - Materias/Direito Constitucional/12 - iniciativa legislativa sujeitos e limites.md` (`articleId: art-...`, recuperar da metainformação do próprio arquivo na atualização final), contendo `CAM-PL-002` e refinamento `CAM-PL-017`. Arquivo recuperado integralmente e seções de jurisprudência, iniciativa popular e **14 enunciados/gabaritos** lidas. Fontes independentes: [STF, Constituição e Supremo, art.61](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=61&abrirBase=CF), com o **Tema 917**, ARE 878.911; [STF, Tema 682, ARE 743.480](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4391271&numeroProcesso=743480&numeroTema=682); [CF atualizada na Câmara](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), especialmente arts. 51, 60–64, 93, 96, 127 e 165. **Cotejo dirigido dos núcleos, sem certificar todas as afirmações do arquivo ou todos os limites materiais/fiscais da legislação.**

### Correção confirmada dos precedentes, comparada a DC36

**A-PL-058, referência adequada:** `DC12 > A fronteira de maior valor: criar despesa...` corretamente atribui ao **Tema 917 (ARE 878.911)** a tese de que despesa imposta por lei parlamentar não gera, isoladamente, vício de iniciativa se a norma não cuidar de estrutura/atribuições de órgãos nem do regime de servidores. O precedente foi conferido na página do STF, que apresenta também decisões de 2024–2025 no mesmo sentido. Manter distinção entre **lei criadora de encargo material** e **lei que estrutura ministério ou altera regime de servidor**.

**A-PL-059, referência adequada:** `DC12 > Tema 682` corresponde ao [STF, ARE 743.480](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4391271&numeroProcesso=743480&numeroTema=682), cuja tese exclui **reserva geral de iniciativa de leis tributárias, inclusive renúncia fiscal**. A nota corretamente adverte que ausência de vício de iniciativa não elimina exame da LRF e demais limites. **Não transportar Tema 682 a projetos que modifiquem matérias orgânicas de iniciativa reservada.**

### Matriz de 6 itens gerais `CAM-PL-002`

| Item | Gabarito no arquivo | Checagem delimitada |
| --- | --- | --- |
| 1, despesa por projeto parlamentar | CERTO | Corroborado: STF Tema 917, sem reserva automática |
| 2, presidente teria monopólio de lei tributária | ERRADO | Corroborado: STF Tema 682 e alcance territorial da CF 61 §1º II b |
| 3, apoio para lei popular 1%/5 Estados/0,3% | CERTO | Corroborado: CF art.61 §2º; apoio cumulativo e apresentação à Câmara |
| 4, remuneração dos servidores da Câmara dependeria de iniciativa presidencial | ERRADO | Corroborado: CF art.51 IV: Câmara tem iniciativa de lei respectiva |
| 5, emendas a projetos presidenciais com limites de despesa | CERTO | Corroborado no núcleo: CF art.63 I e exceções orçamentárias constitucionais; pertinência temática exige exame contextual adicional |
| 6, lei popular e PEC popular teriam mesma previsão expressa | ERRADO | Corroborado: CF art.60 não prevê PEC popular federal no padrão do art.61 §2º |

### Matriz de 8 itens de `CAM-PL-017`

| Item | Gabarito no arquivo | Checagem delimitada |
| --- | --- | --- |
| 1, proposição Presidente/STF/tribunais superiores inicia na Câmara | CERTO | CF art.64 |
| 2, art.64 abrange PGR | ERRADO | Art.64 não o menciona expressamente, ainda que PGR esteja no art.61 |
| 3, comissão tem iniciativa e parecer não equivale a aprovação | CERTO | CF art.61 caput e competências regimentais |
| 4, deputado pode propor Estatuto da Magistratura | ERRADO | CF art.93: iniciativa do STF para lei complementar |
| 5, órgão com proposta setorial de orçamento inicia LOA perante Congresso | ERRADO | CF art.165: iniciativa do Executivo no projeto da LOA |
| 6, projeto de iniciativa reservada é imune a qualquer emenda | ERRADO | Emendas são possíveis com limites de art.63/pertinência |
| 7, iniciativa popular federal é proposta enviada à Câmara, sem aprovação direta | CERTO | CF art.61 §2º |
| 8, Câmara fixa vencimentos de seus servidores por resolução sem lei | ERRADO | CF art.51 IV: iniciativa de **lei** para remuneração |

**Resultado:** 14/14 gabaritos compatíveis com as regras constitucionais centrais consultadas; **nenhuma inversão detectada**. Não há novo erro normativo crítico confirmado nesta rodada em DC12. **Reservas:** testar em revisão final as exceções específicas para limites de emendas, reserva de iniciativa de órgãos autônomos e as descrições de ações do Congresso, para evitar generalizações de casos práticos.

### Progresso medido, sem precisão artificial

- **Inventário estrutural da trilha:** 29/29 arquivos já identificados e abertos (100%).
- **Conferência individual dos enunciados C/E das unidades:** DC11 (13), DC12 (14), DC34 (6), DC35 (6), DC36 (6), DC37 (6): **51 enunciados lidos/confrontados em diferentes graus**, alguns com reservas específicas; isso **não** significa 51 itens integralmente certificados.
- **Pendência principal:** DC13–33 (21 arquivos) e DC06/DC10 (2 bases) sem revisão individual completa de questões e texto; seis artigos acima ainda mantêm graus distintos de exame sem certificação total.
- **Estimativa de esforço restante:** cerca de **70% da validação integral**, qualitativa e provisória, não um percentual calculado por itens revisados. A fase 1 continua aberta.

**Próximo bloco:** `DC13 - tramitacao legislativa fases e fluxo.md`, conferir integralmente sua correspondência com procedimentos ordinários e gabaritos. **Nenhum artigo de estudo alterado.**


### Execução: Código, Regulamento e Acordo cotejados no DC34 (11/11/2026)

**Commit** `c50a3c69b4a106a16bf2013d31f4d8a70a2e9c91`. Realizadas 14 alterações localizadas em DC34: incluído o inciso VI omitido do art. 4º (irregularidades graves); detalhado o art. 18, § 3º (aprovação nominal para transferência da responsabilidade pelo sigilo ao Conselho); corrigido alcance de referência a recursos; incluído prazo de três sessões ordinárias do art. 9º, § 2º; identificada a divergência entre Regulamento de 2001 (cinco sessões, cinco testemunhas) e redação consolidada posterior do art. 14, § 4º, II (dez dias úteis, oito testemunhas). Inclusos os dispositivos operacionais do Acordo 2025–2027: reuniões públicas não deliberativas, parecer preliminar em dez dias úteis, pedido de vista de dois dias úteis, quórum e voto de desempate e suspensão cautelar com prazo próprio. Referências e URLs das fontes primárias foram incorporadas à nota.

**Fontes:** [Código consolidado](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), [Regulamento do Conselho](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/arquivos/regulamento-1/view), [Acordo 2025–2027](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/acordo-de-procedimentos-2025-2027/acordo-de-procedimentos-2025-2027/view). Acordo consultado em sua aprovação de 08/07/2025: persistência sem modificações em 2027 não foi certificada. Diagrama Mermaid ainda sem teste visual no site; toda a nota e seus precedentes ainda não foram auditados linha a linha. **Status da trilha: 2/29 artigos modificados, 0/29 com certificação integral.**


## Bloco 17: DC13, tramitação e procedimento ordinário (11/11/2026)

**Arquivo realmente consultado:** `3 - Materias/Direito Constitucional/13 - tramitacao e fases do processo legislativo.md` (`articleId: art-d269c5708f314eba`). Identificado caminho exato por listagem de diretório do GitHub; **não usar o nome presumido `13 - tramitacao legislativa fases e fluxo.md`**, que retorna 404. Lidos a estrutura, os trechos relativos aos arts. 24, 52, 58, 119, 131–143 e 151–152 do RICD, os casos e **15 enunciados com gabaritos** (8 do refinamento CAM-PL-008 + 7 gerais CAM-PL-003). Fontes primárias: [RICD oficial atualizado, Resolução 17/1989](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html); [Câmara: contagem dos principais prazos](https://www2.camara.leg.br/atividade-legislativa/plenario/contagem-de-prazos/principais-prazos-do-processo-legislativo). Cotejo dirigido, **sem alegar auditoria integral certificada de todas as referências secundárias**.

### Pontos normativos corroborados

- **A-PL-060:** RICD art. 24, II, distingue poder conclusivo das comissões de exceções expressas (lei complementar, códigos, iniciativa popular, autoria de comissão, matérias insuscetíveis de delegação, matérias do Senado e pareceres divergentes nas condições legais, e urgência). A distinção DC13 entre conclusão por comissão e matérias do Plenário corresponde ao texto oficial.
- **A-PL-061:** RICD art. 52, I–III: comissão **5 sessões na urgência, 10 na prioridade e 40 na tramitação ordinária**; relator tem metade do prazo; após esgotado o prazo, art.52 §3º prevê avocação ou substituição, com **2 sessões na prioridade e 5 sessões na ordinária** para novo relator. O projeto não é automaticamente arquivado ou aprovado pelo simples decurso de prazo. Correto no núcleo de DC13.
- **A-PL-062:** RICD art. 58, §§1º–4º: recurso da apreciação conclusiva **em 5 sessões após publicação**, subscrito por **1/10 da Câmara**, indicando objeto para análise plenária; recurso improvido não faz o mérito ir automaticamente ao Plenário. Correspondência adequada.
- **A-PL-063:** RICD art. 139: despacho de distribuição em **até 2 sessões** após recebimento e no máximo **4 comissões de mérito**; não confundir com número total de órgãos instrutórios. A nota comunica a diferença.
- **A-PL-064:** RICD art. 151: **ordinária como regime residual**, distinto da espécie **lei ordinária**, e projeto presidencial pode receber prioridade sem deixar de ser projeto de lei ordinária. A ressalva dos arts.151–152 consta do arquivo; no regime de urgência, publicação, distribuição, parecer e quórum continuam exigíveis.
- **A-PL-065:** Câmara informa que prazos por sessões não equivalem a dias corridos/úteis; uma única sessão elegível conta por dia e sessões solenes/preparatórias não contam. A nota explica corretamente a regra geral.

### Ajuste editorial necessário

**NC-PL-021 (IMPORTANTE: unidade de contagem embaralhada):** em `DC13 > ### Os prazos do art. 52`, a frase final do parágrafo “Atraso do relator” compara **“cinco dias/sessões do novo relator”** a **“cinco dias de recurso à votação conclusiva”** e **“cinco dias para apresentação de emendas”**. O RICD descreve os três prazos pertinentes em **sessões**, não genericamente em dias; as respectivas hipóteses são: novo relator (art.52 §3º, **5 sessões em regime ordinário**), recurso após conclusiva (art.58 §1º, **5 sessões**) e emendas a projeto em comissão (art.119, **5 sessões**). A comparação de finalidades é útil, mas a mistura “dias/sessões” pode ensinar a unidade errada. **Fase 2/3:** substituir por três prazos em sessões, explicando seus diferentes marcos iniciais; evitar que a correção produza falsa identidade de eventos. Não se alterou o original.

### Questões CAM-PL-008: oito itens de procedimento ordinário

| Q | Gabarito | Cotejo de núcleo |
| --- | --- | --- |
| 1, espécie ordinária sempre tem regime ordinário | ERRADO | RICD art.151 II a e III: prioridade para projeto do Executivo salvo urgência |
| 2, 40 sessões/comissão, metade para relator | CERTO | Art.52 III e §1º |
| 3, atraso implica arquivamento sem substituição | ERRADO | Art.52 §3º: avocação/substituição |
| 4, regime ordinário pode coexistir com exame conclusivo | CERTO | Regime (art.151) e apreciação (art.24 II) são distintos |
| 5, prazo de emendas substitui prazo da comissão | ERRADO | Art.119: emendas; art.52: análise e decisão |
| 6, urgência não dispensa requisitos essenciais | CERTO | Art.152 §1º e requisitos constitucionais |
| 7, 40 sessões valem até sanção pela Presidência | ERRADO | Prazo regimental é da comissão da Câmara |
| 8, prazo esgotado permite medidas de continuidade, sem aprovação automática | CERTO | Art.52 §§4º–6º |

### Questões CAM-PL-003: sete itens gerais de tramitação

| Q | Gabarito | Cotejo de núcleo |
| --- | --- | --- |
| 1, revisora emenda e não devolve à iniciadora | ERRADO | CF art.65, parágrafo único |
| 2, recurso de decisão conclusiva depende de subscrição e provimento | CERTO | CF art.58 §2º I; RICD art.58 e art.59 |
| 3, lei complementar e iniciativa popular seriam obrigatoriamente conclusivas | ERRADO | Art.24 II, alíneas a, c |
| 4, mais de quatro comissões de mérito seria regra geral | ERRADO | Art.139 V |
| 5, rejeição pela revisora arquiva e emenda retorna à iniciadora | CERTO | CF art.65 |
| 6, apensação coordena tramitação sem fusão automática | CERTO | Arts.142–143 |
| 7, mero recurso assinado obriga apreciação plenária sem provimento | ERRADO | Arts.58–59 |

**Resultado responsável:** 15/15 gabaritos examinados e **compatíveis com os fundamentos normativos centrais** consultados; nenhum gabarito invertido por evidência obtida nesta rodada. A nota contém um ajuste importante de unidade temporal. Continua pendente leitura jurídica exaustiva de exceções procedimentais, cada remissão lateral e aplicação concreta do art.132 §2º, antes de declarar integralmente aprovada.

### Progresso atualizado

**Inventário 29/29 arquivos; 66 questões C/E examinadas individualmente em diferentes graus** (DC11:13; DC12:14; DC13:15; DC34:6; DC35:6; DC36:6; DC37:6). **Sete arquivos com suas baterias de questões examinadas**, mas nenhum está integralmente certificado em conteúdo, fontes e editoração. **22 arquivos ainda não tiveram todas as suas questões revisadas nesta auditoria.** Estimativa de esforço realizado aumenta de cerca de **30% para 33%**, apenas orientativa, sem métrica objetiva por volume de normas. Próximo: **DC14 comissões parlamentares**, inclusive corrigir a colisão `CAM-PL-020` em seus metadados e subtítulos **somente após autorização da fase editorial**.

**Nenhum artigo de estudo alterado.**


### Execução: exceções e fluxo do art. 14 revisados (11/11/2026)

Commit `95aa8a7bff5d0a8ab50c45cb30610bd16f1c1260`: revisado diagrama do DC34 para separar sanções dos arts. 11–14, evitar caminho único para censuras, explicitar arquivamento e requalificação, e incluir recurso sobre admissibilidade de representação partidária ao Plenário por 1/10 da Casa. Incluídos art. 14, § 4º, incisos II–VIII, e vedação à retirada da representação após instauração (art. 14, § 5º), preservando referências à [Resolução nº 25/2001 consolidada](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html).

**Status:** correções textuais e sintaxe Mermaid salvas; visualização renderizada e validação integral do DC34 ainda pendentes. Demais artigos não foram modificados nesta rodada; **2/29 alterados, 0/29 certificados integralmente**.


### Execução editorial: NC-PL-021 no DC13 (11/11/2026)

**Correção aplicada ao artigo DC13**, commit `feb51aa07f851c9594c012dbae7fa0853444149c`. Substituída a formulação equivocada «cinco dias/sessões» por três prazos distintos de **cinco sessões**: substituição do relator na tramitação ordinária (RICD, art. 52, § 3º), recurso contra apreciação conclusiva após publicação (art. 58, § 1º) e emendas em comissão (art. 119). Os marcos e objetos de cada um foram explicitados. Fonte primária: [RICD consolidado](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html). **NC-PL-021: corrigida no artigo, revisão integral não certificada.**

**Próximo reparo crítico comprovado:** DC36, NC-PL-018 e NC-PL-019. A página oficial do STF confirma a redação histórica e superada da Súmula 5; o Tema 22 (RE 560.900) trata de restrição à participação em concurso público, sem relação com iniciativa legislativa. Ainda pendente editar DC36; seu caminho exato deve ser identificado no repositório antes de qualquer alteração.

**Andamento após este commit:** 3 de 29 artigos receberam mudanças (10,3%); 0 de 29 têm certificação integral de conteúdo e fontes. O diagnóstico continua em curso.


## Bloco 18: comissões parlamentares DC14, 16 itens e conflito de identidade CAM-PL (11/11/2026)

**Arquivo fonte recuperado:** `3 - Materias/Direito Constitucional/14 - comissoes parlamentares natureza competencias e poderes.md`. Foram lidos conteúdo central, casos, duas baterias com **10 + 6 questões C/E** e seções de artigos 22–54. Cotejo dirigido com [RICD oficial atualizado até RCD 34/2026](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) e [portal da 31ª edição de 2026](https://bd.camara.leg.br/bd/items/4bcfab5c-3cdf-4693-aec5-5680f5f0142d). O servidor do texto consolidado retornou 429 para algumas consultas completas, mas trechos foram recuperados por indexação oficial. Assim, **não certificar conferência literal exaustiva dos dispositivos 25–54**.

### Correspondências normativas e ressalvas de escopo

- **A-PL-066:** CF art.58/RICD arts.22, 33–38: permanentes, temporárias, especiais, de inquérito e externas são classificadas com finalidades compatíveis. A regra de CPI no DC14 cita corretamente **120 dias, até metade por deliberação do Plenário**, ao contrário da NC-PL-017 do DC35: **há contradição entre dois artigos do mesmo repositório**.
- **A-PL-067:** RICD arts.25–28: Mesa fixa tamanho, ouve líderes; composição obedece proporcionalidade, tamanho entre **3,5% e 13%**, e indicações nas condições regimentais. Referência ao art.26 §2º e exceção da Comissão de Comunicação corresponde ao texto atualizado após 2023.
- **A-PL-068:** arts.29, 41, 43, 50 e 52: subcomissões sem poder decisório; presidente da comissão pode relatar e votar, mas não preside reunião sobre matéria que relatou; distinção de quórum de reunião deliberativa e informativa; prazos de comissão 5/10/40 sessões. Os principais contrastes didáticos estão bem representados.
- **A-PL-069:** art.54 (parecer terminativo) distinto do art.24 II (decisão conclusiva). DC14 diferencia corretamente **preliminares** de exame final do mérito.
- **Risco de escopo:** a unidade de refinamento `CAM-PL-020` explicita os **arts.25–54**, enquanto a arquitetura define `CAM-PL-020` para **Mesa e órgãos, arts.1–24**. O estudo de 25–54 pode servir de aprofundamento, mas **não substitui o recorte literal do edital** e não deve ser contado como cobertura de Mesa. Ver conflito já identificado no bloco 2 e na matriz do bloco 9.

### Matriz: 10 itens de refinamento (artigos 25–54)

| Item | Gabarito | Verificação central |
| --- | --- | --- |
| 1, tamanho da comissão fixado pela Mesa | CERTO | Art.25 |
| 2, nova filiação redistribui automaticamente vagas | ERRADO | Art.26 §4º |
| 3, proibição absoluta de titularidade múltipla | ERRADO | Art.26 §2º contém exceções |
| 4, subcomissões podem decidir conclusivamente | ERRADO | Art.29: sem poder decisório |
| 5, presidente da comissão pode relatar, autor não relata | CERTO | Arts.41 §1º e 43 |
| 6, perda de lugar por cinco faltas ordinárias consecutivas | CERTO | Art.45 §1º, sujeito a condições de justificação e comunicação |
| 7, reunião informativa pode iniciar com qualquer número | CERTO | Art.50 |
| 8, prazos 5/10/40 sessões, metade para relator | CERTO | Art.52 |
| 9, atraso do parecer implica aprovação tácita | ERRADO | Arts.52 §§3º–6º |
| 10, parecer terminativo equivale à aprovação integral do projeto | ERRADO | Art.54 × art.24 II |

### Matriz: 6 itens gerais de comissões

| Item | Gabarito | Verificação central |
| --- | --- | --- |
| 1, permanentes versus temporárias | CERTO | Art.22 |
| 2, especial seria permanente e competência de exatamente quatro comissões | ERRADO | Arts.33–34: especial é temporária e hipótese envolve **mais de quatro** comissões de mérito |
| 3, CPI requer 1/3/fato/prazo, sem poder de sentença penal | CERTO | CF art.58 §3º e art.35 |
| 4, comissão externa com ônus prescinde do Plenário | ERRADO | Art.38: a hipótese de ônus exige aprovação do Plenário |
| 5, proporcionalidade e representação da Minoria | CERTO | Art.23 |
| 6, lei complementar necessariamente conclusiva em comissão | ERRADO | Art.24 II a: exceção |

**Resultado:** 16/16 gabaritos compatíveis no núcleo das regras cotejadas, sem inversão identificada. Ainda falta inspeção de todos os parágrafos e eventuais decisões complementares sobre contagem de prazo/impedimentos. **Nenhum erro normativo crítico novo comprovado** em DC14; **identidade CAM-PL-020 continua inconsistente**.

### Correção futura recomendada

Manter o artigo como referência principal de `CAM-PL-004`. Renomear/identificar o aprofundamento de arts.25–54 com código **novo e não conflitante, após verificar arquitetura e catálogo**; não substituir a unidade `CAM-PL-020` (Mesa/arts.1–24). Rever conexões e backlinks. **Nenhum artigo de estudo alterado nesta fase.**

## Bloco 19: parecer legislativo DC15, oito itens comentados (11/11/2026)

**Arquivo:** `3 - Materias/Direito Constitucional/15 - parecer legislativo relatorio voto e deliberacao.md` (217 linhas), unidade `CAM-PL-005`. Lidos as categorias do parecer e os **8 itens C/E**; cotejo seletivo com RICD arts.56–57, 100, 126–130 e [material da Câmara sobre Regimento aplicado](https://bd.camara.leg.br/bd/bitstream/handle/bdcamara/29519/regimento_interno_aplicado.pdf), além de [questão de ordem publicada pela Câmara sobre empate de requerimentos em comissão](https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cmads/outros-documentos/questao-de-ordem/decisao-da-presidencia/view).

**A-PL-070, positivo:** distinção entre **relatório, voto do relator e parecer da comissão** (art.129, I–III), ressalvada dispensa de relatório em parecer sobre emenda (§1º). A tese do artigo está correta.

**A-PL-071, positivo:** art.57, XII–XIV permite que colegiado não acolha voto do relator e forme parecer vencedor, tornando o voto inicial voto em separado; voto em separado que concorda com conclusão não é contrário por sua forma. Atribuição de competência corretamente apresentada.

**A-PL-072, positivo:** art.57 XVI permite vista conjunta quando simultânea; art.127 admite parecer único sobre proposições apensadas. Ressalvar peculiaridades de regime de urgência e momento de concessão da vista.

**A-PL-073, ressalva interpretativa:** RICD art.56 §2º diz literalmente que a maioria de votos decide, presente maioria absoluta dos membros, prevalecendo em empate o voto do relator. **A aplicação da regra de desempate aos requerimentos de comissão foi objeto de controvérsia interpretativa**, como mostra orientação de órgão da Câmara e manifestação em [ata de reunião 2023](https://escriba.camara.leg.br/escriba-servicosweb/html/69617), com referência à Orientação Técnica Legislativa 1/2022. O item 7 está **correto pela literalidade do art.56 §2º**, mas a nota deve restringir sua heurística a deliberações pertinentes e não proclamar que todo empate em qualquer requerimento é decidido pelo relator. **Não classificar como erro do gabarito**.

### Matriz dos 8 itens DC15

| Q | Gabarito | Verificação central |
| --- | --- | --- |
| 1, três partes do parecer escrito | CERTO | RICD art.129 I–III |
| 2, rejeição do voto do relator arquiva necessariamente | ERRADO | Art.57 XII–XIII |
| 3, voto separado convergente seria contrário | ERRADO | Art.57 XIV |
| 4, pedidos simultâneos de vista não urgente são conjuntos | CERTO | Art.57 XVI |
| 5, relatório é dispensável no parecer sobre emenda | CERTO | Art.129 §1º |
| 6, terminativo de CFT igual aprovação conclusiva de mérito | ERRADO | Art.54 versus art.24 II |
| 7, maioria simples com presença absoluta, empate voto relator | CERTO | Literal art.56 §2º, com ressalva de aplicação a requerimentos |
| 8, apensadas exigem parecer independente por projeto | ERRADO | Art.127 e art.57 I |

**Resultado:** 8/8 gabaritos com núcleos normativos compatíveis nas fontes consultadas, sem inversão confirmada. **Pendências:** validar cada dispositivo derivado, especialmente conflitos de interpretação e atos complementares sobre pedidos de vista/empate, antes de certificar todo o arquivo.

### Progresso estimado da Fase 1 após blocos 18–19

- **29/29 arquivos identificados**, inventário concluído.
- **90 enunciados C/E com conferência dirigida:** DC11 (13), DC12 (14), DC13 (15), DC14 (16), DC15 (8), DC34 (6), DC35 (6), DC36 (6), DC37 (6).
- **9/29 arquivos** têm as respectivas baterias de questões examinadas, mas **0/29** certificados integralmente no conjunto de conteúdo, fontes, exercícios e edital. Faltam **20 arquivos** para a conferência individual equivalente das questões.
- Estimativa provisória de **cerca de 38% do esforço da Fase 1 realizado, 62% restante**. É uma avaliação qualitativa do trabalho, não medição objetiva de progresso ou garantia de cobertura.
- Próximo aprofundamento: **DC16, discussão, votação e quóruns**, incluindo conformidade do RICD arts. 180–187, CF art.47 e recursos; em seguida DC17 e temas normativos restantes.
- **Todos os artigos originais seguem intactos.**


### Execução editorial: DC36, Súmula 5 e Tema 22 (11/11/2026)

Commit `5a03fc4e4eaa812a7b2768eeacdff057cd02ea98`: **NC-PL-018 e NC-PL-019 corrigidas no DC36**, em quatro passagens (subtítulo, explicação, comentário da Q2 e fontes). A [Súmula 5 do STF](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1318) foi identificada como entendimento histórico **superado** pela orientação de que sanção não convalida vício de iniciativa (ADI 1.197, AR 1.753). O [Tema 22 (RE 560.900)](https://portal.stf.jus.br/jurisprudenciarepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=2551965&numeroProcesso=560900&numeroTema=22) não trata desse assunto; sua vinculação indevida foi retirada das justificativas. **Gabarito Q2 mantido ERRADO.**

**Situação editorial:** 4/29 artigos modificados (DC13, DC34, DC35, DC36), 0/29 integralmente certificados. A revisão completa de DC36 permanece pendente.


### Execução editorial: DC37, poder cautelar e sustação de contratos (11/11/2026)

Commit `196563f7dd9ba30853688b7b68e9c2e4fa486a8a`: **NC-PL-020 corrigida no texto do DC37.** Reescrita a seção 5.2 para distinguir (a) determinação do TCU para a Administração adotar providências (CF, art. 71, IX); (b) sustação constitucional de contrato inicialmente pelo Congresso e subsidiariamente pelo TCU, na hipótese do § 2º, após 90 dias; e (c) medidas cautelares do TCU para evitar lesão ao erário, sem se equipararem à anulação direta ou sustação definitiva do contrato. Eliminada afirmação genérica de prazo constitucional fixo de 30 dias. Refeito Caso 4 para contrastar suspensão cautelar de repasses e anulação/sustação direta do contrato; revista tabela-resumo.

**Fontes primárias:** [STF, art. 71, MS 23.550 e MS 24.510](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=71&abrirBase=CF) e [Informativo STF 922](https://www.stf.jus.br/arquivo/informativo/documento/informativo922.htm). O gabarito da Q5 que inverte competência permanece ERRADO e o núcleo continua correto; revisão exaustiva dos demais elementos de DC37 ainda pendente.

**Andamento de edição:** 5/29 artigos alterados nesta fase (DC13, DC34, DC35, DC36, DC37): **17,2% de arquivos alcançados**. Certificação integral: 0/29. Esta porcentagem não mede fração de defeitos já resolvidos nem avanço integral de validação.


## Bloco 20: DC16, discussão, votação e quóruns (11/11/2026)

**Fonte auditada:** `3 - Materias/Direito Constitucional/16 - discussao votacao quoruns e modalidades de decisao.md` (209 linhas). Recuperadas e lidas as **nove questões C/E**, as definições e comparações do corpo, os exemplos de maioria e o tratamento de votação simbólica/nominal/secreta. Confronto seletivo com [RICD consolidado arts. 177–187](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), [PDF oficial, 31ª edição 2026](https://www2.camara.leg.br/atividade-legislativa/legislacao/regimento-interno-da-camara-dos-deputados), e CF arts. 47, 60 §2º e 69. Fonte oficial de texto longo retornou HTTP 429 para recuperação integral em uma etapa: por isso **não declarar exaustão de todas as remissões dos artigos**.

### Matriz de questões DC16

| Item | Gabarito | Resultado de cotejo dirigido |
| --- | --- | --- |
| 1, lei ordinária pode ser aprovada com menos de 257 votos favoráveis | CERTO | CF art.47: maioria dos votos com maioria absoluta presente |
| 2, lei complementar aprovada com 200 votos em 320 presentes | ERRADO | CF art.69: exige maioria absoluta dos membros, 257 deputados na composição de referência |
| 3, abstenção nominal conta para presença, sem integrar sim/não | CERTO | RICD art.183 §2º, ressalvadas hipóteses e regras específicas |
| 4, votação nominal em quórum especial; simbólica usual | CERTO | RICD arts. 184–186 |
| 5, verificação simbólica exige 10% e sempre quebra de interstício | ERRADO | RICD art.185 §3º: **6%**; §4º: regra específica para nova verificação em menos de uma hora |
| 6, 5% para encerramento dispensam 12 oradores | ERRADO | RICD art.178 §2º: exigências cumulativas para essa modalidade de encerramento |
| 7, PEC com 308 no primeiro turno não concluiu processo | CERTO | CF art.60 §2º: dois turnos e três quintos em cada Casa |
| 8, simbólica e nominal seriam modalidades secretas | ERRADO | RICD art.184 e formas de publicidade |
| 9, empate ostensivo resolvido pelo Presidente; secreto com votações sucessivas | CERTO | RICD art.180 §§3º–4º: regra literal e exceção para eleições |

**A-PL-074, positivo:** o artigo ensina corretamente três planos separados: **presença**, **aprovação** e **modalidade**. O caso de 320 presentes, 145 votos sim, 130 não e 45 abstenções é aritmeticamente coerente para a regra geral de deliberação, mas não é suficiente para leis complementares ou PECs.

**A-PL-075, positivo:** a regra de verificação simbólica de **seis centésimos dos membros** do art.185 §3º aparece corretamente, sem confundi-la com o um décimo nas condições especiais do §4º. Deixar indicado, na futura certificação, se houve alterações regimentalmente supervenientes à edição consultada no período.

**A-PL-076, ressalva de aplicação:** a distinção do art.180 entre empate ostensivo e empate em escrutínio secreto é **literalmente coerente**; entretanto, não se deve extrapolar a regra de escrutínio secreto para votações cuja publicidade é constitucionalmente obrigatória (ex.: perda de mandato, veto, após EC76/2013). A regra especial para eleições também deve ser mantida. **Não caracteriza inversão da questão 9**.

**Resultado:** 9/9 gabaritos compatíveis com o núcleo normativo checado, sem inversão demonstrada. **Pendente:** verificar exaustivamente art.177 (adiamento), art.178 (interstício e encerramento), art.185 §§3º–4º (nova verificação em menos de uma hora), art.192 (encaminhamento), além de decisões interpretativas posteriores sobre votação e procedimento. Não declarar certificação integral do artigo.

## Bloco 21: DC17, sanção, veto, promulgação e publicação (11/11/2026)

**Fonte auditada:** `3 - Materias/Direito Constitucional/17 - sancao veto promulgacao e publicacao.md` (241 linhas); lidos **dez itens C/E**, descrições de prazos, espécies, veto parcial, controle congressional, promulgação, vigência e casos. Cotejo selecionado com [CF consolidada, art.66](https://www4.planalto.gov.br/legislacao/legis-federal/constituicao), [STF, Constituição e Supremo, art.66, ADPF 1.078 e 893](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=66&abrirBase=CF), e [RCCN, arts.104–106-D](https://legis.senado.leg.br/norma/561098/publicacao/36852069).

### Matriz de dez itens DC17

| Item | Gabarito | Cotejo dirigido |
| --- | --- | --- |
| 1, silêncio presidencial por 15 dias úteis importa sanção tácita | CERTO | CF art.66 §§1º e 3º; não confundir sanção, promulgação e publicação |
| 2, veto parcial de palavra isolada | ERRADO | Art.66 §2º exige texto integral de artigo/parágrafo/inciso/alínea |
| 3, derrubada do veto por maioria absoluta separada, voto aberto | CERTO | Art.66 §4º e EC76/2013 |
| 4, 15 dias corridos e silêncio equivalem a rejeição de projeto | ERRADO | Art.66 §§1º e 3º |
| 5, sucessão de promulgação após sanção tácita ou veto derrubado | CERTO | Art.66 §7º: Presidência da República → Presidência do Senado → Vice-Presidência do Senado, com prazos próprios |
| 6, publicação obriga vigência imediata | ERRADO | LINDB art.1º; regra supletiva de 45 dias, salvo disciplina específica |
| 7, motivação do veto e publicação não definem isoladamente tempestividade | CERTO | STF **ADPF 1.078**, julgamento 01/07/2024: comunicação ao Legislativo, não publicação |
| 8, veto sem votação em 30 dias é automaticamente mantido | ERRADO | CF art.66 §6º: inclusão na ordem do dia da sessão conjunta imediata e sobrestamento pertinente |
| 9, PEC segue para sanção e veto | ERRADO | CF art.60 §3º: promulgação pelas Mesas, sem sanção |
| 10, parte não vetada pode ser promulgada/publicada antes do exame da parcela vetada | CERTO | Efeito jurídico da sanção parcial e apreciação posterior do veto; atenção à integralidade dos dispositivos e vigência |

**A-PL-077, positivo:** correta discriminação dos marcos: **15 dias úteis** para veto, **48 horas** de comunicação de motivos ao Presidente do Senado, **30 dias** para apreciação congressual e **48 horas** de promulgação subsidiária nos casos constitucionais. Não confundir o marco inicial da comunicação do veto com publicação; ADPF 1.078 o confirma.

**A-PL-078, positivo:** corretamente exclui PEC e decretos legislativos/resoluções do procedimento de sanção presidencial de leis e observa votação aberta do veto após EC76/2013; as duas Casas votam separadamente na sessão conjunta.

**A-PL-079, cautela de referência:** textos históricos e páginas de legislação **com data de versão anterior à EC76/2013** podem exibir o trecho “em escrutínio secreto” do art.66 §4º. Fonte primária de 2026 e compilação constitucional atual devem prevalecer. Não corrigir retroativamente citação histórica sem explicar a alteração.

**Resultado:** 10/10 itens com gabaritos coerentes com as fontes centrais consultadas; nenhuma inversão provada. **Pendente:** checar em detalhe RCCN arts.104–106-D, contagem e suspensão de prazo congressual, casos de veto parcial em repercussões posteriores, formalidades de publicação e LINDB; isso impede certificar exaustivamente o artigo.

### Indicador agregado após blocos 20–21

**Inventário:** 29/29 arquivos. **Questões C/E examinadas:** **109**, somando DC11:13, DC12:14, DC13:15, DC14:16, DC15:8, DC16:9, DC17:10, DC34:6, DC35:6, DC36:6, DC37:6. Assim **11/29 arquivos** tiveram as baterias de questões examinadas em grau dirigido; **18 arquivos** ainda carecem de conferência equivalente. **0/29 certificados integralmente** em texto, normas, jurisprudência, questões, fontes e edital. **Estimativa provisória:** cerca de **42% do esforço de Fase 1 realizado, 58% pendente**, sem pretensão de cálculo por caracteres ou dispositivo. Próximos artigos: **DC18–22** (procedimentos especiais, prioridade, urgência, leis delegadas, MPs, PDL/resoluções); retomar os bases DC06/DC10 e DC23–33. Nenhum artigo teórico foi editado; permanecemos na Fase 1.


### Correção editorial: colisões CAM-PL-020 e CAM-PL-022 (11/11/2026)

**Colisões de identidade saneadas nos artigos, preservando as unidades previstas na arquitetura:**

- **DC14, commit `af31345341a9f242b2eb303a1fb8cbbe28d80815`:** o subtítulo que chamava comissões (arts. 25–54) de **CAM-PL-020** passou a identificá-las como **aprofundamento de CAM-PL-004**; incluída remissão ao DC23 para organização da Mesa e órgãos da Câmara.
- **DC25, commit `2708b65a29a3019b61f0b4a1fae0851fbda15f23`:** eliminado uso indevido de **CAM-PL-022** nos arts. 81–105; o conteúdo é **complemento editorial da trilha CAM-PL-021** (sessões), com ressalva de que 95–105 extrapola seu recorte 65–94. CAM-PL-022 permanece corretamente associado ao **DC26, arts. 226–251**.
- **DC24, commit `4501c34e2dfa0fd0689e6d32a834771675c41541`:** corrigida referência cruzada a DC14, removendo a associação equivocada de CAM-PL-020 ao funcionamento de comissões.
- **Arquitetura, commit `82018aed262adef1fc2f69456262f6ff081feb4d`:** inserida matriz textual de correspondências e fronteiras de cobertura, sem alterar automaticamente checkboxes nem inventar artigos obrigatórios.

**Critério de conclusão:** as duas colisões de **rótulo** foram corrigidas nos pontos identificados. Não implica homologação da cobertura jurídica dos arts. 1–24, 25–54, 65–105 e 226–251, nem validação do edital literal. **Andamento: 8/29 artigos modificados (27,6%); 0/29 integralmente certificados**. Restam 21 artigos sem edição nesta fase, sem presumir que demandem reparos.


## Bloco 22: DC18–22, procedimentos e espécies legislativas (11/11/2026)

**Escopo realizado e evidência:** recuperados os arquivos exatos no GitHub:
- `DC18 - procedimentos abreviado e sumario.md` (249 linhas), CAM-PL-009: **10 itens C/E**.
- `DC19 - procedimentos sumarissimo especial e concentrado.md` (249 linhas), CAM-PL-010: **10 itens**.
- `DC20 - lei delegada e delegacao legislativa.md` (134 linhas), CAM-PL-012: **10 itens**.
- `DC21 - medida provisoria pressupostos prazos e efeitos.md` (147 linhas), CAM-PL-013: **10 itens**.
- `DC22 - projetos de decreto legislativo e resolucao.md` (168 linhas), CAM-PL-014: **10 itens**.

Foram lidos sumários, textos nucleares, prazos, hipóteses de exceção, casos e as **50 questões e suas respostas**. Confronto seletivo com [CF consolidada, arts.58, 60, 62, 64, 68](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), [RICD consolidado, arts.24, 52, 151–157, 200, 204](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), [Câmara, Requerimentos de urgência](https://educacaoadistancia.camara.leg.br/clique_regimento/card/19) e [Regimento Comum do Congresso, arts.116–127](https://legis.senado.leg.br/norma/561098/publicacao/36852069). **Limitação:** acesso ao HTML integral do RICD retornou 429; os trechos sobre art.155 foram corroborados por resultado indexado oficial e material pedagógico oficial. Cotejo por dispositivo selecionado **não equivale a certificação literal de todos os itens e comentários**.

### DC18: abreviado, sumário e prioridade

**A-PL-080:** tratamento de procedimento **abreviado** como decisão conclusiva por comissões, com recurso da minoria, corresponde ao art.58 §2º I da CF, sem confundir com parecer terminativo de admissibilidade. **A-PL-081:** sumário constitucional no art.64 §1º exige **pedido do Presidente para projeto de sua iniciativa**; o prazo é **45 dias por Casa, sucessivamente, e 10 dias para emendas do Senado na Câmara**, sem automatismo de aprovação. Art.64 §4º suspende os prazos no recesso e exclui projetos de código. **A-PL-082:** prioridade do RICD art.151 II, a não equivale a pedido de urgência constitucional. **10 itens** revisados e respostas aparentam coerentes com estes fundamentos (gabaritos por ordem: C, E, E, C, E, C, C, E, C, E). **Reserva:** confirmar literalmente o art.204 §1º (pedido posterior de urgência) e condições de recebimento/recurso no art.132 e no art.58 §5º.

### DC19: sumaríssimo, especial e concentrado

**A-PL-083:** art.155 do RICD e orientação oficial da Câmara confirmam dois requisitos separados de **maioria absoluta** (apoiamento e aprovação) e possibilidade de pautar imediatamente matéria de relevante e inadiável interesse nacional, **sem o limite de duas matérias** do art.154 §2º. **A-PL-084:** art.152 preserva publicação, parecer e quórum; a urgência não substitui requisitos constitucionais da PEC. **A-PL-085:** a comissão **mista** examina MP (CF art.62 §9º), mas cada Casa **vota separadamente**, ao passo que veto é apreciado em **sessão conjunta**. **10 itens** com núcleos coerentes (C, E, E, C, C, E, C, E, C, E). **Reserva:** prazo de discussão e emissão de parecer verbal, art.157 §§2º–4º, e classificação doutrinária do procedimento “concentrado” exigem conferência de fontes de origem; a nomenclatura não é rol de regimes do RICD art.151.

### DC20: lei delegada e autorização do Congresso

**A-PL-086:** CF art.68 §§1º–3º confirma: pedido do Presidente, autorização por **resolução do Congresso**, matérias indelegáveis, eventual apreciação **em votação única e vedada emenda** ao texto final. Distinção com emendas à **proposta de resolução autorizativa** do RCCN art.121 está corretamente exposta. **A-PL-087:** a nota examina ressalvas históricas do RCCN arts.117, 118 e 126 em face de CF/1988, sem aplicar cegamente rol anterior à Constituição. **10 itens** lidos e comparados com núcleos (E, E, C, C, E, E, C, E, E, E). **Reserva relevante:** o relato do RCCN art.119 §2º afirma **prazo máximo de 45 dias** e cita procedimento de 72h, oito dias, 24h e 48h em diversas fases; é preciso transcrever/confirmar literalidade dos arts.119–127 e eventuais atualizações/derrogações antes de aprovar a parte procedimental. Evitar assimilação aos 45 dias do art.64 da CF, que tratam de urgência de projeto presidencial, não delegação.

### DC21: medida provisória

**A-PL-088:** CF art.62 confirma **60 + 60 dias, uma única prorrogação**, suspensão no recesso, urgência após **45 dias**, proibição de reedição na mesma sessão legislativa após rejeição/caducidade, julgamento prévio de pressupostos e início da votação na Câmara após comissão mista. **A-PL-089:** art.62 §12 preserva a MP original enquanto PLV aprovado com alterações aguarda sanção/veto; art.62 §11 preserva relações jurídicas na ausência de decreto legislativo em **60 dias** depois de rejeição/perda de eficácia. **10 itens** com núcleos coerentes (E, C, E, C, E, E, C, E, C, C). **Reserva:** texto apresenta composição da comissão mista como 12 deputados + 12 senadores, remessa 48h e sobrestamento condicionado a detalhes operacionais na Câmara; confirmar em Resolução CN 1/2002 consolidada e jurisprudência recente. Distinguir CF literal de operação regimental.

### DC22: projetos de decreto legislativo e resolução

**A-PL-090:** CF arts.49, 51, 52, 59 e 68 §2º, RICD art.109 fundamentam **decreto legislativo para matérias exclusivas do Congresso** e **resoluções para matérias privativas das Casas** ou delegação pelo Congresso; sem sanção presidencial. **A-PL-091:** art.51 IV diferencia organizar serviços da Câmara da **iniciativa de lei** para fixar remuneração. O artigo indica corretamente que CPI exigida constitucionalmente por um terço não depende de vontade discricionária de maioria para sua criação. **10 itens** com núcleos coerentes (C, E, E, C, E, E, C, E, C, C). **Reserva:** checar o prazo de **2 sessões** e sequência de suplência na promulgação de resolução da Câmara no RICD art.200 §2º; conferir peculiaridades de tramitação de PRN e deliberação parlamentar em cada hipótese para evitar generalizar o instrumento.

### Diagnóstico transversal e método

**NC-PL-022, RISCO MÉDIO DE INSTRUÇÃO:** cinco notas apresentam procedimentos com prazos e meios normativos variados (Constituição, RICD e RCCN) e algumas explicações doutrinárias. Antes da certificação final, elaborar **matriz única por ato, órgão competente, unidade do prazo, marco inicial, condições e consequência**, separando: art.64 (urgência presidencial, 45+45+10 **dias**); art.155 (urgência urgentíssima, maioria absoluta e inclusão imediata); art.68/RCCN (resolução de delegação); art.62 (vigência da MP e recesso). **Não se trata de erro jurídico pontual confirmado**, mas prioridade editorial para reduzir risco de transferência de uma regra para outra.

**Estado dos cinco artigos:** 50/50 enunciados lidos com seus gabaritos e núcleos cotejados de modo seletivo. **Nenhuma inversão de gabarito comprovada**; há reservas normativas explícitas. **Nenhuma nota de estudo alterada.**

### Indicador acumulado da Fase 1

29/29 arquivos no inventário; **159 enunciados C/E examinados em 16/29 arquivos** (DC11–22 e DC34–37: 12+4 = 16), **13 arquivos** ainda sem o cotejo equivalente de todos os itens; **0/29 certificados integralmente**. Estimativa qualitativa **52% do esforço da Fase 1 realizado, 48% restante**. Estimativa não substitui medição efetiva de dispositivos, literatura, edital, nem comprovação de cobertura. Próximos: DC23–33, mais revisão profunda das bases DC06/DC10 e reconciliação dos riscos críticos de DC34/35/36/37.


### Execução editorial: rastreabilidade do RICD em DC23 e cautela de edital no DC28 (11/11/2026)

**DC23, commit `528b8a18db2eed52a9789aeaaf36eb449ad3c690`:** metadado editorial do corpo foi alinhado às unidades **CAM-PL-019 e CAM-PL-020** previstas para os arts. 1º–24; incluída referência cruzada ao DC14 para comissões (25–54). Preservados título, `articleId` e conteúdo jurídico.

**DC28, commit `f31fedd683c11a5353c8734912e1c40dff4ddfaa`:** eliminada a afirmação categórica de que os quatro intervalos regimentais são transcrição literal já conferida do edital específico. O quadro e o primeiro item de revisão agora atribuem expressamente os intervalos à **síntese interna do edital** e exigem cotejo com edital oficial de Divulgação Institucional e retificações. Esse ajuste evita transformar evidência secundária em certeza sobre o conteúdo da prova.

**Verificação adicional:** a [biblioteca oficial da Câmara](https://bd.camara.leg.br/bd/items/4bcfab5c-3cdf-4693-aec5-5680f5f0142d) confirma 31ª edição do RICD, publicada em outubro de 2026 e atualizada até Resolução 34/2026. Não houve leitura integral dos dispositivos 1–24, 65–94, 226–251 e 262–273 nesta rodada; DC24–27 não foram reescritos por ausência de novo erro jurídico comprovado neste cotejo dirigido.

**Indicador editorial acumulado:** **10 de 29 artigos modificados (34,5%)**: DC13, DC14, DC23, DC24, DC25, DC28, DC34–DC37. **Zero artigo integralmente certificado**. Os outros 19 ainda não passaram por alteração nesta fase, o que não prova defeito de seu conteúdo.


## Bloco 23: DC23–33, RICD e Regimento Comum, 11/11/2026

**Escopo e método:** inventariados novamente os caminhos reais em `3 - Materias/Direito Constitucional`; recuperado o conteúdo dos **11 artigos DC23–DC33**; lidos seus sumários e seções de perguntas, **110 enunciados C/E com respostas e fundamentos**, com cotejo dos principais institutos em normas oficiais da Câmara, Senado e Congresso. **Grau de verificação: dirigido e seletivo**, com confirmação independente explícita dos dispositivos listados abaixo. Não equivale a ter conferido literalmente todos os dispositivos, remissões ou cada comentário, nem autoriza homologação integral dos artigos. Nenhum artigo de estudo foi alterado.

**Fontes normativas verificadas:**
- [RICD atualizado pela RCD 34/2026, texto HTML oficial](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), em especial arts. 14 §§5º–7º e 227-A; [Resolução 33/2026](https://www2.camara.leg.br/legin/fed/rescad/2026/resolucaodacamaradosdeputados-33-22-abril-2026-798990-publicacaooriginal-179000-pl.html), sobre restrições a membros da Mesa em comissões;
- [Regimento Comum, Res. 1/1970-CN, compilação no Senado](https://legis.senado.leg.br/norma/561098/publicacao/16433839), em especial arts. 1º e 53–56; [página de normas do Congresso](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional);
- [Resolução 3/1990-CN sobre Comissão Representativa, texto no Senado](https://legis.senado.leg.br/norma/561157/publicacao/36852072), arts. 1º–3º; [Constituição atualizada na Câmara](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), art. 57;
- [Resolução 1/2002-CN, texto no portal do Congresso](https://www.congressonacional.leg.br/documents/137784508/140356431/resolucao01_2002cn.pdf/81c94628-b850-4914-bf02-b0b938735824) e [explicação institucional atual do procedimento de MP](https://www.congressonacional.leg.br/materias/medidas-provisorias/entenda-a-tramitacao-da-medida-provisoria): 48h para designação, 12+12 titulares e igual número de suplentes, vaga adicional de minoria por Casa, emendas e controle pela comissão mista. Esta rodada consultou trecho indexado do texto da resolução, **sem certificar os demais artigos pela leitura do PDF integral**.

### Matriz dos artigos e 110 itens

| Arquivo | Itens lidos | Conclusão e principal ressalva |
| --- | ---: | --- |
| **DC23**, RICD 1º–24 | 10 | Regras de Mesa, Presidência e secretarias incorporam alterações de 2026. **Conferido art.14 §§5º–7º**, inclusive participação em comissão por integrantes da Mesa exceto Presidente, sem direção de comissão, e restrição para membros com funções de gestão em CPI/Conselho de Ética. Gabarito 8 ERRADO, coerente; checagem literal dos demais órgãos especializados ainda pendente |
| **DC24**, RICD 55–80 | 10 | Núcleos de decisão colegiada, recurso conclusivo, PFC e sessões coerentes com normas citadas; **revisar condições do art.61-A, art.78 (gravação) e art.79 (abertura)** diretamente, por sua sensibilidade ao marco de 2026 |
| **DC25**, RICD 81–105 | 10 | Separação entre expediente e deliberação, questão de ordem, autoria e exceções de arquivamento coerente nos fundamentos; **colisão editorial CAM-PL-022** com DC26 já identificada. Confirmar prazo de revisão taquigráfica e regras de Grande Expediente na versão atual |
| **DC26**, RICD 226–251 | 10 | **Art.227-A confirmado**: gestante desde 30ª semana **ou** atestado tem direito a presença e voto remotos; art.227 II–III distingue registro de plenário e comissão. Questão 1 CERTO, amparada. Rever detalhadamente licenças, vacância e regras antigas superadas pela EC35/2001 |
| **DC27**, RICD 262–273 | 10 | Temas: atos administrativos, serviços, contas, Corregedoria, policiamento, armas e acesso; **Q3 diferencia Mesa/72h/Plenário** e Q5 diferencia Diretor-Geral de Presidente. **Confirmar literalmente 72h, 30 de junho e quóruns/competências** antes de certificar |
| **DC28**, mapa do edital e órgãos | 10 | Mapa integra quatro recortes de RICD: 1º–24, 65–94, 226–251, 262–273; **a afirmação de literalidade do edital deve ser relida diretamente no PDF do Cargo 1** e comparada a retificações. Não confundir material de apoio suplementar com obrigatoriedade literal |
| **DC29**, RCCN 1º–3º | 10 | **Art.1º, incisos I–III e IX–XI, confirmados** nas normas do Senado; sessão conjunta de promulgação de PEC não substitui votação separada por Casa; vetos têm quóruns separados; Câmara é local habitual, não titular de direção |
| **DC30**, RCCN 53–103 | 10 | **Arts.53–56 sobre sessões solenes corroborados**: qualquer número, sem expediente e sem questões de ordem, com regra especial de ausência de oradores na inauguração/posse. **Risco de vigência** nos arts.72–88 revogados e arts.89–103 sobre orçamento; cotejar Res. 1/2006-CN antes de homologar os itens 6–10 |
| **DC31**, RCCN 4º–52 | 10 | Núcleos de comissões mistas, CPMI, abertura de sessão conjunta com 1/6 por Casa (**86 deputados e 14 senadores**), votos separados e subsidiariedade Senado→Câmara; conferir alterações da Resolução 1/2024-CN e regras específicas de 11+11 |
| **DC32**, Res. 3/1990-CN | 10 | **7 senadores+16 deputados titulares, e suplentes equivalentes**, confirmados na fonte oficial; mandato acompanha recesso e não se suspende por convocação extraordinária. **Art.3º da Resolução guarda datas históricas (15/2–30/6, 1/8–15/12)**, superadas pelo art.57 da Constituição, que rege calendário corrente. **Q10 ERRADO** bem justificada. Conferir todas as condições e quóruns dos arts.7–10 antes da homologação |
| **DC33**, Res. 1/2002-CN | 10 | Confirmados institucionalmente **48h**, **12+12**, suplentes e **vaga extra por Casa às minorias**. O arquivo registra ADI4029 (obrigatoriedade da comissão mista) e ADI5127 (limite a emenda estranha), mas **inteiro teor e efeitos de modulação ainda precisam ser cotejados antes da validação final**. Também conferir tramitação especial e recesso |

**Resultado das questões neste grau de exame:** 110/110 **enunciados e respectivas justificativas localizados/lidos**; os exemplos centrais acima correspondem às normas efetivamente consultadas. Não apareceu, nesses cotejos selecionados, **inversão inequívoca de gabarito**. É incorreto inferir desse resultado que os **110 itens foram certificados integralmente** ou que fontes secundárias e exceções normativas foram confirmadas uma a uma. Nenhum artigo recebeu selo integral.

### Riscos prioritários e especificação de correção futura

- **NC-PL-023, importância ALTA, gestão de vigência:** o Regimento Comum contém dispositivos anteriores à CF/1988 com notas de revogação e a Resolução 3/1990 mantém datas anteriores à EC50/2006. DC30/DC32 já avisam o leitor, mas no fechamento da auditoria **citar dispositivos vigentes, revogados e historicamente superados em campos distintos**; sobretudo não transformar texto antigo em gabarito atual. A matriz deve também incluir a Resolução 1/2006-CN para orçamento. **Risco sistêmico, não gabarito invertido confirmado**.
- **A-PL-092, atualização correta:** DC23 inclui a RCD33/2026, importante para Q8 e funções da Mesa. É necessário conferir junto dela os arts.13-A, 14 e 9º, porque versões anteriores exibem restrições diferentes.
- **A-PL-093, regra correta:** DC26 Q1 sobre gestante, 30ª semana **ou** atestado, tem confirmação textual literal do RICD art.227-A; a alternativa não significa requisito cumulativo.
- **A-PL-094, regra correta:** DC32 distingue calendário histórico do art.3º da resolução e CF art.57 vigente; não alterar o texto original da resolução ao citá-lo, mas explicar sua incompatibilidade temporal.
- **A-PL-095, regra correta:** DC33 Q2 reflete composição 12+12 e vaga adicional de minoria da resolução; **não** confundir com regra geral de comissão mista nem com a 7+16 da Comissão Representativa.
- **NC-PL-024, prioridade EDITORIAL já registrada:** DC25 e DC26 usam `CAM-PL-022` em sentidos diferentes; reconciliar com arquitetura (CAM-PL-022: deputados arts.226–251) e manter DC25 sob código único adequado, preservando links e ids de artigo.
- **Pendência cruzada DC34–37:** erros críticos anteriores sobre Código de Ética, CPI, Súmula 5 e Tema 22 continuam abertos, sem autorização para editar artigos na Fase 1.

### Progresso revisado da Fase 1

**29/29 arquivos inventariados. 269 questões C/E lidas/confrontadas em graus variados nas baterias de 27/29 arquivos**; somente **DC06 e DC10** não tiveram ainda uma conferência individual equivalente de suas baterias, **e nenhum dos 29 arquivos teve todas as afirmações, normas, citações, jurisprudência e exercícios integralmente certificados**. Antes, havia 159 questões examinadas em 16 arquivos; esta rodada acrescentou 110 questões e 11 arquivos. **Estimativa qualitativa: ~70% do esforço da Fase 1 executado, ~30% restante.** Essa estimativa mede avanço de triagem e cotejo dirigido, mas o trabalho residual de revisão normativa aprofundada e confirmação literal do edital pode ser maior. Progresso de leitura não é aprovação.

**Próximo bloco:** DC06/DC10, inventário das suas questões, cotejo de jurisprudência constitucional e reconciliação das 33 unidades CAM-PL com edital; depois voltar aos erros críticos e consolidar pendências de normas sem encerrar prematuramente a Fase 1. Nenhum artigo de estudo alterado.
