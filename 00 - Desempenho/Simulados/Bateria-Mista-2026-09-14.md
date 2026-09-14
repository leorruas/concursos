---
title: "Bateria mista Dataprev/FGV — 14/09/2026"
type: "diagnostico"
status: "ativo"
created: 2026-09-14
updated: 2026-09-14
---

# Bateria mista Dataprev/FGV — 14/09/2026

## Proveniência e escopo

Fonte: anexo de conversa `00 ingestão.md`, processado em 14/09/2026. O arquivo reúne blocos sucessivos de Lógica, Português, Legislação de SI, Comunicação Social, Atualidades/IA e um bloco de Inglês iniciado sem respostas registradas.

Para as métricas, cada disciplina foi tratada como bateria dirigida independente. O bloco de Inglês ficou fora do denominador por ausência de respostas. Em Português, uma questão foi anulada por não possuir alternativa incorreta e também ficou fora do denominador.

O `scripts/ingest-safe.js` não foi usado para registrar fingerprint desta evidência porque o anexo não estava no inbox do repositório e o motor interno atual pressupõe um único par disciplina/placar por entrada. Criar uma entrada sintética apenas para alimentar o ledger produziria proveniência falsa. A ingestão foi, portanto, registrada de forma auditável nos derivados e neste diagnóstico, preservando essa limitação operacional.

## Resultado consolidado

- Lógica: **5/6 (83,3%)**.
- Português: **5/6 válidas (83,3%)**, com 1 questão anulada.
- Legislação de SI e proteção de dados: **4/4 (100%)**.
- Comunicação Social: **6/7 (85,7%)**.
- Atualidades / IA: **2/3 (66,7%)**.
- Inglês: sem respostas registradas, não contabilizado.
- Total válido: **22/26 (84,6%)**.
- TAP da sessão: **84,4%**, aplicando os pesos vigentes do vault.

## Erros mapeados

### Lógica: negação de `nenhum` [C]

**Erro:** negar `Nenhum A é B` como `Todo A é B`.

**Causa raiz:** transposição do extremo quantitativo. A negação de uma interseção vazia exige apenas que a interseção deixe de ser vazia: `Algum A é B`.

**O que estudar:** negação de quantificadores, com foco na fronteira `nenhum → algum`.

**Estudo:** [[3 - Materias/Logica/03 - quantificadores#Negação dos quantificadores|Negação dos quantificadores]].

### Português: adversativa × concessiva [C, recorrente]

**Erro:** reescrita de `contudo` por `embora` sem preservar a arquitetura argumentativa e o modo verbal.

**Causa raiz:** recuperação incompleta de uma fronteira já estudada. `Contudo` coordena oração adversativa; `embora` introduz oração subordinada concessiva, normalmente com subjuntivo.

**O que estudar:** transformação entre coordenação adversativa e subordinação concessiva.

**Estudo:** [[3 - Materias/Portugues/03 - pontuacao e virgula#Coordenação adversativa × subordinação concessiva|Coordenação adversativa × subordinação concessiva]].

### Comunicação: clipping × auditoria de imagem [C]

**Erro:** classificar análise longitudinal de oito meses de cobertura como `clipping`.

**Causa raiz:** escolha de uma definição verdadeira aplicada à etapa imediatamente anterior. Clipping é coleta e organização; auditoria de imagem na mídia é análise estruturada e abrangente da cobertura.

**O que estudar:** fronteira entre clipping, análise tópica e auditoria de imagem.

**Estudo:** [[3 - Materias/Comunicacao/08 - assessoria de imprensa#6. Clipping, análise tópica e auditoria de imagem|Clipping, análise tópica e auditoria de imagem]].

### Atualidades: regime de metas, IPCA, Selic e Copom [K]

**Erro:** assumir que queda do IPCA produz redução automática da Selic na mesma proporção.

**Causa raiz:** lacuna de repertório econômico básico.

**O que estudar:** meta central de inflação, faixa de tolerância, critério de descumprimento formal e decisão do Copom sem automatismo entre IPCA e Selic.

**Estudo:** [[3 - Materias/Atualidades/03 - regime de metas inflacao selic copom#Tensões e pegadinhas|Regime de metas, inflação, Selic e Copom]].

## Evidências de recuperação

- De Morgan reapareceu corretamente em contexto misto de Lógica e o erro de 04/09 foi marcado como superado.
- Português recuperou `haver/existir`, funções do `se`, crase, voz passiva e regência de `preferir`.
- Comunicação manteve bom desempenho em Schein, Kunsch, newsmaking, teorias do jornalismo, bridging e finalidade predominante.
- Legislação fechou 4/4 e validou a nova nota sobre a redação vigente do art. 154-A.
- Atualidades acertou mercado de carbono e coexistência entre competição estratégica e cooperação internacional em segurança de IA.

## Impacto no edital

A bateria fechou a lacuna de **Lei nº 12.737/2012**, levando Legislação de SI e Proteção de Dados a **4/4** itens concluídos. Atualidades permanece em **1/2**, porque o item geral do edital continua mais amplo do que o recorte de inflação e política monetária estudado nesta sessão.

## Destinos pedagógicos

- Todos os itens: `metrica_apenas`.
- Lógica Q2 [C]: `enriquecimento_teorico` + `questao_comentada_candidata`; teoria já existente, sem duplicação.
- Português Q4 [C]: `enriquecimento_teorico` + `questao_comentada_candidata` + `erro_recorrente`; teoria já existente.
- Comunicação Q5 [C]: `enriquecimento_teorico` + `questao_comentada_candidata`; teoria já existente.
- Atualidades Q1 [K]: `enriquecimento_teorico` + `questao_comentada_candidata` + `nova_nota`; a nova nota já havia sido criada durante a própria sessão.
- Legislação Q1: acerto com alto valor cognitivo e conteúdo antes ausente; a nota da Lei 12.737/2012 já registra a expansão necessária.
