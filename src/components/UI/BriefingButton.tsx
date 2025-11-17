// components/BriefingButton.tsx
"use client";

import { useRouter } from "next/navigation";

export default function BriefingButton() {
  const router = useRouter();

  return (
    <div className="text-center mt-12">
      <button
        onClick={() => router.push('/briefing')}
        className="bg-will-primary text-white px-8 py-4 rounded-2xl font-medium shadow-lg shadow-will-primary/25 hover:shadow-will-primary/40 transition-all duration-300 hover:scale-105 text-lg"
      >
        Solicitar Orçamento Personalizado
      </button>
    </div>
  );
}