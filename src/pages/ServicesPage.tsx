import React from 'react';
import { useLanguage } from '../i18n';
import { ServiceIcons } from '../assets/icons';
import Button from '../components/common/Button';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'agileCoaching',
      title: t('services.agileCoaching'),
      description: `Transform your team's approach to project management through Agile methodologies. I offer:
        
        • Team coaching and transformation
        • Scrum implementation and optimization
        • Agile workshops and training
        • Process improvement and scaling
      `,
      icon: 'agileCoaching',
    },
    {
      id: 'mvpLaunch',
      title: t('services.mvpLaunch'),
      description: `Launch your minimum viable product quickly and test your market fit:
        
        • Rapid prototype development
        • Feature prioritization
        • User testing and feedback collection
        • Iterative product development
      `,
      icon: 'mvpLaunch',
    },
    {
      id: 'aiAutomation',
      title: t('services.aiAutomation'),
      description: `Optimize workflows and reduce costs with AI solutions:
        
        • AI readiness assessment
        • Custom AI integration
        • Workflow automation
        • AI-powered analytics and insights
      `,
      icon: 'aiAutomation',
    },
    {
      id: 'training',
      title: t('services.training'),
      description: `Upskill your team through specialized workshops:
        
        • Agile and Scrum training
        • AI implementation workshops
        • Digital transformation workshops
        • Web3 and blockchain fundamentals
      `,
      icon: 'training',
    },
    {
      id: 'digitalConsulting',
      title: t('services.digitalConsulting'),
      description: `Get expert guidance on emerging technologies:
        
        • Web3 and blockchain strategy
        • Digital transformation roadmaps
        • Technology stack assessment
        • Future-proofing your digital infrastructure
      `,
      icon: 'digitalConsulting',
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <h1 className="mb-6" data-aos="fade-up" data-aos-duration="600">
            {t('services.title')}
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Tailored solutions to help your business thrive in the digital era through innovation, 
            agility, and cutting-edge technologies.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => {
              const IconComponent = ServiceIcons[service.icon as keyof typeof ServiceIcons];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-secondary/30 p-8 md:p-12 rounded-lg">
                      <div className="text-primary mb-6">
                        <IconComponent size={48} />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                      <div className="prose">
                        {service.description.split('\n').map((paragraph, i) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                      <Button 
                        to="/project" 
                        variant="primary" 
                        className="mt-4"
                        icon="ArrowRight"
                      >
                        Get started
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img 
                      src={`https://images.pexels.com/photos/${8370752 + index * 100}/pexels-photo-${8370752 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;