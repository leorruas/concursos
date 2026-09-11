---
title: "Conectivos lógicos"
type: "conceito"
status: "ativo"
created: 2026-05-25
updated: 2026-09-11
---
# Conectivos lógicos

## Núcleo do conceito

Conectivos lógicos combinam proposições e determinam quando uma proposição composta é verdadeira ou falsa. Em prova, o ponto central é **separar o sentido cotidiano da frase da estrutura formal**: primeiro identificar o conectivo; depois aplicar sua regra.

| Conectivo | Símbolo | Leitura típica | Regra rápida |
| :--- | :---: | :--- | :--- |
| Negação | $\neg p$ | não p | inverte o valor |
| Conjunção | $p \land q$ | p e q | só é V se ambos forem V |
| Disjunção inclusiva | $p \lor q$ | p ou q | só é F se ambos forem F |
| Disjunção exclusiva | $p \oplus q$ | ou p, ou q | é V quando os valores são diferentes |
| Condicional | $p \to q$ | se p, então q | só é F em V → F |
| Bicondicional | $p \leftrightarrow q$ | p se e somente se q | é V quando os valores são iguais |

Para negações, contrapositiva e outras equivalências, usar [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]]. Esta nota fica concentrada em **reconhecer e traduzir os conectivos**.

## Como a FGV cobra

A Fundação Getulio Vargas (FGV) costuma esconder a estrutura lógica em linguagem natural. O erro mais produtivo para a banca é fazer o candidato completar causalidades ou exclusividades que **não estão na proposição**. Por isso, a leitura deve ser feita em duas etapas:

1. traduzir a frase para uma estrutura como $p \land q$, $p \lor q$ ou $p \to q$;
2. só então avaliar valor lógico, condição necessária/suficiente ou equivalência.

O ponto mais sensível é a condicional: em $p \to q$, a proposição afirma apenas que **não pode ocorrer p sem q**. Ela não diz que p ocorre, nem que q só pode ocorrer por causa de p.

## Os conectivos

### Negação — $\neg p$

A negação apenas inverte o valor lógico de uma proposição simples:

- se $p$ é V, $\neg p$ é F;
- se $p$ é F, $\neg p$ é V.

Quando a negação atinge uma proposição composta, entram regras específicas como De Morgan. Ver [[3 - Materias/Logica/04 - equivalencias#3. Leis de De Morgan (Negação de $\land$ e $\lor$)|Leis de De Morgan]].

### Conjunção — $p \land q$

A conjunção exige que **as duas partes sejam verdadeiras**. Qualquer falha torna o conjunto falso.

> “Estudei, mas não passei.”

Em lógica proposicional, `mas`, `porém`, `contudo`, `todavia` e `entretanto` funcionam como conjunção: a oposição semântica não altera o fato de que as duas proposições são afirmadas simultaneamente.

Estrutura:

$$E \land \neg P$$

### Disjunção inclusiva — $p \lor q$

O `ou` inclusivo exige **pelo menos uma** proposição verdadeira. Também admite as duas verdadeiras ao mesmo tempo.

> “O candidato possui formação em Comunicação ou Marketing.”

A frase continua verdadeira se ele possuir as duas formações, salvo se o enunciado explicitar exclusividade.

### Disjunção exclusiva — $p \oplus q$

A disjunção exclusiva é verdadeira quando **exatamente uma** das proposições é verdadeira. É falsa quando ambas têm o mesmo valor.

A banca pode sinalizar exclusividade por construções como `ou... ou...`, `uma ou outra, mas não ambas` ou `exatamente uma`. O contexto e a formulação precisam indicar a exclusão; não trate qualquer `ou` cotidiano automaticamente como exclusivo.

### Condicional — $p \to q$

A condicional é a estrutura mais importante desta nota.

> “Se p, então q.”

Ela é falsa apenas no caso:

$$V \to F$$

Uma forma útil de pensar é a **regra do caso proibido**:

> $p \to q$ proíbe apenas $p \land \neg q$.

Assim, em “Se chove, a rua fica molhada”:

- chove e molha: compatível;
- chove e não molha: **viola a regra**;
- não chove e molha: compatível, pois outra causa pode molhar a rua;
- não chove e não molha: compatível.

#### Condição suficiente e necessária

Em:

$$p \to q$$

- $p$ é **condição suficiente** para $q$;
- $q$ é **condição necessária** para $p$.

Heurística:

- **suficiente** = “isso basta para produzir o resultado?”;
- **necessária** = “se o resultado ocorreu, isso precisava estar presente?”.

### Bicondicional — $p \leftrightarrow q$

A bicondicional afirma uma relação de ida e volta:

$$p \leftrightarrow q \equiv (p \to q) \land (q \to p)$$

Ela é verdadeira quando $p$ e $q$ possuem o mesmo valor lógico. Cada proposição funciona como condição **necessária e suficiente** da outra.

## Tradução da linguagem natural

Esta é a parte que mais merece revisão rápida antes da prova.

| Formulação | Estrutura | Como ler |
| :--- | :---: | :--- |
| Se P, então Q | $P \to Q$ | P é suficiente; Q é necessário |
| P se Q | $Q \to P$ | o `se` introduz a condição |
| P somente se Q | $P \to Q$ | Q é necessário para P |
| Basta Q para P | $Q \to P$ | Q é suficiente para P |
| Q é suficiente para P | $Q \to P$ | suficiente fica antes da seta |
| Q é necessário / indispensável / requisito para P | $P \to Q$ | necessário fica depois da seta |
| Sem Q, não P | $\neg Q \to \neg P$ | forma negativa de condição necessária |
| P a menos que Q | $\neg Q \to P$ | se Q não ocorrer, P ocorre |
| P se e somente se Q | $P \leftrightarrow Q$ | ida e volta |

### Três contrastes que geram distratores

**1. `Se` não é `somente se`.**

> “Será convocado se obtiver nota 80.”

$$nota80 \to convocado$$

> “Será convocado somente se obtiver nota 80.”

$$convocado \to nota80$$

A direção muda.

**2. Necessário não significa suficiente.**

> “Documento com foto é requisito para entrar.”

$$entrada \to documento$$

Ter o documento não garante entrada; apenas entrar sem documento viola a regra.

**3. A condicional não autoriza voltar a seta.**

De $P \to Q$, observar $Q$ não permite concluir $P$. Da mesma forma, observar $\neg P$ não permite concluir $\neg Q$. Para as transformações válidas, ver [[3 - Materias/Logica/04 - equivalencias#1. Regra do "Volta Negando" (Contrapositiva)|Contrapositiva]].

## Tensões e pegadinhas

- **Semântica cotidiana:** frases como “se chove, a rua molha” sugerem causalidade; a lógica cobra apenas a estrutura formal definida.
- **`Mas` funciona como `e`:** o contraste discursivo não altera o valor lógico da conjunção.
- **`Ou` inclusivo:** não exclui automaticamente a possibilidade de as duas proposições serem verdadeiras.
- **`Somente`, `apenas`, `necessário`, `indispensável`, `requisito`:** costumam sinalizar condição necessária e exigem atenção à direção da seta.
- **`Basta`, `suficiente`:** sinalizam condição suficiente.
- **Não transformar $P \to Q$ em equivalência:** uma única seta não cria $Q \to P$.

## Exemplos comentados

### Exemplo 1 — condição necessária

> “O acesso aos dados sigilosos somente será permitido aos empregados credenciados.”

$$acesso \to credenciado$$

Se alguém acessou, era credenciado. Se alguém **não acessou**, não é possível concluir se era ou não credenciado.

### Exemplo 2 — condição suficiente

> “É suficiente assinar digitalmente para que a autenticidade seja reconhecida.”

$$assinatura \to reconhecimento$$

Assinatura digital garante reconhecimento segundo a regra. A transformação para sua contrapositiva pertence à nota [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]].

### Exemplo 3 — `ou` inclusivo

> “O candidato possui graduação em Comunicação ou Marketing.”

Comunicação apenas, Marketing apenas ou ambas tornam a disjunção verdadeira. Só a ausência das duas formações a torna falsa.

## Heurísticas

Antes de resolver uma questão:

1. **Circule mentalmente o conectivo.**
2. **Traduza a frase para símbolos.** Não faça inferência antes disso.
3. Se houver $P \to Q$, pergunte: **qual é o único cenário proibido?** Resposta: $P \land \neg Q$.
4. Se aparecer `necessário`, coloque essa condição **depois da seta**.
5. Se aparecer `suficiente` ou `basta`, coloque essa condição **antes da seta**.
6. Se a questão pedir negação ou equivalência, pare aqui e vá para [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]].

## Relações com outros temas

- [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]]: contrapositiva, recíproca, inversa, De Morgan e negação da condicional.
- [[3 - Materias/Logica/05 - tabela verdade|Tabela verdade]]: verificação completa dos valores de cada conectivo.
- [[3 - Materias/Logica/06 - argumentacao logica|Argumentação lógica]]: aplicação dos conectivos em inferências válidas e inválidas.
