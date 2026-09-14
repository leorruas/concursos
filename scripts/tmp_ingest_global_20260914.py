from pathlib import Path
import re

DATE = '2026-09-14'

def read(path):
    p = Path(path)
    if not p.exists():
        raise SystemExit(f'Arquivo não encontrado: {path}')
    return p.read_text(encoding='utf-8')

def write(path, text):
    Path(path).write_text(text, encoding='utf-8')

def update_date(text):
    new, n = re.subn(r'(?m)^updated: \d{4}-\d{2}-\d{2}$', f'updated: {DATE}', text, count=1)
    if n != 1:
        raise SystemExit('Campo updated ausente ou ambíguo.')
    return new

# 1) Avanços globais
path = '00 - Desempenho/00 Avancos globais.md'
text = update_date(read(path))

panel_pattern = re.compile(
    r'Mapeamento do aproveitamento médio e volume na janela móvel dos \*\*últimos 30 dias\*\* \([^\n]+\)\.\n\n'
    r'\| Disciplina \| Aproveitamento \(30d\) \| Questões \(30d\) \| Meta \| Status de Amostragem \| Último Treino \|\n'
    r'\| :--- \| :--- \| :--- \| :--- \| :--- \| :--- \|\n'
    r'.*?\n\n### Métricas específicas por disciplina',
    re.S,
)
panel = '''Mapeamento do aproveitamento médio e volume na janela móvel dos **últimos 30 dias** (16/08/2026 a 14/09/2026).

| Disciplina | Aproveitamento (30d) | Questões (30d) | Meta | Status de Amostragem | Último Treino |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [[3 - Materias/Portugues/portugues|Língua portuguesa]] | *80,0%* | 20 | 95% | **Amostragem insuficiente** (< 50 Qs) | 14/09/2026 |
| [[3 - Materias/Ingles/ingles|Língua inglesa]] | *100,0%* | 7 | - | **Amostragem insuficiente** (< 50 Qs) | 31/08/2026 |
| [[3 - Materias/Logica/00 - logica|Raciocínio lógico]] | *61,0%* | 41 | 85% | **Amostragem insuficiente** (< 50 Qs) | 14/09/2026 |
| [[3 - Materias/Calculo Mental/calculo-mental|Cálculo mental]] | - | 0 | 95% | **Amostragem insuficiente** (< 50 Qs) | 14/07/2026 |
| [[3 - Materias/Direito Constitucional/direito-constitucional|Direito constitucional]] | - | 0 | 95% | **Amostragem insuficiente** (< 50 Qs) | 29/06/2026 |
| [[3 - Materias/Direito Administrativo/direito-administrativo|Direito administrativo]] | - | 0 | 95% | **Amostragem insuficiente** (< 50 Qs) | 29/06/2026 |
| [[3 - Materias/Comunicacao/comunicacao|Comunicação social]] | 85,9% | 71 | 90% | **Amostragem sólida** ($\\ge$ 50 Qs) | 14/09/2026 |
| [[3 - Materias/Administracao Publica/administracao-publica|Administração pública]] | *100,0%* | 1 | 85% | **Amostragem insuficiente** (< 50 Qs) | 31/08/2026 |
| [[3 - Materias/Administracao Geral/administracao-geral|Administração geral]] | - | 0 | 85% | **Amostragem insuficiente** (< 50 Qs) | - |
| [[3 - Materias/Atualidades/atualidades|Atualidades]] | *71,4%* | 7 | 75% | **Amostragem insuficiente** (< 50 Qs) | 14/09/2026 |
| [[3 - Materias/Informatica/informatica|Legislação de SI e proteção de dados]] | *62,5%* | 16 | - | **Amostragem insuficiente** (< 50 Qs) | 14/09/2026 |
| [[3 - Materias/Redacao/redacao|Redação]] | - | 0 | 90% | **Amostragem insuficiente** (< 50 Qs) | - |

> [!NOTE]
> A janela por disciplina exclui o Simulado 02 de 01/09, porque a distribuição das 70 questões por matéria não foi preservada. O simulado continua contabilizado nos totais semanal e global bruto, mas não é repartido artificialmente entre disciplinas.

### Métricas específicas por disciplina'''
text, n = panel_pattern.subn(lambda _m: panel, text, count=1)
if n != 1:
    raise SystemExit('Painel de 30 dias não localizado de forma única.')

# Evolução recente: adiciona sessão atual no topo.
recent_heading = '### Análise de evolução recente\n'
if 'Sessão mista de 14/09' not in text:
    block = '''- **Sessão mista de 14/09**: 22/26 questões válidas (84,6%) em cinco disciplinas; TAP ponderada de 84,4%. Uma questão de Português foi anulada e excluída do denominador; o bloco de Inglês não teve respostas registradas e não entra nas métricas. Os quatro erros válidos foram: Lógica [C] em `nenhum → algum`; Português [C] recorrente em adversativa × concessiva; Comunicação [C] em clipping × auditoria de imagem; Atualidades [K] em regime de metas/IPCA/Selic/Copom. Legislação fechou 4/4.
- **Raciocínio lógico — 14/09**: 5/6 (83,3%). De Morgan e o caso falso da condicional reapareceram corretamente; o novo erro ficou isolado na negação de `nenhum` como existência de ao menos um contraexemplo.
- **Língua Portuguesa — 14/09**: 5/6 válidas (83,3%). Houve recuperação de concordância, funções do `se`, crase, voz passiva e regência; a fronteira `contudo` × `embora` reincidiu e passou a erro recorrente.
- **Comunicação Social — 14/09**: 6/7 (85,7%). Autores, teorias do jornalismo, media training e finalidade predominante apareceram sólidos; o erro único deslocou `clipping` para um caso de auditoria de imagem na mídia.
- **Atualidades — 14/09**: 2/3 (66,7%). Mercado de carbono e segurança internacional de IA foram resolvidos; a lacuna de economia foi convertida em nota canônica sobre regime de metas, IPCA, Selic e Copom.
- **Legislação de SI — 14/09**: 4/4 (100%). A bateria confirmou Marco Civil, LGPD e fechou a lacuna da Lei 12.737/2012, agora com nota canônica própria.
'''
    if recent_heading not in text:
        raise SystemExit('Cabeçalho de evolução recente não encontrado.')
    text = text.replace(recent_heading, recent_heading + block, 1)

# Semana 38
weekly_anchor = '| :--- | :--- | :--- | :--- | :--- |\n'
weekly_start = text.find('## Acompanhamento semanal de saturação e volume')
pos = text.find(weekly_anchor, weekly_start)
if pos < 0:
    raise SystemExit('Tabela semanal global não encontrada.')
pos += len(weekly_anchor)
week_row = '| **Semana 38** (14/09 a 20/09) | 26 | 84,6% (22/26) | 84,4% | **Média**: sessão mista em cinco disciplinas. Três erros de confusão conceitual e um de conhecimento; Legislação 4/4. Uma questão de Português anulada ficou fora do denominador e Inglês não foi contado por ausência de respostas. |\n'
if '**Semana 38** (14/09 a 20/09)' not in text:
    text = text[:pos] + week_row + text[pos:]

# Controle de baterias mistas
control_start = text.find('## Controle de simulados consolidados')
pos = text.find('| :--- | :--- | :--- | :--- | :--- | :--- |\n', control_start)
if pos < 0:
    raise SystemExit('Tabela de simulados consolidados não encontrada.')
pos += len('| :--- | :--- | :--- | :--- | :--- | :--- |\n')
control_row = '| Sessão mista Dataprev/FGV | 14/09/2026 | 22/26 (84,6%) | Não comparável a simulado completo | 26 válidas; 5 disciplinas; 1 questão de Português anulada; Inglês sem respostas | Diagnóstico de retenção com quatro erros úteis: três [C] e um [K]. Destaques positivos: Legislação 4/4, De Morgan recuperado e Comunicação em 6/7. |\n'
if 'Sessão mista Dataprev/FGV | 14/09/2026' not in text:
    text = text[:pos] + control_row + text[pos:]

write(path, text)

# 2) Log de saturação diária
path = '00 - Desempenho/01 Log de saturacao diaria.md'
text = update_date(read(path))
heading = '## Log de Saturação Diária'
start = text.find(heading)
pos = text.find('| :--- | :--- | :--- | :--- | :--- |\n', start)
if pos < 0:
    raise SystemExit('Tabela de saturação diária não encontrada.')
pos += len('| :--- | :--- | :--- | :--- | :--- |\n')
row = '| 14/09/2026 | 26 | 84,6% (22/26) | 84,4% | **Média**: sessão mista Dataprev/FGV em Lógica (5/6), Português (5/6 válidas; 1 anulada), Legislação (4/4), Comunicação (6/7) e Atualidades/IA (2/3). Erros: [C] negação de `nenhum`; [C] recorrente adversativa × concessiva; [C] clipping × auditoria de imagem; [K] regime de metas/IPCA/Selic/Copom. O bloco de Inglês não foi contabilizado por ausência de respostas. |\n'
if '| 14/09/2026 | 26 |' not in text:
    text = text[:pos] + row + text[pos:]
write(path, text)

# 3) Checklist Dataprev
path = '4 - Projetos/dataprev-2026/O que estudar.md'
text = update_date(read(path))
old = '- [ ] 2. **Lei nº 12.737/2012 (Delitos Informáticos)**: Art. 2º (Invasão de dispositivo informático). -> [[3 - Materias/Informatica/informatica|Informatica]]'
new = '- [x] 2. **Lei nº 12.737/2012 (Delitos Informáticos)**: Art. 2º (Invasão de dispositivo informático). -> [[3 - Materias/Informatica/02 - lei 12737 delitos informaticos|02 • Lei 12.737/2012 — delitos informáticos]]'
if old in text:
    text = text.replace(old, new, 1)
elif new not in text:
    raise SystemExit('Item da Lei 12.737 não encontrado no checklist.')
write(path, text)

# 4) Dashboard
path = '4 - Projetos/dataprev-2026/00 Dashboard.md'
text = update_date(read(path))
repls = {
    '| **Módulo I: Conhecimentos Gerais**        |   **17 / 33**    |   **51.5%**   | `█████░░░░░`       |': '| **Módulo I: Conhecimentos Gerais**        |   **18 / 33**    |   **54.5%**   | `█████░░░░░`       |',
    '| └─ Legislação de SI e Proteção de Dados   |      3 / 4       |     75.0%     | `████████░░`       |': '| └─ Legislação de SI e Proteção de Dados   |      4 / 4       |    100.0%     | `██████████`       |',
    '| **Total do Edital**                       |  **114 / 130**   |   **87.7%**   | `█████████░`       |': '| **Total do Edital**                       |  **115 / 130**   |   **88.5%**   | `█████████░`       |',
}
for old, new in repls.items():
    if old in text:
        text = text.replace(old, new, 1)
    elif new not in text:
        raise SystemExit(f'Linha esperada do Dashboard não encontrada: {old}')
write(path, text)

# 5) Índice
path = 'index.md'
text = read(path)
link = '  - [[3 - Materias/Informatica/02 - lei 12737 delitos informaticos|02 • Lei 12.737/2012 — delitos informáticos]]\n'
if link.strip() not in text:
    anchor = '  - [[3 - Materias/Informatica/01 - marco civil da internet|01 • Marco Civil da Internet]]\n'
    if anchor not in text:
        raise SystemExit('Âncora de Informática no index não encontrada.')
    text = text.replace(anchor, anchor + link, 1)
text = re.sub(r'(?m)^\*Última atualização: \d{4}-\d{2}-\d{2}\*$', '*Última atualização: 2026-09-14*', text, count=1)
write(path, text)

# 6) Log geral
path = 'log.md'
text = read(path)
if '## 2026-09-14 — Ingestão da bateria mista Dataprev/FGV' not in text:
    entry = '''\n\n## 2026-09-14 — Ingestão da bateria mista Dataprev/FGV

- Ingerida a sessão mista de 14/09 segundo a política pedagógica vigente do commit `6104d4d`: todas as questões entram em métrica; erros [C] e [K] foram encaminhados para teoria/comentadas apenas quando agregavam valor, sem duplicar notas canônicas já existentes.
- Resultado válido: **22/26 (84,6%)**; TAP ponderada **84,4%**. Inglês ficou fora das métricas por não haver respostas registradas. Uma questão de Português foi anulada e excluída do denominador.
- Resultados por bloco: Lógica 5/6; Português 5/6 válidas; Legislação 4/4; Comunicação 6/7; Atualidades/IA 2/3.
- Erros clínicos: Lógica [C] `nenhum → algum`; Português [C] recorrente adversativa × concessiva; Comunicação [C] clipping × auditoria de imagem; Atualidades [K] regime de metas/IPCA/Selic/Copom.
- Recuperação registrada: De Morgan voltou a aparecer corretamente em contexto misto e passou de pendente para superado no registro de recorrências.
- Cobertura do edital: Lei 12.737/2012 concluída, levando Legislação de SI a **4/4** e o total do edital a **115/130 (88,5%)**. Atualidades permanece 1/2 por ainda representar um eixo temático amplo não fechado.
- Limite de validação: o `scripts/ingest-vault.js` atual trabalha com uma disciplina/placar por entrada e o inbox do GitHub estava vazio; por isso esta fonte mista foi tratada como cinco baterias dirigidas independentes, preservando a mesma governança de destinos e métricas.
'''
    text += entry
write(path, text)

# Validações finais
checks = {
    '00 - Desempenho/00 Avancos globais.md': ['16/08/2026 a 14/09/2026', '**Semana 38** (14/09 a 20/09)', 'Sessão mista Dataprev/FGV | 14/09/2026'],
    '00 - Desempenho/01 Log de saturacao diaria.md': ['| 14/09/2026 | 26 | 84,6% (22/26) | 84,4% |'],
    '4 - Projetos/dataprev-2026/O que estudar.md': ['- [x] 2. **Lei nº 12.737/2012'],
    '4 - Projetos/dataprev-2026/00 Dashboard.md': ['**18 / 33**', '4 / 4', '**115 / 130**'],
    'index.md': ['02 • Lei 12.737/2012 — delitos informáticos'],
    'log.md': ['## 2026-09-14 — Ingestão da bateria mista Dataprev/FGV'],
}
for p, needles in checks.items():
    body = read(p)
    for needle in needles:
        if needle not in body:
            raise SystemExit(f'Validação falhou em {p}: {needle}')

print('Consolidação global validada.')
