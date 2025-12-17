// src/components/ui/WhatsAppButton.tsx
"use client";

import { meusDados } from "@/data/db";
import Link from "next/link";
// import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  position?: "bottom-right" | "bottom-left";
  showPopup?: boolean;
}

// Versão Simples (sem popup)
export function SimpleWhatsAppButton({
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <Link
      href={meusDados.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses[position]} z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 group`}
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />

      {/* Efeito de pulsaçao sutil */}
      <div className="overflow-hidden absolute inset-0 rounded-2xl bg-green-500 animate-[ping_1s_linear_infinite] opacity-20 group-hover:opacity-30"></div>

      {/* Tooltip no hover */}
      <span
        className="absolute bottom-full mb-2 left-1/2 -translate-x-6
                       px-3 py-1.5 rounded-md bg-zinc-900 text-white text-sm
                       transition-all duration-200 ease-in-out
                       scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                       origin-left whitespace-nowrap"
      >
        WhatsApp
      </span>
    </Link>
  );
}

// // Versão com Popup
// export function WhatsAppButton({
//   phoneNumber = "5585999999999",
//   message = "Olá! Gostaria de mais informações sobre os serviços advocatícios.",
//   position = "bottom-right",
//   showPopup = true,
// }: WhatsAppButtonProps) {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   // Formata o número (remove caracteres não numéricos)
//   const formattedNumber = phoneNumber.replace(/\D/g, "");

//   // Cria a URL do WhatsApp
//   const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   const handleWhatsAppClick = () => {
//     if (showPopup && !isPopupOpen) {
//       setIsPopupOpen(true);
//     } else {
//       window.open(whatsappUrl, "_blank");
//       setIsPopupOpen(false);
//     }
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const positionClasses = {
//     "bottom-right": "bottom-6 right-6",
//     "bottom-left": "bottom-6 left-6",
//   };

//   return (
//     <>
//       {/* Botão Flutuante Principal */}
//       <div className={`fixed ${positionClasses[position]} z-50`}>
//         {/* Popup de Mensagem */}
//         {isPopupOpen && (
//           <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
//             {/* Header do Popup */}
//             <div className="flex items-center justify-between p-4 bg-green-500 rounded-t-2xl">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   <FaWhatsapp className="h-5 w-5 text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">WhatsApp</h3>
//                   <p className="text-green-100 text-sm">
//                     Online • Resposta rápida
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleClosePopup}
//                 className="text-white hover:text-green-100 transition-colors p-1 rounded-full hover:bg-green-600"
//               >
//                 <FaTimes className="h-4 w-4" />
//               </button>
//             </div>

//             {/* Corpo do Popup */}
//             <div className="p-4 bg-gray-50">
//               <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
//                 <p className="text-gray-700 text-sm">{message}</p>
//               </div>
//               <p className="text-xs text-gray-500 mt-2 text-center">
//                 Clique abaixo para iniciar a conversa
//               </p>
//             </div>

//             {/* Botão de Ação */}
//             <div className="p-4 bg-white rounded-b-2xl">
//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 onClick={handleClosePopup}
//               >
//                 <FaWhatsapp className="h-5 w-5" />
//                 Iniciar Conversa
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Botão Principal do WhatsApp */}
//         <button
//           onClick={handleWhatsAppClick}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 group"
//           aria-label="Conversar no WhatsApp"
//         >
//           {/* Ícone Principal */}
//           <FaWhatsapp className="h-7 w-7" />

//           {/* Badge de Notificação (opcional) */}
//           <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//             <span className="text-white text-xs font-bold">!</span>
//           </div>

//           {/* Tooltip no Hover */}
//           {isHovered && (
//             <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap animate-in fade-in duration-200">
//               Fale conosco no WhatsApp
//               <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
//             </div>
//           )}

//           {/* Efeito de Pulsação */}
//           <div className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-20 group-hover:opacity-30"></div>
//         </button>

//         {/* Botão Alternativo para Mobile (menor) */}
//         <div className="sm:hidden fixed bottom-4 right-4 z-50">
//           <a
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white p-3 rounded-full shadow-2xl"
//             aria-label="Conversar no WhatsApp"
//           >
//             <FaWhatsapp className="h-6 w-6" />
//           </a>
//         </div>
//       </div>

//       {/* Overlay para fechar o popup */}
//       {isPopupOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-10 z-40"
//           onClick={handleClosePopup}
//         />
//       )}
//     </>
//   );
// }
