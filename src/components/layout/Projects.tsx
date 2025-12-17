"use client";

import CardProjects from "../UI/CardProjects";
import { SectionTitle } from "../UI/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-28 px-2 md:px-6 to-gray-900">
      <div className="container mx-auto max-w-7xl bg-gray-800/50 backdrop-blur-sm p-3 md:p-6 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-will-accent/30 transition-all duration-300">
        {/* Header da Seção */}
        <SectionTitle
          section="Portfólio"
          subtitle="Uma coleção dos meus trabalhos mais recentes."
          title="Meus Projetos"
          className="mb-16 mt-16"
        />

        {/* Grid de Projetos */}
        <div className="mb-12">
          <CardProjects />
          <div className="mx-auto text-center"></div>
        </div>
      </div>
    </section>
  );
}
