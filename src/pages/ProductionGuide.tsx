import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductionGuide = () => {
  const fileTypes = [
    { title: 'Adobe Illustrator (AI)', desc: '로고 및 텍스트 기반 작업 권장 (Vector)', color: 'bg-orange-500' },
    { title: 'Adobe Photoshop (PSD)', desc: '이미지 기반 작업 시 300DPI 이상 필수', color: 'bg-blue-600' },
    { title: 'PNG (투명 배경)', desc: '배경이 없는 고해상도 이미지 (최소 2000px)', color: 'bg-green-500' },
  ];

  const guidelines = [
    { step: '01. 디자인 확인', task: '색상 모드 CMYK 확인 및 투명 배경 처리' },
    { step: '02. 필름 출력', task: '신의데코 전용 고해상도 DTF 프린터 출력' },
    { step: '03. 열압착 공정', task: '온도 160°C, 시간 15초, 강한 압력 유지' },
    { step: '04. 필름 제거', task: '완전 냉각 후 필름을 천천히 제거 (Cold Peel)' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fadeInUp">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6">
            TECHNICAL GUIDE
          </span>
          <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-6">제작 가이드 및 템플릿</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            신의데코프린팅의 완벽한 퀄리티를 위한 데이터 제작 가이드입니다.<br/>
            전문 디자이너가 설계한 템플릿을 다운로드하여 바로 작업을 시작하세요.
          </p>
        </section>

        {/* File Requirements */}
        <section className="mb-24">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-10 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            권장 파일 형식
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fileTypes.map((type) => (
              <div key={type.title} className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${type.color} rounded-xl mb-6 flex items-center justify-center text-white font-bold`}>
                  {type.title.split(' ')[0][0]}
                </div>
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-24 bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-outline-variant/20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-8 text-on-surface">제작 공정 표준 가이드</h2>
              <div className="space-y-6">
                {guidelines.map((g) => (
                  <div key={g.step} className="flex gap-6 group">
                    <span className="font-['Space_Grotesk'] text-primary font-bold text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {g.step.split('.')[0]}
                    </span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{g.step.split(' ')[1]}</h4>
                      <p className="text-on-surface-variant text-sm">{g.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                <video 
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full font-bold z-10 flex items-center gap-1.5 backdrop-blur-sm pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  작업 동영상
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 p-5 rounded-2xl shadow-xl text-center max-w-[180px] pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl mb-1">thermostat</span>
                  <p className="text-xs font-bold text-on-surface">표준 온도 160°C</p>
                  <p className="text-[9px] text-on-surface-variant mt-0.5">정밀 온도 제어</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="mb-24">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-10 text-center">템플릿 다운로드</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '반팔 티셔츠 템플릿', size: '2.4MB', format: 'AI/PSD' },
              { name: '스니커즈 커스텀 영역', size: '1.8MB', format: 'AI' },
              { name: '캔버스 백 작업가이드', size: '3.1MB', format: 'PSD' },
              { name: '마스크 패턴 가이드', size: '1.2MB', format: 'PDF' },
            ].map((item) => (
              <div key={item.name} className="group p-6 bg-white border border-outline-variant/40 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all">
                <div className="bg-surface-container w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                <div className="flex justify-between items-center text-xs text-on-surface-variant">
                  <span>{item.format}</span>
                  <span>{item.size}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-6">가이드를 확인하셨나요?</h3>
          <p className="mb-10 text-white/80 max-w-xl mx-auto">
            지금 바로 당신의 디자인을 신의데코프린팅의 프리미엄 퀄리티로 완성해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-lowest transition-all">
              지금 문의하기
            </Link>
            <Link to="/support" className="border border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-white text-center">
              고객 센터 문의
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductionGuide;
