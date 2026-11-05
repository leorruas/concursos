---
articleId: art-5d6b81c3e0a942f7
articleAliases: ["3 - Materias/Evidencias Dados e IA/05 - ia responsavel e validacao de decisoes publicas.md"]
title: "IA responsável e validação de decisões públicas"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-05
---

# IA responsável e validação de decisões públicas

## Núcleo do conceito

A inteligência artificial (IA) pode apoiar classificação, busca de documentos, triagem de riscos, extração de dados e síntese de informações públicas. Sua utilidade depende da **pergunta, qualidade dos dados, validação independente e dos impactos sobre pessoas**. Uma ferramenta que identifica contratos suspeitos não decidiu que houve fraude. Uma resposta de modelo de linguagem com citação aparente precisa ter a fonte efetivamente conferida.

**Escolha tecnológica:** IA não deve ser pressuposto de solução. Uma regra simples, consulta de banco de dados, amostragem ou análise manual pode resolver a tarefa com menor custo, risco e opacidade. A decisão sobre solução depende da necessidade, do nível de erro aceitável, da explicabilidade exigida e da capacidade institucional.

## Ciclo de vida e governança de IA

O Ministério da Gestão e da Inovação publicou em julho de 2026 o **Guia Unificado de Inteligência Artificial (GuIA)** como referência técnica para órgãos públicos. Ele organiza a gestão em **sete etapas**:

| Etapa do GuIA | Pergunta de controle |
| :--- | :--- |
| 1. Prospecção | O problema exige IA? Existem alternativas proporcionais? |
| 2. Estruturação | Quem responde, como tratar riscos, dados e recursos? |
| 3. Experimentação | O protótipo funciona nos casos relevantes, inclusive extremos? |
| 4. Implementação | Como desenvolver, integrar e testar requisitos? |
| 5. Implantação | O sistema foi disponibilizado com controles e acompanhamento? |
| 6. Sustentação | Há monitoramento de desempenho, mudança de dados, incidentes e correções? |
| 7. Desativação | Quando encerrar com segurança e preservar registros pertinentes? |

O GuIA é **referência de governança e implementação**; citar suas etapas não transforma cada recomendação em obrigação legal universal para todo uso individual de IA. Normas específicas, proteção de dados e responsabilidade administrativa continuam a ser examinadas separadamente.

### Matriz de riscos e controles

| Risco | Exemplo | Controle possível |
| :--- | :--- | :--- |
| Informação não sustentada | Modelo inventa trecho de contrato | Verificação com o documento original e referência localizável |
| Falso positivo | Sistema sinaliza fornecedor legítimo | Revisão por evidência independente, critérios e taxas de erro |
| Falso negativo | Conduta atípica não é detectada | Amostragem de não sinalizados e teste de cobertura |
| Viés e discriminação | Dados históricos desfavorecem grupo | Testes segmentados, critérios justificados e remediação |
| Desatualização | Modelo usa regra revogada | Versões normativas e atualização de fontes |
| Vazamento | Documento sigiloso enviado a ferramenta externa | Autorização, classificação, minimização, ambiente adequado |
| Opacidade decisória | Beneficiário não sabe por que foi afetado | Registro da lógica, responsável, canais de revisão e contestação |

### Supervisão humana e contestabilidade

**Supervisão humana efetiva** significa ter competência, tempo, informação e autoridade para revisar, alterar e, quando cabível, interromper a recomendação automatizada. Um clique formal de aprovação não prova exame crítico. **Contestabilidade** exige que resultados que afetem direitos possam ser questionados pelas vias pertinentes, com responsáveis e razões verificáveis.

O GuIA e a [Matriz RACI de IA para o setor público](https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/matriz-raci) enfatizam papéis e responsabilidades. A obrigação jurídica concreta de revisão, explicação ou recurso depende do ato, do regime de tratamento de dados e do processo administrativo aplicável.

**RAG (geração aumentada por recuperação):** recuperar documentos pode melhorar a ancoragem das respostas, mas **não garante** fidelidade, atualidade, licitude nem ausência de alucinação. Uma referência errada pode acompanhar uma resposta fluente.

## Caso comentado: priorização de auditorias

Sistema de IA classifica 1.000 pagamentos como suspeitos. A auditoria identifica que dois órgãos usam campos de data com convenções diferentes. Parte dos alertas decorre do problema de integração. A equipe deve avaliar qualidade da base, recalcular alertas, examinar amostra dos resultados e não confundir pontuação de risco com conclusão de infração. Se o modelo orienta decisões que impactam usuários, deve avaliar efeitos sobre grupos, mecanismos de revisão e critérios legais.

## Como a Cebraspe cobra

Distratores podem transferir a decisão jurídica ao algoritmo, considerar citação gerada como prova, equiparar supervisão a clique automático ou supor que um modelo substitui validação de dados. As etapas do GuIA devem ser lembradas **como ciclo de governança**, evitando tratá-las como norma sancionatória.

## Questões comentadas: inéditas C/E

**Item 1.** A indicação de um contrato como suspeito por modelo de IA comprova irregularidade, desde que o sistema tenha bom desempenho médio na base de teste.

**Gabarito: Errado.** A inferência depende de evidências do caso; desempenho médio não converte alerta em conclusão jurídica.

**Item 2.** A supervisão humana efetiva sobre decisões apoiadas por IA pressupõe capacidade real de verificar as informações e rever o resultado conforme a competência aplicável.

**Gabarito: Certo.** Aprovação meramente formal não substitui revisão substancial.

**Item 3.** A recuperação de documentos por RAG elimina a necessidade de verificar as citações apresentadas por modelos generativos.

**Gabarito: Errado.** As referências e a interpretação ainda precisam ser conferidas.

## Relações com outros temas

- [[3 - Materias/Auditoria Governamental/dados-analise-e-ia-na-auditoria|Análise de dados e IA na auditoria]]: técnicas aplicadas e ferramenta Alice.
- [[3 - Materias/Evidencias Dados e IA/03 - inferencias falacias e falsos positivos|Falsos positivos e limites da inferência]].
- [[3 - Materias/Atualidades/01 - inteligencia artificial|IA: fundamentos]].
- [[3 - Materias/Administracao Publica/03 - transparencia acesso a informacao e protecao de dados|Transparência e proteção de dados]].

## Tensões e pegadinhas

**Alerta ≠ decisão.** **Supervisão ≠ homologação automática.** **RAG ≠ prova de fidelidade.** **Boa média de acertos ≠ justiça para cada grupo.** **Guia orientador ≠ lei universal.**

## Heurísticas

Pergunte **se IA é necessária**, **qual é a fonte da resposta**, **qual é a taxa de erro**, **quem decide e quem pode contestar**. Para cada etapa, identifique responsabilidade e prova de validação.

## Fontes

- [MGI, Guia Unificado de Inteligência Artificial para o Setor Público, 2026](https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/guia-unificado-de-inteligencia-artificial-para-o-setor-publico-1/guia-unificado-de-inteligencia-artificial-para-o-setor-publico).
- [MGI, notícia de lançamento e finalidade do GuIA, 03/07/2026](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/Julho/guia-unificado-de-inteligencia-artificial-guia-orienta-o-desenvolvimento-de-solucoes-de-ia-no-servico-publico).
- [MGI, Guia de introdução ao RAG no setor público](https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/guia-de-rag).
- [Edital CGU 2026, Evidências, item 5](https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html).

**Limites:** a referência do GuIA é técnica; a interpretação normativa exige identificar atos concretos e versão de legislação pertinente. Os casos são hipotéticos.
