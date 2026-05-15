import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PRODUCT = {
  id: 'hat-001',
  name: '프리미엄 커스텀 자수/열전사 볼캡',
  category: '모자',
  price: 28000,
  originalPrice: 35000,
  badge: '베스트셀러',
  desc: '각이 살아있는 핏과 고퀄리티 전사의 만남. 유니크한 모자로 당신의 개성을 표현하세요.',
  mainImg: '/printing-landing/assets/hat-1.jpg',
  thumbs: [
    '/printing-landing/assets/hat-1.jpg',
    '/printing-landing/assets/hat-2.jpg',
    '/printing-landing/assets/hat-3.jpg',
    '/printing-landing/assets/hat-4.jpg',
    '/printing-landing/assets/hat-glitter-1.png',
    '/printing-landing/assets/hat-glitter-2.png',
    '/printing-landing/assets/hat-glitter-3.png',
    '/printing-landing/assets/hat-glitter-4.png',
  ],
};

const TEXTURES = [
  { key: '골드', cls: 'texture-glitter-gold' },
  { key: '실버', cls: 'texture-glitter-silver' },
  { key: '매트블랙', cls: 'texture-matte-black' },
];

const HatDetail = () => {
  const navigate = useNavigate();
  const [selectedTexture, setSelectedTexture] = useState('골드');
  const [mainImg, setMainImg] = useState(PRODUCT.mainImg);
  const { addItem } = useCart();

  const handleAddCart = () => {
    addItem({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      image: PRODUCT.mainImg,
      category: PRODUCT.category,
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
        <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-8">
          <Link to="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">모자</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-4">
            <div className="rounded-xl overflow-hidden bg-white border border-outline-variant/30 shadow-sm group">
              <img
                alt="Custom Hat"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                src={mainImg}
              />
            </div>
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
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-28 space-y-6 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {PRODUCT.badge}
                </span>
                <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-on-surface mb-2">{PRODUCT.name}</h1>
                <p className="text-on-surface-variant text-sm">{PRODUCT.desc}</p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  className="btn-gradient w-full text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'mailto:contact@godsdeco.com'}
                >
                  <span className="material-symbols-outlined">mail</span>
                  제작 문의하기
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-1 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span className="text-sm">빠른 배송</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="text-sm">품질 보증</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HatDetail;
