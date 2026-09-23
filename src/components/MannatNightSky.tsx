import React, { useState, useEffect, useRef } from 'react';
import { Moon, Star, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface StarWish {
  id: number;
  label: string;
  x: number; // percentage
  y: number; // percentage
  wish: string;
}

export const MannatNightSky: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<StarWish | null>(null);
  const [customWish, setCustomWish] = useState('');
  const [floatingLanterns, setFloatingLanterns] = useState<Array<{ id: number; wish: string; x: number }>>([]);
  const skyRef = useRef<HTMLDivElement>(null);

  const starWishes: StarWish[] = [
    {
      id: 1,
      label: 'Boards Star 📚',
      x: 22,
      y: 35,
      wish: 'Class 10th boards mein topper ban na! RD Sharma ka saara darr gayab ho jaye aur 95%+ marks aasaani se aayein.',
    },
    {
      id: 2,
      label: 'Hansi Ka Sitara ✨',
      x: 48,
      y: 20,
      wish: 'Khushi, tera naam hi "Khushi" hai. Koshish karna ki chehre ki yeh bachkani hansi kabhi kisi ke kehne se kam na ho.',
    },
    {
      id: 3,
      label: 'Peace & Sukoon 🌙',
      x: 75,
      y: 30,
      wish: 'Raat ko late night overthinking bilkul na ho. Hamesha chain ki neend aur dil mein sukoon rahe.',
    },
    {
      id: 4,
      label: 'Family & Aashirwad 🪷',
      x: 35,
      y: 65,
      wish: 'Mummy-Papa aur poori family hamesha swasth aur khush rahe, aur unka proud face tujhe dekhne ko mile.',
    },
    {
      id: 5,
      label: 'Sacchi Dosti 🫂',
      x: 65,
      y: 60,
      wish: 'Chahe hum roz baat karein ya na karein, agar kabhi life mein akelapan lage toh yaad rakhna: tera purana dost hamesha ek call door hai.',
    },
  ];

  const handleSelectStar = (star: StarWish) => {
    sound.playWishChime();
    setSelectedStar(star);
  };

  const handleReleaseLantern = (e: React.FormEvent) => {
    e.preventDefault();
    const wishToSend = customWish.trim() || 'Happy 15th Birthday Mannat! Dua qubool ho ✨';

    sound.playWishChime();

    const newLantern = {
      id: Date.now(),
      wish: wishToSend,
      x: 20 + Math.random() * 60,
    };

    setFloatingLanterns((prev) => [...prev, newLantern]);
    setCustomWish('');

    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#fbbf24', '#f97316', '#38bdf8', '#ffffff'],
    });

    // Clean up lantern after animation
    setTimeout(() => {
      setFloatingLanterns((prev) => prev.filter((l) => l.id !== newLantern.id));
    }, 9000);
  };

  return (
    <section id="night-sky" className="py-24 bg-[#080911] border-b border-amber-950/20 relative overflow-hidden">
      
      {/* Background Starry Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 120px 80px, #fde68a, rgba(0,0,0,0)), radial-gradient(1px 1px at 220px 180px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 320px 60px, #fbcfe8, rgba(0,0,0,0))',
          backgroundSize: '400px 400px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-body">
            🌙 Mannat = Dil Se Nikli Dua
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Meerut Ka Aasman Aur Ek 'Mannat' ✨
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Tera naam hi Mannat hai... aur birthday par ek dua aasman mein bhejte hain."
          </p>
        </div>

        {/* Sky Box Canvas Display */}
        <div 
          ref={skyRef}
          className="relative min-h-[460px] rounded-3xl border border-indigo-950/60 bg-gradient-to-b from-[#090b18] via-[#0c0f24] to-[#070914] shadow-2xl p-6 sm:p-8 overflow-hidden"
        >
          {/* Silver Crescent Moon (चाँद) */}
          <div className="absolute top-8 right-10 flex flex-col items-center pointer-events-none select-none">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-transparent shadow-[inset_-8px_-4px_0_0_#fef08a] filter drop-shadow-[0_0_15px_rgba(254,240,138,0.6)]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-200 blur-xs" />
            </div>
            <span className="text-[10px] text-amber-200/50 font-kalam mt-1">22-23 Sep Chaand</span>
          </div>

          {/* Interactive Constellation Stars */}
          {starWishes.map((star) => (
            <button
              key={star.id}
              onClick={() => handleSelectStar(star)}
              style={{ top: `${star.y}%`, left: `${star.x}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group p-2 cursor-pointer z-20 focus:outline-none"
              title={star.label}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-amber-200 rounded-full group-hover:scale-150 transition-all duration-300 shadow-[0_0_12px_#fde047]" />
                <div className="absolute inset-0 bg-amber-300 rounded-full animate-ping opacity-40" />
              </div>
              <span className="text-[11px] font-kalam text-amber-200/80 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded mt-1.5 block opacity-80 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                {star.label}
              </span>
            </button>
          ))}

          {/* Floating Lanterns (Mannat) Ascending */}
          {floatingLanterns.map((lantern) => (
            <div
              key={lantern.id}
              style={{ left: `${lantern.x}%` }}
              className="absolute bottom-4 flex flex-col items-center pointer-events-none z-30 animate-[flyUp_8s_ease-out_forwards]"
            >
              <div className="w-10 h-14 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-t-xl rounded-b-md shadow-[0_0_25px_rgba(245,158,11,0.9)] flex items-center justify-center p-1 relative">
                <span className="text-[8px] font-bold text-amber-950 text-center leading-tight">
                  Mannat
                </span>
                <div className="absolute -bottom-1 w-4 h-2 bg-amber-600 rounded-full blur-xs" />
              </div>
              <span className="text-[11px] font-kalam text-amber-200 bg-black/80 px-2 py-0.5 rounded mt-1 shadow max-w-[160px] truncate">
                {lantern.wish}
              </span>
            </div>
          ))}

          {/* Selected Star Wish Popover / Dialogue */}
          {selectedStar && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#131526]/90 backdrop-blur-md border border-amber-500/40 rounded-2xl p-5 shadow-2xl z-30 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-900/40 text-xs text-amber-400 font-semibold">
                <span>{selectedStar.label}</span>
                <button
                  onClick={() => setSelectedStar(null)}
                  className="text-stone-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              </div>
              <p className="font-kalam text-amber-100 text-sm sm:text-base leading-relaxed">
                "{selectedStar.wish}"
              </p>
            </div>
          )}

          {/* Sky Instruction Prompt */}
          <div className="absolute top-4 left-6 text-xs text-amber-300/60 font-kalam pointer-events-none">
            ⭐ Sitaro par tap karo — Har ek mein ek dua chhipi hai
          </div>

        </div>

        {/* Make a Mannat / Release Lantern Input */}
        <div className="mt-8 max-w-xl mx-auto">
          <form 
            onSubmit={handleReleaseLantern}
            className="flex flex-col sm:flex-row items-center gap-3 bg-[#131525] p-3 rounded-2xl border border-amber-800/40 shadow-xl"
          >
            <input
              type="text"
              value={customWish}
              onChange={(e) => setCustomWish(e.target.value)}
              placeholder="Apne 15th birthday ke liye koi Mannat likho..."
              className="w-full bg-transparent px-3 py-2 text-sm text-amber-100 placeholder-amber-400/40 focus:outline-none font-kalam text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-semibold whitespace-nowrap shadow-md hover:from-amber-500 hover:to-amber-400 transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Aasman Mein Bhejo 🏮</span>
            </button>
          </form>
          <p className="text-center text-xs text-amber-300/60 font-kalam mt-2">
            *Mannat aasman mein ud jayegi aur sitaron ke beech chali jayegi.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes flyUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-460px) scale(0.35);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
