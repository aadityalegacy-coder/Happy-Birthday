import React, { useState } from 'react';
import { Mail, MailOpen, Copy, Check, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const FinalLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpenLetter = () => {
    if (!isOpen) {
      sound.playWishChime();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#fbbf24', '#ffffff'],
      });
    }
    setIsOpen(true);
  };

  const handleCopyPing = () => {
    const text = "Bhai website dekhi... rula diya yaar 🥹 Bohot pyara banaya hai!";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="personal-letter" className="py-24 bg-[#0a0b12] relative overflow-hidden">
      
      {/* Background radial warmth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-body">
            💌 Dil Se Likhha Hua Aakhiri Sandesh
          </div>
          <h2 className="font-rozha text-2xl sm:text-4xl text-amber-100">
            Ek Chitthi Purani Dosti Ke Naam ✉️
          </h2>
          <p className="text-sm sm:text-base text-amber-200/70 font-kalam">
            "Kuch baatein WhatsApp ke text message mein bayaan nahi hoti..."
          </p>
        </div>

        {/* Envelope & Letter Container */}
        <div className="max-w-2xl mx-auto">
          
          {!isOpen ? (
            /* Closed Wax Sealed Envelope */
            <div 
              onClick={handleOpenLetter}
              className="group cursor-pointer bg-gradient-to-b from-[#221c1a] to-[#171312] border-2 border-amber-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl text-center space-y-6 hover:border-amber-500 transition-all hover:scale-[1.02] relative"
            >
              {/* Envelope flap aesthetic */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-red-700 to-amber-900 border-2 border-amber-400 shadow-xl flex items-center justify-center relative">
                <span className="font-rozha text-amber-200 text-lg font-bold">म</span>
                <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-red-500" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400/80 font-bold block">
                  To: Khushi (Mannat) · Meerut, UP
                </span>
                <h3 className="font-marcellus text-xl sm:text-2xl text-amber-100">
                  Yeh lifafa sirf tere liye khulega
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/70 font-kalam">
                  (Click karo seal todne aur chitthi padhne ke liye)
                </p>
              </div>

              <button className="px-6 py-2.5 rounded-xl bg-amber-600 group-hover:bg-amber-500 text-white text-xs font-semibold shadow-lg transition-colors inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Chitthi Kholo ✉️</span>
              </button>
            </div>
          ) : (
            /* Unfolded Handwritten Letter */
            <div className="notebook-ruled rounded-2xl p-6 sm:p-12 shadow-2xl text-stone-900 border border-amber-300 relative animate-in fade-in zoom-in-95 duration-500">
              
              {/* Letter Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-red-200 pb-3 mb-6 font-kalam text-xs sm:text-sm text-stone-600">
                <span className="font-bold text-red-600">MEERUT DIARY · 23 SEPTEMBER 2026</span>
                <span>TO: KHUSHI (MANNAT)</span>
              </div>

              {/* Letter Prose */}
              <div className="font-kalam text-base sm:text-lg leading-relaxed text-stone-800 space-y-4">
                <p className="font-bold text-amber-950 text-xl font-rozha">
                  Hey Khushi,
                </p>

                <p>
                  Pata hai, birthday kal tha. Aur sach boloon toh phone haath mein lekar main kaafi der tak sochte reh gaya ki kya likhoon. 
                  Ek dry sa <em>'Happy Birthday Khushi ❤️ party kab de rahi hai'</em> likhna itna ajeeb aur fake lag raha tha... 
                  jaise hum koi strangers hon jo saal mein bas ek baar formality ke liye wish karte hain.
                </p>

                <p>
                  Hum kabhi real life mein mile nahi, kabhi ek doosre ke aamne-saamne nahi baithe... 
                  par phone screen ke uss paar se jo bond bana tha, that was 100% real. 
                  Ghanton audio calls pe baatein karna, school aur teachers ke baare mein voice notes bhejna, 
                  tuition ke rants sunana, aur raat ke 2 baje bina kisi matlab ke hasna. 
                  Tab lagta tha ki yeh dosti hamesha aisi hi roz chalti rahegi.
                </p>

                <p>
                  Ab time aage nikal gaya hai. Tu Class 10 mein hai, board exams ka stress hoga, naye log honge, 
                  nayi priorities hongi. Mujhe honestly ab teri daily life ke baare mein kuch zyada pata bhi nahi hai.
                  Par ek cheez jo bilkul nahi badli... woh yeh hai ki <strong>I genuinely root for you.</strong>
                </p>

                <p>
                  Kabhi-kabhi log bina kisi ladai ke bas dheere-dheere door ho jaate hain... par sacche dost dil ke usi folder mein hamesha safe rehte hain. 
                  Tu un gine-chune doston mein se hai jinka naam sunkar hamesha chehre par ek honest smile aati hai.
                </p>

                <p>
                  15 saal ki ho gayi hai tu! Board exams ko phod dena, faltu ka overthinking bilkul mat karna, 
                  family ke sath bohot khush rehna, aur hamesha aisi hi rehna—thodi bakchod, thodi emotional, aur sabki favorite.
                </p>

                <p>
                  Kabhi bhi agar life mein lage ki koi purana dost chahiye jisse bina kisi filter ke baat karni ho, 
                  mera darwaza hamesha khula hai.
                </p>

                <div className="pt-4 text-right space-y-1">
                  <p className="font-bold text-stone-900 text-lg">Belated Happy Birthday, Mannat. 🎂</p>
                  <p className="text-stone-600 text-sm italic font-sans">
                    — Tera purana dost (hamesha ki tarah ek din late)
                  </p>
                </div>
              </div>

              {/* Postscript / Quick Reply helper */}
              <div className="mt-8 pt-6 border-t border-red-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                <span className="text-xs text-stone-600 text-center sm:text-left">
                  Agar padh kar purane din yaad aaye hon, toh WhatsApp pe ping kar sakti hai:
                </span>

                <button
                  onClick={handleCopyPing}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium shadow transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-300" />
                      <span>Copy WhatsApp Ping 💬</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer quiet signoff */}
        <div className="mt-20 text-center space-y-2 border-t border-amber-950/40 pt-8">
          <p className="font-rozha text-sm sm:text-base text-amber-200/70">
            Khushi (Mannat) · 22 September 2026 · Meerut, Uttar Pradesh
          </p>
          <p className="text-xs text-amber-400/50 font-kalam">
            "Bhai, isne actually mere liye ye sab banaya?" — Haan bhai, tere liye hi banaya hai.
          </p>
        </div>

      </div>
    </section>
  );
};
