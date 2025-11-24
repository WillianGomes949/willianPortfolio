// src/pages/preco.tsx
import PortfolioPricing from "@/components/layout/PortfolioPricing";
import { SectionTitle } from "@/components/UI/SectionTitle";

export default function PPrecoGrade() {
  return (
    <div className="pt-20 bg-gray-900 min-h-screen">
      <div className="bg-gray-900 py-8 ">
        <SectionTitle
          section="Preços"
          subtitle="Explore as opções de investimento para o seu projeto. Ofereço soluções flexíveis e personalizadas para atender às suas necessidades e orçamento, garantindo sempre a melhor qualidade e retorno.
          "
          title="Seu Investimento com Transparência e Qualidade"
          className="pt-16 mb-12"
        />
      </div>
      <div className="container mx-auto px-4 pb-16">
        <PortfolioPricing />
      </div>
    </div>
  );
}
