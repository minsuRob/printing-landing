import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainPage: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section with Cinematic Background */}
        <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0b1c30]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Professional heat press machine cinematic background" 
              className="w-full h-full object-cover object-center scale-105" 
              src="/printing-landing/assets/hero.jpg" 
            />
            <div className="absolute inset-0 video-overlay"></div>
            {/* Neon Accents */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <span className="block font-label-bold text-inverse-primary uppercase text-[56px] lg:text-[72px] leading-tight font-black tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(192,193,255,0.4)]">신의데코프린팅</span>
              <h1 className="font-h1 text-h1 text-white mb-6 drop-shadow-lg">열전사 필름의 모든 것,<br/>나만의 디자인을 입히세요</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-12 font-medium max-w-lg drop-shadow-md">전문가용 HTV 솔루션으로 고퀄리티 커스텀을 경험하세요. 누구보다 정밀하고 선명한 결과물을 약속합니다.</p>
              <div className="flex items-center gap-6">
                <button className="bg-primary text-on-primary px-12 py-4 rounded-lg font-button text-button hover:shadow-[0_0_20px_rgba(70,72,212,0.6)] transition-all duration-300 active:scale-95 border border-primary/50">지금 시작하기</button>
                <button className="border-2 border-white/80 text-white px-12 py-[14px] rounded-lg font-button text-button hover:bg-white hover:text-[#0b1c30] transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-md">자세히 보기</button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <h2 className="font-h2 text-h2 mb-12 text-center">카테고리별 제작 가이드</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-5">
              {/* Shoes Gallery Item */}
              <a 
                href="#/sneaker-printing" 
                className="gallery-card relative group bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-outline-variant/30 flex flex-col active:scale-[0.98]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt="Shoes Category" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/printing-landing/assets/cat-sneaker.jpg" 
                  />
                  <div className="gallery-overlay absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                    <span className="bg-on-primary text-primary px-6 py-2 rounded-full font-button text-sm shadow-lg">전체보기</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-lowest flex justify-between items-center group-hover:bg-primary-container/10 transition-colors">
                  <div>
                    <span className="block font-label-bold text-label-bold text-on-surface">신발</span>
                    <span className="text-xs text-on-surface-variant">Shoes</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-label-bold">
                    <span className="text-xs">모두 보기</span>
                    <span className="material-symbols-outlined text-sm">folder_open</span>
                  </div>
                </div>
              </a>

              {/* Mask Gallery Item */}
              <a 
                href="#/mask-printing" 
                className="gallery-card relative group bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-outline-variant/30 flex flex-col active:scale-[0.98]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt="Masks Category" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/printing-landing/assets/cat-mask.jpg" 
                  />
                  <div className="gallery-overlay absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                    <span className="bg-on-primary text-primary px-6 py-2 rounded-full font-button text-sm shadow-lg">전체보기</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-lowest flex justify-between items-center group-hover:bg-primary-container/10 transition-colors">
                  <div>
                    <span className="block font-label-bold text-label-bold text-on-surface">마스크</span>
                    <span className="text-xs text-on-surface-variant">Masks</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-label-bold">
                    <span className="text-xs">모두 보기</span>
                    <span className="material-symbols-outlined text-sm">folder_open</span>
                  </div>
                </div>
              </a>

              {/* Tee Gallery Item */}
              <a 
                href="#/tshirt-printing" 
                className="gallery-card relative group bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-outline-variant/30 flex flex-col active:scale-[0.98]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt="T-shirts Category" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/printing-landing/assets/cat-tshirt.jpg" 
                  />
                  <div className="gallery-overlay absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                    <span className="bg-on-primary text-primary px-6 py-2 rounded-full font-button text-sm shadow-lg">전체보기</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-lowest flex justify-between items-center group-hover:bg-primary-container/10 transition-colors">
                  <div>
                    <span className="block font-label-bold text-label-bold text-on-surface">티</span>
                    <span className="text-xs text-on-surface-variant">Tee</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-label-bold">
                    <span className="text-xs">모두 보기</span>
                    <span className="material-symbols-outlined text-sm">folder_open</span>
                  </div>
                </div>
              </a>

              {/* Cap Gallery Item */}
              <a 
                href="#/" 
                className="gallery-card relative group bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-outline-variant/30 flex flex-col active:scale-[0.98]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt="Hats Category" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/printing-landing/assets/cat-hat.jpg" 
                  />
                  <div className="gallery-overlay absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                    <span className="bg-on-primary text-primary px-6 py-2 rounded-full font-button text-sm shadow-lg">전체보기</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-lowest flex justify-between items-center group-hover:bg-primary-container/10 transition-colors">
                  <div>
                    <span className="block font-label-bold text-label-bold text-on-surface">모자</span>
                    <span className="text-xs text-on-surface-variant">Hats</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-label-bold">
                    <span className="text-xs">모두 보기</span>
                    <span className="material-symbols-outlined text-sm">folder_open</span>
                  </div>
                </div>
              </a>

              {/* Bag Gallery Item */}
              <a 
                href="#/bag-printing" 
                className="gallery-card relative group bg-surface-container rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-outline-variant/30 flex flex-col active:scale-[0.98]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    alt="Bags Category" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="/printing-landing/assets/cat-bag.jpg" 
                  />
                  <div className="gallery-overlay absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                    <span className="bg-on-primary text-primary px-6 py-2 rounded-full font-button text-sm shadow-lg">전체보기</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-lowest flex justify-between items-center group-hover:bg-primary-container/10 transition-colors">
                  <div>
                    <span className="block font-label-bold text-label-bold text-on-surface">가방</span>
                    <span className="text-xs text-on-surface-variant">Bags</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-label-bold">
                    <span className="text-xs">모두 보기</span>
                    <span className="material-symbols-outlined text-sm">folder_open</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Premium Materials Section */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="font-h2 text-h2 mb-6">프리미엄 원단 및 필름 라인업</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  홀로그램, 카본, 메탈릭 등 다양한 텍스처의 프리미엄 필름을 확인하세요. 
                  압도적인 품질의 원단 롤을 통해 대량 생산부터 정밀한 커스텀까지 완벽하게 대응합니다.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">star</span>
                    <span className="font-label-bold">홀로그램 체크</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">settings_input_component</span>
                    <span className="font-label-bold">카본 실버</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    <span className="font-label-bold">오팔 펄</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">layers</span>
                    <span className="font-label-bold">메탈릭 퍼플</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30">
                  <img 
                    alt="Premium Film Rolls" 
                    className="w-full h-auto object-cover" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uikl6Ay6vOrR3NMUsH1sbpC9dvyKDVaNNCzEj1duThxrREnCd-tJ0uVJQXkLE5hQolBslRpwLKr4KorJnFjAfmjKijcfSrUoSqfsdZI5ZSSnm0-FmO8b_uBeAjrEqoZMw9dKSIto1GxY7L7kW2q7RinJWvn9jOB-Dynf5LL7jysRF5rwfxMZbattvOXXQVr19ElqZog-u8_eGNxuQowR-PUmfcZOnUzMetEndK2RYmj2R_e8iKyZw1j1NIfL8AXWS8-GAl4c-Ry" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sparkle Glitter Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-primary-container/5 rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center border border-primary/10 shadow-xl">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <img 
                  alt="Detailed Glitter Transfers" 
                  className="w-full h-full object-cover" 
                  src="/printing-landing/assets/sparkle-detail.jpg" 
                />
              </div>
              <div className="w-full md:w-1/2 p-12 order-1 md:order-2">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-xs mb-6 inline-block">독자 기술력</span>
                <h2 className="font-h1 text-h1 mb-6">Sparkle Glitter<br/>테크놀로지</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  기존 글리터의 한계를 뛰어넘는 초정밀 커팅과 선명한 발색. 
                  다양한 폰트와 로고 디자인에서도 무너지지 않는 디테일을 직접 확인하세요. 
                  세탁 후에도 변함없는 반짝임을 보장합니다.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="font-body-md">고밀도 마이크로 글리터 입자</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="font-body-md">정밀한 레이저 커팅 대응</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="font-body-md">강력한 열 압착 내구성</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Color & Material Spectrum Section */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="font-h2 text-h2 mb-4">300+ 컬러 & 소재 스펙트럼</h2>
              <p className="text-on-surface-variant font-body-lg">
                PU, 반사 필름, 홀로그램, 그리고 특수 렌티큘러 소재까지. 
                신의데코프린팅이 보유한 방대한 소재 차트를 통해 당신의 상상력을 무한히 확장하세요.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-outline-variant shadow-xl bg-white p-4">
              <img 
                alt="Complete Material Chart" 
                className="w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugh0At0ebiKx56P-vsgrUd7qSAuxnLR1C6qNNXJwH8B5Cf5XuAvUVZt83rBVYwDtIHh47RXeSFJ2Go8MFBQIJAy07Vs67YQ71O6bh7JRkVhOYmCEiRFemLRUfZkKgjrQlvBI5Rd9RNgq2Y9WzahJk8a1tUJo0oAjTFtC5ibeWTSR70mM5tZWTigkOzgnYYUJPtOSUm7Y_ybDITBxDV3Zy2NoU0KMkQ_st6ZpA4kcTG6aTbYMSbmart8ijutUjLLORKJgI6bQywj" 
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MainPage;
