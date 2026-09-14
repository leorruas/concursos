from pathlib import Path
import re

PATH = Path('3 - Materias/Comunicacao/Avancos.md')
text = PATH.read_text(encoding='utf-8')

if '14/09/2026 | 7 | Comunicação Social' in text:
    raise SystemExit('Sessão de 14/09 já presente em Comunicação; abortando para evitar duplicata.')

text, n = re.subn(r'(?m)^updated: \d{4}-\d{2}-\d{2}$', 'updated: 2026-09-14', text, count=1)
if n != 1:
    raise SystemExit('Campo updated não encontrado de forma única.')

# Volume diário
heading = '## Volume diário de exercícios'
start = text.find(heading)
if start < 0:
    raise SystemExit('Cabeçalho de volume não encontrado.')
anchor = '| :--- | :--- | :--- | :--- |\n'
pos = text.find(anchor, start)
if pos < 0:
    raise SystemExit('Tabela de volume não encontrada.')
pos += len(anchor)
row = '| 14/09/2026 | 7 | Comunicação Social | Bateria FGV de Schein, Kunsch, teorias do jornalismo, assessoria/media training e finalidade predominante: 6/7 (85,7%). Erro único [C] em clipping × auditoria de imagem na mídia. |\n'
text = text[:pos] + row + text[pos:]

# Tabela semanal local
weekly = '''## Aproveitamento semanal

| Semana / Período | Questões | Aproveitamento | Evolução / Análise de Progresso |
| :--- | :--- | :--- | :--- |
| **Semana 38** (14/09 a 20/09) | 7 | 85,7% (6/7) | Desempenho alto em autores, taxonomias e aplicação profissional. Falha isolada de fronteira entre etapa de coleta (`clipping`) e análise longitudinal estruturada (`auditoria de imagem na mídia`). |
| **Semana 36** (31/08 a 06/09) | 37 | 81,1% (30/37) | Bateria LGPD aprofundada. Acertos fortes em consentimento, compartilhamento e agentes; lacunas pontuais em Poder Público, sensibilidade, bases legais e sanções foram corrigidas na própria sessão. |
| **Semana 33** (10/08 a 16/08) | 95 | 95,8% (91/95) | Fechamento do edital com produção audiovisual, digital, LGPD, Nielsen, redes governamentais, CMS/Adobe e transparência. |
| **Semana 32** (03/08 a 09/08) | 45 | 100% (45/45) | Marketing, planejamento, teorias do jornalismo, visualização e data storytelling gabaritados. |
| **Semana 31** (27/07 a 02/08) | 75 | 92,0% (69/75) | Marketing, branding, comunicação digital, acessibilidade, SEO, KPIs, copywriting e crise. |
| **Semana 30** (20/07 a 26/07) | 20 | 95,0% (19/20) | Simulado FGV de Comunicação; erro único em classificação pela finalidade predominante. |
| **Semana 29** (13/07 a 19/07) | 43 | 95,3% (41/43) | Noticiabilidade, redação jornalística, comunicação digital, IA aplicada, avaliação e ética. |
| **Semana 28** (06/07 a 12/07) | 62 | 98,4% (61/62) | Comunicação organizacional, digital, crise, planejamento, assessoria, comunicação pública e linguagem simples. |
| **Semana 27** (29/06 a 05/07) | 15 | 93,3% (14/15) | Baterias de comunicação organizacional, lead/pirâmide, gêneros jornalísticos e comunicação integrada. |

---

'''
diag_anchor = '## Diagnósticos de desempenho\n\n'
if '## Aproveitamento semanal' not in text:
    marker = '---\n\n' + diag_anchor
    if marker not in text:
        raise SystemExit('Âncora para tabela semanal não encontrada.')
    text = text.replace(marker, weekly + diag_anchor, 1)
else:
    raise SystemExit('Tabela semanal já existe; rotina temporária exige revisão antes de sobrescrever.')

# Diagnóstico novo
diagnostic = '''### Diagnóstico de bateria FGV: autores, teorias do jornalismo e assessoria (14/09/2026)
- **Resultado**: 85,7% (6/7 acertos).
- **Evidências positivas**: Schein (pressupostos básicos subjacentes); comunicação integrada em Kunsch; `newsmaking` como rotinas produtivas; separação entre gatekeeping, framing, agenda-setting e espiral do silêncio; `bridging` sem evasão; classificação mercadológica pela finalidade predominante mesmo em emissor público.
- **Erro mapeado**: Q5, [C] confusão conceitual. Foi escolhido `clipping` para uma análise de oito meses que comparava temas, veículos, fontes, concorrentes e padrões de exposição. O erro deslocou uma definição verdadeira para a etapa imediatamente anterior.
- **Fronteira**: clipping = coleta e organização; análise = interpretação; auditoria de imagem na mídia = leitura estruturada e abrangente da cobertura ao longo de período mais amplo.
- **Destino pedagógico**: `metrica_apenas` + `enriquecimento_teorico` + `questao_comentada_candidata`. A distinção já está consolidada em [[3 - Materias/Comunicacao/08 - assessoria de imprensa#6. Clipping, análise tópica e auditoria de imagem|Clipping, análise tópica e auditoria de imagem]], então não foi duplicada.
- **Ação**: reapresentar a distinção em caso prático futuro, sem reestudo passivo do artigo inteiro.

'''
text = text.replace(diag_anchor, diag_anchor + diagnostic, 1)

for needle in [
    '14/09/2026 | 7 | Comunicação Social',
    '**Semana 38** (14/09 a 20/09) | 7 | 85,7% (6/7)',
    '### Diagnóstico de bateria FGV: autores, teorias do jornalismo e assessoria (14/09/2026)'
]:
    if needle not in text:
        raise SystemExit(f'Validação falhou: {needle}')

PATH.write_text(text, encoding='utf-8')
print('Comunicação atualizada e validada.')
