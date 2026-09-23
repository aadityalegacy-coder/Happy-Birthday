import React, { useState } from 'react';
import { Flame, Sparkles, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const DiyaAashirwad: React.FC = () => {
  const [isLit, setIsLit] = useState(false);

  const handleLightDiya = () => {
    sound.playDiyaLight();
    setTimeout(() => {
      sound.playTempleBell();
    }, 200);

    setIsLit(true);

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#f59e0b', '#f97316', '#fbbf24', '#fde047'],
    });
  };

  return (
    <section 
      id="diya-aashirwad" 
      className="py-24 bg-[#0a0a10] border-b border-amber-950/20 relative overflow-hidden transition-all duration-700"
      style={{
        boxShadow: isLit ? 'inset 0 0 160px rgba(245, 158, 11, 0.12)' : 'none',
      }}
    >
      {/* Dynamic warm glow behind the diya */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
          isLit 
            ? 'w-[650px] h-[450px] bg-gradient-to-t from-amber-500/20 via-orange-500/15 to-transparent blur-[110px]' 
            : 'w-60 h-60 bg-amber-900/5 blur-[90px]'
        }`} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-body">
            🪷 Shubh Aashirwad & Divine Blessings
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Khushi Ke 15th Saal Ke Naam Ka Diya 🪔
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Family ke bado ke aashirwad ke saath, ek purane dost ki sachi dua."
          </p>
        </div>

        {/* Central Diya Altar Frame */}
        <div className="bg-gradient-to-b from-[#161420] to-[#0f0e18] border border-amber-800/40 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Rangoli / Mandala Geometry background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[420px] h-[420px] rounded-full border border-dashed border-amber-300" />
            <div className="w-[300px] h-[300px] rounded-full border border-amber-400" />
            <div className="w-[180px] h-[180px] rounded-full border border-dashed border-amber-200" />
          </div>

          <div className="flex flex-col items-center text-center space-y-8 relative z-10">

            {/* The Brass Diya (पीतल का दिया) Artwork */}
            <div className="relative py-4">
              
              {/* The Flame */}
              <div 
                className={`transition-all duration-700 flex flex-col items-center ${
                  isLit ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              >
                {/* Flame Teardrop */}
                <div className="w-8 h-14 bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-100 rounded-full flame-flicker relative">
                  <div className="absolute inset-0 bg-amber-300 blur-sm opacity-80" />
                </div>
              </div>

              {/* Brass Diya Vessel (Pure SVG with metallic brass gradient) */}
              <svg 
                width="160" 
                height="80" 
                viewBox="0 0 160 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-lg -mt-3"
              >
                <defs>
                  <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="35%" stopColor="#fbbf24" />
                    <stop offset="70%" stopColor="#b45309" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                  <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#92400e" />
                    <stop offset="100%" stopColor="#451a03" />
                  </linearGradient>
                </defs>

                {/* Diya Bowl */}
                <path 
                  d="M10 25 C30 55, 130 55, 150 25 C145 45, 125 65, 80 65 C35 65, 15 45, 10 25 Z" 
                  fill="url(#brassGrad)" 
                />
                
                {/* Diya Lip & Oil Rim */}
                <ellipse cx="80" cy="25" rx="70" ry="12" fill="url(#brassGrad)" />
                <ellipse cx="80" cy="25" rx="60" ry="9" fill="url(#oilGrad)" />

                {/* Diya Spout */}
                <path d="M80 18 C78 12, 82 12, 80 18 Z" fill="#451a03" />

                {/* Pedestal Stand */}
                <path d="M60 62 L100 62 L110 74 L50 74 Z" fill="url(#brassGrad)" />
              </svg>

              {/* Marigold Petals around base */}
              <div className="flex items-center justify-center gap-2 -mt-2">
                <span className="text-xl">🪷</span>
                <span className="text-sm">🌼</span>
                <span className="text-lg">🪔</span>
                <span className="text-sm">🌼</span>
                <span className="text-xl">🪷</span>
              </div>
            </div>

            {/* Interaction Button */}
            {!isLit ? (
              <button
                onClick={handleLightDiya}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white font-medium text-sm shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-yellow-200 group-hover:animate-bounce" />
                <span>Diya Prajwalit Karein (Click To Light)</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs text-amber-300 font-kalam">
                <Bell className="w-4 h-4 text-amber-400 animate-spin" />
                <span>Diya jal raha hai... Shubh aashirwad accept ho gaya!</span>
              </div>
            )}

            {/* The Shubh Shloka & Aashirwad Text */}
            <div className="max-w-xl mx-auto space-y-4">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/30">
                <p className="font-rozha text-amber-200 text-sm sm:text-base tracking-wide leading-relaxed">
                  शुभं करोति कल्याणम् आरोग्यम् धनसंपदाम् । <br />
                  शत्रुबुद्धि-विनाशाय दीपज्योतिर्नमोऽस्तु ते ॥
                </p>
              </div>

              <div className="space-y-3 font-kalam text-amber-100/90 text-sm sm:text-base leading-relaxed">
                <p>
                  "Mannat, Bhagwan kare tera yeh 15th saal aur aage aane wale Class 10 boards sabse shandar jayein. 
                  Dimaag pe kabhi faltu stress na aaye, chehre ki yeh hansi hamesha bani rahe, 
                  aur family mein sab khush aur surakshit rahein."
                </p>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  "Roz baat nahi hoti toh kya hua... jab bhi mandir ya diya ke saamne haath judte hain, 
                  purane sacche doston ke liye dua apne aap nikal aati hai."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
