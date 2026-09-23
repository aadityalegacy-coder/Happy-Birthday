import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface NavbarProps {
  onTogglePetals: () => void;
  petalsActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onTogglePetals, petalsActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleSound = () => {
    const playing = sound.toggleBgm();
    setIsPlaying(playing);
  };

  const triggerConfettiCelebration = () => {
    sound.playWishChime();
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#f59e0b', '#f97316', '#fbbf24', '#f43f5e', '#ffffff'],
    });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0c0d14]/85 border-b border-amber-950/30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="font-rozha text-lg sm:text-xl text-amber-200 tracking-wide hover:text-amber-100 transition-colors whitespace-nowrap"
        >
          Khushi (Mannat) · 15
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-amber-100/70">
          <a href="#late-confession" className="hover:text-amber-300 transition-colors">
            Late Wish
          </a>
          <a href="#digital-scrapbook" className="hover:text-amber-300 transition-colors">
            Scrapbook
          </a>
          <a href="#school-nostalgia" className="hover:text-amber-300 transition-colors">
            Online Archive
          </a>
          <a href="#football-pitch" className="hover:text-amber-300 transition-colors">
            Virtual Football
          </a>
          <a href="#diya-aashirwad" className="hover:text-amber-300 transition-colors">
            Shubh Diya
          </a>
          <a href="#night-sky" className="hover:text-amber-300 transition-colors">
            Mannat Sky
          </a>
          <a href="#personal-letter" className="hover:text-amber-300 transition-colors">
            Chitthi
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleToggleSound}
            title={isPlaying ? 'Music Pause Karein' : 'Dheemi Dhun Chalao'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-200 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/40 rounded-lg transition-colors whitespace-nowrap"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">Dhun On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-amber-300/60" />
                <span className="hidden sm:inline">Dheemi Dhun</span>
              </>
            )}
          </button>

          <button
            onClick={triggerConfettiCelebration}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Badhaai Ho</span>
          </button>
        </div>
      </div>
    </header>
  );
};
