# Privacidade dos dados de estudo e sincronização

## Diagnóstico verificado em 04/11/2026

O repositório `leorruas/concursos` é público. O Pages publicava resultados pessoais via `data/provas.json`, erros por `data/erros-recorrentes.json` e páginas de `00 - Desempenho/`. O código da interface consulta `data/contexto-estudo/flashcards-prioridades.json` diretamente de `raw.githubusercontent.com`. Os documentos `data/sessoes/`, `data/contexto-estudo/`, `data/erros-recorrentes.json` e páginas de desempenho continuam legíveis no repositório público, independentemente da exclusão do Pages. O histórico Git também contém versões anteriores.

## Proteção parcial implementada no Pages

O build passa a excluir os JSONs de erros/provas, os arquivos `00 - Desempenho/` e `Avancos.md`, e a publicar apenas um recorte sem campos pessoais dos catálogos `concursos.json` e `edital-itens.json`. A home deixa de obter erros individuais para impulsionar ranking. Testes de build verificam essas condições. Artigos podem ainda conter exemplos de resultados de estudo inseridos editorialmente: auditar conteúdos individuais antes de tratar o site como não personalizado.

## Arquitetura exigida para proteção real

1. Criar um destino **privado e específico** para os dados de estudo (novo repositório `concursos-dados`, por exemplo). Não transferir dados para repositórios privados de outros projetos.
2. Copiar e verificar todos os registros brutos e derivados: `data/sessoes/`, `data/contexto-estudo/`, `data/erros-recorrentes.json`, `data/provas.json`, `00 - Desempenho/` e demais documentos com diagnóstico pessoal. Salvar backup verificável **antes** de exclusões.
3. Migrar o consolidado automático `study-sessions.js` para execução autenticada no ambiente privado. O repositório público continua apenas com notas, estruturas e flashcards revisados.
4. Acessar prioridades no navegador por serviço autenticado que valida a sessão do estudante, sem token ou chave privada no JavaScript público. Até existir esse serviço, manter a consulta antiga identificada como **pública**, ou preservar a última fotografia em armazenamento local se a opção de segurança exigir suspendê-la. Não alegar simultaneamente privacidade total e atualização remota privada sem autenticação.
5. Ao confirmar funcionamento e acesso, parar novos commits pessoais no repositório público, excluir os registros atuais e revisar todas as referências. **Remover arquivos do HEAD não elimina o histórico Git**: avaliar recriação do repositório público a partir de snapshot limpo, tratamento de refs e eventual suporte do GitHub para remoção de dados sensíveis, conforme a necessidade.
6. Testar migração, consulta automática, retenção local, ausência de upload manual, links e privacidade no Pages e no GitHub.

## Dependência de configuração

As ferramentas atuais permitem editar arquivos e pipelines de repositórios existentes, mas não fornecem ação de **criar repositório privado** nem de provisionar um serviço de autenticação. É necessária a criação/ligação explícita do novo destino privado para concluir a migração. A implementação parcial de Pages não encerra a issue #11.

## Evidência e aceite

- [x] Exposição atual inventariada e explicitada.
- [x] Regras de exclusão e teste de dados pessoais no site público.
- [ ] Destino privado configurado e backup conferido.
- [ ] Contextos e sessões migrados, com consolidação no ambiente privado.
- [ ] Sincronização de prioridades autenticada e sem importação manual.
- [ ] Registros públicos atuais e histórico tratados sem perda de dados.

## Migração para o cofre privado (05/11/2026)

Repositório privado: `leorruas/concurso-dados` (singular). Antes de alterar a branch pública, foi copiado e verificado por SHA o conjunto de 135 arquivos pessoais: sessões, contexto, projeções, `Avancos.md`, `00 - Desempenho/`, `data/questoes-ledger.json`, erros e resultados e as fontes de configuração. O workflow privado já foi executado com sucesso, incluindo testes da cadeia de estudos. Uma branch de segurança do `concursos` remove 132 arquivos exclusivamente pessoais do HEAD público e impede publicação futura pelo Pages, mantendo o progresso local dos flashcards. As fontes `concursos.json` e `edital-itens.json` públicas foram reduzidas a campos editoriais. A remoção da branch principal ainda não higieniza o histórico Git, forks ou caches. A sincronização remota das prioridades no navegador exige serviço autenticado que mantenha tokens fora do site estático. Consultar issue #11 antes de encerrar o trabalho.
