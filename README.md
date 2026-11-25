# Atelier Lumière — Landing Page Comercial para Profissionais da Beleza Feminina

Landing page comercial premium desenvolvida para profissionais autônomas e pequenos estúdios da área da beleza feminina (manicure, pedicure, alongamento de unhas, nail design, extensão de cílios, lash lifting, design de sobrancelhas, beleza facial e cuidados estéticos).

O projeto foi arquitetado para **personalização rápida e comercialização**: quase todas as informações do site (nome do espaço, profissional, WhatsApp, Instagram, endereço, horários, Google Maps, serviços, portfólio, sobre, depoimentos e SEO) ficam centralizadas em um único arquivo de configuração.

---

## Tecnologias Utilizadas

- **HTML5 Semântico** (SEO, acessibilidade e estrutura limpa)
- **CSS3 Modular** (variáveis de design system, responsividade mobile-first, microanimações suaves)
- **JavaScript (ES Modules)** sem dependências pesadas de runtime
- **Vite** para servidor de desenvolvimento e build de produção otimizado
- **GitHub Actions** configurado para publicação automática no **GitHub Pages**

---

## Estrutura do Projeto

```text
studio-beleza-landing/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml      # Workflow de publicação automática no GitHub Pages
├── public/
│   ├── images/                   # Fotografias locais organizadas (prontas para substituição)
│   ├── favicon.svg               # Ícone do navegador
│   ├── robots.txt                # Diretivas de indexação
│   └── sitemap.xml               # Mapa do site para SEO
├── src/
│   ├── components/
│   │   └── icons.js              # Ícones SVG delicados e leves
│   ├── config/
│   │   └── siteConfig.js         # Configuração centralizada de todo o site
│   ├── styles/
│   │   └── main.css              # Design system, paleta e estilos responsivos
│   └── main.js                   # Hidratação de dados, menu mobile, filtro e lightbox
├── index.html                    # Documento principal com meta tags e Open Graph
├── package.json
├── vite.config.js                # Configurado com base: './' para GitHub Pages
└── README.md
```

---

## Como Executar Localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Para gerar o build de produção (pasta `dist/`):

```bash
npm run build
```

4. Para visualizar localmente o build de produção:

```bash
npm run preview
```

---

## Como Personalizar para uma Nova Cliente

Toda a personalização principal é feita no arquivo **`src/config/siteConfig.js`**.

### 1. Alterar o número do WhatsApp e mensagens
Em `src/config/siteConfig.js`, localize o objeto `contact`:

```js
contact: {
  whatsappNumber: '5511999999999', // DDI + DDD + Número (apenas dígitos)
  whatsappDisplay: '(11) 99999-9999',
  defaultWhatsappMessage:
    'Olá! Conheci seu trabalho pelo site e gostaria de agendar um horário.',
  ...
}
```

Todos os botões de agendamento (Header, Hero, Sobre, Contato, Rodapé e botão flutuante) passam a usar automaticamente esse número.

### 2. Alterar os serviços e mensagens por procedimento
Ainda em `src/config/siteConfig.js`, edite o array `services`. Cada item controla:
- `name`: nome do procedimento
- `category`: categoria exibida no selo
- `description`: descrição curta
- `image` e `imageAlt`: caminho da imagem e texto alternativo
- `whatsappMessage`: mensagem contextualizada enviada ao WhatsApp quando a cliente clica naquele serviço

### 3. Trocar as imagens pelas fotos reais da profissional
As imagens ficam em **`public/images/`**:
- `hero-beauty.jpg` — Foto principal do Hero
- `service-manicure.jpg` — Manicure e pedicure
- `service-alongamento.jpg` — Alongamento de unhas
- `service-nail-design.jpg` — Nail design
- `service-cilios.jpg` — Extensão de cílios
- `service-lash-lifting.jpg` — Lash lifting
- `service-sobrancelhas.jpg` — Design de sobrancelhas
- `service-facial.jpg` — Beleza facial
- `service-estetica.jpg` — Tratamentos e cuidados estéticos
- `experiencia-autocuidado.jpg` — Seção Experiência de Autocuidado
- `sobre-profissional.jpg` — Retrato da profissional

Você pode simplesmente substituir os arquivos mantendo os mesmos nomes, ou adicionar novas fotos em `public/images/` e atualizar os caminhos em `src/config/siteConfig.js`.

### 4. Alterar Instagram, endereço, horários e Google Maps
Em `src/config/siteConfig.js`, edite o objeto `contact`:
- `instagramHandle` e `instagramUrl`
- `address` e `addressComplement`
- `googleMapsUrl`
- `hours` (lista de dias e horários)

### 5. Ativar a seção de Depoimentos Reais
Por padrão, a seção de depoimentos fica oculta (`enabled: false`) para evitar conteúdo fictício. Quando a cliente fornecer depoimentos reais autorizados, edite `testimonials` em `src/config/siteConfig.js`:

```js
testimonials: {
  enabled: true,
  eyebrow: 'Carinho de Quem Passa Por Aqui',
  title: 'Palavras de quem confia no nosso cuidado.',
  items: [
    {
      author: 'Nome Real da Cliente',
      service: 'Extensão de cílios',
      quote: 'Depoimento real autorizado pela cliente.',
    },
  ],
},
```

### 6. Ativar Dados Estruturados (SEO Local) e ajustar domínio
Após preencher os dados reais do estúdio:
- Em `src/config/siteConfig.js`, defina `seo.siteUrl` com a URL final e altere `seo.enableStructuredData: true`.
- Atualize a URL em `public/sitemap.xml` e `public/robots.txt`.

### 7. Personalizar cores da identidade visual
As variáveis de cores e tipografia ficam no topo de **`src/styles/main.css`** (`:root`), permitindo adaptar facilmente os tons de nude, bege, champagne, rosé e marrom.

---

## Como Publicar no GitHub Pages

O projeto já inclui `base: './'` no `vite.config.js` e o workflow automático em `.github/workflows/deploy-pages.yml`.

1. Crie um repositório no GitHub e envie o projeto para a branch `main`:

```bash
git init
git add .
git commit -m "feat: landing page comercial de beleza feminina"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Aguarde a execução do workflow **Deploy para GitHub Pages** na aba **Actions**. Ao concluir, o link público do site será exibido na própria página de **Settings → Pages**.
