# 🎓 EventosUni - Plataforma de Eventos Universitários

Uma plataforma completa para organização e participação em eventos universitários, construída com Next.js 14, TypeScript, Tailwind CSS e shadcn/ui.

## ✨ Funcionalidades

### 🏠 **Páginas Principais**
- **Landing Page** - Apresentação da plataforma com seções interativas
- **Página de Busca** - Sistema de busca avançada com filtros
- **Páginas Informativas** - Sobre, Como Funciona, Preços, Contato
- **Sistema de Autenticação** - Login e Registro com validação
- **Páginas de Eventos** - Detalhes, inscrição e checkout

### 🎯 **Funcionalidades de Eventos**
- **Visualização de Eventos** - Cards com informações completas
- **Detalhes do Evento** - Página completa com programação e avaliações
- **Sistema de Inscrição** - Formulário completo de dados
- **Checkout** - Pagamento via PIX e cartão de crédito
- **Modais Interativos** - Mapa e contato em modais

### 🎨 **Interface e UX**
- **Dark Mode Completo** - Suporte total a tema escuro/claro
- **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- **Componentes Modernos** - Interface limpa e profissional
- **Animações Suaves** - Transições e hover effects

### 🔍 **Sistema de Busca**
- **Busca por Texto** - Nome, descrição e tags
- **Filtros Avançados** - Categoria, localização, preço
- **Ordenação** - Por relevância, data, preço, avaliação
- **Resultados em Tempo Real** - Atualização dinâmica

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes React modernos
- **next-themes** - Gerenciamento de temas
- **Lucide React** - Ícones
- **React Hook Form** - Gerenciamento de formulários

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── (auth)/            # Páginas de autenticação
│   ├── busca/             # Página de busca
│   ├── categoria/         # Páginas de categoria
│   ├── evento/            # Páginas de evento
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout principal
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── Header.tsx        # Cabeçalho da aplicação
│   ├── Footer.tsx        # Rodapé
│   ├── Hero.tsx          # Seção hero
│   ├── EventCategories.tsx # Categorias de eventos
│   ├── LatestEvents.tsx  # Eventos em destaque
│   ├── FinalCTA.tsx      # Call to action final
│   ├── ThemeToggle.tsx   # Toggle de tema
│   ├── ThemeProvider.tsx # Provider de tema
│   ├── MapModal.tsx      # Modal do mapa
│   └── ContactModal.tsx  # Modal de contato
└── lib/                  # Utilitários e configurações
```

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd eventos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

## 📱 Páginas Disponíveis

### 🏠 **Páginas Principais**
- `/` - Landing page
- `/busca` - Sistema de busca
- `/sobre` - Sobre a empresa
- `/como-funciona` - Como usar a plataforma
- `/precos` - Planos e preços
- `/contato` - Informações de contato

### 🔐 **Autenticação**
- `/login` - Página de login
- `/registro` - Página de registro

### 🎉 **Eventos**
- `/evento/[id]` - Detalhes do evento
- `/evento/[id]/inscrever` - Formulário de inscrição
- `/evento/[id]/checkout` - Página de pagamento
- `/categoria/[id]` - Lista de eventos por categoria

## 🎨 Dark Mode

A aplicação possui suporte completo ao dark mode:

- **Toggle Automático** - Detecta preferência do sistema
- **Controle Manual** - Botão para alternar temas
- **Persistência** - Lembra a escolha do usuário
- **Transições Suaves** - Mudanças sem flicker

## 🔍 Sistema de Busca

### **Funcionalidades**
- Busca por texto em tempo real
- Filtros por categoria, localização e preço
- Ordenação por relevância, data, preço, avaliação
- Resultados paginados
- Histórico de buscas

### **Filtros Disponíveis**
- **Categoria**: Formatura, Festa, Palestra, Workshop, etc.
- **Localização**: Todos os locais disponíveis
- **Faixa de Preço**: Gratuito, Até R$ 50, R$ 50-100, Acima de R$ 100

## 💳 Sistema de Pagamento

### **Métodos Disponíveis**
- **PIX** - Pagamento instantâneo
- **Cartão de Crédito** - Processamento seguro

### **Funcionalidades**
- Formulário de dados pessoais
- Validação completa
- Confirmação de pagamento
- E-mail de confirmação

## 📞 Modais Interativos

### **Modal do Mapa**
- Localização do evento
- Informações de acesso
- Contato do organizador
- Instruções de como chegar

### **Modal de Contato**
- Informações do organizador
- Formulário de contato
- FAQ rápido
- Horário de atendimento

## 🎯 Próximas Funcionalidades

- [ ] Dashboard do usuário
- [ ] Sistema de notificações
- [ ] Chat em tempo real
- [ ] Upload de imagens
- [ ] Sistema de avaliações
- [ ] Integração com APIs de pagamento
- [ ] Sistema de cupons
- [ ] Relatórios e analytics

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: contato@eventosuni.com
- **Telefone**: (11) 99999-9999
- **Website**: https://eventosuni.com

---

Desenvolvido com ❤️ para a comunidade universitária
