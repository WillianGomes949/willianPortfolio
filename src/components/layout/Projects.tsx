"use client";

import CardProjects from "../UI/CardProjects";
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-28 px-4 bg-linear-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          {/* Badge de Destaque */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent text-sm font-medium">
              Portfólio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-will-primary">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes e desafiadores
          </p>
        </div>
        {/* Grid de Projetos */}
        <div className="mb-12">
          <CardProjects />
        </div>
      </div>
    </section>
  );
}
