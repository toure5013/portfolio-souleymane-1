import React, { useState } from 'react';
import { useLanguage } from '../../i18n';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
      position: t('testimonials.testimonial1.position'),
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
      position: t('testimonials.testimonial2.position'),
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="600">
          <div className="divider mx-auto"></div>
          <h2 className="text-primary mb-6">{t('testimonials.title')}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                data-aos={index === 0 ? "fade-up" : ""}
                data-aos-duration="800"
              >
                <div className="bg-secondary/30 p-8 md:p-12 rounded-lg relative">
                  <div className="text-5xl text-primary/20 font-serif absolute top-4 left-6">"</div>
                  <p className="text-lg md:text-xl mb-8 relative z-10">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;