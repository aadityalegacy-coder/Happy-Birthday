import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Smile, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const HeroLateWish: React.FC = () => {
  const [selectedExcuse, setSelectedExcuse] = useState<number | null>(null);
  const [candleBlown, setCandleBlown] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const excuses = [
    {
      title: "Meerut Network Jam",
      tagline: "Begum Bridge Tower Glitch",
      desc: "Bhai Meerut ke network mein itna lag tha ki mera message tower se nikalte hi gayab ho gaya tha."
    },
    {
      title: "School Class 10 Trauma",
      tagline: "RD Sharma Trigonometry Attack",
      desc: "sin²θ + cos²θ = 1 prove karne mein pura 22 September nikal gaya. Boards ka darr samajhti hai na?"
    },
    {
      title: "Suspense Strategy",
      tagline: "Dost ka Attitude Test",
      desc: "Maine socha sab 22 Sep ko 12:00 AM pe generic 'HBD' bhejenge... mera wish sabse aakhiri aur sabse yaadgar hona chahiye."
    },
    {
      title: "Asli Sach (The Real Truth)",
      tagline: "Obviously Website Banani Thi",
      desc: "Kyunki ek purani best friend ko 10-second ka dry text bhejna mujhe bohot fake laga. Toh socha pura space tera bana doon."
    }
  ];

  const handleBlowCandle = () => {
    if (!candleBlown) {
      setCandleBlown(true);
      sound.playWishChime();
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#f97316', '#ec4899', '#ffffff'],
      });
    } else {
      setCandleBlown(false);
      sound.playDiyaLight();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="late-confession" 
      className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-amber-950/20"
      onMouseMove={handleMouseMove}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Subtle metadata note */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-300/80 mb-6 font-kalam">
          <span>Meerut, UP</span>
          <span aria-hidden="true">·</span>
          <span>Birthday: 22 September 2026</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400 font-semibold">Wish Date: 23 September (Late Entry 😭)</span>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-rozha text-3xl sm:text-5xl lg:text-6xl text-amber-100 tracking-tight leading-tight">
            Birthday kal tha… <br className="hidden sm:inline" />
            <span className="text-amber-400 font-kalam text-3xl sm:text-5xl block sm:inline mt-1 sm:mt-0">
              haan, ek din late hoon 😭
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-amber-100/80 leading-relaxed max-w-2xl mx-auto pt-2">
            22 September chala gaya aur ab 23 ho gaya... But ek normal sa 
            <span className="font-mono text-sm px-2 py-0.5 mx-1 bg-amber-950/60 text-amber-300 rounded border border-amber-800/40">
              “HBD Khushi ❤️ stay blessed”
            </span> 
            WhatsApp text bhejna mujhe bohot fake aur lazy laga... Toh obviously website bana di.
          </p>
        </div>

        {/* 3D Interactive Card Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive 3D Birthday Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="w-full max-w-md bg-gradient-to-b from-[#1b1c28] to-[#12131e] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400/60" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400/60" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400/60" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400/60" />

              <div className="text-center space-y-4">
                <span className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold">
                  Official 15th Birthday Pass · Online Best Friends
                </span>
                
                <h2 className="font-marcellus text-2xl sm:text-3xl text-amber-100">
                  Khushi उर्फ Mannat
                </h2>

                <p className="text-xs sm:text-sm text-amber-200/70 font-kalam">
                  "Kabhi IRL mile nahi... par internet ke uss paar se ek time pe roz ghanton baat hoti thi."
                </p>

                {/* Candle / Flame interaction */}
                <div className="py-6 flex flex-col items-center justify-center">
                  <div 
                    onClick={handleBlowCandle}
                    className="cursor-pointer group flex flex-col items-center select-none"
                    title="Click to blow candle or relight"
                  >
                    {/* Flame */}
                    <div className={`relative transition-all duration-300 ${candleBlown ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                      <div className="w-5 h-8 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full flame-flicker" />
                      <div className="absolute inset-0 bg-amber-400 blur-md opacity-70 -z-10" />
                    </div>

                    {/* Wick & Candle Body */}
                    <div className="w-1 h-3 bg-neutral-600 -mt-0.5" />
                    <div className="w-10 h-16 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 rounded-t-sm shadow-md border-t border-amber-100 flex items-center justify-center">
                      <span className="font-rozha text-amber-900 text-sm font-bold">15</span>
                    </div>

                    {/* Cake stand */}
                    <div className="w-24 h-3 bg-amber-900/60 rounded-full border border-amber-700/50 mt-1" />

                    <span className="text-xs text-amber-300/80 mt-3 font-kalam group-hover:text-amber-200 transition-colors">
                      {candleBlown ? '✨ Mombatti bujh gayi (Click to relight)' : '🎂 Click to blow 15th candle & make a wish!'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-900/30 flex items-center justify-between text-xs text-amber-300/60">
                  <span>Status: Sweet 15</span>
                  <span>Board Year: 2026</span>
                  <span>Home: Meerut</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Desi Late Excuses Selector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-300 text-sm font-medium">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Late Hone Ka Explanation Select Karein:</span>
            </div>

            <div className="space-y-3">
              {excuses.map((exc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedExcuse(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedExcuse === idx
                      ? 'bg-amber-950/50 border-amber-500/80 shadow-md translate-x-1'
                      : 'bg-[#151622]/70 border-amber-900/30 hover:border-amber-700/50 hover:bg-[#1a1c2b]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-amber-100">
                      {idx + 1}. {exc.title}
                    </span>
                    <span className="text-xs text-amber-400/80 font-kalam">
                      {exc.tagline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-200/70 mt-2 font-body leading-relaxed">
                    {exc.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-amber-300/60 italic font-kalam pt-1">
              *Mazaak alag, par sach mein ek normal text bhej kar formalities poori nahi karni thi.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
