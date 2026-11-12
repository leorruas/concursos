---
title: "Câmara 2026: Tecnologia da Informação e Dados, consolidação dos gabaritos inéditos"
type: "auditoria"
status: "parcial-verificada"
created: 2026-11-11
updated: 2026-11-11
---

# Tecnologia da Informação e Dados: consolidação da segunda passagem

**Escopo:** concurso Câmara dos Deputados, Cargo 1, Divulgação Institucional, banca Cebraspe. Documento próprio da frente de Tecnologia da Informação e Dados, sem interferência nos relatórios de outras disciplinas.

## Método e alcance da conferência

Foram inventariados, **na versão atual do GitHub em 11/11/2026**, os **30 arquivos numerados** da pasta `3 - Materias/Informatica/`: os arquivos **01 e 02** são notas jurídicas compartilhadas sem bateria C/E; os arquivos **03 a 30** totalizam **28 artigos com 6 questões inéditas cada, somando 168 questões**. Foram lidos os marcadores `Gabarito: NÃO HOMOLOGADO` registrados nos blocos de itens de cada um desses 28 artigos. Identificadas **13 questões não homologadas**, em 11 artigos, e **155 questões sem esse marcador**. A ausência de marcador **não constitui homologação independente ou certificação de acerto**, e as 168 são questões inéditas, não itens oficiais Cebraspe.

As revisões conceituais e de gabarito foram registradas nos próprios artigos em 11/11/2026. Esta consolidação **não reexecuta testes em navegador**, **não valida a totalidade das referências externas** e **não certifica a correspondência de cada enunciado com corpus oficial**. A cobertura do edital e os achados históricos constam em `07 - Tecnologia da Informacao e Dados - Fase 1.md`.

## Fila nominal de itens fora de uso

| Artigo | Questão | Motivo registrado | Encaminhamento |
|:--|--:|:--|:--|
| 03: arquivos, pastas e nuvem | 6 | Promessa absoluta de disponibilidade offline/permanente no OneDrive | Condicionar ao download completo, integridade e configuração do ambiente |
| 05: Excel 365 | 5 | Igualdade `MAIOR` e `MÁXIMO` sem estabelecer presença de números | Indicar ao menos um número válido no intervalo |
| 07: OneDrive | 5 | Senha, expiração e bloqueio de download em link de **pasta**, sem licença, política ou tipo de link | Especificar escopo de compartilhamento disponível |
| 09: navegação e URLs | 5 | Cookie definido universalmente como arquivo de texto gravado localmente | Definir cookie como dado de estado gerido pelo navegador, no contexto do site |
| 13: backup | 1 | Uso do `archive bit` no incremental como mecanismo universal | Indicar implementação tradicional baseada no atributo |
| 13: backup | 4 | Uso do `archive bit` no diferencial como mecanismo universal | Indicar implementação tradicional baseada no atributo |
| 18: fundamentos de IA | 3 | Deep learning apresentado como dispensa geral de *feature engineering* | Explicitar que pode reduzir essa necessidade em determinadas tarefas |
| 18: fundamentos de IA | 6 | Atribuição ao Ulysses de transcrição de audiências sem comprovação específica | Conferir documentação institucional ou retirar o nome da plataforma |
| 21: IA generativa | 4 | `P(X)` chamado indevidamente de distribuição conjunta | Diferenciar `P(X)` de `P(X,Y)` |
| 22: engenharia de prompts | 2 | Ganho comprovado e universal do Chain-of-Thought para análise jurídica e outros campos | Limitar a modelos e tarefas em que exista evidência |
| 24: dados e indicadores | 4 | Regra universal de polaridade sem especificar tipo de avaliação | Admitir meta-alvo, faixa aceitável e direções distintas |
| 27: histogramas, barras e linhas | 5 | Eixo zero tratado como obrigação universal de gráficos de barras | Explicitar codificação por comprimento e recomendação de integridade |
| 29: ferramentas de BI | 1 | Colunas calculadas e medidas generalizadas sem modo de armazenamento | Delimitar modo Import e condições do modelo |

**Regra operacional:** nenhum dos 13 enunciados originais deve ser selecionado como questão com resposta C/E homologada. As alternativas reformuladas sugeridas nos artigos são propostas editoriais, **não substituições já aprovadas**; precisam de validação e publicação com rastreabilidade própria.

## Checagem dirigida do banco de questões e dos simulados

- `data/questoes-camara.json` contém **367 entradas em `pilotoDidatico`**, sendo **50 com `subjectId: "informatica"`**. Comparei os **13 enunciados originais** com todos os enunciados desse banco, usando normalização de caixa, espaço e pontuação Markdown simples: **0 correspondências textuais exatas**. Portanto, **não se constatou duplicação literal dos 13 itens no banco piloto atual**.
- A inexistência de duplicação literal **não elimina equivalência semântica ou adaptação**. O banco piloto tem questões próprias e algumas referências a artigos revisados (inclusive backup e visualizações); não se conclui que todos os seus gabaritos estejam auditados.
- `4 - Projetos/camara-2026/Questoes e Simulados.md` estabelece prioridade de questões reais e uso posterior de inéditas. O `4 - Projetos/camara-2026/Indice de questoes reais Cebraspe.md` é um índice de provas e temas, não repositório integral de questões inéditas.
- O código `scripts/study-context.js` lê `data/questoes-camara.json`; na inspeção dirigida não foi identificado mecanismo explícito de veto por marcador **NÃO HOMOLOGADO** dos artigos Markdown. **Não afirmar exclusão automática no sistema inteiro** sem testar todas as rotas de geração e demais fontes. Até lá, aplicar filtro editorial manual e impedir que um gerador extraia esses trechos dos artigos.
- A comparação acima é restrita ao banco piloto e aos arquivos de orientação/código consultados; **não equivale a busca exaustiva por todos os simulados históricos, sessões, flashes ou aplicações derivadas**.

## Situação de referências e rastreabilidade

As notas dos artigos registram fontes e ressalvas pontuais de Microsoft, RFCs, legislação, estatística, BI e IA. O artigo 29 contém a correção anterior do item DAX `CALCULATE`/ `CALCULATETABLE`, e o artigo 14 preserva a correção anterior do item sobre vírus e ação humana. As entradas aqui **não substituem nova verificação externa dos links, versões de software e decisões normativas**. Em especial, verificar pré-requisitos do Power BI, disponibilidade de recursos do OneDrive e fontes institucionais sobre Ulysses.

## Backlog da frente de Informática

1. **P0: segurança pedagógica.** Implementar ou comprovar bloqueio de seleção dos 13 enunciados originais; não atribuir resultado C/E a marcador NÃO HOMOLOGADO. Validar se o banco de 50 questões tem equivalências conceituais problemáticas.
2. **P1: correção rastreável.** Elaborar e validar versões substitutas para os 13 itens, com novo enunciado inequívoco, justificativa, fonte verificável e referência ao original. Submeter eventual transição para `CERTO`/`ERRADO` apenas após validação.
3. **P1: cobertura.** Reconciliar os 28 artigos CAM-TI, o catálogo de IDs e as alíneas 1–8.4 do programa oficial; não confundir os dois textos jurídicos compartilhados (01 e 02) com os 28 itens próprios da Câmara.
4. **P2: evidência e plataforma.** Testar links Markdown/Obsidian/GitHub Pages, referências externas e comportamento dos geradores de bateria/simulado. Examinar diferenças de versão, licença e API nas questões técnicas.
5. **P2: calibragem de banca.** Confrontar itens inéditos restantes com corpus real Cebraspe, separando validade do gabarito, pertinência ao edital e grau de dificuldade.

## Parecer atual

- **Para revisão conceitual:** os artigos 03–30 receberam duas passagens de correção dirigida e podem ser consultados **com ressalvas**, observando os avisos nos próprios textos.
- **Para questões C/E:** as 13 questões nominalmente indicadas estão **fora do treino homologado**; as outras 155 continuam **pendentes de certificação externa integral**, embora não carreguem o marcador de bloqueio.
- **Para plataforma/simulados:** não foi demonstrada presença literal dessas 13 questões no banco piloto, mas também **não foi demonstrado filtro automático de exclusão geral**.

Este registro é uma **consolidação factual do estado encontrado**, não uma declaração de cobertura integral, de desempenho do estudante ou de aprovação total da disciplina.

## Segunda conferência: os 50 itens do banco piloto de Informática (11/11/2026)

Foi efetuada **leitura individual dos 50 pares enunciado, gabarito e justificativa** de `data/questoes-camara.json` com `subjectId: "informatica"`. Foram comparados os mecanismos decisivos com as correções dos 13 itens não homologados dos artigos 03–30. **Não foi encontrada inversão de gabarito evidente ou reprodução substantiva do erro que motivou o bloqueio de um dos 13 enunciados** nesse recorte. Trata-se de revisão editorial e lógica, **não de certificação externa**.

| Área representada no piloto | Quantidade | Resultado dirigido |
|:--|--:|:--|
| Histogramas e gráficos temporais (artigo 27) | 6 | Gabaritos consistentes, incluindo densidade de classe e espaçamento proporcional no tempo |
| Dispersão e box plot (artigo 28) | 4 | Coerência em pares observacionais, correlação e IQR |
| Preparação e qualidade de dados (artigo 25) | 6 | Ausência de medida, duplicidade por unidade de análise, agregação, média ponderada e validade |
| Backup e recuperação (artigo 13) | 6 | Questões tratam cadeia de incrementais/diferenciais, regra 3-2-1, sincronização e RPO/RTO; **não dependem do archive bit** |
| Storytelling e integridade gráfica (artigo 30) | 6 | Questões focam contexto, acessibilidade, escalas e inferência sem transformar recomendações em proibição universal |
| Aprendizagem supervisionada e não supervisionada (artigo 19) | 6 | Exemplos explicitam presença ou ausência de rótulos durante o **treinamento** |
| Princípios e controles de segurança (artigo 12) | 6 | Distingue confidencialidade, disponibilidade, autenticidade e controle preventivo/detectivo |
| Correio eletrônico (artigo 10) | 8 | Comportamentos de webmail, Cco, resposta, anexos e permissões |
| Internet/intranet/extranet (artigo 08) | 2 | Diferencia acesso restrito de uso de protocolos da internet |
| **Total** | **50** | **50 pares revisados nesta leitura dirigida; sem retificação de gabarito identificada** |

**Detalhes da checagem:** no item de densidade de histograma com intervalos de 5 e 10 minutos, igual altura implica áreas diferentes (gabarito E); no item de média ponderada, `(10×8 + 30×12)/40 = 11` (gabarito C); as duas questões de backup incremental/diferencial **não** afirmam que todo produto usa o atributo `archive bit`. A questão de eixo truncado que compara barras 98 e 100 a partir de 97 explicita a proporção visual produzida, sem criar uma regra jurídica universal.

**Limitações:** esta checagem é feita pela leitura do conteúdo do banco e comparação conceitual, sem execução de testes automatizados, sem examinar bancos derivados, sem recuperar corpus oficial Cebraspe para cada item e sem provar ausência de versões parafraseadas dos 13 itens em sessões históricas. O campo `subjectId` serve para localizar a matéria, mas **não constitui, por si só, flag de homologação de conteúdo**.

**Decisão operacional:** manter as 50 questões didáticas de Informática sem alteração nesta rodada. Preservar a lista explícita de **13 enunciados de artigos bloqueados** e exigir filtro na seleção a partir de Markdown até que uma regra automática com teste verificável exista. A correção dos 13 enunciados precisa ser versionada separadamente para não perder rastreabilidade.

## Barreira na validação de sessões CAM-TI (11/11/2026)

Foi adicionada proteção **restrita ao concurso `camara-2026` e à matéria `informatica` / unidade `tecnologia-e-dados`**:

- `scripts/camara-ti-question-guard.js`: lê os artigos numerados em `3 - Materias/Informatica/`, identifica blocos `### Item N` / `### Questão N` marcados com `Gabarito: NÃO HOMOLOGADO` e constrói um índice de enunciados bloqueados, com normalização de Unicode, caixa, espaços e marcações Markdown simples. O índice é atualizado quando os arquivos-fonte mudam.
- `scripts/study-sessions.js`: chama a validação antes de aceitar o item de uma sessão da Câmara, incluindo sessões mistas com questão de Informática. O bloqueio **não depende** do rótulo declarado de origem da questão. As outras disciplinas e concursos permanecem fora do escopo.
- `scripts/test-camara-questions.js`: adicionados cenários para as **13 questões bloqueadas**, isolamento de outras matérias e preservação das **50 questões do banco piloto**.

**Verificação realizada:** código enviado e relido no GitHub; conferido por leitura da expressão de extração que os 13 blocos dos artigos 03, 05, 07, 09, 13, 18, 21, 22, 24, 27 e 29 continuam reconhecíveis e contêm enunciado. **Os testes Node.js ainda não foram executados neste ambiente**: o acesso ao repositório disponível nesta sessão não permite executar `npm test` ou `node scripts/test-camara-questions.js` sobre a cópia corrente. Portanto, a proteção está **implementada, mas a confirmação em execução permanece pendente**.

**Limites deliberados:** a regra reconhece enunciados iguais após normalização simples. **Paráfrases**, novos enunciados que repetem o erro conceitual e geradores externos que apenas mostram questões sem passar por `validateSession` **não estão cobertos**. A regra age na **entrada/validação da sessão**, não demonstra filtragem na interface de escolha de questões. O guard deve permanecer como camada de defesa até que a seleção e os outros canais de ingestão sejam auditados.

**Próxima prova obrigatória:** executar `node scripts/test-camara-questions.js` no repositório atualizado, confirmar 13 rejeições e 50 admissões no banco piloto e executar os testes gerais da Câmara para detectar regressões. Se houver falha, corrigir a implementação antes de considerar o bloqueio operacionalmente certificado.

## Inspeção complementar da proteção (11/11/2026)

- **Passou em inspeção de dados reais:** em leitura dos onze arquivos de origem com enunciados bloqueados, a mesma regra de segmentação e normalização reconheceu **13 itens diferentes**, distribuídos como 03:1, 05:1, 07:1, 09:1, 13:2, 18:2, 21:1, 22:1, 24:1, 27:1, 29:1.
- **Passou em comparação de textos:** nenhum dos **50 itens** de Informática em `data/questoes-camara.json` coincidiu com a chave normalizada de um item bloqueado.
- **Teste ampliado no código:** verificações agora incluem a impossibilidade de liberar o mesmo enunciado ao mudar indevidamente a origem declarada de `inedita` para `real`.
- **Alerta também no ponto de estudo:** o hub `3 - Materias/Informatica/informatica.md` lista os 13 itens e orienta a não utilizá-los em seleções feitas diretamente dos artigos.

**Nível de evidência:** a inspeção acima foi executada sobre os **conteúdos efetivos do GitHub**, reproduzindo a regra de extração. Isso **não substitui** executar `node scripts/test-camara-questions.js` no checkout do repositório, ainda pendente. O bloqueio em tempo de validação das sessões foi implementado, mas a seleção em todos os canais, o tratamento de paráfrases e as regressões de testes não foram certificados.

## Checkpoint de implementação editorial: correções e substitutas (11/11/2026)

Autorizadas as etapas de implementação da matéria de TI. Os **13 enunciados originais continuam não homologados e bloqueados**; foram produzidas **13 questões substitutas inéditas** com IDs `Sxx-n`, gabarito, explicação, variação/contraexemplo e fonte ou remissões no próprio artigo. O status **corrigido** significa que o conteúdo substituto está publicado e relido, não que foi aprovado por prova oficial ou executado em CI.

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
|:--|:--|:--|:--|:--|:--|
| 03 | acesso offline anunciado como garantia absoluta | S03-6, condição de sincronização concluída | `a0e94f9` | arquivo relido; fonte Microsoft | corrigido |
| 05 | MAIOR/MÁXIMO sem números no intervalo | S05-5, caso vazio versus numérico | `962ea4e` | arquivo relido; documentação Microsoft | corrigido |
| 07 | restrições de links de pasta e download | S07-5, controle de arquivo e escopo de permissão | `136df12` | arquivo relido; Microsoft Support/Learn | corrigido |
| 09 | cookie definido obrigatoriamente como arquivo em disco | S09-5, conceito HTTP e contexto first-party | `76553a0` | arquivo relido; MDN | corrigido |
| 13 | archive bit tratado como parte universal de backup | S13-1 e S13-4, mecanismo versus tipo | `583cbf6` | arquivo relido; Azure Backup | corrigido |
| 18 | deep learning absoluto e atribuições não verificadas ao Ulysses | S18-3 e S18-6 | `a5043fa` | arquivo relido; Câmara e MCTI | corrigido |
| 21 | distribuição marginal chamada conjunta | S21-4, distinção P(X), P(X,Y), P(Y\|X) | `94bf336` | arquivo relido; exemplo matemático | corrigido |
| 22 | CoT como garantia universal de acurácia | S22-2, limite de evidência experimental | `beef7b9` | arquivo relido; artigo de pesquisa | corrigido |
| 24 | polaridade universal dos percentuais | S24-4, metas e direção de melhoria | `edec6d1` | arquivo relido; casos aritméticos | corrigido |
| 27 | linha de base zero como obrigação universal | S27-5, codificação e distorção | `b199398` | arquivo relido; cálculo 98/100 | corrigido |
| 29 | materialização DAX universal | S29-1, Import com contexto de expressão padrão | `43d3a07`, `5a75aea` | arquivo relido; Microsoft Learn | corrigido |
| 18, 23 | instituição normativa EBIA, PL 2.338 e LGPD art. 20 | bibliografia, exemplos, 2 questões adicionais | `c51df03`, `9b161c6` | fontes oficiais Câmara/MCTI/LGPD | corrigido |
| 17 | generalizações sobre governo digital e responsabilização | conceitos e casos condicionados ao alcance legal | `356a754` | arquivo relido; Lei 14.129 | corrigido |
| 12 | presunção absoluta e contestação de assinatura digital | conceito de não repúdio e referência MP 2.200-2 | `e278375`, `bc4028b` | arquivo relido; texto oficial Câmara | corrigido |
| 19 | ausência de exemplo quantitativo de taxa-base | caso de 10.000, VPP 15,38%, questão inédita | `d31ab27` | aritmética explícita e arquivo relido | corrigido |
| 24 e 26 | ausência de ponte entre denominador e visualização | exemplos de população, seleção e gráfico | `5164bde`, `1ecf6a5` | arquivo relido e relações internas | corrigido |
| Hub TI | aviso obsoleto de substitutas como rascunho | referência às 13 substitutas publicadas | `c0c785e` | arquivo relido | corrigido |
| Teste CAM-TI | ausência de exigência de substituta rastreável | assert para IDs Sxx-n em 13 itens bloqueados | `7eb0f83` | código relido; **Node não executado** | pendente |

**Verificação da etapa:** os 11 artigos com itens bloqueados foram relidos após os commits; os **13 IDs de substituição** estão presentes e os **13 gabaritos originais continuam NÃO HOMOLOGADOS**. Foram mantidos `articleId`, aliases, caminhos e outros conteúdos. O teste `scripts/test-camara-questions.js` foi ampliado, mas a execução no GitHub Actions e a verificação integral de backlinks e renderização continuam pendentes.

**Integração:** o hub `3 - Materias/Informatica/informatica.md` agora informa que cada enunciado bloqueado possui substituta. Não foi criado artigo canônico novo: o inventário CAM-TI já tem os 28 artigos próprios e os casos necessários couberam em seções dos artigos existentes. Não houve alteração de catálogo ou de outras matérias.

**Próximo lote independente:** executar testes Node/CI em checkout e testar renderização da wiki, verificar correspondência dos links da nova seção e conferir a cobertura pedagógica transversal do edital. Não homologar automaticamente as 155 questões originais remanescentes; elas precisam de calibração externa quando usadas como simulado de banca.

## Checkpoint de implementação: harmonização das seções teóricas (11/11/2026)

As correções abaixo foram efetivamente salvas e verificadas por nova leitura dos arquivos. Abrangem **a teoria e os exemplos**, complementando as questões substitutas registradas no checkpoint anterior. As chaves originais marcadas NÃO HOMOLOGADO permaneceram preservadas.

| Artigo | Problema resolvido | Alteração principal | Commit | Validação | Estado |
|:--|:--|:--|:--|:--|:--|
| 03 | quadro quebrado, convergência de sync apresentada como instantânea | quadro Markdown legível e premissas de sincronização | `5367b51` | leitura após commit | corrigido |
| 04 | aceitar/rejeitar revisões confundido com eliminar comentários e metadados | controle de alterações e seções de cabeçalho | `8aa4408` | leitura após commit | corrigido |
| 05 | precedência e separadores do Excel confundidos, atalho não confirmado | tabela de operadores, PROCV condicionado a valores, remoção de atalho | `d375baa` | leitura após commit | corrigido |
| 06 | Morph exigindo nomes iguais, PPSX com fechamento universal | distinção entre pareamento automático e `!!` | `5dcfb92` | leitura após commit | corrigido |
| 07 | proteção do link e lixeira em regras absolutas | permissões, diagrama e tabela sem ranking de segurança arbitrário | `189d4df` | leitura após commit | corrigido |
| 08 | POP3 apagamento automático, TCP como pacotes, IP institucional inventado | sintaxe e tabela de protocolos, fluxo de bytes | `62e7ba3` | leitura após commit | corrigido |
| 09 | busca com autenticidade presumida e linha Markdown incompleta | limites de indexação e sintaxe | `f5e3831` | leitura após commit | corrigido |
| 10 | Reply-To ignorado, Cco como prova histórica, ZIP como proteção universal | tabela e caso de resposta revisados | `c83489f` | leitura após commit | corrigido |
| 11 | Google Drive confundido com chat Meet, lobby universal | tabela de armazenamento, papéis e salas de reunião | `d42eb93` | leitura após commit | corrigido |
| 13 | restauração integral, desempenho e sincronização garantidos | matriz de cópias/recuperação condicionada, RTO depende de testes | `2d4c87f` | leitura após commit | corrigido |
| 14 | rootkit limitado ao kernel, trojan obrigatoriamente backdoor | diagrama, definição, tabela e heurística atualizados | `aefba27` | leitura após commit | corrigido |
| 15 | sandbox e análise comportamental tratados como iguais, quarentena universalmente criptografada | mecanismos e limites separados | `e8d8fbe` | leitura após commit | corrigido |
| 16 | phishing individual e pharming coletivo como definições | escopo de ataque variável e fonte CERT.br | `22ad144` | leitura após commit | corrigido |
| 17 | escopo da LGPD art. 7º III pouco definido | bibliografia específica do tratamento público | `15a5ac9` | leitura após commit | corrigido |
| 18 | funções não verificadas do Ulysses, ANI/AGI absoluta, HITL universal | atribuições institucionais e limites da classificação | `38d3d1f` | leitura após commit | corrigido |
| 21 | corpo teórico ainda tratava P(X) como distribuição conjunta | definição marginal/junta consistente com S21-4 | `7c2f725` | leitura após commit | corrigido |
| 12 | conceito de não repúdio sem possibilidade de contestação | MP 2.200-2 e presunção não absoluta | `e278375`, `bc4028b` | leitura após commit | corrigido |

**Estado restante:** as 13 questões originais continuam bloqueadas, e as 13 substitutas estão publicadas e identificadas. **A execução integral do Node/CI ainda não ocorreu**; a conferência relatada é de arquivos e regras verificadas, não de execução automatizada. Há possíveis achados adicionais na auditoria histórica atualizada por agentes concorrentes, que exigem nova seleção de lote, sem reescrever este relatório. Também restam renderização de Mermaid, links da wiki e certificação externa integral dos exercícios restantes.

## Checkpoint de implementação: limites de IA e inferência visual (11/11/2026)

A revisão final dirigida sobre o backlog histórico avançou nas passagens conceituais ainda conflitantes, sem reiniciar inventário, alterar outras matérias ou apagar exercícios antigos.

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
|:--|:--|:--|:--|:--|:--|
| 21 | LLM como faixa fixa de parâmetros e ausência de raciocínio/consciência como fato técnico fechado; RAG como garantia absoluta | Separados mecanismo estatístico, tese acadêmica, avaliação empírica e riscos de ancoragem; diagrama e síntese alinhados | `ff3a716` | Relida versão salva; fundamentos contrastados com a crítica de Bender et al. | corrigido |
| 22 | Um erro aritmético em zero-shot usado como prova de causa necessária | Caso 2 distingue falha observada e mecanismo causal; exige verificação independente | `1399b6a` | Relida versão salva e enunciado C/E original preservado | corrigido |
| 23 | SHAP/LIME explicados como indicação causal de intervenção; classificação de biometria como obrigação automática de projeto legislativo | Explicações locais não causais, norma aplicável e finalidade delimitadas | `89f34c1` | Relida versão salva; LGPD e tramitação já referenciadas | corrigido |
| 28 | Diagrama de box plot confundia cercas teóricas e extremos observados; pontos atípicos associados automaticamente a irregularidades | Diagrama textual e caso de auditoria reformulados | `79117a7` | Relida versão salva e confronto com regra de Tukey do próprio artigo | corrigido |
| 30 | Caso de comunicação apresentava coincidência temporal como efeito da integração móvel e destaque como diagnóstico disciplinar | Anotações como hipóteses, sem inferência causal ou de infração automática | `af6e583` | Relida versão salva; Q6 sobre associação e causalidade preservada | corrigido |

**Controle de compatibilidade:** `scripts/camara-ti-question-guard.js` mantém a leitura dos blocos `### Item/Questão` com `NÃO HOMOLOGADO`; `scripts/test-camara-questions.js` verifica 13 enunciados bloqueados e IDs de substituição. Nesta sessão o código foi inspecionado no GitHub e suas referências foram conferidas, mas **não foi executado em Node.js**.

**Limite de execução:** acesso de checkout externo ao GitHub pelo terminal local indisponível (falha de resolução DNS); a conexão GitHub permite ler e escrever os arquivos remotamente. O workflow `.github/workflows/validar-publico.yml` está configurado para `pull_request` e contém `node scripts/test-camara-questions.js`; sem uma execução desse workflow para os commits, o status de teste permanece **pendente**. Não atribuir estado `validado` ao guard ou ao site apenas por inspeção textual.

**Próximas ações:** executar e reparar a suíte Node/CI, realizar link-check/renderização Mermaid/Markdown da publicação, conferir referências externas sensíveis a versão/licença e calibrar itens inéditos remanescentes por amostra de provas oficiais, mantendo claramente distintas questões reais Cebraspe e itens autorais.

## Checkpoint de conteúdo: pendências TI-117, TI-127, TI-128 e TI-129 (11/11/2026)

| Artigo | Problema resolvido | Alteração | Commit | Validação | Estado |
|:--|:--|:--|:--|:--|:--|
| 17, governança digital | diagrama confundia tipo de assinatura com escala universal de risco; exemplos de qualificada excediam hipóteses legais | diagrama e matriz vinculados ao art. 5º, §§ 1º–2º, da Lei 14.063/2020 | `cb4d690` | releitura após commit; texto oficial da Câmara cotejado; seis itens C/E preservados | corrigido |
| 25, transformação e qualidade | diagrama não explicitava o sentido de agregação; *forward fill* confundido com *backward fill*; mediana dita universalmente preferível | setas da granularidade fina à grossa, definição de ambas imputações, escolhas condicionais | `c0a2a40` | releitura após commit, exemplos e seis itens preservados | corrigido |
| 26, escolha de gráficos | limite fixo de cinco ou seis categorias para pizza e juízo perceptivo absoluto | substituído por critérios de legibilidade, tarefa e proximidade entre valores | `a47a420` | releitura após commit e manutenção dos seis itens C/E | corrigido |

**Parecer editorial atual:** não há necessidade comprovada de artigo novo para essas três lacunas. Os artigos específicos receberam conteúdo corrigido sem mudar `articleId`, `articleAliases`, caminhos ou a organização de exercícios. **Persistem validações de sistema**: teste completo Node.js, execução do workflow em PR, renderização Mermaid, verificação de todos os links e calibragem externa dos itens C/E não homologados. Os 13 enunciados originais NH continuam fora do treino e as substitutas estão nos próprios artigos. Portanto, **conteúdo substancialmente reparado**, mas **material não certificado integralmente**.

## Checkpoint de validação técnica e externa das substitutas (11/11/2026, horário de Brasília)

**Execução verificada:** o workflow [Publicar no GitHub Pages, run 43129779596](https://github.com/leorruas/concursos/actions/runs/43129779596) foi concluído em **sucesso** (registro GitHub: 12/11/2026 UTC), no commit `7f29ea5665b878244e4430d18120eec8e7d04618`. Foram consultados o resultado do workflow e o detalhamento do job `deploy`. Passaram `node scripts/test-camara-questions.js`, a montagem de `_site`, os testes de wikilinks em tabelas, o deploy Pages e a verificação `node scripts/verify-live-pages.js` executada pelo workflow. A comparação de commits confirmou que o commit do workflow **descende do checkpoint editorial** `2e5e65e56e711587bcbec7d05a7cce38f92e3fa5` (14 commits à frente, zero atrás). Assim, as correções desse checkpoint precederam a execução bem-sucedida.

**Checagem externa dirigida das 13 substitutas:** abaixo estão fontes de fundamento, além da conferência de enunciado/condição/gabarito nas notas. Os gabaritos são **inéditos e editoriais**, não gabaritos de prova real.

| Substituta | Evidência ou conferência de fundamento | Estado |
|:--|:--|:--|
| S03-6 | [Microsoft Files On-Demand](https://support.microsoft.com/pt-br/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows): cópia marcada para manter offline após baixar | validado |
| S05-5 | [Microsoft MAIOR](https://support.microsoft.com/pt-br/excel/functions/large-function) e [MÁXIMO](https://support.microsoft.com/pt-br/excel/functions/max-function): `k=1` com número versus intervalo vazio | validado |
| S07-5 | [Microsoft, bloquear download](https://support.microsoft.com/pt-br/onedrive/block-downloads-for-view-only-files-in-sharepoint-and-onedrive): recurso condicionado à conta/política e exibição não impede registro externo | validado |
| S09-5 | [RFC 6265](https://www.rfc-editor.org/rfc/rfc6265): `Set-Cookie`, `Cookie`, armazenamento em agente do usuário, sem exigir arquivo-texto individual | validado |
| S13-1 | [Microsoft attrib](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attrib): atributo de arquivamento ajustável; mecanismo afirmado somente sob a premissa expressa de rotina tradicional | validado |
| S13-4 | Diferença entre conceito diferencial (desde último completo) e mecanismo de detecção; premissa não exige `archive bit`; consistência com S13-1 e definição operacional do próprio artigo | validado |
| S18-3 | Distinção conceitual de aprendizagem de representações, sem prometer dispensa de dados/avaliação em todos os casos; comentário delimitado | validado |
| S18-6 | [Câmara, Ulysses na Consultoria Legislativa](https://www.camara.leg.br/assessoria-de-imprensa/568452-consultoria-legislativa-da-camara-utiliza-inteligencia-artificial-para-agilizar-trabalhos/): distribuição temática documentada, sem atribuição de transcrição não demonstrada | validado |
| S21-4 | Identidades de probabilidade `P(X,Y)`, `P(X)` e `P(Y|X)` verificadas por definição de conjunta/marginal/condicional | validado |
| S22-2 | [Wei et al., 2022](https://arxiv.org/abs/2201.11903): melhora empírica em tarefas/modelos estudados, sem generalização universal | validado |
| S24-4 | [SRI, orientação de indicadores](https://www.gov.br/sri/pt-br/backup-secretaria-de-governo/portalfederativo/guiainicio/prefeito/conteudos-importantes/planejamento-estrategico): polaridade pode ser positiva, negativa ou por limites | validado |
| S27-5 | [Datawrapper, zero em gráficos de barras](https://www.datawrapper.de/academy/why-our-column-and-bar-charts-start-at-zero): comprimento relativo pode ser distorcido por eixo truncado, com distinção de linha | validado |
| S29-1 | [Microsoft Learn, colunas calculadas](https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculated-columns): modo Import/Standard materializa; User Context ou DirectQuery podem não materializar | validado |

**Distinções importantes:** “validado” nesta tabela indica **fundamento conceitual da nova substituta conferido**, não confirmação de identidade ou frequência em provas Cebraspe. Os **13 itens originais NÃO HOMOLOGADOS seguem bloqueados**; as substitutas `Sxx-n` são versões autorais separadas, e os testes do sistema **não provam equivalência semântica de possíveis paráfrases**.

**Publicação:** o próprio workflow conferiu a consistência do manifesto e catálogo remoto após deploy. A URL do Pages não foi aberta visualmente nesta sessão; por isso, uma inspeção humana de Mermaid, cores, layout e cada link externo da versão publicada permanece **pendente**, embora build, testes automatizados e confirmação remota do site tenham passado.

**Conclusão desta validação:** o teste da Câmara, o build e o deploy **passaram**, e as 13 substitutas têm fundamento dirigido conferido. O corpus completo de exercícios inéditos **não passou por homologação item a item com provas oficiais**; os 50 itens piloto foram exercitados pela suíte, mas não foram apresentados como questões reais. A pendência remanescente é certificação editorial de todos os exercícios e inspeção visual/links em navegador, separada de falha de publicação.
