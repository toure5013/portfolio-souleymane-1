import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import enTranslations from './en.json';
import frTranslations from './fr.json';

type Translations = {
  [key: string]: any;
};

const translations: Record<string, Translations> = {
  en: enTranslations,
  fr: frTranslations,
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get the browser's language preference, defaulting to 'en'
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'fr'].includes(browserLang) ? browserLang : 'en';
  };

  // Try to get stored language preference or use browser language
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('language');
    return stored || getBrowserLanguage();
  };

  const [language, setLanguage] = useState<string>(getInitialLanguage());

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function that navigates the nested structure
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={ { language, setLanguage, t } }>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);