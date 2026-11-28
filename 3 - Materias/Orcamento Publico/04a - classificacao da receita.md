---
articleId: art-f13b65a28d8c4e91
articleAliases: ["3 - Materias/Orcamento Publico/04a - classificacao da receita.md"]
title: "Classificação da receita: natureza, fonte e resultado primário"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-16
aliases:
  - "Natureza da receita orçamentária"
  - "Receita corrente e de capital"
  - "Fonte e destinação da receita"
  - "Receita primária e financeira"
---

# Classificação da receita: natureza, fonte e resultado primário

## Núcleo: primeiro a pergunta, depois a classificação

Imagine uma prefeitura que recebe quatro valores: um imposto pago pelo morador, o aluguel de um prédio público, o preço da venda de um terreno e o dinheiro de um empréstimo. Todos aumentam o dinheiro disponível naquele momento, mas representam operações diferentes. A prefeitura precisa responder **quatro perguntas** para registrá-los: **(1)** a entrada conta como receita do orçamento? **(2)** qual operação gerou o ingresso? **(3)** quais regras permitem ou restringem seu uso? **(4)** a entrada integra o cálculo do resultado primário, usado para acompanhar a situação fiscal sem considerar determinadas operações financeiras? Essas perguntas correspondem, respectivamente, ao **tratamento orçamentário**, à **natureza da receita**, à **fonte/destinação** e ao **indicador de resultado primário**.

Ao examinar a natureza, siga sua **estrutura interna** (categoria econômica → origem → espécie → detalhamentos). Corrente e capital são categorias de natureza; primária e financeira são categorias de resultado fiscal. A classificação doutrinária originária/derivada forma ainda **outro** conjunto, e não um nível adicional da codificação da receita.

**Compare as operações:** o **Imposto Predial e Territorial Urbano (IPTU)** recebido é receita corrente de impostos e, em regra, primária. O **aluguel de prédio público** continua sendo receita corrente, mas sua origem na classificação por natureza é patrimonial. A **venda do prédio** é receita de capital por alienação de bens, em regra primária, com restrições legais de aplicação. Um **empréstimo comum** é receita de capital por operação de crédito e, no indicador fiscal, financeira. Já uma **antecipação de receita orçamentária (ARO)** é empréstimo de curto prazo para suprir falta temporária de caixa: seu ingresso é extraorçamentário. A classificação descreve a operação efetivamente realizada; uma intenção irregular de usar o dinheiro não muda a natureza original do ingresso.

## Receita: categoria econômica e natureza

### Corrente × capital: natureza econômica, não periodicidade

A primeira divisão **por categoria econômica da receita orçamentária** é **receitas correntes × receitas de capital** (Lei nº 4.320/1964, art. 11). Ela identifica a **natureza do ingresso**, não quantas vezes o dinheiro entra no caixa. Essa classificação também não determina, sozinha, se o recurso é livre para gastar ou se integra o resultado primário.

| Categoria | O que abrange | Exemplo de classificação |
| :--- | :--- | :--- |
| **Receita corrente** | Tributos, contribuições, receita patrimonial pela exploração de bens, receitas de serviços e transferências correntes, entre outras | Aluguel de imóvel público: corrente, origem patrimonial; IPTU: corrente, origem impostos |
| **Receita de capital** | Operações de crédito comuns, alienação de bens, amortização de empréstimos concedidos pelo ente e transferências de capital, entre outras | Venda de imóvel público: capital, origem alienação de bens; empréstimo comum: capital, origem operações de crédito |

**Mude apenas uma condição no mesmo imóvel:** receber **aluguel** pelo prédio gera, em regra, receita **corrente patrimonial**; **vendê-lo** gera receita **de capital por alienação de bens**. O aluguel recebido uma única vez permanece corrente; a venda realizada repetidamente não se transforma em receita corrente por causa da frequência. O critério é o **tipo de operação**.

**Atenção aos critérios diferentes:** a **antecipação de receita orçamentária (ARO)** é empréstimo de curto prazo para suprir falta temporária de caixa e constitui ingresso **extraorçamentário**, apesar de ser operação de crédito. Já uma venda de terreno é receita de **capital** e, em regra, **primária** para o cálculo fiscal. E uma receita de capital não obriga que todo gasto financiado por ela seja registrado como despesa de capital: as regras de aplicação e a natureza da despesa precisam ser verificadas separadamente.

### Mapa visual: como classificar uma receita

As classificações abaixo respondem a **perguntas diferentes** sobre o mesmo ingresso. No ramo da natureza, corrente e capital se abrem nas origens que compõem cada categoria; nos demais ramos, cada alternativa mostra uma classificação própria e exemplos. As folhas não são etapas sucessivas: um mesmo ingresso pode receber uma classificação em cada critério. No site, use **ampliar** para explorar o diagrama.

```mermaid
flowchart TB
    R["RECEITA PÚBLICA<br/>Qual critério está sendo perguntado?"]
    R --> N["Natureza<br/>Qual fato originou o ingresso?"]
    R --> F["Fonte / destinação<br/>Quais regras regem a aplicação?"]
    R --> P["Resultado primário<br/>Entra no resultado primário?"]
    R --> O["Tratamento orçamentário<br/>Integra a receita do orçamento?"]
    R --> D["Doutrina<br/>Qual a forma de obtenção?"]
    N --> NC["Corrente<br/>Categoria econômica"]
    N --> NK["Capital<br/>Categoria econômica"]
    NC --> NCI["Impostos, taxas e<br/>contribuições de melhoria<br/>Ex.: IPTU"]
    NC --> NCC["Contribuições<br/>Ex.: contribuição previdenciária"]
    NC --> NCP["Patrimonial<br/>Ex.: aluguel de imóvel"]
    NC --> NCA["Agropecuária e industrial"]
    NC --> NCS["Serviços<br/>Ex.: preço público"]
    NC --> NCT["Transferências correntes<br/>Ex.: custeio de serviço público"]
    NC --> NCO["Outras receitas correntes"]
    NK --> NKO["Operações de crédito<br/>Ex.: empréstimo comum"]
    NK --> NKA["Alienação de bens<br/>Ex.: venda de imóvel"]
    NK --> NKAM["Amortização de empréstimos<br/>Ex.: devolução do principal"]
    NK --> NKT["Transferências de capital<br/>Ex.: recurso para obra"]
    NK --> NKR["Outras receitas de capital"]
    F --> FV["Recursos vinculados<br/>Aplicação conforme norma específica"]
    F --> FL["Recursos não vinculados<br/>Aplicação conforme regras gerais"]
    FV --> FVE["Ex.: transferência vinculada<br/>à finalidade prevista"]
    FL --> FLE["Sem vinculação específica<br/>Regras gerais continuam aplicáveis"]
    P --> PP["Primária<br/>Ex.: IPTU ou venda de terreno"]
    P --> PF["Financeira / não primária<br/>Ex.: empréstimo comum"]
    O --> OO["Orçamentária<br/>Ex.: IPTU, aluguel ou crédito comum"]
    O --> OE["Extraorçamentária<br/>Ex.: ARO ou caução"]
    D --> DO["Originária<br/>Ex.: aluguel ou preço público"]
    D --> DD["Derivada<br/>Ex.: imposto"]
    %% Fallback de alto contraste para Obsidian/GitHub; o site adapta as cores via CSS.
    classDef raiz fill:#f59e0b,stroke:#92400e,color:#111111,stroke-width:2px;
    classDef criterio fill:#fff2d9,stroke:#b45309,color:#3d2207,stroke-width:1.5px;
    classDef opcao fill:#fffbeb,stroke:#b45309,color:#1c1917;
    class R raiz;
    class N,F,P,O,D criterio;
    class NC,NK,NCI,NCC,NCP,NCA,NCS,NCT,NCO,NKO,NKA,NKAM,NKT,NKR,FV,FL,FVE,FLE,PP,PF,OO,OE,DO,DD opcao;
```

**Fronteira para a prova:** corrente/capital pertence à **natureza**; primária/financeira pertence ao **resultado fiscal**; orçamentária/extraorçamentária pertence ao **tratamento do ingresso**. A fonte/destinação identifica restrições e possibilidades de aplicação, não a origem econômica. O par originária/derivada é **doutrinário**, não um nível da codificação oficial.


**Como passar da categoria ao tipo exato de receita:** a classificação por natureza segue níveis. A **categoria econômica** separa corrente e capital. Dentro dela, a **origem** indica a operação que gerou o dinheiro, como impostos ou alienação de bens. A **espécie** especifica uma divisão dentro dessa origem e os detalhamentos identificam receitas com maior precisão. Exemplo: o IPTU é um imposto e pertence às receitas correntes; a venda de terreno está na origem alienação de bens, dentro das receitas de capital. A Lei nº 4.320/1964, art. 11, distingue esses grandes grupos; os manuais vigentes trazem os códigos detalhados. A palavra **origem** nessa estrutura oficial tem sentido diferente da classificação doutrinária **originária/derivada**, explicada adiante.

### Vocabulário das origens da receita: o que efetivamente entra no caixa?

A palavra **receita** descreve um ingresso **para quem recebe**. Um mesmo pagamento pode ser **despesa de um ente** e **receita de outro**. O nome da origem identifica **de onde veio o dinheiro e a operação que o gerou**, não necessariamente onde será aplicado. A exceção importante são as **transferências**, cuja classificação entre corrente e de capital depende da finalidade das despesas que os recursos se destinam a financiar (Lei nº 4.320/1964, art. 11).

| Origem | O que significa | Exemplo e distinção |
| :--- | :--- | :--- |
| **Contribuições** (corrente) | Valores cobrados com fundamento legal específico, como contribuições sociais e de intervenção no domínio econômico | Contribuição previdenciária. Não confundir com **contribuição de melhoria**, tributo classificado com impostos e taxas |
| **Receita patrimonial** (corrente) | Ganho pela exploração ou remuneração de patrimônio público | Aluguel de prédio público ou dividendos de participação societária. **Alugar** o imóvel é diferente de **vendê-lo** |
| **Receita de serviços** (corrente) | Valores cobrados pela prestação de serviços remunerados pelo ente público | Tarifa/preço público por serviço prestado. **Preço público** não é automaticamente **taxa tributária** |
| **Transferência corrente** | Recurso recebido de outra pessoa pública ou privada, **sem contraprestação direta ao transferidor**, destinado a financiar **despesas correntes**, como manutenção e funcionamento | Recurso recebido por município para custear serviços e comprar materiais de consumo em unidades de saúde |
| **Operação de crédito** (capital) | Entrada obtida porque o poder público **contrai uma dívida**, por empréstimo ou emissão de títulos | Estado toma empréstimo para financiar obra: entra dinheiro, mas nasce obrigação de pagar a dívida. A **antecipação de receita orçamentária (ARO)** segue tratamento **extraorçamentário** próprio |
| **Alienação de bens** (capital) | Venda ou outra transferência onerosa de bens ou direitos do patrimônio público, convertendo-os em dinheiro | Prefeitura vende imóvel ou veículo de sua propriedade. A receita **não é aluguel**; o art. 44 da LRF restringe seu uso em despesas correntes |
| **Amortização de empréstimos** (capital) | **Devolução do principal** de empréstimo que o **próprio ente público havia concedido** a alguém | Município havia emprestado R$ 100 mil e recebe R$ 20 mil de principal: isso é receita de capital. **Juros recebidos** são receita corrente na classificação pertinente |
| **Transferência de capital** | Recurso recebido de outra pessoa pública ou privada, **sem contraprestação direta ao transferidor**, destinado a financiar **despesas de capital**, como investimentos ou inversões financeiras | Município recebe recursos vinculados à construção de um hospital, e não ao custeio regular do hospital |

**O que significa “sem contraprestação direta ao transferidor”?** O **transferidor** é quem repassa o dinheiro ao ente que o recebe. **Contraprestação** é um bem ou serviço entregue **em troca do pagamento**, diretamente a quem paga. Numa transferência, o recebedor não precisa fornecer um bem ou serviço ao ente que lhe repassou os recursos. Exemplo: a União transfere recursos a um município para construir uma escola destinada à população. A escola não é uma contraprestação prestada à União.

**Atenção à pegadinha:** ausência de contraprestação direta **não significa ausência de obrigações**. O município pode estar obrigado a aplicar o dinheiro na finalidade prevista, executar a obra e prestar contas à União. **Contraprestação direta ao transferidor** e **obrigação de aplicar e comprovar o uso dos recursos** são conceitos diferentes.

Há ainda **receitas agropecuárias** (exploração econômica de atividades vegetais e animais pelo ente), **industriais** (produção ou comercialização industrial pelo ente) e **outras receitas correntes ou de capital** (ingressos que não se enquadram nas demais origens, segundo o classificador vigente).

**Comparação no mesmo hospital:** receber transferência para comprar medicamentos e manter o atendimento é **transferência corrente**; receber transferência destinada à **construção** do hospital é **transferência de capital**. Em ambos os casos, a categoria é analisada sob a perspectiva do **ente recebedor**. O instrumento e a destinação legal devem ser conferidos: não classificar toda transferência entre governos automaticamente como de capital.

**Outro contraste:** se o Estado **toma** empréstimo, registra **operação de crédito**. Se o Estado **emprestou** e recebe de volta o principal, registra **amortização de empréstimos concedidos**. Se vende um imóvel, registra **alienação**; se apenas recebe aluguel do imóvel, registra **receita patrimonial**. São fatos econômicos diferentes, ainda que todos façam entrar dinheiro.

Para distinguir **origem da receita** de **fonte/destinação**, consulte [[3 - Materias/Orcamento Publico/04 - classificacoes da receita e da despesa#Fonte/destinação de recursos × natureza da receita|as regras de vinculação]]. Para distinguir a **operação de crédito comum** da **ARO**, veja [[3 - Materias/Orcamento Publico/07 - receitas publicas e estagios#Operações de crédito × antecipação de receita (ARO)|o tratamento extraorçamentário]].

### Originária × derivada

**Doutrina jurídica** é o conjunto de estudos, interpretações e conceitos elaborados por especialistas em Direito para compreender e organizar as normas jurídicas. Uma classificação doutrinária ajuda a explicar um fenômeno; **não tem, por si só, a força de uma lei**. A importância da doutrina para a interpretação do Direito é explicada por [Maria Helena Diniz, *Fontes do direito*](https://enciclopediajuridica.pucsp.br/verbetes/fontes-do-direito/).

Na classificação doutrinária tradicional, há **duas categorias básicas: receitas originárias e receitas derivadas**. As **originárias** decorrem, em regra, da exploração do patrimônio ou de atividades econômicas do Estado; as **derivadas** decorrem do poder de imposição, como tributos. A distinção pergunta **de que maneira o Estado obtém o dinheiro**. Já a classificação **oficial por natureza** responde **que operação produziu o ingresso** e possui categoria econômica, origem e espécie, entre outros níveis.

| Fato | Classificação doutrinária | Natureza oficial da receita |
| :--- | :--- | :--- |
| Aluguel de imóvel público | Originária | Receita corrente patrimonial |
| Imposto sobre a propriedade predial e territorial urbana (IPTU) | Derivada | Receita corrente de impostos |
| Venda de imóvel público | Originária, em regra | Receita de capital por alienação de bens |

**Taxa de fiscalização × preço público:** imagine que o município cobre uma **taxa pelo exercício do poder de polícia** ao fiscalizar uma atividade e, separadamente, cobre um **preço público** pela utilização de um estacionamento municipal. Embora ambos envolvam o Estado e possam ser receitas **correntes** na classificação econômica, a taxa é receita **derivada** na doutrina porque é tributo imposto por lei; o preço do estacionamento é, em regra, receita **originária**, pois remunera a exploração de uma atividade ou bem. “Ser cobrado pelo Estado” não basta para classificar um valor como derivado: é preciso identificar **o fundamento jurídico da cobrança**.

**Heurística:** *originária* não é sinônimo de *patrimonial*. A expressão **receita originária** pertence à doutrina; a palavra **origem** na classificação por natureza nomeia outro nível de organização das receitas. Os critérios podem descrever o mesmo recebimento sem conflito. Ver também [[3 - Materias/Orcamento Publico/lembretes-orcamento-publico|Lembretes e distinções para a prova]].

### Receita orçamentária × ingresso extraorçamentário

O **ingresso orçamentário** incorpora a execução da receita e é classificado nas rubricas aplicáveis. Uma **entrada extraorçamentária** tende a ser temporária, com obrigação de devolução ou repasse, sem produzir receita orçamentária no mesmo sentido.

**Operações de crédito** contratadas para financiamento público são, em regra, receitas **orçamentárias de capital**. Já a operação de crédito por **antecipação de receita orçamentária (ARO)** é tratada como ingresso **extraorçamentário**, por sua função específica de gestão de caixa. O fato de as duas operações serem empréstimos não as coloca no mesmo tratamento orçamentário.

**Receita intraorçamentária** é o ingresso decorrente de uma operação entre órgãos ou entidades integrantes dos orçamentos fiscal e da seguridade social do **mesmo ente**, conforme as regras de classificação do MCASP. Por exemplo, uma entidade pública incluída nesses orçamentos paga por um serviço prestado por outra entidade também incluída: para quem recebe, pode haver receita intraorçamentária; para quem paga, despesa intraorçamentária. Essa identificação permite eliminar operações internas na consolidação, evitando contar a mesma movimentação como se fosse um recurso novo para o conjunto. **Intraorçamentária não significa extraorçamentária**: a primeira identifica operação interna entre unidades do mesmo âmbito orçamentário; a segunda não integra a receita orçamentária, como ocorre em regra com cauções e ARO.

Os estágios **previsão, lançamento, arrecadação e recolhimento** pertencem a outra dimensão: cronologia de realização da receita. Uma receita não é “corrente” ou “de capital” porque se encontra num desses estágios.

### Exemplo contrastivo: dois empréstimos, duas classificações

Um ente contrata financiamento para **construir um laboratório durante os próximos exercícios**. A entrada oriunda de operação de crédito comum, observadas as normas pertinentes, constitui **receita orçamentária de capital**. Em outro cenário, o ente realiza uma **operação de crédito por antecipação de receita orçamentária (ARO)** para enfrentar insuficiência **temporária de caixa** enquanto aguarda arrecadação: trata-se de **ingresso extraorçamentário** na classificação aplicável.

As duas operações podem envolver captação de dinheiro, mas a distinção para a prova não depende só da palavra *empréstimo*: a **finalidade e a espécie da operação** determinam seu tratamento. Tampouco se deve confundir o ingresso da ARO com a própria receita tributária que futuramente será arrecadada; são fatos distintos, sujeitos às regras específicas da Lei nº 4.320/1964 e da LRF.

## Fonte/destinação de recursos × natureza da receita

A **natureza** responde: *qual fato econômico originou o ingresso?* A **fonte/destinação** responde: *quais são as regras de aplicação desses recursos e em que despesas poderão ser utilizados?*

A fonte/destinação reúne receitas com **normas de aplicação semelhantes** e é empregada tanto na receita quanto na despesa, permitindo verificar o financiamento de ações e suas vinculações. Uma mesma ação pode ser financiada por fontes distintas, quando legalmente permitido.

Exemplo: uma prefeitura recebe **R$ 50 mil de aluguel** de imóvel público e **R$ 50 mil de transferência com obrigação de financiar determinado projeto**. Os dois ingressos têm naturezas diferentes: o aluguel é receita patrimonial; a transferência recebe a natureza correspondente à sua finalidade e às regras do repasse. A **fonte/destinação** de cada valor informa se há regra específica de aplicação, por exemplo a obrigação de gastar a transferência no projeto. Assim, os mesmos R$ 50 mil não se tornam receitas da mesma natureza apenas porque a destinação de ambos poderia, em outro cenário, financiar uma despesa semelhante. A fonte não é a origem na classificação por natureza.

**Atenção:** a vedação constitucional de vincular receitas de **impostos** tem exceções específicas; a existência do classificador de fonte não autoriza inventar uma vinculação. Ver [[3 - Materias/Orcamento Publico/03 - principios orcamentarios e vedacoes constitucionais|não afetação e suas exceções]].

**Âmbito e versão dos códigos:** o **Manual de Contabilidade Aplicada ao Setor Público (MCASP), 11ª edição**, apresenta orientações contábeis orçamentárias para os entes federativos. O **Manual Técnico de Orçamento (MTO)** detalha as classificações utilizadas na proposta orçamentária federal. No **MTO 2026**, o identificador federal de resultado da receita distingue **primária (1)** e **financeira (0)**. Esses dígitos descrevem esse classificador específico; não são códigos da natureza, nem da fonte/destinação. As tabelas de fonte também variam por ente e exercício. Conferir o ato aplicável antes de transpor um código da União para um município.

## Primária × financeira: efeito no resultado primário

O **identificador de resultado primário** indica se uma receita participa do cálculo do **resultado primário**. Em termos introdutórios, esse resultado compara as receitas primárias com as despesas primárias do período: por exemplo, **R$ 600 mil de receitas primárias menos R$ 450 mil de despesas primárias = superávit primário de R$ 150 mil**, sem considerar as operações classificadas como financeiras. A metodologia oficial do ente e do exercício deve ser consultada para calcular o indicador real. A distinção entre primária e financeira é **independente** da categoria econômica corrente/capital.

Não é correto resolver automaticamente por equivalência:
- toda receita corrente seria primária;
- toda receita de capital seria financeira;
- toda receita financeira seria ingresso extraorçamentário.

Essas proposições confundem **três dimensões diferentes**. Juros, financiamento e operações de capital precisam ser identificados pelas regras específicas do indicador. Consulte [[3 - Materias/Financas Publicas/financas-publicas|Finanças Públicas]] para o cálculo e a interpretação dos resultados fiscais.

### Caso progressivo: a escola, a dívida e o resultado fiscal

A prefeitura precisa construir uma escola. Se contrata um **empréstimo comum** para financiar a obra, registra **receita orçamentária de capital**, na origem operações de crédito. Se contrata uma **ARO** para cobrir falta temporária de caixa enquanto aguarda a arrecadação, tem **ingresso extraorçamentário**. O fato de ambos exigirem devolução não permite classificá-los igualmente.

Agora altere a operação: o município **aluga** um imóvel de sua propriedade. O aluguel é **receita corrente patrimonial**; a receita também pode ser denominada **originária** na classificação doutrinária. Se **vende** o imóvel, registra **receita de capital por alienação de bens**. Nesse segundo caso, a natureza da entrada permanece a mesma ainda que o gestor pretenda usá-la indevidamente: a restrição à aplicação em despesa corrente, com a exceção legal de previdência, é matéria do **art. 44 da LRF**, observada na destinação dos recursos.

Por fim, uma mesma receita pode ser **de capital e primária** (alienação de bem, em regra) ou **de capital e financeira** (operação de crédito comum). A receita de juros de aplicação financeira costuma ser **corrente e financeira**, enquanto o IPTU é **corrente e primária**. As duas duplas têm critérios próprios: corrente/capital é categoria econômica; primária/financeira diz respeito ao resultado fiscal.

| Ingresso | Tratamento/natureza | Resultado primário, em regra |
| :--- | :--- | :--- |
| IPTU | Receita orçamentária corrente, impostos | Primária |
| Aluguel de prédio público | Receita orçamentária corrente, patrimonial | Primária |
| Venda de terreno | Receita orçamentária de capital, alienação de bens | Primária |
| Empréstimo comum | Receita orçamentária de capital, operação de crédito | Financeira |
| ARO para insuficiência temporária de caixa | Ingresso extraorçamentário | Não é receita orçamentária primária |

Esse quadro é um **contraste entre critérios**, e não autorização para usar livremente os recursos. Para cada ingresso, conferir a fonte/destinação e as restrições legais efetivas.

## Questões comentadas: distinções entre conjuntos (treino didático C/E)

**Item 1.** Como a alienação de um bem público gera receita de capital, seu ingresso é necessariamente financeiro para efeito do resultado primário. **Gabarito: Errado.** A venda de um terreno é **receita de capital** porque envolve alienação de bens, mas, em regra, também é **receita primária** no cálculo fiscal. A expressão *necessariamente financeiro* mistura a categoria econômica (corrente/capital) com o indicador de resultado primário (primária/financeira). O valor só será tratado corretamente depois de examinar cada classificação por seu próprio critério.

**Item 2.** O ingresso de operação de crédito comum e o de ARO podem receber o mesmo tratamento orçamentário apenas porque ambos exigem devolução. **Gabarito: Errado.** Os dois empréstimos criam obrigação de devolver dinheiro, mas têm **tratamentos orçamentários diferentes**. O empréstimo comum entra, em regra, como **receita orçamentária de capital**. A ARO, usada para cobrir falta temporária de caixa durante o exercício, é **ingresso extraorçamentário**, por exceção legal. A necessidade de devolução não basta para determinar a classificação.

Itens inéditos e didáticos, sem alegação de calibração com prova real.

## Relações e fontes

- [[3 - Materias/Orcamento Publico/04 - classificacoes da receita e da despesa|Mapa transversal de classificações]].
- [[3 - Materias/Orcamento Publico/03 - principios orcamentarios e vedacoes constitucionais|Princípios e não afetação de impostos]]; [[3 - Materias/Orcamento Publico/07 - receitas publicas e estagios|Estágios da receita]].
- [MTO 2026, 7ª versão (23/03/2026), capítulo 3, classificação da receita](https://www1.siop.planejamento.gov.br/mto/lib/exe/fetch.php/mto2026%3Amto2026.pdf); [STN, fontes/destinação por exercício](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/federacao/fonte-ou-destinacao-de-recursos).
- [Lei nº 4.320/1964, art. 11](https://legis.senado.leg.br/norma/546169/publicacao/34620275); [LRF, art. 44](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm); [MTO 2027, 3ª versão (07/07/2026), classificação da receita (cap. 3)](https://www1.siop.planejamento.gov.br/mto/doku.php/mto2027); [MCASP 11ª edição](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/manuais/manual-de-contabilidade-aplicada-ao-setor-publico-mcasp-1).

