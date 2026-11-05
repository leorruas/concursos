#!/usr/bin/env bash
# Auditoria privada, somente leitura. Nunca altera refs remotos.
set -euo pipefail
umask 077
if ! command -v git-filter-repo >/dev/null 2>&1; then
  echo "FALHA: git-filter-repo ausente."
  exit 1
fi
src="https://github.com/leorruas/concursos.git"
root="$RUNNER_TEMP/auditoria-historico-$GITHUB_RUN_ID"
mirror="$root/concursos.git"
mkdir -p "$root"
# Impedir publicação de um resultado calculado sobre versão antiga do main.
remote_head="$(git ls-remote "$src" refs/heads/main | awk '{print $1}')"
if [[ "$remote_head" != "$EXPECTED_SHA" ]]; then
  echo "ABORTADO: o main mudou durante a preparação."
  exit 1
fi
git clone --quiet --mirror "$src" "$mirror" || { echo "FALHA: clone espelho."; exit 1; }
git -C "$mirror" fetch --quiet origin '+refs/pull/*/head:refs/pull/*/head'   || { echo "FALHA: refs de PR não puderam ser incluídas; auditoria incompleta."; exit 1; }
head_before="$(git -C "$mirror" rev-parse 'refs/heads/main^{commit}')"
tree_before="$(git -C "$mirror" rev-parse 'refs/heads/main^{tree}')"
refs_before="$(git -C "$mirror" for-each-ref --format='%(refname)' | wc -l | tr -d ' ')"
pulls_before="$(git -C "$mirror" for-each-ref --format='%(refname)' refs/pull | wc -l | tr -d ' ')"
# Preservar versões editoriais atuais, sem os campos pessoais antigos.
mkdir -p "$root/editorial-atual/data"
git -C "$mirror" show 'refs/heads/main:data/concursos.json' > "$root/editorial-atual/data/concursos.json"
git -C "$mirror" show 'refs/heads/main:data/edital-itens.json' > "$root/editorial-atual/data/edital-itens.json"
git -C "$mirror" show 'refs/heads/main:me.md' > "$root/editorial-atual/me.md"
log="$root/filter.log"
if ! (
  cd "$mirror"
  git filter-repo --sensitive-data-removal --invert-paths --path '00 - Desempenho/' --path 'data/contexto-estudo/' --path 'data/sessoes/' --path 'data/erros-recorrentes.json' --path 'data/provas.json' --path 'data/questoes-ledger.json' --path 'data/sessoes-saidas.json' --path 'data/ingestoes-processadas.json' --path 'data/concursos.json' --path 'data/edital-itens.json' --path 'me.md' --path '4 - Projetos/dataprev-2026/00 Dashboard.md' --path '4 - Projetos/dataprev-2026/Log de erros.md' --path '4 - Projetos/dataprev-2026/Questoes e Simulados.md' --path '4 - Projetos/dataprev-2026/Cronograma.md' --path '4 - Projetos/dataprev-2026/O que estudar.md' --path-glob '*/Avancos.md'
) >"$log" 2>&1; then
  echo "FALHA: o filtro não concluiu; não houve mudança no remoto."
  exit 1
fi
# Catálogos editoriais recebem versão atual segura como um único commit no clone.
# O repositório remoto não é alterado nesta auditoria.
git -C "$mirror" worktree add --quiet -b auditoria-restaurar-editorial "$root/restaurado" refs/heads/main
cp "$root/editorial-atual/data/concursos.json" "$root/restaurado/data/concursos.json"
cp "$root/editorial-atual/data/edital-itens.json" "$root/restaurado/data/edital-itens.json"
cp "$root/editorial-atual/me.md" "$root/restaurado/me.md"
git -C "$root/restaurado" add data/concursos.json data/edital-itens.json me.md
git -C "$root/restaurado" -c user.name='Auditoria de privacidade' -c user.email='audit@localhost' commit --quiet -m 'Restore safe current editorial catalogs'
git -C "$mirror" update-ref refs/heads/main "$(git -C "$root/restaurado" rev-parse HEAD)"
head_after="$(git -C "$mirror" rev-parse 'refs/heads/main^{commit}')"
tree_after="$(git -C "$mirror" rev-parse 'refs/heads/main^{tree}')"
if [[ "$tree_before" != "$tree_after" ]]; then
  echo "FALHA: o conteúdo atual do main mudou após o filtro; não publicar."
  exit 1
fi
# Conferir apenas NOMES de caminhos históricos, sem divulgar dados pessoais.
pattern='^(00 - Desempenho/|data/contexto-estudo/|data/sessoes/|data/erros-recorrentes\.json$|data/provas\.json$|data/questoes-ledger\.json$|data/sessoes-saidas\.json$|data/ingestoes-processadas\.json$)|(^|/)Avancos\.md$'
if git -C "$mirror" log --all --name-only --format= | grep -E "$pattern" >/dev/null; then
  echo "FALHA: ainda existem caminhos pessoais nas refs filtradas."
  exit 1
fi
# As cinco notas pessoais não podem existir em nenhuma versão histórica filtrada.
for p in \
  '4 - Projetos/dataprev-2026/00 Dashboard.md' \
  '4 - Projetos/dataprev-2026/Log de erros.md' \
  '4 - Projetos/dataprev-2026/Questoes e Simulados.md' \
  '4 - Projetos/dataprev-2026/Cronograma.md' \
  '4 - Projetos/dataprev-2026/O que estudar.md'; do
  if [[ -n "$(git -C "$mirror" log --all --format=%H -- "$p")" ]]; then
    echo "FALHA: nota pessoal histórica permanece alcançável."
    exit 1
  fi
done
# O me.md sanitizado deve ser sua única versão alcançável no teste.
me_versions="$(git -C "$mirror" log --all --format=%H -- me.md | wc -l | tr -d ' ')"
if [[ "$me_versions" != "1" ]]; then
  echo "FALHA: alguma versão antiga do perfil continua alcançável."
  exit 1
fi

git_dir="$(git -C "$mirror" rev-parse --absolute-git-dir)"
change_file="$git_dir/filter-repo/changed-refs"
if [[ -f "$change_file" ]]; then
  changed_refs="$(wc -l < "$change_file" | tr -d ' ')"
  changed_prs="$(grep -Ec '^refs/pull/.*/head$' "$change_file" || true)"
else
  changed_refs="desconhecido"
  changed_prs="desconhecido"
fi
report="$RUNNER_TEMP/auditoria-historico-resultado.txt"
{
  echo "AUDITORIA EM CLONE DESCARTÁVEL. NENHUMA ALTERAÇÃO NO GITHUB REMOTO."
  echo "original_main_sha=$head_before"
  echo "original_main_tree=$tree_before"
  echo "filtered_main_sha=$head_after"
  echo "filtered_main_tree=$tree_after"
  echo "current_tree_identical=true"
  echo "refs_before=$refs_before"
  echo "pull_refs_before=$pulls_before"
  echo "changed_refs=$changed_refs"
  echo "changed_pull_refs=$changed_prs"
  echo "removed_paths_remaining=0 (caminhos inventariados, exceto catálogos atuais restaurados)"
  echo "lfs_orphans_reported=$(grep -qi 'LFS Objects Orphaned' "$log" && echo true || echo false)"
  echo "first_changed_commit_shas:"
  grep -A 12 'NOTE: First Changed Commit' "$log" | grep -oE '[0-9a-f]{40}' | sort -u | head -20 || true
  echo "Limite: dados embutidos em outros arquivos e caches externos não são verificados."
} > "$report"
python3 scripts/auditar-campos-historicos.py "$mirror" "$RUNNER_TEMP/auditoria-campos-publicos.json" | tee -a "$report"
cat "$report"
# Criar apenas uma branch de prévia limpa. Não tocar main nem outras refs.
remote_head="$(git ls-remote "$src" refs/heads/main | awk '{print $1}')"
if [[ "$remote_head" != "$EXPECTED_SHA" ]]; then
  echo "ABORTADO: main avançou; descartar esta prévia."
  exit 1
fi
stage="refs/heads/security/historico-limpo-previa-$GITHUB_RUN_ID"
auth="$(printf 'x-access-token:%s' "$GITHUB_TOKEN" | base64 -w0)"
if ! git -C "$mirror" -c "http.https://github.com/.extraheader=AUTHORIZATION: basic $auth" push "$src" "$head_after:$stage" >"$root/push.log" 2>&1; then
  echo "FALHA: não foi possível criar a prévia limpa; o main segue intacto."
  exit 1
fi
echo "Prévia limpa publicada como $stage. Main inalterado."

if [[ -n "$GITHUB_STEP_SUMMARY" ]]; then
  {
    echo "### Auditoria privada do histórico público"
    echo ''
    echo '~~~'
    cat "$report"
    echo '~~~'
  } >> "$GITHUB_STEP_SUMMARY"
fi
