// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
  section?: string;
  title?: string;
  subtitle?: string;
  className?: string; // Para espaçamento (ex: "mb-12")
}

export function SectionTitle({
  section,
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className} font-tajawal max-w-3xl mx-auto leading-relaxed flex flex-col justify-center items-center` }>
      {/* Subtítulo (o texto menor em cima) */}
      <div className="mb-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent tracking-wide">
          {section}
        </span>
      </div>
      {/* Título Principal */}
      <h2 className="text-3xl md:text-5xl text-white mb-6 font-extrabold ">
        {title}
      </h2>
      {/* Subtítulo Secundário */}
      <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
        {subtitle}
      </p>
      {/* Divisor Estilizado (Opcional, mas dá um toque premium) */}
      <div className="flex justify-center mt-4">
        <div className="w-16 h-1 bg-will-primary rounded-full" />
      </div>
    </div>
  );
}
