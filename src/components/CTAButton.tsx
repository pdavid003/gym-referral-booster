import React from 'react';

interface CTAButtonProps {
  text: string;
  href: string;
  color?: 'yellow' | 'blue';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  href, 
  color = 'yellow',
  className = ''
}) => {
  const baseClasses = "inline-block font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl";
  
  const colorClasses = {
    yellow: "bg-yellow-500 hover:bg-yellow-400 text-blue-900",
    blue: "bg-blue-600 hover:bg-blue-700 text-white"
  };
  
  return (
    <a 
      href={href}
      className={`${baseClasses} ${colorClasses[color]} ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;