import React, { useState, useEffect } from 'react';
import { proceduralMusic } from '../utils/ProceduralMusic';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 사용자가 첫 클릭을 하면 음악이 시작될 수 있도록 설정
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        proceduralMusic.start();
        setIsPlaying(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      proceduralMusic.stop();
    };
  }, []);

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
        <div className="absolute bottom-14 right-0 w-48 text-center text-xs text-primary font-black animate-bounce pointer-events-none tracking-widest uppercase shadow-primary-glow">
          Clean MZ Bright Rhythm
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
