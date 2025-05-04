import React from 'react';
import { useLanguage } from '../i18n';
import Button from '../components/common/Button';
import { Icons } from '../assets/icons';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    'Scrum Master', 'Coach Agile', 'IA', 'Web3', 
    'Development', 'Facilitator', 'Innovation', 'Digital Transformation',
    'Project Management', 'Leadership', 'Workshops', 'Design Thinking'
  ];

  const experiences = [
    {
      period: '2020 - Present',
      title: 'Digital Project Manager & Scrum Master',
      company: 'Freelance',
      description: 'Working with various clients to transform their digital vision into reality through agile methodologies, AI innovation, and expert-led development.'
    },
    {
      period: '2016 - 2020',
      title: 'Head of Digital Projects',
      company: 'TechInnovate',
      description: 'Led a team of 10 developers and designers to deliver cutting-edge digital products. Implemented Agile methods across the organization.'
    },
    {
      period: '2012 - 2016',
      title: 'Senior Developer',
      company: 'WebSolutions',
      description: 'Developed complex web applications and mentored junior developers. Specialized in creating scalable and maintainable code.'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <h1 className="mb-6">{t('about.title')}</h1>
              <p className="text-xl mb-8">
                {t('about.bio')}
              </p>
              <Button 
                to="/contact" 
                variant="secondary" 
                className="border-white"
                icon="ArrowRight"
              >
                {t('cta.contact')}
              </Button>
            </div>
            
            <div 
              className="relative"
              data-aos="fade-left" 
              data-aos-duration="800"
            >
              <img 
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional headshot" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-white rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="divider"></div>
              <h2 className="text-primary mb-8">My Story</h2>
              <div className="text-lg space-y-6">
                <p>
                  With over a decade in digital project management and development, I've seen how technology can transform businesses when implemented with the right strategy and approach.
                </p>
                <p>
                  My journey began as a developer, giving me a deep understanding of the technical challenges teams face. This foundation proved invaluable as I moved into project management and eventually leadership roles.
                </p>
                <p>
                  I'm passionate about agile methodologies not just as processes, but as mindsets that enable teams to deliver value faster and respond to change effectively. Combined with my expertise in emerging technologies like AI and Web3, I help organizations stay ahead of the curve.
                </p>
                <p>
                  Today, I work as a consultant and trainer, helping teams transform their approach to digital projects and embrace innovation. I believe in pragmatic solutions that deliver real business results, not just following trends.
                </p>
              </div>
            </div>
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="divider"></div>
              <h2 className="text-primary mb-8">Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-secondary rounded-full text-primary font-medium"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="600">
              <div className="divider"></div>
              <h2 className="text-primary mb-8">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="border-l-4 border-primary pl-6 relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                    <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;