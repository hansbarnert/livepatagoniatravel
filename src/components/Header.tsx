import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="logo-lpt-completo.png" className="h-20 w-auto sm:h-32" alt="logo" />
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
              {t('company.name')}
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['tours', 'services', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4">
            {['tours', 'services', 'gallery', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-700 hover:text-orange-500"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 w-full text-left py-2 text-gray-700 hover:text-orange-500 mt-2 border-t border-gray-200 pt-4"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;