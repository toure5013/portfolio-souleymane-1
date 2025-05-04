import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import PortfolioPreview from '../components/PortfolioPreview';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('agileCoaching'),
      icon: 'UserCheck',
      description: 'Help teams adopt Agile methodologies and improve their processes.'
    },
    {
      id: 2,
      title: t('mvpLaunch'),
      icon: 'Rocket',
      description: 'Build and launch minimum viable products quickly and efficiently.'
    },
    {
      id: 3,
      title: t('aiAutomation'),
      icon: 'Brain',
      description: 'Implement AI solutions to automate repetitive tasks and improve efficiency.'
    },
    {
      id: 4,
      title: t('training'),
      icon: 'GraduationCap',
      description: 'Provide training and workshops on Agile, AI, Web3, and digital transformation.'
    },
    {
      id: 5,
      title: t('digitalConsulting'),
      icon: 'LineChart',
      description: 'Strategic consulting for digital projects and Web3 implementation.'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-dark-900"
              data-aos="fade-up"
            >
              {t('recentWork')}
            </h2>
            <Link 
              to="/portfolio" 
              className="flex items-center text-accent hover:underline font-medium"
              data-aos="fade-left"
            >
              {t('viewAll')}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <PortfolioPreview />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-12 text-center"
            data-aos="fade-up"
          >
            {t('servicesTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img 
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional working with team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('aboutMe')}
              </h2>
              <p className="text-gray-300 mb-6">
                Certified Scrum Master, trainer, speaker, and developer with strong skills in Agility, Generative AI, Web3, application development, and change management.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-accent mt-1 mr-3" />
                  <span>Scrum Master & Agile Coach</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-accent mt-1 mr-3" />
                  <span>AI & Web3 Implementation</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-accent mt-1 mr-3" />
                  <span>Digital Project Management</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-accent mt-1 mr-3" />
                  <span>Training & Workshops</span>
                </li>
              </ul>
              
              <Link to="/about" className="btn-accent">
                {t('aboutMe')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-12 text-center"
            data-aos="fade-up"
          >
            Testimonials
          </h2>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div 
          className="container mx-auto px-4 text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('tellMeAbout')}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {t('formIntro')}
          </p>
          <Link to="/project" className="btn-white">
            {t('cta')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;