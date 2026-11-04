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
