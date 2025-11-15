// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string; // Para espaçamento (ex: "mb-12")
}

export function SectionTitle({ subtitle, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {/* Subtítulo (o texto menor em cima) */}
      <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent text-sm font-medium">
             {subtitle}
            </span>
          </div>
      <span className="text-will-primary font-semibold text-sm tracking-wider uppercase">
        
      </span>

      {/* Título Principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
        {title}
      </h2>
      
      {/* Divisor Estilizado (Opcional, mas dá um toque premium) */}
      <div className="flex justify-center mt-4">
        <div className="w-16 h-1 bg-will-primary rounded-full" />
      </div>
    </div>
  );
}
