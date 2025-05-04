import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const ProjectForm: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    goal: '',
    audience: '',
    status: '',
    techPreference: [] as string[],
    challenges: '',
    launchTime: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return { ...prev, techPreference: [...prev.techPreference, name] };
      } else {
        return { ...prev, techPreference: prev.techPreference.filter(item => item !== name) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log(formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      goal: '',
      audience: '',
      status: '',
      techPreference: [],
      challenges: '',
      launchTime: '',
      name: '',
      email: '',
      phone: '',
      company: ''
    });
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              {t('tellMeAbout')}
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              {t('formIntro')}
            </p>
          </div>
          
          {submitted ? (
            <div 
              className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
              data-aos="fade-up"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Check className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-green-800">
                  {t('thankYou')}
                </h3>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
              <div className="space-y-8">
                {/* Project Goal */}
                <div>
                  <label htmlFor="goal" className="block text-lg font-medium text-dark-900 mb-2">
                    {t('projectGoal')}
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={4}
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                  ></textarea>
                </div>
                
                {/* Target Audience */}
                <div>
                  <label htmlFor="audience" className="block text-lg font-medium text-dark-900 mb-2">
                    {t('targetAudience')}
                  </label>
                  <textarea
                    id="audience"
                    name="audience"
                    rows={3}
                    value={formData.audience}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                  ></textarea>
                </div>
                
                {/* Project Status */}
                <div>
                  <label className="block text-lg font-medium text-dark-900 mb-2">
                    {t('projectStatus')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="status"
                        value="justIdea"
                        checked={formData.status === 'justIdea'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('justIdea')}
                    </label>
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="status"
                        value="specsDefined"
                        checked={formData.status === 'specsDefined'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('specsDefined')}
                    </label>
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="status"
                        value="prototypeInProgress"
                        checked={formData.status === 'prototypeInProgress'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('prototypeInProgress')}
                    </label>
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="status"
                        value="inProduction"
                        checked={formData.status === 'inProduction'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('inProduction')}
                    </label>
                  </div>
                </div>
                
                {/* Tech Preference */}
                <div>
                  <label className="block text-lg font-medium text-dark-900 mb-2">
                    {t('techPreference')}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="web"
                        checked={formData.techPreference.includes('web')}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {t('web')}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="mobile"
                        checked={formData.techPreference.includes('mobile')}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {t('mobile')}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="ai"
                        checked={formData.techPreference.includes('ai')}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {t('ai')}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="web3"
                        checked={formData.techPreference.includes('web3')}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {t('web3')}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="notDefined"
                        checked={formData.techPreference.includes('notDefined')}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      {t('notDefined')}
                    </label>
                  </div>
                </div>
                
                {/* Challenges */}
                <div>
                  <label htmlFor="challenges" className="block text-lg font-medium text-dark-900 mb-2">
                    {t('challenges')}
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={formData.challenges}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                  ></textarea>
                </div>
                
                {/* Launch Time */}
                <div>
                  <label className="block text-lg font-medium text-dark-900 mb-2">
                    {t('launchTime')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="launchTime"
                        value="asap"
                        checked={formData.launchTime === 'asap'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('asap')}
                    </label>
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="launchTime"
                        value="oneToThreeMonths"
                        checked={formData.launchTime === 'oneToThreeMonths'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('oneToThreeMonths')}
                    </label>
                    <label className="bg-white rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-accent hover:bg-beige transition-colors">
                      <input
                        type="radio"
                        name="launchTime"
                        value="moreThanThreeMonths"
                        checked={formData.launchTime === 'moreThanThreeMonths'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {t('moreThanThreeMonths')}
                    </label>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
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
                        className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-300 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full md:w-auto"
                  >
                    {t('submit')}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;