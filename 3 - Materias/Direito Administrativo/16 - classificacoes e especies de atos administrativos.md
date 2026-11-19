---
articleId: art-10a91f6bf9b53f1a
articleAliases: ["3 - Materias/Direito Administrativo/16 - classificacoes e especies de atos administrativos.md"]
title: "Classificações e espécies de atos administrativos: critérios, atos normativos, ordinatórios, negociais, enunciativos e punitivos"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-16
---

# Classificações e espécies de atos administrativos: critérios, atos normativos, ordinatórios, negociais, enunciativos e punitivos

Uma licença para construir, uma ordem interna de serviço e uma multa administrativa são atos com funções distintas. Primeiro, pergunte **como o ato se forma e produz efeitos**; depois, **qual é seu conteúdo**. Uma licença pode ser, ao mesmo tempo, individual, vinculada e negocial. Esses critérios não se excluem. O nome do documento não determina sozinho seu regime jurídico.

Uma classificação doutrinária tradicional, sujeita a variações entre autores e não fixada taxativamente em lei, reúne cinco **espécies de atos administrativos** no mnemônico **NONEP**:
1. **Atos Normativos** (N);
2. **Atos Ordinatórios** (O);
3. **Atos Negociais** (N);
4. **Atos Enunciativos** (E);
5. **Atos Punitivos** (P).

```mermaid
flowchart TD
    classDef raiz fill:#fff8e7,stroke:#d4a373,stroke-width:2px,color:#2b2b2b;
    classDef especie fill:#faedcd,stroke:#d4a373,stroke-width:1.5px,color:#2b2b2b;
    classDef detalhe fill:#e9edc9,stroke:#ccd5ae,stroke-width:1.5px,color:#2b2b2b;

    A["Espécies de Atos Administrativos<br/>(Mnemônico: NONEP)"]:::raiz

    A --> B["Normativos<br/>(Decretos, regulamentos, resoluções, portarias gerais)"]:::especie
    A --> C["Ordinatórios<br/>(Instruções, circulares, avisos, ordens de serviço, memorandos)"]:::especie
    A --> D["Negociais<br/>(Licença, autorização, permissão, visto, homologação)"]:::especie
    A --> E["Enunciativos<br/>(Certidões, atestados, pareceres, relatórios)"]:::especie
    A --> F["Punitivos<br/>(Multas, interdições, advertências, demissões)"]:::especie

    B --> B1["Normas gerais administrativas<br/>nos limites da Constituição e da lei"]:::detalhe
    C --> C1["Efeitos internos e poder hierárquico"]:::detalhe
    D --> D1["Consentimento administrativo<br/>segundo o regime jurídico aplicável"]:::detalhe
    E --> E1["Atestação fática ou juízo técnico sem comando"]:::detalhe
    F --> F1["Sanções a servidores ou particulares sob fiscalização"]:::detalhe
```

---

## 1. Critérios Fundamentais de Classificação dos Atos

Antes de examinar as espécies substantivas, é imprescindível dominar os critérios estruturais frequentemente exigidos pelo Cebraspe:

### Quanto ao grau de liberdade da autoridade (Vinculados versus Discricionários)
- **Atos vinculados (regrados):** preenchidos os requisitos legais, a autoridade deve adotar o resultado previsto, sem escolher livremente entre deferir e negar. Exemplo: licença para edificar quando todos os requisitos urbanísticos estão preenchidos. Pode haver análise técnica dos fatos, mas ela não autoriza uma recusa por mera conveniência.
- **Atos discricionários:** a lei admite margem de escolha quanto a aspectos da decisão, como o momento da medida ou alternativas legalmente permitidas. Exemplo: autorização precária de uso de praça pública, quando prevista nesse regime. **Discricionariedade não é arbitrariedade:** a decisão continua sujeita à competência, finalidade, motivos e proporcionalidade, passíveis de controle jurídico.

### Quanto aos destinatários (Gerais versus Individuais)
- **Atos Gerais (abstratos ou regulamentares):** não possuem destinatários nominais determinados; dirigem-se a uma coletividade indeterminada em idêntica situação de fato. Sua abrangência não lhes dá, por si só, superioridade hierárquica: esta decorre da competência, da espécie normativa e do ordenamento. Exemplo: regulamento de trânsito ou edital de concurso público.
- **Atos Individuais (concretos):** dirigem-se a indivíduos ou situações jurídicas perfeitamente individualizadas e nominais. Exemplo: decreto de desapropriação de imóvel específico ou portaria de nomeação de servidor.

### Quanto à formação da vontade (Simples, Complexos e Compostos)
Trata-se de uma das distinções mais cobradas em provas de concursos federais:

| Categoria | Definição dogmática | Órgãos envolvidos | Exemplo clássico em jurisprudência |
| :--- | :--- | :--- | :--- |
| **Ato Simples** | Resulta da manifestação de vontade de um **único órgão** (seja ele singular ou colegiado). | Um órgão. | Despacho de deferimento de férias por um chefe de setor; deliberação de um Tribunal de Contas reunido em Plenário. |
| **Ato Complexo** | Resulta da conjugação da vontade de **dois ou mais órgãos diferentes**, cujas manifestações se fundem para formar um **único ato perfeito**. | Dois ou mais órgãos distintos fundindo vontades. | **Concessão inicial de aposentadoria submetida a registro no Tribunal de Contas**: classificação tradicional adotada pelo STF, à luz do art. 71, III, da Constituição. |
| **Ato Composto** | Resulta da manifestação de vontade de **um órgão principal**, mas cuja exequibilidade ou eficácia depende da aprovação, homologação ou visto de **outro órgão acessório**. | Um ato principal + um ato acessório instrumental. | Exemplo hipotético: decisão de dirigente cuja eficácia dependa de aprovação acessória exigida por norma específica. |

```mermaid
flowchart LR
    classDef raiz fill:#fff8e7,stroke:#d4a373,stroke-width:2px,color:#2b2b2b;
    classDef complexo fill:#faedcd,stroke:#d4a373,stroke-width:1.5px,color:#2b2b2b;
    classDef composto fill:#e9edc9,stroke:#ccd5ae,stroke-width:1.5px,color:#2b2b2b;

    A["Formação da Vontade"]:::raiz
    
    A --> B["Ato Complexo<br/>(Órgão 1 + Órgão 2 = Único Ato)"]:::complexo
    A --> C["Ato Composto<br/>(Ato Principal + Ato Acessório de Homologação)"]:::composto

    B --> D["Exemplo: Aposentadoria (Órgão de origem + TCU)"]:::complexo
    C --> E["Exemplo hipotético: decisão sujeita a aprovação acessória"]:::composto
```

A classificação como ato **complexo** da concessão inicial de aposentadoria decorre da jurisprudência do STF, que considera a manifestação do órgão de origem e o registro pelo tribunal de contas. Isso não impede que o benefício produza efeitos antes do registro, conforme o regime aplicável. A **Súmula Vinculante nº 3** trata do contraditório e da ampla defesa no exame pelo TCU, com ressalva para a concessão inicial: **não é sua fonte classificatória**. O **Tema 445 do STF (RE 636.553)** fixa prazo de **cinco anos**, contado da chegada do processo à Corte de Contas, para julgar a legalidade da concessão inicial de aposentadoria, reforma ou pensão. Não se deve usar, como exemplo atual de ato composto, a antiga fórmula de dispensa de licitação "declarada e ratificada": a **Lei nº 14.133/2021**, Lei de Licitações e Contratos Administrativos, prevê no art. 72, VIII, autorização da autoridade competente para a contratação direta.

### Quanto aos efeitos e eficácia (Constitutivos, Declaratórios e Enunciativos)
- **Constitutivos:** criam, modificam ou extinguem uma nova relação jurídica ou direito subjetivo (ex.: demissão, permissão).
- **Declaratórios:** reconhecem situação jurídica preexistente, sem criá-la pelo próprio reconhecimento. **Não existe retroatividade automática para todo ato declaratório**; os efeitos temporais dependem da norma e do instituto. A anulação de ato ilegal segue regime próprio, explicado no artigo sobre extinção dos atos.
- **Enunciativos:** limitam-se a certificar ou atestar um fato constante de registros públicos (ex.: certidão de tempo de contribuição).

---

## 2. Espécies de Atos Administrativos em Espécie (NONEP)

Neste trecho, **espécie** significa um tipo de ato classificado pela sua finalidade e conteúdo. As cinco espécies do esquema NONEP respondem à pergunta **para que serve o ato?** Essa classificação é diferente dos critérios anteriores, que observam, por exemplo, quem participa de sua formação e quem recebe seus efeitos.

### Atos Normativos
Os atos normativos contêm comandos gerais e abstratos expedidos pela Administração Pública com o objetivo de explicitar, fielmente executar ou complementar a lei formal.
- **Decretos e regulamentos:** o art. 84, IV, da **Constituição Federal de 1988** permite ao Presidente expedir decretos para fiel execução das leis. O art. 84, VI, admite decreto autônomo em duas hipóteses: organização e funcionamento da Administração federal, sem aumento de despesa nem criação ou extinção de órgãos; e extinção de funções ou cargos públicos **quando vagos**. Ao contrário do regulamento executivo, o decreto autônomo tem fundamento direto na Constituição, dentro dessas hipóteses.
- **Resoluções e Portarias de caráter geral:** expedidas por colegiados administrativos, ministros de Estado ou dirigentes de autarquias e agências reguladoras no âmbito de sua competência setorial.
- **Regimentos internos:** organizam o funcionamento dos órgãos. O Regimento Interno da Câmara dos Deputados é norma do Poder Legislativo com fundamento constitucional e regimental próprio, e não simples regulamento administrativo do Executivo.

### Atos Ordinatórios
Os atos ordinatórios fundam-se no **poder hierárquico** e visam a disciplinar o funcionamento interno da Administração e a conduta de seus agentes públicos.
- **Características:** produzem efeitos primordialmente *interna corporis*; não obrigam nem vinculam diretamente os particulares que não mantenham relação funcional com o Estado.
- **Instruções e circulares:** podem orientar servidores subordinados. Uma **instrução normativa** também pode veicular normas gerais dentro da competência legal; o nome do documento, isoladamente, não determina que seja ordinatório.
- **Ordens de serviço:** determinações sobre tarefas específicas. Memorandos, ofícios e avisos podem ser apenas **meios de comunicação**, sem constituir decisão administrativa por si sós.

### Atos Negociais (Consentimento Estatal)
Os atos negociais são manifestações **unilaterais de consentimento administrativo**, como licença e autorização. Apesar do nome, não se confundem com contratos: a autoridade decide segundo o regime jurídico aplicável. O pedido do particular não permite negociar livremente os requisitos legais.

As distinções mais cobradas entre os atos negociais são:

| Ato Negocial | Natureza Jurídica | Discricionariedade | Estabilidade | Objeto típico |
| :--- | :--- | :--- | :--- | :--- |
| **Licença** | Em regra, **vinculada**: cumpridos os requisitos legais, a concessão é devida. | Sem juízo livre de conveniência no deferimento. | Não se revoga por mera preferência; outras formas legais de extinção permanecem possíveis. | Licença para construir. |
| **Autorização** | No modelo clássico, **discricionária e precária**. | Escolha limitada pela lei e finalidade pública. | Revogação por interesse público legítimo; indenização pode surgir em hipóteses excepcionais. | Autorização de uso transitório de praça pública, se esse for o regime legal. |
| **Permissão** | **De uso de bem:** no modelo clássico, discricionária e precária. **De serviço público:** modalidade distinta. | Depende da modalidade legal. | Na **permissão de serviço público**, a Lei nº 8.987/1995 exige licitação e **contrato de adesão**, com precariedade e revogabilidade unilateral previstas no art. 40. | Uso de bem público ou delegação contratual de serviço público, conforme a espécie. |
| **Aprovação** | Concordância ou controle exigido pela norma. | Pode envolver exame técnico ou margem de escolha. | Efeitos dependem do regime jurídico. | Aprovação de plano por órgão competente. |
| **Homologação** | Confirma procedimento ou resultado conforme o regime. | **Não é chancela automática em toda hipótese.** | Na licitação, o art. 71 da **Lei nº 14.133/2021** permite sanear, anular, revogar nos casos legais, ou adjudicar e homologar. | Homologação de licitação. |
| **Visto** | Ciência ou verificação segundo norma específica. | Depende da finalidade legal. | O nome não demonstra sozinho aprovação acessória. | Visto interno exigido para conferência. |

```mermaid
flowchart TD
    classDef raiz fill:#fff8e7,stroke:#d4a373,stroke-width:2px,color:#2b2b2b;
    classDef vinculado fill:#faedcd,stroke:#d4a373,stroke-width:1.5px,color:#2b2b2b;
    classDef discricionario fill:#e9edc9,stroke:#ccd5ae,stroke-width:1.5px,color:#2b2b2b;

    A["Atos Negociais Principais"]:::raiz

    A --> B["LICENÇA<br/>(Vinculada se preenchidos requisitos)"]:::vinculado
    A --> C["AUTORIZAÇÃO<br/>(Ato DISCRICIONÁRIO e precário)"]:::discricionario
    A --> D["PERMISSÃO DE USO<br/>(Regime clássico; verificar a lei)"]:::discricionario
    A --> E["HOMOLOGAÇÃO<br/>(Exame conforme legislação específica)"]:::vinculado

    B --> B1["Requisitos preenchidos<br/>direito ao deferimento"]:::vinculado
    C --> C1["Escolha nos limites legais<br/>revogação exige razão legítima"]:::discricionario
```

### Atos Enunciativos
São aqueles em que a Administração não cria, modifica ou extingue direitos, nem manifesta vontade própria impositiva, limitando-se a certificar uma situação existente, atestar um fato ou emitir opinião técnica:
- **Certidões:** cópias fiéis de registros públicos existentes em repartições estatais (ex.: certidão negativa de débitos).
- **Atestados:** declarações da autoridade sobre fatos transitórios que constatam pessoalmente (ex.: atestado médico oficial de capacidade física).
- **Pareceres:** análises técnicas ou jurídicas que orientam decisões. Podem ser *facultativos* (consulta opcional), *obrigatórios* (consulta exigida) ou *vinculantes* (efeito definido em lei). Logo, nem todo parecer é juridicamente irrelevante; consultar o artigo [[3 - Materias/Direito Administrativo/18 - parecer administrativo natureza tipos e responsabilidade do parecerista|parecer administrativo]].
- **Apostilas:** averbações feitas em títulos funcionais para atualização de registros cadastrais ou anotações legais sem alteração substancial da situação jurídica.

### Atos Punitivos
Os atos punitivos impõem sanções administrativas a agentes públicos (fundados no poder disciplinar) ou a particulares (fundados no poder de polícia ou no vínculo contratual administrativo):
- **Sanções disciplinares internas:** demissão, suspensão, advertência, destituição de cargo em comissão e cassação de aposentadoria (Lei nº 8.112/1990).
- **Sanções a particulares:** multas por infração e, no regime da **Lei nº 14.133/2021**, Lei de Licitações e Contratos Administrativos, sanções tipificadas nos arts. 155 e 156. Interdição ou apreensão podem ser **medidas cautelares preventivas**, conforme finalidade e norma, e não necessariamente punição.
- **Garantias:** a **Constituição Federal de 1988, art. 5º, LIV e LV**, exige devido processo legal, contraditório e ampla defesa; a **Lei nº 9.784/1999**, que regula o processo administrativo federal, exige motivação ao impor sanção (art. 50). Medidas cautelares urgentes legalmente justificadas podem admitir contraditório posterior. Nem todo vício formal acarreta, automaticamente, nulidade insanável.

---

## Questões Comentadas (Estilo Cebraspe)

### Questão 1
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
Acerca da classificação dos atos administrativos quanto à formação da vontade, julgue o item a seguir.

> Consoante jurisprudência pacificada do Supremo Tribunal Federal, o ato de concessão inicial de aposentadoria a servidor público é classificado como ato composto, haja vista que a decisão do órgão de origem do servidor é principal e a posterior manifestação do Tribunal de Contas possui natureza instrumental acessória de mera homologação de legalidade.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Errado**  
> **Comentário:** O STF classifica tradicionalmente a concessão inicial de aposentadoria como **ato complexo**, com registro pelo tribunal de contas (Constituição, art. 71, III). A Súmula Vinculante nº 3 versa sobre contraditório e ampla defesa, não sobre essa classificação. O Tema 445 fixa cinco anos desde a chegada do processo à Corte de Contas para julgamento de sua legalidade.

---

### Questão 2
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
No que tange aos atos administrativos negociais, julgue o item subsequente.

> Preenchidos todos os requisitos objetivos exigidos pela legislação municipal e pelas normas de ordenamento urbano, a expedição de licença para edificar consubstancia ato administrativo vinculado e declaratório, gerando direito subjetivo ao administrado e impedindo a sua revogação discricionária por mera conveniência administrativa superveniente.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Certo**  
> **Comentário:** A licença é ato clássico **vinculado**: cumpridos os requisitos legais, há direito ao deferimento, afastada revogação por mero juízo de conveniência. Isso não impede anulação por ilegalidade ou outra extinção prevista em lei.

---

### Questão 3
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
A respeito das espécies de atos administrativos e do poder hierárquico, julgue o item.

> As instruções normativas e as circulares enquadram-se na categoria dos atos ordinatórios e, por decorrerem diretamente do poder hierárquico da Administração, são dotadas de eficácia ultra partes, vinculando indistintamente os servidores públicos e a generalidade dos administrados particulares sem necessidade de lei formal.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Errado**  
> **Comentário:** A hierarquia produz efeitos sobre subordinados, mas não cria deveres ilimitados para particulares (Constituição, art. 5º, II). Uma instrução normativa pode ter caráter geral conforme seu conteúdo; não é necessariamente ato apenas ordinatório. *Ultra partes* significa alcançar pessoas além dos destinatários imediatos, efeito atribuído incorretamente de forma indiscriminada.

---

### Questão 4
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
Julgue o item que se segue, relativo à distinção dogmática entre atos enunciativos e punitivos.

> A certidão funcional emitida por setor de recursos humanos que atesta a contagem de tempo de serviço de servidor para fins previdenciários classifica-se como ato enunciativo, na medida em que a Administração Pública não declara vontade constitutiva, mas tão somente atesta situação fática preexistente constante de seus assentamentos oficiais.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Certo**  
> **Comentário:** A certidão **atesta informação preexistente** em assentamento oficial; não constitui, por si, direito a benefício. A concessão de aposentadoria exige decisão e requisitos legais próprios.

---

### Questão 5
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
Acerca dos atos administrativos discricionários e do controle de legalidade, julgue o item.

> Tratando-se de ato administrativo discricionário, o juízo de conveniência e oportunidade formulado pela autoridade competente constitui matéria insuscetível de qualquer tipo de anulação judicial, mesmo nas hipóteses em que a escolha efetuada transborde os limites legais e afronte manifestamente os princípios da razoabilidade e da proporcionalidade.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Errado**  
> **Comentário:** A discricionariedade existe **dentro** da lei. O Judiciário pode anular escolha que viole finalidade, razoabilidade ou proporcionalidade, sem substituir a opção legítima da autoridade por preferência pessoal (Lei nº 9.784/1999, art. 2º).

---

### Questão 6
*(Inédita: estilo Cebraspe / Câmara dos Deputados – Analista Legislativo)*  
Julgue o item a seguir, referente às espécies de atos negociais e suas prerrogativas de revogação.

> Ao contrário da concessão de licença, a autorização administrativa para exploração de atividade econômica em espaço público possui caráter precário e discricionário, permitindo que a Administração a revogue unilateralmente a qualquer tempo por razões supervenientes de interesse público, sem gerar, como regra geral, dever estatal de indenizar.

**( ) Certo**  
**( ) Errado**

> **Gabarito: Certo**  
> **Comentário:** O item descreve a **regra geral da autorização administrativa clássica**, quando essa for a modalidade legal adotada. Sua precariedade permite revogação motivada por interesse público legítimo. A expressão 'como regra geral' preserva exceções: indenização e proteção de situações jurídicas dependem da lei, do caso e de eventuais danos.

---

## Relações com outros temas

- [[3 - Materias/Direito Administrativo/03 - atos administrativos|Elementos e requisitos de validade do ato administrativo]]: o preenchimento de competência, finalidade, forma, motivo e objeto em cada espécie.
- [[3 - Materias/Direito Administrativo/15 - atributos do ato administrativo presuncao imperatividade autoexecutoriedade e tipicidade|Atributos do ato administrativo]]: incidência diferenciada da imperatividade e autoexecutoriedade nas espécies (NONEP).
- [[3 - Materias/Direito Administrativo/04 - poderes administrativos|Poderes administrativos]]: a relação direta dos atos ordinatórios com o poder hierárquico e dos atos punitivos com o poder disciplinar e de polícia.
- [[3 - Materias/Direito Administrativo/09 - processo administrativo federal|Processo administrativo federal]]: contraditório prévio, motivação obrigatória e impugnações.

## Fontes normativas e doutrinárias

- [Constituição Federal de 1988](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm): arts. 5º, II, LIV e LV; 37; 71, III; 84, IV e VI, sobre legalidade, garantias, registro de aposentadorias e decretos.
- [Lei nº 9.784/1999](https://www.planalto.gov.br/ccivil_03/leis/l9784.htm): processo administrativo federal, princípios (art. 2º) e motivação (art. 50).
- [Lei nº 14.133/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm): Lei de Licitações e Contratos Administrativos, arts. 71, 72, VIII, 155 e 156.
- [Lei nº 8.987/1995](https://www.planalto.gov.br/ccivil_03/leis/l8987cons.htm): concessões e permissões de serviços públicos, arts. 2º, IV, e 40.
- [Lei nº 8.112/1990](https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm): regime dos servidores públicos civis da União, arts. 127 e 128.
- [STF, Súmula Vinculante nº 3](https://portal.stf.jus.br/jurisprudencia/sumariosumulas.asp?base=26&sumula=1184): contraditório no controle pelo TCU.
- [STF, Tema 445, RE 636.553](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=4043019&numeroProcesso=636553&numeroTema=445): prazo de cinco anos no exame de concessão inicial.
- **Doutrina:** Hely Lopes Meirelles, Maria Sylvia Zanella Di Pietro e Celso Antônio Bandeira de Mello, cujas classificações devem ser lidas conforme a abordagem de cada autor.
