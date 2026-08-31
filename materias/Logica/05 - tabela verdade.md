---
title: "Tabela verdade"
type: "conceito"
status: "ativo"
created: 2026-05-28
updated: 2026-05-28
---
# Tabela verdade

## Núcleo do conceito
Tabela verdade é uma estrutura usada para representar todos os valores lógicos possíveis de uma proposição composta.

Como a lógica proposicional trabalha com dois valores:
- verdadeiro (V)
- falso (F)

a tabela verdade organiza todas as combinações possíveis entre proposições simples e mostra o comportamento lógico da expressão resultante.

## Como isso aparece em prova
A banca utiliza tabela verdade para:
- verificar equivalências lógicas
- identificar tautologias
- identificar contradições
- analisar implicações
- calcular quantidade de linhas
- testar valor lógico de proposições compostas

## Quantidade de linhas
A quantidade de linhas de uma tabela verdade é dada por:

2ⁿ

onde:
- n = número de proposições simples

Exemplos:
- 1 proposição → 2 linhas
- 2 proposições → 4 linhas
- 3 proposições → 8 linhas

## Conectivos principais

### Conjunção (∧)
p ∧ q

Só é verdadeira quando ambas as proposições forem verdadeiras.

| p | q | p ∧ q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

### Disjunção (∨)
p ∨ q

Só é falsa quando ambas forem falsas.

| p | q | p ∨ q |
|---|---|---|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

### Implicação (→)
p → q

Só é falsa quando:
- p = verdadeiro
- q = falso

| p | q | p → q |
|---|---|---|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

### Negação (¬)
¬p

Inverte o valor lógico da proposição.

| p | ¬p |
|---|---|
| V | F |
| F | V |

## Tautologia, contradição e contingência

### Tautologia
Proposição que é sempre verdadeira.

Exemplo:
p ∨ ¬p

### Contradição
Proposição que é sempre falsa.

Exemplo:
p ∧ ¬p

### Contingência
Proposição que possui linhas verdadeiras e falsas.

## Tensões e pegadinhas
Erro comum:
achar que a implicação funciona como “causa”.

Na lógica proposicional:
p → q

só é falsa quando:
- p é verdadeiro
- q é falso

Todos os outros casos são considerados verdadeiros.

## Notas de raciocínio
Tabela verdade transforma interpretação em verificação formal.

Quando houver dúvida:
- construa a tabela
- compare linha por linha
- observe o comportamento da proposição
