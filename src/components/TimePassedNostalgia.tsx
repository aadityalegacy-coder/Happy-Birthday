import React, { useState } from 'react';
import { Clock, MessageSquare, Heart, Compass, Moon, ArrowRight } from 'lucide-react';

export const TimePassedNostalgia: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const memories = [
    {
      title: "Late Night Random Chats",
      subtitle: "2:00 AM Wala Phase",
      then: "Phone ki battery 3% bachti thi, par baat khatam nahi hoti thi. Tuitions, reels, teachers, sab kuch.",
      now: "Ab hafte guzar jaate hain. Bas story dekh kar smile kar lete hain ki chal, sab theek hai.",
    },
    {
      title: "No-Filter Bakchodi",
      subtitle: "Bina Formalities Ke",
      then: "Kabhi 'hey' ya 'good morning' nahi bola. Seedha 'Bhai sun ek kaand ho gaya' bol ke call shuru.",
      now: "Ab message karne se pehle sochna padta hai: 'Kahin busy toh nahi hogi? Boards ki padhai chal rahi hogi.'",
    },
    {
      title: "Audio Calls & Padhai Drama",
      subtitle: "Online Study Sessions",
      then: "Call lagakar bolna 'saath mein padhenge', aur fir 2 ghante school ki dastaan aur random baatein chalna.",
      now: "Pre-boards, boards ka stress, future ke plans... chats kab kam ho gayi, pata hi nahi chala.",
    },
    {
      title: "The Unspoken Rule",
      subtitle: "Purane Dost Ka Hak",
      then: "Roz contact mein hona compulsory lagta tha.",
      now: "Real realization: Sacchi dosti ko roz attendance lagane ki zaroorat nahi hoti. Dil mein jagah fixed rehti hai.",
    },
  ];

  return (
    <section className="py-24 bg-[#0c0d15] border-b border-amber-950/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-400/80 font-semibold font-body">
            Ek Sach Jo Hum Dono Jaante Hain
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            “Yaar, time kitna badal gaya…”
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Na koi ladaai hui, na koi narazgi... bas time aage badh gaya aur hum thode bade ho gaye."
          </p>
        </div>

        {/* Then vs Now Comparative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Left: Pehle (Then) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#181a28] to-[#11121d] border border-amber-500/20 relative shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Pehle (The Golden Phase)
              </span>
              <span className="text-xs text-amber-300/60 font-kalam">Literally Roz Baat</span>
            </div>

            <h3 className="font-marcellus text-xl text-amber-100 mb-3">
              Jab Roz Subah Se Raat Tak Baat Hoti Thi
            </h3>

            <p className="text-sm text-amber-200/80 font-body leading-relaxed space-y-2">
              Hum kabhi real life mein mile nahi the, par phone ke screen ke us paar se school ki har chhoti baat, 
              tuition ke rants, voice notes, doston ke kisse, aur raat ke 2-2 baje tak bina kisi reason ke call pe hasna. 
              Tab lagta tha ki yeh internet dosti hamesha aisi hi roz chalti rahegi.
            </p>

            <div className="mt-6 pt-4 border-t border-amber-950/40 text-xs text-amber-400/70 font-kalam">
              ~ Zero filters · Zero hesitation · Daily routine ka hissa
            </div>
          </div>

          {/* Right: Ab (Now) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141522] to-[#0d0e17] border border-stone-800 relative shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-stone-400">
                Ab (The Silent Drift)
              </span>
              <span className="text-xs text-stone-400/60 font-kalam">Hafte & Mahine</span>
            </div>

            <h3 className="font-marcellus text-xl text-stone-200 mb-3">
              Jab Pata Bhi Nahi Life Mein Kya Chal Raha Hai
            </h3>

            <p className="text-sm text-stone-300/80 font-body leading-relaxed space-y-2">
              Ab honestly mujhe nahi pata teri life mein kya chal raha hai. Kaun se naye dost bane, 
              kaun sa subject sabse zyada dimaag kharab kar raha hai, ya kisse ladai hui. 
              Bas door se dekh ke lagta hai ki chal, Khushi apni life mein busy hai aur khush hai.
            </p>

            <div className="mt-6 pt-4 border-t border-stone-800/60 text-xs text-stone-400/70 font-kalam">
              ~ Dooriyan aa gayi, par dosti ka respect wahi ka wahi hai.
            </div>
          </div>

        </div>

        {/* 3D Flip Polaroid Memories Grid */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-kalam text-amber-300/80">
              👇 Cards par click karo — Purani yaadein flip hongi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {memories.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setFlippedCard(flippedCard === idx ? null : idx)}
                className="cursor-pointer group relative min-h-[220px] rounded-xl p-5 border transition-all duration-300 bg-[#161725] hover:bg-[#1a1b2d] border-amber-900/30 hover:border-amber-600/50 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                      {item.subtitle}
                    </span>
                    <span className="text-xs text-amber-300/50 group-hover:text-amber-300">
                      {flippedCard === idx ? 'Flip Back' : 'Flip ↺'}
                    </span>
                  </div>

                  <h4 className="font-marcellus text-base text-amber-100 font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-amber-200/80 font-body leading-relaxed">
                    {flippedCard === idx ? (
                      <span className="text-amber-300 block font-kalam text-sm">
                        👉 <strong>Aaj:</strong> {item.now}
                      </span>
                    ) : (
                      <span className="text-stone-300/90 block font-body">
                        👉 <strong>Tab:</strong> {item.then}
                      </span>
                    )}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-950/40 text-[11px] text-amber-400/60 flex items-center justify-between">
                  <span>{flippedCard === idx ? 'Now' : 'Then'}</span>
                  <span>Tap to reveal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
