import React from 'react';
import { useLanguage } from '../i18n';
import ContactForm from '../components/contact/ContactForm';
import { Icons } from '../assets/icons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Paris, France',
      link: 'https://maps.google.com/?q=Paris,France'
    }
  ];

  const socialLinks = [
    { icon: 'Linkedin', url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: 'Twitter', url: 'https://twitter.com/', label: 'Twitter' },
    { icon: 'Github', url: 'https://github.com/', label: 'GitHub' },
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <h1 className="mb-6" data-aos="fade-up" data-aos-duration="600">
            {t('contactForm.title')}
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Let's discuss how we can help your business thrive in the digital era.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-primary text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-secondary/50 p-3 rounded-lg mr-4">
                      {React.createElement(Icons[item.icon as keyof typeof Icons], { 
                        size: 24,
                        className: "text-primary"
                      })}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{item.label}</h3>
                      <a 
                        href={item.link} 
                        className="text-primary hover:underline"
                        target={item.icon === 'MapPin' ? '_blank' : undefined}
                        rel={item.icon === 'MapPin' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-secondary/50 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={link.label}
                    >
                      {React.createElement(Icons[link.icon as keyof typeof Icons], { size: 24 })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;