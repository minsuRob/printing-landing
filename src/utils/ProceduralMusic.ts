/**
 * ProceduralMusic Utility (MZ Style - Upbeat Bright Pop)
 * Web Audio API를 사용하여 MZ세대가 선호하는 밝고 경쾌한 리듬의 음악을 생성합니다.
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

    // MZ 스타일: 밝고 경쾌한 팝 리듬 (Upbeat & Bright)
    this.startUpbeatBeat();
    this.createBrightPad(261.63, 0.08); // C4 (Bright)
    this.createBrightPad(329.63, 0.05); // E4
    this.createBrightPad(392.00, 0.05); // G4
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
    const bpm = 124; // 밝고 빠른 템포
    const stepTime = 60 / bpm / 4; // 16th notes

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // Kick on 1, 2, 3, 4 (Four-on-the-floor)
      if (step % 4 === 0) {
        this.createPunchyKick(time);
      }
      
      // Bright Clap on 2 and 4
      if (step % 8 === 4) {
        this.createBrightClap(time);
      }

      // Fast Hi-hats
      if (step % 2 === 1) {
        this.createOpenHat(time);
      }

      // Random "Sparkle" notes every now and then
      if (Math.random() > 0.9) {
        this.createSparkle(time);
      }

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createPunchyKick(time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(120, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.1);

    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  private createBrightClap(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.1;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createOpenHat(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.05;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(10000, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.02, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createBrightPad(freq: number, volume: number) {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle'; // Brighter than sine but softer than square
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.audioCtx.currentTime + 2);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
  }

  private createSparkle(time: number) {
    if (!this.audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // High C major notes
    const freq = notes[Math.floor(Math.random() * notes.length)];
    
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    
    gain.gain.setValueAtTime(0.05, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.5);
  }
}

export const proceduralMusic = new ProceduralMusic();
