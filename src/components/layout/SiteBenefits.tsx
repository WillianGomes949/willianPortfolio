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
      title: "Design Responsivo",
      description:
        "Seu site perfeito em qualquer dispositivo - celular, tablet ou desktop, garantindo a melhor experiência para seus clientes.",
      color: "from-will-primary to-will-p-light",
    },
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "Alta Performance",
      description:
        "Carregamento ultrarrápido que reduz a taxa de rejeição e aumenta a conversão, otimizado para SEO.",
      color: "from-will-secondary to-yellow-500",
    },
    {
      icon: <MdTrendingUp className="text-3xl" />,
      title: "Conversão Otimizada",
      description:
        "Layouts pensados para guiar o visitante até a ação desejada, aumentando vendas e contatos.",
      color: "from-will-accent to-green-400",
    },
    {
      icon: <MdSearch className="text-3xl" />,
      title: "SEO Avançado",
      description:
        "Estrutura técnica otimizada para ranqueamento no Google, atraindo clientes qualificados organicamente.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <MdSecurity className="text-3xl" />,
      title: "Segurança Robustecida",
      description:
        "Proteção contra ameaças, SSL, backups automáticos e conformidade com LGPD para tranquilidade total.",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: <MdBarChart className="text-3xl" />,
      title: "Análises de Dados",
      description:
        "Integração com Google Analytics para entender seu público e tomar decisões baseadas em dados.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <MdGroup className="text-3xl" />,
      title: "Experiência do Usuário",
      description:
        "Interface intuitiva que encanta visitantes e aumenta o tempo de permanência no site.",
      color: "from-teal-500 to-emerald-400",
    },
    {
      icon: <MdCheckCircle className="text-3xl" />,
      title: "Manutenção Contínua",
      description:
        "Suporte técnico, atualizações de segurança e melhorias para seu site sempre atualizado.",
      color: "from-will-primary to-pink-500",
    },
  ];

  const keyBenefits = [
    "Aumento de credibilidade e profissionalismo",
    "Presença digital 24/7 para seu negócio",
    "Atração de novos clientes qualificados",
    "Redução de custos com marketing tradicional",
    "Escalabilidade para crescimento futuro",
    "Integração com redes sociais e ferramentas",
    "Design único que diferencia sua marca",
    "Retorno mensurável sobre o investimento",
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
            <div className="text-4xl font-bold font-montserrat mb-2">
              +80%
            </div>
            <div className="text-will-light">Credibilidade da marca</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-accent transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">
              24/7
            </div>
            <div className="text-will-light">Vendas e contatos</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-secondary transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">
              -40%
            </div>
            <div className="text-will-light">Custos de marketing</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-will-p-light transition-all duration-300">
            <div className="text-4xl font-bold font-montserrat mb-2">
              5x
            </div>
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
