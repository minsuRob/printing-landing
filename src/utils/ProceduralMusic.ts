/**
 * ProceduralMusic Utility (Dreamy Sparkle Style)
 * 비트 기반이 아닌, 맑고 투명한 느낌의 '드림 팝' 스타일의 음악을 생성합니다.
 */

class ProceduralMusic {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private loopInterval: any = null;

  constructor() {}

  public start() {
    if (this.isPlaying) return;
    
    this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.isPlaying = true;

    // 비트(드럼)를 완전히 제거하고, 맑은 종소리와 부드러운 아르페지오 선율만 생성
    this.startDreamyMelody();
  }

  public stop() {
    if (this.audioCtx) {
      this.audioCtx.close();
      this.audioCtx = null;
    }
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
    this.isPlaying = false;
  }

  private startDreamyMelody() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 110;
    const stepTime = 60 / bpm / 2; // 8th notes

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // 맑은 아르페지오 선율 (C Major 7 / G Major 느낌)
      const scale = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C4, E4, G4, B4, C5
      const note = scale[step % scale.length];
      
      this.createCrystalNote(note, time);

      // 가끔씩 더 높은 하이라이트 노트 추가
      if (step % 8 === 0 && Math.random() > 0.5) {
        this.createCrystalNote(note * 1.5, time, 0.03);
      }

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createCrystalNote(freq: number, time: number, vol: number = 0.05) {
    if (!this.audioCtx) return;
    
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const reverb = this.audioCtx.createConvolver(); // 리버브 효과를 위한 필터 대용

    // 맑은 벨 소리 느낌을 위해 Sine과 Triangle 혼합 시도 (여기서는 Sine으로 깔끔하게)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 2.5);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 3);
  }
}

export const proceduralMusic = new ProceduralMusic();
