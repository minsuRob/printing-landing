import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <h1 className="font-['Space_Grotesk'] text-5xl font-bold mb-6 text-primary">신의데코프린팅</h1>
          <p className="text-on-surface-variant text-xl max-w-3xl mx-auto leading-relaxed">
            "모든 공정에 정밀함을 담습니다."<br/>
            신의데코프린팅은 10년 이상의 열전사 기술 노하우를 바탕으로, 단순한 인쇄를 넘어 예술적 완성도를 지향하는 프리미엄 커스텀 솔루션 기업입니다.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold">우리의 철학</h2>
            <p className="text-on-surface-variant leading-relaxed">
              우리는 고객의 아이디어가 가장 빛나는 순간을 위해 최고의 소재와 첨단 기술을 결합합니다. 
              작은 로고 하나에도 수만 번의 세탁을 견디는 내구성과, 보는 각도에 따라 달라지는 신비로운 광택을 담기 위해 노력합니다.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <span className="text-3xl font-bold text-primary mb-2 block">10+</span>
                <p className="text-sm font-semibold">숙련된 전문가의 기술</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <span className="text-3xl font-bold text-primary mb-2 block">5,000+</span>
                <p className="text-sm font-semibold">연간 커스텀 프로젝트</p>
              </div>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src="/printing-landing/assets/cat-sneaker.jpg" alt="Company Vision" className="w-full h-auto" />
          </div>
        </section>

        <section className="py-20 bg-surface-container-lowest rounded-[40px] border border-outline-variant/30 p-12 mb-32">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-12 text-center">핵심 역량</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'precision_manufacturing', title: '정밀 커팅 가공', desc: '0.1mm 오차도 허용하지 않는 레이저 커팅 기술로 복잡한 문양도 완벽하게 구현합니다.' },
              { icon: 'palette', title: '특수 필름 라인업', desc: '글리터, 홀로그램, 리플렉티브 등 국내 최대 규모의 특수 열전사 필름을 보유하고 있습니다.' },
              { icon: 'high_quality', title: '품질 보증 시스템', desc: '모든 출고 제품은 3단계 검수 과정을 거쳐 최상의 상태로 고객에게 전달됩니다.' },
            ].map(skill => (
              <div key={skill.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{skill.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-8">함께 미래를 프린트하세요</h2>
          <Link to="/portfolio" className="btn-gradient px-12 py-4 rounded-xl text-white font-bold shadow-lg inline-block">
            포트폴리오 보러가기
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
