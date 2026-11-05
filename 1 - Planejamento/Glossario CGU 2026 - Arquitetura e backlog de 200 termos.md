---
title: "Glossário CGU 2026: arquitetura e catálogo expansível"
type: "planejamento"
status: "planejado"
created: 2026-11-05
updated: 2026-11-05
---

# Glossário CGU 2026: arquitetura e catálogo expansível

## Finalidade e escopo

Planejamento de glossário para **CGU 2026, cargo 1, Auditoria, Cebraspe (Certo/Errado)**. O recorte prioriza conceitos, siglas, etapas, classificações e fronteiras que podem gerar interpretações erradas. As prioridades A/B/C reproduzem a decisão editorial do [[1 - Planejamento/CGU 2026 - Plano de materias|plano de matérias]], **não indicam frequência comprovada de cobrança**. Escopo conferido com [[2 - Editais/CGU 2026 - Auditoria|edital sintetizado no vault]] e [edital no Cebraspe](https://www.cebraspe.org.br/concursos/cgu_26_affc).

**Estado editorial em 05/11/2026:** **317 termos planejados**, incluindo os 200 iniciais, 115 conceitos adicionais de Orçamento e dois fundamentos de Contabilidade, com **202 definições revisadas** no JSON público: 35 de Auditoria, 140 de Orçamento e 27 de Contabilidade. O glossário deve exibir apenas entradas revisadas e validadas no build. As notas citadas são **candidatas de conexão**: a presença do termo, sua formulação e a seção exata deverão ser verificadas antes de converter o vínculo para `articleId`. Nenhuma marca de domínio ou dados pessoais é criada.

## Onde o glossário aparecerá na wiki

A página será independente das notas de estudo e obedecerá à seleção de concurso. Seu acesso principal aparecerá no menu superior como link textual **glossário**, ao lado de **flashcards** e **índice**. Na home da CGU haverá um segundo acesso ao glossário entre as ferramentas de estudo; em outras provas, a interface poderá filtrar os termos aplicáveis sem duplicar sua definição. Em uma etapa posterior, artigos podem oferecer links discretos para entradas relevantes, sempre com retorno ao artigo.

Rota proposta de índice: `#/glossario?concurso=cgu-2026`. Link permanente de entrada: `#/glossario/<termoId>?concurso=cgu-2026`. Estas rotas **estão implementadas** no parser, no histórico e no roteador existentes. Preservar as rotas amigáveis dos artigos `#/artigo/<articleSlug>` e seu contexto de concurso.

O **site tem uma lista compacta**, com campo de pesquisa, índice alfabético, filtros combináveis por bloco P1/P2/P3, matéria e **artigo**, contador de resultados e expansão por item. O seletor de artigo lista apenas notas já vinculadas a pelo menos um verbete revisado, com contador por artigo, e se atualiza quando a matéria ou o bloco mudam. A organização pode alternar entre **por termo (A–Z)** e **por artigo**, com agrupamentos identificados pelo título e ligação ao artigo canônico. Só aparecem entradas revisadas, evitando centenas de cartões vazios. Nas telas pequenas: lista de uma coluna, filtros recolhíveis e busca sempre localizável. Usar texto, sem ícones decorativos.

O registro aberto oferecerá termo, sigla por extenso, definição breve, diferença em relação ao vizinho conceitual, pegadinha de julgamento C/E quando pertinente, exemplo e fonte, além de vínculo ao artigo canônico. O glossário é uma ferramenta de **consulta**, não substitui as notas aprofundadas.

## Arquitetura de dados e autoria gradual

Este backlog usa JSON separado do conteúdo. Definições revisadas já entram em `data/glossario/termos/<assunto>.json`, com identidade `id` permanente, rótulo, aliases equivalentes, definição, contraste, fontes, `subjectIds`, `contestIds` e `articleIds`. O build valida os registros publicados e produz `glossario-index.json`; não editar índices derivados manualmente. Uma mesma definição pode pertencer a vários concursos. Usar IDs estáveis dos artigos e resolver o slug público no build, sem copiar caminhos físicos como vínculo definitivo.

A busca interna do glossário deve ignorar acentos e caixa, localizar siglas e variantes equivalentes, mostrar resultados imediatamente e carregar os detalhes conforme necessário. O índice de busca dos artigos atual (`search-index.json`) continuará independente. Integração opcional à busca global dependerá de benchmarks próprios e preservação da prioridade dos artigos. O navegador não salva dados pessoais de estudo no repositório público.

Exemplo **ilustrativo simplificado** do formato de registro publicado (o contrato real inclui `definition`, `contrast`, `cebraspeTrap`, `example`, `subjectIds`, `contestIds`, `articleIds`, `sources` e `status`):

```json
{
  "id": "glo-criterio-de-auditoria",
  "term": "Critério de auditoria",
  "aliases": [],
  "definition": "Parâmetro usado para comparar a situação encontrada.",
  "distinguishFrom": ["glo-condicao-do-achado"],
  "cebraspeTrap": "Trocar o parâmetro de comparação pela situação observada.",
  "subjects": ["auditoria-governamental"],
  "contests": ["cgu-2026"],
  "articleIds": ["<id-canônico-após-verificação>"],
  "sources": ["<referência-verificada>"],
  "status": "reviewed"
}
```

O exemplo demonstra a estrutura; ainda exige revisão normativa e editorial. Um registro só será publicado com definição substantiva, referência confiável, identificação única e vínculo validado. Evitar transformar nome de arquivo em prova de cobertura.

## Núcleo do catálogo: os primeiros 200 termos

### Auditoria Governamental: 35 termos (P2/P3, prioridade A)

- Ciclo de auditoria; Universo auditável; Unidade auditável. Artigo candidato: [[3 - Materias/Auditoria Governamental/02 - ciclo de auditoria|02 - ciclo de auditoria]].
- Matriz de riscos; Risco inerente; Risco residual; Risco de auditoria. Artigo candidato: [[3 - Materias/Auditoria Governamental/planejamento-baseado-em-riscos|planejamento-baseado-em-riscos]].
- Controles internos; Modelo das três linhas. Artigo candidato: [[3 - Materias/Auditoria Governamental/05 - governanca riscos controles e tres linhas|05 - governanca riscos controles e tres linhas]].
- Avaliação (auditoria); Consultoria (auditoria); Apuração (auditoria). Artigo candidato: [[3 - Materias/Auditoria Governamental/01 - finalidades e tres linhas|01 - finalidades e tres linhas]].
- Independência funcional; Objetividade. Artigo candidato: [[3 - Materias/Auditoria Governamental/03 - independencia objetividade e sigilo|03 - independencia objetividade e sigilo]].
- Ceticismo profissional; Zelo profissional; Proficiência. Artigo candidato: [[3 - Materias/Auditoria Governamental/04 - proficiencia zelo e ceticismo profissional|04 - proficiencia zelo e ceticismo profissional]].
- Sigilo profissional. Artigo candidato: [[3 - Materias/Auditoria Governamental/sigilo-e-transparencia-em-auditoria|sigilo-e-transparencia-em-auditoria]].
- PAINT; RAINT. Artigo candidato: [[3 - Materias/Auditoria Governamental/paint-raint-e-prestacao-de-contas|paint-raint-e-prestacao-de-contas]].
- Matriz de planejamento; Programa de trabalho. Artigo candidato: [[3 - Materias/Auditoria Governamental/planejamento-individual-de-auditoria|planejamento-individual-de-auditoria]].
- Critério de auditoria; Condição do achado; Causa do achado; Efeito do achado. Artigo candidato: [[3 - Materias/Auditoria Governamental/achados-causas-e-indicios-de-fraude|achados-causas-e-indicios-de-fraude]].
- Suficiência da evidência; Adequação da evidência; Papéis de trabalho. Artigo candidato: [[3 - Materias/Auditoria Governamental/evidencias-e-documentacao|evidencias-e-documentacao]].
- Teste de controles; Teste substantivo. Artigo candidato: [[3 - Materias/Auditoria Governamental/procedimentos-e-testes-de-auditoria|procedimentos-e-testes-de-auditoria]].
- Amostragem estatística; Amostragem não estatística. Artigo candidato: [[3 - Materias/Auditoria Governamental/amostragem-e-generalizacao|amostragem-e-generalizacao]].
- Recomendação de auditoria; Monitoramento de recomendações. Artigo candidato: [[3 - Materias/Auditoria Governamental/monitoramento-de-recomendacoes-e-beneficios|monitoramento-de-recomendacoes-e-beneficios]].

### Orçamento Público: 25 termos (P3, prioridade A)

- Ciclo orçamentário. Artigo candidato: [[3 - Materias/Orcamento Publico/01 - orcamento publico e ciclo orcamentario|01 - orcamento publico e ciclo orcamentario]].
- PPA; LDO; LOA. Artigo candidato: [[3 - Materias/Orcamento Publico/02 - ppa ldo e loa|02 - ppa ldo e loa]].
- Princípio da unidade; Princípio da universalidade; Princípio da anualidade; Princípio da exclusividade; Princípio do orçamento bruto. Artigo candidato: [[3 - Materias/Orcamento Publico/03 - principios orcamentarios e vedacoes constitucionais|03 - principios orcamentarios e vedacoes constitucionais]].
- Crédito suplementar; Crédito especial; Crédito extraordinário. Artigo candidato: [[3 - Materias/Orcamento Publico/05 - creditos adicionais e emendas parlamentares|05 - creditos adicionais e emendas parlamentares]].
- Programação financeira; Cronograma de desembolso; Contingenciamento; Programação física cumprida. Artigo candidato: [[3 - Materias/Orcamento Publico/06 - programacao orcamentaria e contingenciamento|06 - programacao orcamentaria e contingenciamento]].
- Previsão de receita; Arrecadação da receita. Artigo candidato: [[3 - Materias/Orcamento Publico/07 - receitas publicas e estagios|07 - receitas publicas e estagios]].
- Empenho; Liquidação da despesa; Pagamento da despesa. Artigo candidato: [[3 - Materias/Orcamento Publico/08 - despesas publicas e estagios|08 - despesas publicas e estagios]].
- Restos a pagar processados; Restos a pagar não processados; Despesas de exercícios anteriores. Artigo candidato: [[3 - Materias/Orcamento Publico/09 - restos a pagar dea e suprimento de fundos|09 - restos a pagar dea e suprimento de fundos]].
- Meta fiscal. Artigo candidato: [[3 - Materias/Orcamento Publico/11 - responsabilidade fiscal e controle orcamentario|11 - responsabilidade fiscal e controle orcamentario]].

### Contabilidade Pública: 25 termos (P3, prioridade A)

- Regime orçamentário; Regime de competência; Fato gerador; Patrimônio público; Ativo patrimonial; Passivo patrimonial; Patrimônio líquido. Artigo candidato: [[3 - Materias/Contabilidade Publica/01 - patrimonio publico e regimes de reconhecimento|01 - patrimonio publico e regimes de reconhecimento]].
- Balanço orçamentário; Balanço financeiro. Artigo candidato: [[3 - Materias/Contabilidade Publica/02 - balanco orcamentario e balanco financeiro|02 - balanco orcamentario e balanco financeiro]].
- Balanço patrimonial; Demonstração das Variações Patrimoniais; Variação patrimonial aumentativa; Variação patrimonial diminutiva. Artigo candidato: [[3 - Materias/Contabilidade Publica/03 - balanco patrimonial e demonstracao das variacoes patrimoniais|03 - balanco patrimonial e demonstracao das variacoes patrimoniais]].
- Demonstração dos Fluxos de Caixa; Notas explicativas; Conciliação contábil. Artigo candidato: [[3 - Materias/Contabilidade Publica/04 - fluxos de caixa notas explicativas e conciliacoes|04 - fluxos de caixa notas explicativas e conciliacoes]].
- Provisão contábil; Passivo contingente; Ativo contingente. Artigo candidato: [[3 - Materias/Contabilidade Publica/07 - provisoes e passivos e ativos contingentes|07 - provisoes e passivos e ativos contingentes]].
- Depreciação; Redução ao valor recuperável. Artigo candidato: [[3 - Materias/Contabilidade Publica/08 - depreciacao reducao ao valor recuperavel e ativos|08 - depreciacao reducao ao valor recuperavel e ativos]].
- Custo direto; Custo indireto; Objeto de custo. Artigo candidato: [[3 - Materias/Contabilidade Publica/05 - custos publicos fundamentos e objetos de custo|05 - custos publicos fundamentos e objetos de custo]].
- Sistema de Informação de Custos (SIC). Artigo candidato: [[3 - Materias/Contabilidade Publica/06 - mic sic e informacoes gerenciais de custos|06 - mic sic e informacoes gerenciais de custos]].

### Governança, Riscos e Integridade: 14 termos (P2, prioridade C)

- Tolerância ao risco; Risco de integridade; Ambiente de controle; Segregação de funções; Controle preventivo; Controle detectivo; Maturidade de controles. Artigo candidato: [[3 - Materias/Governanca Riscos e Integridade/03 - maturidade controles e incentivos|03 - maturidade controles e incentivos]].
- Integridade pública; SITAI; Programa de integridade. Artigo candidato: [[3 - Materias/Governanca Riscos e Integridade/01 - integridade publica prevencao e sitai|01 - integridade publica prevencao e sitai]].
- Diligência de terceiros; Gestão de terceiros; Integridade privada; Canal de denúncias. Artigo candidato: [[3 - Materias/Governanca Riscos e Integridade/02 - integridade privada e diligencia de terceiros|02 - integridade privada e diligencia de terceiros]].

### Avaliação de Políticas Públicas: 18 termos (P3, prioridade B)

- Teoria da mudança; Modelo lógico; Insumo; Atividade; Produto; Resultado; Impacto. Artigo candidato: [[3 - Materias/Avaliacao de Politicas Publicas/01 - teoria da mudanca|01 - teoria da mudanca]].
- Indicador de resultado; Linha de base. Artigo candidato: [[3 - Materias/Avaliacao de Politicas Publicas/03 - monitoramento e avaliacao de politicas publicas|03 - monitoramento e avaliacao de politicas publicas]].
- Contrafactual; Viés de seleção; Grupo de controle; Diferenças em diferenças; Regressão descontínua; Experimento aleatorizado; Validade interna; Validade externa; Análise de custo-efetividade. Artigo candidato: [[3 - Materias/Avaliacao de Politicas Publicas/05 - identificacao causal e avaliacao economica|05 - identificacao causal e avaliacao economica]].

### Contratações e Transferências: 18 termos (P3, prioridade B)

- Estudo Técnico Preliminar (ETP); Termo de Referência (TR); Matriz de riscos contratual. Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/09 - planejamento da contratacao e riscos|09 - planejamento da contratacao e riscos]].
- Dispensa de licitação; Inexigibilidade de licitação; Contrato administrativo. Artigo candidato: [[3 - Materias/Direito Administrativo/08 - licitacoes e contratos|08 - licitacoes e contratos]].
- Fiscalização técnica; Fiscalização administrativa; Medição contratual; Recebimento provisório; Recebimento definitivo. Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/10 - fiscalizacao medicao e recebimento contratual|10 - fiscalizacao medicao e recebimento contratual]].
- Convênio; Contrato de repasse; Plano de trabalho. Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/02 - convenios contratos de repasse e plano de trabalho|02 - convenios contratos de repasse e plano de trabalho]].
- Transferência especial. Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/05 - transferencias especiais e emendas parlamentares|05 - transferencias especiais e emendas parlamentares]].
- Prestação de contas; Tomada de contas especial (TCE). Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/07 - prestacao de contas e tomada de contas especial|07 - prestacao de contas e tomada de contas especial]].
- Marco Regulatório das OSC (MROSC). Artigo candidato: [[3 - Materias/Contratacoes e Transferencias/04 - parcerias com organizacoes da sociedade civil|04 - parcerias com organizacoes da sociedade civil]].

### Integridade e Responsabilização: 14 termos (P3, prioridade B)

- Processo Administrativo Disciplinar (PAD); Processo Administrativo de Responsabilização (PAR); Termo de Ajustamento de Conduta (TAC); Acordo de leniência. Artigo candidato: [[3 - Materias/Integridade e Responsabilizacao/05 - pad par leniencia e instrumentos consensuais|05 - pad par leniencia e instrumentos consensuais]].
- Responsabilidade subjetiva; Responsabilidade objetiva; Juízo de admissibilidade. Artigo candidato: [[3 - Materias/Integridade e Responsabilizacao/04 - admissibilidade prova e regimes de responsabilidade|04 - admissibilidade prova e regimes de responsabilidade]].
- Lei Anticorrupção (Lei nº 12.846/2013). Artigo candidato: [[3 - Materias/Integridade e Responsabilizacao/03 - programas de integridade publicos e privados|03 - programas de integridade publicos e privados]].
- Improbidade administrativa; Dolo específico; Acordo de não persecução civil. Artigo candidato: [[3 - Materias/Direito Administrativo/07 - improbidade administrativa|07 - improbidade administrativa]].
- Dano ao erário; Nexo causal; Processo sancionador. Artigo candidato: [[3 - Materias/Integridade e Responsabilizacao/06 - sancoes reparacao e efetividade das respostas|06 - sancoes reparacao e efetividade das respostas]].

### Transparência e Ouvidoria: 9 termos (P2, prioridade C)

- Lei de Acesso à Informação (LAI); Transparência ativa; Transparência passiva; Classificação de sigilo. Artigo candidato: [[3 - Materias/Direito Administrativo/01 - principios e lei de acesso a informacao|01 - principios e lei de acesso a informacao]].
- Dado pessoal; Dado pessoal sensível. Artigo candidato: [[3 - Materias/Administracao Publica/03 - transparencia acesso a informacao e protecao de dados|03 - transparencia acesso a informacao e protecao de dados]].
- Ouvidoria pública; Manifestação de ouvidoria. Artigo candidato: [[3 - Materias/Transparencia e Ouvidoria/01 - ciclo das manifestacoes e resposta ao usuario|01 - ciclo das manifestacoes e resposta ao usuario]].
- Proteção ao denunciante. Artigo candidato: [[3 - Materias/Integridade e Responsabilizacao/02 - denuncia e protecao ao denunciante|02 - denuncia e protecao ao denunciante]].

### Evidências, Dados e IA: 10 termos (P2, prioridade C)

- Confiabilidade dos dados; Rastreabilidade da evidência. Artigo candidato: [[3 - Materias/Evidencias Dados e IA/01 - perguntas fontes e qualidade da evidencia|01 - perguntas fontes e qualidade da evidencia]].
- Qualidade dos dados; Subnotificação. Artigo candidato: [[3 - Materias/Evidencias Dados e IA/02 - indicadores denominadores e subnotificacao|02 - indicadores denominadores e subnotificacao]].
- Falso positivo; Falso negativo; Inferência causal. Artigo candidato: [[3 - Materias/Evidencias Dados e IA/03 - inferencias falacias e falsos positivos|03 - inferencias falacias e falsos positivos]].
- Viés algorítmico; Validação independente; Explicabilidade. Artigo candidato: [[3 - Materias/Evidencias Dados e IA/05 - ia responsavel e validacao de decisoes publicas|05 - ia responsavel e validacao de decisoes publicas]].

### Finanças Públicas: 7 termos (P3, prioridade B)

- Função alocativa; Função distributiva; Função estabilizadora; Externalidade; Bem público. Artigo candidato: [[3 - Materias/Financas Publicas/01 - funcoes economicas do estado bens publicos e falhas de mercado|01 - funcoes economicas do estado bens publicos e falhas de mercado]].
- Incidência tributária; Progressividade tributária. Artigo candidato: [[3 - Materias/Financas Publicas/02 - tributacao incidencia economica e equidade|02 - tributacao incidencia economica e equidade]].

### Direito Administrativo: 7 termos (P2, prioridade C)

- Ato vinculado; Ato discricionário. Artigo candidato: [[3 - Materias/Direito Administrativo/03 - atos administrativos|03 - atos administrativos]].
- Poder hierárquico; Poder disciplinar. Artigo candidato: [[3 - Materias/Direito Administrativo/04 - poderes administrativos|04 - poderes administrativos]].
- Controle interno; Controle externo. Artigo candidato: [[3 - Materias/Direito Administrativo/11 - controle da administracao publica|11 - controle da administracao publica]].
- Responsabilidade civil do Estado. Artigo candidato: [[3 - Materias/Direito Administrativo/06 - responsabilidade civil do estado|06 - responsabilidade civil do estado]].

### Estado e Democracia: 5 termos (P1, prioridade C)

- Accountability horizontal; Accountability vertical. Artigo candidato: [[3 - Materias/Estado e Democracia/02 - democracia representacao e accountability|02 - democracia representacao e accountability]].
- Problema principal-agente; Captura regulatória. Artigo candidato: [[3 - Materias/Estado e Democracia/07 - principal agente acao coletiva e captura|07 - principal agente acao coletiva e captura]].
- Clientelismo. Artigo candidato: [[3 - Materias/Estado e Democracia/06 - corrupcao clientelismo patronagem e captura|06 - corrupcao clientelismo patronagem e captura]].

### Ética Pública: 5 termos (P1, prioridade C)

- Moralidade administrativa. Artigo candidato: [[3 - Materias/Etica Publica/01 - etica moralidade e interesse publico|01 - etica moralidade e interesse publico]].
- Conflito de interesses. Artigo candidato: [[3 - Materias/Etica Publica/03 - conflito de interesses lei 12813|03 - conflito de interesses lei 12813]].
- Impedimento; Suspeição. Artigo candidato: [[3 - Materias/Etica Publica/04 - impedimento e suspeicao processo administrativo|04 - impedimento e suspeicao processo administrativo]].
- Dever de lealdade institucional. Artigo candidato: [[3 - Materias/Etica Publica/02 - deveres e conduta profissional|02 - deveres e conduta profissional]].

### Administração Pública: 4 termos (P1, prioridade C)

- Modelo patrimonialista; Modelo burocrático; Modelo gerencial. Artigo candidato: [[3 - Materias/Administracao Publica/01 - evolucao da administracao publica|01 - evolucao da administracao publica]].
- Governança pública. Artigo candidato: [[3 - Materias/Administracao Publica/02 - governanca publica|02 - governanca publica]].

### Sociedade Brasileira: 4 termos (P1, prioridade C)

- Mobilidade social. Artigo candidato: [[3 - Materias/Sociedade Brasileira/01 - instituicoes estratificacao e mobilidade social|01 - instituicoes estratificacao e mobilidade social]].
- Interseccionalidade. Artigo candidato: [[3 - Materias/Sociedade Brasileira/04 - diversidade interseccionalidade e acesso efetivo|04 - diversidade interseccionalidade e acesso efetivo]].
- Desigualdade estrutural; Vulnerabilidade social. Artigo candidato: [[3 - Materias/Sociedade Brasileira/05 - pobreza desigualdade desenvolvimento e indicadores|05 - pobreza desigualdade desenvolvimento e indicadores]].

## Expansão do núcleo de Orçamento Público: mais 58 conceitos (05/11/2026)

A solicitação de ampliar conceitos como **receita primária** revelou uma lacuna da lista fundadora: a unidade de classificações da receita e da despesa estava reduzida a poucos registros. Os 58 conceitos adicionais foram incorporados **ao backlog e às definições revisadas**, preservando os IDs dos 200 anteriores. A lista original permanece acima, e o backlog em JSON tem agora **258** termos. A matéria Orçamento Público passou a **83 registros publicados**.

**Classificações da receita e apuração fiscal (26):** Receita primária; Receita financeira; Resultado primário; Receita corrente; Receita de capital; Receita orçamentária; Ingresso extraorçamentário; Receita originária; Receita derivada; Natureza da receita; Origem da receita orçamentária; Espécie da receita; Fonte/destinação de recursos; Receita de impostos, taxas e contribuições de melhoria; Receita de contribuições; Receita patrimonial; Receita agropecuária; Receita industrial; Receita de serviços; Transferência corrente; Transferência de capital; Operação de crédito; Alienação de bens; Amortização de empréstimos concedidos; Antecipação de Receita Orçamentária (ARO); Receita intraorçamentária.

**Classificações da despesa, programação e controle (32):** Classificação por esfera orçamentária; Classificação institucional; Órgão orçamentário; Unidade orçamentária; Classificação funcional; Função orçamentária; Subfunção orçamentária; Classificação programática; Programa orçamentário; Ação orçamentária; Projeto (ação orçamentária); Atividade (ação orçamentária); Operação especial (ação orçamentária); Subtítulo orçamentário; Natureza da despesa; Despesa corrente; Despesa de capital; Grupo de Natureza da Despesa (GND); Modalidade de aplicação; Elemento de despesa; Pessoal e Encargos Sociais (GND); Juros e Encargos da Dívida (GND); Outras Despesas Correntes (GND); Investimentos (GND); Inversões Financeiras (GND); Amortização da Dívida (GND); Aplicações diretas; Meta física; Identificador de resultado primário da despesa; Despesa primária; Despesa financeira; Receita Corrente Líquida (RCL).

**Artigos canônicos vinculados:** [[3 - Materias/Orcamento Publico/04 - classificacoes da receita e da despesa|Classificações da receita e da despesa]]; [[3 - Materias/Orcamento Publico/07 - receitas publicas e estagios|Receitas e estágios]]; [[3 - Materias/Orcamento Publico/11 - responsabilidade fiscal e controle orcamentario|Responsabilidade fiscal]]; [[3 - Materias/Orcamento Publico/01 - orcamento publico e ciclo orcamentario|Orçamento e meta física]].

**Fontes de verificação e controle de vigência:** [Manual Técnico de Orçamento 2026, Secretaria de Orçamento Federal, capítulos 3 e 4](https://www1.siop.planejamento.gov.br/mto/lib/exe/fetch.php/mto2026%3Amto2026.pdf); [MCASP, 11ª edição, Tesouro Nacional](https://www.gov.br/tesouronacional/pt-br/contabilidade-e-custos/manuais/manual-de-contabilidade-aplicada-ao-setor-publico-mcasp-1); [Lei nº 4.320/1964](https://www.planalto.gov.br/ccivil_03/leis/l4320.htm) e [LRF](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm). Para categorias de 2027, verificar a atualização anual antes de reaproveitar códigos.

A diferença decisiva para o Cebraspe: **corrente/capital** é categoria econômica; **primária/financeira** é classificação segundo impacto na apuração fiscal; **origem/espécie** integra a natureza; **fonte/destinação** descreve regras de uso; **função/programa/GND/elemento** pertencem a dimensões distintas da despesa.

## Ampliação básica: Ativo e Passivo (05/11/2026)

Dois verbetes curtos, **Ativo** e **Passivo**, foram acrescentados ao lado das entradas já existentes **Ativo patrimonial** e **Passivo patrimonial**. Ambos explicam a definição contábil em linguagem inicial, com exemplos de serviço público, diferenças importantes, armadilhas C/E e fontes normativas (MCASP 11 e NBC TSP). O objetivo editorial é permitir uma busca exata pelos termos simples e depois aprofundar as condições de reconhecimento nas notas já existentes. As entradas apontam para [[3 - Materias/Contabilidade Publica/01 - patrimonio publico e regimes de reconhecimento|Patrimônio público e regimes de reconhecimento]], sem criar novo artigo ou duplicar a explicação longa. O arquivo de entradas é `data/glossario/termos/contabilidade-publica-fundamentos.json`.

A entrada **Ativo** prioriza controle, evento passado e potencial de serviços ou benefício econômico; **Passivo** prioriza obrigação presente, evento passado e saída de recursos na extinção. O total do glossário passa a **202 verbetes revisados de 317 planejados**.

## Fases de implementação

**Fase 0 (concluída):** backlog com 200 termos distribuídos por 15 matérias e 75 caminhos candidatos verificados como arquivos existentes. O backlog continua sendo fila editorial, independente das definições aprovadas.

**Fase 1 (concluída e publicada):** rota, menu, lista, filtro por bloco/matéria/letra, validador e 20 definições revisadas: 10 de Auditoria, 5 de Orçamento e 5 de Contabilidade. O build publica apenas conteúdo revisado.

**Fase 2 (concluída e publicada):** acrescentadas outras **65 definições** de prioridade A: 25 de Auditoria, 20 de Orçamento e 20 de Contabilidade, totalizando **85**. Cada nova entrada contém definição, contraste conceitual, armadilha C/E, exemplo, fonte e vínculo por ID de artigo. Risco inerente/residual apontam para controles internos; programação física cumprida aponta para o artigo introdutório de Orçamento, onde há explicação específica. Os testes do build exigem agora ao menos 85 definições e preservam a expansão futura.

**Ampliação complementar de Orçamento (58 novas definições):** implementada em 05/11/2026, após a Fase 2, levando de 85 a **143** termos e de 200 a **258** candidatos.

**Novo lote de execução e controle (30 definições):** acrescenta receitas efetivas/não efetivas, lançamento e recolhimento, três modalidades de empenho, dotação, nota, ordem de pagamento, restos a pagar a liquidar/em liquidação, suprimento de fundos, fontes de créditos adicionais, reabertura, emendas parlamentares, transferências, RREO, RGF, anexos e limites de pessoal. O catálogo passa a **173/288** e Orçamento a **113**. As definições foram separadas em `data/glossario/termos/orcamento-publico-complementos.json`, preservando os 83 registros do arquivo anterior para facilitar novos lotes. A numeração de fases seguintes permanece como trilha temática original, com totais acumulados recalculados.

**Refinamento por artigo e mais 7 conceitos (05/11/2026):** filtro por artigo, organização agrupada por nota e 7 verbetes identificados nos artigos existentes, sem duplicação: regra de ouro, renúncia de receita, despesa obrigatória de caráter continuado, bloqueio de dotação, empresa estatal dependente, empresa controlada e despesa total com pessoal. Os termos adicionais ficam em `data/glossario/termos/orcamento-publico-fiscal.json`. O total chega a **180/295**, incluindo **120 de Orçamento**. O vínculo usa IDs canônicos de artigos; o agrupamento apresenta cada conceito apenas uma vez, pelo primeiro artigo vinculado, enquanto o filtro considera todos os vínculos. A abertura de um verbete na lista filtrada preserva a seleção, inclusive por meio do link permanente.

**Foco em empenho e estágios da despesa (20 verbetes, 05/11/2026):** complementadas as relações entre fixação, empenho prévio, dispensa da nota, reforço e anulação do empenho, limites de empenho e pagamento, crédito empenhado a liquidar, em liquidação e liquidado a pagar, ateste/recebimento contratual, restos a pagar, disponibilidade de caixa e reconhecimento orçamentário. A definição do verbete **Empenho** foi corrigida para a redação literal do art. 58 da Lei nº 4.320/1964: **“pendente ou não de implemento de condição”**. A mesma precisão foi acrescentada ao artigo canônico sobre os estágios da despesa e a um item C/E didático. Os novos termos estão em `data/glossario/termos/orcamento-publico-empenho.json`, com IDs permanentes, fontes oficiais e artigos vinculados, ampliando o catálogo para **200/315** e Orçamento Público para **140**. Esta expansão não altera os IDs ou o histórico dos verbetes existentes.

**Fase 3:** mais **50 definições** de Avaliação de Políticas, Contratações e Integridade (**250** no total).

**Fase 4:** outras **40 definições** de Governança, Transparência, Evidências/IA e Finanças (**290** no total).

**Fase 5:** **25 definições** de Direito Administrativo, Estado e Democracia, Ética, Administração Pública e Sociedade Brasileira, completando **315** (200 iniciais mais 115 de ampliação).

A ordem é revisável se o estudo revelar lacuna de maior prioridade. O contador na interface mostrará apenas entradas **revisadas e efetivamente publicadas**.

## Refinamento: pesquisa por flexões e relevância (05/11/2026)

A pesquisa local do glossário passou a tratar formas como **primário/primária/primários/primárias** e **financeiro/financeira** como equivalentes na recuperação, sem modificar as definições ou criar aliases duplicados. A busca continua sem distinção de maiúsculas e acentos, contempla plural regular e algumas terminações frequentes do português, como **ações/ação** e **fiscais/fiscal**. A aproximação morfológica é **conservadora**, evitando uma promessa de lematização completa ou de correção ortográfica arbitrária.

Os termos de uma consulta com várias palavras são combinados por presença conjunta nos campos públicos da entrada: título, aliases, definição, contraste, pegadinha e exemplo. Na ordenação, têm precedência as correspondências **exatas de título**, **exatas de sigla/alias** e **do próprio título**, antes dos resultados obtidos pelo corpo da definição. O usuário mantém o controle pelos filtros de bloco, matéria, artigo e letra inicial; a ordenação por relevância é aplicada somente quando há texto na busca.

Os testes cobrem flexões de gênero e número, siglas, plurais especiais, múltiplas palavras, ausência de duplicação, consultas sem resultado e preservação dos filtros por matéria e bloco. A busca tem alcance lexical e não substitui revisão de equivalências jurídicas de conceitos distintos.

## Testes e fechamento

Validar unicidade e estabilidade de IDs, aliases sem colisões, campos obrigatórios, links canônicos existentes, correspondência a concurso e matéria, fonte legal/manual atualizada, resultados vazios e busca por acento/sigla. Testar regressões no `web/00-route-utils.js`, `web/07-router-init.js`, `web/06*.js` e `scripts/build-site.js`. O glossário não pode alterar ranking global sem benchmarks nem deixar `index.md` ou índice de navegação inconsistentes. Confirmar build, workflow e conteúdo no Pages ao vivo antes de anunciar implementação.

**Arquivos implementados na Fase 1:** backlog (`data/glossario/backlog-cgu-2026.json`); definições (`data/glossario/termos/*.json`); validador (`scripts/glossary-data.js`); índice derivado (`_site/glossario-index.json`); interface (`web/09-glossary.js`); rota (`#/glossario?concurso=cgu-2026`); testes (`scripts/test-glossary.js`).


## Conexão do glossário com flashcards

O glossário revisado passou a ser uma **segunda fonte pública de cartões de recuperação**, sem copiar definições para `data/flashcards.json`. O build gera `_site/data/glossario-flashcards.json` após validar `data/glossario/termos/*.json`. Entradas com `status: reviewed` são projetadas automaticamente; itens somente planejados continuam fora do baralho.

Quando há equivalência explícita em `data/glossario/flashcard-equivalencias.json` ou identidade literal de termo no mesmo concurso/matéria, **reutilizar o cartão e seu histórico**, adicionando apenas link para consulta da entrada do glossário. Caso contrário, criar cartão derivado com ID permanente `glossary-glo-...` e dados da entrada revisada, permitindo recuperação direta, inversa e contraste. A página mostra também a fonte normativa e o vínculo ao artigo.

**Fotografia anterior à segunda ampliação (05/11/2026):** 143 termos revisados; 38 reaproveitavam cartões existentes e 105 alimentavam cartões derivados. Os 232 cartões editoriais originais permaneciam intactos. A ampliação para 173 definições atualiza automaticamente a coleção após novo build; consultar os totais gerados, sem presumir o número de equivalências do novo lote. A expansão do glossário altera esse total automaticamente no próximo build; não tratar essas quantidades como avaliação de domínio ou incidência de prova.

Os vínculos editoriais explícitos devem ser preservados quando um cartão ou termo for renomeado; alterar um ID exige plano de migração das revisões locais. A inspeção de sobreposição conceitual continua necessária em cada lote de termos, porque correspondência literal não substitui revisão semântica.
