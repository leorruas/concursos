---
title: "Câmara 2026: preservação local do corpus de provas"
type: "guia"
status: "ativo"
created: 2026-10-03
updated: 2026-10-03
---

# Câmara 2026: preservação local do corpus de provas

Nota operacional para executar posteriormente no **Codex ou Gemini com acesso ao repositório local**. Esta nota pertence ao vault e **não deve ser publicada no GitHub Pages**.

O objetivo é manter cópias locais dos cadernos e gabaritos usados em [[4 - Projetos/camara-2026/Corpus de provas e padrao Cebraspe|Corpus de provas e padrão Cebraspe]], sem depender apenas da disponibilidade futura dos links externos.

## Regra de armazenamento

Destino local sugerido:

`2 - Provas/Camara-Cebraspe/`

Os PDFs devem permanecer **locais e fora do Git**. O `.gitignore` do repositório já contém `*.pdf`; não remover nem contornar essa regra.

A Câmara 2007 informa no próprio caderno restrição à divulgação ou impressão parcial ou total. Portanto, esse PDF deve ser tratado estritamente como cópia local para estudo. Mesmo nas provas em que a fonte permite uso didático, manter os binários fora do repositório público por padrão.

Arquivos Markdown de metadados, hashes, proveniência e índices podem permanecer versionados no projeto, desde que não reproduzam integralmente o conteúdo protegido das provas.

## Links a preservar

### Correios 2011: Comunicação Social, Publicidade e Propaganda

- caderno oficial: https://cdn.cebraspe.org.br/concursos/CORREIOS2011/arquivos/ECT11_028_83.pdf
- gabarito definitivo: https://cdn.cebraspe.org.br/concursos/CORREIOS2011/arquivos/Gab_Definitivo_ECT11_028_83.PDF

### CNMP 2023: Analista, Comunicação Social

- caderno oficial: https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/814_CNMP_003_01.PDF
- gabarito definitivo: https://cdn.cebraspe.org.br/concursos/cnmp_23/arquivos/GAB_DEFINITIVO_814_CNMP_003_01.PDF

### DPDF 2020: Comunicação Social

- caderno oficial: https://cdn.cebraspe.org.br/concursos/dpdf_20_analista/arquivos/548_DPDF_005_01.PDF
- gabarito definitivo: https://cdn.cebraspe.org.br/concursos/dpdf_20_analista/arquivos/GAB_DEFINITIVO_548_DPDF_005_01.PDF

### Câmara dos Deputados 2003: Técnico em Comunicação Social

- página oficial do concurso: https://cdn.cebraspe.org.br/concursos/_antigos/2003/CD2003/
- televisão: https://cdn.cebraspe.org.br/concursos/_antigos/2003/CD2003/arquivos/TCS_TV.PDF
- rádio: https://cdn.cebraspe.org.br/concursos/_antigos/2003/CD2003/arquivos/TCS_RADIO.PDF
- imprensa escrita: https://cdn.cebraspe.org.br/concursos/_antigos/2003/CD2003/arquivos/TCS_IMP_ESC.PDF
- gabarito definitivo: https://cdn.cebraspe.org.br/concursos/_antigos/2003/CD2003/arquivos/CAMARA_GAB.PDF

### Câmara dos Deputados 2007: Divulgação Institucional

- página oficial da área: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concursos-realizados/2007/analista-legislativo/arquivos/grupo-ii/comunicacao-social/divulgacao-institucional
- caderno tipo 1: https://www2.camara.leg.br/transparencia/concursos/concursos-realizados/2007/analista-legislativo/arquivos/grupo-ii/comunicacao-social/divulgacao-institucional/Prova-N14-Tipo-001.pdf
- gabarito tipo 1: https://www2.camara.leg.br/transparencia/recursos-humanos/concursos/concursos-realizados/2007/analista-legislativo/arquivos/grupo-ii/comunicacao-social/divulgacao-institucional/Gabarito-N14-tipo-1-Folha-1.pdf

Se algum link direto tiver sido reorganizado pelo Portal da Câmara, resolver o `href` atual a partir da página oficial da área em vez de adivinhar um novo caminho.

### TCE-MG 2026: Comunicador Social

- caderno atualmente disponível por espelho: https://arquivos.qconcursos.com/prova/arquivo_prova/145076/cespe-cebraspe-2026-tce-mg-comunicador-social-prova.pdf
- edital oficial atualizado: https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/DE4C24366A74F67144091D9B1A570F6D0BD2BB1821318ACFBE708991C7C28A8A.html
- gabarito definitivo oficial: https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/A35044DF07E64EA13ED9971F6468D99857F94A6E731A03FF9D21324F8EC69485.pdf
- padrão definitivo da discursiva: https://cdn.cebraspe.org.br/concursos/tce_mg_25/arquivos/F38183E8ACE5B775CF445F24D52F5AB2E256333F594FE1078FD73B84B535690C.pdf

Antes de baixar o caderno do espelho, procurar uma cópia oficial no evento `TCE_MG_25`. Se existir, preferir a oficial e registrar a substituição.

### PF Administrativo 2025: Técnico em Comunicação Social

- caderno oficial: https://cdn.cebraspe.org.br/concursos/PF_25_ADM/arquivos/094_PF_014_01.pdf
- gabarito definitivo oficial: https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/Gab_Definitivo_094_PF_014_01.pdf
- edital: https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/Ed_1_2025_PF_Administrativo_Abertura_atualizado_ret_4.pdf
- padrão definitivo da discursiva: https://cdn.cebraspe.org.br/concursos/pf_25_adm/arquivos/PF_25_ADM_PADR%C3%83O_DE_RESPOSTA_DEFINITIVO_CARGO_14.pdf

## Prompt para Codex ou Gemini

Copiar o bloco abaixo em um agente com acesso ao checkout local do repositório.

~~~text
Você está trabalhando no repositório/vault de concursos.

Objetivo: preservar localmente os cadernos, gabaritos e padrões de resposta listados em:
4 - Projetos/camara-2026/Preservacao local do corpus de provas.md

Antes de agir:
1. leia AGENTS.md, me.md, index.md e .agent/AGENTS.md;
2. execute o preflight/gate de integridade previsto pela governança;
3. leia também:
   - 4 - Projetos/camara-2026/Corpus de provas e padrao Cebraspe.md
   - 4 - Projetos/camara-2026/Indice de questoes reais Cebraspe.md
   - 4 - Projetos/camara-2026/Preservacao local do corpus de provas.md

Faça o trabalho em etapas verificáveis:

1. Crie localmente a pasta:
   2 - Provas/Camara-Cebraspe/

2. Baixe os PDFs indicados na nota de preservação. Para páginas HTML que apontam para o arquivo, resolva primeiro o link oficial. Prefira nesta ordem:
   a) Cebraspe ou Câmara dos Deputados;
   b) outra fonte institucional;
   c) espelho já documentado no corpus, apenas quando a fonte oficial do caderno não estiver disponível.

3. Não invente URLs. Se um link falhar, localize o arquivo a partir da página oficial do concurso e registre qual URL final foi usada.

4. Para cada download, valide:
   - status HTTP de sucesso;
   - Content-Type compatível ou assinatura %PDF;
   - arquivo não vazio;
   - abertura/leitura básica do PDF;
   - SHA-256;
   - tamanho em bytes.

5. Use nomes determinísticos, por exemplo:
   correios-2011-publicidade-prova.pdf
   correios-2011-publicidade-gabarito.pdf
   cnmp-2023-comunicacao-prova.pdf
   cnmp-2023-comunicacao-gabarito.pdf
   dpdf-2020-comunicacao-prova.pdf
   dpdf-2020-comunicacao-gabarito.pdf
   camara-2003-comunicacao-tv-prova.pdf
   camara-2003-comunicacao-radio-prova.pdf
   camara-2003-comunicacao-imprensa-prova.pdf
   camara-2003-comunicacao-gabarito.pdf
   camara-2007-divulgacao-tipo1-prova.pdf
   camara-2007-divulgacao-tipo1-gabarito.pdf
   tce-mg-2026-comunicador-prova.pdf
   tce-mg-2026-comunicador-gabarito.pdf
   tce-mg-2026-comunicador-discursiva-padrao.pdf
   pf-2025-comunicacao-prova.pdf
   pf-2025-comunicacao-gabarito.pdf
   pf-2025-comunicacao-discursiva-padrao.pdf

6. NÃO adicione nem force os PDFs ao Git. O .gitignore já ignora *.pdf. Preserve isso. O objetivo é ter os binários apenas no vault local, não no repositório público e não no GitHub Pages.

7. Em especial, não publique o caderno da Câmara 2007. O próprio documento traz restrição de divulgação/impressão. A cópia é apenas local para estudo.

8. Depois dos downloads, crie ou atualize um manifesto Markdown em:
   4 - Projetos/camara-2026/Manifesto local do corpus de provas.md

Para cada arquivo, registre:
   - nome local;
   - órgão;
   - ano;
   - banca;
   - cargo/área;
   - tipo: prova, gabarito, edital ou padrão discursivo;
   - URL de origem;
   - qualidade da fonte: oficial ou espelho;
   - SHA-256;
   - tamanho;
   - data da verificação;
   - observações de direitos/restrições;
   - caminho local relativo.

9. Não copie o texto integral das provas para o manifesto. O índice pedagógico permanece em:
   4 - Projetos/camara-2026/Indice de questoes reais Cebraspe.md

10. Se encontrar uma fonte oficial melhor para algum arquivo hoje registrado como espelho, atualize somente o link/metadado correspondente no corpus e explique a troca.

11. Não crie conteúdo em 3 - Materias/ e não altere a página pública de análise Cebraspe nesta tarefa. Esta é uma operação de preservação local do corpus.

12. Ao final, execute as validações exigidas pela governança e apresente:
   - arquivos baixados com sucesso;
   - arquivos pendentes;
   - links substituídos;
   - hashes;
   - confirmação de que nenhum PDF entrou no Git.
~~~

## Critério de conclusão

Esta tarefa só estará concluída quando houver cópia local válida de cada arquivo disponível, manifesto com proveniência e hash, e confirmação de que **nenhum PDF foi versionado ou publicado**.

Se algum arquivo não puder ser recuperado, mantê-lo como pendência explícita com o último link oficial conhecido.
