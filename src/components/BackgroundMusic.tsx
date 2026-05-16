import React, { useState, useEffect } from 'react';
import { proceduralMusic } from '../utils/ProceduralMusic';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 모바일 터치 및 클릭 이벤트 대응
    const handleInteraction = async () => {
      if (!isPlaying) {
        await proceduralMusic.start();
        setIsPlaying(true);
      }
      // 한 번 실행 후 이벤트 제거
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      proceduralMusic.stop();
    };
  }, [isPlaying]);

  const togglePlay = () => {
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
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
        title={isPlaying ? "음악 끄기" : "음악 켜기"}
      >
        <span className="material-symbols-outlined text-[24px]">
          {isPlaying ? 'music_note' : 'music_off'}
        </span>
      </button>
      
      {/* 음악 재생 중 표시 */}
      {isPlaying && (
        <div className="absolute bottom-14 right-0 w-52 text-center text-xs text-primary font-black animate-pulse pointer-events-none tracking-[0.3em] uppercase shadow-primary-glow">
          MZ Energetic Dance Pop
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
