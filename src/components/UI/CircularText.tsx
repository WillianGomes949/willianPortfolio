import Image from 'next/image';

interface CircularTextProps {
  text: string;
  radius?: number;
  degreeSpacing?: number;
  duration?: number;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imgDiameter?: number;
}

export default function CircularText({
  text,
  radius = 110,
  degreeSpacing = 11,
  duration = 16,
  className = "",
  imageSrc,
  imageAlt = "Imagem central",
  imgDiameter = 100,
}: CircularTextProps) {
  const containerSize = radius * 2;

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${className}`}
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      {/* Imagem Central: Centralizada pelo Flex do pai */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imgDiameter}
          height={imgDiameter}
          className="z-0 rounded-full object-cover pointer-events-none group-hover:-rotate-20 transition-transform duration-500"
        />
      )}

      {/* Wrapper do Texto: Usa animate-spin do Tailwind */}
      <div 
        className="absolute inset-0 z-10 animate-spin pointer-events-none"
        aria-label={text}
        style={{ 
          // Sobrescreve a duração padrão do Tailwind (que é 1s) pela sua prop
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="absolute left-1/2 top-0 capitalize pointer-events-auto"
            style={{
              // Cálculos matemáticos permanecem inline pois são dinâmicos
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${index * degreeSpacing}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};