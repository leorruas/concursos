---
title: "Simulado 02 - Diagnóstico e Catálogo de Erros"
type: "desempenho"
status: "ativo"
created: 2026-09-01
updated: 2026-09-01
---

# Simulado 02 — Diagnóstico e Catálogo de Erros

- **Data:** 01/09/2026
- **Volume total:** 70 questões
- **Acertos:** 67/70
- **Aproveitamento bruto:** **95,7%**
- **Erros mapeados:** 3 questões: Q15, Q21 e Q35

> [!warning] Limite metodológico
> O simulado não reproduziu corretamente a distribuição oficial das 70 questões por disciplina: houve excesso de Português e Inglês e quantidade menor de Comunicação específica. O resultado bruto é válido, mas não deve ser convertido em nota ponderada /115 nem comparado diretamente aos 102/115.

## Síntese do desempenho

Os três erros ficaram concentrados em Português e Raciocínio Lógico. Comunicação, Inglês, Atualidades/IA e legislação não apresentaram erros neste simulado.

| Questão | Disciplina | Resposta | Gabarito | Classificação | Núcleo do erro |
| :---: | :--- | :---: | :---: | :--- | :--- |
| 15 | Lógica | D | C | Confusão conceitual | Negação de universal com conjunção |
| 21 | Português | C | D | Distração / concordância | Concordância com `existir` e `ocorrer` |
| 35 | Lógica | E | C | Confusão conceitual | Equivalência da condicional |

## Ajustes a partir dos erros

### Q15 — Negação de quantificador universal + conjunção

A afirmação “Todos os relatórios foram revisados e aprovados” pode ser formalizada como:

`∀x [R(x) ∧ A(x)]`

Sua negação é:

`∃x ¬[R(x) ∧ A(x)] ≡ ∃x [¬R(x) ∨ ¬A(x)]`

Logo, basta existir pelo menos um relatório que não tenha sido revisado **ou** não tenha sido aprovado. Exigir as duas falhas simultaneamente, com **e**, produz uma afirmação mais forte que a negação necessária.

**Heurística:** TODOS → PELO MENOS UM; E → OU.

### Q21 — Concordância com haver, existir e ocorrer

O verbo `haver`, com sentido de existir, é impessoal e permanece no singular:

- `Pode haver soluções.`

Os verbos `existir` e `ocorrer` são pessoais e concordam com o sujeito:

- `Devem existir soluções mais simples.`
- `Podem ocorrer alterações.`

A proximidade semântica entre esses verbos favorece uma falsa transferência da impessoalidade de `haver` para `existir` e `ocorrer`.

**Ação:** automatização por questões, sem retorno a uma revisão teórica extensa.

### Q35 — Equivalência da condicional

A proposição `P → Q` possui duas equivalências fundamentais:

- `P → Q`
- `¬P ∨ Q`
- `¬Q → ¬P`

Portanto, “Se a campanha alcançou o público, então o indicador aumentou” equivale a “A campanha não alcançou o público ou o indicador aumentou”.

A forma `¬Q ∨ P` equivale a `Q → P`: trata-se da recíproca, não da proposição original.

**Heurística:** ao transformar a seta em “ou”, negar o antecedente e manter o consequente.

## Dúvida registrada — mas × contudo × embora

`Mas` e `contudo` são adversativos e permitem manter a estrutura coordenada:

> A instituição ampliou os canais digitais; contudo, parte do público continuou enfrentando dificuldades.

`Embora` é uma conjunção subordinativa concessiva. Sua substituição exige reconstrução sintática e, normalmente, verbo no subjuntivo:

> Embora a instituição tenha ampliado os canais digitais, parte do público continuou enfrentando dificuldades.

Em questões de substituição, verificar ao mesmo tempo o sentido e a estrutura sintática exigida pelo conectivo.

## Diagnóstico e prioridades

O resultado sugere que o retorno marginal está na automatização de proposições lógicas e na eliminação de pequenos erros gramaticais sob pressão. As áreas sem erro devem permanecer em manutenção por questões difíceis, sem reabertura da teoria básica.

Prioridades imediatas:

1. equivalências e negações proposicionais;
2. concordância com `haver`, `existir`, `ocorrer` e estruturas próximas;
3. manutenção das áreas consolidadas por questões difíceis.

## Regra para o próximo simulado

Reproduzir exatamente a distribuição oficial:

**12 Português + 12 Inglês + 5 Lógica + 6 Atualidades/IA + 5 Legislação + 30 Comunicação.**
