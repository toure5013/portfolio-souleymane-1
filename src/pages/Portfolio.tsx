import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    title: "AI-Powered CRM System",
    category: "Web Application",
    tags: ["AI", "SaaS"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Web3 Real Estate Platform",
    category: "Blockchain",
    tags: ["Web3", "DApp"],
    image: "https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Remote Team Collaboration Tool",
    category: "SaaS",
    tags: ["Collaboration", "Productivity"],
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Healthcare AI Assistant",
    category: "AI",
    tags: ["Healthcare", "Machine Learning"],
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "NFT Marketplace",
    category: "Blockchain",
    tags: ["NFT", "Web3"],
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Agile Project Management Dashboard",
    category: "Web Application",
    tags: ["Agile", "Dashboard"],
    image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const categories = ["All", "Web Application", "Blockchain", "SaaS", "AI"];

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            {t('portfolio')}
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Explore some of my recent projects across web applications, blockchain technologies, 
            AI implementations, and digital transformations.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div 
          className="flex flex-wrap gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-accent bg-opacity-20 text-white px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-accent font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl text-white font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;