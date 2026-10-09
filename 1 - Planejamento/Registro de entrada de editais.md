---
title: "Registro de entrada de editais"
type: "governanca-operacional"
status: "ativo"
created: 2026-10-09
updated: 2026-10-09
---

# Registro de entrada de editais

Checklist permanente e histórico de pendências por concurso. **Atualizar este documento toda vez que entrar um novo edital ou uma retificação relevante.** Não marcar estudos concluídos apenas por haver notas no vault.

## Protocolo para cada novo edital

### Fonte e decisão
- [ ] Ler edital e retificações; registrar versão, data, link oficial e referência em `2 - Editais/`.
- [ ] Confirmar cargo, especialidade, requisitos, lotação, inscrição, remuneração, prova, banca, critérios eliminatórios e formato da discursiva.
- [ ] Criar ou atualizar `data/concursos.json` com `id` único, `sourcePath`, `estruturaProva`, `metasCandidato` (separadas dos fatos oficiais) e `dashboardPath` quando houver painel público.
- [ ] Distinguir dados oficiais, hipóteses do agente e metas pessoais.

### Diagnóstico de cobertura e estudos
- [ ] Criar `4 - Projetos/<concurso-id>/` com painel, `O que estudar`, estratégia e preparação discursiva conforme edital.
- [ ] Comparar **cada subtema** com o vault: cobertura documental integral, parcial ou ausente; `coberturaNota` não significa `exposicaoEstudo` nem domínio.
- [ ] Identificar lacunas, pesos, mínimos e competências transversais; priorizar sem eliminar conteúdos obrigatórios.
- [ ] Criar corpus de provas reais aderentes (banca, ano, cargo, item, gabarito definitivo, validade legal); manter métricas separadas por concurso.
- [ ] Aplicar diagnóstico inicial, registrar erros com seções ancoradas e planejar estudo, revisão e discursivas.

### Navegação e publicação
- [ ] Atualizar `index.md`, o roadmap e o roteamento em `me.md` e `.agent/AGENTS.md` quando mudar a prioridade.
- [ ] Escolher expressamente o que será público. Projetos em `4 - Projetos/` são privados por padrão. Arquivos públicos exigem frontmatter `public: true` e `publicCategoria: "14. Nome do concurso"`; revisar informações pessoais antes de publicar.
- [ ] Verificar se `dashboardPath` está publicado e se o novo concurso consta no seletor da home (alimentado por `data/concursos.json`).
- [ ] Testar `_site/manifest.json`, `_site/search-index.json` e presença física dos Markdown no build. **Um wikilink em `index.md` não publica um arquivo.**
- [ ] Executar os validadores, publicar a transação em commit atômico, aguardar o workflow do HEAD e conferir o manifesto servido pelo Pages.
- [ ] Verificar a jornada real **home → concurso → painel → checklist** no navegador. Se um edital não aparece, checar filtro público em `scripts/build-site.js`, JSON, categorias, navegação e deploy. Não declarar concluído antes disso.

### Manutenção
- [ ] Registrar neste arquivo o concurso, data de entrada, estado da publicação e pendências com caixas de seleção.
- [ ] A cada retificação, comparar o edital anterior, atualizar dados e notas afetadas e revalidar a home.
- [ ] Ao fechar uma pendência, registrar resultado e evidência no projeto correspondente sem apagar histórico.

## CGU 2026: Auditoria, entrada em 09/10/2026

Projeto: [[4 - Projetos/cgu-2026/00 Dashboard|CGU 2026]]. Referência: [[2 - Editais/CGU 2026 - Auditoria|Edital]].

### Entregas
- [x] Projeto criado com quatro documentos: painel, checklist, estratégia e discursiva.
- [x] Mapeamento inicial do reaproveitamento e lacunas contra o vault.
- [x] Novo edital registrado no `index.md` e nas regras de prioridade após a Dataprev.
- [x] Diagnóstico da ausência no Pages: `4 - Projetos/` excluído por padrão; CGU ausente no `data/concursos.json`.
- [x] Opt-in das quatro páginas CGU para publicação e cadastro CGU no JSON da home.
- [x] Adicionada validação no build para impedir `dashboardPath` fora do catálogo público.
- [ ] Conferir CI do HEAD final, manifesto ao vivo e navegação visual.

### Próximos trabalhos de conteúdo
- [ ] Confrontar o checklist detalhadamente com o PDF oficial e eventuais retificações.
- [ ] Organizar corpus de questões reais CGU, auditoria, controle e finanças públicas.
- [ ] Fazer diagnóstico por P1/P2/P3 e uma discursiva de referência, sem transferir resultados FGV.
- [ ] Criar notas canônicas para auditoria governamental, execução orçamentária, contabilidade pública e avaliação causal.
- [ ] Mapear subitens CGU em `data/edital-itens.json` sem inventar domínio ou estudo.
- [ ] Confirmar localidade e lotação da inscrição.

## Editais anteriores

Dataprev 2026 e Câmara dos Deputados 2026 já tinham projetos antes deste registro. Fundação Florestal também já tem referência. **A conformidade retrospectiva desses editais com o novo procedimento ainda não foi auditada**, sobretudo quanto à integração e visibilidade pública dos projetos.

## Incidente que originou o protocolo

Em 09/10/2026, o workflow do GitHub Pages havia terminado com sucesso, mas o projeto CGU não aparecia. O catálogo esperado também excluía os projetos e, assim, passava na validação. A partir desta revisão, cadastro, opt-in, manifesto e navegação tornam-se etapas explícitas.
