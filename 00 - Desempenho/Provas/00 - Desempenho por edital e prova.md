---
title: "Desempenho por edital e prova"
type: "hub"
status: "ativo"
created: 2026-09-10
updated: 2026-09-10
---

# Desempenho por edital e prova

Período das fontes analisadas: 2023 a 2026. Última validação documental: 10/09/2026.

Este hub separa três medidas que não devem ser misturadas: **aproveitamento bruto**, **nota calculada pelas regras do edital** e **comparabilidade da prova com o concurso atual**. O objetivo é impedir que um percentual alto em uma bateria de composição diferente seja interpretado como estimativa direta de classificação.

## Dataprev 2026

O edital retificado da Dataprev estabelece 70 questões: 40 de Conhecimentos Gerais e 30 de Conhecimentos Específicos. As questões gerais valem 1 ponto e as específicas valem 2,5 pontos, produzindo máximo de 115 pontos. A aprovação exige cumulativamente **57,5 pontos ou mais** e **não zerar nenhuma disciplina**.

A distribuição oficial é: 12 questões de Língua Portuguesa, 12 de Língua Inglesa, 5 de Raciocínio Lógico Matemático, 6 de Atualidades e Inteligência Artificial, 5 de Legislação acerca de Segurança da Informação e Proteção de Dados e 30 de Conhecimentos Específicos.

A meta de **102/115 (88,7%)** registrada no vault é uma meta estratégica pessoal, não uma nota de corte oficial.

### Provas e simulados registrados

| Prova | Resultado registrado | Comparabilidade com o edital 2026 | Uso correto |
| :--- | :---: | :--- | :--- |
| [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]] | 54/70, 77,1% | Não comparável para nota ponderada | Diagnóstico de erros e aproveitamento bruto |
| [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]] | 67/70, 95,7% | Não comparável para nota ponderada | Diagnóstico de erros e aproveitamento bruto |
| Dataprev 2024: Comunicação Social, Tipo 1 | Ainda não resolvida | Alta | Prova-espelho principal da FGV |

O Simulado 01 foi montado em blocos mistos sem confirmação da distribuição oficial. O Simulado 02 registra expressamente distribuição não oficial. Por isso, nenhum dos dois deve gerar nota /115. Essa distinção é relevante porque **67/70 não equivale, por si só, a 95,7% dos 115 pontos**: a posição dos erros entre gerais e Comunicação altera muito o resultado ponderado.

## Prova-espelho FGV: Dataprev 2024

A prova oficial de 2024 para Analista de Tecnologia da Informação, Comunicação Social, teve 70 questões, cinco alternativas por questão, uma única resposta correta e quatro horas de duração. Sua composição foi muito próxima da atual: 12 de Português, 12 de Inglês, 6 de Raciocínio Lógico Matemático, 5 de Atualidades, 5 de legislação digital e 30 de Comunicação Social.

Em relação a 2026, há uma troca de uma questão entre Lógica e Atualidades/IA: o edital atual prevê 5 de Lógica e 6 de Atualidades/IA. A prova de 2024 é, portanto, excelente para calibrar **forma de cobrança, densidade e repertório**, mas não reproduz integralmente a composição atual exigida pelo protocolo de cálculo ponderado do vault.

**Fontes oficiais:**
- [Página do concurso Dataprev 2024 na FGV](https://conhecimento.fgv.br/concursos/dataprev24)
- [Prova Dataprev 2024, Comunicação Social, Tipo 1](https://conhecimento.fgv.br/sites/default/files/concursos/ati-comunicacao-socialcns009-tipo-1.pdf)
- [Página do concurso Dataprev 2026 na FGV](https://conhecimento.fgv.br/concursos/dataprev26)

## TCDF 2026

A nota de edital já existente no vault registra 150 itens objetivos no modelo Certo ou Errado: P1 com 35 itens de Conhecimentos Básicos, P2 com 45 itens de Conhecimentos Específicos e P3 com 70 itens de Conhecimentos Especializados. O fator de correção torna o desempenho bruto em acertos insuficiente como métrica: uma resposta incorreta reduz a pontuação obtida com uma correta.

Os mínimos registrados para 2026 são 7 pontos em P1, 13 em P2, 21 em P3 e 45 no conjunto das provas objetivas. Como ainda não há prova ou simulado TCDF resolvido e catalogado, **não existe desempenho empírico do candidato para este edital no momento**.

## Prova-espelho Cebraspe: TCDF 2023

O concurso do TCDF de 2023 para o mesmo cargo de Analista Administrativo de Controle Externo, Área de Gestão, Serviços Técnicos e Administrativos, reproduz a arquitetura central do edital atual: 35 itens de Conhecimentos Básicos, 45 de Conhecimentos Específicos I e 70 de Conhecimentos Específicos II, totalizando 150 itens objetivos. As objetivas tiveram quatro horas e a prova discursiva também quatro horas.

Essa coincidência torna o TCDF 2023 a prova-espelho prioritária para treinar o Cebraspe neste projeto. O valor maior não está apenas no conteúdo: está em treinar a decisão de **marcar, deixar em branco e administrar risco** sob correção negativa, além da escrita de peça técnica exigida pelo próprio tribunal.

**Fontes oficiais:**
- [Edital de abertura TCDF 2023](https://cdn.cebraspe.org.br/concursos/tc_df_23/arquivos/ED_1_2023_TCDF_ABERTURA.PDF)
- [Padrão preliminar da prova discursiva do Cargo 1](https://cdn.cebraspe.org.br/concursos/tc_df_23/arquivos/TC_DF_23_PADRO_PRELIMINAR_DE_RESPOSTAS_PROVA_DISCURSIVA_P4_CARGO_1.PDF)
- [Página do concurso TCDF 2026 no Cebraspe](https://www.cebraspe.org.br/concursos/TC_DF_26_ANALISTA)

## Regra de comparabilidade

Uma prova pode ser útil sem ser diretamente conversível para a nota do edital atual. O vault passa a usar a seguinte leitura:

- **Comparabilidade muito alta:** mesmo órgão, cargo ou especialidade e arquitetura de prova praticamente equivalente.
- **Comparabilidade alta:** banca, cargo e estrutura muito próximos, com pequenas diferenças de distribuição.
- **Não comparável para nota:** exercício ou simulado útil para diagnóstico, mas cuja composição não permite aplicar legitimamente a fórmula do edital.

A fonte canônica estruturada dessa camada é `data/provas.json`. Resultados futuros devem ser ligados ao `concursoId` correspondente e declarar explicitamente se a nota do edital é calculável.

---
**Fontes brutas do vault:**
- [[2 - Editais/Dataprev 2026 (Original)|Dataprev 2026]]
- [[2 - Editais/TCDF 2026 ANACE|TCDF 2026 ANACE]]
- [[00 - Desempenho/Simulados/Simulado-01|Simulado 01]]
- [[00 - Desempenho/Simulados/Simulado-02|Simulado 02]]
