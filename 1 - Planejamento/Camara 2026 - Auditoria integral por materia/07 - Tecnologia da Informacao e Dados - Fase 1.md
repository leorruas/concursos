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
