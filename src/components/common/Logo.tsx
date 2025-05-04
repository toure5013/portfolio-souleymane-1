import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ dark = false }) => {
  return (
    <Link to="/" className="flex items-center">
      <div className={`font-serif text-xl md:text-2xl font-bold ${dark ? 'text-white' : 'text-primary'}`}>
        <span className="tracking-tight">Capture</span>
      </div>
    </Link>
  );
};

export default Logo;