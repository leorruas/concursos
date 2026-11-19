---
articleId: art-8c319e6f2a704bd5
articleAliases: ["3 - Materias/Direito Constitucional/38 - blueprints do processo legislativo por especie normativa.md"]
title: "Blueprints do processo legislativo: atores, fases, prazos e resultados por proposição"
type: "conceito"
status: "ativo"
created: 2026-11-19
updated: 2026-11-19
---

# Blueprints do processo legislativo por espécie normativa

**Fases:** 01 Origem · 02 Recebimento e distribuição · 03 Instrução · 04 Deliberação · 05 Revisão e retorno · 06 Conclusão.

**Leitura:** cada **faixa identifica um ator**; as caixas mostram a **fase e a atividade** sob sua responsabilidade. Setas indicam entregas entre atores. Prazos aparecem apenas quando são próprios do caminho indicado. Os fluxos representam a **rota típica**, com ramificações essenciais. Para detalhes normativos e exceções, siga os links abaixo de cada mapa. No explorador Mermaid, use zoom para percorrer cada blueprint.

## PL → lei ordinária

```mermaid
flowchart LR
  subgraph L0["Autor da proposição"]
    direction LR
    a["01 · Apresenta PL"]
  end
  subgraph L1["Presidência e serviços da Câmara"]
    direction LR
    b["02 · Recebe, publica<br/>e distribui"]
  end
  subgraph L2["Comissão e relator"]
    direction LR
    c["03 · Emendas e relatório<br/>parecer: 5 / 10 / 40 sessões"]
  end
  subgraph L3["Comissões / Plenário da Câmara"]
    direction LR
    d["04 · Apreciação conclusiva<br/>ou votação no Plenário"]
  end
  subgraph L4["Senado Federal"]
    direction LR
    e["05 · Revisa PL;<br/>emenda ou rejeita"]
  end
  subgraph L5["Câmara, quando houver emendas"]
    direction LR
    f["05 · Delibera sobre<br/>emendas do Senado"]
  end
  subgraph L6["Presidência da República"]
    direction LR
    g["06 · Sanção ou veto<br/>15 dias úteis"]
  end
  subgraph L7["Autoridade competente"]
    direction LR
    h["06 · Promulgação<br/>e publicação"]
  end
  a --> b --> c --> d --> e
  e -->|sem emendas| g
  e -->|com emendas| f --> g
  g --> h
```

Origem: legitimado constitucional. O caminho da Câmara pode ser conclusivo nas comissões ou seguir ao Plenário. PL iniciado no Senado inverte as Casas. **Aprofundar:** [[3 - Materias/Direito Constitucional/13 - tramitacao e fases do processo legislativo|Tramitação, comissões e revisão bicameral]] · [[3 - Materias/Direito Constitucional/18 - procedimentos abreviado e sumario|Ritos e urgência constitucional]].

## PLP → lei complementar

```mermaid
flowchart LR
  subgraph L0["Autor legitimado"]
    direction LR
    a["01 · Apresenta PLP"]
  end
  subgraph L1["Presidência da Casa iniciadora"]
    direction LR
    b["02 · Recebe e distribui"]
  end
  subgraph L2["Comissões e relatores"]
    direction LR
    c["03 · Parecer sobre<br/>matéria e admissibilidade"]
  end
  subgraph L3["Plenário da Casa iniciadora"]
    direction LR
    d["04 · Votação<br/>maioria absoluta"]
  end
  subgraph L4["Plenário da Casa revisora"]
    direction LR
    e["05 · Votação<br/>maioria absoluta"]
  end
  subgraph L5["Casa iniciadora"]
    direction LR
    f["05 · Examina emendas<br/>da revisora, se houver"]
  end
  subgraph L6["Presidência da República"]
    direction LR
    g["06 · Sanção ou veto"]
  end
  subgraph L7["Autoridade competente"]
    direction LR
    h["06 · Promulgação<br/>e publicação"]
  end
  a --> b --> c --> d --> e
  e -->|sem emendas| g
  e -->|com emendas| f --> g
  g --> h
```

Origem: legitimado com iniciativa para matéria reservada à lei complementar. Maioria absoluta em cada Casa (CF, art. 69). **Aprofundar:** [[3 - Materias/Direito Constitucional/36 - especies legislativas comparacao por iniciativa quorum e efeito|Espécies legislativas e quóruns]] · [[3 - Materias/Direito Constitucional/12 - iniciativa legislativa sujeitos e limites|Iniciativa legislativa]].

## PEC → emenda constitucional

```mermaid
flowchart LR
  subgraph L0["Legitimados constitucionais"]
    direction LR
    a["01 · Apresentam PEC<br/>art. 60"]
  end
  subgraph L1["Presidência e órgão de admissibilidade"]
    direction LR
    b["02 · Recebe<br/>e distribui"]
    c["03 · Verifica<br/>admissibilidade"]
  end
  subgraph L2["Comissão especial / órgãos competentes"]
    direction LR
    d["03 · Examina mérito<br/>e emendas"]
  end
  subgraph L3["Plenário da Casa iniciadora"]
    direction LR
    e["04 · Dois turnos<br/>3/5 em cada"]
  end
  subgraph L4["Casa revisora"]
    direction LR
    f["05 · Exames e dois turnos<br/>3/5 em cada"]
  end
  subgraph L5["Ambas as Casas"]
    direction LR
    g["05 · Se houver alteração:<br/>textos devem convergir"]
  end
  subgraph L6["Mesas da Câmara e Senado"]
    direction LR
    h["06 · Promulgam EC<br/>e publicam"]
  end
  a --> b --> c --> d --> e --> f
  f -->|texto idêntico| h
  f -->|texto divergente| g --> e
```

Origem: legitimados do art. 60. Dois turnos e três quintos em cada Casa; promulgação pelas Mesas, sem sanção. **Aprofundar:** [[3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte|Poder constituinte e emendas]] · [[3 - Materias/Direito Constitucional/36 - especies legislativas comparacao por iniciativa quorum e efeito|Quóruns por espécie]].

## MPV e PLV → conversão em lei

```mermaid
flowchart LR
  subgraph L0["Presidente da República"]
    direction LR
    a["01 · Edita e publica MPV"]
  end
  subgraph L1["Congresso / comissão mista"]
    direction LR
    b["02 · Recebe MPV<br/>e emendas"]
    c["03 · Parecer<br/>e eventual PLV"]
  end
  subgraph L2["Plenário da Câmara"]
    direction LR
    d["04 · Primeira apreciação<br/>do texto"]
  end
  subgraph L3["Plenário do Senado"]
    direction LR
    e["05 · Examina texto;<br/>pode emendar"]
  end
  subgraph L4["Casas legislativas"]
    direction LR
    f["05 · Conciliação das<br/>alterações, se houver"]
  end
  subgraph L5["Presidente da Mesa do Congresso"]
    direction LR
    g["06 · Promulga conversão<br/>sem mudança"]
  end
  subgraph L6["Presidência da República"]
    direction LR
    h["06 · Sanciona ou veta PLV"]
  end
  subgraph L7["Congresso"]
    direction LR
    i["06 · Rejeição ou perda:<br/>examinar efeitos jurídicos"]
  end
  a --> b --> c --> d --> e
  e -->|MPV original| g
  e -->|PLV aprovado| h
  e -->|alteração pendente| f --> h
  d -->|rejeita| i
  e -->|rejeita| i
```

Origem: Presidente edita MPV, com força de lei. 60 + 60 dias de vigência, recesso suspende a contagem; após 45 dias sem apreciação, urgência constitucional. **Aprofundar:** [[3 - Materias/Direito Constitucional/33 - medidas provisorias resolucao 1 2002 CN|Rito completo das medidas provisórias]] · [[3 - Materias/Direito Constitucional/21 - medida provisoria pressupostos prazos e efeitos|Prazos, eficácia e PLV]].

## PDL → decreto legislativo

```mermaid
flowchart LR
  subgraph L0["Autor parlamentar / órgão legitimado"]
    direction LR
    a["01 · Apresenta PDL"]
  end
  subgraph L1["Mesa da Casa competente"]
    direction LR
    b["02 · Recebe e distribui"]
  end
  subgraph L2["Comissões e relatores"]
    direction LR
    c["03 · Pareceres"]
  end
  subgraph L3["Casa iniciadora"]
    direction LR
    d["04 · Delibera"]
  end
  subgraph L4["Casa revisora ou Congresso"]
    direction LR
    e["05 · Delibera conforme<br/>competência e rito"]
  end
  subgraph L5["Autoridade legislativa competente"]
    direction LR
    f["06 · Promulga e publica<br/>decreto legislativo"]
  end
  a --> b --> c --> d --> e --> f
```

Origem: órgão legislativo com competência para a matéria. A rota entre Casas depende do fundamento constitucional e do procedimento aplicável; sem sanção. **Aprofundar:** [[3 - Materias/Direito Constitucional/22 - projetos de decreto legislativo e resolucao|Decreto legislativo e competências]].

## PRC → resolução da Câmara

```mermaid
flowchart LR
  subgraph L0["Autor legitimado na Câmara"]
    direction LR
    a["01 · Apresenta PRC"]
  end
  subgraph L1["Presidência / Mesa da Câmara"]
    direction LR
    b["02 · Recebe e distribui"]
  end
  subgraph L2["Comissões e relatores"]
    direction LR
    c["03 · Examinam e emitem parecer"]
  end
  subgraph L3["Órgão decisório da Câmara"]
    direction LR
    d["04 · Delibera<br/>segundo rito"]
  end
  subgraph L4["Câmara dos Deputados"]
    direction LR
    e["06 · Promulga e publica<br/>resolução"]
  end
  a --> b --> c --> d --> e
```

Origem: Câmara. Resolve matéria de competência da própria Casa; em regra não há revisão do Senado nem sanção. **Aprofundar:** [[3 - Materias/Direito Constitucional/22 - projetos de decreto legislativo e resolucao|Resoluções das Casas]] · [[3 - Materias/Direito Constitucional/23 - regimento da camara organizacao e orgaos artigos 1 a 24|Organização da Câmara]].

## PRS → resolução do Senado

```mermaid
flowchart LR
  subgraph L0["Autor legitimado no Senado"]
    direction LR
    a["01 · Apresenta PRS"]
  end
  subgraph L1["Mesa / Presidência do Senado"]
    direction LR
    b["02 · Recebe e distribui"]
  end
  subgraph L2["Comissões do Senado"]
    direction LR
    c["03 · Pareceres"]
  end
  subgraph L3["Órgão decisório do Senado"]
    direction LR
    d["04 · Delibera"]
  end
  subgraph L4["Senado Federal"]
    direction LR
    e["06 · Promulga e publica<br/>resolução"]
  end
  a --> b --> c --> d --> e
```

Origem: Senado, em sua competência própria. Não passa pela Câmara como revisora nem depende de sanção. **Aprofundar:** [[3 - Materias/Direito Constitucional/22 - projetos de decreto legislativo e resolucao|Resoluções e competências privativas]].

## PRN → resolução do Congresso

```mermaid
flowchart LR
  subgraph L0["Proponente legitimado"]
    direction LR
    a["01 · Apresenta PRN"]
  end
  subgraph L1["Presidência / Mesa do Congresso"]
    direction LR
    b["02 · Recebe e encaminha"]
  end
  subgraph L2["Colegiados do Congresso"]
    direction LR
    c["03 · Parecer, quando previsto"]
  end
  subgraph L3["Câmara e Senado em sessão conjunta"]
    direction LR
    d["04–05 · Deliberam<br/>conforme Regimento Comum"]
  end
  subgraph L4["Congresso Nacional"]
    direction LR
    e["06 · Promulga e publica<br/>resolução"]
  end
  a --> b --> c --> d --> e
```

Origem: Congresso Nacional. Exemplo: delegação legislativa. Sessões conjuntas seguem regras de votação próprias, com contagem por Casa quando aplicável. **Aprofundar:** [[3 - Materias/Direito Constitucional/31 - regimento comum organizacao comissoes mistas e votacao artigos 4 a 52|Sessões conjuntas e votação]] · [[3 - Materias/Direito Constitucional/22 - projetos de decreto legislativo e resolucao|PRN e resoluções]].

## PLN → lei orçamentária

```mermaid
flowchart LR
  subgraph L0["Presidente da República"]
    direction LR
    a["01 · Encaminha projeto<br/>orçamentário"]
  end
  subgraph L1["Presidência do Congresso"]
    direction LR
    b["02 · Recebe PLN"]
  end
  subgraph L2["CMO: comissão mista"]
    direction LR
    c["03 · Recebe emendas;<br/>relatoria e parecer"]
  end
  subgraph L3["Congresso Nacional"]
    direction LR
    d["04–05 · Deliberação<br/>em sessão conjunta"]
  end
  subgraph L4["Presidente da República"]
    direction LR
    e["06 · Sanção ou veto"]
  end
  subgraph L5["Autoridade competente"]
    direction LR
    f["06 · Promulgação<br/>e publicação"]
  end
  a --> b --> c --> d --> e --> f
```

Origem: Presidente apresenta PPA, LDO, LOA ou projeto de crédito adicional quando cabível. Prazos e emendas seguem CF, ADCT e regras orçamentárias próprias. **Aprofundar:** [[3 - Materias/Direito Constitucional/36 - especies legislativas comparacao por iniciativa quorum e efeito|Comparação de espécies]] · [[3 - Materias/Direito Constitucional/31 - regimento comum organizacao comissoes mistas e votacao artigos 4 a 52|Congresso e votação conjunta]].

## Delegação → lei delegada

```mermaid
flowchart LR
  subgraph L0["Presidente da República"]
    direction LR
    a["01 · Solicita delegação"]
    d["04–05 · Elabora<br/>lei delegada"]
  end
  subgraph L1["Congresso Nacional"]
    direction LR
    b["02–03 · Examina pedido"]
    c["04 · Autoriza por resolução<br/>com limites"]
    e["05 · Aprecia, se previsto<br/>votação única, sem emendas"]
  end
  subgraph L2["Autoridade competente"]
    direction LR
    f["06 · Promulgação<br/>e publicação"]
  end
  a --> b --> c --> d
  d -->|apreciação prevista| e --> f
  d -->|sem apreciação| f
```

Origem: Presidente solicita delegação ao Congresso; resolução delimita o objeto. Se houver apreciação parlamentar prevista, ocorre votação única, sem emendas. **Aprofundar:** [[3 - Materias/Direito Constitucional/20 - lei delegada e delegacao legislativa|Delegação legislativa, limites e procedimento]].

## Fontes normativas

[Constituição Federal, arts. 47–69 e 165–166](https://www2.camara.leg.br/atividade-legislativa/legislacao/constituicao1988) · [Regimento Interno da Câmara](https://www2.camara.leg.br/atividade-legislativa/legislacao/regimento-interno-da-camara-dos-deputados/regimentointerno.html) · [Regimento Comum do Congresso](https://www.congressonacional.leg.br/legislacao-e-publicacoes/regimento-do-congresso-nacional) · [Resolução nº 1/2002-CN](https://www2.camara.leg.br/legin/fed/rescon/2002/resolucao-1-8-maio-2002-497942-normaatualizada-pl.html).

Os diagramas apresentam modelos de rotas e não substituem o procedimento específico de cada matéria. Validação visual de faixas, posicionamento, contraste e zoom será registrada após inspeção real da página.
