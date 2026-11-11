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

**Validação editorial preliminar:** conferência do esquema do catálogo, do número de IDs inseridos, dos títulos e destinos dos links foi realizada durante a integração. **Validação automatizada ainda não certificada:** executar ou conferir o workflow `validar-publico.yml`, teste de identidade/catálogo e build antes de afirmar sucesso completo. **GitHub Pages ainda não certificado:** verificar execução de `pages.yml` e navegação/âncoras no site publicado. Criação de commit não é prova de publicação.

**Validação pedagógica ainda pendente:** testar respostas manuscritas sob limites reais, confrontar cada modelo contra caderno oficial autenticado e revisão conceitual aprofundada dos artigos compartilhados. As grades pedagógicas são **autorais**, nunca espelho oficial ou evidência de domínio do estudante. Nenhuma resposta pessoal foi registrada no repositório público.

## Fontes verificáveis

- Edital oficial Câmara 2026, nº 1, itens 9.1, 9.4–9.8.5: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/edital-1-analista-legislativo-especialidades
- Portal de editais e retificações: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concurso-para-analista-legislativo-especialidades
- PF Administrativo 2025, Cargo 14, padrão definitivo: https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/PF_25_ADM_PADR%C3%83O_DE_RESPOSTA_DEFINITIVO_CARGO_14.pdf
- TCE-MG 2026, Cargo 8, padrão definitivo: https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf
- Câmara 2026, Processo Legislativo e Gestão, padrão definitivo: https://cdn.cebraspe.org.br/concursos/cd_25_ns/arquivos/D5F3CAA9B8BAEA93D7B1750A43949FF94C88F2DA3F44ADAE978062F601A94FDD.pdf

## Próxima etapa

Conferir CI e Pages; resolver falhas reais se houver. Depois confrontar candidatos CAM-DIS-003, 004 e 006 com artigos já existentes nas matérias compartilhadas, documentando decisão de reaproveitar, aprofundar ou criar, em vez de inflar a biblioteca. Manter **dois treinos semanais de produção**, correção por quesitos e reteste espaçado; resultados pessoais exclusivamente no cofre privado.
