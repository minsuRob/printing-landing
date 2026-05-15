import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const TEXTURES = [
  { key: 'Champagne Gold', from: '#D4AF37', to: '#F9E498' },
  { key: 'Galaxy Silver', from: '#71706E', to: '#E5E4E2' },
  { key: 'Rose Pink', from: '#E0115F', to: '#FFC1CC' },
];

const BagDetail = () => {
  const navigate = useNavigate();
  const [selectedTexture, setSelectedTexture] = useState('Champagne Gold');
  const [selectedColor, setSelectedColor] = useState('Natural');
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: 'bag-001',
      name: '글리터 커스텀 캔버스 백',
      price: 25000,
      image: '/printing-landing/assets/bag.png',
      category: '가방/모자',
      texture: selectedTexture,
    });
  };

  const handleBuyNow = () => {
    handleAdd();
    navigate('/checkout');
  };

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-8">
          <Link to="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">가방/모자</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Product Images (기존 동일 레이아웃: 메인 + 2열 그리드) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            {/* 기존 메인 이미지 동일 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm aspect-square">
              <img
                alt="글리터 커스텀 캔버스 백"
                className="w-full h-full object-cover"
                src="/printing-landing/assets/bag.png"
              />
            </div>
            {/* 신규 디테일 그리드 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-outline-variant/30">
                <img
                  alt="디테일 1"
                  className="w-full h-48 md:h-64 object-cover"
                  src="/printing-landing/assets/bag-1.jpg"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-outline-variant/30">
                <img
                  alt="디테일 2"
                  className="w-full h-48 md:h-64 object-cover"
                  src="/printing-landing/assets/bag-2.jpg"
                />
              </div>
            </div>
          </div>

          {/* Right: Product Info (기존 동일) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 sticky top-24 h-fit">
            <section>
              <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full mb-3 inline-block">베스트 셀러</span>
              <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-on-surface mb-3">글리터 커스텀 캔버스 백</h1>
            </section>

            <hr className="border-outline-variant/30" />

            {/* Feature List */}
            <div className="space-y-3">
              {['100% 프리미엄 헤비 캔버스', '떨어지지 않는 강력한 글리터 열전사 필름', '이중 보강 스티칭 마감'].map(f => (
                <div key={f} className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-sm font-semibold">{f}</span>
                </div>
              ))}
            </div>

            {/* Texture Selection */}
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-on-surface mb-3 block">글리터 텍스처 선택</label>
                <div className="flex flex-wrap gap-4">
                  {TEXTURES.map(t => (
                    <button
                      key={t.key}
                      onClick={() => setSelectedTexture(t.key)}
                      className={`flex flex-col items-center gap-1 transition-all ${selectedTexture !== t.key ? 'opacity-60' : ''}`}
                    >
                      <div className={`w-12 h-12 rounded-full border-2 p-0.5 ${selectedTexture === t.key ? 'border-primary' : 'border-transparent'}`}>
                        <div
                          className="w-full h-full rounded-full shadow-inner"
                          style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${selectedTexture === t.key ? 'text-primary' : 'text-on-surface-variant'}`}>{t.key}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bag Color */}
              <div>
                <label className="text-sm font-semibold text-on-surface mb-3 block">가방 컬러</label>
                <div className="flex gap-3">
                  {['Natural', 'Black'].map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-5 py-2 rounded-xl border-2 text-sm font-semibold transition-all ${selectedColor === c ? 'border-primary text-primary bg-primary/5' : 'border-outline-variant text-on-surface-variant'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="flex-1 h-14 btn-gradient text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:shadow-primary/20 transition-all"
                onClick={() => window.location.href = 'mailto:contact@godsdeco.com'}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                제작 문의하기
              </button>
            </div>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="mt-20 space-y-20">
          {/* Product Detail Photos (기존 동일 레이아웃) */}
          <section className="space-y-8">
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-on-surface text-center">제품 상세 정보</h3>
            <div className="bg-surface-container-low rounded-3xl p-6 md:p-12 space-y-8">
              <p className="text-on-surface-variant text-lg max-w-3xl mx-auto text-center">
                프레스프로의 커스텀 글리터 백은 특수 열전사 공법을 통해 제작되어 장시간 사용에도 반짝임이 유지됩니다.
                일상의 특별함을 더해주는 화려한 포인트 아이템으로 추천드립니다.
              </p>
              {/* 신규 2열 이미지 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  alt="다양한 디자인 1"
                  className="rounded-2xl w-full"
                  src="/printing-landing/assets/bag-3.jpg"
                />
                <img
                  alt="다양한 디자인 2"
                  className="rounded-2xl w-full"
                  src="/printing-landing/assets/bag-4.jpg"
                />
              </div>
            </div>
          </section>

          {/* Recommendations - 가로 스크롤 (기존 동일) */}
          <section className="space-y-6">
            <div className="flex justify-between items-end">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-on-surface">함께 추천하는 아이템</h3>
              <button className="text-primary font-semibold text-sm">전체보기</button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {[
                { name: '커스텀 네임 택', img: '/printing-landing/assets/bag-1.jpg' },
                { name: '프리미엄 세탁 망', img: '/printing-landing/assets/bag-2.jpg' },
                { name: '캔버스 전용 클리너', img: '/printing-landing/assets/bag-3.jpg' },
              ].map(r => (
                <div key={r.name} className="min-w-[280px] group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={r.img} />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-on-surface">{r.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Info */}
          <section className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/20">
            <h4 className="font-semibold text-on-surface mb-6">배송 및 환불 정보</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'local_shipping', title: '배송 안내', desc: '평균 3-5 영업일 소요 (커스텀 제작 포함)' },
                { icon: 'package_2', title: '포장 상태', desc: '친환경 완충재 사용, 선물용 박스 포장' },
                { icon: 'assignment_return', title: '교환/반품', desc: '주문 제작 상품의 특성상 단순 변심 불가' },
              ].map(s => (
                <div key={s.title} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{s.title}</p>
                    <p className="text-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BagDetail;
