---
articleId: art-a61c9e740b35d2f8
articleAliases: ["3 - Materias/Comunicacao/77 - usabilidade metodos tecnicas e avaliacao.md"]
title: "Usabilidade: métodos, técnicas e avaliação"
type: "conceito"
status: "ativo"
created: 2026-11-06
updated: 2026-11-06
---

# Usabilidade: métodos, técnicas e avaliação

## Núcleo do conceito

**Situação concreta:** uma pessoa chega ao portal da Câmara para consultar o resultado de uma votação. O portal contém os dados, o texto está correto e a página tem boa apresentação visual. Entretanto, a pessoa não encontra o resultado, demora a distinguir a votação em comissão da votação em Plenário e abandona a tarefa. **Qual aspecto da qualidade deve ser investigado e como produzir evidência?**

**Usabilidade**, na **ISO 9241-11:2018**, é a medida em que um sistema, produto ou serviço pode ser utilizado por **usuários especificados** para alcançar **objetivos especificados** com **eficácia, eficiência e satisfação** em um **contexto de uso especificado**. A definição não equivale a “ser intuitivo”, “ter poucos cliques” ou “ser visualmente agradável”. Os objetivos e o contexto precisam ser declarados para que se interpretem os resultados.

**Eficácia (effectiveness)**: exatidão e completude com que as pessoas alcançam objetivos. **Eficiência (efficiency)**: recursos utilizados em relação aos resultados obtidos, como tempo, esforço e custos. **Satisfação (satisfaction)**: em que medida respostas físicas, cognitivas e emocionais decorrentes do uso atendem às necessidades e expectativas. **Contexto de uso**: combinação de pessoas, objetivos, tarefas, recursos e ambiente técnico, físico, social, cultural e organizacional. A ordem conceitual é relevante: um tempo pequeno de conclusão é pouco informativo se a tarefa não foi concluída corretamente.

**Limite de escopo:** a ISO fornece definição e quadro de avaliação, mas não obriga que todo produto tenha um único valor de sucesso, um número fixo de participantes ou uma metodologia universal de coleta. O método deve ser definido conforme objetivo da avaliação.

Esta nota é um aprofundamento de métodos de usabilidade para o edital da Câmara. [[3 - Materias/Comunicacao/76 - manual de linguagem simples patricia roedel planejamento desenvolvimento e avaliacao|Patricia Roedel]] aborda especificamente a avaliação de textos de linguagem simples; [[3 - Materias/Comunicacao/10 - linguagem simples|Linguagem simples e acessibilidade]] trata de fundamentos gerais e normas de acessibilidade.

## Estrutura interna da definição ISO: distinguir as dimensões

| Elemento | Critério | Exemplo de medida possível | Erro de classificação |
| :--- | :--- | :--- | :--- |
| **Usuários especificados** | Quem executa a tarefa, com quais conhecimentos e necessidades | Público pouco familiarizado com tramitação legislativa | Tratar servidores experientes como representantes de todo cidadão |
| **Objetivos especificados** | Qual resultado realmente importa | Identificar o resultado correto da votação | Medir visualizações sem verificar se o objetivo foi atingido |
| **Contexto de uso** | Em quais circunstâncias se utiliza o serviço | Celular, conexão móvel, leitor de tela, pressão de tempo | Generalizar avaliação de computador a todo contexto |
| **Eficácia** | Exatidão e completude | Concluir corretamente consulta ao resultado | Confundir satisfação declarada com sucesso |
| **Eficiência** | Recursos em relação ao resultado | Tempo e esforço para obter resposta correta | Tomar menor duração como melhor quando a resposta está errada |
| **Satisfação** | Respostas e expectativas das pessoas após uso | Escala de satisfação acompanhada de relato | Presumir satisfação por ausência de reclamação |

**A mesma interface pode ter diferentes níveis de usabilidade conforme o contexto.** Um filtro detalhado pode funcionar com pesquisadores habituados à nomenclatura legislativa e dificultar a tarefa de pessoas sem conhecimento prévio. A propriedade deve ser examinada como resultado da interação entre serviço e contexto, e não como atributo isolado do layout.

### Usabilidade, acessibilidade, experiência do usuário e linguagem simples

**Acessibilidade** examina barreiras de acesso e uso, inclusive para pessoas com deficiência e usuários de tecnologias assistivas. **Experiência do usuário (UX, user experience)** abrange percepções e respostas relacionadas ao uso e também à expectativa de uso; pode incluir aspectos além da tarefa avaliada. **Linguagem simples** procura tornar informação encontrável, compreensível e utilizável. **Usabilidade** enfatiza atingir objetivos com eficácia, eficiência e satisfação em contexto.

As dimensões se relacionam, mas não se substituem. Uma página de linguagem simples pode conter botão inacessível por teclado. Uma interface tecnicamente acessível pode exigir passos confusos. Uma identidade visual admirada pelo público pode coexistir com baixa eficácia na conclusão de tarefas.

## Método, técnica, instrumento e indicador: categorias distintas

**Método** é a abordagem organizada para investigar o problema; **técnica** é um procedimento utilizado na coleta ou análise; **instrumento** é um recurso concreto para registrar dados, como roteiro, escala e checklist; **indicador** é uma variável usada para descrever o resultado.

**Exemplo:** avaliação empírica de usabilidade é método; observação com verbalização em voz alta pode ser técnica; roteiro de tarefas e protocolo de registro são instrumentos; taxa de sucesso e tempo por tarefa são indicadores. Um método pode usar vários instrumentos e combinar evidências quantitativas e qualitativas.

| Estratégia | Fonte principal de evidência | Exemplo | Limite |
| :--- | :--- | :--- | :--- |
| **Teste de usabilidade com participantes** | Comportamento observado em tarefas | Encontrar resultado de votação | Requer recrutamento compatível e tarefas realistas |
| **Avaliação heurística** | Julgamento de especialistas a partir de princípios | Detectar mensagem de erro sem orientação | Problema identificado exige validação de impacto concreto |
| **Inspeção por checklist** | Comparação com critérios definidos | Conferir nomes de links e consistência | Cumprir checklist não comprova sucesso do cidadão |
| **Entrevista ou questionário** | Relato, expectativa e percepção | Identificar frustração ou satisfação | Declarar facilidade não prova que a tarefa foi concluída |
| **Análise de dados de uso** | Registros de comportamento agregado | Saídas, eventos, busca sem resultado | Cliques não explicam intenção nem causalidade isoladamente |
| **Experimento comparativo A/B** | Resultados sob variantes e desenho controlado | Comparar duas organizações do menu | Exige métricas, alocação e controle de fatores relevantes |

**Fronteira:** a **avaliação heurística** não é o mesmo que **teste com usuários**. A primeira depende de análise especializada; a segunda observa participantes representativos dos perfis relevantes executando tarefas. Ambas podem apontar problemas e gerar hipóteses para a outra.

## Teste de usabilidade: desenho do estudo e execução

**1. Definir objetivo de pesquisa.** Exemplo: identificar barreiras que impedem pessoas sem familiaridade legislativa de encontrar o resultado nominal de votação. Uma pergunta genérica como “o site é bom?” não estabelece critério de sucesso.

**2. Especificar público e contexto.** Selecionar perfis pertinentes à tarefa, ambiente, dispositivo, tecnologias assistivas, nível de conhecimento e condições de acesso. A quantidade de participantes deve levar em conta diversidade, objetivos e tipo de evidência desejada, sem tratar pequenos testes qualitativos como amostras probabilísticas.

**3. Criar tarefas realistas e critérios de conclusão.** Uma tarefa aberta pode solicitar: “Encontre a relação dos votos individuais de uma votação recente e informe onde consultá-la”. Não indicar o nome exato da opção de menu quando se deseja avaliar sua encontrabilidade. Determinar o que conta como **sucesso**, **sucesso com ajuda**, **falha** ou **desistência**, caso essas categorias sejam usadas.

**4. Preparar ambiente e roteiro.** Definir consentimento informado conforme regras aplicáveis, condições de gravação, cuidado com dados pessoais, ordem das tarefas, instruções de moderação e recursos para observação. No estudo remoto, falhas de conexão também podem afetar resultados.

**5. Observar sem ensinar a resposta.** É possível pedir à pessoa para explicar o que procura ou o que espera de um controle, mas sugerir o caminho correto modifica a condição de avaliação. A técnica de **pensar em voz alta (think aloud)** solicita que a pessoa verbalize pensamentos durante o uso; não deve ser confundida com entrevista retrospectiva.

**6. Registrar, analisar e priorizar problemas.** Coletar conclusão correta, tempo, erros, caminhos, pedidos de ajuda e comentários. Buscar padrões, examinar possíveis causas e separar evidência observada de hipótese do pesquisador. Priorizar por impacto sobre a tarefa, recorrência, público afetado e risco de consequências, sem inventar um “índice ISO” universal.

**7. Revisar e testar novamente.** Alteração de rótulo pode reduzir erro; alteração de arquitetura pode exigir novo teste de encontrabilidade. Resolver um problema de um perfil não significa que todos os públicos estarão contemplados.

### Moderado versus não moderado; remoto versus presencial

**Teste moderado**: facilitador acompanha o participante e pode pedir esclarecimentos sem conduzir a solução. **Não moderado**: pessoa executa tarefas com instruções previamente preparadas, sem intervenção simultânea; depende de roteiro claro e mecanismos de registro. **Remoto** e **presencial** indicam local da participação, formando **outro eixo de classificação**. Assim, um teste remoto pode ser moderado ou não moderado.

**Formativo**: voltado a diagnosticar e corrigir problemas durante desenvolvimento. **Somativo**: busca avaliar desempenho de produto ou versão frente a critérios definidos, muitas vezes perto de decisões de aceite. Esses são recortes de **finalidade e momento**, e não de local ou presença de moderador.

**Qualitativo**: investiga como e por que dificuldades ocorrem, com observações e descrição de padrões. **Quantitativo**: estima medidas como taxa de sucesso e tempo, respeitando desenho amostral e incerteza. Ambos podem coexistir numa mesma pesquisa.

## Indicadores: o que cada número permite afirmar

**Taxa de conclusão correta:** número de tarefas concluídas corretamente dividido pelo número de tentativas observadas, para a unidade de análise definida. Se dez participantes tentaram concluir uma tarefa e sete chegaram ao resultado correto, a taxa observada é **70% naquele teste**; sem amostragem adequada, não deve ser apresentada como proporção de todos os usuários do portal.

**Tempo de tarefa:** duração entre início e conclusão ou abandono, com critério de medição definido. Comparações de tempo exigem considerar tarefas efetivamente concluídas e desistências, para não transformar falhas rápidas em “eficiência”.

**Erros e desvios:** ações que impedem ou atrasam a tarefa. Devem ser definidos por impacto e objetivo, não apenas por número de cliques. Voltar uma página pode representar exploração legítima e não erro.

**Solicitações de ajuda:** permitem identificar dependência do moderador ou de terceiros. Um usuário pode atingir a resposta correta apenas após uma pista; registrar a mesma categoria de sucesso para todos pode ocultar dificuldade.

**Satisfação:** escala ou relato obtido após tarefa ou sessão, por exemplo com pergunta padronizada sobre facilidade percebida. Índices agregados como **System Usability Scale (SUS, Escala de Usabilidade do Sistema)** podem apoiar comparação quando o instrumento é aplicado de maneira correta; sua pontuação **não é porcentagem de tarefas concluídas**.

**Cliques, visualizações e tempo na página:** métricas comportamentais úteis para localizar possíveis problemas, mas ambíguas. Permanecer muito tempo em página pode indicar interesse ou dificuldade; abandonar busca pode indicar que a resposta já foi encontrada ou que o usuário desistiu.

**Pegadinha:** satisfação percebida e eficácia real podem divergir. A pessoa pode declarar que gostou da página e interpretar incorretamente o status de um projeto. A medição deve reunir evidência compatível com o objetivo.

## Inspeção heurística e avaliação cognitiva

A **avaliação heurística**, associada a Jakob Nielsen e Rolf Molich, inspeciona a interface segundo princípios de usabilidade, como visibilidade do estado do sistema, correspondência com linguagem do mundo real, consistência, prevenção e recuperação de erros, reconhecimento em vez de memorização e apoio ao usuário. É **método de inspeção por avaliadores**, não teste com usuários nem norma jurídica.

No portal legislativo, um aviso “nenhum resultado encontrado” sem orientação para alterar filtros pode ser identificado por heurística de recuperação de erros. O avaliador formula a hipótese de que o usuário ficará sem caminho; testes com participantes podem verificar sua ocorrência, gravidade e contexto.

**Percurso cognitivo (cognitive walkthrough)** também é inspeção, mas focaliza a aprendizagem exploratória de uma tarefa passo a passo: o usuário tentaria atingir o efeito correto, perceberia a ação disponível, entenderia sua relação com o objetivo e reconheceria o resultado? Avaliação heurística percorre princípios mais amplos; percurso cognitivo acompanha a sequência de decisões de uma tarefa, especialmente para primeiros usos.

**Inspeção normativa e técnica:** verificar critérios da Web Content Accessibility Guidelines (WCAG, Diretrizes de Acessibilidade para Conteúdo Web) ou de um manual institucional examina conformidade a requisitos; isso não equivale a observar participantes concluindo tarefas. Os resultados são complementares e devem manter sua natureza.

## Leiturabilidade, compreensão e usabilidade: uma fronteira relevante

A leitura de **Patricia Roedel** distingue avaliação de compreensão textual e usabilidade. **Teste de compreensão** pergunta se alguém entendeu o conteúdo; **teste de usabilidade** observa se consegue localizar informação ou realizar tarefa. **Fórmulas de leiturabilidade**, como Flesch, estimam características superficiais do texto, não a interpretação real. **Inspeção** utiliza critérios e experiência profissional.

**Caso:** pessoa encontra o andamento do projeto em poucos segundos, mas afirma que o parecer aprovado tornou o projeto lei. O desempenho de navegação pode ser eficiente, enquanto a compreensão da informação está errada. Investigar apenas tempo para clicar não revela esse problema.

Outro caso: pessoa entende integralmente um aviso que recebeu por e-mail, mas não encontra a mesma informação no portal. A compreensão textual está adequada; a encontrabilidade do sistema permanece problemática.

## Casos progressivos

**Caso A:** três pessoas tentam localizar uma pauta. Duas não acham o menu. O estudo gera evidência qualitativa de problema de encontrabilidade; não permite inferir automaticamente frequência entre todos os cidadãos.

**Caso B:** muda-se só o rótulo do menu, e nova rodada de teste examina a mesma tarefa. A intervenção testa hipótese localizada. Redução do tempo sem conclusão correta não demonstra melhora plena.

**Caso C:** há sucesso de navegação, mas as pessoas interpretam “parecer aprovado” como decisão definitiva sobre a lei. Acrescenta-se teste de compreensão textual. A variável investigada passa de **caminho** para **sentido**.

**Caso D:** uma pessoa utilizando leitor de tela não consegue chegar ao botão de filtrar. O estudo evidencia barreira de acessibilidade e usabilidade em contexto específico; a correção deve ser avaliada com tecnologias assistivas pertinentes.

**Caso de fronteira:** a equipe realiza inspeção heurística e conclui que o portal tem “usabilidade comprovada” por cumprir uma lista de boas práticas. A inferência é indevida: inspeção identifica conformidade e hipóteses de problemas, mas não substitui medição de eficácia, eficiência e satisfação no contexto real.

## Como o Cebraspe cobra: três itens inéditos Certo/Errado

**Item 1.** Na ISO 9241-11, a eficiência pode ser analisada pelos recursos usados em relação aos resultados atingidos, enquanto a eficácia se relaciona à exatidão e completude com que o usuário alcança seus objetivos.

**Gabarito: Certo.** O item distingue resultados alcançados de recursos consumidos. Tempo reduzido com tarefa incorreta não comprova eficácia.

**Item 2.** A avaliação heurística, por exigir que pessoas do público-alvo realizem tarefas sob observação, constitui modalidade de teste de usabilidade moderado, sendo distinta das técnicas de inspeção por especialistas.

**Gabarito: Errado.** A avaliação heurística é inspeção por avaliadores. Teste moderado observa participantes com facilitador; o item desloca a definição de um método para outro.

**Item 3.** O fato de a maioria dos participantes declarar satisfação com o portal não assegura que eles tenham concluído corretamente uma tarefa específica, motivo pelo qual eficácia, eficiência e satisfação devem ser examinadas como dimensões relacionadas, porém distintas.

**Gabarito: Certo.** A declaração de satisfação não substitui dados de desempenho. A norma contempla as três dimensões em contexto de uso especificado.

## Cebraspe real: CNMP 2023, item 78, sala de imprensa online (11/11/2026)

No [caderno oficial CNMP 2023, Cargo 3](https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/814_CNMP_003_01.PDF), o **item 78** recomenda considerar conjuntamente **usabilidade, acessibilidade e arquitetura da informação** ao conceber uma sala de imprensa online. O [gabarito definitivo Cebraspe](https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/GAB_DEFINITIVO_814_CNMP_003_01.PDF) é **Certo**.

**Fronteira conceitual:** as três dimensões não são sinônimas. Arquitetura da informação organiza e rotula conteúdo e navegação; usabilidade examina eficácia, eficiência e satisfação **em contexto de uso definido**; acessibilidade contempla condições de acesso e operação para pessoas com diferentes necessidades. Um portal pode ter navegação organizada e ainda apresentar barreiras de teclado, alternativas textuais, contraste ou compreensão. O item histórico fornece **padrão de cobrança da banca**, sem provar conformidade do site real de um órgão.

## Relações com outros temas e heurísticas

[[3 - Materias/Comunicacao/76 - manual de linguagem simples patricia roedel planejamento desenvolvimento e avaliacao|CAM-CO-030]] apresenta o método de Roedel e seus instrumentos de avaliação de textos; [[3 - Materias/Comunicacao/75 - linguagem simples tecnicas compreensao e limites|CAM-CO-029]] trata de redação clara e precisão; [[3 - Materias/Comunicacao/70 - transparencia publica aplicada a comunicacao institucional|CAM-CO-024]] discute acesso e transparência; [[3 - Materias/Comunicacao/67 - plataformas digitais publicos linguagens e proporcoes|CAM-CO-021]] aborda adaptação a canais.

**Heurísticas:** objetivo atingido corretamente → **eficácia**; recursos por resultado → **eficiência**; resposta percebida pelo usuário → **satisfação**; observação de participante em tarefa → **teste de usabilidade**; avaliação por princípios → **heurística**; sequência de ações imaginada por especialista → **percurso cognitivo**; pergunta sobre sentido do texto → **compreensão**; contagem de sílabas e frases → **leiturabilidade**; verificação por critérios técnicos → **inspeção de conformidade**.

## Fontes e limites

- INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 9241-11:2018**, *Ergonomics of human-system interaction: Part 11, Usability, definitions and concepts*. Definições disponíveis no [glossário do NIST](https://csrc.nist.gov/glossary/term/usability) e [referências terminológicas da ISO](https://www.iso.org/obp/ui/).
- NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY. *Usability Glossary*. https://csrc.nist.gov/glossary/term/usability.
- NIELSEN NORMAN GROUP. *10 Usability Heuristics for User Interface Design*. https://www.nngroup.com/articles/ten-usability-heuristics/.
- NIELSEN NORMAN GROUP. *Usability Testing 101*. https://www.nngroup.com/articles/usability-testing-101/.
- ROEDEL, Patricia. *Manual de Linguagem Simples: como planejar, desenvolver e testar textos que funcionam*. Edições Câmara, 2024. https://www.gov.br/gestao/pt-br/acesso-a-informacao/estrategia-e-governanca/estrutura-de-governanca/Manualdelinguagemsimples_comoplanejardesenvolveretestartextosquefuncionam.pdf.

**Limites:** a definição normativa é da ISO 9241-11; exemplos, classificações de métodos e instrumentos têm origem em literatura de usabilidade e pesquisa, não representam regra administrativa específica da Câmara. A observação de poucos participantes não prova representatividade estatística. Publicar a nota não comprova estudo ou retenção.
