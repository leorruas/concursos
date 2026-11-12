---
articleId: art-005ae25143946d4e
articleAliases: ["3 - Materias/Informatica/04 - word 365 estrutura edicao formatacao e controle de alteracoes.md"]
title: "Word 365: estrutura, edição, formatação, seções e controle de alterações"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Word 365: estrutura, edição, formatação, seções e controle de alterações

**Concurso Câmara dos Deputados 2026, cargo 1, Divulgação Institucional, Cebraspe. Unidade CAM-TI-002 conforme arquitetura e inventário editorial.**

## Núcleo do conceito: por que dominar a estrutura interna do Word 365?

Na redação institucional de atos legislativos, relatórios técnicos, pareceres de comissões e comunicados oficiais, o processador de textos corporativo (Microsoft Word no ecossistema Microsoft 365) é o instrumento central de trabalho. O Cebraspe aborda o Word sob a ótica de sua **arquitetura de objetos**, **hierarquia de formatação** e **mecanismos de colaboração documental**.

A banca explora com rigor os limites entre **formatação de fonte (caractere)**, **formatação de parágrafo** e **configuração de seção/página**, bem como o funcionamento do **Controle de Alterações (*Track Changes*)**, estilos automáticos, navegação hierárquica e regras de quebra de página versus quebra de seção.

---

## 1. Faixa de Opções (*Ribbon*), estrutura e guias principais

A interface moderna do Word organiza ferramentas em **Guias** (*Tabs*), divididas em **Grupos**:

```mermaid
flowchart TD
    Ribbon["Faixa de Opções (Ribbon)"]
    Ribbon --> G1["Página Inicial (Home): Área de Transferência, Fonte, Parágrafo, Estilos, Edição"]
    Ribbon --> G2["Inserir (Insert): Páginas, Tabelas, Ilustrações, Cabeçalho/Rodapé, Texto, Símbolos"]
    Ribbon --> G3["Layout: Configurar Página (Margens, Orientação, Tamanho, Colunas, Quebras), Parágrafo"]
    Ribbon --> G4["Referências: Sumário, Notas de Rodapé, Citações/Bibliografia, Legendas, Índice"]
    Ribbon --> G5["Revisão (Review): Revisão de Texto, Acessibilidade, Idioma, Comentários, Controle, Comparar"]
    Ribbon --> G6["Exibir (View): Modos de Exibição, Movimentação de Página, Mostrar (Régua), Zoom, Janela"]
```

### Principais pegadinhas de localização do Cebraspe:
- **Quebras de Página e Quebras de Seção**: Estão na guia **Layout** (grupo *Configurar Página*). A quebra de página simples também pode ser inserida na guia **Inserir** (`Ctrl + Enter`), mas as quebras de seção estão concentradas em **Layout**;
- **Controle de Alterações e Comparação de Documentos**: Localizam-se exclusivamente na guia **Revisão**;
- **Sumário Automático e Notas de Rodapé**: Localizam-se na guia **Referências** (não em *Inserir*);
- **Pincel de Formatação (*Format Painter*)**: Localiza-se na guia **Página Inicial** (grupo *Área de Transferência*).

---

## 2. A hierarquia de formatação: Caractere, Parágrafo e Seção

Compreender o escopo de cada nível de formatação resolve dezenas de questões da banca:

| Nível de Formatação | O que afeta | Exemplos de propriedades | Onde se aplica |
| :--- | :--- | :--- | :--- |
| **Fonte / Caractere** | Glifos e caracteres individuais selecionados | Família da fonte, tamanho, negrito, itálico, sublinhado, cor, sobrescrito ($X^2$), subscrito ($H_2O$) | Apenas ao texto selecionado (ou a partir do ponto de inserção) |
| **Parágrafo** | O bloco de texto delimitado por uma marca de parágrafo ($\P$) | Alinhamento (esquerda, centralizado, direita, justificado), recuos (primeira linha, deslocado), espaçamento entre linhas (1,5; duplo) e espaçamento antes/depois | Aplica-se ao parágrafo inteiro onde o cursor está posicionado, **mesmo sem selecionar todo o texto** |
| **Seção / Página** | Unidades estruturais independentes do documento | Margens, orientação (retrato/paisagem), tamanho do papel, número de colunas, cabeçalhos e rodapés | Aplica-se a todo o documento ou à **seção corrente** |

---

## 3. O papel crítico das Seções: quebras e cabeçalhos independentes

### 3.1 Quebra de Página simples (`Ctrl + Enter`) versus Quebra de Seção
- **Quebra de Página**: Apenas empurra o cursor e o conteúdo seguinte para o início da próxima página física, **mantendo todas as configurações da mesma seção** (mesmas margens, mesma orientação, mesmos cabeçalhos);
- **Quebra de Seção**: Cria uma partição lógica autônoma dentro do documento.

### 3.2 Tipos de Quebra de Seção:
1. **Próxima Página (*Next Page*)**: Inicia a nova seção no topo da página seguinte (essencial para alternar uma página específica de *Retrato* para *Paisagem*);
2. **Contínua (*Continuous*)**: Inicia a nova seção na **mesma página** (usada tipicamente para criar um trecho em **duas colunas** no meio de um texto em coluna única);
3. **Página Par (*Even Page*) / Página Ímpar (*Odd Page*)**: Força a nova seção a começar na próxima página com numeração par ou ímpar (padrão editorial de abertura de capítulos de livros).

```mermaid
flowchart LR
    Sec1["Seção 1 (Orientação Retrato, Margens 3cm)"] --> QSec["Quebra de Seção: Próxima Página"]
    QSec --> Sec2["Seção 2 (Orientação Paisagem, Tabela Larga)"]
    Sec2 --> QSec2["Quebra de Seção: Próxima Página"]
    QSec2 --> Sec3["Seção 3 (Retrato, Cabeçalho Novo, Desvinculado)"]
```

### 3.3 Cabeçalhos e Rodapés: o botão "Vincular ao Anterior" (*Link to Previous*)
Por padrão, ao criar uma nova seção, os cabeçalhos e rodapés vêm configurados como **"Vincular ao Anterior"**. Isso significa que qualquer texto digitado no cabeçalho da Seção 2 se repetirá na Seção 1.
Para estabelecer **texto de cabeçalho ou rodapé independente** na Seção 2, é necessário desativar **Vincular ao Anterior no tipo de cabeçalho ou rodapé que será alterado**. Já **numeração e formato dos números de página** exigem examinar as opções de *Formatar Números de Página* e as quebras de seção; não se deve presumir que uma única configuração do cabeçalho resolva toda situação. A opção de primeira página diferente e cabeçalhos pares/ímpares também altera o comportamento.

---

## 4. Estilos (*Styles*) e Sumário Automático

O uso de **Estilos** (`Título 1`, `Título 2`, `Normal`) não é mero recurso estético:
1. **Hierarquia Estrutural**: Define o nível de tópicos do documento (*Heading levels*);
2. **Painel de Navegação (`Ctrl + F`)**: Permite reorganizar capítulos inteiros arrastando os títulos pelo painel lateral;
3. **Geração de Sumário Automático**: O Word varre o documento buscando os parágrafos marcados com os estilos de título e gera o sumário com pontilhado e número de página atualizado com um clique.

---

## 5. Colaboração: Controle de Alterações (*Track Changes*) e Comentários

O recurso de **Controle de Alterações** (guia *Revisão*) monitora todas as modificações feitas no arquivo por qualquer usuário:

```mermaid
stateDiagram-v2
    [*] --> Original
    Original --> EdicaoRastreada: Controle de Alterações ATIVADO
    EdicaoRastreada --> Insercao: Texto adicionado (sublinhado/colorido)
    EdicaoRastreada --> Exclusao: Texto apagado (tachado/balão lateral)
    EdicaoRastreada --> Formatacao: Alteração de fonte/estilo
    EdicaoRastreada --> Aceitar: Modificação incorporada definitivamente
    EdicaoRastreada --> Rejeitar: Documento volta ao estado original
```

### Modos de visualização de marcações:
1. **Marcação Simples (*Simple Markup*)**: Exibe o documento com as alterações aplicadas e uma barra vertical vermelha na margem indicando onde houve modificação;
2. **Todas as Marcações (*All Markup*)**: Exibe todas as inserções (com sublinhado e cores por autor) e exclusões (tachadas ou em balões na margem);
3. **Nenhuma Marcação (*No Markup*)**: Oculta os comentários e traços de edição, mostrando como o documento ficaria se todas as alterações fossem aceitas (mas sem aceitá-las de fato!);
4. **Original**: Exibe o texto exatamente como era antes do início do rastreamento.

> **Atenção para itens C/E:** a exibição *Nenhuma Marcação* **não elimina** as alterações rastreadas. Para resolver as revisões existentes, é preciso **aceitar ou rejeitar** as alterações. Para distribuir o arquivo com segurança, examinar **também** comentários, dados pessoais, metadados e conteúdo oculto por meio da inspeção apropriada. Aceitar todas as alterações **não equivale** a remover automaticamente toda informação confidencial do documento.

---

## 6. Casos progressivos de aplicação

### Caso 1: Formatação de parágrafo sem seleção integral
Um redator posiciona o cursor no meio de um parágrafo de três linhas, sem selecionar nenhuma palavra, e clica no botão **Centralizar** (`Ctrl + E`).
*Análise:* O parágrafo inteiro é centralizado. Alinhamento é propriedade de **parágrafo**, não de caractere. O Word aplica a formatação de parágrafo à totalidade do bloco delimitado pela marca $\P$ em que o cursor reside.

### Caso 2: Tabela larga no meio de relatório retrato
Um analista está elaborando um relatório em páginas no formato Retrato (vertical). Na página 15, necessita inserir uma tabela com 12 colunas que só cabe no formato Paisagem (horizontal), e a partir da página 16 o relatório deve voltar ao formato Retrato.
*Análise:* O analista deve:
1. Ao final da página 14, inserir uma **Quebra de Seção (Próxima Página)**;
2. Na página 15 (agora Seção 2), alterar a orientação para **Paisagem**;
3. Ao final da página 15, inserir outra **Quebra de Seção (Próxima Página)**;
4. Na página 16 (Seção 3), retornar a orientação para **Retrato**.
Se o analista tivesse usado apenas a quebra de página simples (`Ctrl + Enter`), ao mudar a orientação para Paisagem, o documento inteiro seria alterado.

### Caso 3: Início de numeração na página 5
Um documento corporativo possui capa, folha de rosto, sumário e introdução. A numeração de páginas deve começar a aparecer visualmente apenas na página 5 (Introdução), marcando o número "5".
*Análise:* O usuário deve inserir uma Quebra de Seção entre a página 4 e a página 5. No cabeçalho/rodapé da Seção 2 (pág. 5), deve desativar a opção **"Vincular ao Anterior"**. Em seguida, insere a numeração de páginas, garantindo que a Seção 1 permaneça sem numeração.

### Caso 4: Envio acidental de histórico confidencial
Um assessor redigiu uma nota oficial com o Controle de Alterações ativo. Antes de enviar o arquivo `.docx` à imprensa, ele selecionou o modo *"Nenhuma Marcação"* na guia Revisão, salvou e anexou o arquivo.
*Análise:* Falha grave de segurança. O destinatário, ao abrir o documento no Word, pode simplesmente alterar o modo de exibição para *"Todas as Marcações"* ou abrir o Painel de Revisão e visualizar todos os termos que foram excluídos ou sugeridos internamente pela equipe. O correto seria acionar **Revisão > Aceitar > Aceitar Todas as Alterações e Parar o Controle**.

---

## 7. Questões inéditas comentadas (Padrão Cebraspe — C/E)

### Item 1
> No Microsoft Word 365, para aplicar alinhamento justificado a um parágrafo que contenha dez linhas de texto, é indispensável selecionar previamente todas as palavras do referido parágrafo.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** O alinhamento é uma formatação de parágrafo. Basta que o ponto de inserção (cursor) esteja posicionado em qualquer parte do parágrafo para que a ação de justificar (`Ctrl + J`) seja aplicada a todo o parágrafo delimitado pela marca $\P$.

---

### Item 2
> Para intercalar páginas com orientação paisagem e retrato em um mesmo documento do Word 365, é necessário dividir o documento em seções por meio da inserção de quebras de seção, visto que a orientação da página é uma propriedade de seção, e não de parágrafo.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** Configurações de página (orientação, margens, tamanho do papel e colunas) são atributos de seção. Sem a quebra de seção (como a quebra de seção de *Próxima Página*), a alteração da orientação afetará todas as páginas do documento.

---

### Item 3
> Para inserir um trecho de texto disposto em três colunas no meio de uma página formatada originariamente em coluna única, mantendo o início e o fim da página com coluna única, o Word insere automaticamente quebras de seção contínuas antes e depois do trecho selecionado.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** A quebra de seção contínua (*Continuous Section Break*) permite configurações de colunas diferentes na mesma página. Ao **selecionar um trecho dentro de um documento e aplicar colunas à seleção**, o Word para desktop pode inserir as quebras de seção necessárias. O resultado depende de selecionar o texto e da configuração do comando, não de toda aplicação genérica de colunas. O gabarito CERTO é interpretado para o cenário explicitado no item.

---

### Item 4
> No Word 365, a opção de visualização "Nenhuma Marcação" no grupo Controle da guia Revisão aceita automaticamente todas as inserções e exclusões realizadas no documento, expurgando de modo definitivo o histórico de revisões anteriores.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** “Nenhuma Marcação” apenas altera a visualização, sem aceitar nem apagar alterações. Antes de distribuir um documento com revisões confidenciais, é necessário resolver as alterações, verificar comentários e, quando pertinente, inspecionar metadados e informações ocultas. O comando “Aceitar Todas as Alterações” resolve inserções/exclusões, mas não elimina automaticamente todos os outros dados sensíveis.

---

### Item 5
> No Word 365, o atalho de teclado `Ctrl + Enter` insere uma quebra de seção do tipo próxima página, permitindo a criação imediata de um cabeçalho desvinculado da página anterior.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** O atalho `Ctrl + Enter` insere uma **quebra de página simples**, não uma quebra de seção. As quebras de seção exigem navegação pela guia *Layout > Quebras*.

---

### Item 6
> O recurso Pincel de Formatação do Word 365, quando acionado com um único clique do mouse, permite copiar e aplicar a formatação do texto selecionado em múltiplos trechos de forma contínua até que a tecla Esc seja pressionada.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** O Pincel de Formatação com **um clique** é normalmente usado uma vez e se desativa. Com **duplo clique** na ferramenta, pode-se aplicar a formatação a vários trechos até desativá-la, conforme o Word para desktop. O gabarito ERRADO está correto pela distinção entre um e dois cliques.

---

## 8. Tabela de atalhos e operações essenciais do Word 365

| Operação | Atalho / Caminho | Efeito e Observação |
| :--- | :--- | :--- |
| **Quebra de Página Simples** | `Ctrl + Enter` (ou *Inserir > Quebra de Página*) | Empurra texto para a próxima página na mesma seção |
| **Quebra de Seção** | *Layout > Quebras > Quebras de Seção* | Permite orientações e cabeçalhos distintos |
| **Salvar / Salvar Como** | `Ctrl + B` (pt-BR) / `F12` | Grava alterações no disco ou na nuvem |
| **Localizar / Substituir** | `Ctrl + L` (Localizar) / `Ctrl + U` (Substituir) | Abre o painel de navegação ou caixa de diálogo |
| **Pincel de Formatação** | `Ctrl + Shift + C` (copiar formato) / `Ctrl + Shift + V` (colar formato) | Duplo clique no botão permite múltiplas colagens |
| **Alinhamento de Parágrafo** | `Ctrl + Q` (Esq), `Ctrl + E` (Centro), `Ctrl + R` (Dir, Word para Windows conforme documentação Microsoft), `Ctrl + J` (Just) | Aplica ao parágrafo inteiro do cursor |
| **Controle de Alterações** | `Ctrl + Shift + E` (ou *Revisão > Controlar Alterações*) | Liga/desliga o rastreamento colaborativo de edições |

> **Nota de revisão (11/11/2026):** ajustado atalho de alinhamento à direita para `Ctrl + R` na documentação atual do Word para Windows e corrigido erro de digitação no item 4. Atalhos podem variar por sistema, idioma e versão. Referência: [atalhos do Word, Microsoft Support](https://support.microsoft.com/pt-br/accessibility/word/keyboard-shortcuts-in-word). Achados TI-035 e TI-039.

> **Auditoria de questões, segunda passagem (11/11/2026):** seis itens examinados, gabaritos preservados **E, C, C, E, E, E** para Word de desktop nas condições enunciadas. Os comentários sobre colunas, histórico de revisão e Pincel de Formatação foram qualificados. Não presumir que atalhos e recursos se comportem da mesma forma no Word Web ou macOS.


> **Implementação TI-100 (11/11/2026):** corrigida a confusão entre resolver revisões e inspecionar dados ocultos, e entre desvincular cabeçalhos e formatar numeração de páginas. Fontes: [Vincular ao anterior](https://support.microsoft.com/pt-br/word/link-to-previous) e [numeração por seção](https://support.microsoft.com/pt-br/word/customize-page-numbers-and-their-formats-in-different-word-document-sections).
