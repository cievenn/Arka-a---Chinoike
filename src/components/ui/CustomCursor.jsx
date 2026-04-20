import React, { useRef, useEffect } from 'react';
import { useMouseLerp } from '../../hooks/useMouseLerp';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useMouseLerp();

  useEffect(() => {
    let animationFrame;
    const render = () => {
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.15;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.targetX}px, ${mouse.current.targetY}px, 0)`;
      }
      
      const hoveredEls = document.querySelectorAll(':hover');
      let isHoveringInteraction = false;
      hoveredEls.forEach(el => {
        if (el.tagName.toLowerCase() === 'button' || el.classList.contains('cursor-magnetic')) {
          isHoveringInteraction = true;
        }
      });

      if (cursorRef.current) {
        if (isHoveringInteraction) {
          cursorRef.current.classList.add('cursor-hovering');
        } else {
          cursorRef.current.classList.remove('cursor-hovering');
        }
      }

      animationFrame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [mouse]);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-8 h-8 border border-[#ff0000] rounded-full pointer-events-none z-[9999] -ml-4 -mt-4 transition-all duration-300 ease-out mix-blend-difference will-change-transform flex items-center justify-center">
         <div className="w-full h-full rounded-full border border-white opacity-0 transition-opacity duration-300 ring-inner"></div>
      </div>
      <div ref={dotRef} className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ff0000] rounded-full pointer-events-none z-[10000] -ml-[3px] -mt-[3px] will-change-transform mix-blend-difference"></div>
    </>
  );
};
