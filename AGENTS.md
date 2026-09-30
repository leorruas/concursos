# Instruções para agentes — vault de concursos

Antes de modificar este repositório, leia integralmente `me.md`, `index.md` e `.agent/AGENTS.md`. As regras operacionais detalhadas ficam em `.agent/AGENTS.md`.

## Criação de notas em `3 - Materias/`

Uma nota canônica nova exige, na mesma operação e no mesmo commit, a nota, o link no hub da matéria (quando existir) e o wikilink com o caminho exato no `index.md` global. Confira os três arquivos antes de gravar. Não crie a nota primeiro para indexá-la em um commit posterior.

Antes de encerrar a operação, execute as validações disponíveis, incluindo `node scripts/validate-vault-invariants.js` e `node scripts/validate-integrity.js`. Se estiver operando pelo GitHub conectado, acompanhe o workflow **Publicar no GitHub Pages** do HEAD final. Se ele falhar, corrija a falha antes de iniciar conteúdo não relacionado; se estiver pendente, não anuncie publicação concluída.

O contrato completo de mudança e publicação está em `1 - Planejamento/Contrato transacional de mudancas.md` e `1 - Planejamento/Contrato de publicacao GitHub Pages.md`.
