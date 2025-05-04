import React, { useState } from 'react';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  if (isSubmitted) {
    return (
      <div 
        className="bg-white p-8 rounded-lg shadow-md text-center"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="text-5xl text-primary mb-4">✓</div>
        <h3 className="text-2xl font-semibold mb-4">
          {t('contactForm.success')}
        </h3>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="secondary"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div 
      className="bg-white p-6 md:p-8 rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            {t('contactForm.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            {t('contactForm.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="form-label">
            {t('contactForm.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="form-input"
            required
          />
        </div>
        
        <div className="text-center">
          <Button type="submit" variant="primary" icon="Send">
            {t('contactForm.submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;