import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const SneakerDetail = () => {
  const [mainImg, setMainImg] = useState(
    '/printing-landing/assets/sneaker-run-1.jpg'
  );

  // 제작 문의하기 버튼 클릭 시 이메일 연결
  const handleInquiry = () => {
    window.location.href = 'mailto:contact@godsdeco.com';
  };

  // 기존 썸네일 이미지들 동일
  const thumbs = [
    '/printing-landing/assets/sneaker-run-1.jpg',
    '/printing-landing/assets/sneaker-run-2.jpg',
    '/printing-landing/assets/sneaker-run-3.jpg',
    '/printing-landing/assets/sneaker-run-4.jpg',
  ];

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main className="pb-8">
        {/* 기존 메인 갤러리: aspect-square + 하단 썸네일 floating */}
        <section className="relative bg-surface-container-low overflow-hidden">
          <div className="aspect-square w-full max-h-[600px]">
            <img
              alt="네온 홀로그램 스니커즈"
              className="w-full h-full object-cover"
              src={mainImg}
            />
          </div>
          {/* 기존 하단 썸네일 floating (동일 위치) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-6 overflow-x-auto">
            {thumbs.map((t, i) => (
              <div
                key={i}
                onClick={() => setMainImg(t)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 cursor-pointer transition-all ${mainImg === t ? 'border-primary shadow-lg' : 'border-transparent bg-surface-container'}`}
              >
                <img alt={`썸네일 ${i + 1}`} className="w-full h-full object-cover" src={t} />
              </div>
            ))}
          </div>
        </section>

        {/* Product Info (기존 동일 레이아웃) */}
        <section className="px-6 pt-8 max-w-[1280px] mx-auto">
          <div className="flex justify-between items-start mb-2">
            <span className="bg-secondary-container text-on-secondary-container text-xs font-semibold px-3 py-1 rounded-full">NEW ARRIVAL</span>
            <button className="text-outline hover:text-error transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <h1 className="font-['Space_Grotesk'] text-3xl font-bold mb-3">네온 홀로그램 스니커즈</h1>

          {/* USP Cards (기존 2열 동일) */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: 'layers', title: '다양한 공법', desc: '매트, 홀로그램, 반사, 형광' },
              { icon: 'brush', title: '심플 커스텀', desc: '미니멀 로고 및 그래픽 적용' },
            ].map(u => (
              <div key={u.title} className="bg-white border border-outline-variant p-4 rounded-xl flex items-center gap-3">
                <div className="bg-primary-fixed text-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined">{u.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{u.title}</p>
                  <p className="text-xs text-on-surface-variant">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-outline-variant/30 mb-8" />



          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              className="flex-1 h-14 btn-gradient text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:shadow-primary/20 transition-all"
              onClick={() => window.location.href = 'mailto:contact@godsdeco.com'}
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              제작 문의하기
            </button>
          </div>
        </section>

        {/* Content tabs / description */}
        <section className="mt-12 max-w-[1280px] mx-auto">
          <div className="flex border-b border-outline-variant/30 px-6">
            <button className="flex-1 py-4 border-b-2 border-primary text-primary font-semibold text-sm">상품정보</button>
            <button className="flex-1 py-4 text-on-surface-variant text-sm">상세리뷰 (56)</button>
            <button className="flex-1 py-4 text-on-surface-variant text-sm">배송/환불</button>
          </div>
          <div className="px-6 py-8 space-y-12">
            <div className="space-y-6">
              <h3 className="font-['Space_Grotesk'] text-2xl font-semibold">고기능성 패브릭과 프리미엄 열전사 필름의 만남</h3>
              <p className="text-on-surface-variant leading-relaxed">
                신의데코프린팅만의 독자적인 열압착 기술로 제작된 '네온 홀로그램 스니커즈'는 기존 프린팅 방식의 한계를 넘었습니다.
                수만 번의 굴곡 테스트를 통과한 유연한 프리미엄 홀로그램 필름은 격한 움직임에도 갈라짐이나 떨어짐이 없습니다.
              </p>
              {/* 기존 제작공정 이미지 동일 위치 */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  alt="열전사 필름 제작 공정"
                  className="w-full"
                  src="/printing-landing/assets/sneaker-run-2.jpg"
                />
              </div>
            </div>

            <div className="bg-surface-container p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary-container text-white p-3 rounded-2xl">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-xl font-semibold">커스텀 디테일</h4>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                우리는 단순히 무늬를 입히는 것이 아니라, 스니커즈의 실루엣을 따라 정교하게 설계된 패턴을 입힙니다.
              </p>
              {/* 기존 디테일 2열 이미지 동일 위치 */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="디테일 컷 1"
                  className="aspect-square rounded-xl object-cover"
                  src="/printing-landing/assets/sneaker-run-3.jpg"
                />
                <img
                  alt="디테일 컷 2"
                  className="aspect-square rounded-xl object-cover"
                  src="/printing-landing/assets/sneaker-run-4.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products (기존 2x1 bento 동일) */}
        <section className="px-6 mt-12 mb-8 max-w-[1280px] mx-auto">
          <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-6">글리터 에디션 완성하기</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* 기존 와이드 카드 동일 위치 */}
            <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <img
                alt="글리터 커스텀 티셔츠"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/printing-landing/assets/sneaker-run-1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs font-semibold mb-1">BEST MATCHING</span>
                <h4 className="text-white font-['Space_Grotesk'] text-2xl font-bold mb-1">글리터 메탈릭 티셔츠</h4>
              </div>
            </div>
            {/* 기존 두 번째, 세 번째 작은 카드 동일 위치 */}
            <div className="bg-white border border-outline-variant p-4 rounded-2xl">
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  alt="글리터 마스크"
                  className="w-full h-full object-cover"
                  src="/printing-landing/assets/sneaker-run-3.jpg"
                />
              </div>
              <p className="font-semibold text-sm truncate">글리터 포인트 마스크</p>
            </div>
            <div className="bg-white border border-outline-variant p-4 rounded-2xl">
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  alt="글리터 에코백"
                  className="w-full h-full object-cover"
                  src="/printing-landing/assets/sneaker-run-4.jpg"
                />
              </div>
              <p className="font-semibold text-sm truncate">메탈릭 로고 에코백</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SneakerDetail;
