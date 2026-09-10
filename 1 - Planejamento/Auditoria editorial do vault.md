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
| [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]] | forte | boa_base | alta | Conteúdo amplo e já enriquecido por erros reais. O principal risco é recuperação: condição necessária/suficiente, direção da seta e traduções da linguagem natural estão concentradas em uma nota longa. | Refinar navegação interna e relações apenas se a busca continuar insuficiente. Evitar dividir a nota antes de medir a recuperação. |
| [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]] | forte | verificar | alta | A nota cobre contrapositiva, recíproca, inversa, equivalência disjuntiva, negação e De Morgan. O metadado de atualização estava defasado e foi corrigido em 10/09/2026; também foram adicionadas relações explícitas com conectivos, tabela-verdade, quantificadores e argumentação. | Verificar pontos formais e fontes antes de considerar a confiabilidade consolidada. |
| [[3 - Materias/Portugues/04 - regencia|Regência verbal e nominal]] | forte após revisão | boa_base | média-alta | Revisada tecnicamente em 10/09/2026. Foram corrigidas simplificações sobre `chegar em` no português brasileiro e, principalmente, a generalização que colocava `comunicar` no mesmo padrão de alternância de `informar/avisar`. A nota agora inclui regência nominal, relações com crase e termos da oração, mecanismos de prova, tensões e heurísticas. | Preservar e validar por questões. Expandir apenas a partir de erro real ou novo edital. |
| [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]] | forte | boa_base | alta | Estrutura madura: Schein, Kunsch, modalidades, ativos intangíveis, fronteiras conceituais, FGV e heurísticas. Funciona como uma das referências editoriais do vault. | Preservar como benchmark. Revisar apenas relações com outras notas e proveniência quando necessário. |
| [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]] | precisa_refinamento | boa_base | alta | O ciclo diagnóstico → objetivos → estratégias → táticas → indicadores está claro e há boas distinções entre eficiência, eficácia e efetividade. Faltam conexões explícitas com pesquisa, públicos, métricas e planejamento de mídia, além de exemplos de fronteira. | Refinar conexões e casos de prova, mantendo o artigo compacto. |

## Leitura transversal do piloto

O piloto mostra que qualidade da nota e prioridade de estudo não são a mesma coisa. `Conectivos` é uma nota forte, mas continua prioritária porque o histórico registra confusões em tradução da condicional. `Comunicação organizacional` também é forte, mas permanece estratégica pelo peso de Comunicação na Dataprev. `Regência`, por outro lado, saiu do estado de refinamento estrutural e deve agora ser validada por questões em vez de continuar crescendo por antecipação.

O padrão atual também revela uma inconsistência histórica entre notas criadas sob prompts diferentes. Algumas usam `Como isso aparece em prova`, outras `Como a banca cobra`; algumas têm `Heurísticas`, outras `Notas de raciocínio`. Isso não deve provocar reforma mecânica. A auditoria verifica função cognitiva, não correspondência literal de títulos.

## Sinais multi-edital já existentes

`data/edital-itens.json` usa `concursoId` e `notaPath`, permitindo que concursos diferentes reutilizem a mesma nota. `data/provas.json` separa provas e bancas, incluindo FGV e Cebraspe. A evolução do vault deve aproveitar essa estrutura em vez de criar conhecimento duplicado por concurso.

A busca web passou a usar essas relações em 10/09/2026. Um item de edital contribui para a recuperação da nota apontada por `notaPath`, independentemente do concurso atualmente selecionado na interface. Assim, vocabulários diferentes de editais podem levar ao mesmo artigo canônico.

## Fila de revisão

### Lote 1: alto retorno imediato

1. [[3 - Materias/Logica/02 - conectivos|Conectivos lógicos]]: conteúdo forte; aguardar teste da busca multi-edital antes de alterar estrutura.
2. [[3 - Materias/Logica/04 - equivalencias|Equivalências e negações lógicas]]: metadados e relações refinados; falta verificação formal/fonte.
3. [[3 - Materias/Portugues/04 - regencia|Regência verbal e nominal]]: revisão técnica e editorial concluída em 10/09; próxima evidência deve vir de questões.
4. [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]]: próximo artigo para refinamento editorial, com foco em fronteiras e relações.
5. [[3 - Materias/Comunicacao/01 - comunicacao organizacional|Comunicação organizacional]]: revisão mínima como benchmark de consistência.

### Lote 2: expansão da auditoria

Auditar os demais artigos de Comunicação, Português e Lógica. A ordem interna deve combinar peso no concurso mais próximo, evidência de erro e grau de reutilização por outros editais. Nesta etapa, marcar também notas excessivamente grandes que possam precisar de melhor navegação, sem assumir que tamanho exige divisão.

### Lote 3: matérias reaproveitáveis entre concursos

Auditar Direito Constitucional, Direito Administrativo, Administração Pública, Administração Geral e Informática. A prioridade deve crescer quando novos editais mapearem os mesmos conceitos, evitando reescrita específica para cada órgão.

### Lote 4: baixa cobertura atual

Auditar matérias com poucas notas ou notas-hub muito curtas, como Inglês e Redação, distinguindo ausência real de conhecimento consolidado de matérias que funcionam melhor por prática do que por artigos teóricos extensos.

## Busca: baseline e progresso

O primeiro incremento foi implementado em `web/06-search.js` em 10/09/2026. A busca normaliza acentos e caixa, trabalha com múltiplos termos e calcula relevância por título real, título do arquivo, cabeçalhos H2/H3, matéria e corpo. A ordenação deixou de depender apenas de ocorrência literal.

O segundo incremento também foi implementado em 10/09/2026. Os itens de `data/edital-itens.json` ligados à `notaPath` agora entram como campo de busca com peso próprio. A recuperação não fica presa ao concurso selecionado: o objetivo é fazer o vocabulário de qualquer edital cadastrado conduzir ao conhecimento canônico correspondente.

Quando a correspondência existir apenas no edital, o trecho de resultado informa o código e a descrição do item que produziu a relação. Isso permite distinguir um acerto por conteúdo textual de um acerto por mapeamento editorial.

Antes de adicionar fuzzy search ou `concept_id`, manter um conjunto pequeno de consultas de referência:

| Consulta | Resultado esperado entre os primeiros | Estado atual esperado |
|---|---|---|
| `condição necessária` | Conectivos lógicos | conteúdo da nota |
| `contrapositiva` | Equivalências e negações lógicas | conteúdo da nota |
| `lógica sentencial` | Conectivos lógicos | mapeamento TCDF `P.03` |
| `G3.1` | Conectivos lógicos | mapeamento Dataprev `G3.1` |
| `cultura organizacional` | Comunicação organizacional e Comunicação interna | conteúdo + mapeamento de edital |
| `eficácia efetividade` | Planejamento de comunicação | conteúdo da nota |
| `crase cidade` | Regência verbal e nominal | conteúdo da nota revisada |

Essas consultas funcionam como teste de regressão da busca. O objetivo é medir relevância, não apenas verificar se algum resultado existe.

## Próxima execução

O próximo refinamento editorial deve ser [[3 - Materias/Comunicacao/16 - planejamento de comunicacao|Planejamento de comunicação]], porque já possui núcleo forte e pode ganhar retorno de prova com poucas alterações: fronteiras entre diagnóstico, objetivo, estratégia e tática; relações com pesquisa, públicos, métricas e mídia; e casos em que uma alternativa descreve corretamente uma etapa, mas a atribui à etapa errada.

Na busca, o próximo passo não deve ser fuzzy search ainda. Primeiro é necessário observar as consultas de referência após o deploy multi-edital e decidir se aliases ou um índice pré-compilado resolvem lacunas reais. Fuzzy search só deve entrar se houver evidência de falhas por pequenas variações ortográficas, não por antecipação.