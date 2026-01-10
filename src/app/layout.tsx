import type { Metadata, Viewport } from "next";
import { Montserrat, Boldonse } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BotoesInf from "@/components/UI/BotoesInf";
import ScrollProgress from "@/components/UI/ScrollProgress";
import JsonLd from "./JsonLd";
import { GoogleTagManager } from "@next/third-parties/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// CONFIGURAÇÃO DE VIEWPORT (Separado do Metadata no Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#101828",
  initialScale: 1,
};

// CONFIGURAÇÃO SEO 10/10
export const metadata: Metadata = {
  // Define a URL base para resolver caminhos de imagens (CRUCIAL para o WhatsApp funcionar)
  metadataBase: new URL("https://www.williangomesdev.com"),

  title: {
    default: "Willian Gomes | Desenvolvedor Web em Fortaleza (FullStack & WP)",
    template: "%s | Willian Gomes Dev",
  },

  description:
    "Criação de sites profissionais em Fortaleza e Ceará. Especialista em Next.js, React, WordPress e Lojas Virtuais. Solicite um orçamento para seu projeto web.",

  keywords: [
    // ========== SUA MARCA (Essencial) ==========
    "Willian Gomes",
    "Willian Gomes Dev",
    "Gordo Dev",
    "Willian Gomes Fortaleza",

    // ========== INTENÇÃO DE COMPRA FORTE (Cliente pronto) ==========
    "orçamento criação de site",
    "preço site profissional",
    "quanto custa fazer um site",
    "contratar desenvolvedor de sites",
    "desenvolvedor web freelance fortaleza",
    "fazer site urgente",

    // ========== FOQUE GEOGRÁFICO (Sua Vantagem) ==========
    "desenvolvedor web fortaleza",
    "criação de sites em fortaleza",
    "web designer fortaleza",
    "agência de sites fortaleza",
    "desenvolvedor web ceará",
    "criação de sites em ceará",

    // --- Por bairros/regiões (alto valor) ---
    "desenvolvedor web aldeota",
    "criação de site meireles",
    "agência digital montese",
    "desenvolvedor de sites benfica",

    // ========== NICHOS ESPECÍFICOS (Dinheiro Rápido) ==========
    "site para advogados fortaleza",
    "site para cabeleireiro fortaleza",
    "site para dentista fortaleza",
    "site para farmácia fortaleza",
    "site para salão de beleza",
    "site para clínica médica",
    "site para restaurante fortaleza",
    "site para imobiliária ceará",
    "site para academia fortaleza",
    "site para pequenas empresas fortaleza",
    "criação de site profissional autônomo",

    // ========== SOLUÇÃO DE PROBLEMAS (Cliente Sofrendo) ==========
    "meu site não aparece no google",
    "reformular site antigo",
    "site desatualizado",
    "site não funciona no celular",
    "site muito lento",
    "preciso atualizar meu site",

    // ========== TIPO DE PROJETO (O que o cliente pede) ==========
    "criação de loja virtual fortaleza",
    "loja virtual woocommerce",
    "landing page alta conversão",
    "site institucional",
    "site one page",
    "blog profissional",

    // ========== TECNOLOGIAS (Como o cliente busca) ==========
    "site em wordpress",
    "site responsivo",
    "site que aparece no google",
    "site otimizado para busca",
    "site rápido",
    "suporte para site wordpress",

    // ========== DIFERENCIAIS (O que te separa) ==========
    "desenvolvedor dedicado fortaleza",
    "desenvolvedor web próximo a mim",
    "criação de site com suporte",
    "site com manutenção mensal",
    "desenvolvedor wordpress fortaleza",
  ],

  authors: [{ name: "Willian Gomes", url: "https://www.williangomesdev.com" }],
  creator: "Willian Gomes",

  // Configuração para Robôs de busca (Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.williangomesdev.com",
    title: "Willian Gomes - Desenvolvedor Web",
    description:
      "Criação de sites modernos, e-commerce e aplicações web. Confira meu portfólio.",
    siteName: "Willian Gomes Portfolio",
    images: [
      {
        url: "/og-image.webp", // A imagem que deve estar na pasta public
        width: 1200,
        height: 630,
        alt: "Portfolio de Willian Gomes - Desenvolvimento Web",
      },
    ],
  },

  // Twitter Card (X)
  twitter: {
    card: "summary_large_image",
    title: "Willian Gomes - Desenvolvedor Web",
    description: "Desenvolvedor Web especializado em Next.js e React.",
    images: ["/og-image.png"], // Mesma imagem
    // creator: "@seu_usuario", // Adicione se tiver twitter
  },

  icons: {
    icon: "/favicon.ico", // Certifique-se de ter um favicon
    // apple: "/apple-touch-icon.png", // Opcional: ícone para iPhone
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-P2NWJKVZ" />
      <body
        className={`${montserrat.variable} ${boldonse.variable} antialiased`}
      >
        <Header />
        <ScrollProgress />
        {children}
        <Footer />
        <BotoesInf />
        <JsonLd />
      </body>
    </html>
  );
}
