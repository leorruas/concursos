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

**Resultado da triagem:** 11 de prioridade alta, 44 de média e 3 de baixa. Dos 55 válidos, 20 tiveram a regra determinante conferida nesta rodada e 35 ainda precisam de cotejo. A conferência de atualidade é distinta da liberação editorial. Enquanto o direito de reprodução integral não estiver documentado, o acesso é por caderno e número do item. A matriz não contém itens jogáveis e não altera as tentativas.

Fontes do cotejo inicial: [Constituição Federal](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html), [Lei nº 8.112/1990](https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm), [Lei nº 8.429/1992](https://www.planalto.gov.br/ccivil_03/leis/l8429.htm), [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm) e [Lei nº 12.527/2011](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm).

### Lote autoral 1 — Constitucional

Cinco itens vinculados aos mecanismos observados no caderno de 2014, com cenários novos e justificativa jurídica no banco. Três exigem combinação de regras, um exige distinguir as competências materiais no cenário e um aplica quórum e iniciativa. A composição do piloto privilegia a transferência em competências e processo legislativo. Ela não fixa a distribuição dos 40 itens. A revisão conferiu a norma, a seção vinculada, o fato que decide o gabarito e uma mudança de cenário que altera a análise. A dificuldade é estimada.

O catálogo mantém `origin: inedita` para preservar compatibilidade. O campo `calibration` identifica autoria calibrada e a questão oficial que fundamentou a comparação. A identificação aparece na correção, depois do julgamento. As tentativas continuam vinculadas aos IDs existentes e às origens obtidas do catálogo.

### Lote autoral 2 — Constitucional

Cinco casos adicionais levam o total a 10 de 40. Três exigem integrar regras, um exige analisar uma condição e um aplica o rito constitucional ao cargo indicado. O lote explora ausência justificada em convocação ministerial, eleição após vaga sem suplente, organização territorial e quóruns e efeitos de crimes de responsabilidade. Os itens 76, 82, 85, 95 e 103 de 2014 serviram de referência para as operações de julgamento. Em particular, o item 85 motivou o contraste entre autorização e processamento em um rito diferente, e o item 95 motivou a separação entre julgamento político e efeitos na esfera judicial.

### Lote autoral 3 — iniciativa, quóruns e competências

Cinco itens levam a seleção autoral a 15 de 40. O lote inclui três integrações, uma análise e uma aplicação. O caderno de 2014 forneceu quatro contrastes de referência: competência institucional (75), iniciativa orçamentária (79), remessa para promulgação (80) e consequência processual de uma rejeição (92). Os novos cenários testam iniciativa reservada, apuração separada do veto, retorno de substitutivo aprovado, distinção entre limite da dívida e autorização de operação externa e vedação de delegação da LDO.

### Lote autoral 4 — direitos fundamentais e federação

Cinco itens levam o catálogo a 20 questões autorais calibradas. O lote inclui duas integrações, uma análise, uma aplicação e um item de recuperação literal. Os casos se concentram em controle parlamentar da intervenção, organização de territórios, objeto do habeas data e inalistabilidade. O item literal recupera o quórum e os turnos de aprovação de tratado de direitos humanos. O espelho de 2014 informa o mecanismo de cada item, incluindo limites constitucionais em hipóteses institucionais e condições formais de tramitação. Os fundamentos dos novos temas foram conferidos diretamente na Constituição.

### Lote autoral 5 — controle externo e mandato

Cinco itens levam a seleção autoral a 25 de 40. Três exigem integração, um análise e um reconhecimento literal. O lote usa como espelhos de operação os itens 75, 76 e 82 de 2014. As fronteiras testadas são parecer e julgamento, multa e imputação de débito, irregularidade e sustação de despesa, renúncia e eficácia da vacância, publicidade da arguição e sigilo do voto.

### Lote autoral 6 — nacionalidade e direitos políticos

Cinco itens levam a seleção a 30 de 40. Três exigem integração, um análise e um aplicação. Os itens 81, 83, 85, 97 e 106 de 2014 serviram como espelhos de exceção, atos de vontade, sequência procedimental e vínculo partidário. O lote distingue aquisição de outra nacionalidade e pedido de perda, as vias de nacionalidade originária no exterior, a exceção à inelegibilidade reflexa, o marco de inatividade do militar eleito e os efeitos da migração sobre mandato e distribuição de recursos. A atualidade jurídica dos itens novos foi examinada na Constituição consolidada.

### Lote autoral 7 — processo legislativo constitucional

Cinco itens levam a seleção a 35 de 40. Três exigem integração, um análise e um aplicação. A comparação com os itens 75, 79, 80, 91 e 92 de 2014 orientou a separação de quóruns, a aplicação de exceções e a distinção entre espécies ou fases legislativas. Os casos abrangem crédito extraordinário, recesso na urgência constitucional, reapresentação de matéria, delimitação do veto e maioria absoluta em cada Casa.

### Lote autoral 8 e balanço dos 40 itens

Os cinco itens finais abordam requisitos de CPI, cooperação federativa, políticas preventivas de saúde, asilo político e renovação do Senado. Os espelhos de 2014 foram os itens 71, 77, 103, 104 e 105. Os cinco novos gabaritos foram cotejados com a Constituição consolidada.

| Dimensão | Resultado nas 40 autorais | Comparação e limite |
| --- | --- | --- |
| Operação registrada | 22 integrações, 8 análises, 7 aplicações e 3 reconhecimentos | A amostra de 2014 classificou 8 de 37 válidas como relacionais, com diferenças de taxonomia. O lote prioriza deliberadamente a integração de regras para treinar transferência. |
| Densidade textual | 145 a 336 caracteres por enunciado, mediana 273,5 | As medianas oficiais de 147 e 201,5 excluem contextos compartilhados. Os enunciados autorais incluem seus próprios contextos, o que restringe a comparação direta de comprimento. |
| Dificuldade estimada | 3 fáceis, 16 médias e 21 difíceis | A estimativa segue a operação exigida. A amostra oficial não fornece parâmetros de dificuldade comparáveis do público-alvo. |
| Gabarito | 22 Certo e 18 Errado | O caderno de 2014 teve 17 C e 20 E no recorte válido. Essa contagem descreve o lote e não é meta para futuras baterias. |
| Unidade | 27 em Constitucional e Regimentos de P1 e 13 em Processo Legislativo e Regimento Interno de P2 | O recorte de 2014 mistura temas constitucionais e regimentais, enquanto os itens novos usam o vínculo ao edital vigente. |

Os metadados de cada autoral indicam o item usado como referência de operação, o fundamento jurídico, a seção teórica e a dificuldade estimada. O inventário técnico conferiu IDs, duplicação literal, formato C/E, gabaritos e referências. A seleção de oficiais elegíveis e a medição por origem têm etapas próprias ainda pendentes.


## Recorte comparável do TCU 2025

A matriz passa a cobrir **78 itens de três cadernos**, dos quais **74 válidos** e quatro anulados. O novo recorte contém 20 itens do Tribunal de Contas da União, Técnico Federal de Controle Externo, Cebraspe, aplicação de 03/08/2025, caderno **108_TCUTEFC_001_01**, itens 71–75 e 106–120. A seleção abrangeu sanções e recursos contratuais, autotutela, controle parlamentar e jurisdicional e repartição constitucional de funções de fiscalização. O cargo técnico é uma referência secundária. A comparação se restringe a habilidades e conteúdos comuns ao programa de Divulgação Institucional. [Caderno oficial](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/108_TCUTEFC_001_01.pdf) e [gabarito definitivo](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/E53AB5C65454510E881F7667E620F44B6DDD1C083D5175412CF8725A3C9B9C9F.pdf).

| Indicador | TCU 2025 |
| --- | ---: |
| Itens no recorte | 20 |
| Válidos e anulados | 19 válidos, 1 anulado (119) |
| Operação predominante dos válidos | 6 relacionais, 5 literais, 5 distinções, 2 aplicações, 1 exceção |
| Itens vinculados ao cenário contratual compartilhado | 5 |
| Mediana do trecho numerado, excluído o cenário compartilhado | 224 caracteres nos 20 itens |
| Dificuldade editorial estimada dos válidos | 5 baixa, 9 média, 5 alta |
| Prioridade de revisão | 6 alta, 13 média, 1 baixa |
| Cotejo da regra determinante | 11 conferidos, 8 a conferir, 1 anulado |

No cenário compartilhado, a empresa está sujeita a sanção contratual e usa recursos administrativos. A questão 73 exige ler a premissa sobre competição para distinguir hipóteses de contratação direta. A 74 é resolvida pela natureza jurídica do Ministério, independentemente dos demais fatos. A 118 reúne sanção, posição institucional e efeitos das decisões do TCU. São três referências para distinguir aplicação a fatos, recuperação de conceito em texto contextualizado e integração de regras. O recorte não contém item em que o conhecimento de uma decisão judicial específica tenha sido classificado como operação predominante.

Os 19 itens válidos são localizadores de prioridade alta ou média. Sem liberação de reprodução registrada para o caderno, todos permanecem acessíveis pela fonte original. A matriz consolidada tem **17 itens de prioridade alta, 57 de média e 4 de baixa**, com **31 regras determinantes cotejadas**. Nenhum item oficial foi acrescentado como questão jogável nesta rodada. O critério de dificuldade é editorial e admite revisão. A estimativa alta indica integração entre regimes, limites ou consequências cuja leitura exige mais de uma operação. [Constituição Federal](https://planalto.gov.br/ccivil_03/constituicao/constituicao.htm), [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm), [Lei nº 14.133/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm) e [Código Tributário Nacional](https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm).

## Auditoria individual de controle externo e composição do TCU

Oito itens existentes foram cotejados com os arts. 71 e 73 da Constituição. A dificuldade foi estimada pela informação que o estudante precisa recuperar ou combinar. Os enunciados, gabaritos e identificadores foram preservados.

| Item | Operação efetivamente exigida | Resultado da revisão |
| --- | --- | --- |
| `cam-const-200-tcu-repasses-df-so-estados-municipios` | Recuperar a lista constitucional de entes e detectar a exclusão do Distrito Federal | Reclassificado como reconhecimento. O convênio é parte da própria regra do art. 71, VI. |
| `cam-const-200-tcu-sancao-exige-previsao-legal` | Recuperar os pressupostos e a base legal das sanções | Reconhecimento preservado. O item cobre isoladamente a competência do art. 71, VIII. |
| `cam-revisao-sustacao-de-ato-nao-corrigido-e-comunicada-as-duas-casas` | Encadear a determinação de correção, a sustação e a comunicação | Operação reclassificada como integração dos incisos IX e X. Dificuldade média preservada. |
| `cam-revisao-comunicacao-de-sustacao-de-ato-nao-se-esgota-no-senado` | Identificar os destinatários da comunicação da sustação | Reconhecimento, dificuldade fácil. A sequência anterior já está posta e basta recuperar o inciso X. |
| `cam-const-200-tcu-ato-prazo-e-dupla-comunicacao` | Conferir a sequência dos incisos IX e X e perceber que comunicar só à Câmara é insuficiente | Dificuldade reduzida de muito difícil para média. O enunciado fornece as premissas da sustação e o último passo decide o gabarito. |
| `cam-const-200-tcu-idade-setenta-exatos` | Aplicar o limite superior estrito de idade à pessoa que já completou 70 anos | Aplicação preservada. A idade é decisiva para o julgamento. Art. 73, § 1º, I, com redação da EC nº 122/2022. |
| `cam-const-200-tcu-quota-presidencial-dois-origens` | Relacionar o terço presidencial aos lugares sujeitos à alternância e à lista tríplice | Integração preservada, dificuldade média. O enunciado fornece a quantidade de escolhas presidenciais, e o art. 73, § 2º, I, resolve as demais relações. |
| `cam-dad-dificil-2026-26-ampliacao-b-1` | Distinguir o objeto da sustação e a autoridade competente | Comentário ampliado para incluir a comunicação às Casas, a solicitação ao Executivo e o efeito da inércia em 90 dias. É um item relacional sem cenário. |

O item 118 do TCU 2025 combina posição institucional, poder sancionador e eficácia das decisões. O item autoral sobre sanções recupera uma dessas regras isoladamente e funciona como preparação para esse tipo de julgamento. Já as duas variantes erradas sobre comunicar a sustação a uma única Casa verificam essencialmente o mesmo requisito. Os polos Câmara e Senado ajudam a fixar a regra, mas uma nova variante com valor de transferência deve mudar o objeto da sustação, a oportunidade da correção ou o efeito da inércia. [Constituição Federal](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm) e [caderno do TCU 2025](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/108_TCUTEFC_001_01.pdf).

## Auditoria individual de autotutela, revogação e decadência

Foram revisados três itens do banco principal e seis dos suplementos de Direito Administrativo. A auditoria conferiu a regra jurídica determinante, a existência de fatos que alteravam o julgamento, a operação exigida e a dificuldade editorial. Enunciados, gabaritos e IDs foram preservados. Os comentários agora identificam o dispositivo e, quando necessário, a condição que muda a conclusão.

| Item | O que resolve o julgamento | Reclassificação |
| --- | --- | --- |
| `cam-revisao-ilegalidade-justifica-anulacao-em-autotutela` | Reconhecer a anulação por ilegalidade como forma de autotutela. O vício já é dado. | Reconhecimento, fácil |
| `cam-adm-anulacao-legalidade` | Distinguir anulação, revogação e convalidação a partir de vício já qualificado como insanável. | Compreensão, fácil |
| `cam-adm-revogacao-ex-nunc` | Identificar a consequência temporal ordinária da revogação de ato válido. | Compreensão, fácil |
| `cam-dad-ampl-2026-02-02` | Distinguir controle de legalidade e revisão de mérito. Ambos os fundamentos estão nomeados. | Compreensão, fácil |
| `cam-dad-ampl-2026-11-01` | Distinguir o fundamento da anulação e o da revogação. | Compreensão, fácil |
| `cam-dad-casos-2026-11-1` | Reconhecer a diferença pelo motivo jurídico da retirada. A frase enuncia a regra, sem situação hipotética. | Compreensão, fácil |
| `cam-dad-variantes-2026-02-2` | Separar a ilegalidade de ato favorável da proteção temporal para anulá-lo. As datas necessárias para resolver um prazo estão ausentes. | Análise, média |
| `cam-dad-dificil-2026-02-2` | Refutar que a ilegalidade, isoladamente, afaste o limite. A expressão “há vários anos” não determina que o prazo decorreu. | Análise, média |
| `cam-dad-dificil-2026-11-ampliacao-b-2` | Aplicar a ressalva expressa de má-fé ao ato favorável depois do quinquênio. | Aplicação, média |

O item 110 da prova do TCU 2025 verifica se a autotutela alcança a revogação por conveniência ou oportunidade. As três variantes sobre os fundamentos da retirada exercitam uma distinção próxima. Os itens sobre atos favoráveis acrescentam a decadência e a ressalva de má-fé. Para medir uma operação mais exigente, o caso precisaria fornecer datas de prática, primeiro pagamento ou impugnação e exigir que o estudante determine qual evento altera o prazo ou caracteriza exercício do direito de anular. Nenhum dos nove exige conhecer uma decisão judicial específica para escolher o gabarito. [Lei nº 9.784/1999, arts. 53–55](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm), [Súmula 473 do STF](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=30&sumula=1602) e [caderno do TCU 2025](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/108_TCUTEFC_001_01.pdf).

## Primeiras questões oficiais por referência ao caderno

Cinco itens da matriz com gabarito definitivo válido e regra determinante conferida entraram nas baterias da Câmara. O enunciado é lido no PDF da banca. O site registra a resposta ao item original e apresenta a correção com a origem e o link para o gabarito ao corrigir. A sugestão **Praticar com cadernos** combina itens ainda sem resposta no histórico consultado com questões autorais vinculadas ao mesmo artigo de teoria.

| Caderno | Item | Página do PDF | Prioridade | Gabarito |
| --- | ---: | ---: | --- | --- |
| Câmara 2014, CB2-03 | 73 | 9 | Alta | E |
| TCU 2025, 108_TCUTEFC_001_01 | 108 | 3 | Média | E |
| TCU 2025, 108_TCUTEFC_001_01 | 110 | 3 | Média | E |
| TCU 2025, 108_TCUTEFC_001_01 | 112 | 3 | Alta | C |
| TCU 2025, 108_TCUTEFC_001_01 | 118 | 4 | Alta | E |

Quatro dos cinco itens têm gabarito Errado neste recorte. A sugestão os intercala com autorais para estudar o conteúdo. O conjunto é pequeno e rejeita inferência sobre dificuldade relativa ou distribuição de respostas da prova. O banco não reproduz o texto dos itens oficiais. Cada identidade usa o caderno e o número do item, de modo que a análise possa separar respostas oficiais e autorais sem alterar registros anteriores. [Caderno da Câmara](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/CAMARA14_CB2_03.pdf) · [Caderno do TCU](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/108_TCUTEFC_001_01.pdf).

## Itens da Câmara com edital de 2025 e aplicação em 2026

Foram incluídas cinco referências do caderno comum aos cargos de Analista Legislativo e Técnico Legislativo, código **167_CDNS_CG1_01**, aplicado em 08/03/2026. O catálogo passou a reunir dez localizadores oficiais de três cadernos. As referências ficam na documentação e preservam o vínculo de respostas anteriores. [Caderno oficial](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico) · [Gabarito definitivo](https://cdn.cebraspe.org.br/concursos/CD_25_NS/arquivos/BE7F1F9B1F3F90750D44E63070FDE8505D71F1BADD7F9A2096BB953B32081694.pdf)

| Item | Página no PDF | Tema | Gabarito definitivo |
| --- | ---: | --- | --- |
| 47 | 4 | Desconcentração administrativa | C |
| 58 | 5 | Negligência, dano e dolo na improbidade | E |
| 60 | 5 | Voluntariedade e dolo na improbidade | C |
| 61 | 5 | Autorização legal para renúncia de competência | C |
| 62 | 5 | Alcance da Lei nº 9.784/1999 no Legislativo | E |

O item 47 depende de localizar no contexto a redistribuição de competências dentro da mesma pessoa jurídica. Os itens 58 e 60 formam um contraste entre aplicação da exigência de dolo ao caso e compreensão da diferença entre conduta voluntária e dirigida ao resultado ilícito. Os cinco têm localizador, gabarito definitivo, comentário próprio e vínculo ao edital de Divulgação Institucional. O catálogo contém quatro gabaritos Certo e seis Errado. [Lei nº 8.429/1992](https://www.planalto.gov.br/ccivil_03/leis/l8429.htm) · [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm)

**Fluxo vigente.** As baterias autenticadas exibem os itens autônomos cuja redação integral está disponível, com fonte e gabarito na correção. O item 55 da Câmara de 2026 foi retirado da seleção porque o caso compartilhado havia sido resumido. Sua referência e suas respostas anteriores conservam a identidade de origem. A redação dos autorais calibrados segue a extensão e as exigências das provas de referência.

## Auditoria individual de organização administrativa

O item 47 do caderno da Câmara aplicado em 2026 exige localizar no cenário compartilhado a redistribuição de atribuições entre órgãos internos da mesma pessoa jurídica. A presença de uma fundação no contexto não resolve esse julgamento. Nos onze autorais revisados, o mesmo critério aparece em campi, diretorias, superintendências e concessões. A maioria já declara a presença ou ausência de personalidade jurídica no próprio enunciado. Dois itens exigem classificar em sequência a criação de uma autarquia e a repartição posterior de atribuições entre seus órgãos.

| ID no suplemento, sem o prefixo `cam-dad-` | Operação editorial | Dificuldade |
| --- | --- | --- |
| `variantes-2026-04-1` | Aplicar o critério à reitoria e aos campi | Média |
| `variantes-2026-04-2` | Distinguir execução pela concessionária e titularidade pública | Média |
| `casos-2026-04-1` | Verificar se os campi integram a mesma pessoa | Média |
| `casos-2026-04-2` | Classificar a repartição entre diretorias internas | Média |
| `ampl-2026-04-01` | Classificar a criação de unidades da autarquia | Média |
| `aplicacao-2026-04-01` | Classificar unidades acadêmicas sem personalidade própria | Média |
| `aplicacao-2026-04-03` | Reconhecer a consequência de uma premissa já qualificada | Fácil |
| `dificil-2026-03-1` | Classificar em sequência a criação da autarquia e a divisão interna | Difícil |
| `dificil-2026-04-1` | Separar autonomia administrativa e personalidade jurídica | Média |
| `dificil-2026-04-2` | Classificar a criação da entidade e, depois, de suas diretorias | Difícil |
| `dificil-2026-04-ampliacao-2` | Distinguir circunscrição territorial e criação de entidade | Média |

As variantes de campi repetem a fronteira básica e servem para fixação. A concessão acrescenta uma variável decisiva, a execução por um particular com personalidade própria. Nos dois itens de integração, a inversão do erro entre a primeira e a segunda etapa permite identificar em qual operação ocorreu a confusão. A revisão preservou IDs, enunciados e gabaritos. [Caderno oficial da Câmara](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico) · [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm) · [Constituição Federal](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm)

## Extensão efetiva com o caso compartilhado

A extensão do trecho numerado subestima o volume de leitura de questões com caso compartilhado. Para estimá-lo, normalizei espaços no texto extraído dos PDFs e somei o caso e o comando comum ao trecho numerado de cada item a que se aplicam. A medida descreve a exposição por item. Em uma bateria que apresenta o caso uma única vez, o candidato pode reaproveitar a leitura. Os comandos temáticos sem caso permanecem fora da contagem para preservar as medidas anteriores da matriz.

| Recorte | Itens válidos | Mediana do trecho numerado | Mediana com caso e comando compartilhados | Máximo com caso e comando | Acima de 336 caracteres |
| --- | ---: | ---: | ---: | ---: | ---: |
| Câmara 2014, itens 71–110 | 37 | 146 | 146 | 328 | 0 |
| Câmara aplicada em 2026, itens 47–64 | 18 | 201,5 | 222,5 | 1.407 | 5 |
| TCU 2025, itens 71–75 e 106–120 | 19 | 220 | 264 | 718 | 5 |
| Lote autoral calibrado de Constitucional | 40 | 273,5 | 273,5 | 336 | 0 |

Pontos de extração para reproduzir a medida. Na Câmara aplicada em 2026, o caso de cooperação institucional ocupa **1.119 caracteres** com o comando e se aplica aos itens 47 e 48, na página 4 do PDF. O caso da licença ocupa **669 caracteres** e se aplica aos itens 55 a 57, na página 5. No TCU, o caso de contratação direta ocupa **578 caracteres** e se aplica aos itens 71 a 75, na página 2. Somei um espaço entre o trecho comum e cada afirmação. As contagens excluem itens anulados. [Caderno da Câmara 2014](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/CAMARA14_CB2_03.pdf) · [Caderno da Câmara aplicado em 2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico) · [Caderno do TCU](https://cdn.cebraspe.org.br/concursos/tcu_25_tefc/arquivos/108_TCUTEFC_001_01.pdf)

O lote autoral tem mediana superior às dos recortes oficiais, mas nenhum item alcança a faixa dos casos compartilhados identificados no caderno recente da Câmara e no TCU. A lacuna está na estrutura. O mesmo caso oficial pode combinar fatos relevantes para operações distintas, como separar a personalidade jurídica da fundação da redistribuição de atribuições entre órgãos da própria Câmara. Um item do caso pode exigir classificar a relação interna e outro examinar o que foi atribuído à entidade externa. Para simular essa leitura, os casos autorais devem poder sustentar mais de um julgamento com premissas decisivas distintas. A amostra reúne cargos e tópicos diferentes e não sustenta uma meta universal de comprimento.

## Caso autoral compartilhado de fiscalização parlamentar

Três novos itens usam o mesmo cenário sobre um decreto federal, uma convocação de Ministro e um pedido escrito de informações. A leitura varia de **940 a 993 caracteres por item**, incluindo os parágrafos comuns. A sugestão **Praticar caso compartilhado** mantém os três juntos, com correção ao final. Cada questão também é autônoma quando selecionada em outra bateria.

| Item | Fato decisivo | Julgamento |
| --- | --- | --- |
| Sustação do decreto | A lei dispensou expressamente os municípios da garantia que o decreto passou a exigir | Certo. Exorbitar do poder regulamentar permite a sustação pelo Congresso. |
| Convocação do Ministro | A Comissão convocou um Ministro pessoalmente para tratar de assunto determinado | Certo. O caput do art. 50 inclui a Comissão entre os órgãos competentes. |
| Pedido escrito da comissão | O expediente escrito foi enviado pela comissão, sem encaminhamento pela Mesa | Errado. O prazo e a consequência do art. 50, § 2º, pressupõem encaminhamento pela Mesa. |

A estrutura foi calibrada pelo caso compartilhado dos itens 47 e 48 da Câmara aplicada em 2026. O conteúdo constitucional usa como referências de mecanismo o item 112 do TCU 2025 e o item 76 da Câmara 2014. O caso e as afirmações são autorais. A correção de cada item indica qual mudança de fato alteraria o julgamento. [Caderno da Câmara aplicado em 2026](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico) · [Constituição consolidada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

## Cadernos com autorização didática e amostra de Técnica Legislativa de 2012

A capa do caderno **CAMARA12_CB4_07**, Câmara dos Deputados, Analista Legislativo, atribuição Técnica Legislativa, CESPE/UnB, autoriza reprodução para fins didáticos mediante crédito à fonte. A mesma autorização consta da capa do caderno **CB2-03** da Câmara de 2014. A indicação aparece na área de observações das capas em imagem, motivo pelo qual a busca no texto extraído dos PDFs não a encontrou. A autorização documentada vale para esses cadernos. Os arquivos consultados da Câmara aplicada em 2026 e do TCU 2025 trazem os itens, mas não apresentaram o mesmo aviso nas páginas inspecionadas. [Caderno de 2012, capa](https://cdn.cebraspe.org.br/concursos/CD_12_AT/arquivos/CAMARA12_CB4_07.pdf#page=1) · [Caderno de 2014, capa](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/CAMARA14_CB2_03.pdf#page=1)

Cotejei os itens 32 a 39 da página 4 do PDF de 2012 com o gabarito definitivo do mesmo código. São oito itens válidos à época, com quatro gabaritos C e quatro E. A operação predominante foi literal em quatro, aplicação em dois, distinção em um e exceção em um. A matriz consolidada passa a 86 itens de quatro cadernos, incluindo quatro anulações. Um item do novo recorte recebeu prioridade alta, seis média e um baixa. O item 39 está desatualizado pela EC nº 72/2013. O gabarito histórico foi mantido apenas como registro. [Prova de 2012, itens 32 a 39](https://cdn.cebraspe.org.br/concursos/CD_12_AT/arquivos/CAMARA12_CB4_07.pdf#page=4) · [Gabarito definitivo CB4-07](https://cdn.cebraspe.org.br/concursos/CD_12_AT/arquivos/Gab_definitivo_CAMARA12_CB4_07.pdf) · [Constituição Federal](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm)

O item 38 entrou no catálogo autenticado com o comando da seção e a afirmação integral sobre a nacionalidade exigida de oficial. A correção atribui a fonte e indica o art. 12, § 3º, VI, da Constituição. Os demais itens do recorte ficam documentados na matriz para seleção e revisão.

## Auditoria individual de veto, sanção, promulgação e tramitação

Cotejei 12 itens do banco principal com os arts. 64 a 66 da Constituição, incluindo dez do lote `cam-pl-l029`. O item 80 da Câmara 2014 serviu de referência para a sequência de autoridades na promulgação. Foram atualizados os metadados e a fundamentação de 11 itens. O autoral calibrado sobre duas omissões sucessivas manteve a classificação de integração difícil. Enunciados, gabaritos, IDs e vínculos teóricos permaneceram preservados. [Constituição consolidada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html) · [Caderno CB2-03](https://cdn.cebraspe.org.br/concursos/CD_14_AT/arquivos/CAMARA14_CB2_03.pdf)

| Item | Operação necessária | Dificuldade revista |
| --- | --- | --- |
| `cam-pl-l029-001` | Aplicar o limite do veto parcial à expressão isolada dentro do inciso | Média |
| `cam-pl-l029-002` | Separar o efeito do silêncio na sanção do efeito da omissão na promulgação | Média |
| `cam-pl-l029-003` | Calcular duas maiorias absolutas e verificar ambas as condições | Difícil |
| `cam-pl-l029-004` | Recuperar os fundamentos alternativos do veto | Fácil |
| `cam-pl-l029-005` | Distinguir destinatário constitucional e Casa iniciadora | Fácil |
| `cam-pl-l029-006` | Encadear rejeição do veto e primeira substituição na promulgação | Média |
| `cam-pl-l029-007` | Identificar a última autoridade após as duas omissões sucessivas | Difícil |
| `cam-pl-l029-008` | Enquadrar o STJ na regra dos tribunais superiores sobre Casa iniciadora | Fácil |
| `cam-pl-l029-009` | Identificar a Casa conclusora quando a revisora aprova sem emendas e aplicar a regra de envio | Média |
| `cam-pl-l029-010` | Separar termo inicial e unidade de contagem dos dois prazos | Difícil |
| `cam-revisao-veto-rejeitado-vice-do-senado-na-sequencia` | Verificar se uma única omissão permite saltar a autoridade intermediária | Média |
| `cam-calibrada-const-vice-senado-depois-de-duas-omissoes` | Combinar sanção tácita e duas omissões sucessivas para localizar a autoridade competente | Difícil |

As variantes com uma ou duas omissões preservam uma diferença útil. Quando só o Presidente da República fica omisso, ainda cabe ao Presidente do Senado exercer a competência. Quando ambos ficam omissos nos respectivos prazos, passa-se ao Vice-Presidente do Senado. Nos itens sobre quórum e prazo, a conclusão muda se variar o total da Casa que ficou abaixo do mínimo ou o momento em que o veto foi decidido. Esses são fatos decisivos que podem sustentar novos casos completos.

## Caso autoral de autotutela com datas

A expansão de 25/11 acrescenta três itens inéditos de Direito Administrativo. Um ato federal concede vantagem mensal, o primeiro pagamento ocorre mais tarde e a autoridade impugna a validade antes do quinquênio. A decisão é posterior. O caso testa três operações: escolher o termo inicial conforme o tipo de efeito, relacionar esse termo ao momento em que a autoridade exerceu o direito de anular e classificar a retirada do ato pela natureza do motivo. Cada item repete o contexto integral, inclusive fora da bateria compartilhada. A correção aponta o fato que mudaria o julgamento. Os itens 47 e 48 da Câmara aplicada em 2026 serviram de referência para o formato. O item 110 do TCU de 2025 serviu de referência para a distinção entre anulação e revogação. [Lei nº 9.784/1999, arts. 53 e 54](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm)

## Caso autoral de revisão bicameral

Três itens usam um mesmo cenário com duas proposições. A primeira volta à Câmara com emendas do Senado e permite testar a consequência da alteração feita pela revisora, o prazo específico da urgência e a exceção ao sobrestamento. A segunda é rejeitada pela revisora e exige distinguir o arquivamento daquela proposição da reapresentação da matéria na mesma sessão legislativa. Quarenta e uma assinaturas no Senado só resolvem este último julgamento depois de identificar a Casa que pode formular a proposta e calcular a maioria absoluta. O formato segue o caso compartilhado da Câmara aplicada em 2026, e os itens 91 e 92 da Câmara 2014 servem de referência para prioridade de tramitação e reapresentação. [Constituição consolidada, arts. 46 e 64 a 67](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

## Caso autoral de Decoro Parlamentar

O lote apresenta três julgamentos a partir de dois processos disciplinares. O primeiro exige identificar a autoria partidária e calcular o mínimo de 52 assinaturas para recorrer de decisão terminativa por falta de justa causa. O segundo exige aplicar o marco da instauração à tentativa de retirada da representação e calcular o mínimo de 257 votos para perda do mandato. Os dois limiares incidem sobre os 513 membros da Casa, com funções diferentes no rito. O contexto integral acompanha cada item. [Código de Ética da Câmara, art. 14](https://www2.camara.leg.br/legin/fed/rescad/2001/resolucaodacamaradosdeputados-25-10-outubro-2001-320496-normaatualizada-pl.html) · [Constituição consolidada, art. 55](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

## Caso autoral de sustação em controle externo

Três itens partem de uma fiscalização com um ato corrigido no prazo e dois contratos ainda em execução. O estudante precisa identificar o objeto impugnado, localizar a fase de cada expediente e decidir se o marco de noventa dias foi atingido. A variação decorre do tipo de objeto, do cumprimento da determinação e do tempo de inércia. A redação preserva a expressão constitucional “decidirá a respeito” para o efeito do § 2º. A referência de estrutura são os itens 47 e 48 da Câmara aplicada em 2026, e a referência temática é o item 112 do TCU 2025. [Constituição consolidada, art. 71](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

## Expansão de retestes em Direito Administrativo e Constitucional

O primeiro lote acrescenta 16 itens autorais em oito conceitos. Direito Administrativo recebe avocação, competência indelegável, convalidação e autoexecutoriedade de multas. Direito Constitucional recebe criação de CPI, quórum de PEC, quórum de lei complementar e limites da lei delegada. Cada conceito ganha duas situações independentes vinculadas pelo mesmo identificador didático. As variantes alteram fatos como vínculo hierárquico, natureza da competência, prejuízo a terceiro, apoio parlamentar e base de cálculo de quórum. O formato segue a leitura contextual da amostra Cebraspe e a correção indica o efeito do fato decisivo. [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm) · [Constituição consolidada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

O segundo lote acrescenta 16 itens e amplia o conjunto para 16 conceitos. Em Direito Administrativo, os casos distinguem formulação e execução de políticas, vínculo temporário e cargo efetivo, objeto e motivo de atos e os regimes de criação da autarquia e instituição da empresa pública. Em Constitucional e Regimento, tratam de voto com restrição, substituição no desempate, aprovação senatorial nas escolhas presidenciais para o TCU e quóruns de Câmara e Senado no processo por crime de responsabilidade. Cada tema recebe dois enunciados aplicados com ID próprio e vínculo ao conceito estudado. [Regimento Interno da Câmara](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html) · [Constituição consolidada](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html)

O terceiro lote acrescenta 16 itens, cobrindo sanções na relação contratual, outorga e colaboração, efeitos temporais de nova interpretação e atos da Administração. Em Constitucional e Regimento, acrescenta consequências do recurso improvido, limite material da medida provisória, proteção das informações ligadas ao mandato e finalidade do representante eleito dos empregados. Cada par muda o fato que determina o resultado e conserva o vínculo com o conceito. [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm) · [LINDB](https://www.planalto.gov.br/ccivil_03/decreto-lei/del4657compilado.htm) · [Regimento Interno da Câmara](https://www2.camara.leg.br/legin/fed/rescad/1989/resolucaodacamaradosdeputados-17-21-setembro-1989-320110-normaatualizada-pl.html)
