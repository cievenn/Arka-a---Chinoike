import React from 'react';

/**
 * StutterText
 * Rend plusieurs couches d'un même texte, désalignées et tremblantes,
 * pour simuler le bégaiement visuel d'Isamu.
 *
 * Props:
 *  - children   : string — le texte à afficher
 *  - className  : classes Tailwind supplémentaires pour la couche principale
 *  - intensity  : 'low' | 'med' | 'high' — intensité du tremblement
 *  - as         : balise HTML à utiliser (div, h1, h2, span...)
 */
export const StutterText = ({
  children,
  className = '',
  style = {},
  intensity = 'med',
  as: Tag = 'div',
}) => {
  const text = String(children);

  const configs = {
    low: {
      layers: [
        { dx: 2,  dy: -1, color: 'rgba(139,0,0,0.2)',     blur: 1, dur: '3.1s', delay: '0.1s',  rotate: '-0.3deg' },
        { dx: -3, dy: 2,  color: 'rgba(232,213,176,0.1)', blur: 0, dur: '4.5s', delay: '0.5s',  rotate: '0.2deg' },
      ],
    },
    med: {
      layers: [
        { dx: 4,  dy: -2, color: 'rgba(139,0,0,0.25)',    blur: 1, dur: '2.3s', delay: '0s',    rotate: '-0.5deg' },
        { dx: -4, dy: 3,  color: 'rgba(232,213,176,0.12)',blur: 0, dur: '3.8s', delay: '0.3s',  rotate: '0.3deg' },
        { dx: 6,  dy: 1,  color: 'rgba(80,0,0,0.18)',     blur: 2, dur: '5.1s', delay: '0.7s',  rotate: '-0.2deg' },
      ],
    },
    high: {
      layers: [
        { dx: 6,  dy: -3, color: 'rgba(204,0,0,0.35)',    blur: 0, dur: '0.8s', delay: '0s',    rotate: '-1deg' },
        { dx: -6, dy: 4,  color: 'rgba(232,213,176,0.2)', blur: 1, dur: '1.2s', delay: '0.1s',  rotate: '1.2deg' },
        { dx: 8,  dy: -5, color: 'rgba(80,0,0,0.25)',     blur: 3, dur: '0.6s', delay: '0.05s', rotate: '0.5deg' },
        { dx: -3, dy: 6,  color: 'rgba(204,0,0,0.2)',     blur: 0, dur: '1.5s', delay: '0.2s',  rotate: '-0.8deg' },
      ],
    },
  };

  const animName = intensity === 'high'
    ? 'stutter-violent'
    : intensity === 'low'
    ? 'ghost-drift'
    : 'stutter-shake';

  const layers = configs[intensity]?.layers ?? configs.med.layers;

  return (
    <Tag className={`relative inline-block ${className}`} style={style}>
      {/* Couches fantômes — derrière */}
      {layers.map((l, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position:  'absolute',
            inset:     0,
            color:     l.color,
            filter:    l.blur ? `blur(${l.blur}px)` : undefined,
            transform: `translate(${l.dx}px, ${l.dy}px) rotate(${l.rotate})`,
            animation: `${animName} ${l.dur} ${l.delay} infinite ease-in-out`,
            pointerEvents: 'none',
            userSelect:    'none',
            whiteSpace:    'inherit',
          }}
        >
          {text}
        </span>
      ))}

      {/* Couche principale — devant */}
      <span className="relative z-10">{text}</span>
    </Tag>
  );
};
