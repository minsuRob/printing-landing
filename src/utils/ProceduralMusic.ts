/**
 * ProceduralMusic Utility (MZ Energetic Dance Style)
 * 경쾌하고 신나는 댄스 비트와 에너제틱한 선율을 생성합니다.
 */

class ProceduralMusic {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private loopInterval: any = null;

  constructor() {}

  public async start() {
    if (this.isPlaying) return;
    
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }

    this.isPlaying = true;

    // MZ 에너제틱 댄스: 빠른 템포와 펀치감 있는 비트
    this.startDanceBeat();
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

  private startDanceBeat() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 128; // 신나는 댄스 템포
    const stepTime = 60 / bpm / 4; // 16th notes

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // 1. 강렬한 킥 (Four-on-the-floor)
      if (step % 4 === 0) {
        this.createPowerKick(time);
      }
      
      // 2. 에너제틱한 스네어/클랩 (2, 4 박자)
      if (step % 8 === 4) {
        this.createPowerClap(time);
      }

      // 3. 빠른 하이햇 리듬
      this.createHat(time, step % 2 === 1 ? 0.02 : 0.01);

      // 4. 통통 튀는 베이스라인 (Bouncy Bass)
      if (step % 4 === 2 || step % 16 === 14) {
        this.createBouncyBass(110, time); // A2
      }

      // 5. 밝고 신나는 리드 신스 멜로디
      if (step % 4 === 0 || step % 16 === 7 || step % 16 === 15) {
        const leadNotes = [440.00, 523.25, 587.33, 659.25, 783.99]; // A4, C5, D5, E5, G5
        this.createLeadSynth(leadNotes[Math.floor(Math.random() * leadNotes.length)], time);
      }

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createPowerKick(time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.15);

    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  private createPowerClap(time: number) {
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
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createHat(time: number, vol: number) {
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
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createBouncyBass(freq: number, time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, time);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  private createLeadSynth(freq: number, time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.05, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, time);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.3);
  }
}

export const proceduralMusic = new ProceduralMusic();
