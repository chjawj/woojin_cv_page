//import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, BookOpen, Phone, Calendar, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const contactMethods = [
  {
    icon: Mail,
    label: '이메일',
    value: 'woojinahn7@gmail.com',
    href: 'mailto:woojinahn7@gmail.com',
    description: '프로젝트 문의 및 협업 제안',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/woojin-ahn-20a020b2',
    href: 'https://www.linkedin.com/in/woojin-ahn-20a020b2/',
    description: '전문적인 네트워킹',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: BookOpen,
    label: 'contact.blog.label',
    value: 'Blog',
    href: 'https://possible-piccolo-8f0.notion.site/daily-global-news-26dd82ed51f98080b1dfcd3260e15e80?source=copy_link',
    descKey: 'contact.blog.desc',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Phone,
    label: '전화',
    value: '+82-10-8934-4176',
    href: 'tel:+82-10-8934-4176',
    description: '긴급 연락용',
    color: 'from-green-500 to-emerald-500'
  }
];

const collaborationAreas = [
  {
    title: '디지털 헬스케어 혁신',
    description: 'AI 기반 의료 솔루션 개발과 상용화',
    icon: '🏥'
  },
  {
    title: '의료기기 기술 개발',
    description: '체내 이식형 디바이스 및 웨어러블 기술',
    icon: '⚕️'
  },
  {
    title: '기술 스타트업 멘토링',
    description: '헬스테크 분야 창업 및 사업화 지원',
    icon: '🚀'
  },
  {
    title: '학술 연구 협력',
    description: '논문 공동 연구 및 기술 이전',
    icon: '📚'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            함께 혁신을 만들어갈 파트너를 찾습니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디지털 헬스케어 분야의 새로운 가능성을 탐구하고, 
            혁신적인 기술로 더 나은 미래를 함께 만들어나가고 싶습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처</h3>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{method.label}</h4>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">{method.value}</p>
                    <p className="text-gray-500 text-sm">{method.description}</p>
                  </div>
                  
                  <Send className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* 위치 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">위치</h4>
              </div>
              <p className="text-gray-600 mb-2">서울특별시</p>
              <p className="text-gray-500 text-sm">
                대면 미팅, 온라인 회의 모두 가능합니다.
                일정 조율을 위해 미리 연락 부탁드립니다.
              </p>
            </motion.div>
          </motion.div>

          {/* 협업 분야 및 CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">협업 분야</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {collaborationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">프로젝트 시작하기</h4>
              <p className="text-blue-100 mb-6">
                혁신적인 아이디어가 있으시거나 협업을 원하신다면 
                언제든지 연락주세요. 함께 멋진 결과를 만들어봅시다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2 font-semibold"
                >
                  <a href="mailto:woojinahn7@gmail.com">
                    <Mail className="h-5 w-5" />
                    이메일 보내기
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 flex items-center gap-2 font-semibold"
                >
                  <Calendar className="h-5 w-5" />
                  미팅 일정 잡기
                </Button>
              </div>
            </motion.div>

            {/* 응답 시간 안내 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-gray-900">응답 시간</h4>
              </div>
              <p className="text-gray-600 text-sm">
                일반적으로 24시간 이내에 답변드립니다. 
                긴급한 사안의 경우 전화로 연락 부탁드립니다.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 추가 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              "기술로 사람의 삶을 더 건강하고 행복하게 만드는 것이 저의 목표입니다."
            </h4>
            <p className="text-gray-600 text-lg">
              디지털 헬스케어의 무한한 가능성을 함께 탐구하고 실현해나가고 싶습니다. 
              여러분의 아이디어와 제 경험이 만나 새로운 혁신을 만들어낼 수 있기를 기대합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}