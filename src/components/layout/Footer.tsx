import { meusDados, socialLinks } from "@/data/db";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 py-24 md:py-34">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Copyright e Informações */}
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-xl font-bold text-gray-100 mr-2">
                {meusDados.nome}<span className="text-will-primary font-extralight"> | {meusDados.sobrenome}</span>
              </span>
            </div>
            <p className="text-sm mb-2">
              &copy; {currentYear} Willian Gomes. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start">
              Feito com
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-will-primary transition-colors mx-1 font-medium"
              >
                Next.js
              </a>
              e
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-will-primary transition-colors mx-1 font-medium"
              >
                Tailwind CSS
              </a>
            </p>
          </div>

          {/* Links Sociais */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`bg-gray-800 p-3 rounded-xl text-gray-400 transition-all duration-300 hover:bg-will-primary/20 hover:scale-110 ${social.color}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Linha Divider */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Desenvolvido com foco em performance, acessibilidade e experiência do usuário
          </p>
        </div>
      </div>
    </footer>
  );
}