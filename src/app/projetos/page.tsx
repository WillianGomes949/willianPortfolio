// src/pages/ProjectsPage.tsx
import ProjectCard from "@/components/UI/ProjectCard";
import { SectionTitle } from "@/components/UI/SectionTitle";


export default function ProjectsPage() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      {/* (ou sua cor de fundo) */}
      <SectionTitle
        subtitle="Portfólio"
        title="Todos os Meus Projetos"
        className="pt-16 mb-12"
      />
      <div className="container mx-auto px-4 pb-16">
        <ProjectCard />
      </div>
    </div>
  );
}
