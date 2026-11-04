---
title: "Plano de implementação: filtro de matérias e artigos por concurso"
type: "planejamento-tecnico"
status: "proposto"
created: 2026-11-04
updated: 2026-11-04
---

# Plano de implementação: filtro de matérias e artigos por concurso

## Objetivo

Ao escolher CGU, Dataprev ou Câmara no seletor do painel, apresentar **somente as matérias do edital daquele concurso**, com numeração própria, sem assuntos que pertençam exclusivamente a outra seleção. Ao entrar numa matéria, apresentar **o mesmo seletor de concursos no cabeçalho da lista de artigos**, permitindo mudar o filtro sem retornar à home. O mecanismo deve funcionar para futuros concursos a partir de seus dados, sem acrescentar lógica específica à interface.

O filtro usa `concursoId`, não o nome da banca: CGU 2026 e Câmara 2026 são Cebraspe (Certo ou Errado), mas têm programas diferentes. Dataprev 2026 é FGV (múltipla escolha A a E). Artigos teóricos podem ser compartilhados entre editais sem cópias de arquivos.

## Diagnóstico do código atual

- `web/02-data-home.js`: `renderizarPainelConcursoHome()` já permite escolher o concurso e persiste `concurso_ativo_id`. Entretanto, `renderizarPastas()` mostra todas as categorias de `todasAsPastas`, e `abrirDisciplina()` mostra todos os artigos da pasta e **não possui seletor**.
- `web/02a-lazy-data.js`: inicialização ativa com `manifest.json` e `search-index.json`. O filtro deve trabalhar com metadados e caminhos, sem baixar o texto de todos os artigos.
- `web/01-core.js`: as matérias mais antigas possuem números editoriais estáticos; novas categorias antes recebiam `•`. **Correção imediata feita em 04/11/2026:** inclusão das matérias novas na tabela de metadados, com números 17 a 28, e numeração automática para futuras categorias. Esses números são da biblioteca geral, **provisórios** até o filtro por concurso.
- `data/concursos.json` possui Dataprev, CGU e Câmara. `data/planos-estudo/cgu-2026.json` tem **15 frentes** da CGU, mas não existem planos equivalentes neste diretório para Dataprev e Câmara.
- `data/edital-itens.json` associa parte das notas à Dataprev, mas não é uma lista completa de disciplinas ou artigos. `data/contexto-estudo/indice.json` serve à retomada de estudo e possui associações genéricas: não usá-lo como prova de pertinência ao edital, nem publicar informações privadas.
- `scripts/build-site.js` usa allowlist de JSONs públicos. É necessário autorizar expressamente apenas um **catálogo de navegação seguro**, validado contra o manifesto, sem expor sessões, contextos pessoais ou projetos privados.
- `web/00-route-utils.js`, `web/07-router-init.js` e `web/03-article-navigation.js` controlam links diretos, breadcrumbs, botão de retorno e fragmentos de seção: precisam continuar funcionando.

## Contrato de dados proposto

Criar `data/catalogo-materias-por-concurso.json`, com a relação explícita **concurso → matéria → artigos**. Usar IDs estáveis e os caminhos reais do `manifest.json`. Exemplo ilustrativo:

```json
{
  "schemaVersion": 1,
  "contests": [
    {
      "concursoId": "cgu-2026",
      "subjects": [
        {
          "subjectId": "politicas-publicas",
          "categoria": "Avaliacao de Politicas Publicas",
          "ordem": 13,
          "rotulo": "Avaliação de políticas públicas",
          "itemEdital": "P3.3",
          "hubSourcePath": "3 - Materias/Avaliacao de Politicas Publicas/avaliacao-de-politicas-publicas.md",
          "articleSourcePaths": [
            "3 - Materias/Avaliacao de Politicas Publicas/01 - teoria da mudanca.md"
          ]
        }
      ]
    }
  ]
}
```

Regras: uma matéria é exibida porque **integra o edital**, mesmo se ainda não tiver nota específica; uma nota entra na lista porque seu `sourcePath` está vinculado explicitamente àquele concurso e matéria, e não por simples coincidência de pasta. Um mesmo artigo pode servir a várias provas. O hub canônico deve aparecer uma única vez, em primeiro lugar, quando aplicável. Não atribuir conclusão, domínio ou pontuação por existir um artigo.

Produzir o primeiro mapeamento da CGU a partir de suas 15 frentes e unidades. Para Dataprev e Câmara, conferir os **respectivos editais e checklists**, montando os mapas próprios: **não** herdar automaticamente todas as matérias do índice genérico de retomada. Separar artigos diretamente cobertos de referências de apoio quando houver diferenças relevantes de escopo.

## Comportamento da interface

**Na home:** ao clicar no seletor atual, atualizar concurso selecionado, data e banca, grade de matérias, ordem, contagem e numeração. Para CGU, a grade deve exibir **01 a 15**, exatamente as frentes previstas no plano. Para Dataprev e Câmara, usar a numeração e as matérias de seus respectivos programas. Simulados e desempenho permanecem em áreas próprias, sem entrar indevidamente na grade.

**Na lista de artigos da matéria:** acrescentar o **mesmo seletor visual** acima da lista, próximo ao título e contador. Selecionar outro concurso atualiza `concurso_ativo_id`, os botões, o contador e **somente os artigos pertinentes àquela matéria naquele concurso**. Reordenar e renumerar os artigos de 01 a N. A troca deve funcionar dentro da matéria, sem voltar à home.

**Matéria ausente no concurso novo:** manter a página da matéria e apresentar um estado vazio explícito, como "Esta matéria não integra o programa selecionado", com possibilidade de voltar às matérias ou abrir a biblioteca geral. Evitar redirecionamento silencioso para uma disciplina diferente.

**Links e histórico:** preservar o acesso direto a qualquer artigo público, mesmo que esteja fora do filtro ativo. Considerar contexto `?concurso=<id>` nas rotas `#/disciplina/<categoria>`, sem quebrar `?secao=` existente nas rotas de artigo; atualizar também o parser. Ordem de preferência para concurso: parâmetro válido de URL, preferência salva, concurso padrão. Testar retorno e avanço do navegador, breadcrumbs e links internos.

**Busca:** usar, de preferência, o concurso selecionado como filtro inicial, com opção visível de "Buscar em todo o vault". Não remover o artigo do catálogo publicado porque não está no concurso ativo; filtrar somente a apresentação. Em falhas de carregamento, avisar que o filtro não está disponível e oferecer biblioteca geral explicitamente, evitando mostrar tudo como se pertencesse ao edital.

## Etapas de implementação

1. **Mapear o programa por concurso.** Conferir as 15 frentes CGU, extrair matérias de Dataprev/FGV e Câmara/Cebraspe de seus editais e checklists, validar IDs, hubs e `sourcePath` contra o manifesto, e criar o catálogo autorizado. Nunca transformar notas genéricas em conteúdo supostamente previsto no edital.
2. **Construir o filtro único.** Criar uma rotina para resolver o concurso ativo, buscar suas matérias e artigos e devolver estado consistente à home e ao cabeçalho da matéria. O seletor da home e o seletor da lista de artigos chamam a mesma função, sem listeners duplicados nem conflito com `localStorage`.
3. **Atualizar o layout.** Aplicar a ordenação e numeração do edital na grade, exibir o seletor no cabeçalho da disciplina, atualizar listas/contadores e tratar matérias sem artigos ou fora do concurso. Reaproveitar os estilos `concurso-btn-opcao` e manter acessibilidade por teclado e em telas pequenas.
4. **Preservar rotas e busca.** Atualizar helpers de URL, retorno, breadcrumb, navegação entre artigos, pesquisa e opção de biblioteca completa. O contexto de prova e a banca não podem ser trocados por uma regra global de categoria.
5. **Testar e publicar.** Criar testes de troca CGU ↔ Dataprev ↔ Câmara na home e dentro de matérias, artigos compartilhados, temas sem nota, links diretos com `secao`, busca geral, persistência, estado vazio e privacidade. Manter `scripts/test-home-without-provas.js`, `scripts/test-hub-ordering.js`, `scripts/test-search-routing.js` e demais testes existentes. Rodar `node scripts/preflight-vault.js`, build, validação dos índices e publicação; confirmar o catálogo e as páginas no GitHub Pages.

## Execução por fases (iniciada em 04/11/2026)

**Fase 1: catálogo e contrato público implementados.** Arquivo `data/catalogo-materias-por-concurso.json` vincula as 15 matérias CGU, seis frentes Dataprev e onze frentes Câmara a hubs e artigos públicos explicitamente relacionados. O teste `scripts/test-contest-catalog.js` valida rotas, integridade, ordem e rejeição de arquivos privados. O build valida o catálogo contra o manifesto, copia apenas o JSON autorizado e a verificação do Pages confere também esse arquivo ao vivo.

Esta primeira associação é um **mapa editorial de navegação**, não uma declaração de cobertura integral dos editais. Em particular, alguns assuntos sem nota especializada apontam apenas para o hub, enquanto notas compartilhadas são vinculadas por caminho sem duplicação.

**Fase 2: grade de matérias filtrada na home.** O catálogo passa a alimentar a grade conforme o concurso selecionado, com ordem 01–15 (CGU), 01–06 (Dataprev) e 01–11 (Câmara). A escolha permanece válida mesmo depois da prova e é salva numa única função de seleção. Os testes verificam a troca entre três concursos sem misturar disciplinas. O modo de biblioteca geral ainda é o fallback identificado quando o catálogo falha.

**Fase 3: seletor dentro da matéria e filtragem dos artigos.** O mesmo seletor textual da home passou a aparecer acima da lista de artigos. O sistema usa `articleSourcePaths` do par concurso/matéria, inclui o hub uma única vez, atualiza a numeração da lista e informa quando uma matéria não está prevista para o concurso recém-selecionado. O teste cobre artigos compartilhados, listas distintas, hub único e ausência de conteúdo.

**Fase 4: rotas contextuais e biblioteca completa.** As rotas de home, matéria e artigo suportam `?concurso=<id>` ou `?biblioteca=1`; a seção do artigo continua em `?secao=<id>`. O seletor de ambas as telas oferece "todas matérias" e preserva o concurso no histórico. Artigos acessados por links diretos permanecem disponíveis mesmo fora do programa, com aviso; a navegação anterior/próximo usa a lista filtrada. Links sem contexto continuam válidos.

**Fase 5: busca contextual.** Resultados são filtrados pelos mesmos `sourcePath` do catálogo do concurso, antes de aplicar o ranking; assim, a busca não mistura conteúdos exclusivos de outros editais. Acima dos resultados, é possível alternar entre "buscar em [concurso]" e "todo o vault", inclusive quando não há resultados. O modo biblioteca geral busca em todo o conteúdo público. O escopo global temporário é reiniciado ao mudar de concurso; a busca mantém o algoritmo de relevância já validado.

**Refinamento final de navegação e busca:** quando uma nota aparece vinculada a outra matéria, a URL inclui `origem` para permitir voltar à lista correta e navegar entre notas por edital. Metadados editoriais de um concurso deixam de influenciar o ranking contextual de outro; o índice é reconstruído ao trocar o concurso. Ao limpar a busca, o painel principal reaparece.

**Verificação final:** testes de catálogo, filtros da home e das matérias, rotas com seção e origem, busca contextual e global, build e auditoria de publicação do GitHub Pages.

## Critérios de aceite

- CGU selecionada: **15 matérias**, numeradas de **01 a 15**, na ordem do plano; nenhum assunto de outro concurso aparece por inclusão automática.
- Dataprev selecionada: apenas matérias comprovadas do perfil Comunicação Social no edital FGV. Câmara: apenas matérias do edital Cebraspe. Um único artigo pode aparecer legitimamente nos dois programas.
- Dentro de qualquer matéria, o seletor também aparece e atualiza a lista de artigos sem navegação forçada. Hub e artigos relevantes ficam visíveis uma única vez e a numeração interna é recalculada.
- Matéria não prevista no concurso escolhido gera mensagem clara; artigo público aberto por link direto permanece acessível. Os estados de concurso são preservados na navegação.
- Não há vazamento de dados de estudo ou arquivos privados; a busca geral continua disponível e os testes mais o Pages confirmam o comportamento implantado.

**Estado atual:** catálogo público, grade e artigos filtrados, seletor nas duas superfícies, URLs contextuais, biblioteca geral e busca contextual implementados. A pertinência de cada artigo segue o catálogo editorial, não inferência automática por palavras do título.

## Evolução futura: artigos independentes das pastas de matéria

**Registrado em 04/11/2026. Estado: planejado para execução posterior.** Esta seção complementa as fases já implementadas. O registro deste plano não autoriza uma migração física imediata nem altera os artigos, o filtro ou os registros de estudo atuais.

### Resultado desejado

A indicação de matéria deve vir do filtro e do percurso do concurso selecionado. Cada artigo tem uma identidade própria e pode integrar várias matérias, inclusive no mesmo edital, sem ser duplicado. As pastas exibidas na interface passam a representar agrupamentos virtuais do programa; o local físico de armazenamento não define pertencimento, ordem, número ou banca.

Exemplo: um artigo sobre controle da Administração pode aparecer em Direito Administrativo na Dataprev e em Estado e Democracia ou Auditoria na CGU, conforme pertinência efetivamente conferida. O texto canônico continua único. Na CGU, a navegação e os exercícios seguem Cebraspe C/E; na Dataprev, FGV. A existência do artigo não marca nenhum desses percursos como estudado.

O breadcrumb deve mostrar o caminho de leitura escolhido: concurso → matéria de origem → artigo. A matéria de origem vem da navegação, como no parâmetro `origem` já existente; nunca deve ser deduzida exclusivamente da pasta física. Um acesso direto sem origem válida apresenta o artigo e seus vínculos disponíveis, sem inventar uma matéria principal. Na biblioteca geral, oferecer pesquisa e agrupamentos temáticos independentes dos editais, preservando acesso ao conteúdo público completo.

### O que já existe e o que ainda limita o reaproveitamento

O catálogo `data/catalogo-materias-por-concurso.json` já expressa vínculos explícitos concurso/matéria/artigos. As listas filtradas, a biblioteca geral, a busca contextual e as rotas com origem já foram implementadas. O reaproveitamento entre matérias, portanto, já é possível sem mover arquivos.

A dívida restante é o acoplamento a `sourcePath`, `categoria` e caminhos de hubs: manifesto, busca, URLs, wikilinks, referências de questões, planos e contextos ainda dependem desses endereços. Achatar as pastas agora deslocaria o problema para links e histórico. Primeiro desacoplar identidade, armazenamento e apresentação; decidir a organização física depois do piloto.

### Modelo e fonte de verdade

- **Artigo:** um `articleId` estável e único, sem número de unidade, nome de concurso ou pasta no identificador. Guardar a identidade no frontmatter da própria nota. Preservar título, fontes, datas e âncoras de seção; o caminho continua como endereço físico durante a transição.
- **Percurso:** o catálogo existente continua como fonte única de pertencimento, ordem, rótulo contextual e relação com o edital. Evoluir seu contrato para referências por `articleId`, inclusive hubs quando forem notas, em vez de criar outro mapa concorrente. Um mesmo ID pode participar de vários pares concurso/matéria, com papel de conteúdo principal ou apoio quando necessário.
- **Resolução:** o build gera um índice `articleId → sourcePath atual`, aliases legados e metadados públicos a partir das notas. Esse índice é derivado, sem manutenção manual. Durante a transição, aceitar caminhos antigos com resolução validada para a identidade canônica; estabelecer quando o formato antigo deixará de ser emitido.
- **Estudo:** sessões e desempenho continuam separados por concurso e unidade. Não recalcular exposição ou domínio a partir dos vínculos editoriais. Novos registros passam a poder citar ID e seção; registros históricos preservam seus caminhos e são resolvidos por compatibilidade, sem reescrever respostas ou inventar sessões.
- **Conteúdo:** teoria comum é compartilhada; diferenças de escopo, vigência normativa e cobrança devem ficar explícitas. Não unificar artigos só porque os títulos se parecem, nem multiplicar uma mesma teoria por banca. Recortes específicos podem ser seções ou notas próprias quando houver autonomia conceitual.

Não registrar as mesmas associações de concurso simultaneamente no frontmatter e no catálogo. A nota fornece identidade e conteúdo; o catálogo fornece sua participação nos percursos. Contagens e listas são geradas.

### Implementação posterior por etapas

1. **Inventário de dependências e piloto sem movimentação.** Levantar uso de pastas em `scripts/build-site.js`, `scripts/contest-catalog.js`, componentes `web/`, manifesto, busca, hubs, wikilinks, referências de sessões/ledger, catálogo curricular e contextos. Escolher um artigo já compartilhado entre matérias para testar a resolução. Separar agrupamentos de navegação de permissões de publicação: desvincular uma nota de um concurso não pode expô-la ou apagá-la da biblioteca.
2. **Identidade e compatibilidade.** Introduzir IDs únicos nas notas do piloto, gerar o índice de resolução e aceitar referências antigas. Planejar URLs estáveis por identidade, mantendo rotas anteriores e fragmentos de seção funcionando. Tratar colisões de nomes e IDs como erros explícitos; mudanças futuras de título não podem trocar a identidade.
3. **Catálogo e interface por vínculo.** Versionar o contrato existente e migrar os vínculos do piloto para IDs. Resolver artigos sem exigir que pertençam à pasta da matéria selecionada. Ajustar lista, breadcrumb, anterior/próximo, busca, contagens, origem e restauração do histórico. Dentro de um percurso, cada artigo aparece uma vez; o mesmo artigo pode aparecer legitimamente em outros percursos.
4. **Integração com a continuidade de estudo.** Permitir referências por ID/seção no plano e nos novos checkpoints, mantendo resolução das referências antigas. Gerar contextos com endereço legível da nota e ponto de retomada. O fechamento editorial continua refinando o artigo canônico correspondente, independentemente da matéria em que foi estudado. Preservar a separação entre recibo editorial, conclusão didática e retenção.
5. **Expansão gradual e decisão sobre armazenamento.** Após validar o piloto, ampliar a identidade estável para as demais notas. A hipótese inicial é manter os arquivos onde estão enquanto as pastas deixam de determinar a navegação. Caso uma biblioteca física neutra ainda seja útil, elaborar mapa de movimentos, aliases, atualização de links/âncoras e reversão antes de mover lotes. Evitar nomes apenas numerados e preservar legibilidade no Obsidian. Não misturar essa migração com revisão teórica em massa.
6. **Publicação e retirada das dependências antigas.** Validar cada lote localmente e no GitHub, publicar em commit atômico e conferir site ao vivo. Retirar inferências por pasta somente quando todas as superfícies aplicáveis usarem identidade ou vínculo explícito. Documentar compatibilidade mantida e reversão de cada lote; não apagar aliases enquanto links históricos dependerem deles.

### Critérios de aceite e riscos a verificar

Um único artigo deve abrir, com o mesmo conteúdo e identidade, a partir de duas matérias e de dois concursos; breadcrumb, ordem e retorno seguem o percurso de origem. Trocar o filtro altera os vínculos exibidos sem mover ou copiar a nota. Mudar título ou local de um artigo no piloto preserva URLs antigas, wikilinks, seções e referências históricas. Busca contextual e geral encontram o conteúdo nos escopos corretos, sem duplicação por alias. Matérias sem artigo e artigos fora de um edital continuam com estados explícitos.

Testar também origem inválida, múltiplos vínculos no mesmo concurso, colisão de nomes, ID ausente/duplicado, seção renomeada, notas privadas, contagens, anterior/próximo e navegação pelo histórico. Resultados e ponto de retomada de CGU/Dataprev/Câmara devem permanecer idênticos após a migração, salvo mudança editorial de vínculo expressamente documentada. Os testes de catálogo, busca, rotas, continuidade, privacidade, build e verificação do Pages continuam obrigatórios.

**Decisão adiada:** a pasta física final. O resultado necessário é reaproveitamento e navegação por edital. A necessidade de mover todos os arquivos deve ser demonstrada após o desacoplamento, pois o filtro por si só já permite compartilhar teoria. Próxima ação de implementação: inventariar dependências e executar o piloto sem movimentação física.
