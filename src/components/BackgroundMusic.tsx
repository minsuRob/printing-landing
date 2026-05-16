import React, { useState, useEffect } from 'react';
import { proceduralMusic } from '../utils/ProceduralMusic';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 사용자의 첫 상호작용(클릭/터치) 시 음악 시작
    const handleInteraction = async () => {
      try {
        await proceduralMusic.start();
        setIsPlaying(true);
        // 성공적으로 시작되면 리스너 제거
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
      } catch (err) {
        console.error("Audio start failed:", err);
      }
    };

    // 현재 재생 중이 아닐 때만 리스너 등록
    if (!isPlaying) {
      window.addEventListener('click', handleInteraction);
      window.addEventListener('touchstart', handleInteraction);
    }
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  // 컴포넌트 언마운트 시에만 음악 정지
  useEffect(() => {
    return () => {
      proceduralMusic.stop();
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 중단 (window 리스너 트리거 방지)
    if (isPlaying) {
      proceduralMusic.stop();
      setIsPlaying(false);
    } else {
      proceduralMusic.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={togglePlay}
          className={`group flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all shadow-2xl ${
            isPlaying 
              ? 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20' 
              : 'bg-primary text-white animate-pulse shadow-primary/50'
          }`}
        >
          <div className="relative">
            <span className="material-symbols-outlined text-xl">
              {isPlaying ? 'volume_up' : 'volume_off'}
            </span>
            {!isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            )}
          </div>
          <span className="text-sm">
            {isPlaying ? 'MZ Energetic Dance Pop' : '음악 시작하기'}
          </span>
        </button>
    </div>
  );
};

export default BackgroundMusic;
