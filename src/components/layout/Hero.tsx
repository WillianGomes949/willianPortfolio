// src/components/layout/Hero.tsx
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Para os ícones
import MyButton from "@/components/UI/MyButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-24  group relative overflow-hidden">
      {/* Badge de Destaque */}
      <div className="mb-6 mt-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent text-sm font-medium">
          Disponível para novos projetos
        </span>
      </div>
      <h1 className="text-5xl md:text-1xl lg:text-7xl  mt-6 mb-6 bg-size-[200%_200%] animate-gradient-flow bg-linear-to-r from-will-primary via-will-p-light to-will-accent bg-clip-text text-transparent flex flex-col items-center justify-center md:flex-row gap-2 leading-relaxed font-bold text-center">
        <p className="text-gray-100">
          Willian<span className="text-will-p-light p-0 m-0">. </span>
        </p>{" "}
        <p>Desenvolvedor Web</p>
      </h1>
      <p className="text-xl text-center mb-8 leading-relaxedtext-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Eu ajudo sua empresa a ter uma presença digital profissional. Crio desde
        sites gerenciáveis em WordPress (ideais para clínicas, escritórios e
        lojas) até aplicações web de alta performance com React.
      </p>
      <div className="flex flex-col gap-4 w-full md:flex-row items-center justify-center mb-8">
        <MyButton variant="primary" href="#projects">
          Ver Projetos
        </MyButton>
        <MyButton variant="secondary" href="#contact">
          Entrar em Contato
        </MyButton>
      </div>
      {/* Redes Sociais */}
      <div className="text-center">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://wa.me/5585988954195?text=Olá! Gostaria de conversar sobre um projeto..."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 hover:text-lime-300 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/williangomes949"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-primary/10 text-will-primary hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/williangomes949"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-primary/10 text-will-primary hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
