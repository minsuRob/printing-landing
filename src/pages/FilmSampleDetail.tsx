import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const SLIDES = [
  '/printing-landing/assets/slide-0.jpg',
  '/printing-landing/assets/slide-1.jpg',
  '/printing-landing/assets/slide-2.jpg',
  '/printing-landing/assets/slide-3.jpg',
  '/printing-landing/assets/slide-4.jpg',
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        {/* Category Header with Slideshow */}
        <section className="relative min-h-[50vh] flex items-center bg-[#0b1c30] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <style>{`
              @keyframes slideDynamic {
                0% { transform: scale(1.05); filter: brightness(0.9); }
                100% { transform: scale(1.15); filter: brightness(1.1); }
              }
              .animate-slide-dynamic {
                animation: slideDynamic 20s ease-in-out infinite alternate;
              }
            `}</style>
            
            {SLIDES.map((slide, index) => (
              <img 
                key={slide}
                alt={`Sample slide ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover object-center animate-slide-dynamic transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentSlide ? 'opacity-90 z-10' : 'opacity-0 z-0'
                }`}
                src={slide} 
              />
            ))}
            <div className="absolute inset-0 bg-[#0b1c30]/70 z-20"></div>
          </div>

          <div className="relative z-30 max-w-[1280px] mx-auto px-6 w-full py-20 text-white">
            <nav className="flex items-center gap-1 text-sm text-white/60 mb-3">
              <Link to="/" className="hover:text-primary transition-colors">홈</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="font-bold text-white">필름 디자인 (샘플)</span>
            </nav>
            <h1 className="font-['Space_Grotesk'] text-5xl lg:text-6xl font-bold mb-4">
              프리미엄 필름 디자인 북
            </h1>
            <p className="text-white/80 max-w-2xl text-lg lg:text-xl font-medium leading-relaxed">
              화려한 스파클 글리터부터 홀로그램까지, 상상을 현실로 만들어줄 
              다양한 특수 열전사 필름 라인업을 생생하게 경험해보세요.
            </p>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
                        onClick={() => window.location.href = 'mailto:contact@godsdeco.com'}
                        className="w-full py-3 bg-white text-[#0b1c30] rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all"
                      >
                        제작 문의하기
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase">{s.label}</span>
                    <h3 className="text-sm font-bold mt-1">{s.name}</h3>
                    <div className="flex justify-between items-center mt-3">
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
