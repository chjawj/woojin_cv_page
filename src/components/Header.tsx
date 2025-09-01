import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getNavigationItems = (t: (key: string) => string) => [
  { name: t('nav.home'), href: '#hero' },
  { name: t('nav.expertise'), href: '#expertise' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.research'), href: '#research' },
  { name: t('nav.contact'), href: '#contact' }
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationItems = getNavigationItems(t);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고/이름 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-xl text-gray-900 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            WOOJIN AHN
          </motion.div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
            
            {/* 언어 전환 버튼 */}
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  language === 'ko' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  language === 'en' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <Globe size={20} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* 모바일 언어 전환 */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('ko')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    language === 'ko' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    language === 'en' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}