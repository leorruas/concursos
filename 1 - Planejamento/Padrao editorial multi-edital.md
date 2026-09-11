---
title: "Padrão editorial multi-edital"
type: "governanca-editorial"
status: "ativo"
created: 2026-09-10
updated: 2026-09-11
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

Usar exemplos que testem a fronteira conceitual, e não apenas ilustrem a definição. O exemplo comentado pode ser curto e não precisa reproduzir a estrutura completa de uma questão. Quando possível, aproximar o mecanismo de distração de bancas relevantes sem transformar o exemplo em cópia de uma prova.

### Questões comentadas

Quando a tomada de decisão entre alternativas ajudar a compreender ou fixar o tema, incluir uma pequena seção de **questões comentadas**. Ela é diferente de `Exemplos comentados`: o exemplo mostra o mecanismo; a questão obriga a discriminar conceitos próximos, aplicar a regra e rejeitar distratores plausíveis.

Por padrão, usar **1 a 3 questões de alto valor cognitivo**, e não baterias longas dentro do artigo. A dificuldade deve vir da proximidade conceitual entre as alternativas. Priorizar questões que explorem fronteiras entre categorias, transposição conceitual, verdade parcial, inversão de relação, mudança de escopo ou exceção relevante.

Cada questão comentada deve permitir recuperar, sem depender de outro arquivo:

- o enunciado ou situação-problema;
- as alternativas quando o formato for de múltipla escolha;
- o gabarito;
- o raciocínio decisivo para chegar à resposta;
- por que a correta está integralmente correta;
- por que o melhor distrator parece plausível e onde exatamente ele falha;
- comentários sobre as demais alternativas quando isso acrescentar uma distinção útil.

Questões inéditas devem ser apresentadas como treino, não como questão real da banca. Quando uma questão real for utilizada como evidência, preservar sua proveniência — banca, prova/ano e fonte — e não apresentar uma adaptação como transcrição literal.

Não inserir questões apenas para preencher uma seção. Em conceitos simples, um exemplo comentado pode ser suficiente. Em conceitos com fronteiras difíceis, taxonomias, exceções ou histórico de erro, `Questões comentadas` passa a ser uma ferramenta editorial prioritária.

### Heurísticas

Registrar formas rápidas e confiáveis de reconhecer o problema em prova. Heurísticas devem ser marcadas como atalhos operacionais e não podem substituir a regra quando houver exceções relevantes.

### Fontes

Manter proveniência suficiente para distinguir legislação, edital, bibliografia, prova real, fonte bruta interna e síntese do agente. Fontes brutas protegidas permanecem imutáveis.

## Três eixos de auditoria

Cada artigo deve receber três avaliações independentes.

### Qualidade editorial

- `forte`: cobre o núcleo do conceito e as principais fronteiras necessárias para prova; a estrutura ajuda revisão e resolução de questões.
- `precisa_refinamento`: o conteúdo principal existe, mas faltam conexões, fronteiras, exemplos, questões comentadas quando pertinentes, heurísticas ou organização.
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

Quando um novo edital chegar, primeiro decompor o conteúdo programático em itens e comparar cada item com as notas existentes. A existência de um `notaPath` **não significa**, por si só, que o item esteja integralmente coberto nem que tenha sido estudado.

Cada item de edital deve distinguir três perguntas diferentes:

- **Há uma nota relacionada?** → `notaPath`.
- **Quanto essa nota cobre do item?** → `coberturaNota`.
- **O conteúdo já foi efetivamente estudado?** → `exposicaoEstudo`.

A cobertura usa três estados:

- `integral`: a nota existente cobre o núcleo e as principais fronteiras exigidas pelo item do edital;
- `parcial`: a nota ajuda, mas cobre apenas parte do item ou possui escopo mais estreito;
- `ausente`: não há nota suficientemente relacionada; em regra, `notaPath` deve ser `null`.

Exemplo:

```json
{
  "descricao": "Processo administrativo",
  "notaPath": "3 - Materias/Direito Administrativo/09 - processo administrativo federal.md",
  "coberturaNota": "parcial",
  "exposicaoEstudo": true
}
```

Nesse caso, estudar a Lei nº 9.784/1999 produz conhecimento real, mas não autoriza afirmar que todo item genérico de processo administrativo de qualquer edital está coberto. Da mesma forma, um hub pode ser ligado a um item para navegação com `coberturaNota: "parcial"` e `exposicaoEstudo: false`; o hub não se transforma em evidência de domínio apenas por existir.

Só criar uma nova nota quando houver conteúdo conceitualmente novo ou quando uma nota existente precise evoluir de modo independente. Variações de redação do mesmo conceito devem alimentar relações de busca e mapeamento do edital, não cópias de teoria por concurso.

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

## Evolução assistida do padrão editorial

Este padrão é uma hipótese de trabalho e **pode evoluir conforme o uso real do vault**. O agente não deve tratar as regras editoriais atuais como imutáveis quando a experiência de estudo revelar uma necessidade nova. Ao mesmo tempo, mudanças de governança não devem ser feitas silenciosamente.

O agente deve considerar propor uma alteração do padrão quando identificar, por exemplo:

- uma dificuldade recorrente de compreensão ou revisão que a estrutura atual não resolve;
- o mesmo tipo de melhoria sendo necessário em vários artigos;
- uma questão real ou um conjunto de erros mostrando que falta uma função cognitiva importante na nota;
- excesso de fragmentação, repetição ou seções que não ajudam a resolver questões;
- uma necessidade nova de busca, navegação ou conexão entre artigos que possa ser resolvida editorialmente;
- um formato de estudo que se mostre particularmente útil, como questões comentadas, comparações, quadros de fronteira ou exemplos de classificação.

Nesses casos, o agente deve **interromper a aplicação em massa** e apresentar uma proposta curta com quatro elementos:

1. **problema observado** — o que no uso real está faltando ou atrapalhando;
2. **mudança proposta** — qual regra editorial seria criada, removida ou alterada;
3. **efeito esperado** — como isso melhora aprendizado, revisão, busca ou desempenho em prova;
4. **escopo e custo** — quais notas seriam afetadas e se a mudança aumenta tamanho, manutenção ou redundância.

Em seguida, deve perguntar explicitamente se a mudança pode ser incorporada ao padrão. Uma formulação suficiente é: **“Percebi que X está se repetindo; posso alterar o padrão editorial para incluir Y?”**

A autorização é necessária para **mudanças na governança**, não para aplicar corretamente uma regra já existente nem para corrigir erro factual, erro de escrita ou inconsistência local. Quando o usuário solicitar explicitamente uma nova regra — como a inclusão de questões comentadas — o pedido já constitui autorização para essa mudança específica.

O agente não precisa propor mudanças a cada artigo. Os melhores pontos de checagem são: após auditar um lote de notas, após uma sequência de estudo revelar uma necessidade recorrente, após corrigir erros que apontem uma lacuna estrutural ou quando o usuário disser que a forma atual da nota não está ajudando a aprender/revisar.

## Evolução da busca

A busca deve tratar cada nota como um objeto estruturado. A ordem de implementação prevista é:

1. normalização de acentos, caixa e múltiplos termos;
2. ranking com pesos distintos para título, headings, matéria e corpo;
3. enriquecimento pelo texto dos itens de edital ligados à `notaPath`;
4. uso de `coberturaNota` para dar mais peso a vínculos integrais do que parciais;
5. distinção entre artigo conceitual, hub, auditoria e registro de desempenho, evitando que arquivos operacionais dominem resultados teóricos;
6. enriquecimento por erros recorrentes e relações entre notas;
7. índice pré-compilado no build para evitar baixar todos os Markdown antes da pesquisa;
8. aliases e fuzzy search moderado, somente quando consultas reais mostrarem necessidade;
9. `concept_id` apenas depois que a camada conceitual estiver estável.

Busca semântica por embeddings não é prioridade enquanto ranking lexical estruturado, edital e aliases resolverem a maior parte das consultas.

## Regra de manutenção

A manutenção do padrão editorial deve ser incremental. Revisar pequenos lotes, comparar o resultado com questões e uso real da busca, e só então expandir o padrão para o restante do vault. Não reformatar notas fortes apenas para uniformizar títulos de seção.

Na fase posterior à primeira passagem das matérias de um concurso, priorizar enriquecimentos que transformem conhecimento já estudado em capacidade de decisão: questões comentadas, fronteiras entre conceitos, recuperação de erros recorrentes e conexões entre notas. Evitar reescrever teoria já consolidada apenas para aumentar o volume do artigo.
