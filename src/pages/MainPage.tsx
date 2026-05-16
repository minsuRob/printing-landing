import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GLITTER_SLIDES = [
  '/printing-landing/assets/sparkle-detail.jpg',
  '/printing-landing/assets/film-1.jpg',
  '/printing-landing/assets/film-2.jpg',
  '/printing-landing/assets/film-3.jpg',
  '/printing-landing/assets/film-4.jpg',
];

const MainPage: React.FC = () => {
  const [glitterSlide, setGlitterSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlitterSlide((prev) => (prev + 1) % GLITTER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* ── Hero Section with Dynamic Lion Visuals ── */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0b1c30]">
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                filter: ['brightness(1) contrast(1)', 'brightness(1.3) contrast(1.2)', 'brightness(1) contrast(1)'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              <img 
                src="/printing-landing/assets/slide-0.jpg" 
                alt="Dynamic Lion Printing" 
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
            
            {/* Flashy Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1c30]"></div>
            
            {/* Animated Neon Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full blur-sm"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-cyan-500/10 rounded-full blur-md"
              ></motion.div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-sm font-bold uppercase tracking-[0.3em] mb-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next-Gen Printing Technology
              </motion.div>

              <h1 className="font-['Space_Grotesk'] text-white leading-tight font-black tracking-tighter mb-10">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block text-[70px] lg:text-[120px] leading-[0.8] drop-shadow-[0_0_50px_rgba(70,72,212,0.4)]"
                >
                  신의데코
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block text-[54px] lg:text-[88px] text-primary-glow shimmer-text mt-4"
                >
                  프린팅 솔루션
                </motion.span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="font-body-lg text-white/70 mb-14 font-light max-w-2xl text-xl lg:text-2xl leading-relaxed"
              >
                단순한 인쇄를 넘어선 예술적 가공. <br/>
                <span className="text-white font-medium italic">홀로그램, 글리터, 리플렉티브</span> 등 특수 소재로 압도적인 결과물을 선사합니다.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Link to="/tshirt-printing" className="group relative w-full sm:w-auto overflow-hidden bg-primary text-on-primary px-14 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(70,72,212,0.6)] active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    제작 시작하기
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>

                <Link to="/portfolio-detail" className="w-full sm:w-auto border-2 border-white/20 text-white px-14 py-[22px] rounded-2xl font-bold text-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 bg-white/5 backdrop-blur-xl flex items-center justify-center gap-3 group">
                  포트폴리오 보기
                  <span className="material-symbols-outlined text-[20px] group-hover:rotate-45 transition-transform">arrow_outward</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scrolldown indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
            <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-scrollIndicator"></div>
            </div>
            <span className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">Explore</span>
          </div>
        </section>

        {/* ── Stats Section ── */}
        <section className="py-12 bg-[#0b1c30] border-y border-white/5 relative z-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: '누적 주문건수', value: '50,000+', suffix: '' },
                { label: '보유 소재 종류', value: '300', suffix: '종' },
                { label: '고객 만족도', value: '99.8', suffix: '%' },
                { label: '당일 제작 출고', value: '95', suffix: '%' },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {stat.value}<span className="text-lg opacity-60 ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Categories Section ── */}
        <section className="py-32 bg-surface relative overflow-hidden">
          {/* Subtle Background Text */}
          <div className="absolute top-20 -left-10 text-[180px] font-black text-black/[0.02] select-none pointer-events-none rotate-[-5deg]">CATEGORIES</div>
          
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Product Lineup</span>
                <h2 className="font-['Space_Grotesk'] text-4xl lg:text-6xl font-bold mb-6">제작 가이드 선택</h2>
                <p className="text-on-surface-variant text-lg">원하는 카테고리를 선택하여 신의데코만의 특수 인쇄 공법과 소재 가이드를 확인해보세요.</p>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group">
                전체 소재 차트 보기 <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {[
                { id: 'tshirt', title: '티셔츠', sub: 'Minimal Signature', img: '/printing-landing/assets/tshirt-series-1.jpg', link: '/tshirt-printing' },
                { id: 'sneaker', title: '스니커즈', sub: 'Custom Shoes', img: '/printing-landing/assets/sneaker-run-1.jpg', link: '/sneaker-printing' },
                { id: 'mask', title: '마스크', sub: 'Tech Mask', img: '/printing-landing/assets/cat-mask.jpg', link: '/mask-printing' },
                { id: 'hat', title: '모자', sub: 'Custom Hats', img: '/printing-landing/assets/hat-hologram.png', link: '/hat-printing' },
                { id: 'bag', title: '가방', sub: 'Custom Bags', img: '/printing-landing/assets/bag-hologram.png', link: '/bag-printing' },
                { id: 'film', title: '필름', sub: 'Heat Transfer', img: '/printing-landing/assets/film-1.jpg', link: '/film-printing' },
                { id: 'film-sample', title: '필름 샘플', sub: 'Sample Pack', img: '/printing-landing/assets/film-sample-1.jpg', link: '/film-sample' },
              ].map((cat, i) => (
                <Link 
                  key={cat.id}
                  to={cat.link} 
                  className="category-card group relative aspect-[3/4] rounded-[24px] overflow-hidden bg-surface-container shadow-xl animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    src={cat.img} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-primary-glow text-xs font-bold uppercase tracking-widest mb-1 block">{cat.sub}</span>
                    <h3 className="text-white text-2xl font-bold mb-4">{cat.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 scale-50 group-hover:scale-100 shadow-xl">
                      <span className="material-symbols-outlined text-primary text-xl">add</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us Section ── */}
        <section className="py-32 bg-[#f0f4ff] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold mb-6">압도적 품질의 비결</h2>
              <p className="text-on-surface-variant text-lg">신의데코프린팅은 일반적인 전사와 다릅니다. 원단 손상을 최소화하면서도 반영구적인 부착력을 보장합니다.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: 'precision_manufacturing', title: '0.1mm 정밀 컷팅', desc: '복잡한 로고나 얇은 서체도 뭉침 없이 날카롭게 표현합니다.' },
                { icon: 'high_res', title: '초고발색 특수 소재', desc: '세탁 50회 후에도 갈라짐이나 변색 없는 프리미엄 필름만 사용합니다.' },
                { icon: 'verified', title: '산업용 프레스 공정', desc: '균일한 온도와 압력을 유지하는 자동화 시스템으로 완벽한 밀착력을 구현합니다.' },
              ].map((feat, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl">{feat.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold">{feat.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technology Showcase Section (Glitter) ── */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-[#0b1c30] rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-stretch border border-white/5 shadow-2xl">
              <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] flex-shrink-0 overflow-hidden bg-black/50">
                {GLITTER_SLIDES.map((slide, index) => (
                  <div 
                    key={slide}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
                      index === glitterSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      alt={`Glitter Sample ${index + 1}`} 
                      className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${
                        index === glitterSlide ? 'scale-105' : 'scale-100'
                      }`}
                      src={slide} 
                    />
                  </div>
                ))}
                
                {/* Slide Indicators for Glitter Section */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                  {GLITTER_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setGlitterSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${
                        index === glitterSlide ? 'bg-primary scale-125' : 'bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`View glitter slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-glow text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Sparkle Technology
                </div>
                <h2 className="font-['Space_Grotesk'] text-white text-4xl lg:text-6xl font-bold leading-tight">
                  빛을 머금은<br/><span className="text-primary-glow shimmer-text">Sparkle Glitter</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  기존 글리터의 거친 입자를 혁신적으로 개선한 '마이크로 스프링클' 공법. 
                  각도에 따라 다르게 빛나는 입체적인 질감과 부드러운 터치감을 동시에 잡았습니다.
                </p>
                <div className="space-y-4">
                  {['유연한 신축성', '반영구적 부착력', '무독성 친환경 필름'].map((point, i) => (
                    <div key={i} className="flex items-center gap-4 text-white">
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-primary-glow">
                        <span className="material-symbols-outlined text-[16px]">done</span>
                      </div>
                      <span className="font-bold">{point}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-gradient px-10 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-primary/20 transition-all">
                  자세히 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sample Gallery Section ── */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold mb-6">최근 제작 샘플</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">전 세계 아티스트 및 브랜드와 함께한 고퀄리티 전사 결과물을 확인해보세요.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-2xl transition-all">
                  <img 
                    alt={`Sample Gallery ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={`/printing-landing/assets/${i % 2 === 0 ? 'tshirt' : 'sneaker'}.png`} 
                  />
                  <Link to="/portfolio" className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                    <span className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">상세보기</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Guide Section ── */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold mb-8 leading-tight">어떻게<br/>제작되나요?</h2>
                <p className="text-on-surface-variant mb-12">디자인부터 배송까지, 10년 이상의 노하우가 집약된 신의데코만의 5단계 제작 프로세스입니다.</p>
                <Link to="/inquiry" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
                  상담 신청하기 <span className="material-symbols-outlined">chat</span>
                </Link>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { step: '01', title: '디자인 상담 및 접수', desc: '제작하고자 하는 시안이나 로고를 벡터 파일(AI, SVG)로 접수합니다.' },
                  { step: '02', title: '소재 및 필름 선택', desc: '디자인의 특성에 맞는 가장 적합한 특수 필름과 컬러를 제안해 드립니다.' },
                  { step: '03', title: '정밀 커팅 가공', desc: '첨단 장비를 이용해 복잡한 디자인도 정밀하게 가공하여 준비합니다.' },
                  { step: '04', title: '고온 열압착 공정', desc: '의류나 신발의 소재에 맞춰 최적의 온도와 압력으로 전사 작업을 수행합니다.' },
                ].map((item, i) => (
                  <div key={i} className="relative pl-16">
                    <span className="absolute left-0 top-0 text-5xl font-black text-primary/10 leading-none">{item.step}</span>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner Section ── */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-gradient-to-r from-primary to-[#6063ee] rounded-[40px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="font-['Space_Grotesk'] text-4xl lg:text-6xl font-bold leading-tight">지금 당신의 디자인을<br/>현실로 만들어보세요.</h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto">대량 생산부터 단 한 개의 커스텀까지, 신의데코가 함께합니다.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                  <Link 
                    to="/inquiry"
                    className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all text-center"
                  >
                    지금 문의하기
                  </Link>
                  <Link to="/production-guide" className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                    제작 가이드 다운로드
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      

    </div>
  );
};

export default MainPage;
