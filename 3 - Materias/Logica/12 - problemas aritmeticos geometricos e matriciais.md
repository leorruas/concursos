---
title: "🆕 Problemas aritméticos, geométricos e matriciais"
type: "conceito"
status: "ativo"
created: 2026-10-03
updated: 2026-10-03
---

# 🆕 Problemas aritméticos, geométricos e matriciais

Esta nota cobre o item amplo do edital da Dataprev sobre **problemas aritméticos, geométricos e matriciais**, com foco em modelagem e reconhecimento de estrutura. A FGV tende a esconder uma conta simples dentro de um enunciado que exige escolher a relação correta antes de calcular.

## Núcleo do conceito

### 1. Problemas aritméticos: modelar antes de calcular

O primeiro passo é transformar o texto em relações matemáticas. Pergunte:

1. qual é a grandeza desconhecida?
2. quais dados realmente se relacionam com ela?
3. a relação é aditiva, multiplicativa, proporcional ou percentual?
4. há uma ou mais etapas?

#### Média aritmética simples

Se (n) valores têm o mesmo peso:

[
ar{x}=rac{x_1+x_2+cdots+x_n}{n}
]

Se a média de 4 valores é 18, a soma é:

[
4	imes18=72
]

A FGV pode fornecer três valores e pedir o quarto. Nesse caso, recupere primeiro a **soma total exigida pela média**.

#### Média ponderada

Quando os valores têm pesos diferentes:

[
ar{x}=rac{x_1p_1+x_2p_2+cdots+x_np_n}{p_1+p_2+cdots+p_n}
]

> [!TIP]
> **Média ponderada não é média das médias** sem considerar o tamanho ou peso de cada grupo.

Exemplo: uma nota 7 com peso 2 e uma nota 9 com peso 3:

[
rac{7cdot2+9cdot3}{2+3}=rac{41}{5}=8{,}2
]

#### Variações percentuais sucessivas

Percentuais sucessivos atuam sobre bases diferentes.

Aumento de (a%):

[
V_f=V_ileft(1+rac a{100}ight)
]

Desconto de (d%):

[
V_f=V_ileft(1-rac d{100}ight)
]

Exemplo: aumento de 20% e depois redução de 20%:

[
1{,}20	imes0{,}80=0{,}96
]

O valor final é **96% do inicial**, não 100%.

> [!WARNING]
> Percentuais iguais em sentidos opostos **não se anulam** quando incidem sucessivamente.

#### Razão e proporção

Para divisão diretamente proporcional, use [[3 - Materias/Logica/10 - razoes proporcoes e divisao proporcional|Razões, proporções e divisão proporcional]].

Aqui o ponto adicional é reconhecer quando a proporção aparece **disfarçada**:

- produtividade × tempo;
- distância × velocidade;
- quantidade × preço;
- escala;
- participação de grupos em um total.

Se uma grandeza dobra e a outra também dobra, há indício de relação direta. Se uma dobra e a outra cai pela metade, há indício de relação inversa.

#### Equação curta

Muitos problemas viram uma equação de primeiro grau.

Exemplo:

> Após gastar R$ 180, uma pessoa ficou com 40% do valor que possuía.

Se o valor inicial é (x):

[
x-180=0{,}4x
]

[
0{,}6x=180
]

[
x=300
]

A dificuldade está em traduzir a frase corretamente, não em resolver a equação.

### 2. Problemas de duas etapas

A FGV frequentemente combina duas relações simples. O erro típico é parar após a primeira.

Exemplo:

> Um produto custa R$ 500. Recebe desconto de 10% e, sobre o preço já reduzido, acréscimo de 8%.

Primeira etapa:

[
500	imes0{,}90=450
]

Segunda etapa:

[
450	imes1{,}08=486
]

Não some (-10%+8%=-2%) de forma automática, pois as bases são diferentes.

### 3. Problemas geométricos

O edital não exige geometria avançada; o ganho está em reconhecer rapidamente qual grandeza é pedida.

#### Perímetro × área

**Perímetro** mede contorno.  
**Área** mede superfície.

Retângulo:

[
P=2(b+h)
]

[
A=bcdot h
]

Quadrado:

[
P=4l
]

[
A=l^2
]

Triângulo:

[
A=rac{bcdot h}{2}
]

Círculo:

[
C=2pi r
]

[
A=pi r^2
]

> [!WARNING]
> Aumentar uma dimensão não produz necessariamente o mesmo aumento percentual na área. Se os dois lados de um quadrado aumentam 10%, a área é multiplicada por (1{,}1^2=1{,}21): aumento de **21%**.

#### Teorema de Pitágoras

Em triângulo retângulo:

[
a^2+b^2=c^2
]

onde (c) é a hipotenusa.

Triplas úteis para cálculo mental:

- 3–4–5;
- 5–12–13;
- 6–8–10.

FGV pode esconder Pitágoras em diagonal de sala, trajeto em mapa ou distância entre pontos.

#### Escala

Escala (1:n) significa que 1 unidade no desenho corresponde a (n) unidades reais.

Exemplo: em escala 1:50.000, 2 cm representam:

[
2	imes50.000=100.000	ext{ cm}=1	ext{ km}
]

A pegadinha costuma estar na **conversão de unidades**.

### 4. Raciocínio matricial

Neste edital, “matricial” deve ser tratado prioritariamente como **padrões organizados em linhas e colunas**, não como um curso de álgebra linear.

A banca pode apresentar uma grade numérica e pedir o termo ausente. Procure uma regra que se repita:

- dentro de cada linha;
- dentro de cada coluna;
- entre diagonais;
- entre os dois primeiros números e o terceiro;
- alternadamente por posição.

Exemplo:

[
egin{matrix}
2 & 3 & 8\
4 & 5 & 24\
6 & 7 & ?
end{matrix}
]

Uma regra possível que se repete nas linhas é:

[
a	imes(b+1)
]

Primeira linha:

[
2	imes(3+1)=8
]

Segunda:

[
4	imes(5+1)=24
]

Terceira:

[
6	imes(7+1)=48
]

Logo, o termo é 48.

> [!IMPORTANT]
> Uma regra só é aceitável se explicar **todas as linhas ou colunas relevantes**. Não escolha uma fórmula que funcione apenas para um caso.

### 5. Sequências e padrões

Antes de inventar uma regra complexa, teste nesta ordem:

1. diferença entre termos;
2. razão entre termos;
3. diferenças das diferenças;
4. alternância de duas sequências;
5. relação com posição (n);
6. produtos ou somas de termos anteriores.

Exemplo:

[
2,;6,;12,;20,;30,ldots
]

Diferenças:

[
4,;6,;8,;10
]

A próxima diferença é 12:

[
30+12=42
]

Uma forma equivalente é (n(n+1)): 1·2, 2·3, 3·4, 4·5, 5·6...

## Como a FGV cobra

A dificuldade costuma vir de **modelagem**:

- média com pesos escondidos em tamanhos de grupos;
- porcentagens sucessivas tratadas incorretamente como soma;
- razão/proporção dentro de situação financeira ou operacional;
- equação simples escondida em texto;
- perímetro usado como distrator quando se pede área;
- alteração de dimensão confundida com alteração de área;
- matriz com regra plausível, mas que não se repete em todas as linhas;
- sequência em que a primeira hipótese parece funcionar apenas nos dois primeiros termos.

Em problemas contextualizados, leia primeiro **o que a questão pede** e só depois escolha os dados necessários.

## Relações com outros temas

- [[3 - Materias/Logica/10 - razoes proporcoes e divisao proporcional|Razões, proporções e divisão proporcional]]: divisão proporcional e regra de três.
- [[3 - Materias/Logica/09 - analise combinatoria|Análise combinatória]]: problemas de contagem, não de cálculo aritmético comum.
- [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]]: simplificação de contas, porcentagens e estimativas.
- [[3 - Materias/Logica/06 - argumentacao logica|Argumentação lógica]]: quando o desafio está na validade das inferências, não na relação numérica.

## Tensões e pegadinhas

**Média simples × média ponderada:** grupos de tamanhos diferentes exigem peso.

**Porcentagem × pontos percentuais:** passar de 20% para 25% é aumento de 5 pontos percentuais, mas aumento relativo de 25%.

**Aumento × desconto sucessivo:** usar fatores multiplicativos, não somar percentuais automaticamente.

**Perímetro × área:** contorno e superfície são grandezas diferentes.

**Comprimento × área:** aumentar lados por fator (k) pode aumentar área por (k^2).

**Regra local × regra geral da matriz:** a regra precisa se repetir.

**Conta correta × pergunta errada:** muitos distratores são resultados verdadeiros de uma etapa intermediária.

## Exemplos comentados

### Exemplo 1 — média ponderada

Uma equipe de 20 pessoas teve média 8 e outra de 30 pessoas teve média 6. A média conjunta é:

[
rac{20cdot8+30cdot6}{50}
=rac{340}{50}
=6{,}8
]

Não é 7, pois os grupos têm tamanhos diferentes.

### Exemplo 2 — variação sucessiva

Um indicador aumenta 25% e depois cai 20%:

[
1{,}25	imes0{,}80=1
]

Neste caso específico, volta ao valor original. Isso ocorre porque 20% de 125 corresponde a 25% de 100.

### Exemplo 3 — geometria

Um retângulo de 8 m por 5 m precisa de cerca em todo o contorno:

[
P=2(8+5)=26	ext{ m}
]

Se a pergunta fosse sobre piso, seria área:

[
A=8cdot5=40	ext{ m}^2
]

### Exemplo 4 — matriz

[
egin{matrix}
3 & 2 & 7\
5 & 4 & 21\
7 & 6 & ?
end{matrix}
]

A relação é (acdot b+1):

- 3·2 + 1 = 7;
- 5·4 + 1 = 21;
- 7·6 + 1 = 43.

Logo, (?=43).

## Heurísticas

1. **Escreva o que a questão quer encontrar.**
2. **Converta o texto em uma relação antes de fazer conta.**
3. Em porcentagens sucessivas, pense em **fatores multiplicativos**.
4. Em média de grupos, procure os **pesos/tamanhos**.
5. Em geometria, pergunte: **contorno, superfície ou distância?**
6. Em matriz, teste a regra em mais de uma linha/coluna.
7. Se a conta ficou longa demais para uma questão de Raciocínio Lógico, revise a modelagem: pode haver um caminho mais simples.
8. Antes de marcar, confira se o número encontrado é o **resultado final pedido**, não uma etapa intermediária.

## Referências de verificação

- FGV. *Dataprev 2024 — ATI Comunicação Social, Tipo 1*: https://conhecimento.fgv.br/sites/default/files/concursos/ati-comunicacao-socialcns009-tipo-1.pdf
- [[2 - Editais/Dataprev 2026 (Original)|Edital Dataprev 2026]] — item de Raciocínio Lógico.
