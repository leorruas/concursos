---
title: "Proposição"
type: "conceito"
status: "ativo"
created: 2026-05-25
updated: 2026-09-11
---
# Proposição

## Núcleo do conceito

Proposição é uma sentença declarativa **fechada**, capaz de receber um valor lógico: verdadeira (V) ou falsa (F). O ponto central não é saber se a frase é verdadeira no mundo real, mas verificar se ela está completa o suficiente para poder ser julgada.

| Estrutura | É proposição? | Por quê? |
| :--- | :---: | :--- |
| “2 + 2 = 5” | Sim | é falsa, mas pode ser julgada |
| “Amanhã vai chover” | Sim | admite valor lógico, ainda que desconhecido agora |
| “x + 2 = 5” | Não | depende do valor de uma variável livre |
| “Feche a porta.” | Não | é uma ordem, não uma afirmação |
| “Qual é o cargo?” | Não | é uma pergunta |
| “Existe um número primo maior que 10” | Sim | o quantificador fecha a afirmação |

A pergunta útil em prova é:

> **Esta frase já está estruturalmente completa para ser julgada como verdadeira ou falsa?**

## Como a FGV cobra

A Fundação Getulio Vargas (FGV) pode misturar frases declarativas com perguntas, ordens, desejos, sentenças abertas e estruturas quantificadas. O distrator costuma explorar a confusão entre **ser uma proposição** e **ser uma afirmação verdadeira, objetiva ou plausível**.

Uma proposição pode ser falsa, absurda ou factualmente desconhecida. O que importa é a possibilidade lógica de atribuir-lhe V ou F.

## O que não é proposição

Em questões de lógica de concursos, normalmente ficam fora do conjunto das proposições:

- **interrogativas:** “O edital saiu?”;
- **imperativas:** “Estude hoje.”;
- **exclamativas:** “Que excelente resultado!”;
- **optativas ou desejos:** “Tomara que eu seja aprovado.”;
- **sentenças abertas:** expressões que dependem de variável ou parâmetro ainda não determinado, como $x > 5$;
- **paradoxos autorreferentes:** estruturas como “Esta frase é falsa”, que não recebem valor lógico de forma estável no modelo clássico usado em prova.

### Sentença aberta

Uma sentença aberta contém pelo menos um elemento cujo valor ainda precisa ser determinado.

> “x é par.”

Enquanto $x$ estiver livre, não há uma única afirmação para julgar. Se definirmos $x=4$, a sentença se torna verdadeira; se $x=5$, torna-se falsa.

Por isso:

$$x \text{ é par}$$

não é proposição enquanto $x$ permanecer livre.

## Como uma sentença aberta se fecha

Há duas formas principais.

### Atribuição de valor

> “x é maior que 2”, com $x=5$.

A expressão passa a ser avaliável.

### Quantificação

> “Todo número x é maior que 2.”  
> “Existe um número x maior que 2.”

Nos dois casos, a variável deixa de estar livre e passa a ser controlada por um quantificador. A frase torna-se proposição, ainda que possa ser verdadeira ou falsa.

Para `todo`, `algum`, `nenhum` e suas negações, ver [[3 - Materias/Logica/03 - quantificadores|Quantificadores]].

## Proposição não é sinônimo de verdade

> “2 + 2 = 5.”

É proposição e é falsa.

> “Todos os projetos públicos terminam antes do prazo.”

Também é proposição: a estrutura está fechada e pode, em princípio, ser julgada. A plausibilidade da frase não altera sua natureza lógica.

Se a questão não fornece dados para descobrir o valor real da sentença, não invente contexto. Pode ser suficiente reconhecer apenas que ela **é uma proposição**.

## Proposições compostas

Proposições simples podem ser combinadas por conectivos:

- `e` — conjunção;
- `ou` — disjunção;
- `se... então` — condicional;
- `se e somente se` — bicondicional;
- `não` — negação.

> “O sistema está disponível e o usuário está autenticado.”

Se cada parte é uma proposição, a combinação também forma uma proposição composta. Para as regras dos conectivos, ver [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]].

## Princípios clássicos

A lógica clássica usada em concursos trabalha com três ideias básicas:

1. **Identidade:** uma proposição é idêntica a si mesma ($p \equiv p$).
2. **Não contradição:** $p$ e $\neg p$ não podem ser verdadeiros simultaneamente.
3. **Terceiro excluído:** dentro do sistema bivalente, uma proposição é verdadeira ou falsa.

Esses princípios ajudam a entender por que uma proposição precisa admitir valor lógico determinado dentro do modelo.

## Tensões e pegadinhas

- **Falso ainda é proposição:** valor lógico falso não transforma a sentença em aberta.
- **Desconhecido não é aberto:** “amanhã vai chover” continua sendo proposição mesmo que ainda não saibamos seu valor factual.
- **Quantificador fecha variável:** `x é par` é aberto; `existe x que é par` é fechado.
- **Contradição continua sendo proposição:** $p \land \neg p$ é sempre falsa, mas é uma proposição perfeitamente fechada.
- **Não use uma palavra isolada como critério:** a presença de `x`, `ele`, `ela` ou outro termo depende de como o enunciado definiu seu referente. O teste seguro é perguntar se ainda existe algum parâmetro livre que impeça o julgamento lógico.
- **Não confunda subjetividade com abertura:** o critério de prova é estrutural, não uma avaliação sobre a qualidade ou objetividade da frase.

## Exemplos comentados

### Exemplo 1 — variável livre

> “x é maior que 10.”

Não é proposição enquanto o valor de $x$ não estiver determinado ou quantificado.

### Exemplo 2 — quantificador fecha a variável

> “Existe um número maior que 10.”

É proposição. A frase afirma existência e já pode ser julgada.

### Exemplo 3 — frase falsa, mas fechada

> “Todo número natural é ímpar.”

É proposição e é falsa. O erro seria confundir falsidade com ausência de valor lógico.

### Exemplo 4 — contexto insuficiente para saber V ou F

> “Todo funcionário remoto utiliza computador.”

A frase é proposição. Sem dados sobre a organização, talvez não seja possível determinar seu valor factual; isso não altera sua classificação lógica.

## Protocolo de revisão rápida

1. **A frase afirma algo?** Se for pergunta, ordem, exclamação ou desejo, normalmente não é proposição.
2. **Há variável ou parâmetro livre?** Se sim, é sentença aberta.
3. **A variável foi definida ou quantificada?** Se sim, a estrutura pode estar fechada.
4. **A frase pode ser V ou F?** Se sim, trate-a como proposição.
5. **Não tente decidir a verdade factual se a questão só pede classificação.**

## Relações com outros temas

- [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]]: formação de proposições compostas.
- [[3 - Materias/Logica/03 - quantificadores|Quantificadores]]: fechamento de sentenças abertas por `todo`, `algum`, `nenhum` e `existe`.
- [[3 - Materias/Logica/05 - tabela verdade|Tabela verdade]]: cálculo do valor lógico de proposições compostas.

## Heurísticas

Para classificar uma frase, não pergunte primeiro “isso é verdadeiro?”. Pergunte:

> **Consigo atribuir V ou F sem precisar preencher alguma lacuna estrutural?**

Se sim, é proposição. Se ainda há uma variável livre ou a frase nem sequer afirma algo, não é.