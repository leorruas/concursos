#!/usr/bin/env python3
"""Audita JSONs alcançáveis após filtrar caminhos pessoais. Não exibe valores."""
import collections
import json
import re
import subprocess
import sys
from pathlib import Path

repo = sys.argv[1]
out = Path(sys.argv[2])
tracked = subprocess.check_output(
    ["git", "-C", repo, "rev-list", "--all", "--objects"], text=True
).splitlines()
targets = collections.defaultdict(set)
for line in tracked:
    if " " not in line:
        continue
    sha, path = line.split(" ", 1)
    if path.startswith("data/") and path.endswith(".json"):
        targets[path].add(sha)

sensitive_keys = {
    "metasCandidato", "exposicaoEstudo", "dominioMensuravel",
    "ultimaResposta", "userAnswer", "lastReviewedAt",
    "errorCount", "wrongCount", "reviewHistory", "sessionHistory"
}
results = []
examined = 0
for path, shas in sorted(targets.items()):
    for sha in sorted(shas):
        raw = subprocess.check_output(["git", "-C", repo, "cat-file", "blob", sha])
        try:
            data = json.loads(raw)
        except (ValueError, UnicodeDecodeError):
            continue
        examined += 1
        signals = set()
        def search(v):
            if isinstance(v, dict):
                for k, val in v.items():
                    if k in sensitive_keys and val not in (None, [], {}, ""):
                        signals.add(k)
                    # Campo de estudo historicamente pessoal no edital.
                    if k == "coberturaNota" and path == "data/edital-itens.json":
                        signals.add("coberturaNota")
                    if k == "discursivePractice" and isinstance(val, dict):
                        if val.get("attempts"):
                            signals.add("discursivePractice.attempts")
                    search(val)
            elif isinstance(v, list):
                for item in v:
                    search(item)
        search(data)
        if signals:
            results.append({"path": path, "blob_sha": sha, "signals": sorted(signals)})
summary = {
    "mode": "historical-reachable-json-after-path-filter",
    "json_paths_examined": len(targets),
    "historical_json_versions_examined": examined,
    "flagged_versions": len(results),
    "flagged_paths": sorted({r["path"] for r in results}),
    "findings": results,
    "limit": "Heurística de campos estruturados; não detecta conteúdo pessoal em Markdown, JS, nomes alternativos ou dados fora dos refs buscados."
}
out.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("json_historic_paths=", summary["json_paths_examined"])
print("json_historic_versions=", examined)
print("json_flagged_versions=", len(results))
print("json_flagged_paths=", len(summary["flagged_paths"]))
for flagged_path in summary["flagged_paths"]:
    categories = sorted({signal for r in results if r["path"] == flagged_path for signal in r["signals"]})
    print("json_flagged_path=", flagged_path, "signals=", ",".join(categories))
print("json_verification_scope=campos estruturados; requer revisao se flag > 0")
