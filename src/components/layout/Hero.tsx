// src/components/layout/Hero.tsx
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Para os ícones
import MyButton from "@/components/UI/MyButton";
import { meusDados } from "@/data/db";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center px-6 py-24 md:py-34 group relative overflow-hidden gap-4 md:gap-8 mx-auto">
      {/* Badge de Destaque */}
      <div className="mb-6 mt-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent text-sm font-medium animate-fade-in-up tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-will-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-will-accent"></span>
          </span>
          Disponível para novos projetos
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl mt-6 mb-6 bg-size-[200%_200%] animate-gradient-flow bg-linear-to-r from-will-primary via-will-p-light to-will-accent bg-clip-text text-transparent flex flex-col items-center justify-center md:flex-row gap-2 leading-relaxed font-bold text-center max-w-6xl font-boldonse">
        <div>
          <div>
            <span className="text-gray-100">Desenvolvimento,</span>
          </div>
          <div>
            <span>Estratégia & Performance</span>
          </div>
        </div>
      </h1>

      <p className="text-lg text-center mb-8 text-will-light max-w-4xl mx-auto leading-relaxed">
        Do WordPress a aplicações React.js, entrego a tecnologia para o seu
        negócio crescer e se destacar.
      </p>

      <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-center mb-8">
        <MyButton variant="primary" href="#projects">
          Conhecer Portfólio
        </MyButton>
        <MyButton
          variant="secondary"
          href="https://wa.me/5585988954195?text=Olá Willian! Vi seu site e quero impulsionar meu negócio."
          target="_blank"
        >
          Iniciar Projeto
        </MyButton>
      </div>

      {/* Redes Sociais */}
      <div className="text-center  transition-opacity duration-300">
        <div className="flex space-x-6 text-2xl">
          <a
            href={meusDados.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 hover:text-lime-300 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={meusDados.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-light/10 text-will-light hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110 opacity-40 hover:opacity-100"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={meusDados.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-light/10 text-will-light hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110 opacity-40 hover:opacity-100"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={meusDados.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-light/10 text-will-light hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110 opacity-40 hover:opacity-100"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
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
    </section>
  );
}
