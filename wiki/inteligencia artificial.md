---
title: "Inteligência artificial"
type: "conceito"
status: "ativo"
created: 2026-07-14
updated: 2026-07-16
---

# Inteligência artificial

**Inteligência Artificial (IA)** é um campo amplo da ciência da computação dedicado ao desenvolvimento de sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana, como reconhecer padrões, compreender linguagem, tomar decisões, planejar caminhos ou gerar conteúdos.

---

## Hierarquia de Conceitos e Subconjuntos

A Inteligência Artificial é composta por diferentes subáreas e abordagens. É um erro comum da banca (FGV) tratar esses níveis de abstração como equivalentes:

```text
Inteligência Artificial (IA)
  └── Machine Learning (ML / Aprendizado de Máquina)
        └── IA Generativa
              └── Large Language Models (LLMs) ➔ Aplicações (ex: ChatGPT)
```

1. **Inteligência Artificial (IA)**: O campo geral. Pode incluir desde sistemas clássicos baseados em regras rígidas programadas por humanos (sistemas especialistas) até modelos estatísticos avançados.
2. **Machine Learning (ML / Aprendizado de Máquina)**: Técnica em que o sistema aprende regras e padrões a partir de grandes volumes de dados, sem ser explicitamente programado para cada tarefa.
3. **IA Generativa**: Subárea de ML focada na criação de novos conteúdos originais (textos, imagens, áudios, vídeos, códigos), em vez de apenas classificar ou tomar decisões de sim/não.
4. **Large Language Models (LLMs)**: Modelos de IA Generativa treinados em volumes gigantescos de dados textuais para processar e gerar linguagem natural.
5. **Aplicações (ex: ChatGPT)**: Softwares ou serviços construídos sobre um LLM para interagir com usuários finais.

---

## Funcionamento dos LLMs e Limitações

Os Large Language Models operam sob uma lógica essencialmente probabilística:

* **Previsão de Próximo Token**: O modelo não consulta uma enciclopédia interna ou banco de dados estruturado ao gerar texto. Sua função básica é prever de forma iterativa o próximo token mais provável com base na sequência de contexto já produzida.
* **Token vs. Palavra**: Um token não é sinônimo de palavra; ele pode ser uma palavra inteira, parte de uma palavra (sílaba, subpalavra), um número ou um sinal de pontuação.
* **Mecanismo de Attention e a Arquitetura Transformer (2017)**: Em vez de processar o texto palavra por palavra sequencialmente (como em arquiteturas antigas), o Transformer lê todo o contexto simultaneamente. O mecanismo de *attention* (atenção) atribui pesos matemáticos de relevância e importância relativa a diferentes partes do texto ao gerar o próximo token, permitindo manter a coerência em contextos longos.
* **Alucinação**: Decorre da própria otimização matemática do treinamento (prever a continuação estatisticamente mais plausível). O modelo não possui "intenção de enganar" (antropomorfismo que a banca FGV costuma explorar como pegadinha), mas apenas gera caminhos estatísticos fluentes que podem não corresponder à verdade factual.

---

## Inteligência Artificial na Comunicação Pública

Na comunicação sobre sistemas baseados em inteligência artificial, o foco deve permanecer no interesse público e nos efeitos para o cidadão, e não na tecnologia em si. A comunicação deve explicar quais problemas o sistema busca resolver, quais benefícios produz, quais são seus limites e como a instituição garante transparência, supervisão e responsabilização.

A integração de IA generativa em processos de comunicação institucional e no setor público segue diretrizes rígidas de integridade e governança:

* **IA como Ferramenta de Apoio**: A IA é adequada para ideação, elaboração de rascunhos, síntese de documentos técnicos extensos, adaptação de linguagem (como para Linguagem Simples ou redes sociais) e revisão ortográfica.
* **Responsabilidade Institucional Indivisível**: O uso de IA **não transfere** e **não elimina** a responsabilidade civil, administrativa ou política do órgão público ou de seus gestores sobre as informações publicadas. A IA não substitui a responsabilidade pública, e a instituição permanece responsável pelas decisões e deve garantir mecanismos de supervisão, transparência e controle compatíveis com o serviço prestado.
* **Validação Humana Mandatória (*Human-in-the-Loop*)**: Todo conteúdo gerado com auxílio de IA deve passar por verificação de fatos, conferência de normas oficiais e curadoria por profissionais de comunicação antes da veiculação pública. Não se deve assumir ou afirmar em discursos públicos que existe revisão humana compulsória/obrigatória para toda e qualquer decisão pontual, exceto se essa regra processual for de fato normatizada pelo sistema ou órgão.

### Como a FGV cobra

A banca tende a contextualizar a IA como parte de um serviço público, explorando princípios de comunicação pública, transparência e responsabilidade institucional. A pegadinha consiste em atribuir decisões à IA ou apresentar a tecnologia como substituta da responsabilidade da organização. Outro erro comum cobrado é o excesso de informação técnica (como focar na arquitetura matemática do modelo) em detrimento da comunicação orientada ao impacto real e utilidade pública para os cidadãos.

### Tensões e pegadinhas

O erro mais comum é personificar a IA ("a IA decidiu") ou concentrar a comunicação na tecnologia em vez dos impactos para o cidadão. A responsabilidade pelas decisões e pelos serviços permanece institucional, ainda que ferramentas de IA sejam utilizadas como apoio aos processos.

---

## Deepfakes e Desinformação

* **Deepfake (Tecnologia)**: Técnica de síntese de mídia (vídeo, áudio ou imagem) baseada em IA generativa de alta fidelidade. Por si só, a tecnologia é neutra (possui usos legítimos como acessibilidade, dublagem e efeitos cinematográficos) e não constitui necessariamente crime.
* **Desinformação (Estratégia)**: Estratégia comunicacional deliberada de disseminar informações falsas ou manipuladas para induzir a erro ou causar danos reputacionais e sociais.
* **Gestão de Crise de Desinformação**: Diante de falsificações (ex: áudio/vídeo deepfake oficial simulado), a resposta institucional da equipe de comunicação deve ser rápida, proporcional ao risco e orientada ao interesse público. O desmentido deve remeter aos canais oficiais, monitorar a propagação e, crucialmente, instruir o cidadão sobre como verificar a informação (aumentando sua capacidade de ação autônoma).

---

## Ética e Governança da IA

Os sistemas de IA aplicados no setor público devem estar em estrito alinhamento com os seguintes princípios éticos:

1. **Transparência**: Informar de maneira inteligível e acessível aos usuários quando a IA está sendo utilizada, suas finalidades e limitações. *Não exige necessariamente a divulgação do código-fonte proprietário*.
2. **Supervisão Humana**: Garantir que as decisões de maior impacto (especialmente aquelas que afetam direitos do cidadão) tenham supervisão e intervenção humana final.
3. **Prestação de Contas (Accountability)**: Definição clara de responsabilidades humanas e institucionais por todas as decisões e saídas algorítmicas.
4. **Justiça e Equidade (Fairness)**: Mitigação ativa de vieses algorítmicos nos dados de treinamento para evitar discriminação indevida de grupos sociais.
5. **Privacidade e Proteção de Dados**: Aplicação estrita das normas da **LGPD** (Lei Geral de Proteção de Dados), cuja importância é intensificada à medida que os sistemas processam volumes massivos de dados pessoais.

---
**Fontes Brutas:**
- [[00 ingestão]]
