import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-surface">
      {/* Background Abstract Factory Animation effect (CSS driven) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[grid-scroll_10s_linear_infinite]"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[grid-scroll_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[grid-scroll_12s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          지금 바로 더 스마트한 <br className="hidden md:block"/>
          <span className="text-primary text-glow">제조 라인</span>을 구축하세요.
        </h2>
        <p className="text-xl text-textMuted mb-12 max-w-2xl mx-auto">
          지금 데모를 신청하고 당신의 제조 라인이 어떻게 변화할 수 있는지 확인하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] flex items-center justify-center gap-2">
            데모 일정 예약하기
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 glass text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10">
            도입 및 견적 문의
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
