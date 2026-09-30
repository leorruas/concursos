---
title: "Símbolos e notação lógica"
type: "conceito"
status: "ativo"
created: 2026-09-30
updated: 2026-09-30
---

# Símbolos e notação lógica

## Núcleo do conceito

A notação lógica é uma forma compacta de escrever relações que, em linguagem natural, ocupam uma frase inteira. O objetivo para prova não é “fazer matemática abstrata”, mas conseguir **ler a fórmula sem se perder nos símbolos**.

Considere:

$$
\exists x\,(A(x) \land \neg B(x))
$$

Leia por partes:

1. $\exists$ = **existe pelo menos um**;
2. $x$ = um elemento qualquer do domínio;
3. $A(x)$ = “x possui a propriedade A”;
4. $\land$ = **e**;
5. $\neg B(x)$ = “x não possui a propriedade B”.

Portanto:

> “Existe pelo menos um A que não é B.”

A notação deve ser lida **de fora para dentro**: primeiro quantificador, depois agrupamentos, depois conectivos e predicados.

## Os símbolos essenciais

| Símbolo | Nome | Como ler | Exemplo |
| :---: | :--- | :--- | :--- |
| $p, q, r$ | proposições | frases que já podem ser V ou F | $p \to q$ |
| $x, y$ | variáveis | um elemento do domínio | $A(x)$ |
| $A(x)$ | predicado | “x tem a propriedade A” | $Servidor(x)$ |
| $\neg$ | negação | não | $\neg p$ |
| $\land$ | conjunção | e | $p \land q$ |
| $\lor$ | disjunção inclusiva | ou | $p \lor q$ |
| $\oplus$ | disjunção exclusiva | ou um ou outro | $p \oplus q$ |
| $\to$ | condicional | se..., então... | $p \to q$ |
| $\leftrightarrow$ | bicondicional | se e somente se | $p \leftrightarrow q$ |
| $\forall$ | quantificador universal | para todo / todo | $\forall x\,A(x)$ |
| $\exists$ | quantificador existencial | existe pelo menos um | $\exists x\,A(x)$ |
| $\equiv$ | equivalência lógica | é logicamente equivalente a | $\neg(p\land q) \equiv \neg p \lor \neg q$ |
| $(\ )$ | agrupamento | delimita o alcance da expressão | $\neg(p\lor q)$ |

A vírgula que às vezes aparece depois do quantificador, como em `∃x,(...)`, **não é um operador lógico**. É apenas uma separação gráfica. Pode-se escrever, por exemplo:

$$
\exists x\,(A(x) \land B(x))
$$

sem alterar o sentido.

## Proposição × predicado

Essa diferença ajuda a entender por que aparecem letras de dois tipos.

### Proposição — $p$

> “João é servidor.”

Essa frase já pode ser classificada como verdadeira ou falsa. Pode ser representada simplesmente por $p$.

### Predicado — $A(x)$

> “x é servidor.”

Aqui ainda não sabemos quem é $x$. A expressão está aberta.

Se definirmos:

- $S(x)$ = “x é servidor”;
- $E(x)$ = “x estuda”;

então:

$$
\exists x\,(S(x) \land E(x))
$$

significa:

> “Existe pelo menos um indivíduo que é servidor e estuda.”

O quantificador fecha a variável.

Para aprofundar sentença aberta e proposição, ver [[3 - Materias/Logica/01 - proposicao|Proposição]].

## As quatro traduções mais importantes

| Linguagem natural | Fórmula | Leitura estrutural |
| :--- | :--- | :--- |
| Todo A é B | $\forall x\,(A(x) \to B(x))$ | se x é A, então x é B |
| Algum A é B | $\exists x\,(A(x) \land B(x))$ | existe x que é A e B |
| Nenhum A é B | $\forall x\,(A(x) \to \neg B(x))$ | se x é A, então x não é B |
| Algum A não é B | $\exists x\,(A(x) \land \neg B(x))$ | existe x que é A e não é B |

Essas quatro formas são detalhadas em [[3 - Materias/Logica/03 - quantificadores|Quantificadores]].

## Por que “Todo A é B” usa $\to$?

Esta é a fronteira mais importante da notação.

> “Todo analista é servidor.”

A fórmula correta é:

$$
\forall x\,(Analista(x) \to Servidor(x))
$$

Ela diz:

> “Para qualquer x, **se** x for analista, **então** x é servidor.”

Ela não afirma que todo mundo é analista.

Compare com:

$$
\forall x\,(Analista(x) \land Servidor(x))
$$

Essa segunda fórmula é muito mais forte: ela afirma que **todo elemento do domínio é simultaneamente analista e servidor**.

Portanto:

> **Todo A é B → use a seta para restringir os A, não uma conjunção para todo o universo.**

## Por que “Algum A é B” usa $\land$?

Agora precisamos encontrar **um mesmo indivíduo** que pertença aos dois grupos:

$$
\exists x\,(A(x) \land B(x))
$$

O $\exists$ garante existência. O $\land$ exige que aquele mesmo $x$ satisfaça as duas propriedades.

Se escrevêssemos:

$$
\exists x\,(A(x) \to B(x))
$$

a fórmula poderia ser satisfeita até por um elemento que **não fosse A**, porque uma condicional com antecedente falso é verdadeira. Portanto, não representa corretamente “algum A é B”.

## Duas formas de escrever “Nenhum”

> “Nenhum A é B.”

Pode ser escrito como:

$$
\forall x\,(A(x) \to \neg B(x))
$$

ou como:

$$
\neg\exists x\,(A(x) \land B(x))
$$

As duas fórmulas dizem que a interseção entre A e B está vazia.

A primeira lê:

> “Todo A é não-B.”

A segunda lê:

> “Não existe um indivíduo que seja A e B ao mesmo tempo.”

## Escopo: o que o símbolo está negando ou quantificando?

Parênteses evitam uma das confusões mais comuns.

Compare:

$$
\neg(p \land q)
$$

com:

$$
\neg p \land q
$$

Na primeira, a negação atinge **a expressão inteira**. Na segunda, atinge apenas $p$.

O mesmo vale para quantificadores:

$$
\forall x\,(A(x) \to B(x))
$$

O $\forall x$ atua sobre a expressão entre parênteses.

Heurística:

> **Antes de interpretar um símbolo, descubra seu alcance.**

## Como a FGV pode cobrar

A banca pode não exigir que você produza a fórmula do zero, mas a notação é útil para desmontar alternativas próximas. Os distratores mais naturais surgem de quatro trocas:

- $\forall$ por $\exists$;
- $\land$ por $\lor$;
- $\to$ pela recíproca;
- $B(x)$ por $\neg B(x)$.

A leitura simbólica também ajuda nas negações:

$$
\neg\forall x\,P(x) \equiv \exists x\,\neg P(x)
$$

e:

$$
\neg\exists x\,P(x) \equiv \forall x\,\neg P(x)
$$

Ou seja:

- negar “todos” produz “existe pelo menos um que não”;
- negar “existe” produz “nenhum”.

## Relações com outros temas

- [[3 - Materias/Logica/01 - proposicao|Proposição]]: proposição, predicado e variável livre.
- [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]]: significado de $\neg$, $\land$, $\lor$, $\to$, $\leftrightarrow$ e $\oplus$.
- [[3 - Materias/Logica/03 - quantificadores|Quantificadores]]: $\forall$, $\exists$, negação e escopo.
- [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações]]: uso de $\equiv$ e transformações formais.
- [[3 - Materias/Logica/07 - diagramas logicos e conjuntos|Diagramas lógicos e conjuntos]]: representação visual das relações entre A e B.

## Tensões e pegadinhas

- **$A(x)$ não é uma proposição fechada** enquanto $x$ estiver livre.
- **$\forall$ não garante existência de A**; ele estabelece uma regra para qualquer A que exista.
- **$\exists$ significa pelo menos um**, não “alguns, mas não todos”.
- **Todo A é B** usa $A(x) \to B(x)$, não $A(x) \land B(x)$.
- **Algum A é B** usa $A(x) \land B(x)$, não uma condicional.
- **$\lor$ normalmente representa ou inclusivo**; exclusividade exige contexto ou $\oplus$.
- **A posição da negação importa**: $\neg(A\land B)$ é diferente de $\neg A\land B$.
- **Parênteses vencem qualquer tentativa de “ler de cabeça” a precedência.** Em prova, prefira seguir explicitamente o agrupamento dado.

## Questões comentadas

### Questão 1 — universal × existencial

A frase “Todo analista é servidor” é corretamente representada por:

A. $\exists x\,(A(x) \land S(x))$  
B. $\forall x\,(A(x) \land S(x))$  
C. $\forall x\,(A(x) \to S(x))$  
D. $\exists x\,(A(x) \to S(x))$  
E. $\forall x\,(S(x) \to A(x))$

**Gabarito: C.**

O ponto decisivo é que “todo A é B” estabelece uma regra **para os elementos que forem A**: se x é analista, então x é servidor.

A alternativa B é o melhor distrator: ela parece juntar “analista” e “servidor”, mas afirma algo muito mais forte — que todo elemento do universo é simultaneamente analista e servidor.

### Questão 2 — ler de fora para dentro

A fórmula

$$
\exists x\,(C(x) \land \neg A(x))
$$

corresponde a:

A. Todo C é A.  
B. Nenhum C é A.  
C. Algum C é A.  
D. Algum C não é A.  
E. Todo A é C.

**Gabarito: D.**

Leia na ordem: $\exists$ = existe pelo menos um; $C(x)$ = é C; $\land$ = e; $\neg A(x)$ = não é A.

## Exemplos comentados

### Exemplo 1 — desmontando a expressão

$$
\forall x\,(Servidor(x) \to \neg Terceirizado(x))
$$

Leitura:

> “Para todo x, se x é servidor, então x não é terceirizado.”

Forma natural equivalente:

> “Nenhum servidor é terceirizado.”

### Exemplo 2 — fórmula que parece certa, mas não é

Queremos escrever:

> “Algum pesquisador é servidor.”

A tentativa:

$$
\exists x\,(Pesquisador(x) \to Servidor(x))
$$

está errada.

A correta é:

$$
\exists x\,(Pesquisador(x) \land Servidor(x))
$$

O indivíduo cuja existência foi afirmada precisa satisfazer **as duas propriedades**.

## Heurísticas

Quando encontrar uma fórmula:

1. **Comece pelo quantificador:** $\forall$ ou $\exists$?
2. **Descubra quem é x:** qual é o domínio?
3. **Traduza cada predicado:** o que significam $A(x)$ e $B(x)$?
4. **Leia o conectivo:** $\land$, $\lor$, $\to$ ou $\leftrightarrow$?
5. **Cheque a negação:** o $\neg$ atinge qual parte?
6. **Respeite os parênteses.**
7. Só depois transforme tudo em português.

A fórmula deixa de parecer “um monte de símbolos” quando você a lê como uma frase comprimida.
