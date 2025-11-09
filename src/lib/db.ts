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
    title: "E-commerce (Conceito)",
    description:
      "Um conceito de e-commerce com carrinho de compras, utilizando React e Context API para gerenciamento de estado.",
    imageUrl: "/images/loja-ifantil.webp",
    tags: ["Next.js","Tailwind CSS","Context API","AWS","PWA","Vercel", "React"],
    liveUrl: "https://loja-infantil-phi.vercel.app/",
    repoUrl: "",
  },
  {
    id: 2,
    title: "Oficina de Ar-Veicular",
    description:
      "Um site para uma oficina de ar-automotivo, criada com react.js e next.js.",
    imageUrl: "/images/ar-veicular.webp",
    tags: ["Next.js", "Tailwind", "Photoshop", "Vercel", "React"],
    liveUrl: "https://projeto-oficina-pi.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/projeto-Oficina",
  },
  {
    id: 3,
    title: "Emp. de Construção",
    description:
      "Site para Empresa de Construção, Totalmente responsivo e leve.",
    imageUrl: "/images/construcao.webp",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel"],
    liveUrl: "https://responsive-construction-website-chi.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/responsive_construction_website",
  },
  {
    id: 4,
    title: "Consultar CEP",
    description:
      "Um mini App para consulta gratuita de CEPs com direcionamento para google Maps",
    imageUrl: "/images/consulta-cep.webp",
    tags: ["API Rest", "JavaScript", "CSS", "Vercel", "React"],
    liveUrl: "https://bucador-de-ceps.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/Buscador-de-Ceps",
  },
  {
    id: 5,
    title: "Ônibus de Fortaleza",
    description:
      "Um mini App utilizando react.js e next.js para consulta gratuita dos Horários de Ônibus de Fortaleza, atualizados.",
    imageUrl: "/images/onibusfortaleza.webp",
    tags: ["API Rest", "Next.js", "Tailwind", "PWA", "Vercel", "React"],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
  },
  {
    id: 6,
    title: "Gerenciador de validades",
    description:
      "Um mini App para gerenciamento de produtos, com back-end usando o google sheets, feito com next.js e tailwind.",
    imageUrl: "/images/gerenciador-validades.webp",
    tags: [
      "API Rest",
      "Next.js",
      "Tailwind",
      "PWA",
      "Google Scripts",
      "Vercel",
       "React"
    ],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
  },
  {
    id: 7,
    title: "Agregador de Notícias",
    description:
      "Um agregador de noticias espaciais, feito com next.js e tailwind.",
    imageUrl: "/images/space-news.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://space-news-ada.vercel.app/",
    repoUrl: "https://github.com/WillianGomes949/space-news-ada",
  },
   {
    id: 8,
    title: "Consulta Tabela FIPE",
    description:
      "Um agregador de noticias espaciais, feito com next.js e tailwind.",
    imageUrl: "/images/fipe.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://consulta-tabela-fipe-two.vercel.app//",
    repoUrl: "https://github.com/WillianGomes949/consulta-tabela-fipe",
  },
   {
    id: 9,
    title: "Clinica Medica",
    description:
      "Um Site de Clinica Medica",
    imageUrl: "/images/clinica-medica.png",
    tags: ["WordPress", "elementor", "PHP"],
    liveUrl: "https://portfolio-wordpress.infinityfreeapp.com/clinica-medica/",
    repoUrl: "",
  },
];

export default mockProjects;
