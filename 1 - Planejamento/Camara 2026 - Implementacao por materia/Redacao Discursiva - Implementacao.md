---
title: "Câmara 2026: implementação de Redação Discursiva e Peça Técnica"
type: "relatorio-implementacao"
status: "implementacao-parcial-validacao-pendente"
updated: 2026-11-11
escopo: "CAM-DIS-001 a CAM-DIS-009"
---

# Redação Discursiva e Peça Técnica: relatório de implementação

**Estado consolidado em 11/11/2026:** as nove unidades CAM-DIS-001–009 estão presentes em seis artigos operacionais (04–09), complementando os três fundamentos (01–03). As intervenções mais recentes no 04 (par PF), 08 (comparação graduada), 09 (casos normativos) e hub foram gravadas no `main`, com leitura posterior e vínculos de índice/catálogo preservados. **Validação automatizada destes últimos commits e deploy no GitHub Pages ainda pendentes de confirmação.** O texto abaixo conserva checkpoints antigos como histórico: referências a “candidatos pendentes” descrevem apenas o estado de cada fase naquele momento.

## Autorização excepcional e fronteira de edição

**Autorização expressa recebida em 11/11/2026:** o solicitante permitiu criar, corrigir e integrar artigos de Redação Discursiva e Peça Técnica como **exceção delimitada à restrição de Fase 1 do protocolo geral**. Esta autorização se restringe aos conteúdos de `3 - Materias/Redacao/` e à integração estritamente necessária em hub, `index.md` e catálogo, além deste relatório próprio. **Não autoriza mudar materiais de outras matérias** nem sobrescrever `1 - Planejamento/Camara 2026 - Auditoria integral por materia/09 - Redacao Discursiva e Peca Tecnica - Fase 1.md`. O relatório do auditor permanece independente e intacto nesta implementação.

## Leitura e bases

Lidos pelo conector: `AGENTS.md`, `CHAT.md`, `me.md`, `index.md`, plano de arquitetura, protocolo geral e relatório da Fase 1, estratégia de estudo, guia `4 - Projetos/camara-2026/Discursiva Cebraspe - Camara 2026.md` e artigos existentes 01, 02 e 03 da pasta de Redação, além do hub. Conferidas fontes externas oficiais: edital nº 1/2026 da Câmara, padrão definitivo da PF Administrativo 2025 Cargo 14 e padrão definitivo do TCE-MG 2026 Cargo 8. O guia também remete ao padrão da peça de Processo Legislativo e Gestão da Câmara 2026. **Pendente:** cotejo integral dos cadernos/enunciados originais das provas anteriores com os padrões; a implementação distingue expressamente comandos autorais de padrões reais.

O edital prevê duas questões de até 20 linhas (15 pontos cada) e uma peça técnica de até 50 linhas (30 pontos); o gênero da peça **não é fixado previamente**. As retificações foram consideradas conforme inventário da Fase 1; nova verificação completa de todas as publicações complementares permanece pendente. Não se atribuem temas prováveis, pesos ou notas fictícias às rubricas didáticas.

## Decisão artigo a artigo, antes da escrita

| Unidade | Confronto com material existente | Decisão |
| --- | --- | --- |
| CAM-DIS-001 | O artigo 01 desenvolve assunto, recorte, tema e projeto, mas não transforma exigências de um padrão em grade de cobertura aplicada. | **Criar nota operacional autônoma** 04; preservar artigo 01. |
| CAM-DIS-002 | Os artigos 02 e 03 ensinam tese e argumentação; não fornecem modelo completo de resposta curta, contramodelo e avaliação por aspectos. | **Criar nota operacional autônoma** 05; sem duplicar teoria canônica. |
| CAM-DIS-005 | Nenhum dos três artigos existentes explica execução de peça de 50 linhas; o guia da Câmara traz estratégia e fontes, mas não exemplar completo. | **Criar nota operacional autônoma** 06, com gênero hipotético declarado e peça inteira. |
| CAM-DIS-009 | Os artigos anteriores tratam de coerência e argumentação; não oferecem protocolo duplo de revisão por quesitos e língua. | **Criar nota operacional autônoma** 07, remetendo às regras de Português sem duplicá-las. |

Não criar automaticamente as nove unidades. **CAM-DIS-003, 004, 006, 007 e 008 seguem pendentes** de exame e aprofundamento com fontes disciplinares específicas. Critério pedagógico: cada objeto publicado apresenta situação de prova, pré-requisitos, método, demonstração, contraexemplo, exercício, autocorreção, limites e fontes. As linhas numeradas dos modelos são **linhas artificiais digitadas**, cuja equivalência manuscrita precisa ser testada.

## Arquivos implementados e commits

| Caminho | Unidade | Identidade | Commit de criação |
| --- | --- | --- | --- |
| `3 - Materias/Redacao/04 - decomposicao de comandos e quesitos cebraspe.md` | CAM-DIS-001 | `art-8c4e3f190be648b2` | `6ec17da19d443869bdb1b5f7170b32f9f27d0824` |
| `3 - Materias/Redacao/05 - resposta conceitual curta de 20 linhas.md` | CAM-DIS-002 | `art-b3925d69a8174e0c` | `b62f4e79bd0eebb0a7e4dfafcb8052aa6a1dbffd` |
| `3 - Materias/Redacao/06 - planejamento e escrita de peca tecnica.md` | CAM-DIS-005 | `art-9e73c4d680ae4219` | `c98906580d681d614ab7a638af8aaf3b5d9fc351` |
| `3 - Materias/Redacao/07 - revisao e autocorrecao de discursivas e pecas.md` | CAM-DIS-009 | `art-64ec8b8cd4054dcb` | `d98c5263d2e63e72c682e68327c49488caacffef` |

**Integração primeiro lote:** hub `c442605941f4617eeae08857ec3927e4ec6d19e2`; índice `0cbf7c83f3cdcbcfca1a574b9f3057f047a35ea3`; catálogo `2acfb32619d3bf0dfffc3e6d41bf080a7a80e94e`.

**Integração segundo lote:** hub `1f6fef848c362a634750658ea45101a7dd3b0d92`; índice `0dc73203abb4e8de229d6e51b1f752f85346c524`; catálogo `04d905b355956c2e8da53a85efb5e438c310ebf7`. Durante a integração ocorreu um conflito HTTP 409 ao atualizar arquivo compartilhado. Os arquivos foram **relidos e a integração do índice e catálogo foi refeita sobre as versões mais recentes**; não houve sobrescrita proposital de outros agentes.

Os `articleId` e `articleAliases` antigos foram preservados. O hub, o índice e o catálogo da Câmara foram vinculados aos quatro IDs novos. As notas da auditoria e de outras matérias não foram alteradas por esta implementação.

## Testes e estado de publicação

**Validação editorial preliminar:** conferência do esquema do catálogo, do número de IDs inseridos, dos títulos e destinos dos links foi realizada durante a integração. **Validação estática de integração realizada em 11/11/2026:** após as gravações, foram relidos pelo conector os quatro artigos, o hub, o índice e o catálogo. Os quatro `articleId` constam uma única vez na lista da matéria `redacao` para `camara-2026`; os quatro caminhos estão no índice e os arquivos existem, com frontmatter e aliases. **Validação automatizada ainda não certificada:** a consulta de status de commits e de execuções disponíveis pelo conector para `93b82a1` e `04d905b` retornou listas vazias. Isso **não equivale a testes aprovados**: não foi possível obter a execução de `validar-publico.yml` nem rodar `node scripts/preflight-vault.js`. **GitHub Pages ainda não certificado:** a página de Actions não pôde ser recuperada pelo acesso externo e não houve confirmação navegável de `pages.yml`. Criação de commit não é prova de publicação.

**Validação pedagógica ainda pendente:** testar respostas manuscritas sob limites reais, confrontar cada modelo contra caderno oficial autenticado e revisão conceitual aprofundada dos artigos compartilhados. As grades pedagógicas são **autorais**, nunca espelho oficial ou evidência de domínio do estudante. Nenhuma resposta pessoal foi registrada no repositório público.

## Fontes verificáveis

- Edital oficial Câmara 2026, nº 1, itens 9.1, 9.4–9.8.5: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades
- Portal de editais e retificações: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades
- PF Administrativo 2025, Cargo 14, padrão definitivo: https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/PF_25_ADM_PADR%C3%83O_DE_RESPOSTA_DEFINITIVO_CARGO_14.pdf
- TCE-MG 2026, Cargo 8, padrão definitivo: https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf
- Câmara 2026, Processo Legislativo e Gestão, padrão definitivo: https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf

## Continuidade de 11/11/2026: unidades CAM-DIS-003, 004, 006, 007 e 008

**Decisões antes da implementação:** consultados novamente os três artigos originais de Redação, os quatro materiais operacionais já integrados e os artigos canônicos de Comunicação 61 (planejamento e diagnóstico), 70 (transparência), 78 (art. 37, § 1º) e 82 (briefing), além da nota de parecer legislativo de Direito Constitucional. A regra de comparação existe no artigo de argumentação 03, mas falta uma resposta comparativa de 20 linhas com fronteiras e autocorreção; **CAM-DIS-003 recebe artigo autônomo 08**. As regras jurídicas são canônicas nas notas de Comunicação/Direito, mas a transformação fato → norma → condição → conclusão é operação escrita própria; **CAM-DIS-004 recebe artigo autônomo 09**. Diagnóstico, plano e justificativa/indicadores são aplicações da mesma peça, com teoria já consolidada em Comunicação; **CAM-DIS-006, 007 e 008 aprofundam o artigo de peça 06**, com seções, situações de prova, comandos, métodos, exemplos, contraexemplos e exercícios. Não foram criadas três notas redundantes.

| Unidade | Alteração | Commit |
| --- | --- | --- |
| CAM-DIS-003 | `3 - Materias/Redacao/08 - resposta comparativa e fronteiras conceituais.md`, `art-f48a60de2c874a91` | `6992a5b2d7a9629c5593028eb03e95406870ada6` |
| CAM-DIS-004 | `3 - Materias/Redacao/09 - resposta normativa aplicada em 20 linhas.md`, `art-a64d0f28e3794c1b` | `4b809248204505cbde57057989a42fde1ca239d2` |
| CAM-DIS-006 a 008 | Novas oficinas no artigo 06 (`art-9e73c4d680ae4219` mantido) | `07752d3c1b8bb165f0c1254505dfa4e3d71ba904` |
| Integração | Hub de Redação, índice global e catálogo v2 da Câmara, com dois IDs adicionais | `a267af03a006e052120f5f554aad668e4b59b069`; `dbb164b816f2b0dc8570851dd90982461390d8b2`; `c9d639e314f194d66e30a8fa747fd86c3b4f3f94` |

**Fonte oficial novamente conferida:** [página do concurso e retificações da Câmara](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades), [Edital nº 1/2026, itens 9.1 e 9.8](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades), inclusive leitura visual do PDF, e [TCE-MG 2026, padrão definitivo das questões 1 e 2](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf), com inspeção visual da página da questão 2. Os exemplos novos são **didáticos** e não representam padrões, temas previstos ou notas oficiais.


**Validação estática após a continuidade:** os seis artigos operacionais 04–09 foram relidos do GitHub. Cada um possui `articleId` e `articleAliases` próprios, consta no `index.md` e possui exatamente uma ocorrência no `articleIds` da matéria `redacao` no concurso `camara-2026`. O catálogo possui **nove artigos** na matéria (três originais e seis operacionais), sem IDs repetidos. As três oficinas CAM-DIS-006, 007 e 008 aparecem como cabeçalhos únicos no artigo 06 e estão ligadas pelo hub. **Isso é checagem de integridade estática, não execução de testes nem confirmação do site.**

**Próximas verificações:** executar testes do repositório, conferir o Pages, aferir manualmente o espaço de linha e buscar pares completos de caderno oficial + espelho definitivo. A tentativa de abrir pelo navegador as páginas dos workflows `validar-publico.yml` e `pages.yml` não retornou resultado consultável; portanto **não há confirmação de CI ou deploy** nesta etapa. Registros de desempenho individual não foram criados.

## Próxima etapa

Conferir CI e Pages; resolver falhas reais se houver. Aprofundamentos CAM-DIS-003 a 008 foram implementados com decisões registradas; revisão de evidência de prova, testes e navegação continuam pendentes. Manter **dois treinos semanais de produção**, correção por quesitos e reteste espaçado; resultados pessoais exclusivamente no cofre privado.

## Continuidade: verificação oficial, modelo ampliado e PR de validação

Em 11/11/2026, a página oficial do concurso foi conferida novamente, incluindo o Edital nº 1/2026 (itens 9.1, 9.4 e 9.8.5) e as retificações nº 5 (15/10/2026) e nº 6 (21/10/2026). As retificações não alteraram a estrutura 20/20/50 da prova discursiva do Cargo 1. **Atenção:** o PDF `cd_25_ns` referenciado no guia é do concurso de Processo Legislativo e Gestão, portanto seus números internos de itens não devem ser transferidos ao edital atual de Divulgação Institucional.

O modelo da peça no artigo 06 continha 28 linhas artificiais, insuficientes para simular a densidade de um exercício próximo a 50 linhas. Foi elaborada uma versão de **44 linhas artificiais**, com diagnóstico, evidências a coletar, três medidas, monitoramento e ressalvas quanto à inferência causal. O conteúdo mantém a marca de modelo autoral e não simula nota oficial. **Validação manuscrita continua pendente**.

A gravação direta no `main` encontrou conflito HTTP 409 devido à movimentação concorrente da branch. Para isolar a alteração, foi criada a branch `redacao-camara-validacao-20261111`, commit `fb12e065b9ccd5ceec831d9d4c0fbc66f82c04d8` e [PR nº 18](https://github.com/leorruas/concursos/pull/18). Os workflows **Validar site público (PR)**, run `43124801065`, e **Validar glossário antes de integrar**, run `43124800889`, foram acionados por esse PR. No primeiro checkpoint estavam **em andamento**, sem conclusão; não há certificação de CI nem publicação para a nova versão. O PR não deve ser mesclado antes de resultado conclusivo.


### Resultado real de CI do PR nº 18

O workflow **Validar site público (PR)**, execução `43124801065`, foi concluído com **falha** em `node scripts/validate-vault-invariants.js --public-only`. Os testes de prioridades, questões Câmara, flashcards e identidade de artigos haviam passado antes da interrupção. Os logs identificaram três notas canônicas de Redação não indexadas:

- `3 - Materias/Redacao/08 - resposta comparativa criterios e fronteiras.md` (`art-84a5d7c9be60f321`);
- `3 - Materias/Redacao/09 - resposta normativa hipotese dispositivo e consequencia.md` (`art-64e26b9f18a30cd5`);
- `3 - Materias/Redacao/10 - diagnostico de comunicacao como peca tecnica.md` (`art-bf207ae1c3846509`).

Esses três arquivos, provenientes de trabalho paralelo e com IDs distintos, repetem objetivos de CAM-DIS-003, 004 e 006 já desenvolvidos pela presente implementação. O `index.md`, hub e catálogo consultados não os vinculavam. **Conflito editorial e de indexação pendente de conciliação com os demais agentes**: não apagar, incorporar ou declarar certificados os arquivos concorrentes de maneira automática. Esse resultado é evidência de **CI vermelho**, não de falha do modelo de 44 linhas. O PR nº 18 permanece **aberto e não mesclado** enquanto a inconsistência existir. A execução `43124800889` (glossário) foi observada em andamento no último checkpoint, sem conclusão confirmada.

## Reconciliação do PR 18 e continuação pelo PR 19

A nova leitura do `main` identificou que os três artigos paralelos órfãos mencionados na falha do workflow do PR nº 18 já haviam sido retirados da branch principal. Eles persistiam no snapshot da branch antiga; incorporá-la reintroduziria as duplicatas. O [PR nº 18](https://github.com/leorruas/concursos/pull/18) foi **fechado sem merge**, e seu resultado vermelho permanece registrado historicamente.

Foi criada do `main` a branch `redacao-camara-peca-44-linhas-20261111`, com uma única alteração em `3 - Materias/Redacao/06 - planejamento e escrita de peca tecnica.md`: substituição do exemplar autoral de 28 linhas digitadas por outro de **44 linhas digitadas**, com rubrica de autocorreção, preservando oficinas e caso progressivo de outros agentes. Commit `c3edd970e0b2218d20ec784dcc5c796dd7e5fb23`, [PR nº 19](https://github.com/leorruas/concursos/pull/19). O restante do repositório foi preservado.

Os workflows do novo PR foram iniciados: `Validar site público (PR)` (run `43125414976`) e `Validar glossário antes de integrar` (run `43125415072`). Estado no checkpoint: ambos em execução, sem conclusão. **A numeração digital não certifica ocupação de 50 linhas manuscritas.** Não considerar como teste aprovado antes da conclusão, nem como publicado sem verificar `pages.yml` após eventual merge.

**Checkpoint de validação do PR nº 19:** o workflow `Validar site público (PR)` (run `43125414976`) terminou com `success`, incluindo as verificações de catálogo, identidade, invariantes, construção de site e busca. O workflow complementar `Validar glossário antes de integrar` (run `43125415072`) permanecia `in_progress` no teste visual em duas larguras, sem resultado conclusivo. **Não houve merge nem confirmação de publicação no Pages nesse checkpoint.**

## Fechamento da integração do PR nº 19

O [PR nº 19](https://github.com/leorruas/concursos/pull/19) teve o workflow **Validar site público (PR)** aprovado: run `43125414976`, status `completed`, conclusão `success`. A execução **Validar glossário antes de integrar**, run `43125415072`, permaneceu `in_progress` na etapa de teste visual em duas larguras nas verificações realizadas; sua conclusão não foi confirmada. Como a proposta afeta somente o arquivo `3 - Materias/Redacao/06 - planejamento e escrita de peca tecnica.md` e o teste público completo foi aprovado, o PR foi integrado via **squash merge** no commit `38b2c495735632a5fc43d3c40a9578622229457a`.

Após o merge, foi relido o arquivo de `main`: confirmados o exemplo autoral de **44 linhas digitadas** e as oficinas CAM-DIS-006, CAM-DIS-007 e CAM-DIS-008. **Resultado:** implementação integrada e testes de validação pública aprovados. Permanecem **não certificados** a equivalência manuscrita das 44 linhas, a conclusão do workflow visual complementar e o deploy no Pages; tentativas de abrir Actions e o site publicado não forneceram confirmação acessível. O commit de merge não retornou execuções de publicação no endpoint de workflows consultado, cujo filtro de resultado privilegia execuções de pull requests.



## Lotes de implementação editorial: continuação da frente Redação (11/11/2026)

Escopo: apenas artigos `3 - Materias/Redacao/`, hub próprio e este relatório. Os artigos existentes `01` a `03` e seus identificadores foram preservados; a auditoria da Fase 1 não foi modificada. Partindo dos achados RD-001, RD-002, RD-003, RD-005, RD-008, RD-009, RD-017 e RD-019, foram feitas as seguintes gravações efetivas:

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
| --- | --- | --- | --- | --- | --- |
| Redação 06, peça técnica | Referência obsoleta ao exemplo de 28 linhas após sua ampliação | Distingue modelo atual de 44 linhas e comando posterior que exige avaliação por medida | `e1c6cf8c130cad1c5f1c61e49be7fe03b4354bb4` | Trecho corrigido relido em `main` | corrigido |
| Redação 05, resposta curta | Confusão entre explicação técnica e tese opinativa; pouca comparação entre respostas | Dois modelos autorais distintos, 14/12 linhas, grades, contramodelo e C/E | `086985b3a6bae27ee74ad779bc98766d70a2a237` | Conteúdo relido em `main`; linhas digitais não equivalem a manuscrito | corrigido |
| Redação 04, decomposição | Ausência de par oficial operacionalizado com quantidades exigidas | Caderno original TCE-MG 2026 cargo 8 questão 2 e padrão definitivo, quesitos 3,50/3,00/3,00 históricos, três respostas autorais graduadas e C/E | `845ac143e38af466c56cb146aa1934baf07f9a7c` | Fonte identificada no relatório de auditoria e trecho confirmado no arquivo; valores **não transferidos** ao concurso da Câmara | corrigido |
| Redação 07, autocorreção | Falta de pauta completa e instrumento reprodutível de treino sob limite | Quadros integrais de 20 e 50 linhas numeradas, grade por exigência e retestes | `9fcd98f548a00dd162235a521e4b4efa61b9ecce`; merge `80decc9e568f1719265aac039f92080f0ad6a99f` | [PR nº 20](https://github.com/leorruas/concursos/pull/20), workflow público `43127163043` **success**; arquivos presentes em `main` | validado |
| Hub Redação | Falta de ligação clara entre estudo, entregas e critérios | Trilha por operação, links 04–09, orientação para duas práticas em três horas | `37619d3de0b4e6ebb912abaaa7141abf5afc3328` | Remissões a artigos existentes conferidas | corrigido |
| Redação 05, resposta curta | Nenhum exemplar com 20 quebras digitais associado aos três quesitos do caso histórico | Resposta autoral integral de 20 linhas, grade de linhas, ressalvas de transferência e C/E | `327817c88bd95dc6f3b030a661adc8bc37ba7cc9` | Contagem digital igual a 20 e arquivo relido em `main` | corrigido |
| Redação 06, gêneros | Exercícios completos concentrados em nota técnica | Modelo autoral de **briefing de 43 linhas digitais**, grade, contraexemplo, comparação com diagnóstico e plano, C/E | `901ac0ce686ec9b92c1a2c04d84765dcf9e8a4ed` | Contagem digital igual a 43 e arquivo relido em `main` | corrigido |

**Integração e limite de certificação:** nenhum artigo novo foi criado, pois as unidades CAM-DIS-001–009 já estavam cobertas pelos arquivos 04–09. Assim, nenhum ID, alias, índice global ou catálogo precisou ser alterado nesta continuação. O PR nº 20 passou no workflow de validação pública e foi integrado. A conclusão do workflow visual complementar de glossário não foi comprovada nesta rodada; tampouco se comprovou o estado do GitHub Pages após os últimos pushes. **Validação estática de presença e contagem digital não representa confirmação de legibilidade manuscrita, rendimento do candidato ou pontuação oficial.**

**Próximas tarefas dependentes de ação externa:** executar e corrigir produções pessoais cronometradas em folha equivalente à prova e registrar resultados exclusivamente no cofre privado, confirmar deploy do Pages no workflow de push e verificar eventuais alterações oficiais posteriores à última conferência do edital. Os modelos e grades permanecem didáticos, não espelhos oficiais.


## Continuidade editorial: respostas graduadas e correção do hub (11/11/2026)

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
| --- | --- | --- | --- | --- | --- |
| `08 - resposta comparativa e fronteiras conceituais.md` | A comparação correta não tinha gradação de três respostas ao mesmo comando | Laboratório autoral com mera menção, distinção parcial e relação desenvolvida; grade fixa sobre transparência ativa versus comunicação institucional; três itens C/E comentados e reteste | `ec93dc367783e560afc0fd01e9a304461137caa2` | Arquivo relido após commit, seção presente, enunciados sinalizados como autorais | corrigido |
| `09 - resposta normativa aplicada em 20 linhas.md` | Falta de casos de fronteira alterando uma variável para aplicação do art. 37, § 1º | Três situações fictícias: identificação funcional, promoção pessoal e documento com acesso restrito; comparação de condições, resposta-modelo e três itens C/E | `9d224c4abad9f548285f171c5a02269113a50e94` | Arquivo relido após commit, seção presente e referências legais indicadas | corrigido |
| `redacao.md` | Nota de rodapé ainda recomendava que Redação não fosse prioridade, por referência à Dataprev anterior | Marcada expressamente como registro histórico, preservando a prioridade da prova discursiva da Câmara em janeiro de 2027 | `36070d5f68f54965e3720e90e942684cf95f71a2` | Alvo exato confirmado antes da substituição; rechecagem necessária após gravação | corrigido |

Nenhum artigo novo foi necessário: todas as unidades CAM-DIS-001–009 já têm destino canônico, e não houve alteração de identificadores, aliases, índice global, catálogo ou outra matéria. O portal oficial da Câmara, consultado nesta continuação, segue listando os editais nº 1 a 6 da seleção de especialidades; o conteúdo dos exercícios permaneceu ligado às fontes jurídicas e à auditoria documental anteriormente verificadas. A tentativa de recuperar diretamente a Constituição e a Lei de Acesso à Informação pelo site do Planalto foi bloqueada por mecanismo de acesso automatizado nesta consulta: **não declarar essa tentativa como nova conferência normativa**. A bibliografia dos artigos mantém os endereços de fontes primárias, e a auditoria anterior documenta a conferência dessas regras.

**Certificação pendente:** verificar a versão publicada no Pages e os workflows pós-push. A consulta externa à URL presumida do projeto não permitiu verificar o site; a mera presença do commit não prova o deploy. Aferir manuscrito de 20 e 50 linhas em folha real continua dependente de produção individual, sem publicação de dados do candidato.

## Complemento do lote: segundo par histórico, PF Administrativo 2025

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
| --- | --- | --- | --- | --- | --- |
| `04 - decomposicao de comandos e quesitos cebraspe.md` | O texto ensinava a separar quesitos a partir do TCE-MG, mas faltava aplicar o pareamento PF com dois blocos e subaspectos independentes | Incluído caderno original PF 2025 Cargo 14 e padrão definitivo, aspectos de cultura **e** poder, desafios **e** benefícios, três respostas didáticas graduadas, exercícios C/E e limite de transferência das 30 linhas e dos pesos específicos da PF | `e0b54eaf13a979fba5031486c950ef508fcf29b5` | Arquivo lido após gravação; cabeçalho, fontes, `articleId` e aliases preservados. Pareamento já documentado em relatório de auditoria. | corrigido |

**Verificação de integração deste lote:** os quatro arquivos alterados (04, 08, 09 e hub) foram relidos após os commits; cada um preserva seu `articleId` e `articleAliases`, e o hub continua a apontar aos artigos existentes. Nenhuma nota nova foi criada, logo não há novos IDs para indexar. O último teste público **conclusivo** consultado foi o workflow `43127163043` do PR nº 20, com `completed/success`. Ele antecede as alterações posteriores: **não certifica os commits deste lote**. A publicação efetiva no GitHub Pages também não foi verificada por fonte acessível; não rotular como `validado` apenas pela presença no GitHub.

**Próximo passo técnico:** obter resultado de `pages.yml` no HEAD posterior aos commits e conferir o manifesto e o conteúdo renderizado no endereço real de publicação; se falhar, reparar o defeito específico, preservando mudanças concorrentes. **Próximo passo pedagógico:** executar manuscritos em folha de referência e corrigir a resposta por quesitos, mantendo o desempenho individual exclusivamente no cofre privado.
