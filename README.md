# Portal de Dados Públicos de Moçambique

![Banner](./public/images/Kutiva Logo.png)

Um portal interativo que disponibiliza **dados públicos de Moçambique** para promover transparência, análise de informações e suporte à tomada de decisão. Este projeto permite explorar, filtrar e baixar datasets de diversas categorias.

## 🧩 Funcionalidades

- **Exploração de datasets**: Visualize e busque dados públicos confiáveis.
- **Filtros por categoria**: Facilita encontrar dados específicos.
- **Download de dados**: Disponível em diversos formatos como CSV, JSON, Excel e Parquet.
- **Interface responsiva**: Adaptável para desktop e dispositivos móveis.
- **Dark Mode compatível**: Melhor experiência visual para todos os usuários.
- **Seção “Sobre”**: Explica o projeto, valores e filosofia de transparência.
- **Demonstração**: Teste interativo dos dados antes de baixar.

## 📂 Estrutura do Projeto

```text
.
├── app/
│   ├── about/               # Página sobre o portal
│   ├── dashboard/           # Página principal de exploração de dados
│   └── page.tsx             # Página inicial
├── components/
│   ├── HeroBanner.tsx       # Banner inicial com CTA
│   ├── Navbar.tsx           # Barra de navegação responsiva
│   └── DatasetList.tsx      # Lista e filtros de datasets
├── public/
│   ├── images/              # Imagens e ícones do portal
│   └── grid-pattern.svg     # Padrão de fundo
├── styles/
│   └── globals.css          # Estilos globais (TailwindCSS)
├── package.json
└── README.md
