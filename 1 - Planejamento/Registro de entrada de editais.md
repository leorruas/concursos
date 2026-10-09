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
- [ ] Criar ou atualizar `data/concursos.json` com `id` único, `sourcePath`, `estruturaProva`, `metasCandidato` (separadas dos fatos oficiais) e `dashboardPath` apenas se houver painel realmente solicitado (opcional).
- [ ] Distinguir dados oficiais, hipóteses do agente e metas pessoais.

### Diagnóstico de cobertura e estudos
- [ ] Integrar checklist e diagnóstico em `2 - Editais/`, estratégia e discursiva em `3 - Materias/Estrategia de Prova/` e avanços, provas, simulados e metas em `00 - Desempenho/`. **Não criar automaticamente uma pasta por edital**.
- [ ] Comparar **cada subtema** com o vault: cobertura documental integral, parcial ou ausente; `coberturaNota` não significa `exposicaoEstudo` nem domínio.
- [ ] Identificar lacunas, pesos, mínimos e competências transversais; priorizar sem eliminar conteúdos obrigatórios.
- [ ] Criar corpus de provas reais aderentes (banca, ano, cargo, item, gabarito definitivo, validade legal); manter métricas separadas por concurso.
- [ ] Aplicar diagnóstico inicial, registrar erros com seções ancoradas e planejar estudo, revisão e discursivas.

### Navegação e publicação
- [ ] Atualizar `index.md`, o roadmap e o roteamento em `me.md` e `.agent/AGENTS.md` quando mudar a prioridade.
- [ ] Escolher expressamente o que será público. Os projetos legados em `4 - Projetos/` são privados por padrão. Estratégias em `3 - Materias/` são públicas, editais/checklists em `2 - Editais/` ficam no GitHub/Obsidian. Não promover automaticamente documentos de planejamento à interface.
- [ ] Confirmar que o concurso está no seletor da home (por `data/concursos.json`), **sem** link “abrir preparação”; `dashboardPath` não é obrigatório.
- [ ] Testar `_site/manifest.json`, `_site/search-index.json` e presença física dos Markdown no build. **Um wikilink em `index.md` não publica um arquivo.**
- [ ] Executar os validadores, publicar a transação em commit atômico, aguardar o workflow do HEAD e conferir o manifesto servido pelo Pages.
- [ ] Verificar a jornada real **home → seleção do concurso; índice → estratégia e desempenho** no navegador. Se um edital não aparece, checar filtro público em `scripts/build-site.js`, JSON, categorias, navegação e deploy. Não declarar concluído antes disso.

### Manutenção
- [ ] Registrar neste arquivo o concurso, data de entrada, estado da publicação e pendências com caixas de seleção.
- [ ] A cada retificação, comparar o edital anterior, atualizar dados e notas afetadas e revalidar a home.
- [ ] Ao fechar uma pendência, registrar resultado e evidência no projeto correspondente sem apagar histórico.

## CGU 2026: Auditoria, entrada em 09/10/2026

Fontes atuais: [[2 - Editais/CGU 2026 - Auditoria|edital e checklist CGU]], [[3 - Materias/Estrategia de Prova/Cebraspe - CGU 2026 Auditoria e metodo C E|estratégia e discursiva CGU]], [[00 - Desempenho/00 Avancos globais|Avanços globais]], [[00 - Desempenho/Provas/00 - Desempenho por edital e prova|Desempenho por edital]] e [[00 - Desempenho/Simulados/00 - Catalogo de simulados|Catálogo de simulados]].

### Entregas
- [x] Projeto iniciado com painel, checklist e discursiva; estratégia de prova transferida para `3 - Materias/Estrategia de Prova/` após correção de estrutura em 09/10/2026.
- [x] Mapeamento inicial do reaproveitamento e lacunas contra o vault.
- [x] Novo edital registrado no `index.md` e nas regras de prioridade após a Dataprev.
- [x] Diagnóstico da ausência no Pages: `4 - Projetos/` excluído por padrão; CGU ausente no `data/concursos.json`.
- [x] Opt-in das quatro páginas CGU para publicação e cadastro CGU no JSON da home.
- [x] Adicionada validação no build para impedir `dashboardPath` fora do catálogo público.
- [x] CI, build, verificações de privacidade e manifesto do Pages confirmados em 09/10/2026: [workflow de publicação](https://github.com/leorruas/concursos/actions/runs/37923202287).
- [x] Estratégia CGU consolidada no hub existente de Estratégia de Prova, com remoção do arquivo de projeto redundante.
- [x] Integrar três notas do antigo projeto CGU no edital, na estratégia/discursiva e nos hubs gerais; remover pasta CGU.
- [x] Retirar da home o atalho “abrir preparação”, preservando o seletor de concursos.
- [ ] Verificar visualmente a home, o índice, a estratégia e os hubs publicados.

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

### Decisão de arquitetura (09/10/2026)

O painel e a pasta `4 - Projetos/cgu-2026/` foram **removidos** por solicitação expressa. Os itens anteriores sobre criação e publicação desse projeto são **histórico**, não referências vigentes. A CGU usa edital e checklist em `2 - Editais/`, prova objetiva e discursiva em `3 - Materias/Estrategia de Prova/` e avanços, metas, provas e simulados em `00 - Desempenho/`, identificados por `cgu-2026`. Este é o padrão preferencial de entrada de novos editais; criar projeto separado somente quando houver necessidade concreta e autorização.
