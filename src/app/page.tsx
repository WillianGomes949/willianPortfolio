// src/app/page.tsx
"use client";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Projects from "@/components/layout/Projects"; // Vamos criar este
import Contact from "@/components/layout/Contact";

import StackMarquee from "@/components/UI/StackMarquee";
import PriceGrade from "@/components/UI/PriceGrade";

export default function Home() {
  return (
    <main>
      <Hero />
      <StackMarquee />
      <About />
       <StackMarquee />
      <Projects />
      <Contact />
      <PriceGrade/>
    </main>
  );
}
