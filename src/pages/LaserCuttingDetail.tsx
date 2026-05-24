import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PRODUCT = {
  id: 'laser-001',
  name: '초정밀 산업용/의류용 레이저 컷팅 솔루션',
  category: '레이저 컷팅',
  badge: '신기술 도입',
  desc: '신의데코프린팅의 최첨단 자동화 레이저 설비로 구현하는 오차 없는 정밀 컷팅 서비스입니다. 아크릴 조각, 글자 컷팅 스티커, 커스텀 소품 제작까지 다양한 활용이 가능합니다. 고열 레이저를 통한 단면 열융착 공정으로 테두리 올 풀림을 근본적으로 방지합니다.',
  mainImg: 'https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-in-action-34538-large.mp4',
  thumbs: [
    'https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-in-action-34538-large.mp4',
    '/printing-landing/assets/laser-main.jpg',
    '/printing-landing/assets/laser-detail-1.jpg',
    '/printing-landing/assets/laser-detail-2.jpg',
    '/printing-landing/assets/laser-detail-3.jpg',
    '/printing-landing/assets/laser-detail-4.jpg',
    '/printing-landing/assets/laser-detail-5.jpg',
    '/printing-landing/assets/laser-detail-6.jpg',
    '/printing-landing/assets/laser-detail-7.jpg',
    '/printing-landing/assets/laser-detail-8.jpg',
    '/printing-landing/assets/laser-detail-9.jpg',
    '/printing-landing/assets/laser-2.jpg',
  ],
  specs: [
    { title: '가공 오차', value: '±0.05mm 이하 초정밀 제어' },
    { title: '적용 소재', value: 'HTV 전사필름, 폴리 원단, 가죽, 아크릴, 종이 등' },
    { title: '단면 마감', value: '자동 열융착(실 풀림 및 해짐 방지)' },
    { title: '생산 능력', value: '롤 피딩 자동화 설비 기반 대량 생산 체제 완벽 대응' }
  ]
};

const LaserCuttingDetail = () => {
  const [mainImg, setMainImg] = useState(PRODUCT.mainImg);

  const handleInquiry = () => {
    window.location.href = 'mailto:contact@godsdeco.com';
  };

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-8">
          <Link to="/" className="hover:text-primary transition-colors">홈</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-semibold">레이저 컷팅</span>
        </nav>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-xl group aspect-[4/3] relative">
              {mainImg.endsWith('.mp4') ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={mainImg}
                />
              ) : (
                <img
                  alt="Laser Cutting Process"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={mainImg}
                />
              )}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-3">
              {PRODUCT.thumbs.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setMainImg(t)}
                  className={`rounded-xl overflow-hidden aspect-square cursor-pointer border-2 transition-all ${
                    mainImg === t 
                      ? 'border-primary ring-4 ring-primary/20 ring-offset-2' 
                      : 'border-outline-variant/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  {t.endsWith('.mp4') ? (
                    <video className="w-full h-full object-cover" src={t} muted playsInline />
                  ) : (
                    <img className="w-full h-full object-cover" src={t} alt={`thumb-${i}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-lg">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  {PRODUCT.badge}
                </span>
                <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-on-surface mb-4 leading-tight">{PRODUCT.name}</h1>
                <p className="text-on-surface-variant text-base leading-relaxed">{PRODUCT.desc}</p>
              </div>

              <hr className="border-outline-variant/20" />

              {/* Technical Specifications */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">architecture</span>
                  기술 사양 및 특장점
                </h3>
                <dl className="grid grid-cols-1 gap-y-3 text-sm">
                  {PRODUCT.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between border-b border-outline-variant/10 pb-2">
                      <dt className="font-semibold text-on-surface-variant">{spec.title}</dt>
                      <dd className="text-on-surface font-medium text-right mt-1 sm:mt-0">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  className="btn-gradient w-full text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                  onClick={handleInquiry}
                >
                  <span className="material-symbols-outlined">mail</span>
                  초정밀 레이저 가공 문의
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-2 text-on-surface-variant border-t border-outline-variant/10">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">precision_manufacturing</span>
                  <span className="text-sm font-medium">최신 장비 구축</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                  <span className="text-sm font-medium">단면 열융착 보증</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Detail Section */}
        <section className="py-16 bg-surface-container rounded-3xl p-8 lg:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold">오차 없는 디지털 컷팅 프로세스</h2>
            <p className="text-on-surface-variant text-lg">
              기존 칼날 금형 방식의 물리적 한계를 넘어, CAD/일러스트 벡터 데이터를 다이렉트로 읽어 가공합니다. 
              금형 제작 비용과 시간이 전혀 들지 않아 다품종 소량 생산 및 신속한 샘플 제작에 최고의 효율을 제공합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
              {[
                { step: '01', title: '벡터 데이터 접수', desc: 'AI, DXF 등 도면 파일을 디지털 데이터로 변환 후 시스템에 입력합니다.' },
                { step: '02', title: '스마트 정밀 재단', desc: '고출력 정밀 CO2 레이저가 0.05mm 마진 내로 완벽하게 재단합니다.' },
                { step: '03', title: '열융착 및 마감 검수', desc: '컷팅 단면의 미세 결합 상태를 면밀히 검수 후 즉시 출고 준비를 마칩니다.' }
              ].map((step, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 relative">
                  <span className="absolute top-4 right-4 text-3xl font-extrabold text-primary/10">{step.step}</span>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LaserCuttingDetail;
