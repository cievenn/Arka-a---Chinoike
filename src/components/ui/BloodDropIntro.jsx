import React, { useEffect, useState } from 'react';

/**
 * BloodDropIntro - Version Épurée (4 secondes)
 * - La goutte tombe.
 * - La flaque s'étend, le logo apparaît intact et noble.
 * - Le logo se détériore organiquement à la fin avant de disparaître.
 */
export const BloodDropIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('black');

  useEffect(() => {
    const timers = [];

    // 1. La goutte tombe très vite
    timers.push(setTimeout(() => setPhase('drop'), 100));
    
    // 2. La flaque s'étend à l'impact et le logo apparaît (normal)
    timers.push(setTimeout(() => setPhase('spread'), 500)); 
    
    // 3. La détérioration du logo commence et l'écran s'estompe
    timers.push(setTimeout(() => setPhase('deteriorate'), 3000));
    
    // 4. Fin exacte de l'intro (4.0s)
    timers.push(setTimeout(() => onComplete(), 4000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]); 

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#080202',
        overflow: 'hidden',
        pointerEvents: 'all',
        // Le conteneur principal fade-out à la fin
        animation: phase === 'deteriorate' ? 'introFadeOut 1s ease-in-out forwards' : 'none'
      }}
    >
      {/* ── CSS DÉDIÉ POUR LES ANIMATIONS ORGANIQUES ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dropFallOrganic {
          0% { transform: translate(-50%, -10vh) scaleY(1) scaleX(1); opacity: 0; }
          10% { opacity: 1; }
          70% { transform: translate(-50%, 35vh) scaleY(1.4) scaleX(0.8); opacity: 1; }
          100% { transform: translate(-50%, 50vh) scaleY(0.2) scaleX(2.5); opacity: 0; }
        }

        @keyframes poolSpreadOrganic {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; border-radius: 50%; filter: blur(2px); }
          30% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.9; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; filter: blur(6px); }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; border-radius: 50% 50% 40% 60% / 60% 40% 50% 50%; filter: blur(8px); }
        }

        /* Apparition noble et nette */
        @keyframes logoEmerge {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); filter: blur(10px); }
          100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1); filter: blur(0px) drop-shadow(0 0 10px rgba(139,0,0,0.5)); }
        }

        /* Détérioration organique : le logo saigne et fond */
        @keyframes logoCorrupt {
          0% { 
            transform: translate(-50%, -50%) scale(1); 
            filter: drop-shadow(0 0 10px rgba(139,0,0,0.5)) blur(0px); 
            opacity: 0.9; 
          }
          40% { 
            transform: translate(-50%, -48%) scale(1.05) skewX(2deg); 
            filter: drop-shadow(0 20px 15px #ff0000) blur(3px) sepia(0.8) hue-rotate(-20deg) saturate(3); 
            opacity: 1; 
          }
          100% { 
            transform: translate(-50%, -35%) scale(1.2) skewX(-5deg) scaleY(1.3); 
            filter: drop-shadow(0 40px 20px #8b0000) blur(15px) sepia(1) hue-rotate(-50deg) saturate(5); 
            opacity: 0; 
          }
        }

        @keyframes introFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
      `}} />

      {/* ── TEXTURE GRAIN / PAPIER DE FOND ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 10
        }}
      />

      {/* ── LA GOUTTE DE SANG ── */}
      {(phase === 'drop' || phase === 'spread' || phase === 'deteriorate') && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            width: '18px',
            height: '30px',
            animation: phase === 'drop' ? 'dropFallOrganic 0.4s cubic-bezier(0.5, 0, 0.8, 0.5) forwards' : 'none',
            opacity: 0,
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="url(#dropGrad)">
            <defs>
              <radialGradient id="dropGrad" cx="50%" cy="70%" r="50%">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#5a0000" />
              </radialGradient>
            </defs>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
      )}

      {/* ── LA FLAQUE DE SANG ── */}
      {(phase === 'spread' || phase === 'deteriorate') && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '45vw',
            height: '45vw',
            minWidth: '300px',
            minHeight: '300px',
            maxWidth: '700px',
            maxHeight: '700px',
            background: 'radial-gradient(circle at 45% 45%, rgba(139,0,0,0.9) 0%, rgba(80,0,0,0.8) 30%, rgba(30,0,0,0.4) 60%, transparent 80%)',
            animation: 'poolSpreadOrganic 3s cubic-bezier(0.1, 0.8, 0.2, 1) forwards',
            opacity: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* ── LE SCEAU DU CLAN CHINOIKE ── */}
      {(phase === 'spread' || phase === 'deteriorate') && (
        <img
          src="https://static.wikia.nocookie.net/ros-rp/images/9/9b/Chinoike_Mon.png/revision/latest?cb=20220225145841"
          alt="Sceau Chinoike"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '22vw',
            height: '22vw',
            minWidth: '140px',
            minHeight: '140px',
            maxWidth: '300px',
            maxHeight: '300px',
            objectFit: 'contain',
            // Le filtre initial rend le logo net et noble (inversé pour être visible sur le sang sombre)
            filter: 'invert(1) sepia(0.5) hue-rotate(-30deg) saturate(1.5)',
            // Si on est en phase de détérioration, on lance l'animation de corruption, sinon l'émergence normale
            animation: phase === 'deteriorate' 
              ? 'logoCorrupt 1s ease-in forwards' 
              : 'logoEmerge 1.5s 0.2s ease-out forwards',
            opacity: 0,
            zIndex: 3,
          }}
        />
      )}
    </div>
  );
};