// components/ProjectBriefingForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import MyButton from "../UI/MyButton";

export interface BriefingFormData {
  clientName: string;
  companyProfession: string;
  phoneWhatsApp: string;
  email: string;
  address: string;
  businessDescription: string;
  targetAudience: string;
  mainCompetitors: string;
  competitiveAdvantages: string;
  serviceType: string;
  businessObjective: string;
  requiredFeatures: string[];
  providedMaterials: string[];
  references: string[];
  idealLaunchDate: string;
  criticalDates: string;
  additionalNotes: string;
}

export default function ProjectBriefingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<BriefingFormData>({
    clientName: "",
    companyProfession: "",
    phoneWhatsApp: "",
    email: "",
    address: "",
    businessDescription: "",
    targetAudience: "",
    mainCompetitors: "",
    competitiveAdvantages: "",
    serviceType: "",
    businessObjective: "",
    requiredFeatures: [],
    providedMaterials: [],
    references: [""],
    idealLaunchDate: "",
    criticalDates: "",
    additionalNotes: "",
  });

  const serviceTypes = [
    "Landing Page",
    "Site Institucional",
    "Loja Virtual (E-commerce)",
    "Blog/Portal de Conteúdo",
    "Identidade Visual",
    "Outro",
  ];

  const businessObjectives = [
    "Gerar Leads/Contatos",
    "Vender Produtos Online",
    "Aumentar o Reconhecimento da Marca",
    "Divulgar um Lançamento/Evento",
    "Outro",
  ];

  const features = [
    "Formulário de Contato",
    "Integração com WhatsApp",
    "Seção de Blog/Notícias",
    "Área Restrita para Clientes",
    "Galeria de Imagens/Portfólio",
    "Sistema de Agendamento",
    "Integração com Redes Sociais",
    "Pagamento Online",
    "Outro",
  ];

  const materials = [
    "Textos",
    "Imagens/Fotos",
    "Logotipo",
    "Manual da Marca (Cores, Fontes)",
    "Nenhum material pronto",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (
    name: keyof BriefingFormData,
    value: string
  ) => {
    setFormData((prev) => {
      const currentArray = prev[name] as string[];
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [name]: updatedArray,
      };
    });
  };

  const handleReferenceChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newReferences = [...prev.references];
      newReferences[index] = value;
      return { ...prev, references: newReferences };
    });
  };

  const addReference = () => {
    setFormData((prev) => ({
      ...prev,
      references: [...prev.references, ""],
    }));
  };

  const removeReference = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index),
    }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

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
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BRIEFING; // Template específico para briefing
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
      // Formatar os dados para o email
      const emailData = {
        from_name: formData.clientName,
        from_email: formData.email,
        to_email: "williangomes949@gmail.com",
        phone: formData.phoneWhatsApp,
        company: formData.companyProfession,
        location: formData.address,
        
        // Informações do negócio
        business_description: formData.businessDescription,
        target_audience: formData.targetAudience,
        competitors: formData.mainCompetitors,
        competitive_advantages: formData.competitiveAdvantages,
        
        // Informações do projeto
        service_type: formData.serviceType,
        business_objective: formData.businessObjective,
        required_features: formData.requiredFeatures.join(", "),
        provided_materials: formData.providedMaterials.join(", "),
        references: formData.references.filter(ref => ref.trim() !== "").join("\n"),
        
        // Cronograma e observações
        ideal_launch_date: formData.idealLaunchDate,
        critical_dates: formData.criticalDates,
        additional_notes: formData.additionalNotes,
        
        date: new Date().toLocaleDateString("pt-BR"),
        time: new Date().toLocaleTimeString("pt-BR"),
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        publicKey
      );

      console.log("Briefing enviado com sucesso:", result);
      setStatusMessage({
        type: "success",
        message: "Briefing enviado com sucesso! Analisarei suas informações e retornarei em breve.",
      });
      
      // Limpar formulário após sucesso
      setFormData({
        clientName: "",
        companyProfession: "",
        phoneWhatsApp: "",
        email: "",
        address: "",
        businessDescription: "",
        targetAudience: "",
        mainCompetitors: "",
        competitiveAdvantages: "",
        serviceType: "",
        businessObjective: "",
        requiredFeatures: [],
        providedMaterials: [],
        references: [""],
        idealLaunchDate: "",
        criticalDates: "",
        additionalNotes: "",
      });
    } catch (error) {
      console.error("Erro ao enviar briefing:", error);
      setStatusMessage({
        type: "error",
        message: "Erro ao enviar briefing. Tente novamente ou entre em contato diretamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 p-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">
        Briefing Estratégico do Projeto
      </h2>
      <p className="text-gray-400 mb-8">
        Preencha as informações abaixo para iniciarmos o seu projeto
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Seção 1: Informações do Cliente */}
        <section className="border-b border-gray-700/50 pb-8">
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Informações do Cliente (Contratante)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome/Razão Social *
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="Nome completo ou razão social"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Empresa/Profissão *
              </label>
              <input
                type="text"
                name="companyProfession"
                value={formData.companyProfession}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="Ex: Fisioterapeuta, Salão de Beleza, Consultório"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                name="phoneWhatsApp"
                value={formData.phoneWhatsApp}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="(85) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Endereço (Cidade/Estado) *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="Fortaleza, CE"
              />
            </div>
          </div>
        </section>

        {/* Seção 2: Sobre o Negócio */}
        <section className="border-b border-gray-700/50 pb-8">
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Sobre o Negócio
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Descrição Resumida do Negócio *
              </label>
              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300 resize-none"
                placeholder="Descreva brevemente o que sua empresa/profissão faz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Público-Alvo Principal *
              </label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300 resize-none"
                placeholder="Ex: faixa etária, profissão, interesses, localização"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Principais Concorrentes
              </label>
              <textarea
                name="mainCompetitors"
                value={formData.mainCompetitors}
                onChange={handleInputChange}
                rows={2}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300 resize-none"
                placeholder="Nome e, se possível, site dos concorrentes"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Diferenciais Competitivos *
              </label>
              <textarea
                name="competitiveAdvantages"
                value={formData.competitiveAdvantages}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300 resize-none"
                placeholder="O que torna seu negócio único? Por que os clientes escolhem você?"
              />
            </div>
          </div>
        </section>

        {/* Seção 3: Sobre o Projeto */}
        <section className="border-b border-gray-700/50 pb-8">
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Sobre o Projeto
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Tipo de Serviço Desejado *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={type}
                      checked={formData.serviceType === type}
                      onChange={handleInputChange}
                      required
                      className="text-will-primary focus:ring-will-primary"
                    />
                    <span className="text-gray-300 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Objetivo Principal de Negócio *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {businessObjectives.map((objective) => (
                  <label
                    key={objective}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="businessObjective"
                      value={objective}
                      checked={formData.businessObjective === objective}
                      onChange={handleInputChange}
                      required
                      className="text-will-primary focus:ring-will-primary"
                    />
                    <span className="text-gray-300 text-sm">{objective}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Funcionalidades Necessárias
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.requiredFeatures.includes(feature)}
                      onChange={() =>
                        handleCheckboxChange("requiredFeatures", feature)
                      }
                      className="text-will-primary focus:ring-will-primary rounded"
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Conteúdo e Materiais */}
        <section className="border-b border-gray-700/50 pb-8">
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Conteúdo e Materiais
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Materiais Fornecidos pelo Cliente
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materials.map((material) => (
                  <label
                    key={material}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.providedMaterials.includes(material)}
                      onChange={() =>
                        handleCheckboxChange("providedMaterials", material)
                      }
                      className="text-will-primary focus:ring-will-primary rounded"
                    />
                    <span className="text-gray-300 text-sm">{material}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Referências e Inspirações
              </label>
              <div className="space-y-3">
                {formData.references.map((reference, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="url"
                      value={reference}
                      onChange={(e) =>
                        handleReferenceChange(index, e.target.value)
                      }
                      className="flex-1 bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                      placeholder={`Link de referência ${index + 1}`}
                    />
                    {formData.references.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeReference(index)}
                        className="px-3 py-2 bg-red-500/20 text-red-400 rounded-2xl hover:bg-red-500/30 transition-all duration-300"
                      >
                        Remover
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addReference}
                  className="text-will-primary hover:text-will-accent transition-colors duration-300 text-sm font-medium"
                >
                  + Adicionar outra referência
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Cronograma */}
        <section className="border-b border-gray-700/50 pb-8">
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Cronograma
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Data Ideal de Lançamento
              </label>
              <input
                type="date"
                name="idealLaunchDate"
                value={formData.idealLaunchDate}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Há algum evento ou data comemorativa crítica?
              </label>
              <input
                type="text"
                name="criticalDates"
                value={formData.criticalDates}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300"
                placeholder="Ex: Lançamento de produto, Black Friday, etc."
              />
            </div>
          </div>
        </section>

        {/* Seção 6: Observações Adicionais */}
        <section>
          <h3 className="text-lg font-semibold text-will-primary mb-4">
            Observações Adicionais
          </h3>

          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-will-primary focus:ring-1 focus:ring-will-primary transition-all duration-300 resize-none"
            placeholder="Alguma informação adicional que considere importante para o projeto..."
          />
        </section>

        {/* Status Message */}
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

        {/* Botões de Ação */}
        <div className="flex justify-between pt-6">
          <MyButton
            type="button"
            variant="secondary"
            onClick={handleCancel}
          >
            Cancelar
          </MyButton>
          <MyButton
            type="submit"
            variant="primary"
            className="min-w-[200px]"
            disabled={isLoading}
            aria-label="Solicitar Orçamento"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-100 border-t-transparent rounded-full animate-spin mr-2"></div>
                Enviando...
              </span>
            ) : (
              "Solicitar Orçamento"
            )}
          </MyButton>
        </div>
      </form>
    </div>
  );
}