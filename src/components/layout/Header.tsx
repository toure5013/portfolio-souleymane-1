import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import Logo from '../common/Logo';
import Button from '../common/Button';
import LanguageSelector from '../common/LanguageSelector';
import { Icons } from '../../assets/icons';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.portfolio'), path: '/portfolio' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.project'), path: '/project' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="container-custom flex justify-between items-center">
        <Logo dark={false} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <LanguageSelector />
          <Button to="/contact" variant="primary">
            {t('cta.contact')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <LanguageSelector />
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-primary p-2"
          >
            {menuOpen ? <Icons.Close size={24} /> : <Icons.Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <div className="container-custom py-4 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xl ${isActive ? 'text-primary font-medium' : 'text-text'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            to="/contact" 
            variant="primary" 
            className="mt-4 w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;