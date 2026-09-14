from pathlib import Path
import re

PATH = Path('3 - Materias/Logica/Avancos.md')
text = PATH.read_text(encoding='utf-8')

# Idempotência: se a sessão já entrou, não duplica.
if '14/09/2026 | 6 | Raciocínio Lógico' in text:
    raise SystemExit('Sessão de 14/09 já presente em Lógica; abortando para evitar duplicata.')

# Atualiza frontmatter.
text, n = re.subn(r'(?m)^updated: \d{4}-\d{2}-\d{2}$', 'updated: 2026-09-14', text, count=1)
if n != 1:
    raise SystemExit('Campo updated não encontrado de forma única.')

# Insere volume diário no topo da tabela.
volume_anchor = '| :--- | :--- | :--- | :--- |\n'
volume_pos = text.find(volume_anchor, text.find('## Volume diário de exercícios'))
if volume_pos < 0:
    raise SystemExit('Tabela de volume diário não encontrada.')
volume_pos += len(volume_anchor)
row = '| 14/09/2026 | 6 | Raciocínio Lógico | Bateria mista de quantificadores, proposições, inferência categórica, De Morgan e condicional: 5/6 (83,3%). Erro único [C] na negação de “nenhum”; De Morgan e falsidade da condicional recuperados corretamente. |\n'
text = text[:volume_pos] + row + text[volume_pos:]

# Cria tabela semanal local antes dos diagnósticos, conforme governança.
weekly = '''## Aproveitamento semanal

| Semana / Período | Questões | Aproveitamento | Evolução / Análise de Progresso |
| :--- | :--- | :--- | :--- |
| **Semana 38** (14/09 a 20/09) | 6 | 83,3% (5/6) | Retenção ampla preservada. Erro isolado em `Nenhum A é B → Algum A é B`; De Morgan e caso falso da condicional apareceram corretamente em contexto misto. |
| **Semana 36** (31/08 a 06/09) | 30 | 63,3% (19/30) | Baterias de 02, 03 e 04/09. Houve recuperação de necessária × suficiente, com oscilações em tradução da condicional, De Morgan e contrapositiva. O Simulado 02 não entra nesta linha porque o número total de questões de Lógica não foi preservado. |
| **Semana 27** (29/06 a 05/07) | 40 | 85,0% (34/40) | Revisão geral de 30/06 (26/30) + Possível × Necessário × Impossível em 02/07 (8/10). |
| **Semana 25** (15/06 a 21/06) | 40 | 90,0% (36/40) | Revisão de combinatória em 16/06 (21/25) + complementos e restrições em 20/06 (15/15). |
| **Semana 24** (08/06 a 14/06) | 43 | 88,4% (38/43) | Revisão de combinatória, arranjos e inclusão-exclusão: 38/43 no consolidado registrado. |
| **Semana 22** (25/05 a 31/05) | 419 | Não calculável com precisão | O volume histórico está preservado, mas nem todas as baterias dessa semana registram um total consolidado de acertos; não inferir percentual. |

---

'''
diag_anchor = '## Diagnósticos de desempenho\n\n'
if diag_anchor not in text:
    raise SystemExit('Cabeçalho de diagnósticos não encontrado.')
text = text.replace('---\n\n' + diag_anchor, weekly + diag_anchor, 1)

# Insere diagnóstico novo no topo.
diagnostic = '''### Diagnóstico de bateria mista: quantificadores, proposições e condicional (14/09/2026)
- **Resultado**: 83,3% (5/6 acertos válidos).
- **Evidências positivas**: interpretação correta de `algum` como existência mínima; distinção entre proposição e sentença aberta; inferência existencial sem extrapolação; negação de universal combinada com De Morgan; identificação do único caso falso da condicional (`V → F`).
- **Erro mapeado**: Q2, [C] confusão conceitual. Ao negar “Nenhum analista utiliza o sistema legado”, foi marcada “Todo analista utiliza”. A negação mínima suficiente é **algum analista utiliza**.
- **Diagnóstico clínico**: a falha ficou circunscrita à fronteira `nenhum → algum`. Não há evidência de colapso geral em Lógica nesta sessão. De Morgan, inferência categórica e condicional apareceram corretamente.
- **Destino pedagógico**: `metrica_apenas` + `enriquecimento_teorico` + `questao_comentada_candidata`. A regra já está consolidada em [[3 - Materias/Logica/03 - quantificadores#Negação dos quantificadores|Negação dos quantificadores]], então não foi duplicada na teoria.
- **Ação**: não saturar com nova bateria exclusiva de quantificadores; reapresentar a fronteira de forma disfarçada em treino misto futuro.

'''
text = text.replace(diag_anchor, diag_anchor + diagnostic, 1)

# Validações mínimas.
for needle in [
    '14/09/2026 | 6 | Raciocínio Lógico',
    '**Semana 38** (14/09 a 20/09) | 6 | 83,3% (5/6)',
    '### Diagnóstico de bateria mista: quantificadores, proposições e condicional (14/09/2026)'
]:
    if needle not in text:
        raise SystemExit(f'Validação falhou: {needle}')

PATH.write_text(text, encoding='utf-8')
print('Lógica atualizada e validada.')
