// src/pages/preco.tsx
import PortfolioPricing from "@/components/PortfolioPricing";
import BriefingButton from "@/components/UI/BriefingButton";
import { SectionTitle } from "@/components/UI/SectionTitle";

export default function PPrecoGrade() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      <div className="bg-gray-900 py-8">
        <SectionTitle
          subtitle="Nossos Preços"
          title="Seu Investimento com Transparência e Qualidade"
          className="pt-16 mb-12"
        />
      </div>
      <div className="container mx-auto px-4 pb-16">
        <PortfolioPricing />
        <BriefingButton />
      </div>
    </div>
  );
}
