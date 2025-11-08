// src/components/layout/Hero.tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Para os ícones
import MyButton from '@/components/UI/MyButton';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-5xl md:text-7xl font-bold text-center mt-8 mb-8">
        Willian. <span className="text-will-primary">Desenvolvedor Fullstack</span>
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        Desenvolvedor Fullstack com paixão por criar experiências web incríveis.
        Dominando HTML5, CSS3, JavaScript (TypeScript), React, Next.js, Tailwind CSS, AWS, WordPress e Photoshop.
      </p>
      <div className="flex flex-col gap-4 w-full md:flex-row items-center justify-center mb-8">
        <MyButton variant="primary" className='w-50'><Link href="#projects">Ver Projetos</Link></MyButton>
        <MyButton variant="secondary" className='w-50'><Link href="#contact">Entrar em Contato</Link></MyButton>
      </div>
      <div className="flex space-x-6 text-3xl">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-will-primary transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-will-primary transition-colors">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};