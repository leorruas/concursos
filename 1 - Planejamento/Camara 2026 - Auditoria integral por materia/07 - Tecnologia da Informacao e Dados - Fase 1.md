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
