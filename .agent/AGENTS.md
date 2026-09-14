# Global LLM Wiki Schema

## LEITURA MANDATÓRIA (SSoT)

> [!IMPORTANT]
> A governança deste vault foi centralizada. Antes de executar qualquer tarefa, o agente **DEVE** ler o arquivo de identidade e padrões:
>
> **[[me|me.md]]** — **Single Source of Truth (SSoT)**: Contém identidade, regras de escrita, arquitetura, workflows e governança global.

## Regra adicional para artigos de matéria

Sempre que a tarefa criar, revisar, expandir ou auditar uma nota em `3 - Materias/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]**.

Esse documento é a régua canônica para artigos de estudo. Prompts específicos de concurso podem acrescentar contexto de banca, edital e prioridade, mas não devem criar uma arquitetura editorial concorrente.

Para qualquer tarefa em `3 - Materias/Atualidades/`, aplicar também a seção **Extensão editorial para Atualidades** do padrão editorial. Antes de criar ou atualizar conteúdo, ler o hub `[[3 - Materias/Atualidades/atualidades|Atualidades]]`, os artigos existentes, o edital ativo pertinente e os registros de desempenho/erros relacionados. Informações conjunturais exigem pesquisa web e prioridade para fontes oficiais primárias; fundamentos estáveis e snapshots conjunturais devem permanecer explicitamente separados.

## Regra obrigatória para ingestão de questões

Sempre que a tarefa envolver questões resolvidas, baterias dirigidas, simulados, correções, diagnóstico de erros ou ingestão de exercícios, o agente deve também ler e aplicar:

**[[1 - Planejamento/Regras de ingestao de questoes|Regras de ingestão de questões]]**.

Toda questão deve receber um destino pedagógico explícito. Não assumir que erro significa automaticamente alteração teórica, nem que acerto significa ausência de aprendizado. Usar os destinos canônicos `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente` e `nova_nota`, combinando-os quando necessário.

Erros `[C]` e `[K]` são os principais candidatos a enriquecimento/questão comentada; erros `[I]` e `[D]` só devem subir para a teoria quando revelarem mecanismo recorrente e recuperável. Questões acertadas também podem virar candidatas quando possuírem distrator excepcionalmente plausível, fronteira conceitual importante ou mecanismo recorrente de banca.

Antes de inserir questão comentada em uma nota, verificar se já existe questão cobrindo a mesma fronteira. O artigo não deve virar banco de questões: preservar a régua de 1 a 3 questões comentadas de alto valor cognitivo por nota, substituindo ou fundindo quando surgir exemplo melhor.

### Comando canônico, idempotência e apply transacional

Para ingestões novas, usar **`scripts/ingest-safe.js`** como porta de entrada. `scripts/ingest-vault.js` é o motor de análise legado e não deve ser chamado diretamente com `--apply`.

Primeiro executar:

```bash
node scripts/ingest-safe.js --input "00 inbox/00 ingestão.md" --dry-run
```

Depois construir um change set que contenha todos os destinos obrigatórios e o `ingestionFingerprint` exibido no dry-run. A aplicação canônica é:

```bash
node scripts/ingest-safe.js --input "00 inbox/00 ingestão.md" --apply --changeset caminho/change-set.json
```

O change set é regido por **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]** e por `scripts/ingestion-propagation-policy.js`. Toda alteração de arquivo existente deve usar o hash SHA-256 da versão lida como precondição. Se um único arquivo tiver mudado, nada é escrito.

A camada segura calcula fingerprint do conteúdo e consulta `data/ingestoes-processadas.json`. Uma ingestão já aplicada é bloqueada mesmo que a mesma evidência reapareça em outro arquivo ou com outro `--type`. O ledger e a limpeza da inbox canônica entram na mesma transação dos demais arquivos. Em caso de falha das validações pós-escrita, o conjunto inteiro sofre rollback.

É proibido contornar o mecanismo chamando `scripts/ingest-vault.js --apply` diretamente. Também é proibido usar replace/delete em `log.md`; o aplicador transacional aceita apenas `append` ou `prepend` com hash da versão integral atual.

## Regra para mudanças multi-arquivo críticas

Quando uma operação só estiver correta se vários arquivos permanecerem sincronizados — ingestões, propagação de desempenho, catálogos, dashboards e alterações equivalentes — aplicar também **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]**. Preferir `scripts/apply-changeset.js` a uma sequência de gravações independentes.

## Regra de publicação de conteúdo público

Sempre que a tarefa criar, mover ou alterar de forma relevante uma página pública em `3 - Materias/` ou `00 - Desempenho/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Contrato de publicacao GitHub Pages|Contrato de publicação — GitHub Pages]]**.

O commit no repositório **não encerra** a operação. O agente só pode afirmar que o conteúdo foi publicado ou que já aparece no site depois de confirmar o último workflow `Publicar no GitHub Pages` e a presença do catálogo esperado no `manifest.json` servido pelo Pages ao vivo. Se o deploy estiver pendente, deve distinguir claramente “está no repositório” de “publicação confirmada”.

Em Atualidades, fundamentos e snapshots colocados sob `3 - Materias/Atualidades/` são tratados como material público de estudo. Se a intenção for manter algo apenas como fonte bruta ou bastidor, o arquivo deve ir para uma camada não pública apropriada, e não ficar em `Snapshots/` esperando aparecer magicamente no site.

O padrão editorial é evolutivo. Se o uso real do vault revelar uma necessidade recorrente que ainda não esteja prevista — por exemplo, um novo tipo de seção, artefato de estudo, comparação, questão comentada ou mecanismo de navegação — o agente deve **propor a mudança e pedir autorização antes de alterar a governança ou aplicá-la em massa**. Correções locais e aplicação de regras já aprovadas não exigem nova autorização. Um pedido explícito do usuário para alterar a regra conta como autorização para aquela mudança específica.
