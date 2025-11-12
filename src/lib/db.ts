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
  SiWordpress,
} from "react-icons/si";
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
      "Plataforma de e-commerce completa para produtos infantis com carrinho de compras, suporte integração de pagamentos e design responsivo. Desenvolvido com React e Context API para gerenciamento de estado eficiente.",
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
    // repoUrl: "",
  },
  {
    id: 2,
    title: "Ar Veicular - Especialista em Ar Automotivo",
    description:
      "Site institucional para oficina especializada em ar condicionado automotivo. Apresenta serviços e informações de contato com design moderno e otimizado para conversão.",
    imageUrl: "/images/ar-veicular.webp",
    tags: ["Next.js", "Tailwind", "Photoshop", "Vercel", "React"],
    liveUrl: "https://projeto-oficina-pi.vercel.app/",
    // repoUrl: "https://github.com/WillianGomes949/projeto-Oficina",
  },
  {
    id: 3,
    title: "Construtora Excelência - Site Institucional",
    description:
      "Website corporativo para empresa de construção civil com projetos, serviços e formulário. Totalmente responsivo e otimizado para performance.",
    imageUrl: "/images/construcao.webp",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel"],
    liveUrl: "https://responsive-construction-website-chi.vercel.app/",
    // repoUrl:
    //   "https://github.com/WillianGomes949/responsive_construction_website",
  },
  {
    id: 4,
    title: "GugaTech - Assistência Técnica em Computadores",
    description:
      "Site profissional para assistência técnica especializada em manutenção de computadores e notebooks. Inclui agendamento de serviços e catálogo de soluções técnicas.",
    imageUrl: "/images/gugatech.webp",
    tags: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://gugatech-fortaleza.vercel.app/",
    // repoUrl: "",
  },
  {
    id: 5,
    title: "Ônibus Fortaleza - Consulta de Horários",
    description:
      "Aplicativo PWA para consulta em tempo real dos horários de ônibus de Fortaleza. Interface intuitiva com atualizações automáticas.",
    imageUrl: "/images/onibusfortaleza.webp",
    tags: ["API Rest", "Next.js", "Tailwind", "PWA", "Vercel", "React"],
    liveUrl: "https://horarios-onibus-fortaleza.vercel.app/",
    // repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
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
    // repoUrl: "https://github.com/WillianGomes949/horarios-onibus-fortaleza",
  },
  {
    id: 7,
    title: "SpaceNews - Agregador de Notícias Espaciais",
    description:
      "Plataforma que agrega as últimas notícias e descobertas sobre astronomia e exploração espacial.",
    imageUrl: "/images/space-news.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://space-news-ada.vercel.app/",
    // repoUrl: "https://github.com/WillianGomes949/space-news-ada",
  },
  {
    id: 8,
    title: "FIPE Fácil - Consulta de Tabela FIPE",
    description:
      "Ferramenta para consulta rápida e intuitiva de valores FIPE de veículos. Busca otimizada.",
    imageUrl: "/images/fipe.webp",
    tags: ["API Rest", "Next.js", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://consulta-tabela-fipe-two.vercel.app//",
    // repoUrl: "https://github.com/WillianGomes949/consulta-tabela-fipe",
  },
  {
    id: 9,
    title: "Clínica Saúde Total - Website Médico",
    description:
      "Site institucional para clínica médica com informações sobre especialidades.",
    imageUrl: "/images/clinica-medica.png",
    tags: ["WordPress", "elementor", "PHP"],
    liveUrl: "https://portfolio-wordpress.infinityfreeapp.com/clinica-medica/",
    // repoUrl: "",
  },
  {
    id: 10,
    title: "CEP Rápido - Buscador de Códigos Postais",
    description:
      "Ferramenta para consulta de CEPs brasileiros com integração ao Google Maps. Mostra endereços completos e permite navegação até a localização a partir do CEP.",
    imageUrl: "/images/consulta-cep.webp",
    tags: ["API Rest", "JavaScript", "CSS", "Vercel", "React"],
    liveUrl: "https://bucador-de-ceps.vercel.app/",
    // repoUrl: "https://github.com/WillianGomes949/Buscador-de-Ceps",
  },
];
// Mapeamento de cores para tecnologias
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
];
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
    color: "hover:text-will-primary",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/williangomes949",
    icon: FaLinkedin,
    color: "hover:text-will-primary",
  },
];

export { techColors, techStacks, mockProjects, socialLinks };
