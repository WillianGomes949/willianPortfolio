import Link from 'next/link';
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface BaseProps {
  children: React.ReactNode;
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string;
  };

type MyButtonProps = ButtonAsButton | ButtonAsLink;

export default function MyButton(props: MyButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    loading = false,
    children,
    ...rest
  } = props;

  // Base styles
  const baseStyle = `
      rounded-lg font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-102 w-70 text-center
  `;

  // Size variants
  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  // Color variants
  const variantStyles = {
    primary: `
      bg-will-primary text-white focus:ring-will-primary
      focus:ring-offset-will-primary
      shadow-lg hover:shadow-will-primary/25
    `,
    secondary: `
      border-2 border-will-primary text-will-primary hover:bg-will-primary hover:text-white focus:ring-will-primary
      focus:ring-offset-will-primary
      shadow-lg hover:shadow-will-primary/25
      hover:border-will-primary
    `,
    ghost: `
      text-lime-500 hover:bg-lime-500/10
      focus:ring-lime-500 focus:ring-offset-gray-900
      hover:border-lime-500/30 border-2 border-transparent
    `
  };

  const combinedClassName = `
    ${baseStyle}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Process children - only uppercase strings, preserve other elements
  const buttonContent = React.Children.map(children, child => 
    typeof child === 'string' ? child.toUpperCase() : child
  );

  // Common props for both button and link
  const commonProps = {
    className: combinedClassName,
    'data-variant': variant,
    'data-size': size,
    'data-loading': loading,
    ...(disabled && { 'aria-disabled': true })
  };

  if ('href' in rest && rest.href) {
    const { href, ...linkRest } = rest;
    
    return (
      <Link 
        href={href}
        {...commonProps}
        {...linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {loading && <LoadingSpinner />}
        <span className={loading ? 'invisible' : 'visible'}>
          {buttonContent}
        </span>
      </Link>
    );
  }

  const { type = 'button', ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      {...commonProps}
      {...buttonRest}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'invisible' : 'visible'}>
        {buttonContent}
      </span>
    </button>
  );
}