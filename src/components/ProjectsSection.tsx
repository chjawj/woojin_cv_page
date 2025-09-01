import { motion } from 'motion/react';
import { ExternalLink, Github, Award, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    title: '덱슐린',
    category: '디지털 치료제',
    description: '당뇨병 환자를 위한 AI 기반 혈당 관리 솔루션. 개인화된 인슐린 투여 가이드와 실시간 모니터링 기능 제공.',
    tech: ['React Native', 'AI/ML', 'IoT', 'Cloud'],
    role: 'CTO & 기술 총괄',
    timeline: '2023 - 현재',
    achievements: ['FDA 510(k) 신청 진행 중', '10,000+ 사용자 확보', 'B2B 파트너십 5건 체결'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '근튼튼',
    category: '재활 의료기기',
    description: '근골격계 재활을 위한 스마트 운동 플랫폼. AI 기반 동작 분석과 개인화된 운동 처방 시스템.',
    tech: ['Computer Vision', 'Machine Learning', 'React', 'Python'],
    role: '기술 개발 리드',
    timeline: '2022 - 2023',
    achievements: ['임상시험 완료', '의료기기 인증 획득', '재활병원 5곳 도입'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'alamo_c1',
    category: '체내 이식형 SoC',
    description: '차세대 신경조절 치료를 위한 초저전력 체내 이식형 시스템온칩. 무선 통신과 신호처리 기능 통합.',
    tech: ['ASIC Design', 'Analog Circuit', 'RF Communication', 'FPGA'],
    role: '수석 설계 엔지니어',
    timeline: '2019 - 2021',
    achievements: ['특허 3건 출원', 'IEEE 논문 발표', '프로토타입 검증 완료'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'mindtodoc',
    category: '정신건강 플랫폼',
    description: 'AI 기반 정신건강 상담 및 모니터링 플랫폼. 실시간 감정 분석과 개인화된 치료 가이드 제공.',
    tech: ['Natural Language Processing', 'React', 'Node.js', 'MongoDB'],
    role: '공동창업자 & CTO',
    timeline: '2021 - 2023',
    achievements: ['시리즈 A 투자 유치', '50,000+ 다운로드', '정신건강의학과 연계'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: '뇌파 모니터링 제품',
    category: '신경과학 기술',
    description: '실시간 뇌파 신호 수집 및 분석을 위한 웨어러블 디바이스. 수면 패턴 분석과 인지 기능 평가 기능.',
    tech: ['Signal Processing', 'Embedded Systems', 'Bluetooth', 'Mobile App'],
    role: '기술 개발 총괄',
    timeline: '2018 - 2020',
    achievements: ['CE 마킹 획득', '국제 전시회 참가', '기술이전 성공'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: '무선 충전 시제품',
    category: '전력 전송 기술',
    description: '의료기기용 무선 전력 전송 시스템. 체내 이식형 디바이스의 지속적인 전원 공급을 위한 혁신 기술.',
    tech: ['Power Electronics', 'Electromagnetic Field', 'Circuit Design', 'Safety Protocol'],
    role: '시스템 아키텍트',
    timeline: '2019 - 2020',
    achievements: ['특허 2건 등록', '안전성 테스트 통과', '양산 가능성 검증'],
    color: 'from-orange-500 to-red-500'
  }
];

export function ProjectsSection() {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border-l-4 border-transparent hover:border-blue-500"
            >
              {/* 프로젝트 헤더 */}
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
              
              {/* 프로젝트 정보 */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}>
                        {project.category}
                      </span>
                      <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                          <ExternalLink className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                          <Github className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* 역할 및 기간 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700 font-medium">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{project.timeline}</span>
                  </div>
                </div>

                {/* 기술 스택 */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 주요 성과 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-5 w-5 text-orange-500" />
                    <span className="font-bold text-gray-700">주요 성과</span>
                  </div>
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 추가 프로젝트 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            {t('projects.cta.description')}
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
            {t('projects.cta.button')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}