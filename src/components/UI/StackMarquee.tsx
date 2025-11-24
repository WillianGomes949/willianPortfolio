import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazon,
  SiWordpress,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiAdobephotoshop, name: "Photoshop" },
];

export default function StackMarquee() {
  // Duplica o array para criar um efeito de loop contínuo
  const duplicatedStack = [
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,

  ];

  return (
    <div className="-translate-y-8 w-full h-15 py-34 flex justify-center items-center group overflow-hidden">
      <div className="w-11/12 md:max-w-7xl mx-auto px-4 mask-x-from-90% mask-x-to-95%">
        <div className="overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {duplicatedStack.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="shrink-0 flex items-center justify-center space-x-12 p-8"
              >
                {/* Renderiza o ícone */}
                <item.icon className="md:ml-8 text-5xl text-gray-600 hover:text-will-accent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
