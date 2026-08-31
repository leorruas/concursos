---
title: "Linguagem simples e acessibilidade digital"
type: "conceito"
status: "ativo"
created: 2026-07-10
updated: 2026-07-28
---
# Linguagem simples e acessibilidade digital

Linguagem simples e acessibilidade digital são conceitos complementares, mas distintos, orientados à garantia do direito à informação e inclusão em ambientes públicos e digitais:
- **Linguagem simples**: Busca tornar a informação compreensível, direta e acionável.
- **Acessibilidade digital**: Busca assegurar que os conteúdos e interfaces possam ser percebidos, operados, compreendidos e utilizados de forma autônoma por pessoas com deficiência ou que utilizam tecnologias assistivas.

---

## Linguagem simples

Linguagem simples é aquela que reduz a distância entre a informação e a capacidade de ação do cidadão. Longe de ser apenas uma simplificação de termos textuais, ela atua como design de informação para atenuar o esforço cognitivo exigido e viabilizar o exercício efetivo de direitos e da cidadania.

### As quatro dimensões da Linguagem Simples

Para ser verdadeiramente efetiva e acessível, a simplicidade deve se desdobrar em quatro dimensões fundamentais:

1. **Linguística**: Escolha de vocabulário e construções sintáticas claras. Uso de frases na ordem direta e verbos de ação imediata (ex: *"Anexe os documentos"* em vez de *"O interessado deverá proceder com a juntada"*).
2. **Estrutural**: Organização lógica das informações. Emprego de listas, tópicos de verificação e cronogramas passo a passo em substituição a blocos corridos de texto.
3. **Visual**: Recursos gráficos que facilitam a leitura (tipografia legível, espaçamento, alto contraste, hierarquia visual).
4. **Contextual**: Disponibilização de todas as informações necessárias na mesma página para que o cidadão decida e aja sem buscar fontes externas complexas.

### Linguagem Simples vs. Linguagem Coloquial

A principal distinção teórica cobrada em concursos é que **simplificar não significa empobrecer ou informalizar** a ponto de perder a credibilidade técnica:
- **Linguagem Coloquial**: Informal, descontraída e típica do uso diário (ex: estilo WhatsApp). Foge à formalidade exigida pelos órgãos oficiais.
- **Linguagem Simples**: Preserva a precisão conceitual e a formalidade necessárias ao documento oficial, mas elimina jargões desnecessários, ambiguidades, burocracias linguísticas e redundâncias. Explica termos técnicos inevitáveis em sua primeira ocorrência (ex: *"O requerimento foi indeferido (ou seja, foi negado) porque..."*).

---

## Acessibilidade digital

A acessibilidade digital não é um recurso estético ou opcional a ser adicionado ao final (como um botão isolado); ela deve estar integrada ao código, design, conteúdo, processos de publicação e multimídia.

### Os Princípios do WCAG (POUR)

As Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2) organizam a acessibilidade sob quatro princípios fundamentais:

1. **Perceptível (Perceivable)**: A informação e os componentes da interface devem ser apresentados em formas que possam ser percebidos pelos sentidos.
   - *Ações*: Texto alternativo para imagens, legendas e transcrição para arquivos de áudio/vídeo, contraste de cor adequado (sem depender exclusivamente da cor para transmitir informação).
2. **Operável (Operable)**: Os componentes da interface e a navegação devem ser operáveis por diferentes meios.
   - *Ações*: Navegação completa por teclado, foco visível, tempo suficiente para leitura/tarefas, prevenção de convulsões (sem flashes visuais rápidos).
3. **Compreensível (Understandable)**: A informação e a operação da interface devem ser fáceis de entender.
   - *Ações*: Comportamento previsível de páginas, instruções de entrada de dados claras, identificação e explicação de erros de formulário em texto.
4. **Robusto (Robust)**: O conteúdo deve ser robusto o suficiente para ser interpretado de forma confiável por diferentes navegadores, dispositivos e tecnologias assistivas (leitores de tela).
   - *Ações*: Código semântico válido, nomes e funções identificáveis de componentes personalizados.

### Modelo eMAG (Governo Eletrônico)

No Brasil, o **eMAG (Modelo de Acessibilidade em Governo Eletrônico)** padroniza as diretrizes de acessibilidade para sítios e portais públicos do Governo Federal, atuando em conformidade com as diretrizes internacionais da WCAG.

---

## Equivalência informacional para imagens (NBR 17225)

De acordo com as boas práticas de acessibilidade e normas técnicas (como a ABNT NBR 17225), as imagens são classificadas pela sua função contextual, definindo o tipo de equivalência textual necessária:

| Tipo de Imagem | Função no Contexto | Tratamento de Acessibilidade |
| :--- | :--- | :--- |
| **Decorativa** | Apenas estética, ornamental ou repetição de texto adjacente | Deve ser ignorada por leitores de tela usando atributo alternativo vazio (`alt=""`). Não remover o atributo `alt`, pois sem ele o buscador/leitor pode ler o nome do arquivo. |
| **Informativa Simples** | Transmite um conceito ou informação curta não descrita no texto | Texto alternativo curto e direto focado na mensagem (evitar "imagem de" ou "foto de" se o leitor já anunciar como elemento de imagem). |
| **Funcional** | Realiza uma ação ou serve de link | O texto alternativo deve descrever a **ação ou destino** (ex: `alt="Pesquisar"` para ícone de lupa; `alt="Próxima página"` para ícone de seta). |
| **Complexa** | Gráficos, organogramas, infográficos, tabelas ou mapas interativos | Exige identificação curta no `alt` e **descrição longa** detalhada no texto adjacente ou em página anexa (tabela de dados ou texto estruturado que traduza as tendências e dados do gráfico). |

> [!IMPORTANT]
> **Heurística de Imagens**: O texto alternativo deve refletir a **função comunicacional da imagem** no contexto, e não apenas descrever a imagem fisicamente. A descrição excessiva de detalhes visuais irrelevantes gera poluição informacional e dificulta o uso por tecnologias assistivas.

---
