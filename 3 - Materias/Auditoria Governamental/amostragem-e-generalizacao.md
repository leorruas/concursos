---
articleId: art-f248acc45b9541df
articleAliases: ["3 - Materias/Auditoria Governamental/amostragem-e-generalizacao.md"]
title: "Amostragem de auditoria e limites da generalização"
type: "conceito"
status: "ativo"
created: 2026-11-04
updated: 2026-11-07
---

# Amostragem de auditoria e limites da generalização

## Núcleo do conceito

Uma auditoria sobre 1.200 pagamentos seleciona 60 para exame. Encontrar 12 operações problemáticas permite afirmar que houve **12 ocorrências nos 60 itens examinados**, mas **não basta**, por si só, para concluir que 20% dos 1.200 pagamentos são irregulares. O alcance da conclusão depende da população, do modo de seleção e da incerteza.

A **amostragem** utiliza o exame de parte de uma população para produzir informações. O Manual de Orientações Técnicas (MOT) da Controladoria-Geral da União (CGU), seção **4.3.4.7**, exige definir corretamente a população, escolher método compatível com o objetivo e declarar se os resultados podem ser generalizados.

Este artigo corresponde à **unidade 08** do roteiro de Auditoria Governamental. É material de entrada **preparado antes da aula**: sua publicação não equivale a exposição, exercício respondido ou conhecimento demonstrado.

## População-alvo, referenciada e amostrada

| Termo do MOT | Qual conjunto? | Exemplo hipotético |
| :--- | :--- | :--- |
| **População-alvo** | Conjunto sobre o qual se deseja conhecer alguma característica | Todos os pagamentos de bolsas no exercício |
| **População referenciada** | Conjunto definido por uma base ou cadastro usado como referência | Pagamentos que aparecem no sistema financeiro |
| **População de pesquisa ou amostrada** | Conjunto efetivamente coberto pela pesquisa | Registros disponíveis e incluídos para seleção após conferir os filtros |

Esses conjuntos **podem não coincidir**. Se uma extração excluiu pagamentos cancelados, estornados, manuais ou mantidos em outro sistema, o sorteio não alcança o universo pretendido. **Aumentar a amostra retirada da mesma base defeituosa não corrige o erro de cobertura.**

A **unidade amostral** precisa ser especificada: estudante, concessão, processo ou pagamento? Um mesmo estudante pode gerar vários pagamentos, e contar cada um como indivíduo independente pode produzir conclusões equivocadas. O desenho deve preservar a ligação entre unidade, fonte, critério e pergunta de auditoria.

## Classificação e fronteiras: método probabilístico e não probabilístico

| Questão | **Amostragem probabilística** | **Amostragem não probabilística** |
| :--- | :--- | :--- |
| Como seleciona? | Por processo aleatório definido | Por critério que não permite inferência probabilística, como julgamento e risco |
| Risco amostral | Pode ser calculado conforme o plano | Não é calculado objetivamente por método probabilístico |
| Generalização | **Possível**, nos limites do desenho e da incerteza | **Não autoriza** inferir estatisticamente o resultado ao conjunto |
| Uso | Estimar características de população delimitada | Examinar operações escolhidas por relevância, risco e indícios |

O MOT indica que, quando o procedimento pretende **generalizar à população**, deve empregar amostragem probabilística. A não probabilística sustenta conclusões sobre **os itens escolhidos**, não estimativas válidas do universo inteiro.

**Seleção dirigida por risco** pode ser a melhor escolha para investigar pagamentos atípicos, grandes valores ou possíveis duplicidades. Não é, porém, sinônimo de seleção representativa. Uma amostra numerosa não adquire automaticamente capacidade de generalização.

### Exemplos de métodos

**Aleatória simples:** selecionar elementos por sorteio a partir de um cadastro íntegro. **Sistemática com início aleatório:** selecionar em intervalos predefinidos após sorteio do ponto inicial, examinando eventual periodicidade na base. **Estratificada:** dividir a população em grupos e planejar seleção e eventual ponderação para cada grupo. São exemplos metodológicos gerais, e não uma lista fechada do MOT.

**Dirigida ou por julgamento:** escolher, por exemplo, os 60 maiores pagamentos. Adequada para exame de situações críticas, mas sem inferência estatística automática para todos os pagamentos.

**Por que examinar os maiores valores?** O objetivo pode ser **priorizar a exposição financeira**: um erro de percentual semelhante em um contrato de grande valor tende a produzir maior impacto monetário do que em um contrato pequeno. A seleção permite concentrar recursos e tempo em operações materialmente relevantes, conferir documentos de contratos mais vultosos e aprofundar indícios de sobrepreço, pagamentos indevidos ou falhas de controle. **Valor alto não prova irregularidade nem significa, sozinho, maior probabilidade de fraude**: o critério de maior valor prioriza o *impacto potencial*, que pode ser combinado com indícios, histórico e vulnerabilidades.

**Limite dessa escolha:** examinar os 50 contratos mais caros pode permitir afirmar quantos desses **50 contratos** apresentaram problemas e estimar o valor financeiro diretamente constatado nesses casos. Não permite, sem desenho amostral apropriado, estimar a **proporção de contratos irregulares entre todos os contratos**. O subconjunto dos maiores valores é intencionalmente diferente do restante.

**Censo:** examinar todos os elementos de uma população corretamente definida. Reduz a necessidade de estimar características por amostragem **daquela população**, mas não elimina falhas de cadastro, de evidência ou de aplicação dos testes. Censo não é asseguração absoluta.

## Risco de amostragem: duas direções possíveis

O **risco de amostragem** é o risco de a conclusão baseada na amostra ser diferente da conclusão obtida se o procedimento fosse aplicado ao conjunto inteiro. O MOT distingue:

1. A amostra sugere **população adequada**, quando a população é inadequada.
2. A amostra sugere **população inadequada**, quando a população é adequada.

O risco deve ser administrado conforme o grau de segurança pretendido. **Para o mesmo plano amostral, em geral, ampliar o tamanho da amostra reduz o risco de amostragem**. Isso não elimina outros erros, como falhas no cadastro, omissões na coleta, informação incorreta ou testes mal executados.

**O censo é uma referência para definir o risco amostral, não uma obrigação de examinar tudo.** A definição compara a conclusão da amostra com a que seria alcançada ao examinar a população inteira. Uma amostra pode levar tanto a uma conclusão indevidamente favorável quanto a uma indevidamente desfavorável. O exame universal pode ser inviável ou desnecessário, conforme o objetivo, os recursos e o grau de segurança pretendido.

**Risco amostral × erro não amostral:** o primeiro decorre de a amostra poder produzir conclusão diferente da população; pode diminuir com amostragem probabilística bem planejada e tamanho adequado. O segundo decorre de problemas de cobertura, coleta, aplicação dos procedimentos, interpretação ou qualidade dos dados. Aumentar o número de itens examinados não corrige, por si só, uma base incompleta nem uma técnica aplicada incorretamente.

**Precisão e incerteza:** em método probabilístico, a divulgação da estimativa deve apresentar o risco e a precisão, conforme o plano, inclusive intervalos de confiança quando pertinentes. Intervalos não são certificados de que cada item individual está correto. Exigir um número fixo de elementos “suficientes” para qualquer auditoria ignora finalidade, variação, risco, população e desenho.

## Exemplo aplicado: dois exames com o mesmo resultado numérico

**Cenário A, seleção dirigida:** uma equipe seleciona 60 pagamentos marcados como suspeitos e encontra 12 falhas documentadas. O resultado observado é **12/60 entre os selecionados**. Não se pode concluir que a proporção de falhas em todos os 1.200 pagamentos seja 20%.

**Cenário B, desenho probabilístico válido:** uma equipe sorteia 60 pagamentos de uma população íntegra de 1.200, conforme plano documentado, e encontra 12 falhas. Agora é possível **avaliar** uma estimativa populacional, mas a conclusão exige considerar probabilidades de inclusão, possíveis estratos, não resposta e incerteza. O número 20% só pode ser apresentado como estimativa adequada se o método o sustentar.

O dado 12/60 é idêntico nos dois cenários. **A inferência autorizada é diferente porque o processo de seleção mudou.**

## Extensão dos testes e mudança do escopo

**Aumentar extensão:** examinar 100 em vez de 60 pagamentos **do mesmo universo, período e objeto**. **Mudar escopo:** acrescentar outro exercício, unidade auditada ou tipo de pagamento que estava excluído. A revisão do programa depende da supervisão apropriada, conforme [[3 - Materias/Auditoria Governamental/planejamento-individual-de-auditoria|planejamento individual]].

**Risco amostral versus cobertura:** se o arquivo não contém uma classe inteira de pagamentos, sortear mais registros nele não atinge os omitidos. O problema não é apenas o número de sorteios; é a diferença entre população pretendida e população realmente abrangida.

## Documentar para sustentar a conclusão

O MOT exige descrição suficiente da **população, unidade de seleção, plano amostral, critérios e processo de seleção, amostra efetiva, tratamento de não respostas e metodologia de cálculo**. Para desenho probabilístico, também importam probabilidades de inclusão, critérios de estratificação, estimadores e respectivos erros.

Na comunicação, separar **o que foi observado nos itens**, **a conclusão sobre a população quando válida**, **o risco/incerteza da inferência** e **o encaminhamento recomendado**. Os papéis de trabalho devem permitir reconstruir os exames. A amostra escolhida para obter indícios relevantes pode justificar procedimentos adicionais sem permitir projeção estatística.

## Como o Cebraspe pode cobrar

Possíveis inversões: aumentar amostra corrige automaticamente cadastro incompleto; seleção por maior valor permite generalização; toda amostra aleatória gera conclusão infalível; amostra grande é necessariamente representativa; risco amostral corresponde a qualquer erro do auditor.

**Item didático C/E:** “A seleção dos pagamentos de maior valor permite estimar a proporção de pagamentos irregulares na população com fundamento probabilístico, desde que os elementos escolhidos sejam numerosos.” **Errado.** O tamanho não substitui a seleção probabilística.

**Item didático C/E:** “Mesmo com sorteio aleatório corretamente realizado, uma base que omite parte dos registros pode comprometer a conclusão acerca da população-alvo.” **Certo.** O erro de cobertura não desaparece com a aleatoriedade dentro da base incompleta.

Exemplos **não respondidos** pelo estudante, sem pontuação, gabarito oficial ou calibração de dificuldade.

## Tensões, conexões e heurísticas

- **População-alvo × referenciada × amostrada:** podem divergir.
- **Probabilística × dirigida:** a segunda não produz inferência probabilística populacional.
- **Amostra grande × representativa:** quantidade não substitui desenho.
- **Risco amostral × cadastro incompleto:** problemas distintos.
- **Aumento da extensão × mudança de escopo:** acrescentar itens dentro do mesmo recorte difere de incluir outro recorte.
- **Estimativa de população × constatação dos casos selecionados:** alcance diferente.

[[3 - Materias/Auditoria Governamental/procedimentos-e-testes-de-auditoria|Procedimentos e testes]] estabelece o **que e como** examinar. [[3 - Materias/Auditoria Governamental/evidencias-e-documentacao|Evidências e documentação]] ajuda a julgar qualidade e suficiência. [[3 - Materias/Auditoria Governamental/planejamento-individual-de-auditoria|Planejamento individual]] define limites do trabalho.

**Heurística:** antes de generalizar, conferir **população → base → unidade → método → risco → conclusão**.

## Fontes

- [CGU: MOT, seção 4.3.4.7, amostragem e generalização](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal).
- [CGU: Normas de Auditoria Interna, IN SFC nº 3/2017 e IN SFC nº 8/2017](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/normas-de-auditoria-interna).
- [[2 - Editais/CGU 2026 - Auditoria|Programa CGU 2026, P3.1.3]]. As retificações do edital prevalecem.
