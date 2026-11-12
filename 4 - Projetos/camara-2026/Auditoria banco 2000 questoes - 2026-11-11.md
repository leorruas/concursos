# Câmara 2026: auditoria inicial do banco e expansão para 2.000 itens

Data de referência: 11/11/2026. Branch: `camara-banco-2000-auditoria-20261111`.

## Estado verificado no GitHub

O arquivo `data/questoes-camara.json`, na branch principal consultada, contém **389 itens em `pilotoDidatico`**, distribuídos entre dez subjectIds. Os campos presentes são: `origin`, `format`, `examPart`, `subjectId`, `unitId`, `editalRef`, `conceptId`, `mechanism`, `theoryRefs`, `statement`, `correctAnswer` e `explanation`. Nenhum dos 389 enunciados apresentou duplicação *literal normalizada* (NFKC, minúsculas e espaços); isso não comprova ausência de duplicações semânticas. Todos possuem ao menos uma `theoryRefs`; a existência do alvo e do subtítulo ainda exige auditoria.

| subjectId | Itens no banco | C | E |
| --- | ---: | ---: | ---: |
| portugues | 50 | 24 | 26 |
| ingles | 50 | 25 | 25 |
| informatica | 50 | 25 | 25 |
| comunicacao | 50 | 25 | 25 |
| estado-democracia | 50 | 25 | 25 |
| orcamento-publico | 59 | 27 | 32 |
| administracao-publica | 30 | 15 | 15 |
| direito-constitucional | 20 | 12 | 8 |
| direito-administrativo | 18 | 9 | 9 |
| etica-publica | 12 | 6 | 6 |
| **Total** | **389** | **193** | **196** |

O arquivo `scripts/test-camara-questions.js` estabelece uma proteção para **168 itens originais de TI em 28 artigos**: 13 marcados **NÃO HOMOLOGADOS**, com substitutas rastreáveis. Esses 168 itens são referências editoriais em Markdown e não devem ser somados automaticamente aos 389 itens do JSON; a reconciliação por enunciado e conceito ainda está pendente. O código inspecionado testa 13 bloqueios, mas esta auditoria não executou os testes.

A matriz acima é uma contagem por matéria, **não** uma matriz completa de cobertura por item do edital e artigo. O conjunto de 389 itens não possui campos explícitos de ID estável, dificuldade, operação cognitiva, status de revisão ou proveniência detalhada. Não presumir que todos estejam validados. O fato de terem gabaritos e comentários não equivale a homologação editorial.

## Riscos e decisões de engenharia

1. **Preservar compatibilidade:** adicionar metadados por extensão ou manter um registro editorial auxiliar, sem invalidar os consumidores atuais de `pilotoDidatico`. Estudar os seletores de simulados e os testes antes de mudar o schema.
2. **Evitar publicação prematura:** novos itens devem iniciar como `gerada` e só entrar na seleção confiável depois de revisão conceitual e testes. Em especial, não chamar nenhum item de questão real Cebraspe sem referência documental específica.
3. **Proteger TI:** nunca alterar ou apagar os 13 itens não homologados, nem neutralizar `camara-ti-question-guard.js` para obter testes verdes.
4. **Privacidade:** gravar somente questões, fontes e informações editoriais no repositório público; sessões e resultados individuais pertencem a `leorruas/concurso-dados`.
5. **Cobertura:** cruzar os 11 subjectIds do cadastro com tópicos do edital e os `articleIds` do catálogo v2, produzindo linhas `matéria × tópico × artigo`, contagens existentes, lacunas, operações cognitivas e dificuldade.
6. **Qualidade:** verificar também equivalência semântica, contradição de gabaritos, atuais fontes normativas e o conteúdo dos artigos. A normalização de texto é só um filtro inicial.

## Estado da meta

Meta adicional: 2.000 itens inéditos e distintos (300 fáceis, 700 médios, 700 difíceis, 300 muito difíceis). Base prévia no JSON: 389 itens, **não contabilizados** como novos. Novos gerados nesta auditoria: **0**. Novos revisados: **0**. Novos validados: **0**. Lotes concluídos: **0**. Status dos testes: **não executados**. Cobertura completa e quantidade de questões reais indexadas: **pendentes de reconciliação**.

## Próximo lote

Antes de incorporar 40 a 60 itens ao JSON, verificar a arquitetura de seleção e criar a camada de metadados/validação, de modo que o banco diferencie geradas, revisadas, validadas e bloqueadas. Priorizar assuntos com menor densidade demonstrável após confrontar a matriz por tópico, especialmente Direito Administrativo, Ética Pública e Direito Constitucional, sem presumir lacunas nos artigos Markdown.

Esta nota registra exclusivamente fatos verificáveis pela leitura dos arquivos indicados e pendências explícitas. Não representa aprovação conceitual, execução de suíte ou entrega do primeiro lote.
