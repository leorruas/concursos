---
title: "Padrão editorial multi-edital"
type: "governanca-editorial"
status: "ativo"
created: 2026-09-10
updated: 2026-09-10
---

# Padrão editorial multi-edital

Este documento define a régua editorial canônica para as notas de conhecimento do vault. A unidade principal é o conhecimento reutilizável, não um concurso específico. Editais, bancas, provas históricas e desempenho pessoal funcionam como camadas de contexto e prioridade sobre as notas canônicas em `3 - Materias/`.

## Princípio de arquitetura

Uma nota teórica deve continuar válida quando novos editais forem adicionados. O conteúdo conceitual pertence à matéria; o vínculo com concursos pertence à camada de dados e projeto. Sempre que possível, diferentes redações de edital devem apontar para a mesma nota em vez de gerar cópias por concurso.

Fluxo desejado:

```text
nota canônica → conceitos → itens de vários editais → provas/bancas → desempenho do candidato
```

`data/edital-itens.json` é a camada atual de relação entre edital e nota. `data/erros-recorrentes.json` registra evidências de dificuldade. `data/provas.json` registra provas e sua comparabilidade. Essas camadas devem enriquecer prioridade e busca sem contaminar a nota teórica com repetição de contexto específico.

## Estrutura editorial canônica

A estrutura abaixo é uma referência de cobertura, não um molde rígido. Se uma seção não fizer sentido para o tema, ela pode ser omitida. O objetivo é garantir que a nota cubra as funções cognitivas necessárias para prova.

### Núcleo do conceito

Definir o conceito com precisão, escopo e finalidade. Quando houver simplificação didática, distingui-la da formulação técnica.

### Estrutura interna, classificação ou etapas

Usar quando o tema tiver autor, taxonomia, categorias, componentes, fases, requisitos ou dimensões. A prioridade é deixar claras as fronteiras entre categorias e as relações entre partes.

### Como costuma ser cobrado

Registrar mecanismos recorrentes de cobrança: reconhecimento conceitual, aplicação, comparação, inversão, identificação de etapa, classificação, interpretação de trecho, caso prático ou legislação. A banca específica pode ser mencionada quando houver evidência, mas não deve definir a arquitetura da nota.

### Relações com outros temas

Criar conexões apenas quando aumentarem a capacidade de resolver questões. Preferir wikilinks para notas canônicas já existentes. Relações úteis incluem pré-requisitos, conceitos vizinhos, sobreposição parcial, oposição e dependência entre etapas.

### Tensões e pegadinhas

Registrar confusões plausíveis, verdades parciais, mudanças de escopo, exceções, inversões de relação e fronteiras entre conceitos próximos. Dar prioridade a confusões observadas em provas reais ou no histórico de erros.

### Exemplos comentados

Usar exemplos que testem a fronteira conceitual, e não apenas ilustrem a definição. Quando possível, aproximar o mecanismo de distração de bancas relevantes sem transformar o exemplo em cópia de uma prova.

### Heurísticas

Registrar formas rápidas e confiáveis de reconhecer o problema em prova. Heurísticas devem ser marcadas como atalhos operacionais e não podem substituir a regra quando houver exceções relevantes.

### Fontes

Manter proveniência suficiente para distinguir legislação, edital, bibliografia, prova real, fonte bruta interna e síntese do agente. Fontes brutas protegidas permanecem imutáveis.

## Três eixos de auditoria

Cada artigo deve receber três avaliações independentes.

### Qualidade editorial

- `forte`: cobre o núcleo do conceito e as principais fronteiras necessárias para prova; a estrutura ajuda revisão e resolução de questões.
- `precisa_refinamento`: o conteúdo principal existe, mas faltam conexões, fronteiras, exemplos, heurísticas ou organização.
- `incompleto`: faltam conceitos, categorias, regras ou partes relevantes para o uso em prova.

### Confiabilidade

- `boa_base`: formulações consistentes e apoiadas por fontes adequadas ao tipo de conteúdo.
- `verificar`: há afirmações absolutas, metadados incoerentes, fontes fracas ou pontos que exigem conferência antes de expansão.
- `fonte_insuficiente`: o vault não possui base suficiente para tratar o conteúdo como consolidado.

A auditoria editorial não corrige silenciosamente uma afirmação apenas por conhecimento geral. Quando a correção depender de fonte externa, a verificação deve ser feita em etapa própria e registrada.

### Prioridade estratégica

A prioridade deve considerar simultaneamente:

1. incidência e importância relativa do tema nos concursos ativos;
2. reutilização da mesma nota por mais de um edital;
3. fragilidade editorial ou de confiabilidade;
4. evidência de erro, dúvida ou baixa retenção no histórico do candidato;
5. proximidade da prova e peso da disciplina.

Quantidade de editais não deve ser usada isoladamente. Um tema de alto peso em uma prova próxima pode ter prioridade maior do que um tema genérico presente em vários concursos.

## Regra para múltiplos editais

Quando um novo edital chegar, primeiro decompor o conteúdo programático em itens e comparar cada item com as notas existentes. Classificar a cobertura como `coberto`, `parcial` ou `novo`. Só criar uma nova nota quando houver conteúdo conceitualmente novo. Variações de redação do mesmo conceito devem alimentar aliases, relações de busca ou mapeamento do edital.

## Metadados futuros

O frontmatter atual deve ser preservado. Campos adicionais podem ser introduzidos gradualmente quando produzirem ganho real:

```yaml
aliases:
  - expressão alternativa
concept_id: logic.connectives
related:
  - "[[3 - Materias/Logica/04 - equivalencias]]"
```

`concept_id` é uma evolução futura. Ele não deve ser aplicado em massa antes de validar a taxonomia, porque um identificador estável mal definido gera mais custo do que usar `notaPath` diretamente.

## Evolução da busca

A busca deve tratar cada nota como um objeto estruturado. A ordem de implementação prevista é:

1. normalização de acentos, caixa e múltiplos termos;
2. ranking com pesos distintos para título, aliases, headings, matéria e corpo;
3. enriquecimento pelo texto dos itens de edital ligados à `notaPath`;
4. enriquecimento por erros recorrentes e relações entre notas;
5. índice pré-compilado no build para evitar baixar todos os Markdown antes da pesquisa;
6. fuzzy search moderado e testes de relevância;
7. `concept_id` apenas depois que a camada conceitual estiver estável.

Busca semântica por embeddings não é prioridade enquanto ranking lexical estruturado e aliases resolverem a maior parte das consultas.

## Regra de manutenção

A manutenção do padrão editorial deve ser incremental. Revisar pequenos lotes, comparar o resultado com questões e uso real da busca, e só então expandir o padrão para o restante do vault. Não reformatar notas fortes apenas para uniformizar títulos de seção.