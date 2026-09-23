/**
 * Pure Web Audio API Sound Synthesizer
 * Provides soulful acoustic tones, temple bell chime, match strike, and football kick
 * completely client-side without relying on external network requests.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isBgmPlaying = false;
  private bgmInterval: any = null;
  private isMuted = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play gentle Indian Temple Bell chime with rich metallic harmonics
  playTempleBell() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const baseFreq = 587.33; // D5 pitch
    const harmonics = [1, 2.05, 3.12, 4.3];
    const gains = [0.35, 0.2, 0.12, 0.05];

    harmonics.forEach((h, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(baseFreq * h, t);

      gain.gain.setValueAtTime(gains[idx], t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 3.6);
    });
  }

  // Matchstick strike & diya igniting sound
  playDiyaLight() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // White noise burst for the match strike
    const bufferSize = this.ctx.sampleRate * 0.25;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.06));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3200, t);
    filter.Q.setValueAtTime(3, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.25, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start(t);

    // Warm resonant tone for the warm flame bloom
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, t + 0.1);
    osc.frequency.exponentialRampToValueAtTime(440, t + 0.7);

    oscGain.gain.setValueAtTime(0.001, t);
    oscGain.gain.linearRampToValueAtTime(0.2, t + 0.2);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start(t + 0.1);
    osc.stop(t + 1.3);
  }

  // Football kick impact + whistle tone
  playFootballKick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Deep low thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.23);

    // High swish
    setTimeout(() => {
      if (!this.ctx) return;
      const t2 = this.ctx.currentTime;
      const chime = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chime.type = 'triangle';
      chime.frequency.setValueAtTime(523.25, t2);
      chime.frequency.exponentialRampToValueAtTime(659.25, t2 + 0.2);
      chimeGain.gain.setValueAtTime(0.12, t2);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, t2 + 0.35);
      chime.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);
      chime.start(t2);
      chime.stop(t2 + 0.4);
    }, 60);
  }

  // Soft wish release chime (celestial sparkle)
  playWishChime() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime + idx * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 1.0);
    });
  }

  // Toggle ambient soulful lofi background melody (Sitar/Guitar acoustic arpeggios in Raag Bhupali / pentatonic)
  toggleBgm(): boolean {
    this.initCtx();
    if (this.isBgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  private startBgm() {
    if (this.isBgmPlaying || !this.ctx) return;
    this.isBgmPlaying = true;

    // Pentatonic scale (C, D, E, G, A) - calm nostalgic Raag Bhupali / acoustic warmth
    const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    const chords = [
      [261.63, 329.63, 392.00], // C
      [220.00, 261.63, 329.63], // Am
      [174.61, 261.63, 329.63], // F
      [196.00, 246.94, 293.66], // G
    ];

    let chordIdx = 0;
    let step = 0;

    const playNote = () => {
      if (!this.ctx || !this.isBgmPlaying || this.isMuted) return;

      const t = this.ctx.currentTime;
      const currentChord = chords[chordIdx];
      const pitch = step % 4 === 0 
        ? currentChord[0] 
        : scale[Math.floor(Math.random() * scale.length)];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = step % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(pitch, t);

      // Acoustic pluck envelope
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.07, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 1.5);

      step++;
      if (step >= 8) {
        step = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    playNote();
    this.bgmInterval = setInterval(playNote, 480);
  }

  private stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }

  getIsBgmPlaying(): boolean {
    return this.isBgmPlaying;
  }
}

export const sound = new SoundEngine();
