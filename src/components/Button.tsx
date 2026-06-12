import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95";
  
  const variants = {
    primary: "bg-brand-pink text-white shadow-premium-pink",
    secondary: "bg-white text-brand-dark shadow-premium-white",
    tertiary: "bg-brand-dark text-white shadow-premium-dark",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
