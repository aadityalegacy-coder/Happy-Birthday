import React, { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { HeroLateWish } from './components/HeroLateWish';
import { DigitalScrapbook } from './components/DigitalScrapbook';
import { SchoolNotebook } from './components/SchoolNotebook';
import { FootballGame } from './components/FootballGame';
import { DiyaAashirwad } from './components/DiyaAashirwad';
import { TimePassedNostalgia } from './components/TimePassedNostalgia';
import { MannatNightSky } from './components/MannatNightSky';
import { FinalLetter } from './components/FinalLetter';

export default function App() {
  const [petalsActive, setPetalsActive] = useState(true);

  return (
    <div id="top" className="min-h-screen bg-[#0c0d14] text-[#f4efe6] relative overflow-x-hidden font-body selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Falling Marigold / Genda Petals Canvas */}
      <PetalCanvas active={petalsActive} />

      {/* Top Bar Navigation (Design Constitution compliant) */}
      <Navbar 
        onTogglePetals={() => setPetalsActive((prev) => !prev)} 
        petalsActive={petalsActive} 
      />

      <main>
        {/* Section 1: "hehe" phase - The Late Wish & Meerut Excuses (15th Birthday) */}
        <HeroLateWish />

        {/* Section 2: Digital Scrapbook - Collage of floating polaroids & online friendship artifacts */}
        <DigitalScrapbook />

        {/* Section 3: "wait, this is actually personal" - Class 10th Boards & Online Chats Archive */}
        <SchoolNotebook />

        {/* Section 4: ⚽ Virtual Football Arena & Digital Penalty Shootout */}
        <FootballGame />

        {/* Section 5: 🪷 Cultural & Religious Warmth - 15th Saal Ka Diya & Aashirwad */}
        <DiyaAashirwad />

        {/* Section 6: "nostalgia → damn..." - Then vs Now & The Distance of Time */}
        <TimePassedNostalgia />

        {/* Section 7: 🌙 Mannat Night Sky - Starlit wishes & floating lanterns over Meerut */}
        <MannatNightSky />

        {/* Section 8: Warm Ending - The Handwritten Letter & Wax Sealed Lifafa */}
        <FinalLetter />
      </main>

      <SpeedInsights />
    </div>
  );
}
