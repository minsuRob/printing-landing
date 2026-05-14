import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQS = [
  { q: '대량 주문 시 할인이 가능한가요?', a: '네, 동일 디자인으로 10개 이상 주문 시 수량별 할인이 적용됩니다. 고객 센터로 문의 주시면 견적서를 보내드립니다.' },
  { q: '세탁 후 프린팅이 떨어지지 않나요?', a: '신의데코의 열전사 필름은 고온 압착 기술을 통해 패브릭과 하나가 됩니다. 권장 세탁 방법(찬물 세탁, 건조기 사용 지양) 준수 시 영구적으로 유지됩니다.' },
  { q: '제가 가진 옷에 프린팅만 할 수 있나요?', a: '네, 가능합니다. 단, 옷의 소재에 따라 전사가 불가능한 경우(실크, 고신축 기능성 등)가 있으니 사전에 상담이 필요합니다.' },
  { q: '배송은 얼마나 걸리나요?', a: '디자인 접수 및 확정 후 제작에 2~3일, 배송에 1~2일이 소요되어 평균적으로 5일 이내에 수령 가능합니다.' },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="text-center mb-16">
          <h1 className="font-['Space_Grotesk'] text-5xl font-bold mb-6">고객 센터</h1>
          <p className="text-on-surface-variant text-lg">무엇을 도와드릴까요? 신의데코의 전문가가 친절히 상담해 드립니다.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                상담 채널
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold">K</div>
                  <div>
                    <p className="text-sm font-bold">카카오톡 채널</p>
                    <p className="text-xs text-on-surface-variant">@신의데코프린팅</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">전화 상담</p>
                    <p className="text-xs text-on-surface-variant">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">이메일 문의</p>
                    <p className="text-xs text-on-surface-variant">help@shinuideco.com</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-[11px] text-on-surface-variant leading-relaxed">
                평일 10:00 - 18:00 (주말/공휴일 휴무)<br/>
                점심시간 12:30 - 13:30
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-8">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-outline-variant/30 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container transition-colors text-left"
                  >
                    <span className="font-semibold text-lg">{faq.q}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="p-6 bg-white border-t border-outline-variant/10 animate-fadeIn">
                      <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-primary text-white rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-bold mb-6">아직 궁금한 점이 있으신가요?</h2>
          <p className="mb-8 text-white/80">지금 바로 1:1 채팅 상담을 시작해보세요.</p>
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            실시간 채팅 상담 시작
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
