import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scan, Sparkles, Layers, Cpu } from "lucide-react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Scan className="w-8 h-8 text-primary" />,
    title: "신발 프린팅",
    description:
      "초정밀 AI 비전 센서가 신발 어퍼(Upper) 패턴과 미드솔 접착면을 픽셀 단위로 스캔하여 완벽한 대칭과 무결점 마감을 보장합니다.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "3D 곡면 입체 맵핑 인쇄",
    description:
      "굴곡진 신발 표면의 왜곡을 실시간으로 계산하는 알고리즘을 통해 복잡한 커스텀 그래픽도 어퍼 위에 선명하고 정교하게 인쇄됩니다.",
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "다중 소재 맞춤형 잉크 제어",
    description:
      "천연 가죽, 스웨이드, 통기성 메쉬 등 다양한 소재의 고유 질감과 잉크 흡수율을 자동으로 파악하여 분사 압력을 미세 조정합니다.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "디지털 트윈 핏 시뮬레이터",
    description:
      "가상 착화 모델링 데이터를 기반으로 보행 시 발생하는 어퍼의 변형과 내구성을 사전 시뮬레이션하여 최상의 착화감을 완성합니다.",
  },
];

// Feature Card Component (Animation Removed)
const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => {
  const content = (
    <div className="relative p-8 rounded-2xl glass-card transition-colors hover:border-primary/50 overflow-hidden group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        {/* 아이콘 대신 이미지 썸네일 */}
        <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-black/20">
          <img src="/shoe.png" alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          {feature.title}
        </h3>
        <p className="text-textMuted leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );

  if (feature.title === "신발 프린팅") {
    return (
      <Link to="/shoe-printing" className="block cursor-pointer h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
};

const Technology: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 애니메이션 효과 제거 요청에 따라 정적 렌더링 유지
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 relative bg-background z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            스마트 풋웨어 혁신 기술
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            첨단 AI 비전 검수 기술과 초정밀 3D 맵핑 프린팅을 결합하여 세상에
            단 하나뿐인 완벽한 프리미엄 커스텀 스니커즈를 완성합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
