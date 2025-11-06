import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

export default function About(){
  // Lista de suas stacks
  const skills = [
    "HTML 5",
    "CSS 3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "AWS (básico)",
    "WordPress",
    "Photoshop",
  ];

  return (
    <section id="about" className="py-10 md:py-24 bg-gray-900 text-will-light">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Coluna da Imagem */}
          <div className="p-0 m-0">
            <Image
              src={"/images/williangomes.png"}
              alt="Willian Gomes"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-150"
            />
          </div>

          {/* Coluna do Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-will-primary">
              Sobre Mim
            </h2>
            <p className="text-lg text-will-light mb-4 leading-relaxed">
              Olá! Sou Willian, um desenvolvedor fullstack iniciante apaixonado
              por tecnologia e por transformar ideias em soluções digitais
              funcionais e elegantes.
            </p>
            <p className="text-lg text-will-light mb-6 leading-relaxed">
              Minha jornada começou com HTML e CSS, e rapidamente evoluiu para o
              ecossistema JavaScript moderno. Hoje, meu foco é construir
              aplicações web robustas e escaláveis com React, Next.js e
              TypeScript, utilizando AWS para infraestrutura e Tailwind CSS para
              interfaces ágeis.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Minhas Stacks:
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-will-light">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <FaRegCheckCircle className="w-5 h-5 mr-2 text-lime-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
