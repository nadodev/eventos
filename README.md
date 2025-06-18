# 🎓 EventosUni

Uma plataforma moderna para organização de eventos universitários, construída com Next.js 15, TypeScript, Tailwind CSS e shadcn/ui.

## ✨ Funcionalidades

- **Landing Page Responsiva**: Design moderno e otimizado para todos os dispositivos
- **Sistema de Autenticação**: Páginas de login e registro com formulários completos
- **Categorias de Eventos**: Formatura, Festa, Viagem, Gincana, Cultural, Acadêmico
- **Exibição de Eventos**: Cards com informações detalhadas dos eventos
- **Interface Moderna**: Componentes do shadcn/ui para uma experiência consistente
- **Páginas Informativas**: Sobre, Como Funciona, Preços e Contato

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes React reutilizáveis
- **Lucide React** - Ícones modernos
- **React Hook Form** - Gerenciamento de formulários

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── login/
│   │   └── page.tsx          # Página de login
│   ├── registro/
│   │   └── page.tsx          # Página de registro
│   ├── sobre/
│   │   └── page.tsx          # Página sobre a empresa
│   ├── como-funciona/
│   │   └── page.tsx          # Página explicativa
│   ├── precos/
│   │   └── page.tsx          # Página de planos e preços
│   ├── contato/
│   │   └── page.tsx          # Página de contato
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Landing page
│   └── globals.css           # Estilos globais
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   ├── Header.tsx            # Cabeçalho com navegação
│   ├── Hero.tsx              # Seção principal
│   ├── EventCategoryCard.tsx # Categorias de eventos
│   ├── LatestEvents.tsx      # Últimos eventos
│   ├── FinalCTA.tsx          # Call-to-action final
│   └── Footer.tsx            # Rodapé
└── lib/                      # Utilitários e configurações
```

## 🛠️ Instalação e Execução

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
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Páginas Disponíveis

- **/** - Landing page principal
- **/login** - Página de login
- **/registro** - Página de registro
- **/sobre** - Sobre a empresa e equipe
- **/como-funciona** - Como usar a plataforma
- **/precos** - Planos e preços
- **/contato** - Formulário de contato

## 🎨 Componentes Principais

### Header
- Menu de navegação responsivo
- Barra de pesquisa
- Botões de login/registro
- Menu mobile com hambúrguer

### Hero
- Título impactante
- Descrição da plataforma
- Botões de call-to-action
- Ilustração interativa

### EventCategories
- Grid de categorias de eventos
- Ícones e cores diferenciadas
- Hover effects

### LatestEvents
- Cards de eventos com informações
- Status visual (ativo, finalizado, cancelado)
- Botões de ação

### FinalCTA
- Seção de conversão final
- Gradiente azul
- Botões destacados

## 📄 Páginas Criadas

### Login (/login)
- Formulário de autenticação
- Opção de login com GitHub
- Link para recuperação de senha
- Design responsivo

### Registro (/registro)
- Formulário completo de cadastro
- Campos para dados universitários
- Validação de formulário
- Termos de uso e política

### Sobre (/sobre)
- História da empresa
- Missão e valores
- Estatísticas impressionantes
- Equipe e perfis
- Avaliações de usuários

### Como Funciona (/como-funciona)
- Processo em 4 passos
- Demonstração visual
- Recursos da plataforma
- Call-to-action

### Preços (/precos)
- 3 planos: Gratuito, Pro, Enterprise
- Comparativo de funcionalidades
- FAQ sobre preços
- Seção de contato

### Contato (/contato)
- Formulário de contato
- Informações da empresa
- Links para FAQ
- Localização

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a aplicação em produção
- `npm run lint` - Executa o linter

## 📝 Próximos Passos

- [ ] Implementar autenticação real
- [ ] Adicionar dashboard de usuário
- [ ] Criar sistema de criação de eventos
- [ ] Implementar busca de eventos
- [ ] Adicionar sistema de pagamentos
- [ ] Integrar com banco de dados
- [ ] Implementar sistema de notificações
- [ ] Adicionar analytics e relatórios

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- Email: contato@eventosuni.com
- Website: [eventosuni.com](https://eventosuni.com)

---

Desenvolvido com ❤️ para a comunidade universitária
