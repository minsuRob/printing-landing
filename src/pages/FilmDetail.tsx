import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  {
    id: 'film-001',
    label: 'Basic Film',
    name: '매트 & 홀로그램 필름 롤',
    price: 35000,
    img: '/printing-landing/assets/film-1.jpg',
  },
  {
    id: 'film-002',
    label: 'Patterned Film',
    name: '패턴 & 질감형 필름 롤',
    price: 42000,
    img: '/printing-landing/assets/film-2.jpg',
  },
  {
    id: 'film-003',
    label: 'Specialty Film',
    name: '특수 크롬 & 카멜레온 필름',
    price: 45000,
    img: '/printing-landing/assets/film-3.jpg',
  },
  {
    id: 'film-004',
    label: 'Premium Film',
    name: '프리미엄 기하학 & 엠보싱 필름',
    price: 55000,
    img: '/printing-landing/assets/film-4.jpg',
  },
];

const FilmDetail = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.img, category: '필름' });
    setAdded(p.id);
    setTimeout(() => setAdded(null), 1500);
  };

  const handleBuy = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.img, category: '필름' });
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
              <span className="text-on-surface font-bold">필름 라인업</span>
            </nav>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold text-on-surface">프리미엄 열전사 필름 컬렉션</h1>
            <p className="text-on-surface-variant mt-3 max-w-2xl text-lg">
              다양한 소재와 질감, 화려한 이펙트를 자랑하는 열전사 필름 라인업입니다.
              기본 매트부터 홀로그램, 엠보싱 패턴까지 무한한 디자인을 완성해 보세요.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
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
                        onClick={() => window.location.href = 'mailto:contact@godsdeco.com'}
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

        {/* Material Details */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">신의데코프린팅 열전사 필름의 차별점</h2>
              <p className="text-on-surface-variant text-lg mb-8">
                최상급 원료와 독자적인 코팅 기술로 제작되어 작업이 매우 부드럽고 떨어지지 않는 강력한 부착력을 자랑합니다.
                의류는 물론 가방, 모자, 신발 등 어떠한 원단에도 완벽하게 부착됩니다.
              </p>
              <ul className="space-y-3 inline-block text-left">
                {['탁월한 내세탁성과 색상 보존력', '초보자도 쉬운 커팅 및 위딩(Weeding) 작업', '유해 물질 없는 친환경 안전 소재'].map(t => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">verified</span>
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

export default FilmDetail;
