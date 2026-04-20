import React, { useEffect, useRef, useMemo } from 'react';

/**
 * BloodMetaballs
 * Flaques de sang organique animées via des divs sous un filtre SVG Gooey
 * (feGaussianBlur + feColorMatrix step-function).
 * Les blobs fusionnent comme du vrai sang liquide — zéro ligne numérique.
 *
 * La technique :
 *   1. Divs rondes colorées (rouge sang) animées indépendamment
 *   2. Wrapper avec filter: url(#gooey-blood)
 *   3. feGaussianBlur floute les bords
 *   4. feColorMatrix avec des valeurs élevées crée un seuillage brutal
 *      qui rend les bords nets et fusionne les formes proches
 */
export const BloodMetaballs = ({ count = 8, className = '' }) => {
  const wrapperRef = useRef(null);

  // Génère les blobs de manière déterministe
  const blobs = useMemo(() => {
    const seed = [
      { x: 15,  y: 70,  r: 120, anim: 'blob-drift-1', dur: '9s',  delay: '0s'   },
      { x: 45,  y: 80,  r: 90,  anim: 'blob-drift-2', dur: '13s', delay: '2s'   },
      { x: 70,  y: 60,  r: 140, anim: 'blob-drift-3', dur: '11s', delay: '1s'   },
      { x: 30,  y: 85,  r: 80,  anim: 'blob-drift-4', dur: '15s', delay: '3s'   },
      { x: 80,  y: 90,  r: 100, anim: 'blob-drift-5', dur: '8s',  delay: '0.5s' },
      { x: 55,  y: 75,  r: 70,  anim: 'blob-drift-1', dur: '12s', delay: '4s'   },
      { x: 10,  y: 88,  r: 110, anim: 'blob-drift-3', dur: '10s', delay: '1.5s' },
      { x: 90,  y: 78,  r: 85,  anim: 'blob-drift-2', dur: '14s', delay: '2.5s' },
      { x: 60,  y: 92,  r: 65,  anim: 'blob-drift-4', dur: '7s',  delay: '5s'   },
      { x: 25,  y: 65,  r: 95,  anim: 'blob-drift-5', dur: '16s', delay: '0.8s' },
    ];
    return seed.slice(0, Math.max(count, 4));
  }, [count]);

  return (
    <>
      {/* Filtre SVG Gooey — injecté une seule fois dans le DOM */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <filter id="gooey-blood" x="-50%" y="-50%" width="200%" height="200%">
            {/* Flou gaussien — valeur élevée = fusion organique large */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            {/* ColorMatrix step-function : seuillage brutal pour bords nets */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 26 -10"
              result="gooey"
            />
            {/* Recomposite avec la source pour récupérer la vraie couleur */}
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Wrapper avec le filtre Gooey — les blobs fusionnent ici */}
      <div
        ref={wrapperRef}
        className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
        style={{ filter: 'url(#gooey-blood)' }}
        aria-hidden="true"
      >
        {blobs.map((blob, i) => (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            `${blob.x}%`,
              top:             `${blob.y}%`,
              width:           `${blob.r}px`,
              height:          `${blob.r}px`,
              borderRadius:    '50%',
              transform:       'translate(-50%, -50%)',
              background:      `radial-gradient(circle at 35% 35%,
                                  rgba(160, 0, 0, 0.9) 0%,
                                  rgba(100, 0, 0, 0.85) 50%,
                                  rgba(61, 0, 0, 0.7) 100%)`,
              animation:       `${blob.anim} ${blob.dur} ${blob.delay} infinite ease-in-out`,
              willChange:      'transform',
              // Légère irrégularité organique via border-radius multi-valeurs
              borderRadius:    i % 2 === 0
                ? '60% 40% 55% 45% / 45% 55% 40% 60%'
                : '45% 55% 40% 60% / 60% 40% 55% 45%',
            }}
          />
        ))}
      </div>

      {/* Vignette de fond — assombrit les bords pour donner de la profondeur */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, transparent 30%, rgba(10,0,0,0.85) 100%)',
        }}
      />
    </>
  );
};
