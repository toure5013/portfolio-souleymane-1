import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "AI-Powered CRM System",
    category: "Web Application",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    delay: 100
  },
  {
    id: 2,
    title: "Web3 Real Estate Platform",
    category: "Blockchain",
    image: "https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    delay: 200
  },
  {
    id: 3,
    title: "Remote Team Collaboration Tool",
    category: "SaaS",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    delay: 300
  }
];

const PortfolioPreview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/portfolio/${project.id}`}
          className="group"
          data-aos="zoom-in"
          data-aos-delay={project.delay}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-sm text-accent font-medium mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl text-white font-bold">
                {project.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioPreview;