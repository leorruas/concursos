---
title: "Possibilidade e necessidade"
type: "conceito"
status: "ativo"
created: 2026-05-30
updated: 2026-05-30
---
# Possibilidade e necessidade

## Núcleo do conceito
Nas questões de lógica para concursos (especialmente de bancas como FGV e FCC), as conclusões de um argumento não são meramente binárias (verdadeiras ou falsas). Elas são classificadas em três estados de validade formal:

1. **Necessária**: É obrigatoriamente verdadeira. Deve ocorrer em qualquer cenário válido que respeite as premissas (não existe cenário válido onde ela seja falsa).
2. **Possível**: Pode ser verdadeira, mas não é obrigada a ser. Consigo desenhar um cenário consistente onde ela ocorre, bem como outro cenário consistente onde ela não ocorre.
3. **Impossível**: É necessariamente falsa. Contradiz diretamente as premissas (sempre falsa em qualquer cenário).

---

## O Salto de Nível: Sair do Binário
Enquanto no nível básico avalia-se apenas se algo é *"verdadeiro ou falso"*, no nível avançado avalia-se a **consistência de cenários**:

| Estado de Validade | Relação com Prova e Contradição | Exemplo Prático |
| :--- | :--- | :--- |
| **Necessário** | Você **consegue provar** usando as regras formais. Não há contraexemplo válido. | *Todo médico é formado.* / *João é médico.* $\implies$ *João é formado* (Necessário). |
| **Possível** | Você **não consegue provar**, mas também **não consegue contradizer** (Talvez). | *Todo médico é formado.* / *Alguns formados são pesquisadores.* $\implies$ *Alguns médicos são pesquisadores* (Possível). |
| **Impossível** | Você **consegue contradizer** diretamente usando as premissas. | *Nenhum médico é robô.* $\implies$ *Alguns médicos são robôs* (Impossível). |

---

## A Pergunta Secreta da Banca
Quando a banca pergunta: *"Qual afirmação pode ser verdadeira?"*
- Ela **não** está perguntando se a afirmação decorre necessariamente das premissas.
- Ela está perguntando: **"Consigo desenhar um cenário consistente onde isso acontece?"** (Se sim, a alternativa é a resposta correta por ser *possível*).

---

## Heurísticas e Regras Práticas

### 1. Desconfie do "Alguns"
Quando aparecer a palavra *"alguns"* nas alternativas, preste muita atenção. Normalmente, em problemas de existencial sem acoplamento direto, a relação será apenas **possível**, e não **necessária**.

### 2. O Truque da Personificação da Existência (Transportando a Existência)
Em sentenças com quantificadores existenciais ("algum"), o cérebro tende a tratar a existência de forma abstrata ou fraca demais, esquecendo de herdar propriedades. 
* **Regra**: Se a premissa garante que *"Existe alguém aí"*, crie um personagem mental (ex: João) para carregar todas as propriedades associadas.

> **Exemplo Prático**:
> - Premissa 1: *"Nenhum pesquisador é robô."*
> - Premissa 2: *"Alguns professores são pesquisadores."*
>
> 1. Personifique a existência: Chame o professor que é pesquisador de **João**.
> 2. João é Professor e João é Pesquisador.
> 3. Aplique a regra ao João: Como nenhum pesquisador é robô, **João não é robô**.
> 4. Conclusão Necessária: Como João é professor e não é robô, **"Alguns professores não são robôs"** é uma conclusão **necessária** (obrigatória).

### 3. Evite o Acoplamento Indevido de Existenciais
Em premissas que envolvem duas relações existenciais distintas, a relação entre as pontas é apenas **possível**, nunca necessária.
* Exemplo: *"Alguns médicos são pesquisadores"* e *"Alguns pesquisadores são professores"*. 
* Conclusão: *"Alguns médicos são professores"* é apenas **possível**, pois os pesquisadores professores podem ser pessoas totalmente distintas dos pesquisadores médicos.

### 4. Cuidado com Outras Categorias (O Espaço Extra)
Ao cruzar premissas negativas e existenciais, lembre-se de que a exclusão de um grupo não impede a existência de outros subgrupos fora dele.
* Exemplo: *"Nenhum robô é humano"* e *"Alguns humanos são médicos"*.
* A afirmação *"Alguns médicos são robôs"* é **possível**, pois a premissa não disse que *"Todo médico é humano"*. Podem existir médicos robôs que não pertençam ao conjunto dos humanos.

### 5. A sutileza de "Alguns A não são B" (Negação Interna)
Há uma armadilha clássica de interpretação em sentenças com negação interna:
- **O erro intuitivo**: Ler *"Alguns A não são B"* presumindo que a frase afirma que exista algum cruzamento positivo entre $A$ e $B$ (ou seja, achar que pressupõe que *alguns são* e *outros não são*).
- **O fato lógico**: A frase afirma **apenas** que *"Existe pelo menos um A que está fora de B"*. Ela não exige nem pressupõe a existência de nenhum elemento de $A$ dentro de $B$.

> [!IMPORTANT]
> **Estudo de Caso (Erro de Leitura de Negação Interna)**:
> - **Premissas**:
>   - *Todo A é B* ($A \subset B$)
>   - *Todo B é C* ($B \subset C$)
>   - *Nenhum C é D* ($C \cap D = \emptyset$)
>   - *Existem alguns A* ($A \neq \emptyset$)
> - **Afirmação**: *“Alguns A não são D.”*
> - **Análise**: Por transitividade de inclusão e exclusão, sabemos que nenhum $A$ pertence a $D$. Como existem alguns $A$, então esses $A$ necessariamente não pertencem a $D$.
> - **Conclusão**: A afirmação ==*“Alguns A não são D”* é **necessariamente verdadeira** (pois há a garantia da existência de pelo menos um $A$, e ele está fora de $D$). Não confunda com a ideia de que *"alguns A pertencem a D"*.==

---

## Notas de raciocínio para Provas
- **Impossibilidade** exige contradição explícita.
- **Necessidade** exige prova ou transitividade direta (como a transitividade de inclusão: $A \subset B$ e $B \subset C \implies A \subset C$).
- **Possibilidade** é o espaço do "talvez" — se há pelo menos um diagrama válido onde a afirmação acontece sem violar as regras, ela é possível.
