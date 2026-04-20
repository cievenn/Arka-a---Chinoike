import React, { useState } from 'react';
import { Biohazard, Eye, Flame, Skull } from 'lucide-react';

import { DOSSIER_DATA } from './data';
import { CustomCursor } from './components/ui/CustomCursor';
import { OrganicBloodCanvas } from './components/ui/OrganicBloodCanvas';
import { AtmosphericOverlay } from './components/ui/AtmosphericOverlay';
import { PremiumSchizoIntro } from './components/ui/PremiumSchizoIntro';
import { BackgroundWatermark } from './components/ui/BackgroundWatermark';
import { PageWrapper } from './components/layout/PageWrapper';

import { PageGeneral } from './pages/PageGeneral';
import { PagePersonality } from './pages/PagePersonality';
import { PageHistory } from './pages/PageHistory';
import { PageObjectives } from './pages/PageObjectives';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('general');
  const [nextTab, setNextTab] = useState('general');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [triggerScramble, setTriggerScramble] = useState(0);

  // Handle smooth page transitions
  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setNextTab(tabId);
      setTriggerScramble(prev => prev + 1); // Retrigger scramble on new page
      setIsTransitioning(false);
    }, 600); // Wait for fade out
  };

  const tabs = [
    { id: 'general', icon: Biohazard, label: 'Bilan Sanguin' },
    { id: 'personality', icon: Eye, label: 'Dissonance' },
    { id: 'history', icon: Flame, label: 'Trauma Initial' },
    { id: 'objectives', icon: Skull, label: 'Éradication' },
  ];

  return (
    <div className="min-h-screen bg-[#020000] text-white overflow-hidden flex flex-col font-sans selection:bg-[#ff0000] selection:text-black">
      
      {/* GLOBAL AWWARDS-LEVEL CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&family=Bebas+Neue&family=Oswald:wght@700&family=Noto+Serif+JP:wght@900&display=swap');

        /* FONT BLEACH FALLBACKS */
        @font-face {
          font-family: 'FontBleach';
          src: url('font/FontBleach.ttf') format('truetype');
        }
        .font-bleach {
          font-family: 'FontBleach', 'Impact', 'Oswald', 'Playfair Display', sans-serif;
          font-weight: 900;
        }

        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-japanese { font-family: 'Noto Serif JP', serif; }

        * { cursor: none !important; }

        .custom-scroll::-webkit-scrollbar { width: 8px; }
        .custom-scroll::-webkit-scrollbar-track { background: #020000; border-left: 1px solid rgba(255,255,255,0.05); }
        .custom-scroll::-webkit-scrollbar-thumb { background: #3a0000; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #ff0000; }

        .text-stroke-red {
          -webkit-text-stroke: 2px #ff0000;
          color: transparent;
        }
        
        .text-stroke-white {
          -webkit-text-stroke: 2px #ffffff;
          color: transparent;
        }

        /* MAGENTIC CURSOR */
        .cursor-hovering .ring-inner {
          opacity: 1 !important;
          transform: scale(1.5);
          border-color: #ff0000;
          background-color: rgba(255,0,0,0.1);
        }
        .cursor-magnetic { transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .cursor-magnetic:hover { transform: scale(1.02); z-index: 50; }

        /* INTRO ANIMATIONS (AWWWARDS LEVEL) */
        .aww-intro-container {
          animation: containerFadeOut 3s cubic-bezier(0.76, 0, 0.24, 1) forwards, introShake 3s ease-in-out;
        }
        @keyframes introShake {
          0%, 75% { transform: translate(0, 0); }
          80% { transform: translate(-10px, 8px) rotate(-1deg); }
          85% { transform: translate(10px, -8px) rotate(1deg); }
          90% { transform: translate(-8px, 10px) rotate(-1deg); }
          95% { transform: translate(8px, -10px) rotate(1deg); }
          100% { transform: translate(0, 0); }
        }

        @keyframes containerFadeOut {
          0%, 85% { opacity: 1; filter: blur(0px); }
          100% { opacity: 0; filter: blur(10px); display: none; }
        }

        .aww-line-cut {
          transform: rotate(-12deg);
          animation: lineCut 0.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        @keyframes lineCut {
          0% { transform: scaleX(0) rotate(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleX(1) rotate(-12deg); opacity: 0; }
        }

        .aww-logo-reveal {
          opacity: 0;
          animation: logoAww 2.2s 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes logoAww {
          0% { transform: scale(0.2) rotate(-10deg); opacity: 0; filter: blur(20px) contrast(3); }
          15% { transform: scale(1.2) rotate(0deg); opacity: 1; filter: blur(0) contrast(1); }
          20% { transform: scale(1.1); filter: invert(1); }
          25% { transform: scale(1.15); filter: none; }
          85% { transform: scale(1); opacity: 1; filter: blur(0); }
          100% { transform: scale(4); opacity: 0; filter: blur(15px); }
        }

        .aww-word {
          position: absolute;
          mix-blend-mode: exclusion;
          opacity: 0;
          white-space: nowrap;
        }
        
        /* Choreographed Words */
        .aww-w1 { animation: wordSlam 0.4s 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .aww-w2 { animation: wordSlam 0.4s 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .aww-w3 { animation: wordSlice 0.6s 1.6s cubic-bezier(0.7, 0, 0.3, 1) forwards; }
        .aww-w4 { animation: wordFlash 0.3s 2.2s ease-out forwards; }

        @keyframes wordSlam {
          0% { opacity: 0; transform: scale(4) rotate(5deg); filter: blur(15px); }
          20% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
          80% { opacity: 1; transform: scale(0.95); filter: blur(0); }
          100% { opacity: 0; transform: scale(0.8); filter: blur(5px); }
        }

        @keyframes wordSlice {
          0% { opacity: 0; clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%); transform: scale(1.1) translateX(-5vw); }
          20% { opacity: 1; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: scale(1) translateX(0); }
          70% { opacity: 1; transform: scale(1.05); }
          80% { opacity: 0; transform: scale(1.1) translateX(5vw); clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); }
          100% { opacity: 0; }
        }

        @keyframes wordFlash {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(2); filter: blur(10px); }
        }

        .aww-blood-flash {
          opacity: 0;
          animation: bloodFlashFinal 0.6s 2.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes bloodFlashFinal {
          0% { opacity: 0; }
          40% { opacity: 1; background: #ff0000; }
          100% { opacity: 0; background: transparent; }
        }

        /* AMBIENT EFFECTS */
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0; }
          20%, 22%, 24%, 55% { opacity: 0.8; }
        }
        .animate-flicker { animation: flicker 3s infinite; }
        .animate-flicker-heavy { animation: flicker 0.2s infinite; }

        @keyframes glitch-r {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-8px, 4px); }
          40% { transform: translate(8px, -4px); }
          60% { transform: translate(-4px, 8px); }
          80% { transform: translate(4px, -8px); }
        }
        @keyframes glitch-b {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(8px, -4px); }
          40% { transform: translate(-8px, 4px); }
          60% { transform: translate(4px, -8px); }
          80% { transform: translate(-4px, 8px); }
        }
        .animate-glitch-r { animation: glitch-r 0.15s infinite linear alternate-reverse; filter: hue-rotate(-50deg) saturate(400%); }
        .animate-glitch-b { animation: glitch-b 0.2s infinite linear alternate-reverse; filter: hue-rotate(150deg) saturate(400%); }

        /* GLITCH TEXT PURE CSS */
        .glitch-text { position: relative; }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px; text-shadow: -2px 0 #ff0000; clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px; text-shadow: -2px 0 #00ffff; clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 34px, 0); }
          20% { clip: rect(90px, 9999px, 2px, 0); }
          40% { clip: rect(88px, 9999px, 15px, 0); }
          60% { clip: rect(55px, 9999px, 8px, 0); }
          80% { clip: rect(93px, 9999px, 60px, 0); }
          100% { clip: rect(82px, 9999px, 39px, 0); }
        }
      `}} />

      <CustomCursor />

      {!introDone && <PremiumSchizoIntro onComplete={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <OrganicBloodCanvas />
          <AtmosphericOverlay />
          
          <BackgroundWatermark text={activeTab.toUpperCase()} />

          <header className="fixed top-0 left-0 w-full z-40 p-6 md:p-12 flex justify-between items-start mix-blend-difference pointer-events-none">
            <div className="font-bleach text-3xl md:text-5xl text-white tracking-widest leading-none pointer-events-auto">
              DOSSIER <br/><span className="text-[#ff0000]">NOIR</span>
            </div>
            <div className="font-mono text-xs md:text-sm text-white/50 tracking-[0.3em] text-right">
              ID: {DOSSIER_DATA.id}<br/>
              <span className="text-[#ff0000]">ACCÈS RESTREINT</span>
            </div>
          </header>

          <div className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden custom-scroll relative z-20 flex flex-col md:flex-row">
            
            <nav className="w-full md:w-auto md:fixed md:left-12 md:top-1/2 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-4 p-6 md:p-0 overflow-x-auto no-scrollbar md:overflow-visible mt-24 md:mt-0">
              {tabs.map((tab) => {
                const isActive = nextTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-4 py-3 px-4 md:px-0 transition-all duration-500 cursor-magnetic relative group whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-white/30 hover:text-white/80'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-[#ff0000] shadow-[0_0_10px_#ff0000]' : 'bg-transparent group-hover:bg-white/50'}`}></div>
                    <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase">{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            <main className="flex-1 md:pl-48 lg:pl-64 w-full h-full min-h-screen flex items-center">
              <PageWrapper isTransitioning={isTransitioning}>
                {activeTab === 'general' && <PageGeneral trigger={triggerScramble} />}
                {activeTab === 'personality' && <PagePersonality trigger={triggerScramble} />}
                {activeTab === 'history' && <PageHistory trigger={triggerScramble} />}
                {activeTab === 'objectives' && <PageObjectives trigger={triggerScramble} />}
              </PageWrapper>
            </main>

          </div>
        </>
      )}
    </div>
  );
}