import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const SAMPLES = [
  {
    id: 'film-sample-01',
    label: 'Sample Pack 1',
    name: '스파클 & 엠보싱 믹스 샘플',
    price: 15000,
    img: '/printing-landing/assets/film-sample-2.jpg',
  },
  {
    id: 'film-sample-02',
    label: 'Sample Pack 2',
    name: '솔리드 컬러 PU 샘플 스와치',
    price: 12000,
    img: '/printing-landing/assets/film-sample-3.jpg',
  },
  {
    id: 'film-sample-03',
    label: 'Sample Pack 3',
    name: '홀로그램 & 특수 반사 필름 샘플',
    price: 18000,
    img: '/printing-landing/assets/film-sample-4.jpg',
  },
  {
    id: 'film-sample-04',
    label: 'Sample Pack 4',
    name: '텍스처 & 프리미엄 필름 팩',
    price: 20000,
    img: '/printing-landing/assets/film-sample-5.jpg',
  },
];

const FilmSampleDetail = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (s: typeof SAMPLES[0]) => {
    addItem({ id: s.id, name: s.name, price: s.price, image: s.img, category: '필름 샘플' });
    setAdded(s.id);
    setTimeout(() => setAdded(null), 1500);
  };

  const handleBuy = (s: typeof SAMPLES[0]) => {
    addItem({ id: s.id, name: s.name, price: s.price, image: s.img, category: '필름 샘플' });
    navigate('/checkout');
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
              <span className="text-on-surface font-bold">필름 샘플</span>
            </nav>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold text-on-surface">프리미엄 필름 샘플북</h1>
            <p className="text-on-surface-variant mt-3 max-w-2xl text-lg">
              원하는 컬러와 질감을 직접 눈으로 확인하고 만져보세요.
              다양한 라인업의 필름을 소량으로 테스트해 볼 수 있는 샘플 패키지입니다.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SAMPLES.map(s => (
                <div key={s.id} className="product-card group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-surface-container">
                    <img
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={s.img}
                    />
                    <div className="product-action absolute inset-0 bg-[#0b1c30]/60 backdrop-blur-[2px] flex flex-col justify-center items-center gap-3 p-6">
                      <button
                        onClick={() => handleBuy(s)}
                        className="w-full py-3 bg-white text-[#0b1c30] rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
                      >
                        바로 구매
                      </button>
                      <button
                        onClick={() => handleAdd(s)}
                        className={`w-full py-3 border border-white/50 text-white rounded-xl font-bold text-sm transition-all ${added === s.id ? 'bg-green-500 border-green-500' : 'hover:bg-white/10'}`}
                      >
                        {added === s.id ? '✓ 담겼습니다' : '장바구니'}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase">{s.label}</span>
                    <h3 className="text-sm font-bold mt-1">{s.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-primary font-bold">₩{s.price.toLocaleString()}</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">favorite</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">샘플 확인의 중요성</h2>
              <p className="text-on-surface-variant text-lg mb-8">
                모니터 화면과 실제 출력물의 색상이나 질감은 다를 수 있습니다.
                대량 제작 전 샘플북을 통해 원단 부착성, 색감, 그리고 필름 고유의 텍스처를 미리 경험해 보세요.
              </p>
              <ul className="space-y-3 inline-block text-left">
                {['정확한 컬러 칩 대조 가능', '세탁 테스트를 통한 내구성 직접 확인', '홀로그램/반사 필름의 실제 광택 확인'].map(t => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">science</span>
                    <span className="text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FilmSampleDetail;
