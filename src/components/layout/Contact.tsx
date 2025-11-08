"use client"; // Necessário para o formulário

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import MyButton from "../UI/MyButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de e-mail como
    // EmailJS, Formspree, ou um backend seu.
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada (simulação)!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:p-14 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Vamos Conversar
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade
          para entrar em contato através do formulário ou pelas minhas redes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaEnvelope className="text-lime-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <a
                  href="mailto:williangomes949@gmail.com"
                  className="text-gray-300 hover:text-lime-500 transition-colors"
                >
                  williangomes949@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaLinkedin className="text-lime-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/williangomes949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-lime-500 transition-colors"
                >
                  linkedin.com/in/williangomes949
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaGithub className="text-lime-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">GitHub</h4>
                <a
                  href="https://github.com/williangomes949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-lime-500 transition-colors"
                >
                  github.com/williangomes949
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-will-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-will-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-will-primary"
              />
            </div>
            <MyButton
              type="submit"
              variant="primary"
              className="w-full"
            >
              Enviar Mensagem
            </MyButton>
          </form>
        </div>
      </div>
    </section>
  );
}
