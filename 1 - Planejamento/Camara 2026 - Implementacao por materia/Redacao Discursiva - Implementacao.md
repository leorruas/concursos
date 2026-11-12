---
title: "Câmara 2026: implementação de Redação Discursiva e Peça Técnica"
type: "relatorio-implementacao"
status: "implementacao-parcial-validacao-pendente"
updated: 2026-11-11
escopo: "CAM-DIS-001, CAM-DIS-002, CAM-DIS-005 e CAM-DIS-009"
---

# Redação Discursiva e Peça Técnica: relatório de implementação

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
