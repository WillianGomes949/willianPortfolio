"use client";

import CardProjects from "../UI/CardProjects";
import { SectionTitle } from "../UI/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-24 md:py-34 px-2 md:px-6 to-gray-900 relative overflow-hidden"
    >
      {/* Header da Seção */}
      <SectionTitle
        section="Portfólio"
        title="Sites de qualidade e rapidez"
        subtitle="Uma amostra de como seu site pode ser rápido e responsivo, com foco em resultados."
      />

      {/* Grid de Projetos */}
      <div>
        <CardProjects />
        <div className="mx-auto text-center"></div>
      </div>
    </section>
  );
}
