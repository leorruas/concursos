---
title: "CGU 2026 — Corpus de provas-espelho"
type: "corpus-provas"
status: "em_construcao"
created: 2026-10-09
updated: 2026-10-09
---

# CGU 2026 — Corpus de provas-espelho

**Alvo:** CGU 2026, Auditor Federal de Finanças e Controle, especialidade Auditoria. Não criar pasta específica da CGU; o corpus pertence ao hub [[00 - Desempenho/Provas/00 - Desempenho por edital e prova|Desempenho por edital e prova]] e seu dado estruturado é `data/corpus-provas-espelho.json`.

## Hierarquia de comparação

| Prova (fonte oficial) | Banca / formato REAL | Função para CGU 2026 | Estado do material |
| :--- | :--- | :--- | :--- |
| [CGU 2022 — Auditoria e Fiscalização, específicos](https://conhecimento.fgv.br/sites/default/files/concursos/cgu_2021_auditor_federal_de_financas_e_controle_-_area_auditoria_e_fiscalizacaoaffc-af_tipo_1_tarde.pdf) | FGV, 80 questões A–E | **Principal de conteúdo e atribuições**; não imitar o formato de respostas | Caderno oficial e [gabarito definitivo retificado](https://conhecimento.fgv.br/sites/default/files/concursos/cgu2021_gabarito_definitivo_retificado_20.04.2022.pdf) localizados; indexação individual pendente |
| [CGU 2022 — básicos, manhã](https://conhecimento.fgv.br/sites/default/files/concursos/cgu_2021_auditor_federal_de_financas_e_controleaffc_tipo_1_manha.pdf) | FGV, A–E | Complementar P1/P2; verificar atualidade dos temas | Link oficial identificado; PDF ainda não validado |
| [CGE/AL 2026 — Controle Interno](https://www.cebraspe.org.br/concursos/cge_al_26) | Cebraspe, **C/E** (edital verificado) | **Principal candidata para formato** e processos de controle, quando caderno recuperado | Caderno e gabarito definitivo pendentes |
| [TCU 2026 — AUFC Auditoria de TI, básicos](https://cdn.cebraspe.org.br/concursos/tcu_25_aufc/arquivos/E853346980B6093207C3ECF8630F11E71C8F39D74F9D7881E2AB5DE760FB5366.pdf) | Cebraspe, **C/E** (caderno real) | Evidência imediata de formulação de itens, comandos, escopo e extensão; **não** copiar distribuição temática de TI | Caderno oficial confirmado, gabarito definitivo pendente |
| [TCE/MG 2026 — Ciências Contábeis](https://www.cebraspe.org.br/concursos/tce_mg_25) | Cebraspe, **múltipla escolha A–E** | Corpus secundário de auditoria/contabilidade, **não** modelo C/E | Caderno e gabarito definitivo pendentes |

A **CGU 2022 foi organizada pela FGV** e serve para aproximar o conteúdo; a CGU 2026 é **Cebraspe C/E**. Mesma banca não implica mesmo formato: o TCE/MG 2026 utilizou cinco alternativas. O edital da CGE/AL 2026 prevê C/E, mas não se pode tratar seu corpus como analisado antes de recuperar o caderno.

## Arquivo permanente das fontes PDF

O manifesto de preservação é `data/corpus-provas-espelho.json`: para cada PDF, guarda URL oficial, identificador estável, cargo, formato e caminho desejado no Git. O diretório é **`assets/provas-espelho/`** (arquivo de fontes, não nova pasta de projeto ou artigo). `scripts/baixar-provas-espelho.mjs` valida assinatura PDF e calcula SHA-256 antes de gravar o arquivo. A automação do GitHub registra o resultado em `data/corpus-pdfs-verificados.json` e tenta versionar os PDFs com bot; conferir o workflow para declarar qualquer PDF realmente presente no repositório.

Links externos são mantidos mesmo após arquivamento. Não afirmar que o PDF está preservado sem confirmar o caminho no Git e o hash. Verificar condições de redistribuição das fontes oficiais antes de compartilhá-las fora do acervo de estudo.

## Pipeline para exercícios (sem gabaritos inventados)

1. **Ingestão da fonte:** edital e retificações, caderno PDF oficial, tipo, prova/cargo, gabarito definitivo, resposta discursiva e justificativas de anulação; armazenar links e SHA-256.
2. **Catalogação da prova:** registrar separadamente o eixo de **conteúdo** (P1/P2/P3, assunto, norma, tópico do edital) e o de **formato** (C/E × A–E, tamanho, comando, caso, mecanismo de erro).
3. **Indexação real item a item:** em `data/corpus-itens.json`, inserir somente itens efetivamente examinados e identificados por `idProva`, `numeroOriginal`, `pagina`, `blocoCGU`, `tema`, `mecanismo`, `tipoOriginal`, `gabaritoDefinitivo`, `situacaoGabarito`, `notaPath` (quando confirmada), `validadeNormativa` e `evidenciaFonte`. Não copiar o texto integral de provas nos dados do site.
4. **Treino de questões reais:** recuperar a questão pelo PDF e sua numeração original; só corrigir com gabarito definitivo conferido, controlando anulações e itens sob norma revogada.
5. **Geração inédita:** combinar conteúdos com a estrutura oficial CGU 2026 e **mecanismos empiricamente observados em cadernos C/E**. Registrar de qual item/mecanismo veio a inspiração, mas reescrever integralmente enunciado/caso e evitar transposição literal FGV → C/E.
6. **Simulado e desempenho:** 170 C/E (P1 40 + P2 40 + P3 90, pesos +1/−1, +1/−1, +2/−2), com discursiva sob rubrica CGU quando pertinente. Enviar os resultados para `data/provas.json`, ledger, [[00 - Desempenho/Simulados/00 - Catalogo de simulados|catálogo]] e [[00 - Desempenho/00 Avancos globais|Avanços globais]], sempre com `concursoId: cgu-2026`.

### Regras anti-ilusão

- **Prova localizada ≠ PDF baixado ≠ caderno lido ≠ itens indexados ≠ simulado calibrado**. Cada estado deve constar no registro.
- **Gabarito preliminar ≠ definitivo**. Sem gabarito definitivo vinculado ao tipo da prova, não usar questões para aferir domínio.
- **Caderno FGV de cinco opções ≠ item C/E**. Aproveitar assunto e complexidade cognitiva, sem simular que a FGV é a banca da CGU 2026.
- **Prova histórica ≠ norma vigente**. Conferir legislação, manuais e jurisprudência aplicáveis ao edital 2026.
- O corpus bruto nunca deve ser somado a `data/provas.json` como desempenho do candidato; essa estrutura registra **provas realizadas e comparabilidade**.

## Indexação-piloto de itens reais (sem transcrição do enunciado)

Quatro itens da prova **CGU 2022 / Auditoria e Fiscalização / TARDE / TIPO 1** foram associados ao gabarito **definitivo retificado**, identificado na **página 17** do PDF de gabaritos. Os números abaixo são da numeração original do caderno, não da CGU 2026.

| Item original | Página do caderno | Mecanismo observado | Gabarito oficial | Relação com CGU 2026 |
| :---: | :---: | :--- | :---: | :--- |
| 1 | 3 | Livre iniciativa × restrição fiscal como sanção política | **B** | P1 / Constitucional |
| 4 | 4 | Requisitos de CPI × deliberação política da direção | **D** | P1 / Controles e democracia |
| 6 | 5 | Iniciativa legislativa em matéria tributária × veto | **D** | P1 / Estado e instituições |
| 11 | 6 | Improbidade e entidades privadas financiadas pelo poder público | **D** | P2 / Responsabilização |

O registro estruturado está em `data/corpus-itens.json`; o estado **`validadeNormativa: revalidar_2026`** proíbe tratar esses itens como diagnóstico atual pronto até conferir a legislação e jurisprudência vigentes. Mesmo assim, a extração de **mecanismos conceituais reais** já orienta a preparação da primeira bateria inédita de treino. Os PDFs oficiais completos continuam no acervo, para consulta do enunciado original e alternativas.

## Pendências auditáveis

- [x] Confirmar PDF CGU 2022, específicos, tipo 1, e gabarito definitivo.
- [x] Confirmar PDF de caderno C/E TCU AUFC 2025/2026, conhecimentos básicos.
- [x] Identificar por edital que CGE/AL é C/E e que TCE/MG é múltipla escolha.
- [x] Confirmar 4 PDFs binários versionados em GitHub com tamanho e SHA-256 no manifesto; termos de redistribuição ainda exigem verificação para uso externo.
- [ ] Localizar caderno e **gabarito definitivo da CGE/AL 2026**.
- [ ] Localizar caderno e gabarito definitivo de TCE/MG 2026.
- [ ] Recuperar gabarito definitivo da prova AUFC TCU e associar por modelo.
- [x] Indexar piloto de quatro itens CGU 2022 (Tipo 1 / tarde) com páginas, mecanismos e gabarito definitivo, **sem ainda validar legislação 2026**.
- [ ] Ampliar indexação CGU/CGE/TCE/TCU e verificar validade normativa de cada item.
- [ ] Analisar amostra suficiente para medir mecanismos de cobrança antes de calibrar simulados.

## Fontes

- [CGU 2022 — página do concurso, cadernos e gabarito](https://conhecimento.fgv.br/concursos/concursocgu21).
- [CGE/AL 2026 — edital Cebraspe](https://cdn.cebraspe.org.br/concursos/CGE_AL_26/arquivos/C264386053CAB55BDCA62806E4E6DF992CA8851CCED0E14318D8F334F82A1651.html).
- [TCE/MG 2026 — edital Cebraspe, tipo A–E](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/DE4C24366A74F67144091D9B1A570F6D0BD2BB1821318ACFBE708991C7C28A8A.html).
- [TCU AUFC 2025/2026 — caderno de conhecimentos básicos C/E](https://cdn.cebraspe.org.br/concursos/tcu_25_aufc/arquivos/E853346980B6093207C3ECF8630F11E71C8F39D74F9D7881E2AB5DE760FB5366.pdf).
