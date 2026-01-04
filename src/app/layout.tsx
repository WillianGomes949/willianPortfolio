import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { Boldonse } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BotoesInf from "@/components/UI/BotoesInf";
import ScrollProgress from "@/components/UI/ScrollProgress";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Verifique se esta fonte está correta
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
    default: "Willian Gomes - Desenvolvedor FullStack",
    template: "%s | Willian Gomes", // Permite títulos dinâmicos em outras páginas
  },
  
  description: "Desenvolvedor FullStack especializado em Wordpress, React, TypeScript e soluções web de alta performance. Transforme suas ideias em realidade digital.",
  
  keywords: [
    "contratar",
    "Desenvolvedor Web", 
    "FullStack", 
    "Front-end", 
    "Back-end", 
    "Next.js", 
    "React", 
    "TypeScript", 
    "Tailwind CSS", 
    "Fortaleza", 
    "Ceará", 
    "Programador",
    "wordpress",
    "criar site em wordpress"
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
    title: "Willian Gomes - Desenvolvedor FullStack",
    description: "Criação de sites modernos, e-commerce e aplicações web. Confira meu portfólio.",
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
    title: "Willian Gomes - Desenvolvedor FullStack",
    description: "Desenvolvedor FullStack especializado em Next.js e React.",
    images: ["/og-image.png"], // Mesma imagem
    // creator: "@seu_usuario", // Adicione se tiver twitter
  },

  icons: {
    icon: "/favicon.ico", // Certifique-se de ter um favicon
    // apple: "/apple-touch-icon.png", // Opcional: ícone para iPhone
  },

  manifest: "/manifest.json",
  
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${boldonse.variable} antialiased`}
      >
        <Header />
        <ScrollProgress />
        {children}
        <Footer />
        <BotoesInf />
      </body>
    </html>
  );
}