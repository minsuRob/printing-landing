/**
 * ProceduralMusic Utility (Emotional Chill-out Ambient Style)
 * 부드럽고 감성적인 피아노 멜로디와 서정적인 앰비언트 사운드를 생성합니다.
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

    // 감성적이고 차분한 앰비언트 로파이 비트 (BPM 72)
    this.startAmbientBeat();
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

  private startAmbientBeat() {
    if (!this.audioCtx) return;

    let step = 0;
    const bpm = 72; // 차분하고 느린 템포
    const stepTime = 60 / bpm / 2; // 8th notes

    this.loopInterval = setInterval(() => {
      if (!this.audioCtx || !this.isPlaying) return;
      
      const time = this.audioCtx.currentTime;

      // 1. 아주 가볍고 깊은 킥 (심장 박동처럼 잔잔하게, 1박자에만)
      if (step % 8 === 0) {
        this.createSoftKick(time);
      }
      
      // 2. 멀리서 들리는 부드러운 림샷/퍼커션 (5박자)
      if (step % 8 === 4) {
        this.createSoftSnare(time);
      }

      // 3. 은은한 로파이 하이햇 (박자 쪼개기용으로 잔잔하게)
      if (step % 2 === 0) {
        this.createSoftHat(time, 0.005);
      }

      // 4. 감성적인 서스테인 베이스 (1도, 4도, 5도, 6도 흐름)
      if (step % 8 === 0) {
        const bassNotes = [110.00, 146.83, 164.81, 130.81]; // A2, D3, E3, C3
        const bassFreq = bassNotes[Math.floor(step / 8) % bassNotes.length];
        this.createSoftBass(bassFreq, time);
      }

      // 5. 따뜻하고 잔잔한 감성 피아노 멜로디 (랜덤 내추럴 마이너 스케일 arpeggio)
      if (step % 2 === 0 || step % 8 === 7) {
        const melodyNotes = [
          220.00, 261.63, 293.66, 329.63, 392.00, // A3, C4, D4, E4, G4
          440.00, 523.25, 587.33, 659.25, 783.99  // A4, C5, D5, E5, G5
        ];
        // 멜로디가 너무 꽉 차지 않도록 일정 확률로만 연주
        if (Math.random() > 0.3) {
          const note = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
          this.createAmbientPiano(note, time);
        }
      }

      step = (step + 1) % 16;
    }, stepTime * 1000);
  }

  private createSoftKick(time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(80, time);
    osc.frequency.exponentialRampToValueAtTime(30, time + 0.3);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

    // 저음 강조를 위해 로우패스 적용
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, time);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.4);
  }

  private createSoftSnare(time: number) {
    if (!this.audioCtx) return;
    const noise = this.audioCtx.createBufferSource();
    const bufferSize = this.audioCtx.sampleRate * 0.15;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, time);
    filter.Q.setValueAtTime(3, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.03, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createSoftHat(time: number, vol: number) {
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
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start(time);
  }

  private createSoftBass(freq: number, time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine'; // 가장 부드러운 사인파
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(150, time);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 1.3);
  }

  private createAmbientPiano(freq: number, time: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // 삼각파를 활용해 부드럽고 따뜻한 톤 연출
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // 볼륨 엔벨로프: 부드러운 어택과 긴 릴리즈
    gain.gain.setValueAtTime(0.0, time);
    gain.gain.linearRampToValueAtTime(0.07, time + 0.05); // 어택 타임
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5); // 긴 릴리즈 (서스테인감)

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, time); // 톤을 어둡고 둥글게 깎음

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + 1.6);
  }
}

export const proceduralMusic = new ProceduralMusic();
