# Padronização de siglas e primeiras ocorrências

## Objetivo

Garantir que **cada artigo funcione isoladamente**, inclusive quando aberto pela busca, por link direto ou em outro concurso. Na **primeira ocorrência textual** de um termo abreviado, escrever **nome completo (SIGLA)**. Nas ocorrências seguintes, usar a sigla. O termo deve receber também uma explicação conceitual quando o nome por extenso for insuficiente para o aprendizado.

## Escopo e regras

- Unidade de revisão: artigo Markdown, não pasta, matéria, concurso ou vault inteiro.
- Conferir texto inicial, títulos, tabelas, listas, exemplos, questões comentadas, legendas e Mermaid. Se um diagrama for acessível isoladamente, expandir em legenda ou no próprio diagrama.
- Preservar títulos, links, âncoras, `articleId` e `articleAliases`; não alterar a estrutura apenas para satisfazer um detector.
- Nomes próprios e siglas de origem estrangeira exigem denominação oficial, eventualmente com tradução explicativa.
- Siglas homônimas e significados dependentes do contexto exigem conferência por fonte. Não aplicar substituição em massa automaticamente.
- Conteúdos citados, códigos, identificadores de edital, unidades de medida, valores em reais e palavras em maiúsculas podem gerar falsos positivos. O alerta não decide sozinho se há erro.
- A primeira ocorrência em título curto ou link de navegação pode manter a sigla, desde que sua expansão seja dada na apresentação inicial do texto e o leitor não precise abrir outro artigo para compreendê-la.

## Inventário e verificação

Fonte controlada de expansões: `data/dicionario-siglas-editorial.json`. Comando: `node scripts/audit-acronyms.js` para listar alertas; `node scripts/audit-acronyms.js --json` para inventário detalhado e `--strict` **somente após** a revisão e calibração. O script procura primeiras ocorrências de siglas mapeadas no texto de cada nota, ignorando frontmatter e blocos de código; os resultados são **candidatos à revisão**, não erros comprovados. Novas siglas são incluídas no dicionário após conferência.

## Ordem de trabalho e critérios de fechamento

1. **Piloto, artigos introdutórios:** Contabilidade Pública (01) e Orçamento Público (01), após analisar a cadeia de primeiras ocorrências. Status: correções iniciais aplicadas em 06/11/2026. Também revisados os artigos 02 de Contabilidade e 01 de Auditoria; Auditoria Governamental (02) verificada como referência inicial. Isso ainda não equivale a revisão das disciplinas inteiras.
2. **Lote A, prioridade para CGU:** demais artigos de Contabilidade Pública, Orçamento Público e Auditoria Governamental. Revisar preferencialmente de um a três artigos por alteração, com comparação do conteúdo antes/depois.
3. **Lote B:** demais matérias do percurso CGU, começando pelos artigos com maior concentração de alertas.
4. **Lote C:** demais artigos do vault e revisão contextual das siglas ambíguas, incluindo títulos e Mermaid.
5. **Prevenção:** executar a auditoria como aviso no fluxo de publicação e revisar alertas novos em notas criadas ou editadas. Só tornar bloqueante depois de calibrar exceções, resolver os alertas existentes e criar testes de regressão adequados.

Uma nota é considerada revisada quando o primeiro uso em prosa de cada sigla relevante foi conferido, as definições têm fonte quando necessário, e links/tabelas/diagramas permanecem íntegros. Registrar correções apenas na teoria pública; **não criar progresso estudantil nem mexer em sessões privadas** por alterações editoriais.

## Continuação em 06/11/2026

Segundo lote aplicado aos artigos 03 e 04 de Contabilidade Pública, 02 e 03 de Orçamento Público, e 05 e planejamento baseado em riscos de Auditoria Governamental. Revisadas primeiras ocorrências de demonstrativos, instrumentos orçamentários, órgão emissor e planejamento de auditoria. Preservados títulos, metadados de identidade e âncoras. Esta passagem ainda não representa revisão exaustiva de todas as siglas, inclusive compostas, nos seis artigos: a conferência contextual segue em andamento e o validador permanece como alerta.

## Pendências explícitas

Primeira execução no Pages em 06/11/2026: **288 notas varridas, 32 siglas mapeadas e 208 alertas preliminares**. Há falsos positivos previsíveis, por exemplo `PL` como partido político em Atualidades e `NBC TSP` como sigla composta. A interpretação deve ser contextual antes de editar. O inventário completo é dinâmico. O dicionário inicial cobre termos recorrentes e precisa ser ampliado. A revisão das 48 notas das três matérias prioritárias, demais disciplinas e auditoria de diagramas ainda deve ser executada em lotes. Não interpretar a instalação do validador como revisão concluída de todos os artigos.
