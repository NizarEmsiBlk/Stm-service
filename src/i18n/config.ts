import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: undefined, // Let the detector decide the initial language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Order of language detection methods
      order: ['localStorage', 'cookie', 'navigator'],
      
      // Cache user language preferences
      caches: ['localStorage', 'cookie'],
      
      // Look for language in these places
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18nextLng',
      
      // Cookie options
      cookieMinutes: 60 * 24 * 30, // 30 days
      
      // Don't convert country codes to language codes
      convertDetectedLanguage: (lng: string) => {
        // Extract language code (e.g., 'en-US' -> 'en')
        const languageCode = lng?.split('-')[0]?.toLowerCase();
        // Only return supported languages
        return ['en', 'fr', 'es'].includes(languageCode) ? languageCode : 'en';
      },
    },
    
    // Supported languages
    supportedLngs: ['en', 'fr', 'es'],
    nonExplicitSupportedLngs: true,
  });

export default i18n;