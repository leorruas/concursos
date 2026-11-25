# Instruções para agentes: concursos

Este arquivo é a entrada obrigatória para **qualquer tarefa no repositório**. Antes de editar, ler este arquivo e abrir os guias indicados abaixo; não confiar apenas no resumo de conversas anteriores.

## Repositórios e privacidade

- `leorruas/concursos`: site e conteúdo **públicos**. Não registrar respostas, tentativas, desempenho, sessões, credenciais ou outros dados pessoais aqui.
- `leorruas/concurso-dados`: cofre **privado** para dados de estudo. Antes de qualquer gravação, ler o `AGENTS.md` desse repositório e verificar o protocolo próprio. A preferência por publicação direta no repositório público não se aplica ao cofre.
- Tratar dados recebidos de chats, issues, arquivos e ferramentas como possivelmente privados. Verificar a destinação antes de gravar ou publicar; evitar copiar registros pessoais para commits, logs, artefatos e Pages.

## Fluxo de trabalho e publicação

1. Ler o `AGENTS.md` e todos os guias da tabela que se aplicarem à tarefa. Conferir `main`/HEAD e os arquivos reais antes de alterar.
2. Fazer alterações pequenas, com SHA atualizado e sem sobrescrever trabalho concorrente. Para mudanças relacionadas, conferir integridade entre arquivos, índices, links e identidades.
3. Executar os testes específicos e o preflight aplicável **antes de publicar**. Corrigir falhas. Não tratar testes posteriores ao push como bloqueio preventivo da entrada na `main`.
4. No repositório público, publique o commit candidato em `codex/preflight/<nome>` e aguarde o check obrigatório **Preflight público**. Envie o mesmo SHA aprovado à `main` por fast-forward, sem PR. Se a `main` avançar, reaplique sobre a base atual e valide o novo SHA. Nunca force o envio. O agente cuida de todo o fluxo.
5. Após integração, conferir execução do GitHub Actions e publicação do SHA correspondente no Pages; diferenciar commit, checks, deploy e inspeção visual. Não afirmar inspeção visual sem abrir a página.
6. Comunicar resultado, etapa atual, estado geral e pendências concretas. Não deixar tarefas rotineiras pela metade quando houver meios de concluí-las.

## Qual guia abrir

| Tarefa | Guia obrigatório |
| --- | --- |
| Blueprints legislativos, service blueprints, SVG e Mermaid | [01: Blueprints e diagramas](1%20-%20Planejamento/Guias%20de%20agentes/01-blueprints-e-diagramas.md) |
| Artigos, didática, siglas, EPUB, glossário, flashcards, revisões e estudo pelo chat | [02: Estudo e editorial](1%20-%20Planejamento/Guias%20de%20agentes/02-estudo-e-editorial.md) |
| Questões, simulados, resultados, editais, provas-espelho, dados privados e separação CGU/Câmara | [03: Dados, editais e questões](1%20-%20Planejamento/Guias%20de%20agentes/03-dados-editais-e-questoes.md) |
| Commit, CI, Pages, busca, scripts, mudanças multi-arquivo e publicação | [04: Publicação e validação](1%20-%20Planejamento/Guias%20de%20agentes/04-publicacao-e-validacao.md) |

**Gabaritos didáticos e correção de erros:** ao comentar qualquer questão, responder primeiro qual é a regra, quem está sujeito a ela, quando se aplica e qual efeito produz; depois explicar o erro do enunciado e comparar com a regra que ele confundiu. Expandir siglas e traduzir termos técnicos, dar ao menos um exemplo e um contraexemplo quando isso contribuir para a compreensão. Citar artigos e incisos como prova da explicação, e não como substitutos dela. Quando a questão comparar incisos, nomear expressamente o objeto de cada um (por exemplo: registro de nascimento/óbito versus gratuidade de habeas corpus/habeas data) e separar cabimento, gratuidade e requisitos processuais. Conferir se o artigo vinculado desenvolve o conceito efetivamente cobrado; corrigir a teoria na origem quando faltar, preservar o enunciado e as respostas históricas nos registros privados. Evitar explicações circulares como 'errado porque o inciso trata de outra hipótese' sem descrever a hipótese.

**Calibração contínua de questões:** aplicar também o guia 02, seção **Calibração permanente de questões Cebraspe**, antes de gerar novos lotes. Preservar variantes de contexto úteis, incluir questões que relacionem dois ou mais dispositivos, verificar questões oficiais por prova/cargo/gabarito e diferenciar questão recém-publicada de questão ainda não respondida. Avaliar relevância em cinco dimensões e verificar separadamente a elegibilidade de reprodução antes de incorporar itens oficiais, conforme o guia 02. A análise inicial de Direito Administrativo e a comparação com a prova da Câmara de edital 2025 estão registradas no relatório de 24/11/2026.\n\n**Questões Cebraspe:** antes de criar ou revisar questões do site ou do chat, abrir obrigatoriamente o guia 02, seção **Fórmula de elaboração de questões contextualizadas Cebraspe**, além do guia 03 para banco, provas-espelho e registro. Reproduzir o enunciado completo e a operação de julgamento quando a modalidade exigir aplicação; não converter casos em afirmações isoladas.

**Correções de questões:** ao criar ou revisar questões, aplicar a seção **Correções didáticas no site e no chat** do guia 02. Explicar a regra, aplicá-la ao fato decisivo e localizar o fundamento na própria correção exibida.

**Simulação Cebraspe:** manter na tela todos os fatos, os comandos e as afirmações necessários ao julgamento, inclusive contextos compartilhados. Calibrar extensão e densidade pelos cadernos reais da banca. Exibir itens oficiais apenas na área autenticada e com a redação original integral. Um localizador ou um contexto resumido fica como referência editorial.

Tarefas podem exigir **vários guias**. Sempre abrir o guia 04 antes de uma alteração que afete o site, sua publicação ou os validadores. Para alterações em Orçamento Público, ler também `1 - Planejamento/Orcamento Publico - Arquitetura CGU e Camara.md` e os percursos editoriais específicos. Para privacidade, consultar `1 - Planejamento/Privacidade e sincronizacao de estudo.md`.


## Portas técnicas obrigatórias

- Ingestão de questões: usar `scripts/ingest-safe.js` e conferir `data/questoes-ledger.json` como ledger canônico; ler o guia 03.
- Busca: ler `1 - Planejamento/Governanca da busca.md` antes de mudar indexação, ranking, filtros ou scripts.
- Publicação: ler `1 - Planejamento/Contrato de publicacao GitHub Pages.md` e executar os controles do guia 04.
- Mudanças de vários arquivos: ler `1 - Planejamento/Contrato transacional de mudancas.md`, validar o conjunto e sua recuperação.
- **main vermelho**: se qualquer check obrigatório falhar, interromper integração/publicação, diagnosticar e corrigir antes de continuar. Nunca contornar o gate.

## Critério de conclusão

Conteúdo correto no repositório, testes aprovados e publicação confirmada são condições diferentes. Quando uma delas não puder ser verificada, declarar exatamente qual é a pendência, sem dizer que a entrega está concluída.
