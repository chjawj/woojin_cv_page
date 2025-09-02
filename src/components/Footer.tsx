import { motion } from 'motion/react';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/woojin-ahn-20a020b2/',
    icon: Linkedin
  },
  {
    name: 'Email',
    href: 'mailto:woojinahn7@gmail.com',
    icon: Mail
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 왼쪽: 이름 및 간단한 소개 */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">WOOJIN AHN</h3>
              <p className="text-gray-400 leading-relaxed">
                디지털 헬스케어의 미래를 구현하는 기술 리더
              </p>
              <p className="text-gray-400 text-sm mt-2">
                혁신 기술로 더 나은 세상을 만들어가고 있습니다.
              </p>
            </motion.div>
          </div>

          {/* 가운데: 빠른 링크 */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">빠른 이동</h4>
              <ul className="space-y-2">
                {[
                  { name: '홈', href: '#hero' },
                  { name: '핵심 역량', href: '#expertise' },
                  { name: '경력', href: '#experience' },
                  { name: '프로젝트', href: '#projects' },
                  { name: '연구 성과', href: '#research' },
                  { name: '연락처', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 오른쪽: 소셜 링크 및 연락처 */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">소셜 미디어</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-sm text-gray-400">
                <p className="mb-1">woojinahn7@gmail.com</p>
                <p>Seoul Korea</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 저작권 정보 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© 2024 Woojin Ahn. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> for innovation
              </span>
            </motion.div>

            {/* 맨 위로 버튼 */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <span>맨 위로</span>
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            이 웹사이트는 안우진의 전문 경력과 프로젝트를 소개하기 위해 제작되었습니다. 
            모든 정보는 정확성을 위해 지속적으로 업데이트되며, 
            협업 및 프로젝트 문의는 언제든지 환영합니다.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}