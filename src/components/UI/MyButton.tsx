import Link from 'next/link';
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface BaseProps {
  children: React.ReactNode;
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  scroll?: boolean;
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
    fullWidth = false,
    icon,
    iconPosition = 'left',
    children,
    ...rest
  } = props;

  // Base styles
  const baseStyle = `
    inline-flex items-center justify-center gap-3
    rounded-2xl font-semibold transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95 border-2 backdrop-blur-sm
    group relative overflow-hidden w-full md:w-auto
  `;

  // Size variants
  const sizeStyles = {
    sm: 'py-2.5 px-5 text-sm',
    md: 'py-3.5 px-7 text-base',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl'
  };

  // Color variants
  const variantStyles = {
    primary: `
      bg-will-primary
      text-gray-100 border-transparent
      
      focus:ring-will-primary/50
      shadow-lg hover:shadow-2xl hover:shadow-will-primary/25
    `,
    secondary: `
      bg-gray-800/50 text-gray-100 border-gray-600
      hover:bg-gray-700/80 hover:border-gray-500 hover:text-gray-100
      focus:ring-gray-500/50
      shadow-lg hover:shadow-2xl hover:shadow-gray-500/20
      hover:scale-105
    `,
    ghost: `
      bg-transparent text-will-primary border-will-primary/30
      hover:bg-will-primary/10 hover:border-will-primary hover:text-will-p-light
      focus:ring-will-primary/30
      hover:scale-105
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-pink-500
      text-gray-100 border-transparent
      hover:from-red-600 hover:to-pink-600
      focus:ring-red-500/50
      shadow-lg hover:shadow-2xl hover:shadow-red-500/25
    `
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  const loadingSize = size === 'xl' ? 'large' : size === 'sm' ? 'small' : 'medium';

  const combinedClassName = `
    ${baseStyle}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${widthStyle}
    ${loading ? 'cursor-wait' : ''}
    ${!disabled && !loading ? 'hover:scale-105' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Process children - preserve original text case but add tracking
  const buttonContent = React.Children.map(children, child => 
    typeof child === 'string' 
      ? <span className="tracking-wide">{child}</span>
      : child
  );

  // Common props for both button and link
  const commonProps = {
    className: combinedClassName,
    'data-variant': variant,
    'data-size': size,
    'data-loading': loading,
    ...(disabled && { 'aria-disabled': true })
  };

  // Content with loading state
  const renderContent = () => (
    <>
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-2xl">
          <LoadingSpinner size={loadingSize} />
        </div>
      )}
      
      {/* Icon and text content */}
      <div className={`flex items-center gap-3 transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && iconPosition === 'left' && (
          <span className="shrink-0 group-hover:scale-110 transition-transform duration-200">
            {icon}
          </span>
        )}
        
        {buttonContent}
        
        {icon && iconPosition === 'right' && (
          <span className="shrink-0 group-hover:scale-110 transition-transform duration-200">
            {icon}
          </span>
        )}
      </div>

      {/* Ripple effect layer */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-r from-gray-100/0 via-gray-100/10 to-gray-100/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...linkRest } = rest;
    
    return (
      <Link 
        href={href}
        {...commonProps}
        {...linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {renderContent()}
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
      {renderContent()}
    </button>
  );
}