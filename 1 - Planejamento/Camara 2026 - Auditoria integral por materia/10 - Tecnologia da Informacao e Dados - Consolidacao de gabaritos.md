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
