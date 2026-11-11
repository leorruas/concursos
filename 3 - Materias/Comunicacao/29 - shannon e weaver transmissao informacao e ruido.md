---
articleId: art-8a0f2cbd3179e564
articleAliases: ["3 - Materias/Comunicacao/29 - shannon e weaver transmissao informacao e ruido.md"]
title: "Shannon e Weaver: transmissão, informação, ruído e limites"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-11
---

# Shannon e Weaver: transmissão, informação, ruído e limites

## Núcleo do conceito

**Pergunta central:** como um sistema pode transmitir uma mensagem de um ponto a outro com fidelidade, mesmo quando há limites de capacidade e interferências no canal? Esse é o problema de engenharia tratado por **Claude E. Shannon em 1948**. **Warren Weaver**, na exposição publicada em 1949, discutiu o significado e o alcance mais amplo dessa teoria para a comunicação.

É importante distinguir as contribuições. O artigo matemático original chama-se *A Mathematical Theory of Communication* e é de **Shannon**. A apresentação conhecida como “modelo de Shannon e Weaver” resulta da circulação conjunta do trabalho técnico de Shannon e da interpretação introdutória de Weaver. A associação dos nomes não autoriza atribuir a ambos, indistintamente, cada fórmula, etapa ou afirmação.

A teoria investiga a **reprodução de uma mensagem escolhida entre alternativas possíveis**. “Informação”, em Shannon, diz respeito à seleção e às probabilidades dos sinais ou mensagens possíveis; não é uma medida da verdade, utilidade cívica, valor moral ou compreensão daquilo que foi comunicado.

Pré-requisitos: [[3 - Materias/Comunicacao/25 - comunicacao informacao e producao de sentido|mensagem, código e meio]] e [[3 - Materias/Comunicacao/26 - teoria modelo escola e paradigma na comunicacao|o que diferencia um modelo técnico de uma teoria explicativa]]. A comparação com Lasswell vem ao final, depois da estrutura.

## Estrutura interna do sistema de comunicação

Shannon distingue **cinco partes essenciais** e apresenta o **ruído como fonte adicional que atua sobre o sinal**.

| Parte | O que faz | Exemplo didático com anúncio em áudio |
| :--- | :--- | :--- |
| **Fonte de informação** (*information source*) | Escolhe ou produz a mensagem dentre possibilidades | Texto do aviso a ser transmitido |
| **Transmissor** (*transmitter*) | Converte a mensagem em um sinal transmissível | Equipamento que codifica o áudio |
| **Canal** (*channel*) | Meio pelo qual circula o sinal | Rede de transmissão de dados |
| **Receptor** (*receiver*) | Reconstrói a mensagem a partir do sinal recebido | Equipamento que decodifica o áudio |
| **Destino** (*destination*) | Ponto, pessoa ou dispositivo a que a mensagem se dirige | Aparelho ou usuário final |

**Fonte não é transmissor:** a escolha do conteúdo e a transformação em sinal são operações distintas. **Receptor não é destino:** um equipamento pode reconstruir dados que serão apresentados a uma pessoa; as duas funções não precisam ser executadas pelo mesmo elemento físico.

**Mensagem não é sinal:** a mensagem é selecionada pela fonte; o transmissor produz o sinal adequado ao canal. No esquema, o sinal recebido pode diferir do enviado por interferências, e o receptor tenta reconstruir a mensagem.

**Ruído** é uma interferência indesejada que compromete o sinal durante o processo de transmissão. O desenho original inclui uma *noise source* ligada ao canal. Falhas elétricas, perdas ou perturbações são exemplos pertinentes. Em aulas de Comunicação Social, a palavra “ruído” é frequentemente ampliada para incompreensão semântica ou barreiras institucionais. Essa ampliação pode ser útil, mas **não deve ser apresentada como definição matemática original de Shannon**.

## O que significa informação: alternativas, probabilidade e entropia

Imagine uma fonte que pode enviar apenas “A” ou “B”, com a mesma probabilidade. Antes de observar a seleção, existem duas possibilidades equivalentes. Quando escolhe uma delas, a informação, no caso idealizado, equivale a **um bit**. Para quatro alternativas igualmente prováveis, a escolha equivale a **dois bits**; para oito, **três bits**. O que muda é a quantidade de possibilidades distinguíveis, não a importância cultural da letra.

A medida geral de incerteza em uma fonte discreta é chamada **entropia**, expressa, em um caso idealizado, por:

**H(X) = −Σ p(x) log₂ p(x)**

Nesta expressão, **p(x)** é a probabilidade de cada símbolo ou evento selecionável e **log₂** é o logaritmo na base 2. A fórmula quantifica a incerteza associada à distribuição de possibilidades. É incluída para esclarecer o conceito; a trilha de Comunicação não pressupõe que o edital exija cálculo matemático dessa expressão.

Se a fonte emite sempre o mesmo símbolo, não há incerteza sobre qual mensagem sairá, e a entropia da escolha é zero. Essa mensagem pode, contudo, ser de enorme importância social para uma pessoa: valor semântico e informação técnica seguem critérios diferentes.

## Canal, capacidade, redundância e fidelidade

**Capacidade do canal** se refere ao limite de transmissão que um meio pode sustentar sob condições especificadas. **Fidelidade** examina em que medida a mensagem é recuperada na outra extremidade. **Redundância** designa repetição ou restrição estatística que, dependendo do sistema, pode ajudar na recuperação diante de erros e do ruído. Repetir uma informação pode auxiliar a transmissão, mas também consome capacidade; sua utilidade depende do modo de codificação e das condições do canal.

A existência de ruído **não implica que toda mensagem será necessariamente perdida**. Um sistema pode incorporar mecanismos de codificação e correção para reduzir a probabilidade de erro. Do mesmo modo, aumentar a potência ou a repetição de sinais não é garantia ilimitada de compreensão humana: a teoria trata primeiramente das condições técnicas de transmissão.

## Três níveis do problema em Warren Weaver

Weaver distingue **três níveis de análise** para discutir a abrangência da comunicação:

**Nível A, técnico:** com que precisão os símbolos podem ser transmitidos? É o nível tratado diretamente pelo núcleo matemático da teoria de Shannon.

**Nível B, semântico:** com que precisão os símbolos transmitidos expressam o significado desejado? O problema da interpretação não desaparece quando os sinais chegam corretamente.

**Nível C, efetividade:** com que eficácia o significado recebido produz a conduta desejada? Mesmo entender corretamente o texto de uma campanha não prova que alguém adotará a ação pretendida.

Esses níveis são **problemas de análise**, não “três etapas consecutivas do sinal” nem componentes adicionais do diagrama técnico. Weaver argumenta que as relações entre eles são relevantes, mas não que uma métrica técnica equivalha automaticamente às outras duas.

## Caso progressivo: mensagem digital institucional

**Situação 1, escolha da mensagem:** o sistema deve transmitir um de oito avisos de agenda igualmente prováveis. A seleção tem três bits de informação no exemplo matemático idealizado. Seu significado institucional não altera esse cálculo.

**Situação 2, muda o canal:** a rede passa a sofrer perdas de pacotes, embora o conteúdo selecionado seja o mesmo. O foco da análise está na transmissão e reconstrução do sinal.

**Situação 3, muda o mecanismo de proteção:** inclui-se um procedimento de detecção e retransmissão de dados. A probabilidade de recuperação pode melhorar sem qualquer mudança na redação do aviso. Esse é um problema predominantemente **técnico**.

**Situação 4, preserva a transmissão e muda a interpretação:** todos recebem “a sessão foi transferida”, mas alguns entendem que o horário mudou e outros que o local mudou. A questão agora é **semântica**, mesmo que a cópia digital seja idêntica.

**Situação 5, preserva o entendimento e muda o objetivo da campanha:** os cidadãos compreendem a convocação, mas não participam. A dificuldade agora se relaciona ao nível de **efetividade** no sentido proposto por Weaver.

## Fronteiras entre modelos

**Shannon × Weaver:** autor do formalismo matemático versus autor da introdução que sistematiza níveis mais amplos. **Fonte × transmissor:** decisão sobre mensagem versus produção do sinal. **Receptor × destino:** reconstrução técnica versus ponto final a que a mensagem se dirige. **Entropia × relevância:** incerteza probabilística versus importância de conteúdo. **Ruído técnico × ambiguidade social:** interferência no sinal versus divergência de sentido.

**Shannon × Lasswell:** Lasswell organiza perguntas sobre um ato de comunicação social, incluindo audiência e efeitos; Shannon oferece um sistema técnico e uma teoria da informação. A dimensão “com que efeito?” de Lasswell não corresponde a uma sexta caixa de Shannon. **Weaver × Lasswell:** o nível C de Weaver trata efetividade, mas não reproduz a estrutura completa das cinco perguntas.

Relações com [[3 - Materias/Comunicacao/06 - comunicacao digital|comunicação digital]], [[3 - Materias/Comunicacao/10 - linguagem simples|linguagem simples]] e [[3 - Materias/Comunicacao/25 - comunicacao informacao e producao de sentido|produção de sentido]].

## Questões C/E inéditas e comentadas

**Item 1:** “No esquema técnico de Shannon, o receptor e o destinatário exercem a mesma função, razão pela qual constituem uma única parte essencial do modelo.”

**Gabarito: Errado.** O receptor reconstrói a mensagem a partir do sinal; o destino é o terminal visado. Podem ser próximos ou estar no mesmo aparelho, mas são funções analíticas distintas.

**Item 2:** “Na formulação matemática de Shannon, a informação pode ser quantificada pela distribuição de probabilidades das mensagens possíveis, sem que essa medida expresse diretamente o valor semântico de cada mensagem.”

**Gabarito: Certo.** A teoria técnica trabalha com escolhas e probabilidades. O item evita confundir entropia com significado ou qualidade social da mensagem.

**Item 3:** “A distinção de Weaver entre problemas técnicos, semânticos e de efetividade permite considerar que uma mensagem pode ser transmitida com fidelidade sem produzir a reação desejada.”

**Gabarito: Certo.** A transmissão e a eficácia comportamental pertencem a níveis analíticos distintos. O melhor distrator seria fazer do êxito técnico uma condição suficiente para êxito persuasivo.

## Cotejo dirigido com a fonte primária: Shannon (1948)

A leitura do **diagrama e do início da seção “The Discrete Channel” de Shannon (1948)** confirma que a arquitetura distingue **fonte de informação, transmissor, canal, receptor e destino**, com a fonte de ruído inserida no canal. Na terminologia do autor, o receptor desempenha uma operação inversa à do transmissor, reconstruindo a mensagem a partir do sinal; o destino é o ente para quem a mensagem se dirige. O próprio texto original caracteriza o problema técnico como reprodução exata ou aproximada de uma mensagem escolhida e explicita que o significado semântico não é o objeto da medida de engenharia.

**Itens conferidos neste recorte:** item 1, **Errado**: receptor e destino não são o mesmo papel no diagrama; item 2, **Certo**: probabilidade e quantidade de informação não equivalem diretamente a relevância semântica. O item 3, sobre os **níveis de Weaver**, **não está incluído neste cotejo da fonte Shannon de 1948**: exige conferência separada no ensaio de Weaver de 1949. Nenhuma inversão de gabarito foi identificada nos itens 1 e 2.

**Fonte primária verificada:** [Shannon, *A Mathematical Theory of Communication* (1948), p. 1–2, diagrama da p. 2](https://www.princeton.edu/~wbialek/rome/refs/shannon_48.pdf), consultado em 11/11/2026. Escopo limitado às passagens indicadas, não revisão de todas as fórmulas do artigo.

## Conferência complementar do item 3: Weaver (1949)

Warren Weaver define três níveis do problema comunicacional em **“Recent Contributions to the Mathematical Theory of Communication”** (1949): **A, técnico**, precisão da transmissão dos símbolos; **B, semântico**, correspondência do significado interpretado com o pretendido; **C, efetividade**, influência do significado recebido sobre a conduta pretendida. Weaver ressalva que os níveis se inter-relacionam e se sobrepõem, de modo que a distinção é analítica, e não separação absoluta entre processos reais.

**Item 3 da seção de C/E: Certo, gabarito mantido.** A transmissão fiel no nível técnico não basta para demonstrar que o destinatário interpretou o sentido pretendido ou adotou a conduta desejada. Isso é compatível com a descrição dos níveis A, B e C de Weaver. **Correção de possível simplificação:** não apresentar os níveis como independentes e isolados, pois Weaver expressamente enfatiza sua inter-relação.

**Fonte primária:** [Weaver (1949), seção 1.2 e início da seção 1.3, reprodução acadêmica da UC Berkeley](https://courses.ischool.berkeley.edu/i218/s15/Weaver_Recent-Contributions.pdf), conferido em 11/11/2026. Esta conferência complementa o cotejo anterior de dois itens com Shannon (1948), encerrando a verificação **dirigida dos três gabaritos do artigo**, sem certificar o restante do texto.

## Aplicação discursiva

Em uma justificativa de comunicação institucional, distinguir problema técnico de entrega, problema de compreensão e problema de resultado. Uma queda no acesso por instabilidade de rede não requer necessariamente a mesma solução que uma publicação ambígua; nenhuma dessas duas correções, isoladamente, comprova engajamento. Usar os níveis de Weaver como **instrumento diagnóstico**, com indicador próprio para cada dimensão.

## Questão real Cebraspe: CNMP 2023, item 52 (11/11/2026)

No [caderno oficial CNMP 2023, Comunicação Social](https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/814_CNMP_003_01.PDF), o **item 52** atribuiu à teoria da informação uma estrutura “emissor – receptor – feedback – mensagem”, como resultado de um modelo circular. O [gabarito definitivo Cebraspe](https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/GAB_DEFINITIVO_814_CNMP_003_01.PDF) assinala **Errado**. A dificuldade é a **troca entre modelos**: o sistema técnico de Shannon não se reduz a uma cadeia circular com feedback obrigatório; a posição de mensagem, transmissor, canal, receptor e fonte de ruído deve ser estudada no modelo adequado. Essa questão é **real, não inédita**. O julgamento oficial foi conferido em ambos os PDFs; o item não demonstra que sistemas reais nunca usem retorno ou controle.

## Heurísticas

Sempre localizar o nome e a data: **Shannon, 1948, transmissão e informação técnica; Weaver, 1949, discussão de níveis técnico, semântico e de efetividade**. Ao encontrar “ruído”, perguntar se a questão fala de perturbação do sinal ou de uma extensão metafórica. Ao encontrar “entropia”, perguntar se está medindo incerteza de uma escolha ou valor de uma mensagem.

## Fontes

- Shannon, Claude E. **A Mathematical Theory of Communication**. *Bell System Technical Journal*, 27, 1948. [Texto original, reprodução hospedada pela Princeton University](https://www.princeton.edu/~wbialek/rome/refs/shannon_48.pdf). Conferidos a introdução, o diagrama e as cinco partes do sistema.
- Weaver, Warren. **Recent Contributions to the Mathematical Theory of Communication** (1949), em *The Mathematical Theory of Communication*, University of Illinois Press. [Reprodução acadêmica de Shannon e Weaver](https://raley.english.ucsb.edu/wp-content/Engl800/Shannon-Weaver.pdf). Conferidos os níveis A, B e C.
- [[2 - Editais/Camara dos Deputados 2026 - Divulgacao Institucional|Edital: teorias, escolas e modelos de comunicação]].

Os exemplos digitais são adaptações pedagógicas contemporâneas dos critérios originais, não descrições literais dos dispositivos históricos analisados pelos autores.
