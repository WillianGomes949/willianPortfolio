"use client";

import CardProjects from "../UI/CardProjects";
import MyButton from "../UI/MyButton";
import { SectionTitle } from "../UI/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-28 px-4 bg-linear-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header da Seção */}
        <SectionTitle
            section="Portfólio"
            subtitle="Uma coleção dos meus trabalhos mais recentes."
            title="Meus Projetos"
            className="mb-16"
            />
        
        {/* Grid de Projetos */}
        <div className="mb-12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-accent/30 transition-all duration-300">
          <CardProjects />
          <div className="mx-auto text-center">
          <MyButton
            variant="primary"
            href="/projetos"
          >
            Ver mais Projetos
          </MyButton>
        </div>
        </div>
        
      </div>
    </section>
  );
}
