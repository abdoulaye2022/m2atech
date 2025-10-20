"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value;
  };

  return { t, language };
};