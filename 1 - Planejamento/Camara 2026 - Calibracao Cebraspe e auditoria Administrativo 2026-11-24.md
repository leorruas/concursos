---
title: "Câmara 2026: calibração Cebraspe e auditoria inicial de Direito Administrativo"
type: "governanca-editorial"
status: "auditoria-inicial"
created: 2026-11-24
updated: 2026-11-24
---

# Câmara 2026: calibração Cebraspe e auditoria inicial de Direito Administrativo

## Referências e limites

Esta é uma **comparação inicial**, não certificação de toda a base ou previsão do estilo da próxima prova. A prova da Câmara **edital 2025, aplicação em 2026** de conhecimentos gerais para analista e técnico oferece o cotejo mais diretamente relevante entre as fontes consultadas: [caderno oficial](https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/arquivos-2025/1-prova-objetiva-de-conhecimentos-gerais-analista-e-tecnico). Os itens 47 e 48 partem de **um mesmo cenário com fundação pública de direito privado, execução material de atividades-meio, falta de delegação de serviço público e redistribuição de atribuições entre órgãos internos**. Para julgar, é necessário separar pessoa jurídica, hierarquia, desconcentração e descentralização. O item 49 confronta natureza jurídica de fundações e regime de bens; itens posteriores abordam processo administrativo. A prova da Câmara 2014 é referência histórica adicional; a prova TCE/MG de edital 2025, [caderno oficial](https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/320D70B97CC0EDBE166890B55FCDA7A4D04AC4E219402DE1DDEE1BDC051EC6F5.pdf), é comparação de banca, mas usa formato múltipla escolha e outro cargo.

**Observação metodológica:** número de dispositivos citados, volume de texto e dificuldade percebida são variáveis diferentes. Não extrapolar distribuição percentual da banca a partir desses exemplos. O contraste temático é sustentado pelos itens identificados, não por análise estatística de todo o caderno. Gabaritos definitivos e eventuais anulações devem ser consultados antes de classificar oficialmente as respostas ou importar itens.

## Verificação inicial do banco de Direito Administrativo

Foram lidos os **333 itens** dos cinco arquivos suplementares `data/questoes-camara-administrativo-{aplicacao,casos,dificeis,extra,variantes}.json`: 64 + 64 + 87 + 64 + 54. O metadado `estimatedDifficulty` marca 138 como `media` e 195 como `dificil`. No texto de `statement`, **70 itens têm menos de 130 caracteres e nenhum ultrapassa 350**. Os cinco arquivos têm `id`, `articleId`, `conceptId`, `mechanism`, resposta e explicação; a fundamentação se encontra usualmente em `sourceNote`, muitas vezes com fontes gerais em vez de artigo preciso. A ausência de `theoryRefs` nesses arquivos não prova quebra de ligação, pois a estrutura usa `articleId` e `section`. É preciso executar validadores antes de declarar erro estrutural. Esses números não abrangem todo o banco principal `data/questoes-camara.json`.

**Diagnóstico editorial:** a variedade temática e de mecanismos é útil, com exemplos que distinguem entidade e órgão, delegação e hierarquia, concessão e outorga, vinculação, efeitos do ato e PAD. Contudo, parte dos itens marcados como difíceis é resolvida por identificação de definição ou troca de palavra, sem contexto decisório desenvolvido. Exemplo: `cam-dad-aplicacao-2026-03-03` pergunta diretamente se lei cria autarquia e autoriza empresa pública; `cam-dad-casos-2026-04-3` distingue outorga e concessão em uma frase. Os itens não são necessariamente incorretos: funcionam como recuperação conceitual, mas sozinhos não reproduzem o desafio de combinar fatos e normas dos itens 47-48 da prova de edital 2025.

**Encaminhamento para próximas expansões, sem edição em massa:** preservar as perguntas curtas para aprendizagem, acrescentar casos de duas ou mais etapas e itens que combinem dispositivos, funções, sujeitos, exceções e consequências; exigir fonte normativa localizada nos itens difíceis e não usar rótulo de dificuldade como certificação de equivalência à Cebraspe. Para amostra auditada do Administrativo, revisar especialmente os itens de `sourceNote` genérico antes de classificá-los como de alta confiança. Ampliar a análise ao banco principal e confrontar com gabarito definitivo da prova oficial para uma certificação posterior. Não alterar IDs, gabaritos nem histórico de tentativas sem revisão jurídica.

## Protocolo de geração e atualização

Aplicar o guia 02: cada lote deve descrever quais operações cognitivas acrescenta, comparar `conceptId` com itens existentes e preservar variantes realmente diferentes. Usar uma amostra equilibrada **em formas de raciocínio**, sem fixar percentuais arbitrários. A composição inclui recuperação literal, caso aplicado, distinção, exceção, combinação de pelo menos dois dispositivos e inferência de consequência. A explicação deve dizer por que o gabarito decorre dos fatos e o que mudaria a conclusão. Revisar fontes e publicação antes do uso competitivo.

## Mecanismo de novidade

O seletor `web/15-questoes-ui.js` já exibe a sugestão **Praticar questões novas** e coloca IDs não respondidos antes de IDs respondidos no histórico local. Na integração autenticada, `seenByContest` recebe `adaptive.exposedQuestionIds`, quando disponível. O nome atual significa **sem resposta conhecida**, não **criada recentemente**; histórico incompleto pode mudar o resultado. Não introduzir alerta extra agora. Para eventual teste de interface, diferenciar `ainda não respondida`, `publicada recentemente` e `variante do mesmo conceito` e validar com usuários e sincronização antes de publicar indicador.

## Próxima auditoria

Ampliar a amostra de Administrativo para incluir o núcleo principal e checar: precisão normativa do `sourceNote`; aplicabilidade dos casos; duplicação sem ganho cognitivo; equilíbrio de formas de julgamento e proporção realmente aferida de itens curtos/contextualizados nas provas oficiais. Este documento registra um ponto de partida, sem afirmar que todos os itens do Administrativo estão certificados.
