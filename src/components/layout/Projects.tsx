"use client";

import CardProjects from "../UI/CardProjects";
import { SectionTitle } from "../UI/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-34 px-2 md:px-6 to-gray-900 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Header da Seção */}
      <SectionTitle
        section="Portfólio"
        title="Nossoas Projetos"
        subtitle="Uma coleção dos meus trabalhos mais recentes."
        className="mb-16 mt-16"
      />

      {/* Grid de Projetos */}
      <div className="mb-12">
        <CardProjects />
        <div className="mx-auto text-center"></div>
      </div>
    </section>
  );
}
