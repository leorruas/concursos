---
type: planejamento-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-15
updated: 2026-11-15
---

# Câmara 2026: registro independente da auditoria B

**Escopo exclusivo:** 11 artigos atribuídos à frente **B**, conforme [[1 - Planejamento/Camara 2026 - Coordenacao editorial Administrativo]]. Este documento registra **evidência real de cada auditoria**, não metas ou desempenho individual. Abrir e verificar a `main` e os PRs a cada execução.

**Estados permitidos:** a conferir; reservado; em PR; integrado, deploy pendente; publicado, revisão parcial; publicado, revisão integral certificada; adequado sem alterações (com evidência); bloqueado (motivo). O estado inicial `a conferir` não significa que o artigo nunca foi revisado. Sempre reconciliar certificações históricas antes de mudar de estado.

| articleId | Artigo | Estado inicial em 15/11/2026 | Evidência / PR / SHA / URL e próxima ação |
| :--- | :--- | :--- | :--- |
| `art-9f98650edd9e4278` | `3 - Materias/Direito Administrativo/06 - responsabilidade civil do estado.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-e3be4825ac4c455a` | `3 - Materias/Direito Administrativo/08 - licitacoes e contratos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-b3edb79bff314c93` | `3 - Materias/Direito Administrativo/10 - servicos publicos.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-cbd0b4285d514319` | `3 - Materias/Direito Administrativo/11 - controle da administracao publica.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-2e8a8f600b964d40` | `3 - Materias/Administracao Publica/01 - evolucao da administracao publica.md` | em PR | Revisão dirigida de todas as seções e itens C/E; correção da contratualização de resultados e inclusão da Lei 13.934/2019 (arts. 1º–3º, 7º, 10), CF art. 37 § 8º e DL 200/1967 art. 6º. Commit `19a34180f5`; PR a abrir. Cotejo integral do PDRAE, Lei 14.133, Lei 9.649 e jurisprudência, glossário/flashcards e Pages ainda pendentes; não certificado. |
| `art-23fe2441eab94f8d` | `3 - Materias/Administracao Publica/02 - governanca publica.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-2ca37017208841b8` | `3 - Materias/Administracao Publica/03 - transparencia acesso a informacao e protecao de dados.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-b72a64e019f34c8d` | `3 - Materias/Administracao Publica/04 - nova governanca publica.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-c59173b20e684daf` | `3 - Materias/Administracao Publica/05 - redes de cooperacao e articulacao interinstitucional.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-ae41d8c6920f4b57` | `3 - Materias/Administracao Publica/06 - coproducao de servicos publicos e participacao cidada.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |
| `art-d8257e60c3494b91` | `3 - Materias/Administracao Publica/07 - parcerias com setor privado e terceiro setor.md` | a conferir | Consultar evidências oficiais, PRs, histórico e versão publicada antes de classificar |

## Histórico da frente

- **15/11/2026, segunda rodada:** PR #347 integrado com CI aprovado; deploy correspondente ainda sem comprovação, logo artigo AP01 permanece sem certificação integral. Não abrir novo PR de artigo enquanto se verifica o resultado e se concluem pendências documentadas.


- **15/11/2026:** divisão operacional criada com matriz imutável de propriedade por `articleId`, sem atribuir aprovação ou publicação fictícia. Cada nova rodada deve acrescentar somente evidências desta frente.

**Regra de edição:** esta frente escreve apenas neste arquivo de estado; as outras frentes não o alteram. Não editar a fila geral compartilhada para registrar status cotidiano. Na auditoria de cada artigo, conferir todas as seções, os C/E, diagramas, fontes e vínculos de glossário/flashcards. PR, CI, integração e comprovação do Pages são etapas separadas; cada estado deve refletir seu grau de prova.

- **15/11/2026, AP01, `art-2e8a8f600b964d40`:** identificada lacuna sobre Lei 13.934/2019 e risco de confusão entre contrato de desempenho, contrato de gestão com OS e termo de parceria OSCIP. Correção didática e normativa em branch `editorial/b-ap01-contratos-desempenho-20261115`. Fontes examinadas: Constituição art. 37 § 8º, Lei 13.934/2019 e DL 200/1967 art. 6º. Não atestar auditoria jurídica integral até cotejo de todas as normas e publicação.
