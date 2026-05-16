/**
 * ProceduralMusic Utility (Clean MZ Style)
 * 윙 하는 배경 소음을 제거하고 깔끔하고 밝은 리듬의 음악만 생성합니다.
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

    // 윙 소리(Drone)를 제거하고 깔끔한 비트와 멜로디만 생성
    this.startUpbeatBeat();
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

  private startUpbeatBeat() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 124;
    const stepTime = 60 / bpm / 4;

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // 1. 깔끔한 킥 (펀치감 위주)
      if (step % 4 === 0) {
        this.createPunchyKick(time);
      }
      
      // 2. 경쾌한 박수 소리
      if (step % 8 === 4) {
        this.createBrightClap(time);
      }

      // 3. 리듬감을 살려주는 하이햇
      if (step % 2 === 1) {
        this.createOpenHat(time);
      }

      // 4. 멜로디성 스파클 노트 (주기적으로 재생)
      if (step % 8 === 0 || step % 8 === 3 || step % 8 === 6) {
        this.createSparkleMelody(time, step);
      }

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createPunchyKick(time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(50, time + 0.08);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.1);
  }

  private createBrightClap(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.05;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1500, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createOpenHat(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.03;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(12000, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.015, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createSparkleMelody(time: number, step: number) {
    if (!this.audioCtx) return;
    // C Major Pentatonic Scale
    const notes = [523.25, 587.33, 659.25, 783.99, 880.00]; 
    const freq = notes[step % notes.length];
    
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.3);
  }
}

export const proceduralMusic = new ProceduralMusic();
