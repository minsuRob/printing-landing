import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIES = [
  { 
    id: 'tshirt', 
    title: '티셔츠 프린팅', 
    description: '고퀄리티 홀로그램 및 글리터 전사로 완성하는 프리미엄 티셔츠 컬렉션입니다.',
    items: [
      { id: 1, img: '/printing-landing/assets/tshirt-series-1.jpg', title: '홀로그램 로고 티' },
      { id: 2, img: '/printing-landing/assets/tshirt.png', title: '클래식 화이트 프린트' },
    ],
    link: '/tshirt-printing'
  },
  { 
    id: 'sneaker', 
    title: '커스텀 스니커즈', 
    description: '신발의 질감을 살린 정밀한 열전사로 세상에 하나뿐인 스니커즈를 제작합니다.',
    items: [
      { id: 3, img: '/printing-landing/assets/sneaker-run-1.jpg', title: '네온 러닝 커스텀' },
      { id: 4, img: '/printing-landing/assets/sneaker.png', title: '미니멀 포인트 스니커즈' },
    ],
    link: '/sneaker-printing'
  },
  { 
    id: 'mask', 
    title: '테크니컬 마스크', 
    description: '기능성 소재와 스타일을 결합한 테크웨어 스타일의 마스크 제작 사례입니다.',
    items: [
      { id: 5, img: '/printing-landing/assets/cat-mask.jpg', title: '홀로그램 테크 마스크' },
    ],
    link: '/mask-printing'
  },
  { 
    id: 'hat', 
    title: '프리미엄 모자', 
    description: '모자의 곡면을 완벽하게 커버하는 신의데코만의 특수 압착 기술입니다.',
    items: [
      { id: 6, img: '/printing-landing/assets/hat-hologram.png', title: '글리터 볼캡' },
      { id: 7, img: '/printing-landing/assets/cat-hat.jpg', title: '스트릿 무드 캡' },
    ],
    link: '/hat-printing'
  },
  { 
    id: 'bag', 
    title: '캔버스 & 에코백', 
    description: '내구성이 뛰어난 필름으로 세탁 후에도 변함없는 퀄리티를 보장합니다.',
    items: [
      { id: 8, img: '/printing-landing/assets/bag-hologram.png', title: '골드 로고 캔버스백' },
    ],
    link: '/bag-printing'
  },
  { 
    id: 'film', 
    title: '산업용 전사 필름', 
    description: '다양한 텍스처와 반사 효과를 가진 최고급 HTV 필름 라인업입니다.',
    items: [
      { id: 9, img: '/printing-landing/assets/film-1.jpg', title: '메탈릭 실버 롤' },
      { id: 10, img: '/printing-landing/assets/film-2.jpg', title: '레인보우 홀로그램' },
    ],
    link: '/film-printing'
  }
];

const PortfolioDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/printing-landing/assets/slide-0.jpg" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Portfolio Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold mb-6">PORTFOLIO<br/><span className="text-primary">DETAIL</span></h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">
              신의데코프린팅의 모든 카테고리별 제작 사례를 한눈에 확인하세요.<br/>
              각 카테고리 클릭 시 상세 제작 가이드로 연결됩니다.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="space-y-40">
          {CATEGORIES.map((cat, index) => (
            <motion.section 
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                  Category {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk']">{cat.title}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-4">
                  <Link 
                    to={cat.link}
                    className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold border border-outline-variant hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    제작 가이드 및 샘플 보기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual Content (Gallery) */}
              <div className="w-full lg:w-3/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ y: -10 }}
                      className={`relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl ${itemIndex === 1 ? 'mt-12' : ''}`}
                    >
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                        <h4 className="text-white text-xl font-bold">{item.title}</h4>
                        <p className="text-white/60 text-sm">Case Study</p>
                      </div>
                    </motion.div>
                  ))}
                  {cat.items.length === 1 && (
                    <div className="hidden md:flex items-center justify-center bg-surface-container rounded-[32px] border-2 border-dashed border-outline-variant/30">
                      <p className="text-on-surface-variant/50 font-bold uppercase tracking-widest">More Cases Coming Soon</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Global Navigation Footer */}
        <section className="mt-60 bg-[#0b1c30] rounded-[60px] p-12 lg:p-32 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-12">전체 카테고리 둘러보기</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id}
                  to={cat.link}
                  className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all font-medium"
                >
                  {cat.title.split(' ')[0]}
                </Link>
              ))}
            </div>
            <div className="mt-20">
              <Link to="/" className="inline-flex items-center gap-2 text-primary-glow font-bold hover:underline">
                <ArrowLeft className="w-4 h-4" /> 메인으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
