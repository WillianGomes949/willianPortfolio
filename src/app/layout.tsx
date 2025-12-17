import type { Metadata } from "next";
import { Montserrat, Boldonse } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SimpleWhatsAppButton } from "@/components/UI/WhatsAppButton";
import BotoesInf from "@/components/UI/BotoesInf";

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

export const metadata: Metadata = {
  title: "Willian Gomes - Desenvolvedor FullStack",
  description: "Desenvolvendo soluções web inovadoras e de alta qualidade.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${boldonse.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <BotoesInf/>
      </body>
    </html>
  );
}
