import React from 'react';
import { useScrambleText } from '../hooks/useScrambleText';
import { Censored } from '../components/ui/Censored';

export const PagePersonality = ({ trigger }) => {
  const title = useScrambleText("FRACTURE MENTALE", trigger);

  return (
    <div className="space-y-24 relative z-10">
      <div className="border-b border-[#ff0000]/20 pb-12 relative">
         <h1 className="text-6xl md:text-[7rem] leading-none font-bleach text-white tracking-tighter uppercase glitch-text" data-text={title}>
            {title}
         </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#ff0000] before:via-white/10 before:to-transparent md:before:block before:hidden">
        
        <div className="space-y-8 md:pr-12 group">
          <h3 className="font-bleach text-4xl md:text-5xl text-white mb-6 flex items-center gap-4">
            <span className="text-[#ff0000]">01.</span> Le Murmure
          </h3>
          <p className="text-white/70 font-serif text-xl leading-relaxed text-justify">
            La réalité est corrompue. Les mots n'ont plus de sens, seule la <strong className="text-[#ff0000] font-bleach tracking-widest text-2xl">vérité du sang</strong> compte. Il ne voit pas des visages humains, il voit des réseaux artériels palpitants, des cibles organiques. Chaque battement de cœur adverse est une information, <Censored>chaque goutte versée est une phrase complétée.</Censored>
          </p>
        </div>

        <div className="space-y-8 md:pl-12 md:mt-32">
          <h3 className="font-bleach text-4xl md:text-5xl text-white mb-6 flex items-center gap-4">
             <span className="text-[#ff0000]">02.</span> Dissonance
          </h3>
          <div className="bg-[#050000] border border-[#ff0000]/30 p-10 relative overflow-hidden group-hover:border-[#ff0000] transition-colors duration-500 shadow-[20px_20px_0px_rgba(255,0,0,0.05)] cursor-magnetic">
             <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
               <div className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse"></div>
               <p className="text-[#ff0000] text-xs uppercase font-mono tracking-widest">
                Audio Log #44 - CENSURÉ
               </p>
             </div>
             
             <p className="text-white font-serif italic text-2xl md:text-3xl leading-relaxed relative z-10 pl-6 border-l-4 border-[#ff0000]">
               "Ils mentent tous. Leurs bouches mentent... <br/><br/>
               <span className="text-[#ff0000] font-bleach text-4xl not-italic tracking-wider drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">Mais leurs carotides hurlent.</span> <br/><br/>
               Quand je coupe... le mensonge s'écoule enfin."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
