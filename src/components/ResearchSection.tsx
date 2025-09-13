import React from 'react';
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
    title: 'An Energy-Efficient Stimulation System Based on Adaptive Dynamic Voltage Switching Control for Cochlear Implants',
    authors: ['W. Ahn, K.-H. Nguyen, H. Lee, K. S. Min, S. Ha and M. Je'],
    venue: 'IEEE Transactions on Biomedical Circuits and Systems (TBCAS)',
    year: '2025',
    type: 'Journal',
    citations: 1,
    impact: 'Impact Factor: 5.4',
    link: 'https://ieeexplore.ieee.org/document/10752368'
  },
  {
    title: 'An Energy-Efficient, Scalable Neural Stimulation IC with Adaptive Dynamic Voltage Switching for Cochlear Implant System',
    authors: ['W. Ahn et al.'],
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)',
    year: '2023',
    type: 'Conference',
    citations: 3,
    impact: 'Impact Factor: 1.2',
    link: 'https://ieeexplore.ieee.org/document/10181719'
  },
  {
    title: 'A Reconfigurable Neural Stimulation IC With a High-Resolution Strength Control and In-Situ Neural Recording Function for Cochlear Implant Systems',
    authors: ['W. Ahn et al.'],
    venue: 'IEEE Solid-State Circuits Letters',
    year: '2022',
    type: 'Journal',
    citations: 14,
    impact: 'Impact Factor: 2.0',
    link: 'https://ieeexplore.ieee.org/document/9782685'
  },
  {
    title: 'A Neural Stimulation IC Based on a Reconfigurable Current DAC with In-Situ Neural Recording Function for Cochlear Implant Systems',
    authors: ['W. Ahn et al.'],
    venue: '2021 IEEE Asian Solid-State Circuits Conference (A-SSCC)',
    year: '2021',
    type: 'Conference',
    citations: 3,
    link: '#'
  },
  {
    title: 'Design of coupled resonators for wireless power transfer to mobile devices using magnetic field shaping." Electromagnetic Compatibility (EMC)',
    authors: ['W. Ahn et al.'],
    venue: 'IEEE International Symposium on Electromagnetic Compatibility, EMC',
    year: '2012',
    type: 'Conference',
    citations: 19,
    link: 'https://scholarsmine.mst.edu/ele_comeng_facwork/4224/'
  }
];

const patents = [
  {
    title: '미주신경자극 기능을 구비하는 무선 이어폰',
    number: 'KR 10-2021-0140996',
    status: '등록',
    year: '2023',
    inventors: ['안우진', '박대관', '윤민수','민규식','이호승'],
    description: '미주신경자극 기능을 갖춘 무선 이어폰은 귓구멍에 삽입되는 이어폰부, 귓바퀴 안쪽에 접촉되는 전극부, 그리고 신경자극의 초기 설정·조절·피드백을 제어하는 컨트롤러를 포함함'
  },
  {
    title: '인공와우 시스템을 위한 신경 자극기',
    number: 'KR 10-2022-0170788',
    status: '등록',
    year: '2025',
    inventors: ['안우진', '제민규', '민규식','이호승'],
    description: '인공와우 시스템에서 기준 전류, 오프셋 전류, 증분 전류를 제어하는 회로를 통해 글리치 노이즈를 최소화하고 보다 정확한 신경 자극 신호를 제공하는 신경 자극기'
  },
  {
    title: '인공와우 시스템을 위한 적응형 동적 신경자극전압 스위칭 방법',
    number: 'KR 10-2023-0112076',
    status: '출원',
    year: '2023',
    inventors: ['안우진', '제민규', '민규식','이호승'],
    description: '인공와우 시스템을 위한 적응형 동적 신경자극전압 스위칭 방법'
  },
  {
    title: '외장 마이크를 위한 인공 와우 외부기',
    number: 'KR 10-2020-0104043',
    status: '등록',
    year: '2023',
    inventors: ['민규식','이호승','안우진','이승훈','박종혁','임정우','김은수',],
    description: '사용자 옆머리에 부착되는 인공와우 외부기에 외장 마이크를 연결하여, 내장 마이크 및 외장 마이크로 수집한 소리를 제어장치에서 처리해 인공와우 이식기로 전달하는 장치'
  },
  {
    title: '신경 보철용 다채널 전류 자극기',
    number: 'KR 10-2017-0136076',
    status: '등록',
    year: '2019',
    inventors: ['박정환', '이호승', '안우진'],
    description: '신경 보철용 다채널 전류 자극기에 관한 것으로, 채널별 자극 순서에 따라 직류전류를 스위칭해 이상 전류 펄스를 발생시키되 DAC 스위칭 노이즈를 최소화하여 채널 간 인터벌을 줄이고 동일 시간에 더 많은 채널을 CIS 방식으로 자극할 수 있도록 한 것'
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
                onClick={() => {
                  if (pub.link && pub.link !== '#') {
                    window.open(pub.link, '_blank', 'noopener');
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && pub.link && pub.link !== '#') {
                    e.preventDefault();
                    window.open(pub.link, '_blank', 'noopener');
                  }
                }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
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
                      <a
                        href={pub.link}
                        target={pub.link && pub.link.startsWith('http') ? '_blank' : undefined}
                        rel={pub.link && pub.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        aria-label="Open publication link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
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
              <div className="text-3xl font-bold mb-2">{patents.length}+</div>
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