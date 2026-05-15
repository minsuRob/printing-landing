import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to auto-play (browsers might block it until interaction)
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.2; // Set volume to 20% so it's calm and quiet
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        // Autoplay blocked, wait for user interaction
        console.log("Autoplay prevented by browser. User interaction needed.");
      }
    };
    
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Calm Classical Music: Erik Satie - Gymnopédie No.1 (Public Domain) */}
      <audio 
        ref={audioRef} 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Erik_Satie_-_Gymnop%C3%A9die_No._1.ogg" 
        loop 
      />
      
      <button 
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
        title={isPlaying ? "음악 끄기" : "음악 켜기"}
      >
        <span className="material-symbols-outlined text-[24px]">
          {isPlaying ? 'music_note' : 'music_off'}
        </span>
      </button>
      
      {/* Small tooltip indicating calm music is playing */}
      {isPlaying && (
        <div className="absolute bottom-14 right-0 w-32 text-center text-xs text-white/60 font-medium animate-pulse pointer-events-none">
          Calm Classical Playing
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
