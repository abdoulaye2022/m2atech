"use client";

import { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const LanguageContext = createContext();

// Utiliser useLayoutEffect côté client pour éviter le flash
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Fonction pour obtenir la langue initiale de manière synchrone
const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'fr'; // SSR: utiliser français par défaut

  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) return savedLanguage;

  const browserLanguage = navigator.language.slice(0, 2);
  return browserLanguage === 'fr' ? 'fr' : 'en';
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Initialiser avec français par défaut pour éviter le flash (la plupart des utilisateurs sont francophones)
  const [language, setLanguage] = useState('fr');
  const [isHydrated, setIsHydrated] = useState(false);

  // Utiliser useLayoutEffect pour synchroniser la langue AVANT le premier paint
  useIsomorphicLayoutEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    setIsHydrated(true);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  // Ne pas rendre les enfants tant que la langue n'est pas hydratée
  // Cela évite le flash de contenu dans la mauvaise langue
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{ language: 'fr', changeLanguage, isLoading: true }}>
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading: false }}>
      {children}
    </LanguageContext.Provider>
  );
};