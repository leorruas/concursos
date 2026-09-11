---
title: "Quantificadores"
type: "conceito"
status: "ativo"
created: 2026-05-25
updated: 2026-09-11
---
# Quantificadores

## Núcleo do conceito

Quantificadores dizem **quantos elementos de um domínio** precisam satisfazer uma propriedade. Em prova, as quatro formas mais importantes são `todo`, `algum`, `nenhum` e `algum ... não`.

| Forma | Leitura lógica | Estrutura típica |
| :--- | :--- | :--- |
| Todo A é B | todos os A pertencem a B | $\forall x\,(A(x) \to B(x))$ |
| Algum A é B | existe pelo menos um A que é B | $\exists x\,(A(x) \land B(x))$ |
| Nenhum A é B | não existe A que seja B | $\forall x\,(A(x) \to \neg B(x))$ |
| Algum A não é B | existe pelo menos um A fora de B | $\exists x\,(A(x) \land \neg B(x))$ |

A ideia central é simples:

- **universal** (`todo`) estabelece uma regra para todos os elementos;
- **existencial** (`algum`, `existe`, `pelo menos um`) afirma que há ao menos um caso.

Para a diferença entre sentença aberta e proposição fechada, ver [[3 - Materias/Logica/01 - proposicao|Proposição]]. Esta nota parte do momento em que o quantificador já foi identificado.

## Como a FGV cobra

A Fundação Getulio Vargas (FGV) tende a explorar três fronteiras:

1. **universal × existencial**: trocar `todo` por `algum` ou `nenhum`;
2. **negação**: transformar corretamente `todo` em `algum ... não` e `algum` em `nenhum`;
3. **predicados compostos**: combinar quantificador com `e` ou `ou`, exigindo também De Morgan.

O distrator clássico é exagerar a negação. Para derrubar uma afirmação universal, **um único contraexemplo basta**.

## Quantificador universal — todo

> “Todo servidor conhece a legislação.”

Estrutura:

$$\forall x\,(Servidor(x) \to Conhece(x))$$

A frase estabelece uma regra para todos os servidores. Para mostrá-la falsa, basta encontrar **um servidor que não conheça a legislação**.

Heurística:

> **Todo → procure um contraexemplo.**

`Todo A é B` não deve ser lido como `Todo B é A`. A relação não volta automaticamente.

## Quantificador existencial — algum / existe

> “Algum servidor conhece a legislação.”

Estrutura:

$$\exists x\,(Servidor(x) \land Conhece(x))$$

A frase exige apenas **um caso** que satisfaça as duas propriedades.

Heurística:

> **Existe → procure um exemplo.**

Em lógica, `algum` significa **pelo menos um**. Não significa “alguns, mas não todos”. Portanto, `algum A é B` é compatível com a possibilidade de todos os A serem B.

## Nenhum

> “Nenhum analista terceirizado é servidor efetivo.”

Isso significa que não existe elemento pertencente simultaneamente aos dois grupos:

$$\neg\exists x\,(Terceirizado(x) \land Efetivo(x))$$

Uma forma equivalente é:

$$\forall x\,(Terceirizado(x) \to \neg Efetivo(x))$$

Se também sabemos que **alguns integrantes da equipe são terceirizados**, então esses integrantes necessariamente **não são efetivos**. O existencial fornece a existência; o universal negativo fornece a exclusão.

## Algum ... não

> “Algum servidor não conhece a legislação.”

Estrutura:

$$\exists x\,(Servidor(x) \land \neg Conhece(x))$$

A frase afirma apenas a existência de **pelo menos um** servidor fora do grupo dos que conhecem a legislação. Ela não informa o que acontece com os demais servidores.

Essa fronteira é importante: `algum A não é B` **não implica** que algum A seja B.

## Negação dos quantificadores

A negação troca universal por existencial — ou existencial por universal — e nega a propriedade relevante.

| Afirmação | Negação correta |
| :--- | :--- |
| Todo A é B | Algum A não é B |
| Algum A é B | Nenhum A é B |
| Nenhum A é B | Algum A é B |
| Algum A não é B | Todo A é B |

### Por que `todo` vira `algum ... não`

> “Todos os alunos estudam.”

Para negar essa frase não é preciso afirmar que ninguém estuda. Basta um contraexemplo:

> “Algum aluno não estuda.”

Formalmente:

$$\neg\forall x\,P(x) \equiv \exists x\,\neg P(x)$$

### Por que `algum` vira `nenhum`

> “Existe um médico pesquisador.”

Negar a existência exige eliminar todos os casos possíveis:

> “Nenhum médico é pesquisador.”

Formalmente:

$$\neg\exists x\,P(x) \equiv \forall x\,\neg P(x)$$

## Quantificador + `e` / `ou`

Quando a propriedade quantificada é composta, é preciso aplicar **duas operações**: trocar o quantificador e negar a expressão interna.

### Todo ... `e` ...

> “Todos os relatórios foram revisados e aprovados.”

Estrutura simplificada:

$$\forall x\,(R(x) \land A(x))$$

Negação:

$$\exists x\,(\neg R(x) \lor \neg A(x))$$

Leitura:

> “Pelo menos um relatório não foi revisado **ou** não foi aprovado.”

### Todo ... `ou` ...

> “Todos os analistas revisaram os documentos ou entrevistaram os responsáveis.”

Negação:

> “Existe pelo menos um analista que **não revisou os documentos e não entrevistou os responsáveis**.”

Aqui aparecem duas mudanças ao mesmo tempo:

- `todo` → `existe pelo menos um`;
- `ou` → `e` pela lei de De Morgan.

Para a transformação interna, ver [[3 - Materias/Logica/04 - equivalencias#De Morgan|De Morgan]].

## Escopo e variável livre

O quantificador só fecha a variável **dentro do seu escopo**. Se outra parte da expressão ainda contém variável livre, a expressão completa continua aberta.

> “x é par ou existe um número x que é ímpar.”

A segunda parte está quantificada, mas o primeiro `x` continua livre. Portanto, a expressão inteira permanece aberta.

Para aprofundar o critério de proposição/sentença aberta, ver [[3 - Materias/Logica/01 - proposicao|Proposição]].

## Tensões e pegadinhas

- **Negar `todo` como `nenhum`:** errado. Basta `algum ... não`.
- **`Algum` não significa `não todos`:** afirma apenas existência de pelo menos um caso.
- **Existência não autoriza generalização:** de `algum A é B` não se conclui `todo A é B`.
- **Universal não autoriza recíproca:** de `todo A é B` não se conclui `todo B é A`.
- **`Algum A não é B` é informação mínima:** não diz nada sobre os demais A.
- **Quantificador + conectivo:** ao negar, pode ser necessário trocar também `e ↔ ou`.

## Exemplos comentados

### Exemplo 1 — negação mínima

> “Todo empregado utiliza VPN e autenticação multifator.”

Negação:

> “Existe pelo menos um empregado que não utiliza VPN **ou** não utiliza autenticação multifator.”

Não é necessário encontrar alguém que deixe de usar as duas coisas ao mesmo tempo.

### Exemplo 2 — existência com exclusão

Premissas:

> “Nenhum terceirizado é servidor efetivo.”  
> “Alguns integrantes da equipe são terceirizados.”

Conclusão necessária:

> “Alguns integrantes da equipe não são servidores efetivos.”

O primeiro enunciado exclui a interseção; o segundo garante que há pelo menos um terceirizado na equipe.

### Exemplo 3 — `algum ... não`

> “Alguns candidatos não entregaram o documento.”

A única garantia é que existe pelo menos um candidato sem entrega. A frase é compatível tanto com haver candidatos que entregaram quanto com ninguém ter entregado.

## Protocolo de revisão rápida

1. Identifique: **todo, algum, nenhum ou algum ... não?**
2. Se for `todo`, pense em **contraexemplo**.
3. Se for `algum`, pense em **um exemplo suficiente**.
4. Se pedir negação, troque **universal ↔ existencial** e negue a propriedade.
5. Se houver `e` ou `ou` dentro da propriedade, aplique também De Morgan.
6. Não conclua nada sobre “o restante do grupo” além do que o quantificador realmente afirma.

## Relações com outros temas

- [[3 - Materias/Logica/01 - proposicao|Proposição]]: sentença aberta, variável livre e fechamento por quantificação.
- [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]]: De Morgan e outras transformações formais.
- [[3 - Materias/Logica/07 - diagramas logicos e conjuntos|Diagramas lógicos e conjuntos]]: representação visual de `todo`, `algum` e `nenhum`.

## Heurísticas

A pergunta central não é “o que parece acontecer com o grupo?”, mas **qual é a quantidade mínima que a frase garante?**

- `todo` → regra para todos;
- `algum` → pelo menos um;
- `nenhum` → zero interseções;
- `algum ... não` → pelo menos um contraexemplo.

Na negação, faça o menor ataque capaz de destruir a frase original: para derrubar `todo`, **um único caso contrário basta**.