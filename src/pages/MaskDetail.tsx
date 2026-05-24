import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PRODUCTS = [
  {
    id: 'mask-001',
    label: 'Glitter Series',
    name: '스파클 레드 시퀸 마스크',
    price: 12000,
    img: '/printing-landing/assets/mask-1.jpg',
  },
  {
    id: 'mask-002',
    label: 'Special Texture',
    name: '에메랄드 스케일 마스크',
    price: 15000,
    img: '/printing-landing/assets/mask-2.jpg',
  },
  {
    id: 'mask-003',
    label: 'Tech Wear',
    name: '카본 실버 패턴 마스크',
    price: 13500,
    img: '/printing-landing/assets/mask-3.jpg',
  },
  {
    id: 'mask-004',
    label: 'Material Spectrum',
    name: '메탈릭 퍼플 아트 마스크',
    price: 14000,
    img: '/printing-landing/assets/mask-4.jpg',
  },
  {
    id: 'mask-005',
    label: 'Holographic Series',
    name: '스마일리 홀로그램 마스크',
    price: 16000,
    img: '/printing-landing/assets/mask-5.png',
  },
  {
    id: 'mask-006',
    label: 'Grid Pattern',
    name: '푸시아 파인 그리드 마스크',
    price: 15500,
    img: '/printing-landing/assets/mask-6.png',
  },
  {
    id: 'mask-007',
    label: 'Custom Design',
    name: '글리터 & 반사 커스텀 마스크',
    price: 14500,
    img: '/printing-landing/assets/mask-7.jpg',
  },
  {
    id: 'mask-008',
    label: 'Pattern Wear',
    name: '에포키 패턴 패션 마스크',
    price: 16500,
    img: '/printing-landing/assets/mask-8.jpg',
  },
];

const MaskDetail = () => {
  const handleInquiry = () => {
    window.location.href = 'mailto:contact@godsdeco.com';
  };

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main>
        {/* Category Header */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-3">
              <Link to="/" className="hover:text-primary transition-colors">홈</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-on-surface font-bold">마스크</span>
            </nav>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold text-on-surface">프리미엄 마스크 컬렉션</h1>
            <p className="text-on-surface-variant mt-3 max-w-2xl text-lg">
              신의데코프린팅의 독보적인 열전사 필름 기술로 탄생한 프리미엄 마스크 라인업입니다.
              화려한 글리터부터 세련된 카본 텍스처까지, 당신의 스타일을 완성하세요.
            </p>
          </div>
        </section>

        {/* ── 이미지 1: 아트 프린팅 마스크 히어로 배너 ── */}
        <section className="py-16 bg-[#0b1c30]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">Art Printing Series</span>
              <h2 className="font-['Space_Grotesk'] text-white text-4xl lg:text-5xl font-bold">예술을 입다, 아트 마스크</h2>
              <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">글리터·홀로그램·네온 특수 필름으로 완성한 신의데코 시그니처 마스크 컬렉션</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                alt="Art Printing Mask Collection - 3 styles"
                className="w-full h-auto object-cover"
                src="/printing-landing/assets/mask-series-1.png"
              />
            </div>
          </div>
        </section>

        {/* ── 이미지 2: 컬러 라인업 전체 ── */}
        <section className="py-16 bg-surface">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Full Color Lineup</span>
                <h2 className="font-['Space_Grotesk'] text-4xl font-bold">컬러 라인업 전체 보기</h2>
                <p className="text-on-surface-variant mt-3 max-w-xl">화이트·블랙·스킨·인디아·후체 등 다양한 원단 컬러에 맞춘 전사 디자인을 제공합니다.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['화이트', '블랙', '스킨', '인디아', '후체'].map(c => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant text-xs font-bold text-on-surface-variant">{c}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-outline-variant">
              <img
                alt="Full Color Lineup - 10 mask colors"
                className="w-full h-auto object-cover"
                src="/printing-landing/assets/mask-series-2.jpg"
              />
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Shop Now</span>
              <h2 className="font-['Space_Grotesk'] text-4xl font-bold">제품 선택</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map(p => (
                <div key={p.id} className="product-card group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-surface-container">
                    <img
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={p.img}
                    />
                    <div className="product-action absolute inset-0 bg-[#0b1c30]/60 backdrop-blur-[2px] flex flex-col justify-center items-center gap-3 p-6">
                      <button
                        onClick={handleInquiry}
                        className="w-full py-3 bg-white text-[#0b1c30] rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
                      >
                        제작 문의하기
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase">{p.label}</span>
                    <h3 className="text-sm font-bold mt-1">{p.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">favorite</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 이미지 3: 베이직 넥 가이터 + 소재 설명 ── */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Basic Lineup</span>
                <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">마스크 전용 고신축 필름</h2>
                <p className="text-on-surface-variant text-lg mb-8">
                  마스크는 움직임이 많고 잦은 세탁이 필요합니다. 신의데코프린팅의 마스크 전용 열전사 필름은
                  뛰어난 신축성과 내구성을 자랑하며, 피부에 자극이 없는 안전한 소재만을 사용합니다.
                </p>
                <ul className="space-y-3 mb-8">
                  {['OEKO-TEX 친환경 인증 소재', '30회 이상 세탁 후에도 변함없는 부착력', '다양한 원단(면, 폴리, 혼방) 완벽 대응', '화이트 / 블랙 / 스킨 3가지 베이직 컬러'].map(t => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-base">{t}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleInquiry}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  제작 문의하기 <span className="material-symbols-outlined">mail</span>
                </button>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant">
                  <img
                    alt="Basic Neck Gaiter Mask - White, Black, Skin"
                    className="w-full h-auto"
                    src="/printing-landing/assets/mask-series-3.jpg"
                  />
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

export default MaskDetail;
