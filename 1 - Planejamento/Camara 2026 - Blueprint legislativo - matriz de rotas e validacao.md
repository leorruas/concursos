# Blueprint legislativo: matriz de rotas e validação

Status: **primeira versão editorial em 19/11/2026**. Artigo canônico: `3 - Materias/Direito Constitucional/38 - blueprints do processo legislativo por especie normativa.md`, `art-8c319e6f2a704bd5`.

## Escopo e unidades

| Rota | Origem | Atores de decisão | Produto | Relógios e marcos a verificar |
| :--- | :--- | :--- | :--- | :--- |
| PL | Autor legitimado, Câmara ou Senado | Presidência, comissões, Plenários, Executivo | Lei ordinária | Art. 52 RICD, art. 64 CF se solicitado, art. 66 |
| PLP | Autor legitimado, Câmara ou Senado | Comissões, duas Casas, Executivo | Lei complementar | Quórum art. 69, art. 66 |
| PEC | Legitimados do art. 60 | CCJC, comissão especial, Câmara e Senado, Mesas | Emenda constitucional | Dois turnos e 3/5 por Casa; sem sanção |
| MPV/PLV | Presidente da República | Comissão mista, Câmara, Senado, Executivo | Conversão em lei / rejeição | 45, 60, 120 dias; recesso; art. 62 |
| PDL | Legislativo competente | Comissões e Casas, conforme a matéria | Decreto legislativo | Rito específico, sem sanção |
| PRC | Câmara | Mesa, comissões, órgão competente da Câmara | Resolução da Câmara | Regimento da Câmara |
| PRS | Senado | Mesa, comissões, Senado | Resolução do Senado | Regimento do Senado |
| PRN | Congresso | Colegiados, Câmara e Senado conforme Regimento Comum | Resolução do Congresso | Votos por Casa quando sessão conjunta |
| PLN | Presidente, casos orçamentários | CMO, Congresso, Executivo | Lei orçamentária ou créditos em lei | Art. 166, ADCT, Resolução 1/2006-CN |
| Lei delegada | Presidente solicita | Congresso, Presidente, eventual apreciação parlamentar | Lei delegada | Art. 68, condições da delegação |

## Critérios de conclusão

Cada rota precisa explicitar **origem, sujeito competente, documento inicial, despacho, instrução, decisão, quórum, prazo e unidade, possíveis retornos, resultado e fundamento normativo**. Não presumir que o artigo 52 do RICD se aplique indiscriminadamente a PEC, PRS, PRN, PLN, MPV e demais procedimentos especiais.

O artigo contém **10 diagramas Mermaid**; as rotas são sínteses para leitura, **não certificação exaustiva** de todos os incidentes. Em uma segunda passagem, subdividir por eventos ainda ausentes: retirada, recurso, pedido de vista, emenda e substitutivo, urgência, sobrestamento, prejudicialidade, arquivamento, desarquivamento, redação final e votação de vetos, com matriz de testes por desvio. Aumentar granularidade **dentro da seção de cada espécie**, conforme AGENTS.md, evitando anexos de refinamento.

## Validações

- Verificar `articleId` único, catálogo e índice da disciplina.
- Verificar que todos os diagramas têm cercas ínteg​ras e sintaxe Mermaid compatível.
- Rodar CI e publicação na `main`; confirmar SHA e disponibilidade da página.
- **Inspeção visual pendente até teste real:** tema claro e escuro, zoom, pan, textos, contraste, tela móvel e opção de ocultar TOC. Não declarar essa parte concluída sem evidência.
