---
title: "Câmara 2026: Tecnologia da Informação e Dados, auditoria Fase 1"
type: "relatorio-auditoria"
status: "em-curso"
concursoId: "camara-2026"
updated: 2026-11-11
---

# Tecnologia da Informação e Dados: auditoria pedagógica, conceitual e normativa, Fase 1

**Cargo:** Câmara dos Deputados 2026, Cargo 1, Analista Legislativo, Comunicação Social, Divulgação Institucional. **Banca:** Cebraspe; itens C/E. **Regra desta fase:** registrar achados e matriz, sem editar artigos teóricos. Separar erro confirmado por fonte oficial, risco conceitual, hipótese editorial e questão não certificada.

## Recorte do edital e inventário

A nota local [[2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional|Câmara 2026, Divulgação Institucional]] lista Microsoft 365, internet e intranet, e-mail/Teams/Meet, segurança/governança digital, backup, malware, antivírus e firewall, phishing/pharming, IA, prompts, aprendizagem supervisionada/não supervisionada/por reforço, generativa, ética, dados, transformações, visualizações, Power BI/Tableau/Data Studio e storytelling.

A pasta `3 - Materias/Informatica/` contém **30 artigos numerados (01–30)** e o hub `informatica.md`. Há **cinco artigos potencialmente reutilizáveis** em `3 - Materias/Evidencias Dados e IA/`, ainda não cotejados. Na abertura desta frente foram recuperados os seis textos dos artigos **18–23**, e o hub, em leitura dirigida. **6/30 artigos examinados seletivamente; 24/30 pendentes**, além de hub a auditar estruturalmente, compartilhados e cotejo literal integral do PDF oficial. Nenhum artigo está integralmente certificado; 0 questões homologadas.

## Bloco 1: IA, modelos e ética, artigos 18–23

| Nota | Núcleo efetivamente localizado | Diagnóstico provisório |
| --- | --- | --- |
| `18 - inteligencia artificial definicao tipos de sistemas e aplicacoes publicas.md` (CAM-TI-016) | Hierarquia IA/ML/DL; IA simbólica; ANI/AGI/ASI; taxonomia de Hintze; aplicações públicas; EBIA; questões C/E | Base didática ampla; **referência normativa errada** e afirmações absolutas sobre DL, autonomia e regras de decisão |
| `19 - aprendizagem supervisionada e nao supervisionada algoritmos e metricas.md` (CAM-TI-017) | Dados rotulados/não rotulados, classificação/regressão, clustering, métricas | Núcleo mapeado; verificar matrizes de confusão, precisão/recall e distinção treino/teste, sem atestado completo |
| `20 - aprendizagem por reforco e comparacao de modelos de machine learning.md` (CAM-TI-018) | Agente, ambiente, estado, ação, recompensa e comparação de paradigmas | Núcleo mapeado; precisa cotejar exploração/explotação, sinais de recompensa e paradigmas próximos antes de homologar |
| `21 - ia generativa modelos llms difusao usos e limites.md` (CAM-TI-019) | Modelos generativos, LLMs, difusão, limitações e aplicações | Núcleo mapeado; checar taxonomias, generalização, mecanismo e terminologia, sem equiparar geração probabilística a verdade |
| `22 - engenharia de prompts estrutura tecnicas e avaliacao.md` (CAM-TI-020) | Zero/few-shot, técnicas e avaliação, temperatura, Top-k/Top-p | Núcleo mapeado; distinção `Top-k` versus `Top-p` aparece em questão C/E; verificar controle técnico e variações entre provedores |
| `23 - etica em ia vieses discriminacao transparencia e revisao humana.md` (CAM-TI-021) | Tipos de viés, proxies, XAI, HITL/HOTL/HOOTL, LGPD art.20, EBIA, PL 2.338/23 | **Alto risco de confundir princípios éticos, normas vigentes e disposições projetadas em PL.** Cotejo específico registrado abaixo |

### Achados localizados e fontes

**TI-001, confirmado, prioridade alta.** `Informática/18`, parágrafo de abertura em “Núcleo do conceito”, vincula EBIA a “Decreto nº 9.874/2019 e Portaria MCTI nº 4.617/2021”. **A EBIA foi instituída pela Portaria MCTI nº 4.617/2021, alterada pela nº 4.979/2021**, conforme MCTI. Separar referência alheia da instituição normativa da EBIA. Fonte: https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial/ ; repositório normativo https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial-estrategia-repositorio .

**TI-002, confirmado como divergência de formulação normativa, prioridade crítica para estudo.** `Informática/23` §5 afirma, sem qualificação por regime, que decisões automatizadas sobre direitos “exigem” humano e que `human-out-of-the-loop` é “vedado no setor público para decisões restritivas de direitos”; §7 coloca RIPD prévio como “mitigação obrigatória” no caso hipotético de reconhecimento facial; `Informática/18` caso 2 repete proibição categórica. O **texto vigente do art. 20 da LGPD** garante **solicitar revisão** de decisões *unicamente* automatizadas que afetem interesses, além de informação sobre critérios, ressalvados segredos comercial/industrial. **Não contém regra geral exigindo revisor humano**. A EBIA contém compromissos e ações para *criar parâmetros* de intervenção humana em alto risco, o que não equivale a proibição legislativa geral já vigente. Fontes: https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html e https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial-estrategia . **Não concluir que qualquer automação é permitida:** deveres de motivação, devido processo, proteção de dados e regras setoriais continuam pertinentes; exigências específicas precisam de seu próprio fundamento.

**TI-003, alto risco temporal/normativo.** `Informática/23` §6.3 apresenta como “Proibidos” e “Exige avaliação ... prévia” deveres descritos no **PL 2.338/2023**. No recorte de 11/11/2026 o PL estava **em tramitação na Câmara**, após aprovação no Senado; não tratar tipologias do projeto como lei vigente. O artigo marca “em tramitação”, mas a tabela a seguir usa linguagem normativa imperativa sem explicitar que descreve **proposta legislativa**, não obrigação já vigente. Fonte oficial de tramitação: https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262 .

**TI-004, risco conceitual importante.** `Informática/18` §1 afirma que o Deep Learning **elimina a necessidade de pré-processamento manual**. Redes profundas podem aprender representações e reduzir engenharia manual de características, mas isso não elimina limpeza, preparação, escolha e validação dos dados em geral. O item C/E #3 da mesma nota usa “prescindindo da etapa humana de engenharia manual de características”, e recebe CERTO; **revisar a abrangência e a redação antes de homologar o gabarito**, que pode depender de ler “prescindindo” como capacidade relativa versus ausência total de trabalho humano.

**TI-005, risco conceitual e de taxonomia.** `Informática/18` §2 trata “IA Geral ou Forte (AGI)” como equivalentes, e afirma definitivamente que “o único estágio real atual” é ANI. “IA forte”, AGI e consciência artificial não são sinônimos estáveis entre escolas; a existência, avaliação de capacidades e os critérios de AGI exigem definições e datas explícitas. Manter taxonomias como **modelos explicativos e convenções**, não unanimidade técnica.

**TI-006, risco de alegações factuais sobre usos concretos.** `Informática/18` §4 enumera funções do sistema Ulysses (transcrição, agrupamento, classificação de emendas e resumos) e sistemas Victor/Alice/Sofia sem fontes diretas nas passagens. Exigir referência institucional para **cada funcionalidade atribuída**, preservando diferença entre versão, protótipo e produção. Caso 1 inventa “mais de 40 horas diárias” sem fonte: rotular como cenário hipotético, não dado medido.

**TI-007, risco semântico/jurídico.** `Informática/18` caso 3 qualifica verificação de quórum por regras determinísticas como “IA Simbólica” obrigatória. Uma instrução simples `if` é programação determinística comum e **não é automaticamente IA simbólica**. Escolher mecanismo determinístico é justificável para quóruns regimentais, mas a etiqueta “IA” seria indevida se não houver mecanismo de representação/inferência. O mesmo caso diz “binária e imutável”, embora regras normativas possam mudar.

**TI-008, prioridade editorial.** `Informática/23` §§4–5 apresenta trade-off entre precisão e interpretabilidade como tendência universal, com “acurácia espetacular” para deep learning, mas há modelos interpretáveis competitivos e técnicas XAI com limitações. Diferenciar exemplo ilustrativo de regra geral, e “explicação local” de identificação causal. No mesmo artigo, “taxas de falsos positivos até cem vezes maiores” precisa estudo empírico com população, métrica e contexto antes de ser afirmado como fato geral.

**TI-009, ressalva de avaliação.** `Informática/22` questão #6 descreve corretamente em termos introdutórios Top-k como conjunto de tamanho fixo e Top-p como massa probabilística cumulativa; porém “palavras” deveria ser **tokens** e a disponibilidade/ordem de filtros depende de implementação. Não há inversão demonstrada do gabarito ERRADO. Para todas as notas 18–23, distinguir questões **inéditas de estilo Cebraspe** das questões realmente aplicadas pela banca; ainda não auditado corpus histórico nem cada alternativa/gabarito.

### Matriz parcial do programa

| Eixo no resumo local do edital | Artigos | Estado |
| --- | --- | --- |
| IA básica e aplicações | 18 | Parcial; TI-001 e TI-004–007 |
| Supervisionada/não supervisionada | 19 | Leitura dirigida; métricas não certificadas |
| Aprendizagem por reforço | 20 | Leitura dirigida |
| IA generativa | 21 | Leitura dirigida |
| Engenharia de prompts | 22 | Leitura dirigida; TI-009 |
| Ética e discriminação | 23 | Parcial; TI-002/003/008 |
| Dados e visualizações | 24–30 | **Pendente** |
| Office/redes/segurança/governança | 01–17 | **Pendente** |

**Próximo bloco:** notas 24, 25, 26 e 27 (distinção dado/informação/indicador, transformação e escolha dos gráficos); depois 28–30 (box plot, BI e storytelling). Cotejar o conteúdo literal do edital oficial e cinco notas da trilha `Evidencias Dados e IA` na etapa de cobertura transversal. **Esta etapa só escreveu relatório e índice. Nenhum artigo, hub ou dado privado foi modificado.**


## Bloco 2: conceitos, transformação e visualização de dados, artigos 24–27 (11/11/2026)

**Fontes internas recuperadas e lidas em sua íntegra:** `3 - Materias/Informatica/24 - dado informacao variavel atributo indicador e metrica.md` (articleId `art-217dafb9048089a8`); `25 - transformacao de dados limpeza agregacao e qualidade.md` (`art-03945be9cb42c4bd`); `26 - visualizacao de dados selecao de grafico pela pergunta analitica.md` (`art-a2e4949761ab5a6f`); `27 - histograma barras e linhas distincao dos eixos e aplicacoes.md` (`art-719dd4ca3e84b65a`). **24 itens inéditos C/E, seis por artigo, com enunciado, gabarito e comentário lidos e cotejados conceitualmente em caráter seletivo.** Não são questões oficiais da banca e **nenhuma foi homologada por cotejo integral de fontes**.

**Inventário cumulativo:** **10/30 artigos numerados examinados seletivamente** (18–27); **20/30 ainda sem exame individual** (01–17 e 28–30), mais hub, cinco artigos de Evidências, Dados e IA e demais vínculos reutilizados. Não houve alteração dos artigos.

### Matriz de leitura individual

| Artigo | Conteúdo examinado | Diagnóstico provisório |
| --- | --- | --- |
| 24, DIKW, variável, métrica, indicador | Modelo DIKW; classificações discretas, contínuas, nominal e ordinal; definição de atributo; construção de indicadores; seis itens C/E | Estrutura útil, mas as fronteiras entre métrica e indicador estão absolutizadas; caso de acessos mistura períodos; exemplos legislativos exigem cautela |
| 25, transformação de dados | ETL/ELT; nulos MCAR/MAR/MNAR; média/mediana, exclusão e imputação; granularidade; qualidade; seis itens C/E | Núcleo útil; percentual 70–80% sem fonte/corpus; limpeza contém regras excessivas; `COUNT()` no SQL exige distinção por expressão e NULL; casos hipotéticos precisam de tratamento explícito |
| 26, escolha de visualização | Comparação, tendência, composição, relação; data-ink ratio, chartjunk, lie factor; seleção de gráficos; seis itens C/E | Bom encadeamento de perguntas; etiqueta da matriz de Abela e casos de dispersão imprecisos; gráfico não demonstra causalidade; escala zero exige contextualização |
| 27, histograma, barras e linhas | Tipos de eixos, amplitudes e frequências, assimetria, barras horizontais e eixos truncados; seis itens C/E | Boa explicação da densidade em classes desiguais na Q2; quadro teórico §2 contradiz a ressalva e exige qualificação da altura/área; várias regras visuais são apresentadas como universais |

### Achados localizados e verificabilidade

**TI-010, erro interno de consistência, prioridade alta, `Informática/24` §6 caso 1.** No mesmo exemplo, o dado inicial são **4.500.000 acessos únicos em outubro**, enquanto a informação declara **4,5 milhões durante a semana da votação** e **crescimento de 40% sobre o mês anterior**. São períodos e unidades de observação incompatíveis sem nova base demonstrada. Recomendar cenário inteiramente hipotético com **mesmo período**, definição de acesso único (usuários, sessões ou visualizações) e valores anteriores explícitos. Não interpretar como estatísticas reais da Câmara.

**TI-011, risco conceitual importante, `Informática/24` §§4–5 e item 4.** O texto define indicador como **necessariamente vinculado a meta e polaridade** e a métrica como puramente operacional. Em muitos frameworks indicadores descritivos podem existir sem meta formal; meta e direção desejável são atributos de gestão relevantes, não condições ontológicas universais. A Q4 pergunta sobre indicador **de desempenho** e pode ser didaticamente defensável, mas a justificativa “nenhum indicador prescinde de polaridade” deve restringir escopo e distinguir métrica, indicador, KPI e meta. O caso 2 presume “padrão normativo regimental de 30 dias” sem dispositivo citado; verificar RICD antes de usar como fato jurídico.

**TI-012, risco de estatística sem lastro, `Informática/25` §1.** “Transformação consome de 70% a 80% do esforço de **qualquer** projeto de dados” não está demonstrado para todos os projetos e não indica amostra, pesquisa ou unidade de medida. Reescrever futuramente como observação contextual de estudos identificados, com fonte e metodologia, ou excluir a precisão numérica.

**TI-013, risco operacional, `Informática/25` §§3 e 6, mais item 1.** “Média apenas para distribuições estritamente simétricas”, “mediana preferida para toda assimetria” e exclusão de nulos com “menos de 1%” são heurísticas incompletas; a decisão depende do mecanismo de ausência, do estimando, do uso dos dados e do viés. **Item 1** (preferência por mediana em renda assimétrica) é plausível como exemplo introdutório, mas **não afirma que imputação simples seja sempre estatisticamente adequada**. Separar identificação de `missingness`, decisão de imputação, validação e análise de sensibilidade.

**TI-014, precisão técnica, `Informática/25` §4.1.** A descrição de `COUNT()` como “contagem de ocorrências de registros” precisa distinguir `COUNT(*)` (linhas), `COUNT(coluna)` (valores não nulos) e `COUNT(DISTINCT coluna)` (valores distintos não nulos), evitando transferência errada para questões de SQL. O quadro de granularidade opõe “nível alto” a “baixo”; a terminologia alta/fina e baixa/grossa varia por contexto e deve ficar ancorada na definição operacional de número de detalhes.

**TI-015, risco técnico e gráfico, `Informática/26` §5 (escolaridade `×` comparecimento) e item 5.** A matriz apresenta “escolaridade dos eleitores versus comparecimento” como **duas variáveis numéricas contínuas**, embora escolaridade, em sua forma usual, seja ordinal/categórica, e comparecimento possa ser binário ou taxa agregada. A justificativa do item 5 fala de **“investigar relações causais aparentes”** com scatterplot: dispersão revela padrões de associação, **não estabelece causalidade**. O item C/E #5 pode permanecer CERTO se lido apenas como associação/correlação/agrupamento, mas o comentário exige correção.

**TI-016, inconsistência metodológica entre `Informática/27` §2 e Q2, prioridade alta.** A tabela do §2 afirma “**Área das barras proporcional à frequência**: Área = Base × Altura”, enquanto a apresentação do eixo vertical enuncia “frequência (absoluta, relativa ou densidade)”. **Para classes com larguras desiguais, a área proporcional à frequência exige altura de densidade de frequência, e não frequência bruta.** A Q2 explica isso corretamente (gabarito ERRADO para altura igual à frequência), mas o quadro precisa distinguir explicitamente classes iguais/desiguais. Manter item #2 provisoriamente correto; a falha é da ligação entre explicação e regra.

**TI-017, ressalva de precisão, `Informática/27` §3.2 e item 6.** As relações `Moda < Mediana < Média` em assimetria positiva e o inverso na negativa são heurísticas frequentemente ilustrativas em distribuições unimodais, **não teoremas universais de toda distribuição assimétrica**. O item #6 usa “tipicamente” e o gabarito ERRADO está consistente com o caso padrão, mas o comentário deveria explicitar hipótese contextual, particularmente para casos multimodais.

**TI-018, ressalva de design, `Informática/27` §§4–5 e `Informática/26` §§3–5.** “Ordenação decrescente obrigatória”, “barras iniciando **obrigatoriamente** no zero” e “gráfico de linhas pressupõe eixo temporal contínuo” são boas regras de partida, mas a escolha de visualização também depende de finalidade, codificação, escalas e exceções justificadas. **Não inverter itens #4 ou #5 do artigo 27** por essa ressalva: o contexto é comparação usual de magnitudes por barras versus posições em linhas. O artigo 26 também sugere `Lie Factor` entre 0,95 e 1,05 como fronteira universal; conferir origem específica e condições de aplicação antes de ensinar como limiar normativo rígido.

**TI-019, rastreabilidade bibliográfica, artigos 24–27.** As quatro notas trazem obras acadêmicas e menções a manuais da Câmara/TCU, mas algumas instituições, títulos, anos e atribuições não possuem links ou identificadores verificáveis. **Referências citadas pelos artigos não equivalem a verificação de suas afirmações**. Verificar existência e edição dos manuais institucionais; não tratar exemplos numéricos criados pelo material como dados publicados de órgãos reais.

### Matriz parcial de cobertura atualizada

| Eixo do resumo local do edital | Artigos inspecionados | Estado |
| --- | --- | --- |
| Conceitos de dados, informação, variáveis, métricas e indicadores | 24 | Parcial, TI-010/011 |
| Transformação e qualidade de dados | 25 | Parcial, TI-012/013/014 |
| Escolha de gráficos e integridade visual | 26 | Parcial, TI-015/018 |
| Histograma, barras, linhas, escalas e frequências | 27 | Parcial, TI-016/017/018 |
| Box plot e dispersão avançada | 28 | Pendente |
| Power BI, Tableau, Data Studio | 29 | Pendente |
| Storytelling | 30 | Pendente |

### Próximos passos restritos à Fase 1

Examinar individualmente **28, 29 e 30**, confrontando boxplot, ferramentas BI, granularidade, DAX, storytelling e risco de inferir causalidade de visualização; depois fazer leitura do hub e cruzamento com **`Evidencias Dados e IA/01–05`**; só então prosseguir para Office, redes, segurança e governança. Antes de homologação, cotejar fontes normativas e estatísticas externas e o **PDF oficial integral do edital** (o resumo local não substitui o documento legal). **Teoria, hub, artigos e dados pessoais preservados.**


## Bloco 3: dispersão, box plot, ferramentas BI e storytelling, artigos 28–30 (11/11/2026)

**Artigos recuperados integralmente e examinados com seus exemplos e seis itens C/E cada:**
- `3 - Materias/Informatica/28 - dispersao e box plot relacoes distribuicao e resumo estatistico.md`, articleId `art-e3831c8dec419d79`;
- `3 - Materias/Informatica/29 - power bi tableau e data studio comparativo e funcoes.md`, articleId `art-f137aeacb1988047`;
- `3 - Materias/Informatica/30 - storytelling com dados estrutura narrativa contexto e persuasao.md` (frontmatter preservado).

**Acumulado da Fase 1:** **13/30 artigos numerados examinados seletivamente (18–30), 17 ainda pendentes (01–17), hub `informatica.md` examinado somente para organização, e cinco notas de `Evidencias Dados e IA` identificadas sem cotejo individual.** Foram lidos **18 itens didáticos C/E inéditos** neste bloco, sem equipará-los a provas oficiais ou homologá-los integralmente. **Uma inversão de gabarito confirmada** por documentação primária: TI-020. Nenhuma nota teórica alterada.

### Avaliação individual e diagnóstico

| Artigo | Avaliação de cobertura e questões | Risco/intervenção futura |
| --- | --- | --- |
| 28, dispersão e box plot | Cobre correlação linear vs. não linear, causalidade, quartis, IQR, hastes de 1,5 × IQR e boxplots comparativos. Seis itens C/E examinados; gabaritos centrais plausíveis, sem inversão demonstrada. | Resumo “cinco números” deve distinguir mínimo/máximo da amostra do alcance das hastes no box plot modificado de Tukey; correlação de Pearson não mede toda associação curvilínea; exemplos de auditoria devem aparecer como hipóteses, não dados observados. |
| 29, Power BI, Tableau e Looker Studio | Modelo estrela, medidas/colunas calculadas, DAX, VizQL, expressões LOD, serviços e fontes. Seis itens C/E examinados. **Item 3 com gabarito CERTO incorreto (TI-020)**. | Corrigir o julgamento para ERRADO e sua fundamentação; explicitar exceções/limites em DAX, filtros FIXED, Tableau e classificação de chaves. Cotejar produtos e versões nas fontes oficiais. |
| 30, storytelling com dados | Exploração vs. explanação, audiência, mensagem, decluttering, pré-atenção, Gestalt, narrativa, integridade, seis C/E. Os núcleos de gabarito são defensáveis em leitura dirigida. | Remover alegações empíricas sobre atividades da Câmara sem fonte, separar modelos de comunicação e obrigações legais, evitar transformar heurística de design em regra absoluta. |

### Achados com localizadores

**TI-020, ERRO DE GABARITO CONFIRMADO, prioridade máxima, `Informática/29` §3.3 e §8 item 3.** O artigo afirma que **`CALCULATE` é a única função em DAX que modifica o contexto de filtro**, inclusive com item C/E que diz “a única expressão habilitada” e marca **CERTO**. A documentação primária da Microsoft descreve `CALCULATE` para expressão escalar e **`CALCULATETABLE` para expressão tabular**, ambas avaliadas em contexto de filtro modificado. Logo, a exclusividade enunciada é falsa: **gabarito recomendado ERRADO**. Fontes oficiais: https://learn.microsoft.com/pt-br/dax/calculate-function-dax e https://learn.microsoft.com/pt-br/dax/calculatetable-function-dax . Revisar também formulação “única capaz de transitar” para distinguir contexto de linha, medidas e função avaliada. Manter o enunciado no histórico até reparo planejado.

**TI-021, IMPRECISÃO TÉCNICA CONFIRMADA, prioridade alta, `Informática/29` §4.1.** O texto diz que `FIXED` calcula ignorando “os filtros da tela”. A Tableau documenta que `FIXED` ignora filtros comuns de dimensão da visualização, **mas considera filtros de contexto, da fonte de dados e de extração**. A descrição atual, sem ressalva, gera falso absoluto. Fontes: https://help.tableau.com/current/pro/desktop/pt-br/calculations_calculatedfields_lod.htm e https://help.tableau.com/current/pro/desktop/pt-br/calculations_calculatedfields_lod_filters.htm . Nenhum item do artigo 29 pergunta diretamente sobre filtros FIXED, portanto não inferir nova inversão de gabarito.

**TI-022, PRECISÃO DE MODELO, `Informática/29` §2 e diagrama estrela.** `ID_Despesa` aparece como “chave primária degenerada”, misturando conceitos: **dimensão degenerada** é atributo de dimensão mantido diretamente na tabela fato, sem tabela de dimensão correspondente; sua eventual utilização como identificador único não equivale, por si só, a uma espécie denominada “chave primária degenerada”. Também é exagerada a afirmação de que qualquer solução BI exige previamente modelo relacional analítico robusto, pois existem abordagens de fonte plana, conexões diretas e modelos sem estrela; a arquitetura estrela é recomendação importante, não condição universal. Conferência com Kimball e Microsoft Learn pendente.

**TI-023, RISCO ESTATÍSTICO, `Informática/28` §3.** “Resumo dos cinco números” refere-se convencionalmente a **mínimo, Q1, mediana, Q3, máximo**; a apresentação do boxplot de Tukey com bigodes até o menor/maior ponto dentro dos limites de 1,5 IQR difere do mínimo/máximo amostrais quando há outliers. Separar “cinco números” e “bigodes do boxplot modificado”, cujas implementações também variam. A questão #4, que marca **ERRADO** para bigode terminando no limite teórico exato, está coerente com a variante ensinada. É erro de fronteira didática, não inversão de gabarito.

**TI-024, RISCO DE ABSOLUTIZAÇÃO DE HEURÍSTICA, `Informática/28` §2.1.** Pearson `r` expressa intensidade e sinal da associação **linear**, não “força da associação” em geral; o próprio item #1 demonstra relação não linear com `r=0`. Melhorar a ligação entre texto e questão, explicando padrões em U e possível confusão com independência estatística. No §4, comprimento de bigodes/posição da mediana são sinais exploratórios de assimetria, não prova universal de forma populacional.

**TI-025, RISCO DE DADO INSTITUCIONAL INVENTADO, `Informática/30` §6 e §8 caso 3.** O artigo apresenta metas e resultados da Câmara (“reduzir tempo em 20%”, “subiu 35%”, “potencial reduzir 28 dias”, “CCJC/CFT concentram mais de 45%”) dentro de narração exemplificativa, mas sem marcar explicitamente cada número como **hipotético** ou fornecer pesquisa/base. Esse material não deve ser citado como estatística real ou evidência de desempenho parlamentar. Verificar dados se mantidos como fatos; caso contrário, assinalar cenários fictícios e remover precisão artificial.

**TI-026, RISCO DE DISTINÇÃO ENTRE MÉTODO E REGRA JURÍDICA, `Informática/30` §7.** O trecho sugere que qualquer truncamento de eixo ou falha de visualização constitui automaticamente “infração direta” ao art. 37 da Constituição. O dever de publicidade e moralidade é pertinente, mas a tipificação de infração jurídica concreta requer conduta, contexto, norma incidente e outros elementos. Separar **ética de design** da conclusão jurídica, mantendo crítica à representação enganosa.

**TI-027, RISCO EDITORIAL, `Informática/30` §§4–6.** “Carga extrínseca reduzida a zero”, “menos de 200 ms” como tempo universal e “três atos fundamentais” como única arquitetura são formulações rígidas de modelos cognitivos e narrativos. Reapresentar como heurísticas e resultados sob condições específicas; o gabarito do item #3 (pré-atenção) pode permanecer coerente com a noção geral, sem certificar limiar de 200 ms para todo estímulo.

### Cobertura e fila

Com os artigos 18–30 recuperados e inspecionados, o **segmento IA + dados** do inventário local está percorrido em leitura dirigida (13/13), **sem certificação integral de qualidade**, fontes ou cobertura literal do edital. Restam 17 artigos numerados de Informática (01–17), cinco notas compartilhadas em Evidências, Dados e IA, revisão estrutural do hub e cotejo do edital oficial integral. **Próxima frente prioritária:** auditoria transversal dos cinco textos compartilhados, depois 03–11 (Microsoft 365, Internet, e-mail), 12–17 (segurança e governança), e 01–02 conforme delimitação do edital. Manter TI-020 como reparo crítico antes de estudo com questão C/E e assegurar rastreabilidade da fonte Microsoft.

**Mudanças nesta rodada:** somente este relatório e o índice de estado. Artigos teóricos, questões originais, hubs e dados privados intactos.


## Bloco 4: cotejo transversal com Evidências, Dados e IA (11/11/2026)

**Cinco notas recuperadas integralmente, sem modificação:**
- `3 - Materias/Evidencias Dados e IA/01 - perguntas fontes e qualidade da evidencia.md` (articleId `art-1f82bd75e4c24a96`);
- `02 - indicadores denominadores e subnotificacao.md` (`art-76af310de8594bc2`);
- `03 - inferencias falacias e falsos positivos.md` (`art-4cbf9823a7d145e0`);
- `04 - escuta rastreabilidade e protecao de fontes.md` (`art-b7e4092af5c348d1`);
- `05 - ia responsavel e validacao de decisoes publicas.md` (`art-5d6b81c3e0a942f7`).

**Escopo e contagem:** 13/30 artigos da pasta `Informatica` inspecionados seletivamente (18–30), **5/5 notas compartilhadas lidas e cotejadas seletivamente**, 17 artigos numerados `Informatica/01–17` ainda pendentes, hub sem auditoria completa. **Onze itens C/E inéditos das cinco notas compartilhadas (2+2+2+2+3) lidos com gabaritos e comentários**, sem certificação externa integral, sem gabarito invertido demonstrado neste lote. Essas notas vinculam explicitamente seu conteúdo ao **edital CGU 2026**, logo sua pertinência para a Câmara depende de nexo real com o programa de Tecnologia da Informação e Dados e Comunicação, não da origem em outra prova. Nenhum artigo teórico alterado.

### Matriz de aproveitamento transversal

| Nota compartilhada | Vínculo comprovado no conteúdo local | Aproveitamento para Câmara |
| --- | --- | --- |
| `Evidencias Dados e IA/01` | Dado, informação, evidência, fonte, qualidade, triangulação, perguntas de análise; faz diferença entre correlação e evidência causal | **Complementar** `Informatica/24–25` em linhagem e qualidade de dados; questões específicas de prova de auditoria CGU não devem compor cobertura automática Câmara |
| `02` | Denominador, taxa/razão, período, subnotificação, viés de detecção e seleção; exemplo de 60/12.000 e 45/3.000 | **Alta utilidade** para `Informatica/24–26` na leitura correta de indicadores, comparabilidade e estatísticas de painéis |
| `03` | Correlação/causalidade, confundimento, seleção, falácia ecológica, falso positivo/negativo, sensibilidade, especificidade e VPP | **Alta utilidade** para `Informatica/19,23,26,28`; complementa TI-015 e TI-024, separando associação de causalidade |
| `04` | Entrevista de auditoria, pesquisa e ouvidoria; proteção e rastreabilidade; pseudonimização versus anonimização | **Transferência limitada** para ética de IA, privacidade, comunicação institucional e pesquisa; regime específico de denúncias/CEP-CONEP não se incorpora automaticamente ao edital TI |
| `05` | Escolha entre IA e regra simples, GuIA 2026 em sete etapas, supervisão efetiva, revisão jurídica dependente do regime, RAG ≠ validação | **Complemento prioritário** `Informatica/18,21–23`; permite separar orientação de governança de obrigação legal, mitigando TI-002/003/007/008 |

### Achados do cotejo

**TI-028, contradição normativa/editorial transversal, prioridade alta.** `Evidencias Dados e IA/05` afirma expressamente que o **GuIA é uma referência orientadora**, sem converter automaticamente cada etapa em obrigação legal, e que **dever concreto de revisão/explicação depende da atividade e do regime jurídico**. `Informatica/18` caso 2 e `23` §§5–7 afirmam obrigação universal de `human-in-the-loop` e proibição geral de automação decisória em casos de direitos. É **incompatibilidade de formulações no acervo**, não uma prova adicional de que todo caso de automação seja lícito ou ilícito. Vincular ao TI-002 e conservar a distinção LGPD art.20 / recomendações GuIA / normas específicas. O texto compartilhado é **fonte interna didática**, a confirmar por normas oficiais na Fase 2.

**TI-029, lacuna de competência analítica transversal.** `Evidencias Dados e IA/01–03` incorporam **definição operacional de indicador, população, período, denominador e processo de seleção**; `Informatica/24` usa no caso 1 registros de “acessos únicos” e crescimento sem baseline, e `26` traz exemplo de correlação com natureza de variáveis mal especificada. A sequência conceitual mais segura é: **pergunta → medida/denominador → qualidade/transformação → gráfico → inferência com limites**. As notas externas à trilha não devem ser copiadas como novas unidades sem mapear exigências literais do edital.

**TI-030, correção quantitativa e aviso de taxas-base.** `Evidencias Dados e IA/03` fornece exemplo hipotético: 10.000 contratos; prevalência 1% = 100 casos; sensibilidade 90% = 90 VP e 10 FN; especificidade 95% sobre 9.900 negativos = 9.405 VN e **495 FP**; **VPP = 90/(90+495) = 15,3846%**. **A aritmética interna é coerente.** O exemplo ilustra por que “95% de especificidade” **não** implica “95% dos alertas estão corretos”, conteúdo diretamente útil para `Informatica/19` (métricas de ML) e `23` (vieses). Não apresentar a taxa como dado real da Câmara.

**TI-031, risco de base normativa externa transposta.** `Evidencias Dados e IA/04` diferencia expressamente **auditoria, pesquisa com pessoas e denúncia**. Regimes de CEP/CONEP, Decreto 10.153/2019 e proteção do denunciante não podem ser universalizados a toda entrevista, ação de comunicação ou processo de IA na Câmara. Aproveitar conceitos de **rastreabilidade, acesso mínimo e reidentificação por metadados**; deixar remissões legais sob hipótese de aplicação concreta. A nota em si sinaliza corretamente esses limites.

**TI-032, diferença entre indicador e inferência causal.** `Evidencias Dados e IA/02` mostra que a seleção de 100 contratos **por risco** entre 10.000 e detecção de problema em 25 permite afirmar **25% somente entre selecionados**, não na população. `Informatica/24–28` privilegiam indicadores, visualização e regras gráficas, mas não desenvolvem suficientemente **amostragem, inferência e viés de seleção**. Recomendar adicionar exemplos mínimos de denominadores e viés **quando a cobertura for efetivamente exigida pelo edital**, preservando limites da prova.

**TI-033, melhoria de arquitetura e fonte.** As cinco notas trazem referências CGU para cobertura de seu programa e usam exemplos de auditoria, mas os cinco caminhos fazem parte de trilha própria de outro certame; há risco de redundância e ampliação desnecessária da matéria Câmara. Sugerir **links seletivos de aprofundamento** entre `Informatica/19,23–28` e `Evidencias Dados e IA/01–05` (principalmente 02, 03, 05), com aviso do contexto CGU, **sem fundir artigos nem duplicar ID**. O conteúdo 04 deve ficar como referência transversal, não unidade obrigatória de TI.

### Mapa de continuidade

**Estado agora:** segmento IA/dados de Informática **13/13 lido seletivamente**, notas compartilhadas **5/5 lidas seletivamente**, base Office/redes/segurança/governança **01–17 pendente**, **zero certificações integrais**. O erro confirmado **TI-020 (DAX `CALCULATE` / `CALCULATETABLE`)** permanece prioridade de reparo na futura Fase 2; o cotejo transversal não o alterou.

**Próxima frente:** examinar `Informatica/03–07` (arquivos/OneDrive e Word/Excel/PowerPoint), depois `08–11` (rede, navegação, e-mail, Teams/Meet); `12–17` (segurança e governança); `01–02` (legislação conforme edital). Auditoria do hub, links e cotejo de PDF oficial integral continuam pendentes. **Nenhum artigo, gabarito, hub ou dado privado foi modificado; somente este relatório e índice.**


## Bloco 5: arquivos, Word, Excel, PowerPoint e OneDrive, artigos 03–07 (11/11/2026)

**Cinco artigos recuperados e examinados integralmente em leitura dirigida**, inclusive **30 itens C/E inéditos, seis por artigo**, enunciados, gabaritos e comentários:
- `Informatica/03 - arquivo pasta nuvem e sincronizacao conceitos e operacoes.md` (articleId `art-74bf9176e700b4c8`);
- `Informatica/04 - word 365 estrutura edicao formatacao e controle de alteracoes.md` (articleId `art-005ae25143946d4e`);
- `Informatica/05 - excel 365 celulas referencias funcoes e tabelas dinamicas.md` (articleId `art-484ca8ef752c3d9a`);
- `Informatica/06 - powerpoint 365 organizacao slides mestre animacoes e apresentacao.md` (articleId `art-c870ee089d89cfaa`);
- `Informatica/07 - onedrive sincronizacao compartilhamento e permissoes.md` (articleId `art-e4d63009042ff1a1`).

**Acumulado:** **18/30 artigos numerados de Informática examinados seletivamente** (03–07 e 18–30); **12 pendentes** (01–02 e 08–17), hub com leitura estrutural, cinco notas de Evidências/Dados/IA já examinadas seletivamente. **Zero artigos certificados integralmente.** Nenhum artigo ou questão original foi modificado.

### Avaliação individual

| Arquivo | Cobertura e itens | Diagnóstico |
| --- | --- | --- |
| 03, arquivos/sincronização | Arquivo, diretório, nomes reservados Windows, arrastar/copiar/mover, OneDrive sob demanda, sincronização x backup e seis C/E | Os núcleos operacionais de gabaritos 1–6 são plausíveis; linguagem confunde arquivo lógico com espaço físico contíguo, estados de sincronização com garantias e lixeira com exclusão imediata |
| 04, Word | Formatação de caractere/parágrafo/seção, quebras, sumário, revisão, atalhos, seis C/E | Regra de separação por seções útil; inconsistência em atalhos e falha de revisão `Crado` no item #4; procedimentos de revisão não equivalem a expurgo integral de metadados |
| 05, Excel | Referências e deslocamento, fórmulas, funções, Tabelas Dinâmicas e seis C/E | **Atualização automática descrita incorretamente como impossível** no Microsoft 365 atual; item #6 e comentário dependem de revisão por versão, não de inversão automática sem identificar ambiente da prova |
| 06, PowerPoint | Modos, mestre, layout, animação/transição, atalhos e formatos; seis C/E | Base operacional majoritariamente coerente; afirma herança absoluta do mestre em todos os slides sem distinguir múltiplos mestres e personalizações dos layouts; diagrama Mermaid merece validação |
| 07, OneDrive | Público de link, permissões, AutoSave, versões, lixeira corporativa, seis C/E | Distinção de links é útil; há simplificações em expiração, senha, bloqueio de download e recuperação; evitar garantia de segurança absoluta a partir de configurações de interface |

### Achados e fontes primárias

**TI-034, ALTA PRIORIDADE, REGRA DESATUALIZADA/ITEM C/E COM NECESSIDADE DE REVISÃO, `Informatica/05` §6 caso 4, §7 item #6.** O material afirma categoricamente que Tabela Dinâmica **“não recalcula automaticamente as edições feitas na base”** e considera ERRADO o item segundo o qual a atualização acontece automaticamente depois de alteração. A **Microsoft Support informa expressamente que versões recentes do Excel permitem atualização automática de Tabelas Dinâmicas quando a fonte é uma pasta de trabalho local; novas Tabelas Dinâmicas locais têm Auto Refresh ativado por padrão**, sujeito a versão/configuração/fonte. Portanto, a fundamentação universal está **refutada**. O item #6 usa linguagem universal de atualização “instantânea assim que qualquer dado numérico ... é alterado”; a resposta pode exigir distinguir disponibilidade e configuração da atualização, latência e tipo de fonte. **Não homologar troca simples para CERTO sem fixar versão, origem, opção Auto Refresh e redação precisa.** Fonte oficial: https://support.microsoft.com/pt-br/excel/refresh-pivottable-data . Retirar “não atualiza” como regra absoluta.

**TI-035, ERRO OPERACIONAL DE ATALHO, `Informatica/04` §8, prioridade alta.** Tabela diz `Ctrl + G` para **alinhar à direita**. A documentação oficial do **Word para Windows** em português indica **`Ctrl + R` para alinhamento à direita**, com variações em alguns atalhos localizados; a própria página contém trechos discrepantes para centralizar e outras ações, de modo que a versão/idioma deve ser fixada em teste antes de transformar atalhos em gabaritos inequívocos. Para **alinhar à direita**, a documentação atual é consistente em `Ctrl + R`. Fonte https://support.microsoft.com/pt-br/accessibility/word/keyboard-shortcuts-in-word e https://support.microsoft.com/pt-br/word/adjust-indents-and-spacing . **Item #1** sobre formatação de parágrafo não usa o atalho à direita, portanto não requer inversão.

**TI-036, QUALIFICAÇÃO CONCEITUAL, `Informatica/03` §1 e §5.** Define arquivo como unidade “lógica e contígua” de dados; arquivos podem ser **fragmentados fisicamente**, e contiguidade não integra a definição de arquivo lógico. A frase “imediatamente” sobre propagação de exclusões ignora offline, filas de sincronização, erro, retenção/lixeira e políticas; “backup mantém cópias intocadas e imutáveis” descreve **uma estratégia desejável**, não requisito de todo backup. Gabaritos 3 e 4 mantêm distinção básica correta entre sincronização e backup, mas texto deve evitar absolutos.

**TI-037, VERSIONAMENTO E SEGURANÇA, `Informatica/07` §§2,4–6, itens #3 e #5.** O artigo trata opções de **senha, expiração e bloqueio de download** como se sempre aparecessem para qualquer link/pasta, independentemente do tipo, política, licença e escopo. É necessário diferenciar recursos de link `Anyone`, `Specific people`, permissões de exibição e características de arquivos e pastas. Sobre lixeira, **93 dias** é o total documentado para SharePoint/Microsoft 365, **mas recuperação não é garantida** se exclusão permanente pelo administrador ou outras condições anteciparem indisponibilidade. O item #3, que diz **“ainda podem ser recuperados ... respeitado período”**, é defensável como possibilidade; comentários devem evitar certeza absoluta. Fontes: https://support.microsoft.com/pt-br/sharepoint/admin/restore-deleted-items-from-the-site-collection-recycle-bin e https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive . O **item #5** merece revisão específica de escopo: pede bloqueio de download em **link de pasta**; não concluir CERTO sem validar suporte à opção no tipo de objeto, licença e interface atual.

**TI-038, GABARITO COM RESSALVA DE AMBIENTE, `Informatica/06` §§2,6 e item #1.** O slide mestre superior aplica formatação aos layouts **ligados àquele mestre**; não se pode dizer sem condição que afeta **todos** os slides quando o arquivo possui múltiplos mestres, layouts personalizados ou controles de herança. O item #1 delimita “slides ... que compartilham aquela estrutura de layout”, e portanto **gabarito CERTO permanece plausível**. Recomendar acrescentar condição na regra geral, não inverter.

**TI-039, FALHAS EDITORIAIS DE CONFIABILIDADE, `Informatica/04` §7 item #4 e `Informatica/06` §3.** `Word/04` apresenta opção C/E “**Crado**” no lugar de **Certo**; erro mecânico localizado, sem impacto no gabarito ERRADO. No `PowerPoint/06`, Mermaid usa `S2` como nó e como identificador de `subgraph S2` ao mesmo tempo, com provável ambiguidade visual e possível falha de renderização, a validar no Pages antes de afirmar defeito de publicação. Não alterar nesta fase.

**TI-040, RISCO DE AFIRMAÇÃO ABSOLUTA E DADOS NÃO DEMONSTRADOS, `Informatica/03–07`.** “Impossível editar localmente”, “todos os slides”, “sempre”, “garantir ... permanentemente”, “Cebraspe frequentemente cobra” e classificação fixa de riscos de permissões são atalhos didáticos que omitem condições e evidência de incidência na banca. Registrar sistema operacional/versão/localização, perfis de usuário e políticas institucionais antes de certificar cada operação. Separar exemplos hipotéticos de práticas documentadas da Câmara.

### Rastreio dos itens C/E

Nos artigos 03,04,06,07, os **24 itens** apresentam núcleos didáticos majoritariamente coerentes; **nenhuma inversão confirmada** neste bloco, mas questões dependentes de interface ficaram sob reserva (notadamente `07#5`). No artigo 05, **seis itens** lidos; #1 (referências), #2 (zero em MÉDIA), #3 (PROCV), #4 (CONT.VALORES), #5 (MAIOR vs MÁXIMO) coerentes em exame dirigido; **#6 não pode ser certificado**, pois a fundamentação sobre ausência de atualização automática está desatualizada. **Nenhum destes itens é questão histórica oficial do Cebraspe.**

### Continuação

Próximos: `Informatica/08–11` (redes, internet/navegação, e-mail, Teams/Meet), depois `12–17` (segurança e governança digital) e `01–02` conforme pertinência ao edital. Permanece necessário validar a versão concreta de Microsoft 365 relevante à prova e cotejar o edital oficial integral. **Esta rodada alterou apenas o relatório e o índice de acompanhamento.**


## Bloco 6: redes, navegação, correio eletrônico, Teams e Meet, artigos 08–11 (11/11/2026)

**Quatro arquivos recuperados integralmente e examinados em seus exemplos, explicações e seis itens C/E cada (24 itens didáticos inéditos, não oficiais):**
- `3 - Materias/Informatica/08 - redes internet intranet protocolos e enderecamento ip.md` (`art-ef60bc0a1708e23d`);
- `09 - navegacao busca avancada urls e procedimentos de internet.md` (`art-3678eef88b269f8c`);
- `10 - correio eletronico webmail cliente local campos e seguranca.md` (`art-d18ded18a3b3f763`);
- `11 - teams e google meet colaboracao reunioes e videoconferencia.md` (`art-0f31e15e82e0b1d1`).

**Acumulado:** **22/30 artigos numerados de Informática examinados seletivamente** (`03–11,18–30`); **8 pendentes (`01–02,12–17`)**; cinco textos compartilhados lidos seletivamente, hub apenas inspecionado estruturalmente. **Zero artigos ou questões integralmente certificados**. Nenhuma teoria ou gabarito editado.

### Diagnóstico individual

| Arquivo | Escopo lido | Diagnóstico e próxima intervenção |
| --- | --- | --- |
| 08, redes | Internet/intranet/extranet, TCP/IP, portas, DNS/DHCP, TCP/UDP, IPv4/IPv6, seis itens C/E | Resumo de camadas útil, mas há confusão entre **protocolo de aplicação e transporte** em HTTP/3; uso de UDP descrito como obrigatório/ideal para toda transmissão ao vivo; regras de SMTP/POP3 e VPN exigem qualificações |
| 09, navegadores | URI/URL, pesquisa avançada, cookies, modo privativo, atalhos, seis itens C/E | Núcleo de privacidade coerente, mas “fragmento exclusivamente para rolar” ignora uso por aplicações; sintaxe de buscas muda com motor; coluna de sintaxe inválida tem aspas sem fechamento, aparentando ser exemplo intencional |
| 10, e-mail | Webmail/clientes, Cco, responder/encaminhar, anexos, S/MIME, ameaças, seis itens C/E | Núcleo da regra Cco útil; afirmações “100% no servidor” e “zero de disco” simplificam caching/offline; “Responde a todos” por destinatário Cco expõe presença, mas comportamento exato varia; cuidado com equiparar mau uso de Para a infração jurídica automática |
| 11, Teams/Meet | canais/chat, armazenamento de arquivos, papéis, moderação, salas, gravações, seis itens C/E | **Regra de coorganizador no Teams contradiz Microsoft**; armazenamento de gravações do Meet apresenta caminho legado após julho/2026; outros privilégios e destinos exigem contexto de versão/licença/organizador |

### Achados localizados

**TI-041, ERRO DE REGRA DE PRODUTO CONFIRMADO, prioridade alta, `Informatica/11` §3, tabela de papéis.** A coluna “Pode encerrar a reunião para todos?” marca **NÃO** para o **coorganizador**, alegando que “na maioria dos tenants não encerra para todos”. A documentação oficial da Microsoft lista explicitamente **“End meeting for all” entre as permissões de coorganizador**, em Teams. Corrigir tabela e explicação, sem inferir impacto automático nas questões #1–6 (nenhuma formula diretamente o fim da reunião pelo coorganizador). Fonte: https://support.microsoft.com/en-us/teams/meetings/add-co-organizers-to-a-meeting-in-microsoft-teams . Outro ponto: gerente do lobby e papéis de apresentador podem variar segundo configurações da reunião; ver https://support.microsoft.com/en-us/teams/meetings/meeting-options-in-microsoft-teams .

**TI-042, ERRO TEMPORAL DE INTERFACE, prioridade alta, `Informatica/11` §2 e §5 caso 4.** A nota atribui gravações do Google Meet à pasta **“Gravações do Meet”** no Drive do organizador, sem reconhecer reorganização introduzida em **julho de 2026**. A documentação atual informa que novas gravações ficam na pasta **“Google Meet”**, com **subpasta por reunião**; a antiga pasta *Meet Recordings* passou a *Legacy Meet Recordings* dentro de *Google Meet*. O **núcleo do item #5 permanece ERRADO**, pois arquivos não são baixados automaticamente para todas as máquinas dos participantes; corrigir caminho e qualificar acesso por links/atalhos e regras do organizador. Fonte: https://support.google.com/meet/answer/9308681?hl=en .

**TI-043, OMISSÃO TÉCNICA COM REPERCUSSÃO DIDÁTICA, `Informatica/08` §§2–4.** A tabela atribui “navegação web (HTTP/HTTPS)” ao **TCP**, sem qualificar a versão. **HTTP/3 opera sobre QUIC, cujo transporte de pacotes usa UDP**, oferecendo confiabilidade por fluxos no QUIC; portanto **UDP não significa necessariamente transporte de aplicação sem garantias** e **HTTPS não implica TCP sempre**. A classificação de TCP/UDP, enquanto protocolos individuais, permanece correta em nível introdutório. Fonte primária: https://www.rfc-editor.org/rfc/rfc9114.html . A **Q2**, sobre propriedades de TCP, não é invertida; a lacuna afeta a generalização da tabela e casos de streaming.

**TI-044, EXCESSO DE CERTEZA TECNOLÓGICA, `Informatica/08` §6 casos 1–3.** O texto trata conexão VPN corporativa como definição inequívoca de “extranet”, enquanto acesso remoto de empregado à **intranet** pode ser descrito como acesso remoto seguro sem criar necessariamente uma extranet destinada a parceiros; a classificação é contextual. Também afirma que UDP é **o protocolo ideal** para todo streaming e que perda gera no máximo ruído imperceptível: há soluções de live streaming sobre TCP/HTTP e exigências de confiabilidade, e a perda pode prejudicar seriamente audiovisual. A nota afirma que porta 25 foi “descontinuada para submissão” em caráter geral; distinguir boas práticas de submissão autenticada 587, bloqueios brasileiros e SMTP entre servidores 25 antes de converter em norma universal. **Não inverter itens 1–6 a partir dessas ressalvas sem examinar texto exato.**

**TI-045, EXPLICAÇÃO NÃO UNIVERSAL, `Informatica/09` §1 e §6 caso 4.** O **fragmento `#` não é enviado ao servidor na requisição HTTP**, como o artigo acerta, mas pode ser usado pelo cliente em roteamento de aplicações de página única, seleção de estados, navegação ou outros usos, **não exclusivamente para rolar a um elemento**. A Q4 menciona query string `?` e permanece plausível. Atenção às “sintaxes exatas” de operadores em Google/Bing: detalhes dependem de mecanismo/versão e nem toda consulta com `site:` garante indexação completa ou documento de origem único.

**TI-046, RISOS DE WEBMAIL VERSUS CLIENTE, `Informatica/10` §1 e casos.** O diagrama e a tabela dizem **“mensagens residem 100% no servidor” e “ocupação de disco local zero”** no webmail, apesar de caching e recursos de operação offline em alguns serviços. Cliente local também pode depender de política de cache, sincronização e conexões; manter distinção de interface (navegador versus aplicativo), não garantias absolutas de localização de todos os dados.

**TI-047, JURÍDICO E COMPORTAMENTO DE INTERFACE, `Informatica/10` §§2–6.** A explicação de **Cco/Responder a todos** é útil como risco típico, mas destinatários, aliases, grupos, políticas e comportamento dos clientes precisam ser reconhecidos no gabarito de cenários concretos. O caso #1 caracteriza exposição de e-mails em `Para` como **“infração à LGPD”** automaticamente, sem análise de base, contexto, expectativa e incidência. Preservar orientação de minimizar exposição, sem concluir ilicitude abstrata a partir do campo isolado. A Q6 (“Cco constitui medida ... alinhada às diretrizes da LGPD”) é defensável, **não implica garantia de conformidade jurídica**.

**TI-048, RASTREABILIDADE EDITORIAL, `Informatica/08–11`.** Há alegações sobre incidência frequente de cada detalhe no Cebraspe sem corpus de questões, e exemplos de tecnologia/ferramentas institucionais descritos como se refletissem configurações vigentes na Câmara. Classificar exemplos de VPN e sistemas de órgão como **hipotéticos**, salvo fonte institucional atual. As quatro notas têm seis questões C/E inéditas cada, **não originais da banca**. A distinção entre protocolo, produto, versão e política administrativa deve fazer parte da futura matriz de reparos.

### Estado e fila

**Resultado deste bloco:** oito achados TI-041 a TI-048, incluindo **duas divergências diretamente verificadas em documentação de produto** (TI-041 e TI-042), uma omissão normativa de protocolo rastreada ao RFC 9114 (TI-043) e cinco ressalvas conceituais/editoriais, **sem nova inversão comprovada de gabaritos C/E**. Para o conjunto de 24 questões examinadas, os núcleos C/E são coerentes em leitura dirigida, mas nenhuma foi homologada por cotejo completo de corpus e documentação. Continuar pela verificação individual de `Informatica/12–17`, depois `01–02`, e cotejar edital, hub e referências. **Teoria e questões originais preservadas: Fase 1 somente documentação de auditoria.**


## Bloco 7: segurança da informação, malware, engenharia social e governança digital, artigos 12–17 (11/11/2026)

**Seis artigos recuperados e lidos em seus núcleos teóricos, casos e seis itens C/E cada:**
- `3 - Materias/Informatica/12 - seguranca da informacao principios cidan politicas e controles.md` (`art-cdd153e7d11a16e6`);
- `13 - backup estrategias tipos restauracao e diferenca de sincronizacao.md` (`art-e4f1e43ef81ff76b`);
- `14 - malware virus worm trojan ransomware spyware e rootkit.md` (`art-e66153c7ca90b06b`);
- `15 - antivirus firewall e antispyware atuacao e limites.md` (`art-54da73b11b7b9fdd`);
- `16 - phishing pharming e engenharia social tecnicas e contramedidas.md` (`art-2f178d9576d10289`);
- `17 - governanca digital e responsabilidade no servico publico.md` (`art-28fc0e46477ff067`).

**Estado cumulativo:** **28/30 artigos numerados de Informática examinados seletivamente** (03–30); **01–02 pendentes**. Cinco notas compartilhadas de `Evidencias Dados e IA` já cotejadas; hub somente inspecionado estruturalmente. **36 itens C/E autorais deste bloco com enunciado, gabarito e comentário cotejados em leitura dirigida, sem certificação integral, nem identificação de inversão nova inequívoca**. A Q1 de `Informatica/17` merece revisão de alcance legal antes de qualquer homologação. Nenhum artigo original ou gabarito modificado.

### Matriz diagnóstica

| Arquivo | Núcleo | Limite da leitura e risco |
| --- | --- | --- |
| 12 | Confidencialidade, integridade, disponibilidade, autenticidade, não repúdio; PSI; controles | Tríade ISO expandida em CIDAN sem distinção de fonte; efeito probatório de assinatura digital exposto como absoluto |
| 13 | Full/incremental/diferencial, `archive bit`, cadeia de restauração, 3-2-1, RPO/RTO | A lógica didática clássica é útil; bit de arquivo e imutabilidade tratados como requisitos necessários de qualquer software de backup |
| 14 | Vírus, worm, trojan, ransomware, spyware, rootkit, botnet e seis itens | A separação estrutural é adequada para introdução; exige distinguir dependência de interação humana, que **não** é requisito universal de execução de vírus |
| 15 | Antivírus por assinatura/heurística/comportamento; firewall, NGFW e antispyware | O texto tem ressalvas sobre NGFW, mas algumas tabelas e casos assumem funções mutuamente exclusivas e inspecção de rede “total”; versões importam |
| 16 | Phishing, spear, whaling, smishing, vishing, pharming, TLS e comportamento | Distingue ataques adequadamente em nível didático; MFA e certificados são controles de mitigação, **sem garantia incondicional** |
| 17 | Lei Governo Digital, assinaturas eletrônicas, LAI/LGPD, responsabilidade | **Prioridade máxima:** erro factual no exemplo de decreto legislativo; presunção absoluta de assinatura; simplificações da Lei 14.129/2021 e LGPD |

### Achados localizados, com graus de confirmação

**TI-049, ERRO JURÍDICO CONFIRMADO, prioridade crítica, `Informatica/17` §5 caso 3.** O cenário afirma que **“o Presidente da Câmara dos Deputados precisa sancionar e promulgar um decreto legislativo”**. **Decreto legislativo não se sujeita a sanção presidencial.** O **RICD, art. 109, II**, afirma que projetos de decreto legislativo regulam matérias da competência exclusiva do Legislativo **sem sanção do Presidente da República**. O erro contamina o exemplo usado para explicar assinaturas eletrônicas, que deve ser reconstruído com ato institucional correto e autoridade competente. Fonte oficial RICD: https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-republicacaoatualizada-40374-pl.html ; manual oficial da Câmara: https://www2.camara.leg.br/a-camara/estruturaadm/mesa/segundavice/interacao-legislativa/publicacoes/como-se-fazem-as-leis.pdf .

**TI-050, ERRO JURÍDICO CONFIRMADO, prioridade alta, `Informatica/17` §2 tabela e `Informatica/12` §1.5, casos 4, questão 2 (comentários).** A assinatura qualificada ICP-Brasil é descrita com **“presunção legal absoluta de veracidade”** e impossibilidade de contestação judicial. A MP 2.200-2/2001 art. 10 §1º atribui **presunção de veracidade em relação ao signatário, relativa e refutável por prova em contrário**; assinatura não prova necessariamente autoria física do ato sem análise de comprometimento de chave e contexto. Fonte institucional ITI: https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes/certificacao-digital ; parecer jurídico INPI que esclarece natureza relativa: https://www.gov.br/inpi/pt-br/acesso-a-informacao/manifestacoes-juridicas-de-pi/arquivos/documentos/2017/40-parecer-no-0049-2017.pdf . O **núcleo da Q2 de Informática/12** sobre finalidade técnica do não repúdio permanece plausível; o comentário extrapola indevidamente sua força probatória.

**TI-051, RISCO DE ITEM LEGAL/ABSOLUTO, `Informatica/17` §1, §5 caso 1 e §6 questão 1.** A Lei 14.129/2021 art. 2º se aplica diretamente à **administração pública federal, inclusive Legislativo**, mas **Estados, DF e Municípios somente nos termos de adesão por atos normativos próprios** (art. 2º, III). A regra `once-only` requer cuidado com condições de compartilhamento, base legal e possibilidade real de obtenção. A questão 1 da nota emprega expressão absoluta “vedando-se aos órgãos ... documentos que já constem de bases de dados do próprio Estado”; recomenda-se cotejar literalmente o art. 3º e os mecanismos do diploma antes de homologar o gabarito **CERTO**, sobretudo pelo emprego de “Estado” em sentido genérico. Fonte: https://www2.camara.leg.br/legin/fed/lei/2021/lei-14129-29-marco-2021-791203-normaatualizada-pl.html .

**TI-052, PRECISÃO JURÍDICA, `Informatica/17` §3.1.** O art. 7º, III da LGPD foi utilizado como autorização **geral** para todo tratamento público; o dispositivo se refere especificamente ao **tratamento e uso compartilhado de dados necessários à execução de políticas públicas**, previstas em instrumentos próprios, com Capítulo IV aplicável. Outras hipóteses e princípios da LGPD podem ser relevantes. A correta coexistência entre LAI e LGPD não se explica por **“prevalência” automática** de uma sobre a outra a depender se o dado é salarial ou íntimo; requer finalidade, proporcionalidade e fundamento. Fonte: https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html . O item #2, que nega proibição universal de transparência de remuneração pública, continua plausível.

**TI-053, DISTINÇÃO DE PRINCÍPIOS, `Informatica/12` abertura e §1.** O artigo apresenta o acrônimo **CIDAN** como se as normas **ISO/IEC 27001/27002** instituíssem **cinco princípios fundamentais universalmente canônicos**. A apresentação primária da ISO 27001 é centrada em **confidencialidade, integridade e disponibilidade**; autenticidade e não repúdio são propriedades e objetivos adicionais, úteis em certos sistemas e documentos, mas a fonte deveria diferenciar **tríade CIA e expansão didática CIDAN**. Fonte: https://www.iso.org/standard/27001 . Sem impacto direto sobre itens #1,3,4,6, que tratam princípios corretamente em seu núcleo.

**TI-054, IMPRECISÃO DE MECANISMO, `Informatica/13` §§1–3 e questões 1/4.** As definições de backup incremental/diferencial quanto ao **último backup de referência** são importantes, mas nem todas as implementações dependem de `archive bit` ou o alteram. Catálogos de backup, rastreamento de blocos modificados, snapshots e políticas diferentes realizam tipos equivalentes sem mudar esse atributo. As Q1/4 **explicitam o bit** e são coerentes com um modelo legado baseado nele, mas **não homologar como verdade universal dos backups modernos**. A recomendação 3-2-1 também não requer que cada cópia seja imutável por definição; imutabilidade é defesa adicional.

**TI-055, IMPRECISÃO CONCEITUAL E RISCO DE GABARITO, `Informatica/14` §1.1, tabela do §2 e questão #1.** O artigo diz que vírus dependem de **“ação deliberada do usuário”** para entrar em atividade e se propagar. Vírus requerem execução do código hospedeiro, que pode ocorrer por processos e automatismos, **sem clique deliberado do usuário**. O item #1 contrasta vírus, que “necessitam ... da intervenção do usuário”, com worms. A parte sobre hospedeiro versus autorreplicação é didática; **o acréscimo de intervenção humana universal coloca o gabarito CERTO sob reserva**. Exige cotejo da taxonomia CERT.br e redação exata antes de inverter definitivamente.

**TI-056, SIMPLIFICAÇÃO DO CONTROLE, `Informatica/15` §§2,4–5.** Tabela atribui ao firewall “capacidade **total** de interceptar tráfego” e aos antivírus “capacidade **total** de examinar conteúdo de arquivo”. Ferramentas inspecionam segundo implantação, autorização, protocolo, criptografia, política e capacidade; um firewall de borda pode não ver tráfego fora do segmento, e camadas de segurança podem incorporar módulos de análise de carga útil. O artigo reconhece NGFW com módulos antimalware em seu texto, mas o caso 1 afirma “exclusividade” absoluta do endpoint. Os gabaritos #1–6 permanecem coerentes quando interpretados como **firewall tradicional** e respectivas funções típicas.

**TI-057, RISCO DE GARANTIA DE SEGURANÇA, `Informatica/16` §4 e §5.** A nota afirma que MFA impede acesso quando senha é capturada, sem diferenciar MFA resistente a phishing de fatores passíveis de retransmissão ou roubo de sessão. O artigo discute exceções de TLS (certificados fraudulentos, máquina comprometida); manter a nuance e evitar apresentar HTTPS como proteção absoluta contra redirecionamento malicioso, embora a verificação rigorosa de certificado seja defesa central. A questão #5 (“perdem totalmente utilidade”) tem gabarito ERRADO defensável.

**TI-058, RASTREABILIDADE E CONTEXTO EDITORIAL, `Informatica/12–17`.** Diversos textos invocam ISO, CERT.br, NIST, Câmara, Lei 8.112 e exemplos de infraestrutura institucional sem localizador de trecho ou versão verificável. Dispositivos relativos a atos de chefes de Poder na Lei 14.063/2020 art. 5º §2º I são concretos, mas os exemplos precisam ser institucionalmente possíveis. A classificação estatutária/disciplinar e segurança operacional depende de regime jurídico próprio, sem inferir responsabilidade automática de uma falha. Fontes principais para cotejo: Lei 14.063/2020 https://www2.camara.leg.br/legin/fed/lei/2020/lei-14063-23-setembro-2020-790659-normaatualizada-pl.html ; RICD art. 109. **Não tratar os dez achados como dez gabaritos errados.**

### Síntese de itens e continuidade

**36 itens C/E inéditos examinados seletivamente** no bloco 12–17. **Nenhuma nova inversão definitiva de gabarito homologada**: questões `13#1/4`, `14#1` e `17#1` contêm qualificações potencialmente importantes; os gabaritos sobre RPO/RTO, privacidade, tipos de malware, funções do firewall e assinaturas simples/avançadas/qualificadas apresentam núcleos didáticos compatíveis, sem atestado integral de fontes. **TI-049 e TI-050 são problemas jurídicos confirmados no corpo e nos comentários**, sujeitos a correção na Fase 2.

**Próxima etapa de cobertura:** ler `Informatica/01 - marco civil da internet.md` e `02 - lei 12737 delitos informaticos.md`; depois reconciliar matriz literal do edital oficial, hub, catálogo e todas as anotações. **Fase 1 aberta, zero artigos integralmente certificados; nenhuma teoria ou questão original editada.**


## Bloco 8: Marco Civil da Internet, delitos informáticos e fechamento do inventário numerado (11/11/2026)

**Textos recuperados integralmente**:
- `3 - Materias/Informatica/01 - marco civil da internet.md`, articleId `art-bae07e2af7594b72`, redação local atualizada em 10/09/2026;
- `3 - Materias/Informatica/02 - lei 12737 delitos informaticos.md`, articleId `art-b121871de5f644ca`, atualizado em 30/09/2026;
- `3 - Materias/Informatica/informatica.md`, hub `art-b60c73bfb6574fe0`;
- `2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional.md`, síntese local, **não a versão integral certificada de edital/retificações**.

**Contagem correta:** **30/30 artigos numerados de `Informatica` recuperados e examinados em leitura dirigida** ao longo de oito blocos, **5/5 notas compartilhadas de Evidências/Dados/IA cotejadas**, hub recuperado e examinado em sua estrutura de links. **Zero artigos ou itens integralmente homologados**; **zero itens C/E numerados em `01` e `02`**, embora ambos tragam assertivas e exemplos textuais julgados Certo/Errado. O encerramento da leitura de inventário **não equivale à conclusão da Fase 1**. Não houve edição da teoria.

### Achados dos artigos 01 e 02

**TI-059, ALCANCE NORMATIVO DO MARCO CIVIL, `Informatica/01` §Responsabilidade por conteúdo de terceiros.** O artigo diferencia a **literalidade histórica do art. 19 da Lei 12.965/2014** e o regime constitucional definido pelo STF nos Temas **987 e 533**, reconhecendo a inconstitucionalidade parcial e progressiva da regra. **Conferência primária favorável:** o STF concluiu os embargos em **17/06/2026**, estabeleceu aperfeiçoamentos e registrou **trânsito em julgado**, segundo notícia e andamento oficiais. A tese prevê exceções, regimes distintos por conteúdo/serviço e marco temporal; a expressão editorial **“aplicação vinculante”** não autoriza uma fórmula binária geral sobre notificação. Manter cotejo literal da tese final do Tema 987 e suas ressalvas, particularmente crimes contra honra, conteúdos gravíssimos, anúncios e comunicação privada, para qualquer questão posterior. Fontes oficiais: https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5160549&numeroTema=987 ; https://noticias.stf.jus.br/postsnoticias/plataformas-terao-60-dias-para-implementar-medidas-estruturais-decide-stf . **Não se identificou erro manifesto novo de conteúdo na leitura dirigida**, mas não há certificação de cada subitem.

**TI-060, CHECK DE LEGISLAÇÃO PENAL POSITIVO, `Informatica/02` núcleo, §§154-A/154-B e tabela 2012–2021.** O artigo separa a **Lei 12.737/2012 (criação dos dispositivos)** da **Lei 14.155/2021 (redação vigente)**. Verificação contra o **Código Penal atualizado da Câmara**: tipo básico do art. 154-A **invasão de dispositivo de uso alheio**, conectado ou não, com finalidades específicas e sem autorização, pena **1–4 anos e multa**; qualificadora do §3º **2–5 anos e multa**; art. 154-B tem representação como regra com exceções para administração pública e concessionárias. **Não se identificou inversão jurídica evidente no texto geral**. Conferir artigo e todos os parágrafos, eventuais superveniências e hipóteses concretas antes de declarar homologação normativa. Fontes oficiais: https://www2.camara.leg.br/legin/fed/declei/1940-1949/decreto-lei-2848-7-dezembro-1940-412868-normaatualizada-pe.html ; https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm .

**TI-061, ERRO DE CONTEXTO EDITORIAL CONFIRMADO, `Informatica/02`.** A abertura diz **“Para a Dataprev, o recorte do edital é o art. 2º da Lei 12.737/2012”** e a seção seguinte **“Como a FGV pode cobrar”**. A auditoria corrente trata do **Cargo 1 da Câmara, banca Cebraspe**, e a **síntese local** do seu edital não indica expressamente Marco Civil nem Lei 12.737 no bloco TI. Esse material possui outra origem e **não pode servir de comprovação de cobertura do edital da Câmara nem ser automaticamente considerado matéria obrigatória**. Corrigir rotulagem somente na futura Fase 2 ou manter nota “Dataprev/FGV: uso transversal, fora de escopo Câmara a confirmar”. O artigo 01 também não possui ID CAM-TI no hub; ambos aparecem no agrupamento geral “Legislação de segurança da informação e governança digital”. Não eliminar notas, pois servem a outros concursos.

**TI-062, MAPEAMENTO DO HUB E INVENTÁRIO, `Informatica/informatica.md`.** O hub vincula **28 artigos CAM-TI-001–CAM-TI-028, correspondendo aos textos 03–30**, e mantém **01 e 02 como notas jurídicas sem identificador CAM-TI**. Portanto, a marca **30/30** é cobertura de **arquivos numerados existentes**, enquanto **28/28** é cobertura do recorte **CAM-TI com IDs** segundo esse hub; nenhuma delas garante cobertura de todos os tópicos literais do edital. A estrutura mantém listas genéricas como “Windows (principais funções)”, “Fórmulas básicas”, “Senhas”, “Phishing” e “Vírus e malware” sem link para artigo próprio. Esses itens são **placeholders**, não evidência de estudos completos nem de arquivos ausentes. Teste real de links e catálogo ainda não feito.

**TI-063, RISCO DE INTERPRETAÇÃO DE ESCOPO, `2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional.md` §Tecnologia da Informação e Dados.** A síntese local explicita **Microsoft 365, internet/intranet, e-mail/Teams/Meet, segurança e governança digital, backup, malware, proteção, ataques de engenharia social, IA, aprendizado, dados, BI e storytelling**, que estão nominalmente representados pelos artigos 03–30. **O documento local é um resumo redigido no vault**, não a transcrição completa e validada de cada alínea do edital oficial. Assim, **representação temática aparente não certifica cobertura literal de subitens, profundidade exigida, leis mencionadas, prazos, interfaces nem porcentagem “100% do edital”**. Falta reconciliar texto oficial da Câmara/Cebraspe e retificações, IDs do catálogo e questões reais.

### Síntese transversal consolidada: Fase 1 continua aberta

**Estado verificável:** 30 artigos de Informática lidos seletivamente; 28 com referência CAM-TI no hub, dois legais multi-concurso sem ID CAM-TI; cinco compartilhados lidos seletivamente; **63 achados TI-001 a TI-063 registrados**, com gravidade variada, incluindo problemas confirmados, riscos sob reserva e hipóteses de melhoria. O erro de item C/E **TI-020 (`CALCULATE` “única” função, quando `CALCULATETABLE` também altera contexto)** permanece a inversão mais clara e prioritária. **TI-034** (Tabela Dinâmica Excel) está sob reserva de versão/configuração; **TI-055** (vírus + “ação deliberada”) sob reserva de redação; **TI-049/050** trazem erros jurídicos no corpo e comentários.

**Não cumprido ainda:** leitura literal certificada do edital oficial integral e de todas as retificações, auditoria efetiva de catálogo/hubs/links, amostragem de questões históricas Cebraspe, conferência normativa/software item a item e Fase 2 de reparos. Não usar “auditoria concluída”, “artigos aprovados” nem “cobertura 100%”. **A etapa de leitura de todos os arquivos numerados foi concluída**, com documentação rastreável e prioridades.

**Fila sugerida:** reconciliar programa oficial da Câmara e documentação do cargo com IDs CAM-TI-001–028; confrontar `4 - Projetos/camara-2026/O que estudar.md` e `data/catalogo-materias-por-concurso.json`; classificar cada TI-001–063 por impacto em gabarito, risco normativo, risco técnico, redundância ou adequação de edital; somente então solicitar autorização para modificar teoria em **Fase 2**. **Não alterar artigos, hubs ou dados pessoais nesta Fase 1.**
