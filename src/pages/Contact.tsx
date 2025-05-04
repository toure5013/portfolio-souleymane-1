import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log(formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            {t('contact')}
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Have a question or want to discuss a potential project? I'd love to hear from you. 
            Fill out the form below or use the contact information provided.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2" data-aos="fade-right">
            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Check className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-beige p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-accent mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@capture.com" className="text-gray-700 hover:text-accent transition-colors">
                      hello@capture.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+33612345678" className="text-gray-700 hover:text-accent transition-colors">
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-accent mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-700">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-900 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">
                Available For
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                  <span>Project Consulting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                  <span>Agile Coaching</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                  <span>Workshop Facilitation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                  <span>Training Sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;