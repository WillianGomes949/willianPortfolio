import Contact from "@/components/layout/Contact";
import BriefingButton from "../UI/BriefingButton";
import MyButton from "../UI/MyButton";
import { pricingData, ServiceCard, MaintenancePlan } from "@/data/precodb";
import { meusDados } from "@/data/db"; 
import {BiCheck } from "react-icons/bi";
import { RxRocket } from "react-icons/rx";
import PayGrid from "../UI/PayGrid";

export default function PortfolioPricing() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 antialiased py-24 md:py-34">
      <div className="md:max-w-7xl mx-auto px-2 md:px-6 py-12">
        {/* =========================================
            HEADER & DESTAQUES
           ========================================= */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texto de Introdução */}
            <div>
              <h2 className="text-center md:text-start text-3xl font-extrabold leading-tight bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Preços justos e resultados reais
              </h2>
              <p className="mt-4 text-gray-400">
                Grade de preços pensada para micro, pequenos e médios negócios e
                profissionais autônomos em Fortaleza e Região. Transparência,
                qualidade e custos realistas.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Foco: fisioterapeutas, salões, dentistas, advogados e
                  autônomos.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Especialidade: WordPress, React e Lojas Virtuais.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Opções de pacotes para posts e manutenção mensal.
                </li>
              </ul>

              <div className="mt-8 flex flex-col md:flex-row gap-3 w-full">
                <BriefingButton />
              </div>
            </div>

            {/* Card de Destaque / Resumo - VISUAL MELHORADO */}
            <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl shadow-will-accent/5 border border-will-accent/20 relative overflow-hidden">
              {/* Efeito de luz sutil no fundo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-will-accent/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                <RxRocket size={24} className="text-will-accent" />
                Destaques da Semana
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Landing pages a partir de{" "}
                <span className="font-semibold text-will-accent bg-will-accent/10 px-1 rounded-md">
                  {pricingData.highlights.landingPageStart}
                </span>
                . Lojas Virtuais completas a partir de{" "}
                <span className="font-semibold text-will-accent bg-will-accent/10 px-1 rounded-md">
                  {pricingData.highlights.ecommerceStart}
                </span>
                .
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 border border-gray-700 rounded-2xl bg-gray-900/50">
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                    Entrega
                  </div>
                  <div className="font-semibold text-gray-200 text-sm md:text-base">
                    Design + Code
                  </div>
                </div>
                <div className="p-4 border border-gray-700 rounded-2xl bg-gray-900/50">
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                    Suporte
                  </div>
                  <div className="font-semibold text-gray-200 text-sm md:text-base">
                    Manutenção opcional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SESSÃO DE PAGAMENTO
           ========================================= */}
        <PayGrid/>

        {/* =========================================
            GRADE DE PREÇOS (ID: precos)
           ========================================= */}
        <section id="precos" className="mb-16">
          <div className="mb-8">
            <h3 className="flex justify-center md:justify-start text-2xl font-bold bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Grade de Preços
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Preços de Referência 2025/2026. Investimento único (exceto
              manutenção).
            </p>
          </div>

          {/* 1. SITES & INSTITUCIONAL */}
          <h4 className="text-lg font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">
            Sites & Institucional
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingData.mainServices.map((service, index) => (
              <PricingCard key={index} data={service} />
            ))}
          </div>

          {/* 2. E-COMMERCE */}
          <h4 className="text-lg font-semibold text-will-accent mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
            E-commerce & Vendas Online
            <span className="text-xs bg-will-accent/10 text-will-accent px-2 py-0.5 rounded-full border border-will-accent/20">
              Alta Procura
            </span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingData.ecommerceServices?.map((service, index) => (
              <PricingCard key={index} data={service} />
            ))}
          </div>

          {/* 3. SERVIÇOS TÉCNICOS */}
          <h4 className="text-lg font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">
            Técnico & Infraestrutura
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.technicalServices.map((service, index) => (
              <PricingCard key={index} data={service} />
            ))}
          </div>
        </section>

        {/* =========================================
            POSTS & CONTEÚDO (ID: servicos)
           ========================================= */}
        <section id="servicos" className="mb-16">
          <h3 className="text-2xl font-bold mb-8 bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Posts & Conteúdo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.contentServices.map((service, index) => (
              <PricingCard key={index} data={service} isContentCard />
            ))}
          </div>
        </section>

        {/* =========================================
            PLANOS DE MANUTENÇÃO
           ========================================= */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Planos de Manutenção (WordPress/Lojas)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.maintenancePlans.map((plan, index) => (
              <MaintenanceCard key={index} plan={plan} />
            ))}
          </div>
        </section>

        {/* =========================================
            CONTATO & FOOTER
           ========================================= */}
        <section id="contato" className="mb-20 p-0">
          <Contact />
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 mt-8">
            <h4 className="font-bold text-gray-100 mb-4">Observações Finais</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <BiCheck className="text-will-primary mt-1 shrink-0" />
                <span>
                  Propostas personalizadas são enviadas após briefing detalhado.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BiCheck className="text-will-primary mt-1 shrink-0" />
                <span>
                  Valores de E-commerce não incluem taxas das plataformas
                  (Shopify/Nuvemshop).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BiCheck className="text-will-primary mt-1 shrink-0" />
                <span>
                  Parcelamento no cartão sujeito às taxas da operadora (Mercado
                  Pago).
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

// =========================================================
// SUB-COMPONENTES AUXILIARES
// =========================================================

// Card Genérico para Serviços
function PricingCard({
  data,
  isContentCard = false,
}: {
  data: ServiceCard;
  isContentCard?: boolean;
}) {
  // GERA O LINK DO WHATSAPP DINÂMICO
  const message = encodeURIComponent(
    `Olá Willian! Tenho interesse no serviço: ${data.title}. Poderia me passar mais detalhes?`
  );
  const whatsappLink = `${meusDados.whatsappUrl}?text=${message}`;

  return (
    <article
      className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl transition-all duration-300 group relative flex flex-col h-full
      ${
        data.isPopular
          ? "border border-will-accent/50 shadow-will-accent/5 scale-[1.02] z-10"
          : "border border-gray-700/50 hover:border-will-accent/30 hover:bg-gray-800/80"
      }`}
    >
      {data.isPopular && (
        <div className="absolute -top-3 right-4">
          <span className="bg-will-accent text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Mais Vendido
          </span>
        </div>
      )}

      {isContentCard ? (
        <h5 className="font-bold text-gray-100 mb-3">{data.title}</h5>
      ) : (
        <h4 className="text-lg font-bold text-gray-100 mb-3">{data.title}</h4>
      )}

      {data.description && (
        <p className="text-sm text-gray-300 mb-4 grow">{data.description}</p>
      )}

      <ul className={`space-y-3 text-sm ${data.footerNote ? "mb-4" : "mb-6"}`}>
        {data.items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between text-gray-300 border-b border-gray-700/30 pb-2 last:border-0"
          >
            <span>{item.label}</span>
            <span className="font-semibold text-will-accent text-right ml-2">
              {item.price}
            </span>
          </li>
        ))}
      </ul>

      {data.footerNote && (
        <p className="text-xs text-gray-500 mb-4 italic">{data.footerNote}</p>
      )}

      {/* BOTÃO DE AÇÃO (MYBUTTON) LINKADO AO WHATSAPP */}
      <div className="mt-auto pt-2">
        <MyButton
          href={whatsappLink}
          target="_blank"
          fullWidth
          size="sm"
          variant={data.isPopular ? "primary" : "secondary"}
          className={data.isPopular ? "font-bold" : ""}
        >
          Tenho Interesse
        </MyButton>
      </div>
    </article>
  );
}

// Card Específico para Manutenção
function MaintenanceCard({ plan }: { plan: MaintenancePlan }) {
  const isRecommended = plan.isRecommended;

  // GERA O LINK DO WHATSAPP DINÂMICO PARA MANUTENÇÃO
  const message = encodeURIComponent(
    `Olá Willian! Tenho interesse no plano de manutenção: ${plan.title}. Como funciona?`
  );
  const whatsappLink = `${meusDados.whatsappUrl}?text=${message}`;

  return (
    <div
      className={`group bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl transition-all duration-300 group text-center flex flex-col h-full
      ${
        isRecommended
          ? "border border-will-accent/40 relative shadow-will-accent/10 scale-105 z-10"
          : "border border-gray-700/50 hover:border-will-accent/30"
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-max">
          <span className="bg-will-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            RECOMENDADO
          </span>
        </div>
      )}

      <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide uppercase mt-2">
        {plan.title}
      </div>

      <div
        className={`mt-2 font-bold text-3xl ${
          isRecommended ? "text-will-accent" : "text-will-light group-hover:text-will-accent transition-colors "
        }`}
      >
        {plan.price}
      </div>

      <p className="mt-4 text-sm text-gray-300 leading-relaxed grow px-2">
        {plan.description}
      </p>

      <div className="mt-6 pt-4 w-full">
        {/* BOTÃO DE AÇÃO PARA MANUTENÇÃO (MYBUTTON) */}
        <MyButton
          href={whatsappLink}
          target="_blank"
          fullWidth
          size="sm"
          variant={isRecommended ? "primary" : "secondary"}
          className="mb-2"
        >
          Contratar Agora
        </MyButton>
        <span className="text-[10px] text-gray-500 block uppercase tracking-wider">
          Sem fidelidade
        </span>
      </div>
    </div>
  );
}
