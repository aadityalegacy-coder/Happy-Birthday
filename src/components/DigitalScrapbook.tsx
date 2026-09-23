import React, { useState } from 'react';
import { Sparkles, Pin, Music, MessageSquare, PhoneCall, Wifi, BookOpen, Heart, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface ScrapItem {
  id: number;
  category: 'calls' | 'study' | 'chats';
  title: string;
  tag: string;
  rotation: string;
  tapeColor: string;
  visualType: 'call' | 'math' | 'reels' | 'voicenote' | 'map' | 'wishlist';
  caption: string;
  subtext: string;
}

export const DigitalScrapbook: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'calls' | 'study' | 'chats'>('all');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const scraps: ScrapItem[] = [
    {
      id: 1,
      category: 'calls',
      title: 'The 2:14 AM Audio Call',
      tag: '01:42:19 Duration',
      rotation: 'rotate-[-3deg]',
      tapeColor: 'bg-rose-400/80',
      visualType: 'call',
      caption: 'Ghar wale sab so rahe the... headphones laga kar phus-phusakar whispers mein hasna taaki mummy na jaag jayein.',
      subtext: 'Topic: School ke ajeeb teachers aur life ka drama',
    },
    {
      id: 2,
      category: 'study',
      title: 'RD Sharma Doubt on WhatsApp',
      tag: 'Class 10 Trigonometry',
      rotation: 'rotate-[2.5deg]',
      tapeColor: 'bg-amber-400/80',
      visualType: 'math',
      caption: '"Bhai is question ka step 3 bata de jaldi! Kal pre-boards hain aur geometry ne dimag ka dahi kar diya hai."',
      subtext: 'Formula: sin²θ + cos²θ = 1 (Exam mein bhool gaye)',
    },
    {
      id: 3,
      category: 'chats',
      title: '17 Unopened Reels at 2 AM',
      tag: 'Zero Context Spam',
      rotation: 'rotate-[-2deg]',
      tapeColor: 'bg-emerald-400/80',
      visualType: 'reels',
      caption: 'Bina kisi text ya caption ke back-to-back 15 funny memes bhej dena, aur agle din bas "LMAO so true" bolna.',
      subtext: 'Status: Seen at 2:48 AM',
    },
    {
      id: 4,
      category: 'chats',
      title: 'Meerut to Internet: Zero Distance',
      tag: 'Screens Apart · One Vibe',
      rotation: 'rotate-[3.5deg]',
      tapeColor: 'bg-sky-400/80',
      visualType: 'map',
      caption: 'Log puchte the "Kabhi real life mein mile ho kya?" Hum bolte the "Zaroorat hi nahi padi, dosti bina mile hi solid hai."',
      subtext: 'Connection: 100% Genuine Friendship',
    },
    {
      id: 5,
      category: 'calls',
      title: '3:00 PM Voice Note Rant',
      tag: '02:45 min Audio Bubble',
      rotation: 'rotate-[-1.5deg]',
      tapeColor: 'bg-purple-400/80',
      visualType: 'voicenote',
      caption: 'School bus se aate hi Meerut se non-stop 3 minute ka voice note: "Sun aaj school mein kya kaand hua..."',
      subtext: 'Playback Speed: 1.5x pe suna gaya',
    },
    {
      id: 6,
      category: 'study',
      title: "Khushi's 15th Birthday Wishlist",
      tag: 'Class 10 Targets',
      rotation: 'rotate-[2deg]',
      tapeColor: 'bg-yellow-400/80',
      visualType: 'wishlist',
      caption: 'Turning 15 in Class 10th! Boards ko phodna, chill rehna, aur purani dosti hamesha safe rakhna.',
      subtext: 'Verified by: Tera purana online best friend',
    },
  ];

  const handleCardClick = (id: number) => {
    sound.playWishChime();
    setSelectedId(selectedId === id ? null : id);
  };

  const triggerSparkle = () => {
    sound.playDiyaLight();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#ec4899', '#38bdf8', '#fbbf24'],
    });
  };

  const filteredScraps = activeFilter === 'all' 
    ? scraps 
    : scraps.filter((s) => s.category === activeFilter);

  return (
    <section id="digital-scrapbook" className="py-24 bg-[#0a0c14] border-b border-amber-950/20 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-body flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Scrapbook · Memory Collage</span>
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Screens Ke Dastavez & Yaadein 📸
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Bina kabhi aamne-saamne mile bhi, humari digital diary yaadon se bhari hui hai."
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-[#151726] border border-amber-900/30 rounded-xl max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-200/70 hover:text-white hover:bg-white/5'
            }`}
          >
            All Scraps
          </button>
          <button
            onClick={() => setActiveFilter('calls')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'calls'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-200/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Audio Calls 🎧
          </button>
          <button
            onClick={() => setActiveFilter('study')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'study'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-200/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Boards Rants 📚
          </button>
          <button
            onClick={() => setActiveFilter('chats')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeFilter === 'chats'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-200/70 hover:text-white hover:bg-white/5'
            }`}
          >
            DMs & Reels 💬
          </button>
        </div>

        {/* The Corkboard / Collage Field */}
        <div className="relative min-h-[560px] p-6 sm:p-10 rounded-3xl bg-[#121420]/90 border border-amber-900/30 shadow-2xl overflow-hidden chalkboard-texture">
          
          {/* Subtle pin decoration on top corners */}
          <div className="absolute top-4 left-6 flex items-center gap-2 text-xs text-amber-300/40 font-kalam select-none pointer-events-none">
            <Pin className="w-3.5 h-3.5 text-rose-400" />
            <span>Digital Corkboard · Meerut to Screen</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-6">
            {filteredScraps.map((scrap) => {
              const isSelected = selectedId === scrap.id;

              return (
                <div
                  key={scrap.id}
                  onClick={() => handleCardClick(scrap.id)}
                  className={`cursor-pointer transition-all duration-300 transform ${
                    isSelected 
                      ? 'scale-105 z-30 ring-2 ring-amber-400 shadow-2xl' 
                      : `${scrap.rotation} hover:scale-102 hover:rotate-0 hover:z-20`
                  }`}
                >
                  {/* Polaroid Frame */}
                  <div className="bg-[#faf5eb] text-slate-800 rounded-sm p-4 pt-3 pb-6 shadow-xl border border-stone-300 relative flex flex-col justify-between">
                    
                    {/* Washi Tape Strip at top */}
                    <div 
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 ${scrap.tapeColor} opacity-80 backdrop-blur-xs transform rotate-[-2deg] shadow-xs`}
                      style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }}
                    />

                    {/* Polaroid Photo Inner Area */}
                    <div className="bg-[#191c2b] text-white rounded p-4 aspect-[4/3] flex flex-col justify-between relative overflow-hidden shadow-inner border border-stone-800">
                      
                      {/* Visual representations based on type */}
                      {scrap.visualType === 'call' && (
                        <div className="h-full flex flex-col justify-between text-center py-1">
                          <div className="flex items-center justify-between text-[11px] text-amber-300/70 font-mono">
                            <span>WhatsApp Audio</span>
                            <span className="text-emerald-400">Connected</span>
                          </div>
                          
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center mb-1">
                              <PhoneCall className="w-5 h-5 text-amber-300 animate-pulse" />
                            </div>
                            <span className="font-bold text-sm text-amber-100">Khushi (Mannat)</span>
                            <span className="text-[10px] text-stone-400 font-mono">01:42:19</span>
                          </div>

                          {/* Sound wave doodle */}
                          <div className="flex items-center justify-center gap-1 opacity-70">
                            {[4, 12, 8, 16, 20, 14, 22, 10, 6, 14, 18, 8, 4].map((h, i) => (
                              <div key={i} style={{ height: `${h}px` }} className="w-1 bg-amber-400 rounded-full" />
                            ))}
                          </div>
                        </div>
                      )}

                      {scrap.visualType === 'math' && (
                        <div className="h-full flex flex-col justify-between font-kalam text-amber-100 p-1">
                          <div className="text-xs text-red-400 font-bold border-b border-white/10 pb-1">
                            RD SHARMA TRIGONOMETRY DOUBT
                          </div>
                          <div className="text-center py-2">
                            <span className="text-xl font-mono text-yellow-300">sin²θ + cos²θ = 1</span>
                            <p className="text-[11px] text-stone-300 mt-1">
                              "Bhai RHS prove kyu nahi ho raha? 😭"
                            </p>
                          </div>
                          <div className="text-[10px] text-stone-400 italic text-right">
                            ~ Sent via camera click at 11:42 PM
                          </div>
                        </div>
                      )}

                      {scrap.visualType === 'reels' && (
                        <div className="h-full flex flex-col justify-between p-1">
                          <div className="text-[11px] text-pink-300 font-bold flex items-center justify-between">
                            <span>Instagram Reel Drop</span>
                            <span>2:14 AM</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center my-auto">
                            <span className="text-2xl">🐱📱</span>
                            <p className="text-xs text-amber-200 mt-1 font-kalam">
                              "Literally tu aur main jab exams ki padhai karni hoti hai"
                            </p>
                          </div>
                          <div className="text-[10px] text-emerald-400 font-mono">
                            ✓✓ Seen immediately
                          </div>
                        </div>
                      )}

                      {scrap.visualType === 'map' && (
                        <div className="h-full flex flex-col justify-between p-1 text-center">
                          <div className="text-[11px] text-sky-300 font-bold">
                            MEERUT ⇄ SCREEN
                          </div>
                          <div className="flex items-center justify-center gap-3 py-2">
                            <div className="text-center">
                              <div className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center mx-auto text-xs">
                                📍
                              </div>
                              <span className="text-[10px] text-stone-300">Meerut, UP</span>
                            </div>

                            <div className="flex-1 border-t-2 border-dashed border-sky-400/60 relative">
                              <Wifi className="w-3.5 h-3.5 text-sky-300 absolute -top-2 left-1/2 -translate-x-1/2" />
                            </div>

                            <div className="text-center">
                              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-xs">
                                📍
                              </div>
                              <span className="text-[10px] text-stone-300">Dost Ka Phone</span>
                            </div>
                          </div>
                          <div className="text-[10px] text-amber-300 font-kalam">
                            "Kilo-meters dooor, par baatein dil ke kareeb"
                          </div>
                        </div>
                      )}

                      {scrap.visualType === 'voicenote' && (
                        <div className="h-full flex flex-col justify-between p-1">
                          <div className="text-[11px] text-emerald-300 font-bold flex items-center justify-between">
                            <span>Voice Note Bubble</span>
                            <span>Meerut Dialect</span>
                          </div>
                          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-2.5 flex items-center gap-3 my-auto">
                            <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-bold text-xs shrink-0">
                              ▶
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-0.5">
                                {[6, 14, 18, 10, 16, 22, 8, 14, 20, 12, 16, 8, 14].map((h, i) => (
                                  <div key={i} style={{ height: `${h}px` }} className="w-1 bg-emerald-400 rounded-full" />
                                ))}
                              </div>
                              <div className="flex justify-between text-[9px] text-emerald-200 mt-1 font-mono">
                                <span>01:14</span>
                                <span>02:45</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-[10px] text-stone-400 font-kalam text-center">
                            "School se aate hi full-speed rant"
                          </div>
                        </div>
                      )}

                      {scrap.visualType === 'wishlist' && (
                        <div className="h-full flex flex-col justify-between p-1 font-kalam text-amber-100">
                          <div className="text-xs text-yellow-300 font-bold border-b border-white/10 pb-1 flex justify-between">
                            <span>15TH BIRTHDAY TARGETS</span>
                            <span className="text-xs">🎂</span>
                          </div>
                          <ul className="text-xs space-y-1 my-auto text-stone-200">
                            <li>✓ Sweet 15 official entry</li>
                            <li>✓ Class 10th boards me top karna</li>
                            <li>✓ Football matches me jeetna</li>
                            <li>✓ Purani online dosti hamesha zinda</li>
                          </ul>
                          <div className="text-[10px] text-amber-400 text-right">
                            ~ 22 September 2026
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Polaroid Bottom Caption (Handwritten Font) */}
                    <div className="mt-3 space-y-1 font-kalam">
                      <div className="flex items-center justify-between text-xs text-stone-500 font-sans">
                        <span className="font-semibold text-amber-900 text-xs">{scrap.title}</span>
                        <span className="text-[11px] text-stone-400">{scrap.tag}</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-snug">
                        {scrap.caption}
                      </p>
                      <div className="text-[10px] text-amber-800/60 pt-1 font-sans italic border-t border-stone-200/60">
                        {scrap.subtext}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive celebration sticker footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70">
            <div className="flex items-center gap-2 font-kalam">
              <span>📌 Memory Tips: Cards par tap karo to zoom & explore.</span>
            </div>
            
            <button
              onClick={triggerSparkle}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 text-amber-200 text-xs font-medium transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Drop Golden Memory Dust ✨</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
