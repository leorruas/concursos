---
title: "Log de erros - Dataprev 2026"
type: "projeto"
status: "ativo"
created: 2026-07-05
updated: 2026-09-01
---

# Log de erros - Dataprev 2026

Registro de erros recorrentes, pegadinhas de banca e falsos cognatos lógicos identificados durante a resolução de questões e simulados da FGV.

Consulte o catálogo central de simulados em [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]] e o diagnóstico do [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]].

## Língua Portuguesa (FGV)
- **Funções do "SE" (PA vs. IIS):** Q21 do Simulado 01 — *VTD/VTDI com sujeito paciente no plural exige concordância passiva (PA)*; *VTI/VI com preposição mantém verbo invariável na 3ª pessoa do singular (IIS)*. [[3 - Materias/Portugues/02 - sujeito#Sujeito Determinado vs. Indeterminado e as Funções da Partícula "SE"|Estudo em Sujeito]].
- **Crase antes de "que":** Q26 do Simulado 01 — *Diante de pronome relativo "que", a crase só ocorre se houver fusão da preposição "a" exigida pelo termo regente com o pronome demonstrativo "a" (= aquela) subentendido*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].
- **Regência culta de Verbos Transitivos Indiretos:** Q31 do Simulado 01 — *Assistir no sentido de ver/presenciar exige preposição "a" (assistir ao filme)*; *Preferir exige "X a Y", sendo vedado "do que" ou "mais que"*. [[3 - Materias/Portugues/04 - regencia|Estudo em Regência]].

## Raciocínio Lógico (FGV)
- **Equivalência da Condicional (Contrapositiva):** Q61 do Simulado 01 — *$P \to Q \equiv \neg Q \to \neg P$ ("Volta Negando"). A negação $\neg(P \to Q) \equiv P \land \neg Q$ é negação, não equivalência*. [[3 - Materias/Logica/04 - equivalencias#1. Regra do "Volta Negando" (Contrapositiva)|Estudo em Equivalências]].
- **Tabela Verdade da Condicional:** Q65 do Simulado 01 — *A condicional $P \to Q$ só é FALSA quando $P$ é Verdadeiro e $Q$ é Falso ($V \to F$). Em todos os outros 3 casos ($V \to V$, $F \to V$, $F \to F$), a proposição composta é VERDADEIRA*. [[3 - Materias/Logica/05 - tabela verdade|Estudo em Tabela Verdade]].
- **Negação de Universais com Predicados Compostos:** Q70 do Simulado 01 — *$\neg(\forall x, P(x) \land Q(x)) \equiv \exists x, \neg P(x) \lor \neg Q(x)$ ("Pelo menos um não P ou não Q")*. [[3 - Materias/Logica/03 - quantificadores#Negação de Proposições Categóricas|Estudo em Quantificadores]].

## Legislação de SI e Proteção de Dados (Marco Civil e LGPD)
- **Marco Civil da Internet (Art. 2º - Fundamentos):** Q22 do Simulado 01 — *Livre iniciativa, livre concorrência e defesa do consumidor são fundamentos expressos do uso da internet no Brasil (art. 2º, V)*. [[3 - Materias/Informatica/01 - marco civil da internet#Fundamentos da internet no Brasil (art. 2º)|Estudo no Marco Civil]].
- **Neutralidade de Rede (Art. 9º):** Q24 do Simulado 01 — *Neutralidade refere-se estritamente ao tráfego isonômico de pacotes de dados na camada de transporte/infraestrutura, e não à gratuidade ou classificação jurídica de conteúdos*. [[3 - Materias/Informatica/01 - marco civil da internet#Princípios expressos (art. 3º) e a neutralidade de rede (art. 9º)|Estudo no Marco Civil]].
- **LGPD no Setor Público (Art. 23):** Q14 do Simulado 01 e Bateria LGPD — *Tratamento para execução de políticas públicas legais dispensa consentimento, mas exige estrita observância da finalidade pública e princípios da lei*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#3. Tratamento de dados pelo Poder Público e Empresas Estatais|Estudo na LGPD]].
- **Legítimo Interesse em Dados Sensíveis:** Q32 da Bateria LGPD — *Legítimo interesse (art. 7º, IX) é base apenas para dados comuns; NÃO existe legítimo interesse para dados pessoais sensíveis no art. 11*. [[3 - Materias/Comunicacao/03 - lai lgpd e transparencia#2. Bases legais e o regime do consentimento|Estudo na LGPD]].

## Comunicação Social (FGV)
- **Níveis de Cultura Organizacional de Schein:** Q10 e Q13 do Simulado 01 — *Artefatos (visíveis/superficiais: layout, vestimenta, rituais); Valores Compartilhados (discursos declarados, metas, justificativas conscientes); Pressupostos Básicos (invisíveis, inconscientes, verdades inquestionáveis que moldam a ação real)*. [[3 - Materias/Comunicacao/09 - comunicacao interna#3. Cultura Organizacional e os Três Níveis de Edgar Schein|Estudo em Cultura Organizacional]].

## Ajustes a partir dos erros — Simulado 01/09/2026

**Resultado bruto:** 67/70 — 95,7%

> [!warning] Observação metodológica
> O simulado não reproduziu corretamente a distribuição oficial das 70 questões por disciplina. Não utilizar este resultado para cálculo da nota ponderada /115.

### Erros

- **Q15 — Lógica — [C] Confusão conceitual**
  - Negação de quantificador universal + conjunção.
  - `¬∀x(P ∧ Q) ≡ ∃x(¬P ∨ ¬Q)`
  - Reforçar: TODOS → PELO MENOS UM; E → OU.
- **Q21 — Português — [D/C] Concordância verbal**
  - `haver` existencial: impessoal → `pode haver`.
  - `existir` e `ocorrer`: pessoais → `devem existir`, `podem ocorrer`.
  - Necessidade: automatização por questões, não revisão teórica extensa.
- **Q35 — Lógica — [C] Confusão conceitual**
  - Equivalência do condicional ainda instável.
  - Automatizar:
    - `P → Q`
    - `¬P ∨ Q`
    - `¬Q → ¬P`
  - Evitar confundir com a recíproca `Q → P`.

### Dúvida registrada

**Mas × contudo × embora**

- `mas` e `contudo`: adversativos; permitem manutenção da estrutura coordenada.
- `embora`: concessivo subordinativo; exige reestruturação sintática e normalmente subjuntivo.
- Em questões de substituição, verificar simultaneamente sentido e estrutura gramatical.

### Diagnóstico

Comunicação, Inglês, IA e legislação não apresentaram erros neste simulado.

Prioridades imediatas:

1. equivalências e negações proposicionais;
2. concordância com `haver`, `existir`, `ocorrer` e estruturas próximas;
3. manutenção das áreas consolidadas por questões difíceis, sem retorno à teoria básica.

O próximo simulado deve reproduzir exatamente a distribuição oficial:

**12 Português + 12 Inglês + 5 Lógica + 6 Atualidades/IA + 5 Legislação + 30 Comunicação.**

