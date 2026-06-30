"use client";

import React, { useEffect, useRef } from "react";

const TRAIL_WORDS = [
  "const",
  "async",
  "await",
  "type",
  "interface",
  "fetch()",
  "useState()",
  "<div>",
  "</>",
  "{}",
  "[]",
  "display:flex",
];

const BURST_SYMBOLS = ["{}", "<>", "()", "[]", "=>", "&&", "||", ";"];

interface Particle {
  active: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  scale: number;
  alpha: number;
  maxLife: number;
  life: number;
  text: string;
  isBurst: boolean;
}

export const CodeCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on touch devices or if prefers-reduced-motion is requested
    if (
      typeof window === "undefined" ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Optimized particle recycling pool accommodating slightly denser trail
    const POOL_SIZE = 48;
    const pool: Particle[] = Array.from({ length: POOL_SIZE }, () => ({
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rotation: 0,
      vRot: 0,
      scale: 1,
      alpha: 0,
      maxLife: 600,
      life: 0,
      text: "",
      isBurst: false,
    }));

    let lastSpawnTime = 0;
    let lastX = -100;
    let lastY = -100;

    const spawnParticle = (
      x: number,
      y: number,
      text: string,
      isBurst = false
    ) => {
      // Find inactive particle in pool
      const p = pool.find((item) => !item.active);
      if (!p) return;

      p.active = true;
      p.x = x;
      p.y = y;
      p.text = text;
      p.isBurst = isBurst;

      if (isBurst) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.8 + Math.random() * 2.8;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed - 0.6;
        p.rotation = (Math.random() - 0.5) * 0.5;
        p.vRot = (Math.random() - 0.5) * 0.08;
        p.maxLife = 650 + Math.random() * 200; // Increased lifetime for click burst
        p.scale = 1.15 + Math.random() * 0.15; // Slightly larger, varied scale
        p.alpha = 0.82 + Math.random() * 0.13; // Increased visibility
      } else {
        // Natural drift behind cursor with subtle organic variation
        p.vx = (Math.random() - 0.5) * 0.7;
        p.vy = -0.35 - Math.random() * 0.5; // gentle upward drift
        p.rotation = (Math.random() - 0.5) * 0.35;
        p.vRot = (Math.random() - 0.5) * 0.04;
        p.maxLife = 520 + Math.random() * 160;
        p.scale = 0.92 + Math.random() * 0.16; // Slight variation in particle size
        p.alpha = 0.48 + Math.random() * 0.16; // Increased readability & variation
      }
      p.life = p.maxLife;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      // Reduced thresholds for a smoother, continuous trail while maintaining 60fps
      if (now - lastSpawnTime > 45 && dist > 16) {
        lastSpawnTime = now;
        lastX = e.clientX;
        lastY = e.clientY;

        const word =
          TRAIL_WORDS[Math.floor(Math.random() * TRAIL_WORDS.length)];
        // Slight organic offset behind cursor
        spawnParticle(
          e.clientX + (Math.random() - 0.5) * 14,
          e.clientY + (Math.random() - 0.5) * 14 + 10,
          word,
          false
        );
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Elegant burst of 6-9 programming symbols
      const count = 6 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const symbol =
          BURST_SYMBOLS[Math.floor(Math.random() * BURST_SYMBOLS.length)];
        spawnParticle(e.clientX, e.clientY, symbol, true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? "165, 180, 252" : "79, 70, 229"; // subtle indigo/slate tint

      // Slightly larger font size for improved readability
      ctx.font = "500 13.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < POOL_SIZE; i++) {
        const p = pool[i];
        if (!p.active) continue;

        p.life -= dt;
        if (p.life <= 0) {
          p.active = false;
          continue;
        }

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Progress factor (0 to 1 as it ages)
        const progress = 1 - p.life / p.maxLife;
        const currentScale = p.isBurst
          ? p.scale * (1 - progress * 0.35)
          : p.scale * (1 - progress * 0.3);
        const currentAlpha = p.alpha * Math.sin((p.life / p.maxLife) * Math.PI);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(currentScale, currentScale);

        // Subtle blur effect as it fades out near end of life
        if (progress > 0.55) {
          ctx.filter = `blur(${(progress - 0.55) * 2.5}px)`;
        } else {
          ctx.filter = "none";
        }

        ctx.fillStyle = `rgba(${baseColor}, ${currentAlpha})`;
        ctx.fillText(p.text, 0, 0);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] select-none"
    />
  );
};
