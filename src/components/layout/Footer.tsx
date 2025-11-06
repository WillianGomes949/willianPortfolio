import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/williangomes949", // ATUALIZE
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/williangomes949", // ATUALIZE
      icon: FaLinkedin,
    }
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Copyright */}
          <div className="mb-6 text-center text-sm md:mb-0 md:text-left">
            <p>&copy; {currentYear} Willian Gomes. Todos os direitos reservados</p>
            <p className="mt-1">
              Construído com{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500"
              >
                Next.js
              </a>{" "}
              e{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500"
              >
                Tailwind CSS
              </a>
              .
            </p>
          </div>

          {/* Links Sociais */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-3xl transition-colors hover:text-red-500"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
