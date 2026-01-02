// src/data/precodb.ts

export interface PriceItem {
  label: string;
  price: string;
}

export interface ServiceCard {
  title: string;
  description?: string;
  items: PriceItem[];
  footerNote?: string;
  isPopular?: boolean;
}

export interface MaintenancePlan {
  title: string;
  price: string;
  description: string;
  isRecommended?: boolean;
}

export const pricingData = {
  highlights: {
    landingPageStart: "R$ 800",
    institutionalStart: "R$ 1.500",
    ecommerceStart: "R$ 2.500",
  },
  mainServices: [
    {
      title: "Landing Page (Alta Conversão)",
      description: "Foco em vendas. WordPress (Elementor) ou React (Performance).",
      items: [
        { label: "Start (Template Otimizado):", price: "R$ 800 - R$ 1.200" },
        { label: "Pro (Design Exclusivo):", price: "R$ 1.500 - R$ 2.200" },
        { label: "LP React (Alta Performance):", price: "R$ 2.500 - R$ 3.500" },
      ],
    },
    {
      title: "Site Institucional",
      description: "Até 6 páginas. Ideal para empresas e profissionais liberais.",
      items: [
        { label: "Essencial (WordPress):", price: "R$ 1.500 - R$ 2.200" },
        { label: "Profissional (Design Custom):", price: "R$ 2.500 - R$ 3.500" },
        { label: "Premium (React/Next.js):", price: "R$ 4.000+" },
      ],
    },
    {
      title: "Adicionais de Desenvolvimento",
      items: [
        { label: "Página Extra (WordPress):", price: "R$ 200 - R$ 350" },
        { label: "Página Extra (React):", price: "R$ 350 - R$ 500" },
        { label: "Integração API Externa:", price: "Sob Consulta" },
      ],
      footerNote: "Valores variam conforme a complexidade da interface.",
    },
  ] as ServiceCard[],

  technicalServices: [
    {
      title: "SEO & Performance Técnica",
      items: [
        { label: "Otimização Core Web Vitals:", price: "R$ 400 - R$ 600" },
        { label: "Setup SEO Técnico (GSC/GA4):", price: "R$ 500 - R$ 800" },
      ],
    },
    // {
    //   title: "Banco de Dados & Backend",
    //   description: "Arquitetura de dados para aplicações escaláveis.",
    //   items: [
    //     { label: "Modelagem DB Simples:", price: "R$ 600 - R$ 900" },
    //     { label: "API / Integração Backend:", price: "R$ 1.200+" },
    //     { label: "Dashboard Administrativo:", price: "Sob Consulta" },
    //   ],
    // },
  ] as ServiceCard[],

  contentServices: [
    {
      title: "Gestão de Blog (SEO)",
      description: "Conteúdo estratégico para ranqueamento no Google.",
      items: [
        { label: "Artigo Otimizado (Un.):", price: "R$ 80 - R$ 120" },
        { label: "Pacote 4 Artigos/mês:", price: "R$ 300 - R$ 450" },
      ],
    },
    {
      title: "Social Media (Design)",
      description: "Artes profissionais. Não inclui gestão de comunidade.",
      items: [
        { label: "Arte Avulsa:", price: "R$ 50 - R$ 80" },
        { label: "Pacote 10 Artes:", price: "R$ 450 - R$ 600" },
        { label: "Pacote 20 Artes:", price: "R$ 800 - R$ 1.100" },
      ],
    },
    // {
    //   title: "Vídeos Curtos (Reels/TikTok)",
    //   description:"Edição dinâmica com legendas e cortes.",
    //   items: [
    //     { label: "Edição Simples (Un.):", price: "R$ 80 - R$ 120" },
    //     { label: "Edição Pro (Motion):", price: "R$ 150 - R$ 300" },        
    //     { label: "Pacote 4 Reels:", price: "R$ 450 - R$ 600" },
    //   ],
    // },
  ] as ServiceCard[],

  maintenancePlans: [
    {
      title: "Manutenção Técnica",
      price: "R$ 129 / mês",
      description: "Backups semanais, update de plugins e segurança. Sem suporte via WhatsApp.",
      isRecommended: false,
    },
    {
      title: "Empresarial",
      price: "R$ 249 / mês",
      description: "Tudo do anterior + 2h de ajustes técnicos/mês e suporte prioritário.",
      isRecommended: true,
    },
    {
      title: "E-commerce/Vip",
      price: "R$ 490 / mês",
      description: "Monitoramento 24/7, gestão de servidor VPS e suporte imediato.",
      isRecommended: false,
    },
  ] as MaintenancePlan[],

  ecommerceServices: [
    {
      title: "Setup Loja Rápida (Nuvemshop/Shopify)",
      description:
        "Configuração profissional em plataformas alugadas.",
      items: [
        {
          label: "Setup Completo (Design + Pagamentos):",
          price: "R$ 1.200 - R$ 1.800",
        },
        { label: "Cadastro de produtos (até 20):", price: "Incluso" },
      ],
      footerNote: "Cliente paga mensalidade da plataforma à parte.",
    },
    {
      title: "E-commerce Proprietário (WooCommerce)",
      description:
        "Loja profissional sem mensalidades de plataforma. Liberdade total.",
      isPopular: true,
      items: [
        {
          label: "Loja Essencial:",
          price: "R$ 2.500 - R$ 3.500",
        },
        { label: "Loja Alta Performance (Pro):", price: "R$ 4.000 - R$ 6.000" },
        { label: "Marketplace / Dropshipping:", price: "Sob Consulta" },
      ],
      footerNote: "Recomendado servidor VPS (aprox R$ 60/mês).",
    },
    {
      title: "Adicionais E-commerce",
      items: [
        {
          label: "Cadastro em massa (50 un.):",
          price: "R$ 300 - R$ 500",
        },
        { label: "Integração ERP (Bling/Tiny):", price: "R$ 600 - R$ 1.200" },
      ],
    },
  ] as ServiceCard[],
  
  paymentInfo: {
    pixDiscount: "5% de desconto à vista",
    creditCard: {
      installments: "Até 12x no cartão",
      flags: ["Mastercard", "Visa", "Elo", "Hipercard"],
      terms: "Parcelamento com taxas da operadora (repasse).",
    },
    methods: [
      { name: "PIX", icon: "pix" },
      { name: "Cartão de Crédito", icon: "card" },
      { name: "Boleto PJ", icon: "boleto" },
    ],
  },
};