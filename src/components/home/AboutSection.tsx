import React from 'react';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    'Scrum Master', 'Coach Agile', 'IA', 'Web3', 
    'Development', 'Facilitator', 'Innovation'
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="relative"
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            <img 
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional headshot" 
              className="rounded-lg shadow-xl relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-lg -z-0"></div>
          </div>
          
          <div data-aos="fade-left" data-aos-duration="800">
            <div className="divider"></div>
            <h2 className="text-primary mb-6">{t('about.title')}</h2>
            <p className="text-lg mb-6">
              {t('about.bio')}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-full text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <Button to="/about" variant="secondary" icon="ArrowRight">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;