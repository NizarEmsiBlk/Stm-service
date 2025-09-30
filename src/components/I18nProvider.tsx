'use client';

import { useEffect, useState } from 'react';
import i18n from '../i18n/config';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // This ensures we only run on the client side after hydration
    const handleLanguageInit = () => {
      // Check if we're in the browser
      if (typeof window !== 'undefined') {
        const storedLanguage = localStorage.getItem('i18nextLng');
        
        if (storedLanguage && ['en', 'fr', 'es'].includes(storedLanguage)) {
          // Only change language if it's different from current
          if (i18n.language !== storedLanguage) {
            i18n.changeLanguage(storedLanguage);
          }
        }
      }
      
      setIsHydrated(true);
    };

    // Run immediately if i18n is already initialized
    if (i18n.isInitialized) {
      handleLanguageInit();
    } else {
      // Wait for i18n to be initialized
      i18n.on('initialized', handleLanguageInit);
    }

    // Cleanup
    return () => {
      i18n.off('initialized', handleLanguageInit);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until client-side is ready
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-blue-600 text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}