// src/app/briefing/page.tsx
"use client";


import ProjectBriefingForm from "@/components/comercial/ProjectBriefingForm";
import { SectionTitle } from "@/components/UI/SectionTitle";

export default function BriefingPage() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      <SectionTitle
        subtitle="Briefing Estratégico"
        title="Vamos Criar Seu Projeto"
        className="pt-16 mb-12"
      />
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <ProjectBriefingForm />
      </div>
    </div>
  );
}