// Loading spinner component
export default function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4"
  };

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="relative">
        {/* Spinner principal */}
        <div 
          className={`
            ${sizeClasses[size]} 
            border-will-primary/30 border-t-will-primary rounded-full 
            animate-spin
          `} 
        />
        
        {/* Spinner secundário para efeito de profundidade */}
        {size !== "small" && (
          <div 
            className={`
              absolute inset-0 
              ${sizeClasses[size]} 
              border-transparent border-t-will-p-light/50 rounded-full 
              animate-spin
            `}
            style={{ animationDelay: "-0.45s" }}
          />
        )}
        
        {/* Ponto central */}
        {size === "large" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-will-primary rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}