import i18n from '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export type Language = 'EN' | 'RU' | 'TJ';


export const useLocalization = () => {
  const { t } = useTranslation();
  const [lng, setLng] = useState<Language>(() => {
    const saved = localStorage.getItem("app-language")?.toUpperCase() as Language;
    return saved || (i18n.language.toUpperCase() as Language);
  });

  useEffect(() => {
    const handleLanguageChange = (language: string) => {
      const lang = language.toUpperCase() as Language;
      setLng(lang);
      localStorage.setItem("app-language", lang); 
    };

    i18n.on('languageChanged', handleLanguageChange);

    const savedLang = localStorage.getItem("app-language");
    if (savedLang) {
      i18n.changeLanguage(savedLang.toLowerCase());
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language.toLowerCase());
  };

  return { t, lng, changeLanguage };
};
