import React from 'react';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl" data-aos="fade-right" data-aos-duration="800">
          <h1 className="text-primary font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {t('hero.subtitle')}
          </p>
          <Button 
            to="/project" 
            variant="primary" 
            icon="ArrowRight" 
            iconPosition="right"
          >
            {t('cta.workTogether')}
          </Button>
        </div>
        
        <div 
          className="relative" 
          data-aos="fade-left" 
          data-aos-duration="800"
        >
          <div className="relative z-10">
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Working professional" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full -z-10 animate-pulse"
          ></div>
          <div 
            className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-primary-dark font-bold text-xl">10+</div>
            <div className="text-primary-dark text-sm">Years Experience</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
        >
          <Button variant="tertiary" icon="ArrowDown" iconPosition="right">
            Scroll Down
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;