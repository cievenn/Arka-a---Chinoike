import React, { useEffect, useState } from 'react';
import { StutterText } from './StutterText';

/**
 * BloodDropIntro
 * Séquence d'introduction :
 *   1. Écran noir — silence
 *   2. Une goutte de sang tombe et s'écrase (animation CSS organique)
 *   3. La tache s'étale et révèle le sceau du clan Chinoike
 *   4. Des pensées paranoïaques frénétiques apparaissent une à une
 *   5. Disparition → contenu principal
 */
export const BloodDropIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('black');   // black → drop → spread → thoughts → out
  const [thoughtIdx, setThoughtIdx] = useState(-1);

  const thoughts = [
    { text: 'ILS SAVENT',                 size: '18vw', rotate: '-3deg', x: '10%',  y: '20%' },
    { text: 'POURQUOI ILS ME REGARDENT ?',size: '6vw',  rotate: '1.5deg', x: '5%', y: '55%' },
    { text: 'LE SANG NE MENT PAS',        size: '11vw', rotate: '-1deg', x: '20%',  y: '72%' },
    { text: 'CHINOIKE',                   size: '22vw', rotate: '2deg',  x: '-2%',  y: '35%', noble: true },
    { text: 'IL FAUT PARTIR',             size: '8vw',  rotate: '-2deg', x: '50%',  y: '15%' },
  ];

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setPhase('drop'),     400));
    timers.push(setTimeout(() => setPhase('spread'),   1400));
    timers.push(setTimeout(() => setPhase('thoughts'), 2200));

    // Pensées apparaissent en cascade
    thoughts.forEach((_, i) => {
      timers.push(setTimeout(() => setThoughtIdx(i), 2400 + i * 500));
    });

    timers.push(setTimeout(() => setPhase('out'),      5600));
    timers.push(setTimeout(() => onComplete(),         6400));

    return () => timers.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isVisible = phase !== 'out';

  return (
    <div
      aria-hidden="true"
      style={{
        position:   'fixed',
        inset:      0,
        zIndex:     500,
        background: '#0a0000',
        overflow:   'hidden',
        opacity:    phase === 'out' ? 0 : 1,
        transition: phase === 'out' ? 'opacity 0.8s ease' : 'none',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      {/* ── Grain de parchemin sur le fond ── */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize:   '200px 200px',
          opacity:     0.6,
          pointerEvents: 'none',
        }}
      />

      {/* ── Goutte de sang ── */}
      {(phase === 'drop' || phase === 'spread' || phase === 'thoughts') && (
        <div
          style={{
            position:   'absolute',
            left:       '50%',
            top:        '10%',
            transform:  'translateX(-50%)',
            width:      '20px',
            height:     '30px',
            background: 'radial-gradient(ellipse at 40% 30%, #cc0000, #3d0000)',
            borderRadius: '50% 50% 60% 60% / 40% 40% 60% 60%',
            animation:  phase === 'drop' ? 'intro-drop 1s cubic-bezier(0.4,0,0.2,1) forwards' : 'none',
            opacity:    phase === 'spread' || phase === 'thoughts' ? 0 : 1,
            transition: 'opacity 0.2s ease',
            boxShadow:  '0 0 20px rgba(139,0,0,0.8)',
          }}
        />
      )}

      {/* ── Tache qui s'étale (impact) ── */}
      {(phase === 'spread' || phase === 'thoughts') && (
        <div
          style={{
            position:     'absolute',
            left:         '50%',
            top:          '48%',
            transform:    'translate(-50%, -50%)',
            width:        '400px',
            height:       '400px',
            background:   'radial-gradient(ellipse at 40% 40%, rgba(160,0,0,0.95) 0%, rgba(100,0,0,0.7) 40%, rgba(61,0,0,0.3) 70%, transparent 100%)',
            borderRadius: '45% 55% 50% 50% / 50% 45% 55% 50%',
            animation:    'intro-spread 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
            filter:       'blur(2px)',
          }}
        >
          {/* Sceau du clan — logo Chinoike */}
          <div
            style={{
              position:   'absolute',
              inset:      0,
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://static.wikia.nocookie.net/ros-rp/images/9/9b/Chinoike_Mon.png/revision/latest?cb=20220225145841"
              alt="Sceau Chinoike"
              style={{
                width:      '160px',
                height:     '160px',
                objectFit:  'contain',
                opacity:    0.7,
                filter:     'drop-shadow(0 0 20px #cc0000) invert(1) sepia(1) saturate(5) hue-rotate(-30deg)',
                animation:  'intro-text-appear 0.6s 0.3s ease forwards',
                animationFillMode: 'both',
                opacity:    0,
              }}
            />
          </div>
        </div>
      )}

      {/* ── Pensées paranoïaques ── */}
      {phase === 'thoughts' && thoughts.map((t, i) => (
        <div
          key={i}
          className={t.noble ? 'font-noble' : ''}
          style={{
            position:    'absolute',
            left:        t.x,
            top:         t.y,
            fontSize:    t.size,
            fontFamily:  t.noble ? '"Cinzel", serif' : '"Crimson Pro", Georgia, serif',
            fontWeight:  900,
            color:       i === 3 ? 'rgba(232,213,176,0.08)' : 'rgba(139,0,0,0.85)',
            transform:   `rotate(${t.rotate})`,
            lineHeight:  1,
            whiteSpace:  'nowrap',
            opacity:     thoughtIdx >= i ? 1 : 0,
            transition:  'opacity 0.3s ease',
            textShadow:  i !== 3 ? '0 0 40px rgba(139,0,0,0.4)' : 'none',
            letterSpacing: '0.05em',
            animation:   thoughtIdx >= i ? `thought-flash ${0.5 + i * 0.3}s ease forwards` : 'none',
            animationFillMode: 'both',
          }}
        >
          {i === 0 ? (
            <StutterText intensity="high">{t.text}</StutterText>
          ) : t.text}
        </div>
      ))}

      {/* ── Flash rouge final ── */}
      {phase === 'out' && (
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: '#8b0000',
            opacity:    0,
            animation:  'reveal-bleed 0.3s ease forwards, outro-flash 0.6s ease forwards',
          }}
        />
      )}
    </div>
  );
};
