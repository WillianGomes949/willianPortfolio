// src/components/layout/Hero.tsx
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"; // Para os ícones
import MyButton from "@/components/UI/MyButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-5xl md:text-1xl lg:text-7xl  font-bold text-center mt-8 mb-8 bg-size-[200%_200%] animate-gradient-flow bg-linear-to-r from-will-primary via-will-p-light to-will-accent bg-clip-text text-transparent flex flex-col items-center justify-center md:flex-row gap-2">
        <div>
          <p className="text-white">
            Willian<span className="text-will-p-light p-0 m-0">.{""}</span>
          </p>
        </div>
        <p>Desenvolvedor Fullstack</p>
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        Desenvolvedor Fullstack com paixão por criar experiências web incríveis.
        Dominando HTML5, CSS3, JavaScript (TypeScript), React, Next.js, Tailwind
        CSS, AWS, WordPress e Photoshop.
      </p>
      <div className="flex flex-col gap-4 w-full md:flex-row items-center justify-center mb-8">
       
        <MyButton variant="primary" href="#projects">
          Ver Projetos
        </MyButton>
        <MyButton variant="secondary" href="#contact">
          Entrar em Contato
        </MyButton>
      </div>
      <div className="flex space-x-6 text-3xl">
        <a
          href="https://wa.me/5585988954195?text=Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os..."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime-500 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/williangomes949"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-will-primary transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/williangomes949"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-will-primary transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
