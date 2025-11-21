import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Tajawal, Google_Sans_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopButton from "@/components/UI/TopButton";
import { SimpleWhatsAppButton } from "@/components/UI/WhatsAppButton";


export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
  adjustFontFallback: true,
  style: 'normal',
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],   
})

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  fallback: ['sans-serif'],
})


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
        className={`${zenKakuGothicNew.variable} ${tajawal.variable} ${googleSansCode.variable} 
         font-sansantialiased`}
      >
        <Header />
        {children}
        <Footer />
        <TopButton />
        <SimpleWhatsAppButton position='bottom-left'/>
      </body>
    </html>
  );
}
