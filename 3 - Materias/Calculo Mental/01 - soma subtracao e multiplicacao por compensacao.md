---
articleId: art-2b80e6f1ca4d49a7
articleAliases: ["3 - Materias/Calculo Mental/01 - soma subtracao e multiplicacao por compensacao.md"]
title: "Soma, subtração e multiplicação por compensação"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-05
---

# Soma, subtração e multiplicação por compensação

## Núcleo do conceito

**Compensação** transforma uma conta em outra mais simples preservando a igualdade. A operação auxiliar pode usar número redondo, desde que o excesso ou a diferença sejam **repostos com o sinal correto**. Trata-se de uma técnica de cálculo exato, e não de estimativa.

## Estrutura interna: transformação, cálculo e recomposição

| Operação | Estratégia e exemplo | Erro plausível |
| :--- | :--- | :--- |
| Soma | 68 + 29 = 68 + 30 − 1 = **97** | Esquecer de subtrair 1 |
| Subtração | 104 − 59 = 104 − 60 + 1 = **45** | Subtrair 1 novamente |
| Multiplicação por 9 | 27 × 9 = 270 − 27 = **243** | Subtrair dezena errada |
| Multiplicação por 15 | 32 × 15 = 320 + 160 = **480** | Somar metade de 32 em vez de 320 |
| Multiplicação por 25 | 36 × 25 = (36 ÷ 4) × 100 = **900** | Trocar 25 por 100/2 |
| Multiplicação por 125 | 24 × 125 = (24 ÷ 8) × 1.000 = **3.000** | Perder a ordem de grandeza |

**Diferença de quadrados:** \((a+b)(a-b)=a^2-b^2\). Logo, \(51 \times 49=50^2-1=2.499\). O fator comum deve ser exatamente o ponto médio entre os dois números.

**Quadrado de binômio:** \((a+b)^2=a^2+2ab+b^2\); assim, \(52^2=(50+2)^2=2.500+200+4=2.704\). A parcela \(2ab\) é indispensável.

### Método de checkpoints

Depois de cada transformação, preserve mentalmente **um valor intermediário validado**, por exemplo: \(100+27-18+34\): primeiro 127, depois 109, por fim **143**. Esse procedimento ajuda a acompanhar sinais e ajustes; não há evidência individual de taxa de acerto nesta nota.

O hub sugere, como heurística, arredondar apenas um número por vez, para diminuir ajustes simultâneos. Isso **não proíbe matematicamente** compensar duas parcelas: \(198+297=(200-2)+(300-3)=495\) é correto. A escolha depende da carga de etapas e do risco de esquecer os sinais.

## Questões comentadas: inéditas C/E

**Item 1.** Calcular \(72-38\) por \(72-40+2\) preserva o valor exato.

**Gabarito: Certo.** A aproximação do subtraendo de 38 para 40 exige devolver 2. Resultado 34.

**Item 2.** A igualdade \((x+1)(x-1)=x^2+1\) permite encontrar \(51\times49=2.501\).

**Gabarito: Errado.** A identidade correta é \(x^2-1\), resultando em 2.499.

**Item 3.** Multiplicar 48 por 25 equivale a multiplicar a quarta parte de 48 por 100.

**Gabarito: Certo.** \(48/4\times100=1.200\).

## Relações com outros temas

- [[3 - Materias/Calculo Mental/02 - porcentagens proporcoes e escalas|Porcentagens e proporções]].
- [[3 - Materias/Calculo Mental/03 - estimativas limites e verificacao|Verificação por estimativa]].
- [[3 - Materias/Calculo Mental/calculo-mental|Hub de Cálculo Mental]].

## Tensões e pegadinhas

**Arredondar parcela ≠ alterar resultado final.** **Subtrair mais exige devolver diferença.** **Quadrado do ponto médio ≠ produto de valores simétricos sem ajuste.**

## Heurísticas

Escolha uma transformação, preserve seu ajuste e verifique **sinal, magnitude e último algarismo**.

## Fontes

- Propriedades aritméticas e identidades algébricas elementares.
- [[3 - Materias/Calculo Mental/calculo-mental|Hub original]]: técnicas de compensação e checkpoints.

**Limite:** exemplos exatos; rapidez e precisão dependem de execução, sem medição individual aqui.
