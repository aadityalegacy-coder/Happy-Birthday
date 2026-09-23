import React, { useState, useRef } from 'react';
import { Trophy, RotateCcw, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const FootballGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [ballState, setBallState] = useState<{
    kicking: boolean;
    x: number; // percentage (-50 to 50)
    y: number; // 0 (bottom) to 100 (goal)
    scale: number;
    rotation: number;
    scored: boolean | null;
  }>({
    kicking: false,
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    scored: null,
  });

  const [commentary, setCommentary] = useState(
    'Online arena ready hai! Khushi, aim choose karo aur penalty kick maaro ⚽'
  );

  const comments = [
    'Kya zabardast shot tha! Seedha top corner! 🎯',
    'Goal!! Khushi ka 15th birthday special strike! 🏆',
    'Bhai yeh toh virtual stadium wala rocket shot lag gaya!',
    'Goalie ne dive maari par ball haath se nikal gayi! Shabash!',
    'Direct hit! Internet ke doosre kone se bhi shandaar goal!',
  ];

  const handleShoot = (targetPosition: 'left' | 'center' | 'right') => {
    if (ballState.kicking) return;

    sound.playFootballKick();
    setStrikes((prev) => prev + 1);

    const targetX = targetPosition === 'left' ? -36 : targetPosition === 'right' ? 36 : 0;
    const targetY = 88;

    setBallState({
      kicking: true,
      x: targetX,
      y: targetY,
      scale: 0.55,
      rotation: 720,
      scored: true,
    });

    setTimeout(() => {
      setScore((prev) => prev + 1);
      sound.playWishChime();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#22c55e', '#eab308', '#3b82f6', '#ffffff'],
      });

      const nextComment = comments[Math.floor(Math.random() * comments.length)];
      setCommentary(nextComment);
    }, 450);

    setTimeout(() => {
      // Reset ball position
      setBallState({
        kicking: false,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        scored: null,
      });
    }, 1800);
  };

  return (
    <section id="football-pitch" className="py-20 bg-[#090b10] border-b border-amber-950/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-body">
            ⚽ Khushi's Favorite Sport · Digital Penalty Pitch
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Khushi Ka Virtual Penalty Shootout ⚽
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Hum real life mein ground pe toh kabhi saath nahi khel paaye... par chats mein football ka craze yaad hai. Ek kick idhar banta hai!"
          </p>
        </div>

        {/* 3D Mini Pitch Container */}
        <div className="relative rounded-2xl overflow-hidden border border-emerald-900/40 bg-gradient-to-b from-[#06331a] via-[#094723] to-[#042813] shadow-2xl p-6 sm:p-8">
          
          {/* Pitch markings */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full border-2 border-white/60 m-2 rounded-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 border-b-2 border-x-2 border-white/60 rounded-b-xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-b-2 border-x-2 border-white/60" />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-16 border-t-2 border-white/60 rounded-t-full" />
          </div>

          {/* Goal Post Frame at top */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* The Goal Post */}
            <div className="w-64 sm:w-80 h-28 border-4 border-white/90 rounded-t-md relative bg-white/5 backdrop-blur-[1px] shadow-lg flex items-center justify-between px-4">
              
              {/* Goal Net Crosshatch */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '10px 10px'
                }}
              />

              {/* Target Aim Buttons (Left, Center, Right) */}
              <button
                onClick={() => handleShoot('left')}
                disabled={ballState.kicking}
                className="relative z-20 group flex flex-col items-center text-emerald-300 hover:text-white transition-colors"
                title="Shoot Left Corner"
              >
                <Target className="w-6 h-6 animate-pulse group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-sans font-bold uppercase mt-1 bg-black/40 px-1.5 py-0.5 rounded">
                  Left
                </span>
              </button>

              <button
                onClick={() => handleShoot('center')}
                disabled={ballState.kicking}
                className="relative z-20 group flex flex-col items-center text-emerald-300 hover:text-white transition-colors"
                title="Shoot Center Roof"
              >
                <Target className="w-6 h-6 animate-pulse group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-sans font-bold uppercase mt-1 bg-black/40 px-1.5 py-0.5 rounded">
                  Center
                </span>
              </button>

              <button
                onClick={() => handleShoot('right')}
                disabled={ballState.kicking}
                className="relative z-20 group flex flex-col items-center text-emerald-300 hover:text-white transition-colors"
                title="Shoot Right Corner"
              >
                <Target className="w-6 h-6 animate-pulse group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-sans font-bold uppercase mt-1 bg-black/40 px-1.5 py-0.5 rounded">
                  Right
                </span>
              </button>
            </div>

            {/* Field Turf Play Area */}
            <div className="w-full h-52 relative flex items-end justify-center pb-2">
              
              {/* Penalty Spot */}
              <div className="absolute bottom-10 w-3 h-3 rounded-full bg-white/80 shadow" />

              {/* The Football */}
              <div
                style={{
                  transform: `translate(${ballState.x * 2.2}px, ${-ballState.y * 1.8}px) scale(${ballState.scale}) rotate(${ballState.rotation}deg)`,
                  transition: ballState.kicking 
                    ? 'transform 0.45s cubic-bezier(0.2, 0.8, 0.4, 1.2)' 
                    : 'none',
                }}
                className="relative z-30 select-none cursor-pointer group"
                onClick={() => handleShoot('center')}
                title="Click to shoot football!"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-stone-800 shadow-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform">
                  {/* Hexagon pattern on football */}
                  <div className="w-6 h-6 bg-stone-900 rounded-sm transform rotate-45" />
                  <div className="absolute top-1 left-2 w-3 h-3 bg-stone-900 rounded-sm" />
                  <div className="absolute bottom-1 right-2 w-3 h-3 bg-stone-900 rounded-sm" />
                </div>

                {/* Ball Shadow */}
                <div 
                  className={`w-12 h-3 bg-black/50 rounded-full blur-xs mx-auto mt-1 transition-all ${
                    ballState.kicking ? 'opacity-20 scale-50' : 'opacity-80 scale-100'
                  }`}
                />
              </div>

            </div>

          </div>

          {/* Commentary & Scoreboard */}
          <div className="mt-4 pt-4 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-emerald-200">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">Goals Scored: {score}</span>
              <span className="text-white/40">·</span>
              <span>Strikes: {strikes}</span>
            </div>

            <div className="text-emerald-100 font-kalam text-center sm:text-right">
              {commentary}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
