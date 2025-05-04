import React from 'react';
import { useLanguage } from '../../i18n';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-selector"
      data-aos="fade-left"
      data-aos-duration="400"
    >
      {t('common.languageSelector')}
    </button>
  );
};

export default LanguageSelector;