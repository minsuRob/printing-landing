import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PRODUCT = {
  id: 'tshirt-001',
  name: '프리미엄 글리터 열전사 필름 커스텀 티셔츠',
  category: '티셔츠',
  price: 35000,
  originalPrice: 42000,
  badge: '프리미엄 에디션',
  desc: '고해상도 홀로그램 만다라 디자인과 최상급 글리터 원단의 만남. 당신만의 빛나는 스타일을 완성하세요.',
  // 기존 이미지 동일
  mainImg: '/printing-landing/assets/tshirt.png',
  thumbs: [
    '/printing-landing/assets/tshirt.png',
    '/printing-landing/assets/tshirt.png',
  ],
  washImg: '/printing-landing/assets/tshirt.png',
};

const TEXTURES = [
  { key: '골드', cls: 'texture-glitter-gold' },
  { key: '실버', cls: 'texture-glitter-silver' },
  { key: '레인보우', cls: 'texture-glitter-rainbow' },
];
const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const TshirtPrintingDetail = () => {
  const navigate = useNavigate();
  const [selectedTexture, setSelectedTexture] = useState('골드');
  const [selectedSize, setSelectedSize] = useState('L');
  const [mainImg, setMainImg] = useState(PRODUCT.mainImg);
  const { addItem } = useCart();

  const handleAddCart = () => {
    addItem({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      image: PRODUCT.mainImg,
      category: PRODUCT.category,
      size: selectedSize,
      texture: selectedTexture,
    });
  };

  const handleBuyNow = () => {
    handleAddCart();
    navigate('/checkout');
  };

  return (
    <div className="bg-background text-on-surface font-body-md">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-8">
          <Link to="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">티셔츠</span>
        </nav>

        {/* ── Product Layout: Gallery Left / Info Right ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Product Gallery (기존 동일 구조) */}
          <div className="md:col-span-7 space-y-4">
            <div className="rounded-xl overflow-hidden bg-white border border-outline-variant/30 shadow-sm group">
              <img
                alt="Custom T-Shirt"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                src={mainImg}
              />
            </div>
            {/* 썸네일 4칸 (기존 동일) */}
            <div className="grid grid-cols-4 gap-3">
              {PRODUCT.thumbs.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setMainImg(t)}
                  className={`rounded-lg overflow-hidden aspect-square cursor-pointer border-2 transition-all ${mainImg === t ? 'border-primary ring-2 ring-primary/20 ring-offset-2' : 'border-outline-variant/20 opacity-60 hover:opacity-100'}`}
                >
                  <img className="w-full h-full object-cover" src={t} alt={`thumb-${i}`} />
                </div>
              ))}
              <div className="rounded-lg bg-surface-container-low border border-outline-variant/20 aspect-square flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">photo_library</span>
              </div>
              <div className="rounded-lg bg-surface-container-low border border-outline-variant/20 aspect-square flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">videocam</span>
              </div>
            </div>
          </div>

          {/* Right: Sticky Info Panel (기존 동일) */}
          <div className="md:col-span-5">
            <div className="sticky top-28 space-y-6 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {PRODUCT.badge}
                </span>
                <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-on-surface mb-2">{PRODUCT.name}</h1>
                <p className="text-on-surface-variant text-sm">{PRODUCT.desc}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2">
                <span className="font-['Space_Grotesk'] text-4xl font-bold text-primary">₩{PRODUCT.price.toLocaleString()}</span>
                <span className="text-on-surface-variant line-through mb-1 text-sm">₩{PRODUCT.originalPrice.toLocaleString()}</span>
                <span className="text-error text-sm font-semibold mb-1">
                  {Math.round((1 - PRODUCT.price / PRODUCT.originalPrice) * 100)}% 할인
                </span>
              </div>

              {/* Texture Selectors (기존 동일) */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface">비닐 텍스처 선택</label>
                <div className="flex gap-4">
                  {TEXTURES.map(t => (
                    <div
                      key={t.key}
                      onClick={() => setSelectedTexture(t.key)}
                      className="flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-full ${t.cls} inner-shadow-sm border-2 transition-all ${selectedTexture === t.key ? 'border-primary ring-2 ring-primary/20 ring-offset-2' : 'border-outline-variant/50 hover:border-primary'}`} />
                      <span className={`text-[10px] font-semibold ${selectedTexture === t.key ? 'text-primary' : 'text-on-surface-variant'}`}>{t.key}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selectors (기존 동일) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-on-surface">사이즈 선택</label>
                  <button className="text-primary text-xs font-semibold hover:underline">사이즈 가이드</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {SIZES.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2 rounded-lg text-sm font-semibold transition-all ${selectedSize === s ? 'border-2 border-primary bg-primary/10 text-primary' : 'border border-outline-variant/50 hover:border-primary text-on-surface'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={handleBuyNow}
                  className="btn-gradient w-full text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <span className="material-symbols-outlined">bolt</span>
                  바로 주문하기
                </button>
                <button
                  onClick={handleAddCart}
                  className="w-full bg-surface-container-high text-on-secondary-container py-4 rounded-xl font-semibold border border-outline-variant/30 hover:bg-surface-variant transition-all"
                >
                  장바구니 담기
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-8 pt-1 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span className="text-sm">무료 배송</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="text-sm">프리미엄 품질</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Production Process (기존 동일) ── */}
        <section className="mt-20 py-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-on-surface mb-2">정밀 공정 프로세스</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'draw', step: '1단계. 벡터 디자인', desc: '고객님의 디자인을 정밀 벡터 데이터로 변환하여 컷팅 플로터에 최적화된 경로를 생성합니다.' },
              { icon: 'content_cut', step: '2단계. 정밀 컷팅', desc: '프리미엄 글리터 열전사 필름을 0.1mm 오차 범위 내의 초정밀 레이저/플로터 컷팅으로 가공합니다.' },
              { icon: 'heat_pump', step: '3단계. 산업용 프레스', desc: '150°C의 고온과 3.5kg/cm²의 압력으로 섬유 조직 깊숙이 본딩하여 강력한 내구성을 확보합니다.' },
            ].map(s => (
              <div key={s.step} className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">{s.icon}</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold">{s.step}</h3>
                <p className="text-on-surface-variant text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Care Instructions (기존 이미지 동일 위치) ── */}
        <section className="py-20 border-t border-outline-variant/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-on-surface mb-4">세탁 및 관리 방법</h2>
              <p className="text-on-surface-variant text-base mb-8">오랫동안 변함없는 반짝임을 유지하기 위해 다음의 관리 수칙을 지켜주세요.</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'dry_cleaning', title: '뒤집어 세탁', desc: '세탁 시 옷을 뒤집어 디자인을 보호하세요.' },
                  { icon: 'ac_unit', title: '찬물 세탁', desc: '30도 이하의 찬물 세탁을 권장합니다.' },
                  { icon: 'mode_fan', title: '자연 건조', desc: '건조기 사용을 피하고 그늘에서 말리세요.' },
                  { icon: 'iron', title: '다림질 주의', desc: '프린팅 부위 위에 직접 다림질하지 마세요.' },
                ].map(c => (
                  <div key={c.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">{c.icon}</span>
                    <div>
                      <span className="text-sm font-semibold block">{c.title}</span>
                      <span className="text-xs text-on-surface-variant">{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 기존 세탁 이미지 동일 위치 */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all" />
              <img
                alt="Washing Care"
                className="relative rounded-2xl w-full h-80 object-cover shadow-lg"
                src={PRODUCT.washImg}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TshirtPrintingDetail;
