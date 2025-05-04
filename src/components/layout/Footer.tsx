import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import Logo from '../common/Logo';
import { Icons } from '../../assets/icons';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: 'Linkedin', url: 'https://linkedin.com/' },
    { icon: 'Twitter', url: 'https://twitter.com/' },
    { icon: 'Github', url: 'https://github.com/' },
    { icon: 'Instagram', url: 'https://instagram.com/' },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div data-aos="fade-up" data-aos-duration="400">
            <Logo dark={true} />
            <p className="mt-4 max-w-md">
              Transforming digital visions into impactful solutions through Agility, AI innovation, 
              and expert-led development.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.icon}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300"
                  aria-label={link.icon}
                >
                  {React.createElement(Icons[link.icon as keyof typeof Icons], { size: 20 })}
                </a>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="600">
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-300">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-colors duration-300">
                  {t('navigation.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors duration-300">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-300">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-accent transition-colors duration-300">
                  {t('navigation.project')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="800">
            <h3 className="text-xl font-medium mb-4">{t('contactForm.title')}</h3>
            <div className="flex items-start mb-3">
              <Icons.Mail className="mr-3 mt-1 text-accent" size={18} />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-start mb-3">
              <Icons.Phone className="mr-3 mt-1 text-accent" size={18} />
              <span>+33 6 12 34 56 78</span>
            </div>
            <div className="flex items-start">
              <Icons.MapPin className="mr-3 mt-1 text-accent" size={18} />
              <span>Paris, France</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>{t('footer.copyright')}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/legal" className="hover:text-accent transition-colors duration-300">
              {t('footer.legal')}
            </Link>
            <Link to="/privacy" className="hover:text-accent transition-colors duration-300">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;