"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  },[]);

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] =[];
    
    // Cap particles for mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 70;
    const connectionDistance = isMobile ? 100 : 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    window.addEventListener('resize', resize);
    resize();

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            // Faint connecting lines based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-black to-slate-950">
      {/* Soft Gradient Mesh Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen" />
      
      {!prefersReducedMotion && (
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-60"
        />
      )}
    </div>
  );
}