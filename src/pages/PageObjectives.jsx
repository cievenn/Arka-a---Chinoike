import React from 'react';
import { Target, Skull } from 'lucide-react';
import { useScrambleText } from '../hooks/useScrambleText';

export const PageObjectives = ({ trigger }) => {
  const title = useScrambleText("DESSEIN FINAL", trigger);

  return (
    <div className="space-y-24 relative z-10">
      <div className="border-b border-[#ff0000]/20 pb-12">
         <h1 className="text-6xl md:text-[7rem] leading-none font-bleach text-white tracking-tighter uppercase">
            {title}
         </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-12 bg-black/40 border border-white/10 hover:border-[#ff0000] transition-all duration-700 group relative overflow-hidden backdrop-blur-md cursor-magnetic">
          <Target className="w-16 h-16 text-white/20 group-hover:text-[#ff0000] mb-8 transition-colors duration-500" />
          <h3 className="font-bleach text-4xl text-white mb-6">Purgatoire Biologique</h3>
          <p className="text-white/60 font-serif text-xl leading-relaxed">
            Nettoyer Kirigakure de ses mensonges. Traquer les cibles non pas par leurs empreintes, mais par les <strong className="text-[#ff0000] font-sans">variations terrifiées de leur rythme cardiaque</strong>. L'assassinat parfait, chirurgical, sans émotion.
          </p>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ff0000] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-1000"></div>
        </div>

        <div className="p-12 bg-[#0a0000] border border-[#ff0000]/30 hover:border-[#ff0000] transition-all duration-700 group md:col-span-2 relative overflow-hidden shadow-2xl cursor-magnetic">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            <div className="p-6 bg-[#ff0000]/5 border border-[#ff0000]/20 rounded-full shrink-0">
               <Skull className="w-20 h-20 text-[#ff0000] animate-pulse drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
            </div>
            <div>
              <h3 className="font-bleach text-5xl md:text-6xl text-white mb-6">Noyer le Monde</h3>
              <p className="text-white/80 font-serif text-xl leading-relaxed mb-8">
                Atteindre la forme parfaite du Ketsuryugan. Créer un océan écarlate où la réalité illusoire des vivants se dissout dans la froide vérité du sang.
              </p>
              <div className="bg-[#ff0000] text-black font-bleach text-2xl md:text-3xl p-6 tracking-widest inline-block transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
                PAS DE PAIX, SEULEMENT L'HÉMORRAGIE.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
