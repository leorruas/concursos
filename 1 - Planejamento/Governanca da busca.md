---
title: "Governança da busca"
type: "guia"
status: "ativo"
created: 2026-09-30
updated: 2026-09-30
---

# Governança da busca

Este documento define como a busca do GitHub Pages evolui sem divergir do conteúdo canônico do vault.

## Princípio

A busca possui duas camadas diferentes:

1. **camada derivada**, reconstruída automaticamente a partir das notas;
2. **camada semântica**, alterada deliberadamente quando o uso real demonstra necessidade.

O agente nunca deve confundir as duas.

## O que o GitHub Actions atualiza automaticamente

A cada push em `main`, o workflow de Pages executa o build e recria:

- `manifest.json`;
- `search-index.json`;
- seções H2/H3 indexadas;
- anchors estáveis das seções;
- termos compactados e trechos usados na busca.

Criar, editar, mover ou renomear um artigo público altera o índice automaticamente no próximo build. Criar ou renomear H2/H3 também atualiza seus anchors automaticamente.

**É proibido editar `search-index.json` manualmente.** Ele é artefato derivado, não fonte canônica.

## O que o agente mantém

A camada semântica fica em:

- `web/05a-search-config.js`: aliases e parâmetros deliberados de ranking;
- `scripts/search-benchmarks.json`: consultas que representam expectativas reais de recuperação;
- código de ranking em `web/06*.js`, apenas quando a regra estrutural precisar mudar.

## Quando adicionar um benchmark

Se o usuário pesquisar um termo e indicar que outro artigo ou seção deveria aparecer primeiro, o agente deve:

1. registrar a consulta em `scripts/search-benchmarks.json`;
2. declarar o artigo esperado e a seção esperada;
3. reproduzir a falha no teste de ranking;
4. só depois corrigir alias, peso ou algoritmo;
5. rodar a régua inteira para detectar regressões.

Uma falha corrigida deve permanecer como teste de regressão sempre que representar uma expectativa estável.

Benchmarks também podem ser adicionados quando uma prova real revelar nomenclatura de banca importante ou quando um conceito tiver fronteira de busca especialmente ambígua. Não ampliar o conjunto apenas para aumentar volume.

## Quando adicionar alias

Alias é apropriado quando houver evidência de equivalência útil para recuperação, como:

- sigla e nome por extenso;
- variante terminológica recorrente em prova;
- sinônimo que o usuário realmente emprega;
- nome histórico/alternativo que leva ao mesmo conceito;
- falha real de busca causada por vocabulário diferente.

Não criar aliases apenas porque duas expressões são relacionadas. Relação temática não é equivalência de busca.

Um mesmo alias não deve pertencer a grupos semânticos concorrentes.

## Quando alterar pesos

Pesos não devem ser ajustados por um único resultado isolado sem benchmark.

Antes da mudança, registrar a consulta problemática. Depois da mudança, executar `scripts/test-search-ranking.js` e comparar:

- Top 1;
- Top 3;
- seção correta.

A régua mínima configurada em `web/05a-search-config.js` é um piso de regressão, não uma meta de qualidade. Uma alteração não deve reduzir a qualidade global sem justificativa explícita.

A relevância lexical da melhor seção deve dominar sinais contextuais. Edital ativo, erro recorrente e tipo de artigo podem desempatar ou reforçar um resultado, mas não devem fazer uma correspondência fraca vencer uma seção lexicalmente exata.

## Papel dos tipos de conteúdo

Notas canônicas são o resultado preferencial. Hubs, auditorias, desempenho e referências brutas têm papéis diferentes e podem receber penalizações ou exclusões no ranking.

Uma referência bruta não deve vencer uma nota canônica apenas porque repete mais vezes o vocabulário pesquisado.

## Deep links

Resultados de busca devem apontar para `artigo + seção`. O anchor é gerado no build e usado também pelo índice lateral do artigo.

Links antigos sem seção continuam válidos.

## Ciclo de manutenção

O fluxo normal é:

```text
Markdown muda
→ GitHub Actions
→ build recria índice e anchors
→ testes de recall, seção, deep link e ranking
→ deploy
→ confirmação do catálogo ao vivo
```

O agente só intervém na semântica quando:

- o usuário reportar resultado inadequado;
- uma nova terminologia de banca justificar alias;
- o benchmark revelar regressão;
- houver mudança estrutural aprovada na busca.

Não existe aprendizado automático por clique. A busca não deve alterar pesos, aliases ou prioridades a partir de telemetria implícita.

## Mudanças de regra

Mudanças estruturais — novo mecanismo de ranking, nova fonte de contexto, personalização adaptativa, telemetria ou alteração do significado dos scores — devem ser propostas ao usuário antes de virarem governança permanente.

Correções de regressão e aplicação das regras já aprovadas podem ser feitas diretamente.

## Critério de conclusão

Uma mudança na busca só está concluída quando:

1. benchmark relevante foi adicionado ou validado;
2. testes de recall, seção, rota e ranking passaram;
3. build passou;
4. deploy do Pages passou;
5. catálogo ao vivo foi confirmado.


## Observabilidade

A busca possui um modo de diagnóstico deliberado, sem coleta de telemetria.

Adicionar `?debugBusca=1` à URL do GitHub Pages faz os resultados exibirem:

- score combinado;
- score da melhor seção;
- score do artigo/contexto.

O modo normal não mostra esses números. O debug serve para reproduzir e explicar um ranking antes de alterar pesos.

O CI também imprime Top 1, Top 3 e taxa de seção correta para o benchmark canônico. Essas métricas são a fonte preferencial para avaliar regressões globais.

Não registrar cliques, histórico pessoal de consultas ou ajuste automático de pesos sem nova decisão explícita de governança.
