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
