"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Récupérer la langue depuis localStorage ou utiliser la langue du navigateur
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    const browserLanguage = typeof window !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
    
    const initialLanguage = savedLanguage || (browserLanguage === 'fr' ? 'fr' : 'en');
    setLanguage(initialLanguage);
    setIsLoading(false);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};