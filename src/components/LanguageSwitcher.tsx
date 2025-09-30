'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '/en.jpg' },
    { code: 'fr', name: 'Français', flag: '/fr.jpg' },
    { code: 'es', name: 'Español', flag: '/es.jpg' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    // The language persistence is now handled by the useLanguagePersistence hook
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 hover:bg-white/20 transition-all duration-300"
      >
        <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200">
          <Image
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} flag`}
            width={24}
            height={16}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-blue-50 transition-colors duration-200 ${
                i18n.language === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src={language.flag}
                  alt={`${language.name} flag`}
                  width={32}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;