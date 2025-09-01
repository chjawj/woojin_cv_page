import { motion } from 'motion/react';
import { BookOpen, FileText, Award, ExternalLink, Calendar, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getEducation = (language: 'ko' | 'en') => [
  {
    degree: language === 'ko' ? '전기및전자공학부 박사' : 'Ph.D. in Electrical and Electronic Engineering',
    institution: 'KAIST (한국과학기술원)',
    institutionEn: 'KAIST (Korea Advanced Institute of Science and Technology)',
    period: '2019 - 2023',
    thesis: language === 'ko' 
      ? '인공와우 시스템을 위한 에너지 효율적이고 재구성 가능한 신경 자극 회로 기술'
      : 'Energy-Efficient and Reconfigurable Neural Stimulation Circuit Technology for Cochlear Implant Systems',
    advisor: language === 'ko' ? '제민규 교수' : 'Prof. Min-Kyu Je',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: language === 'ko' ? '전기및전자공학부 석사' : 'M.S. in Electrical and Electronic Engineering',
    institution: 'KAIST (한국과학기술원)',
    institutionEn: 'KAIST (Korea Advanced Institute of Science and Technology)',
    period: '2008 - 2010',
    thesis: language === 'ko'
      ? '전원/접지 잡음에 의한 플래시 아날로그 디지털 컨버터의 성능 저하에 대한 모델링과 분석'
      : 'Modeling and Analysis of Performance Degradation in Flash Analog-to-Digital Converters due to Power/Ground Noise',
    advisor: language === 'ko' ? '김정호 교수' : 'Prof. Jung-Ho Kim',
    color: 'from-purple-500 to-violet-500'
  },
  {
    degree: language === 'ko' ? '전기및전자공학부 학사' : 'B.S. in Electrical and Electronic Engineering',
    institution: 'KAIST (한국과학기술원)',
    institutionEn: 'KAIST (Korea Advanced Institute of Science and Technology)',
    period: '2003 - 2007',
    specialization: language === 'ko' ? '반도체 설계 및 분석' : 'Semiconductor Design and Analysis',
    color: 'from-green-500 to-emerald-500'
  }
];

const publications = [
  {
    title: 'Ultra-Low Power Neural Signal Processing SoC for Implantable Brain-Computer Interfaces',
    authors: ['W. Ahn', 'S. Kim', 'J. Lee', 'H. Park'],
    venue: 'IEEE International Solid-State Circuits Conference (ISSCC)',
    year: '2021',
    type: 'Conference',
    citations: 45,
    impact: 'Top-tier conference in semiconductor design',
    link: '#'
  },
  {
    title: 'Wireless Power Transfer System for Biomedical Implants: Design and Safety Considerations',
    authors: ['W. Ahn', 'M. Jung', 'K. Cho'],
    venue: 'IEEE Transactions on Biomedical Engineering',
    year: '2020',
    type: 'Journal',
    citations: 73,
    impact: 'Impact Factor: 4.3',
    link: '#'
  },
  {
    title: 'AI-Driven Digital Therapeutics Platform for Personalized Mental Health Care',
    authors: ['W. Ahn', 'Y. Son', 'D. Kim', 'J. Park', 'S. Lee'],
    venue: 'Nature Digital Medicine',
    year: '2023',
    type: 'Journal',
    citations: 28,
    impact: 'Impact Factor: 12.8',
    link: '#'
  },
  {
    title: 'Real-time EEG Signal Analysis Using Machine Learning for Seizure Detection',
    authors: ['W. Ahn', 'H. Kim', 'J. Yoon'],
    venue: 'IEEE Transactions on Neural Systems and Rehabilitation Engineering',
    year: '2019',
    type: 'Journal',
    citations: 89,
    impact: 'Impact Factor: 4.8',
    link: '#'
  },
  {
    title: 'Energy-Efficient Memory Architecture for IoT Healthcare Devices',
    authors: ['W. Ahn', 'C. Park', 'S. Choi'],
    venue: 'ACM/IEEE Design Automation Conference (DAC)',
    year: '2018',
    type: 'Conference',
    citations: 56,
    impact: 'Premier conference in electronic design automation',
    link: '#'
  }
];

const patents = [
  {
    title: '체내 이식형 의료기기용 무선 전력 전송 시스템',
    number: 'KR 10-2021-0045678',
    status: '등록',
    year: '2021',
    inventors: ['안우진', '김성호', '이준혁'],
    description: '생체 안전성을 고려한 고효율 무선 전력 전송 기술'
  },
  {
    title: '인공지능 기반 뇌파 신호 분석 및 질환 예측 시스템',
    number: 'KR 10-2022-0123456',
    status: '등록',
    year: '2022',
    inventors: ['안우진', '박지영', '최민수'],
    description: '딥러닝을 활용한 실시간 뇌파 신호 분석 및 신경계 질환 조기 진단'
  },
  {
    title: '개인화된 디지털 치료제 플랫폼 및 운영 방법',
    number: 'KR 10-2023-0087654',
    status: '출원',
    year: '2023',
    inventors: ['안우진', '손영호', '김도현'],
    description: 'AI 기반 개인맞춤형 디지털 치료제 생성 및 모니터링 시스템'
  },
  {
    title: '저전력 생체신호 처리용 시스템온칩',
    number: 'US 11,234,567',
    status: '등록',
    year: '2020',
    inventors: ['W. Ahn', 'S. Kim', 'J. Lee'],
    description: '극저전력으로 동작하는 생체신호 수집 및 처리 전용 칩셋'
  },
  {
    title: '웨어러블 헬스케어 디바이스의 데이터 보안 시스템',
    number: 'KR 10-2020-0098765',
    status: '등록',
    year: '2020',
    inventors: ['안우진', '정민규', '조경호'],
    description: '헬스케어 데이터의 안전한 수집, 전송 및 저장을 위한 보안 기술'
  }
];

export function ResearchSection() {
  const { language, t } = useLanguage();
  const education = getEducation(language);

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('research.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('research.subtitle')}
          </p>
        </motion.div>

        {/* 학력 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">{t('research.education')}</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center mb-4`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  {language === 'en' ? edu.institutionEn : edu.institution}
                </p>
                <p className="text-gray-500 mb-3">{edu.period}</p>
                
                <div className="space-y-1 text-sm text-gray-600">
                  {edu.thesis && <p><strong>{t('research.thesis')}:</strong> {edu.thesis}</p>}
                  {edu.advisor && <p><strong>{t('research.advisor')}:</strong> {edu.advisor}</p>}
                  {edu.specialization && <p><strong>{t('research.specialization')}:</strong> {edu.specialization}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 논문 발표 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">{t('research.publications')}</h3>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pub.type === 'Journal' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {pub.type}
                      </div>
                      <span className="text-gray-500 text-sm">{pub.year}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {pub.title}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <p className="text-gray-600 text-sm">{pub.authors.join(', ')}</p>
                    </div>
                    
                    <p className="text-blue-600 font-medium mb-2">{pub.venue}</p>
                    <p className="text-gray-500 text-sm">{pub.impact}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{pub.citations}</div>
                        <div className="text-xs text-gray-500">{t('research.citations')}</div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 특허 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900">{t('research.patents')}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    patent.status === '등록' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patent.status}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{patent.year}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {patent.title}
                </h4>
                
                <p className="text-purple-600 font-medium mb-3">{patent.number}</p>
                
                <p className="text-gray-600 text-sm mb-4">{patent.description}</p>
                
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-gray-500 text-sm">
                    <strong>{t('research.inventors')}:</strong> {patent.inventors.join(', ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 연구 성과 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{publications.length}</div>
              <div className="text-blue-100">{t('research.publications')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{patents.length}</div>
              <div className="text-blue-100">{t('research.patents')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {publications.reduce((sum, pub) => sum + pub.citations, 0)}
              </div>
              <div className="text-blue-100">{language === 'ko' ? '총 인용수' : 'Total Citations'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">{t('research.collaborations')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}