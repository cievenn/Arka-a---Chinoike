import React from 'react';
import { Activity, ShieldAlert, Zap } from 'lucide-react';
import { useScrambleText } from '../hooks/useScrambleText';
import { DOSSIER_DATA } from '../data';
import { Censored } from '../components/ui/Censored';

export const PageGeneral = ({ trigger }) => {
  const title = useScrambleText("MATIÈRE PREMIÈRE", trigger);
  
  return (
    <div className="space-y-24 relative z-10">
      <div className="flex flex-col border-b border-white/10 pb-16 relative group">
        <div className="absolute left-0 bottom-0 w-0 h-px bg-[#ff0000] transition-all duration-1000 group-hover:w-full"></div>
        <h2 className="text-sm md:text-lg font-mono text-[#8b0000] tracking-[0.5em] mb-4 uppercase">{title}</h2>
        <h1 className="text-7xl md:text-[8rem] leading-none font-bleach text-white tracking-tighter uppercase relative">
          <span className="relative z-10">{DOSSIER_DATA.name}</span>
          <span className="absolute -left-2 top-0 text-transparent text-stroke-red opacity-50 select-none pointer-events-none translate-x-2 translate-y-2">{DOSSIER_DATA.name}</span>
        </h1>
        <div className="mt-8 flex items-center gap-6">
           <span className="text-white text-xl md:text-3xl font-serif italic border border-white/20 px-6 py-2 rounded-full">{DOSSIER_DATA.clan}</span>
           <span className="text-[#ff0000] text-3xl font-japanese opacity-60 animate-pulse">{DOSSIER_DATA.kanji}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-12">
          <div className="relative group p-8 bg-black/40 backdrop-blur-md border border-white/5 hover:border-[#ff0000]/50 transition-colors duration-500 cursor-magnetic">
            <h3 className="font-mono text-xs tracking-widest text-[#8b0000] mb-6 uppercase flex items-center gap-4">
              <Activity className="w-4 h-4" /> Analyse Souche
            </h3>
            <ul className="space-y-6 font-serif text-lg text-white/80">
              <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
                <span className="text-white/40 uppercase text-xs font-mono tracking-wider">Localisation</span>
                <span className="text-white">{DOSSIER_DATA.location}</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
                <span className="text-white/40 uppercase text-xs font-mono tracking-wider">Statut Biologique</span>
                <Censored>{DOSSIER_DATA.status}</Censored>
              </li>
            </ul>
          </div>
          
          <div className="p-8 border border-[#ff0000]/30 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,0,0.15),transparent)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#ff0000] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 opacity-10"></div>
            <span className="text-[#ff0000] uppercase text-xs font-mono tracking-widest block mb-2">Groupe Sanguin Identifié</span>
            <span className="text-4xl md:text-5xl font-bleach text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">{DOSSIER_DATA.bloodType}</span>
          </div>
        </div>

        <div className="lg:col-span-7 relative p-10 border-l-4 border-[#ff0000] bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden group">
          <Zap className="absolute -top-10 -right-10 w-64 h-64 text-[#ff0000] opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000 rotate-12 pointer-events-none" />
          
          <h3 className="font-bleach text-4xl text-[#ff0000] tracking-widest mb-8 flex items-center gap-4 relative z-10">
            <ShieldAlert className="w-8 h-8" /> Protocole Zéro
          </h3>
          <div className="text-white/80 font-serif text-xl md:text-2xl leading-relaxed space-y-6 relative z-10">
            <p className="bg-[#1a0000]/50 p-6 border border-[#ff0000]/20 backdrop-blur-md text-white">
              Le sujet souffre d'hallucinations hématiques sévères. <strong className="text-[#ff0000]">Il entend le sang circuler dans les corps environnants.</strong>
            </p>
            <p className="pl-6 border-l-2 border-white/20 text-white/50">
              <Censored>Ne jamais lui tourner le dos.</Censored> S'il fixe vos veines ou si la température de la pièce chute soudainement, <span className="text-[#ff0000] underline decoration-[#8b0000] underline-offset-4 font-bold">neutralisation immédiate autorisée</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
