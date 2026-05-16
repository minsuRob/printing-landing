import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const FAQS = [
  { category: '주문/결제', q: '대량 주문 시 할인이 가능한가요?', a: '네, 동일 디자인으로 10개 이상 주문 시 수량별 할인이 적용됩니다. 고객 센터로 문의 주시면 견적서를 보내드립니다.' },
  { category: '제작/공정', q: '세탁 후 프린팅이 떨어지지 않나요?', a: '신의데코의 열전사 필름은 고온 압착 기술을 통해 패브릭과 하나가 됩니다. 권장 세탁 방법(찬물 세탁, 건조기 사용 지양) 준수 시 영구적으로 유지됩니다.' },
  { category: '제작/공정', q: '제가 가진 옷에 프린팅만 할 수 있나요?', a: '네, 가능합니다. 단, 옷의 소재에 따라 전사가 불가능한 경우(실크, 고신축 기능성 등)가 있으니 사전에 상담이 필요합니다.' },
  { category: '배송/교환', q: '배송은 얼마나 걸리나요?', a: '디자인 접수 및 확정 후 제작에 2~3일, 배송에 1~2일이 소요되어 평균적으로 5일 이내에 수령 가능합니다.' },
  { category: '기타', q: '디자인 파일 형식이 어떻게 되나요?', a: 'AI, PSD, 고해상도 PNG(300DPI 이상)를 권장합니다. 배경이 투명한 파일일수록 결과물이 깔끔합니다.' },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#f8faff] text-on-surface font-sans min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-6"
          >
            고객 센터
          </motion.h1>
          <p className="text-gray-500 text-lg">신의데코프린팅은 고객님의 성공적인 비즈니스를 지원합니다.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {/* Quick Help Cards */}
          <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">chat_bubble</span>
            </div>
            <h3 className="font-bold text-xl mb-3">1:1 실시간 상담</h3>
            <p className="text-sm text-gray-500 mb-6">카카오톡 채널을 통해 <br/>가장 빠른 답변을 드립니다.</p>
            <button className="text-blue-600 font-bold hover:underline">상담 시작하기 →</button>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <h3 className="font-bold text-xl mb-3">전화 상담</h3>
            <p className="text-sm text-gray-500 mb-6">전문 상담원과 직접 <br/>통화하여 해결하세요.</p>
            <p className="text-green-600 font-bold">02-1234-5678</p>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-gray-200/50 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h3 className="font-bold text-xl mb-3">이메일 문의</h3>
            <p className="text-sm text-gray-500 mb-6">파일 전송이나 상세한 <br/>견적 문의에 적합합니다.</p>
            <p className="text-purple-600 font-bold text-sm">help@shinuideco.com</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black mb-2">자주 묻는 질문</h2>
              <p className="text-gray-500">도움이 필요하신 내용을 검색하거나 찾아보세요.</p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                {['전체', '주문/결제', '제작/공정', '배송/교환'].map((tab) => (
                  <button key={tab} className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all">
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                    <span className="font-bold text-lg">{faq.q}</span>
                  </div>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <div className="p-5 bg-gray-50 rounded-xl">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Operational Hours */}
        <section className="bg-[#1a1c1e] text-white rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">상담 운영 시간 안내</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-8">
              <div>
                <p className="text-white/60 mb-1 text-sm">평일 상담</p>
                <p className="text-xl font-bold">10:00 - 18:00</p>
                <p className="text-xs text-white/40 mt-1">점심시간 12:30 - 13:30 제외</p>
              </div>
              <div>
                <p className="text-white/60 mb-1 text-sm">주말 및 공휴일</p>
                <p className="text-xl font-bold opacity-60">휴무 (상담 불가)</p>
                <p className="text-xs text-white/40 mt-1">온라인 문의 접수는 24시간 가능합니다.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
