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

### Comando canônico, idempotência e estado do apply

Para analisar ingestões novas, usar **`scripts/ingest-safe.js`** como porta de entrada. `scripts/ingest-vault.js` é o motor interno e não deve ser chamado diretamente em operações normais de ingestão.

```bash
node scripts/ingest-safe.js --input "00 inbox/00 ingestão.md" --dry-run
node scripts/ingest-safe.js --input "arquivo.md" --type simulado --dry-run
```

A camada segura calcula fingerprint do conteúdo e consulta `data/ingestoes-processadas.json`. Uma ingestão já aplicada deve ser bloqueada mesmo que o mesmo conteúdo reapareça em outro arquivo ou seja forçado com outra classificação. Não apagar nem editar o ledger manualmente para contornar o bloqueio.

> [!IMPORTANT]
> **Estado transitório de segurança:** `scripts/ingest-safe.js --apply` está deliberadamente bloqueado até que o propagador transacional complete todas as camadas obrigatórias. O motor legado `ingest-vault.js` ainda não possui paridade entre o plano declarado e os arquivos realmente gravados. Enquanto isso, executar `--dry-run`, aplicar o plano completo por mecanismo seguro e deixar `scripts/validate-change-contract.js` provar no CI que Avanços locais/globais, saturação, projeto, erros, dashboard e demais dependências foram propagados. É proibido contornar o bloqueio chamando `ingest-vault.js --apply` diretamente.

O `--apply` só poderá ser reabilitado depois que houver teste automatizado de paridade `plano esperado = arquivos modificados` e rollback transacional do conjunto completo.

## Regra de publicação de conteúdo público

Sempre que a tarefa criar, mover ou alterar de forma relevante uma página pública em `3 - Materias/` ou `00 - Desempenho/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Contrato de publicacao GitHub Pages|Contrato de publicação — GitHub Pages]]**.

O commit no repositório **não encerra** a operação. O agente só pode afirmar que o conteúdo foi publicado ou que já aparece no site depois de confirmar o último workflow `Publicar no GitHub Pages` e a presença do catálogo esperado no `manifest.json` servido pelo Pages ao vivo. Se o deploy estiver pendente, deve distinguir claramente “está no repositório” de “publicação confirmada”.

Em Atualidades, fundamentos e snapshots colocados sob `3 - Materias/Atualidades/` são tratados como material público de estudo. Se a intenção for manter algo apenas como fonte bruta ou bastidor, o arquivo deve ir para uma camada não pública apropriada, e não ficar em `Snapshots/` esperando aparecer magicamente no site.

O padrão editorial é evolutivo. Se o uso real do vault revelar uma necessidade recorrente que ainda não esteja prevista — por exemplo, um novo tipo de seção, artefato de estudo, comparação, questão comentada ou mecanismo de navegação — o agente deve **propor a mudança e pedir autorização antes de alterar a governança ou aplicá-la em massa**. Correções locais e aplicação de regras já aprovadas não exigem nova autorização. Um pedido explícito do usuário para alterar a regra conta como autorização para aquela mudança específica.
