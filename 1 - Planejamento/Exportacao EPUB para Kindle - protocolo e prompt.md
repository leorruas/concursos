---
title: "Exportação EPUB para Kindle: protocolo e prompt reutilizável"
type: "protocolo-operacional"
status: "ativo"
created: 2026-11-15
updated: 2026-11-19
---

# Exportação EPUB para Kindle: protocolo e prompt reutilizável

Este protocolo orienta pedidos futuros como "gere um EPUB de Direito Constitucional" ou "atualize o livro de [matéria] no Kindle", com base no vault público [leorruas/concursos](https://github.com/leorruas/concursos). É reutilizável para qualquer matéria e concurso do catálogo. O conteúdo de estudo permanece em seus arquivos canônicos: o EPUB é um **artefato derivado de leitura**, não uma revisão jurídica ou editorial.

## Decisões de trabalho e eficiência

1. **Separar revisão e exportação.** A revisão didática e jurídica acontece nos artigos canônicos, por PR e publicação na main. A exportação apenas transforma fielmente a versão já publicada; não reescreve, resume ou "corrige" conceitos em silêncio. Se detectar um erro, relatar o localizador para correção no vault e preservar o texto de origem na edição solicitada, salvo autorização específica.
2. **Construir o conversor uma vez e reutilizá-lo.** Na primeira geração, montar pipeline reproduzível para transformar Markdown/Obsidian em XHTML, renderizar figuras e empacotar EPUB. Nas seguintes, atualizar apenas a entrada e os ativos que mudaram, sem redescobrir regras e redesenhar tudo. Um script persistente é preferível a passos manuais repetidos.
3. **Versão da fonte explícita.** Ler da main atual e registrar o SHA exato; todos os artigos de uma edição devem vir do mesmo commit. A edição publicada não muda durante a conversão. Se a main avançar, gerar uma nova edição identificada, sem misturar SHAs.
4. **Custo proporcional à mudança.** Usar hashes de conteúdo por artigo, tabela e diagrama para reaproveitar conversões e imagens estáveis. Reconstruir navegação/pacote final e validar a edição nova. Cache é uma implementação recomendada, não algo já disponível.
5. **Priorizar leitura.** EPUB 3 fluido (reflowable), com navegação e ajustes de fonte do Kindle. A conversão de diagramas, tabelas e figuras deve preservar compreensão em tela estreita e monocromática. Não depender de JavaScript ou elementos remotos.
6. **Privacidade e escopo.** Usar somente teoria e recursos do repositório público, salvo pedido explícito e autorização para outra fonte. Nunca inserir sessões ou desempenho do cofre privado leorruas/concurso-dados em EPUB distribuído.
7. **Não criar trabalho invisível.** Se alguma ferramenta não estiver acessível, registrar limitações e produzir a melhor versão verificável, sem inventar validações. Não declarar um EPUB criado ou testado sem arquivo e evidências.

## Questões e revisão editorial: atualização de 16/11/2026

Antes da exportação, a matéria deve estar revisada segundo [[1 - Planejamento/Revisao editorial para leitura e EPUB - diretrizes|diretrizes de leitura e EPUB]]. Retirar códigos técnicos **apenas dos títulos visíveis** e do sumário, conservando IDs e navegação interna. Não corrigir ou reescrever texto jurídico durante a exportação: se houver leis sem identificação, seções editoriais artificiais ou redundâncias, apontar as lacunas para a revisão canônica, publicar a correção no GitHub Pages e fixar um novo SHA da main.

**Respostas das questões no EPUB:** para cada questão comentada do escopo (C/E ou outro formato), manter enunciado e alternativas visíveis, com chamada **Ver resposta** para uma nota de rodapé EPUB 3 que contém **gabarito e justificativa originais completos**. Usar `<a epub:type="noteref">` e `<aside epub:type="footnote">`, IDs únicos, link de ida e volta e preferencialmente nota no mesmo documento XHTML da questão. O resultado desejado é um pop-up **nativo do Kindle nos leitores compatíveis**, sem modal em JavaScript; outros leitores devem conseguir navegar à nota e voltar à questão. O padrão vale para qualquer matéria e banca; não assumir que toda questão é C/E. Não revelar resposta automaticamente sob o enunciado, nem duplicar gabarito em texto corrido. Contar todas as questões na fonte e no EPUB, auditar correspondência um a um e testar a apresentação efetiva no Kindle Previewer/dispositivo quando disponível. Notas longas podem exigir navegação em tela inteira, conforme o leitor: não prometer pop-up universal. O comportamento do site é independente: resposta oculta com revelação por clique/toque/teclado e hover apenas como complemento, exigindo implementação e testes próprios na interface. O Markdown do vault deve continuar contendo gabarito e comentário completos.

## Decisão de produto: notas de respostas nativas no Kindle (19/11/2026)

**Decisão registrada:** os livros EPUB de estudo exportados deste vault devem apresentar a questão no corpo do capítulo e o **gabarito comentado em nota de rodapé vinculada**. A interação pretendida é: ler → responder mentalmente → tocar em `Ver resposta¹` → consultar gabarito e comentário em pop-up do leitor, se suportado → retomar a leitura. O mecanismo é a nota semântica do EPUB 3, não um modal HTML/CSS/JavaScript produzido pelo exportador.

**Contrato técnico:** inserir chamadas `epub:type="noteref"` para `<aside epub:type="footnote" role="doc-footnote">`, com `id` de resposta único no livro e `id` de chamada único, ambos com links de retorno. Preferir nota no mesmo XHTML da questão para maximizar compatibilidade, desde que a geração produza XHTML/OPF válido. Não depender de `display:none`, `hover`, scripts, conexão ou funcionalidade específica do aplicativo. Se a nota aparecer em tela própria ou ao final do capítulo em um leitor, a navegação e o retorno precisam continuar funcionando. Leitores Kindle e conversões do Send to Kindle podem apresentar notas de modo distinto.

**Regra de integridade:** manter exatamente a pergunta, alternativas, gabarito e explicação da fonte canônica. Para cada questão: exatamente uma chamada funcional para sua resposta; não inverter, omitir ou reutilizar comentários. Identificar divergências em relatório sem corrigir silenciosamente. Preservar fundamento legal, exemplo e referência do comentário; se houver comentários grandes, usar parágrafos curtos dentro da nota sem truncá-los. Quantidade de notas com resposta deve coincidir com a quantidade de questões mapeadas, explicando exceções documentadas.

**Validação:** executar EPUBCheck e testes de integridade das chamadas/IDs/retornos; abrir questões no início, meio e fim do EPUB e notas de comentário curto e longo. No Kindle Previewer ou dispositivo Kindle, confirmar especificamente se o toque produz pop-up ou navegação, se a resposta é legível e se há retorno. Registrar modelos, aplicativos, versões e limitações realmente observados. Sem esses testes, declarar **compatibilidade estrutural EPUB**, nunca “modal Kindle testado”.

## Pipeline recomendado

**Inventário:** ler AGENTS.md, me.md, index.md, catálogo v2 e a pasta da matéria escolhida. Listar arquivos Markdown existentes e articleIds, diferenciando artigo, hub, índice e títulos apenas planejados. Tratar arquivos com número repetido como distintos; ordenar por pré-requisitos e progressão temática. Confirmar edital/cargo somente para definir o escopo, não para alterar teoria.

**Normalização:** remover apenas metadados de frontmatter e elementos de navegação exclusivos do site. Preservar integralmente texto, listas, tabelas, exemplos, questões Certo/Errado com gabarito e explicação, fórmulas, fontes e seções. Resolver wikilinks e links relativos; transformar vínculos entre artigos e entre headings em âncoras internas do EPUB, preservando links externos. Proteger blocos de código e Mermaid antes de processar comentários Obsidian, conforme AGENTS.md.

**Tabelas:** manter tabelas XHTML simples apenas quando legíveis em telas pequenas. Para quadros largos, preferir transformar cada linha em blocos verticais rotulados, com os mesmos dados e relações. Usar imagem somente quando a disposição espacial for indispensável, acompanhada de versão textual e legenda. Nunca resolver largura reduzindo a fonte a ponto de impedir leitura; nunca suprimir células.

**Diagramas e figuras:** renderizar cada Mermaid em imagem **antes** de empacotar. Preferir PNG de boa resolução, fundo claro, texto escuro, contraste em escala de cinza e fluxo vertical; SVG só quando testado no leitor-alvo. Dividir diagramas muito amplos, se necessário, mantendo as relações originais. Inserir textos alternativos e, para diagramas conceituais, transcrição estruturada das relações. Incorporar todos os ativos ao EPUB, sem depender de URLs do Pages. Validar setas, rótulos, acentos, cortes e escala.

**Diagramação:** gerar capa simples, metadados coerentes, sumário EPUB 3 navegável, partes e capítulos, hierarquia de títulos e CSS de leitura fluida. Evitar colunas, larguras fixas, caixas cromáticas essenciais, fontes externas e paginação impressa. Preservar possibilidades de ajuste da fonte pelo leitor.

**Validação:** rodar EPUBCheck se disponível; verificar pacote, manifesto, TOC, links/âncoras, presença de todos os arquivos e mídias, quantidade de tabelas/diagramas, integridade textual e caracteres. Abrir uma amostra com tabela simples, tabela complexa e Mermaid em leitor EPUB. Testar no Kindle Previewer/Kindle quando possível; esse teste não pode ser declarado sem execução real. Depois revisar capítulos iniciais, intermediários e finais. Enviar EPUB por Send to Kindle é uma operação separada, somente quando pedida.

**Entrega:** fornecer o EPUB efetivamente gerado e um relatório sucinto com escopo, capítulos, SHA da fonte, tabelas e figuras tratadas, testes realizados, limitações e, quando aplicável, scripts/conversor reutilizável. Nome sugerido: [materia]-[concurso]-[sha-curto].epub. Não publicar binário no repositório por padrão.

## Prompt canônico para repetir a tarefa

Copiar e adaptar os campos entre colchetes. Quando o pedido ocorrer neste projeto, o agente deve recuperar e seguir este protocolo diretamente, sem exigir que a pessoa cole o prompt inteiro.

~~~text
MISSÃO: GERAR OU ATUALIZAR UM EPUB 3 DE ESTUDO PARA KINDLE

Fonte pública: https://github.com/leorruas/concursos
MATÉRIA: [MATÉRIA]
CONCURSO: [CONCURSO E CARGO, SE HOUVER]
ESCOPO: [TODOS OS ARTIGOS DA MATÉRIA OU LISTA ESPECÍFICA]
TÍTULO: [TÍTULO DO LIVRO]
MODO: [PRIMEIRA GERAÇÃO / ATUALIZAÇÃO]

1. CONTRATO E INVENTÁRIO
Leia AGENTS.md, CHAT.md, me.md, index.md e o protocolo
"1 - Planejamento/Exportacao EPUB para Kindle - protocolo e prompt.md",
além das "Revisao editorial para leitura e EPUB - diretrizes.md".
Fixe um único SHA da main e use esse mesmo commit para todos os arquivos.
Identifique concurso/subjectId no catálogo
data/catalogo-materias-por-concurso.json e resolva os articleIds
para os arquivos reais, verificando sua existência. O catálogo define
pertencimento ao concurso; a ordem pedagógica é a do hub da matéria,
filtrada pelos artigos desse concurso, conforme AGENTS.md. Documente
artigos de apoio/exclusões e confira a coerência com o catálogo, sem
reordenar articleIds apenas para a exportação. O hub pode entrar como
apresentação/sumário, mas não conta como capítulo teórico, salvo pedido.
Não ordenar capítulos por nome/número do arquivo.
Distinguir matérias parecidas (por exemplo, Direito Administrativo
e Administração Pública) e não misturar seus capítulos.

2. INTEGRIDADE E ORGANIZAÇÃO
Converta o Markdown canônico integralmente, sem resumo, atualização
jurídica ou correções silenciosas. Preserve explicações, leis, fontes,
exemplos, tabelas, fórmulas, questões comentadas, relações entre artigos
e links. Remova somente frontmatter técnico e componentes do site.
Limpe prefixos técnicos dos títulos exibidos, preservando articleId
e âncoras. Gere EPUB 3 reflowable, capa tipográfica, metadados, índice
navegável, capítulos na ordem do catálogo e referências bibliográficas.
Inclua glossário apenas quando houver fonte confiável.

3. CONTRATO CENTRAL: QUESTÕES COM RESPOSTA EM NOTA KNDLE
Inventarie cada questão e vincule enunciado, alternativas, gabarito
e comentário completos da fonte. Mantenha enunciado/alternativas no
fluxo principal e mostre somente "Ver resposta¹" como acionador.
O gabarito e o comentário ficam juntos em uma nota semântica do EPUB 3,
sem aparecer logo abaixo da questão e sem duplicação em outro bloco.

Exemplo de XHTML, a adaptar aos namespaces e ao pacote EPUB:
<p id="q01-enunciado">Questão 01. [enunciado original]</p>
<p>( ) Certo<br />( ) Errado</p>
<p><a id="q01-chamada" epub:type="noteref"
      href="#q01-nota">Ver resposta¹</a></p>
<aside id="q01-nota" epub:type="footnote" role="doc-footnote">
  <p><strong>Gabarito: [gabarito original].</strong></p>
  <p>[comentário original integral e referências]</p>
  <p><a href="#q01-chamada">Voltar à questão</a></p>
</aside>

Crie IDs exclusivos no livro, estáveis quando possível. Garanta que a
chamada e a nota apontem corretamente uma à outra. Prefira nota no mesmo
XHTML da questão, se tecnicamente compatível. A janela pop-up deve ser
nativa do Kindle quando suportada: NÃO usar modal JavaScript, hover,
CSS de ocultação ou scripts para revelar respostas. Se o Kindle ou
outro leitor abrir uma página de notas em vez de pop-up, o link
de retorno deve funcionar. Não prometer pop-up universal.
Para comentários longos, organizar parágrafos sem reduzir conteúdo.
Aplicar o padrão também a questões de múltipla escolha ou de outros
formatos, preservando todas as alternativas originais.

4. LEITURA E RECURSOS GRÁFICOS
Usar CSS fluido e tipografia controlada pelo leitor, com leitura clara
em tela pequena e escala de cinza, nos temas claro/escuro.
Tabelas simples: XHTML; tabelas largas: blocos verticais rotulados
sem perda de dados. Converter Mermaid em figuras locais legíveis,
preferindo PNG com contraste alto como compatibilidade inicial;
SVG apenas com teste no leitor de destino. Acrescentar alt e
transcrição das relações dos diagramas, quando pertinente.
Links internos entre capítulos e headings devem continuar navegáveis.
Não depender de Internet, JavaScript ou fontes externas.

5. PIPELINE E GARANTIA DE QUALIDADE
Criar/usar script de conversão reproduzível e reutilizável por matéria,
concurso, escopo e SHA. Em atualizações, reaproveitar trabalho com hashes.
Não alterar os artigos canônicos nem inserir dados privados.
Conferir:
- número de capítulos igual ao escopo real do catálogo;
- número de questões na fonte = número de questões no EPUB;
- cada questão com uma nota correspondente e gabarito correto;
- IDs únicos; cada noteref com destino válido e volta funcional;
- sumário, OPF, XHTML, links internos, fontes, tabelas e imagens;
- EPUBCheck sem falhas, ou relatar cada limitação;
- abertura em leitor EPUB e Kindle Previewer quando disponíveis;
- em questão inicial, intermediária e final, testar pop-up/alternativa
  de navegação, resposta completa e retorno, incluindo notas longas.

Registrar exatamente que ambiente/modelo/versão foi testado.
Não confundir validade EPUB com confirmação de pop-up no Kindle.

6. ENTREGA E ESTADO
Entregar o EPUB binário real (não só código ou instruções), relatório
de inventário de capítulos, total de questões/notas, diagramas/tabelas,
SHA de origem, validações, comportamento Kindle observado, falhas e
caminho do pipeline para reutilização.
Nome sugerido: [materia]-[concurso]-[sha-curto].epub.
Não enviar ao Kindle nem publicar binários no GitHub sem pedido.
Se uma ferramenta não estiver disponível, registrar a limitação e
entregar o máximo que foi efetivamente produzido.
~~~

## Próxima melhoria possível

Quando houver demanda recorrente, implementar um conversor versionado (por exemplo, scripts/export-epub/) que aceite matéria, concurso e commit de origem como parâmetros. Ferramentas candidatas: Pandoc para EPUB, Mermaid CLI para diagramas e EPUBCheck para validação. São opções técnicas a testar, não dependências já instaladas ou funções comprovadamente prontas neste vault.

O primeiro teste visual deveria usar três artigos representativos: texto corrido, quadro comparativo largo e fluxograma Mermaid. Uma vez aprovado, aplicar o mesmo template ao conjunto completo.
