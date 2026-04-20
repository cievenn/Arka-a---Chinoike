import React, { useState } from 'react';

/**
 * ParanoiaReveal
 * Affiche un texte "neutre" en surface.
 * Au hover, le texte est barré et une révélation sanglante,
 * obsessionnelle, apparaît par-dessus — symbolisant l'hyper-
 * interprétation paranoïaque d'Isamu.
 *
 * Props:
 *  - surface   : string — texte banal affiché au repos
 *  - hidden    : string — révélation paranoïaque au hover
 *  - size      : 'sm' | 'md' | 'lg' | 'xl' — taille de révélation
 *  - className : classes supplémentaires sur le wrapper
 */
export const ParanoiaReveal = ({
  surface,
  hidden,
  size = 'md',
  className = '',
}) => {
  const [hovered, setHovered] = useState(false);

  const revealSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-5xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-5xl md:text-7xl leading-none',
  };

  return (
    <span
      className={`relative inline-block group cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Texte de surface — barré au hover */}
      <span
        className="font-body text-parchment/60 italic text-lg md:text-xl leading-relaxed transition-all duration-300"
        style={{
          textDecoration:     hovered ? 'line-through' : 'none',
          textDecorationColor: 'rgba(139,0,0,0.8)',
          textDecorationThickness: '2px',
          opacity: hovered ? 0.3 : 1,
        }}
      >
        {surface}
      </span>

      {/* Révélation sanglante */}
      <span
        aria-hidden={!hovered}
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          font-noble font-black tracking-wider
          text-blood-bright leading-tight
          pointer-events-none select-none
          whitespace-normal
          ${revealSizes[size]}
        `}
        style={{
          opacity:    hovered ? 1 : 0,
          transform:  hovered
            ? 'translateY(-50%) scaleX(1) skewX(0deg)'
            : 'translateY(-50%) scaleX(0) skewX(-5deg)',
          transformOrigin: 'left center',
          transition: 'opacity 0.2s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
          textShadow: '0 0 30px rgba(204,0,0,0.6), 2px 4px 0 rgba(61,0,0,0.8)',
          zIndex:     20,
          width:      '200%',
          maxWidth:   '90vw',
          left:       '-5%',
        }}
      >
        {/* Ligne de sang derrière le texte */}
        <span
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[110%] -z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(61,0,0,0.7) 0%, rgba(139,0,0,0.4) 60%, transparent 100%)',
            animation:  hovered ? 'reveal-bleed 0.25s ease forwards' : 'none',
          }}
        />
        {hidden}
      </span>
    </span>
  );
};
