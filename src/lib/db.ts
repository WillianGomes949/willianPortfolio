// --- Definição de Tipos e Dados Mockados ---

// Defina a estrutura de um projeto
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Loja Infantil - E-commerce Responsivo",
    description:
      "Plataforma de e-commerce completa para produtos infantis com carrinho de compras, integração de pagamentos e design responsivo. Desenvolvido com React e Context API para gerenciamento de estado eficiente.",
    imageUrl: "/images/loja-ifantil.webp",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Context API",
      "AWS",
      "PWA",
      "Vercel",
      "React",
    ],
    liveUrl: "https://loja-infantil-phi.vercel.app/",
    repoUrl: "",
  },
  {
    id: 2,
    title: "Ar Veicular - Especialista em Ar Automotivo",
    description:
      "Site institucional para oficina especializada em ar condicionado automotivo. Apresenta serviços, portfólio e informações de contato com design moderno e otimizado para conversão.",
    imageUrl: "/images/ar-veicular.webp",
    tags: ["Next.js", "Tailwind", "Photoshop", "Vercel", "React"],
    liveUrl: "https://projeto-oficina-pi.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/projeto-Oficina",
  },
  {
    id: 3,
    title: "Construtora Excelência - Site Institucional",
    description:
      "Website corporativo para empresa de construção civil com catálogo de projetos, serviços e formulário de orçamento. Totalmente responsivo e otimizado para performance.",
    imageUrl: "/images/construcao.webp",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel"],
    liveUrl: "https://responsive-construction-website-chi.vercel.app/",
    repoUrl:
      "https://github.com/WillianGomes949/responsive_construction_website",
  },
  {
    id: 4,
    title: "GugaTech - Assistência Técnica em Computadores",
    description:
      "Site profissional para assistência técnica especializada em manutenção de computadores e notebooks. Inclui agendamento de serviços e catálogo de soluções técnicas.",
    imageUrl: "/images/gugatech.webp",
    tags: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://gugatech-fortaleza.vercel.app/",
    repoUrl: "",
  },
  {
    id: 5,
    title: "Ônibus Fortaleza - Consulta de Horários",
    description:
      "Aplicativo PWA para consulta em tempo real dos horários de ônibus de Fortaleza. Interface intuitiva com atualizações automáticas e funcionamento offline.",
    imageUrl: "/images/onibusfortaleza.webp",
    tags: ["API Rest", "Next.js", "Tailwind", "PWA", "Vercel", "React"],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
  },
  {
    id: 6,
    title: "Validade Fácil - Gerenciador de Produtos",
    description:
      "Sistema de controle de validade de produtos integrado com Google Sheets. Permite cadastro, consulta e alertas de produtos próximos do vencimento.",
    imageUrl: "/images/gerenciador-validades.webp",
    tags: [
      "API Rest",
      "Next.js",
      "Tailwind",
      "PWA",
      "Google Scripts",
      "Vercel",
      "React",
    ],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
  },
  {
    id: 7,
    title: "SpaceNews - Agregador de Notícias Espaciais",
    description:
      "Plataforma que agrega as últimas notícias e descobertas sobre astronomia e exploração espacial. Interface moderna com filtros por categoria e fonte.",
    imageUrl: "/images/space-news.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://space-news-ada.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/space-news-ada",
  },
  {
    id: 8,
    title: "FIPE Fácil - Consulta de Tabela FIPE",
    description:
      "Ferramenta para consulta rápida e intuitiva de valores FIPE de veículos. Busca otimizada com histórico de consultas e comparação de preços.",
    imageUrl: "/images/fipe.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://consulta-tabela-fipe-two.vercel.app//",
    repoUrl: "https://github.com/WillianGomes949/consulta-tabela-fipe",
  },
  {
    id: 9,
    title: "Clínica Saúde Total - Website Médico",
    description:
      "Site institucional para clínica médica com informações sobre especialidades, corpo clínico, agendamento online e artigos sobre saúde e bem-estar.",
    imageUrl: "/images/clinica-medica.png",
    tags: ["WordPress", "elementor", "PHP"],
    liveUrl: "https://portfolio-wordpress.infinityfreeapp.com/clinica-medica/",
    repoUrl: "",
  },
  {
    id: 10,
    title: "CEP Rápido - Buscador de Códigos Postais",
    description:
      "Ferramenta para consulta de CEPs brasileiros com integração ao Google Maps. Mostra endereços completos e permite navegação até a localização.",
    imageUrl: "/images/consulta-cep.webp",
    tags: ["API Rest", "JavaScript", "CSS", "Vercel", "React"],
    liveUrl: "https://bucador-de-ceps.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/Buscador-de-Ceps",
  },
];

export default mockProjects;