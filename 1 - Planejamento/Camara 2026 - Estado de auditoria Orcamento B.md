---
type: estado-auditoria-editorial
status: ativo
concursoId: camara-2026
created: 2026-11-16
updated: 2026-11-16
---

# Câmara 2026: estado da auditoria de Orçamento Público, frente B

**Propriedade:** Classificações, arrecadação e execução da despesa. Os 6 `articleIds` abaixo são exclusivos desta frente. Estado inicial **a verificar** significa ausência de certificação individual neste registro, não ausência de revisões anteriores. Conferir `main`, histórico e evidências antes de classificar. Não editar o estado de outras frentes.

| articleId | Artigo | Estado | Evidências (SHA, fontes, checks, Pages, ressalvas) |
| :--- | :--- | :--- | :--- |
| `art-d8b1c5e6037249fa` | `04 - classificacoes da receita e da despesa.md` | Revisão parcial, sem certificação | `8f06825ad8f463bc73b6cb6f68ce1c6a204f6c25`: caso numérico e separação das classificações integrados na `main`, blob `7d1fff593ea56006afdeefda389413bfd009650c`. Conferidos MCASP 11ª, MTO 2026 (4ª versão), STN fontes/destinação (atualizada em 13/08/2026). Leitura remota confirmou inserção. Workflow por SHA retornou lista vazia; CI, Pages, validação integral de links, flashcards/glossário e visual pendentes. |
| `art-f13b65a28d8c4e91` | `04a - classificacao da receita.md` | Revisão parcial, sem certificação | Commit `ed9faa9dc89d35991b574d2c3f6a902ba727bbe5`, blob `dadcb678239b30efe3c2b9c6ac1bbc9ec5d160e2`: distinção entre identificador federal de resultado (1/0), natureza e fonte, com delimitação de âmbito, versão e referências a MTO 2026 e STN. Pendentes C/E, glossário, flashcards, CI e Pages. |
| `art-28b3d9ef86aa4510` | `04b - classificacao da despesa.md` | Revisão parcial, sem certificação | Commit `33c5b3a24528825a85a9d61a76b5a91c96f944b4`: exemplo numérico de uma ação com GND 3 e 4, distinção de fonte e referência adicional ao MTO 2026. Pendente cotejo integral, C/E, glossário/flashcards, CI e Pages. |
| `art-0fb9b88e4d6c4151` | `06 - programacao orcamentaria e contingenciamento.md` | Revisão parcial; linguagem simples em andamento | Commit `b8b530574c848923de021e88e7f8baa2488733e1`: reescritos mecanismos do art. 8º e 9º da LRF, sujeitos e atos, função da LDO e dois exemplos numéricos com saldos e recomposição proporcional. Fontes: LRF atualizada, arts. 4º, 8º, 9º; LDO 2026, art. 71. Pendem segunda leitura integral de linguagem simples, itens C/E e comentários completos, diagramas, glossário/flashcards, CI e Pages. |
| `art-4677cfa327ce43bb` | `07 - receitas publicas e estagios.md` | Revisão parcial de linguagem simples, sem certificação | Commit `e7468b4d77e2e6e1410af0333b755990a5388f1f`: definições de caução, empréstimo, receita orçamentária, exemplo contínuo de previsão/lançamento/arrecadação/recolhimento, papel da autoridade tributária e diferença patrimonial. Fontes conferidas: Lei 4.320 arts. 35, 53, 56, 57; CTN 142; MCASP 11; LRF 38. Pendem segunda leitura integral, revisão C/E completa, glossário/flashcards, testes e Pages. |
| `art-67167e9c18284c4c` | `08 - despesas publicas e estagios.md` | Revisão parcial de linguagem simples, sem certificação | Commit `4fd3859fb9296e690cc78d9306e2de1f165f0d03`: atores da fixação/empenho/liquidação/pagamento, diferença entre ato e nota, exemplos numéricos e gabarito. Fontes legais: Lei 4.320 arts. 58 a 65, MCASP 11. Pendem cotejo integral, segunda leitura simples, C/E, glossário/flashcards, CI e Pages. |

## Fechamento e retomada

Aplicar a matriz `1 - Planejamento/Camara 2026 - Coordenacao editorial Orcamento.md`, a publicação direta na `main` e o critério de **revisão integral concluída com ressalva visual** do `AGENTS.md`. Trabalhar um artigo por vez e registrar aqui evidências individuais reais, a correção integral e as pendências específicas de inspeção visual. Sem criar EPUB, sessões de estudo ou resultados fictícios. Não marcar como publicado sem evidências de CI e Pages pertinentes.

## Registro de execução de 16/11/2026

A frente B iniciou pelo artigo 04, preservou `articleId` e aliases e publicou um caso numérico com receita primária versus financeira, fonte/destinação e dimensões da despesa. Commit `8f06825ad8f463bc73b6cb6f68ce1c6a204f6c25`. Fontes consultadas: [MCASP 11ª](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/manuais/manual-de-contabilidade-aplicada-ao-setor-publico-mcasp-1), [MTO 2026, 4ª versão](https://www1.siop.planejamento.gov.br/mto/lib/exe/fetch.php/mto2026%3Amto_2026_-_versao_4_.pdf) e [STN: fonte/destinação](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/federacao/fonte-ou-destinacao-de-recursos). A consulta a workflows por commit não trouxe execuções; não há certificado de CI/Pages. Permanecem pendentes conferência jurídica integral, cada C/E, Mermaid, links, glossário, flashcards e inspeção visual. Os outros cinco artigos continuam sem certificação individual nesta frente. Nenhum EPUB foi gerado.

**Avanço artigo 04a:** commit `ed9faa9dc89d35991b574d2c3f6a902ba727bbe5` na `main`; cotejo pontual da classificação por indicador do resultado da receita com o MTO 2026 (4ª versão) e o âmbito das fontes com a STN. Sem certificação integral ou evidência de Pages nesta sessão.

**Avanço artigo 04b:** commit `33c5b3a24528825a85a9d61a76b5a91c96f944b4` na `main`, com caso aritmético R$ 200 mil + R$ 50 mil = R$ 250 mil e GNDs distintos dentro da mesma ação. Sem certificação integral.

## Critério adicional obrigatório: linguagem simples (16/11/2026)

Para **cada um dos seis artigos**, a certificação exige controles independentes de **correção jurídica/técnica**, **qualidade didática** e **linguagem simples**, além das evidências técnicas de publicação. A auditoria de linguagem simples exige leitura integral e uma segunda leitura exclusiva: explicação de termos e siglas na primeira ocorrência; frases e atores identificáveis; explicação de efeitos de normas e etapas; exemplos antes de conceitos complexos; revisão de tabelas, Mermaid, itens C/E, alternativas parciais, gabaritos, links com glossário e flashcards. Integrar correções às seções existentes, sem blocos artificiais. Preservar IDs e âncoras. **Nenhum dos seis recebeu ainda certificação de linguagem simples integral nesta execução.** A inspeção visual pode ficar como ressalva somente se os demais controles forem comprovados.

**Artigo 06, diagnóstico parcial:** a leitura identificou dependência de termos como programação, limitação de empenho, recomposição e critérios da LDO sem demonstração suficientemente concreta de quem faz cada ato e como os saldos evoluem. O commit `b8b530574c848923de021e88e7f8baa2488733e1` esclareceu os agentes e os dois prazos, demonstrou R$ 1 milhão de dotação até R$ 250 mil pagos e a recomposição de R$ 9 milhões na proporção 1:2. **Limites conhecidos:** segunda leitura integral da linguagem do artigo, sobretudo refinamentos específicos de 2026, gabaritos, tabelas e possíveis diagramas ainda não concluída; também não comprovados CI/Pages. Os artigos 04, 04a e 04b já alterados anteriormente requerem verificação independente de linguagem simples antes da certificação. Os artigos 07 e 08 ainda não foram submetidos a esta verificação específica.

**Avanço em 16/11/2026: artigos 07 e 08.** O artigo 07 recebeu explicações de ingresso, lançamento tributário e sequência de quatro estágios; o 08, de execução da despesa e distinção entre nota e ato, com exemplos aritméticos. Commits `e7468b4d77e2e6e1410af0333b755990a5388f1f` e `4fd3859fb9296e690cc78d9306e2de1f165f0d03`. A linguagem simples foi **trabalhada, mas não auditada integralmente em segunda leitura**. O processo de seis artigos permanece sem certificação. Nenhum EPUB foi gerado.
