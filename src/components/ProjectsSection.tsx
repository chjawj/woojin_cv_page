import { motion } from 'motion/react';
import { ExternalLink, Github, Award, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    title: '덱슐린',
    category: '디지털 치료제',
    description: '비만 환자용 AI 기반 디지털 치료 솔루션.CGM 데이터와 사용자 입력을 활용해 운동·약물·식이 중재를 통합 제공, 실시간 모니터링 및 맞춤형 피드백 지원.',
    tech: ['Computer Vision', 'Android', 'IoT', 'Python'],
    role: 'CTO & 기술 총괄',
    timeline: '2024 - 현재',
    achievements: ['디지털 치료제 DEX-1 허가 프로세스 수립', '기술문서 기획 및 작성 총괄', 'CGM·운동·식이·약물 관리 기능 통합 알고리즘 기획 및 검증'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '근튼튼',
    category: '디지털 치료제',
    description: '근골격계 재활을 위한 스마트 운동 플랫폼. AI 기반 동작 분석과 개인화된 운동 처방 시스템.',
    tech: ['Computer Vision', 'Android', 'IoT', 'Python'],
    role: 'CTO & 기술 총괄',
    timeline: '2024 - 2025',
    achievements: ['연구임상 시험 준비 및 진행', '안전성 검증 프로세스 구축'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'alamo_c1',
    category: '인공와우 체내 이식형 Full-custom SoC',
    description: '인공와우 내부 임플란트용 Mixed system on chip. 무선 입력 데이터 복원에 따른 멀티채널 stimulation 및 recording 기능이 포함된 SoC 설계.',
    tech: ['ASIC Design', 'Analog Circuit', 'RF Communication', 'FPGA'],
    role: '수석 설계 엔지니어',
    timeline: '2018 - 2022',
    achievements: ['특허 2건 등록', 'IEEE 논문 3건 발표', '프로토타입 검증 완료'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'mindtodoc',
    category: '신경조절 디바이스',
    description: '체외 착용형 미주신경 조절 디바이스. 무선 데이터 송수신 및 신호 처리 기능이 포함된 디바이스 설계.',
    tech: ['Neuro-Modulation', 'Embedded Systems', 'Bluetooth'],
    role: 'Division Director',
    timeline: '2021 - 2023',
    achievements: ['사업 기획/총괄', '시스템 아키텍처 설계', '3등급 의료기기 인증 관리'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'EEG 모니터링 제품',
    category: '신경과학 기술',
    description: '실시간 뇌파 신호 수집 및 분석을 위한 웨어러블 디바이스.',
    tech: ['Signal Processing', 'Embedded Systems', 'Bluetooth'],
    role: '하드웨어 개발 총괄',
    timeline: '2015 - 2016',
    achievements: ['20채널 EEG 시제품 개발 및 검증'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: '무선 충전 시제품',
    category: '전력 전송 기술',
    description: 'IoT용 무선 전력 전송 시스템 설계.',
    tech: ['Power Electronics', 'Electromagnetic Field', 'Circuit Design'],
    role: '연구원',
    timeline: '2010 - 2012',
    achievements: ['시뮬레이션 분석 및 실제 검증을 통한 특허/논문 작성'],
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