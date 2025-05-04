import React, { useState } from 'react';
import { useLanguage } from '../i18n';

// Sample portfolio data with more items
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
  {
    id: 4,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2022,
  },
  {
    id: 5,
    title: 'Web3 Wallet Integration',
    category: 'Web3',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2022,
  },
  {
    id: 6,
    title: 'Team Transformation',
    category: 'Agile Coaching',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2021,
  },
];

// Extract unique categories
const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-20 pb-20">
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <h1 className="mb-6" data-aos="fade-up" data-aos-duration="600">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Discover some of my recent projects and how I've helped clients transform their digital presence.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 mb-12 justify-center" data-aos="fade-up" data-aos-duration="600">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="card group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;