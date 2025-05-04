import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/icons';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: keyof typeof Icons;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  icon,
  iconPosition = 'right',
  disabled = false,
}) => {
  const baseClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    tertiary: 'button-tertiary',
  }[variant];

  const allClasses = `${baseClasses} flex items-center ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">
          {React.createElement(Icons[icon], { size: 18 })}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2">
          {React.createElement(Icons[icon], { size: 18 })}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={allClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;