---
title: "Proposição"
type: "conceito"
status: "ativo"
created: 2026-05-25
updated: 2026-05-29
---
Proposição é uma **sentença fechada** que pode receber um valor lógico, isto é, pode ser classificada como ==**verdadeira ou falsa**==. **O critério não é a verdade da frase**, mas a possibilidade de avaliação. A distinção central não está em depender ou não de contexto, mas em estar **estruturalmente completa**.

Uma sentença fechada permite imaginar cenários em que é verdadeira ou falsa, mesmo que não saibamos qual é o caso real. Já sentenças abertas contêm **variáveis ou elementos indefinidos** (termos cujo valor ou referente não foi determinado) e, por isso, ainda não podem ser avaliadas.

### Os três princípios fundamentais da lógica
Para que uma proposição seja válida na lógica proposicional, ela deve obedecer a três regras básicas:
1. **Princípio da identidade**: Uma proposição é igual a ela mesma ($p \equiv p$).
2. ==**Princípio da não-contradição**: Uma proposição não pode ser verdadeira e falsa ao mesmo tempo ($\neg(p \land \neg p)$).==
3. **Princípio do terceiro excluído**: Uma proposição só pode ser verdadeira ou falsa, não existindo um terceiro valor lógico intermediário.

## Como isso aparece em prova
A banca costuma apresentar listas de frases para classificar (dizendo quais são proposições e quais não são) ou embutir essa distinção dentro de questões maiores de lógica proposicional. O padrão recorrente é misturar frases completas com expressões que possuem variáveis (abertas), além de incluir frases subjetivas ou paradoxos para induzir ao erro.

O erro mais comum é decidir com base em “parece verdadeiro” ou “parece objetivo”. O reconhecimento correto depende de identificar se a estrutura está **fechada e avaliável**.

## O que NÃO é proposição (o grupo das excluídas)
Para fins de prova de concurso, as seguintes sentenças **não** são consideradas proposições:
- **Interrogativas** (perguntas): "Qual é o cargo?"
- **Exclamativas** (sentimentos/reações): "Excelente edital!"
- **Imperativas** (ordens/pedidos): "Estude hoje."
- **Optativas** (desejos): "Espero que eu passe."
- ==**Sentenças abertas**: Contêm variáveis não definidas (ex: "Ele foi aprovado" - quem é ele?; "$x > 5$").==
- ==**Paradoxos**: Frases autodestrutivas que geram contradição insolúvel (ex: "Esta frase é falsa").==

## Tensões e pegadinhas
A principal confusão está em associar proposição a objetividade. Frases subjetivas, como “joão é inteligente”, ainda são proposições porque podem ser consideradas verdadeiras ou falsas dentro de um contexto.

==Já expressões com variável, como “x é inteligente”, não são proposições porque não permitem avaliação sem definição adicional. O problema não é a subjetividade, mas a **abertura estrutural**.==

Outra tensão aparece em frases estruturalmente completas, mas semanticamente problemáticas, como “o atual rei do brasil é careca”. Mesmo sem referente real, a lógica de concurso considera isso uma proposição, pois a estrutura está fechada. Isso mostra que o critério é **operacional, não filosófico**.

Um ponto mais avançado que começa a aparecer em prova é quando a banca esconde a abertura estrutural por meio de pronomes como "ele", "ela", "aquele" ou "aquele lugar" sem contexto prévio. Nesses casos, o critério não deve ser “soa como frase”, mas sim ==“há algum elemento indefinido aqui?”. Se houver e não houver menção anterior na questão a quem o pronome se refere, é uma **sentença aberta**.==

### Contradição não anula proposição
Uma proposição pode ser falsa por conter uma condição impossível, mas isso não a torna uma sentença aberta.

Exemplo:
> “existe x tal que x > 0 e x < 0”

A estrutura está fechada, pois há quantificador. A proposição é falsa porque a condição é impossível, não porque falta informação.
- **Erro comum**: confundir impossibilidade/contradição com ausência de valor lógico (tratar como não proposição).

### Proposições em linguagem natural (ausência de dados de contexto)
Em questões contextualizadas, a banca muitas vezes não fornece informações suficientes para avaliar se a proposição é verdadeira ou falsa na realidade.
Nesses casos, o candidato deve apenas julgar se a estrutura é uma proposição, sem tentar inventar ou inferir seu valor lógico com base no mundo real.

Exemplo:
> “todo funcionário que trabalha remoto utiliza computador”

Não sabemos a política real da empresa fictícia da questão. Como não há dados factuais para julgar verdadeiro ou falso, a classificação correta em prova é **apenas marcar que é uma proposição**, sem tentar decidir se é V ou F.
- **Erro comum**: usar conhecimento prático ou plausibilidade do mundo real para forçar o julgamento de veracidade da frase.
- **Regra prática**: se a questão não traz dados que permitam validar a frase factualmente, identifique se é proposição e não tente adivinhar se é V ou F. A lógica de concurso avalia estrutura de fechamento, não realidade empírica.

### Regras condicionais são proposições
Frases no formato “se... então...” representam proposições estruturalmente fechadas, mesmo quando descrevem regras abstratas ou comportamentos hipotéticos de sistemas.

Exemplo:
> “se um cliente compra mais de 10 itens, então ele recebe desconto”

Essa frase não depende de um cliente específico (há um quantificador universal implícito: "todo cliente $x$ que compra..."). Ela expressa uma relação lógica geral entre condições, podendo ser avaliada como verdadeira ou falsa dentro de um sistema de regras.
- **Erro comum**: tratar regras gerais do tipo "se... então..." como se fossem sentenças abertas (por causa do sujeito indeterminado "um cliente").

### Proposição não depende de plausibilidade
Uma frase pode parecer absurda, improvável ou inverídica no mundo real e ainda assim ser classificada como uma proposição válida.

Exemplo:
> “todos os projetos são lucrativos e têm prazo curto”

A estrutura está perfeitamente fechada pelo quantificador universal ($\forall x$). Trata-se de uma proposição, independentemente de sua plausibilidade prática.
- **Erro comum**: confundir "soa muito falso ou absurdo" com "não é proposição".

### Heurística para linguagem natural
Para não errar na transição entre linguagem comum e lógica, pergunte se a frase:
1. Afirma algo sobre **todos** ("todo", "cada", "qualquer");
2. Afirma algo sobre **alguns** ("existe", "algum", "pelo menos um");
3. Estabelece uma **regra geral** ("se... então...").

Se atender a qualquer um dos três critérios, ela é estruturalmente fechada e deve ser tratada como **proposição**. A análise deve focar na estrutura, nunca na plausibilidade.

## Exemplos comentados
- “2 + 2 = 5” é proposição, mesmo sendo falsa, pois pode ser avaliada.
- “x + 2 = 5” não é proposição, pois depende de um valor para x.
- ==“feche a porta” não é proposição, pois não pode ser classificada como verdadeira ou falsa.==
- ==“amanhã vai chover” é proposição, pois admite avaliação, mesmo que futura.==
- “existe um número primo maior que 10” é proposição, pois a estrutura afirma existência e não depende de uma variável aberta específica.
- "Ele é um excelente juiz" não é proposição (sentença aberta), pois o pronome "Ele" funciona como uma variável não especificada.
- "Esta frase é mentira" não é proposição, pois é um paradoxo.

## Notas de raciocínio
Sempre que surgir dúvida, o foco deve ser deslocado do conteúdo para a estrutura. A pergunta não é “isso é verdadeiro?” nem “isso é objetivo?”, mas ==**“isso já está completo o suficiente para ser julgado?”**==.

Se houver variável ou elemento indefinido, a frase está aberta e não entra. Se a estrutura estiver fechada, mesmo com ambiguidade ou incerteza, deve ser tratada como proposição.

==Um ajuste importante: nem toda indeterminação invalida a proposição.== Expressões como “existe um número” ou "alguém é feliz" ainda são proposições porque afirmam algo completo (quantificadores). O que invalida é a dependência direta de uma variável não definida.

A heurística mais segura é: procurar por **abertura estrutural**, não por ambiguidade de sentido.

### Fluxo correto de resolução
Ao resolver questões, o processo deve seguir uma ordem fixa:
1. **Verificar se é proposição** (estrutura fechada).
2. **Se for, avaliar se é verdadeira ou falsa** (valor lógico).

> [!IMPORTANT]
> Parar na etapa 1 quando a questão pede valor lógico leva a erros de bobeira (decisão de prova).

---

# Proposição (versão mastigada)

## Núcleo do conceito
Proposição é qualquer frase que você consiga ler e responder com **"Verdadeiro"** ou **"Falso"**.
Se você não consegue dar essa resposta de forma lógica (mesmo que você não saiba a resposta na vida real), **não é proposição**.

## O filtro rápido de exclusão (NÃO é proposição se for...)
1. **Pergunta (?)** -> "O edital saiu?"
2. **Ordem ou pedido (!)** -> ==“feche a porta” não é proposição, pois não pode ser classificada como verdadeira ou falsa.==
3. **Exclamação (!)** -> "Que ótimo!"
4. **Desejo** -> "Quero passar no concurso."
5. **Sentença aberta (com incógnita)** -> "x + 2 = 5" ou "Ele é culpado" (Quem é "x"? Quem é "ele"?).
6. **Paradoxo** -> "Eu estou mentindo."

## A regra de ouro das sentenças abertas
- Se tem letra matemática livre ($x$, $y$) ou pronomes apontando para o nada (Ele, Aquele, Ela), é **sentença aberta** (NÃO é proposição).
- Se a banca definiu quem é a pessoa antes, ou se a frase usa expressões como "Qualquer que seja", "Para todo", "Existe" (quantificadores), ela **deixa de ser aberta** e **vira proposição**!

> [!IMPORTANT]
> **Atenção — Divergência em Provas (O caso do "Ele/Ela")**: 
> ==Embora estruturalmente pronomes sem referente claro criem sentenças abertas (como *"Ele é juiz"*), em alguns simulados e bancas a frase *"Ele foi aprovado"* é classificada como proposição porque é declarativa e conceitualmente admite julgamento de Verdadeiro/Falso. Fique atento ao padrão específico da banca do concurso.==


## Exemplos rápidos
- "A Terra é plana." -> **Proposição** (é Falsa, mas dá para julgar).
- ==“amanhã vai chover” é proposição, pois admite avaliação, mesmo que futura.==
- "Ela é médica." -> **Sentença aberta** (Quem é ela?).
- "Existe uma mulher que é médica." -> **Proposição** (usou quantificador).
- "x é menor que 10." -> **Sentença aberta** (Quem é x?).
- ==Já expressões com variável, como “x é inteligente”, não são proposições porque não permitem avaliação sem definição adicional==.

## Resumo mental
Quando a banca te der uma lista de frases, pergunte: ==**“isso já está completo o suficiente para ser julgado?”**== 
Se tiver algum ponto de interrogação, ordem, sentimento ou sujeito escondido sem nome próprio ou referência, **descarte imediatamente**.
