import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  { id: '01', title: '디자인 및 CAD 업로드', desc: '클라우드를 통해 CAD 및 디자인 데이터를 안전하게 업로드하고 무결성을 검증합니다.' },
  { id: '02', title: '소재 특성 분석 및 보정', desc: '머신러닝 알고리즘이 소재 특성을 분석하여 최적의 프린팅 파라미터를 자동 설정합니다.' },
  { id: '03', title: '고정밀 로봇 인쇄', desc: '고정밀 로보틱스 시스템이 초미세 패턴을 빠르고 정확하게 인쇄합니다.' },
  { id: '04', title: 'AI 실시간 품질 검수', desc: 'AI 비전 시스템이 실시간으로 결과물을 스캔하고 품질 레포트를 자동 생성합니다.' },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray<HTMLElement>('.process-line');
    const nodes = gsap.utils.toArray<HTMLElement>('.process-node');

    nodes.forEach((node, i) => {
      ScrollTrigger.create({
        trigger: node,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(node, { backgroundColor: '#00e5ff', color: '#000', scale: 1.1, duration: 0.4 });
          gsap.to(node.nextElementSibling, { opacity: 1, y: 0, duration: 0.5 });

          if (i < lines.length) {
            gsap.to(lines[i], { scaleY: 1, transformOrigin: 'top', duration: 0.6, ease: "power2.inOut" });
          }
        },
      });
    });
  }, []);

  return (
    <section className="py-32 px-6 bg-surface relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-24 text-center">유연하고 완벽한 작업 흐름</h2>

        <div className="relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-8 md:gap-16 mb-20 last:mb-0 group">

              {/* Timeline Node & Line */}
              <div className="flex flex-col items-center relative z-10">
                <div className="process-node w-16 h-16 rounded-full border-2 border-primary/30 bg-background text-primary flex items-center justify-center text-xl font-bold transition-colors z-10 font-mono">
                  {step.id}
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute top-16 bottom-[-5rem] w-px bg-white/10 z-0">
                    <div className="process-line w-full h-full bg-primary scale-y-0"></div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-3 pb-8 opacity-0 translate-y-8" style={{ willChange: 'opacity, transform' }}>
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-textMuted text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
