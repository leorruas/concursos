---
title: "Tabela verdade"
type: "conceito"
status: "ativo"
created: 2026-05-28
updated: 2026-09-11
---
# Tabela verdade

## Núcleo do conceito

Tabela verdade organiza todas as combinações possíveis de valores lógicos de uma proposição composta. Ela funciona como ferramenta de **verificação formal** quando a equivalência ou o valor lógico não está evidente.

Como cada proposição simples pode ser verdadeira (V) ou falsa (F), uma expressão com $n$ proposições simples possui:

$$2^n$$

linhas.

Exemplos:

- 1 proposição → 2 linhas;
- 2 proposições → 4 linhas;
- 3 proposições → 8 linhas.

## Como a FGV cobra

A Fundação Getulio Vargas (FGV) pode usar tabela verdade para:

- verificar equivalências;
- classificar tautologias, contradições e contingências;
- testar valores de proposições compostas;
- identificar o único caso falso de uma condicional;
- calcular a quantidade de linhas de uma tabela.

Na maior parte das questões, reconhecer a regra do conectivo é mais rápido do que construir a tabela completa. Use a tabela como **auditoria** quando houver dúvida entre duas estruturas.

## Conectivos principais

| p | q | $p \land q$ | $p \lor q$ | $p \to q$ | $p \leftrightarrow q$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| V | V | V | V | V | V |
| V | F | F | V | F | F |
| F | V | F | V | V | F |
| F | F | F | F | V | V |

Negação:

| p | $\neg p$ |
| :---: | :---: |
| V | F |
| F | V |

Para o significado e a tradução dos conectivos em linguagem natural, ver [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]].

## Tautologia, contradição e contingência

### Tautologia

É uma proposição **verdadeira em todas as linhas** da tabela.

Exemplo clássico:

$$p \lor \neg p$$

### Contradição

É uma proposição **falsa em todas as linhas**.

Exemplo clássico:

$$p \land \neg p$$

### Contingência

Possui pelo menos uma linha verdadeira e pelo menos uma falsa. A maioria das proposições compostas comuns é contingente.

### Negação de tautologia e contradição

Se uma proposição já é sempre verdadeira ou sempre falsa, basta inverter sua classificação:

- negação de tautologia → contradição;
- negação de contradição → tautologia.

| Estrutura | Classificação | Negação |
| :--- | :--- | :--- |
| $p \lor \neg p$ | tautologia | sempre falsa |
| $p \land \neg p$ | contradição | sempre verdadeira |

Esse controle é útil quando uma questão envolve uma negação externa. Antes de aplicar regras mecanicamente, pergunte se a expressão interna já possui valor lógico fixo.

### Cuidado com frases cotidianas

Nem toda frase que **parece** cobrir todas as possibilidades é uma tautologia formal.

> “Chega no horário ou se atrasa.”

No cotidiano, a frase parece exaustiva, mas pode haver outras situações relevantes, como faltar ou chegar adiantado. Em prova, prefira reconhecer tautologias por estruturas formalmente fechadas, como:

$$p \lor \neg p$$

ou contradições por:

$$p \land \neg p$$

## Como usar a tabela para verificar equivalência

Duas proposições são equivalentes quando suas colunas finais são **idênticas em todas as linhas**.

Exemplo conhecido:

$$p \to q$$

e

$$\neg p \lor q$$

produzem a mesma sequência de valores. Por isso são equivalentes.

As transformações mais cobradas estão concentradas em [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]].

## Tensões e pegadinhas

- **Quantidade de linhas:** conte proposições simples distintas, não ocorrências repetidas.
- **Condicional:** $p \to q$ só é falsa em V → F.
- **Bicondicional:** é verdadeira quando os valores são iguais.
- **Tautologia:** precisa ser verdadeira em todas as combinações, não apenas “parecer sempre verdadeira”.
- **Equivalência:** exige colunas finais idênticas linha por linha.

## Heurísticas

Use tabela verdade quando:

1. duas alternativas parecem estruturalmente equivalentes;
2. você esqueceu uma regra de transformação;
3. a questão pede explicitamente tautologia, contradição ou contingência;
4. a expressão possui poucos termos e a verificação é mais segura do que a intuição.

Se a regra já estiver automatizada, não reconstrua a tabela inteira: em prova, isso tende a custar tempo sem aumentar precisão.