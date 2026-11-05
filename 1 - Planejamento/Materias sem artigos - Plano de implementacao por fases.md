---
title: "Matérias sem artigos próprios: plano de implementação por fases"
type: "planejamento"
status: "planejado"
created: 2026-11-04
updated: 2026-11-05
scope: "multi-edital"
---

# Matérias sem artigos próprios: plano de implementação por fases

## Diagnóstico e limite da auditoria

Inventário de 04/11/2026, branch `main`: **11 matérias têm hub mas nenhum arquivo de artigo próprio separado do hub**. A expressão **sem artigos próprios** não quer dizer sem teoria: **9** já possuem artigos de outras matérias associados no catálogo por concurso; **Contabilidade Pública (CGU)** e **Inglês (Dataprev e Câmara)** têm **zero artigos associados**. Os hubs de Inglês e Cálculo Mental já incluem teoria; a operação correta pode ser **extrair/refinar**, e não duplicar.

Existem planos específicos já finalizados ou em andamento para [[1 - Planejamento/Auditoria Governamental - Plano de artigos|Auditoria Governamental]], [[1 - Planejamento/Orcamento Publico - Plano de artigos|Orçamento Público]] e [[1 - Planejamento/Etica Publica - Plano de artigos|Ética Pública]]. Essas frentes não entram novamente neste backlog. [[3 - Materias/Avaliacao de Politicas Publicas/avaliacao-de-politicas-publicas|Avaliação de Políticas Públicas]] já tem artigos próprios.

A base da CGU é o **checklist/síntese local** em `2 - Editais/CGU 2026 - Auditoria.md` e `data/planos-estudo/cgu-2026.json`. O próprio plano sinaliza que não substitui auditoria integral do PDF e retificações. Portanto, **títulos e fronteiras abaixo são propostas editoriais**, sujeitas à conferência de fontes por lote, e **A/B/C são prioridades internas**, não frequência demonstrada de cobrança.

## Resultado esperado e modo de execução

**Objetivo:** chegar à aula com um artigo canônico recuperável, fontes conferidas, relações prontas e espaço claro para refinamento por erro. A FGV/Dataprev usa cinco alternativas; a CGU 2026 e a Câmara usam **Cebraspe, Certo/Errado**. A teoria pode ser comum; os exemplos calibrados, provas-espelho, corpus e desempenho são específicos por concurso.

**Cada checkbox F corresponde a uma microfase editorial, não a uma sessão de estudo.** O roteiro pode avançar por qualquer fase pronta, em lotes de 1 a 3 artigos, respeitando pré-requisitos. Não criar arquivos vazios em massa nem marcar uma unidade aprendida pela publicação. Novos artigos serão numerados no momento da criação, com `articleId` único e alias estável. Um mesmo tema pode resultar em **refinamento de nota existente**, se a auditoria mostrar que a nova nota duplicaria um conceito canônico.

**Critério de pronto por microfase:** confronto com edital e fontes oficiais/normativas; delimitação do conceito, estrutura, exceções, fronteiras e caso comentado; vínculos a notas preexistentes; revisão editorial segundo [[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial]]; publicação atômica da nota, hub, `index.md`, `data/catalogo-materias-por-concurso.json` e `noteRefs` de `data/planos-estudo/cgu-2026.json` quando pertinente. Verificar workflow Pages do HEAD. Não editar `data/contexto-estudo` nem fabricar sessões, notas de desempenho ou conclusão didática.

## Etapas de governança

- [x] **G00 · Inventário inicial**: cruzados arquivos em `3 - Materias/`, hubs, catálogo v2 e planos anteriores em 04/11/2026.
- [ ] **G01 · Conferência de edital por lote**: checar texto oficial, retificações, fontes e corpus de prova antes de afirmar cobertura, prazos ou incidência.
- [ ] **G02 · Reuso primeiro**: para cada microfase, decidir explicitamente **novo artigo / ampliar existente / somente vincular**. A lista de títulos é um mapa, não autorização automática para duplicar.
- [ ] **G03 · Publicação rastreável**: criar arquivos em lotes atômicos, atualizar os vínculos `articleId`, hub, índice, plano de unidades e validar workflow. Se a última publicação falhar, priorizar reparo.
- [ ] **G04 · Fechamento editorial do backlog**: conferir unidades e fontes cobertas; declarar lacunas restantes, inclusive de normas e versões; manter aula/progresso separados da edição.

## Ordem de execução e microfases

Ordem inicial: **CGU P3**, com Contabilidade em primeiro lugar, depois Contratações, Integridade e Finanças; seguir para **P2**, depois **P1**; Inglês da Dataprev e Cálculo Mental ficam como trilhas reutilizáveis. Isso é uma opção de planejamento, ajustável por prazo de prova, erros e pré-requisitos. Dentro de uma onda, preferir completar um núcleo útil antes de multiplicar títulos.

## Onda 1: Contabilidade Pública

**Recorte:** CGU P3.2, prioridade A. **Hub:** [[3 - Materias/Contabilidade Publica/contabilidade-publica|Contabilidade Pública]].

**Reuso obrigatório antes de criar:** Orçamento Público (11 notas), política fiscal e MCASP 11ª ed.; conferir PCASP e normas das estatais.

- [x] **F01 · Patrimônio público e três óticas da informação**: U01: objeto, orçamento × financeiro × patrimonial, fatos e fluxos.
- [x] **F02 · Ativos, passivos e variações patrimoniais**: U01: PCASP, reconhecimento, VPA × VPD e seus limites; confirmar abrangência nas fontes.
- [x] **F03 · Balanço Orçamentário e Balanço Financeiro**: U02: estrutura, leituras, saldos, execução × caixa.
- [x] **F04 · Balanço Patrimonial, DVP e notas explicativas**: U02: componentes, conciliação, variações e análise crítica.
- [x] **F05 · Custos e desempenho físico-financeiro**: U03: MIC, MCASP, custos × despesas × pagamentos, eficiência e indicadores. Coberta editorialmente pelas notas [[3 - Materias/Contabilidade Publica/05 - custos publicos fundamentos e objetos de custo|05]] e [[3 - Materias/Contabilidade Publica/06 - mic sic e informacoes gerenciais de custos|06]]; conferência integral do edital pendente.
- [x] **F06 · Contabilidade societária das estatais**: U04: BP/DRE, depreciação, impairment, provisões, contingências, partes relacionadas. Artigos [[3 - Materias/Contabilidade Publica/07 - provisoes e passivos e ativos contingentes|07]], [[3 - Materias/Contabilidade Publica/08 - depreciacao reducao ao valor recuperavel e ativos|08]] e [[3 - Materias/Contabilidade Publica/09 - demonstracoes societarias das estatais|09]] publicados; cotejo integral do edital pendente.
- [x] **F07 · Governança e prestação de contas das estatais**: U05: conselhos, finalidade pública, carta anual, transparência, sustentabilidade. [[3 - Materias/Contabilidade Publica/10 - governanca transparencia e finalidade publica das estatais|Artigo 10]] publicado e [[3 - Materias/Contabilidade Publica/11 - sustentabilidade economico-financeira das estatais|sustentabilidade econômico-financeira de estatais]] acrescentado para P3.2.7.2. Cotejo normativo integral com o edital ainda pendente.

**C5 concluído editorialmente (04/11/2026):** [[3 - Materias/Contabilidade Publica/09 - demonstracoes societarias das estatais|artigo 09]] e [[3 - Materias/Contabilidade Publica/10 - governanca transparencia e finalidade publica das estatais|artigo 10]] publicados. **F06–F07 atendidas editorialmente**. A [[1 - Planejamento/Contabilidade Publica - Auditoria de cobertura CGU 2026|auditoria de P3.2]] iniciou em 13 substantivos, quatro parciais e uma lacuna; F18 elevou a 14/4/0 e F19 a 15/3/0. A expansão físico-financeira de [[3 - Materias/Contabilidade Publica/05 - custos publicos fundamentos e objetos de custo#Refinamento: comprovação da despesa e teste físico-financeiro|5.1]] elevou a 16/2/0 e o [[3 - Materias/Contabilidade Publica/09 - demonstracoes societarias das estatais#Refinamento: caso societário integrado de depreciação, impairment, provisões e partes relacionadas|caso societário integrado de CPC 27, CPC 01, CPC 25 e CPC 05]] (05/11/2026) elevou a **17 substantivos, um parcial e nenhuma lacuna sem nota**. O [[3 - Materias/Contabilidade Publica/11 - sustentabilidade economico-financeira das estatais|sustentabilidade econômico-financeira de estatais]] (05/11/2026) elevou a **18 subitens com conteúdo substantivo, zero parciais na triagem temática e nenhuma lacuna sem nota**. Resta a **auditoria normativa fina dos 18 subitens**; sem inferir estudo ou validação integral.

**C3 concluído editorialmente (04/11/2026):** publicados [[3 - Materias/Contabilidade Publica/05 - custos publicos fundamentos e objetos de custo|artigo 05]] e [[3 - Materias/Contabilidade Publica/06 - mic sic e informacoes gerenciais de custos|artigo 06]]. F05 encerrada como trabalho editorial, sem estudo nem cobertura integral do edital presumidos.

**Lote C2 publicado (04/11/2026):** F04 atendida por [[3 - Materias/Contabilidade Publica/03 - balanco patrimonial e demonstracao das variacoes patrimoniais|artigo 03 (BP/DVP)]] e [[3 - Materias/Contabilidade Publica/04 - fluxos de caixa notas explicativas e conciliacoes|artigo 04 (DFC, notas e conciliações)]]. O segundo é complemento previsto no plano específico e não cria nova unidade didática. O lote C3 foi publicado posteriormente.

**Lote C1 publicado (04/11/2026):** F01 e F02 cobertos pelo artigo [[3 - Materias/Contabilidade Publica/01 - patrimonio publico e regimes de reconhecimento|01]]; F03 pelo [[3 - Materias/Contabilidade Publica/02 - balanco orcamentario e balanco financeiro|02]]. C1 segue o plano específico de Contabilidade, que articula esses conteúdos em dois artigos canônicos. **Cobertura documental parcial; nenhum estudo ou retenção registrado.** Próxima fase: BP/DVP e, depois, DFC/notas.

## Onda 2: Contratações e Transferências

**Recorte:** CGU P3.4, prioridade B. **Hub:** [[3 - Materias/Contratacoes e Transferencias/contratacoes-e-transferencias|Contratações e Transferências]].

**Reuso obrigatório antes de criar:** Direito Administrativo/08 - licitacoes e contratos; Auditoria Governamental/procedimentos-e-testes-de-auditoria; legislação de transferências a confirmar.

- [x] **F08 · Planejamento da contratação e riscos**: U01: estudo técnico, preço, competição, especificação e direcionamento; não repetir teoria geral da Lei 14.133.
- [x] **F09 · Execução e fiscalização de contratos**: U02: medição, aceite, pagamentos, alterações, reequilíbrio, documentação e responsabilidades.
- [ ] **F10 · Transferências voluntárias, parcerias e prestação de contas**: U03: instrumentos, plano de trabalho, execução, obrigações e fronteiras legais conforme o regime.
- [ ] **F11 · Auditoria de contratações e transferências**: U04–U05: testes, indícios, vínculos, fracionamento, dano, recuperação, recomendações e limites inferenciais.

## Onda 3: Integridade e Responsabilização

**Recorte:** CGU P3.5, prioridade B. **Hub:** [[3 - Materias/Integridade e Responsabilizacao/integridade-e-responsabilizacao|Integridade e Responsabilização]].

**Reuso obrigatório antes de criar:** Direito Administrativo/07 e 09, Ética Pública 03–06, Auditoria Governamental/integração CGU; separar regimes e sujeitos.

- [x] **F12 · Funções da CGU e fluxo de respostas de controle**: U01: auditoria × ouvidoria × corregedoria × transparência, prevenção × correção × sanção.
- [x] **F13 · Tratamento de denúncias e proteção ao denunciante**: U02–U03: identidade, sigilo, pseudonimização, não retaliação, acolhimento × apuração × contraditório.
- [x] **F14 · Programas de integridade públicos e privados**: U04: riscos, liderança, canais, desenho × implementação × efetividade; evitar duplicar Ética Pública.
- [x] **F15 · Admissibilidade, prova e regimes de responsabilidade**: U05: autoria, materialidade, elemento subjetivo, responsabilidade objetiva PJ, defesa e limites de inferência.
- [ ] **F16 · PAD, PAR, leniência e instrumentos consensuais**: U06: competências, requisitos, efeitos, TAC, prescrição e fronteiras entre processos; conferir cada norma.
- [ ] **F17 · Sanção, reparação e avaliação de resultados**: U06–U07: dosimetria, sanção × reparação, monitoramento, recorrência × detecção, eficácia das medidas.

**Lote editorial registrado em 05/11/2026:** publicados os artigos 01 e 02 sobre transferências e convênios do plano T1 de Contratações, mais dois artigos de Integridade correspondentes a F12 e F13. F12 e F13 têm núcleo temático publicado, mas detalhes normativos exigem conferência. Em Contratações, F08 a F11 permanecem abertas: as notas 01–02 iniciam F10, porém não encerram regimes especiais, OSC, prestação de contas e encaminhamentos. A contagem de microfases pendentes anterior é um retrato histórico; as duas microfases F12 e F13 passam a constar como atendidas editorialmente. Nenhum estudo individual é inferido desta publicação.

**Segundo lote editorial em 05/11/2026:** publicados planejamento da contratação e riscos (F08), fiscalização e recebimento (F09), programas de integridade (F14) e admissibilidade e regimes de responsabilidade (F15). As quatro microfases passam a ter artigos próprios, mantendo pendências de calibração e verificação jurídica detalhada. Este marco registra produção, sem presumir estudo, domínio ou cobertura de outras fases.

## Onda 4: Finanças Públicas

**Recorte:** CGU P3.2, prioridade B. **Hub:** [[3 - Materias/Financas Publicas/financas-publicas|Finanças Públicas]].

**Reuso obrigatório antes de criar:** Atualidades/06 - politica fiscal resultado primario e divida publica; Orçamento Público 01 e 11.

- [x] **F18 · Economia do setor público e funções fiscais**: U01: alocação × distribuição × estabilização, bens públicos, externalidades e falhas de mercado. [[3 - Materias/Financas Publicas/01 - funcoes economicas do estado bens publicos e falhas de mercado|Nota 01 de Finanças Públicas]] publicada editorialmente, com monopólio natural e federalismo; **P3.2.1.2 depende da F19**, sem estudo registrado.
- [x] **F19 · Tributação, incidência e equidade**: U01: incidência econômica × legal, progressividade, regressividade e efeitos distributivos; resultado fiscal por link existente. [[3 - Materias/Financas Publicas/02 - tributacao incidencia economica e equidade|Nota 02 de Finanças Públicas]] publicada com elasticidade, equidade, neutralidade, resultados fiscais e NFSP. **Cobertura editorial não equivale a estudo ou validação normativa integral.**

## Onda 5: Evidências, Dados e IA

**Recorte:** CGU P2.4, prioridade C. **Hub:** [[3 - Materias/Evidencias Dados e IA/evidencias-dados-e-ia|Evidências, Dados e IA]].

**Reuso obrigatório antes de criar:** Comunicação/17 - pesquisa; Atualidades/01 - inteligência artificial; Auditoria/evidencias-e-documentacao e dados-analise-e-ia-na-auditoria.

- [ ] **F20 · Qualidade de dados, fontes e triangulação**: U01: origem, validade, rastreabilidade, dado × interpretação × evidência; ampliar nota existente quando mais adequado.
- [ ] **F21 · Indicadores, denominadores e subnotificação**: U02: taxas, proporções, bases de comparação, denúncia × detecção × sanção.
- [ ] **F22 · Inferência causal e erros de interpretação**: U03: associação × causalidade, seleção, falácia ecológica, viés de confirmação, falsos positivos/negativos.
- [ ] **F23 · Coleta de evidências e proteção de participantes**: U04: escuta não indutiva, proteção de fontes, documentação e anonimização; articular com evidências de auditoria.
- [ ] **F24 · IA responsável na decisão e controle público**: U05: apoio à síntese/classificação, alucinações, vieses, revisão humana, contestabilidade e direitos.

## Onda 6: Governança, Riscos e Integridade

**Recorte:** CGU P2.1, prioridade C. **Hub:** [[3 - Materias/Governanca Riscos e Integridade/governanca-riscos-e-integridade|Governança, Riscos e Integridade]].

**Reuso obrigatório antes de criar:** Administração Pública/02 - governanca publica; Auditoria/05 - governanca riscos controles e tres linhas. U01–U02 preferir refinamento, não duplicação.

- [ ] **F25 · Integridade pública e prevenção institucional**: U03: liderança, canais, riscos, proteção, assédio e responsabilização de funções.
- [ ] **F26 · Integridade privada e diligência de terceiros**: U04: integridade em fornecedores/parceiros, controles e evidência de implementação.
- [ ] **F27 · Maturidade, incentivos e efetividade de controles**: U05: monitoramento, baixa ocorrência × baixa detecção, avaliação de programas e efeitos não pretendidos.

## Onda 7: Transparência e Ouvidoria

**Recorte:** CGU P2.2, prioridade C. **Hub:** [[3 - Materias/Transparencia e Ouvidoria/transparencia-e-ouvidoria|Transparência e Ouvidoria]].

**Reuso obrigatório antes de criar:** Administração Pública/03 - transparencia acesso a informacao e protecao de dados; Comunicação/02 e 03; U01, U02 e U05 com reuso/refinamento.

- [ ] **F28 · Ciclo da manifestação de ouvidoria**: U03: acolher × encaminhar × responder × apurar; proteção de identidade, resposta e limites.
- [ ] **F29 · Participação social, escuta e melhoria dos serviços**: U04: conselhos, consultas, canais, escuta, subnotificação, devolutiva e indicadores.

## Onda 8: Estado e Democracia

**Recorte:** CGU P1.1, prioridade C. **Hub:** [[3 - Materias/Estado e Democracia/estado-e-democracia|Estado e Democracia]].

**Reuso obrigatório antes de criar:** Direito Constitucional/01 e 05; Direito Administrativo/11; U04–U05 principalmente por link/refinamento.

- [ ] **F30 · Estado, governo, poder e legitimidade**: U01: Estado × governo × administração, autoridade, interesse público e conflito distributivo.
- [ ] **F31 · Democracia, representação e accountability**: U02: democracia representativa/participativa, separação de poderes e controles recíprocos.
- [ ] **F32 · Federalismo e capacidade estatal**: U03: autonomia, coordenação, burocracia, discricionariedade e implementação de direitos.
- [ ] **F33 · Corrupção, clientelismo, patronagem e captura**: U06: corrupção × falha × conflito de interesses × nepotismo; tipologias e limites.
- [ ] **F34 · Problemas principal-agente e ação coletiva**: U07: informação assimétrica, incentivos, redes, captura institucional e riscos de causalidade simplista.
- [ ] **F35 · Prevenção, detecção e consequências da corrupção**: U08: mecanismos, responsabilização, reparação, trade-offs e efeitos não pretendidos.
- [ ] **F36 · Estado, regulação e modelos de desenvolvimento**: U09: estatais, mercado, financiamento, concorrência e finalidade pública.

## Onda 9: Sociedade Brasileira

**Recorte:** CGU P1.2, prioridade C. **Hub:** [[3 - Materias/Sociedade Brasileira/sociedade-brasileira|Sociedade Brasileira]].

**Reuso obrigatório antes de criar:** Atualidades/05 e 09 (mercado de trabalho/demografia); Comunicação/10 (barreiras de acesso); U03 prioritariamente por reuso.

- [ ] **F37 · Instituições, estratificação e mobilidade social**: U01: estruturas sociais, redes, discriminação, mobilidade × desigualdade.
- [ ] **F38 · Formação social brasileira e cidadania**: U02: escravidão, hierarquias, acesso a direitos e efeitos institucionais.
- [ ] **F39 · Diversidade, interseccionalidade e barreiras de acesso**: U04: raça, gênero, idade, deficiência, povos tradicionais e acesso formal × efetivo.
- [ ] **F40 · Pobreza, desigualdade e desenvolvimento**: U05: indicadores, serviços e proteção social, correlação × causa, pobreza × desigualdade.

## Onda 10: Inglês

**Recorte:** Dataprev Módulo I, FGV; sem artigos associados. **Hub:** [[3 - Materias/Ingles/ingles|Inglês]].

**Reuso obrigatório antes de criar:** Hub atual já ensina conectores, skimming e scanning; extrair/refinar, não reiniciar do zero. Vincular à Dataprev e à Câmara somente no recorte aplicável.

- [ ] **F41 · Leitura instrumental, inferências e tese do texto**: ideia central, intenção comunicativa, informação explícita × inferida, skimming × scanning.
- [ ] **F42 · Conectores e relações lógico-semânticas**: contraste, concessão, causa, consequência, condição e equivalência contextual; extrair do hub.
- [ ] **F43 · Referência pronominal e coesão lexical**: antecedente, substituição, elipse, sinonímia e referenciação em textos longos.
- [ ] **F44 · Tempos verbais, voz passiva e modalização**: valor temporal/aspectual, may/must/should, inferência × obrigação, reescrita.
- [ ] **F45 · Vocabulário em contexto e falsos cognatos**: tecnologia, dados, administração e comunicação; classes e polissemia.
- [ ] **F46 · Paráfrase, equivalência semântica e função da palavra**: construções equivalentes, escopo de negação, conectores, função sintática em uso.

## Onda 11: Cálculo Mental

**Recorte:** Apoio transversal; fora dos blocos específicos CGU. **Hub:** [[3 - Materias/Calculo Mental/calculo-mental|Cálculo Mental]].

**Reuso obrigatório antes de criar:** Hub já tem técnicas, exemplos e heurísticas: primeiro verificar o que deve migrar, manter no hub resumo e links.

- [ ] **F47 · Soma, subtração e multiplicação mental**: extrair e consolidar aproximação, compensação, produtos especiais e prevenção de erro de sinal.
- [ ] **F48 · Porcentagem, proporções e escalas**: decomposição, razão, mudanças percentuais e verificação por estimativa; articular com Lógica/10.
- [ ] **F49 · Estimativas e checagem de plausibilidade**: ordem de grandeza, arredondamento controlado, cálculo aproximado × exato e erros típicos.

## Recortes cobertos sem criar artigos novos

A publicação deve também registrar vínculo de cobertura para as unidades que já tenham teoria canônica suficiente: **Estado e Democracia U04–U05** via Direito Constitucional e Controle; **Governança U01–U02** via Governança Pública e Auditoria; **Transparência U01, U02 e U05** via LAI/LGPD e Comunicação Pública; **Sociedade U03** via Demografia e Mercado de Trabalho; **Finanças U01 (resultado fiscal)** via política fiscal; **Contratações U05** pelos procedimentos e achados de auditoria, sempre avaliando se a cobertura é parcial; **Evidências** deve aproveitar as notas de pesquisa, IA e auditoria. Incluir as referências no catálogo v2 somente após conferir o escopo real.

## Protocolo de retomada

Para executar qualquer fase: ler `AGENTS.md` → este roteiro → hub correspondente → notas de reuso → fonte do edital/legislação → consultar `data/contexto-estudo/<concurso>/<materia>.json` se a mudança se relacionar a conteúdo já estudado. Publicar o pequeno lote, conferir CI e marcar como concluídas **somente** as microfases efetivamente publicadas; registrar desvios e lacunas com precisão. Na aula, usar `CHAT.md` e o contexto/sessão mais recente como fonte do próximo passo, não as caixas deste plano.

**Controle:** 11 ondas e 49 microfases de artigos/refinamentos; **F01–F07 e F18–F19 atendidas editorialmente (11 artigos de Contabilidade Pública, dos quais 10 originais e uma expansão autônoma, e 2 de Finanças Públicas)**, 40 microfases pendentes. A auditoria normativa fina de P3.2 é próxima tarefa de verificação, não nova microfase concluída. Publicação não indica aula, acertos ou retenção. As etapas G00–G04 descrevem a governança, sem contabilizar artigos.
