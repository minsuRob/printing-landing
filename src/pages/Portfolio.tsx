import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PORTFOLIO_ITEMS = [
  { id: 1, title: '골드 로고 캔버스 에코백', category: '가방', img: '/printing-landing/assets/bag-hologram.png', client: 'Gift Shop C' },
  { id: 2, title: '메탈릭 실버 커스텀 스니커즈', category: '신발', img: '/printing-landing/assets/cat-sneaker.jpg', client: 'Individual Order' },
  { id: 3, title: '프리미엄 글리터 로고 볼캡', category: '모자', img: '/printing-landing/assets/cat-hat.jpg', client: 'Street Brand' },
  { id: 4, title: '시그니처 미니멀 홀로그램 티', category: '티셔츠', img: '/printing-landing/assets/tshirt-series-1.jpg', client: 'Minimal Brand B' },
  { id: 5, title: '홀로그램 포인트 마스크', category: '마스크', img: '/printing-landing/assets/cat-mask.jpg', client: 'Fashion Group B' },
  { id: 6, title: '열전사 프리미엄 롤 필름', category: '필름', img: '/printing-landing/assets/film-1.jpg', client: '신의데코 표준 규격' },
  { id: 7, title: '반짝이 열전사 디자인 샘플', category: '필름 샘플', img: '/printing-landing/assets/film-sample-1.jpg', client: 'Sample Book' },
  { id: 8, title: '커스텀 굿즈 패키지', category: '기타', img: '/printing-landing/assets/tshirt.png', client: 'Corporate Event' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('전체보기');
  const categories = ['전체보기', '가방', '신발', '모자', '티셔츠', '마스크', '필름', '필름 샘플', '기타'];

  const filteredItems = filter === '전체보기' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Hero */}
        <section className="text-center mb-16 animate-fadeIn">
          <h1 className="font-['Space_Grotesk'] text-5xl font-bold mb-6">제작 포트폴리오</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            신의데코프린팅의 기술력과 감각이 만난 다양한 프로젝트 결과물입니다.<br/>
            수많은 브랜드와 개인이 선택한 퀄리티를 직접 확인해보세요.
          </p>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'}`}
            >
              {cat === 'All' ? '전체보기' : cat}
            </button>
          ))}
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden bg-white border border-outline-variant/30 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm mb-4">Client: {item.client}</p>
                <Link
                  to={
                    item.category === '티셔츠' ? '/tshirt-printing' : 
                    item.category === '신발' ? '/sneaker-printing' : 
                    item.category === '모자' ? '/hat-printing' :
                    item.category === '가방' ? '/bag-printing' :
                    item.category === '마스크' ? '/mask-printing' :
                    item.category === '필름' ? '/film-printing' :
                    item.category === '필름 샘플' ? '/film-sample' : '/'
                  }
                  className="w-full py-3 bg-white text-black text-center rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  제작 가이드 보기
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-surface-container-low rounded-[40px] p-12 text-center border border-outline-variant/20">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">나만의 커스텀을 시작하고 싶으신가요?</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            포트폴리오의 영감을 현실로 만들어보세요. 대량 문의부터 단 하나의 작품까지 정성을 다해 제작합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/production-guide" className="btn-gradient px-12 py-4 rounded-xl text-white font-bold shadow-lg">
              제작 가이드 보기
            </Link>
            <button className="bg-white border border-outline-variant px-12 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all">
              견적 문의하기
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
