'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguagePersistence = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const restoreLanguage = () => {
      try {
        // Try to get stored language
        const storedLanguage = localStorage.getItem('i18nextLng');
        
        if (storedLanguage && ['en', 'fr', 'es'].includes(storedLanguage)) {
          // Only change if different from current language
          if (i18n.language !== storedLanguage) {
            i18n.changeLanguage(storedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to restore language preference:', error);
      }
    };

    // Restore language immediately if i18n is ready
    if (i18n.isInitialized) {
      restoreLanguage();
    }

    // Listen for language changes and persist them
    const handleLanguageChange = (lng: string) => {
      try {
        localStorage.setItem('i18nextLng', lng);
        document.cookie = `i18nextLng=${lng}; max-age=${60 * 60 * 24 * 30}; path=/`;
      } catch (error) {
        console.warn('Failed to persist language preference:', error);
      }
    };

    // Add event listener for language changes
    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
};