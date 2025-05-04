import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('agileCoaching'),
      icon: 'UserCheck',
      description: 'Implement Agile methodologies tailored to your organization. Optimize workflows, enhance team collaboration, and drive continuous improvement.',
      features: [
        'Scrum/Kanban implementation',
        'Team facilitation',
        'Agile transformation',
        'Process optimization'
      ]
    },
    {
      id: 2,
      title: t('mvpLaunch'),
      icon: 'Rocket',
      description: 'Convert your idea into a market-ready MVP. Rapid development approach focusing on core features, user validation, and iterative improvement.',
      features: [
        'Concept refinement',
        'Feature prioritization',
        'Rapid prototyping',
        'User testing'
      ]
    },
    {
      id: 3,
      title: t('aiAutomation'),
      icon: 'Brain',
      description: 'Leverage AI to automate routine tasks and enhance decision-making processes. Custom solutions for workflow optimization and data analysis.',
      features: [
        'Process automation',
        'AI integration',
        'Custom algorithms',
        'Data analysis'
      ]
    },
    {
      id: 4,
      title: t('training'),
      icon: 'GraduationCap',
      description: 'Tailored workshops and training sessions for teams and organizations. Skill development in Agile, AI, Web3, and digital transformation.',
      features: [
        'Customized workshops',
        'Team training',
        'Executive coaching',
        'Certification programs'
      ]
    },
    {
      id: 5,
      title: t('digitalConsulting'),
      icon: 'LineChart',
      description: 'Strategic guidance for digital transformation initiatives. Web3 implementation, blockchain solutions, and future-ready digital strategies.',
      features: [
        'Digital transformation',
        'Web3 strategy',
        'Blockchain solutions',
        'Technology roadmapping'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            {t('servicesTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            I provide expert services to help businesses innovate, transform, and thrive in the digital age through agile methodologies, cutting-edge technologies, and strategic implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  {/* Using ServiceCard for consistency */}
                  <ServiceCard 
                    title=""
                    icon={service.icon} 
                    description=""
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-8 text-center">
            My Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative p-6 bg-beige rounded-lg">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Discovery</h3>
              <p className="text-gray-700">
                Understanding your business goals, challenges, and identifying opportunities for improvement.
              </p>
            </div>
            
            <div className="relative p-6 bg-beige rounded-lg">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Strategy</h3>
              <p className="text-gray-700">
                Developing a tailored approach that aligns with your objectives and positions you for success.
              </p>
            </div>
            
            <div className="relative p-6 bg-beige rounded-lg">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Implementation</h3>
              <p className="text-gray-700">
                Executing the plan with an agile approach, ensuring flexibility and continuous improvement.
              </p>
            </div>
            
            <div className="relative p-6 bg-beige rounded-lg">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Optimization</h3>
              <p className="text-gray-700">
                Measuring results, gathering feedback, and refining the solution for optimal performance.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">How long does a typical project take?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. An MVP can typically be developed in 4-8 weeks, while larger transformations may take 3-6 months.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you work with startups and established businesses?</h3>
              <p className="text-gray-700">
                Absolutely! I tailor my approach based on your organization's size, maturity, and specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">How do you measure success?</h3>
              <p className="text-gray-700">
                Success metrics are defined at the start of each project and typically include KPIs like time-to-market, process efficiency, user satisfaction, and ROI.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Can you integrate with our existing tech stack?</h3>
              <p className="text-gray-700">
                Yes, I design solutions that integrate seamlessly with your existing technologies while introducing innovations that enhance your capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;