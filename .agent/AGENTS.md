# Global LLM Wiki Schema

## LEITURA MANDATÓRIA (SSoT)

> [!IMPORTANT]
> A governança deste vault foi centralizada. Antes de executar qualquer tarefa, o agente **DEVE** ler o arquivo de identidade e padrões:
>
> **[[me|me.md]]** — **Single Source of Truth (SSoT)**: Contém identidade, regras de escrita, arquitetura, workflows e governança global.

## Roteamento obrigatório por concurso

Antes de gerar estudo, questões, baterias, simulados ou registrar desempenho, identificar o concurso-alvo pelo contexto explícito da conversa.

- Até **11/10/2026**, pedidos genéricos ou ambíguos continuam vinculados à **Dataprev**, que permanece como prioridade temporal até a prova.
- Referência explícita à **Dataprev** aciona o protocolo FGV-Dataprev de `me.md`. Nesta reta final, o fluxo padrão é de **simulados integrais**, com teoria apenas como microrevisão derivada de erros, salvo pedido explícito em contrário.
- Referência explícita à **Câmara dos Deputados** aciona o projeto `4 - Projetos/camara-2026/`, o edital da Câmara e o protocolo **Cebraspe-Câmara** de `me.md`. Estudo teórico, revisão, questões e simulados da Câmara seguem o padrão Cebraspe/Cespe e o formato C/E.
- Nunca misturar banca ou formato: **FGV para Dataprev; Cebraspe para Câmara**. Notas teóricas compartilhadas podem ser reutilizadas, mas a mecânica de cobrança, o corpus de calibração e os registros de desempenho pertencem ao concurso-alvo.
- Ao registrar desempenho, atualizar apenas as superfícies do projeto correspondente. É proibido lançar uma sessão da Câmara em arquivos da Dataprev ou uma sessão da Dataprev em arquivos da Câmara.

## Gate de integridade do main

Antes de iniciar qualquer mudança **não corretiva**, provar que o estado atual do vault está saudável.

- Em ambiente local/Work, executar `node scripts/preflight-vault.js`.
- Em operações via GitHub conectado, consultar o workflow mais recente **Publicar no GitHub Pages** correspondente ao `HEAD` atual.
- Se o preflight falhar ou o último workflow do `HEAD` estiver `failure`, considerar o **main vermelho**. Enquanto o main estiver vermelho, são permitidas somente mudanças diretamente destinadas a corrigir a falha atual. É proibido continuar refinando conteúdo, criar notas novas ou fazer housekeeping não relacionado sobre um estado inválido.
- Depois de uma operação lógica concluída, verificar o workflow final antes de iniciar uma operação não relacionada. Não interpretar commits intermediários de uma operação multi-arquivo como conclusão.

Quando a ferramenta GitHub oferecer `create_tree`, `create_commit` e `update_ref`, usar esse caminho para reunir mudanças dependentes em **um único commit atômico**, em vez de vários `update_file` sequenciais.

### Criação de nota canônica

Criar uma nota em `3 - Materias/` é uma operação lógica multi-arquivo. No mesmo commit atômico devem entrar:

1. a nova nota;
2. o hub local da matéria (`type: hub`), quando existir;
3. o `index.md` global.

Não criar a nota primeiro para “indexar depois”. `scripts/validate-change-contract.js` exige essas superfícies no mesmo diff. Se a matéria não possuir hub local, o contrato exige ao menos a nota e o `index.md` global e sinaliza a ausência do hub.

### Marcador visual de artigos da semana final

Durante a reta final da Dataprev até 11/10/2026, todo artigo de estudo em `3 - Materias/` que for **criado** ou **substancialmente atualizado** para fechar o backlog da semana deve receber um marcador visual no **título exibido**, sem alterar o nome físico do arquivo:

- **🆕** para artigo novo;
- **🔄** para artigo existente que recebeu atualização substancial.

Aplicar o emoji tanto no campo `title:` do frontmatter quanto no `# H1` da nota, mantendo o wikilink pelo nome físico do arquivo. Não usar emoji para correção tipográfica mínima, ajuste de link ou housekeeping sem ganho de conteúdo.

## Regra adicional para artigos de matéria

Sempre que a tarefa criar, revisar, expandir ou auditar uma nota em `3 - Materias/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Padrao editorial multi-edital|Padrão editorial multi-edital]]**.

Esse documento é a régua canônica para artigos de estudo. Prompts específicos de concurso podem acrescentar contexto de banca, edital e prioridade, mas não devem criar uma arquitetura editorial concorrente.

Para qualquer tarefa em `3 - Materias/Atualidades/`, aplicar também a seção **Extensão editorial para Atualidades** do padrão editorial. Antes de criar ou atualizar conteúdo, ler o hub `[[3 - Materias/Atualidades/atualidades|Atualidades]]`, os artigos existentes, o edital ativo pertinente e os registros de desempenho/erros relacionados. Informações conjunturais exigem pesquisa web e prioridade para fontes oficiais primárias; fundamentos estáveis e snapshots conjunturais devem permanecer explicitamente separados.

### Calibração vigente pós-Simulado 04 — próximo simulado Dataprev

Até nova autópsia substituir esta régua, o próximo simulado integral da Dataprev deve mirar a dificuldade observada na prova oficial FGV Dataprev 2024, sem copiar itens.

**Composição obrigatória:** 12 Português + 12 Inglês + 5 Lógica + 6 Atualidades/IA + 5 Legislação + 30 Comunicação.

**Português**
- usar trechos reais ou verossímeis em parte relevante do bloco;
- privilegiar classificação sintática/semântica, regência, concordância, coesão, reescrita e variação, com alternativas próximas;
- evitar excesso de itens resolvíveis apenas por reconhecer uma regra evidente.

**Inglês**
- preferir 2 a 3 textos, com pelo menos um texto mais longo;
- misturar interpretação, referência pronominal, conectores, vocabulário, modalização e classe/função da palavra;
- evitar transformar o bloco em gramática isolada.

**Lógica**
- incluir ao menos dois problemas contextualizados ou em duas etapas;
- misturar lógica formal com aritmética/proporção, ordenação/contagem e um item de padrão, álgebra, geometria ou raciocínio matricial;
- dificuldade deve vir da modelagem, não de conta longa.

**Atualidades/IA**
- priorizar 4 itens de fatos/instituições recentes e 2 de IA, ajustando apenas se a conjuntura justificar;
- incluir naturalmente I/II/III ou V/F;
- o enunciado não deve fornecer a definição que resolve a própria questão;
- fatos conjunturais precisam ser verificados em fontes atuais antes da geração;
- **para simulados Dataprev até 11/10/2026, não usar a data de geração como corte de Atualidades**: o simulado deve reproduzir o universo plausível de um caderno já fechado editorialmente. Priorizar fatos consolidados com antecedência e reduzir fortemente fatos dos últimos dias de setembro ou de outubro. Não inventar uma data oficial de corte da FGV.

**Legislação**
- distribuir as 5 questões entre LAI/Decretos, Lei 12.737/art. 154-A, Marco Civil e LGPD;
- usar alternativas juridicamente próximas, exceções, sujeitos, prazos, competências e condições;
- evitar cinco perguntas de literalidade de primeira camada.

**Comunicação**
- cobrir todos os dez blocos do edital ao longo das 30 questões, sem forçar três questões por bloco;
- aumentar materialmente história/repertório, autores, estruturas internas, taxonomias e terminologia profissional;
- mesclar reconhecimento factual, associação/correlação, I/II/III, EXCETO, interpretação de trecho teórico e caso profissional;
- aproximadamente um terço do bloco deve exigir recuperação factual/autoral/taxonômica e não apenas aplicação intuitiva;
- incluir rádio/TV, história da imprensa e comunicação empresarial, além de digital/marketing/pesquisa/design;
- não super-representar os erros recentes do candidato.

**Régua de dificuldade:** igual ou levemente acima da prova-espelho de 2024. A dificuldade deve vir de alternativas próximas, verdade parcial, transposição conceitual, recuperação factual e duas etapas de raciocínio — não de obscuridade gratuita, enunciado artificialmente longo ou conhecimento fora do edital.

## Regra obrigatória para ingestão de questões

Sempre que a tarefa envolver questões resolvidas, baterias dirigidas, simulados, correções, diagnóstico de erros ou ingestão de exercícios, o agente deve também ler e aplicar:

**[[1 - Planejamento/Regras de ingestao de questoes|Regras de ingestão de questões]]**.

Toda questão deve receber um destino pedagógico explícito. Não assumir que erro significa automaticamente alteração teórica, nem que acerto significa ausência de aprendizado. Usar os destinos canônicos `metrica_apenas`, `enriquecimento_teorico`, `questao_comentada_candidata`, `erro_recorrente` e `nova_nota`, combinando-os quando necessário.

Erros `[C]` e `[K]` são os principais candidatos a enriquecimento/questão comentada; erros `[I]` e `[D]` só devem subir para a teoria quando revelarem mecanismo recorrente e recuperável. Questões acertadas também podem virar candidatas quando possuírem distrator excepcionalmente plausível, fronteira conceitual importante ou mecanismo recorrente de banca.

### Legenda clínica obrigatória na apresentação

Sempre que qualquer artefato de estudo ou desempenho — especialmente `Simulado-XX.md`, baterias, diagnósticos, tabelas de erros e relatórios — usar as siglas `[K]`, `[C]`, `[I]` ou `[D]`, incluir uma **legenda visível no próprio documento, próxima da primeira ocorrência**. Nunca pressupor que o usuário lembrará o significado das siglas.

Legenda padrão:
- **[K] Conhecimento** — faltava saber ou recuperar regra, fato, conceito ou informação específica.
- **[C] Confusão conceitual** — conceito visto, mas com fronteira borrada, categoria trocada ou aplicação indevida.
- **[I] Interpretação** — leitura inadequada do comando, escopo, referência ou premissas.
- **[D] Distração** — lapso de atenção, marcação, delimitador ou cálculo final.
- Combinações como **[K/C]** e **[D/C]** podem aparecer quando mais de um mecanismo tiver contribuído de forma relevante.

A legenda é obrigatória mesmo quando a taxonomia já estiver documentada em outro arquivo do vault.

### Rascunhos parciais de simulados

Um simulado ainda em resolução pode ser preservado em `00 - Desempenho/Simulados/Simulado-XX.md` sem contaminar métricas consolidadas. A exceção só vale quando o frontmatter declarar **as duas condições ao mesmo tempo**:

- `status: rascunho`;
- `parcial: true`.

Enquanto essas condições estiverem presentes, o arquivo:

- não exige propagação para catálogo, dashboard, `data/provas.json`, avanços globais, log de saturação ou métricas locais;
- não deve integrar o manifesto, a busca nem o artefato público do GitHub Pages;
- pode registrar respostas já dadas, correção parcial, questões anuladas, dúvidas e ajustes provisórios;
- não pode receber nota final `/115` nem ser tratado como simulado consolidado.

Quando o caderno for concluído, a mesma operação que retirar `status: rascunho` / `parcial: true` deve executar a propagação integral exigida para simulados completos. Um arquivo com apenas uma das duas marcas não recebe a exceção.

### Links ancorados obrigatórios em relatórios de questões e simulados

Em qualquer artefato derivado de resolução de questões — especialmente `Simulado-XX.md`, baterias, diagnósticos, tabelas de erros, `Log de erros.md`, **## Ajustes a partir dos erros**, **## Acertos com dúvida ou recuperação incompleta** e campos de **Estudo/Revisar** — cada referência à teoria deve terminar em um **wikilink direto para o subtítulo exato** que contém o conceito cobrado: `[[Pasta/Nota#Subtítulo exato|Texto]]`.

Não usar apenas link para o topo da nota quando houver seção específica. Se um item agrupar mais de um conceito, incluir um link ancorado para cada conceito. Se o subtítulo adequado ainda não existir, refinar a nota canônica e criar esse destino antes de considerar o diagnóstico concluído.

A exigência vale também no leitor web: o link publicado deve preservar o deep link e abrir diretamente no heading correspondente, não apenas no início do artigo. Mudanças em wikilinks, rotas, anchors ou renderização devem manter a seção na rota pública (atualmente `?secao=`) e possuir teste de regressão.

### Hub obrigatório de desempenho por edital e prova

Sempre que um **simulado completo** ou outra prova registrada em `data/provas.json` for criada ou corrigida, atualizar na mesma operação o hub público [[00 - Desempenho/Provas/00 - Desempenho por edital e prova|Desempenho por edital e prova]].

O hub deve:
- registrar o novo resultado na seção do concurso correto;
- distinguir aproveitamento bruto de nota calculada pelas regras do edital;
- declarar a comparabilidade da prova/simulado;
- atualizar a análise comparativa quando o novo resultado altera a leitura da evolução;
- nunca misturar métricas da Dataprev com Câmara ou outro concurso;
- permanecer sincronizado com `data/provas.json`, o catálogo de simulados e os dashboards aplicáveis.

Um simulado não está totalmente propagado enquanto esse hub estiver desatualizado.


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

Quando uma operação só estiver correta se vários arquivos permanecerem sincronizados — criação de nota canônica, ingestões, propagação de desempenho, catálogos, dashboards e alterações equivalentes — aplicar também **[[1 - Planejamento/Contrato transacional de mudancas|Contrato transacional de mudanças]]**.

- Em ambiente local/Work, preferir `scripts/apply-changeset.js` a uma sequência de gravações independentes.
- Pelo conector GitHub, preferir um único `create_tree` → `create_commit` → `update_ref` para a operação lógica inteira.
- Se a ferramenta disponível não permitir atomicidade, declarar essa limitação e concluir todas as superfícies dependentes antes de tratar a operação como encerrada; não iniciar trabalho não relacionado no intervalo.

## Regra de publicação de conteúdo público

Sempre que a tarefa criar, mover ou alterar de forma relevante uma página pública em `3 - Materias/` ou `00 - Desempenho/`, o agente deve também ler e aplicar:

**[[1 - Planejamento/Contrato de publicacao GitHub Pages|Contrato de publicação — GitHub Pages]]**.

O commit no repositório **não encerra** a operação. O agente só pode afirmar que o conteúdo foi publicado ou que já aparece no site depois de confirmar o último workflow `Publicar no GitHub Pages` e a presença do catálogo esperado no `manifest.json` servido pelo Pages ao vivo. Se o deploy estiver pendente, deve distinguir claramente “está no repositório” de “publicação confirmada”.

Em Atualidades, fundamentos e snapshots colocados sob `3 - Materias/Atualidades/` são tratados como material público de estudo. Se a intenção for manter algo apenas como fonte bruta ou bastidor, o arquivo deve ir para uma camada não pública apropriada, e não ficar em `Snapshots/` esperando aparecer magicamente no site.

O padrão editorial é evolutivo. Se o uso real do vault revelar uma necessidade recorrente que ainda não esteja prevista — por exemplo, um novo tipo de seção, artefato de estudo, comparação, questão comentada ou mecanismo de navegação — o agente deve **propor a mudança e pedir autorização antes de alterar a governança ou aplicá-la em massa**. Correções locais e aplicação de regras já aprovadas não exigem nova autorização. Um pedido explícito do usuário para alterar a regra conta como autorização para aquela mudança específica.


## Regra obrigatória para mudanças na busca

Sempre que a tarefa alterar busca, ranking, aliases, anchors, deep links, índice de pesquisa ou quando o usuário relatar que uma consulta devolve o resultado errado, ler e aplicar:

**[[1 - Planejamento/Governanca da busca|Governança da busca]]**.

`search-index.json` é artefato derivado e nunca deve ser editado manualmente. Mudanças normais nos artigos são absorvidas automaticamente pelo build.

Quando houver falha semântica de busca, registrar primeiro a consulta em `scripts/search-benchmarks.json` com artigo e seção esperados; só depois alterar aliases, configuração ou algoritmo. Mudanças de pesos devem preservar a régua global de Top 1, Top 3 e seção correta.

Aliases e parâmetros deliberados de ranking vivem em `web/05a-search-config.js`. Não duplicar essa configuração em outros arquivos.


## Regra para testes e validadores novos

Sempre que uma mudança criar ou alterar um teste, validador, script de build ou etapa de CI, o agente deve executar diretamente o novo/alterado script **antes do commit** quando o ambiente disponível permitir.

O preflight do estado anterior não substitui essa verificação: ele prova que o `main` estava saudável antes da mudança, não que o teste recém-criado funciona.

Fluxo obrigatório para scripts novos ou alterados:

1. executar o script isoladamente;
2. corrigir qualquer falha do próprio teste/fixture;
3. executar as validações relacionadas;
4. só então incluir o script e a alteração funcional no commit;
5. após o commit, confirmar o workflow completo.

Não enfraquecer uma asserção apenas para deixar o CI verde. Quando um teste falhar, distinguir entre bug de implementação, fixture incorreta e asserção excessivamente literal; preservar a propriedade semântica que o teste deveria garantir.
