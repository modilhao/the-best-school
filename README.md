# The Best School - Landing Page

Uma landing page moderna e responsiva para The Best School, desenvolvida com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance Otimizada**: Construído com Next.js 15 e App Router
- **Formulários Integrados**: 
  - Formulário de matrícula
  - Formulário de contato (integrado com Formspree)
- **Seções Completas**:
  - Hero Section com call-to-action
  - Sobre a escola
  - Programas acadêmicos
  - Depoimentos
  - Informações de contato
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Animações Suaves**: Transições e efeitos visuais

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Formulários**: Formspree
- **Otimização de Imagens**: Next.js Image Component

## 📋 Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

## 🚀 Instalação e Execução

1. **Clone o repositório**
```bash
git clone <repository-url>
cd the-best-school
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```
Edite o arquivo `.env.local` com suas configurações.

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build para Produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── Header.tsx      # Cabeçalho
│   ├── HeroSection.tsx # Seção hero
│   ├── AboutSection.tsx# Sobre a escola
│   ├── ProgramsSection.tsx # Programas
│   ├── TestimonialsSection.tsx # Depoimentos
│   ├── EnrollmentForm.tsx # Formulário de matrícula
│   ├── ContactForm.tsx # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── lib/                # Utilitários e configurações
│   ├── constants.ts    # Constantes da aplicação
│   └── utils.ts        # Funções utilitárias
└── types/              # Definições de tipos TypeScript
```

## 🌐 Deploy no Vercel

1. **Conecte seu repositório GitHub ao Vercel**
2. **Configure as variáveis de ambiente no painel do Vercel**
3. **O deploy será automático a cada push na branch main**

Ou use o Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📧 Configuração do Formspree

1. Crie uma conta em [Formspree.io](https://formspree.io)
2. Configure o endpoint do formulário
3. Adicione o endpoint nas variáveis de ambiente

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: modilhao@thebest.edu.pl
- **Website**: [The Best School](https://thebest.edu.pl)

---

Desenvolvido com ❤️ para The Best School
