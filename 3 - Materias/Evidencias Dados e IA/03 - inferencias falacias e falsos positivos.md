---
articleId: art-4cbf9823a7d145e0
articleAliases: ["3 - Materias/Evidencias Dados e IA/03 - inferencias falacias e falsos positivos.md"]
title: "Inferências, falácias e falsos positivos"
type: "conceito"
status: "ativo"
created: 2026-11-05
updated: 2026-11-05
---

# Inferências, falácias e falsos positivos

## Núcleo do conceito

**Associação** significa que duas variáveis variam juntas em determinado conjunto; **causalidade** afirma que uma intervenção ou fator provoca mudança no resultado, sob hipóteses defendidas. Um dado administrativo pode indicar correlação sem fornecer contrafactual. A validade da conclusão depende de desenho, seleção e explicações alternativas.

**Inferência individual a partir de agregados** é a armadilha da **falácia ecológica**. Se municípios com mais fiscalizações apresentam mais corrupção detectada, não se pode afirmar que cada servidor fiscalizado seja mais corrupto ou que a fiscalização cause corrupção. Pode haver maior detecção.

## Erros de inferência próximos

| Problema | Definição | Exemplo |
| :--- | :--- | :--- |
| Confundimento | Fator influencia tratamento e resultado | Órgãos com maior risco recebem mais auditorias e têm mais achados |
| Viés de seleção | Amostra difere sistematicamente do universo | Selecionar apenas contratos denunciados |
| Causalidade reversa | O resultado influencia a suposta causa | Aumento de irregularidades leva a mais inspeções |
| Falácia ecológica | Propriedade de grupos atribuída a indivíduos | Município com alto índice implica culpa de cada servidor |
| Generalização apressada | Inferir universo a partir de casos inadequados | Dois contratos com fraude provam que todos são fraudulentos |
| Viés de confirmação | Buscar ou pesar apenas fatos que confirmam hipótese | Ignorar documentos que explicam divergência |
| Falso positivo | Alerta identifica caso sem problema real | Match por nome confunde homônimos |
| Falso negativo | Caso com problema não é sinalizado | Sistema não capta fraude com dados ausentes |

### Sensibilidade, especificidade e valor preditivo positivo

**Sensibilidade** é a proporção de casos verdadeiramente positivos que o teste detecta. **Especificidade** é a proporção de negativos reais corretamente descartados. **Valor preditivo positivo** é a proporção de alertas positivos que de fato correspondem a casos positivos. O último depende também da prevalência na população examinada.

**Exemplo de triagem hipotética:** entre 10.000 contratos, 100 têm problema real (1%). Um detector encontra 90 desses (sensibilidade 90%) e classifica como suspeitos 495 contratos regulares (especificidade 95%). Há **585 alertas**, mas apenas **90 confirmados**: valor preditivo positivo = 90/585 ≈ **15,4%**. Um algoritmo com boa sensibilidade pode gerar muitos falsos positivos quando a ocorrência é rara. As proporções pressupõem universo conhecido e são usadas aqui apenas como ilustração.

**Revisão humana** pode examinar documentos, mas não corrige automaticamente viés se os revisores só veem registros selecionados por modelo. **Precisão de classificação ≠ prova jurídica.**

## Caso comentado

A região X possui maior número de denúncias e o órgão lança ali mais auditorias. O aumento de achados depois das auditorias pode refletir maior capacidade de detecção, mudança de critérios, nova propensão a denunciar ou aumento de ilícitos. A conclusão causal exige estratégia adequada para separar explicações.

## Como a Cebraspe cobra

Pode apresentar taxa agregada e atribuí-la a indivíduo, trocar falso positivo por falso negativo, ou afirmar que classificador de 95% de especificidade gera 95% de alertas verdadeiros. Essas proporções descrevem coisas diferentes.

## Questões comentadas: inéditas C/E

**Item 1.** Se um sistema apresenta especificidade de 95%, então 95% dos casos que ele classifica como positivos são necessariamente verdadeiros positivos.

**Gabarito: Errado.** Especificidade mede acerto entre negativos reais; valor preditivo dos positivos depende da prevalência.

**Item 2.** A alta frequência de denúncias em um município permite, isoladamente, inferir que cada servidor municipal tem alta probabilidade individual de praticar irregularidade.

**Gabarito: Errado.** Há falácia ecológica e confundimento pela propensão à denúncia e à detecção.

## Relações com outros temas

- [[3 - Materias/Avaliacao de Politicas Publicas/05 - identificacao causal e avaliacao economica|Identificação causal: desenhos e hipóteses]].
- [[3 - Materias/Evidencias Dados e IA/02 - indicadores denominadores e subnotificacao|Indicadores e denominadores]].
- [[3 - Materias/Auditoria Governamental/dados-analise-e-ia-na-auditoria|Análise de dados na auditoria]].

## Tensões e pegadinhas

**Associação ≠ efeito causal.** **Taxa do grupo ≠ propriedade individual.** **Especificidade ≠ valor preditivo positivo.** **Alerta ≠ irregularidade comprovada.**

## Heurísticas

Ao ler uma afirmação sobre causa, procure **quem foi selecionado, o que teria ocorrido sem a intervenção e que fatores concorrentes mudaram**. Para um teste, identifique o denominador de cada taxa.

## Fontes

- [Edital CGU 2026, Evidências 3.1 e 3.2](https://cdn.cebraspe.org.br/concursos/CGU_26_AFFC/arquivos/90B861E07F72AFB1ECB1B3AE8974443779FFF17388907D1F7F5FDB621761295F.html).
- [CGU, MOT: limites de evidência e testes](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal).

**Limites:** teoria causal aprofundada na nota canônica de Avaliação de Políticas Públicas. Evitar inferir prevalência real a partir do exemplo numérico.
