import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Digital Transformation',
    category: 'Agile Coaching',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
  },
  {
    id: 2,
    title: 'AI-Powered Platform',
    category: 'AI Automation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
  },
  {
    id: 3,
    title: 'E-commerce Redesign',
    category: 'MVP Launch',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
  },
];

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div data-aos="fade-right" data-aos-duration="600">
            <div className="divider"></div>
            <h2 className="text-primary">{t('portfolio.title')}</h2>
          </div>
          <div data-aos="fade-left" data-aos-duration="600">
            <Button to="/portfolio" variant="secondary">
              {t('portfolio.viewAll')}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <Link to={`/portfolio/${item.id}`} className="block overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;