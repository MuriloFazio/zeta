# 🤖 Zeta - Assistente Pessoal Inteligente

> Um assistente pessoal moderno desenvolvido com Next.js para automatizar tarefas e otimizar sua produtividade.

## 📋 Sobre o Zeta

Zeta é meu assistente pessoal que me ajuda a:
- **Organizar tarefas**: Gerenciamento de to-do lists e lembretes
- **Agendar compromissos**: Controle de calendário e eventos
- **Automatizar rotinas**: Scripts para tarefas repetitivas
- **Monitorar dados**: Dashboards com informações importantes
- **Responder perguntas**: Base de conhecimento integrada

## 🎯 Demonstração

🔗 **[Ver Zeta em ação](https://www.zetaai.com.br)**


## ✨ Funcionalidades

### 🗂️ Gerenciamento de Tarefas
- [x] Criar, editar e excluir tarefas
- [x] Categorização por prioridade
- [x] Lembretes automáticos
- [x] Histórico de tarefas concluídas

### 📅 Calendário Inteligente
- [ ] Agendamento de compromissos
- [ ] Sincronização com Google Calendar
- [ ] Notificações em tempo real
- [ ] Visualização mensal/semanal

### 💬 Interface de Chat
- [x] Comandos de voz
- [x] Processamento de linguagem natural
- [x] Respostas contextualizadas
- [x] Histórico de conversas

### 📊 Dashboard Pessoal
- [ ] Métricas de produtividade
- [ ] Gráficos de progresso
- [ ] Estatísticas de uso
- [ ] Insights automáticos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Styled Components
- **Componentes**: Material UI
- **Fonte**: Geist (Vercel)

### Backend & APIs
- **API Routes**: Next.js API Routes
- **Banco de Dados**: Mongo DB Atlas
- **Autenticação**: NextAuth.js
- **IA/NLP**: OpenAI API / Google AI / Anthropic API

### Ferramentas
- **Deploy**: Vercel
- **Analytics**: Vercel Analytics

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm, yarn, pnpm ou bun
- Mongo DB Atlas (cloud)

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env

OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
MONGODB_URI=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

JWT_SECRET=
JWT_EXPIRES=
```

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MuriloFazio/zeta.git
cd zeta
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
zeta/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   ├── components/        # Componentes React
│   ├── dashboard/         # Páginas do dashboard
│   ├── chat/             # Interface de chat
│   └── tasks/            # Gerenciador de tarefas
├── lib/                   # Utilitários e configurações
│   ├── ai/               # Integração com IA
│   ├── db/               # Configuração do banco
│   └── utils/            # Funções utilitárias
├── prisma/               # Schema e migrations
├── public/               # Arquivos estáticos
└── types/                # Tipos TypeScript
```

## 🎮 Como Usar o Zeta

### Interface Web
1. **Dashboard**: Visão geral de todas as atividades
2. **Chat**: Converse com o Zeta naturalmente

## 🔧 Configuração Avançada

### Personalização da IA
```javascript
// lib/ai/config.js
export const AI_CONFIG = {
  model: 'gpt-4-turbo',
  temperature: 0.7,
  maxTokens: 2000,
  personality: 'helpful_assistant'
}
```

## 📈 Roadmap

### Versão 1.0

- [x] Chatbot com 3 opções de IA (ChatGPT/Cloude/Gemini)
- [x] Autenticação com NextAuth
- [ ] Configurações do perfil
- [ ] Criar janela de contexto
- [ ] Criar histórico de conversas

### Versão 2.0
- [ ] Assistente de voz completo
- [ ] Integração com IoT doméstico
- [ ] Machine Learning personalizado
- [ ] App mobile (React Native ou PWA)

### Versão 2.1
- [ ] Automação de emails
- [ ] Análise de sentimentos
- [ ] Relatórios automáticos com gráficos
- [ ] Plugin para navegadores
- [ ] Vector Searching

### Webhooks e Integrações
- Slack: Notificações automáticas
- Discord: Bot para comandos
- Trello: Sincronização de boards
- Notion: Backup de dados

## 🤝 Contribuindo

Quer ajudar a tornar o Zeta ainda melhor?

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Contato

**Murilo Fazio**

- 💼 [LinkedIn](https://linkedin.com/in/murilo-fazio-431173120/)
- 📧 Email: faziomurilo@gmail.com
- 🌐 [Portfólio](https://my-portfolio-azure-rho-83.vercel.app/)
- 📱 [GitHub](https://github.com/MuriloFazio)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🚀 **Zeta** - Seu assistente pessoal para uma vida mais produtiva!

⭐ Se o Zeta te ajudou, considere dar uma estrela no repositório!