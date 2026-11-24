---
title: "Câmara 2026: calibração Cebraspe e auditoria inicial de Direito Administrativo"
type: "governanca-editorial"
status: "auditoria-inicial"
created: 2026-11-24
updated: 2026-11-24
---

# Câmara 2026: calibração Cebraspe e auditoria inicial de Direito Administrativo

## Referências e limites

Esta é uma **comparação inicial**, não certificação de toda a base ou previsão do estilo da próxima prova. A prova da Câmara **edital 2025, aplicação em 2026** de conhecimentos gerais para analista e técnico oferece o cotejo mais diretamente relevante entre as fontes consultadas: [caderno oficial](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico). Os itens 47 e 48 partem de **um mesmo cenário com fundação pública de direito privado, execução material de atividades-meio, falta de delegação de serviço público e redistribuição de atribuições entre órgãos internos**. Para julgar, é necessário separar pessoa jurídica, hierarquia, desconcentração e descentralização. O item 49 confronta natureza jurídica de fundações e regime de bens; itens posteriores abordam processo administrativo. A prova da Câmara 2014 é referência histórica adicional; a prova TCE/MG de edital 2025, [caderno oficial](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/320D70B97CC0EDBE166890B55FCDA7A4D04AC4E219402DE1DDEE1BDC051EC6F5.pdf), é comparação de banca, mas usa formato múltipla escolha e outro cargo.

**Observação metodológica:** número de dispositivos citados, volume de texto e dificuldade percebida são variáveis diferentes. Não extrapolar distribuição percentual da banca a partir desses exemplos. O contraste temático é sustentado pelos itens identificados, não por análise estatística de todo o caderno. Gabaritos definitivos e eventuais anulações devem ser consultados antes de classificar oficialmente as respostas ou importar itens.

## Verificação inicial do banco de Direito Administrativo

Foram lidos os **333 itens** dos cinco arquivos suplementares `data/questoes-camara-administrativo-{aplicacao,casos,dificeis,extra,variantes}.json`: 64 + 64 + 87 + 64 + 54. O metadado `estimatedDifficulty` marca 138 como `media` e 195 como `dificil`. No texto de `statement`, **70 itens têm menos de 130 caracteres e nenhum ultrapassa 350**. Os cinco arquivos têm `id`, `articleId`, `conceptId`, `mechanism`, resposta e explicação; a fundamentação se encontra usualmente em `sourceNote`, muitas vezes com fontes gerais em vez de artigo preciso. A ausência de `theoryRefs` nesses arquivos não prova quebra de ligação, pois a estrutura usa `articleId` e `section`. É preciso executar validadores antes de declarar erro estrutural. Esses números não abrangem todo o banco principal `data/questoes-camara.json`.

**Diagnóstico editorial:** a variedade temática e de mecanismos é útil, com exemplos que distinguem entidade e órgão, delegação e hierarquia, concessão e outorga, vinculação, efeitos do ato e PAD. Contudo, parte dos itens marcados como difíceis é resolvida por identificação de definição ou troca de palavra, sem contexto decisório desenvolvido. Exemplo: `cam-dad-aplicacao-2026-03-03` pergunta diretamente se lei cria autarquia e autoriza empresa pública; `cam-dad-casos-2026-04-3` distingue outorga e concessão em uma frase. Os itens não são necessariamente incorretos: funcionam como recuperação conceitual, mas sozinhos não reproduzem o desafio de combinar fatos e normas dos itens 47-48 da prova de edital 2025.

**Encaminhamento para próximas expansões, sem edição em massa:** preservar as perguntas curtas para aprendizagem, acrescentar casos de duas ou mais etapas e itens que combinem dispositivos, funções, sujeitos, exceções e consequências; exigir fonte normativa localizada nos itens difíceis e não usar rótulo de dificuldade como certificação de equivalência à Cebraspe. Para amostra auditada do Administrativo, revisar especialmente os itens de `sourceNote` genérico antes de classificá-los como de alta confiança. Ampliar a análise ao banco principal e confrontar com gabarito definitivo da prova oficial para uma certificação posterior. Não alterar IDs, gabaritos nem histórico de tentativas sem revisão jurídica.

## Protocolo de geração e atualização

Aplicar o guia 02: cada lote deve descrever quais operações cognitivas acrescenta, comparar `conceptId` com itens existentes e preservar variantes realmente diferentes. Usar uma amostra equilibrada **em formas de raciocínio**, sem fixar percentuais arbitrários. A composição inclui recuperação literal, caso aplicado, distinção, exceção, combinação de pelo menos dois dispositivos e inferência de consequência. A explicação deve dizer por que o gabarito decorre dos fatos e o que mudaria a conclusão. Revisar fontes e publicação antes do uso competitivo.

## Mecanismo de novidade

O seletor `web/15-questoes-ui.js` já exibe a sugestão **Praticar questões novas** e coloca IDs não respondidos antes de IDs respondidos no histórico local. Na integração autenticada, `seenByContest` recebe `adaptive.exposedQuestionIds`, quando disponível. O nome atual significa **sem resposta conhecida**, não **criada recentemente**; histórico incompleto pode mudar o resultado. Não introduzir alerta extra agora. Para eventual teste de interface, diferenciar `ainda não respondida`, `publicada recentemente` e `variante do mesmo conceito` e validar com usuários e sincronização antes de publicar indicador.

## Próxima auditoria

Ampliar a amostra de Administrativo para incluir o núcleo principal e checar: precisão normativa do `sourceNote`; aplicabilidade dos casos; duplicação sem ganho cognitivo; equilíbrio de formas de julgamento e proporção realmente aferida de itens curtos/contextualizados nas provas oficiais. Este documento registra um ponto de partida, sem afirmar que todos os itens do Administrativo estão certificados.

## Primeira medição por item

A [matriz de amostra](Camara%202026%20-%20Amostra%20oficial%20de%20calibracao.md) registra 58 itens, com localizador e gabarito definitivo. Os objetos descritos na matriz são etiquetas de análise. O enunciado deve ser lido no caderno de origem.

| Caderno e recorte | Itens | Válidos | Anulados | Operações predominantes entre os válidos |
| --- | ---: | ---: | ---: | --- |
| Câmara, aplicação de 13/04/2014, Analista Legislativo, Consultor Legislativo, conhecimentos básicos tipo 1, CB2-03, itens 71–110 | 40 | 37 | 3 | 8 relacionais, 8 distinções, 8 exceções, 6 literais, 4 jurisprudenciais, 3 aplicações |
| Câmara, edital de 2025, aplicação de 08/03/2026, conhecimentos gerais dos cargos 1 e 2, caderno 167_CDNS_CG1_01, itens 47–64 | 18 | 18 | 0 | 5 exceções, 4 distinções, 3 aplicações, 3 relacionais, 2 literais, 1 jurisprudencial |

- **2014:** [caderno oficial](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/CAMARA14_CB2_03.pdf) e [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/Gab_Definitivo_CAMARA14_CB2_03.PDF). O recorte é o bloco Processo Legislativo, incluindo organização constitucional e Decoro. Os itens 74, 93 e 107 foram anulados.
- **2026:** [caderno oficial](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico) e [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/CD_25_NS/arquivos/BE7F1F9B1F3F90750D44E63070FDE8505D71F1BADD7F9A2096BB953B32081694.pdf). O caderno é comum a Processo Legislativo e Gestão e Assistente Legislativo e Administrativo. Este recorte mede Direito Administrativo e temas de interface.
- **Alvo editorial:** Cargo 1, Divulgação Institucional, [edital consolidado até a retificação nº 7, de 18/11/2026](https://cdn.cebraspe.org.br/concursos/cd_26_analista/arquivos/560D92CE673D575FC9D1F95DF564F68524BC7CA9146A6E113C2F0C04313D67EB.pdf).

A operação predominante recebe um rótulo por questão. Quando uma condição prevista em norma altera a incidência da regra principal, o item é classificado como exceção. Quando o julgamento exige combinar regras com funções distintas, é relacional. O rótulo jurisprudência se aplica quando o entendimento judicial é determinante. A classificação é editorial e admite revisão. Os cinco itens do segundo recorte com cenário compartilhado incluem contexto fora do trecho numerado. A contagem de caracteres é preliminar, baseada na extração do PDF e restrita ao trecho numerado. Os recortes têm disciplinas e cargos distintos, o que impede agregá-los como distribuição representativa da próxima prova.

### Inventário do banco antes da expansão

| Banco | Itens | Abaixo de 130 caracteres | Operação informada no metadado |
| --- | ---: | ---: | ---: |
| Constitucional, banco principal | 648 | 79 | 628 |
| Administrativo, banco principal | 195 | 21 | 177 |
| Administrativo, cinco suplementos | 333 | 70 | 0 |

No principal de Constitucional, 460 itens estão rotulados como aplicação, 73 análise, 43 integração, 36 reconhecimento e 16 compreensão. No Administrativo principal, os 177 metadados existentes usam aplicação. Esses números descrevem os rótulos declarados. A auditoria individual ainda precisa conferir se o fato do cenário altera a conclusão. Nos suplementos de Administrativo, 195 itens estão marcados como difíceis. Essa dificuldade também precisa ser testada pela operação exigida. Nenhum enunciado se repete literalmente dentro de cada arquivo após normalizar espaços e caixa. Variantes próximas exigem exame semântico.

### Estado da incorporação

Nesta etapa foram examinados 58 itens de dois cadernos, com 55 gabaritos válidos e três anulações. O cotejo integral de atualidade jurídica e a verificação de direitos de reprodução, a ampliação para outras provas, a revisão individual do banco e o lote autoral seguem pendentes. Os 58 localizadores ficam disponíveis para cotejo nas fontes oficiais. Nenhuma questão foi adicionada ao treino nesta etapa.

### Triagem de relevância e liberação

A matriz recebeu cinco dimensões independentes. A **aderência** é direta para o núcleo de Constitucional e Regimentos de P1, adjacente para disciplinas ou unidades que apoiam a preparação e fora do recorte quando não houver vínculo. O **contexto** indica se o problema envolve a própria Câmara ou assunto institucional comparável. A **exigência** usa a operação predominante observada. O **valor pedagógico** é alto quando o item discrimina regras ou verifica condições e relações jurídicas, e moderado quando sua contribuição principal é fixação ou aplicação direta. A **atualidade** é conferida quando a regra determinante foi cotejada, pendente quando a resposta requer revisão complementar e anulada quando o gabarito definitivo traz anulação.

A triagem atribui **alta** a item válido de aderência direta e alto valor pedagógico, **média** a item válido que contribui para fixação ou estudo adjacente e **baixa** a anulado ou fora do recorte. Não há soma ponderada. Um item pode ter prioridade alta para revisão editorial e continuar bloqueado para treino. É possível reclassificá-lo quando o edital, o fundamento, a forma de cobrança ou a atualidade forem revistos.

**Resultado da triagem:** 11 de prioridade alta, 44 de média e 3 de baixa. Dos 55 válidos, 19 tiveram a regra determinante conferida nesta rodada e 36 ainda precisam de cotejo. A conferência de atualidade é distinta da liberação editorial. Enquanto o direito de reprodução integral não estiver documentado, o acesso é por caderno e número do item. A matriz não contém itens jogáveis e não altera as tentativas.

Fontes do cotejo inicial: [Constituição Federal](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), [Lei nº 8.112/1990](https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm), [Lei nº 8.429/1992](https://www.planalto.gov.br/ccivil_03/leis/l8429.htm), [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm) e [Lei nº 12.527/2011](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm).

### Lote autoral 1 — Constitucional

Cinco itens vinculados aos mecanismos observados no caderno de 2014, com cenários novos e justificativa jurídica no banco. Três exigem combinação de regras, um exige distinguir as competências materiais no cenário e um aplica quórum e iniciativa. A composição do piloto privilegia a transferência em competências e processo legislativo. Ela não fixa a distribuição dos 40 itens. A revisão conferiu a norma, a seção vinculada, o fato que decide o gabarito e uma mudança de cenário que altera a análise. A dificuldade é estimada.

O catálogo mantém `origin: inedita` para preservar compatibilidade. O campo `calibration` identifica autoria calibrada e a questão oficial que fundamentou a comparação. A identificação aparece na correção, depois do julgamento. As tentativas continuam vinculadas aos IDs existentes e às origens obtidas do catálogo.
