import React from 'react';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

const ContactCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-white">
      <div 
        className="container-custom text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to transform your digital vision?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can work together to bring your ideas to life with innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            to="/project" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
          >
            {t('navigation.project')}
          </Button>
          <Button 
            to="/contact" 
            variant="secondary" 
            className="border-white"
          >
            {t('cta.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;