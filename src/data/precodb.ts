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
    landingPageStart: "R$ 600",
    institutionalStart: "R$ 1.200",
    ecommerceStart: "R$ 1.500",
  },
  mainServices: [
    {
      title: "Landing Page",
      description: "WordPress ou React - escolha conforme a necessidade.",
      items: [
        { label: "Simples:", price: "R$ 600 - R$ 850" },
        { label: "Profissional:", price: "R$ 900 - R$ 1.300" },
        { label: "Premium:", price: "R$ 1.400 - R$ 1.900" },
      ],
    },
    {
      title: "Site Institucional (WordPress)",
      description: "Até 5 páginas (Home, Sobre, Serviços, Contato, Blog).",
      items: [
        { label: "Básico:", price: "R$ 1.200 - R$ 1.700" },
        { label: "Profissional:", price: "R$ 1.800 - R$ 2.400" },
        { label: "Premium:", price: "R$ 2.500 - R$ 3.200" },
      ],
    },
    {
      title: "Páginas Extras (por página)",
      items: [
        { label: "WordPress:", price: "R$ 120 - R$ 200" },
        { label: "React:", price: "R$ 160 - R$ 250" },
      ],
      footerNote: "Valores dependem de conteúdo e layout.",
    },
  ] as ServiceCard[],

  technicalServices: [
    {
      title: "SEO / Performance / Otimização",
      items: [
        { label: "Otimização de velocidade:", price: "R$ 200 - R$ 350" },
        { label: "SEO inicial:", price: "R$ 250 - R$ 450" },
      ],
    },
    {
      title: "Banco de Dados ( MySQL / AWS / Sanity)",
      description: "Modelagem e integração de conteúdo.",
      items: [
        { label: "Estrutura inicial simples:", price: "R$ 350 - R$ 550" },
        { label: "Estrutura profissional:", price: "R$ 600 - R$ 1.000" },
        { label: "Integração completa (React):", price: "R$ 900 - R$ 1.500" },
      ],
    },
  ] as ServiceCard[],

  contentServices: [
    {
      title: "Blog (post com SEO)",
      description: "Pesquisa, SEO on-page e imagens base.",
      items: [
        { label: "Unidade:", price: "R$ 45 - R$ 70" },
        { label: "PACOTE 4/mês:", price: "R$ 160 - R$ 250" },
        { label: "PACOTE 8/mês:", price: "R$ 320 - R$ 480" },
        { label: "PACOTE 12/mês:", price: "R$ 450 - R$ 680" },
      ],
    },
    {
      title: "Instagram - Posts estáticos",
      items: [
        { label: "Unidade:", price: "R$ 25 - R$ 40" },
        { label: "PACOTE 10:", price: "R$ 180 - R$ 300" },
        { label: "PACOTE 20:", price: "R$ 300 - R$ 500" },
      ],
    },
    {
      title: "Carrossel / Reels",
      items: [
        { label: "Carrossel (8 - 10 slides):", price: "R$ 60 - R$ 90" },
        { label: "Reels (roteiro + edição simples):", price: "R$ 60 - R$ 100" },
      ],
    },
  ] as ServiceCard[],

  maintenancePlans: [
    {
      title: "Básico",
      price: "R$ 70 - R$ 120 / mês",
      description: "Atualizações, backups e monitoramento.",
      isRecommended: false,
    },
    {
      title: "Intermediário",
      price: "R$ 120 - R$ 200 / mês",
      description: "Inclui pequenas edições e suporte.",
      isRecommended: true,
    },
    {
      title: "Premium",
      price: "R$ 250 - R$ 350 / mês",
      description: "Suporte estendido e prioridade.",
      isRecommended: false,
    },
  ] as MaintenancePlan[],
  ecommerceServices: [
    {
      title: "Configuração Nuvemshop / Shopify",
      description:
        "Ideal para quem quer facilidade e pagar mensalidade para a plataforma.",
      items: [
        {
          label: "Setup Inicial (Design + Config):",
          price: "R$ 800 - R$ 1.200",
        },
        { label: "Cadastro de até 20 produtos:", price: "Incluso" },
        { label: "Integração Correios/Pagamento:", price: "Incluso" },
      ],
      footerNote: "O cliente paga a mensalidade da plataforma à parte.",
    },
    {
      title: "Loja Virtual WooCommerce (WordPress)",
      description:
        "Sem mensalidade de plataforma. Controle total do seu negócio.",
      isPopular: true,
      items: [
        {
          label: "Loja Padrão (Tema Otimizado):",
          price: "R$ 1.500 - R$ 2.200",
        },
        { label: "Loja Personalizada (Pro):", price: "R$ 2.500 - R$ 3.500" },
        { label: "Treinamento de uso:", price: "Incluso" },
      ],
      footerNote: "Requer hospedagem VPS ou Turbo (aprox R$ 40/mês).",
    },
    {
      title: "Adicionais E-commerce",
      items: [
        {
          label: "Cadastro de produtos (pacote 50):",
          price: "R$ 150 - R$ 250",
        },
        { label: "Integração Bling/Tiny (ERP):", price: "R$ 300 - R$ 500" },
      ],
    },
  ] as ServiceCard[],
  paymentInfo: {
    pixDiscount: "5% de desconto",
    creditCard: {
      installments: "Até 12x no cartão",
      flags: ["Mastercard", "Visa", "Elo", "Hipercard"],
      terms: "Parcelamento com taxas da operadora.",
    },
    methods: [
      { name: "PIX", icon: "pix" }, // Vamos usar texto ou ícone depois
      { name: "Cartão de Crédito", icon: "card" },
      { name: "Boleto", icon: "boleto" },
    ],
  },
};
