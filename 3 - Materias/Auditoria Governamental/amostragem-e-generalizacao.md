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

**Qual é a finalidade de selecionar itens?** O censo pode ser inviável ou custoso. A equipe pode querer **investigar casos críticos**, escolhidos por valor, risco e indícios, ou **estimar características de uma população**, generalizando resultados quando o desenho permitir. Na primeira situação, a seleção dirigida produz achados sobre os casos examinados; na segunda, a inferência estatística requer amostragem probabilística apropriada. A finalidade vem antes da escolha do método, e a seleção não substitui a qualidade dos procedimentos aplicados.

Este artigo corresponde à **unidade 08** do roteiro de Auditoria Governamental. É material de entrada **preparado antes da aula**: sua publicação não equivale a exposição, exercício respondido ou conhecimento demonstrado.

## População-alvo, referenciada e amostrada

| Termo do MOT | Qual conjunto? | Exemplo hipotético |
| :--- | :--- | :--- |
| **População-alvo** | Conjunto sobre o qual se deseja conhecer alguma característica | Todos os pagamentos de bolsas no exercício |
| **População referenciada** | Conjunto definido por uma base ou cadastro usado como referência | Pagamentos que aparecem no sistema financeiro |
| **População de pesquisa ou amostrada** | Conjunto efetivamente coberto pela pesquisa | Registros disponíveis e incluídos para seleção após conferir os filtros |

Esses conjuntos **podem não coincidir**. Se uma extração excluiu pagamentos cancelados, estornados, manuais ou mantidos em outro sistema, o sorteio não alcança o universo pretendido. **Aumentar a amostra retirada da mesma base defeituosa não corrige o erro de cobertura.**

**Exemplo progressivo: erro de cobertura.** O órgão realizou 1.200 pagamentos: 1.000 automáticos e 200 manuais. A base do sorteio possui apenas os automáticos. Mesmo uma amostra aleatória extensa, ou o exame dos 1.000 registros disponíveis, **não oferece evidência sobre os 200 omitidos**. A margem de erro calculada para o sorteio não mede essa omissão. É necessário incorporar a categoria ausente ou declarar a limitação da conclusão.

A **unidade amostral** precisa ser especificada: estudante, concessão, processo ou pagamento? Um mesmo estudante pode gerar vários pagamentos, e contar cada um como indivíduo independente pode produzir conclusões equivocadas. O desenho deve preservar a ligação entre unidade, fonte, critério e pergunta de auditoria.

**Mude a pergunta, mantenha os dados:** foram examinados 100 pagamentos realizados a 25 beneficiários. Para estimar quantos **pagamentos** foram irregulares, o pagamento é unidade pertinente. Para estimar a proporção de **beneficiários** com alguma irregularidade, é preciso identificar as pessoas e associar seus pagamentos: 100 registros não equivalem a 100 indivíduos. Várias observações de uma mesma pessoa podem ser dependentes e exigem tratamento adequado no desenho e na estimativa.

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

**Periodicidade na amostragem sistemática:** suponha registros ordenados por dia da semana, com padrão repetido a cada sete posições. Se o auditor selecionar cada sétimo registro, após sortear o primeiro, pode concentrar a amostra em um mesmo dia. Se as características investigadas variarem conforme o dia, isso compromete o exame. **O início aleatório não elimina automaticamente o efeito de padrões periódicos**; deve-se analisar a ordenação e o intervalo escolhido. Trata-se de exemplo metodológico complementar, não de regra específica adicional da seção 4.3.4.7 do MOT.

**Ponderação na estratificação:** considere 1.000 contratos: 900 de baixo valor e 100 de alto valor. Admita taxas de irregularidade estimadas validamente de 10% e 30%, respectivamente, dentro de cada estrato. A média simples seria 20%, mas a taxa global, ponderada pelos tamanhos, é **(900 × 10% + 100 × 30%) / 1.000 = 12%**. Quando as probabilidades de inclusão diferem, a estimação deve respeitar o plano e os pesos correspondentes. Examinar proporcionalmente mais contratos caros não autoriza dar o mesmo peso aos dois estratos.

**Dirigida ou por julgamento:** escolher, por exemplo, os 60 maiores pagamentos. Adequada para exame de situações críticas, mas sem inferência estatística automática para todos os pagamentos.

**Por que examinar os maiores valores?** O objetivo pode ser **priorizar a exposição financeira**: um erro de percentual semelhante em um contrato de grande valor tende a produzir maior impacto monetário do que em um contrato pequeno. A seleção permite concentrar recursos e tempo em operações materialmente relevantes, conferir documentos de contratos mais vultosos e aprofundar indícios de sobrepreço, pagamentos indevidos ou falhas de controle. **Valor alto não prova irregularidade nem significa, sozinho, maior probabilidade de fraude**: o critério de maior valor prioriza o *impacto potencial*, que pode ser combinado com indícios, histórico e vulnerabilidades.

**Limite dessa escolha:** examinar os 50 contratos mais caros pode permitir afirmar quantos desses **50 contratos** apresentaram problemas e estimar o valor financeiro diretamente constatado nesses casos. Não permite, sem desenho amostral apropriado, estimar a **proporção de contratos irregulares entre todos os contratos**. O subconjunto dos maiores valores é intencionalmente diferente do restante.

**Censo:** examinar todos os elementos de uma população corretamente definida. Reduz a necessidade de estimar características por amostragem **daquela população**, mas não elimina falhas de cadastro, de evidência ou de aplicação dos testes. Censo não é asseguração absoluta.

## Risco de amostragem: duas direções possíveis

A pergunta central é: **a conclusão obtida pela amostra poderia ser diferente daquela produzida se o mesmo procedimento fosse aplicado a toda a população corretamente definida?** Esse é o risco de amostragem apresentado na seção 4.3.4.7 do MOT.

Primeiro, é preciso conhecer **o critério de adequação**. Uma população é adequada ou inadequada *em relação ao critério adotado*, e isso não significa ausência absoluta de falhas. Nos exemplos hipotéticos a seguir, considere uma tolerância de **até 10% de operações com falha**. Esse percentual serve apenas para ensinar o raciocínio; **não é um limite geral fixado pelo MOT**.

### Conclusão indevidamente favorável: problema real não identificado

Suponha que a população tenha **20% de operações com falha**, mas a amostra revele **5%**. Se o auditor concluir que a situação está adequada ao critério hipotético de 10%, terá deixado passar um problema existente.

Em um **teste de controles**, esse erro corresponde a considerar um controle **mais eficaz do que realmente é**. Em um **teste de detalhes**, pode corresponder à ausência de identificação de distorção relevante que de fato existe. O principal efeito é comprometer a **eficácia da auditoria** e permitir uma conclusão imprópria.

### Conclusão indevidamente desfavorável: problema apontado sem confirmação na população

Agora suponha que a população tenha **3% de operações com falha**, mas a amostra apresente **15%**. O auditor pode concluir que a situação é inadequada, embora a aplicação do mesmo procedimento a toda a população demonstrasse conformidade com o critério hipotético de 10%.

Em um **teste de controles**, essa direção equivale a considerar o controle **menos eficaz do que realmente é**. Em um **teste de detalhes**, pode levar à identificação de uma distorção relevante que não seria confirmada pelo exame integral. O principal efeito é prejudicar a **eficiência da auditoria**: a conclusão equivocada pode exigir exames adicionais.

**As duas direções pertencem ao risco amostral.** A amostra tanto pode deixar passar um problema quanto apontar um problema que a população, pelo mesmo critério, não apresenta. O MOT fornece essa classificação geral; o contraste entre eficácia e eficiência nos dois tipos de teste está expresso na **Norma Brasileira de Contabilidade Técnica de Auditoria (NBC TA) 530, item 5**, usada aqui como complemento.

### O censo na definição: parâmetro hipotético, não obrigação

Dizer **"se o procedimento fosse aplicado a toda a população"** significa imaginar qual seria a conclusão usando o mesmo teste em todos os elementos. **Não equivale a exigir censo em cada auditoria.** O MOT indica precisamente que a amostragem é útil quando o censo é inviável ou antieconômico e os objetivos podem ser atendidos com a amostra.

### Risco amostral versus erro não amostral

O **risco amostral** decorre da incerteza própria de examinar uma parte da população. O tamanho e o plano amostral o influenciam; em geral, uma amostra maior, mantido o plano adequado, reduz esse risco.

O **erro não amostral** provém de outras causas: aplicar incorretamente uma regra de elegibilidade, interpretar documentos de modo errado, usar informações incorretas ou uma base que omite categoria inteira de operações. **Aumentar a amostra não corrige automaticamente esses problemas.** A NBC TA 530 chama essa categoria de *risco não resultante da amostragem*; aqui, "erro não amostral" é a expressão didática para as falhas que a produzem.

**Mantenha o mesmo objeto e mude só a causa:**

- **Seleção:** o teste está correto, mas os itens sorteados casualmente apresentam muito mais falhas que a população. O risco decorre da **amostragem**.
- **Execução:** a amostra foi bem selecionada, mas o auditor aplica incorretamente o critério a todos os registros. Há **erro não amostral de procedimento**.
- **Cobertura:** a equipe sorteia corretamente, mas sua base exclui pagamentos manuais existentes na população-alvo. Há **erro de cobertura**, também fora da simples variabilidade amostral.

A solução deve enfrentar a causa: melhorar plano e extensão para administrar risco amostral; corrigir a aplicação do procedimento, as fontes de dados e a cobertura para enfrentar erros não amostrais.

**Precisão e incerteza:** nos desenhos probabilísticos, o resultado deve explicitar risco e precisão, com intervalos de confiança quando pertinentes. Um intervalo não certifica cada registro individual nem compensa automaticamente omissões sistemáticas na base. Não existe tamanho único de amostra suficiente para toda auditoria.

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

Possíveis inversões: aumentar amostra corrige automaticamente cadastro incompleto; seleção por maior valor permite generalização; toda amostra aleatória gera conclusão infalível; amostra grande é necessariamente representativa; risco amostral corresponde a qualquer erro do auditor; o risco amostral ocorre apenas quando um problema real passa despercebido; a menção ao exame de toda a população obriga a realizar censo; sorteio do início neutraliza periodicidade; estratos de tamanhos diferentes devem ser combinados por média simples.

**Item didático C/E:** “A seleção dos pagamentos de maior valor permite estimar a proporção de pagamentos irregulares na população com fundamento probabilístico, desde que os elementos escolhidos sejam numerosos.” **Errado.** O tamanho não substitui a seleção probabilística.

**Item didático C/E:** “Mesmo com sorteio aleatório corretamente realizado, uma base que omite parte dos registros pode comprometer a conclusão acerca da população-alvo.” **Certo.** O erro de cobertura não desaparece com a aleatoriedade dentro da base incompleta.

**Item didático C/E:** “Se uma amostra indicar falhas excessivas, mas a população examinada integralmente pelo mesmo procedimento atender ao critério adotado, poderá ter ocorrido risco de amostragem.” **Certo.** A conclusão indevidamente desfavorável é uma das duas possibilidades descritas no MOT, e a comparação com o exame integral não torna o censo obrigatório.

**Item didático C/E:** “Aumentar o tamanho da amostra elimina erros provocados pela aplicação incorreta do critério usado para avaliar as operações.” **Errado.** A falha de execução é não amostral; seu tratamento exige corrigir o procedimento.

Exemplos **não respondidos** pelo estudante, sem pontuação, gabarito oficial ou calibração de dificuldade.

## Tensões, conexões e heurísticas

- **População-alvo × referenciada × amostrada:** podem divergir.
- **Probabilística × dirigida:** a segunda não produz inferência probabilística populacional.
- **Amostra grande × representativa:** quantidade não substitui desenho.
- **Conclusão amostral favorável × desfavorável:** os dois sentidos podem levar a erro, afetando principalmente eficácia ou eficiência.
- **Risco amostral × erro não amostral:** diferença de seleção versus problema de execução, cobertura ou qualidade dos dados.
- **Risco amostral × cadastro incompleto:** problemas distintos.
- **Aumento da extensão × mudança de escopo:** acrescentar itens dentro do mesmo recorte difere de incluir outro recorte.
- **Estimativa de população × constatação dos casos selecionados:** alcance diferente.

[[3 - Materias/Auditoria Governamental/procedimentos-e-testes-de-auditoria|Procedimentos e testes]] estabelece o **que e como** examinar. [[3 - Materias/Auditoria Governamental/evidencias-e-documentacao|Evidências e documentação]] ajuda a julgar qualidade e suficiência. [[3 - Materias/Auditoria Governamental/planejamento-individual-de-auditoria|Planejamento individual]] define limites do trabalho.

**Heurística:** antes de generalizar, conferir **população → base → unidade → método → risco → conclusão**.

## Fontes

- [CGU: MOT, seção 4.3.4.7, amostragem e generalização](https://wiki.cgu.gov.br/index.php/Manual_de_Orienta%C3%A7%C3%B5es_T%C3%A9cnicas_da_Atividade_de_Auditoria_Interna_Governamental_do_Poder_Executivo_Federal).
- [CGU: Normas de Auditoria Interna, IN SFC nº 3/2017 e IN SFC nº 8/2017](https://www.gov.br/cgu/pt-br/assuntos/auditoria-e-fiscalizacao/normas-de-auditoria-interna).
- [Conselho Federal de Contabilidade: NBC TA 530, Amostragem em Auditoria, item 5](https://cfc.org.br/tecnica/normas-brasileiras-de-contabilidade/nbc-ta-de-auditoria-independente/). Referência complementar para os efeitos do risco amostral em testes de controles e detalhes e para o risco não resultante da amostragem.
- [[2 - Editais/CGU 2026 - Auditoria|Programa CGU 2026, P3.1.3]]. As retificações do edital prevalecem.
