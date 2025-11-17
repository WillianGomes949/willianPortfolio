"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/5585988954195?text=Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os...",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: <FaWhatsapp size={18} />,
    },
    { name: "Sobre", href: "/#about" },
    { name: "Projetos", href: "/#projects" },
    { name: "Contato", href: "/#contact" },
    { name: "Preço", href: "/preco" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-100 ${
        isScrolled
          ? "bg-gray-900/20 backdrop-blur-lg shadow-sm py-2 border-b-gray-700 border-b-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold transition-colors ${
            isScrolled ? "text-gray-100" : "text-gray-100"
          }`}
        >
          Willian
          <span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                isScrolled
                  ? link.name === "WhatsApp"
                    ? "text-gray-100 hover:bg-lime-50 hover:text-lime-600"
                    : "text-gray-100 hover:bg-red-50 hover:text-red-600"
                  : link.name === "WhatsApp"
                  ? "text-gray-100/90 hover:bg-lime-500/20 hover:text-lime-300"
                  : "text-gray-100/90 hover:bg-red-500/20 hover:text-red-300"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
          className={`rounded-lg p-2 transition-colors md:hidden ${
            isScrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-gray-100 hover:bg-gray-100/10"
          }`}
        >
          <IoMdMenu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div
            ref={menuRef}
            className="absolute right-4 top-4 w-64 rounded-2xl bg-gray-100/95 p-6 shadow-xl backdrop-blur-md"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <HiOutlineX size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                    link.name === "WhatsApp"
                      ? "text-gray-700 hover:bg-lime-50 hover:text-lime-600"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}