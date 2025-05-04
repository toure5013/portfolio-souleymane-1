import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    position: "CTO, TechInnovate",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote: "Working with this team has transformed our approach to project management. Their Agile expertise helped us deliver our product 30% faster with significantly higher quality."
  },
  {
    id: 2,
    name: "Jean Dupont",
    position: "Founder, AI Solutions",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote: "The AI implementation strategy they designed for us has automated our core processes and improved efficiency by over 40%. Incredible insight and execution."
  },
  {
    id: 3,
    name: "Marie Bernard",
    position: "Product Manager, BlockFin",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote: "Their deep understanding of both Web3 technology and traditional software development helped us bridge the gap and create a truly innovative product."
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0;
    const newIndex = isFirstTestimonial ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1;
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
      <div className="bg-beige rounded-xl p-8 md:p-12 shadow-md">
        <div className="text-accent mb-6">
          <Quote size={40} />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-8 italic">
          "{testimonials[currentIndex].quote}"
        </p>
        
        <div className="flex items-center">
          <img 
            src={testimonials[currentIndex].image} 
            alt={testimonials[currentIndex].name}
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-bold text-dark-900">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-600">
              {testimonials[currentIndex].position}
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 right-8 flex space-x-2">
        <button 
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;