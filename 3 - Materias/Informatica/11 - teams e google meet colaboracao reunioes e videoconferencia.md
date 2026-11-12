---
articleId: art-0f31e15e82e0b1d1
articleAliases: ["3 - Materias/Informatica/11 - teams e google meet colaboracao reunioes e videoconferencia.md"]
title: "Teams e Google Meet: ferramentas de colaboração, videoconferência corporativa, canais e moderação"
type: "conceito"
status: "ativo"
created: 2026-11-09
updated: 2026-11-11
---

# Teams e Google Meet: ferramentas de colaboração, videoconferência corporativa, canais e moderação

**Concurso Câmara dos Deputados 2026, cargo 1, Divulgação Institucional, Cebraspe. Unidade CAM-TI-009 conforme arquitetura e inventário editorial.**

## Núcleo do conceito: plataformas de colaboração remota no serviço público

A consolidação do modelo híbrido de trabalho e a realização de audiências públicas virtuais, comissões legislativas remotas e reuniões de alinhamento institucional impuseram a adoção generalizada de plataformas integradas de colaboração e videoconferência no Poder Legislativo. O Microsoft Teams (no Microsoft 365) e o Google Meet (no Google Workspace) são os ambientes corporativos dominantes.

O Cebraspe aborda essas plataformas sob três eixos principais:
1. **Arquitetura estrutural**: distinção entre chats de grupo e canais de equipes (*Teams*), integração de arquivos na nuvem (SharePoint/OneDrive e Google Drive);
2. **Dinâmica de reuniões virtuais**: papeis e privilégios de moderação (organizador, apresentador e participante), salas simultâneas (*Breakout Rooms*) e controle de microfones/câmeras;
3. **Segurança e conformidade institucional**: controle de acesso via sala de espera (*Lobby*), gravação na nuvem com geração de transcrição e políticas de ingresso para usuários externos/convidados.

---

## 1. Microsoft Teams: arquitetura de equipes e canais

O Microsoft Teams atua como um *hub* central que unifica conversas, videoconferências, armazenamento e automação de fluxos de trabalho. A organização hierárquica é vital para entender sua operação:

```mermaid
flowchart TD
    Tenant["Organização / Tenant da Câmara dos Deputados (@camara.leg.br)"] --> Team["Equipe (Team): Grupo de usuários com objetivo comum (ex.: 'Comissão de Comunicação')"]
    Team --> C1["Canal Padrão (Standard): Visível e acessível para TODOS os membros da equipe"]
    Team --> C2["Canal Privado (Private): Restrito apenas a um subconjunto específico de membros da equipe (ícone de cadeado)"]
    Team --> C3["Canal Compartilhado (Shared): Permite convidar pessoas externas ou de outras equipes sem adicioná-las à equipe principal"]
```

### O repositório de arquivos por trás do Teams:
- **Nos Canais de Equipe**: Todo arquivo compartilhado em uma postagem de canal fica fisicamente armazenado em uma biblioteca de sites do **SharePoint Online** associada àquela equipe;
- **Nos Chats Privados (1:1 ou em grupo)**: Todo arquivo enviado em uma conversa direta fica fisicamente armazenado na pasta *Teams Chat Files* do **OneDrive for Business** do usuário que enviou o arquivo, sendo concedida permissão de leitura/edição automática aos demais participantes.

---

## 2. Google Meet: conferências em nuvem no Google Workspace

O Google Meet é a solução de videoconferência corporativa focada em **navegação nativa leve no navegador** (sem necessidade de instalação de software cliente pesado):
- Totalmente integrado ao **Google Agenda** (*Google Calendar*) e ao Gmail;
- **Acesso simplificado**: O ingresso ocorre via link direto (`meet.google.com/abc-defg-hij`);
- **Gravação de reuniões**: As novas gravações são salvas no **Google Drive do organizador**, na pasta **Google Meet**, com uma subpasta específica para cada reunião, conforme a reorganização do serviço em julho de 2026;
- **Legendas em tempo real (*Live Captions*)**: podem exibir transcrição automática; **tradução de legendas e outros recursos** variam conforme edição do produto, disponibilidade e configuração.

---

## 3. Gestão de reuniões virtuais: papéis e privilégios

O Cebraspe frequentemente formula itens sobre o controle de moderação de reuniões:

| Papel / Função | Pode falar e ligar câmera? | Pode compartilhar tela? | Pode silenciar outros participantes? | Pode admitir pessoas da sala de espera (*Lobby*)? | Pode encerrar a reunião para todos? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Organizador (*Organizer*)** | Sim | Sim | Sim | Sim | **Sim** |
| **Co-organizador (*Co-organizer*)** | Sim | Sim | Sim | Sim | **Sim**, em reuniões do Microsoft Teams conforme permissões descritas pela Microsoft |
| **Apresentador (*Presenter*)** | Sim | Sim | Conforme permissões do Teams | **Por padrão, sim; o organizador pode restringir** | Não é a função normal de encerramento para todos |
| **Participante (*Attendee*)** | Sim (se liberado pelo organizador) | **Não** (por padrão) | **Não** | **Não** | Não |

```mermaid
flowchart LR
    Lobby["SALA DE ESPERA (LOBBY): Usuários externos e convidados aguardam aprovação"]
    Lobby -->|Admitido por pessoa autorizada nas opções da reunião| Sala["SALA PRINCIPAL DA REUNIÃO"]
    Sala -->|Divisão em subgrupos| B1["Breakout Room 1 (Subcomissão 1)"]
    Sala -->|Divisão em subgrupos| B2["Breakout Room 2 (Subcomissão 2)"]
    B1 -->|Fim do tempo / Comando de retorno| Sala
    B2 -->|Fim do tempo / Comando de retorno| Sala
```

---

## 4. Recursos avançados de colaboração em chamadas

### 4.1 Salas Simultâneas (*Breakout Rooms*)
Permitem que o organizador divida uma reunião grande em **pequenas salas virtuais paralelas** para discussões temáticas:
- Os participantes podem ser distribuídos de forma automática (aleatória) ou manual;
- O organizador pode circular entre as salas e enviar anúncios em texto para todas as salas simultaneamente;
- O encerramento das salas pode conduzir os participantes de volta à reunião principal, mas o comportamento e o tempo de retorno dependem da ferramenta e das configurações de aviso e saída.

### 4.2 Compartilhamento de Conteúdo e Modo Destaque
- **Compartilhar Tela Inteira (*Desktop*)**: Projeta tudo o que aparece no monitor (incluindo notificações pop-up confidenciais);
- **Compartilhar Janela Específica (*Window*)**: Projeta apenas o aplicativo selecionado (ex.: uma apresentação de PowerPoint), ocultando e-mails ou chats que cheguem na máquina;
- **Modo Destaque (*Spotlight*)**: Fixa o vídeo de um orador específico como foco principal para todos os participantes da chamada (ideal para discursos e palestras).

---

## 5. Casos progressivos de aplicação

### Caso 1: Compartilhamento acidental de tela com notificação pessoal
Durante uma reunião pública transmitida online pelo Teams, um analista compartilha a opção "Área de Trabalho Inteira" para exibir um documento. No meio da fala, surge na tela uma notificação privada de chat com fofocas de trabalho, sendo gravada e transmitida ao vivo.
*Análise:* O erro decorre do tipo de compartilhamento escolhido. Para preservar a segurança e a privacidade institucional em transmissões, deve-se selecionar a opção **"Janela"** (projetando exclusivamente a janela do documento desejado) ou usar o modo integrado **PowerPoint Live**, que transmite apenas os slides sem projetar a área de trabalho do sistema operacional.

### Caso 2: Controle de ruído e áudio vazado em audiência de 300 pessoas
Em uma audiência pública remota com centenas de cidadãos, vários participantes deixam seus microfones abertos por descuido, gerando microfonia e ruídos domésticos que impedem a fala do palestrante.
*Análise:* O organizador ou co-organizador deve utilizar o comando **"Desativar o mudo de todos" / "Silenciar todos os participantes"** (*Mute all*). Adicionalmente, nas opções de reunião, o moderador pode alterar a permissão padrão para desativar a opção *"Permitir que os participantes ativem o mudo"*, impedindo que os participantes reabram seus microfones por conta própria até que sua fala seja formalmente autorizada.

### Caso 3: Armazenamento de arquivo enviado em chat privado do Teams
Um servidor envia uma minuta de contrato confidencial em um chat privado (conversa direta de 1 para 1) com seu colega no Teams. Ele acredita que o arquivo foi salvo no SharePoint da equipe da comissão.
*Análise:* Conclusão errada. Arquivos anexados em **chats privados** do Teams não vão para o SharePoint da equipe; eles são armazenados automaticamente na pasta pessoal do **OneDrive for Business** do remetente, sendo criadas permissões de leitura automáticas para o colega que participa do chat.

### Caso 4: Resgate de gravação de reunião do Google Meet
Uma reunião de trabalho foi gravada no Google Meet. O servidor que participou como convidado procura o arquivo de vídeo no seu computador local e não encontra nada.
*Análise:* A gravação do Meet é processada na nuvem e salva no **Google Drive do organizador**, dentro da pasta **Google Meet** e da subpasta da reunião. Os participantes podem receber links ou atalhos conforme as permissões do serviço, mas a gravação **não é baixada automaticamente** para todos os computadores.

---

## 6. Questões inéditas comentadas (Padrão Cebraspe — C/E)

### Item 1
> No Microsoft Teams, os arquivos compartilhados pelos usuários em canais padrão de uma equipe são armazenados automaticamente na biblioteca de documentos de um site do SharePoint Online associado à respectiva equipe.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** Em **canais padrão** do Microsoft Teams, arquivos compartilhados ficam na biblioteca de documentos do **SharePoint Online** associado à equipe. Canais privados ou compartilhados podem envolver sites próprios; o enunciado limita corretamente seu escopo aos canais padrão.

---

### Item 2
> Em uma videoconferência realizada por meio do Google Meet, os participantes com perfil comum de participante (*attendee*) dispõem de autorização regimental para silenciar o microfone do organizador da reunião e encerrar a chamada para todos os presentes.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** Participantes comuns do Google Meet **não têm, por padrão, os controles de anfitrião** para encerrar a reunião para todos nem para administrar os demais participantes. Os controles concretos dependem de funções, licenças e configurações; a expressão “autorização regimental” do enunciado é inadequada para um recurso de software, mas o núcleo da afirmação continua ERRADO.

---

### Item 3
> O recurso de salas simultâneas (*Breakout Rooms*), presente nas principais ferramentas corporativas de videoconferência, permite segmentar uma reunião principal em subsalas temporárias para discussões em grupos menores, possibilitando ao organizador transitar entre as salas e emitir anúncios para todos os grupos.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** As salas simultâneas viabilizam essa divisão dinâmica e controlada de grupos, mantendo o controle centralizado do moderador da reunião.

---

### Item 4
> Os arquivos enviados por um usuário durante uma conversa direta (chat privado 1:1) no Microsoft Teams são armazenados no diretório de arquivos do OneDrive for Business desse usuário remetente, sendo concedida permissão automática de acesso aos participantes daquele chat.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** Distinção fundamental da arquitetura do Teams: arquivos de **canais** vão para o **SharePoint**; arquivos de **chats privados** vão para o **OneDrive for Business** do remetente.

---

### Item 5
> Ao encerrar uma reunião no Google Meet, o arquivo de vídeo da gravação é salvo automaticamente na pasta de downloads da máquina local de todos os usuários que estavam presentes no momento do encerramento.

*( ) Certo*
*( ) Errado*

**Gabarito: Errado.**
**Comentário:** A gravação do Google Meet é processada e armazenada em nuvem, em conta e pasta determinadas pelas regras do serviço e organização da reunião. **Não ocorre download automático para todos os participantes** quando a reunião termina. O diretório e o destinatário de gravações podem depender de regras do produto, tipo de reunião e atualizações da interface.

---

### Item 6
> Para evitar interrupções indevidas durante uma transmissão de audiência institucional no Teams, o organizador pode configurar o recurso de Sala de Espera (Lobby), de forma que usuários externos ou não convidados previamente permaneçam aguardando admissão expressa antes de ingressarem na conferência.

*( ) Certo*
*( ) Errado*

**Gabarito: Certo.**
**Comentário:** No Teams, o organizador pode configurar **quem ignora a sala de espera** e quem precisa aguardar admissão. O recurso ajuda a controlar o ingresso, mas a segurança depende também das permissões de convidados, divulgação do link e políticas institucionais. O item descreve uma capacidade válida, não um bloqueio infalível.

---

## 7. Tabela de síntese comparativa Teams versus Meet

| Recurso / Propriedade | Microsoft Teams | Google Meet |
| :--- | :--- | :--- |
| **Suíte / Ecossistema** | Microsoft 365 | Google Workspace |
| **Arquivos em canais padrão (Teams)** | Biblioteca do SharePoint associada à equipe | Não há equivalência direta a canal de equipe do Teams |
| **Arquivos compartilhados em chats 1:1/grupo do Teams** | OneDrive for Business do remetente, em fluxo compatível | Não equivale ao chat de uma reunião do Meet |
| **Chat de reunião** | Chat do Teams conforme política de mensagens | **Google Chat** para reuniões com chat contínuo elegível; em outros casos mensagens podem desaparecer ao terminar a chamada |
| **Gravações de reuniões** | Armazenamento em OneDrive/SharePoint conforme tipo de reunião e política | Google Drive, seguindo a estrutura e permissões da gravação do Meet |
| **Controle de entrada** | Sala de Espera (*Lobby*) | Sala de Espera (*Knocking / Pedir para entrar*) |
| **Subgrupos de discussão** | Salas Simultâneas (*Breakout Rooms*) | Salas Temáticas (*Breakout Rooms*) |
| **Modo de apresentação focado** | PowerPoint Live / Modo Destaque | Compartilhar Guia / Apresentar tela |
| **Encerramento de reunião** | "Sair da reunião" (individual) $\times$ "Encerrar reunião" (para todos) | "Sair da chamada" $\times$ "Encerrar chamada para todos" |

> **Atualização de produto (11/11/2026):** o Google informa a [nova estrutura da pasta Google Meet](https://support.google.com/meet/answer/9308681?hl=pt-BR) desde julho de 2026, e a Microsoft descreve que [coorganizadores podem encerrar reuniões para todos](https://support.microsoft.com/pt-br/teams/meetings/add-co-organizers-to-a-meeting-in-microsoft-teams). Revisados TI-041 e TI-042; conferir configurações e licenças específicas antes de generalizar permissões.

> **Auditoria C/E, segunda passagem (11/11/2026):** seis questões examinadas; gabaritos mantidos **C, E, C, C, E, C** segundo os cenários de Teams/Meet descritos. Explicações refinadas para canais padrão, permissões de anfitrião, gravação em nuvem e sala de espera. As opções concretas devem ser verificadas conforme produto, licença e configuração.

> **Implementação TI-109/110 (11/11/2026):** a comparação de armazenamento distingue arquivos de chats Teams, mensagens de reunião Google Meet/Chat e gravações; lobby, apresentadores e salas simultâneas tratados conforme opções e papéis. Fontes: [Google Meet, chat contínuo](https://support.google.com/meet/answer/9308979?hl=pt-Br), [Microsoft Teams, opções de reunião](https://support.microsoft.com/pt-br/teams/meetings/meeting-options-in-microsoft-teams).
