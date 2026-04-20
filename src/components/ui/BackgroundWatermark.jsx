import React from 'react';
import { useScrambleText } from '../../hooks/useScrambleText';

export const BackgroundWatermark = ({ text }) => {
  const scrambled = useScrambleText(text, text);
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bleach text-[#ff0000] opacity-5 pointer-events-none whitespace-nowrap z-0 mix-blend-color-dodge select-none w-full text-center tracking-tighter">
      {scrambled}
    </div>
  );
};
