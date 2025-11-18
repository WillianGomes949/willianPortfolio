// src/app/briefing/page.tsx
"use client";

import ProjectBriefingForm from "@/components/comercial/ProjectBriefingForm";
import { SectionTitle } from "@/components/UI/SectionTitle";

export default function BriefingPage() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      <SectionTitle
        section="Briefing"
        title="Preencha o Formulário para Iniciarmos Seu Projeto"
        subtitle="Compartilhe os detalhes do seu projeto para que eu possa entender suas necessidades e objetivos. Quanto mais informações você fornecer, mais precisa será a minha proposta."
        className="pt-16 mb-12"
      />
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <ProjectBriefingForm />
      </div>
    </div>
  );
}
