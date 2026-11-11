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


### Execução: precisão normativa DC24–DC27 (11/11/2026)

**Cotejo dirigido de quatro artigos** com [RICD em publicação oficial consolidada, edição 31 de 2026](https://bd.camara.leg.br/bd/items/4bcfab5c-3cdf-4693-aec5-5680f5f0142d) e respectivas passagens indexadas. Foram lidos os **40 itens C/E** dos DC24, DC25, DC26 e DC27 com seus comentários, mas não houve conferência independente exaustiva das 40 hipóteses com a literalidade de cada artigo e suas alterações; **nenhum deles está integralmente certificado**.

**DC25, commit `5c73b5f8cad9862afce7edf8ca0d0c4a09307e34`:** diferenciada a redação do **RICD art. 82** (11h ou 16h, conforme o caso) da regra do **art. 66, III**, alterado pela Res. 21/2021, que fixa 16h na sessão ordinária. Complementado o comentário do item 4 com os limites do **art. 87, § 2º**: três falas por semestre, **uma por sorteio e duas por cessão de vaga**. Gabaritos não alterados.

**DC26, commit `2c4454cea1ca241c0e9a6719ddd5ab0ca3b671ed`:** reforçado que as regras regimentais históricas de licença para processo penal dos arts. 249/251 não são o atual instituto constitucional de sustação posterior da ação penal (CF art. 53 com EC 35/2001). Complementado item 6 com a continuidade da convocação do suplente durante a licença médica original **superior a 120 dias** e suas prorrogações, sem soma de afastamentos menores (RICD art. 241, III). Gabaritos não alterados.

**DC24:** cotejados pontos de arts. 56 (deliberação de comissão), 57, XVI (vista conjunta e urgência), 61-A (PAFC em cinco sessões), 79, § 2º (abertura com 1/10 desprezada a fração) com os fundamentos expostos no artigo. Não foi detectada divergência confirmada nesses pontos, de modo que **nenhuma edição foi aplicada** a DC24 nesta rodada.

**DC27:** arts. 263 (parecer prévio da Mesa), 264 (reclamação à Mesa em 72 horas), 265, §§ 1º, 3º e 4º (despesa pelo Diretor-Geral, balancetes à Mesa, contas ao TCU pelo Presidente) e 266 foram cotejados, com formulações convergentes. **Nenhuma edição aplicada** ao DC27. Restam conferência literal e precedentes sobre polícia da Câmara e etapas dos arts. 267–273.

**Contagem editorial:** 11/29 artigos modificados desde a autorização de correções (**37,9%**). **0/29 certificados integralmente.** A porcentagem mede artigos alcançados com edições, não a conclusão de auditoria. Permanecem 18 artigos sem alterações nesta fase; alguns podem estar corretos. Próxima rodada: completar conferências de DC24–27 e avançar para DC29–33 (Regimento Comum e resoluções).


## Bloco 24: textos-base DC06/DC10, jurisprudência e fechamento do inventário de baterias (11/11/2026)

**Arquivos efetivamente lidos:** `3 - Materias/Direito Constitucional/06 - poder legislativo.md` (329 linhas; unidade CAM-PL-018 incorporada); `3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte.md` (539 linhas; unidades CAM-PL-011 e CAM-PL-015 incorporadas). Foram localizados e lidos, com cotejo jurídico dirigido, **10 itens C/E de DC06**, **8 itens de lei ordinária/complementar de DC10** e **10 itens sobre PEC em DC10**: total **28 questões**, com o comentário de cada uma. Em razão do tamanho das bases e de seus inúmeros exemplos conceituais, a auditoria de todas as afirmações do texto corrido permanece pendente.

### DC06: fiscalização e Tribunal de Contas, dez itens

| Q | Gabarito no arquivo | Cotejo normativo dirigido |
| --- | --- | --- |
| 1, titularidade do controle externo invertida (TCU/Congresso) | ERRADO | CF art.71: Congresso exerce controle externo **com auxílio** do TCU |
| 2, fiscalização também operacional, patrimonial, subvenções e renúncia | CERTO | CF art.70 caput |
| 3, pessoas privadas que lidam com recurso público dispensadas de prestar contas | ERRADO | CF art.70 parágrafo único |
| 4, TCU julga contas anuais presidenciais e só opina sobre gestores | ERRADO | CF art.71 I–II: parecer prévio presidencial; julgamento das contas de gestores |
| 5, CMO requer esclarecimento em 5 dias e parecer conclusivo do TCU em 30 dias | CERTO | CF art.72 caput, §1º, para indícios de despesa não autorizada |
| 6, CMO susta despesa diretamente | ERRADO | CF art.72 §2º: **propõe ao Congresso** quando risco grave |
| 7, sustação de ato pelo TCU vs contrato inicialmente pelo Congresso | CERTO | CF art.71 X §§1º–2º; ressalvar **poder cautelar do TCU** (NC-PL-020 no DC37) |
| 8, dever de informar TCU recai em qualquer cidadão sob responsabilidade solidária | ERRADO | CF art.74 §1º: titulares do controle interno; cidadão pode denunciar no §2º |
| 9, EC139/2026 protege permanência de Tribunais de Contas | CERTO | [Texto integral oficial da EC139/2026, Senado](https://legis.senado.leg.br/norma/43257393/publicacao/43258265) e CF art.75, cuja redação atual confirma permanência e vedação de extinção/criação/instalação |
| 10, TCU integra Poder Judiciário | ERRADO | CF arts.71–73; TCU é instituição de controle, não órgão do Poder Judiciário |

**A-PL-096, confirmado e temporalmente importante:** `DC06` está atualizado à **EC nº 139, de 05/05/2026**, que também modificou art.31 §1º. Uma fonte constitucional antiga não bastaria para auditar a nota. A referência normativa é **real e correta**, sem erro de gabarito no item 9. **A-PL-097:** a descrição de TCU em DC06 deve ser articulada com DC37: atribuição de sustação contratual pelo Congresso **não exclui todo o poder cautelar preventivo** do TCU. Q7/DC06 é suficientemente específica e não exige inversão, porém a comparação cruzada das notas precisa evitar contradições.

### DC10: leis ordinárias/complementares, oito itens

| Q | Gabarito | Verificação delimitada |
| --- | --- | --- |
| 1, LC aprovada com 220 favoráveis em 300 presentes | ERRADO | CF art.69 requer maioria absoluta dos membros |
| 2, LC maioria absoluta, PEC 3/5 em 2 turnos por Casa | CERTO | CF arts.69 e 60 §2º |
| 3, toda legislação tributária seria reservada a LC | ERRADO | CF art.146 reserva **objetos específicos** |
| 4, LC pode receber aprovação conclusiva das comissões | CERTO para a **negação enunciada**: o item afirma que **não se submetem**, gabarito CERTO | RICD art.24 II a exclui LC do poder conclusivo |
| 5, LC seria sempre superior hierarquicamente à LO | ERRADO | STF: **ausência de hierarquia geral** entre LO/LC; reserva por matéria |
| 6, Estatuto da Magistratura de iniciativa do STF/LC | CERTO | CF art.93 |
| 7, espécie LC implica automaticamente regime prioritário | ERRADO | RICD art.151: regime depende do enquadramento |
| 8, LO altera benefício de servidor em LC materialmente ordinária | CERTO | [STF Tema 1.352, ARE 1.521.802, tese e acórdão publicados em setembro/2025](https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=1352): alteração/revogação possível nos limites da tese e simetria |

**A-PL-098, fonte correta:** o [STF, resultado do ARE 1521802](https://portal.stf.jus.br/processos/listarProcessos.asp?classe=ARE&numeroProcesso=1521802) fixa exatamente a tese citada pelo artigo. **Diferente do erro com o Tema 22 do DC36**, o Tema 1352 está devidamente vinculado ao objeto descrito. Como a tese versa sobre benefício de servidor público e materialidade ordinária, não generalizar para toda disciplina em LC.

### DC10: PEC, limites e rito da Câmara, dez itens

| Q | Gabarito | Cotejo dirigido |
| --- | --- | --- |
| 1, CCJC admite PEC e encerra mérito | ERRADO | RICD art.202: comissão especial ainda aprecia mérito |
| 2, comissão especial 40 sessões para parecer | CERTO | Art.202 §2º |
| 3, emendas na especial nas primeiras 10 sessões, 1/3 assinaturas | CERTO | Art.202 §3º |
| 4, 300 votos em dois turnos bastam com presença elevada | ERRADO | CF art.60 §2º: **3/5 dos membros**, 308 na Câmara com 513 membros |
| 5, PEC de iniciativa do Presidente depende de sanção | ERRADO | CF art.60 §3º: Mesas promulgam, sem sanção |
| 6, dois turnos nominais, intervalo de 5 sessões na Câmara | CERTO | RICD art.202 §§6º–7º, requer validação literal final |
| 7, proposta de mais de metade das Assembleias por maioria relativa | CERTO | [CF art.60 III, Câmara, norma atualizada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html) traz **maioria relativa** em cada Assembleia |
| 8, intervenção federal não impediria emenda por omissão do RICD | ERRADO | CF art.60 §1º: proibição expressa |
| 9, emendas do Senado a PEC retornam à Câmara sob rito PEC | CERTO | RICD art.203, confirmar literalidade ao concluir |
| 10, inadmissibilidade CCJC admite pedido de revisão com líderes >=1/3 | CERTO | RICD art.202 §1º, confirmar formalidades ao concluir |

**A-PL-099, positivo com ressalva:** a nota explica **diferença entre CF art.60 III e redação do RICD art.201 I**, e dá prevalência à maioria relativa da Constituição; a literalidade constitucional foi confirmada. **A-PL-100, coerência de procedimento:** [explicação oficial da Câmara sobre tramitação de PECs](https://www.camara.leg.br/entenda-o-processo-legislativo/) confirma o itinerário **CCJC → comissão especial → 2 turnos no Plenário → outra Casa → promulgação** e quórum de 3/5. Os números do art.202 §2º–3º (40 sessões e primeiras 10 sessões para emendas) foram corroborados por reproduções oficiais do dispositivo; a leitura integral da redação de 2026 continua necessária para demais ressalvas.

**Resultado deste bloco:** **28/28 gabaritos sem inversão identificada nos núcleos contrastados**, mas **não auditados exaustivamente todos os parágrafos, precedentes, exemplos, remissões e divergências históricas de DC06/DC10**. Com esses dois arquivos, **todas as 29 baterias da trilha tiveram seus enunciados localizados e confrontados em grau variável**.

### Reconciliação e indicadores de fechamento da Fase 1

- **29/29 arquivos únicos** identificados na arquitetura (DC06, DC10–37, com DC11–37 = 27).
- **297 questões C/E lidas em grau dirigido**: 269 anteriormente + DC06 (10) + DC10 (18). **29/29 baterias localizadas e examinadas**; não são 297 provas oficiais Cebraspe nem 297 certificações exaustivas.
- **33 unidades editoriais CAM-PL → 29 arquivos** mapeadas no bloco 9. Conflitos de codificação **CAM-PL-020** (DC14 versus Mesa DC23) e **CAM-PL-022** (DC25 versus deputados DC26) continuam na fila de reparo. Reavaliar os recortes de literalidade a partir do edital e suas retificações.
- **0/29 artigos certificados integralmente** em texto, gabarito, jurisprudência, normas e fonte.
- **Riscos confirmados prioritários:** DC34 Código de Ética (NC-PL-001–016), DC35 CPI prorrogação (NC-PL-017), DC36 Súmula 5 invertida e Tema 22 desconexo (NC-PL-018/019), DC37 TCU e cautelares (NC-PL-020), DC13 unidade dias/sessões (NC-PL-021). NC-PL-022–024 descrevem riscos editoriais/versão, não erros jurídicos inequívocos.
- **Estimativa qualitativa: ~75% da Fase 1 realizado, ~25% restante**, com peso elevado do trabalho faltante: leitura jurídica **frase a frase** de todos os textos, verificação dos fundamentos secundários/precedentes, edital e retificações, decisões de tratamento de divergências; consolidar relatório final e aprovar matriz de remediação antes de Fase 2. O percentual pode ser revisto caso apareçam novos erros.
- **Próxima ação:** auditoria transversal e documental dos **24 registros NC-PL**: reavaliar certeza, separar falsidade normativa de impropriedade de citação e de divergência histórica, consultar atos vigentes, priorizar risco ao estudo, e entregar plano final de correção sem executar as edições. Verificar especialmente a consistência do texto do edital do Cargo 1 nas versões oficiais.

**Nenhum artigo de estudo alterado. A Fase 1 não está encerrada.**


### Execução editorial: comparação de colegiados nos DC29–33 (11/11/2026)

**Conferência dirigida:** recuperados os cinco artigos DC29, DC30, DC31, DC32 e DC33, examinando organização, competências, prazos, modalidades de sessão, composição e ressalvas de vigência. Fontes oficiais cotejadas: [RCCN consolidado até julho de 2025](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional), [Resolução 1/1970-CN](https://www2.camara.leg.br/legin/fed/rescon/1970-1979/resolucao-1-11-agosto-1970-497934-republicacaoatualizada-171822-pl.html), [Resolução 1/2002-CN](https://www2.camara.leg.br/legin/fed/rescon/2002/resolucao-1-8-maio-2002-497942-normaatualizada-pl.html), [Resolução 3/1990-CN](https://legis.senado.leg.br/norma/561157/publicacao/36852072) e CF arts. 57, 60 e 62. Foram corroborados: regras de sessões conjuntas e PEC em DC29–30; RCCN art. 10 (11+11 e instalação em 48 horas) e art. 10-A em DC31; composição 7+16 e convocação em 12 horas em DC32; composição especial 12+12 com vagas minoritárias e instalação em 24 horas, além do prazo de designação de 48 horas, em DC33. Há ressalvas sobre vigência e exceções cuja revisão completa segue pendente.

**Melhoria publicada no DC31:** commit `77b449b9bd8c5b22e2281160e3187f7815dd1fbf`. Acrescentada tabela de contraste entre comissão mista geral, comissão mista de medida provisória e Comissão Representativa, com respectivos números, marcos iniciais de prazo, vínculos aos DC32/DC33 e referências às normas específicas. A tabela reforça diferenças verificadas; **não implica que todos os 50 itens C/E desses cinco artigos tenham sido certificados individualmente**. Os DC29, DC30, DC32 e DC33 permaneceram sem alterações nesta rodada porque não houve novo erro normativo claramente demonstrado nos pontos examinados.

**Andamento editorial acumulado:** **12/29 artigos modificados (41,4%)**; **0/29 integralmente certificados**. Restam 17 artigos não modificados, sem inferência automática de incorreção. A matriz não substitui futura validação completa de procedimentos especiais, dispositivos revogados e exercícios.


### Execução editorial: remissão inconstitucional residual no DC33 (11/11/2026)

**Correção publicada:** commit `813ecfe307f9bb6fd259bf304f669139a7e40c3d`, artigo DC33, seção Câmara, Senado e retorno. O **art. 7º, § 2º, da Resolução 1/2002-CN** ainda menciona prazo do **art. 6º, caput**, expressamente declarado inconstitucional na ADI 4.029; o material agora separa a remissão histórica do regime vigente, preservando a comissão mista e a precedência da Câmara conforme CF art. 62, §§ 8º–9º. Fonte primária: [Resolução 1/2002-CN consolidada na Câmara](https://www2.camara.leg.br/legin/fed/rescon/2002/resolucao-1-8-maio-2002-497942-normaatualizada-pl.html), arts. 6º–7º.

**Cotejo adicional:** lidos enunciados e comentários dos **50 itens C/E** dos DC29–33. O núcleo dos dez itens DC29 (objeto, convocação e local) corresponde ao RCCN, arts. 1º–3º; os dez DC30 incluem distinções de solenidades, procedimentos revogados e orçamento, cotejadas de modo seletivo com RCCN, arts. 53–103. As principais regras de DC31 (líderes, composição, votação por Casa) constam do RCCN, arts. 4º–52 e 151; DC32 reproduz a composição 7+16, condições e quóruns de Res. 3/1990-CN; DC33 enfatiza procedimentos de MP e ADI 4.029. **Nenhuma inversão de gabarito demonstrada por este cotejo delimitado.** Parte das referências cruzadas, exceções, regulação orçamentária especial e precedentes ainda depende de revisão exaustiva. DC29–32 não foram editados nesta etapa: nenhuma nova divergência foi comprovada com segurança nos trechos consultados.

**Indicador corrigido:** **13 de 29 artigos receberam alguma edição (44,8%)**, após adicionar DC33 à lista (DC13, DC14, DC23–26, DC28, DC31, DC33–37). **0/29 integralmente certificados**. Faltam **16 artigos sem edição**, o que não representa 16 artigos incorretos. É necessária certificação artigo a artigo para completar a auditoria.


## Bloco 25: reclassificação transversal NC-PL-001–024 e estado REAL dos arquivos (11/11/2026)

**Objetivo:** confrontar o diagnóstico histórico com o **conteúdo atual dos artigos no GitHub**, evitando propor reparos já executados por outra frente ou declarar materiais imutáveis quando os commits no próprio repositório provam intervenções paralelas. Foram relidos os registros NC-PL-001–024, as notas de execução intercorrentes no próprio relatório e as versões mais recentes de `DC13, DC14, DC25, DC26, DC34, DC35, DC36 e DC37`. Esta seção é uma **fotografia datada**, e as confirmações pós-correção são **pontuais**: não implicam certificação integral.

**Fontes oficiais novamente contrastadas:** [Código de Ética, Res.25/2001, consolidada (arts.7º–18)](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html); [RICD atualizado até RCD34/2026](https://www2.camara.leg.br/atividade-legislativa/legislacao/regimento-interno-da-camara-dos-deputados); [STF Súmula 5, verbete superado](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1318); [Câmara, CPIs, até 120+60 dias e deliberação do Plenário](https://www2.camara.leg.br/comunicacao/assessoria-de-imprensa/guia-para-jornalistas/comissoes). **Não ler apenas o primeiro diagnóstico, que descreve o estado anterior a commits de reparo.**

### Matriz de reconciliação, sem apagar o histórico

| IDs | Natureza do achado original | Evidência pós-correção observada | Estado atual |
| --- | --- | --- | --- |
| **001–004** | **Crítico, DC34:** defesa/testemunhas, parecer/instrução, 60/90 dias úteis, Ordem do Dia em sessões | Texto e fluxograma atuais registram **10 dias úteis, até 8 testemunhas, instrução de 30/40 dias úteis, parecer 10 dias úteis, limites 60/90 dias úteis**; cronologia da Ordem do Dia precisa de inspeção final de seus marcos | **Reparo material realizado, validação de ponta a ponta pendente** |
| **005** | **Importante, pedagógico:** ritos de censura e sanções graves confundidos | Texto DC34 atual distingue arts.11–14; diagrama traça ramos próprios | **Mitigado, conferir todos os nós Mermaid e casos** |
| **006** | **Crítico:** Corregedor votaria no Conselho | DC34 atual contém “**voz, sem voto**”, art.9º §4º, nos parágrafos e tabela correlata | **Corrigido textualmente e reconfirmado** |
| **007–010** | **Importante:** legitimidade de cidadão, remissões dos impedimentos, incisos de prerrogativas, afastamento de conselheiro | Trechos gerais do DC34 foram reorganizados; parte das referências atuais já não contém o erro descrito no diagnóstico original | **Revisão de cobertura pendente; NÃO marcar resolvido em conjunto sem checklist por dispositivo** |
| **011–012** | **Crítico/importante:** relator substituto, sanções abrangidas por art.16 | DC34 atual distingue novo relator do prazo geral, menciona censura fora do limite 60/90 dias úteis | **Mitigado; conferir gatilhos específicos de avocação e sujeitos de decisão** |
| **013** | **Crítico:** maioria absoluta para aprovar parecer no Conselho | DC34 agora diz **maioria simples, presente maioria absoluta**, e distingue 257 votos do Plenário para perda de mandato | **Corrigido textualmente; cotejo do acordo de 2025–2027 ainda indispensável para certificação** |
| **014–015** | **Crítico/importante:** conteúdo fiscal superado e tipo documental do art.18 | DC34 atual art.18 trata **autorização para acesso ao IRPF** e declaração de impedimento; retira antigas obrigações de 90/30 dias atribuídas ao Código | **Corrigido textualmente; verificar remissão e sigilo dos §§1º–4º em leitura final** |
| **016** | **Importante, generalização:** censura versus perda automática | Caso atual DC34 passou a admitir enquadramento grave somente mediante fatos e fundamento específicos | **Mitigado, sem conversão automática em erro inequívoco** |
| **017** | **Crítico, DC35:** CPI prorrogada pela própria comissão | Texto atual descreve **deliberação do Plenário**, 120 dias até metade; coincide com DC14 atualizado | **Corrigido e reconfirmado pelo RICD/Câmara** |
| **018–019** | **Crítico, DC36:** Súmula 5 invertida e Tema 22 fora de assunto | Texto, comentário Q2 e fontes agora mostram Súmula 5 **histórica superada** e Tema 22 de concursos, sem fundamentar iniciativa legislativa | **Corrigidos e reconfirmados no STF** |
| **020** | **Importante/alto risco, DC37:** cautelar do TCU equiparada à sustação definitiva | Texto atual discrimina **cautela de repasses**, sustação contratual pelo Congresso e decisão subsidiária do TCU após 90 dias | **Corrigido textualmente; observar reservas da jurisprudência sobre cautelares em contratos** |
| **021** | **Importante, DC13:** “cinco dias/sessões” | Texto atual discrimina **três prazos de cinco sessões** e marcos diferentes | **Corrigido e reconfirmado** |
| **022** | **Médio, transversal:** ausência de matriz de atos e prazos | Existe distinção em cada nota, mas **não há matriz transversal de correspondência com risco e fonte** no relatório | **Pendente, tarefa de consolidação**, não erro confirmado |
| **023** | **Alto, transversal:** vigência e revogações do RCCN e Constituição | DC30/DC32 registram exceções históricas; falta quadro consolidado comparando ato original, norma posterior e consequência atual | **Pendente como verificação de versões e vigência**, não gabarito invertido |
| **024** | **Editorial:** CAM-PL-022 duplicado DC25/DC26 | DC25 atual declara ser **complemento CAM-PL-021** e reserva **CAM-PL-022 ao DC26**. DC26 confirma unidade 022 | **Conflito mitigado no conteúdo; restam metadados/catálogo/backlinks a auditar** |

**Achado adicional de sincronização editorial:** no texto atual **DC14**, a antiga colisão `CAM-PL-020` foi mitigada por **nota de rastreabilidade** que reserva `CAM-PL-020` à unidade de Mesa/órgãos, DC23, e integra o aprofundamento de comissões à `CAM-PL-004`. **Não voltar a classificá-la como colisão textual integralmente aberta**, mas conferir identificadores de frontmatter, catálogo e links antes de declarar encerrada a reconciliação.

### Classificação das ações restantes

**Prioridade P0, segurança dos estudos:** validar integralmente o **DC34 corrigido**, comparando célula por célula a tabela de sanções, diagrama Mermaid, procedimentos dos arts.9º/13/14/16/18, Acordo do Conselho 2025–2027 e seis itens C/E. É o único artigo que teve **múltiplas falsidades normativas graves em vários lugares**. Resultado esperado: atestado por dispositivo, localização, conclusão e evidência; erros residuais novos, se existentes, devem receber novos IDs.

**Prioridade P1, coerência transversal e atualização:** conferir todas as ocorrências das regras de CPI e TCU em **DC06, DC14, DC35, DC37**; testar literalidade de debates, intervenções e casos sobre prazos/competências; certificar que DC36 **não** usa Súmula 5 ou Tema 22 como fundamento positivo; revisar doutrina e precedentes adicionais do texto de PEC. Já existem correções demonstradas, portanto **não reescrever os trechos reparados sem detectar defeito residual**.

**Prioridade P1, vigência e edital:** obter **programa integral e retificações do Cargo 1 diretamente da fonte oficial** e comparar com as 33 unidades CAM-PL. Conferir atualização regimental 2026, RCCN arts.53–103 e partes revogadas, Res.1/2006-CN orçamento, Res.3/1990-CN calendário e Res.1/2002-CN MP/ADI4029. Diferenciar “tema útil” de “literalidade de edital”.

**Prioridade P2, arquitetura editorial:** varrer campos frontmatter, links, índice de planejamento e títulos para remover colisões remanescentes de códigos 020/022 sem alterar articleIds nem perder conteúdo histórico. Unificar a matriz de prazos por órgão, ato, norma, duração, unidade, início, suspensão e efeito, para testar os exercícios da Cebraspe.

### Correção importante do próprio relato de progresso

Em blocos históricos deste relatório aparece a frase **“nenhum artigo alterado”**: ela era verdadeira na execução da conversa de auditoria correspondente, mas **não descreve o estado consolidado da branch após as edições paralelas documentadas por commits**. Pela verificação atual, pelo menos `DC13, DC14, DC25, DC34, DC35, DC36 e DC37` apresentam ajustes editoriais ou jurídicos recentes. **Contagem exata de arquivos editados e de NCs encerradas não deve ser inferida dos totais históricos contraditórios sem consultar commits atuais por caminho**. Todas as mudanças desta rodada de bloco 25 foram **somente no relatório e no índice**, não em artigos de estudo.

### Progresso

O inventário e as baterias permanecem **29/29 arquivos e 297 enunciados C/E com conferência dirigida**; **0/29 textos integralmente certificados**. Com a reconciliação pós-correção e o plano priorizado, estima-se **~80% do esforço da Fase 1 percorrido e ~20% ainda pendente**, porém o saldo inclui verificações jurídicas de alta complexidade. O percentual é **heurístico**, sujeito a revisão, não uma métrica objetiva. A Fase 1 da auditoria como validação **continua aberta**, mesmo havendo correções já executadas em frentes paralelas.

**Próximo bloco:** auditoria integral pós-correção de DC34 (texto, gabaritos e fluxograma), com checklist de dispositivos, cotejo de cada condição e classificação residual, e depois certificação de escopo do edital.


### Execução: harmonização das bases DC06 e DC10 (11/11/2026)

**DC06, correção publicada:** commit `b2894aca182df762c70b44ed1b50c6e9378ed1a8`. As seções «Sustação de ato × contrato» e «Atos administrativos, contratos e execução de decisões» agora separam o **poder cautelar do TCU** da **sustação constitucional definitiva** (CF art. 71, §§ 1º–2º). A passagem dos 90 dias não é exigência universal para cautelares fundadas em risco ao erário. Acrescentada conexão com o DC37 já corrigido. Fonte independente: [STF, art. 71, MS 24.510](https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=71&abrirBase=CF).

**DC06, fontes confirmadas:** [EC 139/2026, texto promulgado](https://legis.senado.leg.br/norma/43257393/publicacao/43258265), efetivamente altera CF arts. 31, §1º, e 75; não foi apagada a atualização constitucional correta. O núcleo dos 10 itens C/E do refinamento CAM-PL-018 foi examinado, incluindo art. 72, com os prazos de 5 dias para esclarecimento e 30 dias para pronunciamento do TCU; a [Constituição atualizada](https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao) corrobora os marcos. **Sem inversão de gabarito comprovada** nesse cotejo dirigido, sem certificar o artigo todo.

**DC10, fonte confirmada:** [STF, Tema 1.352, ARE 1.521.802](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=7072851&numeroProcesso=1521802&numeroTema=1352), sobre alteração/revogação por lei ordinária de benefício estabelecido em lei complementar **materialmente ordinária**, observado princípio da simetria. Precedente corresponde à referência central do artigo. Itens do refinamento sobre LC/LO e PEC lidos, mas remissões laterais e integralidade do procedimento regimental ainda pendentes; **DC10 permaneceu intacto** nesta rodada por falta de erro pontual confirmado.

**Andamento da fase editorial:** **14/29 artigos com alguma alteração (48,3%)**, **0/29 integralmente certificados**. Total de artigos sem alteração: **15**; isso não equivale a lista de erros. Prioridade seguinte: passar da conferência seletiva à verificação fechada de pelo menos um artigo, com matriz de afirmações, dispositivos, itens e exceções, antes de aumentar indefinidamente a quantidade de artigos tocados.


## Bloco 26: verificação pós-correção DC34, checklist normativo e falhas residuais (11/11/2026)

**Objeto:** versão atual `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md`, SHA `3721a69480cba194da12778ac7630681a506c37f` (339 linhas). Lidos texto integral, tabela de sanções, fluxograma Mermaid e **seis questões C/E e respectivos comentários**; conferidos com a [Resolução 25/2001 consolidada, arts.3º–18](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), [Acordo de Procedimentos 2025–2027](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/acordo-de-procedimentos-2025-2027/acordo-de-procedimentos-2025-2027/view), [ata de 8/7/2025](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/atas/atas-de-reunioes-2025/ata-8-de-julho-de-2025-eleicao-do-2deg-vice-presidente-e-instauracao-do-processo-em-desfavor-do-deputado-gilvan-da-federal), [RICD atualizado em 2026](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) e [Res.11/2024 da Câmara](https://www2.camara.leg.br/legin/fed/rescad/2024/resolucaodacamaradosdeputados-11-12-junho-2024-795774-publicacaooriginal-172082-pl.html). Conferência realizada sobre o texto disponível, **não houve edição do artigo original**.

### Itens aprovados no cotejo pós-correção

1. **Prazos e provas do art.14:** 10 dias úteis para defesa e até 8 testemunhas; 30 dias úteis de instrução para suspensão, 40 para perda, seguidos de 10 dias úteis para parecer: **corretos nas linhas 103–104, 156–158, 196 e 202**, e correspondem ao art.14 §4º II/IV.
2. **Art.16:** teto de 60 dias úteis para suspensão de prerrogativas/exercício e 90 dias úteis para perda do mandato; Ordem do Dia em **2 sessões ordinárias** após as condições do §2º; novo relator com até 5 dias úteis para completar instrução pendente ou oferecer parecer após instrução concluída. O material distingue corretamente esses institutos, embora o fluxograma não reproduza todos os marcos.
3. **Art.7º §§2º e 7º:** quatro impedimentos de membro do Conselho e afastamento após instauração de processo contra conselheiro, com prova inequívoca da acusação; texto atual contempla ambos.
4. **Art.9º:** cidadão encaminha representação à **Mesa**, que tem rito próprio de filtro; **Corregedor pode discutir, não votar** (art.9º §4º). Remissões do Caso 3 foram corrigidas.
5. **Art.12:** censura escrita pela Mesa, 5 dias úteis de defesa e recurso em 2 dias úteis; art.11 censura verbal e recurso em 2 dias úteis. Correspondem aos dispositivos.
6. **Quórum de parecer no Conselho:** votação nominal, **maioria simples presente maioria absoluta**, Presidente apenas desempata, conforme Acordo 2025–2027 item 5, validado também por ata de julho/2025. Decisão de suspensão do mandato e perda no Plenário depende de maioria absoluta, voto ostensivo; artigo diferencia.
7. **Art.18:** autorização de acesso aos dados do IRPF na posse e quando requerida, declaração de impedimento por interesse patrimonial direto e específico; antigas exigências de 90/30 dias retiradas. Quadro e explicação seguem o texto consolidado; conferir, em futura revisão, apresentação literal das regras de sigilo/transferência.
8. **Gabaritos das seis questões:** **Q1 ERRADO**, fraude deliberativa do art.4º IV; **Q2 CERTO**, censura escrita art.12; **Q3 CERTO**, 21 membros e impedimentos de relatoria; **Q4 ERRADO**, quebra de sigilo não é poder autônomo do relator; **Q5 ERRADO**, perda do mandato por maioria absoluta e voto aberto; **Q6 ERRADO**, CCJC limita-se a vícios jurídicos. Os seis núcleos **seguem válidos**, sem necessidade demonstrada de inversão. A questão 4 ainda depende da leitura completa e atual do Regulamento de 2001 quanto ao itinerário de sigilos.

### Não conformidades residuais identificadas agora

**NC-PL-025, IMPORTANTE, erro literal remanescente:** `DC34`, linha 106: subtítulo **“O rol das prerrogativas parlamentares passíveis de suspensão (art. 13, V)”**. O Código consolidado situa o rol no **art.13, VI, alíneas a–d**. O **inciso V** disciplina o encaminhamento do parecer e projeto de resolução à Mesa. A enumeração logo abaixo corresponde materialmente ao inciso VI, mas o subtítulo permanece com fundamento equivocado. **Fase de edição:** alterar só a referência do subtítulo para `art. 13, VI`, preservar conteúdo e verificar backlink de NC-PL-009.

**NC-PL-026, IMPORTANTE/ALTO RISCO, regra histórica falsamente apresentada como vigente:** `DC34 > Composição e mandato`, linha 121, afirma que o partido do Corregedor designa **um deputado a menos**, pois ele possui “assento especial”. Essa regra aparece na **redação histórica original do art.7º §2º de 2001** ([republicação de 2001](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-republicacao-36619-pl.html)), mas **não consta na redação consolidada do art.7º** após a Resolução 2/2011, cujo §2º hoje lista **impedimentos**. A regra vigente expressa do Corregedor é participação no processo **sem voto**, art.9º §4º; logo **não se pode ensinar como fato atual nem presumir desconto de vaga na proporcionalidade** sem apontar norma atual autônoma. **Reparação:** excluir esse item ou classificá-lo como histórico superado, conferir normas complementares aplicáveis à composição, e não alterar a correta regra de voz sem voto. Trata-se de persistência do anacronismo normativo detectado nos blocos 7–10.

**NC-PL-027, IMPORTANTE, lacuna de regime cautelar distinto:** artigo DC34 descreve sanções finais e ritos do Código, mas **omite a suspensão cautelar do exercício do mandato introduzida pela Resolução 11/2024 no RICD art.15, XXX e §§2º–6º**: proposta pela Mesa em **5 dias úteis** do conhecimento do fato em representação de sua autoria; Conselho decide em **3 dias úteis** com prioridade e votação ostensiva; recurso e substituição do colegiado pelo Plenário seguem prazo da **sessão subsequente**, exigindo maioria absoluta para aprovar/manter suspensão. Esse procedimento **é cautelar, anterior à sanção final e não substitui art.14**. Caso o recorte do edital ou a pretensão pedagógica da nota cubra o regime completo, incluir seção própria após cotejar condições; caso contrário, inserir remissão a DC23 (Mesa/RICD art.15) e marcar como aprofundamento complementar. **Não classificar simples omissão como afirmação jurídica falsa**.

**A-PL-101, Mermaid:** diagrama `flowchart TD` tem ramos principais coerentes, porém o **nó H compartilhado** por art.13 e art.14 conduz ao recurso à CCJC e depois ao Plenário, sem espelhar no desenho que **o Conselho pode arquivar ou requalificar** e que o fluxograma representa apenas as vias selecionadas; é um **resumo**, não uma transcrição exaustiva do processo. O nó `E4 → G → I1` sugere novo sorteio de relator na reclassificação da penalidade sem explicitar regra especial do art.13 III d; revisar antes da certificação do fluxograma. A análise foi textual, **não houve renderização independente de Mermaid**.

### Consequência para aprovação

**DC34 NÃO ESTÁ INTEGRALMENTE CERTIFICADO.** A maior parte das antigas incorreções críticas de prazo, votação e art.18 está materialmente reparada e ancorada no Código atual; duas imprecisões textuais remanescentes comprovadas (NC-PL-025/026) e uma lacuna relevante (NC-PL-027) impedem homologação sem decisão editorial e revisão das fontes complementares. **Nenhuma questão exigiu reversão de gabarito.**

**Progresso geral Fase 1:** 29/29 artigos e 297 questões inventariados, conferências dirigidas e DC34 reexaminado no pós-correção; 0/29 artigos certificados integralmente. Estimativa qualitativa do esforço realizado: **~84%, faltam ~16%** para auditoria transversal, edital oficial, normas auxiliares e remissões pendentes. Não é medição objetiva nem selo de validade. **Nenhum artigo de estudo alterado neste bloco.** Próximo: confirmar os demais dispositivos do Código/Regulamento relacionados a NC-PL-026/027 e concluir matriz de cobertura literal do edital, antes de aprovar plano definitivo de reparos.


### Fechamento dirigido DC29: Título I do Regimento Comum (11/11/2026)

**Artigo DC29** atualizado no commit `8552dcd86d67a4005b22c0b9e66034e2f09119e4`. Escopo da conferência: texto completo da nota de estudo, **RCCN arts. 1º–3º** (objeto, convocação e local), quadro das finalidades, oito casos, **dez questões C/E com justificativas**, remissões constitucionais a CF arts. 57, 60, 66 e 68 e links internos para DC10, DC17, DC20, DC28 e DC30. Fontes diretas: [Senado, Regimento Comum](https://legis.senado.leg.br/norma/561098/publicacao/16433839), [Câmara, Constituição consolidada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html) e [edição oficial 2025 com nota explicativa à Mesa do Congresso](https://www2.senado.leg.br/bdsf/bitstream/handle/id/816688/Regimento_comum_normas_conexas_2025.pdf?isAllowed=y&sequence=10). **10/10 gabaritos mantidos**, sem divergência detectada no texto normativo confrontado. A principal melhora foi explicitar que a fórmula histórica do RCCN art. 1º sobre a Mesa do Senado deve ser lida conforme CF art. 57, § 5º, acerca da **Mesa do Congresso**.

**Estado de validação:** **conteúdo e questões do DC29 conferidos contra as fontes indicadas**, mas **não se atribui certificação de vigência integral de 2026**, porque a edição consolidada disponibilizada pelo Congresso informa atualização **até julho de 2025**. Nova pesquisa de atos posteriores e eventuais correções supervenientes são necessárias para concluir a certificação sem essa reserva. Resultado registrado: **0/29 integralmente certificados**, **15/29 artigos que receberam alterações (51,7%)**; **14/29 sem edição**. A métrica de alterações não mede o progresso total da validação.


## Bloco 27: conferência oficial do edital do Cargo 1 e normas complementares do DC34 (11/11/2026)

**Documentação original efetivamente aberta:** [Edital nº 1, de 02/10/2026, da Câmara dos Deputados, Analista Legislativo Especialidades](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades), páginas físicas **52 e 53 do PDF** (índice zero: 51–52); [Edital nº 5, 15/10/2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-5-cd-analista-especialidades-de-15-de-outubro-de-2026), três páginas; [Edital nº 6, 21/10/2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-n-6-cd-especialidades-de-21-de-outubro-de-2026), uma página. Todos inspecionados no original com conferência visual das páginas relevantes. **Cargo correto:** **Cargo 1, Comunicação Social, Divulgação Institucional**, no edital 2026 das **especialidades**; cuidado para não substituir pelo Cargo 1 do edital diferente de 2025, destinado a Processo Legislativo e Gestão.

### Diagnóstico de aderência ao edital

1. **Conhecimentos básicos, Direito Constitucional/Regimento Interno, edital nº 1, p.52:** os recortes expressos são **RICD arts. 1º–24, 65–94, 226–251 e 262–273, com alterações**; e **Regimento Comum, Título I e Título IV, capítulos II e III até art.103**. A matriz CAM-PL-019–023 é pertinente a esses recortes; **DC25 trata arts.81–105**, devendo distinguir **81–94 literalmente nesse bloco básico** de **95–105 suplementares nesse bloco**, embora haja outro motivo para estudá-los no específico.
2. **Conhecimentos específicos, seção “Processo Legislativo e Regimento Interno”, edital nº 1, p.53:** o programa inclui **procedimentos ordinário, abreviado, sumário, sumaríssimo, especial e concentrado; etapas, comissões, pareceres, deliberação, votação, sanção e veto; leis ordinária, complementar e delegada; MP, decreto legislativo/resolução, PEC, indicações, pareceres, requerimentos, vetos, iniciativa e fiscalização contábil/financeira/orçamentária**. O **item 5.1** cobra **“Resolução nº 17/1989 – CD e suas alterações”** sem reproduzir ali restrição por intervalos. O item 6 lista explicitamente **Res.1/1970-CN, Res.3/1990-CN e Res.1/2002-CN**. O item 7 cobra **“Código de Ética e Decoro Parlamentar da Câmara dos Deputados”**. **A ausência de limitação por intervalos no específico não cancela os recortes expressos do básico:** são dois eixos cumulativos do mesmo cargo, e o estudo fora dos quatro recortes não é por isso automaticamente irrelevante.
3. **Correções supervenientes do edital:** o **Edital 5** altera no Cargo 1 o requisito profissional e o quadro de vagas e retifica tópicos de conhecimento específico **somente dos cargos 8 e 9**, e o **Edital 6** altera requisitos/legenda/nota final, **não a seção específica de Processo Legislativo do Cargo 1**. Até a publicação nº 6 consultada, não foi encontrada retificação da lista de tópicos CAM-PL. Conservar a **checagem de novas publicações** antes da prova, evitando garantia prospectiva absoluta.

**A-PL-102, cobertura confirmada:** as **33 unidades editoriais CAM-PL** possuem correspondência temática razoável com o programa específico, e as 29 notas identificadas cobrem os objetos principais estudados; **não é certificação de profundidade e exaustão de todas as fontes e parágrafos**. É legítimo estudar comissões arts.25–54 como parte do processo legislativo e do item 5.1 específico. Classificar uma subseção como “complementar ao básico” não significa “fora do edital específico”. A arquitetura deveria registrar os dois eixos de pertinência por unidade: `básico: artigo literal` e `específico: assunto/Resolução 17`.

### Verificação dos achados residuais DC34 com normas independentes

**NC-PL-025 CONFIRMADA:** [Código de Ética atualizado, art.13](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html) identifica o rol no **inciso VI**, não no V. O subtítulo de DC34 ainda está em `(art. 13, V)`. Erro literal simples a corrigir.

**NC-PL-026 CONFIRMADA NO TEXTO CONSOLIDADO:** o atual art.7º §2º disciplina **impedimentos dos membros do Conselho**; §3º disciplina proporcionalidade; o art.9º §4º assegura **participação do Corregedor sem voto**. O item DC34 `Regra especial da Corregedoria` que diz que seu partido tem **um deputado a menos por assento especial** não está no Código atualizado. Esse mecanismo está associado a **redação histórica anterior à Res.2/2011**; não se encontrou fonte atual que autorize ensiná-lo como regra vigente. **Não afirmar inexistência absoluta em todo o ordenamento sem esgotar atos acessórios**. Correção segura: eliminar a assertiva categórica ou marcá-la como histórica, preservando participação sem voto.

**NC-PL-027 CONFIRMADA COMO LACUNA DE ESCOPO, não falsidade:** [Resolução nº 11/2024 da Câmara, texto original, art.2º](https://www2.camara.leg.br/legin/fed/rescad/2024/resolucaodacamaradosdeputados-11-12-junho-2024-795774-publicacaooriginal-172082-pl.html) introduziu **suspensão cautelar do exercício do mandato no RICD art.15 XXX e §§2º–6º**. Procedimento: Mesa pode propor para representação de sua própria autoria **até cinco dias úteis** após ciência do fato; Conselho decide ostensivamente **em três dias úteis**, com prioridade; se houver recurso, Plenário decide **na sessão imediatamente subsequente**, voto ostensivo e **maioria absoluta** para manter/aprovar a suspensão; se o Conselho não decidir em três dias, Mesa remete ao Plenário. O **Acordo de Procedimentos 2025–2027, item sobre suspensão cautelar**, também contempla rito acelerado sem adiamento ou retirada de pauta. O Código art.14 não foi revogado nem se confunde com a cautelar. O programa específico não limita o Código à versão de 2001 e cobra a Res.17/1989 **com alterações**, de modo que é **recomendável acrescentar distinção breve no DC34** ou referenciar com precisão DC23.

### Decisões e ordem de reparo para Fase 2

- **P0:** DC34: corrigir subtítulo V→VI e frase de assento especial do Corregedor; inserir quadro curto da cautelar RICD art.15 XXX e §§2º–6º, citando Res.11/2024 e evitando equipará-la à suspensão sancionatória.
- **P1:** verificar nova edição do Código, ajustes do Acordo, renderização Mermaid e ciclo de sanção/recurso; montar tabela de fronteiras **Código × Regulamento × RICD**.
- **P1:** matriz de cobertura **dupla** (recortes do básico e programa amplo do específico), com 33 unidades e seus arquivos, sem duplicar conteúdo nem marcar automaticamente conclusão editorial.
- **P2:** normalizar frontmatter/links de CAM-PL-020 e CAM-PL-022, ainda que os textos atuais já façam as ressalvas; validar matriz global de prazos e regimes.

**Estado de auditoria após este bloco:** 29 artigos inventariados, 297 itens C/E examinados em diferentes graus, **sem certificação integral dos 29**. Confirmada documentalmente a aderência *de escopo* das 33 unidades ao programa oficial, embora remanesçam verificações de atualidade e profundidade. **Estimativa qualitativa ~88% da Fase 1, ~12% a concluir**. A estimativa não equivale ao percentual de afirmações certificadas: trabalhos normativos difíceis podem revelar novos pontos. **Nenhum artigo de estudo alterado no bloco 27**; somente diagnóstico e índice.


### Primeira certificação: DC29 e início do fechamento DC30 (11/11/2026)

**DC29, certificação normativa de escopo delimitado:** commit `bdff637fee1c220711b27b66a65e1a9271e7fad2`. Reavaliado o risco de atualização após julho de 2025 mediante consulta ao [cadastro legislativo do Senado, Resolução 1/1970-CN](https://legis.senado.leg.br/norma/561098), que apresenta a **Resolução 3/2025-CN como última norma alteradora cadastrada**, sem alteração posterior dos arts. 1º–3º até a consulta de 11/11/2026. Acrescentada ao DC29 a evidência de vigência e certificação datada, sobre **texto integral da nota, RCCN arts. 1º–3º, correções constitucionais aplicáveis, dez itens C/E com gabaritos, oito casos e relações normativas**. Gabaritos: **10/10 compatíveis**; nenhum invertido. Esta certificação é **temporal e restrita ao Título I**, exigindo atualização se houver novos atos normativos ou retificação posterior. Não representa auditoria dos outros títulos ou estudo pessoal.

**DC30, conferência dirigida inicial para certificação posterior:** recuperado o texto completo e examinados quadro de vigência, sessões solenes (arts. 53–71), promulgação de PEC (art. 85), artigos revogados da parte constitucional (72–84, 86–88), orçamento (arts. 89–103 e Resolução 1/2006-CN) e os dez itens C/E. Nenhuma inversão de gabarito demonstrada nesta verificação. **Permanece pendente** cotejo de detalhes de solenidades e orçamento contra dispositivos atualizados da Resolução 1/2006-CN, particularmente os arts. 90 e 93, e reconciliação de mudanças posteriores do procedimento especial, antes de certificar DC30. Não houve edição no DC30 por falta de erro normativo pontual comprovado.

**Indicadores:** **15/29 artigos modificados (51,7%)**; **1/29 artigo certificado com recorte normativo e data explícitos (3,4%)**, DC29; 14 artigos sem edições desta fase. A certificação exige evidência normativa verificável, questões e explicações conferidas, referências e vigência controladas, separadamente da contagem de arquivos alterados.


### DC30: atualização de 2025 na legislação orçamentária (11/11/2026)

**Mudança publicada no DC30:** commit `05d1fdfd66ccc1c0ddd027dc24ec105e0f72afcd`. O artigo passou a ressaltar expressamente as mudanças de **2025** na disciplina especial das emendas parlamentares sob a [Resolução nº 1/2006-CN atualizada](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao/resolucao-n-01-de-2006-cn) e o [catálogo legislativo da CMO](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao). A Resolução nº **1/2025-CN** modificou regras de emendas de comissões, bancadas e parlamentares; a Resolução nº **2/2025-CN** modificou requisitos para beneficiários e indicações. Essas regras especiais não se deduzem automaticamente do RCCN, arts. 89–103. Os dez itens C/E do DC30 foram relidos, mas **não houve certificação completa do artigo nem inversão de gabarito comprovada** nesta etapa.

**DC29:** a certificação datada realizada na rodada anterior permanece como registrada, limitada à consulta ao [cadastro legislativo do Senado](https://legis.senado.leg.br/norma/561098) e aos arts. 1º–3º. Nova norma superveniente pode exigir revalidação.

**Andamento:** **16/29 artigos com edição (55,2%)**; **1/29 artigo certificado com recorte e data (3,4%)**. Permanecem 13 artigos sem edição. O próximo fechamento requer auditoria individual das passagens do DC30 sobre arts. 89, 90, 93, 99, 100, 102 e 103 à luz da norma especial e de possíveis revogações antes de declarar certificação integral.


## Bloco 28: matriz executável de reparos, lacunas e validação de normas complementares (11/11/2026)

**Objetivo e base:** reconciliar o diagnóstico de 27 blocos com os arquivos de estudo **na versão atual** antes de recomendar alterações. Reabertos `DC13, DC14, DC25 e DC34`; checados os trechos identificados em `NC-PL-021/024/025/026/027`. As fontes normativas oficiais consultadas incluem [Código de Ética consolidado, Res.25/2001](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), [RICD Res.17/1989 atualizado](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html), [Resolução da Câmara 11/2024](https://www2.camara.leg.br/legin/fed/rescad/2024/resolucaodacamaradosdeputados-11-12-junho-2024-795774-publicacaooriginal-172082-pl.html) e, adicionalmente, **[Ato da Mesa 180 de 7/5/2025](https://www2.camara.leg.br/legin/int/atomes/2025/atodamesa-180-7-maio-2025-797421-publicacaooriginal-175313-cd-mesa.html)**. Esta etapa é **matriz de correções para execução posterior, não edição dos artigos**.

### Descoberta de norma complementar: Ato da Mesa 180/2025

**NC-PL-028 (IMPORTANTE, detalhamento do procedimento cautelar):** para a suspensão cautelar do exercício do mandato parlamentar do art.15, XXX e §§2º–6º, do RICD, o **Ato da Mesa nº 180/2025** estabelece:
- **Corregedor Parlamentar:** envia à Mesa comunicação circunstanciada e proposta em **48 horas** desde que conheceu fato ensejador de representação, de ofício ou provocado por deputado (art.2º caput).
- **Mesa:** recebida a comunicação, decide **por maioria absoluta** se apresenta representação com proposta de suspensão cautelar (art.2º §1º); a ausência de comunicação não impede atuação da Mesa **no prazo regimental restante** do art.15 §2º (art.2º §2º).
- **Recurso:** **1 dia útil**, contado da publicação no Diário da Câmara da decisão do Conselho (art.4º); recurso da Mesa deliberado pela **maioria absoluta** (art.4º parágrafo único).
- **RICD originário pela Res.11/2024:** **5 dias úteis** decadenciais para proposta da Mesa a partir de conhecimento dos fatos, **3 dias úteis** para decisão ostensiva do Conselho, apreciação de recurso **na sessão imediatamente subsequente**, por maioria absoluta para aprovar/manter suspensão; se Conselho não decidir a tempo, apreciação imediata pelo Plenário nos termos regimentais.
**Não confundir 48 horas da Corregedoria, 5 dias úteis da Mesa, 3 dias úteis do Conselho, 1 dia útil para recurso e sessão subsequente de julgamento do recurso**: são atores, marcos e efeitos diferentes. Esses detalhes **não aparecem integralmente no DC34**, que apenas menciona genericamente cautelar e acordo: incluir como aprofundamento e cruzar com DC23, sem caracterizar a cautelar como sanção definitiva do Código. A existência do ato foi confirmada em **publicação original oficial**; a página de dados indica que não consta revogação expressa, mas o monitoramento de eventuais alterações posteriores permanece necessário.

### Matriz priorizada de reparação (pronta para executar na etapa editorial)

| Ordem | Arquivo e lugar | Ação exata recomendada | Fonte/critério de aceitação | Estado até este bloco |
| --- | --- | --- | --- | --- |
| **P0.1** | **DC34**, subtítulo da lista de prerrogativas suspensíveis | Trocar referência **art.13 V → art.13 VI** sem alterar a enumeração correta | Res.25/2001 consolidada, art.13 VI a–d | **Erro confirmado, ainda presente na versão atual** (NC-PL-025) |
| **P0.2** | **DC34**, “Regra especial da Corregedoria” | Retirar a afirmação atual de **“um deputado a menos”** por assento especial ou reclassificá-la expressamente como **regra histórica de 2001 superada no Código consolidado**; manter **voz sem voto** do art.9º §4º e composição de 21+21 | Res.25/2001, art.7º §§2º–4º e art.9º §4º, versões histórica e consolidada | **Anacronismo comprovado no Código, ainda presente** (NC-PL-026); não afirmar inexistência de norma acessória sem busca |
| **P0.3** | **DC34** e referência cruzada **DC23** | Criar **bloco curto sobre suspensão cautelar** distinto do sancionamento final, com **Res.11/2024 e Ato180/2025**, condições, autoridades e prazos | RICD art.15 XXX e §§2º–6º; Ato180/2025 arts.2º–4º | **Lacuna confirmada**, NC-PL-027/028, não falsidade do Código |
| **P1.1** | **DC34**, fluxograma e resumo | Verificar o fluxo da **requalificação de pena**, decisão terminativa, retorno a novo relator, leitura/publicação da Mesa, recurso de legalidade à CCJC e correspondência de sujeitos/condições | Código arts.13–16 e Acordo 2025–2027; visualização renderizada do Mermaid | **Verificação de ponta a ponta pendente**, sem inferir gabarito invertido |
| **P1.2** | **DC06/DC14/DC35/DC37**, jurisprudência sobre CPI e TCU | Testar todas as remissões e exemplos após correções: **120 dias + prorrogação pela deliberação plenária** e **cautelar do TCU ≠ anulação/sustação definitiva contratual** | RICD art.35 §3º; CF art.71 §§1º–2º; STF sobre poder de cautela | **Corrigidos em trechos conhecidos, pendente teste transversal** |
| **P1.3** | **DC18–22 / DC29–33 / DC10**, normas com datas e competências | Montar mapa de vigência `fonte vigente / dispositivo histórico / alteração posterior / órgão / prazo / unidade / marco / efeito`; conferir RCCN arts.53–103, Res.1/2006-CN, Res.3/1990-CN, Res.1/2002-CN, PEC e MP | Texto consolidado e decisões vinculantes, sempre indicando data de corte | **Pendente** (NC-PL-022/023) |
| **P1.4** | **33 unidades CAM-PL**, catálogo e plano | Registrar para cada unidade a relevância no **básico literal** e no **específico amplo**, preservando 29 arquivos únicos; comparar eventual retificação nova do edital | Edital 1/2026 das especialidades, cargo 1, pp.52–53; editais 5/6 | **Escopo documental confirmado, matriz por unidade ainda pendente** |
| **P2.1** | **DC14/DC25/DC23/DC26** e catálogo | Auditar identificadores e backlinks **CAM-PL-020/022** sem desfazer a solução textual já aplicada em DC14/DC25 | Planejamento CAM-PL-019–024 + frontmatter + catálogo | **Colisão textual mitigada; reconciliação estrutural pendente** |
| **P2.2** | **DC13/DC36/DC37** | Validar pós-correção sem refazer edições já comprovadamente certas | RICD arts.52/58/119; STF Súmula5/Tema22; STF MS24.510 | **Correções textuais confirmadas, certificação por artigo pendente** |

### Critérios para dar saída à Fase 1 com segurança

1. Toda **não conformidade confirmada** precisa de `arquivo + local + fonte primária + natureza do erro + status atual + instrução de correção`; lacunas e dúvidas sem comprovação não recebem etiqueta de “erro factual”.
2. Normas **alteradas/revogadas** precisam de data e dispositivo substituto; a mera existência de redação histórica não sustenta resposta C/E atual.
3. A soma **297 questões examinadas** refere-se a baterias encontradas em 29 artigos, **não** a questões oficiais Cebraspe nem certificações completas; manter a contagem **de artigos com certificação explícita** separada da contagem de arquivos editados.
4. O plano acima **está pronto para a execução editorial dos reparos pontuais**; isso **não prova que os 29 artigos já foram homologados**.
5. Há **concorrência de edições** nesta branch: após nosso último diagnóstico, outra frente registrou no mesmo relatório **certificação normativa delimitada de DC29** (commit `bdff637fee1c220711b27b66a65e1a9271e7fad2`), além de revisão inicial de DC30 e indicador de **15/29 arquivos modificados**. Esse estado é independente das nossas auditorias dirigidas. Assim, em vez do histórico “0/29”, a fotografia disponível registra **1/29 com certificação de escopo explícita (DC29)** e **28/29 sem tal certificação formal**. Não afirmar que todos os arquivos editados foram validados.

**Progresso de trabalho desta frente:** **29/29 arquivos, 297 questões examinadas em níveis variados**, edital e retificações verificados, matriz final de reparos criada. **Estimativa qualitativa: ~90% do esforço de diagnóstico da Fase 1 percorrido, ~10% restante em conferência de vigência, fechamento das remissões e reconciliar alterações paralelas**; o avanço de **certificação formal** é muito menor: **1/29** no último checkpoint do outro fluxo. **Nenhum artigo de estudo foi alterado nesta etapa**, somente diagnóstico/índice. A conclusão do diagnóstico não deve ser confundida com conclusão do processo de certificar todas as notas.


### DC30: remissão revogada no art. 90, § 3º, VII (11/11/2026)

**Correção publicada:** DC30, commit `53c0b57ffc93c3b18de7dd01e8c65ab296f112be`. A leitura dirigida do [RCCN consolidado pela Câmara](https://www2.camara.leg.br/legin/fed/rescon/1970-1979/resolucao-1-11-agosto-1970-497934-republicacaoatualizada-171822-pl.html), arts. 89, 90, 93, 99, 100, 102 e 103, confirmou que o **art. 90, § 3º, VII**, remete à **Resolução 1/2001-CN**, que a nota 36 registra como **revogada pela Resolução 1/2006-CN**. O artigo passou a destacar essa referência como histórica e a remeter à disciplina de emendas da [Resolução 1/2006-CN atualizada](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao/resolucao-n-01-de-2006-cn), com alterações de 2025. Confirmados na leitura literal do RCCN: 48 horas para leitura da mensagem do art. 89, avulsos em cinco dias da leitura (art. 93), reunião de emendas por parecer (art. 99), relator oral quando faltar parecer (art. 100), subsidiariedade regimental da LOA (art. 102), nomenclatura histórica do art. 103 e revogações expressas dos arts. 91–92, 94–98 e 101. Isso é cotejo de dispositivos determinados, **não homologação integral do processo orçamentário especial**.

**Dez itens de treino do DC30:** os gabaritos foram preservados, inclusive itens 6–10 relativos ao orçamento. As questões 6 e 8 remetem aos arts. 89 e 93 e seus marcos distintos; questões 7, 9 e 10 abordam competências da comissão mista, ausência de aprovação tácita e necessidade de norma especial, respectivamente. **Sem inversão demonstrada**, mas a certificação integral exige também fechar todas as regras vigentes da Resolução 1/2006-CN e sua aplicação aos cenários didáticos. **Status DC30: não certificado**.

**Indicadores inalterados:** 16/29 artigos com alguma edição (**55,2%**); **1/29 certificado integralmente com escopo delimitado (DC29, 3,4%)**; 13 artigos sem edição. Atualizar esses indicadores apenas se a natureza da revisão efetivamente mudar.


### DC30: matriz de vigência da CMO após 2025 (11/11/2026)

**Correção e ampliação publicada em DC30:** commit `975785697f270fddb3a86ae47b8ed28abbc0f76b`. A revisão da [Resolução 1/2006-CN consolidada no portal do Congresso](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao/resolucao-n-01-de-2006-cn), à luz das [Resoluções 1/2025-CN](https://legis.senado.leg.br/norma/40435851/publicacao/40437557) e [2/2025-CN](https://legis.senado.leg.br/norma/41071372/publicacao/41074650), resultou em matriz de regras atuais e históricas: **art. 25 §§ 1º–2º** (Comitê de Admissibilidade e exceção por decisão da CMO), **art. 44 § 1º** (seis emendas de apropriação e duas de remanejamento por comissão), **art. 47 § 1º** (até onze emendas de bancada com três para continuidade de obras), **art. 49** (2% da RCL do exercício anterior, repartidos 1,55% e 0,45% por Casa, com LC 210/2024) e **art. 50-A** (indicações de beneficiários e prioridades).

**Justificativa didática:** a versão online da Resolução 1/2006-CN mantém lado a lado redações anteriores e novas; números de limites superados eram risco de memorização. A matriz integra os casos do DC30 aos dispositivos especiais, sem confundir RCCN arts. 89–103 com a disciplina detalhada da CMO. **Dez questões C/E do DC30 preservadas**, sem inversão demonstrada no cotejo das matérias que enunciam; **DC30 permanece sem certificação integral** porque a aplicação de vigência condicionada e mudanças posteriores, além dos procedimentos específicos completos, ainda precisa de validação sistemática.

**Indicadores sem mudança:** 16/29 artigos editados (55,2%), 1/29 artigo certificado (DC29, 3,4%), 13/29 sem edição. Alterar o indicador de certificação somente mediante fechamento documentado de fontes, escopo e exercícios.


## Bloco 29: matriz transversal de prazos e vigência, DC20/DC31/DC33 (11/11/2026)

**Execução desta rodada:** relidos os trechos atuais de `DC20 - lei delegada e delegacao legislativa`, `DC31 - regimento comum organizacao comissoes mistas e votacao` e `DC33 - medidas provisorias resolucao 1 2002 CN`; verificados artigos diretamente na [CF vigente, arts.62, 64 e 68](https://www4.planalto.gov.br/legislacao/legis-federal/constituicao), no [RCCN, arts.9º–14 e 116–127, texto disponibilizado pelo Senado](https://legis.senado.leg.br/norma/561098/publicacao/36852069), na [Resolução 1/2002-CN no Congresso](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional), e nas [Resoluções 1/2024-CN](https://www2.camara.leg.br/legin/fed/rescon/2024/resolucao-1-20-maio-2024-795651-publicacaooriginal-171817-pl.html) e [3/2025-CN](https://www2.camara.leg.br/legin/fed/rescon/2025/resolucao-3-23-junho-2025-797631-publicacaooriginal-175696-pl.html). **Comparação de fontes de datas diferentes**: a publicação do Senado vinculada acima é consolidação de **2019**, desatualizada em art.4º §4º, e não pode ser aplicada sem atos alteradores de 2024/2025. A edição mais nova do Senado registra essas mudanças no mesmo portal: [compilação com redações atualizadas](https://legis.senado.leg.br/norma/561098/publicacao/16433839). A norma de 2025 criou também Liderança da Oposição e renumerou art.4º §7º para §9º, fato já incorporado a DC31. **Nenhuma correção retroativa necessária nas passagens cotejadas**.

### Matriz de atos, marcos e prazos, para não transportar regras entre ritos

| Instituto | Ator / marco de início | Prazo e unidade | Efeito / fundamento | Evidência |
| --- | --- | --- | --- | --- |
| Urgência **constitucional** de projeto de iniciativa presidencial | Presidente solicita; Câmara, depois Senado, apreciam | **45 dias para cada Casa, sucessivos**; **10 dias** para a Câmara apreciar emendas do Senado | Sobrestamento das outras deliberações legislativas na Casa competente, ressalvadas as de prazo constitucional determinado, **sem aprovação tácita** | CF art.64 §§1º–3º |
| Urgência constitucional, **recesso/código** | Períodos de recesso ou projeto de código | Prazos do art.64 §2º **não correm no recesso**, e **não se aplicam a códigos** | Não transplantar contagem de sessões de comissão | CF art.64 §4º |
| Autorização de **lei delegada** | Solicitação presidencial ao Presidente do Senado | Sessão conjunta convocada para **até 72 horas** de ciência do pedido; resolução fixa prazo **não superior a 45 dias** para promulgação, publicação ou remessa do projeto | São **dois relógios distintos**, não o art.64. Se ato final indicado não ocorre no prazo fixado, delegação insubsistente | RCCN arts.119 caput/§2º, 127; CF art.68 |
| Discussão e autorização de lei delegada | Publicação do parecer da comissão / aprovação da resolução | Sessão conjunta em **até 5 dias**; comissão examina emendas à resolução em **8 dias**; resolução promulgada em **24 horas** | Proibição de emendas do art.68 §3º se refere ao **projeto elaborado**, quando retorna, não à proposta autorizativa | RCCN arts.120–122 |
| Projeto delegado devolvido ao Congresso | Recebimento pela Presidência do Senado | Remessa à comissão em **48 horas**; parecer de conformidade em **5 dias** | Quando a resolução determina exame, Congresso vota projeto uma vez, vedada emenda | RCCN arts.124–125; CF art.68 §3º |
| MP: organização da comissão | Publicação no DOU | **48 horas** para avulsos/designação; instalação em **24 horas** após designação; emendas nos **6 primeiros dias** | Comissão mista faz instrução prévia; início da deliberação na Câmara | Res.1/2002-CN arts.2º–4º, CF art.62 §§8º–9º |
| MP: urgência | Publicação da MP, sem apreciação | **45 dias** para iniciar regime constitucional de urgência na Casa onde tramita | **Não é caducidade** nem autorização de reedição automática | CF art.62 §6º |
| MP: vigência | Publicação da MP | **60 dias**, uma prorrogação de **mais 60** se não concluída votação; **suspensa a contagem no recesso** | Caducidade e disciplina de relações nos termos constitucionais, salvo conversão | CF art.62 §§3º–4º e 7º |
| MP: disciplina após perda de eficácia | Rejeição ou esgotamento da vigência | **60 dias** para decreto legislativo | Se não editado, preservam-se relações jurídicas constituídas e decorrentes de atos durante a vigência | CF art.62 §11 |
| Comissão mista geral do Congresso | Designação; comissão constituída | Reunião em **até 48 horas** da constituição | Regra geral 11+11, com vaga rotativa adicional prevista no art.10-A; distinguir das comissões de MP | RCCN arts.10, 10-A |
| Comissão mista de MP | Publicação/designação | **12+12 titulares** e suplentes; **vaga adicional por Casa**, conforme proporcionalidade e rodízio | Regra especial, não aplicar 11+11 | Res.1/2002-CN art.2º §§2º–3º |

**A-PL-103, conferência pontual resolvida:** os números que estavam marcados como pendentes de verificação no `DC20` coincidem com o **RCCN arts.119–124** na publicação legislativa: 72 horas, até 45 dias no instrumento de delegação, 5 dias, 8 dias, 24 horas, 48 horas e 5 dias. **Os gabaritos Q4 e Q6 permanecem coerentes**, porque emendas à resolução e proibição constitucional de emendar o projeto delegado são etapas distintas, e os dois prazos de 45 dias pertencem a fontes e procedimentos diferentes. **Limite:** é cotejo de texto vigente disponibilizado pelo Senado, não garantia de interpretação institucional em cenário não testado.

**A-PL-104, vigência 2024/2025 confirmada:** o art.4º §4º do RCCN no texto de 2019 ainda diz **“anual”**, mas a Res.1/2024-CN mudou para **“de 2 em 2 anos”**. A Res.3/2025-CN criou Liderança da Oposição nos §§7º–8º e renumerou §7º como §9º. **DC31 já incorpora ambos corretamente**, inclusive o gabarito Q1; não usar a edição de 2019 para fabricar defeito inexistente. A fonte consolidada de 2025 do Senado também confirma.

**A-PL-105, atualização paralela observada:** outro fluxo registrou no mesmo diagnóstico, após o bloco 28, a **correção do DC30** referente ao RCCN art.90 §3º VII, que mencionava Res.1/2001-CN revogada pela Res.1/2006-CN (commit `53c0b57ffc93c3b18de7dd01e8c65ab296f112be`). O fluxo reporta também **16/29 artigos modificados e 1/29 com certificação normativa explícita (DC29)**. Não atribuir a esta rodada essa edição nem reivindicar certificação nova. A norma orçamentária especial da Res.1/2006 ainda exige conferência integral no DC30; nenhuma regra obsoleta deve ser novamente ensinada como vigente.

### Pendências depois desta matriz

1. **P0, DC34:** continuam abertas NC-PL-025 (art.13 V→VI), 026 (assento histórico do Corregedor), 027/028 (cautelar RICD/Ato180/2025), já classificadas com evidência. Precisam de reparo editorial validado e nova inspeção.
2. **P1, DC30 e normas de orçamento:** cotejar integralmente a Res.1/2006-CN e alterações posteriores com exemplos e dispositivos especiais 89–103; não encerrar DC30 só porque a remissão revogada foi sinalizada.
3. **P1, estabilidade de fonte:** revisar sempre **versão datada de cada norma**, a exemplo do art.4º §4º do RCCN. Evitar que uma compilação de 2019 reintroduza erros corrigidos na compilação 2025.
4. **P1, cadeia de auditoria:** terminar inspeção de metadados e catálogo, fonte por pergunta e teste dos diagramas após edições concorrentes antes da certificação geral.

**Estado desta frente:** 29 artigos e 297 itens examinados em profundidades distintas; matriz global de prazos agora registrada. **~92% do esforço diagnóstico da Fase 1 estimado concluído**, ressalvado que **certificação formal e jurídica por artigo é outra métrica**: último estado registrado em paralelo **1/29 certificado** e 16/29 modificados, podendo mudar por atualizações de outra frente. **Não declare Fase 1 encerrada.** Neste bloco não houve edição de artigos de estudo, apenas relatório e índice.


### DC30: condição de vigência da LOA de 2025 resolvida (11/11/2026)

**Correção aplicada e conferida:** commit `ec7c72e73dd52672af6a16be91cc6e8a5f210373` no DC30. A [Resolução 1/2006-CN consolidada pela Câmara](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) marca determinadas alterações da **Resolução 1/2025-CN** como em vigor **após a sanção da Lei Orçamentária de 2025**, incluindo arts. **44, § 1º, e 47, § 1º**. A condição se cumpriu com a [Lei 15.121, sancionada em 10/04/2025, conforme registro da Presidência](https://legislacao.presidencia.gov.br/atos/?ano=2025&ato=247ATQE5UNZpWT534&numero=15121&tipo=LEI). A matriz do artigo agora identifica o marco de eficácia e deixa de tratar essa condição como hipótese pendente em novembro de 2026. Os limites **6+2 emendas de comissão** e **até 11 emendas de bancada, 3 para continuidade de obras** foram confrontados com o texto atualizado. Os percentuais do art. 49 e o procedimento do art. 50-A também aparecem na consolidação, mas os limites específicos sujeitos a LC 210/2024 e a regulamentações de execução não foram auditados por completo.

**Certificação:** o bloqueio específico da vigência condicionada de 2025 está resolvido. **DC30 ainda não certificado integralmente**, pois não se fechou revisão sistemática de todos os dispositivos pertinentes, sucessões de redações, cenários e efeitos de normas supervenientes aplicáveis aos exercícios. **Indicadores mantidos: 16/29 artigos modificados, 1/29 certificado (DC29)**. Evitar aumentar o número de certificados apenas com base na regularização de um marco de vigência.


## Bloco 30: DC30 pós-correções orçamentárias, controle de vigência e gabaritos (11/11/2026)

**Execução:** relido o arquivo atual `3 - Materias/Direito Constitucional/30 - regimento comum titulo iv sessoes solenes e materias ate artigo 103.md`, inclusive **10 questões C/E**, matriz de vigência, casos e referências. O arquivo já havia sido atualizado em paralelo para remover a pretensão de vigência da **Res.1/2001-CN** (revogada) e incorporar alterações **Res.1/2025-CN/Res.2/2025-CN** e o marco de sanção da LOA de 2025. Esta rodada **não repetiu nem atribuiu a si a edição**. Foram confrontados, em fontes oficiais: [Regimento Comum, republicação atualizada, consolidação até janeiro de 2023](https://www2.camara.leg.br/legin/fed/rescon/1970-1979/resolucao-1-11-agosto-1970-497934-republicacaoatualizada-171822-pl.html) e [Resolução 1/2006-CN, dados da norma e alteradoras de 2025](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-norma-pl.html), bem como o [texto histórico/consolidado de trabalho da CMO](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao/resolucao-n-01-de-2006-cn). **Cuidado de fonte:** a republicação de 2023 não representa sozinha atualizações de 2025; o texto da CMO mostra **redações sucessivas lado a lado**, que não podem ser tomadas como simultaneamente vigentes.

### Rechecagem específica após as edições paralelas

| Ponto DC30 | Resultado desta conferência | Limite de segurança |
| --- | --- | --- |
| RCCN arts.53–56 e 57–71 | Diferencia sessões solenes, inauguração, posse presidencial (**5+5**), visita de chefe estrangeiro (**3+3**), ausência de expediente e questões de ordem nas solenidades | Cotejo dos pontos centrais, sem inspeção de toda prática cerimonial |
| RCCN arts.72–85 e 86–88 | Distingue procedimentos históricos de PEC/projetos presidenciais **revogados pela CF/1988** do **art.85, promulgação de emendas** | Condições de reexame bicameral permanecem disciplinadas por CF/1988 |
| RCCN art.89 e 93 | Distingue **48 horas da entrega da mensagem orçamentária para sessão de leitura** de **5 dias após leitura para distribuição de avulsos** | Não são prazos gerais de votação ou conclusão da LOA |
| RCCN art.90 §3º VII | Reconhece que a remissão à Res.1/2001-CN é **histórica**, dada sua revogação pela Res.1/2006-CN | Já corrigido em paralelo; não restaurar prazo revogado |
| RCCN arts.99–100, 102–103 | Tratamento de emendas, falta de parecer e decisão por relator oral; ressalva terminologia antiga do art.103 | Aplicar Res.1/2006-CN e art.166 da CF para rito orçamentário atual |
| Res.1/2006-CN, art.44 §1º | **6 emendas de apropriação + 2 de remanejamento** por comissão após alteração de 2025; anterior 4+4 permanece no histórico | Fonte oficial mostra versões, exigindo seleção da mais recente |
| Res.1/2006-CN, art.47 §1º | Até **11 emendas de bancada, 3 destinadas à continuidade de obras**, nas condições do artigo | Não importar limite histórico de 15–20+3 |
| Res.1/2006-CN, art.49 | Limite global de **2% da RCL anterior**, partilha **1,55% Deputados / 0,45% Senadores**, referindo LC210/2024 | Distinguir limite de valor e número de emendas; há normas de execução adicionais |
| Res.1/2006-CN, art.50-A | Exige indicação de **beneficiários, objetos e ordem de prioridade** pelos autores em sistema do Executivo; contém condições complementares introduzidas pela Res.2/2025-CN | Não equiparar apresentação de emenda, aprovação e indicação posterior |
| Eficácia de dispositivos alterados em 2025 | DC30 já registra que exigência de sanção da LOA 2025 foi cumprida com **Lei 15.121/2025, 10/04/2025**, conforme fonte primária conferida no bloco paralelo anterior | Conferir qualquer condição de vigência específica para leis e exercícios posteriores |

### Dez questões do DC30, cotejo dos gabaritos

**Q1 CERTO** (solenes sem expediente/questões de ordem); **Q2 ERRADO** (não há oradores parlamentares na inauguração); **Q3 CERTO** (posse 5+5, chefe de Estado 3+3); **Q4 ERRADO** (PEC dispensa sanção); **Q5 ERRADO** (arts.72–84 e 86–88 não estão vigentes); **Q6 CERTO** (leitura orçamentária em até 48h); **Q7 ERRADO** (comissões permanentes não substituem a CMO); **Q8 CERTO** (avulsos em cinco dias após leitura); **Q9 ERRADO** (falta de parecer não produz aprovação tácita); **Q10 ERRADO** (Res.1/2006 integra o Regimento Comum, não é estranha a ele). **Nenhuma inversão identificada nos fundamentos jurídicos cotejados.**

**Achado de controle de qualidade:** a versão atual DC30 já incorpora corretamente o que o bloco 28 apontava como pendência sobre **Res.1/2006-CN e redações de 2025**. Assim, **não reabrir como erro material os arts.44/47/49/50-A sem evidência nova**. Permanecem a necessidade de teste de regras operacionais específicas e normas posteriores da execução orçamentária, que ultrapassam o recorte mais literal de DC30 e podem pertencer à trilha de Orçamento Público. **DC30 ainda não recebe certificação integral:** cotejo dirigido do corpus pertinente não abrangeu todos os parágrafos, decisões, exemplos de exercício posterior e anexos.

**Ponto metodológico:** o cadastro oficial da Res.1/2006-CN lista explicitamente **Resoluções 1/2025-CN e 2/2025-CN** como alteradoras; o texto do portal da CMO apresenta redações anteriores e posteriores sucessivamente. Na próxima etapa de certificação, verificar a vigência de cada artigo em fonte oficial **datada**, em vez de citar um parágrafo antigo porque aparece acima no HTML.

### Status após bloco 30

Permanecem **29 arquivos únicos** e **297 exercícios C/E examinados em grau variável** (dez itens DC30 rechecados aqui, sem adicionar dez ao total acumulado). Indicador paralelo verificado no relatório: **16/29 artigos editados, DC29 como único certificado formalmente com escopo datado** no último checkpoint consultado. **Estimativa qualitativa deste diagnóstico: ~94% realizado e ~6% restante**; percentual descreve fechamento das questões de risco identificadas, **não** certificação jurídica dos 29 arquivos. As lacunas P0 de DC34 continuam a bloquear o fechamento seguro; demais riscos: fonte/versão, mapeamento CAM-PL e validação de diagramas. **Nenhum artigo de estudo alterado por esta rodada.**


### DC30: condições expressas dos arts. 90 e 100 aplicadas aos casos (11/11/2026)

**Correção confirmada e publicada no DC30:** commit `c414f94dd77902ef24924bcfa7b45c1b1b409dc6`. Na conferência do [Regimento Comum consolidado, art. 90, § 3º, V, e art. 100](https://www2.camara.leg.br/legin/fed/rescon/1970-1979/resolucao-1-11-agosto-1970-497934-republicacaoatualizada-171822-pl.html), foram explicitadas duas condições: **(a)** o relator da comissão mista deve fazer **referência expressa** ao ponto de vista da comissão permanente, ainda que não o acolha; **(b)** a falta de parecer da comissão mista demanda **publicação das emendas antes da convocação da sessão conjunta e designação de relator para parecer oral**. Essas condições foram inseridas no conteúdo principal, nos casos **G e H**, e nos comentários das questões **7 e 9**, sem mudança dos gabaritos.

**Limite honesto:** o DC30 ainda requer conferência integral da aplicação das normas especiais de orçamento e possíveis ajustes normativos posteriores. **Não certificado** nesta etapa; **16/29 artigos editados** e **1/29 certificado** (DC29). O número de artigos editados não muda porque o DC30 já estava contabilizado.


## Bloco 31: identidade editorial CAM-PL-019–022, links e pendências ativas DC34 (11/11/2026)

**Escopo realizado:** recuperadas as versões atuais (com blob SHA) de **DC14, DC23, DC24, DC25, DC26 e DC34**; inspecionados `articleId`, `articleAliases`, rótulos CAM-PL no corpo, links cruzados de rastreabilidade e duas incorreções de DC34. A busca de código do GitHub por CAM-PL-020 e CAM-PL-022 não retornou resultados, portanto **não autoriza concluir que o catálogo e todos os backlinks foram percorridos**. Esta foi **verificação dos arquivos nomeados**, não teste automatizado do catálogo.

### Matriz real de identidade nos seis arquivos

| Arquivo | articleId atual | Papel declarado | Veredito localizado |
| --- | --- | --- | --- |
| DC14 comissões | `art-b6f0d82c91a74e35` | **CAM-PL-004**, expansão arts.25–54; remete CAM-PL-020 para DC23 | **Colisão textual 020 mitigada**; nota explícita na linha 129 |
| DC23 Mesa e órgãos | `art-53a7d90f1b264c8e` | **CAM-PL-019 e CAM-PL-020**, ambos sobre arts.1–24 | **Mapeamento intencional de duas unidades para um arquivo** |
| DC24 comissões/sessões | `art-8c7b2f4d50a963e1` | **CAM-PL-021**, início da trilha de sessões, arts.55–80 | Correto como parte do recorte com extensão de contexto |
| DC25 expedientes/proposições | `art-6d8e3f041b9a52c7` | **Complemento CAM-PL-021**, arts.81–105; reserva 022 a DC26 | **Colisão textual 022 mitigada**; separa 81–94 do recorte básico e 95–105 suplementar |
| DC26 deputados/mandato | `art-1de8b5094cf736a2` | **CAM-PL-022**, arts.226–251 | **Identidade correta**, preserva vínculo da arquitetura |
| DC34 ética | `art-5b41764164052519` | **CAM-PL-030** | `articleId` e `articleAliases` presentes; persistem defeitos normativos no corpo |

**Todos os seis arquivos têm `articleId` diferentes entre si e `articleAliases` correspondente a seu próprio caminho**. Não há nesses metadados colisão direta de ID. **Não é teste de unicidade global no repositório** e tampouco prova de integridade dos catálogos JSON/MD ou da publicação em GitHub Pages. Os links de DC14 para DC23, DC25 para DC24/DC26 e DC23 para DC14 são **sintaticamente coerentes** com os caminhos lidos; não foram executados nem inspecionados pelo renderizador Obsidian/site.

### Riscos remanescentes, com evidência ainda presente

- **NC-PL-025: confirmado ativo.** DC34, linha 106, seção `O rol das prerrogativas parlamentares passíveis de suspensão (art. 13, V)`: fundamentação correta **art.13 VI, alíneas a–d**. Corrigir apenas referência e conferir usos laterais.
- **NC-PL-026: confirmado ativo.** DC34, linha 121, `Regra especial da Corregedoria` atribui **“um deputado a menos” por assento especial**, sem previsão na redação atual do Código de Ética art.7º; diferenciar redação histórica de regra vigente. A assertiva atual exige fonte normativa autônoma superveniente ou retirada/rotulagem histórica.
- **NC-PL-027/028: lacuna parcialmente mitigada, ainda não exaurida.** DC34, linha 185, já **menciona** procedimento cautelar distinto do sancionatório e prazo de três dias úteis. Não dizer que não existe nenhuma menção. Entretanto **faltam exposição estruturada da Res.11/2024, RICD art.15 XXX e §§2º–6º e do Ato da Mesa 180/2025**, especialmente as condições e relógios de 48h do Corregedor, 5 dias úteis da Mesa, 1 dia útil para recurso e a sessão imediatamente subsequente. Logo há **lacuna de completude**, não afirmativa necessariamente falsa.
- **CAM-PL-020/022:** nos arquivos acima, conflitos estão **mitigados**. Manter P2 para varredura de indexação/catálogo externo aos arquivos; não classificar esses dois conflitos como atuais nos textos principais sem prova nova.

### Matriz de próximos atos verificáveis

**P0:** resolver e validar os trechos identificados em DC34 (025, 026), completar de forma proporcional e fundamentada a separação cautelar (027/028), e checar Mermaid do art.13–16. Reabrir a fonte consolidada para comprovar conteúdo final quando houver edição.

**P1:** descobrir caminhos reais do catálogo e hub na árvore do GitHub, inspecionar `articleId`, associações CAM-PL e backlinks efetivos; checar unicidade dos IDs em todos os 29 artigos, não somente nos seis desta amostra. Se houver duplicações, produzir casos com arquivo e linha, sem mudar IDs por suposição.

**P1:** manter matriz de cobertura do edital em dois eixos (literalidade no básico e objeto mais amplo no específico) para os 33 códigos, testando artigos compartilhados e auxiliares.

**P2:** revisar após as edições paralelas as seis questões de DC34 e sua atualização de procedimentos, preservando os gabaritos quando o erro for apenas de referência do comentário.

**Indicadores:** 29 arquivos de PL e **297 enunciados examinados em graus variados**, com certificação formal ainda restrita ao checkpoint de **DC29 (1/29)** informado no relatório paralelo; não se certificou mais nenhum artigo nesta rodada. **Diagnóstico estimado ~96% concluído, ~4% restante**, sobretudo integração de catálogo e fechamento de segurança do DC34; **não equivale a 96% de conteúdo juridicamente certificado**. Esta rodada alterou **somente relatório e índice**, sem edição de artigos de estudo. O avanço de 94% para 96% é uma estimativa de esforço, não medida objetiva.


### DC30: requisitos adicionais da Resolução 1/2006 após alterações de 2025 (11/11/2026)

**Revisão publicada:** commit `4e36faadd16f98114ef751568adb6ec8d00df473`. A [Resolução 1/2006-CN consolidada pela Câmara](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html), arts. **45-A, II e § 1º**, e **47, I e § 1º**, confirma condições ausentes na matriz resumida anterior: (a) indicações de emendas de comissão aprovadas devem ser encaminhadas ao Executivo **em cinco dias**, acompanhadas da ata, sem dispensar sua remessa à CMO para publicação; (b) emendas de bancada são apresentadas com ata aprovada por ao menos **3/4 dos deputados e 2/3 dos senadores** da UF; (c) dentro das até **11 emendas de bancada**, **3** destinam-se exclusivamente à continuidade de obras iniciadas, com **objeto certo e determinado** e registro conforme CF art. 165, § 15. A tabela do DC30 e três microcasos foram ajustados. Reconfirmados RCCN art. 90, § 3º, IV–V (parecer subsidiário e referência expressa pelo relator) e art. 100 (publicação de emendas antes da sessão), sem alteração dos dez gabaritos.

**Estado:** DC30 ainda **não certificado integralmente**; as alterações esclarecem requisitos específicos da norma especial sem representar teste exaustivo de todos os atos posteriores ou disposições orçamentárias. **16/29 artigos modificados (55,2%)**, **1/29 certificado (DC29, 3,4%)**.


## Bloco 32: catálogo real, IDs e divergência comprovada no hub (11/11/2026)

**Verificação efetivamente realizada:** consultada a árvore do repositório e lidos os arquivos `data/catalogo-materias-por-concurso.json` (schemaVersion 2), `data/concursos.json` e `3 - Materias/Direito Constitucional/direito-constitucional.md`, além dos seis artigos revisados no bloco 31. O concurso `camara-2026`, matéria `direito-constitucional`, registra **38 articleIds** no catálogo; os **38 são distintos dentro dessa lista**. Dentre eles, estão exatamente **uma vez cada** as identidades verificadas:
- DC14: `art-b6f0d82c91a74e35`
- DC23: `art-53a7d90f1b264c8e`
- DC24: `art-8c7b2f4d50a963e1`
- DC25: `art-6d8e3f041b9a52c7`
- DC26: `art-1de8b5094cf736a2`
- DC34: `art-5b41764164052519`

**Importante:** o catálogo de 38 entradas refere-se à matéria constitucional inteira, **não é equivalente à trilha de 29 artigos PL** e não deve entrar na contagem de artigos auditados. A unicidade de 38 *referências no catálogo* foi conferida; **não houve inspeção individual do frontmatter de todos os 38 artigos do catálogo nem verificação automatizada de rotas no navegador**. As seis identidades citadas foram confrontadas diretamente com os respectivos arquivos.

### NC-PL-029: hub de Direito Constitucional mantém identificação CAM-PL-020 obsoleta

**Local confirmado:** `3 - Materias/Direito Constitucional/direito-constitucional.md` (hub de navegação), linhas **75 e 77**:
- Na descrição de **DC23**, ainda consta “**CAM-PL-020 refinada na nota 14**”; entretanto DC23 define explicitamente que ele próprio abrange **CAM-PL-019 e CAM-PL-020** (arts. 1º a 24).
- O link para **DC14** aparece rotulado “**CAM-PL-020, Regimento da Câmara, arts. 25–54**”, mas DC14 esclarece que os arts.25–54 são aprofundamento interno de **CAM-PL-004**, reservando CAM-PL-020 a DC23.

**Classificação:** falha editorial real de **navegação e rastreabilidade**, sem evidência de colisão de `articleId` no catálogo JSON. **Prioridade P1** porque o hub pode induzir falsa cobertura do planejamento. **Reparo exato proposto:** atualizar a descrição de DC23 para “**CAM-PL-019 e CAM-PL-020 cobertas nesta nota, arts. 1º–24**” e o rótulo do link para DC14 para “**CAM-PL-004, aprofundamento de comissões, arts. 25–54**”, preservando caminhos, IDs e textos de conteúdo. Não alterar `CAM-PL-021` em DC24/25 nem `CAM-PL-022` em DC26, pois essas referências foram conferidas e estão coerentes.

### Estado de pendências após inspeção de navegação

- **NC-PL-025 e 026** seguem **ativas no corpo do DC34**, conforme leitura de SHA atual do bloco 31; lista de prerrogativas ainda cita art.13 V em vez de VI, e regra histórica de desconto do partido do Corregedor segue sem norma consolidada que a sustente como atual.
- **NC-PL-027/028:** artigo DC34 contém menção à cautelar de três dias úteis, mas **não reúne o procedimento de RICD art.15/Ato da Mesa 180/2025 por inteiro**. Lacuna de completude, não falsidade do trecho existente.
- **CAM-PL-020/022:** textos dos artigos 14, 23, 25 e 26 já mitigaram colisões; **NC-PL-029 é um defeito novo e localizado apenas no hub** encontrado nesta rodada.
- **Próxima inspeção técnica:** mapear IDs do catálogo a todos os arquivos fonte, verificar aliases e rotas reais do website e realizar um teste de integridade dos links, caso haja execução do site em etapa apropriada. Uma verificação de 38 valores únicos **não comprova** automaticamente os 38 destinos.
- **Nenhum artigo de estudo e nenhum hub foram editados nesta rodada**; esta fase continua de diagnóstico, com plano de correções pronto.

**Indicador atualizado:** inventário PL de **29 arquivos** e **297 questões examinadas em profundidades distintas**, matriz de prazos/edital e catálogo analisados. **Diagnóstico da Fase 1 estimado em aproximadamente 98% do esforço de identificação**, mas foi descoberta NC-PL-029 e falta validar destinos do catálogo, resolver NC-PL-025–028, renderização Mermaid e controle pós-correção. **Não declarar Fase 1 concluída nem afirmar que 98% dos artigos estão corretos ou certificados.** A única certificação formal explicitamente observada no relatório histórico paralelo continua sendo DC29, sujeita à verificação de avanços posteriores.


### DC30: composição da CMO e competência própria das Mesas para emendas (11/11/2026)

**Alteração efetivamente publicada em DC30:** commit `c98f430d09bef64f34fce646e3a77efa4dcdf0ec`. O cotejo da [Resolução 1/2006-CN consolidada na Câmara](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) revelou distinções não explicitadas antes: **CMO tem 40 titulares (30 deputados, 10 senadores) e igual número de suplentes** (art. 5º); **comissões** podem apresentar até **6 emendas de apropriação + 2 de remanejamento** (art. 44, § 1º), enquanto **Mesas Diretoras de cada Casa** têm limite próprio de **4 + 4** (art. 44, § 2º). DC30 corrigido na matriz e no microcaso. O material preserva os dez gabaritos, que não cobram diretamente essa diferença. **DC30 permanece pendente de certificação integral**; não se presume verificação exaustiva do rito orçamentário pela revisão de alguns dispositivos.

**Indicadores deste recorte de auditoria:** 16/29 artigos com ao menos uma alteração e DC29 como único certificado registrado nesta trilha. Este lançamento **não substitui** outras frentes de diagnóstico ou revisões concorrentes; a contagem deve ser reconciliada com eventuais alterações externas.


### DC30: admissibilidade documental e material das emendas de comissão (11/11/2026)

**Edição publicada:** `e31f0b85902e0e938c7974b94b1626a7797e29ae`, no DC30. O cotejo do [art. 44, I–III, da Resolução 1/2006-CN atualizada](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) revelou que os limites de emendas, já esclarecidos em rodadas anteriores, não bastam para admissibilidade: comissão deve juntar **ata da reunião**, justificar **caráter institucional e interesse nacional ou regional** com as ressalvas sobre entidades privadas da redação vigente, e explicar **benefícios sociais e econômicos**. Inseridos nova linha na matriz e microcaso de ausência de ata/justificativa. Preservada a diferenciação de 6+2 para comissão e 4+4 para Mesa Diretora.

**Reconciliação da auditoria:** o diagnóstico contém **outra frente de levantamento** de 29 artigos e 297 questões, com NC-PL-025 a NC-PL-029 ainda abertas e estimativa de esforço de identificação próxima de 98%. Essa estimativa **não deve ser somada** aos indicadores de edição e certificação. Para a presente trilha, mantêm-se **16/29 artigos distintos modificados** e **DC29 como único artigo certificado (1/29)**; DC30 ainda necessita de fechamento sobre compatibilidade entre procedimento geral, normas especiais e atualizações supervenientes. Evitar novo cálculo global sem confrontar o inventário vigente e a situação das outras frentes concorrentes.


## Bloco 33: teste de integridade de 29 artigos, catálogo e backlinks do hub (11/11/2026)

**Auditoria estrutural executada contra o estado atual do repositório.** Localizados os arquivos reais em `3 - Materias/Direito Constitucional`; extraídos diretamente `articleId` e `articleAliases` do frontmatter dos **29 artigos** da trilha PL: `DC06`, `DC10` e `DC11–DC37`, excluindo `11 - organizacao do estado.md`, pertencente a outra trilha. Os arquivos foram recuperados em grupos para evitar interrupção do conector. **Todos os 29 têm ID preenchido e não repetido entre si; todos os aliases textuais correspondem ao próprio caminho**. Conferidos também `data/catalogo-materias-por-concurso.json` (schemaVersion 2) e `3 - Materias/Direito Constitucional/direito-constitucional.md`.

### Resultado verificável do cruzamento

| Teste | Resultado | Interpretação correta |
| --- | --- | --- |
| Arquivos de PL com frontmatter testado | **29/29** | Identidades únicas **dentro da trilha**, não prova global de unicidade do vault |
| `articleId` repetidos na trilha | **0** | Todos os 29 IDs são diferentes |
| `articleAliases` ausentes ou não correspondentes ao caminho original | **0** | Frontmatter dos 29 arquivos tem alias próprio |
| IDs da trilha ausentes do catálogo do concurso Câmara | **0/29** | Os **29 aparecem** em `camara-2026 > direito-constitucional > articleIds` |
| Duplicações de `articleIds` dentro do catálogo constitucional da Câmara | **0/38** | São **38 valores distintos**, incluindo outras notas de Direito Constitucional |
| Links do hub apontando para artigos da trilha PL e comparados à árvore de arquivos | **34 ocorrências, nenhum caminho ausente** | Verificação **estática dos destinos**, não navegação/renderização no browser |

A diferença **38 entradas no catálogo versus 29 artigos da trilha** decorre do escopo mais amplo da matéria `direito-constitucional`, e **não indica nove arquivos faltantes**. Os links `[[caminho|rótulo]]` extraídos do hub foram comparados com os caminhos presentes na pasta. A correspondência de caminhos **não valida rótulos, semântica do conteúdo, JS do roteador, publicação do GitHub Pages nem renderização Mermaid**.

### Falhas ainda ativas, confirmadas neste checkpoint

- **NC-PL-029, hub**, linhas **75 e 77**: rótulo e descrição associam **CAM-PL-020** equivocadamente à expansão de comissões DC14. No planejamento e artigos revisados, **CAM-PL-020 corresponde a DC23 (Mesa, arts.1–24)**, enquanto DC14 contém aprofundamento de **CAM-PL-004** (arts.25–54). Os **caminhos de ambos os links existem**; o defeito é **semântico/editorial**, não link quebrado.
- **NC-PL-025, DC34, linha 106**: título do rol de prerrogativas suspensíveis cita **art.13 V**, deve ser **art.13 VI**.
- **NC-PL-026, DC34, linha 121**: mantém como vigente a redução de uma vaga do partido do Corregedor por suposto assento especial; regra histórica ausente do Código de Ética consolidado, pendente retirada ou fonte normativa vigente específica.
- **NC-PL-027/028, DC34**: já menciona suspensão cautelar, mas ainda requer explicar o **RICD art.15 XXX e §§2º–6º e Ato da Mesa 180/2025**, inclusive prazos por sujeito e recurso, sem confundí-la com sanção final.

### Decisão para passagem da Fase 1 à correção

**Encerrada a verificação estrutural dos 29 IDs, suas inscrições no catálogo e os 34 destinos de link do hub de PL**. Nada nessas três verificações exige criar, renomear ou duplicar artigos. **Permanece aberta a validação jurídica/editorial da Fase 1 como um todo**, porque há erros comprovados e lacunas conhecidas. Proposta objetiva de passagem: **(1)** editar DC34 com correções normativas já demonstradas, **(2)** corrigir os dois rótulos do hub, **(3)** verificar pós-edição os seis exercícios, fluxograma e navegação do site, **(4)** registrar veredito por artigo. A realização desses reparos depende da etapa editorial, distinta do levantamento diagnóstico, e não foi feita neste bloco.

**Métrica correta após esta etapa:** **29/29 artigos de PL identificados, 297 exercícios examinados com graus variados de cotejo; 29/29 IDs e aliases revisados; 29/29 IDs encontrados no catálogo; 34 links do hub com caminhos existentes**. A porcentagem histórica “98% do diagnóstico” era uma estimativa subjetiva. **Com a inspeção estrutural concluída, evitar simplesmente declarar 100% ou equiparar diagnóstico à certificação de conteúdo.** Até a última certificação formal explicitamente rastreada no relatório, **DC29** recebeu atestado normativo datado; os demais continuam exigindo validação própria. **Nenhum artigo e nenhum hub foram editados nesta rodada.**


### DC30: restrições a emendas e alteração do remanejamento nos arts. 41 e 45 (11/11/2026)

**Correção publicada em DC30:** commit `b949e763188af74d7594ef2ca321f2bf248b0350`. Cotejados [arts. 41 e 45 da Resolução 1/2006-CN atualizada pela Câmara](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html). O **art. 41** exige compatibilidade de emendas de acréscimo/inclusão com PPA e LDO, indicação de recursos por anulação com restrições para pessoal, serviço da dívida e transferências constitucionais; anulação dessas dotações apenas para correção de erros ou omissões (§ 1º). O § 2º, acrescentado pela Resolução 2/2025-CN, disciplina classificação de certas programações sob a LC 210/2024. O **art. 45**, na redação dada pela Resolução 1/2025-CN, exige acréscimos e cancelamentos **no mesmo órgão orçamentário e compatibilidade das fontes**; a redação anterior exigia também mesmo grupo de natureza de despesa, condição removida em 2025. Tabela e dois casos adicionados para prevenir erro de literalidade normativa.

**Controle de trabalho paralelo:** não alterar os checkpoints de outra frente. **DC30 não certificado**, pois a validação integral do restante da disciplina especial da CMO e todos os vínculos ainda não foi encerrada. No recorte histórico da auditoria editorial: **16/29 arquivos distintos modificados e 1/29 certificado (DC29)**, sujeitos à reconciliação de mudanças externas.


### DC30: distinção entre três espécies de emenda à despesa (arts. 37–40) (11/11/2026)

**Edição aplicada ao DC30:** commit `6b95bbb5d09174680942b9782067a239d5a779c9`. A [Resolução 1/2006-CN consolidada, arts. 37 a 41](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) diferencia três classes: **remanejamento**, com acréscimo/inclusão e anulação equivalente de dotações do projeto, **exceto Reserva de Contingência** (art. 38); **apropriação**, com uso da **Reserva de Recursos do art. 56** ou de outras dotações sob CF art. 166, § 3º, II (art. 39); e **cancelamento**, com redução exclusiva de dotações (art. 40). O DC30 agora contrapõe fontes, efeitos e o requisito adicional do mesmo órgão orçamentário para remanejamento (art. 45), com exemplos de classificação. **Não se confundem Reserva de Recursos e Reserva de Contingência.**

**Pesquisa de vigência nesta rodada:** verificado o [registro normativo do Senado da Resolução 1/2006-CN](https://legis.senado.leg.br/norma/561123) e o [catálogo legislativo da CMO](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao), que apresentam alterações de 2025 e não indicaram modificação de 2026 nos resultados consultados. Isso não é garantia absoluta de ausência de atos adicionais, e ainda não equivale à revisão integral dos procedimentos especiais. **DC30 não certificado**. Mantêm-se, para esta trilha, **16/29 artigos com alguma edição e 1/29 certificado (DC29)**. A estimativa de conclusão da outra frente de diagnóstico não deve ser convertida em percentual de artigos certificados.


## Bloco 34: encerramento do levantamento diagnóstico e passagem controlada à edição (11/11/2026)

**Natureza desta decisão:** encerramento **do inventário e da identificação estruturada dos riscos conhecidos** na frente Processo Legislativo e Regimentos, mantendo **aberta a certificação jurídica integral por artigo**. A antiga estimativa de progresso 98% não será inflada artificialmente: cobertura de inventário, exame de questões, certificação e correções são métricas independentes. A data é a do checkpoint; uma nova resolução ou retificação posterior exige nova checagem.

### Evidência e conclusão do levantamento

**(1) Integridade estrutural, PASSOU no escopo testado:** 29/29 arquivos da trilha PL possuem `articleId` diferente e `articleAliases` correspondente ao próprio caminho; 29/29 desses IDs constam no catálogo para `camara-2026 > direito-constitucional`; 38 referências do catálogo dessa matéria são distintas entre si; 34 referências de links do hub para arquivos da trilha foram comparadas a caminhos existentes, sem destino ausente. Essas verificações **não** constituem teste de site publicado, unicidade do vault inteiro ou renderização de Markdown/Mermaid.

**(2) Cobertura e questões, EXAMINADAS SEM CERTIFICAÇÃO EM MASSA:** 29 arquivos e 297 enunciados inéditos C/E identificados e examinados em intensidades diversas. O cotejo dirigido de gabaritos **não** equivale à certificação frase a frase do conteúdo. A matriz documental do edital do Cargo 1, Comunicação Social/Divulgação Institucional, registra duas camadas: recortes de RICD/RCCN no básico e aplicação mais ampla de Res.17/1989 e demais resoluções no específico. A articulação dos dois programas está documentada no bloco 27.

**(3) Não conformidades textuais ainda presentes, REPROVARAM:** comparação do conteúdo atual de DC34 (SHA `3721a69480cba194da12778ac7630681a506c37f`) e do hub constitucional (SHA `12e116ba16f601264be9003ceb20fa158d388b76`) confirmou:
- **NC-PL-025, DC34:106:** título traz `art. 13, V`; rol correto está no `art. 13, VI` do Código consolidado. **Erro de remissão confirmado.**
- **NC-PL-026, DC34:121:** assertiva de `um deputado a menos` por `assento especial` do Corregedor reproduz regra histórica e não está sustentada pelo Código atual. **Não ensinar como vigente sem fonte autônoma válida;** no Código atual, art.9º §4º, Corregedor participa **sem voto**.
- **NC-PL-027/028, DC34:185:** artigo já menciona cautelar, mas não sistematiza `RICD art.15 XXX e §§2º–6º`, Res.11/2024 e Ato da Mesa 180/2025, distinguindo **48h Corregedoria, 5 dias úteis Mesa, 3 dias úteis Conselho, 1 dia útil para recurso e sessão seguinte no Plenário**. **Lacuna didática e de remissões**, não enunciado diretamente falso.
- **NC-PL-029, hub:75 e 77:** atribui `CAM-PL-020` a DC14; o planejamento e DC23 reservam 020 ao conjunto Mesa/órgãos arts.1–24, enquanto aprofundamento de comissões em DC14 é `CAM-PL-004`. **Erro de rastreabilidade comprovado.**
Estas não conformidades são **bloqueadores editoriais pontuais**, e seu reparo pode ocorrer sem renomear, duplicar ou substituir os arquivos.

**(4) Correções paralelas preservadas:** outro fluxo já editou **DC30**, incluindo RCCN art.90, vigência das alterações Res.1/2025-CN e Res.2/2025-CN, composição da CMO, diferença entre emendas de comissões e Mesas, e condições dos arts.41/45. A última atualização observada no relatório é commit `b949e763188af74d7594ef2ca321f2bf248b0350`. **DC30 continua sem certificação exaustiva**, apesar das correções. O diagnóstico anterior também documenta reparos de DC13/14/25/34/35/36/37 e **certificação explicitamente delimitada de DC29**; nenhum desses estados autoriza nova homologação automática.

### Critério de aceite para a próxima etapa editorial, com teste verificável

| Ordem | Arquivos | Execução planejada | Evidência de aceite |
| --- | --- | --- | --- |
| 1 | DC34 | Corrigir art.13 V→VI e frase do Corregedor, sem retirar composição 21+21 nem sua participação sem voto; acrescentar contraste cautelar/sancionatória com todas as fontes de 2024/25 | Releitura comparada do Código atualizado, RICD e Ato 180; **ausência de afirmações históricas ensinadas como vigentes** |
| 2 | Hub de Direito Constitucional | Substituir os dois rótulos CAM-PL-020 obsoletos; manter caminhos e IDs | DC23 identificado 019+020; DC14 identificado 004; 34 links ainda resolvem |
| 3 | DC34 e site | Validar texto, tabela, Mermaid, exemplos e **6 gabaritos** após edição | Fluxograma renderizado, sem confusão de instâncias, prazos, recursos, votos |
| 4 | Catálogo/site | Conferir integridade em ambiente de publicação e navegação real | Rotas de DC14, DC23, DC34 e hub funcionam; IDs estáveis; sem links quebrados |
| 5 | DC30 e demais 28 artigos | Certificação independente do conteúdo por recorte, fonte datada e questões, acompanhando atualizações concorrentes | Resultado **por arquivo**, com data/norma, correções verificadas e escopo da certificação |

**Conclusão da Fase 1, com precisão:** a **etapa de levantamento diagnóstico** cumpriu sua finalidade de identificar o inventário, confirmar mapeamento do edital, examinar as baterias, classificar riscos, registrar fontes e localizar reparos evidenciados. **O relatório de diagnóstico fica pronto para passagem à edição**, mas a **Fase 1 entendida como certificação jurídica completa não pode ser dada como concluída**. Não há evidência para dizer “29/29 homologados”. O estado conhecido de certificação formal continua **DC29: 1/29**, salvo registro posterior de outra frente não revisado aqui.

**Alterações efetivamente realizadas nesta rodada:** somente este relatório e o índice compartilhado; **nenhum arquivo de estudo, hub, catálogo, questão ou flashcard foi editado**. Os próximos reparos são instruções de execução documentadas, não promessas de correção já aplicada.


### DC30: publicidade e teto de aprovação das emendas (arts. 37-A e 42) (11/11/2026)

**Alteração efetivamente publicada:** commit `f55a90a1a2145345a00a44692121a5b3c06ded83`, no artigo DC30. A leitura dos [arts. 37–42 da Resolução 1/2006-CN, consolidação da Câmara](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) confirmou o quadro de remanejamento, apropriação e cancelamento e identificou duas regras omitidas: **art. 37-A** (atas de apresentação, indicação e alteração de emendas elaboradas em sistema sempre que possível e disponíveis publicamente no portal do Congresso) e **art. 42** (valor aprovado não excede o solicitado, salvo remanejamento entre emendas do mesmo autor). O conteúdo agora inclui remissões, linha da matriz e caso de aprovação acima do solicitado. A literalidade de **“sempre que possível”** não afasta o dever de publicidade. 

**Evidência do recorte revisado:** dispositivo e exceções de arts. 37–42 confrontados diretamente com a norma vigente listada na Câmara, preservadas as análises já feitas do RCCN arts. 53–103 e os 10 gabaritos do DC30. **Certificação ainda não atribuída** porque subsistem verificaçōes de relações entre regimes especiais e dos limites do próprio escopo da nota; a auditoria ampla também aponta outras não conformidades em arquivos alheios ao DC30. **Indicadores históricos desta frente editorial mantidos:** 16/29 artigos distintos editados, 1/29 certificado (DC29). A contagem geral deve ser reconciliada com outras edições concorrentes antes de ser apresentada como progresso global exato.


## Bloco 35: execução editorial e pós-checagem das pendências P0 (11/11/2026)

**Etapa efetivamente executada, não só planejada.** Antes de editar, foram consultadas as fontes primárias oficiais: [Código de Ética consolidado](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), [Resolução nº 11/2024 da Câmara, suspensão cautelar](https://www2.camara.leg.br/legin/fed/rescad/2024/resolucaodacamaradosdeputados-11-12-junho-2024-795774-publicacaooriginal-172082-pl.html) e [Ato da Mesa nº 180/2025, arts. 2º–4º](https://www2.camara.leg.br/legin/int/atomes/2025/atodamesa-180-7-maio-2025-797421-publicacaooriginal-175313-cd-mesa.html). Obtidas as versões correntes do GitHub imediatamente antes de cada escrita, com atualização por `sha`, e relidos os arquivos após os commits.

### Correções publicadas

**DC34, Código de Ética**, commit **`936edbdf0c8408f312480bb49e636ca582ebcee0`**, caminho `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md`:
- **NC-PL-025, corrigida:** subtítulo de prerrogativas passou de **art.13 V** para **art.13 VI**. A lista material das quatro prerrogativas foi preservada.
- **NC-PL-026, corrigida no texto:** retirada assertiva anacrônica de que partido do Corregedor indica `um deputado a menos` por assento especial. Inserido esclarecimento de que a proporcionalidade é tratada no art.7º §3º atual e participação do Corregedor **com voz e sem voto** no art.9º §4º.
- **NC-PL-027/028, lacuna substancialmente suprida:** inserida seção própria antes do passo a passo disciplinar, distinguindo **medida cautelar de suspensão** do rito sancionatório. Fontes citadas e marcos separados: Corregedor comunica em **48 horas**; Mesa tem **cinco dias úteis** e delibera representação por **maioria absoluta**; Conselho decide em **três dias úteis**, com voto ostensivo; recurso pelo representado ou pela Mesa em **um dia útil** da publicação da decisão; Plenário decide na **sessão imediatamente subsequente**, ostensivamente e por maioria absoluta; se não houver decisão do Conselho, apreciação imediata pelo Plenário nas condições do RICD. Referenciados art.15 XXX §§1º–6º, Res.11/2024 e Ato180/2025.
- **Teste pós-escrita:** nova leitura exibiu subtítulo correto, ausência da frase `um deputado a menos`, nova seção e fonte Ato180; os **seis gabaritos** foram preservados na ordem **ERRADO, CERTO, CERTO, ERRADO, ERRADO, ERRADO**. Nenhuma questão foi editada nesta rodada.

**Hub de Direito Constitucional**, commit **`c135c54e060a6f0f992056804ad7ba5f4a95deeb`**, caminho `3 - Materias/Direito Constitucional/direito-constitucional.md`:
- **NC-PL-029, corrigida:** descrição do **DC23** passou a afirmar que `CAM-PL-020` também é coberta ali (Mesa/órgãos, arts.1º–24), e o rótulo do link para **DC14** tornou-se `CAM-PL-004, aprofundamento de comissões, arts.25–54`. **Caminhos e IDs preservados.**
- **Teste pós-escrita:** leitura do hub confirmou ausência do rótulo antigo `CAM-PL-020, Regimento da Câmara, arts.25–54` e presença do novo rótulo. A página permanece com **45 links internos** no total, incluindo links além da trilha PL. Não houve execução do site nem teste de publicação.

### Estado e limites da certificação

**Quatro classes de pendência (NC-PL-025, 026, 027/028, 029) foram tratadas editorialmente.** Esses reparos são **verificados por releitura estática do conteúdo** e fonte primária; isso **não certifica integralmente DC34**. Faltam execução/renderização do Mermaid, conferir integralmente cada ramo do fluxo, testar rotas da interface do site e eventual norma superveniente após 11/11/2026. A certificação anterior de DC29 permanece o único atestado formal explicitamente rastreado nesta frente, salvo novos atos de outra frente a reconciliar.

**Próximas ações verificáveis:** (1) verificar renderização real do Mermaid e comportamento do roteador/hub no GitHub Pages; (2) confirmar se campos do catálogo e índices auxiliares referenciam o conteúdo atualizado sem caches; (3) auditar demais artigos individualmente, com evidência primária e veredito datado. A **etapa de reparo pontual das pendências previamente provadas está concluída**, mas o trabalho de certificação dos 29 artigos permanece aberto.


### DC30: condições dos arts. 41, III–IV, e 50-A, § 1º (11/11/2026)

**Correção aplicada e verificada no DC30:** commit `a247919ea8a79ec09c2cf5401f4dbdd00970ef8f`. O cotejo do [art. 41, III–IV, da Resolução 1/2006-CN atualizada](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) comprovou que, além de limites de recursos, a emenda não pode abranger várias ações que devam ser objeto de propostas distintas e deve obedecer às normas da CMO. O **art. 50-A, § 1º**, exige que as indicações individuais respeitem a destinação mínima de 50% para ações e serviços públicos de saúde (CF art. 166, § 9º). A matriz e dois casos de estudo foram ampliados; nenhum gabarito foi alterado. Fontes consultadas em 11/11/2026: publicação legislativa atualizada da Câmara dos Deputados e RCCN consolidado.

**Pendência de fechamento bem delimitada:** verificar a adequação de cada exemplo à distinção entre regra geral do RCCN e procedimento específico de orçamento, concluir revisão dos links internos e selecionar quais disposições da Resolução 1/2006-CN são indispensáveis ao **escopo do edital** de DC30, sem transformá-lo numa reprodução completa do regimento orçamentário. **DC30 ainda não certificado**; o recorte desta frente contabiliza 16/29 artigos modificados e DC29 como único certificado, sem antecipar reconciliação com alterações de outros trabalhos simultâneos.


### DC30: recorte editorial e links internos confirmados (11/11/2026)

**Edição confirmada:** commit `caabec0c9347c29e01c1d0d43a2782993a02630a`, artigo DC30. Foi identificada expansão gradual do artigo para regras da Resolução 1/2006-CN (arts. 37–50-A), mais detalhadas do que o **núcleo do RCCN até art. 103** indicado para CAM-PL-026. Acrescentada distinção explícita entre **núcleo do recorte** (sessões solenes, revogações de ritos de PEC/iniciativa presidencial, regras orçamentárias remanescentes e prevalência da Resolução especial) e **aprofundamento complementar** (classificações, limites e requisitos das emendas). Inserida ligação também com a nota específica de [[3 - Materias/Orcamento Publico/05a - emendas parlamentares e orcamento impositivo|emendas e orçamento impositivo]]. Casos complementares reformatados em sequência identificável (A–I), eliminando sequência inicial 0-A/0/1 com referências misturadas.

**Integridade dos links internos:** **8 destinos distintos** extraídos do DC30 via sintaxe Obsidian foram consultados individualmente por caminho em `leorruas/concursos` e **8/8 existem**: DC10, DC11, DC12, DC17, DC18, DC29, ORC12 e ORC13. A nova ligação ORC05a também foi verificada diretamente antes da edição. Esse teste comprova presença dos arquivos fonte, **não renderização do site**, compatibilidade de âncoras ou navegação web publicada.

**Exercícios e status:** os dez itens C/E do DC30 foram relidos e seus gabaritos preservados. Nenhuma certificação nova declarada; **DC30 permanece não certificado**, porque o controle de vigência e as relações entre dispositivos gerais e especiais ainda não foram integralmente encerrados. Contagem histórica desta frente: **16/29 artigos modificados e 1/29 certificado (DC29)**, sujeita à reconciliação com demais frentes.


## Bloco 36: pós-reparo DC34, integridade estática do Mermaid e pipeline de publicação (11/11/2026)

**Rechecagem do estado atual do GitHub:** recuperados `DC34` (blob SHA `1af57fc59882d6e58cbeded54dc588e07ad77331`), `direito-constitucional.md` (SHA `fffbd3787ae67845a0952f68c86a16d9312a1039`), `web/05-mermaid.js`, `web/03-article-navigation.js`, `web/04-markdown.js`, `index.html`, `.github/workflows/pages.yml` e `.github/workflows/validar-publico.yml`. O histórico do relatório registra também correções paralelas posteriores em DC30, até o commit `a247919ea8a79ec09c2cf5401f4dbdd00970ef8f`; não atribuir essas alterações a esta revisão.

**DC34, confirmação textual após commit `936edbd`:**
- `art.13 VI` consta no subtítulo; `art.13 V` não consta ali.
- A formulação anacrônica `um deputado a menos` não consta mais como afirmação aplicável; a regra correta do Corregedor, voz e sem voto, permanece.
- O material contém seção específica de suspensão cautelar, cita RICD art.15/Res.11/2024 e Ato da Mesa 180/2025 e distingue os prazos por ator e a sanção de mérito.
- **Seis gabaritos autorais preservados**, em ordem E/C/C/E/E/E. Esse teste é **identidade dos gabaritos e leitura de trechos**, não revalidação independente de cada inferência jurídica do novo parágrafo.

**Hub, confirmação após commit `c135c54`:** a referência a DC23 identifica CAM-PL-020 como coberta no próprio DC23 (arts.1–24) e a referência a DC14 identifica expansão CAM-PL-004 (arts.25–54). Os caminhos dos wikilinks não foram alterados.

### Inspeção estática do único diagrama Mermaid do DC34

Extraído o conteúdo integral de `\`\`\`mermaid ... \`\`\`` do artigo; conferidos por análise de texto **36 conexões, 32 identificadores de nós**, todos os conectores interpretados por padrão estrutural, **nenhuma linha de aresta fora do padrão testado**, fechamento de cerca e cabeçalho `flowchart TD`. O nó **N** de limites de prazo é uma legenda de apoio com **setas pontilhadas** que apontam para E e I, portanto não é alcançável pela raiz A no sentido do grafo, de maneira intencional. Os terminais encontrados foram C2, D2, F, M, F2, F3 e L, compatíveis com um fluxograma resumido que tem desfechos alternativos. O nó **H** recebe caminhos tanto do procedimento do art.13 quanto do art.14; representa um **passo compartilhado de recurso à CCJC**, mas não oferece garantias de que todos os sujeitos e etapas de ambos os ritos estejam representados. **A inspeção estática não é validação por parser oficial de Mermaid 11.15.0 nem comprova renderização SVG/UX.** Não afirmar que o gráfico foi renderizado.

### Caminho de publicação realmente configurado

O `index.html` inclui **Mermaid 11.15.0**, `marked`, `web/04-markdown.js`, `web/05-mermaid.js` e `web/03-article-navigation.js`. O código `web/05-mermaid.js` contém `mermaid.initialize(...)` e `mermaid.render(...)`, com tratamento de tema e modal; o carregamento do conteúdo do artigo usa `fetch(artigo.path, {cache: "no-cache"})`. Isso confirma **que existe implementação projetada para renderizar o diagrama**, e não que um deploy corrente tenha executado corretamente o caso DC34.

O fluxo `.github/workflows/pages.yml` é acionado por `push` em `main`, ignorando mudanças **somente em pastas de planejamento e documentos operacionais**, portanto alterações de `3 - Materias/**` e do hub **não constam das exclusões**. Antes de publicar, executa testes de identidade e catálogos, busca, rotas, privacidade, build `scripts/build-site.js`, upload e deploy do GitHub Pages; em seguida chama `scripts/verify-live-pages.js` com URL do deployment. **O workflow não contém teste explícito de renderização visual do diagrama DC34**, nem os resultados/estado dos runs foram obtidos por esta revisão. A URL pública esperada por convenção do GitHub Pages **não foi acessível na consulta web**; isso não permite determinar se Pages está desativado, privado, em domínio próprio ou temporariamente indisponível.

### Veredito deste bloco

**PASSOU:** consistência textual dos reparos, identidade dos gabaritos, estrutura simples das arestas Mermaid e existência de pipeline de publicação com testes. **NÃO EXECUTADO/SEM EVIDÊNCIA:** parser Mermaid real, SVG renderizado, navegação em browser para DC14/DC23/DC34, status do build e validação do deploy publicado. **Pendente de certificação:** avaliação jurídica integral do novo regime cautelar versus casos, acordos e dispositivos do Código. **Sem novos erros normativos comprovados neste bloco**.

**Próxima etapa efetiva:** obter resultado de workflow e verificar a publicação por ferramenta com acesso ao site ou navegador, depois validar o fluxograma DC34 visualmente, registrar falhas exatas e corrigir somente o comprovado. Para a certificação dos 29 artigos, exigir protocolo datado por texto, sem confundir o diagnóstico já concluído com a aprovação jurídica. **Nesta rodada foram atualizados exclusivamente relatório e índice; artigos, hub, JS, workflow, quiz e flashcards permaneceram intactos.**


### DC30: 10 gabaritos rastreados e data de corte do RCCN (11/11/2026)

**Conferência efetivamente publicada:** commit `7c77bd32dea9690e80ed8cc3b9642179373bee16`. Os **10 enunciados C/E do DC30 foram confrontados um a um** com os artigos indicados na [republicação oficial do RCCN pela Câmara](https://www2.camara.leg.br/legin/fed/rescon/1970-1979/resolucao-1-11-agosto-1970-497934-republicacaoatualizada-171822-pl.html), com a [Resolução 1/2006-CN atualizada, art. 1º](https://www2.camara.leg.br/legin/fed/rescon/2006/resolucao-1-22-dezembro-2006-548706-normaatualizada-pl.html) e com a [Constituição atualizada, art. 60](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html). O artigo recebeu matriz de rastreabilidade, com a sequência de gabaritos **C, E, C, E, E, C, E, C, E, E**, preservada. **10/10 validados estritamente quanto ao teor enunciado**, sem afirmar que esse universo esgota os dispositivos.

**Ressalva de versão:** a republicação da Câmara traz a inscrição **“texto consolidado até janeiro de 2023”**. A consulta em 11/11/2026 não atualiza automaticamente a consolidação; normas posteriores devem ser cotejadas, especialmente as regras da CMO alteradas em 2025. Informação registrada no DC30.

**Estado da certificação:** a matriz de exercícios está validada (10/10), mas **DC30 continua não certificado integralmente**, porque os aprofundamentos sobre emendas e a interação com disciplinas especiais podem apresentar condicionantes anuais adicionais. Para a presente trilha editorial, permanece o histórico de **16/29 artigos alterados** e **1/29 certificado (DC29)**; não confundir avanço de exercícios verificados com certificação de todo o artigo nem com outras frentes de diagnóstico.


## Bloco 37: prova de publicação do Markdown e limites da verificação visual (11/11/2026)

**Investigação:** consultados `scripts/verify-live-pages.js`, `scripts/build-site.js`, `.github/workflows/pages.yml`, testes de identidade e catálogo, `web/05-mermaid.js`, além das versões atuais de DC34 e hub. Tentada consulta ao workflow e ao endereço público do site. A ferramenta de GitHub para listar runs por commit **retornou lista vazia**, mas sua cobertura é limitada a runs de pull requests, portanto **não permite concluir que não houve execução por push**. A consulta ao endereço convencional GitHub Pages não retornou site acessível. **Nenhum status de deploy foi confirmado**.

**Falha de cobertura de teste identificada:** o verificador pós-deploy comparava o `manifest.json`, os IDs/aliases, o catálogo e recursos de flashcards/glossário/interface. Ele **não comparava o corpo Markdown de DC34 nem do hub**. Como um ajuste do artigo pode manter metadados idênticos, o teste poderia sinalizar sucesso com esses dois arquivos desatualizados no site.

**Correção do teste publicada:** `scripts/verify-live-pages.js`, commit **`781e6175bf36c621ea4687616ca0826e727154e5`**. Mantidos todos os testes existentes, adicionada, na verificação pós-deploy, comparação do conteúdo **exato** de:
- `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md`
- `3 - Materias/Direito Constitucional/direito-constitucional.md`

Para cada um, o verificador exige cópia local em `_site`, busca o arquivo no Pages por URL derivada do **endereço real de deployment fornecido pelo próprio workflow** com parâmetro de versão para evitar cache, exige HTTP 2xx e compara o texto publicado ao texto local. Qualquer ausência ou divergência lança erro, aproveitando o mecanismo preexistente de até **seis tentativas** do pós-deploy. A releitura do script salvo confirmou as duas rotas, `new URL(recurso, baseUrl)`, cache-busting, timeout de oito segundos e igualdade textual. O build existente `scripts/build-site.js` copia notas Markdown da pasta `3 - Materias` para `_site` e já inclui o hub e DC34 no inventário, conforme cruzamento dos 29 IDs.

**Limites explícitos:** inserir um teste no código **não é executar o teste**. Nesta rodada não houve acesso a run de GitHub Actions, logs, artefato `_site` nem visualização do site, logo **não declarar deploy bem-sucedido**. A igualdade do Markdown ao vivo, quando executada, prova a publicação do conteúdo, mas **não a renderização SVG** do Mermaid nem a navegação visual. A checagem estrutural do bloco 36 também não substitui o parser da versão 11.15.0 do Mermaid. O fluxo existente cobre catálogo e busca, mas não contém teste visual explícito do diagrama DC34.

**Próximo passo:** obter run do workflow `pages.yml` e seu resultado depois do commit do teste; confirmar verificação `Código de Ética e hub constitucional sincronizados`, e executar teste visual específico do diagrama se estiver disponível ambiente de navegador. Depois iniciar certificação jurídica individual dos demais textos. **Nenhum artigo de estudo, questão ou hub foi alterado neste bloco**; apenas script de teste, relatório e índice.


## Bloco 38: conferir execução de Pages e corrigir agravamento no fluxograma DC34 (11/11/2026)

**Investigação sobre a publicação:** o GitHub `pages.yml` tem gatilho de `push` em `main`, mas o conector disponível para `fetch_commit_workflow_runs` só mostra execuções vinculadas a *pull requests*. Essa consulta para o commit `936edbdf0c8408f312480bb49e636ca582ebcee0` retornou **zero resultados**, sem que isso signifique ausência de build por `push`. Tentadas também as URLs de runs do workflow `pages.yml` por `mcp__GitHub__fetch`: rota de Actions não permitida pelo conector. `get_commit_combined_status` não retornou verificações de status e não cobre necessariamente GitHub Actions Checks. **Não há evidência nesta rodada de sucesso ou falha do deploy**, e o novo teste em `scripts/verify-live-pages.js` permanece sem comprovação de execução.

**Cotejo normativo dirigido, fonte primária:** [Código de Ética, Resolução da Câmara nº 25/2001, texto consolidado, art.13, III, d](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html). Se o Conselho identifica hipótese de sanção **mais grave** ao apurar suspensão de prerrogativas, **propõe à Mesa que represente** por sanção agravada. **Aprovada a representação**, o próprio Conselho **reabre prazo de defesa e realiza instrução complementar**, observando os prazos do art.14 **antes de deliberar**. O fluxograma anterior de DC34 apresentava atalho `G --> I1` (escolha inicial de relator no rito grave) sem expressar a decisão condicionante da Mesa e a instrução complementar. **NC-PL-030, falha didática confirmada no fluxo**, distinta de erro dos seis gabaritos.

**Correção efetivamente realizada:** arquivo `3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md`, commit **`b32a65f47247a48fddb1c1588b1f5776a45fc2ee`**. Substituído o ramo de sanção mais grave por:
`E4 → G (Conselho propõe à Mesa representação por pena mais grave) → G1 (Mesa aprova?)`; em caso positivo, `G2 (Conselho reabre defesa e instrução complementar, prazos do art.14) → I5 (parecer e deliberação subsequentes)`; em caso negativo, `G3 (não há tramitação automática da pena mais grave)`. Preservadas as saídas anteriores de improcedência, sanção menor e sanção própria, os links, os IDs e as outras seções.

**Controle de concorrência:** a primeira tentativa de commit recebeu **HTTP 409**, revelando atualização paralela de `main`; foi feita nova leitura do arquivo e nova tentativa de escrita baseada no estado corrente, com confirmação de commit. **Verificação pós-gravação:** blob SHA `ec3b4f62c138bb82379a058688fb517cd10740f3`, 40 linhas de diagrama, nenhuma linha não reconhecida pelo verificador estrutural de conectores. **Seis gabaritos preservados na ordem E/C/C/E/E/E**. **Ainda não foi executado o parser Mermaid 11.15.0 ou renderizado SVG no navegador**; validação textual não substitui teste visual.

**Estado após bloco 38:** texto corrigido contra o fundamento normativo identificado; **NC-PL-030 corrigida estaticamente**. A evidência de publicação do script de verificação no Pages e a renderização efetiva continuam pendentes. A certificação jurídica dos 29 artigos ainda deve ocorrer por arquivo e versão; **nenhuma certificação nova** foi atribuída neste bloco. Alterações: DC34, este diagnóstico e índice compartilhado; não foram editados hub nem outros artigos.


### DC34: rechecagem NC-PL-025–028 e testes cautelares (11/11/2026)

**Estado real verificado antes desta edição:** o DC34 (SHA `1af57fc59882d6e58cbeded54dc588e07ad77331`) já continha correções das quatro pendências apontadas em diagnóstico anterior: **NC-PL-025**, referência do rol de prerrogativas ao **art. 13, VI**, em vez do V; **NC-PL-026**, retirada da antiga regra de desconto de uma vaga do partido do Corregedor como norma vigente, com referência à redação do art. 7º, § 3º; **NC-PL-027/028**, seção própria sobre a suspensão cautelar após a Resolução 11/2024 e Ato da Mesa 180/2025, com marcos de **48 horas**, **5 dias úteis**, **3 dias úteis**, **1 dia útil para recurso** e **sessão imediatamente subsequente**. O cotejo foi feito com a [Resolução 25/2001 consolidada](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html), a [Resolução 11/2024](https://www2.camara.leg.br/legin/fed/rescad/2024/resolucaodacamaradosdeputados-11-12-junho-2024-795774-publicacaooriginal-172082-pl.html) e o [Ato da Mesa 180/2025 republicado](https://www2.camara.leg.br/legin/int/atomes/2025/atodamesa-180-7-maio-2025-797421-republicacao-175370-cd-mesa.html). **Essas correções pré-existentes não foram atribuídas como trabalho novo nesta rodada** e não devem continuar listadas como problemas ativos sem nova evidência.

**Edição nova publicada:** commit `75c04c48b35399658f62986536de6578f518a717`. Acrescentados quatro testes C/E especificamente sobre suspensão cautelar: proibição de decisão monocrática *ad referendum*, distinção 48 horas x 5 dias úteis, efeito de inércia do Conselho e legitimidade para recurso. A referência ao Ato 180/2025 foi trocada para a **republicação de 13/5/2025**. As seis questões finais originais do DC34 foram preservadas. **NC-PL-025–028: resolvidas no conteúdo do DC34 na versão consultada**, sujeito a nova verificação se o arquivo mudar; **DC34 não certificado integralmente** nesta etapa, porque o restante do rito ético e o conjunto das fontes históricas e exercícios não foi revalidado de ponta a ponta.

**Indicadores desta trilha:** DC34 já constava dos 16 arquivos alterados no recorte de 29; a edição deste commit não o torna artigo adicional. DC29 permanece a única certificação formal registrada nesta trilha, sem pressupor estado de outras frentes concorrentes.


## Bloco 39: primeira certificação adicional, DC32 Resolução 3/1990-CN, art. 1º–13 e dez questões (11/11/2026)

**Trabalho efetivo:** conferida integralmente a nota atual `3 - Materias/Direito Constitucional/32 - comissao representativa do congresso resolucao 3 1990.md`, contra os **13 artigos** da [Resolução nº 3/1990-CN no Senado](https://legis.senado.leg.br/norma/561157/publicacao/36852072), a [ficha da Câmara](https://www2.camara.leg.br/legin/fed/rescon/1990/resolucao-3-21-novembro-1990-497950-norma-pl.html), com **ausência de revogação expressa registrada**, a [Constituição atualizada no TSE](https://www.tse.jus.br/legislacao/codigo-eleitoral/constituicao-federal/constituicao-da-republica-federativa-do-brasil), e o [portal oficial do RCCN](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional). Conferidos os oito casos e os dez itens de treino, a referência antiga do art.3º a calendário anterior à EC50/2006 e a remissão histórica do art.7º III ao art.49 II, quando o suporte constitucional atual é art.49 III + art.83.

**Resultado normativo:** a composição **7 senadores + 16 deputados e igual número de suplentes**; mandato no recesso, sem suspensão por convocação extraordinária; eleição em cada Casa; presidência por membro da Mesa do Senado e vice por membro da Mesa da Câmara; condições do art.7º I–XI; comunicação das reuniões com **12 horas**; quórum para abertura de **3 senadores + 6 deputados**, para deliberação **4 senadores + 9 deputados**; aprovação por maioria simples computada **separadamente por Casa**, iniciada pelos deputados, estão coerentes com o texto oficial. Os limites de urgência, prévia manifestação da CMO, dez dias úteis após recesso e impedimento das Mesas foram cotejados nos incisos próprios. O RCCN art.151 determina subsidiariedade Senado→Câmara, em consonância com o art.11 da Res.3/1990-CN.

**Gabaritos conferidos, dez itens:** **C, E, C, E, E, C, C, E, C, E**. **Nenhuma inversão demonstrada.** O uso da redação desatualizada do art.3º é identificado como erro se aplicada à atualidade; a nota já explica isso. A remissão errada do art.7º III não foi silenciosamente reproduzida como fundamento vigente. **Nenhuma correção de mérito necessária no material revisado**.

**Certificação explicitamente registrada no próprio DC32**, commit `7d1ae2c3d6fb8afaad1bf7adcac69af8c2b564cd`, com fontes, data de corte, limites e dez gabaritos; isso é **certificação jurídico-normativa de recorte delimitado**, não garantia de que nunca existirá norma superveniente ou que todos os cenários reais se enquadrem sem jurisprudência adicional. A inspeção do cadastro legislativo não constatou revogação expressa; essa fórmula **não significa ausência absoluta de revogação tácita ou alteração posterior fora da fonte**.

**Reconciliação de métricas:** o registro anterior identificava **DC29** como 1/29 artigo certificado com recorte normativo explícito. Com **DC32** conferido e certificado nesta rodada, passam a ser **2/29 com certificação delimitada e verificável em texto (DC29 e DC32)**, restando **27/29 sem esse atestado formal nesta trilha**. A contagem de **297 enunciados em 29 arquivos não cresce**, porque os dez itens DC32 já constavam do inventário. Os indicadores de arquivos modificados por outras frentes devem ser recalculados em separado, não estimados pela contagem histórica de 16/29.

**Publicação e Mermaid:** foi tentada a consulta das execuções do workflow Pages, mas os endpoints de `push` não são abrangidos pelo instrumento de runs associado a PRs; retorno vazio de runs ou statuses convencionais **não prova sucesso nem fracasso do deploy**. Nesta etapa não foi executado teste browser, SVG, nem o pós-deploy do bloco 37. A prioridade desta rodada passou para a **certificação jurídica individual**, com o artigo DC32 como recorte auditável.

**Próximo artigo sugerido no protocolo de certificação:** DC33 (Resolução 1/2002-CN, medidas provisórias), exigindo cotejo com art.62 da CF e alterações vigentes antes de certificar. **Esta rodada modificou DC32, relatório e índice, não DC34, hub, JS ou catálogo**.


### DC34: conferência das seis questões originais e precisão do item 2 (11/11/2026)

**Commit publicado:** `97d41c2f536f37dceaa4d222326bc05699602505`. Conferidos os seis gabaritos originais do DC34, com matriz artigo a artigo: 1 **E** (Código art. 4º, IV); 2 **C** (arts. 5º, III, e 12); 3 **C** (arts. 7º, 13, I, e 14, § 4º, I); 4 **E** (Regulamento arts. 14–16); 5 **E** (CF 55, § 2º, e Código 14); 6 **E** (Código art. 14, § 4º, VII). O texto da questão 2 foi ajustado de “desrespeite verbalmente” para **“desacate, por palavras”**, afastando ambiguidade em relação ao tipo legal do art. 5º, III, com menção expressa à defesa. Não houve inversão dos gabaritos. Fonte principal: [Código de Ética consolidado da Câmara](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html) e [Regulamento do Conselho](https://www2.camara.leg.br/a-camara/estruturaadm/eticaedecoro/arquivos/regulamento-1/view).

**Controle de certificação:** os **seis itens do DC34** estão conferidos quanto às assertivas, além dos quatro testes cautelares inseridos na rodada anterior. O artigo **ainda não está certificado integralmente** porque exemplos, fluxograma e as relações entre Regulamento de 2001, Código consolidado e Acordo de Procedimentos não foram fechados em conjunto. DC34 já integra os **16/29 artigos com edição** na trilha histórica; DC29 é o único certificado formal nela. Alterações paralelas podem exigir reconciliação do balanço global.
