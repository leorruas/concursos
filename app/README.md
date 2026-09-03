# Painel Pessoal de Estudos Multi-Concurso (GitHub Pages)

Aplicação web estática (SPA frontend-only) projetada sob o princípio central:
> **A matéria é permanente; o concurso é uma camada de seleção, prioridade e prazo.**

Projetada com base nas diretrizes do vault de estudos de Leo Ruas (Dataprev 2026, TCDF e concursos futuros).

---

## 1. Como Publicar no GitHub Pages

### Opção A: GitHub Actions (Recomendada e Automatizada)
1. No repositório no GitHub, vá em **Settings** -> **Pages**.
2. Na seção **Build and deployment**, em **Source**, selecione **GitHub Actions**.
3. Faça commit e push para a branch `main`. O workflow `.github/workflows/deploy.yml` executará automaticamente:
   - Auditoria de integridade referencial dos dados (`validate-integrity.js`).
   - Publicação direta da pasta `app/` no GitHub Pages.

### Opção B: Publicação por Branch Dedicada (`gh-pages`)
Se preferir publicar sem GitHub Actions:
1. No repositório, em **Settings** -> **Pages**, selecione **Deploy from a branch**.
2. Configure a branch de deploy e a pasta raiz onde o conteúdo de `app/` estiver hospedado.

---

## 2. Como Rodar Localmente

A aplicação utiliza ES Modules padrão e requisições assíncronas `fetch` para os arquivos JSON e Markdown. Por motivos de segurança dos navegadores (CORS para o protocolo `file://`), ela deve ser servida via servidor estático local:

```bash
# Opção com Python
python3 -m http.server 8000 -d app

# Opção com Node.js (npx serve)
npx serve app
```

Acesse: `http://localhost:8000`

---

## 3. Estrutura e Governança de Dados

- **`data/materias.json`**: Nó canônico único de matérias. Uma matéria nunca é duplicada.
- **`data/concursos.json`**: Metadados, datas e pesos oficiais das provas (ex: Peso 2,5 na Dataprev).
- **`data/*-edital.json`**: Itens de cada edital apontando para os `materiaIds` correspondentes.
- **`data/erros.json`**: Caderno clínico categorizado em `[K, C, I, D]`.
- **`content/notas/`**: Notas teóricas em Markdown puro sincronizadas do vault.

### Auditoria de Integridade
Antes de fazer commit, certifique-se de que nenhum link está quebrado executando:
```bash
node app/scripts/validate-integrity.js
```
