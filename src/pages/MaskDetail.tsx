import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  {
    id: 'mask-001',
    label: 'Glitter Series',
    name: '스파클 레드 시퀸 마스크',
    price: 12000,
    // 기존 이미지 동일
    img: './assets/mask.png',
  },
  {
    id: 'mask-002',
    label: 'Special Texture',
    name: '에메랄드 스케일 마스크',
    price: 15000,
    img: './assets/mask.png',
  },
  {
    id: 'mask-003',
    label: 'Tech Wear',
    name: '카본 실버 패턴 마스크',
    price: 13500,
    img: './assets/mask.png',
  },
  {
    id: 'mask-004',
    label: 'Material Spectrum',
    name: '메탈릭 퍼플 아트 마스크',
    price: 14000,
    img: './assets/mask.png',
  },
];

const MaskDetail = () => {
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.img, category: '마스크' });
    setAdded(p.id);
    setTimeout(() => setAdded(null), 1500);
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

        {/* Product Grid */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            {/* 기존 상단 와이드 이미지 동일 위치 */}
            <div className="mb-20 rounded-3xl overflow-hidden border border-outline-variant shadow-lg">
              <img
                alt="Premium Mask Collection Overview"
                className="w-full h-auto object-cover"
                src="./assets/mask.png"
              />
            </div>

            {/* 4칸 상품 그리드 (기존 동일) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map(p => (
                <div key={p.id} className="product-card group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-surface-container">
                    <img
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={p.img}
                    />
                    <div className="product-action absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-end p-4">
                      <button
                        onClick={() => handleAdd(p)}
                        className={`w-full py-2.5 rounded-lg font-semibold text-sm shadow-lg transition-all ${added === p.id ? 'bg-green-500 text-white' : 'btn-gradient text-white'}`}
                      >
                        {added === p.id ? '✓ 담았습니다' : '장바구니 담기'}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase">{p.label}</span>
                    <h3 className="text-sm font-bold mt-1">{p.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-primary font-bold">₩{p.price.toLocaleString()}</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">favorite</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material Details (기존 동일 레이아웃: 텍스트 left, 이미지 right) */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">마스크 전용 고신축 필름</h2>
                <p className="text-on-surface-variant text-lg mb-8">
                  마스크는 움직임이 많고 잦은 세탁이 필요합니다. 신의데코프린팅의 마스크 전용 열전사 필름은
                  뛰어난 신축성과 내구성을 자랑하며, 피부에 자극이 없는 안전한 소재만을 사용합니다.
                </p>
                <ul className="space-y-3">
                  {['OEKO-TEX 친환경 인증 소재', '30회 이상 세탁 후에도 변함없는 부착력', '다양한 원단(면, 폴리, 혼방) 완벽 대응'].map(t => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-base">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 기존 재료 이미지 동일 위치 */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant">
                  <img
                    alt="Material Palette"
                    className="w-full h-auto"
                    src="./assets/mask.png"
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
