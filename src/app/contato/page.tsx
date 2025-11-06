import React from 'react';
import { Metadata } from 'next';
import Contact from '@/components/layout/Contact'; // 1. Importe o componente que já criamos

// 2. Metadados para SEO e para a aba do navegador
export const metadata: Metadata = {
  title: 'Contato | [Seu Nome] - Desenvolvedor Fullstack',
  description:
    'Entre em contato com [Seu Nome] para discutir projetos, oportunidades ou colaborações. Envie uma mensagem pelo formulário ou conecte-se pelas redes sociais.',
};

/**
 * Página dedicada para Contato.
 * Ela simplesmente renderiza o componente <Contact /> que
 * já contém o título, informações e o formulário.
 */
const ContatoPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 3. Renderize o componente aqui */}
      <Contact />
    </main>
  );
};

export default ContatoPage;