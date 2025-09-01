import { motion } from 'motion/react';
import { Calendar, MapPin, Award, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getExperiences = (language: 'ko' | 'en') => [
  {
    period: '2024 - ' + (language === 'ko' ? '현재' : 'Present'),
    company: '㈜베이글랩스',
    companyEn: 'Bagle Labs Co., Ltd.',
    position: language === 'ko' ? 'CTO (Chief Technology Officer)' : 'CTO (Chief Technology Officer)',
    location: language === 'ko' ? '서울, 대한민국' : 'Seoul, South Korea',
    description: language === 'ko' 
      ? '디지털 헬스케어 기술 전략 수립 및 AI 기반 DTx 솔루션 개발 총괄. 기술팀 리더십과 혁신적인 제품 개발을 통해 회사의 기술 경쟁력 강화.'
      : 'Leading digital healthcare technology strategy and overseeing AI-based DTx solution development. Strengthening company\'s technological competitiveness through technical team leadership and innovative product development.',
    achievements: language === 'ko' ? [
      'AI 기반 헬스케어 플랫폼 아키텍처 설계 및 구현',
      '기술팀 규모 확장 및 조직 체계 구축',
      '글로벌 의료기기 인증 프로세스 확립'
    ] : [
      'AI-based healthcare platform architecture design and implementation',
      'Technical team and organizational structure establishment',
      'Global medical device certification process establishment'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    period: '2016 - 2024',
    company: '㈜토닥',
    companyEn: 'Todoc Co., Ltd.',
    position: language === 'ko' ? 'Division Director' : 'Division Director',
    location: language === 'ko' ? '서울, 대한민국' : 'Seoul, South Korea',
    description: language === 'ko'
      ? '신경조절 사업부 총괄. 다양한 헬스케어 서비스의 기술적 혁신을 주도하며 시장 확장에 기여.'
      : 'Leading neuromodulation division. Driving technological innovation in various healthcare services and contributing to market expansion.',
    achievements: language === 'ko' ? [
      '신경조절 제품 개발 및 운영',
      '기술팀 규모 확장 및 조직 체계 구축',
      '인공와우 체내이식형 SoC 설계 및 개발'
    ] : [
      'Neuromodulation product development and operation',
      'Technical team and organizational structure establishment',
      'Cochlear implant system SoC design and development'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    period: '2015 - 2016',
    company: '㈜와이브레인',
    companyEn: 'Ybrain Inc.',
    position: language === 'ko' ? '수석연구원' : 'Principal Engineer',
    location: language === 'ko' ? '성남, 대한민국' : 'Seongnam, South Korea',
    description: language === 'ko'
      ? '뇌 신경조절 의료기기 스타트업에서 하드웨어 설계 및 개발.'
      : 'Designing and developing hardware at a specialized neural modulation medical device startup.',
    achievements: language === 'ko' ? [
      '뇌파 모니터링 하드웨어 설계',
      '의료기기 안전성 검증 프로세스 구축'
    ] : [
      'Implantable EEG monitoring hardware design',
      'Medical device safety verification process establishment'
    ],
    color: 'from-purple-500 to-violet-500'
  },
  {
    period: '2012 - 2015',
    company: '㈜삼성전자',
    companyEn: 'Samsung Electronics',
    position: language === 'ko' ? '선임연구원' : 'Engineer',
    location: language === 'ko' ? '화성, 대한민국' : 'Hwaseong, South Korea',
    description: language === 'ko'
      ? '시스템LSI 사업부에서 모바일 프로세서 메모리 인터페이스 분석 및 최적화. 대규모 반도체 프로젝트 경험을 통한 체계적인 하드웨어 개발 역량 습득.'
      : 'Mobile processor interface analysis and optimization in System LSI division. Acquiring systematic hardware development capabilities through large-scale semiconductor project experience.',
    achievements: language === 'ko' ? [
      'Exynos 모바일 프로세서 메모리 인터페이스 분석 및 최적화',
      'HBM 초기버전인 TSV Wide-I/O 메모리 인터페이스 구조 분석 및 최적화',
      'Signal/Power Integrity 분석 및 가이드 제공'
    ] : [
      'Exynos mobile processor memory interface analysis and optimization',
      'TSV Wide-I/O memory interface structure analysis and optimization',
      'Signal/Power Integrity analysis and guide provision'
    ],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    period: '2010 - 2012',
    company: 'KAIST Institute',
    companyEn: 'KAIST Institute',
    position: language === 'ko' ? '연구원' : 'Research Engineer',
    location: language === 'ko' ? '대전, 대한민국' : 'Daejeon, South Korea',
    description: language === 'ko'
      ? '무선 충전 환경 셋업 및 시뮬레이션 분석, 시제품 기구 개발'
      : 'Wireless charging environment setup and simulation analysis, product development',
    achievements: language === 'ko' ? [
      '근거리(2m 이내) 무선 충전용, 비접촉식 무선 충전용 시제품 개발',
      '시뮬레이션 분석 및 실제 검증을 통한 특허/논문 작성'
    ] : [
      'Wireless charging product development',
      'Simulation analysis and actual verification to write patents/papers'
    ],
    color: 'from-orange-500 to-red-500'
  }
];

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const experiences = getExperiences(language);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:mr-8 md:text-right' : 'md:pl-8 md:ml-8'
              } pl-16 md:pl-0`}
            >
              {/* 타임라인 도트 */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10`}></div>

              {/* 경력 카드 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 group hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {language === 'en' ? exp.companyEn : exp.company}
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-lg font-semibold text-blue-600">{exp.position}</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="font-medium text-gray-700">{t('experience.achievements')}</span>
                  </div>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* 카드 장식 */}
                <div className={`absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-r ${exp.color} opacity-10 rounded-full blur-lg group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}