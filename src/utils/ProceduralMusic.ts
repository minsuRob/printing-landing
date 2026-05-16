/**
 * ProceduralMusic Utility
 * Web Audio API를 사용하여 저작권 걱정 없는 잔잔하고 분위기 있는 앰비언트 음악을 생성합니다.
 */

class ProceduralMusic {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private nodes: AudioNode[] = [];

  constructor() {}

  public start() {
    if (this.isPlaying) return;
    
    this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.isPlaying = true;

    // 잔잔한 드론 사운드 및 멜로디 생성
    this.createAmbientLayer(110, 0.1); // Low drone
    this.createAmbientLayer(220, 0.05); // Mid drone
    this.createRandomPluck(); // Procedural melody
  }

  public stop() {
    if (this.audioCtx) {
      this.audioCtx.close();
      this.audioCtx = null;
    }
    this.isPlaying = false;
    this.nodes = [];
  }

  private createAmbientLayer(freq: number, volume: number) {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const lfo = this.audioCtx.createOscillator();
    const lfoGain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.1, this.audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(volume * 0.5, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.audioCtx.currentTime + 2);

    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    lfo.start();
    
    this.nodes.push(osc, lfo);
  }

  private createRandomPluck() {
    if (!this.audioCtx || !this.isPlaying) return;

    const playNote = () => {
      if (!this.audioCtx || !this.isPlaying) return;

      const notes = [261.63, 329.63, 392.00, 440.00, 523.25]; // C Major pentatonic
      const freq = notes[Math.floor(Math.random() * notes.length)];
      
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const delay = this.audioCtx.createDelay();
      const feedback = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, this.audioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 4);

      delay.delayTime.setValueAtTime(0.5, this.audioCtx.currentTime);
      feedback.gain.setValueAtTime(0.4, this.audioCtx.currentTime);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      // Add a bit of delay/reverb effect
      gain.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      delay.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 4);

      // Schedule next note
      setTimeout(playNote, 3000 + Math.random() * 5000);
    };

    playNote();
  }
}

export const proceduralMusic = new ProceduralMusic();
