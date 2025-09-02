import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Header
    'nav.home': '홈',
    'nav.expertise': '핵심 역량',
    'nav.experience': '경력',
    'nav.projects': '프로젝트',
    'nav.research': '연구 성과',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.badge': '디지털 헬스케어 전문가',
    'hero.title': '디지털 헬스케어의 미래를 구현하는 기술 리더',
    'hero.subtitle': 'AI 기반 헬스케어 시스템부터 체내 이식형 SoC까지, 혁신을 이끄는 전문가',
    'hero.cta.portfolio': '전체 포트폴리오 보기',
    'hero.cta.cv': 'CV 다운로드',
    
    // Expertise Section
    'expertise.title': '핵심 역량 및 전문성',
    'expertise.subtitle': 'AI 기반 헬스케어 시스템부터 체내 이식형 SoC까지, 혁신을 향한 여정',
    'expertise.healthcare.title': '디지털 헬스케어 기술 리더십',
    'expertise.healthcare.desc': 'AI 기반 헬스케어 솔루션과 의료기기 개발을 통한 혁신적 서비스 창출',
    'expertise.soc.title': '체내 이식형 의료기기 SoC',
    'expertise.soc.desc': '신경조절 시스템과 뇌파 모니터링을 위한 첨단 반도체 설계 및 개발',
    'expertise.business.title': '사업 기획 및 운영',
    'expertise.business.desc': '기술 스타트업의 전략 수립부터 실행까지 포괄적인 비즈니스 리더십',
    'expertise.ai.title': 'AI & 머신러닝',
    'expertise.ai.desc': '의료 데이터 분석과 예측 모델링을 통한 스마트 헬스케어 구현',
    'expertise.innovation.title': '혁신 기술 개발',
    'expertise.innovation.desc': '무선 충전, IoT 센서 등 차세대 의료기술 연구개발 및 상용화',
    'expertise.leadership.title': '팀 리더십 & 협업',
    'expertise.leadership.desc': '다학제 팀 구성과 글로벌 협력을 통한 프로젝트 성공 경험',
    
    // Experience Section
    'experience.title': '경력 및 경험',
    'experience.subtitle': '다양한 조직에서의 경험을 통해 축적한 기술 전문성과 리더십 역량을 소개합니다.',
    'experience.achievements': '주요 성과',
    
    // Projects Section
    'projects.title': '프로젝트 포트폴리오',
    'projects.subtitle': '디지털 헬스케어부터 체내 이식형 의료기기까지, 다양한 혁신 프로젝트를 통해 축적한 기술적 성과와 경험을 소개합니다.',
    'projects.cta.button': '전체 포트폴리오 보기',
    'projects.cta.description': '더 많은 프로젝트와 상세한 기술 문서가 궁금하시다면',
    
    // Research Section
    'research.title': '학술 및 지적 재산',
    'research.subtitle': '학술 연구 성과와 특허를 통해 기술 혁신에 기여한 지적 자산을 소개합니다.',
    'research.education': '학력',
    'research.publications': '논문 발표',
    'research.patents': '특허',
    'research.thesis': '논문',
    'research.advisor': '지도교수',
    'research.specialization': '전공분야',
    'research.inventors': '발명자',
    'research.citations': '인용수',
    'research.collaborations': '연구 협력',
    
    // Contact Section
    'contact.title': '함께 혁신을 만들어갈 파트너를 찾습니다',
    'contact.subtitle': '디지털 헬스케어 분야의 새로운 가능성을 탐구하고, 혁신적인 기술로 더 나은 미래를 함께 만들어나가고 싶습니다.',
    'contact.info': '연락처',
    'contact.collaboration': '협업 분야',
    'contact.response.title': '응답 시간',
    'contact.response.desc': '일반적으로 24시간 이내에 답변드립니다. 긴급한 사안의 경우 전화로 연락 부탁드립니다.',
    'contact.quote': '"기술로 사람의 삶을 더 건강하고 행복하게 만드는 것이 저의 목표입니다."',
    'contact.quote.desc': '디지털 헬스케어의 무한한 가능성을 함께 탐구하고 실현해나가고 싶습니다. 여러분의 아이디어와 제 경험이 만나 새로운 혁신을 만들어낼 수 있기를 기대합니다.',
    
    // Footer
    'footer.tagline': '디지털 헬스케어의 미래를 구현하는 기술 리더',
    'footer.description': '혁신적인 의료기술로 더 나은 세상을 만들어가고 있습니다.',
    'footer.quicklinks': '빠른 이동',
    'footer.social': '소셜 미디어',
    'footer.copyright': '© 2024 Woojin Ahn. All rights reserved.',
    'footer.made': 'Made with',
    'footer.for': 'for innovation',
    'footer.totop': '맨 위로',
    'footer.info': '이 웹사이트는 안우진의 전문 경력과 프로젝트를 소개하기 위해 제작되었습니다. 모든 정보는 정확성을 위해 지속적으로 업데이트되며, 협업 및 프로젝트 문의는 언제든지 환영합니다.'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.expertise': 'Expertise',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.research': 'Research',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Digital Healthcare Expert',
    'hero.title': 'Technology Leader Shaping the Future of Digital Healthcare',
    'hero.subtitle': 'From AI-powered healthcare systems to implantable SoCs, an expert driving innovation in medical technology.',
    'hero.cta.portfolio': 'View Full Portfolio',
    'hero.cta.cv': 'Download CV',
    
    // Expertise Section
    'expertise.title': 'Core Expertise & Competencies',
    'expertise.subtitle': 'Providing innovative solutions based on diverse experience and expertise accumulated in digital healthcare and medical device fields.',
    'expertise.healthcare.title': 'Digital Healthcare Technology Leadership',
    'expertise.healthcare.desc': 'Creating innovative services through AI-based healthcare solutions and medical device development',
    'expertise.soc.title': 'Implantable Medical Device SoC',
    'expertise.soc.desc': 'Advanced semiconductor design and development for neural modulation systems and EEG monitoring',
    'expertise.business.title': 'Business Planning & Operations',
    'expertise.business.desc': 'Comprehensive business leadership from strategy formulation to execution in tech startups',
    'expertise.ai.title': 'AI & Machine Learning',
    'expertise.ai.desc': 'Smart healthcare implementation through medical data analysis and predictive modeling',
    'expertise.innovation.title': 'Innovation Technology Development',
    'expertise.innovation.desc': 'R&D and commercialization of next-generation medical technologies including wireless charging and IoT sensors',
    'expertise.leadership.title': 'Team Leadership & Collaboration',
    'expertise.leadership.desc': 'Project success experience through multidisciplinary team building and global collaboration',
    
    // Experience Section
    'experience.title': 'Career & Experience',
    'experience.subtitle': 'Introducing technical expertise and leadership capabilities accumulated through experience in various organizations.',
    'experience.achievements': 'Key Achievements',
    
    // Projects Section
    'projects.title': 'Project Portfolio',
    'projects.subtitle': 'Introducing technical achievements and experience accumulated through various innovative projects from digital healthcare to implantable medical devices.',
    'projects.cta.button': 'View Full Portfolio',
    'projects.cta.description': 'If you are curious about more projects and detailed technical documentation',
    
    // Research Section
    'research.title': 'Academic & Intellectual Property',
    'research.subtitle': 'Introducing intellectual assets that have contributed to technological innovation through academic research achievements and patents.',
    'research.education': 'Education',
    'research.publications': 'Publications',
    'research.patents': 'Patents',
    'research.thesis': 'Thesis',
    'research.advisor': 'Advisor',
    'research.specialization': 'Specialization',
    'research.inventors': 'Inventors',
    'research.citations': 'Citations',
    'research.collaborations': 'Research Collaborations',
    
    // Contact Section
    'contact.title': 'Looking for Partners to Create Innovation Together',
    'contact.subtitle': 'I want to explore new possibilities in the digital healthcare field and create a better future together with innovative technology.',
    'contact.info': 'Contact Information',
    'contact.collaboration': 'Collaboration Areas',
    'contact.response.title': 'Response Time',
    'contact.response.desc': 'Generally respond within 24 hours. For urgent matters, please contact by phone.',
    'contact.quote': '"My goal is to make people\'s lives healthier and happier through technology."',
    'contact.quote.desc': 'I want to explore and realize the infinite possibilities of digital healthcare together. I hope that your ideas and my experience can meet to create new innovations.',
    
    // Footer
    'footer.tagline': 'Technology Leader Shaping the Future of Digital Healthcare',
    'footer.description': 'Creating a better world through innovative medical technology.',
    'footer.quicklinks': 'Quick Links',
    'footer.social': 'Social Media',
    'footer.copyright': '© 2024 Woojin Ahn. All rights reserved.',
    'footer.made': 'Made with',
    'footer.for': 'for innovation',
    'footer.totop': 'Back to Top',
    'footer.info': 'This website was created to introduce Woojin Ahn\'s professional career and projects. All information is continuously updated for accuracy, and collaboration and project inquiries are always welcome.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}