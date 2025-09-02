import { motion } from 'motion/react';
import { Brain, Cpu, TrendingUp, Zap, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getExpertiseItems = (t: (key: string) => string) => [
  {
    icon: Heart,
    title: t('expertise.healthcare.title'),
    description: t('expertise.healthcare.desc'),
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Cpu,
    title: t('expertise.soc.title'),
    description: t('expertise.soc.desc'),
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: t('expertise.business.title'),
    description: t('expertise.business.desc'),
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Brain,
    title: t('expertise.ai.title'),
    description: t('expertise.ai.desc'),
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Zap,
    title: t('expertise.innovation.title'),
    description: t('expertise.innovation.desc'),
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: t('expertise.leadership.title'),
    description: t('expertise.leadership.desc'),
    color: 'from-indigo-500 to-blue-500'
  }
];

export function ExpertiseSection() {
  const { t } = useLanguage();
  const expertiseItems = getExpertiseItems(t);

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('expertise.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('expertise.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* 호버 효과를 위한 그라데이션 라인 */}
              <div className={`h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </motion.div>
          ))}
        </div>

        {/* 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">13+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-600">Papers Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Patents Held</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}