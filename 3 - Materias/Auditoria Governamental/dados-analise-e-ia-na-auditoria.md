---
articleId: art-aca7f105c372489e
articleAliases: ["3 - Materias/Auditoria Governamental/dados-analise-e-ia-na-auditoria.md"]
title: "Dados, análise automatizada e inteligência artificial na auditoria"
type: "conceito"
status: "ativo"
created: 2026-11-04
updated: 2026-11-04
aliases:
  - "Análise de dados em auditoria"
  - "TAAC e TABC"
  - "IA aplicada à auditoria"
  - "Ferramenta Alice CGU"
---

# Dados, análise automatizada e inteligência artificial na auditoria

## Núcleo do conceito

Uma equipe cruza registros de pagamentos de bolsas, matrículas e autorizações. A ferramenta identifica 180 divergências. **O alerta é uma informação para investigar, não uma irregularidade comprovada.** Uma correspondência ausente pode decorrer de cadastro incompleto, diferença temporal, identificador incorreto, integração defeituosa ou operação indevida. A conclusão depende de critérios e testes adicionais.

O Manual de Orientações Técnicas (MOT) da Controladoria-Geral da União (CGU), **seção 4.3.4.6.11**, trata das **Técnicas de Auditoria Assistidas por Computador (TAAC)**, situadas entre as **Técnicas de Auditoria Baseadas em Tecnologia (TABC)**. Elas permitem automatizar análises de dados e apoiar planejamento, execução, comunicação e acompanhamento. **Automação não transfere à ferramenta a responsabilidade técnica pelos achados.**

Esta nota aprofunda a **unidade 13**. Critérios de qualidade de dados, métricas de classificação e riscos da IA descritos a seguir são **conhecimento metodológico complementar** ao MOT, e não uma suposta taxonomia normativa da CGU. A criação de artigo não marca a unidade como estudada.

## Estrutura: do objetivo à conclusão rastreável

| Etapa metodológica | Pergunta do auditor | Evidência a preservar |
| :--- | :--- | :--- |
| **Questão e critério** | Que risco ou controle será examinado? | Objetivo e regra de julgamento |
| **Fonte e extração** | Quem produz a base, qual seu período e cobertura? | Origem, filtros, data e versão |
| **Qualidade e transformação** | Há ausências, duplicidades ou chaves inconsistentes? | Tratamentos, contagens e justificativas |
| **Análise e sinalização** | Qual cálculo, cruzamento ou modelo detecta o padrão? | Consultas, regras, parâmetros e saída |
| **Corroboração** | O sinal reflete fato relevante ou limitação da base? | Exame documental, confirmação, exceções |
| **Comunicação** | O que se pode afirmar com as evidências? | Resultado, alcance e limitações |

Esse é um fluxo **didático**, não uma sequência obrigatória fixada pelo MOT. O manual exige coerência entre objetivo, procedimento, evidência e documentação; as técnicas podem se combinar e se repetir.

### Dimensões de qualidade: fronteiras

**Completude:** a base inclui todos os registros necessários? **Exatidão:** valores correspondem ao fato e aos documentos? **Consistência:** campos e regras concordam entre sistemas? **Atualidade:** o cadastro corresponde à data da transação? **Unicidade:** duplicidades são reais ou surgiram na ligação entre tabelas? **Rastreabilidade:** outro auditor consegue refazer a extração e a análise? Essas dimensões são classificações metodológicas gerais, úteis para a auditoria.

**Caso:** uma tabela registra uma linha por estudante, outra uma linha por concessão e uma terceira uma linha por pagamento. Uma pessoa com duas concessões e seis parcelas em cada uma pode gerar **doze pagamentos, duas concessões e um estudante**. Misturar a unidade de análise provoca duplicações artificiais. Registrar chaves, cardinalidade da ligação, filtros, contagens anteriores e posteriores evita conclusões sobre população errada.

Um cálculo matematicamente exato pode ter usado dados inválidos. Uma base consistente internamente pode excluir operações reais. **Mais linhas analisadas não corrigem falha de cobertura.**

## Técnicas computacionais versus finalidade do teste

| Técnica ou abordagem | Exemplo | Limite |
| :--- | :--- | :--- |
| **Filtro determinístico** | Pagamentos sem número de autorização | Campo vazio não comprova ausência do ato |
| **Cruzamento de bases** | Pagamento sem matrícula correspondente | Data, chave e fonte podem explicar diferença |
| **Recálculo automatizado** | Recalcular todos os valores de benefício | Exatidão aritmética não prova legitimidade |
| **Análise de tendências** | Crescimento atípico de despesa por pessoa | Correlação ou anomalia não demonstra causa |
| **Regra de risco** | Identificar cláusulas restritivas em editais | Regra pode não incorporar exceções jurídicas |
| **Modelo de IA** | Classificar documentos para exame prioritário | Há falsos alertas, vieses e limites de explicação |
| **Inspeção de logs** | Localizar alteração de cadastro e horário | Registro técnico não prova sozinho autoria consciente |

Se o auditor usa um programa para **reexecutar regra de aprovação**, pode realizar **teste de controle**. Se usa a mesma tecnologia para examinar valores e ocorrência de pagamentos, pode realizar **procedimento substantivo**. **O meio tecnológico não define a finalidade.** Ver [[3 - Materias/Auditoria Governamental/procedimentos-e-testes-de-auditoria|Procedimentos e testes]].

### Analisar 100% de uma base não significa analisar 100% do universo

Um script pode examinar todos os registros **disponíveis**. Se o sistema não contém pagamentos manuais, antigos ou realizados por outra via, o censo do arquivo deixa essas operações fora. Examinar integralmente os dados extraídos não elimina erros de cadastro, interpretação ou processamento, nem prova que todos os casos sem alerta são regulares.

A escolha de casos com alerta é **seleção dirigida**, não amostragem probabilística automaticamente válida para generalizar taxa de irregularidade ao conjunto. Ver [[3 - Materias/Auditoria Governamental/amostragem-e-generalizacao|Amostragem e generalização]].

## IA e erros de classificação

| Saída da ferramenta | Situação real | Classificação |
| :--- | :--- | :--- |
| Gera alerta | Caso regular | **Falso positivo** |
| Não gera alerta | Caso irregular | **Falso negativo** |
| Gera alerta | Caso irregular | Verdadeiro positivo |
| Não gera alerta | Caso regular | Verdadeiro negativo |

**Falso positivo:** pode causar desperdício de exames e acusações precipitadas; exige confirmação antes do achado. **Falso negativo:** deixa situações de risco invisíveis à ferramenta; ausência de alerta não certifica conformidade. Alterar o limiar de classificação pode modificar a proporção de ambos.

**Viés:** a qualidade e representatividade da base de treinamento podem variar entre tipos de órgão, região ou tamanho de contratação. **Explicabilidade:** a equipe precisa entender suficientemente por que determinado caso foi sinalizado para testar, justificar e documentar seu exame. **Validação humana:** revisão precisa questionar fontes e critérios, não apenas aprovar a recomendação automatizada.

**IA generativa:** pode ajudar a localizar cláusulas ou organizar documentos, mas pode inventar citações e omitir condições. As referências devem ser confrontadas com o **documento original, versão e contexto**. Não enviar dados protegidos a ferramentas externas sem autorização institucional.

### Caso oficial: Alice

A **Alice (Analisador de Licitações, Contratos e Editais)**, da CGU, utiliza técnicas de **mineração de textos e inteligência artificial** para analisar automaticamente contratações e emitir **alertas preventivos** diante de possíveis riscos e inconsistências. O fluxo divulgado pelo órgão envolve **coleta, análise, comunicação e eventual atuação de auditoria**. A orientação da CGU é explícita: **um alerta não confirma irregularidade e pode ser falso positivo**; cabe verificar edital e contexto.

**Distinção para prova:** alerta automatizado → verificação técnica → evidência adequada → conclusão ou providência competente. A Alice apoia gestão e auditores, mas não substitui julgamento e não determina fraude por si.

Fontes diretas: [Alice, na CGU](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/alice) e [Alice para o gestor](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/alice/alice-para-o-gestor).

## Rastreabilidade, privacidade e sigilo

**Trilha de auditoria digital** é a informação que permite reconstruir eventos e transformações: fonte, registros de acesso, data, versões, consultas, parâmetros e resultados intermediários. A expressão "trilha de auditoria" também pode designar **regras automatizadas de alerta** na Alice: são usos distintos do termo.

Conservar o registro de transformações e exceções permite que outro auditor reproduza o exame. **Log de alteração não equivale automaticamente a responsabilidade pessoal**, pois credenciais compartilhadas, integridade do sistema e outros elementos podem exigir investigação.

No tratamento de dados pessoais, observar base legal, finalidade, necessidade, acesso autorizado, segurança e proteção do denunciante. A **Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018**, não transforma a auditoria em atividade sem controles de privacidade. **Acesso legítimo para auditoria não implica divulgação pública irrestrita.**

Na **pseudonimização**, uma informação adicional, guardada separadamente, pode permitir reidentificar uma pessoa; **anonimização efetiva**, segundo as condições legais e técnicas aplicáveis, busca impedir associação a indivíduo. A CGU publica orientações específicas sobre esse tratamento.

Fonte: [Tratamento de dados pessoais na CGU](https://www.gov.br/cgu/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/tratamento-de-dados-pessoais-na-cgu).

## Exemplo comentado: 180 alertas

Em 1.200 pagamentos disponíveis, uma regra emite 180 alertas. A revisão encontra 145 divergências explicadas por cadastros e datas diferentes. Os 35 restantes exigem exame de autorização, comprovantes e elegibilidade.

**Conclusão sustentada:** foram identificadas 180 divergências iniciais; após verificações, 35 situações seguem sem explicação suficiente. **Conclusões indevidas:** que os 35 casos são fraudes, que todos os demais pagamentos são regulares ou que uma proporção observada equivale à taxa de falhas de toda a política.

Se novos documentos mudam a situação, o achado deve ser reavaliado. Ver [[3 - Materias/Auditoria Governamental/achados-causas-e-indicios-de-fraude|Achados]] e [[3 - Materias/Auditoria Governamental/evidencias-e-documentacao|Evidências]].

## Como o Cebraspe pode cobrar

Possíveis distratores: alerta tratado como prova; ausência de alerta como garantia; censo de base incompleta como exame do universo; resultado matemático correto como prova de legitimidade; falso positivo confundido com falso negativo; e tratamento legítimo de dados como permissão de divulgação irrestrita. São **hipóteses didáticas**, não estatística apurada de provas reais.

**Item didático C/E:** "O exame computacional de todos os registros extraídos de uma base dispensa avaliar se a população-alvo está representada integralmente nesse arquivo." **Errado.** A cobertura da base pode ser menor que o universo real.

**Item didático C/E:** "O alerta produzido automaticamente pela ferramenta Alice pode indicar prioridade de exame, mas não comprova, por si, irregularidade na contratação." **Certo.** A CGU exige revisão do caso e admite falsos positivos.

Esses exemplos **não foram respondidos** e não contam como desempenho ou treino calibrado.

## Tensões, conexões e heurísticas

**Ferramenta × finalidade; alerta × achado; dado extraído × população-alvo; correlação × causalidade; falso positivo × falso negativo; uso legítimo × divulgação autorizada.** A sequência de revisão é **objetivo → fonte → qualidade → processamento → alerta → corroboração → conclusão**.

## Fontes

- [CGU, MOT, seção 4.3.4.6.11: TAAC/TABC e seção 5.3: documentação](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal).
- [CGU, Trilhas de competências técnicas: Análise de Dados](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/competencias-tecnicas-de-auditoria).
- [CGU, Alice](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/alice).
- [CGU, tratamento de dados pessoais](https://www.gov.br/cgu/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/tratamento-de-dados-pessoais-na-cgu).
- [[2 - Editais/CGU 2026 - Auditoria|Síntese do edital CGU 2026]], recorte P3.1.5. Confirmar o edital e retificações.
