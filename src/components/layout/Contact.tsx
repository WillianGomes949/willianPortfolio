"use client";

import { useState, useEffect } from "react";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MyButton from "../UI/MyButton";
import emailjs from "emailjs-com";
import { meusDados } from "@/lib/db";
import useLocalStorage from "@/hook/useLocalStorage";
import { SectionTitle } from "../UI/SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useLocalStorage("contactForm", {
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (statusMessage.type === "error") {
      setStatusMessage({ type: "", message: "" });
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (statusMessage.type === "success") {
      const timer = setTimeout(() => {
        setStatusMessage({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage({ type: "", message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage({
        type: "error",
        message: "Erro de configuração. Contate um administrador.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "williangomes949@gmail.com",
          message: formData.message,
          date: new Date().toLocaleDateString("pt-BR"),
        },
        publicKey
      );

      console.log("Email enviado com sucesso:", result);
      setStatusMessage({
        type: "success",
        message: "Mensagem enviada com sucesso! Retornarei em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatusMessage({
        type: "error",
        message:
          "Erro ao enviar mensagem. Tente novamente ou use outro método.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
            section="Contato"
            subtitle="Pronto para ter um site que traz resultados? Me mande uma mensagem. Entre em contato e vamos conversar sobre seu projeto."
            title="Vamos Criar Algo Incrível Juntos"
            className="mb-16"
            />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8 px-1">
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center">
                <span className="w-6 h-0.5 bg-will-primary mr-3"></span>
                Vamos Conversar
              </h3>
              <p className="text-gray-300 mb-8">
                Estou disponível para novos projetos, oportunidades de
                colaboração.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer ">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-will-primary/20 hover:scale-110 transition-all duration-300">
                  <FaWhatsapp className="text-gray-100 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-100 mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={`${meusDados.whatsappUrl}`}
                    className="text-gray-300 hover:text-lime-400 transition-colors block"
                  >
                    {meusDados.phoneNumber}
                  </a>
                  <span className="text-sm text-gray-500">Resposta rápida</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer ">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-will-primary/20 hover:scale-110 transition-all duration-300">
                  <FaEnvelope className="text-gray-100 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-100 mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${meusDados.email}`}
                    className="text-gray-300 hover:text-lime-400 transition-colors block"
                  >
                    {meusDados.email}
                  </a>
                  <span className="text-sm text-gray-500">Resposta em 24h</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer ">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-will-primary/20 hover:scale-110 transition-all duration-300">
                  <FaMapMarkerAlt className="text-gray-100 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-100 mb-1">
                    Localização
                  </h4>
                  <p className="text-gray-300">{meusDados.localizacao}</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-100 mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href={`${meusDados.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-xl hover:bg-will-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl text-gray-300 hover:text-will-primary" />
                </a>
                <a
                  href={`${meusDados.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-xl hover:bg-will-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl text-gray-300 hover:text-will-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Conte-me sobre seu projeto, ideia ou oportunidade..."
              />
            </div>
            
              <div className="flex flex-col md:flex-row w-full justify-end items-center gap-4">
                <MyButton
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  aria-label="Enviar Mensagem"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-gray-100 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </MyButton>
              
           

              {statusMessage.message && (
                <div
                  className={`p-4 rounded-xl border ${
                    statusMessage.type === "success"
                      ? "bg-lime-500/10 border-lime-500/20 text-lime-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  } transition-all duration-300`}
                  role="alert"
                >
                  {statusMessage.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
