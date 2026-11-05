---
articleId: art-1f82bd75e4c24a96
articleAliases: ["3 - Materias/Evidencias Dados e IA/01 - perguntas fontes e qualidade da evidencia.md"]
title: "Perguntas, fontes e qualidade da evidência"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-05
---

# Perguntas, fontes e qualidade da evidência

## Núcleo do conceito

Uma investigação útil começa pela **pergunta**, e não pela base disponível. "Quantos benefícios foram pagos?" é uma pergunta descritiva; "pagou-se a beneficiários inelegíveis?" requer critérios de elegibilidade, identificação e testes; "o programa reduziu a pobreza?" exige definição de resultado e, para atribuição causal, um contrafactual. **Dado**, **informação**, **evidência**, **interpretação** e **juízo de valor** têm funções diferentes.

**Dado:** registro bruto, como data, CPF protegido ou valor de um pagamento. **Informação:** dado tratado em contexto, como a proporção de pagamentos fora do prazo. **Evidência:** informação cuja origem, relevância e qualidade permitem apoiar ou refutar um achado ou conclusão. **Interpretação:** explicação proposta para o padrão. **Juízo de valor:** apreciação segundo critério e finalidade, que precisa ser explicitado.

## Estrutura: da pergunta à conclusão

| Etapa | Exemplo de auditoria de auxílio | Risco |
| :--- | :--- | :--- |
| Pergunta | Houve pagamento a pessoas fora do público elegível? | Pergunta vaga ou diferente do objetivo |
| Critério | Requisitos de elegibilidade vigentes na data do pagamento | Usar regra posterior como se sempre tivesse valido |
| Fonte | Cadastro, pagamentos, atos de concessão, registros externos | Cobertura incompleta e desatualização |
| Tratamento | Vincular registros, datas, identificadores e duplicidades | Falso vínculo, perda de unidade de análise |
| Evidência | Pagamentos com incompatibilidade verificada e exceções examinadas | Tratar alerta automático como fraude |
| Conclusão | Quantidade e valor de achados sustentados, com limites | Generalizar casos sem amostragem adequada |

O [Manual de Orientações Técnicas da CGU, seções 5.2 e 5.3](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal) distingue **suficiência** (quantidade de evidência) de **adequação** (qualidade, incluindo confiabilidade, fidedignidade, relevância e utilidade). Acumular documentos repetidos não compensa baixa qualidade de fonte.

**Origem e rastreabilidade:** quem produziu o registro, por qual processo, quando, em que versão, com quais alterações e segundo qual definição operacional? **Completude:** todas as unidades do universo aparecem? **Consistência:** categorias e datas concordam entre sistemas? **Atualidade:** a base cobre o período da conclusão? **Unicidade:** há duplicação de pessoas, contratos ou pagamentos? **Exatidão:** o valor registrado corresponde ao fato verificável?

### Triangulação e sua fronteira

Triangular é confrontar evidências pertinentes, preferencialmente **independentes**. Sistema e relatório que copiam a mesma base não são duas confirmações independentes. Uma observação física, uma confirmação externa e o registro de despesa podem apoiar aspectos diferentes. **Convergência não comprova necessariamente causalidade** e divergências podem revelar erro de indicador, diferença de período ou falsa premissa.

## Exemplo comentado

Uma tabela apresenta 80% de pagamentos no prazo; entrevistas indicam atrasos frequentes. Antes de escolher uma versão, verifique se o sistema mede **ordem bancária emitida** e os usuários relatam **crédito disponível**. As duas afirmações podem coexistir, porque seus eventos são diferentes. Ajustar denominadores e conceitos pode ser mais importante do que coletar mais entrevistas.

## Como a Cebraspe cobra

A dificuldade está em elevar **dado disponível** a prova sem verificar critério, confundir número de arquivos com suficiência e tratar duas fontes derivadas do mesmo registro como confirmação independente.

## Questões comentadas: inéditas C/E

**Item 1.** A existência de duas planilhas idênticas, geradas a partir do mesmo cadastro, garante triangulação independente suficiente para comprovar a elegibilidade dos pagamentos.

**Gabarito: Errado.** Repetir fonte não corrige incompletude ou erro de origem.

**Item 2.** Um alerta produzido por cruzamento de dados pode fundamentar seleção de procedimentos adicionais, sem constituir prova definitiva de irregularidade.

**Gabarito: Certo.** A adequação da evidência depende de verificar critérios, contexto e explicações alternativas.

## Relações com outros temas

- [[3 - Materias/Auditoria Governamental/evidencias-e-documentacao|Evidências e documentação de auditoria]]: atributos normativos e papéis de trabalho.
- [[3 - Materias/Auditoria Governamental/dados-analise-e-ia-na-auditoria|Dados e IA na auditoria]]: testes e origem de registros.
- [[3 - Materias/Evidencias Dados e IA/02 - indicadores denominadores e subnotificacao|Indicadores]]: transformar registros em medidas.

## Tensões e pegadinhas

**Dado ≠ evidência.** **Quantidade ≠ qualidade.** **Independência de fontes ≠ repetição da mesma base.** **Achado ≠ explicação causal demonstrada.**

## Heurísticas

Reconstrua a cadeia **pergunta → critério → fonte → transformação → evidência → conclusão**, verificando que nenhuma etapa foi presumida.

## Fontes

- [CGU, MOT, seções 5.2 e 5.3](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal).
- [Edital CGU 2026, Conhecimentos Complementares: Evidências 1.1 e 1.2](https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html).

**Limites:** exemplos hipotéticos; as avaliações normativas específicas permanecem dependentes do período e do instrumento.
