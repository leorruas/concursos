from pathlib import Path
import re

DATE = '2026-09-14'

def read(path):
    p = Path(path)
    if not p.exists():
        raise SystemExit(f'Arquivo esperado não encontrado: {path}')
    return p.read_text(encoding='utf-8')

def write(path, text):
    Path(path).write_text(text, encoding='utf-8')

def update_date(text):
    new, n = re.subn(r'(?m)^updated: \d{4}-\d{2}-\d{2}$', f'updated: {DATE}', text, count=1)
    if n == 0:
        raise SystemExit('Campo updated não encontrado.')
    return new

# 1) Corrige wikilinks em tabela Markdown dos Avanços globais.
path = '00 - Desempenho/00 Avancos globais.md'
text = read(path)
start = text.find('## Painel de desempenho por disciplina')
end = text.find('### Métricas específicas por disciplina', start)
if start < 0 or end < 0:
    raise SystemExit('Painel global não localizado.')
panel = text[start:end]
# Pipes dentro de wikilinks precisam ser escapados quando estão dentro da tabela.
panel = re.sub(r'\[\[([^\]\n]+?)(?<!\\)\|([^\]\n]+?)\]\]', r'[[\1\\|\2]]', panel)
text = text[:start] + panel + text[end:]
if '[[3 - Materias/Portugues/portugues\\|Língua portuguesa]]' not in text:
    raise SystemExit('Falha ao corrigir escape de wikilinks na tabela global.')
write(path, text)

# 2) Cataloga a bateria mista.
path = '00 - Desempenho/Simulados/00 - Catalogo de simulados.md'
text = update_date(read(path))
heading = '## 1. Visão Geral de Simulados Realizados'
start = text.find(heading)
anchor = '| :--- | :---: | :---: | :---: | :---: | :---: | :--- |\n'
pos = text.find(anchor, start)
if pos < 0:
    raise SystemExit('Tabela geral do catálogo não encontrada.')
pos += len(anchor)
row = '| **Bateria Mista Dataprev/FGV** | 14/09/2026 | 26 válidas | 22 | **84,6%** | 4 erros úteis (3 [C], 1 [K]) | [[00 - Desempenho/Simulados/Bateria-Mista-2026-09-14\\|Diagnóstico da bateria mista]] |\n'
if '**Bateria Mista Dataprev/FGV** | 14/09/2026' not in text:
    text = text[:pos] + row + text[pos:]
write(path, text)

# 3) Indexa o diagnóstico dentro da seção de simulados.
path = 'index.md'
text = read(path)
link = '  - [[00 - Desempenho/Simulados/Bateria-Mista-2026-09-14|Bateria mista Dataprev/FGV — 14/09/2026]]\n'
if link.strip() not in text:
    anchor = '  - [[00 - Desempenho/Simulados/Simulado-02|Simulado 02 — Diagnóstico e erros]]\n'
    if anchor not in text:
        raise SystemExit('Âncora de Simulado 02 não encontrada no index.')
    text = text.replace(anchor, anchor + link, 1)
text = re.sub(r'(?m)^\*Última atualização: \d{4}-\d{2}-\d{2}\*$', '*Última atualização: 2026-09-14*', text, count=1)
write(path, text)

# Validações locais antes do validador oficial.
checks = {
    '00 - Desempenho/00 Avancos globais.md': [
        '[[3 - Materias/Portugues/portugues\\|Língua portuguesa]]',
        '[[3 - Materias/Comunicacao/comunicacao\\|Comunicação social]]',
    ],
    '00 - Desempenho/Simulados/00 - Catalogo de simulados.md': [
        '**Bateria Mista Dataprev/FGV** | 14/09/2026',
        'Bateria-Mista-2026-09-14\\|Diagnóstico da bateria mista',
    ],
    'index.md': ['Bateria-Mista-2026-09-14|Bateria mista Dataprev/FGV — 14/09/2026'],
}
for p, needles in checks.items():
    body = read(p)
    for needle in needles:
        if needle not in body:
            raise SystemExit(f'Validação local falhou em {p}: {needle}')

print('Finalização local validada.')
