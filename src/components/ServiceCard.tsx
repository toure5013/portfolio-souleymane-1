import React from 'react';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, delay = 0 }) => {
  // Dynamically get the icon from lucide-react
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Star;

  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
        <IconComponent size={24} className="text-accent" />
      </div>
      
      <h3 className="text-xl font-bold text-dark-900 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;