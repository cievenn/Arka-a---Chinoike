import React from 'react';

export const AtmosphericOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-40">
    <div className="absolute inset-0 bg-noise opacity-30"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
  </div>
);
