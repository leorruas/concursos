# Instruções para agentes — vault de concursos

Antes de modificar este repositório, leia integralmente `me.md`, `index.md` e `.agent/AGENTS.md`. As regras operacionais detalhadas ficam em `.agent/AGENTS.md`.

## Criação de notas em `3 - Materias/`

Uma nota canônica nova exige, na mesma operação e no mesmo commit, a nota, o link no hub da matéria (quando existir) e o wikilink com o caminho exato no `index.md` global. Confira os três arquivos antes de gravar. Não crie a nota primeiro para indexá-la em um commit posterior.

Antes de encerrar a operação, execute as validações disponíveis, incluindo `node scripts/validate-vault-invariants.js` e `node scripts/validate-integrity.js`. Se estiver operando pelo GitHub conectado, acompanhe o workflow **Publicar no GitHub Pages** do HEAD final. Se ele falhar, corrija a falha antes de iniciar conteúdo não relacionado; se estiver pendente, não anuncie publicação concluída.

O contrato completo de mudança e publicação está em `1 - Planejamento/Contrato transacional de mudancas.md` e `1 - Planejamento/Contrato de publicacao GitHub Pages.md`.


## Propagação obrigatória de simulados para o painel

Todo simulado ou bateria que deva aparecer na interface pública é uma **operação multi-arquivo**. Não considerar o registro concluído após atualizar apenas o `Log de erros.md`.

Para um **simulado integral**, o agente deve atualizar, na mesma operação lógica:

1. `00 - Desempenho/Simulados/Simulado-XX.md`, com resultado, respostas, gabarito, erros, dúvidas e diagnóstico;
2. `00 - Desempenho/Simulados/00 - Catalogo de simulados.md`;
3. `4 - Projetos/dataprev-2026/Questoes e Simulados.md` (ou o projeto do concurso correspondente);
4. `4 - Projetos/dataprev-2026/Log de erros.md`, quando houver erros ou acertos com lacuna relevante;
5. `4 - Projetos/dataprev-2026/00 Dashboard.md`, atualizando o último simulado;
6. `data/provas.json`, que alimenta o painel estratégico da interface e deve conter `sourcePath`, resultado, comparabilidade e nota calculável quando aplicável;
7. `00 - Desempenho/00 Avancos globais.md`, recalculando a janela de 30 dias, o acompanhamento semanal e o controle de simulados consolidados;
8. `00 - Desempenho/01 Log de saturacao diaria.md`, registrando volume, aproveitamento bruto, TAP e diagnóstico de carga;
9. os `Avancos.md` locais exigidos por `me.md`, quando o novo resultado alterar métricas da disciplina.

Para baterias mistas, atualizar as superfícies equivalentes compatíveis com o tipo de registro; não inventar nota /115 quando a composição oficial não tiver sido reproduzida.

**Rascunho parcial:** um simulado ainda em resolução pode ser salvo em `00 - Desempenho/Simulados/Simulado-XX.md` sem propagação para catálogo, dashboard, `data/provas.json`, avanços ou métricas finais **somente** quando o frontmatter declarar simultaneamente `status: rascunho` e `parcial: true`. Esse rascunho também não deve integrar o GitHub Pages. Ao concluir o caderno, remover a condição de parcial/rascunho e executar a propagação integral na mesma operação lógica.

**Regra de interface:** criar o Markdown do simulado não basta. Se `data/provas.json` ou o catálogo estiverem desatualizados, o painel está inconsistente. Após a alteração, acompanhar o workflow **Publicar no GitHub Pages** e só afirmar que o simulado “aparece no painel” depois de confirmar o deploy do HEAD e, quando aplicável, a presença do arquivo no manifesto/site publicado.

**Regra de links de revisão:** em relatórios de questões, baterias e simulados — incluindo `## Ajustes a partir dos erros`, acertos com dúvida/baixa segurança, `Log de erros.md`, diagnósticos e campos de estudo/revisão — todo link para teoria deve apontar para o **subtítulo exato** que contém o conceito: `[[Pasta/Nota#Subtítulo exato|Texto]]`. Linkar apenas o topo da nota não satisfaz a regra quando existe um destino mais específico. Se o subtítulo adequado ainda não existir, refinar a nota canônica antes de concluir o relatório. No GitHub Pages, o deep link deve abrir diretamente nessa seção; mudanças no renderizador de wikilinks devem preservar e testar a seção na rota pública.

Mudanças dependentes de um mesmo simulado devem preferencialmente entrar em **um único commit atômico**.

## Mapa operacional de scripts e diagnóstico

Para tarefas nos scripts, na interface ou nas integrações entre ingestão, dados, busca e publicação, consultar [[1 - Planejamento/Mapa de scripts e contratos do sistema|Mapa de scripts e contratos do sistema]]. Ele reúne entradas, saídas, dependências, limites dos checks e lacunas verificadas. Conferir o código vigente, localizar a primeira divergência entre produtor e consumidor e aplicar os contratos existentes; o mapa não substitui `me.md` nem as regras detalhadas de `.agent/AGENTS.md`. Manter a entrada dos scripts afetados atualizada ao concluir mudanças nesse sistema.
