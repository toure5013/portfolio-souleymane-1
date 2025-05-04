import React, { useState } from 'react';
import { useLanguage } from '../../i18n';
import Button from '../common/Button';

const ProjectForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    objective: '',
    audience: '',
    stage: '',
    techPreference: [] as string[],
    challenges: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [name]: [...(prev[name as keyof typeof formData] as string[]), value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: (prev[name as keyof typeof formData] as string[]).filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      objective: '',
      audience: '',
      stage: '',
      techPreference: [],
      challenges: '',
      timeline: '',
      name: '',
      email: '',
      phone: '',
      company: '',
    });
  };

  if (isSubmitted) {
    return (
      <div 
        className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="text-5xl text-primary mb-4">✓</div>
        <h3 className="text-2xl font-semibold mb-4">
          {t('projectForm.confirmation')}
        </h3>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="secondary"
        >
          Submit another project
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
        <div className="mb-6">
          <label htmlFor="objective" className="form-label">
            {t('projectForm.objective')}
          </label>
          <textarea
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            rows={3}
            className="form-input"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="audience" className="form-label">
            {t('projectForm.audience')}
          </label>
          <textarea
            id="audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            rows={2}
            className="form-input"
            required
          />
        </div>

        <div className="mb-6">
          <label className="form-label">{t('projectForm.stage')}</label>
          <div className="space-y-2">
            {['idea', 'specs', 'prototype', 'production'].map((stage) => (
              <div key={stage} className="flex items-center">
                <input
                  type="radio"
                  id={`stage-${stage}`}
                  name="stage"
                  value={stage}
                  checked={formData.stage === stage}
                  onChange={handleChange}
                  className="form-radio"
                  required
                />
                <label htmlFor={`stage-${stage}`}>
                  {t(`projectForm.stageOptions.${stage}`)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="form-label">
            {t('projectForm.techPreference')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['web', 'mobile', 'ai', 'web3', 'undefined'].map((tech) => (
              <div key={tech} className="flex items-center">
                <input
                  type="checkbox"
                  id={`tech-${tech}`}
                  name="techPreference"
                  value={tech}
                  checked={formData.techPreference.includes(tech)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <label htmlFor={`tech-${tech}`}>
                  {t(`projectForm.techOptions.${tech}`)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="challenges" className="form-label">
            {t('projectForm.challenges')}
          </label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            rows={3}
            className="form-input"
            required
          />
        </div>

        <div className="mb-6">
          <label className="form-label">{t('projectForm.timeline')}</label>
          <div className="space-y-2">
            {['asap', '1to3', '3plus'].map((timeline) => (
              <div key={timeline} className="flex items-center">
                <input
                  type="radio"
                  id={`timeline-${timeline}`}
                  name="timeline"
                  value={timeline}
                  checked={formData.timeline === timeline}
                  onChange={handleChange}
                  className="form-radio"
                  required
                />
                <label htmlFor={`timeline-${timeline}`}>
                  {t(`projectForm.timelineOptions.${timeline}`)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-8 mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {t('contactForm.title')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="form-label">
                {t('projectForm.contact.name')}
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
            
            <div>
              <label htmlFor="email" className="form-label">
                {t('projectForm.contact.email')}
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
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="form-label">
                {t('projectForm.contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="form-label">
                {t('projectForm.contact.company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button type="submit" variant="primary" icon="Send">
            {t('projectForm.submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;