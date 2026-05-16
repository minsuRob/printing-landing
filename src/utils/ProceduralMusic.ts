/**
 * ProceduralMusic Utility (MZ Emotional Ballad Style)
 * 비트와 전자음을 배제하고, MZ세대가 선호하는 감성적이고 따뜻한 발라드 스타일의 선율을 생성합니다.
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

    // MZ 감성 발라드: 따뜻한 피아노 톤과 서정적인 코드 진행
    this.startBalladMelody();
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

  private startBalladMelody() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 70; // 느리고 감성적인 템포
    const stepTime = 60 / bpm; // 1 beat

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // 감성적인 발라드 코드 진행 (C - G - Am - F)
      const progressions = [
        [261.63, 329.63, 392.00], // C Major
        [196.00, 246.94, 293.66], // G Major
        [220.00, 261.63, 329.63], // A Minor
        [174.61, 220.00, 261.63]  // F Major
      ];
      
      const chord = progressions[Math.floor(step / 2) % progressions.length];
      
      // 베이스 노트 (더 깊은 소리)
      this.createPianoNote(chord[0] / 2, time, 0.1, 4);
      
      // 코드 구성음 (따뜻한 피아노 톤)
      chord.forEach(freq => {
        this.createPianoNote(freq, time + Math.random() * 0.05, 0.05, 3);
      });

      // 멜로디 라인 (가끔씩 연주)
      if (step % 2 === 1) {
        const melodyScale = [523.25, 587.33, 659.25, 783.99, 880.00];
        const melodyNote = melodyScale[Math.floor(Math.random() * melodyScale.length)];
        this.createPianoNote(melodyNote, time + 0.5, 0.04, 2);
      }

      step = (step + 1) % 8;
    }, stepTime * 1000);
  }

  private createPianoNote(freq: number, time: number, vol: number, decay: number) {
    if (!this.audioCtx) return;
    
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // 부드러운 피아노 느낌을 위해 Sine파 사용
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + decay);
  }
}

export const proceduralMusic = new ProceduralMusic();
