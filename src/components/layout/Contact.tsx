"use client";

// MODIFICADO: Adicionado useEffect
import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import MyButton from "../UI/MyButton";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // NOVO: Estado para controlar a mensagem de feedback (sucesso ou erro)
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // NOVO: Limpa a mensagem de erro assim que o usuário começa a digitar novamente
    if (statusMessage.type === "error") {
      setStatusMessage({ type: "", message: "" });
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // NOVO: Este efeito limpa a mensagem de SUCESSO após 5 segundos
  useEffect(() => {
    if (statusMessage.type === 'success') {
      const timer = setTimeout(() => {
        setStatusMessage({ type: "", message: "" });
      }, 5000); // 5 segundos
      
      // Limpa o timer se o componente for desmontado
      return () => clearTimeout(timer);
    }
  }, [statusMessage]); // Roda sempre que statusMessage mudar

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // NOVO: Limpa qualquer mensagem de status antiga antes de enviar
    setStatusMessage({ type: "", message: "" });
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Variáveis de ambiente do EmailJS não configuradas');
      // MODIFICADO: Substitui o 'alert' pelo 'setStatusMessage'
      setStatusMessage({ type: "error", message: "Erro de configuração. Contate um administrador." });
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
          to_email: 'williangomes949@gmail.com',
          message: formData.message,
          date: new Date().toLocaleDateString('pt-BR')
        },
        publicKey
      );

      console.log('Email enviado com sucesso:', result);
      // MODIFICADO: Substitui o 'alert' pelo 'setStatusMessage'
      setStatusMessage({ type: "success", message: "Mensagem enviada com sucesso!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      // MODIFICADO: Substitui o 'alert' pelo 'setStatusMessage'
      setStatusMessage({ type: "error", message: "Erro ao enviar mensagem. Tente novamente." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="md:py-24 md:p-14 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Vamos Conversar
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade
          para entrar em contato através do formulário ou pelas minhas redes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informações de Contato (sem alteração) */}
          <div className="flex flex-col gap-8">
            {/* ... (Seu código de ícones de contato aqui) ... */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaWhatsapp className="text-lime-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">WhatsApp</h4>
                <a
                  href="https://wa.me/5585988954195?text=Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os..."
                  className="text-gray-300 hover:text-lime-500 transition-colors"
                >
                  (85) 988954195
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaEnvelope className="text-lime-500 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <a
                  href="mailto:williangomes949949@gmail.com"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <MyButton
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
              aria-label="Enviar Mensagem"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </MyButton>

            {/* NOVO: Bloco de mensagem de status */}
            {statusMessage.message && (
              <p
                className={`mt-4 text-center font-medium ${
                  statusMessage.type === "success"
                    ? "text-lime-500" // Cor de sucesso (do seu tema)
                    : "text-red-500"   // Cor de erro
                }`}
                role="alert" // Importante para acessibilidade
              >
                {statusMessage.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}