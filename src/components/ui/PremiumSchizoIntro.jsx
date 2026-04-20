import React, { useEffect } from 'react';
import { AtmosphericOverlay } from './AtmosphericOverlay';

export const PremiumSchizoIntro = ({ onComplete }) => {
  const logoUrl = "https://static.wikia.nocookie.net/ros-rp/images/9/9b/Chinoike_Mon.png/revision/latest?cb=20220225145841";

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#020000] pointer-events-none aww-intro-container">
      <AtmosphericOverlay />

      <div className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-[#ff0000] shadow-[0_0_20px_#ff0000] aww-line-cut z-10 origin-center"></div>

      <div className="relative z-20 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] aww-logo-reveal">
        <img src={logoUrl} alt="Chinoike" className="absolute inset-0 w-full h-full object-contain opacity-90 mix-blend-screen animate-glitch-r filter drop-shadow-[0_0_30px_#ff0000]" />
        <img src={logoUrl} alt="Chinoike" className="absolute inset-0 w-full h-full object-contain opacity-90 mix-blend-screen animate-glitch-b" />
        <img src={logoUrl} alt="Chinoike" className="absolute inset-0 w-full h-full object-contain opacity-100 mix-blend-screen animate-flicker-heavy" />
      </div>

      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        
        <h2 className="aww-word aww-w1 font-bebas text-transparent text-stroke-white text-[20vw] md:text-[15vw] tracking-[0.1em] italic">MENSONGE</h2>
        
        <div className="aww-word aww-w2 flex items-center justify-center">
          <span className="absolute font-japanese text-[#2a0000] text-[40vw] md:text-[30vw] font-black opacity-80 mix-blend-color-dodge">血</span>
          <h2 className="font-serif text-[#ff0000] text-[18vw] md:text-[12vw] font-bold italic z-10 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">SANG</h2>
        </div>
        
        <h2 className="aww-word aww-w3 font-oswald text-[#ffffff] text-[15vw] md:text-[10vw] tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">KUROTSUCHI</h2>
        
        <h2 className="aww-word aww-w4 font-bleach text-transparent text-stroke-red text-[25vw] md:text-[20vw] transform rotate-[-5deg]">FOLIE</h2>
      </div>

      <div className="absolute inset-0 bg-[#ff0000] z-50 aww-blood-flash mix-blend-overlay"></div>
      
      <div className="absolute inset-0 mix-blend-overlay opacity-30 z-40">
         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,0,0,0.1),rgba(0,0,255,0.1))] bg-[length:3px_100%]"></div>
      </div>
    </div>
  );
};
