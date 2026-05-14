import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { label: '생산 속도 향상', value: 42, suffix: '%' },
  { label: '원자재 낭비 절감', value: 18, suffix: '%' },
  { label: '품질 검수 정확도', value: 99.8, suffix: '%' },
  { label: '시스템 무중단 구동', value: 24, suffix: '/7' },
];

const Performance: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statElements = gsap.utils.toArray<HTMLElement>('.stat-value');

    statElements.forEach((el, i) => {
      const targetValue = stats[i].value;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(el,
            { innerHTML: 0 },
            {
              innerHTML: targetValue,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: targetValue % 1 === 0 ? 1 : 0.1 },
              onUpdate: function() {
                if (targetValue % 1 !== 0) {
                  el.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                }
              }
            }
          );
        },
        once: true
      });
    });
  }, []);

  return (
    <section className="py-32 px-6 bg-background relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">압도적인 성과 지표</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass rounded-2xl p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-baseline justify-center font-mono">
                <span className="stat-value text-glow">{stat.value}</span>
                <span className="text-2xl text-primary ml-1">{stat.suffix}</span>
              </div>

              <p className="text-textMuted font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
