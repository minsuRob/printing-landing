import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Scan, CheckCircle, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ShoePrintingDetail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);

    gsap.fromTo(
      q('.animate-fade-up'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-background text-textMain relative" ref={containerRef}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b-0 border-white/5 px-6 py-4 flex items-center">
        <Link to="/" className="flex items-center gap-2 text-textMuted hover:text-white transition-colors mr-8">
          <ArrowLeft className="w-5 h-5" />
          <span>뒤로가기</span>
        </Link>
        <div className="text-xl font-bold tracking-tighter text-white">
          Nex<span className="text-primary">Print</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary mb-6">
              <Scan className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider">AI Vision Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              완벽한 퀄리티를 위한 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                신발 프린팅 검수 시스템
              </span>
            </h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              머신러닝 기반의 초정밀 비전 시스템이 픽셀 단위로 결함을 탐지합니다. <br />
              어떤 복잡한 패턴과 굴곡에서도 99.9%의 정확도를 경험하세요.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "초정밀 픽셀 스캔",
                desc: "육안으로 확인 불가능한 미세한 오차와 이염까지 완벽하게 잡아냅니다."
              },
              {
                icon: <Layers className="w-8 h-8 text-primary" />,
                title: "3D 곡면 분석",
                desc: "신발 특유의 곡면을 3D로 스캔하여 왜곡 없는 패턴 인쇄를 검증합니다."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "실시간 품질 리포트",
                desc: "불량 데이터를 실시간으로 수집하고 분석하여 공정 최적화 인사이트를 제공합니다."
              }
            ].map((item, idx) => (
              <div key={idx} className="animate-fade-up glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors">
                <div className="mb-6 p-4 bg-background/50 rounded-lg inline-block neon-border">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-textMuted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Content Section */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              데이터 기반의 <br />
              스마트 품질 관리
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              단순한 불량 검출을 넘어, 결함의 원인을 분석하고 생산 라인에 실시간 피드백을 전달합니다. 이를 통해 폐기율을 획기적으로 줄이고 생산 효율성을 극대화할 수 있습니다.
            </p>
            <ul className="space-y-4">
              {[
                "머신러닝 알고리즘 자가 학습",
                "초당 100프레임 고속 스캔 지원",
                "기존 ERP/MES 시스템 완벽 연동",
                "다양한 소재(가죽, 메쉬, 고무 등) 맞춤 검사"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative animate-fade-up">
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay"></div>
              {/* Placeholder for an impressive image */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <Scan className="w-32 h-32 text-primary/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-textMuted text-sm border-t border-white/5 bg-background">
        <p>
          © {new Date().getFullYear()} NexPrint Industrial Solutions. 모든 권리 보유.
        </p>
      </footer>
    </div>
  );
};

export default ShoePrintingDetail;
