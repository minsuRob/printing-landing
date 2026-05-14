import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    label: '티셔츠',
    href: '/tshirt-printing',
    img: './assets/tshirt.png',
  },
  {
    label: '마스크',
    href: '/mask-printing',
    img: './assets/mask.png',
  },
  {
    label: '신발',
    href: '/sneaker-printing',
    img: './assets/sneaker.png',
  },
  {
    label: '모자',
    href: '/bag-printing',
    img: './assets/cap.png',
  },
  {
    label: '가방',
    href: '/bag-printing',
    img: './assets/bag.png',
  },
];

const MainPage = () => {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative min-h-[720px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* 기존 히어로 이미지 동일 위치 */}
            <img
              alt="열전사 필름 히어로"
              className="w-full h-full object-cover"
              src="./assets/tshirt.png"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold text-on-surface mb-6 leading-[1.15] animate-fadeInUp">
                열전사 필름의 모든 것,<br />
                <span className="shimmer-text">나만의 디자인</span>을 입히세요
              </h1>
              <p className="text-lg text-on-surface-variant mb-8 animate-fadeInUp delay-200">
                전문가용 열전사 필름 솔루션으로 고퀄리티 커스텀을 경험하세요.<br />
                누구보다 정밀하고 선명한 결과물을 약속합니다.
              </p>
              <div className="flex items-center gap-4 animate-fadeInUp delay-300">
                <Link
                  to="/tshirt-printing"
                  className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg"
                >
                  지금 시작하기
                </Link>
                <button className="border-2 border-on-surface text-on-surface px-8 py-[14px] rounded-xl font-semibold text-base hover:bg-on-surface hover:text-surface transition-all duration-300 active:scale-95">
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Categories Section ── */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold mb-10 reveal">카테고리별 제작 가이드</h2>
            {/* 기존 5칸 그리드 동일 레이아웃 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((cat, i) => (
                <Link
                  key={cat.label}
                  to={cat.href}
                  className={`group block category-card reveal delay-${(i + 1) * 100}`}
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-3 border border-outline-variant/30">
                    <img
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={cat.img}
                    />
                  </div>
                  <span className="text-sm font-semibold text-on-surface">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why 신의데코프린팅 ── */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-['Space_Grotesk'] text-4xl font-bold mb-3 reveal">신의데코프린팅를 선택해야 하는 이유</h2>
              <p className="text-on-surface-variant reveal delay-100">전문가들이 신뢰하는 고성능 열전사 필름 솔루션</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'shield', title: '뛰어난 내구성', desc: '수십 번의 세탁 후에도 갈라짐이나 변형 없는 강력한 접착력을 자랑합니다.' },
                { icon: 'palette', title: '선명한 색상', desc: '원본 디자인의 색감을 그대로 재현하는 고발색 프리미엄 안료를 사용합니다.' },
                { icon: 'handyman', title: '쉬운 작업성', desc: '누구나 손쉽게 컷팅하고 전사할 수 있는 최적의 두께와 유연성을 제공합니다.' },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className={`bg-surface p-10 rounded-2xl border border-outline-variant/30 text-center hover:shadow-lg transition-all duration-300 reveal delay-${(i + 1) * 100}`}
                >
                  <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-on-surface-variant">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Texture Gallery (Bento Grid) ── */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div className="reveal">
                <h2 className="font-['Space_Grotesk'] text-4xl font-bold">프리미엄 텍스처 갤러리</h2>
                <p className="text-on-surface-variant mt-1">다양한 소재와 질감으로 디자인의 깊이를 더하세요</p>
              </div>
              <a href="#/" className="text-primary font-semibold flex items-center gap-1 group reveal">
                전체 보기 <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            {/* 기존 Bento Grid 4칸 동일 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
              {/* 큰 카드 (col-span-2, row-span-2) */}
              <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group reveal">
                <img
                  alt="글리터 텍스처"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="./assets/tshirt.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-['Space_Grotesk'] text-2xl font-semibold">글리터 (Glitter)</span>
                  <span className="text-white/80">화려하게 빛나는 포인트 작업</span>
                </div>
              </div>
              {/* 메탈릭 */}
              <div className="relative rounded-2xl overflow-hidden group reveal delay-100">
                <img
                  alt="메탈릭 텍스처"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="./assets/tshirt.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-semibold">메탈릭</span>
                </div>
              </div>
              {/* 홀로그램 */}
              <div className="relative rounded-2xl overflow-hidden group reveal delay-200">
                <img
                  alt="홀로그램 텍스처"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="./assets/tshirt.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-semibold">홀로그램</span>
                </div>
              </div>
              {/* 매트 프리미엄 (col-span-2) */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden group reveal delay-300">
                <img
                  alt="매트 프리미엄 텍스처"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="./assets/tshirt.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-white font-['Space_Grotesk'] text-2xl font-semibold">매트 프리미엄</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Highlight ── */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            {/* 기존 레이아웃 동일: 텍스트 left, 이미지 right */}
            <div className="bg-surface-container rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center border border-outline-variant/20 shadow-xl shadow-primary/5 reveal">
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-semibold mb-6 inline-block">베스트 셀러</span>
                <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-6 leading-tight">완벽한 프레스를 위한 필수 파트너</h2>
                <p className="text-lg text-on-surface-variant mb-8">
                  초보자부터 전문가까지, 정밀한 온도 조절과 균일한 압력 분산으로 어떤 소재에도 완벽한 전사가 가능합니다. 신의데코프린팅의 기술력이 당신의 디자인을 완성합니다.
                </p>
                <div className="flex flex-col gap-3">
                  {['디지털 온도 제어 (0-250℃)', '고내열 테플론 코팅 열판', '오토 슬립 절전 모드 탑재'].map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="text-base">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/tshirt-printing"
                  className="btn-gradient text-white mt-8 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                >
                  지금 주문하기 <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* 기존 히트프레스 이미지 동일 위치 */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto h-full">
                <img
                  alt="열전사 프레스 기계"
                  className="w-full h-full object-cover"
                  src="./assets/tshirt.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 mobile-nav-blur bg-surface/90 border-t border-outline-variant/30 z-50 flex justify-around items-center h-16 px-2">
        <a href="#/" className="flex flex-col items-center gap-0.5 text-primary">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px] font-semibold">홈</span>
        </a>
        <a href="#/tshirt-printing" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-xl">storefront</span>
          <span className="text-[10px]">쇼핑</span>
        </a>
        <a href="#/" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-xl">photo_library</span>
          <span className="text-[10px]">갤러리</span>
        </a>
        <a href="#/" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-xl">support_agent</span>
          <span className="text-[10px]">지원</span>
        </a>
      </nav>
    </div>
  );
};

export default MainPage;
