import React from 'react';

export const PageWrapper = ({ children, isTransitioning }) => (
  <div className={`w-full max-w-6xl mx-auto pt-24 pb-32 px-6 md:px-16 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
    isTransitioning 
      ? 'opacity-0 translate-y-20 blur-md scale-[0.98]' 
      : 'opacity-100 translate-y-0 blur-0 scale-100'
  }`}>
    {children}
  </div>
);
