// components/BriefingButton.tsx
"use client";

import { useRouter } from "next/navigation";
import MyButton from "./MyButton";

export default function BriefingButton() {
  const router = useRouter();

  return (
    <MyButton variant="primary" size="lg" onClick={() => router.push("/briefing")}>
      Solicitar Orçamento Personalizado
    </MyButton>
  );
}
