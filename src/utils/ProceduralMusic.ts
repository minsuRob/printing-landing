/**
 * ProceduralMusic Utility (MZ Style - Lo-Fi / Tech Ambient)
 * Web Audio API를 사용하여 현대적이고 힙한 MZ 스타일의 비트를 생성합니다.
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

    // MZ 스타일: 로우파이(Lo-fi) 감성의 비트와 세련된 신스 패드
    this.startBeat();
    this.createSynthPad(110, 0.1); // Bass pad
    this.createSynthPad(164.81, 0.05); // E2
    this.createSynthPad(196.00, 0.05); // G2
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

  private startBeat() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 90;
    const stepTime = 60 / bpm / 2; // 8th notes

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // Kick on 1 and 3
      if (step % 4 === 0) {
        this.createKick(time);
      }
      
      // Snare/Clap on 2 and 4 (soft lo-fi style)
      if (step % 8 === 4) {
        this.createSnare(time);
      }

      // Hi-hats on every 8th note
      this.createHiHat(time, step % 2 === 1 ? 0.01 : 0.02);

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createKick(time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.5);
  }

  private createSnare(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.1;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1000, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.05, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createHiHat(time: number, vol: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.05;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(8000, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createSynthPad(freq: number, volume: number) {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'square'; // More tech/modern sound
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    filter.Q.setValueAtTime(10, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.audioCtx.currentTime + 4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
  }
}

export const proceduralMusic = new ProceduralMusic();
