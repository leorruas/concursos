---
title: "Exportação EPUB para Kindle: protocolo e prompt reutilizável"
type: "protocolo-operacional"
status: "ativo"
created: 2026-11-15
updated: 2026-11-16
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

**Respostas das questões no EPUB:** transformar gabarito e justificativa de cada questão C/E em uma nota de rodapé clicável e com link de retorno. Preferir semântica EPUB 3 (noteref/footnote), âncoras únicas, `Ver resposta` como rótulo e fallback que funcione sem popup; testar em Kindle Previewer e em um leitor EPUB quando disponíveis. Evitar revelar gabarito logo após o item no fluxo de leitura. O comportamento do site é outro: resposta oculta com revelação por clique/toque/teclado e hover apenas como complemento, exigindo implementação e testes próprios na interface. O Markdown do vault deve continuar contendo gabarito e comentário completos.

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
Gere ou atualize um livro EPUB para Kindle a partir do repositório
https://github.com/leorruas/concursos.

MATÉRIA: [MATÉRIA]
CONCURSO: [CONCURSO E CARGO, SE HOUVER]
ESCOPO: [TODOS OS ARTIGOS DA MATÉRIA, OU LISTA ESPECÍFICA]
TÍTULO DO LIVRO: [TÍTULO]
MODO: [ATUALIZAÇÃO INCREMENTAL, SE HOUVER CONVERSOR; CASO CONTRÁRIO, PRIMEIRA GERAÇÃO]

Leia AGENTS.md, me.md, index.md, o catálogo e a nota
"1 - Planejamento/Exportacao EPUB para Kindle - protocolo e prompt.md".
Use exclusivamente a versão mais recente e consistente da branch main,
fixando o SHA de origem. Inventarie todos os artigos reais do escopo, incluindo
nomes repetidos, sem tratar índices ou títulos planejados como capítulos.

Converta integralmente o conteúdo, sem resumir ou fazer revisão jurídica
durante a exportação. Preserve exemplos, questões C/E comentadas na fonte, fontes,
referências, tabelas, fórmulas, figuras e links. Organize os capítulos em
sequência didática com sumário navegável, âncoras internas e EPUB 3 fluido.\nConverta cada resposta e justificativa de questão C/E em nota clicável\ncom retorno ao enunciado, fallback sem popup e teste de compatibilidade;\nnão apresente o gabarito aberto logo após a pergunta no EPUB.\nUse títulos de leitura sem prefixos editoriais e preserve os IDs em metadados.

Adapte tabelas para telas pequenas: tabelas simples em XHTML, tabelas largas
preferencialmente em blocos verticais com toda a informação, e imagens com
alternativa textual quando a estrutura espacial for indispensável. Renderize
Mermaid como imagem incorporada, legível em escala de cinza, reorganizando ou
dividindo diagramas grandes sem alterar relações. Trate também os demais ativos
locais, sem depender de JavaScript ou recursos externos.

Na primeira execução, crie um pipeline reutilizável. Nas atualizações, compare
hashes e processe apenas os artigos e diagramas alterados, reconstruindo e
validando o EPUB final. Separe esta atividade de revisão editorial do vault.

Valide links, sumário, texto integral, imagens, tabelas e manifesto. Rode
EPUBCheck e faça testes em leitor EPUB/Kindle quando as ferramentas existirem,
indicando o que de fato foi testado. Produza o arquivo EPUB real para download
e informe número de capítulos, diagramas e tabelas, SHA de origem, limitações
e o caminho do conversor para atualizações futuras.

Não entregue somente instruções ou scripts se for possível gerar o EPUB agora.
Se a execução for bloqueada, descreva o bloqueio sem afirmar conclusão.
~~~

## Próxima melhoria possível

Quando houver demanda recorrente, implementar um conversor versionado (por exemplo, scripts/export-epub/) que aceite matéria, concurso e commit de origem como parâmetros. Ferramentas candidatas: Pandoc para EPUB, Mermaid CLI para diagramas e EPUBCheck para validação. São opções técnicas a testar, não dependências já instaladas ou funções comprovadamente prontas neste vault.

O primeiro teste visual deveria usar três artigos representativos: texto corrido, quadro comparativo largo e fluxograma Mermaid. Uma vez aprovado, aplicar o mesmo template ao conjunto completo.
