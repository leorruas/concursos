---
title: "Equivalências e negações lógicas"
type: "conceito"
status: "ativo"
created: 2026-05-26
updated: 2026-09-11
---
# Equivalências e negações lógicas

## Núcleo do conceito

Esta nota começa depois da tradução da frase. Se a estrutura já foi identificada como $p \to q$, $p \land q$ ou $p \lor q$, o objetivo aqui é saber **como transformá-la ou negá-la sem alterar o que ela significa**.

| Operação | Regra |
| :--- | :--- |
| Contrapositiva | $p \to q \equiv \neg q \to \neg p$ |
| Condicional em disjunção | $p \to q \equiv \neg p \lor q$ |
| Negação da condicional | $\neg(p \to q) \equiv p \land \neg q$ |
| De Morgan — negar `e` | $\neg(p \land q) \equiv \neg p \lor \neg q$ |
| De Morgan — negar `ou` | $\neg(p \lor q) \equiv \neg p \land \neg q$ |
| Dupla negação | $\neg(\neg p) \equiv p$ |
| Negação da bicondicional | $\neg(p \leftrightarrow q)$ = exatamente uma das duas é verdadeira |

A tradução da linguagem natural (`se`, `somente se`, `basta`, `necessário`, `a menos que`) fica em [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]].

## Como a FGV cobra

A Fundação Getulio Vargas (FGV) costuma oferecer uma transformação **quase correta**: inverte a seta sem negar, nega os dois termos sem inverter, ou distribui uma negação sem trocar `e ↔ ou`.

A regra prática é não avaliar primeiro se a alternativa “faz sentido”. Transforme a estrutura formalmente e só depois compare com as opções.

## A condicional: quatro estruturas que não podem se misturar

Partindo de:

$$p \to q$$

| Forma | Estrutura | Equivale à original? |
| :--- | :---: | :---: |
| Original | $p \to q$ | Sim |
| Contrapositiva | $\neg q \to \neg p$ | **Sim** |
| Recíproca | $q \to p$ | Não |
| Inversa | $\neg p \to \neg q$ | Não |

A **recíproca** e a **inversa** são equivalentes entre si, mas nenhuma delas equivale à condicional original.

### Contrapositiva — voltar negando

Para obter uma forma equivalente, inverta a ordem e negue os dois termos:

$$p \to q \equiv \neg q \to \neg p$$

> “Se o relatório contém inconsistências, haverá revisão.”

$$I \to R$$

Equivalente:

$$\neg R \to \neg I$$

> “Se não houve revisão, o relatório não continha inconsistências.”

A volta simples $R \to I$ seria a **recíproca** e não é garantida: uma revisão pode ocorrer por outros motivos.

### Reescrita em disjunção

A condicional também pode ser escrita como:

$$p \to q \equiv \neg p \lor q$$

Heurística tradicional: **nega o primeiro, troca por `ou`, mantém o segundo**.

> “Se estudo, passo.”

$$E \to P \equiv \neg E \lor P$$

Essa equivalência descreve a mesma regra: o único cenário proibido continua sendo $E \land \neg P$.

### Negação da condicional

Negar $p \to q$ significa afirmar que justamente o caso proibido aconteceu:

$$\neg(p \to q) \equiv p \land \neg q$$

> “Se estudo, passo.”

Negação:

> “Estudo e não passo.”

Não confunda **equivalência** com **negação**:

- contrapositiva preserva o valor lógico;
- negação produz a proposição oposta.

## De Morgan

Quando uma negação entra em uma conjunção ou disjunção, duas coisas acontecem ao mesmo tempo:

1. cada termo é negado;
2. o conectivo troca: `e ↔ ou`.

$$\neg(p \land q) \equiv \neg p \lor \neg q$$

$$\neg(p \lor q) \equiv \neg p \land \neg q$$

Exemplo:

> “Não é verdade que o sistema esteja atualizado ou que o antivírus esteja ativo.”

$$\neg(S \lor A) \equiv \neg S \land \neg A$$

Logo, **o sistema não está atualizado e o antivírus não está ativo**.

A forma $\neg S \lor \neg A$ é um distrator clássico: nega os termos, mas esquece de trocar o conectivo.

## Dupla negação

$$\neg(\neg p) \equiv p$$

> “Não é verdade que João não compareceu.”

Equivale a:

> “João compareceu.”

## Negação da bicondicional

A bicondicional $p \leftrightarrow q$ exige valores iguais. Sua negação exige valores diferentes: **exatamente uma** das proposições deve ser verdadeira.

$$\neg(p \leftrightarrow q)$$

pode ser lida como disjunção exclusiva entre $p$ e $q$.

> “Viajo se e somente se tenho dinheiro.”

Negação: ocorre uma das duas situações incompatíveis com a equivalência — viajo sem dinheiro, ou tenho dinheiro e não viajo.

## Questões comentadas — 11/09/2026

A bateria de retenção teve **2/6**. Os quatro erros se concentraram em uma mesma habilidade: aplicar mecanicamente a transformação correta depois que a frase já foi traduzida.

### Caso 1 — De Morgan incompleto

Frase:

> “Não é verdade que o sistema esteja atualizado ou que o antivírus esteja ativo.”

Estrutura:

$$\neg(S \lor A)$$

Correto:

$$\neg S \land \neg A$$

**Erro marcado [C]:** $\neg S \lor \neg A$.

O problema não foi esquecer a negação dos termos; foi **não trocar `ou` por `e`**.

### Caso 2 — negar o antecedente não permite concluir o consequente

Regra:

> “O acesso aos dados sigilosos somente será permitido aos credenciados.”

$$A \to C$$

Informação dada:

$$\neg A$$

De $A \to C$ e $\neg A$, **não se conclui nada necessário sobre $C$**. A pessoa pode ser credenciada e simplesmente não ter acessado os dados.

**Erro marcado [C]:** inferir $\neg C$, isto é, usar a inversa $\neg A \to \neg C$.

### Caso 3 — recíproca parece plausível, mas não é equivalente

Regra:

$$I \to R$$

Equivalente:

$$\neg R \to \neg I$$

**Erro marcado [C]:** escolher $R \to I$.

O conteúdo semântico pode tornar a recíproca convincente. Formalmente, porém, a única volta garantida é **voltar negando**.

### Caso 4 — consequente negado permite voltar negando

Regra:

> “Assinatura digital é suficiente para reconhecimento da autenticidade.”

$$D \to R$$

Informação dada:

$$\neg R$$

Logo:

$$\neg D$$

Isso é a contrapositiva aplicada como **modus tollens**.

**Erro marcado [C]:** considerar que não era possível concluir nada sobre a assinatura.

### O contraste que precisa ficar automático

| Regra | Informação dada | O que se pode concluir? |
| :--- | :---: | :--- |
| $P \to Q$ | $P$ | $Q$ |
| $P \to Q$ | $\neg Q$ | $\neg P$ |
| $P \to Q$ | $Q$ | nada necessário sobre $P$ |
| $P \to Q$ | $\neg P$ | nada necessário sobre $Q$ |

Esse quadro concentra a diferença entre inferências válidas e as duas armadilhas recorrentes: **afirmação do consequente** e **negação do antecedente**.

## Protocolo de revisão rápida

Antes de escolher uma alternativa:

1. **Traduza primeiro.** Se ainda não há símbolos claros, volte a [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]].
2. **Se houver negação sobre `e` ou `ou`:** negue cada termo e troque o conectivo.
3. **Se houver $P \to Q$ e a questão pedir equivalente:** use $\neg Q \to \neg P$ ou $\neg P \lor Q$.
4. **Se a questão fornecer $\neg Q$:** conclua $\neg P$.
5. **Se fornecer $Q$ ou $\neg P$:** não volte a seta; não há conclusão necessária.
6. **Se pedir a negação de $P \to Q$:** responda $P \land \neg Q$.

A sequência desejada em prova é:

**frase → estrutura → operação → alternativa**.

## Tensões e pegadinhas

- **Recíproca:** $Q \to P$ parece natural, mas não decorre de $P \to Q$.
- **Inversa:** $\neg P \to \neg Q$ também não decorre da original.
- **Contrapositiva:** exige simultaneamente inverter e negar.
- **De Morgan:** não basta negar os termos; o conectivo também muda.
- **Negação da condicional:** não é a contrapositiva; é $P \land \neg Q$.
- **Semântica:** alternativas plausíveis no mundo real podem ser formalmente inválidas.

## Relações com outros temas

- [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]]: identificação do operador e tradução da linguagem natural.
- [[3 - Materias/Logica/03 - quantificadores|Quantificadores]]: negações de `todo`, `algum` e `nenhum`, que podem combinar-se com De Morgan.
- [[3 - Materias/Logica/05 - tabela verdade|Tabela verdade]]: verificação formal de equivalências, tautologias, contradições e contingências.
- [[3 - Materias/Logica/06 - argumentacao logica|Argumentação lógica]]: modus ponens, modus tollens e inferências inválidas.

## Heurísticas

Equivalência não é semelhança de significado cotidiano; é **mesmo comportamento lógico em todas as combinações possíveis**.

Para a condicional, memorize três operações distintas:

- **equivalente:** $P \to Q \equiv \neg Q \to \neg P$;
- **reescrita:** $P \to Q \equiv \neg P \lor Q$;
- **negação:** $\neg(P \to Q) \equiv P \land \neg Q$.

Se uma alternativa apenas inverter a seta ou apenas negar os dois termos mantendo a ordem, trate-a como distrator até prova em contrário.