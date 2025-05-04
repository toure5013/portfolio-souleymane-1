import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Capture</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Digital Project Manager, Scrum Master, Trainer, Speaker, and Developer specializing in Agility, AI, Web3, and Innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-accent transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="hover:text-accent transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="hover:text-accent transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('newsletterCta')}</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest insights on digital transformation, agile methodologies, and tech innovation.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('enterEmail')} 
                className="bg-gray-800 text-white px-4 py-2 flex-grow rounded-l-md focus:outline-none"
              />
              <button className="bg-accent px-4 py-2 rounded-r-md hover:bg-accent-dark transition-colors">
                <ArrowRight />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">{t('contact')}</h3>
            <p className="text-gray-300 mb-2">hello@capture.com</p>
            <p className="text-gray-300 mb-6">+33 6 12 34 56 78</p>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                {t('home')}
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
                {t('services')}
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-accent transition-colors">
                {t('portfolio')}
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                {t('contact')}
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Capture. {t('allRightsReserved')}</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;