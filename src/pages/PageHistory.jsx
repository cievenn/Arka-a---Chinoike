import React from 'react';
import { useScrambleText } from '../hooks/useScrambleText';
import { Censored } from '../components/ui/Censored';

export const PageHistory = ({ trigger }) => {
  const title = useScrambleText("TRAUMA INITIAL", trigger);

  const steps = [
    {
      id: "01",
      subtitle: "Phase Initiale : Cobaye",
      title: "L'Abattoir",
      content: "Enfermé dans les laboratoires clandestins de Kiri. Exposition quotidienne à des toxines coagulantes extrêmement douloureuses pour forcer artificiellement l'éveil du Dojutsu. Les cris des autres sujets sont devenus sa seule berceuse."
    },
    {
      id: "02",
      subtitle: "Phase Critique : Rupture",
      title: "L'Éveil Rouge",
      content: "Le jour où l'esprit a craqué. Surcharge sensorielle absolue lors d'une injection. L'œil s'est ouvert en se gorgeant de son propre sang. Premier massacre documenté dans la salle d'observation (Bilan: 14 morts, aucun corps intact)."
    },
    {
      id: "03",
      subtitle: "Phase Actuelle : Arme",
      title: "Lâché dans la Brume",
      content: "Jugé trop dangereux pour la société, mais trop utile pour être exécuté. Lâché dans l'Académie Ninja comme un prédateur en laisse. L'ANBU attend simplement l'ordre pour le déployer."
    }
  ];

  return (
    <div className="space-y-24 relative z-10">
       <div className="border-b border-white/10 pb-12 mb-16">
         <h1 className="text-6xl md:text-[7rem] leading-none font-bleach text-white tracking-tighter uppercase relative inline-block">
            {title}
            <div className="absolute top-1/2 -right-12 w-24 h-px bg-[#ff0000]"></div>
         </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={step.id} className="group relative flex flex-col pt-12">
            <div className="absolute -top-10 left-0 text-[8rem] font-bleach text-white/5 group-hover:text-[#ff0000]/10 transition-colors duration-700 pointer-events-none select-none z-0">
              {step.id}
            </div>
            
            <div className="relative z-10 border-t-2 border-white/10 group-hover:border-[#ff0000] pt-6 transition-colors duration-500 h-full flex flex-col">
              <span className="font-mono text-xs text-[#ff0000] tracking-widest uppercase block mb-4">
                {step.subtitle}
              </span>
              <h3 className="font-bleach text-3xl md:text-4xl text-white mb-6">
                {step.title}
              </h3>
              <p className="text-white/60 font-serif text-lg leading-relaxed mt-auto">
                {step.content.split(' ').map((word, i) => {
                  const w = word || '';
                  return w.includes('massacre') || w.includes('laboratoires') ? <Censored key={i}>{w} </Censored> : <span key={i}>{w} </span>;
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
