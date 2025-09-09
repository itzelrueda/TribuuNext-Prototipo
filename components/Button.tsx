import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-bold text-white rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;