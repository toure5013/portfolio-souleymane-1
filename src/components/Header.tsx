import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-dark-900">
          Capture
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'font-semibold' : ''}`}>
            {t('home')}
          </Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'font-semibold' : ''}`}>
            {t('portfolio')}
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'font-semibold' : ''}`}>
            {t('services')}
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'font-semibold' : ''}`}>
            {t('about')}
          </Link>
          <Link to="/project" className={`nav-link ${location.pathname === '/project' ? 'font-semibold' : ''}`}>
            {t('project')}
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'font-semibold' : ''}`}>
            {t('contact')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-dark-900 hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} className="mr-1" />
            <span className="font-medium">
              {language === 'fr' ? 'FR | EN' : 'EN | FR'}
            </span>
          </button>
          <Link 
            to="/contact" 
            className="btn-primary"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {t('contactMe')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-900" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="flex flex-col gap-4 p-6">
          <Link to="/" className="mobile-nav-link">
            {t('home')}
          </Link>
          <Link to="/portfolio" className="mobile-nav-link">
            {t('portfolio')}
          </Link>
          <Link to="/services" className="mobile-nav-link">
            {t('services')}
          </Link>
          <Link to="/about" className="mobile-nav-link">
            {t('about')}
          </Link>
          <Link to="/project" className="mobile-nav-link">
            {t('project')}
          </Link>
          <Link to="/contact" className="mobile-nav-link">
            {t('contact')}
          </Link>
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-dark-900 mt-4 p-2"
          >
            <Globe size={20} className="mr-2" />
            <span>{language === 'fr' ? 'FR | EN' : 'EN | FR'}</span>
          </button>
          <Link to="/contact" className="btn-primary mt-4 text-center">
            {t('contactMe')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;