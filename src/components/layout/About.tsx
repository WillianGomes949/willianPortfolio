import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { SectionTitle } from "../UI/SectionTitle";

export default function About() {
  // Lista de suas stacks
  const skills = [
    "Sites Institucionais (WordPress)",
    "Design para Redes Sociais",
    "Landing Pages de Alta Conversão",
    // "HTML 5",
    // "CSS 3",
    // "JavaScript (ES6+)",
    // "TypeScript",
    // "React",
    // "Next.js",
    // "Tailwind CSS",
    // "AWS",
    // "WordPress",
    // "Photoshop",
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative group">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          {/* Badge de Destaque */}
          <SectionTitle
            section="Sobre"
            subtitle="Acredito que cada projeto nasce de uma boa ideia — e meu papel é dar
            vida a ela no mundo digital."
            title="Eu ajudo  negócios locais a atrair mais clientes com sites modernos."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Coluna da Imagem */}
          <div className="rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={"/images/willian-gomes.webp"}
              alt="Willian Gomes"
              width={500}
              height={500}
              loading="eager"
              className="w-full object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-500 rounded-2xl"
            />
          </div>

          {/* Coluna do Texto */}
          <div className="flex flex-col space-y-6 justify-between items-start">
            <div>
              <p className="text-lg text-will-light mb-4 leading-relaxed">
                Olá! Sou Willian Gomes. Minha missão é simples: criar sites
                rápidos e fáceis de usar que tragam resultados reais para o seu
                negócio. Seja um site em WordPress para sua clínica ou um portal
                moderno, eu cuido de tudo para você.
              </p>
              <p className="text-lg text-will-light mb-6 leading-relaxed">
                Minha jornada começou no WordPress, onde aprendi a criar sites
                que resolvem problemas de negócios. Hoje, levo essa mentalidade
                para o ecossistema JavaScript moderno. Meu foco é construir
                soluções web — de sites institucionais a aplicações complexas —
                que sejam rápidas, seguras e fáceis de usar. Para isso, utilizo
                as melhores ferramentas: React, Next.js e TypeScript para
                performance, Tailwind CSS para um design ágil e AWS para uma
                infraestrutura confiável.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center">
                <span className="w-0.5 h-10 bg-will-primary mr-3"></span>
                Minhas Soluções para Você:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 group hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <FaRegCheckCircle className="w-5 h-5 mr-3 text-lime-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
