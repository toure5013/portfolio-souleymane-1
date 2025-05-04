import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Award, Briefcase, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    'Scrum Master',
    'Agile Coach',
    'AI Implementation',
    'Web3 Development',
    'Digital Project Management',
    'Change Management',
    'Workshop Facilitation',
    'UX/UI Design'
  ];

  const experiences = [
    {
      id: 1,
      company: 'Digital Innovation Agency',
      role: 'Lead Product Manager',
      period: '2020 - Present',
      description: 'Leading digital product development from ideation to market launch, utilizing Agile methodologies and innovative technologies.'
    },
    {
      id: 2,
      company: 'Tech Startup Accelerator',
      role: 'Agile Coach & Mentor',
      period: '2018 - 2020',
      description: 'Mentored over 20 startups in implementing Agile frameworks, improving product-market fit and development efficiency.'
    },
    {
      id: 3,
      company: 'Enterprise Solutions Inc.',
      role: 'Web3 Technology Consultant',
      period: '2016 - 2018',
      description: 'Advised clients on blockchain implementation strategies and developed decentralized applications for various industries.'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      year: '2019'
    },
    {
      id: 2,
      name: 'Professional Cloud Architect',
      issuer: 'Google Cloud',
      year: '2020'
    },
    {
      id: 3,
      name: 'AI & Machine Learning Professional',
      issuer: 'Microsoft',
      year: '2021'
    },
    {
      id: 4,
      name: 'Certified Blockchain Developer',
      issuer: 'Blockchain Council',
      year: '2018'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            data-aos="fade-right"
          >
            <img 
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional portrait" 
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
          
          <div data-aos="fade-left">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              {t('aboutMe')}
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
              I'm a certified Scrum Master, trainer, speaker, and developer specializing in Agile methodologies, 
              AI implementation, Web3 technologies, and digital transformation. With over a decade of experience, 
              I help organizations transform their ideas into impactful digital products.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              My unique approach combines technical expertise with strategic thinking, allowing me to bridge the gap between 
              business objectives and technical implementation. I'm passionate about facilitating change that drives 
              meaningful results and creates sustainable innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.slice(0, 8).map((skill, index) => (
                <div key={index} className="flex items-start">
                  <Check size={20} className="text-accent mt-1 mr-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>
              <a 
                href="/contact" 
                className="btn-outline"
              >
                {t('contactMe')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12" data-aos="fade-up">
            <Briefcase size={24} className="text-accent mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
              Professional Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="bg-white p-8 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900">
                      {experience.role}
                    </h3>
                    <p className="text-accent">{experience.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-700">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12" data-aos="fade-up">
            <Award size={24} className="text-accent mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
              Certifications & Education
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className="bg-beige p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-dark-900">
                      {cert.name}
                    </h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                  </div>
                  <span className="text-accent font-medium">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section>
          <div className="flex items-center mb-12" data-aos="fade-up">
            <BookOpen size={24} className="text-accent mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
              My Philosophy
            </h2>
          </div>
          
          <div className="bg-dark-900 text-white p-10 rounded-lg shadow-xl" data-aos="fade-up">
            <blockquote className="text-xl italic mb-6">
              "Success in digital transformation isn't just about implementing new technologies—it's about fostering a culture of innovation, 
              adaptability, and continuous learning. When people and processes align with technology, true digital impact becomes possible."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-2xl mr-4">
                C
              </div>
              <div>
                <p className="font-semibold">Capture</p>
                <p className="text-gray-400">Digital Transformation Expert</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;