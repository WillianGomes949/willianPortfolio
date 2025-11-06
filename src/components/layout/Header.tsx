'use client'; // Necessário para o estado do menu mobile (useState)

import React, { useState } from 'react';
import Link from 'next/link';
// Importando ícones (lembre-se de instalar: npm install react-icons)
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
    // { name: 'Blog', href: '/blog' }, // Exemplo se tivesse uma página de blog
  ];

  // Função para fechar o menu ao clicar em um link (útil no mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/80 text-white shadow-lg backdrop-blur-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* Logo/Nome */}
        <Link href="/" className="text-2xl font-bold">
          Willian
          <span className="text-red-500">.</span>
        </Link>

        {/* Navegação Desktop */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-gray-300 transition-colors hover:text-red-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Ícone do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            className="text-3xl text-gray-300 transition-colors hover:text-red-500"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Overlay do Menu Mobile */}
      <div
        className={`fixed inset-0 z-50 transform bg-gray-900 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Botão de Fechar */}
        <div className="flex justify-end px-4 py-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="text-4xl text-gray-300 transition-colors hover:text-red-500"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Links do Menu Mobile */}
        <div className="flex h-full flex-col items-center justify-center space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick} // Fecha o menu ao clicar
              className="text-3xl font-semibold text-white transition-colors hover:text-red-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;