import React from 'react';
import { useLanguage } from '../../i18n';
import { ServiceIcons } from '../../assets/icons';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'agileCoaching',
      title: t('services.agileCoaching'),
      description: 'Transform your team\'s approach to project management and product development through Agile methodologies.',
      icon: 'agileCoaching',
    },
    {
      id: 'mvpLaunch',
      title: t('services.mvpLaunch'),
      description: 'Launch your minimum viable product quickly, test your market fit, and iterate based on real user feedback.',
      icon: 'mvpLaunch',
    },
    {
      id: 'aiAutomation',
      title: t('services.aiAutomation'),
      description: 'Optimize workflows and reduce costs by implementing AI solutions tailored to your business needs.',
      icon: 'aiAutomation',
    },
    {
      id: 'training',
      title: t('services.training'),
      description: 'Upskill your team through specialized workshops on Agile, AI implementation, and digital transformation.',
      icon: 'training',
    },
    {
      id: 'digitalConsulting',
      title: t('services.digitalConsulting'),
      description: 'Get expert guidance on Web3 technologies, blockchain integration, and future-ready digital strategies.',
      icon: 'digitalConsulting',
    },
  ];

  return (
    <section className="section bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="600">
          <div className="divider mx-auto"></div>
          <h2 className="text-primary mb-6">{t('services.title')}</h2>
          <p className="text-lg">
            Tailored solutions to help your business thrive in the digital era through innovation, 
            agility, and cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = ServiceIcons[service.icon as keyof typeof ServiceIcons];
            
            return (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div className="text-primary mb-4">
                  <IconComponent size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;