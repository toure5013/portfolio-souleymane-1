import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 bg-beige overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6"
              data-aos="fade-up"
            >
              {t('heroTitle')}
            </h1>
            
            <p 
              className="text-xl text-gray-700 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t('heroSubtext')}
            </p>
            
            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/project" className="btn-primary mr-4">
                {t('cta')}
              </Link>
              <Link to="/portfolio" className="btn-outline">
                {t('portfolio')}
              </Link>
            </div>
            
            <div 
              className="flex items-center mt-12 text-sm text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex -space-x-2 mr-4">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Client" 
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Client" 
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
                <img 
                  src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Client" 
                  className="w-8 h-8 rounded-full ring-2 ring-white"
                />
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </div>
          </div>
          
          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="absolute -z-10 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl -top-10 -right-10"></div>
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Digital Project Management" 
              className="rounded-lg shadow-xl"
            />
            
            <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Currently working on</span>
              </div>
              <p className="font-semibold">AI-Powered Project Management Tool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;