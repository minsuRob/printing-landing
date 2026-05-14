import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PORTFOLIO_ITEMS = [
  { id: 1, title: '프리미엄 필름 컬러 가이드', category: 'T-shirt', img: '/printing-landing/assets/film-color-chart.jpg', client: '신의데코 표준 규격' },
  { id: 2, title: '메탈릭 실버 커스텀 스니커즈', category: 'Sneaker', img: '/printing-landing/assets/cat-sneaker.jpg', client: 'Individual Order' },
  { id: 3, title: '홀로그램 포인트 마스크', category: 'Mask', img: '/printing-landing/assets/cat-mask.jpg', client: 'Fashion Group B' },
  { id: 4, title: '골드 로고 캔버스 에코백', category: 'Bag', img: '/printing-landing/assets/cat-bag.jpg', client: 'Gift Shop C' },
  { id: 5, title: '네온 핑크 스트릿 후디', category: 'T-shirt', img: '/printing-landing/assets/tshirt.png', client: 'Club X' },
  { id: 6, title: '카본 텍스처 하이탑', category: 'Sneaker', img: '/printing-landing/assets/sneaker.png', client: 'Pro Athlete' },
  { id: 7, title: '블루 시퀸 포인트 마스크', category: 'Mask', img: '/printing-landing/assets/mask.png', client: 'Cafe Staff' },
  { id: 8, title: '매트 블랙 레더 백팩', category: 'Bag', img: '/printing-landing/assets/bag.png', client: 'Designer Brand' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'T-shirt', 'Sneaker', 'Mask', 'Bag'];

  const filteredItems = filter === 'All' 
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
                  to={item.category === 'T-shirt' ? '/tshirt-printing' : item.category === 'Sneaker' ? '/sneaker-printing' : '/'}
                  className="w-full py-3 bg-white text-black text-center rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  비슷한 스타일 주문하기
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
            <Link to="/tshirt-printing" className="btn-gradient px-12 py-4 rounded-xl text-white font-bold shadow-lg">
              커스텀 주문 시작하기
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
