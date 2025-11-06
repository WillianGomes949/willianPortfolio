import React from 'react';
import { Metadata } from 'next';
import Projects from '@/components/layout/Projects'; // 1. Importe o componente que já criamos

// 2. Metadados para SEO e para a aba do navegador
export const metadata: Metadata = {
  title: 'Projetos | [Seu Nome] - Desenvolvedor Fullstack',
  description:
    'Explore a galeria completa de projetos desenvolvidos por [Seu Nome], incluindo aplicações web com React, Next.js, AWS e mais.',
};

/**
 * Página dedicada a listar TODOS os projetos.
 * Ela simplesmente renderiza o componente <Projects /> que
 * já contém o título, os filtros e o grid de projetos.
 */
const ProjetosPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 3. Renderize o componente aqui */}
      <Projects />
    </main>
  );
};

export default ProjetosPage;