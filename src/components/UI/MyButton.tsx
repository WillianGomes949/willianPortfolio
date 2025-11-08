import Link from 'next/link';
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
  href?: string;
}

/**
 * Um componente de botão reutilizável com estilos pré-definidos.
 * Aceita todas as props de um <button> HTML padrão.
 */
export default function  MyButton({
  children,
  variant = 'primary',
  className = '',
  href='',
  ...rest
}: MyButtonProps){
  // Estilos base, aplicados a todas as variantes
  const baseStyle =
    'py-3 px-6 rounded-lg font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-102 w-70';

  // Estilos específicos da variante
  // Usei 'red' para combinar com a inspiração que você mandou
  const variantStyles =
    variant === 'primary'
      ? 'bg-will-primary text-white hover:bg-will-p-light focus:ring-will-primary'
      : 'border-2 border-will-primary text-will-primary hover:bg-will-primary hover:text-white focus:ring-will-primary';

  // Combina todas as classes
  const combinedClassName = `${baseStyle} ${variantStyles} ${className}`;


  const buttonContent = typeof children === 'string'
    ? children.toUpperCase() // Se for, converte
    : children;             // Se não for (um ícone, etc), usa como está

  return (
    <Link  href={href}>
      <button className={combinedClassName} {...rest}>
        {buttonContent}
      </button>
    </Link>

  );
};