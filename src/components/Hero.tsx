import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    // Scroll-linked video playback setup
    const video = videoRef.current;

    if (video) {
      video.onloadedmetadata = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%", // 300% of viewport height to scroll through
            scrub: true,
            pin: true,
          },
        });

        // Animate video current time based on scroll
        tl.to(
          video,
          {
            currentTime: video.duration || 5, // fallback if duration isn't perfectly loaded yet
            ease: "none",
          },
          0,
        );

        // Fade out overlay content as we scroll deep
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            y: -50,
            ease: "power2.inOut",
          },
          0.2,
        );
      };

      // Handle fallback if video can't load metadata quickly
      setTimeout(() => {
        if (video.readyState >= 1) {
          ScrollTrigger.refresh();
        }
      }, 500);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          ref={videoRef}
          className="object-cover w-full h-full opacity-40 mix-blend-screen"
          muted
          playsInline
          preload="auto"
          // 임시 경로 사용, fallback image handled by css/bg if fails
        >
          <source
            src={`${baseUrl}videos/factory-printing.mp4`}
            type="video/mp4"
          />
        </video>
        {/* Fallback gradient if video is missing */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>

        {/* Grid and Glow Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Content Overlay */}
      <div
        ref={overlayRef}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Status HUD */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-medium tracking-wider uppercase"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          시스템 정상 구동 중 • 실시간 모니터링 활성화
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
        >
          제조업의 미래를 여는{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary text-glow">
            초정밀 스마트 인쇄 솔루션
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-textMuted max-w-2xl mb-10 font-light"
        >
          경계를 허무는 자동화된 산업용 프린팅 공정. 데이터 기반 생산 최적화로
          차세대 스마트 팩토리의 기준을 재정의합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              데모 신청하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 glass text-white font-medium rounded-lg flex items-center gap-2 transition-all hover:bg-white/10 hover:border-primary/50">
            <Play className="w-4 h-4" />
            공정 영상 보기
          </button>
        </motion.div>

        {/* Scrolldown indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-textMuted text-xs uppercase tracking-widest"
        >
          <span>스크롤하여 자세히 보기</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
