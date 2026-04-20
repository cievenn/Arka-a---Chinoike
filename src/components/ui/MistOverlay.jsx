import React from 'react';

/**
 * MistOverlay
 * Brume dense de Kirigakure — couches de brume semi-transparentes
 * animées à des vitesses différentes créant une profondeur atmosphérique.
 * Matière : parchemin et encre diluée, pas de couleurs digitales.
 */
export const MistOverlay = () => (
  <>
    {/* Couche 1 — brume dense au sol */}
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 w-full pointer-events-none z-10"
      style={{
        height:     '35vh',
        background: 'linear-gradient(to top, rgba(180,160,130,0.07) 0%, transparent 100%)',
        animation:  'mist-float 14s infinite ease-in-out',
        filter:     'blur(8px)',
      }}
    />

    {/* Couche 2 — brume haute qui traverse */}
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full pointer-events-none z-10"
      style={{
        height:     '25vh',
        background: 'linear-gradient(to bottom, rgba(200,185,155,0.04) 0%, transparent 100%)',
        animation:  'mist-float 20s infinite ease-in-out reverse',
        filter:     'blur(12px)',
      }}
    />

    {/* Couche 3 — voile latéral gauche */}
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-full pointer-events-none z-10"
      style={{
        width:      '20vw',
        background: 'linear-gradient(to right, rgba(170,150,120,0.06) 0%, transparent 100%)',
        animation:  'mist-float 18s 3s infinite ease-in-out',
        filter:     'blur(15px)',
      }}
    />

    {/* Vignette d'encre — bords du parchemin assombris */}
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(10,0,0,0.6) 100%)',
      }}
    />
  </>
);
