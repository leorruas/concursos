---
title: "Ingestão"
type: "inbox"
status: "pendente"
created: 2026-04-25
updated: 2026-09-14
---

# Ingestão

## Proveniência

Entrada normalizada a partir do arquivo anexado pelo usuário `00 ingestão.md`, referente à sessão de estudo de 14/09/2026. A fonte original contém os enunciados, respostas e correções completas. Esta normalização preserva resultados, erros clínicos, questões anuladas/não respondidas e destinos pedagógicos necessários para a ingestão transacional.

A sessão é uma **bateria mista multimatéria**, não um simulado oficial de 70 questões. Para fins do motor de ingestão, usar `--type simulado` apenas como categoria operacional capaz de representar uma sessão mista; não calcular ou projetar nota `/115` porque a composição oficial não foi respeitada.

## Resultado consolidado

Data: 14/09/2026
Acertos: 22/26
Questões válidas: 26
Questões anuladas: 1 (Português Q5)
Questões sem resposta: 3 (Inglês Q1-Q3)

Resultados por bloco:

- Raciocínio Lógico: 5/6 (83,3%).
- Língua Portuguesa: 5/6 válidas (83,3%); 7 itens apresentados, com Q5 anulada por ausência de alternativa incorreta.
- Legislação de SI e proteção de dados: 4/4 (100%).
- Comunicação Social: 6/7 (85,7%).
- Atualidades e IA: 2/3 (66,7%).
- Língua Inglesa: 3 questões apresentadas, sem respostas do usuário; excluir de todas as métricas.

Dado derivado para TAP: 84,4%, usando os pesos cognitivos do vault e somente as 26 questões válidas respondidas.
Dado derivado para pontuação ponderada parcial Dataprev: 31,0/36,5 pontos disponíveis nesta amostra (16 acertos gerais × 1,0 + 6 acertos de Comunicação × 2,5). Não converter para `/115`.

## Erros clínicos

Questão 2 [C] — Raciocínio Lógico — negação de quantificador negativo. Resposta do usuário: A. Gabarito: B. Fronteira: `Nenhum A é B` tem como negação `Algum A é B`; `Todo A é B` é mais forte do que a negação exige. Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`. A regra já existe na nota canônica de quantificadores; evitar duplicação.

Questão 4 [C] — Língua Portuguesa — adversativa × concessiva. Resposta do usuário: D. Gabarito: B. Fronteira: `contudo` coordena oração adversativa; `embora` introduz subordinada concessiva e exige reconstrução da arquitetura argumentativa e, no caso, subjuntivo. Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente`. A mesma fronteira já havia aparecido no Simulado 02; tratar como recorrência de recuperação, não como teoria ausente.

Questão 5 [C] — Comunicação Social — clipping × auditoria de imagem na mídia. Resposta do usuário: B. Gabarito: A. Fronteira: clipping = coleta/organização; auditoria de imagem = análise estruturada e abrangente de cobertura ao longo do tempo. Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`. A distinção já existe na nota canônica de assessoria de imprensa; evitar duplicação.

Questão 1 [K] — Atualidades e IA — regime de metas, IPCA, Selic e Copom. Resposta do usuário: D. Gabarito: C. Lacuna: queda do IPCA não determina corte automático/proporcional da Selic; distinguir meta central, faixa de tolerância, descumprimento formal, fatores temporários e decisão do Copom. Destinos: `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `nova_nota`.

## Destino pedagógico por questão

### Raciocínio Lógico

| Questão | Resultado | Tema | Destinos |
| :--- | :--- | :--- | :--- |
| Q1 | Acerto | Existencial: “alguns” = pelo menos um | `metrica_apenas` |
| Q2 | Erro | Negação de “nenhum” | `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata` |
| Q3 | Acerto | Proposição × sentença aberta | `metrica_apenas` |
| Q4 | Acerto | Inferência existencial e simetria da conjunção | `metrica_apenas` |
| Q5 | Acerto | Quantificador universal + De Morgan | `metrica_apenas` |
| Q6 | Acerto | Caso falso da condicional | `metrica_apenas` |

Evidência positiva relevante: De Morgan reapareceu corretamente em contexto misto depois de oscilação anterior.

### Língua Portuguesa

| Questão | Resultado | Tema | Destinos |
| :--- | :--- | :--- | :--- |
| Q1 | Acerto | `fazer/haver` impessoais × `existir` pessoal | `metrica_apenas` |
| Q2 | Acerto | Partícula apassivadora × índice de indeterminação do sujeito | `metrica_apenas` |
| Q3 | Acerto | Regência e crase com nomes de lugar | `metrica_apenas` |
| Q4 | Erro | `contudo` × `embora` | `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente` |
| Q5 | Anulada | Questão sem alternativa incorreta | Excluir de métricas e teoria |
| Q6 | Acerto | Voz passiva sintética × analítica | `metrica_apenas` |
| Q7 | Acerto | Regência de `preferir X a Y` | `metrica_apenas` |

### Legislação de SI e proteção de dados

| Questão | Resultado | Tema | Destinos |
| :--- | :--- | :--- | :--- |
| Q1 | Acerto de alto valor | Lei 12.737/2012 e redação vigente do art. 154-A após Lei 14.155/2021 | `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `nova_nota` |
| Q2 | Acerto | LGPD: dados sensíveis sem consentimento nas hipóteses legais | `metrica_apenas` |
| Q3 | Acerto | Marco Civil: guarda de registros, 1 ano × 6 meses | `metrica_apenas` |
| Q4 | Acerto | LGPD: advertência e dosimetria de sanções | `metrica_apenas` |

A fonte registra que a Q1 revelou lacuna do vault e motivou nota própria sobre a Lei 12.737/2012, com distinção entre redação original de 2012 e redação vigente após a Lei 14.155/2021.

### Comunicação Social

| Questão | Resultado | Tema | Destinos |
| :--- | :--- | :--- | :--- |
| Q1 | Acerto | Schein: pressupostos básicos subjacentes | `metrica_apenas` |
| Q2 | Acerto | Kunsch: comunicação integrada × repetição multicanal | `metrica_apenas` |
| Q3 | Acerto | Newsmaking e rotinas produtivas | `metrica_apenas` |
| Q4 | Acerto | Gatekeeping × framing × agenda-setting × espiral do silêncio | `metrica_apenas` |
| Q5 | Erro | Clipping × auditoria de imagem na mídia | `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata` |
| Q6 | Acerto | Bridging no media training | `metrica_apenas` |
| Q7 | Acerto | Finalidade predominante: comunicação mercadológica em universidade pública | `metrica_apenas` |

### Atualidades e IA

| Questão | Resultado | Tema | Destinos |
| :--- | :--- | :--- | :--- |
| Q1 | Erro | Regime de metas, IPCA, Selic e Copom | `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `nova_nota` |
| Q2 | Acerto | Mercado de carbono | `metrica_apenas` |
| Q3 | Acerto | Competição estratégica × cooperação internacional em segurança de IA | `metrica_apenas` |

### Língua Inglesa

Q1, Q2 e Q3 foram apenas apresentados; não há respostas do usuário na fonte. Não registrar acerto, erro, volume respondido, aproveitamento, TAP ou diagnóstico de proficiência para esse bloco.

## Diagnóstico consolidado

A sessão produziu quatro erros válidos: três `confusao_conceitual` e um `conhecimento`. O padrão dominante foi fronteira conceitual, não colapso amplo de retenção. Português apresenta uma recorrência específica em adversativa × concessiva. Lógica recuperou De Morgan em contexto misto. Comunicação manteve desempenho alto com falha isolada na passagem de coleta para análise estruturada. Legislação foi gabaritada e a Lei 12.737/2012 apareceu como lacuna de cobertura do vault. Atualidades revelou lacuna objetiva de economia básica.
