"use client";
import { useEffect, useRef } from "react";

export default function FluidButtonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth * dpr;
    const height = canvas.offsetHeight * dpr;
    canvas.width = width;
    canvas.height = height;
    ctx.scale(dpr, dpr);

    const goldPalette = [
      "#FFD700",
      "#FFBF00", 
      "#FFA500",
      "#FF8C00",
      "#FFC200",
      "#FFE135",
      "#FFAB00",
    ];

    const circles = Array.from({ length: 10 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      radius: 40 + Math.random() * 50,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
      color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
      alpha: 0.5 + Math.random() * 0.5,
    }));

    let animationId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      circles.forEach((c) => {
        c.x += c.dx;
        c.y += c.dy;

        if (c.x < 0 || c.x > canvas.offsetWidth) c.dx *= -1;
        if (c.y < 0 || c.y > canvas.offsetHeight) c.dy *= -1;

        const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);
        gradient.addColorStop(0, `${c.color}${Math.floor(c.alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${c.color}${Math.floor((c.alpha * 0.7) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${c.color}00`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Limiter les FPS à 30 pour économiser les ressources
      setTimeout(() => {
        animationId = requestAnimationFrame(draw);
      }, 1000 / 30);
    }

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full rounded-xl z-0 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}