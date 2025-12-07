// --- Definição de Tipos e Dados Mockados ---
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAmazon,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";

// --- ESTRUTURA DE DADOS ---

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface MeusDados {
  nome: string;
  phoneNumber: string;
  email: string;
  whatsappUrl: string;
  localizacao: string;
  instagram: string;
  linkedin: string;
  github: string;
  sobreMim: string;
}

// --- BANCO DE DADOS DE PROJETOS ---
const meusDados: MeusDados = {
  nome: "Willian Gomes",
  phoneNumber: "+55 (85) 9.8895-4195",
  email: "williangomes949@gmail.com",
  whatsappUrl:
    "https://wa.me/5585988954195?text=Olá! Gostaria de conversar sobre seus serviços...",
  instagram: "https://www.instagram.com/williangomes949/",
  linkedin: "https://www.linkedin.com/in/williangomes949/",
  github: "https://github.com/williangomes949",
  localizacao: "Fortaleza - CE, Brasil",
  sobreMim: `Sou um desenvolvedor apaixonado por criar soluções digitais que realmente fazem a diferença. Com experiência em, transformo ideias em realidade, focando sempre na experiência do usuário e na performance. Minha jornada é impulsionada pela busca contínua por aprendizado e pela vontade de construir produtos que impactam positivamente.`,
};

const featuredProjects: Project[] = [
  {
    id: 15,
    title: "Arquitetura Moderna",
    description: "Website completo para escritório de arquitetura com showcase de projetos, agendamento de consultorias virtuais, galeria interativa. Interface moderna com animações suaves e otimizada para dispositivos móveis.",
    imageUrl: "/images/architecture.webp",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Next.js", "Vercel"],
    liveUrl: "https://arquitetura-iota.vercel.app/",
    repoUrl: "",
  },
  {
    id: 14,
    title: "Website de Barbearia",
    description:
      "Página inicial completa (landing page) para um serviço de barbearia, com agendamento e apresentando informações sobre serviços em destaque, galeria de trabalhos, depoimentos de clientes e informações de contato/localização.",
    imageUrl: "/images/barbearia.webp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel"],
    liveUrl: "https://barbearia-cortepro.vercel.app/",
    repoUrl: "",
  },
  {
    id: 13,
    title: "Churros Gourmet - Landing Page",
    description:
      "Landing page moderna e responsiva desenvolvida para uma doceria artesanal. O projeto foca em uma UI 'apetitosa', utilizando uma paleta de cores quentes e tipografia lúdica para maximizar o apelo visual. Conta com vitrine de produtos, galeria interativa e integração direta para pedidos via WhatsApp.",
    imageUrl: "/images/churros.webp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel"],
    liveUrl: "https://churros-pearl.vercel.app/",
    repoUrl: "",
  },

  {
    id: 12,
    title: "Véritas Advogados",
    description:
      "Site institucional para um escritório de advocacia focado em transmitir credibilidade e capturar leads. O design limpo e o formulário de contato direto ajudam a converter visitantes em clientes.",
    imageUrl: "/images/veritas-advogados2.webp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel"],
    liveUrl: "https://veritas-advocacia-eta.vercel.app/",
    repoUrl: "",
  },
  {
    id: 11,
    title: "SorrirPrime (Clínica Demo)",
    description:
      "Conceito premium para clínicas, focado em UI/UX e performance. Inclui um sistema de agendamento dinâmico (com API fake) e um painel de admin para gerenciar as solicitações.",
    imageUrl: "/images/sorrir-prime.webp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://projeto-sorrir-prime.vercel.app/",
    repoUrl: "",
  },
  {
    id: 10,
    title: "GugaTech - Assistência Técnica",
    description:
      "Plataforma de serviços para assistência técnica. O foco foi no agendamento online e um catálogo claro de soluções, reduzindo o atrito para o cliente que precisa de um reparo urgente.",
    imageUrl: "/images/gugatech.webp",
    tags: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://gugatech-fortaleza.vercel.app/",
  },
  {
    id: 9,
    title: "Clínica Saúde Total (WordPress)",
    description:
      "Demonstração de site para a área de saúde construído em WordPress. Focado em uma solução profissional que pode ser facilmente gerenciada pelo cliente usando Elementor.",
    imageUrl: "/images/clinica-medica.webp",
    tags: ["WordPress", "Elementor", "PHP"],
    liveUrl: "https://portfolio-wordpress.infinityfreeapp.com/clinica-medica/",
  },
  {
    id: 8,
    title: "Loja Infantil (E-commerce Demo)",
    description:
      "Demonstração de e-commerce completo. A solução inclui um carrinho de compras funcional e um layout 100% responsivo, focado na experiência de compra em dispositivos móveis.",
    imageUrl: "/images/loja-ifantil.webp",
    tags: ["Next.js", "Tailwind CSS", "Context API", "React"],
    liveUrl: "https://loja-infantil-phi.vercel.app/",
  },
  {
    id: 7,
    title: "Ar Veicular - Oficina",
    description:
      "Site institucional para oficina especializada em ar condicionado automotivo, otimizado para conversão rápida via WhatsApp e apresentação clara de serviços.",
    imageUrl: "/images/ar-veicular.webp",
    tags: ["Next.js", "Tailwind", "Photoshop", "Vercel", "React"],
    liveUrl: "https://projeto-oficina-pi.vercel.app/",
  },
  {
    id: 6,
    title: "Site Estático: Construtora",
    description:
      "Website corporativo focado em demonstrar a base do desenvolvimento web (HTML, CSS, JS puros). Totalmente responsivo e otimizado para performance.",
    imageUrl: "/images/construcao.webp",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://responsive-construction-website-chi.vercel.app/",
  },
];

const allProjects: Project[] = [
  // Projetos de Negócios (featured) vêm primeiro
  ...featuredProjects,
  // Projetos Utilitários e Outros
  {
    id: 5,
    title: "PWA: Ônibus Fortaleza",
    description:
      "Aplicativo PWA para consulta em tempo real dos horários de ônibus de Fortaleza. Demonstração de integração com APIs de dados públicos e performance mobile.",
    imageUrl: "/images/onibusfortaleza.webp",
    tags: ["API Rest", "Next.js", "Tailwind", "PWA", "React"],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
  },
  {
    id: 4,
    title: "PWA: FIPE Fácil",
    description:
      "Ferramenta PWA que consome uma API pública da FIPE. Otimizado para buscas rápidas e performance mobile, mostrando a integração de dados em tempo real.",
    imageUrl: "/images/fipe.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://consulta-tabela-fipe-two.vercel.app//",
  },
  {
    id: 3,
    title: "Sistema: Validade Fácil",
    description:
      "Sistema de controle de validade de produtos com integração com Google Sheets. Permite cadastro, consulta e alertas, resolvendo um problema de logística interna.",
    imageUrl: "/images/gerenciador-validades.webp",
    tags: ["API Rest", "Next.js", "Google Scripts", "React"],
    liveUrl: "https://gerenciador-de-validades-sigma.vercel.app/", // Live URL parece estar errada, verificar
  },
  {
    id: 2,
    title: "Ferramenta: CEP Rápido",
    description:
      "Aplicação prática que integra a API da ViaCEP com o Google Maps. Uma ferramenta de utilidade que demonstra o uso de múltiplas APIs para resolver um problema do dia a dia.",
    imageUrl: "/images/consulta-cep.webp",
    tags: ["API Rest", "JavaScript", "CSS", "Vercel", "React"],
    liveUrl: "https://bucador-de-ceps.vercel.app/",
  },
  {
    id: 1,
    title: "Portal: SpaceNews",
    description:
      "Plataforma que agrega as últimas notícias sobre astronomia e exploração espacial, consumindo uma API de notícias em tempo real.",
    imageUrl: "/images/space-news.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://space-news-ada.vercel.app/",
  },
];

// --- DADOS DE TECNOLOGIAS (Sem mudanças, já estava bom) ---

const techColors: { [key: string]: string } = {
  HTML: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  CSS3: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  TypeScript: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Next.js": "bg-white/20 text-white border-white/30",
  "Tailwind CSS": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  AWS: "bg-orange-400/20 text-orange-300 border-orange-400/30",
  WordPress: "bg-blue-900/20 text-blue-300 border-blue-900/30",
  Photoshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Vercel: "bg-green-500/20 text-green-400 border-green-500/30",
  Admin: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  PWA: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "API Rest": "bg-red-500/20 text-red-400 border-red-500/30",
  Elementor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Context API": "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
  "Google Scripts": "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
  PHP: "bg-purple-600/20 text-purple-400 border-purple-600/30",
  default: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const techStacks = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS", icon: SiAmazon },
  { name: "WordPress", icon: SiWordpress },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Vercel", icon: SiVercel },
];

// --- DADOS DE LINKS SOCIAIS (Sem mudanças) ---

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/5585988954195?text=Olá! Gostaria de conversar sobre um projeto...",
    icon: FaWhatsapp,
    color: "hover:text-lime-400",
  },
  {
    name: "GitHub",
    href: "https://github.com/williangomes949",
    icon: FaGithub,
    color: "hover:text-will-primary", // (assumindo que 'will-primary' é uma cor customizada)
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/williangomes949",
    icon: FaLinkedin,
    color: "hover:text-will-primary",
  },
];

export {
  techColors,
  techStacks,
  featuredProjects,
  allProjects,
  socialLinks,
  meusDados,
};
