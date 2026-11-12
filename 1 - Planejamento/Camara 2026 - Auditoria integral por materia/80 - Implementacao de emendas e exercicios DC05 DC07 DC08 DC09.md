# Bloco 80: implementação de prazos de emendas e exercício constitucional

Data de trabalho: 11/11/2026 (commits UTC). Continuidade do bloco 79. Escopo restrito a `leorruas/concursos`, artigos ORC05a, ORC15, DC05, DC07, DC08 e DC09. Este é **checkpoint de implementação**, não reauditoria integral.

| Artigo | Problema resolvido | Alteração e commit | Validação dirigida | Estado |
| --- | --- | --- | --- | --- |
| **ORC15**, `art-9d42c1f68a7be053` | Prazos de indicação tratados como se fossem gerados pela Nota Técnica 03/2026 | [`8ff29cc1`](https://github.com/leorruas/concursos/commit/8ff29cc1e836a530f0c8fadcba2195b599e90dc0): origem legal **LC 210/2024, art. 5º (15 dias e 5 dias)**; distinção do art. 45-A da Resolução 1/2006-CN e da análise do **PLDO 2027** pela NT 03/2026. Caso e um C/E inédito **Errado** | SHA `96dd6dfb88a6f3aaf9873a8b0ec3f6064ceb8fdd`; quatro gabaritos no arquivo, três anteriores preservados | **validado no texto** |
| **ORC05a**, `art-715e2d16a93446cb` | Faltava delimitar prazos gerais de indicações vs rotinas de 2026 | [`f985e3b8`](https://github.com/leorruas/concursos/commit/f985e3b8b12f58ee6bc1beb54b3c59a1fa6a691f): LC 210 art. 5º, Resolução 1/2006 art. 45-A e portarias de 2026 separadas; caso e um C/E **Errado** | SHA `81d9c648bcf2a9027c110af8cf063659e6c333d0`; dois gabaritos, um preexistente | **validado no texto** |
| **DC05**, `art-6a55fcee78be4a39` | Nenhum exercício C/E | [`7a79c3e4`](https://github.com/leorruas/concursos/commit/7a79c3e40d7d1d1f70f19be83c3ce5731b36f33a): 3 C/E **E/C/C**, direitos políticos, inelegibilidade, art. 16 e ação de impugnação | Atualização de estado [`21b66ab7`](https://github.com/leorruas/concursos/commit/21b66ab7f8f83807887a27d6d6e522ad8ef948bc), SHA atual `14df4e999dedcd37cc6fb16a1a466091373faf70` | **validado no texto** |
| **DC07**, `art-4572f492f3444994` | Nenhum C/E e nenhum caso progressivo | [`7663b232`](https://github.com/leorruas/concursos/commit/7663b23242158ce87ba26e6e069592de16ffd1cd): 3 C/E **C/E/C**, posse em 2027, dupla vacância e emenda constitucional | Estado reconciliado [`d7b1d6bc`](https://github.com/leorruas/concursos/commit/d7b1d6bc4c5f26f09532531a75d714e54001aa8d); SHA `7ffa5e532b7bbb5ea74e747121491b7849f18c50` | **validado no texto** |
| **DC08**, `art-7c5228e2781b4336` | Nenhum C/E e nenhum caso progressivo | [`3e8952c1`](https://github.com/leorruas/concursos/commit/3e8952c1a29c134e6979e2e9894ac792fecaf58c): 3 C/E **C/E/C**, SV 10, quórum de súmula vinculante e CNJ | Estado reconciliado [`f4a60b61`](https://github.com/leorruas/concursos/commit/f4a60b613a0d80594655783e646b3b641c8ed3a3); SHA `0ec68056510422b7496795cacdd4cad47b5be6f5`; cercas Markdown em número par | **validado no texto** |
| **DC09**, `art-95bcc6a866f044bd` | Nenhum C/E e nenhum caso progressivo | [`59fcd3d8`](https://github.com/leorruas/concursos/commit/59fcd3d8bc35b47d5e693438dbf9dc5f4ef80378): 3 C/E **C/E/C**, AGU, Defensoria, CNMP e caso de papéis institucionais | Estado reconciliado [`1f056a5a`](https://github.com/leorruas/concursos/commit/1f056a5a39b9187d371bc71c86a8cc9fd8165834); SHA `dcfc0172ea6aea26836842643f4f77aaba609a6d` | **validado no texto** |

## Fontes e distinção de versões

A [**LC nº 210/2024, art. 5º**](https://www2.camara.leg.br/legin/fed/leicom/2024/leicomplementar-210-25-novembro-2024-796588-publicacaooriginal-173577-pl.html) estabelece deliberação em até 15 dias e publicação/encaminhamento da ata em até 5 dias para **indicações de comissões após a LOA**. A [Resolução 1/2006-CN, art. 45-A](https://www.congressonacional.leg.br/web/cmo/atribuicoes-e-legislacao/resolucao-n-01-de-2006-cn) complementa procedimento e exige encaminhamento de indicações aprovadas em cinco dias. A [Nota Técnica Conjunta 03/2026](https://www.congressonacional.leg.br/documents/150599582/156145129/NTC_03-2026/85876ac9-8f1c-4d39-a4b2-1400a49a70eb) **reproduz** a regra ao comentar o PLDO 2027. **Não ensinar que a NT criou o prazo, nem tratar todo projeto de LDO como lei em vigor.** Os atos operacionais de 2026 citados no ORC05a continuam associados ao próprio exercício.

Questões constitucionais usam a [CF compilada, arts. 14–16, 60, 77–84, 97, 103-A, 103-B e 127–135](https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html). Os **14 novos itens** (2 em ORC, 12 em DC) são **autorais**, sem atribuição a provas oficiais ou a desempenho do estudante. **Todos os seis arquivos atuais foram relidos após commit**, mantendo `articleId` e o caminho original. As notas históricas de certificação permanecem como registro da condição anterior, com atualização pedagógica acrescentada ao final dos quatro DC.

**Inventário derivado com ressalva:** ORC passa do piso de **69** (bloco 79) para **71 C/E**. A trilha DC passa do piso de **301** para **313 C/E**, sem recálculo completo de eventuais itens acrescentados em concorrência. Não usar esses pisos como nova contagem certificada universal do vault. O C/E de ORC15 e o de ORC05a foram marcados explicitamente como inéditos.

## Integração e teste técnico

A consulta GitHub Actions da publicação após a última edição revelou [**run 43129779596**](https://github.com/leorruas/concursos/actions/runs/43129779596) **pending** e múltiplas execuções concorrentes anteriores **cancelled**. Não há teste de **renderização do Markdown/Mermaid**, navegação dos wikilinks, indexação das questões no motor, nem comprovante de Pages verde para esses commits. O status é **publicado no repositório; validação do site pendente**. Mudanças não criaram arquivos novos ou IDs diferentes, portanto não foi necessário editar catálogo/hub nesta rodada.

**Verificação adicional do ORC05:** o texto atual já encaminha conteúdos especializados de emendas para ORC05a, preservando títulos e âncoras; **não há duplicação extensa a remover nesta etapa**. O ORC04 também havia sido confirmado como deduplicado por links no checkpoint 79.

## Pendências executáveis para próximo lote

1. Validar na publicação a navegação dos quatro artigos DC e ORC05a/ORC15 e os links externos; conferir sucesso de workflow em uma execução não cancelada.
2. Conferir se o novo banco de questões indexa C/E incorporados a artigos existentes, sem contar novos itens como questões reais Cebraspe.
3. Revisar apenas incongruências materiais geradas por edições concorrentes e, se possível, verificar de maneira concreta a orçamentação de médio prazo do **MTO 2027, cap. 7** em ORC02/ORC12 sem reiniciar auditoria.
4. Se os testes de publicação demonstrarem falhas, reparar os trechos próprios desta matéria; não reabrir artigos fechados por mera preferência editorial.

**Estado:** seis arquivos editados e conferidos em texto, **14 itens novos**, fonte legal de prazos corretamente atribuída. Nenhum arquivo de outra frente alterado.
