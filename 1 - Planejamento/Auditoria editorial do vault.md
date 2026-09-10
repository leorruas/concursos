---
title: "Auditoria editorial do vault"
type: "auditoria"
status: "ativo"
created: 2026-09-10
updated: 2026-09-10
scope: "piloto"
---

# Auditoria editorial do vault

Esta auditoria usa como referência o [[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]. O objetivo é escolher onde a revisão gera maior retorno para prova, sem reescrever notas fortes por simples uniformização. Esta primeira versão é um piloto deliberadamente pequeno; a cobertura será ampliada por lotes.

## Critérios

Cada nota recebe três leituras independentes: qualidade editorial, confiabilidade e prioridade estratégica. A prioridade considera editais ativos, reutilização entre concursos, peso da disciplina, proximidade da prova e evidências em `data/erros-recorrentes.json`. A auditoria não promove inferências a fatos e não corrige conteúdo sem fonte adequada.

## Lote piloto

| Nota | Qualidade editorial | Confiabilidade | Prioridade | Diagnóstico | Próxima ação |
|---|---|---|---|---|---|
| [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]] | forte | boa_base | alta | Conteúdo amplo e já enriquecido por erros reais. O principal risco é recuperação: condição necessária/suficiente, direção da seta e traduções da linguagem natural estão concentradas em uma nota longa. | Refinar navegação interna, relações e termos recuperáveis. Evitar dividir a nota antes de testar a busca. |
| [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]] | forte | verificar | alta | A nota cobre contrapositiva, recíproca, inversa, equivalência disjuntiva, negação e De Morgan. O frontmatter registra `updated: 2026-05-29`, embora o histórico do vault registre enriquecimentos posteriores. | Corrigir metadados durante a revisão e verificar pontos formais antes de expansão. |
| [[3 - Materias/Portugues/04 - regencia|Regência verbal e nominal]] | precisa_refinamento | verificar | média-alta | Regras e exemplos úteis já existem, mas há pouca camada explícita de mecanismos de cobrança, fronteiras, conexões e heurísticas. Algumas formulações absolutas devem ser conferidas em fonte normativa/gramatical antes de serem ampliadas. | Fazer revisão técnica com fonte e integrar regência, crase, transitividade e armadilhas de prova sem transformar a nota em inventário de verbos. |
| [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]] | forte | boa_base | alta | Estrutura madura: Schein, Kunsch, modalidades, ativos intangíveis, fronteiras conceituais, FGV e heurísticas. Funciona como uma das referências editoriais do vault. | Preservar como benchmark. Revisar apenas relações com outras notas e proveniência quando necessário. |
| [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]] | precisa_refinamento | boa_base | alta | O ciclo diagnóstico → objetivos → estratégias → táticas → indicadores está claro e há boas distinções entre eficiência, eficácia e efetividade. Faltam conexões explícitas com pesquisa, públicos, métricas e planejamento de mídia, além de exemplos de fronteira. | Refinar conexões e casos de prova, mantendo o artigo compacto. |

## Leitura transversal do piloto

O piloto mostra que qualidade da nota e prioridade de estudo não são a mesma coisa. `Conectivos` é uma nota forte, mas continua prioritária porque o histórico registra confusões em tradução da condicional. `Comunicação organizacional` também é forte, mas permanece estratégica pelo peso de Comunicação na Dataprev. `Regência` precisa de mais trabalho editorial e técnico mesmo sem ser a maior fonte atual de erros.

O padrão atual também revela uma inconsistência histórica entre notas criadas sob prompts diferentes. Algumas usam `Como isso aparece em prova`, outras `Como a banca cobra`; algumas têm `Heurísticas`, outras `Notas de raciocínio`. Isso não deve provocar reforma mecânica. A auditoria verifica função cognitiva, não correspondência literal de títulos.

## Sinais multi-edital já existentes

`data/edital-itens.json` já usa `concursoId` e `notaPath`, permitindo que concursos diferentes reutilizem a mesma nota. `data/provas.json` já separa provas e bancas, incluindo FGV e Cebraspe. A evolução do vault deve aproveitar essa estrutura em vez de criar conhecimento duplicado por concurso.

## Fila de revisão

### Lote 1: alto retorno imediato

1. [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]]: melhorar recuperabilidade, relações e navegação interna.
2. [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]]: conferir metadados e formalizações associadas aos erros recentes.
3. [[3 - Materias/Portugues/04 - regencia|Regência verbal e nominal]]: revisão técnica e editorial com fontes.
4. [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]]: relações e fronteiras com pesquisa, públicos e mídia.
5. [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]]: revisão mínima como benchmark de consistência.

### Lote 2: expansão da auditoria

Auditar os demais artigos de Comunicação, Português e Lógica. A ordem interna deve combinar peso no concurso mais próximo, evidência de erro e grau de reutilização por outros editais. Nesta etapa, marcar também notas excessivamente grandes que possam precisar de melhor navegação, sem assumir que tamanho exige divisão.

### Lote 3: matérias reaproveitáveis entre concursos

Auditar Direito Constitucional, Direito Administrativo, Administração Pública, Administração Geral e Informática. A prioridade deve crescer quando novos editais mapearem os mesmos conceitos, evitando reescrita específica para cada órgão.

### Lote 4: baixa cobertura atual

Auditar matérias com poucas notas ou notas-hub muito curtas, como Inglês e Redação, distinguindo ausência real de conhecimento consolidado de matérias que funcionam melhor por prática do que por artigos teóricos extensos.

## Busca: baseline para a próxima fase

A busca atual deve ser evoluída em incrementos testáveis. O primeiro incremento será apenas normalização e ranking estrutural. A consulta deve distinguir correspondência em título, heading, matéria e corpo. Em seguida, os itens de `data/edital-itens.json` ligados à nota passarão a contribuir para recuperação. Isso permitirá que redações diferentes de editais encontrem o mesmo artigo canônico.

Antes de adicionar fuzzy search ou `concept_id`, criar um conjunto pequeno de consultas de referência. Exemplos iniciais:

| Consulta | Resultado esperado entre os primeiros |
|---|---|
| `condição necessária` | Conectivos lógicos |
| `contrapositiva` | Equivalências e negações lógicas |
| `lógica sentencial` | Conectivos lógicos |
| `cultura organizacional` | Comunicação organizacional e Comunicação interna |
| `eficácia efetividade` | Planejamento de comunicação |
| `crase cidade` | Regência verbal e nominal |

Essas consultas funcionarão como teste de regressão da busca. O objetivo é medir relevância, não apenas verificar se algum resultado existe.

## Próxima execução

A próxima fase deve revisar o Lote 1 em pequenas alterações e, em paralelo, implementar o primeiro incremento de busca em `web/06-search.js`. Cada mudança funcional da busca deve ser separada da revisão editorial para que regressões possam ser isoladas.