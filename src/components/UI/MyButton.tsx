import React from 'react';

// Definindo as propriedades do botão
interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /**
   * Define o estilo visual do botão
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Classes adicionais do Tailwind para customização
   */
  className?: string;
}

/**
 * Um componente de botão reutilizável com estilos pré-definidos.
 * Aceita todas as props de um <button> HTML padrão.
 */
const MyButton: React.FC<MyButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...rest
}) => {
  // Estilos base, aplicados a todas as variantes
  const baseStyle =
    'py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105';

  // Estilos específicos da variante
  // Usei 'red' para combinar com a inspiração que você mandou
  const variantStyles =
    variant === 'primary'
      ? 'bg-will-primary text-white hover:bg-will-p-light focus:ring-will-primary'
      : 'border-2 border-will-primary text-will-primary hover:bg-will-primary hover:text-white focus:ring-will-primary';

  // Combina todas as classes
  const combinedClassName = `${baseStyle} ${variantStyles} ${className}`;

  return (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default MyButton;