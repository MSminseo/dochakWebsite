import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  return {
    t: context.t,
    currentLanguage: context.currentLanguage,
    setLanguage: context.setLanguage,
    availableLanguages: context.availableLanguages
  };
};

export default useTranslation;