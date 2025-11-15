// src/app/page.tsx
'use client';
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Projects from '@/components/layout/Projects'; // Vamos criar este
import Contact from '@/components/layout/Contact';
import SwiperrScroll from '@/components/UI/SwiperScroll';

export default function Home() {
  return (
    <main>
      <Hero />
      <SwiperrScroll/>
      <About />
      <Projects />
      <Contact />

    </main>
  );
}