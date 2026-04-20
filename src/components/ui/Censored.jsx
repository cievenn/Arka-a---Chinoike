import React from 'react';

export const Censored = ({ children }) => (
  <span className="relative inline-block cursor-magnetic group overflow-hidden bg-[#1a0000] text-transparent hover:text-white transition-colors duration-500 px-2 py-0.5 select-none">
    <span className="absolute inset-0 bg-[#ff0000] transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10 mix-blend-overlay"></span>
    <span className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-50 group-hover:opacity-0 transition-opacity z-0"></span>
    <span className="relative z-20 font-bold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">{children}</span>
  </span>
);
