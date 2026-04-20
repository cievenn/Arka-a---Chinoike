import React, { useRef, useEffect } from 'react';
import { useMouseLerp } from '../../hooks/useMouseLerp';

/**
 * InkCursor
 * Curseur personnalisé — tache d'encre organique.
 * Un blob principal qui suit la souris avec inertie,
 * un point d'encre précis sur la position exacte.
 */
export const InkCursor = () => {
  const blobRef  = useRef(null);
  const dotRef   = useRef(null);
  const mouse     = useMouseLerp();

  useEffect(() => {
    let raf;
    const render = () => {
      // Inertie pour le blob d'encre
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.12;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.12;

      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.targetX}px, ${mouse.current.targetY}px, 0)`;
      }

      // Détecter les éléments interactifs
      const hoveredEls = document.querySelectorAll(':hover');
      let isInteractive = false;
      hoveredEls.forEach(el => {
        if (
          el.tagName === 'BUTTON' ||
          el.tagName === 'A' ||
          el.classList.contains('paranoia-trigger') ||
          el.getAttribute('role') === 'button'
        ) {
          isInteractive = true;
        }
      });

      if (blobRef.current) {
        blobRef.current.style.width  = isInteractive ? '48px' : '28px';
        blobRef.current.style.height = isInteractive ? '48px' : '28px';
        blobRef.current.style.background = isInteractive
          ? 'rgba(139,0,0,0.6)'
          : 'rgba(10,0,0,0.75)';
        blobRef.current.style.borderColor = isInteractive
          ? '#8b0000'
          : 'rgba(232,213,176,0.3)';
      }

      raf = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  return (
    <>
      {/* Blob d'encre principal — suit avec inertie */}
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position:       'fixed',
          top:            '-14px',
          left:           '-14px',
          width:          '28px',
          height:         '28px',
          borderRadius:   '50% 45% 55% 42% / 48% 52% 44% 56%',
          border:         '1px solid rgba(232,213,176,0.3)',
          background:     'rgba(10,0,0,0.75)',
          pointerEvents:  'none',
          zIndex:         9999,
          willChange:     'transform',
          transition:     'width 0.3s ease, height 0.3s ease, background 0.3s ease, border-color 0.3s ease',
          mixBlendMode:   'difference',
          /* Légère ombre d'encre */
          boxShadow:      '0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      />

      {/* Point précis — position exacte du pointeur */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           '-3px',
          left:          '-3px',
          width:         '6px',
          height:        '6px',
          borderRadius:  '50%',
          background:    '#8b0000',
          pointerEvents: 'none',
          zIndex:        10000,
          willChange:    'transform',
          boxShadow:     '0 0 6px rgba(139,0,0,0.8)',
        }}
      />
    </>
  );
};
