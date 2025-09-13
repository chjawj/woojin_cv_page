import { motion } from 'motion/react';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToNext = () => {
    const element = document.querySelector('#expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-150"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* 텍스트 콘텐츠 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              onClick={scrollToNext}
            >
              {t('hero.cta.portfolio')}
              <ArrowDown className="ml-3 h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-lg transition-all duration-300 text-lg"
              onClick={() => window.open('https://drive.google.com/file/d/174i7phAwZSJMZNEKcIeKzoQUzYRVrkm4/view?usp=sharing', '_blank')}
            >
              <Download className="mr-3 h-6 w-6" />
              {t('hero.cta.cv')}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 표시 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 cursor-pointer"
          onClick={scrollToNext}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}