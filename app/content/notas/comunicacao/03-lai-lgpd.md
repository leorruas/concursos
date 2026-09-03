---
title: "LAI, LGPD e transparência"
type: "conceito"
status: "ativo"
created: 2026-07-06
updated: 2026-08-10
---
# LAI, LGPD e transparência

A Lei de Acesso à Informação (LAI - Lei nº 12.527/2011) e a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) são marcos jurídicos distintos, porém complementares no âmbito da administração pública.

- **LAI (Transparência)**: Tem como princípio a publicidade como regra geral e o sigilo como exceção. Busca assegurar o direito fundamental de acesso a informações públicas custodiadas pelo Estado.
- **LGPD (Privacidade)**: Visa proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural, disciplinando o tratamento de dados pessoais.

Não existe contradição automática entre as duas leis. O equilíbrio na administração pública exige a garantia de transparência institucional nas contas e atos públicos (LAI), ao mesmo tempo em que se salvaguardam os dados pessoais sensíveis e a intimidade dos cidadãos e servidores (LGPD).

---

## Transparência Pública, Participação Social e Prestação de Contas

### 1. Transparência Ativa vs. Transparência Passiva
* **Transparência Ativa**: Divulgação de informações públicas promovida por **iniciativa própria da Administração Pública**, independentemente de qualquer requerimento ou solicitação prévia (ex: Portais da Transparência, dados de licitações, organogramas, cartas de serviços).
* **Transparência Passiva**: Disponibilização de informações promovida **em resposta a um pedido formal de acesso apresentado pelo cidadão** (ex: solicitações via Sistema e-SIC / Fala.BR).
  > [!NOTE]
  > **Heurística de Prova (FGV)**: *Ativa = o órgão se antecipa e publica espontaneamente. Passiva = o cidadão provoca e o órgão responde.* O termo "passiva" não significa inércia do órgão, mas sim que a divulgação foi motivada por um pedido externo.

### 2. Transparência Formal vs. Transparência Efetiva
A mera publicação formal de dados ou relatórios não garante transparência comunicacional efetiva. Para que o cidadão exercite o controle social, as informações disponibilizadas precisam atender a requisitos de usabilidade e comunicação:
1. **Encontráveis**: Por meio de boa arquitetura da informação, SEO orientado a tarefas e usabilidade (UX).
2. **Compreensíveis**: Redigidas sob as diretrizes de **linguagem simples**, eliminando jargões excessivamente técnicos ou burocráticos.
3. **Úteis e Reutilizáveis**: Disponibilizadas em formatos abertos e estruturados (dados abertos).

> [!IMPORTANT]
> **Publicar ≠ Comunicar**: A mera publicação de relatórios incompreensíveis ou PDFs digitalizados sem busca configura cumprimento formal, mas falha na entrega da transparência efetiva e da comunicação pública cidadã.

### 3. Participação Social
Mecanismos institucionais pelos quais cidadãos, movimentos sociais e partes interessadas (*stakeholders*) intervêm ou contribuem para os processos decisórios públicos (consultas públicas, audiências públicas, conselhos paritários e ouvidorias).
* **Participação vs. Divulgação**: Comunicar uma decisão governamental já tomada é apenas divulgação unilateral; a participação social pressupõe a abertura de canais para ouvir e considerar as contribuições antes ou durante o processo decisório.
* **Escopo**: A participação social não transfere necessariamente o poder decisório final ao participante, mas garante o direito de manifestação legítima e consideração das propostas no processo público.

### 4. Prestação de Contas (*Accountability*)
Apresentação, justificativa e demonstração transparente dos atos, recursos aplicados e resultados obtidos pela Administração Pública, sujeitando os gestores à responsabilização e ao escrutínio social.
* **Publicidade Institucional ≠ Prestação de Contas**: Campanhas de publicidade institucional podem destacar aspectos favoráveis para construção de imagem; a prestação de contas (*accountability*) exige clareza sobre metas, indicadores, custos, limitações e eventuais problemas ocorridos, alinhando-se com a postura de transparência em momentos de crise.

## LGPD: Estrutura Geral e Princípios Fundamentais (Lei nº 13.709/2018)

### 1. Tratamento de dados pessoais e categorias
Tratamento é toda operação realizada com dados pessoais (coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, modificação, comunicação, transferência ou difusão). Até a simples **eliminação ou guarda** constitui tratamento.

* **Dado pessoal**: informação relacionada a pessoa natural identificada ou identificável (ex: nome, CPF, endereço, e-mail, telefone, IP).
  - *Atenção em prova*: dado pessoal **não precisa ser secreto ou confidencial**. Informações públicas continuam sendo dados pessoais.
* **"Dado pessoal comum"**: expressão didática para qualquer dado pessoal que não se enquadre no rol legal de dado pessoal sensível.
* **Dado pessoal sensível**: categoria legal taxativa e específica:
  1. Origem racial ou étnica;
  2. Convicção religiosa;
  3. Opinião política;
  4. Filiação a sindicato ou a organização de caráter religioso, filosófico ou político;
  5. Dado referente à saúde ou à vida sexual;
  6. Dado genético ou biométrico, quando vinculado a uma pessoa natural.
  > [!WARNING]
  > **Fronteira FGV (Privado/Confidencial ≠ Sensível)**: Salário, patrimônio, CPF e endereço podem ser dados altamente privados e confidenciais, mas **não são legalmente dados sensíveis**. A sensibilidade decorre da natureza do dado prevista na lei, e não do potencial de causar prejuízo ou constrangimento.
  > 
  > **A sensibilidade não contamina a base**: a presença de um dado sensível (ex: religião) em um cadastro não transforma os demais dados daquele titular (ex: CPF e endereço) em dados sensíveis. Cada campo mantém sua natureza própria.
* **Dado anonimizado**: dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião do seu tratamento. Em regra, **não é considerado dado pessoal** para os fins da LGPD.
  - *Pegadinha*: remover identificadores diretos (ex: nome) não garante anonimização se outros dados combinados permitirem identificar a pessoa (ex: único servidor do cargo X na cidade Y).
* **Dado pseudonimizado**: processo pelo qual o dado perde a possibilidade de associação direta ou indireta a um indivíduo, senão pelo uso de informação adicional mantida separadamente pelo controlador em ambiente seguro. **Continua sendo dado pessoal e sujeito à LGPD**.
  - *Duas perguntas independentes para a prova*:
    1. *O que o dado revela?* (determina se é comum ou sensível);
    2. *É possível identificar o titular?* (determina se é direto, pseudonimizado ou anonimizado).
    - Um dado pode ser simultaneamente **sensível e pseudonimizado** (ex: `P047 -> HIV positivo`). A pseudonimização não elimina a sensibilidade da informação. Destruir a chave de ligação não assegura automaticamente a anonimização se a reidentificação ainda for tecnicamente viável.

### 2. Bases legais e o regime do consentimento
* **Consentimento não é requisito universal**: a LGPD prevê diferentes bases legais autônomas (art. 7º para dados comuns e art. 11 para dados sensíveis). Não haver consentimento não torna o tratamento ilegal se houver outra base aplicável.
* **Regime de bases legais para dados comuns (art. 7º)**: consentimento, obrigação legal/regulatória, execução de políticas públicas pelo Poder Público, estudos por órgão de pesquisa, execução de contrato/procedimentos preliminares, exercício regular de direitos, proteção da vida/incolumidade física, tutela da saúde, **legítimo interesse** e proteção do crédito.
* **Regime restritivo para dados sensíveis (art. 11)**:
  - Consentimento específico e destacado para finalidades específicas; ou
  - Hipóteses sem consentimento: obrigação legal/regulatória, políticas públicas, estudos por órgão de pesquisa, exercício regular de direitos, proteção da vida e tutela da saúde.
  > [!IMPORTANT]
  > **Pegadinha clássica (Legítimo Interesse)**: O **legítimo interesse** é base legal apenas para dados pessoais comuns (art. 7º, IX). Ele **NÃO constitui base legal do art. 11 para tratamento de dados pessoais sensíveis**.
* **Regras estritas do consentimento**:
  - Manifestação livre, informada e inequívoca para finalidade determinada.
  - **Nulidade de autorizações genéricas**: termos que autorizam o uso de dados para "quaisquer finalidades convenientes" são nulos de pleno direito.
  - **Cláusula destacada**: quando por escrito, o consentimento deve constar de cláusula destacada das demais cláusulas contratuais.
  - **Ônus da prova**: cabe ao **controlador** comprovar que o consentimento foi obtido regularmente.
  - **Revogação**: o titular pode revogar a qualquer momento mediante manifestação expressa e gratuita, mantida a licitude dos tratamentos realizados sob o consentimento anterior.

### 3. Tratamento de dados pelo Poder Público e Empresas Estatais
* **Fundamento e finalidade pública**: o tratamento pelo Poder Público não decorre de mera conveniência administrativa nem transforma os dados em propriedade estatal livre. Deve atender à sua **finalidade pública, à persecução do interesse público e à execução de competências legais/atribuições do serviço público**.
* **Princípios aplicáveis ao Estado**: o Poder Público está plenamente sujeito aos princípios da LGPD (finalidade, adequação, necessidade/minimização, transparência e segurança), devendo informar as hipóteses de tratamento e as previsões legais.
* **Uso compartilhado de dados**:
  - Entre órgãos públicos: restrito a finalidades específicas de execução de políticas públicas e atribuições legais.
  - Transferência para entidades privadas: é restritiva, mas admitida em hipóteses expressas em lei (ex: execução descentralizada de serviço público sob concessão/permissão, dados publicamente acessíveis observada a finalidade, previsão legal expressa).
* **Empresas públicas e sociedades de economia mista (Dataprev, BB, CEF, etc.)**:
  - Em regime de concorrência / atividade econômica: submetem-se ao regime de **pessoas jurídicas de direito privado**.
  - Operacionalizando políticas públicas: submetem-se ao regime aplicável ao **Poder Público**.

### 4. Rol dos princípios fundamentais (art. 6º)
1. **Finalidade**: realização do tratamento para propósitos legítimos, específicos, explícitos e informados ao titular.
2. **Adequação**: compatibilidade do tratamento com as finalidades informadas.
3. **Necessidade (minimização)**: limitação do tratamento ao mínimo necessário para a realização de suas finalidades (abrangendo dados pertinentes e não excessivos).
4. **Livre acesso**: garantia de consulta facilitada e gratuita sobre a forma, duração e integralidade de seus dados.
5. **Qualidade dos dados**: garantia de exatidão, clareza, relevância e atualização dos dados.
6. **Transparência**: informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os respectivos agentes.
7. **Segurança**: utilização de medidas técnicas e administrativas aptas a proteger os dados de acessos não autorizados e situações acidentais ou ilícitas (ex: criptografia, controle de acessos).
8. **Prevenção**: adoção de medidas antecipadas para prevenir a ocorrência de danos em virtude do tratamento de dados.
9. **Não discriminação**: impossibilidade de realização do tratamento para fins discriminatórios ilícitos ou abusivos.
10. **Responsabilização e prestação de contas**: demonstração, pelo agente, da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas.

> [!NOTE]
> **Heurística de diferenciação rápida**:
> - *Finalidade* = qual é o propósito?
> - *Adequação* = o tratamento combina com o propósito?
> - *Necessidade* = estou usando apenas o estritamente necessário?
> - *Segurança* = mecanismos técnicos e administrativos de proteção.
> - *Prevenção* = medidas antecipadas para evitar danos.
> - *Prestação de contas* = comprovar com evidências que agiu corretamente.

### 5. Personagens, agentes de tratamento e responsabilidade (arts. 5º, 39 e 42)
* **Titular**: pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.
* **Controlador**: pessoa natural ou jurídica, de direito público ou privado, a quem competem as **decisões** referentes ao tratamento de dados pessoais.
* **Operador**: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais **em nome do controlador** (executa segundo instruções fornecidas).
  - *Mudança funcional*: se o operador desviar das instruções e determinar finalidades comerciais próprias por conta própria, equipara-se ao controlador quanto àquele tratamento.
* **Agentes de tratamento**: gênero que engloba tanto o **controlador** quanto o **operador**.
* **Encarregado (DPO)**: pessoa indicada pelo controlador e operador para atuar como **canal de comunicação** entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).
* **Responsabilidade civil e incidentes**:
  - *Incidente ≠ responsabilidade civil automática*: a ocorrência de vazamento ou incidente exige demonstração de dano, nexo causal e desconformidade com a legislação.
  - Havendo incidente que possa acarretar risco ou dano relevante aos titulares, cabe privativamente ao **controlador** comunicar à ANPD e aos titulares.

### 6. Sanções administrativas e a ANPD (art. 52)
A aplicação de sanções administrativas compete à ANPD mediante processo administrativo que assegure o contraditório e a ampla defesa.
* **Rol de sanções administrativas**:
  1. **Advertência**, com indicação de prazo para adoção de medidas corretivas;
  2. **Multa simples**, de até 2% do faturamento da empresa/grupo (limitada a R$ 50.000.000,00 por infração);
  3. **Multa diária**;
  4. **Publicização da infração** após apurada e confirmada;
  5. **Bloqueio dos dados pessoais** a que se refere a infração;
  6. **Eliminação dos dados pessoais** a que se refere a infração;
  7. Suspensão parcial do funcionamento do banco de dados ou da atividade de tratamento;
  8. Proibição parcial ou total do exercício de atividades relacionadas a tratamento de dados.
  > [!TIP]
  > **Escadinha mental de sanções**: Advertir -> Multar -> Publicizar -> Restringir/Eliminar o dado/tratamento.
  > 
  > **Atenção em prova (Dosimetria)**: A reincidência é critério para agravar a sanção na dosimetria, mas **não acarreta automaticamente a aplicação da multa máxima**.

### 7. Direitos do titular (art. 18)
O titular dos dados pessoais tem direito a obter do controlador, em relação aos dados por ele tratados, a qualquer momento e mediante requisição:
* Confirmação da existência de tratamento e acesso aos dados;
* Correção de dados incompletos, inexatos ou desatualizados;
* **Anonimização, bloqueio ou eliminação** de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;
* Portabilidade dos dados a outro fornecedor de serviço ou produto;
* Eliminação dos dados pessoais tratados com o consentimento do titular (ressalvadas hipóteses legais de guarda);
* Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;
* Revogação do consentimento.

### 8. Decisões automatizadas e inteligência artificial (art. 20)
* O titular dos dados tem direito a **solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado** de dados pessoais que afetem seus interesses, incluídas as decisões destinadas a definir o seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade.
* **Atenção em prova**: a LGPD **não proíbe** decisões exclusivamente automatizadas e **não exige obrigatoriamente que a revisão seja feita por pessoa humana** (a exigência de revisão humana foi vetada na tramitação da lei).
* O controlador deve fornecer, sempre que solicitadas, informações claras e adequadas a respeito dos **critérios e dos procedimentos** utilizados para a decisão automatizada, observados os segredos comercial e industrial.
* O uso de algoritmos matemáticos ou IA **não afasta** os princípios da LGPD, especialmente o princípio da não discriminação.

---

## LGPD em Pesquisas de Comunicação e UX

Ao realizar pesquisas de imagem, satisfação ou testes de usabilidade:
1. **Fase de Coleta/Análise**: Utilizar pseudonimização (códigos como P01, P02), mantendo a chave de identificação isolada e com acesso restrito.
2. **Fase de Relatório/Publicação**: Priorizar dados **agregados ou anonimizados**.
   * *Atenção*: Agregação não garante anonimato se o recorte de público for muito pequeno e permitir a reidentificação indireta.
3. **Citações Qualitativas**: Avaliar se a frase ou os dados contextuais (cargo + unidade + características) identificam o participante. Parafrasear ou remover detalhes contextuais sem alterar o sentido.
4. **Descarte**: Eliminar identificadores e gravações assim que a finalidade da pesquisa for cumprida (não reter dados "por conveniência").

---

## Protocolos de Comunicação de Incidentes de Segurança (Resolução CD/ANPD nº 15/2024)

### 1. Condições de Notificação Obrigatória
Um vazamento ou acesso indevido deve ser comunicado à ANPD e aos titulares quando preencher cumulativamente três requisitos:
1. O incidente está **confirmado**.
2. Envolve **dados pessoais** sujeitos à LGPD.
3. Pode acarretar **risco ou dano relevante** aos titulares.

> [!WARNING]
> **Vulnerabilidade ≠ Incidente**: Uma fragilidade no sistema sem evidência de vazamento é uma vulnerabilidade, e não um incidente reportável.

### 2. Papéis e Responsabilidade de Notificação
* **Controlador**: Responsável **formal e legal** por comunicar à ANPD e aos titulares.
* **Operador**: Ao identificar o incidente, deve apenas **informar o controlador sem demora injustificada**, fornecendo as informações necessárias.

### 3. Prazos e Procedimento
* **Prazo Geral**: **3 dias úteis** a contar da ciência do incidente de risco relevante.
* **Comunicação Preliminar**: Se a investigação estiver em andamento, o controlador envia uma notificação preliminar à ANPD e pode complementá-la justificadamente em até **20 dias úteis**.
* **Comunicação aos Titulares**: Deve ser individual e clara, redigida em **linguagem simples**, explicando o ocorrido, categorias de dados afetados, riscos e medidas de mitigação adotadas.
* **Obrigação de Registro**: O controlador é obrigado a **manter registro de TODOS os incidentes por no mínimo 5 anos**, inclusive daqueles que considerou não ter risco relevante para notificar à ANPD.

---

## Como a banca cobra

A FGV apresenta casos envolvendo pedidos de acesso à informação contendo dados que possam identificar pessoas ou expor salários. O candidato deve julgar à luz da ponderação de interesses: a publicidade das contas públicas e das remunerações de servidores (interesse geral) vs. a proteção de dados privados e sensíveis (LGPD).

Outro ponto recente é a cobrança de incidentes de segurança combinando **gestão de crise + LGPD + linguagem simples**: a banca testa se o candidato sabe que a gestão de crise não substitui o protocolo formal de notificação em 3 dias úteis e que a mensagem ao titular deve ser clara e orientada a ações de proteção do cidadão.

---
**Fontes Brutas:**
- [[00 inbox/05-07-2026]]
- [[00 ingestão]]

