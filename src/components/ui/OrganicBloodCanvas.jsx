import React, { useRef, useEffect } from 'react';
import { useMouseLerp } from '../../hooks/useMouseLerp';

export const OrganicBloodCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useMouseLerp();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
      }

      update() {
        const dx = mouse.current.targetX - this.x;
        const dy = mouse.current.targetY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 150 - dist) / 150;

        if (force > 0) {
          this.vx -= (dx / dist) * force * 0.5;
          this.vy -= (dy / dist) * force * 0.5;
          this.size = this.baseSize + (force * 3);
        } else {
          this.size += (this.baseSize - this.size) * 0.1;
        }

        this.vx *= 0.98;
        this.vy *= 0.98;
        
        this.x += this.vx + Math.sin(Date.now() * 0.001 + this.y) * 0.5;
        this.y += this.vy + Math.cos(Date.now() * 0.001 + this.x) * 0.5;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 100 }, () => new Particle());
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;

          if (dist < 15000) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 0, 0, ${1 - dist / 15000})`;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
