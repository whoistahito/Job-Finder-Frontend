import React from 'react';
import {cn} from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'dark';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className, 
  ...props 
}) => {
    const baseStyles = "relative w-full px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";
  const variants = {
      primary: "bg-brand-600 hover:bg-brand-700 text-white disabled:hover:bg-brand-600",
      secondary: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300",
      dark: "bg-gray-900 text-white hover:bg-black"
  } as const;

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {children}
      {isLoading && (
          <span
              className="absolute right-4 inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"/>
      )}
    </button>
  );
}