// src/components/layout/SiteBenefits.tsx
import React from "react";
import {
  MdCheckCircle,
  MdSpeed,
  MdDevices,
  MdTrendingUp,
  MdSecurity,
  MdSearch,
  MdBarChart,
  MdGroup,
} from "react-icons/md";
import { SectionTitle } from "../UI/SectionTitle";

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function SiteBenefits() {
  const benefits: BenefitItem[] = [
    {
      icon: <MdDevices className="text-3xl" />,
      title: "Perfeito no Celular", // Mudou de "Design Responsivo"
      description:
        "Seu cliente está no celular. Entregue uma experiência incrível em qualquer tela (iPhone ou Android) sem travar.",
      color: "from-will-primary to-will-p-light",
    },
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "Carregamento Instantâneo", // Mudou de "Alta Performance"
      description:
        "Ninguém gosta de esperar. Sites ultrarrápidos que seguram o cliente e melhoram sua nota no Google.",
      color: "from-will-secondary to-yellow-500",
    },
    {
      icon: <MdTrendingUp className="text-3xl" />,
      title: "Focado em Vendas", // Mudou de "Conversão Otimizada"
      description:
        "Botões de WhatsApp estratégicos e layout desenhado para transformar visitantes em pedidos de orçamento.",
      color: "from-will-accent to-green-400",
    },
    {
      icon: <MdSearch className="text-3xl" />,
      title: "Topo do Google em Fortaleza", // AQUI ESTÁ O OURO DO SEO
      description:
        "Não basta ser bonito. Otimizamos seu site para você ser encontrado por clientes da sua região.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <MdSecurity className="text-3xl" />,
      title: "Segurança Total",
      description:
        "Proteção contra invasões e certificado SSL (cadeado verde) incluso para passar confiança ao seu cliente.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: <MdBarChart className="text-3xl" />,
      title: "Google Analytics 4",
      description:
        "Saiba exatamente quantas pessoas de Fortaleza acessaram seu site e de onde elas vieram.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <MdGroup className="text-3xl" />,
      title: "Navegação Intuitiva",
      description:
        "Seu cliente acha o que procura em 3 cliques. Facilidade que gera satisfação e fidelidade.",
      color: "from-teal-500 to-emerald-400",
    },
    {
      icon: <MdCheckCircle className="text-3xl" />,
      title: "Suporte Especializado",
      description:
        "Você cuida do seu negócio, eu cuido do site. Manutenção e atualizações técnicas garantidas.",
      color: "from-will-primary to-pink-500",
    },
  ];

  const keyBenefits = [
    "Sua empresa aberta 24h por dia",
    "Passe mais credibilidade que a concorrência",
    "Receba orçamentos direto no WhatsApp",
    "Pare de depender só do Instagram", // Dor muito comum hoje em dia
    "Site preparado para anúncios (Tráfego Pago)",
    "Integração com Google Maps e Redes Sociais",
    "Design exclusivo (nada de templates prontos)",
    "Investimento único com retorno duradouro",
  ];

  return (
    <div className="container mx-auto relative overflow-hidden bg-will-bg-dark py-24 md:py-34 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Header Section */}
        <SectionTitle
          subtitle="Um site moderno não é apenas uma presença online - é uma ferramenta estratégica que impulsiona 
            seu negócio, constrói confiança e gera resultados tangíveis."
          title="Por que investir em um site profissional?"
          section="vantagens competitivas"
        />

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-primary transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">+80%</div>
            <div className="text-will-light">Credibilidade da marca</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-accent transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">24/7</div>
            <div className="text-will-light">Vendas e contatos</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-secondary transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">-40%</div>
            <div className="text-will-light">Custos de marketing</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-p-light transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">5x</div>
            <div className="text-will-light">Mais conversões</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon with gradient */}
              <div
                className={`inline-flex p-3 rounded-lg bg-linear-to-br ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{benefit.icon}</div>
              </div>

              <h3 className="text-xl font-bold font-montserrat mb-3 text-white group-hover:text-will-light transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-will-text-light">{benefit.description}</p>

              {/* Animated underline on hover
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-will-primary to-will-accent group-hover:w-full transition-all duration-500"></div> */}
            </div>
          ))}
        </div>

        {/* Key Benefits List */}
        <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold font-montserrat mb-8 text-center">
            Benefícios estratégicos para seu negócio:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="shrink-0 mt-1">
                  <MdCheckCircle className="text-will-accent group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-will-light group-hover:text-white transition-colors duration-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
