import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { SectionTitle } from "../UI/SectionTitle";

export default function About() {
  // Lista de suas stacks
  const skills = [
    "Sites Institucionais (WordPress)",
    "Lojas Virtuais e E-commerce",
    "Landing Pages de Alta Conversão",
    "Design para Redes Sociais",
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative group">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          {/* Badge de Destaque */}
          <SectionTitle
            section="Sobre"
            title="Transformo cliques em clientes para negócios locais."
            subtitle="Não basta apenas estar online. Crio estratégias digitais rápidas e eficientes focadas no crescimento real da sua empresa."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Coluna da Imagem */}
          <div className="rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={"/images/willian-gomes.webp"}
              alt="Willian Gomes"
              width={400}
              height={400}
              loading="lazy"
              className="h-140 w-full object-cover object-top grayscale-0 group-hover:grayscale-0 transition-all duration-500 rounded-2xl"
            />
          </div>

          {/* Coluna do Texto */}
          <div className="flex flex-col space-y-8 justify-between items-start">
            <div>
              <p className="text-lg text-will-light mb-4 leading-relaxed">
                Sou Willian Gomes, desenvolvedor focado em performance e
                resultados.
              </p>
              <p className="text-lg text-will-light mb-6 leading-relaxed">
                Do WordPress à potência do ecossistema
                moderno, crio soluções web rápidas,
                seguras e escaláveis. Seja um site institucional ou uma
                aplicação complexa, meu objetivo é garantir que a tecnologia
                impulsione o crescimento do seu negócio, enquanto você foca no
                que realmente importa.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center">
                <span className="w-0.5 h-10 bg-will-primary mr-3"></span>
                Minhas Soluções para Você:
              </h3>

              <ul className="grid grid-cols-1 gap-3">
                {skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="flex p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 group hover:translate-x-2 w-99"
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
