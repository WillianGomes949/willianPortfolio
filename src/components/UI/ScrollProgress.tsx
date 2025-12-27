// src/components/ScrollProgress.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula a altura total da página disponível para scroll
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      // Evita divisão por zero se a página for curta
      if (totalHeight > 0) {
        // Calcula a porcentagem
        const scrollPosition = window.scrollY;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        setWidth(scrollPercentage);
      }
    };

    // Adiciona o evento
    window.addEventListener('scroll', handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Container da barra (fixo no topo)
    <div className="fixed bottom-0 left-0 w-full h-1 z-50 bg-transparent">
      {/* A barra colorida que cresce */}
      <div 
        className="h-full bg-will-primary transition-all duration-150 ease-out rounded-4xl animate-gradient-flow bg-linear-to-r from-will-primary via-will-p-light to-will-accent "
        style={{ width: `${width}%` }}
      />
      <style jsx>{`
        /* Gradiente do texto do hero!: */
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-flow {
          animation: gradient-flow 5s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
    
  );
}