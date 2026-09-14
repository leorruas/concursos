---
title: "Regras de ingestão de questões"
type: "governanca-estudo"
status: "ativo"
created: 2026-09-14
updated: 2026-09-14
---

# Regras de ingestão de questões

Este documento define o que deve acontecer quando questões, baterias, simulados ou correções entram no vault. A ingestão não serve apenas para contar acertos: ela deve transformar evidência de prova em desempenho rastreável e, quando houver valor pedagógico, em conhecimento reutilizável.

A regra central é: **nem toda questão merece entrar na teoria, mas toda questão deve ter um destino explícito**.

## Destinos possíveis

Cada questão ingerida deve ser classificada em um ou mais destes destinos:

1. `metrica_apenas` — alimenta volume, acertos, aproveitamento e histórico, sem alterar a teoria;
2. `enriquecimento_teorico` — revela regra, nuance, exceção, fronteira ou conteúdo que precisa ser incorporado à nota canônica;
3. `questao_comentada_candidata` — tem valor cognitivo suficiente para virar `## Nova questão comentada` ou integrar `## Questões comentadas` de uma nota;
4. `erro_recorrente` — deve alimentar o registro de erros recorrentes e futuras revisões;
5. `nova_nota` — o conceito cobrado ainda não possui nota canônica adequada.

Os destinos podem coexistir. Uma questão pode, por exemplo, alimentar métricas, gerar enriquecimento teórico e ainda ser candidata a questão comentada.

## Regra por tipo de erro

A taxonomia clínica permanece `K`, `C`, `I`, `D`.

### `[K]` conhecimento

Indica lacuna factual ou teórica real. Deve:

- alimentar métricas e diagnóstico;
- atualizar a nota canônica correspondente;
- criar nota nova se o conhecimento não existir;
- ser candidata a questão comentada quando a questão representar bem o núcleo da lacuna ou uma fronteira importante.

### `[C]` confusão conceitual

Indica conteúdo já visto, mas com fronteira borrada, transposição entre categorias, inversão ou aplicação indevida. É a categoria com **maior prioridade para virar questão comentada**, porque a questão ajuda a reconstruir a decisão entre alternativas próximas.

Deve:

- registrar a fronteira exata que falhou;
- atualizar `Tensões e pegadinhas`, `Heurísticas` ou a estrutura interna da nota quando necessário;
- considerar fortemente `questao_comentada_candidata`;
- alimentar `erro_recorrente` quando houver repetição do mesmo mecanismo.

### `[I]` interpretação

Indica leitura equivocada do comando, escopo ou premissa. Em regra:

- alimenta desempenho e diagnóstico;
- não altera teoria se o erro for puramente circunstancial;
- pode enriquecer `Heurísticas` ou virar questão comentada quando revelar padrão recorrente da banca, como negação no comando, troca de escopo, verdade parcial ou inferência além do texto.

### `[D]` distração

Indica lapso de leitura, marcação, palavra delimitadora ou cálculo final. Em regra:

- alimenta apenas métricas e diagnóstico;
- não deve poluir artigo teórico;
- só sobe para `Heurísticas` ou questão comentada quando o mesmo mecanismo se repetir de forma relevante e recuperável.

## Acertos também podem gerar conhecimento

Uma questão não precisa ter sido errada para justificar enriquecimento. Questões acertadas podem subir para a teoria quando:

- contêm um distrator excepcionalmente plausível;
- explicitam uma fronteira conceitual que vale revisar;
- mostram uma forma recorrente de cobrança da FGV/Cebraspe;
- exigem uma heurística decisiva que ainda não está registrada;
- combinam dois conceitos do edital de forma reutilizável.

O critério é **valor cognitivo**, não apenas erro.

## Critério para questão comentada

Uma questão é forte candidata quando pelo menos uma destas condições estiver presente:

- depende de distinguir conceitos vizinhos;
- o melhor distrator é uma verdade parcial;
- há transposição de definição para categoria errada;
- há inversão de causa, ordem, condição, finalidade ou intensidade;
- a questão explora uma exceção relevante;
- houve erro `[C]` ou `[K]` de alto valor;
- o mesmo mecanismo já apareceu mais de uma vez;
- a questão representa bem uma cobrança real de banca e seria útil na revisão pré-prova.

Não promover questão trivial, repetitiva ou puramente factual se ela não acrescentar uma decisão relevante.

## Limite dentro dos artigos

O artigo não deve virar banco de questões. Aplicar o [[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]:

- normalmente manter **1 a 3 questões comentadas de alto valor cognitivo por nota**;
- se surgir uma questão melhor, substituir ou fundir em vez de acumular indefinidamente;
- baterias extensas pertencem à camada de desempenho/simulados, não à teoria canônica;
- `## Nova questão comentada` é uma forma válida de atualização incremental.

## Como registrar a questão comentada

A questão integrada à teoria deve conter o suficiente para ser revisada isoladamente:

- situação ou enunciado;
- alternativas, quando aplicável;
- gabarito;
- raciocínio decisivo;
- por que a correta está correta;
- por que o melhor distrator parece plausível e onde falha;
- comentários adicionais apenas quando produzirem distinção útil.

Questões reais devem preservar proveniência: banca, prova/ano e fonte. Se houver adaptação, declarar explicitamente que é uma adaptação ou questão inédita inspirada no mecanismo de cobrança; não apresentar como transcrição literal.

## Fluxo de ingestão

Para `bateria_dirigida`, `simulado` ou correção de questão:

1. registrar data, disciplina, volume, acertos e contexto da bateria;
2. classificar cada erro em `[K]`, `[C]`, `[I]` ou `[D]`;
3. identificar o recorte exato e a nota canônica correspondente;
4. atribuir explicitamente o destino pedagógico da questão;
5. atualizar teoria somente quando houver ganho conceitual real;
6. selecionar candidatas a questão comentada pelo valor cognitivo;
7. atualizar erros recorrentes quando houver repetição;
8. atualizar `Avancos.md`, simulados, dashboards e demais métricas aplicáveis;
9. se houver nota nova ou alteração pública relevante em `3 - Materias/`, cumprir o [[1 - Planejamento/Contrato de publicacao GitHub Pages|Contrato de publicação — GitHub Pages]].

## Estrutura mínima do relatório de ingestão

Quando houver questões, o relatório deve conseguir distinguir:

```yaml
questao: Q12
taxonomia: C
tema: "condição necessária e suficiente"
nota: "3 - Materias/Logica/02 - conectivos.md"
destinos:
  - metrica_apenas
  - enriquecimento_teorico
  - questao_comentada_candidata
motivo: "Distrator inverte condição necessária e suficiente; mecanismo recorrente."
```

Para acerto de alto valor:

```yaml
questao: Q18
resultado: acerto
tema: "gêneros jornalísticos"
nota: "3 - Materias/Comunicacao/13 - generos jornalisticos.md"
destinos:
  - metrica_apenas
  - questao_comentada_candidata
motivo: "Distrator transpõe formato interpretativo para gênero diversional."
```

## Regra de não duplicação

Antes de enriquecer uma nota ou inserir questão comentada:

- verificar se a mesma regra já está consolidada;
- verificar se já existe questão que cobre a mesma fronteira;
- preferir refinar/substituir uma questão existente a adicionar outra redundante;
- não transformar erro circunstancial em teoria permanente.

## Pergunta de controle

Antes de promover uma questão para a nota teórica, perguntar:

**“Rever esta questão na semana anterior à prova aumentaria a chance de acertar outra questão conceitualmente semelhante?”**

Se a resposta for não, a questão deve permanecer apenas na camada de desempenho.