import React, { useState } from 'react';
import { Smartphone, Mic, MessageCircle, Wifi, BookOpen, Clock, Heart } from 'lucide-react';
import { sound } from '../utils/audio';

export const SchoolNotebook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice-notes' | 'study-calls' | 'never-met-irl'>('voice-notes');
  const [voiceNotePlaying, setVoiceNotePlaying] = useState(false);

  const handleSimulateVoiceNote = () => {
    sound.playWishChime();
    setVoiceNotePlaying(true);
    setTimeout(() => {
      setVoiceNotePlaying(false);
    }, 3000);
  };

  return (
    <section id="school-nostalgia" className="py-20 bg-[#0e1017] border-b border-amber-950/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-body">
            📱 The Online Best Friends & Class 10th Archive
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Screens Ke Beech Ki Dosti 🌐
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Hum kabhi real life mein mile nahi... fir bhi internet ke doosre kone se sabse sacchi dosti ban gayi."
          </p>
        </div>

        {/* Interactive Archive Wrapper */}
        <div className="bg-[#181a25] p-3 sm:p-6 rounded-2xl border border-amber-900/30 shadow-2xl">
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-amber-900/40 pb-4">
            <button
              onClick={() => setActiveTab('voice-notes')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'voice-notes'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-amber-100/60 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              1. 3 PM School Rant Voice Notes 🎙️
            </button>
            <button
              onClick={() => setActiveTab('study-calls')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'study-calls'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-amber-100/60 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              2. Late-Night Audio Study Calls 🎧
            </button>
            <button
              onClick={() => setActiveTab('never-met-irl')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'never-met-irl'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-amber-100/60 hover:text-amber-200 hover:bg-white/5'
              }`}
            >
              3. "Never Met IRL, But Real Dost" 🌐
            </button>
          </div>

          {/* Styled Paper / Chat Log Viewport */}
          <div className="notebook-ruled rounded-xl p-6 sm:p-10 shadow-inner text-slate-800 min-h-[420px] relative overflow-hidden">
            
            {/* Spiral Holes on the left edge */}
            <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-4 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#181a25] shadow-inner border border-stone-300" />
              ))}
            </div>

            {/* Red margin offset */}
            <div className="pl-10 sm:pl-14">
              
              {activeTab === 'voice-notes' && (
                <div className="space-y-6 font-kalam text-sm sm:text-base leading-relaxed">
                  <div className="flex flex-wrap items-center justify-between border-b border-red-200 pb-2">
                    <span className="font-bold text-red-600 text-sm">LOGGED FROM MEERUT: POST-SCHOOL VOICE NOTES</span>
                    <span className="text-xs text-stone-500">FORMAT: 2-MINUTE AUDIO VENTS</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="p-4 bg-amber-100/70 border border-amber-300/80 rounded-xl shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-amber-950 text-base">🎧 School Rant Voice Note:</span>
                          <span className="text-xs text-amber-800 font-mono">01:48</span>
                        </div>
                        <p className="text-stone-700 text-sm">
                          "Bhai sun na... aaj school mein teacher ne trigonometry ka itna ajeeb question diya. 
                          Aur upar se pre-boards ka syllabus dekh ke dimaag ghoom gaya hai! Tu bata tera din kaisa tha?"
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={handleSimulateVoiceNote}
                            className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-sans font-medium flex items-center gap-1.5 cursor-pointer"
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>{voiceNotePlaying ? 'Replaying Memory...' : 'Simulate Audio Tone'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl shadow-xs">
                        <h4 className="font-bold text-rose-950 text-base">🎀 Social Energy Over DMs:</h4>
                        <p className="text-stone-700 text-sm mt-1">
                          "Bina shakal dekhe bhi mujhe pata hota tha kab tera mood kharab hai aur kab tu full bakchodi ke mode mein hai. 
                          Texts aur typing speed se samajh aa jaata tha."
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl shadow-xs">
                        <h4 className="font-bold text-blue-950 text-base">📚 Class 10 Boards Stress Exchange:</h4>
                        <p className="text-stone-700 text-sm mt-1">
                          "RD Sharma ke questions ki photos bhejna, ek doosre ko bolna 'kal se subah 5 baje uth ke padhenge', 
                          aur fir subah 9 baje 'sorry alarm nahi baja' bolna. Classic internet best friend routine."
                        </p>
                      </div>

                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl shadow-xs">
                        <h4 className="font-bold text-emerald-950 text-base">✨ No Physical Barrier:</h4>
                        <p className="text-stone-700 text-sm mt-1">
                          "Hum alag cities mein the, alag schools mein the, kabhi aamne-saamne nahi baithe... 
                          par online aakar jo baatein hoti thi, woh kisi bhi local dost se 10x zyada real lagti thi."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-xs text-stone-500 italic pt-2">
                    ~ Screen time: 4 hours daily on chat
                  </div>
                </div>
              )}

              {activeTab === 'study-calls' && (
                <div className="space-y-5 font-kalam text-stone-800 leading-relaxed">
                  <div className="border-b border-red-200 pb-2">
                    <span className="font-bold text-red-600 text-sm">THE LATE-NIGHT AUDIO CALL PROTOCOL</span>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📖</span>
                      <div>
                        <strong>1. The "Padhai Karne Ka Plan":</strong>
                        <p className="text-stone-600 text-sm">
                          "Bhai call pe aaja, saath mein chapter revise karte hain taaki neend na aaye." 
                          Initial 8 minutes padhai... aur agle 2 ghante random internet drama, gossip aur hasi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-lg">🔋</span>
                      <div>
                        <strong>2. The 3% Battery Warning:</strong>
                        <p className="text-stone-600 text-sm">
                          "Bhai charger doosre room mein hai, phone switch off hone wala hai!" bol kar bhi 20 minute aur call kheench lena.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-lg">🌙</span>
                      <div>
                        <strong>3. Raat Ke 2 Baje Ki Khamoshi:</strong>
                        <p className="text-stone-600 text-sm">
                          Dheemi aawaz mein whispering: "Ghar wale jaag jayenge, thoda dheere bol." 
                          Woh phase jab internet connection hi dosti ka sabse bada sahara tha.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'never-met-irl' && (
                <div className="space-y-6 font-kalam text-stone-800">
                  <div className="border-b border-red-200 pb-2 flex justify-between items-center">
                    <span className="font-bold text-red-600 text-sm">THE "NEVER MET IRL" PHENOMENON</span>
                    <span className="text-xs text-stone-500">Real Feelings · Zero Distance</span>
                  </div>

                  <div className="bg-stone-100/90 p-6 rounded-xl border border-stone-300 space-y-4">
                    <div className="flex items-center gap-3 text-amber-900 font-bold text-base font-rozha">
                      <Wifi className="w-5 h-5 text-amber-600" />
                      <span>Log Kehte Hain Online Dost Fake Hote Hain...</span>
                    </div>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                      "Par sach yeh hai ki hum kabhi real life mein mile nahi, na kabhi aamne-saamne baith kar baat ki... 
                      Fir bhi Class 10 ke us pure phase mein, tu meri sabse close dost thi. 
                      Kabhi-kabhi jinke sath hum physically nahi rehte, woh hamare emotions ko local doston se zyada achhe se samajh paate hain."
                    </p>

                    <div className="pt-2 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                      <span>Status: Distance 100%, Bond 100%</span>
                      <span>Connection: Pure Friendship</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
