// src/app/page.tsx
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Projects from '@/components/layout/Projects'; // Vamos criar este
import Contact from '@/components/layout/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}